/*
 * Lesson block: independent / life, loss and condolences.
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
 * The three verbs here — nacer, morir and matar — are handled through ordinary
 * family history, condolences and everyday hyperbole. The two directions are
 * mirrors: same number of dialogue turns, vocabulary entries, culture notes,
 * pitfalls, variations and practice questions, and the same optional slots
 * filled on the same rows. That is enforced by test/shape.test.js, not by good
 * intentions.
 */
lessons.push(
  {
    id: "asking-where-grandmother-was-born",
    level: "Developing · Life and loss",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "courteous",
    verb: "nacer",
    review: "pending",
    es: {
      title: "Asking where grandmother was born",
      situation:
        "You are in Neiva at the birthday of the grandmother of a friend. Someone brings out old photos and a family tree, and you want to ask carefully where she was born, where her children were born, and how that story is told without sounding like a form.",
      setting: {
        who: "Doña Elvira is turning eighty and enjoying the rare chance to correct everyone else's version of the family story. Maya is a foreign family friend who has been invited to help label old photos.",
        what: "A birthday afternoon that turns into a family-history session, with names, towns, dates, and a grandmother who remembers more than the labels do.",
        when: "Late afternoon, after cake, when the younger cousins have drifted away and the adults are still around the table.",
        where: "Neiva, in a family apartment with old photos from Huila spread across the dining table.",
        why: "Because nacer is not only a biology verb. In family history it anchors identity, migration, memory, and the little corrections that keep a family tree honest."
      },
      address: {
        form: "usted",
        who: "Maya uses usted with Doña Elvira, and Doña Elvira uses usted back with affectionate authority.",
        why: "With an older grandmother at her birthday table, usted is both respectful and warm. It lets Maya ask personal questions without sounding entitled to the answers.",
        ifYouSwitch:
          "Tú could sound too quick for a guest, even if everyone is kind. Vos would not fit this family table unless the family itself had already invited that intimacy."
      },
      dialogue: [
        {
          speaker: "Maya",
          target: "Doña Elvira, ¿usted nació aquí en Neiva?",
          translation: "Doña Elvira, were you born here in Neiva?",
          pronunciation: "DOH-nyah el-BEE-rah, oos-TED nah-SYOH ah-KEE en NEI-bah",
          literal: "Doña Elvira, you were-born here in Neiva?",
          why: "Nacer is the verb for being born, and Spanish uses it directly where English needs “be born.” The subject is the baby, not the mother."
        },
        {
          speaker: "Doña Elvira",
          target: "No, mija. Nací en un pueblo cerca de Garzón.",
          translation: "No, dear. I was born in a town near Garzón.",
          pronunciation: "noh, MEE-hah. nah-SEE en oom PWEH-bloh SEHR-kah deh gar-SON",
          literal: "No, my-daughter. I-was-born in a town near Garzón.",
          why: "The first-person preterite is nací. It is one of the most useful forms because people tell birthplace stories in the past."
        },
        {
          speaker: "Maya",
          target: "¿Y sus hijos nacieron allá también?",
          translation: "And were your children born there too?",
          pronunciation: "ee soos EE-hos nah-SYEH-ron ah-YAH tam-BYEN",
          literal: "And your children were-born there also?",
          why: "Nacieron is the plural past form. Family history quickly moves from one person to several branches of the tree."
        },
        {
          speaker: "Doña Elvira",
          target: "Los dos mayores nacieron allá; la menor ya nació en Neiva.",
          translation: "The two older ones were born there; the youngest was born in Neiva.",
          pronunciation: "los dos mah-YOH-res nah-SYEH-ron ah-YAH; lah meh-NOR yah nah-SYOH en NEI-bah",
          literal: "The two older were-born there; the younger already was-born in Neiva.",
          why: "The verb quietly marks a family move. Birthplaces often tell the story before anyone explains the move itself."
        },
        {
          speaker: "Maya",
          target: "Yo nazco en Estados Unidos, pero mi familia viene de otro lado.",
          translation: "I am born in Texas, but my family comes from somewhere else.",
          pronunciation: "yo NAHS-koh en kah-nah-DAH, PEH-roh mee fah-MEE-lyah BYEH-neh deh OH-troh LAH-doh",
          literal: "I am-born in Texas, but my family comes from another side.",
          why: "Nazco is the odd present-tense form: the yo form adds -zc-. Maya's sentence is grammatical, though most adult birthplace stories use nací."
        },
        {
          speaker: "Doña Elvira",
          target: "Entonces escriba: nací en Garzón, crecí en Neiva y aquí nació mi familia.",
          translation: "Then write: I was born in Garzón, I grew up in Neiva, and here my family was born.",
          pronunciation: "en-TON-ses es-KREE-bah: nah-SEE en gar-SON, kreh-SEE en NEI-bah ee ah-KEE nah-SYOH mee fah-MEE-lyah",
          literal: "Then write: I-was-born in Garzón, I-grew in Neiva and here was-born my family.",
          why: "That last line is family history compressed into three places: birthplace, upbringing, and the next generation."
        }
      ],
      vocabulary: [
        {
          term: "nacer",
          explanation:
            "The verb for being born. Spanish says the person “is born” with nacer, not with ser plus an adjective the way English does.",
          literal: "to be born",
          useWhen:
            "Use it for birthplace, birth dates, family trees, biographies, and stories about where a life began.",
          avoidWhen:
            "Avoid making the mother the subject unless you change the whole sentence. “Mi mamá nació” means my mother was born, not that she gave birth.",
          register: "neutral",
          region: "Universal Spanish; the family-history use is completely natural in Colombia.",
          related: ["nazco", "nací", "nació", "nacieron"],
          example: {
            target: "¿Usted nació aquí en Neiva?",
            translation: "Were you born here in Neiva?"
          }
        },
        {
          term: "nací",
          explanation:
            "The first-person past form: I was born. This is the form most adults need when giving their own birthplace.",
          literal: "I was born",
          useWhen:
            "Use it in introductions, family stories, documents, and any sentence that says where your life began.",
          avoidWhen:
            "Avoid present-tense nazco for a normal adult biography unless you have a special reason to speak in the present.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["nacer", "nací en", "nací el", "nacido"],
          example: {
            target: "Nací en un pueblo cerca de Garzón.",
            translation: "I was born in a town near Garzón."
          }
        },
        {
          term: "nazco",
          explanation:
            "The irregular present yo form of nacer. The -zc- appears in verbs like nacer and conocer.",
          literal: "I am born",
          useWhen:
            "Use it in present-tense narration, poetic language, or general statements like “nazco, crezco y aprendo.”",
          avoidWhen:
            "Avoid it when you are simply telling someone your birthplace as an adult. Then nací is almost always what you need.",
          register: "neutral",
          region: "Universal Spanish grammar.",
          related: ["conozco", "crezco", "aparezco", "nacer"],
          example: {
            target: "Yo nazco en Estados Unidos, pero mi familia viene de otro lado.",
            translation: "I am born in Texas, but my family comes from somewhere else."
          }
        },
        {
          term: "nació",
          explanation:
            "The third-person past form: he, she, or it was born. It is the workhorse for family trees.",
          literal: "was born",
          useWhen:
            "Use it for a grandmother, a child, a town, an idea, or any single subject whose beginning you are naming.",
          avoidWhen:
            "Avoid it for more than one person. For plural relatives, use nacieron.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["nací", "naciste", "nacieron", "nacimiento"],
          example: {
            target: "La menor ya nació en Neiva.",
            translation: "The youngest was born in Neiva."
          }
        },
        {
          term: "nacieron",
          explanation:
            "The plural past form: they were born. Family stories need it as soon as siblings or generations enter the sentence.",
          literal: "they were born",
          useWhen:
            "Use it for children, grandparents, siblings, or any plural group with a shared or compared birthplace.",
          avoidWhen:
            "Avoid using nació with a plural subject. “Mis hijos nació” is the kind of agreement error people notice immediately.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["nacimos", "nacieron allá", "los nacidos", "familia"],
          example: {
            target: "Sus hijos nacieron allá también.",
            translation: "Your children were born there too."
          }
        },
        {
          term: "el árbol familiar",
          explanation:
            "A family tree. Colombians also say árbol genealógico, but árbol familiar is transparent and friendly.",
          literal: "the family tree",
          useWhen:
            "Use it when drawing, labeling, or asking about relatives across generations.",
          avoidWhen:
            "Avoid treating it like a legal document. At a family table, the story matters as much as the exact chart.",
          register: "neutral",
          region: "General Colombian; árbol genealógico is the more formal version.",
          related: ["familia", "parientes", "abuelos", "nietos"],
          example: {
            target: "Estamos armando el árbol familiar.",
            translation: "We're putting together the family tree."
          }
        },
        {
          term: "crecí",
          explanation:
            "I grew up. It often sits next to nací because birthplace and upbringing are not always the same place.",
          literal: "I grew",
          useWhen:
            "Use it to separate where someone was born from where they actually grew up.",
          avoidWhen:
            "Avoid assuming “nací en” tells the whole identity story. Colombians may name several places as home.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["crecer", "me crié", "viví", "soy de"],
          example: {
            target: "Nací en Garzón y crecí en Neiva.",
            translation: "I was born in Garzón and grew up in Neiva."
          }
        }
      ],
      note:
        "The form you will use most is nací: “nací en Cali,” “nací en un pueblo,” “nací en el 92.” Keep nazco ready because the present yo form is irregular, but do not force it into every biography. In real family talk, nacer often works with crecer: one place may be where someone was born, another where they grew up, and another where the next generation began.",
      culture: [
        {
          label: "Birthplace is family geography",
          body:
            "In Colombian family talk, asking where someone was born can open a map of moves, work, marriage, study, droughts, roads, and grandparents. It is not just a data point. Ask gently and be ready for the answer to include several places."
        },
        {
          label: "Usted can hold tenderness",
          body:
            "A grandmother saying usted to a younger guest is not necessarily distant. In many Colombian families, usted carries care, hierarchy, and habit together. Answering with usted lets the learner show respect without making the conversation cold."
        },
        {
          label: "Old photos need narrators",
          body:
            "A family photo without the older generation can become a puzzle. Birthplaces, nicknames, and dates often survive because someone writes them down while an elder is still willing to tell the story and correct the confident wrong versions."
        },
        {
          label: "Where you grew up may matter more",
          body:
            "Someone may say “nací en Garzón, pero me crié en Neiva” because the hospital, the childhood home, and the emotional home are not always the same. Spanish gives you the tools to keep those places separate."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “soy nacido en Neiva” as your normal introduction",
          whyItFails:
            "It is understandable but sounds stiff and document-like. In ordinary speech, the clean sentence is “nací en Neiva.”",
          sayInstead: "Nací en Neiva."
        },
        {
          mistake: "Forgetting the -zc- in “yo nazco”",
          whyItFails:
            "The present yo form is irregular. “Yo nazo” sounds like a learner guess; nacer follows the -zc- pattern.",
          sayInstead: "Yo nazco."
        },
        {
          mistake: "Using “nació” with plural relatives",
          whyItFails:
            "The verb has to agree with the subject. One child nació; several children nacieron.",
          sayInstead: "Mis hijos nacieron allá."
        },
        {
          mistake: "Assuming birthplace and hometown are always the same",
          whyItFails:
            "A person can be born in one town and raised in another. Colombian family stories often need both nacer and crecer.",
          sayInstead: "Nací en Garzón y crecí en Neiva."
        }
      ],
      variations: [
        {
          form: "¿Usted nació aquí?",
          register: "polite warm",
          region: "General Colombian",
          whenToUse: "A respectful question to an older person about birthplace."
        },
        {
          form: "Nací en un pueblo cerca de Garzón.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Giving your own birthplace with a nearby landmark."
        },
        {
          form: "Mis hermanos nacieron en otro departamento.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Explaining a family move through the siblings' birthplaces."
        },
        {
          form: "Yo nazco en esta historia mucho después.",
          register: "storytelling",
          region: "General Colombian",
          whenToUse: "Using the irregular present in a narrated story rather than a normal biography."
        },
        {
          form: "Nací allá, pero crecí en Neiva.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Separating birthplace from the place that formed you."
        },
        {
          form: "Mi abuela contaba que allá no había hospital.",
          register: "courteous",
          region: "General Colombian",
          whenToUse: "Passing on family history. Contaba in the imperfect marks a story told many times, not once."
        }
      ],
      prompt: "Doña Elvira says “Nací en un pueblo cerca de Garzón.” What is she telling Maya?",
      choices: [
        "She is saying where she was born, not where she is sitting now.",
        "She is saying where she will move after the birthday party.",
        "She is saying where every grandchild currently goes to school."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which form correctly says “I am born” in the present tense?",
          choices: [
            "Yo naco en una historia larga.",
            "Yo nazco en una historia larga.",
            "Yo nací en una historia larga."
          ],
          answer: 1,
          tests: "the irregular -zc- yo form of nacer"
        },
        {
          prompt: "Which sentence agrees with a plural subject?",
          choices: [
            "Mis hijos nacieron en Garzón.",
            "Mis hijos nació en Garzón.",
            "Mis hijos nazco en Garzón."
          ],
          answer: 0,
          tests: "nacieron as the plural preterite"
        },
        {
          prompt: "Why might someone say both “nací” and “crecí”?",
          choices: [
            "Because one place was birth and another was upbringing.",
            "Because both verbs always mean exactly the same event.",
            "Because crecer is only used for official documents."
          ],
          answer: 0,
          tests: "birthplace versus upbringing"
        },
        {
          prompt: "Which is the most natural spoken introduction?",
          choices: [
            "Soy nacido en Neiva desde niño.",
            "Estoy nacido en Neiva desde niño.",
            "Nací en Neiva y crecí aquí."
          ],
          answer: 2,
          tests: "nací as the natural biography form"
        }
      ]
    },
    en: {
      title: "Contar dónde nació la abuela",
      situation:
        "Usted está en Houston, en el cumpleaños de una abuela colombiana. La familia saca fotos antiguas y un árbol familiar, y usted necesita decir was born, were born y grew up sin traducir nacer como un verbo simple donde el inglés exige be.",
      setting: {
        who: "Elvira cumple ochenta años y disfruta corrigiendo la versión familiar de su propia historia. Maya, una amiga de la familia, ayuda a poner etiquetas a las fotos.",
        what: "Una tarde de cumpleaños que se vuelve sesión de historia familiar, con nombres, pueblos, fechas y una abuela que recuerda más que las etiquetas.",
        when: "Al final de la tarde, después de la torta, cuando los primos menores ya se fueron y los adultos siguen en la mesa.",
        where: "Houston, en el comedor de una familia colombiana con fotos de Huila extendidas sobre la mesa.",
        why: "Porque en inglés nacer se expresa con be born. La gramática parece pasiva, pero es la forma normal para hablar de origen y biografía."
      },
      address: {
        form: "mixed",
        who: "Maya y Elvira usan nombres de pila en inglés, aunque la relación conserve respeto por la edad.",
        why: "El inglés no tiene un usted visible. El cuidado se oye en la pregunta completa, el tono y el tratamiento amable, no en otro pronombre.",
        ifYouSwitch:
          "Insistir en “ma'am” puede sonar demasiado distante en una mesa familiar. Una pregunta bien formulada muestra más respeto que un título repetido."
      },
      dialogue: [
        {
          speaker: "Maya",
          target: "Elvira, were you born here in Houston?",
          translation: "Doña Elvira, ¿usted nació aquí en Houston?",
          pronunciation: "el-VI-ra, uer yu born jir in to-RON-to",
          literal: "Elvira, ¿fue usted nacida aquí en Houston?",
          why: "El inglés necesita be born: were you born. No diga did you born, porque born no funciona como verbo principal en esa pregunta."
        },
        {
          speaker: "Elvira",
          target: "No, dear. I was born in a town near Garzón.",
          translation: "No, mija. Nací en un pueblo cerca de Garzón.",
          pronunciation: "nou, dir. ai uoz born in a taun nir gar-SON",
          literal: "No, querida. Yo fui nacida en un pueblo cerca de Garzón.",
          why: "I was born es la forma que necesita para su propio lugar de nacimiento. El inglés no usa I born solo."
        },
        {
          speaker: "Maya",
          target: "And were your children born there too?",
          translation: "¿Y sus hijos nacieron allá también?",
          pronunciation: "and uer yor CHIL-dren born der tu",
          literal: "¿Y fueron sus hijos nacidos allá también?",
          why: "Were born sirve para plural y para you. La forma de be cambia; born se queda igual."
        },
        {
          speaker: "Elvira",
          target: "The two older ones were born there; the youngest was born in Neiva.",
          translation: "Los dos mayores nacieron allá; la menor nació en Neiva.",
          pronunciation: "de tu OL-der uans uer born der; de YONG-gest uoz born in NEI-va",
          literal: "Los dos mayores fueron nacidos allá; la menor fue nacida en Neiva.",
          why: "Were born para varios hijos, was born para una hija. El verbo be hace el trabajo de concordancia."
        },
        {
          speaker: "Maya",
          target: "I was born in Texas, but my family comes from somewhere else.",
          translation: "Nací en Estados Unidos, pero mi familia viene de otro lado.",
          pronunciation: "ai uoz born in CA-na-da, bot mai FA-mi-li comz from SOM-uer els",
          literal: "Yo fui nacida en Estados Unidos, pero mi familia viene de algún otro lugar.",
          why: "La frase separa nacimiento personal de origen familiar. En inglés, come from puede hablar de una familia, no sólo de un viaje."
        },
        {
          speaker: "Elvira",
          target: "Then write: I was born in Garzón, grew up in Neiva, and my family was born here.",
          translation: "Entonces escriba: nací en Garzón, crecí en Neiva y aquí nació mi familia.",
          pronunciation: "den rait: ai uoz born in gar-SON, gru op in NEI-va, and mai FA-mi-li uoz born jir",
          literal: "Entonces escriba: fui nacida en Garzón, crecí arriba en Neiva, y mi familia fue nacida aquí.",
          why: "Grew up traduce crecí. Birthplace y upbringing no son la misma cosa, y el inglés también puede mantenerlos separados."
        }
      ],
      vocabulary: [
        {
          term: "be born",
          explanation:
            "La estructura inglesa para nacer. Born necesita el verbo be: am, is, are, was o were.",
          literal: "ser nacido / nacer",
          useWhen:
            "Úsela para lugar de nacimiento, fecha de nacimiento, biografías, árboles familiares y recuerdos de origen.",
          avoidWhen:
            "No use born solo como verbo principal. “I born in Neiva” es uno de los errores más visibles.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["was born", "were born", "born in", "birthplace"],
          example: {
            target: "Were you born here in Houston?",
            translation: "¿Usted nació aquí en Houston?"
          }
        },
        {
          term: "I was born",
          explanation:
            "La forma para decir nací. Es una estructura fija que todo hablante usa para su propia biografía.",
          literal: "yo fui nacido / nací",
          useWhen:
            "Úsela cuando dice dónde o cuándo nació usted.",
          avoidWhen:
            "No diga I am born para contar su nacimiento en el pasado. Eso suena como presente extraño o traducción literal.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["born in", "born on", "birthplace", "grew up"],
          example: {
            target: "I was born in a town near Garzón.",
            translation: "Nací en un pueblo cerca de Garzón."
          }
        },
        {
          term: "I am born",
          explanation:
            "Una forma posible en narración dramática o religiosa, pero no la frase normal para una biografía adulta.",
          literal: "yo nazco",
          useWhen:
            "Úsela sólo en estilo narrativo especial, por ejemplo al contar una historia en presente.",
          avoidWhen:
            "Evítela para decir dónde nació usted. En conversación normal, diga I was born.",
          register: "literario o marcado",
          region: "Inglés universal.",
          related: ["I was born", "present tense", "storytelling", "narration"],
          example: {
            target: "In this story, I am born much later.",
            translation: "En esta historia, yo nazco mucho después."
          }
        },
        {
          term: "was born",
          explanation:
            "La forma para una persona singular en pasado: he was born, she was born, the youngest was born.",
          literal: "nació",
          useWhen:
            "Úsela para una abuela, un hijo, una hija, una idea o cualquier sujeto singular.",
          avoidWhen:
            "No la use con varios hijos o varias personas. Ahí necesita were born.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["were born", "born there", "born here", "birth"],
          example: {
            target: "The youngest was born in Neiva.",
            translation: "La menor nació en Neiva."
          }
        },
        {
          term: "were born",
          explanation:
            "La forma plural o de you en pasado: they were born, we were born, you were born.",
          literal: "nacieron / nació usted",
          useWhen:
            "Úsela con hijos, hermanos, generaciones, we, they o preguntas con you.",
          avoidWhen:
            "No la cambie por was cuando el sujeto es plural. El error se oye de inmediato.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["was born", "children", "siblings", "ancestors"],
          example: {
            target: "Were your children born there too?",
            translation: "¿Sus hijos nacieron allá también?"
          }
        },
        {
          term: "family tree",
          explanation:
            "El árbol familiar o árbol genealógico. Es la imagen normal para dibujar generaciones y parentescos.",
          literal: "árbol familiar",
          useWhen:
            "Úsela al hablar de fotos, abuelos, ramas de la familia o investigación familiar.",
          avoidWhen:
            "No espere que family tree incluya automáticamente toda la historia oral. Sólo nombra el esquema.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["relatives", "grandparents", "children", "ancestors"],
          example: {
            target: "We're making a family tree.",
            translation: "Estamos armando el árbol familiar."
          }
        },
        {
          term: "grew up",
          explanation:
            "Creció o me crié. Es la frase que separa el lugar de nacimiento del lugar de crianza.",
          literal: "creció / crecí",
          useWhen:
            "Úsela para decir dónde pasó alguien la infancia o dónde se formó.",
          avoidWhen:
            "No la confunda con was born. Una persona puede be born en un lugar y grow up en otro.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["raised", "childhood", "hometown", "from"],
          example: {
            target: "I was born in Garzón and grew up in Neiva.",
            translation: "Nací en Garzón y crecí en Neiva."
          }
        }
      ],
      note:
        "Para decir nacer en inglés, piense primero en be born. La parte que cambia es be: I was born, she was born, they were born, were you born. Born se queda igual. Después añada grew up cuando el lugar de nacimiento y el lugar de crianza no son el mismo, porque el inglés también distingue esas dos capas de identidad.",
      culture: [
        {
          label: "Birthplace no es toda la historia",
          body:
            "En una familia migrante, “I was born in...” puede abrir una historia de varias ciudades y generaciones. Preguntar con cuidado permite que la otra persona decida cuánto quiere contar."
        },
        {
          label: "El respeto está en la forma completa",
          body:
            "El inglés no puede escoger usted, pero sí puede escoger una pregunta completa y amable. “Were you born here?” con buen tono suena respetuoso; “Where are you from?” puede sentirse más brusco si llega demasiado pronto."
        },
        {
          label: "Las fotos necesitan contexto",
          body:
            "Un family tree organiza nombres, pero las fotos guardan historias que no caben en el cuadro. Por eso born y grew up suelen aparecer juntos cuando alguien mayor explica una familia."
        },
        {
          label: "From puede ser más amplio",
          body:
            "“My family comes from somewhere else” no significa que la familia acaba de llegar. Puede hablar de raíces, abuelos o una historia larga. Es una forma flexible de no simplificar el origen."
        }
      ],
      pitfalls: [
        {
          mistake: "“I born in Neiva.”",
          whyItFails:
            "Born no funciona solo como verbo principal. El inglés necesita be para formar la idea de nacer.",
          sayInstead: "I was born in Neiva."
        },
        {
          mistake: "“Where did you born?”",
          whyItFails:
            "La pregunta no usa did porque born no es el verbo principal. La forma correcta cambia be: were you born.",
          sayInstead: "Where were you born?"
        },
        {
          mistake: "“My children was born there.”",
          whyItFails:
            "Children es plural, así que el verbo be debe ser were. Born no cambia, pero be sí.",
          sayInstead: "My children were born there."
        },
        {
          mistake: "“I was born up in Neiva.”",
          whyItFails:
            "Está mezclando was born con grew up. Born habla del nacimiento; grew up habla de la crianza.",
          sayInstead: "I grew up in Neiva."
        }
      ],
      variations: [
        {
          form: "Were you born here?",
          register: "cortés neutro",
          region: "Inglés universal",
          whenToUse: "Preguntar con respeto por el lugar de nacimiento."
        },
        {
          form: "I was born in a town near Garzón.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Dar su propio lugar de nacimiento con una referencia cercana."
        },
        {
          form: "My siblings were born in another state.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Explicar una mudanza familiar mediante los lugares de nacimiento."
        },
        {
          form: "In this story, I am born much later.",
          register: "storytelling",
          region: "Inglés universal",
          whenToUse: "Usar el presente en narración marcada, no en biografía normal."
        },
        {
          form: "I was born there, but grew up in Houston.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Separar nacimiento y crianza."
        },
        {
          form: "My grandmother told me she was born in a small town, and she used to walk to school.",
          register: "cortés",
          region: "Inglés universal",
          whenToUse: "Para transmitir historia familiar. “Told me she was born” repite lo que ella dijo; “used to walk” describe la rutina de entonces."
        }
      ],
      prompt: "Elvira says “I was born in a town near Garzón.” ¿Qué está diciendo?",
      choices: [
        "Está diciendo dónde nació, no dónde está sentada ahora.",
        "Está diciendo a qué ciudad se mudará después de la fiesta.",
        "Está diciendo dónde estudian actualmente todos sus nietos."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál pregunta está bien formada en inglés?",
          choices: [
            "Where did you born?",
            "Where were you born?",
            "Where do you born?"
          ],
          answer: 1,
          tests: "be born in questions"
        },
        {
          prompt: "¿Cuál frase concuerda con un sujeto plural?",
          choices: [
            "My children were born there.",
            "My children was born there.",
            "My children is born there."
          ],
          answer: 0,
          tests: "were born with plural children"
        },
        {
          prompt: "¿Por qué puede usar born y grew up en la misma historia?",
          choices: [
            "Porque nacimiento y crianza pueden ocurrir en lugares distintos.",
            "Porque las dos frases siempre nombran exactamente el mismo evento.",
            "Porque grew up sólo se usa para documentos legales."
          ],
          answer: 0,
          tests: "birthplace versus upbringing in English"
        },
        {
          prompt: "¿Cuál frase suena más natural en una biografía hablada?",
          choices: [
            "I am born in Houston as a child.",
            "I born in Houston many years ago.",
            "I was born in Houston and grew up here."
          ],
          answer: 2,
          tests: "I was born as the normal biography form"
        }
      ]
    }
  },
  {
    id: "offering-condolences-at-a-novenario",
    level: "Developing · Life and loss",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "intimate",
    verb: "morir",
    review: "pending",
    es: {
      title: "Sitting with a friend at the novenario",
      situation:
        "You are in Mompox at the novenario for the father of a friend. You are not there to explain anything or fill the silence; you are there to greet people, listen, and say a simple condolence without turning the grief of the family into a scene.",
      setting: {
        who: "Laura has lost her father after an illness, and Andrés is a close friend who wants to be present without taking over the moment.",
        what: "A short condolence exchange before the prayers begin, with chairs in the living room and neighbors arriving quietly.",
        when: "The evening of the novenario, several days after the funeral, when the house is tired and still receiving people.",
        where: "Mompox, in a family living room near the river, with relatives and neighbors coming in softly.",
        why: "Because morir is a grammar lesson, but condolences are the human need. The learner must know what to say when someone says se murió mi papá."
      },
      address: {
        form: "tú",
        who: "Andrés and Laura are close friends, so they use tú even in a painful moment.",
        why: "Condolence language can be formal, but friendship does not disappear. Tú lets Andrés speak gently without sounding like a printed card.",
        ifYouSwitch:
          "Usted could work with an older relative or someone less close. With Laura, switching to usted would make the comfort suddenly more distant."
      },
      dialogue: [
        {
          speaker: "Laura",
          target: "Gracias por venir, Andrés. Mi papá se murió el lunes.",
          translation: "Thank you for coming, Andrés. My dad died on Monday.",
          pronunciation: "GRAH-syahs por beh-NEER, an-DRES. mee pah-PAH seh moo-RYOH el LOO-nes",
          literal: "Thanks for coming, Andrés. My dad himself died on Monday.",
          why: "For personal loss, Colombians often say se murió. The reflexive does not change the fact; it carries the emotional closeness of the loss."
        },
        {
          speaker: "Andrés",
          target: "Lo siento mucho, Lau. Te acompaño en el sentimiento.",
          translation: "I'm so sorry, Lau. I share in your grief.",
          pronunciation: "loh SYEN-toh MOO-choh, lau. teh ah-kom-PAH-nyoh en el sen-tee-MYEN-toh",
          literal: "I feel it much, Lau. I accompany you in the feeling.",
          why: "This is exactly the kind of sentence a learner needs ready. It is simple, respectful, and does not try to explain the death."
        },
        {
          speaker: "Laura",
          target: "Murió tranquilo, con mi mamá al lado.",
          translation: "He died peacefully, with my mom beside him.",
          pronunciation: "moo-RYOH tran-KEE-loh, kon mee mah-MAH al LAH-doh",
          literal: "He died calm, with my mom at the side.",
          why: "Murió is the plain report form. After the first emotional se murió, Laura can use murió to give a factual detail."
        },
        {
          speaker: "Andrés",
          target: "Que en paz descanse. Tu papá siempre fue muy querido.",
          translation: "May he rest in peace. Your dad was always very loved.",
          pronunciation: "keh em pahs des-KAN-seh. too pah-PAH SYEM-preh fweh muy keh-REE-doh",
          literal: "May in peace he-rest. Your dad always was very loved.",
          why: "Que en paz descanse, often abbreviated q.e.p.d. in writing, is the standard respectful phrase for someone who has died."
        },
        {
          speaker: "Laura",
          target: "Ayer murieron unas matas del patio y él habría hecho chiste.",
          translation: "Yesterday some plants in the patio died, and he would have made a joke.",
          pronunciation: "ah-YEHR moo-RYEH-ron OO-nahs MAH-tahs del PAH-tyoh ee el ah-BREE-ah EH-choh CHEES-teh",
          literal: "Yesterday died some plants from-the patio and he would-have made joke.",
          why: "Murieron is the plural preterite. The same verb can speak gently about a person and plainly about plants; context controls the weight."
        },
        {
          speaker: "Andrés",
          target: "Un abrazo, Laura. Me quedo aquí contigo un rato.",
          translation: "A hug, Laura. I'll stay here with you for a while.",
          pronunciation: "oon ah-BRAH-soh, LAU-rah. meh KEH-doh ah-KEE kon-TEE-goh oon RRAH-toh",
          literal: "A hug, Laura. I stay here with you a while.",
          why: "Un abrazo can be spoken, texted, or physically offered. In grief, the phrase plus quiet presence is often better than many words."
        }
      ],
      vocabulary: [
        {
          term: "morir",
          explanation:
            "The verb to die. It is irregular and emotionally heavy, so the useful lesson is both grammar and how to speak with care.",
          literal: "to die",
          useWhen:
            "Use it for people, animals, plants, batteries, hopes, or anything that stops living or stops working, with the register adjusted to the subject.",
          avoidWhen:
            "Avoid treating all uses as equally cold. With a loved one, the reflexive se murió often feels more personal.",
          register: "neutral but sensitive",
          region: "Universal Spanish; the condolence formulas here are widely used in Colombia.",
          related: ["muero", "murió", "murieron", "muerto"],
          example: {
            target: "Mi papá se murió el lunes.",
            translation: "My dad died on Monday."
          }
        },
        {
          term: "se murió",
          explanation:
            "The emotionally close way to say someone died. The reflexive can make the loss sound personal rather than clinical.",
          literal: "he/she died",
          useWhen:
            "Use it when speaking about a family member, friend, pet, or someone whose death is being felt by the speaker.",
          avoidWhen:
            "Avoid over-reading it as an accident or a different cause. It marks closeness, not necessarily manner of death.",
          register: "gentle personal",
          region: "Very common Colombian and wider Spanish.",
          related: ["murió", "se nos murió", "falleció", "pésame"],
          example: {
            target: "Mi papá se murió el lunes.",
            translation: "My dad died on Monday."
          }
        },
        {
          term: "murió",
          explanation:
            "The plain preterite form: he or she died. It can be respectful, factual, or official depending on context.",
          literal: "died",
          useWhen:
            "Use it for a factual report, a date, a biography, or a detail after the emotional loss has already been named.",
          avoidWhen:
            "Avoid assuming it is rude. It is not rude by itself; it is simply less emotionally marked than se murió.",
          register: "neutral",
          region: "General Colombian and universal Spanish.",
          related: ["murieron", "murió tranquilo", "murió ayer", "morir"],
          example: {
            target: "Murió tranquilo, con mi mamá al lado.",
            translation: "He died peacefully, with my mom beside him."
          }
        },
        {
          term: "muero",
          explanation:
            "The present yo form of morir. It changes o to ue: muero, not moro.",
          literal: "I die",
          useWhen:
            "Use it for the literal present only rarely, and more often in expressions like “me muero de pena” or “me muero de ganas.”",
          avoidWhen:
            "Avoid using it carelessly in a condolence scene. Hyperbole belongs elsewhere; grief needs calmer words.",
          register: "neutral to emphatic",
          region: "Universal Spanish grammar.",
          related: ["mueres", "muere", "morimos", "mueren"],
          example: {
            target: "Me muero de ganas de verla.",
            translation: "I'm dying to see her."
          }
        },
        {
          term: "muerto",
          explanation:
            "The irregular participle and adjective: dead. It does not become morido.",
          literal: "dead",
          useWhen:
            "Use it in phrases like está muerto, ha muerto, and el difunto has another register.",
          avoidWhen:
            "Avoid saying morido. That form is a learner error.",
          register: "neutral but direct",
          region: "Universal Spanish.",
          related: ["ha muerto", "está muerto", "difunto", "fallecido"],
          example: {
            target: "Su papá ha muerto, y lo sentimos mucho.",
            translation: "Your father has died, and we are very sorry."
          }
        },
        {
          term: "mi más sentido pésame",
          explanation:
            "A formal, respectful condolence phrase. It is especially useful with someone you do not know very well.",
          literal: "my most felt condolence",
          useWhen:
            "Use it at a wake, funeral, novenario, message, or formal condolence note.",
          avoidWhen:
            "Avoid making it the only thing you say to a close friend if a warmer phrase would fit better.",
          register: "formal respectful",
          region: "General Colombian and wider Spanish.",
          related: ["lo siento mucho", "pésame", "condolencias", "un abrazo"],
          example: {
            target: "Mi más sentido pésame para usted y su familia.",
            translation: "My deepest condolences to you and your family."
          }
        },
        {
          term: "que en paz descanse",
          explanation:
            "May he or she rest in peace. In writing it often appears as q.e.p.d.",
          literal: "may in peace he/she rest",
          useWhen:
            "Use it when referring respectfully to the person who died, especially in messages or condolence speech.",
          avoidWhen:
            "Avoid saying it about the grieving person. It refers to the person who has died.",
          register: "respectful",
          region: "General Colombian and wider Spanish.",
          related: ["q.e.p.d.", "descanse en paz", "lo siento", "pésame"],
          example: {
            target: "Que en paz descanse.",
            translation: "May he rest in peace."
          }
        }
      ],
      note:
        "Morir has irregular forms you must learn: muero in the present, murió and murieron in the preterite, muriendo in the gerund, and muerto as the participle. But the human lesson matters more: when someone says “se murió mi papá,” answer with care, not grammar. “Lo siento mucho,” “te acompaño en el sentimiento,” “mi más sentido pésame,” “un abrazo,” and “que en paz descanse” are the phrases that keep you from going silent when kindness is needed.",
      culture: [
        {
          label: "Condolences should not perform",
          body:
            "A condolence in Colombia does not need to be original. In fact, originality can be a burden. The useful phrases are conventional because they let grief stay in the center instead of making the mourner react to your wording."
        },
        {
          label: "Se murió carries closeness",
          body:
            "Learners are often told that reflexive verbs are mechanical. Here the pronoun can carry feeling. “Mi papá se murió” sounds like a loss inside the speaker's life; “mi papá murió” can be a plain report. Both are correct, but they do not feel identical."
        },
        {
          label: "A novenario is continued company",
          body:
            "A novenario is a set of prayers or gatherings over nine days after a death in many Catholic families. Even for people who are not very religious, the repeated visits can help the family avoid being left alone immediately after the funeral."
        },
        {
          label: "Presence can be the sentence",
          body:
            "After “lo siento mucho,” the best thing may be staying, bringing coffee, helping with chairs, or sitting quietly. Language matters because it opens the door; it should not crowd the room."
        }
      ],
      pitfalls: [
        {
          mistake: "Answering a death announcement with a grammar correction",
          whyItFails:
            "If someone says “se murió mi papá,” the moment is human, not grammatical. The reflexive is natural, and correcting it would be cruel.",
          sayInstead: "Lo siento mucho. Te acompaño en el sentimiento."
        },
        {
          mistake: "Saying “morido” as the participle",
          whyItFails:
            "Morir has the irregular participle muerto. “Morido” is not the form people use.",
          sayInstead: "Ha muerto."
        },
        {
          mistake: "Using “moro” for the yo form",
          whyItFails:
            "Morir changes o to ue in the present: yo muero, tú mueres, él muere. “Moro” means something else.",
          sayInstead: "Yo muero."
        },
        {
          mistake: "Saying only “qué pena” and nothing else",
          whyItFails:
            "Qué pena can express sympathy, but alone it may sound thin at a serious loss. A fuller condolence gives the person something steadier.",
          sayInstead: "Lo siento mucho. Mi más sentido pésame."
        }
      ],
      variations: [
        {
          form: "Lo siento mucho.",
          register: "gentle neutral",
          region: "General Colombian",
          whenToUse: "The safest short condolence for a friend or acquaintance."
        },
        {
          form: "Te acompaño en el sentimiento.",
          register: "respectful warm",
          region: "General Colombian",
          whenToUse: "A deeper condolence that says you share the grief without explaining it."
        },
        {
          form: "Mi más sentido pésame.",
          register: "formal respectful",
          region: "General Colombian",
          whenToUse: "A wake, funeral, message, or condolence to someone less close."
        },
        {
          form: "Que en paz descanse.",
          register: "respectful",
          region: "General Colombian",
          whenToUse: "Speaking or writing respectfully about the person who died."
        },
        {
          form: "Mi papá se murió el lunes.",
          register: "personal",
          region: "General Colombian",
          whenToUse: "Naming a close personal loss with emotional weight."
        }
      ],
      prompt: "Laura says “Mi papá se murió el lunes.” What is the best first response?",
      choices: [
        "Lo siento mucho. Te acompaño en el sentimiento.",
        "La forma correcta sería quitar el pronombre reflexivo.",
        "Ese verbo sólo se usa para plantas y animales."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "What does the reflexive add in “se murió mi papá”?",
          choices: [
            "It marks emotional closeness to the loss.",
            "It proves the sentence is not about death.",
            "It makes the verb regular in the past."
          ],
          answer: 0,
          tests: "se murió as emotionally marked personal loss"
        },
        {
          prompt: "Which phrase respectfully means “may he rest in peace”?",
          choices: [
            "Mi más sentido pésame.",
            "Que en paz descanse.",
            "Me muero de pena."
          ],
          answer: 1,
          tests: "que en paz descanse as rest in peace"
        },
        {
          prompt: "Which form is the correct participle of morir?",
          choices: [
            "Morido desde ayer.",
            "Moriendo desde ayer.",
            "Muerto desde ayer."
          ],
          answer: 2,
          tests: "muerto as the irregular participle"
        },
        {
          prompt: "Which pair shows the preterite stem change correctly?",
          choices: [
            "Murió y murieron.",
            "Morió y morieron.",
            "Muere y mueren."
          ],
          answer: 0,
          tests: "morir in the preterite: murió, murieron"
        }
      ]
    },
    en: {
      title: "Dar el pésame en un novenario",
      situation:
        "Usted está en Miami, en una reunión de una familia colombiana después de la muerte del papá de una amiga. Necesita decir died, passed away, I'm so sorry y my condolences con sencillez, sin sonar frío ni convertir el dolor en discurso.",
      setting: {
        who: "Laura perdió a su papá después de una enfermedad, y Andrés es un amigo cercano que quiere acompañarla sin adueñarse del momento.",
        what: "Un saludo breve antes de que empiecen las oraciones, con sillas en la sala y vecinos llegando en voz baja.",
        when: "La noche del novenario, varios días después del funeral, cuando la casa está cansada y todavía recibe gente.",
        where: "Miami, en la sala de una familia colombiana que mantiene la costumbre del novenario lejos de Colombia.",
        why: "Porque died es gramaticalmente sencillo, pero las condolencias son difíciles. El aprendiz necesita frases listas para ser amable bajo presión."
      },
      address: {
        form: "mixed",
        who: "Andrés y Laura son amigos cercanos; en inglés usan nombres y el mismo you que usarían con cualquier persona.",
        why: "El inglés no cambia el pronombre para mostrar cercanía. La suavidad está en “I'm so sorry,” en bajar la voz y en no alargar la explicación.",
        ifYouSwitch:
          "Volverse demasiado formal puede sonar como tarjeta impresa. Con una amiga, una frase corta y sincera vale más que una fórmula rígida."
      },
      dialogue: [
        {
          speaker: "Laura",
          target: "Thank you for coming, Andrés. My dad died on Monday.",
          translation: "Gracias por venir, Andrés. Mi papá se murió el lunes.",
          pronunciation: "zank yu for COM-ing, an-DRES. mai dad daid on MON-dei",
          literal: "Gracias por venir, Andrés. Mi papá murió el lunes.",
          why: "Died es directo y normal. No es grosero si la voz es cuidadosa, aunque passed away también puede suavizar la frase."
        },
        {
          speaker: "Andrés",
          target: "I'm so sorry, Lau. I'm here with you.",
          translation: "Lo siento mucho, Lau. Estoy aquí contigo.",
          pronunciation: "aim so SO-ri, lau. aim jir uid yu",
          literal: "Estoy tan apenado, Lau. Estoy aquí con usted.",
          why: "I'm so sorry es la condolencia básica y necesaria. No hay que inventar algo profundo en el primer segundo."
        },
        {
          speaker: "Laura",
          target: "He passed away peacefully, with my mom beside him.",
          translation: "Murió tranquilo, con mi mamá al lado.",
          pronunciation: "ji past a-UEI PIS-fu-li, uid mai mom bi-SAID jim",
          literal: "Él pasó lejos en paz, con mi mamá junto a él.",
          why: "Passed away suaviza died. Es muy común en condolencias, obituarios y conversaciones familiares."
        },
        {
          speaker: "Andrés",
          target: "May he rest in peace. Your dad was loved by everyone.",
          translation: "Que en paz descanse. Tu papá fue muy querido por todos.",
          pronunciation: "mei ji rest in pis. yor dad uoz lovd bai EV-ri-uan",
          literal: "Que él descanse en paz. Tu papá fue amado por todos.",
          why: "May he rest in peace traduce que en paz descanse. En escritura también verá R.I.P., pero hablado suena mejor completo."
        },
        {
          speaker: "Laura",
          target: "Yesterday some plants died in the patio, and he would have joked about it.",
          translation: "Ayer murieron unas matas del patio, y él habría hecho chiste.",
          pronunciation: "YES-ter-dei som plants daid in de PA-ti-o, and ji wud jav youkt a-BAUT it",
          literal: "Ayer algunas plantas murieron en el patio, y él habría bromeado sobre eso.",
          why: "Died también sirve para plantas, animales o cosas que dejan de funcionar. El contexto le da el peso emocional."
        },
        {
          speaker: "Andrés",
          target: "A hug, Laura. I'll stay here with you for a while.",
          translation: "Un abrazo, Laura. Me quedo aquí contigo un rato.",
          pronunciation: "a jog, LAU-ra. ail stei jir uid yu for a wail",
          literal: "Un abrazo, Laura. Me quedaré aquí con usted por un rato.",
          why: "A hug puede cerrar un mensaje o acompañar un abrazo real. En una pérdida, quedarse un rato puede decir más que hablar mucho."
        }
      ],
      vocabulary: [
        {
          term: "die",
          explanation:
            "El verbo morir. Es directo, normal y sensible al contexto; no es grosero por sí mismo.",
          literal: "morir",
          useWhen:
            "Úselo para personas, animales, plantas, baterías, motores o cualquier cosa que deja de vivir o funcionar.",
          avoidWhen:
            "Si quiere suavizar una condolencia, considere passed away. Pero no tema died cuando la frase es sencilla y respetuosa.",
          register: "neutro pero directo",
          region: "Inglés universal.",
          related: ["died", "dead", "passed away", "death"],
          example: {
            target: "My dad died on Monday.",
            translation: "Mi papá se murió el lunes."
          }
        },
        {
          term: "died",
          explanation:
            "La forma pasada de die. No cambia entre singular y plural: he died, they died.",
          literal: "murió / murieron",
          useWhen:
            "Úsela para decir cuándo murió alguien o para un reporte claro y breve.",
          avoidWhen:
            "No añada did en una afirmación. “He did died” es doble pasado.",
          register: "neutro pero directo",
          region: "Inglés universal.",
          related: ["die", "passed away", "dead", "died peacefully"],
          example: {
            target: "Some plants died in the patio.",
            translation: "Murieron unas matas del patio."
          }
        },
        {
          term: "passed away",
          explanation:
            "Una forma más suave de decir died, muy usada para personas en contextos de duelo.",
          literal: "falleció / se murió",
          useWhen:
            "Úsela en condolencias, obituarios o conversaciones donde quiera sonar delicado.",
          avoidWhen:
            "No la use para baterías o plantas normales. Ahí died es suficiente.",
          register: "suave respetuoso",
          region: "Inglés universal.",
          related: ["died", "loss", "condolences", "peacefully"],
          example: {
            target: "He passed away peacefully.",
            translation: "Murió tranquilo."
          }
        },
        {
          term: "I'm so sorry",
          explanation:
            "La condolencia básica en inglés. En una muerte, significa lo siento mucho, no una disculpa por culpa propia.",
          literal: "lo siento mucho",
          useWhen:
            "Úsela inmediatamente cuando alguien le cuenta una pérdida.",
          avoidWhen:
            "No la alargue con explicaciones sobre usted. La frase debe sostener a la otra persona, no hablar de su incomodidad.",
          register: "suave neutro",
          region: "Inglés universal.",
          related: ["I'm sorry for your loss", "my condolences", "I'm here", "a hug"],
          example: {
            target: "I'm so sorry, Lau.",
            translation: "Lo siento mucho, Lau."
          }
        },
        {
          term: "dead",
          explanation:
            "El adjetivo muerto. Es gramaticalmente común, pero puede sonar demasiado brusco con una pérdida reciente.",
          literal: "muerto",
          useWhen:
            "Úselo para hechos claros, animales, plantas, baterías o contextos donde no necesita suavizar.",
          avoidWhen:
            "Evítelo como primera frase de condolencia. “Your father is dead” suena frío y duro.",
          register: "directo",
          region: "Inglés universal.",
          related: ["died", "death", "alive", "passed away"],
          example: {
            target: "The battery is dead.",
            translation: "La batería está muerta."
          }
        },
        {
          term: "my deepest condolences",
          explanation:
            "Una condolencia formal y respetuosa, parecida a mi más sentido pésame.",
          literal: "mis más profundas condolencias",
          useWhen:
            "Úsela en mensajes, velorios, notas formales o con alguien que no conoce muy bien.",
          avoidWhen:
            "Con una amiga cercana puede sonar un poco de tarjeta; I'm so sorry puede ser más humano.",
          register: "formal respetuoso",
          region: "Inglés universal.",
          related: ["my condolences", "I'm sorry for your loss", "sympathy", "loss"],
          example: {
            target: "My deepest condolences to you and your family.",
            translation: "Mi más sentido pésame para usted y su familia."
          }
        },
        {
          term: "may he rest in peace",
          explanation:
            "La forma completa de que en paz descanse para un hombre. Para una mujer: may she rest in peace.",
          literal: "que él descanse en paz",
          useWhen:
            "Úsela al hablar respetuosamente de la persona que murió.",
          avoidWhen:
            "No la dirija a la persona doliente. Se refiere a quien murió, no a quien recibe el pésame.",
          register: "respetuoso",
          region: "Inglés universal.",
          related: ["rest in peace", "R.I.P.", "passed away", "condolences"],
          example: {
            target: "May he rest in peace.",
            translation: "Que en paz descanse."
          }
        }
      ],
      note:
        "Die es directo, died es su pasado, dead es el adjetivo y passed away suaviza la noticia cuando habla de una persona. Pero lo más importante es tener una frase lista: “I'm so sorry,” “I'm sorry for your loss,” “my deepest condolences,” “I'm here with you,” “may he rest in peace.” En inglés, como en español, la mejor condolencia suele ser breve.",
      culture: [
        {
          label: "La frase convencional ayuda",
          body:
            "En inglés no necesita una condolencia original. “I'm so sorry” funciona porque no obliga a la persona doliente a reaccionar a una frase complicada. La sencillez protege el momento."
        },
        {
          label: "Passed away suaviza",
          body:
            "Passed away es común para personas porque baja la dureza de died. No es obligatorio, pero ayuda cuando usted no conoce bien a la familia o quiere sonar especialmente delicado."
        },
        {
          label: "Died no siempre es frío",
          body:
            "Muchos hispanohablantes temen que died sea brutal. Puede serlo si se usa sin cuidado, pero “my dad died on Monday” es una frase normal y humana cuando la dice la persona que sufrió la pérdida."
        },
        {
          label: "Quedarse vale más que explicar",
          body:
            "Después de la frase, no llene todo con palabras. “I'll stay here with you for a while” ofrece presencia, que muchas veces es más útil que un discurso sobre el dolor."
        }
      ],
      pitfalls: [
        {
          mistake: "“He did died on Monday.”",
          whyItFails:
            "Died ya está en pasado. Si añade did en una afirmación, está marcando el pasado dos veces.",
          sayInstead: "He died on Monday."
        },
        {
          mistake: "“Your father is dead” como primer pésame",
          whyItFails:
            "Aunque dead es correcto, esa frase suena fría y demasiado brusca para abrir una condolencia.",
          sayInstead: "I'm so sorry for your loss."
        },
        {
          mistake: "“My more felt condolences.”",
          whyItFails:
            "Es una traducción literal de mi más sentido pésame. En inglés la fórmula natural es my deepest condolences.",
          sayInstead: "My deepest condolences."
        },
        {
          mistake: "“Rest in peace to you.”",
          whyItFails:
            "Rest in peace se refiere a la persona que murió, no a la persona que recibe el pésame.",
          sayInstead: "May he rest in peace."
        }
      ],
      variations: [
        {
          form: "I'm so sorry.",
          register: "suave neutro",
          region: "Inglés universal",
          whenToUse: "La condolencia breve más segura al oír una pérdida."
        },
        {
          form: "I'm sorry for your loss.",
          register: "respetuoso neutro",
          region: "Inglés universal",
          whenToUse: "Una frase clara para velorios, mensajes o conocidos."
        },
        {
          form: "My deepest condolences.",
          register: "formal respetuoso",
          region: "Inglés universal",
          whenToUse: "Un mensaje formal o una familia que usted no conoce bien."
        },
        {
          form: "May he rest in peace.",
          register: "respetuoso",
          region: "Inglés universal",
          whenToUse: "Hablar con respeto del hombre que murió."
        },
        {
          form: "My dad passed away on Monday.",
          register: "suave personal",
          region: "Inglés universal",
          whenToUse: "Contar una pérdida personal con una forma más suave que died."
        }
      ],
      prompt: "Laura says “My dad died on Monday.” ¿Cuál es la mejor primera respuesta?",
      choices: [
        "I'm so sorry. I'm here with you.",
        "You should say passed away, not died.",
        "That verb only works for plants."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase suaviza died en una condolencia?",
          choices: [
            "He passed away peacefully.",
            "He did died peacefully.",
            "He dead peacefully."
          ],
          answer: 0,
          tests: "passed away as a gentle death phrase"
        },
        {
          prompt: "¿Cuál frase traduce mi más sentido pésame con naturalidad?",
          choices: [
            "My more felt condolence.",
            "My deepest condolences.",
            "My sentiment accompanies."
          ],
          answer: 1,
          tests: "my deepest condolences as the natural formula"
        },
        {
          prompt: "¿Cuál frase usa dead de manera natural y no brusca?",
          choices: [
            "Your father is dead today.",
            "My condolences are dead.",
            "The phone battery is dead."
          ],
          answer: 2,
          tests: "dead as an adjective, safer with things"
        },
        {
          prompt: "¿Cuál frase respeta a la persona que murió?",
          choices: [
            "May he rest in peace.",
            "Rest in peace to you.",
            "You are rest in peace."
          ],
          answer: 0,
          tests: "may he rest in peace se refiere a la persona fallecida"
        }
      ]
    }
  },
  {
    id: "using-matar-for-hunger-and-laughter",
    level: "Developing · Life and loss",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "intimate",
    verb: "matar",
    review: "pending",
    es: {
      title: "Saying the hunger is killing you",
      situation:
        "You are in Popayán helping organize photos for a family gathering. Nobody is talking about violence: everyone is tired, hungry, and laughing. You have to understand why matar keeps appearing as everyday exaggeration.",
      setting: {
        who: "Camilo and Jo are friends sorting family photos before relatives arrive. They are hungry, behind schedule, and using big words for small discomforts.",
        what: "A messy table, photo envelopes, labels, and a search for lunch before hunger ruins everyone's patience.",
        when: "Saturday just before lunch, after a long morning of errands and family preparation.",
        where: "Popayán, in a dining room where the table has disappeared under photo albums and marker pens.",
        why: "Because matar is serious in its literal sense, but in ordinary speech it often appears as safe hyperbole: hunger kills me, you are killing me, that joke killed me."
      },
      address: {
        form: "vos",
        who: "Camilo uses vos with Jo because they are close friends in a southwest Colombian setting, and Jo follows the friendly register.",
        why: "Voseo is heard in parts of southwestern Colombia, including Cauca. Here it marks a relaxed friendship, not a regional performance.",
        ifYouSwitch:
          "Tú would be understood and neutral. Usted would make the joking sound drier unless the friends already used usted affectionately."
      },
      dialogue: [
        {
          speaker: "Camilo",
          target: "Jo, apurate, que me mata el hambre.",
          translation: "Jo, hurry up, hunger is killing me.",
          pronunciation: "jo, ah-poo-RAH-teh, keh meh MAH-tah el AM-breh",
          literal: "Jo, hurry-yourself, because hunger kills me.",
          why: "This is ordinary hyperbole, not danger. Me mata el hambre means “I'm starving” with Colombian drama."
        },
        {
          speaker: "Jo",
          target: "A mí me mata este desorden de fotos.",
          translation: "This mess of photos is killing me.",
          pronunciation: "ah mee meh MAH-tah ES-teh des-OR-den deh FOH-tos",
          literal: "To me kills this disorder of photos.",
          why: "Matar can exaggerate tiredness, annoyance, love, beauty, or laughter. The context makes it figurative."
        },
        {
          speaker: "Camilo",
          target: "No digás eso, que mi tía dice que este cuarto es un matadero.",
          translation: "Don't say that; my aunt says this room is a slaughterhouse.",
          pronunciation: "noh dee-GAHS EH-soh, keh mee TEE-ah DEE-seh keh ES-teh KWAR-toh es oon mah-tah-DEH-roh",
          literal: "Don't say that, because my aunt says this room is a slaughterhouse.",
          why: "Matadero literally means slaughterhouse, but informally it can describe chaos. Use it carefully; it is vivid and informal."
        },
        {
          speaker: "Jo",
          target: "Tu tía me mató de la risa con ese comentario.",
          translation: "Your aunt killed me with laughter with that comment.",
          pronunciation: "too TEE-ah meh mah-TOH deh lah RREE-sah kon EH-seh koh-men-TAH-ryoh",
          literal: "Your aunt killed me of the laughter with that comment.",
          why: "Me mató de la risa is a common way to say something made you laugh very hard."
        },
        {
          speaker: "Camilo",
          target: "Literalmente, matar es otra cosa; aquí estamos exagerando.",
          translation: "Literally, killing is something else; here we're exaggerating.",
          pronunciation: "lee-teh-ral-MEN-teh, mah-TAR es OH-trah KOH-sah; ah-KEE es-TAH-mos ek-sah-heh-RAHN-doh",
          literal: "Literally, to kill is another thing; here we-are exaggerating.",
          why: "The lesson names the literal meaning without building the scene around harm. That distinction matters with a strong verb."
        },
        {
          speaker: "Jo",
          target: "Listo, almorcemos ya, antes de que el hambre nos mate a todos.",
          translation: "Okay, let's have lunch now, before hunger kills us all.",
          pronunciation: "LEES-toh, al-mor-SEH-mos yah, AN-tes deh keh el AM-breh nos MAH-teh ah TOH-dos",
          literal: "Ready, let's-lunch now, before hunger kills us all.",
          why: "The subjunctive mate appears after antes de que. The tone remains comic because hunger is the subject."
        }
      ],
      vocabulary: [
        {
          term: "matar",
          explanation:
            "Literally, to kill. In everyday speech, it is also a very common exaggeration for hunger, laughter, tiredness, pressure, or charm.",
          literal: "to kill",
          useWhen:
            "Use it figuratively when the context is safely ordinary: hunger, a joke, a workload, a beautiful view, or a long wait.",
          avoidWhen:
            "Avoid joking with it around real death, grief, danger, or people who may not share the tone. The literal meaning is serious.",
          register: "informal when figurative",
          region: "General Colombian and wider Spanish; figurative use is very common.",
          related: ["me mata", "me mató", "matadero", "morir"],
          example: {
            target: "Me mata el hambre.",
            translation: "Hunger is killing me."
          }
        },
        {
          term: "me mata el hambre",
          explanation:
            "A dramatic way to say I am very hungry. It is about discomfort, not danger.",
          literal: "hunger kills me",
          useWhen:
            "Use it with friends or family when you are starving and want the sentence to sound playful.",
          avoidWhen:
            "Avoid it in a serious setting where exaggeration would sound childish or insensitive.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["tengo hambre", "me muero de hambre", "almorzar", "antojo"],
          example: {
            target: "Apurate, que me mata el hambre.",
            translation: "Hurry up, hunger is killing me."
          }
        },
        {
          term: "me estás matando",
          explanation:
            "You are killing me. It can mean pressure, impatience, teasing, suspense, or emotional overwhelm.",
          literal: "you are killing me",
          useWhen:
            "Use it when someone is making you wait, laugh, worry, or work too hard in a non-literal situation.",
          avoidWhen:
            "Avoid it with someone who might hear blame instead of joking exaggeration.",
          register: "friendly informal",
          region: "General Colombian and wider Spanish.",
          related: ["me mata", "me desespera", "me tiene mal", "no puedo más"],
          example: {
            target: "Me estás matando con tanta demora.",
            translation: "You're killing me with all this delay."
          }
        },
        {
          term: "me mató de la risa",
          explanation:
            "It killed me with laughter. A common way to say something made you laugh hard.",
          literal: "it killed me of laughter",
          useWhen:
            "Use it after a joke, comment, story, meme, or family remark that genuinely made you laugh.",
          avoidWhen:
            "Avoid it in a condolence or serious death context. The same verb would clash with the moment.",
          register: "friendly informal",
          region: "General Colombian and wider Spanish.",
          related: ["me dio risa", "me hizo reír", "qué risa", "morirse de risa"],
          example: {
            target: "Tu tía me mató de la risa.",
            translation: "Your aunt killed me with laughter."
          }
        },
        {
          term: "un matadero",
          explanation:
            "Literally a slaughterhouse; informally, a chaotic mess. It is vivid, so use it only where exaggeration fits.",
          literal: "a slaughterhouse",
          useWhen:
            "Use it for a room, process, line, inbox, or event that feels chaotic and badly organized.",
          avoidWhen:
            "Avoid it in polished speech or around real suffering. The image is strong.",
          register: "very informal",
          region: "Understood in Colombia; figurative force depends on tone.",
          related: ["desorden", "caos", "despelote", "desastre"],
          example: {
            target: "Este cuarto es un matadero.",
            translation: "This room is total chaos."
          }
        },
        {
          term: "mate",
          explanation:
            "The present subjunctive form of matar. It appears after phrases like antes de que.",
          literal: "kill / may kill",
          useWhen:
            "Use it after triggers such as antes de que, para que, or ojalá when the killing is hypothetical or figurative.",
          avoidWhen:
            "Avoid using mata where the subjunctive is required after antes de que.",
          register: "neutral grammar",
          region: "Universal Spanish.",
          related: ["mata", "mató", "matar", "antes de que"],
          example: {
            target: "Antes de que el hambre nos mate.",
            translation: "Before hunger kills us."
          }
        },
        {
          term: "literalmente",
          explanation:
            "Literally. A useful word when you need to separate the serious meaning from the joking one.",
          literal: "literally",
          useWhen:
            "Use it to clarify that a strong word is or is not being used in its exact sense.",
          avoidWhen:
            "Avoid overusing it as filler. Here it matters because matar has a serious literal meaning.",
          register: "neutral",
          region: "General Colombian and wider Spanish.",
          related: ["en serio", "figuradamente", "exagerar", "de verdad"],
          example: {
            target: "Literalmente, matar es otra cosa.",
            translation: "Literally, killing is something else."
          }
        }
      ],
      note:
        "Matar is a serious verb with a literal meaning you should respect. But in ordinary Colombian speech you will often hear it safely as exaggeration: “me mata el hambre,” “me estás matando,” “me mató de la risa,” “esto es un matadero.” The skill is not pretending the literal meaning disappears; the skill is reading the context and not using comic hyperbole anywhere near real grief or danger.",
      culture: [
        {
          label: "Hyperbole is ordinary",
          body:
            "Colombian Spanish, like English, uses big words for small discomforts. Hunger kills, delays kill, jokes kill, and a messy room becomes a matadero. Everyone understands the scale from context."
        },
        {
          label: "Tone protects the word",
          body:
            "The difference between safe exaggeration and bad taste is not only grammar. It is who is present, what has just happened, and whether the room is joking. A learner should copy the tone before copying the phrase."
        },
        {
          label: "Do not bring it into grief",
          body:
            "The same course block teaches condolences, so the boundary matters. Around a wake, illness, or fresh loss, avoid playful matar phrases. The word is too strong when actual death is in the air."
        },
        {
          label: "Matadero is vivid, not polite",
          body:
            "Calling a room or process un matadero can be funny among friends, but it is not polished speech. Use it for chaos with people who enjoy exaggeration, not in a formal meeting or delicate visit."
        }
      ],
      pitfalls: [
        {
          mistake: "Hearing “me mata el hambre” as a literal emergency",
          whyItFails:
            "In an ordinary lunch scene, the phrase means the speaker is very hungry. Context keeps the meaning figurative.",
          sayInstead: "Understand it as “I'm starving.”"
        },
        {
          mistake: "Using matar jokes near a real condolence",
          whyItFails:
            "The figurative use is common, but grief changes the room. A playful phrase can sound careless when someone is mourning.",
          sayInstead: "Use lo siento mucho, not matar hyperbole."
        },
        {
          mistake: "Saying “antes de que el hambre nos mata”",
          whyItFails:
            "After antes de que, Spanish uses the subjunctive. The form is mate, not mata.",
          sayInstead: "Antes de que el hambre nos mate."
        },
        {
          mistake: "Treating “matadero” as a polite word for busy",
          whyItFails:
            "Matadero is vivid and informal. It means chaos, not merely a place with many people.",
          sayInstead: "Use hay mucho desorden for a neutral phrase."
        }
      ],
      variations: [
        {
          form: "Me mata el hambre.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Playfully saying you are very hungry."
        },
        {
          form: "Me estás matando con tanta demora.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Joking that someone's delay or suspense is too much."
        },
        {
          form: "Me mató de la risa.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Saying a comment or story made you laugh hard."
        },
        {
          form: "Este cuarto es un matadero.",
          register: "very informal",
          region: "General Colombian",
          whenToUse: "Calling a room chaotic among people who like strong exaggeration."
        },
        {
          form: "Antes de que el hambre nos mate.",
          register: "playful informal",
          region: "General Colombian",
          whenToUse: "Using the subjunctive after antes de que in a joking hunger sentence."
        }
      ],
      prompt: "Camilo says “me mata el hambre.” What does he mean in this ordinary lunch scene?",
      choices: [
        "He is very hungry and using playful exaggeration.",
        "He is giving a formal report about a dangerous event.",
        "He is offering condolences to someone in the family."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence means something made Jo laugh hard?",
          choices: [
            "Me mató de la risa.",
            "Me nació en la risa.",
            "Me murió en la risa."
          ],
          answer: 0,
          tests: "me mató de la risa as laughter hyperbole"
        },
        {
          prompt: "Which form belongs after “antes de que”?",
          choices: [
            "Antes de que el hambre nos mata.",
            "Antes de que el hambre nos mate.",
            "Antes de que el hambre nos mató."
          ],
          answer: 1,
          tests: "mate as present subjunctive after antes de que"
        },
        {
          prompt: "When should you avoid playful matar phrases?",
          choices: [
            "When the room is about real grief or recent loss.",
            "When friends joke about being hungry before lunch.",
            "When a funny aunt makes everyone laugh loudly."
          ],
          answer: 0,
          tests: "avoiding matar hyperbole around grief"
        },
        {
          prompt: "What does “este cuarto es un matadero” mean here?",
          choices: [
            "This room is perfectly calm.",
            "This room is full of chaos.",
            "This room is a family tree."
          ],
          answer: 1,
          tests: "matadero as informal chaos"
        }
      ]
    },
    en: {
      title: "Decir que el hambre te mata",
      situation:
        "Usted está en Manchester ayudando a ordenar fotos para una reunión familiar. Nadie está hablando de violencia: todos están cansados, con hambre y riéndose. Necesita entender killing me, killed me y a mess como exageraciones seguras en inglés cotidiano.",
      setting: {
        who: "Camilo y Jo son amigos que ordenan fotos familiares antes de que lleguen los parientes. Tienen hambre, van tarde y usan palabras grandes para molestias pequeñas.",
        what: "Una mesa desordenada, sobres de fotos, marcadores y la búsqueda urgente de almuerzo antes de que se acabe la paciencia.",
        when: "Sábado antes del almuerzo, después de una mañana larga de vueltas y preparación familiar.",
        where: "Manchester, en un comedor donde la mesa desapareció bajo álbumes, sobres y marcadores.",
        why: "Porque kill es literal y serio, pero killing me y killed me aparecen mucho como hipérbole segura: hambre, risa, demora, cansancio."
      },
      address: {
        form: "mixed",
        who: "Camilo y Jo son amigos cercanos; el inglés usa el mismo you en toda la escena.",
        why: "La confianza se oye en la exageración y en las contracciones, no en un pronombre distinto. “You're killing me” puede ser amistoso si el tono lo sostiene.",
        ifYouSwitch:
          "Volver la frase demasiado formal destruiría el chiste. En inglés, la informalidad está en el ritmo de la frase y en el contexto compartido."
      },
      dialogue: [
        {
          speaker: "Camilo",
          target: "Jo, hurry up, hunger is killing me.",
          translation: "Jo, apurate, que me mata el hambre.",
          pronunciation: "yo, JE-ri op, JON-ger iz KIL-ing mi",
          literal: "Jo, apúrese, el hambre me está matando.",
          why: "Killing me es hipérbole cotidiana. En esta escena no habla de peligro; significa que Camilo tiene muchísima hambre."
        },
        {
          speaker: "Jo",
          target: "This mess of photos is killing me.",
          translation: "A mí me mata este desorden de fotos.",
          pronunciation: "dis mes ov FO-touz iz KIL-ing mi",
          literal: "Este desorden de fotos me está matando.",
          why: "La misma frase sirve para cansancio, presión o fastidio. El contexto doméstico mantiene el sentido figurado."
        },
        {
          speaker: "Camilo",
          target: "Don't say that; my aunt says this room is a total mess.",
          translation: "No digás eso, que mi tía dice que este cuarto es un matadero.",
          pronunciation: "dount sei dat; mai ant sez dis rum iz a TO-tal mes",
          literal: "No diga eso; mi tía dice que este cuarto es un desorden total.",
          why: "Total mess traduce el matadero figurado sin traer la imagen literal. En inglés es más seguro y natural para caos doméstico."
        },
        {
          speaker: "Jo",
          target: "Your aunt's comment killed me.",
          translation: "Tu tía me mató de la risa con ese comentario.",
          pronunciation: "yor ants CO-ment kild mi",
          literal: "El comentario de su tía me mató.",
          why: "Killed me puede significar que algo dio mucha risa. Si hace falta, añada with laughter, pero entre amigos suele bastar."
        },
        {
          speaker: "Camilo",
          target: "Literally, kill means something else; here we're exaggerating.",
          translation: "Literalmente, matar es otra cosa; aquí estamos exagerando.",
          pronunciation: "LI-te-ra-li, kil minz SOM-zing els; jir uir eg-ZA-je-rei-ting",
          literal: "Literalmente, matar significa otra cosa; aquí estamos exagerando.",
          why: "Kill conserva su sentido literal serio. La frase enseña la frontera entre significado exacto e hipérbole cotidiana."
        },
        {
          speaker: "Jo",
          target: "Okay, let's eat now, before hunger kills us all.",
          translation: "Listo, almorcemos ya, antes de que el hambre nos mate a todos.",
          pronunciation: "ou-KEI, lets it nau, bi-FOR JON-ger kilz os ol",
          literal: "Listo, comamos ahora, antes de que el hambre nos mate a todos.",
          why: "Before hunger kills us all mantiene el chiste. En inglés no hay subjuntivo visible; la forma kills basta."
        }
      ],
      vocabulary: [
        {
          term: "kill",
          explanation:
            "Literalmente matar. En hipérbole cotidiana, también aparece para hambre, risa, presión o cansancio.",
          literal: "matar",
          useWhen:
            "Úselo figuradamente sólo cuando el contexto es claramente seguro: hambre, demora, chistes, trabajo o cansancio.",
          avoidWhen:
            "No lo use como chiste cerca de una pérdida real, una enfermedad grave o una situación peligrosa.",
          register: "informal cuando figurado",
          region: "Inglés universal.",
          related: ["killing me", "killed me", "dead", "literal"],
          example: {
            target: "Hunger is killing me.",
            translation: "Me mata el hambre."
          }
        },
        {
          term: "hunger is killing me",
          explanation:
            "Una forma dramática de decir que tiene muchísima hambre. No describe una emergencia real en una escena normal.",
          literal: "el hambre me está matando",
          useWhen:
            "Úsela con amigos o familia cuando quiere sonar hambriento y juguetón.",
          avoidWhen:
            "Evítela en contextos serios donde la exageración puede sonar infantil o insensible.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["I'm starving", "I'm hungry", "let's eat", "food"],
          example: {
            target: "Hurry up, hunger is killing me.",
            translation: "Apurate, que me mata el hambre."
          }
        },
        {
          term: "you're killing me",
          explanation:
            "Me estás matando. Puede expresar presión, impaciencia, risa, suspenso o cansancio.",
          literal: "usted me está matando",
          useWhen:
            "Úsela cuando alguien lo hace esperar, reír, preocuparse o trabajar demasiado en una situación no literal.",
          avoidWhen:
            "No la use si la otra persona puede oír una acusación seria en vez de una broma.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["killing me", "too much", "come on", "I can't"],
          example: {
            target: "You're killing me with this delay.",
            translation: "Me estás matando con esta demora."
          }
        },
        {
          term: "that killed me",
          explanation:
            "Eso me mató, muchas veces de la risa. Es una hipérbole común después de un comentario gracioso.",
          literal: "eso me mató",
          useWhen:
            "Úsela después de un chiste, comentario, historia o video que le dio mucha risa.",
          avoidWhen:
            "No la use en un contexto de duelo. El mismo verbo chocaría con el momento.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["made me laugh", "cracked me up", "funny", "with laughter"],
          example: {
            target: "Your aunt's comment killed me.",
            translation: "El comentario de tu tía me mató de la risa."
          }
        },
        {
          term: "a total mess",
          explanation:
            "Una forma natural y segura de decir que algo es un caos, sin usar una imagen tan fuerte como matadero.",
          literal: "un desorden total",
          useWhen:
            "Úsela para cuartos, procesos, filas, correos o planes que están muy desorganizados.",
          avoidWhen:
            "No traduzca matadero literalmente como slaughterhouse si sólo quiere decir caos doméstico.",
          register: "informal neutro",
          region: "Inglés universal.",
          related: ["chaos", "messy", "disaster", "disorganized"],
          example: {
            target: "This room is a total mess.",
            translation: "Este cuarto es un matadero."
          }
        },
        {
          term: "kills",
          explanation:
            "La forma de presente para he, she o it: hunger kills, the delay kills, this heat kills.",
          literal: "mata",
          useWhen:
            "Úsela cuando el sujeto singular causa el efecto literal o figurado.",
          avoidWhen:
            "No añada una s si el sujeto es plural o si usa modal: hunger kills, but delays kill and hunger can kill.",
          register: "neutro de gramática",
          region: "Inglés universal.",
          related: ["kill", "killed", "killing", "killer"],
          example: {
            target: "Before hunger kills us all.",
            translation: "Antes de que el hambre nos mate a todos."
          }
        },
        {
          term: "literally",
          explanation:
            "Literalmente. Sirve para separar el sentido exacto de la exageración.",
          literal: "literalmente",
          useWhen:
            "Úsela cuando necesita aclarar si una palabra fuerte se usa en serio o en broma.",
          avoidWhen:
            "No la use como relleno constante. Aquí importa porque kill tiene un sentido literal serio.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["figuratively", "exactly", "seriously", "exaggerating"],
          example: {
            target: "Literally, kill means something else.",
            translation: "Literalmente, matar significa otra cosa."
          }
        }
      ],
      note:
        "Kill es una palabra seria, pero el inglés cotidiano también la usa como exageración segura: “hunger is killing me,” “you're killing me,” “that killed me.” Para traducir matadero figurado, muchas veces conviene decir a total mess y no slaughterhouse. La habilidad es leer el contexto: con hambre y risa, la hipérbole funciona; cerca del duelo o peligro real, no.",
      culture: [
        {
          label: "La hipérbole también existe en inglés",
          body:
            "Los angloparlantes también usan palabras grandes para molestias pequeñas. Starving, killing me y that killed me pueden ser bromas normales si todos entienden el tono."
        },
        {
          label: "Mess evita una imagen pesada",
          body:
            "Cuando un colombiano dice matadero para caos, la traducción literal slaughterhouse puede sonar demasiado gráfica. A total mess comunica el efecto sin arrastrar la imagen literal."
        },
        {
          label: "El contexto manda",
          body:
            "La misma frase “you're killing me” puede ser cariñosa, impaciente o inapropiada. Antes de copiarla, mire si la otra persona está jugando con el mismo tono."
        },
        {
          label: "No lo lleve al pésame",
          body:
            "En un bloque que también enseña condolencias, la frontera es parte de la lección. Evite kill jokes cerca de muerte real, enfermedad grave o duelo reciente."
        }
      ],
      pitfalls: [
        {
          mistake: "“This room is a slaughterhouse” para desorden común",
          whyItFails:
            "La traducción literal de matadero puede sonar demasiado gráfica en inglés. Para caos doméstico, a total mess es más natural.",
          sayInstead: "This room is a total mess."
        },
        {
          mistake: "“The hunger kills me” como frase idiomática fija",
          whyItFails:
            "Se entiende, pero hunger is killing me suena mucho más natural para la queja del momento.",
          sayInstead: "Hunger is killing me."
        },
        {
          mistake: "“That killed me” en una visita de pésame",
          whyItFails:
            "Como hipérbole de risa puede funcionar, pero cerca de una muerte real suena insensible.",
          sayInstead: "I'm so sorry for your loss."
        },
        {
          mistake: "“Before hunger kill us all.”",
          whyItFails:
            "Hunger es singular en presente simple, así que el verbo lleva s: kills.",
          sayInstead: "Before hunger kills us all."
        }
      ],
      variations: [
        {
          form: "Hunger is killing me.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Decir de forma juguetona que tiene muchísima hambre."
        },
        {
          form: "You're killing me with this delay.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Bromear que la demora o el suspenso ya es demasiado."
        },
        {
          form: "That comment killed me.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Decir que un comentario le dio mucha risa."
        },
        {
          form: "This room is a total mess.",
          register: "informal neutro",
          region: "Inglés universal",
          whenToUse: "Traducir matadero figurado sin una imagen demasiado fuerte."
        },
        {
          form: "Before hunger kills us all.",
          register: "playful informal",
          region: "Inglés universal",
          whenToUse: "Mantener la exageración de hambre en una frase con before."
        }
      ],
      prompt: "Camilo says “hunger is killing me.” ¿Qué quiere decir en esta escena normal?",
      choices: [
        "Tiene muchísima hambre y está exagerando en broma.",
        "Está dando un informe formal sobre un evento peligroso.",
        "Está dando el pésame a una persona de la familia."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase significa que un comentario le dio mucha risa?",
          choices: [
            "That comment killed me.",
            "That comment borned me.",
            "That comment died me."
          ],
          answer: 0,
          tests: "that killed me as laughter hyperbole"
        },
        {
          prompt: "¿Cuál frase traduce mejor un matadero como caos doméstico?",
          choices: [
            "This room is a slaughterhouse.",
            "This room is a total mess.",
            "This room is a quiet tree."
          ],
          answer: 1,
          tests: "a total mess for figurative matadero"
        },
        {
          prompt: "¿Cuándo debería evitar bromas con kill?",
          choices: [
            "Cuando hay duelo real o pérdida reciente.",
            "Cuando amigos bromean antes del almuerzo.",
            "Cuando un comentario hace reír a todos."
          ],
          answer: 0,
          tests: "avoiding kill hyperbole near grief"
        },
        {
          prompt: "¿Cuál frase tiene la concordancia correcta?",
          choices: [
            "Before hunger kill us all.",
            "Before hunger killing us all.",
            "Before hunger kills us all."
          ],
          answer: 2,
          tests: "kills with singular hunger"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/38-developing-life-and-loss.js");
