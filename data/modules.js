/*
 * Course modules — the unit a student actually works through.
 *
 * A module is deliberately NOT a new grouping invented here. It is the lesson
 * block file that already exists on disk. Those files were authored by hand
 * around a communicative function — "asking", "at the table", "allowing and
 * preventing" — and almost all of them hold exactly three lessons. That is the
 * same grain as a printed course unit, and it is already editorial.
 *
 * An earlier attempt grouped modules by `domain` instead. It produced sane
 * sizes and incoherent units, because `domain` and the theme in `level`
 * disagree on 22 of the 45 lessons where both are comparable. Neither field is
 * wrong; they describe different axes. `coming-up-short-at-the-corner-shop` is
 * a food scene tagged shopping-and-money, and both readings are defensible. A
 * tag that ambiguous cannot carry a unit boundary, and a workbook built on it
 * would open with a mission no set of lessons in it actually shares.
 *
 * So membership is derived from `sourceFile`, not listed here. That is safe in
 * a way a derived *grouping* is not: adding a lesson to
 * 03-foundation-ability.js puts it in the ability module, which is correct by
 * construction and cannot silently reshuffle the other 74 modules. What is
 * authored here is the one thing derivation cannot supply — a human title in
 * both interface languages.
 *
 * Both titles describe the same unit. They are a translation pair, not
 * different content, because the interface language is the opposite of the
 * language being studied: a learner on direction "es" is studying Spanish and
 * reads the English title, and a learner on direction "en" is studying English
 * and reads the Spanish one.
 *
 * `id` keeps the numeric prefix so modules sort into teaching order without a
 * separate sequence field, and so a module can never be confused with the verb
 * or domain slug of the same name.
 */
const COURSE_MODULES = [
  {
    id: "00-core",
    block: "data/lessons.js",
    title: {
      en: "Orientation: eight conversations",
      es: "Orientación: ocho conversaciones"
    }
  },
  {
    id: "01-foundation-identity",
    block: "data/lessons/01-foundation-identity.js",
    title: { en: "Who you are", es: "Quién eres" }
  },
  {
    id: "02-foundation-state",
    block: "data/lessons/02-foundation-state.js",
    title: { en: "How you are", es: "Cómo estás" }
  },
  {
    id: "03-foundation-ability",
    block: "data/lessons/03-foundation-ability.js",
    title: { en: "Can and know how", es: "Poder y saber" }
  },
  {
    id: "04-foundation-perception",
    block: "data/lessons/04-foundation-perception.js",
    title: { en: "Seeing and hearing", es: "Ver y oír" }
  },
  {
    id: "05-foundation-meeting",
    block: "data/lessons/05-foundation-meeting.js",
    title: { en: "Meeting people", es: "Conocer gente" }
  },
  {
    id: "06-foundation-obligation",
    block: "data/lessons/06-foundation-obligation.js",
    title: { en: "Having to", es: "Tener que" }
  },
  {
    id: "07-foundation-opinion",
    block: "data/lessons/07-foundation-opinion.js",
    title: { en: "Saying what you think", es: "Decir lo que piensas" }
  },
  {
    id: "08-foundation-conversation",
    block: "data/lessons/08-foundation-conversation.js",
    title: {
      en: "Keeping a conversation going",
      es: "Mantener la conversación"
    }
  },
  {
    id: "09-foundation-finding",
    block: "data/lessons/09-foundation-finding.js",
    title: { en: "Looking for and finding", es: "Buscar y encontrar" }
  },
  {
    id: "10-foundation-daily-life",
    block: "data/lessons/10-foundation-daily-life.js",
    title: { en: "An ordinary day", es: "Un día cualquiera" }
  },
  {
    id: "11-foundation-reading-writing",
    block: "data/lessons/11-foundation-reading-writing.js",
    title: { en: "Reading and writing", es: "Leer y escribir" }
  },
  {
    id: "12-foundation-learning",
    block: "data/lessons/12-foundation-learning.js",
    title: { en: "Learning and teaching", es: "Aprender y enseñar" }
  },
  {
    id: "13-foundation-asking",
    block: "data/lessons/13-foundation-asking.js",
    title: { en: "Asking for things", es: "Pedir las cosas" }
  },
  {
    id: "14-foundation-handling-things",
    block: "data/lessons/14-foundation-handling-things.js",
    title: { en: "Handling and using things", es: "Manejar las cosas" }
  },
  {
    id: "15-foundation-starting-finishing",
    block: "data/lessons/15-foundation-starting-finishing.js",
    title: { en: "Starting and finishing", es: "Empezar y terminar" }
  },
  {
    id: "16-foundation-coming-and-going",
    block: "data/lessons/16-foundation-coming-and-going.js",
    title: { en: "Coming and going", es: "Ir y venir" }
  },
  {
    id: "17-foundation-carrying-and-leaving",
    block: "data/lessons/17-foundation-carrying-and-leaving.js",
    title: { en: "Carrying and leaving", es: "Llevar y dejar" }
  },
  {
    id: "18-foundation-memory-and-waiting",
    block: "data/lessons/18-foundation-memory-and-waiting.js",
    title: { en: "Remembering and waiting", es: "Recordar y esperar" }
  },
  {
    id: "19-foundation-looking-and-listening",
    block: "data/lessons/19-foundation-looking-and-listening.js",
    title: { en: "Looking and listening", es: "Mirar y escuchar" }
  },
  {
    id: "20-foundation-buying-and-paying",
    block: "data/lessons/20-foundation-buying-and-paying.js",
    title: { en: "Buying and paying", es: "Comprar y pagar" }
  },
  {
    id: "21-foundation-at-the-table",
    block: "data/lessons/21-foundation-at-the-table.js",
    title: { en: "At the table", es: "En la mesa" }
  },
  {
    id: "22-foundation-rest-and-play",
    block: "data/lessons/22-foundation-rest-and-play.js",
    title: { en: "Rest and play", es: "Descansar y jugar" }
  },
  {
    id: "23-foundation-sorting-things-out",
    block: "data/lessons/23-foundation-sorting-things-out.js",
    title: { en: "Sorting things out", es: "Resolver las cosas" }
  },
  {
    id: "24-developing-music-and-movement",
    block: "data/lessons/24-developing-music-and-movement.js",
    title: { en: "Music and movement", es: "Música y movimiento" }
  },
  {
    id: "25-developing-getting-around-the-country",
    block: "data/lessons/25-developing-getting-around-the-country.js",
    title: { en: "Getting around the country", es: "Recorrer el país" }
  },
  {
    id: "26-foundation-kitchen-and-morning",
    block: "data/lessons/26-foundation-kitchen-and-morning.js",
    title: { en: "The kitchen in the morning", es: "La cocina por la mañana" }
  },
  {
    id: "27-developing-moving-your-body",
    block: "data/lessons/27-developing-moving-your-body.js",
    title: { en: "Moving your body", es: "Mover el cuerpo" }
  },
  {
    id: "28-developing-winning-losing-choosing",
    block: "data/lessons/28-developing-winning-losing-choosing.js",
    title: { en: "Winning, losing, choosing", es: "Ganar, perder, elegir" }
  },
  {
    id: "29-developing-sending-and-sharing",
    block: "data/lessons/29-developing-sending-and-sharing.js",
    title: { en: "Sending and sharing", es: "Enviar y compartir" }
  },
  {
    id: "30-developing-keeping-house",
    block: "data/lessons/30-developing-keeping-house.js",
    title: { en: "Keeping house", es: "Mantener la casa" }
  },
  {
    id: "31-developing-body-and-routine",
    block: "data/lessons/31-developing-body-and-routine.js",
    title: { en: "Body and routine", es: "El cuerpo y la rutina" }
  },
  {
    id: "32-developing-likes-and-dislikes",
    block: "data/lessons/32-developing-likes-and-dislikes.js",
    title: { en: "Likes and dislikes", es: "Gustos y disgustos" }
  },
  {
    id: "33-developing-explaining-and-showing",
    block: "data/lessons/33-developing-explaining-and-showing.js",
    title: { en: "Explaining and showing", es: "Explicar y mostrar" }
  },
  {
    id: "34-developing-invitations",
    block: "data/lessons/34-developing-invitations.js",
    title: { en: "Invitations", es: "Invitaciones" }
  },
  {
    id: "35-developing-deciding-and-getting",
    block: "data/lessons/35-developing-deciding-and-getting.js",
    title: { en: "Deciding and getting", es: "Decidir y conseguir" }
  },
  {
    id: "36-developing-looking-after-people",
    block: "data/lessons/36-developing-looking-after-people.js",
    title: { en: "Looking after people", es: "Cuidar a la gente" }
  },
  {
    id: "37-developing-making-and-breaking",
    block: "data/lessons/37-developing-making-and-breaking.js",
    title: { en: "Making and breaking", es: "Hacer y romper" }
  },
  {
    id: "38-developing-life-and-loss",
    block: "data/lessons/38-developing-life-and-loss.js",
    title: { en: "Life and loss", es: "La vida y la pérdida" }
  },
  {
    id: "39-developing-planning-a-trip",
    block: "data/lessons/39-developing-planning-a-trip.js",
    title: { en: "Planning a trip", es: "Planear un viaje" }
  },
  {
    id: "40-extending-devices-and-how-things-work",
    block: "data/lessons/40-extending-devices-and-how-things-work.js",
    title: {
      en: "Devices and how things work",
      es: "Aparatos y cómo funcionan"
    }
  },
  {
    id: "41-developing-allowing-and-preventing",
    block: "data/lessons/41-developing-allowing-and-preventing.js",
    title: { en: "Allowing and preventing", es: "Permitir e impedir" }
  },
  {
    id: "42-developing-what-matters-to-you",
    block: "data/lessons/42-developing-what-matters-to-you.js",
    title: { en: "What matters to you", es: "Lo que te importa" }
  },
  {
    id: "43-developing-more-less-better",
    block: "data/lessons/43-developing-more-less-better.js",
    title: { en: "More, less, better", es: "Más, menos, mejor" }
  },
  {
    id: "44-developing-getting-back-to-people",
    block: "data/lessons/44-developing-getting-back-to-people.js",
    title: { en: "Getting back to people", es: "Responderle a la gente" }
  },
  {
    id: "45-developing-getting-ready",
    block: "data/lessons/45-developing-getting-ready.js",
    title: { en: "Getting ready", es: "Alistarse" }
  },
  {
    id: "46-extending-figuring-things-out",
    block: "data/lessons/46-extending-figuring-things-out.js",
    title: { en: "Figuring things out", es: "Darse cuenta" }
  },
  {
    id: "47-extending-paperwork-and-payments",
    block: "data/lessons/47-extending-paperwork-and-payments.js",
    title: { en: "Paperwork and payments", es: "Papeleo y pagos" }
  },
  {
    id: "48-extending-in-the-kitchen",
    block: "data/lessons/48-extending-in-the-kitchen.js",
    title: { en: "In the kitchen", es: "En la cocina" }
  },
  {
    id: "49-extending-tears-and-laughter",
    block: "data/lessons/49-extending-tears-and-laughter.js",
    title: { en: "Tears and laughter", es: "Llanto y risa" }
  },
  {
    id: "50-developing-coming-back-and-becoming",
    block: "data/lessons/50-developing-coming-back-and-becoming.js",
    title: { en: "Coming back and becoming", es: "Volver y convertirse" }
  },
  {
    id: "51-developing-belonging",
    block: "data/lessons/51-developing-belonging.js",
    title: { en: "Belonging", es: "Pertenecer" }
  },
  {
    id: "52-developing-what-happened",
    block: "data/lessons/52-developing-what-happened.js",
    title: { en: "What happened", es: "Lo que pasó" }
  },
  {
    id: "53-developing-deals-and-demands",
    block: "data/lessons/53-developing-deals-and-demands.js",
    title: { en: "Deals and demands", es: "Acuerdos y exigencias" }
  },
  {
    id: "54-developing-weighing-it-up",
    block: "data/lessons/54-developing-weighing-it-up.js",
    title: { en: "Weighing it up", es: "Sopesar las cosas" }
  },
  {
    id: "55-developing-meaning-and-growth",
    block: "data/lessons/55-developing-meaning-and-growth.js",
    title: { en: "Meaning and growth", es: "Sentido y crecimiento" }
  },
  {
    id: "56-developing-love-and-plenty",
    block: "data/lessons/56-developing-love-and-plenty.js",
    title: { en: "Love and plenty", es: "Amor y abundancia" }
  },
  {
    id: "57-extending-thinking-it-over",
    block: "data/lessons/57-extending-thinking-it-over.js",
    title: { en: "Thinking it over", es: "Pensarlo bien" }
  },
  {
    id: "58-extending-showing-up",
    block: "data/lessons/58-extending-showing-up.js",
    title: { en: "Showing up", es: "Hacerse presente" }
  },
  {
    id: "59-extending-staying-in-touch",
    block: "data/lessons/59-extending-staying-in-touch.js",
    title: { en: "Staying in touch", es: "Mantener el contacto" }
  },
  {
    id: "60-extending-cause-and-halt",
    block: "data/lessons/60-extending-cause-and-halt.js",
    title: { en: "Cause and halt", es: "Causar y detener" }
  },
  {
    id: "61-extending-getting-it-done",
    block: "data/lessons/61-extending-getting-it-done.js",
    title: { en: "Getting it done", es: "Sacar las cosas adelante" }
  },
  {
    id: "62-extending-habits-and-worth",
    block: "data/lessons/62-extending-habits-and-worth.js",
    title: { en: "Habits and worth", es: "Costumbres y valor" }
  },
  {
    id: "63-extending-falling-and-getting-on",
    block: "data/lessons/63-extending-falling-and-getting-on.js",
    title: { en: "Falling and getting on", es: "Caer y seguir" }
  },
  {
    id: "64-extending-forms-and-favors",
    block: "data/lessons/64-extending-forms-and-favors.js",
    title: { en: "Forms and favors", es: "Trámites y favores" }
  },
  {
    id: "65-extending-being-seen-to",
    block: "data/lessons/65-extending-being-seen-to.js",
    title: { en: "Being seen to", es: "Que lo atiendan a uno" }
  },
  {
    id: "66-extending-joining-and-parting",
    block: "data/lessons/66-extending-joining-and-parting.js",
    title: { en: "Joining and parting", es: "Unirse y despedirse" }
  },
  {
    id: "67-extending-out-and-across",
    block: "data/lessons/67-extending-out-and-across.js",
    title: { en: "Out and across", es: "Salir y cruzar" }
  },
  {
    id: "68-extending-turn-and-push",
    block: "data/lessons/68-extending-turn-and-push.js",
    title: { en: "Turning and pushing", es: "Girar y empujar" }
  },
  {
    id: "69-comparing-and-degree",
    block: "data/lessons/69-comparing-and-degree.js",
    title: { en: "Comparing and degree", es: "Comparar y graduar" }
  },
  {
    id: "70-calendar-color-and-feeling",
    block: "data/lessons/70-calendar-color-and-feeling.js",
    title: {
      en: "Calendar, color and feeling",
      es: "Calendario, color y ánimo"
    }
  },
  {
    id: "71-past-time-and-duration",
    block: "data/lessons/71-past-time-and-duration.js",
    title: { en: "Past time and duration", es: "El pasado y la duración" }
  },
  {
    id: "72-reporting-and-perspective",
    block: "data/lessons/72-reporting-and-perspective.js",
    title: { en: "Reporting and perspective", es: "Reportar y matizar" }
  },
  {
    id: "73-aspect-regret-and-hope",
    block: "data/lessons/73-aspect-regret-and-hope.js",
    title: {
      en: "Aspect, regret and hope",
      es: "Aspecto, arrepentimiento y esperanza"
    }
  },
  {
    id: "74-precision-and-concession",
    block: "data/lessons/74-precision-and-concession.js",
    title: { en: "Precision and concession", es: "Precisión y concesión" }
  },
  {
    id: "75-obligation-and-belonging",
    block: "data/lessons/75-obligation-and-belonging.js",
    title: {
      en: "Obligation and belonging",
      es: "La obligación y lo que es de quién"
    }
  },
  {
    id: "76-habits-and-checking",
    block: "data/lessons/76-habits-and-checking.js",
    title: {
      en: "Habits that ended, and checking you agree",
      es: "Costumbres que se acabaron y coletillas"
    }
  },
  {
    id: "77-delegation-degree-and-doubt",
    block: "data/lessons/77-delegation-degree-and-doubt.js",
    title: {
      en: "Delegation, degree, and doubt",
      es: "Mandar a hacer, tanto que, y la duda sobre lo ya pasado"
    }
  }
];
