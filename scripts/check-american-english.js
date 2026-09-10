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
  "crisps", "pram", "shopfront", "queueing", "dustbin"
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

function targetFiles() {
  const files = [];
  for (const dir of ["data/lessons", "data/lexicon"]) {
    const abs = path.join(ROOT, dir);
    if (fs.existsSync(abs)) for (const f of fs.readdirSync(abs)) files.push(`${dir}/${f}`);
  }
  /* data/lessons.js carries the eight seed lessons and is content like any
     other block. It was omitted from this list at first, so those lessons
     were exempt from the ban without anyone saying so. */
  for (const f of ["data/lessons.js", "data/slang.js", "data/mature.js", "data/structures.js",
    "data/curriculum.js", "data/taxonomy.js", "app.js", "i18n.js", "index.html"]) {
    if (fs.existsSync(path.join(ROOT, f))) files.push(f);
  }
  return files;
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

/* Returns [{ term, file, context }] for every banned word found. */
function findViolations() {
  const out = [];
  for (const rel of targetFiles()) {
    const text = fs.readFileSync(path.join(ROOT, rel), "utf8");
    for (const hit of scanText(text)) out.push({ term: hit.term, file: rel, context: hit.context });
  }
  return out;
}

module.exports = { BRITISH, CANADIAN, findViolations, targetFiles, scanText };

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
