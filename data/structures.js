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
    pathways: ["foundation", "year-12"],
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
    pathways: ["foundation", "year-12"],
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
    pathways: ["foundation", "year-12"],
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
    pathways: ["foundation", "year-12"],
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
    pathways: ["foundation", "year-12"],
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
    pathways: ["foundation", "year-12"],
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
    pathways: ["independent", "year-12"],
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
    pathways: ["independent", "year-12"],
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
    pathways: ["independent", "year-12"],
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
    pathways: ["independent", "year-12"],
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
    pathways: ["independent", "year-12"],
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
    pathways: ["independent", "collegiate-academic"],
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
    pathways: ["independent", "year-12"],
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
    pathways: ["extension", "collegiate-academic"],
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
    pathways: ["extension", "year-12"],
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
    pathways: ["extension", "collegiate-academic"],
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
    pathways: ["extension", "year-12"],
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
    pathways: ["extension", "collegiate-academic"],
    reviewStatus: "needs Colombian Spanish and English education review"
  }
];
