const lessons = [{
  id: "greeting-at-the-cafe",
  level: "Starter · Everyday life",
  skills: ["listening", "speaking", "context", "pronunciation"],
  domain: "everyday life",
  register: "friendly informal",
  pathways: ["foundation", "professional-customer-service"],
  review: "pending",
  es: {
    title: "Un café y una conversación",
    situation: "Pides un café en una tienda de barrio de Bogotá.",
    dialogue: [
      ["Camila", "¡Buenas! ¿Cómo estás?", "Hi! How are you?", "BWEH-nas, KOH-moh ehs-TAHS"],
      ["Alex", "Bien, gracias. ¿Me regalas un tinto, por favor?", "Good, thanks. Could I have a black coffee, please?", "byen GRAH-syas. meh reh-GAH-las oon TEEN-toh por fah-VOR"],
      ["Camila", "Claro. Ya te lo traigo.", "Of course. I'll bring it right over.", "KLAH-roh. yah teh loh TRAH-ee-goh"]
    ],
    vocabulary: [
      ["¿Me regalas...?", "A friendly Colombian way to ask for something; literally, “Will you gift me...?”"],
      ["tinto", "In Colombia, a small black coffee—not red wine."],
      ["ya", "Often means “right away” or “in a moment” here, not only “already.”"]
    ],
    note: "“Buenas” is a warm, common short greeting in Colombia. “¿Me regalas...?” is polite in everyday service situations, but its literal wording does not mean the item is free.",
    prompt: "What does Alex mean by “¿Me regalas un tinto?”",
    choices: ["Could you give me a small black coffee, please?", "Would you like a glass of red wine?", "Can I buy you a gift?"],
    answer: 0
  },
  en: {
    title: "Coffee and a quick chat",
    situation: "You order coffee at a neighborhood café.",
    dialogue: [
      ["Camila", "Hi! How are you?", "¡Buenas! ¿Cómo estás?", "hai, hau ar yu"],
      ["Alex", "Good, thanks. Could I have a black coffee, please?", "Bien, gracias. ¿Me regalas un tinto, por favor?", "gud, thangks. kud ai hav uh blak KAW-fee, pleez"],
      ["Camila", "Of course. I'll bring it right over.", "Claro. Ya te lo traigo.", "uhv KORS. ail bring it rait OH-ver"]
    ],
    vocabulary: [
      ["Could I have...?", "A polite, natural way to order or request something."],
      ["right over", "Means very soon; it does not mean physically to the right."],
      ["black coffee", "Coffee served without milk or cream."]
    ],
    note: "“Could I have...?” softens a request. In cafés, it is more conversational than a direct “Give me...” and can be followed by “please.”",
    prompt: "What does “I’ll bring it right over” mean?",
    choices: ["I will bring it very soon.", "I will carry it to the right side.", "I brought it yesterday."],
    answer: 0
  }
}, {
  id: "taxi-to-downtown",
  level: "Starter · Getting around",
  skills: ["listening", "speaking", "context"],
  domain: "transport",
  register: "polite service",
  pathways: ["foundation", "professional-customer-service"],
  review: "pending",
  es: {
    title: "Un taxi hasta el centro",
    situation: "Tomas un taxi en Medellín y quieres saber el precio antes de subir.",
    dialogue: [
      ["Alex", "Buenas, ¿me lleva al centro?", "Hi, can you take me downtown?", "BWEH-nas, meh YEH-bah al SEN-troh"],
      ["Conductor", "Claro que sí. ¿Por la avenida o por dentro?", "Of course. Along the avenue or through the side streets?", "KLAH-roh keh SEE. por lah ah-beh-NEE-dah oh por DEN-troh"],
      ["Alex", "Por donde sea más rápido. ¿Cuánto me cobra?", "Whichever is faster. How much will you charge me?", "por DON-deh SEH-ah mas RAH-pee-doh. KWAN-toh meh KOH-brah"],
      ["Conductor", "Lo que marque el taxímetro, no más.", "Just whatever the meter shows.", "loh keh MAR-keh el tak-SEE-meh-troh, noh mas"]
    ],
    vocabulary: [
      ["¿Me lleva a...?", "The everyday way to ask a driver to take you somewhere; far more natural than a literal “¿Puede conducir a...?”"],
      ["¿Cuánto me cobra?", "“How much will you charge me?” Asking before you get in is ordinary here, not confrontational."],
      ["por dentro", "Through the smaller inner streets rather than the main avenue, usually to avoid traffic."]
    ],
    note: "Confirming the fare before the trip is normal in Colombian cities and is not treated as distrust. Agreeing to the taxímetro keeps the price on the meter instead of a negotiated figure.",
    prompt: "Why does Alex ask “¿Cuánto me cobra?” before getting in?",
    choices: ["To settle the price before the trip starts.", "To complain about the driver.", "To ask for a loyalty discount."],
    answer: 0
  },
  en: {
    title: "A ride downtown",
    situation: "You take a taxi and want to know the fare before you get in.",
    dialogue: [
      ["Alex", "Hi, could you take me downtown?", "Buenas, ¿me lleva al centro?", "hai, kud yu teik mi DAUN-taun"],
      ["Driver", "Sure. Highway or surface streets?", "Claro. ¿Por la autopista o por calles internas?", "shur. HAI-wei or SER-fis strits"],
      ["Alex", "Whichever is faster. What’s the fare?", "Por donde sea más rápido. ¿Cuánto es la tarifa?", "wich-EV-er iz FAS-ter. wats dhuh fer"],
      ["Driver", "Just what the meter says.", "Solo lo que marque el taxímetro.", "yast wat dhuh MII-ter sez"]
    ],
    vocabulary: [
      ["Could you take me to...?", "A polite, natural request to a driver; “Drive me to...” sounds like an order."],
      ["fare", "The price of the ride. “What’s the fare?” is the standard question."],
      ["surface streets", "Ordinary city streets, as opposed to the highway."]
    ],
    note: "“Just what the meter says” is a short answer built on ellipsis—English drops the obvious words. The full sentence would be “It will be just what the meter says.”",
    prompt: "What is the driver promising with “Just what the meter says”?",
    choices: ["The metered price, with nothing added.", "A flat discount.", "A free ride downtown."],
    answer: 0
  }
}, {
  id: "market-and-la-napa",
  level: "Starter · Everyday life",
  skills: ["listening", "speaking", "context", "culture"],
  domain: "shopping",
  register: "friendly informal",
  pathways: ["foundation"],
  review: "pending",
  es: {
    title: "En la plaza de mercado",
    situation: "Compras fruta en una plaza de mercado y el vendedor te da algo de más.",
    dialogue: [
      ["Alex", "Buenas, ¿a cómo está la libra de mango?", "Hi, how much is a pound of mango?", "BWEH-nas, ah KOH-moh es-TAH lah LEE-brah deh MAN-goh"],
      ["Vendedora", "A tres mil, mi amor. ¿Le empaco dos libras?", "Three thousand, dear. Shall I bag up two pounds for you?", "ah tres meel, mee ah-MOR. leh em-PAH-koh dos LEE-bras"],
      ["Alex", "Regáleme dos, por favor.", "Two, please.", "reh-GAH-leh-meh dos, por fah-VOR"],
      ["Vendedora", "Listo. Y le doy la ñapa, ¿bueno?", "Done. And here’s a little extra, all right?", "LEES-toh. ee leh doy lah NYAH-pah, BWEH-noh"]
    ],
    vocabulary: [
      ["¿A cómo está...?", "“What’s the going price for...?” Used for goods sold by weight, where the price changes."],
      ["la ñapa", "A small free extra added to a purchase as goodwill. Accepting it warmly is part of the exchange."],
      ["mi amor / mija", "Warm address terms used by vendors with customers; friendly here, not romantic."]
    ],
    note: "“Regáleme” works like “¿Me regalas...?” from the café lesson—it is a soft request, not a request for something free. Terms like “mi amor” from a vendor are ordinary market warmth; you are not expected to use them back.",
    prompt: "What is “la ñapa”?",
    choices: ["A small extra the seller adds for free.", "A tax added at the market.", "A receipt you must keep."],
    answer: 0
  },
  en: {
    title: "At the farmers market",
    situation: "You buy fruit at a market stall and the vendor throws in a little extra.",
    dialogue: [
      ["Alex", "Hi, how much are the mangoes?", "Buenas, ¿a cómo están los mangos?", "hai, hau moch ar dhuh MANG-gouz"],
      ["Vendor", "Three dollars a pound. How many can I get you?", "A tres dólares la libra. ¿Cuántas le doy?", "thrii DAH-lerz uh paund. hau MEN-ii kan ai get yu"],
      ["Alex", "Two pounds, please.", "Dos libras, por favor.", "tuu paundz, pliiz"],
      ["Vendor", "You got it. I’ll throw in an extra one.", "De una. Le agrego uno de más.", "yu gat it. ail throu in an EKS-truh wan"]
    ],
    vocabulary: [
      ["How much are...?", "Use “are” with countable plurals (mangoes) and “is” with uncountable ones (rice)."],
      ["How many can I get you?", "A friendly service question meaning “How many would you like?”"],
      ["throw in", "To add something for free. It has nothing to do with throwing."]
    ],
    note: "“You got it” means “yes, certainly”—it is a warm confirmation, not a statement that you already have the item. Service English leans on short idioms like this one.",
    prompt: "What does “I’ll throw in an extra one” mean?",
    choices: ["I will add one more at no cost.", "I will discard one.", "I will toss it to you."],
    answer: 0
  }
}, {
  id: "making-plans-parche",
  level: "Developing · Social life",
  skills: ["listening", "speaking", "context", "culture"],
  domain: "social life",
  register: "close informal",
  pathways: ["foundation", "year-12-local-mastery"],
  review: "pending",
  es: {
    title: "¿Cuál es el parche?",
    situation: "Un amigo te escribe para organizar un plan el fin de semana.",
    dialogue: [
      ["Santiago", "¡Quiubo, parce! ¿Cuál es el parche el sábado?", "Hey, buddy! What’s the plan on Saturday?", "KYOO-boh, PAR-seh. kwal es el PAR-cheh el SAH-bah-doh"],
      ["Alex", "Todavía nada. ¿Vos qué tenés en mente?", "Nothing yet. What do you have in mind?", "toh-dah-VEE-ah NAH-dah. vos keh teh-NES en MEN-teh"],
      ["Santiago", "Hay un concierto en el centro. ¿Se le mide?", "There’s a concert downtown. Are you up for it?", "ai oon kon-SYER-toh en el SEN-troh. seh leh MEE-deh"],
      ["Alex", "De una. Cuadramos la hora mañana.", "Absolutely. We’ll sort out the time tomorrow.", "deh OO-nah. kwah-DRAH-mos lah OH-rah mah-NYAH-nah"]
    ],
    vocabulary: [
      ["parche", "A hangout, plan, or the group of friends itself. “Parcero/parce” is the friend."],
      ["de una", "“Absolutely / right away.” An enthusiastic yes."],
      ["cuadrar", "To arrange or lock in a detail such as a time or place."]
    ],
    note: "In and around Medellín, friends often use “vos” (vos tenés, vos sabés) where Bogotá would use “tú” or even “usted”. Colombians also use “usted” affectionately with close friends and family, so a formal-looking pronoun is not always distance.",
    prompt: "What is Alex saying with “De una”?",
    choices: ["Yes, definitely—count me in.", "Only one person can come.", "Maybe next week instead."],
    answer: 0
  },
  en: {
    title: "What’s the plan?",
    situation: "A friend messages you to put together weekend plans.",
    dialogue: [
      ["Sam", "Hey! Any plans for Saturday?", "¡Hola! ¿Tienes planes para el sábado?", "hei. EN-ii planz for SAT-er-dei"],
      ["Alex", "Nothing yet. What do you have in mind?", "Todavía nada. ¿Qué tienes en mente?", "NOTH-ing yet. wat du yu hav in maind"],
      ["Sam", "There’s a concert downtown. Are you up for it?", "Hay un concierto en el centro. ¿Te animas?", "dherz uh KAN-sert DAUN-taun. ar yu op for it"],
      ["Alex", "I’m in. Let’s nail down a time tomorrow.", "Cuenten conmigo. Cuadramos la hora mañana.", "aim in. lets neil daun uh taim tuh-MAR-ou"]
    ],
    vocabulary: [
      ["Are you up for it?", "“Do you feel like doing it?” Not a question about standing up."],
      ["I’m in", "A short, enthusiastic yes to a shared plan."],
      ["nail down", "To settle a detail firmly, such as a time or price."]
    ],
    note: "Casual English invitations are usually indirect: “Any plans for Saturday?” is an invitation, not just a question. Answering with only “No” can accidentally close the door, so add what you are open to.",
    prompt: "What does “Let’s nail down a time” mean?",
    choices: ["Let’s agree on a definite time.", "Let’s attach something to a wall.", "Let’s cancel the plan."],
    answer: 0
  }
}, {
  id: "at-the-clinic",
  level: "Developing · Health",
  skills: ["listening", "speaking", "grammar", "context"],
  domain: "healthcare",
  register: "formal polite",
  pathways: ["year-12-local-mastery", "professional-healthcare"],
  review: "pending",
  es: {
    title: "Una cita médica",
    situation: "Vas a una cita médica y tienes que describir un síntoma.",
    dialogue: [
      ["Doctora", "Siga, por favor. ¿Qué la trae por aquí?", "Come in, please. What brings you here?", "SEE-gah, por fah-VOR. keh lah TRAH-eh por ah-KEE"],
      ["Alex", "Me duele la garganta hace tres días.", "My throat has hurt for three days.", "meh DWEH-leh lah gar-GAN-tah AH-seh tres DEE-as"],
      ["Doctora", "¿Ha tenido fiebre? ¿Está tomando algún medicamento?", "Have you had a fever? Are you taking any medication?", "ah teh-NEE-doh FYEH-breh. es-TAH toh-MAN-doh al-GOON meh-dee-kah-MEN-toh"],
      ["Alex", "Fiebre no. Solo algo para el dolor.", "No fever. Just something for the pain.", "FYEH-breh noh. SOH-loh AL-goh PAH-rah el doh-LOR"]
    ],
    vocabulary: [
      ["Me duele...", "“... hurts me.” The body part is the subject: me duele la garganta, me duelen los oídos."],
      ["hace tres días", "“For three days / three days ago.” “Hace + time” with the present tense describes something still going on."],
      ["Siga", "In Colombia, an inviting “come in” or “go ahead”, not only “continue.”"]
    ],
    note: "Colombian clinics usually route care through your EPS (health provider), so staff may ask which EPS you belong to before anything else. “Siga” at a doorway is an invitation, and “¿Qué la trae por aquí?” is a warm, standard opening question.",
    prompt: "What does “Me duele la garganta hace tres días” tell the doctor?",
    choices: ["The sore throat started three days ago and continues.", "The throat hurt once, three days ago.", "The pain will start in three days."],
    answer: 0
  },
  en: {
    title: "A doctor’s appointment",
    situation: "You go to a medical appointment and need to describe a symptom.",
    dialogue: [
      ["Doctor", "Come on in. What brings you in today?", "Siga. ¿Qué la trae hoy?", "kom an in. wat bringz yu in tuh-DEI"],
      ["Alex", "I’ve had a sore throat for three days.", "Me duele la garganta hace tres días.", "aiv had uh sor throut for thrii deiz"],
      ["Doctor", "Any fever? Are you on any medication?", "¿Fiebre? ¿Está tomando algún medicamento?", "EN-ii FII-ver. ar yu an EN-ii med-i-KEI-shun"],
      ["Alex", "No fever. Just something for the pain.", "Fiebre no. Solo algo para el dolor.", "nou FII-ver. yast SOM-thing for dhuh pein"]
    ],
    vocabulary: [
      ["I’ve had ... for three days", "Present perfect with “for” shows something started earlier and is still true. “I had it for three days” means it is over."],
      ["sore throat", "The fixed phrase for throat pain; English does not say “my throat hurts me.”"],
      ["on any medication", "“On” here means currently taking. “Are you on anything?” is common in clinics."]
    ],
    note: "The present perfect is the core clinic tense: “I’ve had”, “it’s been”, “I’ve been feeling”. Using the simple past instead tells the clinician the problem has already resolved.",
    prompt: "Why does Alex say “I’ve had a sore throat” instead of “I had a sore throat”?",
    choices: ["Because it started three days ago and is still happening.", "Because it is more formal.", "Because it finished yesterday."],
    answer: 0
  }
}, {
  id: "team-standup",
  level: "Developing · Workplace",
  skills: ["listening", "speaking", "context", "register"],
  domain: "workplace",
  register: "professional neutral",
  pathways: ["professional-office", "professional-technical"],
  review: "pending",
  es: {
    title: "La reunión de seguimiento",
    situation: "Cuentas el avance de tu trabajo en una reunión corta de equipo.",
    dialogue: [
      ["Laura", "¿Cómo vamos con el reporte de septiembre?", "How are we doing with the September report?", "KOH-moh BAH-mos kon el reh-POR-teh deh sep-TYEM-breh"],
      ["Alex", "Ya quedó el borrador. Me falta revisar las cifras.", "The draft is done. I still need to check the figures.", "yah keh-DOH el bor-rah-DOR. meh FAL-tah reh-bee-SAR las SEE-fras"],
      ["Laura", "Perfecto. ¿Algo pendiente de mi lado?", "Great. Anything outstanding on my side?", "per-FEK-toh. AL-goh pen-DYEN-teh deh mee LAH-doh"],
      ["Alex", "Solo la aprobación. Le hago seguimiento mañana.", "Just the approval. I’ll follow up on it tomorrow.", "SOH-loh lah ah-proh-bah-SYON. leh AH-goh seh-gee-MYEN-toh mah-NYAH-nah"]
    ],
    vocabulary: [
      ["quedó / ya quedó", "“It’s done / it’s ready.” Extremely common in Colombian workplaces for finished work."],
      ["me falta...", "“I still need to...” Literally “it is lacking to me”, so the task is the subject."],
      ["hacer seguimiento", "To follow up on something and keep it moving."]
    ],
    note: "Colombian workplaces often use “usted” between colleagues, even friendly ones, so “le hago seguimiento” is warm rather than stiff. “Pendiente” is the standard word for an open item and appears constantly in meetings and email.",
    prompt: "What does Alex mean by “Me falta revisar las cifras”?",
    choices: ["Checking the figures is still to be done.", "The figures are wrong.", "Someone else reviewed the figures."],
    answer: 0
  },
  en: {
    title: "The team stand-up",
    situation: "You give a short progress update in a team meeting.",
    dialogue: [
      ["Laura", "Where are we on the September report?", "¿Cómo vamos con el reporte de septiembre?", "wer ar wi an dhuh sep-TEM-ber ri-PORT"],
      ["Alex", "The draft’s done. I still need to check the figures.", "Ya quedó el borrador. Me falta revisar las cifras.", "dhuh drafts don. ai stil niid tu chek dhuh FIG-yerz"],
      ["Laura", "Sounds good. Anything blocked on my end?", "Perfecto. ¿Algo pendiente de mi lado?", "saundz gud. EN-ii-thing blakt an mai end"],
      ["Alex", "Just the sign-off. I’ll follow up tomorrow.", "Solo la aprobación. Le hago seguimiento mañana.", "yast dhuh SAIN-af. ail FAL-ou op tuh-MAR-ou"]
    ],
    vocabulary: [
      ["Where are we on...?", "A standard progress question. It asks about status, not location."],
      ["blocked on my end", "Waiting on me before it can move. “On my end” means on my side."],
      ["sign-off", "Formal approval. As a verb it splits: “Can you sign off on this?”"]
    ],
    note: "Workplace English softens status reports with hedges—“I still need to”, “Sounds good”, “Just the sign-off”. Stating a delay flatly can sound harsher in English than the equivalent does in Spanish, so name the next step alongside it.",
    prompt: "What is Laura asking with “Anything blocked on my end?”",
    choices: ["Whether anything is waiting for her to act.", "Whether her computer is broken.", "Whether the meeting should end."],
    answer: 0
  }
}, {
  id: "seminar-discussion",
  level: "Extending · Academic",
  skills: ["listening", "speaking", "reading", "register"],
  domain: "academic",
  register: "formal academic",
  pathways: ["collegiate-academic"],
  review: "pending",
  es: {
    title: "En el seminario",
    situation: "Participas en un seminario universitario y quieres matizar un argumento.",
    dialogue: [
      ["Profesor", "¿Qué opinan de la tesis central del autor?", "What do you make of the author’s central thesis?", "keh oh-PEE-nan deh lah TEH-sees sen-TRAL del ow-TOR"],
      ["Alex", "Estoy de acuerdo en parte, pero quisiera matizar un punto.", "I partly agree, but I’d like to qualify one point.", "es-TOY deh ah-KWER-doh en PAR-teh, PEH-roh kee-SYEH-rah mah-tee-SAR oon POON-toh"],
      ["Profesor", "Adelante. ¿En qué se apoya?", "Go ahead. What are you basing that on?", "ah-deh-LAN-teh. en keh seh ah-POH-yah"],
      ["Alex", "En los datos del capítulo tres, que no respaldan del todo esa conclusión.", "On the data in chapter three, which doesn’t fully support that conclusion.", "en los DAH-tos del kah-PEE-too-loh tres, keh noh res-PAL-dan del TOH-doh EH-sah kon-kloo-SYON"]
    ],
    vocabulary: [
      ["matizar", "To qualify or add nuance to a claim rather than reject it outright."],
      ["quisiera + infinitive", "A soft conditional used to disagree politely in formal settings."],
      ["respaldar", "To support or back up a claim with evidence."]
    ],
    note: "Academic Spanish disagrees through hedging rather than contradiction: “estoy de acuerdo en parte”, “quisiera matizar”, “no me queda del todo claro”. Naming your evidence (“en los datos del capítulo tres”) is expected before the objection lands.",
    prompt: "What is Alex doing with “quisiera matizar un punto”?",
    choices: ["Politely adding nuance to a claim, not rejecting it.", "Fully rejecting the thesis.", "Asking to change the topic."],
    answer: 0
  },
  en: {
    title: "In the seminar",
    situation: "You take part in a university seminar and want to qualify an argument.",
    dialogue: [
      ["Professor", "What do you make of the author’s central claim?", "¿Qué opinan de la tesis central del autor?", "wat du yu meik ov dhuh AW-therz SEN-trul kleim"],
      ["Alex", "I’d agree up to a point, but I’d like to push back on one thing.", "Estoy de acuerdo en parte, pero quisiera matizar un punto.", "aid uh-GRII op tu uh point, bot aid laik tu push bak an wan thing"],
      ["Professor", "Go ahead. What are you basing that on?", "Adelante. ¿En qué se apoya?", "gou uh-HED. wat ar yu BEIS-ing dhat an"],
      ["Alex", "The data in chapter three, which doesn’t fully bear out that conclusion.", "En los datos del capítulo tres, que no respaldan del todo esa conclusión.", "dhuh DEI-tuh in CHAP-ter thrii, wich dozunt FUL-ii ber aut dhat kun-KLOO-zhun"]
    ],
    vocabulary: [
      ["up to a point", "Partly, but with reservations. It signals qualified agreement."],
      ["push back on", "To respectfully challenge an idea. In academic English it is collegial, not hostile."],
      ["bear out", "To confirm or support, said of evidence: “the data bears that out.”"]
    ],
    note: "Academic English disagrees with hedges: “I’d agree up to a point”, “I’m not sure the data supports that”, “I’d push back gently on”. Dropping the hedge (“That’s wrong”) reads as far more aggressive than the same directness would in many other settings.",
    prompt: "What does “the data doesn’t bear that out” mean?",
    choices: ["The evidence does not support that conclusion.", "The data was carried away.", "The conclusion is unreadable."],
    answer: 0
  }
}, {
  id: "job-interview",
  level: "Extending · Professional",
  skills: ["speaking", "listening", "register", "culture"],
  domain: "employment",
  register: "formal professional",
  pathways: ["professional-interviews", "collegiate-academic"],
  review: "pending",
  es: {
    title: "La entrevista de trabajo",
    situation: "Estás en una entrevista y te preguntan por tu experiencia.",
    dialogue: [
      ["Entrevistadora", "Cuénteme, ¿por qué le interesa este cargo?", "Tell me, why does this position interest you?", "KWEN-teh-meh, por keh leh een-teh-REH-sah ES-teh KAR-goh"],
      ["Alex", "Me interesa porque llevo tres años trabajando en atención al cliente.", "It interests me because I’ve been working in customer service for three years.", "meh een-teh-REH-sah por-keh YEH-boh tres AH-nyos trah-bah-HAN-doh en ah-ten-SYON al KLYEN-teh"],
      ["Entrevistadora", "¿Y qué aportaría al equipo?", "And what would you bring to the team?", "ee keh ah-por-tah-REE-ah al eh-KEE-poh"],
      ["Alex", "Sobre todo, capacidad de resolver problemas con la gente. Con mucho gusto le amplío.", "Above all, an ability to solve problems with people. I’d be glad to expand on that.", "SOH-breh TOH-doh, kah-pah-see-DAD deh reh-sol-VER proh-BLEH-mas kon lah HEN-teh. kon MOO-choh GOOS-toh leh AM-plee-oh"]
    ],
    vocabulary: [
      ["cargo", "A job position or role. “Puesto” also works; “cargo” is common in job postings."],
      ["llevo tres años trabajando", "“I’ve been working for three years.” Llevar + time + gerund is the standard structure."],
      ["Con mucho gusto", "A very Colombian courtesy phrase—“gladly”—used far more widely than “de nada.”"]
    ],
    note: "Colombian professional settings use “usted” by default with interviewers, and courtesy formulas like “con mucho gusto” and “a la orden” are expected rather than excessive. “Cuénteme” invites a short narrative, not a one-word answer.",
    prompt: "What does “llevo tres años trabajando” express?",
    choices: ["Three years of work that continues to now.", "A plan to work for three years.", "A job that ended three years ago."],
    answer: 0
  },
  en: {
    title: "The job interview",
    situation: "You are in an interview and are asked about your experience.",
    dialogue: [
      ["Interviewer", "Tell me, what draws you to this role?", "Cuénteme, ¿por qué le interesa este cargo?", "tel mi, wat drawz yu tu dhis roul"],
      ["Alex", "I’ve been working in customer service for three years.", "Llevo tres años trabajando en atención al cliente.", "aiv bin WERK-ing in KOS-tuh-mer SER-vis for thrii yirz"],
      ["Interviewer", "And what would you bring to the team?", "¿Y qué aportaría al equipo?", "and wat wud yu bring tu dhuh tiim"],
      ["Alex", "Mainly, I’m good at solving problems with people. I’m happy to walk you through an example.", "Sobre todo, sé resolver problemas con la gente. Con gusto le doy un ejemplo.", "MEIN-lii, aim gud at SALV-ing PRAB-lumz widh PII-pul. aim HAP-ii tu wawk yu throo an eg-ZAM-pul"]
    ],
    vocabulary: [
      ["What draws you to...?", "“What attracts you to it?” A softer version of “Why do you want this job?”"],
      ["I’ve been working ... for three years", "Present perfect continuous: started in the past, still true now."],
      ["walk you through", "To explain something step by step. Nothing to do with walking."]
    ],
    note: "Interview English rewards concrete examples over stated qualities. Offering one—“I’m happy to walk you through an example”—is expected, and speaking about your own achievements directly is read as clarity rather than boasting.",
    prompt: "What is Alex offering with “walk you through an example”?",
    choices: ["To explain an example step by step.", "To take a walk during the interview.", "To skip the question."],
    answer: 0
  }
}];
