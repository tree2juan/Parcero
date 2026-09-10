/*
 * Guard: the corpus stays American English, and stays set in Texas.
 *
 * The content was originally authored in British English and set in Canada,
 * and was migrated wholesale (see scripts/americanize.js). Nothing stops a
 * later author from reintroducing "neighbour" or "Toronto" one lesson at a
 * time, and a slow drift back is exactly the kind of thing nobody notices
 * until a learner does. So the ban is asserted rather than remembered.
 *
 * Only unambiguous markers are listed here. Words whose British sense depends
 * on context — "lift", "flat", "queue", "tap", "holiday", "boot", "garden",
 * "jab" — are deliberately NOT in this list: they have legitimate American
 * uses, so banning them outright would produce false failures. They were
 * handled by review instead.
 *
 * "takeaway" is excluded for the same reason: "the takeaway is that…" meaning
 * the key point is ordinary American English. Only the food sense is British,
 * and that distinction needs a reader, not a regex.
 *
 * `toque` is likewise absent on purpose. It looks like the Canadian word for
 * a winter hat, but every occurrence in this corpus is Spanish — "un toque de
 * humor", "toque la puerta" — so banning it would be a bug.
 *
 * Usage:  node scripts/check-american-english.js
 * Also consumed by test/american-english.test.js.
 */
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..");

/* British spellings and vocabulary with no legitimate American reading. */
const BRITISH = [
  "neighbour", "neighbours", "neighbourhood", "neighbourhoods", "neighbourly",
  "neighbourliness", "colour", "colours", "coloured", "colourful", "colouring",
  "favourite", "favourites", "behaviour", "harbour", "honour", "humour",
  "labour", "rumour", "savour", "flavour", "centre", "centres", "theatre",
  "metre", "metres", "litre", "litres", "kilometre", "kilometres", "grey",
  "realise", "realised", "realises", "organise", "organised", "organises",
  "organising", "organiser", "organisers", "apologise", "apologised",
  "apologises", "apologising", "recognise", "recognised", "recognises",
  "recognisable", "memorise", "memorised", "emphasise", "emphasised",
  "criticise", "criticised", "specialise", "specialised", "whilst", "amongst",
  "lorry", "lorries", "jumper", "jumpers", "pavement", "pavements",
  "timetable", "timetables", "car park", "postcode", "maths", "mum", "mums",
  "tyre", "tyres", "aeroplane", "moustache", "practise", "practises",
  "practising", "travelling", "travelled", "traveller", "travellers",
  "cancelled", "cancelling", "labelled", "marvellous", "defence", "offence",
  "licence", "storey", "storeys", "kerb", "plough", "programme", "programmes",
  "flatmate", "flatmates", "trousers", "rubbish", "petrol",
  "crisps", "pram", "shopfront", "queueing", "dustbin",

  /*
   * The families above were written base-word-first and drifted: "favourite"
   * was banned while "favour" was not, so `Neighborly favours` sat in a lesson
   * level string through a full American-English migration without tripping
   * anything. A spelling family is only guarded if every inflection an author
   * would actually type is listed, so these close the -our, -re, -ise and
   * doubled-l sets rather than adding new categories.
   *
   * Deliberately absent, because the corpus is bilingual and these are real
   * Spanish words or valid American English:
   *   cheque   - Spanish for a bank check, used throughout the money lessons
   *   calibre  - a Spanish noun
   *   analyses - the American plural of "analysis"
   *   glamour  - standard American spelling
   *   queue, mate, roundabout, advertise, exercise, cancellation - all American
   */
  "favour", "favours", "favoured", "favouring", "favourable", "favourably",
  "neighbouring", "behaviours", "behavioural", "harbours", "honours",
  "honourable", "labours", "laboured", "rumours", "savoury", "flavours",
  "flavoured", "endeavour", "endeavours", "armour", "parlour", "vapour",
  "odour", "odours", "splendour", "rigour", "vigour", "valour", "saviour",
  "demeanour", "candour", "clamour",

  "theatres", "centred", "centring", "millimetre", "millimetres",
  "centimetre", "centimetres", "manoeuvre", "manoeuvres", "fibre", "fibres",
  "spectre",

  "organisation", "organisations", "realising", "recognising", "criticising",
  "criticises", "specialising", "specialises", "specialisation", "memorises",
  "memorising", "emphasises", "emphasising", "analyse", "analysed",
  "analysing", "paralyse", "paralysed", "summarise", "summarised",
  "summarising", "prioritise", "prioritised", "authorise", "authorised",
  "categorise", "categorised", "familiarise", "minimise", "minimised",
  "maximise", "maximised", "normalise", "socialise", "socialised", "utilise",
  "utilised", "visualise", "visualised",

  "labelling", "modelling", "modelled", "signalling", "signalled",
  "counselling", "counselled", "counsellor", "counsellors", "fuelled",
  "fuelling", "levelled", "levelling", "quarrelled", "jeweller", "jewellery",
  "skilful", "skilfully", "wilful", "fulfil", "fulfils", "fulfilment",
  "instalment", "instalments", "enrolment", "enrolments",

  "pretence", "sceptical", "scepticism", "aluminium", "gaol", "pyjamas",
  "speciality", "specialities", "draught", "ploughed", "ploughing",
  "judgement", "kerbside", "nappy", "nappies", "windscreen", "motorway",
  "motorways", "carriageway", "pushchair", "postbox", "waistcoat", "wellies",
  "nought", "fortnight", "telly", "bloke", "blokes", "cuppa", "whinge",
  "whinged", "whinging", "learnt"
];

/* The English track is set in Texas, not Canada.
 *
 * The food and money terms matter as much as the place names. "Tim Hortons"
 * was replaced by "Shipley Do-Nuts" in the migration but "double-double" — a
 * Tim Hortons order code that means nothing at a Texas donut counter — was
 * left behind, and a whole lesson kept teaching "butter tarts" while calling
 * the neighbour who bakes them American. A half-migrated scene is worse than
 * an unmigrated one, because it is internally contradictory. */
const CANADIAN = [
  "Toronto", "Vancouver", "Montreal", "Montréal", "Halifax", "Ottawa",
  "Calgary", "Winnipeg", "Edmonton", "Banff", "Canada", "Canadá", "Canadian",
  "Canadians", "canadiense", "canadienses", "Niagara", "Niágara", "poutine",
  "Tim Hortons", "loonie", "loonies", "toonie", "toonies", "TTC", "Victoria Day",
  "butter tart", "butter tarts", "double-double", "Nanaimo", "tourtière",
  "tourtiere", "Timbits", "back bacon", "ketchup chips", "Saskatoon",
  "Quebec", "Québec", "Ontario", "Alberta", "Manitoba", "Nova Scotia",
  "Newfoundland", "Saskatchewan",
  /*
   * Institutions and brands, not place names. These are the ones that survive
   * a place-name sweep untouched: nothing about "Kijiji" or "Interac
   * e-transfer" looks geographic, so relocating every city still left a
   * lesson teaching learners to ask a Texan "Do you take e-transfer?" — a
   * question no American would understand. A corpus can be entirely free of
   * the word "Canada" and still be set in Canada.
   */
  "Kijiji", "Interac", "e-transfer", "e-transfers", "Canadian Tire",
  "Shoppers Drug Mart", "Loblaws", "Sobeys", "Via Rail", "Air Canada",
  "chesterfield", "serviette", "serviettes"
];

/*
 * Deliberately NOT banned: US cities outside Texas.
 *
 * The brief was "American English, Texas cities", and the migration moved the
 * Canadian settings to Texas. It did not move the US settings that were
 * already there — Miami (15), Florida (5), Chicago (4), Seattle (4), Boston
 * (3), Portland (2), California (1) — and that was reviewed and kept on
 * purpose. Texas is the anchor, not a cage: a learner who only ever sees
 * Houston learns a country the size of one state, and Miami in particular is
 * one of the most Spanish-speaking cities in the US, which makes it honest
 * setting for this audience rather than a leftover.
 *
 * Recorded here because "why is there a lesson set in Miami?" is exactly the
 * kind of question that gets re-answered by deleting the lesson.
 */

/*
 * Which files get checked.
 *
 * This used to be a hand-written list, and a hand-written list of things to
 * check drifts exactly the way a hand-written list of things to ban does.
 * data/lessons.js was missing at first, so the eight seed lessons were exempt
 * from the ban without anyone deciding that. progress.js was never on it
 * either, and had "coloured a button green" sitting in its header comment
 * while the guard reported the project clean.
 *
 * So the shipped source is discovered rather than enumerated, and any new file
 * is covered the day it is added instead of the day someone remembers it.
 *
 * scripts/ and test/ are excluded deliberately, not accidentally: this file
 * and americanize.js contain every banned word as data, and the matcher tests
 * assert against known-bad strings. Scanning them would make the guard fail on
 * its own definition of failure.
 */
const SKIP_DIRS = new Set(["scripts", "test", "node_modules", ".git", ".github"]);
const CHECKED = /\.(js|html|css)$/;

function targetFiles(dir = "", out = []) {
  for (const entry of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
    const rel = dir ? `${dir}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) targetFiles(rel, out);
    } else if (CHECKED.test(entry.name)) {
      out.push(rel);
    }
  }
  return out;
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/*
 * Word boundaries that understand accents.
 *
 * The obvious `\b(term)\b` is wrong here and silently so. `\b` is defined
 * against ASCII word characters, so in "Canadá" the trailing boundary sits
 * between "á" and a space — two non-word characters by that definition — and
 * matches nothing. The guard therefore reported the corpus clean while
 * "Canadá" appeared 16 times in a single lesson and across 38 files.
 *
 * Unicode property escapes fix it: require that the character either side is
 * not a letter, digit or underscore, with `u` so \p{L} is legal. This is the
 * kind of bug that only ever shows up in the language you were not testing in.
 */
const boundedPattern = (terms) =>
  new RegExp(`(?<![\\p{L}\\p{N}_])(${terms.map(escape).join("|")})(?![\\p{L}\\p{N}_])`, "giu");

/* Scan one string. Separated from file reading so the matcher itself can be
   tested against known-bad text rather than against whatever the corpus
   happens to contain today. */
function scanText(text, terms) {
  const re = boundedPattern(terms || [...BRITISH, ...CANADIAN]);
  const out = [];
  let m;
  while ((m = re.exec(text))) {
    out.push({
      term: m[1],
      index: m.index,
      context: text.slice(Math.max(0, m.index - 50), m.index + 50).replace(/\s+/g, " ")
    });
  }
  return out;
}

/*
 * The damage a word-for-word replacement leaves behind.
 *
 * Swapping "British" for "American" is correct on its own terms and wrong in
 * context: it turns "a British tenant" into "a American tenant", because the
 * article agrees with the sound of the word that follows and the replacement
 * changed that sound. Two of these shipped before anyone noticed, in prose a
 * student reads.
 *
 * The scan is narrow on purpose. This corpus is bilingual, and Spanish "a" is
 * a preposition — "a alguien", "a Instagram", "a error" are all correct and
 * appear 1,700+ times. Only words americanize.js actually introduces are
 * checked, so the guard covers the drift the tool itself causes and stays
 * quiet about the other language.
 *
 * `literal` glosses are exempt: they mirror Spanish word-for-word on purpose
 * ("I-come to to-open a account of-savings" glosses "una cuenta"), so their
 * ungrammaticality is the teaching point rather than a defect.
 */
const VOWEL_SOUND_INTRODUCED = ["American", "Americans", "Americanized", "American-style"];

const ARTICLE_RE = new RegExp(
  `(?<![\\p{L}\\p{N}_])a (${VOWEL_SOUND_INTRODUCED.join("|")})(?![\\p{L}\\p{N}_])`,
  "gu"
);

function scanArticles(text) {
  const out = [];
  for (const line of text.split(/\r?\n/)) {
    if (/^\s*literal:/.test(line)) continue;
    for (const m of line.matchAll(ARTICLE_RE)) {
      out.push({
        term: m[0],
        index: m.index,
        context: line.slice(Math.max(0, m.index - 50), m.index + 50).replace(/\s+/g, " ")
      });
    }
  }
  return out;
}

/*
 * The one place a British spelling is the correct thing to write.
 *
 * A lesson that teaches "downtown" has to be able to say what the British
 * alternative is, and it cannot do that without spelling it. Excusing the word
 * everywhere would gut the guard, so each excuse is the exact sentence it
 * appears in, and an excuse that no longer matches anything is itself an
 * error — otherwise a stale entry quietly widens the hole it was cut for.
 */
const QUOTED_CONTRASTS = [
  "el inglés británico suele preferir “the city centre”"
];

/* Returns [{ term, file, context }] for every banned word found. */
function findViolations() {
  const out = [];
  const used = new Set();
  for (const rel of targetFiles()) {
    let text = fs.readFileSync(path.join(ROOT, rel), "utf8");
    for (const phrase of QUOTED_CONTRASTS) {
      if (!text.includes(phrase)) continue;
      used.add(phrase);
      /* Blanked, not deleted, so every other hit keeps its offset and context. */
      text = text.split(phrase).join(" ".repeat(phrase.length));
    }
    for (const hit of scanText(text)) out.push({ term: hit.term, file: rel, context: hit.context });
    for (const hit of scanArticles(text)) out.push({ term: hit.term, file: rel, context: hit.context });
  }
  for (const phrase of QUOTED_CONTRASTS) {
    if (!used.has(phrase)) {
      out.push({ term: "stale exemption", file: "scripts/check-american-english.js", context: phrase });
    }
  }
  return out;
}

module.exports = { BRITISH, CANADIAN, QUOTED_CONTRASTS, findViolations, targetFiles, scanText, scanArticles };

if (require.main === module) {
  const bad = findViolations();
  if (!bad.length) {
    console.log(`American English check: clean across ${targetFiles().length} files.`);
    process.exit(0);
  }
  const byTerm = new Map();
  for (const v of bad) {
    if (!byTerm.has(v.term.toLowerCase())) byTerm.set(v.term.toLowerCase(), []);
    byTerm.get(v.term.toLowerCase()).push(v);
  }
  console.error(`American English check: ${bad.length} occurrence(s), ${byTerm.size} distinct term(s)\n`);
  for (const [term, list] of [...byTerm.entries()].sort((a, b) => b[1].length - a[1].length)) {
    console.error(`  ${term} (${list.length}) — e.g. ${list[0].file}`);
    console.error(`     …${list[0].context}…`);
  }
  process.exit(1);
}
