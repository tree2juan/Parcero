/*
 * Propose a module grouping for the lesson catalogue.
 *
 *   node scripts/build-modules.js            # print the proposal
 *   node scripts/build-modules.js --json     # print it as pasteable JSON
 *
 * This is a PROPOSAL TOOL, not a generator, and data/modules.js is authored
 * rather than written by this script. That is the opposite of how provenance
 * and segments work here, so it needs justifying.
 *
 * Segments are derived because a segment is a mechanical function of the
 * content: re-derive it and you get the same answer, so an authored copy can
 * only go stale. A module is not that. It is an editorial decision about what
 * belongs together, it carries a human-written bilingual title, and — once
 * conversation checkpoints hang off it — it is referenced by ID from outside.
 * If the grouping were recomputed at load time, adding one lesson would
 * silently reshuffle module boundaries and quietly repoint every checkpoint at
 * a different set of lessons. Nothing would fail; the course would just be
 * wrong.
 *
 * So the grouping is written down, and tests enforce what actually matters:
 * every lesson lands in exactly one module, every listed ID exists, no module
 * mixes tiers, and sizes stay in band. Add a lesson and the suite tells you it
 * has no module instead of guessing on your behalf. This script exists to make
 * that first placement cheap, and to re-propose if the catalogue ever grows
 * enough to want a different shape.
 */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

function lessonFiles() {
  const dir = path.join(root, "data", "lessons");
  const blocks = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((name) => name.endsWith(".js")).sort().map((name) => `data/lessons/${name}`)
    : [];
  return ["data/lessons.js", ...blocks];
}

const source = [...lessonFiles(), "data/taxonomy.js"].map(read).join("\n");
const { lessons, taxonomy } = vm.runInNewContext(
  `${source}\n({ lessons, taxonomy: TAXONOMY });`, {}, { filename: "modules-input.js" }
);

const TIERS = ["Starter", "Developing", "Extending"];
const TARGET = 9;
const MIN_CELL = 6;
const MAX_CELL = 12;

const tierOf = (lesson) => String(lesson.level || "").split("·")[0].trim();

/*
 * Fold a domain too small to stand alone into its neighbour before anything
 * else happens. Two lessons on civic services is not a module, and the packer
 * cannot fix it later: it treats a domain as atomic, so a 4-lesson cell that
 * survives to packing becomes a 4-lesson module. Merging forward keeps the
 * catalogue's order, and the last cell has to merge backward because it has no
 * successor to join.
 */
function mergeSmall(cells, min) {
  const out = cells.map((c) => c.slice());
  for (let i = 0; i < out.length; i += 1) {
    if (out[i].length >= min || out.length === 1) continue;
    if (i + 1 < out.length) {
      out[i + 1] = out[i].concat(out[i + 1]);
      out.splice(i, 1);
      i -= 1;
    } else {
      out[i - 1] = out[i - 1].concat(out[i]);
      out.splice(i, 1);
    }
  }
  return out;
}

/* Split a domain that is too big on its own into near-equal runs, keeping the
   catalogue's own order so a module is still a contiguous stretch of course. */
function chunk(items, max) {
  if (items.length <= max) return [items];
  const parts = Math.ceil(items.length / max);
  const size = Math.ceil(items.length / parts);
  const out = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
}

/*
 * The same balanced packer deriveSegments uses, and for the same reason: a
 * fixed target lets every early shortfall pile up in the last module. Re-average
 * over what is left and the tail stays the size of its siblings.
 */
function pack(cells, wanted) {
  if (wanted <= 1) return [cells.flat()];
  const total = cells.reduce((sum, c) => sum + c.length, 0);
  const packed = [];
  let current = [];
  let placed = 0;
  for (let i = 0; i < cells.length; i += 1) {
    const cell = cells[i];
    const remainingCells = cells.length - i;
    const remainingModules = wanted - packed.length;
    const even = (total - placed) / remainingModules;
    /*
     * Closing `current` here leaves remainingModules - 1 modules to fill from
     * remainingCells cells, so it is feasible whenever there are at least that
     * many cells left. The comparison is strict: having exactly as many cells
     * as modules left is fine — each one becomes a module. Using <= here made
     * the packer refuse to close when closing was precisely feasible, so with
     * six cells and six modules it never closed at all and returned one module
     * holding an entire tier.
     */
    const mustKeep = remainingCells < remainingModules - 1;
    if (current.length > 0 && !mustKeep && remainingModules > 1) {
      if (current.length + cell.length - even >= even - current.length) {
        packed.push(current);
        placed += current.length;
        current = [];
      }
    }
    current = current.concat(cell);
  }
  if (current.length) packed.push(current);
  return packed;
}

const proposal = [];
for (const tier of TIERS) {
  const inTier = lessons.filter((l) => tierOf(l) === tier);
  const byDomain = [];
  for (const domain of taxonomy.domain) {
    const items = inTier.filter((l) => l.domain === domain);
    if (items.length) byDomain.push(items);
  }
  const cells = [];
  for (const cell of mergeSmall(byDomain, MIN_CELL)) chunk(cell, MAX_CELL).forEach((p) => cells.push(p));
  const wanted = Math.max(1, Math.round(inTier.length / TARGET));
  for (const group of pack(cells, wanted)) {
    const domains = [...new Set(group.map((l) => l.domain))];
    proposal.push({ tier, domains, lessons: group.map((l) => l.id) });
  }
}

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(proposal, null, 2));
} else {
  let n = 0;
  for (const m of proposal) {
    n += 1;
    console.log(`\n${String(n).padStart(2)}. ${m.tier} — ${m.domains.join(" + ")}  (${m.lessons.length} lessons)`);
    for (const id of m.lessons) console.log(`      ${id}`);
  }
  const sizes = proposal.map((m) => m.lessons.length);
  const covered = proposal.reduce((s, m) => s + m.lessons.length, 0);
  console.log(`\n${proposal.length} modules, ${covered} lessons, sizes ${Math.min(...sizes)}-${Math.max(...sizes)}`);
}
