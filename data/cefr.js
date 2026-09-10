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
 * The bands run A1 to C2 in the order below, and that order is the only thing
 * that decides which of two detected features is "higher".
 *
 * One asymmetry is deliberate. A feature's `name` is written in the language
 * of the person reading it, not the language it describes: the `es` features
 * are named in English because the people meeting them are English speakers
 * learning Spanish, and the `en` features are named in Spanish for the same
 * reason in reverse. Naming both halves in both languages would mean writing
 * strings nobody is ever shown.
 */
const CEFR_BANDS = ["A1", "A2", "B1", "B2", "C1", "C2"];

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
         ventilador" in the shopping lessons into evidence of the subjunctive. */
      probe: "\\b(ojal[áa])\\b|\\b(sea|seas|seamos|sean|esté|estés|estén|estemos|tenga|tengas|tengan|haga|hagas|hagan|vaya|vayas|vayan|pueda|puedas|puedan|venga|vengan|diga|digan|sepa|sepan|haya|hayan|quiera|quieran)\\b",
      yes: ["Ojalá llegue temprano.", "Espero que tengas suerte.", "No creo que sea buena idea."],
      no: ["Tengo suerte.", "Ella va al trabajo.", "Digo la verdad.", "Este ventilador es más barato.", "¿Me cambiás este billete?"]
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
      probe: "\\baunque\\s+(sea|est[ée]|tenga|pueda|haya|venga|quiera|fuera|tuviera)\\b",
      yes: ["Aunque sea difícil, lo haré.", "Aunque tenga razón, no me gusta."],
      no: ["Aunque llueve, salgo.", "Aunque es difícil, lo haré."]
    },

    /* ---------------- C1: the shapes an argument needs -------------------- */
    {
      id: "es-future-perfect",
      band: "C1",
      name: "Saying what will have happened",
      probe: "\\b(habr[ée]|habr[áa]s|habr[áa]|habremos|habr[áa]n)\\s+{ES_PART}\\b",
      yes: ["Para junio habré terminado.", "Ya habrán salido."],
      no: ["Habría terminado.", "He terminado."]
    },
    {
      id: "es-si-clause-past",
      band: "C1",
      name: "Regretting something that cannot be changed",
      probe: "\\bsi\\s+(hubiera|hubiese)\\w*\\s+{ES_PART}\\b",
      yes: ["Si hubiera sabido, no habría venido.", "Si hubiese estudiado más..."],
      no: ["Si tuviera tiempo, iría.", "Si puedo, voy."]
    },
    {
      id: "es-formal-connector",
      band: "C1",
      name: "Formal and academic linking",
      probe: "\\b(en cuanto a|cabe (se[ñn]alar|destacar|mencionar)|dado que|siempre y cuando|con tal de que|a medida que|por consiguiente|en la medida en que|habida cuenta)\\b",
      yes: ["En cuanto a los costos, son altos.", "Dado que no hay tiempo, seguimos."],
      no: ["Por lo tanto, seguimos.", "Sin embargo, no."]
    },

    /* ---------------- C2: the register a course like this does not reach -- */
    {
      id: "es-literary-register",
      band: "C2",
      name: "Literary and highly formal register",
      probe: "\\b(huelga decir|a la saz[óo]n|otrora|am[ée]n de|so pena de|por cuanto|ende|menester)\\b",
      yes: ["Huelga decir que fue un error.", "Otrora fue una ciudad rica."],
      no: ["Es decir, no vino.", "Además de eso."]
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

    /* ---------------- C1 -------------------------------------------------- */
    {
      id: "en-inversion",
      band: "C1",
      name: "Inversión para dar énfasis",
      probe: "\\b(never before|not only|rarely|seldom|hardly|no sooner|little did|under no circumstances)\\s+(had|did|have|has|was|were|do|does|is|are)\\b",
      yes: ["Never before had I seen that.", "Not only did he refuse, he left."],
      no: ["I had never seen that.", "He did not only refuse."]
    },
    {
      id: "en-cleft",
      band: "C1",
      name: "Oraciones escindidas",
      probe: "\\b(it was|it is|it's)\\s+\\w+[^.?!]*\\bthat\\b|\\bwhat\\s+\\w+\\s+(did|do|does|need|want)[^.?!]*\\bis\\b",
      yes: ["It was the manager that signed it.", "What I need is more time."],
      no: ["It is late.", "What do you need?"]
    },
    {
      id: "en-formal-connector",
      band: "C1",
      name: "Conectores formales y académicos",
      probe: "\\b(insofar as|notwithstanding|with regard to|in light of|provided that|albeit|thereby|hitherto|by virtue of)\\b",
      yes: ["With regard to the costs, they are high.", "Provided that you agree, we proceed."],
      no: ["About the costs.", "If you agree."]
    },

    /* ---------------- C2 -------------------------------------------------- */
    {
      id: "en-literary-register",
      band: "C2",
      name: "Registro literario y muy formal",
      probe: "\\b(needless to say|be that as it may|inasmuch as|heretofore|whereupon|forthwith|to wit)\\b",
      yes: ["Needless to say, it was a mistake.", "Be that as it may, we continue."],
      no: ["That is to say, no.", "In fact, no."]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CEFR_BANDS, CEFR_FEATURES, CEFR_MACROS };
}
