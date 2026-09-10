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

/* The English track is set in Texas, not Canada. */
const CANADIAN = [
  "Toronto", "Vancouver", "Montreal", "Montréal", "Halifax", "Ottawa",
  "Calgary", "Winnipeg", "Edmonton", "Banff", "Canada", "Canadá", "Canadian",
  "Canadians", "canadiense", "canadienses", "Niagara", "Niágara", "poutine",
  "Tim Hortons", "loonie", "toonie", "TTC", "Victoria Day"
];

function targetFiles() {
  const files = [];
  for (const dir of ["data/lessons", "data/lexicon"]) {
    const abs = path.join(ROOT, dir);
    if (fs.existsSync(abs)) for (const f of fs.readdirSync(abs)) files.push(`${dir}/${f}`);
  }
  for (const f of ["data/slang.js", "data/mature.js", "data/structures.js",
    "data/curriculum.js", "data/taxonomy.js", "i18n.js", "index.html"]) {
    if (fs.existsSync(path.join(ROOT, f))) files.push(f);
  }
  return files;
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/* Returns [{ term, file, context }] for every banned word found. */
function findViolations() {
  const all = [...BRITISH, ...CANADIAN];
  const re = new RegExp(`\\b(${all.map(escape).join("|")})\\b`, "gi");
  const out = [];
  for (const rel of targetFiles()) {
    const text = fs.readFileSync(path.join(ROOT, rel), "utf8");
    let m;
    re.lastIndex = 0;
    while ((m = re.exec(text))) {
      out.push({
        term: m[1],
        file: rel,
        context: text.slice(Math.max(0, m.index - 50), m.index + 50).replace(/\s+/g, " ")
      });
    }
  }
  return out;
}

module.exports = { BRITISH, CANADIAN, findViolations, targetFiles };

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
