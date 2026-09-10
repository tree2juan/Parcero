/*
 * Lesson block: foundation / calendar, color and feeling (grammar, not verbs).
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules -- `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * These three lessons are GRAMMAR lessons. Each spines on exactly one entry
 * from data/structures.js, named in its `structure` field, and carries no
 * `verb`. That is how the coverage report proves the structure curriculum is
 * actually taught rather than merely listed, exactly as test/shape.test.js and
 * scripts/check-lesson-block.js require.
 *
 * The three structures here -- dates-and-calendar, color-and-description and
 * feelings-and-states -- close measured holes in the corpus: only 3 month names
 * and no full dates, 18 color words, and 6 emotion words across 208 lessons.
 * The Spanish scenes sit on the coffee axis -- Pereira, Manizales and Armenia --
 * so the texture is paisa-adjacent but regionally its own: fincas, wool ruanas,
 * the Cocora valley and Quindío tourism, not Bogotá or Medellín. The two
 * directions mirror: the same people have the same exchange, row for row, and
 * the taught pattern is actually spoken in the Spanish dialogue.
 */
lessons.push(
  {
    id: "dates-and-the-calendar-in-pereira",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "home-and-neighborhood",
    register: "courteous",
    pathways: ["foundation", "year-12"],
    structure: "dates-and-calendar",
    review: "pending",
    es: {
      title: "Reservando la visita a la finca",
      situation:
        "Sara, una estudiante que lleva poco en el Eje Cafetero, quiere conocer una finca cafetera cerca de Pereira. Llama a don Aníbal, el dueño, para cuadrar el día. Entre los dos van fijando la fecha exacta: el mes, el día de la semana, los festivos que se atraviesan y hasta el año en que se fundó la finca.",
      setting: {
        who: "Don Aníbal is a paisa coffee-grower in his sixties who runs farm tours; he speaks warmly and formally. Sara is a foreign student a few weeks into life in Pereira, booking her first finca visit and her first real date in Spanish.",
        what: "A booking built entirely on dates: which month, which day of the week, whether a holiday falls on it, and from what year the farm has been running.",
        when: "Late April, with the main coffee harvest about to start and the calendar filling up with long weekends.",
        where: "Pereira, in the coffee-growing Eje Cafetero of Risaralda, over the phone to a nearby finca.",
        why: "Saying a date -- the fifth of May, a Monday, in nineteen ninety -- is everyday grammar the corpus barely teaches: only three month names and no full dates in the whole course. Get it right and you can book, plan and diarise anywhere in Colombia."
      },
      address: {
        form: "usted",
        who: "Sara and don Aníbal use usted. A young stranger and an older host in the coffee region settle into usted at once, and don Aníbal warms it with paisa tags like mija and sumercé.",
        why: "The paisa interior leans to usted even for closeness, and between a student and an older farm-owner it is the natural, respectful default. Tú would sound oddly familiar on a first phone call here.",
        ifYouSwitch:
          "If Sara suddenly used tú, don Aníbal would understand her fine, but it would sound forward on a first call -- a small breach of the easy respect that usted keeps between a visitor and an older host."
      },
      dialogue: [
        {
          speaker: "Sara",
          target: "Buenas, don Aníbal. Quería reservar la visita a la finca para el primero de junio, ¿le sirve?",
          translation: "Hello, don Aníbal. I wanted to book the farm visit for the first of June, does that work for you?",
          pronunciation: "BWE-nas, don a-NÍ-bal. ke-RÍ-a re-ser-VAR la vi-SI-ta a la FIN-ka PA-ra el pri-ME-ro de HU-nyo",
          literal: "Good-ones, don Aníbal. I-wanted to-reserve the visit to the farm for the first of June, to-you it-serves?",
          why: "The first of the month is “el primero”, an ordinal, never “el uno”. And the date frame is bare: “el primero de junio”, with “de” meaning of and the month in lowercase. There is no “of the” to translate."
        },
        {
          speaker: "Aníbal",
          target: "Uy, mija, el primero de junio no, que es festivo. Mejor el lunes 5 de mayo, que la cosecha está linda.",
          translation: "Oh, dear, not the first of June, it's a holiday. Better Monday the 5th of May, when the harvest looks lovely.",
          pronunciation: "uy, MI-ja, el pri-ME-ro de HU-nyo no, ke es fes-TI-vo. me-HOR el LU-nes SIN-ko de MA-yo",
          literal: "Ooh, my-dear, the first of June no, that is holiday. Better the Monday 5 of May, that the harvest is lovely.",
          why: "Here is the core pattern spoken whole: “el lunes 5 de mayo” -- article, day, number, “de”, month. The month “mayo” stays lowercase, and nothing stands in for “of the”. “Mija” (mi hija) is paisa affection."
        },
        {
          speaker: "Sara",
          target: "¿El 5 de mayo? Perfecto. ¿Y abren los domingos también, o solo entre semana?",
          translation: "The 5th of May? Perfect. And are you open on Sundays too, or only on weekdays?",
          pronunciation: "el SIN-ko de MA-yo? per-FEK-to. i A-bren los do-MIN-gos tam-BYEN, o SO-lo EN-tre se-MA-na?",
          literal: "The 5 of May? Perfect. And you-open the Sundays also, or only between week?",
          why: "“Los domingos”, with the plural article, means Sundays in general -- every Sunday. Say “el domingo” and it would mean this coming Sunday only. That el/los switch is the whole difference between a habit and a single day."
        },
        {
          speaker: "Aníbal",
          target: "Los domingos abrimos hasta octubre; en diciembre cerramos por las fiestas. La finca es de mil novecientos noventa.",
          translation: "On Sundays we open until October; in December we close for the holidays. The farm is from nineteen ninety.",
          pronunciation: "los do-MIN-gos a-BRI-mos AS-ta ok-TU-bre; en di-SYEM-bre se-RRA-mos por las FYES-tas. la FIN-ka es de mil no-ve-SYEN-tos no-VEN-ta",
          literal: "The Sundays we-open until October; in December we-close for the parties. The farm is of one-thousand nine-hundreds ninety.",
          why: "The year is read as one whole number: “mil novecientos noventa”, literally a thousand nine-hundred ninety -- never split into pairs like the English “nineteen ninety”. Months “octubre” and “diciembre” stay lowercase too."
        },
        {
          speaker: "Sara",
          target: "Listo. Entonces el martes... no, el lunes 5 de mayo. ¿A las ocho de la mañana está bien?",
          translation: "Great. So Tuesday... no, Monday the 5th of May. Is eight in the morning all right?",
          pronunciation: "LIS-to. en-TON-ses el MAR-tes... no, el LU-nes SIN-ko de MA-yo. a las O-cho de la ma-NYA-na es-TA byen?",
          literal: "Ready. So the Tuesday... no, the Monday 5 of May. At the eight of the morning is well?",
          why: "Sara reuses the frame and self-corrects the day: “el martes”, “el lunes”, each with its article. Days of the week are lowercase and take “el” for a specific one. The date itself never changes shape: “el 5 de mayo”."
        },
        {
          speaker: "Aníbal",
          target: "A las ocho, hecho. Del 5 al 30 de mayo tenemos recorridos todos los días, menos el primero de mayo.",
          translation: "Eight o'clock, done. From the 5th to the 30th of May we have tours every day, except the first of May.",
          pronunciation: "a las O-cho, E-cho. del SIN-ko al TREIN-ta de MA-yo te-NE-mos re-ko-RRI-dos TO-dos los DÍ-as, ME-nos el pri-ME-ro de MA-yo",
          literal: "At the eight, done. Of-the 5 to-the 30 of May we-have tours all the days, less the first of May.",
          why: "A date range uses “del … al …”: “del 5 al 30 de mayo”, from the 5th to the 30th of May, the month named once at the end. And again the 1st is “el primero de mayo”, the only day that is ordinal."
        }
      ],
      vocabulary: [
        {
          term: "la fecha",
          explanation:
            "The date. To ask it, Colombians say “¿Qué fecha es hoy?” or, very commonly, “¿A cómo estamos?” -- literally “at what are we?”, meaning what's the date.",
          literal: "the date",
          useWhen:
            "Asking or giving the day's date: booking, filling a form, diarising a plan.",
          avoidWhen:
            "You mean the time of day -- that is “la hora”, a different question altogether.",
          register: "neutral",
          region: "Universal Spanish; “¿a cómo estamos?” is especially common in Colombia.",
          related: ["¿a cómo estamos?", "el día", "hoy", "mañana"],
          example: {
            target: "¿A cómo estamos hoy? A 5 de mayo.",
            translation: "What's the date today? The 5th of May."
          }
        },
        {
          term: "el + número + de + mes",
          explanation:
            "The date frame itself: article, number, “de”, month. “El 5 de mayo” = the 5th of May. There is no word for “of the” and the month is never capitalised.",
          literal: "the + number + of + month",
          useWhen:
            "Any specific calendar date: “el 12 de octubre”, “el 24 de diciembre”, “el 3 de marzo”.",
          avoidWhen:
            "It is the first of the month -- then the number becomes the ordinal “primero”, not “uno”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["primero", "el mes", "la fecha", "de"],
          example: {
            target: "Nos vemos el 5 de mayo, un lunes.",
            translation: "We'll meet on the 5th of May, a Monday."
          }
        },
        {
          term: "primero",
          explanation:
            "The 1st of the month is the only day said as an ordinal: “el primero de junio”. Every other day is a plain number -- “el 2”, “el 3”, “el 4”.",
          literal: "first",
          useWhen:
            "The first day of any month: “el primero de enero”, “el primero de mayo”.",
          avoidWhen:
            "You reach for “el uno de junio” -- understood, but Colombians say “primero”, not “uno”, for the date.",
          register: "neutral",
          region: "Universal Spanish; “el primero” for the 1st is the standard across Colombia.",
          related: ["el 2 de mayo", "uno", "ordinal", "la fecha"],
          example: {
            target: "El primero de mayo es festivo en Colombia.",
            translation: "The first of May is a holiday in Colombia."
          }
        },
        {
          term: "los meses del año",
          explanation:
            "The twelve months: enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre. All lowercase, always.",
          literal: "the months of the year",
          useWhen:
            "Naming any month, alone or inside a date: “en agosto”, “el 15 de febrero”.",
          avoidWhen:
            "You capitalise them out of English habit -- Spanish months are never capitalised mid-sentence.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["enero", "diciembre", "el año", "la estación"],
          example: {
            target: "En diciembre cerramos; en enero volvemos a abrir.",
            translation: "In December we close; in January we open again."
          }
        },
        {
          term: "el lunes / los lunes",
          explanation:
            "With the singular article, “el lunes” is this coming Monday. With the plural, “los lunes” is every Monday. Days of the week are lowercase and never take “en”.",
          literal: "the Monday / the Mondays",
          useWhen:
            "Fixing a specific day (“el lunes 5”) or a habit (“los domingos abrimos”).",
          avoidWhen:
            "You say “en lunes” -- Spanish uses the article, not a preposition, for a day.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["el martes", "los fines de semana", "entre semana", "hoy"],
          example: {
            target: "Los domingos abrimos; el lunes 5 hay recorrido.",
            translation: "On Sundays we open; on Monday the 5th there's a tour."
          }
        },
        {
          term: "los años (leídos enteros)",
          explanation:
            "A year is read as one whole number, not in pairs: “mil novecientos noventa” for 1990, “dos mil veinticuatro” for 2024. English breaks it into “nineteen / ninety”; Spanish does not.",
          literal: "the years (read whole)",
          useWhen:
            "Saying when something happened or was founded: “nací en mil novecientos noventa y ocho”.",
          avoidWhen:
            "You try to split it like English -- “diecinueve noventa” is a calque and sounds wrong.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["mil novecientos", "dos mil", "el siglo", "la fecha"],
          example: {
            target: "La finca es de mil novecientos noventa.",
            translation: "The farm is from nineteen ninety."
          }
        },
        {
          term: "el festivo / el puente",
          explanation:
            "A “festivo” is a public holiday; when it lands on a Monday it makes a “puente”, a long weekend. Colombia has many, and they reshape any booking calendar.",
          literal: "the holiday / the bridge",
          useWhen:
            "Checking whether a date is free: “ese lunes es festivo”, “hay puente ese fin de semana”.",
          avoidWhen:
            "You mean a party or a saint's day specifically -- that is “la fiesta” or “el santo”, not the day off itself.",
          register: "friendly informal",
          region: "Colombia; “puente” for a long weekend is the everyday word nationwide.",
          related: ["el festivo", "el fin de semana", "las vacaciones", "entre semana"],
          example: {
            target: "Ese lunes es festivo, así que hay puente.",
            translation: "That Monday is a holiday, so it's a long weekend."
          }
        }
      ],
      note:
        "A Colombian date is built from one bare frame: “el” + number + “de” + month, as in “el 5 de mayo”. Nothing translates the English “of the”, and the month is always lowercase. Two things break the pattern and must be learned: the 1st is the ordinal “primero”, never “uno”, and a year is read as one whole number -- “mil novecientos noventa”, not the English pair “nineteen ninety”. Days of the week take an article, not a preposition: “el lunes” for this Monday, “los domingos” for every Sunday. Get those four habits right and you can fix any date in the country.",
      culture: [
        {
          label: "Lowercase months, and no “of the”",
          body:
            "Spanish writes months in lowercase -- “el 5 de mayo”, never “el 5 de Mayo” -- and joins the number to the month with a plain “de”, with nothing standing in for the English “of the”. English speakers reliably do both things wrong at first, capitalising the month and hunting for an extra word that Spanish simply does not use. The date is shorter and flatter than it looks in English, and that bareness is correct."
        },
        {
          label: "Years are one number, not two",
          body:
            "Where English chops a year into two halves -- “nineteen / ninety” -- Spanish reads it straight through as a single quantity: “mil novecientos noventa”. For years after 2000 it is even simpler: “dos mil veinticuatro”. Trying to import the English pairing gives you “diecinueve noventa”, which stops a Colombian for a second because it is not a year, it is just two random numbers stuck together."
        },
        {
          label: "Only the first is an ordinal",
          body:
            "Colombians say “el primero de junio” for the 1st, but from the 2nd onward they switch to plain cardinals: “el 2”, “el 15”, “el 30”. English does the opposite, making every date an ordinal -- 2nd, 15th, 30th. So the single ordinal to remember is “primero”; reach for “segundo de junio” or “el uno de junio” and you have missed the one place Spanish wants an ordinal and the one place it does not."
        },
        {
          label: "The coffee calendar and its puentes",
          body:
            "Around Pereira the year is read through coffee. The big harvest, la cosecha, peaks late in the year and a smaller mid-year one, la mitaca, fills the gap, so a finca's tour calendar bends around them. Layer on Colombia's many Monday holidays -- the puentes that empty the cities and fill the Eje Cafetero with visitors -- and picking a date becomes a negotiation of harvest and long weekend as much as of diary space."
        }
      ],
      pitfalls: [
        {
          mistake: "Capitalising the month: “el 5 de Mayo”",
          whyItFails:
            "Spanish never capitalises months in the middle of a sentence. “Mayo” with a capital M is an English habit imported wholesale, and while everyone understands it, it marks the writer as new to the language on sight.",
          sayInstead: "La visita es el 5 de mayo."
        },
        {
          mistake: "Saying “el uno de junio” for the 1st",
          whyItFails:
            "The first of the month is the one date Spanish says as an ordinal: “el primero de junio”. “El uno de junio” is understood but sounds off to a Colombian ear, like counting the day rather than naming it.",
          sayInstead: "Reservé para el primero de junio."
        },
        {
          mistake: "Reading the year as “diecinueve noventa”",
          whyItFails:
            "That copies the English habit of splitting a year into two halves. Spanish reads the whole figure: “mil novecientos noventa”. The split version is not a recognized year and forces the listener to reassemble it.",
          sayInstead: "La finca es de mil novecientos noventa."
        },
        {
          mistake: "Using English order: “mayo 5”",
          whyItFails:
            "English puts the month first -- “May 5th” -- but Spanish always runs day, then month: “el 5 de mayo”. “Mayo 5” reads as a heading or a label, not as how anyone says a date out loud in Colombia.",
          sayInstead: "Nos vemos el 5 de mayo."
        }
      ],
      variations: [
        {
          form: "¿A cómo estamos hoy?",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "The casual way to ask today's date, common all over Colombia."
        },
        {
          form: "Nos vemos el lunes 5 de mayo.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Fixing a specific day, pairing the weekday with the date."
        },
        {
          form: "La finca es de mil novecientos noventa.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Giving a year, read as one whole number rather than in pairs."
        },
        {
          form: "Cerramos del 24 al 31 de diciembre.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A date range with “del … al …”, naming the month once."
        }
      ],
      prompt: "Don Aníbal offers the tour for the first of June. How does he say “the first of June”?",
      choices: [
        "Nos vemos el uno de junio, cuando arranca la cosecha en la finca.",
        "Nos vemos el primero de junio, cuando arranca la cosecha en la finca.",
        "Nos vemos el primer de junio, cuando arranca la cosecha en la finca."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence writes the date the way Colombian Spanish does?",
          choices: [
            "La visita es el 5 de mayo, un lunes por la mañana bien temprano.",
            "La visita es el 5 de Mayo, un lunes por la mañana bien temprano.",
            "La visita es el 5 del mayo, un lunes por la mañana bien temprano."
          ],
          answer: 0,
          tests: "Months are lowercase and joined with a plain “de”: “el 5 de mayo”, not “Mayo” nor “del mayo”."
        },
        {
          prompt: "How does don Aníbal say the farm is from 1990?",
          choices: [
            "La finca es de diecinueve noventa, ya tiene sus buenos años encima.",
            "La finca es de mil nueve noventa, ya tiene sus buenos años encima.",
            "La finca es de mil novecientos noventa, ya tiene sus buenos años encima."
          ],
          answer: 2,
          tests: "A year is read as one whole number, “mil novecientos noventa”, never the English pair “nineteen ninety”."
        },
        {
          prompt: "Sara asks whether the farm opens on Sundays in general. Which is right?",
          choices: [
            "¿Ustedes abren los domingos, o solamente abren entre semana?",
            "¿Ustedes abren el domingo, o solamente abren entre semana?",
            "¿Ustedes abren en domingos, o solamente abren entre semana?"
          ],
          answer: 0,
          tests: "“Los domingos” = Sundays in general; “el domingo” = this coming Sunday, and days never take “en”."
        }
      ]
    },
    en: {
      title: "Reservando una visita guiada en Mánchester",
      situation:
        "Tatiana, colombiana recién llegada al norte de Inglaterra, llama a Emma para reservar la visita guiada a una casa de campo. Entre las dos van fijando la fecha en inglés: el mes, el día de la semana, los festivos que se cruzan y hasta el año en que se construyó la casa. Es la misma escena de Pereira, pero ahora las trampas son inglesas.",
      setting: {
        who: "Emma gestiona las reservas de una casa señorial cerca de Mánchester y habla con calidez profesional. Tatiana es colombiana, lleva pocas semanas en Inglaterra y hace su primera reserva por teléfono en inglés.",
        what: "Una reserva armada toda sobre fechas: qué mes, qué día de la semana, si cae festivo y de qué año es la casa.",
        when: "Finales de abril, con los puentes ingleses -- los bank holidays -- llenando de visitantes el campo.",
        where: "Mánchester, en el norte de Inglaterra, por teléfono a una casa de campo cercana.",
        why: "Decir una fecha en inglés -- “the fifth of May”, “a Monday”, “nineteen ninety” -- trae trampas que el español no tiene: el orden día/mes, los ordinales, las mayúsculas en días y meses y la edad con “to be”, no con “tener”."
      },
      address: {
        form: "mixed",
        who: "Tatiana y Emma se tratan con el único “you” del inglés. No hay usted ni tú: el mismo pronombre sirve para la desconocida y para la amiga, y la cortesía se marca con el tono y con fórmulas, no con el pronombre.",
        why: "El inglés no tiene la pareja usted/tú, así que la formalidad se juega en “please”, “would you” y “I'd like to”, no en la elección de pronombre. Por eso el registro va marcado como mixto.",
        ifYouSwitch:
          "Si Tatiana quisiera sonar más formal, no cambia el pronombre sino la fórmula: dice “I'd like to…” o “could I…” en vez de “I want…”. El “you” se queda idéntico; lo que sube o baja es el envoltorio."
      },
      dialogue: [
        {
          speaker: "Tatiana",
          target: "Hi, I'd like to book the estate tour for the first of June, if that works.",
          translation: "Hola, quería reservar la visita a la casa para el primero de junio, si le sirve.",
          pronunciation: "hai, aid laik tu buk dhi es-TEIT tur for dhe ferst ov llun, if dhat works",
          literal: "Hola, yo-quisiera reservar la casa-señorial visita para el primero de junio, si eso funciona.",
          why: "El día 1 es ordinal también en inglés: “the first of June”. Y fíjese en el orden británico, día antes que mes, con “of” en medio: “the first of June”, no “June first”."
        },
        {
          speaker: "Emma",
          target: "The first of June is a bank holiday, I'm afraid. How about Monday the fifth of May instead?",
          translation: "El primero de junio es festivo, me temo. ¿Qué tal mejor el lunes 5 de mayo?",
          pronunciation: "dhe ferst ov llun is a bank HO-li-dei, aim a-FREID. hau a-BAUT MAN-dei dhe fifth ov mei ins-TED",
          literal: "El primero de junio es banco festivo, yo-estoy temeroso. Qué tal lunes el quinto de mayo en-cambio.",
          why: "Aquí está el patrón entero: “Monday the fifth of May” -- día de la semana, “the”, ordinal, “of”, mes. “Monday” y “May” van en mayúscula, al revés que el español. “Bank holiday” es el festivo británico."
        },
        {
          speaker: "Tatiana",
          target: "The fifth of May, lovely. And are you open on Sundays, or only on weekdays?",
          translation: "El 5 de mayo, perfecto. ¿Y abren los domingos, o solo entre semana?",
          pronunciation: "dhe fifth ov mei, LOV-li. and ar iu O-pen on SON-deis, or ON-li on WIK-deis",
          literal: "El quinto de mayo, encantador. Y ¿están abiertos en domingos, o solo en días-de-semana?",
          why: "“On Sundays”, con “on” y el plural, significa todos los domingos, un hábito -- como “los domingos” en español. El día siempre lleva “on”, nunca “in”: “on Sundays”, “on Monday”."
        },
        {
          speaker: "Emma",
          target: "On Sundays we're open until October; we close in December. The house dates from nineteen ninety.",
          translation: "Los domingos abrimos hasta octubre; cerramos en diciembre. La casa es de mil novecientos noventa.",
          pronunciation: "on SON-deis wir O-pen an-TIL ok-TOU-ber; wi klous in di-SEM-ber. dhe haus deits from NAIN-tin NAIN-ti",
          literal: "En domingos estamos abiertos hasta octubre; cerramos en diciembre. La casa data de diecinueve noventa.",
          why: "El año se parte en dos mitades: “nineteen ninety”, no el número entero. Es justo al revés del español, que lo lee completo. Y “October”, “December” van en mayúscula."
        },
        {
          speaker: "Tatiana",
          target: "Great. My grandad's coming too -- he's eighty years old. Is there step-free access?",
          translation: "Genial. Mi abuelo también viene -- tiene ochenta años. ¿Hay acceso sin escalones?",
          pronunciation: "greit. mai GRAN-dad's KO-ming tu -- his EI-ti llirs ould. is dher step-fri AK-ses",
          literal: "Genial. Mi abuelo viene también -- él-es ochenta años viejo. ¿Hay paso-libre acceso?",
          why: "La edad va con el verbo “to be”: “he's eighty years old”, literalmente él es ochenta años viejo. Decir “he has eighty years”, calcando “tiene ochenta años”, es el error clásico del hispanohablante."
        },
        {
          speaker: "Emma",
          target: "Yes, fully step-free. From the fifth to the thirtieth of May we run tours every day except the first of May.",
          translation: "Sí, totalmente sin escalones. Del 5 al 30 de mayo hacemos recorridos todos los días menos el primero de mayo.",
          pronunciation: "ies, FU-li step-fri. from dhe fifth tu dhe THER-ti-eth ov mei wi ron turs EV-ri dei ek-SEPT dhe ferst ov mei",
          literal: "Sí, totalmente paso-libre. Del quinto al trigésimo de mayo corremos recorridos cada día excepto el primero de mayo.",
          why: "El rango va con “from … to …”: “from the fifth to the thirtieth of May”, todo con ordinales. En inglés casi toda fecha es ordinal, no como el español, que solo lo hace en el primero."
        }
      ],
      vocabulary: [
        {
          term: "the date",
          explanation:
            "La fecha. Para preguntarla se dice “what's the date today?” o “what date is it?”. Ojo: la respuesta lleva ordinal, “the fifth of May”, no el número pelado.",
          literal: "la fecha",
          useWhen:
            "Al preguntar o dar el día del calendario: una reserva, un formulario, una cita.",
          avoidWhen:
            "Te refieres a la hora del reloj -- eso es “the time”, otra pregunta.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["what's the date?", "today", "the day", "the month"],
          example: {
            target: "What's the date today? It's the fifth of May.",
            translation: "¿Qué fecha es hoy? Es el 5 de mayo."
          }
        },
        {
          term: "the fifth of May",
          explanation:
            "La fecha lleva artículo y ordinal: “the fifth of May”. El inglés británico dice “the fifth of May”; el americano, “May fifth”. Nunca “the five of May”.",
          literal: "el quinto de mayo",
          useWhen:
            "Al decir una fecha concreta, en voz alta o por escrito.",
          avoidWhen:
            "Dices “the five of May”: falta el ordinal “fifth” y el artículo.",
          register: "neutral",
          region: "El orden día/mes es británico; en Estados Unidos va el mes primero.",
          related: ["the first", "the thirtieth", "of", "May the fifth"],
          example: {
            target: "We'll meet on the fifth of May.",
            translation: "Nos vemos el 5 de mayo."
          }
        },
        {
          term: "Monday, May (capitals)",
          explanation:
            "Al revés que el español: en inglés los días y los meses van SIEMPRE con mayúscula -- “Monday”, “Sunday”, “May”, “December” -- estén donde estén en la frase.",
          literal: "lunes, mayo (con mayúscula)",
          useWhen:
            "Siempre que escribas un día o un mes en inglés.",
          avoidWhen:
            "Los escribes en minúscula por costumbre del español.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["Monday", "Sunday", "May", "December"],
          example: {
            target: "The tour on Monday the fifth of May is free.",
            translation: "El recorrido del lunes 5 de mayo está libre."
          }
        },
        {
          term: "ordinal dates: first, fifth, thirtieth",
          explanation:
            "En inglés casi toda fecha es ordinal: “first, second, third, fourth, fifth… thirtieth”, con terminaciones “-st, -nd, -rd, -th”. El español solo usa ordinal en el día 1.",
          literal: "fechas ordinales: primero, quinto, trigésimo",
          useWhen:
            "Al leer cualquier día del mes en inglés.",
          avoidWhen:
            "Usas el cardinal, “the five”, como se haría en español.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["first", "fifth", "thirtieth", "-th"],
          example: {
            target: "From the fifth to the thirtieth of May.",
            translation: "Del 5 al 30 de mayo."
          }
        },
        {
          term: "on Monday / on Sundays",
          explanation:
            "El día lleva la preposición “on”: “on Monday”. En plural, “on Sundays”, quiere decir todos los domingos, un hábito, igual que “los domingos” en español.",
          literal: "en lunes / en domingos",
          useWhen:
            "Al situar algo en un día concreto o en un día habitual.",
          avoidWhen:
            "Omites “on” o metes “in” con un día de la semana.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["on Monday", "on Sundays", "on weekdays", "at the weekend"],
          example: {
            target: "On Sundays we're open until October.",
            translation: "Los domingos abrimos hasta octubre."
          }
        },
        {
          term: "years in pairs: nineteen ninety",
          explanation:
            "El año se parte en dos: “nineteen ninety” para 1990. Después de 2000 se dice “two thousand and twenty-four”. No se lee entero como en español.",
          literal: "años en pares: diecinueve noventa",
          useWhen:
            "Al decir un año anterior a 2000, léelo en dos mitades.",
          avoidWhen:
            "Lo lees entero, “one thousand nine hundred ninety”, calcando el español.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["two thousand", "the century", "the year", "the date"],
          example: {
            target: "The house dates from nineteen ninety.",
            translation: "La casa es de mil novecientos noventa."
          }
        },
        {
          term: "I'm thirty (years old)",
          explanation:
            "La edad va con el verbo “to be”, no con “to have”: “I'm thirty” o “I'm thirty years old”. “I have thirty years” es un calco de “tengo treinta años” y suena mal.",
          literal: "estoy/soy treinta (años viejo)",
          useWhen:
            "Al decir la edad de alguien.",
          avoidWhen:
            "Usas “have”, “I have thirty years”, traduciendo “tengo”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["to be", "years old", "how old are you?", "age"],
          example: {
            target: "My grandad is eighty years old.",
            translation: "Mi abuelo tiene ochenta años."
          }
        }
      ],
      note:
        "Una fecha inglesa invierte varias costumbres del español. El día casi siempre es ordinal -- “the fifth of May”, no “the five” -- y los días y meses van con mayúscula: “Monday”, “May”. El orden británico es día, “of”, mes: “the fifth of May”; el americano pone el mes primero, “May fifth”. El día lleva la preposición “on” (“on Monday”, y “on Sundays” para el hábito), el año se lee en dos mitades -- “nineteen ninety”, no entero -- y la edad va con “to be”: “I'm thirty”, nunca “I have thirty years”.",
      culture: [
        {
          label: "Días y meses con mayúscula",
          body:
            "El inglés escribe con mayúscula todos los días y meses, en cualquier parte de la frase: “Monday”, “Sunday”, “May”, “December”. Es exactamente lo contrario del español, que los deja en minúscula. El hispanohablante, por arrastre, escribe “monday” y “may” en minúscula, y aunque se entiende, delata al principiante en el acto. Conviene volverlo automático: si es día o mes, va con mayúscula."
        },
        {
          label: "Ordinales por todas partes",
          body:
            "Donde el español usa el número pelado a partir del día 2, el inglés pone ordinal en casi toda fecha: “the first, the second, the fifth, the thirtieth”, con sus terminaciones “-st, -nd, -rd, -th”. Decir “the five of May” calcando el español suena mal; lo natural es “the fifth of May”. El único punto en común con el español es el día 1, que ambos idiomas dicen como ordinal."
        },
        {
          label: "El año en dos mitades",
          body:
            "El inglés parte el año en dos números: “nineteen ninety” para 1990, “eighteen forty-five” para 1845. El español lo lee entero, “mil novecientos noventa”, y por eso el hispanohablante tiende a soltar “one thousand nine hundred ninety”, que en inglés suena larguísimo y raro. A partir del año 2000 la cosa cambia: se dice “two thousand and four”, “two thousand and twenty-four”, más parecido al español."
        },
        {
          label: "La edad con “to be” y los bank holidays",
          body:
            "En inglés la edad se dice con “to be”: “I'm thirty”, “he's eighty years old”. El calco “I have eighty years”, desde “tengo ochenta años”, es uno de los errores más marcados del hispanohablante. Y en cuanto al calendario, los festivos británicos, los bank holidays, suelen caer en lunes y arman puentes que vacían las ciudades y llenan el campo -- igual que en Colombia, pero con otro nombre."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “the five of May”",
          whyItFails:
            "En inglés la fecha lleva ordinal, no el número pelado. “The five of May” calca el español “el cinco de mayo”; lo natural es “the fifth of May”, con “-th”. Sin el ordinal, suena a alguien recién llegado al idioma.",
          sayInstead: "We'll meet on the fifth of May."
        },
        {
          mistake: "Writing “monday the fifth of may”",
          whyItFails:
            "El inglés exige mayúscula en días y meses. Escribirlos en minúscula, por hábito del español, es un descuido visible en cualquier correo o formulario, aunque el mensaje se entienda igual.",
          sayInstead: "The tour is on Monday the fifth of May."
        },
        {
          mistake: "Saying “he has eighty years”",
          whyItFails:
            "La edad en inglés va con “to be”, no con “to have”. “He has eighty years” traduce “tiene ochenta años” palabra por palabra y suena claramente a error de hispanohablante.",
          sayInstead: "He's eighty years old."
        },
        {
          mistake: "Reading 1990 as “one thousand nine hundred ninety”",
          whyItFails:
            "El inglés parte el año en dos mitades. Leerlo entero calca el español y suena larguísimo; nadie dice el año así en una conversación normal.",
          sayInstead: "The house dates from nineteen ninety."
        }
      ],
      variations: [
        {
          form: "What's the date today?",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "La forma corriente y natural de preguntar la fecha de hoy en cualquier conversación; ojo, la respuesta vuelve siempre con ordinal, como “the fifth of May”."
        },
        {
          form: "See you on Monday the fifth of May.",
          register: "neutral",
          region: "Inglés británico",
          whenToUse: "Al fijar un día concreto, uniendo el día de la semana con la fecha completa; es lo que se dice al cerrar una cita, una reserva o un plan con alguien."
        },
        {
          form: "The house dates from nineteen ninety.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Al dar un año anterior al 2000, leído siempre en dos mitades y nunca entero, como cuando se cuenta en qué año se fundó, se construyó o se abrió algo."
        },
        {
          form: "We're closed from the fifth to the thirtieth of December.",
          register: "neutral",
          region: "Inglés británico",
          whenToUse: "Un rango de fechas con la fórmula “from … to …”, nombrando el mes una sola vez al final; sirve para vacaciones, cierres de temporada o períodos completos."
        }
      ],
      prompt: "Emma offers Monday the 5th of May. Which line says the date the natural English way?",
      choices: [
        "Let's meet on May the five, early on a Monday morning if you can.",
        "Let's meet on the five of May, early on a Monday morning if you can.",
        "Let's meet on the fifth of May, early on a Monday morning if you can."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "En un correo, Tatiana escribe el día y el mes. ¿Cuál frase usa la mayúscula como pide el inglés y no calca la minúscula del español?",
          choices: [
            "We open on sundays, and the tour on monday the fifth is still free.",
            "We open on Sundays, and the tour on Monday the fifth is still free.",
            "We open on Sundays, and the tour on monday the fifth is still free."
          ],
          answer: 1,
          tests: "En inglés los días y los meses siempre van con mayúscula: “Sundays”, “Monday”. El español los deja en minúscula."
        },
        {
          prompt: "El abuelo de Tatiana tiene 80 años y ella quiere decir su edad en inglés. ¿Cuál frase es la correcta y no traduce “tener” palabra por palabra?",
          choices: [
            "My grandad is eighty years old, but he still walks the whole estate.",
            "My grandad has eighty years old, but he still walks the whole estate.",
            "My grandad has eighty years, but he still walks the whole estate."
          ],
          answer: 0,
          tests: "La edad va con el verbo “to be”: “he is eighty years old”, nunca con “have”, que calca el español “tiene ochenta años” y suena a error de principiante."
        },
        {
          prompt: "Emma cuenta de qué año es la casa. ¿Cómo se dice 1990 en inglés, sin leer el año entero como en español?",
          choices: [
            "The house dates from one thousand nine hundred ninety, would you believe it.",
            "The house dates from nineteen ninety, would you believe it after all.",
            "The house dates from nineteen hundred ninety, would you believe it."
          ],
          answer: 1,
          tests: "El año se lee en dos mitades, “nineteen ninety”, y no entero como en español; leerlo completo suena larguísimo y delata el calco."
        }
      ]
    }
  },
  {
    id: "colors-and-describing-things-in-manizales",
    level: "Starter · Shopping",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "food-and-drink",
    register: "neutral",
    pathways: ["foundation", "year-12"],
    structure: "color-and-description",
    review: "pending",
    es: {
      title: "Comprando una ruana en Manizales",
      situation:
        "Laura entra a un almacén de tejidos en Manizales buscando ropa para el frío de la montaña. Con don Jorge, el vendedor, va nombrando colores, materiales y estampados: una ruana azul o verde, una bufanda de rayas, guantes de lana. Cuando no sabe la palabra exacta, describe por el patrón o el material, que es justo lo que hace un hablante real.",
      setting: {
        who: "Don Jorge is a Manizales shopkeeper who sells wool and leather goods and knows his stock by color and material. Laura is a foreign student kitting herself out for the cold of the coffee highlands.",
        what: "A shopping chat built on description: color and its agreement, the invariable colors, brown as café rather than marrón, and describing by pattern and material when the exact word won't come.",
        when: "A cool, misty afternoon in the high city, with the shop full of ruanas and scarves.",
        where: "Manizales, high in the Caldas coffee country, in a family textile shop.",
        why: "Color and description are everywhere in real talk, yet the corpus holds only eighteen color words. Make an adjective agree, reach for café over marrón, and say de rayas or de cuero, and you can describe almost anything you point at."
      },
      address: {
        form: "mixed",
        who: "Laura and don Jorge slide between usted and a warmer register. He opens with the shopkeeper's courteous usted and softens into paisa asides; she matches him, staying respectful but relaxed.",
        why: "A shop in Manizales runs on friendly usted, but the exchange over ruanas and scarves loosens quickly, so the register sits in the middle rather than fixed at either pole.",
        ifYouSwitch:
          "If Laura went fully informal with tú, don Jorge would follow without a blink, but the easy usted is what keeps a first shop visit polite here, so mixing the two is the natural middle path."
      },
      dialogue: [
        {
          speaker: "Laura",
          target: "Don Jorge, busco una ruana azul o verde, no muy oscura, para el clima de aquí.",
          translation: "Don Jorge, I'm looking for a blue or green ruana, not too dark, for the weather here.",
          pronunciation: "don HOR-he, BUS-ko U-na RWA-na a-SUL o VER-de, no muy os-KU-ra, PA-ra el KLI-ma de a-KÍ",
          literal: "Don Jorge, I-search a ruana blue or green, not very dark, for the climate of here.",
          why: "The color follows the noun and agrees with it: “una ruana azul”, feminine. “Azul” ends in a consonant, so it looks the same for masculine or feminine; only the plural will change it. “Oscura” agrees fully, feminine singular."
        },
        {
          speaker: "Jorge",
          target: "Tengo esta ruana verde y una azul clarita. También hay café, que aquí no decimos marrón.",
          translation: "I've got this green ruana and a light blue one. There's brown too, which here we don't call marrón.",
          pronunciation: "TEN-go ES-ta RWA-na VER-de i U-na a-SUL kla-RI-ta. tam-BYEN ai ka-FÉ, ke a-KÍ no de-SI-mos ma-RRÓN",
          literal: "I-have this ruana green and a blue light-little. Also there-is coffee, that here not we-say brown.",
          why: "In Colombia brown is “café”, the same word as the drink, not the “marrón” of Spain. “Clarita” is “clara” softened with a diminutive -- light and gentle. “Verde” ends in -e, so it too has one form for both genders."
        },
        {
          speaker: "Laura",
          target: "Me gusta la café. ¿Y tiene bufandas rojas o esa naranja de rayas que vi?",
          translation: "I like the brown one. And do you have red scarves or that striped orange one I saw?",
          pronunciation: "me GUS-ta la ka-FÉ. i TYE-ne bu-FAN-das RRO-jas o E-sa na-RAN-ja de RA-yas ke vi",
          literal: "To-me it-pleases the coffee. And you-have scarves red or that orange of stripes that I-saw?",
          why: "“Rojas” shows full agreement -- feminine plural to match “bufandas”. But “naranja” does not change: it is an invariable color, so “esa bufanda naranja” stays the same in any gender or number. “De rayas” means striped."
        },
        {
          speaker: "Jorge",
          target: "Claro. La naranja es de rayas y hay una amarilla a cuadros. Los guantes negros son de lana.",
          translation: "Of course. The orange one is striped and there's a checked yellow one. The black gloves are wool.",
          pronunciation: "KLA-ro. la na-RAN-ja es de RA-yas i ai U-na a-ma-RI-ya a KWA-dros. los GWAN-tes NE-gros son de LA-na",
          literal: "Clear. The orange is of stripes and there-is a yellow to squares. The gloves black are of wool.",
          why: "“Amarilla” agrees fully, but “naranja” again does not. Pattern and material ride on little phrases: “de rayas” striped, “a cuadros” checked, “de lana” wool. “Negros” agrees, masculine plural for “guantes”."
        },
        {
          speaker: "Laura",
          target: "Perfecto. ¿La mochila gris es de cuero? Y esa cartera rosada, ¿es del mismo material?",
          translation: "Perfect. Is the gray backpack leather? And that pink purse, is it the same material?",
          pronunciation: "per-FEK-to. la mo-CHI-la gris es de KWE-ro? i E-sa kar-TE-ra rro-SA-da, es del MIS-mo ma-te-RYAL?",
          literal: "Perfect. The backpack gray is of leather? And that purse pink, is of-the same material?",
          why: "“Gris” ends in a consonant, so it does not mark gender: “la mochila gris”. “Rosada” does agree -- feminine singular. “De cuero” is the material frame, leather; you name what a thing is made of with “de” plus the material."
        },
        {
          speaker: "Jorge",
          target: "La gris es de cuero; la rosada es de tela. Todo hecho aquí en Manizales, bien paisa.",
          translation: "The gray one is leather; the pink one is fabric. All made here in Manizales, properly paisa.",
          pronunciation: "la gris es de KWE-ro; la rro-SA-da es de TE-la. TO-do E-cho a-KÍ en ma-ni-SA-les, byen pai-SA",
          literal: "The gray is of leather; the pink is of fabric. All made here in Manizales, well paisa.",
          why: "The color alone can stand for the thing: “la gris”, “la rosada”, the gray one, the pink one, with the noun dropped because it is understood. Materials keep the “de” frame: “de cuero”, “de tela”, of leather, of fabric."
        }
      ],
      vocabulary: [
        {
          term: "la concordancia del color",
          explanation:
            "Most colors agree with the noun in gender and number, and sit after it: “un carro rojo”, “una casa roja”, “unas casas rojas”. The ending moves with the noun, not with you.",
          literal: "the agreement of the color",
          useWhen:
            "Using colors that end in -o, which show all four forms: rojo, roja, rojos, rojas.",
          avoidWhen:
            "The color is one of the invariable ones -- naranja, rosa -- which never change shape.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["rojo", "amarilla", "negros", "blanca"],
          example: {
            target: "Quiero las bufandas rojas y los guantes negros.",
            translation: "I want the red scarves and the black gloves."
          }
        },
        {
          term: "café (no marrón)",
          explanation:
            "In Colombia brown is “café”, the very word for coffee, and it does not change for gender: “un saco café”, “una ruana café”. The Spanish “marrón” is understood but sounds foreign here.",
          literal: "coffee (not brown)",
          useWhen:
            "Naming anything brown in Colombia: leather, wood, eyes, clothes.",
          avoidWhen:
            "You are in Spain, where “marrón” is the everyday word instead.",
          register: "friendly informal",
          region: "Colombia; “café” for brown is the norm nationwide.",
          related: ["marrón", "beige", "el color", "oscuro"],
          example: {
            target: "Me gusta la ruana café, no la marrón de allá.",
            translation: "I like the brown ruana, not the Spanish kind of brown."
          }
        },
        {
          term: "los colores invariables",
          explanation:
            "A few colors never change: naranja, rosa, violeta, beige. “Una falda naranja”, “unos zapatos rosa” -- no feminine, no plural on the color itself. Many come from a fruit or thing.",
          literal: "the invariable colors",
          useWhen:
            "Using naranja, rosa, violeta or beige, which keep one single form.",
          avoidWhen:
            "You are tempted to invent “naranjas” or “rosos” to force agreement -- don't.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["naranja", "rosa", "violeta", "beige"],
          example: {
            target: "Me llevo la bufanda naranja y la falda naranja.",
            translation: "I'll take the orange scarf and the orange skirt."
          }
        },
        {
          term: "azul / verde / gris",
          explanation:
            "Colors ending in a consonant or in -e have one form for both genders and only add a plural: “azul / azules”, “verde / verdes”, “gris / grises”. They mark number, never gender.",
          literal: "blue / green / gray",
          useWhen:
            "Describing masculine or feminine nouns with these colors -- the singular looks identical.",
          avoidWhen:
            "You try to make a feminine like “azula” or “verda” -- those forms do not exist.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["azul", "verde", "gris", "azules"],
          example: {
            target: "La mochila gris y el saco gris hacen juego.",
            translation: "The gray backpack and the gray sweater match."
          }
        },
        {
          term: "de rayas / a cuadros",
          explanation:
            "Patterns ride on small phrases: “de rayas” striped, “a cuadros” checked, “de flores” flowery, “de lunares” spotted. They come after the noun, like a color: “una camisa de rayas”.",
          literal: "of stripes / to squares",
          useWhen:
            "Describing the pattern of a fabric when the single word won't come to you.",
          avoidWhen:
            "You calque English and say “de líneas” for striped -- Colombians say “de rayas”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["a cuadros", "de flores", "de lunares", "estampado"],
          example: {
            target: "Prefiero la camisa de rayas a la de cuadros.",
            translation: "I prefer the striped shirt to the checked one."
          }
        },
        {
          term: "de cuero / de lana",
          explanation:
            "Material also rides on “de”: “de cuero” leather, “de lana” wool, “de tela” fabric, “de algodón” cotton. It answers what a thing is made of and follows the noun.",
          literal: "of leather / of wool",
          useWhen:
            "Saying what something is made of, especially when describing to buy.",
          avoidWhen:
            "You mean the color or pattern -- material is a separate layer of description.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["de tela", "de algodón", "de cuero", "el material"],
          example: {
            target: "Los guantes de lana y la mochila de cuero.",
            translation: "The wool gloves and the leather backpack."
          }
        },
        {
          term: "claro / oscuro",
          explanation:
            "To shade a color, add “claro” light or “oscuro” dark after it: “azul claro”, “verde oscuro”. In this pairing the color and the shade word stay masculine, unchanged by the noun.",
          literal: "light / dark",
          useWhen:
            "Pinning down a shade: light blue, dark green, and everything between.",
          avoidWhen:
            "You try to agree “azul clara” for a feminine noun -- the shaded pair stays fixed.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["azul claro", "verde oscuro", "clarito", "el tono"],
          example: {
            target: "Busco una ruana azul claro, no azul oscuro.",
            translation: "I'm after a light blue ruana, not a dark blue one."
          }
        }
      ],
      note:
        "Describing a thing in Spanish stacks three layers after the noun: color, pattern, material. Most colors agree in gender and number -- “una ruana roja”, “unos guantes rojos” -- but a handful never move: naranja, rosa, violeta and beige keep one form, and colors ending in a consonant or -e (azul, verde, gris) mark only plural, never gender. Brown in Colombia is “café”, not the Spanish “marrón”. When the exact word won't come, describe by pattern or material with little “de” and “a” phrases: “de rayas” striped, “a cuadros” checked, “de cuero” leather, “de lana” wool. Those frames let you describe almost anything you can point at.",
      culture: [
        {
          label: "Colors agree, and come after",
          body:
            "Spanish puts the color after the noun and, for most colors, makes it agree: “un carro rojo”, “una casa roja”, “unas flores rojas”. English does neither -- the color comes first and never changes. So the learner has two habits to flip at once: move the color behind the noun, and let its ending follow the noun's gender and number. Get both and a phrase like “las bufandas rojas” stops feeling back-to-front."
        },
        {
          label: "Brown is café, not marrón",
          body:
            "Across Colombia brown is “café”, the same word as the drink: brown eyes are “ojos cafés”, a brown jacket is “una chaqueta café”. The “marrón” of Spain is understood but marks you as speaking a different Spanish. In the coffee highlands around Manizales the overlap is almost a joke -- the color, the crop and the cup all share one word -- and reaching for “café” instead of “marrón” is one of the quickest ways to sound local."
        },
        {
          label: "The colors that never move",
          body:
            "A small set of colors refuses to agree: naranja, rosa, violeta and beige stay in one form whatever the noun -- “una falda naranja”, “unos zapatos rosa”. Most trace back to a thing of that color, an orange or a rose, and behave like a shortening of “color of an orange”. Learners tidy them into “naranjas” or “rosos” to match the noun, but that over-correction is exactly the giveaway; the invariable ones are meant to sit still."
        },
        {
          label: "Describe by pattern and material",
          body:
            "Real shoppers rarely know every word, so Spanish leans on pattern and material frames: “de rayas” striped, “a cuadros” checked, “de flores” flowery, “de cuero” leather, “de lana” wool. In a Manizales textile shop, thick with ruanas and scarves against the mountain cold, you can furnish a whole outfit this way -- “la de rayas”, “la de lana” -- without naming a single garment, letting the pattern or the cloth do the pointing for you."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “marrón” for brown in Colombia",
          whyItFails:
            "“Marrón” is the Spanish-from-Spain word. Colombians say “café” for brown, the same word as coffee, so “marrón” is understood but instantly marks you as importing another country's Spanish.",
          sayInstead: "Me gusta la ruana café."
        },
        {
          mistake: "Inventing a feminine: “una ruana azula”",
          whyItFails:
            "Colors ending in a consonant, like “azul”, have one form for both genders. “Azula” does not exist; the word only changes for plural, into “azules”.",
          sayInstead: "Quiero una ruana azul."
        },
        {
          mistake: "Making “naranja” agree: “zapatos naranjos”",
          whyItFails:
            "“Naranja” is invariable -- it never takes a masculine or plural ending. “Naranjos” sounds like the orange trees, not the color, so it lands as a clear over-correction.",
          sayInstead: "Me gustan los zapatos naranja."
        },
        {
          mistake: "Calquing striped as “de líneas”",
          whyItFails:
            "English “lines” tempts you into “de líneas”, but the Colombian phrase for striped is “de rayas”. “De líneas” is understood only with effort and is not how anyone describes a fabric here.",
          sayInstead: "Quiero la bufanda de rayas."
        }
      ],
      variations: [
        {
          form: "¿Tiene algo en azul claro?",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Asking for a lighter shade of a color while you shop."
        },
        {
          form: "Me la llevo, la café de rayas.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Naming an item by its color and pattern, with the noun dropped."
        },
        {
          form: "¿Esto es de cuero o de tela?",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Checking what a thing is made of before you buy it."
        },
        {
          form: "Prefiero la de cuadros, no la de flores.",
          register: "friendly informal",
          region: "Universal Spanish",
          whenToUse: "Choosing between two patterns, both named without the noun."
        }
      ],
      prompt: "Laura points at a brown ruana. How does she say “the brown one” the Colombian way?",
      choices: [
        "Me gusta la ruana marrón, la que está al lado de la verde.",
        "Me gusta la ruana morena, la que está al lado de la verde.",
        "Me gusta la ruana café, la que está al lado de la verde."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Which sentence makes each color agree with its noun in gender and number?",
          choices: [
            "Quiero las bufandas roja y los guantes negro para el frío.",
            "Quiero las bufandas rojas y los guantes negros para el frío.",
            "Quiero las bufandas rojo y los guantes negros para el frío."
          ],
          answer: 1,
          tests: "Colors in -o agree fully: feminine plural “rojas” for “bufandas”, masculine plural “negros” for “guantes”."
        },
        {
          prompt: "Orange is an invariable color. Which sentence keeps it in one form?",
          choices: [
            "Me llevo la bufanda naranja y la falda naranja, hacen juego.",
            "Me llevo la bufanda naranja y la falda naranjada, hacen juego.",
            "Me llevo la bufanda naranje y la falda naranja, hacen juego."
          ],
          answer: 0,
          tests: "“Naranja” never changes: no feminine, no plural, no invented “naranjada” or “naranje”."
        },
        {
          prompt: "Laura wants a striped scarf and doesn't know the exact word. Which is right?",
          choices: [
            "Quiero la bufanda de líneas, no la de cuadros, por favor.",
            "Quiero la bufanda de rayas, no la de cuadros, por favor.",
            "Quiero la bufanda con rayas, no la de cuadros, por favor."
          ],
          answer: 1,
          tests: "Striped is “de rayas”; “de líneas” calques English and “con rayas” is not the fixed pattern phrase."
        }
      ]
    },
    en: {
      title: "Comprando una ruana en Houston",
      situation:
        "Laura, colombiana instalada en Estados Unidos, entra a una tienda en Houston a comprar ropa de invierno y describe en inglés lo que busca: una ruana azul o verde, una bufanda de rayas, guantes de lana. Con Mike, el vendedor, practica el orden inglés del adjetivo, la falta de concordancia y las trampas de material y color que el hispanohablante siempre pisa.",
      setting: {
        who: "Mike atiende una tienda de ropa en Houston y describe su mercancía por color y material. Laura es colombiana, lleva poco en Estados Unidos y se abriga para su primer invierno de verdad.",
        what: "Una charla de compras sobre descripción: el adjetivo antes del sustantivo y sin concordancia, “brown” y no “coffee”, y el patrón y el material en inglés.",
        when: "Una tarde fría de otoño, con la tienda llena de abrigos y bufandas.",
        where: "Houston, en Estados Unidos, en una tienda de ropa del centro.",
        why: "Describir en inglés invierte las costumbres del español: el color va antes del sustantivo y no cambia nunca, “brown” no es “coffee”, y el patrón y el material se dicen con palabras propias -- “striped”, “leather”, “wool” -- no con el marco “de”."
      },
      address: {
        form: "mixed",
        who: "Laura y Mike se tratan con el único “you” del inglés, sin la pareja usted/tú. El trato de tienda es cordial y directo, y la cortesía se juega en el tono y en fórmulas como “could I” o “I'm after”, no en el pronombre.",
        why: "El inglés no distingue usted de tú, así que en una tienda el registro se marca con “please”, “would you” y la sonrisa, no con la elección de pronombre. Por eso lo dejamos como mixto.",
        ifYouSwitch:
          "Si Laura quisiera sonar más formal, no cambia el “you” sino la fórmula: dice “could I see…” en vez de “I want…”. El pronombre se queda igual; lo que sube o baja es el envoltorio de la frase."
      },
      dialogue: [
        {
          speaker: "Laura",
          target: "Hi Mike, I'm looking for a blue or green ruana, not too dark, for the weather here.",
          translation: "Hola Mike, busco una ruana azul o verde, no muy oscura, para el clima de aquí.",
          pronunciation: "hai maik, aim LU-king for a blu or grin RWA-na, not tu dark, for dhe WE-dher hir",
          literal: "Hola Mike, estoy buscando una azul o verde ruana, no muy oscura, para el clima aquí.",
          why: "En inglés el color va ANTES del sustantivo: “a blue ruana”, no “una ruana azul”. Es el orden contrario al español, y el adjetivo no cambia por género ni número: “blue” es igual para todo."
        },
        {
          speaker: "Mike",
          target: "I've got this green one and a light blue one. There's a brown one too -- we say brown, not coffee.",
          translation: "Tengo esta verde y una azul clarita. También hay una café -- decimos “brown”, no “coffee”.",
          pronunciation: "aiv got dhis grin uan and a lait blu uan. dhers a braun uan tu -- wi sei braun, not KO-fi",
          literal: "Yo-tengo esta verde una y una clara azul una. Hay una café una también -- decimos café, no café-bebida.",
          why: "“One” reemplaza al sustantivo para no repetirlo: “a green one”, la verde. Y ojo con el falso amigo: “coffee” es la bebida; el color café en inglés es “brown”. El matiz va delante: “light blue”, azul claro."
        },
        {
          speaker: "Laura",
          target: "I like the brown one. Do you have red scarves, or that orange striped one I saw?",
          translation: "Me gusta la café. ¿Tiene bufandas rojas, o esa naranja de rayas que vi?",
          pronunciation: "ai laik dhe braun uan. du iu hav red skarvs, or dhat O-rinch STRAIP-t uan ai so",
          literal: "Me gusta la café una. ¿Tienes rojas bufandas, o esa naranja rayada una que vi?",
          why: "El color no se pluraliza: “red scarves”, no “reds scarves”. El adjetivo inglés es invariable. El patrón va también delante, como adjetivo: “an orange striped one”, una de rayas naranja."
        },
        {
          speaker: "Mike",
          target: "Sure. The orange one is striped and there's a yellow checked one. The black gloves are wool.",
          translation: "Claro. La naranja es de rayas y hay una amarilla a cuadros. Los guantes negros son de lana.",
          pronunciation: "shur. dhe O-rinch uan is straipt and dhers a YE-lou chekt uan. dhe blak glovs ar wul",
          literal: "Claro. La naranja una es rayada y hay una amarilla cuadriculada una. Los negros guantes son lana.",
          why: "El patrón se dice con una sola palabra: “striped” de rayas, “checked” a cuadros -- delante del sustantivo o con “one”. Y el material puede ir directo, sin “de”: “the gloves are wool”, son de lana."
        },
        {
          speaker: "Laura",
          target: "Great. Is the gray backpack leather? And that pink purse, is it the same material?",
          translation: "Genial. ¿La mochila gris es de cuero? Y esa cartera rosada, ¿es del mismo material?",
          pronunciation: "greit. is dhe grei BAK-pak LE-dher? and dhat pink pers, is it dhe seim ma-TÍ-rial?",
          literal: "Genial. ¿Es la gris mochila cuero? Y esa rosa cartera, ¿es el mismo material?",
          why: "El material aparece como sustantivo puesto de adjetivo, sin “de”: “a leather backpack”, “a wool sweater”. Y de nuevo el color va delante y no cambia: “the gray backpack”, “that pink purse”."
        },
        {
          speaker: "Mike",
          target: "The gray one's leather; the pink one's fabric. All made here in Houston.",
          translation: "La gris es de cuero; la rosada es de tela. Todo hecho aquí en Houston.",
          pronunciation: "dhe grei uans LE-dher; dhe pink uans FA-brik. ol meid hir in to-RON-to",
          literal: "La gris una-es cuero; la rosa una-es tela. Todo hecho aquí en Houston.",
          why: "“The gray one”, “the pink one” dejan caer el sustantivo con “one”, como el español deja “la gris”, “la rosada”. El material va otra vez sin “de”: “leather”, “fabric”, puestos como si fueran el color."
        }
      ],
      vocabulary: [
        {
          term: "the color before the noun",
          explanation:
            "Al revés del español, el color va ANTES del sustantivo: “a blue ruana”, “red scarves”. Nunca detrás. Es el primer reflejo que hay que invertir al describir en inglés.",
          literal: "el color antes del sustantivo",
          useWhen:
            "Siempre que describas algo con un color en inglés.",
          avoidWhen:
            "Pones el color detrás, “a ruana blue”, calcando el orden español.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["a blue ruana", "red scarves", "a black bag", "word order"],
          example: {
            target: "I want a blue ruana, not a green one.",
            translation: "Quiero una ruana azul, no una verde."
          }
        },
        {
          term: "the adjective never changes",
          explanation:
            "El adjetivo inglés no tiene género ni número: “red scarf”, “red scarves”, “red gloves” -- “red” es siempre igual. No existe “reds” ni una forma femenina.",
          literal: "el adjetivo no cambia nunca",
          useWhen:
            "Con cualquier color y con cualquier sustantivo, singular o plural.",
          avoidWhen:
            "Pluralizas el color, “reds scarves”, arrastrando la concordancia del español.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["red scarves", "black gloves", "no plural", "no gender"],
          example: {
            target: "The red scarves and the black gloves match.",
            translation: "Las bufandas rojas y los guantes negros hacen juego."
          }
        },
        {
          term: "brown, not coffee",
          explanation:
            "El color café en inglés es “brown”. “Coffee” es solo la bebida, así que decir “a coffee jacket” por una chaqueta café es un falso amigo clásico del hispanohablante.",
          literal: "café (color), no café (bebida)",
          useWhen:
            "Al nombrar cualquier cosa de color café en inglés: ojos, cuero, ropa.",
          avoidWhen:
            "Traduces “café” como “coffee” pensando en el color.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["brown", "beige", "dark brown", "color"],
          example: {
            target: "I like the brown backpack, not the gray one.",
            translation: "Me gusta la mochila café, no la gris."
          }
        },
        {
          term: "striped / checked",
          explanation:
            "El patrón se dice con una palabra puesta delante: “a striped shirt” de rayas, “a checked scarf” a cuadros, “a floral dress” de flores, “a spotted tie” de lunares.",
          literal: "de rayas / a cuadros",
          useWhen:
            "Al describir el estampado de una tela en inglés.",
          avoidWhen:
            "Calcas “de líneas” como “of lines”; el inglés dice “striped”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["striped", "checked", "floral", "spotted"],
          example: {
            target: "I prefer the striped shirt to the checked one.",
            translation: "Prefiero la camisa de rayas a la de cuadros."
          }
        },
        {
          term: "leather / wool (material)",
          explanation:
            "El material se pone como adjetivo, sin “de”: “a leather bag” de cuero, “a wool sweater” de lana, “a cotton shirt” de algodón. También vale “made of leather”.",
          literal: "cuero / lana (material)",
          useWhen:
            "Al decir de qué está hecho algo en inglés.",
          avoidWhen:
            "Metes “of” de más, “a bag of leather”, calcando el “de” español.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["leather", "wool", "cotton", "fabric"],
          example: {
            target: "The wool gloves and the leather backpack.",
            translation: "Los guantes de lana y la mochila de cuero."
          }
        },
        {
          term: "light / dark",
          explanation:
            "El matiz va delante del color: “light blue” azul claro, “dark green” verde oscuro. El orden es al revés del español, que pone “claro” u “oscuro” después.",
          literal: "claro / oscuro",
          useWhen:
            "Al precisar el tono de un color en inglés.",
          avoidWhen:
            "Pones el matiz detrás, “blue light”, siguiendo el orden español.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["light blue", "dark green", "pale", "bright"],
          example: {
            target: "I'm after a light blue ruana, not a dark one.",
            translation: "Busco una ruana azul claro, no una oscura."
          }
        },
        {
          term: "the blue one / ones",
          explanation:
            "Para no repetir el sustantivo, el inglés usa “one” en singular y “ones” en plural: “the blue one”, “the red ones”. Es lo que en español se hace dejando caer el sustantivo: “la azul”.",
          literal: "la azul / las azules",
          useWhen:
            "Al referirte a algo ya nombrado sin repetir la palabra.",
          avoidWhen:
            "Omites “one” del todo, “I want the blue”, que en inglés suena incompleto.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["one", "ones", "this one", "that one"],
          example: {
            target: "I'll take the brown one, not the gray one.",
            translation: "Me llevo la café, no la gris."
          }
        }
      ],
      note:
        "Describir en inglés invierte varias costumbres del español. El color va ANTES del sustantivo -- “a blue ruana”, “red scarves” -- y no cambia nunca: no hay género ni plural en el adjetivo. El café como color es “brown”, no “coffee”, que es solo la bebida. El patrón se dice con una palabra propia puesta delante: “striped” de rayas, “checked” a cuadros. El material va como adjetivo sin “de”: “a leather bag”, “wool gloves”. El matiz también va delante: “light blue”, “dark green”. Y para no repetir el sustantivo se usa “one” y “ones”: “the blue one”, “the red ones”.",
      culture: [
        {
          label: "El color va delante y no cambia",
          body:
            "El inglés pone el color antes del sustantivo y lo deja fijo: “a red car”, “red cars”, “red houses” -- “red” nunca se mueve. El hispanohablante tiene que invertir dos hábitos a la vez: adelantar el color y quitarle la concordancia de género y número que el español le exige. Frases como “reds scarves” o “a car red” son el rastro de no haber hecho todavía ese doble cambio, y desaparecen en cuanto el orden inglés se vuelve automático."
        },
        {
          label: "“Brown”, no “coffee”",
          body:
            "El falso amigo más goloso aquí es el café. Como en Colombia el color café comparte palabra con la bebida, es tentador decir “coffee” en inglés para el color -- pero “coffee” es solo el líquido de la taza. El color es “brown”: “brown eyes”, “a brown jacket”. Decir “a coffee jacket” hace pensar en una chaqueta manchada de café, no en su color, y es de los errores que más delatan el calco desde el español."
        },
        {
          label: "Patrón y material como adjetivo",
          body:
            "Donde el español arma el patrón y el material con “de” y “a” -- “de rayas”, “a cuadros”, “de cuero” -- el inglés los mete como una sola palabra delante del sustantivo: “a striped shirt”, “a checked scarf”, “a leather bag”, “wool gloves”. No hay “of” que valga en “a leather bag”. Meter el “de” del español, con “a bag of leather”, suena raro; lo natural es pegar el material al sustantivo como si fuera el color."
        },
        {
          label: "“One” y “ones” para no repetir",
          body:
            "El español deja caer el sustantivo y se queda con el artículo y el color: “la azul”, “las rojas”. El inglés necesita un apoyo, la palabra “one” en singular y “ones” en plural: “the blue one”, “the red ones”. Sin ella, “I want the blue” queda cojo para un oído inglés. En una tienda de Houston, señalar y decir “the brown one, please” es exactamente lo mismo que el “la café, por favor” de Manizales, con esa muletilla de más."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “a ruana blue”",
          whyItFails:
            "El inglés pone el color delante del sustantivo. “A ruana blue” calca el orden español “una ruana azul” y suena al revés; lo natural es “a blue ruana”, con el color primero.",
          sayInstead: "I want a blue ruana."
        },
        {
          mistake: "Saying “reds scarves”",
          whyItFails:
            "El adjetivo inglés no tiene plural ni género. Pluralizar el color, “reds scarves”, arrastra la concordancia del español, que en inglés no existe. El color se queda fijo.",
          sayInstead: "I'll take the red scarves."
        },
        {
          mistake: "Saying “a coffee jacket” for a brown one",
          whyItFails:
            "“Coffee” es la bebida, no el color. Para el color café el inglés usa “brown”, así que “a coffee jacket” evoca una mancha, no un tono. Es un falso amigo puro.",
          sayInstead: "I like the brown jacket."
        },
        {
          mistake: "Saying “a lines shirt” for a striped one",
          whyItFails:
            "El inglés no describe el estampado con “lines”. De rayas es “striped”, una palabra propia puesta delante. “A lines shirt” es un calco de “de líneas” que nadie usa.",
          sayInstead: "I want the striped shirt."
        }
      ],
      variations: [
        {
          form: "Do you have this in light blue?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Al pedir un tono más claro de un color mientras compras; el matiz siempre va delante del color, como en “light blue”."
        },
        {
          form: "I'll take the striped brown one.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Al nombrar algo por su patrón y color con “one”, dejando caer el sustantivo tal como el español deja “la de rayas”."
        },
        {
          form: "Is this leather or fabric?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Al preguntar de qué material está hecho algo antes de comprarlo; el material va como sustantivo, sin “of” ni “de”."
        },
        {
          form: "I prefer the checked one to the floral one.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Al elegir entre dos estampados con “one”, poniendo cada patrón delante como una sola palabra en vez del marco español con “de”."
        }
      ],
      prompt: "Laura wants a blue ruana. Which line puts the color where English needs it?",
      choices: [
        "I'm after a blue ruana, nothing too dark for the weather.",
        "I'm after a ruana blue, nothing too dark for the weather.",
        "I'm after a blue ruanas, nothing too dark for the weather."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "En inglés el color no se pluraliza. ¿Cuál frase deja el adjetivo de color sin cambiar en plural?",
          choices: [
            "I'll take the reds scarves and the blacks gloves, please.",
            "I'll take the red scarfs and the black gloves, please now.",
            "I'll take the red scarves and the black gloves, please."
          ],
          answer: 2,
          tests: "El adjetivo inglés es invariable: “red scarves”, “black gloves”, sin pluralizar el color como haría el español."
        },
        {
          prompt: "Laura describe una mochila café en inglés. ¿Cuál evita el falso amigo con la bebida?",
          choices: [
            "I like the coffee backpack better than the gray leather one.",
            "I like the brown backpack better than the gray leather one.",
            "I like the brownish backpack better than the gray leather one."
          ],
          answer: 1,
          tests: "El color café es “brown”; “coffee” es la bebida y “brownish” queda vago, así que la precisa es “brown”."
        },
        {
          prompt: "¿Cómo se dice que una bufanda es de rayas, sin calcar el español “de líneas”?",
          choices: [
            "I want the striped scarf, not the checked one, thanks.",
            "I want the lines scarf, not the checked one, thanks.",
            "I want the stripes scarf, not the checked one, thanks."
          ],
          answer: 0,
          tests: "De rayas es “striped”, una palabra delante del sustantivo; “lines” y “stripes” como adjetivo no funcionan en inglés."
        }
      ]
    }
  },
  {
    id: "feelings-and-states-in-armenia",
    level: "Starter · Social life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "social-life",
    register: "neutral",
    pathways: ["foundation", "year-12"],
    structure: "feelings-and-states",
    review: "pending",
    es: {
      title: "Antojándose de un paseo al Cocora",
      situation:
        "Cami está aburrida un domingo en Armenia y le propone a Dani salir a caminar al Valle de Cocora. Dani llegó de mal genio por algo del trabajo. Entre los dos van nombrando cómo se sienten: aburrida, con rabia, con miedo, emocionado, contento. En el camino aparecen las trampas del español -- estar y ser, y ese “tener” para los estados.",
      setting: {
        who: "Cami and Dani are close friends in Armenia. She is restless and coaxing; he turns up in a mood and thaws over the plan. They talk the way old friends do, blunt and warm at once.",
        what: "A Sunday plan that turns into a tour of feelings: estar plus an adjective for mood, the meaning shift with ser, and tener plus a noun for states like fear, cold and being in a rush.",
        when: "A gray Sunday afternoon in coffee country, the kind that makes you want to get out of the house.",
        where: "Armenia, in the Quindío, with the Cocora valley and its wax palms a short drive away.",
        why: "Feelings run through every real conversation, yet the corpus holds only six emotion words. Master estar for mood, the estar/ser flip, and tener for states, and you can say how you feel without falling into the classic traps."
      },
      address: {
        form: "mixed",
        who: "Cami and Dani drift between usted and tú the way many paisa friends do, using a joking usted -- “tome”, “con usted” -- alongside easy informality. The closeness is not in the pronoun but in the tone.",
        why: "In the paisa interior even close friends keep an affectionate usted, so the exchange mixes it with tú freely; neither one signals distance here.",
        ifYouSwitch:
          "If Dani dropped the friendly usted for tú throughout, nothing would break -- between these two it is a matter of habit and warmth, not respect, so the mix is exactly what real paisa friends sound like."
      },
      dialogue: [
        {
          speaker: "Cami",
          target: "Uy, Dani, estoy aburrida en esta casa un domingo entero. ¿Salimos a caminar al Cocora?",
          translation: "Ugh, Dani, I'm bored in this house a whole Sunday. Shall we go for a walk to the Cocora?",
          pronunciation: "uy, DA-ni, es-TOY a-bu-RRI-da en ES-ta KA-sa un do-MIN-go en-TE-ro. sa-LI-mos a ka-mi-NAR al ko-KO-ra?",
          literal: "Ooh, Dani, I-am bored in this house a Sunday whole. We-leave to walk to-the Cocora?",
          why: "Mood goes with “estar”: “estoy aburrida”, I feel bored right now. Say “soy aburrida” and it would mean she is a boring person -- a different claim. “Estar” is for how you are, not what you are."
        },
        {
          speaker: "Dani",
          target: "De una, pero llegué con rabia; me puso bravo una vaina del trabajo. Necesito aire.",
          translation: "For sure, but I arrived angry; something at work made me cross. I need air.",
          pronunciation: "de U-na, PE-ro ye-GÉ kon RRA-bia; me PU-so BRA-vo U-na VAI-na del tra-BA-jo. ne-se-SI-to AI-re",
          literal: "Of one, but I-arrived with rage; me it-put angry a thing of-the work. I-need air.",
          why: "Two ways to name anger: “con rabia”, with rage, using “con” plus a noun, and “bravo”, the Colombian word for cross or angry. “Me puso bravo” means something made me angry; “bravo” here is a mood, not bravery."
        },
        {
          speaker: "Cami",
          target: "Tranquilo. No es que el trabajo sea aburrido, es que uno se aburre encerrado. Vamos.",
          translation: "Easy. It's not that work is boring, it's that you get bored cooped up. Let's go.",
          pronunciation: "tran-KI-lo. no es ke el tra-BA-jo SE-a a-bu-RRI-do, es ke U-no se a-BU-rre en-se-RRA-do. VA-mos",
          literal: "Calm. Not is that the work be boring, is that one oneself bores shut-in. We-go.",
          why: "Here is the flip in one line: “el trabajo es aburrido” -- work IS boring, its nature, with ser -- versus “uno se aburre”, one gets bored, the feeling. Same root, opposite side: ser for the cause, the feeling for the person."
        },
        {
          speaker: "Dani",
          target: "Listo, pero con afán, que a oscuras tengo miedo en esa trocha. Igual ando emocionado por ir.",
          translation: "OK, but let's hurry, because in the dark I'm scared on that trail. Still, I'm excited to go.",
          pronunciation: "LIS-to, PE-ro kon a-FÁN, ke a os-KU-ras TEN-go MYE-do en E-sa TRO-cha. i-GWAL AN-do e-mo-syo-NA-do por ir",
          literal: "Ready, but with hurry, that in dark I-have fear in that trail. Same I-walk excited for to-go.",
          why: "States take “tener” plus a noun: “tengo miedo”, I have fear, and “con afán”, with hurry. English uses “to be” for these, but Spanish owns them with “tener”. “Ando emocionado” is a lively way to say I'm excited."
        },
        {
          speaker: "Cami",
          target: "Oiga, y me da pena pedirte el favor, ¿me prestas una chaqueta? Tengo un poco de frío.",
          translation: "Hey, and I feel bad asking you the favor -- will you lend me a jacket? I'm a bit cold.",
          pronunciation: "OI-ga, i me da PE-na pe-DIR-te el fa-VOR, me PRES-tas U-na cha-KE-ta? TEN-go un PO-ko de FRÍ-o",
          literal: "Hear, and me it-gives embarrassment to-ask-you the favor, me you-lend a jacket? I-have a little of cold.",
          why: "“Me da pena” is embarrassment, not pity -- I feel awkward asking. And cold is a state with “tener”: “tengo frío”, I have cold. Say “estoy frío” and you would be talking about your body temperature as an object."
        },
        {
          speaker: "Dani",
          target: "¡Qué pena ni qué nada, tome! Ya se me pasó la rabia y estoy contento de salir con usted.",
          translation: "Don't be silly, here! My anger's gone now and I'm happy to go out with you.",
          pronunciation: "ke PE-na ni ke NA-da, TO-me! ya se me pa-SÓ la RRA-bia i es-TOY kon-TEN-to de sa-LIR kon us-TED",
          literal: "What embarrassment nor what nothing, take! Already itself to-me it-passed the rage and I-am happy of to-leave with you.",
          why: "“Qué pena” waves off her embarrassment. “Se me pasó la rabia” means the anger left me -- states come and go. And mood is “estar” again: “estoy contento”, I feel happy right now, not a permanent trait."
        }
      ],
      vocabulary: [
        {
          term: "estar + adjetivo (ánimo)",
          explanation:
            "Mood and passing states go with “estar”: “estoy aburrida”, “estoy contento”, “estoy triste”. It says how you feel now, and the adjective agrees with you in gender and number.",
          literal: "to-be + adjective (mood)",
          useWhen:
            "Saying how someone feels at the moment: bored, happy, sad, tired.",
          avoidWhen:
            "You mean a permanent trait -- that is “ser”, and it changes the meaning.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["estoy contento", "estoy triste", "estar cansado", "el ánimo"],
          example: {
            target: "Hoy estoy contento, ayer estaba aburrido.",
            translation: "Today I'm happy, yesterday I was bored."
          }
        },
        {
          term: "estar aburrido vs ser aburrido",
          explanation:
            "The classic flip: “estar aburrido” is to feel bored; “ser aburrido” is to be boring. Same adjective, opposite meaning, decided only by estar or ser.",
          literal: "to-be bored vs to-be boring",
          useWhen:
            "Choosing between how you feel and what something is like.",
          avoidWhen:
            "You reach for “soy aburrido” to say you feel bored -- that calls yourself dull.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["estar aburrido", "ser aburrido", "aburrirse", "estar"],
          example: {
            target: "Estoy aburrido, pero la fiesta no es aburrida.",
            translation: "I'm bored, but the party isn't boring."
          }
        },
        {
          term: "estar listo vs ser listo",
          explanation:
            "Another flip: “estar listo” is to be ready; “ser listo” is to be clever. The state and the trait share one word and split on estar versus ser.",
          literal: "to-be ready vs to-be clever",
          useWhen:
            "Saying you're ready to go, or that someone is sharp.",
          avoidWhen:
            "You say “soy listo” to mean ready -- that says you are clever instead.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["estar listo", "ser listo", "listo", "preparado"],
          example: {
            target: "Ya estoy listo; ese niño es muy listo.",
            translation: "I'm ready now; that kid is very clever."
          }
        },
        {
          term: "estar bravo",
          explanation:
            "In Colombia “bravo” means cross or angry, not brave: “está bravo conmigo”, he's angry with me. It goes with “estar” because it is a mood, and “ponerse bravo” is to get angry.",
          literal: "to-be angry",
          useWhen:
            "Naming anger in Colombia: someone is cross, or got cross.",
          avoidWhen:
            "You think it means brave -- that would be “valiente”, a different word.",
          register: "friendly informal",
          region: "Colombia; “bravo” for angry is everyday.",
          related: ["ponerse bravo", "estar molesto", "de mal genio", "con rabia"],
          example: {
            target: "No te pongas bravo, fue sin culpa.",
            translation: "Don't get angry, it wasn't on purpose."
          }
        },
        {
          term: "tener miedo / afán / frío",
          explanation:
            "Many states use “tener” plus a noun where English uses “to be”: “tener miedo” to be scared, “tener afán” to be in a rush, “tener frío” to be cold, “tener rabia” to be furious.",
          literal: "to-have fear / hurry / cold",
          useWhen:
            "Naming a bodily or emotional state Spanish frames with tener.",
          avoidWhen:
            "You copy English with “estar” -- “estoy frío” or “soy miedo” miss the frame.",
          register: "neutral",
          region: "Universal Spanish; “afán” for hurry is very Colombian.",
          related: ["tener miedo", "tener afán", "tener frío", "tener rabia"],
          example: {
            target: "Tengo afán y tengo un poco de frío.",
            translation: "I'm in a rush and I'm a bit cold."
          }
        },
        {
          term: "dar pena (vergüenza)",
          explanation:
            "In Colombia “pena” is embarrassment, not pity: “me da pena” means I'm embarrassed, or I feel bad asking. “Qué pena” is a soft sorry, used to excuse yourself.",
          literal: "to-give embarrassment",
          useWhen:
            "Owning up to shyness or apologizing lightly: asking a favor, squeezing past.",
          avoidWhen:
            "You mean pity -- that is “lástima”; “me da lástima” is I feel sorry for.",
          register: "friendly informal",
          region: "Colombia; “pena” as embarrassment is the norm.",
          related: ["me da pena", "qué pena", "la vergüenza", "la lástima"],
          example: {
            target: "Me da pena molestar, pero, ¿me ayuda?",
            translation: "I feel bad bothering you, but can you help?"
          }
        },
        {
          term: "con rabia / con afán",
          explanation:
            "“Con” plus a noun paints the state you're in: “con rabia”, angrily, “con afán”, in a rush, “con miedo”, fearfully. It describes how you arrive or act, not what you are.",
          literal: "with rage / with hurry",
          useWhen:
            "Coloring an action with the mood behind it: I came angry, I left in a rush.",
          avoidWhen:
            "The feeling is the whole point, not the manner -- then use tener or estar.",
          register: "friendly informal",
          region: "Universal Spanish.",
          related: ["con rabia", "con afán", "con miedo", "de mal genio"],
          example: {
            target: "Llegó con afán y se fue con rabia.",
            translation: "He arrived in a rush and left angry."
          }
        }
      ],
      note:
        "Spanish splits feelings across three frames. Mood and passing states take “estar” plus an adjective: “estoy aburrida”, “estoy contento”, and the adjective agrees with you. Switching to “ser” changes the meaning: “estar aburrido” is to feel bored, but “ser aburrido” is to be boring; “estar listo” is ready, “ser listo” is clever. A whole set of states uses “tener” plus a noun where English uses to be: “tener miedo”, “tener afán”, “tener frío”, “tener rabia”. And in Colombia “pena” is embarrassment, not pity -- “me da pena” means I feel awkward, while pity would be “lástima”. Get estar, the ser flip and tener right and you can say how you feel without the usual traps.",
      culture: [
        {
          label: "Estar for how you are, ser for what you are",
          body:
            "Feelings live with “estar”: “estoy triste”, “estoy contento”, “estoy cansado” -- states that can change by the hour. “Ser” is for what is lasting or definitional, so swapping it in rewrites the sentence. The learner who says “soy aburrido” to mean bored ends up calling themselves a bore. The rule of thumb that carries you far: if a feeling could be different tomorrow, it takes estar, and only estar."
        },
        {
          label: "The estar/ser flips: aburrido and listo",
          body:
            "Two adjectives famously turn on the estar/ser choice. “Estar aburrido” is to feel bored; “ser aburrido” is to be boring. “Estar listo” is to be ready; “ser listo” is to be clever. The same word swings between a passing state and a fixed trait depending on the verb, and choosing the wrong one flips the meaning cleanly. Colombians play with this deliberately -- calling a dull party “aburrida” while insisting they themselves are just “aburridos” for the afternoon."
        },
        {
          label: "Pena is embarrassment, not pity",
          body:
            "In much of Latin America, and firmly in Colombia, “pena” means embarrassment. “Me da pena” is I'm embarrassed or I feel bad asking, and “qué pena” is a soft apology for troubling you -- squeezing past on a bus, arriving late, asking a favor. It does not mean pity; that is “lástima”. This is one of the warmest, most Colombian turns of phrase, and mixing it up with pity leaves people wondering why you feel sorry for them."
        },
        {
          label: "Tener for states, from Cocora to the cold",
          body:
            "A cluster of feelings and bodily states rides on “tener” plus a noun: “tener miedo”, “tener frío”, “tener afán”, “tener hambre”, “tener rabia”. English reaches for to be -- I am scared, I am cold -- but Spanish holds them with tener. On a dusk walk up to the wax palms of the Cocora valley, a paisa will say “tengo afán”, “tengo frío” and “me da pena” in a single breath, three different frames stitched into one very Colombian sentence."
        }
      ],
      pitfalls: [
        {
          mistake: "Decir “soy aburrido” para “estoy aburrido”",
          whyItFails:
            "With “ser”, the sentence stops being about your mood and becomes about your character: “soy aburrido” calls yourself a boring person. Feelings take “estar”, so this swap quietly insults you.",
          sayInstead: "Hoy estoy aburrido en la casa."
        },
        {
          mistake: "Decir “estoy caliente” para “tengo calor”",
          whyItFails:
            "Heat as a state is “tener calor”. “Estoy caliente” is understood as sexually aroused, so the innocent “I'm hot” becomes an accidental and very public double meaning.",
          sayInstead: "Tengo calor, abramos la ventana."
        },
        {
          mistake: "Decir “soy listo” para “estoy listo”",
          whyItFails:
            "“Ser listo” means to be clever, not ready. Saying “soy listo” when you mean you're set to leave claims you're smart instead, and leaves the other person still waiting.",
          sayInstead: "Ya estoy listo, vámonos."
        },
        {
          mistake: "Decir “estoy embarazada” para la vergüenza",
          whyItFails:
            "“Embarazada” means pregnant, not embarrassed -- a notorious false friend with English. For embarrassment Colombians use “me da pena”, so the mix-up announces something very different.",
          sayInstead: "Me da pena, no quería molestar."
        }
      ],
      variations: [
        {
          form: "Estoy que me aburro, hagamos algo.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Nudging a bored afternoon towards a plan, with estar and the reflexive verb."
        },
        {
          form: "No se ponga bravo, era en broma.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Soothing someone who's getting angry, using the very paisa “bravo”."
        },
        {
          form: "Me da pena, pero tengo afán.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Excusing yourself politely while owning both embarrassment and a rush."
        },
        {
          form: "Ando emocionado con el paseo.",
          register: "friendly informal",
          region: "Universal Spanish",
          whenToUse: "Sharing excitement, with “andar” as a lively stand-in for estar."
        }
      ],
      prompt: "Cami is bored at home this Sunday. How does she say she feels bored?",
      choices: [
        "Ay, soy aburrida de verdad, este domingo no pasa nada aquí.",
        "Ay, era aburrida de verdad, este domingo no pasa nada aquí.",
        "Ay, estoy aburrida de verdad, este domingo no pasa nada aquí."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Dani is scared on the dark trail. Which sentence names fear the Spanish way?",
          choices: [
            "En esa trocha oscura estoy miedo, mejor llevemos una linterna.",
            "En esa trocha oscura soy miedoso, mejor llevemos una linterna.",
            "En esa trocha oscura tengo miedo, mejor llevemos una linterna."
          ],
          answer: 2,
          tests: "Fear is a state with “tener”: “tengo miedo”, not “estoy miedo” nor the trait “soy miedoso”."
        },
        {
          prompt: "Cami feels awkward asking a favor. Which uses “pena” in its Colombian sense?",
          choices: [
            "Me da lástima pedirte el favor, pero, ¿me prestas la chaqueta?",
            "Me da pena pedirte el favor, pero, ¿me prestas la chaqueta?",
            "Me da rabia pedirte el favor, pero, ¿me prestas la chaqueta?"
          ],
          answer: 1,
          tests: "In Colombia “me da pena” is embarrassment; “lástima” is pity and “rabia” is anger, both wrong here."
        },
        {
          prompt: "Dani says he's ready to leave. Which sentence means ready, not clever?",
          choices: [
            "Ya estoy listo, arranquemos antes de que oscurezca más.",
            "Ya soy listo, arranquemos antes de que oscurezca más.",
            "Ya tengo listo, arranquemos antes de que oscurezca más."
          ],
          answer: 0,
          tests: "“Estar listo” is ready; “ser listo” is clever, and “tener listo” isn't how the state is framed."
        }
      ]
    },
    en: {
      title: "Antojándose de una caminata en Sídney",
      situation:
        "Cami está aburrida un domingo en Sídney y convence a Josh de salir a caminar. Josh llegó de mal genio por el trabajo. Mientras cuadran el plan, Cami practica cómo se dicen los sentimientos en inglés: con “to be”, no con “tener”; la diferencia entre “bored” y “boring”; y el falso amigo que convierte “embarazada” en un enredo.",
      setting: {
        who: "Cami es colombiana y vive en Sídney; Josh es un amigo australiano que llega de mal humor. Se hablan con la confianza de los amigos, directos y cálidos a la vez.",
        what: "Un plan de domingo que se vuelve un repaso de sentimientos: “to be” más adjetivo para el ánimo, “bored” frente a “boring”, y los estados que el español arma con “tener”.",
        when: "Una tarde gris de domingo, de esas que dan ganas de salir de la casa.",
        where: "Sídney, en Australia, en el apartamento de Cami antes de salir a caminar.",
        why: "En inglés los sentimientos van con “to be”, no con “tener”: se dice “I'm scared”, “I'm cold”, no “tengo miedo” traducido literal. Y acechan trampas como “bored/boring” y el falso amigo “embarrassed”, que no es “embarazada”."
      },
      address: {
        form: "mixed",
        who: "Cami y Josh se tratan con el único “you” del inglés, sin usted ni tú. La cercanía se nota en el tono bromista y en apodos, no en el pronombre, que es el mismo para todo el mundo.",
        why: "El inglés no tiene la pareja usted/tú, así que entre amigos la confianza se marca con el tono, los apodos y el humor, no con la elección de pronombre. Por eso el registro va como mixto.",
        ifYouSwitch:
          "Si Cami quisiera sonar más formal con un desconocido, no cambia el “you” sino las fórmulas: dice “would you mind…” en vez de “can you…”. El pronombre no se mueve; lo que cambia es el envoltorio."
      },
      dialogue: [
        {
          speaker: "Cami",
          target: "Ugh Josh, I'm so bored stuck at home all Sunday. Shall we go for a walk somewhere?",
          translation: "Uy Josh, estoy súper aburrida encerrada en la casa todo el domingo. ¿Salimos a caminar?",
          pronunciation: "og yosh, aim sou bord stok at houm ol SON-dei. shal wi gou for a wok SÓM-wer",
          literal: "Uf Josh, estoy tan aburrida pegada en casa todo domingo. ¿Vamos por una caminata a-algún-lado?",
          why: "El ánimo va con “to be”: “I'm bored”, estoy aburrida. Y ojo con la forma: “bored” con “-ed” es lo que uno siente. Si dijera “I'm boring”, con “-ing”, estaría diciendo que ella es aburrida para los demás."
        },
        {
          speaker: "Josh",
          target: "Let's do it, but I arrived angry -- something at work really made me mad. I need air.",
          translation: "Hagámoslo, pero llegué bravo -- algo del trabajo me puso furioso. Necesito aire.",
          pronunciation: "lets du it, bot ai a-RAIVD AN-gri -- SÓM-thing at werk RÍ-li meid mi mad. ai nid er",
          literal: "Hagámoslo, pero yo-llegué enojado -- algo en trabajo de-verdad me-hizo enojado. Yo-necesito aire.",
          why: "El enojo también va con “to be”: “I arrived angry”, llegué bravo. “Mad” es sinónimo coloquial de “angry”, enojado. “Made me mad” es me puso bravo; en inglés no se dice “I arrived with anger” calcando “con rabia”."
        },
        {
          speaker: "Cami",
          target: "Easy. It's not that work is boring, it's that you get bored cooped up. Come on.",
          translation: "Tranquilo. No es que el trabajo sea aburrido, es que uno se aburre encerrado. Vamos.",
          pronunciation: "Í-si. its not dhat werk is BOR-ing, its dhat iu get bord kupt op. kom on",
          literal: "Fácil. No-es que trabajo es aburrido, es que tú te-pones aburrido enjaulado. Ven vamos.",
          why: "Aquí está el par completo: “work is boring”, con “-ing”, porque el trabajo causa el aburrimiento; “you get bored”, con “-ed”, porque es lo que uno siente. La cosa que aburre lleva “-ing”; la persona aburrida, “-ed”."
        },
        {
          speaker: "Josh",
          target: "OK, but let's hurry -- I'm scared on that dark trail. Still, I'm excited to go.",
          translation: "Listo, pero con afán -- me da miedo esa trocha oscura. Igual estoy emocionado de ir.",
          pronunciation: "ou-kei, bot lets HÓ-rri -- aim skerd on dhat dark treil. stil, aim ek-SAI-tid tu gou",
          literal: "OK, pero apurémonos -- yo-estoy asustado en esa oscura trocha. Aun-así, yo-estoy emocionado para ir.",
          why: "“I'm scared” es tengo miedo, otra vez con “to be”, no con “tener”. “Let's hurry” es apurémonos; el afán se dice con el verbo “to hurry” o con “to be in a hurry”. “Excited” es emocionado, no avergonzado."
        },
        {
          speaker: "Cami",
          target: "Hey, I'm a bit embarrassed to ask, but can I borrow a jacket? I'm a bit cold.",
          translation: "Oye, me da un poco de pena pedirte, pero ¿me prestas una chaqueta? Tengo algo de frío.",
          pronunciation: "hei, aim a bit em-BA-rrast tu ask, bot kan ai BO-rrou a YA-ket? aim a bit kould",
          literal: "Oye, yo-estoy un poco avergonzada de preguntar, pero ¿puedo pedir-prestada una chaqueta? Yo-estoy un poco fría.",
          why: "“I'm embarrassed” es me da pena -- y cuidado, no es “embarazada”, que sería “pregnant”. Y el frío va con “to be”: “I'm cold”, no “I have cold”, que en inglés suena a que uno tiene un resfriado."
        },
        {
          speaker: "Josh",
          target: "Don't be embarrassed, here! My anger's gone and I'm happy to head out with you.",
          translation: "No te dé pena, ¡toma! Ya se me pasó la rabia y estoy contento de salir contigo.",
          pronunciation: "dount bi em-BA-rrast, hir! mai AN-gers gon and aim HA-pi tu hed aut widh iu",
          literal: "No estés avergonzada, ¡toma! Mi enojo-se ido y yo-estoy feliz de salir-cabeza-afuera con tú.",
          why: "“Don't be embarrassed” calma la pena, siempre con “to be”. “My anger's gone” es se me pasó la rabia; el inglés usa el sustantivo “anger”. Y “I'm happy” es estoy contento, el ánimo otra vez con “to be”."
        }
      ],
      vocabulary: [
        {
          term: "to be + adjective (feelings)",
          explanation:
            "En inglés los sentimientos y estados van con “to be”, no con “tener”: “I'm happy”, “I'm sad”, “I'm tired”, “I'm scared”. Es el reflejo contrario al español, que usa mucho “tener” y “estar”.",
          literal: "estar/ser + adjetivo (sentimientos)",
          useWhen:
            "Al decir cómo se siente alguien en inglés.",
          avoidWhen:
            "Calcas el “tener” del español, “I have fear”, en vez de “I'm scared”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["I'm happy", "I'm tired", "I'm scared", "to be"],
          example: {
            target: "I'm happy now; earlier I was bored.",
            translation: "Estoy contento ahora; antes estaba aburrido."
          }
        },
        {
          term: "bored vs boring",
          explanation:
            "El “-ed” es lo que uno siente: “I'm bored”, estoy aburrido. El “-ing” es lo que causa ese sentir: “it's boring”, es aburrido. Confundirlos cambia quién aburre a quién.",
          literal: "aburrido (siente) vs aburrido (causa)",
          useWhen:
            "Al separar la emoción de la cosa que la provoca: “bored/boring”, “tired/tiring”, “excited/exciting”.",
          avoidWhen:
            "Dices “I'm boring” queriendo decir que estás aburrido -- eso dice que TÚ aburres.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["bored", "boring", "excited", "tiring"],
          example: {
            target: "I'm bored, but the film isn't boring.",
            translation: "Estoy aburrido, pero la película no es aburrida."
          }
        },
        {
          term: "embarrassed (not pregnant)",
          explanation:
            "“Embarrassed” es avergonzado, con pena. NO es “embarazada”, que en inglés es “pregnant”. Es el falso amigo más famoso entre el español y el inglés.",
          literal: "avergonzado (no embarazada)",
          useWhen:
            "Al decir que sientes pena o vergüenza en inglés.",
          avoidWhen:
            "Traduces “embarazada” como “embarrassed” -- dirías que estás avergonzada, no encinta.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["embarrassed", "pregnant", "ashamed", "shy"],
          example: {
            target: "I'm embarrassed to ask, but I need help.",
            translation: "Me da pena pedir, pero necesito ayuda."
          }
        },
        {
          term: "I'm hot / I'm cold",
          explanation:
            "El calor y el frío van con “to be”: “I'm hot”, “I'm cold”. “I have cold” suena a que uno tiene un resfriado, y “I have hot” no existe. Es el reverso del “tengo calor / frío”.",
          literal: "tengo calor / tengo frío",
          useWhen:
            "Al hablar de tu temperatura: tienes calor o frío.",
          avoidWhen:
            "Usas “have”, calcando “tengo calor” como “I have hot”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["I'm hot", "I'm cold", "I'm hungry", "I'm thirsty"],
          example: {
            target: "I'm a bit cold; can I borrow a jacket?",
            translation: "Tengo algo de frío; ¿me prestas una chaqueta?"
          }
        },
        {
          term: "angry / mad",
          explanation:
            "Enojado es “angry”, y en registro coloquial “mad”. Va con “to be”: “I'm angry”, “he's mad”. “Made me mad” es me puso bravo. No se dice “I'm with anger” por “con rabia”.",
          literal: "bravo / enojado",
          useWhen:
            "Al nombrar el enojo en inglés, propio o de otro.",
          avoidWhen:
            "Calcas “con rabia” como “with anger”, que no es lo natural.",
          register: "friendly informal",
          region: "“Mad” por enojado es más común en inglés americano y australiano.",
          related: ["angry", "mad", "cross", "annoyed"],
          example: {
            target: "Work made me mad, but it passed.",
            translation: "El trabajo me puso bravo, pero se me pasó."
          }
        },
        {
          term: "scared / afraid",
          explanation:
            "El miedo va con “to be”: “I'm scared”, “I'm afraid of dogs”. Del español “tener miedo” se pasa a “to be scared/afraid”, con “to be” y con “of” para el objeto del miedo.",
          literal: "asustado / con miedo",
          useWhen:
            "Al decir que alguien tiene miedo de algo en inglés.",
          avoidWhen:
            "Dices “I have fear”, traduciendo “tengo miedo” palabra por palabra.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["scared", "afraid", "frightened", "scared of"],
          example: {
            target: "I'm scared of the dark trail at night.",
            translation: "Me da miedo la trocha oscura de noche."
          }
        },
        {
          term: "in a hurry",
          explanation:
            "El afán se dice con “to be in a hurry” o con el verbo “to hurry”: “I'm in a hurry”, “let's hurry”. Del “tengo afán” colombiano se pasa a este marco con “to be” o el verbo.",
          literal: "tener afán",
          useWhen:
            "Al decir que llevas prisa o que hay que apurarse.",
          avoidWhen:
            "Calcas “tengo afán” como “I have hurry”, que no existe.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["in a hurry", "to hurry", "rushed", "quick"],
          example: {
            target: "Let's hurry, I'm in a bit of a hurry.",
            translation: "Apurémonos, tengo un poco de afán."
          }
        }
      ],
      note:
        "El inglés arma casi todos los sentimientos con “to be”, no con “tener”: “I'm scared”, “I'm cold”, “I'm hungry”, donde el español dice “tengo miedo, frío, hambre”. Calcar el “tener” -- “I have cold”, “I have fear” -- es el error más marcado del hispanohablante. Además hay dos trampas propias: “bored” con “-ed” es lo que uno siente y “boring” con “-ing” es lo que lo causa, así que “I'm boring” dice que TÚ aburres; y “embarrassed” es avergonzado, no “embarazada”, que sería “pregnant”. El enojo es “angry” o “mad”, el miedo “scared” o “afraid of”, y el afán “to be in a hurry”.",
      culture: [
        {
          label: "Los estados van con “to be”, no “to have”",
          body:
            "El español dice “tengo miedo, frío, hambre, afán”, con “tener”; el inglés los pone con “to be”: “I'm scared, cold, hungry, in a hurry”. Es de los calcos más pegajosos, porque el hispanohablante traduce “tener” como “have” sin pensar, y suelta “I have cold” o “I have hunger”. Volver el “to be” automático para estos estados es uno de los saltos más grandes hacia sonar natural, y arregla de un golpe una familia entera de frases."
        },
        {
          label: "Bored y boring, la trampa del “-ed / -ing”",
          body:
            "El inglés separa quién siente de qué lo causa con dos terminaciones. “-ed” es la emoción: “I'm bored”, “I'm tired”, “I'm excited”. “-ing” es la fuente: “it's boring”, “it's tiring”, “it's exciting”. Por eso “I'm boring” no significa “estoy aburrido” sino “soy aburrido para los demás”, justo el mismo desliz que en español hace “ser aburrido”. La regla corta: si la cosa te produce el sentimiento, lleva “-ing”; si tú lo sientes, lleva “-ed”."
        },
        {
          label: "“Embarrassed” no es “embarazada”",
          body:
            "El falso amigo más famoso entre el inglés y el español: “embarrassed” es avergonzado, con pena, mientras que “embarazada” es “pregnant”. Decir “I'm embarrassed” es lo correcto para la pena de pedir un favor, pero traducir “embarazada” como “embarrassed” arma un enredo memorable. Para la vergüenza, “embarrassed” o “shy”; para el embarazo, “pregnant”, y nunca se cruzan por más que se parezcan."
        },
        {
          label: "Enojo, miedo y afán, de Cocora a Sídney",
          body:
            "El resto de los estados sigue el mismo molde con “to be”: el enojo es “angry” o el coloquial “mad”, el miedo es “scared” o “afraid of”, y el afán es “to be in a hurry”. Donde el paisa encadena “tengo afán, tengo frío y me da pena” subiendo al Cocora, el mismo hablante en Sídney dice “I'm in a hurry, I'm cold and I'm embarrassed”, tres veces “to be” en fila. Cambiar el chip de “tener” a “to be” es lo que vuelve la frase inglesa de verdad."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “work is bored” for boring",
          whyItFails:
            "El “-ed” es para quien siente, el “-ing” para lo que causa. El trabajo causa el aburrimiento, así que lleva “-ing”: “work is boring”. “Work is bored” diría que el trabajo mismo se siente aburrido.",
          sayInstead: "Work is boring, but I'm not bored."
        },
        {
          mistake: "Saying “I have cold”",
          whyItFails:
            "El frío va con “to be”: “I'm cold”. “I have cold” calca “tengo frío” y en inglés suena a que uno tiene un resfriado, no a que siente frío.",
          sayInstead: "I'm a bit cold, can I borrow a jacket?"
        },
        {
          mistake: "Using “embarrassed” to mean pregnant",
          whyItFails:
            "“Embarrassed” es avergonzado, no encinta. Es un falso amigo con “embarazada”, que en inglés es “pregnant”; cruzarlos cambia por completo lo que dices.",
          sayInstead: "I'm embarrassed to ask you this."
        },
        {
          mistake: "Saying “I have hurry” for afán",
          whyItFails:
            "El afán no se dice con “have”. El inglés usa “to be in a hurry” o el verbo “to hurry”, así que “I have hurry” calca el español y no existe como frase.",
          sayInstead: "Let's hurry, I'm in a hurry."
        }
      ],
      variations: [
        {
          form: "I'm getting bored, let's do something.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Al empujar una tarde aburrida hacia un plan, usando “to be” con la emoción en “-ed”, nunca “I'm boring”, que diría que tú aburres."
        },
        {
          form: "Don't be angry, it was a joke.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Al calmar a alguien que se está enojando; el enojo va con “to be” y con “angry” o el coloquial “mad”, no con “with anger”."
        },
        {
          form: "I'm embarrassed, but I'm in a hurry.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Al excusarse con cortesía, juntando la pena y el afán, ambos con “to be” y sin calcar el “tener” del español."
        },
        {
          form: "I'm really excited about the walk.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Al compartir emoción con “excited” en “-ed”; si dijeras “I'm exciting” estarías diciendo que tú emocionas a los demás."
        }
      ],
      prompt: "Cami is bored at home. Which line says it with the natural English frame?",
      choices: [
        "Ugh, I have boredom at home, this whole Sunday is dead.",
        "Ugh, I am boring at home, this whole Sunday is dead.",
        "Ugh, I am bored at home, this whole Sunday is dead."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Cami tiene frío y pide una chaqueta. ¿Cuál frase usa “to be” y no calca el “tener” del español?",
          choices: [
            "I'm a bit cold, could I borrow your jacket for the walk?",
            "I have a bit cold, could I borrow your jacket for the walk?",
            "I have a bit of cold, could I borrow your jacket for the walk?"
          ],
          answer: 0,
          tests: "El frío va con “to be”: “I'm cold”. “I have cold” calca “tengo frío” y suena a resfriado, no a sensación."
        },
        {
          prompt: "Cami siente pena de pedir el favor. ¿Cuál frase evita el falso amigo con “embarazada”?",
          choices: [
            "I'm pregnant to ask you this, but can you lend me a jacket?",
            "I'm embarrassed to ask you this, but can you lend me a jacket?",
            "I'm ashamed to ask you this, but can you lend me a jacket?"
          ],
          answer: 1,
          tests: "“Embarrassed” es la pena; “pregnant” es embarazada y “ashamed” es una vergüenza mucho más grave."
        },
        {
          prompt: "Josh llegó bravo por el trabajo. ¿Cuál frase dice el enojo con naturalidad en inglés?",
          choices: [
            "I turned up angry because work really made me mad today.",
            "I turned up with anger because work really made me mad today.",
            "I turned up angered because work really made me mad today."
          ],
          answer: 0,
          tests: "El enojo va con “to be” y “angry”; “with anger” calca “con rabia” y “angered” suena forzado."
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/70-calendar-color-and-feeling.js");
