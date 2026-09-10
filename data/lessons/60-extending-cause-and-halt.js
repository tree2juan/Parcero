/*
 * Lesson block: extension / cause and halt.
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
 * The three verbs here — parar, causar and producir — cover stopping, causes
 * and produced effects. The two directions are mirrors: same number of dialogue
 * turns, vocabulary entries, culture notes, pitfalls, variations and practice
 * questions, and the same optional slots filled on the same rows. That is
 * enforced by test/shape.test.js, not by good intentions.
 */
const dl60Dialogue = (speaker, target, translation, pronunciation, literal, why) => ({
  speaker, target, translation, pronunciation, literal, why
});
const dl60Vocab = (term, explanation, literal, useWhen, avoidWhen, register, region, related, target, translation) => ({
  term, explanation, literal, useWhen, avoidWhen, register, region, related, example: { target, translation }
});
const dl60Culture = (label, body) => ({ label, body });
const dl60Pitfall = (mistake, whyItFails, sayInstead) => ({ mistake, whyItFails, sayInstead });
const dl60Variation = (form, register, region, whenToUse) => ({ form, register, region, whenToUse });
const dl60Question = (prompt, choices, answer, tests) => tests ? { prompt, choices, answer, tests } : { prompt, choices, answer };

lessons.push(
  {
    id: "stopping-a-taxi-in-arauca",
    level: "Extending · Stopping and standing",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "courteous",
    pathways: ["extension"],
    verb: "parar",
    review: "pending",
    es: {
      title: "Parar el taxi en Arauca",
      situation:
        "Estás en un taxi en Arauca y necesitas decir dónde parar sin sonar brusco. También oyes sin parar, pararse para levantarse y parar bolas como una forma muy colombiana de decir prestar atención.",
      setting: {
        who: "Maya is riding with a taxi driver who knows the town, and she needs to stop near the riverfront without overshooting the corner.",
        what: "They handle the exact stop, a nonstop phone, standing up to check a sign, and the Colombian idiom parar bolas.",
        when: "Late afternoon, when traffic is moving but the right corner can pass quickly.",
        where: "Arauca, in a taxi near the riverfront, with plain Colombian Spanish rather than invented regional color.",
        why: "Because parar is the word a learner actually needs in a taxi on day one, and its pronominal and idiomatic uses are easy to misread."
      },
      address: {
        form: "usted",
        who: "Maya and the driver use usted because this is a service encounter, even though the tone stays friendly.",
        why: "Usted lets the instruction sound polite instead of bossy. The phrase is still short because taxi instructions need to be quick.",
        ifYouSwitch:
          "Tú would sound too familiar with a driver you just met. Vos would distract from the general Colombian phrasing the lesson needs."
      },
      dialogue: [
        dl60Dialogue("Maya", "Señor, ¿me para en la esquina, por favor?", "Sir, could you stop for me at the corner, please?", "seh-NYOR, meh PAH-rah en lah es-KEE-nah por fah-BOR", "Sir, for-me you-stop at the corner, please?", "This is the highest-value taxi sentence. Me para is polite, practical and very Colombian; the driver understands exactly where the stop is being requested."),
        dl60Dialogue("Taxista", "Claro, le paro después del semáforo.", "Of course, I'll stop for you after the traffic light.", "KLAH-roh, leh PAH-roh des-PWES del seh-MAH-foh-roh", "Of course, for-you I-stop after the traffic-light.", "Le paro mirrors me para. The indirect object makes the stop a service done for the passenger, not just a mechanical halt."),
        dl60Dialogue("Maya", "Perdón, mejor pare aquí; vi el letrero tarde.", "Sorry, better stop here; I saw the sign late.", "per-DON, meh-HOR PAH-reh ah-KEE; bee el leh-TREH-roh TAR-deh", "Sorry, better stop here; I-saw the sign late.", "Pare aquí is the clean usted command. It is short enough to shout safely, but por favor or perdón can soften it when there is time."),
        dl60Dialogue("Taxista", "Tranquila, aquí la gente cambia de idea sin parar.", "No worries, people here change their mind nonstop.", "tran-KEE-lah, ah-KEE lah HEN-teh KAM-byah deh ee-DEH-ah seen pah-RAR", "Calm, here the people change of idea without stopping.", "Sin parar means nonstop. It is not a command; it describes an action that keeps going."),
        dl60Dialogue("Maya", "Me paro un segundo para mirar si es la entrada.", "I'll stand up for a second to check whether it's the entrance.", "meh PAH-roh oon seh-GOON-doh PAH-rah mee-RAR see es lah en-TRAH-dah", "Myself I-stop a second to look if it-is the entrance.", "In Colombia, pararse very often means to stand up. A learner who reads it as stop oneself will misunderstand a lot of everyday talk."),
        dl60Dialogue("Taxista", "Párele bolas al portón azul; ahí es donde todos se bajan.", "Pay attention to the blue gate; that's where everyone gets out.", "PAH-reh-leh BOH-lahs al por-TON ah-SOOL; ah-EE es DON-deh TOH-dos seh BAH-han", "Stop balls to-the gate blue; there is where everyone gets down.", "Parar bolas is a very Colombian idiom for paying attention. It is informal, memorable, and unrelated to actually stopping a ball.")
      ],
      vocabulary: [
        dl60Vocab("parar", "To stop, especially a vehicle, movement, activity, or process. In a taxi it is the verb you actually need.", "to stop", "Use it when asking a driver to stop, saying something stopped, or describing a halt.", "Avoid replacing it with detener in ordinary taxi speech. Detener is understood, but sounds more formal or official.", "neutral", "General Spanish; extremely practical in Colombian taxis.", ["detener", "frenar", "quedarse", "bajarse"], "¿Me para en la esquina?", "Could you stop for me at the corner?"),
        dl60Vocab("¡pare aquí!", "Stop here!, in usted. Short, clear, and usable when the corner is arriving fast.", "stop here", "Use it in a taxi or bus when the exact place matters right now.", "Avoid shouting it bare if there is time to soften the tone with por favor or perdón.", "practical command", "General Colombian Spanish.", ["pare por favor", "me deja aquí", "me para aquí", "aquí está bien"], "¡Pare aquí, por favor!", "Stop here, please!"),
        dl60Vocab("me para en la esquina", "A polite taxi request: stop for me at the corner. The me makes it a service request.", "for me you stop at the corner", "Use it with a driver when you want the stop at a specific corner or landmark.", "Avoid translating the me literally into English. It is natural Spanish politeness, not extra information.", "polite practical", "General Colombian Spanish.", ["me deja en la esquina", "me baja aquí", "pare aquí", "le paro"], "Me para en la esquina, por favor.", "Please stop for me at the corner."),
        dl60Vocab("sin parar", "Nonstop, without stopping, continuously. It describes an action that keeps going.", "without stopping", "Use it for rain, noise, messages, calls, work, or movement that does not let up.", "Avoid reading it as an order. Sin parar is a description, not stop without doing something.", "neutral", "General Spanish.", ["todo el tiempo", "seguido", "de corrido", "continuo"], "Llovió sin parar.", "It rained nonstop."),
        dl60Vocab("pararse", "In Colombia, commonly to stand up or get up from sitting or lying down.", "to stop oneself / stand up", "Use it when someone rises from a seat, bed, taxi seat, or bench.", "Avoid assuming it means to stop oneself. That reading is possible elsewhere, but Colombian everyday speech often means stand up.", "neutral", "Colombian Spanish; Spain often prefers ponerse de pie.", ["levantarse", "ponerse de pie", "estar parado", "sentarse"], "Me paro un segundo.", "I'll stand up for a second."),
        dl60Vocab("parar bolas", "To pay attention. A very Colombian idiom, informal but widely understood.", "to stop balls", "Use it with friends, family, or informal advice when someone needs to notice something.", "Avoid it in formal writing or serious institutional speech. Prestar atención is safer there.", "friendly informal", "Very Colombian Spanish.", ["prestar atención", "poner cuidado", "fijarse", "hacer caso"], "Párele bolas al portón azul.", "Pay attention to the blue gate."),
        dl60Vocab("estar parado", "To be standing, often after someone has gotten up or is waiting on their feet.", "to be stopped / standing", "Use it for body position: a person is standing in a line, doorway, or bus.", "Avoid using it for a stopped machine unless context makes that clear; la máquina está parada has a different sense.", "neutral", "General Spanish with Colombian body-position use.", ["pararse", "de pie", "sentado", "quieto"], "Estoy parado junto al taxi.", "I'm standing next to the taxi.")
      ],
      note:
        "Parar starts with the taxi: me para en la esquina, pare aquí. That is more useful on day one than an abstract definition of stop. From there the verb opens out: sin parar is nonstop, pararse in Colombia often means stand up, and parar bolas is a very Colombian way to say pay attention.",
      culture: [
        dl60Culture("Taxi Spanish is short for a reason", "When the corner is arriving, you do not have time for a perfect textbook sentence. Pare aquí or me para en la esquina is clear, normal and polite enough when your tone is decent."),
        dl60Culture("Pararse is Colombian body language", "In Colombia, me paro often means I stand up. In Spain, ponerse de pie may be the safer textbook phrase. A Colombian listener will not find pararse odd in daily speech."),
        dl60Culture("Parar bolas is informal attention", "Parar bolas is one of those Colombian phrases that sounds strange literally and completely normal socially. It belongs in informal conversation, not in a legal notice."),
        dl60Culture("Arauca without decoration", "The taxi scene puts useful Spanish in Arauca without pretending to teach a local dialect. The regional spread matters, but accurate ordinary speech matters more.")
      ],
      pitfalls: [
        dl60Pitfall("Saying deténgase aquí in an ordinary taxi", "It is grammatical, but it sounds more formal and official than most taxi moments need. Parar is the everyday verb passengers actually use.", "Pare aquí, por favor."),
        dl60Pitfall("Reading me paro as I stop myself", "In Colombian everyday speech, me paro usually means I stand up. If you translate it mechanically, the physical scene becomes confusing.", "Me paro means I stand up in this context."),
        dl60Pitfall("Using parar bolas in formal writing", "The idiom is very Colombian and useful, but it is informal. In a report, instruction sheet, or complaint, prestar atención will travel better.", "Preste atención al portón azul."),
        dl60Pitfall("Treating sin parar as a command", "Sin parar describes something that does not stop. It is not an instruction to stop or a warning to the driver.", "Llovió sin parar means it rained nonstop.")
      ],
      variations: [
        dl60Variation("¿Me para en la esquina, por favor?", "polite practical", "General Colombian", "The taxi request every learner should know."),
        dl60Variation("¡Pare aquí!", "urgent practical", "General Spanish", "The stop is coming up right now."),
        dl60Variation("Llovió sin parar toda la tarde.", "neutral", "General Spanish", "Something continued nonstop."),
        dl60Variation("Me paro para mirar el letrero.", "neutral Colombian", "General Colombian", "You stand up to check something."),
        dl60Variation("Párele bolas a esa puerta.", "friendly informal", "Very Colombian", "You want someone to pay attention.")
      ],
      prompt: "Maya says “¿me para en la esquina?” What makes parar the right taxi verb?",
      choices: [
        "It is the everyday way to ask a driver to stop.",
        "It is the formal legal word for detaining a person.",
        "It means she plans to stand up in the taxi."
      ],
      answer: 0,
      practiceExtra: [
        dl60Question("Which sentence tells a driver to stop here?", ["Pare aquí, por favor.", "Párese de la silla.", "Párele bolas al letrero."], 0, "pare aquí as taxi command"),
        dl60Question("Which sentence means something happened nonstop?", ["La llamada siguió sin parar.", "La llamada se paró de pie.", "La llamada pidió la esquina."], 0, "sin parar as nonstop"),
        dl60Question("Which line means “I stand up” in Colombian Spanish?", ["Yo paro el taxi.", "Me paro un momento.", "Párele bolas al taxi."], 1, "pararse as standing up"),
        dl60Question("Which phrase means pay attention informally?", ["Parar en la esquina.", "Pararse junto al taxi.", "Parar bolas al aviso."], 2, "parar bolas as paying attention")
      ]
    },
    en: {
      title: "Parar un taxi en Nueva York",
      situation:
        "Usted está en un taxi en Nueva York y necesita pedir que pare en la esquina. También debe separar stop, pull over, nonstop, stand up y pay attention, porque parar no viaja al inglés como una sola palabra.",
      setting: {
        who: "Maya va en taxi con un conductor que conoce la zona, y necesita bajarse cerca de una esquina sin pasarse.",
        what: "Aclaran el punto de parada, un teléfono que no para, levantarse para mirar un aviso y una frase informal para prestar atención.",
        when: "Al final de la tarde, cuando el tráfico avanza y la esquina correcta puede pasar rápido.",
        where: "Nueva York, en un taxi, porque esta dirección enseña inglés en una escena fuera de Colombia.",
        why: "Porque parar se reparte en inglés entre stop, pull over, stand up, nonstop y pay attention. La escena de taxi da el uso más urgente."
      },
      address: {
        form: "mixed",
        who: "Maya y el conductor mantienen trato de pasajera y conductor; el inglés usa you para ambos.",
        why: "La cortesía se marca con please, could you y tono breve, no con un pronombre distinto.",
        ifYouSwitch:
          "Decir sir puede ser cortés una vez, pero no reemplaza la claridad. En un taxi, la frase corta y precisa importa más."
      },
      dialogue: [
        dl60Dialogue("Maya", "Could you stop at the corner, please?", "¿Me para en la esquina, por favor?", "kud yu stop at da KOR-ner, pliz", "¿Podría usted parar en la esquina, por favor?", "“Stop at the corner” es la frase básica. El inglés no traduce el me de me para; la cortesía ya está en could you and please."),
        dl60Dialogue("Driver", "Sure, I'll pull over after the light.", "Claro, le paro después del semáforo.", "shur, ail pul OU-ver AF-ter da lait", "Claro, me haré a un lado después de la luz.", "“Pull over” es muy natural para un vehículo que se arrima a la orilla. No es sólo detenerse; es detenerse en un lado seguro."),
        dl60Dialogue("Maya", "Sorry, better stop here; I saw the sign late.", "Perdón, mejor pare aquí; vi el letrero tarde.", "SOR-i, BE-ter stop jir; ai so da sain leit", "Perdón, mejor pare aquí; vi el aviso tarde.", "“Stop here” sirve cuando ya está encima del punto. La frase puede ser corta sin sonar grosera si el tono y sorry ayudan."),
        dl60Dialogue("Driver", "No problem. People change their mind nonstop around here.", "Tranquila. La gente cambia de idea sin parar por aquí.", "nou PRO-blem. PI-pol cheinch der maind NON-stop a-RAUND jir", "No hay problema. La gente cambia de idea sin parar por aquí.", "“Nonstop” traduce sin parar cuando algo continúa. No use “without stop” como calco si quiere sonar natural."),
        dl60Dialogue("Maya", "I'll stand up for a second to check the entrance.", "Me paro un segundo para mirar la entrada.", "ail stand op for a SE-kond tu chek di EN-trans", "Me pondré de pie un segundo para revisar la entrada.", "“Stand up” traduce pararse cuando la persona se levanta. “Stop myself” no comunica la postura del cuerpo."),
        dl60Dialogue("Driver", "Pay attention to the blue gate; that's where people get out.", "Párele bolas al portón azul; ahí se baja la gente.", "pei a-TEN-shon tu da blu geit; dats wer PI-pol get aut", "Preste atención al portón azul; ahí se baja la gente.", "Para el sentido de parar bolas, el inglés normal es “pay attention”. La imagen de balls no viaja.")
      ],
      vocabulary: [
        dl60Vocab("stop", "Parar o detenerse. Es el verbo básico para un taxi, bus, máquina o movimiento.", "parar", "Úselo para pedir una parada, decir que algo se detuvo o terminar una acción.", "Evítelo para pararse de una silla. Ahí necesita stand up.", "neutral", "Inglés universal.", ["pull over", "halt", "pause", "stop at"], "Could you stop at the corner?", "¿Me para en la esquina?"),
        dl60Vocab("stop here", "Pare aquí. Frase corta y directa para un punto inmediato.", "pare aquí", "Úselo cuando el lugar ya llegó y necesita claridad rápida.", "Evítelo si necesita sonar más suave y hay tiempo. Could you stop here, please? suena mejor.", "practical command", "Inglés universal.", ["pull over here", "right here", "drop me here", "here is fine"], "Stop here, please.", "Pare aquí, por favor."),
        dl60Vocab("pull over", "Arrimarse o parar a un lado con un vehículo.", "halar hacia un lado", "Úselo con carros, taxis y policías cuando el vehículo debe ir a la orilla.", "Evítelo para una persona que se pone de pie o para una máquina que se apaga.", "neutral practical", "Inglés universal.", ["stop by the curb", "pull in", "park briefly", "drop off"], "Pull over after the light.", "Pare después del semáforo."),
        dl60Vocab("nonstop", "Sin parar. Describe algo continuo, sin pausa.", "sin parada", "Úselo para lluvia, llamadas, trabajo, ruido, viajes o mensajes continuos.", "Evítelo como traducción de una orden. Nonstop is a description, not a command.", "neutral", "Inglés universal.", ["constantly", "continuously", "without stopping", "all the time"], "It rang nonstop.", "Sonó sin parar."),
        dl60Vocab("stand up", "Pararse o ponerse de pie. Es postura, no detenerse.", "estar de pie arriba", "Úselo cuando alguien se levanta de una silla, cama, banca o asiento.", "Evítelo para un taxi que se detiene. The taxi stops; a person stands up.", "neutral", "Inglés universal.", ["get up", "rise", "be standing", "sit down"], "I'll stand up for a second.", "Me paro un segundo."),
        dl60Vocab("pay attention", "Prestar atención o parar bolas en registro informal colombiano.", "pagar atención", "Úselo cuando alguien debe fijarse en un aviso, instrucción, riesgo o detalle.", "Evítelo si quiere sonar muy colombiano en español. Pay attention is neutral English, not an idiom with balls.", "neutral", "Inglés universal.", ["notice", "watch", "focus", "listen carefully"], "Pay attention to the blue gate.", "Párele bolas al portón azul."),
        dl60Vocab("drop me off", "Dejarme o bajarme en un lugar. A veces suena más natural que stop.", "dejarme caer", "Úselo cuando el foco es dónde termina el viaje para el pasajero.", "Evítelo si usted sólo quiere que el carro pare un momento sin bajarse.", "neutral conversational", "Inglés universal.", ["let me out", "stop for me", "leave me", "pull over"], "Drop me off at the corner.", "Déjeme en la esquina.")
      ],
      note:
        "El taxi enseña la diferencia rápido: “could you stop at the corner?” y “pull over here” sirven para el vehículo; “stand up” sirve para pararse; “nonstop” traduce sin parar; “pay attention” traduce parar bolas. No intente llevar la misma palabra inglesa a todos los usos de parar.",
      culture: [
        dl60Culture("Please hace mucho trabajo", "En inglés de taxi, una frase breve no tiene que ser grosera si lleva please o could you. La claridad pesa porque el conductor necesita reaccionar rápido."),
        dl60Culture("Pull over imagina la orilla", "Pull over no es cualquier stop. Sugiere que el carro se arrima a un lado de la vía, normalmente para dejar bajar a alguien o responder a una autoridad."),
        dl60Culture("Pararse no es stop yourself", "El español colombiano usa pararse para levantarse. En inglés, “stop myself” habla de autocontrol o detener una acción, no de ponerse de pie."),
        dl60Culture("El modismo no se traduce por imagen", "Parar bolas es muy colombiano, pero el inglés no usa balls para atención. Traducir la imagen produciría comedia involuntaria.")
      ],
      pitfalls: [
        dl60Pitfall("“Can you stop me at the corner?”", "Se entiende, pero puede sonar como si el conductor tuviera que detenerlo a usted físicamente. La frase natural pide que el carro pare o lo deje.", "Could you stop at the corner?"),
        dl60Pitfall("“I stop up to see the sign.”", "Es un calco de me paro. En inglés, levantarse es stand up, no stop up.", "I'll stand up to see the sign."),
        dl60Pitfall("“It rained without stop.”", "La idea se entiende, pero la forma natural y breve es nonstop o without stopping.", "It rained nonstop."),
        dl60Pitfall("“Stop balls to the blue gate.”", "La imagen de parar bolas no viaja al inglés. Para atención, diga pay attention to.", "Pay attention to the blue gate.")
      ],
      variations: [
        dl60Variation("Could you stop at the corner?", "polite practical", "Inglés universal", "Pide la parada del taxi."),
        dl60Variation("Pull over after the light.", "practical", "Inglés universal", "El carro debe arrimarse al lado."),
        dl60Variation("It rained nonstop.", "neutral", "Inglés universal", "Algo siguió sin parar."),
        dl60Variation("I'll stand up for a second.", "neutral", "Inglés universal", "Una persona se levanta."),
        dl60Variation("Pay attention to the blue gate.", "neutral", "Inglés universal", "Traduce parar bolas sin copiar la imagen.")
      ],
      prompt: "Maya says “could you stop at the corner?” ¿Qué uso de parar traduce?",
      choices: [
        "Pedirle al conductor que pare el vehículo.",
        "Levantarse para mirar un letrero pequeño.",
        "Prestar atención a una puerta azul."
      ],
      answer: 0,
      practiceExtra: [
        dl60Question("¿Cuál frase pide parar el taxi?", ["Could you stop at the corner?", "Could you stand up at the corner?", "Could you pay attention at the corner?"], 0, "stop at the corner for taxis"),
        dl60Question("¿Cuál traduce sin parar?", ["It rang standing up.", "It rang nonstop.", "It rang paying attention."], 1, "nonstop for sin parar"),
        dl60Question("¿Cuál traduce me paro en Colombia?", ["I stop myself.", "I pull over.", "I stand up."], 2, "stand up for pararse"),
        dl60Question("¿Cuál traduce parar bolas?", ["Pay attention to the sign.", "Stop balls to the sign.", "Pull over to the sign."], 0, "pay attention for parar bolas")
      ]
    }
  },
  {
    id: "explaining-a-breakdown-in-florencia",
    level: "Extending · Causes and effects",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "courteous",
    pathways: ["extension"],
    verb: "causar",
    review: "pending",
    es: {
      title: "Explicar qué causó la falla en Florencia",
      situation:
        "Estás en Florencia cuando una máquina de una panadería se apaga y retrasa los pedidos. El técnico explica qué causó el daño, pero también muestra que en conversación cotidiana muchos colombianos dirían me dio susto, no me causó susto.",
      setting: {
        who: "Rosa runs a small bakery, and Edwin is the technician checking why the mixer stopped during a busy morning.",
        what: "They identify what caused the breakdown, what problems it caused, and when causar sounds formal compared with me dio.",
        when: "Mid-morning, when bread orders are waiting and the machine has already stopped once.",
        where: "Florencia, in a neighborhood bakery, using a less represented Colombian city with general Spanish.",
        why: "Because causar is regular but formal. It is useful for damage, problems and impressions, while everyday feelings often use me dio."
      },
      address: {
        form: "usted",
        who: "Rosa and Edwin use usted because this is a service visit with money and technical responsibility involved.",
        why: "The formality suits a technician explaining causes. The language can stay calm even when the machine has disrupted the day.",
        ifYouSwitch:
          "Tú would sound too familiar on a first service visit. A more casual form would also blur the useful formal register of causar."
      },
      dialogue: [
        dl60Dialogue("Rosa", "La máquina se paró otra vez y eso me causó un retraso enorme.", "The machine stopped again, and that caused me a huge delay.", "lah MAH-kee-nah seh pah-ROH OH-trah bes ee EH-soh meh kow-SOH oon rreh-TRAH-soh en-OR-meh", "The machine itself stopped again and that to-me caused a delay huge.", "Causar sounds natural with a concrete consequence like delay. It is a little more formal than simply saying me atrasó."),
        dl60Dialogue("Edwin", "Veo grasa en el motor; eso pudo causar el daño.", "I see grease in the motor; that could have caused the damage.", "BEH-oh GRAH-sah en el moh-TOR; EH-soh POO-doh kow-SAR el DAH-nyoh", "I-see grease in the motor; that could cause the damage.", "Causar el daño names the source of a problem. It is the kind of phrase technicians, reports and complaints use."),
        dl60Dialogue("Rosa", "¿Y también causó el ruido que sonaba anoche?", "And did it also cause the noise that was sounding last night?", "ee tam-BYEN kow-SOH el RROO-ee-doh keh soh-NAH-bah ah-NOH-cheh", "And also caused the noise that sounded last-night?", "Causó is preterite, regular and straightforward. The lesson is not the form; it is the register and the kind of noun that follows."),
        dl60Dialogue("Edwin", "Sí, causó ruido, calentamiento y después el apagón.", "Yes, it caused noise, overheating, and then the shutdown.", "see, kow-SOH RROO-ee-doh, kah-len-tah-MYEN-toh ee des-PWES el ah-pah-GON", "Yes, caused noise, heating and later the shutdown.", "Causar stacks well with technical nouns: ruido, calentamiento, apagón, daño. It makes the explanation sound precise."),
        dl60Dialogue("Rosa", "A mí me causó mucha impresión ver humo, pero también me dio susto.", "Seeing smoke made a big impression on me, but it also scared me.", "ah mee meh kow-SOH MOO-chah eem-preh-SYON ber OO-moh, PEH-roh tam-BYEN meh DYOH SOOS-toh", "To me it caused much impression to-see smoke, but also to-me gave fright.", "Me causó mucha impresión is natural. For everyday fear, Colombians often say me dio susto, not me causó susto."),
        dl60Dialogue("Edwin", "Claro. En el informe pongo qué causó la falla; hablando, digo que le dio susto.", "Of course. In the report I'll write what caused the failure; speaking, I say it scared you.", "KLAH-roh. en el een-FOR-meh PON-goh keh kow-SOH lah FAH-yah; ah-BLAN-doh, DEE-goh keh leh DYOH SOOS-toh", "Clear. In the report I-put what caused the failure; speaking, I-say that to-you gave fright.", "This line is the register split. Causar belongs in explanation and reports; me dio belongs in everyday reaction.")
      ],
      vocabulary: [
        dl60Vocab("causar", "To cause. It is regular and often more formal than everyday made me language.", "to cause", "Use it for damage, problems, delays, reactions in reports, and clear cause-effect explanations.", "Avoid it for every everyday feeling. Colombians often say me dio risa or me dio susto instead.", "neutral to formal", "General Spanish.", ["provocar", "generar", "producir", "ocasionar"], "Eso pudo causar el daño.", "That could have caused the damage."),
        dl60Vocab("causar daño", "To cause damage. A common formal or practical phrase for technical and consumer problems.", "to cause damage", "Use it when something harmed a machine, object, place, person, or process.", "Avoid using it when the effect is only inconvenience. Causar molestias or causar problemas may fit better.", "formal practical", "General Spanish.", ["dañar", "ocasionar daño", "hacer daño", "afectar"], "La grasa causó daño al motor.", "The grease caused damage to the motor."),
        dl60Vocab("causar problemas", "To cause problems. It names the effect without sounding as technical as damage.", "to cause problems", "Use it for delays, confusion, complaints, cost, noise, or disruptions.", "Avoid it when you can name the exact problem. Specific nouns usually sound more useful.", "neutral", "General Spanish.", ["generar problemas", "traer problemas", "complicar", "afectar"], "Eso causó problemas toda la mañana.", "That caused problems all morning."),
        dl60Vocab("causar impresión", "To make an impression, often strong, surprising or memorable.", "to cause impression", "Use it when something affected you strongly without naming a simple emotion.", "Avoid replacing every me dio with me causó impresión. It sounds more reflective and formal.", "neutral", "General Spanish.", ["impresionar", "sorprender", "impactar", "marcar"], "Me causó mucha impresión.", "It made a big impression on me."),
        dl60Vocab("me dio susto", "It scared me, literally it gave me fright. Very natural Colombian everyday speech.", "it gave me fright", "Use it for ordinary fear, startle, worry, or sudden alarm.", "Avoid over-formal me causó susto in casual speech. It is understandable but not the usual reflex.", "friendly informal", "Very common Colombian Spanish.", ["me asustó", "me dio miedo", "me alarmó", "qué susto"], "Me dio susto ver humo.", "Seeing smoke scared me."),
        dl60Vocab("me dio risa", "It made me laugh, literally it gave me laughter. Another everyday me dio pattern.", "it gave me laughter", "Use it when something made you laugh naturally or unexpectedly.", "Avoid me causó risa as your default. It can work, but sounds more formal or written.", "friendly informal", "Very common Colombian Spanish.", ["me hizo reír", "me pareció gracioso", "me dio gracia", "me reí"], "Me dio risa el comentario.", "The comment made me laugh."),
        dl60Vocab("ocasionar", "A formal alternative to causar, common in notices, reports and official explanations.", "to occasion", "Use it when writing about damage, delays, inconvenience or official consequences.", "Avoid it in relaxed conversation unless you deliberately want a formal tone.", "formal", "General Spanish.", ["causar", "provocar", "generar", "producir"], "La falla ocasionó retrasos.", "The failure caused delays.")
      ],
      note:
        "Causar is useful precisely because it sounds a bit formal. It handles damage, problems, delays and strong impressions cleanly. But do not use it for every English made me. In ordinary Colombian speech, me dio susto and me dio risa are far more natural than me causó susto or me causó risa.",
      culture: [
        dl60Culture("Reports like causar", "When a technician writes what caused a failure, causar sounds precise and responsible. It turns a messy morning into a chain of cause and effect."),
        dl60Culture("Everyday feelings use me dio", "Colombians constantly say me dio susto, me dio risa, me dio pena. The grammar makes the feeling arrive to the person, and it sounds much more everyday than causar."),
        dl60Culture("Formal does not mean wrong", "Causar is not bad Spanish. It is excellent when the situation calls for a report, complaint, medical note or technical explanation. The mistake is using it everywhere."),
        dl60Culture("Florencia broadens the map", "A bakery breakdown in Florencia lets the course leave the usual circuit without inventing regionalisms. The Spanish here is portable.")
      ],
      pitfalls: [
        dl60Pitfall("Using causar for every made me phrase", "English made me laugh or made me scared tempts learners toward causar. Colombian speech often prefers me dio risa or me dio susto.", "Me dio susto ver humo."),
        dl60Pitfall("Making causar sound too casual", "Causar works, but it often carries a report-like tone. If you use it for small feelings among friends, you may sound stiff.", "Me dio risa el comentario."),
        dl60Pitfall("Forgetting the thing that caused the effect", "Causar wants a cause and an effect. If you only name one side, the explanation may feel unfinished.", "La grasa causó el daño al motor."),
        dl60Pitfall("Confusing causar with producir everywhere", "They overlap in formal cause-effect language, but producir often means produce, generate or bring about a result. Causar is the safer direct cause verb.", "Eso causó el retraso.")
      ],
      variations: [
        dl60Variation("Eso causó el daño.", "formal practical", "General Spanish", "Naming what produced a concrete problem."),
        dl60Variation("La falla causó retrasos.", "formal practical", "General Spanish", "Explaining operational consequences."),
        dl60Variation("Me causó mucha impresión.", "neutral", "General Spanish", "Something affected you strongly."),
        dl60Variation("Me dio susto ver humo.", "friendly informal", "General Colombian", "A natural everyday fear reaction."),
        dl60Variation("Me dio risa el comentario.", "friendly informal", "General Colombian", "A natural everyday laughter reaction.")
      ],
      prompt: "Rosa says both “me causó impresión” and “me dio susto.” What split is she showing?",
      choices: [
        "Causar is more formal; me dio is more everyday for feelings.",
        "Causar is only for birthdays; me dio is only for machines.",
        "Causar is a taxi command; me dio means to stop at a corner."
      ],
      answer: 0,
      practiceExtra: [
        dl60Question("Which sentence sounds natural in a technical explanation?", ["La grasa causó el daño al motor.", "La grasa me dio cumpleaños.", "La grasa paró bolas al motor."], 0, "causar daño in technical explanation"),
        dl60Question("Which line is the everyday Colombian way to say it scared me?", ["Me causó susto formal.", "Me dio susto ver humo.", "Me produjo una esquina."], 1, "me dio susto as everyday reaction"),
        dl60Question("Which phrase means made a strong impression?", ["Me paró en la esquina.", "Me dio un taxi lento.", "Me causó mucha impresión."], 2, "causar impresión"),
        dl60Question("Which sentence sounds less stiff among friends?", ["Me dio risa el comentario.", "El comentario ocasionó risas.", "El comentario causó hilaridad."], 0, "me dio risa in everyday speech")
      ]
    },
    en: {
      title: "Explicar causas en Dublín",
      situation:
        "Usted está en Dublín cuando una máquina de una panadería se apaga y retrasa pedidos. En inglés debe separar cause, make, give me a scare y make an impression para no sonar como informe en una charla común.",
      setting: {
        who: "Rosa maneja una panadería pequeña y Edwin es el técnico que revisa por qué se detuvo la mezcladora.",
        what: "Identifican qué causó la falla, qué problemas produjo y cuándo un sentimiento cotidiano no necesita sonar técnico.",
        when: "A media mañana, con pedidos esperando y la máquina ya detenida una vez.",
        where: "Dublín, en una panadería de barrio, porque esta dirección practica inglés fuera de Colombia.",
        why: "Porque causar no se traduce siempre con cause. El inglés también usa made me, gave me a scare y made an impression según el registro."
      },
      address: {
        form: "mixed",
        who: "Rosa y Edwin mantienen una relación de clienta y técnico; el inglés usa you y el tono profesional hace el trabajo.",
        why: "La claridad técnica viene de nombres concretos como damage, delay and motor, no de un pronombre formal.",
        ifYouSwitch:
          "Sir o ma'am puede aparecer una vez, pero repetirlo no vuelve más precisa la explicación. Lo importante es nombrar causa y efecto."
      },
      dialogue: [
        dl60Dialogue("Rosa", "The machine stopped again, and that caused a huge delay.", "La máquina se paró otra vez y eso causó un retraso enorme.", "da ma-SHIN stopt a-GEN, and dat kozd a hyuch di-LEI", "La máquina se detuvo otra vez y eso causó una demora enorme.", "“Caused a delay” suena natural porque habla de consecuencia concreta. Es claro y un poco formal, justo como una explicación técnica."),
        dl60Dialogue("Edwin", "I see grease in the motor; that may have caused the damage.", "Veo grasa en el motor; eso pudo causar el daño.", "ai si gris in da MO-ter; dat mei jav kozd da DA-mich", "Veo grasa en el motor; eso puede haber causado el daño.", "“Cause damage” es una colocación fuerte y común. Sirve para informes, reclamos y explicaciones de fallas."),
        dl60Dialogue("Rosa", "Did it also cause the noise I heard last night?", "¿También causó el ruido que oí anoche?", "did it OL-so koz da noiz ai jerd last nait", "¿También causó el ruido que oí anoche?", "Cause funciona con noise porque el ruido es un efecto identificable. No todo efecto pide una frase emocional."),
        dl60Dialogue("Edwin", "Yes, it caused noise, overheating, and then the shutdown.", "Sí, causó ruido, calentamiento y después el apagón.", "yes, it kozd noiz, ou-ver-HI-ting, and den da SHOT-daun", "Sí, causó ruido, sobrecalentamiento y luego el apagón.", "La lista técnica suena bien con cause. Noise, overheating and shutdown are concrete effects, not vague feelings."),
        dl60Dialogue("Rosa", "Seeing smoke made a big impression, but it also gave me a scare.", "Ver humo me causó mucha impresión, pero también me dio susto.", "SI-ing smouk meid a big im-PRE-shon, bat it OL-so geiv mi a sker", "Ver humo hizo una gran impresión, pero también me dio un susto.", "“Made a big impression” traduce me causó mucha impresión. “Gave me a scare” suena más cotidiano para me dio susto que caused me fear."),
        dl60Dialogue("Edwin", "Right. In the report I write what caused the fault; speaking, I say it scared you.", "Claro. En el informe escribo qué causó la falla; hablando, digo que le dio susto.", "rait. in da ri-PORT ai rait uat kozd da folt; SPI-king, ai sei it skerd yu", "Correcto. En el informe escribo qué causó la falla; hablando, digo que la asustó.", "El contraste es registro. “Caused the fault” pertenece al informe; “it scared you” pertenece a una conversación normal.")
      ],
      vocabulary: [
        dl60Vocab("cause", "Causar. Es directo y sirve muy bien para daños, retrasos, ruido y problemas.", "causar", "Úselo cuando una cosa produce una consecuencia concreta o explicable.", "Evítelo como traducción automática de todos los me dio. A veces made me or gave me sounds better.", "neutral to formal", "Inglés universal.", ["lead to", "create", "bring about", "produce"], "That caused a huge delay.", "Eso causó un retraso enorme."),
        dl60Vocab("cause damage", "Causar daño. Colocación normal en reportes, garantías y quejas.", "causar daño", "Úselo cuando algo dañó una máquina, objeto, lugar o proceso.", "Evítelo si sólo hubo molestia o atraso; name the effect more exactly.", "formal practical", "Inglés universal.", ["damage", "harm", "break", "affect"], "Grease caused damage.", "La grasa causó daño."),
        dl60Vocab("cause problems", "Causar problemas. Más amplio que damage y útil para retrasos o complicaciones.", "causar problemas", "Úselo cuando la consecuencia es una dificultad general.", "Evítelo si puede nombrar delay, noise, overheating or shutdown. Specific nouns help.", "neutral", "Inglés universal.", ["create problems", "lead to trouble", "complicate things", "disrupt"], "It caused problems all morning.", "Causó problemas toda la mañana."),
        dl60Vocab("make an impression", "Causar impresión. Algo deja una marca mental o emocional.", "hacer una impresión", "Úselo cuando algo sorprende, impacta o se queda en la memoria.", "Evítelo para sustos comunes. Gave me a scare or scared me sounds more natural.", "neutral", "Inglés universal.", ["impress", "strike", "stay with", "affect"], "It made a big impression.", "Me causó mucha impresión."),
        dl60Vocab("give me a scare", "Darme un susto. Natural para miedo repentino o alarma cotidiana.", "darme un susto", "Úselo cuando algo lo asusta por un momento.", "Evítelo en reportes técnicos. Caused alarm or presented a risk may be more formal.", "friendly informal", "Inglés universal.", ["scare me", "frighten me", "startle me", "make me nervous"], "It gave me a scare.", "Me dio susto."),
        dl60Vocab("make me laugh", "Darme risa o hacerme reír. Frase cotidiana para una reacción de risa.", "hacerme reír", "Úselo cuando algo provoca risa naturalmente.", "Evítelo como cause me laughter in conversation. That sounds stiff or comic.", "friendly informal", "Inglés universal.", ["make me smile", "crack me up", "amuse me", "be funny"], "That made me laugh.", "Eso me dio risa."),
        dl60Vocab("lead to", "Llevar a o producir como consecuencia. Más suave que cause en algunos informes.", "llevar a", "Úselo para cadenas de consecuencias donde una cosa termina en otra.", "Evítelo si necesita nombrar una causa directa y fuerte. Cause may be clearer.", "neutral", "Inglés universal.", ["cause", "result in", "bring about", "produce"], "The grease led to overheating.", "La grasa causó calentamiento.")
      ],
      note:
        "El inglés usa “cause” muy bien para daño, problemas y retrasos, pero no para todas las reacciones personales. “It gave me a scare”, “that made me laugh” y “it made a big impression” suenan más naturales que traducciones rígidas como “it caused me fear” o “it caused me laughter”.",
      culture: [
        dl60Culture("Cause suena explicativo", "La palabra funciona cuando usted arma una cadena de causa y efecto. Por eso aparece en garantías, reportes, noticias y explicaciones técnicas."),
        dl60Culture("Made me es más cotidiano", "Para emociones comunes, el inglés prefiere made me laugh, scared me, made me nervous. Suenan menos escritos que cause."),
        dl60Culture("A scare es un susto", "“It gave me a scare” no significa que alguien le entregó un objeto. Es una manera natural de contar un susto repentino."),
        dl60Culture("La precisión está en el sustantivo", "Delay, damage, noise, overheating and shutdown make cause sound natural. Si el sustantivo es vago, la explicación también queda vaga.")
      ],
      pitfalls: [
        dl60Pitfall("“It caused me fear.”", "Se entiende, pero para un susto cotidiano suena rígido. El inglés común dice it scared me or it gave me a scare.", "It gave me a scare."),
        dl60Pitfall("“It caused me laughter.”", "Es gramatical en teoría y rarísimo en conversación. Para me dio risa, use made me laugh.", "It made me laugh."),
        dl60Pitfall("“The grease made a damage.”", "Damage no funciona así con make. La colocación natural es caused damage.", "The grease caused damage."),
        dl60Pitfall("“The machine produced me delay.”", "Es un calco de me produjo retraso o me causó retraso. En inglés, use caused a delay.", "The machine caused a delay.")
      ],
      variations: [
        dl60Variation("That caused a huge delay.", "formal practical", "Inglés universal", "Una causa produjo un atraso concreto."),
        dl60Variation("Grease caused damage.", "technical", "Inglés universal", "Explica una falla o daño."),
        dl60Variation("It made a big impression.", "neutral", "Inglés universal", "Algo impactó o marcó a alguien."),
        dl60Variation("It gave me a scare.", "friendly informal", "Inglés universal", "Cuenta un susto cotidiano."),
        dl60Variation("That made me laugh.", "friendly informal", "Inglés universal", "Traduce me dio risa naturalmente.")
      ],
      prompt: "Rosa says “it gave me a scare” instead of “it caused me fear.” ¿Por qué?",
      choices: [
        "Because everyday fear sounds more natural with gave me a scare.",
        "Because cause can only describe birthdays and taxi stops.",
        "Because scare means a technical report about a motor."
      ],
      answer: 0,
      practiceExtra: [
        dl60Question("¿Cuál frase sirve en una explicación técnica?", ["The grease caused damage.", "The grease gave birthday.", "The grease stood up loudly."], 0, "cause damage in technical explanation"),
        dl60Question("¿Cuál frase suena natural para me dio risa?", ["It caused me laughter.", "It made me laugh.", "It produced me comedy."], 1, "made me laugh for me dio risa"),
        dl60Question("¿Cuál frase traduce me causó impresión?", ["It stopped at the corner.", "It pulled over slowly.", "It made a big impression."], 2, "make an impression"),
        dl60Question("¿Cuál frase evita el calco me produjo retraso?", ["The machine caused a delay.", "The machine produced me delay.", "The machine made to me late."], 0, "caused a delay in English")
      ]
    }
  },
  {
    id: "reporting-what-the-storm-produced-in-tumaco",
    level: "Extending · Produced effects",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "work-and-employment",
    register: "courteous",
    pathways: ["extension"],
    verb: "producir",
    review: "pending",
    es: {
      title: "Informar qué produjo la tormenta en Tumaco",
      situation:
        "Estás en Tumaco leyendo una nota local sobre una tormenta. La noticia dice qué produjo el aguacero, qué produjeron las obras y por qué produjo y produjeron tienen la raíz irregular -duj- sin tilde ni -jieron.",
      setting: {
        who: "A local reporter interviews an engineer after a storm disrupted drainage work near a neighborhood street.",
        what: "They explain what the storm produced, what the repairs produced, and why the preterite forms produced by producir are irregular.",
        when: "The morning after a heavy storm, when people want causes, effects and next steps rather than rumours.",
        where: "Tumaco, near a coastal neighborhood street, with general Colombian Spanish and careful news-style register.",
        why: "Because producir is formal and useful in reports, but its preterite produjo and produjeron catches learners with the -duj- stem."
      },
      address: {
        form: "usted",
        who: "The reporter and engineer use usted because this is an interview for a public note.",
        why: "The public register fits producir. The verb sounds most natural when effects are being explained for readers or listeners.",
        ifYouSwitch:
          "Tú would make the interview sound too personal. A casual register would also hide why producir belongs in reports and news."
      },
      dialogue: [
        dl60Dialogue("Reportera", "Ingeniera, ¿qué produjo la tormenta de anoche?", "Engineer, what did last night's storm produce?", "een-heh-NYEH-rah, keh proh-DOO-hoh lah tor-MEN-tah deh ah-NOH-cheh", "Engineer, what produced the storm of last-night?", "Produjo is the key irregular form: -duj- stem, no accent, and a j sound. This is the form learners often miss."),
        dl60Dialogue("Ingeniera", "Produjo inundaciones pequeñas y daños en dos rejillas.", "It produced small floods and damage in two grates.", "proh-DOO-hoh een-oon-dah-SYOH-nes peh-KEH-nyahs ee DAH-nyos en dos rreh-HEE-yahs", "It produced floods small and damages in two grates.", "Producir sounds report-like here because it lists effects. In a casual chat, caused or left might be more natural, but news likes producir."),
        dl60Dialogue("Reportera", "Los vecinos dicen que las obras produjeron más barro que solución.", "Neighbors say the works produced more mud than solution.", "los beh-SEE-nos DEE-sen keh las OH-bras proh-doo-HEH-ron mas BAH-rroh keh soh-loo-SYON", "The neighbors say that the works produced more mud than solution.", "Produjeron is the other high-value trap: not producieron and not produjieron. The ending is -jeron, without i."),
        dl60Dialogue("Ingeniera", "Entiendo la queja, pero las bombas produjeron alivio en la parte baja.", "I understand the complaint, but the pumps produced relief in the lower part.", "en-TYEN-doh lah KEH-hah, PEH-roh las BOM-bas proh-doo-HEH-ron ah-LEE-byoh en lah PAR-teh BAH-hah", "I-understand the complaint, but the pumps produced relief in the part low.", "Produced relief is formal but readable. The engineer is balancing complaints with measurable effects."),
        dl60Dialogue("Reportera", "¿Y ese daño produjo el cierre de la vía?", "And did that damage produce the road closure?", "ee EH-seh DAH-nyoh proh-DOO-hoh el SYEH-rreh deh lah BEE-ah", "And that damage produced the closure of the road?", "Produjo el cierre means brought about or led to the closure. It is a cause-effect verb, not only factory production."),
        dl60Dialogue("Ingeniera", "Sí. Mañana producimos un informe completo con fotos y horarios.", "Yes. Tomorrow we'll produce a complete report with photos and times.", "see. mah-NYAH-nah proh-doo-SEE-mos oon een-FOR-meh kom-PLEH-toh kon FOH-tos ee oh-RAH-ryos", "Yes. Tomorrow we-produce a report complete with photos and schedules.", "Producir can also mean to produce a document or material output. The present producimos is regular; the preterite is where the irregularity appears.")
      ],
      vocabulary: [
        dl60Vocab("producir", "To produce, generate or bring about an effect, product, report, result or consequence.", "to produce", "Use it in reports, news, technical explanations, production, and formal cause-effect language.", "Avoid using it for every everyday cause. Causar or dejar may be simpler depending on the sentence.", "neutral to formal", "General Spanish.", ["generar", "causar", "ocasionar", "elaborar"], "La tormenta produjo daños.", "The storm produced damage."),
        dl60Vocab("produjo", "The irregular preterite: he, she, it or usted produced. The stem is -duj- and there is no accent.", "produced", "Use it for a completed effect: la tormenta produjo daños, eso produjo retrasos.", "Avoid producío or produció. The preterite belongs to the -duj- family.", "formal explanatory", "General Spanish irregular preterite.", ["produjeron", "tradujo", "condujo", "redujo"], "La tormenta produjo inundaciones.", "The storm produced flooding."),
        dl60Vocab("produjeron", "They produced. The ending is -jeron, not -jieron, and it has no written accent.", "they produced", "Use it when plural causes or people produced a result in the past.", "Avoid producieron and produjieron. Both are common learner traps, but neither is the standard form.", "formal explanatory", "General Spanish irregular preterite.", ["produjo", "tradujeron", "condujeron", "redujeron"], "Las obras produjeron barro.", "The works produced mud."),
        dl60Vocab("producir un informe", "To produce a report: prepare, create and deliver a document with information.", "to produce a report", "Use it for reports, videos, evidence, documents, plans, and official materials.", "Avoid it for a quick casual message. Mandar or escribir may sound more natural there.", "formal practical", "General Spanish.", ["elaborar", "preparar", "redactar", "presentar"], "Producimos un informe completo.", "We produce a complete report."),
        dl60Vocab("producir alivio", "To produce relief, usually after a measure reduces pressure, damage or discomfort.", "to produce relief", "Use it when an action created a measurable improvement, often in reports or public explanations.", "Avoid it in casual emotional speech. Me alivió sounds more natural for personal feeling.", "formal explanatory", "General Spanish.", ["aliviar", "mejorar", "reducir presión", "dar alivio"], "Las bombas produjeron alivio.", "The pumps produced relief."),
        dl60Vocab("producir el cierre", "To bring about a closure or shutdown. The phrase sounds like news or administration.", "to produce the closure", "Use it when damage, weather, protest or a decision led to a closure.", "Avoid it in relaxed speech, where cerraron la vía or tocó cerrar may be clearer.", "formal news", "General Spanish.", ["causar el cierre", "llevar al cierre", "obligar a cerrar", "generar cierre"], "El daño produjo el cierre.", "The damage led to the closure."),
        dl60Vocab("la familia -ducir", "The irregular family behind produjo: traducir, conducir, reducir and producir all use -duj- in the preterite.", "the -duce family", "Use the pattern to remember tradujo, condujo, redujo, produjo and their plural forms.", "Avoid adding i before -eron. The standard ending is -jeron, not -jieron.", "grammar note", "General Spanish.", ["traducir", "conducir", "reducir", "introducir"], "Produjeron no lleva i.", "Produjeron has no i.")
      ],
      note:
        "Producir is the report-friendly cousin of cause: a storm produces flooding, repairs produce relief, a team produces a report. The grammar trap is the preterite: produjo, produjeron, with the -duj- stem, no accent, and -jeron rather than -jieron. It follows the same family as traducir and conducir.",
      culture: [
        dl60Culture("News likes producir", "In a news or technical note, producir can sound precise: an event produced damage, relief, closure or evidence. The verb creates distance and order after a messy event."),
        dl60Culture("Effects are not only products", "Producir is not limited to factories. Rain can produce flooding, a measure can produce relief, and a delay can produce complaints."),
        dl60Culture("The irregular past matters", "Learners often know producir in the present and then stumble in the preterite. Produjo and produjeron are common in news, reports and explanations, so they are worth drilling."),
        dl60Culture("Tumaco without exaggeration", "The coastal setting makes a storm report plausible, but the lesson keeps the Spanish general. Regional representation does not require risky local slang.")
      ],
      pitfalls: [
        dl60Pitfall("Writing produció", "The preterite is irregular: produjo. There is no accent, and the stem changes to -duj-.", "La tormenta produjo daños."),
        dl60Pitfall("Writing producieron or produjieron", "The plural preterite is produjeron. It follows the -duj- family and takes -eron without i.", "Las obras produjeron barro."),
        dl60Pitfall("Using producir only for factories", "Factories produce things, but in formal Spanish events also produce effects: damage, relief, closures, reactions and reports.", "La lluvia produjo inundaciones."),
        dl60Pitfall("Using producir for every casual result", "It can sound too report-like in ordinary chat. Sometimes dejó, causó or hizo is more natural.", "La lluvia dejó la calle mojada.")
      ],
      variations: [
        dl60Variation("La tormenta produjo inundaciones.", "news explanatory", "General Spanish", "A weather event caused a clear effect."),
        dl60Variation("Las obras produjeron más barro.", "news conversational", "General Spanish", "Plural past, with the irregular produjeron."),
        dl60Variation("El daño produjo el cierre de la vía.", "formal news", "General Spanish", "A problem led to an administrative closure."),
        dl60Variation("Mañana producimos un informe.", "formal practical", "General Spanish", "A team creates a document."),
        dl60Variation("Produjeron no lleva i.", "grammar note", "General Spanish", "Remembering the -jeron ending.")
      ],
      prompt: "The reporter says “¿qué produjo la tormenta?” What is the key preterite trap?",
      choices: [
        "The form is produjo, with -duj-, no accent, and no extra i.",
        "The form is produció, with a written accent on the final o.",
        "The form is producieron, because all -ir verbs stay regular."
      ],
      answer: 0,
      practiceExtra: [
        dl60Question("Which sentence has the correct singular preterite?", ["La tormenta produció daños.", "La tormenta produjo daños.", "La tormenta producir daños."], 1, "produjo as irregular preterite"),
        dl60Question("Which plural form is standard?", ["Las obras produjieron barro.", "Las obras producieron barro.", "Las obras produjeron barro."], 2, "produjeron without i"),
        dl60Question("Which sentence uses producir beyond factories?", ["La lluvia produjo inundaciones.", "La lluvia cumplió treinta.", "La lluvia paró bolas."], 0, "events can produce effects"),
        dl60Question("Which phrase means creating a document?", ["Producir un informe.", "Pararse un informe.", "Causarse un informe."], 0, "producir un informe")
      ]
    },
    en: {
      title: "Informar qué produjo una tormenta en Seattle",
      situation:
        "Usted está en Seattle leyendo una nota sobre una tormenta. En inglés debe escoger entre produce, cause, lead to y result in, y recordar que el español produjo y produjeron son irregulares.",
      setting: {
        who: "Una reportera local entrevista a una ingeniera después de que una tormenta afectó trabajos de drenaje.",
        what: "Explican qué produjo la tormenta, qué efectos dejaron las obras y cómo suena un reporte claro en inglés.",
        when: "La mañana después de una tormenta fuerte, cuando la gente quiere efectos y próximos pasos, no rumores.",
        where: "Seattle, cerca de una calle residencial con problemas de drenaje, porque esta dirección enseña inglés fuera de Colombia.",
        why: "Porque producir puede ser produce, cause, lead to or result in. El registro de noticia decide cuál suena más natural."
      },
      address: {
        form: "mixed",
        who: "La reportera y la ingeniera hablan para el público; el inglés usa you si hace falta, pero casi todo se enfoca en hechos.",
        why: "El tono público viene de frases impersonales, datos y efectos, no de un pronombre especial.",
        ifYouSwitch:
          "Volverlo demasiado casual haría sonar la nota como chisme. Un reporte necesita verbos claros y efectos verificables."
      },
      dialogue: [
        dl60Dialogue("Reporter", "Engineer, what did last night's storm produce?", "Ingeniera, ¿qué produjo la tormenta de anoche?", "en-ji-NIR, uat did last naits storm pro-DUS", "Ingeniera, ¿qué produjo la tormenta de anoche?", "“Produce” funciona porque la pregunta tiene registro de informe. En charla común, “cause” también podría sonar más directo."),
        dl60Dialogue("Engineer", "It produced small floods and damage to two drains.", "Produjo inundaciones pequeñas y daños en dos desagües.", "it pro-DUST smol flodz and DA-mich tu tu dreinz", "Produjo pequeñas inundaciones y daño a dos desagües.", "“Produced” lista efectos de forma ordenada. Es más noticioso que decir simplemente there was flooding."),
        dl60Dialogue("Reporter", "Neighbors say the works produced more mud than solutions.", "Los vecinos dicen que las obras produjeron más barro que soluciones.", "NEI-borz sei da works pro-DUST mor mod dan so-LU-shonz", "Los vecinos dicen que las obras produjeron más barro que soluciones.", "El inglés regular no tiene la trampa de produjo. La dificultad está en elegir si produce suena natural o demasiado formal."),
        dl60Dialogue("Engineer", "I understand, but the pumps produced some relief in the lower area.", "Entiendo, pero las bombas produjeron algo de alivio en la parte baja.", "ai on-der-STAND, bat da pomps pro-DUST som ri-LIF in da LOU-er ER-i-a", "Entiendo, pero las bombas produjeron algo de alivio en la zona baja.", "“Produced relief” es formal, pero funciona en voz de ingeniera. En conversación personal, “helped” podría sonar más natural."),
        dl60Dialogue("Reporter", "Did that damage lead to the road closure?", "¿Ese daño produjo el cierre de la vía?", "did dat DA-mich lid tu da roud KLOU-zher", "¿Ese daño llevó al cierre de la vía?", "“Lead to” suele sonar mejor que produce para cierres y consecuencias administrativas. Conecta causa y resultado sin sonar mecánico."),
        dl60Dialogue("Engineer", "Yes. Tomorrow we'll produce a full report with photos and times.", "Sí. Mañana producimos un informe completo con fotos y horarios.", "yes. tu-MOR-ou uil pro-DUS a ful ri-PORT uid FO-touz and taimz", "Sí. Mañana produciremos un informe completo con fotos y horas.", "Aquí “produce a report” sí es crear un documento. No es sólo causar un efecto; es preparar un producto informativo.")
      ],
      vocabulary: [
        dl60Vocab("produce", "Producir. Sirve para crear algo o generar un efecto, pero puede sonar formal.", "producir", "Úselo para informes, resultados, evidencia, alivio, daño o producción real.", "Evítelo si cause, lead to or make suena más natural en conversación.", "neutral to formal", "Inglés universal.", ["create", "generate", "cause", "bring about"], "The storm produced flooding.", "La tormenta produjo inundaciones."),
        dl60Vocab("produced", "Produjo o produjeron según el sujeto. En inglés es regular; en español el pasado es irregular.", "produjo / produjeron", "Úselo para efectos terminados en el pasado.", "Evítelo como guía para conjugar español. Produced no revela la raíz -duj- de produjo.", "neutral", "Inglés universal.", ["caused", "generated", "led to", "resulted in"], "It produced small floods.", "Produjo inundaciones pequeñas."),
        dl60Vocab("lead to", "Llevar a o producir una consecuencia. Muy natural para cierres, cambios y resultados.", "llevar a", "Úselo cuando una causa termina en una consecuencia identificable.", "Evítelo si quiere decir crear un objeto físico o un informe. Produce fits there.", "neutral explanatory", "Inglés universal.", ["result in", "cause", "bring about", "end in"], "The damage led to closure.", "El daño produjo el cierre."),
        dl60Vocab("result in", "Dar como resultado o producir. Suena formal y claro en reportes.", "resultar en", "Úselo para consecuencias medibles: delays, closure, flooding, costs, complaints.", "Evítelo en charla muy casual, donde caused or led to may sound lighter.", "formal explanatory", "Inglés universal.", ["lead to", "cause", "bring about", "produce"], "The storm resulted in delays.", "La tormenta produjo retrasos."),
        dl60Vocab("produce a report", "Producir un informe: preparar y entregar un documento.", "producir un informe", "Úselo para documentos, videos, plans, evidence and official materials.", "Evítelo para mandar un mensaje breve. Write or send a message sounds more natural.", "formal practical", "Inglés universal.", ["write a report", "prepare a report", "issue a report", "compile evidence"], "We'll produce a full report.", "Produciremos un informe completo."),
        dl60Vocab("relief", "Alivio. Puede ser emocional o práctico, como bajar presión o reducir daño.", "alivio", "Úselo cuando una medida mejora la situación o reduce un problema.", "Evítelo si la mejora es muy informal y personal; helped may say it more simply.", "neutral", "Inglés universal.", ["help", "improvement", "easing", "reduction"], "The pumps produced relief.", "Las bombas produjeron alivio."),
        dl60Vocab("the -duj- stem", "La raíz irregular de produjo, produjeron, tradujo, condujo y redujo.", "la raíz -duj-", "Úselo como recordatorio gramatical para el pasado español de verbos en -ducir.", "Evítelo como regla para el inglés. English produced stays regular.", "grammar note", "Spanish grammar explained in English class.", ["produjo", "produjeron", "tradujo", "condujo"], "Produjo uses the -duj- stem.", "Produjo usa la raíz -duj-.")
      ],
      note:
        "En inglés, “produce” puede servir para efectos y documentos, pero no siempre es la opción más natural. “Lead to” y “result in” explican consecuencias; “cause” es más directo; “produce a report” sí habla de crear un documento. El pasado inglés produced no ayuda con la trampa española: produjo, produjeron.",
      culture: [
        dl60Culture("Produce suena a reporte", "En noticias y documentos, produce puede ordenar los hechos. En charla diaria puede sonar demasiado elaborado si caused o led to bastan."),
        dl60Culture("Lead to fluye bien", "Para cierres, cambios y consecuencias, lead to often sounds smooth and natural. No fuerza la imagen de fabricar un resultado."),
        dl60Culture("A report is produced", "Produce a report es una colocación normal: un equipo prepara, revisa y entrega un documento. Ahí produce sí se parece a elaborar."),
        dl60Culture("La trampa está en español", "English produced is regular. El estudiante colombiano que aprende inglés descansa ahí, pero al volver al español debe recordar produjo y produjeron.")
      ],
      pitfalls: [
        dl60Pitfall("“The storm manufactured flooding.”", "Manufacture es fabricar, no producir como consecuencia natural. Para efectos, use produced, caused or led to.", "The storm produced flooding."),
        dl60Pitfall("“The damage produced the road closure” en charla normal", "Se entiende, pero puede sonar mecánico. Para consecuencias administrativas, led to suele fluir mejor.", "The damage led to the road closure."),
        dl60Pitfall("“Tomorrow we'll cause a report.”", "Cause no significa elaborar un documento. Para un informe, use produce, prepare or write.", "Tomorrow we'll produce a report."),
        dl60Pitfall("“Produced” como modelo para produjo", "El inglés regular no muestra la irregularidad española. No use produced to guess produció or producieron.", "Produjo and produjeron use -duj-.")
      ],
      variations: [
        dl60Variation("The storm produced flooding.", "news explanatory", "Inglés universal", "Un evento generó un efecto."),
        dl60Variation("The works produced more mud.", "news conversational", "Inglés universal", "Unas obras generaron un resultado concreto."),
        dl60Variation("The damage led to the road closure.", "neutral explanatory", "Inglés universal", "Una causa terminó en una consecuencia."),
        dl60Variation("We'll produce a full report.", "formal practical", "Inglés universal", "Un equipo preparará un documento."),
        dl60Variation("Produjo uses the -duj- stem.", "grammar note", "Inglés para gramática española", "Recordar la irregularidad al volver al español.")
      ],
      prompt: "The reporter asks “what did the storm produce?” ¿Cuándo suena bien produce?",
      choices: [
        "When a report lists effects or created results.",
        "When someone asks a taxi to stop at a corner.",
        "When a friend says something made him laugh."
      ],
      answer: 0,
      practiceExtra: [
        dl60Question("¿Cuál frase explica una consecuencia natural?", ["The storm produced flooding.", "The storm stood up flooding.", "The storm paid attention flooding."], 0, "produce as generate an effect"),
        dl60Question("¿Cuál frase suele fluir mejor para un cierre de vía?", ["The damage laughed the closure.", "The damage led to the closure.", "The damage stood on closure."], 1, "lead to for consequences"),
        dl60Question("¿Cuál frase crea un documento?", ["We'll cause a report.", "We'll stop a report.", "We'll produce a report."], 2, "produce a report"),
        dl60Question("¿Qué recordatorio español es correcto?", ["Produjo uses the -duj- stem.", "Produjo takes a final accent.", "Produjeron adds jieron."], 0, "Spanish produced preterite is -duj-")
      ]
    }
  }
);

markSource(lessons, "data/lessons/60-extending-cause-and-halt.js");
