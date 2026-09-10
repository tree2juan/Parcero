/*
 * Lesson block: foundation / opinion, appraisal and arrangement.
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
 * The three verbs here — parecer, quedar and creer — are the everyday tools of
 * opinion and arrangement: how something seems, how it fits or where it stands,
 * and what you believe. The two directions are mirrors: same number of dialogue
 * turns, vocabulary entries, culture notes, pitfalls, variations and practice
 * questions, and the same optional slots filled on the same rows. That is
 * enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "arranging-the-paint-job-with-the-maestro",
    level: "Starter · Home and neighborhood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "work-and-employment",
    register: "courteous",
    pathways: ["foundation"],
    verb: "parecer",
    review: "pending",
    es: {
      title: "Acordar la pintada con el maestro",
      situation:
        "Alex quiere que le repinten el apartamento y un pintor, don Fabio, vino a darle el presupuesto. Tienen que ponerse de acuerdo en el día, el color y el precio. Alex casi no conoce a don Fabio, así que todo se negocia con cuidado: cada propuesta se ofrece, no se impone.",
      setting: {
        who: "Don Fabio has spent thirty years painting apartments in Bogotá and works alone, with his own ladder. Alex is a foreigner who has never hired anyone for a job like this and isn't sure what it should cost.",
        what: "A short visit to settle the day, the color and the price for painting the living room and one bedroom.",
        when: "A Thursday morning, with the tradesman standing in the living room sizing it up by eye.",
        where: "Bogotá, a small apartment in Chapinero, on a fourth floor with good light.",
        why: "Because how this conversation goes decides the final price, and whether don Fabio will want to come back next time. Asking for a lower price without sounding rude is exactly what Alex is still learning to do in Spanish."
      },
      address: {
        form: "usted",
        who: "Don Fabio uses usted with Alex, and Alex uses usted back with him.",
        why: "In Bogotá, usted is the neutral default between two adults who barely know each other, all the more so in a service deal. There is no coldness in it: it is simply the factory-setting respect that almost any working relationship starts from.",
        ifYouSwitch:
          "Switching to tú with don Fabio from the outset would not offend, but it would sound as if Alex had already decided they were close. Usted lets the closeness arrive on its own, at the tradesman's pace, and not before its time."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Don Fabio, ¿le parece que empecemos el sábado?",
          translation: "Don Fabio, does starting on Saturday work for you?",
          pronunciation: "don FA-byoh, le pa-REH-se ke em-peh-SEH-mos el SA-ba-doh",
          literal: "Don Fabio, to-you it-seems that we-start the Saturday?",
          why: "“¿Le parece?” is the Colombian way to float a proposal without pushing it. Literally “does it seem to you?”, it hands the decision to don Fabio, and the que-clause after it takes the subjunctive (“empecemos”) because nothing is settled yet."
        },
        {
          speaker: "Don Fabio",
          target: "Me parece bien. El sábado bien tempranito le cunde más.",
          translation: "Works for me. Saturday nice and early gets more done for you.",
          pronunciation: "me pa-REH-se byen. el SA-ba-doh byen tem-pra-NEE-toh le KOON-de mas",
          literal: "To-me it-seems well. The Saturday well early to-you it-yields more.",
          why: "“Me parece bien” is the standard yes to a suggestion — warmer than a bare “sí” and less final than “de acuerdo”. Note “tempranito”: the -ito ending softens and sweetens it, and does not mean literally tiny."
        },
        {
          speaker: "Alex",
          target: "Y este gris para la sala, ¿cómo le parece?",
          translation: "And this gray for the living room — what do you reckon?",
          pronunciation: "ee ES-te grees PA-ra la SA-la, KO-mo le pa-REH-se",
          literal: "And this gray for the living-room, how to-you it-seems?",
          why: "“¿Cómo le parece?” asks for an opinion, not a fact — you are inviting judgement. Bogotanos use it constantly to consult the person they are hiring, which flatters the maestro's expertise and keeps the job collaborative."
        },
        {
          speaker: "Don Fabio",
          target: "Al parecer usted quiere algo sobrio; ese gris se le va a ver elegante.",
          translation: "By the looks of it you want something understated; that gray is going to look smart in here.",
          pronunciation: "al pa-reh-SER oos-TED KYEH-re AL-go SO-bryoh; ES-te grees se le va a ver eh-le-GAN-te",
          literal: "To-the seeming you want something sober; that gray itself to-you goes to look elegant.",
          why: "“Al parecer” means “apparently / by the looks of it” — a read of the situation, not a promise. It is a fixed phrase whose article never changes; hearing it as a firm commitment (“so it's decided”) is a classic misread."
        },
        {
          speaker: "Alex",
          target: "Me parece un poquito caro, para serle sincero. ¿En cuánto me deja todo?",
          translation: "It seems a bit steep to me, to be honest. What would you leave it all at?",
          pronunciation: "me pa-REH-se oon po-KEE-toh KA-roh, PA-ra SER-le seen-SEH-roh. en KWAN-to me DEH-ha TO-do",
          literal: "To-me it-seems a little-bit expensive, to be to-you sincere. In how-much to-me you-leave everything?",
          why: "Framing the objection as “me parece caro” — “it seems expensive to me” — turns it into a personal impression rather than an accusation of overcharging. “¿En cuánto me deja todo?” is the polite Colombian way to ask for a final, rounded price."
        },
        {
          speaker: "Don Fabio",
          target: "Le parece caro ahora, pero con dos manos y pintura buena, le sale a cuenta.",
          translation: "It seems dear to you now, but with two coats and good paint, it works out worth it.",
          pronunciation: "le pa-REH-se KA-roh a-OH-ra, PEH-ro kon dos MA-nos ee peen-TOO-ra BWEH-na, le SA-le a KWEN-ta",
          literal: "To-you it-seems expensive now, but with two hands and paint good, to-you it-comes-out to account.",
          why: "He echoes Alex's own “le parece caro” to acknowledge the worry before answering it — a gentle negotiating move. “Manos” for coats of paint and “salir a cuenta” for “to be worth it” are both everyday Colombian workshop vocabulary."
        }
      ],
      vocabulary: [
        {
          term: "parecer",
          explanation:
            "The verb of impression and appearance — how something seems, looks or strikes you, as opposed to how it flatly is.",
          literal: "to seem / to appear",
          useWhen:
            "Giving a softened opinion, reporting an appearance, or asking what someone thinks: me parece, ¿le parece?, al parecer.",
          avoidWhen:
            "Stating a hard fact you are certain of. “Es caro” is a verdict; “me parece caro” is an impression, and swapping them makes you sound either blunter or vaguer than you mean.",
          register: "neutral",
          region: "Universal Spanish; the constructions below are especially frequent in Colombia.",
          related: ["parecerse a", "aparecer", "al parecer", "¿qué le parece?"],
          example: {
            target: "Me parece un poquito caro.",
            translation: "It seems a bit steep to me."
          }
        },
        {
          term: "¿le parece?",
          explanation:
            "“Does that seem all right to you?” — the Colombian way to propose something while leaving the other person room to say no.",
          literal: "to-you it-seems?",
          useWhen:
            "Suggesting a time, a plan or a price — anything you want to offer rather than impose. The tú version is “¿te parece?”.",
          avoidWhen:
            "Giving an instruction you are not really opening to debate. Tacking “¿le parece?” onto an order sounds falsely humble.",
          register: "polite service",
          region: "General Colombian; ubiquitous in Bogotá service and workplace talk.",
          related: ["¿te parece?", "¿le parece bien?", "¿cómo le parece?", "¿le nace?"],
          example: {
            target: "¿Le parece que empecemos el sábado?",
            translation: "Does starting Saturday work for you?"
          }
        },
        {
          term: "me parece bien",
          explanation:
            "“That works for me / sounds good.” The default warm yes to a suggestion someone has just made.",
          literal: "to-me it-seems well",
          useWhen:
            "Accepting a plan, a time or an arrangement that has just been floated to you.",
          avoidWhen:
            "When you actually have reservations — Colombians will take “me parece bien” as a genuine yes and move straight on.",
          register: "neutral",
          region: "Universal Spanish; extremely frequent in Colombia.",
          related: ["me parece", "está bien", "de una", "listo"],
          example: {
            target: "Me parece bien, el sábado entonces.",
            translation: "Sounds good, Saturday then."
          }
        },
        {
          term: "me parece caro",
          explanation:
            "“It seems expensive to me.” A way to flag a price as too high while owning it as your own impression.",
          literal: "to-me it-seems expensive",
          useWhen:
            "Opening a gentle negotiation without accusing the seller of overcharging.",
          avoidWhen:
            "A fixed-price shop with tags on everything — haggling there is out of place and “me parece caro” just sounds like grumbling.",
          register: "friendly informal",
          region: "General Colombian; at home in markets and with tradespeople.",
          related: ["está caro", "me sale caro", "¿me hace un descuentico?", "está por las nubes"],
          example: {
            target: "Me parece un poquito caro.",
            translation: "It seems a bit pricey to me."
          }
        },
        {
          term: "al parecer",
          explanation:
            "“Apparently / by the looks of it.” Marks what follows as an inference from the evidence, not a confirmed fact.",
          literal: "to-the seeming",
          useWhen:
            "Reporting something you have pieced together but cannot swear to: al parecer viene mañana.",
          avoidWhen:
            "Something you know first-hand. Using “al parecer” about your own plans makes you sound oddly unsure of yourself.",
          register: "neutral",
          region: "Universal Spanish; standard in Colombian news and everyday speech.",
          related: ["por lo visto", "parece que", "según parece", "aparentemente"],
          example: {
            target: "Al parecer usted quiere algo sobrio.",
            translation: "By the looks of it you want something understated."
          }
        },
        {
          term: "parecerse a",
          explanation:
            "The reflexive twin of parecer — to resemble or look like someone or something. The little “se” is what flips “seem” into “resemble”.",
          literal: "to seem oneself to",
          useWhen:
            "Saying that two people or things look alike or take after each other, as when a child resembles a parent or one paint color resembles another.",
          avoidWhen:
            "Giving an opinion. “Me parezco” is “I resemble”; the opinion word is plain “me parece”, with no reflexive at all.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["parecido", "se parecen", "igualito a", "sacó a"],
          example: {
            target: "Ese gris se parece al del vecino.",
            translation: "That gray looks like the neighbor's one."
          }
        },
        {
          term: "maestro",
          explanation:
            "A respectful title for a skilled manual tradesman — painter, builder, mechanic — regardless of any formal qualification.",
          literal: "master",
          useWhen:
            "Addressing or referring to the person doing skilled work in your home. It honours their craft.",
          avoidWhen:
            "A professional you would name by their field — a doctor or lawyer is not “maestro”. A woman is usually “maestra” or named directly.",
          register: "polite service",
          region: "General Colombian; very common in Bogotá and on building sites across the country.",
          related: ["maestro de obra", "el pintor", "don Fabio", "el señor que pinta"],
          example: {
            target: "El maestro llega el sábado tempranito.",
            translation: "The tradesman arrives early on Saturday."
          }
        }
      ],
      note:
        "The most useful habit here is reaching for parecer whenever you have an opinion. “Es caro” states a fact and can sound like an accusation; “me parece caro” owns it as your impression and opens a door. Colombians soften almost everything through parecer — proposals with ¿le parece?, agreement with me parece bien, hearsay with al parecer — and picking it up makes you sound both more polite and more local.",
      culture: [
        {
          label: "¿Le parece? is how Colombians propose",
          body:
            "In Bogotá especially, plans are floated as questions rather than announced. “¿Le parece el sábado?”, “¿Le parece que lo pintemos gris?” — each hands the other person a clean way to decline. Stating your plan flat out (“Lo hacemos el sábado”) is not exactly rude, but it skips the little ritual of consent that Colombians expect, and can make you seem to be steamrolling even when you did not mean to at all."
        },
        {
          label: "The maestro is an expert, not a pair of hands",
          body:
            "Calling your painter or builder “maestro” is not empty flattery; it reflects real respect for people who work with their hands and know things you do not. Asking “¿cómo le parece?” about the color treats him as the specialist he is. Foreigners who bark instructions and never consult the maestro tend to get worse work and colder relations. The honorific and the consulting travel together, and locals notice when one is missing."
        },
        {
          label: "Haggling is a conversation, not a fight",
          body:
            "“Me parece un poquito caro” opens a negotiation the polite way. The diminutive “poquito”, the hedge “me parece”, the “para serle sincero” — all of it keeps the exchange friendly. Colombian bargaining is not the aggressive back-and-forth of some markets; it is a soft dance where both sides save face. Coming in hard with “eso está carísimo” can shut the conversation down before it has even started properly."
        },
        {
          label: "Diminutives do the emotional work",
          body:
            "“Tempranito”, “poquito”, “descuentico” — the -ito and -ico endings all over this exchange are not about size. They soften, warm and smooth. “Un poco caro” is a flat observation; “un poquito caro” is almost an apology for mentioning it. In Colombia, and on the Caribbean coast the -ico form especially, diminutives are one of the main tools for being pleasant, and leaving them out can make you sound curt."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “¿Qué piensa?” to propose a plan",
          whyItFails:
            "“¿Qué piensa?” asks for an opinion in the abstract; it does not float a specific offer the way “¿le parece?” does. Proposing the Saturday start with “¿qué piensa del sábado?” sounds like you want a philosophy of Saturdays, not a yes or no.",
          sayInstead: "¿Le parece el sábado?"
        },
        {
          mistake: "Announcing a price complaint as “Está muy caro”",
          whyItFails:
            "Stated as a flat fact, it sounds like you are accusing the maestro of overcharging, and it leaves him nowhere to go but defend himself. The parecer version keeps it as your impression and invites a reply.",
          sayInstead: "Me parece un poquito caro."
        },
        {
          mistake: "Saying “Me parezco a que sí” for “I think so”",
          whyItFails:
            "The reflexive “parecerse” means to resemble, so “me parezco” is “I look like”. Your opinion needs plain parecer with no “se”. This mix-up produces sentences that genuinely baffle a Colombian ear.",
          sayInstead: "Me parece que sí."
        },
        {
          mistake: "Taking “al parecer” as a firm promise",
          whyItFails:
            "“Al parecer lo termino el lunes” means “it looks like Monday”, not a guarantee. Hearing it as a commitment and then holding the maestro to it will feel to him like you rewrote what he actually said.",
          sayInstead: "Read “al parecer” as “probably”, and ask “¿me lo confirma?” if you need certainty."
        }
      ],
      variations: [
        {
          form: "¿Le parece que empecemos el sábado?",
          register: "polite service",
          region: "General Colombian",
          whenToUse: "The default polite proposal to someone you address as usted."
        },
        {
          form: "¿Te parece si arrancamos el sábado?",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The same offer to someone you tutear; “si” plus the indicative is a common casual frame."
        },
        {
          form: "¿Cómo le parece el gris?",
          register: "polite service",
          region: "Bogotá",
          whenToUse: "Consulting the person's judgement on a choice, flattering their expertise."
        },
        {
          form: "¿Le nace el sábado?",
          register: "friendly informal",
          region: "Medellín and Antioquia",
          whenToUse: "A very paisa way to ask whether a plan appeals to you — literally “does it arise in you?”."
        },
        {
          form: "¿Le sirve el sábado?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Asking whether a time is convenient rather than agreeable; it leans on practicality."
        }
      ],
      prompt: "Alex tells don Fabio “Me parece un poquito caro.” Why phrase it that way instead of “Está caro”?",
      choices: [
        "Because framing it as his own impression softens the complaint and opens a negotiation, rather than accusing the maestro of overcharging outright.",
        "Because “me parece caro” is the only grammatically correct option here, since talking about prices in Spanish always forces you to use the verb parecer.",
        "Because he is genuinely unsure whether the paint job is expensive and wants don Fabio to tell him what the real going market rate for the work is."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Don Fabio says “Al parecer usted quiere algo sobrio.” What is he doing with “al parecer”?",
          choices: [
            "Promising firmly that he will paint the living room in the understated color exactly the way Alex wants it done.",
            "Reading the situation out loud — “by the looks of it” — and offering an inference rather than a settled fact.",
            "Asking Alex to confirm whether he truly prefers something understated or would in fact rather go a lot bolder."
          ],
          answer: 1,
          tests: "al parecer as inference, not commitment"
        },
        {
          prompt: "How does “¿le parece?” differ from a flat “hágalo el sábado”?",
          choices: [
            "It is simply a more grammatically formal way of giving exactly the same instruction to begin the work on Saturday.",
            "It changes the day that is being proposed, moving it from Saturday to some other, more convenient weekday instead.",
            "It floats the Saturday as a proposal and leaves the other person a graceful, face-saving way to decline it."
          ],
          answer: 2,
          tests: "¿le parece? as proposal versus command"
        },
        {
          prompt: "Alex wants to say “I think it looks like the neighbor's gray.” Which is right?",
          choices: [
            "Me parece que se parece al gris del vecino.",
            "Me parezco que parece al gris del vecino, ¿sí?",
            "Me parece que me parezco al gris del vecino."
          ],
          answer: 0,
          tests: "parece (opinion) versus parecerse a (resemble)"
        },
        {
          prompt: "What does calling the painter “maestro” signal?",
          choices: [
            "That Alex has formally hired him on a written contract and now supervises his daily work on the site.",
            "Respect for his skilled trade — it treats him as an expert whose judgement is genuinely worth consulting.",
            "That the painter also teaches at a school during the week and only takes on painting jobs at the weekend."
          ],
          answer: 1,
          tests: "maestro as an honorific for a skilled tradesman"
        }
      ]
    },
    en: {
      title: "Acordar la pintada del apartamento en Houston",
      situation:
        "Alejandra quiere que le pinten el apartamento y un pintor, el señor Reid, vino a darle el presupuesto. Tienen que ponerse de acuerdo en el día, el color y el precio, todo en inglés — un idioma donde “me parece” se dice de mil maneras distintas y ninguna se parece de verdad al español.",
      setting: {
        who: "El señor Reid lleva veinte años pintando apartamentos en Houston y trabaja solo. Alejandra acaba de llegar de Cali y es la primera vez que contrata a alguien para un trabajo así en inglés.",
        what: "Una visita corta para cerrar el día, el color y el precio de pintar la sala y un cuarto.",
        when: "Un jueves por la mañana, con el pintor de pie en la sala tomando medidas.",
        where: "Houston, un apartamento pequeño en un tercer piso sin ascensor.",
        why: "Porque de cómo suene esta conversación depende el precio final y también que el señor Reid quiera volver. Pedir un descuento en inglés sin sonar grosera es justo lo que Alejandra todavía no sabe hacer."
      },
      address: {
        form: "mixed",
        who: "Alejandra y el señor Reid se tratan con el mismo “you”; ella lo llama “Mr. Reid” y él la llama por el nombre de pila.",
        why: "El inglés tiene un solo “you”, así que el respeto no vive en el pronombre sino en el léxico: el apellido con “Mr.”, un “would” en lugar de un imperativo, un “could you” en vez de un “do”. La cortesía la cargan las palabras, no la conjugación.",
        ifYouSwitch:
          "Tutearlo con el nombre de pila desde el primer minuto no ofendería, pero en un trato de servicio suena a exceso de confianza. “Mr. Reid” mantiene el tono profesional hasta que él mismo proponga otra cosa."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Mr. Reid, does Saturday work for you?",
          translation: "Señor Reid, ¿le parece bien el sábado?",
          pronunciation: "MIS-ter riid, das SA-tur-dei UERK for yu",
          literal: "Señor Reid, ¿hace el sábado funcionar para usted?",
          why: "“Does it work for you?” es el equivalente natural de “¿le parece?”: propone sin imponer. El inglés no dice aquí “does it seem to you”, que sonaría raro; el verbo que hace el trabajo de parecer en este contexto es “work”."
        },
        {
          speaker: "Mr. Reid",
          target: "Saturday works for me. Early is better — we get more done.",
          translation: "El sábado me parece bien. Temprano es mejor, avanzamos más.",
          pronunciation: "SA-tur-dei UERKS for mi. ER-li is BE-ter — ui get mor DAN",
          literal: "Sábado funciona para mí. Temprano es mejor — nosotros conseguimos más hecho.",
          why: "“Works for me” es el sí cordial a una propuesta, como “me parece bien”. Ojo con “we get more done”: “get” más participio expresa lograr que algo quede hecho, una estructura que el español resuelve con un simple “avanzamos”."
        },
        {
          speaker: "Alejandra",
          target: "And this gray for the living room — what do you think?",
          translation: "Y este gris para la sala, ¿cómo le parece?",
          pronunciation: "and dis grei for da LI-ving rum — uat du yu ZINK",
          literal: "Y este gris para la sala — ¿qué piensa usted?",
          why: "Para pedir una opinión, el inglés usa “what do you think?”, no “how does it seem to you?”. Aquí “think” cubre el “¿cómo le parece?” del español; traducirlo literal como “how do you see it” sonaría forzado."
        },
        {
          speaker: "Mr. Reid",
          target: "Looks like you want something understated. That gray will look great in here.",
          translation: "Al parecer quiere algo sobrio. Ese gris se va a ver muy bien acá.",
          pronunciation: "luks laik yu uant SAM-zing an-der-STEI-ted. dat grei uil luk greit in JIR",
          literal: "Parece como usted quiere algo discreto. Ese gris va a ver genial aquí.",
          why: "“Looks like…” es la forma coloquial de “al parecer”: una lectura de la situación, no una promesa. El inglés se ahorra el sujeto (“it looks like”) y arranca directo con el verbo, algo que al hispanohablante le cuesta soltar."
        },
        {
          speaker: "Alejandra",
          target: "It seems a bit steep, to be honest. How much would it be for everything?",
          translation: "Me parece un poquito caro, para serle sincera. ¿En cuánto me saldría todo?",
          pronunciation: "it siims a bit stiip, tu bi O-nest. jau mach ud it bi for E-vri-zing",
          literal: "Ello parece un poco empinado, para ser honesta. ¿Cuánto sería ello por todo?",
          why: "Aquí sí aparece “it seems”, el pariente directo de “me parece”. “Steep” es el adjetivo que los angloparlantes usan para un precio alto; “expensive” también sirve, pero “steep” suena más natural en una queja suave."
        },
        {
          speaker: "Mr. Reid",
          target: "It seems steep now, but with two coats and good paint, it's worth it.",
          translation: "Le parece caro ahora, pero con dos manos y buena pintura, vale la pena.",
          pronunciation: "it siims stiip nau, bat uid tu kouts and gud peint, its UERZ it",
          literal: "Ello parece empinado ahora, pero con dos capas y buena pintura, ello-vale ello.",
          why: "Repite “it seems steep” para reconocer la duda antes de responderla, igual que don Fabio repetía “le parece caro”. “Coats” son las manos de pintura y “worth it” es “vale la pena”: dos piezas que no se traducen palabra por palabra."
        }
      ],
      vocabulary: [
        {
          term: "does that work for you?",
          explanation:
            "La forma natural en inglés de proponer algo dejando la puerta abierta a un no. Equivale a “¿le parece?”.",
          literal: "¿eso funciona para usted?",
          useWhen:
            "Al proponer una hora, un plan o un precio que quiere ofrecer y no imponer.",
          avoidWhen:
            "Al dar una orden que en realidad no está abriendo a discusión; ahí “does that work for you?” suena a falsa modestia.",
          register: "polite service",
          region: "Inglés universal; muy usado en el trato de servicio en Estados Unidos.",
          related: ["is that okay with you?", "would that work?", "how does that sound?", "does that suit you?"],
          example: {
            target: "Does Saturday work for you?",
            translation: "¿Le parece bien el sábado?"
          }
        },
        {
          term: "works for me",
          explanation:
            "“Me parece bien.” El sí cordial a una propuesta, ni frío ni definitivo.",
          literal: "funciona para mí",
          useWhen:
            "Al aceptar un plan, una hora o un arreglo que acaban de proponerle.",
          avoidWhen:
            "Cuando en realidad tiene reparos: el otro tomará “works for me” como un sí de verdad y seguirá adelante.",
          register: "neutral",
          region: "Inglés universal; muy frecuente en Norteamérica.",
          related: ["sounds good", "that's fine by me", "I'm good with that", "that works"],
          example: {
            target: "Saturday works for me.",
            translation: "El sábado me parece bien."
          }
        },
        {
          term: "steep",
          explanation:
            "Dicho de un precio, “alto / caro”. “It seems a bit steep” es la queja suave estándar.",
          literal: "empinado",
          useWhen:
            "Al señalar que algo le parece caro sin acusar a nadie de estar cobrando de más.",
          avoidWhen:
            "En una tienda de precio fijo con etiquetas; ahí regatear queda fuera de lugar y “steep” suena a queja vacía.",
          register: "friendly informal",
          region: "Inglés universal; muy común en Estados Unidos.",
          related: ["pricey", "expensive", "a bit much", "on the high side"],
          example: {
            target: "It seems a bit steep.",
            translation: "Me parece un poquito caro."
          }
        },
        {
          term: "looks like",
          explanation:
            "“Al parecer / por lo visto.” Marca lo que sigue como una lectura de los indicios, no un hecho confirmado.",
          literal: "parece como",
          useWhen:
            "Al reportar algo que dedujo pero no puede jurar: “looks like it's going to rain”.",
          avoidWhen:
            "Sobre algo que sabe de primera mano; ahí “looks like” lo hace sonar dudoso de sus propios planes.",
          register: "neutral",
          region: "Inglés universal; en registro coloquial se dice “looks like” sin el “it”.",
          related: ["by the looks of it", "apparently", "it seems", "from what I can tell"],
          example: {
            target: "Looks like you want something understated.",
            translation: "Al parecer quiere algo sobrio."
          }
        },
        {
          term: "what do you think?",
          explanation:
            "La forma de pedir una opinión en inglés. Hace el trabajo del “¿cómo le parece?” del español.",
          literal: "¿qué piensa usted?",
          useWhen:
            "Al consultar el juicio de alguien sobre una elección — un color, un plan, una idea.",
          avoidWhen:
            "Cuando quiere un hecho y no una opinión; para eso preguntaría “is it…?” o “does it…?”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["how does that sound?", "what's your take?", "what do you reckon?", "any thoughts?"],
          example: {
            target: "What do you think?",
            translation: "¿Cómo le parece?"
          }
        },
        {
          term: "seem",
          explanation:
            "El verbo inglés de la impresión — cómo se ve o se siente algo, frente a cómo es. El pariente directo de parecer.",
          literal: "parecer",
          useWhen:
            "Al suavizar una opinión o reportar una impresión: “it seems fine”, “you seem tired”.",
          avoidWhen:
            "Con “-ing”. “Seem” es un verbo de estado y “it is seeming” es un error clásico del hispanohablante; se dice “it seems”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["appear", "look", "sound", "feel"],
          example: {
            target: "It seems a bit steep.",
            translation: "Me parece un poquito caro."
          }
        },
        {
          term: "handyman",
          explanation:
            "El que hace arreglos y oficios varios en las casas. Cubre buena parte de lo que en Colombia se llama “maestro”.",
          literal: "hombre-hábil",
          useWhen:
            "Al referirse a quien pinta, arregla o instala cosas menores en su casa.",
          avoidWhen:
            "Para un oficio especializado con licencia — un “electrician” o un “plumber” se nombran por su oficio, no como “handyman”.",
          register: "neutral",
          region: "Inglés universal; en Norteamérica “contractor” es el que dirige una obra mayor.",
          related: ["contractor", "painter", "tradesperson", "repairman"],
          example: {
            target: "The handyman comes early on Saturday.",
            translation: "El maestro llega temprano el sábado."
          }
        }
      ],
      note:
        "Lo más útil de esta conversación es que en inglés casi ningún “me parece” se dice con un verbo parecido a parecer. Una propuesta es “does it work for you?”, un acuerdo es “works for me”, una impresión es “looks like” o “it seems”, y una opinión pedida es “what do you think?”. Buscar una sola palabra que traduzca “parecer” lleva a frases raras; hay que aprender cada giro por separado.",
      culture: [
        {
          label: "Regatear casi no existe",
          body:
            "En Estados Unidos, el precio que le da un pintor o una tienda suele ser el precio, y punto. Decir “it seems a bit steep” está bien como comentario honesto, pero no inicia el tira y afloje que sí abriría en Colombia. Insistir en un descuento, sobre todo en un comercio formal, puede incomodar. Con un trabajador independiente hay algo de margen, pero se pide una sola vez y con suavidad, nunca como parte esperada del trato."
        },
        {
          label: "El apellido con “Mr.” marca respeto",
          body:
            "Como el inglés no tiene usted, el respeto se traslada al nombre. Llamar al pintor “Mr. Reid” en vez de “Bill” cumple la función que en español haría el usted. Él probablemente le dirá “just call me Bill” en algún momento, y ahí sí puede pasar al nombre de pila. Hasta entonces, el apellido mantiene el tono profesional sin sonar distante ni frío, y es la apuesta segura con alguien mayor."
        },
        {
          label: "“Please” y “would” hacen de cortesía",
          body:
            "El hispanohablante suele sonar brusco en inglés sin querer, porque traduce imperativos directos. “Paint the room white” es correcto pero seco; “could you paint the room white?” es lo que espera un estadounidense. La cortesía en inglés vive en los condicionales — would, could — y en un “please” que en español muchas veces se omite porque el tono ya lo lleva. En inglés hay que ponerlo casi siempre."
        },
        {
          label: "La charla pequeña engrasa el trato",
          body:
            "Antes de hablar de precios, un estadounidense suele cruzar un par de frases sobre el clima o el tráfico. Ese “small talk” no es pérdida de tiempo: es la manera de mostrar que uno es una persona agradable con quien trabajar. Ir directo al grano, como sería normal y hasta eficiente en muchos contextos colombianos, puede leerse como frialdad. Dos minutos de charla liviana valen mucho más de lo que parece."
        }
      ],
      pitfalls: [
        {
          mistake: "“It seems me expensive.”",
          whyItFails:
            "El inglés no calca la estructura “me parece”. El objeto “me” no va pegado al verbo; se dice “it seems expensive to me” o, más natural, “it looks expensive to me”. “It seems me” sencillamente no existe en inglés.",
          sayInstead: "It seems expensive to me."
        },
        {
          mistake: "“I am agree.” / “Are you agree?”",
          whyItFails:
            "“Agree” es un verbo, no un adjetivo, así que no lleva “be”. Se dice “I agree” y “do you agree?”. “I am agree” es uno de los errores más reconocibles del hispanohablante, calcado de “estoy de acuerdo”.",
          sayInstead: "I agree. / Do you agree?"
        },
        {
          mistake: "“It is seeming a good price.”",
          whyItFails:
            "“Seem” es un verbo de estado y no se usa en presente continuo, igual que “know” o “like”. El “-ing” aquí le suena mal a un angloparlante. La forma correcta es el presente simple, “it seems”.",
          sayInstead: "It seems like a good price."
        },
        {
          mistake: "Using “actually” to mean “right now”",
          whyItFails:
            "“Actually” significa “en realidad / de hecho”, no “actualmente”. Decir “actually I don't have work” comunica “en realidad no tengo trabajo”, no “ahora mismo”. Es un falso amigo que cambia por completo el sentido de la frase.",
          sayInstead: "Right now I don't have steady work."
        }
      ],
      variations: [
        {
          form: "Does Saturday work for you?",
          register: "polite service",
          region: "Inglés universal",
          whenToUse: "La propuesta cortés por defecto en un trato de servicio."
        },
        {
          form: "Is Saturday okay?",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "La misma oferta en tono relajado, con alguien de confianza."
        },
        {
          form: "What do you think of the gray?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para consultar el juicio del otro sobre una elección."
        },
        {
          form: "Would Saturday suit you?",
          register: "polite formal",
          region: "Inglés británico y estadounidense",
          whenToUse: "Un registro más formal; “suit you” suena algo más pulido que “work for you”."
        },
        {
          form: "Are you free Saturday?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Cuando lo que pregunta es la disponibilidad más que el agrado."
        }
      ],
      prompt: "Alejandra dice “It seems a bit steep, to be honest.” ¿Por qué decirlo así y no “It's expensive.”?",
      choices: [
        "Porque presentarlo como su impresión suaviza la queja y abre una negociación, en vez de acusar al pintor de estar cobrando de más.",
        "Porque “it seems a bit steep” es la única opción correcta en inglés, ya que hablar de precios siempre exige el verbo “seem” para funcionar.",
        "Porque en realidad no está segura de que el trabajo sea caro y quiere que el señor Reid le diga cuál es el precio de mercado real."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "El señor Reid dice “Looks like you want something understated.” ¿Qué hace con “looks like”?",
          choices: [
            "Promete con firmeza que va a pintar la sala de un color sobrio exactamente como Alejandra lo quiere.",
            "Lee la situación en voz alta — “por lo visto” — y ofrece una deducción, no un hecho ya cerrado.",
            "Le pide a Alejandra que confirme si de verdad prefiere algo sobrio o si más bien quiere algo llamativo."
          ],
          answer: 1,
          tests: "looks like como deducción, no compromiso"
        },
        {
          prompt: "¿En qué se diferencia “does Saturday work for you?” de un “paint on Saturday”?",
          choices: [
            "Es solo una forma gramaticalmente más formal de dar exactamente la misma orden de empezar el trabajo el sábado.",
            "Cambia el día que se propone, moviéndolo del sábado a otro día más conveniente de la semana laboral.",
            "Presenta el sábado como una propuesta y le deja al otro una salida elegante para poder decir que no."
          ],
          answer: 2,
          tests: "la propuesta frente a la orden"
        },
        {
          prompt: "Alejandra quiere decir “me parece bien”. ¿Cuál suena natural en inglés?",
          choices: [
            "That works for me.",
            "That seems me good, no?",
            "I am agree with that."
          ],
          answer: 0,
          tests: "works for me frente a calcos de me parece y estoy de acuerdo"
        },
        {
          prompt: "¿Qué comunica llamar al pintor “Mr. Reid” en lugar de “Bill”?",
          choices: [
            "Que Alejandra lo contrató mediante un contrato escrito y ahora supervisa su trabajo diario en la obra.",
            "Respeto — el apellido con “Mr.” cumple en inglés la función que en español haría el usted con alguien mayor.",
            "Que el pintor además da clases en un colegio y solo pinta los fines de semana como una cosa aparte."
          ],
          answer: 1,
          tests: "el apellido con Mr. como equivalente del usted"
        }
      ]
    }
  },
  {
    id: "trying-on-a-jacket-in-el-hueco",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "familiar",
    pathways: ["foundation"],
    verb: "quedar",
    review: "pending",
    es: {
      title: "Medirse una chaqueta en El Hueco",
      situation:
        "Alex anda en El Hueco, la zona de comercio popular del centro de Medellín, buscando una chaqueta. Una vendedora, Yésica, lo engancha desde la puerta y lo hace medirse una. En cinco frases se juega el precio, la talla y si vuelve o no por ella más tarde.",
      setting: {
        who: "Yésica runs a clothing stall in El Hueco and sells by talking non-stop, with the paisa gift for making anyone feel like one of the family. Alex is a foreigner who still gets lost among so many stalls and so many offers.",
        what: "Trying on a jacket, hearing the price, and arranging to come back for it if it fits.",
        when: "A Saturday at midday, with the city center packed with people and vendors calling out.",
        where: "Medellín, El Hueco, a narrow arcade of small stalls where everything is cheaper and haggling is done with warmth.",
        why: "Because in El Hueco the exchange is quick and personal: if Alex hesitates he loses the discount, and if he arranges to come back and doesn't, he lets down someone who already treated him like a friend."
      },
      address: {
        form: "vos",
        who: "Yésica uses vos with Alex and calls him “papá” affectionately; Alex, with a bit of street sense now, uses vos back with her.",
        why: "In Medellín, vos is everyday currency among young people and in popular commerce. It is neither vulgar nor especially intimate: it is simply how the quick, warm familiarity of an El Hueco stall sounds.",
        ifYouSwitch:
          "Using usted with Yésica would not be wrong, but it would raise a wall just where she is building a bridge. Vos accepts the closeness she offers; usted would keep her at arm's length for no reason."
      },
      dialogue: [
        {
          speaker: "Yésica",
          target: "Medíte esa, papá. Esa chaqueta te queda una nota.",
          translation: "Try that one on, love. That jacket looks great on you.",
          pronunciation: "MEH-dee-te EH-sa, pa-PA. EH-sa cha-KEH-ta te KEH-da OO-na NO-ta",
          literal: "Try-yourself that, dad. That jacket to-you it-stays a note.",
          why: "“Te queda” is quedar for how a garment sits on you — fit and flattery in one word. “Medíte” is the paisa vos imperative of medirse, and “una nota” is Medellín slang for something excellent."
        },
        {
          speaker: "Alex",
          target: "¿No me queda muy apretada de los hombros?",
          translation: "Isn't it a bit tight across the shoulders on me?",
          pronunciation: "no me KEH-da mooy a-preh-TA-da de los OM-bros",
          literal: "Not to-me it-stays very tight of the shoulders?",
          why: "Same quedar, now for a fit that is not quite right. Notice you say how it sits on you (“me queda”), not whether you fit into it — that would be caber, a different verb with a different feel."
        },
        {
          speaker: "Yésica",
          target: "Para nada, te queda pintada. Y mirá, la otra sede queda a la vuelta.",
          translation: "Not at all, it fits you perfectly. And look, the other branch is just around the corner.",
          pronunciation: "PA-ra NA-da, te KEH-da peen-TA-da. ee mee-RA, la O-tra SEH-de KEH-da a la BWEL-ta",
          literal: "For nothing, to-you it-stays painted. And look, the other branch it-stays to the turn.",
          why: "Two quedars in one breath: “te queda pintada” (it fits you perfectly) and “queda a la vuelta” (it's located round the corner). The second is the very Colombian use of quedar for where a fixed place is."
        },
        {
          speaker: "Alex",
          target: "¿Y dónde queda esa otra sede?",
          translation: "And where's that other branch?",
          pronunciation: "ee DON-de KEH-da EH-sa O-tra SEH-de",
          literal: "And where it-stays that other branch?",
          why: "“¿Dónde queda?” is how Colombians ask where something is — far more common than “¿dónde está?” for a fixed location like a shop, a street or a building. Using estar here is understood but sounds less local."
        },
        {
          speaker: "Yésica",
          target: "Ahí en la 45. Si te la llevás, quedamos en que te la aparto.",
          translation: "Right there on 45th. If you take it, we agree I'll set it aside for you.",
          pronunciation: "ah-EE en la kwa-REN-ta-ee-SEEN-ko. see te la yeh-VAS, keh-DA-mos en ke te la a-PAR-to",
          literal: "There on the 45. If you-take it, we-stay in that to-you it I-set-aside.",
          why: "“Quedar en” is to reach an agreement — “we settle that…”. It is the arranging quedar, distinct from fit and from location. “Llevás” and the whole line ride the paisa vos."
        },
        {
          speaker: "Alex",
          target: "Listo, pero no me vayás a quedar mal, que vuelvo a las cinco.",
          translation: "Great, but don't let me down — I'll be back at five.",
          pronunciation: "LEES-to, PEH-ro no me va-YAS a keh-DAR mal, ke VWEL-vo a las SEEN-ko",
          literal: "Ready, but not to-me you-go to stay badly, that I-return at the five.",
          why: "“Quedar mal (con alguien)” is to let someone down — one of the heaviest social ideas in Colombia. “No me vayás a quedar mal” uses the vos subjunctive vayás to plead, half-joking, that she keep her word."
        }
      ],
      vocabulary: [
        {
          term: "quedar",
          explanation:
            "One verb doing many jobs: how clothing fits, where a place is, what two people agree, and — as quedar mal — letting someone down.",
          literal: "to remain / to be left",
          useWhen:
            "For how clothes fit, for where a place is located, for arranging to meet, and for letting someone down — one verb quietly doing the work of four.",
          avoidWhen:
            "For staying somewhere, which is the reflexive quedarse (me quedo aquí). Plain quedar for “I stay” is a classic slip.",
          register: "neutral",
          region: "Universal Spanish; the location sense is especially Colombian.",
          related: ["quedarse", "me queda bien", "quedamos en", "quedar mal"],
          example: {
            target: "Esa chaqueta te queda una nota.",
            translation: "That jacket looks great on you."
          }
        },
        {
          term: "me queda bien",
          explanation:
            "“It fits me / it suits me.” Said of how a garment sits on your body, both size and how good it looks.",
          literal: "to-me it-stays well",
          useWhen:
            "Trying on clothes and reacting to the fit: me queda bien, me queda grande, me queda apretada.",
          avoidWhen:
            "Talking about whether something physically fits into a space — that is caber, not quedar.",
          register: "neutral",
          region: "Universal Spanish; “te queda pintada” for a perfect fit is very paisa.",
          related: ["me queda grande", "me queda apretada", "te queda pintada", "me sienta bien"],
          example: {
            target: "¿No me queda muy apretada?",
            translation: "Isn't it a bit tight on me?"
          }
        },
        {
          term: "¿dónde queda?",
          explanation:
            "“Where is it?” — the Colombian default for asking the location of a fixed place: a shop, a street, a building.",
          literal: "where it-stays?",
          useWhen:
            "Asking where any permanent, unmoving place is. It sounds more natural than “¿dónde está?” for that job here.",
          avoidWhen:
            "Asking where a movable thing or a person is right now — for that you want “¿dónde está?”.",
          register: "neutral",
          region: "Strongly Colombian; heard constantly across Bogotá, Medellín and the coast.",
          related: ["¿dónde está?", "queda cerca", "queda a la vuelta", "queda por allá"],
          example: {
            target: "¿Dónde queda esa otra sede?",
            translation: "Where's that other branch?"
          }
        },
        {
          term: "quedamos en",
          explanation:
            "“We agree / we settle that…”. Fixes a plan, a price or a time between two people.",
          literal: "we-stay in",
          useWhen:
            "Closing a deal or settling a plan, as when you agree to meet at five, or agree that the other person will bring the food.",
          avoidWhen:
            "For a lone intention with no one else involved — that would just be a plan, not a quedamos.",
          register: "neutral",
          region: "Universal Spanish; ubiquitous in Colombian day-to-day plans.",
          related: ["quedar de", "quedamos así", "¿en qué quedamos?", "quedó pendiente"],
          example: {
            target: "Quedamos en que te la aparto.",
            translation: "We agree I'll set it aside for you."
          }
        },
        {
          term: "quedar mal",
          explanation:
            "“To let someone down / to look bad.” Failing to keep your word to a person who was counting on you.",
          literal: "to stay badly",
          useWhen:
            "Warning about, or apologizing for, breaking a commitment: no le quiero quedar mal, quedé mal con ellos.",
          avoidWhen:
            "Feeling physically unwell — that is sentirse mal, an entirely different thing from quedar mal.",
          register: "neutral",
          region: "Universal Spanish; the social weight of it is very strong in Colombia.",
          related: ["quedar bien", "cumplir", "fallarle a alguien", "dejar plantado"],
          example: {
            target: "No me vayás a quedar mal.",
            translation: "Don't let me down."
          }
        },
        {
          term: "quedar de",
          explanation:
            "“To agree to / be supposed to” do something. Like quedar en, but followed by a verb: what you committed to do.",
          literal: "to stay of",
          useWhen:
            "Recalling a commitment you took on, as when you had promised to call someone back, or the two of you had agreed to meet on Saturday.",
          avoidWhen:
            "A duty imposed from outside with no agreement — that is “tener que”, not quedar de.",
          register: "friendly informal",
          region: "General Colombian; very common in speech, less so in formal writing.",
          related: ["quedar en", "quedé de", "prometí", "me comprometí a"],
          example: {
            target: "Quedé de volver a las cinco.",
            translation: "I said I'd come back at five."
          }
        },
        {
          term: "medirse",
          explanation:
            "“To try on.” In Colombia you más often “se mide” a garment than “se prueba” it, though both work.",
          literal: "to measure oneself",
          useWhen:
            "Putting clothes on in the shop to check the fit: ¿me la puedo medir?, medíte esa.",
          avoidWhen:
            "Tasting food or testing a machine — that is probar, without the clothing sense of medirse.",
          register: "friendly informal",
          region: "Strongly Colombian; “probarse” is the more pan-Hispanic verb.",
          related: ["probarse", "el probador", "¿me lo mido?", "la talla"],
          example: {
            target: "Medíte esa chaqueta.",
            translation: "Try that jacket on."
          }
        }
      ],
      note:
        "The one habit to build here is not translating every “quedar” the same way. Clothing me queda; a place queda somewhere; two people quedan en a plan; and you never want to quedar mal with anyone. The only sense that maps to English “stay” is the reflexive quedarse — “me quedo aquí”. Keep that one apart and the rest of quedar stops being confusing.",
      culture: [
        {
          label: "“¿Dónde queda?” is the local GPS",
          body:
            "Ask a Colombian where something is and the verb that comes out is almost always quedar: “¿dónde queda el baño?”, “eso queda por la 45”. Estar works too, but quedar is the reflex for fixed places, and using it makes you sound like you have been here a while. Foreigners who only ever reach for estar are understood perfectly well, yet they miss the rhythm of how directions actually get given on the street."
        },
        {
          label: "Quedar mal is a real social wound",
          body:
            "“Quedarle mal a alguien” carries far more weight than the light English “to let down”. Not turning up, not paying when you said, not delivering the favour — these damage your name in a way Colombians take seriously. Reliability is a form of respect, and “no le quiero quedar mal” is said with genuine feeling. Treating a casual “I'll come back” lightly, and then not returning, can cost you a relationship you did not realize you had."
        },
        {
          label: "El Hueco runs on warmth and haggling",
          body:
            "El Hueco is Medellín's dense maze of cut-price shops, and its trade is personal and fast. Vendors call you “papá”, “mija”, “vecino”, pull you in with a joke and expect a little bargaining in return. The friendliness is real and also strategy; none of it obliges you to buy. Knowing you can smile, try things on, say “ahí vuelvo” and walk on is part of shopping there without stress."
        },
        {
          label: "Vos is the sound of Medellín",
          body:
            "Paisa Spanish uses vos where other regions use tú: vos tenés, vos sabés, medíte, llevás. It is neither rude nor especially intimate — it is simply the everyday second person in Antioquia, heard from grandmothers and shopkeepers alike. Tú sounds a touch soft or outsiderish there, and usted keeps its distance. Picking up vos, even just recognising it, unlocks how Medellín really talks to you."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “¿Dónde es la otra sede?” for its location",
          whyItFails:
            "Ser marks where an event happens, not where a fixed place sits. For the location of a shop or building you need quedar or estar; “¿dónde es?” about a branch sounds off to Colombian ears.",
          sayInstead: "¿Dónde queda la otra sede?"
        },
        {
          mistake: "Saying “La chaqueta me cabe bien” to mean it suits you",
          whyItFails:
            "Caber is about whether something physically fits into a space or size — whether it goes in at all. How a garment sits and looks on you is quedar, so “me cabe” misses the point you are making.",
          sayInstead: "La chaqueta me queda bien."
        },
        {
          mistake: "Saying “Quedo aquí” for “I'll stay here”",
          whyItFails:
            "Staying in a place is the reflexive quedarse, so it must be “me quedo aquí”. Plain “quedo aquí” drops the pronoun that carries the meaning and lands as unfinished or simply wrong.",
          sayInstead: "Me quedo aquí."
        },
        {
          mistake: "Hearing “quedar mal” as feeling unwell",
          whyItFails:
            "“Quedar mal con alguien” is to let a person down or look bad to them — a social failure, not a physical state. Feeling ill is sentirse mal, and confusing the two turns a broken promise into a stomachache.",
          sayInstead: "For letting someone down: quedar mal. For feeling ill: sentirse mal."
        }
      ],
      variations: [
        {
          form: "Esa chaqueta te queda muy bien.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The plain, reliable way to say a garment fits and suits you."
        },
        {
          form: "Te queda pintada.",
          register: "friendly informal",
          region: "Medellín and Antioquia",
          whenToUse: "A very paisa compliment: it fits you perfectly, like it was painted on."
        },
        {
          form: "¿Dónde queda el baño?",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Asking where a fixed place is — the everyday location question."
        },
        {
          form: "Quedamos en vernos a las cinco.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Locking in a plan or a time you have just agreed with someone."
        },
        {
          form: "No me quedés mal.",
          register: "friendly informal",
          region: "Medellín and Antioquia",
          whenToUse: "Half-joking plea not to be let down, in the paisa vos form."
        }
      ],
      prompt: "Yésica says the other shop “queda a la vuelta.” What is she telling Alex?",
      choices: [
        "That the other branch has only just moved and will be relocating to somewhere around the corner very soon.",
        "That the jacket he is trying on will actually end up fitting him better once he walks around a little in it.",
        "That the other branch is located just around the corner — “queda” here simply marks where a place is."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Why does Alex say “no me vayás a quedar mal”?",
          choices: [
            "He is asking Yésica not to let him down — to genuinely hold the jacket the way she has just promised.",
            "He is warning Yésica that the jacket looks bad on him and that he will probably not buy it after all.",
            "He is telling Yésica he feels unwell and needs to sit down for a while before he carries on shopping."
          ],
          answer: 0,
          tests: "quedar mal as letting someone down"
        },
        {
          prompt: "Alex wants to ask where the other branch is. Which is most natural in Colombia?",
          choices: [
            "¿Dónde es la otra sede?",
            "¿Dónde queda la otra sede?",
            "¿Dónde se queda la otra sede?"
          ],
          answer: 1,
          tests: "quedar for the location of a fixed place, not ser"
        },
        {
          prompt: "What does “quedamos en que te la aparto” commit Yésica to?",
          choices: [
            "To knocking a fixed amount off the price of the jacket if Alex chooses to come back for it later on.",
            "To staying inside the shop and personally waiting right by the door until Alex finally returns at five.",
            "To an agreement — “we settled that” — that she will set the jacket aside and hold on to it for him."
          ],
          answer: 2,
          tests: "quedar en as reaching an agreement"
        },
        {
          prompt: "Which sentence correctly says the jacket fits well?",
          choices: [
            "La chaqueta me queda muy bien.",
            "La chaqueta me cabe muy bien.",
            "La chaqueta me ajusta muy bien."
          ],
          answer: 0,
          tests: "quedar for how a garment sits, not caber or ajustar"
        }
      ]
    },
    en: {
      title: "Medirse una chaqueta en una tienda de Estados Unidos",
      situation:
        "Alejandra anda buscando una chaqueta en un centro comercial de Houston. Una vendedora, Megan, la anima a medirse una. En cinco frases se juega la talla, dónde queda la otra tienda y si vuelve o no por ella — todo en un inglés donde “quedar” se dice de cinco maneras distintas.",
      setting: {
        who: "Megan atiende una tienda de ropa en un centro comercial y saluda con el “hi, how are you?” de rigor. Alejandra todavía traduce “me queda bien” palabra por palabra y le sale raro.",
        what: "Medirse una chaqueta, oír el precio y quedar de volver por ella si le sirve.",
        when: "Un sábado por la tarde, con el centro comercial lleno pero tranquilo.",
        where: "Houston, una tienda de una cadena grande, con probadores al fondo y un letrero de devoluciones en la caja.",
        why: "Porque Alejandra quiere sonar natural y no calcar el español. Decir “it stays me good” o “where stays the store” la delata enseguida, y ella preferiría que no."
      },
      address: {
        form: "mixed",
        who: "Megan y Alejandra se tratan con el mismo “you” desde el saludo; Megan la llama “hon” un par de veces, de puro cariño comercial.",
        why: "El inglés no tiene ni vos ni usted, así que la cercanía la marcan otras cosas: el tono, un “hon” o “sweetie”, las frases cortas y sueltas. La calidez del comercio popular paisa aquí la cargan la sonrisa y el saludo, no el pronombre.",
        ifYouSwitch:
          "Ponerse muy formal — “would you be so kind as to…” — en una tienda así sonaría tieso y hasta raro. El registro relajado es el que corresponde; estirarlo de más crea distancia donde no hace falta ninguna."
      },
      dialogue: [
        {
          speaker: "Megan",
          target: "Try that one on — that jacket really suits you.",
          translation: "Medíte esa, esa chaqueta te queda buenísima.",
          pronunciation: "trai dat uan on — dat YA-ket RI-li suts yu",
          literal: "Prueba esa una puesta — esa chaqueta realmente favorece a-ti.",
          why: "El inglés parte el “te queda” en dos: “fit” para la talla y “suit” para lo que te favorece. Aquí Megan usa “suits you”, que es el elogio; y “try on” lleva el “on” obligatorio para significar medirse."
        },
        {
          speaker: "Alejandra",
          target: "Isn't it a bit tight across the shoulders?",
          translation: "¿No me queda muy apretada de los hombros?",
          pronunciation: "I-sent it a bit tait a-KROS da SHOL-ders",
          literal: "¿No es ello un poco apretado a-través los hombros?",
          why: "Donde el español dice “me queda apretada”, el inglés no menciona el “me”: la prenda simplemente “is tight”. Meter un “it stays me tight” es el calco que hay que evitar; el inglés lo resuelve con el verbo “be”."
        },
        {
          speaker: "Megan",
          target: "Not at all, it fits you perfectly. The other store is just around the corner.",
          translation: "Para nada, te queda pintada. La otra tienda queda a la vuelta.",
          pronunciation: "not at OL, it fits yu PER-fekt-li. da A-der stor is yast a-RAUND da COR-ner",
          literal: "No en absoluto, ello ajusta a-ti perfectamente. La otra tienda es justo alrededor la esquina.",
          why: "Dos “quedar” del español se vuelven dos cosas distintas: “it fits you” para la ropa y “the other store is…” para el lugar. Ojo: la ubicación va con “is”, nunca con “stays”, aunque en español fuera “queda”."
        },
        {
          speaker: "Alejandra",
          target: "And where's the other store?",
          translation: "¿Y dónde queda la otra tienda?",
          pronunciation: "and UERS da A-der stor",
          literal: "¿Y dónde-es la otra tienda?",
          why: "“Where's…?” (where is) es la pregunta natural por una ubicación. El “¿dónde queda?” del español no se traduce con “where stays”, un calco que suena imposible al oído angloparlante."
        },
        {
          speaker: "Megan",
          target: "Over on 5th. If you take it, let's say I hold it for you for a bit.",
          translation: "Ahí en la quinta. Si te la llevás, quedamos en que te la aparto un rato.",
          pronunciation: "OU-ver on fifz. if yu teik it, lets sei ai jold it for yu for a bit",
          literal: "Sobre en quinta. Si tú tomas ello, dejemos decir yo sostengo ello para ti por un poco.",
          why: "“Let's say” es el equivalente ligero de “quedamos en”: cierra un acuerdo sin solemnidad. Y “hold it for you” es apartar algo, un uso de “hold” que el español resuelve con “apartar” o “guardar”."
        },
        {
          speaker: "Alejandra",
          target: "Great, but don't let me down — I'll be back at five.",
          translation: "Listo, pero no me vayás a quedar mal, que vuelvo a las cinco.",
          pronunciation: "greit, bat dont let mi DAUN — ail bi bak at faiv",
          literal: "Genial, pero no dejes mí abajo — yo estaré de-vuelta a cinco.",
          why: "“To let someone down” es el “quedar mal” del español: fallarle a quien contaba con uno. No tiene nada que ver con “stay”; el que lo calca como “stay bad with me” se hace entender a duras penas."
        }
      ],
      vocabulary: [
        {
          term: "fit / suit",
          explanation:
            "El inglés parte en dos lo que el español junta en quedar: “fit” es la talla, “suit” es que te favorece.",
          literal: "quedar (de talla) / favorecer",
          useWhen:
            "Al hablar de ropa: “it fits” si es la talla, “it suits you” si te ve bien.",
          avoidWhen:
            "Para ubicaciones. El “quedar” de lugar no es “fit” ni “suit”; eso es “to be” o “to be located”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["fit", "suit", "look good on", "go with"],
          example: {
            target: "That jacket really suits you.",
            translation: "Esa chaqueta te queda buenísima."
          }
        },
        {
          term: "it suits you",
          explanation:
            "“Te queda bien / te favorece.” Se dice de la ropa que te ve bien, no solo de la que te entra.",
          literal: "te queda bien",
          useWhen:
            "Al elogiar cómo se le ve una prenda a alguien.",
          avoidWhen:
            "Cuando solo quiere decir que es de la talla correcta; para eso es “it fits”.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["it looks good on you", "it fits you", "that's a good look", "it flatters you"],
          example: {
            target: "It fits you perfectly.",
            translation: "Te queda pintada."
          }
        },
        {
          term: "where's the…?",
          explanation:
            "La forma normal de preguntar por la ubicación de un lugar fijo. Hace el trabajo del “¿dónde queda?”.",
          literal: "¿dónde está el…?",
          useWhen:
            "Al preguntar dónde está una tienda, un baño, una calle.",
          avoidWhen:
            "Con el calco “where stays”: no existe. La ubicación en inglés va siempre con “be”.",
          register: "neutral",
          region: "Inglés universal; “whereabouts is it?” es más británico y estadounidense.",
          related: ["whereabouts is it?", "where is it?", "how do I get there?", "which way is it?"],
          example: {
            target: "Where's the other store?",
            translation: "¿Dónde queda la otra tienda?"
          }
        },
        {
          term: "let's say",
          explanation:
            "“Quedamos en.” Fija un acuerdo o una hora de forma ligera: “let's say five”.",
          literal: "digamos / quedamos en",
          useWhen:
            "Al cerrar un plan o proponer una hora sin ceremonia.",
          avoidWhen:
            "Para un compromiso formal por escrito; ahí sería “we agree that…”.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["let's make it", "we agreed on", "we said", "how about"],
          example: {
            target: "Let's say I hold it for you.",
            translation: "Quedamos en que te la aparto."
          }
        },
        {
          term: "to let someone down",
          explanation:
            "“Quedarle mal a alguien.” Fallarle a quien contaba con uno; un pecado social, no una molestia física.",
          literal: "dejar caer a alguien",
          useWhen:
            "Cuando no cumple algo que prometió y decepciona a otro.",
          avoidWhen:
            "Para sentirse enfermo; eso es “to feel unwell / sick”, algo completamente distinto.",
          register: "neutral",
          region: "Inglés universal; “to flake” es una versión más coloquial.",
          related: ["to flake", "to bail on", "to disappoint", "to leave someone hanging"],
          example: {
            target: "Don't let me down.",
            translation: "No me quedés mal."
          }
        },
        {
          term: "to be supposed to",
          explanation:
            "“Quedar de / tener que.” Marca algo que uno acordó o que se espera que haga.",
          literal: "estar supuesto a",
          useWhen:
            "Al recordar un compromiso: “I'm supposed to be back at five”.",
          avoidWhen:
            "Para una obligación fuerte y sin margen; ahí es “I have to”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["I'm meant to", "I said I would", "I'm expected to", "I have to"],
          example: {
            target: "I'm supposed to be back at five.",
            translation: "Quedé de volver a las cinco."
          }
        },
        {
          term: "try on",
          explanation:
            "“Medirse / probarse” una prenda. El “on” es imprescindible: sin él, “try” es solo intentar.",
          literal: "probar puesto",
          useWhen:
            "Al ponerse ropa en la tienda para ver cómo queda.",
          avoidWhen:
            "Sin el “on”: “try the jacket” suena a probar suerte con ella, no a medírsela.",
          register: "neutral",
          region: "Inglés universal; “the fitting room” es el probador.",
          related: ["fitting room", "changing room", "give it a try", "slip it on"],
          example: {
            target: "Try that one on.",
            translation: "Medíte esa."
          }
        }
      ],
      note:
        "Lo más útil aquí es que el inglés reparte el enorme “quedar” en piezas distintas: la ropa “fits” o “suits you”, un lugar “is” en tal parte, un plan se cierra con “let's say”, y fallarle a alguien es “to let them down”. Y cuidado con el calco más común: “quedarse” de permanecer es “to stay”, pero casi ningún otro “quedar” se dice con “stay”. Traducir todos los “quedar” por “stay” es el error estrella.",
      culture: [
        {
          label: "El precio con etiqueta no se regatea",
          body:
            "En una tienda de cadena estadounidense, el precio de la etiqueta es el precio, y ponerse a regatear como en El Hueco desconcierta al vendedor. El descuento existe, pero llega por rebajas, cupones o temporadas de “sale”, no por pedirlo de frente. Preguntar “is there any discount?” no ofende, pero tampoco abre el tira y afloje cálido del comercio popular colombiano. Aquí el margen está en esperar la promoción, no en negociar en la caja."
        },
        {
          label: "“Just looking” es su escudo",
          body:
            "Apenas uno entra, el vendedor saluda y pregunta “are you finding everything okay?”. No es presión de venta: es cortesía de rutina. La respuesta mágica es “I'm just looking, thanks”, que le dice con toda amabilidad que quiere mirar en paz. Nadie lo tomará a mal ni lo perseguirá por la tienda. Para un colombiano acostumbrado al vendedor que no suelta, esa frasecita es una liberación que conviene aprender temprano."
        },
        {
          label: "La cultura de la devolución",
          body:
            "En Estados Unidos es normal comprar, llevarse la prenda y devolverla en unos días si no convence, siempre con el recibo y dentro del plazo. Guardar el “receipt” es un hábito casi sagrado. Esto cambia la manera de comprar: uno puede arriesgarse con una talla porque devolver es fácil y esperado. En buena parte de Colombia la devolución es más difícil, así que aquí conviene aprovechar esa red de seguridad sin culpa."
        },
        {
          label: "Las reglas del probador",
          body:
            "El “fitting room” suele tener a alguien que cuenta cuántas prendas entran y a veces entrega un número. Uno se mide, sale, y deja lo que no lleva en un perchero o con el encargado. Es ordenado y silencioso, sin la chercha del local paisa. Saber que puede pedir otra talla — “could you get me the next size up?” — y que se la traen sin problema hace toda la experiencia más fácil."
        }
      ],
      pitfalls: [
        {
          mistake: "“It stays me good.”",
          whyItFails:
            "El “quedar” de la ropa no es “stay”. Se dice “it fits me” (talla) o “it suits me” (me favorece). “It stays me good” calca el español palabra por palabra y no significa nada en inglés.",
          sayInstead: "It fits me well. / It suits me."
        },
        {
          mistake: "“Where stays the other store?”",
          whyItFails:
            "La ubicación en inglés va con “be”, no con “stay”. “Where stays…” es la traducción literal de “¿dónde queda?” y suena imposible. La pregunta natural es “where is…?”.",
          sayInstead: "Where's the other store?"
        },
        {
          mistake: "“He stayed bad with me.”",
          whyItFails:
            "“Quedar mal” es “to let someone down”, no “stay bad”. El calco no se entiende: “stay bad with me” no comunica que alguien le falló. El inglés lo dice con “let down” o “flake”.",
          sayInstead: "He let me down. / He flaked on me."
        },
        {
          mistake: "“We stayed at five.”",
          whyItFails:
            "Acordar una hora es “we agreed on five” o “let's say five”. “We stayed at five” significa que se alojaron o se quedaron en el número cinco, un sentido por completo distinto del que buscaba.",
          sayInstead: "We agreed on five. / We said five."
        }
      ],
      variations: [
        {
          form: "That jacket suits you.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para elogiar cómo se le ve la prenda a alguien."
        },
        {
          form: "It fits perfectly.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para decir que la talla es exacta, al margen del estilo."
        },
        {
          form: "Where's the other store?",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para preguntar por la ubicación de un lugar fijo."
        },
        {
          form: "Let's say five, then.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Para cerrar sin ceremonia la hora de un plan."
        },
        {
          form: "Don't let me down.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Para pedirle a alguien, medio en broma, que no le falle."
        }
      ],
      prompt: "Megan says the other store is “just around the corner.” ¿Qué le está diciendo a Alejandra?",
      choices: [
        "Que la otra sucursal acaba de mudarse y que muy pronto quedará en algún punto a la vuelta de la esquina.",
        "Que la chaqueta que se está midiendo le va a quedar bastante mejor cuando camine un poco con ella puesta.",
        "Que la otra sucursal está ubicada justo a la vuelta — en inglés la ubicación se dice con “is”, no con “stay”."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "¿Por qué dice Alejandra “don't let me down”?",
          choices: [
            "Le pide a Megan que no le falle — que de verdad le guarde la chaqueta tal como se lo acaba de prometer.",
            "Le advierte a Megan que la chaqueta le queda mal y que seguramente no la va a terminar comprando al final.",
            "Le dice a Megan que se siente indispuesta y que necesita sentarse un rato antes de seguir comprando en la tienda."
          ],
          answer: 0,
          tests: "let down como fallarle a alguien"
        },
        {
          prompt: "Alejandra quiere preguntar dónde está la otra tienda. ¿Cuál es natural en inglés?",
          choices: [
            "Where stays the other store?",
            "Where's the other store?",
            "Where it stays the other store?"
          ],
          answer: 1,
          tests: "where is para ubicación, sin el calco stay"
        },
        {
          prompt: "¿A qué se compromete Megan con “let's say I hold it for you”?",
          choices: [
            "A bajarle a la chaqueta el precio en una cantidad fija si Alejandra decide volver más tarde por ella.",
            "A quedarse dentro de la tienda esperando junto a la puerta hasta que Alejandra por fin regrese a las cinco.",
            "A un acuerdo — “quedamos en” — de apartarle la chaqueta y guardársela hasta que ella vuelva por ella."
          ],
          answer: 2,
          tests: "let's say como cerrar un acuerdo"
        },
        {
          prompt: "¿Cuál dice correctamente que la chaqueta le queda bien?",
          choices: [
            "The jacket fits me really well.",
            "The jacket stays me really well.",
            "The jacket suits me to stay well."
          ],
          answer: 0,
          tests: "fit/suit frente al calco stay de quedar"
        }
      ]
    }
  },
  {
    id: "wondering-if-the-parade-is-canceled",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "plans-and-time",
    register: "familiar",
    pathways: ["foundation"],
    verb: "creer",
    review: "pending",
    es: {
      title: "Dudar si se cancela el desfile",
      situation:
        "Es Carnaval en Barranquilla y Alex está en la calle esperando la Batalla de Flores con su amiga Kelly. El cielo se pone negro y Alex teme que se dañe el desfile. Kelly, costeña y curtida en carnavales, no cree que pase nada. Todo se juega entre lo que uno cree y lo que otro duda.",
      setting: {
        who: "Kelly was born in Barranquilla and has not missed a Carnival in her life; to her the rain is part of the scenery. Alex is her foreign friend, at his first Carnival and unsure whether to stay or run for cover.",
        what: "A chat at the edge of the parade route while they wait for it to start and a downpour threatens.",
        when: "A Carnival Saturday, mid-morning, with a sticky heat and storm clouds hanging overhead.",
        where: "Barranquilla, on the Vía 40, among grandstands, costumes and vendors selling water and beer.",
        why: "Because Alex can't read the weather or the mood of Carnival, and Kelly can. If he lets the fear of rain get the better of him, he misses exactly what he came to see; believing her is part of learning the city."
      },
      address: {
        form: "tú",
        who: "Kelly and Alex use tú with each other, as is normal between young friends on the coast.",
        why: "In Barranquilla and much of the Caribbean coast, tú is the natural ground of familiarity, far more than Bogotá's usted or Medellín's vos. Between friends, the coastal tú is warm, quick and without ceremony.",
        ifYouSwitch:
          "Using usted with Kelly would suddenly sound distant, almost like annoyance or mockery. On the coast, switching to usted between friends tends to mark irritation or irony, so tú is what keeps the tone light."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Uf, esas nubes tan negras… Creo que se va a dañar el desfile.",
          translation: "Ugh, those clouds are so black… I think the parade's going to get ruined.",
          pronunciation: "oof, EH-sas NOO-bes tan NEH-gras… KREH-o ke se va a da-NYAR el des-FEE-le",
          literal: "Ugh, those clouds so black… I-believe that itself goes to spoil the parade.",
          why: "“Creo que” plus the indicative (“se va a dañar”) states an opinion you actually hold. When you believe something is likely, the verb after creo que stays in the indicative — the doubt only comes later, when Kelly negates it."
        },
        {
          speaker: "Kelly",
          target: "¿Tú crees? Ombe, no creo que llueva; esto siempre despeja.",
          translation: "You think? Come on, I don't think it'll rain; this always clears up.",
          pronunciation: "too KREH-es? OM-be, no KREH-o ke YWEH-va; EH-sto SYEM-pre des-peh-HA",
          literal: "You believe? Man, not I-believe that it-rains; this always clears.",
          why: "The pivot of the lesson: “no creo que” flips the verb into the subjunctive (“llueva”, not “llueve”), because negated belief signals doubt. “Ombe” is a costeño filler, roughly “man / come on”."
        },
        {
          speaker: "Alex",
          target: "¿Entonces no van a cancelar la Batalla de Flores?",
          translation: "So they're not going to cancel the Batalla de Flores?",
          pronunciation: "en-TON-ses no van a kan-se-LAR la ba-TA-ya de FLO-res",
          literal: "Then not they-go to cancel the Battle of Flowers?",
          why: "A straightforward check with no creer in it, giving the dialogue room to breathe. The Batalla de Flores is the opening parade of Barranquilla's Carnival, so the stakes of the weather are high for Alex."
        },
        {
          speaker: "Kelly",
          target: "¡No creo! Aquí el Carnaval no lo para ni un aguacero. Créeme.",
          translation: "No way! Carnival here isn't stopped by a downpour. Trust me.",
          pronunciation: "no KREH-o! a-KEE el kar-na-VAL no lo PA-ra ni oon a-gwa-SEH-ro. KREH-e-me",
          literal: "Not I-believe! Here the Carnival not it stops nor a downpour. Believe-me.",
          why: "“¡No creo!” on its own is an emphatic “no way”, confident rather than hesitant. “Créeme” is the tú imperative of creer with the object pronoun attached — a personal guarantee that seals her reassurance."
        },
        {
          speaker: "Alex",
          target: "¿De verdad crees que vale la pena seguir esperando?",
          translation: "Do you really think it's worth carrying on waiting?",
          pronunciation: "de ver-DAD KREH-es ke VA-le la PEH-na se-GEER es-peh-RAN-do",
          literal: "Of truth you-believe that it-is-worth the pain to-keep waiting?",
          why: "“¿Crees que…?” with the indicative asks for her genuine opinion. Because the belief is being affirmed, not denied, the verb after it (“vale”) stays indicative — the mirror image of her earlier “no creo que llueva”."
        },
        {
          speaker: "Kelly",
          target: "Claro que sí. Yo creo en este Carnaval con toda el alma; ya vas a ver.",
          translation: "Of course. I believe in this Carnival with all my heart; you'll see.",
          pronunciation: "KLA-ro ke see. yo KREH-o en EH-ste kar-na-VAL kon TO-da el AL-ma; ya vas a ver",
          literal: "Clear that yes. I believe in this Carnival with all the soul; already you-go to see.",
          why: "“Creer en” — to believe in — is a different creer from opinion: it is faith or trust in something, not a guess about a fact. “Creo en este Carnaval” expresses conviction, where “creo que” would only have offered a view."
        }
      ],
      vocabulary: [
        {
          term: "creer",
          explanation:
            "The all-purpose verb for both “to think / to reckon” (an opinion) and “to believe” (a conviction). Spanish folds into creer what English splits between think and believe, so context decides which English word fits.",
          literal: "to believe",
          useWhen:
            "Any time you give a view or state a belief: creo que sí, no lo creo, ¿tú crees?, creo en ti. It is one of the most common verbs in everyday Colombian talk.",
          avoidWhen:
            "Reflexively as creerse when you only mean an opinion. Creérsela / creerse algo means to be gullible or full of oneself, which is not what plain creer says.",
          register: "neutral",
          region: "Universal across Colombia; the coast just says it faster and drops the final -r.",
          related: ["pensar", "opinar", "parecer", "suponer"],
          example: {
            target: "Yo creo que sí.",
            translation: "I think so."
          }
        },
        {
          term: "creo que + indicativo",
          explanation:
            "To voice an opinion you actually hold, follow creo que with the indicative: creo que llueve, creo que vale la pena. Affirmed belief keeps the second verb in the indicative — the mood of things you take to be real.",
          literal: "I-believe that + indicative",
          useWhen:
            "Stating what you reckon is true: creo que se va a dañar, creo que está abierto. It is the everyday way to hedge a statement as your view rather than a fact.",
          avoidWhen:
            "After negating it. Once you say no creo que, the indicative is wrong and you must switch to the subjunctive.",
          register: "neutral",
          region: "Universal Colombian.",
          related: ["creo que sí", "me parece que", "pienso que", "para mí"],
          example: {
            target: "Creo que se va a dañar el desfile.",
            translation: "I think the parade's going to get ruined."
          }
        },
        {
          term: "no creo que + subjuntivo",
          explanation:
            "Negated belief expresses doubt, and doubt triggers the subjunctive: no creo que llueva, no creo que lo cancelen. This is the single most tested grammar point around creer, and the coast applies it just like the rest of the country.",
          literal: "not I-believe that + subjunctive",
          useWhen:
            "Playing down a worry or a claim: no creo que sea para tanto, no creo que venga. It softens your denial into a considered doubt rather than a flat contradiction.",
          avoidWhen:
            "With the indicative. “No creo que llueve” is the classic learner error; it must be “llueva”.",
          register: "neutral",
          region: "Universal Colombian.",
          related: ["dudo que", "no pienso que", "no creo", "quizás"],
          example: {
            target: "No creo que llueva.",
            translation: "I don't think it'll rain."
          }
        },
        {
          term: "¿tú crees?",
          explanation:
            "A short comeback meaning “you think? / you reckon?”, thrown back at whatever the other person just said. On the coast, said with tú, it carries friendly skepticism rather than a real request for information.",
          literal: "you believe?",
          useWhen:
            "Reacting to a claim you half-doubt: someone predicts disaster and you lob back “¿tú crees?” to gently push back.",
          avoidWhen:
            "As a full formal question; for that you would expand it to ¿tú crees que sí? or, with usted, ¿usted cree?",
          register: "friendly informal",
          region: "Coastal favorite with tú; the interior might say ¿usted cree? or ¿sí?",
          related: ["¿sí?", "¿de verdad?", "¿en serio?", "¿usted cree?"],
          example: {
            target: "¿Tú crees? A mí no me parece.",
            translation: "You think? It doesn't look that way to me."
          }
        },
        {
          term: "¡no creo!",
          explanation:
            "Standing alone, ¡no creo! is an emphatic “no way / I doubt it”, used to bat away a worry with confidence. Tone and context, not the words, tell you whether it is genuine doubt or a cheerful dismissal.",
          literal: "not I-believe!",
          useWhen:
            "Waving off something unlikely: “¿Lo van a cancelar?” — “¡No creo!” It reassures the other person that their fear is overblown.",
          avoidWhen:
            "When you truly are unsure. If you mean a cautious maybe-not, dudo or no estoy seguro carries the hesitation better.",
          register: "friendly informal",
          region: "Universal Colombian; on the coast it often stretches to ¡qué va, no creo!",
          related: ["¡qué va!", "¡para nada!", "lo dudo", "¡nada que ver!"],
          example: {
            target: "¿Cancelar el Carnaval? ¡No creo!",
            translation: "Cancel Carnival? No way!"
          }
        },
        {
          term: "créeme",
          explanation:
            "The tú imperative of creer with the object pronoun attached: “believe me / trust me”. It stamps a personal guarantee on whatever you just said, and among coastal friends it lands warm rather than pushy.",
          literal: "believe-me",
          useWhen:
            "Backing up a promise or a prediction: “Esto escampa en nada, créeme.” It leans on your relationship to make the claim credible.",
          avoidWhen:
            "With usted, where it becomes créame. Mixing créeme with usted forms in the same breath sounds careless.",
          register: "friendly informal",
          region: "Universal; the usted version créame is common in service and formal talk.",
          related: ["créame", "te lo juro", "de verdad", "hazme caso"],
          example: {
            target: "Esto escampa en nada, créeme.",
            translation: "This'll clear up in no time, trust me."
          }
        },
        {
          term: "creer en",
          explanation:
            "Creer plus en means to believe in — to have faith or trust in someone or something — not merely to reckon a fact is true. Creo en ti is “I believe in you”; creo que vienes is just “I think you're coming”.",
          literal: "to believe in",
          useWhen:
            "Expressing conviction, faith or support in someone or something — believing in God, in a project, in a person. It signals commitment and trust, not just a guess about a fact.",
          avoidWhen:
            "For a plain opinion about a fact. There you want creer que, with no en at all.",
          register: "neutral",
          region: "Universal Colombian.",
          related: ["confiar en", "tener fe en", "apostar por", "creer que"],
          example: {
            target: "Yo creo en este Carnaval.",
            translation: "I believe in this Carnival."
          }
        }
      ],
      note:
        "The heart of creer is one contrast: creo que takes the indicative (creo que llueve — an opinion you hold), while no creo que takes the subjunctive (no creo que llueva — a doubt). Beyond grammar, keep three set pieces ready: ¡no creo! as a confident “no way”, créeme as a personal guarantee, and creer en for faith rather than opinion. On the coast, all of this rides on a fast, warm tú.",
      culture: [
        {
          label: "Carnival doesn't stop",
          body:
            "The Barranquilla Carnival, a UNESCO Masterpiece of Humanity, is a force that doesn't halt for a downpour. The saying “Quien lo vive es quien lo goza” — you only enjoy it if you live it — captures the attitude: people take to the street come what may. Coastal rain tends to be heavy and short, so folks wait under an awning, have a beer and carry on. For a visitor, grasping that the plan isn't canceled by the weather is grasping the city itself."
        },
        {
          label: "The coast's tú",
          body:
            "In the Andean interior usted dominates and tú can sound forward; on the Caribbean coast it is the other way round. Barranquilla, Cartagena and Santa Marta live in the tú form — fast and affectionate, sprinkled with “ombe”, “ey” and “¿oíste?”. Switching to usted among coastal friends marks distance or annoyance. Learning to tutear with ease, and to drop the final s of words, is half the ticket to sounding coastal rather than foreign."
        },
        {
          label: "Believing as reassurance",
          body:
            "When a coastal local meets your worry with “¡no creo!”, they are often not weighing the odds: they are reassuring you. On the coast, creer takes on a social optimism — “relax, that won't happen”, “créeme que sí” — aimed more at keeping spirits up than at informing. Taking that “no creo” literally, as if it were a forecast, misses the phrase's real job: to protect the moment and talk you down from your fear."
        },
        {
          label: "Doubt is conjugated",
          body:
            "Spanish encodes in the verb whether you believe something or doubt it: creo que llueve affirms, no creo que llueva doubts, with the subjunctive marking the uncertainty. It is a fine distinction English does not make, which is why English speakers keep missing it. In Colombia, saying “no creo que llueve” will not stop people understanding you, but it flags you as still learning. Mastering that jump into the subjunctive is one sign you are handling the language with ease."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “No creo que llueve.”",
          whyItFails:
            "After “no creo que”, doubt forces the subjunctive: llueva, not llueve. Using the indicative is the classic learner slip and instantly sounds foreign, even though people still understand you.",
          sayInstead: "No creo que llueva."
        },
        {
          mistake: "Saying “Creo así.” as a calque of “I think so”",
          whyItFails:
            "“Creo así” is a word-for-word translation from English that doesn't mean what you intend in Spanish. The fixed formula for “I think so” is “creo que sí”, with the que sí, not with así.",
          sayInstead: "Creo que sí."
        },
        {
          mistake: "Blurting “¿Piensas?” for a surprised “Really?”",
          whyItFails:
            "To push back on what someone says, Spanish wants “¿tú crees?” or “¿en serio?”. A bare “¿Piensas?” sounds odd and unfinished, as if half the sentence had gone missing.",
          sayInstead: "¿Tú crees? / ¿En serio?"
        },
        {
          mistake: "Saying “Me creo que sí.” instead of “Creo que sí.”",
          whyItFails:
            "The reflexive creerse changes the meaning: creérselo is to be gullible or to swallow something whole. For a simple opinion the verb takes no pronoun: “creo que sí”, not “me creo que sí”.",
          sayInstead: "Creo que sí."
        }
      ],
      variations: [
        {
          form: "Creo que sí.",
          register: "neutral",
          region: "Universal Colombian",
          whenToUse: "The default “I think so”, affirming something with a little reserve."
        },
        {
          form: "No creo que sea para tanto.",
          register: "neutral",
          region: "Universal Colombian",
          whenToUse: "Playing down a worry, with the subjunctive (sea) after no creo que."
        },
        {
          form: "¿Tú crees?",
          register: "friendly informal",
          region: "Caribbean coast",
          whenToUse: "Pushing back with friendly skepticism, using the coastal tú."
        },
        {
          form: "¡Qué va, no creo!",
          register: "friendly informal",
          region: "Universal Colombian",
          whenToUse: "Dismissing a fear emphatically, almost cheerfully."
        },
        {
          form: "Créeme que sí.",
          register: "friendly informal",
          region: "Universal Colombian",
          whenToUse: "Insisting on a claim by staking your word on it."
        }
      ],
      prompt: "Kelly says “No creo que llueva.” Why “llueva” and not “llueve”?",
      choices: [
        "Because after “no creo que” Colombian Spanish just prefers the older-sounding verb ending whenever the topic happens to be the weather.",
        "Because “no creo que” expresses doubt, and doubt pushes the following verb into the subjunctive, so llueve becomes llueva.",
        "Because “llueva” is actually a separate verb from llover and is the one reserved specifically for heavy tropical coastal storms."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Alex asks “¿No van a cancelar?” and Kelly answers “¡No creo!” What does she mean?",
          choices: [
            "That nobody has told her anything either way, so she honestly has no idea whether the parade is canceled or not.",
            "That she does in fact expect them to call it off and is gently bracing Alex for the disappointing news.",
            "That she strongly doubts it — here “¡No creo!” is a confident “no way”, reassurance rather than a careful hedge."
          ],
          answer: 2,
          tests: "¡no creo! as an emphatic no way"
        },
        {
          prompt: "Which sentence correctly says “I don't think it'll rain”?",
          choices: [
            "No creo que llueva.",
            "No creo que llueve.",
            "No pienso que llueve."
          ],
          answer: 0,
          tests: "subjunctive after no creo que"
        },
        {
          prompt: "Alex wants to say “I think so.” What should he say?",
          choices: [
            "Creo así, como tú dices.",
            "Creo que sí.",
            "Me creo que sí."
          ],
          answer: 1,
          tests: "creo que sí, not a calque or the reflexive creerse"
        },
        {
          prompt: "What does Kelly's “Yo creo en este Carnaval” express?",
          choices: [
            "That she reckons the Carnival will probably still go ahead in spite of the very threatening black clouds overhead.",
            "That she isn't fully sure the Carnival is real and would like Alex to confirm for her that it genuinely exists.",
            "Faith in it — “creer en” is to believe in something, not just to reckon that some fact is the case."
          ],
          answer: 2,
          tests: "creer en (to believe in) versus creer que (to think that)"
        }
      ]
    },
    en: {
      title: "Preguntarse si se cancela el festival",
      situation:
        "Alejandra está en un festival de música al aire libre en Houston con su amigo estadounidense Dylan, esperando el acto principal. El cielo se pone negro y ella está segura de que van a cancelar el show. Dylan, que ha ido a muchos de estos, no cree que sea para tanto. Todo se juega entre lo que uno cree y lo que el otro duda — en inglés, sin el subjuntivo en el que apoyarse.",
      setting: {
        who: "Dylan creció en Houston y ha aguantado más de un festival pasado por agua; para él la lluvia es parte del día. Alejandra es su amiga colombiana, recién llegada, sin saber si quedarse quieta o correr a resguardarse.",
        what: "Una charla al borde de la cancha mientras esperan al artista principal y amenaza un aguacero.",
        when: "Un sábado de verano, a media tarde, bochornoso y gris con nubes de tormenta acercándose.",
        where: "Houston, en el recinto del festival, entre food trucks, ponchos y gente mirando la app del clima.",
        why: "Porque Alejandra todavía no sabe leer el clima local ni el ánimo de la multitud, y Dylan sí. Confiar en su lectura — y decirlo en inglés natural — es parte de aprender cómo funciona la ciudad."
      },
      address: {
        form: "mixed",
        who: "Alejandra y Dylan son amigos de confianza y hablan sin formalidades, pero el inglés solo les da una palabra para “you”.",
        why: "El inglés no tiene la división tú/usted, así que no puede marcar la cercanía con el pronombre. El registro lo carga el léxico: “no way”, “trust me” y contracciones como “it'll” marcan lo informal, mientras que “I don't think so” o “are you certain?” subirían el tono. La relación se ve en la elección de palabras, no en el pronombre.",
        ifYouSwitch:
          "Para sonar más cálido o más frío, el inglés cambia el vocabulario y las contracciones, no los pronombres. “Nah, no way” es suelto y amistoso; “I really don't think so” es medido; “I doubt that will occur” es tieso y formal. El mismo “you” en todo — solo se mueven las palabras de alrededor."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Ugh, those black clouds… I think the show's going to get rained out.",
          translation: "Uf, esas nubes negras… Creo que el show se va a dañar por la lluvia.",
          pronunciation: "ag, dous blak claudz… ai zink de shous góing tu guet réind áut",
          literal: "Uf, esas negras nubes… yo pienso el show va a conseguir llovido-afuera.",
          why: "“I think” + una oración simple es como el inglés matiza una opinión: sin subjuntivo y sin “that yes”. “Rained out” es el phrasal fijo para un evento al aire libre cancelado por la lluvia; conviene memorizarlo como un bloque entero."
        },
        {
          speaker: "Dylan",
          target: "You think? Nah, I don't think it'll rain — it always blows over.",
          translation: "¿Tú crees? Nah, no creo que llueva; siempre escampa.",
          pronunciation: "yu zink? na, ai dont zink itl réin — it ól-ueis blóus óu-ver",
          literal: "¿Tú piensas? Nah, yo no pienso ello-va llover — ello siempre sopla sobre.",
          why: "Dos claves: “You think?” es la réplica corta y escéptica de “¿tú crees?”, y el inglés niega el primer verbo — “I don't think it'll rain” — donde el español metería la duda en un subjuntivo. “Blows over” significa que algo pasa sin problema."
        },
        {
          speaker: "Alejandra",
          target: "So they won't cancel the parade?",
          translation: "¿Entonces no van a cancelar el desfile?",
          pronunciation: "sou dei uóunt kán-sel de pa-réid?",
          literal: "¿Así ellos no-van cancelar el desfile?",
          why: "“Won't” es la contracción de “will not” — la forma normal de preguntar por una decisión futura. El inglés se apoya en will/won't para el futuro justo donde el español muchas veces usa el presente (van a cancelar)."
        },
        {
          speaker: "Dylan",
          target: "No way! This city doesn't stop for a bit of rain. Trust me.",
          translation: "¡No creo! Esta ciudad no se para por cuatro gotas. Créeme.",
          pronunciation: "nóu uéi! dis SÍ-ti da-sent stop for a bit of réin. trast mi",
          literal: "¡No manera! Esta ciudad no-hace parar por un poco de lluvia. Confía-en-mí.",
          why: "“No way!” es el equivalente confiado de “¡no creo!” — un descarte, no una duda. “Trust me” corresponde a “créeme”, una garantía personal. “A bit of rain” le baja el peso al clima, como los costeños le restan importancia a un aguacero."
        },
        {
          speaker: "Alejandra",
          target: "Do you really think it's worth waiting around?",
          translation: "¿De verdad crees que vale la pena seguir esperando?",
          pronunciation: "du yu RÍ-li zink its uérz UÉI-ting a-ráund?",
          literal: "¿Haces tú realmente pensar ello-es valor esperando alrededor?",
          why: "Una pregunta de verdad necesita el auxiliar “do”: “Do you think…?”, no “You think…?”. “Worth waiting around” usa worth + la forma en -ing — waiting, no to wait — un patrón que enreda a los hispanohablantes."
        },
        {
          speaker: "Dylan",
          target: "Absolutely. I believe in this festival — you'll see.",
          translation: "Claro que sí. Yo creo en este festival; ya vas a ver.",
          pronunciation: "ab-so-LÚT-li. ai bi-LÍV in dis FÉS-ti-val — yul si",
          literal: "Absolutamente. Yo creo en este festival — tú-verás ver.",
          why: "Aquí el inglés sí separa lo que el español deja en un solo verbo: “believe in” es fe o confianza, distinto de “think”. “I believe in this festival” expresa convicción, donde “I think…” solo daría una opinión."
        }
      ],
      vocabulary: [
        {
          term: "believe / think",
          explanation:
            "El inglés separa lo que el español junta en creer: “think” es opinar (“I think it'll rain”) y “believe” es tener por cierto o tener fe (“I believe you”). Elegir mal suena raro, así que conviene fijar cuál va con qué.",
          literal: "creer / pensar",
          useWhen:
            "“Think” para opiniones y suposiciones; “believe” para convicción, fe o dar por verdad lo que alguien dice.",
          avoidWhen:
            "En presente continuo. Son verbos de estado: “I am thinking that…” o “I am believing you” suenan mal; van en presente simple.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["think", "believe", "reckon", "guess"],
          example: {
            target: "I think the show's going to get rained out.",
            translation: "Creo que el show se va a dañar por la lluvia."
          }
        },
        {
          term: "I think so",
          explanation:
            "El equivalente de “creo que sí”: una afirmación breve y con reserva. Cuidado — es “so”, no “yes”. El calco “I think that yes” no existe en inglés.",
          literal: "yo pienso así",
          useWhen:
            "Al responder que uno cree que sí sin total certeza: “Is it still on?” — “I think so.”",
          avoidWhen:
            "Con “that yes”. Y para negar, el inglés dice “I don't think so”, no “I think not”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["I don't think so", "I guess so", "I believe so", "probably"],
          example: {
            target: "Is it still on? I think so.",
            translation: "¿Sigue en pie? Creo que sí."
          }
        },
        {
          term: "I don't think…",
          explanation:
            "El modo inglés de decir “no creo que…”: se niega el primer verbo (“don't think”) y el segundo va en futuro con “will”, sin ningún subjuntivo. La duda no cambia la forma del verbo que sigue.",
          literal: "yo no pienso…",
          useWhen:
            "Al expresar duda sobre algo futuro: “I don't think it'll rain”, “I don't think they'll cancel”.",
          avoidWhen:
            "Negando el segundo verbo. El inglés prefiere “I don't think it will” a “I think it won't”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["I doubt", "I don't reckon", "I don't believe", "I don't think so"],
          example: {
            target: "I don't think it'll rain.",
            translation: "No creo que llueva."
          }
        },
        {
          term: "you think?",
          explanation:
            "Una réplica corta, “¿tú crees?”, que se le devuelve a alguien con escepticismo amable. Se dice sin el auxiliar “do”, lo que la vuelve informal y reactiva.",
          literal: "¿tú piensas?",
          useWhen:
            "Al reaccionar con duda ante lo que otro afirma: predice un desastre y uno suelta “you think?”.",
          avoidWhen:
            "Como pregunta formal completa; para eso sería “do you think so?”, con el auxiliar.",
          register: "friendly informal",
          region: "Inglés universal; “you reckon?” es más británico y estadounidense.",
          related: ["you reckon?", "really?", "do you think so?", "are you sure?"],
          example: {
            target: "You think? It always blows over.",
            translation: "¿Tú crees? Siempre escampa."
          }
        },
        {
          term: "no way!",
          explanation:
            "El “¡no creo! / ¡qué va!” del inglés: un rechazo enfático y confiado, no una duda prudente. El tono y el contexto dicen si es incredulidad real o un descarte alegre.",
          literal: "ninguna manera",
          useWhen:
            "Al descartar algo con fuerza, medio en broma: “Cancel it? No way!”",
          avoidWhen:
            "Cuando de verdad no está seguro; ahí van “I doubt it” o “probably not”, más suaves.",
          register: "friendly informal",
          region: "Inglés universal.",
          related: ["I doubt it", "not a chance", "as if", "no chance"],
          example: {
            target: "Cancel it? No way!",
            translation: "¿Cancelarlo? ¡No creo!"
          }
        },
        {
          term: "trust me",
          explanation:
            "El “créeme” inglés: un sello de garantía personal sobre lo que uno acaba de afirmar. Se apoya en la relación para volver creíble la promesa o la predicción.",
          literal: "confía en mí",
          useWhen:
            "Al reforzar una promesa o un pronóstico: “It won't rain, trust me”.",
          avoidWhen:
            "Con desconocidos en asuntos serios, donde puede sonar a vendedor y lograr lo contrario de la confianza.",
          register: "friendly informal",
          region: "Inglés universal; “believe me” es un poco más marcado.",
          related: ["believe me", "take my word for it", "I promise", "you'll see"],
          example: {
            target: "This city doesn't stop for rain. Trust me.",
            translation: "Esta ciudad no se para por la lluvia. Créeme."
          }
        },
        {
          term: "believe in",
          explanation:
            "“Creer en”: tener fe o confianza en algo o alguien, no solo opinar que un hecho es cierto. “I believe you” es darte la razón; “I believe in you” es confiar en ti.",
          literal: "creer en",
          useWhen:
            "Al expresar convicción o apoyo: “I believe in this festival”, “I believe in you”.",
          avoidWhen:
            "Para una simple opinión sobre un hecho; eso es “I think”, sin el “in”.",
          register: "neutral",
          region: "Inglés universal.",
          related: ["have faith in", "believe in yourself", "count on", "back"],
          example: {
            target: "I believe in this festival.",
            translation: "Yo creo en este festival."
          }
        }
      ],
      note:
        "Lo más útil aquí es no confundir “think” y “believe”: para opinar se usa think (“I think it'll rain”) y para la convicción o la fe, believe (“I believe you”, “I believe in this”). Además, la duda en inglés no lleva subjuntivo: “no creo que llueva” es simplemente “I don't think it'll rain”, con la negación en el primer verbo y el futuro en “will”. Y “creo que sí” es “I think so”, nunca “I think that yes”.",
      culture: [
        {
          label: "Los eventos al aire libre y el clima",
          body:
            "En Estados Unidos, un festival al aire libre tiene su plan para la lluvia: carpas, protocolos y un anuncio oficial si de verdad se cancela, que llega por la app o la página del evento. La gente consulta el radar del clima en el teléfono antes de decidir. Es otra lógica frente al “el Carnaval no se para”: aquí sí se suspende si hay tormenta eléctrica, por seguridad, y nadie lo toma como una traición a la fiesta."
        },
        {
          label: "El clima como tema de charla",
          body:
            "En Estados Unidos el clima es el tema de conversación por defecto, el lubricante social que rompe el hielo con cualquiera. Comentar “looks like rain” o “crazy weather, eh?” no es quejarse: es una forma amable de conectar. Para un colombiano puede parecer vacío hablar tanto del tiempo, pero dominar ese pequeño ritual — y responder con naturalidad — es una vía rápida para caer bien y sonar local en la fila, el bus o el ascensor."
        },
        {
          label: "“Trust me” con medida",
          body:
            "Aunque “trust me” traduce bien a “créeme”, en inglés y entre desconocidos puede sonar a vendedor o levantar sospecha, justo lo contrario de lo que uno busca. La confianza se muestra más con datos y calma que con la frase suelta. Entre amigos, como Dylan con Alejandra, funciona perfecto y suena cálido; con un extraño en un negocio serio, conviene cambiarla por algo como “I promise” o simplemente respaldar lo que se dice con hechos."
        },
        {
          label: "Puntualidad y confirmaciones",
          body:
            "Los eventos en Estados Unidos suelen empezar a la hora anunciada, y la gente confirma asistencia — el famoso RSVP — y revisa fuentes oficiales antes de moverse. Esa cultura de la puntualidad y la planeación contrasta con la flexibilidad horaria colombiana, donde “ahí nos vemos” admite un margen amplio. Para Alejandra, ajustarse a que “a las siete” significa las siete, y a que un correo de cancelación es la última palabra, es parte de leer bien el país."
        }
      ],
      pitfalls: [
        {
          mistake: "“I am believing you.”",
          whyItFails:
            "“Believe” es un verbo de estado y no va en presente continuo. La forma correcta es el presente simple, “I believe you”. El continuo suena tan raro como decir “te estoy creyendo” fuera de contexto.",
          sayInstead: "I believe you."
        },
        {
          mistake: "“I think that yes.”",
          whyItFails:
            "Es un calco directo del español que en inglés no existe. La fórmula fija es “I think so”, con “so” y sin “that yes”. El oyente entiende, pero delata de inmediato al que traduce palabra por palabra.",
          sayInstead: "I think so."
        },
        {
          mistake: "“I don't think that it rains tomorrow.”",
          whyItFails:
            "Para una predicción el inglés necesita el futuro con “will”: “I don't think it'll rain tomorrow”. El presente “it rains” sirve para hábitos, no para mañana, y no hay subjuntivo que rescate la frase.",
          sayInstead: "I don't think it'll rain tomorrow."
        },
        {
          mistake: "“I don't want to assist to the parade.”",
          whyItFails:
            "“Assist” es un falso amigo: significa ayudar, no asistir. Asistir a un evento es “attend” o, más informal, “go to”. Además “attend” no lleva “to” antes del complemento.",
          sayInstead: "I don't want to go to the parade. / to attend the parade."
        }
      ],
      variations: [
        {
          form: "I think so.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para afirmar algo con reserva; el negativo es “I don't think so”."
        },
        {
          form: "I don't think it'll rain.",
          register: "neutral",
          region: "Inglés universal",
          whenToUse: "Para expresar duda sobre el futuro, con “will” y sin subjuntivo."
        },
        {
          form: "You think?",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Para reaccionar con escepticismo amable, sin el auxiliar “do”."
        },
        {
          form: "No way!",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Para descartar algo con fuerza y confianza."
        },
        {
          form: "Trust me.",
          register: "friendly informal",
          region: "Inglés universal",
          whenToUse: "Para sellar una promesa o una predicción con tu palabra."
        }
      ],
      prompt: "Dylan says “I don't think it'll rain.” ¿Por qué “it'll rain” y no “it rains”?",
      choices: [
        "Porque después de “I don't think” el inglés prefiere siempre el presente simple para hablar de cualquier fenómeno del clima.",
        "Porque es una predicción a futuro, y el inglés marca el futuro con “will”, a diferencia del español, que aquí usa el presente.",
        "Porque “it'll rain” e “it rains” significan cosas por completo distintas y solo la primera se refiere de verdad a la lluvia."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Alejandra asks “So they won't cancel?” and Dylan answers “No way!” ¿Qué quiere decir?",
          choices: [
            "Que a él tampoco le han dicho nada y de verdad no tiene ni idea de si el evento se cancela o no.",
            "Que él sí espera que lo suspendan y está preparando poco a poco a Alejandra para la mala noticia.",
            "Que lo duda muchísimo — aquí “no way” es un “para nada” lleno de confianza, no una duda prudente."
          ],
          answer: 2,
          tests: "no way como negación enfática"
        },
        {
          prompt: "¿Cuál dice correctamente “no creo que llueva” en inglés?",
          choices: [
            "I don't think it'll rain.",
            "I don't think that it rains.",
            "I think it won't to rain."
          ],
          answer: 0,
          tests: "I don't think + will, sin subjuntivo ni calco"
        },
        {
          prompt: "Alejandra quiere decir “creo que sí”. ¿Qué debe decir?",
          choices: [
            "I think yes.",
            "I think so.",
            "I believe yes."
          ],
          answer: 1,
          tests: "I think so frente al calco de creo que sí"
        },
        {
          prompt: "¿Qué expresa el “I believe in this festival” de Dylan?",
          choices: [
            "Que le parece que el festival probablemente seguirá en pie pese a las nubes tan negras y amenazantes de arriba.",
            "Que no está del todo seguro de que el festival sea real y quiere que Alejandra le confirme que de verdad existe.",
            "Fe en él — “believe in” es creer en algo, no solo opinar que un hecho es cierto."
          ],
          answer: 2,
          tests: "believe in (creer en) frente a think (opinar)"
        }
      ]
    }
  });

markSource(lessons, "data/lessons/07-foundation-opinion.js");
