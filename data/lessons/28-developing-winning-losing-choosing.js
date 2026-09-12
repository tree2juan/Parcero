/*
 * Lesson block: developing / winning, losing and choosing.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 */
const dl28Dialogue = (speaker, target, translation, pronunciation, literal, why) => ({
  speaker, target, translation, pronunciation, literal, why
});
const dl28Vocab = (term, explanation, literal, useWhen, avoidWhen, register, region, related, target, translation) => ({
  term, explanation, literal, useWhen, avoidWhen, register, region, related, example: { target, translation }
});
const dl28Culture = (label, body) => ({ label, body });
const dl28Pitfall = (mistake, whyItFails, sayInstead) => ({ mistake, whyItFails, sayInstead });
const dl28Variation = (form, register, region, whenToUse) => ({ form, register, region, whenToUse });
const dl28Question = (prompt, choices, answer, tests) => tests ? { prompt, choices, answer, tests } : { prompt, choices, answer };

lessons.push(
  {
    id: "winning-the-season-in-cali",
    level: "Developing · Winning and earning",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "study-and-academia",
    register: "familiar",
    verb: "ganar",
    review: "pending",
    es: {
      title: "Winning without gloating in Cali",
      situation:
        "You are at a soccer tertulia in Cali after a local final. Your team won, but you also talk about what people earn by working and about earning respect without sounding full of yourself.",
      setting: {
        who: "Paula supports América de Cali, Mateo supports Deportivo Cali, and both are adult friends who know how to tease without ruining the night.",
        what: "They discuss a close final, prize money, a coach's reputation, and a student's school year in one quick street conversation.",
        when: "Late Sunday night, after the final whistle, while horns, music, and post-match arguments are still moving through the neighborhood.",
        where: "Cali, outside a small restaurant near San Fernando, using soccer without turning the lesson into a children's game.",
        why: "Because ganar can mean win, earn, deserve through conduct, or pass a Colombian school year. The context decides which result is being counted."
      },
      address: {
        form: "vos",
        who: "Paula and Mateo are long-time friends in Cali, so vos fits the teasing rhythm of the exchange.",
        why: "Vos gives the scene local ease without inventing slang. The lesson needs adult warmth, not a forced regional performance.",
        ifYouSwitch:
          "Tú would be understood but would flatten the Caleño flavor. Usted would sound like sudden distance or a pointed joke between friends."
      },
      dialogue: [
        dl28Dialogue("Paula", "Mateo, aceptalo: hoy ganamos bien, sin regalo del árbitro.", "Mateo, admit it: today we won fairly, with no gift from the referee.", "mah-TEH-oh, ah-sep-TAH-loh: oy gah-NAH-mos byen, seen reh-GAH-loh del AR-bee-troh", "Mateo, accept-it: today we-won well, without gift from-the referee.", "Ganar covers the match result by itself when the object is obvious. The vos command aceptalo confirms that this is teasing between equals, not a formal debate."),
        dl28Dialogue("Mateo", "Ganaron el partido, sí, pero no caminaron sobrados.", "You won the match, yes, but you did not coast through it.", "gah-NAH-ron el par-TEE-doh, see, PEH-roh noh kah-mee-NAH-ron soh-BRAH-dohs", "They-won the match, yes, but they-did-not walk overconfident.", "Ganaron is third person because he talks about Paula's team, not Paula personally. Caminar sobrados criticizes overconfidence, not literal walking."),
        dl28Dialogue("Paula", "Sufrimos, claro. Por eso se gana más sabroso.", "We suffered, of course. That is why winning tastes better.", "soo-FREE-mos, KLAH-roh. por EH-soh seh GAH-nah mas sah-BROH-soh", "We-suffered, clear. For that one wins more tasty.", "Se gana is impersonal and idiomatic: people win, winning happens, the experience has flavor. Translating the se directly would only make the sentence clumsy."),
        dl28Dialogue("Mateo", "Bueno, y con esa final, ¿cuánto se gana el club?", "Fine, and with that final, how much does the club earn?", "BWEH-noh, ee kon EH-sah fee-NAL, KWAN-toh seh GAH-nah el kloob", "Good, and with that final, how-much itself earns the club?", "This is the money sense. Ganar is also to earn, and ¿cuánto se gana? can ask about salary, prize income, or revenue depending on whose pocket is being discussed."),
        dl28Dialogue("Paula", "Plata gana, pero el técnico se ganó el respeto en la semifinal.", "Money, it earns; but the coach earned respect in the semifinal.", "PLAH-tah GAH-nah, PEH-roh el TEK-nee-koh seh gah-NOH el reh-SPEK-toh en lah seh-mee-fee-NAL", "Money it-earns, but the coach himself earned the respect in the semifinal.", "Ganarse el respeto means coming to deserve respect through conduct. It is not a scoreboard prize; it is a reputation that returns to the person."),
        dl28Dialogue("Mateo", "Mi hermano perdió química, pero ganó el año raspando.", "My brother failed chemistry, but passed the school year by barely scraping through.", "mee er-MAH-noh per-DYOH KEE-mee-kah, PEH-roh gah-NOH el AH-nyoh rras-PAN-doh", "My brother lost chemistry, but won the year scraping.", "Colombian school Spanish uses ganar el año for passing the year and perder el año for failing it. English speakers rarely guess this from the literal words.")
      ],
      vocabulary: [
        dl28Vocab("ganar", "The core verb for winning a contest, result, vote, argument, or match where a winner can be named.", "to win", "Use it when the outcome has a winner, even if the prize is only bragging rights after a tense final.", "Avoid it for simple buying, receiving, or getting with no contest, labor, merit, or measured result.", "neutral", "General Spanish, with Colombian school uses worth learning separately.", ["vencer", "triunfar", "empatar", "perder"], "Hoy ganamos bien.", "Today we won fairly."),
        dl28Vocab("ganarse", "The form used when someone earns something less tangible, especially respect, trust, affection, or a reputation.", "to win for oneself", "Use it when behavior over time produces a reaction from other people.", "Avoid it when you are simply reporting the final score; a team gana, but a coach se gana respeto.", "neutral", "General Spanish and very common in Colombian speech.", ["merecer", "lograr", "conseguir", "hacerse a"], "El técnico se ganó el respeto.", "The coach earned respect."),
        dl28Vocab("ganar plata", "The everyday Colombian way to talk about earning money. Plata is casual, but not suspicious by itself.", "to earn silver", "Use it for wages, prize money, or whether a job actually pays enough.", "Avoid it in formal contracts or tax documents, where dinero, ingresos, or salario sound cleaner.", "friendly informal", "General Colombian; plata for money is very widespread.", ["cobrar", "devengar", "salario", "ingresos"], "¿Cuánto se gana el club?", "How much does the club earn?"),
        dl28Vocab("ganar el año", "In Colombian schooling, this means to pass the school year, not to win a calendar year.", "to win the year", "Use it when final marks decide whether a student moves on to the next grade.", "Avoid it outside school unless the context is already clear, because the phrase can confuse literal listeners.", "neutral", "Colombian school Spanish.", ["pasar el año", "perder el año", "aprobar", "raspar"], "Ganó el año raspando.", "He barely passed the school year."),
        dl28Vocab("ganar bien", "A compact way to say the victory was deserved, clean, and not only luck or help from the referee.", "to win well", "Use it when fairness or merit is being debated after a match, election, or contest.", "Avoid assuming it always means earning a good salary; in money talk it can mean that too.", "neutral", "General Spanish.", ["ganar limpio", "merecer ganar", "sin ayuda", "justamente"], "Ganamos bien, sin regalo.", "We won fairly, with no gift."),
        dl28Vocab("raspando", "Barely passing, as if scraping across the line rather than crossing comfortably.", "scraping", "Use it for exams, grades, permits, or any requirement met with the smallest possible margin.", "Avoid it in serious professional self-description unless joking about barely passing will not hurt you.", "friendly informal", "Common Colombian and widely understood elsewhere.", ["por poquito", "apenas", "con lo justo", "a duras penas"], "Ganó el año raspando.", "He barely passed the year."),
        dl28Vocab("caminar sobrados", "To coast or act as if the result already belongs to you. It criticizes overconfidence more than movement.", "to walk over-supplied", "Use it when a team or person looked too sure before actually earning the result.", "Avoid it in formal analysis, where overconfident or complacent will keep the tone more neutral.", "friendly informal", "Plain Colombian phrasing, not a special invented localism.", ["confiarse", "agrandarse", "sobrar", "bajar la guardia"], "No caminaron sobrados.", "They did not coast through it.")
      ],
      note:
        "Ganar is richer than win. In one Caleño conversation it can name the score, the money behind the score, the respect someone earned, and a student's school year. Ask what kind of result is being counted: trophy, salary, reputation, or permission to move on.",
      culture: [
        dl28Culture("Soccer without childishness", "Soccer belongs to adults across Colombia. In Cali, América and Deportivo Cali carry family histories, neighborhood loyalties, and long memories. The teasing can be sharp, but good friends still leave room for the other person to save face."),
        dl28Culture("Passing the year is local knowledge", "Ganar el año and perder el año are ordinary Colombian school phrases. A literal translation sounds poetic, but for parents and students the meaning is practical: either the student advances or repeats."),
        dl28Culture("Plata is ordinary", "Plata can be too casual in a formal document, but in speech it is normal Colombian Spanish for money. Asking how much a club gana connects sport, work, and survival, not just greed."),
        dl28Culture("Respect is earned slowly", "Se ganó el respeto is stronger than people liked him. It suggests that pressure changed how others judged him. Colombians use it for teachers, coaches, neighbors, and anyone who proved themselves when it mattered.")
      ],
      pitfalls: [
        dl28Pitfall("Using ganar only for games", "You will miss the money and merit senses. A worker gana plata, a coach se gana el respeto, and a student gana el año. Those are not random idioms; they share the idea of a result.", "Listen for the result being counted: match, money, respect, or school year."),
        dl28Pitfall("Translating se ganó as he won himself", "The se does not usually mean the person was the prize. It marks that the result came back to the person as earned reputation, trust, or fortune.", "El técnico se ganó el respeto means the coach earned respect."),
        dl28Pitfall("Reading ganar el año as winning the year", "In Colombian school talk, the phrase means passing the school year. Nobody imagines a calendar as a prize; they imagine report cards and whether the student advances.", "Ganó el año raspando means he barely passed the school year."),
        dl28Pitfall("Assuming ganar bien always means earn good money", "It can mean earning well, but in a match conversation it defends the quality or fairness of the win. Context decides which sense is alive.", "In soccer, ganamos bien means we won fairly or deservedly.")
      ],
      variations: [
        dl28Variation("Hoy ganamos bien.", "neutral", "General Colombian", "Use it to defend a fair result after a match or contest."),
        dl28Variation("El club gana buena plata con una final.", "friendly informal", "General Colombian", "Use it when the result produces real money."),
        dl28Variation("Se ganó el respeto de todos.", "neutral", "General Spanish", "Use it when someone proved themselves under pressure."),
        dl28Variation("Ganó el año raspando.", "friendly informal", "Colombian school Spanish", "Use it when a student passed, but barely."),
        dl28Variation("No ganaron caminando sobrados.", "friendly informal", "General Colombian", "Use it when the winner had to suffer for the result.")
      ],
      prompt: "Paula says “el técnico se ganó el respeto.” What does ganar add here?",
      choices: ["The coach earned respect through what he did under pressure.", "The coach won a physical prize called respect after the match.", "The coach received a salary bonus from the club office."],
      answer: 0,
      practiceExtra: [
        dl28Question("Mateo asks “¿cuánto se gana el club?” What sense is active?", ["How much money the club earns", "How many matches the club wins", "How much respect the club deserves"], 0, "ganar as earning money rather than winning a score"),
        dl28Question("What does “ganó el año raspando” mean in Colombian school talk?", ["He dominated the whole school calendar", "He barely passed the school year", "He won a prize for attendance"], 1, "ganar el año as passing the year"),
        dl28Question("Which sentence best fits a deserved soccer result?", ["Ganamos bien, sin regalo.", "Ganamos plata, sin salario.", "Ganamos el año, sin colegio."], 0, "ganar bien in a match context"),
        dl28Question("Why does the lesson use vos between Paula and Mateo?", ["Because they are close friends in Cali", "Because one is serving the other", "Because the referee requires formality"], 0, "Cali friendship and vos without overexplaining it")
      ]
    },
    en: {
      title: "Hablar de ganar y merecer en inglés",
      situation:
        "Usted está en una conversación de fútbol en Houston después de una final local. Su equipo ganó, pero también necesita hablar de plata, respeto y de pasar el año escolar sin traducir todo con una sola palabra.",
      setting: {
        who: "Un grupo de amigos adultos conversa después de una final tensa. Paula apoya a un equipo y Mateo al rival, pero ambos quieren que la noche siga amable.",
        what: "Repasan el partido, una decisión arbitral, el dinero del premio y la diferencia entre ganar un marcador y ganarse el respeto.",
        when: "Un domingo tarde en la noche, después del pitazo final, cuando todavía hay ruido en la calle.",
        where: "Houston, en un restaurante pequeño del barrio, con la conversación llevada al inglés por la mezcla de amigos.",
        why: "Porque el español usa ganar para ideas que el inglés separa con win, earn y pass. La escena obliga a escoger el verbo según el resultado."
      },
      address: {
        form: "mixed",
        who: "Paula y Mateo se tratan como amigos; el inglés no cambia de pronombre para marcar esa confianza.",
        why: "La cercanía se oye en las bromas, en el nombre de pila y en frases directas. No existe un equivalente gramatical de vos.",
        ifYouSwitch:
          "Volverse ceremonioso con sir o ma'am cambiaría la relación y sonaría burlón. En inglés basta mantener el tono de amigos."
      },
      dialogue: [
        dl28Dialogue("Paula", "Mateo, admit it: we won fair today, no gift from the ref.", "Mateo, aceptalo: hoy ganamos bien, sin regalo del árbitro.", "mah-TEI-ou, ad-MIT it: ui won fer tu-DEI, nou gift from da ref", "Mateo, admítalo: nosotros ganamos justo hoy, ningún regalo del árbitro.", "En inglés el marcador pide win. Fair hace el trabajo de bien cuando se defiende la limpieza del resultado, no la cantidad de plata."),
        dl28Dialogue("Mateo", "You won the match, sure, but don't act like you walked it.", "Ganaron el partido, sí, pero no me digás que caminaron sobrados.", "yu won da mach, shur, bat dont akt laik yu wokt it", "Ustedes ganaron el partido, claro, pero no actúen como si lo caminaran.", "Won the match es directo y natural. Walked it significa que fue fácil; no es caminar literalmente, sino ganar sin sufrir."),
        dl28Dialogue("Paula", "We suffered, obviously. That's what makes winning feel better.", "Sufrimos, claro. Por eso se gana más sabroso.", "ui SO-ferd, OB-vi-os-li. dats uat meiks WIN-ing fil BE-ter", "Sufrimos, obviamente. Eso es lo que hace que ganar se sienta mejor.", "Winning como sustantivo verbal permite hablar de la experiencia. Traducir se gana palabra por palabra no funciona; el inglés prefiere la idea completa."),
        dl28Dialogue("Mateo", "Fine, and with a final like that, how much does the club earn?", "Bueno, y con una final así, ¿cuánto se gana el club?", "fain, and uid a FAI-nal laik dat, jau mach daz da club ern", "Bueno, y con una final como esa, ¿cuánto gana el club?", "Aquí no sirve win, porque la pregunta es por ingresos. Earn conecta el dinero con trabajo, premio o actividad económica."),
        dl28Dialogue("Paula", "It earns money, but the coach earned respect in the semifinal.", "Plata gana, pero el técnico se ganó el respeto en la semifinal.", "it erns MO-ni, bat da couch ernd ris-PEKT in da se-mi-FAI-nal", "Gana dinero, pero el entrenador ganó respeto en la semifinal.", "Earned respect es la traducción natural de ganarse el respeto. Win respect existe, pero earned deja más claro el mérito acumulado."),
        dl28Dialogue("Mateo", "True. My brother failed chemistry but passed the year by the skin of his teeth.", "Eso sí. Mi hermano perdió química, pero ganó el año raspando.", "tru. mai BRO-der feild KE-mis-tri bat past da yir bai da skin ov jis tith", "Cierto. Mi hermano falló química pero pasó el año por la piel de sus dientes.", "Para el colegio, el inglés usa pass, no win. By the skin of his teeth añade la idea de raspando: apenas, con lo justo.")
      ],
      vocabulary: [
        dl28Vocab("win", "El verbo para ganar un partido, una elección, un premio o una discusión cuando hay un resultado con ganador.", "ganar", "Úselo cuando el centro de la frase es el marcador, el concurso o el premio obtenido.", "Evítelo con salario, ingresos o mérito acumulado. Ahí normalmente necesita earn, no win.", "neutro", "Inglés universal.", ["beat", "defeat", "draw", "lose"], "We won fair today.", "Hoy ganamos bien."),
        dl28Vocab("earn", "El verbo para ganar plata o respeto cuando la idea principal es mérito, trabajo o acumulación.", "ganar / ganarse", "Úselo con dinero, salario, confianza, respeto o una reputación que alguien construyó.", "Evítelo con un partido simple. Earn the match suena incorrecto para el marcador.", "neutro", "Inglés universal.", ["deserve", "make", "gain", "work for"], "The coach earned respect.", "El técnico se ganó el respeto."),
        dl28Vocab("earn money", "La forma corriente de decir ganar plata. Money reemplaza a plata y no suena informal por sí sola.", "ganar dinero", "Úselo al hablar de sueldo, ingresos, premios o de si una actividad produce plata.", "Evítelo cuando el contexto es un marcador. Ahí money cambia por match, prize o game.", "neutro", "Inglés universal.", ["make money", "get paid", "income", "wages"], "How much does the club earn?", "¿Cuánto se gana el club?"),
        dl28Vocab("pass the year", "La traducción práctica de ganar el año en contexto escolar colombiano.", "pasar el año", "Úselo cuando un estudiante completa el año escolar y puede seguir al grado siguiente.", "Evítelo fuera del colegio. Para deportes o negocios, year no se gana ni se pasa del mismo modo.", "neutro", "Inglés universal; el sistema escolar cambia por país.", ["pass the grade", "move up", "graduate", "scrape through"], "He passed the year by the skin of his teeth.", "Ganó el año raspando."),
        dl28Vocab("win fair", "Una manera corta de decir que la victoria fue limpia o merecida.", "ganar justo", "Úselo para defender un resultado frente a quejas de suerte, ayuda arbitral o trampa.", "Evítelo en escritura muy formal, donde won fairly suena más completo.", "amistoso informal", "Inglés conversacional.", ["win fairly", "deserve the win", "no cheating", "fair result"], "We won fair today.", "Hoy ganamos bien."),
        dl28Vocab("by the skin of his teeth", "Modismo para decir raspando, apenas, con el mínimo margen posible.", "por la piel de sus dientes", "Úselo cuando alguien aprueba, escapa o logra algo por muy poco.", "Evítelo en textos formales o situaciones delicadas donde el humor del modismo distrae.", "amistoso informal", "Inglés universal.", ["barely", "just made it", "scraped through", "only just"], "He passed by the skin of his teeth.", "Pasó raspando."),
        dl28Vocab("walk it", "Ganar o completar algo con tanta facilidad que parece que uno caminó por encima del reto.", "caminarlo", "Úselo cuando una competencia o examen fue mucho más fácil de lo esperado.", "Evítelo si la persona sí sufrió. La frase borra el esfuerzo y puede sonar arrogante.", "amistoso informal", "Inglés británico y entendido por contexto en otros lugares.", ["coast", "cruise", "breeze through", "have it easy"], "Don't act like you walked it.", "No digás que caminaron sobrados.")
      ],
      note:
        "El riesgo para un hispanohablante es llevar ganar a todas partes. El inglés obliga a separar tres caminos: win para el marcador, earn para dinero o mérito, y pass para el año escolar. La pregunta útil no es cómo se dice ganar, sino qué clase de resultado cuenta la frase.",
      culture: [
        dl28Culture("El fútbol adulto también enseña registro", "Una conversación de fútbol entre adultos puede tener bromas fuertes sin volverse infantil. En inglés, como en español, el tono depende de cuánto se conocen los hablantes y de si la burla deja espacio para el otro."),
        dl28Culture("El año escolar no se gana literalmente", "Ganar el año es muy colombiano y muy transparente para quien estudió allí. En inglés, si usted dice win the year, la gente imaginará un premio raro. Pass the year comunica la consecuencia real."),
        dl28Culture("Money no tiene el sabor de plata", "Money es neutral. Si quiere un tono más coloquial, puede decir cash, pero no lo necesita. La traducción correcta de ganar plata suele ser earn money o make money, según el contexto."),
        dl28Culture("Respeto pide mérito", "Earn respect es una frase fuerte porque muestra proceso. No basta con caer bien. La persona hizo algo que cambió el juicio de los demás, igual que en ganarse el respeto.")
      ],
      pitfalls: [
        dl28Pitfall("“The coach won respect.”", "Se entiende, pero muchas veces suena como si el respeto fuera un premio puntual. Para el matiz de ganarse el respeto, earned respect es más claro.", "The coach earned respect."),
        dl28Pitfall("“How much does the club win?”", "Con dinero, win sólo sirve si habla de un premio ganado en azar o concurso. Para ingresos de un club, el verbo normal es earn o make.", "How much does the club earn?"),
        dl28Pitfall("“He won the school year.”", "Es una copia de ganar el año. En inglés el estudiante pasa o reprueba el año; no lo gana como trofeo.", "He passed the year."),
        dl28Pitfall("“We earned the match.”", "Earn marca mérito, pero no reemplaza el verbo del marcador. Puede decir que merecieron ganar, pero el resultado se dice con won.", "We won the match.")
      ],
      variations: [
        dl28Variation("We won fair today.", "amistoso informal", "Inglés conversacional", "Para defender una victoria limpia entre amigos."),
        dl28Variation("The club earns good money from a final.", "neutro", "Inglés universal", "Cuando el tema son ingresos y no el marcador."),
        dl28Variation("He earned everyone's respect.", "neutro", "Inglés universal", "Alguien probó su valor con hechos."),
        dl28Variation("He passed the year by the skin of his teeth.", "amistoso informal", "Inglés universal", "Un estudiante pasó raspando."),
        dl28Variation("Don't act like you walked it.", "amistoso informal", "Inglés conversacional", "Para negar que una victoria haya sido fácil.")
      ],
      prompt: "Paula says “the coach earned respect.” ¿Qué verbo inglés reemplaza mejor a ganarse aquí?",
      choices: ["Earn, porque hay mérito acumulado", "Win, porque siempre traduce ganar", "Pass, porque hay año escolar"],
      answer: 0,
      practiceExtra: [
        dl28Question("Si habla de plata del club, ¿cuál frase sirve mejor?", ["How much does the club earn?", "How much does the club win?", "How much does the club pass?"], 0, "earn para dinero e ingresos"),
        dl28Question("¿Cómo traduce usted ganó el año en colegio?", ["He won the whole year", "He passed the school year", "He earned the calendar"], 1, "pass the year para contexto escolar"),
        dl28Question("¿Qué significa “don't act like you walked it”?", ["No diga que fue facilísimo", "No camine durante el partido", "No gane dinero caminando"], 0, "walk it como ganar sin esfuerzo"),
        dl28Question("¿Por qué “we earned the match” falla?", ["Porque el marcador usa won", "Porque match significa salario", "Porque earned sólo es pasado"], 0, "won para resultados deportivos")
      ]
    }
  },
  {
    id: "losing-the-bus-in-bucaramanga",
    level: "Developing · Losing and missing",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "transport-and-travel",
    register: "familiar",
    verb: "perder",
    review: "pending",
    es: {
      title: "Missing the bus in Bucaramanga",
      situation:
        "You are with a cousin in Bucaramanga before a medical appointment. Your ID card has gone missing, you missed the bus, and now you have to explain the mess without making it sound as if everything were someone else’s fault.",
      setting: {
        who: "Laura is visiting her cousin Natalia, who knows the city and is trying to help without scolding her.",
        what: "They are late for a medical appointment because an ID card is missing and the bus has already gone.",
        when: "Early morning on a weekday, when every delay feels larger because the appointment time is fixed.",
        where: "Bucaramanga, near a Metrolínea stop on the way toward Cabecera, giving the catalogue a different Colombian city.",
        why: "Because perder covers losing objects, missing transport, wasting time, and getting lost. The dative construction se me perdió is the real prize."
      },
      address: {
        form: "tú",
        who: "Natalia and Laura are close cousins, so tú keeps the tone direct and affectionate.",
        why: "Tú lets the grammar of misfortune stay central. This lesson is not trying to teach a regional address form.",
        ifYouSwitch:
          "Usted would sound like sudden distance between relatives. Vos would not be the safest plain choice for this Bucaramanga scene."
      },
      dialogue: [
        dl28Dialogue("Natalia", "¿Lista? Si salimos ya, no perdemos la cita.", "Ready? If we leave now, we won't miss the appointment.", "LEES-tah. see sah-LEE-mos yah, noh per-DEH-mos lah SEE-tah", "Ready? If we-leave now, not we-lose the appointment.", "Perder una cita means to miss it, not to misplace it. Spanish uses the same verb for losing keys and losing the chance to be seen on time."),
        dl28Dialogue("Laura", "Es que se me perdió la cédula; juraba que estaba en el bolsillo.", "The thing is, my ID got lost on me; I was sure it was in my pocket.", "es keh seh meh per-DYOH lah SEH-doo-lah; hoo-RAH-bah keh es-TAH-bah en el bol-SEE-yoh", "It is that itself to-me got-lost the ID; I swore that it was in the pocket.", "Se me perdió is the natural Colombian way to frame an accidental loss. It admits the problem without sounding like a proud confession of carelessness."),
        dl28Dialogue("Natalia", "No digas “perdí la cédula” tan tranquila; así suena más grave.", "Don't say “I lost the ID” so calmly; that sounds more serious.", "noh DEE-gahs per-DEE lah SEH-doo-lah tan tran-KEE-lah; ah-SEE SWEH-nah mas GRAH-beh", "Do not say I-lost the ID so calm; like-that it-sounds more serious.", "Yo perdí can sound like taking full agency, or at least full responsibility. Se me perdió softens the accident while still owning the situation."),
        dl28Dialogue("Laura", "Bueno, pero por buscarla ya perdimos el bus.", "Fine, but because we looked for it, we already missed the bus.", "BWEH-noh, PEH-roh por boos-KAR-lah yah per-DEE-mos el boos", "Fine, but for looking-for-it already we-lost the bus.", "Perder el bus is missing the bus, not leaving it somewhere. Public transport is a common place where English speakers reach for the wrong verb."),
        dl28Dialogue("Natalia", "Y si seguimos dando vueltas, perdemos más tiempo.", "And if we keep going in circles, we'll waste more time.", "ee see seh-GEE-mos DAHN-doh VWEL-tahs, per-DEH-mos mas TYEM-poh", "And if we-continue giving turns, we-lose more time.", "Perder tiempo is to waste time. The time is not missing; it is being spent badly while the appointment gets closer."),
        dl28Dialogue("Laura", "Tranquila, no me pierdo: la cédula apareció en la mochila.", "Relax, I won't get lost: the ID showed up in the backpack.", "tran-KEE-lah, noh meh PYER-doh: lah SEH-doo-lah ah-pah-reh-SYOH en lah moh-CHEE-lah", "Calm, I do not get-lost: the ID appeared in the backpack.", "Perderse is what a person does when they get lost. The document, meanwhile, appeared; Colombian speech often lets the missing object reappear without drama.")
      ],
      vocabulary: [
        dl28Vocab("perder", "To lose, but also to miss an appointment or transport when the opportunity goes by.", "to lose", "Use it when an object is gone, a team loses, a bus leaves without you, or time is wasted.", "Avoid it when you mean forget. Olvidar is memory; perder is absence, defeat, or a missed chance.", "neutral", "General Spanish.", ["extraviar", "fallar", "olvidar", "ganar"], "Ya perdimos el bus.", "We already missed the bus."),
        dl28Vocab("se me perdió", "The natural accidental-loss construction: the thing got lost on me, less blunt than saying I lost it.", "it lost itself to me", "Use it when keys, documents, cards, or small objects disappear and you do not want to sound dramatic.", "Avoid it when you deliberately threw something away or know exactly who took it.", "neutral", "Very common Colombian Spanish and widely understood.", ["se me quedó", "se me olvidó", "lo perdí", "apareció"], "Se me perdió la cédula.", "My ID got lost on me."),
        dl28Vocab("perder el bus", "To miss the bus. Spanish treats the missed departure as something lost.", "to lose the bus", "Use it for a bus, flight, appointment, or chance that leaves before you arrive.", "Avoid it if you physically cannot find a vehicle in a parking lot; that is a different problem.", "neutral", "General Spanish; bus is ordinary in Colombia.", ["perder el vuelo", "perder la cita", "llegar tarde", "salir"], "Perdimos el bus por buscarla.", "We missed the bus because we looked for it."),
        dl28Vocab("perder tiempo", "To waste time, especially by circling, waiting, or doing something that does not move the problem forward.", "to lose time", "Use it when minutes are being used badly and a deadline or appointment is pressing.", "Avoid it for time spent pleasantly or usefully; that is pasar tiempo or dedicar tiempo.", "neutral", "General Spanish.", ["demorarse", "dar vueltas", "aprovechar", "pasar tiempo"], "No perdamos más tiempo.", "Let's not waste any more time."),
        dl28Vocab("perderse", "To get lost, for people, routes, and sometimes conversations or explanations.", "to lose oneself", "Use it when someone no longer knows where they are or cannot follow the thread.", "Avoid it for a missing object. La cédula se perdió, but yo me perdí only if I got lost.", "neutral", "General Spanish.", ["ubicarse", "enredarse", "desorientarse", "encontrarse"], "No me pierdo en Bucaramanga.", "I don't get lost in Bucaramanga."),
        dl28Vocab("la cédula", "The Colombian national ID card. Losing it can block errands, appointments, voting, and official checks.", "the ID card", "Use it for Colombian identity-document situations, from clinics to banks to elections.", "Avoid it for a passport or foreign driver's license; those documents have their own names.", "neutral", "Colombia.", ["documento", "identificación", "tarjeta", "registro"], "Se me perdió la cédula.", "My ID got lost on me."),
        dl28Vocab("dar vueltas", "To go around in circles, literally or mentally, instead of solving the problem.", "to give turns", "Use it when people are wandering, repeating steps, or overthinking while time disappears.", "Avoid it when you are simply giving someone a ride around town; then the movement needs a clearer verb.", "friendly informal", "General Spanish.", ["rodear", "enredarse", "buscar", "demorarse"], "Seguimos dando vueltas.", "We keep going in circles.")
      ],
      note:
        "Perder is not only a sad scoreboard word. It marks missed appointments, wasted time, misplaced cards, and disorientation. For English speakers, the biggest upgrade is se me perdió: Colombian Spanish often shifts the grammar toward the accident and the affected person, not toward a blunt confession of fault.",
      culture: [
        dl28Culture("The ID card is not a small detail", "In Colombia, the cédula is the key to many ordinary tasks. Losing it before a clinic visit can derail the morning. That practical weight explains why Laura panics and why Natalia cares about exact wording."),
        dl28Culture("Accident grammar protects face", "Se me perdió is not a lie or an evasion. It is a normal way to say an unwanted thing happened and affected me. Colombian Spanish uses this pattern with lost, forgotten, dropped, or broken things."),
        dl28Culture("Missing transport uses perder", "English separates lose and miss, but Spanish does not always do that. If the bus leaves without you, perdiste el bus. The bus is not hidden; the chance is gone."),
        dl28Culture("Bucaramanga without fake slang", "The scene uses plain Colombian Spanish because accurate plain language beats invented regional color. The city matters through the route, the appointment, and the pressure, not through a forced catchphrase.")
      ],
      pitfalls: [
        dl28Pitfall("Saying “yo perdí la cédula” for every accidental loss", "It is grammatical, but it can sound heavier and more blame-filled than intended. The natural everyday line is often se me perdió, especially with documents and small objects.", "Se me perdió la cédula."),
        dl28Pitfall("Translating perder el bus as lose the bus", "English hears a physical search for a bus, as if the vehicle were misplaced. Spanish means the departure happened without you.", "I missed the bus."),
        dl28Pitfall("Using perderse for the missing object", "Me perdí means I got lost. If the ID is missing, the card is the subject: se perdió la cédula or se me perdió la cédula.", "Se me perdió la cédula."),
        dl28Pitfall("Treating perder tiempo as neutral spending", "Perder tiempo criticizes the use of time. If the time was pleasant or useful, Spanish reaches for pasar tiempo or dedicar tiempo instead.", "No perdamos más tiempo.")
      ],
      variations: [
        dl28Variation("Se me perdió la cédula.", "neutral", "General Colombian", "Use it when a document disappeared and you want the natural accidental framing."),
        dl28Variation("Perdimos el bus.", "neutral", "General Spanish", "Use it when the bus left before you arrived."),
        dl28Variation("No perdamos más tiempo.", "neutral", "General Spanish", "Use it when you need to stop circling and act."),
        dl28Variation("Me perdí saliendo del centro.", "neutral", "General Spanish", "Use it when you personally got lost on a route."),
        dl28Variation("La cita no se puede perder.", "neutral", "General Spanish", "Use it when an appointment matters and missing it would create trouble."),
        {
          form: "Aunque haya salido tarde, yo ya había avisado que no alcanzaba.",
          register: "familiar",
          region: "Universal Spanish",
          whenToUse: "Conceding you were late while pointing out you warned people first. Había avisado puts the warning before the lateness on the timeline."
        }
      ],
      prompt: "Laura says “se me perdió la cédula.” What is the grammar doing?",
      choices: ["It frames the loss as an accident that affected her.", "It says she deliberately hid the ID from Natalia.", "It means Laura got lost while carrying the ID."],
      answer: 0,
      practiceExtra: [
        dl28Question("What does “perdimos el bus” mean here?", ["We missed the bus departure", "We misplaced the physical bus", "We sold the bus ticket"], 0, "perder as missing transport"),
        dl28Question("Which phrase best says an object disappeared naturally?", ["Se me perdió la cédula.", "Me perdí la cédula.", "Perdí a la cédula."], 0, "the object as subject in se me perdió"),
        dl28Question("Why is “perder tiempo” sharper than “pasar tiempo”?", ["It criticizes the use of time", "It praises a long conversation", "It describes a finished calendar"], 0, "wasting time versus spending time"),
        dl28Question("Which sentence means the speaker got lost?", ["Se me perdió la cita.", "Me perdí saliendo del centro.", "Perdimos tiempo esperando."], 1, "perderse for a person getting lost")
      ]
    },
    en: {
      title: "Diferenciar perder, perderse y missing en inglés",
      situation:
        "Usted está con una prima antes de una cita médica en Estados Unidos. Se le perdió un documento, perdió el bus y tiene que explicar en inglés qué pasó sin decir que perdió físicamente un bus.",
      setting: {
        who: "Laura visita a su prima Natalia, que conoce la ciudad y trata de ayudar sin regañarla.",
        what: "Van tarde a una cita médica porque falta un documento y el bus ya salió.",
        when: "Temprano en la mañana, entre semana, cuando cada demora se siente más cara de lo que es.",
        where: "Una parada de bus en una ciudad estadounidense, con la presión práctica parecida a la de una mañana en Bucaramanga.",
        why: "Porque el inglés separa lose, miss, waste y get lost donde el español usa perder y perderse. Esa separación evita errores visibles."
      },
      address: {
        form: "mixed",
        who: "Natalia y Laura hablan como primas; en inglés el mismo you sirve para toda la conversación.",
        why: "La confianza se marca con frases cortas, tono directo y nombres de pila, no con un cambio de pronombre.",
        ifYouSwitch:
          "Añadir formalidad con ma'am o títulos sería raro entre primas. El inglés no necesita compensar la falta de tú."
      },
      dialogue: [
        dl28Dialogue("Natalia", "Ready? If we leave now, we won't miss the appointment.", "¿Lista? Si salimos ya, no perdemos la cita.", "RE-di? if ui liv nau, ui wont mis di a-POINT-ment", "¿Lista? Si salimos ahora, no vamos a perder la cita.", "Miss es el verbo para una cita que se le pasa a uno. Lose the appointment sonaría como si el papel o el cupo se hubiera extraviado."),
        dl28Dialogue("Laura", "The thing is, I lost my ID; I was sure it was in my pocket.", "Es que se me perdió la cédula; juraba que estaba en el bolsillo.", "da thing is, ai lost mai ai-DI; ai uoz shur it uoz in mai PO-ket", "La cosa es, perdí mi identificación; estaba segura de que estaba en mi bolsillo.", "El inglés no tiene una copia exacta de se me perdió. I lost my ID es normal, pero el tono se suaviza con the thing is y la explicación posterior."),
        dl28Dialogue("Natalia", "Don't make it sound like you threw it away. Say it went missing.", "No lo hagas sonar como si la hubieras botado. Di que se desapareció.", "dont meik it saund laik yu thru it a-UEI. sei it went MI-sing", "No lo haga sonar como si usted la tiró. Diga que se fue faltando.", "Went missing acerca el inglés al accidente de se me perdió. No borra responsabilidad, pero evita sonar como confesión torpe."),
        dl28Dialogue("Laura", "Fine, but while we looked for it, we missed the bus.", "Bueno, pero mientras la buscamos, perdimos el bus.", "fain, bat wail ui lukt for it, ui mist da bas", "Bueno, pero mientras la buscamos, perdimos el bus.", "Missed the bus es obligatorio. Lost the bus haría imaginar un bus extraviado, no una salida que ya pasó."),
        dl28Dialogue("Natalia", "And if we keep going in circles, we'll waste more time.", "Y si seguimos dando vueltas, vamos a perder más tiempo.", "and if ui kip GO-ing in SER-kols, uil weist mor taim", "Y si seguimos yendo en círculos, desperdiciaremos más tiempo.", "Waste time traduce perder tiempo cuando hay crítica. Spend time sería neutral o positivo, y aquí Natalia está marcando urgencia."),
        dl28Dialogue("Laura", "Relax, I won't get lost; the ID turned up in my backpack.", "Tranquila, no me pierdo; la cédula apareció en la mochila.", "ri-LAX, ai wont get lost; di ai-DI ternd op in mai BAK-pak", "Relájese, no me voy a perder; la identificación apareció en mi morral.", "Get lost es para la persona. Turned up sirve para el documento que apareció, sin dramatizar quién tuvo la culpa.")
      ],
      vocabulary: [
        dl28Vocab("lose", "El verbo para extraviar un objeto o perder un partido. No sirve para todo lo que cubre perder en español.", "perder", "Úselo cuando un objeto ya no está, un equipo pierde o alguien pierde una oportunidad amplia.", "Evítelo con buses, vuelos y citas específicas, porque ahí el verbo natural es miss.", "neutro", "Inglés universal.", ["misplace", "drop", "forget", "lose out"], "I lost my ID.", "Perdí mi identificación."),
        dl28Vocab("go missing", "Forma útil para acercarse a se me perdió cuando quiere sonar menos culpable y más accidental.", "irse faltando", "Úselo cuando un documento, llave o archivo desaparece y no quiere acusar a nadie.", "Evítelo con una persona en peligro real; ahí la frase puede sonar seria y activar otro registro.", "neutro", "Inglés universal.", ["turn up", "disappear", "misplace", "be gone"], "My ID went missing.", "Se me perdió la cédula."),
        dl28Vocab("miss the bus", "La forma correcta para perder el bus cuando salió sin usted.", "perder el bus", "Úselo para buses, trenes, vuelos, citas, llamadas y oportunidades que pasan antes de llegar.", "Evítelo cuando el vehículo está físicamente perdido en un parqueadero. Entonces necesita cannot find.", "neutro", "Inglés universal.", ["miss the train", "miss the flight", "miss the appointment", "miss the call"], "We missed the bus.", "Perdimos el bus."),
        dl28Vocab("waste time", "Traducir perder tiempo cuando la frase juzga ese tiempo como mal usado.", "desperdiciar tiempo", "Úselo cuando hay afán, vueltas innecesarias o una actividad que no ayuda.", "Evítelo si el tiempo fue agradable o productivo. Ahí use spend time.", "neutro", "Inglés universal.", ["spend time", "stall", "delay", "go in circles"], "We'll waste more time.", "Perderemos más tiempo."),
        dl28Vocab("get lost", "Perderse para una persona que no sabe dónde está o no sigue una explicación.", "volverse perdido", "Úselo cuando alguien se desorienta en una ciudad, edificio, ruta o tema.", "Evítelo para un objeto perdido. My wallet went missing suele sonar mejor.", "neutro", "Inglés universal.", ["lose your way", "be confused", "get turned around", "find your way"], "I won't get lost.", "No me voy a perder."),
        dl28Vocab("ID", "La palabra común para documento de identidad en inglés, más amplia que cédula porque depende del país.", "identificación", "Úselo en clínicas, bares, aeropuertos, oficinas o cualquier lugar que pide prueba de identidad.", "Evítelo si quiere nombrar un documento exacto, como passport, driver's license o national ID card.", "neutro", "Inglés universal; los documentos específicos cambian por país.", ["identification", "card", "passport", "driver's license"], "I lost my ID.", "Se me perdió la cédula."),
        dl28Vocab("go in circles", "Equivalente conversacional de dar vueltas: repetir movimientos o ideas sin avanzar.", "ir en círculos", "Úselo cuando la gente busca sin método, discute lo mismo o demora una decisión.", "Evítelo si la ruta sí es circular por diseño; la frase puede volverse literal y confusa.", "amistoso informal", "Inglés universal.", ["run around", "stall", "waste time", "loop back"], "We keep going in circles.", "Seguimos dando vueltas.")
      ],
      note:
        "Para hablar bien en inglés, no traduzca perder automáticamente. Un documento se puede lose o go missing; un bus se miss; el tiempo se waste si fue mal usado; una persona gets lost. La frase correcta depende de qué se perdió: una cosa, una salida, minutos o la orientación.",
      culture: [
        dl28Culture("El documento cambia de nombre", "Cédula no viaja sola al inglés. Según el país, usted dirá ID, national ID card, driver's license o passport. ID es la opción amplia cuando el tipo exacto no importa."),
        dl28Culture("Miss no es sentimental solamente", "Los hispanohablantes suelen aprender miss como extrañar, pero también significa perder una salida, una cita o una llamada. I missed the bus no tiene nostalgia; tiene afán."),
        dl28Culture("La culpa se maneja con rodeos suaves", "El inglés no reproduce se me perdió palabra por palabra, pero tiene recursos de tono: went missing, turned up, the thing is. Esos detalles ayudan a no sonar más culpable de lo necesario."),
        dl28Culture("Spend y waste no son iguales", "Pasar tiempo con alguien suele ser spend time. Perder tiempo en una fila inútil es waste time. Cambiar el verbo cambia el juicio moral de la frase.")
      ],
      pitfalls: [
        dl28Pitfall("“We lost the bus.”", "Suena como si el bus fuera un objeto que ustedes extraviaron. Si el bus salió antes de que llegaran, el verbo inglés es missed.", "We missed the bus."),
        dl28Pitfall("“I missed my ID.”", "Miss con un documento suena como extrañar afectivamente la tarjeta. Para extravío use lost o went missing.", "My ID went missing."),
        dl28Pitfall("“We spent more time” cuando hay crítica", "Spend time no acusa a nadie; puede ser neutral o positivo. Si la idea es que las vueltas dañaron la mañana, necesita waste time.", "We wasted more time."),
        dl28Pitfall("“The ID got lost me.”", "Es una copia imposible de se me perdió. El inglés no pone me de esa manera; cambia la estructura completa.", "My ID went missing.")
      ],
      variations: [
        dl28Variation("My ID went missing.", "neutro", "Inglés universal", "Quiere acercarse al tono accidental de se me perdió."),
        dl28Variation("We missed the bus.", "neutro", "Inglés universal", "La salida pasó sin ustedes."),
        dl28Variation("Let's not waste more time.", "neutro", "Inglés universal", "Necesitan dejar de dar vueltas."),
        dl28Variation("I got lost leaving downtown.", "neutro", "Inglés universal", "Usted se desorientó en una ruta."),
        dl28Variation("The ID turned up in my backpack.", "amistoso informal", "Inglés universal", "El documento apareció y no quiere dramatizar la culpa."),
        {
          form: "I wish we had left earlier; if we had, we would have caught the bus.",
          register: "familiar",
          region: "Inglés universal",
          whenToUse: "Para lamentar algo que ya no tiene arreglo. “Wish we had left” es el arrepentimiento; la condicional dice qué habría pasado."
        }
      ],
      prompt: "Laura says “we missed the bus.” ¿Qué evita ese verbo?",
      choices: ["Evita sonar como si extraviaron el bus físico.", "Evita decir que el bus salió tarde por culpa de ellos.", "Evita hablar de una cita médica perdida para siempre."],
      answer: 0,
      practiceExtra: [
        dl28Question("¿Cuál frase se acerca mejor a se me perdió?", ["My ID went missing.", "I missed my ID.", "The ID lost me."], 0, "went missing para pérdida accidental"),
        dl28Question("Si la cita ya pasó, ¿qué verbo necesita?", ["miss the appointment", "lose the appointment", "waste the appointment"], 0, "miss para citas y salidas"),
        dl28Question("¿Cuál frase critica el uso del tiempo?", ["We spent time together.", "We wasted more time.", "We found time later."], 1, "waste time frente a spend time"),
        dl28Question("¿Cuál usa get lost correctamente?", ["My ID got lost me.", "I got lost downtown.", "We got lost the bus."], 1, "get lost para una persona desorientada")
      ]
    }
  },
  {
    id: "choosing-a-candidate-in-pereira",
    level: "Developing · Choosing formally",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "courteous",
    verb: "elegir",
    review: "pending",
    es: {
      title: "Choosing a candidate in Pereira",
      situation:
        "You are in Pereira before a local election. At a neighborhood meeting, you compare candidates and learn when to say elegir, when escoger sounds more natural, and why voting is not the same as choosing.",
      setting: {
        who: "Camila volunteers at a neighborhood forum, and Don Álvaro is a resident who asks sharp but fair questions.",
        what: "They discuss how people choose a candidate, how the community elects representatives, and why escoger is often the everyday verb.",
        when: "A Thursday evening, one week before local elections, after most people have come from work.",
        where: "Pereira, in a community hall near the center, bringing the Eje Cafetero into the catalogue.",
        why: "Because elegir is not the most casual Colombian verb for every choice. It carries weight in formal decisions, public roles, and elections."
      },
      address: {
        form: "usted",
        who: "Camila and Don Álvaro use usted because the forum is public and they do not know each other well.",
        why: "The subject is civic and the room includes neighbors of different ages. Usted keeps disagreement respectful without making it cold.",
        ifYouSwitch:
          "Tú would sound too personal for a public question. Vos would pull the scene toward a different regional intimacy and away from the civic register."
      },
      dialogue: [
        dl28Dialogue("Camila", "Buenas noches. La idea no es empujar un nombre, sino elegir con criterio.", "Good evening. The idea is not to push one name, but to choose with judgment.", "BWEH-nahs NOH-ches. lah ee-DEH-ah noh es em-poo-HAR oon NOM-breh, SEE-noh eh-leh-HEER kon kree-TEH-ryoh", "Good nights. The idea is not push a name, but choose with judgment.", "Elegir sounds right because the choice has public weight. Escoger would be understood, but elegir gives the decision a deliberate civic frame."),
        dl28Dialogue("Don Álvaro", "¿Y cómo elige uno sin tragarse la propaganda?", "And how does one choose without swallowing the propaganda?", "ee KOH-moh eh-LEE-heh OO-noh seen trah-GAR-seh lah proh-pah-GAN-dah", "And how chooses one without swallowing the propaganda?", "Elige uno is impersonal and conversational at once. He asks how ordinary voters can make a responsible choice instead of reacting to advertising."),
        dl28Dialogue("Camila", "Primero se miran las propuestas; después se escoge entre opciones reales.", "First you look at the proposals; then you pick among real options.", "pree-MEH-roh seh MEE-rahn lahs proh-PWES-tahs; des-PWES seh es-KOH-heh EN-treh op-SYOH-nes rreh-AH-les", "First are looked-at the proposals; later one picks among real options.", "This line is honest about usage: escoger is often the everyday spoken verb. The lesson teaches elegir without pretending Colombians say it for every choice."),
        dl28Dialogue("Don Álvaro", "O sea, elegir no es sólo votar por el que cae mejor.", "So choosing is not just voting for whoever seems nicest.", "oh SEH-ah, eh-leh-HEER noh es SOH-loh boh-TAR por el keh ka-eh meh-HOR", "That is, choosing is not only voting for the one who falls better.", "Votar is the action of casting a vote; elegir is the decision or result. The difference matters in political Spanish."),
        dl28Dialogue("Camila", "Exacto. Y si la comunidad lo elige, después tiene que rendir cuentas.", "Exactly. And if the community elects him, afterward he has to be accountable.", "eg-SAK-toh. ee see lah koh-moo-nee-DAD loh eh-LEE-heh, des-PWES TYEH-neh keh rren-DEER KWEN-tahs", "Exact. And if the community him elects, later he has to render accounts.", "Elegir also means to elect someone into a role. Lo elige is not merely personal preference; it creates public responsibility."),
        dl28Dialogue("Don Álvaro", "Entonces yo no elijo al más famoso; elijo al que pueda responder.", "Then I don't choose the most famous one; I choose the one who can answer for the job.", "en-TON-ses yo noh eh-LEE-hoh al mas fah-MOH-soh; eh-LEE-hoh al keh PWEH-dah rres-pon-DER", "Then I not choose the most famous; I choose the one who can respond.", "The repeated elijo makes the lesson's verb personal and spoken. It also shows elegir with a human object introduced by personal a.")
      ],
      vocabulary: [
        dl28Vocab("elegir", "To choose with weight, and to elect someone to a position. It is common, but often more formal than escoger.", "to choose / elect", "Use it when the choice is deliberate, public, official, or about a person taking a role.", "Avoid it for casually picking food, a seat, or a color; Colombians often say escoger there.", "neutral to formal", "General Spanish; the elegir versus escoger split is very useful in Colombia.", ["escoger", "votar", "seleccionar", "decidir"], "La comunidad lo elige.", "The community elects him."),
        dl28Vocab("escoger", "The more common everyday spoken verb for picking among options, with less official weight than elegir.", "to pick / choose", "Use it for menus, seats, colors, routes, and ordinary options where nobody is being elected.", "Avoid it when the choice is an office, a representative, or a formal process where elegir may fit better.", "neutral conversational", "Very common Colombian Spanish.", ["elegir", "seleccionar", "preferir", "quedarse con"], "Se escoge entre opciones reales.", "You pick among real options."),
        dl28Vocab("votar por", "To vote for someone or something. It names the act at the ballot, not the whole decision process.", "to vote for", "Use it when a ballot, assembly, committee, or group makes a choice by voting.", "Avoid it when no vote is involved. Choosing a route is escoger or elegir, not votar por.", "neutral", "General Spanish.", ["sufragar", "apoyar", "marcar", "elección"], "Votar por el que cae mejor no basta.", "Voting for whoever seems nicest is not enough."),
        dl28Vocab("con criterio", "With judgment, standards, or a reasoned basis. It pushes the choice beyond impulse.", "with criterion", "Use it when you want a decision to look thoughtful rather than emotional or random.", "Avoid it for a casual preference where solemn language would be funny or stiff.", "neutral", "General Spanish.", ["con juicio", "con razones", "a conciencia", "bien pensado"], "Elegir con criterio.", "Choose with judgment."),
        dl28Vocab("rendir cuentas", "To be accountable, especially when a person with responsibility must explain decisions and results.", "to render accounts", "Use it for officials, leaders, representatives, or anyone who must answer to a group.", "Avoid adding se by analogy. Rendirse cuentas changes the phrase and loses the civic meaning.", "formal civic", "General Spanish.", ["responder", "explicar", "informar", "cumplir"], "Tiene que rendir cuentas.", "He has to be accountable."),
        dl28Vocab("caer mejor", "To come across better or be more likeable. Literally, someone falls better to you.", "to fall better", "Use it for personal chemistry, likeability, or first impressions.", "Avoid using it as proof of competence. A candidate can caer bien and still be wrong for the job.", "neutral conversational", "General Spanish.", ["gustar", "simpatizar", "convencer", "parecer"], "El que cae mejor.", "The one who seems nicest."),
        dl28Vocab("opciones reales", "Realistic options, not perfect fantasies. The phrase keeps the conversation grounded.", "real options", "Use it when a decision has constraints and the speaker wants to stay practical.", "Avoid it during open brainstorming if you do not want to close possibilities too early.", "neutral", "General Spanish.", ["alternativas", "posibilidades", "candidatos", "propuestas"], "Se escoge entre opciones reales.", "You pick among real options.")
      ],
      note:
        "Elegir deserves a voting scene because that is where its weight is easiest to hear. In ordinary Colombian speech, escoger often does the daily work of choosing. Elegir is still essential, but it feels more deliberate, more formal, or tied to electing someone into responsibility.",
      culture: [
        dl28Culture("The Eje Cafetero belongs in civic Spanish", "Pereira gives the lesson a setting outside the overused Bogotá and Medellín loop. The vocabulary is general Colombian Spanish, but a real regional city keeps the catalogue from sounding like only two places exist."),
        dl28Culture("Choosing is not always voting", "Votar is the physical or procedural act; elegir is the decision and sometimes the result. A person can vote badly, choose carefully, or help elect someone who later must answer to the community."),
        dl28Culture("Escoger is not a lesser verb", "Many Colombians naturally say escoger for everyday choices. Teaching elegir honestly means admitting that escoger may be the word you hear more often in kitchens, buses, and casual plans."),
        dl28Culture("Accountability is part of the verb", "When a community elige someone, the relationship changes. The chosen person is no longer just preferred; they have a role, and the community can demand explanations later.")
      ],
      pitfalls: [
        dl28Pitfall("Using elegir for every tiny choice", "It is grammatical, but it can sound too formal for snacks, seats, or colors. In speech, Colombians often reach for escoger in those ordinary moments.", "Use escoger for casual picking and elegir for weightier choices."),
        dl28Pitfall("Treating votar and elegir as identical", "Votar is casting a vote. Elegir is choosing or electing, and can describe the result of many votes together.", "Voté por ella, y la comunidad la eligió."),
        dl28Pitfall("Forgetting personal a with people", "When the object is a specific person, Spanish normally marks it: elijo al candidato, not elijo el candidato.", "Elijo al candidato que pueda responder."),
        dl28Pitfall("Saying rendirse cuentas", "The civic phrase is rendir cuentas, without se. Adding se by analogy makes it sound like surrendering rather than being accountable.", "Tiene que rendir cuentas.")
      ],
      variations: [
        dl28Variation("Elegir con criterio.", "neutral", "General Spanish", "Use it when you want the choice to sound reasoned and serious."),
        dl28Variation("Escoger entre opciones reales.", "neutral conversational", "General Colombian", "Use it in everyday speech about picking from practical options."),
        dl28Variation("Votar por una candidata.", "neutral civic", "General Spanish", "Use it for the act of marking or casting a vote."),
        dl28Variation("La comunidad lo elige.", "formal civic", "General Spanish", "Use it when a group elects someone into a role."),
        dl28Variation("Elijo al que pueda responder.", "neutral", "General Spanish", "Use it when you choose a person by responsibility, not popularity.")
      ],
      prompt: "Camila uses both elegir and escoger. What distinction is she teaching?",
      choices: ["Elegir carries more formal or civic weight; escoger is common for everyday picking.", "Elegir is only for food, while escoger is only for national elections.", "Elegir means to vote secretly, while escoger means to count ballots publicly."],
      answer: 0,
      practiceExtra: [
        dl28Question("Which line best fits a public election result?", ["La comunidad lo cocina.", "La comunidad lo pierde.", "La comunidad lo elige."], 2, "elegir as electing someone into a role"),
        dl28Question("Why is “elijo al candidato” better than “elijo el candidato”?", ["Because a specific person takes personal a", "Because candidates never take articles", "Because elegir cannot take objects"], 0, "personal a with human direct objects"),
        dl28Question("Which verb names the act of casting a ballot?", ["Votar por una candidata", "Escoger una mochila", "Elegir una arepa"], 0, "votar por as the ballot action"),
        dl28Question("For a casual seat choice, what should you expect to hear often?", ["Escoge la silla que quieras", "Elige solemnemente la silla", "Vota por la silla pública"], 0, "escoger as common everyday speech")
      ]
    },
    en: {
      title: "Elegir entre choose, pick y elect",
      situation:
        "Usted está en una reunión barrial antes de elecciones locales. Tiene que hablar en inglés de escoger opciones, elegir con criterio y elegir a alguien para un cargo sin usar choose para todo.",
      setting: {
        who: "Camila ayuda en un foro barrial y Don Álvaro es un vecino que pregunta con firmeza pero con respeto.",
        what: "Conversan sobre cómo escoger candidato, cómo una comunidad elige representantes y por qué pick, choose y elect no pesan igual.",
        when: "Un jueves por la noche, una semana antes de elecciones locales, después de la jornada laboral.",
        where: "Pereira como referencia colombiana, pero la conversación se practica en inglés para poder hablar de procesos cívicos fuera del país.",
        why: "Porque elegir no se traduce siempre igual. El inglés reparte el campo entre choose, pick, elect y vote for según formalidad y proceso."
      },
      address: {
        form: "mixed",
        who: "Camila y Don Álvaro mantienen respeto con el tono, no con un pronombre diferente.",
        why: "El inglés usa you en todo el intercambio. La distancia se marca con good evening, careful phrasing y turnos largos.",
        ifYouSwitch:
          "Cambiar a sir cada dos frases sonaría rígido o teatral. Basta usar frases completas y evitar bromas demasiado familiares."
      },
      dialogue: [
        dl28Dialogue("Camila", "Good evening. The point isn't to push a name, but to choose carefully.", "Buenas noches. La idea no es empujar un nombre, sino elegir con criterio.", "gud IV-ning. da point IZ-ent tu push a neim, bat tu chuz KER-ful-i", "Buenas noches. El punto no es empujar un nombre, sino escoger cuidadosamente.", "Choose carefully funciona para elegir con criterio cuando habla de decisión personal. Carefully aporta el juicio que en español trae con criterio."),
        dl28Dialogue("Don Álvaro", "And how do you choose without swallowing the campaign ads?", "¿Y cómo elige uno sin tragarse la propaganda?", "and jau du yu chuz uid-AUT SUA-lo-ing da kam-PEIN adz", "¿Y cómo escoge usted sin tragarse los anuncios de campaña?", "Choose es natural porque pregunta por el proceso mental del votante. Swallowing the ads conserva la imagen de tragarse la propaganda sin sonar traducida a medias."),
        dl28Dialogue("Camila", "First you look at the proposals; then you pick from real options.", "Primero se miran las propuestas; después se escoge entre opciones reales.", "ferst yu luk at da pro-PO-zalz; den yu pik from RIL OP-shonz", "Primero mira las propuestas; después escoge de opciones reales.", "Pick es más cotidiano que choose. Sirve para mostrar el papel de escoger en habla diaria sin negar que la decisión sea importante."),
        dl28Dialogue("Don Álvaro", "So choosing isn't just voting for whoever seems nicer.", "O sea, elegir no es sólo votar por el que cae mejor.", "so CHU-zing IZ-ent yost VO-ting for hu-E-ver simz NAI-ser", "Entonces escoger no es sólo votar por quien parece más amable.", "Voting for nombra el acto electoral. Choosing nombra la decisión más amplia. El inglés separa esos dos planos igual que el español separa votar y elegir."),
        dl28Dialogue("Camila", "Exactly. And if the community elects him, he has to be accountable later.", "Exacto. Y si la comunidad lo elige, después tiene que rendir cuentas.", "eg-ZAKT-li. and if da com-MYU-ni-ti i-LEKTS jim, ji jaz tu bi a-KAUN-ta-bol LEI-ter", "Exactamente. Y si la comunidad lo elige, él tiene que ser responsable después.", "Elect es el verbo preciso para elegir a alguien a un cargo. Choose him sería posible, pero pierde el peso institucional."),
        dl28Dialogue("Don Álvaro", "Then I won't pick the famous one; I'll choose the one who can answer for the job.", "Entonces yo no elijo al más famoso; elijo al que pueda responder.", "den ai wont pik da FEI-mos uan; ail chuz da uan ju kan AN-ser for da yob", "Entonces no escogeré al famoso; escogeré al que pueda responder por el trabajo.", "Pick hace sonar la primera opción casual y quizá superficial; choose hace que la decisión final suene más considerada. El contraste enseña registro sin sermón.")
      ],
      vocabulary: [
        dl28Vocab("choose", "El verbo general para escoger o elegir entre opciones, con más peso que pick cuando la decisión importa.", "elegir / escoger", "Úselo en decisiones personales, profesionales o cívicas donde quiere sonar deliberado.", "Evítelo si un cargo público formal pide elect o si una elección casual suena mejor con pick.", "neutro", "Inglés universal.", ["pick", "select", "decide", "opt for"], "Choose carefully.", "Elija con criterio."),
        dl28Vocab("pick", "La opción conversacional para escoger algo entre varias posibilidades, a menudo con menos solemnidad.", "escoger", "Úselo para sillas, rutas, turnos, comidas o una opción práctica dentro de una conversación seria.", "Evítelo cuando quiere destacar una decisión formal o moral. Puede sonar demasiado liviano.", "amistoso informal", "Inglés universal.", ["choose", "select", "grab", "go with"], "Pick from real options.", "Escoja entre opciones reales."),
        dl28Vocab("elect", "Elegir a alguien para un cargo mediante votación o proceso formal.", "elegir", "Úselo con presidentes, alcaldes, juntas, representantes y cargos definidos por un voto.", "Evítelo para comida o sillas. Nadie toma posesión del cargo de pollo o silla.", "formal cívico", "Inglés universal.", ["vote in", "appoint", "nominate", "represent"], "The community elects him.", "La comunidad lo elige."),
        dl28Vocab("vote for", "Votar por alguien o por una propuesta. Es el acto, no siempre el resultado.", "votar por", "Úselo cuando marca una opción, levanta la mano o emite un voto.", "Evítelo para el ganador final. The community voted for him no siempre significa que lo eligió.", "neutro cívico", "Inglés universal.", ["cast a vote", "back", "support", "ballot"], "Voting for whoever seems nicer is not enough.", "Votar por el que cae mejor no basta."),
        dl28Vocab("carefully", "Adverbio que puede traducir con criterio cuando el énfasis está en pensar antes de decidir.", "cuidadosamente", "Úselo para pedir una decisión razonada sin usar una frase larga.", "Evítelo si el criterio es técnico o jurídico. Standards, criteria o evidence pueden ser más exactos.", "neutro", "Inglés universal.", ["thoughtfully", "with care", "based on evidence", "responsibly"], "Choose carefully.", "Elija con criterio."),
        dl28Vocab("be accountable", "Rendir cuentas. La persona debe explicar decisiones y aceptar revisión pública o del grupo.", "ser responsable ante otros", "Úselo con funcionarios, líderes, representantes o cualquier persona con responsabilidad delegada.", "Evítelo si sólo quiere decir que alguien es culpable de un error puntual. Accountable es más institucional.", "formal cívico", "Inglés universal.", ["answer for", "report back", "take responsibility", "be responsible"], "He has to be accountable.", "Tiene que rendir cuentas."),
        dl28Vocab("answer for the job", "Responder por el cargo o por la tarea. Suena menos técnico que be accountable.", "responder por el trabajo", "Úselo en conversación común sobre si alguien está a la altura de un papel.", "Evítelo en documentos oficiales, donde accountable or responsible puede ser más claro.", "neutro conversacional", "Inglés universal.", ["be accountable", "handle the role", "take responsibility", "do the job"], "Choose the one who can answer for the job.", "Elija al que pueda responder.")
      ],
      note:
        "El inglés no le permite dejar todo en elegir. Choose sirve como verbo general; pick baja el registro y suena cotidiano; elect entra cuando alguien queda en un cargo; vote for nombra el acto de votar. La precisión está en reconocer qué tipo de decisión tiene delante.",
      culture: [
        dl28Culture("Pick puede sonar demasiado liviano", "Pick no es incorrecto por ser informal. El problema aparece cuando una decisión pública necesita peso. I'll pick a mayor puede sonar como escoger sabor de helado; elect or choose a mayor respeta mejor el contexto."),
        dl28Culture("Elect crea cargo", "Elect implica que la persona entra a una posición reconocida. Por eso combina tan bien con president, mayor, board, representative. No lo use para cualquier preferencia personal."),
        dl28Culture("Vote for no garantiza victoria", "I voted for her sólo dice lo que usted hizo con su voto. She was elected dice que el proceso la puso en el cargo. Separar esos planos evita malentendidos políticos."),
        dl28Culture("El criterio se vuelve adverbio", "Con criterio no siempre tiene una traducción fija. Choose carefully, choose responsibly, based on evidence y with clear criteria pueden ser correctas según el nivel de formalidad.")
      ],
      pitfalls: [
        dl28Pitfall("“I elected the chicken.”", "Elect suena a cargo público o proceso formal. Para comida, silla o color, use pick o choose.", "I picked the chicken."),
        dl28Pitfall("“The community chose him mayor.”", "La idea se entiende, pero el verbo cívico natural es elected, y el cargo necesita una estructura clara.", "The community elected him mayor."),
        dl28Pitfall("“I voted her.”", "Vote necesita for cuando la persona o propuesta recibe el voto. Sin for, la frase queda incompleta o suena a otra estructura.", "I voted for her."),
        dl28Pitfall("“Choose with criterion.”", "Es una copia rígida de con criterio. En conversación, choose carefully o choose responsibly suenan naturales.", "Choose carefully.")
      ],
      variations: [
        dl28Variation("Choose carefully.", "neutro", "Inglés universal", "Quiere pedir una decisión pensada."),
        dl28Variation("Pick from real options.", "amistoso informal", "Inglés universal", "Está hablando de escoger entre opciones prácticas."),
        dl28Variation("Vote for a candidate.", "neutro cívico", "Inglés universal", "Nombra el acto de votar."),
        dl28Variation("The community elects him.", "formal cívico", "Inglés universal", "Un grupo lo pone en un cargo."),
        dl28Variation("Choose the one who can answer for the job.", "neutro", "Inglés universal", "Quiere combinar decisión personal y responsabilidad.")
      ],
      prompt: "Camila says “the community elects him.” ¿Por qué no basta siempre con choose?",
      choices: ["Porque elect marca que entra a un cargo formal.", "Porque choose sólo sirve para comidas y colores.", "Porque elect significa votar en contra de alguien."],
      answer: 0,
      practiceExtra: [
        dl28Question("¿Cuál frase sirve para escoger comida sin solemnidad?", ["I elected the chicken.", "I voted the chicken.", "I picked the chicken."], 2, "pick para decisiones cotidianas"),
        dl28Question("¿Cuál nombra el acto de votar por una persona?", ["I voted for her.", "I elected for her.", "I picked for her."], 0, "vote for con persona o propuesta"),
        dl28Question("¿Cuál frase comunica rendir cuentas?", ["He must be accountable.", "He must be famous.", "He must be picked."], 0, "be accountable como rendir cuentas"),
        dl28Question("¿Por qué falla “choose with criterion”?", ["Porque suena como copia rígida", "Porque criterion significa candidato", "Porque choose no acepta adverbios"], 0, "choose carefully frente a calco de con criterio")
      ]
    }
  }
);

markSource(lessons, "data/lessons/28-developing-winning-losing-choosing.js");
