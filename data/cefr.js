/*
 * CEFR bands, derived from the language actually taught.
 *
 * The temptation is to write a band onto each of the 226 lessons and be done.
 * That is the same hand-maintained list this project has been bitten by five
 * times: it is right on the day it is written, nobody re-checks it, and by the
 * time a lesson is rewritten the label is decoration. Worse, a band is a claim
 * about a learner's ability, so a stale one is not a cosmetic problem.
 *
 * So nothing here is assigned. Each entry is a grammatical feature with a
 * regular expression that detects it in a real utterance, and a lesson's band
 * is the highest band any of its taught lines actually demonstrates. Rewrite a
 * lesson and its band moves on its own.
 *
 * Two rules keep this honest.
 *
 * Probes are conservative on purpose. A false positive claims the learner met
 * grammar they never saw and inflates the whole course; a false negative only
 * understates it. Where a pattern could not be detected without guessing —
 * the present subjunctive is the worst of these, since its endings collide
 * head-on with ordinary -ar present indicative — the probe lists the forms of
 * common verbs instead of trying to match morphology in general.
 *
 * Every probe carries its own evidence. `yes` are utterances it must match,
 * `no` are near misses it must reject, and they sit next to the pattern rather
 * than in the test file so that changing one without the other is awkward.
 * The `no` cases are the interesting half: "prepara" is present indicative and
 * must not read as an imperfect subjunctive, "todavía" is not an imperfect,
 * and "la policía" is not a verb at all.
 *
 * The bands run A1 to B2 in the order below, and that order is the only thing
 * that decides which of two detected features is "higher".
 *
 * The scale stops at B2 because the course does. C1 and C2 probes used to sit
 * at the end of both lists, and measuring them is what proved they did not
 * belong: coverage reported 0 of 3 C1 features taught in Spanish, 1 of 3 in
 * English, and 0 of 1 at C2 in both directions. What they did produce was
 * eight lessons labeled above the level they actually teach, each on a single
 * stray match -- the English cleft probe alone pulled six otherwise-B1
 * lessons up to C1. A band nothing teaches cannot be earned, so all it can do
 * is overstate a lesson and hang two permanently empty rungs off the end of
 * the level ladder. If the course is ever written up to C1, add the probes
 * back behind the lessons that teach them, not ahead of them.
 *
 * One asymmetry is deliberate. A feature's `name` is written in the language
 * of the person reading it, not the language it describes: the `es` features
 * are named in English because the people meeting them are English speakers
 * learning Spanish, and the `en` features are named in Spanish for the same
 * reason in reverse. Naming both halves in both languages would mean writing
 * strings nobody is ever shown.
 */
const CEFR_BANDS = ["A1", "A2", "B1", "B2"];

/*
 * Fragments that more than one probe needs.
 *
 * Six Spanish probes ask "is there a participle after this auxiliary", and
 * when each of them spelled that out for itself, all six carried the same
 * hole: they matched \w+(ado|ido) and so read "ha llegado" but not "ha dicho".
 * The regular participles are a rule and the irregular ones are a list, and a
 * list copied six times is a list that will be corrected in one place. So the
 * fragment is written once here and referenced as {ES_PART} / {EN_PART}, and
 * cefr.js expands it when it compiles the probe.
 */
const CEFR_MACROS = {
  /* Regular -ado/-ido, plus the irregular participles common enough to appear
     in conversation. Each is listed in both genders where it inflects. */
  ES_PART: "(?:\\w+(?:ado|ada|ados|adas|ido|ida|idos|idas)|dicho|hecho|visto|puesto|escrito|vuelto|muerto|abierto|roto|cubierto|resuelto|devuelto|descrito|impreso)",

  /* Regular -ed, plus the irregular past participles of the highest-frequency
     English verbs. "had" and "been" appear here because they are participles
     in their own right ("has had", "had been"). */
  EN_PART: "(?:\\w{3,}ed|been|had|gone|done|seen|taken|made|come|got|gotten|written|spoken|eaten|given|known|told|put|said|heard|brought|thought|found|met|left|lost|won|kept|sent|read|run|begun|broken|chosen|driven|felt|held|paid|sat|sold|understood)"
};

const CEFR_FEATURES = {
  es: [
    /* ---------------- A1: the present, and pointing at things ------------- */
    {
      id: "es-ser-estar",
      band: "A1",
      name: "Saying what something is or where it is",
      probe: "\\b(soy|eres|es|somos|son|estoy|est[áa]s|est[áa]|estamos|est[áa]n)\\b",
      yes: ["Soy de Medellín.", "¿Dónde está el baño?", "Están en la casa."],
      no: ["Fui a la tienda.", "Habría llegado antes."]
    },
    {
      id: "es-hay",
      band: "A1",
      name: "Saying what there is",
      probe: "\\bhay\\b",
      yes: ["Hay un café en la esquina.", "No hay problema."],
      no: ["Había mucha gente.", "Ha llegado."]
    },
    {
      id: "es-question-word",
      band: "A1",
      name: "Asking a basic question",
      /* The opening ¿ is not always followed by the question word — "¿A qué
         hora?", "¿De dónde es?", "¿Con quién va?" all put a preposition first,
         and an earlier draft that anchored the two together missed every one
         of them. Scanning to the closing ? instead. The accents do the real
         work: an interrogative is always accented, so "qué" is a question and
         the "que" in "quiero que vayas" is not. */
      probe: "¿[^?]*\\b(qué|quién|quiénes|dónde|adónde|cuándo|cómo|cuánto|cuánta|cuántos|cuántas|cuál|cuáles)\\b",
      yes: ["¿Dónde vives?", "¿Cuánto cuesta?"],
      no: ["No sé dónde vive.", "Es una pregunta."]
    },
    {
      id: "es-gustar",
      band: "A1",
      name: "Saying what you like",
      probe: "\\b(me|te|le|nos|les)\\s+(gusta|gustan|encanta|encantan)\\b",
      yes: ["Me gusta el café.", "Nos encantan las arepas."],
      no: ["Gusta mucho.", "Me gustaría ir."]
    },
    {
      id: "es-present-regular",
      band: "A1",
      name: "Saying what you do",
      /* The single largest thing the course teaches and the last thing it
         measured: 3,617 utterances used the ordinary present tense and no
         probe looked for it, so the most basic grammar in the language was
         invisible while six flavors of subjunctive were counted.
         Morphology cannot carry this one. The -o ending is the first person
         singular and also every masculine noun in the language (libro,
         dinero, carro), and -as/-es/-en collide with plurals (casas, meses)
         and with nouns like "joven" and "examen". Only the plural endings
         -amos/-emos/-imos are reliably verbal, so those are matched openly
         and everything else is a list of the verbs a beginner actually meets. */
      probe: "\\b\\w{2,}(amos|emos|imos)\\b|\\b(hablo|hablas|habla|hablan|comes|come|comen|vivo|vives|vive|viven|trabajo|trabajas|trabaja|trabajan|necesito|necesitas|necesita|necesitan|llego|llegas|llega|llegan|paso|pasas|pasa|pasan|llevo|llevas|lleva|llevan|tomo|tomas|toma|toman|miro|miras|mira|miran|busco|buscas|busca|buscan|compro|compras|compra|compran|uso|usas|usa|usan|creo|crees|cree|creen|veo|ves|ve|ven|doy|das|dan|voy|vas|va|van|hago|haces|hace|hacen|digo|dices|dice|dicen|salgo|sales|sale|salen|leo|lees|lee|leen|escribo|escribes|escribe|escriben|aprendo|aprendes|aprende|aprenden|abro|abres|abre|abren|espero|esperas|espera|esperan)\\b",
      yes: ["Yo trabajo en el centro.", "Ella vive en Cali.", "Comemos a la una.", "¿Qué haces?"],
      no: ["El libro es nuevo.", "Ayer fui al centro.", "Tengo dinero."]
    },
    {
      id: "es-articles-gender",
      band: "A1",
      name: "Getting the gender and number right",
      /* "el que" and "la que" are relative pronouns, not article plus noun,
         and matching them here would credit a beginner feature to a B2 line. */
      probe: "\\b(el|la|los|las|un|una|unos|unas)\\s+(?!que\\b|cual\\b)\\w{2,}",
      yes: ["El carro está afuera.", "Una arepa, por favor.", "Las llaves están aquí."],
      no: ["Lo que dijo es cierto.", "Yo no sé nada."]
    },
    {
      id: "es-possessive",
      band: "A1",
      name: "Saying whose it is",
      /* The accents separate these from their homographs: "tu" is your and
         "tú" is you, "mi" is my and "mí" is me. Because an accented vowel is
         not a word character in JavaScript, that distinction only survives
         the accent-aware boundary that cefr.js compiles in. */
      probe: "\\b(mi|mis|tu|tus|su|sus|nuestr[oa]s?|suy[oa]s?|m[íi]os?|tuy[oa]s?)\\b",
      yes: ["Mi casa está cerca.", "Sus papás viven en Cali.", "Tus llaves están ahí."],
      no: ["Tú sabes bien.", "A mí me gusta."]
    },
    {
      id: "es-demonstrative",
      band: "A1",
      name: "Pointing at this one or that one",
      /* Deliberately unaccented throughout. "esta" is this and "está" is is;
         an earlier probe elsewhere in this file confused exactly that pair
         and turned every fan in the shopping lessons into a subjunctive. */
      probe: "\\b(este|esta|estos|estas|esto|ese|esa|esos|esas|eso|aquel|aquella|aquellos|aquellas|aquello)\\b",
      yes: ["Este ventilador es bueno.", "Eso no me gusta.", "Aquella casa es grande."],
      no: ["Está lloviendo.", "Esté donde esté."]
    },
    {
      id: "es-reflexive",
      band: "A1",
      name: "Talking about your own routine",
      probe: "\\b(me|te|se|nos)\\s+(llamo|llamas|llama|llaman|llamamos|levanto|levantas|levanta|levantan|levantamos|acuesto|acuesta|acuestan|ducho|ducha|siento|sienta|sientan|queda|quedan|quedo|quedas|quedamos|pone|pongo|ponen|despierto|despierta|lava|lavo|peino|peina|arregla|arreglo|demoro|demora|voy|vas|va|van|vamos)\\b",
      yes: ["Me llamo Andrés.", "Se levanta a las seis.", "¿Cómo te llamas?"],
      no: ["Me gusta el café.", "Se vende arroz."]
    },
    {
      id: "es-tener-expressions",
      band: "A1",
      name: "Saying how you feel with tener",
      /* Spanish is hungry by having hunger, so these are the everyday states a
         beginner needs and they are idiom, not vocabulary. Plain possession
         ("tengo un carro") is not this feature and must not match. */
      probe: "\\b(tengo|tienes|tiene|tenemos|tienen)\\s+(?:much[oa]s?\\s+|un\\s+poco\\s+de\\s+)?(hambre|sed|fr[íi]o|calor|sue[ñn]o|ganas|prisa|af[áa]n|miedo|raz[óo]n|cuidado|suerte|pena|rabia|que)\\b|\\b(tengo|tienes|tiene|tenemos|tienen)\\s+\\d+\\s+a[ñn]os\\b",
      yes: ["Tengo hambre.", "Tiene mucho afán.", "Tengo que irme.", "Tengo 30 años."],
      no: ["Tengo un carro.", "Tiene dos hermanos."]
    },
    {
      id: "es-negation",
      band: "A1",
      name: "Saying never, nothing and nobody",
      /* Bare "no" is not listed. It appears in a third of all utterances and
         detects nothing beyond the fact that Spanish was spoken; the feature
         worth measuring is the double negative a beginner has to be taught. */
      probe: "\\b(nunca|nada|nadie|ning[úu]n|ningun[oa]s?|tampoco|jam[áa]s)\\b",
      yes: ["No hay nada.", "Nunca voy allá.", "No vino nadie."],
      no: ["Sí hay café.", "Todo está bien."]
    },
    {
      id: "es-clock-time",
      band: "A1",
      name: "Telling the time",
      /* "a las" alone would swallow "a la tienda", so an hour has to follow. */
      probe: "\\ba\\s+las?\\s+(una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce|\\d{1,2})\\b|\\by\\s+(media|cuarto)\\b|\\ben\\s+punto\\b|\\bde\\s+la\\s+(ma[ñn]ana|tarde|noche)\\b|\\bal\\s+mediod[íi]a\\b",
      yes: ["Nos vemos a las seis.", "Son las tres y media.", "A las ocho de la mañana."],
      no: ["Vamos a la tienda.", "Es de la casa."]
    },
    {
      id: "es-weather",
      band: "A1",
      name: "Talking about the weather",
      probe: "\\bhace\\s+(?:much[oa]\\s+)?(fr[íi]o|calor|sol|viento|buen\\s+tiempo|mal\\s+tiempo)\\b|\\best[áa]\\s+(lloviendo|nublado|soleado|haciendo\\s+fr[íi]o)\\b|\\bllueve\\b|\\bhay\\s+neblina\\b",
      yes: ["Hace mucho frío hoy.", "Está lloviendo.", "Hace calor en Barranquilla."],
      no: ["Hace dos años.", "Hace la tarea."]
    },
    {
      id: "es-frequency",
      band: "A1",
      name: "Saying how often",
      probe: "\\b(siempre|casi\\s+siempre|a\\s+veces|de\\s+vez\\s+en\\s+cuando|todos\\s+los\\s+d[íi]as|cada\\s+d[íi]a|cada\\s+semana|normalmente|generalmente|rara\\s+vez)\\b",
      yes: ["Siempre desayuno huevos.", "A veces voy al gimnasio.", "Todos los días camino."],
      no: ["Hoy no salgo.", "Mañana vamos."]
    },

    /* ---------------- A2: the past, the near future, and comparing -------- */
    {
      id: "es-preterite",
      band: "A2",
      name: "Talking about something finished",
      /* Word-final -ó is almost always a third-person preterite, and the
         irregular stems are unambiguous. The regular -í/-iste endings need a
         two-character stem guard so "vi" and "di" do not drag in every word. */
      probe: "\\b(fui|fue|fuimos|fueron|hice|hizo|tuve|tuvo|estuve|estuvo|dije|dijo|vine|vino|pude|pudo|puse|puso|quise|quiso|supe|supo|dio|vio|cupe|cupo|traje|trajo|anduve|anduvo|hubo)\\b|\\b\\w{2,}(ó|aste|aron|iste|ieron|jeron)\\b",
      yes: ["Ayer fui al centro.", "Ella habló con el jefe.", "¿Qué hiciste el sábado?", "Ayer cupo todo.", "Me lo dijeron ayer."],
      no: ["Voy al centro.", "El corazón me late.", "Es una canción bonita."]
    },
    {
      id: "es-imperfect",
      band: "A2",
      name: "Describing how things used to be",
      /* -aba is unambiguous. The -ía ending is not: día, todavía, policía and
         comisaría are all nouns, so only the common verbs are listed. */
      probe: "\\b\\w{2,}(aba|abas|[áa]bamos|aban)\\b|\\b(era|eras|[ée]ramos|eran|iba|ibas|[íi]bamos|iban|hab[íi]a|hab[íi]an|ten[íi]a|ten[íi]an|hac[íi]a|hac[íi]an|quer[íi]a|quer[íi]an|pod[íi]a|pod[íi]an)\\b",
      yes: ["Cuando era niño vivía en Cali.", "Trabajaba en un banco.", "Iban todos los domingos."],
      no: ["Todavía no llega.", "Llamé a la policía.", "Es un día largo."]
    },
    {
      id: "es-near-future",
      band: "A2",
      name: "Saying what you are going to do",
      probe: "\\b(voy|vas|va|vamos|van)\\s+a\\s+\\w+(ar|er|ir)\\b",
      yes: ["Voy a llamar a mi mamá.", "Vamos a comer algo."],
      no: ["Voy a la tienda.", "Va al trabajo."]
    },
    {
      id: "es-progressive",
      band: "A2",
      name: "Saying what is happening right now",
      probe: "\\b(estoy|est[áa]s|est[áa]|estamos|est[áa]n)\\s+\\w+(ando|iendo)\\b",
      yes: ["Estoy trabajando.", "Están comiendo."],
      no: ["Estoy en el trabajo.", "Trabajando se aprende."]
    },
    {
      id: "es-comparative",
      band: "A2",
      name: "Comparing two things",
      probe: "\\b(m[áa]s|menos)\\s+\\w+\\s+que\\b|\\btan\\s+\\w+\\s+como\\b|\\b(mejor|peor|mayor|menor)\\s+que\\b",
      yes: ["Este es más barato que el otro.", "Es tan alto como su papá.", "Mejor que ayer."],
      no: ["Más o menos.", "Quiero más café."]
    },
    {
      id: "es-object-pronoun",
      band: "A2",
      name: "Replacing the thing you are talking about",
      probe: "\\b(me|te|lo|la|los|las|le|les|nos)\\s+(dijo|dije|dio|di|llam[óo]|llamo|vio|veo|trajo|traje|mand[óo]|mando|dej[óo]|dejo|explic[óo]|explico)\\b|\\b\\w+(árselo|ármelo|arlo|arla|arte|arme|arnos)\\b",
      yes: ["Me lo dijo ayer.", "Te llamo más tarde.", "Quiero explicarlo bien."],
      no: ["La casa es grande.", "Lo importante es llegar."]
    },

    {
      id: "es-stem-change",
      band: "A2",
      name: "Verbs that change in the middle",
      /* Present indicative only. The imperfect forms of the same verbs
         ("quería", "podía") belong to es-imperfect and must not land here. */
      probe: "\\b(quiero|quieres|quiere|quieren|puedo|puedes|puede|pueden|duermo|duermes|duerme|duermen|pienso|piensas|piensa|piensan|empiezo|empiezas|empieza|empiezan|cierro|cierras|cierra|cierran|vuelvo|vuelves|vuelve|vuelven|prefiero|prefieres|prefiere|prefieren|entiendo|entiendes|entiende|entienden|pido|pides|pide|piden|sirvo|sirves|sirve|sirven|juego|juegas|juega|juegan|cuesta|cuestan|encuentro|encuentras|encuentra|encuentran)\\b",
      yes: ["Quiero un tinto.", "¿Cuánto cuesta?", "No entiendo nada."],
      no: ["Quería un tinto.", "Podía hacerlo."]
    },
    {
      id: "es-imperative-tu",
      band: "A2",
      name: "Telling someone to do something",
      /* 507 utterances in the corpus give an instruction and none of them were
         measured, because a bare "habla" is spelled exactly like the third
         person present "she speaks" and no regex can separate them.
         An attached pronoun can. "dame", "regáleme", "cuéntame" are only ever
         commands, so the probe matches the clitic-carrying forms and the small
         set of Colombian courtesy imperatives, and lets the ambiguous bare
         forms go uncounted. Undercounting is the safe direction. */
      probe: "\\b(dame|dime|d[íi]game|d[íi]galo|hazme|hazlo|h[áa]game|h[áa]gale|ponte|p[óo]ngase|si[ée]ntese|v[áa]yase|vete|v[áa]monos|d[ée]jame|d[ée]jeme|d[ée]jalo|ll[áa]mame|ll[áa]meme|esp[ée]rame|esp[ée]reme|tr[áa]eme|tr[áa]igame|cu[ée]ntame|cu[ée]nteme|m[íi]rame|m[íi]reme|p[áa]same|p[áa]seme|reg[áa]leme|reg[áa]lame|ay[úu]dame|ay[úu]deme|dale|dele|siga|sigue|perd[óo]neme|disculpe|cu[íi]dese)\\b",
      yes: ["Dame un momento.", "Regáleme un tinto.", "Siga, por favor."],
      no: ["Me dio un momento.", "Voy a darte un momento."]
    },
    {
      id: "es-imperative-negative",
      band: "A2",
      name: "Telling someone not to do something",
      /* The negative command borrows the subjunctive form, so "no te vayas" is
         morphologically a subjunctive. It is listed here at A2 rather than B1
         because what the learner is doing is giving an instruction, and a
         beginner meets it long before they meet a subordinate clause. */
      probe: "\\bno\\s+(?:te\\s+|se\\s+|me\\s+|le\\s+|lo\\s+|la\\s+|les\\s+|nos\\s+)?(vayas|vaya|hagas|haga|digas|diga|seas|sea|pongas|ponga|dejes|deje|olvides|olvide|preocupes|preocupe|toques|toque|comas|coma|corras|corra|salgas|salga|vengas|venga|traigas|traiga)\\b",
      yes: ["No te vayas todavía.", "No se preocupe.", "No digas nada."],
      no: ["No voy a ir.", "No tengo nada."]
    },
    {
      id: "es-double-object",
      band: "A2",
      name: "Using two pronouns at once",
      probe: "\\b(se|me|te|nos)\\s+(lo|la|los|las)\\b",
      yes: ["Se lo dije ayer.", "Me la dieron gratis.", "Te los mando mañana."],
      no: ["Se vende la casa.", "Me gusta la música."]
    },
    {
      id: "es-por-para",
      band: "A2",
      name: "Choosing between por and para",
      /* Both words are far too common to match on their own, so only the fixed
         phrases and the unambiguous "para que" are listed. */
      probe: "\\bpara\\s+(que|m[íi]|ti|usted|nosotros)\\b|\\bpor\\s+(eso|ahora|fin|aqu[íi]|all[áa]|separado|ejemplo|suerte|desgracia|si\\s+acaso|el\\s+momento)\\b",
      yes: ["Lo hago para que no se dañe.", "Por eso te llamé.", "Es para mí."],
      no: ["Voy por pan.", "Para mañana lo tengo."]
    },
    {
      id: "es-saber-conocer",
      band: "A2",
      name: "Knowing a fact or knowing a person",
      /* "sé" carries an accent and "se" does not, and the two are unrelated —
         one is I know and the other is the reflexive pronoun. Writing s[ée]
         here would have matched every impersonal "se" in the corpus. */
      probe: "\\b(s[é]|sabes|sabe|sabemos|saben|conozco|conoces|conoce|conocemos|conocen)\\b",
      yes: ["No sé dónde está.", "¿Conoces a Juan?", "Sabe mucho de fútbol."],
      no: ["Se fue temprano.", "Se vende arroz."]
    },
    {
      id: "es-adverb-mente",
      band: "A2",
      name: "Turning an adjective into an adverb",
      /* The stem guard keeps "mente" (mind) and "miente" (he lies) out. */
      probe: "\\b\\w{4,}mente\\b",
      yes: ["Normalmente llego temprano.", "Habla rápidamente.", "Solamente uno."],
      no: ["La mente humana.", "Él miente siempre."]
    },
    {
      id: "es-superlative",
      band: "A2",
      name: "Saying something is the most",
      probe: "\\b(el|la|los|las)\\s+(m[áa]s|menos)\\s+\\w+|\\b\\w{3,}[íi]sim[oa]s?\\b|\\b(mejor|peor)\\s+de\\b",
      yes: ["Es el más barato de todos.", "Está buenísimo.", "Es la mejor de la clase."],
      no: ["Es más barato que el otro.", "Es bueno."]
    },
    {
      id: "es-ya-todavia",
      band: "A2",
      name: "Already, still and not yet",
      probe: "\\b(ya|todav[íi]a|a[úu]n)\\b",
      yes: ["Ya llegué.", "Todavía no está listo.", "Aún no sé."],
      no: ["Nunca llegó.", "Hoy vamos."]
    },
    {
      id: "es-hace-time",
      band: "A2",
      name: "Saying how long ago",
      probe: "\\bhace\\s+(?:m[áa]s\\s+de\\s+)?\\w+\\s+(a[ñn]os?|mes|meses|d[íi]as?|semanas?|horas?|minutos?|rato)\\b|\\bdesde\\s+hace\\b|\\bllev[oa]\\s+\\w+\\s+(a[ñn]os?|meses?|d[íi]as?|horas?)\\b",
      yes: ["Hace dos años que vivo aquí.", "Desde hace rato.", "Hace tres días."],
      no: ["Hace frío.", "Hace la tarea."]
    },

    /* ---------------- B1: perfect, future, conditional, subjunctive ------- */
    {
      id: "es-present-perfect",
      band: "B1",
      name: "Saying what has happened",
      probe: "\\b(he|has|ha|hemos|han)\\s+{ES_PART}\\b",
      yes: ["He trabajado aquí dos años.", "¿Ya han llegado?", "Ha dicho que sí."],
      /* "Ha sido difícil" sat here until the probe matched it and the probe was
         right: that is a present perfect. A near miss has to be a near miss. */
      no: ["Es un mercado grande.", "El helado está frío."]
    },
    {
      id: "es-future-simple",
      band: "B1",
      name: "Saying what will happen",
      /* Future endings are always accented and always sit on a full infinitive,
         so the -ar/-er/-ir vowel has to be there: without it "para" reads as a
         future. The unaccented -remos is left out on purpose, since "queremos"
         is present tense and there is no way to tell them apart by shape. */
      probe: "\\b\\w+[aei]r(é|ás|á|án)\\b",
      yes: ["Mañana hablaré con ella.", "Lo harán la próxima semana."],
      no: ["Quiero comprar el carro.", "Es para mañana."]
    },
    {
      id: "es-conditional",
      band: "B1",
      name: "Saying what you would do",
      /* -ería and -aría are as common on nouns as on verbs — "categoría",
         "secretaría", "panadería" — and no ending tells them apart. Since a
         false positive would credit the learner with grammar they never met,
         this lists the conditionals that actually occur in conversation
         instead of matching the shape. The entries are conditional *stems*,
         not infinitives: venir gives "vendría", not "veniría". */
      probe: "\\b(gustar|encantar|importar|molestar|interesar|ser|estar|ir|ayudar|necesitar|preferir|pasar|dar|deber|tendr|har|podr|querr|sabr|pondr|saldr|vendr|dir|habr|valdr)[íi]a(s|mos|n)?\\b",
      yes: ["Me gustaría ir.", "Ellos vendrían si pudieran."],
      no: ["Es una categoría nueva.", "La secretaría está cerrada."]
    },
    {
      id: "es-present-subjunctive",
      band: "B1",
      name: "Talking about what you want, doubt or hope",
      /* The endings collide with ordinary -ar present indicative ("hable" vs
         "habla"), so this lists forms of the common irregular verbs rather
         than trying to detect the mood in general. It undercounts, which is
         the right direction to be wrong in.

         The accents are load-bearing. An earlier draft wrote est[ée], which
         swept up "este" — the demonstrative "this" — and turned every "este
         ventilador" in the shopping lessons into evidence of the subjunctive.

         Listing the forms was still not enough. Measured against the corpus,
         40 of the 92 matching lines were not subjunctives at all: "o sea"
         (meaning "I mean"), the Colombian interjection "¡Venga!", "Tenga"
         handing something over, and "bien pueda" for "go ahead" are fixed
         conversational furniture, and "No sea tan miedoso" is a command. All
         of them were reading as B1 grammar in what are mostly A1 lessons.
         So a form is no longer enough on its own — something has to license
         it. A Spanish subjunctive is triggered by a word, and requiring that
         trigger to appear before the form and inside the same sentence throws
         out every one of those false positives, because in "o sea que" the
         "que" arrives too late to be the trigger. The cost is the handful of
         indefinite relatives ("por donde sea", "como pueda") that license the
         mood with words too common to list; those now go uncounted. */
      probe: "\\bojal[áa]\\b|\\b(?:que|cuando|mientras|aunque|si\\s+no|antes\\s+de|despu[ée]s\\s+de|sin\\s+que|hasta|en\\s+cuanto|como\\s+si|quiz[áa]s?|tal\\s+vez|a\\s+menos)\\b[^.!?¡¿]*\\b(sea|seas|seamos|sean|esté|estés|estén|estemos|tenga|tengas|tengan|tengamos|haga|hagas|hagan|hagamos|vaya|vayas|vayan|vayamos|pueda|puedas|puedan|podamos|venga|vengas|vengan|diga|digas|digan|sepa|sepas|sepan|haya|hayas|hayan|quiera|quieras|quieran|llegue|llegues|lleguen|termine|termines|terminen|salga|salgas|salgan|pase|pases|pasen)\\b",
      yes: ["Ojalá llegue temprano.", "Espero que tengas suerte.", "No creo que sea buena idea.", "¿Me avisa cuando estemos cerca?"],
      /* The last four are the measured false positives, kept as fixtures so
         the trigger requirement cannot be quietly dropped again. */
      no: [
        "Tengo suerte.",
        "Ella va al trabajo.",
        "Digo la verdad.",
        "Este ventilador es más barato.",
        "¿Me cambiás este billete?",
        "O sea que toca guardar agua por si acaso.",
        "¡Venga, le cuento una cosa!",
        "Tenga, así queda.",
        "No sea tan miedoso, parce."
      ]
    },
    {
      id: "es-se-impersonal",
      band: "B1",
      name: "Saying what one does, without saying who",
      probe: "\\bse\\s+(puede|pueden|debe|deben|necesita|necesitan|habla|hablan|vende|venden|dice|dicen|hace|hacen|permite|permiten|prohibe|proh[íi]be)\\b",
      yes: ["Aquí se habla inglés.", "No se puede fumar."],
      no: ["Se fue temprano.", "Se llama Carlos."]
    },
    {
      id: "es-relative-clause",
      band: "B1",
      name: "Joining two ideas into one sentence",
      probe: "\\b(el|la|los|las)\\s+(que|cual|cuales)\\b|\\b(quien|quienes|cuyo|cuya|cuyos|cuyas)\\b|\\b\\w+,\\s+(que|donde)\\b",
      yes: ["El que llegó primero.", "La persona quien lo hizo.", "Mi hermana, que vive en Cali."],
      no: ["Quiero que venga.", "Dice que sí."]
    },

    {
      id: "es-subjunctive-time",
      band: "B1",
      name: "Talking about a future moment",
      /* "cuando llega" is a habit and "cuando llegue" is a moment that has not
         happened yet, and that contrast is the whole feature. The indicative
         version must not match, so the subjunctive forms are listed. */
      probe: "\\b(cuando|hasta\\s+que|en\\s+cuanto|antes\\s+de\\s+que|despu[ée]s\\s+de\\s+que|tan\\s+pronto\\s+como|mientras)\\s+(?:no\\s+)?(llegue|llegues|lleguen|sea|seas|sean|est[ée]|est[ée]s|est[ée]n|estemos|tenga|tengas|tengan|pueda|puedas|puedan|vaya|vayas|vayan|termine|termines|terminen|salga|salgas|salgan|venga|vengas|vengan|haga|hagas|hagan|diga|digas|digan|quiera|quieran|sepa|sepan|vuelva|vuelvan|volvamos|acabe|acaben|pase|pasen|abra|abran|cierre|cierren)\\b",
      yes: ["Cuando llegue, te aviso.", "Hasta que termine el partido.", "En cuanto salga del trabajo."],
      no: ["Cuando llega, me avisa.", "Cuando era niño vivía en Cali."]
    },
    {
      id: "es-subjunctive-doubt",
      band: "B1",
      name: "Expressing doubt, hope or emotion",
      probe: "\\b(no\\s+creo\\s+que|no\\s+pienso\\s+que|dudo\\s+que|espero\\s+que|ojal[áa]|me\\s+alegra\\s+que|es\\s+posible\\s+que|puede\\s+ser\\s+que|no\\s+es\\s+que|es\\s+mejor\\s+que|ojo\\s+que)\\b",
      yes: ["No creo que llueva.", "Ojalá llegue temprano.", "Espero que tengas suerte."],
      no: ["Creo que llueve.", "Es posible."]
    },
    {
      id: "es-lo-que",
      band: "B1",
      name: "Saying the thing that",
      /* "lo" plus an adjective ("lo bueno") is a different construction and is
         not this one, so the following word has to be que or cual. */
      probe: "\\blo\\s+(que|cual)\\b",
      yes: ["Lo que marque el taxímetro.", "Eso es lo que dije."],
      no: ["Lo vi ayer.", "Lo bueno es eso."]
    },

    /* ---------------- B2: past subjunctive, hypotheticals, register ------- */
    {
      id: "es-imperfect-subjunctive",
      band: "B2",
      name: "Talking about something unreal or hypothetical",
      /* Listed rather than matched morphologically: "prepara" and "declara"
         end in -ara and are ordinary present indicative. */
      probe: "\\b(fuera|fueras|fu[ée]ramos|fueran|estuviera|estuvieran|tuviera|tuvieran|pudiera|pudieran|hubiera|hubieran|dijera|dijeran|viniera|vinieran|hiciera|hicieran|quisiera|quisieran|supiera|supieran|fuese|tuviese|pudiese|hubiese)\\b|\\bcomo si\\b",
      yes: ["Si tuviera tiempo, iría.", "Ojalá pudiera ayudarte.", "Habla como si fuera el jefe."],
      no: ["Prepara la comida.", "Declara sus ingresos.", "Para la próxima."]
    },
    {
      id: "es-pluperfect",
      band: "B2",
      name: "Saying what had already happened",
      probe: "\\b(hab[íi]a|hab[íi]as|hab[íi]amos|hab[íi]an)\\s+{ES_PART}\\b",
      yes: ["Ya había salido cuando llamaste.", "No habían terminado."],
      no: ["Había mucha gente.", "He salido temprano."]
    },
    {
      id: "es-conditional-perfect",
      band: "B2",
      name: "Saying what would have happened",
      probe: "\\b(habr[íi]a|habr[íi]as|habr[íi]amos|habr[íi]an)\\s+{ES_PART}\\b",
      yes: ["Habría llegado antes.", "Habrían dicho algo."],
      no: ["Había llegado antes.", "Me gustaría ir."]
    },
    {
      id: "es-perfect-subjunctive",
      band: "B2",
      name: "Doubting that something has happened",
      probe: "\\b(haya|hayas|hayamos|hayan)\\s+{ES_PART}\\b",
      yes: ["No creo que haya llegado.", "Espero que hayan comido."],
      no: ["Ha llegado.", "Ojalá venga."]
    },
    {
      id: "es-passive-ser",
      band: "B2",
      name: "The formal passive",
      /* "por" is required. Without it, "es cansado" and every adjective that
         happens to end in -ado reads as a passive. */
      probe: "\\b(fue|fueron|es|son|ser[áa]|ser[áa]n|sido)\\s+\\w+(ado|ada|ados|adas|ido|ida|idos|idas)\\s+por\\b",
      yes: ["El contrato fue firmado por el gerente.", "Será revisado por el equipo."],
      no: ["Estoy cansado por el viaje.", "Es complicado."]
    },
    {
      id: "es-discourse-marker",
      band: "B2",
      name: "Structuring an argument",
      probe: "\\b(sin embargo|no obstante|por lo tanto|a pesar de|en cambio|por otro lado|es decir|de hecho|aun as[íi])\\b",
      yes: ["Sin embargo, no estoy de acuerdo.", "A pesar de todo, salió bien."],
      no: ["Pero no quiero.", "Entonces vamos."]
    },
    {
      id: "es-concession-subjunctive",
      band: "B2",
      name: "Conceding a point",
      /* This probe has been wrong in both directions, so it is worth saying
         what it is now doing.

         It missed things. The plural forms were absent until a lesson wrote
         "aunque hayan pasado dos semanas". Negated concessions ("aunque no
         sea") were absent entirely, though they are as common as the plain
         kind. And the verb list was nine verbs long, so "aunque llueva",
         "aunque vaya", "aunque haga frio" were all invisible.

         It also claimed things it should not have. "est[ée]" matched the
         demonstrative in "aunque este mes fue duro" -- although THIS MONTH was
         hard -- which is not a subjunctive at all. Estar is therefore spelled
         out below with its accent required and a person ending demanded, so
         bare "este" can no longer get in.

         The verb list is still a list, and that is a real limit: Spanish marks
         the subjunctive by swapping the -ar and -er/-ir endings, so no regex
         can tell "aunque trabaje" from "aunque trabaja" without knowing which
         conjugation the verb belongs to. What the list covers is the irregular
         and stem-changing verbs, where the subjunctive form is not a valid
         indicative of anything and can be matched safely. Impossible forms
         like "puedamos" are allowed through by the shared person endings; they
         cost nothing, because no corpus will ever contain them. */
      probe: "\\baunque\\s+(?:no\\s+)?(?:(?:sea|tenga|pueda|poda|haya|venga|quiera|quera|vaya|haga|diga|sepa|salga|ponga|traiga|vea|oiga|valga|caiga|sirva|pida|siga|consiga|parezca|conozca|merezca|quepa|llueva|cueste|vuelva|pierda|entienda|encuentre|recuerde|duerma|muera|d[ée])(?:s|n|mos)?|est[ée](?:s|n|mos)|est\u00e9\\b|(?:fue|tuvie|hubie|pudie|dije|hicie|vinie|estuvie|supie|quisie|pusie|traje|die|vie)(?:ra|ran|ramos|se|sen|semos)|\\w{3,}(?:ara|aran|\u00e1ramos|iera|ieran|i\u00e9ramos|ase|asen|iese|iesen))\\b",
      yes: [
        "Aunque sea difícil, lo haré.",
        "Aunque tenga razón, no me gusta.",
        "Aunque hayan pasado dos semanas, sigue igual.",
        "Aunque estén cerrados, vale la pena ir.",
        "Aunque no sea difícil, lo reviso igual.",
        "Aunque hayamos salido tarde, alcanzamos.",
        "Aunque llueva, salimos.",
        "Aunque haga frío, vamos.",
        "Aunque llegara tarde, la esperamos."
      ],
      no: [
        "Aunque llueve, salgo.",
        "Aunque es difícil, lo haré.",
        "Aunque están cerrados, vale la pena ir.",
        "Aunque son difíciles, los hago.",
        "Aunque este mes fue duro, seguimos.",
        "Aunque para mí no cambia nada, lo entiendo."
      ]
    },

    {
      id: "es-pluperfect-subjunctive",
      band: "B2",
      name: "Saying how it could have gone differently",
      /* Distinct from es-conditional-perfect ("habría hecho", the result) and
         from es-pluperfect ("había hecho", a plain earlier past). This is the
         unreal branch: the thing that did not happen. */
      probe: "\\b(hubiera|hubieras|hubi[ée]ramos|hubieran|hubiese|hubieses|hubi[ée]semos|hubiesen)\\b",
      yes: ["Si me hubiera dolido, no me habría reído.", "Ojalá hubieran venido."],
      no: ["Había llegado antes.", "Habría ido con gusto."]
    },
    {
      id: "es-prep-relative",
      band: "B2",
      name: "The one I told you about",
      /* A preposition in front of a relative is the step past plain "que", and
         "cuyo" is the possessive relative the corpus had none of. Bare "el
         que" is left out: it is far more often the everyday "whoever". */
      probe: "\\b(en|con|de|a|por|para|sobre|desde)\\s+(el|la|los|las)\\s+(que|cual|cuales)\\b|\\b(con|a|de|para|por|sobre)\\s+(quien|quienes)\\b|\\bcuy[oa]s?\\b",
      yes: ["La casa en la que vivo es vieja.", "El señor con quien hablé.", "El vecino cuyo perro ladra."],
      no: ["El que quiera, que venga.", "Con el tiempo se aprende."]
    }
  ],

  en: [
    /* ---------------- A1 -------------------------------------------------- */
    {
      id: "en-be-present",
      band: "A1",
      name: "Decir qué es algo",
      probe: "\\b(am|is|are|'m|'s|'re)\\b",
      yes: ["I am from Texas.", "She is a teacher.", "They're here."],
      no: ["I went home.", "He had left."]
    },
    {
      id: "en-there-is",
      band: "A1",
      name: "Decir qué hay",
      probe: "\\bthere\\s+(is|are|'s)\\b",
      yes: ["There is a store nearby.", "There are two options."],
      no: ["There was a store.", "Go there."]
    },
    {
      id: "en-question-word",
      band: "A1",
      name: "Hacer una pregunta básica",
      probe: "\\b(what|who|where|when|how|which|why)\\b[^.?!]*\\?",
      yes: ["Where do you live?", "How much is it?"],
      no: ["I know where he lives.", "That is why."]
    },
    {
      id: "en-can",
      band: "A1",
      name: "Decir qué puedes hacer",
      probe: "\\b(can|can't|cannot)\\b",
      yes: ["I can swim.", "She can't come."],
      no: ["I could swim.", "He was able to come."]
    },

    {
      id: "en-present-simple",
      band: "A1",
      name: "Hablar de lo que haces normalmente",
      /* The English mirror of the Spanish hole: 2,125 utterances use the plain
         present and nothing looked for it, because en-be-present only ever
         asked about "to be". A bare base form cannot be told from a noun
         ("I work" against "the work"), so the subject pronoun has to be there
         and the verb comes from a list. */
      probe: "\\b(i|you|we|they)\\s+(?:don't\\s+|do\\s+not\\s+|really\\s+|always\\s+|usually\\s+|never\\s+|sometimes\\s+)?(work|live|like|want|need|have|go|come|know|think|make|take|get|see|say|tell|eat|drink|play|study|watch|read|write|speak|start|finish|help|use|buy|pay|cook|clean|drive|walk|talk|call|ask|feel|look|leave|stay|open|close)\\b|\\b(he|she|it)\\s+(?:doesn't\\s+|really\\s+|always\\s+|usually\\s+|never\\s+)?(works|lives|likes|wants|needs|has|goes|comes|knows|thinks|makes|takes|gets|sees|says|tells|eats|drinks|plays|studies|watches|reads|writes|speaks|starts|finishes|helps|uses|buys|pays|cooks|cleans|drives|walks|talks|calls|asks|feels|looks|leaves|stays|opens|closes)\\b",
      yes: ["I work downtown.", "She lives in Houston.", "They like the food."],
      no: ["I am tired.", "I worked yesterday.", "I will work tomorrow."]
    },
    {
      id: "en-articles",
      band: "A1",
      name: "Los artículos a, an y the",
      /* Spanish has no bare singular count noun, so a Spanish speaker leaves
         the article out; it is the most persistent beginner error and it was
         not being measured at all. */
      probe: "\\b(a|an|the)\\s+\\w{2,}",
      yes: ["The bus is late.", "I need a ticket.", "It's an emergency."],
      no: ["I go home.", "Yes, please."]
    },
    {
      id: "en-possessive",
      band: "A1",
      name: "Decir de quién es algo",
      /* The apostrophe-s of possession is spelled exactly like the contraction
         of "is", so "that's a problem" would otherwise read as a possessive.
         The words that contract are excluded by name. */
      probe: "\\b(my|your|his|her|our|their|its)\\s+\\w{2,}\\b|\\b(?!it|he|she|that|there|what|who|let|here|one|now)\\w{3,}'s\\s+\\w{2,}\\b",
      yes: ["My sister lives here.", "Their car is new.", "Maria's brother called."],
      no: ["That's the one.", "It's fine."]
    },
    {
      id: "en-demonstrative",
      band: "A1",
      name: "Este, ese, estos y esos",
      /* "that" is also a conjunction, so a following pronoun or copula rules
         the match out: "I think that he left" is not a demonstrative. */
      probe: "\\b(this|that|these|those)\\s+(?!is\\b|are\\b|was\\b|were\\b|i\\b|you\\b|he\\b|she\\b|we\\b|they\\b|it\\b|the\\b)\\w{2,}\\b",
      yes: ["This bus goes downtown.", "Those tacos were great.", "That guy over there."],
      no: ["I think that he left.", "That is fine."]
    },
    {
      id: "en-imperative",
      band: "A1",
      name: "Dar una instrucción",
      /* Only at the start of a sentence, and case-sensitive, because the bare
         imperative is spelled like the plain present: "Take the second left"
         is an instruction and "I take the bus" is a habit. */
      probe: "(?:^|[.!?]\\s+)(Come|Go|Take|Look|Wait|Stop|Put|Give|Call|Tell|Try|Check|Turn|Open|Close|Bring|Sit|Make|Pass|Hold|Keep|Watch|Follow|Press|Push|Pull|Send|Show|Start|Stay|Move|Pick|Grab|Head|Drop)\\b",
      caseSensitive: true,
      yes: ["Take the second left.", "Call me when you get there.", "Wait here."],
      no: ["I take the bus.", "we call them tomorrow."]
    },
    {
      id: "en-frequency",
      band: "A1",
      name: "Decir con qué frecuencia",
      probe: "\\b(always|usually|often|sometimes|never|rarely|every\\s+day|every\\s+morning|once\\s+a\\s+week|twice\\s+a\\s+week)\\b",
      yes: ["I always take the bus.", "She never eats meat.", "We go every day."],
      no: ["I took the bus.", "Right now."]
    },
    {
      id: "en-preposition-place",
      band: "A1",
      name: "Decir dónde está algo",
      /* Bare in/on/at are left out. They appear in half the corpus and carry
         so many unrelated jobs that matching them would measure nothing. */
      probe: "\\b(next\\s+to|in\\s+front\\s+of|behind|between|across\\s+from|underneath|under|above|near|beside|on\\s+the\\s+corner|around\\s+the\\s+corner|upstairs|downstairs)\\b",
      yes: ["The bank is next to the pharmacy.", "It's behind the church.", "Park across from the store."],
      no: ["I'm on my way.", "At noon."]
    },
    {
      id: "en-have-possession",
      band: "A1",
      name: "Tener algo",
      /* "have to" is obligation and "have been" is a perfect; neither is
         possession, and both have their own feature. */
      probe: "\\b(have|has|'ve)\\s+got\\b|\\b(i|you|we|they)\\s+have\\s+(a|an|the|two|three|some|my|your|his|her|no)\\b|\\b(he|she|it)\\s+has\\s+(a|an|the|two|three|some|my|your|his|her|no)\\b",
      yes: ["I have a question.", "She has two kids.", "We've got time."],
      no: ["I have to go.", "I have been there."]
    },

    /* ---------------- A2 -------------------------------------------------- */
    {
      id: "en-past-simple",
      band: "A2",
      name: "Hablar de algo terminado",
      /* An -ed word after a copula is usually an adjective, not a tense: "I'm
         embarrassed" and "Are you dressed yet?" describe a state. The
         lookbehind steps back over an optional subject pronoun and an optional
         adverb to find the copula, so it catches both word orders. The
         irregular list is left unguarded, since "was" really is a past simple. */
      probe: "\\b(went|saw|did|didn't|said|took|came|got|made|had|was|were|told|found|gave|left|knew|thought)\\b|(?<!(?:am|is|are|was|were|be|been|'m|'s|'re|get|gets|got|feel|feels|look|looks|seem|seems)\\s(?:(?:you|he|she|it|they|we|i)\\s)?(?:(?:\\w+ly|almost|very|really|so|too|already|still|not)\\s)?)\\b\\w{3,}ed\\b",
      yes: ["I went downtown yesterday.", "She worked there for years.", "We didn't know."],
      no: ["I go downtown.", "She works there.", "I'm embarrassed, but I'm in a hurry.", "Are you dressed yet?"]
    },
    {
      id: "en-going-to",
      band: "A2",
      name: "Decir qué vas a hacer",
      /* "going to Dallas" is a destination, not a future. A following verb is
         lowercase and is not a determiner, which is enough to tell them apart
         and is why this probe is the one that runs case-sensitively. */
      caseSensitive: true,
      probe: "\\b(going to|gonna)\\s+(?!the\\b|a\\b|an\\b|my\\b|your\\b|his\\b|her\\b|our\\b|their\\b|that\\b|this\\b)[a-z]+",
      yes: ["I'm going to call her.", "We're going to eat."],
      no: ["I'm going home.", "He is going to Dallas."]
    },
    {
      id: "en-present-continuous",
      band: "A2",
      name: "Decir qué está pasando ahora",
      probe: "\\b(am|is|are|'m|'s|'re)\\s+\\w+ing\\b",
      yes: ["I am working.", "They're eating."],
      no: ["I work here.", "Working is hard."]
    },
    {
      id: "en-comparative",
      band: "A2",
      name: "Comparar dos cosas",
      probe: "\\b(more|less)\\s+\\w+\\s+than\\b|\\b\\w+er\\s+than\\b|\\bas\\s+\\w+\\s+as\\b|\\b(better|worse|older|younger)\\s+than\\b",
      yes: ["This is cheaper than that.", "It's as tall as the other one.", "More expensive than I thought."],
      no: ["I want more coffee.", "It is better."]
    },
    {
      id: "en-have-to",
      band: "A2",
      name: "Decir qué tienes que hacer",
      probe: "\\b(have to|has to|had to|must|need to|needs to)\\b",
      yes: ["I have to go.", "She must sign it."],
      no: ["I have a car.", "She has time."]
    },

    {
      id: "en-past-continuous",
      band: "A2",
      name: "Lo que estabas haciendo",
      /* "was" plus an -ing word is not enough: "it was interesting" and "she
         was willing" are adjectives that happen to end the same way, and an
         earlier draft of en-past-simple was caught by exactly this class of
         word. The adjectives are excluded by name. */
      probe: "\\b(was|were|wasn't|weren't)\\s+(?:just\\s+|still\\s+|already\\s+)?(?!interesting|boring|exciting|amazing|confusing|tiring|surprising|disappointing|willing|missing|nothing|something|everything|anything|during|morning|evening|shocking|charming|welcoming|outstanding|demanding|promising)\\w+ing\\b",
      yes: ["I was watching TV late.", "They were waiting outside.", "She wasn't listening."],
      no: ["It was interesting.", "I was tired."]
    },
    {
      id: "en-quantifier",
      band: "A2",
      name: "Cuánto y cuántos",
      probe: "\\b(some|any|much|many|a\\s+lot\\s+of|lots\\s+of|a\\s+few|a\\s+little|plenty\\s+of|several)\\b",
      yes: ["Do you have any change?", "There's a lot of traffic.", "I need a few things."],
      no: ["I have three.", "It's fine."]
    },
    {
      id: "en-should",
      band: "A2",
      name: "Dar un consejo",
      probe: "\\b(should|shouldn't|ought\\s+to)\\b|\\b(had|'d)\\s+better\\b",
      yes: ["You should call first.", "We shouldn't wait.", "You'd better hurry."],
      no: ["You could call first.", "I will call."]
    },
    {
      id: "en-must-obligation",
      band: "A2",
      name: "Obligación y prohibición",
      /* "must be" and "must have" are deduction, not obligation, and belong to
         en-modal-deduction at B2. Letting them match here would put a B2 line
         in an A2 lesson and vice versa. */
      probe: "\\bmust\\s+(?!be\\b|have\\b|'ve\\b)\\w+|\\bmustn't\\b",
      yes: ["You must wear a helmet.", "Passengers mustn't smoke."],
      no: ["He must be tired.", "She must have left."]
    },
    {
      id: "en-past-be",
      band: "A2",
      name: "El pasado de to be",
      probe: "\\b(was|were|wasn't|weren't)\\b",
      yes: ["I was at home.", "They were late."],
      no: ["I am at home.", "It is late."]
    },
    {
      id: "en-superlative",
      band: "A2",
      name: "El más de todos",
      probe: "\\bthe\\s+(\\w+est|most\\s+\\w+|least\\s+\\w+|best|worst)\\b",
      yes: ["It's the cheapest one.", "That's the best taco in town.", "the most expensive option"],
      no: ["It's cheaper than that.", "It's good."]
    },
    {
      id: "en-purpose",
      band: "A2",
      name: "Decir para qué",
      /* A bare "to + verb" is usually a complement ("I want to go"), not a
         purpose, and the two cannot be told apart by shape. Only the explicit
         purpose markers are matched. */
      probe: "\\bin\\s+order\\s+to\\b|\\bso\\s+that\\b|\\bso\\s+(i|we|you|he|she|they)\\s+(can|could|don't|won't)\\b",
      yes: ["I left early so that I could catch the bus.", "In order to renew it, bring your ID."],
      no: ["I want to go.", "So, what's next?"]
    },
    {
      id: "en-adverb-manner",
      band: "A2",
      name: "Adverbios terminados en -ly",
      /* A closed list, because -ly is also an adjective ending (friendly,
         lovely) and the tail of ordinary nouns (family, supply). */
      probe: "\\b(quickly|slowly|carefully|quietly|loudly|easily|badly|nicely|politely|clearly|suddenly|properly|safely|exactly|really|actually|probably|finally|especially|definitely|immediately|completely|hardly|barely)\\b",
      yes: ["Drive carefully.", "She answered quickly.", "It's definitely closed."],
      no: ["My family is here.", "It's only me."]
    },
    {
      id: "en-possessive-pronoun",
      band: "A2",
      name: "Mío, tuyo y suyo",
      probe: "\\b(mine|yours|hers|ours|theirs)\\b",
      yes: ["That one is mine.", "Is this yours?"],
      no: ["That's my car.", "It's her turn."]
    },
    {
      id: "en-verb-plus-infinitive",
      band: "A2",
      name: "Querer, necesitar y esperar más infinitivo",
      /* Split out of the -ing feature below. "I want to go" is among the first
         patterns anybody learns and mirrors Spanish exactly, so counting it as
         B1 pulled 27 lessons up a band and pushed English B1 to 80% of the
         course — which the corpus-shape guard caught. */
      probe: "\\b(want|wants|wanted|need|needs|needed|hope|hoped|like|likes|liked|try|tries|tried|plan|planned|decide|decided|forget|forgot|learn|learned)\\s+to\\s+\\w+\\b",
      yes: ["I want to go home.", "I still need to check the figures.", "She decided to stay."],
      no: ["I am going home.", "I go to work."]
    },

    /* ---------------- B1 -------------------------------------------------- */
    {
      id: "en-present-perfect",
      band: "B1",
      name: "Decir qué ha pasado",
      probe: "\\b(have|has|'ve|'s|haven['’]t|hasn['’]t)\\s+(not\\s+|never\\s+|already\\s+|just\\s+)?{EN_PART}\\b",
      yes: ["I have worked here two years.", "She has already finished."],
      no: ["I worked here two years.", "She finished already."]
    },
    {
      id: "en-will",
        band: "B1",
      name: "Decir qué pasará",
      probe: "\\b(will|won't|'ll)\\s+\\w+",
      yes: ["I will call you.", "It won't take long."],
      no: ["I called you.", "It takes long."]
    },
    {
      id: "en-first-conditional",
      band: "B1",
      name: "Decir qué pasa si pasa otra cosa",
      /* The result clause is usually the other side of a comma, so the scan
         has to cross it — but not a sentence end, or "If so. I will go" would
         count. "would" is deliberately absent: that is the second conditional. */
      probe: "\\bif\\b[^.?!]*\\b(will|'ll|won't)\\b",
      yes: ["If it rains, I will stay.", "If you call, I'll answer."],
      no: ["If I had time, I would go.", "If only."]
    },
    {
      id: "en-passive-present",
      band: "B1",
      name: "La voz pasiva",
      probe: "\\b(is|are|was|were|been|be)\\s+\\w{3,}(ed|en)\\s+by\\b",
      yes: ["The form is signed by the manager.", "It was written by her."],
      no: ["I am tired by now.", "It is complicated."]
    },
    {
      id: "en-used-to",
      band: "B1",
      name: "Describir cómo eran las cosas antes",
      /* "I am used to it" is being accustomed, a different structure and a
         different band, and it is only the copula in front that distinguishes
         the two. */
      probe: "(?<!(?:am|is|are|was|were|be|been|get|got|getting)\\s)\\bused to\\s+\\w+|\\bwould\\s+(always|often|usually)\\b",
      yes: ["I used to live in Houston.", "We would always go on Sundays."],
      no: ["I am used to it.", "I would go if I could."]
    },

    {
      id: "en-present-perfect-continuous",
      band: "B1",
      name: "Llevar un tiempo haciendo algo",
      /* The construction Spanish renders with "llevar" and a gerund, which is
         why a Spanish speaker reaches for "I have three years working here".
         Ten lines in the whole corpus and no probe until now. */
      probe: "\\b(have|has|'ve|'s)\\s+been\\s+\\w+ing\\b",
      yes: ["My throat has been hurting since Monday.", "I've been waiting for an hour."],
      no: ["I have been there.", "It has been hard."]
    },
    {
      id: "en-relative-clause",
      band: "B1",
      name: "Oraciones de relativo",
      /* "who" and "which" start questions as often as they start relatives, so
         a noun has to come first. That also keeps the question-word feature
         and this one from claiming the same line. The comma is optional
         because a non-defining relative always has one — "the bus, which was
         late" — and requiring bare whitespace missed every one of them. */
      probe: "\\b\\w{3,},?\\s+(who|which|whose)\\s+\\w+|\\b(the|a|an|this|that)\\s+\\w+\\s+that\\s+\\w+",
      yes: ["The guy who called is my brother.", "The bus, which was late, finally came.", "the app that tracks buses"],
      no: ["Who else is going?", "Which one do you want?"]
    },
    {
      id: "en-gerund-complement",
      band: "B1",
      name: "Verbos seguidos de -ing",
      /* Only the -ing half lives here. Which English verb demands "-ing" and
         which demands "to" is pure memorization for a Spanish speaker, who has
         the infinitive for both — but "want to go" is beginner grammar, so it
         was split off to en-verb-plus-infinitive at A2. */
      probe: "\\b(enjoy|enjoyed|finish|finished|avoid|avoided|keep|kept|mind|suggest|suggested|consider|considered|practice|practiced|quit|miss|missed|stop|stopped)\\s+\\w+ing\\b",
      yes: ["I enjoy cooking on weekends.", "She kept talking.", "Do you mind waiting?"],
      no: ["I am cooking.", "I want to go."]
    },
    {
      id: "en-phrasal-verb",
      band: "B1",
      name: "Verbos con partícula",
      /* 295 utterances use one and none of them were taught. Spanish has no
         equivalent device, so "pick up" cannot be reasoned out from "pick".
         Motion verbs are deliberately absent: "go in", "come back" and "run
         out" are a verb followed by an ordinary direction, and counting them
         made a third of the course look B1. What is left is the set whose
         meaning genuinely does not follow from its parts. */
      probe: "\\b(pick|picked|drop|dropped|turn|turned|put|take|took|get|got|give|gave|look|looked|show|showed|figure|figured|check|checked|hang|hung|work|worked|fill|filled|find|found|set|bring|brought|call|called|shut|throw|threw|clean|cleaned|break|broke|sign|signed|catch|caught|hold|held)\\s+(?:me|him|her|it|us|them|you|that|this)?\\s*(up|out|off|on|in|over|down|back|away|through|around|into)\\b",
      yes: ["I'll throw in an extra one.", "Can you pick me up at six?", "They turned it off."],
      no: ["I go to work.", "Look at the sign.", "We came back late."]
    },
    {
      id: "en-question-tag",
      band: "B1",
      name: "Las coletillas interrogativas",
      /* Spanish has one invariable tag, "¿no?"; English rebuilds it from the
         auxiliary and the subject every time. That is exactly why the
         auxiliary list has to be complete: it started with the primary
         auxiliaries only, so every modal tag -- "shouldn't we?", "mustn't
         you?", "shall we?" -- was invisible, which is the half of the feature
         a Spanish speaker finds hardest to build. */
      probe: ",\\s*(is|are|am|was|were|do|does|did|can|could|will|would|shall|should|must|might|may|have|has|had|need|ought|used|isn't|aren't|wasn't|weren't|don't|doesn't|didn't|can't|couldn't|won't|wouldn't|shan't|shouldn't|mustn't|mightn't|haven't|hasn't|hadn't|needn't|oughtn't|ain't)\\s+(i|you|he|she|it|we|they)\\s*\\?",
      yes: [
        "You're coming, aren't you?",
        "It's hot, isn't it?",
        "Turn the music up, would you?",
        "We should call first, shouldn't we?",
        "Let's go, shall we?",
        "You've met him, haven't you?"
      ],
      no: ["Are you coming?", "It's hot, right?"]
    },

    /* ---------------- B2 -------------------------------------------------- */
    {
      id: "en-past-perfect",
      band: "B2",
      name: "Decir qué ya había pasado",
      probe: "\\b(had|'d|hadn['’]t)\\s+(not\\s+|already\\s+|never\\s+|just\\s+)?{EN_PART}\\b",
      yes: ["I had already left when you called.", "They hadn't finished."],
      no: ["I have already left.", "I had a car."]
    },
    {
      id: "en-second-third-conditional",
      band: "B2",
      name: "Hablar de algo irreal",
      probe: "\\bif\\s+[^,.?!]*\\b(had|were|could)\\b[^.?!]*\\b(would|could|might)\\b|\\bwould have\\s+\\w{3,}(ed|en)\\b",
      yes: ["If I had known, I would have said something.", "If I were you, I would go."],
      no: ["If it rains, I will stay.", "I would go tomorrow."]
    },
    {
      id: "en-modal-deduction",
      band: "B2",
      name: "Deducir a partir de indicios",
      probe: "\\b(must have|can't have|might have|could have|should have)\\s+\\w+",
      yes: ["She must have left already.", "It can't have been him."],
      no: ["She must leave.", "It could be him."]
    },
    {
      id: "en-discourse-marker",
      band: "B2",
      name: "Estructurar un argumento",
      probe: "\\b(however|nevertheless|therefore|in spite of|on the other hand|that is to say|in fact|even so|whereas)\\b",
      yes: ["However, I disagree.", "In spite of everything, it worked."],
      no: ["But I disagree.", "So it worked."]
    },
    {
      id: "en-reported-speech",
      band: "B2",
      name: "Contar lo que alguien dijo",
      probe: "\\b(said|told\\s+\\w+|asked)\\s+(that\\s+)?\\w+\\s+(had|would|was|were|could)\\b",
      yes: ["He said that he would come.", "She told me she was leaving."],
      no: ["He said yes.", "She told me the truth."]
    },

    {
      id: "en-causative",
      band: "B2",
      name: "Mandar a hacer algo",
      /* Zero instances in the corpus. "I need to get my car fixed" says
         somebody else does the fixing, and Spanish says it with a plain
         active verb, so the pattern has to be taught rather than met. */
      probe: "\\b(have|had|get|got|getting|having)\\s+(it|them|the|my|your|his|her|our|their|a|an)\\s+\\w+\\s+(done|fixed|cut|cleaned|repaired|checked|made|painted|delivered|installed|replaced|towed|serviced|renewed)\\b|\\b(have|had|get|got)\\s+(it|them)\\s+(done|fixed|checked|cleaned|repaired|replaced)\\b",
      yes: ["I need to get my car fixed.", "We had the roof repaired.", "I'll have it done by Friday."],
      no: ["I fixed my car.", "The car was fixed."]
    },
    {
      id: "en-result-degree",
      band: "B2",
      name: "Tan, demasiado y suficiente",
      /* The trap for a Spanish speaker is that "tan ... que" becomes "so ...
         that" but "tanto" splits into so/such, and "demasiado para" becomes
         "too ... to", not "too ... for".

         The quantifier branch is the one that was missing: "so many people
         that we left" puts two words between "so" and "that", so the plain
         "so + word + that" branch stepped over it -- and that is precisely the
         "tanto" half the feature exists to teach.

         It is not simply "so + two words + that", because that swallows the
         discourse marker in "so we agreed that" and "so I told him that",
         which are not degree at all. Requiring one of the four quantifiers
         does most of the work, and the two exclusions handle what it lets
         through: "so much for that" is a set phrase, "I know so much about
         that topic" is a quantity with a preposition, and "so much better than
         that" is a comparison. None of the three states a result. */
      probe: "\\bso\\s+\\w+\\s+that\\b|\\bso\\s+(?:many|much|few|little)\\s+(?!for\\b|about\\b)\\w+(?:\\s+(?!than\\b)\\w+)?\\s+that\\b|\\bsuch\\s+(?:a|an)?\\s*\\w+\\s+that\\b|\\btoo\\s+\\w+\\s+to\\s+\\w+\\b|\\b\\w+\\s+enough\\s+to\\s+\\w+\\b",
      yes: [
        "It was so crowded that we left.",
        "There were so many people that we left.",
        "So many people came that we left.",
        "There was so much noise that I left.",
        "There is so much to do that I can't start.",
        "It was too crowded to move.",
        "It's too far to walk.",
        "The sample isn't broad enough to support that.",
        "It is early enough to catch it."
      ],
      no: [
        "It was so crowded.",
        "It was very crowded that day.",
        "So we agreed that it was fine.",
        "So I told him that already.",
        "So much for that.",
        "I know so much about that topic.",
        "It's so much better than that.",
        "It's too hot.",
        "That's enough."
      ]
    },
    {
      id: "en-wish",
      band: "B2",
      name: "Ojalá y lo que habría sido",
      probe: "\\b(wish|wished|wishes)\\b|\\bif\\s+only\\b",
      yes: ["I wish I had known.", "If only we had more time."],
      no: ["I hope so.", "I want more time."]
    },
    {
      id: "en-passive-past",
      band: "B2",
      name: "La pasiva en pasado",
      /* "was tired" and "was worried" are adjectives wearing a participle's
         clothes, the same trap that inflated en-past-simple. A match needs
         either a by-phrase naming the agent or a participle that can only be
         an event. */
      probe: "\\b(was|were|been|be)\\s+{EN_PART}\\s+by\\b|\\b(was|were)\\s+(delayed|canceled|built|founded|stolen|arrested|fined|towed|charged|denied|approved|rejected|delivered|installed|repaired|replaced|invited|hired|fired|promoted|elected|published|released|discovered|introduced)\\b",
      yes: ["The subway was delayed.", "The car was towed by the city.", "It was built in 1920."],
      no: ["I was tired.", "She was worried."]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CEFR_BANDS, CEFR_FEATURES, CEFR_MACROS };
}
