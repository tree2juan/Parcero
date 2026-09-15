/*
 * The alphabet, and the places where the two alphabets disagree.
 *
 * WHY THIS EXISTS: every other reference here teaches words. This one teaches
 * the letters those words are spelled with, because both directions of this
 * course hit the same wall in week one and neither lesson set stops to explain
 * it. An English speaker meets "ñ" and a "ll" that is not two l's. A Colombian
 * meets five vowel letters carrying about fifteen vowel sounds and a "th" that
 * exists in no Spanish word. Neither is a vocabulary problem and neither goes
 * away by reading more dialogue.
 *
 * WHY IT IS SPLIT BY DIRECTION: an alphabet is only interesting by comparison.
 * "H is silent" is a fact about Spanish that matters *because* English
 * pronounces it, and "the letter i is said /aɪ/" is a trap that only exists
 * because the Spanish i is not. So neither side is a translation of the other:
 * each one is written against the alphabet the reader already has.
 *
 *   es  - read by an English speaker learning Colombian Spanish. Spanish
 *         letter names, explanations in English.
 *   en  - read by a Colombian learning American English. English letter names,
 *         explanations in Spanish.
 *
 * `sound` is a plain respelling rather than IPA, the same choice the lessons
 * make. A learner who can read IPA does not need this page.
 *
 * COLOMBIA, NOT SPAIN: the Spanish side describes how these letters are
 * actually said in Colombia. Seseo and yeísmo are not regional curiosities
 * here, they are the norm across the whole country, and a learner taught the
 * peninsular contrasts will spend months listening for a distinction nobody
 * around them is making.
 *
 * `contrasts` carries what a letter-by-letter table cannot: the differences
 * that are about the writing system rather than about any one letter.
 */
const ALPHABET = {
  /* ------------------------------------------------------------------ es */
  es: {
    letterCount: 27,
    letters: [
      { letter: "A a", name: "a", sound: "ah, as in father — always", note: "One sound, every time, stressed or not. English reduces unstressed vowels to a schwa; Spanish does not, which is why 'banana' has three different vowels in English and one in Spanish." },
      { letter: "B b", name: "be (Colombians say be larga or be grande)", sound: "b, softening to a near-v between vowels", note: "Identical to v. Colombians say 'be larga' precisely because b and v cannot be told apart by ear — the names exist to spell out loud, not to describe two sounds." },
      { letter: "C c", name: "ce", sound: "k before a, o, u; s before e, i", note: "In Colombia 'cena' starts with the same sound as 'sena'. The Spanish lisp you may have been taught does not exist here." },
      { letter: "D d", name: "de", sound: "d, softening to a light th between vowels", note: "Between vowels and at the end of a word it relaxes toward the th of 'this'. 'Nada' is closer to 'natha' than to 'nah-dah'." },
      { letter: "E e", name: "e", sound: "eh, as in bet — always", note: "Never the 'ay' glide of English 'say'. Spanish vowels are pure: they start and finish in the same place." },
      { letter: "F f", name: "efe", sound: "f, as in English", note: "One of the few letters that gives an English speaker no trouble at all." },
      { letter: "G g", name: "ge", sound: "hard g before a, o, u; a breathy h before e, i", note: "'Gato' has the g of 'go'; 'gente' starts like an English h. Colombian speech makes that second sound softer and breathier than the scraped Spanish one." },
      { letter: "H h", name: "hache", sound: "silent, always", note: "'Hola' is 'ola' and 'hombre' is 'ombre'. The letter is written and never spoken, which is why Spanish speakers learning English so often drop the h in 'house'." },
      { letter: "I i", name: "i (also i latina, to separate it from y)", sound: "ee, as in machine", note: "The trap runs the other way for English speakers: this is the sound English spells with e or ee, and English 'i' is a glide that Spanish never uses." },
      { letter: "J j", name: "jota", sound: "a breathy h", note: "In Colombia much lighter than the throat-scrape of Spain. 'Juan' begins close to an English 'h', not to a clearing of the throat." },
      { letter: "K k", name: "ka", sound: "k", note: "Appears almost only in borrowed words — kilo, kiwi, karate. A Spanish word with a k in it is usually a word Spanish took from somewhere else." },
      { letter: "L l", name: "ele", sound: "l, always light", note: "English has two l's: the light one in 'leaf' and the dark one in 'full'. Spanish only has the light one, so 'mal' ends nothing like English 'mall'." },
      { letter: "M m", name: "eme", sound: "m, as in English", note: "Never ends a Spanish word except in a few loans, which is why 'álbum' feels foreign to say." },
      { letter: "N n", name: "ene", sound: "n, as in English", note: "Takes its color from what follows: before a b or a v it is said as an m, so 'un vaso' comes out 'um vaso'." },
      { letter: "Ñ ñ", name: "eñe", sound: "ny, as in canyon", note: "A separate letter with its own place in the alphabet, not an n wearing a hat. 'Año' is a year and 'ano' is an anus, so the tilde is not decorative." },
      { letter: "O o", name: "o", sound: "oh, as in more — always", note: "Pure, with no glide. English 'no' slides toward a w at the end; Spanish 'no' stops where it started." },
      { letter: "P p", name: "pe", sound: "p, with no puff of air", note: "English p's come with a breath — hold a hand in front of your mouth and say 'pen'. Spanish p's do not, which is most of what makes an English accent audible." },
      { letter: "Q q", name: "cu", sound: "k; the u after it is silent", note: "Only ever written 'que' or 'qui'. 'Queso' is 'keso'. There is no 'qu' saying kw the way English does in 'quick'." },
      { letter: "R r", name: "erre", sound: "a single tap of the tongue", note: "The tap English speakers already own: it is the dd in 'ladder' said quickly. 'Pero' uses it. At the start of a word it becomes a full trill instead." },
      { letter: "S s", name: "ese", sound: "s, as in sit", note: "Never the z-buzz English puts in 'rose' or 'these'. Spanish has no z sound at all, which is what makes 'is' and 'his' hard in the other direction." },
      { letter: "T t", name: "te", sound: "t, tongue on the teeth, no puff of air", note: "Further forward in the mouth than the English t, and unaspirated. English speakers overshoot this constantly." },
      { letter: "U u", name: "u", sound: "oo, as in rule", note: "Silent in 'que', 'qui', 'gue' and 'gui' unless it carries two dots. See the diéresis in the contrasts below." },
      { letter: "V v", name: "uve, but in Colombia ve corta or ve pequeña", sound: "identical to b", note: "There is no v sound in Spanish. Producing an English v is not wrong so much as inaudible as a distinction, and Colombians spell it out as 've corta' for exactly that reason." },
      { letter: "W w", name: "doble ve, or doble u", sound: "w, or v, depending on the loanword", note: "Not a native letter. 'Whisky' keeps its English w; 'water' in some borrowings drifts toward a v." },
      { letter: "X x", name: "equis", sound: "ks between vowels; s at the start of a word", note: "'Examen' is ks. 'Xilófono' is s. In place names of indigenous origin — México, Oaxaca — it is the breathy h of jota, and 'Mexico' spelled with a j is the same word." },
      { letter: "Y y", name: "ye (older speakers still say i griega)", sound: "like the y in yes; on its own, ee", note: "The word 'y', meaning and, is just the vowel ee. Everywhere else it is a consonant, and in Colombia it sounds the same as ll." },
      { letter: "Z z", name: "zeta", sound: "s", note: "In Colombia 'zapato' starts exactly like 'sapo'. The th-sound of Castilian Spanish is not used anywhere in the Americas." }
    ],
    contrasts: [
      {
        title: "Twenty-seven letters, and the extra one is ñ",
        detail: "English has twenty-six. Spanish has the same twenty-six plus ñ, which sits between n and o in the alphabet and in the dictionary. It is a letter in its own right, not an n with an accent on it, and treating it as decoration changes words: año is a year, ano is an anus, and Colombians notice.",
        examples: ["año — year", "mañana — tomorrow, morning", "señor — sir", "niño — child"]
      },
      {
        title: "ch, ll and rr are digraphs, not letters — since 2010",
        detail: "Two letters, one sound. They used to be listed as letters of their own: until 1994 a Spanish dictionary put every ch word in its own section after c, and the 2010 spelling reform settled the matter by naming twenty-seven letters and calling these three digraphs. If you are using an older dictionary, that is why 'chocolate' is not where you expect it.",
        examples: ["chocolate — ch as in church", "llave — key", "perro — dog, with a rolled r", "pero — but, with a single tap"]
      },
      {
        title: "Seseo: there is no lisp in Colombia",
        detail: "Peninsular Spanish separates the s of 'casa' from the th-sound of 'caza'. No variety of Latin American Spanish does, and Colombia is no exception: c before e or i, z, and s are all one sound. If a course taught you to say 'thervetha' for cerveza, it taught you Madrid, and in Bogotá it will simply sound like an affectation.",
        examples: ["cerveza — serveza", "cinco — sinko", "zapato — sapato", "casa and caza sound identical"]
      },
      {
        title: "Yeísmo: ll and y are the same sound",
        detail: "'Calló' (fell silent) and 'cayó' (fell) are pronounced the same across nearly all of Colombia. The exact sound shifts by region — closer to an English y in Bogotá, with more of a j-buzz on the coast and in parts of the interior — but the merger itself is near universal, so there is no distinction here for you to learn.",
        examples: ["llave — key", "pollo — chicken", "ya — already", "llorar and yo start alike"]
      },
      {
        title: "b and v are one sound, and Colombians name them to cope",
        detail: "Spanish has no v. Both letters are the same phoneme, firmer at the start of a word and softer between vowels. This is a spelling problem for native speakers, not a pronunciation problem, and it is why every Colombian spells aloud with 'be larga' and 've corta' — otherwise a phone number or a surname cannot be dictated at all.",
        examples: ["vaca and baca sound identical", "tubo and tuvo sound identical", "b de burro, v de vaca — how people disambiguate"]
      },
      {
        title: "Written accents mark stress, and sometimes meaning",
        detail: "The mark never changes a vowel's sound — it says which syllable is loud. Spanish stress is otherwise predictable from the ending, so an accent appears exactly when a word breaks the rule. A second use separates pairs of words spelled the same: the accent is the only difference between a question word and a relative one.",
        examples: ["papá — dad; papa — potato", "él — he; el — the", "sí — yes; si — if", "qué — what; que — that"]
      },
      {
        title: "The two dots: ü",
        detail: "In 'gue' and 'gui' the u is silent, there only to keep the g hard. When the u does need to be heard, it takes a diéresis. Without the dots the word is a different word, or no word.",
        examples: ["guerra — gerra, silent u", "vergüenza — vergwenza, the u is said", "pingüino — penguin", "bilingüe — bilingual"]
      },
      {
        title: "One letter, one sound — which is the real difference",
        detail: "Spanish spelling tells you how to say a word with very few exceptions. English spelling does not, as through, though, tough and thought demonstrate in one breath. Once you know the rules on this page you can pronounce any Spanish word you have never seen, including names and street signs, and that is worth more than any single letter here.",
        examples: ["ferrocarril — readable on sight", "otorrinolaringólogo — long, but not ambiguous"]
      },
      {
        title: "Spelling out loud on the phone",
        detail: "You will be asked to spell your name for an appointment, a delivery or a bank. Say the letter names above, and expect people to check b and v with you every time. Doble ele is how you dictate ll; the tilde on ñ is named out loud as 'con tilde' or 'la eñe'.",
        examples: ["¿Me lo deletrea? — could you spell that for me?", "con b de burro — with b for donkey", "todo junto — all one word", "con tilde — with the accent"]
      }
    ]
  },

  /* ------------------------------------------------------------------ en */
  en: {
    letterCount: 26,
    letters: [
      { letter: "A a", name: "ei", sound: "ocho sonidos distintos según la palabra", note: "El nombre de la letra es 'ei', no 'a'. Compare cat, car, cake, call y about: una sola letra, cinco vocales diferentes. Aquí empieza el problema central del inglés." },
      { letter: "B b", name: "bi", sound: "b, siempre con los labios cerrados del todo", note: "En inglés b y v son dos sonidos distintos y separan palabras: berry no es very, boat no es vote. En español son el mismo sonido, así que esta distinción hay que construirla desde cero." },
      { letter: "C c", name: "si", sound: "k ante a, o, u; s ante e, i", note: "Igual que en español en cuanto a la regla, pero ojo con el nombre: la letra c se llama 'si', y la letra s se llama 'es'. Se confunden al deletrear por teléfono." },
      { letter: "D d", name: "di", sound: "d, con la lengua en la encía, no en los dientes", note: "La d inglesa se articula más atrás que la española y nunca se suaviza entre vocales. 'Ready' no lleva el sonido relajado de 'nada'." },
      { letter: "E e", name: "i", sound: "muy variable; muda al final de palabra", note: "La letra e se llama 'i', exactamente el sonido que usted asocia a la letra i española. Es el error de deletreo más común de un hispanohablante." },
      { letter: "F f", name: "ef", sound: "f", note: "Sin dificultad. Conviene saber que el nombre empieza por vocal: se dice 'ef', no 'efe'." },
      { letter: "G g", name: "yi", sound: "g dura casi siempre; a veces como la j inglesa", note: "Nunca suena como la jota española. 'Get' lleva g de 'gato'; 'gym' lleva el sonido de 'yi'. El nombre de la letra se confunde constantemente con el de la j." },
      { letter: "H h", name: "eich", sound: "h aspirada, y sí se pronuncia", note: "La trampa más audible. En español la h no suena; en inglés sí, y omitirla convierte 'house' en 'ouse' y 'hungry' en 'angry'. Muda solo en un puñado de palabras: hour, honest, heir." },
      { letter: "I i", name: "ai", sound: "normalmente 'i' corta, o 'ai' en sílaba abierta", note: "La letra se llama 'ai'. Al deletrear, un hispanohablante dice 'i' y el otro entiende la letra e. Practique este par antes que ningún otro." },
      { letter: "J j", name: "yei", sound: "como la y de 'yo', pero más marcada", note: "Jamás suena como la jota española. 'July' no empieza como 'julio'; empieza con el sonido de 'ya'. Este es un error que se oye inmediatamente." },
      { letter: "K k", name: "kei", sound: "k", note: "Muda delante de n al principio de palabra: knife, know, knee, knock. Se escribe y no se dice." },
      { letter: "L l", name: "el", sound: "clara al principio, oscura al final", note: "El inglés tiene dos eles. La de 'leaf' se parece a la española; la de 'full' o 'milk' se hace con la lengua atrás y suena casi como una u. El español solo tiene la primera." },
      { letter: "M m", name: "em", sound: "m", note: "Sin dificultad, salvo que en inglés cierra palabras a menudo — time, name, room — donde el español casi nunca lo hace." },
      { letter: "N n", name: "en", sound: "n", note: "No existe la ñ. Para ese sonido el inglés escribe ny o ni: canyon, onion. El apellido Muñoz se escribe Munoz y deja de sonar como es." },
      { letter: "O o", name: "ou", sound: "varias vocales según la palabra", note: "El nombre de la letra ya lleva un deslizamiento: 'ou', no 'o'. Compare hot, go, do, one y word: una letra, cinco resultados." },
      { letter: "P p", name: "pi", sound: "p con golpe de aire", note: "Esa expulsión de aire es obligatoria en inglés. Sin ella, 'pin' se oye como 'bin'. Ponga la mano delante de la boca: debe notarse el soplo." },
      { letter: "Q q", name: "kiu", sound: "kw, casi siempre", note: "Aquí la u sí suena, al revés que en español. 'Queen' es 'kwin', no 'kin'; 'quick' es 'kwik'." },
      { letter: "R r", name: "ar", sound: "una r curvada, sin vibración", note: "La lengua no toca nada. Ni el golpe de 'pero' ni la vibración de 'perro' sirven: ambos delatan el acento al instante y pueden cambiar la palabra." },
      { letter: "S s", name: "es", sound: "s, pero muy a menudo z", note: "El inglés distingue s de z y el español no. 'Rice' y 'rise' son palabras distintas, igual que 'peace' y 'peas'. La s final de los plurales suena z después de vocal o sonido sonoro." },
      { letter: "T t", name: "ti", sound: "t con golpe de aire; entre vocales, a veces una r suave", note: "En inglés americano la t entre vocales se relaja hasta sonar como la r de 'pero': water, better y city llevan ese golpecito." },
      { letter: "U u", name: "iu", sound: "muy variable", note: "El nombre de la letra es 'iu'. Compare put, cut, use y busy: cuatro palabras, cuatro vocales distintas con la misma letra." },
      { letter: "V v", name: "vi", sound: "v con los dientes sobre el labio de abajo", note: "Sonido que el español no tiene. Hay que morderse suavemente el labio inferior. Si sale una b, 'vote' se convierte en 'boat' y 'vest' en 'best'." },
      { letter: "W w", name: "dábol iu", sound: "w, como la u de 'hueso'", note: "Su nombre es literalmente 'doble u' y tarda tres sílabas en decirse, lo cual sorprende al deletrear. Muda delante de r: write, wrong, wrist." },
      { letter: "X x", name: "eks", sound: "ks, o z al principio de palabra", note: "'Xerox' empieza con z. En medio de palabra es ks, como en español, pero nunca suena como la jota de México." },
      { letter: "Y y", name: "uai", sound: "consonante y al principio; vocal i o ai al final", note: "El nombre 'uai' no se parece a nada del español. Como vocal final alterna: 'happy' termina en i, 'my' termina en ai." },
      { letter: "Z z", name: "zi", sound: "z zumbada, con vibración de la garganta", note: "Sonido que no existe en el español colombiano, donde la z es simplemente s. Ponga los dedos en la garganta: en la z inglesa debe notarse la vibración; en la s, no." }
    ],
    contrasts: [
      {
        title: "Veintiséis letras, y no hay ñ",
        detail: "El inglés tiene las mismas letras que el español menos una. Para el sonido de la ñ escribe ny o ni, y en los nombres propios simplemente lo pierde: Muñoz se registra como Munoz, Peña como Pena. Conviene decidir de antemano cómo va a dictar su apellido, porque nadie va a preguntárselo.",
        examples: ["canyon — cañón", "onion — cebolla", "jalapeño mantiene la ñ por préstamo", "Munoz, Pena, Castano en documentos"]
      },
      {
        title: "Cinco letras para las vocales, unos quince sonidos",
        detail: "Esta es la diferencia de fondo, y no se resuelve estudiando letras. El español tiene cinco vocales y cinco sonidos, siempre iguales. El inglés tiene cinco letras y alrededor de quince vocales, más las que se reducen a un sonido neutro cuando la sílaba no lleva acento. Por eso la misma letra a suena distinta en cat, car, cake y about.",
        examples: ["ship / sheep — dos vocales distintas", "full / fool", "bad / bed", "cut / cat / cart"]
      },
      {
        title: "La escritura no dice cómo se pronuncia",
        detail: "En español, quien conoce las reglas puede leer en voz alta una palabra que nunca ha visto. En inglés no. Las mismas cuatro letras -ough se pronuncian de cinco maneras distintas, y no hay regla que las prediga. La consecuencia práctica es que cada palabra nueva se aprende con su sonido, no solo con su ortografía — y que preguntar 'how do you say this?' es normal, no una señal de ignorancia.",
        examples: ["through — zru", "though — dou", "tough — taf", "thought — zot", "cough — cof"]
      },
      {
        title: "Th: dos sonidos, y ninguno existe en español",
        detail: "La lengua sale entre los dientes. Hay una versión sorda, como en 'think', y otra sonora con vibración, como en 'this'. Sustituirlas por t, d o s es el rasgo de acento más reconocible de un hispanohablante, y en algunos pares cambia la palabra. Es incómodo al principio y se corrige con un espejo.",
        examples: ["think / sink", "they / day", "three / tree", "breathe — con vibración"]
      },
      {
        title: "Nunca ponga una e delante de la s",
        detail: "El español no admite palabras que empiecen por s más consonante, así que añade una e: escuela, español, estudiante. El inglés sí lo admite, y esa e de más es lo primero que delata el acento. 'Spanish' empieza directamente por s, sin nada antes. Practíquelo despacio hasta que la palabra empiece en la s.",
        examples: ["Spanish — no 'Espanish'", "school — no 'eschool'", "stop — no 'estop'", "street, strong, student"]
      },
      {
        title: "b y v son dos palabras distintas",
        detail: "En español son el mismo sonido y la diferencia es solo ortográfica. En inglés separan significados, así que la distinción hay que producirla, no solo escribirla. La v se hace con los dientes de arriba tocando el labio de abajo; la b, con los dos labios cerrados.",
        examples: ["berry / very", "boat / vote", "best / vest", "curb / curve"]
      },
      {
        title: "La h se pronuncia",
        detail: "En español la h es muda sin excepción, y ese hábito se traslada solo. En inglés la h inicial suena casi siempre, y perderla cambia la palabra: 'hungry' pasa a 'angry', 'heart' a 'art', 'hair' a 'air'. Las excepciones son pocas y conviene memorizarlas.",
        examples: ["house, hot, help, behind", "hour, honest, heir — mudas", "hungry / angry", "heart / art"]
      },
      {
        title: "Letras mudas, que se escriben y no se dicen",
        detail: "El inglés conserva letras que dejó de pronunciar hace siglos. No hay lógica que ayude: se aprenden por grupos. Escribirlas importa, decirlas delata.",
        examples: ["kn- : knife, know, knee", "wr- : write, wrong, wrist", "-mb : lamb, thumb, climb", "-lk : walk, talk, half", "-gh : night, light, through"]
      },
      {
        title: "s y z: el inglés vibra y el español no",
        detail: "El español colombiano no tiene el sonido de la z inglesa. El inglés lo usa constantemente, sobre todo en los plurales y en los verbos: la s final suena z después de vocal o de consonante sonora. Decir todos los plurales con s sorda no impide que le entiendan, pero marca el acento en cada frase.",
        examples: ["rice / rise", "peace / peas", "dogs, cars, names — suenan con z", "cats, books, maps — suenan con s"]
      },
      {
        title: "Los nombres de las letras no se parecen a los españoles",
        detail: "Deletrear en voz alta es una tarea diaria — el apellido, el correo, el número de caso — y es donde más errores se cometen, porque tres nombres de letra inglesa suenan como otras letras españolas. La letra e se dice 'i', la letra i se dice 'ai', y la g y la j se confunden entre sí. Memorice esos cuatro antes que el resto del alfabeto.",
        examples: ["e se dice 'i'", "i se dice 'ai'", "g se dice 'yi', j se dice 'yei'", "w se dice 'dábol iu'"]
      },
      {
        title: "Mayúsculas donde el español no las pone",
        detail: "El inglés escribe con mayúscula los días, los meses, los idiomas, las nacionalidades y el pronombre 'yo'. El español no hace nada de eso. Es una diferencia puramente escrita, y es de las que más se notan en un correo de trabajo o en un formulario.",
        examples: ["Monday, March", "Spanish, Colombian", "I — siempre mayúscula", "en español: lunes, marzo, español"]
      },
      {
        title: "Las terminaciones -ed tienen tres sonidos",
        detail: "El pasado regular se escribe siempre igual y se dice de tres maneras, según el sonido que va delante. Nunca se añade una sílaba salvo después de t o d, y decir 'want-ed' donde toca 'wantid' o convertir 'played' en dos sílabas es un error muy audible.",
        examples: ["worked, watched — suena t", "played, called — suena d", "wanted, needed — suena id", "nunca 'work-ed'"]
      }
    ]
  }
};
