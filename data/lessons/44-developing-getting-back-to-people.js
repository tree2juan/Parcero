/*
 * Lesson block: developing / getting back to people.
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
 * The three verbs here — contestar, avisar and prometer — handle contact,
 * updates and commitment: answering a phone or message, letting someone know,
 * and giving your word without promising too casually. The two directions are
 * mirrors: same number of dialogue turns, vocabulary entries, culture notes,
 * pitfalls, variations and practice questions, and the same optional slots
 * filled on the same rows. That is enforced by test/shape.test.js, not by good
 * intentions.
 */
const dl44Dialogue = (speaker, target, translation, pronunciation, literal, why) => ({
  speaker, target, translation, pronunciation, literal, why
});
const dl44Vocab = (term, explanation, literal, useWhen, avoidWhen, register, region, related, target, translation) => ({
  term, explanation, literal, useWhen, avoidWhen, register, region, related, example: { target, translation }
});
const dl44Culture = (label, body) => ({ label, body });
const dl44Pitfall = (mistake, whyItFails, sayInstead) => ({ mistake, whyItFails, sayInstead });
const dl44Variation = (form, register, region, whenToUse) => ({ form, register, region, whenToUse });
const dl44Question = (prompt, choices, answer, tests) => tests ? { prompt, choices, answer, tests } : { prompt, choices, answer };

lessons.push(
  {
    id: "being-left-on-read-in-san-andres",
    level: "Developing · Answering messages",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "social-life",
    register: "familiar",
    verb: "contestar",
    review: "pending",
    es: {
      title: "When nobody answers you in San Andrés",
      situation:
        "You are in San Andrés organizing an outing with friends. Someone does not answer the phone, leaves messages on read, and you learn the difference between contestar a message and responder with a more thought-out explanation.",
      setting: {
        who: "Carolina is coordinating a small group plan, and Nico is the friend who has been left waiting for a reply.",
        what: "They try to confirm whether another friend is coming, while distinguishing a missed call, a message left on read, and a considered response.",
        when: "Late afternoon, with the plan close enough that silence has started to feel like an answer.",
        where: "San Andrés, outside a guesthouse before a casual evening plan, using general Colombian Spanish rather than invented island slang.",
        why: "Because contestar is the everyday verb for answering a phone, door, question, or message. Responder is already taught and leans more toward considered response or responsibility."
      },
      address: {
        form: "tú",
        who: "Carolina and Nico are friends planning an evening, so tú keeps the exchange direct and relaxed.",
        why: "The annoyance is mild and familiar. A formal pronoun would make a normal messaging complaint sound colder than it is.",
        ifYouSwitch:
          "Usted would sound like distance or sarcasm between friends here. Vos would pull the scene toward a regional flavor this San Andrés setting does not need."
      },
      dialogue: [
        dl44Dialogue("Carolina", "¿Te contestó Lina o todavía nada?", "Did Lina answer you, or still nothing?", "teh kon-tes-TOH LEE-nah oh toh-dah-BEE-ah NAH-dah", "To-you answered Lina or still nothing?", "Contestar is the verb for the simple act of answering a message or call. The question is not asking for a thoughtful essay; it is asking whether contact happened at all."),
        dl44Dialogue("Nico", "Nada. La llamé dos veces y no contestó el teléfono.", "Nothing. I called her twice and she didn't answer the phone.", "NAH-dah. lah yah-MEH dos BEH-ses ee noh kon-tes-TOH el teh-LEH-foh-noh", "Nothing. Her I-called two times and not answered the phone.", "Contestar el teléfono is the natural Colombian line. Responder el teléfono is understandable, but it sounds off because phones are answered, not responded to."),
        dl44Dialogue("Carolina", "A mí me dejó en visto desde las cuatro.", "She left me on read since four o'clock.", "ah mee meh deh-HOH en BEES-toh des-deh las KWAH-troh", "To me she left me in seen since the four.", "Me dejó en visto is current and useful: the message was seen, but no answer came. It belongs with contestar because silence is the problem."),
        dl44Dialogue("Nico", "Entonces no digamos que respondió; apenas vio el mensaje.", "Then let's not say she responded; she only saw the message.", "en-TON-ses noh dee-GAH-mos keh rres-pon-DYOH; ah-PEH-nas BYOH el men-SAH-heh", "Then not let-us-say that she responded; barely saw the message.", "Here the split is explicit. Responder suggests a real reply with content; contestar can be as basic as picking up or sending a quick answer."),
        dl44Dialogue("Carolina", "Si contesta tarde, igual le decimos dónde estamos.", "If she answers late, we'll still tell her where we are.", "see kon-TES-tah TAR-deh, ee-GWAL leh deh-SEE-mos DON-deh es-TAH-mos", "If she answers late, same to-her we-tell where we-are.", "Contesta tarde is normal for a delayed reply. The verb works for the contact event whether the answer is warm, short, or slightly late."),
        dl44Dialogue("Nico", "Listo, pero yo ya no le vuelvo a contestar en cinco segundos.", "Fine, but I'm not answering her again in five seconds.", "LEES-toh, PEH-roh yo yah noh leh BWEHL-boh ah kon-tes-TAR en SEEN-koh seh-GOON-dohs", "Ready, but I already not to-her return to answer in five seconds.", "Le contestar names answering her messages. The joke is social: quick replies are part of how friends measure attention, even when nobody admits it seriously.")
      ],
      vocabulary: [
        dl44Vocab("contestar", "To answer a phone, door, question, message, or call. It is about replying to a direct prompt or contact.", "to answer", "Use it when someone calls, knocks, asks, texts, or waits for an answer.", "Avoid treating it as identical to responder. Responder often sounds more considered, official, or responsible.", "neutral", "General Spanish and very common in Colombia.", ["responder", "contestar el teléfono", "contestar un mensaje", "devolver la llamada"], "No contestó el teléfono.", "She didn't answer the phone."),
        dl44Vocab("contestar el teléfono", "The natural phrase for answering the phone. It is the one learners should reach for first.", "to answer the telephone", "Use it for picking up when someone calls, whether the call is casual or urgent.", "Avoid responde el teléfono as a direct calque; it sounds off in ordinary Colombian Spanish.", "neutral", "General Spanish.", ["llamar", "colgar", "devolver la llamada", "sonar"], "No contestó el teléfono.", "She didn't answer the phone."),
        dl44Vocab("contestar un mensaje", "To reply to a message, usually with the focus on whether any answer came.", "to answer a message", "Use it for texts, voice notes, chat messages, and direct written questions.", "Avoid it when you need to stress a thoughtful public response. Responder may fit that register better.", "neutral", "General Spanish.", ["responder un mensaje", "dejar en visto", "escribir", "mandar audio"], "No me contestó el mensaje.", "She didn't answer my message."),
        dl44Vocab("dejar en visto", "To leave someone on read: the message was seen, but no reply followed.", "to leave in seen", "Use it when the app shows the message was read and the silence feels socially meaningful.", "Avoid it for old-fashioned letters or calls; it belongs to messaging culture.", "friendly informal", "General Colombian and wider Latin American digital Spanish.", ["visto", "clavar el visto", "no contestar", "ignorar"], "Me dejó en visto desde las cuatro.", "She left me on read since four."),
        dl44Vocab("responder", "To respond, often with more thought, explanation, or responsibility than contestar.", "to respond", "Use it for a considered reply, a formal response, or responder por algo in the responsibility sense.", "Avoid making it your default for phones and doors. Contestar is the everyday verb there.", "neutral", "General Spanish; already taught elsewhere, but contrasted here.", ["contestar", "reaccionar", "explicar", "responder por"], "No digamos que respondió.", "Let's not say she responded."),
        dl44Vocab("todavía nada", "Still nothing. A compact way to report that the expected answer has not arrived.", "still nothing", "Use it when someone asks whether there has been any news, reply, or movement.", "Avoid it when you need a full formal report; it is conversational shorthand.", "friendly informal", "General Spanish.", ["nada todavía", "sin respuesta", "ninguna noticia", "no ha contestado"], "¿Todavía nada?", "Still nothing?"),
        dl44Vocab("contestar tarde", "To answer late, after the useful or polite window has partly passed.", "to answer late", "Use it when the reply eventually comes, but the delay changes the mood or the plan.", "Avoid it when the answer never comes at all. Then no contestó is cleaner.", "neutral", "General Spanish.", ["demorarse en contestar", "responder tarde", "aparecer tarde", "devolver tarde"], "Si contesta tarde, le decimos.", "If she answers late, we'll tell her.")
      ],
      note:
        "Contestar is practical and immediate. You contestas el teléfono, la puerta, una pregunta, un mensaje. Responder is not wrong everywhere, but it leans toward a fuller response, a formal reply, or responsibility. In modern Colombian messaging, no me contestó and me dejó en visto are as useful as any textbook sentence.",
      culture: [
        dl44Culture("Being left on read is social information", "Me dejó en visto does not only report a technical status. It says the other person saw the message and still stayed silent, which can feel like refusal, delay, or avoidance depending on the relationship."),
        dl44Culture("Phones are answered, not responded to", "Contestar el teléfono is the natural phrase. A learner who says responder el teléfono will be understood, but the line sounds translated and slightly unnatural in everyday Spanish."),
        dl44Culture("Silence can be a soft answer", "In Colombian social life, not answering immediately may be tact, avoidance, busyness, or a gentle no. The verb contestar lets people discuss the behavior without forcing a dramatic accusation."),
        dl44Culture("San Andrés without a costume", "The scene is set in San Andrés to broaden the map, but the Spanish stays general. A believable conversation there is better than invented island color.")
      ],
      pitfalls: [
        dl44Pitfall("Using responder el teléfono as your default", "It is understandable, but contestar el teléfono is the idiomatic everyday phrase. Responder sounds as if the phone presented an argument needing a response.", "Contesta el teléfono."),
        dl44Pitfall("Treating visto as a real answer", "If someone left you on read, they saw the message but did not answer. Calling that responder gives them more credit than the situation deserves.", "Me dejó en visto y no contestó."),
        dl44Pitfall("Using contestar for formal responsibility", "Contestar can answer a question, but responder por algo is the established responsibility pattern. Do not flatten every response into contestar.", "Él responde por el equipo."),
        dl44Pitfall("Forgetting the person who receives the reply", "Spanish often marks who got answered with le or me. No contestó is complete, but no me contestó tells the social story.", "No me contestó el mensaje.")
      ],
      variations: [
        dl44Variation("¿Te contestó Lina?", "friendly informal", "General Spanish", "Checking whether contact happened at all."),
        dl44Variation("No contestó el teléfono.", "neutral", "General Spanish", "Someone did not pick up the call."),
        dl44Variation("Me dejó en visto.", "friendly informal", "Digital Spanish", "The message was seen and ignored or deferred."),
        dl44Variation("No me contestó el mensaje.", "neutral", "General Spanish", "A direct message got no reply."),
        dl44Variation("Eso merece una respuesta más seria.", "neutral", "General Spanish", "You mean a considered response, not a quick answer."),
        {
          form: "De pronto ya lo vio y no ha querido contestar.",
          register: "familiar",
          region: "General Colombian",
          whenToUse: "Guessing out loud without accusing. De pronto is Colombian for maybe, and it keeps the guess friendly."
        }
      ],
      prompt: "Nico says “no contestó el teléfono.” Why is contestar the right verb?",
      choices: [
        "Because the issue is whether she picked up or answered at all.",
        "Because the phone needs a formal written response from Lina.",
        "Because contestar only means leaving someone on read online."
      ],
      answer: 0,
      practiceExtra: [
        dl44Question("Which line means Lina left Carolina on read?", ["Lina me dejó en visto desde las cuatro.", "Lina me contestó con calma desde las cuatro.", "Lina me respondió por el equipo desde las cuatro."], 0, "dejar en visto as seen but unanswered"),
        dl44Question("Which sentence sounds most natural for answering a phone?", ["Responde el teléfono ahora mismo.", "Contesta el teléfono ahora mismo.", "Promete el teléfono ahora mismo."], 1, "contestar el teléfono as the idiom"),
        dl44Question("Which phrase points to a considered response rather than quick contact?", ["Eso merece una respuesta seria.", "Eso contesta una llamada perdida.", "Eso deja un mensaje en visto."], 0, "responder and respuesta for a fuller reply"),
        dl44Question("Which sentence says the message got no answer?", ["Me avisó el mensaje temprano.", "Me prometió el mensaje tarde.", "No me contestó el mensaje."], 2, "contestar a messages and the indirect object")
      ]
    },
    en: {
      title: "Contestar mensajes en Houston",
      situation:
        "Usted está en Houston organizando una salida con amigos. Alguien no responde al teléfono, deja mensajes leídos y usted necesita distinguir answer, reply, respond y leave on read sin traducir responder para todo.",
      setting: {
        who: "Carolina coordina un plan de amigos y Nico lleva toda la tarde esperando una respuesta.",
        what: "Intentan confirmar si Lina va, mientras separan una llamada no contestada, un mensaje leído y una respuesta pensada.",
        when: "Al final de la tarde, cuando el plan está tan cerca que el silencio ya empieza a parecer una respuesta.",
        where: "Houston, afuera de una residencia donde todos organizan planes por mensajes en inglés.",
        why: "Porque contestar en español se reparte en inglés entre answer, reply, respond y leave on read. Cada uno marca un tipo distinto de contacto."
      },
      address: {
        form: "mixed",
        who: "Carolina y Nico hablan como amigos; el inglés usa el mismo you aunque haya molestia o confianza.",
        why: "La cercanía se oye en frases cortas y quejas suaves, no en un cambio de pronombre.",
        ifYouSwitch:
          "Usar sir o ma'am en esta escena sonaría como burla. Para sonar más o menos directo, el inglés cambia el tono y las palabras."
      },
      dialogue: [
        dl44Dialogue("Carolina", "Did Lina answer you, or still nothing?", "¿Te contestó Lina o todavía nada?", "did LEE-nah AN-ser yu, or stil NA-zing", "¿Lina le contestó a usted, o todavía nada?", "“Answer” funciona porque la pregunta es si hubo contacto. No exige una explicación larga; basta saber si Lina contestó o no."),
        dl44Dialogue("Nico", "Nothing. I called twice and she didn't answer the phone.", "Nada. La llamé dos veces y no contestó el teléfono.", "NA-zing. ai kold tuais and shi DID-ent AN-ser da foun", "Nada. Llamé dos veces y ella no contestó el teléfono.", "“Answer the phone” es la frase normal. “Respond the phone” no sirve; el teléfono se contesta, no se responde con argumento."),
        dl44Dialogue("Carolina", "She left me on read at four and never replied.", "A mí me dejó en visto a las cuatro y nunca contestó.", "shi left mi on red at for and NE-ver ri-PLAID", "Ella me dejó en leído a las cuatro y nunca respondió.", "“Left me on read” es el equivalente digital de me dejó en visto. “Replied” confirma que sí hubo respuesta; aquí precisamente no la hubo."),
        dl44Dialogue("Nico", "Then don't say she responded; she just saw the message.", "Entonces no digas que respondió; apenas vio el mensaje.", "den dont sei shi ri-SPON-ded; shi yost so da ME-sech", "Entonces no diga que ella respondió; sólo vio el mensaje.", "“Responded” suena más completo que ver un mensaje. Sirve para una respuesta real, no para el silencio después del visto."),
        dl44Dialogue("Carolina", "If she replies late, we'll still tell her where we are.", "Si contesta tarde, igual le decimos dónde estamos.", "if shi ri-PLAIZ leit, uil stil tel jer wer ui ar", "Si ella responde tarde, todavía le diremos dónde estamos.", "“Reply” es el verbo más natural para contestar un mensaje. “Answer” también puede servir, pero “reply” centra la conversación escrita."),
        dl44Dialogue("Nico", "Fine, but I'm not replying in five seconds next time.", "Listo, pero yo ya no le vuelvo a contestar en cinco segundos.", "fain, bat aim not ri-PLAI-ing in faiv SE-konds nekst taim", "Bueno, pero no responderé en cinco segundos la próxima vez.", "“Replying” mantiene el tono de chat. La frase muestra que la velocidad de respuesta también comunica atención, molestia o distancia.")
      ],
      vocabulary: [
        dl44Vocab("answer", "Contestar una llamada, una pregunta o una puerta. Es el verbo más directo para decir que hubo respuesta básica.", "contestar", "Úselo con phone, question, door, call y situaciones donde importa si alguien respondió o no.", "Evítelo si quiere hablar de una respuesta escrita específica; reply puede sonar más preciso.", "neutro", "Inglés universal.", ["reply", "respond", "pick up", "call back"], "She didn't answer the phone.", "No contestó el teléfono."),
        dl44Vocab("answer the phone", "Contestar el teléfono. Es frase fija y natural.", "contestar el teléfono", "Úselo cuando alguien recoge una llamada o no la recoge.", "Evítelo como respond the phone. Esa frase suena incorrecta en inglés cotidiano.", "neutro", "Inglés universal.", ["pick up", "take the call", "call back", "miss the call"], "Answer the phone, please.", "Contesta el teléfono, por favor."),
        dl44Vocab("reply", "Responder o contestar un mensaje, correo o comentario. En chat suele ser más preciso que answer.", "contestar / responder", "Úselo para textos, correos, mensajes de voz, comentarios y conversaciones escritas.", "Evítelo con puertas y teléfonos si habla de recoger la llamada; answer fits better there.", "neutro", "Inglés universal.", ["answer", "write back", "text back", "respond"], "She never replied.", "Nunca contestó."),
        dl44Vocab("leave someone on read", "Dejar a alguien en visto: leer el mensaje y no contestar.", "dejar en leído", "Úselo cuando la aplicación muestra que la otra persona vio el mensaje.", "Evítelo para llamadas, cartas o situaciones sin confirmación de lectura.", "amistoso informal", "Inglés digital.", ["read receipt", "ignore", "not reply", "seen"], "She left me on read.", "Me dejó en visto."),
        dl44Vocab("respond", "Responder de manera más considerada, formal o completa que un simple answer.", "responder", "Úselo para comunicados, preguntas serias, crisis, críticas o respuestas pensadas.", "Evítelo con phone como objeto directo. No se dice respond the phone.", "neutro", "Inglés universal.", ["reply", "answer", "react", "address"], "She responded carefully.", "Respondió con cuidado."),
        dl44Vocab("still nothing", "Todavía nada. Sirve para decir que no ha llegado ninguna respuesta.", "todavía nada", "Úselo cuando alguien pregunta si hubo noticias, respuesta o movimiento.", "Evítelo en informes formales, donde conviene una frase completa.", "amistoso informal", "Inglés universal.", ["no news", "nothing yet", "no answer", "no reply"], "Still nothing from Lina.", "Todavía nada de Lina."),
        dl44Vocab("reply late", "Contestar tarde, cuando la respuesta llega después de lo útil o lo cortés.", "responder tarde", "Úselo cuando la respuesta sí llega, pero la demora cambia el plan o el ánimo.", "Evítelo si nunca llegó respuesta. Entonces use never replied or didn't answer.", "neutro", "Inglés universal.", ["answer late", "text back late", "get back late", "respond late"], "If she replies late, tell her.", "Si contesta tarde, dígale.")
      ],
      note:
        "El inglés separa lo que en español suele caber en contestar. “Answer” sirve para teléfono, puerta y pregunta; “reply” para mensajes; “respond” para una respuesta más pensada; “leave on read” para visto sin respuesta. Decir “respond the phone” delata el calco de responder.",
      culture: [
        dl44Culture("El visto también pesa en inglés", "“Left me on read” no es sólo un dato técnico. Igual que me dejó en visto, puede insinuar molestia, evasión, falta de interés o simplemente un día ocupado."),
        dl44Culture("Answer no siempre es profundo", "“Answer” puede ser tan simple como levantar el teléfono o escribir sí. Si quiere hablar de una reacción más elaborada, “respond” suele sonar más serio."),
        dl44Culture("Reply es territorio de mensajes", "En correos, chats y comentarios, “reply” suena limpio y directo. Por eso “she never replied” traduce muy bien no me contestó en una conversación de mensajes."),
        dl44Culture("El silencio evita comprometerse", "No contestar puede ser descuido, cansancio o una forma suave de no confirmar. El inglés tiene las mismas ambigüedades sociales, aunque cambien las frases.")
      ],
      pitfalls: [
        dl44Pitfall("“She responded the phone.”", "Respond no toma phone como objeto de esa manera. Para una llamada, el inglés usa answer o pick up.", "She answered the phone."),
        dl44Pitfall("“She let me in seen.”", "Es un calco de me dejó en visto. La frase digital ya hecha es leave someone on read.", "She left me on read."),
        dl44Pitfall("“She answered a formal complaint quickly.”", "Se entiende, pero si la respuesta es oficial o considerada, responded to puede sonar más natural.", "She responded to the complaint."),
        dl44Pitfall("“Still anything from Lina?”", "Todavía nada no se arma con anything en esa pregunta. La frase breve natural es still nothing.", "Still nothing from Lina?")
      ],
      variations: [
        dl44Variation("Did Lina answer you?", "amistoso informal", "Inglés universal", "Pregunta si Lina contestó de alguna manera."),
        dl44Variation("She didn't answer the phone.", "neutro", "Inglés universal", "No recogió la llamada."),
        dl44Variation("She left me on read.", "amistoso informal", "Inglés digital", "Vio el mensaje y no respondió."),
        dl44Variation("She never replied.", "neutro", "Inglés universal", "No contestó el mensaje."),
        dl44Variation("That deserves a serious response.", "neutro", "Inglés universal", "Habla de una respuesta considerada, no de contacto rápido."),
        {
          form: "She must have seen it by now, hasn't she?",
          register: "familiar",
          region: "Inglés universal",
          whenToUse: "Para suponer algo y dejar que el otro lo confirme. La coletilla convierte la sospecha en pregunta."
        }
      ],
      prompt: "Nico says “she didn't answer the phone.” ¿Por qué answer es correcto?",
      choices: [
        "Porque habla de recoger o contestar una llamada.",
        "Porque phone siempre exige una respuesta formal escrita.",
        "Porque answer sólo significa dejar en visto."
      ],
      answer: 0,
      practiceExtra: [
        dl44Question("¿Cuál frase significa me dejó en visto?", ["She left me on read.", "She answered me warmly.", "She responded officially."], 0, "leave on read as seen but unanswered"),
        dl44Question("¿Cuál frase corrige “responded the phone”?", ["She replied the phone.", "She answered the phone.", "She promised the phone."], 1, "answer the phone as the fixed phrase"),
        dl44Question("¿Cuál frase suena más formal o pensada?", ["She got left on read.", "She picked up the phone.", "She responded to the complaint."], 2, "respond to for considered replies"),
        dl44Question("¿Cuál frase pertenece mejor a mensajes escritos?", ["She called the door back.", "She replied to my text.", "She promised my phone."], 1, "reply to texts and written messages")
      ]
    }
  },
  {
    id: "letting-family-know-in-sincelejo",
    level: "Developing · Letting people know",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "family-and-relationships",
    register: "courteous",
    verb: "avisar",
    review: "pending",
    es: {
      title: "Letting them know when you get to Sincelejo",
      situation:
        "You are in Sincelejo coordinating a family visit. Everyone says me avisas, yo te aviso, and avíseme cuando llegue, but you learn that yo te aviso is sometimes a gentle way to put something off, not a firm promise.",
      setting: {
        who: "Valeria is arriving to visit relatives, and her aunt Marta is coordinating keys, lunch, transport, and timing.",
        what: "They arrange how Valeria will let people know she has arrived, whether lunch is happening, and when a vague deferral is not the same as a promise.",
        when: "Late morning on a travel day, when everyone is half ready and waiting for someone else's update.",
        where: "Sincelejo, between a family house and the bus arrival, with plain useful Colombian Spanish.",
        why: "Because avisar is one of the most useful Colombian verbs for arranging anything. Me avisas and yo te aviso are social tools as much as grammar."
      },
      address: {
        form: "usted",
        who: "Tía Marta uses usted with Valeria affectionately, and Valeria answers the same way because many Colombian families do this naturally.",
        why: "Usted in family speech can be warm, not distant. It also makes avíseme cuando llegue sound completely natural.",
        ifYouSwitch:
          "Tú would also be possible in another family, but it would erase the affectionate usted this scene is built on. Vos would not fit the general register."
      },
      dialogue: [
        dl44Dialogue("Tía Marta", "Cuando llegue al terminal, avíseme de una vez.", "When you get to the terminal, let me know right away.", "KWAN-doh YEH-geh al ter-mee-NAL, ah-BEE-seh-meh deh OO-nah bes", "When you arrive at-the terminal, notify-me at one time.", "Avíseme is the usted command. In Colombia, this is one of the most normal ways to coordinate arrivals: not formal, just practical and caring."),
        dl44Dialogue("Valeria", "Claro, tía. Yo le aviso apenas me baje del bus.", "Of course, auntie. I'll let you know as soon as I get off the bus.", "KLAH-roh, TEE-ah. yo leh ah-BEE-soh ah-PEH-nas meh BAH-heh del boos", "Clear, aunt. I to-you notify as-soon-as myself get-down from-the bus.", "Yo le aviso is a real update here because it names when: as soon as she gets off the bus. Specific timing makes the phrase stronger."),
        dl44Dialogue("Tía Marta", "También me avisa si quiere almorzar aquí o donde su prima.", "Also let me know whether you want lunch here or at your cousin's place.", "tam-BYEN meh ah-BEE-sah see KYEH-reh al-mor-SAR ah-KEE oh DON-deh soo PREE-mah", "Also me notify if you want to-lunch here or where your cousin.", "Me avisa keeps the arrangement open without pressure. It asks for an update, not a life decision."),
        dl44Dialogue("Valeria", "Le aviso, pero no me espere con la mesa servida.", "I'll let you know, but don't wait for me with the table set.", "leh ah-BEE-soh, PEH-roh noh meh es-PEH-reh kon lah MEH-sah ser-BEE-dah", "To-you I-notify, but not me wait with the table served.", "This is honest Colombian pragmatics: le aviso can defer a decision. Valeria softens the uncertainty so her aunt does not hear it as a firm yes."),
        dl44Dialogue("Tía Marta", "Ajá, ese “yo le aviso” a veces quiere decir “no cuente conmigo”.", "Right, that “I'll let you know” sometimes means “don't count on me.”", "ah-HAH, EH-seh yo leh ah-BEE-soh ah BEH-ses KYEH-reh deh-SEER noh KWEN-teh kon-MEE-goh", "Right, that I to-you notify sometimes wants to say do-not count with-me.", "Yo le aviso is not always a promise. It can be a soft non-committal deferral, especially when the speaker avoids a direct yes."),
        dl44Dialogue("Valeria", "Esta vez sí le aviso en serio; si cambio de plan, la llamo.", "This time I really will let you know; if I change plans, I'll call you.", "ES-tah bes see leh ah-BEE-soh en SEH-ryoh; see KAM-byoh deh plan, lah YAH-moh", "This time yes to-you I-notify seriously; if I change of plan, you I-call.", "En serio repairs the ambiguity. Valeria turns a flexible Colombian phrase into a firmer commitment without needing prometer.")
      ],
      vocabulary: [
        dl44Vocab("avisar", "To let someone know, give notice, warn, or update. It is a default Colombian coordination verb.", "to notify / tell", "Use it for arrivals, changes of plan, decisions, delays, warnings, and practical updates.", "Avoid hearing every yo te aviso as a firm commitment. Sometimes it politely keeps the decision open.", "neutral", "Extremely useful in Colombian Spanish and understood everywhere.", ["informar", "contar", "advertir", "notificar"], "Yo le aviso cuando llegue.", "I'll let you know when I arrive."),
        dl44Vocab("me avisas", "Let me know. A friendly, flexible way to ask someone to update you later.", "you notify me", "Use it when the other person will know the answer later: arrival time, choice, delay, or change.", "Avoid using it when you need an immediate answer. It invites a later update.", "friendly informal", "General Colombian Spanish; one of the most common planning phrases.", ["me cuentas", "me dices", "me confirmas", "me escribes"], "Me avisas si quieres almorzar.", "Let me know if you want lunch."),
        dl44Vocab("yo te aviso", "I'll let you know. It can be sincere, but it can also be a soft deferral.", "I notify you", "Use it when you genuinely need to check something and report back.", "Avoid assuming it means yes. Without timing or detail, it may mean maybe, later, or probably not.", "neutral conversational", "Very common Colombian Spanish with real pragmatic ambiguity.", ["te cuento", "te confirmo", "miramos a ver", "yo te digo"], "Yo te aviso apenas llegue.", "I'll let you know as soon as I arrive."),
        dl44Vocab("avíseme", "Let me know, in usted. Warm, practical, and common in families, services, and neighbors.", "notify me", "Use it when speaking with usted: relatives, drivers, older neighbors, clients, or anyone treated respectfully.", "Avoid mixing it with tú forms. If the relationship is tú, say avísame.", "polite warm", "General Colombian Spanish.", ["avísame", "me informa", "me cuenta", "me confirma"], "Avíseme cuando llegue.", "Let me know when you arrive."),
        dl44Vocab("avisar de una vez", "To let someone know right away, without waiting or letting the update drift.", "notify at one time", "Use it when timing matters and the other person should not have to chase you.", "Avoid it if the update is optional or casual; de una vez adds urgency.", "neutral conversational", "General Colombian Spanish.", ["avisar enseguida", "avisar apenas", "avisar ya", "confirmar rápido"], "Avíseme de una vez.", "Let me know right away."),
        dl44Vocab("avisar en serio", "To really let someone know, said when the usual phrase might sound vague.", "notify seriously", "Use it to repair doubt and make yo te aviso sound less like a brush-off.", "Avoid overusing it. If everything is en serio, the phrase stops reassuring anyone.", "friendly informal", "General Spanish.", ["confirmar de verdad", "cumplir", "no dejar esperando", "decir claro"], "Esta vez sí le aviso en serio.", "This time I really will let you know."),
        dl44Vocab("no cuente conmigo", "Do not count on me. A clear way to say the plan should not depend on you.", "do not count with me", "Use it when a vague maybe would waste people's time.", "Avoid it when you only need more time to confirm. It sounds much firmer than yo te aviso.", "neutral direct", "General Spanish.", ["no me espere", "no dependa de mí", "no prometo", "no confirmo"], "No cuente conmigo todavía.", "Don't count on me yet.")
      ],
      note:
        "Avisar deserves extra attention because Colombian plans run on it. Me avisas, yo te aviso, avíseme cuando llegue, avísame si cambia algo: these phrases keep people coordinated without sounding heavy. The danger is pragmatic, not grammatical. Yo te aviso may be a real update, or it may be a soft way to avoid committing yet.",
      culture: [
        dl44Culture("Me avisas is social glue", "Colombian arrangements often stay flexible until the last practical moment. Me avisas lets people coordinate without pretending every detail is fixed early."),
        dl44Culture("Yo te aviso may not be yes", "A learner can wait all afternoon after hearing yo te aviso because English hears it as a clear future action. In Colombia it can be sincere, but it can also mean I am not ready to commit."),
        dl44Culture("Usted can be affectionate", "Avíseme cuando llegue can be something an aunt says warmly, not a clerk speaking coldly. In many families, usted and affection sit side by side."),
        dl44Culture("Sincelejo can teach ordinary planning", "The city gives the block a different department without forcing local color. The phrases here are broadly Colombian and useful far beyond this one setting.")
      ],
      pitfalls: [
        dl44Pitfall("Hearing yo te aviso as a firm yes", "Sometimes it is a real promise to update you. Sometimes it is a polite deferral that keeps the speaker from saying no right now. Listen for timing and detail.", "Yo te aviso apenas llegue is firmer than yo te aviso alone."),
        dl44Pitfall("Mixing avísame and avíseme randomly", "Avísame is tú; avíseme is usted. Colombian warmth does not erase the grammar, so match the form to the relationship.", "Avíseme cuando llegue, tía."),
        dl44Pitfall("Using avisar only for warnings", "Avisar can warn, but in Colombia it very often means simply let me know. If you hear me avisas, nobody is necessarily in danger.", "Me avisas si cambia el plan."),
        dl44Pitfall("Promising when avisar is enough", "If you only need to send an update, prometer may sound too solemn. Avisar keeps the commitment practical and lighter.", "Yo le aviso apenas sepa.")
      ],
      variations: [
        dl44Variation("Me avisas cuando llegues.", "warm informal", "General Colombian", "A friendly request for an arrival update."),
        dl44Variation("Yo te aviso apenas sepa.", "neutral conversational", "General Colombian", "You genuinely need to check first."),
        dl44Variation("Avíseme cuando llegue.", "polite warm", "General Colombian", "Usted form, common with relatives and services."),
        dl44Variation("Le aviso, pero no me espere.", "honest practical", "General Spanish", "You are not confirming yet and do not want them waiting."),
        dl44Variation("Esta vez sí le aviso en serio.", "friendly informal", "General Spanish", "You want to remove the usual ambiguity.")
      ],
      prompt: "Tía Marta hears “yo le aviso” and stays cautious. Why?",
      choices: [
        "Because it can be a soft deferral rather than a firm commitment.",
        "Because avisar only means warning someone about danger.",
        "Because usted commands cannot be warm inside a family."
      ],
      answer: 0,
      practiceExtra: [
        dl44Question("Which line is the usted form for “let me know when you arrive”?", ["Avísame cuando llegues.", "Avíseme cuando llegue.", "Me avisas cuando llegas."], 1, "avíseme as usted command"),
        dl44Question("Which phrase is most clearly a flexible later update?", ["Yo te aviso apenas sepa.", "Te lo prometo sin falta.", "Ya te contesté ayer."], 0, "avisar as later update rather than promise"),
        dl44Question("Which sentence honestly avoids making them wait?", ["Le aviso, pero no me espere.", "Le prometo mesa servida.", "Le contesto el almuerzo."], 0, "avisar while avoiding a false confirmation"),
        dl44Question("Which phrase makes the update firmer than vague “yo te aviso”?", ["Yo miro a ver después.", "Esta vez sí le aviso en serio.", "Todavía no cuente conmigo."], 1, "en serio repairing ambiguity")
      ]
    },
    en: {
      title: "Avisar cambios en Londres",
      situation:
        "Usted está en Londres coordinando una visita familiar. En español todo sería me avisas o yo te aviso, pero en inglés debe escoger entre let me know, tell me, give me a heads-up y I'll let you know.",
      setting: {
        who: "Valeria llega a visitar familiares y su tía Marta coordina llaves, almuerzo, transporte y horarios.",
        what: "Acuerdan cómo avisar la llegada, si habrá almuerzo y cuándo una frase vaga no equivale a una promesa.",
        when: "Una mañana de viaje, cuando todos están medio listos y pendientes de la próxima actualización.",
        where: "Londres, entre la estación y la casa familiar, porque esta dirección enseña inglés en un contexto fuera de Colombia.",
        why: "Porque avisar es más amplio que una sola traducción. El inglés reparte la idea entre let someone know, tell, notify y give a heads-up."
      },
      address: {
        form: "mixed",
        who: "Marta y Valeria hablan como familia; en inglés el mismo you sirve para cariño e instrucciones.",
        why: "La cercanía aparece en auntie, right away y frases prácticas. No hay una forma verbal equivalente a avíseme.",
        ifYouSwitch:
          "Usar ma'am con una tía en esta escena sonaría raro. Para más respeto, el inglés agrega please o alarga la frase."
      },
      dialogue: [
        dl44Dialogue("Aunt Marta", "Let me know as soon as you get to the station.", "Avíseme apenas llegue a la estación.", "let mi nou az sun az yu get tu da STEI-shon", "Déjeme saber tan pronto como llegue a la estación.", "“Let me know” es la traducción más útil de avíseme o avísame. Suena natural para coordinar llegadas sin ponerse formal."),
        dl44Dialogue("Valeria", "Of course, auntie. I'll let you know when I get off the bus.", "Claro, tía. Yo le aviso cuando me baje del bus.", "ov kors, AN-ti. ail let yu nou wen ai get of da bas", "Por supuesto, tía. Le dejaré saber cuando me baje del bus.", "“I'll let you know” es real aquí porque trae un momento concreto. La frase sola puede ser vaga, pero when fija el compromiso."),
        dl44Dialogue("Aunt Marta", "Also tell me if you want lunch here or at your cousin's.", "También dígame si quiere almorzar aquí o donde su prima.", "OL-so tel mi if yu uant lonch jir or at yor KO-zins", "También dígame si quiere almuerzo aquí o en lo de su prima.", "“Tell me” es más directo que “let me know”. Sirve cuando la tía quiere una decisión, no sólo una actualización abierta."),
        dl44Dialogue("Valeria", "I'll let you know, but don't wait with the table set.", "Le aviso, pero no me espere con la mesa servida.", "ail let yu nou, bat dont weit uid da TEI-bol set", "Le dejaré saber, pero no espere con la mesa puesta.", "Aquí “I'll let you know” tiene la misma ambigüedad de yo le aviso. Suaviza la falta de decisión y evita prometer algo que quizás no pase."),
        dl44Dialogue("Aunt Marta", "Right, sometimes “I'll let you know” means “don't count on me.”", "Ajá, a veces “yo le aviso” quiere decir “no cuente conmigo”.", "rait, SOM-taimz ail let yu nou minz dont kaunt on mi", "Correcto, a veces le dejaré saber significa no cuente conmigo.", "La tía lee la pragmática, no sólo la gramática. En inglés también puede ser una salida suave, sobre todo sin hora ni detalle."),
        dl44Dialogue("Valeria", "This time I mean it. If the plan changes, I'll give you a heads-up.", "Esta vez es en serio. Si cambia el plan, le aviso con tiempo.", "dis taim ai min it. if da plan CHEIN-jez, ail giv yu a jedz op", "Esta vez lo digo en serio. Si el plan cambia, le daré una cabeza arriba.", "“Give you a heads-up” es avisar con anticipación para que la otra persona se prepare. “I mean it” corrige la sospecha de vaguedad.")
      ],
      vocabulary: [
        dl44Vocab("let me know", "La traducción más útil de avísame o avíseme en planes cotidianos.", "déjeme saber", "Úselo para llegadas, cambios de plan, decisiones pendientes y actualizaciones simples.", "Evítelo si necesita un aviso formal legal o institucional; notify puede ser más apropiado.", "neutro cálido", "Inglés universal.", ["tell me", "update me", "keep me posted", "give me a heads-up"], "Let me know when you arrive.", "Avíseme cuando llegue."),
        dl44Vocab("I'll let you know", "Yo te aviso o yo le aviso. Puede ser una promesa real o una forma suave de aplazar.", "le dejaré saber", "Úselo cuando de verdad va a revisar algo y contestar después.", "Evítelo como sustituto de un sí firme. Puede sonar a maybe if no time or detail follows.", "neutro conversacional", "Inglés universal.", ["I'll tell you", "I'll update you", "I'll get back to you", "I'll keep you posted"], "I'll let you know when I get there.", "Le aviso cuando llegue."),
        dl44Vocab("tell me", "Dígame o dime. Es más directo que let me know y pide una información concreta.", "dígame", "Úselo cuando la decisión ya puede darse: dónde, cuándo, cuál opción o qué pasó.", "Evítelo si quiere sonar más suave y abierto. Let me know gives more room.", "neutro", "Inglés universal.", ["let me know", "say", "explain", "confirm"], "Tell me if you want lunch.", "Dígame si quiere almorzar."),
        dl44Vocab("notify", "Notificar. Es más formal que avisar en la mayoría de planes familiares.", "notificar", "Úselo para oficinas, sistemas, aerolíneas, bancos, reglas o avisos oficiales.", "Evítelo para una tía que espera saber si usted almuerza. Suena demasiado institucional.", "formal", "Inglés universal.", ["inform", "send notice", "alert", "advise"], "The airline will notify you.", "La aerolínea le avisará."),
        dl44Vocab("give a heads-up", "Avisar con tiempo o advertir para que alguien se prepare.", "dar una cabeza arriba", "Úselo cuando un cambio puede afectar planes y usted quiere prevenir sorpresa.", "Evítelo en escritura muy formal. Advance notice puede sonar más limpio.", "amistoso informal", "Inglés universal.", ["warn", "let know early", "give notice", "flag"], "I'll give you a heads-up.", "Le aviso con tiempo."),
        dl44Vocab("I mean it", "Lo digo en serio. Sirve para quitar la sospecha de vaguedad.", "lo significo", "Úselo cuando una frase como I'll let you know pudo sonar débil y quiere reforzarla.", "Evítelo si no piensa cumplir. La frase aumenta la expectativa.", "neutro conversacional", "Inglés universal.", ["seriously", "for real", "I promise", "no kidding"], "This time I mean it.", "Esta vez es en serio."),
        dl44Vocab("don't count on me", "No cuente conmigo. Es mucho más claro que una evasiva.", "no cuente en mí", "Úselo cuando el plan no debe depender de usted.", "Evítelo si todavía puede confirmar después. Suena como una negativa bastante firme.", "neutro directo", "Inglés universal.", ["don't wait for me", "I can't commit", "not confirmed", "not likely"], "Don't count on me yet.", "No cuente conmigo todavía.")
      ],
      note:
        "Para un colombiano, avisar es una navaja suiza. En inglés, “let me know” cubre gran parte del terreno, pero no todo. “Tell me” pide información directa, “notify” formaliza, “give a heads-up” avisa con tiempo, y “I'll let you know” puede ser tan ambiguo como yo te aviso si no trae hora, condición o detalle.",
      culture: [
        dl44Culture("Let me know mantiene la puerta abierta", "La frase coordina sin presionar. Por eso aparece tanto en planes familiares, trabajo y amistad. No significa por sí sola que ya haya una decisión."),
        dl44Culture("I'll let you know puede aplazar", "Igual que yo te aviso, “I'll let you know” puede ser sincero o puede evitar un no inmediato. El detalle que sigue decide cuánto peso tiene."),
        dl44Culture("Notify es más institucional", "Una aplicación, un banco o una aerolínea notify you. Una tía normalmente says let me know or tell me. Cambiar el verbo cambia la relación."),
        dl44Culture("Heads-up es cortesía preventiva", "Dar un heads-up es avisar antes de que el cambio golpee a la otra persona. No es necesariamente una emergencia; es consideración.")
      ],
      pitfalls: [
        dl44Pitfall("“Advise me when you arrive.”", "Advise existe, pero para avíseme cuando llegue suena demasiado formal o jurídico en muchos contextos. La frase familiar es let me know.", "Let me know when you arrive."),
        dl44Pitfall("“I'll notify you about lunch.”", "Notify suena institucional para una decisión de almuerzo familiar. Parece correo automático, no conversación con una tía.", "I'll let you know about lunch."),
        dl44Pitfall("“I will let you know” como sí firme", "La frase puede aplazar igual que yo te aviso. Si quiere compromiso, agregue hora, condición clara o say I mean it.", "I'll let you know as soon as I arrive."),
        dl44Pitfall("“Give me an advice” para avisar", "Advice es consejo, no aviso. Para una alerta previa use heads-up; para una actualización use let me know.", "Give me a heads-up.")
      ],
      variations: [
        dl44Variation("Let me know when you arrive.", "neutro cálido", "Inglés universal", "Pedir un aviso de llegada."),
        dl44Variation("I'll let you know as soon as I know.", "neutro conversacional", "Inglés universal", "Promete actualizar cuando tenga información."),
        dl44Variation("Tell me if you want lunch.", "neutro", "Inglés universal", "Pide una decisión concreta."),
        dl44Variation("I'll give you a heads-up.", "amistoso informal", "Inglés universal", "Avisará con anticipación para evitar sorpresa."),
        dl44Variation("Don't count on me yet.", "neutro directo", "Inglés universal", "Aclara que el plan no debe depender de usted.")
      ],
      prompt: "Aunt Marta hears “I'll let you know” and stays cautious. ¿Por qué?",
      choices: [
        "Porque puede aplazar la decisión sin confirmar todavía.",
        "Porque sólo se usa para avisos oficiales de aerolíneas.",
        "Porque significa que Valeria ya prometió llegar a almorzar."
      ],
      answer: 0,
      practiceExtra: [
        dl44Question("¿Cuál frase traduce mejor avíseme cuando llegue?", ["Let me know when you arrive.", "Notify lunch when you arrive.", "Advice me when you arrive."], 0, "let me know for ordinary avisar"),
        dl44Question("¿Cuál frase suena demasiado institucional para una tía?", ["Tell me if you want lunch.", "I'll notify you about lunch.", "I'll let you know about lunch."], 1, "notify as formal register"),
        dl44Question("¿Cuál frase avisa con anticipación?", ["I'll give you a heads-up.", "I'll count on you silently.", "I'll answer the table later."], 0, "heads-up as advance notice"),
        dl44Question("¿Cuál frase hace más firme un “I'll let you know”?", ["I might ignore the message.", "No news is my answer.", "I'll let you know as soon as I arrive."], 2, "specific timing makes the update firmer")
      ]
    }
  },
  {
    id: "promising-after-a-delay-in-manizales",
    level: "Developing · Giving your word",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "familiar",
    verb: "prometer",
    review: "pending",
    es: {
      title: "Making a promise after letting someone down",
      situation:
        "You are in Manizales after letting a friend down. You need to promise only when you truly are going to follow through, and notice when Colombians prefer to soften things with yo miro a ver, si Dios quiere, or de una.",
      setting: {
        who: "Laura missed an important update, and Camilo is the friend who waited and now wants clarity rather than excuses.",
        what: "They talk through apology, a strong promise, a formal usted-style promise, and softer ways Colombians avoid overpromising.",
        when: "Early evening after a rainy afternoon delayed errands and messages around town.",
        where: "Manizales, outside a cable station, bringing Caldas into the block with general Colombian Spanish.",
        why: "Because prometer is regular and easy; the real lesson is register. Te lo prometo is strong, and promising too easily can sound worse than not promising."
      },
      address: {
        form: "tú",
        who: "Laura and Camilo are close friends, but the missed update makes the tone serious for a few minutes.",
        why: "Tú lets the apology stay personal. The strength comes from te lo prometo, not from a formal pronoun.",
        ifYouSwitch:
          "Usted would turn the apology into something colder or more formal. That can work with a client, but not with this friendship."
      },
      dialogue: [
        dl44Dialogue("Camilo", "Ayer dijiste “yo miro a ver” y nunca me avisaste.", "Yesterday you said “I'll take a look” and never let me know.", "ah-YER dee-HEES-teh yo MEE-roh ah ber ee NOON-kah meh ah-bee-SAS-teh", "Yesterday you-said I look to see and never me notified.", "Yo miro a ver is softer than a promise. It keeps room for maybe, which is exactly why Camilo is annoyed now."),
        dl44Dialogue("Laura", "Tienes razón. Esta vez sí te lo prometo: mañana te contesto.", "You're right. This time I really promise you: tomorrow I'll answer you.", "TYEH-nes rrah-SON. ES-tah bes see teh loh proh-MEH-toh: mah-NYAH-nah teh kon-TES-toh", "You-have reason. This time yes to-you it I-promise: tomorrow to-you I-answer.", "Te lo prometo is strong and sincere. It should not be used as decorative reassurance unless Laura is ready to protect her credibility."),
        dl44Dialogue("Camilo", "No me prometas por salir del paso; prométeme sólo lo que vas a cumplir.", "Don't promise me just to get out of the moment; promise me only what you're going to keep.", "noh meh proh-MEH-tahs por sah-LEER del PAH-soh; proh-MEH-teh-meh SOH-loh loh keh bahs ah koom-PLEER", "Not me promise to leave from-the step; promise-me only what you go to fulfill.", "Prometer raises the stakes. Salir del paso means escaping the awkward moment, and a promise made that way damages trust."),
        dl44Dialogue("Laura", "Entonces no prometo llegar temprano; prometo avisarte antes del mediodía.", "Then I won't promise to arrive early; I promise to let you know before noon.", "en-TON-ses noh proh-MEH-toh yeh-GAR tem-PRAH-noh; proh-MEH-toh ah-bee-SAR-teh AN-tes del meh-dee-oh-DEE-ah", "Then I not promise arrive early; I promise notify-you before midday.", "This is good promising: smaller, clearer, and measurable. She refuses the promise she may not keep and makes the one she can keep."),
        dl44Dialogue("Camilo", "Eso sí suena serio. Con un cliente dirías: le prometo que le escribo.", "That does sound serious. With a client you would say: I promise I'll write to you.", "EH-soh see SWEH-nah SEH-ryoh. kon oon KLYEN-teh dee-REE-ahs: leh proh-MEH-toh keh leh es-KREE-boh", "That yes sounds serious. With a client you-would-say: to-you I-promise that to-you I-write.", "Le prometo que is the usted-shaped formal version. It works in service and client talk, where te lo prometo may sound too intimate."),
        dl44Dialogue("Laura", "Y si de verdad estoy feliz de hacerlo, digo “de una”, no “lo prometo” cada rato.", "And if I'm genuinely happy to do it, I say “right away / absolutely,” not “I promise” every minute.", "ee see deh ber-DAD es-TOY feh-LEES deh ah-SEHR-loh, DEE-goh deh OO-nah, noh loh proh-MEH-toh KAH-dah RAH-toh", "And if truly I-am happy to do-it, I-say at one, not it I-promise every while.", "De una can show genuine enthusiasm. It is often better than overusing prometer, because not every commitment needs an oath.")
      ],
      vocabulary: [
        dl44Vocab("prometer", "To promise. The forms are regular, but the social weight is strong.", "to promise", "Use it when you are giving your word and expect to be judged if you do not follow through.", "Avoid it for vague intentions or polite maybes. A soft phrase may be more honest.", "neutral serious", "General Spanish.", ["cumplir", "jurar", "comprometerse", "asegurar"], "Te lo prometo.", "I promise you."),
        dl44Vocab("te lo prometo", "I promise you. A strong, personal phrase that should sound sincere, not automatic.", "to-you it I-promise", "Use it when a close person needs reassurance and you truly intend to follow through.", "Avoid using it every time you want to sound nice. Repeated promises lose force quickly.", "sincere personal", "General Spanish.", ["lo prometo", "te juro", "de verdad", "en serio"], "Esta vez sí te lo prometo.", "This time I really promise you."),
        dl44Vocab("le prometo que", "The formal usted version: I promise that. It suits clients, officials, or respectful service talk.", "to-you I-promise that", "Use it when you need a serious commitment in a polite or professional relationship.", "Avoid it with close friends if the formality would sound stiff or defensive.", "formal polite", "General Spanish.", ["le aseguro que", "me comprometo a", "le garantizo", "cuente con eso"], "Le prometo que le escribo.", "I promise I'll write to you."),
        dl44Vocab("cumplir", "To keep or fulfill a promise, plan, deadline, or responsibility.", "to fulfill", "Use it when the focus is whether the promised action actually happened.", "Avoid replacing prometer with cumplir. One gives the word; the other keeps it.", "neutral", "General Spanish.", ["hacerlo", "respetar", "cumplir la palabra", "quedar bien"], "Promete sólo lo que vas a cumplir.", "Promise only what you're going to keep."),
        dl44Vocab("yo miro a ver", "A soft Colombian way to say you will see, check, or consider it without committing firmly.", "I look to see", "Use it when you genuinely need to check or want to avoid a hard yes.", "Avoid hearing it as a promise. It often leaves the door open rather than closing the deal.", "friendly informal", "Very common Colombian Spanish.", ["miramos a ver", "déjame mirar", "yo reviso", "te aviso"], "Yo miro a ver y te aviso.", "I'll take a look and let you know."),
        dl44Vocab("si Dios quiere", "God willing. It can be faith, humility, habit, or a softening of certainty.", "if God wants", "Use it when speaking naturally about hopes or plans that still depend on circumstances.", "Avoid treating it as a legal promise. It often makes the commitment less absolute, not more.", "warm conversational", "Very common in Colombia and across Latin America.", ["ojalá", "si todo sale bien", "esperemos", "Dios mediante"], "Si Dios quiere, mañana paso.", "God willing, I'll stop by tomorrow."),
        dl44Vocab("de una", "Right away, absolutely, or I'm in, depending on context. It can show genuine enthusiasm.", "at one", "Use it when you agree readily and warmly to do something.", "Avoid using it when you need conditions or uncertainty. De una sounds more eager than maybe.", "friendly informal", "Very common Colombian Spanish.", ["claro", "listo", "hágale", "sin problema"], "De una, yo te acompaño.", "Absolutely, I'll go with you.")
      ],
      note:
        "Prometer is not hard to conjugate; it is hard to use well. Te lo prometo is strong and personal, le prometo que is formal, and both raise expectations. Colombian speech often chooses softer commitment tools instead: yo miro a ver, si Dios quiere, yo te aviso, or de una when the enthusiasm is real.",
      culture: [
        dl44Culture("Do not spend promises cheaply", "A promise is social credit. If you use te lo prometo for every small plan, the phrase stops reassuring people and starts sounding like pressure or theater."),
        dl44Culture("Soft commitments can be honest", "Yo miro a ver and si Dios quiere may frustrate learners who want yes or no, but they often describe reality better than a fake promise. Plans depend on weather, transport, family and time."),
        dl44Culture("De una is not a promise formula", "De una can be enthusiastic agreement, especially among friends. It says the speaker is ready or willing; it does not carry the solemn weight of prometer."),
        dl44Culture("Manizales broadens the map", "A rainy, practical conversation in Manizales lets the lesson use a real place without leaning on risky localisms. The register lesson works anywhere in Colombia.")
      ],
      pitfalls: [
        dl44Pitfall("Using te lo prometo as filler", "If you promise constantly, the phrase loses force or starts sounding manipulative. Use it when your word really matters.", "Te lo prometo: mañana te aviso antes del mediodía."),
        dl44Pitfall("Hearing yo miro a ver as a promise", "It often means the person will check or consider it, not that the thing will happen. It is deliberately softer than prometer.", "Yo miro a ver is not the same as te lo prometo."),
        dl44Pitfall("Using le prometo que with close friends by accident", "It is grammatical, but the usted frame can sound stiff or defensive in an intimate apology.", "Te lo prometo, Camilo."),
        dl44Pitfall("Promising a result you cannot control", "A good promise should be something you can actually do, like sending an update. Promising traffic, weather, or another person's decision is risky.", "Prometo avisarte antes del mediodía.")
      ],
      variations: [
        dl44Variation("Te lo prometo.", "sincere personal", "General Spanish", "A strong promise to someone close."),
        dl44Variation("Le prometo que le escribo.", "formal polite", "General Spanish", "A serious promise in usted with a client or elder."),
        dl44Variation("Prometo avisarte antes del mediodía.", "clear practical", "General Spanish", "A measurable commitment you can keep."),
        dl44Variation("Yo miro a ver y te aviso.", "soft informal", "General Colombian", "You are checking, not promising firmly."),
        dl44Variation("De una, yo te acompaño.", "friendly enthusiastic", "General Colombian", "You are genuinely willing and upbeat.")
      ],
      prompt: "Laura changes from “yo miro a ver” to “te lo prometo.” What changes?",
      choices: [
        "She moves from a soft maybe to a strong personal commitment.",
        "She stops speaking to a friend and starts addressing a client.",
        "She changes from a promise to a warning about danger."
      ],
      answer: 0,
      practiceExtra: [
        dl44Question("Which line is the strongest personal promise?", ["Yo miro a ver y te aviso.", "Te lo prometo: mañana te escribo.", "Si Dios quiere, paso mañana."], 1, "te lo prometo as strong personal promise"),
        dl44Question("Which line is best for a client in usted?", ["Te prometo, parce, que miro.", "Le prometo que le escribo.", "De una, yo veo a ver."], 1, "le prometo que in formal usted"),
        dl44Question("Which phrase is a soft non-committal check?", ["Te lo prometo sin falta.", "Le garantizo que ya está.", "Yo miro a ver y te aviso."], 2, "yo miro a ver as soft commitment"),
        dl44Question("Which promise is most measurable and safe?", ["Prometo que no va a llover.", "Prometo avisarte antes del mediodía.", "Prometo que todos van a aceptar."], 1, "promising what you can control")
      ]
    },
    en: {
      title: "Prometer sin exagerar en Chicago",
      situation:
        "Usted está en Chicago después de quedar mal con una amiga. En inglés debe usar promise, I mean it, I'll try y I'll see without overpromising, porque no todo compromiso necesita sonar como juramento.",
      setting: {
        who: "Laura no mandó una actualización importante y Camilo es el amigo que esperó y ahora quiere claridad.",
        what: "Hablan de disculpa, promesa fuerte, promesa más formal y frases suaves para no prometer de más.",
        when: "Al comienzo de la noche, después de una tarde de demoras y mensajes pendientes.",
        where: "Chicago, cerca de una estación elevada, porque esta dirección practica el inglés en un entorno fuera de Colombia.",
        why: "Porque prometer es fácil de traducir como promise, pero el registro importa. En inglés también conviene saber cuándo no prometer."
      },
      address: {
        form: "mixed",
        who: "Laura y Camilo son amigos cercanos; el inglés mantiene you aunque el tono esté serio.",
        why: "La sinceridad sale de frases como I promise you y I mean it, no de un cambio de pronombre.",
        ifYouSwitch:
          "Usar sir o ma'am convertiría una disculpa entre amigos en una escena extraña. La formalidad real se marca con frases completas."
      },
      dialogue: [
        dl44Dialogue("Camilo", "Yesterday you said, “I'll see,” and you never let me know.", "Ayer dijiste “yo miro a ver” y nunca me avisaste.", "YES-ter-dei yu sed ail si and yu NE-ver let mi nou", "Ayer usted dijo veré y nunca me avisó.", "“I'll see” es suave. Puede ser honesto, pero no equivale a una promesa. Por eso Camilo lo menciona como causa de la molestia."),
        dl44Dialogue("Laura", "You're right. This time I promise you: I'll answer tomorrow.", "Tienes razón. Esta vez te lo prometo: mañana te contesto.", "yor rait. dis taim ai PRO-mis yu: ail AN-ser tu-MOR-ou", "Tiene razón. Esta vez le prometo: contestaré mañana.", "“I promise you” sube el peso de la frase. Ya no es una intención vaga, sino una palabra que puede cumplirse o romperse."),
        dl44Dialogue("Camilo", "Don't promise just to get out of it; promise only what you'll keep.", "No prometas por salir del paso; promete sólo lo que vas a cumplir.", "dont PRO-mis yost tu get aut ov it; PRO-mis ON-li uat yul kip", "No prometa sólo para salir de eso; prometa sólo lo que cumplirá.", "“Keep a promise” es cumplir una promesa. El inglés no dice fulfill en conversación común tanto como keep para este caso."),
        dl44Dialogue("Laura", "Then I won't promise to be early; I promise I'll text before noon.", "Entonces no prometo llegar temprano; prometo escribir antes del mediodía.", "den ai wont PRO-mis tu bi ER-li; ai PRO-mis ail tekst bi-FOR nun", "Entonces no prometo estar temprano; prometo que mandaré mensaje antes del mediodía.", "La promesa buena es pequeña y controlable. “I'll text before noon” puede cumplirse aunque el tráfico o el clima fallen."),
        dl44Dialogue("Camilo", "That sounds serious. With a client, you'd say, “I promise I'll email you.”", "Eso suena serio. Con un cliente, dirías: le prometo que le escribo.", "dat saundz SIR-i-os. uid a KLAI-ent, yud sei ai PRO-mis ail I-meil yu", "Eso suena serio. Con un cliente, usted diría prometo que le mandaré correo.", "La frase sirve para mostrar registro. Con un cliente, “email” y una oración completa suenan más profesionales que una promesa íntima entre amigos."),
        dl44Dialogue("Laura", "And when I'm not sure, I'll say “I'll try,” not “I promise.”", "Y cuando no esté segura, digo “intento” y no “lo prometo”.", "and wen aim not shur, ail sei ail trai, not ai PRO-mis", "Y cuando no estoy segura, diré intentaré, no prometo.", "“I'll try” no es una promesa. Es útil justamente porque baja la expectativa cuando todavía hay incertidumbre.")
      ],
      vocabulary: [
        dl44Vocab("promise", "Prometer. Es regular y directo, pero socialmente fuerte.", "prometer", "Úselo cuando da su palabra y acepta que lo juzguen si no cumple.", "Evítelo para intenciones vagas, cortesía rápida o cosas que no controla.", "neutro serio", "Inglés universal.", ["vow", "give your word", "commit", "swear"], "I promise you.", "Te lo prometo."),
        dl44Vocab("I promise you", "Te lo prometo. Fuerte, personal y sincero si no se abusa.", "le prometo a usted", "Úselo cuando una persona cercana necesita una garantía clara.", "Evítelo como muletilla. Repetirlo demasiado lo vuelve menos creíble.", "sincere personal", "Inglés universal.", ["I promise", "I give you my word", "I swear", "I mean it"], "This time I promise you.", "Esta vez te lo prometo."),
        dl44Vocab("I promise I'll", "Le prometo que o prometo que. Muy útil para nombrar la acción concreta.", "prometo que yo", "Úselo con una acción medible: text, call, email, arrive, pay, send.", "Evítelo con resultados fuera de su control. La estructura suena firme.", "neutro", "Inglés universal.", ["I promise to", "I'll make sure", "I commit to", "I give my word"], "I promise I'll text before noon.", "Prometo escribir antes del mediodía."),
        dl44Vocab("keep a promise", "Cumplir una promesa. Es la colocación normal en conversación.", "guardar una promesa", "Úselo para decir que alguien cumplió o rompió su palabra.", "Evítelo como fulfill a promise en habla casual si quiere sonar natural.", "neutro", "Inglés universal.", ["break a promise", "follow through", "keep your word", "come through"], "Promise only what you'll keep.", "Promete sólo lo que vas a cumplir."),
        dl44Vocab("I'll see", "Yo miro a ver. Frase suave que deja la decisión abierta.", "veré", "Úselo cuando necesita revisar o no quiere comprometerse todavía.", "Evítelo si la otra persona necesita una confirmación firme. Puede sonar evasivo.", "amistoso informal", "Inglés universal.", ["I'll check", "I'll look into it", "maybe", "I'll let you know"], "I'll see and let you know.", "Miro a ver y te aviso."),
        dl44Vocab("I'll try", "Intentaré. Baja la expectativa y no promete el resultado.", "intentaré", "Úselo cuando quiere mostrar voluntad sin garantizar que algo pase.", "Evítelo si ya aceptó una responsabilidad clara. Puede sonar débil.", "neutro conversacional", "Inglés universal.", ["I'll do my best", "I'll see what I can do", "I can't promise", "maybe"], "I'll try, but I can't promise.", "Intento, pero no prometo."),
        dl44Vocab("I mean it", "Lo digo en serio. Refuerza una promesa o una frase que pudo sonar vaga.", "lo significo", "Úselo para mostrar que esta vez no está hablando por salir del paso.", "Evítelo si no piensa cumplir. Sube la expectativa y puede empeorar el daño.", "neutro conversacional", "Inglés universal.", ["seriously", "for real", "I promise", "no kidding"], "I mean it this time.", "Esta vez es en serio.")
      ],
      note:
        "En inglés, igual que en español, prometer demasiado desgasta la confianza. “Promise” y “I promise you” son fuertes; “I promise I'll text before noon” es mejor porque mide la acción; “I'll see” y “I'll try” bajan la expectativa cuando no conviene prometer. La habilidad real es escoger el peso correcto.",
      culture: [
        dl44Culture("Promise pesa", "“I promise” no es decoración. Entre amigos puede sonar sincero, pero si aparece cada cinco minutos puede sonar defensivo o manipulador."),
        dl44Culture("Keep es el verbo de cumplir", "En conversación, la promesa se “keeps” o se “breaks”. Aunque fulfill existe, keep a promise es la colocación que más conviene aprender primero."),
        dl44Culture("I'll try protege la confianza", "A veces la frase honesta no es promise sino I'll try. Prometer lo que no controla puede sonar amable al comienzo y peor después."),
        dl44Culture("Clientes piden acciones concretas", "Con un cliente, una promesa sirve mejor si nombra acción y tiempo: I'll email you before noon. Eso vale más que una frase intensa sin detalle.")
      ],
      pitfalls: [
        dl44Pitfall("“I promise you that the traffic will be fine.”", "Promete algo que usted no controla. La frase puede sonar tranquilizadora ahora y poco seria después.", "I promise I'll text before noon."),
        dl44Pitfall("“I fulfill my promise tomorrow.”", "Fulfill existe, pero en conversación la colocación natural es keep a promise.", "I'll keep my promise tomorrow."),
        dl44Pitfall("“I see and tell you.”", "Es un calco de miro a ver y te aviso. En inglés natural necesita I'll see and let you know.", "I'll see and let you know."),
        dl44Pitfall("“I promise” para cualquier cortesía", "Si lo usa para todo, deja de sonar fuerte. Cuando no hay seguridad, I'll try or I'll see puede ser más honesto.", "I'll try, but I can't promise.")
      ],
      variations: [
        dl44Variation("I promise you.", "sincere personal", "Inglés universal", "Una promesa fuerte a alguien cercano."),
        dl44Variation("I promise I'll text before noon.", "claro práctico", "Inglés universal", "Compromiso medible y controlable."),
        dl44Variation("I'll keep my promise.", "neutro", "Inglés universal", "Habla de cumplir la palabra."),
        dl44Variation("I'll see and let you know.", "suave conversacional", "Inglés universal", "Revisa primero y no promete todavía."),
        dl44Variation("I'll try, but I can't promise.", "honest cautious", "Inglés universal", "Muestra voluntad sin garantizar el resultado.")
      ],
      prompt: "Laura changes from “I'll see” to “I promise you.” ¿Qué cambia?",
      choices: [
        "Pasa de una frase suave a una promesa fuerte.",
        "Pasa de un cliente formal a un saludo casual.",
        "Pasa de cumplir una promesa a romperla."
      ],
      answer: 0,
      practiceExtra: [
        dl44Question("¿Cuál frase es una promesa medible?", ["I'll see and let you know.", "I promise I'll text before noon.", "Maybe the rain will stop."], 1, "promise with a controllable action"),
        dl44Question("¿Cuál frase corrige cumplir una promesa?", ["I'll keep my promise.", "I'll fulfill tomorrow casual.", "I'll make promise kept."], 0, "keep a promise as the natural collocation"),
        dl44Question("¿Cuál frase deja la decisión abierta?", ["I promise you right now.", "I give you my word.", "I'll see and let you know."], 2, "I'll see as soft commitment"),
        dl44Question("¿Cuál frase evita prometer de más?", ["I'll try, but I can't promise.", "I promise the weather will obey.", "I swear traffic will disappear."], 0, "I'll try when outcome is uncertain")
      ]
    }
  }
);

markSource(lessons, "data/lessons/44-developing-getting-back-to-people.js");
