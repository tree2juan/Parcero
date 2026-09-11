/*
 * The parts of the workbook that cannot be derived.
 *
 * Everything else the workbook prints is computed from the lessons: the
 * exercises, the glossary, the study map, the tracker. This file holds the
 * three pieces that are teaching rather than data — how to work through a
 * week, what a marked-up page means, and how the language actually sounds.
 *
 * A note on which language each string is written in.
 *
 * `cycle` and `correction` describe the workbook itself, so they carry both
 * languages and the reader gets whichever one they are reading in.
 *
 * `sounds` does not, and the asymmetry is deliberate. `sounds.es` describes
 * the sounds of Colombian Spanish for somebody who does not speak it yet, so
 * it is written in English; `sounds.en` describes American English for
 * somebody who does not speak that yet, so it is written in Spanish. A single
 * `note` field is correct in both cases because the reader is always the
 * person who does not have the sound. Nesting both languages here would mean
 * authoring an explanation nobody is ever shown.
 */
const STUDY_GUIDE = {
  /*
   * A week of study. The minutes are the point: a learner who does not know
   * how long something is meant to take assumes it is meant to take longer,
   * and stops.
   */
  cycle: [
    {
      id: "meet",
      minutes: 20,
      en: {
        title: "Meet the module",
        text: "Read the overview page and the model conversation once, out loud, without stopping to look anything up. You are listening for shape, not meaning. Then read the vocabulary list and mark the words you already half-know."
      },
      es: {
        title: "Conoce el módulo",
        text: "Lee la página de introducción y la conversación modelo una vez, en voz alta, sin detenerte a buscar nada. Estás escuchando la forma, no el significado. Después lee la lista de vocabulario y marca las palabras que ya conoces a medias."
      }
    },
    {
      id: "work",
      minutes: 30,
      en: {
        title: "Work the exercises",
        text: "Do the practice section in pen, and do it without the answer key. A wrong answer you had to commit to teaches you more than a right answer you copied. Leave anything you cannot do blank rather than guessing wildly — the blanks are information."
      },
      es: {
        title: "Trabaja los ejercicios",
        text: "Haz la sección de práctica con bolígrafo, y hazla sin las respuestas. Una respuesta equivocada que tuviste que arriesgar enseña más que una respuesta correcta copiada. Deja en blanco lo que no puedas hacer en vez de adivinar a lo loco: los espacios en blanco son información."
      }
    },
    {
      id: "mark",
      minutes: 10,
      en: {
        title: "Mark your own work",
        text: "Now open the answer key and mark it with the correction code on the next page. Do not just tick and cross — write the code next to each mistake, because naming the kind of error is what stops you repeating it."
      },
      es: {
        title: "Corrige tu propio trabajo",
        text: "Ahora abre las respuestas y corrige con el código de corrección de la página siguiente. No te limites a poner visto o equis: escribe el código al lado de cada error, porque nombrar el tipo de error es lo que impide repetirlo."
      }
    },
    {
      id: "speak",
      minutes: 15,
      en: {
        title: "Say it to somebody",
        text: "Take the model conversation and perform it, both parts, then change one thing — a name, a place, a time — and perform it again. If you have nobody to say it to, say it to the wall. The mouth learns separately from the eye."
      },
      es: {
        title: "Díselo a alguien",
        text: "Toma la conversación modelo y represéntala, ambas partes, luego cambia una cosa (un nombre, un lugar, una hora) y represéntala otra vez. Si no tienes a quién decírselo, díselo a la pared. La boca aprende aparte de los ojos."
      }
    },
    {
      id: "prove",
      minutes: 15,
      en: {
        title: "Prove it",
        text: "Turn to the checkpoint at the back of the module and try each can-do statement for real: write the message, make the call, order the thing. Then log what you actually did in the evidence table. A checked box is a claim; a logged sentence is proof."
      },
      es: {
        title: "Demuéstralo",
        text: "Ve al punto de control al final del módulo e intenta cada afirmación de verdad: escribe el mensaje, haz la llamada, pide la cosa. Después anota lo que realmente hiciste en la tabla de evidencia. Una casilla marcada es una afirmación; una frase anotada es una prueba."
      }
    },
    {
      id: "return",
      minutes: 10,
      en: {
        title: "Come back to it",
        text: "Three or four days later, redo the exercises you got the correction code on — only those. This is the only step people skip and the only step that decides whether any of it stays."
      },
      es: {
        title: "Vuelve a ello",
        text: "Tres o cuatro días después, rehaz solo los ejercicios que te salieron con código de corrección. Este es el único paso que la gente se salta y el único que decide si algo de esto se queda."
      }
    }
  ],

  /*
   * Marks for the margin. Short enough to write beside a line without
   * rewriting the line, and named so the learner does the correcting.
   */
  correction: [
    {
      code: "VF",
      en: { name: "Verb form", note: "The right verb, in the wrong form — wrong person, wrong tense, or an infinitive left where a conjugated verb belongs." },
      es: { name: "Forma verbal", note: "El verbo correcto, en la forma equivocada: persona equivocada, tiempo equivocado, o un infinitivo donde va un verbo conjugado." },
      example: {
        es: { wrong: "Ayer yo *voy* al centro.", right: "Ayer yo fui al centro." },
        en: { wrong: "Yesterday I *go* downtown.", right: "Yesterday I went downtown." }
      }
    },
    {
      code: "AG",
      en: { name: "Agreement", note: "Two words that have to match and do not — a plural noun with a singular verb, or an adjective in the wrong gender or number." },
      es: { name: "Concordancia", note: "Dos palabras que deben coincidir y no coinciden: un sustantivo plural con un verbo singular, o un adjetivo con género o número equivocado." },
      example: {
        es: { wrong: "Las casas son *bonito*.", right: "Las casas son bonitas." },
        en: { wrong: "The houses *is* pretty.", right: "The houses are pretty." }
      }
    },
    {
      code: "WO",
      en: { name: "Word order", note: "Every word is right and they are in the wrong sequence. Common with adjectives, object pronouns, and questions." },
      es: { name: "Orden de palabras", note: "Todas las palabras son correctas y están en el orden equivocado. Pasa mucho con adjetivos, pronombres de objeto y preguntas." },
      example: {
        es: { wrong: "Yo *lo no* tengo.", right: "Yo no lo tengo." },
        en: { wrong: "I know not *what is it*.", right: "I don't know what it is." }
      }
    },
    {
      code: "PR",
      en: { name: "Preposition", note: "The small word before a noun is wrong or missing. These almost never translate one to one, so they have to be learned attached to the verb." },
      es: { name: "Preposición", note: "La palabra pequeña delante del sustantivo está equivocada o falta. Casi nunca se traducen una a una, así que hay que aprenderlas pegadas al verbo." },
      example: {
        es: { wrong: "Pienso *de* ti.", right: "Pienso en ti." },
        en: { wrong: "I'm thinking *of* going, said in the sense of missing you.", right: "I'm thinking about you." }
      }
    },
    {
      code: "WW",
      en: { name: "Wrong word", note: "A real word that does not mean what you wanted. Often a word that looks like the English one and is not." },
      es: { name: "Palabra equivocada", note: "Una palabra real que no significa lo que querías. A menudo una palabra que se parece a la inglesa y no lo es." },
      example: {
        es: { wrong: "Estoy *embarazada* por el error.", right: "Estoy apenada por el error." },
        en: { wrong: "I am *embarrassed* — meaning pregnant.", right: "I am pregnant." }
      }
    },
    {
      code: "SP",
      en: { name: "Spelling", note: "Including a missing or misplaced accent, which in Spanish can change the word rather than just decorate it." },
      es: { name: "Ortografía", note: "Incluye una tilde que falta o está mal puesta, que en español puede cambiar la palabra en vez de solo decorarla." },
      example: {
        es: { wrong: "El *esta* aquí.", right: "Él está aquí." },
        en: { wrong: "*Their* going home.", right: "They're going home." }
      }
    },
    {
      code: "^",
      en: { name: "Something is missing", note: "A caret in the line points at a hole — usually an article, a subject, or an auxiliary verb the other language requires and yours does not." },
      es: { name: "Falta algo", note: "Un signo de intercalación en la línea señala un hueco: normalmente un artículo, un sujeto o un verbo auxiliar que el otro idioma exige y el tuyo no." },
      example: {
        es: { wrong: "Voy ^ centro.", right: "Voy al centro." },
        en: { wrong: "^ Is raining.", right: "It is raining." }
      }
    },
    {
      code: "?",
      en: { name: "I cannot follow this", note: "The sentence is not wrong in any one place; it just did not arrive. Say it out loud and write what you meant in the simplest words you have." },
      es: { name: "No se entiende", note: "La frase no está mal en ningún punto concreto; simplemente no llegó. Dila en voz alta y escribe lo que querías decir con las palabras más simples que tengas." },
      example: {
        es: { wrong: "La cosa de la persona que hace el trabajo del lugar.", right: "El jefe de la oficina." },
        en: { wrong: "The thing of the person that does the work of the place.", right: "The office manager." }
      }
    }
  ],

  /*
   * The sounds. Written for the reader who does not have them — see the note
   * at the top of the file about why there is one `note` and not two.
   */
  sounds: {
    es: [
      {
        letters: "a e i o u",
        name: "The five vowels",
        note: "Spanish has five vowel sounds and they never slide. English vowels glide — say \"day\" slowly and you will hear it end somewhere near \"ee.\" Spanish will not do that. Pin each vowel in one position and hold it: a as in father, e as in bet, i as in machine, o as in more, u as in rule. This one habit does more for being understood than any other.",
        examples: ["casa", "mesa", "mi", "poco", "luna"]
      },
      {
        letters: "c (before e, i) · z",
        name: "Always an s",
        note: "In Colombia these are simply /s/. The lisped th of central Spain is not used anywhere in the Americas, so cielo starts like see and zapato starts like sap.",
        examples: ["cielo", "cinco", "zapato", "corazón"]
      },
      {
        letters: "j · g (before e, i)",
        name: "A soft h from the back",
        note: "A breathy h. Colombian Spanish is gentler here than Mexican or Spanish-from-Spain, which scrape the sound noticeably; in Bogotá it sits close to the h in hope. Never pronounce it like the English j in jam.",
        examples: ["trabajo", "jefe", "gente", "elegir"]
      },
      {
        letters: "r (between vowels)",
        name: "A single tap",
        note: "You already own this sound. The tt in butter and the dd in ladder, said quickly in American English, are exactly the Spanish single r. The tongue touches the ridge behind your teeth once and leaves.",
        examples: ["pero", "para", "caro", "hora"]
      },
      {
        letters: "rr · r (at the start)",
        name: "The trill",
        note: "Several taps in a row, the tongue loose and the air doing the work. Worth practicing because it is the only place where Spanish will hold you to a distinction English does not have: pero means but, perro means dog.",
        examples: ["perro", "carro", "rojo", "arroz"]
      },
      {
        letters: "ll · y",
        name: "One sound, not two",
        note: "In most of Colombia these have merged. In Bogotá the result is close to the y in yes; in parts of the country it hardens toward the j in jeep. Either will be understood, so pick the one you hear around you.",
        examples: ["llave", "calle", "yo", "ya"]
      },
      {
        letters: "b · v",
        name: "The same letter twice",
        note: "There is no difference in sound. Both are b. Between two vowels the lips do not quite close, so it softens to something between b and v — but no Spanish speaker is making the English v with teeth on lip.",
        examples: ["vaca", "beber", "vivir", "abrir"]
      },
      {
        letters: "d (between vowels)",
        name: "Softened almost to th",
        note: "At the start of a word it is a normal d. Between vowels, and at the end of a word, it relaxes toward the th in this. Nada comes out closer to na-tha, and in casual Colombian speech the ending of words like cansado thins out almost to nothing.",
        examples: ["nada", "cada", "usted", "cansado"]
      },
      {
        letters: "s",
        name: "Kept, in the interior",
        note: "Worth knowing because it varies. Andean Colombia — Bogotá, Medellín, Cali — pronounces the s clearly everywhere, including at the end of a syllable. On the Caribbean coast it softens to a puff of air or disappears, so that costa becomes coh-ta. The lessons here follow the interior.",
        examples: ["estas", "buscas", "costa"]
      },
      {
        letters: "h · ñ · qu · gu",
        name: "Four quick rules",
        note: "H is always silent — hola begins with the o. Ñ is the ny in canyon. Qu is just k, and the u is never pronounced. Gu before e or i is a hard g, same silent u.",
        examples: ["hola", "año", "queso", "guitarra"]
      },
      {
        letters: "stress",
        name: "Where the beat falls",
        note: "Three rules, no exceptions. A word ending in a vowel, n, or s is stressed on the second-to-last syllable: HA-blo, HA-blan. Anything else is stressed on the last: ha-BLAR, fe-LIZ. A written accent overrides both and tells you exactly where to hit: ha-BLÓ, in-GLÉS, FÁ-cil. The accent is not decoration — hablo, hablé and habló are three different people at three different times.",
        examples: ["hablo", "hablar", "habló", "fácil"]
      }
    ],
    en: [
      {
        letters: "th",
        name: "Los dos sonidos que no existen en español",
        note: "Saca la punta de la lengua hasta tocar los dientes de arriba y sopla. Sordo en think, thanks, three. Sonoro, con voz, en this, that, mother. Cambiarlo por s, t, d o f es el error que más delata a un hispanohablante, y separa think de sink y de tink.",
        examples: ["think", "this", "three", "mother"]
      },
      {
        letters: "ə",
        name: "La vocal débil",
        note: "El sonido más frecuente del inglés y no se escribe de ninguna manera fija. Toda sílaba sin acento tiende a reducirse a un gruñido corto: banana suena buh-NA-nuh, about suena uh-BOUT. Pronunciar todas las vocales con claridad, como en español, es lo que hace que el inglés suene entrecortado. Reducir es correcto.",
        examples: ["banana", "about", "problem", "the"]
      },
      {
        letters: "i / iː",
        name: "Ship y sheep",
        note: "El español tiene una i; el inglés tiene dos y distinguen palabras. La de sheep es larga y con la boca sonriendo. La de ship es corta, más floja y más central, casi hacia la e. Sin esta diferencia, beach y bitch, sheet y shit se vuelven la misma palabra, con consecuencias.",
        examples: ["ship", "sheep", "live", "leave"]
      },
      {
        letters: "b / v",
        name: "Dos letras, dos sonidos",
        note: "En español b y v suenan igual. En inglés no. La v se hace con los dientes de arriba sobre el labio de abajo y con voz: very, video, love. La b cierra los dos labios: berry, boat. Es una distinción que el inglés sí exige.",
        examples: ["very", "berry", "vote", "boat"]
      },
      {
        letters: "sp- st- sk-",
        name: "Sin la e de adelante",
        note: "El español no empieza palabras con s más consonante, así que la boca quiere poner una e: eschool, espeak, estudent. El inglés empieza directo con la s. Practica alargando la s sola y luego pegándole la palabra: sssss-chool.",
        examples: ["school", "speak", "student", "Spanish"]
      },
      {
        letters: "h",
        name: "Se pronuncia",
        note: "Al revés que en español, donde la h es muda. En inglés hay que soltar aire: house, here, happy. Quitarla convierte heat en eat y hate en ate.",
        examples: ["house", "here", "happy", "hot"]
      },
      {
        letters: "-ed",
        name: "Tres finales distintos",
        note: "La terminación del pasado se pronuncia de tres maneras y ninguna es ed. Después de sonido sordo suena t: walked, asked. Después de sonido sonoro suena d: played, lived. Solo después de t o d se convierte en una sílaba propia, id: wanted, needed.",
        examples: ["walked", "played", "wanted", "asked"]
      },
      {
        letters: "r",
        name: "Ni golpe ni vibración",
        note: "La r inglesa no toca nada. La lengua se echa hacia atrás o se agrupa en el centro de la boca sin rozar el paladar, y en inglés americano se pronuncia también al final: car, four, water. No uses ni la r de pero ni la rr de perro.",
        examples: ["red", "car", "four", "problem"]
      },
      {
        letters: "t (entre vocales)",
        name: "Aquí sí va la r de pero",
        note: "Un regalo. En inglés americano la t entre dos vocales se convierte exactamente en el golpe de la r española de pero: water suena wa-rer, better suena be-rer, city suena si-ri. Ya tienes el sonido.",
        examples: ["water", "better", "city", "little"]
      },
      {
        letters: "-sts -sks -kt",
        name: "Consonantes amontonadas al final",
        note: "El inglés junta consonantes que el español nunca junta: texts, asked, worlds, months. Se dicen todas, sin meter vocales entre ellas. Empieza despacio y ve juntándolas; es cuestión de músculo, no de oído.",
        examples: ["texts", "asked", "worlds", "months"]
      },
      {
        letters: "z · s",
        name: "La s con voz",
        note: "En español la s nunca vibra. En inglés sí, y distingue palabras: zoo, is, was, please llevan voz; sue, this, place no. Pon la mano en la garganta: en la z tiene que temblar.",
        examples: ["zoo", "is", "please", "was"]
      },
      {
        letters: "acento",
        name: "El acento mueve el significado",
        note: "En inglés el acento no se escribe pero manda. La misma palabra cambia de categoría según dónde caiga: PREsent es un regalo, preSENT es presentar; REcord es un disco, reCORD es grabar. En palabras largas, todo lo demás se reduce a la vocal débil.",
        examples: ["present", "record", "photograph", "photography"]
      }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) module.exports = { STUDY_GUIDE };
