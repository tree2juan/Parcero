/*
 * The structure curriculum: grammar a learner needs that no single verb owns.
 *
 * data/curriculum.js anchors 200 lessons to 200 verbs, one each, and that
 * pairing is what keeps the course honest — every verb is taught exactly once,
 * and a test proves it. But a measurement of the finished corpus found holes
 * that the verb list could never have caught, because they are not verbs.
 * Across 4,461 taught Spanish utterances there were 7 comparatives, no
 * "tan ... como" at all, 2 pluperfects, 3 true passives, and no "ojalá".
 * A learner could finish all 200 verb lessons and still be unable to say that
 * one thing is cheaper than another.
 *
 * The obvious fix — add lessons with no verb — would have quietly broken the
 * guarantee. test/shape.test.js requires every lesson to name a curriculum
 * verb, exempting eight legacy lessons by name, and growing that exemption
 * list is how an invariant turns into a formality. So structures are anchored
 * the same way verbs are: this file is the closed list, a lesson declares one
 * `structure` instead of one `verb`, and the same tests demand it exists here,
 * is used exactly once, and carries the tier label its level implies.
 *
 * Every entry below was chosen from a measurement, not from a syllabus. The
 * `gap` field records what the corpus actually contained when the structure
 * was picked, so a later reader can re-run the count and see whether the
 * lesson closed the hole it was written for.
 *
 * Levels match the verb tiers: foundation -> "Starter", independent ->
 * "Developing", extension -> "Extending".
 */
const structureItems = [
  /* ---------- foundation: comparison and description ---------- */
  {
    id: "structure-1",
    key: "comparison-inequality",
    probe: "m[aá]s\\s+\\w+\\s+que|menos\\s+\\w+\\s+que|mejor que|peor que|mayor que|menor que",
    name: "Saying one thing is more or less than another",
    example: "Este apartamento es más barato que el otro.",
    english: "more/less ... than",
    level: "foundation",
    summary: "más/menos + adjective + que, the irregular pair mejor/peor, and mayor/menor for age. Also 'de' before a number: más de veinte.",
    gap: "7 comparative constructions in the whole corpus",
    skills: ["grammar", "speaking", "context"],
    domain: "shopping",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-2",
    key: "comparison-equality",
    probe: "tan\\s+\\w+\\s+como|tanto?s?a?s?\\s+\\w+\\s+como|tanto como|igual de",
    name: "Saying two things are the same",
    example: "Este está tan bueno como el de la esquina.",
    english: "as ... as",
    level: "foundation",
    summary: "tan + adjective + como, tanto/tanta/tantos/tantas + noun + como, tanto como on its own, and the everyday igual de.",
    gap: "zero instances of tan ... como in the corpus",
    skills: ["grammar", "speaking", "context"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-3",
    key: "superlatives",
    probe: "[ií]simo|el m[aá]s|la m[aá]s|los m[aá]s|las m[aá]s",
    name: "Saying something is the most, or extremely so",
    example: "Es el mejor almuerzo del barrio, buenísimo.",
    english: "the most ... / extremely",
    level: "foundation",
    summary: "el/la más + adjective + de, the -ísimo ending and its spelling changes (rico → riquísimo), and the Colombian habit of stacking re- and super- instead.",
    gap: "14 -ísimo forms, and superlatives otherwise unexplained",
    skills: ["grammar", "speaking", "culture"],
    domain: "food and drink",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-4",
    key: "dates-and-calendar",
    probe: "enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre",
    name: "Dates, months and the calendar",
    example: "Nos vemos el 5 de mayo, un martes.",
    english: "saying the date",
    level: "foundation",
    summary: "The twelve months, el + number + de + month with no 'of' and no capital letter, days of the week with el/los, years read whole, and primero for the first of the month.",
    gap: "3 month names and zero full dates in the corpus",
    skills: ["grammar", "listening", "context"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-5",
    key: "color-and-description",
    probe: "rojo|roja|azul|verde|amarill|negro|negra|blanc|caf[eé]|naranja|morad|gris|rosad",
    name: "Colors and describing what things look like",
    example: "La camisa azul, no la verde, la de rayas.",
    english: "colors and appearance",
    level: "foundation",
    summary: "Color adjectives and their agreement, the invariable ones (naranja, rosa, violeta), café for brown rather than marrón in Colombia, and describing by pattern and material when you do not know the word.",
    gap: "18 color words across 208 lessons",
    skills: ["grammar", "speaking", "context"],
    domain: "shopping",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-6",
    key: "feelings-and-states",
    probe: "aburrid|content|triste|brav|molest|asustad|tengo pena|da pena|tengo miedo|con rabia|emocionad",
    name: "Saying how you feel",
    example: "Estoy aburrido, pero no es que sea aburrido.",
    english: "moods and states",
    level: "foundation",
    summary: "estar + adjective for mood, the meaning shift with ser (estar aburrido vs ser aburrido), tener + noun for miedo, pena, rabia and afán, and the Colombian sense of pena as embarrassment rather than pity.",
    gap: "6 emotion words in the corpus, in a course about talking to people",
    skills: ["grammar", "speaking", "culture"],
    domain: "social life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },

  /* ---------- independent: time, report and perspective ---------- */
  {
    id: "structure-7",
    key: "present-perfect",
    probe: "\\bh[ea]\\s+\\w*[ai]do|\\bhemos\\s+\\w*[ai]do|\\bhan\\s+\\w*[ai]do|\\bhas\\s+\\w*[ai]do",
    name: "The present perfect, and why Colombians often skip it",
    example: "¿Ya comiste? — Todavía no he comido.",
    english: "have done",
    level: "independent",
    summary: "haber + participle, the irregular participles, and the honest regional point: where Spain says he comido, Colombia usually says comí. Where the perfect does survive is with ya, todavía no, nunca and alguna vez.",
    gap: "26 present perfects, unexplained, in 4,461 utterances",
    skills: ["grammar", "listening", "culture"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-8",
    key: "pluperfect",
    probe: "hab[ií]a\\s+\\w*[ai]do|hab[ií]an\\s+\\w*[ai]do|hab[ií]amos\\s+\\w*[ai]do",
    name: "Saying what had already happened",
    example: "Cuando llegué, ya se habían ido.",
    english: "had done",
    level: "independent",
    summary: "había + participle for the earlier of two past events, and how it works with ya, todavía and cuando to order a story.",
    gap: "2 pluperfects in the whole corpus",
    skills: ["grammar", "reading", "context"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-9",
    key: "time-since",
    probe: "hace\\s+\\w+\\s+(a[nñ]os|meses|d[ií]as|horas|semanas)|llevo\\s+\\w+|desde hace",
    name: "How long something has been going on",
    example: "Llevo tres años acá; me mudé hace tres años.",
    english: "for / since / ago",
    level: "independent",
    summary: "hace + time for ago, desde and desde hace for since, llevar + time + gerund for an ongoing stretch, and why the English present perfect continuous maps onto a Spanish present.",
    gap: "8 hace-ago constructions and 2 llevar-plus-gerund",
    skills: ["grammar", "speaking", "context"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-10",
    key: "reported-speech",
    probe: "dijo que|dijeron que|me dijo|pregunt[oó] si|pidi[oó] que|coment[oó] que|avis[oó] que",
    name: "Passing on what somebody said",
    example: "Dijo que venía, y me pidió que la esperara.",
    english: "he said that ...",
    level: "independent",
    summary: "decir que with the tense shifting back, preguntar si for yes/no questions, pedir que + subjunctive for requests, and the pronoun and time-word changes that come with them.",
    gap: "20 reported clauses, none taught explicitly",
    skills: ["grammar", "listening", "context"],
    domain: "workplace",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-11",
    key: "hypothetical-present",
    probe: "si\\s+\\w*(ara|era|iera|ase|iese)\\b",
    name: "If things were different",
    example: "Si tuviera tiempo, iría con usted.",
    english: "if I had ..., I would ...",
    level: "independent",
    summary: "si + imperfect subjunctive + conditional, in both orders, and the rule learners break most: si never takes the present subjunctive.",
    gap: "9 si-clauses with a subjunctive, most of them hubiera",
    skills: ["grammar", "speaking", "context"],
    domain: "plans and decisions",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-12",
    key: "passive-and-impersonal",
    probe: "fue\\s+\\w+[ai]d[oa]|fueron\\s+\\w+[ai]d[oa]s?|se\\s+\\w+n?\\b|uno\\s|la gente",
    name: "When nobody is named as the doer",
    example: "Se habla inglés. La casa fue vendida el año pasado.",
    english: "it is done / it was done",
    level: "independent",
    summary: "The se-passive Spanish actually prefers, impersonal se and uno and la gente, and the ser + participle passive that mostly lives in writing and news — plus estar + participle for the resulting state.",
    gap: "3 true passives against 263 se-passives, with no explanation of the difference",
    skills: ["grammar", "reading", "register"],
    domain: "public life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-13",
    key: "recent-and-repeated",
    probe: "acab[oaó]\\w*\\s+de\\s|volv[ieoó]\\w*\\s+a\\s|vuelv[eo]\\s+a\\s|a punto de",
    name: "Just did it, did it again, about to do it",
    example: "Acabo de llegar y ya volvió a llamar.",
    english: "just / again / about to",
    level: "independent",
    summary: "acabar de + infinitive for something just finished, volver a + infinitive for doing it again, estar a punto de and ir a for what is about to happen — the verb phrases that carry aspect in Spanish.",
    gap: "6 acabar de and 10 volver a, never taught as a set",
    skills: ["grammar", "speaking", "context"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },

  /* ---------- extension: hypothesis, register and nuance ---------- */
  {
    id: "structure-14",
    key: "counterfactual-past",
    probe: "hubiera\\s+\\w*[ai]do|hubiese\\s+\\w*[ai]do|habr[ií]a\\s+\\w*[ai]do",
    name: "What would have happened",
    example: "Si hubiera sabido, no habría dicho nada.",
    english: "if I had known, I would have ...",
    level: "extension",
    summary: "si + pluperfect subjunctive + conditional perfect, the regret it usually carries, and me habría gustado for the softest way to say you wish something had gone otherwise.",
    gap: "4 conditional perfects, no counterfactual pattern taught",
    skills: ["grammar", "speaking", "register"],
    domain: "relationships and honesty",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-15",
    key: "wishes-and-ojala",
    probe: "ojal[aá]",
    name: "Hoping, wishing and ojalá",
    example: "Ojalá que salga bien. Ojalá pudiera.",
    english: "hopefully / I wish",
    level: "extension",
    summary: "ojalá + present subjunctive for a live hope and + imperfect subjunctive for an unlikely one, que + subjunctive as a standalone wish (que te vaya bien), and espero que against espero + infinitive.",
    gap: "zero instances of ojalá, one of the most common words in spoken Spanish",
    skills: ["grammar", "speaking", "culture"],
    domain: "social life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-16",
    key: "relative-advanced",
    probe: "cuy[oa]s?\\b|el cual|la cual|los cuales|las cuales|lo cual",
    name: "Joining sentences the way writing does",
    example: "El vecino, cuyo carro bloqueaba la entrada, ya se fue.",
    english: "whose / which / the one that",
    level: "extension",
    summary: "cuyo and its agreement with the thing owned, el cual and la cual after prepositions, lo cual commenting on a whole clause, and lo que — with an honest note that speech uses que for nearly all of it.",
    gap: "zero instances of cuyo; el cual and la cual essentially absent",
    skills: ["grammar", "reading", "register"],
    domain: "academic",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-17",
    key: "conjecture",
    probe: "habr[aá]\\s+\\w*[ai]do|debe de\\s|a lo mejor|quiz[aá]s?|tal vez|estar[aá]\\b",
    name: "Guessing out loud",
    example: "Ya habrá llegado. Debe de estar en camino.",
    english: "it must be / it'll have ...",
    level: "extension",
    summary: "The future and conditional used for probability rather than time, deber de + infinitive against deber for obligation, and the hedges a lo mejor, quizás and tal vez with the moods they take.",
    gap: "4 future perfects, none of them conjectural",
    skills: ["grammar", "listening", "register"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-18",
    key: "concession",
    probe: "aunque|a pesar de que|por m[aá]s que|as[ií] sea",
    name: "Conceding a point",
    example: "Aunque llueva, salimos. Aunque llovió, salimos.",
    english: "although / even if",
    level: "extension",
    summary: "aunque with the indicative for a fact and the subjunctive for a possibility — the single choice that changes the meaning most — plus a pesar de que, por más que and the standalone de todas formas.",
    gap: "concession never taught; aunque used without its mood contrast",
    skills: ["grammar", "speaking", "register"],
    domain: "plans and decisions",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-19",
    key: "obligation-impersonal",
    probe: "hay que\\s|toca\\s+\\w+r\\b|le toca\\b|nos toca\\b|tocaba\\s+\\w+r\\b",
    name: "Saying something has to be done, without saying who",
    example: "Toca madrugar. Hay que llevar la cédula.",
    english: "you have to / it has to be done",
    level: "foundation",
    summary: "hay que + infinitive for a rule nobody owns, tocar + infinitive for the Colombian 'it falls to me', and how both differ from tener que, which names the person. Also deber for a softer duty.",
    gap: "1 English obligation with must; tocar in this sense never taught",
    skills: ["grammar", "speaking", "context"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-20",
    key: "possessive-standalone",
    probe: "\\b(el|la|los|las)\\s+(m[ií]o|m[ií]a|tuy[oa]|suy[oa]|nuestr[oa])s?\\b|\\bes\\s+m[ií]o\\b|\\bes\\s+tuy[oa]\\b",
    name: "Saying which one is yours without repeating the noun",
    example: "Ese vaso es el mío, el tuyo está allá.",
    english: "mine / yours / hers",
    level: "foundation",
    summary: "The stressed possessives el mío, la tuya, los suyos, used when the noun is already known. Includes the bare predicate form es mío and the ambiguity of suyo, which Colombians resolve with de él or de ella.",
    gap: "4 lessons use a standalone possessive in English; the Spanish form is never taught",
    skills: ["grammar", "speaking", "vocabulary"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-21",
    key: "past-habits",
    probe: "sol[ií]a\\b|sol[ií]amos\\b|sol[ií]an\\b|antes\\s+\\w+[aá]bamos\\b|ya no\\b",
    name: "What you used to do and no longer do",
    example: "Antes solía caminar al trabajo, ya no.",
    english: "used to / would",
    level: "independent",
    summary: "soler in the imperfect, the bare imperfect for a repeated past, and the ya no that closes it off. The point is that English marks the habit on the verb with 'used to' and Spanish marks it with tense alone.",
    gap: "1 English 'used to' in the whole corpus",
    skills: ["grammar", "speaking", "listening"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-22",
    key: "confirmation-tags",
    probe: "¿cierto\\?|¿no\\?|¿verdad\\?|¿o no\\?|¿s[ií] o no\\?|¿ya\\?",
    name: "Checking that the other person agrees",
    example: "Nos vemos el jueves, ¿cierto?",
    english: "right? / isn't it?",
    level: "independent",
    summary: "Spanish confirms with one invariable tag — ¿cierto?, ¿no?, ¿verdad? — where English rebuilds the auxiliary and flips the polarity every time. This is the lesson where an English speaker stops over-engineering and a Spanish speaker starts.",
    gap: "1 English question tag in the whole corpus",
    skills: ["grammar", "listening", "register"],
    domain: "social life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-23",
    key: "causative-delegation",
    probe: "mand[éeoa]\\s+a\\s+\\w+r\\b|hice\\s+\\w+r\\b|hacer\\s+\\w+r\\b|puse\\s+a\\s+\\w+r\\b|mandar a\\s+\\w+r\\b",
    name: "Having somebody else do it",
    example: "Mandé a arreglar el carro y me hice cortar el pelo.",
    english: "have it done / get it done",
    level: "extension",
    summary: "mandar a + infinitive and hacer + infinitive for work you arrange rather than do. English packs this into 'have something done', which has no Spanish counterpart and is invisible to a learner who has never been shown it.",
    gap: "0 English causatives in the whole corpus",
    skills: ["grammar", "speaking", "context"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-24",
    key: "degree-result",
    probe: "tan\\s+\\w+\\s+que\\b|tanto\\s+que\\b|tant[oa]s?\\s+\\w+\\s+que\\b|de lo\\s+\\w+\\s+que\\b",
    name: "So much of something that it caused a result",
    example: "Estaba tan lleno que no cupimos.",
    english: "so ... that / such ... that",
    level: "extension",
    summary: "tan + adjective + que and tanto/tanta/tantos + noun + que, against the English split between 'so' before an adjective and 'such' before a noun — the one place English is fussier than Spanish.",
    gap: "2 English so/such ... that results",
    skills: ["grammar", "speaking", "reading"],
    domain: "social life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-25",
    key: "perfect-subjunctive",
    probe: "\\bhaya[ns]?\\s+\\w+[aií]d[oa]\\b|\\bhayamos\\s+\\w+[aií]d[oa]\\b",
    name: "Doubting something that has already happened",
    example: "Espero que ya haya llegado el pedido.",
    english: "may have / has (subjunctive)",
    level: "extension",
    summary: "haya + participle: the subjunctive pointed at a finished event. It is what the present subjunctive cannot do, because espero que llegue is about the future and espero que haya llegado is about a past you cannot confirm.",
    gap: "1 perfect subjunctive in the whole corpus",
    skills: ["grammar", "listening", "reading"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },

  /*
   * The exam layer, added from a second measurement.
   *
   * The first twenty-five structures were chosen because the form was almost
   * ABSENT from the corpus. These twelve are the opposite problem, and it is
   * why they went unnoticed: the forms are everywhere, and no lesson explains
   * any of them. A sweep of 6,478 taught Spanish utterances against the prose
   * of all 233 lessons found 312 uses of por and para and zero lessons that
   * contrast them; 811 preverbal object pronouns and no lesson that teaches
   * the system; ser and estar on nearly every page and not one lesson naming
   * the choice between them.
   *
   * That is the difference between a learner who has SEEN a form and one who
   * can PRODUCE it under exam conditions. Every item below is on the DELE
   * A1-B2 and Cambridge A2 Key/B1 Preliminary/B2 First inventories, and each
   * is a documented failure point for self-study candidates, who absorb these
   * patterns receptively and then cannot deploy them in a timed writing task.
   */
  {
    id: "structure-26",
    key: "ser-vs-estar",
    probe: "\\b(es|son|soy|eres|somos)\\b[^.?!]{0,40}(est[áa]|estoy|estamos)|(est[áa]|estoy|estamos)[^.?!]{0,40}\\b(es|son|soy|eres|somos)\\b",
    name: "Ser and estar, when the same adjective means two things",
    example: "Mi hermano es aburrido, pero hoy está aburrido.",
    english: "to be (permanent) vs. to be (state)",
    level: "foundation",
    summary: "The one contrast English cannot signal at all, because English has a single verb. Identity, origin, material, time and possession take ser; location, health, mood and any result of a change take estar. The pairs that flip meaning — ser/estar listo, aburrido, bueno, vivo, rico — are where the exam looks.",
    gap: "ser and estar appear on nearly every page; no lesson contrasts them",
    skills: ["grammar", "speaking", "context"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-27",
    key: "gender-and-agreement",
    probe: "\\b(un|una|unos|unas|el|la|los|las)\\s+[a-záéíóúñ]+[oa]s?\\s+[a-záéíóúñ]+[oa]s?\\b|\\bel\\s+(agua|problema|d[ií]a|mapa|clima|tema|idioma)\\b",
    name: "Making the whole phrase agree",
    example: "Unas sillas plásticas rojas, no unos vasos plásticos rojos.",
    english: "gender and number agreement",
    level: "foundation",
    summary: "Article, noun and adjective have to match in gender and number, and the exam marks every mismatch. Covers the -o/-a default, the nouns that break it (el problema, la mano, el agua but las aguas), and the -e/-consonant nouns that give no clue at all.",
    gap: "agreement is modeled constantly and explained nowhere",
    skills: ["grammar", "writing", "reading"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-28",
    key: "articles-and-quantity",
    probe: "\\b(mucho|mucha|muchos|muchas|poco|poca|pocos|pocas|bastante|bastantes|demasiad[oa]s?|suficiente|algun[oa]s?|ning[úu]n|ninguna|varios|varias|todo el|toda la|otro|otra)\\b",
    name: "How much, how many, and which article says it",
    example: "Hay bastante arroz, pero quedan pocas arepas y no hay ninguna gaseosa.",
    english: "articles and quantifiers",
    level: "foundation",
    summary: "mucho/poco/bastante/demasiado agreeing with what they count, the un/el split English does not make, and the places Spanish uses a bare noun where English wants 'some'. Includes ningún/ninguna and the singular-only rule that catches everyone.",
    gap: "60 quantifier uses, none explained; article choice never taught",
    skills: ["grammar", "speaking", "vocabulary"],
    domain: "shopping",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-29",
    key: "object-pronouns",
    probe: "\\b(se|me|te|nos)\\s+l[oa]s?\\b|\\b(me|te|le|nos|les)\\s+(lo|la|los|las)\\b",
    name: "Saying it and to whom without repeating either",
    example: "¿El recibo? Ya se lo mandé a ella por WhatsApp.",
    english: "direct, indirect and combined pronouns",
    level: "independent",
    summary: "lo/la/los/las for the thing, le/les for the person, and what happens when both land together: le + lo becomes se lo. Also where they attach — before the conjugated verb, or hooked onto an infinitive or gerund — which is the half learners guess at.",
    gap: "811 preverbal object pronouns and 61 combined pairs, none taught",
    skills: ["grammar", "speaking", "listening"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-30",
    key: "preterite-vs-imperfect",
    probe: "\\b[a-záéíóúñ]{2,}(aba|abas|[áa]bamos|aban|[íi]a|[íi]as|[íi]amos|[íi]an)[^.?!]{0,60}(\\b[a-záéíóúñ]{2,}([óo]|aron|ieron)\\b|\\b(fue|fui|fueron|hizo|dijo|tuvo|estuvo|vino|puso|pudo|supo|quiso|dio|vio)\\b)|(\\b[a-záéíóúñ]{2,}([óo]|aron|ieron)\\b|\\b(fue|fui|fueron|hizo|dijo|tuvo|estuvo|vino|puso|pudo|supo|quiso|dio|vio)\\b)[^.?!]{0,60}\\b[a-záéíóúñ]{2,}(aba|aban|[íi]a|[íi]an)\\b",
    name: "The background and the thing that happened",
    example: "Llovía durísimo cuando se fue la luz.",
    english: "imperfect vs. preterite",
    level: "independent",
    summary: "Not two past tenses to choose between but two jobs: the imperfect paints what was going on, the preterite drops the event into it. Covers era/estaba/había/tenía as default scenery, and the verbs that change meaning outright — sabía vs. supe, conocía vs. conocí, quería vs. quise.",
    gap: "395 imperfects and no lesson contrasting them with the preterite",
    skills: ["grammar", "listening", "reading"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-31",
    key: "commands-and-requests",
    probe: "\\bno\\s+(me\\s+|te\\s+|se\\s+|lo\\s+|la\\s+|les\\s+)?\\w{3,}(es|as|en|an)\\b|\\b(h[áa]gam[eo]|d[íi]gam[e]|p[áa]sem[e]|esp[ée]rem[e]|si[ée]ntese|p[óo]ngase|tr[áa]igam[e]|d[ée]jem[e])\\b",
    name: "Telling someone what to do without being rude",
    example: "Hágame un favor y no me traiga la cuenta todavía.",
    english: "imperative, affirmative and negative",
    level: "independent",
    summary: "usted commands (tome, siga, espere) and the tú forms beside them, the negative that switches to the subjunctive (no tomes, no siga), and where pronouns go: glued on the end when affirmative, in front when negative. Plus the Colombian softeners — hágame un favor, regáleme, ¿me colabora? — that keep an order from landing as one.",
    gap: "65 usted imperatives and 34 negative commands, none taught",
    skills: ["grammar", "speaking", "culture"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-32",
    key: "por-vs-para",
    probe: "\\bpor\\b[^.?!]{0,60}\\bpara\\b|\\bpara\\b[^.?!]{0,60}\\bpor\\b",
    name: "Por and para, and why English gives no clue",
    example: "Pasé por la oficina para dejar los papeles.",
    english: "por vs. para",
    level: "independent",
    summary: "English says 'for' for both, so the choice has to be rebuilt from meaning: para points forward to a destination, a deadline, a purpose or a recipient; por points back to a cause, or covers exchange, duration, route and 'on behalf of'. Includes the fixed pairs an exam expects — por fin, por si acaso, para siempre, estar para.",
    gap: "312 uses of por and para; no lesson contrasts them",
    skills: ["grammar", "writing", "reading"],
    domain: "travel",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-33",
    key: "real-conditionals",
    probe: "\\bsi\\s+[a-záéíóúñ]+[^.?!]{0,60}(\\b[a-záéíóúñ]{2,}(r[ée]|r[áa]s|r[áa]|remos|r[áa]n)\\b|\\b(voy|vas|va|vamos|van)\\s+a\\b)",
    name: "If this happens, then that will",
    example: "Si llueve mañana, no vamos a la finca.",
    english: "real conditionals (si + present)",
    level: "independent",
    summary: "The conditional an exam actually tests first: si + present indicative, with the result in present, future or ir a + infinitive. The rule that matters is the one learners break — never a present subjunctive after si — plus cuando + subjunctive for the future event that is not in doubt.",
    gap: "33 real conditionals, none explained; the si-rule never stated",
    skills: ["grammar", "speaking", "writing"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-34",
    key: "relative-basic",
    probe: "\\b(el|la|los|las)\\s+que\\b|\\blo que\\b|\\b(la|el)\\s+\\w+\\s+donde\\b|\\bcon quien\\b|\\ba quien\\b",
    name: "Joining two sentences with que",
    example: "La señora que atiende es la que me guardó el pedido.",
    english: "relative clauses",
    level: "independent",
    summary: "que for almost everything, quien after a preposition for people, donde for places, and lo que for a whole idea with no noun behind it. The exam point is that Spanish never drops que the way English drops 'that', and that a written accent separates qué the question from que the joiner.",
    gap: "55 relative constructions and no lesson on how to build one",
    skills: ["grammar", "writing", "reading"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-35",
    key: "subjunctive-volition",
    probe: "\\b(quiero|quiere|queremos|quieren|necesito|necesita|espero|espera|prefiero|prefiere|dile|d[íi]gale|pido|pide|recomiendo|sugiero|es necesario|es importante|es mejor)\\s+que\\s+\\w+",
    name: "Wanting someone else to do something",
    example: "Quiero que me llame antes de las cinco.",
    english: "present subjunctive after wanting and asking",
    level: "independent",
    summary: "The rule that unlocks the whole mood: one subject wants, asks, needs or hopes, a DIFFERENT subject acts, and que sits between them. Quiero salir has one subject and takes an infinitive; quiero que salgas has two and takes the subjunctive. Covers the present subjunctive forms including the irregulars sea, vaya, haya, sepa, dé.",
    gap: "27 volition triggers followed by que; the rule never stated",
    skills: ["grammar", "speaking", "writing"],
    domain: "everyday life",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-36",
    key: "subjunctive-adverbial",
    probe: "\\b(cuando|para que|antes de que|hasta que|en cuanto|a menos que|sin que|aunque|apenas|despu[ée]s de que)\\s+\\w{2,}(e|es|emos|en|a|as|amos|an)\\b",
    name: "Clauses that take the subjunctive because nothing has happened yet",
    example: "Cuando llegue el pago, le aviso; no compre nada hasta que confirme.",
    english: "subjunctive in time and purpose clauses",
    level: "extension",
    summary: "cuando, en cuanto, hasta que and después de que take the subjunctive when they point at something not yet real, and the indicative when they describe a habit or a finished fact. para que, antes de que, sin que and a menos que always take it. This is the single heaviest-marked structure in B2 writing.",
    gap: "90 adverbial triggers, mood never explained",
    skills: ["grammar", "writing", "reading"],
    domain: "workplace",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-37",
    key: "discourse-connectors",
    probe: "\\b(sin embargo|por lo tanto|adem[áa]s|en cambio|por otro lado|es decir|de hecho|en resumen|no obstante|por un lado|a pesar de|mientras que|en primer lugar|por [úu]ltimo)\\b",
    name: "Holding a written argument together",
    example: "Por un lado es más barato; sin embargo, queda lejísimos.",
    english: "connectors and discourse markers",
    level: "extension",
    summary: "The words a marker looks for first in a B2 composition: sequencing (en primer lugar, por último), contrast (sin embargo, en cambio, no obstante), cause and result (por lo tanto, debido a), and restating (es decir, o sea). Includes which ones are too spoken for an exam essay — o sea, pues, entonces — and what to write instead.",
    gap: "6 connectors in 6,478 utterances, the thinnest measured slot",
    skills: ["writing", "reading", "grammar"],
    domain: "academic",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-38",
    key: "negated-opinion",
    probe: "\\bno\\s+(creo|pienso|considero|me\\s+parece|es\\s+(cierto|verdad|evidente)|parece)\\s+que\\b",
    name: "Saying you do not think something is so",
    example: "No creo que sea tan grave como dicen.",
    english: "negated opinion takes the subjunctive",
    level: "extension",
    summary: "Creo que es grave flips to no creo que sea grave. Asserting an opinion takes the indicative; denying one takes the subjunctive, because the speaker is no longer vouching for the fact. Covers no creo que, no pienso que, no me parece que, no es cierto que, and the asymmetry that trips learners: the affirmative and the negative do not use the same mood.",
    gap: "34 uses of no creo que and its relatives, no lesson explaining the mood flip",
    skills: ["grammar", "speaking", "register"],
    domain: "academic",
    reviewStatus: "needs Colombian Spanish and English education review"
  },
  {
    id: "structure-39",
    key: "future-perfect",
    probe: "\\b(habr[ée]|habr[áa]s|habremos|habr[áa]n|habr[áa])\\s+[a-z\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1]+(ado|ido|cho|to|so)\\b",
    name: "Saying it will already be done by then",
    example: "Para el viernes ya habré terminado el informe.",
    english: "the future perfect",
    level: "extension",
    summary: "Habré terminado sets a deadline and looks back from it: done before some future moment. It also guesses about the recent past — ya habrá llegado for he has probably arrived by now. Colombian speech often replaces it with the simple past or ya llegó, which is natural but leaves a B2 gap, because the form is on the exam inventory and appears in the reading cloze.",
    gap: "2 uses in the whole corpus and no lesson, while B2 requires producing it",
    skills: ["grammar", "reading", "speaking"],
    domain: "academic",
    reviewStatus: "needs Colombian Spanish and English education review"
  }
];