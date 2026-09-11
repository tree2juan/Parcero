/*
 * Lesson block: extension / precision and concession (grammar, not verbs).
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
 * The three structures here -- relative-advanced, conjecture and concession --
 * close measured holes in the corpus: zero instances of cuyo and almost no el
 * cual; four future perfects, none of them conjectural; and concession never
 * taught, with aunque used without its mood contrast. The settings sit in
 * Tunja, Pasto and Popayán -- three cities where a formal or academic register
 * is genuinely at home -- rather than the usual Bogotá and Medellín. The two
 * directions mirror: same number of dialogue turns, vocabulary entries, culture
 * notes, pitfalls, variations and practice questions, with the taught pattern
 * actually spoken.
 */
lessons.push(
  {
    id: "relative-clauses-in-a-tunja-archive",
    level: "Extending · Academic writing",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "study-and-academia",
    register: "formal",
    pathways: ["extension", "collegiate-academic"],
    structure: "relative-advanced",
    review: "pending",
    es: {
      title: "The file whose author signed in 1789",
      situation:
        "Imagine yourself in Tunja, the old university city of Boyacá, inside the Regional Historical Archive. You accompany Valeria, a history student, as she consults a colonial file and don Hernando, the archivist, guides her with the ceremonious treatment that is the norm there. Together they specify which document they mean, whose author, whose pages, and which source each citation rests on, in the careful Spanish of writing.",
      setting: {
        who: "Don Hernando is the archivist at Tunja's regional historical archive, courteous and exact in the formal register the city is known for. Valeria is a history undergraduate a few months into handling colonial documents and the careful written Spanish they demand.",
        what: "A research consultation built on relative clauses: pinning down which file they mean, whose author signed it, whose pages have faded, and which source a citation actually rests on.",
        when: "A quiet weekday morning in the reading room, the slow hours when the archive is open only to registered researchers.",
        where: "Tunja, the colonial university city high in the Boyacá highlands, inside the regional historical archive.",
        why: "Precise relative clauses -- cuyo, el cual, lo cual -- are the joinery of written and academic Spanish, and the corpus never teaches them. Get them right and you can read a statute, a scholarly article or an archive."
      },
      address: {
        form: "usted",
        who: "Don Hernando and Valeria use usted throughout, reinforced with titles like don and señorita. It is the default courtesy between an archivist and a student.",
        why: "Boyacá's highland cities keep a famously formal, courteous register where much of Colombia would relax into tú. Between a senior archivist and a young researcher, usted is simply respect; tú would sound abrupt.",
        ifYouSwitch:
          "If Valeria slipped into tú, don Hernando would not take offense, but it would jar against the ceremony of the room, like resting your elbows on a centuries-old manuscript. Usted keeps the distance the place expects."
      },
      dialogue: [
        {
          speaker: "Don Hernando",
          target: "Mire, señorita: este es el expediente cuyo autor firmó en 1789. Fíjese en la caligrafía.",
          translation: "Look, miss: this is the file whose author signed it in 1789. Notice the handwriting.",
          pronunciation: "MI-re, se-ño-RI-ta: EH-te es el eks-pe-DYEN-te KU-yo au-TOR fir-MÓ en mil se-te-SYEN-tos o-CHEN-ta i NWE-ve",
          literal: "Look, miss: this is the file whose author signed in 1789. Notice-yourself on the handwriting.",
          why: "The key word is “cuyo”, whose. It agrees not with the owner but with the thing owned -- here “autor”, masculine singular, so “cuyo autor”. Think of it as an adjective on the following noun, never on the possessor."
        },
        {
          speaker: "Valeria",
          target: "Gracias. ¿Y el legajo del cual me habló usted ayer, el de la fundación de la ciudad?",
          translation: "Thank you. And the bundle you told me about yesterday, the one on the city's founding?",
          pronunciation: "GRA-syas. i el le-GA-jo del KWAL me a-BLÓ us-TED a-YER, el de la fun-da-SYÓN de la syu-DÁD",
          literal: "Thanks. And the bundle of-the which to-me spoke you yesterday, the of the founding of the city?",
          why: "After a preposition, careful speech trades bare “que” for “el cual / la cual”: “del cual” = of which. It marks a formal register; on the street you would simply hear “del que”."
        },
        {
          speaker: "Don Hernando",
          target: "Aquí lo tiene. Es el documento sobre el cual se apoyó toda la investigación posterior.",
          translation: "Here you are. It's the document on which all the later research was based.",
          pronunciation: "a-KÍ lo TYE-ne. es el do-ku-MEN-to SO-bre el KWAL se a-po-YÓ TO-da la in-ves-ti-ga-SYÓN pos-te-RYOR",
          literal: "Here it you-have. It-is the document on the which itself leaned all the research later.",
          why: "“Sobre el cual” = on which. “El cual” is preferred over “que” after the longer prepositions -- sobre, bajo, tras, mediante -- where “que” alone would sound bare. It agrees with “documento”."
        },
        {
          speaker: "Valeria",
          target: "Encontré unas cartas cuyas páginas están casi ilegibles, lo cual complica la transcripción.",
          translation: "I found some letters whose pages are almost illegible, which complicates the transcription.",
          pronunciation: "en-kon-TRÉ U-nas KAR-tas KU-yas PÁ-ji-nas es-TÁN KA-si i-le-JI-bles, lo KWAL kom-PLI-ka la trans-krip-SYÓN",
          literal: "I-found some letters whose pages are almost illegible, which-thing complicates the transcription.",
          why: "Two moves at once. “Cuyas” agrees with “páginas”, feminine plural, the thing owned, not with the letters that own them. And “lo cual” comments on the whole preceding idea -- which fact -- never on a single noun."
        },
        {
          speaker: "Don Hernando",
          target: "Es normal. Los pergaminos, cuyos bordes se deterioran, exigen un manejo muy cuidadoso.",
          translation: "That's normal. The parchments, whose edges decay, demand very careful handling.",
          pronunciation: "es nor-MÁL. los per-GA-mi-nos, KU-yos BOR-des se de-te-RYO-ran, ek-SI-jen un ma-NE-jo muy kwi-da-DO-so",
          literal: "It-is normal. The parchments, whose edges themselves decay, demand a handling very careful.",
          why: "“Cuyos” now agrees with “bordes”, masculine plural. The whole lesson of cuyo is this: look at the noun straight after it, never at the owner. English “whose” never changes; Spanish cuyo has four forms."
        },
        {
          speaker: "Valeria",
          target: "Entonces citaré la fuente en la cual aparece la fecha exacta, que es lo que necesito.",
          translation: "Then I'll cite the source in which the exact date appears, which is what I need.",
          pronunciation: "en-TON-ses si-ta-RÉ la FWEN-te en la KWAL a-pa-RE-se la FE-cha ek-SAK-ta, ke es lo ke ne-se-SI-to",
          literal: "Then I-will-cite the source in the which appears the date exact, that is the-thing that I-need.",
          why: "“En la cual” = in which, formal after the preposition. Then “lo que” = what, the thing that, pointing at a whole idea rather than a named noun. In speech nearly all of this collapses back into plain “que”."
        }
      ],
      vocabulary: [
        {
          term: "cuyo / cuya / cuyos / cuyas",
          explanation:
            "The relative possessive: whose. Unlike English, it agrees in gender and number with the thing owned, which follows it, not with the owner. Four forms, chosen by the next noun.",
          literal: "whose",
          useWhen:
            "Joining an owner to the thing owned in writing or careful speech: “el autor cuyo libro leímos”, “la casa cuyas ventanas”.",
          avoidWhen:
            "You are asking a question. “Whose is this?” is “¿De quién es esto?” -- cuyo is never interrogative.",
          register: "formal",
          region: "Universal written Spanish; in everyday Colombian speech it is nearly always paraphrased away.",
          related: ["de quién", "el cual", "del que", "cuyas"],
          example: {
            target: "El expediente cuyo autor firmó en 1789 está aquí.",
            translation: "The file whose author signed it in 1789 is here."
          }
        },
        {
          term: "el cual / la cual",
          explanation:
            "A heavier relative than “que”, used mainly after a preposition, where it agrees with its noun. It adds formality and removes any doubt about which noun is meant.",
          literal: "which / whom",
          useWhen:
            "After prepositions in careful register: “la razón por la cual”, “el punto sobre el cual”, “la mesa bajo la cual”.",
          avoidWhen:
            "In relaxed speech, where “por la que”, “sobre el que” are far more natural and “el cual” can sound stiff.",
          register: "formal",
          region: "Written and academic Spanish everywhere; heard in Colombia mostly in lectures, law and journalism.",
          related: ["el que", "que", "lo cual", "los cuales"],
          example: {
            target: "Es el documento sobre el cual se apoyó la tesis.",
            translation: "It's the document on which the thesis was based."
          }
        },
        {
          term: "lo cual",
          explanation:
            "A neuter relative that refers back to a whole clause, not to any one noun: “which”, meaning “a fact that”. It always comments on the entire idea just stated.",
          literal: "which (whole idea)",
          useWhen:
            "Adding a comment on everything before it: “Llegó tarde, lo cual molestó a todos.”",
          avoidWhen:
            "You are pointing at a specific noun -- then it is “el cual / la cual”, which must agree with that noun.",
          register: "neutral",
          region: "Universal Spanish; slightly formal, but this one does survive into careful speech.",
          related: ["lo que", "el cual", "esto", "que"],
          example: {
            target: "Las páginas están ilegibles, lo cual complica todo.",
            translation: "The pages are illegible, which complicates everything."
          }
        },
        {
          term: "lo que",
          explanation:
            "The everyday neuter relative: “what” or “the thing that”. It packages an unnamed idea into a noun-like chunk and is common in every register.",
          literal: "what / the thing that",
          useWhen:
            "Naming an idea you have not named as a noun: “lo que necesito”, “lo que dijo”, “no entendí lo que pasó”.",
          avoidWhen:
            "You mean a concrete, gendered noun -- there it is “el que / la que”, not “lo que”.",
          register: "neutral",
          region: "Universal Spanish; fully at home in speech, unlike most of this lesson.",
          related: ["lo cual", "el que", "aquello que", "eso que"],
          example: {
            target: "Cito la fuente donde está la fecha, que es lo que necesito.",
            translation: "I cite the source with the date, which is what I need."
          }
        },
        {
          term: "el que / la que",
          explanation:
            "A relative that carries its own article and so stands in for a known noun: “the one that”, “the one who”. It also follows prepositions in ordinary speech.",
          literal: "the one that / who",
          useWhen:
            "Singling out one of a set: “el que firmó”, “la que me mostró”, or after a preposition: “la razón por la que vine”.",
          avoidWhen:
            "You need the neuter idea “what” with no noun behind it -- that is “lo que”, not “el que”.",
          register: "neutral",
          region: "Universal Spanish; the spoken workhorse where writing would reach for “el cual”.",
          related: ["el cual", "quien", "lo que", "los que"],
          example: {
            target: "El que firmó el expediente ya no vive.",
            translation: "The one who signed the file is no longer alive."
          }
        },
        {
          term: "quien / quienes",
          explanation:
            "A relative used only for people, mostly after a preposition or between commas. It marks number but not gender, and it always means a person.",
          literal: "who / whom",
          useWhen:
            "People after a preposition or in a set-off clause: “el autor, quien firmó en 1789”, “las personas con quienes hablé”.",
          avoidWhen:
            "The antecedent is a thing, or the clause is defining and glued on with no comma -- there “que” is normal.",
          register: "neutral",
          region: "Universal Spanish; slightly formal in speech but common in Colombian writing and radio.",
          related: ["que", "el cual", "a quien", "de quien"],
          example: {
            target: "El archivista, quien lleva veinte años, conoce cada legajo.",
            translation: "The archivist, who has been here twenty years, knows every bundle."
          }
        },
        {
          term: "los cuales / las cuales",
          explanation:
            "The plural of “el cual / la cual”, used the same way: after prepositions and in set-off clauses, agreeing in gender and number with a plural noun.",
          literal: "which (plural)",
          useWhen:
            "Plural antecedents in careful register: “los documentos entre los cuales”, “las cartas de las cuales hablo”.",
          avoidWhen:
            "Casual speech, where “los que / las que” is lighter and far more usual.",
          register: "formal",
          region: "Written and academic Spanish; in Colombia mostly on the page, rarely in the street.",
          related: ["el cual", "los que", "entre los cuales", "de las cuales"],
          example: {
            target: "Hay cartas, algunas de las cuales están ilegibles.",
            translation: "There are letters, some of which are illegible."
          }
        }
      ],
      note:
        "Written Spanish joins its sentences with a small kit that speech mostly skips. “Cuyo” means whose and agrees with the thing owned, not the owner, so it has four forms -- cuyo, cuya, cuyos, cuyas -- picked by the noun straight after it. After a preposition, careful register swaps bare “que” for “el cual / la cual” (and their plurals), which pin down exactly which noun is meant. “Lo cual” comments on a whole clause, while “lo que” packages an unnamed idea as “what”. The honest truth: spoken Colombian Spanish says plain “que” for almost all of this, and reaches for “del que” or “por la que” where the page would write “del cual” or “por la cual”. These heavier forms are the sound of writing, law, journalism and the academy -- exactly the register of a Tunja archive -- so learn to read and write them even though you will rarely say them.",
      culture: [
        {
          label: "Tunja, a city that kept its usted",
          body:
            "Tunja sits above 2,800 meters in Boyacá, one of the oldest university cities in Colombia and famously formal. The courtesy is real and daily: titles like “don” and “doctor”, a careful usted with strangers, and a written Spanish that stays close to the page. It is exactly the setting where the heavier relative clauses of this lesson are not showing off but simply the expected register, from a lecture hall to an archive reading room."
        },
        {
          label: "Why speech drops all this",
          body:
            "None of these forms is wrong in conversation, but most sound starched there. A Colombian describing the same letters out loud would say “unas cartas que tienen las páginas ilegibles” and let context carry the possession, rather than “cuyas páginas”. The written kit exists because writing cannot lean on tone, gesture or a shared moment; it has to name relationships precisely. Learning the difference is really learning to switch registers, not just words."
        },
        {
          label: "The archive as a language",
          body:
            "Colombian archives and notarial offices run on a fossilised, precise Spanish: “el suscrito”, “la cual se anexa”, “el documento mediante el cual”. It can feel like a different dialect, and in a sense it is -- a register centuries deep. Reading a colonial expediente in Tunja means decoding “cuyo”, “el cual” and “lo cual” at speed, because the scribes joined every clause with them. This lesson is a small key to that door."
        },
        {
          label: "Cuyo is disappearing from speech, not writing",
          body:
            "Surveys of spoken Latin American Spanish find “cuyo” almost absent; people paraphrase it every time. Yet in edited prose it is alive and expected, and its misuse -- making it agree with the owner -- marks a text as careless. So the form lives a double life: a museum piece in the mouth, a working tool on the page. In Boyacá's academic culture, controlling it in writing still signals an educated hand."
        }
      ],
      pitfalls: [
        {
          mistake: "Making cuyo agree with the owner",
          whyItFails:
            "Cuyo agrees with the thing owned, which comes right after it, not with the possessor. “La escritora cuyos libros” is right because “libros” is masculine plural; making it “cuya” to match the writer is the classic error and reads as ungrammatical.",
          sayInstead: "La escritora cuyos libros leímos vive en Tunja."
        },
        {
          mistake: "Using cuyo as a question word",
          whyItFails:
            "Cuyo is only a relative, never a question. “Whose file is this?” cannot be “¿Cuyo expediente es este?”; that is archaic to the point of sounding wrong. The living question is “¿De quién es este expediente?”, and cuyo stays inside a joined statement.",
          sayInstead: "¿De quién es este expediente colonial?"
        },
        {
          mistake: "Writing lo cual where a noun is meant",
          whyItFails:
            "“Lo cual” only ever refers to a whole idea. If you are pointing back to one noun you need “el cual / la cual” to agree with it. “La fecha, lo cual necesito” is wrong; the date is a feminine noun, so it must be “la cual” -- or better, “que”.",
          sayInstead: "La fecha, la cual necesito, aparece al final."
        },
        {
          mistake: "Forcing el cual into casual speech",
          whyItFails:
            "“El cual” after every preposition sounds stilted out loud. Saying “el man con el cual hablé” at a café is over-formal; conversation wants “con el que”. The heavy relatives belong to writing and lectures, not to ordinary talk, and overusing them marks a learner as bookish.",
          sayInstead: "El man con el que hablé ya se fue."
        }
      ],
      variations: [
        {
          form: "El expediente cuyo autor firmó en 1789.",
          register: "formal",
          region: "Written Spanish",
          whenToUse: "Writing, where cuyo joins owner and thing owned in one clean clause."
        },
        {
          form: "El expediente que tiene la firma de 1789.",
          register: "neutral",
          region: "Spoken Colombian",
          whenToUse: "Speech, which paraphrases cuyo away with plain “que” and a possessive."
        },
        {
          form: "La razón por la cual vine es otra.",
          register: "formal",
          region: "Written and academic",
          whenToUse: "After a preposition in careful register, where “el cual” outranks “que”."
        },
        {
          form: "La razón por la que vine es otra.",
          register: "neutral",
          region: "Spoken Colombian",
          whenToUse: "The same idea in conversation, where “por la que” is the natural choice."
        },
        {
          form: "Llegó tarde, lo cual molestó a todos.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Commenting on a whole preceding clause with the neuter “lo cual”."
        }
      ],
      prompt: "Don Hernando calls it the file “cuyo autor firmó en 1789.” Why cuyo and not cuya?",
      choices: [
        "Because cuyo agrees with the owner of the file, and the owner is being treated as masculine here.",
        "Because cuyo agrees with the thing owned, and the thing owned is “autor”, which is masculine singular.",
        "Because cuyo never changes its ending, so it stays cuyo in front of any noun regardless of gender."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence uses the relative correctly after the preposition “sobre”?",
          choices: [
            "Es el documento sobre el cual se apoyó toda la investigación posterior del archivo.",
            "Es el documento sobre que se apoyó toda la investigación posterior del archivo colonial.",
            "Es el documento sobre cuyo se apoyó toda la investigación posterior del archivo colonial."
          ],
          answer: 0,
          tests: "After a heavier preposition like “sobre”, careful Spanish uses “el cual”, not bare “que” or a stranded “cuyo”."
        },
        {
          prompt: "Choose the correct agreement for “letters whose pages are illegible”.",
          choices: [
            "unas cartas cuyo páginas están ilegibles, lo cual complica mucho la transcripción del legajo",
            "unas cartas cuyas páginas están ilegibles, lo cual complica mucho la transcripción del legajo",
            "unas cartas cuya páginas están ilegibles, lo cual complica mucho la transcripción del legajo"
          ],
          answer: 1,
          tests: "Cuyo agrees with the thing owned: “páginas” is feminine plural, so it must be “cuyas páginas”."
        },
        {
          prompt: "Which sentence correctly uses a relative to comment on the whole idea?",
          choices: [
            "El manuscrito llegó incompleto, lo cual retrasó la investigación durante varias semanas seguidas.",
            "El manuscrito llegó incompleto, el cual retrasó la investigación durante varias semanas seguidas.",
            "El manuscrito llegó incompleto, la cual retrasó la investigación durante varias semanas seguidas."
          ],
          answer: 0,
          tests: "“Lo cual” refers back to an entire clause; “el/la cual” must point to a specific noun, and there is none here."
        }
      ]
    },
    en: {
      title: "El archivo cuyo autor firmó en 1789",
      situation:
        "Imagínese en Edimburgo, en la sala de lectura de un archivo universitario de piedra gris. Usted acompaña a Camila, una investigadora colombiana, mientras un archivista escocés le muestra documentos antiguos. Entre los dos precisan en inglés de qué expediente hablan, de quién es la firma, qué páginas se borraron y sobre qué fuente se apoya cada cita, usando las oraciones de relativo que el inglés escrito exige.",
      setting: {
        who: "El archivista es un escocés veterano, cortés y preciso, que conoce cada legajo de la colección. Camila es una investigadora colombiana que lleva pocas semanas leyendo documentos en inglés y afinando el registro escrito.",
        what: "Una consulta de investigación armada con oraciones de relativo: cuál expediente es, de quién es la firma, qué páginas se borraron y sobre qué fuente descansa una cita.",
        when: "Una mañana tranquila de semana, las horas lentas en que el archivo solo abre para investigadores registrados.",
        where: "Edimburgo, Escocia, en la sala de lectura de un archivo histórico universitario.",
        why: "Las oraciones de relativo precisas -- whose, which, what -- son la juntura del inglés escrito y académico, y el hispanohablante las arma mal por calcar el español. Dominarlas permite leer una ley, un artículo o un archivo."
      },
      address: {
        form: "mixed",
        who: "El archivista y Camila se tratan por el apellido con “Ms.” y “Mr.” al principio y luego por el nombre, con la cortesía sobria de una sala de lectura. El inglés no marca tú ni usted.",
        why: "El inglés no distingue tú de usted: toda la formalidad va en el tono, el apellido y fórmulas como “would you mind” o “I'm afraid”. No hay un pronombre que suba o baje el respeto.",
        ifYouSwitch:
          "Si Camila quisiera sonar más cercana, no le serviría cambiar el “you”, porque no existe otro. La distancia se ajusta con el nombre, el saludo y frases más o menos suaves, nunca con el pronombre."
      },
      dialogue: [
        {
          speaker: "Archivist",
          target: "Look: this is the file whose author signed it in 1789. Notice the handwriting.",
          translation: "Mire: este es el expediente cuyo autor lo firmó en 1789. Fíjese en la caligrafía.",
          pronunciation: "luk: dis is de fail juus Ó-zor sáind it in se-vén-TIIN éit-i náin. NÓU-tis de JAND-rai-ting",
          literal: "Mire: este es el archivo cuyo autor lo-firmó en 1789. Note la caligrafía.",
          why: "En inglés “whose” es invariable y sirve también para cosas, no solo para personas: “the file whose author”. No cambia por género ni número, a diferencia de cuyo, cuya, cuyos y cuyas."
        },
        {
          speaker: "Camila",
          target: "Thanks. And the ledger about which you spoke yesterday, the one on the city's founding?",
          translation: "Gracias. ¿Y el libro de actas del cual me habló ayer, el de la fundación de la ciudad?",
          pronunciation: "zenks. and de LE-yer a-BÁUT juich yu spóuk YÉS-ter-dei, de uán on de SÍ-tis FÁUN-ding",
          literal: "Gracias. Y el libro-de-actas sobre el-cual usted habló ayer, el uno sobre la ciudad fundación?",
          why: "“About which” antepone la preposición, como “sobre el cual”. En el inglés corriente se dice “the ledger you spoke about”, con la preposición al final; ponerla delante es la opción más formal, propia del archivo."
        },
        {
          speaker: "Archivist",
          target: "Here you are. It's the document on which all the later research was based.",
          translation: "Aquí tiene. Es el documento sobre el cual se apoyó toda la investigación posterior.",
          pronunciation: "jíar yu ar. its de DÓ-kiu-ment on juich ol de LÉI-ter RÍ-serch uós béisd",
          literal: "Aquí usted está. Es el documento sobre el-cual toda la posterior investigación fue basada.",
          why: "“On which” = sobre el cual. En inglés la preposición puede ir delante (“on which”) o al final (“which it was based on”); ambas son correctas, y la primera marca el registro formal."
        },
        {
          speaker: "Camila",
          target: "I found some letters whose pages are almost illegible, which complicates the transcription.",
          translation: "Encontré unas cartas cuyas páginas están casi ilegibles, lo cual complica la transcripción.",
          pronunciation: "ai fáund som LÉ-ters juus PÉI-yes ar ÓL-moust i-LÉ-yi-bol, juich KÓM-pli-keits de trans-krip-SHON",
          literal: "Yo encontré algunas cartas cuyas páginas están casi ilegibles, lo-cual complica la transcripción.",
          why: "Dos cosas: “whose pages” usa el mismo “whose” invariable para una cosa, y “, which complicates…” comenta toda la idea anterior. Ese “which” de comentario exige coma delante; sin la coma cambia el sentido."
        },
        {
          speaker: "Archivist",
          target: "That's normal. The parchments, whose edges are decaying, need careful handling.",
          translation: "Es normal. Los pergaminos, cuyos bordes se deterioran, exigen un manejo cuidadoso.",
          pronunciation: "dats NÓR-mal. de PARCH-ments, juus É-yes ar di-KÉI-ing, niid KÉR-ful JAND-ling",
          literal: "Eso-es normal. Los pergaminos, cuyos bordes están decayendo, necesitan cuidadoso manejo.",
          why: "“Whose” otra vez para una cosa, aquí entre comas (cláusula explicativa). En inglés “whose” nunca cambia de forma, mientras que en español tocaría escoger entre cuyo, cuya, cuyos y cuyas."
        },
        {
          speaker: "Camila",
          target: "So I'll cite the source in which the exact date appears, which is what I need.",
          translation: "Entonces citaré la fuente en la cual aparece la fecha exacta, que es lo que necesito.",
          pronunciation: "so ail sáit de sors in juich de eg-ZÁKT deit a-PÍARS, juich is juat ai niid",
          literal: "Entonces yo-citaré la fuente en la-cual la exacta fecha aparece, lo-cual es lo-que yo necesito.",
          why: "“In which” = en la cual; y “what I need” = lo que necesito, donde “what” empaqueta una idea sin nombrarla. No diga “the what I need”: “what” ya lleva el artículo dentro."
        }
      ],
      vocabulary: [
        {
          term: "whose",
          explanation:
            "El posesivo relativo del inglés: de quién, cuyo. Es invariable -- una sola forma -- y sirve tanto para personas como para cosas, algo que sorprende al hispanohablante acostumbrado a cuatro formas de cuyo.",
          literal: "cuyo / cuya",
          useWhen:
            "Para unir un poseedor con lo poseído: “the author whose book”, “the file whose author”, “the house whose windows”.",
          avoidWhen:
            "Está preguntando. “¿De quién es esto?” es “Whose is this?”, con otro orden; y no lo confunda con “who's” (= who is).",
          register: "neutro",
          region: "Inglés universal; igual en el habla y en la escritura, sin las cuatro formas del español.",
          related: ["who", "which", "of which", "whom"],
          example: {
            target: "The file whose author signed it in 1789 is here.",
            translation: "El expediente cuyo autor lo firmó en 1789 está aquí."
          }
        },
        {
          term: "preposition + which",
          explanation:
            "En registro cuidado el inglés antepone la preposición al relativo: “on which”, “about which”, “in which”. Equivale a “sobre el cual”, “del cual”, “en la cual”, y suena formal.",
          literal: "sobre el cual / en la cual",
          useWhen:
            "Escritura y habla formal: “the basis on which”, “the way in which”, “the point about which”.",
          avoidWhen:
            "En conversación, donde el inglés deja la preposición al final: “the source it's based on”, más ligero y natural.",
          register: "formal",
          region: "Inglés escrito y académico; en el habla diaria se prefiere la preposición al final.",
          related: ["which", "whereby", "in which", "on which"],
          example: {
            target: "It's the document on which the research was based.",
            translation: "Es el documento sobre el cual se apoyó la investigación."
          }
        },
        {
          term: ", which (comma + which)",
          explanation:
            "Con una coma delante, “which” comenta toda la oración anterior, no un solo sustantivo: equivale a “lo cual”. La coma es obligatoria y cambia el sentido.",
          literal: "lo cual",
          useWhen:
            "Para añadir un comentario sobre toda la idea: “She arrived late, which annoyed everyone.”",
          avoidWhen:
            "Define cuál cosa es (cláusula especificativa): ahí va sin coma y con “that”, no “, which”.",
          region: "Inglés universal; la coma marca la diferencia entre comentar y definir.",
          register: "neutro",
          related: ["lo cual", "that", "which", "and this"],
          example: {
            target: "The pages are illegible, which complicates everything.",
            translation: "Las páginas están ilegibles, lo cual complica todo."
          }
        },
        {
          term: "what",
          explanation:
            "El relativo neutro del inglés: lo que, la cosa que. Ya lleva el artículo dentro, así que no se le antepone “the”. Empaqueta una idea sin nombrarla como sustantivo.",
          literal: "lo que",
          useWhen:
            "Para nombrar una idea sin sustantivo: “what I need”, “what he said”, “I didn't hear what happened”.",
          avoidWhen:
            "Hay un sustantivo concreto detrás: ahí es “that” o “which”, no “what”.",
          register: "neutro",
          region: "Inglés universal; plenamente vivo en el habla, como su gemelo “lo que”.",
          related: ["which", "the thing that", "that", "whatever"],
          example: {
            target: "The source has the date, which is what I need.",
            translation: "La fuente tiene la fecha, que es lo que necesito."
          }
        },
        {
          term: "the one that / the one who",
          explanation:
            "Señala uno de un conjunto ya conocido: “el que”, “la que”, “el/la que”. “The one who” es para personas y “the one that” para cosas, aunque en el habla se cruzan.",
          literal: "el que / la que",
          useWhen:
            "Para singularizar: “the one who signed”, “the one that faded”, “the one I showed you”.",
          avoidWhen:
            "Necesita la idea neutra “lo que” sin sustantivo detrás: ahí es “what”, no “the one that”.",
          register: "neutro",
          region: "Inglés universal; el caballo de batalla del habla frente al más formal “which”.",
          related: ["the ones that", "who", "that", "what"],
          example: {
            target: "The one who signed the file is no longer alive.",
            translation: "El que firmó el expediente ya no vive."
          }
        },
        {
          term: "who / whom",
          explanation:
            "El relativo para personas. “Who” hace de sujeto y “whom” de complemento, sobre todo tras preposición, aunque en el habla “whom” retrocede ante “who”.",
          literal: "quien / quienes",
          useWhen:
            "Personas: “the author, who signed in 1789”, “the people with whom I spoke”.",
          avoidWhen:
            "El antecedente es una cosa: ahí es “which” o “that”, nunca “who”.",
          register: "neutro",
          region: "Inglés universal; “whom” es formal y en conversación suele volverse “who”.",
          related: ["whose", "that", "with whom", "which"],
          example: {
            target: "The archivist, who has been here twenty years, knows every file.",
            translation: "El archivista, quien lleva veinte años, conoce cada expediente."
          }
        },
        {
          term: "that (defining, no comma)",
          explanation:
            "El relativo especificativo, sin coma, que dice cuál cosa exactamente. A menudo se puede omitir cuando es complemento: “the file (that) I read”.",
          literal: "que (especificativo)",
          useWhen:
            "Para definir cuál es: “the letters that faded”, “the source that has the date”.",
          avoidWhen:
            "Comenta toda la idea o va entre comas: ahí es “, which”, no “that”.",
          register: "neutro",
          region: "Inglés universal; el relativo más frecuente del habla, y muchas veces se calla.",
          related: ["which", "who", "the one that", "zero relative"],
          example: {
            target: "The source that has the exact date is this one.",
            translation: "La fuente que tiene la fecha exacta es esta."
          }
        }
      ],
      note:
        "El inglés escrito junta sus frases con un juego pequeño que el hispanohablante suele calcar mal. “Whose” es una sola forma, invariable, y vale para personas y cosas: “the file whose author”, sin escoger entre cuyo, cuya, cuyos o cuyas. En registro cuidado la preposición va delante del relativo -- “on which”, “about which”, “in which” -- igual que “sobre el cual”; en el habla se deja al final: “the source it's based on”. Con coma, “, which” comenta toda la idea anterior, como “lo cual”, y sin coma “that” define cuál cosa es. “What” significa “lo que” y ya lleva el artículo dentro, así que “the what I need” está mal. Y cuidado con dos calcos típicos: “the reason for which” por “la razón por la cual”, cuando lo natural es “the reason why”; y confundir “whose” con “who's”, que es “who is”.",
      culture: [
        {
          label: "El inglés no tiene cuatro cuyos",
          body:
            "Donde el español obliga a escoger entre cuyo, cuya, cuyos y cuyas según la cosa poseída, el inglés tiene una sola palabra: “whose”. No cambia nunca, ni por género ni por número, y además sirve para cosas: “the book whose cover…”. Para el hispanohablante esto es un alivio y una trampa a la vez, porque uno tiende a buscar una concordancia que en inglés simplemente no existe. Menos formas, una sola regla."
        },
        {
          label: "La coma que cambia el sentido",
          body:
            "En inglés la diferencia entre “the letters that faded” y “the letters, which faded” no es de estilo: la primera define cuáles cartas (solo esas) y la segunda comenta que, por cierto, se borraron. La coma y “which” marcan un comentario; “that” sin coma define. En español la frontera es más borrosa, así que este es un punto donde el hispanohablante debe pensar en la puntuación tanto como en la palabra."
        },
        {
          label: "Dejar la preposición al final",
          body:
            "El inglés hablado adora dejar la preposición colgando al final: “the source it's based on”, “the person I told you about”. Suena natural y para nada descuidado. La versión con la preposición delante -- “on which”, “about whom” -- existe y es correcta, pero pertenece a la escritura y a los discursos. El hispanohablante, que nunca deja una preposición al final, tiene que entrenar el oído para que no le suene raro."
        },
        {
          label: "“Whose” y “who's” suenan igual",
          body:
            "“Whose” (de quién, cuyo) y “who's” (contracción de “who is”) se pronuncian idéntico, y ni los nativos se salvan de confundirlos al escribir. Para el que aprende, la regla es simple: si puede reemplazarlo por “who is” o “who has”, va con apóstrofo (“who's”); si marca posesión, va sin él (“whose”). Es de los errores ortográficos más comunes del inglés, y evitarlo distingue a quien escribe con cuidado."
        }
      ],
      pitfalls: [
        {
          mistake: "The house who's roof is red is ours.",
          whyItFails:
            "“Who's” es “who is / who has”, no un posesivo. El posesivo relativo es “whose”, sin apóstrofo, y sirve también para cosas. Suenan igual, pero al escribir la diferencia salta a la vista y marca descuido.",
          sayInstead: "The house whose roof is red is ours."
        },
        {
          mistake: "That's the reason for which the archive is closed.",
          whyItFails:
            "“The reason for which” calca “la razón por la cual” y suena pesado y extranjero. El inglés natural dice “the reason why” o simplemente “the reason (that)”. La preposición delante del relativo aquí no hace falta y estorba.",
          sayInstead: "That's the reason why the archive is closed."
        },
        {
          mistake: "The pages are illegible that makes it slower.",
          whyItFails:
            "Para comentar toda la idea anterior el inglés usa “, which”, con coma: “…illegible, which makes it slower”. “That” sin coma define un sustantivo, no comenta una oración entera, así que aquí deja la frase coja.",
          sayInstead: "The pages are illegible, which makes it slower."
        },
        {
          mistake: "This is the what I need for the footnote.",
          whyItFails:
            "“What” ya significa “lo que” y trae el artículo dentro, de modo que “the what” dobla el artículo. Es un calco de “lo que” que suena claramente a error. Basta con “what I need”, sin “the” delante.",
          sayInstead: "This is what I need for the footnote."
        }
      ],
      variations: [
        {
          form: "The file whose author signed it in 1789.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "“Whose” invariable para unir el poseedor con lo poseído, aquí una cosa."
        },
        {
          form: "The document on which the research was based.",
          register: "formal",
          region: "Inglés escrito",
          whenToUse: "Registro cuidado, con la preposición antepuesta al relativo."
        },
        {
          form: "The document the research was based on.",
          register: "neutro",
          region: "Inglés hablado",
          whenToUse: "Conversación, donde la preposición queda al final."
        },
        {
          form: "The pages are illegible, which slows everything.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "“, which” con coma para comentar toda la idea anterior."
        },
        {
          form: "That's what I need for the footnote.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "“What” = lo que, sin artículo delante."
        }
      ],
      prompt: "En inglés, ¿cuál oración usa bien “whose” para una cosa?",
      choices: [
        "The file who's author signed it in 1789 is the one on the reading table over there.",
        "The file which author signed it in 1789 is the one on the reading table over there.",
        "The file whose author signed it in 1789 is the one on the reading table over there."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál oración comenta toda la idea anterior con la puntuación correcta?",
          choices: [
            "The pages are illegible which makes the whole transcription slower than we first expected.",
            "The pages are illegible, which makes the whole transcription slower than we first expected.",
            "The pages are illegible, that makes the whole transcription slower than we first expected."
          ],
          answer: 1,
          tests: "El “which” que comenta una cláusula entera lleva coma delante; “that” no sirve para ese comentario."
        },
        {
          prompt: "¿Cómo se dice “lo que necesito” sin calcar el artículo del español?",
          choices: [
            "The source has the date, which is the what I need for the footnote at the end.",
            "The source has the date, which is the thing what I need for the footnote at the end.",
            "The source has the date, which is what I need for the footnote at the end."
          ],
          answer: 2,
          tests: "“What” ya equivale a “lo que”; no se le antepone “the” ni “the thing”."
        },
        {
          prompt: "¿Cuál versión suena natural y no calca “la razón por la cual”?",
          choices: [
            "That's the reason why the archive limits access to registered researchers only.",
            "That's the reason for the which the archive limits access to registered researchers only.",
            "That's the reason by the which the archive limits access to registered researchers only."
          ],
          answer: 0,
          tests: "El inglés dice “the reason why” o “the reason that”; “the reason for which” es un calco pesado de “por la cual”."
        }
      ]
    },
  },
  {
    id: "reading-probability-in-a-pasto-kitchen",
    level: "Extending · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "food-and-drink",
    register: "courteous",
    pathways: ["extension", "year-12"],
    structure: "conjecture",
    review: "pending",
    es: {
      title: "Has it gotten there yet? Guessing out loud",
      situation:
        "You are in a kitchen in Pasto, on the Nariño plateau, already very close to the border with Ecuador. Doña Rosa and her nephew Mateo are waiting for a brother who is coming by bus, and while the water boils for coffee, they start guessing out loud: what time it must be, whether he may have arrived already, whether he must be on his way. Notice how the future is not talking about the future, but about what is probable.",
      setting: {
        who: "Doña Rosa keeps the kitchen in a Pasto household and speaks in the courteous, unhurried way of Nariño. Mateo is her nephew, home for the weekend, guessing along with her about a relative who is running late.",
        what: "A kitchen full of out-loud guesses: what time it must be, whether the brother has arrived yet, whether he must be on his way, and who could be at the door.",
        when: "Late Sunday afternoon, with a cold Andean drizzle outside and coffee going on the stove.",
        where: "Pasto, high in the Nariño highlands near the Ecuadorean border, in a family kitchen.",
        why: "Guessing out loud -- he must have arrived, it'll be about five -- is daily grammar, and the corpus has four future perfects and not one of them a guess. Conjecture is how Spanish speculates without saying “I think”."
      },
      address: {
        form: "usted",
        who: "Rosa and Mateo use usted with each other, aunt and nephew alike. In Nariño usted is the ordinary form even inside a family, warm rather than distant.",
        why: "Pastusos are famous for their ustedeo: usted used with children, partners and pets, where most of Colombia would say tú or vos. It carries no coldness; it is simply how affection sounds here.",
        ifYouSwitch:
          "If Mateo suddenly used tú with his aunt, it would sound oddly informal to a Nariño ear, even a little forward. The family usted is the register of home, and stepping out of it would draw attention."
      },
      dialogue: [
        {
          speaker: "Rosa",
          target: "Mateo, ¿su hermano ya salió? Ya habrá llegado a la terminal, con este frío de Pasto.",
          translation: "Mateo, has your brother left yet? He must have got to the station by now, in this Pasto cold.",
          pronunciation: "ma-TE-o, su er-MA-no ya sa-LYÓ? ya a-BRÁ ye-GA-do a la ter-mi-NÁL, kon EH-te FRÍ-o de PAS-to",
          literal: "Mateo, your brother already left? Already will-have arrived to the station, with this cold of Pasto.",
          why: "“Ya habrá llegado” is not a future event. The future perfect here is a guess about the recent past: “he must have arrived by now”. Spanish uses the future tense to speculate, where English reaches for “must have”."
        },
        {
          speaker: "Mateo",
          target: "No sé, tía. Serán las cinco, ¿no? A esta hora el bus todavía estará subiendo la loma.",
          translation: "I don't know, auntie. It must be five, right? At this hour the bus will still be climbing the hill.",
          pronunciation: "no se, TÍ-a. se-RÁN las SIN-ko, no? a EH-ta O-ra el bus to-da-VÍ-a es-ta-RÁ su-BYEN-do la LO-ma",
          literal: "Not I-know, auntie. Will-be the five, no? At this hour the bus still will-be climbing the hill.",
          why: "Two conjectural futures. “Serán las cinco” = it must be about five, a guess at the present time; and “estará subiendo” = it's probably still climbing. The future tense, with no future meaning at all, is pure estimation."
        },
        {
          speaker: "Rosa",
          target: "Debe de estar en camino, entonces. No debe de haber mucho tráfico un domingo.",
          translation: "He must be on his way, then. There can't be much traffic on a Sunday.",
          pronunciation: "DE-be de es-TÁR en ka-MI-no, en-TON-ses. no DE-be de a-BÉR MU-cho TRÁ-fi-ko un do-MIN-go",
          literal: "Must of be on way, then. Not must of have much traffic a Sunday.",
          why: "“Deber de” + infinitive is the other main way to guess: “debe de estar” = he must be. The little “de” is the marker of supposition. Without it, “debe estar”, the sentence tilts towards obligation instead."
        },
        {
          speaker: "Mateo",
          target: "A lo mejor se quedó hablando con alguien. O quizás perdió el primer bus, no sé.",
          translation: "Maybe he stayed chatting with someone. Or perhaps he missed the first bus, I don't know.",
          pronunciation: "a lo me-HÓR se ke-DÓ a-BLAN-do kon al-GYEN. o ki-SÁS per-DYÓ el pri-MÉR bus, no se",
          literal: "At the best himself stayed talking with someone. Or perhaps missed the first bus, not I-know.",
          why: "Two hedges. “A lo mejor” means maybe and, oddly, takes the indicative -- “se quedó”. “Quizás” means perhaps and prefers the subjunctive, but with a completed past fact like “perdió” the indicative is fine too."
        },
        {
          speaker: "Rosa",
          target: "Tal vez llame cuando llegue. Igual, él debe llamar apenas baje, que se lo pedí.",
          translation: "Perhaps he'll call when he arrives. Anyway, he has to call the moment he gets off, I asked him to.",
          pronunciation: "tal ves YA-me kwan-do YE-ge. i-GWÁL, el DE-be ya-MÁR a-PE-nas BA-je, ke se lo pe-DÍ",
          literal: "Perhaps calls when arrives. Anyway, he must call as-soon-as gets-off, that it to-him I-asked.",
          why: "“Tal vez llame” takes the subjunctive -- perhaps he'll call. Then contrast: “debe llamar”, with no “de”, is plain obligation -- he has to call. Same verb, and only the “de” separates a guess from a duty."
        },
        {
          speaker: "Mateo",
          target: "Puede que ya esté aquí. ¿Será él el que toca? Sí, tía, ese debe de ser.",
          translation: "He might already be here. Could that be him knocking? Yes, auntie, that must be him.",
          pronunciation: "PWE-de ke ya es-TÉ a-KÍ. se-RÁ el el ke TO-ka? si, TÍ-a, E-se DE-be de ser",
          literal: "Can that already is here. Will-be he the that knocks? Yes, auntie, that must of be.",
          why: "“Puede que” always takes the subjunctive -- “puede que esté”. “¿Será él?” is a conjectural question -- could it be him? And “debe de ser” closes with supposition again: that must be him."
        }
      ],
      vocabulary: [
        {
          term: "futuro de conjetura",
          explanation:
            "The simple future used to guess about the present: “¿Qué hora será?” means “what time do you think it is?”, not a real future. It turns a statement into an estimate.",
          literal: "future of conjecture",
          useWhen:
            "Estimating something now: “Serán las cinco”, “Estará en casa”, “Tendrá unos treinta años”.",
          avoidWhen:
            "You actually mean a future event -- then the future is literal, and context or a time word makes that clear.",
          register: "neutral",
          region: "Universal Spanish; extremely common in Colombian speech for guessing.",
          related: ["futuro perfecto", "deber de", "a lo mejor", "estará"],
          example: {
            target: "¿Qué hora será? Serán las cinco.",
            translation: "What time do you reckon it is? It must be five."
          }
        },
        {
          term: "futuro perfecto de conjetura",
          explanation:
            "The future perfect (habrá + participle) used to guess about the recent past: “Ya habrá llegado” = “he must have arrived by now”. English says “must have”, Spanish says “will have”.",
          literal: "future perfect of conjecture",
          useWhen:
            "Guessing something has already happened: “Ya habrá salido”, “Se habrá olvidado”, “Habrá sido el viento”.",
          avoidWhen:
            "You are stating a fact you know rather than guessing -- then use the plain perfect: “ya llegó”.",
          register: "neutral",
          region: "Universal Spanish; the exact gap the corpus had, with four literal ones and no guesses.",
          related: ["futuro de conjetura", "condicional", "debe de haber", "ya habrá"],
          example: {
            target: "Ya habrá llegado a la terminal.",
            translation: "He must have reached the station by now."
          }
        },
        {
          term: "condicional de conjetura",
          explanation:
            "The conditional does for the past what the future does for the present: a guess. “Serían las cinco cuando llegó” = “it must have been about five when he arrived”.",
          literal: "conditional of conjecture",
          useWhen:
            "Estimating in the past: “Tendría veinte años”, “Serían las dos”, “Estaría cansado”.",
          avoidWhen:
            "You mean a real conditional (“I would go if…”) -- context and an “if” clause keep them apart.",
          register: "neutral",
          region: "Universal Spanish; the past-tense partner of the conjectural future.",
          related: ["futuro de conjetura", "imperfecto", "debía de", "sería"],
          example: {
            target: "Serían las cinco cuando por fin llamó.",
            translation: "It must have been about five when he finally called."
          }
        },
        {
          term: "deber de + infinitivo",
          explanation:
            "Supposition with a verb: “debe de estar” = “he must be”. The “de” is the whole point -- it marks a guess and separates it from obligation.",
          literal: "must (be), supposition",
          useWhen:
            "Inferring from evidence: “Debe de estar en camino”, “Debe de ser tarde”, “Debía de tener hambre”.",
          avoidWhen:
            "You mean a duty -- drop the “de”: “debe llamar” is “he has to call”, an obligation, not a guess.",
          register: "neutral",
          region: "Universal Spanish in writing; in speech many Colombians drop the “de” and let context decide.",
          related: ["deber", "tener que", "futuro de conjetura", "debe de ser"],
          example: {
            target: "Debe de estar en camino ya.",
            translation: "He must be on his way already."
          }
        },
        {
          term: "deber + infinitivo",
          explanation:
            "Plain “deber”, with no “de”, is obligation: “debe llamar” = “he has to call”. It is the deliberate contrast to “deber de”, which is a guess.",
          literal: "must, obligation",
          useWhen:
            "Stating a duty or a should: “Debes descansar”, “Debe llamar apenas llegue”, “Debemos avisar”.",
          avoidWhen:
            "You are guessing rather than obliging -- then it is “deber de”, or a conjectural future.",
          register: "neutral",
          region: "Universal Spanish; the split with “deber de” is textbook, though speech often blurs it.",
          related: ["deber de", "tener que", "hay que", "debe llamar"],
          example: {
            target: "Él debe llamar apenas baje del bus.",
            translation: "He has to call the moment he gets off the bus."
          }
        },
        {
          term: "a lo mejor",
          explanation:
            "A very common spoken hedge meaning “maybe”. Its quirk is that, despite expressing doubt, it takes the indicative, not the subjunctive.",
          literal: "maybe (with indicative)",
          useWhen:
            "Casual speculation: “A lo mejor viene”, “A lo mejor se quedó dormido”, “A lo mejor llueve”.",
          avoidWhen:
            "You reach for the subjunctive after it -- that is the classic error; “a lo mejor” stays indicative.",
          register: "friendly informal",
          region: "Universal Spanish; the everyday, warm way to say maybe across Colombia.",
          related: ["quizás", "tal vez", "puede que", "capaz que"],
          example: {
            target: "A lo mejor perdió el primer bus.",
            translation: "Maybe he missed the first bus."
          }
        },
        {
          term: "quizás / tal vez / puede que",
          explanation:
            "Three hedges that lean to the subjunctive. “Quizás” and “tal vez” allow either mood but prefer the subjunctive for open doubt; “puede que” always takes it.",
          literal: "perhaps / maybe (with subjunctive)",
          useWhen:
            "More tentative guessing: “Quizás llame”, “Tal vez venga”, “Puede que esté aquí”.",
          avoidWhen:
            "After “puede que” you slip into the indicative -- it must be “puede que esté”, never “puede que está”.",
          register: "neutral",
          region: "Universal Spanish; slightly more careful than “a lo mejor”, and just as common.",
          related: ["a lo mejor", "puede ser", "acaso", "es posible que"],
          example: {
            target: "Puede que ya esté aquí; tal vez venga cansado.",
            translation: "He might already be here; perhaps he's coming tired."
          }
        }
      ],
      note:
        "Spanish has a whole gear for guessing, and the trick is that it borrows tenses that look like something else. The future tense, with no future meaning, estimates the present: “Serán las cinco” is “it must be five”, and “¿Qué hora será?” is “what time do you reckon it is?”. Push it back a step and the future perfect guesses the recent past: “Ya habrá llegado” = “he must have arrived by now”. The conditional does the same for the further past: “Serían las dos”. Alongside the tenses sit two other tools. “Deber de” + infinitive is supposition -- “debe de estar” -- and the tiny “de” is what separates it from plain “deber” (“debe llamar”), which is obligation; in real Pasto speech people often drop the “de” and let context decide. And the hedges split by mood: “a lo mejor” takes the indicative, while “quizás”, “tal vez” and above all “puede que” take the subjunctive.",
      culture: [
        {
          label: "El ustedeo pastuso",
          body:
            "Nariño, and Pasto in particular, is famous for using usted where the rest of Colombia would use tú or vos: parents usted their small children, couples usted each other, people even usted the dog. It is not stiffness -- it is the warm, default register of home. For a learner it is a gift, because you can stay in usted all day in Pasto and sound perfectly natural, affectionate even, rather than distant."
        },
        {
          label: "Pasto, la frontera y el acento",
          body:
            "Pasto sits high and cold near the Ecuadorean border, and the pastuso accent is one of the most recognizable in Colombia: a gentler, sing-song rhythm, clear vowels, and an “s” that stays crisp where the coast would drop it. The closeness to Ecuador shows in vocabulary and in the shared Andean, Quechua-tinged culture. None of the conjecture grammar here is local, though -- it is standard Spanish -- but it sounds especially at home in Pasto's careful speech."
        },
        {
          label: "Guessing without saying “I think”",
          body:
            "English hedges with words -- “I guess”, “probably”, “must have”. Spanish can do the same, but it also hides the guess inside the verb tense itself, which is why a learner can miss it entirely. “Estará en casa” looks like a plain future and actually means “he's probably home”. Tuning your ear to hear a future or conditional as an estimate, not a prediction, is one of the real jumps into fluent, natural Colombian Spanish."
        },
        {
          label: "El “de” que casi nadie dice",
          body:
            "The careful split between “deber de” (guess) and “deber” (obligation) is real in writing and in exams, but Colombian speech is looser: plenty of pastusos say “debe estar en camino” for a guess and let the situation carry the meaning. The reverse creeps in too. Knowing the rule lets you write correctly and understand a stickler, while hearing “debe” for both in the kitchen is completely normal and not an error to correct out loud."
        }
      ],
      pitfalls: [
        {
          mistake: "Reading a conjectural future as a real future",
          whyItFails:
            "“Serán las cinco” is a guess about now, not a claim about later. A learner who hears only the future tense misses the meaning entirely, thinking it says “they will be five o'clock”. Context -- someone wondering aloud -- is the clue that the future is estimating, not predicting.",
          sayInstead: "Serán las cinco; ya habrá llegado."
        },
        {
          mistake: "Using “deber de” for an obligation",
          whyItFails:
            "“Debes de llamar a tu mamá” tries to give an order but, by the book, says “you must (probably) be calling your mom”. For a duty you drop the “de”: “debes llamar”. The “de” belongs to guessing, and swapping the two reverses your meaning on paper.",
          sayInstead: "Debes llamar a tu mamá apenas llegues."
        },
        {
          mistake: "Putting the indicative after “puede que”",
          whyItFails:
            "“Puede que” always triggers the subjunctive, so “puede que está aquí” is wrong; it must be “puede que esté aquí”. This is one of the most reliable subjunctive triggers in the language, and getting it wrong is an instant tell that the mood system has not clicked yet.",
          sayInstead: "Puede que ya esté aquí."
        },
        {
          mistake: "Putting the subjunctive after “a lo mejor”",
          whyItFails:
            "Unlike its cousins, “a lo mejor” takes the indicative: “a lo mejor viene”, never “a lo mejor venga”. Learners over-apply the subjunctive because the phrase means “maybe”, but this one hedge simply does not trigger it. Keep it plain and indicative.",
          sayInstead: "A lo mejor viene en el próximo bus."
        }
      ],
      variations: [
        {
          form: "¿Qué hora será? Serán las cinco.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The conjectural future to guess the present time."
        },
        {
          form: "Ya habrá llegado a la terminal.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The future perfect to guess about the recent past."
        },
        {
          form: "Debe de estar en camino.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "“Deber de” + infinitive for a supposition."
        },
        {
          form: "A lo mejor perdió el bus.",
          register: "friendly informal",
          region: "Spoken Colombian",
          whenToUse: "A relaxed “maybe” that keeps the indicative."
        },
        {
          form: "Puede que ya esté aquí.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "“Puede que” with the obligatory subjunctive."
        }
      ],
      prompt: "Rosa says “Ya habrá llegado.” What does the future tense do here?",
      choices: [
        "It makes a guess about the recent past, roughly “he must have arrived by now”, not a real future.",
        "It gives a firm promise about later, roughly “he will definitely have arrived”, fixed and certain.",
        "It softens a command, telling the brother that he really has to arrive on time for once."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence expresses a supposition (“he must be…”), not an obligation?",
          choices: [
            "Mi hermano debe llamar apenas llegue a la terminal de transportes de Pasto.",
            "Mi hermano tiene que llamar apenas llegue a la terminal de transportes de Pasto.",
            "Mi hermano debe de estar llegando ya a la terminal de transportes de Pasto."
          ],
          answer: 2,
          tests: "“Deber de” + infinitive is a guess; plain “deber” and “tener que” are obligation."
        },
        {
          prompt: "Which hedge is paired with the correct mood?",
          choices: [
            "A lo mejor haya perdido el primer bus y por eso todavía no aparece por acá.",
            "A lo mejor perdió el primer bus y por eso todavía no aparece por acá todavía.",
            "A lo mejor perdiera el primer bus y por eso todavía no aparece por acá."
          ],
          answer: 1,
          tests: "“A lo mejor” takes the indicative, unlike quizás, tal vez or puede que."
        },
        {
          prompt: "Which sentence uses “puede que” correctly?",
          choices: [
            "Puede que ya está aquí, así que abra la puerta antes de que vuelva a tocar.",
            "Puede que ya estaba aquí, así que abra la puerta antes de que vuelva a tocar.",
            "Puede que ya esté aquí, así que abra la puerta antes de que vuelva a tocar."
          ],
          answer: 2,
          tests: "“Puede que” always takes the subjunctive: “puede que esté”, never “puede que está”."
        }
      ]
    },
    en: {
      title: "¿Ya habrá llegado? Adivinar en inglés",
      situation:
        "Imagínese en Mánchester, en la cocina de un apartamento estudiantil, con la lluvia gris pegada a la ventana. Usted acompaña a Mateo, un colombiano recién llegado, mientras su amiga Karen y él esperan a un hermano que viene en tren. Sin darse cuenta, se ponen a adivinar en inglés: qué hora será, si ya habrá llegado, si estará en camino. Note que el inglés no adivina con el futuro, sino con verbos modales.",
      setting: {
        who: "Karen es una amiga inglesa, tranquila y directa, que ayuda a Mateo con el idioma. Mateo es un colombiano con pocas semanas en Mánchester, aprendiendo a adivinar en voz alta sin calcar el futuro del español.",
        what: "Una cocina llena de suposiciones en voz alta: qué hora debe de ser, si el hermano ya llegó, si estará en camino y quién puede estar tocando a la puerta.",
        when: "Un domingo por la tarde, con lluvia fría afuera y el agua para el té al fuego.",
        where: "Mánchester, en el norte de Inglaterra, en la cocina de un apartamento estudiantil.",
        why: "Adivinar en voz alta -- must have arrived, it'll be about five -- es gramática diaria, y el inglés lo hace con modales porque no tiene un futuro de conjetura como el español. Dominarlo es dejar de calcar “llegará” para “debe de llegar”."
      },
      address: {
        form: "mixed",
        who: "Karen y Mateo se tratan por el nombre, con la confianza normal entre amigos. El inglés no marca tú ni usted, así que toda la cercanía va en el tono.",
        why: "El inglés tiene un solo “you” para todo el mundo. La formalidad o la cercanía no se marcan con el pronombre, sino con el nombre, el saludo y frases más o menos suaves.",
        ifYouSwitch:
          "Si Mateo quisiera sonar más formal con Karen, no podría cambiar el “you”; tendría que suavizar con “could you” o “would you mind”. El pronombre no se mueve, cambia el envoltorio."
      },
      dialogue: [
        {
          speaker: "Karen",
          target: "Your brother's late. He must have got to the station by now, in this cold.",
          translation: "Tu hermano está retrasado. Ya habrá llegado a la estación, con este frío.",
          pronunciation: "yór BRÓ-ders leit. ji mast jav got tu de STÉI-shon bai náu, in dis kóuld",
          literal: "Tu hermano-está tarde. Él debe haber llegado a la estación para ahora, en este frío.",
          why: "El inglés no tiene futuro de conjetura: para adivinar sobre el pasado reciente usa “must have + participio”. “He must have got there” = ya habrá llegado. Nunca diga “he will have got” para una suposición."
        },
        {
          speaker: "Mateo",
          target: "I don't know. It must be about five, right? The bus'll still be climbing the hill.",
          translation: "No sé. Serán como las cinco, ¿no? El bus todavía estará subiendo la loma.",
          pronunciation: "ai dont nóu. it mast bi a-BÁUT fáiv, rait? de BÁS-el stil bi KLÁIM-ing de jil",
          literal: "Yo no sé. Ello debe ser sobre cinco, ¿verdad? El bus-va todavía estar subiendo la colina.",
          why: "Para adivinar la hora, el inglés dice “it must be about five” o, informal, “it'll be about five”. Ese “'ll” es casi el único resto de futuro-conjetura del inglés; en general se prefiere “must” o “probably”."
        },
        {
          speaker: "Karen",
          target: "He must be on his way, then. There probably isn't much traffic on a Sunday.",
          translation: "Debe de estar en camino, entonces. Seguramente no hay mucho tráfico un domingo.",
          pronunciation: "ji mast bi on jis uéi, den. der PRÓ-ba-bli Í-sent moch TRÁ-fik on a SÁN-dei",
          literal: "Él debe estar en su camino, entonces. Ahí probablemente no-hay mucho tráfico en un domingo.",
          why: "“Must be” = debe de estar (suposición). Ojo: en inglés el mismo “must” sirve para la obligación (“you must call”) y para la conjetura (“he must be tired”); el contexto decide, no hay un “de” que los separe como en español."
        },
        {
          speaker: "Mateo",
          target: "Maybe he stopped to talk to someone. Or he might have missed the first bus.",
          translation: "A lo mejor se quedó hablando con alguien. O quizás perdió el primer bus.",
          pronunciation: "MÉI-bi ji stopt tu tok tu SÁM-uan. or ji máit jav mist de ferst bás",
          literal: "Quizás él paró para hablar a alguien. O él podría haber perdido el primer bus.",
          why: "“Maybe” y “might” son las hedges suaves. “He might have missed it” = quizás perdió; “might” es más tentativo que “must”. En inglés estas palabras no cambian el modo del verbo: no existe subjuntivo aquí."
        },
        {
          speaker: "Karen",
          target: "Perhaps he'll call when he gets here. Anyway, he has to call the moment he's off.",
          translation: "Quizás llame cuando llegue. En todo caso, tiene que llamar apenas se baje.",
          pronunciation: "per-JÁPS jil kol juen ji guets jíar. É-ni-uei, ji jas tu kol de MÓU-ment jis of",
          literal: "Quizás él-va llamar cuando él llega aquí. De-todos-modos, él tiene que llamar el momento él-está bajado.",
          why: "Aquí “has to call” es obligación pura, como “debe llamar” sin “de”. En inglés la obligación va con “have to” o “must”, y la conjetura con “must (have)”; el reto es que “must” hace las dos cosas según el contexto."
        },
        {
          speaker: "Mateo",
          target: "He might already be here. Could that be him? Yeah, that must be him.",
          translation: "Puede que ya esté aquí. ¿Será él? Sí, ese debe de ser.",
          pronunciation: "ji máit ol-RÉ-di bi jíar. kud dat bi jim? yea, dat mast bi jim",
          literal: "Él podría ya estar aquí. ¿Podría eso ser él? Sí, eso debe ser él.",
          why: "“He might be here” = puede que esté; “Could that be him?” = ¿será él?, la pregunta de conjetura; y “that must be him” = ese debe de ser. El inglés reparte en varios modales lo que el español hace con el futuro y con “deber (de)”."
        }
      ],
      vocabulary: [
        {
          term: "must (deduction)",
          explanation:
            "El “must” de conjetura: una deducción sobre el presente. “He must be tired” = debe de estar cansado. Es el mismo “must” de la obligación, y solo el contexto los distingue.",
          literal: "debe de (deducción)",
          useWhen:
            "Deducir algo del momento: “He must be home”, “It must be cold outside”, “You must be joking”.",
          avoidWhen:
            "La conjetura es sobre el pasado: ahí hace falta “must have + participio”, no “must” a secas.",
          register: "neutro",
          region: "Inglés universal; la forma normal de deducir en el presente.",
          related: ["must have", "have to", "can't", "probably"],
          example: {
            target: "He must be on his way by now.",
            translation: "Debe de estar en camino ya."
          }
        },
        {
          term: "must have + past participle",
          explanation:
            "La deducción sobre el pasado: “He must have arrived” = ya habrá llegado, debe de haber llegado. Es la traducción directa del futuro perfecto de conjetura del español.",
          literal: "debe de haber / ya habrá",
          useWhen:
            "Adivinar que algo ya pasó: “She must have left”, “They must have forgotten”, “It must have been the wind”.",
          avoidWhen:
            "Se le olvida el “have”: “he must arrived” no es inglés; siempre “must have arrived”.",
          register: "neutro",
          region: "Inglés universal; el sustituto exacto de “ya habrá llegado”.",
          related: ["must", "might have", "can't have", "should have"],
          example: {
            target: "He must have got to the station by now.",
            translation: "Ya habrá llegado a la estación."
          }
        },
        {
          term: "'ll / will (for a guess)",
          explanation:
            "En registro informal, un “will” o su contracción “'ll” puede adivinar el presente: “That'll be the postman.” Es el único rincón donde el inglés adivina con el futuro, y suena coloquial.",
          literal: "será / estará (informal)",
          useWhen:
            "Suposición casual, sobre todo con ruidos y llegadas: “That'll be him”, “It'll be about five”.",
          avoidWhen:
            "Quiere sonar neutro o formal: ahí “must be” es más claro y no se confunde con una predicción.",
          register: "amistoso informal",
          region: "Inglés universal, muy británico; en registro cuidado gana “must”.",
          related: ["must", "that'll be", "probably", "I expect"],
          example: {
            target: "That'll be him knocking now.",
            translation: "Ese debe de ser él, tocando."
          }
        },
        {
          term: "might / may / could",
          explanation:
            "La familia de la conjetura tentativa: “he might be”, “it may be”, “that could be”. Dicen “quizás”, con menos seguridad que “must”. No cambian el modo del verbo que sigue.",
          literal: "quizás / puede que",
          useWhen:
            "Adivinar con dudas: “He might be late”, “It could be the battery”, “She may have forgotten”.",
          avoidWhen:
            "Está casi seguro: ahí es “must”. Y para una posibilidad puntual, prefiera “could/might” sobre “can”.",
          register: "neutro",
          region: "Inglés universal; el escalón de menor certeza frente a “must”.",
          related: ["must", "maybe", "perhaps", "could have"],
          example: {
            target: "He might have missed the first bus.",
            translation: "Quizás perdió el primer bus."
          }
        },
        {
          term: "probably / I bet / I reckon",
          explanation:
            "Adverbios y frases que marcan la probabilidad sin tocar el verbo: “probably”, “I bet”, “I reckon” (muy británico). Hacen el trabajo del “seguramente” o el “de pronto” colombiano.",
          literal: "seguramente / de pronto",
          useWhen:
            "Suavizar una afirmación: “He's probably home”, “I bet he missed it”, “I reckon it's five”.",
          avoidWhen:
            "En un texto muy formal, donde “I bet / I reckon” suenan demasiado coloquiales.",
          register: "amistoso informal",
          region: "Inglés universal; “I reckon” es marcadamente británico y del norte.",
          related: ["maybe", "must", "I expect", "I suppose"],
          example: {
            target: "There probably isn't much traffic today.",
            translation: "Seguramente no hay mucho tráfico hoy."
          }
        },
        {
          term: "maybe / perhaps",
          explanation:
            "Las hedges de oración: “maybe” (informal) y “perhaps” (algo más formal) abren la frase con un “quizás”. A diferencia del español, no piden ningún subjuntivo detrás.",
          literal: "a lo mejor / quizás",
          useWhen:
            "Empezar una suposición: “Maybe he's asleep”, “Perhaps she'll call later”.",
          avoidWhen:
            "Intenta poner el verbo en subjuntivo por costumbre del español: el inglés no lo tiene aquí.",
          register: "neutro",
          region: "Inglés universal; “maybe” es más de habla, “perhaps” más de escritura.",
          related: ["might", "probably", "possibly", "I guess"],
          example: {
            target: "Maybe he stopped to talk to someone.",
            translation: "A lo mejor se quedó hablando con alguien."
          }
        },
        {
          term: "have to / have got to (obligation)",
          explanation:
            "La obligación, el contraste de la conjetura: “he has to call” = tiene que llamar, “debe llamar”. Es un deber, no una suposición, y usa “have to” o el británico “have got to”.",
          literal: "tener que / deber",
          useWhen:
            "Una obligación o regla: “You have to sign here”, “He's got to call”, “We have to leave”.",
          avoidWhen:
            "Quiere adivinar, no obligar: para la deducción es “must (have)”, no “have to”.",
          register: "neutro",
          region: "Inglés universal; “have got to” es más británico y coloquial.",
          related: ["must", "need to", "should", "have got to"],
          example: {
            target: "He has to call the moment he gets off.",
            translation: "Tiene que llamar apenas se baje."
          }
        }
      ],
      note:
        "El inglés adivina de otra manera, y para el colombiano el gran riesgo es calcar el futuro. En inglés no existe el futuro de conjetura: “llegará” no se dice “he will arrive” cuando es una suposición, porque eso suena a predicción. Para deducir el presente se usa “must be” (“he must be tired” = debe de estar cansado), y para el pasado reciente “must have + participio” (“he must have arrived” = ya habrá llegado). El escalón de menos certeza es “might / may / could” (quizás), y para una posibilidad puntual se prefiere “could/might be” sobre “can be”. Hay hedges de palabra suelta -- “probably”, “I bet”, “I reckon” -- y de oración -- “maybe”, “perhaps” -- y ninguna pide subjuntivo, que en inglés no existe aquí. Un solo rincón informal deja adivinar con el futuro: “that'll be him”. Y cuidado, “must” hace doble trabajo: obligación y deducción, sin el “de” que en español separa “deber” de “deber de”.",
      culture: [
        {
          label: "El inglés no tiene futuro de conjetura",
          body:
            "Este es el punto que más cuesta. En español el futuro adivina (“serán las cinco”, “estará en casa”), pero en inglés “it will be five” y “he will be home” suenan a predicción o a promesa, no a suposición. El inglés tapa ese hueco con modales: “must be”, “must have been”, “might be”. Un colombiano que traduce el futuro literalmente se hace entender, pero suena raro; el salto está en cambiar de tiempo verbal a modal cuando lo que hace es adivinar."
        },
        {
          label: "“Must” hace dos trabajos",
          body:
            "Donde el español separa la obligación (“debe”) de la suposición (“debe de”) con una palabrita, el inglés usa el mismo “must” para las dos y deja que el contexto decida. “You must be tired” es una deducción; “You must sign here” es una orden. No hay marca gramatical que los distinga, así que el oído del colombiano tiene que aprender a leer la situación en vez de buscar un “de”. Para la obligación, además, el inglés diario prefiere “have to”."
        },
        {
          label: "El “'ll” que adivina",
          body:
            "Hay un rincón muy británico donde el futuro sí adivina: “That'll be the postman”, “That'll be him now”. Es informal, casi siempre con llegadas, timbres y ruidos, y equivale a “ese debe de ser”. No lo use en un ensayo, pero reconózcalo en el habla, porque es constante en Inglaterra. Es la excepción que confirma la regla: el inglés, para adivinar, casi siempre prefiere “must”."
        },
        {
          label: "La escalera de la certeza",
          body:
            "Los modales de conjetura forman una escalera: “must” (casi seguro), “should” (esperable), “might / may / could” (posible), “can't” (deducción negativa, imposible). “He must be home / He might be home / He can't be home” recorren esa escala fina. El español la cubre con el futuro y con hedges como “de pronto” o “capaz”; el inglés la reparte entre modales. Elegir el peldaño correcto es lo que hace que una suposición suene medida y natural."
        }
      ],
      pitfalls: [
        {
          mistake: "He will be tired after that long trip.",
          whyItFails:
            "Con “will” la frase suena a predicción o promesa, no a la suposición “debe de estar cansado”. Para adivinar sobre el presente el inglés usa “must be”, no el futuro. El calco del futuro español es el error número uno de conjetura.",
          sayInstead: "He must be tired after that long trip."
        },
        {
          mistake: "He must arrived at the station an hour ago.",
          whyItFails:
            "Para adivinar sobre el pasado hace falta “have + participio”: “he must have arrived”. “Must arrived” mezcla un modal con un pasado suelto y no es inglés. El “have” es justo lo que traduce el “habrá / haber” del español.",
          sayInstead: "He must have arrived at the station an hour ago."
        },
        {
          mistake: "That can be him at the door right now.",
          whyItFails:
            "Para una suposición puntual (¿será él?), el inglés usa “could be” o “might be”, no “can be”. “Can” expresa capacidad o posibilidad general, así que “that can be him” suena a otra cosa. La conjetura sobre este caso pide “could/might”.",
          sayInstead: "That could be him at the door right now."
        },
        {
          mistake: "Is possible that he missed the first bus.",
          whyItFails:
            "El calco de “es posible que” se come el sujeto “it” y arrastra un aire de subjuntivo que el inglés no tiene. Lo natural es adivinar con un modal, “he might have missed…”, o decir “it's possible he missed…”, con “it” y sin subjuntivo.",
          sayInstead: "He might have missed the first bus."
        }
      ],
      variations: [
        {
          form: "He must be on his way.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "“Must” para deducir el presente, como “debe de estar”."
        },
        {
          form: "He must have missed the bus.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "“Must have + participio” para adivinar el pasado reciente."
        },
        {
          form: "It'll be about five.",
          register: "amistoso informal",
          region: "Inglés británico",
          whenToUse: "El “'ll” informal para adivinar la hora, como “serán las cinco”."
        },
        {
          form: "He might already be here.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "“Might” para la conjetura tentativa, como “puede que esté”."
        },
        {
          form: "He probably won't call.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "“Probably” como hedge de palabra suelta, sin tocar el verbo."
        }
      ],
      prompt: "En inglés, ¿cómo se adivina “ya habrá llegado” (una suposición sobre el pasado reciente)?",
      choices: [
        "He will arrive at the station by now, so we can stop worrying about the exact time.",
        "He must have arrived at the station by now, so we can stop worrying about the time.",
        "He will have arrive at the station by now, so we can stop worrying about the time."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál oración adivina la hora de forma natural en inglés?",
          choices: [
            "It must be about five, so the last bus should still be running for a while yet.",
            "It will be about five o'clock, so the last bus should still be running for a while.",
            "It is going to be about five, so the last bus should still be running for a while."
          ],
          answer: 0,
          tests: "Para adivinar la hora actual el inglés usa “it must be…”; “will be” y “is going to be” suenan a predicción."
        },
        {
          prompt: "Para una conjetura puntual (¿será él?), ¿cuál modal suena natural?",
          choices: [
            "That can be him at the door, so go ahead and open it right now for him.",
            "That must to be him at the door, so go ahead and open it right now for him.",
            "That could be him at the door, so go ahead and open it right now for him."
          ],
          answer: 2,
          tests: "Para una suposición puntual se usa “could/might be”; “can be” es posibilidad general y “must to” no existe."
        },
        {
          prompt: "¿Cuál versión evita el calco de “es posible que perdiera el bus”?",
          choices: [
            "Is possible that he missed the first bus, and that is why he is not here.",
            "He might have missed the first bus, and that is why he is not here yet.",
            "It possible he missed the first bus, and that is why he is not here now."
          ],
          answer: 1,
          tests: "El inglés adivina con “he might have missed…”; el calco “Is possible that…” se come el sujeto “it”."
        }
      ]
    },
  },
  {
    id: "conceding-a-point-in-popayan",
    level: "Extending · Plans and decisions",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "study-and-academia",
    register: "formal",
    pathways: ["extension", "collegiate-academic"],
    structure: "concession",
    review: "pending",
    es: {
      title: "Even though it rained, we went out: conceding a point",
      situation:
        "You are in Popayán, the white city, in the middle of Holy Week. You accompany Marcela, a visiting student, and don Efraín, a caucano with a slow voice, as they wait for the procession to leave through the historic center. Pay close attention to how don Efraín concedes a point: when something already happened and is a fact, he says “aunque” with the indicative; when it is only a possibility, he jumps to the subjunctive. That tiny shift in mood changes everything.",
      setting: {
        who: "Marcela is a visiting student, curious and courteous; don Efrain is an older payanes who has walked these Holy Week processions all his life. Between them the talk stays formal and warm, the way strangers speak in Popayan.",
        what: "A conversation on a packed sidewalk about whether the procession will go out despite the rain, and how the city concedes to the weather without ever giving up its ritual.",
        when: "Holy Week, at dusk, as the rain threatens and the first bearers line up along the route.",
        where: "Popayan, the white colonial city in Cauca, in the historic center near the processional route.",
        why: "Concession is the heart of courteous, careful speech, and Popayan -- academic, ceremonious, proud of its Semana Santa -- is exactly where the mood contrast on aunque earns its keep."
      },
      address: {
        form: "usted",
        who: "Marcela and don Efrain use usted with each other, as near-strangers and out of Popayan's ceremonious courtesy; the age gap makes the choice automatic.",
        why: "In Popayan usted is the default even for warmth, and the formal register suits an extension-level lesson; tuteo here would sound abrupt between a student and an older man.",
        ifYouSwitch:
          "Switching to tu with don Efrain would sound forward, even disrespectful; the courteous distance is part of how a concession is offered and accepted in this city."
      },
      dialogue: [
        {
          speaker: "Marcela",
          target: "Aunque llovió toda la madrugada, la procesión del Santo Sepulcro salió puntual anoche.",
          translation: "Even though it rained all through the early morning, last night's Holy Sepulchre procession set out right on time.",
          pronunciation: "aun-ke yo-BIÓ TÓ-da la ma-dru-GÁ-da, la pro-se-SIÓN del SÁN-to se-PÚL-kro sa-LIÓ PÚN-tual a-NÓ-che",
          literal: "Although it-rained all the dawn, the procession of-the Holy Sepulchre it-left punctual last-night.",
          why: "Here “aunque” takes the indicative (“llovió”) because the rain is a known, settled fact. This is the concession of something real: yes, it rained, and even so the procession went out."
        },
        {
          speaker: "don Efraín",
          target: "Así es. Y aunque llueva esta noche, le aseguro que los cargueros salen igual.",
          translation: "That's right. And even if it rains tonight, I assure you the bearers will go out just the same.",
          pronunciation: "a-SÍ es. i aun-ke YUÉ-ba ÉS-ta NÓ-che, le a-se-GÚ-ro ke los kar-GUÉ-ros SÁ-len i-GUÁL",
          literal: "So is. And although it-rain this night, to-you I-assure that the bearers leave equal.",
          why: "Now “aunque” takes the subjunctive (“llueva”) because tonight's rain is only a possibility, not yet a fact. Same word, opposite mood: “llovió” concedes what happened, “llueva” concedes what might."
        },
        {
          speaker: "Marcela",
          target: "A pesar de que hay tanta gente en la calle, uno respira un silencio impresionante.",
          translation: "Despite there being so many people in the street, you breathe in an astonishing silence.",
          pronunciation: "a pe-SÁR de ke ai TÁN-ta GÉN-te en la KÁ-ye, Ú-no res-PÍ-ra un si-LÉN-sio im-pre-sio-NÁN-te",
          literal: "In spite of that there-is so-much people in the street, one breathes a silence impressive.",
          why: "“A pesar de que” works just like “aunque”: with the indicative (“hay”) it concedes a plain fact. Note the “de”: the standard form is “a pesar de que”, never “a pesar que”."
        },
        {
          speaker: "don Efraín",
          target: "Por más que uno se lo explique, señorita, esto no se entiende hasta que se vive.",
          translation: "No matter how much you explain it, miss, this isn't understood until you live it.",
          pronunciation: "por mas ke Ú-no se lo eks-PLÍ-ke, se-nio-RÍ-ta, ÉS-to no se en-TIÉN-de ÁS-ta ke se BÍ-be",
          literal: "For more that one to-itself it explain, miss, this not itself understands until that itself lives.",
          why: "“Por más que” (“no matter how much”) leans on the subjunctive (“explique”) because it concedes a hypothetical, repeated effort. It's the courteous, slightly literary way to wave off an argument."
        },
        {
          speaker: "Marcela",
          target: "Dicen que la lluvia arrecia. Aun así, no pienso perderme el paso del Amo Jesús.",
          translation: "They say the rain is getting heavier. Even so, I don't intend to miss the Amo Jesús float.",
          pronunciation: "DÍ-sen ke la YÚ-bia a-RRÉ-sia. aun a-SÍ, no PIÉN-so per-DÉR-me el PÁ-so del Á-mo je-SÚS",
          literal: "They-say that the rain intensifies. Even so, not I-think to-lose-me the step of-the Master Jesus.",
          why: "“Aun así” (“even so”) is a connector, not a clause-opener: it sits between two sentences and concedes the first before pushing on. Note “aun” with no accent here -- it means “incluso”, not “todavía”."
        },
        {
          speaker: "don Efraín",
          target: "Hágale, pues. De todos modos yo la acompaño, aunque sea hasta la Ermita no más.",
          translation: "Go ahead, then. In any case I'll go with you, even if only as far as the Ermita.",
          pronunciation: "Á-ga-le, pues. de TÓ-dos MÓ-dos yo la a-kom-PÁ-nio, aun-ke SÉ-a ÁS-ta la er-MÍ-ta no mas",
          literal: "Do-it, then. Of all ways I to-her accompany, although it-be until the Hermitage no more.",
          why: "“De todos modos” (“in any case”) is a standalone concessive connector. And “aunque sea” + subjunctive here means “even if only” -- a small, gracious concession scaling the offer down without withdrawing it."
        }
      ],
      vocabulary: [
        {
          term: "aunque (+ indicativo)",
          explanation:
            "“Aunque” with the indicative concedes a fact you treat as real and known: “Aunque llovió, salimos” = it did rain, and we still went. The indicative signals you're standing on solid ground.",
          literal: "even though / although",
          useWhen:
            "Conceding something real and settled: “Aunque es caro, lo vale”, “Aunque llegó tarde, alcanzó a entrar”.",
          avoidWhen:
            "The thing is only possible or not yet confirmed: then you need the subjunctive (“aunque llueva”).",
          register: "neutral",
          region: "Universal Spanish; the everyday backbone of concession across Colombia.",
          related: ["a pesar de que", "aunque (+ subjuntivo)", "si bien", "pese a que"],
          example: {
            target: "Aunque llovió toda la madrugada, la procesión salió.",
            translation: "Even though it rained all dawn, the procession went out."
          }
        },
        {
          term: "aunque (+ subjuntivo)",
          explanation:
            "“Aunque” with the subjunctive concedes a possibility, a hypothesis, or a point you won't vouch for: “Aunque llueva, salimos” = even if it rains (it may or may not), we're going. Same word, opposite footing.",
          literal: "even if / even though (unconfirmed)",
          useWhen:
            "Conceding the not-yet-real or the disputed: “Aunque cueste, lo compro”, “Aunque sea difícil, hay que intentarlo”.",
          avoidWhen:
            "The event is a known fact: then the indicative is the honest choice (“aunque costó”).",
          register: "neutral",
          region: "Universal Spanish; the mood contrast is alive and meaningful everywhere.",
          related: ["aunque (+ indicativo)", "por más que", "así sea", "aun cuando"],
          example: {
            target: "Aunque llueva esta noche, los cargueros salen igual.",
            translation: "Even if it rains tonight, the bearers go out all the same."
          }
        },
        {
          term: "a pesar de que",
          explanation:
            "A heavier synonym of “aunque”. It takes the indicative for a fact (“a pesar de que hay gente”) and the subjunctive for a hypothesis (“a pesar de que llueva”). Keep the “de”: “a pesar que” is a common slip.",
          literal: "despite the fact that",
          useWhen:
            "You want a slightly more formal, written-sounding concession than plain “aunque”.",
          avoidWhen:
            "You drop the “de” or add “que” to the noun version: it's “a pesar de la lluvia” but “a pesar de que llueve”.",
          register: "neutral",
          region: "Universal Spanish; frequent in careful and written registers.",
          related: ["aunque (+ indicativo)", "pese a que", "a pesar de", "no obstante"],
          example: {
            target: "A pesar de que hay tanta gente, se respira silencio.",
            translation: "Despite there being so many people, a silence hangs in the air."
          }
        },
        {
          term: "por más que",
          explanation:
            "“No matter how much”. It usually takes the subjunctive because it concedes a hypothetical or repeated effort: “Por más que llueva, no me la pierdo”. It's emphatic and a touch literary.",
          literal: "no matter how much",
          useWhen:
            "Conceding an effort that won't change the outcome: “Por más que insista, no cede”.",
          avoidWhen:
            "You mean a single settled fact -- there plain “aunque” with the indicative is cleaner.",
          register: "neutral",
          region: "Universal Spanish; “por mucho que” is an equally good variant.",
          related: ["por mucho que", "aunque (+ subjuntivo)", "así sea", "aun cuando"],
          example: {
            target: "Por más que uno lo explique, no se entiende hasta vivirlo.",
            translation: "No matter how much you explain it, you don't get it until you live it."
          }
        },
        {
          term: "aun así",
          explanation:
            "“Even so”. A connector that concedes the previous sentence and then pushes past it: “Llueve. Aun así, salimos”. Written with no accent on “aun” (it means “incluso”, not “todavía”).",
          literal: "even so / still",
          useWhen:
            "Linking two sentences: concede the first, then state what happens anyway.",
          avoidWhen:
            "You need to open a subordinate clause -- for that you want “aunque”, not “aun así”.",
          register: "neutral",
          region: "Universal Spanish; extremely common as a discourse connector.",
          related: ["de todos modos", "así y todo", "con todo", "sin embargo"],
          example: {
            target: "Dicen que la lluvia arrecia. Aun así, no pienso perderme el paso.",
            translation: "They say the rain's getting heavier. Even so, I won't miss the float."
          }
        },
        {
          term: "de todos modos",
          explanation:
            "“In any case / anyway”. A standalone concessive connector that brushes objections aside: “De todos modos yo la acompaño”. Interchangeable with “de todas formas” and “de todas maneras”.",
          literal: "anyway / in any case",
          useWhen:
            "Signaling that what follows holds regardless of everything just said.",
          avoidWhen:
            "You want to subordinate a specific clause: that's the job of “aunque”, not this connector.",
          register: "neutral",
          region: "Universal Spanish; “de todos modos” and “de todas formas” are equally Colombian.",
          related: ["de todas formas", "de todas maneras", "aun así", "igual"],
          example: {
            target: "De todos modos yo la acompaño hasta la Ermita.",
            translation: "In any case, I'll walk with you as far as the Ermita."
          }
        },
        {
          term: "aun cuando",
          explanation:
            "A formal, ceremonious “even when / even though”. It patterns like “aunque” for mood -- indicative for fact, subjunctive for hypothesis -- and lends a careful, written tone that suits Popayán.",
          literal: "even when / even though (formal)",
          useWhen:
            "Formal or written concession: “Aun cuando la ley lo permita, conviene consultar”.",
          avoidWhen:
            "Casual speech among friends, where it can sound stiff -- plain “aunque” fits better.",
          register: "formal",
          region: "Universal Spanish; leans literary and administrative.",
          related: ["aunque (+ subjuntivo)", "si bien", "aun a riesgo de", "por más que"],
          example: {
            target: "Aun cuando llueva, la ceremonia se mantiene sin cambios.",
            translation: "Even when it rains, the ceremony is kept unchanged."
          }
        }
      ],
      note:
        "Concession is where Spanish makes you choose a mood, and that choice carries the meaning. With “aunque”, the indicative concedes a fact you treat as real -- “Aunque llovió, salimos” means it did rain and we went anyway -- while the subjunctive concedes a possibility or a point you won't confirm -- “Aunque llueva, salimos” means even if it rains, real or not, we're going. No other single switch in the language turns the sense so sharply, so this contrast is the spine of the lesson. The same logic drives “a pesar de que” (keep the “de”), and “por más que” and the formal “aun cuando” lean on the subjunctive for hypotheticals. Alongside the clause-openers sit the connectors: “aun así” (even so) and the standalone “de todos modos / de todas formas” (anyway), which concede a whole sentence and move on. Watch two traps: don't drop the “de” in “a pesar de que”, and don't pile a redundant “pero” after an “aunque” clause. In courteous, careful Popayán, choosing the mood well is choosing exactly how much you're willing to grant.",
      culture: [
        {
          label: "One mood switch, two meanings",
          body:
            "“Aunque llovió, salimos” and “Aunque llueva, salimos” differ by a single vowel, yet they say different things. The first concedes a fact: it rained, we went. The second concedes a possibility: even if it rains -- and we don't yet know -- we're going. Spanish forces you to decide whether the concession is real or hypothetical, and the indicative/subjunctive split carries that decision. It's one of the clearest places where mood isn't decoration but meaning, and mastering it is a genuine step up in the language."
        },
        {
          label: "The family of concession",
          body:
            "Beyond “aunque”, the same job is shared by a small family: “a pesar de que” (a touch more formal, and always with the “de”), “por más que” and “por mucho que” (no matter how much, usually subjunctive), and the formal “aun cuando”. Then come the connectors that concede a whole sentence rather than open a clause: “aun así” (even so) and the standalone “de todos modos / de todas formas / de todas maneras” (anyway). Knowing which is a clause-opener and which is a connector keeps your sentences from tangling."
        },
        {
          label: "Popayán, courtesy, and register",
          body:
            "Popayán, the white city of Cauca, is famously ceremonious: usted is the default, its Semana Santa processions are UNESCO heritage, and the Universidad del Cauca has fed the country presidents and grammarians. It's a place where careful, conceding speech is at home, which is why the formal “aun cuando”, the measured “a pesar de que”, and the courteous scaling-down of “aunque sea hasta la Ermita no más” all sound natural on its sidewalks. Register and setting reinforce each other here."
        },
        {
          label: "Conceding without surrendering",
          body:
            "A concession isn't a defeat; it grants a point in order to hold a bigger one. “Aunque llueva” gives the rain its due and then goes to the procession anyway; “por más que uno lo explique” admits the effort and still insists the thing must be lived. This rhetorical move -- yield the small, keep the large -- is the everyday music of polite disagreement in Colombia, and it runs on exactly the connectors and moods this lesson drills."
        }
      ],
      pitfalls: [
        {
          mistake: "Aunque llueve mañana, salimos igual.",
          whyItFails:
            "The rain tomorrow is only a possibility, so “aunque” must take the subjunctive: “aunque llueva mañana”. Using the present indicative “llueve” for a not-yet event is the single most common concession error, and it flattens the fact/hypothesis contrast the language depends on.",
          sayInstead: "Aunque llueva mañana, salimos igual."
        },
        {
          mistake: "Aunque haya sido caro, lo compré sin pensarlo.",
          whyItFails:
            "If the price is a known fact you already acted on, the concession is real and wants the indicative: “aunque fue caro” or “aunque era caro”. The perfect subjunctive here treats a settled fact as hypothetical, which contradicts the “lo compré” that follows.",
          sayInstead: "Aunque fue caro, lo compré sin pensarlo."
        },
        {
          mistake: "A pesar que llovía, la gente aguardó en la calle.",
          whyItFails:
            "The standard form keeps the preposition: “a pesar de que”. Dropping the “de” is a common slip in speech and looks wrong in writing. Use “a pesar de que llovía” or the noun “a pesar de la lluvia”.",
          sayInstead: "A pesar de que llovía, la gente aguardó en la calle."
        },
        {
          mistake: "Aunque estudié mucho, pero no pasé el examen.",
          whyItFails:
            "“Aunque” already carries the contrast, so adding “pero” is redundant -- like saying “although... but”. Use one: “Aunque estudié mucho, no pasé” or “Estudié mucho, pero no pasé”.",
          sayInstead: "Aunque estudié mucho, no pasé el examen."
        }
      ],
      variations: [
        {
          form: "Aunque llovió, la procesión salió puntual.",
          register: "neutral",
          region: "Colombia y toda Hispanoamérica",
          whenToUse: "Indicative for a fact you treat as real: it rained, and it still went out."
        },
        {
          form: "Aunque llueva, la procesión sale igual.",
          register: "neutral",
          region: "Colombia y toda Hispanoamérica",
          whenToUse: "Subjunctive for a possibility: even if it rains, confirmed or not, it goes."
        },
        {
          form: "A pesar de que hay gente, se respira silencio.",
          register: "neutral",
          region: "Registro cuidado",
          whenToUse: "A slightly more formal concession of a plain fact, with the “de” kept."
        },
        {
          form: "Por más que llueva, no me pierdo el paso.",
          register: "neutral",
          region: "Colombia y toda Hispanoamérica",
          whenToUse: "Emphatic concession of a hypothetical effort, driving the subjunctive."
        },
        {
          form: "De todos modos la acompaño hasta la Ermita.",
          register: "neutral",
          region: "Colombia y toda Hispanoamérica",
          whenToUse: "Standalone connector: whatever was just said, this holds anyway."
        }
      ],
      prompt: "You know for a fact it rained last night, and you're conceding that real, settled event. Which sentence is right?",
      choices: [
        "Aunque llueva toda la madrugada, la procesión salió puntual y en completo silencio anoche.",
        "Aunque lloviera toda la madrugada, la procesión salió puntual y en completo silencio anoche.",
        "Aunque llovió toda la madrugada, la procesión salió puntual y en completo silencio anoche."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "It might rain tonight -- it hasn't yet. Which sentence concedes that mere possibility?",
          choices: [
            "Aunque llovió esta noche, los cargueros salen igual y cargan los pasos hasta la madrugada.",
            "Aunque llueva esta noche, los cargueros salen igual y cargan los pasos hasta la madrugada.",
            "Aunque llueve esta noche, los cargueros salen igual y cargan los pasos hasta la madrugada."
          ],
          answer: 1,
          tests: "A not-yet, possible event takes the subjunctive after aunque: “llueva”, not the indicative “llovió” or “llueve”."
        },
        {
          prompt: "Which sentence keeps the standard written form, with no dropped word and no redundant one?",
          choices: [
            "A pesar de que llovía sin parar, la gente aguardó en la calle toda la noche entera.",
            "A pesar que llovía sin parar, la gente aguardó en la calle toda la noche entera fría.",
            "Aunque llovía sin parar, pero la gente aguardó en la calle toda la noche entera."
          ],
          answer: 0,
          tests: "It's “a pesar de que” (keep the “de”), and “aunque” never pairs with a redundant “pero”."
        },
        {
          prompt: "Which sentence uses the standalone connector correctly to mean “even so”?",
          choices: [
            "Dicen que la lluvia arrecia; aún así, nadie piensa moverse de la Calle de la Amargura.",
            "Dicen que la lluvia arrecia; aunque así, nadie piensa moverse de la Calle de la Amargura.",
            "Dicen que la lluvia arrecia; aun así, nadie piensa moverse de la Calle de la Amargura."
          ],
          answer: 2,
          tests: "The connector is “aun así” (no accent on “aun”, meaning “incluso”); “aún así” misspells it and “aunque así” is not a connector."
        }
      ]
    },
    en: {
      title: "Even though / even if: conceder en inglés",
      situation:
        "Imagínese en Austin, en la costa oeste de Estados Unidos, bajo una llovizna terca. Usted acompaña a Camilo, un colombiano que lleva poco allá, y a su amigo Liam mientras esperan un desfile. Note que el inglés no cambia el modo del verbo para conceder: usa palabras distintas -- “even though” para un hecho y “even if” para una hipótesis -- justo donde el español salta al subjuntivo.",
      setting: {
        who: "Liam es un estadounidense relajado y directo; Camilo es un colombiano recién llegado que aprende a conceder en inglés sin calcar el “aunque... pero” del español.",
        what: "Una charla en la acera sobre si el desfile saldrá pese a la lluvia, y sobre cómo el inglés concede con palabras distintas en vez de con el modo del verbo.",
        when: "Una tarde lluviosa de otoño, minutos antes de que arranque el desfile por el centro.",
        where: "Austin, en la costa oeste de Estados Unidos, en una esquina concurrida del centro.",
        why: "Conceder es parte del habla cortés en cualquier idioma, y en inglés el reto es que la diferencia entre hecho e hipótesis no está en el modo del verbo, sino en elegir “even though” o “even if”."
      },
      address: {
        form: "mixed",
        who: "Liam y Camilo se tratan por el nombre, como amigos; el inglés no distingue tú de usted, así que toda la cercanía va en el tono y en el saludo.",
        why: "El inglés usa un solo “you” para todo el mundo. Lo marcamos como “mixed” porque no hay una elección de tú o usted que hacer: la formalidad se expresa por otros medios.",
        ifYouSwitch:
          "Si Camilo quisiera sonar más formal con Liam, no podría cambiar el pronombre; suavizaría con “would you mind” o con un saludo más cuidado. El “you” no se mueve."
      },
      dialogue: [
        {
          speaker: "Liam",
          target: "Even though it rained all morning, the parade still went ahead right on time.",
          translation: "Aunque llovió toda la mañana, el desfile salió puntual de todos modos.",
          pronunciation: "Í-ven dou it réind ol MÓR-ning, de pa-RÉID stil uent a-JÉD rait on táim",
          literal: "Aun aunque ello llovió toda mañana, el desfile todavía fue adelante justo en tiempo.",
          why: "“Even though” concede un hecho conocido -- llovió, y aun así el desfile salió. Equivale a “aunque” con indicativo. “Even though” es un poco más enfático que “although”, pero funcionan igual."
        },
        {
          speaker: "Camilo",
          target: "And even if it rains again tonight, they'll march anyway. Nothing stops them.",
          translation: "Y aunque llueva otra vez esta noche, marcharán de todos modos. Nada los detiene.",
          pronunciation: "and Í-ven if it réins a-GUÉN tu-NÁIT, deil march É-ni-uei. NÁ-zing stops dem",
          literal: "Y aun si ello llueve otra-vez esta-noche, ellos-van marchar de-todos-modos. Nada para los.",
          why: "“Even if” concede una hipótesis: puede llover o no. Es justo lo que el español marca con el subjuntivo (“aunque llueva”). El inglés no cambia el verbo; cambia de “even though” a “even if”."
        },
        {
          speaker: "Liam",
          target: "Despite the huge crowd, you can hear a pin drop when the float passes.",
          translation: "A pesar de la enorme multitud, se oye hasta el vuelo de una mosca cuando pasa el paso.",
          pronunciation: "des-PÁIT de jiúch kráud, yu kan jíar a pin drop juen de flóut PÁ-ses",
          literal: "A-pesar el enorme gentío, tú puedes oír un alfiler caer cuando el paso pasa.",
          why: "“Despite” (y “in spite of”) van con sustantivo o gerundio, no con una cláusula “that...”. Aquí es “despite the crowd”. Para una cláusula habría que decir “although” o “in spite of the fact that”."
        },
        {
          speaker: "Camilo",
          target: "No matter how much I explain it back home, people don't get it until they see it.",
          translation: "Por más que lo explico allá, la gente no lo entiende hasta que lo ve.",
          pronunciation: "no MÁ-ter jau moch ai eks-PLÉIN it bak jóum, PÍ-pol dont guet it an-TÍL dei si it",
          literal: "No importa cuánto mucho yo explico ello atrás casa, gente no-hacen agarrar ello hasta ellos ven ello.",
          why: "“No matter how much” es la traducción natural de “por más que”; nunca se calca palabra por palabra. También sirve “however much I explain it”. Concede un esfuerzo que no cambia el resultado."
        },
        {
          speaker: "Liam",
          target: "They say the rain's picking up. Even so, I'm not missing the main float tonight.",
          translation: "Dicen que la lluvia arrecia. Aun así, no me voy a perder el paso principal esta noche.",
          pronunciation: "dei séi de réins PÍ-king ap. Í-ven sóu, aim not MÍ-sing de méin flóut tu-NÁIT",
          literal: "Ellos dicen la lluvia-está recogiendo arriba. Aun así, yo-estoy no perdiendo el principal paso esta-noche.",
          why: "“Even so” (“aun así”) es un conector: concede la frase anterior y sigue adelante. No abre una cláusula subordinada como “even though”; enlaza dos oraciones."
        },
        {
          speaker: "Camilo",
          target: "Fair enough. Anyway, I'll walk with you, even if it's only to the corner.",
          translation: "Está bien. De todos modos te acompaño, aunque sea solo hasta la esquina.",
          pronunciation: "fer i-NÁF. É-ni-uei, ail uok uid yu, Í-ven if its ÓUN-li tu de KÓR-ner",
          literal: "Justo suficiente. De-todos-modos, yo-voy caminar con tú, aun si ello-es solo a la esquina.",
          why: "“Anyway” (“de todos modos”) es un conector suelto que hace a un lado las objeciones. Y “even if it's only...” = “aunque sea solo...”, una concesión pequeña que reduce la oferta sin retirarla."
        }
      ],
      vocabulary: [
        {
          term: "although / even though",
          explanation:
            "Conceden un hecho que se da por real: “Although it rained, we went” = aunque llovió, fuimos. Equivalen a “aunque” con indicativo. “Even though” es algo más enfático que “although”.",
          literal: "aunque (hecho)",
          useWhen:
            "Conceder algo real y sabido: “Although it's expensive, it's worth it”, “Even though he was late, he got in”.",
          avoidWhen:
            "Lo que concede es solo una posibilidad futura: ahí se usa “even if”, no “even though”.",
          register: "neutro",
          region: "Inglés universal; “even though” es un poco más enfático que “although”.",
          related: ["even if", "though", "in spite of", "whereas"],
          example: {
            target: "Even though it rained all morning, the parade went ahead.",
            translation: "Aunque llovió toda la mañana, el desfile salió."
          }
        },
        {
          term: "even if",
          explanation:
            "Concede una hipótesis: “Even if it rains, we'll go” = aunque llueva, iremos, llueva o no. Es la palabra con la que el inglés marca lo que el español pone en subjuntivo tras “aunque”.",
          literal: "aunque (hipótesis)",
          useWhen:
            "Conceder lo aún no real: “Even if it costs more, I'll buy it”, “Even if it's hard, we'll try”.",
          avoidWhen:
            "El hecho ya ocurrió y se da por cierto: ahí es “even though” o “although”.",
          register: "neutro",
          region: "Inglés universal; la distinción con “even though” es constante.",
          related: ["even though", "no matter if", "whether or not", "should it"],
          example: {
            target: "Even if it rains again tonight, they'll march anyway.",
            translation: "Aunque llueva otra vez esta noche, marcharán igual."
          }
        },
        {
          term: "in spite of / despite",
          explanation:
            "“A pesar de”. Van con sustantivo o gerundio, nunca con una cláusula “that...”: “despite the rain”, “in spite of raining”. Para una cláusula hay que decir “in spite of the fact that”.",
          literal: "a pesar de",
          useWhen:
            "Conceder frente a un sustantivo: “despite the crowd”, “in spite of the cold”, “despite being tired”.",
          avoidWhen:
            "Quiere meter una cláusula con verbo conjugado: ahí use “although”, no “despite that...”.",
          register: "neutro",
          region: "Inglés universal; “despite” es algo más frecuente en lo escrito.",
          related: ["although", "regardless of", "notwithstanding", "for all"],
          example: {
            target: "Despite the huge crowd, the street stayed silent.",
            translation: "A pesar de la enorme multitud, la calle quedó en silencio."
          }
        },
        {
          term: "no matter how / no matter what",
          explanation:
            "Traducen “por más que” y “pase lo que pase”: “no matter how much I explain”, “no matter what happens”. Conceden un esfuerzo o una circunstancia que no cambia el desenlace.",
          literal: "por más que / pase lo que pase",
          useWhen:
            "Conceder cualquier grado o circunstancia: “no matter how hard it rains”, “no matter what they say”.",
          avoidWhen:
            "Calca el español con “by more that” o “for more than”: eso no es inglés.",
          register: "neutro",
          region: "Inglés universal; “however much / however hard” es un equivalente más formal.",
          related: ["however much", "regardless", "whatever", "no matter if"],
          example: {
            target: "No matter how much I explain it, they don't get it.",
            translation: "Por más que lo explico, no lo entienden."
          }
        },
        {
          term: "even so",
          explanation:
            "“Aun así”. Un conector que concede la frase anterior y sigue adelante: “It's raining. Even so, we're going.” No abre cláusula; enlaza dos oraciones.",
          literal: "aun así",
          useWhen:
            "Enlazar dos frases: conceder la primera y afirmar lo que pasa a pesar de ella.",
          avoidWhen:
            "Necesita subordinar una cláusula con sujeto y verbo: para eso está “even though”.",
          register: "neutro",
          region: "Inglés universal; muy común como conector de discurso.",
          related: ["anyway", "still", "nevertheless", "all the same"],
          example: {
            target: "The rain's picking up. Even so, I'm not missing the float.",
            translation: "La lluvia arrecia. Aun así, no me pierdo el paso."
          }
        },
        {
          term: "anyway / in any case",
          explanation:
            "“De todos modos / de todas formas”. Conector suelto que hace a un lado lo dicho: “Anyway, I'll go with you.” Muy frecuente también para cambiar de tema.",
          literal: "de todos modos",
          useWhen:
            "Señalar que lo que sigue se sostiene pase lo que pase, o cerrar un tema.",
          avoidWhen:
            "Quiere abrir una cláusula concesiva concreta: eso lo hace “even though”, no “anyway”.",
          register: "amistoso informal",
          region: "Inglés universal; “anyway” es más de habla, “in any case” más neutro.",
          related: ["even so", "in any case", "at any rate", "regardless"],
          example: {
            target: "Anyway, I'll walk with you to the corner.",
            translation: "De todos modos te acompaño hasta la esquina."
          }
        },
        {
          term: "though (end position)",
          explanation:
            "El “though” al final de la frase, muy inglés y muy hablado: “It was cold. We went, though.” Equivale a “sin embargo / eso sí”, colocado al final como un remate.",
          literal: "sin embargo (al final)",
          useWhen:
            "Rematar una frase con una objeción suave: “It's pricey. It's good, though.”",
          avoidWhen:
            "En un texto muy formal, donde “however” al inicio queda mejor que un “though” final.",
          register: "amistoso informal",
          region: "Inglés universal, muy conversacional; rarísimo en registro solemne.",
          related: ["however", "even so", "mind you", "then again"],
          example: {
            target: "It was pouring. We went, though.",
            translation: "Estaba diluviando. Fuimos, eso sí."
          }
        }
      ],
      note:
        "El inglés concede con palabras distintas donde el español cambia el modo del verbo. “Even though” y “although” conceden un hecho que se da por real -- “Even though it rained, we went” = aunque llovió, fuimos -- mientras que “even if” concede una hipótesis -- “Even if it rains, we'll go” = aunque llueva, iremos. Esa oposición “even though / even if” es justo la que el español marca con indicativo frente a subjuntivo, y es el corazón de la lección. Al lado están “in spite of / despite” (con sustantivo o gerundio, nunca con “that...”), “no matter how / no matter what” para “por más que”, y los conectores “even so” (aun así), “anyway / in any case” (de todos modos) y el “though” final tan conversacional. Cuidado con dos calcos: no ponga un “but” después de “although” -- “although... but” es redundante -- y no traduzca “por más que” como “by more that”. Elegir bien entre “even though” y “even if” es, en inglés, elegir cuánto concede.",
      culture: [
        {
          label: "“Even if” frente a “even though”",
          body:
            "Aquí está el corazón del asunto. El español distingue el hecho de la hipótesis con el modo: “aunque llovió” (indicativo, real) frente a “aunque llueva” (subjuntivo, posible). El inglés no toca el verbo; usa dos palabras distintas. “Even though it rained” concede algo real; “even if it rains” concede algo que puede pasar o no. Para el colombiano el reto es no meter “even though” en una hipótesis futura: si aún no ha pasado, casi siempre es “even if”. Elegir la palabra correcta hace en inglés el trabajo que el subjuntivo hace en español."
        },
        {
          label: "El “but” de más",
          body:
            "El error más delator del hispanohablante es el “although... but”. En español uno oye “aunque llovió, pero salimos”, y al pasar al inglés se cuela el “but”: “Although it rained, but we went.” En inglés “although” ya carga todo el contraste, así que el “but” sobra. La regla es simple: use “although / even though” al principio, o use “but” en el medio, pero nunca los dos en la misma oración. Quitar ese “but” es una de las correcciones que más rápido suben el nivel."
        },
        {
          label: "“Despite” no lleva cláusula",
          body:
            "“In spite of” y “despite” significan “a pesar de”, y como en español van con un sustantivo o un gerundio: “despite the rain”, “in spite of being tired”. Lo que no aceptan es una cláusula con “that” y verbo conjugado: “despite that it rained” no es inglés. Si uno necesita una cláusula entera, cambia a “although it rained” o al más pesado “in spite of the fact that it rained”. Y ojo: es “despite”, sin “of” -- “despite of” es otro calco frecuente."
        },
        {
          label: "Conectores que rematan",
          body:
            "El inglés tiene conectores concesivos que no abren cláusula sino que enlazan frases: “even so” (aun así), “anyway” y “in any case” (de todos modos), “still”, “all the same”. Y uno muy suyo: el “though” al final, como en “It's expensive. It's worth it, though.” Suena natural y relajado, imposible de calcar directamente del español, donde ese remate iría con “eso sí” o “sin embargo”. Reconocerlos y usarlos da un inglés mucho más idiomático que el que solo repite “although”."
        }
      ],
      pitfalls: [
        {
          mistake: "Although it rained all morning, but we still went to the parade.",
          whyItFails:
            "El “although” ya expresa el contraste, así que el “but” sobra: es el calco de “aunque... pero”. En inglés se usa “although” al principio o “but” en el medio, nunca los dos juntos. Es el error concesivo más típico del hispanohablante.",
          sayInstead: "Although it rained all morning, we still went to the parade."
        },
        {
          mistake: "Even though it rains tomorrow, we will go anyway.",
          whyItFails:
            "La lluvia de mañana es una hipótesis, no un hecho, así que el inglés pide “even if”, no “even though”. “Even though” concede algo real; usarlo para el futuro no ocurrido es justo confundir el indicativo con el subjuntivo del español.",
          sayInstead: "Even if it rains tomorrow, we will go anyway."
        },
        {
          mistake: "Despite that there were so many people, the street was silent.",
          whyItFails:
            "“Despite” e “in spite of” van con sustantivo o gerundio, no con una cláusula “that...”. Para una cláusula hay que decir “although there were so many people” o “in spite of the fact that...”. Además es “despite”, sin “of”.",
          sayInstead: "Despite the huge crowd, the street was silent."
        },
        {
          mistake: "By more that I explain it, people do not understand it.",
          whyItFails:
            "“Por más que” no se traduce palabra por palabra: “by more that” no existe en inglés. La forma natural es “no matter how much I explain it” o “however much I explain it”. El calco literal deja la frase incomprensible.",
          sayInstead: "No matter how much I explain it, people do not understand it."
        }
      ],
      variations: [
        {
          form: "Even though it rained, the parade went ahead.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Concede un hecho real, como “aunque” con indicativo."
        },
        {
          form: "Even if it rains, the parade will go ahead.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Concede una hipótesis, como “aunque” con subjuntivo."
        },
        {
          form: "Despite the rain, the parade went ahead.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "“Despite” + sustantivo, sin cláusula “that...”."
        },
        {
          form: "No matter how hard it rains, they still march.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "“No matter how” para “por más que”, con un esfuerzo o grado."
        },
        {
          form: "It was pouring. We went, though.",
          register: "amistoso informal",
          region: "Inglés conversacional",
          whenToUse: "El “though” final como remate suave, muy hablado."
        }
      ],
      prompt: "Va a llover esta noche, pero todavía no ha pasado: es una hipótesis. ¿Cuál oración concede esa posibilidad en inglés?",
      choices: [
        "Even if it rains tonight, the bearers will carry the floats through the streets anyway.",
        "Even though it rains tonight, the bearers will carry the floats through the streets anyway.",
        "Even it rains tonight, the bearers will carry the floats through the whole streets anyway."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál oración evita el “but” redundante que arrastra el calco de “aunque... pero”?",
          choices: [
            "Although the rain was heavy, but the crowd stayed on the street until well past midnight.",
            "Even though the rain was heavy, but the crowd stayed on the street until real past midnight.",
            "Although the rain was heavy, the crowd stayed on the street until well past midnight tonight."
          ],
          answer: 2,
          tests: "“Although” ya lleva el contraste; añadir “but” es el calco de “aunque... pero” y sobra por completo."
        },
        {
          prompt: "“A pesar de” en inglés va con sustantivo o gerundio, no con una cláusula “that...”. ¿Cuál es correcta?",
          choices: [
            "Despite that there were so many people, the whole street stayed completely silent for it.",
            "Despite the enormous crowd, the whole street stayed completely silent as the float went past.",
            "Despite of the enormous crowd, the whole street stayed completely silent as the float passed."
          ],
          answer: 1,
          tests: "Es “despite + sustantivo” (“despite the crowd”); ni “despite that...” ni “despite of” son inglés correcto."
        },
        {
          prompt: "¿Cuál traduce “por más que lo explico” sin calcarlo palabra por palabra?",
          choices: [
            "No matter how much I explain it, people never really get it until they see it themselves.",
            "By more that I explain it to them, people never really get it until they see it themselves.",
            "For more than I explain it to them, people never really get it until they see it clearly."
          ],
          answer: 0,
          tests: "“Por más que” es “no matter how much / however much”; “by more that” y “for more than” son calcos sin sentido."
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/74-precision-and-concession.js");
