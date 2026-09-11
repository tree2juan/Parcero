/*
 * Lesson block: foundation / memory and waiting.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Every lesson spines on exactly one verb from data/curriculum.js, named in its
 * `verb` field so the coverage report can prove the curriculum is actually
 * taught rather than merely listed. This block takes the three verbs a day runs
 * on when the mind is involved — recordar (to remember, and to remind), olvidar
 * (to forget) and esperar (to wait, to hope and to expect) — and builds one
 * situation around each: running into an old friend, owning up to forgetting
 * something, and waiting your turn at a clinic.
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
    id: "running-into-an-old-friend-and-reminiscing",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "familiar",
    pathways: ["foundation"],
    verb: "recordar",
    review: "pending",
    es: {
      title: "Running into an old friend and reminiscing",
      situation:
        "Alex runs into Diana by chance on the street, an old school friend from Cali whom he has not seen in years. They start remembering the parties, teachers and nicknames from back then, and Alex asks her to remind him of a couple of names that escape him. The whole chat turns on recordar and acordarse: remembering something, recordar in the sense of bringing something to mind, and the recordar that really means reminding someone of something.",
      setting: {
        who: "Diana is an old school friend from Cali whom Alex has not seen in years — warm, quick and full of voseo.",
        what: "A spontaneous catch-up on the street, dredging up shared memories, teachers and half-forgotten names.",
        when: "A chance encounter, late one afternoon.",
        where: "Cali, in the Valle del Cauca, where Valluno Spanish uses vos and a musical, sing-song lilt.",
        why: "Because recordar and acordarse both mean remember but behave differently, and recordar also means remind — a job English hands to a separate verb."
      },
      address: {
        form: "vos",
        who: "Diana uses vos with Alex, the Cali default between friends, warm and immediate.",
        why: "Cali, like Medellín, is voseo country: “¿te acordás?”, “mirá”, “vení”. The vos here is affectionate and informal, the natural register of the Valle del Cauca among people who know each other.",
        ifYouSwitch:
          "Answering an old friend with a careful usted would feel oddly distant, as if you were keeping her at arm's length. Tú would quietly mark Alex as not from Cali. Vos is what two Valluno friends reach for."
      },
      dialogue: [
        {
          speaker: "Diana",
          target: "¡Alex! ¿Vos te acordás de mí? ¡Del colegio!",
          translation: "Alex! Do you remember me? From school!",
          pronunciation: "a-LEKS! bos te a-kor-DAS de mee? del ko-LE-hyo",
          literal: "Alex! You yourself remember of me? Of-the school!",
          why: "“Acordarse de” is the everyday spoken verb for remembering, far commoner than recordar. The vos form is “te acordás”, stressed on the last syllable. Note the obligatory “de” — acordarse always carries it."
        },
        {
          speaker: "Alex",
          target: "¡Claro! Me acuerdo perfecto. No recuerdo tu apellido, eso sí.",
          translation: "Of course! I remember perfectly. I don't recall your surname, mind you.",
          pronunciation: "KLA-ro! me a-KWER-do per-FEK-to. no rre-KWER-do too a-pe-YEE-do, E-so see",
          literal: "Clear! Myself I-remember perfect. Not I-recall your surname, that yes.",
          why: "Two verbs for one idea: “me acuerdo” (acordarse, with the pronoun) and “no recuerdo” (recordar, transitive, no “de”). “Eso sí” tags on a concession, like “mind you”. Both verbs are irregular: acuerdo, recuerdo."
        },
        {
          speaker: "Diana",
          target: "Martínez. Oye, ¿te acordás de las fiestas en mi casa?",
          translation: "Martínez. Hey, do you remember the parties at my place?",
          pronunciation: "mar-TEE-nes. O-ye, te a-kor-DAS de las FYES-tas en mee KA-sa",
          literal: "Martínez. Hear, yourself you-remember of the parties in my house?",
          why: "“Te acordás de” again — acordarse de plus a noun, the “de” fixed in place. The casual “oye” opens the question. On the coast and in Cali, this de-construction is what you hear all day."
        },
        {
          speaker: "Alex",
          target: "¡Uy, sí! Y recordame el nombre del profe de física, que no me acuerdo.",
          translation: "Oh, yes! And remind me of the physics teacher's name, I can't remember.",
          pronunciation: "ooy, see! ee rre-kor-DA-me el NOM-bre del PRO-fe de FEE-si-ka, ke no me a-KWER-do",
          literal: "Oh, yes! And remind-me the name of-the teacher of physics, that not myself I-remember.",
          why: "The key twist: here “recordar” means to remind. “Recordame” (vos command) is “remind me”. Same verb as remember, different job — English splits them into two words. “Profe” is the affectionate short form of profesor."
        },
        {
          speaker: "Diana",
          target: "Era el profe Gómez. Recordá que siempre llegaba tarde.",
          translation: "It was Mr. Gómez. Remember how he always arrived late.",
          pronunciation: "E-ra el PRO-fe GO-mes. rre-kor-DA ke SYEM-pre ye-GA-ba TAR-de",
          literal: "It-was the teacher Gómez. Remember that always he-arrived late.",
          why: "“Recordá” is the vos command of recordar in its remember sense — recall, bring to mind. The imperfect “llegaba” describes a repeated past habit: he was always late, over and over."
        },
        {
          speaker: "Alex",
          target: "¡Jaja, verdad! Qué buenos recuerdos. Mandale saludos a tu mamá.",
          translation: "Haha, true! What good memories. Say hi to your mom.",
          pronunciation: "HA-ha, ber-DAD! ke BWE-nos rre-KWER-dos. man-DA-le sa-LOO-dos a too ma-MA",
          literal: "Haha, true! What good memories. Send-her greetings to your mom.",
          why: "“Recuerdos” is the noun from recordar — memories. In some contexts it also means “regards”, though Colombians usually send “saludos”. “Mandale” is the vos command with the pronoun attached."
        }
      ],
      vocabulary: [
        {
          term: "acordarse (de)",
          explanation:
            "The everyday spoken verb for remembering. Reflexive, and it always takes “de” before what you recall.",
          literal: "to-remind-oneself (of)",
          useWhen:
            "In ordinary speech: “¿te acordás?”, “no me acuerdo de él”.",
          avoidWhen:
            "Dropping the “de”, or dropping the pronoun; acordarse needs both the reflexive and “de”.",
          register: "friendly informal",
          region: "General Colombian; the vos form “te acordás” is Cali and Medellín.",
          related: ["¿te acordás?", "no me acuerdo", "acordarse de", "me acuerdo de"],
          example: {
            target: "No me acuerdo de su nombre.",
            translation: "I can't remember his name."
          }
        },
        {
          term: "recordar (algo)",
          explanation:
            "To remember or recall — transitive, taking a direct object with no preposition. A touch more formal than acordarse.",
          literal: "to-recall (something)",
          useWhen:
            "Recalling something, especially in writing or careful speech: “no recuerdo la fecha”.",
          avoidWhen:
            "Adding “de”: “recuerdo de eso” is wrong; that “de” belongs to acordarse.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["si mal no recuerdo", "que yo recuerde", "recordar algo", "hasta donde recuerdo"],
          example: {
            target: "No recuerdo dónde lo dejé.",
            translation: "I don't remember where I left it."
          }
        },
        {
          term: "recordar (a alguien) que",
          explanation:
            "To remind someone — a second sense English keeps as a separate verb entirely.",
          literal: "to-remind (someone) that",
          useWhen:
            "Prompting someone to do or recall something: “recordame que llame”.",
          avoidWhen:
            "Calquing “remind me OF” with “de”; Spanish uses “que” + subjunctive, or a direct object.",
          register: "neutral",
          region: "General Colombian; “hacer acordar” is a common spoken alternative for remind.",
          related: ["recordame", "recuérdame", "recordar que", "hacer acordar"],
          example: {
            target: "Recuérdame que compre pan.",
            translation: "Remind me to buy bread."
          }
        },
        {
          term: "recuerdo (noun)",
          explanation:
            "A memory; also a souvenir or keepsake. The noun that grows out of recordar.",
          literal: "a memory / keepsake",
          useWhen:
            "Talking about memories or mementos: “buenos recuerdos”, “un recuerdo del viaje”.",
          avoidWhen:
            "Assuming it only means memory; “un recuerdo” is also the trinket you bring back.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["buenos recuerdos", "un recuerdo", "de recuerdo", "recuerdos de viaje"],
          example: {
            target: "Me traje un recuerdo de Cali.",
            translation: "I brought back a souvenir from Cali."
          }
        },
        {
          term: "mandar saludos",
          explanation:
            "To send greetings or regards to someone through a third person — a constant social ritual.",
          literal: "to-send greetings",
          useWhen:
            "Passing on hellos: “mandale saludos”, “saludes a tu familia”.",
          avoidWhen:
            "In stiff formal writing, where “envíele mis saludos” fits better than the casual “mandale”.",
          register: "friendly informal",
          region: "Very Colombian; the folk plural “saludes” is common in speech.",
          related: ["mandar saludos", "dale saludos", "un abrazo", "saludes"],
          example: {
            target: "Mandale saludos a tu hermano.",
            translation: "Say hi to your brother for me."
          }
        },
        {
          term: "el colegio / el profe",
          explanation:
            "School (through secondary) and the affectionate short form of profesor — teacher.",
          literal: "the school / the teacher",
          useWhen:
            "Talking about school days: “en el colegio”, “el profe de física”.",
          avoidWhen:
            "Using “colegio” for university; that is “la universidad” or “la u”.",
          register: "friendly informal",
          region: "General Colombian; “el profe” and “la profe” are universal in speech.",
          related: ["el colegio", "el profe", "la profe", "de bachillerato"],
          example: {
            target: "Íbamos al mismo colegio.",
            translation: "We went to the same school."
          }
        },
        {
          term: "si mal no recuerdo",
          explanation:
            "“If I remember rightly” — a hedge you drop in before a memory you are not fully sure of.",
          literal: "if badly not I-recall",
          useWhen:
            "Softening a claim about the past: “si mal no recuerdo, fue en el 2010”.",
          avoidWhen:
            "When you are certain; the phrase signals mild doubt, so it undercuts a firm statement.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["si mal no recuerdo", "que yo recuerde", "hasta donde recuerdo", "creo recordar"],
          example: {
            target: "Si mal no recuerdo, vivía por acá.",
            translation: "If I remember rightly, he lived around here."
          }
        }
      ],
      note:
        "Two verbs share the job of “remember”. Spoken Colombian reaches for reflexive “acordarse de” (“¿te acordás?”, “no me acuerdo de eso”), always with the pronoun and “de”. “Recordar” is the transitive twin — a direct object, no “de”, a shade more formal. The trap is blending them into “me recuerdo de”, which is neither. And recordar has a second life meaning remind (“recordame que…”), a job English gives to a different word. Keep the two apart, and keep “de” only where acordarse puts it.",
      culture: [
        {
          label: "Acordarse beats recordar in speech",
          body:
            "Textbooks lead with recordar, but walk down a street in Cali and you hear acordarse: “¿te acordás?”, “no me acuerdo”, “¿vos te acordás de aquella vez?”. Recordar sounds a touch bookish or formal by comparison, more at home in writing, speeches and news than in a catch-up between friends. Both are correct, but a learner who only knows recordar will sound slightly stiff and, worse, will miss half of what people say. Getting comfortable with the reflexive acordarse — pronoun and “de” firmly attached — is what makes your Spanish sound spoken rather than studied."
        },
        {
          label: "Remember and remind, one root",
          body:
            "English keeps “remember” (do it yourself) and “remind” (make someone else do it) as separate verbs. Spanish folds both into recordar. “Recuerdo tu cara” is I remember your face; “recuérdame tu nombre” is remind me of your name. Context and the presence of a person tell them apart: recordar something is remember, but recordar something to someone is remind. Learners hearing “te recuerdo que…” often think it means “I remember you that”, when it means “I remind you that”. The overlap is small but catches everyone at first, and clears up fast once you notice the person."
        },
        {
          label: "Cali, salsa and Valluno vos",
          body:
            "Cali calls itself the world capital of salsa, and the city's rhythm shows in its speech: a musical, sing-song cadence and a warm, teasing voseo. Vallunos say “¿qui'hubo, mor?” (mor from “amor”), “¿vos qué?”, “mirá vé”. The vos here is not the same as Argentina's; it is the local Colombian voseo shared with Antioquia and the southwest. Salsa here is a whole social world, and much of the reminiscing Colombians do circles back to who danced with whom at which fiesta."
        },
        {
          label: "Recuerdos: memories, souvenirs, regards",
          body:
            "The noun “recuerdo” fans out into three English words. It is a memory (“qué buenos recuerdos”), the souvenir you carry home (“un recuerdo de Cartagena”), and, in the plural, regards passed along (“recuerdos a tu mamá”, though Colombians more often say “saludos”). Sending greetings through others is a real social duty here: end a chat without a “saludos a la familia” and you can seem a little cold. The same root that lets you recall the past lets you keep small threads of connection alive between people who are not in the room."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “acordé de tu cumpleaños” for “I remembered your birthday”",
          whyItFails:
            "Without the reflexive, “acordar” means to agree or resolve, not to remember. Remembering needs the pronoun: “acordarse”. So “acordé” sounds like you agreed on the birthday.",
          sayInstead: "Me acordé de tu cumpleaños."
        },
        {
          mistake: "Saying “no me recuerdo de eso” for “I don't remember that”",
          whyItFails:
            "This blends the two verbs. Recordar does not take “me…de”; that pattern belongs to acordarse. Pick one: reflexive acordarse with “de”, or transitive recordar with neither.",
          sayInstead: "No me acuerdo de eso. / No recuerdo eso."
        },
        {
          mistake: "Saying “recordame de llamar” for “remind me to call”",
          whyItFails:
            "Calquing English's “remind me OF” puts a stray “de” in. To remind someone to do something, Spanish uses “que” + subjunctive or a bare infinitive, not “de”.",
          sayInstead: "Recordame que llame. / Recordame llamar."
        },
        {
          mistake: "Using “recordar” to mean “record”",
          whyItFails:
            "It is a false friend. “Recordar” is to remember; to record audio or video is “grabar”. Saying “voy a recordar la reunión” means you will remember the meeting, not tape it.",
          sayInstead: "Voy a grabar la reunión."
        }
      ],
      variations: [
        {
          form: "¿Vos te acordás?",
          register: "friendly informal",
          region: "Cali / Antioquia / vos regions",
          whenToUse: "Asking a friend if they remember, in vos."
        },
        {
          form: "¿Tú te acuerdas?",
          register: "friendly informal",
          region: "Caribbean coast / tú regions",
          whenToUse: "The same question in tú."
        },
        {
          form: "¿Usted se acuerda?",
          register: "polite formal",
          region: "Bogotá / general Colombian",
          whenToUse: "Asking with usted — a stranger or an elder."
        },
        {
          form: "Si mal no recuerdo...",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Hedging before a memory you are unsure of."
        },
        {
          form: "Recordame que te llame.",
          register: "friendly informal",
          region: "Cali / vos regions",
          whenToUse: "Asking someone to remind you to do something."
        }
      ],
      prompt: "Alex says “recordame el nombre del profe.” What is he asking Diana to do?",
      choices: [
        "To remind him of the teacher's name — recordar can mean remind, and “recordame” is the vos command for “remind me”.",
        "To remember the teacher's name entirely on her own, taking recordar only in its recall-something-yourself sense here.",
        "To write the teacher's name down for him somewhere, reading “recordame” as if it asked her to note or record it."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Diana asks “¿te acordás de las fiestas?” Why the “de” after “te acordás”?",
          choices: [
            "Because acordarse is short for a longer phrase, and the “de” is an optional flourish that speakers can freely drop.",
            "Because acordarse de always takes “de” before what you remember — the preposition is simply built into the verb.",
            "Because “de” here means “from”, pointing back to where the parties happened rather than linking it to the verb itself."
          ],
          answer: 1,
          tests: "acordarse de requires de"
        },
        {
          prompt: "Which is correct for “I don't remember that”?",
          choices: [
            "“No me recuerdo de eso”, attaching both the reflexive “me” and the “de” to recordar the way acordarse does.",
            "“No recuerdo de eso”, keeping the “de” but dropping the pronoun, which still leaves recordar with a stray preposition.",
            "“No me acuerdo de eso” (or “no recuerdo eso”) — recordar takes a direct object, while acordarse takes “me…de”."
          ],
          answer: 2,
          tests: "not blending recordar and acordarse"
        },
        {
          prompt: "Diana says “qué buenos recuerdos.” What does “recuerdos” mean here?",
          choices: [
            "Memories — “recuerdo” is the noun from recordar, used for the good memories the two of them are sharing right now.",
            "Regards to pass along to someone, taking “recuerdos” only in its send-my-greetings social sense on this occasion.",
            "Souvenirs they once bought, reading “recuerdos” as the little keepsakes that travelers bring back home from a trip."
          ],
          answer: 0,
          tests: "recuerdos as memories"
        }
      ]
    },
    en: {
      title: "Reencontrarse con una amiga y recordar viejos tiempos",
      situation:
        "Alejandra se encuentra por casualidad en Houston con Rachel, una amiga del colegio que no ve hace años. Se ponen a recordar las fiestas, los profesores y los apodos de entonces, y Alejandra le pide que le recuerde un par de nombres que se le escapan. Toda la charla gira en torno a “remember”, y sobre todo a la diferencia que el inglés hace entre “remember” (recordar uno mismo) y “remind” (recordarle algo a alguien), dos verbos donde el español usa uno.",
      setting: {
        who: "Rachel es una amiga del colegio de Alejandra a la que no ve hace años: cálida, rápida y llena de anécdotas.",
        what: "Un reencuentro espontáneo en la calle, sacando a flote recuerdos, profesores y nombres a medio olvidar.",
        when: "Un encuentro casual, una tarde cualquiera.",
        where: "Houston, donde el inglés separa en dos verbos —remember y remind— lo que el español junta en recordar.",
        why: "Porque el inglés distingue “remember” (recordar uno mismo) de “remind” (recordarle algo a alguien), y porque “remember” no lleva ni “of” ni reflexivo, dos calcos que el hispanohablante arrastra del español."
      },
      address: {
        form: "mixed",
        who: "Rachel y Alejandra se tratan con el mismo “you” y el nombre de pila, como dos amigas de siempre.",
        why: "El inglés no distingue tú de usted ni tiene el vos caleño: hay un solo “you”. La cercanía la marcan el nombre, el tono y las bromas. El calor del vos se traslada por el trato relajado, no por una forma verbal distinta.",
        ifYouSwitch:
          "Ponerse ceremoniosa con una amiga del colegio sonaría raro en inglés. La confianza se muestra bajando el registro de las palabras —“hey”, “oh my gosh”— no cambiando de pronombre, porque el “you” es siempre el mismo."
      },
      dialogue: [
        {
          speaker: "Rachel",
          target: "Alejandra! Do you remember me? From school!",
          translation: "¡Alejandra! ¿Te acordás de mí? ¡Del colegio!",
          pronunciation: "a-le-JAN-dra! du yu ri-MEM-ber mi? from skul",
          literal: "¡Alejandra! ¿Tú recuerdas me? ¡Del colegio!",
          why: "“Remember” es “acordarse de / recordar”. Ojo con dos calcos: el inglés no lleva “of” —“remember me”, no “remember of me”— ni reflexivo. “Do you...?” arma la pregunta con “do”."
        },
        {
          speaker: "Alejandra",
          target: "Of course! I remember perfectly. I don't recall your last name, though.",
          translation: "¡Claro! Me acuerdo perfecto. No recuerdo tu apellido, eso sí.",
          pronunciation: "of kors! ai ri-MEM-ber PER-fekt-li. ai dont ri-KOL yor last neim, dou",
          literal: "¡Por supuesto! Yo recuerdo perfectamente. No recuerdo tu último nombre, aunque.",
          why: "“Remember” y “recall” son dos maneras de decir recordar; “recall” es un pelín más formal. Ninguno lleva “of” ni reflexivo. “Last name” es el apellido; el “though” final es el “eso sí”."
        },
        {
          speaker: "Rachel",
          target: "Chen. Hey, do you remember the parties at my place?",
          translation: "Chen. Oye, ¿te acordás de las fiestas en mi casa?",
          pronunciation: "chen. jei, du yu ri-MEM-ber da PAR-tis at mai pleis",
          literal: "Chen. Oye, ¿tú recuerdas las fiestas en mi lugar?",
          why: "“Do you remember...?” otra vez con “do”. “Remember” lleva objeto directo, sin “of”: “remember the parties”, no “remember of the parties”. “At my place” es “en mi casa”."
        },
        {
          speaker: "Alejandra",
          target: "Oh, yes! And remind me of our physics teacher's name, I can't remember.",
          translation: "¡Uy, sí! Y recordame el nombre del profe de física, que no me acuerdo.",
          pronunciation: "ou, yes! and ri-MAIND mi of aur FI-siks TII-cher neim, ai kant ri-MEM-ber",
          literal: "¡Oh, sí! Y recuérdame de nuestro física profesor nombre, yo no puedo recordar.",
          why: "El giro clave: el inglés usa “remind” (recordarle a alguien), no “remember”, cuando le pides a otro que te lo traiga a la memoria. Y ojo: “remind me OF something” sí lleva “of”, al revés que “remember”."
        },
        {
          speaker: "Rachel",
          target: "It was Mr. Gold. Remember how he was always late.",
          translation: "Era el profe Gold. Recordá que siempre llegaba tarde.",
          pronunciation: "it uos MIS-ter gould. ri-MEM-ber jau ji uos OL-ueis leit",
          literal: "Ello era Señor Gold. Recuerda cómo él estaba siempre tarde.",
          why: "“Remember how...” para evocar algo. Aquí sí es “remember”, porque Rachel recuerda por sí misma, no le pide a nadie. “Was always late” es “siempre llegaba tarde”, con el imperfecto del inglés “was”."
        },
        {
          speaker: "Alejandra",
          target: "Haha, true! What good memories. Say hi to your mom for me.",
          translation: "¡Jaja, verdad! Qué buenos recuerdos. Mandale saludos a tu mamá.",
          pronunciation: "ja-ja, tru! uat gud ME-mo-ris. sei jai tu yor mam for mi",
          literal: "Jaja, ¡verdad! Qué buenas memorias. Di hola a tu mamá por mí.",
          why: "“Memories” es “recuerdos”. Para mandar saludos el inglés dice “say hi to… for me”, no un calco de recuerdos. “For me” es lo que carga el “de mi parte”."
        }
      ],
      vocabulary: [
        {
          term: "remember (no “of”)",
          explanation:
            "Recordar o acordarse. Ojo: el inglés no lleva “of” ni reflexivo — “remember me”, no “remember of me”.",
          literal: "recordar",
          useWhen:
            "Al recordar algo o a alguien: “do you remember?”, “I remember that”.",
          avoidWhen:
            "Con “remember of” o “remember myself”, calcos del “acordarse de” español.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["do you remember?", "I remember", "remember that", "not that I remember"],
          example: {
            target: "Do you remember her?",
            translation: "¿Te acordás de ella?"
          }
        },
        {
          term: "recall",
          explanation:
            "Recordar, un pelín más formal que “remember”. Frecuente en negativas: “I can't recall”.",
          literal: "recordar (formal)",
          useWhen:
            "Al recordar algo con un tono más cuidado: “if I recall correctly”.",
          avoidWhen:
            "En charla muy relajada, donde “remember” suena más natural que “recall”.",
          register: "neutro",
          region: "Inglés universal; algo más formal.",
          related: ["recall", "I can't recall", "if I recall correctly", "as far as I recall"],
          example: {
            target: "I can't recall his name.",
            translation: "No recuerdo su nombre."
          }
        },
        {
          term: "remind (someone to / of)",
          explanation:
            "Recordarle algo a alguien — el otro sentido de recordar, que el inglés pone en un verbo aparte.",
          literal: "recordar (a alguien)",
          useWhen:
            "Al pedir o hacer que alguien recuerde: “remind me to call”, “that reminds me”.",
          avoidWhen:
            "Confundiéndolo con “remember”; recordar uno mismo es “remember”, no “remind”.",
          register: "neutro",
          region: "Inglés universal; “remind me to” + verbo, “remind me of” + cosa.",
          related: ["remind me", "remind me to", "remind me of", "that reminds me"],
          example: {
            target: "Remind me to buy bread.",
            translation: "Recuérdame que compre pan."
          }
        },
        {
          term: "memory / memories",
          explanation:
            "Recuerdo(s). También significa la memoria como facultad: “a good memory” es buena memoria.",
          literal: "recuerdo / memoria",
          useWhen:
            "Al hablar de recuerdos: “good memories”, “childhood memories”.",
          avoidWhen:
            "Para el souvenir físico; eso es “a souvenir”, no “a memory”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["good memories", "a memory", "childhood memories", "make memories"],
          example: {
            target: "What good memories.",
            translation: "Qué buenos recuerdos."
          }
        },
        {
          term: "say hi / give my regards",
          explanation:
            "Mandar saludos. El inglés dice “say hi to… for me” o “give my regards”, sin calcar recuerdos.",
          literal: "decir hola / dar mis saludos",
          useWhen:
            "Al mandarle saludos a alguien por medio de otra persona.",
          avoidWhen:
            "Con “send memories”, un calco de “recuerdos” que en inglés no significa saludos.",
          register: "amistoso informal",
          region: "Inglés universal; “give my regards” es un punto más formal.",
          related: ["say hi to", "tell her I said hi", "give my regards", "send my love"],
          example: {
            target: "Say hi to your brother for me.",
            translation: "Mandale saludos a tu hermano."
          }
        },
        {
          term: "school / teacher",
          explanation:
            "Colegio y profesor. “High school” es el bachillerato; “teacher” cubre profe de colegio.",
          literal: "colegio / profesor",
          useWhen:
            "Al hablar de la época del colegio: “back in school”, “my old teacher”.",
          avoidWhen:
            "Con “professor” para un profe de colegio; “professor” es de universidad.",
          register: "neutro",
          region: "Inglés universal; “professor” se reserva a la universidad.",
          related: ["high school", "teacher", "classmate", "back in school"],
          example: {
            target: "We went to the same school.",
            translation: "Íbamos al mismo colegio."
          }
        },
        {
          term: "if I remember right",
          explanation:
            "Si mal no recuerdo — una fórmula para matizar un recuerdo del que no se está seguro.",
          literal: "si recuerdo bien",
          useWhen:
            "Al suavizar una afirmación sobre el pasado: “if I remember right, it was 2010”.",
          avoidWhen:
            "Cuando estás seguro; la frase señala una duda leve.",
          register: "neutro",
          region: "Inglés universal; “if I recall correctly” es la variante formal.",
          related: ["if I remember right", "if I recall correctly", "as far as I remember", "off the top of my head"],
          example: {
            target: "If I remember right, he lived here.",
            translation: "Si mal no recuerdo, vivía acá."
          }
        }
      ],
      note:
        "El español “recordar” se parte en inglés en dos verbos. Recordar uno mismo es “remember” (o el más formal “recall”); recordarle algo a alguien es “remind”. Y ojo con dos calcos que delatan al hispanohablante: “remember” no lleva “of” —“remember me”, no “remember of me”— ni reflexivo —“I remember”, no “I remember myself”. Curiosamente, “remind” sí lleva “of”: “that reminds me of…”. Mandar saludos, además, no es “send memories”, sino “say hi for me”.",
      culture: [
        {
          label: "“Remember” no lleva “of” ni reflexivo",
          body:
            "El error más delator del hispanohablante es calcar “acordarse de” como “remember of”: “do you remember of me?”. En inglés “remember” es transitivo directo y va solo — “remember me”, “remember that day” —, sin “of” y sin reflexivo. El “me” del español (“me acuerdo”) no tiene equivalente aquí; “I remember myself” significaría otra cosa. Es un ajuste minúsculo pero constante, porque aparece cada vez que uno habla del pasado. Quitarle el “of” y el reflexivo a “remember” es de las primeras cosas que vuelven el inglés natural en vez de traducido."
        },
        {
          label: "Remember y remind: el inglés los separa",
          body:
            "Donde el español usa un solo recordar, el inglés reparte dos verbos. “Remember” es traer algo a tu propia memoria; “remind” es hacer que otra persona lo recuerde. “I remembered your birthday” frente a “remind me of your birthday”. El hispanohablante tiende a estirar “remember” para todo y dice “remember me to call”, que suena raro. La pista está en si hay otra persona a la que uno empuja a recordar: si la hay, es “remind”. Interiorizar esa división —yo recuerdo = remember, yo te hago recordar = remind— evita uno de los cruces más frecuentes."
        },
        {
          label: "Pero “remind me OF” sí lleva “of”",
          body:
            "Justo cuando uno aprende a quitarle el “of” a “remember”, aparece “remind”, que sí lo lleva: “that reminds me of my school”, “you remind me of your dad”. Y con un verbo cambia a “to”: “remind me to call her”. Así que el “of” prohibido con “remember” es obligatorio con “remind” cuando sigue una cosa, y se vuelve “to” cuando sigue una acción. Parece un laberinto, pero se resume en tres bloques fijos: “remember something”, “remind someone of something”, “remind someone to do something”. Memorizarlos como piezas enteras es más seguro que traducir el “de” español."
        },
        {
          label: "“Make memories” y mandar saludos",
          body:
            "“Memory” es recuerdo y también la memoria como facultad (“a good memory”). El inglés arma expresiones propias: “make memories” (crear recuerdos), “bring back memories” (traer recuerdos), “a trip down memory lane” (un paseo por el pasado). Para mandar saludos, en cambio, no se dice “send memories” —eso no significa nada en inglés— sino “say hi to… for me”, “give my regards” o, más cariñoso, “send my love”. El “for me” es clave: es lo que carga el “de mi parte”. Son fórmulas hechas que conviene aprender enteras, sin traducir palabra por palabra."
        }
      ],
      pitfalls: [
        {
          mistake: "“Do you remember of me?”",
          whyItFails:
            "Calca “¿te acordás de mí?” metiendo “of”. El inglés “remember” es transitivo directo y no lleva “of”: se dice “remember me”.",
          sayInstead: "Do you remember me?"
        },
        {
          mistake: "“I don't remember myself of that.”",
          whyItFails:
            "Calca a la vez el reflexivo “me” y el “de” del español. “Remember” no lleva ni pronombre reflexivo ni “of”.",
          sayInstead: "I don't remember that."
        },
        {
          mistake: "“Remember me to buy milk.”",
          whyItFails:
            "Confunde “remember” (recordar uno mismo) con “remind” (recordarle a alguien). Pedir que te recuerden algo es “remind”.",
          sayInstead: "Remind me to buy milk."
        },
        {
          mistake: "“That remembers me of my school.”",
          whyItFails:
            "Calca “eso me recuerda a”. El inglés usa “remind”, no “remember”, para lo que trae algo a la memoria: “that reminds me”.",
          sayInstead: "That reminds me of my school."
        }
      ],
      variations: [
        {
          form: "Do you remember?",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al preguntar si alguien recuerda algo."
        },
        {
          form: "Not that I remember.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al decir que uno no recuerda tal cosa."
        },
        {
          form: "Remind me to call her.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al pedir que te recuerden hacer algo."
        },
        {
          form: "That reminds me...",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al enlazar con algo que uno acaba de recordar."
        },
        {
          form: "If I remember right...",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al matizar un recuerdo del que no se está seguro."
        }
      ],
      prompt: "Alejandra says “remind me of our teacher's name.” ¿Qué le pide a Rachel?",
      choices: [
        "Que le recuerde el nombre del profe — “remind” es recordarle algo a alguien, distinto de “remember” (recordar uno mismo).",
        "Que ella misma recuerde el nombre del profe por su cuenta, tomando “remind” como si significara acordarse uno solo.",
        "Que le anote el nombre del profe en un papel, leyendo “remind me” como si le pidiera apuntar o registrar el nombre."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Rachel pregunta “do you remember me?” ¿Por qué no lleva “of”?",
          choices: [
            "Porque “remember” abrevia una frase más larga, y el “of” es un adorno opcional que se puede poner o quitar a gusto.",
            "Porque “remember” en inglés es transitivo directo — no lleva “of”, a diferencia del “acordarse de” del español.",
            "Porque “of” aquí significaría “de parte de”, y cambiaría el sentido a recordar a alguien en nombre de otra persona."
          ],
          answer: 1,
          tests: "remember sin of"
        },
        {
          prompt: "¿Cuál es correcto para “no me acuerdo de eso”?",
          choices: [
            "“I don't remember myself of that”, calcando el reflexivo “me” y el “de” del español sobre el verbo remember.",
            "“I don't remember of that”, quitando el reflexivo pero dejando el “of”, que igual le sobra al verbo remember.",
            "“I don't remember that” — “remember” es transitivo directo: sin reflexivo y sin “of”, al revés que acordarse."
          ],
          answer: 2,
          tests: "remember sin reflexivo ni of"
        },
        {
          prompt: "¿Cómo se dice “eso me recuerda a mi colegio” en inglés?",
          choices: [
            "“That reminds me of my school” — “remind… of” es la fórmula; el inglés usa “remind”, no “remember”, para esta idea.",
            "“That remembers me of my school”, calcando “me recuerda” con “remember”, que no se usa para esa idea en inglés.",
            "“That reminds me my school”, con “remind” pero sin el “of” que hace falta para enlazar con aquello que se recuerda."
          ],
          answer: 0,
          tests: "remind me of construccion"
        }
      ]
    }
  },
  {
    id: "admitting-you-forgot-to-run-an-errand",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "familiar",
    pathways: ["foundation"],
    verb: "olvidar",
    review: "pending",
    es: {
      title: "Admitting you forgot an errand",
      situation:
        "Alex arrives for a meal at the home of Yina, a friend from Cartagena, without the cake he had promised to bring, and on top of that he realizes he also left his keys behind. He has to admit, a little embarrassed, that he forgot everything. The scene lives on the three ways to forget: the neutral “olvidé”, the reflexive “me olvidé de”, and above all the wonderfully innocent “se me olvidó”, which spreads the blame as if forgetting happened all by itself.",
      setting: {
        who: "Yina is a warm, easygoing friend from Cartagena hosting lunch; Alex is the guest who dropped the ball.",
        what: "Owning up to forgetting the cake and the keys, and being let off the hook with coastal good humor.",
        when: "Lunchtime, arriving at the door empty-handed.",
        where: "Cartagena, on the Caribbean coast, where Spanish is fast, warm and drops its s's into soft aspirations.",
        why: "Because olvidar has three shapes that assign blame differently, and the no-fault “se me olvidó” is the everyday default English has no clean way to copy."
      },
      address: {
        form: "tú",
        who: "Yina uses tú with Alex, the coastal default among friends — the coast does not vosear.",
        why: "Unlike Cali or Medellín, the Caribbean coast is tú country, not vos. Costeño tú is warm and rapid-fire, with dropped final s's (“¿oíte?” for “¿oíste?”) and a musical intonation all its own.",
        ifYouSwitch:
          "Reaching for usted with a close friend on the coast would sound weirdly stiff, almost cold. Vos would mark you as an outsider from the interior. Tú is the natural coastal register between friends."
      },
      dialogue: [
        {
          speaker: "Yina",
          target: "¿Y la torta? ¿No la ibas a traer?",
          translation: "And the cake? Weren't you going to bring it?",
          pronunciation: "ee la TOR-ta? no la EE-bas a tra-ER?",
          literal: "And the cake? Not it you-were-going to bring?",
          why: "“Ibas a traer” is the imperfect of “ir a” + infinitive — a plan seen from the past, “you were going to”. The clitic “la” stands in for “la torta”, placed before the conjugated verb."
        },
        {
          speaker: "Alex",
          target: "Ay, se me olvidó por completo. ¡Perdón!",
          translation: "Oh, it completely slipped my mind. Sorry!",
          pronunciation: "ai, se me ol-vi-DO por kom-PLE-to. per-DON!",
          literal: "Oh, itself to-me it-forgot by complete. Forgiveness!",
          why: "The star construction: “se me olvidó”. The cake is the grammatical subject that “forgot itself on me”. It quietly removes blame — the forgetting happened to Alex, rather than Alex actively failing. This is the everyday default."
        },
        {
          speaker: "Yina",
          target: "Tranquilo, no importa. ¿Y también olvidaste las llaves?",
          translation: "Don't worry, it's fine. And did you forget the keys too?",
          pronunciation: "tran-KEE-lo, no im-POR-ta. ee tam-BYEN ol-vi-DAS-te las YA-ves?",
          literal: "Calm, not it-matters. And also you-forgot the keys?",
          why: "Here olvidar is plain transitive: “olvidaste las llaves”, subject you, direct object the keys. This version puts the action squarely on Alex — no softening “se me”. “Tranquilo” is the all-purpose coastal reassurance."
        },
        {
          speaker: "Alex",
          target: "Uf, sí. Me olvidé de las llaves otra vez. Soy un desastre.",
          translation: "Ugh, yeah. I forgot the keys again. I'm a disaster.",
          pronunciation: "oof, see. me ol-vi-DE de las YA-ves O-tra ves. soy oon de-SAS-tre",
          literal: "Ugh, yes. Myself I-forgot of the keys other time. I-am a disaster.",
          why: "The third shape: reflexive “me olvidé de”, with the pronoun and “de”. It sits between the neutral “olvidé” and the blameless “se me olvidó” — you own it, but softly. Note the obligatory “de” after olvidarse."
        },
        {
          speaker: "Yina",
          target: "Jajaja. No olvides que mañana sí es la comida, ¿oíte?",
          translation: "Hahaha. Don't forget that tomorrow's the real lunch, okay?",
          pronunciation: "ha-ha-ha. no ol-VEE-des ke ma-NYA-na see es la ko-MEE-da, o-EE-te?",
          literal: "Hahaha. Not you-forget that tomorrow yes is the lunch, you-heard?",
          why: "“No olvides” is a negative tú command — don't forget. The tag “¿oíte?” (coastal “¿oíste?” with the s dropped) checks you are listening, like “okay?”. “Sí” here is emphatic: the real one."
        },
        {
          speaker: "Alex",
          target: "No, esta vez no se me olvida. Lo prometo.",
          translation: "No, this time I won't forget. I promise.",
          pronunciation: "no, ES-ta ves no se me ol-VEE-da. lo pro-ME-to",
          literal: "No, this time not itself to-me it-forgets. It I-promise.",
          why: "“No se me olvida” in the present, projecting into the future — a common way to promise you won't let it slip. The same no-fault construction, now used as a pledge. “Lo prometo” seals it."
        }
      ],
      vocabulary: [
        {
          term: "se me olvidó",
          explanation:
            "The no-fault forget. The thing is the subject and “forgets itself on you” — the everyday, blame-free default.",
          literal: "itself to-me it-forgot",
          useWhen:
            "For ordinary slips: “se me olvidó”, “se me olvidó llamarte”.",
          avoidWhen:
            "When you want to accept blame plainly; then use “olvidé” or “me olvidé de”.",
          register: "friendly informal",
          region: "General Colombian; the no-fault “se me” is pan-Hispanic and constant in speech.",
          related: ["se me olvidó", "se me olvidaron", "se me fue", "se me pasó"],
          example: {
            target: "Se me olvidó la cita.",
            translation: "I forgot the appointment. (it slipped my mind)"
          }
        },
        {
          term: "olvidar (algo)",
          explanation:
            "To forget, plain and transitive — subject you, direct object the thing, no preposition.",
          literal: "to-forget (something)",
          useWhen:
            "For a neutral statement of fact: “olvidé las llaves”, “no olvides el paraguas”.",
          avoidWhen:
            "Adding “de”: bare olvidar takes a direct object, so “olvidé de las llaves” is wrong.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["olvidé", "no olvides", "olvidar algo", "olvidado"],
          example: {
            target: "Olvidé el paraguas.",
            translation: "I forgot the umbrella."
          }
        },
        {
          term: "olvidarse (de)",
          explanation:
            "The reflexive forget, always with “de”. Midway between neutral olvidar and no-fault “se me olvidó”.",
          literal: "to-forget-oneself (of)",
          useWhen:
            "Owning a lapse gently: “me olvidé de ti”, “no te olvides de mí”.",
          avoidWhen:
            "Dropping the “de”: olvidarse needs it — “me olvidé las llaves” is shaky.",
          register: "friendly informal",
          region: "General Colombian and pan-Hispanic.",
          related: ["me olvidé de", "no te olvides", "olvidarse de", "se olvidó de"],
          example: {
            target: "Me olvidé de tu cumpleaños.",
            translation: "I forgot your birthday."
          }
        },
        {
          term: "se me fue / se me pasó",
          explanation:
            "Two everyday cousins of “se me olvidó”: it escaped me, it slipped by me — same no-fault flavor.",
          literal: "itself to-me it-went / it-passed",
          useWhen:
            "For a mild, blame-free slip: “se me fue el nombre”, “se me pasó la hora”.",
          avoidWhen:
            "For a serious, deliberate omission; these sound casual and forgiving.",
          register: "friendly informal",
          region: "General Colombian; very common in speech.",
          related: ["se me fue", "se me pasó", "se me olvidó", "se me escapó"],
          example: {
            target: "Se me pasó la hora.",
            translation: "I lost track of the time."
          }
        },
        {
          term: "olvidadizo",
          explanation:
            "Forgetful — the adjective for someone who forgets easily. Warmer and lighter than “absent-minded”.",
          literal: "forgetful-ish",
          useWhen:
            "Describing a person who forgets a lot: “soy muy olvidadizo”.",
          avoidWhen:
            "For a one-off slip; this is a standing trait, not a single lapse.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["olvidadizo", "despistado", "cabeza de pollo", "mala memoria"],
          example: {
            target: "Es que soy muy olvidadizo.",
            translation: "The thing is I'm very forgetful."
          }
        },
        {
          term: "¿oíte? / ¿oíste?",
          explanation:
            "A coastal tag, “you heard?”, checking the other person is with you. The costeño form drops the s.",
          literal: "you-heard?",
          useWhen:
            "Closing a sentence with a check on the coast: “no llegues tarde, ¿oíte?”.",
          avoidWhen:
            "In formal writing; it is spoken and regional, and the s-less form is very informal.",
          register: "friendly informal",
          region: "Caribbean coast; the full “¿oíste?” is general Colombian.",
          related: ["¿oíte?", "¿oíste?", "¿sí o qué?", "¿me copiás?"],
          example: {
            target: "No te vayas sin avisar, ¿oíte?",
            translation: "Don't leave without saying, okay?"
          }
        },
        {
          term: "que no se te olvide",
          explanation:
            "“Don't let it slip” — the no-fault construction turned into a warm reminder aimed at someone else.",
          literal: "that not itself to-you it-forgets",
          useWhen:
            "Reminding someone gently: “que no se te olvide la cita”.",
          avoidWhen:
            "For a stern order; this is friendly, not commanding.",
          register: "friendly informal",
          region: "General Colombian and pan-Hispanic.",
          related: ["que no se te olvide", "no se te vaya a olvidar", "acordate", "pilas con"],
          example: {
            target: "Que no se te olvide traer la torta.",
            translation: "Don't forget to bring the cake."
          }
        }
      ],
      note:
        "Olvidar has three shapes, and they differ in how much blame you take. Plain “olvidé las llaves” states the fact. Reflexive “me olvidé de las llaves” owns it, softly, and needs “de”. But the everyday Colombian default is the no-fault “se me olvidó”, where the forgotten thing becomes the subject and the lapse simply happens to you — and it agrees with that thing: “se me olvidaron las llaves”, plural. English has no neat mirror, so learners over-use a flat “I forgot”. Reach for “se me olvidó” and you will sound far more natural.",
      culture: [
        {
          label: "“Se me olvidó”: forgetting without fault",
          body:
            "Spanish has a whole grammar for things that go wrong without anyone quite meaning them to. “Se me olvidó”, “se me cayó”, “se me perdió”, “se me rompió” — it forgot itself on me, it fell from me, it lost itself on me, it broke on me. The thing becomes the subject; you are just the bystander it happened to. This no-fault “se” is not laziness or dodging blame; it is the default, unmarked way to narrate everyday mishaps. A flat “yo olvidé” can even sound oddly heavy, as if you were confessing a failing rather than reporting that life slipped a cog."
        },
        {
          label: "Three shapes, three shades of blame",
          body:
            "The same lapse can be told three ways. “Olvidé la cita” is neutral and factual. “Me olvidé de la cita” adds the reflexive and softens it a little — you were involved, but gently. “Se me olvidó la cita” removes you almost entirely: the appointment slipped away on its own. Colombians slide between these constantly, choosing how much responsibility to shoulder. For a learner the lesson is not to pick one and stick to it, but to hear the difference — and to know that the blame-free “se me olvidó” is the one you will need most often in daily life."
        },
        {
          label: "The coast: tú, speed and dropped s's",
          body:
            "Caribbean Colombia — Cartagena, Barranquilla, Santa Marta — sounds unlike the interior. It is tú country, never vos, and the speech is fast, warm and full of aspirated or dropped final s's: “¿oíte?” for “¿oíste?”, “lo do” for “los dos”, “etá bien” for “está bien”. Intonation rises and falls musically, close to the Caribbean Spanish of the islands. Costeños are famous across Colombia for their humor and openness, and the easy “tranquilo, no importa” with which Yina waves off a forgotten cake is very much in that key: warm, unbothered, quick to let a friend off the hook."
        },
        {
          label: "The no-fault family: cayó, perdió, olvidó",
          body:
            "Once you notice “se me olvidó”, you start seeing its relatives everywhere. Drop your phone and it is “se me cayó el celular”. Lose your keys, “se me perdieron las llaves”. Break a glass, “se me rompió el vaso”. Burn the rice, “se me quemó el arroz”. In every case the object takes over as subject and agrees with the verb — singular or plural — while you appear only as the little “me” it happened to. Mastering this pattern is a big step toward sounding native, because it is how Colombians narrate the small accidents of an ordinary day."
        }
      ],
      pitfalls: [
        {
          mistake: "Always saying “yo olvidé el teléfono” for a slip",
          whyItFails:
            "It is grammatically fine but sounds heavy and over-responsible for an everyday lapse. Colombians default to the no-fault construction for slips like this.",
          sayInstead: "Se me olvidó el teléfono."
        },
        {
          mistake: "Saying “me olvidé las llaves” without “de”",
          whyItFails:
            "Reflexive olvidarse requires “de” before the thing. Without it the sentence is shaky; either add “de” or drop the pronoun and use plain olvidar.",
          sayInstead: "Me olvidé de las llaves. / Olvidé las llaves."
        },
        {
          mistake: "Saying “se me olvidó de las llaves”",
          whyItFails:
            "The no-fault “se me” construction has no “de” — the thing is the subject, not the object of a preposition. Adding “de” mixes two patterns.",
          sayInstead: "Se me olvidaron las llaves."
        },
        {
          mistake: "Saying “se me olvidó las llaves” for plural keys",
          whyItFails:
            "In the no-fault construction the forgotten thing is the subject, so the verb must agree with it. Plural keys means a plural verb.",
          sayInstead: "Se me olvidaron las llaves."
        }
      ],
      variations: [
        {
          form: "Se me olvidó.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The no-fault default for a singular slip."
        },
        {
          form: "Se me olvidaron las llaves.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "No-fault with a plural thing — verb agrees."
        },
        {
          form: "Me olvidé de eso.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Owning the lapse gently, with “de”."
        },
        {
          form: "No te olvides.",
          register: "friendly informal",
          region: "Caribbean coast / tú regions",
          whenToUse: "Reminding a friend not to forget, in tú."
        },
        {
          form: "Que no se te olvide.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "A warm no-fault reminder aimed at someone else."
        }
      ],
      prompt: "Alex says “se me olvidó por completo.” What does the “se me” do to the meaning?",
      choices: [
        "It makes the cake the subject that slipped Alex's mind, framing the lapse as no-fault rather than a deliberate failing.",
        "It turns the sentence into a formal apology, raising the register so the forgetting sounds more serious and regretful.",
        "It marks the forgetting as happening to someone else entirely, shifting the blame onto Yina rather than onto Alex himself."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "How do you say “I forgot the keys” using the no-fault construction, with keys plural?",
          choices: [
            "“Se me olvidó las llaves”, keeping the verb singular even though the keys that were forgotten are plural in this sentence.",
            "“Yo olvidé de las llaves”, adding a “de” to plain olvidar and leaving the verb agreeing with the speaker rather than the keys.",
            "“Se me olvidaron las llaves” — in the no-fault construction the keys are the subject, so the verb agrees and turns plural."
          ],
          answer: 2,
          tests: "se me olvidaron agreement"
        },
        {
          prompt: "Which sounds most natural for an everyday slip, “I forgot my phone at home”?",
          choices: [
            "“Se me olvidó el teléfono en la casa”, the no-fault default Colombians reach for when an ordinary lapse just happens to them.",
            "“Yo hice el olvido del teléfono en la casa”, turning forget into a noun phrase that no Colombian would actually use in speech.",
            "“El teléfono fue olvidado por mí en la casa”, a stiff passive that is grammatical but sounds like a police report, not a chat."
          ],
          answer: 0,
          tests: "se me olvidó as default"
        },
        {
          prompt: "Alex says “me olvidé de las llaves.” Why the “de”?",
          choices: [
            "Because reflexive olvidarse always takes “de” before the thing forgotten — the preposition is built into that form of the verb.",
            "Because “de” here means “from”, signaling that the keys were taken from somewhere rather than simply forgotten by Alex.",
            "Because every version of olvidar needs “de”, including the plain transitive one, so leaving it out would always be an error."
          ],
          answer: 0,
          tests: "olvidarse de requires de"
        }
      ]
    },
    en: {
      title: "Reconocer que se te olvidó un mandado",
      situation:
        "Alejandra llega a una comida en casa de Tanya, una amiga en Houston, sin la torta que había prometido traer, y encima se da cuenta de que dejó las llaves en la casa. Le toca reconocer, algo apenada, que se le olvidó todo. La escena enseña algo clave del inglés: no existe el “se me olvidó” que reparte la culpa, así que se dice “I forgot” o “it slipped my mind”; y cuando el olvido pasa en un lugar, el inglés cambia a otro verbo, “leave” — “I left my keys at home”.",
      setting: {
        who: "Tanya es una amiga relajada y cálida que recibe a Alejandra a almorzar; Alejandra es la invitada que falló.",
        what: "Reconocer que olvidó la torta y las llaves, y que la disculpen con buen humor.",
        when: "A la hora del almuerzo, llegando a la puerta con las manos vacías.",
        where: "Houston, donde el inglés no tiene el “se me olvidó” sin culpa y separa “forget” de “leave”.",
        why: "Porque el inglés no copia el “se me olvidó” inocente —dice “I forgot” o “it slipped my mind”— y porque cuando el olvido ocurre en un sitio, cambia a “leave”."
      },
      address: {
        form: "mixed",
        who: "Tanya y Alejandra se tratan con el mismo “you” y el nombre de pila, como dos amigas cercanas.",
        why: "El inglés tiene un solo “you”: no hay tú costeño ni usted. El calor y la confianza se marcan con el tono, el nombre y expresiones como “don't worry about it”, no con un pronombre aparte.",
        ifYouSwitch:
          "No hay un “usted” al que pasarse en inglés. Para sonar más o menos cercano se ajusta el vocabulario y el tono —“no worries” frente a “that's quite all right”—, pero el “you” no cambia nunca."
      },
      dialogue: [
        {
          speaker: "Tanya",
          target: "What about the cake? Weren't you going to bring it?",
          translation: "¿Y la torta? ¿No la ibas a traer?",
          pronunciation: "uat a-BAUT da keik? UE-rent yu GO-ing tu bring it?",
          literal: "¿Qué acerca de el pastel? ¿No estabas yendo a traerlo?",
          why: "“Weren't you going to...?” es el pasado de “be going to” para un plan visto desde antes: “¿no ibas a...?”. “What about...?” introduce el tema, como “¿y lo de...?”."
        },
        {
          speaker: "Alejandra",
          target: "Oh, it completely slipped my mind. I'm so sorry!",
          translation: "Ay, se me olvidó por completo. ¡Perdón!",
          pronunciation: "ou, it com-PLIT-li slipt mai maind. aim so SO-rri!",
          literal: "Oh, ello completamente resbaló mi mente. Yo-estoy tan lamentando.",
          why: "El inglés no tiene el “se me olvidó” sin culpa. Lo más parecido es “it slipped my mind” (se me fue de la mente) o el llano “I forgot”. Aquí “slip” hace de olvido inocente."
        },
        {
          speaker: "Tanya",
          target: "Don't worry, it's fine. And did you forget the keys too?",
          translation: "Tranquila, no importa. ¿Y también olvidaste las llaves?",
          pronunciation: "dont UO-rri, its fain. and did yu for-GET da kis tu?",
          literal: "No preocupes, ello-es bien. ¿Y hiciste tú olvidar las llaves también?",
          why: "“Forget” es transitivo directo, sin “of”: “forget the keys”. La pregunta usa “did you...?” con el verbo en forma base. “Don't worry, it's fine” es el “tranquila, no importa”."
        },
        {
          speaker: "Alejandra",
          target: "Ugh, yeah. I left my keys at home again. I'm such a mess.",
          translation: "Uf, sí. Dejé las llaves en la casa otra vez. Soy un desastre.",
          pronunciation: "ag, yea. ai left mai kis at joum a-GUEN. aim sach a mes",
          literal: "Uf, sí. Yo dejé mis llaves en casa otra vez. Yo-soy tal un desorden.",
          why: "Giro clave: cuando dices DÓNDE quedó, el inglés no usa “forget” sino “leave” — “I left my keys at home”, no “I forgot my keys at home”. “Such a mess” es “un desastre”."
        },
        {
          speaker: "Tanya",
          target: "Haha. Don't forget tomorrow's the real lunch, okay?",
          translation: "Jajaja. No olvides que mañana sí es la comida, ¿oíste?",
          pronunciation: "ja-ja. dont for-GET tu-MO-rrous da ril lanch, o-KEI?",
          literal: "Jaja. No olvides mañana-es el real almuerzo, ¿bien?",
          why: "“Don't forget” es el imperativo negativo con “don't”. Aquí no hace falta “to” porque sigue una cláusula (“tomorrow's...”). El “okay?” final hace de “¿oíste?”."
        },
        {
          speaker: "Alejandra",
          target: "No, this time I won't forget. I promise.",
          translation: "No, esta vez no se me olvida. Lo prometo.",
          pronunciation: "no, dis taim ai uont for-GET. ai PRO-mis",
          literal: "No, esta vez yo no-iré olvidar. Yo prometo.",
          why: "El inglés promete con el futuro “won't forget” (will not). No hay manera de calcar el “no se me olvida”; se dice llanamente “I won't forget”. “I promise” cierra igual que “lo prometo”."
        }
      ],
      vocabulary: [
        {
          term: "forget (no “of”)",
          explanation:
            "Olvidar, transitivo directo. No lleva “of” ni reflexivo: “I forgot the keys”, no “I forgot of the keys”.",
          literal: "olvidar",
          useWhen:
            "Para el olvido llano: “I forgot”, “don't forget the umbrella”.",
          avoidWhen:
            "Con “forget of” o “I forgot myself of”, calcos del reflexivo español.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I forgot", "don't forget", "forget something", "forgetful"],
          example: {
            target: "I forgot the umbrella.",
            translation: "Olvidé el paraguas."
          }
        },
        {
          term: "it slipped my mind",
          explanation:
            "Se me olvidó, sin culpa. Lo más cercano al “se me” inocente del español: se me fue de la mente.",
          literal: "se resbaló de mi mente",
          useWhen:
            "Para un olvido leve y disculpable: “sorry, it slipped my mind”.",
          avoidWhen:
            "Para un olvido grave; suena casual, casi una excusa amable.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["it slipped my mind", "I completely forgot", "it went out of my head", "my mind went blank"],
          example: {
            target: "Sorry, it slipped my mind.",
            translation: "Perdón, se me olvidó."
          }
        },
        {
          term: "leave (somewhere)",
          explanation:
            "Dejar algo en un sitio. Cuando dices DÓNDE quedó lo olvidado, el inglés cambia “forget” por “leave”.",
          literal: "dejar (en un lugar)",
          useWhen:
            "Al mencionar el lugar: “I left my phone at home”, “I left it on the bus”.",
          avoidWhen:
            "Con “I forgot my keys at home”; con lugar el inglés pide “leave”, no “forget”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I left it at home", "left behind", "leave it there", "I left my phone"],
          example: {
            target: "I left my keys at home.",
            translation: "Dejé las llaves en la casa."
          }
        },
        {
          term: "forget to (+ verb)",
          explanation:
            "Olvidar hacer algo. Para una acción pendiente, el inglés usa “forget TO” + verbo, no “forget of”.",
          literal: "olvidar (hacer)",
          useWhen:
            "Para algo que había que hacer: “I forgot to call”, “don't forget to lock up”.",
          avoidWhen:
            "Con “forget of calling” o “forget calling”; para lo pendiente va “forget to call”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["forget to", "don't forget to", "I forgot to call", "remember to"],
          example: {
            target: "I forgot to call her.",
            translation: "Se me olvidó llamarla."
          }
        },
        {
          term: "forgetful",
          explanation:
            "Olvidadizo — el adjetivo para quien olvida con facilidad. Más suave que “absent-minded”.",
          literal: "olvidadizo",
          useWhen:
            "Al describir a alguien de mala memoria: “I'm so forgetful lately”.",
          avoidWhen:
            "Para un olvido puntual; describe un rasgo permanente, no un desliz único.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["forgetful", "absent-minded", "scatterbrained", "bad memory"],
          example: {
            target: "I'm so forgetful lately.",
            translation: "Últimamente soy muy olvidadizo."
          }
        },
        {
          term: "okay? / right?",
          explanation:
            "El “¿oíste?” que remata la frase para confirmar que el otro sigue el hilo o está de acuerdo.",
          literal: "¿bien? / ¿cierto?",
          useWhen:
            "Al cerrar una frase buscando confirmación: “be there at six, okay?”.",
          avoidWhen:
            "En escritura formal; es marca del habla, no del texto cuidado.",
          register: "amistoso informal",
          region: "Inglés universal; “right?” y “yeah?” son variantes.",
          related: ["okay?", "right?", "yeah?", "got it?"],
          example: {
            target: "Don't be late, okay?",
            translation: "No llegues tarde, ¿oíste?"
          }
        },
        {
          term: "don't forget to",
          explanation:
            "Que no se te olvide — el recordatorio amable dirigido a otra persona, con “to” + verbo.",
          literal: "no olvides (hacer)",
          useWhen:
            "Al recordarle algo a alguien: “don't forget to bring the cake”.",
          avoidWhen:
            "Con “don't forget of bringing”; el recordatorio pide “to” + verbo.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["don't forget to", "make sure to", "remember to", "don't forget"],
          example: {
            target: "Don't forget to bring the cake.",
            translation: "Que no se te olvide traer la torta."
          }
        }
      ],
      note:
        "El inglés no tiene el “se me olvidó” que reparte la culpa. Para un desliz se dice llanamente “I forgot” o, más suave, “it slipped my mind”. Y hay una trampa que el español no marca: cuando dices DÓNDE quedó lo olvidado, el inglés cambia de verbo. Olvidas algo a secas con “forget” (“I forgot the keys”), pero si mencionas el lugar usas “leave”: “I left my keys at home”, nunca “I forgot my keys at home”. Además, “forget” no lleva “of”, y para una acción pendiente va “forget TO” + verbo.",
      culture: [
        {
          label: "El inglés no reparte la culpa",
          body:
            "El español tiene el “se me olvidó”, donde la cosa olvidada se vuelve el sujeto y el olvido simplemente le ocurre a uno, sin culpa. El inglés no tiene esa gramática. Lo más cercano es “it slipped my mind” (se me fue de la mente) o “it went out of my head”, pero en el día a día lo normal es el directo “I forgot”, que sí carga la responsabilidad sobre el hablante. Por eso el hispanohablante a veces busca un giro que no existe. Conviene aceptar que en inglés uno dice “I forgot” de frente, y suavizarlo, si acaso, con “sorry” o “it slipped my mind”."
        },
        {
          label: "Forget o leave: depende del lugar",
          body:
            "Esta es la trampa que más delata al hispanohablante. En español un solo “olvidar” sirve para todo: “olvidé las llaves” y “olvidé las llaves en la casa”. El inglés parte eso en dos. Si solo dices que las olvidaste, es “forget”: “I forgot my keys”. Pero en cuanto mencionas el lugar donde quedaron, cambia a “leave”: “I left my keys at home”, “I left my phone on the bus”. Decir “I forgot my keys at home” suena raro a un angloparlante. La regla práctica: hay lugar, va “leave”; no hay lugar, va “forget”."
        },
        {
          label: "“Forget to” para lo pendiente",
          body:
            "Cuando lo olvidado es una acción —algo que había que hacer— el inglés usa “forget to” + verbo: “I forgot to call”, “don't forget to lock the door”. El hispanohablante a veces calca el “de” del español (“se me olvidó DE llamar”) y produce “forget of calling”, que no existe, o duda entre “to” y “-ing”. Con “forget” lo pendiente siempre va con “to”: “forget to call”. Ojo con el contraste: “I forgot to buy milk” (no lo compré) frente a “I forgot buying milk” (lo compré pero no me acuerdo), un matiz que el español no marca y que confunde al principio."
        },
        {
          label: "Un solo “you”, calidez en las palabras",
          body:
            "El inglés no tiene tú costeño ni usted, así que toda la calidez con que Tanya perdona el olvido —“don't worry, it's fine”, “no worries at all”— vive en el vocabulario y el tono, no en el pronombre. Donde el costeño marca confianza con su tú rápido y las eses aspiradas, el angloparlante la marca bajando el registro léxico: “no biggie”, “it happens”, “don't sweat it”. Para el que viene del español, la lección es que la cortesía y la cercanía en inglés se ajustan cambiando de palabras y de entonación, nunca cambiando de forma de “you”, porque solo hay una."
        }
      ],
      pitfalls: [
        {
          mistake: "“It forgot to me.”",
          whyItFails:
            "Intenta calcar el “se me olvidó” sin culpa, que en inglés no existe. Hay que decirlo de frente o con la fórmula hecha “slip”.",
          sayInstead: "It slipped my mind. / I forgot."
        },
        {
          mistake: "“I forgot of my keys.”",
          whyItFails:
            "Mete un “of” calcando el reflexivo “olvidarse de”. En inglés “forget” es transitivo directo y no lleva “of”.",
          sayInstead: "I forgot my keys."
        },
        {
          mistake: "“I forgot my keys at home.”",
          whyItFails:
            "Al nombrar el lugar donde quedaron, el inglés pide “leave”, no “forget”. Con lugar mencionado, “forget” suena mal.",
          sayInstead: "I left my keys at home."
        },
        {
          mistake: "“Don't forget of calling her.”",
          whyItFails:
            "Calca el “de” español otra vez. Para una acción pendiente el inglés usa “forget to” + verbo, sin “of”.",
          sayInstead: "Don't forget to call her."
        }
      ],
      variations: [
        {
          form: "I forgot.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "El olvido llano, asumiendo la responsabilidad."
        },
        {
          form: "It slipped my mind.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Para suavizar un olvido leve y disculpable."
        },
        {
          form: "I left it at home.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Cuando mencionas el lugar donde quedó."
        },
        {
          form: "Don't forget.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al recordarle a alguien que no olvide algo."
        },
        {
          form: "Don't forget to bring it.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Recordatorio amable de una acción pendiente."
        }
      ],
      prompt: "Alejandra says “it completely slipped my mind.” ¿Por qué no dice “it forgot to me”?",
      choices: [
        "Porque el inglés no tiene el “se me olvidó” sin culpa, así que usa la fórmula hecha “slip my mind” o el directo “I forgot”.",
        "Porque “slip my mind” es mucho más formal que “forget” y por eso encaja mejor en una disculpa entre dos amigas cercanas.",
        "Porque “it forgot to me” significaría que la torta olvidó a Alejandra, cambiando quién recuerda y quién es recordado en la frase."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Alejandra dice “I left my keys at home.” ¿Por qué “left” y no “forgot”?",
          choices: [
            "Porque “leave” es mucho más formal que “forget”, y al hablar con una amiga conviene subir el registro de esa manera.",
            "Porque al mencionar el lugar donde quedaron las llaves, el inglés cambia “forget” por “leave”: “I left my keys at home”.",
            "Porque “forget” solo sirve para personas y no para objetos, de modo que con las llaves siempre habría que usar el verbo “leave”."
          ],
          answer: 1,
          tests: "leave vs forget con lugar"
        },
        {
          prompt: "¿Cómo se dice “se me olvidó llamarla” en inglés?",
          choices: [
            "“I forgot of calling her”, calcando el “de” del español y usando la forma en “-ing” del verbo que quedó pendiente.",
            "“I forgot calling her”, que en realidad significa que sí la llamó pero no lo recuerda, no que se le olvidó hacerlo.",
            "“I forgot to call her” — para una acción pendiente el inglés usa “forget to” + verbo, sin “of” y sin la forma en “-ing”."
          ],
          answer: 2,
          tests: "forget to + verbo"
        },
        {
          prompt: "¿Cuál es el calco típico que hay que evitar al decir “olvidé las llaves”?",
          choices: [
            "“I forgot my keys”, que en realidad es correcto y natural, sin “of” y sin mencionar ningún lugar donde quedaran.",
            "“I forgot of my keys”, que mete un “of” calcando el reflexivo “olvidarse de”, cuando “forget” es transitivo directo.",
            "“I forgot the keys”, que también es correcto y solo cambia “my” por “the”, sin ningún error de preposición de por medio."
          ],
          answer: 1,
          tests: "forget sin of"
        }
      ]
    }
  },
  {
    id: "waiting-for-your-turn-at-the-clinic",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "health-and-body",
    register: "formal",
    pathways: ["foundation"],
    verb: "esperar",
    review: "pending",
    es: {
      title: "Waiting your turn at the clinic",
      situation:
        "Alex arrives at an EPS clinic in Bogotá and asks the receptionist how long he has to wait to be seen. The receptionist asks him to wait a moment, estimates half an hour and hopes the line will not take longer. The whole scene rests on a single verb, esperar, which in Spanish covers three ideas English separates: waiting, hoping, and expecting or counting on something.",
      setting: {
        who: "The receptionist at an EPS clinic is polite, efficient and busy; Alex is a patient asking about the wait.",
        what: "Asking how long the wait is and being told to take a seat, all built on the one verb esperar.",
        when: "A busy morning at the clinic, the waiting room full.",
        where: "Bogotá, in the interior, where service Spanish leans on usted and a careful, courteous register.",
        why: "Because esperar is one verb for wait, hope and expect — three English verbs — and “espero que” pulls the subjunctive after it."
      },
      address: {
        form: "usted",
        who: "The receptionist and Alex use usted with each other — the default in Bogotá service encounters.",
        why: "In the interior, and especially in a clinic or office, usted is the courteous, slightly formal register between strangers. Bogotanos use usted widely, even among friends and family, far more than the coast.",
        ifYouSwitch:
          "Sliding into tú with a receptionist you have just met would sound overly familiar, even a little disrespectful in a formal setting. Usted keeps the right professional distance; the coast might use tú here, but Bogotá stays with usted."
      },
      dialogue: [
        {
          speaker: "Recepcionista",
          target: "Buenos días. Espere un momentico, ya lo atiendo.",
          translation: "Good morning. Wait just a moment, I'll be with you shortly.",
          pronunciation: "BWE-nos DEE-as. es-PE-re oon mo-men-TEE-ko, ya lo a-TYEN-do",
          literal: "Good days. Wait a little-moment, already you I-attend.",
          why: "“Espere” is the usted command of esperar in its wait sense. “Momentico” is the Colombian diminutive of momento — a little moment. “Ya lo atiendo” uses “ya” to mean shortly, right away."
        },
        {
          speaker: "Alex",
          target: "Claro. ¿Cuánto toca esperar para el turno?",
          translation: "Of course. How long is the wait for my turn?",
          pronunciation: "KLA-ro. KWAN-to TO-ka es-pe-RAR PA-ra el TOOR-no?",
          literal: "Clear. How-much it-falls to-wait for the turn?",
          why: "“Esperar” here is plainly to wait. “¿Cuánto toca...?” is a very Colombian way to ask what one has to do — “tocar” meaning to fall to someone as a duty. “El turno” is your place in line."
        },
        {
          speaker: "Recepcionista",
          target: "Como media hora. Espero que no se demore más.",
          translation: "About half an hour. I hope it won't take longer.",
          pronunciation: "KO-mo ME-dya O-ra. es-PE-ro ke no se de-MO-re mas",
          literal: "Like half hour. I-hope that not itself it-delays more.",
          why: "Now the same verb means hope: “espero que”. Crucially, “espero que” forces the subjunctive — “se demore”, not “se demora”. This is the switch from wait to hope, marked only by grammar."
        },
        {
          speaker: "Alex",
          target: "Uy, no esperaba tanta gente hoy.",
          translation: "Wow, I wasn't expecting this many people today.",
          pronunciation: "ooy, no es-pe-RA-ba TAN-ta HEN-te oy",
          literal: "Wow, not I-was-expecting so-much people today.",
          why: "The third sense: expect. “No esperaba” is the imperfect — I wasn't expecting. Same verb esperar, now meaning to anticipate or count on. Context alone tells wait, hope and expect apart."
        },
        {
          speaker: "Recepcionista",
          target: "Sí, hoy está lleno. Pero espere sentado, que la fila avanza.",
          translation: "Yes, it's full today. But take a seat — the line is moving.",
          pronunciation: "see, oy es-TA YE-no. PE-ro es-PE-re sen-TA-do, ke la FEE-la a-VAN-sa",
          literal: "Yes, today it-is full. But wait seated, that the line advances.",
          why: "“Espere sentado” literally means wait sitting down — take a seat. It has a wry double life: said of something unlikely, it means don't hold your breath. Here it is literal and kind. “La fila” is the line."
        },
        {
          speaker: "Alex",
          target: "Bueno, eso espero. Muchas gracias.",
          translation: "Alright, I hope so. Thank you very much.",
          pronunciation: "BWE-no, E-so es-PE-ro. MOO-chas GRA-syas",
          literal: "Good, that I-hope. Many thanks.",
          why: "“Eso espero” is the set phrase for I hope so — literally that I-hope, with the object fronted. Not “espero sí”, which learners reach for. A neat closing that reuses esperar in its hope sense."
        }
      ],
      vocabulary: [
        {
          term: "esperar (a alguien/algo)",
          explanation:
            "To wait. For people it takes the personal “a”; for things, no preposition. Never “por” for plain waiting.",
          literal: "to-wait (for someone/something)",
          useWhen:
            "Waiting for anything: “espero el bus”, “te espero”, “espero a Ana”.",
          avoidWhen:
            "Adding “por” to mean wait: “espero por el bus” is an anglicism.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["esperar el bus", "esperar a alguien", "te espero", "espérame"],
          example: {
            target: "Te espero afuera.",
            translation: "I'll wait for you outside."
          }
        },
        {
          term: "espere un momentico",
          explanation:
            "“Wait just a moment” — the courteous service filler, softened by the beloved Colombian diminutive.",
          literal: "wait a little-moment",
          useWhen:
            "Asking someone to hold on politely: on the phone, at a counter.",
          avoidWhen:
            "Where you need a firm instruction; the diminutive makes it gentle, not urgent.",
          register: "polite service",
          region: "Very Colombian; “momentico” is a national trademark.",
          related: ["un momentico", "un segundo", "ya mismo", "deme un momentico"],
          example: {
            target: "Espéreme un momentico, por favor.",
            translation: "Wait for me just a moment, please."
          }
        },
        {
          term: "espero que + subjuntivo",
          explanation:
            "“I hope that…”. Esperar in its hope sense forces the subjunctive in the clause that follows.",
          literal: "I-hope that + subjunctive",
          useWhen:
            "Expressing a hope about something not yet settled: “espero que venga”.",
          avoidWhen:
            "With the indicative: “espero que viene” is a classic error; use “venga”.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["espero que sí", "espero que no", "ojalá", "esperemos que"],
          example: {
            target: "Espero que te mejores.",
            translation: "I hope you get better."
          }
        },
        {
          term: "esperar (= expect)",
          explanation:
            "To expect or anticipate — counting on something, often in the imperfect “esperaba” for what you assumed.",
          literal: "to-expect",
          useWhen:
            "Anticipating something: “no esperaba eso”, “esperamos buenos resultados”.",
          avoidWhen:
            "Confusing it with hope; expect is about likelihood, not desire.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["no esperaba", "era de esperar", "esperar un bebé", "como era de esperar"],
          example: {
            target: "No esperaba verte aquí.",
            translation: "I wasn't expecting to see you here."
          }
        },
        {
          term: "eso espero / espero que sí",
          explanation:
            "The set phrases for “I hope so”. Note the fronted “eso” — not a calque of English word order.",
          literal: "that I-hope / I-hope that yes",
          useWhen:
            "Answering with a hope: “—¿Vendrá? —Eso espero.”",
          avoidWhen:
            "Saying “espero sí”, which is not idiomatic; use “eso espero” or “espero que sí”.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["eso espero", "espero que sí", "espero que no", "ojalá que sí"],
          example: {
            target: "—¿Alcanzamos? —Eso espero.",
            translation: "—Will we make it? —I hope so."
          }
        },
        {
          term: "el turno / la fila",
          explanation:
            "Your turn in line, and the line itself — the vocabulary of every clinic, bank and office.",
          literal: "the turn / the line",
          useWhen:
            "Talking about lines: “pedir el turno”, “hacer la fila”, “guardar el puesto”.",
          avoidWhen:
            "Using “línea” for people waiting; that is a phone line, not a line of people.",
          register: "neutral",
          region: "General Colombian; “hacer fila” and “hacer cola” both occur.",
          related: ["el turno", "hacer fila", "el puesto", "la cola"],
          example: {
            target: "Me toca guardar la fila.",
            translation: "It's my job to hold our place in line."
          }
        },
        {
          term: "ahorita / ya voy",
          explanation:
            "The elastic “in a bit” and “I'm coming” — reassurances whose timing is famously flexible.",
          literal: "right-now-ish / already I-go",
          useWhen:
            "Softening a wait: “ahorita lo atiendo”, “ya voy”.",
          avoidWhen:
            "Taking them literally; “ahorita” can mean anything from now to much later.",
          register: "friendly informal",
          region: "Very Colombian; “ahorita” is elastic across the Andes.",
          related: ["ahorita", "ya voy", "ya mismo", "en un momentico"],
          example: {
            target: "Ahorita la atiendo, siga sentada.",
            translation: "I'll help you shortly, stay seated."
          }
        }
      ],
      note:
        "Esperar is one Spanish verb doing three English jobs: wait, hope and expect. Context sorts them out. As wait, it takes a direct object or personal “a”, never “por”: “espero el bus”, “espero a Ana”. As hope, it triggers the subjunctive after “que”: “espero que venga”, not “viene”. As expect, it is about likelihood: “no esperaba tanta gente”. And “I hope so” is the fronted “eso espero”, not “espero sí”. Learning which of the three you mean — and which grammar it drags along — is the whole task here.",
      culture: [
        {
          label: "One verb for wait, hope and expect",
          body:
            "English keeps three verbs — wait, hope, expect — where Spanish uses one, esperar. This is not vagueness; context and grammar disambiguate cleanly. Wait takes a direct object (“espero el bus”); hope takes “que” plus a subjunctive (“espero que venga”); expect is about probability (“no esperaba tanta gente”). The overlap has a certain poetry: to wait for something and to hope for it are, in Spanish, the same gesture of the mind turned toward what has not yet happened. English speakers often over-think which one to use; the trick is to let context carry it, exactly as Colombians do, and to watch the grammar that follows."
        },
        {
          label: "“Espero que” pulls the subjunctive",
          body:
            "Hope, wishes and desires open the door to the subjunctive in Spanish, and “espero que” is the gateway drug for learners. “Espero que venga”, “espero que te mejores”, “espero que salga bien” — the verb after “que” shifts into the subjunctive mood because a hope is, by nature, not yet real. Saying “espero que viene” is one of the most common learner errors, and it marks you instantly. If you internalise just one subjunctive trigger early, make it “espero que”; from there the same logic spreads to “ojalá que”, “quiero que” and a whole family of wishing expressions."
        },
        {
          label: "“Ahorita”: the most elastic word in Colombia",
          body:
            "“Ahorita” is the diminutive of “ahora” (now), and you might expect it to mean even sooner. It does not. Depending on tone and context it can mean in a minute, in a while, later today, or — said with a certain resignation — probably never. “Ahorita lo atiendo” from a busy receptionist could be two minutes or twenty. Related reassurances behave the same way: “ya voy” (I'm coming) rarely means this instant. None of this is dishonesty; it is a cultural elasticity about time that outsiders learn to read. When you truly need a firm time, ask for one specifically."
        },
        {
          label: "The EPS waiting room and “espere sentado”",
          body:
            "Healthcare in Colombia runs largely through EPS, the insurers that manage access to care, and their waiting rooms are a national experience: numbered turns, long lines, and the patient art of waiting. “Espere sentado” — wait sitting down — is literally what you do there. But the phrase has a wry second life: told to expect something unlikely, “espéralo sentado” means don't hold your breath, you'll be waiting a while. The receptionist's kindly literal use and the sarcastic idiom live side by side, a small lesson in how the same words about waiting can comfort or gently mock, depending entirely on the tone."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “espero por el bus” for “I'm waiting for the bus”",
          whyItFails:
            "The “por” is an anglicism from “wait FOR”. In Spanish esperar takes a direct object with no preposition — the “for” is already inside the verb.",
          sayInstead: "Espero el bus."
        },
        {
          mistake: "Saying “espero que viene pronto” for “I hope he comes soon”",
          whyItFails:
            "“Espero que” in its hope sense demands the subjunctive. The indicative “viene” is wrong here; it must shift to “venga”.",
          sayInstead: "Espero que venga pronto."
        },
        {
          mistake: "Saying “espero mi amiga” for “I'm waiting for my friend”",
          whyItFails:
            "When you wait for a person, Spanish needs the personal “a”. Leaving it out treats the friend like an object, not a person.",
          sayInstead: "Espero a mi amiga."
        },
        {
          mistake: "Saying “espero sí” for “I hope so”",
          whyItFails:
            "It is a word-for-word calque of English. The idiom fronts the object: “eso espero”, or you say “espero que sí”. “Espero sí” is not natural.",
          sayInstead: "Eso espero. / Espero que sí."
        }
      ],
      variations: [
        {
          form: "Espere un momentico.",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "Politely asking someone to hold on, in usted."
        },
        {
          form: "Espérame aquí.",
          register: "friendly informal",
          region: "Tú regions / general",
          whenToUse: "Telling a friend to wait for you, in tú."
        },
        {
          form: "Esperá un segundo.",
          register: "friendly informal",
          region: "Medellín / Cali / vos regions",
          whenToUse: "Asking someone to wait a second, in vos."
        },
        {
          form: "Espero que sí.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Answering that you hope so."
        },
        {
          form: "¿Me espera un momento?",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "Politely asking someone to wait for you, in usted."
        }
      ],
      prompt: "The receptionist says “espero que no se demore más.” Why is it “se demore”, not “se demora”?",
      choices: [
        "Because “espero que” in its hope sense triggers the subjunctive, so the following verb shifts from “demora” to “demore”.",
        "Because “demorarse” is an irregular verb that only ever appears in the subjunctive form regardless of what comes before it.",
        "Because the receptionist is giving a polite command to the line, and Colombian commands always take that particular verb ending."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Alex says “no esperaba tanta gente hoy.” Which sense of esperar is this?",
          choices: [
            "Expect — “no esperaba” means he wasn't anticipating this many people; esperar here is about what he assumed would happen.",
            "Wait — he is saying he had not waited for this many people yet today, describing the length of the line he stood in.",
            "Hope — he is expressing a wish that there had not been so many people, framing the crowd as something he was hoping against."
          ],
          answer: 0,
          tests: "esperar as expect"
        },
        {
          prompt: "How do you say “I hope he comes soon” correctly?",
          choices: [
            "“Espero que viene pronto”, keeping the indicative “viene” after “espero que” just as you would in a plain statement of fact.",
            "“Espero que venga pronto” — the hope sense of “espero que” pulls the subjunctive, so “viene” becomes “venga” in the clause.",
            "“Espero por que venga pronto”, adding a “por” before “que” to translate the English “for” that goes with hoping for something."
          ],
          answer: 1,
          tests: "espero que + subjunctive"
        },
        {
          prompt: "Which is correct for “I'm waiting for my friend”?",
          choices: [
            "“Espero por mi amiga”, using “por” to render the English “for” that follows the verb wait when you wait for a person.",
            "“Espero mi amiga”, treating the friend as a plain direct object with no preposition, exactly as you would wait for a bus.",
            "“Espero a mi amiga” — waiting for a person takes the personal “a”, and esperar never uses “por” to mean plain waiting."
          ],
          answer: 2,
          tests: "esperar a with people, not por"
        }
      ]
    },
    en: {
      title: "Esperar el turno en la clínica",
      situation:
        "Alejandra llega a una clínica sin cita en Houston y le pregunta a la recepcionista cuánto le toca esperar para que la atiendan. La recepcionista la hace esperar un momento, calcula media hora y confía en que la fila no se demore más. La escena enseña algo que al hispanohablante lo enreda: el español tiene un solo esperar, pero el inglés lo parte en tres verbos —wait, hope y expect— y además “wait” exige “for” antes de la persona o la cosa.",
      setting: {
        who: "La recepcionista de una walk-in clinic es amable y eficiente; Alejandra es la paciente que pregunta por la espera.",
        what: "Preguntar cuánto dura la espera y que le digan que tome asiento, con los tres verbos que el español junta en esperar.",
        when: "Una mañana concurrida en la clínica, la sala de espera llena.",
        where: "Houston, donde el inglés separa wait, hope y expect y pide “for” tras “wait”.",
        why: "Porque el español esperar se vuelve tres verbos en inglés —wait, hope, expect— y “wait” exige “for” antes de su objeto."
      },
      address: {
        form: "mixed",
        who: "La recepcionista y Alejandra se tratan con “you” y un tono cortés, el registro normal de un servicio.",
        why: "El inglés no tiene usted: un solo “you” sirve para el trato formal y el cercano. La cortesía de un mostrador la dan “please”, “could you” y el tono, no un pronombre aparte como el usted bogotano.",
        ifYouSwitch:
          "No hay un pronombre formal al que pasarse. Para sonar más respetuosa, Alejandra sube el registro con “excuse me”, “would it be possible”, no cambiando de “you”, porque en inglés solo existe uno."
      },
      dialogue: [
        {
          speaker: "Receptionist",
          target: "Good morning. One moment, please — I'll be right with you.",
          translation: "Buenos días. Un momento, por favor, ya la atiendo.",
          pronunciation: "gud MOR-ning. uan MO-ment, plis — ail bi rait uiz yu",
          literal: "Buena mañana. Un momento, por favor — yo estaré justo con usted.",
          why: "El inglés no manda “espere” como imperativo suelto; suaviza con “one moment, please” o “please hold on”. “I'll be right with you” es el “ya la atiendo”, con “right” en el sentido de enseguida."
        },
        {
          speaker: "Alejandra",
          target: "Of course. How long is the wait to be seen?",
          translation: "Claro. ¿Cuánto toca esperar para que me atiendan?",
          pronunciation: "of kors. jau long is da ueit tu bi sin?",
          literal: "Por supuesto. ¿Qué tan largo es la espera para ser vista?",
          why: "Aquí “wait” aparece como sustantivo: “the wait”, la espera. Como verbo sería “to wait”. “To be seen” es la fórmula de la clínica para “que la atiendan”, en pasiva."
        },
        {
          speaker: "Receptionist",
          target: "About half an hour. I hope it won't take any longer.",
          translation: "Como media hora. Espero que no se demore más.",
          pronunciation: "a-BAUT jaf an AU-er. ai joup it uont teik E-ni LON-guer",
          literal: "Acerca de media hora. Yo espero ello no tomará algún más largo.",
          why: "Aquí el español “espero que” se vuelve “I hope”. El inglés separa: “hope” es tener esperanza; “wait” es aguardar. Tras “hope” no hay subjuntivo, va el futuro llano “won't take”."
        },
        {
          speaker: "Alejandra",
          target: "Wow, I wasn't expecting this many people today.",
          translation: "Uy, no esperaba tanta gente hoy.",
          pronunciation: "uau, ai UO-sent eks-PEK-ting dis ME-ni PI-pol tu-DEI",
          literal: "Guau, yo no-estaba esperando esta mucha gente hoy.",
          why: "Tercer sentido: “expect”, suponer o contar con algo. El español “esperaba” aquí no es “hope” ni “wait”, sino “expect”: “I wasn't expecting”. El inglés obliga a elegir el verbo correcto."
        },
        {
          speaker: "Receptionist",
          target: "Yes, it's full today. But hang tight — the line's moving.",
          translation: "Sí, hoy está lleno. Pero espere sentada, que la fila avanza.",
          pronunciation: "yes, its ful tu-DEI. bat jang tait — da lains MU-ving",
          literal: "Sí, ello-está lleno hoy. Pero cuelga apretado — la línea-está moviéndose.",
          why: "El inglés no dice “wait seated”; usa modismos como “hang tight” o “sit tight” para “espere sentada”. “The line's moving” es “la fila avanza”; “line” es la fila (en EE. UU.), “queue” en el inglés británico."
        },
        {
          speaker: "Alejandra",
          target: "Alright, I hope so. Thank you very much.",
          translation: "Bueno, eso espero. Muchas gracias.",
          pronunciation: "ol-RAIT, ai joup so. zank yu VE-ri mach",
          literal: "Muy bien, yo espero así. Gracias usted muy mucho.",
          why: "“I hope so” es el “eso espero”. Ojo: no se dice “I hope yes”, un calco del “espero que sí”. La partícula “so” sustituye a toda la idea ya dicha, como el “eso”."
        }
      ],
      vocabulary: [
        {
          term: "wait (for)",
          explanation:
            "Esperar en el sentido de aguardar. Ojo: lleva “for” antes de la persona o cosa — “wait for the bus”.",
          literal: "esperar (por)",
          useWhen:
            "Al aguardar algo o a alguien: “wait for me”, “I'm waiting for the bus”.",
          avoidWhen:
            "Sin “for” ante el objeto: “wait me”, “wait the bus” están mal.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["wait for", "wait for me", "the wait", "wait a minute"],
          example: {
            target: "I'll wait for you outside.",
            translation: "Te espero afuera."
          }
        },
        {
          term: "hope",
          explanation:
            "Esperar en el sentido de tener esperanza. Verbo aparte de “wait”; tras él no hay subjuntivo.",
          literal: "tener esperanza",
          useWhen:
            "Al expresar un deseo: “I hope you get better”, “I hope so”.",
          avoidWhen:
            "Confundiéndolo con “wait”; “hope” es desear, no aguardar.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I hope", "I hope so", "hopefully", "let's hope"],
          example: {
            target: "I hope you get better.",
            translation: "Espero que te mejores."
          }
        },
        {
          term: "expect",
          explanation:
            "Esperar en el sentido de suponer o contar con algo. Es cuestión de probabilidad, no de deseo.",
          literal: "esperar (suponer)",
          useWhen:
            "Al anticipar algo: “I wasn't expecting that”, “we expect good results”.",
          avoidWhen:
            "Para un deseo; eso es “hope”. “Expect” es lo que crees que pasará.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I expect", "I wasn't expecting", "as expected", "expecting a baby"],
          example: {
            target: "I wasn't expecting to see you here.",
            translation: "No esperaba verte aquí."
          }
        },
        {
          term: "I hope so",
          explanation:
            "Eso espero. El inglés remata con “so”, que resume la idea ya dicha; no se dice “I hope yes”.",
          literal: "lo espero así",
          useWhen:
            "Al responder con esperanza: “—Will it work? —I hope so.”",
          avoidWhen:
            "Con “I hope yes”, calco del “espero que sí”; lo correcto es “I hope so”.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["I hope so", "I hope not", "I think so", "I guess so"],
          example: {
            target: "—Will we make it? —I hope so.",
            translation: "—¿Alcanzamos? —Eso espero."
          }
        },
        {
          term: "hang tight / sit tight",
          explanation:
            "Espere sentada — modismos para pedir que alguien aguarde con paciencia donde está.",
          literal: "cuélguese apretado / siéntese apretado",
          useWhen:
            "Al pedir que alguien espere tranquilo: “hang tight, we're almost done”.",
          avoidWhen:
            "En registro muy formal; son coloquiales, no de documento.",
          register: "amistoso informal",
          region: "Inglés universal; muy común en EE. UU..",
          related: ["hang tight", "sit tight", "hold on", "bear with me"],
          example: {
            target: "Hang tight, the line's moving.",
            translation: "Espere sentada, que la fila avanza."
          }
        },
        {
          term: "line",
          explanation:
            "La fila. En Norteamérica “line” (“wait in line”); en el inglés británico “queue” (“in the queue”).",
          literal: "fila / cola",
          useWhen:
            "Al hablar de la fila: “wait in line”, “the line is long”.",
          avoidWhen:
            "Con “row” para una fila de personas; “row” es una hilera de asientos.",
          register: "neutro",
          region: "“Line” en EE. UU./Estados Unidos; “queue” en Reino Unido.",
          related: ["in line", "the line", "wait in line", "wait your turn"],
          example: {
            target: "The line is moving fast.",
            translation: "La fila avanza rápido."
          }
        },
        {
          term: "in a bit / I'll be right there",
          explanation:
            "El “ahorita / ya voy” elástico. El inglés también estira el tiempo con “in a bit”, “in a sec”.",
          literal: "en un ratico / ya estaré ahí",
          useWhen:
            "Al suavizar una espera: “I'll be right there”, “give me a sec”.",
          avoidWhen:
            "Cuando de verdad se necesita una hora exacta; conviene pedirla claro.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["in a bit", "in a sec", "I'll be right there", "give me a minute"],
          example: {
            target: "I'll be right with you.",
            translation: "Ya la atiendo, un momentico."
          }
        }
      ],
      note:
        "El español esperar se reparte en inglés entre tres verbos, y elegir mal delata al hablante. “Wait” es aguardar, y pide “for” antes del objeto: “I'm waiting for the bus”, nunca “waiting the bus”. “Hope” es tener esperanza, y tras él va el futuro o el presente llano, sin subjuntivo: “I hope it works”. “Expect” es suponer o contar con algo: “I wasn't expecting that”. Y “eso espero” es “I hope so”, no “I hope yes”. Saber cuál de los tres quieres decir es toda la tarea.",
      culture: [
        {
          label: "Un esperar español, tres verbos en inglés",
          body:
            "El español dice esperar para tres ideas que el inglés mantiene separadas: “wait” (aguardar), “hope” (tener esperanza) y “expect” (suponer). Donde el hispanohablante usa un solo verbo y deja que el contexto decida, el inglés obliga a elegir de entrada. “Espero el bus” es “I'm waiting for the bus”; “espero que venga” es “I hope he comes”; “no esperaba eso” es “I wasn't expecting that”. Elegir el verbo equivocado —“I hope the bus” por “espero el bus”— produce frases que confunden. La clave es preguntarse, antes de hablar, cuál de las tres ideas se quiere: aguardar, desear o suponer."
        },
        {
          label: "“Wait” siempre pide “for”",
          body:
            "El error más frecuente del hispanohablante con “wait” es olvidar el “for”. En español el “para/a quién” va dentro del verbo: “te espero”, “espero el bus”. En inglés hay que decirlo aparte: “wait for you”, “wait for the bus”. “I'm waiting my friend” suena mal; lo correcto es “I'm waiting for my friend”. La excepción es cuando “wait” va solo, sin objeto: “wait here”, “please wait”, ahí no hace falta “for”. Pero en cuanto aparece a quién o qué se espera, el “for” es obligatorio. Conviene memorizar “wait for” como una sola pieza para no dejarlo caer."
        },
        {
          label: "“Hope” no lleva subjuntivo",
          body:
            "En español, “espero que” arrastra el subjuntivo: “espero que venga”. El hispanohablante que traduce literalmente busca ese modo en inglés y no lo encuentra, porque el inglés apenas lo usa. Tras “hope” va el presente o el futuro llanos: “I hope he comes”, “I hope it works”, “I hope it won't take long”. Incluso es normal el presente simple con valor de futuro: “I hope he comes tomorrow”. No hay que forzar ninguna forma especial del verbo. Soltar la costumbre del subjuntivo es, para el que viene del español, uno de los alivios de aprender inglés: donde el español pide un modo entero, el inglés se conforma con el tiempo normal."
        },
        {
          label: "Un solo “you” en el mostrador",
          body:
            "En la clínica bogotana la recepcionista y el paciente se tratan de usted; en inglés no existe esa opción, hay un solo “you” para el jefe y para el amigo. Toda la cortesía del mostrador vive entonces en otras palabras: “please”, “could you”, “would it be possible”, “thank you so much”, y en el tono. El hispanohablante a veces siente que el inglés le queda “frío” por no tener usted, pero el respeto está ahí, repartido en fórmulas y en entonación. Para pedir con cortesía no se cambia de pronombre, se cambia de rodeo: “give me” se vuelve “could I get”, y eso basta."
        }
      ],
      pitfalls: [
        {
          mistake: "“I'm waiting my friend.”",
          whyItFails:
            "Calca “espero a mi amiga” sin el “for”. En inglés “wait” pide “for” antes de la persona o cosa que se espera.",
          sayInstead: "I'm waiting for my friend."
        },
        {
          mistake: "“I hope you here.”",
          whyItFails:
            "Confunde “hope” (tener esperanza) con “wait” (aguardar). Para decir que aguardas a alguien se usa “wait for”.",
          sayInstead: "I'll wait for you here."
        },
        {
          mistake: "“I hope yes.”",
          whyItFails:
            "Es un calco de “espero que sí”. El inglés remata con “so”, que resume lo ya dicho: “I hope so”.",
          sayInstead: "I hope so."
        },
        {
          mistake: "“I'm expecting the bus.”",
          whyItFails:
            "Usa “expect” (suponer) donde va “wait” (aguardar). Para aguardar el bus en la parada se dice “wait for the bus”.",
          sayInstead: "I'm waiting for the bus."
        }
      ],
      variations: [
        {
          form: "One moment, please.",
          register: "cortés de servicio",
          region: "Inglés universal",
          whenToUse: "Al pedir con cortesía que alguien aguarde."
        },
        {
          form: "Wait for me here.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al pedirle a alguien que te espere."
        },
        {
          form: "Hang on a second.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "Al pedir que aguarden un segundo, en tono casual."
        },
        {
          form: "I hope so.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Al responder que eso esperas."
        },
        {
          form: "Could you wait a moment?",
          register: "cortés formal",
          region: "Inglés universal",
          whenToUse: "Al pedir cortésmente que alguien espere."
        }
      ],
      prompt: "La recepcionista dice “I hope it won't take longer.” ¿Qué sentido de esperar es este?",
      choices: [
        "Hope, tener esperanza — el inglés usa “hope”, no “wait”, para el deseo de que la espera no se alargue más de la cuenta.",
        "Wait, aguardar — está diciendo que ella misma va a esperar junto al paciente hasta que por fin lo llamen a consulta.",
        "Expect, suponer — está calculando con seguridad el tiempo exacto que falta, como un dato de probabilidad y no un deseo."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Alejandra dice “I wasn't expecting this many people.” ¿Qué sentido de esperar es?",
          choices: [
            "Expect, suponer — “wasn't expecting” dice que no anticipaba tanta gente; es lo que ella creía que iba a encontrar.",
            "Wait, aguardar — cuenta que todavía no había esperado a tanta gente ese día, describiendo lo larga que era la fila.",
            "Hope, desear — expresa el deseo de que no hubiera tanta gente, presentando la multitud como algo que ella no quería."
          ],
          answer: 0,
          tests: "expect como sentido"
        },
        {
          prompt: "¿Cómo se dice “espero que venga pronto” en inglés, sin calcar el subjuntivo?",
          choices: [
            "“I hope that he comes soon” funciona, pero conviene primero notar que el inglés no pide ninguna forma especial del verbo tras “hope”.",
            "“I hope he comes soon” — tras “hope” va el presente o el futuro llanos; el inglés no arrastra el subjuntivo que pide el español.",
            "“I hope he come soon”, quitándole la “s” a “comes” para imitar el subjuntivo español, que en realidad el inglés no marca así."
          ],
          answer: 1,
          tests: "hope sin subjuntivo"
        },
        {
          prompt: "¿Cuál es correcto para “espero a mi amiga”?",
          choices: [
            "“I'm hoping my friend”, usando “hope” para la idea de aguardar a alguien, como si esperar a una persona fuera tener esperanza.",
            "“I'm waiting my friend”, con “wait” pero sin el “for” que el inglés exige antes de la persona o cosa que se espera.",
            "“I'm waiting for my friend” — “wait” pide “for” antes de la persona, y es el verbo correcto para aguardar a alguien."
          ],
          answer: 2,
          tests: "wait for con personas"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/18-foundation-memory-and-waiting.js");
