/*
 * Re-tag every lesson's domain, register and skills from what it contains.
 *
 * These three fields were free text and had rotted into decoration: 31 domain
 * spellings for 208 lessons with 150 of them defaulted to "everyday life", 57
 * register values of which 39 were used once, and a skills list that said
 * "speaking, listening, context" for almost everything. data/taxonomy.js
 * closes the vocabularies; this assigns values from evidence already in the
 * lesson rather than asking anyone to re-judge 208 lessons by hand.
 *
 * The evidence is good. Every lesson carries a five-part setting (who, what,
 * when, where, why) and an `address` block naming the pronoun the characters
 * use and why — which is a far better register signal than an adjective,
 * because tú/vos/usted *is* the social distance in Colombian Spanish.
 *
 * Run: node scripts/retag-lessons.js [--dry]
 */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const { dataSource, lessonFiles, read } = require(path.join(root, "test", "data-source.js"));
const dry = process.argv.includes("--dry");
/* --show prints one lesson in N with its assignment, so the classifier can be
   read against real content instead of trusted on its distribution alone. */
const showEvery = Number((process.argv.find((arg) => arg.startsWith("--show=")) || "").split("=")[1] || 0);

const { lessons, curriculum } = vm.runInNewContext(`${dataSource({ schema: true })}\n({ lessons, curriculum });`);
const taxonomy = vm.runInNewContext(`${read("data/taxonomy.js")}\nTAXONOMY;`);

/* Everything the lesson says about itself, as one lowercased haystack. */
function corpus(lesson) {
  const side = lesson.es || {};
  const setting = side.setting || {};
  const rows = (side.vocabulary || []).map((row) => `${row.term || ""} ${row.meaning || ""}`).join(" ");
  return [
    lesson.id, side.title, side.situation,
    setting.who, setting.what, setting.when, setting.where, setting.why,
    rows
  ].join(" ").toLowerCase();
}

/*
 * Domain by weighted vote, not by rule order.
 *
 * The first version took the first matching rule from a hand-ordered list.
 * Reading its output against real lessons showed why that fails: a beach
 * sancocho came out "shopping-and-money", a service-station oil check came
 * out "study-and-academia", and the corrientazo lunch came out "work" because
 * office workers eat it. One incidental word anywhere in the lesson decided
 * the tag. Six of nineteen hand-checked lessons were wrong.
 *
 * Two things fix it. First, weight by where the word appears — the id and
 * title are what the lesson is *about*, while the setting and vocabulary are
 * merely what it mentions. Second, score every domain and take the winner
 * instead of stopping at the first hit, so "sancocho" in the title outvotes
 * "pay" in a vocabulary row.
 *
 * The patterns carry both languages because the corpus is bilingual: ids,
 * titles and settings are written in English, the vocabulary is Spanish.
 * Matching only Spanish threw away the most indicative evidence there is.
 */
const DOMAIN_RULES = [
  ["health-and-body", /cl[ií]nica|m[eé]dic|hospital|\beps\b|farmacia|drogu[ei]r[ií]a|enferm|urgencias|odont|dolor de|s[ií]ntoma|vacun|doctor|clinic|pharmac|surger|operat|recover|sympt|nurse|dentist|\bill\b|\bsick\b|health|injur|medicine|prescription/],
  ["study-and-academia", /universidad|universitar|profesor|estudiante|seminari|clase de|tesis|examen|colegio|semestre|biblioteca|acad[eé]mic|monitor[ií]a|parcial|universit|professor|student|\bexam\b|workshop|lecture|library|homework|classroom|\bcourse\b|school|teacher|study|studies/],
  ["work-and-employment", /oficina|jefe|jefa|reuni[oó]n de trabajo|empresa|entrevista de trabajo|hoja de vida|contrato|n[oó]mina|colega|standup|maestro de obra|office|\bboss\b|employer|\bjob\b|interview|colleague|contract|payroll|shift|workplace|freelanc|invoice for work|client|deadline|meeting|project|design review/],
  ["civic-and-services", /notar[ií]a|alcald[ií]a|tr[aá]mite|c[eé]dula|acueducto|servicio p[uú]blico|factura de la luz|polic[ií]a|junta de acci[oó]n|registradur[ií]a|impuesto|denuncia|secretar[ií]a de|notary|town hall|paperwork|\bid card\b|utility|police|complaint|permit|registry|\btax\b|bureaucra|council/],
  ["transport-and-travel", /taxi|\bbus\b|transmilenio|metro\b|aeropuerto|vuelo|terminal de|carretera|peaje|\bmoto\b|buseta|colectivo|maleta|chiva|lancha|airport|flight|\bboat\b|ferry|\bdock\b|\broad\b|petrol|service station|\boil\b|tyre|\bfuel\b|driving|\bdrive\b|journey|travel|luggage|suitcase|commute|station/],
  ["shopping-and-money", /tienda|almac[eé]n|mercado|comprar|precio|\bplata\b|banco|vueltas|rebaja|el hueco|caja\b|fiado|descuento|talla|probador|\bshop\b|\bstore\b|market|\bbuy\b|price|\bbank\b|change back|discount|receipt|\btab\b|credit|\bcash\b|paying|refund|bargain/],
  ["food-and-drink", /cocina|almuerzo|restaurante|arepa|ajiaco|tinto|panader[ií]a|receta|cena\b|desayuno|sancocho|bandeja|fritanga|comida|corrientazo|empanada|aguapanela|caf[eé]|coffee|lunch|restaurant|breakfast|dinner|\bmeal\b|cook|recipe|bakery|juice|\bsoup\b|eating|\bcafe\b|kitchen|menu/],
  ["family-and-relationships", /mam[aá]|pap[aá]|abuel|hermano|hermana|novi[ao]|espos[ao]|pareja|\bt[ií]a\b|\bt[ií]o\b|primo|sobrin|suegr|familia|hij[ao]|\bmum\b|\bdad\b|grandmother|grandfather|brother|sister|\baunt\b|\buncle\b|cousin|\bwife\b|husband|partner|family|daughter|\bson\b|in-law/],
  ["home-and-neighbourhood", /apartamento|vecin|porter[ií]a|arriendo|edificio|barrio|conjunto|administraci[oó]n|inquilin|mudanza|finca|apartment|neighbour|\bflat\b|building|\brent\b|landlord|doorway|\bhouse\b|moving in|caretaker|balcony|plumb/],
  ["social-life", /fiesta|parche|rumba|cumplea[ñn]os|paseo|amig[ao]s|discoteca|partido|concierto|carnaval|feria|parchar|party|birthday|night out|friends|concert|\bmatch\b|carnival|festival|rehearsal|danc|celebrat|drinks|hanging out|\bband\b/],
  ["plans-and-time", /agenda|horario|reprogram|quedar en|puntual|schedule|postpone|cancel|confirm|punctual|running late|timetable|diary|reschedul/]
];

/* Heavier weight on what the lesson is about than on what it mentions. */
function weighted(lesson) {
  const side = lesson.es || {};
  const setting = side.setting || {};
  const vocab = (side.vocabulary || []).map((row) => `${row.term || ""} ${row.meaning || ""}`).join(" ");
  return [
    [`${lesson.id} ${side.title || ""}`, 5],
    [`${setting.what || ""} ${side.situation || ""}`, 2],
    [`${setting.who || ""} ${setting.where || ""} ${setting.why || ""} ${setting.when || ""}`, 1],
    [vocab, 1]
  ].map(([text, weight]) => [String(text).toLowerCase(), weight]);
}

function classifyDomain(lesson) {
  const fields = weighted(lesson);
  let best = "everyday-life";
  let bestScore = 0;
  for (const [name, pattern] of DOMAIN_RULES) {
    const global = new RegExp(pattern.source, "gi");
    let score = 0;
    for (const [text, weight] of fields) {
      /* Distinct terms only: one word repeated eight times in a vocabulary
         list is one piece of evidence, not eight. */
      const hits = new Set((text.match(global) || []).map((hit) => hit.trim()));
      score += hits.size * weight;
    }
    if (score > bestScore) {
      best = name;
      bestScore = score;
    }
  }
  return best;
}

/*
 * Register from the pronoun the lesson itself declares, not from adjectives.
 *
 * usted splits two ways and the split is real: usted with a shopkeeper is
 * ordinary courtesy, usted in a notary's office is formality. The
 * institutional check is what separates them.
 */
const INSTITUTIONAL = /notar[ií]a|alcald[ií]a|entrevista|tribunal|juzgado|banco|universidad|seminari|acad[eé]mic|profesor|gerente|contrato|oficial|registradur[ií]a|denuncia|m[eé]dic|cl[ií]nica/;
const INTIMATE = /mam[aá]|pap[aá]|abuel|hermano|hermana|espos[ao]|novi[ao]|pareja|hij[ao]|familia/;

function classifyRegister(lesson) {
  const form = String((lesson.es && lesson.es.address && lesson.es.address.form) || "").toLowerCase();
  const text = corpus(lesson);
  if (form.includes("usted") || form.includes("sumercé") || form.includes("sumerce")) {
    return INSTITUTIONAL.test(text) ? "formal" : "courteous";
  }
  if (form.includes("vos") || form.includes("tú") || form.includes("tu")) {
    return INTIMATE.test(text) ? "intimate" : "familiar";
  }
  return "neutral";
}

/*
 * Skills, and an honest admission about them.
 *
 * Two attempts at making this field discriminating both failed, and the
 * measurement explains why: the lesson schema fixes the row counts. Across
 * 208 lessons `vocabulary` takes two distinct values (7 or 9), `culture` two
 * (3 or 4), `pitfalls` two, `pronunciation` three. There is no variation to
 * threshold on. A percentile cut over two distinct values does not measure
 * emphasis, it measures whether a lesson has four culture notes instead of
 * three — and shipping that as "this lesson emphasises culture" would be
 * worse than the uniform tags it replaced, because it would look informative
 * while being noise.
 *
 * So `skills` says what the lesson *format* covers, which is uniform because
 * the format is uniform, and that is simply true. The two genuinely varying
 * facets — what the lesson is about and how much distance it assumes — are
 * `domain` and `register`, and those are where filtering should happen.
 *
 * The one real exception is grammar: a structure lesson teaches a grammar
 * point as its subject, and no verb lesson does.
 */
const FORMAT_SKILLS = ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"];

function classifySkills(lesson) {
  const skills = [...FORMAT_SKILLS];
  if (lesson.structure) skills.push("grammar");
  return [...new Set(skills)].filter((skill) => taxonomy.skills.includes(skill));
}

/* ---------- rewriting ---------- */

const plan = new Map();
for (const lesson of lessons) {
  plan.set(lesson.id, {
    domain: classifyDomain(lesson),
    register: classifyRegister(lesson),
    skills: classifySkills(lesson)
  });
}

/*
 * The curriculum needs the same treatment and is worse off: all 200 entries
 * say "everyday life" and "neutral", which is the same as having no field.
 *
 * Rather than classify a bare verb — "ser" is not *about* anything — take the
 * tags from the lesson that teaches it. Every verb has exactly one lesson, so
 * the mapping is total, and deriving it this way means the curriculum and the
 * lessons cannot disagree about what a verb is for. Curriculum `skills` is
 * left alone: there it means which skills the verb itself demands, which is a
 * different claim from what a lesson format exercises.
 *
 * `register` is deliberately NOT propagated. A lesson's register is a fact
 * about that conversation, not about the verb: the lesson teaching `tener`
 * happens to use tú, which does not make `tener` an intimate word. Copying it
 * across would state 200 unreviewed sociolinguistic claims in the confident
 * voice of data, which is exactly what test/content.test.js forbids while
 * these entries still carry a reviewStatus. The seeded placeholder stays, and
 * is rewritten back in case an earlier run overwrote it.
 */
const CURRICULUM_PLACEHOLDER_REGISTER = "neutral";
const byVerb = new Map();
for (const lesson of lessons) {
  if (lesson.verb && !byVerb.has(lesson.verb)) byVerb.set(lesson.verb, plan.get(lesson.id));
}
let orphanVerbs = 0;
for (const entry of curriculum) {
  const tags = byVerb.get(entry.spanish) || byVerb.get(entry.id);
  if (!tags) {
    orphanVerbs += 1;
    continue;
  }
  plan.set(entry.id, {
    domain: tags.domain,
    register: entry.reviewStatus ? CURRICULUM_PLACEHOLDER_REGISTER : tags.register,
  });
}

let changed = 0;
const unwritten = [];

for (const file of lessonFiles()) {
  const full = path.join(root, file);
  const original = fs.readFileSync(full, "utf8");
  const eol = original.includes("\r\n") ? "\r\n" : "\n";
  const lines = original.split(/\r?\n/);
  let current = null;
  let pending = null;

  /* Every lesson should have all three fields rewritten. If one is missing the
     regex did not match what is actually on disk, and silently doing nothing
     is the failure mode that matters here — record it rather than assume. */
  const flush = () => {
    if (current && pending && pending.size) {
      unwritten.push(`${current} (${[...pending].join(", ")})`);
    }
  };

  for (let i = 0; i < lines.length; i += 1) {
    const idMatch = /^\s*id:\s*"([^"]+)"/.exec(lines[i]);
    if (idMatch && plan.has(idMatch[1])) {
      flush();
      current = idMatch[1];
      pending = new Set(Object.keys(plan.get(current)));
      continue;
    }
    if (!current || !pending || !pending.size) continue;
    for (const field of pending) {
      const re = new RegExp(`^(\\s*)${field}:\\s*(\\[[^\\]]*\\]|"[^"]*")(,?)\\s*$`);
      const match = re.exec(lines[i]);
      if (!match) continue;
      const value = plan.get(current)[field];
      const rendered = Array.isArray(value)
        ? `[${value.map((item) => `"${item}"`).join(", ")}]`
        : `"${value}"`;
      lines[i] = `${match[1]}${field}: ${rendered}${match[3]}`;
      pending.delete(field);
      break;
    }
  }
  flush();
  const next = lines.join(eol);
  if (next !== original) {
    changed += 1;
    if (!dry) fs.writeFileSync(full, next);
  }
}

/*
 * data/curriculum.js is not written like a lesson file. Its 200 entries are
 * minified JSON on a single line — `{"id":"verb-1",...}` with quoted keys —
 * so the line-oriented rewrite above, which looks for `id: "..."`, matched
 * nothing and wrote nothing. It failed silently, which is the one outcome
 * this script is supposed to make impossible.
 *
 * So the curriculum gets a parser rather than a regex, and the count of
 * changed fields is returned so the caller can refuse to believe a run that
 * claims success while touching zero entries.
 */
const rewriteCurriculum = () => {
  const file = "data/curriculum.js";
  const full = path.join(root, file);
  const original = fs.readFileSync(full, "utf8");
  const eol = original.includes("\r\n") ? "\r\n" : "\n";
  const lines = original.split(/\r?\n/);
  let fields = 0;
  let found = false;

  for (let i = 0; i < lines.length; i += 1) {
    /* Anchored to one line on purpose: the file also declares fluencyItems,
       and a regex spanning lines swallows both arrays and stops being JSON. */
    const match = /^(const curriculum = )(\[.*\])(;)$/.exec(lines[i]);
    if (!match) continue;
    found = true;
    const entries = JSON.parse(match[2]);
    for (const entry of entries) {
      const tags = plan.get(entry.id);
      if (!tags) continue;
      for (const [field, value] of Object.entries(tags)) {
        if (entry[field] === value) continue;
        entry[field] = value;
        fields += 1;
      }
    }
    lines[i] = `${match[1]}${JSON.stringify(entries)}${match[3]}`;
  }

  if (!found) throw new Error("data/curriculum.js: no `const curriculum = [...]` line to rewrite");
  const next = lines.join(eol);
  if (next !== original && !dry) fs.writeFileSync(full, next);
  if (next !== original) changed += 1;
  return fields;
};

const curriculumFields = rewriteCurriculum();

const tally = (field) => {
  const counts = new Map();
  for (const value of plan.values()) {
    if (value[field] === undefined) continue;
    const items = Array.isArray(value[field]) ? value[field] : [value[field]];
    for (const item of items) counts.set(item, (counts.get(item) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
};

console.log(`${dry ? "would rewrite" : "rewrote"} ${changed} file(s): ${lessons.length} lessons + ${curriculum.length} curriculum entries`);
console.log(`curriculum: ${curriculumFields} field(s) changed`);
if (orphanVerbs) console.log(`${orphanVerbs} curriculum entries have no lesson and keep their tags`);
for (const field of ["domain", "register", "skills"]) {
  console.log(`\n${field}:`);
  for (const [name, count] of tally(field)) console.log(`  ${String(count).padStart(4)}  ${name}`);
}
if (unwritten.length) console.log("\nnot found in any file:", unwritten.join(", "));

if (showEvery > 0) {
  console.log("\nsample:");
  let n = 0;
  for (const lesson of lessons) {
    if (n++ % showEvery) continue;
    const tags = plan.get(lesson.id);
    const setting = (lesson.es && lesson.es.setting) || {};
    const form = ((lesson.es && lesson.es.address) || {}).form || "?";
    console.log(`  ${lesson.id}`);
    console.log(`    -> ${tags.domain} / ${tags.register}  [${form}]`);
    console.log(`       ${String(setting.what || "").slice(0, 88)}`);
  }
}
