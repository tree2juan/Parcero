/*
 * Lesson block: independent / past time and duration (grammar structures).
 *
 * The course anchors every lesson to a verb, but three measured holes are not
 * verbs at all: the present perfect Colombians usually skip, the pluperfect that
 * barely appears in the corpus, and the hace / desde / llevar family for saying
 * how long. These three grammar lessons close them, set across the Santanderes.
 * This block also adds the preterite versus imperfect decision, because the
 * corpus has 395 imperfect forms and no lesson contrasting the two narrative
 * pasts that learners must choose between at B1.
 */
lessons.push(
  {
    id: "the-present-perfect-and-the-preterite-in-bucaramanga",
    level: "Developing · The present perfect, and when Colombians skip it",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "food-and-drink",
    register: "courteous",
    pathways: ["independent", "year-12"],
    structure: "present-perfect",
    review: "pending",
    es: {
      title: "He comido or comí: the present perfect and when Colombians avoid it",
      situation:
        "In Bucaramanga, Yaneth welcomes Alex to a Santander-style lunch and asks him, very directly, what he has tried and what he still needs to get to know. You will hear the real present perfect — “¿ya has probado?”, “nunca he ido” — and also the bumanguesa habit of handling the same idea with the preterite: “¿ya probó?”. Notice when each one sounds natural.",
      setting: {
        who: "Yaneth is a bumanguesa host with the blunt, direct manner the region is known for. Alex is a guest learning when the present perfect is natural in Colombia and when a local would just use the simple past.",
        what: "A lunch conversation that keeps circling the same question — what have you tried, where have you been — so the present perfect and the preterite land side by side.",
        when: "Around midday, over a heavy Santander lunch, when the table talk is relaxed but pointed.",
        where: "Bucaramanga, the biggest city in the Santander highlands of eastern Colombia.",
        why: "Because this is the honest regional point: where Spain says “he comido”, Bucaramanga usually says “comí”. The perfect still survives with words like “ya”, “todavía no”, “nunca” and “alguna vez”, so a learner needs to handle both at once."
      },
      address: {
        form: "usted",
        who: "Yaneth and Alex use usted, which in Santander is the ordinary, even affectionate default, not a cold or distant choice.",
        why: "Usted here is warm and direct at the same time, which is exactly the Santander register the lesson wants; it also lets the questions arrive as “¿ha probado?” and “¿ha estado?”.",
        ifYouSwitch:
          "If you switch to “tú”, it sounds a little more casual and urban; “usted” in Bucaramanga is not stiff, so there is no need to trade it away to sound warm."
      },
      dialogue: [
        {
          speaker: "Yaneth",
          target: "Siéntese, pues. ¿Usted ya ha probado las hormigas culonas, o todavía no?",
          translation: "Sit down, then. Have you already tried the big-bottomed ants, or not yet?",
          pronunciation: "SYEN-te-se, pwes. oos-TED ya a pro-BA-do las or-MEE-gas ku-LO-nas, o to-da-VEE-a no",
          literal: "Sit-down, then. You already have tried the ants big-bottomed, or still not?",
          why: "The present perfect is natural here because of “ya”: “¿ya ha probado?” asks about experience up to now. Notice “ha probado” — that is “haber” plus a regular participle."
        },
        {
          speaker: "Alex",
          target: "No, todavía no las he probado. ¿Aquí en Bucaramanga son bien típicas?",
          translation: "No, I haven't tried them yet. Are they really typical here in Bucaramanga?",
          pronunciation: "no, to-da-VEE-a no las e pro-BA-do. a-KEE en bu-ka-ra-MAN-ga son byen TEE-pee-kas",
          literal: "No, still not them I-have tried. Here in Bucaramanga are well typical?",
          why: "With “todavía no”, the present perfect is the natural choice: “no las he probado” means the experience hasn't happened up to now. This is exactly where the perfect survives in Colombia."
        },
        {
          speaker: "Yaneth",
          target: "Clásicas de acá. ¿Y sí ha estado alguna vez en el Cañón del Chicamocha?",
          translation: "Classic from here. And have you ever been to the Chicamocha canyon?",
          pronunciation: "KLA-see-kas de a-KA. ee see a es-TA-do al-GU-na ves en el ka-NYON del chee-ka-MO-cha",
          literal: "Classic from here. And yes have been some time in the Canyon of-the Chicamocha?",
          why: "“Alguna vez” pulls the present perfect again: “¿ha estado alguna vez?” is the standard way to ask ‘have you ever been?’. “Ha estado” is “haber” plus the regular participle “estado”."
        },
        {
          speaker: "Alex",
          target: "Nunca he ido, pero he visto muchas fotos. ¿Sí vale la pena el viaje?",
          translation: "I've never gone, but I've seen a lot of photos. Is the trip worth it?",
          pronunciation: "NUN-ka e EE-do, PE-ro e VEES-to MU-chas FO-tos. see VA-le la PE-na el VYA-he",
          literal: "Never I-have gone, but I-have seen many photos. Yes worth the trouble the trip?",
          why: "“Nunca” is another true perfect trigger: “nunca he ido”. Note “he visto”, an irregular participle — “ver” gives “visto”, not the regular form. Learn the set: “visto, hecho, dicho, puesto, vuelto, escrito, abierto, muerto, roto”."
        },
        {
          speaker: "Yaneth",
          target: "Uy, demasiado. Aunque aquí, entre nos, casi siempre decimos ‘¿ya comió?’ y no ‘¿ha comido?’.",
          translation: "Oh, absolutely. Although here, between us, we almost always say “did you eat?” instead of “have you eaten?”.",
          pronunciation: "uy, de-ma-SYA-do. aun-KE a-KEE, EN-tre nos, KA-see SYEM-pre de-SEE-mos ‘ya ko-MYO’ ee no ‘a ko-MEE-do’",
          literal: "Oh, too-much. Although here, between us, almost always we-say ‘already ate?’ and not ‘has eaten?’.",
          why: "This is the honest regional truth: in Bucaramanga the simple past usually replaces the perfect, so “¿ya comió?” is far more common than “¿ha comido?”. The perfect isn't wrong, it just isn't what people reach for."
        },
        {
          speaker: "Alex",
          target: "Listo. ¿Y usted ya almorzó? Porque yo hoy todavía no he almorzado, la verdad.",
          translation: "Got it. And have you had lunch already? Because honestly, today I still haven't had lunch.",
          pronunciation: "LEES-to. ee oos-TED ya al-mor-SO? POR-ke yo oy to-da-VEE-a no e al-mor-SA-do, la ver-DA",
          literal: "Ready. And you already had-lunch? Because I today still not I-have had-lunch, the truth.",
          why: "One sentence, both tenses: “¿ya almorzó?” (simple past, the everyday Colombian choice) next to “todavía no he almorzado” (present perfect, natural with “todavía no”). That contrast is the whole lesson."
        }
      ],
      vocabulary: [
        {
          term: "haber (he, has, ha, hemos, han)",
          explanation:
            "The auxiliary that builds the present perfect: conjugate “haber” and add a participle. It is not the same as “tener”, even though both can translate as ‘to have’.",
          literal: "to have (auxiliary)",
          useWhen:
            "You are forming any perfect tense: “he probado”, “has estado”, “han comido”.",
          avoidWhen:
            "You mean physical possession; that is “tener”, not “haber”.",
          register: "neutral",
          region: "Universal Spanish; the forms are the same across Colombia.",
          related: ["he", "has", "ha", "han"],
          example: {
            target: "Nosotros hemos comido aquí antes.",
            translation: "We have eaten here before."
          }
        },
        {
          term: "el participio (-ado / -ido)",
          explanation:
            "The past participle that pairs with “haber”. Regular verbs end in “-ado” for “-ar” verbs or “-ido” for “-er” and “-ir” verbs.",
          literal: "the participle",
          useWhen:
            "Building a perfect from a regular verb: “hablar” gives “hablado”, “comer” gives “comido”.",
          avoidWhen:
            "The verb is irregular; then you need a memorized form, not the regular ending.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["hablado", "comido", "vivido", "probado"],
          example: {
            target: "Hemos hablado de eso muchas veces.",
            translation: "We have talked about that many times."
          }
        },
        {
          term: "los participios irregulares",
          explanation:
            "The irregular participles you simply memorize: “visto, hecho, dicho, puesto, vuelto, escrito, abierto, muerto, roto”.",
          literal: "the irregular participles",
          useWhen:
            "The verb is “ver, hacer, decir, poner, volver, escribir, abrir, morir” or “romper”.",
          avoidWhen:
            "You are tempted to add the regular ending to them; “ha hacido” is wrong, it is “ha hecho”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["visto", "hecho", "dicho", "escrito"],
          example: {
            target: "Ya he visto esa película dos veces.",
            translation: "I have already seen that film twice."
          }
        },
        {
          term: "ya",
          explanation:
            "‘Already’. It is the classic trigger that makes the present perfect sound natural even in Colombia.",
          literal: "already",
          useWhen:
            "Asking or saying something has happened by now: “¿ya ha llegado?”, “ya he comido”.",
          avoidWhen:
            "Nothing has happened yet; then you want “todavía no”.",
          register: "neutral",
          region: "Universal Spanish; extremely common in Colombia.",
          related: ["todavía", "nunca", "alguna vez", "aún"],
          example: {
            target: "Ya he terminado el trabajo.",
            translation: "I have already finished the work."
          }
        },
        {
          term: "todavía no",
          explanation:
            "‘Not yet’. It pairs with the present perfect to say an expected thing hasn't happened up to now.",
          literal: "still not",
          useWhen:
            "Something is pending: “todavía no he almorzado”, “todavía no ha llegado”.",
          avoidWhen:
            "It already happened; use “ya” instead.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["aún no", "ya", "nunca", "apenas"],
          example: {
            target: "Todavía no hemos comido.",
            translation: "We haven't eaten yet."
          }
        },
        {
          term: "alguna vez / nunca",
          explanation:
            "‘Ever’ and ‘never’, the experience words. They are where the perfect genuinely survives in Colombian speech.",
          literal: "some time / never",
          useWhen:
            "Asking about life experience: “¿ha estado alguna vez?”, “nunca he ido”.",
          avoidWhen:
            "You mean a specific dated event; Colombia would use the simple past for that.",
          register: "neutral",
          region: "Universal Spanish; the perfect here is safe in Colombia.",
          related: ["ya", "todavía no", "jamás", "una vez"],
          example: {
            target: "¿Alguna vez has probado el cabrito?",
            translation: "Have you ever tried goat stew?"
          }
        },
        {
          term: "¿ya comió? (el pretérito colombiano)",
          explanation:
            "The everyday Colombian alternative: where Spain uses the perfect, Bucaramanga usually uses the simple past. Both are understood.",
          literal: "did you already eat?",
          useWhen:
            "Normal Colombian talk about recent events: “¿ya comió?”, “ya almorcé”.",
          avoidWhen:
            "You are with peninsular speakers or in a formal exam that expects the perfect.",
          register: "warm conversational",
          region: "Colombia and much of Latin America prefer this.",
          related: ["comí", "almorcé", "llegué", "fui"],
          example: {
            target: "¿Ya almorzó o lo espero?",
            translation: "Did you have lunch yet, or should I wait for you?"
          }
        }
      ],
      note:
        "In Bucaramanga the simple past does most of the work the present perfect does in Spain: where a Spaniard says “he comido”, a bumangués says “comí”. But the perfect is not dead here. It survives with “ya”, “todavía no”, “nunca” and “alguna vez”, and in the set question “¿has estado en…?”. Learn to build it correctly — “haber” plus a participle, including the irregulars “visto, hecho, dicho, puesto, vuelto” — and learn when a local would quietly swap it for the simple past.",
      culture: [
        {
          label: "Santander is blunt, and proud of it",
          body:
            "The region has a reputation across Colombia for being direct — some say harsh, locals say honest. Yaneth's rapid-fire ‘have you tried this, have you been there’ is not rudeness; it is the santandereano way of making you feel at home by getting straight to the point."
        },
        {
          label: "Where the perfect really lives in Colombia",
          body:
            "Textbooks drill “he comido” as the everyday past, but in most of Colombia that is not how people talk. The present perfect clusters around experience and expectation: “¿alguna vez has…?”, “todavía no he…”, “nunca he…”. Master those and you sound natural; force the perfect onto every recent event and you sound foreign."
        },
        {
          label: "Hormigas culonas and the Santander table",
          body:
            "A real Bucaramanga lunch might offer “hormigas culonas” (big-bottomed ants eaten toasted), “cabrito” (kid goat) and “mute santandereano” (a hearty soup). Being asked what you have and haven't tried is a normal, warm opening — food is how the region tests and welcomes a visitor at once."
        },
        {
          label: "‘Has estado en…?’ survives for a reason",
          body:
            "One perfect that Colombians keep is the travel question: “¿has estado en…?” — have you been to…? It asks about life experience with no fixed date, which is exactly the job the perfect does best. That is why it resists the simple-past drift that flattens “he comido” into “comí”."
        }
      ],
      pitfalls: [
        {
          mistake: "Using “he comido” for a specific finished event",
          whyItFails:
            "For a dated, done event most Colombians use the simple past. “Comí a la una” sounds natural; “he comido a la una” sounds oddly peninsular.",
          sayInstead: "Comí a la una."
        },
        {
          mistake: "Adding a regular ending to an irregular participle",
          whyItFails:
            "Verbs like “ver, hacer, decir” have fixed irregular participles. “He hacido” or “he vido” is not Spanish; the forms are “hecho” and “visto”.",
          sayInstead: "He hecho la tarea; ya he visto eso."
        },
        {
          mistake: "Confusing “haber” with “tener”",
          whyItFails:
            "Both can be ‘have’ in English, but only “haber” builds the perfect. “Tengo comido” is not the perfect; the auxiliary must be “he comido”.",
          sayInstead: "He comido bien hoy."
        },
        {
          mistake: "Forcing the perfect after a clear past-time marker",
          whyItFails:
            "With “ayer, la semana pasada, en 2019” Spanish wants the simple past, and Colombia even more so. The perfect fights the time marker.",
          sayInstead: "Ayer fui al Chicamocha."
        }
      ],
      variations: [
        {
          form: "¿Ya ha probado las hormigas?",
          register: "warm conversational",
          region: "Universal Spanish",
          whenToUse: "Asking about experience up to now, with “ya”."
        },
        {
          form: "Todavía no he almorzado.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Something expected hasn't happened yet."
        },
        {
          form: "¿Ha estado alguna vez en el Chicamocha?",
          register: "warm conversational",
          region: "Universal Spanish",
          whenToUse: "The classic ‘have you ever been’ question."
        },
        {
          form: "¿Ya comió? / ¿Ya almorzó?",
          register: "warm conversational",
          region: "Colombia",
          whenToUse: "The everyday Colombian swap to the simple past."
        },
        {
          form: "Nunca he ido a Cúcuta.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Saying you have never done something, with “nunca”."
        }
      ],
      prompt: "A bumanguesa asks what you have tried. Which sentence uses the present perfect correctly?",
      choices: [
        "Todavía no he probado las hormigas.",
        "Todavía no probé las hormigas ayer.",
        "Todavía no tengo probado las hormigas."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which question asks about lifetime experience, the job the perfect does best?",
          choices: [
            "¿Comiste cabrito la semana pasada?",
            "¿Alguna vez has comido cabrito?",
            "¿Vas a comer cabrito el domingo?"
          ],
          answer: 1,
          tests: "alguna vez triggers the perfect"
        },
        {
          prompt: "Your friend used an irregular participle wrong. Which sentence is correct?",
          choices: [
            "Ya he hacido toda la tarea.",
            "Ya he vido esa película.",
            "Ya he hecho toda la tarea."
          ],
          answer: 2,
          tests: "irregular participle hecho"
        },
        {
          prompt: "In Bucaramanga, how would a local most naturally ask if you've eaten?",
          choices: [
            "¿Ya almorzó o le sirvo?",
            "¿Ha almorzado usted ya hoy?",
            "¿Está usted almorzando ahora?"
          ],
          answer: 0,
          tests: "Colombian preterite preference"
        }
      ]
    },
    en: {
      title: "‘I have already eaten’: el presente perfecto que el inglés te obliga a usar",
      situation:
        "En Houston, Dan recibe a Marcela y no para de preguntarle qué ha hecho y qué le falta por conocer. Aquí usted aprende lo contrario de su instinto: donde en Colombia diría ‘¿ya comió?’, el inglés casi siempre exige el presente perfecto, ‘have you eaten?’. Preste atención a ‘yet’, ‘already’, ‘ever’ y ‘never’, que son las palabras que lo disparan.",
      setting: {
        who: "Dan es un anfitrión estadounidense de trato fácil; Marcela es la visitante que aprende cuándo el inglés obliga al presente perfecto aunque el español usaría un pasado simple.",
        what: "Una conversación de bienvenida que repite la misma pregunta —qué ha probado, dónde ha estado— para que el presente perfecto inglés aparezca una y otra vez.",
        when: "Cerca del mediodía, con una comida de por medio y charla relajada.",
        where: "Houston, Texas.",
        why: "Porque el instinto colombiano es resolver con el pasado simple —‘ya comí’—, pero el inglés exige el presente perfecto con ‘yet’, ‘already’, ‘ever’ y ‘never’. Sin eso, suena incompleto."
      },
      address: {
        form: "mixed",
        who: "Dan y Marcela se tratan de ‘you’; el inglés no distingue tú de usted, así que la cercanía se marca con el tono, no con el pronombre.",
        why: "La cortesía y la confianza en inglés vienen de frases como ‘have you tried…?’ y de un ‘please’, no de cambiar la forma de tratamiento.",
        ifYouSwitch:
          "Si usted busca un ‘you’ más formal, no existe; para sonar más amable añada ‘please’ o suavice con ‘if you've had the chance’."
      },
      dialogue: [
        {
          speaker: "Dan",
          target: "Sit down. Have you tried brisket yet, or not yet?",
          translation: "Siéntese. ¿Ya ha probado el brisket, o todavía no?",
          pronunciation: "sit daun. jav yu traid pu-TIN yet, or not yet",
          literal: "Siéntese. ¿Ha probado usted brisket ya, o no todavía?",
          why: "En inglés, ‘have you tried…?’ es presente perfecto y es obligatorio para preguntar por una experiencia hasta ahora. El español permitiría ‘¿ya probó?’, pero el inglés no."
        },
        {
          speaker: "Marcela",
          target: "No, I haven't tried it yet. Is it a Houston thing?",
          translation: "No, todavía no lo he probado. ¿Es algo típico de Houston?",
          pronunciation: "nou, ai JA-vent traid it yet. is it a to-RON-tou zing",
          literal: "No, no lo he probado todavía. ¿Es una cosa de Houston?",
          why: "‘Haven't tried yet’ es la respuesta natural: con ‘yet’, el inglés exige el presente perfecto. Traducir ‘no lo probé’ como ‘I didn't try it’ suena incompleto aquí."
        },
        {
          speaker: "Dan",
          target: "It's all over Texas. Have you ever been to The Alamo?",
          translation: "Se consigue en todo Estados Unidos. ¿Alguna vez ha estado en el Álamo?",
          pronunciation: "its ol OU-ver KA-na-da. jav yu E-ver bin tu nai-A-gra fols",
          literal: "Está por todo Estados Unidos. ¿Alguna vez ha estado en las cataratas El Álamo?",
          why: "‘Have you ever been…?’ es la pregunta de experiencia por excelencia. ‘Ever’ dispara el presente perfecto igual que ‘alguna vez’ en español."
        },
        {
          speaker: "Marcela",
          target: "I've never been, but I've seen photos. Is it worth it?",
          translation: "Nunca he ido, pero he visto fotos. ¿Vale la pena?",
          pronunciation: "aiv NE-ver bin, bat aiv sin FOU-tos. is it worz it",
          literal: "Nunca he estado, pero he visto fotos. ¿Vale la pena?",
          why: "‘I've never been’ y ‘I've seen’ usan el perfecto con ‘never’. Fíjese en ‘seen’ y ‘been’, participios irregulares que hay que memorizar."
        },
        {
          speaker: "Dan",
          target: "Heads up: in English you can't drop the ‘have’ — say ‘have you tried?’, not ‘you tried already?’.",
          translation: "Ojo: en inglés no puede omitir el ‘have’; se dice ‘have you tried?’, no ‘you tried already?’.",
          pronunciation: "jeds ap: in ING-lish yu kant drop de jav — sei jav yu traid, not yu traid ol-RE-di",
          literal: "Aviso: en inglés no puede soltar el ‘have’; diga ‘have you tried?’, no ‘you tried already?’.",
          why: "Aquí está la trampa inversa: el colombiano tiende a decir ‘you tried already?’ calcando el español. El inglés obliga al auxiliar ‘have’ en el presente perfecto."
        },
        {
          speaker: "Marcela",
          target: "Got it. So have you eaten yet? Because I haven't had lunch today.",
          translation: "Listo. ¿Y usted ya comió? Porque yo hoy todavía no he almorzado.",
          pronunciation: "gat it. sou jav yu I-ten yet? bi-KOZ ai JA-vent jad lonch tu-DEI",
          literal: "Entendido. ¿Ya ha comido usted? Porque no he almorzado hoy.",
          why: "‘Have you eaten yet?’ y ‘I haven't had lunch’ muestran el patrón completo. Donde el español dice ‘¿ya comió?’, el inglés casi siempre pide el perfecto."
        }
      ],
      vocabulary: [
        {
          term: "have / has + past participle",
          explanation:
            "La estructura del presente perfecto inglés: ‘have’ o ‘has’ más el participio. Es obligatoria donde el español a veces usa el pasado simple.",
          literal: "haber + participio",
          useWhen:
            "Para experiencias hasta ahora: ‘I have tried’, ‘she has gone’.",
          avoidWhen:
            "Con un momento pasado concreto como ‘yesterday’, donde el inglés pide pasado simple.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["have", "has", "had", "haven't"],
          example: {
            target: "I have finished the work.",
            translation: "He terminado el trabajo."
          }
        },
        {
          term: "yet",
          explanation:
            "‘Todavía / ya’ en preguntas y negaciones. Obliga al presente perfecto: ‘not yet’, ‘have you… yet?’.",
          literal: "todavía / ya",
          useWhen:
            "Algo esperado que aún no pasa: ‘I haven't eaten yet’.",
          avoidWhen:
            "En afirmaciones simples; ahí se usa ‘already’, no ‘yet’.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["already", "still", "so far", "up to now"],
          example: {
            target: "I haven't finished yet.",
            translation: "Todavía no he terminado."
          }
        },
        {
          term: "already",
          explanation:
            "‘Ya’. Marca que algo ocurrió antes de lo esperado y suele pedir el presente perfecto.",
          literal: "ya",
          useWhen:
            "Afirmaciones: ‘I have already eaten’.",
          avoidWhen:
            "Calcar el español ‘ya comí’ como ‘I already ate’; el perfecto es más seguro.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["yet", "just", "by now", "so far"],
          example: {
            target: "I have already eaten.",
            translation: "Ya he comido."
          }
        },
        {
          term: "ever / never",
          explanation:
            "‘Alguna vez / nunca’. Son las palabras de experiencia y disparan el perfecto en inglés igual que en español.",
          literal: "alguna vez / nunca",
          useWhen:
            "Preguntar por la vida entera: ‘Have you ever…?’, ‘I have never…’.",
          avoidWhen:
            "Un evento con fecha; entonces el inglés usa pasado simple.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["always", "before", "in my life", "so far"],
          example: {
            target: "Have you ever been to Texas?",
            translation: "¿Alguna vez ha estado en Estados Unidos?"
          }
        },
        {
          term: "irregular past participles",
          explanation:
            "Participios irregulares que hay que memorizar: ‘seen, been, done, gone, eaten, written’. No siguen la regla de ‘-ed’.",
          literal: "participios irregulares",
          useWhen:
            "El verbo es irregular: ‘I have seen’, ‘she has done’.",
          avoidWhen:
            "Ponerle ‘-ed’ a un irregular: ‘I have seed’ no existe, es ‘seen’.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["seen", "been", "done", "eaten"],
          example: {
            target: "I have seen that film.",
            translation: "He visto esa película."
          }
        },
        {
          term: "did (simple past)",
          explanation:
            "El pasado simple inglés. El error colombiano es usarlo donde el inglés pide perfecto: ‘I already ate’ en vez de ‘I have already eaten’.",
          literal: "pasado simple",
          useWhen:
            "Un momento pasado concreto: ‘I ate at one’, ‘I went yesterday’.",
          avoidWhen:
            "Con ‘yet’, ‘already’ o ‘ever’; ahí el inglés prefiere el perfecto.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["ate", "went", "saw", "yesterday"],
          example: {
            target: "I ate at one o'clock.",
            translation: "Comí a la una."
          }
        },
        {
          term: "Have you been to…?",
          explanation:
            "La pregunta de viaje: ‘¿Ha estado en…?’. En inglés se dice ‘have you been to’, con ‘to’, no ‘have you been in’.",
          literal: "¿ha estado en…?",
          useWhen:
            "Preguntar por experiencia de viaje: ‘Have you been to Houston?’.",
          avoidWhen:
            "Usar ‘in’ en vez de ‘to’; ‘have you been in Houston?’ cambia el sentido.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["been to", "gone to", "visited", "traveled to"],
          example: {
            target: "Have you been to The Alamo?",
            translation: "¿Ha estado en el Álamo?"
          }
        }
      ],
      note:
        "En inglés el presente perfecto no es opcional donde el español lo esquiva. Donde usted diría ‘ya comí’, el inglés casi siempre exige ‘I have already eaten’. Las palabras clave que lo disparan son ‘yet’, ‘already’, ‘ever’, ‘never’ y ‘so far’. Aprenda los participios irregulares —‘seen, been, done, gone, eaten’— y resista el impulso de traducir ‘ya comí’ como ‘I already ate’ cuando ‘I have already eaten’ es lo natural.",
      culture: [
        {
          label: "El inglés obliga donde el español libera",
          body:
            "En Colombia el pasado simple hace casi todo el trabajo: ‘ya comí’, ‘ya fui’. El inglés no da esa libertad: con ‘yet’, ‘already’ y ‘ever’ exige el presente perfecto. Es el punto exacto donde el instinto del hispanohablante lo traiciona."
        },
        {
          label: "‘I already ate’: por qué suena raro",
          body:
            "Muchos colombianos dicen ‘I already ate’ calcando ‘ya comí’. Se entiende, pero a oídos nativos suena incompleto en muchos contextos; lo natural es ‘I have already eaten’. Es el error más común y el más fácil de corregir."
        },
        {
          label: "Houston, ciudad de llegada",
          body:
            "Houston es una de las ciudades más multiculturales del mundo, y la pregunta ‘¿ya probó…?, ¿ya estuvo en…?’ es parte de cómo un anfitrión le da la bienvenida. En inglés esa bienvenida pasa siempre por el presente perfecto: ‘have you tried…?’."
        },
        {
          label: "Participios que hay que memorizar",
          body:
            "Así como el español guarda ‘visto, hecho, dicho’, el inglés guarda ‘seen, done, said, been, gone’. No hay atajo: se memorizan. Quien los domina construye el presente perfecto sin dudar; quien no, cae en ‘I have seed’ o ‘I have goed’."
        }
      ],
      pitfalls: [
        {
          mistake: "Decir ‘I already ate’ por ‘ya comí’",
          whyItFails:
            "Con ‘already’, el inglés pide el presente perfecto. El pasado simple suena incompleto en este contexto de experiencia reciente.",
          sayInstead: "I have already eaten."
        },
        {
          mistake: "Omitir el auxiliar ‘have’",
          whyItFails:
            "Sin ‘have’ no hay presente perfecto. ‘You tried it?’ es un calco del español que a un nativo le suena a pregunta a medias.",
          sayInstead: "Have you tried it yet?"
        },
        {
          mistake: "Ponerle ‘-ed’ a un participio irregular",
          whyItFails:
            "Los irregulares no siguen la regla: ‘seed’ o ‘goed’ no existen. Hay que usar la forma memorizada.",
          sayInstead: "I have seen it; I have gone there."
        },
        {
          mistake: "Decir ‘have you been in…?’ por un viaje",
          whyItFails:
            "Para experiencia de viaje el inglés usa ‘been to’. ‘Been in’ sugiere estar dentro de un lugar, no haberlo visitado.",
          sayInstead: "Have you been to The Alamo?"
        }
      ],
      variations: [
        {
          form: "Have you tried it yet?",
          register: "cálido conversacional",
          region: "Inglés universal",
          whenToUse: "Preguntar por una experiencia hasta ahora, con ‘yet’."
        },
        {
          form: "I haven't eaten yet.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Algo esperado que todavía no pasa."
        },
        {
          form: "Have you ever been to Texas?",
          register: "cálido conversacional",
          region: "Inglés universal",
          whenToUse: "La pregunta clásica de experiencia, con ‘ever’."
        },
        {
          form: "I have already eaten.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Afirmar que algo ya ocurrió, con ‘already’."
        },
        {
          form: "I've never seen that.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Decir que nunca se ha hecho algo, con ‘never’."
        }
      ],
      prompt: "You want to say ‘ya comí’ the way English really works. Which is natural?",
      choices: [
        "I already ate the arepa.",
        "I have already eaten the arepa.",
        "I am already eating the arepa."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Con ‘yet’, ¿cuál es la forma correcta en inglés?",
          choices: [
            "I didn't finish yet the report.",
            "I not have finished the report.",
            "I haven't finished the report yet."
          ],
          answer: 2,
          tests: "‘yet’ pide presente perfecto"
        },
        {
          prompt: "Un amigo pregunta por su experiencia de viaje. ¿Cuál suena a nativo?",
          choices: [
            "Have you ever been to Bogotá?",
            "Did you ever be in Bogotá?",
            "Are you ever going Bogotá?"
          ],
          answer: 0,
          tests: "‘ever’ dispara el perfecto"
        },
        {
          prompt: "¿Cómo corrige el calco ‘I already ate, and you?’?",
          choices: [
            "I already did eat, and you?",
            "I have already eaten. Have you?",
            "I have already ate. And you?"
          ],
          answer: 1,
          tests: "participio ‘eaten’, no ‘ate’"
        }
      ]
    }
  },
  {
    id: "the-pluperfect-and-ordering-a-story-in-cucuta",
    level: "Developing · Saying what had already happened",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "shopping-and-money",
    register: "courteous",
    pathways: ["independent", "year-12"],
    structure: "pluperfect",
    review: "pending",
    es: {
      title: "Ya habían cerrado: the past perfect for ordering a story in Cúcuta",
      situation:
        "In Cúcuta, by the border, Marleny tells Édinson about a wasted early morning at the international bridge. For the story to make sense, she has to say what had happened before she arrived: “ya habían cerrado”, “todavía no había contestado”. That is the pluperfect — “había” plus a participle — and it marks the earlier of two past events.",
      setting: {
        who: "Marleny is a cucuteña who crosses the border often; Édinson is a neighbor who asks what went wrong. She narrates a chain of past events, so she needs the pluperfect to say which happened first.",
        what: "A retelling of a failed morning at the border bridge, where the order of events is the whole point.",
        when: "Late morning, after a wasted early trip, told as a frustrated story.",
        where: "Cúcuta, on the Colombian side of the border with Venezuela.",
        why: "Because the pluperfect is almost absent from real Colombian speech in the corpus, yet it is exactly what you need to order a story: it names the earlier of two past events with “había” plus a participle."
      },
      address: {
        form: "usted",
        who: "Marleny and Édinson use usted, the ordinary neighborly default in Cúcuta, direct but familiar.",
        why: "Usted keeps the frank, plain tone of the border story while still being warm between neighbors; it also lets the narration stay clear and unfussy.",
        ifYouSwitch:
          "Switching to “tú” would sound a touch more intimate; in Cúcuta “usted” between neighbors is the neutral, expected choice, so keep it."
      },
      dialogue: [
        {
          speaker: "Marleny",
          target: "Ayer fui al puente, pero cuando llegué ya habían cerrado el paso.",
          translation: "Yesterday I went to the bridge, but by the time I arrived they had already closed the crossing.",
          pronunciation: "a-YER fwi al PWEN-te, PE-ro KWAN-do ye-GE ya a-BEE-an se-RA-do el PA-so",
          literal: "Yesterday I-went to-the bridge, but when I-arrived already they-had closed the crossing.",
          why: "Two past events: arriving and closing. The pluperfect “habían cerrado” marks the closing as the earlier one, already done before she arrived. “Ya” reinforces that order."
        },
        {
          speaker: "Édinson",
          target: "¿En serio? ¿Y el man que le iba a pasar los bolívares no la esperó?",
          translation: "Seriously? And the guy who was going to hand you the bolívars didn't wait for you?",
          pronunciation: "en SE-ryo? ee el man ke le EE-ba a pa-SAR los bo-LEE-va-res no la es-pe-RO",
          literal: "In serious? And the guy that to-you was going to pass the bolívars not you waited?",
          why: "“El man” is everyday Colombian for ‘the guy’. Édinson asks a simple past question; the pluperfect will come back in Marleny's answer, where the ordering matters."
        },
        {
          speaker: "Marleny",
          target: "Ese ya se había devuelto. Cuando le escribí, todavía no había contestado.",
          translation: "That one had already turned back. When I texted him, he hadn't answered yet.",
          pronunciation: "E-se ya se a-BEE-a de-vol-BEE-do... KWAN-do le es-kri-BEE, to-da-VEE-a no a-BEE-a kon-tes-TA-do",
          literal: "That-one already himself had returned. When to-him I-wrote, still not had answered.",
          why: "Two more pluperfects: “se había devuelto” and “no había contestado” both sit before the moment she wrote. “Todavía no había contestado” is the classic ‘hadn't yet’ ordering."
        },
        {
          speaker: "Édinson",
          target: "Qué embarrada. ¿Entonces no había pasado nada con la encomienda?",
          translation: "What a mess. So nothing had happened with the delivery?",
          pronunciation: "ke em-ba-RA-da. en-TON-ses no a-BEE-a pa-SA-do NA-da kon la en-ko-MYEN-da",
          literal: "What mess. Then not had happened nothing with the delivery?",
          why: "Édinson now uses the pluperfect himself: “no había pasado nada” asks about the state of things before some later point. It shows the tense ordering the past, not just narrating it."
        },
        {
          speaker: "Marleny",
          target: "Nada. Cuando por fin abrieron, el man ya había cruzado por otro lado.",
          translation: "Nothing. By the time they finally opened, the guy had already crossed somewhere else.",
          pronunciation: "NA-da. KWAN-do por fin a-BRYE-ron, el man ya a-BEE-a kru-SA-do por O-tro LA-do",
          literal: "Nothing. When at last they-opened, the guy already had crossed by other side.",
          why: "“Abrieron” (simple past) is the later event; “ya había cruzado” (pluperfect) is the earlier one. The pairing of a simple past with a pluperfect is exactly how Spanish orders two moments."
        },
        {
          speaker: "Édinson",
          target: "O sea que usted madrugó por nada, porque él ya había arreglado el cruce solo.",
          translation: "So you got up at dawn for nothing, because he had already sorted out the crossing on his own.",
          pronunciation: "o SE-a ke oos-TED ma-dru-GO por NA-da, POR-ke el ya a-BEE-a a-re-GLA-do el KRU-se SO-lo",
          literal: "That-is that you got-up-early for nothing, because he already had arranged the crossing alone.",
          why: "The closing line lands the point: “madrugó” (simple past) is undercut by “ya había arreglado” (pluperfect), the earlier action that made the trip pointless. That is the pluperfect's whole job."
        }
      ],
      vocabulary: [
        {
          term: "había + participio",
          explanation:
            "The pluperfect: the imperfect of “haber” (“había, habías, habíamos, habían”) plus a participle. It names the earlier of two past events.",
          literal: "had + participle",
          useWhen:
            "One past action happened before another: “cuando llegué, ya habían cerrado”.",
          avoidWhen:
            "There is only one past event; then a simple past or imperfect is enough.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["había", "habían", "habíamos", "habías"],
          example: {
            target: "Cuando llamé, ya se habían ido.",
            translation: "When I called, they had already left."
          }
        },
        {
          term: "ya (en pasado)",
          explanation:
            "‘Already’, used to stress that the earlier event was complete before the later one. It is the pluperfect's best friend.",
          literal: "already",
          useWhen:
            "Marking completion before another past point: “ya había cruzado”.",
          avoidWhen:
            "You mean ‘still’ or ‘not yet’; those are “todavía” and “todavía no”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["todavía", "cuando", "antes", "para entonces"],
          example: {
            target: "Para entonces ya había comido.",
            translation: "By then I had already eaten."
          }
        },
        {
          term: "todavía no había…",
          explanation:
            "‘Hadn't yet…’. The pluperfect with “todavía no” says something still hadn't happened at an earlier past moment.",
          literal: "still not had…",
          useWhen:
            "Something was pending at a past point: “todavía no había contestado”.",
          avoidWhen:
            "The event was already done; then use “ya había”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["aún no había", "ya había", "cuando", "para entonces"],
          example: {
            target: "Cuando salí, todavía no había llegado.",
            translation: "When I left, he still hadn't arrived."
          }
        },
        {
          term: "cuando",
          explanation:
            "‘When’. It usually introduces the later event (in simple past) against which the pluperfect marks the earlier one.",
          literal: "when",
          useWhen:
            "Pinning the reference moment: “cuando llegué, ya habían cerrado”.",
          avoidWhen:
            "You need ‘while’ for an ongoing background; that is “mientras”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["mientras", "apenas", "para cuando", "antes de que"],
          example: {
            target: "Cuando abrieron, ya me había ido.",
            translation: "When they opened, I had already left."
          }
        },
        {
          term: "el man",
          explanation:
            "Everyday Colombian slang for ‘the guy’. Frequent in Cúcuta and across the country in relaxed talk.",
          literal: "the man (from English)",
          useWhen:
            "Casual reference to a man whose name you don't use: “el man se devolvió”.",
          avoidWhen:
            "A formal or written register; use “el señor” or “el hombre”.",
          register: "frank conversational",
          region: "Colombia, very common.",
          related: ["el tipo", "el señor", "la vieja", "el chino"],
          example: {
            target: "El man ya se había ido.",
            translation: "The guy had already left."
          }
        },
        {
          term: "devolverse",
          explanation:
            "‘To turn back / go back’. Reflexive in Colombia, common in border and travel stories.",
          literal: "to return oneself",
          useWhen:
            "Someone heads back the way they came: “se devolvió”, “se había devuelto”.",
          avoidWhen:
            "You mean returning an object; that is “devolver algo”.",
          register: "warm conversational",
          region: "Colombia and much of Latin America.",
          related: ["regresar", "volver", "irse", "retornar"],
          example: {
            target: "Cuando llegué, ya se había devuelto.",
            translation: "When I arrived, he had already turned back."
          }
        },
        {
          term: "la encomienda",
          explanation:
            "‘A delivery / parcel sent through someone’. Central to border life, where people carry things across for others.",
          literal: "the entrusted errand",
          useWhen:
            "Something is sent with a traveler: “la encomienda no llegó”.",
          avoidWhen:
            "You mean a formal courier package; that might be “el envío” or “el paquete”.",
          register: "neutral",
          region: "Colombia; especially common near the border.",
          related: ["el envío", "el paquete", "el mandado", "la vuelta"],
          example: {
            target: "La encomienda ya había salido cuando llamé.",
            translation: "The parcel had already gone out when I called."
          }
        }
      ],
      note:
        "The pluperfect —“había” plus a participle— barely shows up in real Colombian conversation, yet it is the cleanest tool for ordering a story: it marks which of two past events came first. Watch how it pairs with a simple past: the simple past (“llegué”, “abrieron”) sets a moment, and the pluperfect (“ya habían cerrado”, “ya había cruzado”) puts the other event before it. The signposts are “ya”, “todavía (no)” and “cuando”. Learn to reach for it when ‘had done’ is what English would use.",
      culture: [
        {
          label: "Cúcuta lives by the border",
          body:
            "Cúcuta sits right against Venezuela, and daily life is shaped by the international bridges, the flow of people and the ups and downs of the crossing. Stories of trips that fell apart because ‘they had already closed’ are ordinary here — which makes it a natural home for the pluperfect."
        },
        {
          label: "The Venezuelan reality next door",
          body:
            "For years the crossing has meant migration, remittances, currency swaps and parcels carried by hand. Words like “bolívares” and “encomienda” are everyday vocabulary, not exotic terms. Understanding that context is part of understanding cucuteño speech."
        },
        {
          label: "Why the pluperfect matters even if it's rare",
          body:
            "The corpus shows the pluperfect almost never appears in casual talk, but that doesn't make it optional. When you narrate a sequence — this had happened before that — it is the precise tense. Learners who avoid it end up telling tangled stories where the order of events is lost."
        },
        {
          label: "Frankness as a border virtue",
          body:
            "Like the rest of Santander, Cúcuta prizes plain, direct speech. Édinson's ‘qué embarrada’ and ‘madrugó por nada’ are blunt but kind — the frankness is a way of taking your side. Reading that tone correctly keeps you from mistaking directness for rudeness."
        }
      ],
      pitfalls: [
        {
          mistake: "Using the simple past for both events",
          whyItFails:
            "‘Cuando llegué, cerraron’ loses the order — it sounds like the closing happened as you arrived. The pluperfect ‘ya habían cerrado’ makes clear it was done first.",
          sayInstead: "Cuando llegué, ya habían cerrado."
        },
        {
          mistake: "Using the present perfect instead of the pluperfect",
          whyItFails:
            "‘Han cerrado’ anchors to now, not to a past moment. To order two past events you need the imperfect auxiliary: “habían cerrado”.",
          sayInstead: "Cuando llegué, ya habían cerrado."
        },
        {
          mistake: "Wrong auxiliary form (‘habían’ vs ‘habré’)",
          whyItFails:
            "The pluperfect uses the imperfect of “haber” (había, habían), not the future or conditional. Mixing them breaks the past-in-the-past meaning.",
          sayInstead: "Ya habían cerrado el paso."
        },
        {
          mistake: "Splitting ‘había’ from its participle",
          whyItFails:
            "‘Había el man cruzado’ scrambles the verb. The auxiliary and participle stay together: “el man ya había cruzado”.",
          sayInstead: "El man ya había cruzado."
        }
      ],
      variations: [
        {
          form: "Cuando llegué, ya habían cerrado.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The core pattern: simple past plus pluperfect with “ya”."
        },
        {
          form: "Todavía no había contestado.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Something still hadn't happened at a past point."
        },
        {
          form: "Para entonces ya se había ido.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Marking completion before a stated past moment."
        },
        {
          form: "El man ya se había devuelto.",
          register: "frank conversational",
          region: "Colombia",
          whenToUse: "Casual border narration with Colombian slang."
        },
        {
          form: "Nunca había probado eso antes.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A first-time experience seen from a past moment."
        }
      ],
      prompt: "You arrived and the crossing was already shut before you got there. Which sentence orders that correctly?",
      choices: [
        "Cuando llegué, ya habían cerrado el paso.",
        "Cuando llegué, cerraron el paso hoy.",
        "Cuando llego, ya han cerrado el paso."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence says something ‘still hadn't happened’ at a past moment?",
          choices: [
            "Cuando le escribí, no contesta todavía.",
            "Cuando le escribí, todavía no había contestado.",
            "Cuando le escribo, todavía no contestó."
          ],
          answer: 1,
          tests: "pluperfect with todavía no"
        },
        {
          prompt: "Pick the correct pluperfect auxiliary to order two past events.",
          choices: [
            "Para entonces él ya habrá cruzado.",
            "Para entonces él ya habría cruzado.",
            "Para entonces él ya había cruzado."
          ],
          answer: 2,
          tests: "imperfect auxiliary había"
        },
        {
          prompt: "Which keeps ‘había’ next to its participle correctly?",
          choices: [
            "El man ya había arreglado el cruce.",
            "El man había ya el cruce arreglado.",
            "El man arreglado ya había el cruce."
          ],
          answer: 0,
          tests: "auxiliary and participle stay together"
        }
      ]
    },
    en: {
      title: "‘They had already closed’: el pasado perfecto para ordenar una historia",
      situation:
        "En Miami, Yolanda le cuenta a Rick una mañana perdida en una oficina. Para que se entienda el orden de los hechos, necesita el pasado perfecto inglés —‘had’ más participio—: ‘they had already closed’, ‘he hadn't answered yet’. Es el equivalente exacto del pluscuamperfecto español y marca cuál de dos hechos pasados ocurrió primero.",
      setting: {
        who: "Yolanda es la narradora; Rick, el vecino que pregunta qué salió mal. Ella encadena hechos pasados, así que necesita el pasado perfecto para decir cuál fue primero.",
        what: "El relato de una diligencia fallida, donde el orden de los sucesos es justo lo que hay que dejar claro.",
        when: "Media mañana, después de un madrugón perdido, contado con frustración.",
        where: "Miami, en el estado de Florida, Estados Unidos.",
        why: "Porque el pasado perfecto inglés hace lo mismo que el pluscuamperfecto: nombra el más antiguo de dos hechos pasados con ‘had’ más participio, y sin él la historia se desordena."
      },
      address: {
        form: "mixed",
        who: "Yolanda y Rick se tratan de ‘you’; en inglés no hay tú ni usted, así que la confianza se nota en el tono y en el ‘man’ o el nombre.",
        why: "El registro llano del relato se logra con palabras directas y con ‘you’, no con una forma especial de tratamiento.",
        ifYouSwitch:
          "Si busca sonar más formal, no cambie el pronombre; ajuste el vocabulario y agregue cortesías como ‘to be honest’ o ‘believe it or not’."
      },
      dialogue: [
        {
          speaker: "Yolanda",
          target: "I went to the office, but by the time I arrived they had already closed.",
          translation: "Fui a la oficina, pero cuando llegué ya habían cerrado.",
          pronunciation: "ai went tu de O-fis, bat bai de taim ai a-RAIVD dei jad ol-RE-di klousd",
          literal: "Fui a la oficina, pero para el tiempo que llegué ellos habían ya cerrado.",
          why: "Dos hechos pasados: llegar y cerrar. El pasado perfecto ‘had already closed’ marca el cierre como el más antiguo, ya cumplido antes de llegar. ‘Already’ refuerza ese orden."
        },
        {
          speaker: "Rick",
          target: "Seriously? What about the guy who was bringing your documents?",
          translation: "¿En serio? ¿Y el man que le llevaba los documentos?",
          pronunciation: "SI-rius-li? wat a-BAUT de gai ju was BRIN-guing yor DA-kiu-ments",
          literal: "¿En serio? ¿Qué acerca del tipo que estaba trayendo tus documentos?",
          why: "Rick pregunta en pasado simple. El pasado perfecto volverá en la respuesta de Yolanda, donde el orden de los hechos es lo que importa."
        },
        {
          speaker: "Yolanda",
          target: "He had already left. When I texted him, he hadn't answered yet.",
          translation: "Ya se había ido. Cuando le escribí, todavía no había contestado.",
          pronunciation: "ji jad ol-RE-di left. wen ai TEKS-ted jim, ji JA-dent AN-serd yet",
          literal: "Él había ya salido. Cuando lo texteé, él no había contestado todavía.",
          why: "Dos pasados perfectos: ‘had left’ y ‘hadn't answered’, ambos anteriores al momento en que ella escribió. ‘Hadn't answered yet’ es el clásico ‘todavía no había’."
        },
        {
          speaker: "Rick",
          target: "That's rough. So nothing had happened with the package?",
          translation: "Qué vaina. ¿Entonces no había pasado nada con la encomienda?",
          pronunciation: "dats raf. sou NA-zing jad JA-pend wiz de PA-kich",
          literal: "Eso está duro. ¿Entonces nada había pasado con el paquete?",
          why: "Rick usa el pasado perfecto: ‘nothing had happened’ pregunta por el estado de las cosas antes de un punto posterior. Ordena el pasado, no solo lo narra."
        },
        {
          speaker: "Yolanda",
          target: "Nothing. By the time they opened, he had crossed town another way.",
          translation: "Nada. Para cuando abrieron, el man ya había cruzado la ciudad por otro lado.",
          pronunciation: "NA-zing. bai de taim dei OU-pend, ji jad krost taun a-NA-der wei",
          literal: "Nada. Para el tiempo que abrieron, él había cruzado la ciudad otro camino.",
          why: "‘They opened’ (pasado simple) es el hecho posterior; ‘had crossed’ (pasado perfecto) es el anterior. Esa mezcla de pasado simple y pasado perfecto es como el inglés ordena dos momentos."
        },
        {
          speaker: "Rick",
          target: "So you got up early for nothing, because he'd already done it alone.",
          translation: "O sea que madrugó por nada, porque él ya lo había hecho solo.",
          pronunciation: "sou yu gat ap ER-li for NA-zing, bi-KOZ jid ol-RE-di dan it a-LOUN",
          literal: "Entonces te levantaste temprano por nada, porque él ya había hecho eso solo.",
          why: "El cierre lo remata: ‘got up early’ (pasado simple) queda anulado por ‘he'd already done it’ (pasado perfecto), el hecho anterior que volvió inútil el viaje. Note ‘he'd’, contracción de ‘he had’."
        }
      ],
      vocabulary: [
        {
          term: "had + past participle",
          explanation:
            "El pasado perfecto inglés: ‘had’ más participio, igual para todas las personas. Nombra el más antiguo de dos hechos pasados.",
          literal: "había + participio",
          useWhen:
            "Un hecho pasado ocurrió antes de otro: ‘when I arrived, they had closed’.",
          avoidWhen:
            "Hay un solo hecho pasado; ahí basta el pasado simple.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["had", "hadn't", "he'd", "they'd"],
          example: {
            target: "When I called, they had already left.",
            translation: "Cuando llamé, ya se habían ido."
          }
        },
        {
          term: "already (in the past)",
          explanation:
            "‘Ya’ en pasado. Subraya que el hecho anterior estaba completo antes del posterior; acompaña al pasado perfecto.",
          literal: "ya",
          useWhen:
            "Marcar algo cumplido antes de otro punto pasado: ‘had already closed’.",
          avoidWhen:
            "Quiere decir ‘todavía’ o ‘todavía no’; use ‘still’ o ‘not yet’.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["yet", "by then", "before", "when"],
          example: {
            target: "By then I had already eaten.",
            translation: "Para entonces ya había comido."
          }
        },
        {
          term: "hadn't … yet",
          explanation:
            "‘Todavía no había…’. El pasado perfecto con ‘yet’ dice que algo aún no ocurría en un momento pasado.",
          literal: "no había… todavía",
          useWhen:
            "Algo estaba pendiente en el pasado: ‘he hadn't answered yet’.",
          avoidWhen:
            "El hecho ya estaba cumplido; entonces use ‘had already’.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["had already", "still hadn't", "by then", "when"],
          example: {
            target: "When I left, he hadn't arrived yet.",
            translation: "Cuando salí, todavía no había llegado."
          }
        },
        {
          term: "by the time",
          explanation:
            "‘Para cuando / cuando’. Introduce el hecho posterior contra el que el pasado perfecto marca el anterior.",
          literal: "para el momento en que",
          useWhen:
            "Fijar el momento de referencia: ‘by the time I arrived, they had closed’.",
          avoidWhen:
            "Quiere decir ‘mientras’; eso es ‘while’.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["when", "before", "after", "once"],
          example: {
            target: "By the time they opened, I had left.",
            translation: "Para cuando abrieron, ya me había ido."
          }
        },
        {
          term: "he'd / they'd (had contractions)",
          explanation:
            "Contracciones de ‘had’: ‘he'd left’, ‘they'd gone’. Muy comunes al hablar y fáciles de confundir con ‘would’.",
          literal: "él había / ellos habían",
          useWhen:
            "Habla natural en pasado perfecto: ‘he'd already done it’.",
          avoidWhen:
            "Con un verbo base sin participio suele ser ‘would’, no ‘had’: ‘he'd go’ es ‘would’.",
          register: "cálido conversacional",
          region: "Inglés universal.",
          related: ["I'd", "she'd", "we'd", "you'd"],
          example: {
            target: "He'd already done it alone.",
            translation: "Él ya lo había hecho solo."
          }
        },
        {
          term: "irregular participles (left, gone, done)",
          explanation:
            "Participios irregulares que se memorizan: ‘left, gone, done, crossed’ es regular pero ‘gone’ y ‘done’ no. El pasado perfecto los necesita.",
          literal: "participios irregulares",
          useWhen:
            "El verbo es irregular: ‘had left’, ‘had gone’, ‘had done’.",
          avoidWhen:
            "Ponerles ‘-ed’: ‘had goed’ o ‘had doed’ no existen.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["left", "gone", "done", "seen"],
          example: {
            target: "He had gone by then.",
            translation: "Para entonces ya se había ido."
          }
        },
        {
          term: "text (someone)",
          explanation:
            "‘Escribir un mensaje’. Verbo muy usado en inglés cotidiano; su pasado es ‘texted’.",
          literal: "textear a alguien",
          useWhen:
            "Enviar un mensaje: ‘I texted him’, ‘she texted back’.",
          avoidWhen:
            "Contextos muy formales; ahí ‘message’ o ‘write to’.",
          register: "cálido conversacional",
          region: "Inglés universal.",
          related: ["message", "write", "call", "reach"],
          example: {
            target: "When I texted him, he hadn't answered yet.",
            translation: "Cuando le escribí, todavía no había contestado."
          }
        }
      ],
      note:
        "El pasado perfecto inglés —‘had’ más participio— es el gemelo del pluscuamperfecto: nombra el hecho pasado anterior. Fíjese cómo se combina con el pasado simple: el simple (‘arrived’, ‘opened’) fija un momento y el perfecto (‘had already closed’, ‘had crossed’) pone el otro hecho antes. Las señales son ‘already’, ‘yet’ y ‘by the time’. Y cuidado con las contracciones ‘he'd’, ‘they'd’: aquí valen ‘had’, no ‘would’.",
      culture: [
        {
          label: "El inglés sí exige el pasado perfecto",
          body:
            "A diferencia del español hablado, donde el pluscuamperfecto casi desaparece, el inglés lo usa con soltura en cualquier relato. ‘They had already closed’, ‘he had left’: contar bien una historia en inglés casi obliga a manejarlo."
        },
        {
          label: "‘He'd’ no siempre es ‘would’",
          body:
            "La contracción ‘he'd’ vale para ‘had’ y para ‘would’. En un relato pasado, ‘he'd already done it’ es ‘había’. El contexto y el participio (‘done’, no ‘do’) le dicen cuál es. Confundirlos cambia el sentido de la frase."
        },
        {
          label: "Miami, ciudad bilingüe",
          body:
            "Miami es una de las ciudades más hispanohablantes de Estados Unidos, así que muchos aprendices oyen inglés y español mezclados a diario. Eso ayuda, pero también refuerza calcos; distinguir el pasado perfecto del pasado simple es clave para no arrastrar el orden del español."
        },
        {
          label: "Ordenar bien, contar bien",
          body:
            "Tanto en inglés como en español, quien no domina el pasado perfecto termina contando historias enredadas, donde no se sabe qué pasó primero. Aprender ‘had done’ frente a ‘did’ es aprender a narrar con claridad."
        }
      ],
      pitfalls: [
        {
          mistake: "Usar solo el pasado simple para dos hechos",
          whyItFails:
            "‘When I arrived, they closed’ pierde el orden: parece que cerraron justo al llegar. El pasado perfecto ‘had already closed’ aclara que fue antes.",
          sayInstead: "By the time I arrived, they had already closed."
        },
        {
          mistake: "Usar el presente perfecto en vez del pasado perfecto",
          whyItFails:
            "‘They have closed’ ancla al presente, no a un momento pasado. Para ordenar dos pasados se necesita ‘had’: ‘they had closed’.",
          sayInstead: "When I arrived, they had already closed."
        },
        {
          mistake: "Leer ‘he'd left’ como ‘would’",
          whyItFails:
            "En un relato pasado con participio, ‘he'd’ es ‘had’. Interpretarlo como ‘would’ convierte un hecho cumplido en algo hipotético.",
          sayInstead: "He'd already left when I got there."
        },
        {
          mistake: "Ponerle ‘-ed’ a un participio irregular",
          whyItFails:
            "‘Had goed’ o ‘had doed’ no existen. Los irregulares usan su forma memorizada: ‘gone’, ‘done’.",
          sayInstead: "He had gone; he had done it."
        }
      ],
      variations: [
        {
          form: "By the time I arrived, they had already closed.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "El patrón central: pasado simple más pasado perfecto con ‘already’."
        },
        {
          form: "He hadn't answered yet.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Algo todavía no ocurría en un momento pasado."
        },
        {
          form: "By then he had already left.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Marcar algo cumplido antes de un momento pasado dado."
        },
        {
          form: "He'd already done it alone.",
          register: "cálido conversacional",
          region: "Inglés universal",
          whenToUse: "Habla natural con la contracción ‘he'd’ por ‘had’."
        },
        {
          form: "I had never seen that before.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una primera vez vista desde un momento pasado."
        }
      ],
      prompt: "You arrived and the office was already shut before you got there. Which orders it correctly?",
      choices: [
        "By the time I arrived, they had already closed.",
        "By the time I arrived, they close already.",
        "By the time I have arrived, they closed."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál dice que algo ‘todavía no había pasado’ en un momento pasado?",
          choices: [
            "When I texted him, he doesn't answer yet.",
            "When I texted him, he hadn't answered yet.",
            "When I text him, he didn't answer already."
          ],
          answer: 1,
          tests: "pasado perfecto con ‘yet’"
        },
        {
          prompt: "En un relato pasado, ¿cómo se entiende ‘he'd already done it’?",
          choices: [
            "Él ya lo había hecho.",
            "Él ya lo haría después.",
            "Él quería hacerlo solo."
          ],
          answer: 0,
          tests: "‘he'd’ = had en relato pasado"
        },
        {
          prompt: "Elija el participio correcto para el pasado perfecto.",
          choices: [
            "By then he had goed home.",
            "By then he had went home.",
            "By then he had gone home."
          ],
          answer: 2,
          tests: "participio irregular ‘gone’"
        }
      ]
    }
  },
  {
    id: "for-since-and-ago-in-barichara",
    level: "Developing · How long something has been going on",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "shopping-and-money",
    register: "courteous",
    pathways: ["independent", "year-12"],
    structure: "time-since",
    review: "pending",
    es: {
      title: "Llevo tres años acá: hace, desde, and llevar for how long",
      situation:
        "In Barichara, Laura talks with don Hernando, a stone carver, and wants to know how long he has been in the town and in the trade. Here the three time tools appear: “hace” for how long ago, “desde” and “desde hace” for since, and “llevar” plus a gerund for an ongoing stretch, “llevo veinte años tallando”. Watch the big contrast: English uses a perfect tense where Spanish uses a present tense.",
      setting: {
        who: "Laura is a visitor charmed by the town; don Hernando is a stone carver who has lived and worked there for decades. She asks how long, so the whole time-duration toolkit comes out.",
        what: "A relaxed street conversation about how long he has lived in Barichara and how long he has been carving stone.",
        when: "A slow afternoon in a quiet colonial town built for lingering.",
        where: "Barichara, a colonial stone town in the Santander hills of Colombia.",
        why: "Because ‘how long’ is a measured gap: the corpus shows only a handful of “hace”-ago constructions and almost no “llevar” + gerund. The key English-speaker trap is that “llevo tres años acá” maps onto an English present perfect, not a present."
      },
      address: {
        form: "usted",
        who: "Laura and don Hernando use usted; with an older craftsman it is the respectful and warm default, and “don” before his name adds affection.",
        why: "Usted plus “don Hernando” carries the gentle respect the scene wants, and it keeps the duration questions —“¿hace cuánto vive acá?”— courteous.",
        ifYouSwitch:
          "Dropping to “tú” with an older stranger would sound too familiar; keep “usted”, and note he answers Laura with the affectionate “mijita”."
      },
      dialogue: [
        {
          speaker: "Laura",
          target: "Qué lindo este pueblo. ¿Usted hace cuánto vive acá, don Hernando?",
          translation: "What a lovely town. How long have you lived here, don Hernando?",
          pronunciation: "ke LEEN-do es-te PWE-blo. oos-TED a-se KWAN-to VEE-ve a-KA, don er-NAN-do",
          literal: "How lovely this town. You ago how-much live here, don Hernando?",
          why: "“¿Hace cuánto vive?” is the standard way to ask ‘how long have you…?’. Notice the Spanish verb is present tense (“vive”), while English needs a present perfect (‘have you lived’)."
        },
        {
          speaker: "don Hernando",
          target: "Uf, llevo treinta años acá. Me vine desde Bucaramanga hace treinta años.",
          translation: "Oof, I've been here for thirty years. I came from Bucaramanga thirty years ago.",
          pronunciation: "uf, YE-vo TREYN-ta A-nyos a-KA. me VEE-ne DES-de bu-ka-ra-MAN-ga a-se TREYN-ta A-nyos",
          literal: "Oof, I-carry thirty years here. Myself I-came from Bucaramanga ago thirty years.",
          why: "Two tools at once: “llevo treinta años” (llevar + time for an ongoing stretch) and “hace treinta años” (hace + time for ‘ago’, a finished point). Same number, two different jobs."
        },
        {
          speaker: "Laura",
          target: "¿Y hace cuánto talla la piedra? ¿Desde que llegó, o empezó después?",
          translation: "And how long have you been carving stone? Since you arrived, or did you start later?",
          pronunciation: "ee a-se KWAN-to TA-ya la PYE-dra? DES-de ke ye-GO, o em-pe-SO des-PWES",
          literal: "And ago how-much carve the stone? Since that arrived, or started after?",
          why: "“Desde que llegó” uses “desde” with an event (‘since you arrived’). Again the Spanish is present (“talla”) where English wants ‘have you been carving’."
        },
        {
          speaker: "don Hernando",
          target: "Llevo veinte años tallando; no he parado desde entonces, mijita.",
          translation: "I've been carving for twenty years; I haven't stopped since then, dear.",
          pronunciation: "YE-vo VEYN-te A-nyos ta-YAN-do; no e pa-RA-do DES-de en-TON-ses, mee-HEE-ta",
          literal: "I-carry twenty years carving; not I-have stopped since then, little-dear.",
          why: "“Llevo veinte años tallando” is the headline structure: “llevar” + time + gerund for an ongoing activity. “Desde entonces” means ‘since then’; “mijita” is warm Colombian address."
        },
        {
          speaker: "Laura",
          target: "Impresionante. Yo llevo apenas tres días acá y ya no me quiero ir.",
          translation: "Impressive. I've only been here three days and I already don't want to leave.",
          pronunciation: "im-pre-syo-NAN-te. yo YE-vo a-PE-nas tres DEE-as a-KA ee ya no me KYE-ro eer",
          literal: "Impressive. I carry barely three days here and already not myself I-want to-go.",
          why: "“Llevo apenas tres días acá” shows the pattern with a short span. English again forces a present perfect: ‘I've been here three days’, never ‘I am here for three days’."
        },
        {
          speaker: "don Hernando",
          target: "Quédese, pues. Mucha gente viene desde hace años y termina montando taller.",
          translation: "Then stay. Lots of people have been coming for years and end up setting up a workshop.",
          pronunciation: "KE-de-se, pwes. MU-cha HEN-te VYE-ne DES-de a-se A-nyos ee ter-MEE-na mon-TAN-do ta-YER",
          literal: "Stay, then. Much people comes since ago years and ends-up setting-up workshop.",
          why: "“Desde hace años” means ‘for years now / since years back’ — “desde hace” + time for a stretch reaching the present. Note the present “viene” where English uses ‘have been coming’."
        }
      ],
      vocabulary: [
        {
          term: "hace + tiempo",
          explanation:
            "‘Ago’: “hace” plus a time expression marks how long before now a finished event happened. It does not change with the subject.",
          literal: "it makes + time",
          useWhen:
            "Pointing to a completed moment in the past: “llegué hace treinta años”.",
          avoidWhen:
            "You mean an ongoing stretch up to now; that is “llevar” or “desde hace”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["desde hace", "hace poco", "hace rato", "atrás"],
          example: {
            target: "Me vine hace treinta años.",
            translation: "I came thirty years ago."
          }
        },
        {
          term: "llevar + tiempo + gerundio",
          explanation:
            "The headline structure for an ongoing stretch: “llevo veinte años tallando” = I've been carving for twenty years. “Llevar” carries the duration.",
          literal: "to carry + time + -ing",
          useWhen:
            "An activity is still going on now: “llevo tres años viviendo acá”.",
          avoidWhen:
            "The action is finished; then use “hace” for ‘ago’.",
          register: "neutral",
          region: "Universal Spanish; very common in Colombia.",
          related: ["llevo", "llevas", "llevamos", "llevan"],
          example: {
            target: "Llevo tres años viviendo acá.",
            translation: "I've been living here for three years."
          }
        },
        {
          term: "llevar + tiempo (sin gerundio)",
          explanation:
            "“Llevar” plus time and a place or state, without a gerund: “llevo tres días acá” = I've been here three days.",
          literal: "to carry + time",
          useWhen:
            "Saying how long you've been somewhere or in a state: “llevo dos horas esperando… o llevo dos horas aquí”.",
          avoidWhen:
            "You need a finished point; use “hace”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["llevo acá", "llevo aquí", "llevo un rato", "llevo días"],
          example: {
            target: "Llevo apenas tres días acá.",
            translation: "I've only been here three days."
          }
        },
        {
          term: "desde",
          explanation:
            "‘Since’ with a starting point — a date or an event. “Desde que llegué”, “desde 2010”.",
          literal: "from / since",
          useWhen:
            "Naming where a stretch began: “desde que llegó”, “desde el lunes”.",
          avoidWhen:
            "You want the length of the stretch, not its start; use “hace” or “llevar”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["desde que", "desde entonces", "desde hace", "a partir de"],
          example: {
            target: "No he parado desde entonces.",
            translation: "I haven't stopped since then."
          }
        },
        {
          term: "desde hace + tiempo",
          explanation:
            "‘For / since’ + a length that reaches the present: “desde hace años” = for years now. It combines “desde” with “hace”.",
          literal: "since it-makes + time",
          useWhen:
            "A stretch that started in the past and still holds: “vengo acá desde hace años”.",
          avoidWhen:
            "You mean a finished ‘ago’; plain “hace” is enough.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["desde", "hace", "desde que", "hace tiempo"],
          example: {
            target: "Vienen desde hace años.",
            translation: "They've been coming for years."
          }
        },
        {
          term: "¿hace cuánto…?",
          explanation:
            "‘How long ago / how long…?’. The standard question for duration, answered with “hace”, “llevar” or “desde”.",
          literal: "ago how-much…?",
          useWhen:
            "Asking about elapsed time: “¿hace cuánto vive acá?”.",
          avoidWhen:
            "You want a clock time (‘what time?’); that is “¿a qué hora?”.",
          register: "warm conversational",
          region: "Universal Spanish.",
          related: ["¿cuánto tiempo?", "¿desde cuándo?", "¿hace rato?", "¿qué tanto?"],
          example: {
            target: "¿Hace cuánto vive acá?",
            translation: "How long have you lived here?"
          }
        },
        {
          term: "mijita / mijito",
          explanation:
            "‘Dear / sweetie’: a warm Colombian term of address, from “mi hijita”. Common from older people to younger ones.",
          literal: "my little daughter/son",
          useWhen:
            "Affectionate, familiar talk: “no he parado, mijita”.",
          avoidWhen:
            "A formal or professional setting where it could sound patronising.",
          register: "warm conversational",
          region: "Colombia, widespread.",
          related: ["mija", "mijo", "mi amor", "sumercé"],
          example: {
            target: "Quédese, mijita, que aquí se vive rico.",
            translation: "Stay, dear, life is good here."
          }
        }
      ],
      note:
        "Spanish has three tools for ‘how long’, and they don't overlap. “Hace” + time is ‘ago’, a finished point: “llegué hace treinta años”. “Desde” marks a starting point, and “desde hace” + time marks a stretch that reaches now. And “llevar” + time (+ gerund) is the everyday way to say an ongoing span: “llevo veinte años tallando”. The big trap for English speakers runs the other way: English says ‘I have been living here for three years’ with a present perfect, but Spanish uses a present — “llevo/vivo”, never a perfect.",
      culture: [
        {
          label: "Barichara, ‘the prettiest town in Colombia’",
          body:
            "Barichara is famous for its stone-paved streets, ochre walls and centuries-old buildings, and it lives largely from careful colonial tourism. Stone carving and traditional trades are part of the draw, so asking a craftsman ‘how long have you been doing this?’ is a natural, respectful opening."
        },
        {
          label: "‘Llevar’ is how Colombians really say it",
          body:
            "Textbooks lead with “hace” and “desde hace”, but in everyday Colombian speech “llevar” does most of the work: “llevo tres años acá”, “llevo dos horas esperando”. If you master one structure for duration, make it “llevar” — it sounds the most local."
        },
        {
          label: "Present tense where English uses a perfect",
          body:
            "The single biggest error English speakers make here is grammatical transfer: they reach for a perfect (‘I have lived’) and produce “he vivido tres años”. Spanish keeps it present — “llevo tres años” or “vivo aquí desde hace tres años”. Fixing this one habit makes your Spanish sound far more natural."
        },
        {
          label: "Slow towns, slow time",
          body:
            "Barichara is built for lingering, and the language of time matches: people talk easily about decades in one place, trades held for a lifetime, visitors who ‘came for years’. The duration structures aren't abstract grammar here — they are how the town describes its own unhurried life."
        }
      ],
      pitfalls: [
        {
          mistake: "Using a present perfect for an ongoing stretch",
          whyItFails:
            "Copying English, learners say “he vivido aquí tres años”. Spanish uses a present for a span still going: “llevo tres años” or “vivo aquí desde hace tres años”.",
          sayInstead: "Llevo tres años viviendo acá."
        },
        {
          mistake: "Confusing “hace” (ago) with “desde hace” (for/since)",
          whyItFails:
            "“Hace tres años” is a finished ‘three years ago’; “desde hace tres años” is a stretch reaching now. Swapping them changes the meaning.",
          sayInstead: "Vivo acá desde hace tres años."
        },
        {
          mistake: "Dropping the gerund after “llevar” when there's an action",
          whyItFails:
            "For an ongoing activity you need the gerund: “llevo veinte años tallando”. “Llevo veinte años tallar” is ungrammatical.",
          sayInstead: "Llevo veinte años tallando."
        },
        {
          mistake: "Using “por” for duration like English ‘for’",
          whyItFails:
            "English ‘for three years’ tempts a calque “por tres años”, but for these durations Spanish uses “hace”, “desde hace” or “llevar”, not “por”.",
          sayInstead: "Llevo tres años acá."
        }
      ],
      variations: [
        {
          form: "Llegué hace treinta años.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A finished point in the past: ‘ago’."
        },
        {
          form: "Llevo veinte años tallando.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "An ongoing activity, with “llevar” + gerund."
        },
        {
          form: "Vivo acá desde hace tres años.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A stretch reaching the present, with “desde hace”."
        },
        {
          form: "No he parado desde entonces.",
          register: "warm conversational",
          region: "Universal Spanish",
          whenToUse: "Marking continuity from a past event with “desde”."
        },
        {
          form: "¿Hace cuánto vive acá?",
          register: "warm conversational",
          region: "Colombia",
          whenToUse: "Asking how long, the everyday Colombian way."
        }
      ],
      prompt: "You have lived in Barichara for three years and still do. Which sounds like a local?",
      choices: [
        "Llevo tres años viviendo acá.",
        "He vivido acá por tres años.",
        "Vivía acá hace tres años ya."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "How do you say you arrived at a finished point, ‘thirty years ago’?",
          choices: [
            "Me vine desde hace treinta años.",
            "Me vine hace treinta años.",
            "Llevo treinta años viniéndome."
          ],
          answer: 1,
          tests: "hace + time for ago"
        },
        {
          prompt: "Which correctly uses “llevar” + gerund for an ongoing activity?",
          choices: [
            "Llevo veinte años a tallar piedra.",
            "Llevo veinte años tallar piedra.",
            "Llevo veinte años tallando piedra."
          ],
          answer: 2,
          tests: "llevar + gerund"
        },
        {
          prompt: "Say a stretch that started in the past and still holds: ‘for years’.",
          choices: [
            "Vienen desde hace años a este taller.",
            "Vinieron hace años a este taller.",
            "Van a venir por años a este taller."
          ],
          answer: 0,
          tests: "desde hace for a stretch to now"
        }
      ]
    },
    en: {
      title: "‘For’, ‘since’ y ‘ago’: decir cuánto tiempo en inglés",
      situation:
        "En Mánchester, Camilo habla con Graham, que arregla bicicletas, y quiere saber cuánto tiempo lleva en la ciudad y en el oficio. Aquí están las tres piezas inglesas del tiempo: ‘for’ para una duración, ‘since’ para un punto de partida y ‘ago’ para ‘hace’. Y la gran trampa: donde el español dice ‘llevo tres años acá’ con un presente, el inglés obliga a un presente perfecto, ‘I have lived here for three years’.",
      setting: {
        who: "Camilo es el visitante curioso; Graham arregla bicicletas y lleva décadas en la ciudad y en el oficio. Camilo pregunta cuánto tiempo, y sale toda la caja de herramientas de la duración.",
        what: "Una charla tranquila de calle sobre cuánto tiempo lleva Graham en la ciudad y arreglando bicicletas.",
        when: "Una tarde sin prisa, con tiempo para conversar.",
        where: "Manchester, en el noroeste de Inglaterra.",
        why: "Porque el error grande del hispanohablante es calcar el presente español: ‘I live here since three years’. El inglés pide un presente perfecto con ‘for’ y distingue ‘for’, ‘since’ y ‘ago’."
      },
      address: {
        form: "mixed",
        who: "Camilo y Graham se tratan de ‘you’; el inglés no marca tú ni usted, y el respeto a alguien mayor se nota en el tono, no en el pronombre.",
        why: "La cercanía respetuosa se logra con el nombre y con un trato amable; el pronombre ‘you’ sirve para todos.",
        ifYouSwitch:
          "No hay un ‘you’ más formal; para sonar respetuoso con alguien mayor, use su nombre y frases suaves como ‘if you don't mind me asking’."
      },
      dialogue: [
        {
          speaker: "Camilo",
          target: "I love this city. How long have you lived here, Graham?",
          translation: "Me encanta esta ciudad. ¿Hace cuánto vive acá, Graham?",
          pronunciation: "ai lav dis SI-ti. jau long jav yu livd jir, GREI-am",
          literal: "Amo esta ciudad. ¿Qué tan largo ha vivido usted aquí, Graham?",
          why: "‘How long have you lived…?’ usa el presente perfecto, obligatorio para preguntar por una duración hasta ahora. El español lo diría en presente (‘¿hace cuánto vive?’), pero el inglés no."
        },
        {
          speaker: "Graham",
          target: "I've lived here for thirty years. I moved from London thirty years ago.",
          translation: "Llevo treinta años viviendo acá. Me vine de Londres hace treinta años.",
          pronunciation: "aiv livd jir for THER-ti yirs. ai muvd from LAN-don THER-ti yirs a-GOU",
          literal: "He vivido aquí por treinta años. Me mudé de Londres treinta años atrás.",
          why: "Dos piezas juntas: ‘for thirty years’ (duración con presente perfecto) y ‘thirty years ago’ (un punto terminado, ‘hace’). El mismo número, dos trabajos distintos."
        },
        {
          speaker: "Camilo",
          target: "And how long have you been fixing bikes? Since you arrived?",
          translation: "¿Y hace cuánto arregla bicicletas? ¿Desde que llegó?",
          pronunciation: "and jau long jav yu bin FIK-sing baiks? sins yu a-RAIVD",
          literal: "¿Y qué tan largo ha estado arreglando bicicletas? ¿Desde que llegó?",
          why: "‘How long have you been fixing…?’ es el presente perfecto continuo, para una actividad en curso. ‘Since you arrived’ usa ‘since’ con un evento, igual que ‘desde que llegó’."
        },
        {
          speaker: "Graham",
          target: "I've been doing it for twenty years. I haven't stopped since then.",
          translation: "Llevo veinte años haciéndolo. No he parado desde entonces.",
          pronunciation: "aiv bin DU-ing it for TWEN-ti yirs. ai JA-vent stopt sins den",
          literal: "He estado haciéndolo por veinte años. No he parado desde entonces.",
          why: "‘For twenty years’ da la duración con presente perfecto; ‘since then’ marca continuidad desde un punto pasado. Note el contraste ‘for’ (cuánto) frente a ‘since’ (desde cuándo)."
        },
        {
          speaker: "Camilo",
          target: "Amazing. I've only been here for three days and I don't want to leave.",
          translation: "Impresionante. Llevo apenas tres días acá y no me quiero ir.",
          pronunciation: "a-MEI-zing. aiv OUN-li bin jir for zri deis and ai dont wont tu liv",
          literal: "Impresionante. He estado solo aquí por tres días y no quiero irme.",
          why: "‘I've only been here for three days’ es el punto clave: donde el español usa un presente (‘llevo tres días’), el inglés exige el presente perfecto con ‘for’, nunca ‘I am here for three days’."
        },
        {
          speaker: "Graham",
          target: "Then stay. People have been coming here for years and end up opening a shop.",
          translation: "Entonces quédese. La gente lleva años viniendo y termina montando taller.",
          pronunciation: "den stei. PI-pol jav bin KA-ming jir for yirs and end ap OU-pe-ning a shop",
          literal: "Entonces quédese. La gente ha estado viniendo aquí por años y termina abriendo una tienda.",
          why: "‘Have been coming for years’ combina presente perfecto continuo con ‘for’ para un tramo que llega al presente, justo donde el español dice ‘lleva años viniendo’ en presente."
        }
      ],
      vocabulary: [
        {
          term: "for + duration",
          explanation:
            "‘Por / desde hace’ una duración. Con el presente perfecto marca cuánto tiempo dura algo hasta ahora: ‘for three years’.",
          literal: "por + duración",
          useWhen:
            "Dar la extensión de un tramo: ‘I've lived here for three years’.",
          avoidWhen:
            "Nombrar el punto de inicio; eso es ‘since’.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["since", "for years", "for a while", "for ages"],
          example: {
            target: "I've lived here for three years.",
            translation: "Llevo tres años viviendo acá."
          }
        },
        {
          term: "since + starting point",
          explanation:
            "‘Desde’ un momento o evento: ‘since 2010’, ‘since I arrived’. Marca el inicio, no la duración.",
          literal: "desde + punto de inicio",
          useWhen:
            "Nombrar dónde empezó el tramo: ‘since you arrived’, ‘since Monday’.",
          avoidWhen:
            "Quiere la duración; use ‘for’.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["for", "since then", "ever since", "from"],
          example: {
            target: "I haven't stopped since then.",
            translation: "No he parado desde entonces."
          }
        },
        {
          term: "ago",
          explanation:
            "‘Hace’ para un punto terminado en el pasado. Va con pasado simple y después del tiempo: ‘thirty years ago’.",
          literal: "atrás / hace",
          useWhen:
            "Un momento concreto ya cumplido: ‘I moved here thirty years ago’.",
          avoidWhen:
            "Un tramo que sigue hasta ahora; use ‘for’ con presente perfecto.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["before", "back then", "earlier", "in the past"],
          example: {
            target: "I moved here thirty years ago.",
            translation: "Me vine para acá hace treinta años."
          }
        },
        {
          term: "have been + -ing (present perfect continuous)",
          explanation:
            "El presente perfecto continuo: ‘have been doing’. Para una actividad en curso con duración: ‘I've been fixing bikes for years’.",
          literal: "he estado + -ando/-iendo",
          useWhen:
            "Una acción que sigue: ‘I've been living here for three years’.",
          avoidWhen:
            "Un estado permanente puede ir con presente perfecto simple: ‘I've known him for years’.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["have been", "has been", "been doing", "been going"],
          example: {
            target: "I've been doing it for twenty years.",
            translation: "Llevo veinte años haciéndolo."
          }
        },
        {
          term: "How long have you…?",
          explanation:
            "‘¿Hace cuánto…?’. La pregunta estándar de duración en inglés, siempre con presente perfecto.",
          literal: "¿qué tan largo has…?",
          useWhen:
            "Preguntar por el tiempo transcurrido: ‘How long have you lived here?’.",
          avoidWhen:
            "Quiere una hora del reloj; eso es ‘what time?’.",
          register: "cálido conversacional",
          region: "Inglés universal.",
          related: ["how long", "since when", "for how long", "how many years"],
          example: {
            target: "How long have you lived here?",
            translation: "¿Hace cuánto vive acá?"
          }
        },
        {
          term: "for vs since (the contrast)",
          explanation:
            "La distinción clave: ‘for’ + duración (‘for three years’), ‘since’ + inicio (‘since 2010’). El español ‘desde’ puede confundir.",
          literal: "por vs desde",
          useWhen:
            "Elegir entre duración e inicio: ‘for years’ o ‘since Monday’.",
          avoidWhen:
            "Mezclarlos: ‘since three years’ es un error clásico.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["for", "since", "ago", "how long"],
          example: {
            target: "I've been here for three days, since Monday.",
            translation: "Llevo tres días acá, desde el lunes."
          }
        },
        {
          term: "end up + -ing",
          explanation:
            "‘Terminar + gerundio’: ‘end up opening a shop’. Muy común para un resultado final no planeado.",
          literal: "terminar + -ando/-iendo",
          useWhen:
            "Un desenlace inesperado: ‘they end up staying’.",
          avoidWhen:
            "Un plan deliberado; ahí ‘decide to’ o ‘plan to’.",
          register: "cálido conversacional",
          region: "Inglés universal.",
          related: ["end up", "wind up", "turn out", "eventually"],
          example: {
            target: "People end up opening a shop.",
            translation: "La gente termina montando taller."
          }
        }
      ],
      note:
        "El inglés reparte lo que el español resuelve con ‘hace’, ‘desde’ y ‘llevar’. ‘For’ da la duración (‘for three years’), ‘since’ da el inicio (‘since 2010’) y ‘ago’ es ‘hace’ para un punto terminado (‘three years ago’). La trampa mayor va al revés del español: donde usted dice ‘llevo tres años acá’ con un presente, el inglés obliga a un presente perfecto —‘I have lived here for three years’—. Y nunca diga ‘since three years’: con una duración va ‘for’.",
      culture: [
        {
          label: "‘Since three years’: el error estrella",
          body:
            "El calco de ‘desde hace tres años’ produce ‘since three years’, que en inglés está mal. Con una duración va ‘for’ (‘for three years’); ‘since’ solo con un punto de partida (‘since 2010’). Corregir esto es media batalla ganada."
        },
        {
          label: "El inglés obliga al presente perfecto",
          body:
            "Donde el español dice ‘llevo tres años acá’ o ‘vivo aquí desde hace tres años’ en presente, el inglés exige ‘I have lived here for three years’. Usar el presente (‘I live here for three years’) es el error más delator del hispanohablante."
        },
        {
          label: "Mánchester, ciudad de oficios",
          body:
            "Mánchester es una ciudad trabajadora del norte de Inglaterra, con fama de gente directa y cálida, no muy distinta del talante santandereano. Preguntarle a alguien cuánto lleva en su oficio es una forma natural y respetuosa de entrar en conversación."
        },
        {
          label: "‘For’ y ‘since’ piden tiempos distintos",
          body:
            "Un detalle fino: ‘for’ y ‘since’ suelen ir con presente perfecto (‘I've been here for/since…’), pero ‘ago’ va con pasado simple (‘I arrived three years ago’). Mezclar los tiempos —‘I have arrived three years ago’— suena mal a oídos nativos."
        }
      ],
      pitfalls: [
        {
          mistake: "Decir ‘I live here since three years’",
          whyItFails:
            "Dos errores en uno: el inglés pide presente perfecto, no presente, y con una duración va ‘for’, no ‘since’.",
          sayInstead: "I have lived here for three years."
        },
        {
          mistake: "Usar ‘since’ con una duración",
          whyItFails:
            "‘Since’ marca un punto de inicio, no un tramo. ‘Since three years’ está mal; ‘since 2010’ está bien.",
          sayInstead: "for three years / since 2010"
        },
        {
          mistake: "Poner ‘ago’ con presente perfecto",
          whyItFails:
            "‘Ago’ señala un momento terminado y va con pasado simple. ‘I have moved here three years ago’ mezcla tiempos.",
          sayInstead: "I moved here three years ago."
        },
        {
          mistake: "Usar el presente para una duración en curso",
          whyItFails:
            "‘I work here for ten years’ calca el español. El inglés necesita ‘have been working’ o ‘have worked’ para un tramo hasta ahora.",
          sayInstead: "I've been working here for ten years."
        }
      ],
      variations: [
        {
          form: "I moved here thirty years ago.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Un punto terminado en el pasado: ‘ago’."
        },
        {
          form: "I've been fixing bikes for twenty years.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una actividad en curso, con presente perfecto continuo."
        },
        {
          form: "I've lived here since 2010.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Un tramo hasta ahora nombrando su inicio, con ‘since’."
        },
        {
          form: "I haven't stopped since then.",
          register: "cálido conversacional",
          region: "Inglés universal",
          whenToUse: "Continuidad desde un momento pasado con ‘since’."
        },
        {
          form: "How long have you lived here?",
          register: "cálido conversacional",
          region: "Inglés universal",
          whenToUse: "Preguntar por la duración hasta ahora."
        }
      ],
      prompt: "You have lived in Manchester for three years and still do. Which is correct English?",
      choices: [
        "I have lived here for three years.",
        "I live here since three years.",
        "I am living here since three years."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál usa bien ‘ago’ para un punto terminado?",
          choices: [
            "I have moved here three years ago.",
            "I moved here three years ago.",
            "I move here since three years ago."
          ],
          answer: 1,
          tests: "‘ago’ va con pasado simple"
        },
        {
          prompt: "Elija ‘for’ o ‘since’ correctamente para una duración.",
          choices: [
            "I've fixed bikes since twenty years.",
            "I've fixed bikes ago twenty years.",
            "I've fixed bikes for twenty years."
          ],
          answer: 2,
          tests: "‘for’ con duración, no ‘since’"
        },
        {
          prompt: "¿Cómo se dice ‘llevo tres días acá’ en inglés natural?",
          choices: [
            "I am here since three days now.",
            "I have been here for three days.",
            "I stay here for three days ago."
          ],
          answer: 1,
          tests: "presente perfecto donde el español usa presente"
        }
      ]
    }
  },
  {
    id: "preterite-and-imperfect-during-a-blackout-in-ibague",
    level: "Developing · Past time and duration",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context", "grammar"],
    domain: "everyday-life",
    register: "courteous",
    pathways: ["independent", "year-12"],
    structure: "preterite-vs-imperfect",
    review: "pending",
    es: {
      title: "When the power went out: choosing preterite or imperfect",
      situation:
        "In Ibagué, Norma tells Mateo what happened at her cousin's wedding when a storm hit during the first dance. The story keeps making the same decision: the imperfect paints the frame, what was going on, what people felt, what the night was like; the preterite names the event that moved the story forward. Listen for “llovía cuando se fue la luz”, “estábamos bailando cuando sonó la alarma”, and the verbs whose meaning changes with the aspect.",
      setting: {
        who: "Norma is the cousin who helped run the wedding and still tells the story with nervous laughter. Mateo missed the party and asks for the full version, so she has to narrate scene, interruption, habit and consequence clearly.",
        what: "A wedding-night story built around a blackout, a false alarm and a frantic search for the breaker box. It naturally repeats the contrast between background in the imperfect and completed events in the preterite.",
        when: "Late on a rainy Saturday night, after the couple's first dance had begun and everyone thought the hardest part of the reception was over.",
        where: "Ibagué, Tolima, in a small reception hall near the music school district.",
        why: "The preterite and imperfect are not two decorative past tenses. They are the central decision in storytelling: the event that advances the plot versus the frame that was true around it."
      },
      address: {
        form: "tú",
        who: "Norma and Mateo are cousins close in age, so tú is natural and warm. The story is detailed, but the relationship is familiar.",
        why: "Tú lets the narration sound like family gossip after the party, not a formal report. It also keeps the examples in the second person friendly when Mateo checks the story.",
        ifYouSwitch:
          "If Norma switched to usted with Mateo, it would sound playful, annoyed or suddenly distant. In this family scene, tú is the plain choice."
      },
      dialogue: [
        {
          speaker: "Norma",
          target: "Llovía durísimo cuando se fue la luz, y todos nos quedamos quietos en la pista.",
          translation: "It was raining really hard when the power went out, and we all froze on the dance floor.",
          pronunciation: "yo-VEE-a du-REE-see-mo KWAN-do se fwe la loos, ee TO-dos nos ke-DA-mos KYE-tos en la PEES-ta",
          literal: "It-was-raining very-hard when itself went the light, and all of-us stayed still on the floor.",
          why: "This is the key pattern. “Llovía” is imperfect because it sets the weather frame; “se fue” and “nos quedamos” are preterite because they are completed events that push the story forward."
        },
        {
          speaker: "Mateo",
          target: "¿Ustedes estaban bailando cuando sonó la alarma del salón?",
          translation: "Were you all dancing when the hall alarm went off?",
          pronunciation: "oos-TE-des es-TA-ban bai-LAN-do KWAN-do so-NO la a-LAR-ma del sa-LON",
          literal: "You-all were dancing when sounded the alarm of-the hall?",
          why: "“Estaban bailando” gives the action in progress, the frame. “Sonó” is the single interruption. English often says this with ‘were dancing when…’; Spanish does it with imperfect plus preterite."
        },
        {
          speaker: "Norma",
          target: "Sí, antes ensayábamos todos los jueves, pero esa noche empezamos tarde y nadie oyó al portero.",
          translation: "Yes, before that we used to rehearse every Thursday, but that night we started late and nobody heard the doorman.",
          pronunciation: "see, AN-tes en-sa-ya-BA-mos TO-dos los HWE-ves, PE-ro E-sa NO-che em-pe-SA-mos TAR-de ee NA-dye o-YO al por-TE-ro",
          literal: "Yes, before we-rehearsed every Thursday, but that night we-started late and nobody heard the doorman.",
          why: "A habit takes the imperfect: “ensayábamos todos los jueves” means ‘we used to rehearse’. One specific night takes the preterite: “empezamos” and “oyó”."
        },
        {
          speaker: "Mateo",
          target: "¿Y tú conocías al técnico, o lo conociste esa noche por la emergencia?",
          translation: "And did you already know the technician, or did you meet him that night because of the emergency?",
          pronunciation: "ee too ko-no-SEE-as al TEK-nee-ko, o lo ko-no-SEES-te E-sa NO-che por la e-mer-HEN-sya",
          literal: "And you knew the technician, or him you-met that night by the emergency?",
          why: "This is one of the meaning-changing verbs. “Conocías” means you already knew him or knew of him. “Conociste” means you met him, a first encounter viewed as an event."
        },
        {
          speaker: "Norma",
          target: "Lo conocía de vista, pero lo conocí de verdad cuando nos abrió el cuarto de los tacos.",
          translation: "I knew him by sight, but I really met him when he opened the breaker room for us.",
          pronunciation: "lo ko-no-SEE-a de VEES-ta, PE-ro lo ko-no-SEE de ver-DAD KWAN-do nos a-BRYO el KWAR-to de los TA-kos",
          literal: "Him I-knew by sight, but him I-met of truth when to-us he-opened the room of the breakers.",
          why: "The same verb changes job with aspect. Imperfect “conocía” is existing familiarity. Preterite “conocí” is the moment of meeting. “Abrió” is preterite because the door-opening happened and was complete."
        },
        {
          speaker: "Mateo",
          target: "¿Alguien sabía qué pasaba, o supieron después que era solo un taco quemado?",
          translation: "Did anyone know what was going on, or did they find out later it was just a burned breaker?",
          pronunciation: "AL-gyen sa-BEE-a ke pa-SA-ba, o su-PYE-ron des-PWES ke E-ra SO-lo un TA-ko ke-MA-do",
          literal: "Someone knew what was-happening, or they-found-out later that it was only a breaker burned?",
          why: "“Sabía” is a state, knew. “Supieron” is the event of finding out. Also notice “pasaba” and “era”, imperfects for what was going on and what was true."
        },
        {
          speaker: "Norma",
          target: "Mi papá podía arreglarlo, y al final pudo calmar a la novia porque no quiso prender velas.",
          translation: "My dad knew how to fix it, and in the end he managed to calm the bride because she refused to light candles.",
          pronunciation: "mi pa-PA po-DEE-a a-rre-GLAR-lo, ee al fi-NAL PU-do kal-MAR a la NO-vya por-KE no KEE-so pren-DER VE-las",
          literal: "My dad was-able to-fix-it, and in the end he-managed to calm the bride because not she-wanted to-light candles.",
          why: "Three aspect-sensitive verbs: “podía” means he had the ability; “pudo” means he managed to do it; “no quiso” means she refused, not merely that she did not feel like it."
        },
        {
          speaker: "Mateo",
          target: "Entonces tenían que evacuar, pero cuando volvió la luz tuvieron que seguir la fiesta.",
          translation: "So you were supposed to evacuate, but when the power came back you had to keep the party going.",
          pronunciation: "en-TON-ses te-NEE-an ke e-va-KWAR, PE-ro KWAN-do vol-VYO la loos tu-VYE-ron ke se-GEER la FYES-ta",
          literal: "Then they-had to evacuate, but when returned the light they-had to continue the party.",
          why: "“Tenían que” can mean the obligation or plan in the background, ‘they were supposed to’. “Tuvieron que” is preterite, the obligation became an event they actually carried out."
        }
      ],
      vocabulary: [
        {
          term: "el pretérito",
          explanation:
            "The preterite is the event tense. It presents an action as complete and whole, even if it lasted a long time: “viví seis años en Ibagué” is preterite because those six years are closed.",
          literal: "the preterite",
          useWhen:
            "A completed action moves the story forward: “se fue la luz”, “sonó la alarma”, “empezamos tarde”.",
          avoidWhen:
            "You are describing what was going on, what someone felt, the weather, the time, age or a repeated habit. Those usually want the imperfect.",
          register: "neutral",
          region: "Universal Spanish; Colombia also uses this simple past where Spain might use the present perfect.",
          related: ["ayer", "anoche", "entonces", "de repente"],
          example: {
            target: "Anoche se fue la luz durante el baile.",
            translation: "Last night the power went out during the dance."
          }
        },
        {
          term: "el imperfecto",
          explanation:
            "The imperfect is the frame tense. It describes the background: weather, time, age, ongoing action, description, habit and mental or emotional states that were simply true while the story happened.",
          literal: "the imperfect",
          useWhen:
            "Setting the scene: “llovía”, “estábamos bailando”, “la novia estaba nerviosa”, “ensayábamos todos los jueves”.",
          avoidWhen:
            "You mean the completed incident itself. “Se iba la luz” sounds habitual or ongoing; “se fue la luz” is the actual outage.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["mientras", "siempre", "todos los días", "generalmente"],
          example: {
            target: "Llovía y la música sonaba bajito.",
            translation: "It was raining and the music was playing softly."
          }
        },
        {
          term: "imperfecto + pretérito",
          explanation:
            "The storytelling pattern: the imperfect sets the scene, then the preterite interrupts it. This is the contrast that makes the choice useful instead of abstract.",
          literal: "frame + event",
          useWhen:
            "A background action is interrupted: “llovía cuando se fue la luz”, “estábamos bailando cuando sonó la alarma”.",
          avoidWhen:
            "Both actions are completed steps in a sequence; then both can be preterite: “entré, saludé y bailé”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["cuando", "mientras", "de repente", "en ese momento"],
          example: {
            target: "Estábamos bailando cuando sonó la alarma.",
            translation: "We were dancing when the alarm went off."
          }
        },
        {
          term: "solía + infinitivo",
          explanation:
            "A clear way to say ‘used to’. It is built from the imperfect of “soler” plus an infinitive: “solíamos ensayar” means we used to rehearse.",
          literal: "used to + infinitive",
          useWhen:
            "You want to make a past habit explicit, especially when contrasting it with a one-time event.",
          avoidWhen:
            "The event happened once. “Solíamos empezar tarde esa noche” is wrong because “esa noche” points to one occasion.",
          register: "neutral",
          region: "Universal Spanish; common in educated and careful speech.",
          related: ["antes", "cada vez que", "generalmente", "todos los jueves"],
          example: {
            target: "Antes solíamos ensayar todos los jueves.",
            translation: "Before, we used to rehearse every Thursday."
          }
        },
        {
          term: "sabía / supe",
          explanation:
            "With “saber”, aspect changes the meaning. “Sabía” means knew, had the information or ability already. “Supe” means found out, the moment the information arrived.",
          literal: "I knew / I found out",
          useWhen:
            "Use imperfect for existing knowledge and preterite for discovery: “sabía la dirección”, “supe la verdad anoche”.",
          avoidWhen:
            "Translating every English ‘knew’ as “supe”. If there was no discovery event, use “sabía”.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["saber", "enterarse", "darse cuenta", "averiguar"],
          example: {
            target: "No sabía qué pasaba, pero después supe la verdad.",
            translation: "I didn't know what was happening, but later I found out the truth."
          }
        },
        {
          term: "conocía / conocí",
          explanation:
            "“Conocía” means knew a person or place already. “Conocí” means met or encountered for the first time. This is one of the most important silent errors for learners.",
          literal: "I knew / I met",
          useWhen:
            "Existing familiarity takes imperfect; first meeting takes preterite: “lo conocía de vista”, “lo conocí esa noche”.",
          avoidWhen:
            "Saying “conocí a mi profesor” when you mean you already knew him during that period, not that you met him then.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["ver de vista", "presentarse", "encontrarse", "reconocer"],
          example: {
            target: "La conocía del barrio, pero la conocí mejor en la fiesta.",
            translation: "I knew her from the neighborhood, but I got to know her better at the party."
          }
        },
        {
          term: "quería / quiso / no quiso",
          explanation:
            "“Quería” is a want or intention in the background. “Quiso” often means tried or was willing. “No quiso” usually means refused, a completed decision not to do it.",
          literal: "wanted / tried or agreed / refused",
          useWhen:
            "Describing a state of wanting with imperfect, or a decisive attempt or refusal with preterite.",
          avoidWhen:
            "Flattening all three into ‘wanted’. “No quiso abrir” is not just ‘didn't want to open’; it means refused to open.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["intentar", "negarse", "aceptar", "preferir"],
          example: {
            target: "La novia quería seguir, pero el portero no quiso abrir.",
            translation: "The bride wanted to continue, but the doorman refused to open."
          }
        },
        {
          term: "podía / pudo / tenía que / tuvo que",
          explanation:
            "“Podía” is ability or possibility; “pudo” is managed to. “Tenía que” is an obligation in the frame, often was supposed to; “tuvo que” is had to and did.",
          literal: "could / managed to / was supposed to / had to",
          useWhen:
            "You need the difference between capacity and successful event, or between a plan and an obligation that actually happened.",
          avoidWhen:
            "Using “podía” for a successful result. “Pudo calmarla” means he managed to calm her; “podía calmarla” only says he was able to.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["lograr", "ser capaz", "deber", "obligarse"],
          example: {
            target: "Mi papá podía ayudar y al final pudo arreglarlo.",
            translation: "My dad was able to help, and in the end he managed to fix it."
          }
        }
      ],
      note:
        "Make one decision every time: preterite equals the event, imperfect equals the frame. A completed action that advances the story takes the preterite, even when it lasted years: “viví seis años en Ibagué” is closed, so it is preterite. Background, description, weather, time, age, habits and states take the imperfect: “llovía”, “era tarde”, “tenía miedo”, “solíamos bailar”. The most useful pattern is interlocking: imperfect sets the scene, preterite interrupts it. “Llovía durísimo cuando se fue la luz.” Time markers help but do not replace meaning. “Ayer, anoche, el año pasado, de repente, entonces” often point to preterite. “Siempre, todos los días, mientras, cada vez que, generalmente” often point to imperfect. In Colombia, remember the neighboring present-perfect lesson: people commonly say “¿ya comiste?” where Spain might say “¿has comido?”. That is a separate choice; here the axis is preterite versus imperfect.",
      culture: [
        {
          label: "Ibagué tells stories through music",
          body:
            "Ibagué is known as Colombia's music city, so a wedding reception with live musicians is a natural scene rather than decoration. The grammar fits the place: a storyteller needs the imperfect for the mood, the rain and the ongoing song, then the preterite for the blackout and the alarm."
        },
        {
          label: "Colombian past time is simple, but not simplistic",
          body:
            "Colombian Spanish often chooses the simple preterite where peninsular Spanish might choose a present perfect: “¿ya comiste?” is normal. That does not erase the imperfect. Once the story is clearly in the past, Colombians still make the same narrative contrast between the event and the frame."
        },
        {
          label: "Time markers are clues, not laws",
          body:
            "Words like “ayer” and “de repente” often travel with the preterite because they point to events. Words like “mientras” and “siempre” often travel with the imperfect because they point to background or habit. But the speaker's view wins: a long period can be preterite if it is closed, and a short moment can be imperfect if it is scenery."
        },
        {
          label: "Aspect-changing verbs carry real consequences",
          body:
            "The dangerous mistakes are often invisible. “No quiso ayudar” means refused to help, not merely lacked desire. “Pudo salir” means managed to leave, not simply could leave. These are not advanced decorations; they are everyday meanings that change what happened in the story."
        }
      ],
      pitfalls: [
        {
          mistake: "Choosing by length of time",
          whyItFails:
            "Length does not decide the tense. “Vivía en Ibagué” describes a period as background; “viví seis años en Ibagué” treats the six years as a closed event.",
          sayInstead: "Viví seis años en Ibagué, pero antes vivía en Armenia."
        },
        {
          mistake: "Using preterite for scenery",
          whyItFails:
            "“Llovió cuando se fue la luz” sounds like it rained as an event, not that rain was the background. For weather already in progress, use the imperfect.",
          sayInstead: "Llovía cuando se fue la luz."
        },
        {
          mistake: "Using imperfect for the interruption",
          whyItFails:
            "“Se iba la luz” sounds ongoing or habitual. If the power went out once and the story moved forward, use the preterite.",
          sayInstead: "Se fue la luz mientras bailábamos."
        },
        {
          mistake: "Missing the meaning change in “no quiso”",
          whyItFails:
            "“No quería abrir” means he did not want to open, a state. “No quiso abrir” means he refused to open, a completed decision.",
          sayInstead: "El portero no quiso abrir la puerta."
        }
      ],
      variations: [
        {
          form: "Llovía cuando se fue la luz.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "The core story pattern: background in imperfect, interruption in preterite."
        },
        {
          form: "Antes solíamos ensayar todos los jueves.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A past habit, the Spanish equivalent of ‘used to’."
        },
        {
          form: "Anoche empezamos tarde.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A completed event at a specific past time."
        },
        {
          form: "No sabía nada, pero después supe la verdad.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "Existing knowledge versus finding out."
        },
        {
          form: "No quiso prender velas.",
          register: "neutral",
          region: "Universal Spanish",
          whenToUse: "A refusal, not just a lack of desire."
        }
      ],
      prompt: "You are telling a story: the rain was already happening, then the power went out. Which sentence chooses the tenses well?",
      choices: [
        "Llovió durísimo cuando se iba la luz.",
        "Llovía durísimo cuando se fue la luz.",
        "Llovía durísimo cuando se iba la luz."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence clearly describes a past habit?",
          choices: [
            "Ensayamos todos los jueves esa noche.",
            "Ensayamos anoche a las ocho.",
            "Solíamos ensayar todos los jueves."
          ],
          answer: 2,
          tests: "habitual past with solía"
        },
        {
          prompt: "You found out the truth last night. Which verb form carries that meaning?",
          choices: [
            "Anoche supe la verdad.",
            "Anoche sabía la verdad.",
            "Anoche solía saber la verdad."
          ],
          answer: 0,
          tests: "supe means found out"
        },
        {
          prompt: "Which sentence says he managed to calm the bride, not just that he had the ability?",
          choices: [
            "Mi papá podía calmar a la novia.",
            "Mi papá solía calmar a la novia.",
            "Mi papá pudo calmar a la novia."
          ],
          answer: 2,
          tests: "pudo means managed to"
        }
      ]
    },
    en: {
      title: "Past simple, past continuous and ‘used to’: narrar en inglés",
      situation:
        "En Amarillo, Elena le cuenta a Mark lo que pasó durante una recepción en un salón estilo rancho cuando una tormenta apagó las luces. Usted ya conoce la diferencia española entre pretérito e imperfecto; aquí aprende cómo el inglés la reparte sin cambiar tanto el verbo. El marco suele ir con pasado continuo, ‘it was raining when the lights went out’. Los hábitos se dicen con ‘used to’ o ‘would’. Los eventos cerrados usan pasado simple.",
      setting: {
        who: "Elena es colombiana y está contando una historia en inglés. Mark no estuvo en la recepción y le pide detalles, así que ella tiene que distinguir el fondo de los hechos sin confiar en terminaciones como “-aba” o “-ía”.",
        what: "El relato de una recepción en la que se fue la luz, sonó una alarma y alguien tuvo que calmar a la novia. La escena obliga a escoger entre pasado simple, pasado continuo y “used to”.",
        when: "Un sábado lluvioso por la noche, durante el primer baile, cuando todo parecía bajo control hasta que falló la electricidad.",
        where: "Amarillo, Texas, en un salón estilo rancho cerca del borde del Panhandle.",
        why: "Porque el inglés no marca el mismo contraste en una pareja de tiempos como pretérito e imperfecto. Lo reparte entre ‘was doing’, ‘used to / would’ y el pasado simple."
      },
      address: {
        form: "mixed",
        who: "Elena y Mark se dicen ‘you’. El inglés no tiene tú y usted, así que la cercanía viene del tono de la conversación y de que son amigos.",
        why: "La lección se concentra en tiempo y aspecto, no en tratamiento. ‘You’ sirve igual para una amiga, un desconocido o un jefe.",
        ifYouSwitch:
          "No hay otro pronombre para cambiar. Si quiere más distancia, cambie el vocabulario o agregue cortesía, no cambie ‘you’."
      },
      dialogue: [
        {
          speaker: "Elena",
          target: "It was raining hard when the lights went out, and everyone froze on the dance floor.",
          translation: "Llovía durísimo cuando se fue la luz, y todos se quedaron quietos en la pista.",
          pronunciation: "it was REI-ning jard wen de laits went aut, and EV-ri-wan frouz on de dans flor",
          literal: "Estaba lloviendo duro cuando las luces salieron, y todos se congelaron en la pista.",
          why: "El inglés usa ‘was raining’ para el marco en progreso y ‘went out’ para el evento. No existe una terminación verbal única que equivalga al imperfecto español."
        },
        {
          speaker: "Mark",
          target: "Were you dancing when the hall alarm went off?",
          translation: "¿Ustedes estaban bailando cuando sonó la alarma del salón?",
          pronunciation: "wer yu DAN-sing wen de jol a-LARM went of",
          literal: "¿Estaban ustedes bailando cuando la alarma del salón se fue encendida?",
          why: "‘Were you dancing’ traduce bien “estaban bailando”. ‘Went off’ es pasado simple porque la alarma sonó como hecho puntual."
        },
        {
          speaker: "Elena",
          target: "Yes. We used to rehearse every Thursday, but that night we started late and nobody heard the doorman.",
          translation: "Sí. Antes ensayábamos todos los jueves, pero esa noche empezamos tarde y nadie oyó al portero.",
          pronunciation: "yes. wi yust tu ri-JERS EV-ri THERZ-dei, bat dat nait wi STAR-ted leit and NOU-ba-di herd de DOR-man",
          literal: "Sí. Usábamos ensayar cada jueves, pero esa noche empezamos tarde y nadie oyó al portero.",
          why: "Para hábitos pasados, el inglés natural dice ‘used to rehearse’. El error colombiano es usar demasiado ‘we were rehearsing’ cuando quiere decir “ensayábamos” como costumbre."
        },
        {
          speaker: "Mark",
          target: "Did you know the technician already, or did you meet him that night?",
          translation: "¿Ya conocías al técnico, o lo conociste esa noche?",
          pronunciation: "did yu nou de tek-NI-shan ol-RE-di, or did yu mit jim dat nait",
          literal: "¿Sabías/conocías al técnico ya, o lo encontraste esa noche?",
          why: "El inglés no cambia de tiempo para ‘conocía’ y ‘conocí’. Cambia el verbo: ‘know’ para conocer de antes, ‘meet’ para conocer por primera vez."
        },
        {
          speaker: "Elena",
          target: "I knew him by sight, but I really met him when he opened the breaker room for us.",
          translation: "Lo conocía de vista, pero lo conocí de verdad cuando nos abrió el cuarto de los tacos.",
          pronunciation: "ai nu jim bai sait, bat ai RI-li met jim wen ji OU-pend de BREI-ker rum for as",
          literal: "Lo sabía por vista, pero realmente lo conocí cuando abrió el cuarto de interruptores para nosotros.",
          why: "‘Knew’ cubre la familiaridad previa; ‘met’ cubre el encuentro. Para un hispanohablante, esta pareja es la forma inglesa de resolver “conocía” frente a “conocí”."
        },
        {
          speaker: "Mark",
          target: "Did anyone know what was happening, or did you find out later it was just a burned breaker?",
          translation: "¿Alguien sabía qué pasaba, o supieron después que era solo un taco quemado?",
          pronunciation: "did EN-i-wan nou wat was JA-pe-ning, or did yu faind aut LEI-ter it was yust a bernd BREI-ker",
          literal: "¿Alguien sabía qué estaba pasando, o encontraron afuera después que era solo un interruptor quemado?",
          why: "El contraste español “sabía / supe” se expresa en inglés con verbos distintos: ‘know’ para saber y ‘find out’ para enterarse."
        },
        {
          speaker: "Elena",
          target: "My dad could fix it, and in the end he managed to calm the bride because she refused to light candles.",
          translation: "Mi papá podía arreglarlo, y al final pudo calmar a la novia porque ella se negó a prender velas.",
          pronunciation: "mai dad kud fiks it, and in di end ji MA-nijd tu kam de braid bi-KOZ shi ri-FIUZD tu lait KAN-dlz",
          literal: "Mi papá podía arreglarlo, y al final logró calmar a la novia porque ella rechazó prender velas.",
          why: "El inglés debe escoger palabras, no solo tiempos: ‘could’ es capacidad, ‘managed to’ es logró, y ‘refused to’ traduce el sentido fuerte de “no quiso”."
        },
        {
          speaker: "Mark",
          target: "So you were supposed to evacuate, but when the lights came back, you had to keep the party going.",
          translation: "Entonces tenían que evacuar, pero cuando volvió la luz tuvieron que seguir la fiesta.",
          pronunciation: "sou yu wer su-POUZD tu i-VA-kiu-eit, bat wen de laits keim bak, yu jad tu kip de PAR-ti GOU-ing",
          literal: "Entonces se suponía que evacuaran, pero cuando las luces volvieron, tuvieron que mantener la fiesta andando.",
          why: "‘Were supposed to’ traduce la obligación como marco o plan. ‘Had to’ presenta la obligación cumplida. Es el equivalente práctico de “tenían que” frente a “tuvieron que”."
        }
      ],
      vocabulary: [
        {
          term: "past simple",
          explanation:
            "El pasado simple inglés cuenta el evento cerrado: ‘the lights went out’, ‘we started late’, ‘he opened the door’. Sirve para casi todo hecho completo de una narración.",
          literal: "pasado simple",
          useWhen:
            "Un hecho avanza la historia o pertenece a una secuencia terminada: ‘I arrived, I called, he opened’.",
          avoidWhen:
            "Necesita mostrar una acción en progreso que fue interrumpida; ahí suele ir ‘was/were + -ing’.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["went", "started", "opened", "heard"],
          example: {
            target: "The lights went out during the dance.",
            translation: "Se fue la luz durante el baile."
          }
        },
        {
          term: "past continuous",
          explanation:
            "‘Was/were + -ing’ muestra una acción en progreso: ‘it was raining’, ‘we were dancing’. Es una de las formas inglesas de traducir el marco imperfecto.",
          literal: "estaba + -ando/-iendo",
          useWhen:
            "Algo estaba pasando cuando ocurrió otra cosa: ‘we were dancing when the alarm went off’.",
          avoidWhen:
            "Un hábito pasado. Para “ensayábamos todos los jueves”, diga ‘we used to rehearse’, no ‘we were rehearsing every Thursday’.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["was raining", "were dancing", "was happening", "while"],
          example: {
            target: "We were dancing when the alarm went off.",
            translation: "Estábamos bailando cuando sonó la alarma."
          }
        },
        {
          term: "used to + verb",
          explanation:
            "La forma principal para un hábito pasado que ya no es el foco presente: ‘we used to rehearse’. No significa ‘usar’ en este caso.",
          literal: "solía / antes + imperfecto",
          useWhen:
            "Traducir “solía” o un imperfecto habitual: ‘we used to go’, ‘she used to call every day’.",
          avoidWhen:
            "Un evento único. ‘We used to start late that night’ no funciona porque ‘that night’ es una sola ocasión.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["would", "every Thursday", "back then", "usually"],
          example: {
            target: "We used to rehearse every Thursday.",
            translation: "Antes ensayábamos todos los jueves."
          }
        },
        {
          term: "would for past habits",
          explanation:
            "‘Would’ también puede marcar hábito pasado: ‘Every summer, we would visit my aunt’. Es más narrativo y necesita un contexto habitual claro.",
          literal: "solía / hacía algo repetidamente",
          useWhen:
            "Ya está claro que habla del pasado y describe una repetición: ‘Every Friday, we would dance after dinner’.",
          avoidWhen:
            "Estados como ‘know’, ‘live’ o ‘be’. Para esos, ‘used to’ suele ser mejor: ‘I used to know him’, no ‘I would know him’.",
          register: "narrativo",
          region: "Inglés universal.",
          related: ["used to", "usually", "every Friday", "back then"],
          example: {
            target: "Every Friday, we would dance after dinner.",
            translation: "Todos los viernes bailábamos después de comer."
          }
        },
        {
          term: "know / find out",
          explanation:
            "El inglés no usa una sola pareja de tiempos para “sabía / supe”. Usa dos verbos: ‘know’ para saber y ‘find out’ para enterarse.",
          literal: "saber / enterarse",
          useWhen:
            "‘I knew the address’ para conocimiento previo; ‘I found out later’ para el momento de descubrirlo.",
          avoidWhen:
            "Traducir ‘supe’ como ‘I knew’ cuando significa ‘me enteré’. Eso borra el evento de descubrimiento.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["knew", "found out", "realized", "learned"],
          example: {
            target: "I didn't know, but later I found out.",
            translation: "No sabía, pero después supe."
          }
        },
        {
          term: "know / meet",
          explanation:
            "Para “conocía / conocí”, el inglés cambia de verbo. ‘Know’ es conocer de antes; ‘meet’ es conocer por primera vez.",
          literal: "conocer / conocer por primera vez",
          useWhen:
            "‘I knew him’ si ya había familiaridad; ‘I met him’ si fue el primer encuentro.",
          avoidWhen:
            "Decir ‘I knew him last night’ cuando quiere decir que lo conoció anoche. Lo natural es ‘I met him last night’.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["knew", "met", "by sight", "introduced"],
          example: {
            target: "I knew him by sight, but I met him that night.",
            translation: "Lo conocía de vista, pero lo conocí esa noche."
          }
        },
        {
          term: "could / managed to / refused to",
          explanation:
            "Estas palabras cubren cambios de aspecto que el español marca con “podía / pudo / no quiso”. ‘Could’ es capacidad, ‘managed to’ es logró, ‘refused to’ es se negó.",
          literal: "podía / logró / se negó a",
          useWhen:
            "Quiere distinguir entre habilidad, éxito real y negativa: ‘could fix it’, ‘managed to fix it’, ‘refused to open’.",
          avoidWhen:
            "Usar solo ‘could’ para todo. ‘He could fix it’ no confirma que lo arregló; ‘he managed to fix it’ sí.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["could", "managed", "refused", "was able to"],
          example: {
            target: "He could help, and he managed to fix it.",
            translation: "Podía ayudar, y logró arreglarlo."
          }
        },
        {
          term: "was supposed to / had to",
          explanation:
            "‘Was supposed to’ traduce una obligación o plan de fondo. ‘Had to’ traduce una obligación que se volvió hecho y normalmente se cumplió.",
          literal: "tenía que / tuvo que",
          useWhen:
            "Contrastar plan con acción: ‘we were supposed to leave, but we had to stay’.",
          avoidWhen:
            "Usar ‘had to’ si solo habla de una expectativa que no se cumplió. Ahí ‘was supposed to’ es más preciso.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["supposed to", "had to", "needed to", "was expected to"],
          example: {
            target: "We were supposed to leave, but we had to stay.",
            translation: "Teníamos que salir, pero tuvimos que quedarnos."
          }
        }
      ],
      note:
        "El inglés no tiene una oposición verbal tan limpia como pretérito frente a imperfecto. Por eso usted debe traducir la función, no la terminación. Si en español el imperfecto marca una acción en progreso interrumpida, el inglés suele usar pasado continuo: “it was raining when the lights went out”. Si marca hábito, use “used to” o, con contexto claro, “would”: “we used to rehearse every Thursday”, “every summer we would travel”. Si el hecho está completo y mueve la historia, use pasado simple: “the alarm went off”, “we started late”. Los hispanohablantes suelen producir demasiado ‘was doing’ porque ven “-aba / -ía” y traducen mecánicamente, y producen muy poco ‘used to’. Recuerde además que varios contrastes españoles se expresan con vocabulario inglés: “supe” es “found out”, “conocí” es “met”, “pudo” es “managed to” y “no quiso” es “refused to”.",
      culture: [
        {
          label: "El inglés pone el aspecto en varias cajas",
          body:
            "En español usted mira una forma verbal y sabe mucho: “llovía” no funciona igual que “llovió”. En inglés, parte de esa información va al tiempo verbal, parte a expresiones como ‘used to’ y parte al verbo escogido. Por eso traducir palabra por palabra falla."
        },
        {
          label: "‘Was doing’ no traduce todos los imperfectos",
          body:
            "“I was dancing” sirve para “estaba bailando”, pero no para cada “bailaba”. Si “bailaba” significa hábito, el inglés natural es ‘I used to dance’ o ‘I would dance’. Este es uno de los errores más persistentes de hablantes de español en B1."
        },
        {
          label: "Amarillo como escena tejana",
          body:
            "La escena está fuera de Colombia porque esta dirección enseña inglés a una persona colombiana. En una recepción cerca de Amarillo, la historia no necesita vocabulario raro; necesita el inglés normal para narrar clima, interrupciones, hábitos y decisiones."
        },
        {
          label: "El pasado simple hace más trabajo de lo que parece",
          body:
            "Muchos estudiantes evitan el pasado simple porque sienten que una historia necesita formas más largas. Pero el inglés usa el pasado simple para la columna vertebral del relato: ‘the lights went out, the alarm went off, he opened the door’. Lo largo se reserva para el marco."
        }
      ],
      pitfalls: [
        {
          mistake: "Decir ‘we were rehearsing every Thursday’ por hábito",
          whyItFails:
            "El pasado continuo suena como una acción en progreso, no como una costumbre estable. Para “ensayábamos todos los jueves”, use ‘used to’.",
          sayInstead: "We used to rehearse every Thursday."
        },
        {
          mistake: "Traducir ‘supe’ como ‘I knew’",
          whyItFails:
            "‘I knew’ describe conocimiento previo. Si la idea es que se enteró en ese momento, el inglés pide ‘found out’.",
          sayInstead: "I found out later."
        },
        {
          mistake: "Usar ‘could’ cuando sí logró hacerlo",
          whyItFails:
            "‘He could calm her’ dice que tenía la capacidad, pero no confirma el resultado. Para “pudo calmarla”, diga ‘managed to’.",
          sayInstead: "He managed to calm her."
        },
        {
          mistake: "Decir ‘I knew him last night’ por ‘lo conocí anoche’",
          whyItFails:
            "Para conocer a alguien por primera vez, el inglés usa ‘meet’. ‘Knew him last night’ suena a que ya lo conocía durante esa noche.",
          sayInstead: "I met him last night."
        }
      ],
      variations: [
        {
          form: "It was raining when the lights went out.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Marco en progreso más evento que interrumpe."
        },
        {
          form: "We used to rehearse every Thursday.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Un hábito pasado, equivalente a “solíamos” o “ensayábamos”."
        },
        {
          form: "That night we started late.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Un evento único y cerrado en el pasado."
        },
        {
          form: "I didn't know, but later I found out.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Distinguir “sabía” de “supe” en inglés."
        },
        {
          form: "She refused to light candles.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Traducir “no quiso” como negativa clara."
        }
      ],
      prompt: "Quiere decir que la lluvia era el marco y luego se apagaron las luces. ¿Cuál suena natural en inglés?",
      choices: [
        "It rained hard when the lights were going out.",
        "It was raining hard when the lights went out.",
        "It used to rain hard when the lights went out."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál traduce bien el hábito “ensayábamos todos los jueves”?",
          choices: [
            "We were rehearsing every Thursday.",
            "We rehearsed right now every Thursday.",
            "We used to rehearse every Thursday."
          ],
          answer: 2,
          tests: "used to for habitual past"
        },
        {
          prompt: "¿Cómo dice en inglés que se enteró de la verdad anoche?",
          choices: [
            "I found out the truth last night.",
            "I knew the truth last night.",
            "I was knowing the truth last night."
          ],
          answer: 0,
          tests: "found out for supe"
        },
        {
          prompt: "¿Cuál dice que logró calmar a la novia, no solo que podía hacerlo?",
          choices: [
            "He could calm the bride.",
            "He used to calm the bride.",
            "He managed to calm the bride."
          ],
          answer: 2,
          tests: "managed to for pudo"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/71-past-time-and-duration.js");
