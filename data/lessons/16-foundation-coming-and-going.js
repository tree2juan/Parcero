/*
 * Lesson block: foundation / coming and going.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Every lesson spines on exactly one verb from data/curriculum.js, named in its
 * `verb` field so the coverage report can prove the curriculum is actually
 * taught rather than merely listed. This block takes the three verbs of motion
 * that steer an ordinary Colombian day — salir (to leave, and to go out),
 * subir (to go up, and to upload) and bajar (to go down, and to download) — and
 * builds one situation around each: sorting out a night out, riding a Medellín
 * cable car up to a friend's barrio, and finding the right stop to get off a
 * Bogotá bus.
 *
 * The two directions are mirrors: same number of dialogue turns, same number of
 * vocabulary entries, same number of culture notes, pitfalls, variations and
 * practice questions, and the same optional slots filled on the same rows. That
 * is enforced by test/shape.test.js, not by good intentions.
 *
 * Which language each field is written in is the rule most easily got wrong.
 * The reader does not yet speak what is being taught, so explanation is always
 * in the language the reader already has: English in the `es` direction,
 * Spanish in the `en` direction. Only `title` and `situation` are Spanish in
 * both, because they name the lesson in the picker.
 */
lessons.push(
  {
    id: "sorting-out-a-saturday-night-out",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "everyday-life",
    register: "familiar",
    pathways: ["foundation"],
    verb: "salir",
    review: "pending",
    es: {
      title: "Cuadrar un plan para salir el sábado",
      situation:
        "Alex and his coastal friend Valeria work out a plan by chat to go out Saturday night in Barranquilla. They have to agree on what time each one is free, where to go, and along the way they tease each other a little about their recent dates. The whole chat turns on salir: going out for fun, leaving work, dating someone, and that time everything came out wildly expensive.",
      setting: {
        who: "Valeria is Alex's friend from the coast — warm, quick and direct, the kind who plans the whole night in three messages.",
        what: "They pin down Saturday: what time each finishes work, where to go, and a bit of teasing about who is dating whom.",
        when: "Midweek, going back and forth about the coming weekend.",
        where: "Barranquilla, on the Caribbean coast, where Spanish is fast, tú-based and drops its final -s.",
        why: "Because salir stretches across four ideas English keeps apart: leaving a place, going out for fun, dating someone, and ending up costing a fortune."
      },
      address: {
        form: "tú",
        who: "Valeria and Alex use tú, the universal form on the Caribbean coast even with people you have just met.",
        why: "The coast runs on tú. Where Bogotá reaches for usted with a stranger, a costeño uses tú warmly and immediately; usted can sound cold or standoffish among friends. Vos belongs to Medellín and Cali, not here.",
        ifYouSwitch:
          "If Alex answered Valeria with a careful usted, it would build a wall into a friendly, teasing chat. On the coast the natural, close register is tú, and holding usted with a friend would read as oddly formal or even annoyed."
      },
      dialogue: [
        {
          speaker: "Valeria",
          target: "¿Qué vas a hacer el sábado? ¿Salimos por ahí?",
          translation: "What are you doing Saturday? Shall we go out somewhere?",
          pronunciation: "ke bas a a-SER el SA-ba-do? sa-LEE-mos por ai",
          literal: "What you-go to do the Saturday? We-go-out around there?",
          why: "Here “salir” means to go out socially. “Por ahí” is a vague “out / around”, not a specific place. The nosotros form “salimos” works as a light suggestion — Spanish uses the plain present where English needs “shall we”."
        },
        {
          speaker: "Alex",
          target: "De una. ¿A qué hora sales del trabajo?",
          translation: "Absolutely. What time do you leave work?",
          pronunciation: "de OO-na. a ke O-ra SA-les del tra-BA-jo",
          literal: "Of one. At what hour you-leave of-the work?",
          why: "Same verb, different sense: “salir de” is to leave a place. “De una” is very Colombian for an enthusiastic yes — “right away, for sure”. Note the “de” after salir; leaving somewhere always takes it."
        },
        {
          speaker: "Valeria",
          target: "Salgo a las seis. ¿Salimos a comer y después a bailar?",
          translation: "I leave at six. Shall we go out to eat and then dancing?",
          pronunciation: "SAL-go a las seis. sa-LEE-mos a ko-MER ee des-PWES a bai-LAR",
          literal: "I-leave at the six. We-go-out to eat and after to dance?",
          why: "The yo form is irregular: “salgo”, not “salo”. “Salir a + infinitive” is to go out to do something. Colombians, especially on the coast, chain the night together this way — comer y después bailar."
        },
        {
          speaker: "Alex",
          target: "Dale. La última vez salió carísimo, eso sí.",
          translation: "Sure. Last time it turned out really expensive, mind you.",
          pronunciation: "DA-le. la OOL-ti-ma bes sa-LYO ka-REE-si-mo, E-so see",
          literal: "Give-it. The last time it-came-out very-expensive, that yes.",
          why: "“Salir caro” is an idiom where salir means to turn out or end up a certain way — nothing to do with leaving. “Eso sí” tags on a caveat, like “mind you”. “Dale” is the all-purpose Colombian “go on / sure”."
        },
        {
          speaker: "Valeria",
          target: "Tranquilo. Oye, ¿y tú sigues saliendo con Laura?",
          translation: "Don't worry. Hey, are you still going out with Laura?",
          pronunciation: "tran-KEE-lo. O-ye, ee too SEE-ges sa-LYEN-do kon LAU-ra",
          literal: "Calm. Hear, and you you-continue going-out with Laura?",
          why: "“Salir con alguien” is to date someone — a fourth sense of salir. “Seguir + gerund” is to still be doing something. The falling intonation and quick “oye” are pure coastal rhythm."
        },
        {
          speaker: "Alex",
          target: "Qué va, eso ya se acabó. ¿Cómo te fue a ti con Andrés?",
          translation: "Nah, that's over now. How did it go with you and Andrés?",
          pronunciation: "ke ba, E-so ya se a-ka-BO. KO-mo te fwe a tee kon an-DRES",
          literal: "What goes, that already itself finished. How to-you it-went to you with Andrés?",
          why: "“¿Cómo te fue?” — from irle a uno — is the ritual “how did it go?”, with the indirect object “te”. “Qué va” is a breezy “no way / nah”. “Ya se acabó” marks something just ended."
        }
      ],
      vocabulary: [
        {
          term: "salir (a las seis / del trabajo)",
          explanation:
            "To leave — a place or at a time. Takes “de” before the place you leave, and the yo form is irregular: “salgo”.",
          literal: "to-leave (at the six / of-the work)",
          useWhen:
            "Saying when or from where you depart: “salgo a las seis”, “salí de la casa tarde”.",
          avoidWhen:
            "For going out socially, where salir stands alone or takes “a + activity”, not “de”.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["salir de casa", "salir del trabajo", "salir tarde", "salir temprano"],
          example: {
            target: "Salgo del trabajo a las seis.",
            translation: "I leave work at six."
          }
        },
        {
          term: "salir (por ahí / a bailar)",
          explanation:
            "To go out socially — for fun, to eat, to dance. This is the going-out-for-the-night sense.",
          literal: "to-go-out (around there / to dance)",
          useWhen:
            "Proposing or describing a night out: “¿salimos?”, “salimos a comer”.",
          avoidWhen:
            "When you mean leaving a place; that sense wants “salir de”.",
          register: "friendly informal",
          region: "General Colombian; “salir de rumba” is the going-out-partying phrase.",
          related: ["salir de rumba", "salir a comer", "salir un rato", "salir por ahí"],
          example: {
            target: "El sábado salimos a bailar.",
            translation: "On Saturday we're going out dancing."
          }
        },
        {
          term: "salir con (alguien)",
          explanation:
            "To date someone — to be romantically seeing them, not merely leaving the house together.",
          literal: "to-go-out with (someone)",
          useWhen:
            "Talking about who is dating whom: “sale con Laura”, “están saliendo”.",
          avoidWhen:
            "For going out with a group of friends, where you would name them: “salir con los amigos”.",
          register: "friendly informal",
          region: "General Colombian; “estar cuadrado con alguien” is a coastal way to say seeing someone.",
          related: ["estar saliendo", "salir en serio", "cuadrar con alguien", "andar con"],
          example: {
            target: "¿Tú sigues saliendo con ella?",
            translation: "Are you still going out with her?"
          }
        },
        {
          term: "salir caro / barato",
          explanation:
            "To turn out expensive or cheap — salir here means to end up or work out a certain way.",
          literal: "to-come-out expensive / cheap",
          useWhen:
            "Commenting on how a plan's cost worked out: “salió carísimo”, “nos salió barato”.",
          avoidWhen:
            "For a fixed price tag; that is “es caro”. Salir caro is about how it ended up.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["salir carísimo", "salir a cuenta", "costar un ojo", "salir por un dineral"],
          example: {
            target: "El paseo nos salió carísimo.",
            translation: "The trip ended up costing us a fortune."
          }
        },
        {
          term: "¿cómo te fue?",
          explanation:
            "“How did it go?” — the standard follow-up, built on irle a uno, with the indirect object.",
          literal: "how to-you it-went?",
          useWhen:
            "Asking how an event, date or day turned out: “¿cómo te fue en la cita?”",
          avoidWhen:
            "Calquing English with “¿cómo fuiste?”, which asks how you traveled, not how it went.",
          register: "friendly informal",
          region: "General Colombian; a constant conversational reflex.",
          related: ["¿qué tal te fue?", "me fue bien", "me fue fatal", "¿cómo les fue?"],
          example: {
            target: "¿Cómo te fue en la entrevista?",
            translation: "How did the interview go for you?"
          }
        },
        {
          term: "de una",
          explanation:
            "An enthusiastic yes — “right away / for sure / let's do it”. Instant agreement.",
          literal: "of one",
          useWhen:
            "Jumping on a plan you like: “¿salimos? — ¡de una!”",
          avoidWhen:
            "In formal settings, where “claro que sí” or “con gusto” fits better.",
          register: "friendly informal",
          region: "Very Colombian; heard everywhere, coast to Andes.",
          related: ["de once", "hágale", "listo", "de una vez"],
          example: {
            target: "¿Vamos? — ¡De una!",
            translation: "Shall we go? — Absolutely!"
          }
        },
        {
          term: "cuadrar (un plan)",
          explanation:
            "To arrange or sort out a plan — to line up the details until everyone agrees.",
          literal: "to-square (a plan)",
          useWhen:
            "Setting something up: “cuadremos algo pa'l finde”, “ya cuadramos”.",
          avoidWhen:
            "It also means to date someone (coast) or to add up; let context disambiguate.",
          register: "friendly informal",
          region: "Very Colombian; on the coast “cuadrar” also means to start seeing someone.",
          related: ["cuadrar un plan", "cuadrar algo", "quedar en", "ponerse de acuerdo"],
          example: {
            target: "Cuadremos para el sábado.",
            translation: "Let's sort something out for Saturday."
          }
        }
      ],
      note:
        "Salir does four jobs English splits up. It leaves a place (“salgo del trabajo”, always with “de”), it goes out for the night (“salimos a bailar”), it dates someone (“salir con alguien”), and it turns out a certain way (“salió carísimo”). The yo form is the irregular “salgo”. Keep the prepositions straight — “de” to leave somewhere, “con” to date, “a” before an activity — and pair it with the ritual follow-up “¿cómo te fue?” for any plan that has already happened.",
      culture: [
        {
          label: "One verb, four different exits",
          body:
            "English uses separate words — leave, go out, date, turn out — where Spanish leans on salir with a change of preposition. “Salir de” leaves a place, “salir a” heads out to an activity, “salir con” is dating, and bare “salir caro” means to end up expensive. Learners who lock onto a single translation get tripped when the next sentence uses another sense. Hearing which salir is in play, from the preposition alone, is most of the skill. Once the four click, a huge amount of daily Colombian conversation opens up."
        },
        {
          label: "The coast runs on tú",
          body:
            "Colombia is not one register. Bogotá defaults to usted, even with friends and pets; Medellín and Cali use vos; the Caribbean coast — Barranquilla, Cartagena, Santa Marta — runs on tú, fast and warm. Costeño Spanish also drops or aspirates the final -s, so “¿tú sabe’?” for “¿tú sabes?”, and speaks at a clip that surprises Andean Colombians. Using tú on the coast is not casualness to earn; it is the baseline. Reaching for usted with a new friend there can feel like you are holding them at arm's length."
        },
        {
          label: "“¿Cómo te fue?” — the ritual follow-up",
          body:
            "Colombians ask how things went constantly: “¿cómo te fue?” after a date, an exam, a trip, a workday. It runs on the construction “irle bien/mal a uno” — literally “it went well/badly to someone” — so the person is an indirect object: “me fue bien”, “¿cómo les fue?”. Answering warmly is expected; a flat “bien” with nothing added can read as closed off. The phrase is social glue, a small ritual of interest in each other's day that a guidebook rarely flags but every Colombian uses many times a week."
        },
        {
          label: "Cuadrar: the art of the plan",
          body:
            "Making plans in Colombia has its own verb: “cuadrar”, literally to square something up. You “cuadras un plan”, “cuadras la hora”, “cuadras con la gente” until the pieces fit. On the coast “cuadrar” doubles as starting to date someone — “están cuadrados” means they are an item. Plans themselves are famously elastic; “ahorita salimos” can mean in ten minutes or in two hours, and “de una” signals genuine, immediate enthusiasm. Learning to cuadrar — and to read how firm a plan really is — is a quietly essential social skill."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “salgo el trabajo” for “I leave work”",
          whyItFails:
            "Leaving a place needs “de”. Without it, “salgo el trabajo” has no grammatical footing — salir does not take a bare direct object for the place you exit.",
          sayInstead: "Salgo del trabajo."
        },
        {
          mistake: "Using “dejar” for “leave” when you mean depart",
          whyItFails:
            "English “leave” covers both dejar (leave something behind) and salir (depart). “Dejé a las seis” sounds like you abandoned someone at six; to depart you need salir.",
          sayInstead: "Salí a las seis."
        },
        {
          mistake: "Reading “salir con” as only going out with friends",
          whyItFails:
            "With a single person's name, “salir con Laura” strongly implies dating, not a casual outing. Miss that and you may announce a romance you did not mean to.",
          sayInstead: "Salí con mis amigos. (group) / Salgo con Laura. (dating)"
        },
        {
          mistake: "Asking “¿cómo fuiste?” for “how did it go?”",
          whyItFails:
            "“¿Cómo fuiste?” asks how you went — by what means you traveled. The set phrase for how something turned out uses the indirect object: “¿cómo te fue?”.",
          sayInstead: "¿Cómo te fue?"
        }
      ],
      variations: [
        {
          form: "¿Salimos el sábado?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Proposing a night out to a friend."
        },
        {
          form: "¿Cuadramos algo pa'l finde?",
          register: "friendly informal",
          region: "Caribbean coast / general",
          whenToUse: "Loosely arranging weekend plans, coastal style."
        },
        {
          form: "¿A qué hora sales?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Asking what time someone leaves or finishes."
        },
        {
          form: "Salí a las seis en punto.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Stating exactly when you left."
        },
        {
          form: "Nos salió carísimo.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Reporting that something turned out very pricey."
        }
      ],
      prompt: "Valeria asks “¿a qué hora sales del trabajo?” What is she asking Alex?",
      choices: [
        "What time he leaves work — “salir de” means to leave a place, so she is asking about his departure time.",
        "What time he heads out to party after work, taking “salir” only in its going-out-for-the-night sense here.",
        "What sort of job he actually does for a living, reading “sales” as if it pointed to his trade or profession."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Valeria asks “¿sigues saliendo con Laura?” What does “salir con” imply here?",
          choices: [
            "That Alex regularly leaves the building alongside Laura, the way a neighbor or a roommate might, with nothing romantic.",
            "That Alex is dating Laura — with one person's name, “salir con alguien” is the ordinary way to say you are seeing someone.",
            "That Alex goes out to run errands on Laura's behalf, doing her favors around town rather than seeing her socially at all."
          ],
          answer: 1,
          tests: "salir con as dating, not a casual outing"
        },
        {
          prompt: "What does “la última vez salió carísimo” mean?",
          choices: [
            "That the last outing wrapped up really early, taking “salió” as leaving at an early hour before the night got going.",
            "That the last outing sold out really fast, reading “salió” as if the tables or the tickets had all been snapped up.",
            "That it turned out really expensive — “salir caro” is an idiom where salir means to end up or work out a certain way."
          ],
          answer: 2,
          tests: "salir caro as turning out expensive"
        },
        {
          prompt: "Which correctly asks “how did it go?” in Colombian Spanish?",
          choices: [
            "“¿Cómo te fue?”, using the indirect object “te” — the fixed way to ask how something turned out for someone.",
            "“¿Cómo fuiste?”, which actually asks how you went or traveled somewhere, not how the experience worked out for you.",
            "“¿Cómo estuviste?”, which asks how you were or how you behaved, rather than how the event itself went in the end."
          ],
          answer: 0,
          tests: "¿cómo te fue? construction"
        }
      ]
    },
    en: {
      title: "Cuadrar un plan para salir el sábado",
      situation:
        "Alejandra y su amiga estadounidense Megan cuadran por chat un plan para salir el sábado por la noche en Houston. Tienen que ponerse de acuerdo en a qué hora sale cada una del trabajo, adónde ir, y de paso se molestan un poco por las citas recientes. Toda la charla gira en torno a “salir”, que en inglés se reparte en varios verbos: go out para divertirse, get off para salir del trabajo, go out with para tener pareja, y turn out para salir caro.",
      setting: {
        who: "Megan es una amiga estadounidense de Alejandra: relajada, rápida y directa, de las que arman todo el plan en tres mensajes.",
        what: "Cierran el sábado: a qué hora sale cada una del trabajo, adónde ir, y unas bromas sobre quién sale con quién.",
        when: "Entre semana, yendo y viniendo sobre el fin de semana que se acerca.",
        where: "Houston, donde el inglés reparte en varios verbos lo que el español junta en un solo salir.",
        why: "Porque “salir” se traduce distinto según el sentido: go out (divertirse), leave o get off (salir de un lugar o del trabajo), go out with (tener una relación) y turn out (resultar, salir caro)."
      },
      address: {
        form: "mixed",
        who: "Megan y Alejandra se tratan con el mismo “you” y el nombre de pila, como dos amigas cercanas.",
        why: "El inglés no distingue tú de usted: hay un solo “you”. La cercanía la marcan el nombre, el tono y expresiones como “let's”. El calor del tú costeño se traslada al inglés por el trato relajado, no por un pronombre distinto.",
        ifYouSwitch:
          "Ponerse ceremoniosa con Megan —hablarle como en una carta formal— sonaría absurdo entre amigas. El inglés baja el registro con las palabras que elige, no cambiando de pronombre, porque el “you” es siempre el mismo."
      },
      dialogue: [
        {
          speaker: "Megan",
          target: "What are you up to Saturday? Want to go out?",
          translation: "¿Qué vas a hacer el sábado? ¿Salimos?",
          pronunciation: "uats yu ap tu SA-tur-dei? uant tu gou aut",
          literal: "¿Qué estás para-arriba sábado? ¿Quieres ir afuera?",
          why: "“Go out” es el “salir” de divertirse. “What are you up to?” es un “¿qué vas a hacer?” coloquial. El inglés separa “go out” (divertirse) de “leave” (irse de un lugar)."
        },
        {
          speaker: "Alejandra",
          target: "For sure. What time do you get off work?",
          translation: "De una. ¿A qué hora sales del trabajo?",
          pronunciation: "for shur. uat taim du yu get of uerk",
          literal: "Para seguro. ¿Qué hora tú consigues-fuera trabajo?",
          why: "Aquí “salir del trabajo” es “get off work”, un phrasal distinto de “go out”. El inglés no usa el mismo verbo para las dos ideas. “For sure” hace el papel del “de una”."
        },
        {
          speaker: "Megan",
          target: "I get off at six. Should we go out for dinner and then dancing?",
          translation: "Salgo a las seis. ¿Salimos a comer y después a bailar?",
          pronunciation: "ai get of at siks. shud ui gou aut for DI-ner and den DAN-sing",
          literal: "Yo consigo-fuera a seis. ¿Deberíamos ir afuera para cena y luego bailando?",
          why: "“Go out for + sustantivo” (for dinner) o “go out to + verbo” arma la salida. “Get off at six” repite el phrasal para la hora de salida. El español encadena con “a comer y a bailar”."
        },
        {
          speaker: "Alejandra",
          target: "Sounds good. Last time it turned out really expensive, though.",
          translation: "Dale. La última vez salió carísimo, eso sí.",
          pronunciation: "saunds gud. last taim it ternd aut RI-li eks-PEN-siv, dou",
          literal: "Suena bien. Última vez ello volteó-afuera realmente caro, aunque.",
          why: "“Salir caro” es “turn out expensive”, no “go out expensive”. “Turn out” es el phrasal para “resultar”. El “though” al final es el “eso sí”, un matiz que se cuela al terminar."
        },
        {
          speaker: "Megan",
          target: "Don't worry. Hey, are you still going out with David?",
          translation: "Tranquila. Oye, ¿todavía sales con David?",
          pronunciation: "dont UO-rri. jei, ar yu stil GOU-ing aut uid DEI-vid",
          literal: "No preocupes. Oye, ¿estás todavía yendo-afuera con David?",
          why: "“Go out with someone” es “salir con alguien” en el sentido de pareja. El inglés añade “with” + persona. “Still + gerundio” traduce el “seguir + gerundio”."
        },
        {
          speaker: "Alejandra",
          target: "Nah, that's over now. How did it go with you and Andrew?",
          translation: "Qué va, eso ya se acabó. ¿Cómo te fue con Andrew?",
          pronunciation: "na, dats OU-ver nau. jau did it gou uid yu and AN-dru",
          literal: "Nah, eso está sobre ahora. ¿Cómo hizo ello ir con tú y Andrew?",
          why: "“How did it go?” es el “¿cómo te fue?”. El inglés pregunta con “go” (ir) cómo resultó algo, y con “it” como sujeto. “That's over” es “eso se acabó”."
        }
      ],
      vocabulary: [
        {
          term: "go out",
          explanation:
            "El “salir” de divertirse: ir a comer, a bailar, a tomar algo. No sirve para salir de un lugar.",
          literal: "ir afuera",
          useWhen:
            "Al proponer o describir una salida nocturna: “want to go out?”, “we went out dancing”.",
          avoidWhen:
            "Para salir de un sitio o del trabajo, donde el inglés usa “leave” o “get off”.",
          register: "amistoso informal",
          region: "Inglés universal; “head out” es una variante más relajada.",
          related: ["go out tonight", "go out for drinks", "go out dancing", "head out"],
          example: {
            target: "Do you want to go out on Saturday?",
            translation: "¿Quieres salir el sábado?"
          }
        },
        {
          term: "get off work / leave work",
          explanation:
            "Salir del trabajo. El inglés usa un phrasal (“get off”) o “leave”, no “go out”, para terminar la jornada.",
          literal: "conseguir-fuera del trabajo / dejar el trabajo",
          useWhen:
            "Al decir a qué hora terminas de trabajar: “I get off at six”.",
          avoidWhen:
            "Con “go out from work”, un calco que no se dice en inglés.",
          register: "neutro",
          region: "Inglés universal; “clock out” es marcar la salida en el reloj.",
          related: ["get off work", "leave work", "finish work", "clock out"],
          example: {
            target: "What time do you get off work?",
            translation: "¿A qué hora sales del trabajo?"
          }
        },
        {
          term: "go out with (someone)",
          explanation:
            "Salir con alguien en el sentido de pareja. Con el nombre de una persona, implica una relación.",
          literal: "ir afuera con (alguien)",
          useWhen:
            "Al hablar de quién está saliendo con quién: “she's going out with David”.",
          avoidWhen:
            "Para salir con un grupo de amigos, donde se nombra al grupo: “go out with friends”.",
          register: "amistoso informal",
          region: "Inglés universal; “see someone” y “date” son alternativas.",
          related: ["go out with", "see someone", "date someone", "be seeing"],
          example: {
            target: "Are you still going out with her?",
            translation: "¿Todavía sales con ella?"
          }
        },
        {
          term: "turn out (expensive)",
          explanation:
            "Resultar, salir de cierta manera. “Salir caro” es “turn out expensive”, no un verbo de salir.",
          literal: "voltear-afuera (caro)",
          useWhen:
            "Al comentar cómo resultó algo: “it turned out great”, “it turned out expensive”.",
          avoidWhen:
            "Con “go out expensive”, que mezcla el sentido de divertirse con el de resultar.",
          register: "neutro",
          region: "Inglés universal; “end up” funciona casi igual.",
          related: ["turn out", "turn out well", "end up", "work out"],
          example: {
            target: "The trip turned out really expensive.",
            translation: "El paseo salió carísimo."
          }
        },
        {
          term: "how did it go?",
          explanation:
            "El “¿cómo te fue?”. El inglés pregunta con “go” y con “it” como sujeto, no con “you”.",
          literal: "¿cómo hizo ir?",
          useWhen:
            "Al preguntar cómo resultó un evento, una cita o un día: “how did the date go?”.",
          avoidWhen:
            "Con “how did you go?”, que en inglés norteamericano suena raro y parece preguntar cómo viajaste.",
          register: "amistoso informal",
          region: "Inglés universal; reflejo constante en la conversación.",
          related: ["how did it go?", "how'd it go?", "how was it?", "did it go well?"],
          example: {
            target: "How did the interview go?",
            translation: "¿Cómo te fue en la entrevista?"
          }
        },
        {
          term: "for sure",
          explanation:
            "Un sí entusiasta — el “de una”. Aceptación inmediata y con ganas.",
          literal: "para seguro",
          useWhen:
            "Al apuntarte de una a un plan que te gusta: “want to go out? — for sure!”.",
          avoidWhen:
            "En registros muy formales, donde “certainly” o “of course” encaja mejor.",
          register: "amistoso informal",
          region: "Inglés universal, en especial en Norteamérica.",
          related: ["for sure", "definitely", "absolutely", "sounds good"],
          example: {
            target: "For sure, let's do it.",
            translation: "De una, hagámoslo."
          }
        },
        {
          term: "make plans",
          explanation:
            "Cuadrar un plan — dejar los detalles amarrados. El inglés dice “make plans” o “sort something out”.",
          literal: "hacer planes",
          useWhen:
            "Al organizar algo: “let's make plans for the weekend”.",
          avoidWhen:
            "Con “do plans”, un error común; el verbo correcto es “make”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["make plans", "sort something out", "figure out plans", "set something up"],
          example: {
            target: "Let's make plans for Saturday.",
            translation: "Cuadremos algo para el sábado."
          }
        }
      ],
      note:
        "El español “salir” se reparte en inglés en varios verbos. Divertirse es “go out”; salir de un lugar o del trabajo es “leave” o “get off”; tener pareja es “go out with”; y resultar de cierta manera es “turn out”. Cada sentido pide su verbo, así que no se puede traducir “salir” siempre igual. Y ojo con la pregunta ritual “¿cómo te fue?”: en inglés es “how did it go?”, con “it” de sujeto, nunca “how did you go?”.",
      culture: [
        {
          label: "Un “salir”, varios verbos en inglés",
          body:
            "El español estira “salir” con un cambio de preposición: salir de, salir a, salir con, salir caro. El inglés, en cambio, tiene una palabra distinta para cada idea: leave o get off para irse, go out para divertirse, go out with para tener pareja, turn out para resultar. El hispanohablante que traduce “salir” siempre igual acaba diciendo cosas como “go out from work”. Aprender a escoger el verbo inglés según el sentido —y no según la palabra española— es la clave para que la frase suene natural y no calcada."
        },
        {
          label: "“Go out with” es tener pareja",
          body:
            "En inglés, “go out with someone” no es salir un rato con esa persona: implica una relación, estar saliendo en el sentido romántico. “I went out with my friends” (en plural, con amigos) es una salida de grupo, pero “I'm going out with David” es que David es tu pareja. El matiz está en si nombras a una sola persona o a un grupo. Confundirlo puede hacerte anunciar un noviazgo que no existe, o al revés, sonar frío sobre alguien con quien de verdad estás. Es el mismo filo que tiene “salir con” en español."
        },
        {
          label: "“How did it go?” — la pregunta ritual",
          body:
            "El inglés pregunta cómo resultó algo con “go”: “how did it go?”, “how did the exam go?”, “how'd the date go?”. Lo curioso para el hispanohablante es que el sujeto es “it”, la cosa, no “you”: no se dice “how did you go?”, que en inglés norteamericano suena a cómo viajaste. El español lo arma al revés, con la persona como objeto indirecto: “¿cómo te fue?”. Interiorizar “how did it go?” como bloque fijo evita el calco y suelta una de las preguntas más frecuentes del día a día."
        },
        {
          label: "“Make plans”, no “do plans”",
          body:
            "Cuadrar un plan en inglés es “make plans”, con “make”, no con “do”. El hispanohablante duda entre los dos porque el español usa un solo “hacer”, pero el inglés reparte: “make a decision”, “make a plan”, “make an effort”, frente a “do the work”, “do a favor”. Para organizar una salida hay además giros como “sort something out”, “set something up” o “figure out plans”. Elegir “make” con planes es un detalle pequeño que delata de inmediato si uno domina el inglés real o lo está traduciendo del español."
        }
      ],
      pitfalls: [
        {
          mistake: "“I go out from work at six.”",
          whyItFails:
            "Calca “salir de” con “go out from”. El inglés reserva “go out” para divertirse; salir del trabajo es “get off work” o “leave work”.",
          sayInstead: "I get off work at six."
        },
        {
          mistake: "“Last night it went out very expensive.”",
          whyItFails:
            "Calca “salió caro” con “go out”. Para resultar de cierta manera el inglés usa “turn out” o “end up”, no “go out”.",
          sayInstead: "Last night it turned out really expensive."
        },
        {
          mistake: "“How did you go on the date?”",
          whyItFails:
            "Calca “¿cómo te fue?” poniendo “you” como sujeto. En inglés norteamericano suena a cómo viajaste; la pregunta correcta lleva “it”.",
          sayInstead: "How did the date go?"
        },
        {
          mistake: "“I want to leave with my friends on Saturday.”",
          whyItFails:
            "Aquí se quiere decir salir a divertirse, pero “leave” es irse de un lugar. Para la salida social el inglés usa “go out”.",
          sayInstead: "I want to go out with my friends on Saturday."
        }
      ],
      variations: [
        {
          form: "Want to go out Saturday?",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al proponerle a alguien una salida."
        },
        {
          form: "Should we make a plan for the weekend?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al organizar algo con más antelación."
        },
        {
          form: "What time do you get off?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al preguntar a qué hora sale alguien del trabajo."
        },
        {
          form: "I left right at six.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al decir a qué hora saliste."
        },
        {
          form: "It turned out really expensive.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al comentar que algo salió caro."
        }
      ],
      prompt: "Megan pregunta “what time do you get off work?” ¿Qué le pregunta a Alejandra?",
      choices: [
        "A qué hora sale del trabajo — “get off work” es el phrasal para salir del trabajo, así que pregunta por su hora de salida.",
        "A qué hora sale de fiesta después del trabajo, tomando la frase solo en el sentido de salir a divertirse por la noche.",
        "Qué tipo de trabajo hace para ganarse la vida, leyendo la pregunta como si fuera sobre su oficio o su cargo en la empresa."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Megan pregunta “are you still going out with David?” ¿Qué implica “go out with”?",
          choices: [
            "Que Alejandra sale de la casa junto a David como lo haría con un vecino o un compañero de piso, sin nada romántico de por medio.",
            "Que Alejandra está saliendo con David en el sentido de pareja — con el nombre de una persona, “go out with” es tener una relación.",
            "Que Alejandra sale a hacer diligencias de parte de David, encargándose de sus vueltas en vez de verlo por interés romántico alguno."
          ],
          answer: 1,
          tests: "go out with como tener pareja"
        },
        {
          prompt: "¿Qué significa “last time it turned out really expensive”?",
          choices: [
            "Que la última salida terminó muy temprano, tomando “turned out” como salir o irse antes de que la noche arrancara del todo.",
            "Que la última vez se agotaron las entradas muy rápido, leyendo “turned out” como que todo se vendió en cuestión de minutos.",
            "Que resultó muy caro — “turn out” es el phrasal para “resultar”, el que traduce el “salir caro” del español cuando algo cuesta más."
          ],
          answer: 2,
          tests: "turn out como resultar"
        },
        {
          prompt: "¿Cuál pregunta correctamente “¿cómo te fue?” en inglés?",
          choices: [
            "“How did it go?”, con “it” como sujeto — es la forma fija en que el inglés pregunta cómo resultó algo para alguien.",
            "“How did you go?”, que en inglés norteamericano suena raro y parece preguntar cómo viajaste, no cómo te fue en algo.",
            "“How were you?”, que pregunta cómo estabas o cómo te portaste, y no cómo resultó la experiencia en sí misma al final."
          ],
          answer: 0,
          tests: "how did it go, con it como sujeto"
        }
      ]
    }
  },
  {
    id: "riding-the-cable-car-up-to-a-friends-barrio",
    level: "Starter · Getting around",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "familiar",
    pathways: ["foundation"],
    verb: "subir",
    review: "pending",
    es: {
      title: "Subir en el metrocable hasta el barrio de un amigo",
      situation:
        "Alex goes up to visit his paisa friend Sebastián, who lives in a high neighborhood of Medellín reached by metrocable. They get into the cabin, ride up the hill over the rooftops, talk about the view, turn the music up and Alex offers to upload the photos from the outing. Everything turns on subir: getting onto transportation, going up a hill, turning up the volume and the price, and the modern subir of uploading something to the internet.",
      setting: {
        who: "Sebastián is Alex's paisa friend, who lives up in a hillside barrio reached by the metrocable cable car.",
        what: "Riding the cabin up over the rooftops, talking about the climb and the view, turning the music up, and uploading the photos.",
        when: "A weekend afternoon, heading up to Sebastián's place for lunch.",
        where: "Medellín, whose metro and metrocable literally climb the mountainsides into the comunas.",
        why: "Because subir covers going up (a hill, stairs, transport), raising something (volume, prices) and the modern sense of uploading a file."
      },
      address: {
        form: "vos",
        who: "Sebastián uses vos with Alex, the paisa default between friends, softened by “parce” and diminutives.",
        why: "In Medellín and Antioquia vos is the warm everyday form: commands like “subí” (go up / turn up) and “subite” (get on) end in a stressed final syllable. It is close, affectionate speech, the natural register between two friends.",
        ifYouSwitch:
          "Answering Sebastián with usted would cool a warm moment, and tú would quietly mark Alex as not from Medellín. Vos is what fits a friend here; the paisa ear notices instantly which one you reach for."
      },
      dialogue: [
        {
          speaker: "Sebastián",
          target: "Subite, parce, que este cable sube derechito a mi barrio.",
          translation: "Hop on, man, this cable car goes straight up to my neighborhood.",
          pronunciation: "soo-BEE-te, PAR-se, ke ES-te KA-ble SOO-be de-re-CHEE-to a mi BA-rryo",
          literal: "Get-yourself-up, buddy, that this cable goes-up straight to my neighborhood.",
          why: "Two senses at once: “subite” is the vos command of subirse (get on / board), and “sube” is subir as climb (it goes up). The diminutive “derechito” softens “straight”, a very paisa touch."
        },
        {
          speaker: "Alex",
          target: "Uy, ¡cómo subimos! Se ve toda la ciudad desde acá.",
          translation: "Wow, how high we climb! You can see the whole city from here.",
          pronunciation: "ooy, KO-mo soo-BEE-mos! se be TO-da la syoo-DAD DES-de a-KA",
          literal: "Wow, how we-go-up! Itself sees all the city from here.",
          why: "“Subimos” is subir as physical ascent — the cabin rising over the comunas is the classic Medellín image. “Se ve” is the impersonal “you/one can see”, common for describing a view."
        },
        {
          speaker: "Sebastián",
          target: "Subí el volumen a la canción, ¿querés? Es mi favorita.",
          translation: "Turn the song up, would you? It's my favorite.",
          pronunciation: "soo-BEE el bo-LOO-men a la kan-SYON, ke-RES? es mi fa-bo-REE-ta",
          literal: "Go-up the volume to the song, you-want? It-is my favorite.",
          why: "“Subir el volumen” is to turn up the volume — subir as raise, not climb. Here “subí” is the vos command of plain subir, stressed on the last syllable, and “querés” is vos too."
        },
        {
          speaker: "Alex",
          target: "Listo. ¿Y estas fotos las subo a Instagram?",
          translation: "Done. And shall I upload these photos to Instagram?",
          pronunciation: "LEES-to. ee ES-tas FO-tos las SOO-bo a ins-ta-GRAM",
          literal: "Ready. And these photos them I-upload to Instagram?",
          why: "The modern sense: “subir” is to upload. The object pronoun “las” (them) comes before the conjugated verb “subo”. Same verb as climbing a hill, now pointed at the internet."
        },
        {
          speaker: "Sebastián",
          target: "¡De una! Subilas. Y ojo, que subiendo se siente el frío.",
          translation: "Definitely! Upload them. And heads up, as we go up you feel the cold.",
          pronunciation: "de OO-na! soo-BEE-las. ee O-jo, ke soo-BYEN-do se SYEN-te el FREE-o",
          literal: "Of one! Upload-them. And eye, that going-up itself feels the cold.",
          why: "“Subilas” is the vos command with the pronoun attached (upload them). “Subiendo” is the gerund — as one goes up. Gaining altitude really does drop the temperature in Medellín's hills."
        },
        {
          speaker: "Alex",
          target: "Verdad. Y me imagino que los precios también suben allá arriba.",
          translation: "True. And I imagine prices go up there too, up high.",
          pronunciation: "ber-DAD. ee me ee-ma-JEE-no ke los PRE-syos tam-BYEN SOO-ben a-LYA a-RREE-ba",
          literal: "True. And myself I-imagine that the prices also go-up there up.",
          why: "“Los precios suben” is subir as increase — a fifth sense in one short conversation. The third-person plural “suben” agrees with precios; “allá arriba” means up there, high on the hillside."
        }
      ],
      vocabulary: [
        {
          term: "subirse (a)",
          explanation:
            "To get on or board a vehicle. Reflexive, and it takes “a” before the bus, metro or cable car.",
          literal: "to-get-oneself-up (to)",
          useWhen:
            "Boarding transport: “subite al bus”, “me subo al metro”.",
          avoidWhen:
            "Dropping the “a”: “subir el bus” (no preposition) would mean to raise the bus itself.",
          register: "friendly informal",
          region: "General Colombian; the vos command “subite” is paisa.",
          related: ["subirse al bus", "subirse al metro", "súbete", "subite"],
          example: {
            target: "Subite al metro conmigo.",
            translation: "Get on the metro with me."
          }
        },
        {
          term: "subir (la loma / las escaleras)",
          explanation:
            "To go up — a hill, stairs, a floor. The physical-ascent sense, with a direct object or “a”.",
          literal: "to-go-up (the hill / the stairs)",
          useWhen:
            "Climbing something: “subir la loma”, “subir al tercer piso”.",
          avoidWhen:
            "Adding “arriba”; “subir arriba” is redundant, since up is already in the verb.",
          register: "neutral",
          region: "General Colombian; “subir al barrio” is everyday in hillside Medellín.",
          related: ["subir la loma", "subir a pie", "subir las escaleras", "subir al barrio"],
          example: {
            target: "Toca subir la loma a pie.",
            translation: "We have to walk up the hill."
          }
        },
        {
          term: "subir (el volumen / el precio)",
          explanation:
            "To raise or turn up — the volume, the price, your voice, a salary. Subir as increase.",
          literal: "to-raise (the volume / the price)",
          useWhen:
            "Turning something up: “subí el volumen”, “subieron los precios”.",
          avoidWhen:
            "Calquing “turn up” with a “put up” phrase; Spanish just uses subir.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["subir el volumen", "subir el sueldo", "subir los precios", "subir la voz"],
          example: {
            target: "Subieron el precio del pasaje.",
            translation: "They raised the fare."
          }
        },
        {
          term: "subir (una foto / un archivo)",
          explanation:
            "To upload — a photo, a video, a file. The digital sense, alongside the more formal “cargar”.",
          literal: "to-upload (a photo / a file)",
          useWhen:
            "Posting or uploading online: “subir una foto”, “subir a la nube”.",
          avoidWhen:
            "Where English says download; that reverse direction is “bajar / descargar”.",
          register: "neutral",
          region: "General Colombian; universal in digital Spanish.",
          related: ["subir una foto", "subir a la nube", "subir un video", "subir a Drive"],
          example: {
            target: "Ya subí las fotos al grupo.",
            translation: "I already uploaded the photos to the group."
          }
        },
        {
          term: "subir de (peso / puesto)",
          explanation:
            "To go up in something — to gain weight, get a promotion, move up a level. Idiomatic “subir de”.",
          literal: "to-go-up in (weight / position)",
          useWhen:
            "Talking about gaining or rising: “subí de peso”, “subió de puesto”.",
          avoidWhen:
            "Calquing “gain weight” as “ganar peso”; Spanish frames it as “subir de peso”.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["subir de peso", "subir de puesto", "subir de nivel", "subir de categoría"],
          example: {
            target: "Subí de peso en diciembre.",
            translation: "I gained weight over December."
          }
        },
        {
          term: "la loma / la subida",
          explanation:
            "The hill / the climb. Paisa geography: Medellín is built up the sides of a valley.",
          literal: "the hill / the climb",
          useWhen:
            "Describing steep terrain: “vivo loma arriba”, “qué subida tan berraca”.",
          avoidWhen:
            "For a gentle rise; “colina” is softer, while “loma” and “cuesta” imply real effort.",
          register: "friendly informal",
          region: "Very Colombian; “la subida” is any uphill stretch.",
          related: ["la loma", "la subida", "la cuesta", "empinado"],
          example: {
            target: "El barrio queda loma arriba.",
            translation: "The neighborhood is up the hill."
          }
        },
        {
          term: "el metrocable / la comuna",
          explanation:
            "Medellín's cable-car lines and the hillside neighborhoods (comunas) they serve.",
          literal: "the metro-cable / the comuna",
          useWhen:
            "Talking about getting around the hills: “subimos en el metrocable”.",
          avoidWhen:
            "Assuming “comuna” means a commune; in Colombia it is an administrative district.",
          register: "neutral",
          region: "Medellín specifically; the metrocable is a paisa landmark.",
          related: ["metrocable", "la comuna", "el metro", "la estación"],
          example: {
            target: "La comuna se conecta con el metrocable.",
            translation: "The comuna connects via the metrocable."
          }
        }
      ],
      note:
        "Subir bundles up several ideas: boarding transport (reflexive “subirse a”), climbing a hill or stairs (“subir la loma”), raising something (“subir el volumen”, “subir el precio”), and uploading online (“subir una foto”). Watch the prepositions — “subirse a” to board, and never “subir arriba”, which repeats itself. Note the irregular touches in paisa vos: “subí”, “subite”, “subilas”. And keep the idiom “subir de peso” for gaining weight, rather than the calqued “ganar peso”.",
      culture: [
        {
          label: "A city you go up and down",
          body:
            "Medellín sits in a narrow valley, so life runs uphill and down. Poorer neighborhoods historically climbed the steepest slopes, the comunas, where buses struggled and walking meant long, punishing “subidas”. “Subir al barrio” is a literal daily act, not a metaphor. The language reflects the terrain: people talk about living “loma arriba”, about which streets are “empinadas”, about the calves you earn from the climb. Understanding subir and bajar in Medellín starts with understanding that the city is vertical, and that going up is often the hard part of the day."
        },
        {
          label: "The metrocable changed the comunas",
          body:
            "In 2004 Medellín did something few cities had tried: it ran cable cars, the metrocable, as public transit up to the hillside comunas, linking them to the metro below. A trip that once meant an exhausting climb or a slow, crowded bus became a smooth ride over the rooftops. It was social urbanism — bringing investment and dignity to neighborhoods long cut off — and it reshaped daily life for hundreds of thousands. Tourists now ride it for the view, but for residents it is simply how you subir home. Few guidebooks explain how transformative it was."
        },
        {
          label: "Subir went digital",
          body:
            "The internet gave subir and bajar a second life. To upload is “subir” — “subir una foto”, “subir un video”, “subir a la nube” — and to download is “bajar” or the more formal “descargar”. The metaphor mirrors English's up/down, but Colombians reach for “subir” and “bajar” far more than the textbook “cargar/descargar” in everyday speech. So the same verb Sebastián uses for the cable car climbing the hill is the one Alex uses for pushing photos to Instagram. Old motion verbs quietly absorbed the digital world without needing new vocabulary."
        },
        {
          label: "Paisa vos lives in commands",
          body:
            "The paisa accent shows itself most in the imperative. Where Bogotá says “sube” and Spain says “sube” too, Medellín says “subí”, with the stress thrown onto the final syllable — and attaches pronouns cheerfully: “subite” (get on), “subilas” (upload them), “mirá” (look). Vos commands come from a different historical form, which is why they sound distinct. Paired with “parce”, “pues” and a fondness for diminutives, this voseo is the warm, unmistakable music of Antioquia. Learners who master “subí” and “subite” instantly sound more at home in Medellín."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “subir arriba” for “go up”",
          whyItFails:
            "“Arriba” (up) is already inside subir, so “subir arriba” repeats itself, like saying “ascend up” in English. Plain subir carries the direction.",
          sayInstead: "Subir. / Subir a la casa."
        },
        {
          mistake: "Saying “subí el bus” for “I got on the bus”",
          whyItFails:
            "Without “a”, the bus becomes a direct object and the sentence means you lifted or raised the bus. Boarding needs “subir a” or “subirse a”.",
          sayInstead: "Me subí al bus. / Subí al bus."
        },
        {
          mistake: "Saying “gané peso” for “I gained weight”",
          whyItFails:
            "Spanish does not frame weight gain with ganar. The idiom is “subir de peso” — literally to go up in weight — so “gané peso” sounds like a translation.",
          sayInstead: "Subí de peso."
        },
        {
          mistake: "Saying “poné el volumen para arriba” for “turn the volume up”",
          whyItFails:
            "This calques English's “put up / turn up” with a “para arriba” phrase. Spanish just uses subir directly for the volume.",
          sayInstead: "Subí el volumen. / Sube el volumen."
        }
      ],
      variations: [
        {
          form: "Subite al metro.",
          register: "friendly informal",
          region: "Antioquia / vos regions",
          whenToUse: "Telling a friend to get on, in vos."
        },
        {
          form: "Súbete al carro.",
          register: "friendly informal",
          region: "Bogotá / tú regions",
          whenToUse: "The same invitation to board, in tú."
        },
        {
          form: "Suba, por favor.",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "Inviting someone to board or come up, with usted."
        },
        {
          form: "Subí el volumen.",
          register: "friendly informal",
          region: "Antioquia / vos regions",
          whenToUse: "Asking someone to turn the volume up."
        },
        {
          form: "Ya subí las fotos.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Saying you have uploaded the photos."
        }
      ],
      prompt: "Sebastián says “subí el volumen a la canción.” What is he asking Alex to do?",
      choices: [
        "To climb up toward the speakers to get closer to the song, taking “subir” in its physical going-up-the-hill sense.",
        "To turn the volume up — “subir el volumen” uses subir in its sense of raising or increasing something like sound.",
        "To upload the song to the internet, reading “subir” as the modern meaning of posting a file or a track online."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Alex asks “¿estas fotos las subo a Instagram?” What does “subir” mean here?",
          choices: [
            "That he should physically carry the printed photos up the hill so the people at the top can have a look at them.",
            "That he should raise the brightness of the photos, taking “subir” as turning some setting up higher on the screen.",
            "That he should upload them to Instagram — “subir” is the standard Colombian verb for posting a file or photo online."
          ],
          answer: 2,
          tests: "subir as upload"
        },
        {
          prompt: "Which correctly says “I got on the bus” in Colombian Spanish?",
          choices: [
            "“Me subí al bus” (or “subí al bus”), because boarding uses subir with “a” — you get on TO the bus, not the bus itself.",
            "“Subí el bus”, treating the bus as a direct object, which would instead mean you lifted or raised the bus off the ground.",
            "“Subí en el bus”, using “en” the way English uses “in”, which points to riding inside rather than the act of boarding."
          ],
          answer: 0,
          tests: "subir a for boarding, not a direct object"
        },
        {
          prompt: "How do you say “I gained weight” in natural Colombian Spanish?",
          choices: [
            "“Gané peso”, translating “gain” directly with ganar, which is not how Colombians describe putting on weight at all.",
            "“Subí de peso”, because Spanish frames putting on weight as going up in weight, with the idiom subir de peso.",
            "“Crecí de peso”, using crecer, to grow, which refers to growing taller or older rather than to gaining any weight."
          ],
          answer: 1,
          tests: "subir de peso idiom"
        }
      ]
    },
    en: {
      title: "Subir en el metrocable hasta el barrio de un amigo",
      situation:
        "Alejandra sube con su amigo estadounidense Chris en una góndola hasta la cima de una montaña cerca de Austin, el equivalente del metrocable paisa. Se montan en la cabina, suben sobre el bosque, hablan de la vista, suben el volumen a la música y Alejandra ofrece subir las fotos. Todo gira en torno a “subir”, que en inglés se reparte en varios verbos: get on para montarse, go up para ascender, turn up para el volumen y upload para subir a internet.",
      setting: {
        who: "Chris es un amigo estadounidense de Alejandra, relajado, que la lleva a conocer la montaña en góndola.",
        what: "Suben en la cabina sobre el bosque, hablan de la subida y la vista, suben el volumen a la música y suben las fotos.",
        when: "Una tarde de fin de semana, subiendo a la cima a almorzar.",
        where: "Austin, donde el inglés reparte en varios verbos lo que el español junta en un solo subir.",
        why: "Porque “subir” se traduce distinto según el sentido: get on (montarse), go up (ascender), turn up (el volumen), upload (a internet) y put on weight (subir de peso)."
      },
      address: {
        form: "mixed",
        who: "Chris y Alejandra se tratan con el mismo “you” y el nombre de pila, como dos amigos cercanos.",
        why: "El inglés no distingue tú de usted ni tiene el vos paisa: hay un solo “you”. La cercanía la marcan el nombre, el tono y frases como “hop on”. El calor del vos se traslada por el trato relajado, no por una forma verbal distinta.",
        ifYouSwitch:
          "Ponerse ceremoniosa con Chris en plena góndola sonaría raro entre amigos. En inglés la confianza se muestra bajando el registro de las palabras, no cambiando de pronombre, porque el “you” es siempre el mismo."
      },
      dialogue: [
        {
          speaker: "Chris",
          target: "Hop on — this gondola goes straight up to the top.",
          translation: "Subite, que esta góndola sube derechito hasta la cima.",
          pronunciation: "jop on — dis GON-do-la gous streit ap tu da top",
          literal: "Salta encima — esta góndola va derecho arriba a la cima.",
          why: "“Hop on” es “subite / súbete” a un transporte, un phrasal informal. “Go up” es subir (ascender). El inglés usa dos verbos distintos donde el español usa subir para las dos ideas."
        },
        {
          speaker: "Alejandra",
          target: "Wow, we're really climbing! You can see the whole city from here.",
          translation: "Uy, ¡cómo subimos! Se ve toda la ciudad desde acá.",
          pronunciation: "uau, uir RI-li KLAIM-ing! yu kan si da joul SI-ti from jir",
          literal: "Guau, estamos realmente trepando. Tú puedes ver la entera ciudad desde aquí.",
          why: "“Climb” es subir en el sentido físico de ascender. “You can see” con “you” impersonal traduce el “se ve”. El inglés prefiere el verbo concreto “climb” para una subida empinada."
        },
        {
          speaker: "Chris",
          target: "Turn the music up, would you? It's my favorite.",
          translation: "Subí el volumen a la música, ¿querés? Es mi favorita.",
          pronunciation: "tern da MIU-sik ap, uud yu? its mai FEI-vo-rit",
          literal: "Voltea la música arriba, ¿harías tú? Es mi favorita.",
          why: "“Turn up” es “subir el volumen”. Ojo: la partícula “up” puede ir después del objeto — “turn the music up”. El inglés usa este phrasal, no un verbo simple, para subir el sonido."
        },
        {
          speaker: "Alejandra",
          target: "Done. Should I upload these photos to Instagram?",
          translation: "Listo. ¿Y estas fotos las subo a Instagram?",
          pronunciation: "dan. shud ai AP-loud dis FOU-tous tu INS-ta-gram",
          literal: "Hecho. ¿Debería yo subir estas fotos a Instagram?",
          why: "“Upload” es el “subir” digital. El inglés tiene un verbo aparte (“upload” o “post”) para subir a internet, distinto del “go up” de trepar. “Should I...?” ofrece hacer algo."
        },
        {
          speaker: "Chris",
          target: "Definitely, post them. And heads up — it gets cold as you go up.",
          translation: "¡De una, subilas! Y ojo, que subiendo hace frío.",
          pronunciation: "DE-fi-nit-li, poust dem. and jeds ap — it guets kould as yu gou ap",
          literal: "Definitivamente, publícalas. Y cabezas arriba — se pone frío mientras subes.",
          why: "“Post” es un sinónimo de “upload” para redes. “Heads up” es un “ojo / pilas”. “As you go up” usa “go up” para el ascenso; el frío de la altura es real también aquí."
        },
        {
          speaker: "Alejandra",
          target: "True. And I bet everything costs more up at the top, too.",
          translation: "Verdad. Y me imagino que todo cuesta más allá arriba.",
          pronunciation: "tru. and ai bet EV-ri-zing kosts mor ap at da top, tu",
          literal: "Cierto. Y yo apuesto todo cuesta más arriba en la cima, también.",
          why: "El inglés no usa “subir” para los precios aquí, sino “cost more”: donde el español dice “los precios suben”, el inglés suele decir “things cost more” o “prices go up”. “I bet” es “me imagino / apuesto a que”."
        }
      ],
      vocabulary: [
        {
          term: "get on / hop on",
          explanation:
            "Montarse, subirse a un transporte. El inglés usa un phrasal (“get on”, “hop on”), no un verbo de trepar.",
          literal: "conseguir encima / saltar encima",
          useWhen:
            "Al abordar un bus, tren o cabina: “get on the bus”, “hop on”.",
          avoidWhen:
            "Con “go up to the bus”, un calco de “subirse” que no se dice.",
          register: "amistoso informal",
          region: "Inglés universal; “hop on” es más coloquial.",
          related: ["hop on", "get on the bus", "get on the train", "hop in"],
          example: {
            target: "Hop on, there's room.",
            translation: "Subite, que hay campo."
          }
        },
        {
          term: "go up / climb",
          explanation:
            "Subir en el sentido de ascender: una loma, unas escaleras, un piso. “Climb” resalta el esfuerzo.",
          literal: "ir arriba / trepar",
          useWhen:
            "Al describir que algo sube o que uno asciende: “we're climbing”, “go up the stairs”.",
          avoidWhen:
            "Añadiendo “up” a “climb up the stairs” no está mal, pero “go up up” sí sobra.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["go up", "climb", "head up", "go uphill"],
          example: {
            target: "We climbed all the way up.",
            translation: "Subimos hasta arriba."
          }
        },
        {
          term: "turn up (the volume)",
          explanation:
            "Subir el volumen. La partícula “up” puede ir después del objeto: “turn the music up”.",
          literal: "voltear arriba (el volumen)",
          useWhen:
            "Al pedir más volumen: “turn it up”, “crank it up”.",
          avoidWhen:
            "Con “put up the volume”, un calco; el phrasal correcto es “turn up”.",
          register: "amistoso informal",
          region: "Inglés universal; “crank it up” es subirlo a tope.",
          related: ["turn up", "turn it up", "crank it up", "raise the volume"],
          example: {
            target: "Can you turn the music up?",
            translation: "¿Puedes subir la música?"
          }
        },
        {
          term: "upload / post",
          explanation:
            "Subir a internet. El inglés tiene un verbo aparte (“upload”, o “post” para redes), distinto de trepar.",
          literal: "cargar arriba / publicar",
          useWhen:
            "Al subir un archivo o una foto: “upload the video”, “post the photos”.",
          avoidWhen:
            "Con “raise a photo”, un calco de “subir”; para internet es “upload” o “post”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["upload", "post", "upload to the cloud", "put up"],
          example: {
            target: "I'll upload the photos tonight.",
            translation: "Subo las fotos esta noche."
          }
        },
        {
          term: "prices go up",
          explanation:
            "Subir de precio. El inglés usa “go up” o “rise”; también “cost more” para lo mismo.",
          literal: "los precios van arriba",
          useWhen:
            "Al comentar que algo sube de precio: “prices keep going up”.",
          avoidWhen:
            "Con “prices climb”, poco natural aquí; “go up” o “rise” encajan mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["prices go up", "go up", "rise", "increase"],
          example: {
            target: "Bus fares went up again.",
            translation: "Los pasajes volvieron a subir."
          }
        },
        {
          term: "put on / gain weight",
          explanation:
            "Subir de peso. El inglés dice “put on weight” o “gain weight”, no un verbo de subir.",
          literal: "poner encima / ganar peso",
          useWhen:
            "Al hablar de engordar: “I put on a few pounds”.",
          avoidWhen:
            "Con “go up in weight” o “gain up”, calcos que el inglés no usa.",
          register: "neutro",
          region: "Inglés universal; “put on” es más británico, “gain” más norteamericano.",
          related: ["put on weight", "gain weight", "put on a few pounds", "gain a few pounds"],
          example: {
            target: "I put on weight over the holidays.",
            translation: "Subí de peso en las fiestas."
          }
        },
        {
          term: "cable car / gondola",
          explanation:
            "Una cabina colgante que sube una montaña — el equivalente del metrocable paisa.",
          literal: "carro de cable / góndola",
          useWhen:
            "Al referirte al transporte por cable: “we took the gondola up”.",
          avoidWhen:
            "Con “the lift”, que en inglés británico es el ascensor, no el teleférico.",
          register: "neutro",
          region: "Inglés universal; “aerial tram” es común en Norteamérica.",
          related: ["gondola", "aerial tram", "the cable car", "chairlift"],
          example: {
            target: "We took the gondola to the top.",
            translation: "Subimos en la góndola hasta la cima."
          }
        }
      ],
      note:
        "El español “subir” se reparte en inglés en varios verbos. Montarse en un transporte es “get on” o “hop on”; ascender es “go up” o “climb”; subir el volumen es “turn up”; subir a internet es “upload” o “post”; y subir de peso es “put on weight” o “gain weight”. Cada sentido pide su propio verbo, así que no se puede traducir “subir” siempre igual. Y ojo con “turn up”: la partícula “up” suele ir después del objeto — “turn the music up”.",
      culture: [
        {
          label: "Un “subir”, varios verbos en inglés",
          body:
            "El español apoya casi todo en “subir”: subirse al bus, subir la loma, subir el volumen, subir una foto, subir de peso. El inglés reparte cada idea en un verbo distinto: get on, climb, turn up, upload, put on. El hispanohablante que traduce “subir” siempre igual termina diciendo cosas como “go up to the bus” o “raise a photo”. Lo natural es escoger el verbo inglés según el sentido, no según la palabra española. Dominar ese reparto —qué verbo va con cada tipo de subida— es lo que hace que la frase suene inglesa y no calcada."
        },
        {
          label: "“Up” y los phrasal verbs",
          body:
            "Muchas de estas ideas se arman en inglés con la partícula “up”: go up, turn up, put up, pick up. La partícula carga buena parte del significado, y a veces se separa del verbo: “turn the music up”, “pick it up”. Para el hispanohablante esto es raro, porque el español mete la dirección dentro del verbo (subir ya contiene “arriba”). Por eso el error de decir “subir arriba” tiene su espejo en inglés: no se dice “go up up”. Acostumbrarse a que “up” hace el trabajo, y a que puede ir al final, destraba decenas de phrasal verbs."
        },
        {
          label: "“Upload” y “post”, no “raise”",
          body:
            "Subir a internet en inglés es “upload” o, para redes sociales, “post”: “I uploaded the video”, “she posted the photos”. No se usa “raise” ni “go up”, que son el subir físico. El hispanohablante a veces calca “subir” como “raise a photo”, y no se entiende. La pareja digital completa es “upload/download” = subir/bajar, aunque en español coloquial se oiga más “subir” y “bajar” que “cargar” y “descargar”. Guardar “upload” y “post” para lo digital, y “go up/climb” para lo físico, ordena de una vez todo el vocabulario."
        },
        {
          label: "“Put on weight”, no “gain up”",
          body:
            "Subir de peso en inglés es “put on weight” o “gain weight”. El hispanohablante, arrastrando “subir”, a veces inventa “go up in weight” o “gain up”, que no existen. “Put on” es curiosamente el mismo phrasal que ponerse una prenda (“put on a coat”), y aquí significa echarse kilos encima. “Gain” es más frecuente en Norteamérica. Lo contrario, adelgazar, es “lose weight”. Aprender la pareja fija “put on / lose weight” evita el calco y cubre casi todo lo que uno necesita decir sobre el peso en una conversación cotidiana."
        }
      ],
      pitfalls: [
        {
          mistake: "“I go up to the bus every morning.”",
          whyItFails:
            "Calca “subirse al bus” con “go up to”. Montarse en un transporte es “get on the bus”; “go up to” sugiere acercarse caminando hacia el bus.",
          sayInstead: "I get on the bus every morning."
        },
        {
          mistake: "“Can you put up the volume?”",
          whyItFails:
            "Calca “subir el volumen” con “put up”. El phrasal correcto para el sonido es “turn up”: “turn the volume up”.",
          sayInstead: "Can you turn the volume up?"
        },
        {
          mistake: "“I'll raise the photos to Instagram.”",
          whyItFails:
            "Calca “subir” como “raise”. Para publicar en internet el inglés usa “upload” o “post”, no un verbo de levantar.",
          sayInstead: "I'll upload the photos to Instagram."
        },
        {
          mistake: "“I went up three kilos this year.”",
          whyItFails:
            "Calca “subir de peso” con “go up”. El inglés dice “put on weight” o “gain weight”, no “go up” en kilos.",
          sayInstead: "I put on three kilos this year."
        }
      ],
      variations: [
        {
          form: "Hop on!",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al invitar a alguien a montarse, de forma relajada."
        },
        {
          form: "Let's head up to the top.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al proponer subir a la cima."
        },
        {
          form: "Can you turn the music up?",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al pedir subir el volumen."
        },
        {
          form: "I just uploaded the photos.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al decir que ya subiste las fotos."
        },
        {
          form: "Prices keep going up.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al comentar que los precios suben."
        }
      ],
      prompt: "Chris says “turn the music up.” ¿Qué le pide a Alejandra?",
      choices: [
        "Que suba físicamente hacia los parlantes para acercarse a la música, tomando “up” en su sentido de trepar o ascender.",
        "Que suba el volumen — “turn up” es el phrasal que el inglés usa para subir el volumen de algo como la música o la radio.",
        "Que suba la canción a internet, leyendo “up” como si se tratara de publicar o cargar el archivo en una red social cualquiera."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Alejandra pregunta “should I upload these photos?” ¿Qué significa “upload”?",
          choices: [
            "Que debería cargar físicamente las fotos impresas loma arriba para mostrárselas a la gente que está en la cima.",
            "Que debería subirle el brillo a las fotos, tomando “upload” como ajustar hacia arriba alguna configuración de la pantalla.",
            "Que debería subirlas a internet — “upload” (o “post”) es el verbo inglés para publicar un archivo o una foto en línea."
          ],
          answer: 2,
          tests: "upload como subir a internet"
        },
        {
          prompt: "¿Cuál dice correctamente “me subí al bus” en inglés?",
          choices: [
            "“I got on the bus”, porque para montarse en un transporte el inglés usa “get on”, no un verbo de trepar o ascender.",
            "“I went up the bus”, calcando “subir” como “go up”, lo que sonaría a que trepaste por encima del bus como por una loma.",
            "“I raised the bus”, tomando “subir” como “raise”, lo que significaría que levantaste el bus entero del suelo con las manos."
          ],
          answer: 0,
          tests: "get on para montarse"
        },
        {
          prompt: "¿Cómo se dice “subí de peso” de forma natural en inglés?",
          choices: [
            "“I gained up weight”, mezclando “gain” con “up”, una combinación que el inglés no usa para hablar del peso corporal.",
            "“I put on weight” (o “I gained weight”), las formas inglesas para decir que uno subió de peso o engordó unos kilos.",
            "“I grew of weight”, calcando con “grow”, que se refiere a crecer de estatura o de edad, no a subir de peso ni a engordar."
          ],
          answer: 1,
          tests: "put on / gain weight"
        }
      ]
    }
  },
  {
    id: "finding-the-right-stop-to-get-off-the-bus",
    level: "Starter · Getting around",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "courteous",
    pathways: ["foundation"],
    verb: "bajar",
    review: "pending",
    es: {
      title: "Bajarse del bus en la parada correcta",
      situation:
        "Alex is on a packed bus in Bogotá and does not know where to get off. An older passenger, don Gustavo, sees that he looks lost and helps him with usted: he tells him where to get off, they talk about whether the fare has gone down yet, and don Gustavo recommends downloading the transit app. Everything turns on bajar: getting off the bus, lowering a price, turning down the volume and the modern bajar of downloading something from the internet.",
      setting: {
        who: "Don Gustavo is an older passenger who notices Alex looks lost and helps him find his stop, using usted throughout.",
        what: "Alex asks where to get off; they talk about the next stop, the fare, and a route app to download.",
        when: "A weekday, riding a busy Bogotá bus through unfamiliar streets.",
        where: "Bogotá, where usted is standard even between strangers on public transport.",
        why: "Because bajar covers getting off transport, going down (stairs, prices), lowering (volume), and the modern sense of downloading."
      },
      address: {
        form: "usted",
        who: "Don Gustavo and Alex use usted with each other, the Bogotá norm between strangers of any age.",
        why: "In Bogotá usted is the default with anyone you do not know, and on public transport it is the courteous, neutral register. It carries respect and a little warmth without presuming familiarity, which is exactly right for a helpful stranger.",
        ifYouSwitch:
          "Sliding into tú with an older stranger who is doing you a favor could read as too familiar. Bogotanos use usted even with close friends and family, so holding it here is safe and, if anything, the polite default."
      },
      dialogue: [
        {
          speaker: "Don Gustavo",
          target: "¿Usted en qué parte se baja, joven?",
          translation: "Where do you get off, young man?",
          pronunciation: "oo-STED en ke PAR-te se BA-ha, HO-ben",
          literal: "You in what part yourself get-down, young?",
          why: "“Bajarse” is to get off transport — reflexive, and here in the usted form “se baja”. “Joven” is a friendly way for an older person to address someone younger, common on Bogotá buses."
        },
        {
          speaker: "Alex",
          target: "Me bajo cerca del parque, pero no sé en cuál parada.",
          translation: "I get off near the park, but I don't know at which stop.",
          pronunciation: "me BA-ho SER-ka del PAR-ke, PE-ro no se en kwal pa-RA-da",
          literal: "Myself I-get-down near of-the park, but not I-know in which stop.",
          why: "“Me bajo” is the reflexive first person — you get yourself off. Getting off at a stop takes “en”: “me bajo en la parada”, not “a la parada”. “Parada” is the bus stop."
        },
        {
          speaker: "Don Gustavo",
          target: "Ah, entonces bájese en la próxima. Yo le aviso.",
          translation: "Ah, then get off at the next one. I'll let you know.",
          pronunciation: "a, en-TON-ses BA-he-se en la PROK-si-ma. yo le a-BEE-so",
          literal: "Ah, then get-yourself-down in the next. I to-you I-warn.",
          why: "“Bájese” is the usted command of bajarse. “En la próxima” means at the next stop, with “parada” understood. “Le aviso” — I'll let you know — is the helpful-stranger reflex on Colombian transport."
        },
        {
          speaker: "Alex",
          target: "Gracias. ¿Y sabe si por aquí ya bajó el precio del pasaje?",
          translation: "Thanks. And do you know if the fare has gone down around here?",
          pronunciation: "GRA-syas. ee SA-be see por a-KEE ya ba-HO el pre-SYO del pa-SA-he",
          literal: "Thanks. And know if around here already went-down the price of-the fare?",
          why: "“Bajó el precio” is bajar as decrease — the price went down. The preterite “bajó” marks a completed change. “El pasaje” is the fare, and “ya” means already."
        },
        {
          speaker: "Don Gustavo",
          target: "No, eso no baja nunca. Pero bájese la app del SITP, le sirve.",
          translation: "No, that never comes down. But download the SITP app, it'll help you.",
          pronunciation: "no, E-so no BA-ha NOON-ka. PE-ro BA-he-se la ap del SEE-te-pe, le SEER-be",
          literal: "No, that not goes-down never. But download-yourself the app of-the SITP, to-you serves.",
          why: "Two senses in one line: “no baja” (the price doesn't go down) and “bájese la app” (download the app). The colloquial “se” adds a personal-benefit flavor. SITP is Bogotá's integrated bus system."
        },
        {
          speaker: "Alex",
          target: "Listo, ya la bajo. Muchas gracias; me bajo aquí entonces.",
          translation: "Great, I'll download it now. Thank you so much; I'll get off here then.",
          pronunciation: "LEES-to, ya la BA-ho. MOO-chas GRA-syas; me BA-ho a-KEE en-TON-ses",
          literal: "Ready, already it I-download. Many thanks; myself I-get-down here then.",
          why: "Both digital and physical bajar in one breath: “la bajo” (I download it, la = the app) and “me bajo aquí” (I get off here). The object pronoun “la” sits before the verb, agreeing with app."
        }
      ],
      vocabulary: [
        {
          term: "bajarse (de)",
          explanation:
            "To get off transport. Reflexive, and it takes “de” before the bus or train you leave.",
          literal: "to-get-oneself-down (from)",
          useWhen:
            "Getting off a vehicle: “me bajo del bus”, “bájese en la próxima”.",
          avoidWhen:
            "Dropping the “de”: “bajar el bus” would mean to take something down from the bus.",
          register: "neutral",
          region: "General Colombian; the usted command “bájese” is standard in Bogotá.",
          related: ["bajarse del bus", "bájese", "me bajo", "bajarse en la próxima"],
          example: {
            target: "Me bajo en la próxima parada.",
            translation: "I get off at the next stop."
          }
        },
        {
          term: "bajar (las escaleras / la loma)",
          explanation:
            "To go down — stairs, a hill, a floor. The physical-descent sense, with a direct object or “a”.",
          literal: "to-go-down (the stairs / the hill)",
          useWhen:
            "Descending something: “bajar las escaleras”, “bajar al primer piso”.",
          avoidWhen:
            "Adding “abajo”; “bajar abajo” is redundant, since down is already in the verb.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["bajar las escaleras", "bajar la loma", "bajar a pie", "bajar al primer piso"],
          example: {
            target: "Bajé las escaleras corriendo.",
            translation: "I ran down the stairs."
          }
        },
        {
          term: "bajar (el precio / de precio)",
          explanation:
            "To go down in price — to drop or fall. Bajar as decrease, mirroring subir as increase.",
          literal: "to-go-down (the price / in price)",
          useWhen:
            "Talking about prices dropping: “bajó el precio”, “bajaron de precio”.",
          avoidWhen:
            "Calquing “go down” as “ir para abajo”; Spanish just uses bajar for prices.",
          register: "neutral",
          region: "General Colombian; “rebajar” is to knock a price down deliberately.",
          related: ["bajar el precio", "bajar de precio", "estar en oferta", "rebajar"],
          example: {
            target: "Ojalá baje el precio pronto.",
            translation: "Hopefully the price drops soon."
          }
        },
        {
          term: "bajar (una app / un archivo)",
          explanation:
            "To download — an app, a file, a movie. The digital sense, alongside the formal “descargar”.",
          literal: "to-download (an app / a file)",
          useWhen:
            "Downloading online: “bajar la app”, “bajar una película”.",
          avoidWhen:
            "Where English says upload; that reverse direction is “subir / cargar”.",
          register: "friendly informal",
          region: "General Colombian; “descargar” is the more formal synonym.",
          related: ["bajar la app", "descargar", "bajar una película", "bajar de internet"],
          example: {
            target: "Bajá la app y te registrás.",
            translation: "Download the app and sign up."
          }
        },
        {
          term: "bajar el volumen / la voz",
          explanation:
            "To turn down the volume or lower your voice. Bajar as reducing sound.",
          literal: "to-lower the volume / the voice",
          useWhen:
            "Asking for less noise: “baje el volumen”, “baje la voz”.",
          avoidWhen:
            "Calquing “turn down” with a “para abajo” phrase; Spanish uses bajar directly.",
          register: "neutral",
          region: "General Colombian; “más pasito” is a soft Colombian way to say quieter.",
          related: ["bajar el volumen", "bajar la voz", "bajarle", "más pasito"],
          example: {
            target: "¿Me baja el volumen, por favor?",
            translation: "Could you turn the volume down, please?"
          }
        },
        {
          term: "bajarle (a algo)",
          explanation:
            "To ease off, tone something down. “Bájale” is calm down or turn it down, very Colombian.",
          literal: "to-lower-it (to something)",
          useWhen:
            "Telling someone to dial it back: “bájale al genio”, “bájale a la sal”.",
          avoidWhen:
            "In very formal writing, where “moderar” or “reducir” fits better.",
          register: "friendly informal",
          region: "Very Colombian; “bajarle al genio” is to cool your temper.",
          related: ["bájale", "bajarle al genio", "bajarle a la comida", "con calma"],
          example: {
            target: "Bájale a la música, por favor.",
            translation: "Turn the music down, please."
          }
        },
        {
          term: "la parada / el paradero",
          explanation:
            "The bus stop, and the fare. Bogotá transport vocabulary you hear on every ride.",
          literal: "the stop / the stop-point",
          useWhen:
            "Talking about where to get off and what you pay: “¿cuál es la parada?”, “el pasaje”.",
          avoidWhen:
            "Using “estación” for a simple street stop; that is for the metro or big terminals.",
          register: "neutral",
          region: "Colombian; “paradero” is the common word for a bus stop, “buseta” a small bus.",
          related: ["la parada", "el paradero", "el pasaje", "la buseta"],
          example: {
            target: "El paradero queda en la esquina.",
            translation: "The bus stop is on the corner."
          }
        }
      ],
      note:
        "Bajar mirrors subir across several senses: getting off transport (reflexive “bajarse de”), going down stairs or a hill, dropping in price (“bajó el precio”), lowering the volume, and downloading online (“bajar la app”, or the formal “descargar”). Mind the prepositions — “bajarse de” to get off, “bajarse en” for the stop, and never “bajar abajo”, which repeats itself. And keep the handy Colombian idiom “bajarle a algo” for toning something down, from the music to your temper.",
      culture: [
        {
          label: "Bajar: get off, go down, download",
          body:
            "Like subir, bajar spans the physical and the digital. It gets you off a bus (“me bajo aquí”), takes you down stairs or a hill (“bajar la loma”), drops a price (“bajó el precio”), lowers the volume (“baje el volumen”), and downloads a file (“bajar la app”). English splits these into get off, go down, turn down, download; Spanish leans on one verb and lets the preposition and context carry the sense. Hearing which bajar is meant — and answering with the right little word after it — is most of using it naturally in daily Colombian life."
        },
        {
          label: "Getting off a Bogotá bus",
          body:
            "On Bogotá's buses and busetas you often tell the driver or a fellow passenger where you want off: “¡en la próxima, por favor!” or “¡en la esquina!”. Many buses have a timbre, a buzzer you press to request the stop. The SITP is the newer integrated system with fixed paraderos and a rechargeable card; older buses still flag down anywhere. Strangers routinely help — “yo le aviso” — telling you when your stop is coming. Knowing to say “me bajo en la próxima” and to listen for “¿en qué parte se baja?” makes navigating the city far less daunting."
        },
        {
          label: "Bajar and subir went digital",
          body:
            "The internet handed bajar and subir a second job: to download is “bajar” and to upload is “subir”. Colombians say “bajé la película”, “subí las fotos” far more often than the textbook “descargar” and “cargar”, though “descargar” is standard in writing and formal contexts. The up/down metaphor matches English's download/upload neatly. So the same “bájese” don Gustavo uses for stepping off the bus is the one he uses for pulling the SITP app onto a phone — one verb, stretched from the physical street to the digital cloud without missing a beat."
        },
        {
          label: "Usted on transport and “bajarle”",
          body:
            "Bogotá is usted country, and public transport shows it: strangers of every age address each other with usted, courteous and neutral. It is not cold — it is simply the default, used even among family. The city also loves the idiom “bajarle a algo”: to tone something down. “Bájale al genio” (cool your temper), “bájale a la sal” (go easier on the salt), “bájale a la música” (turn the music down). It reframes lowering as a favor you do the situation. Master usted and “bajarle”, and you sound calmly, unmistakably bogotano."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “me bajo el bus” for “I get off the bus”",
          whyItFails:
            "Without “de”, the bus becomes a direct object and the sentence suggests you take something down from the bus. Getting off needs “bajarse de”.",
          sayInstead: "Me bajo del bus."
        },
        {
          mistake: "Saying “bajar abajo” for “go down”",
          whyItFails:
            "“Abajo” (down) is already inside bajar, so “bajar abajo” repeats itself, like “descend down” in English. Plain bajar carries the direction.",
          sayInstead: "Bajar. / Bajar al primer piso."
        },
        {
          mistake: "Saying “me bajo a la próxima” for “I get off at the next stop”",
          whyItFails:
            "Getting off at a stop uses “en”, the preposition Spanish uses for locations, not “a”. “A la próxima” calques English's “at”.",
          sayInstead: "Me bajo en la próxima."
        },
        {
          mistake: "Saying “poné el volumen para abajo” for “turn the volume down”",
          whyItFails:
            "This calques English's “turn down / put down” with a “para abajo” phrase. Spanish just uses bajar directly for the volume.",
          sayInstead: "Bajá el volumen. / Baje el volumen."
        }
      ],
      variations: [
        {
          form: "¿En qué parada se baja?",
          register: "polite formal",
          region: "Bogotá / general Colombian",
          whenToUse: "Asking with usted where someone gets off."
        },
        {
          form: "Bájese en la próxima.",
          register: "polite formal",
          region: "Bogotá / general Colombian",
          whenToUse: "Telling someone with usted where to get off."
        },
        {
          form: "Bájate aquí.",
          register: "friendly informal",
          region: "Caribbean coast / tú regions",
          whenToUse: "Telling a friend to get off here, in tú."
        },
        {
          form: "Ya bajó el precio.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Noting that a price has dropped."
        },
        {
          form: "Bájele al volumen.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Asking someone to turn the volume down."
        }
      ],
      prompt: "Don Gustavo tells Alex “bájese en la próxima.” What is he telling him to do?",
      choices: [
        "To lower his voice until the next stop arrives, taking “bajar” as toning down the volume of how loudly he speaks.",
        "To download something before the next stop comes up, reading “bajar” as the get-an-app-from-the-internet sense.",
        "To get off at the next stop — “bajarse en” is the standard way to say where you get off a bus in Colombian Spanish."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "What does “¿ya bajó el precio del pasaje?” ask about?",
          choices: [
            "Whether the fare has gone down — “bajar el precio” uses bajar in its sense of a price dropping or falling.",
            "Whether the fare has already been fully paid off, reading “bajó” as settling or clearing a debt on the ticket he owes.",
            "Whether the bus has already come down the hill, taking “bajó” only in its literal, physical going-down-a-slope sense."
          ],
          answer: 0,
          tests: "bajar el precio as a price going down"
        },
        {
          prompt: "Don Gustavo says “bájese la app del SITP.” What is he suggesting?",
          choices: [
            "That Alex should physically take the app down off a high shelf somewhere, reading “bajar” in its literal lowering sense.",
            "That Alex should download the SITP app — “bajar” is a common Colombian verb for downloading, right alongside descargar.",
            "That Alex should get off wherever the SITP app happens to tell him to, mixing up downloading with the getting-off sense."
          ],
          answer: 1,
          tests: "bajar as download"
        },
        {
          prompt: "Which correctly says “I get off at the next stop” in Colombian Spanish?",
          choices: [
            "“Me bajo el próximo”, dropping the preposition, which would turn the stop into a direct object of the verb bajar itself.",
            "“Me bajo a la próxima”, using “a” the way English uses “at”, which is not how Spanish marks the stop you get off at.",
            "“Me bajo en la próxima”, because getting off at a stop uses “en”, the same preposition Spanish uses for a location."
          ],
          answer: 2,
          tests: "bajarse en for the stop, not a"
        }
      ]
    },
    en: {
      title: "Bajarse del bus en la parada correcta",
      situation:
        "Alejandra va en un bus lleno en Houston y no sabe dónde bajarse. Un pasajero mayor, el señor Brown, la ve perdida y la ayuda: le dice dónde bajarse, comentan si ya bajó el precio del pasaje, y él le recomienda bajar la app del transporte. Todo gira en torno a “bajar”, que en inglés se reparte en varios verbos: get off para bajarse del bus, go down para bajar de precio, turn down para el volumen y download para descargar.",
      setting: {
        who: "El señor Brown es un pasajero mayor que nota que Alejandra está perdida y la ayuda a encontrar su parada.",
        what: "Alejandra pregunta dónde bajarse; hablan de la próxima parada, del pasaje y de una app del transporte para descargar.",
        when: "Un día entre semana, en un bus lleno que cruza calles que ella no conoce.",
        where: "Houston, donde el inglés reparte en varios verbos lo que el español junta en un solo bajar.",
        why: "Porque “bajar” se traduce distinto según el sentido: get off (bajarse del transporte), go down (bajar de precio o de escaleras), turn down (el volumen) y download (descargar)."
      },
      address: {
        form: "mixed",
        who: "El señor Brown y Alejandra se tratan con el mismo “you”; el respeto por la edad se nota en el tono y en el “sir”, no en el pronombre.",
        why: "El inglés no distingue usted de tú: hay un solo “you”. El respeto que en Bogotá pondría el usted aquí lo llevan el tono cuidado, un “sir” o “ma'am” y fórmulas como “excuse me”. El registro cambia las palabras, no el pronombre.",
        ifYouSwitch:
          "Tratar al señor Brown con demasiada confianza, como a un amigo de toda la vida, podría sonar brusco. El inglés marca la cortesía con “excuse me” o “sir”, y con el tono, no cambiando a otro pronombre."
      },
      dialogue: [
        {
          speaker: "Mr. Brown",
          target: "Where are you getting off, dear?",
          translation: "¿Usted en qué parte se baja?",
          pronunciation: "uer ar yu GUE-ting of, dir",
          literal: "¿Dónde estás consiguiendo-fuera, querida?",
          why: "“Get off” es “bajarse” del transporte, un phrasal, no un verbo de bajar. “Dear” es un trato afectuoso de una persona mayor, sin equivalente exacto; el respeto del usted va en el tono."
        },
        {
          speaker: "Alejandra",
          target: "I get off near the park, but I'm not sure which stop.",
          translation: "Me bajo cerca del parque, pero no sé en cuál parada.",
          pronunciation: "ai guet of nir da park, bat aim not shur uich stop",
          literal: "Yo consigo-fuera cerca del parque, pero no seguro cuál parada.",
          why: "“Get off” no lleva reflexivo: “me bajo” se vuelve “I get off”, sin “myself”. “Which stop” va sin preposición al final. El español usa “bajarse en” donde el inglés dice “get off at”."
        },
        {
          speaker: "Mr. Brown",
          target: "Ah, then get off at the next one. I'll let you know.",
          translation: "Ah, entonces bájese en la próxima. Yo le aviso.",
          pronunciation: "a, den guet of at da nekst uan. ail let yu nou",
          literal: "Ah, entonces consigue-fuera en la próxima uno. Yo dejaré tú saber.",
          why: "“Get off at the next one” — el inglés usa “at” para la parada, y “the next one” evita repetir “stop”. “I'll let you know” es el “yo le aviso” del pasajero servicial."
        },
        {
          speaker: "Alejandra",
          target: "Thanks. Do you know if the fare has gone down around here?",
          translation: "Gracias. ¿Sabe si ya bajó el precio del pasaje por aquí?",
          pronunciation: "zanks. du yu nou if da fer jas gon daun a-RAUND jir",
          literal: "Gracias. ¿Sabes si la tarifa ha ido-abajo alrededor aquí?",
          why: "“Go down” es “bajar” para un precio. El inglés usa el presente perfecto “has gone down” para un cambio con efecto actual. “Fare” es el pasaje; el español lo dice con un solo “bajar”."
        },
        {
          speaker: "Mr. Brown",
          target: "No, that never comes down. But download the transit app, it helps.",
          translation: "No, eso no baja nunca. Pero bájese la app del transporte, le sirve.",
          pronunciation: "nou, dat NE-ver kams daun. bat DAUN-loud da TRAN-sit ap, it jelps",
          literal: "No, eso nunca viene-abajo. Pero descarga la tránsito app, ello ayuda.",
          why: "Dos verbos distintos donde el español usa “bajar” para ambos: “come down” para el precio que baja y “download” para bajar una app. “Transit app” es la app del transporte."
        },
        {
          speaker: "Alejandra",
          target: "Great, I'll download it now. Thanks; I'll get off here, then.",
          translation: "Listo, ya la bajo. Gracias; me bajo aquí, entonces.",
          pronunciation: "greit, ail DAUN-loud it nau. zanks; ail guet of jir, den",
          literal: "Genial, yo descargaré ello ahora. Gracias; yo conseguiré-fuera aquí, entonces.",
          why: "“Download it” (bajarla) y “get off here” (bajarme) — el inglés usa verbos distintos para las dos ideas que el español junta en “bajar”. “Then” al final es el “entonces”."
        }
      ],
      vocabulary: [
        {
          term: "get off",
          explanation:
            "Bajarse del transporte. El inglés usa el phrasal “get off”, no “get down” ni un verbo de bajar.",
          literal: "conseguir-fuera",
          useWhen:
            "Al bajarse de un bus, tren o metro: “get off at the next stop”.",
          avoidWhen:
            "Con “get down from the bus”, un calco de “bajarse” que no se usa así.",
          register: "neutro",
          region: "Inglés universal; “hop off” es más coloquial.",
          related: ["get off the bus", "get off at the next stop", "hop off", "get off here"],
          example: {
            target: "I get off at the next stop.",
            translation: "Me bajo en la próxima parada."
          }
        },
        {
          term: "go down / come down",
          explanation:
            "Bajar en el sentido de descender: escaleras, una loma, un piso. “Come down” si viene hacia quien habla.",
          literal: "ir abajo / venir abajo",
          useWhen:
            "Al describir que algo o alguien baja: “go down the stairs”.",
          avoidWhen:
            "Añadiendo “down” de más: “go down downstairs” sobra.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["go down", "come down", "go downstairs", "head down"],
          example: {
            target: "I'll go down and check.",
            translation: "Bajo y reviso."
          }
        },
        {
          term: "go down (in price)",
          explanation:
            "Bajar de precio. El inglés usa “go down”, “come down” o “drop”; también “fall”.",
          literal: "ir abajo (de precio)",
          useWhen:
            "Al comentar que algo baja de precio: “prices went down”.",
          avoidWhen:
            "Con “lower” intransitivo; para un precio que baja solo se usa “go down” o “drop”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["prices go down", "come down in price", "drop", "fall"],
          example: {
            target: "The price finally went down.",
            translation: "Al fin bajó el precio."
          }
        },
        {
          term: "download",
          explanation:
            "Bajar de internet. El inglés tiene un verbo aparte (“download”), distinto del bajar físico.",
          literal: "cargar-abajo",
          useWhen:
            "Al bajar una app o un archivo: “download the app”, “download a file”.",
          avoidWhen:
            "Con “lower the app” o “bring down the app”, calcos que no significan descargar.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["download", "download the app", "download a file", "save"],
          example: {
            target: "Download the transit app.",
            translation: "Baja la app del transporte."
          }
        },
        {
          term: "turn down (the volume)",
          explanation:
            "Bajar el volumen. La partícula “down” puede ir después del objeto: “turn it down”.",
          literal: "voltear-abajo (el volumen)",
          useWhen:
            "Al pedir menos volumen: “turn the music down”.",
          avoidWhen:
            "Con “lower down”, redundante; se dice “turn down” o “lower” a secas.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["turn down", "turn it down", "lower the volume", "keep it down"],
          example: {
            target: "Can you turn the music down?",
            translation: "¿Puedes bajar la música?"
          }
        },
        {
          term: "keep it down / tone it down",
          explanation:
            "Bajarle a algo — bajar el ruido o la intensidad. El inglés usa “keep it down”, “tone it down”.",
          literal: "mantenerlo abajo / atenuarlo",
          useWhen:
            "Al pedir que alguien baje el ruido o le baje a algo: “keep it down”.",
          avoidWhen:
            "Con “lower it” a secas para el ruido; suena incompleto sin “down”.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["keep it down", "tone it down", "take it easy", "calm down"],
          example: {
            target: "Can you keep it down, please?",
            translation: "¿Le puedes bajar, por favor?"
          }
        },
        {
          term: "stop / fare",
          explanation:
            "La parada y el pasaje. Vocabulario del transporte que se oye en cada viaje.",
          literal: "parada / tarifa",
          useWhen:
            "Al hablar de dónde bajarse y cuánto se paga: “the next stop”, “the fare”.",
          avoidWhen:
            "Con “station” para una simple parada de la calle; eso es para el metro o terminales.",
          register: "neutro",
          region: "Inglés universal; “fare” es el pasaje o la tarifa.",
          related: ["the stop", "the bus stop", "the fare", "the next stop"],
          example: {
            target: "The next stop is mine.",
            translation: "La próxima parada es la mía."
          }
        }
      ],
      note:
        "El español “bajar” se reparte en inglés en varios verbos. Bajarse del transporte es “get off”; descender escaleras o una loma es “go down” o “come down”; bajar de precio es “go down” o “drop”; bajar el volumen es “turn down”; y bajar de internet es “download”. Cada sentido pide su propio verbo, así que no se puede traducir “bajar” siempre igual. Y ojo: “get off” no lleva reflexivo — “me bajo” es “I get off”, nunca “I get off myself”.",
      culture: [
        {
          label: "Un “bajar”, varios verbos en inglés",
          body:
            "El español apoya casi todo en “bajar”: bajarse del bus, bajar las escaleras, bajar de precio, bajar el volumen, bajar una app. El inglés reparte cada idea en un verbo distinto: get off, go down, drop, turn down, download. El hispanohablante que traduce “bajar” siempre igual acaba diciendo cosas como “get down from the bus” o “lower the app”. Lo natural es escoger el verbo inglés según el sentido, no según la palabra española. Es exactamente el mismo reparto que ocurre con “subir”, pero al revés: hacia abajo."
        },
        {
          label: "“Get off” para bajarse del transporte",
          body:
            "Bajarse de un bus, un tren o un metro en inglés es “get off”, no “get down”. “Get down” significa agacharse o bajar al suelo, así que “get down from the bus” suena a que uno se descuelga del techo. Además, “get off” no lleva reflexivo: “me bajo” es “I get off”, sin “myself”, porque el inglés casi no usa reflexivos donde el español sí. La pareja completa es “get on / get off” = subirse / bajarse. Aprender ese par, sin pronombre reflexivo, cubre casi todo lo que uno dice sobre el transporte público."
        },
        {
          label: "“Go down” y “come down” para precios",
          body:
            "Cuando un precio baja, el inglés dice “go down”, “come down” o “drop”: “prices went down”, “the fare came down”, “rents have dropped”. La diferencia entre “go” y “come” es de punto de vista: “come down” sugiere que baja hacia quien habla o hacia lo deseado. El hispanohablante a veces calca “bajar” con “lower”, pero “lower” suele ser transitivo (bajar algo uno mismo). Para un precio que baja por sí solo, lo natural es “go down” o “drop”. Escoger bien entre estos verbos hace que hablar de plata y ofertas suene idiomático."
        },
        {
          label: "“Download”, no “lower”",
          body:
            "Bajar de internet en inglés es “download”: “download the app”, “download a file”. No se usa “lower” ni “bring down”, que son el bajar físico. El hispanohablante a veces calca “bajar” como “lower the app”, y no se entiende. La pareja digital completa es “download/upload” = bajar/subir, y calza con la metáfora del español, aunque en español coloquial se oiga más “bajar” y “subir” que “descargar” y “cargar”. Guardar “download” para lo digital y “go down/get off” para lo físico ordena de una vez todo el vocabulario de bajar."
        }
      ],
      pitfalls: [
        {
          mistake: "“Where do I get down?”",
          whyItFails:
            "Calca “bajarse” como “get down”, que significa agacharse o bajar al suelo. El phrasal para el transporte es “get off”.",
          sayInstead: "Where do I get off?"
        },
        {
          mistake: "“I get off me at the next stop.”",
          whyItFails:
            "Calca el reflexivo “me bajo”. El inglés “get off” no lleva pronombre reflexivo: se dice “I get off”, sin “me” ni “myself”.",
          sayInstead: "I get off at the next stop."
        },
        {
          mistake: "“I need to lower the app.”",
          whyItFails:
            "Calca “bajar” como “lower”. Para una app o un archivo el inglés usa “download”, no un verbo de bajar físicamente.",
          sayInstead: "I need to download the app."
        },
        {
          mistake: "“Can you lower down the volume?”",
          whyItFails:
            "“Lower down” es redundante, porque “lower” ya significa bajar. El inglés dice “turn the volume down” o “lower the volume”.",
          sayInstead: "Can you turn the volume down?"
        }
      ],
      variations: [
        {
          form: "Where do you get off?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al preguntar dónde se baja alguien."
        },
        {
          form: "Get off at the next stop.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al indicar dónde bajarse."
        },
        {
          form: "Hop off here.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al decirle a alguien que se baje aquí, de forma relajada."
        },
        {
          form: "Prices have come down.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al notar que bajó el precio."
        },
        {
          form: "Can you turn the volume down?",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al pedir bajar el volumen."
        }
      ],
      prompt: "Mr. Brown tells Alejandra “get off at the next one.” ¿Qué le dice que haga?",
      choices: [
        "Que baje la voz hasta que llegue la próxima parada, tomando el phrasal como si fuera bajarle al volumen de su voz al hablar.",
        "Que descargue algo antes de que llegue la próxima parada, leyendo “get off” como conseguir o bajar una app desde internet.",
        "Que se baje en la próxima parada — “get off at” es la forma inglesa de decir dónde uno se baja del bus o del tren."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Qué pregunta “has the fare gone down around here?”",
          choices: [
            "Si el pasaje ha bajado de precio — “go down” es el verbo inglés para un precio que baja, cae o se reduce con el tiempo.",
            "Si el pasaje ya se pagó por completo, leyendo “gone down” como saldar o cancelar del todo la deuda del tiquete.",
            "Si el bus ya bajó la loma, tomando “gone down” solo en su sentido físico de descender por una cuesta o pendiente."
          ],
          answer: 0,
          tests: "go down como bajar de precio"
        },
        {
          prompt: "Mr. Brown dice “download the transit app.” ¿Qué le sugiere?",
          choices: [
            "Que baje físicamente la app de un estante alto en alguna parte, leyendo “download” en un sentido literal de bajar algo.",
            "Que descargue la app del transporte — “download” es el verbo inglés para bajar una app o un archivo desde internet.",
            "Que se baje donde la app del transporte le indique, confundiendo la idea de descargar con la de bajarse del bus."
          ],
          answer: 1,
          tests: "download como bajar una app"
        },
        {
          prompt: "¿Cuál dice correctamente “me bajo en la próxima parada” en inglés?",
          choices: [
            "“I get down at the next stop”, calcando “bajarse” como “get down”, que en inglés es agacharse, no el phrasal del transporte.",
            "“I get off me at the next stop”, añadiendo “me” como el reflexivo español, un pronombre que el inglés “get off” no lleva.",
            "“I get off at the next stop”, porque el inglés usa “get off” con “at” para decir en qué parada se baja uno del bus."
          ],
          answer: 2,
          tests: "get off at para la parada"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/16-foundation-coming-and-going.js");
