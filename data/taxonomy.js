/*
 * Controlled vocabularies for the three fields that classify a lesson.
 *
 * `domain`, `register` and `skills` were free text, and free text at 208
 * lessons written by many hands does what free text always does. A count of
 * the finished course found 31 domain values for 208 lessons — including
 * "social" and "social life", and "food", "food and drink" and "food and
 * home" as three separate things — and 57 register values, 39 of which were
 * used exactly once. "friendly practical", "practical polite" and "polite
 * friendly" were all in there, and no reader could say what distinguished
 * them, because nothing did.
 *
 * A tag nobody can apply consistently cannot be filtered on, cannot be
 * counted, and quietly misleads anyone who tries. Worse, 150 of the 208
 * lessons had simply defaulted to "everyday life", so the field carried
 * almost no information at all — and the curriculum was worse still, with all
 * 200 verbs marked "everyday life" and "neutral", which is the same as having
 * no field.
 *
 * So these lists are closed, and a test enforces them. Closing a list is a
 * commitment: adding a value has to be a deliberate edit here, seen by
 * whoever reviews it, rather than a new spelling invented mid-lesson at two
 * in the morning.
 *
 * The register list is deliberately a *scale* rather than a set of adjectives.
 * The question a learner needs answered is not whether a conversation was
 * "warm" or "sincere" but how much social distance it assumes — because that
 * is what decides tú, vos, usted or sumercé, and getting it wrong is the
 * mistake that actually costs them something in Colombia.
 */

/* What the lesson is about. Ordered roughly from private to public life. */
const LESSON_DOMAINS = [
  "family-and-relationships",
  "home-and-neighborhood",
  "food-and-drink",
  "social-life",
  "everyday-life",
  "shopping-and-money",
  "transport-and-travel",
  "health-and-body",
  "work-and-employment",
  "study-and-academia",
  "civic-and-services",
  "plans-and-time"
];

/*
 * How much distance the conversation assumes. This is a scale, and the order
 * matters: it runs from the people you would use vos or tú with to the ones
 * where getting it wrong is a real error.
 */
const LESSON_REGISTERS = [
  "intimate",   /* family, a partner, childhood friends. */
  "familiar",   /* parceros, neighbors you know, workmates your own age. */
  "neutral",    /* the default transaction: a shop, a stranger being helped. */
  "courteous",  /* usted and sumercé; service, elders, anyone owed respect. */
  "formal"      /* institutional, professional, written, or on the record. */
];

/*
 * What practicing the lesson exercises.
 *
 * An attempt to make this discriminating failed twice, and the measurement
 * says why: the lesson schema fixes the row counts, so across 208 lessons
 * `vocabulary` takes two distinct values and `culture` two. There is nothing
 * to threshold. Scoring emphasis on that would have manufactured a signal
 * that does not exist and shipped noise wearing the costume of information.
 *
 * So this field describes the lesson *format*, which is uniform because the
 * format is uniform, and saying so is simply true. `grammar` is the one real
 * discriminator: a structure lesson teaches a grammar point as its subject.
 * The facets worth filtering on are `domain` and `register`, and those vary.
 */
const LESSON_SKILLS = [
  "speaking",
  "listening",
  "reading",
  "pronunciation",
  "vocabulary",
  "grammar",
  "culture",
  "register",
  "context"   /* reading the situation: who is present, and what is expected. */
];

/*
 * The study routes the course advertises. Kept here so the README, the
 * curriculum and the lessons cannot drift apart on their spelling.
 *
 * Two shapes live in this one list, deliberately. The first three are the
 * difficulty tiers every lesson passes through. The rest are the named tracks
 * the landing page advertises, and those specialize: a workplace lesson is
 * tagged `professional-healthcare` rather than a bare `professional`, because
 * "professional" spans a ward, a helpdesk and an interview, and a learner
 * filtering for one does not want the other two.
 *
 * `professional`, `travel` and `heritage` used to be declared here and were
 * removed, because no lesson ever carried them. That is the rule the domain
 * and register lists are already held to a few lines below, and pathways were
 * escaping it only because the test that enforces these lists had never been
 * extended to cover this field.
 */
const LESSON_PATHWAYS = [
  /* Difficulty tiers. Every lesson carries exactly one of these. */
  "foundation",
  "independent",
  "extension",

  /* Named tracks, with specializations where the broad name would mislead. */
  "year-12",
  "year-12-local-mastery",
  "collegiate-academic",
  "professional-customer-service",
  "professional-office",
  "professional-technical",
  "professional-healthcare",
  "professional-interviews"
];

const TAXONOMY = {
  domain: LESSON_DOMAINS,
  register: LESSON_REGISTERS,
  skills: LESSON_SKILLS,
  pathways: LESSON_PATHWAYS
};
