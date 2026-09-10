/*
 * Convert the corpus to American English and relocate the English-track
 * setting from Canada to Texas.
 *
 * The corpus was authored in British English throughout — including the
 * English glosses an American learner reads on the Spanish side — and the
 * English track was set in Toronto. Both are wrong for the audience.
 *
 * The replacements are split into tiers because they are NOT equally safe.
 * The corpus is bilingual, so a word list that is harmless in English can
 * destroy Spanish:
 *
 *   toque   Spanish imperative of tocar — "toque la puerta" (knock).
 *           Replacing it with "beanie" corrupts real Spanish text.
 *   cheque  Spanish for a bank check. Same problem.
 *   flat    English adjective ("a flat tyre") as well as British "apartment".
 *   lift    English verb ("lift the box") as well as British "elevator".
 *   tap     English verb ("tap the screen") as well as British "faucet".
 *   holiday Legitimate American usage ("the holidays").
 *
 * So only tiers A and C are applied automatically. Tier B is reported with
 * surrounding context for a human decision, never rewritten in bulk.
 *
 * Usage:
 *   node scripts/americanize.js            report only, changes nothing
 *   node scripts/americanize.js --apply    apply tiers A and C
 *   node scripts/americanize.js --tier-b   print tier B occurrences w/ context
 */
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..");

/* Tier A: British -> American. Every entry here is checked to be a form that
   does not exist as a Spanish word, so it is safe to replace anywhere in the
   file regardless of which language the surrounding string is in. */
const TIER_A = [
  ["neighbourhoods", "neighborhoods"],
  ["neighbourliness", "neighborliness"],
  ["neighbourhood", "neighborhood"],
  ["neighbourly", "neighborly"],
  ["neighbours", "neighbors"],
  ["neighbour", "neighbor"],
  ["colouring", "coloring"],
  ["colours", "colors"],
  ["coloured", "colored"],
  ["colourful", "colorful"],
  ["colour", "color"],
  ["favourites", "favorites"],
  ["favourite", "favorite"],
  ["behaviour", "behavior"],
  ["harbour", "harbor"],
  ["honour", "honor"],
  ["humour", "humor"],
  ["labour", "labor"],
  ["rumour", "rumor"],
  ["savour", "savor"],
  ["flavour", "flavor"],
  ["centres", "centers"],
  ["centre", "center"],
  ["theatre", "theater"],
  ["metres", "meters"],
  ["metre", "meter"],
  ["litres", "liters"],
  ["litre", "liter"],
  ["grey", "gray"],
  ["realised", "realized"],
  ["realises", "realizes"],
  ["realise", "realize"],
  ["organised", "organized"],
  ["organisers", "organizers"],
  ["organiser", "organizer"],
  ["organises", "organizes"],
  ["organising", "organizing"],
  ["organise", "organize"],
  ["apologised", "apologized"],
  ["apologises", "apologizes"],
  ["apologising", "apologizing"],
  ["apologise", "apologize"],
  ["recognised", "recognized"],
  ["recognises", "recognizes"],
  ["recognisable", "recognizable"],
  ["recognise", "recognize"],
  ["memorise", "memorize"],
  ["memorised", "memorized"],
  ["emphasise", "emphasize"],
  ["emphasised", "emphasized"],
  ["criticise", "criticize"],
  ["criticised", "criticized"],
  ["specialised", "specialized"],
  ["specialise", "specialize"],
  ["whilst", "while"],
  ["amongst", "among"],
  ["lorries", "trucks"],
  ["lorry", "truck"],
  ["jumpers", "sweaters"],
  ["jumper", "sweater"],
  ["pavements", "sidewalks"],
  ["pavement", "sidewalk"],
  ["timetables", "schedules"],
  ["timetable", "schedule"],
  ["car park", "parking lot"],
  ["postcode", "zip code"],
  ["maths", "math"],
  ["mum", "mom"],
  ["mums", "moms"],
  ["tyre", "tire"],
  ["tyres", "tires"],
  ["aeroplane", "airplane"],
  ["moustache", "mustache"],
  ["practise", "practice"],
  ["practises", "practices"],
  ["practising", "practicing"],
  ["travelling", "traveling"],
  ["travelled", "traveled"],
  ["traveller", "traveler"],
  ["travellers", "travelers"],
  ["cancelled", "canceled"],
  ["cancelling", "canceling"],
  ["labelled", "labeled"],
  ["marvellous", "marvelous"],
  ["defence", "defense"],
  ["offence", "offense"],
  ["licence", "license"],
  ["storey", "story"],
  ["storeys", "stories"],
  ["kerb", "curb"],
  ["plough", "plow"],
  ["programme", "program"],
  ["programmes", "programs"],
  ["kilometres", "kilometers"],
  ["kilometre", "kilometer"]
];

/* Tier C: relocate the English track from Canada to Texas.
 *
 * Proper nouns, so these apply to Spanish text too — Alejandra says she lives
 * in Houston in both languages. Cities are mapped to keep each one's role in
 * the story: biggest city, state capital, border/mountain gateway, Gulf port.
 *
 * Two things here are deliberate and easy to get wrong:
 *
 *  - Nationality maps to "estadounidense", NOT "tejano". Spanish "canadiense"
 *    is gender-neutral; "tejano" is masculine, so "una vecina canadiense"
 *    would have become "una vecina tejano". "estadounidense" is the exact
 *    gender-neutral analogue and keeps every article and adjective valid.
 *  - Multi-word phrases come before the bare noun, because replacing only
 *    "Niágara" inside "las cataratas del Niágara" leaves "del el Álamo".
 */
const TIER_C = [
  ["las cataratas del Niágara", "el Álamo"],
  ["cataratas del Niágara", "el Álamo"],
  ["Niagara Falls", "the Alamo"],
  ["Niágara", "el Álamo"],
  ["Niagara", "the Alamo"],
  ["Toronto", "Houston"],
  ["Vancouver", "Austin"],
  ["Montreal", "San Antonio"],
  ["Montréal", "San Antonio"],
  ["Halifax", "Corpus Christi"],
  ["Ottawa", "Dallas"],
  ["Calgary", "El Paso"],
  ["Winnipeg", "Lubbock"],
  ["Edmonton", "Amarillo"],
  ["Banff", "Big Bend"],
  ["Tim Hortons", "Shipley Do-Nuts"],
  ["poutine", "brisket"],
  ["maple", "pecan"],
  ["TTC", "METRO"],
  ["Victoria Day", "Memorial Day"],
  ["Canadians", "Americans"],
  ["Canadian", "American"],
  ["canadienses", "estadounidenses"],
  ["canadiense", "estadounidense"],
  /* Order matters: applyPairs runs these in sequence, so the phrases that
     mention both countries have to collapse before the bare noun is touched,
     or "Estados Unidos y Canadá" becomes the redundant "Estados Unidos y
     Texas". The comma form is listed first because the migration's own city
     mapping produced "Houston, Canadá" — the city was relocated and the
     country was left behind. */
  ["en la provincia de Texas, Canadá", "Texas"],
  [", Canadá y", " y"],
  [", Canadá o", " o"],
  [", Canadá", ", Texas"],
  ["Canadá y Estados Unidos", "Estados Unidos"],
  ["Estados Unidos y Canadá", "Estados Unidos"],
  ["EE. UU. y Canadá", "EE. UU."],
  ["Canadá y EE. UU.", "EE. UU."],
  ["Canada", "Texas"],
  /* Country-level references become the country, not the state: a note that
     an expression is common "en Canadá y Australia" is comparing nations. */
  ["Canadá", "Estados Unidos"],
  ["Ontario", "Texas"],
  ["Alberta", "Texas"],
  ["Quebec", "the Rio Grande Valley"],
  ["Québec", "the Rio Grande Valley"],
  ["provinces", "states"],
  ["province", "state"],
  ["loonie", "dollar coin"],
  ["toonie", "two-dollar bill"]
];

/* Tier B: reported, never auto-replaced. Each of these is either a real
   Spanish word or has a legitimate American meaning, so every occurrence
   needs to be read before it is touched. */
const TIER_B = [
  "flat", "flats", "lift", "lifts", "queue", "queues", "queuing", "bin", "bins",
  "tap", "taps", "holiday", "holidays", "toque", "cheque", "cheques", "biscuit",
  "biscuits", "chemist", "torch", "boot", "football", "mobile", "trousers",
  "rubbish", "petrol", "autumn", "nappy", "cooker", "hoover"
];

const FILES = [
  ...fs.readdirSync(path.join(ROOT, "data", "lessons")).map((f) => path.join("data", "lessons", f)),
  ...fs.readdirSync(path.join(ROOT, "data", "lexicon")).map((f) => path.join("data", "lexicon", f)),
  "data/curriculum.js", "data/slang.js", "data/mature.js", "data/structures.js",
  "data/flashcards.js", "data/lexicon.js", "data/taxonomy.js", "data/lessons.js",
  "i18n.js", "index.html"
].filter((f) => fs.existsSync(path.join(ROOT, f)));

/* Preserve the capitalisation of whatever was matched, so "Neighbour" at the
   start of a sentence does not come back as "neighbor". */
function matchCase(source, replacement) {
  if (source === source.toUpperCase() && source !== source.toLowerCase()) return replacement.toUpperCase();
  if (source[0] === source[0].toUpperCase()) return replacement[0].toUpperCase() + replacement.slice(1);
  return replacement;
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/*
 * Accent-aware word boundaries.
 *
 * This used to be `\\b${term}\\b`, which is wrong for exactly the words this
 * script exists to replace. `\b` is defined against ASCII word characters, so
 * for "Canadá" the closing boundary falls between "á" and a space — both
 * non-word by that definition — and never matches. The first migration
 * therefore replaced "Canada", "Canadian" and "canadiense" while silently
 * skipping all 173 occurrences of "Canadá", and scripts/check-american-english.js
 * shared the same bug, so it reported the result clean.
 *
 * Two copies of one defect will not catch each other. Both are fixed, and the
 * guard now tests its matcher against known-bad strings rather than only
 * against the corpus.
 */
function applyPairs(text, pairs, tally) {
  let out = text;
  for (const [from, to] of pairs) {
    /* Only assert a boundary on an edge that is actually a word character.
       ", Canadá" begins with punctuation, and demanding a non-letter before
       the comma made it unmatchable in "Houston, Canadá" — the very string it
       was added to repair. */
    const word = /[\p{L}\p{N}_]/u;
    const lead = word.test(from[0]) ? "(?<![\\p{L}\\p{N}_])" : "";
    const tail = word.test(from[from.length - 1]) ? "(?![\\p{L}\\p{N}_])" : "";
    const re = new RegExp(`${lead}${escape(from)}${tail}`, "giu");
    out = out.replace(re, (m) => {
      tally.set(from, (tally.get(from) || 0) + 1);
      return matchCase(m, to);
    });
  }
  return out;
}

function run() {
  const apply = process.argv.includes("--apply");
  const tierB = process.argv.includes("--tier-b");

  if (tierB) {
    const re = new RegExp(`\\b(${TIER_B.map(escape).join("|")})\\b`, "gi");
    const found = new Map();
    for (const rel of FILES) {
      const text = fs.readFileSync(path.join(ROOT, rel), "utf8");
      let m;
      while ((m = re.exec(text))) {
        const key = m[1].toLowerCase();
        const ctx = text.slice(Math.max(0, m.index - 60), m.index + 60).replace(/\s+/g, " ");
        if (!found.has(key)) found.set(key, []);
        found.get(key).push(`${rel}: …${ctx}…`);
      }
    }
    const keys = [...found.keys()].sort((a, b) => found.get(b).length - found.get(a).length);
    for (const k of keys) {
      console.log(`\n=== ${k} (${found.get(k).length}) ===`);
      found.get(k).slice(0, 4).forEach((c) => console.log("   " + c));
    }
    console.log(`\ntier B total: ${[...found.values()].reduce((a, c) => a + c.length, 0)} occurrences, ${keys.length} distinct`);
    return;
  }

  const tally = new Map();
  let changedFiles = 0;
  for (const rel of FILES) {
    const abs = path.join(ROOT, rel);
    const before = fs.readFileSync(abs, "utf8");
    const after = applyPairs(before, [...TIER_A, ...TIER_C], tally);
    if (after !== before) {
      changedFiles++;
      if (apply) fs.writeFileSync(abs, after, "utf8");
    }
  }
  const total = [...tally.values()].reduce((a, c) => a + c, 0);
  const sorted = [...tally.entries()].sort((a, b) => b[1] - a[1]);
  for (const [word, n] of sorted) console.log(`  ${word}: ${n}`);
  console.log(`\n${apply ? "APPLIED" : "DRY RUN"} — ${total} replacements across ${changedFiles} files`);
  if (!apply) console.log("re-run with --apply to write");
}

run();
