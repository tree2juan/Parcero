/*
 * Lesson block: developing / coming back and becoming.
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
 * The three verbs here — regresar, permanecer and convertirse — handle coming
 * back, staying put, and becoming something else. The two directions are
 * mirrors: same number of dialogue turns, vocabulary entries, culture notes,
 * pitfalls, variations and practice questions, and the same optional slots
 * filled on the same rows. That is enforced by test/shape.test.js, not by good
 * intentions.
 */
lessons.push(
  {
    id: "returning-home-to-ibague-after-years-away",
    level: "Developing · Coming back and becoming",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "intimate",
    verb: "regresar",
    review: "pending",
    es: {
      title: "Coming back to Ibagué after years away",
      situation:
        "Alex returns to Ibagué after living away for several years. A cousin waits for him in front of the family house and notices that he recognizes some things and not others. You need to hear the nuance of regresar while remembering that volver is the more common word in quick conversation.",
      setting: {
        who: "Diana is Alex's cousin and stayed close to the family house; Alex left years ago and is arriving with a suitcase and a nervous smile.",
        what: "A first conversation on the doorstep about coming back to a hometown, not just returning an object or doing something again.",
        when: "Late afternoon, when neighbors are outside and the street is loud enough to make the arrival public.",
        where: "Ibagué, on a residential street below the hills, outside the family house Alex has not entered in years.",
        why: "Because regresar carries a little more weight than the everyday volver. It fits a real return after absence, while quick speech often says “ya vuelvo” or “volví ayer.”"
      },
      address: {
        form: "tú",
        who: "Diana and Alex use tú as cousins who know each other well, even after years apart.",
        why: "Family closeness keeps the pronoun warm and simple. For you, tú is the right frame for an emotional doorstep, not a formal visit.",
        ifYouSwitch:
          "Usted would sound like a joke or a wound between cousins. Vos is not the neutral choice for this Ibagué family scene."
      },
      dialogue: [
        {
          speaker: "Diana",
          target: "¡Alex! Al fin regresaste a la casa.",
          translation: "Alex! You finally came back to the house.",
          pronunciation: "AH-leks! al feen rreh-greh-SAS-teh ah lah KAH-sah",
          literal: "Alex! At last you-returned to the house.",
          why: "Regresaste fits because this is not a two-minute errand. It is a return after years away, so the verb can carry a little emotional weight."
        },
        {
          speaker: "Alex",
          target: "Sí, regresé ayer a Ibagué y hoy vine derecho para acá.",
          translation: "Yes, I came back to Ibagué yesterday and came straight here today.",
          pronunciation: "see, rreh-greh-SEH ah-YER ah ee-bah-GEH ee oy BEE-neh deh-REH-choh PAH-rah ah-KAH",
          literal: "Yes, I-returned yesterday to Ibagué and today I-came straight to here.",
          why: "Regresé gives a clean preterite for the completed return. The sentence is about the trip back, not repeating an action."
        },
        {
          speaker: "Diana",
          target: "La cuadra cambió, pero la puerta permanece igual.",
          translation: "The block changed, but the door remains the same.",
          pronunciation: "lah KWAH-drah kam-BYOH, PEH-roh lah PWER-tah per-mah-NEH-seh ee-GWAL",
          literal: "The block changed, but the door remains same.",
          why: "This line lets regresar sit beside permanecer without making permanecer the lesson. The contrast is emotional: the place changed and also stayed recognizable."
        },
        {
          speaker: "Alex",
          target: "Me dio miedo regresar y sentirme visitante.",
          translation: "I was afraid to come back and feel like a visitor.",
          pronunciation: "meh DYOH MYEH-doh rreh-greh-SAR ee sen-TEER-meh bee-see-TAN-teh",
          literal: "It gave me fear to-return and feel-myself visitor.",
          why: "Regresar can name the action and the fear around it. It is stronger here than “pasar por la casa,” because he is facing a place that used to be his."
        },
        {
          speaker: "Diana",
          target: "Tranquilo. Si quieres sonar normal, di “ya volví”; si quieres sonar más serio, “regresé”.",
          translation: "Relax. If you want to sound normal, say “I'm back”; if you want to sound more serious, “I returned.”",
          pronunciation: "tran-KEE-loh. see KYEH-res soh-NAR nor-MAL, dee yah bol-BEE; see KYEH-res soh-NAR mas SEH-ryoh, rreh-greh-SEH",
          literal: "Calm. If you-want to-sound normal, say already I-came-back; if you-want to-sound more serious, I-returned.",
          why: "This is the honest split: volver is the common spoken verb. Regresar is clear and correct, but it often sounds a bit more deliberate."
        },
        {
          speaker: "Alex",
          target: "Entonces: ya volví, pero también regresé a lo mío.",
          translation: "Then: I'm back, but I also returned to what is mine.",
          pronunciation: "en-TON-ses: yah bol-BEE, PEH-roh tam-BYEN rreh-greh-SEH ah loh MEE-oh",
          literal: "Then: already I-came-back, but also I-returned to the mine.",
          why: "He uses both verbs with purpose. Ya volví sounds like ordinary arrival; regresé a lo mío carries the deeper return."
        }
      ],
      vocabulary: [
        {
          term: "regresar",
          explanation:
            "To return or come back, often with a slightly more formal or deliberate feel than volver.",
          literal: "to return",
          useWhen:
            "Coming back to a city, house, job, country, or stage of life after being away.",
          avoidWhen:
            "You need the quick everyday “I'll be right back.” Colombians usually say “ya vuelvo,” not “ya regreso.”",
          register: "neutral formal",
          region: "Universal Spanish; understood everywhere in Colombia.",
          related: ["volver", "retornar", "llegar de nuevo", "venir de vuelta"],
          example: {
            target: "Regresé ayer a Ibagué.",
            translation: "I came back to Ibagué yesterday."
          }
        },
        {
          term: "volver",
          explanation:
            "The more common everyday verb for coming back in speech. It is the one Colombians reach for quickly.",
          literal: "to come back",
          useWhen:
            "Quick returns, ordinary arrival, and short spoken promises that you will be right back.",
          avoidWhen:
            "You want the more formal, careful, or emotionally marked sound of regresar.",
          register: "neutral spoken",
          region: "General Colombian everyday speech.",
          related: ["regresar", "ya vuelvo", "ya volví", "volver a casa"],
          example: {
            target: "Ya volví a la casa.",
            translation: "I'm back at the house."
          }
        },
        {
          term: "regresé",
          explanation:
            "The preterite “I returned / I came back.” It presents the return as completed.",
          literal: "I returned",
          useWhen:
            "Naming a completed trip or return: yesterday, last week, after years away.",
          avoidWhen:
            "You are still on the way back. Then use voy de regreso or estoy regresando.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["regresaste", "regresó", "regresamos", "volví"],
          example: {
            target: "Regresé después de años.",
            translation: "I returned after years."
          }
        },
        {
          term: "de regreso",
          explanation:
            "On the way back or back again, a useful phrase built from the noun regreso.",
          literal: "of return",
          useWhen:
            "Describing the return route or the fact that someone is back in a place.",
          avoidWhen:
            "You need a finite verb. Then use regresar or volver.",
          register: "neutral",
          region: "General Colombian.",
          related: ["voy de regreso", "estar de vuelta", "camino de vuelta", "regreso"],
          example: {
            target: "Voy de regreso a la casa.",
            translation: "I'm on my way back to the house."
          }
        },
        {
          term: "a lo mío",
          explanation:
            "Back to what is mine or what belongs to my life. It gives the return an emotional center.",
          literal: "to the mine",
          useWhen:
            "You mean your people, place, work, or life, not just a physical destination.",
          avoidWhen:
            "The place is purely practical, like returning to a counter or a line.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["mi gente", "mi casa", "lo de uno", "mis raíces"],
          example: {
            target: "Regresé a lo mío.",
            translation: "I returned to what is mine."
          }
        },
        {
          term: "sentirme visitante",
          explanation:
            "To feel like a visitor. It captures the discomfort of returning to a place that used to be yours.",
          literal: "to feel-myself visitor",
          useWhen:
            "A hometown, family house, school, or workplace no longer feels fully yours.",
          avoidWhen:
            "You are only visiting a place for the first time. Then visitante is simply factual.",
          register: "neutral",
          region: "General Colombian.",
          related: ["extraño", "de afuera", "como turista", "desubicado"],
          example: {
            target: "Me dio miedo sentirme visitante.",
            translation: "I was afraid of feeling like a visitor."
          }
        },
        {
          term: "permanece igual",
          explanation:
            "Remains the same. A formal-sounding phrase that marks continuity against change.",
          literal: "remains equal",
          useWhen:
            "Contrasting what changed with what stayed recognizable.",
          avoidWhen:
            "Casual speech where quedarse igual would sound more natural.",
          register: "formal neutral",
          region: "Universal Spanish.",
          related: ["sigue igual", "se conserva", "no cambió", "queda igual"],
          example: {
            target: "La puerta permanece igual.",
            translation: "The door remains the same."
          }
        }
      ],
      note:
        "Regresar is useful, but volver is the spoken workhorse. A Colombian says “ya vuelvo” far more often than “ya regreso.” Use regresar when the return is deliberate, formal, written, or emotionally weighty: returning to a hometown, to work, to a country, or to a life that changed while you were gone.",
      culture: [
        {
          label: "Returning can be public",
          body:
            "In a residential street, coming back after years may not be private. A cousin, an aunt, a neighbor and a shopkeeper may all notice. Regresar can carry that social weight better than a quick “pasé por aquí.”"
        },
        {
          label: "Ibagué without invented color",
          body:
            "The scene does not need a fake local phrase to be local. A family house, hills in the background, and a cousin at the door are enough. The Spanish stays general because the grammar is the point."
        },
        {
          label: "Volver is the verb you hear in motion",
          body:
            "At a shop counter, in a taxi, or from the kitchen, “ya vuelvo” is ordinary Colombian speech. Regresar is not wrong there, but it can feel like a written version of the same idea."
        },
        {
          label: "A hometown can make you a visitor",
          body:
            "The emotional problem is not the route. It is whether a familiar place still recognizes you. That is why the preterite regresé can sound heavier than a simple arrival."
        }
      ],
      pitfalls: [
        {
          mistake: "Presenting regresar as the neutral everyday “be right back”",
          whyItFails:
            "Colombians normally say “ya vuelvo” for that quick spoken promise. “Ya regreso” is understood, but it sounds stiffer.",
          sayInstead: "Ya vuelvo."
        },
        {
          mistake: "Using regresar for “do it again”",
          whyItFails:
            "The pattern “volver a + infinitive” means doing something again, and that is a different lesson. Regresar is about coming back or returning.",
          sayInstead: "Volví a la casa."
        },
        {
          mistake: "Saying “regresé para Ibagué” as the safest default",
          whyItFails:
            "You will hear para with movement, but regresar a is the clean standard pattern for returning to a place.",
          sayInstead: "Regresé a Ibagué."
        },
        {
          mistake: "Missing the emotional register",
          whyItFails:
            "Regresar can be more than transport. In a hometown scene, it may carry years away, family, awkwardness and belonging.",
          sayInstead: "Regresé a lo mío."
        }
      ],
      variations: [
        {
          form: "Regresé ayer a Ibagué.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "A completed return to a place, especially after time away."
        },
        {
          form: "Ya volví.",
          register: "neutral spoken",
          region: "General Colombian",
          whenToUse: "The quick everyday way to say you are back."
        },
        {
          form: "Voy de regreso a la casa.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "You are on the way back but have not arrived."
        },
        {
          form: "Regresé a lo mío.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The return is emotional, not just geographic."
        },
        {
          form: "La puerta permanece igual.",
          register: "formal neutral",
          region: "General Colombian",
          whenToUse: "Contrasting a serious return with something that stayed the same."
        },
        {
          form: "Antes vivíamos a dos cuadras de aquí.",
          register: "familiar",
          region: "General Colombian",
          whenToUse: "Setting a past routine against the present. Antes plus the imperfect is the plainest way to say what life used to be."
        }
      ],
      prompt: "Diana contrasts “ya volví” with “regresé.” What is the register split?",
      choices: [
        "Volver is common spoken return; regresar sounds more deliberate or formal.",
        "Regresar means doing an action again, while volver only means returning objects.",
        "Both verbs are equally casual in every Colombian doorway conversation."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence fits an emotional return after years away?",
          choices: [
            "Regresé a Ibagué después de años.",
            "Regresé a llamar otra vez mañana.",
            "Regresé la silla a la cocina."
          ],
          answer: 0,
          tests: "regresar for returning to a place"
        },
        {
          prompt: "Which quick phrase would Colombians usually say from the kitchen?",
          choices: [
            "Retorno institucionalmente en breve.",
            "Ya regreso con solemnidad.",
            "Ya vuelvo en un minuto."
          ],
          answer: 2,
          tests: "volver as the everyday spoken verb"
        },
        {
          prompt: "Alex is still traveling back. Which phrase fits?",
          choices: [
            "Estoy convertido en casa.",
            "Voy de regreso a casa.",
            "Permanezco a casa."
          ],
          answer: 1,
          tests: "de regreso for being on the way back"
        }
      ]
    },
    en: {
      title: "Regresar a casa después de años fuera",
      situation:
        "Alejandra vuelve a Houston después de vivir varios años lejos. Una prima la espera frente a la casa de la familia y nota que ella reconoce unas cosas y otras no. Usted necesita separar “come back,” “return,” y el registro emocional de cada uno.",
      setting: {
        who: "Diana es la prima de Alejandra y se quedó cerca de la casa familiar; Alejandra se fue hace años y llega con una maleta y una sonrisa nerviosa.",
        what: "Una primera conversación en la puerta sobre volver a una ciudad y una casa, no sobre repetir una acción.",
        when: "Al final de la tarde, cuando los vecinos están afuera y la llegada se vuelve un poco pública.",
        where: "Houston, en una calle residencial frente a la casa familiar que Alejandra no pisa desde hace años.",
        why: "Porque “come back” suena cotidiano y hablado, mientras “return” puede sonar más formal, escrito o emocionalmente pesado."
      },
      address: {
        form: "mixed",
        who: "Diana y Alejandra usan el mismo “you”; la cercanía viene de ser primas y de hablarse por el nombre.",
        why: "El inglés no tiene tú ni usted para marcar este regreso. La diferencia está en escoger “come back” o “return,” y en el tono de la frase.",
        ifYouSwitch:
          "No hay pronombre que cambiar. “You're back” suena inmediato y familiar; “you returned” suena más narrativo o formal."
      },
      dialogue: [
        {
          speaker: "Diana",
          target: "Alejandra! You finally came back to the house.",
          translation: "¡Alejandra! Al fin regresaste a la casa.",
          pronunciation: "a-le-JAN-dra! yu FAI-na-li keim bak tu da jaus",
          literal: "Alejandra, usted finalmente vino atrás a la casa.",
          why: "“Came back” es la forma cálida y hablada para volver a un lugar. En la puerta de una casa, suena más natural que “returned.”"
        },
        {
          speaker: "Alejandra",
          target: "Yes, I returned to Houston yesterday and came straight here today.",
          translation: "Sí, regresé ayer a Houston y hoy vine derecho para acá.",
          pronunciation: "yes, ai ri-TERND tu to-RON-to yes-ter-dei and keim streit jir tu-DEI",
          literal: "Sí, retorné a Houston ayer y vine directo aquí hoy.",
          why: "“Returned” sirve porque la frase resume un regreso completo y serio. Es más formal que “came back,” pero no incorrecto."
        },
        {
          speaker: "Diana",
          target: "The block changed, but the front door stayed the same.",
          translation: "La cuadra cambió, pero la puerta de entrada siguió igual.",
          pronunciation: "da blak cheinjd, bat da front dor steid da seim",
          literal: "La cuadra cambió, pero la puerta frontal quedó la misma.",
          why: "El inglés cotidiano usa “stayed the same” donde el español formal podría decir “permaneció igual.” La escena sigue siendo hablada."
        },
        {
          speaker: "Alejandra",
          target: "I was scared to come back and feel like a visitor.",
          translation: "Me dio miedo regresar y sentirme visitante.",
          pronunciation: "ai uaz skerd tu com bak and fil laik a VI-zi-ter",
          literal: "Yo estaba asustada de venir atrás y sentir como una visitante.",
          why: "“Come back” puede cargar emoción sin volverse formal. La fuerza está en el contexto, no sólo en el verbo."
        },
        {
          speaker: "Diana",
          target: "If you want to sound normal, say “I'm back”; if you want to sound serious, say “I returned.”",
          translation: "Si quiere sonar normal, diga “ya volví”; si quiere sonar seria, diga “regresé”.",
          pronunciation: "if yu uant tu saund NOR-mal, sei aim bak; if yu uant tu saund SIR-i-us, sei ai ri-TERND",
          literal: "Si usted quiere sonar normal, diga estoy atrás; si quiere sonar seria, diga yo retorné.",
          why: "Este es el corte honesto: “I'm back” es lo vivo y cotidiano; “I returned” suena más escrito, serio o narrativo."
        },
        {
          speaker: "Alejandra",
          target: "Then: I'm back, but I also returned to what feels like mine.",
          translation: "Entonces: ya volví, pero también regresé a lo que siento mío.",
          pronunciation: "den: aim bak, bat ai OL-so ri-TERND tu uat fils laik main",
          literal: "Entonces: estoy atrás, pero también retorné a lo que se siente como mío.",
          why: "La línea usa las dos capas: “I'm back” para la llegada familiar; “returned” para el peso emocional del regreso."
        }
      ],
      vocabulary: [
        {
          term: "return",
          explanation:
            "Regresar o retornar. En inglés suele sonar más formal, escrito o deliberado que “come back.”",
          literal: "regresar",
          useWhen:
            "Habla de volver a una ciudad, casa, trabajo, país o etapa de vida con cierto peso.",
          avoidWhen:
            "Quiere decir “ya vuelvo” de forma rápida y cotidiana. Ahí “I'll be right back” o “I'll come back” suena mejor.",
          register: "neutro formal",
          region: "Inglés universal.",
          related: ["come back", "go back", "be back", "return home"],
          example: {
            target: "I returned to Houston yesterday.",
            translation: "Regresé ayer a Houston."
          }
        },
        {
          term: "come back",
          explanation:
            "Volver o regresar en registro hablado. Es la opción cotidiana para una persona que vuelve a un lugar.",
          literal: "venir atrás",
          useWhen:
            "Una llegada común, una vuelta a casa, o una frase cálida como “you came back.”",
          avoidWhen:
            "Necesita tono oficial, escrito o más serio. Entonces “return” puede servir.",
          register: "neutro hablado",
          region: "Inglés universal.",
          related: ["return", "be back", "come home", "go back"],
          example: {
            target: "You finally came back.",
            translation: "Al fin regresaste."
          }
        },
        {
          term: "I returned",
          explanation:
            "Regresé. Presenta el regreso como completo y puede sonar más narrativo que “I came back.”",
          literal: "yo regresé",
          useWhen:
            "Resume un regreso terminado: ayer, la semana pasada, después de años.",
          avoidWhen:
            "La charla es rápida e íntima. “I'm back” suele ser más natural.",
          register: "neutro formal",
          region: "Inglés universal.",
          related: ["I came back", "I got back", "I went back", "I'm back"],
          example: {
            target: "I returned after years.",
            translation: "Regresé después de años."
          }
        },
        {
          term: "on my way back",
          explanation:
            "De regreso o en camino de vuelta. Sirve cuando todavía no ha llegado.",
          literal: "en mi camino atrás",
          useWhen:
            "Usted está volviendo, pero la llegada no se completó.",
          avoidWhen:
            "Ya llegó. Entonces diga “I'm back” o “I got back.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["heading back", "coming back", "going back", "back home"],
          example: {
            target: "I'm on my way back home.",
            translation: "Voy de regreso a casa."
          }
        },
        {
          term: "what feels like mine",
          explanation:
            "Lo que se siente mío. Da centro emocional a un regreso sin sonar posesivo.",
          literal: "lo que se siente como mío",
          useWhen:
            "Habla de familia, barrio, casa o vida que siente propia.",
          avoidWhen:
            "El regreso es sólo práctico, como volver a una fila o mostrador.",
          register: "amistoso informal",
          region: "Inglés universal.",
          related: ["my people", "my place", "where I belong", "home"],
          example: {
            target: "I returned to what feels like mine.",
            translation: "Regresé a lo que siento mío."
          }
        },
        {
          term: "feel like a visitor",
          explanation:
            "Sentirse visitante. Sirve para la incomodidad de volver a un lugar que antes era suyo.",
          literal: "sentirse como visitante",
          useWhen:
            "Una casa, ciudad, escuela o trabajo familiar ya no se siente completamente suyo.",
          avoidWhen:
            "Visita un lugar por primera vez. Ahí visitor es simplemente factual.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["feel like a stranger", "out of place", "new here", "not belong"],
          example: {
            target: "I feel like a visitor here.",
            translation: "Me siento visitante aquí."
          }
        },
        {
          term: "stayed the same",
          explanation:
            "Siguió igual o permaneció igual. Es la forma hablada para continuidad.",
          literal: "se quedó igual",
          useWhen:
            "Contrasta lo que cambió con lo que todavía se reconoce.",
          avoidWhen:
            "Necesita tono formal o escrito. Entonces “remained the same” encaja mejor.",
          register: "neutro hablado",
          region: "Inglés universal.",
          related: ["remained the same", "didn't change", "kept the same", "still looks the same"],
          example: {
            target: "The door stayed the same.",
            translation: "La puerta siguió igual."
          }
        }
      ],
      note:
        "“Return” y “come back” no pesan igual. “Come back” es el verbo hablado y cálido de la puerta de la casa. “Return” suena más formal, narrativo o serio, y por eso puede servir para un regreso después de años. Para “ya volví,” lo más natural suele ser “I'm back.”",
      culture: [
        {
          label: "Volver a casa puede ser público",
          body:
            "En una calle residencial, volver después de años no siempre es un momento privado. Familia y vecinos notan la llegada. El inglés puede hacerlo íntimo con “you're back” o más narrativo con “you returned.”"
        },
        {
          label: "No todo regreso necesita solemnidad",
          body:
            "Un hispanohablante puede sobreusar “return” porque se parece a regresar. Pero en la vida diaria, “come back,” “go back,” y “be back” hacen mucho trabajo. “Return” se reserva más para peso o formalidad."
        },
        {
          label: "“I'm back” es una frase completa",
          body:
            "No hace falta decir “I returned” cada vez que entra a una casa o vuelve a una llamada. “I'm back” suena natural, corto y humano."
        },
        {
          label: "La casa también cambia al que vuelve",
          body:
            "La dificultad emocional no está sólo en reconocer calles. Está en decidir si usted todavía pertenece. Por eso “feel like a visitor” puede doler aunque sea una frase simple."
        }
      ],
      pitfalls: [
        {
          mistake: "“I return in one minute.”",
          whyItFails:
            "Se entiende, pero para “ya vuelvo” suena rígido. La frase cotidiana es “I'll be right back.”",
          sayInstead: "I'll be right back."
        },
        {
          mistake: "“I returned to call again.”",
          whyItFails:
            "Está calcando otra estructura española. Para repetir una acción en inglés use “again,” no “return to.”",
          sayInstead: "I called again."
        },
        {
          mistake: "“I am in return home.”",
          whyItFails:
            "“De regreso” no se traduce palabra por palabra así. Para el camino de vuelta, diga “on my way back.”",
          sayInstead: "I'm on my way back home."
        },
        {
          mistake: "“I am back to my thing.”",
          whyItFails:
            "“A lo mío” necesita una frase más natural en inglés. “What feels like mine” o “where I belong” comunica la idea.",
          sayInstead: "I'm back where I belong."
        }
      ],
      variations: [
        {
          form: "I returned to Houston yesterday.",
          register: "neutro formal",
          region: "Inglés universal",
          whenToUse: "Un regreso completado, dicho con peso o formalidad."
        },
        {
          form: "I'm back.",
          register: "neutro hablado",
          region: "Inglés universal",
          whenToUse: "La manera rápida y cotidiana de decir que ya volvió."
        },
        {
          form: "I'm on my way back home.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Todavía está en el camino de regreso."
        },
        {
          form: "I came back to what feels like mine.",
          register: "amistoso informal",
          region: "Inglés universal",
          whenToUse: "El regreso es emocional, no sólo geográfico."
        },
        {
          form: "The front door stayed the same.",
          register: "neutro hablado",
          region: "Inglés universal",
          whenToUse: "Contrastar un regreso serio con algo que no cambió."
        },
        {
          form: "My mother told me she was keeping my room the same, and I used to sleep by that window.",
          register: "familiar",
          region: "Inglés universal",
          whenToUse: "Para repetir lo que alguien dijo y añadir una costumbre vieja. “Told me she was” retrocede el tiempo del verbo; “used to sleep” marca lo habitual que ya no es."
        }
      ],
      prompt: "Diana contrasts “I'm back” with “I returned.” ¿Cuál es el corte de registro?",
      choices: [
        "“Return” significa repetir acciones; “back” sólo devuelve objetos.",
        "Ambas frases son igual de formales en cualquier conversación familiar.",
        "“I'm back” suena cotidiano; “I returned” suena más serio o formal."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Cuál frase sirve para un regreso emocional después de años?",
          choices: [
            "I returned to Houston after years.",
            "I returned to call again tomorrow.",
            "I returned the chair to the kitchen."
          ],
          answer: 0,
          tests: "return for coming back to a place"
        },
        {
          prompt: "¿Cuál frase rápida diría alguien al volver a la cocina?",
          choices: [
            "I return ceremonially right now.",
            "I'm back in a minute.",
            "Return has been completed."
          ],
          answer: 1,
          tests: "I'm back as the everyday phrase"
        },
        {
          prompt: "Alejandra todavía viene en camino. ¿Cuál frase encaja?",
          choices: [
            "I am converted into home.",
            "I remain to home.",
            "I'm on my way back home."
          ],
          answer: 2,
          tests: "on my way back for de regreso"
        }
      ]
    }
  },
  {
    id: "staying-seated-on-the-monteria-boat",
    level: "Developing · Coming back and becoming",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "courteous",
    verb: "permanecer",
    review: "pending",
    es: {
      title: "Staying seated for the crossing",
      situation:
        "Maya crosses the Sinú River in Montería in a small boat. Before they leave, the attendant gives a formal safety instruction. You need to recognize permanecer in notices and instructions, while also knowing that quedarse is the everyday word for staying in a place.",
      setting: {
        who: "A boat attendant gives safety instructions, and Maya is a passenger sitting near the front with a bag under the seat.",
        what: "A short public announcement about staying seated, keeping a bag in place, and waiting until the boat has stopped.",
        when: "Early evening, as people cross the river before going home.",
        where: "Montería, at a small river crossing on the Sinú, with the boat rocking lightly before it pulls away.",
        why: "Because permanecer is formal and institutional. It appears in signs and announcements, while everyday speech usually says quedarse."
      },
      address: {
        form: "usted",
        who: "The attendant addresses the passengers as ustedes, and Maya answers with usted.",
        why: "Safety instructions to strangers naturally use formal public language. For you, usted keeps the exchange aligned with the announcement.",
        ifYouSwitch:
          "Tú would make the instruction sound personal rather than public. Vos would be distracting and not useful in this safety frame."
      },
      dialogue: [
        {
          speaker: "Encargado",
          target: "Por seguridad, permanezcan sentados hasta llegar al otro lado.",
          translation: "For safety, remain seated until we reach the other side.",
          pronunciation: "por seh-goo-ree-DAD, per-mah-NEHS-kan sen-TAH-dos AHS-tah yeh-GAR al OH-troh LAH-doh",
          literal: "For security, remain seated until to-arrive to-the other side.",
          why: "Permanezcan is the formal plural command from permanecer. This is exactly the register of announcements, not casual chat."
        },
        {
          speaker: "Maya",
          target: "¿Permanezco aquí con la mochila debajo del asiento?",
          translation: "Do I stay here with the backpack under the seat?",
          pronunciation: "per-mah-NEHS-koh ah-KEE kon lah moh-CHEE-lah deh-BAH-hoh del ah-SYEN-toh",
          literal: "I-remain here with the backpack under the seat?",
          why: "The yo form has -zc-: permanezco. It is useful to recognize, even if you would often say me quedo in conversation."
        },
        {
          speaker: "Encargado",
          target: "Sí, permanezca ahí y no se pare todavía.",
          translation: "Yes, remain there and don't stand up yet.",
          pronunciation: "see, per-mah-NEHS-kah ah-EE ee noh seh PAH-reh toh-dah-BEE-ah",
          literal: "Yes, remain there and do not stand yourself still.",
          why: "Permanezca is the usted command. It sounds like an instruction because safety staff are speaking."
        },
        {
          speaker: "Maya",
          target: "En la casa yo diría “me quedo aquí”, ¿verdad?",
          translation: "At home I would say “I'll stay here,” right?",
          pronunciation: "en lah KAH-sah yoh dee-REE-ah meh KEH-doh ah-KEE, ber-DAD",
          literal: "In the house I would-say myself I-stay here, true?",
          why: "Exactly. Quedarse is the everyday verb for staying put. Permanecer is heavier and more official."
        },
        {
          speaker: "Encargado",
          target: "Exacto. Pero el aviso dice que todos deben permanecer sentados.",
          translation: "Exactly. But the notice says everyone must remain seated.",
          pronunciation: "eg-SAK-toh. PEH-roh el ah-BEE-soh DEE-seh keh TOH-dos DEH-ben per-mah-neh-SER sen-TAH-dos",
          literal: "Exactly. But the notice says that all must remain seated.",
          why: "The infinitive appears after deben: deben permanecer. Formal signs often combine obligation with permanecer."
        },
        {
          speaker: "Maya",
          target: "Listo. Permanezco sentada hasta que la lancha pare.",
          translation: "Got it. I'll remain seated until the boat stops.",
          pronunciation: "LEES-toh. per-mah-NEHS-koh sen-TAH-dah AHS-tah keh lah LAN-chah PAH-reh",
          literal: "Ready. I-remain seated until that the boat stops.",
          why: "Maya answers in the formal register of the setting. In a friend's living room, the same idea would be me quedo sentada."
        }
      ],
      vocabulary: [
        {
          term: "permanecer",
          explanation:
            "To remain or stay, in a formal or institutional register. It is common in signs, notices, announcements, and official instructions.",
          literal: "to remain",
          useWhen:
            "A safety rule, public notice, official instruction, or formal description says something stays in place or condition.",
          avoidWhen:
            "Everyday conversation about staying somewhere. Colombians usually say quedarse.",
          register: "formal neutral",
          region: "Universal Spanish; formal in Colombian speech too.",
          related: ["quedarse", "seguir", "mantenerse", "conservarse"],
          example: {
            target: "Deben permanecer sentados.",
            translation: "You must remain seated."
          }
        },
        {
          term: "quedarse",
          explanation:
            "The everyday verb for staying put. It is what people say at home, with friends, and in ordinary plans.",
          literal: "to stay oneself",
          useWhen:
            "Staying in a place, deciding not to move, sleeping over, or remaining with someone casually.",
          avoidWhen:
            "A formal sign or safety announcement needs the institutional sound of permanecer.",
          register: "neutral spoken",
          region: "General Colombian everyday speech.",
          related: ["me quedo", "quedarse quieto", "seguir aquí", "no moverse"],
          example: {
            target: "Me quedo aquí.",
            translation: "I'll stay here."
          }
        },
        {
          term: "permanezco",
          explanation:
            "The yo form: I remain. The spelling changes to -zc-, as in conozco and agradezco.",
          literal: "I remain",
          useWhen:
            "You need to recognize or use the formal first-person form.",
          avoidWhen:
            "You are speaking casually. Me quedo will usually sound more natural.",
          register: "grammar pattern",
          region: "Universal Spanish.",
          related: ["permanezca", "permanezcan", "permanecen", "permaneció"],
          example: {
            target: "Permanezco aquí.",
            translation: "I remain here."
          }
        },
        {
          term: "permanezca / permanezcan",
          explanation:
            "Formal commands: remain. These are common in safety instructions and official announcements.",
          literal: "remain / remain all of you",
          useWhen:
            "A guard, attendant, sign, or recorded voice tells people to stay in place.",
          avoidWhen:
            "Telling a friend to stay. Then quédate or quédate aquí is normal.",
          register: "formal public",
          region: "General Colombian institutional language.",
          related: ["quédese", "quédense", "no se mueva", "manténgase"],
          example: {
            target: "Permanezca sentado.",
            translation: "Remain seated."
          }
        },
        {
          term: "permanecer sentado",
          explanation:
            "To remain seated. A fixed-feeling safety phrase in transport, events, and waiting rooms.",
          literal: "to remain seated",
          useWhen:
            "People should not stand yet because of movement, risk, or order.",
          avoidWhen:
            "You are casually choosing a chair. Then quedarse sentado may be enough.",
          register: "formal public",
          region: "General Colombian.",
          related: ["seguir sentado", "quedarse sentado", "no pararse", "el asiento"],
          example: {
            target: "Permanezcan sentados.",
            translation: "Remain seated."
          }
        },
        {
          term: "hasta que",
          explanation:
            "Until. With a future event, it often introduces a subjunctive form like pare.",
          literal: "until that",
          useWhen:
            "Saying how long the staying continues: until the boat stops, until they call, until the door opens.",
          avoidWhen:
            "The end point is a noun or time: hasta las seis, hasta la esquina.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["hasta llegar", "hasta que pare", "mientras", "cuando"],
          example: {
            target: "Permanezco sentada hasta que pare.",
            translation: "I remain seated until it stops."
          }
        },
        {
          term: "por seguridad",
          explanation:
            "For safety. A phrase that prepares you to hear formal rules rather than personal preferences.",
          literal: "for security",
          useWhen:
            "Explaining a rule meant to prevent accidents or protect people.",
          avoidWhen:
            "The limit is only personal taste. Then por seguridad would overstate it.",
          register: "formal neutral",
          region: "General Colombian.",
          related: ["por precaución", "norma", "riesgo", "cuidado"],
          example: {
            target: "Por seguridad, permanezcan sentados.",
            translation: "For safety, remain seated."
          }
        }
      ],
      note:
        "Permanecer is the formal cousin of quedarse. You read it on signs and hear it in announcements: permanezca en su asiento, permanezcan sentados, debe permanecer cerrado. In ordinary Colombian speech, “me quedo aquí” is far more natural. Remember the -zc- yo form: permanezco.",
      culture: [
        {
          label: "Safety language gets formal fast",
          body:
            "Even a small boat can make the language official for a minute. Public safety instructions often use permanecer because the speaker is not just chatting; they are managing risk for strangers."
        },
        {
          label: "Montería's river is daily transport",
          body:
            "The Sinú is part of ordinary movement through the city, not only scenery. A short crossing can still need clear instructions when people stand too early or bags slide around."
        },
        {
          label: "Quedarse is the home version",
          body:
            "At home, in a shop, or with friends, Colombians usually say quedarse. “Permanezco aquí” is correct, but it sounds as if you are quoting a notice or giving testimony."
        },
        {
          label: "Formal does not mean unfriendly",
          body:
            "The attendant can be kind and still say permanezcan. The formality belongs to the role and the safety situation, not to a cold personality."
        }
      ],
      pitfalls: [
        {
          mistake: "Using permanecer as the normal way to say “I'll stay here”",
          whyItFails:
            "It is correct but too formal for most everyday Colombian conversation. Quedarse is the spoken default.",
          sayInstead: "Me quedo aquí."
        },
        {
          mistake: "Forgetting the -zc- in “permanezco”",
          whyItFails:
            "The yo form is not “permaneco.” Spanish inserts -zc- in this family of verbs.",
          sayInstead: "Permanezco sentado."
        },
        {
          mistake: "Hearing “permanezca” as a personal scolding",
          whyItFails:
            "In safety language, it is often just the formal command used for everyone. The register is official, not necessarily angry.",
          sayInstead: "Permanezca en su asiento."
        },
        {
          mistake: "Using quedar as if every form were casual",
          whyItFails:
            "Quedarse is everyday, but public notices often choose permanecer because it sounds stable, official, and clear.",
          sayInstead: "Debe permanecer cerrado."
        }
      ],
      variations: [
        {
          form: "Permanezcan sentados hasta llegar.",
          register: "formal public",
          region: "General Colombian",
          whenToUse: "A safety announcement to a group."
        },
        {
          form: "Permanezca en su asiento.",
          register: "formal public",
          region: "General Colombian",
          whenToUse: "A formal instruction to one person."
        },
        {
          form: "Me quedo aquí con la mochila.",
          register: "neutral spoken",
          region: "General Colombian",
          whenToUse: "The everyday spoken version among people."
        },
        {
          form: "Permanezco aquí hasta que pare.",
          register: "formal neutral",
          region: "General Colombian",
          whenToUse: "Answering within the formal register of a rule."
        },
        {
          form: "El chaleco debe permanecer puesto.",
          register: "formal public",
          region: "General Colombian",
          whenToUse: "A notice about a required safety item."
        }
      ],
      prompt: "The attendant says “permanezcan sentados.” What should Maya hear?",
      choices: [
        "A formal public instruction to remain seated.",
        "A casual invitation to stay for dinner.",
        "A promise that the boat will return later."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence sounds most natural at home with friends?",
          choices: [
            "Permanezco institucionalmente en esta silla.",
            "Me quedo aquí con ustedes.",
            "Se ordena mi permanencia aquí."
          ],
          answer: 1,
          tests: "quedarse as everyday stay"
        },
        {
          prompt: "Which form shows the correct -zc- yo spelling?",
          choices: [
            "Yo permaneco aquí.",
            "Yo permanecé aquí.",
            "Yo permanezco aquí."
          ],
          answer: 2,
          tests: "permanezco yo form"
        },
        {
          prompt: "Which sentence fits a safety announcement?",
          choices: [
            "Permanezcan sentados hasta llegar.",
            "Ya vuelvo sentado hasta llegar.",
            "Me convierto sentado hasta llegar."
          ],
          answer: 0,
          tests: "permanecer in formal safety register"
        }
      ]
    },
    en: {
      title: "Permanecer sentado durante el cruce",
      situation:
        "Marcela cruza un río en un ferry pequeño en Austin. Antes de salir, el encargado da una instrucción formal por seguridad. Usted necesita reconocer “remain” en avisos e instrucciones, pero también saber que “stay” es la palabra diaria.",
      setting: {
        who: "Un encargado del ferry da instrucciones de seguridad, y Marcela es una pasajera sentada cerca del frente con una mochila debajo del asiento.",
        what: "Un anuncio público breve sobre permanecer sentada, dejar la mochila en su lugar y esperar hasta que el ferry se detenga.",
        when: "Al comienzo de la noche, cuando varias personas cruzan antes de volver a casa.",
        where: "Austin, en un ferry pequeño que se mueve apenas antes de salir del muelle.",
        why: "Porque “remain” es formal e institucional. Aparece en avisos y anuncios, mientras “stay” hace la mayor parte del trabajo cotidiano."
      },
      address: {
        form: "mixed",
        who: "El encargado habla al grupo con “you,” y Marcela responde con el mismo pronombre.",
        why: "El inglés no tiene ustedes formal visible. La formalidad se oye en “please remain seated,” no en cambiar el pronombre.",
        ifYouSwitch:
          "No hay pronombre que cambiar. Puede sonar más cotidiano con “stay seated” y más oficial con “remain seated.”"
      },
      dialogue: [
        {
          speaker: "Attendant",
          target: "For safety, please remain seated until we reach the other side.",
          translation: "Por seguridad, permanezcan sentados hasta llegar al otro lado.",
          pronunciation: "for SEIF-ti, plis ri-MEIN SI-ted an-TIL ui rich di A-der said",
          literal: "Por seguridad, por favor permanezcan sentados hasta que alcancemos el otro lado.",
          why: "“Remain seated” es la frase formal de transporte y seguridad. Suena a anuncio, no a conversación de sala."
        },
        {
          speaker: "Marcela",
          target: "Should I stay here with my backpack under the seat?",
          translation: "¿Me quedo aquí con la mochila debajo del asiento?",
          pronunciation: "shud ai stei jir uid mai BAK-pak AN-der da sit",
          literal: "¿Debería quedarme aquí con mi mochila debajo del asiento?",
          why: "Marcela responde con “stay,” la palabra cotidiana. Es menos formal que “remain” y perfectamente natural en una pregunta."
        },
        {
          speaker: "Attendant",
          target: "Yes, remain there and don't stand up yet.",
          translation: "Sí, permanezca ahí y no se pare todavía.",
          pronunciation: "yes, ri-MEIN der and dont stand ap yet",
          literal: "Sí, permanezca ahí y no se ponga de pie todavía.",
          why: "El encargado mantiene el registro oficial con “remain.” La frase “don't stand up yet” aclara la acción física."
        },
        {
          speaker: "Marcela",
          target: "At home I'd say “I'll stay here,” right?",
          translation: "En la casa diría “me quedo aquí”, ¿verdad?",
          pronunciation: "at joum aid sei ail stei jir, rait",
          literal: "En casa diría me quedaré aquí, ¿cierto?",
          why: "Exacto. “Stay” es la versión de casa, amigos y planes corrientes. “Remain” pesa más."
        },
        {
          speaker: "Attendant",
          target: "Exactly. But the notice says everyone must remain seated.",
          translation: "Exacto. Pero el aviso dice que todos deben permanecer sentados.",
          pronunciation: "eg-ZAKT-li. bat da NOU-tis sez EV-ri-uan mast ri-MEIN SI-ted",
          literal: "Exactamente. Pero el aviso dice que todos deben permanecer sentados.",
          why: "“Must remain seated” combina obligación con registro formal. Es una frase típica de aviso."
        },
        {
          speaker: "Marcela",
          target: "Got it. I'll stay seated until the ferry stops.",
          translation: "Listo. Me quedo sentada hasta que el ferry pare.",
          pronunciation: "gat it. ail stei SI-ted an-TIL da FE-ri staps",
          literal: "Entendido. Permaneceré sentada hasta que el ferry se detenga.",
          why: "“Stay seated” es un poco menos formal que “remain seated,” pero sigue claro y adecuado. En inglés las dos opciones conviven."
        }
      ],
      vocabulary: [
        {
          term: "remain",
          explanation:
            "Permanecer. Suena formal, estable o institucional, especialmente en avisos e instrucciones.",
          literal: "permanecer",
          useWhen:
            "Un anuncio, aviso, regla de seguridad o descripción formal dice que algo sigue en el mismo lugar o estado.",
          avoidWhen:
            "Una conversación normal sobre quedarse en un lugar. “Stay” suele sonar mejor.",
          register: "formal neutro",
          region: "Inglés universal.",
          related: ["stay", "keep", "continue to be", "remain seated"],
          example: {
            target: "Please remain seated.",
            translation: "Permanezca sentado."
          }
        },
        {
          term: "stay",
          explanation:
            "Quedarse. Es el verbo cotidiano para no moverse o seguir en un lugar.",
          literal: "quedarse",
          useWhen:
            "Planes, casa, amigos, hoteles, preguntas normales y decisiones de no irse.",
          avoidWhen:
            "Necesita tono de aviso formal. Entonces “remain” puede sonar más adecuado.",
          register: "neutro hablado",
          region: "Inglés universal.",
          related: ["stay here", "stay put", "stay seated", "not move"],
          example: {
            target: "I'll stay here.",
            translation: "Me quedo aquí."
          }
        },
        {
          term: "I remain",
          explanation:
            "Permanezco. Es correcto, pero en primera persona puede sonar muy formal si no hay contexto oficial.",
          literal: "yo permanezco",
          useWhen:
            "Escribe formalmente o responde dentro de una instrucción institucional.",
          avoidWhen:
            "Quiere hablar de planes normales. “I stay” o “I'll stay” suele sonar más humano.",
          register: "de gramática patrón",
          region: "Inglés universal.",
          related: ["I stay", "I am still", "I keep", "I continue"],
          example: {
            target: "I remain here.",
            translation: "Permanezco aquí."
          }
        },
        {
          term: "please remain",
          explanation:
            "Permanezca o permanezcan, en tono de instrucción formal.",
          literal: "por favor permanezca",
          useWhen:
            "Una voz de transporte, seguridad, evento u oficina le dice al público qué hacer.",
          avoidWhen:
            "Habla con un amigo en casa. “Please stay” ya sería bastante cortés.",
          register: "formal público",
          region: "Inglés universal.",
          related: ["please stay", "remain there", "stay where you are", "do not move"],
          example: {
            target: "Please remain in your seat.",
            translation: "Permanezca en su asiento."
          }
        },
        {
          term: "remain seated",
          explanation:
            "Permanecer sentado. Frase fija de seguridad en transporte, eventos y salas.",
          literal: "permanecer sentado",
          useWhen:
            "La gente no debe ponerse de pie todavía por movimiento, riesgo u orden.",
          avoidWhen:
            "Sólo decide quedarse en una silla entre amigos. “Stay seated” puede bastar.",
          register: "formal público",
          region: "Inglés universal.",
          related: ["stay seated", "do not stand", "keep your seat", "seat belt"],
          example: {
            target: "Everyone must remain seated.",
            translation: "Todos deben permanecer sentados."
          }
        },
        {
          term: "until",
          explanation:
            "Hasta que o hasta. Marca el punto donde termina la espera o permanencia.",
          literal: "hasta",
          useWhen:
            "Dice cuánto dura quedarse así: until it stops, until they call, until the door opens.",
          avoidWhen:
            "Quiere decir “a menos que.” Eso es “unless,” no “until.”",
          register: "neutro",
          region: "Inglés universal.",
          related: ["until it stops", "until we arrive", "until then", "before"],
          example: {
            target: "Stay seated until it stops.",
            translation: "Quédese sentado hasta que pare."
          }
        },
        {
          term: "for safety",
          explanation:
            "Por seguridad. La frase prepara al oyente para una regla o instrucción.",
          literal: "por seguridad",
          useWhen:
            "Explica una regla pensada para evitar accidentes o proteger a la gente.",
          avoidWhen:
            "El límite es sólo gusto personal. Ahí “for safety” exagera.",
          register: "formal neutro",
          region: "Inglés universal.",
          related: ["safety rule", "precaution", "risk", "careful"],
          example: {
            target: "For safety, remain seated.",
            translation: "Por seguridad, permanezca sentado."
          }
        }
      ],
      note:
        "“Remain” es el primo formal de “stay.” Usted lo oye en transporte, seguridad, avisos y documentos: please remain seated, remain in your seat, the door must remain closed. En conversación normal, “I'll stay here” suena mucho más natural que “I remain here.”",
      culture: [
        {
          label: "La seguridad vuelve formal el idioma",
          body:
            "Incluso en un trayecto corto, las instrucciones pueden sonar oficiales. “Please remain seated” no significa que el encargado sea frío; significa que está hablando como responsable de seguridad."
        },
        {
          label: "“Stay” es la palabra de casa",
          body:
            "Con amigos, familia o planes cotidianos, “stay” hace casi todo el trabajo. “Remain” puede sonar como aviso, contrato o discurso si se usa de más."
        },
        {
          label: "El inglés también mezcla opciones",
          body:
            "“Remain seated” y “stay seated” pueden aparecer en contextos parecidos. La diferencia es de peso: remain más oficial, stay más cotidiano."
        },
        {
          label: "La orden formal puede ser amable",
          body:
            "“Please” no convierte una instrucción en sugerencia opcional. En seguridad, una frase amable todavía puede ser una regla que todos deben seguir."
        }
      ],
      pitfalls: [
        {
          mistake: "“I remain here with you tonight.”",
          whyItFails:
            "Se entiende, pero suena demasiado formal para un plan con amigos. Use “stay” para quedarse en una situación cotidiana.",
          sayInstead: "I'll stay here with you tonight."
        },
        {
          mistake: "“Please stay seated” is always casual and unsafe.",
          whyItFails:
            "“Stay seated” también puede servir en instrucciones. La diferencia con “remain seated” es de registro, no de seguridad.",
          sayInstead: "Please remain seated."
        },
        {
          mistake: "“I am remain seated.”",
          whyItFails:
            "No combine “be” con el verbo base “remain.” Use “remain” como verbo, o “am seated” como estado.",
          sayInstead: "I remain seated."
        },
        {
          mistake: "“Until it will stop.”",
          whyItFails:
            "Después de “until” para un evento futuro, el inglés usa presente simple, no “will.”",
          sayInstead: "Until it stops."
        }
      ],
      variations: [
        {
          form: "Please remain seated until we arrive.",
          register: "formal público",
          region: "Inglés universal",
          whenToUse: "Un anuncio de seguridad para un grupo."
        },
        {
          form: "Please remain in your seat.",
          register: "formal público",
          region: "Inglés universal",
          whenToUse: "Una instrucción formal a una persona o grupo."
        },
        {
          form: "I'll stay here with my backpack.",
          register: "neutro hablado",
          region: "Inglés universal",
          whenToUse: "La versión cotidiana entre personas."
        },
        {
          form: "I remain here until it stops.",
          register: "formal neutro",
          region: "Inglés universal",
          whenToUse: "Responder dentro de un registro formal."
        },
        {
          form: "The life jacket must remain on.",
          register: "formal público",
          region: "Inglés universal",
          whenToUse: "Un aviso sobre un elemento de seguridad obligatorio."
        }
      ],
      prompt: "The attendant says “please remain seated.” ¿Qué debe oír Marcela?",
      choices: [
        "Una instrucción pública formal para quedarse sentada.",
        "Una invitación casual a quedarse a comer.",
        "Una promesa de que el ferry volverá luego."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase suena más natural en casa con amigos?",
          choices: [
            "I remain institutionally in this chair.",
            "I'll stay here with you.",
            "My remaining is hereby ordered."
          ],
          answer: 1,
          tests: "stay as everyday quedarse"
        },
        {
          prompt: "¿Cuál frase usa “remain” correctamente?",
          choices: [
            "I am remain seated.",
            "I remaining seated.",
            "I remain seated."
          ],
          answer: 2,
          tests: "remain as main verb"
        },
        {
          prompt: "¿Cuál frase encaja en un anuncio de seguridad?",
          choices: [
            "Please remain seated until we arrive.",
            "I will come back seated until arrive.",
            "Please become seated into the ferry."
          ],
          answer: 0,
          tests: "remain seated in formal safety register"
        }
      ]
    }
  },
  {
    id: "warehouse-becoming-a-workshop-in-arauca",
    level: "Developing · Coming back and becoming",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "courteous",
    verb: "convertirse",
    review: "pending",
    es: {
      title: "Becoming a community workshop",
      situation:
        "Sam visits Arauca, and a neighbor shows him an old warehouse that now works as a community workshop. The building did not just change color; it turned into something else. You need to understand why convertirse en is the tricky piece in the “become” family.",
      setting: {
        who: "Nidia helped organize the neighborhood project, and Sam is visiting with a notebook because he wants to understand what changed.",
        what: "A walk through a former storage building that became a community workshop, with examples of different kinds of becoming.",
        when: "Saturday morning, while people are setting up tables before a repair class.",
        where: "Arauca, in a neighborhood building near a wide street, with doors open to let air through.",
        why: "Because English “become” looks simple, but Spanish splits the change by how it happens: transformation, passing state, effort, gradual shift, or achievement."
      },
      address: {
        form: "usted",
        who: "Nidia and Sam use usted because they have just met and she is presenting a community project.",
        why: "The exchange is warm but semi-public. For you, usted respects Nidia's role without making the scene cold.",
        ifYouSwitch:
          "Tú could arrive later if the visit becomes friendly, but opening with it would be fast. Vos is not needed here."
      },
      dialogue: [
        {
          speaker: "Nidia",
          target: "Esta bodega se convirtió en taller comunitario.",
          translation: "This warehouse became a community workshop.",
          pronunciation: "ES-tah boh-DEH-gah seh kon-beer-TYOH en tah-YER koh-moo-nee-TAH-ryoh",
          literal: "This warehouse itself converted into workshop community.",
          why: "Convertirse en marks a real transformation: one kind of thing became another kind of thing."
        },
        {
          speaker: "Sam",
          target: "O sea, no sólo se puso bonita.",
          translation: "So it didn't just get pretty.",
          pronunciation: "oh SEH-ah, noh SOH-loh seh POO-soh boh-NEE-tah",
          literal: "That is, not only itself put pretty.",
          why: "Ponerse is for a passing state or visible condition. Se puso bonita is a surface change, not the full transformation."
        },
        {
          speaker: "Nidia",
          target: "Exacto. Se convirtió en un lugar para aprender oficios.",
          translation: "Exactly. It became a place for learning trades.",
          pronunciation: "eg-SAK-toh. seh kon-beer-TYOH en oon loo-GAR PAH-rah ah-pren-DER oh-FEE-syohs",
          literal: "Exactly. It converted itself into a place for to-learn trades.",
          why: "The en after convertirse is not optional. Spanish says convertirse en algo, just as English says become something without a preposition."
        },
        {
          speaker: "Sam",
          target: "¿Y la señora Nidia se hizo líder por todo el trabajo?",
          translation: "And did Mrs Nidia become a leader through all the work?",
          pronunciation: "ee lah seh-NYOH-rah NEE-dyah seh EE-soh LEE-der por TOH-doh el trah-BAH-hoh",
          literal: "And Mrs Nidia herself made leader by all the work?",
          why: "Hacerse points to effort, career, or chosen identity. Sam is testing a different kind of becoming."
        },
        {
          speaker: "Nidia",
          target: "Digamos que llegué a ser líder con el tiempo.",
          translation: "Let's say I came to be a leader over time.",
          pronunciation: "dee-GAH-mos keh yeh-GEH ah ser LEE-der kon el TYEM-poh",
          literal: "Let's-say that I-arrived to be leader with the time.",
          why: "Llegar a ser presents the result as an achievement reached over time. It is slower and more earned than a sudden change."
        },
        {
          speaker: "Sam",
          target: "Entonces: se puso bonita, pero se convirtió en otra cosa.",
          translation: "So: it got pretty, but it became something else.",
          pronunciation: "en-TON-ses: seh POO-soh boh-NEE-tah, PEH-roh seh kon-beer-TYOH en OH-trah KOH-sah",
          literal: "Then: itself put pretty, but itself converted into another thing.",
          why: "That is the core distinction: ponerse for a state, convertirse en for transformation into a new thing."
        }
      ],
      vocabulary: [
        {
          term: "convertirse en",
          explanation:
            "To become in the sense of turning into something else. It marks a real transformation of identity, role, use, or category.",
          literal: "to convert oneself into",
          useWhen:
            "A warehouse becomes a workshop, a problem becomes an opportunity, or a person becomes a public figure through a major transformation.",
          avoidWhen:
            "The change is only a passing mood, color, or condition. Then ponerse often fits better.",
          register: "neutral formal",
          region: "Universal Spanish; very useful in careful speech.",
          related: ["ponerse", "hacerse", "volverse", "llegar a ser"],
          example: {
            target: "La bodega se convirtió en taller.",
            translation: "The warehouse became a workshop."
          }
        },
        {
          term: "ponerse",
          explanation:
            "To become or get into a passing state: red, nervous, serious, sick, pretty, ugly, tense.",
          literal: "to put oneself",
          useWhen:
            "The change is visible, temporary, emotional, or a condition that comes over someone or something.",
          avoidWhen:
            "One thing truly turns into another thing. Then convertirse en is stronger.",
          register: "neutral spoken",
          region: "General Colombian.",
          related: ["se puso rojo", "se puso bravo", "se puso difícil", "se puso bonito"],
          example: {
            target: "Se puso bonita.",
            translation: "It got pretty."
          }
        },
        {
          term: "hacerse",
          explanation:
            "To become through effort, choice, profession, ideology, or gradual self-making.",
          literal: "to make oneself",
          useWhen:
            "Someone becomes a lawyer, a leader, a vegetarian, a specialist, or part of a group by effort or decision.",
          avoidWhen:
            "The change happens accidentally or gradually without chosen effort. Volverse may fit better.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["se hizo abogado", "se hizo líder", "se hizo experto", "se hizo famoso"],
          example: {
            target: "Se hizo líder con trabajo.",
            translation: "She became a leader through work."
          }
        },
        {
          term: "volverse",
          explanation:
            "To become gradually, often involuntarily or as a change in personality, habit, or condition.",
          literal: "to turn oneself",
          useWhen:
            "Someone becomes quiet, difficult, suspicious, generous, or a place becomes unsafe over time.",
          avoidWhen:
            "The change is an achieved role or chosen profession. Hacerse or llegar a ser may be better.",
          register: "neutral",
          region: "General Colombian.",
          related: ["se volvió callado", "se volvió difícil", "se volvió costumbre", "se volvió caro"],
          example: {
            target: "Se volvió muy callado.",
            translation: "He became very quiet."
          }
        },
        {
          term: "llegar a ser",
          explanation:
            "To become as an achievement reached over time. It highlights the path and the result.",
          literal: "to arrive to be",
          useWhen:
            "A person or project eventually becomes something important after work, years, or recognition.",
          avoidWhen:
            "The change is sudden or merely physical. Then the phrase sounds too grand.",
          register: "neutral formal",
          region: "Universal Spanish.",
          related: ["alcanzar a ser", "terminar siendo", "convertirse en", "lograr ser"],
          example: {
            target: "Llegué a ser líder con el tiempo.",
            translation: "I came to be a leader over time."
          }
        },
        {
          term: "otra cosa",
          explanation:
            "Something else. A simple phrase that helps name transformation without overexplaining it.",
          literal: "another thing",
          useWhen:
            "The identity, use, or role changed enough that the old name no longer feels complete.",
          avoidWhen:
            "The change is tiny or cosmetic. Then otra cosa overstates it.",
          register: "neutral",
          region: "General Colombian.",
          related: ["algo distinto", "un lugar nuevo", "otra etapa", "otro papel"],
          example: {
            target: "Se convirtió en otra cosa.",
            translation: "It became something else."
          }
        },
        {
          term: "oficios",
          explanation:
            "Trades or practical skills. In a community workshop, the word keeps the focus on useful hands-on learning.",
          literal: "trades",
          useWhen:
            "Talking about repair, craft, practical work, or skills people can use to earn or help.",
          avoidWhen:
            "You mean academic subjects. Then materias or áreas may fit better.",
          register: "neutral",
          region: "General Colombian.",
          related: ["taller", "herramientas", "aprendizaje", "trabajo manual"],
          example: {
            target: "Un lugar para aprender oficios.",
            translation: "A place for learning trades."
          }
        }
      ],
      note:
        "English “become” is one door; Spanish has several. Convertirse en is a real transformation into a new thing. Ponerse is a passing state: se puso rojo. Hacerse suggests effort or chosen identity: se hizo abogado. Volverse is gradual and often involuntary: se volvió callado. Llegar a ser is an achievement reached over time. This map matters more than memorizing one translation.",
      culture: [
        {
          label: "A building can change social role",
          body:
            "When a storage building becomes a workshop, the change is not only paint or furniture. It changes who enters, what happens there, and what the neighbors expect from the place. That is why convertirse en fits."
        },
        {
          label: "Community projects need precise verbs",
          body:
            "If you only say the place got nicer, you miss the social transformation. If you say it se convirtió en taller, you name a new role for the building and for the people around it."
        },
        {
          label: "Arauca detail without costume",
          body:
            "A warm street, open doors, and a neighborhood project are enough to place the scene. The grammar does not need invented local sayings. Clear general Colombian Spanish is safer and more useful."
        },
        {
          label: "Becoming can be chosen or accidental",
          body:
            "Spanish cares about the path. Did someone work toward the role, gradually change without meaning to, or turn into a different kind of thing? The verb carries that story."
        }
      ],
      pitfalls: [
        {
          mistake: "Using convertirse for every English “become”",
          whyItFails:
            "Spanish asks how the change happened. A passing color or mood usually takes ponerse, not convertirse en.",
          sayInstead: "Se puso rojo."
        },
        {
          mistake: "Dropping en after convertirse",
          whyItFails:
            "The pattern is convertirse en algo. Without en, the sentence sounds unfinished or wrong.",
          sayInstead: "Se convirtió en taller."
        },
        {
          mistake: "Using ponerse for a full transformation",
          whyItFails:
            "Ponerse usually marks a state or condition, not a new identity or use. A warehouse becoming a workshop needs convertirse en.",
          sayInstead: "La bodega se convirtió en taller."
        },
        {
          mistake: "Using hacerse for an involuntary personality change",
          whyItFails:
            "Hacerse suggests effort or chosen identity. A gradual change someone did not choose often sounds better with volverse.",
          sayInstead: "Se volvió muy callado."
        }
      ],
      variations: [
        {
          form: "La bodega se convirtió en taller.",
          register: "neutral formal",
          region: "General Colombian",
          whenToUse: "A real transformation into a new kind of place."
        },
        {
          form: "Se puso rojo de pena.",
          register: "neutral spoken",
          region: "General Colombian",
          whenToUse: "A passing visible or emotional state."
        },
        {
          form: "Se hizo abogado con mucho esfuerzo.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "A role reached through study, work, or choice."
        },
        {
          form: "Se volvió muy callado.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "A gradual, often involuntary personality change."
        },
        {
          form: "Llegó a ser líder del barrio.",
          register: "neutral formal",
          region: "General Colombian",
          whenToUse: "An achievement reached over time."
        }
      ],
      prompt: "Nidia says “la bodega se convirtió en taller.” What kind of becoming is this?",
      choices: [
        "A passing mood or color that will disappear in a minute.",
        "A real transformation into a different kind of place.",
        "A quick return to the same building after an errand."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Which sentence keeps the required preposition?",
          choices: [
            "La bodega se convirtió en taller.",
            "La bodega se convirtió taller.",
            "La bodega se puso en taller."
          ],
          answer: 0,
          tests: "convertirse en + noun"
        },
        {
          prompt: "Which sentence fits a passing visible state?",
          choices: [
            "Se convirtió en rojo de pena.",
            "Llegó a ser rojo de pena.",
            "Se puso rojo de pena."
          ],
          answer: 2,
          tests: "ponerse for passing state"
        },
        {
          prompt: "Which sentence presents a role achieved over time?",
          choices: [
            "Permaneció líder en un minuto.",
            "Llegó a ser líder del barrio.",
            "Regresó en líder del barrio."
          ],
          answer: 1,
          tests: "llegar a ser as achieved becoming"
        }
      ]
    },
    en: {
      title: "Convertirse en taller comunitario",
      situation:
        "Santiago visita Miami y una vecina le muestra una bodega vieja que ahora funciona como taller comunitario. El edificio no sólo cambió de color: se transformó en otra cosa. Usted necesita entender la familia difícil de “become” en inglés y compararla con la división española.",
      setting: {
        who: "Nidia ayudó a organizar el proyecto del barrio, y Santiago visita con una libreta porque quiere entender qué cambió.",
        what: "Un recorrido por una bodega que became a community workshop, con ejemplos de varias maneras de expresar cambios.",
        when: "Un sábado por la mañana, mientras la gente acomoda mesas antes de una clase de reparación.",
        where: "Miami, en un edificio de barrio con las puertas abiertas para que entre aire.",
        why: "Porque el inglés usa “become” mucho más ampliamente, pero también tiene “get,” “turn,” “grow,” y “come to be” para matices que el español reparte de otra forma."
      },
      address: {
        form: "mixed",
        who: "Nidia y Santiago usan el mismo “you”; el respeto aparece en el tono de visita y en las explicaciones completas.",
        why: "El inglés no tiene usted para esta escena. La diferencia importante no está en el pronombre, sino en escoger “become,” “get,” “turn,” o “come to be.”",
        ifYouSwitch:
          "No hay pronombre que cambiar. Puede sonar más formal con “became” y más cotidiano con “got” o “turned,” según el tipo de cambio."
      },
      dialogue: [
        {
          speaker: "Nidia",
          target: "This warehouse became a community workshop.",
          translation: "Esta bodega se convirtió en taller comunitario.",
          pronunciation: "dis UER-jaus bi-KEIM a co-MIU-ni-ti UERK-shop",
          literal: "Esta bodega se volvió un taller comunitario.",
          why: "“Became” cubre muy bien convertirse en cuando una cosa pasa a ser otra clase de cosa."
        },
        {
          speaker: "Santiago",
          target: "So it didn't just get pretty.",
          translation: "O sea, no sólo se puso bonita.",
          pronunciation: "sou it DID-ent yost guet PRI-ti",
          literal: "Entonces no sólo consiguió bonita.",
          why: "“Get” más adjetivo sirve para cambios de estado: get red, get nervous, get pretty. Se parece a ponerse."
        },
        {
          speaker: "Nidia",
          target: "Exactly. It became a place to learn trades.",
          translation: "Exacto. Se convirtió en un lugar para aprender oficios.",
          pronunciation: "eg-ZAKT-li. it bi-KEIM a pleis tu lern treids",
          literal: "Exactamente. Se volvió un lugar para aprender oficios.",
          why: "El inglés no usa preposición después de “become”: became a place, no “became in a place.”"
        },
        {
          speaker: "Santiago",
          target: "And did Mrs. Nidia become a leader through all the work?",
          translation: "¿Y la señora Nidia llegó a ser líder por todo el trabajo?",
          pronunciation: "and did MI-siz NEE-dia bi-COM a LI-der thru ol da uerk",
          literal: "¿Y la señora Nidia se convirtió en líder por todo el trabajo?",
          why: "“Become” puede cubrir hacerse o llegar a ser. El contexto de esfuerzo y tiempo dice cuál traducción española encaja."
        },
        {
          speaker: "Nidia",
          target: "Let's say I came to be a leader over time.",
          translation: "Digamos que llegué a ser líder con el tiempo.",
          pronunciation: "lets sei ai keim tu bi a LI-der OU-ver taim",
          literal: "Digamos que vine a ser líder con el tiempo.",
          why: "“Came to be” resalta el proceso largo y el resultado alcanzado, muy cerca de llegar a ser."
        },
        {
          speaker: "Santiago",
          target: "So it got pretty, but it became something else.",
          translation: "Entonces se puso bonita, pero se convirtió en otra cosa.",
          pronunciation: "sou it gat PRI-ti, bat it bi-KEIM SOM-zing els",
          literal: "Entonces consiguió bonita, pero se volvió algo más.",
          why: "La línea separa dos cambios: “got pretty” para estado visible; “became something else” para transformación."
        }
      ],
      vocabulary: [
        {
          term: "become",
          explanation:
            "Volverse, convertirse, hacerse o llegar a ser, según cómo ocurrió el cambio. Es más amplio que cualquier verbo español único.",
          literal: "convertirse / volverse",
          useWhen:
            "Una persona, cosa, lugar o problema pasa a otro estado, papel o identidad.",
          avoidWhen:
            "El cambio es casual y con adjetivo. Muchas veces “get” o “turn” suena más natural.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["get", "turn into", "grow", "come to be"],
          example: {
            target: "The warehouse became a workshop.",
            translation: "La bodega se convirtió en taller."
          }
        },
        {
          term: "get + adjective",
          explanation:
            "Ponerse o volverse en cambios de estado: get red, get nervous, get difficult.",
          literal: "ponerse + adjetivo",
          useWhen:
            "El cambio es de condición, emoción, color, clima o dificultad.",
          avoidWhen:
            "Una cosa se transforma en otra clase de cosa. Ahí “become” o “turn into” es más claro.",
          register: "neutro hablado",
          region: "Inglés universal.",
          related: ["get red", "get nervous", "get serious", "get better"],
          example: {
            target: "It got pretty.",
            translation: "Se puso bonita."
          }
        },
        {
          term: "become + noun",
          explanation:
            "Convertirse en algo o llegar a ser algo. En inglés no lleva “in” después de become.",
          literal: "volverse sustantivo",
          useWhen:
            "El resultado es un papel, lugar, profesión, problema, herramienta o identidad.",
          avoidWhen:
            "No diga “become in.” Esa preposición viene del español convertirse en, no del inglés.",
          register: "de gramática patrón",
          region: "Inglés universal.",
          related: ["become a leader", "become a place", "become a problem", "become a habit"],
          example: {
            target: "It became a place to learn.",
            translation: "Se convirtió en un lugar para aprender."
          }
        },
        {
          term: "turn into",
          explanation:
            "Convertirse en, con imagen fuerte de transformación de una cosa en otra.",
          literal: "girar hacia dentro de",
          useWhen:
            "Una cosa cambia de forma, uso o identidad de manera clara: a room turns into a studio.",
          avoidWhen:
            "El cambio es una profesión lograda con esfuerzo. “Become” o “come to be” puede sonar mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["become", "change into", "transform into", "end up as"],
          example: {
            target: "The room turned into a workshop.",
            translation: "El cuarto se convirtió en taller."
          }
        },
        {
          term: "come to be",
          explanation:
            "Llegar a ser. Resalta el proceso largo hasta un resultado.",
          literal: "venir a ser",
          useWhen:
            "Una persona o proyecto alcanza un papel con tiempo, trabajo o reconocimiento.",
          avoidWhen:
            "El cambio es rápido, físico o casual. La frase suena demasiado grande.",
          register: "neutro formal",
          region: "Inglés universal.",
          related: ["become over time", "grow into", "eventually become", "end up being"],
          example: {
            target: "I came to be a leader over time.",
            translation: "Llegué a ser líder con el tiempo."
          }
        },
        {
          term: "something else",
          explanation:
            "Otra cosa. Una forma simple de decir que la identidad cambió.",
          literal: "algo más",
          useWhen:
            "El uso, papel o identidad cambió tanto que el nombre viejo ya no basta.",
          avoidWhen:
            "El cambio fue mínimo o cosmético. Entonces exagera.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["a different thing", "a new place", "a new role", "another stage"],
          example: {
            target: "It became something else.",
            translation: "Se convirtió en otra cosa."
          }
        },
        {
          term: "trades",
          explanation:
            "Oficios o habilidades prácticas. En un taller comunitario, mantiene el foco en aprender haciendo.",
          literal: "oficios",
          useWhen:
            "Habla de reparación, construcción, cocina, costura, carpintería o trabajo práctico.",
          avoidWhen:
            "Habla de materias académicas. Entonces “subjects” puede ser mejor.",
          register: "neutro",
          region: "Inglés universal.",
          related: ["skills", "crafts", "repair", "hands-on work"],
          example: {
            target: "A place to learn trades.",
            translation: "Un lugar para aprender oficios."
          }
        }
      ],
      note:
        "El inglés “become” es amplio, pero no trabaja solo. Para estados pasajeros, “get” más adjetivo suele sonar natural: get red, get nervous. Para transformación fuerte, “turn into” compite con “become.” Para logro con tiempo, “come to be” se acerca a llegar a ser. Y recuerde: en inglés se dice “became a workshop,” no “became in a workshop.”",
      culture: [
        {
          label: "Una bodega puede cambiar de papel social",
          body:
            "Cuando un edificio se vuelve taller, el cambio no está sólo en la pintura. Cambia quién entra, qué aprende la gente y qué espera el barrio de ese lugar. “Became a workshop” nombra ese nuevo papel."
        },
        {
          label: "El inglés no obliga a escoger tanto",
          body:
            "Un hablante puede decir “became” para muchas cosas que en español obligan a escoger entre ponerse, hacerse, volverse, convertirse en y llegar a ser. Eso ayuda al principio, pero también puede esconder matices."
        },
        {
          label: "No meta la preposición española",
          body:
            "El error “became in” nace de convertirse en. En inglés, “become” toma el resultado directamente: became a leader, became a problem, became a place."
        },
        {
          label: "El proceso importa",
          body:
            "“Came to be a leader” cuenta una historia de tiempo. “Got nervous” cuenta un cambio de estado. “Turned into a workshop” cuenta transformación. Aprender esas familias evita traducir todo con una sola palabra."
        }
      ],
      pitfalls: [
        {
          mistake: "“The warehouse became in a workshop.”",
          whyItFails:
            "Es un calco de “convertirse en.” En inglés, “become” toma el resultado directamente, sin “in.”",
          sayInstead: "The warehouse became a workshop."
        },
        {
          mistake: "“He became red.”",
          whyItFails:
            "Se entiende, pero para ponerse rojo el inglés cotidiano prefiere “got” o “turned.”",
          sayInstead: "He got red."
        },
        {
          mistake: "“She made herself a lawyer.”",
          whyItFails:
            "Calca “se hizo abogada.” En inglés, el resultado profesional se dice con “became.”",
          sayInstead: "She became a lawyer."
        },
        {
          mistake: "“It got a community workshop.”",
          whyItFails:
            "“Get” más sustantivo no expresa esta transformación. Para cambiar de identidad o uso, use “became” o “turned into.”",
          sayInstead: "It became a community workshop."
        }
      ],
      variations: [
        {
          form: "The warehouse became a workshop.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Una transformación real en otro tipo de lugar."
        },
        {
          form: "He got red with embarrassment.",
          register: "neutro hablado",
          region: "Inglés universal",
          whenToUse: "Un estado visible y pasajero."
        },
        {
          form: "She became a lawyer through hard work.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Un papel alcanzado con estudio, trabajo o decisión."
        },
        {
          form: "He became very quiet.",
          register: "neutro",
          region: "Inglés universal",
          whenToUse: "Un cambio gradual de personalidad."
        },
        {
          form: "She came to be a neighborhood leader.",
          register: "neutro formal",
          region: "Inglés universal",
          whenToUse: "Un logro o papel alcanzado con el tiempo."
        }
      ],
      prompt: "Nidia says “the warehouse became a workshop.” ¿Qué tipo de cambio expresa?",
      choices: [
        "Un estado pasajero que desaparece en un minuto.",
        "Una transformación real en otro tipo de lugar.",
        "Un regreso rápido al mismo edificio."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "¿Cuál frase evita la preposición calcada del español?",
          choices: [
            "The warehouse became a workshop.",
            "The warehouse became in a workshop.",
            "The warehouse got in a workshop."
          ],
          answer: 0,
          tests: "become + noun, no in"
        },
        {
          prompt: "¿Cuál frase sirve para un estado visible y pasajero?",
          choices: [
            "He became in red with embarrassment.",
            "He came to be red as a career.",
            "He got red with embarrassment."
          ],
          answer: 2,
          tests: "get + adjective for passing state"
        },
        {
          prompt: "¿Cuál frase presenta un papel alcanzado con el tiempo?",
          choices: [
            "She remained leader in a minute.",
            "She came to be a neighborhood leader.",
            "She returned into a leader."
          ],
          answer: 1,
          tests: "come to be as achieved becoming"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/50-developing-coming-back-and-becoming.js");
