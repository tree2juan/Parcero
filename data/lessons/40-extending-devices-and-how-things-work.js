/*
 * Lesson block: extension / devices and how things work.
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
    id: "encender-the-fan-in-sincelejo",
    level: "Extending · Devices and how things work",
    skills: ["speaking", "listening", "context"],
    domain: "everyday life",
    register: "neutral with formal contrast",
    pathways: ["foundation", "year-12"],
    verb: "encender",
    review: "pending",
    es: {
      title: "Encender el ventilador cuando vuelve la luz",
      situation:
        "Estás en una casa de huéspedes en Sincelejo, con el calor metido en las paredes y un ventilador que no arranca después de un bajón de luz. La dueña te explica qué botón tocar, cuándo decir “prender” como todo el mundo y cuándo “encender” suena mejor en un aviso o una instrucción escrita.",
      setting: {
        who: "Doña Elvira runs a small guesthouse with the calm of someone who has survived many power cuts. Nina is staying for a few nights and wants the fan, the router and the switches to behave without making a ceremony of every sentence.",
        what: "A practical exchange about turning a fan and a router back on after the power flickers, with an explicit split between everyday “prender” and more formal “encender.”",
        when: "Early evening, just after the electricity has returned and everyone is trying to make rooms livable again.",
        where: "Sincelejo, Sucre, in a family guesthouse where heat, fans and brief power dips are normal parts of the day.",
        why: "A learner who only knows “encender” can read signs and manuals, but will sound stiff when Colombians around them say “prende la luz” and “prende el ventilador.”"
      },
      address: {
        form: "usted",
        who: "Doña Elvira uses usted with Nina because she is a paying guest, and Nina mirrors it while asking for help.",
        why: "The tone is warm, but the relationship is still host and guest. Usted lets Doña Elvira give instructions without sounding bossy or over-familiar.",
        ifYouSwitch:
          "Tú would not be offensive once the relationship relaxes, but it would make Nina sound as if she had skipped a step. Vos would feel imported from another region here."
      },
      dialogue: [
        {
          speaker: "Nina",
          target: "Doña Elvira, volvió la luz, pero no puedo encender el ventilador.",
          translation: "Doña Elvira, the power came back, but I can't turn on the fan.",
          pronunciation: "DOH-nya el-BEE-ra, bol-BYO la loos, PEH-roh no PWEH-doh en-sen-DER el ben-tee-la-DOR",
          literal: "Doña Elvira, returned the light, but not I-can turn-on the fan.",
          why: "“Encender” is correct, especially because Nina is asking carefully. Notice the stem change when it is conjugated: “enciende,” “enciendo.” The infinitive keeps the plain e."
        },
        {
          speaker: "Doña Elvira",
          target: "Sí puede; primero prende ese interruptor y después enciende el botón blanco.",
          translation: "You can; first switch on that wall switch and then turn on the white button.",
          pronunciation: "see PWEH-deh; pree-MEH-roh PREN-deh EH-seh een-te-rroop-TOR ee des-PWES en-SYEN-deh el bo-TON BLAN-koh",
          literal: "Yes you-can; first turn-on that switch and after turns-on the button white.",
          why: "This is the honest Colombian split in one line. “Prende” is the ordinary spoken verb; “enciende” sounds a shade more careful, like the word on a label or instruction."
        },
        {
          speaker: "Nina",
          target: "Entonces, para hablar normal digo prender, no encender todo el tiempo.",
          translation: "So, for normal speech I say prender, not encender all the time.",
          pronunciation: "en-TON-ses, PA-ra a-BLAR nor-MAL DEE-goh pren-DER, no en-sen-DER TO-doh el TYEM-poh",
          literal: "Then, for speaking normal I-say prender, not turn-on all the time.",
          why: "Exactly. “Encender” is not fake or wrong, but using it for every lamp, fan and stove can make everyday Colombian Spanish sound like a manual."
        },
        {
          speaker: "Doña Elvira",
          target: "Eso. Si yo digo “encienda el equipo”, suena como aviso pegado en la pared.",
          translation: "Right. If I say “turn on the equipment,” it sounds like a notice stuck on the wall.",
          pronunciation: "EH-soh. see yo DEE-goh en-SYEN-da el eh-KEE-poh, SWEH-na KO-moh a-BEE-soh peh-GA-doh en la pa-RED",
          literal: "That. If I say turn-on the equipment, it sounds like notice stuck on the wall.",
          why: "“Encienda” is the usted command and keeps the e-to-ie change. It is perfect on a laminated instruction sheet; it is just not the first word most Colombians reach for at home."
        },
        {
          speaker: "Nina",
          target: "Ya prendí el interruptor, pero el router no enciende todavía.",
          translation: "I already switched on the wall switch, but the router still doesn't turn on.",
          pronunciation: "ya pren-DEE el een-te-rroop-TOR, PEH-roh el ROO-ter no en-SYEN-deh toh-da-BEE-a",
          literal: "Already I-turned-on the switch, but the router not turns-on still.",
          why: "“No enciende” is a natural device sentence: the machine fails to come on. When the subject is a thing, Spanish often makes the device responsible for lighting up or starting."
        },
        {
          speaker: "Doña Elvira",
          target: "Deme un minuto; a veces toca encenderlo dos veces después del bajón.",
          translation: "Give me a minute; sometimes you have to turn it on twice after the dip.",
          pronunciation: "DEH-meh oon mee-NOO-toh; a BEH-ses TOH-ka en-sen-DER-loh dos BEH-ses des-PWES del ba-HON",
          literal: "Give-me a minute; sometimes it-touches to-turn-it-on two times after the dip.",
          why: "“Toca” means “one has to” here. The useful object form is “encenderlo,” turn it on, with the pronoun attached to the infinitive."
        }
      ],
      vocabulary: [
        {
          term: "encender",
          explanation:
            "The formal or careful verb for turning something on, lighting it or making a device start.",
          literal: "to turn on / to light",
          useWhen:
            "Reading instructions, speaking carefully, describing a device that starts up, or talking about ignition and indicator lights.",
          avoidWhen:
            "Trying to sound like ordinary Colombian home speech every time. For lights, fans and appliances, Colombians normally say “prender.”",
          register: "formal or careful",
          region: "Standard Spanish, fully understood in Colombia but more written than “prender” in everyday switching-on talk.",
          related: ["prender", "encendido", "interruptor", "botón"],
          example: {
            target: "No puedo encender el ventilador.",
            translation: "I can't turn on the fan."
          }
        },
        {
          term: "prender",
          explanation:
            "The everyday Colombian verb for turning something on: lights, fans, stoves, televisions, routers and phones.",
          literal: "to turn on / to catch",
          useWhen:
            "Speaking normally at home, in a shop, with a host or with a technician who is giving quick instructions.",
          avoidWhen:
            "Writing formal instructions where “encender” gives a cleaner, more official tone.",
          register: "everyday conversational",
          region: "The ordinary spoken choice in Colombia for switching things on.",
          related: ["encender", "prendido", "apagar", "arrancar"],
          example: {
            target: "Prende ese interruptor primero.",
            translation: "Switch on that wall switch first."
          }
        },
        {
          term: "enciende",
          explanation:
            "The present-tense form for él, ella, usted or a thing: “it turns on” or “you turn on.” It shows the e-to-ie stem change.",
          literal: "turns on / turn on",
          useWhen:
            "Saying a device starts, or giving an usted command in a careful tone: “enciende” as description, “encienda” as command.",
          avoidWhen:
            "Forgetting the stem change and saying “encende.” The infinitive has e; the conjugated present often has ie.",
          register: "neutral to formal",
          region: "General Spanish; the stem change is grammatical, not regional.",
          related: ["enciendo", "encienda", "encendido", "prende"],
          example: {
            target: "El router no enciende todavía.",
            translation: "The router still doesn't turn on."
          }
        },
        {
          term: "interruptor",
          explanation:
            "A switch, especially the wall switch for a light or appliance.",
          literal: "interrupter",
          useWhen:
            "Asking which switch controls a fan, light, pump or breaker box circuit.",
          avoidWhen:
            "Calling every button an interruptor. A button you press on a device is usually “botón.”",
          register: "neutral",
          region: "General Spanish; common in Colombian homes and instructions.",
          related: ["botón", "tomacorriente", "breaker", "enchufe"],
          example: {
            target: "Prendí el interruptor de la pared.",
            translation: "I switched on the wall switch."
          }
        },
        {
          term: "botón",
          explanation:
            "A button on a device, remote, router, elevator or appliance.",
          literal: "button",
          useWhen:
            "The control is something you press rather than a wall switch you flip.",
          avoidWhen:
            "Using it for the whole device. The button turns something on; it is not the fan or router itself.",
          register: "neutral",
          region: "General Spanish; the accented ó matters in writing.",
          related: ["tecla", "interruptor", "control", "panel"],
          example: {
            target: "Enciende el botón blanco.",
            translation: "Turn on the white button."
          }
        },
        {
          term: "volvió la luz",
          explanation:
            "The power came back. Colombians commonly call electricity “la luz” in household talk.",
          literal: "the light returned",
          useWhen:
            "After a blackout, power dip or neighbourhood outage ends.",
          avoidWhen:
            "Over-translating it as only the visible lights. It often means the electricity supply in general.",
          register: "everyday conversational",
          region: "General Colombian household speech.",
          related: ["se fue la luz", "bajón de luz", "apagón", "energía"],
          example: {
            target: "Volvió la luz hace cinco minutos.",
            translation: "The power came back five minutes ago."
          }
        },
        {
          term: "bajón de luz",
          explanation:
            "A power dip or voltage drop, the kind that makes devices blink, reset or refuse to start cleanly.",
          literal: "drop of light",
          useWhen:
            "A device acts strangely right after the electricity flickers but the whole neighbourhood did not fully black out.",
          avoidWhen:
            "Blaming every broken device on a bajón. It names the power event, not a diagnosis.",
          register: "neutral conversational",
          region: "Common and understandable Colombian phrasing for household electricity problems.",
          related: ["apagón", "voltaje", "estabilizador", "se reinició"],
          example: {
            target: "Después del bajón toca encenderlo otra vez.",
            translation: "After the dip, you have to turn it on again."
          }
        }
      ],
      note:
        "The useful lesson is register, not just conjugation. “Encender” belongs to instructions, labels and careful speech, and it has the stem change you expect in “enciendo” and “enciende.” But in Colombian homes the living verb is “prender.” If someone says “prende la luz,” they are not using a lesser word; they are using the normal one. Learn “encender” so you can read and speak formally, and learn “prender” so the room around you makes sense.",
      culture: [
        {
          label: "Electricity talk uses “la luz”",
          body:
            "In Colombian household speech, “se fue la luz” and “volvió la luz” often mean the power supply, not just the bulb. A guest who hears “ya volvió la luz” should understand that the fan, router, fridge and chargers may now be back in play. That compact phrase is much more common than a technical explanation about electricity."
        },
        {
          label: "The formal word is not the spoken default",
          body:
            "Textbooks love “encender” because it maps neatly to “turn on.” Colombian kitchens, bedrooms and shops often choose “prender” instead. The distinction is not about correctness. It is about texture: “encienda el equipo” sounds like an instruction; “prende el ventilador” sounds like someone trying to survive a hot evening."
        },
        {
          label: "After a dip, devices need patience",
          body:
            "Routers, fans and small appliances sometimes behave badly after a power dip. People may wait, press the button twice, unplug something briefly or ask which switch controls which room. The language stays practical and unsentimental. Nobody needs a lecture on circuits before they need air, light or internet."
        }
      ],
      pitfalls: [
        {
          mistake: "Using “encender” as the only Colombian verb for turning things on",
          whyItFails:
            "It is correct, but it makes ordinary home speech sound stiff. Colombians around you are much more likely to say “prender” for lights, fans and appliances.",
          sayInstead: "Prende el ventilador."
        },
        {
          mistake: "Saying “el router no encende”",
          whyItFails:
            "The present tense changes e to ie. The device “enciende,” and you “enciendes” or “enciende” depending on the form.",
          sayInstead: "El router no enciende."
        },
        {
          mistake: "Translating “volvió la luz” as only one lamp came back",
          whyItFails:
            "In Colombian household talk, “la luz” often means the electricity supply. The whole house may have power again, not just visible light.",
          sayInstead: "The power came back."
        }
      ],
      variations: [
        {
          form: "Prende la luz, porfa.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "The ordinary spoken request at home or in a room with someone you know."
        },
        {
          form: "Encienda el equipo antes de revisar la pantalla.",
          register: "formal instruction",
          region: "General Spanish",
          whenToUse: "A written instruction, sign or careful usted command."
        },
        {
          form: "El router no enciende todavía.",
          register: "neutral practical",
          region: "General Colombian",
          whenToUse: "Describing a device that will not come on after power returns."
        },
        {
          form: "Yo enciendo el ventilador cuando vuelva la luz.",
          register: "careful neutral",
          region: "General Spanish",
          whenToUse: "Practising the yo stem change or speaking a bit more carefully."
        }
      ],
      prompt: "Doña Elvira says “prende” and “enciende” in one instruction. What is she showing Nina?",
      choices: [
        "That “prender” is everyday Colombian speech, while “encender” sounds more careful or written.",
        "That “prender” works only for fire, while “encender” works only for internet devices.",
        "That “encender” is slang from the coast, while “prender” belongs only to manuals."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which line sounds most natural in ordinary Colombian home speech?",
          choices: [
            "Prende el ventilador, porfa.",
            "Enciende formalmente el ventilador.",
            "Activa la ventilación doméstica."
          ],
          answer: 0,
          tests: "“prender” as the ordinary Colombian verb for switching something on"
        },
        {
          prompt: "Which sentence uses the stem change in “encender” correctly?",
          choices: [
            "El router no encende todavía.",
            "El router no enciende todavía.",
            "El router no encendía mañana."
          ],
          answer: 1,
          tests: "the e-to-ie change in “enciende”"
        },
        {
          prompt: "If someone says “volvió la luz,” what should you understand?",
          choices: [
            "A single bulb changed colour.",
            "The bill arrived by email.",
            "The power came back."
          ],
          answer: 2,
          tests: "“la luz” as the household electricity supply"
        }
      ]
    },
    en: {
      title: "Encender el ventilador cuando vuelve la luz",
      situation:
        "Usted está en una casa de huéspedes en Darwin, con el calor metido en las paredes y un ventilador que no arranca después de un bajón de electricidad. La dueña le explica qué botón tocar, cuándo decir “turn on” y por qué no conviene traducir literalmente “prender” como si fuera prender fuego.",
      setting: {
        who: "Helen administra una casa de huéspedes pequeña y ya vio muchos cortes breves de electricidad. Natalia se queda varias noches y necesita que el ventilador, el router y los switches vuelvan a la vida sin sonar como manual traducido.",
        what: "Una conversación práctica sobre prender un ventilador y un router después de un bajón, con la diferencia entre “turn on,” “switch on” y “come on.”",
        when: "Al comienzo de la noche, justo después de que vuelve la electricidad y todos intentan hacer habitables los cuartos.",
        where: "Darwin, Australia, en una casa de huéspedes donde el calor, los ventiladores y los cortes breves hacen parte normal del día.",
        why: "Un hispanohablante que traduce “prender” demasiado literalmente puede terminar hablando de fuego cuando sólo quiere aire, luz o internet."
      },
      address: {
        form: "mixed",
        who: "Helen y Natalia usan nombres de pila y el mismo “you,” aunque la relación siga siendo de anfitriona y huésped.",
        why: "El inglés no cambia entre tú y usted. El respeto aparece en el tono, en “could,” en “please,” y en no dar órdenes secas.",
        ifYouSwitch:
          "No hay otro pronombre para cambiar. Natalia puede sonar más amable con “Could you show me,” o más directa con “Show me,” pero “you” sigue igual."
      },
      dialogue: [
        {
          speaker: "Natalia",
          target: "Helen, the power is back, but I can't turn on the fan.",
          translation: "Helen, volvió la luz, pero no puedo encender el ventilador.",
          pronunciation: "JE-len, da PAU-er is bak, bot ai kant tern on da fan",
          literal: "Helen, el poder está de vuelta, pero no puedo girar en el ventilador.",
          why: "“Turn on” es la frase general para encender o prender un aparato. No la separe palabra por palabra: el “on” hace parte del verbo compuesto."
        },
        {
          speaker: "Helen",
          target: "You can; first switch on that wall switch, then press the white button.",
          translation: "Sí puede; primero prende ese interruptor de pared y luego oprime el botón blanco.",
          pronunciation: "yu kan; ferst suich on dat wol suich, den pres da wait BO-ton",
          literal: "Usted puede; primero cambie en ese interruptor de pared, después presione el botón blanco.",
          why: "“Switch on” encaja especialmente bien con un interruptor. Para el botón del aparato, el inglés prefiere “press the button,” no “turn on the button.”"
        },
        {
          speaker: "Natalia",
          target: "So I say turn on, not light the fan.",
          translation: "Entonces digo turn on, no light the fan.",
          pronunciation: "so ai sei tern on, not lait da fan",
          literal: "Entonces digo girar en, no iluminar el ventilador.",
          why: "Exacto. “Light” puede significar encender una vela, un fósforo o una hornilla de gas, pero “light the fan” suena como si fuera a prenderle fuego."
        },
        {
          speaker: "Helen",
          target: "Right. If a device starts by itself, we say it comes on.",
          translation: "Eso. Si un aparato arranca solo, decimos que se enciende.",
          pronunciation: "rait. if a di-VAIS starts bai it-SELF, ui sei it komz on",
          literal: "Correcto. Si un aparato empieza por sí mismo, decimos viene en.",
          why: "“Come on” describe el aparato cuando empieza a funcionar o se ilumina: “the router comes on.” La persona turns it on; the device comes on."
        },
        {
          speaker: "Natalia",
          target: "I switched on the wall switch, but the router still won't come on.",
          translation: "Ya prendí el interruptor de pared, pero el router todavía no enciende.",
          pronunciation: "ai suicht on da wol suich, bot da RU-ter stil wont kom on",
          literal: "Yo cambié en el interruptor de pared, pero el router todavía no quiere venir en.",
          why: "“Won't come on” no acusa al router de tener voluntad; es una forma corriente de decir que el aparato no arranca aunque debería."
        },
        {
          speaker: "Helen",
          target: "Give it a minute; after a power dip, you sometimes have to turn it on twice.",
          translation: "Dele un minuto; después de un bajón a veces toca encenderlo dos veces.",
          pronunciation: "giv it a MI-nit; AF-ter a PAU-er dip, yu SOM-taimz jav tu tern it on twais",
          literal: "Déle eso un minuto; después de un bajón de poder, usted a veces tiene que girarlo en dos veces.",
          why: "Con objeto, el pronombre parte el verbo compuesto: “turn it on,” no “turn on it.” Esa posición es una de las trampas más útiles de aprender temprano."
        }
      ],
      vocabulary: [
        {
          term: "turn on",
          explanation:
            "La frase general para prender o encender un aparato, una luz, una pantalla o un sistema.",
          literal: "girar en",
          useWhen:
            "Cuando una persona activa algo: un ventilador, una lámpara, un celular, un horno o el internet.",
          avoidWhen:
            "Separarla mal con pronombres. Se dice “turn it on,” no “turn on it.”",
          register: "neutral",
          region: "Inglés universal; es la opción segura para casi cualquier aparato.",
          related: ["switch on", "come on", "power on", "turn off"],
          example: {
            target: "I can't turn on the fan.",
            translation: "No puedo encender el ventilador."
          }
        },
        {
          term: "switch on",
          explanation:
            "Prender algo mediante un interruptor. Suena muy natural cuando hay un switch físico.",
          literal: "cambiar en",
          useWhen:
            "Al hablar de luces, interruptores de pared, tableros y aparatos con palanca o switch.",
          avoidWhen:
            "Para un botón que se oprime en un aparato. Ahí puede ser más natural “press the button.”",
          register: "neutral practical",
          region: "Inglés universal; algo más común en inglés británico y australiano que en Estados Unidos.",
          related: ["turn on", "flip the switch", "wall switch", "switch off"],
          example: {
            target: "Switch on that wall switch first.",
            translation: "Prenda primero ese interruptor de pared."
          }
        },
        {
          term: "come on",
          explanation:
            "Encenderse o arrancar, dicho desde el punto de vista del aparato.",
          literal: "venir en",
          useWhen:
            "La luz, pantalla, router o ventilador empieza a funcionar después de recibir energía.",
          avoidWhen:
            "Usarlo como si una persona “comes on” un aparato. La persona turns it on; el aparato comes on.",
          register: "neutral conversational",
          region: "Inglés universal; también tiene otros sentidos, así que el contexto manda.",
          related: ["turn on", "start up", "light up", "power up"],
          example: {
            target: "The router still won't come on.",
            translation: "El router todavía no enciende."
          }
        },
        {
          term: "wall switch",
          explanation:
            "El interruptor de pared, normalmente para una luz, ventilador o circuito de un cuarto.",
          literal: "interruptor de pared",
          useWhen:
            "Necesita distinguir el switch de la pared del botón que está en el aparato.",
          avoidWhen:
            "Llamar “wall switch” a cualquier botón. Si está en el aparato, suele ser “button.”",
          register: "neutral",
          region: "Inglés universal; “light switch” es común cuando sólo controla una luz.",
          related: ["light switch", "button", "breaker", "outlet"],
          example: {
            target: "I switched on the wall switch.",
            translation: "Prendí el interruptor de pared."
          }
        },
        {
          term: "button",
          explanation:
            "El botón que se oprime en un aparato, control remoto, ascensor o panel.",
          literal: "botón",
          useWhen:
            "El control se presiona, no se mueve como un interruptor de pared.",
          avoidWhen:
            "Decir “turn on the button” si quiere decir oprimirlo. Lo natural es “press the button.”",
          register: "neutral",
          region: "Inglés universal.",
          related: ["press", "switch", "control", "panel"],
          example: {
            target: "Press the white button.",
            translation: "Oprima el botón blanco."
          }
        },
        {
          term: "the power is back",
          explanation:
            "Volvió la luz o volvió la electricidad después de un corte.",
          literal: "el poder está de vuelta",
          useWhen:
            "Se acaba un apagón o regresa el suministro eléctrico en una casa o barrio.",
          avoidWhen:
            "Traducir “luz” como “light” si habla del servicio eléctrico completo. “The light is back” puede sonar a una sola lámpara.",
          register: "neutral conversational",
          region: "Inglés universal; “power” es electricidad en este contexto.",
          related: ["power cut", "blackout", "outage", "electricity"],
          example: {
            target: "The power is back now.",
            translation: "Ya volvió la luz."
          }
        },
        {
          term: "power dip",
          explanation:
            "Un bajón de electricidad o caída breve de voltaje que hace parpadear o reiniciar aparatos.",
          literal: "bajón de poder",
          useWhen:
            "Un aparato falla justo después de que la electricidad parpadea sin irse por completo.",
          avoidWhen:
            "Usarlo como diagnóstico seguro de daño. Nombra el evento eléctrico, no necesariamente la causa final.",
          register: "neutral practical",
          region: "Inglés universal; “voltage drop” suena más técnico.",
          related: ["voltage drop", "outage", "surge", "reset"],
          example: {
            target: "After a power dip, turn it on again.",
            translation: "Después de un bajón, préndalo otra vez."
          }
        }
      ],
      note:
        "La lección útil es escoger el verbo compuesto según quién hace la acción. Una persona turns on o switches on un aparato. El aparato comes on cuando arranca. Y si hay pronombre, el inglés lo mete en medio: “turn it on.” Para un colombiano, el peligro es traducir “prender” como fuego y decir “light the fan.” Reserve “light” para velas, fósforos, cigarrillos u hornillas, no para un ventilador.",
      culture: [
        {
          label: "“Power” no es poder político aquí",
          body:
            "En conversaciones de casa, “power” suele ser electricidad. “The power is back” equivale a “volvió la luz,” aunque no hable de una lámpara concreta. Esa diferencia evita traducciones raras como “the light returned” cuando el tema real es que el router, la nevera y los cargadores vuelven a recibir energía."
        },
        {
          label: "El verbo compuesto carga la precisión",
          body:
            "El inglés cotidiano resuelve mucho con partículas: turn on, switch on, come on, power up. Parecen pequeñas, pero cambian quién actúa y qué pasa. Un hispanohablante que sólo traduce el verbo principal pierde media instrucción. En aparatos, la partícula no es decoración; es gramática práctica."
        },
        {
          label: "No todo “prender” es “light”",
          body:
            "“Light” sí sirve para una vela, un fósforo o una hornilla de gas. Pero con un ventilador, un router o un teléfono, “light” suena como si fuera a encenderlo con fuego. La frase neutral “turn on” evita ese accidente y funciona en casi todos los aparatos que un viajero necesita tocar."
        }
      ],
      pitfalls: [
        {
          mistake: "“Light the fan.”",
          whyItFails:
            "“Light” se usa para fuego o iluminación, no para activar un ventilador. Suena como si usted fuera a prenderle fuego al aparato.",
          sayInstead: "Turn on the fan."
        },
        {
          mistake: "“Turn on it.”",
          whyItFails:
            "Con pronombre, el objeto va en la mitad del verbo compuesto. El orden correcto es “turn it on.”",
          sayInstead: "Turn it on."
        },
        {
          mistake: "“The router doesn't turn on by me.”",
          whyItFails:
            "La frase mezcla al aparato y a la persona. Si el aparato no arranca, lo natural es “won't come on.”",
          sayInstead: "The router won't come on."
        }
      ],
      variations: [
        {
          form: "Turn on the fan, please.",
          register: "neutral polite",
          region: "Inglés universal",
          whenToUse: "La petición general y segura para prender un aparato."
        },
        {
          form: "Switch on the wall switch first.",
          register: "neutral practical",
          region: "Inglés universal",
          whenToUse: "Cuando el control es un interruptor físico, sobre todo de pared."
        },
        {
          form: "The router won't come on yet.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Describir un aparato que no arranca después de recibir energía."
        },
        {
          form: "Turn it on again after a minute.",
          register: "neutral practical",
          region: "Inglés universal",
          whenToUse: "Practicar el pronombre entre “turn” y “on.”"
        }
      ],
      prompt: "Helen uses “turn on,” “switch on,” and “come on.” What is the useful difference?",
      choices: [
        "“Turn on” is general, “switch on” fits a switch, and “come on” describes the device starting.",
        "“Come on” is only for people, “switch on” is only for phones, and “turn on” means burn.",
        "All three mean exactly the same thing and can always replace each other without changing tone."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase sirve para pedir que alguien prenda el ventilador?",
          choices: [
            "Turn on the fan, please.",
            "Light the fan, please.",
            "Come on the fan, please."
          ],
          answer: 0,
          tests: "“turn on” como frase general para activar un aparato"
        },
        {
          prompt: "¿Cuál oración pone bien el pronombre con “turn on”?",
          choices: [
            "Turn on it after a minute.",
            "Turn it on after a minute.",
            "Turn after it on a minute."
          ],
          answer: 1,
          tests: "el pronombre entre “turn” y “on”"
        },
        {
          prompt: "Si el aparato no arranca solo, ¿cuál frase suena natural?",
          choices: [
            "The router does not light me.",
            "The router does not turn by me.",
            "The router won't come on."
          ],
          answer: 2,
          tests: "“come on” para el aparato que empieza a funcionar"
        }
      ]
    }
  },
  {
    id: "apagar-the-breaker-in-riohacha",
    level: "Extending · Devices and how things work",
    skills: ["speaking", "listening", "context"],
    domain: "everyday life",
    register: "neutral practical",
    pathways: ["foundation", "year-12"],
    verb: "apagar",
    review: "pending",
    es: {
      title: "Apagar el breaker antes de revisar la nevera",
      situation:
        "Estás en Riohacha, en una casa cerca del malecón, y una nevera vieja empezó a sonar raro después de otro parpadeo de luz. El vecino que sabe de instalaciones te pide apagar el breaker antes de mirar cualquier cosa, mientras tu celular también se apaga justo cuando ibas a grabar el ruido.",
      setting: {
        who: "Óscar is the neighbour everyone calls before they call a technician. Mara is renting the house for a month and knows enough to be cautious but not enough to touch a breaker box confidently.",
        what: "A safety-first conversation about turning off a breaker and appliances, plus the everyday use of “se apagó” for a phone that dies.",
        when: "A windy afternoon, with the fridge making a new noise after the electricity flickers.",
        where: "Riohacha, La Guajira, in a rented house close enough to the sea for salt, heat and old wiring to be part of the background.",
        why: "Apagar is basic device language, but it also carries safety, spelling and metaphor: appliances are turned off, phones die, and exhausted people switch off too."
      },
      address: {
        form: "tú",
        who: "Óscar uses tú because he is a neighbour doing a practical favour, not an official inspector. Mara follows his lead.",
        why: "The exchange is serious but not formal. Tú lets Óscar give quick instructions while still sounding like someone helping next door.",
        ifYouSwitch:
          "Usted would be safe if Mara wanted more distance, especially with an older neighbour. Vos would sound marked here and is not needed for the scene."
      },
      dialogue: [
        {
          speaker: "Óscar",
          target: "Antes de tocar la nevera, apaga el breaker de la cocina.",
          translation: "Before touching the fridge, turn off the kitchen breaker.",
          pronunciation: "AN-tes deh toh-KAR la neh-BEH-ra, a-PA-ga el BREI-ker deh la koh-SEE-na",
          literal: "Before touching the fridge, turn-off the breaker of the kitchen.",
          why: "“Apaga” is the tú command. With electricity, this is not just vocabulary; it is the safety instruction before anyone gets curious."
        },
        {
          speaker: "Mara",
          target: "¿Apago sólo ese, o apago toda la caja?",
          translation: "Do I turn off only that one, or do I turn off the whole box?",
          pronunciation: "a-PA-goh SOH-loh EH-seh, oh a-PA-goh TO-da la KA-ha",
          literal: "I-turn-off only that one, or I-turn-off all the box?",
          why: "“Apago” is regular in the present. The spelling issue arrives in the preterite: “apagué,” with gu to keep the hard g sound before e."
        },
        {
          speaker: "Óscar",
          target: "Sólo ese. Si apagas todo, se apaga también el router y quedamos sin señal.",
          translation: "Only that one. If you turn everything off, the router turns off too and we end up without signal.",
          pronunciation: "SOH-loh EH-seh. see a-PA-gas TO-doh, seh a-PA-ga tam-BYEN el ROO-ter ee keh-DA-mos seen seh-NYAL",
          literal: "Only that. If you turn-off everything, itself turns-off also the router and we remain without signal.",
          why: "Spanish can make the thing the subject: “se apaga el router.” The device goes off, without anyone needing to name the person who caused it."
        },
        {
          speaker: "Mara",
          target: "Listo, ya lo apagué. ¿Así se escribe, con u antes de la e?",
          translation: "Done, I turned it off. Is that written with u before the e?",
          pronunciation: "LEES-toh, ya lo a-pa-GEH. a-SEE seh es-KREE-beh, kon oo AN-tes deh la eh",
          literal: "Ready, already it I-turned-off. Like-that itself writes, with u before the e?",
          why: "Yes: “apagué.” The u is spelling, not a new syllable. It protects the g sound before e."
        },
        {
          speaker: "Óscar",
          target: "Exacto. Y si tu celular se apagó, no digas que lo apagaste tú.",
          translation: "Exactly. And if your phone died, don't say that you turned it off yourself.",
          pronunciation: "eg-SAK-toh. ee see too seh-loo-LAR seh a-pa-GOH, no DEE-gas keh lo a-pa-GAS-teh too",
          literal: "Exactly. And if your cellphone itself turned-off, not say that it you-turned-off you.",
          why: "“Se apagó” can mean it died or went off by itself. “Lo apagué” means you turned it off. That pronoun contrast is small and very useful."
        },
        {
          speaker: "Mara",
          target: "Mejor espero; con este calor uno se apaga antes que la nevera.",
          translation: "Better I'll wait; in this heat a person switches off before the fridge does.",
          pronunciation: "meh-HOR es-PEH-roh; kon ES-teh ka-LOR OO-noh seh a-PA-ga AN-tes keh la neh-BEH-ra",
          literal: "Better I-wait; with this heat one itself turns-off before than the fridge.",
          why: "The metaphor is normal: a person “se apaga” when they fade, lose energy or mentally switch off. It is not repair language; it is body-and-device language crossing over."
        }
      ],
      vocabulary: [
        {
          term: "apagar",
          explanation:
            "To turn off, switch off, put out or shut down a light, device, flame or system.",
          literal: "to turn off / extinguish",
          useWhen:
            "Talking about lights, fans, appliances, phones, stoves, fires, screens and breakers.",
          avoidWhen:
            "You mean a device is broken. “Apagado” means off; it does not by itself mean damaged.",
          register: "neutral",
          region: "General Spanish and fully everyday in Colombia.",
          related: ["prender", "encender", "apagado", "se apagó"],
          example: {
            target: "Apaga el breaker de la cocina.",
            translation: "Turn off the kitchen breaker."
          }
        },
        {
          term: "apagué",
          explanation:
            "The preterite yo form: I turned it off. The spelling changes to gu before e to keep the hard g sound.",
          literal: "I turned off",
          useWhen:
            "Reporting a completed action: you turned off the breaker, stove, light or phone.",
          avoidWhen:
            "Writing “apagé.” Without the u, the sound would change and the spelling is wrong.",
          register: "neutral",
          region: "General Spanish; the spelling rule is standard.",
          related: ["apago", "apagaste", "apagó", "apagar"],
          example: {
            target: "Ya lo apagué.",
            translation: "I already turned it off."
          }
        },
        {
          term: "se apagó",
          explanation:
            "It turned off, went out or died by itself. The thing is the subject, not necessarily your action.",
          literal: "it turned itself off",
          useWhen:
            "A phone battery dies, a screen goes dark, a candle goes out or a device shuts down unexpectedly.",
          avoidWhen:
            "You deliberately turned it off. Then say “lo apagué” or name the object.",
          register: "neutral conversational",
          region: "General Spanish; extremely common for phones and lights in Colombia.",
          related: ["se murió", "se descargó", "se fue", "lo apagué"],
          example: {
            target: "Mi celular se apagó.",
            translation: "My phone died."
          }
        },
        {
          term: "breaker",
          explanation:
            "The circuit breaker. Colombians often say “breaker” in practical household talk, alongside more formal terms.",
          literal: "breaker",
          useWhen:
            "Talking about the switch in the electrical panel that cuts power to a circuit.",
          avoidWhen:
            "Assuming it is a decorative English word. In many homes, this is simply what people call it.",
          register: "neutral practical",
          region: "Very common in Colombian household Spanish; “disyuntor” or “interruptor automático” is more technical.",
          related: ["caja de breakers", "taco", "circuito", "tablero"],
          example: {
            target: "Apaga el breaker antes de tocar la nevera.",
            translation: "Turn off the breaker before touching the fridge."
          }
        },
        {
          term: "la caja",
          explanation:
            "In this context, the breaker box or electrical panel, understood from the situation.",
          literal: "the box",
          useWhen:
            "People are already talking about breakers, circuits or electricity and the reference is clear.",
          avoidWhen:
            "Starting a conversation cold. Then specify “caja de breakers” or “tablero eléctrico.”",
          register: "neutral conversational",
          region: "General Colombian shorthand when the object is visible or already mentioned.",
          related: ["caja de breakers", "tablero", "panel", "circuito"],
          example: {
            target: "¿Apago toda la caja?",
            translation: "Do I turn off the whole box?"
          }
        },
        {
          term: "quedar sin señal",
          explanation:
            "To be left without signal or connection. It is what happens when the router or phone network drops out.",
          literal: "to remain without signal",
          useWhen:
            "A phone, router, television or radio loses connection because of power, location or service.",
          avoidWhen:
            "Blaming the device mechanically. It describes the result, not the repair.",
          register: "neutral conversational",
          region: "General Colombian; common with phones and internet.",
          related: ["señal", "datos", "wifi", "conexión"],
          example: {
            target: "Si apagas todo, quedamos sin señal.",
            translation: "If you turn everything off, we end up without signal."
          }
        },
        {
          term: "apagarse",
          explanation:
            "To go off, die, fade or switch off by itself; also used metaphorically for people losing energy.",
          literal: "to turn oneself off",
          useWhen:
            "Phones dying, lights going out, screens going dark, or a tired person fading mentally.",
          avoidWhen:
            "You need to say who deliberately turned something off. Then use plain “apagar” with an object.",
          register: "neutral conversational",
          region: "General Spanish; the metaphor is natural in Colombian speech.",
          related: ["agotarse", "desconectarse", "se apagó", "estar fundido"],
          example: {
            target: "Con este calor uno se apaga.",
            translation: "In this heat a person switches off."
          }
        }
      ],
      note:
        "Apagar looks easy until you need the small distinctions. “Apaga el breaker” is an instruction. “Lo apagué” reports your action, and the spelling protects the hard g before e. “Se apagó” says the phone, light or device went off by itself, which is why it can mean a phone died. From there the metaphor is close: people also “se apagan” when heat, boredom or exhaustion drains them.",
      culture: [
        {
          label: "A breaker is everyday vocabulary",
          body:
            "Many Colombians say “breaker” without treating it as foreign, especially in practical home talk. More technical terms exist, but the neighbour helping you by the fridge may point at the panel and say “apaga ese breaker.” Understanding that word is more useful than insisting on a purer label while the appliance hums."
        },
        {
          label: "Safety comes before curiosity",
          body:
            "The conversation avoids repair because the useful first action is power control. Turning off the relevant breaker before touching a noisy appliance is ordinary caution, not panic. Colombian household help often begins this way: one person gives short instructions, the other confirms exactly which switch is safe to move."
        },
        {
          label: "Phones die in Spanish too",
          body:
            "When a Colombian says “se me apagó el celular,” they usually mean the battery died or the phone shut down, not that they chose to turn it off. The little “se me” makes the shutdown feel like something that happened to the speaker. It is the same practical grammar that turns a device failure into a small personal inconvenience."
        }
      ],
      pitfalls: [
        {
          mistake: "Writing “apagé” for “I turned it off”",
          whyItFails:
            "The preterite yo form needs gu before e: “apagué.” Without the u, the spelling no longer preserves the hard g sound.",
          sayInstead: "Ya lo apagué."
        },
        {
          mistake: "Using “lo apagué” when the phone died by itself",
          whyItFails:
            "“Lo apagué” says you turned it off. If the battery died or it shut down unexpectedly, Spanish makes the phone the subject.",
          sayInstead: "Se me apagó el celular."
        },
        {
          mistake: "Assuming “apagado” means damaged",
          whyItFails:
            "Off and broken are different states. A device can be apagado because someone turned it off and still work perfectly.",
          sayInstead: "Está apagado, no necesariamente dañado."
        }
      ],
      variations: [
        {
          form: "Apaga el breaker de la cocina.",
          register: "neutral practical",
          region: "Colombia",
          whenToUse: "A direct tú instruction before touching an appliance or circuit."
        },
        {
          form: "Ya lo apagué.",
          register: "neutral conversational",
          region: "General Spanish",
          whenToUse: "Reporting that you deliberately turned something off."
        },
        {
          form: "Se me apagó el celular.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "Your phone died or shut down without your choosing it."
        },
        {
          form: "Con este calor uno se apaga.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Joking that heat or exhaustion makes a person mentally switch off."
        }
      ],
      prompt: "Mara says “ya lo apagué.” What should you notice?",
      choices: [
        "It reports a deliberate action, and the preterite keeps the hard g with “gu.”",
        "It means the phone died by itself and nobody touched the breaker box.",
        "It is the formal future tense used only by electricians in written reports."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which sentence says the phone died without Mara choosing it?",
          choices: [
            "Lo apagué el celular.",
            "Se me apagó el celular.",
            "Apagué al celular solo."
          ],
          answer: 1,
          tests: "“se me apagó” for a phone dying or shutting down by itself"
        },
        {
          prompt: "Which spelling is correct for “I turned it off”?",
          choices: [
            "Ya lo apagé.",
            "Ya lo apagí.",
            "Ya lo apagué."
          ],
          answer: 2,
          tests: "g-to-gu spelling before e in “apagué”"
        },
        {
          prompt: "Which line gives the safety instruction directly?",
          choices: [
            "Apaga el breaker de la cocina.",
            "Se apagó solo el vecino.",
            "La nevera apagó cansada."
          ],
          answer: 0,
          tests: "plain “apagar” with an object for a deliberate shutoff"
        }
      ]
    },
    en: {
      title: "Apagar el breaker antes de revisar la nevera",
      situation:
        "Usted está en una casa cerca del mar en Auckland, y una nevera vieja empezó a sonar raro después de otro parpadeo de electricidad. El vecino que sabe de instalaciones le pide apagar el breaker antes de mirar cualquier cosa, mientras su celular también se muere justo cuando iba a grabar el ruido.",
      setting: {
        who: "Oscar es el vecino al que todos llaman antes de llamar a un técnico. Mariana alquila la casa por un mes y sabe lo suficiente para tener cuidado, pero no para tocar un tablero eléctrico con confianza.",
        what: "Una conversación de seguridad sobre apagar un breaker y unos aparatos, más el uso cotidiano de “die” para un celular que se apaga sin permiso.",
        when: "Una tarde ventosa, con la nevera haciendo un ruido nuevo después de un parpadeo eléctrico.",
        where: "Auckland, Nueva Zelanda, en una casa alquilada cerca del mar, donde la sal, el viento y el cableado viejo están siempre al fondo.",
        why: "Apagar parece simple hasta que el inglés reparte la idea entre “turn off,” “shut off,” “go off” y “die,” según quién actúa y qué tipo de cosa se apaga."
      },
      address: {
        form: "mixed",
        who: "Oscar y Mariana usan nombres de pila y el mismo “you,” aunque él esté dando instrucciones serias.",
        why: "El inglés marca la urgencia con imperativos cortos y la cortesía con tono, no con otro pronombre. “Turn off the breaker” puede ser directo sin ser grosero.",
        ifYouSwitch:
          "No hay pronombre alternativo. Para hacerlo más suave, Oscar podría decir “Could you turn off”; para hacerlo urgente, deja sólo el imperativo."
      },
      dialogue: [
        {
          speaker: "Oscar",
          target: "Before you touch the fridge, turn off the kitchen breaker.",
          translation: "Antes de tocar la nevera, apaga el breaker de la cocina.",
          pronunciation: "bi-FOR yu toch da frij, tern of da KI-chen BREI-ker",
          literal: "Antes de que usted toque la nevera, gire apagado el breaker de la cocina.",
          why: "“Turn off” es la frase general para apagar algo deliberadamente. Con electricidad, la frase corta funciona como instrucción de seguridad."
        },
        {
          speaker: "Mariana",
          target: "Do I turn off just that one, or shut off the whole box?",
          translation: "¿Apago sólo ese, o apago toda la caja?",
          pronunciation: "du ai tern of yost dat uan, or shot of da jol boks",
          literal: "¿Hago yo girar apagado sólo ese, o cierro apagado toda la caja?",
          why: "“Shut off” suena muy natural para cortar el suministro de agua, gas o electricidad. No es otro tiempo verbal; es otro verbo compuesto útil."
        },
        {
          speaker: "Oscar",
          target: "Just that one. If you turn everything off, the router goes off too.",
          translation: "Sólo ese. Si apagas todo, el router también se apaga.",
          pronunciation: "yost dat uan. if yu tern EV-ri-zing of, da RU-ter gouz of tu",
          literal: "Sólo ese. Si usted gira todo apagado, el router va apagado también.",
          why: "“Go off” puede describir que un aparato se apaga o deja de estar encendido. La persona turns it off; the router goes off."
        },
        {
          speaker: "Mariana",
          target: "Done, I turned it off. Is that the breaker for the fridge?",
          translation: "Listo, ya lo apagué. ¿Ese es el breaker de la nevera?",
          pronunciation: "don, ai ternd it of. is dat da BREI-ker for da frij",
          literal: "Hecho, yo lo giré apagado. ¿Es ese el breaker para la nevera?",
          why: "Otra vez, el pronombre va en medio: “turned it off.” Si dice “turned off it,” el orden suena claramente traducido."
        },
        {
          speaker: "Oscar",
          target: "Exactly. And if your phone died, don't say you turned it off.",
          translation: "Exacto. Y si su celular se apagó, no diga que usted lo apagó.",
          pronunciation: "eg-ZAKT-li. and if yor foun daid, dont sei yu ternd it of",
          literal: "Exactamente. Y si su teléfono murió, no diga que usted lo giró apagado.",
          why: "Para un celular sin batería, el inglés cotidiano dice “my phone died.” “I turned it off” culpa a la persona, no a la batería."
        },
        {
          speaker: "Mariana",
          target: "I'll wait, then. In this heat, I shut down before the fridge does.",
          translation: "Entonces espero. Con este calor, yo me apago antes que la nevera.",
          pronunciation: "ail weit, den. in dis jit, ai shot daun bi-FOR da frij doz",
          literal: "Esperaré, entonces. En este calor, yo cierro abajo antes de que la nevera lo haga.",
          why: "“Shut down” puede ser literal para máquinas y metafórico para personas que ya no dan más. Es una buena pareja para el español “apagarse.”"
        }
      ],
      vocabulary: [
        {
          term: "turn off",
          explanation:
            "La frase general para apagar algo deliberadamente: luz, celular, pantalla, ventilador, horno o breaker.",
          literal: "girar apagado",
          useWhen:
            "Una persona corta la energía, detiene una función o deja un aparato apagado.",
          avoidWhen:
            "El aparato se apagó solo. Ahí puede ser “go off,” “shut down” o, para un celular sin batería, “die.”",
          register: "neutral",
          region: "Inglés universal; es la opción segura para apagar aparatos.",
          related: ["switch off", "shut off", "go off", "turn on"],
          example: {
            target: "Turn off the kitchen breaker.",
            translation: "Apaga el breaker de la cocina."
          }
        },
        {
          term: "turned it off",
          explanation:
            "Lo apagué. El pronombre va entre “turned” y “off,” no después de la partícula.",
          literal: "lo giré apagado",
          useWhen:
            "Quiere dejar claro que usted hizo la acción: apagó el breaker, el horno o el celular.",
          avoidWhen:
            "El celular murió solo. “I turned it off” suena como decisión suya.",
          register: "neutral conversational",
          region: "Inglés universal.",
          related: ["turn it off", "switch it off", "shut it off", "turned off"],
          example: {
            target: "I turned it off already.",
            translation: "Ya lo apagué."
          }
        },
        {
          term: "my phone died",
          explanation:
            "Se me apagó el celular por falta de batería o porque dejó de funcionar de repente.",
          literal: "mi teléfono murió",
          useWhen:
            "El celular se queda sin batería, se apaga solo o deja de responder.",
          avoidWhen:
            "Usted lo apagó a propósito. Entonces diga “I turned my phone off.”",
          register: "neutral conversational",
          region: "Inglés universal; muy común para batería agotada.",
          related: ["dead battery", "ran out of battery", "shut down", "powered off"],
          example: {
            target: "My phone died before I could record it.",
            translation: "Se me apagó el celular antes de poder grabarlo."
          }
        },
        {
          term: "breaker",
          explanation:
            "El breaker o interruptor automático que corta la energía de un circuito.",
          literal: "rompedor",
          useWhen:
            "Habla del tablero eléctrico y de qué circuito debe apagarse antes de tocar un aparato.",
          avoidWhen:
            "Confundirlo con un switch normal de pared. El breaker protege un circuito.",
          register: "neutral practical",
          region: "Inglés universal; “circuit breaker” es la forma completa.",
          related: ["circuit breaker", "breaker box", "fuse", "panel"],
          example: {
            target: "Is that the breaker for the fridge?",
            translation: "¿Ese es el breaker de la nevera?"
          }
        },
        {
          term: "breaker box",
          explanation:
            "La caja o tablero donde están los breakers de la casa.",
          literal: "caja de breakers",
          useWhen:
            "Necesita referirse a todo el panel, no a un solo breaker.",
          avoidWhen:
            "Quiere nombrar un circuito específico. Entonces diga “the kitchen breaker” o “the fridge breaker.”",
          register: "neutral practical",
          region: "Inglés universal; también se oye “electrical panel.”",
          related: ["electrical panel", "circuit", "fuse box", "main switch"],
          example: {
            target: "Don't shut off the whole breaker box.",
            translation: "No apague toda la caja de breakers."
          }
        },
        {
          term: "signal",
          explanation:
            "Señal o conexión, especialmente de teléfono, wifi, radio o televisión.",
          literal: "señal",
          useWhen:
            "Un aparato se queda sin conexión por ubicación, servicio o electricidad.",
          avoidWhen:
            "Quiere hablar del aparato roto. Perder signal describe conexión, no reparación.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["connection", "wifi", "data", "reception"],
          example: {
            target: "We'll lose signal if the router goes off.",
            translation: "Quedamos sin señal si se apaga el router."
          }
        },
        {
          term: "shut down",
          explanation:
            "Apagarse o cerrarse por completo; también se usa para personas que se bloquean o se quedan sin energía.",
          literal: "cerrar abajo",
          useWhen:
            "Computadores, sistemas, teléfonos o personas dejan de responder o necesitan parar.",
          avoidWhen:
            "Sólo quiere apagar una luz. Para eso, “turn off the light” es más natural.",
          register: "neutral conversational",
          region: "Inglés universal; común con tecnología y cansancio.",
          related: ["power down", "turn off", "freeze", "switch off"],
          example: {
            target: "In this heat, I shut down.",
            translation: "Con este calor, me apago."
          }
        }
      ],
      note:
        "El inglés obliga a mirar la causa. Si usted apaga algo, “you turn it off.” Si corta un suministro, “you shut it off.” Si el aparato deja de estar encendido, “it goes off.” Si el celular se queda sin batería, “my phone died.” Y si una persona ya no puede pensar, “I shut down.” Todas esas frases pueden tocar el territorio de “apagar,” pero no son intercambiables.",
      culture: [
        {
          label: "Los breakers también son vocabulario de viaje",
          body:
            "Alquilar una casa o quedarse en una residencia obliga a entender palabras eléctricas básicas. No hace falta ser técnico para saber qué es un breaker, cuál corresponde a la cocina y por qué se apaga antes de tocar un aparato raro. La seguridad doméstica se comunica con frases cortas, no con explicaciones largas."
        },
        {
          label: "El celular “dies” sin drama",
          body:
            "En inglés, “my phone died” es completamente normal y no suena trágico. Casi siempre significa que se quedó sin batería. Un hispanohablante que diga “I turned off my phone” cambia la historia: ahora parece que lo hizo a propósito. Esa diferencia importa cuando está explicando por qué no contestó."
        },
        {
          label: "Apagarse también puede ser humano",
          body:
            "“Shut down” sirve para tecnología, pero también para una persona que se bloquea, se cansa o deja de participar. No siempre es chiste: puede describir estrés real. En una escena de calor y nevera dañada, el uso es ligero; en una conversación emocional, puede ser mucho más serio."
        }
      ],
      pitfalls: [
        {
          mistake: "“I turned off it.”",
          whyItFails:
            "Con un pronombre como “it,” el objeto va en medio del verbo compuesto. Después de “off” suena calcado del español.",
          sayInstead: "I turned it off."
        },
        {
          mistake: "“My phone turned off me.”",
          whyItFails:
            "No se traduce “se me apagó” palabra por palabra. Para batería agotada, la frase normal es “my phone died.”",
          sayInstead: "My phone died."
        },
        {
          mistake: "“I shut down the light.”",
          whyItFails:
            "“Shut down” suena a sistema, máquina o persona que deja de operar. Para una luz común, use “turn off.”",
          sayInstead: "I turned off the light."
        }
      ],
      variations: [
        {
          form: "Turn off the kitchen breaker.",
          register: "neutral practical",
          region: "Inglés universal",
          whenToUse: "Dar una instrucción directa para cortar la energía de un circuito."
        },
        {
          form: "I turned it off already.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Informar que usted apagó algo deliberadamente."
        },
        {
          form: "My phone died.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "El celular se quedó sin batería o se apagó solo."
        },
        {
          form: "In this heat, I shut down.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Decir que el calor o el cansancio lo apaga mentalmente."
        }
      ],
      prompt: "Mariana says “I turned it off.” What should you notice?",
      choices: [
        "It reports her deliberate action, with the pronoun correctly placed between “turned” and “off.”",
        "It means her phone died by itself and nobody touched the breaker box at all.",
        "It is the formal future tense used only by electricians in written reports."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase dice que el celular se apagó por batería?",
          choices: [
            "I turned it off.",
            "My phone died.",
            "I shut it off."
          ],
          answer: 1,
          tests: "“my phone died” para el celular que se queda sin batería"
        },
        {
          prompt: "¿Cuál frase pone bien el pronombre con “turn off”?",
          choices: [
            "I turned off it already.",
            "I turned already it off.",
            "I turned it off already."
          ],
          answer: 2,
          tests: "el pronombre entre el verbo y la partícula"
        },
        {
          prompt: "¿Cuál instrucción corta la energía del circuito?",
          choices: [
            "Turn off the kitchen breaker.",
            "Die the kitchen phone.",
            "Go off the fridge noise."
          ],
          answer: 0,
          tests: "“turn off” para apagar algo deliberadamente"
        }
      ]
    }
  },
  {
    id: "funcionar-the-router-in-san-andres",
    level: "Extending · Devices and how things work",
    skills: ["speaking", "listening", "context"],
    domain: "everyday life",
    register: "neutral practical",
    pathways: ["foundation", "year-12"],
    verb: "funcionar",
    review: "pending",
    es: {
      title: "Preguntar cómo funciona el medidor del hostal",
      situation:
        "Estás en un hostal pequeño en San Andrés y el router se cae cada vez que el medidor prepago queda sin saldo. En recepción, el encargado te explica cómo funciona el sistema, pero también te corrige con cariño: cuando algo no trabaja, en Colombia vas a oír mucho más “no sirve” o “está dañado” que “no funciona”.",
      setting: {
        who: "Kevin runs reception at a small hostel and knows which devices fail because of the meter, the weather or the router itself. Priya needs internet for a call and wants to understand the system without turning the conversation into a repair request.",
        what: "A front-desk conversation about whether the router works and how the prepaid meter operates.",
        when: "Midday, just before Priya's video call, with guests gathering near the lobby because the wifi has dropped.",
        where: "San Andrés, on the island, in a hostel where electricity credit, salt air and overloaded routers are part of daily logistics.",
        why: "“Funcionar” is correct, but Colombian ears often expect “no sirve” for a thing that does not work. The other key use, “¿cómo funciona?”, asks how a system is operated."
      },
      address: {
        form: "usted",
        who: "Kevin uses usted with Priya because he is working at reception and she is a guest. Priya keeps the same form while asking follow-up questions.",
        why: "The exchange is friendly but service-oriented. Usted makes the explanations feel professional, especially when the internet problem affects several guests.",
        ifYouSwitch:
          "Tú could appear after a few days in the hostel, but starting with usted is safer. Vos would not match the setting."
      },
      dialogue: [
        {
          speaker: "Priya",
          target: "Kevin, el wifi no funciona y tengo una reunión en diez minutos.",
          translation: "Kevin, the wifi isn't working and I have a meeting in ten minutes.",
          pronunciation: "KEH-bin, el WAI-fai no foon-syo-NA ee TYEN-goh OO-na reh-oo-NYON en dyes mee-NOO-tos",
          literal: "Kevin, the wifi not works and I-have a meeting in ten minutes.",
          why: "“No funciona” is correct and clear. It is a useful neutral sentence, especially when you are not sure whether the device is broken, off or out of credit."
        },
        {
          speaker: "Kevin",
          target: "Sí, señora. En Colombia muchos dirían “no sirve”, pero le entiendo perfecto.",
          translation: "Yes, ma'am. In Colombia many people would say “it doesn't work,” but I understand you perfectly.",
          pronunciation: "see, seh-NYOH-ra. en koh-LOM-bya MOO-chos dee-ree-AN no SEER-beh, PEH-roh leh en-TYEN-doh per-FEK-toh",
          literal: "Yes, madam. In Colombia many would-say not serves, but you I-understand perfect.",
          why: "This is the honest register note: “no funciona” works, but at counters and with technicians you will constantly hear “no sirve” for “it doesn't work.”"
        },
        {
          speaker: "Priya",
          target: "¿Y está dañado, o sólo falta saldo en el medidor?",
          translation: "And is it damaged, or is there just no credit on the meter?",
          pronunciation: "ee es-TA da-NYA-doh, oh SOH-loh FAL-ta SAL-doh en el meh-dee-DOR",
          literal: "And is damaged, or only lacks credit in the meter?",
          why: "“Está dañado” is stronger than “no sirve”: it suggests damage or a fault. Priya is asking whether the problem is the router or the prepaid system."
        },
        {
          speaker: "Kevin",
          target: "El router sirve; lo que no funciona es el medidor cuando se queda sin saldo.",
          translation: "The router works; what doesn't work is the meter when it runs out of credit.",
          pronunciation: "el ROO-ter SEER-beh; lo keh no foon-SYOH-na es el meh-dee-DOR KWAN-doh seh KEH-da seen SAL-doh",
          literal: "The router serves; what not works is the meter when itself remains without credit.",
          why: "The contrast matters. “Sirve” says the router is usable. “No funciona” points to the system failing under a condition."
        },
        {
          speaker: "Priya",
          target: "Entonces explíqueme cómo funciona para no tumbar el internet otra vez.",
          translation: "Then explain how it works so I don't knock the internet out again.",
          pronunciation: "en-TON-ses eks-PLEE-keh-meh KO-moh foon-SYOH-na PA-ra no toom-BAR el een-ter-NET OH-tra bes",
          literal: "Then explain-to-me how works so not knock-down the internet another time.",
          why: "“¿Cómo funciona?” is not a complaint. It asks how the system operates: what steps, what logic, what sequence."
        },
        {
          speaker: "Kevin",
          target: "Funciona con una recarga; si el saldo baja a cero, el router sigue prendido pero no da señal.",
          translation: "It works with a top-up; if the credit drops to zero, the router stays on but gives no signal.",
          pronunciation: "foon-SYOH-na kon OO-na reh-KAR-ga; see el SAL-doh BA-ha a SEH-roh, el ROO-ter SEE-geh pren-DEE-doh PEH-roh no da seh-NYAL",
          literal: "Works with a recharge; if the credit goes-down to zero, the router continues on but not gives signal.",
          why: "“Funciona con” explains the mechanism. The device can be on and still not provide service, which is why “working” is not always the same as “powered.”"
        }
      ],
      vocabulary: [
        {
          term: "funcionar",
          explanation:
            "To work or function: to operate as expected, mechanically, digitally or as a system.",
          literal: "to function",
          useWhen:
            "You need a neutral verb for a device, plan, system, rule or method that works or fails.",
          avoidWhen:
            "Assuming it is the most Colombian everyday way to complain. In speech, “no sirve” is often what people actually say about things.",
          register: "neutral",
          region: "General Spanish; correct in Colombia, but not always the most colloquial complaint.",
          related: ["servir", "estar dañado", "operar", "dar señal"],
          example: {
            target: "El wifi no funciona.",
            translation: "The wifi isn't working."
          }
        },
        {
          term: "no sirve",
          explanation:
            "The everyday Colombian way to say a thing does not work, is useless for the purpose or is not doing its job.",
          literal: "it doesn't serve",
          useWhen:
            "At a counter, with a technician, in a home or with friends when an object or service is failing.",
          avoidWhen:
            "You need to sound formal or diagnose precisely. “No funciona” is more neutral, and “está dañado” points toward damage.",
          register: "everyday conversational",
          region: "Extremely common in Colombian Spanish for devices, cards, keys, chargers and services.",
          related: ["no funciona", "no da", "está dañado", "fallar"],
          example: {
            target: "El cargador no sirve.",
            translation: "The charger doesn't work."
          }
        },
        {
          term: "está dañado",
          explanation:
            "It is damaged or broken. Stronger than “no sirve,” because it suggests a fault, not just a failed moment.",
          literal: "it is damaged",
          useWhen:
            "You believe the device, card, meter or appliance has an actual problem.",
          avoidWhen:
            "You only know it is not working right now. It may be off, unpaid, disconnected or waiting to restart.",
          register: "neutral conversational",
          region: "Very common in Colombia for broken objects and systems.",
          related: ["daño", "averiado", "fallando", "no sirve"],
          example: {
            target: "Creo que el medidor está dañado.",
            translation: "I think the meter is damaged."
          }
        },
        {
          term: "¿cómo funciona?",
          explanation:
            "How does it work? This asks for the operating logic or steps, not whether the thing is currently broken.",
          literal: "how does it function?",
          useWhen:
            "Learning a meter, machine, app, rule, payment system or appliance you do not know yet.",
          avoidWhen:
            "You only want to report a failure. Then say “no funciona,” “no sirve” or name the symptom.",
          register: "neutral",
          region: "General Spanish; very useful with systems that are unfamiliar to visitors.",
          related: ["cómo se maneja", "qué toca hacer", "instrucciones", "sistema"],
          example: {
            target: "Explíqueme cómo funciona el medidor.",
            translation: "Explain how the meter works."
          }
        },
        {
          term: "medidor",
          explanation:
            "A meter: the device that measures electricity, water, gas or another service.",
          literal: "measurer",
          useWhen:
            "Talking about consumption, prepaid credit, readings or the device that controls a service.",
          avoidWhen:
            "Calling the whole bill a medidor. The meter measures; the bill charges.",
          register: "neutral",
          region: "General Spanish; common in Colombian utility talk.",
          related: ["contador", "lectura", "saldo", "servicio"],
          example: {
            target: "El medidor funciona con una recarga.",
            translation: "The meter works with a top-up."
          }
        },
        {
          term: "saldo",
          explanation:
            "Credit or balance available on a phone, card, account or prepaid service.",
          literal: "balance",
          useWhen:
            "Checking whether a prepaid meter, phone plan, transit card or account has enough credit.",
          avoidWhen:
            "Using it as if it always meant cash in hand. It is the balance inside a system.",
          register: "neutral",
          region: "General Spanish; very common in Colombia for prepaid services.",
          related: ["recarga", "crédito", "plan prepago", "balance"],
          example: {
            target: "El medidor se queda sin saldo.",
            translation: "The meter runs out of credit."
          }
        },
        {
          term: "dar señal",
          explanation:
            "To provide signal or connection. A router may be on but still not “dar señal.”",
          literal: "to give signal",
          useWhen:
            "Talking about phones, wifi, routers, radios, televisions or any connection that appears or disappears.",
          avoidWhen:
            "Assuming the device is off. It can be powered and still fail to give signal.",
          register: "neutral conversational",
          region: "General Colombian; very common for internet and phones.",
          related: ["tener señal", "quedar sin señal", "conectarse", "wifi"],
          example: {
            target: "El router prende, pero no da señal.",
            translation: "The router turns on, but gives no signal."
          }
        }
      ],
      note:
        "“Funcionar” is regular, so the grammar is not the hard part. The real lesson is choosing the right complaint or question. “No funciona” is correct and neutral. “No sirve” is the Colombian phrase you will hear when a card, charger, router or key fails. “Está dañado” suggests damage. And “¿cómo funciona?” is not a complaint at all; it asks how a system is operated.",
      culture: [
        {
          label: "“No sirve” is not rude by itself",
          body:
            "At a Colombian counter, saying “esta tarjeta no sirve” can simply mean the card is not working for the transaction. It is direct, but not automatically aggressive. Tone matters, of course, but the phrase itself is ordinary. A learner waiting for “no funciona” may miss the most common version of the complaint."
        },
        {
          label: "A device can be on and still not work",
          body:
            "Power is only one layer. A router can be prendido and still not give signal; a meter can have a display and still block service because there is no balance. Colombian device talk often separates those layers quickly: prende, no da señal, no sirve, está dañado, falta saldo."
        },
        {
          label: "Island logistics make systems visible",
          body:
            "In places where services depend on weather, supply, salt air, cables and prepaid systems, the logic behind a device becomes part of daily conversation. Asking “¿cómo funciona?” is practical, not childish. It tells the person at the desk you want the rule of the system, not just a one-time rescue."
        }
      ],
      pitfalls: [
        {
          mistake: "Assuming “no funciona” is the only way Colombians say “it doesn't work”",
          whyItFails:
            "It is correct, but “no sirve” is often the phrase you will actually hear for a failing object or service.",
          sayInstead: "El cargador no sirve."
        },
        {
          mistake: "Using “está dañado” before you know there is damage",
          whyItFails:
            "That phrase suggests a real fault. If the meter only needs credit or the router needs time, “dañado” overstates what you know.",
          sayInstead: "No funciona ahora."
        },
        {
          mistake: "Treating “¿cómo funciona?” as a complaint",
          whyItFails:
            "It asks for the operating logic or steps. If you say it at the desk, you are asking to understand the system, not saying it is broken.",
          sayInstead: "¿Cómo funciona el medidor?"
        }
      ],
      variations: [
        {
          form: "El wifi no funciona.",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "A clear, correct report that the service is not working."
        },
        {
          form: "El cargador no sirve.",
          register: "everyday conversational",
          region: "Colombia",
          whenToUse: "The ordinary Colombian complaint about a thing that fails."
        },
        {
          form: "El medidor está dañado.",
          register: "neutral conversational",
          region: "General Colombian",
          whenToUse: "You believe there is actual damage or a fault."
        },
        {
          form: "¿Cómo funciona este sistema?",
          register: "neutral",
          region: "General Spanish",
          whenToUse: "You want the steps or logic, not just a yes-or-no diagnosis."
        }
      ],
      prompt: "Kevin says many Colombians would say “no sirve.” What is the lesson?",
      choices: [
        "“No funciona” is correct, but “no sirve” is the common Colombian complaint for things.",
        "“No sirve” is too rude to use at counters and should be avoided with technicians.",
        "“Funcionar” only describes people at work, never routers, cards or meters."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Which line sounds like the everyday Colombian complaint about a bad charger?",
          choices: [
            "El cargador no sirve.",
            "El cargador no laboraliza.",
            "El cargador no opera humano."
          ],
          answer: 0,
          tests: "“no sirve” as the common Colombian way to say a thing does not work"
        },
        {
          prompt: "Which question asks for the steps or operating logic?",
          choices: [
            "¿Está dañado el sistema?",
            "¿Cómo funciona este sistema?",
            "¿No sirve este sistema?"
          ],
          answer: 1,
          tests: "“¿cómo funciona?” for how something is operated"
        },
        {
          prompt: "Which sentence avoids overclaiming damage?",
          choices: [
            "Está destruido desde siempre.",
            "El aparato murió completo.",
            "No funciona ahora."
          ],
          answer: 2,
          tests: "neutral “no funciona” before claiming “está dañado”"
        }
      ]
    },
    en: {
      title: "Preguntar cómo funciona el medidor del hostal",
      situation:
        "Usted está en un hostal pequeño en Malta y el router se cae cada vez que el medidor prepago queda sin saldo. En recepción, el encargado le explica cómo funciona el sistema, pero también le muestra que “work” sirve tanto para decir que algo funciona como para preguntar cómo se opera.",
      setting: {
        who: "Kyle atiende la recepción de un hostal pequeño y sabe qué fallas vienen del medidor, del clima o del router. Paola necesita internet para una llamada y quiere entender el sistema sin convertir la charla en una solicitud de reparación.",
        what: "Una conversación de recepción sobre si el router funciona y cómo opera el medidor prepago.",
        when: "Mediodía, justo antes de la videollamada de Paola, con varios huéspedes acercándose al lobby porque se cayó el wifi.",
        where: "Malta, en un hostal de isla donde el crédito eléctrico, el aire salado y los routers sobrecargados hacen parte de la logística diaria.",
        why: "“Work” parece simple, pero cubre dos preguntas distintas: si algo funciona y cómo funciona. Además compite con “broken,” “out of order” y “not working.”"
      },
      address: {
        form: "mixed",
        who: "Kyle y Paola usan nombres de pila y el mismo “you,” aunque él esté trabajando en recepción.",
        why: "El inglés no cambia de pronombre en el mostrador. La cortesía está en “could you,” “please,” y en formular la queja sin acusar a la persona.",
        ifYouSwitch:
          "No hay un usted distinto. Paola puede suavizar con “Could you explain,” pero no puede cambiar el pronombre para marcar respeto."
      },
      dialogue: [
        {
          speaker: "Paola",
          target: "Kyle, the wifi isn't working and I have a meeting in ten minutes.",
          translation: "Kyle, el wifi no funciona y tengo una reunión en diez minutos.",
          pronunciation: "kail, da WAI-fai IZ-ent WER-king and ai jav a MI-ting in ten MI-nits",
          literal: "Kyle, el wifi no está trabajando y tengo una reunión en diez minutos.",
          why: "“Isn't working” es la queja neutral para un servicio o aparato que falla. No implica todavía que esté dañado para siempre."
        },
        {
          speaker: "Kyle",
          target: "I understand. You can also say it's not working; both are fine.",
          translation: "Entiendo. También puede decir que no está funcionando; ambas sirven.",
          pronunciation: "ai an-der-STAND. yu kan OL-so sei its not WER-king; both ar fain",
          literal: "Entiendo. Usted también puede decir eso no está trabajando; ambas están bien.",
          why: "“It isn't working” y “it's not working” dicen lo mismo. La segunda suena un poco más explícita, pero ambas son naturales."
        },
        {
          speaker: "Paola",
          target: "Is it broken, or is the meter just out of credit?",
          translation: "¿Está dañado, o el medidor sólo se quedó sin saldo?",
          pronunciation: "is it BRO-ken, or is da MI-ter yost aut ov CRE-dit",
          literal: "¿Está roto, o el medidor sólo está fuera de crédito?",
          why: "“Broken” es más fuerte que “not working.” Paola pregunta si hay daño real o sólo una condición del sistema."
        },
        {
          speaker: "Kyle",
          target: "The router works; the meter stops working when it runs out of credit.",
          translation: "El router sirve; el medidor deja de funcionar cuando se queda sin saldo.",
          pronunciation: "da RU-ter werks; da MI-ter stops WER-king uen it ronz aut ov CRE-dit",
          literal: "El router trabaja; el medidor para de trabajar cuando corre fuera de crédito.",
          why: "“Works” afirma que el router sirve. “Stops working” describe el momento en que el medidor deja de operar por falta de saldo."
        },
        {
          speaker: "Paola",
          target: "Then could you explain how it works, so I don't knock the internet out again?",
          translation: "Entonces, ¿me explica cómo funciona para no tumbar el internet otra vez?",
          pronunciation: "den kud yu eks-PLEIN jau it werks, so ai dont nok da IN-ter-net aut a-GEN",
          literal: "Entonces podría usted explicar cómo eso trabaja, para que yo no golpee el internet fuera otra vez?",
          why: "“How it works” no es queja. Pide la lógica o los pasos del sistema: qué pasa primero, qué depende de qué, y qué debe mirar el huésped."
        },
        {
          speaker: "Kyle",
          target: "It works with a top-up; if the balance hits zero, the router stays on but gives no signal.",
          translation: "Funciona con una recarga; si el saldo llega a cero, el router sigue prendido pero no da señal.",
          pronunciation: "it werks with a TOP-op; if da BA-lans jits ZI-ro, da RU-ter steiz on bot givz no SIG-nal",
          literal: "Eso trabaja con una recarga; si el balance golpea cero, el router queda encendido pero da ninguna señal.",
          why: "“Works with” explica el mecanismo. “Stays on” separa energía de servicio: el router puede estar prendido y aun así no dar señal."
        }
      ],
      vocabulary: [
        {
          term: "work",
          explanation:
            "Funcionar o servir: operar como se espera, ya sea un aparato, un servicio, un plan o un sistema.",
          literal: "trabajar / funcionar",
          useWhen:
            "Para decir que algo sirve, no sirve, opera bien o falla en el momento.",
          avoidWhen:
            "Confundirlo con trabajo humano. En tecnología, “work” no siempre significa empleo; significa funcionar.",
          register: "neutral",
          region: "Inglés universal; la palabra cotidiana para aparatos y sistemas.",
          related: ["not working", "broken", "operate", "function"],
          example: {
            target: "The wifi isn't working.",
            translation: "El wifi no funciona."
          }
        },
        {
          term: "not working",
          explanation:
            "No funciona o no sirve en este momento. Es neutral y no diagnostica la causa.",
          literal: "no trabajando",
          useWhen:
            "Un router, cargador, tarjeta, aplicación o máquina falla y usted necesita reportarlo.",
          avoidWhen:
            "Ya sabe que el aparato está roto. Entonces “broken” o “out of order” puede ser más preciso.",
          register: "neutral conversational",
          region: "Inglés universal; muy útil en mostradores y llamadas de soporte.",
          related: ["isn't working", "doesn't work", "broken", "down"],
          example: {
            target: "The charger is not working.",
            translation: "El cargador no sirve."
          }
        },
        {
          term: "broken",
          explanation:
            "Dañado o roto. Más fuerte que “not working,” porque sugiere una falla real.",
          literal: "roto",
          useWhen:
            "Cree que el aparato, medidor, enchufe o sistema tiene daño.",
          avoidWhen:
            "Sólo sabe que algo no funciona ahora. Puede estar apagado, sin saldo o esperando reinicio.",
          register: "neutral conversational",
          region: "Inglés universal; para máquinas fuera de servicio también aparece “out of order.”",
          related: ["damaged", "out of order", "faulty", "not working"],
          example: {
            target: "Is the meter broken?",
            translation: "¿El medidor está dañado?"
          }
        },
        {
          term: "how it works",
          explanation:
            "Cómo funciona: la lógica, los pasos o la manera en que opera un sistema.",
          literal: "cómo trabaja eso",
          useWhen:
            "Quiere entender un medidor, aplicación, regla, máquina o método nuevo.",
          avoidWhen:
            "Sólo quiere reportar que algo falla. Para eso diga “it's not working.”",
          register: "neutral",
          region: "Inglés universal; clave para pedir explicación sin sonar acusatorio.",
          related: ["how to use it", "the steps", "the system", "instructions"],
          example: {
            target: "Could you explain how it works?",
            translation: "¿Me explica cómo funciona?"
          }
        },
        {
          term: "meter",
          explanation:
            "Medidor de electricidad, agua, gas u otro servicio.",
          literal: "medidor",
          useWhen:
            "Habla de consumo, crédito prepago, lecturas o el aparato que controla un servicio.",
          avoidWhen:
            "Confundirlo con la cuenta o factura. El meter mide; la bill cobra.",
          register: "neutral",
          region: "Inglés universal; “smart meter” es medidor inteligente.",
          related: ["smart meter", "reading", "utility", "bill"],
          example: {
            target: "The meter is out of credit.",
            translation: "El medidor se quedó sin saldo."
          }
        },
        {
          term: "credit / balance",
          explanation:
            "Saldo disponible en un sistema prepago, cuenta, tarjeta o servicio.",
          literal: "crédito / balance",
          useWhen:
            "Pregunta si un medidor, plan telefónico, tarjeta o cuenta tiene saldo suficiente.",
          avoidWhen:
            "Quiere decir dinero físico en el bolsillo. Aquí es saldo dentro de un sistema.",
          register: "neutral",
          region: "Inglés universal; “balance” muestra cuánto queda.",
          related: ["top-up", "prepaid", "account", "runs out"],
          example: {
            target: "The balance hits zero.",
            translation: "El saldo llega a cero."
          }
        },
        {
          term: "give no signal",
          explanation:
            "No dar señal o no producir conexión, aunque el aparato esté encendido.",
          literal: "dar ninguna señal",
          useWhen:
            "Un router, teléfono, radio o televisor está prendido pero no conecta.",
          avoidWhen:
            "Suponer que no tiene energía. Puede estar on y aun así give no signal.",
          register: "neutral practical",
          region: "Inglés universal; también se dice “there's no signal.”",
          related: ["no signal", "connection", "wifi", "reception"],
          example: {
            target: "The router gives no signal.",
            translation: "El router no da señal."
          }
        }
      ],
      note:
        "La gramática de “work” es sencilla; la precisión está en la causa. “It isn't working” reporta la falla sin culpar a nadie ni diagnosticar daño. “It's broken” ya sugiere que algo está dañado. “How it works” cambia de sentido: no pregunta si sirve, sino cómo opera. Y “works with a top-up” explica el mecanismo. Es una sola palabra, pero no una sola pregunta.",
      culture: [
        {
          label: "“Not working” es una queja segura",
          body:
            "En inglés, “the wifi isn't working” es una forma neutral de abrir una conversación de soporte. No acusa al recepcionista y no afirma que el aparato esté roto. Esa neutralidad es útil cuando usted necesita ayuda rápida y todavía no sabe si el problema es el router, el saldo, la contraseña o el servicio."
        },
        {
          label: "“Broken” sube el diagnóstico",
          body:
            "Decir “it's broken” puede ser correcto, pero afirma más. Si el medidor sólo se quedó sin crédito, no está necesariamente roto. Muchos problemas de viaje son de sistema, no de daño: falta saldo, falta señal, falta permiso, falta reiniciar. “Not working” deja espacio para descubrir cuál de esas capas falló."
        },
        {
          label: "Preguntar el funcionamiento no es confesar ignorancia",
          body:
            "“Could you explain how it works?” es una pregunta adulta y práctica. En hostales, lavanderías, estaciones y apartamentos, cada sistema tiene sus pasos. Preguntar por ellos antes de tocar botones evita tumbar servicios y evita sonar como si estuviera culpando a alguien por un sistema que usted todavía no conoce."
        }
      ],
      pitfalls: [
        {
          mistake: "“The wifi doesn't serve.”",
          whyItFails:
            "Es un calco de “no sirve.” En inglés, los aparatos y servicios “work” o “don't work”; “serve” no cumple esa función cotidiana.",
          sayInstead: "The wifi isn't working."
        },
        {
          mistake: "“How functions the meter?”",
          whyItFails:
            "La pregunta necesita el auxiliar o la estructura indirecta. En una petición amable, “could you explain how it works?” suena mucho más natural.",
          sayInstead: "Could you explain how it works?"
        },
        {
          mistake: "“The router is damaged” for every failure",
          whyItFails:
            "“Damaged” suena a daño físico o técnico. Si sólo sabe que no funciona ahora, use una frase neutral.",
          sayInstead: "The router isn't working."
        }
      ],
      variations: [
        {
          form: "The wifi isn't working.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Reportar una falla sin diagnosticar todavía la causa."
        },
        {
          form: "The charger is not working.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "La queja cotidiana equivalente a que algo no sirve."
        },
        {
          form: "The meter is broken.",
          register: "neutral conversational",
          region: "Inglés universal",
          whenToUse: "Usted cree que hay daño o falla real en el aparato."
        },
        {
          form: "Could you explain how it works?",
          register: "polite practical",
          region: "Inglés universal",
          whenToUse: "Pedir los pasos o la lógica de un sistema desconocido."
        }
      ],
      prompt: "Kyle contrasts “isn't working,” “broken,” and “how it works.” What is the useful distinction?",
      choices: [
        "One reports a failure, one suggests damage, and one asks for the operating logic.",
        "All three are equally strong complaints that accuse the person at the desk.",
        "Only “broken” can describe devices, while “work” belongs only to jobs."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "¿Cuál frase traduce mejor una queja neutral de que el cargador no sirve?",
          choices: [
            "The charger doesn't serve.",
            "The charger is not working.",
            "The charger refuses service."
          ],
          answer: 1,
          tests: "“not working” en vez de calcar “no sirve”"
        },
        {
          prompt: "¿Cuál pregunta pide la lógica del sistema?",
          choices: [
            "Is the system broken?",
            "Does the system fail?",
            "Could you explain how it works?"
          ],
          answer: 2,
          tests: "“how it works” como cómo funciona"
        },
        {
          prompt: "¿Cuál frase evita afirmar daño antes de saber la causa?",
          choices: [
            "The router isn't working.",
            "The router is destroyed forever.",
            "The router is physically damaged."
          ],
          answer: 0,
          tests: "“isn't working” como reporte neutral"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/40-extending-devices-and-how-things-work.js");
