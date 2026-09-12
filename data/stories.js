/*
 * Reading room — bilingual short histories for extended comprehension.
 *
 * WHY THIS EXISTS: every other piece of content in this course is a DIALOGUE.
 * Dialogue teaches turn-taking, register and survival, and it is the right
 * spine for a spoken language. But it is all short turns, and a learner who
 * has only ever met short turns stalls the moment real language arrives in
 * paragraphs — a sign, a news item, a chapter, a museum panel, an email that
 * goes on for a screen. Nothing in the lessons trains sustained reading, and
 * nothing in the workbook does either. This file is that missing input.
 *
 * WHY HISTORY: the content has to be worth reading twice, because the method
 * here is re-reading. History gives a learner a reason to finish a text that
 * a manufactured exercise never does, and it carries the cultural knowledge a
 * B1/B2 conversation assumes you already have. It is also the one subject
 * where the facts belong to everybody.
 *
 * WHY EVERY STORY IS IN BOTH LANGUAGES: parallel text is the oldest and least
 * fashionable comprehension technique, and it works. The learner reads the
 * studied language, and the moment a sentence collapses the same sentence is
 * there in the language they already own — no dictionary, no tab, no break in
 * the reading. One story therefore serves BOTH directions of this course: a
 * Texan reading Spanish, and a Colombian reading English about the history
 * they already know, which is the easiest comprehensible input there is.
 *
 * COPYRIGHT: every text here was written for this course. Nothing is quoted,
 * translated or adapted from any existing book, article or website. Historical
 * FACTS are free to anyone; somebody else's SENTENCES are not, and none of
 * theirs are here. Where a story simplifies or compresses events, `caveat`
 * says so, because a learner reading for language should not quietly pick up
 * bad history along the way.
 *
 * LANGUAGE ASYMMETRY — the rule this file gets wrong most easily:
 *   `paragraphs[].es/.en`, `title`, `blurb`, `questions[].q/.a` and
 *   `structures[].quote` are THE SAME CONTENT in two languages. The renderer
 *   shows the studied one and keeps the other beside it.
 *   `glossary[].note`, `structures[].note` and `structures[].label` are NOT
 *   translations of each other's job — they are the explanation, and an
 *   explanation is only useful in the language the learner ALREADY has. `.en`
 *   is read by the Spanish learner, `.es` by the English learner. That is
 *   backwards from every other field here, and it is deliberate.
 *
 * BANDS: A1-B2 only, matching the rest of the course. Difficulty is carried by
 * sentence length, tense range and abstraction, not by rare vocabulary.
 */
const storyItems = [
  {
    id: "guatavita",
    band: "A1",
    minutes: 4,
    era: "c. 1500 – 1537",
    place: { es: "Laguna de Guatavita, Cundinamarca", en: "Lake Guatavita, Cundinamarca" },
    title: { es: "La laguna del hombre dorado", en: "The Lake of the Gilded Man" },
    blurb: {
      es: "Los españoles buscan una ciudad de oro durante siglos. El problema es que El Dorado nunca es una ciudad.",
      en: "The Spanish search for a city of gold for centuries. The problem is that El Dorado is never a city."
    },
    caveat: {
      es: "La ceremonia se conoce por relatos coloniales escritos mucho después. Los detalles son probables, no seguros.",
      en: "The ceremony is known from colonial accounts written long afterward. The details are likely, not certain."
    },
    paragraphs: [
      {
        es: "En las montañas de Cundinamarca hay una laguna redonda. Se llama Guatavita. El agua es verde y muy fría. Alrededor de la laguna hay árboles y niebla.",
        en: "High in the mountains of Cundinamarca there is a round lake. It is called Guatavita. The water is green and very cold. Around the lake there are trees and fog."
      },
      {
        es: "Hace muchos siglos, aquí vive el pueblo muisca. Los muiscas trabajan el oro con las manos. También cultivan papa y maíz en la montaña.",
        en: "Many centuries ago, the Muisca people live here. The Muisca work gold with their hands. They also grow potatoes and corn on the mountainside."
      },
      {
        es: "Cuando un cacique nuevo llega al poder, hay una ceremonia muy grande. El cacique va a la laguna con su familia y con mucha gente del pueblo.",
        en: "When a new chief comes to power, there is a very large ceremony. The chief goes to the lake with his family and with many people from his town."
      },
      {
        es: "Los sacerdotes cubren el cuerpo del cacique con polvo de oro. El cacique sube a una balsa. La balsa va despacio al centro del agua.",
        en: "The priests cover the chief's body with gold dust. The chief steps onto a raft. The raft moves slowly to the center of the water."
      },
      {
        es: "Allí el cacique deja caer oro y esmeraldas en la laguna. Es un regalo para los dioses. La gente canta y toca música en la orilla.",
        en: "There the chief drops gold and emeralds into the lake. It is a gift for the gods. The people sing and play music on the shore."
      },
      {
        es: "Los españoles escuchan esta historia en 1537. Buscan la ciudad de El Dorado durante muchos años. No encuentran nada, porque El Dorado no es una ciudad: es un hombre.",
        en: "The Spanish hear this story in 1537. They look for the city of El Dorado for many years. They find nothing, because El Dorado is not a city: it is a man."
      },
      {
        es: "Hoy la laguna está tranquila y en silencio. Es un lugar sagrado y protegido. Los visitantes caminan por un sendero y miran el agua desde arriba.",
        en: "Today the lake is calm and silent. It is a sacred, protected place. Visitors walk along a trail and look at the water from above."
      }
    ],
    glossary: [
      { es: "la laguna", en: "the lake", note: { es: "En inglés no hay una palabra corriente para una laguna de montaña: se dice simplemente lake.", en: "A high mountain lake. Spanish keeps 'lago' for the big ones, so a guide will say 'laguna' here." } },
      { es: "el cacique", en: "the chief", note: { es: "Chief sirve para jefes indígenas y también para un jefe de policía o de bomberos.", en: "An Indigenous leader. The word came into Spanish from the Caribbean and is still used, sometimes sourly, for a local political boss." } },
      { es: "el polvo de oro", en: "the gold dust", note: { es: "Dust es polvo en general; gold dust es el oro molido muy fino.", en: "'Polvo' is dust in general. The gilding is what gave 'el dorado' its name — the gilded one." } },
      { es: "la balsa", en: "the raft", note: { es: "Raft es una balsa plana; boat sería un barco con casco.", en: "A flat raft. The famous Muisca gold model of this scene sits in the Museo del Oro in Bogotá." } },
      { es: "la orilla", en: "the shore", note: { es: "Shore vale para el mar y para un lago; bank se usa sobre todo para un río.", en: "The shore or bank. Use it for a lake or the sea; a river usually takes 'bank' in English." } },
      { es: "sagrado", en: "sacred", note: { es: "Sacred es un adjetivo invariable: sacred place, sacred places.", en: "Sacred. Spanish makes it agree — 'un lugar sagrado', 'una laguna sagrada' — and English never does." } },
      { es: "el sendero", en: "the trail", note: { es: "Trail es el sendero de tierra; path es más general y camino más ancho es road.", en: "A footpath. 'Camino' would also work, but 'sendero' is what the park signs say." } }
    ],
    structures: [
      {
        key: "ser-vs-estar",
        label: { es: "Ser y estar", en: "Ser and estar" },
        quote: { es: "El agua es verde y muy fría. / Hoy la laguna está tranquila.", en: "The water is green and very cold. / Today the lake is calm." },
        note: {
          es: "El inglés usa el mismo verbo be en los dos casos, así que esta distinción desaparece al traducir. Lo que el inglés cambia es otra cosa: el orden y los adverbios.",
          en: "Two different verbs where English has one. 'Es verde' is what the water always is; 'está tranquila' is how the lake happens to be today. Swap them and you have said the lake is a calm sort of lake by nature, which is a different claim."
        }
      },
      {
        key: "articles-and-quantity",
        label: { es: "Hay: there is y there are", en: "There is, there are, and hay" },
        quote: { es: "hay una laguna redonda / hay árboles y niebla", en: "there is a round lake / there are trees and fog" },
        note: {
          es: "El español dice hay para singular y plural; el inglés obliga a elegir entre there is y there are según lo que sigue.",
          en: "'Hay' introduces something new and never changes for number — one lake or many trees, it stays 'hay'. English forces you to pick 'there is' or 'there are'; Spanish spares you that."
        }
      },
      {
        key: "dates-and-calendar",
        label: { es: "Cómo se leen los años", en: "Saying years out loud" },
        quote: { es: "Los españoles escuchan esta historia en 1537.", en: "The Spanish hear this story in 1537." },
        note: {
          es: "El inglés lee los años en dos mitades: 1537 es fifteen thirty-seven, no one thousand five hundred...",
          en: "Years take 'en' and are read as one whole number: 'mil quinientos treinta y siete'. Never split it into pairs the way English does with 'fifteen thirty-seven'."
        }
      },
      {
        key: "feelings-and-states",
        label: { es: "Estados que cambian", en: "States that can change" },
        quote: { es: "Hoy la laguna está tranquila y en silencio.", en: "Today the lake is calm and silent." },
        note: {
          es: "Fíjese en que el inglés pone el adjetivo antes del sustantivo (a calm lake) pero después del verbo be (the lake is calm), igual que el español después de estar.",
          en: "States that can change ride with 'estar'. This is the same pattern you use for people — 'está cansado', 'está feliz' — applied to a place."
        }
      }
    ],
    questions: [
      {
        q: { es: "¿De qué color es el agua de la laguna?", en: "What color is the water of the lake?" },
        a: { es: "El agua es verde.", en: "The water is green." }
      },
      {
        q: { es: "¿Qué cubre el cuerpo del cacique?", en: "What covers the chief's body?" },
        a: { es: "El polvo de oro lo cubre.", en: "Gold dust covers it." }
      },
      {
        q: { es: "¿Qué deja caer el cacique en el agua?", en: "What does the chief drop into the water?" },
        a: { es: "Deja caer oro y esmeraldas.", en: "He drops gold and emeralds." }
      },
      {
        q: { es: "¿Por qué los españoles no encuentran El Dorado?", en: "Why do the Spanish not find El Dorado?" },
        a: { es: "Porque El Dorado no es una ciudad, es un hombre.", en: "Because El Dorado is not a city, it is a man." }
      }
    ]
  },
  {
    id: "expedicion-botanica",
    band: "B2",
    minutes: 9,
    era: "1783 – 1816",
    place: { es: "Mariquita y Santafé de Bogotá, Nuevo Reino de Granada", en: "Mariquita and Santafé de Bogotá, New Kingdom of Granada" },
    title: { es: "La expedición que dibujó un reino", en: "The Expedition That Drew a Kingdom" },
    blurb: {
      es: "Durante treinta y tres años, un equipo de pintores criollos retrató la flora de medio virreinato. Casi nadie llegó a verlo.",
      en: "For thirty-three years, a team of local painters portrayed the flora of half a viceroyalty. Almost nobody got to see it."
    },
    caveat: {
      es: "Se atribuye a Mutis mucho de lo que hicieron sus pintores, cuyos nombres en buena parte se perdieron. El relato aquí procura devolverles el lugar que les corresponde.",
      en: "Much of what Mutis's painters did is credited to him, and many of their names were lost. This telling tries to give them back their place."
    },
    paragraphs: [
      {
        es: "Cuando José Celestino Mutis desembarcó en Cartagena en 1760, no venía como botánico sino como médico de un virrey. Llevaba ya varios años pidiendo a la Corona que financiara un estudio serio de las plantas americanas, y llevaba ya varios años sin respuesta. Habría muerto esperando si Carlos III no hubiera firmado por fin la orden en 1783.",
        en: "When José Celestino Mutis came ashore at Cartagena in 1760, he arrived not as a botanist but as a viceroy's physician. He had already spent years asking the Crown to fund a serious study of American plants, and he had already spent years getting no answer. He would have died waiting if Carlos III had not finally signed the order in 1783."
      },
      {
        es: "La Real Expedición Botánica se instaló primero en Mariquita, un pueblo caliente del valle del Magdalena, y después en Santafé. No era una expedición en el sentido en que solemos imaginarla: no se trataba de un puñado de europeos abriéndose paso a machete, sino de un taller. Lo que se montó allí, en realidad, fue una escuela de pintura.",
        en: "The Royal Botanical Expedition set up first in Mariquita, a hot town in the Magdalena valley, and later in Santafé. It was not an expedition in the sense we usually picture: it was not a handful of Europeans hacking their way forward with machetes, but a workshop. What was really built there was a school of painting."
      },
      {
        es: "Mutis reclutó a jóvenes criollos, mestizos e indígenas y les enseñó a dibujar con una precisión que la ciencia europea exigía pero que pocos sabían dar. Cada lámina debía mostrar la planta entera y, aparte, la flor abierta, el corte del fruto, la semilla. Que un cuadro fuera hermoso no bastaba; tenía que poder usarse para clasificar.",
        en: "Mutis recruited young men of Creole, mixed and Indigenous descent and taught them to draw with a precision that European science demanded but few could deliver. Each plate had to show the whole plant and, separately, the opened flower, the cut fruit, the seed. It was not enough for a picture to be beautiful; it had to be usable for classification."
      },
      {
        es: "Para los verdes inventaron sus propios pigmentos, porque los que venían de España se apagaban con la humedad. Ese detalle explica por qué las láminas siguen encendidas dos siglos después: no se pintaron con materiales europeos sino con lo que daba el monte. Es el tipo de solución que se le ocurre a quien vive en el lugar.",
        en: "For the greens they invented their own pigments, because the ones shipped from Spain went dull in the damp. That detail explains why the plates are still vivid two centuries later: they were painted not with European materials but with what the hills provided. It is the kind of solution that occurs to someone who lives in the place."
      },
      {
        es: "Cuando Mutis murió en 1808, se habían terminado más de seis mil láminas. Ninguna se había publicado. La obra se había vuelto tan ambiciosa que ya no cabía en ningún presupuesto, y el virreinato tenía entonces asuntos más urgentes: dos años después empezaría la guerra.",
        en: "By the time Mutis died in 1808, more than six thousand plates had been finished. Not one had been published. The work had grown so ambitious that it no longer fit any budget, and the viceroyalty had more urgent business by then: two years later the war would begin."
      },
      {
        es: "En 1816, tras la reconquista española, el general Pablo Morillo mandó empacar el archivo entero y embarcarlo para Madrid. Ciento cuatro cajones cruzaron el Atlántico y entraron en el Jardín Botánico, donde permanecieron casi sin abrirse durante más de un siglo. Al mismo tiempo, Morillo fusilaba a varios de los sabios que habían trabajado en la expedición, entre ellos Francisco José de Caldas.",
        en: "In 1816, after the Spanish reconquest, General Pablo Morillo ordered the entire archive packed and shipped to Madrid. One hundred and four crates crossed the Atlantic and entered the Botanical Garden, where they sat almost unopened for more than a century. At the same time, Morillo was executing several of the scholars who had worked on the expedition, among them Francisco José de Caldas."
      },
      {
        es: "Quizá sea esa la razón por la que la expedición se recuerda de dos maneras incompatibles. Para unos es el gran momento científico de la Colonia; para otros, la prueba de que el conocimiento producido aquí terminaba siempre en otra parte. Las dos lecturas se sostienen, y conviene que un lector las tenga ambas presentes.",
        en: "That may be why the expedition is remembered in two incompatible ways. For some it is the great scientific moment of the colonial period; for others, proof that knowledge produced here always ended up somewhere else. Both readings hold up, and a reader does well to keep both in mind."
      },
      {
        es: "Las láminas siguen en Madrid: se han digitalizado y cualquiera puede verlas hoy desde Bogotá, lo cual resuelve el problema del acceso sin resolver el otro. Aunque se hayan publicado por fin, no se han devuelto.",
        en: "The plates are still in Madrid: they have been digitized and anyone can look at them from Bogotá today, which solves the problem of access without solving the other one. Even though they have finally been published, they have not been returned."
      }
    ],
    glossary: [
      { es: "la lámina", en: "the plate", note: { es: "Plate es la ilustración de un libro científico; no confundir con el plato de comer, que también es plate.", en: "A full-page scientific illustration. English reuses 'plate' for a dinner plate, which is why the context does the work." } },
      { es: "el criollo", en: "the Creole", note: { es: "En inglés Creole significa cosas distintas según el país; aquí conviene añadir American-born of Spanish descent.", en: "In this period, a person of Spanish descent born in the Americas — a legal caste, not a compliment. English 'Creole' means different things elsewhere, so it usually needs glossing." } },
      { es: "el virreinato", en: "the viceroyalty", note: { es: "Viceroy es el virrey y viceroyalty su territorio. La sílaba vice- se pronuncia VICE, no vi-ce.", en: "The territory a viceroy governed. Colombia, Venezuela, Ecuador and Panama were one of them." } },
      { es: "el monte", en: "the hills", note: { es: "No es mount: monte aquí es campo silvestre, y en inglés se dice the bush o the hills.", en: "Not a single mountain — wild country in general. 'El monte' is where things grow untended." } },
      { es: "los cajones", en: "the crates", note: { es: "Crate es la caja grande de madera para transportar; box es cualquier caja.", en: "Big wooden shipping boxes. A small one is 'una caja'; the -ón ending makes it large." } },
      { es: "fusilar", en: "to execute by firing squad", note: { es: "El inglés no tiene un verbo para esto: hay que decir execute by firing squad o shoot.", en: "Spanish has a single verb for it, from 'fusil' (rifle). English needs a whole phrase, which is worth noticing." } },
      { es: "el sabio", en: "the scholar", note: { es: "Sabio no es wise man en este contexto sino scholar o scientist.", en: "A learned man — the period's word for a scientist. Calling someone 'sabio' today sounds either historical or faintly ironic." } },
      { es: "conviene que", en: "does well to", note: { es: "Fórmula impersonal muy frecuente en prosa formal; pide subjuntivo detrás.", en: "An impersonal 'you ought to'. It takes the subjunctive after it, and it is far more common in written Spanish than any direct 'debería'." } }
    ],
    structures: [
      {
        key: "counterfactual-past",
        label: { es: "Lo que habría pasado", en: "Past counterfactuals" },
        quote: { es: "Habría muerto esperando si Carlos III no hubiera firmado por fin la orden en 1783.", en: "He would have died waiting if Carlos III had not finally signed the order in 1783." },
        note: {
          es: "El inglés hace lo mismo con would have + participio y had + participio. La diferencia es que el inglés admite contracciones (he'd have died, hadn't signed) que en español no existen.",
          en: "The full past counterfactual: 'habría' + participle in the result, 'hubiera' + participle in the 'si' clause. Note that 'si' never takes 'habría' — putting the conditional inside the 'si' clause is the single most recognizable learner error in this structure."
        }
      },
      {
        key: "pluperfect",
        label: { es: "El pluscuamperfecto", en: "The pluperfect" },
        quote: { es: "Llevaba ya varios años pidiendo... / se habían terminado más de seis mil láminas", en: "He had already spent years asking... / more than six thousand plates had been finished" },
        note: {
          es: "El inglés usa had + participio igual, pero no tiene el giro llevar + gerundio: hay que decir he had spent years asking o he had been asking for years.",
          en: "'Había' + participle sets a point behind the point you are already telling. Spanish also has 'llevaba + gerund' for duration up to that point, which English can only render with 'had been -ing' or 'had spent years -ing'."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "La pasiva y el se impersonal", en: "Impersonal se and the passive" },
        quote: { es: "Lo que se montó allí, en realidad, fue una escuela de pintura. / Se han digitalizado y cualquiera puede verlas hoy desde Bogotá.", en: "What was really built there was a school of painting. / They have been digitized and anyone can look at them from Bogotá today." },
        note: {
          es: "El inglés prefiere la pasiva con be (is credited, have been digitized) donde el español prefiere se. Traducir se + verbo por una pasiva inglesa suele sonar mejor que buscar un sujeto.",
          en: "Written Spanish reaches for 'se' where English reaches for the passive. This is the register marker of formal Spanish prose: if your writing sounds like a translation, it is usually because you kept English's 'by' agents instead of dropping them into 'se'."
        }
      },
      {
        key: "concession",
        label: { es: "Conceder con even though", en: "Conceding a point with aunque" },
        quote: { es: "Aunque se hayan publicado por fin, no se han devuelto.", en: "Even though they have finally been published, they have not been returned." },
        note: {
          es: "Aunque + subjuntivo aquí concede un hecho ya sabido para restarle importancia; el inglés no marca esa diferencia y dice even though en los dos casos.",
          en: "'Aunque' with the subjunctive concedes a fact you both already know, in order to set it aside. With the indicative it would present the publication as news. English cannot mark that distinction at all, so translations lose it."
        }
      },
      {
        key: "conjecture",
        label: { es: "Matizar con may y might", en: "Hedging with quizá" },
        quote: { es: "Quizá sea esa la razón por la que la expedición se recuerda de dos maneras incompatibles.", en: "That may be why the expedition is remembered in two incompatible ways." },
        note: {
          es: "El inglés marca la conjetura con un verbo modal (may, might) y no toca el resto de la frase.",
          en: "'Quizá' plus the subjunctive hedges a claim without weakening the sentence around it. Swapping in the indicative ('quizá es') is heard, but in writing the subjunctive is what a reader expects."
        }
      },
      {
        key: "discourse-connectors",
        label: { es: "Referirse a toda la frase con which", en: "Referring back with lo cual" },
        quote: { es: "lo cual resuelve el problema del acceso sin resolver el otro", en: "which solves the problem of access without solving the other one" },
        note: {
          es: "Lo cual se traduce por which cuando se refiere a toda la oración anterior, no a un sustantivo.",
          en: "'Lo cual' refers back to the whole preceding clause, not to a noun — that is what separates it from 'que'. It is a written-register connector; in speech you would hear 'y eso'."
        }
      }
    ],
    questions: [
      {
        q: { es: "¿Por qué la expedición se parecía más a un taller que a un viaje?", en: "Why did the expedition resemble a workshop more than a journey?" },
        a: { es: "Porque lo que se montó fue una escuela de pintura, donde los artistas trabajaban las láminas.", en: "Because what was built was a school of painting, where the artists worked on the plates." }
      },
      {
        q: { es: "¿Por qué inventaron sus propios pigmentos verdes?", en: "Why did they invent their own green pigments?" },
        a: { es: "Porque los pigmentos españoles se apagaban con la humedad del trópico.", en: "Because the Spanish pigments went dull in the tropical damp." }
      },
      {
        q: { es: "¿Qué pasó con el archivo en 1816?", en: "What happened to the archive in 1816?" },
        a: { es: "Morillo lo mandó empacar en ciento cuatro cajones y embarcarlo para Madrid.", en: "Morillo had it packed into one hundred and four crates and shipped to Madrid." }
      },
      {
        q: { es: "¿Cuáles son las dos lecturas incompatibles de la expedición?", en: "What are the two incompatible readings of the expedition?" },
        a: { es: "Que fue el gran momento científico de la Colonia, y que el conocimiento producido aquí siempre terminaba en otra parte.", en: "That it was the great scientific moment of the colonial period, and that knowledge produced here always ended up somewhere else." }
      }
    ]
  },
  {
    id: "catedral-sal",
    band: "A1",
    minutes: 4,
    era: "Tiempos muiscas – 1995",
    place: { es: "Zipaquirá, Cundinamarca", en: "Zipaquirá, Cundinamarca" },
    title: { es: "Una iglesia bajo la sal", en: "A Church Under the Salt" },
    blurb: {
      es: "En Zipaquirá, la sal da trabajo, memoria y una catedral bajo la montaña.",
      en: "In Zipaquirá, salt gives work, memory, and a cathedral under the mountain."
    },
    caveat: {
      es: "Este relato comprime muchos siglos de minería. La devoción de los mineros es real, pero cada capilla tuvo cambios y fechas distintas.",
      en: "This story compresses many centuries of mining. The miners' devotion is real, but each chapel had different changes and dates."
    },
    paragraphs: [
      {
        es: "En Zipaquirá hay sal bajo la montaña. La sal viene de tiempos muiscas. Los muiscas sacan sal y la cambian. Con la sal compran maíz, mantas y oro.",
        en: "In Zipaquirá there is salt under the mountain. The salt comes from Muisca times. The Muisca take out salt and trade it. With the salt they buy corn, blankets, and gold."
      },
      {
        es: "Muchos años después, los mineros entran al cerro. Trabajan con picas, lámparas y mucho cuidado. El aire es oscuro y la sal brilla. Cada día ellos bajan antes del sol.",
        en: "Many years later, the miners enter the hill. They work with picks, lamps, and great care. The air is dark and the salt shines. Every day they go down before sunrise."
      },
      {
        es: "Los mineros son hombres de fe. En los túneles hacen una capilla pequeña. Allí rezan antes del trabajo peligroso. La cruz está cerca de la sal.",
        en: "The miners are men of faith. In the tunnels they make a small chapel. There they pray before the dangerous work. The cross is near the salt."
      },
      {
        es: "La primera catedral crece dentro de la mina. Muchas personas llegan para verla. Pero la montaña es vieja e insegura. Entonces la ciudad busca otro lugar.",
        en: "The first cathedral grows inside the mine. Many people come to see it. But the mountain is old and unsafe. So the city looks for another place."
      },
      {
        es: "En 1995 abre una catedral moderna. Está en un túnel más profundo. Tiene naves grandes y una cruz alta. La luz azul toca las paredes blancas.",
        en: "In 1995 a modern cathedral opens. It is in a deeper tunnel. It has large naves and a tall cross. Blue light touches the white walls."
      },
      {
        es: "Hoy la Catedral de Sal recibe visitantes. No es una mina activa común. Es museo, iglesia y camino subterráneo. Bajo tierra, la historia todavía tiene sabor.",
        en: "Today the Salt Cathedral welcomes visitors. It is not an ordinary active mine. It is a museum, a church, and an underground path. Underground, history still has a taste."
      }
    ],
    glossary: [
      { es: "la sal", en: "the salt", note: { es: "Salt no cambia en plural cuando hablamos del material en general.", en: "The everyday word for salt. Spanish uses 'la' because the noun is feminine." } },
      { es: "los mineros", en: "the miners", note: { es: "Miner es la persona que trabaja en una mina; mine es el lugar.", en: "Workers in a mine. The ending -ero often names a job connected to a thing." } },
      { es: "el túnel", en: "the tunnel", note: { es: "Tunnel se escribe con doble n en inglés y se pronuncia con una vocal corta.", en: "A passage through rock. In Spanish the stress falls on the first syllable: TÚ-nel." } },
      { es: "la capilla", en: "the chapel", note: { es: "Chapel es una iglesia pequeña o un espacio para rezar, no siempre un edificio aparte.", en: "A small place for prayer. It is smaller than 'la iglesia' and can sit inside another place." } },
      { es: "la cruz", en: "the cross", note: { es: "Cross puede ser un objeto religioso o el verbo cruzar; aquí es el objeto.", en: "The religious object. Notice that 'la cruz' is feminine even though it ends in z." } },
      { es: "subterráneo", en: "underground", note: { es: "Underground puede ser adjetivo o adverbio: an underground path, history underground.", en: "Literally under the ground. It describes both a place and a way of moving." } }
    ],
    structures: [
      {
        key: "articles-and-quantity",
        label: { es: "There is y cantidades", en: "Hay for what exists" },
        quote: { es: "En Zipaquirá hay sal bajo la montaña.", en: "In Zipaquirá there is salt under the mountain." },
        note: {
          es: "El inglés usa there is para presentar una cosa o material; con plural usa there are.",
          en: "'Hay' introduces what exists. It does not change for singular, plural, or a mass noun like 'sal'."
        }
      },
      {
        key: "ser-vs-estar",
        label: { es: "Be para identidad y lugar", en: "Ser and estar split be" },
        quote: { es: "Los mineros son hombres de fe. / Está en un túnel más profundo.", en: "The miners are men of faith. / It is in a deeper tunnel." },
        note: {
          es: "El inglés usa are e is en ambos casos; el contexto dice si habla de identidad o lugar.",
          en: "Spanish uses 'son' for identity and 'está' for location. English uses forms of one verb, 'be'."
        }
      },
      {
        key: "dates-and-calendar",
        label: { es: "Años en inglés", en: "Dates with en" },
        quote: { es: "En 1995 abre una catedral moderna.", en: "In 1995 a modern cathedral opens." },
        note: {
          es: "En inglés los años suelen leerse en dos partes: nineteen ninety-five.",
          en: "Spanish puts 'en' before a year. Read 1995 as 'mil novecientos noventa y cinco'."
        }
      },
      {
        key: "color-and-description",
        label: { es: "Adjetivos de color", en: "Colors after nouns" },
        quote: { es: "La luz azul toca las paredes blancas.", en: "Blue light touches the white walls." },
        note: {
          es: "En inglés el color va antes del sustantivo: blue light, white walls.",
          en: "Most Spanish color words come after the noun and agree in number: 'paredes blancas'."
        }
      }
    ],
    questions: [
      { q: { es: "¿Qué hay bajo la montaña en Zipaquirá?", en: "What is under the mountain in Zipaquirá?" }, a: { es: "Hay sal bajo la montaña.", en: "There is salt under the mountain." } },
      { q: { es: "¿Qué hacen los mineros en los túneles?", en: "What do the miners make in the tunnels?" }, a: { es: "Hacen una capilla pequeña.", en: "They make a small chapel." } },
      { q: { es: "¿Cuándo abre la catedral moderna?", en: "When does the modern cathedral open?" }, a: { es: "Abre en 1995.", en: "It opens in 1995." } },
      { q: { es: "¿Qué es hoy la Catedral de Sal?", en: "What is the Salt Cathedral today?" }, a: { es: "Es museo, iglesia y camino subterráneo.", en: "It is a museum, a church, and an underground path." } }
    ]
  },
  {
    id: "fundacion-bogota",
    band: "A1",
    minutes: 4,
    era: "1538",
    place: { es: "Sabana de Bogotá, Nuevo Reino de Granada", en: "Bogotá Savanna, New Kingdom of Granada" },
    title: { es: "Doce casas en la sabana", en: "Twelve Houses on the Savanna" },
    blurb: {
      es: "Santafé nace pequeña, pero tres conquistadores quieren la misma tierra.",
      en: "Santafé is born small, but three conquistadors want the same land."
    },
    caveat: {
      es: "La fecha y la ceremonia de fundación tienen versiones distintas. El relato usa la tradición más conocida y simplifica disputas legales posteriores.",
      en: "The date and founding ceremony have different versions. This story uses the best-known tradition and simplifies later legal disputes."
    },
    paragraphs: [
      {
        es: "En 1538 la sabana es fría y abierta. Hay cerros verdes al oriente. Cerca vive mucha gente muisca. El lugar tiene agua, maíz y caminos.",
        en: "In 1538 the savanna is cold and open. There are green hills to the east. Many Muisca people live nearby. The place has water, corn, and roads."
      },
      {
        es: "Gonzalo Jiménez de Quesada llega desde el río Magdalena. Sus hombres están cansados y enfermos. Buscan oro, comida y descanso. En la sabana levantan doce chozas.",
        en: "Gonzalo Jiménez de Quesada arrives from the Magdalena River. His men are tired and sick. They look for gold, food, and rest. On the savanna they raise twelve huts."
      },
      {
        es: "También hacen una capilla de barro y paja. La ciudad nueva se llama Santafé. Es pequeña, pero tiene una plaza. La plaza mira hacia los cerros.",
        en: "They also make a chapel of mud and straw. The new city is called Santafé. It is small, but it has a plaza. The plaza faces the hills."
      },
      {
        es: "Pronto llega Nicolás de Federmán desde Venezuela. Viene con soldados y caballos flacos. Él también quiere esta tierra. No llega como amigo tranquilo.",
        en: "Soon Nicolás de Federmán arrives from Venezuela. He comes with soldiers and thin horses. He also wants this land. He does not arrive as a calm friend."
      },
      {
        es: "Después llega Sebastián de Belalcázar desde el sur. Trae noticias de Quito y Popayán. Ahora hay tres jefes en un sitio. Todos dicen: esta tierra es mía.",
        en: "Then Sebastián de Belalcázar arrives from the south. He brings news from Quito and Popayán. Now there are three leaders in one place. All of them say: this land is mine."
      },
      {
        es: "Los tres viajan a España por una respuesta. Mientras tanto, Santafé sigue en la sabana. De doce chozas nace Bogotá. La ciudad crece entre lluvia y montaña.",
        en: "The three travel to Spain for an answer. Meanwhile, Santafé remains on the savanna. From twelve huts Bogotá is born. The city grows between rain and mountain."
      }
    ],
    glossary: [
      { es: "la sabana", en: "the savanna", note: { es: "Savanna es una llanura abierta; aquí es alta y fría, no tropical como en muchas imágenes.", en: "An open plain. The Bogotá savanna is high and cool, so the word may surprise English speakers." } },
      { es: "los cerros", en: "the hills", note: { es: "Hills son elevaciones menores que mountains; en Bogotá los cerros son una referencia diaria.", en: "The hills or ridges beside Bogotá. 'Cerro' is smaller and more local than 'montaña'." } },
      { es: "las chozas", en: "the huts", note: { es: "Hut es una vivienda muy simple; house sería más general y más sólida.", en: "Simple huts. The word makes the first settlement sound small and rough." } },
      { es: "la capilla", en: "the chapel", note: { es: "Chapel es un espacio religioso pequeño; church puede ser más grande o más general.", en: "A small religious building or room. It often appears in founding stories." } },
      { es: "la plaza", en: "the plaza", note: { es: "Plaza existe en inglés para una plaza pública latinoamericana; square también sirve en otros contextos.", en: "The central public square. In colonial towns, the plaza organized power and daily life." } },
      { es: "los jefes", en: "the leaders", note: { es: "Leader es la persona que manda o guía; boss sería más informal o laboral.", en: "People in charge. 'Jefe' can be a boss, a commander, or a leader." } }
    ],
    structures: [
      {
        key: "dates-and-calendar",
        label: { es: "Fechas con in", en: "Years with en" },
        quote: { es: "En 1538 la sabana es fría y abierta.", en: "In 1538 the savanna is cold and open." },
        note: {
          es: "En inglés la preposición para un año es in: in 1538.",
          en: "Spanish uses 'en' before years. It is the same small word used for many locations."
        }
      },
      {
        key: "articles-and-quantity",
        label: { es: "There are con plural", en: "Hay for singular and plural" },
        quote: { es: "Ahora hay tres jefes en un sitio.", en: "Now there are three leaders in one place." },
        note: {
          es: "El inglés cambia a there are porque leaders es plural.",
          en: "'Hay' stays the same with 'tres jefes'. English changes from 'there is' to 'there are'."
        }
      },
      {
        key: "feelings-and-states",
        label: { es: "Estados con be", en: "Temporary states with estar" },
        quote: { es: "Sus hombres están cansados y enfermos.", en: "His men are tired and sick." },
        note: {
          es: "El inglés usa are para estados físicos como tired y sick.",
          en: "'Están' marks a condition, not an identity. The men are tired and sick at that moment."
        }
      },
      {
        key: "possessive-standalone",
        label: { es: "Mine sin sustantivo", en: "Mío standing alone" },
        quote: { es: "Todos dicen: esta tierra es mía.", en: "All of them say: this land is mine." },
        note: {
          es: "Mine reemplaza my land; por eso no lleva otro sustantivo después.",
          en: "'Mía' agrees with 'tierra' and stands alone. It means 'mine', not 'my'."
        }
      }
    ],
    questions: [
      { q: { es: "¿Cómo es la sabana en 1538?", en: "What is the savanna like in 1538?" }, a: { es: "Es fría y abierta.", en: "It is cold and open." } },
      { q: { es: "¿Cuántas chozas levantan en la sabana?", en: "How many huts do they raise on the savanna?" }, a: { es: "Levantan doce chozas.", en: "They raise twelve huts." } },
      { q: { es: "¿Quién llega desde Venezuela?", en: "Who arrives from Venezuela?" }, a: { es: "Llega Nicolás de Federmán.", en: "Nicolás de Federmán arrives." } },
      { q: { es: "¿Por qué viajan los tres a España?", en: "Why do the three travel to Spain?" }, a: { es: "Viajan por una respuesta.", en: "They travel for an answer." } }
    ]
  },
  {
    id: "policarpa",
    band: "A2",
    minutes: 5,
    era: "1795 – 1817",
    place: { es: "Guaduas y Santafé de Bogotá, Nueva Granada", en: "Guaduas and Santafé de Bogotá, New Granada" },
    title: { es: "La costurera que llevó mensajes", en: "The Seamstress Who Carried Messages" },
    blurb: {
      es: "Policarpa Salavarrieta cosía en Bogotá, pero sus manos también movían noticias para la independencia.",
      en: "Policarpa Salavarrieta sewed in Bogotá, but her hands also moved news for independence."
    },
    caveat: {
      es: "Muchos detalles de La Pola vienen de memoria patriótica posterior. Sus redes existieron, pero algunas frases finales tienen versiones distintas.",
      en: "Many details about La Pola come from later patriotic memory. Her networks existed, but some final phrases have different versions."
    },
    paragraphs: [
      {
        es: "Policarpa Salavarrieta nació en Guaduas, en una familia sin gran riqueza ni protección. De niña viajó con parientes y aprendió oficios útiles para sobrevivir sola. Cuando era joven, la guerra ya partía caminos, familias y amistades antiguas.",
        en: "Policarpa Salavarrieta was born in Guaduas, in a family without great wealth or protection. As a girl she traveled with relatives and learned useful trades to survive alone. When she was young, the war was already splitting roads, families, and old friendships."
      },
      {
        es: "En Bogotá trabajaba como costurera y entraba en muchas casas del centro. Mientras medía telas, escuchaba nombres, planes y miedos de los realistas. Su canasto parecía normal, pero podía esconder cartas pequeñas bajo los hilos.",
        en: "In Bogotá she worked as a seamstress and entered many houses downtown. While she measured cloth, she heard names, plans, and fears from the royalists. Her basket looked ordinary, but it could hide small letters under the thread."
      },
      {
        es: "La Pola llevaba mensajes para los patriotas y buscaba jóvenes para el ejército. También enviaba noticias sobre soldados, armas, dinero y movimientos de tropas. La red usaba criadas, artesanos y viajeros de confianza entre pueblos cercanos.",
        en: "La Pola carried messages for the patriots and looked for young men for the army. She also sent news about soldiers, weapons, money, and troop movements. The network used maids, artisans, and trusted travelers between nearby towns."
      },
      {
        es: "Su trabajo parecía pequeño, porque una aguja no parece arma de guerra. Pero en una ciudad vigilada, cada papel podía salvar una vida. Una dirección correcta movía hombres antes de una captura o una redada.",
        en: "Her work seemed small, because a needle does not look like a weapon of war. But in a watched city, each paper could save a life. One correct address moved men before an arrest or a raid."
      },
      {
        es: "Las autoridades la descubrieron en 1817 y la llevaron presa a un cuartel. Un correo capturado ayudó a revelar nombres y rutas de la conspiración. La juzgaron con otros compañeros, mientras Bogotá aprendía a tener miedo público.",
        en: "The authorities discovered her in 1817 and took her prisoner to a barracks. A captured courier helped reveal names and routes in the conspiracy. They tried her with other companions, while Bogotá was learning to feel public fear."
      },
      {
        es: "El 14 de noviembre la sacaron al patíbulo en la plaza mayor. La llevaron entre soldados, vecinos curiosos y familias asustadas por el castigo. Antes de morir, habló contra el gobierno español con voz firme.",
        en: "On November 14 they took her to the scaffold in the main plaza. They led her among soldiers, curious neighbors, and families frightened by the punishment. Before she died, she spoke against the Spanish government with a firm voice."
      },
      {
        es: "Sus palabras finales corrieron por la ciudad y luego por la república. Muchos recordaron no solo su muerte, sino su oficio secreto durante la reconquista. Desde entonces, La Pola quedó como símbolo nacional de valentía civil.",
        en: "Her final words ran through the city and later through the republic. Many remembered not only her death, but her secret work during the reconquest. Since then, La Pola has remained a national symbol of civic courage."
      }
    ],
    glossary: [
      { es: "la costurera", en: "the seamstress", note: { es: "Seamstress es una mujer que cose; hoy también se usa sewer o tailor según el trabajo.", en: "A woman who sews for work. The word comes from 'costura', sewing." } },
      { es: "los mensajes", en: "the messages", note: { es: "Message puede ser oral, escrito o digital; aquí son comunicaciones secretas.", en: "Messages. In this story they are secret political communications, not casual notes." } },
      { es: "la red", en: "the network", note: { es: "Network puede ser una red de personas, no solo internet o cables.", en: "A web of people working together. Here it is a secret political network." } },
      { es: "los patriotas", en: "the patriots", note: { es: "Patriot en inglés puede sonar positivo o político; aquí nombra el bando independentista.", en: "The independence supporters. In Spanish America, 'patriotas' often contrasts with 'realistas'." } },
      { es: "los realistas", en: "the royalists", note: { es: "Royalist es quien apoya al rey; no significa realistic.", en: "Supporters of the Spanish king. Do not confuse 'realista' with modern 'realistic'." } },
      { es: "el patíbulo", en: "the scaffold", note: { es: "Scaffold aquí es la plataforma de ejecución, no una estructura de construcción.", en: "The execution platform. It is a formal historical word, like 'scaffold'." } },
      { es: "la valentía", en: "courage", note: { es: "Courage no lleva artículo cuando habla de la cualidad en general.", en: "Bravery or courage. It is an abstract noun built from 'valiente'." } }
    ],
    structures: [
      {
        key: "preterite-vs-imperfect",
        label: { es: "Was born y was splitting", en: "Pretérito event, imperfect background" },
        quote: { es: "Policarpa Salavarrieta nació en Guaduas / la guerra ya partía caminos, familias y amistades antiguas", en: "Policarpa Salavarrieta was born in Guaduas / the war was already splitting roads, families, and old friendships" },
        note: {
          es: "El inglés usa was born para el hecho cerrado y was splitting para el fondo en progreso.",
          en: "'Nació' is a completed event. 'Partía' gives the ongoing background around her youth."
        }
      },
      {
        key: "past-habits",
        label: { es: "Past routine with worked", en: "Imperfect for repeated work" },
        quote: { es: "En Bogotá trabajaba como costurera y entraba en muchas casas.", en: "In Bogotá she worked as a seamstress and entered many houses." },
        note: {
          es: "Worked puede ser un hábito pasado; el inglés no siempre marca la repetición con used to.",
          en: "'Trabajaba' and 'entraba' describe repeated activity, not one single errand."
        }
      },
      {
        key: "object-pronouns",
        label: { es: "Object after the verb", en: "La before the verb" },
        quote: { es: "Las autoridades la descubrieron en 1817 y la llevaron presa.", en: "The authorities discovered her in 1817 and took her prisoner." },
        note: {
          es: "El inglés pone her después de discovered y took; no va antes del verbo.",
          en: "Spanish places 'la' before the conjugated verbs. It means 'her' here."
        }
      },
      {
        key: "por-vs-para",
        label: { es: "For a side", en: "Para for who receives help" },
        quote: { es: "La Pola llevaba mensajes para los patriotas", en: "La Pola carried messages for the patriots" },
        note: {
          es: "For puede indicar destinatario o beneficio; en este caso los patriots reciben la ayuda.",
          en: "'Para los patriotas' names the side that receives the messages and benefits from them."
        }
      },
      {
        key: "time-since",
        label: { es: "Since then", en: "Desde entonces" },
        quote: { es: "Desde entonces, La Pola quedó como símbolo nacional de valentía civil.", en: "Since then, La Pola has remained a national symbol of civic courage." },
        note: {
          es: "Since then conecta un punto del pasado con una situación que llega hasta ahora.",
          en: "'Desde entonces' links a past moment to a lasting result in the present."
        }
      }
    ],
    questions: [
      { q: { es: "¿En qué trabajaba Policarpa en Bogotá?", en: "What work did Policarpa do in Bogotá?" }, a: { es: "Trabajaba como costurera.", en: "She worked as a seamstress." } },
      { q: { es: "¿Para quién llevaba mensajes La Pola?", en: "For whom did La Pola carry messages?" }, a: { es: "Llevaba mensajes para los patriotas.", en: "She carried messages for the patriots." } },
      { q: { es: "¿Cuándo la descubrieron las autoridades?", en: "When did the authorities discover her?" }, a: { es: "La descubrieron en 1817.", en: "They discovered her in 1817." } },
      { q: { es: "¿Qué hizo antes de morir?", en: "What did she do before dying?" }, a: { es: "Habló contra el gobierno español.", en: "She spoke against the Spanish government." } }
    ]
  },
  {
    id: "paso-de-los-andes",
    band: "A2",
    minutes: 5,
    era: "1819",
    place: { es: "Llanos, páramo de Pisba y Boyacá", en: "The plains, Pisba páramo, and Boyacá" },
    title: { es: "El frío que abrió el camino", en: "The Cold That Opened the Road" },
    blurb: {
      es: "El ejército de Bolívar salió del calor, cruzó el páramo helado y sorprendió a los realistas en Boyacá.",
      en: "Bolívar's army left the heat, crossed the freezing páramo, and surprised the royalists at Boyacá."
    },
    caveat: {
      es: "Las cifras de muertos, enfermos y caballos perdidos varían según las fuentes. Este relato resume la marcha sin detallar todas las unidades militares.",
      en: "The numbers of dead, sick, and lost horses vary by source. This story summarizes the march without detailing every military unit."
    },
    paragraphs: [
      {
        es: "En 1819, Bolívar preparó una marcha que parecía imposible para sus enemigos. Sus soldados venían de los llanos, donde el calor mandaba cada jornada. Allí sabían cruzar ríos, montar caballos y dormir con mosquitos encima.",
        en: "In 1819, Bolívar prepared a march that seemed impossible to his enemies. His soldiers came from the plains, where heat ruled every day. There they knew how to cross rivers, ride horses, and sleep with mosquitoes on them."
      },
      {
        es: "Muchos hombres no tenían abrigos buenos ni botas fuertes para la altura helada. Habían peleado entre barro, ganado, pantanos y lluvias calientes. Para subir a los Andes, llevaban más valor que ropa seca.",
        en: "Many men did not have good coats or strong boots for the freezing altitude. They had fought among mud, cattle, swamps, and hot rains. To climb the Andes, they carried more courage than dry clothing."
      },
      {
        es: "Luego el ejército subió hacia el páramo de Pisba por senderos difíciles y solos. El aire se volvió delgado, y la lluvia cortaba la cara. De noche, el suelo mojado parecía robar el calor del cuerpo cansado.",
        en: "Then the army climbed toward the Pisba páramo along difficult and lonely trails. The air became thin, and the rain cut their faces. At night, the wet ground seemed to steal heat from the tired body."
      },
      {
        es: "Los caballos caían en el camino, y algunos soldados también morían allí. Las mulas perdían cargas con comida, armas, pólvora y mantas mojadas. Otros seguían porque volver era tan peligroso como avanzar sin descanso.",
        en: "The horses fell on the road, and some soldiers also died there. The mules lost loads with food, weapons, gunpowder, and wet blankets. Others kept going because turning back was as dangerous as moving forward without rest."
      },
      {
        es: "Cuando llegaron al otro lado, parecían un ejército vencido por la montaña. Tenían hambre, frío y ropa rota, pero todavía obedecían órdenes. En los pueblos de Boyacá, algunas familias dieron comida, noticias y animales.",
        en: "When they reached the other side, they looked like an army defeated by the mountain. They were hungry and cold, with torn clothing, but they still obeyed orders. In the towns of Boyacá, some families gave food, news, and animals."
      },
      {
        es: "Los realistas no esperaban enemigos desde esa montaña tan fría y alta. Vigilaban caminos más cómodos y pasos más conocidos hacia la capital colonial. Por eso, la sorpresa valía tanto como un batallón fresco.",
        en: "The royalists did not expect enemies from that cold, high mountain. They watched easier roads and better-known passes toward the colonial capital. For that reason, the surprise was worth as much as a fresh battalion."
      },
      {
        es: "Días después, en Boyacá, la apuesta mostró su fuerza militar completa. El ejército arruinado ganó una batalla que cambió la independencia. La victoria abrió Bogotá y quebró el poder español en Nueva Granada central entera.",
        en: "Days later, at Boyacá, the gamble showed its full military strength. The ruined army won a battle that changed independence. The victory opened Bogotá and broke Spanish power across central New Granada."
      }
    ],
    glossary: [
      { es: "los llanos", en: "the plains", note: { es: "Plains son tierras planas y abiertas; en Colombia los Llanos son una región específica.", en: "The flat eastern plains. In Colombian history, 'los llanos' is also a specific region." } },
      { es: "el páramo", en: "the páramo", note: { es: "Páramo suele quedarse como páramo en inglés porque no existe un equivalente exacto.", en: "A cold, high moorland ecosystem in the Andes. English often borrows the Spanish word." } },
      { es: "los abrigos", en: "the coats", note: { es: "Coat es una prenda para el frío; shelter sería abrigo como refugio.", en: "Clothing for cold weather. The same Spanish noun can also mean shelter." } },
      { es: "los caballos", en: "the horses", note: { es: "Horse es el animal; cavalry es la unidad militar montada.", en: "Horses. In this march, losing horses also meant losing speed and supplies." } },
      { es: "las mulas", en: "the mules", note: { es: "Mule es un animal fuerte para carga; fue útil en caminos malos.", en: "Pack animals. On steep roads, mules often carried what carts could not." } },
      { es: "los realistas", en: "the royalists", note: { es: "Royalist es quien apoyaba al rey español; no significa realistic.", en: "Supporters of the Spanish monarchy. The opposite side here is the independence army." } },
      { es: "la batalla", en: "the battle", note: { es: "Battle es un combate importante; war es toda la guerra.", en: "A single major fight. 'La guerra' is the larger conflict." } }
    ],
    structures: [
      {
        key: "preterite-vs-imperfect",
        label: { es: "Event and background", en: "Pretérito action, imperfect setting" },
        quote: { es: "Bolívar preparó una marcha que parecía imposible.", en: "Bolívar prepared a march that seemed impossible." },
        note: {
          es: "Prepared cuenta la acción principal; seemed describe cómo se veía la marcha en ese momento.",
          en: "'Preparó' moves the story forward. 'Parecía' describes the situation around that action."
        }
      },
      {
        key: "past-habits",
        label: { es: "Kept going", en: "Imperfect for continuing action" },
        quote: { es: "Otros seguían porque volver era tan peligroso como avanzar.", en: "Others kept going because turning back was as dangerous as moving forward." },
        note: {
          es: "Kept going expresa una acción continuada, no un solo paso.",
          en: "'Seguían' shows continued effort over time. It is not just one completed step."
        }
      },
      {
        key: "comparison-equality",
        label: { es: "As dangerous as", en: "Tan... como" },
        quote: { es: "volver era tan peligroso como avanzar", en: "turning back was as dangerous as moving forward" },
        note: {
          es: "As... as compara dos cosas con el mismo grado de peligro.",
          en: "'Tan peligroso como' makes an equality comparison: both choices carried danger."
        }
      },
      {
        key: "por-vs-para",
        label: { es: "For that reason", en: "Por eso gives a reason" },
        quote: { es: "Por eso, la sorpresa valía tanto como un batallón fresco.", en: "For that reason, the surprise was worth as much as a fresh battalion." },
        note: {
          es: "For that reason muestra causa; por eso mira hacia la explicación anterior.",
          en: "'Por eso' points back to the reason just given: the royalists watched other roads."
        }
      },
      {
        key: "relative-basic",
        label: { es: "That changed", en: "Que connects a noun to detail" },
        quote: { es: "una batalla que cambió la independencia", en: "a battle that changed independence" },
        note: {
          es: "That introduce información sobre battle; who sería para personas.",
          en: "'Que' connects 'batalla' to what it did. It works for people and things."
        }
      }
    ],
    questions: [
      { q: { es: "¿De dónde venían los soldados de Bolívar?", en: "Where did Bolívar's soldiers come from?" }, a: { es: "Venían de los llanos.", en: "They came from the plains." } },
      { q: { es: "¿Hacia qué páramo subió el ejército?", en: "Toward which páramo did the army climb?" }, a: { es: "Subió hacia el páramo de Pisba.", en: "It climbed toward the Pisba páramo." } },
      { q: { es: "¿Cómo parecían al llegar al otro lado?", en: "How did they look when they reached the other side?" }, a: { es: "Parecían un ejército vencido.", en: "They looked like a defeated army." } },
      { q: { es: "¿Por qué fue importante la sorpresa?", en: "Why was the surprise important?" }, a: { es: "Porque los realistas no esperaban enemigos desde esa montaña.", en: "Because the royalists did not expect enemies from that mountain." } }
    ]
  },
  {
    id: "cafe-colombiano",
    band: "A2",
    minutes: 5,
    era: "Siglo XIX",
    place: { es: "Montañas cafeteras de Colombia", en: "Coffee-growing mountains of Colombia" },
    title: { es: "El grano de las fincas pequeñas", en: "The Bean of Small Farms" },
    blurb: {
      es: "El café se volvió colombiano en montañas de familias campesinas, y esas fincas cambiaron caminos, pueblos y comercio.",
      en: "Coffee became Colombian in mountains of farming families, and those farms changed roads, towns, and trade."
    },
    caveat: {
      es: "El café no llegó de una sola forma ni a una sola región. Este relato destaca la pequeña finca, aunque también existieron haciendas y comerciantes grandes.",
      en: "Coffee did not arrive in one single way or in one single region. This story highlights the small farm, though large estates and merchants also existed."
    },
    paragraphs: [
      {
        es: "El café llegó a Colombia antes de ser un símbolo nacional reconocido. Al principio, crecía en huertas, conventos y fincas aisladas de montaña. Nadie imaginaba todavía una economía nacional marcada por ese grano oscuro exportado.",
        en: "Coffee arrived in Colombia before it was a recognized national symbol. At first, it grew in gardens, convents, and isolated mountain farms. No one yet imagined a national economy shaped by that exported dark bean."
      },
      {
        es: "Durante el siglo XIX, muchas familias sembraron cafetos en laderas templadas. La planta necesitaba lluvia, sombra, tierra limpia y manos pacientes cada semana. Cada cosecha pedía largos meses de cuidado antes de venderse bien.",
        en: "During the nineteenth century, many families planted coffee trees on mild slopes. The plant needed rain, shade, clean soil, and patient hands every week. Each harvest required long months of care before it could sell well."
      },
      {
        es: "En varias montañas, el café no dependió solo de grandes haciendas. Creció en fincas pequeñas, trabajadas por padres, hijos y vecinos. Esa casa campesina mezclaba vivienda, trabajo, animales, cocina familiar y secadero.",
        en: "In several mountain areas, coffee did not depend only on large estates. It grew on small farms, worked by parents, children, and neighbors. That rural home mixed housing, work, animals, family kitchen, and a drying patio."
      },
      {
        es: "Esa forma de sembrar repartía riesgos y ganancias entre muchas casas. Si una familia perdía parte del cultivo, otra podía vender más sacos. También hizo fuertes a pueblos pequeños que antes miraban hacia adentro.",
        en: "That way of planting spread risks and profits among many homes. If one family lost part of the crop, another could sell more sacks. It also strengthened small towns that had once looked inward."
      },
      {
        es: "Para vender el grano, los campesinos necesitaban caminos, mulas y puentes. Cada carga que salía pedía una ruta mejor hacia el mercado. Por esas rutas entraban telas, herramientas, cartas, periódicos locales y nuevas ideas.",
        en: "To sell the bean, farmers needed roads, mules, and bridges. Each load that went out called for a better route toward the market. Along those routes came cloth, tools, letters, local newspapers, and new ideas."
      },
      {
        es: "Con el tiempo, el café conectó montañas con puertos y bancos. El país aprendió a exportar desde muchas fincas pequeñas y dispersas. Comerciantes compraban sacos, prestaban dinero y abrían bodegas nuevas en los pueblos cafeteros.",
        en: "Over time, coffee connected mountains with ports and banks. The country learned to export from many small and scattered farms. Merchants bought sacks, lent money, and opened new warehouses in coffee towns."
      },
      {
        es: "Por eso, una taza diaria guarda una historia larga y montañosa. Detrás del aroma hubo trabajo familiar, comercio lento y nuevos caminos. El café volvió famosas algunas regiones, pero también las hizo depender del mercado mundial lejano cambiante.",
        en: "For that reason, a daily cup holds a long mountain history. Behind the aroma there was family labor, slow trade, and new roads. Coffee made some regions famous, but it also made them depend on the changing distant world market."
      }
    ],
    glossary: [
      { es: "el café", en: "coffee", note: { es: "Coffee puede ser la bebida o el producto agrícola; el contexto decide.", en: "Coffee as a crop and as a drink. Spanish uses the same word too." } },
      { es: "los cafetos", en: "the coffee trees", note: { es: "Coffee tree es la planta; coffee bean es el grano.", en: "The coffee plants themselves. This is more precise than simply saying 'plantas'." } },
      { es: "la cosecha", en: "the harvest", note: { es: "Harvest puede ser la recolección o el producto recogido.", en: "The crop or the act of gathering it. Here it means the season's coffee crop." } },
      { es: "las laderas", en: "the slopes", note: { es: "Slope es una superficie inclinada de una montaña o colina.", en: "Mountain slopes. Coffee often grows on angled land, not flat fields." } },
      { es: "las haciendas", en: "the estates", note: { es: "Estate aquí es una gran propiedad rural, no una herencia legal.", en: "Large rural estates. The word can suggest land, labor, and social power." } },
      { es: "los campesinos", en: "farmers", note: { es: "Farmer es neutral en inglés; peasant puede sonar antiguo o despectivo.", en: "Rural working people or small farmers. The tone depends on context." } },
      { es: "las mulas", en: "the mules", note: { es: "Mule es el animal usado para cargar; fue clave antes de buenas carreteras.", en: "Pack animals that handled steep routes better than carts or trucks." } }
    ],
    structures: [
      {
        key: "preterite-vs-imperfect",
        label: { es: "Arrived and was", en: "Pretérito before imperfect" },
        quote: { es: "El café llegó a Colombia antes de ser un símbolo nacional reconocido.", en: "Coffee arrived in Colombia before it was a recognized national symbol." },
        note: {
          es: "Arrived presenta un hecho cerrado; was describe una identidad que vino después.",
          en: "'Llegó' marks arrival as an event. 'Ser' names the later identity as a symbol."
        }
      },
      {
        key: "por-vs-para",
        label: { es: "To sell as purpose", en: "Para for purpose" },
        quote: { es: "Para vender el grano, los campesinos necesitaban caminos, mulas y puentes.", en: "To sell the bean, farmers needed roads, mules, and bridges." },
        note: {
          es: "To sell expresa propósito; en español esa idea pide para antes del infinitivo.",
          en: "'Para vender' gives the purpose: roads and mules existed in order to sell coffee."
        }
      },
      {
        key: "object-pronouns",
        label: { es: "Them after made", en: "Las for regions" },
        quote: { es: "también las hizo depender del mercado mundial lejano cambiante", en: "it also made them depend on the changing distant world market" },
        note: {
          es: "Them se refiere a regions; el pronombre aparece después del verbo made.",
          en: "'Las' points back to 'regiones'. Spanish puts the object before the conjugated verb."
        }
      },
      {
        key: "relative-basic",
        label: { es: "That went out", en: "Que after a noun" },
        quote: { es: "Cada carga que salía pedía una ruta mejor.", en: "Each load that went out called for a better route." },
        note: {
          es: "That conecta load con la acción went out; no repite el sustantivo.",
          en: "'Que salía' tells which load. Spanish uses 'que' where English uses 'that'."
        }
      },
      {
        key: "past-habits",
        label: { es: "Had once looked inward", en: "Imperfect for earlier habits" },
        quote: { es: "pueblos pequeños que antes miraban hacia adentro", en: "small towns that had once looked inward" },
        note: {
          es: "Had once looked muestra una orientación anterior, no una sola mirada.",
          en: "'Miraban' describes an old pattern. The towns were habitually turned toward local life."
        }
      }
    ],
    questions: [
      { q: { es: "¿Dónde crecía el café al principio?", en: "Where did coffee grow at first?" }, a: { es: "Crecía en huertas, conventos y fincas aisladas.", en: "It grew in gardens, convents, and isolated farms." } },
      { q: { es: "¿Qué necesitaba la planta de café?", en: "What did the coffee plant need?" }, a: { es: "Necesitaba lluvia, sombra y manos pacientes.", en: "It needed rain, shade, and patient hands." } },
      { q: { es: "¿Quiénes trabajaban muchas fincas pequeñas?", en: "Who worked many small farms?" }, a: { es: "Las trabajaban padres, hijos y vecinos.", en: "Parents, children, and neighbors worked them." } },
      { q: { es: "¿Qué conectó el café con el tiempo?", en: "What did coffee connect over time?" }, a: { es: "Conectó montañas con puertos y bancos.", en: "It connected mountains with ports and banks." } }
    ]
  },
  {
    id: "san-agustin",
    band: "B1",
    minutes: 7,
    era: "c. 1 – 900 d. C.",
    place: { es: "San Agustín, Huila", en: "San Agustín, Huila" },
    title: { es: "Los guardianes de piedra", en: "The Stone Guardians" },
    blurb: {
      es: "En las montañas del sur de Colombia, cientos de estatuas miran tumbas antiguas. Sus autores no dejaron escritura, así que cada respuesta exige cuidado.",
      en: "In the mountains of southern Colombia, hundreds of statues watch over ancient tombs. Their makers left no writing, so every answer requires care."
    },
    caveat: {
      es: "La historia simplifica muchas discusiones arqueológicas. Como no hay escritura de sus autores, las fechas, funciones y creencias se infieren desde tumbas, caminos, restos y comparaciones.",
      en: "This story simplifies many archaeological debates. Because there is no writing from the makers, the dates, functions, and beliefs are inferred from tombs, roads, remains, and comparisons."
    },
    paragraphs: [
      { es: "En el alto valle del Magdalena, las montañas de Huila guardan piedras con rostros humanos. Cuando llegaron los españoles, las estatuas ya estaban allí, medio cubiertas por tierra y lluvia. El paisaje también ayuda a entenderlas, porque cada colina dirige la mirada hacia ríos y pasos antiguos.", en: "In the upper Magdalena valley, the mountains of Huila hold stones with human faces. When the Spanish arrived, the statues were already there, half covered by soil and rain. The landscape also helps us understand them, because each hill guides the eye toward rivers and old passes." },
      { es: "Mucho antes de la conquista, se tallaron cientos de figuras cerca de tumbas y caminos ceremoniales. Algunas parecen guerreros, otras guardianes, y otras mezclan dientes de jaguar con ojos de persona. También hay figuras pequeñas, manos sobre el pecho y animales que quizás marcaban fuerzas del mundo invisible.", en: "Long before the conquest, hundreds of figures were carved near tombs and ceremonial roads. Some look like warriors, others like guardians, and others mix jaguar teeth with human eyes. There are also small figures, hands on chests, and animals that perhaps marked powers of the invisible world." },
      { es: "Los arqueólogos hablan de una cultura que no dejó escritura, pero sí dejó montículos, canales y ofrendas. Por eso el sitio enseña tanto por sus silencios como por sus piedras. Las ofrendas muestran diferencias entre entierros, y esas diferencias sugieren rangos, familias o tareas especiales.", en: "Archaeologists speak of a culture that left no writing, but did leave mounds, channels, and offerings. For that reason, the site teaches as much through its silences as through its stones. The offerings show differences between burials, and those differences suggest ranks, families, or special tasks." },
      { es: "Nadie sabe cómo se llamaban esas comunidades ni qué lengua usaban en sus casas. Para entenderlas e inferir algo, se comparan huesos, cerámicas y paisajes, aunque las conclusiones cambian con cada hallazgo. Una estatua aislada dice poco, pero su posición junto a una tumba puede cambiar la lectura.", en: "No one knows what those communities called themselves or what language they used at home. To understand them and infer anything, bones, ceramics, and landscapes are compared, although the conclusions change with each find. A statue by itself says little, but its position beside a tomb can change the reading." },
      { es: "Si miramos sus tumbas, podemos notar patrones de poder, duelo y cuidado por los muertos; pero un patrón no es una voz, y conviene no convertirlo en certeza.", en: "If we look at their tombs, we can notice patterns of power, mourning, and care for the dead; but a pattern is not a voice, and it is wise not to turn it into certainty." },
      { es: "Algunas estatuas estaban junto a sarcófagos de piedra, como si protegieran una entrada invisible. Otras miraban hacia quebradas, rutas o plazas donde quizá se reunía la gente. Esa orientación permite imaginar ceremonias públicas, aunque no permite escuchar las palabras de nadie.", en: "Some statues stood beside stone sarcophagi, as if they protected an invisible entrance. Others faced ravines, routes, or plazas where people may have gathered. That orientation lets us imagine public ceremonies, although it does not let us hear anyone's words." },
      { es: "Para cuando los cronistas españoles oyeron rumores de la región, aquel mundo había desaparecido antes de que llegaran los españoles. Quedaban campesinos, caminos y piedras, pero no una memoria completa. Por eso el parque habla tanto de pérdida como de presencia material.", en: "By the time Spanish chroniclers heard rumors of the region, that world had disappeared before the Spanish arrived. Farmers, roads, and stones remained, but not a complete memory. For that reason, the park speaks as much about loss as about material presence." },
      { es: "Hoy San Agustín es parque arqueológico, museo abierto y lugar vivo para quienes lo visitan. Sus figuras no explican todo; más bien nos enseñan a preguntar mejor.", en: "Today San Agustín is an archaeological park, an open-air museum, and a living place for those who visit it. Its figures do not explain everything; instead, they teach us to ask better questions." }
    ],
    glossary: [
      { es: "las estatuas", en: "the statues", note: { es: "Statues se usa para figuras de piedra, metal o madera; no cambia por género.", en: "'Estatua' is feminine even when the figure shows a man. Say 'la estatua' and 'las estatuas'." } },
      { es: "las tumbas", en: "the tombs", note: { es: "Tomb es una tumba construida o marcada; grave puede ser un hueco sencillo en la tierra.", en: "'Tumba' is the place for the dead. It can be simple, but in archaeology it often means a built burial place." } },
      { es: "la escritura", en: "the writing", note: { es: "Writing aquí significa sistema escrito, no solo el acto de escribir una carta.", en: "'Escritura' can mean handwriting, but here it means a writing system or written record." } },
      { es: "los guardianes", en: "the guardians", note: { es: "Guardian es más formal que guard; sirve para una persona o figura que protege algo.", en: "'Guardián' suggests protection. Here it is an interpretation, not a proven job title." } },
      { es: "las ofrendas", en: "the offerings", note: { es: "Offering es algo entregado en un rito; offer como verbo no basta para el sustantivo.", en: "'Ofrenda' is something given in a ritual. The word carries religious or ceremonial weight." } },
      { es: "los montículos", en: "the mounds", note: { es: "Mound es una elevación baja de tierra; hill es más grande y natural.", en: "'Montículo' is a small raised mound, often made or shaped by people in this context." } },
      { es: "inferir", en: "to infer", note: { es: "To infer es concluir desde pistas; no es lo mismo que inventar.", en: "'Inferir' means to reason from evidence. It is weaker than 'saber' and stronger than guessing." } },
      { es: "el hallazgo", en: "the find", note: { es: "A find es un objeto o dato descubierto; finding puede ser una conclusión de investigación.", en: "'Hallazgo' is something found, or the act of finding it. Archaeologists use it constantly." } }
    ],
    structures: [
      { key: "preterite-vs-imperfect", label: { es: "Pasado puntual y fondo", en: "Preterite action, imperfect background" }, quote: { es: "Cuando llegaron los españoles, las estatuas ya estaban allí", en: "When the Spanish arrived, the statues were already there" }, note: { es: "El inglés usa arrived para el evento y were para el fondo. No marca el contraste con tanta fuerza como el español.", en: "'Llegaron' is the completed arrival; 'estaban' describes the scene already in progress. B1 reading depends on seeing that contrast." } },
      { key: "passive-and-impersonal", label: { es: "Pasiva con be", en: "Spanish se for passive meaning" }, quote: { es: "se tallaron cientos de figuras", en: "hundreds of figures were carved" }, note: { es: "El inglés usa were carved, una pasiva con be. El español suele evitar nombrar al trabajador y usa se.", en: "'Se tallaron' keeps the focus on the figures, not on unknown carvers. It is natural written Spanish for unknown agents." } },
      { key: "relative-basic", label: { es: "Relative clauses with that", en: "Relative clauses with que" }, quote: { es: "una cultura que no dejó escritura", en: "a culture that left no writing" }, note: { es: "El inglés usa that aquí para añadir información sobre culture. También podría usar which en algunos contextos, pero that es directo.", en: "'Que' connects a noun to more information. It does not change for singular or plural, so it is easier than English 'who/that/which'." } },
      { key: "real-conditionals", label: { es: "Real conditionals with if", en: "Condiciones reales con si" }, quote: { es: "Si miramos sus tumbas, podemos notar patrones", en: "If we look at their tombs, we can notice patterns" }, note: { es: "El inglés mantiene el presente después de if en una condición real. No dice will look en este tipo de frase.", en: "'Si' plus present, then present or 'poder', gives a real condition. Nothing here is imaginary or contrary to fact." } },
      { key: "pluperfect", label: { es: "Past before another past", en: "Pluscuamperfecto" }, quote: { es: "había desaparecido antes de que llegaran los españoles", en: "had disappeared before the Spanish arrived" }, note: { es: "El inglés usa had disappeared para poner un pasado antes de otro. El español usa había más participio para la misma función.", en: "'Había desaparecido' puts the disappearance before the chroniclers and the conquest. It is the past behind the past." } },
      { key: "object-pronouns", label: { es: "Pronouns as objects", en: "Pronombres de objeto" }, quote: { es: "más bien nos enseñan a preguntar mejor", en: "instead, they teach us to ask better questions" }, note: { es: "El inglés pone us después del verbo teach. El español coloca nos antes de enseñan porque es pronombre de objeto.", en: "'Nos' means who receives the lesson: us. It goes before the conjugated verb in a normal statement." } }
    ],
    questions: [
      { q: { es: "¿Qué encontraron los españoles cuando llegaron a la región?", en: "What did the Spanish find when they arrived in the region?" }, a: { es: "Encontraron estatuas que ya estaban allí, medio cubiertas por tierra y lluvia.", en: "They found statues that were already there, half covered by soil and rain." } },
      { q: { es: "¿Por qué San Agustín exige cuidado al interpretar?", en: "Why does San Agustín require care when interpreting it?" }, a: { es: "Porque sus autores no dejaron escritura y muchas ideas son inferencias.", en: "Because its makers left no writing, and many ideas are inferences." } },
      { q: { es: "¿Qué elementos se comparan para entender a esas comunidades?", en: "What elements are compared to understand those communities?" }, a: { es: "Se comparan huesos, cerámicas, paisajes, tumbas y ofrendas.", en: "Bones, ceramics, landscapes, tombs, and offerings are compared." } },
      { q: { es: "¿Qué enseña el sitio además de sus respuestas?", en: "What does the site teach besides its answers?" }, a: { es: "Enseña a preguntar mejor y a no confundir patrones con certezas.", en: "It teaches us to ask better questions and not confuse patterns with certainties." } }
    ]
  },
  {
    id: "ciudad-perdida",
    band: "B1",
    minutes: 7,
    era: "c. 800 – presente",
    place: { es: "Sierra Nevada de Santa Marta", en: "Sierra Nevada de Santa Marta" },
    title: { es: "La ciudad que no estaba perdida", en: "The City That Was Not Lost" },
    blurb: {
      es: "Teyuna, llamada Ciudad Perdida, fue una ciudad tairona de terrazas de piedra. Los arqueólogos la registraron después de los saqueadores, pero los pueblos indígenas nunca la olvidaron.",
      en: "Teyuna, called Ciudad Perdida, was a Tairona city of stone terraces. Archaeologists recorded it after looters reached it, but Indigenous peoples never forgot it."
    },
    caveat: {
      es: "El relato resume procesos largos: el abandono no ocurrió en un solo día y combinó violencia, enfermedades, cambios comerciales y presión colonial. Además, 'perdida' es una palabra externa, no indígena.",
      en: "This account summarizes long processes: abandonment did not happen in one day and combined violence, disease, trade changes, and colonial pressure. Also, 'lost' is an outside word, not an Indigenous one."
    },
    paragraphs: [
      { es: "En la Sierra Nevada de Santa Marta, un sendero sube entre selva, ríos y nubes calientes; al final, tras varias horas de subida, aparecen terrazas de piedra, escaleras y muros que forman Teyuna, bajo raíces, barro y sombra. Las plataformas no son adornos, sino soluciones para vivir en una montaña muy inclinada.", en: "In the Sierra Nevada de Santa Marta, a trail climbs through jungle, rivers, and warm clouds; at the end, after several hours of climbing, stone terraces, stairways, and walls appear, forming Teyuna, under roots, mud, and shade. The platforms are not decorations, but solutions for living on a very steep mountain." },
      { es: "La ciudad fue construida por pueblos tairona muchos siglos antes de la llegada española. Sus terrazas sostenían casas, plazas y caminos que conectaban la montaña con el mar. Los muros retenían la tierra y los canales sacaban el agua de las lluvias fuertes.", en: "The city was built by Tairona peoples many centuries before the Spanish arrival. Its terraces held houses, plazas, and roads that connected the mountains with the sea. The walls held back the soil, and the channels carried away water from heavy rains." },
      { es: "Después de la conquista, muchas comunidades se movieron, murieron o buscaron refugio más arriba. Teyuna quedó abandonada para los colonos, pero no quedó borrada para sus descendientes. En la Sierra, retirarse podía ser una forma de sobrevivir y proteger lo sagrado.", en: "After the conquest, many communities moved, died, or sought refuge higher up. Teyuna was abandoned for the colonists, but it was not erased for their descendants. In the Sierra, withdrawing could be a way to survive and protect the sacred." },
      { es: "Los kogui, arhuacos, wiwas y kankuamos han cuidado memorias de la Sierra durante generaciones. Por eso muchos dicen que Ciudad Perdida nunca estuvo perdida para quienes seguían viviendo cerca. Para ellos, los sitios antiguos siguen unidos a obligaciones, pagamentos y relatos de origen.", en: "The Kogui, Arhuaco, Wiwa, and Kankuamo have cared for memories of the Sierra for generations. That is why many say Ciudad Perdida was never lost to those who kept living nearby. For them, ancient sites remain connected to duties, offerings, and origin stories." },
      { es: "A comienzos de los años setenta, saqueadores llegaron al sitio buscando oro y piezas antiguas. Abrieron tumbas, vendieron objetos y revelaron una ruta que después siguieron los arqueólogos. La fiebre por las piezas produjo conflictos, rumores y violencia en los pueblos cercanos.", en: "In the early 1970s, looters reached the site looking for gold and ancient pieces. They opened tombs, sold objects, and revealed a route that archaeologists later followed. The rush for the pieces produced conflicts, rumors, and violence in nearby towns." },
      { es: "Desde entonces se han estudiado terrazas, canales y escaleras, aunque queda mucho por comprender. Si el visitante camina con paciencia, puede ver cómo la ciudad ordenaba el agua.", en: "Since then, terraces, channels, and stairways have been studied, although much remains to be understood. If visitors walk with patience, they can see how the city organized water." },
      { es: "El viaje actual dura varios días y pasa por territorios donde viven comunidades indígenas. Los guías piden respeto, porque el lugar no es solo ruina ni aventura turística. Caminar allí significa entrar en una historia que todavía tiene guardianes humanos.", en: "The trip today lasts several days and passes through territories where Indigenous communities live. Guides ask for respect, because the place is not only a ruin or a tourist adventure. Walking there means entering a history that still has human guardians." },
      { es: "Llamarla perdida sirve para contar un descubrimiento moderno, pero también esconde otra historia. Teyuna muestra que un lugar puede desaparecer de un archivo sin salir de una memoria.", en: "Calling it lost helps tell a modern discovery story, but it also hides another history. Teyuna shows that a place can disappear from an archive without leaving a memory." }
    ],
    glossary: [
      { es: "el sendero", en: "the trail", note: { es: "Trail es un camino para caminar; road sería una vía más ancha para vehículos.", en: "'Sendero' is a walking path. In Colombia it often appears in parks and mountain routes." } },
      { es: "las terrazas", en: "the terraces", note: { es: "Terraces aquí son plataformas de piedra o tierra, no balcones de apartamento.", en: "'Terrazas' here are flat built platforms on a slope, not café patios or apartment balconies." } },
      { es: "los saqueadores", en: "the looters", note: { es: "Looters son personas que roban objetos, sobre todo en guerras, ruinas o desastres.", en: "'Saqueadores' are people who loot. The word clearly condemns the act, especially at archaeological sites." } },
      { es: "el refugio", en: "the refuge", note: { es: "Refuge puede ser un lugar seguro o protección; shelter es más físico y cotidiano.", en: "'Refugio' is a safe place or protection. Here it suggests moving away from colonial danger." } },
      { es: "las escaleras", en: "the stairways", note: { es: "Stairway o stairs nombran una serie de escalones; ladder sería una escalera portátil.", en: "'Escaleras' can mean stairs or a ladder, but stone steps in a city are stairways." } },
      { es: "los arqueólogos", en: "the archaeologists", note: { es: "Archaeologist se escribe con ae en inglés americano, aunque también se oye archeologist.", en: "'Arqueólogo' is the researcher who studies human pasts through material remains, not dinosaurs." } },
      { es: "las memorias", en: "the memories", note: { es: "Memories puede ser recuerdos personales o memoria colectiva; memoirs son memorias escritas.", en: "'Memorias' here are shared recollections and teachings, not only private memories." } },
      { es: "el archivo", en: "the archive", note: { es: "Archive puede ser el lugar, la colección o un archivo digital; file es un documento suelto.", en: "'Archivo' can mean a formal record system. The story contrasts official records with living memory." } }
    ],
    structures: [
      { key: "passive-and-impersonal", label: { es: "Voz pasiva", en: "Passive and impersonal se" }, quote: { es: "La ciudad fue construida por pueblos tairona", en: "The city was built by Tairona peoples" }, note: { es: "El inglés usa was built cuando importa más el objeto que los constructores. Todavía puede nombrarlos con by.", en: "'Fue construida' is a true passive. Spanish also uses 'se', but this form lets the sentence name the builders with 'por'." } },
      { key: "present-perfect", label: { es: "Present perfect con have", en: "Spanish present perfect" }, quote: { es: "han cuidado memorias de la Sierra durante generaciones", en: "have cared for memories of the Sierra for generations" }, note: { es: "El inglés have cared conecta generaciones pasadas con el presente. La acción no se presenta como cerrada del todo.", en: "'Han cuidado' links past and present. In Colombian Spanish, the simple past is common, but this form stresses continuity." } },
      { key: "reported-speech", label: { es: "Discurso referido con say", en: "Reported speech with dicen que" }, quote: { es: "muchos dicen que Ciudad Perdida nunca estuvo perdida", en: "many say Ciudad Perdida was never lost" }, note: { es: "El inglés puede reportar una idea con say y una oración completa. En reportes cortos, normalmente no necesita that.", en: "'Dicen que' reports a claim without naming every speaker. The 'que' is required before the reported clause." } },
      { key: "time-since", label: { es: "Since then", en: "Time expressions with desde entonces" }, quote: { es: "Desde entonces se han estudiado terrazas, canales y escaleras", en: "Since then, terraces, channels, and stairways have been studied" }, note: { es: "Since then empieza en un punto pasado y continúa hacia ahora. El inglés lo combina naturalmente con present perfect.", en: "'Desde entonces' marks a starting point in the past. It often appears with perfect forms when the result reaches the present." } },
      { key: "relative-basic", label: { es: "Relativas con where", en: "Relative clauses with donde" }, quote: { es: "territorios donde viven comunidades indígenas", en: "territories where Indigenous communities live" }, note: { es: "El inglés usa where para lugares, incluso si no son edificios. Suena más natural que in which en esta frase.", en: "'Donde' attaches extra information to a place. It is the natural relative word for territories, cities, and rooms." } },
      { key: "real-conditionals", label: { es: "If with present tense", en: "Si con presente" }, quote: { es: "Si el visitante camina con paciencia", en: "If visitors walk with patience" }, note: { es: "El inglés usa presente después de if en una condición real. Los visitantes pueden hacerlo de verdad, así que will no hace falta.", en: "'Si' plus present gives a real condition. The sentence says what a visitor can notice in that real case." } }
    ],
    questions: [
      { q: { es: "¿Qué elementos de piedra forman Teyuna al final del sendero?", en: "What stone elements form Teyuna at the end of the trail?" }, a: { es: "La forman terrazas, escaleras y muros de piedra.", en: "Stone terraces, stairways, and walls form it." } },
      { q: { es: "¿Por qué se dice que Ciudad Perdida no estaba perdida para todos?", en: "Why is it said that Ciudad Perdida was not lost to everyone?" }, a: { es: "Porque comunidades indígenas conservaron memorias de la Sierra durante generaciones.", en: "Because Indigenous communities preserved memories of the Sierra for generations." } },
      { q: { es: "¿Qué hicieron los saqueadores a comienzos de los años setenta?", en: "What did looters do in the early 1970s?" }, a: { es: "Llegaron buscando oro, abrieron tumbas y vendieron objetos antiguos.", en: "They arrived looking for gold, opened tombs, and sold ancient objects." } },
      { q: { es: "¿Qué pide el viaje actual a los visitantes?", en: "What does the trip today ask of visitors?" }, a: { es: "Pide paciencia y respeto, porque el lugar sigue siendo significativo.", en: "It asks for patience and respect, because the place remains meaningful." } }
    ]
  },
  {
    id: "separacion-panama",
    band: "B1",
    minutes: 7,
    era: "1903 – 1921",
    place: { es: "Panamá y Bogotá", en: "Panama and Bogotá" },
    title: { es: "La herida del canal", en: "The Wound of the Canal" },
    blurb: {
      es: "En 1903, Panamá se separó de Colombia mientras Estados Unidos buscaba construir un canal. El episodio dejó una desconfianza que duró generaciones.",
      en: "In 1903, Panama separated from Colombia while the United States sought to build a canal. The episode left a distrust that lasted for generations."
    },
    caveat: {
      es: "La separación de Panamá sigue siendo discutida. Esta versión resume hechos centrales sin negar que hubo proyectos panameños propios, intereses estadounidenses, errores colombianos y memorias políticas enfrentadas.",
      en: "The separation of Panama is still debated. This version summarizes central facts without denying that there were Panamanian projects, U.S. interests, Colombian mistakes, and competing political memories."
    },
    paragraphs: [
      { es: "A comienzos del siglo XX, Colombia salía cansada de la Guerra de los Mil Días, con deudas, ejércitos rotos y regiones desconfiadas. Panamá seguía unida al país, pero muchos comerciantes miraban hacia el futuro canal. El istmo tenía una posición especial, porque por allí ya pasaban correos, mercancías y viajeros.", en: "At the beginning of the twentieth century, Colombia was emerging exhausted from the Thousand Days' War, with debts, broken armies, and distrustful regions. Panama was still joined to the country, but many merchants were looking toward the future canal. The isthmus had a special position, because mail, goods, and travelers already passed through it." },
      { es: "Estados Unidos quería una ruta rápida entre el Atlántico y el Pacífico para barcos y comercio. Por eso negoció un tratado que le daba derechos amplios sobre una franja panameña. El acuerdo ofrecía dinero, pero también una presencia extranjera larga en zona estratégica, vigilada por una potencia en ascenso.", en: "The United States wanted a quick route between the Atlantic and the Pacific for ships and trade. For that reason, it negotiated a treaty that gave it broad rights over a Panamanian strip. The agreement offered money, but also a long foreign presence in a strategic zone, watched by a rising power." },
      { es: "En Bogotá, el senado colombiano rechazó el tratado Hay-Herrán después de meses de presión. Algunos senadores creían que el pago era bajo y que la soberanía quedaba herida. Otros esperaban negociar más, sin medir cuánto se estaba cerrando el tiempo diplomático.", en: "In Bogotá, the Colombian senate rejected the Hay-Herrán Treaty after months of pressure. Some senators believed the payment was low and that sovereignty was being wounded. Others hoped to negotiate more, without measuring how quickly diplomatic time was closing." },
      { es: "Si Colombia aceptaba el acuerdo, el canal habría seguido bajo una negociación difícil pero legal; al rechazarlo, abrió una crisis que otros actores aprovecharon con rapidez.", en: "If Colombia accepted the agreement, the canal would have continued under a difficult but legal negotiation; by rejecting it, Colombia opened a crisis that other actors quickly used." },
      { es: "El 3 de noviembre de 1903, líderes panameños declararon la separación mientras buques estadounidenses estaban cerca. Las tropas colombianas no pudieron moverse con libertad, y el nuevo gobierno recibió reconocimiento rápido. Esa rapidez hizo pensar en Bogotá que la decisión ya estaba protegida desde afuera.", en: "On November 3, 1903, Panamanian leaders declared separation while U.S. warships were nearby. Colombian troops could not move freely, and the new government received quick recognition. That speed made Bogotá think the decision was already protected from outside." },
      { es: "Pocos días después, Panamá firmó otro tratado que permitió construir el canal bajo control estadounidense. Para muchos colombianos, se había perdido una provincia por fuerza, dinero y diplomacia. Para muchos panameños, en cambio, se abría una oportunidad negada durante décadas.", en: "A few days later, Panama signed another treaty that allowed the canal to be built under U.S. control. For many Colombians, a province had been lost through force, money, and diplomacy. For many Panamanians, by contrast, a chance denied for decades was opening." },
      { es: "La herida no terminó cuando Colombia reconoció a Panamá años después y recibió una indemnización. En periódicos, escuelas y discursos, el caso enseñó a sospechar de cada intervención extranjera. Después, gobiernos colombianos leyeron préstamos, bases y mediaciones con esa memoria encima.", en: "The wound did not end when Colombia recognized Panama years later and received compensation. In newspapers, schools, and speeches, the case taught people to suspect every foreign intervention. Later, Colombian governments read loans, bases, and mediations with that memory weighing on them." },
      { es: "También conviene recordar que muchos panameños tenían reclamos antiguos contra Bogotá. La historia pesa porque combina deseo local, debilidad colombiana y poder extranjero en un mismo momento.", en: "It is also important to remember that many Panamanians had old complaints against Bogotá. The history weighs heavily because it combines local desire, Colombian weakness, and foreign power in a single moment." }
    ],
    glossary: [
      { es: "el canal", en: "the canal", note: { es: "Canal en inglés se pronuncia con énfasis al final; no es channel, que suele ser natural o televisivo.", en: "'Canal' is the same basic word in both languages, but in this story it means the planned interoceanic route." } },
      { es: "el tratado", en: "the treaty", note: { es: "Treaty es un acuerdo formal entre estados; contract sirve más para negocios o personas.", en: "'Tratado' is a formal agreement between states. It is stronger and more official than 'acuerdo'." } },
      { es: "el senado", en: "the senate", note: { es: "Senate se escribe con mayúscula cuando es el nombre oficial; aquí puede ir en minúscula como institución.", en: "'Senado' is the upper legislative chamber. In Spanish, institutional names often take capitals in official use." } },
      { es: "la soberanía", en: "the sovereignty", note: { es: "Sovereignty es el control político de un estado sobre su territorio; es palabra formal.", en: "'Soberanía' means a state's authority over its territory and decisions. It is central in canal debates." } },
      { es: "los buques", en: "the warships", note: { es: "Warship especifica un buque militar; ship sería cualquier barco grande.", en: "'Buque' is a large ship. Here the context is military, so English naturally says 'warships'." } },
      { es: "la indemnización", en: "the compensation", note: { es: "Compensation es dinero o reparación por una pérdida; indemnity suena más legal o histórico.", en: "'Indemnización' is money paid for damage or loss. It does not erase the political wound." } },
      { es: "la intervención", en: "the intervention", note: { es: "Intervention puede ser ayuda, presión o acción militar; el contexto dice si es negativa.", en: "'Intervención' means outside involvement. In Colombian political memory, it often carries suspicion." } },
      { es: "la herida", en: "the wound", note: { es: "Wound puede ser física o simbólica; injury es más general y menos histórico.", en: "'Herida' is literal or figurative. Here it names a political memory that kept hurting." } }
    ],
    structures: [
      { key: "past-habits", label: { es: "Fondo pasado con was", en: "Imperfect for background" }, quote: { es: "Panamá seguía unida al país", en: "Panama was still joined to the country" }, note: { es: "El inglés usa was para describir la situación de fondo. El español usa imperfecto porque era algo continuo, no un evento terminado.", en: "'Seguía' gives the continuing background before the break. It is not the moment of separation; it is the situation before it." } },
      { key: "por-vs-para", label: { es: "For de propósito", en: "Para for purpose" }, quote: { es: "para barcos y comercio", en: "for ships and trade" }, note: { es: "El inglés usa for para causa y propósito, así que el contexto decide. El español elige para porque nombra el uso del canal.", en: "'Para' points to purpose or destination. The route was intended for ships and trade, so 'por' would not fit here." } },
      { key: "real-conditionals", label: { es: "If con forma pasada", en: "Si with a historical condition" }, quote: { es: "Si Colombia aceptaba el acuerdo", en: "If Colombia accepted the agreement" }, note: { es: "El inglés puede usar una forma pasada después de if al tratar una posibilidad histórica desde ese momento. No siempre es irreal.", en: "'Si aceptaba' presents the condition from inside the past narrative. It is a real option as people saw it then." } },
      { key: "passive-and-impersonal", label: { es: "Pasiva con had been", en: "Passive meaning with se" }, quote: { es: "se había perdido una provincia", en: "a province had been lost" }, note: { es: "El inglés had been lost es pasivo y pluscuamperfecto. Destaca el resultado sin nombrar un único actor responsable.", en: "'Se había perdido' sounds impersonal but heavy. It avoids choosing only one subject for a shared political blame." } },
      { key: "reported-speech", label: { es: "That después de remember", en: "Que after recordar" }, quote: { es: "recordar que muchos panameños tenían reclamos antiguos", en: "remember that many Panamanians had old complaints" }, note: { es: "El inglés suele conservar that después de verbos como remember cuando la oración es larga o formal. En habla puede desaparecer.", en: "After 'recordar', Spanish uses 'que' before a complete idea. Dropping it would sound broken in this sentence." } },
      { key: "pluperfect", label: { es: "Had plus participle", en: "Pluscuamperfecto" }, quote: { es: "se había perdido una provincia", en: "a province had been lost" }, note: { es: "El inglés had been lost pone la pérdida antes del sentimiento posterior de herida. Es una forma pasiva que mira hacia atrás.", en: "'Se había perdido' uses the pluperfect to show a loss already completed from that later Colombian viewpoint." } }
    ],
    questions: [
      { q: { es: "¿Qué tratado rechazó el senado colombiano en 1903?", en: "What treaty did the Colombian senate reject in 1903?" }, a: { es: "Rechazó el tratado Hay-Herrán después de meses de presión.", en: "It rejected the Hay-Herrán Treaty after months of pressure." } },
      { q: { es: "¿Por qué algunos senadores se oponían al acuerdo?", en: "Why did some senators oppose the agreement?" }, a: { es: "Creían que el pago era bajo y que la soberanía quedaba herida.", en: "They believed the payment was low and that sovereignty was being wounded." } },
      { q: { es: "¿Qué papel tuvieron los buques estadounidenses durante la separación?", en: "What role did U.S. warships play during the separation?" }, a: { es: "Estaban cerca y limitaron la libertad de movimiento de las tropas colombianas.", en: "They were nearby and limited the Colombian troops' freedom of movement." } },
      { q: { es: "¿Qué sombra dejó el episodio en Colombia?", en: "What shadow did the episode leave in Colombia?" }, a: { es: "Dejó una sospecha duradera frente a cada intervención extranjera.", en: "It left a lasting suspicion toward every foreign intervention." } }
    ]
  },
  {
    id: "galeon-san-jose",
    band: "B2",
    minutes: 8,
    era: "1708 – presente",
    place: { es: "Mar Caribe frente a Cartagena de Indias", en: "Caribbean Sea off Cartagena de Indias" },
    title: { es: "El naufragio que no termina", en: "The Shipwreck That Will Not End" },
    blurb: {
      es: "El San José explotó frente a Cartagena con plata, oro y vidas atrapadas en su bodega. Tres siglos después, el tesoro sigue produciendo una pelea más política que submarina.",
      en: "The San José exploded off Cartagena with silver, gold, and lives trapped in its hold. Three centuries later, the treasure is still producing a fight that is more political than underwater."
    },
    caveat: {
      es: "Este relato comprime una disputa jurídica todavía abierta. Colombia, España, una empresa de salvamento y la nación Qhara Qhara formulan reclamos distintos, y ningún resumen breve puede agotar sus pruebas, sus leyes ni sus memorias.",
      en: "This story compresses a legal dispute that is still open. Colombia, Spain, a salvage company, and the Qhara Qhara nation make different claims, and no short summary can exhaust their evidence, their laws, or their memories."
    },
    paragraphs: [
      {
        es: "La noche del 8 de junio de 1708, el galeón San José navegaba cerca de Cartagena, cargado con mercancías, monedas y lingotes de una flota imperial. Aunque la ciudad estaba acostumbrada a mirar el mar con miedo, nadie podía prever que una batalla breve convertiría aquel barco en expediente durante tres siglos.",
        en: "On the night of June 8, 1708, the galleon San José was sailing near Cartagena, loaded with goods, coins, and ingots from an imperial fleet. Although the city was used to watching the sea with fear, no one could foresee that a brief battle would turn that ship into a case file for three centuries."
      },
      {
        es: "Una escuadra británica, comandada por Charles Wager, interceptó el convoy español antes de que entrara seguro al puerto. Se esperaba que la plata americana financiara la guerra de los Borbones, de modo que capturar el buque valía casi tanto como ganar una campaña.",
        en: "A British squadron, commanded by Charles Wager, intercepted the Spanish convoy before it could enter the harbor safely. American silver was expected to finance the Bourbon war, so capturing the vessel was worth almost as much as winning a campaign."
      },
      {
        es: "El combate duró poco, pero en la oscuridad bastó un incendio para que la pólvora hiciera el resto. Si el San José hubiera sido tomado intacto, hoy se discutiría un botín documentado; como explotó, se discute también una tumba submarina.",
        en: "The combat did not last long, but in the dark one fire was enough for the gunpowder to do the rest. If the San José had been taken intact, a documented prize would be debated today; because it exploded, an underwater grave is debated as well."
      },
      {
        es: "Casi todos los hombres a bordo murieron, mientras el casco se hundía con cañones, cerámica, esmeraldas y una riqueza que Europa ya había contado antes de verla. Conviene que se recuerde ese orden: primero hubo cuerpos, después inventarios, y solo al final apareció la palabra tesoro.",
        en: "Almost all the men on board died, while the hull sank with cannons, ceramics, emeralds, and wealth that Europe had already counted before seeing it. That order does well to be remembered: first there were bodies, then inventories, and only at the end did the word treasure appear."
      },
      {
        es: "Durante siglos se buscó el naufragio con mapas dudosos, cálculos de corrientes y promesas de fortuna. Cuando Colombia anunció en 2015 que lo había encontrado, el hallazgo fue celebrado como patrimonio nacional, aunque de inmediato quedara claro que verlo no equivalía a poseerlo.",
        en: "For centuries the wreck was sought with doubtful maps, current calculations, and promises of fortune. When Colombia announced in 2015 that it had found it, the discovery was celebrated as national heritage, although it immediately became clear that seeing it was not the same as owning it."
      },
      {
        es: "Colombia sostiene que el pecio pertenece a su patrimonio cultural, porque reposa en sus aguas y narra una parte de su historia colonial. España responde que un buque de guerra estatal conserva su bandera aun bajo el mar, como si la soberanía no se oxidara.",
        en: "Colombia argues that the wreck belongs to its cultural heritage, because it rests in its waters and tells part of its colonial history. Spain answers that a state warship keeps its flag even under the sea, as if sovereignty did not rust."
      },
      {
        es: "A esa disputa se suma una compañía de salvamento, que afirma haber localizado antes el sitio y reclama compensaciones por su información. Tal vez el pleito parezca técnico, pero revela una pregunta incómoda: quién puede convertir en contrato privado lo que otros llaman memoria pública.",
        en: "A salvage company adds itself to that dispute, saying it located the site earlier and claiming compensation for its information. The lawsuit may seem technical, but it reveals an uncomfortable question: who can turn into a private contract what others call public memory."
      },
      {
        es: "La nación Qhara Qhara, cuyos antepasados fueron obligados a extraer mucha plata en los Andes, plantea un reclamo todavía más profundo. Aunque no hubieran viajado en el galeón, sus comunidades señalan que el metal salió de trabajos forzados, tributos y violencias que rara vez se exhiben junto al brillo.",
        en: "The Qhara Qhara nation, whose ancestors were forced to extract much of the silver in the Andes, raises an even deeper claim. Even if they did not travel on the galleon, their communities point out that the metal came from forced labor, tribute, and violence that are rarely displayed beside the shine."
      },
      {
        es: "Por eso el San José no es solo una cápsula arqueológica, ni solo una fortuna dormida en el Caribe. Mientras no se decida cómo investigarlo, custodiarlo y contarlo, seguirá siendo una pregunta hundida: qué se rescata cuando se rescata un tesoro.",
        en: "That is why the San José is not only an archaeological capsule, and not only a fortune asleep in the Caribbean. Until it is decided how to study it, protect it, and tell its story, it will remain a sunken question: what is recovered when a treasure is recovered."
      }
    ],
    glossary: [
      { es: "el galeón", en: "the galleon", note: { es: "Galleon es un barco grande de vela, asociado con los imperios ibéricos; no se usa para cualquier ship.", en: "A large armed sailing ship of the Spanish imperial system. The word sounds historical in Spanish, so it immediately sets the register." } },
      { es: "los lingotes", en: "the ingots", note: { es: "Ingot es una barra de metal antes de convertirse en moneda u objeto; bar sería más general.", en: "Bars of metal prepared for transport or accounting. In Spanish, 'lingote' often appears beside silver or gold in colonial contexts." } },
      { es: "el convoy", en: "the convoy", note: { es: "Convoy también existe en español, pero en inglés se pronuncia con el acento al final: con-VOY.", en: "A group traveling under protection. In Spanish it is useful for fleets, trucks, and military movement, not only ships." } },
      { es: "el casco", en: "the hull", note: { es: "Hull es la estructura del barco; helmet sería casco de protección para la cabeza.", en: "The body of a ship. 'Casco' can also mean helmet, so the maritime context tells the reader which one it is." } },
      { es: "el pecio", en: "the wreck", note: { es: "Wreck puede ser el barco hundido o el accidente mismo; shipwreck es más narrativo.", en: "A formal word for a sunken wreck. It belongs to legal and archaeological prose more than everyday speech." } },
      { es: "el hallazgo", en: "the discovery", note: { es: "Discovery es el acto de encontrar algo; finding puede sonar como una conclusión de investigación.", en: "The finding of something after a search. 'Hallazgo' lets Spanish avoid repeating 'descubrimiento'." } },
      { es: "la soberanía", en: "sovereignty", note: { es: "Sovereignty nombra la autoridad de un Estado; no lleva artículo cuando se habla de la idea en general.", en: "State authority over a place, object, or people. It is abstract, which is why the sentence pairs it with the concrete image of rust." } },
      { es: "trabajos forzados", en: "forced labor", note: { es: "Forced labor suele ir en singular colectivo; no se dice forced labors para hablar del sistema.", en: "Labor imposed by coercion. The plural 'trabajos' points to repeated tasks and systems, not one job." } },
      { es: "custodiar", en: "to protect", note: { es: "To protect funciona aquí mejor que to guard, porque habla de responsabilidad cultural, no solo vigilancia.", en: "To keep and protect under responsibility. The verb sounds institutional, as museums or states would use it." } }
    ],
    structures: [
      {
        key: "concession",
        label: { es: "Conceder con although", en: "Conceding with aunque" },
        quote: { es: "Aunque la ciudad estaba acostumbrada a mirar el mar con miedo", en: "Although the city was used to watching the sea with fear" },
        note: {
          es: "Although introduce una información real que no impide la idea principal. En inglés no cambia el modo verbal después de la concesión.",
          en: "Here 'aunque' takes the indicative because the fear is presented as a real background fact. The concession prepares the surprise without denying the fact."
        }
      },
      {
        key: "counterfactual-past",
        label: { es: "Lo que habría ocurrido", en: "Past counterfactuals" },
        quote: { es: "Si el San José hubiera sido tomado intacto, hoy se discutiría un botín documentado", en: "If the San José had been taken intact, a documented prize would be debated today" },
        note: {
          es: "El inglés combina if + had been con would be. La oración imagina un pasado distinto para explicar una consecuencia presente.",
          en: "Spanish uses 'hubiera sido' for the unreal past condition and the conditional 'se discutiría' for its imagined result. The passive keeps the focus on the ship."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "La pasiva sin by", en: "Passive and impersonal se" },
        quote: { es: "Durante siglos se buscó el naufragio", en: "For centuries the wreck was sought" },
        note: {
          es: "El inglés marca la pasiva con el verbo be y el participio. No necesita decir quién buscaba cuando los buscadores no son el centro.",
          en: "The 'se' construction lets formal Spanish suppress the agent. It sounds cleaner than listing generations of unnamed searchers."
        }
      },
      {
        key: "reported-speech",
        label: { es: "Cómo introducir una postura", en: "Reported positions with que" },
        quote: { es: "España responde que un buque de guerra estatal conserva su bandera", en: "Spain answers that a state warship keeps its flag" },
        note: {
          es: "El inglés usa that para introducir la posición de España. En prosa periodística o histórica, ese that puede omitirse, pero aquí ayuda a ordenar la frase.",
          en: "'Responde que' reports a legal position without endorsing it. The verb lets the writer stage competing claims instead of declaring one side true."
        }
      },
      {
        key: "conjecture",
        label: { es: "Suavizar con may", en: "Hedging with tal vez" },
        quote: { es: "Tal vez el pleito parezca técnico", en: "The lawsuit may seem technical" },
        note: {
          es: "May permite matizar la afirmación sin cambiar el resto de la frase. No significa permiso en este contexto.",
          en: "'Tal vez' plus the subjunctive 'parezca' marks conjecture. It is a written way to say the writer is not treating the appearance as settled truth."
        }
      },
      {
        key: "hypothetical-present",
        label: { es: "As if y una imagen imposible", en: "Como si for a hypothetical image" },
        quote: { es: "como si la soberanía no se oxidara", en: "as if sovereignty did not rust" },
        note: {
          es: "La expresión as if introduce una comparación imaginaria. El inglés usa did not aunque la imagen pertenezca al argumento presente.",
          en: "'Como si' normally triggers the imperfect subjunctive for an unreal comparison. The sentence turns a legal claim into a physical image."
        }
      },
      {
        key: "subjunctive-adverbial",
        label: { es: "Until con una decisión futura", en: "Hasta que with the subjunctive" },
        quote: { es: "Mientras no se decida cómo investigarlo, custodiarlo y contarlo", en: "Until it is decided how to study it, protect it, and tell its story" },
        note: {
          es: "Until señala un límite futuro que todavía no llega. El inglés conserva una pasiva en presente, aunque la decisión siga pendiente.",
          en: "With a future or unresolved endpoint, 'mientras no' takes the subjunctive. The decision has not happened, so Spanish refuses the indicative."
        }
      }
    ],
    questions: [
      {
        q: { es: "¿Por qué el San José era importante para la guerra europea?", en: "Why was the San José important to the European war?" },
        a: { es: "Porque se esperaba que la plata americana financiara la guerra de los Borbones.", en: "Because American silver was expected to finance the Bourbon war." }
      },
      {
        q: { es: "¿Qué cambia en la interpretación del naufragio si se recuerda que casi todos murieron?", en: "What changes in the interpretation of the wreck if we remember that almost everyone died?" },
        a: { es: "Cambia el orden moral: primero fue una tumba submarina y solo después un tesoro.", en: "The moral order changes: first it was an underwater grave and only later a treasure." }
      },
      {
        q: { es: "¿Qué reclaman Colombia y España de maneras distintas?", en: "What do Colombia and Spain claim in different ways?" },
        a: { es: "Colombia lo presenta como patrimonio cultural propio, mientras España invoca la bandera de un buque estatal.", en: "Colombia presents it as its own cultural heritage, while Spain invokes the flag of a state warship." }
      },
      {
        q: { es: "¿Por qué el reclamo Qhara Qhara cambia la discusión?", en: "Why does the Qhara Qhara claim change the discussion?" },
        a: { es: "Porque recuerda que mucha plata salió de trabajos forzados, tributos y violencias andinas.", en: "Because it recalls that much of the silver came from forced labor, tribute, and Andean violence." }
      }
    ]
  },
  {
    id: "bogotazo",
    band: "B2",
    minutes: 8,
    era: "9 de abril de 1948",
    place: { es: "Bogotá, Colombia", en: "Bogotá, Colombia" },
    title: { es: "El día que partió el relato", en: "The Day That Split the Story" },
    blurb: {
      es: "El asesinato de Jorge Eliécer Gaitán incendió el centro de Bogotá y dejó una fecha que todavía organiza la memoria nacional, aunque no explique por sí sola toda la violencia que vino después.",
      en: "The assassination of Jorge Eliécer Gaitán set central Bogotá on fire and left a date that still organizes national memory, although it does not by itself explain all the violence that followed."
    },
    caveat: {
      es: "Quién ordenó matar a Gaitán nunca se ha establecido de manera concluyente. Además, La Violencia no comenzó el 9 de abril: ya había persecuciones, venganzas y conflictos regionales en marcha, y convertir un día en causa única aplana una historia más larga.",
      en: "Who ordered Gaitán's killing has never been conclusively established. Also, La Violencia did not begin on April 9: persecutions, revenge, and regional conflicts were already underway, and turning one day into the single cause flattens a longer history."
    },
    paragraphs: [
      {
        es: "Al mediodía del 9 de abril de 1948, Bogotá seguía el ritmo de una capital tensa pero reconocible. En el centro se cruzaban abogados, vendedores, tranvías y delegados extranjeros, porque la ciudad recibía una conferencia panamericana mientras el país discutía su futuro a gritos.",
        en: "At midday on April 9, 1948, Bogotá was still moving to the rhythm of a tense but recognizable capital. Downtown, lawyers, vendors, streetcars, and foreign delegates crossed paths, because the city was hosting a Pan-American conference while the country was arguing loudly about its future."
      },
      {
        es: "Jorge Eliécer Gaitán, jefe liberal y orador de multitudes, salía de su oficina cuando varios disparos lo derribaron. Aunque lo llevaron a una clínica cercana, la noticia de que había muerto corrió más rápido que cualquier versión confiable sobre el asesino.",
        en: "Jorge Eliécer Gaitán, a Liberal leader and mass orator, was leaving his office when several shots brought him down. Although he was taken to a nearby clinic, the news that he had died moved faster than any reliable version about the killer."
      },
      {
        es: "La rabia encontró pronto un cuerpo: Juan Roa Sierra fue señalado, golpeado y arrastrado por la calle hasta quedar irreconocible. Si hubiera sobrevivido para declarar, quizá sabríamos más; al morir así, dejó un vacío que otros llenaron con sospechas.",
        en: "Rage soon found a body: Juan Roa Sierra was pointed out, beaten, and dragged through the street until he was unrecognizable. If he had survived to testify, perhaps we would know more; by dying that way, he left a void that others filled with suspicions."
      },
      {
        es: "En cuestión de horas, el duelo político se volvió incendio, saqueo y combate desordenado contra símbolos del poder. Se quemaron tranvías, ministerios, iglesias y comercios, mientras algunas voces pedían revolución y otras buscaban simplemente comida, armas o venganza.",
        en: "Within hours, political mourning became fire, looting, and disordered combat against symbols of power. Streetcars, ministries, churches, and stores were burned, while some voices called for revolution and others were simply looking for food, weapons, or revenge."
      },
      {
        es: "El centro de Bogotá quedó destripado, no solo por las llamas sino por la sensación de que las reglas habían dejado de existir. Quienes caminaron entre vidrios, humo y cadáveres entendieron que la ciudad ya no podía narrarse como una vitrina ordenada de la república.",
        en: "Central Bogotá was gutted, not only by the flames but by the feeling that the rules had ceased to exist. Those who walked among glass, smoke, and corpses understood that the city could no longer be narrated as an orderly showcase of the republic."
      },
      {
        es: "Desde entonces se dice con frecuencia que Colombia cambió aquel día, y la frase tiene fuerza porque permite fechar una ruptura visible. Sin embargo, conviene que se mire también lo que ya venía ocurriendo en pueblos donde liberales y conservadores se perseguían antes de que Bogotá ardiera.",
        en: "Since then, people often say that Colombia changed that day, and the phrase has force because it allows a visible rupture to be dated. However, it does well to look also at what was already happening in towns where Liberals and Conservatives were persecuting one another before Bogotá burned."
      },
      {
        es: "La Violencia, escrita después con mayúsculas, no salió completa de una sola esquina bogotana. Había asesinatos partidistas, policías locales comprometidas, disputas por tierras y memorias familiares que siguieron actuando aunque el crimen de Gaitán les diera un lenguaje nacional.",
        en: "La Violencia, later written with capital letters, did not emerge fully formed from a single Bogotá corner. There were partisan killings, compromised local police forces, land disputes, and family memories that kept acting even though Gaitán's murder gave them a national language."
      },
      {
        es: "Tampoco se ha probado quién ordenó el asesinato, pese a que las teorías hayan señalado enemigos personales, conspiraciones extranjeras y cálculos de partido. Esa incertidumbre no impide estudiar el Bogotazo; obliga más bien a distinguir entre una pregunta abierta y una explicación cómoda.",
        en: "Nor has it been proved who ordered the assassination, even though theories have pointed to personal enemies, foreign conspiracies, and party calculations. That uncertainty does not prevent the Bogotazo from being studied; rather, it requires distinguishing between an open question and a convenient explanation."
      },
      {
        es: "Por eso el 9 de abril funciona mejor como frontera simbólica que como origen absoluto. Cuando se lo recuerda así, el Bogotazo muestra cómo una muerte puede concentrar un país entero sin que por eso contenga todas sus causas.",
        en: "That is why April 9 works better as a symbolic border than as an absolute origin. When it is remembered that way, the Bogotazo shows how one death can concentrate an entire country without therefore containing all its causes."
      }
    ],
    glossary: [
      { es: "el tranvía", en: "the streetcar", note: { es: "Streetcar es el vehículo urbano sobre rieles; tram se entiende, pero suena menos estadounidense.", en: "An electric urban rail vehicle. In Colombian histories of Bogotá, 'tranvía' immediately evokes the old downtown system." } },
      { es: "el orador", en: "the orator", note: { es: "Orator es más formal que speaker y subraya la habilidad pública de hablar ante multitudes.", en: "A public speaker with rhetorical power. The word is formal, which fits Gaitán's political style." } },
      { es: "los disparos", en: "the shots", note: { es: "Shots puede referirse a balas disparadas, fotos o tragos; el contexto de violencia fija el sentido.", en: "Gunshots. Spanish uses the noun from 'disparar', and the plural gives the event its sudden rhythm." } },
      { es: "el saqueo", en: "the looting", note: { es: "Looting es robar en medio de disturbios o guerra; robbery sería un robo individual.", en: "The taking of goods during disorder. It belongs to riot vocabulary more than ordinary theft vocabulary." } },
      { es: "los cadáveres", en: "the corpses", note: { es: "Corpses es más frío que bodies y mantiene el tono histórico, no melodramático.", en: "Dead bodies, named in a stark register. The word keeps the violence visible without turning it into spectacle." } },
      { es: "perseguir", en: "to persecute", note: { es: "To persecute implica hostigamiento por identidad o afiliación; to chase sería solo correr detrás de alguien.", en: "To harass or attack because of affiliation, belief, or identity. It is stronger and more political than 'seguir'." } },
      { es: "la ruptura", en: "the rupture", note: { es: "Rupture es una división brusca en una historia; break sería más común, pero menos analítico.", en: "A break that reorganizes a narrative. In Spanish historical prose, 'ruptura' is abstract but common." } },
      { es: "partidista", en: "partisan", note: { es: "Partisan describe lealtad de partido; no significa necesariamente guerrillero en este pasaje.", en: "Related to political parties or factional loyalty. The Spanish word helps name violence organized through party identity." } },
      { es: "la incertidumbre", en: "the uncertainty", note: { es: "Uncertainty es la falta de certeza; no es insecurity, que suele hablar de peligro o falta de confianza.", en: "Lack of settled knowledge. The word matters because the story refuses to pretend the murder has a proven mastermind." } }
    ],
    structures: [
      {
        key: "relative-advanced",
        label: { es: "Where para situar una explicación", en: "Donde with an explanatory relative" },
        quote: { es: "en pueblos donde liberales y conservadores se perseguían", en: "in towns where Liberals and Conservatives were persecuting one another" },
        note: {
          es: "Where no siempre traduce un lugar físico exacto; aquí introduce el escenario social donde ocurre la acción.",
          en: "'Donde' attaches a whole scene to 'pueblos'. It is more economical than repeating 'en esos pueblos'."
        }
      },
      {
        key: "concession",
        label: { es: "Although con información real", en: "Aunque with a real obstacle" },
        quote: { es: "Aunque lo llevaron a una clínica cercana", en: "Although he was taken to a nearby clinic" },
        note: {
          es: "Although presenta un esfuerzo real que fracasó. El inglés usa a menudo la pasiva porque importan menos los ayudantes que el resultado.",
          en: "'Aunque' concedes that people tried to save him, but the main clause moves toward the news of his death. The indicative marks the action as factual."
        }
      },
      {
        key: "counterfactual-past",
        label: { es: "If he had survived", en: "Si hubiera sobrevivido" },
        quote: { es: "Si hubiera sobrevivido para declarar, quizá sabríamos más", en: "If he had survived to testify, perhaps we would know more" },
        note: {
          es: "El inglés pone had survived en la condición y would know en el resultado. Perhaps agrega la misma duda que quizá.",
          en: "The sentence imagines an impossible past and a different present. 'Hubiera sobrevivido' opens the condition; 'sabríamos' gives the present result."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "La pasiva de los hechos públicos", en: "Passive se in public events" },
        quote: { es: "Se quemaron tranvías, ministerios, iglesias y comercios", en: "Streetcars, ministries, churches, and stores were burned" },
        note: {
          es: "El inglés usa were burned y no nombra a cada persona involucrada. La pasiva mantiene el foco en el daño.",
          en: "This passive 'se' presents a public outcome without identifying individual agents. It is common in historical summaries of crowds and disasters."
        }
      },
      {
        key: "pluperfect",
        label: { es: "What had stopped existing", en: "The pluperfect with habían" },
        quote: { es: "las reglas habían dejado de existir", en: "the rules had ceased to exist" },
        note: {
          es: "Had ceased coloca la pérdida antes de la comprensión posterior de los testigos. Aquí el inglés y el español se alinean de cerca.",
          en: "'Habían dejado' sets the collapse before the act of understanding. The pluperfect is useful when memory looks back from inside another past moment."
        }
      },
      {
        key: "discourse-connectors",
        label: { es: "However para girar el argumento", en: "Sin embargo as an argumentative turn" },
        quote: { es: "Sin embargo, conviene que se mire también lo que ya venía ocurriendo", en: "However, it does well to look also at what was already happening" },
        note: {
          es: "However marca un giro sin borrar la oración anterior. Es más formal que but al comienzo de una frase.",
          en: "'Sin embargo' does not contradict the symbolic importance of the date; it redirects the reader toward what the neat date hides."
        }
      },
      {
        key: "perfect-subjunctive",
        label: { es: "Even though theories have pointed", en: "Aunque hayan señalado" },
        quote: { es: "pese a que las teorías hayan señalado enemigos personales", en: "even though theories have pointed to personal enemies" },
        note: {
          es: "Even though con have pointed expresa un hecho concedido. El inglés no marca si quien escribe lo trata como compartido o dudoso.",
          en: "'Pese a que' plus the perfect subjunctive concedes prior claims without accepting them as proof. It is ideal for contested history."
        }
      }
    ],
    questions: [
      {
        q: { es: "¿Qué pasaba en Bogotá antes del asesinato de Gaitán?", en: "What was happening in Bogotá before Gaitán's assassination?" },
        a: { es: "La ciudad recibía una conferencia panamericana y vivía una discusión política muy tensa.", en: "The city was hosting a Pan-American conference and living through a very tense political argument." }
      },
      {
        q: { es: "¿Por qué la muerte de Roa Sierra dejó tantas sospechas?", en: "Why did Roa Sierra's death leave so many suspicions?" },
        a: { es: "Porque murió sin declarar, de modo que el vacío fue llenado por teorías rivales.", en: "Because he died without testifying, so the void was filled by rival theories." }
      },
      {
        q: { es: "¿Qué daños visibles produjo el Bogotazo en el centro de la ciudad?", en: "What visible damage did the Bogotazo cause downtown?" },
        a: { es: "Se quemaron tranvías, ministerios, iglesias y comercios, y el centro quedó atravesado por humo, vidrios y cadáveres.", en: "Streetcars, ministries, churches, and stores were burned, and downtown was left crossed by smoke, glass, and corpses." }
      },
      {
        q: { es: "¿Por qué el texto rechaza que el 9 de abril sea la causa única de La Violencia?", en: "Why does the text reject April 9 as the single cause of La Violencia?" },
        a: { es: "Porque ya había persecuciones, asesinatos partidistas, disputas por tierras y conflictos regionales antes de que Bogotá ardiera.", en: "Because persecutions, partisan killings, land disputes, and regional conflicts already existed before Bogotá burned." }
      }
    ]
  },
  {
    id: "museo-del-oro",
    band: "A1",
    minutes: 4,
    era: "Antes de 1500 – presente",
    place: { es: "Bogotá, Colombia", en: "Bogotá, Colombia" },
    title: { es: "Oro con memoria", en: "Gold with Memory" },
    blurb: {
      es: "En Bogotá, un museo guarda oro antiguo y muestra manos de pueblos primeros.",
      en: "In Bogotá, a museum keeps old gold and shows the hands of early peoples."
    },
    caveat: {
      es: "Este relato es una versión breve. Simplifica muchos pueblos, fechas y usos del oro.",
      en: "This story is a short retelling. It simplifies many peoples, dates, and uses of gold."
    },
    paragraphs: [
      {
        es: "En Bogotá hay un museo muy brillante y silencioso, y allí vive el oro de muchos pueblos antiguos. No es oro para comprar comida. Es oro para rezar, cantar y recordar.",
        en: "In Bogotá there is a very bright and silent museum, and there lives the gold of many ancient peoples. It is not gold for buying food. It is gold for praying, singing, and remembering."
      },
      {
        es: "Antes de España, muchas manos trabajan el metal con paciencia. Hacen narigueras, aves, peces y pequeñas figuras para ceremonias. El fuego ayuda en el taller oscuro. El oro cambia, pero no pierde su luz.",
        en: "Before Spain, many hands work the metal with patience. They make nose ornaments, birds, fish, and small figures for ceremonies. Fire helps in the dark workshop. The gold changes, but it does not lose its light."
      },
      {
        es: "Los pueblos miran ríos, montañas, animales y estrellas. Para ellos, el oro habla con el sol y con el agua. También acompaña fiestas y jefes importantes. Cada pieza tiene una historia sagrada.",
        en: "The peoples look at rivers, mountains, animals, and stars. For them, gold speaks with the sun and with water. It also goes with festivals and important chiefs. Each piece has a sacred story."
      },
      {
        es: "Una balsa pequeña muestra una ceremonia del agua. Un jefe viaja sobre agua tranquila con ayudantes. El público ve oro, comunidad y poder. La vitrina parece guardar un amanecer antiguo. Cerca hay tunjos pequeños, cuentas finas y caracoles de oro, porque muchas ofrendas hablan de lagunas, cosechas y viajes.",
        en: "A small raft shows a ceremony of water. A chief travels over calm water with helpers. The public sees gold, community, and power. The case seems to keep an ancient sunrise. Nearby there are small tunjos, fine beads, and gold shells, because many offerings speak of lakes, harvests, and journeys."
      },
      {
        es: "Hoy el museo cuida muchas piezas antiguas. Los visitantes caminan por salas oscuras y redondas, pero la luz cae sobre máscaras y collares. Todos miran despacio y en silencio.",
        en: "Today the museum cares for many old pieces. Visitors walk through dark, round rooms, but light falls on masks and necklaces. Everyone looks slowly and in silence."
      },
      {
        es: "El Museo del Oro no cuenta tesoros solamente. Cuenta trabajo paciente, memoria, respeto y preguntas nuevas. El oro es más que riqueza. Es una puerta a Colombia antigua y presente, y al salir, la ciudad parece brillar diferente.",
        en: "The Gold Museum does not tell only of treasures. It tells of patient work, memory, respect, and new questions. Gold is more than wealth. It is a door to ancient and present Colombia, and when visitors leave, the city seems to shine differently."
      }
    ],
    glossary: [
      { es: "el oro", en: "gold", note: { es: "Gold puede ser sustantivo o adjetivo: gold museum, gold ring.", en: "The word for gold is masculine: el oro. It often means material, not money." } },
      { es: "el museo", en: "the museum", note: { es: "Museum es un lugar que guarda objetos y explica historias.", en: "Museo is masculine, so it uses el. The stress is mu-SE-o." } },
      { es: "los pueblos", en: "the peoples", note: { es: "Peoples en plural habla de grupos culturales, no de personas sueltas.", en: "Pueblos can mean communities or cultural groups, not only towns." } },
      { es: "las piezas", en: "the pieces", note: { es: "Pieces aquí son objetos de museo, no partes rotas.", en: "Piezas are individual objects in a collection. The word is feminine plural." } },
      { es: "el sol", en: "the sun", note: { es: "Sun lleva the cuando hablamos del astro único.", en: "Sol is masculine in Spanish: el sol. It is often tied to light and time." } },
      { es: "la memoria", en: "memory", note: { es: "Memory puede ser recuerdo personal o memoria de un pueblo.", en: "Memoria is feminine. In history, it means shared memory, not only one mind." } }
    ],
    structures: [
      {
        key: "articles-and-quantity",
        label: { es: "There is para presentar", en: "Hay for existence" },
        quote: { es: "En Bogotá hay un museo muy brillante y silencioso, y allí vive el oro de muchos pueblos antiguos.", en: "In Bogotá there is a very bright and silent museum, and there lives the gold of many ancient peoples." },
        note: {
          es: "El inglés usa there is para presentar una cosa singular.",
          en: "Hay introduces what exists. It does not change with singular or plural nouns."
        }
      },
      {
        key: "por-vs-para",
        label: { es: "For con propósito", en: "Para for purpose" },
        quote: { es: "Es oro para rezar, cantar y recordar.", en: "It is gold for praying, singing, and remembering." },
        note: {
          es: "For expresa propósito aquí: para rezar y recordar.",
          en: "Para points to purpose here. The gold is linked to an action or use."
        }
      },
      {
        key: "comparison-inequality",
        label: { es: "More than", en: "Más que" },
        quote: { es: "El oro es más que riqueza.", en: "Gold is more than wealth." },
        note: {
          es: "More than compara una idea con otra y la amplía.",
          en: "Más que shows that one idea is not enough to explain another."
        }
      },
      {
        key: "color-and-description",
        label: { es: "Adjetivos descriptivos", en: "Description after nouns" },
        quote: { es: "Los visitantes caminan por salas oscuras y redondas, pero la luz cae sobre máscaras y collares.", en: "Visitors walk through dark, round rooms, but light falls on masks and necklaces." },
        note: {
          es: "En inglés, dark y round van antes de rooms. En español, oscuras y redondas van después del sustantivo.",
          en: "Oscuras and redondas describe salas and agree in feminine plural."
        }
      }
    ],
    questions: [
      { q: { es: "¿Dónde está el museo brillante?", en: "Where is the bright museum?" }, a: { es: "Está en Bogotá.", en: "It is in Bogotá." } },
      { q: { es: "¿Qué hacen las manos antiguas?", en: "What do the old hands make?" }, a: { es: "Hacen piezas de oro.", en: "They make gold pieces." } },
      { q: { es: "¿Qué cuenta el Museo del Oro?", en: "What does the Gold Museum tell?" }, a: { es: "Cuenta trabajo, memoria y respeto.", en: "It tells of work, memory, and respect." } },
      { q: { es: "¿Qué muestra una balsa pequeña?", en: "What does a small raft show?" }, a: { es: "Muestra una ceremonia del agua.", en: "It shows a ceremony of water." } }
    ]
  },
  {
    id: "palmas-de-cera",
    band: "A1",
    minutes: 3,
    era: "Siglos antiguos – presente",
    place: { es: "Valle de Cocora, Quindío", en: "Cocora Valley, Quindío" },
    title: { es: "Las palmas altas", en: "The Tall Palms" },
    blurb: {
      es: "En Cocora, las palmas de cera suben al cielo frío y verde.",
      en: "In Cocora, wax palms rise into the cold green sky."
    },
    caveat: {
      es: "Este relato es una versión breve. Simplifica la ciencia, las fechas y la protección del bosque.",
      en: "This story is a short retelling. It simplifies the science, dates, and protection of the forest."
    },
    paragraphs: [
      {
        es: "En Cocora el valle es verde y frío. Allí crecen palmas muy altas. Su tronco claro parece una columna. La neblina pasa lenta entre las hojas.",
        en: "In Cocora the valley is green and cold. Very tall palms grow there. Their pale trunk looks like a column. Mist passes slowly between the leaves."
      },
      {
        es: "La palma de cera vive muchos años. Crece despacio en la montaña. Es más alta que muchas casas. Por eso la gente mira hacia arriba.",
        en: "The wax palm lives for many years. It grows slowly in the mountain. It is taller than many houses. That is why people look upward."
      },
      {
        es: "Antes, algunas hojas sirven para fiestas religiosas. Muchas palmas sufren por ese uso. Después, Colombia protege mejor el árbol. La palma se vuelve símbolo nacional.",
        en: "Before, some leaves serve for religious festivals. Many palms suffer from that use. Later, Colombia protects the tree better. The palm becomes a national symbol."
      },
      {
        es: "El bosque también guarda aves, agua y sombra. Las raíces ayudan a la tierra húmeda. Los campesinos cuidan caminos y potreros. Los visitantes aprenden a caminar con cuidado.",
        en: "The forest also keeps birds, water, and shade. The roots help the wet soil. Farmers care for paths and pastures. Visitors learn to walk with care."
      },
      {
        es: "Al amanecer, las palmas parecen guardias quietos. Sus copas reciben una luz suave. Ningún visitante debe cortar hojas jóvenes. La protección empieza con pasos pequeños.",
        en: "At dawn, the palms seem like quiet guards. Their crowns receive a soft light. No visitor should cut young leaves. Protection begins with small steps."
      },
      {
        es: "Hoy la palma nacional necesita paciencia. Un árbol pequeño tarda muchos años. Si el valle vive, la palma vive. Su sombra alta cuenta futuro y memoria.",
        en: "Today the national palm needs patience. A small tree takes many years. If the valley lives, the palm lives. Its tall shade tells of future and memory."
      }
    ],
    glossary: [
      { es: "la palma", en: "the palm", note: { es: "Palm puede ser árbol o la parte interior de la mano.", en: "Palma is feminine. Here it names the tree, not the hand." } },
      { es: "el valle", en: "the valley", note: { es: "Valley es una zona baja entre montañas.", en: "Valle is masculine: el valle. It often sits between mountains." } },
      { es: "la cera", en: "wax", note: { es: "Wax es el material; también puede ser verbo en otros contextos.", en: "Cera is the material wax. It gives this palm its common name." } },
      { es: "las hojas", en: "the leaves", note: { es: "Leaves es el plural de leaf, con cambio de f a v.", en: "Hojas are leaves of a plant. The h is silent in Spanish." } },
      { es: "el bosque", en: "the forest", note: { es: "Forest es más grande y natural que un parque común.", en: "Bosque is masculine. It means a forest or wooded area." } },
      { es: "nacional", en: "national", note: { es: "National describe algo de todo el país.", en: "Nacional has one form for masculine and feminine nouns." } }
    ],
    structures: [
      {
        key: "color-and-description",
        label: { es: "Adjetivos después del nombre", en: "Description after nouns" },
        quote: { es: "En Cocora el valle es verde y frío.", en: "In Cocora the valley is green and cold." },
        note: {
          es: "En inglés los adjetivos suelen ir antes del sustantivo.",
          en: "Spanish adjectives often come after nouns, but predicate adjectives follow ser."
        }
      },
      {
        key: "comparison-inequality",
        label: { es: "Taller than", en: "Más alta que" },
        quote: { es: "Es más alta que muchas casas.", en: "It is taller than many houses." },
        note: {
          es: "Taller than compara la altura de una cosa con otra.",
          en: "Más alta que compares height. Alta changes for the feminine noun palma."
        }
      },
      {
        key: "real-conditionals",
        label: { es: "If más presente", en: "Si with present" },
        quote: { es: "Si el valle vive, la palma vive.", en: "If the valley lives, the palm lives." },
        note: {
          es: "If presenta una condición real y posible en presente.",
          en: "Si plus present gives a real condition. The result can also stay in present."
        }
      },
      {
        key: "ser-vs-estar",
        label: { es: "Be para identidad", en: "Ser for identity" },
        quote: { es: "La palma se vuelve símbolo nacional.", en: "The palm becomes a national symbol." },
        note: {
          es: "Becomes muestra un cambio de identidad o papel.",
          en: "Se vuelve marks a change into a new identity or role."
        }
      }
    ],
    questions: [
      { q: { es: "¿Dónde crecen las palmas altas?", en: "Where do the tall palms grow?" }, a: { es: "Crecen en Cocora.", en: "They grow in Cocora." } },
      { q: { es: "¿Qué protege Colombia después?", en: "What does Colombia protect later?" }, a: { es: "Protege mejor el árbol.", en: "It protects the tree better." } },
      { q: { es: "¿Qué necesita hoy la palma nacional?", en: "What does the national palm need today?" }, a: { es: "Necesita paciencia.", en: "It needs patience." } },
      { q: { es: "¿Qué guarda también el bosque?", en: "What else does the forest keep?" }, a: { es: "Guarda aves, agua y sombra.", en: "It keeps birds, water, and shade." } }
    ]
  },
  {
    id: "murallas-cartagena",
    band: "A1",
    minutes: 4,
    era: "Siglos XVI–XVIII",
    place: { es: "Cartagena de Indias, Colombia", en: "Cartagena de Indias, Colombia" },
    title: { es: "Piedras contra el mar", en: "Stones Against the Sea" },
    blurb: {
      es: "Cartagena levanta murallas porque su puerto rico necesita defensa y tiempo.",
      en: "Cartagena raises walls because its rich port needs defense and time."
    },
    caveat: {
      es: "Este relato es una versión breve. Simplifica ataques, obras militares y muchas fechas.",
      en: "This story is a short retelling. It simplifies attacks, military works, and many dates."
    },
    paragraphs: [
      {
        es: "Cartagena mira al mar Caribe desde una bahía y su puerto recibe barcos, noticias y viajeros. También recibe plata, oro y mercancías valiosas. Por eso muchos enemigos miran la ciudad.",
        en: "Cartagena looks at the Caribbean Sea from a bay, and its port receives ships, news, and travelers. It also receives silver, gold, and valuable goods. That is why many enemies watch the city."
      },
      {
        es: "Los ataques llegan desde el agua muchas veces. Piratas y soldados buscan riqueza rápida y fama. La ciudad necesita una defensa fuerte. Entonces nacen murallas de piedra y coral.",
        en: "Attacks arrive from the water many times. Pirates and soldiers seek quick wealth and fame. The city needs a strong defense. So walls of stone and coral are born."
      },
      {
        es: "Construir las murallas toma muchos años de trabajo. Obreros cargan piedra bajo el sol fuerte y húmedo. Ingenieros militares dibujan baluartes, puertas y caminos. Cada parte cuida un lado distinto.",
        en: "Building the walls takes many years of work. Workers carry stone under the strong and humid sun. Military engineers draw bastions, gates, and roads. Each part guards a different side."
      },
      {
        es: "Las murallas no hacen la ciudad invencible. Pero dan tiempo para responder, y desde arriba, los guardias ven el mar. Los cañones esperan junto a las puertas.",
        en: "The walls do not make the city invincible. But they give time to respond, and from above, guards see the sea. Cannons wait beside the gates."
      },
      {
        es: "Dentro de la ciudad quedan casas coloridas, plazas y calles estrechas. Afuera el mar golpea la piedra caliente. Cada puerta controla entrada, salida, impuestos y comercio. La defensa también ordena la vida diaria.",
        en: "Inside the city, colorful houses, plazas, and narrow streets remain. Outside, the sea hits the hot stone. Each gate controls entrance, exit, taxes, and trade. Defense also orders daily life."
      },
      {
        es: "Hoy las murallas son paseo y memoria viva al atardecer. La gente camina cuando baja el sol para mirar mar, balcones y campanas. El viento trae olor de mar, fritos y fruta. Cartagena recuerda por qué levantó tanta piedra.",
        en: "Today the walls are a walk and a living memory at sunset. People walk when the sun goes down to watch sea, balconies, and bells. The wind brings a smell of sea, fried food, and fruit. Cartagena remembers why it raised so much stone."
      }
    ],
    glossary: [
      { es: "las murallas", en: "the walls", note: { es: "Walls aquí son defensas grandes de una ciudad.", en: "Murallas are large defensive walls around a town or city." } },
      { es: "el puerto", en: "the port", note: { es: "Port es un lugar para barcos y comercio.", en: "Puerto is masculine. It means a harbor or port for ships." } },
      { es: "los barcos", en: "the ships", note: { es: "Ships son barcos grandes; boats puede ser más general.", en: "Barcos is a common word for ships or boats." } },
      { es: "los enemigos", en: "the enemies", note: { es: "Enemies es plural; el singular es enemy.", en: "Enemigos names people who attack or oppose another group." } },
      { es: "la defensa", en: "defense", note: { es: "Defense usa s en inglés americano, no la otra forma.", en: "Defensa is feminine. It names protection against attack." } },
      { es: "las puertas", en: "the gates", note: { es: "Gates son entradas grandes en una cerca o muralla.", en: "Puertas can be doors or city gates, depending on place." } }
    ],
    structures: [
      {
        key: "por-vs-para",
        label: { es: "For con propósito", en: "Para for purpose" },
        quote: { es: "Pero dan tiempo para responder.", en: "But they give time to respond." },
        note: {
          es: "To respond expresa el propósito de ese tiempo.",
          en: "Para plus infinitive shows purpose: the city gains time in order to respond."
        }
      },
      {
        key: "ser-vs-estar",
        label: { es: "Be para identidad", en: "Ser for identity" },
        quote: { es: "Hoy las murallas son paseo y memoria viva al atardecer.", en: "Today the walls are a walk and a living memory at sunset." },
        note: {
          es: "Are une el sujeto con una identidad o descripción.",
          en: "Son links the walls to what they are now: walk and memory."
        }
      },
      {
        key: "obligation-impersonal",
        label: { es: "Need para necesidad", en: "Necesitar plus noun" },
        quote: { es: "La ciudad necesita una defensa fuerte.", en: "The city needs a strong defense." },
        note: {
          es: "Needs expresa una necesidad directa del sujeto.",
          en: "Necesita names what the subject lacks. It is simpler than hay que here."
        }
      },
      {
        key: "color-and-description",
        label: { es: "Adjetivos de color", en: "Colors after nouns" },
        quote: { es: "Dentro de la ciudad quedan casas coloridas, plazas y calles estrechas.", en: "Inside the city, colorful houses, plazas, and narrow streets remain." },
        note: {
          es: "En inglés, colorful y narrow van antes de los nombres. En español, coloridas y estrechas van después.",
          en: "Coloridas and estrechas describe nouns and agree in plural form."
        }
      }
    ],
    questions: [
      { q: { es: "¿Qué recibe el puerto de Cartagena?", en: "What does Cartagena's port receive?" }, a: { es: "Recibe barcos y noticias.", en: "It receives ships and news." } },
      { q: { es: "¿Por qué nacen las murallas?", en: "Why are the walls born?" }, a: { es: "La ciudad necesita defensa.", en: "The city needs defense." } },
      { q: { es: "¿Qué son hoy las murallas?", en: "What are the walls today?" }, a: { es: "Son paseo y memoria.", en: "They are a walk and a memory." } },
      { q: { es: "¿Qué esperan junto a las puertas?", en: "What waits beside the gates?" }, a: { es: "Esperan los cañones.", en: "The cannons wait." } }
    ]
  },
  {
    id: "rio-magdalena",
    band: "A1",
    minutes: 4,
    era: "Siglos antiguos – siglo XX",
    place: { es: "Río Magdalena, Colombia", en: "Magdalena River, Colombia" },
    title: { es: "El camino de agua", en: "The Water Road" },
    blurb: {
      es: "El Magdalena une montañas, pueblos y puertos como una gran carretera histórica.",
      en: "The Magdalena joins mountains, towns, and ports like a great historic highway."
    },
    caveat: {
      es: "Este relato es una versión breve. Simplifica rutas indígenas, comercio, barcos y cambios modernos.",
      en: "This story is a short retelling. It simplifies Indigenous routes, trade, ships, and modern changes."
    },
    paragraphs: [
      {
        es: "El río Magdalena cruza Colombia por el centro. Nace en montañas altas y busca el mar. Sus aguas cafés pasan por muchos pueblos ribereños. Por eso parece un camino largo.",
        en: "The Magdalena River crosses Colombia through the center. It begins in high mountains and seeks the sea. Its brown waters pass many river towns. That is why it seems like a long road."
      },
      {
        es: "Antes de los trenes, el río manda. Canoas largas llevan comida, sal, pasajeros y cerámica local. Después llegan barcos grandes con humo, ruedas y campanas. Viajar por agua es más fácil que caminar.",
        en: "Before trains, the river leads. Long canoes carry food, salt, passengers, and local pottery. Later large ships with smoke, wheels, and bells arrive. Traveling by water is easier than walking."
      },
      {
        es: "El Magdalena mueve café, tabaco, cartas y noticias. También mueve personas hacia trabajos y familias. Los puertos crecen en sus orillas. Cada parada une tierra caliente y montaña.",
        en: "The Magdalena moves coffee, tobacco, letters, and news. It also moves people toward jobs and families. Ports grow on its banks. Each stop joins hot lowland and mountain."
      },
      {
        es: "El río no siempre es tranquilo. A veces sube y cubre la orilla, pero a veces baja y muestra bancos de arena. Los pilotos conocen curvas, piedras y tiempos.",
        en: "The river is not always calm. Sometimes it rises and covers the bank, but sometimes it falls and shows sandbars. Pilots know bends, stones, and seasons."
      },
      {
        es: "En las orillas nacen mercados pequeños. Pescadores venden bocachico y cuentan historias. Las campanas anuncian llegadas de barcos. El río marca la hora local.",
        en: "On the banks, small markets are born. Fishers sell bocachico and tell stories. Bells announce arrivals of ships. The river marks the local hour."
      },
      {
        es: "Hoy hay carreteras y aviones rápidos. Pero el río guarda su importancia. En sus aguas viaja mucha memoria colombiana. Colombia mira el Magdalena y recuerda caminos.",
        en: "Today there are fast roads and airplanes. But the river keeps its importance. Much Colombian memory travels in its waters. Colombia looks at the Magdalena and remembers roads."
      }
    ],
    glossary: [
      { es: "el río", en: "the river", note: { es: "River se usa con the cuando nombramos uno específico.", en: "Río is masculine. The accent marks the stressed vowel." } },
      { es: "el camino", en: "the road", note: { es: "Road puede ser literal o una imagen para una ruta.", en: "Camino can be a physical road or a route people use." } },
      { es: "las canoas", en: "canoes", note: { es: "Canoes termina en es porque canoe acaba en vocal escrita.", en: "Canoas are small boats. The word is feminine plural." } },
      { es: "los puertos", en: "the ports", note: { es: "Ports son lugares donde barcos paran y cargan cosas.", en: "Puertos are places for boats and trade along water." } },
      { es: "la orilla", en: "the bank", note: { es: "Bank aquí significa borde del río, no banco de dinero.", en: "Orilla is the edge of a river, lake, or sea." } },
      { es: "las aguas", en: "the waters", note: { es: "Waters en plural suena histórico o poético en inglés.", en: "Aguas is plural here because it talks about moving river water." } }
    ],
    structures: [
      {
        key: "comparison-inequality",
        label: { es: "Easier than", en: "Más fácil que" },
        quote: { es: "Viajar por agua es más fácil que caminar.", en: "Traveling by water is easier than walking." },
        note: {
          es: "Easier than compara dos acciones: viajar por agua y caminar.",
          en: "Más fácil que compares two actions. The infinitives act like nouns here."
        }
      },
      {
        key: "articles-and-quantity",
        label: { es: "There are", en: "Hay with plural" },
        quote: { es: "Hoy hay carreteras y aviones rápidos.", en: "Today there are fast roads and airplanes." },
        note: {
          es: "There are presenta varias cosas que existen ahora.",
          en: "Hay stays the same with plural nouns like carreteras and aviones."
        }
      },
      {
        key: "color-and-description",
        label: { es: "Adjetivos descriptivos", en: "Adjectives after nouns" },
        quote: { es: "Cada parada une tierra caliente y montaña.", en: "Each stop joins hot lowland and mountain." },
        note: {
          es: "En inglés hot va antes del sustantivo lowland.",
          en: "Caliente comes after tierra. Many Spanish adjectives follow the noun."
        }
      },
      {
        key: "ser-vs-estar",
        label: { es: "Be con descripción", en: "Ser for description" },
        quote: { es: "El río no siempre es tranquilo.", en: "The river is not always calm." },
        note: {
          es: "El inglés usa is para identidad y para descripción: no separa ser y estar.",
          en: "Es links the river with a general description, even with no siempre."
        }
      }
    ],
    questions: [
      { q: { es: "¿Por dónde cruza el Magdalena?", en: "Where does the Magdalena cross?" }, a: { es: "Cruza Colombia por el centro.", en: "It crosses Colombia through the center." } },
      { q: { es: "¿Qué llevan las canoas?", en: "What do the canoes carry?" }, a: { es: "Llevan comida, sal y cerámica.", en: "They carry food, salt, and pottery." } },
      { q: { es: "¿Qué guarda el río hoy?", en: "What does the river keep today?" }, a: { es: "Guarda su importancia.", en: "It keeps its importance." } },
      { q: { es: "¿Qué venden los pescadores?", en: "What do fishers sell?" }, a: { es: "Venden bocachico.", en: "They sell bocachico." } }
    ]
  },
  {
    id: "carnaval-barranquilla",
    band: "A1",
    minutes: 4,
    era: "Siglos XIX–presente",
    place: { es: "Barranquilla, Atlántico", en: "Barranquilla, Atlántico" },
    title: { es: "La ciudad baila", en: "The City Dances" },
    blurb: {
      es: "En Barranquilla, el carnaval mezcla música, máscaras y memorias de muchos pueblos.",
      en: "In Barranquilla, carnival mixes music, masks, and memories from many peoples."
    },
    caveat: {
      es: "Este relato es una versión breve. Simplifica orígenes africanos, indígenas, europeos y caribeños.",
      en: "This story is a short retelling. It simplifies African, Indigenous, European, and Caribbean origins."
    },
    paragraphs: [
      {
        es: "Barranquilla está cerca del río y del mar, y por allí llegan barcos, trabajadores y familias. Cada grupo trae música, comida, acentos y memoria. La ciudad aprende a mezclar voces distintas.",
        en: "Barranquilla is near the river and the sea, and ships, workers, and families arrive there. Each group brings music, food, accents, and memory. The city learns to mix different voices."
      },
      {
        es: "Antes de la Cuaresma, la gente celebra en barrios y plazas. Salen comparsas, tambores y disfraces brillantes. Las calles se llenan de baile. El carnaval abre una gran puerta popular.",
        en: "Before Lent, people celebrate in neighborhoods and plazas. Groups, drums, and bright costumes go out. The streets fill with dance. Carnival opens a great popular door."
      },
      {
        es: "La cumbia suena con tambor y flauta. El garabato juega con vida y muerte. Las máscaras muestran animales, diablos y bromas antiguas. Cada danza guarda una raíz distinta de muchos pueblos.",
        en: "Cumbia sounds with drum and flute. The garabato dance plays with life and death. The masks show animals, devils, and old jokes. Each dance keeps a different root from many peoples."
      },
      {
        es: "El carnaval también cambia el orden normal. La reina saluda desde una carroza grande y colorida. La risa manda por unos días alegres y ruidosos. Todos miran colores, música y movimiento.",
        en: "Carnival also changes the normal order. The queen waves from a large and colorful float. Laughter rules for a few joyful and noisy days. Everyone sees colors, music, and movement."
      },
      {
        es: "La Batalla de Flores abre la fiesta con flores, disfraces, reinas y tambores viejos. Las carrozas avanzan con música fuerte. Los niños saludan desde las aceras llenas. La ciudad entera parece cantar junta.",
        en: "The Battle of Flowers opens the festival with flowers, costumes, queens, and old drums. The floats move forward with loud music. Children wave from the full sidewalks. The whole city seems to sing together."
      },
      {
        es: "Hoy Barranquilla cuida su fiesta grande con orgullo y trabajo. Las familias enseñan pasos a niños pequeños porque la tradición necesita gente joven, alegre y curiosa. Los visitantes bailan junto a la ciudad. El carnaval dice que la memoria vive.",
        en: "Today Barranquilla cares for its great festival with pride and work. Families teach steps to small children because tradition needs young, joyful, and curious people. Visitors dance beside the city. Carnival says that memory lives."
      }
    ],
    glossary: [
      { es: "el carnaval", en: "carnival", note: { es: "Carnival nombra una fiesta antes de la Cuaresma en muchos lugares.", en: "Carnaval is masculine. It names a festival with music, costumes, and streets." } },
      { es: "la música", en: "music", note: { es: "Music no lleva artículo cuando hablamos de música en general.", en: "Música is feminine and has an accent on the first syllable." } },
      { es: "las máscaras", en: "the masks", note: { es: "Masks cubren la cara o representan un personaje.", en: "Máscaras is feminine plural. The accent marks the stressed syllable." } },
      { es: "la danza", en: "the dance", note: { es: "Dance puede ser una actividad o una danza específica.", en: "Danza is a formal word for dance. Baile is also common." } },
      { es: "la reina", en: "the queen", note: { es: "Queen puede ser monarca o figura simbólica de una fiesta.", en: "Reina is feminine. In festivals, it names a ceremonial leader." } },
      { es: "la memoria", en: "memory", note: { es: "Memory aquí es historia viva de una comunidad.", en: "Memoria is feminine. It can mean shared cultural memory." } }
    ],
    structures: [
      {
        key: "ser-vs-estar",
        label: { es: "Be para ubicación", en: "Estar for location" },
        quote: { es: "Barranquilla está cerca del río y del mar.", en: "Barranquilla is near the river and the sea." },
        note: {
          es: "Is expresa ubicación aquí; el inglés usa el mismo verbo be.",
          en: "Está gives location. Spanish chooses estar, not ser, for where something is."
        }
      },
      {
        key: "articles-and-quantity",
        label: { es: "A few days", en: "Unos for an estimate" },
        quote: { es: "La risa manda por unos días alegres y ruidosos.", en: "Laughter rules for a few joyful and noisy days." },
        note: {
          es: "A few indica una cantidad pequeña pero no exacta.",
          en: "Unos before a plural noun can mean some or a few."
        }
      },
      {
        key: "reported-speech",
        label: { es: "That para informar", en: "Decir que" },
        quote: { es: "El carnaval dice que la memoria vive.", en: "Carnival says that memory lives." },
        note: {
          es: "Says that introduce una idea presentada por otra voz.",
          en: "Dice que reports an idea. Here carnival is personified as a speaker."
        }
      },
      {
        key: "color-and-description",
        label: { es: "Color antes del nombre", en: "Color and description" },
        quote: { es: "La reina saluda desde una carroza grande y colorida.", en: "The queen waves from a large and colorful float." },
        note: {
          es: "En inglés, large y colorful van antes de float. En español, grande y colorida van después.",
          en: "Grande and colorida describe carroza. Colorida agrees with the feminine noun."
        }
      }
    ],
    questions: [
      { q: { es: "¿Dónde está Barranquilla?", en: "Where is Barranquilla?" }, a: { es: "Está cerca del río y del mar.", en: "It is near the river and the sea." } },
      { q: { es: "¿Qué sale antes de la Cuaresma?", en: "What goes out before Lent?" }, a: { es: "Salen comparsas, tambores y disfraces.", en: "Groups, drums, and costumes go out." } },
      { q: { es: "¿Qué enseñan las familias a niños?", en: "What do families teach children?" }, a: { es: "Enseñan pasos.", en: "They teach steps." } },
      { q: { es: "¿Qué abre la Batalla de Flores?", en: "What does the Battle of Flowers open?" }, a: { es: "Abre la fiesta.", en: "It opens the festival." } }
    ]
  },
  {
    id: "el-alamo",
    band: "A1",
    minutes: 4,
    era: "1836",
    place: { es: "San Antonio, Texas", en: "San Antonio, Texas" },
    title: { es: "Una misión en pelea", en: "A Mission in a Fight" },
    blurb: {
      es: "En 1836, el Álamo se vuelve un símbolo difícil de Texas.",
      en: "In 1836, the Alamo becomes a difficult symbol of Texas."
    },
    caveat: {
      es: "Este relato es una versión breve. Simplifica causas, personas y debates de la Revolución de Texas.",
      en: "This story is a short retelling. It simplifies causes, people, and debates of the Texas Revolution."
    },
    paragraphs: [
      {
        es: "El Álamo es una misión vieja de piedra y está en San Antonio, Texas. En 1836 hay guerra en la región. Texas pelea contra el gobierno mexicano.",
        en: "The Alamo is an old stone mission, and it is in San Antonio, Texas. In 1836 there is war in the region. Texas fights against the Mexican government."
      },
      {
        es: "Un grupo pequeño entra al Álamo y quiere guardar la ciudad por unos días difíciles. Afuera llega un ejército más grande. Sus soldados traen banderas, armas y órdenes.",
        en: "A small group enters the Alamo and wants to hold the city for a few difficult days. Outside, a larger army arrives. Its soldiers bring flags, weapons, and orders."
      },
      {
        es: "El sitio dura varios días fríos y tensos. Dentro, la gente espera ayuda desde otros pueblos cercanos. También arregla muros y cuenta comida. La tensión crece con cada mañana.",
        en: "The siege lasts several cold and tense days. Inside, people wait for help from other nearby towns. They also repair walls and count food. The tension grows with each morning."
      },
      {
        es: "Al final, el ejército toma la misión. Mueren defensores y también atacantes. La noticia viaja rápido por caminos y ranchos de Texas. Para muchos, el Álamo pide memoria y respuesta.",
        en: "In the end, the army takes the mission. Defenders die, and attackers die too. The news travels quickly along Texas roads and ranches. For many, the Alamo asks for memory and response."
      },
      {
        es: "Después, otros texanos gritan el nombre. El símbolo ayuda a unir soldados. Hoy el lugar recibe muchas preguntas difíciles. Su historia mezcla valor, pérdida y disputa.",
        en: "Later, other Texans shout the name. The symbol helps unite soldiers. Today the place receives many difficult questions. Its history mixes courage, loss, and dispute."
      },
      {
        es: "La misión vieja queda como museo pequeño y concurrido. Algunas salas muestran nombres, armas, mapas y cartas. Los guías hablan con mucho cuidado ante familias y escuelas. La memoria necesita preguntas honestas y abiertas. El sitio todavía provoca debates muy vivos.",
        en: "The old mission remains as a small and busy museum. Some rooms show names, weapons, maps, and letters. Guides speak with great care before families and schools. Memory needs honest and open questions. The site still provokes very lively debates."
      }
    ],
    glossary: [
      { es: "la misión", en: "the mission", note: { es: "Mission aquí es un edificio religioso histórico.", en: "Misión is feminine. Here it means a religious settlement or building." } },
      { es: "la guerra", en: "war", note: { es: "War normalmente no lleva artículo cuando hablamos en general.", en: "Guerra is feminine. It names armed conflict between groups." } },
      { es: "el ejército", en: "the army", note: { es: "Army es un grupo militar grande organizado.", en: "Ejército is masculine and has an accent on the second syllable." } },
      { es: "los soldados", en: "the soldiers", note: { es: "Soldiers son personas que sirven en un ejército.", en: "Soldados is masculine plural, but it can include a mixed group." } },
      { es: "los muros", en: "walls", note: { es: "Walls aquí son muros de un edificio defensivo.", en: "Muros are walls, often strong or outside walls." } },
      { es: "la memoria", en: "memory", note: { es: "Memory aquí significa recuerdo público de un hecho.", en: "Memoria is feminine. It often means public remembrance in history." } }
    ],
    structures: [
      {
        key: "dates-and-calendar",
        label: { es: "Años con in", en: "En with years" },
        quote: { es: "En 1836 hay guerra en la región.", en: "In 1836 there is war in the region." },
        note: {
          es: "El inglés usa in antes de un año histórico.",
          en: "Spanish uses en before a year. Read 1836 as mil ochocientos treinta y seis."
        }
      },
      {
        key: "comparison-inequality",
        label: { es: "Larger", en: "Más grande" },
        quote: { es: "Afuera llega un ejército más grande.", en: "Outside, a larger army arrives." },
        note: {
          es: "Larger compara tamaño, aunque than no aparece escrito aquí.",
          en: "Más grande marks greater size. Spanish uses más before the adjective."
        }
      },
      {
        key: "articles-and-quantity",
        label: { es: "Many questions", en: "Muchas with plural" },
        quote: { es: "Hoy el lugar recibe muchas preguntas difíciles.", en: "Today the place receives many difficult questions." },
        note: {
          es: "Many va antes del sustantivo plural questions.",
          en: "Muchas agrees with preguntas in gender and number: feminine plural."
        }
      },
      {
        key: "ser-vs-estar",
        label: { es: "Be para identidad", en: "Ser for identity" },
        quote: { es: "El Álamo es una misión vieja de piedra y está en San Antonio, Texas.", en: "The Alamo is an old stone mission, and it is in San Antonio, Texas." },
        note: {
          es: "El inglés usa is para identidad y lugar en una sola frase. El español separa es y está.",
          en: "Spanish uses es for identity and está for location in the same sentence."
        }
      }
    ],
    questions: [
      { q: { es: "¿Dónde está el Álamo?", en: "Where is the Alamo?" }, a: { es: "Está en San Antonio, Texas.", en: "It is in San Antonio, Texas." } },
      { q: { es: "¿Qué espera la gente dentro?", en: "What do people wait for inside?" }, a: { es: "Espera ayuda.", en: "They wait for help." } },
      { q: { es: "¿Qué mezcla su historia?", en: "What does its history mix?" }, a: { es: "Mezcla valor, pérdida y disputa.", en: "It mixes courage, loss, and dispute." } },
      { q: { es: "¿Qué muestran algunas salas?", en: "What do some rooms show?" }, a: { es: "Muestran nombres, armas, mapas y cartas.", en: "They show names, weapons, maps, and letters." } }
    ]
  },
  {
    id: "ruta-chisholm",
    band: "A1",
    minutes: 3,
    era: "Décadas de 1860–1870",
    place: { es: "Texas, Oklahoma y Kansas", en: "Texas, Oklahoma, and Kansas" },
    title: { es: "La ruta del ganado", en: "The Cattle Route" },
    blurb: {
      es: "La ruta Chisholm lleva ganado texano hacia trenes, mercados y nuevas vidas.",
      en: "The Chisholm Trail carries Texas cattle toward trains, markets, and new lives."
    },
    caveat: {
      es: "Este relato es una versión breve. Simplifica rutas, pueblos indígenas, vaqueros y comercio.",
      en: "This story is a short retelling. It simplifies routes, Indigenous peoples, cowboys, and trade."
    },
    paragraphs: [
      {
        es: "Después de la guerra, Texas tiene mucho ganado. Los mercados del norte pagan mejor cada verano. Pero el ganado está muy lejos. Hace falta un camino largo.",
        en: "After the war, Texas has much cattle. Northern markets pay better each summer. But the cattle is very far away. A long road is needed."
      },
      {
        es: "La ruta Chisholm cruza llanuras y ríos. Los vaqueros llevan miles de animales. Van despacio durante muchas semanas. El polvo cubre ropa, caras y sillas.",
        en: "The Chisholm Trail crosses plains and rivers. Cowboys move thousands of animals. They go slowly for many weeks. Dust covers clothes, faces, and saddles."
      },
      {
        es: "El viaje no es fácil para nadie. Hay tormentas, calor y noches largas. También hay pueblos indígenas en el camino. La ruta pasa por tierras con dueños.",
        en: "The trip is not easy for anyone. There are storms, heat, and long nights. There are also Indigenous peoples on the road. The trail passes through lands with owners."
      },
      {
        es: "Algunos vaqueros son mexicanos y negros. Otros vienen de familias pobres. Todos conocen mucho cansancio y peligro. La ruta no pertenece a una sola voz.",
        en: "Some cowboys are Mexican and Black. Others come from poor families. All know much fatigue and danger. The trail does not belong to one voice."
      },
      {
        es: "En Kansas esperan pueblos con trenes. Allí el ganado sube hacia otros mercados lejanos. El dinero vuelve a ranchos texanos. Muchos jóvenes encuentran trabajo como vaqueros.",
        en: "In Kansas, towns with trains wait. There the cattle goes toward other distant markets. Money returns to Texas ranches. Many young men find work as cowboys."
      },
      {
        es: "Con el tiempo llegan cercas y trenes nuevos. La ruta pierde su viejo uso. Pero queda en canciones, mapas y películas. Cuenta una historia de trabajo, cambio y frontera.",
        en: "In time, fences and new trains arrive. The trail loses its old use. But it stays in songs, maps, and movies. It tells a story of work, change, and frontier."
      }
    ],
    glossary: [
      { es: "el ganado", en: "cattle", note: { es: "Cattle es plural colectivo; no suele decirse cattles.", en: "Ganado is a collective noun for farm animals, here cows and steers." } },
      { es: "la ruta", en: "the trail", note: { es: "Trail puede ser sendero, ruta histórica o camino marcado.", en: "Ruta is feminine. It means a route, not only a paved road." } },
      { es: "los vaqueros", en: "cowboys", note: { es: "Cowboys son trabajadores de ganado, no solo personajes de películas.", en: "Vaqueros are cattle workers. The word comes from vaca, cow." } },
      { es: "los mercados", en: "the markets", note: { es: "Markets son lugares o sistemas para comprar y vender.", en: "Mercados are places or networks where goods are sold." } },
      { es: "los trenes", en: "the trains", note: { es: "Trains llevan personas o carga sobre rieles.", en: "Trenes is masculine plural. Trains moved cattle to distant buyers." } },
      { es: "las cercas", en: "fences", note: { es: "Fences separan tierras y controlan animales.", en: "Cercas are fences. The word is feminine plural." } }
    ],
    structures: [
      {
        key: "comparison-inequality",
        label: { es: "Better", en: "Mejor" },
        quote: { es: "Los mercados del norte pagan mejor.", en: "Northern markets pay better." },
        note: {
          es: "Better es la forma irregular de more good.",
          en: "Mejor is the irregular comparative for bueno or bien."
        }
      },
      {
        key: "obligation-impersonal",
        label: { es: "Passive need", en: "Hace falta" },
        quote: { es: "Hace falta un camino largo.", en: "A long road is needed." },
        note: {
          es: "Is needed presenta la necesidad sin nombrar una persona.",
          en: "Hace falta names something needed without saying who needs it."
        }
      },
      {
        key: "time-since",
        label: { es: "In time", en: "Con el tiempo" },
        quote: { es: "Con el tiempo llegan cercas y trenes nuevos.", en: "In time, fences and new trains arrive." },
        note: {
          es: "In time presenta un cambio que ocurre gradualmente.",
          en: "Con el tiempo marks change across a period, not one exact date."
        }
      },
      {
        key: "articles-and-quantity",
        label: { es: "Thousands of", en: "Miles de" },
        quote: { es: "Los vaqueros llevan miles de animales.", en: "Cowboys move thousands of animals." },
        note: {
          es: "Thousands of expresa una cantidad grande, no exacta.",
          en: "Miles de gives a large, approximate quantity before a plural noun."
        }
      }
    ],
    questions: [
      { q: { es: "¿Qué tiene Texas después de la guerra?", en: "What does Texas have after the war?" }, a: { es: "Tiene mucho ganado.", en: "It has much cattle." } },
      { q: { es: "¿Quiénes llevan miles de animales?", en: "Who move thousands of animals?" }, a: { es: "Los vaqueros los llevan.", en: "The cowboys move them." } },
      { q: { es: "¿Dónde queda la ruta después?", en: "Where does the trail stay later?" }, a: { es: "Queda en canciones y mapas.", en: "It stays in songs and maps." } },
      { q: { es: "¿Qué cubre el polvo?", en: "What does the dust cover?" }, a: { es: "Cubre ropa, caras y sillas.", en: "It covers clothes, faces, and saddles." } }
    ]
  },
  {
    id: "comuneros",
    band: "A2",
    minutes: 5,
    era: "1781",
    place: { es: "Socorro y caminos hacia Santafé, Nueva Granada", en: "Socorro and roads toward Santafé, New Granada" },
    title: { es: "El papel roto en Socorro", en: "The Torn Paper in Socorro" },
    blurb: {
      es: "En 1781, vecinos de Socorro protestaron contra nuevos impuestos y caminaron hacia Santafé.",
      en: "In 1781, residents of Socorro protested against new taxes and walked toward Santafé."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Resume hechos generales de la revuelta comunera, con detalles comprimidos para lectura A2.",
      en: "This story is an original and simplified retelling. It summarizes general facts about the Comuneros revolt, with details compressed for A2 reading."
    },
    paragraphs: [
      {
        es: "En 1781, Socorro era una villa activa entre montañas y caminos comerciales. Sus vecinos vendían tabaco, telas y comida, pero pagaban impuestos cada vez mayores. Los rumores del mercado hicieron que la noticia viajara con gran velocidad, en muchas casas de la región.",
        en: "In 1781, Socorro was an active town between mountains and trade roads. Its residents sold tobacco, cloth, and food, but paid ever higher taxes. Market rumors made the news travel with great speed, in many houses of the region."
      },
      {
        es: "Un día llegó un aviso oficial con nuevos cobros para la gente. Manuela Beltrán rompió el papel frente a todos, y la plaza despertó. Ese gesto sencillo convirtió el miedo común en una voz colectiva, con dudas, miedo y mucha atención.",
        en: "One day an official notice arrived with new charges for the people. Manuela Beltrán tore the paper in front of everyone, and the plaza woke up. That simple gesture turned common fear into a collective voice, with doubts, fear, and close attention."
      },
      {
        es: "La protesta creció rápido, porque muchos pueblos sentían la misma rabia. Campesinos, artesanos y comerciantes formaron una marcha llamada los comuneros, desde plazas y veredas cercanas. Cada pueblo sumaba personas, comida y animales para sostener la caminata.",
        en: "The protest grew quickly, because many towns felt the same anger. Farmers, artisans, and merchants formed a march called the Comuneros, from nearby plazas and rural paths. Each town added people, food, and animals to support the walk."
      },
      {
        es: "El grupo avanzó por caminos fríos hacia Santafé, con banderas sencillas. Pedían menos impuestos, respeto local y reglas más claras para trabajar. Algunos líderes escribían peticiones para explicar mejor sus necesidades principales, en medio de cambios difíciles.",
        en: "The group advanced on cold roads toward Santafé, with simple flags. They asked for lower taxes, local respect, and clearer rules for working. Some leaders wrote petitions to explain their main needs better, in the middle of difficult changes."
      },
      {
        es: "Cerca de Zipaquirá, representantes del gobierno prometieron escuchar sus reclamos. Se firmaron capitulaciones, y muchos comuneros volvieron tranquilos a casa. La firma parecía una victoria, aunque todavía dependía de la autoridad.",
        en: "Near Zipaquirá, government representatives promised to hear their claims. Agreements were signed, and many Comuneros returned home calmly. The signing seemed like a victory, although it still depended on authority."
      },
      {
        es: "Después, las autoridades desconocieron varias promesas y castigaron a algunos líderes. José Antonio Galán fue capturado, juzgado y ejecutado como escarmiento público. El castigo buscaba enseñar obediencia, pero también aumentó la memoria rebelde.",
        en: "Later, the authorities ignored several promises and punished some leaders. José Antonio Galán was captured, tried, and executed as a public warning. The punishment tried to teach obedience, but it also increased rebellious memory."
      },
      {
        es: "La revuelta no logró cambiar el gobierno colonial en ese momento. Sin embargo, dejó memoria de unión popular contra abusos muy concretos. Por eso, la unión comunera siguió viva en relatos familiares, durante generaciones de memoria compartida.",
        en: "The revolt did not manage to change colonial government at that moment. However, it left a memory of popular unity against very concrete abuses. For that reason, Comunero unity stayed alive in family stories, for generations of shared memory."
      }
    ],
    glossary: [
      { es: "los impuestos", en: "the taxes", note: { es: "Taxes son pagos obligatorios al gobierno; no son multas ni precios normales.", en: "Payments required by the government. In the story, they are the cause of anger." } },
      { es: "el papel", en: "the paper", note: { es: "Paper puede ser una hoja física o un documento; aquí es un aviso oficial.", en: "A sheet or document. Here it is an official notice that starts the protest." } },
      { es: "la protesta", en: "the protest", note: { es: "Protest funciona como sustantivo y verbo en inglés: a protest, to protest.", en: "A public action against a decision. The word is feminine in Spanish." } },
      { es: "los comuneros", en: "the Comuneros", note: { es: "Comuneros se deja con mayúscula cuando nombra este movimiento histórico específico.", en: "The people in this revolt. The name comes from community, or común." } },
      { es: "las capitulaciones", en: "the agreements", note: { es: "Agreements es más natural que capitulations aquí, porque eran promesas negociadas.", en: "Formal promises or terms. In this history, the word names the Zipaquirá deal." } },
      { es: "la revuelta", en: "the revolt", note: { es: "Revolt es una protesta grande contra autoridad; riot suele ser más desordenado.", en: "A strong uprising against authority. It is close to rebelión, but more general." } },
      { es: "la unión", en: "the unity", note: { es: "Unity nombra estar juntos con un propósito; no es solamente cercanía física.", en: "The act of being joined together. Here it is political and social." } }
    ],
    structures: [
      {
        key: "dates-and-calendar",
        label: { es: "English dates with in", en: "Spanish dates with en" },
        quote: { es: "En 1781, Socorro era una villa activa entre montañas y caminos comerciales.", en: "In 1781, Socorro was an active town between mountains and trade roads." },
        note: {
          es: "El inglés usa In 1781 antes del año. La coma separa la fecha del resto de la oración.",
          en: "Spanish uses 'En 1781' before the year. The comma then separates the date from the main idea."
        }
      },
      {
        key: "preterite-vs-imperfect",
        label: { es: "Background with was, event with arrived", en: "Imperfect background, preterite event" },
        quote: { es: "Socorro era una villa activa / Un día llegó un aviso oficial", en: "Socorro was an active town / One day an official notice arrived" },
        note: {
          es: "En inglés, was describe el contexto inicial del pueblo. Arrived marca el aviso como un evento terminado que inicia la protesta.",
          en: "'Era' gives the background of Socorro. 'Llegó' marks one completed event that starts the protest."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "Passive with were", en: "Se for unnamed doers" },
        quote: { es: "Se firmaron capitulaciones", en: "Agreements were signed" },
        note: {
          es: "Were signed es pasiva. Enfoca el resultado de los acuerdos, no a las personas que firmaron.",
          en: "'Se firmaron' avoids naming the people who signed. The result matters more than the doers."
        }
      },
      {
        key: "concession",
        label: { es: "However for contrast", en: "Sin embargo for contrast" },
        quote: { es: "Sin embargo, dejó memoria de unión popular contra abusos muy concretos.", en: "However, it left a memory of popular unity against very concrete abuses." },
        note: {
          es: "However cambia de la derrota política a la memoria que la revuelta dejó después.",
          en: "'Sin embargo' turns from the failed political change to the memory the revolt left behind."
        }
      },
      {
        key: "articles-and-quantity",
        label: { es: "Many before count nouns", en: "Muchos agrees with pueblos" },
        quote: { es: "muchos pueblos sentían la misma rabia", en: "many towns felt the same anger" },
        note: {
          es: "Many va con sustantivos contables en plural, como towns. No cambia por género.",
          en: "'Muchos pueblos' is masculine plural because it agrees with 'pueblos' and means a large number of towns."
        }
      }
    ],
    questions: [
      { q: { es: "¿Dónde empezó la protesta comunera?", en: "Where did the Comunero protest begin?" }, a: { es: "Empezó en Socorro.", en: "It began in Socorro." } },
      { q: { es: "¿Qué rompió Manuela Beltrán?", en: "What did Manuela Beltrán tear?" }, a: { es: "Rompió un papel oficial.", en: "She tore an official paper." } },
      { q: { es: "¿Qué pedían los comuneros?", en: "What did the Comuneros ask for?" }, a: { es: "Pedían menos impuestos y respeto local.", en: "They asked for lower taxes and local respect." } },
      { q: { es: "¿Qué dejaron los comuneros en la memoria?", en: "What did the Comuneros leave in memory?" }, a: { es: "Dejaron memoria de unión popular.", en: "They left a memory of popular unity." } }
    ]
  },
  {
    id: "batalla-boyaca",
    band: "A2",
    minutes: 5,
    era: "1819",
    place: { es: "Puente de Boyacá, Nueva Granada", en: "Boyacá Bridge, New Granada" },
    title: { es: "El puente de la victoria", en: "The Bridge of Victory" },
    blurb: {
      es: "Después de cruzar los Andes, el ejército patriota ganó una batalla decisiva cerca de Tunja.",
      en: "After crossing the Andes, the patriot army won a decisive battle near Tunja."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Presenta la campaña de 1819 con escenas resumidas y nombres principales.",
      en: "This story is an original and simplified retelling. It presents the 1819 campaign with summarized scenes and main names."
    },
    paragraphs: [
      {
        es: "En 1819, Bolívar preparó una campaña difícil desde los llanos. Sus soldados tenían poca ropa, pocos caballos y mucha esperanza compartida. La ruta sorprendió a los enemigos, porque parecía casi imposible para un ejército, en medio de una guerra larga, con órdenes firmes y pago todavía incierto.",
        en: "In 1819, Bolívar prepared a difficult campaign from the plains. His soldiers had little clothing, few horses, and much shared hope. The route surprised the enemies, because it seemed almost impossible for an army, in the middle of a long war, with firm orders and still uncertain pay."
      },
      {
        es: "El ejército cruzó páramos helados, donde el frío lastimaba los cuerpos. Muchos hombres llegaron enfermos, pero siguieron hacia las ciudades del altiplano. En los pueblos, algunas mujeres ofrecieron mantas, comida y ayuda silenciosa, con cansancio, hambre y mucha disciplina, entre frailejones, barro y mulas cansadas.",
        en: "The army crossed icy highlands, where the cold hurt their bodies. Many men arrived sick, but they continued toward the cities of the plateau. In the towns, some women offered blankets, food, and silent help, with tiredness, hunger, and much discipline, among frailejones, mud, and tired mules."
      },
      {
        es: "Tras ganar en Pantano de Vargas, los patriotas buscaron cortar caminos. El 7 de agosto encontraron al ejército realista cerca del puente. Esa fecha quedó después como fiesta nacional para muchos colombianos.",
        en: "After winning at Pantano de Vargas, the patriots tried to cut roads. On August 7 they found the royalist army near the bridge. That date later remained as a national holiday for many Colombians."
      },
      {
        es: "La batalla fue corta, pero cada movimiento tuvo gran importancia. Santander atacó una parte, mientras Bolívar cerraba la salida principal. El control del puente impidió que las tropas escaparan con orden, en medio de polvo y confusión.",
        en: "The battle was short, but each movement had great importance. Santander attacked one part, while Bolívar closed the main exit. Control of the bridge stopped the troops from escaping in order, in the middle of dust and confusion."
      },
      {
        es: "Los realistas quedaron separados y no pudieron organizar una defensa fuerte. Muchos soldados fueron capturados antes de reunirse con sus jefes. La captura de Barreiro mostró que el plan patriota había funcionado.",
        en: "The royalists were left separated and could not organize a strong defense. Many soldiers were captured before meeting again with their commanders. The capture of Barreiro showed that the patriot plan had worked."
      },
      {
        es: "La noticia llegó pronto a Santafé y cambió el ánimo político. El virrey salió de la capital, y los patriotas entraron sin gran combate. Muchas campanas sonaron, y la gente entendió que algo grande cambiaba.",
        en: "The news soon reached Santafé and changed the political mood. The viceroy left the capital, and the patriots entered without a major fight. Many bells rang, and people understood that something big was changing."
      },
      {
        es: "Boyacá no terminó todas las guerras de independencia en América. Pero abrió la puerta para una república nueva en la Nueva Granada. Desde ese día, Boyacá quedó unido a la idea de libertad, durante generaciones de memoria compartida.",
        en: "Boyacá did not end all the wars of independence in America. But it opened the door for a new republic in New Granada. From that day, Boyacá stayed tied to the idea of freedom, for generations of shared memory."
      }
    ],
    glossary: [
      { es: "la campaña", en: "the campaign", note: { es: "Campaign aquí es una serie de acciones militares, no publicidad electoral.", en: "A planned series of military actions. It can also mean political campaign." } },
      { es: "los soldados", en: "the soldiers", note: { es: "Soldier se pronuncia con la d casi muda; significa persona en un ejército.", en: "People who serve in an army. The Spanish word is masculine plural here." } },
      { es: "el puente", en: "the bridge", note: { es: "Bridge es una estructura para pasar sobre agua, vías o terreno difícil.", en: "A structure used to cross a river, road, or gap. Here it names the site." } },
      { es: "la batalla", en: "the battle", note: { es: "Battle es un combate específico; war es toda la guerra.", en: "A fight between armed groups. It is one event inside a larger war." } },
      { es: "los realistas", en: "the royalists", note: { es: "Royalists eran quienes apoyaban al rey; no significa personas realistas.", en: "Supporters of the Spanish king. The term contrasts with patriotas." } },
      { es: "el virrey", en: "the viceroy", note: { es: "Viceroy era el representante del rey en una colonia o territorio lejano.", en: "The king's representative in a colony. In Spanish, virrey joins vice and rey." } },
      { es: "la libertad", en: "freedom", note: { es: "Freedom suele ir sin the cuando habla de la idea general.", en: "The state of being free. In the story, Boyacá is tied to this idea." } }
    ],
    structures: [
      {
        key: "pluperfect",
        label: { es: "After plus -ing orders events", en: "Después de orders events" },
        quote: { es: "Tras ganar en Pantano de Vargas, los patriotas buscaron cortar caminos.", en: "After winning at Pantano de Vargas, the patriots tried to cut roads." },
        note: {
          es: "After crossing pone el cruce antes de la victoria. El verbo después de after toma -ing.",
          en: "'Después de cruzar' places the crossing before the victory, without needing another conjugated verb."
        }
      },
      {
        key: "dates-and-calendar",
        label: { es: "English calendar date", en: "Spanish calendar date" },
        quote: { es: "El 7 de agosto encontraron al ejército realista cerca del puente.", en: "On August 7 they found the royalist army near the bridge." },
        note: {
          es: "El inglés dice On August 7: usa on, pone el mes primero y escribe August con mayúscula.",
          en: "Spanish says 'El 7 de agosto' with the day first and the month in lower case."
        }
      },
      {
        key: "preterite-vs-imperfect",
        label: { es: "While with simultaneous actions", en: "Mientras with an action in progress" },
        quote: { es: "Santander atacó una parte, mientras Bolívar cerraba la salida principal.", en: "Santander attacked one part, while Bolívar closed the main exit." },
        note: {
          es: "While conecta acciones simultáneas. Attacked y closed presentan dos movimientos del mismo momento.",
          en: "'Cerraba' shows Bolívar's move as an action in progress while Santander attacked another part."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "Were captured as passive", en: "Fueron capturados as passive" },
        quote: { es: "Muchos soldados fueron capturados antes de reunirse con sus jefes.", en: "Many soldiers were captured before meeting again with their commanders." },
        note: {
          es: "Were captured es pasiva. La oración enfoca a los soldados, no a quien los capturó.",
          en: "'Fueron capturados' is a written passive with ser. The captured soldiers are the focus."
        }
      },
      {
        key: "time-since",
        label: { es: "From that day marks a starting point", en: "Desde ese día marks a starting point" },
        quote: { es: "Desde ese día, Boyacá quedó unido a la idea de libertad.", en: "From that day, Boyacá stayed tied to the idea of freedom." },
        note: {
          es: "From that day conecta una fecha inicial con una memoria que sigue después.",
          en: "'Desde ese día' connects the battle date with a memory that continues after it."
        }
      }
    ],
    questions: [
      { q: { es: "¿Desde dónde preparó Bolívar la campaña?", en: "From where did Bolívar prepare the campaign?" }, a: { es: "La preparó desde los llanos.", en: "He prepared it from the plains." } },
      { q: { es: "¿Cuándo fue la batalla de Boyacá?", en: "When was the battle of Boyacá?" }, a: { es: "Fue el 7 de agosto de 1819.", en: "It was on August 7, 1819." } },
      { q: { es: "¿Quién salió de la capital?", en: "Who left the capital?" }, a: { es: "Salió el virrey.", en: "The viceroy left." } },
      { q: { es: "¿Qué idea quedó unida a Boyacá?", en: "What idea stayed tied to Boyacá?" }, a: { es: "Quedó unida la idea de libertad.", en: "The idea of freedom stayed tied to it." } }
    ]
  },
  {
    id: "palenque",
    band: "A2",
    minutes: 5,
    era: "Siglos XVII – XVIII",
    place: { es: "San Basilio de Palenque, costa Caribe de Colombia", en: "San Basilio de Palenque, Caribbean coast of Colombia" },
    title: { es: "Un pueblo libre entre montes", en: "A Free Town Among the Hills" },
    blurb: {
      es: "San Basilio de Palenque nació de la resistencia de personas esclavizadas que buscaron libertad.",
      en: "San Basilio de Palenque was born from the resistance of enslaved people who sought freedom."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Resume procesos largos de fuga, defensa y acuerdo, sin cubrir toda la memoria palenquera.",
      en: "This story is an original and simplified retelling. It summarizes long processes of escape, defense, and agreement, without covering all Palenque memory."
    },
    paragraphs: [
      {
        es: "Cerca de Cartagena, muchas personas esclavizadas soñaban con vivir libres, aunque la ley colonial les negaba humanidad plena. Algunas escaparon por la noche y buscaron refugio entre montes difíciles. Llevaron recuerdos, lenguas y saberes que no pudieron quitarles completamente, con heridas, canciones y esperanza propia.",
        en: "Near Cartagena, many enslaved people dreamed of living free, although colonial law denied them full humanity. Some escaped at night and looked for refuge among difficult hills. They carried memories, languages, and knowledge that could not be fully taken from them, with wounds, songs, and their own hope."
      },
      {
        es: "Esos refugios se llamaban palenques, porque tenían defensas de madera. Allí la gente cultivaba comida, cuidaba niños y vigilaba los caminos. La defensa no era lujo, sino condición diaria para seguir vivos, con cuidado, turnos y mucha paciencia.",
        en: "Those refuges were called palenques, because they had wooden defenses. There people grew food, cared for children, and watched the roads. Defense was not a luxury, but a daily condition for staying alive, with care, shifts, and much patience."
      },
      {
        es: "Benkos Biohó aparece en la memoria como un líder fuerte. Organizó ataques, negoció con autoridades y defendió la vida de su comunidad, con alianzas, señales y castigos cuidadosamente evitados también. Su nombre ayuda a contar una lucha que fue de muchas personas.",
        en: "Benkos Biohó appears in memory as a strong leader. He organized attacks, negotiated with authorities, and defended his community's life, with alliances, signals, and punishments carefully avoided too. His name helps tell a struggle that belonged to many people."
      },
      {
        es: "Los españoles enviaron soldados varias veces, pero el monte ayudaba mucho. Conocer ríos, árboles y senderos era una ventaja para los fugitivos, especialmente durante persecuciones largas y peligrosas nocturnas. Por eso, cada camino secreto tenía valor de mapa compartido, en medio de peligro constante.",
        en: "The Spaniards sent soldiers several times, but the hills helped a lot. Knowing rivers, trees, and paths was an advantage for the fugitives, especially during long and dangerous night chases. For that reason, each secret path had the value of a shared map, in the middle of constant danger."
      },
      {
        es: "Con el tiempo, San Basilio logró reconocimiento como pueblo libre. Sus familias conservaron formas propias de hablar, cantar, peinar y celebrar, incluso cuando cambiaban vecinos y autoridades cercanas. Ese reconocimiento no borró el pasado, pero protegió cierta autonomía.",
        en: "Over time, San Basilio won recognition as a free town. Its families kept their own ways of speaking, singing, styling hair, and celebrating, even when nearby neighbors and authorities changed. That recognition did not erase the past, but it protected some autonomy."
      },
      {
        es: "La lengua palenquera mezcla raíces africanas, españolas y memoria local. En sus palabras vive una historia de dolor, inteligencia y resistencia, como archivo vivo de una comunidad resistente caribeña. También muestra que hablar puede ser una forma de memoria colectiva.",
        en: "The Palenque language mixes African roots, Spanish roots, and local memory. In its words lives a history of pain, intelligence, and resistance, like a living archive of a resistant Caribbean community. It also shows that speaking can be a form of collective memory."
      },
      {
        es: "Hoy Palenque recuerda que la libertad también se construye diariamente. No fue regalo de nadie, sino trabajo colectivo contra la esclavitud. Su ejemplo sigue enseñando dignidad en Colombia y fuera de ella, durante generaciones de memoria compartida.",
        en: "Today Palenque reminds us that freedom is also built daily. It was not anyone's gift, but collective work against slavery. Its example continues teaching dignity in Colombia and beyond it, for generations of shared memory."
      }
    ],
    glossary: [
      { es: "el refugio", en: "the refuge", note: { es: "Refuge es un lugar seguro; también puede ser una idea de protección.", en: "A safe place during danger. The word can be physical or emotional." } },
      { es: "los palenques", en: "the palenques", note: { es: "Palenques se mantiene en español porque nombra una realidad histórica local.", en: "Fortified settlements of escaped enslaved people. The term is historical and local." } },
      { es: "la comunidad", en: "the community", note: { es: "Community habla de personas unidas por lugar, historia o propósito.", en: "A group that shares place, life, or purpose. It is feminine in Spanish." } },
      { es: "los fugitivos", en: "the fugitives", note: { es: "Fugitives son personas que huyen de una autoridad o peligro.", en: "People who are escaping. Here they are escaping slavery and soldiers." } },
      { es: "la libertad", en: "freedom", note: { es: "Freedom suele ir sin the cuando habla de la idea general.", en: "The state of being free. In Spanish it often appears with la." } },
      { es: "la esclavitud", en: "slavery", note: { es: "Slavery nombra el sistema; slave nombra a una persona esclavizada.", en: "The system of owning people as property. It is an abstract noun." } },
      { es: "la dignidad", en: "dignity", note: { es: "Dignity es valor humano propio; no depende de dinero o poder.", en: "Human worth and self-respect. The story connects it with freedom." } }
    ],
    structures: [
      {
        key: "passive-and-impersonal",
        label: { es: "Were called for names", en: "Se llamaban for names" },
        quote: { es: "Esos refugios se llamaban palenques", en: "Those refuges were called palenques" },
        note: {
          es: "Were called presenta el nombre de los refugios sin nombrar a las personas que lo usaban.",
          en: "'Se llamaban palenques' gives the name without saying exactly who used it."
        }
      },
      {
        key: "por-vs-para",
        label: { es: "At night for time", en: "Por la noche for time" },
        quote: { es: "Algunas escaparon por la noche y buscaron refugio entre montes difíciles.", en: "Some escaped at night and looked for refuge among difficult hills." },
        note: {
          es: "At night es una frase fija para el momento del día. No usa in en esta expresión.",
          en: "'Por la noche' gives a general time of day for the escape, not a cause or exchange."
        }
      },
      {
        key: "past-habits",
        label: { es: "Simple past for old routines", en: "Imperfect for community routines" },
        quote: { es: "Allí la gente cultivaba comida, cuidaba niños y vigilaba los caminos.", en: "There people grew food, cared for children, and watched the roads." },
        note: {
          es: "Grew, cared y watched describen actividades repetidas del pasado, no un solo día.",
          en: "'Cultivaba', 'cuidaba' and 'vigilaba' describe repeated life inside the refuge."
        }
      },
      {
        key: "comparison-inequality",
        label: { es: "Not..., but... correction", en: "No..., sino... correction" },
        quote: { es: "No fue regalo de nadie, sino trabajo colectivo contra la esclavitud.", en: "It was not anyone's gift, but collective work against slavery." },
        note: {
          es: "Not..., but... niega la primera idea y presenta la explicación que la corrige.",
          en: "'No fue..., sino...' rejects the idea of a gift and replaces it with collective work."
        }
      },
      {
        key: "time-since",
        label: { es: "Continues plus -ing", en: "Sigue plus gerund" },
        quote: { es: "Su ejemplo sigue enseñando dignidad en Colombia y fuera de ella.", en: "Its example continues teaching dignity in Colombia and beyond it." },
        note: {
          es: "Continues teaching muestra que la acción todavía sigue en el presente.",
          en: "'Sigue enseñando' shows that Palenque's example still teaches dignity now."
        }
      }
    ],
    questions: [
      { q: { es: "¿Cerca de qué ciudad nació esta historia?", en: "Near which city did this history begin?" }, a: { es: "Nació cerca de Cartagena.", en: "It began near Cartagena." } },
      { q: { es: "¿Qué protegía a los fugitivos?", en: "What protected the fugitives?" }, a: { es: "Los protegían el monte y sus conocimientos.", en: "The hills and their knowledge protected them." } },
      { q: { es: "¿Qué conserva San Basilio?", en: "What does San Basilio preserve?" }, a: { es: "Conserva formas propias de hablar y celebrar.", en: "It preserves its own ways of speaking and celebrating." } },
      { q: { es: "¿Qué sigue enseñando Palenque?", en: "What does Palenque keep teaching?" }, a: { es: "Sigue enseñando dignidad.", en: "It keeps teaching dignity." } }
    ]
  },
  {
    id: "bolivar-santa-marta",
    band: "A2",
    minutes: 5,
    era: "1830",
    place: { es: "Santa Marta y la Quinta de San Pedro Alejandrino", en: "Santa Marta and the Quinta de San Pedro Alejandrino" },
    title: { es: "Los últimos días del Libertador", en: "The Liberator's Last Days" },
    blurb: {
      es: "En 1830, Simón Bolívar llegó enfermo a Santa Marta y vio romperse su gran proyecto político.",
      en: "In 1830, Simón Bolívar arrived sick in Santa Marta and saw his great political project break apart."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Resume meses complejos de enfermedad, renuncia y crisis política alrededor de Bolívar.",
      en: "This story is an original and simplified retelling. It summarizes complex months of illness, resignation, and political crisis around Bolívar."
    },
    paragraphs: [
      {
        es: "En 1830, Bolívar ya no era el vencedor joven de antes. Estaba cansado, enfermo y rodeado por noticias políticas cada vez peores. Muchos enemigos políticos celebraban su caída, pero otros sentían gratitud profunda, después de muchas victorias y pérdidas, con tos persistente y noches de descanso difícil.",
        en: "In 1830, Bolívar was no longer the young victor of before. He was tired, sick, and surrounded by political news that kept getting worse. Many political enemies celebrated his fall, but others felt deep gratitude, after many victories and losses, with a persistent cough and nights of difficult rest."
      },
      {
        es: "La Gran Colombia se rompía entre disputas regionales y antiguos aliados. Bolívar renunció al poder y decidió salir hacia la costa Caribe. El sueño de una nación grande parecía alejarse con cada discusión, con tristeza, orgullo y cansancio público.",
        en: "Gran Colombia was breaking apart amid regional disputes and old allies. Bolívar resigned from power and decided to leave for the Caribbean coast. The dream of one large nation seemed to move away with each argument, with sadness, pride, and public tiredness."
      },
      {
        es: "Viajó por el río Magdalena con pocos recursos y ánimo oscuro, entre calor ribereño y esperas largas incómodas. En cada puerto, algunos lo saludaban con respeto y otros con silencio. El viaje fue lento, caluroso y lleno de noticias contradictorias.",
        en: "He traveled down the Magdalena River with few resources and a dark mood, amid river heat and long uncomfortable waits. In each port, some greeted him with respect and others with silence. The trip was slow, hot, and full of contradictory news."
      },
      {
        es: "Cuando llegó a Santa Marta, su salud estaba muy débil. El español Joaquín de Mier le ofreció descanso en su quinta cercana. La casa ofrecía árboles, sombra y distancia del ruido del puerto, en medio de calor y silencio.",
        en: "When he arrived in Santa Marta, his health was very weak. The Spaniard Joaquín de Mier offered him rest at his nearby estate. The house offered trees, shade, and distance from the port's noise, in the middle of heat and silence."
      },
      {
        es: "En San Pedro Alejandrino, Bolívar recibió médicos, amigos y cartas, junto a preocupaciones nacionales urgentes. Hablaba del futuro americano, aunque su cuerpo perdía fuerza rápidamente. Algunas cartas pedían calma, mientras otras mostraban divisiones muy hondas.",
        en: "At San Pedro Alejandrino, Bolívar received doctors, friends, and letters, along with urgent national worries. He spoke about the American future, although his body was quickly losing strength. Some letters asked for calm, while others showed very deep divisions."
      },
      {
        es: "El 17 de diciembre murió lejos de Caracas, su ciudad natal. Sus últimas semanas mezclaron fiebre, despedidas y una profunda tristeza política, lejos del poder central. La fecha quedó marcada en libros, plazas y conversaciones escolares.",
        en: "On December 17 he died far from Caracas, his birth city. His last weeks mixed fever, goodbyes, and a deep political sadness, far from central power. The date remained marked in books, plazas, and school conversations."
      },
      {
        es: "Su muerte cerró una vida enorme, pero no cerró sus preguntas. América seguía buscando unión, leyes estables y paz después de la independencia. Por eso su final parece triste y político al mismo tiempo, durante generaciones de memoria compartida.",
        en: "His death closed an enormous life, but it did not close his questions. America still sought unity, stable laws, and peace after independence. For that reason, his ending seems sad and political at the same time, for generations of shared memory."
      }
    ],
    glossary: [
      { es: "el vencedor", en: "the victor", note: { es: "Victor es el ganador de una lucha; winner es más común en deportes.", en: "The person who wins a fight or contest. It is formal and historical." } },
      { es: "la costa", en: "the coast", note: { es: "Coast es la zona junto al mar; shore puede ser la orilla exacta.", en: "The land beside the sea. Colombia has Caribbean and Pacific coasts." } },
      { es: "el puerto", en: "the port", note: { es: "Port es un lugar donde llegan barcos; no significa puerta.", en: "A town or place where boats stop. The Spanish word is masculine." } },
      { es: "la salud", en: "health", note: { es: "Health no suele llevar artículo cuando habla del estado físico general.", en: "The condition of the body. In Spanish, salud is feminine." } },
      { es: "las cartas", en: "the letters", note: { es: "Letters aquí son mensajes escritos en papel, no letras del alfabeto.", en: "Written messages sent to someone. The same English word also means alphabet signs." } },
      { es: "la independencia", en: "independence", note: { es: "Independence se escribe con e después de pend; cuidado con la ortografía.", en: "Freedom from another government's control. It is an abstract historical noun." } },
      { es: "la gratitud", en: "gratitude", note: { es: "Gratitude es agradecimiento; no significa gratuidad ni algo gratis.", en: "A feeling of thanks. In Spanish, gratitud is feminine." } }
    ],
    structures: [
      {
        key: "preterite-vs-imperfect",
        label: { es: "Was breaking, then resigned", en: "Imperfect process, preterite decision" },
        quote: { es: "La Gran Colombia se rompía entre disputas regionales / Bolívar renunció al poder", en: "Gran Colombia was breaking apart amid regional disputes / Bolívar resigned from power" },
        note: {
          es: "Was breaking apart da el proceso de fondo. Resigned marca la decisión terminada de Bolívar.",
          en: "'Se rompía' presents Gran Colombia as an ongoing process. 'Renunció' gives Bolívar's completed decision."
        }
      },
      {
        key: "real-conditionals",
        label: { es: "When with a real past event", en: "Cuando with a real past event" },
        quote: { es: "Cuando llegó a Santa Marta, su salud estaba muy débil.", en: "When he arrived in Santa Marta, his health was very weak." },
        note: {
          es: "When he arrived introduce un hecho real del pasado. No funciona aquí como condición futura.",
          en: "'Cuando llegó' introduces a real completed arrival, so it uses the indicative, not a future condition."
        }
      },
      {
        key: "concession",
        label: { es: "Although with contrast", en: "Aunque with contrast" },
        quote: { es: "Hablaba del futuro americano, aunque su cuerpo perdía fuerza rápidamente.", en: "He spoke about the American future, although his body was quickly losing strength." },
        note: {
          es: "Although contrasta sus ideas sobre el futuro con la debilidad rápida de su cuerpo.",
          en: "'Aunque' contrasts Bolívar's talk about the future with his body losing strength."
        }
      },
      {
        key: "dates-and-calendar",
        label: { es: "English date order", en: "Spanish date order" },
        quote: { es: "El 17 de diciembre murió lejos de Caracas, su ciudad natal.", en: "On December 17 he died far from Caracas, his birth city." },
        note: {
          es: "El inglés escribe On December 17: usa on, pone el mes primero y usa mayúscula.",
          en: "Spanish writes 'El 17 de diciembre' with the day first and the month in lower case."
        }
      },
      {
        key: "discourse-connectors",
        label: { es: "For that reason gives a result", en: "Por eso gives a result" },
        quote: { es: "Por eso su final parece triste y político al mismo tiempo.", en: "For that reason, his ending seems sad and political at the same time." },
        note: {
          es: "For that reason mira hacia las causas anteriores y presenta una conclusión sobre el final.",
          en: "'Por eso' points back to the illness and political crisis, then gives the narrator's conclusion."
        }
      }
    ],
    questions: [
      { q: { es: "¿Hacia dónde decidió salir Bolívar?", en: "Where did Bolívar decide to go?" }, a: { es: "Decidió salir hacia la costa Caribe.", en: "He decided to go to the Caribbean coast." } },
      { q: { es: "¿Quién le ofreció descanso?", en: "Who offered him rest?" }, a: { es: "Joaquín de Mier le ofreció descanso.", en: "Joaquín de Mier offered him rest." } },
      { q: { es: "¿Cuándo murió Bolívar?", en: "When did Bolívar die?" }, a: { es: "Murió el 17 de diciembre.", en: "He died on December 17." } },
      { q: { es: "¿Qué ofrecía la casa de la quinta?", en: "What did the estate house offer?" }, a: { es: "Ofrecía árboles, sombra y distancia.", en: "It offered trees, shade, and distance." } }
    ]
  },
  {
    id: "acordeon-vallenato",
    band: "A2",
    minutes: 5,
    era: "Siglos XIX – XX",
    place: { es: "Costa Caribe colombiana, especialmente Valledupar", en: "Colombian Caribbean coast, especially Valledupar" },
    title: { es: "El acordeón que aprendió a contar", en: "The Accordion That Learned to Tell Stories" },
    blurb: {
      es: "El acordeón viajó por puertos caribeños y encontró una voz nueva en el vallenato.",
      en: "The accordion traveled through Caribbean ports and found a new voice in vallenato."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Resume un proceso cultural amplio, con rutas comerciales y tradiciones contadas de forma breve.",
      en: "This story is an original and simplified retelling. It summarizes a broad cultural process, with trade routes and traditions told briefly."
    },
    paragraphs: [
      {
        es: "El acordeón nació lejos del Caribe, en talleres de Europa. Durante el siglo XIX, barcos comerciales lo llevaron por muchos puertos americanos. Nadie sabía entonces que ese objeto pequeño cambiaría tantas canciones regionales, en manos de comerciantes y viajeros.",
        en: "The accordion was born far from the Caribbean, in workshops of Europe. During the nineteenth century, trade ships carried it through many American ports. No one knew then that this small object would change so many regional songs, in the hands of merchants and travelers."
      },
      {
        es: "En la costa colombiana, el instrumento encontró fiestas, caminos y mercados. Su sonido fuerte servía para tocar al aire libre y viajar. Un músico podía cargarlo a caballo sin perder demasiado espacio, en parrandas, ferias y reuniones familiares.",
        en: "On the Colombian coast, the instrument found parties, roads, and markets. Its strong sound worked for playing outdoors and traveling. A musician could carry it on horseback without losing too much space, at parties, fairs, and family gatherings."
      },
      {
        es: "Antes, los juglares llevaban noticias cantadas de pueblo en pueblo. Con acordeón, caja y guacharaca, esas noticias ganaron ritmo más brillante. El conjunto pequeño era práctico para patios, tiendas y celebraciones rurales.",
        en: "Before, minstrels carried sung news from town to town. With accordion, drum, and guacharaca, that news gained a brighter rhythm. The small group was practical for patios, shops, and rural celebrations."
      },
      {
        es: "Las canciones hablaban de amores, viajes, peleas y animales del campo. También guardaban bromas locales y recuerdos de familias conocidas por todos. Cada verso podía nombrar una persona real sin decir todo claramente, en medio de risas y secretos.",
        en: "The songs spoke about loves, trips, fights, and animals of the countryside. They also kept local jokes and memories of families known by everyone. Each verse could name a real person without saying everything clearly, in the middle of laughter and secrets."
      },
      {
        es: "Valledupar se volvió un centro importante para esta música narrativa. Allí los músicos competían, aprendían estilos y celebraban maestros antiguos. Los concursos hicieron visible una tradición que antes viajaba oralmente.",
        en: "Valledupar became an important center for this storytelling music. There musicians competed, learned styles, and celebrated old masters. The contests made visible a tradition that had traveled orally before."
      },
      {
        es: "Con la radio, el vallenato salió de patios y plazas pequeñas. Muchas voces llegaron a ciudades lejanas, aunque conservaron sabor costeño. La radio también creó estrellas y cambió la manera de escuchar.",
        en: "With radio, vallenato left patios and small plazas. Many voices reached distant cities, although they kept a coastal flavor. Radio also created stars and changed the way people listened."
      },
      {
        es: "Hoy el acordeón parece inseparable del vallenato colombiano para muchos oyentes. Pero su historia recuerda que la cultura viaja, cambia y conversa. En cada paseo musical queda un diálogo entre viaje y pertenencia, durante generaciones de memoria compartida.",
        en: "Today the accordion seems inseparable from Colombian vallenato for many listeners. But its history reminds us that culture travels, changes, and converses. In each musical paseo there remains a dialogue between travel and belonging, for generations of shared memory."
      }
    ],
    glossary: [
      { es: "el acordeón", en: "the accordion", note: { es: "Accordion lleva doble c en inglés y nombra el instrumento de fuelle.", en: "A bellows instrument with buttons or keys. It is central to vallenato today." } },
      { es: "los puertos", en: "the ports", note: { es: "Ports son lugares de llegada de barcos; no son doors.", en: "Places where ships arrive. Trade ports helped music and objects travel." } },
      { es: "el instrumento", en: "the instrument", note: { es: "Instrument puede ser musical o técnico; aquí es musical.", en: "A tool for making music. In Spanish, instrumento is masculine." } },
      { es: "los juglares", en: "the minstrels", note: { es: "Minstrels suena histórico; aquí describe cantores que llevaban relatos.", en: "Traveling singers who tell stories. The Spanish word has a medieval sound too." } },
      { es: "las canciones", en: "the songs", note: { es: "Songs son piezas cantadas; lyrics son las palabras de la canción.", en: "Pieces of music with words. In this story, songs carry news and memory." } },
      { es: "los oyentes", en: "the listeners", note: { es: "Listeners son personas que escuchan; audience puede ser el público completo.", en: "People who listen. The Spanish word comes from oír." } },
      { es: "el paseo", en: "the paseo", note: { es: "Paseo se mantiene en español cuando nombra un aire musical vallenato.", en: "A vallenato rhythm name. It also means a walk in everyday Spanish." } }
    ],
    structures: [
      {
        key: "por-vs-para",
        label: { es: "Through for route", en: "Por for route" },
        quote: { es: "barcos comerciales lo llevaron por muchos puertos americanos", en: "trade ships carried it through many American ports" },
        note: {
          es: "Through many ports muestra ruta o paso. No equivale al for de beneficio.",
          en: "'Por muchos puertos' shows the route the accordion followed through different ports."
        }
      },
      {
        key: "past-habits",
        label: { es: "Simple past for repeated roles", en: "Imperfect for old habits" },
        quote: { es: "Antes, los juglares llevaban noticias cantadas de pueblo en pueblo.", en: "Before, minstrels carried sung news from town to town." },
        note: {
          es: "Carried describe un papel repetido en el pasado, no solamente un viaje específico.",
          en: "'Llevaban' describes what minstrels did repeatedly before the accordion changed the sound."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "Became for change", en: "Se volvió for change" },
        quote: { es: "Valledupar se volvió un centro importante para esta música narrativa.", en: "Valledupar became an important center for this storytelling music." },
        note: {
          es: "Became expresa cambio de estado. El inglés no usa un pronombre reflexivo aquí.",
          en: "'Se volvió' expresses a change in Valledupar's role as the music grew around it."
        }
      },
      {
        key: "concession",
        label: { es: "Although links contrast", en: "Aunque links contrast" },
        quote: { es: "Muchas voces llegaron a ciudades lejanas, aunque conservaron sabor costeño.", en: "Many voices reached distant cities, although they kept a coastal flavor." },
        note: {
          es: "En inglés, although contrasta el viaje a ciudades lejanas con la conservación del sabor costeño original.",
          en: "'Aunque conservaron' contrasts reaching distant cities with keeping a coastal flavor."
        }
      },
      {
        key: "relative-basic",
        label: { es: "That adds information", en: "Que adds information" },
        quote: { es: "una tradición que antes viajaba oralmente", en: "a tradition that had traveled orally before" },
        note: {
          es: "That had traveled orally añade información sobre tradition. En inglés, that une las ideas.",
          en: "'Que antes viajaba oralmente' adds information about the tradition without starting a new sentence."
        }
      }
    ],
    questions: [
      { q: { es: "¿Dónde nació el acordeón?", en: "Where was the accordion born?" }, a: { es: "Nació lejos del Caribe, en Europa.", en: "It was born far from the Caribbean, in Europe." } },
      { q: { es: "¿Qué llevaban los juglares?", en: "What did the minstrels carry?" }, a: { es: "Llevaban noticias cantadas.", en: "They carried sung news." } },
      { q: { es: "¿Qué hizo la radio con el vallenato?", en: "What did radio do with vallenato?" }, a: { es: "Lo llevó a ciudades lejanas.", en: "It carried it to distant cities." } },
      { q: { es: "¿Qué creó la radio?", en: "What did radio create?" }, a: { es: "Creó estrellas y nuevas formas de escuchar.", en: "It created stars and new ways to listen." } }
    ]
  },
  {
    id: "huracan-galveston",
    band: "A2",
    minutes: 5,
    era: "1900",
    place: { es: "Galveston, Texas, Estados Unidos", en: "Galveston, Texas, United States" },
    title: { es: "La noche del agua en Galveston", en: "The Night of Water in Galveston" },
    blurb: {
      es: "En 1900, un huracán golpeó Galveston y cambió para siempre la ciudad costera.",
      en: "In 1900, a hurricane struck Galveston and changed the coastal city forever."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Resume una tragedia compleja y evita detalles gráficos para mantener lectura A2.",
      en: "This story is an original and simplified retelling. It summarizes a complex tragedy and avoids graphic details to keep A2 reading."
    },
    paragraphs: [
      {
        es: "Galveston era una ciudad rica sobre una isla baja de Texas. Tenía puerto activo, casas elegantes y confianza en su futuro comercial. Por eso muchos empresarios pensaban que la ciudad seguiría creciendo siempre, para muchas familias de la isla.",
        en: "Galveston was a rich city on a low Texas island. It had an active port, elegant houses, and confidence in its commercial future. For that reason, many business owners thought the city would keep growing forever, for many families on the island."
      },
      {
        es: "En septiembre de 1900, avisos del tiempo llegaron con poca claridad. Muchas familias vieron lluvia y viento, pero no imaginaron la fuerza. Los mensajes de Cuba y Washington no produjeron una alarma suficiente, con preocupación, rutina y poca información.",
        en: "In September 1900, weather warnings arrived with little clarity. Many families saw rain and wind, but did not imagine the force. Messages from Cuba and Washington did not produce enough alarm, with worry, routine, and little information."
      },
      {
        es: "El huracán empujó el mar sobre calles, patios y edificios. El agua subió rápido, mientras la noche cubría gritos y madera rota. Algunas familias subieron a pisos altos para esperar el amanecer.",
        en: "The hurricane pushed the sea over streets, yards, and buildings. The water rose quickly, while night covered screams and broken wood. Some families climbed to upper floors to wait for dawn."
      },
      {
        es: "Miles de personas murieron, y muchas más perdieron sus hogares. La ciudad quedó llena de escombros, silencio y decisiones urgentes. Los sobrevivientes buscaron agua limpia, comida y nombres de familiares, en medio de pérdidas inmensas.",
        en: "Thousands of people died, and many more lost their homes. The city was left full of debris, silence, and urgent decisions. The survivors looked for clean water, food, and names of relatives, in the middle of immense losses."
      },
      {
        es: "Después del desastre, Galveston levantó un malecón contra futuras tormentas. También elevó partes de la ciudad con arena y mucho trabajo. Ese proyecto exigió máquinas, animales, ingenieros y vecinos trabajando juntos.",
        en: "After the disaster, Galveston built a seawall against future storms. It also raised parts of the city with sand and much work. That project required machines, animals, engineers, and neighbors working together."
      },
      {
        es: "Houston creció como puerto rival en los años siguientes. Galveston siguió viva, pero perdió parte de su antiguo lugar económico. El cambio mostró que una tragedia también modifica mapas económicos.",
        en: "Houston grew as a rival port in the following years. Galveston stayed alive, but lost part of its old economic place. The change showed that a tragedy also modifies economic maps."
      },
      {
        es: "Hoy la tormenta recuerda la necesidad de escuchar avisos tempranos. También muestra cómo una comunidad reconstruye vida después de perder muchísimo. La memoria local conserva historias de pérdida, ayuda y preparación, durante generaciones de memoria compartida.",
        en: "Today the storm reminds us of the need to hear early warnings. It also shows how a community rebuilds life after losing so much. Local memory preserves stories of loss, help, and preparation, for generations of shared memory."
      }
    ],
    glossary: [
      { es: "la isla", en: "the island", note: { es: "Island tiene s muda en inglés; se pronuncia como 'ailand'.", en: "Land surrounded by water. Galveston sits on a low barrier island." } },
      { es: "los avisos", en: "the warnings", note: { es: "Warnings son avisos de peligro; notices pueden ser avisos generales.", en: "Messages about danger. Weather warnings help people prepare." } },
      { es: "el huracán", en: "the hurricane", note: { es: "Hurricane lleva h aspirada suave; significa tormenta tropical muy fuerte.", en: "A very strong tropical storm. In Spanish, huracán has the stress at the end." } },
      { es: "los escombros", en: "the debris", note: { es: "Debris es incontable en inglés; no se dice debris are normalmente.", en: "Broken material left after destruction. The Spanish word is plural." } },
      { es: "el malecón", en: "the seawall", note: { es: "Seawall es una pared contra el mar; no es cualquier wall.", en: "A wall built to protect land from the sea. Galveston's seawall became famous." } },
      { es: "la tormenta", en: "the storm", note: { es: "Storm es general; hurricane es un tipo fuerte de storm.", en: "Bad weather with wind and rain. A hurricane is a powerful storm." } },
      { es: "los sobrevivientes", en: "the survivors", note: { es: "Survivors son personas que siguen vivas después de un peligro.", en: "People who live through a disaster or danger. The word is plural here." } }
    ],
    structures: [
      {
        key: "preterite-vs-imperfect",
        label: { es: "Was for earlier state", en: "Era for earlier state" },
        quote: { es: "Galveston era una ciudad rica sobre una isla baja de Texas.", en: "Galveston was a rich city on a low Texas island." },
        note: {
          es: "En inglés, was describe la condición anterior de Galveston. Esa forma da el fondo antes del evento principal.",
          en: "'Era' describes Galveston's condition before the hurricane changed the city."
        }
      },
      {
        key: "dates-and-calendar",
        label: { es: "English month and year", en: "Spanish month and year" },
        quote: { es: "En septiembre de 1900, avisos del tiempo llegaron con poca claridad.", en: "In September 1900, weather warnings arrived with little clarity." },
        note: {
          es: "El inglés escribe In September 1900: September lleva mayúscula y no usa of antes del año.",
          en: "Spanish writes 'En septiembre de 1900' with the month in lower case and de before the year."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "Was left for result", en: "Quedó for result" },
        quote: { es: "La ciudad quedó llena de escombros, silencio y decisiones urgentes.", en: "The city was left full of debris, silence, and urgent decisions." },
        note: {
          es: "Was left full describe el resultado después de la tormenta, no una acción de la ciudad.",
          en: "'Quedó llena' shows the city's resulting state after the water and wind passed."
        }
      },
      {
        key: "articles-and-quantity",
        label: { es: "Many before families", en: "Muchas agrees with familias" },
        quote: { es: "Muchas familias vieron lluvia y viento, pero no imaginaron la fuerza.", en: "Many families saw rain and wind, but did not imagine the force." },
        note: {
          es: "Many va antes de families para marcar número alto. No cambia de forma en inglés.",
          en: "'Muchas familias' is feminine plural because it agrees with 'familias' and means a large number."
        }
      },
      {
        key: "por-vs-para",
        label: { es: "To plus verb for purpose", en: "Para plus infinitive for purpose" },
        quote: { es: "Algunas familias subieron a pisos altos para esperar el amanecer.", en: "Some families climbed to upper floors to wait for dawn." },
        note: {
          es: "To wait explica el propósito de subir. El infinitivo inglés usa to antes del verbo.",
          en: "'Para esperar' gives the purpose of going up to higher floors during the storm."
        }
      }
    ],
    questions: [
      { q: { es: "¿Dónde está Galveston?", en: "Where is Galveston?" }, a: { es: "Está sobre una isla baja de Texas.", en: "It is on a low Texas island." } },
      { q: { es: "¿Qué empujó el huracán sobre la ciudad?", en: "What did the hurricane push over the city?" }, a: { es: "Empujó el mar.", en: "It pushed the sea." } },
      { q: { es: "¿Qué construyó Galveston después?", en: "What did Galveston build afterward?" }, a: { es: "Construyó un malecón.", en: "It built a seawall." } },
      { q: { es: "¿Qué buscaron los sobrevivientes?", en: "What did the survivors look for?" }, a: { es: "Buscaron agua limpia, comida y nombres.", en: "They looked for clean water, food, and names." } }
    ]
  },
  {
    id: "spindletop",
    band: "A2",
    minutes: 5,
    era: "1901",
    place: { es: "Spindletop, cerca de Beaumont, Texas", en: "Spindletop, near Beaumont, Texas" },
    title: { es: "El chorro que cambió Texas", en: "The Gusher That Changed Texas" },
    blurb: {
      es: "En 1901, un pozo de Spindletop lanzó petróleo y abrió un auge enorme en Texas.",
      en: "In 1901, a well at Spindletop shot out oil and opened a huge boom in Texas."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Resume hechos generales del descubrimiento petrolero y sus efectos iniciales en Texas.",
      en: "This story is an original and simplified retelling. It summarizes general facts about the oil discovery and its early effects in Texas."
    },
    paragraphs: [
      {
        es: "Cerca de Beaumont, una colina baja parecía guardar algo extraño, entre pastos, sal y pequeños signos de gas. Algunos buscadores creían que bajo Spindletop había petróleo en gran cantidad. La colina no era alta, pero atraía preguntas desde años anteriores, para empresarios, técnicos y vecinos curiosos.",
        en: "Near Beaumont, a low hill seemed to hold something strange, among grasses, salt, and small signs of gas. Some searchers believed that under Spindletop there was oil in great quantity. The hill was not high, but it had attracted questions for years, for business owners, technicians, and curious neighbors."
      },
      {
        es: "Perforar no era fácil, porque la arena cerraba los agujeros. El ingeniero Anthony Lucas insistió, mientras inversionistas buscaban dinero y paciencia. Cada intento fallido hacía más caro el sueño de encontrar petróleo, con herramientas, barro y mucha terquedad, porque otros ya habían abandonado la búsqueda.",
        en: "Drilling was not easy, because sand closed the holes. Engineer Anthony Lucas insisted, while investors looked for money and patience. Each failed attempt made the dream of finding oil more expensive, with tools, mud, and much stubbornness, because others had already abandoned the search."
      },
      {
        es: "El 10 de enero de 1901, el pozo explotó hacia arriba. Un chorro negro subió sobre la torre y sorprendió a todos. El ruido, el lodo y la presión anunciaron una sorpresa enorme.",
        en: "On January 10, 1901, the well exploded upward. A black gusher rose above the derrick and surprised everyone. The noise, mud, and pressure announced an enormous surprise."
      },
      {
        es: "Durante días, el petróleo cayó como lluvia oscura sobre el campo, manchando ropa, suelo y equipos de madera cercanos. La noticia viajó rápido, y Beaumont se llenó de trabajadores y curiosos. Hoteles, tiendas y calles cambiaron casi de un día para otro, en medio de ruido y ambición.",
        en: "For days, oil fell like dark rain over the field, staining clothing, ground, and nearby wooden equipment. The news traveled fast, and Beaumont filled with workers and curious people. Hotels, shops, and streets changed almost from one day to the next, in the middle of noise and ambition."
      },
      {
        es: "Compañías nuevas compraron tierras, levantaron torres y soñaron fortunas rápidas, mientras periódicos anunciaban oportunidades casi milagrosas diarias. El precio del petróleo bajó, pero la industria creció sin descanso. Los mapas de negocios comenzaron a mirar Texas con nuevos ojos.",
        en: "New companies bought land, raised derricks, and dreamed of quick fortunes, while newspapers announced almost miraculous daily opportunities. The price of oil fell, but the industry grew without rest. Business maps began to look at Texas with new eyes."
      },
      {
        es: "Spindletop ayudó a mover Texas hacia automóviles, fábricas y energía moderna, en ranchos, oficinas y escuelas técnicas de Beaumont. También trajo riesgos, contaminación y preguntas sobre riqueza compartida. Por eso la riqueza produjo entusiasmo y también discusiones públicas.",
        en: "Spindletop helped move Texas toward cars, factories, and modern energy, in ranches, offices, and technical schools of Beaumont. It also brought risks, pollution, and questions about shared wealth. For that reason, wealth produced excitement and also public discussions."
      },
      {
        es: "El chorro no duró para siempre, pero su imagen quedó, porque otros pozos pronto redujeron aquella presión inicial. Desde entonces, Texas fue visto como tierra central del petróleo estadounidense. La palabra boom quedó asociada con promesas, velocidad y peligro, durante generaciones de memoria compartida.",
        en: "The gusher did not last forever, but its image remained, because other wells soon reduced that initial pressure. Since then, Texas has been seen as a central land of American oil. The word boom became associated with promises, speed, and danger, for generations of shared memory."
      }
    ],
    glossary: [
      { es: "el petróleo", en: "the oil", note: { es: "Oil aquí es petróleo crudo, no aceite de cocina.", en: "Crude oil from underground. In Spanish, petróleo is not cooking oil." } },
      { es: "el pozo", en: "the well", note: { es: "Well puede ser pozo o 'bien'; el contexto decide el significado.", en: "A deep hole made to reach water or oil. Here it is an oil well." } },
      { es: "el chorro", en: "the gusher", note: { es: "Gusher es un pozo que lanza petróleo con fuerza; es palabra histórica petrolera.", en: "A strong flow from a well. The word sounds dramatic in English." } },
      { es: "la torre", en: "the derrick", note: { es: "Derrick es la torre de perforación; tower es más general.", en: "The tall frame over an oil well. It is a technical oil word." } },
      { es: "la industria", en: "the industry", note: { es: "Industry puede nombrar todo un sector económico, no solo una fábrica.", en: "A whole field of business and production. Here it means the oil business." } },
      { es: "la riqueza", en: "the wealth", note: { es: "Wealth es riqueza; rich es el adjetivo para una persona o lugar.", en: "Money and valuable resources. In the story, people asked who shared it." } },
      { es: "el boom", en: "the boom", note: { es: "Boom puede indicar crecimiento rápido; en español se usa como préstamo.", en: "A fast period of growth. The story uses it for the Texas oil boom." } }
    ],
    structures: [
      {
        key: "conjecture",
        label: { es: "Believed that reports an idea", en: "Creían que reports a belief" },
        quote: { es: "Algunos buscadores creían que bajo Spindletop había petróleo en gran cantidad.", en: "Some searchers believed that under Spindletop there was oil in great quantity." },
        note: {
          es: "Believed that introduce una idea de los buscadores, no un hecho confirmado todavía.",
          en: "'Creían que' presents the searchers' belief before the oil was actually confirmed."
        }
      },
      {
        key: "dates-and-calendar",
        label: { es: "English full date", en: "Spanish full date" },
        quote: { es: "El 10 de enero de 1901, el pozo explotó hacia arriba.", en: "On January 10, 1901, the well exploded upward." },
        note: {
          es: "El inglés escribe On January 10, 1901: mes primero, mayúscula y coma antes del año.",
          en: "Spanish writes 'El 10 de enero de 1901' with day first, de twice, and no internal comma."
        }
      },
      {
        key: "preterite-vs-imperfect",
        label: { es: "Was and closed for difficulty", en: "Era and cerraba for difficulty" },
        quote: { es: "Perforar no era fácil, porque la arena cerraba los agujeros.", en: "Drilling was not easy, because sand closed the holes." },
        note: {
          es: "Was not easy presenta la dificultad general. Closed muestra el problema repetido con la arena.",
          en: "'No era fácil' gives the continuing problem, and 'cerraba' shows what the sand kept doing."
        }
      },
      {
        key: "time-since",
        label: { es: "Since then links past to later view", en: "Desde entonces links past to later view" },
        quote: { es: "Desde entonces, Texas fue visto como tierra central del petróleo estadounidense.", en: "Since then, Texas has been seen as a central land of American oil." },
        note: {
          es: "Since then conecta el chorro de 1901 con la imagen posterior de Texas petrolero.",
          en: "'Desde entonces' connects the 1901 gusher with Texas's later image as oil country."
        }
      },
      {
        key: "degree-result",
        label: { es: "Enormous as high degree", en: "Enorme as high degree" },
        quote: { es: "El ruido, el lodo y la presión anunciaron una sorpresa enorme.", en: "The noise, mud, and pressure announced an enormous surprise." },
        note: {
          es: "Enormous marca un grado muy alto de surprise. La palabra prepara la escala del boom.",
          en: "'Una sorpresa enorme' uses 'enorme' to mark a very high degree of surprise before the boom."
        }
      }
    ],
    questions: [
      { q: { es: "¿Cerca de qué ciudad estaba Spindletop?", en: "Near which city was Spindletop?" }, a: { es: "Estaba cerca de Beaumont.", en: "It was near Beaumont." } },
      { q: { es: "¿Qué salió del pozo en 1901?", en: "What came out of the well in 1901?" }, a: { es: "Salió petróleo en un chorro.", en: "Oil came out in a gusher." } },
      { q: { es: "¿Qué industria creció después?", en: "What industry grew afterward?" }, a: { es: "Creció la industria petrolera.", en: "The oil industry grew." } },
      { q: { es: "¿Con qué quedó asociada la palabra boom?", en: "What was the word boom associated with?" }, a: { es: "Quedó asociada con promesas, velocidad y peligro.", en: "It became associated with promises, speed, and danger." } }
    ]
  },
  {
    id: "canales-zenu",
    band: "B1",
    minutes: 7,
    era: "c. 200 a. C. – 1000 d. C.",
    place: { es: "Llanura del San Jorge, Caribe colombiano", en: "San Jorge floodplain, Colombian Caribbean" },
    title: { es: "Agua con memoria", en: "Water with Memory" },
    blurb: {
      es: "En la llanura inundable del San Jorge, pueblos zenúes construyeron canales que guiaban el agua. Su obra muestra una ingeniería paciente, hecha para vivir con las crecientes.",
      en: "On the San Jorge floodplain, Zenú peoples built canals that guided the water. Their work shows patient engineering, made for living with floods."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Resume procesos largos, y muchos detalles sobre fechas, autoridad y vida diaria siguen abiertos a investigación.",
      en: "This story is an original, simplified retelling. It compresses long processes, and many details about dates, authority, and daily life remain open to research."
    },
    paragraphs: [
      {
        es: "En las llanuras del San Jorge, el agua sube y baja como una visita antigua, como sabían familias que miraban cada creciente con atención diaria. Durante meses cubre potreros, caminos y patios, luego deja barro fértil detrás de las casas. Allí, comunidades zenúes aprendieron a trabajar con la creciente, no solamente contra ella.",
        en: "On the San Jorge plains, the water rises and falls like an old visitor, as families knew while watching each flood with daily attention. For months it covers pastures, roads, and yards, then leaves fertile mud behind the houses. There, Zenú communities learned to work with the flood, not only against it."
      },
      {
        es: "Hace más de mil años, se cavaron canales largos entre caños, ciénagas y campos elevados, para unir caños, ciénagas y cultivos sin desperdiciar el barro. Algunos canales sacaban exceso de agua, mientras otros la llevaban despacio hacia cultivos cercanos. Así, el paisaje se volvió una máquina agrícola, abierta al cielo y al río.",
        en: "More than a thousand years ago, long canals were dug among streams, marshes, and raised fields, to join streams, marshes, and crops without wasting the mud. Some canals drained extra water, while others carried it slowly toward nearby crops. In this way, the landscape became an agricultural machine, open to the sky and the river."
      },
      {
        es: "Los canales no eran líneas aisladas, sino redes que cambiaban según la temporada, capaces de mover agua sin borrar del todo sus ritmos naturales. Desde arriba parecen peines, abanicos o espinas, aunque fueron hechos con manos comunes. Cada zanja pedía coordinación, porque una familia sola no podía ordenar tanta agua.",
        en: "The canals were not isolated lines, but networks that changed with the season, able to move water without fully erasing its natural rhythms. From above they look like combs, fans, or spines, although they were made by ordinary hands. Each ditch required coordination, because one family alone could not organize so much water."
      },
      {
        es: "En los camellones crecían yuca, maíz y otras plantas adaptadas al suelo húmedo, hechas por comunidades que necesitaban acuerdos antes de cavar juntas cada temporada. También se pescaba en ciénagas cercanas, donde el agua guardaba alimento cuando bajaban los ríos. La ingeniería, por lo tanto, unía cosecha, pesca y transporte en un mismo sistema.",
        en: "Cassava, corn, and other plants adapted to wet soil grew on the raised fields, made by communities that needed agreements before digging together each season. People also fished in nearby marshes, where the water held food when the rivers fell. The engineering, therefore, joined harvest, fishing, and transportation in one system."
      },
      {
        es: "Cuando llegaron nuevos poderes a la región, muchas obras quedaron sin mantenimiento continuo, mientras nuevos dueños cambiaban caminos, trabajos y prioridades de la región. La selva, el ganado y las haciendas cubrieron partes de aquella arquitectura de agua. Sin embargo, las marcas siguieron allí, esperando ojos capaces de leerlas desde el aire.",
        en: "When new powers arrived in the region, many works were left without steady maintenance, while new owners changed the region's roads, labor, and priorities. Forest, cattle, and estates covered parts of that water architecture. However, the marks remained there, waiting for eyes able to read them from the air."
      },
      {
        es: "En el siglo veinte, fotografías aéreas ayudaron a reconocer la escala del sistema, cuando las fotografías revelaron formas que el suelo escondía bien. Lo que parecía tierra arrugada empezó a verse como una obra planeada por generaciones. Si miramos esos canales hoy, entendemos que la inundación también podía ser una aliada.",
        en: "In the twentieth century, aerial photographs helped reveal the scale of the system, when photographs revealed shapes that the ground hid well. What looked like wrinkled land began to appear as a work planned by generations. If we look at those canals today, we understand that flooding could also be an ally."
      },
      {
        es: "La historia zenú no cabe solamente en el oro que llenó vitrinas de museos, porque el barro también guardaba decisiones, memoria y trabajo colectivo antiguo. También está en el barro movido, en los canales viejos y en la paciencia colectiva. Recordarla cambia la pregunta: no era dominar la naturaleza, sino negociar con ella.",
        en: "Zenú history does not fit only in the gold that filled museum cases, because the mud also held decisions, memory, and old collective work. It is also in moved mud, old canals, and collective patience. Remembering it changes the question: it was not about dominating nature, but negotiating with it."
      }
    ],
    glossary: [
      { es: "los canales", en: "the canals", note: { es: "En inglés, 'canals' son vías de agua hechas o moldeadas por personas; no son canales de televisión.", en: "'Canales' can mean waterways or channels. Here it means engineered passages that guide floodwater." } },
      { es: "la creciente", en: "the flood", note: { es: "En inglés, 'flood' puede sonar desastroso, pero aquí también nombra una subida estacional del agua.", en: "'Creciente' comes from 'crecer'. It is rising water, often expected in river country." } },
      { es: "los camellones", en: "the raised fields", note: { es: "'Raised fields' son campos elevados sobre tierra húmeda; la frase explica una técnica agrícola.", en: "'Camellones' are raised agricultural beds here, not street medians or simple ridges." } },
      { es: "las ciénagas", en: "the marshes", note: { es: "'Marshes' son zonas húmedas y poco profundas con plantas, distintas de lagos abiertos o ríos rápidos.", en: "'Ciénagas' are low, wet places common in Caribbean Colombia, useful for fishing and water storage." } },
      { es: "la zanja", en: "the ditch", note: { es: "En inglés, 'ditch' es un corte estrecho en la tierra, más práctico y pequeño que un canal.", en: "'Zanja' suggests a cut made for drainage or work. It feels more manual than 'canal'." } },
      { es: "la cosecha", en: "the harvest", note: { es: "'Harvest' puede nombrar la recolección o el producto recogido del campo.", en: "'Cosecha' can be the gathered food or the season when people gather it." } },
      { es: "el mantenimiento", en: "the maintenance", note: { es: "'Maintenance' es el cuidado repetido que mantiene funcionando un sistema después de construido.", en: "'Mantenimiento' is upkeep. Waterworks fail when nobody clears plants, mud, and breaks." } },
      { es: "negociar", en: "to negotiate", note: { es: "'To negotiate' no es solo hablar de negocios; también significa ajustarse a una fuerza difícil.", en: "'Negociar' can describe dealing with nature. The story uses it against the idea of domination." } }
    ],
    structures: [
      {
        key: "time-since",
        label: { es: "Ago después del tiempo", en: "Hace before a time span" },
        quote: { es: "Hace más de mil años, se cavaron canales largos", en: "More than a thousand years ago, long canals were dug" },
        note: {
          es: "En inglés, 'ago' va después de la expresión de tiempo; el español pone 'hace' antes.",
          en: "'Hace más de mil años' measures distance from now. It is not the verb 'hacer' used for making."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "Pasiva inglesa con were dug", en: "Spanish se-passive" },
        quote: { es: "se cavaron canales largos", en: "long canals were dug" },
        note: {
          es: "El inglés usa 'were dug' porque no sabemos quién cavó; importa más el resultado.",
          en: "'Se cavaron' is a se-passive. It focuses on the canals without naming the people who dug them."
        }
      },
      {
        key: "discourse-connectors",
        label: { es: "Therefore como conclusión", en: "Por lo tanto as a conclusion" },
        quote: { es: "La ingeniería, por lo tanto, unía cosecha, pesca y transporte", en: "The engineering, therefore, joined harvest, fishing, and transportation" },
        note: {
          es: "'Therefore' señala que la economía mixta se desprende del sistema de canales descrito.",
          en: "'Por lo tanto' introduces a conclusion. It is more formal and written than simply saying 'entonces'."
        }
      },
      {
        key: "preterite-vs-imperfect",
        label: { es: "Arrived y were left", en: "Llegaron and quedaron" },
        quote: { es: "Cuando llegaron nuevos poderes a la región, muchas obras quedaron", en: "When new powers arrived in the region, many works were left" },
        note: {
          es: "El inglés depende del sentido para mostrar que llegaron poderes nuevos y quedaron obras abandonadas.",
          en: "'Llegaron' and 'quedaron' mark completed turns in the story, not background habits."
        }
      },
      {
        key: "real-conditionals",
        label: { es: "Presente después de if", en: "Si with present" },
        quote: { es: "Si miramos esos canales hoy, entendemos", en: "If we look at those canals today, we understand" },
        note: {
          es: "El inglés mantiene presente después de 'if' en una condición real; no añade 'will' allí.",
          en: "'Si miramos' invites a real action by the reader. The result also stays in the present."
        }
      },
      {
        key: "object-pronouns",
        label: { es: "It después de remembering", en: "La attached to recordar" },
        quote: { es: "Recordarla cambia la pregunta", en: "Remembering it changes the question" },
        note: {
          es: "El inglés pone 'it' después del gerundio; el español puede pegar el pronombre al infinitivo.",
          en: "'Recordarla' means 'recordar la historia'. The feminine 'la' points back to 'historia'."
        }
      }
    ],
    questions: [
      { q: { es: "¿Qué problema resolvían los canales zenúes?", en: "What problem did the Zenú canals solve?" }, a: { es: "Ayudaban a manejar el agua de las crecientes y a sostener cultivos.", en: "They helped manage floodwater and support crops." } },
      { q: { es: "¿Por qué una familia sola no podía hacer el sistema?", en: "Why could one family alone not make the system?" }, a: { es: "Porque las redes de zanjas y canales exigían coordinación durante varias temporadas.", en: "Because the networks of ditches and canals required coordination across seasons." } },
      { q: { es: "¿Qué ayudó a reconocer la escala de la obra?", en: "What helped reveal the scale of the work?" }, a: { es: "Las fotografías aéreas del siglo veinte ayudaron a leer las marcas del terreno.", en: "Twentieth-century aerial photographs helped read the marks on the land." } },
      { q: { es: "¿Qué idea final propone la historia?", en: "What final idea does the story propose?" }, a: { es: "Propone que aquellas comunidades negociaban con la naturaleza, no solo la dominaban.", en: "It proposes that those communities negotiated with nature, not only dominated it." } }
    ]
  },
  {
    id: "narino-derechos",
    band: "B1",
    minutes: 7,
    era: "1794",
    place: { es: "Santafé de Bogotá, Nuevo Reino de Granada", en: "Santafé de Bogotá, New Kingdom of Granada" },
    title: { es: "Una imprenta en silencio", en: "A Printing Press in Silence" },
    blurb: {
      es: "Antonio Nariño imprimió una versión española de los derechos del hombre en 1794. Un pequeño taller convirtió ideas francesas en un problema político enorme.",
      en: "Antonio Nariño printed a Spanish version of the rights of man in 1794. A small workshop turned French ideas into a huge political problem."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Resume debates políticos complejos y no presenta todos los procesos judiciales ni todas las posturas de la época.",
      en: "This story is an original, simplified retelling. It compresses complex political debates and does not present every legal process or every position of the period."
    },
    paragraphs: [
      {
        es: "En Santafé, Antonio Nariño era comerciante, lector inquieto y funcionario con buenos contactos, en una ciudad donde leer también podía traer sospechas políticas. Su casa reunía libros, conversaciones y noticias que cruzaban el Atlántico lentamente. Para muchos vecinos, esas ideas eran curiosas; para las autoridades, podían volverse peligrosas.",
        en: "In Santafé, Antonio Nariño was a merchant, restless reader, and official with good contacts, in a city where reading could also bring political suspicion. His house gathered books, conversations, and news that crossed the Atlantic slowly. For many neighbors, those ideas were curious; for the authorities, they could become dangerous."
      },
      {
        es: "En 1794, Nariño tradujo e imprimió los derechos del hombre en pocas hojas, con una decisión pequeña que pesó más que su papel. El texto venía de la revolución francesa, cuyo lenguaje prometía libertad e igualdad. Aunque la tirada fue pequeña, la imprenta hizo visible una pregunta prohibida.",
        en: "In 1794, Nariño translated and printed the rights of man on a few sheets, with a small decision that weighed more than its paper. The text came from the French Revolution, whose language promised liberty and equality. Although the print run was small, the press made a forbidden question visible."
      },
      {
        es: "¿Podían los súbditos hablar de derechos como si fueran dueños de su destino? Esa duda golpeaba una monarquía que exigía obediencia, jerarquía y cuidado con las palabras, en una sociedad donde obedecer parecía más seguro que preguntar. Por eso, se recogieron ejemplares y se abrió una causa contra Nariño.",
        en: "Could subjects speak of rights as if they owned their destiny? That doubt struck a monarchy that demanded obedience, hierarchy, and care with words, in a society where obeying seemed safer than asking questions. For that reason, copies were collected and a case was opened against Nariño."
      },
      {
        es: "Nariño fue encarcelado, enviado lejos y vigilado durante años por sus enemigos, mientras jueces y rivales convertían lectura en delito político muy serio. También tuvo defensores que veían en él a un hombre culto, no a un traidor. Sin embargo, el episodio mostró que una página podía mover más miedo que una espada.",
        en: "Nariño was imprisoned, sent far away, and watched for years by his enemies, while judges and rivals turned reading into a very serious political offense. He also had defenders who saw in him an educated man, not a traitor. However, the episode showed that a page could move more fear than a sword."
      },
      {
        es: "Con el tiempo, su gesto se volvió símbolo de libertad para la independencia colombiana, para una memoria pública que después lo volvió precursor nacional. Pero en 1794 no era una estatua, sino un acusado que buscaba sobrevivir. Esa diferencia importa, porque la historia suele ordenar después lo que fue incierto.",
        en: "Over time, his gesture became a symbol of liberty for Colombian independence, for a public memory that later made him a national forerunner. But in 1794 he was not a statue, but an accused man trying to survive. That difference matters, because history often arranges later what was uncertain."
      },
      {
        es: "La traducción no creó sola la independencia, ni todos entendieron igual sus palabras, aunque cada lector llevaba miedos y esperanzas distintas al texto. Algunas personas temían el desorden, mientras otras imaginaban una autoridad limitada por derechos. Si leemos aquel folleto hoy, vemos una chispa dentro de mucha leña seca.",
        en: "The translation did not create independence by itself, and not everyone understood its words the same way, although each reader brought different fears and hopes to the text. Some people feared disorder, while others imagined authority limited by rights. If we read that pamphlet today, we see a spark inside a lot of dry wood."
      },
      {
        es: "Nariño siguió participando en política, con victorias, derrotas y conflictos difíciles de resumir, con una biografía que mezcló cárcel, mando y derrota repetida. Su imprenta, en cambio, conserva una escena clara para cualquier lector. Un hombre cerró una puerta, movió tipos de metal y abrió una discusión pública.",
        en: "Nariño continued taking part in politics, with victories, defeats, and conflicts that are hard to summarize, with a biography that mixed prison, command, and repeated defeat. His press, however, preserves a clear scene for any reader. A man closed a door, moved metal type, and opened a public debate."
      }
    ],
    glossary: [
      { es: "la imprenta", en: "the printing press", note: { es: "'Printing press' puede ser la máquina, el taller o el poder de circular textos impresos.", en: "'Imprenta' is feminine and can name both a press and a print shop." } },
      { es: "los derechos", en: "the rights", note: { es: "'Rights' son reclamos o protecciones que una persona exige por ley o por principio moral.", en: "'Derechos' here are political rights, not the opposite direction from 'izquierdos'." } },
      { es: "la tirada", en: "the print run", note: { es: "'Print run' es el número de copias impresas en una tanda, aunque sea una tanda pequeña.", en: "'Tirada' in publishing is the batch printed. It is not a throw in this context." } },
      { es: "los súbditos", en: "the subjects", note: { es: "'Subjects' aquí son personas bajo un monarca, no materias escolares ni sujetos gramaticales.", en: "'Súbditos' stresses obedience to a king. It belongs to monarchical language." } },
      { es: "la monarquía", en: "the monarchy", note: { es: "'Monarchy' nombra el sistema del rey o la reina, con sus funcionarios y obediencias.", en: "'Monarquía' is the political order, not just the person wearing a crown." } },
      { es: "la causa", en: "the case", note: { es: "'Case' significa proceso legal aquí; 'cause' apuntaría más a una razón o movimiento.", en: "'Causa' can mean reason, but in legal Spanish it can also mean a court case." } },
      { es: "el acusado", en: "the accused man", note: { es: "'The accused man' es la persona señalada antes del fallo, no necesariamente una persona culpable.", en: "'Acusado' names legal position. It should not be read as proof that the person did it." } },
      { es: "el folleto", en: "the pamphlet", note: { es: "'Pamphlet' es un impreso corto, usado muchas veces para difundir argumentos baratos.", en: "'Folleto' is a small printed text. In politics, small size can still carry danger." } }
    ],
    structures: [
      {
        key: "dates-and-calendar",
        label: { es: "In antes del año", en: "En with a year" },
        quote: { es: "En 1794, Nariño tradujo e imprimió", en: "In 1794, Nariño translated and printed" },
        note: {
          es: "El inglés usa 'in' antes de un año, y la coma después de la fecha es estilo.",
          en: "'En 1794' is the normal way to place a historical action inside a year."
        }
      },
      {
        key: "relative-advanced",
        label: { es: "Whose para instituciones", en: "Cuyo with possession" },
        quote: { es: "la revolución francesa, cuyo lenguaje prometía libertad e igualdad", en: "the French Revolution, whose language promised liberty and equality" },
        note: {
          es: "'Whose' puede referirse a cosas e instituciones en inglés formal, no solamente a personas.",
          en: "'Cuyo' is formal and agrees with what is possessed: 'lenguaje', not 'revolución'."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "Pasivas oficiales en inglés", en: "Official se-actions" },
        quote: { es: "se recogieron ejemplares y se abrió una causa", en: "copies were collected and a case was opened" },
        note: {
          es: "Las pasivas inglesas esconden a los funcionarios porque importan más las acciones oficiales.",
          en: "'Se recogieron' and 'se abrió' sound institutional. Spanish often uses 'se' for unnamed authorities."
        }
      },
      {
        key: "preterite-vs-imperfect",
        label: { es: "Was imprisoned como hecho", en: "Fue encarcelado as an event" },
        quote: { es: "Nariño fue encarcelado, enviado lejos y vigilado", en: "Nariño was imprisoned, sent far away, and watched" },
        note: {
          es: "'Was imprisoned' es pasiva en inglés, pero avanza la biografía como un hecho.",
          en: "'Fue encarcelado' uses preterite plus participle to mark a completed historical punishment."
        }
      },
      {
        key: "discourse-connectors",
        label: { es: "However para contraste", en: "En cambio for contrast" },
        quote: { es: "Su imprenta, en cambio, conserva una escena clara", en: "His press, however, preserves a clear scene" },
        note: {
          es: "'However' contrasta una vida política complicada con una escena clara junto a la imprenta.",
          en: "'En cambio' sets one idea against another. It is a useful written alternative to repeating 'pero'."
        }
      },
      {
        key: "real-conditionals",
        label: { es: "If we read", en: "Si leemos" },
        quote: { es: "Si leemos aquel folleto hoy, vemos una chispa", en: "If we read that pamphlet today, we see a spark" },
        note: {
          es: "La condición es real e interpretativa: si los lectores hacen esto, ven aquello.",
          en: "'Si leemos' plus 'vemos' uses present in both halves because the condition is not imaginary."
        }
      }
    ],
    questions: [
      { q: { es: "¿Qué imprimió Antonio Nariño en 1794?", en: "What did Antonio Nariño print in 1794?" }, a: { es: "Imprimió una traducción de los derechos del hombre en pocas hojas.", en: "He printed a translation of the rights of man on a few sheets." } },
      { q: { es: "¿Por qué el texto preocupó a las autoridades?", en: "Why did the text worry the authorities?" }, a: { es: "Porque hablaba de derechos dentro de una monarquía que exigía obediencia.", en: "Because it spoke of rights inside a monarchy that demanded obedience." } },
      { q: { es: "¿Cómo cambió la imagen de Nariño con el tiempo?", en: "How did Nariño's image change over time?" }, a: { es: "Su gesto se volvió símbolo de libertad para la independencia colombiana.", en: "His gesture became a symbol of liberty for Colombian independence." } },
      { q: { es: "¿Qué escena clara conserva la historia de la imprenta?", en: "What clear scene does the history of the press preserve?" }, a: { es: "Conserva a un hombre moviendo tipos de metal y abriendo discusión pública.", en: "It preserves a man moving metal type and opening public debate." } }
    ]
  },
  {
    id: "guerra-mil-dias",
    band: "B1",
    minutes: 7,
    era: "1899–1902",
    place: { es: "Colombia y Panamá", en: "Colombia and Panama" },
    title: { es: "Tres años de cansancio", en: "Three Years of Exhaustion" },
    blurb: {
      es: "La Guerra de los Mil Días enfrentó liberales y conservadores entre 1899 y 1902. Fue una guerra larga, desigual y costosa para familias de muchas regiones.",
      en: "The Thousand Days' War pitted Liberals and Conservatives against each other from 1899 to 1902. It was a long, uneven, costly war for families in many regions."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Resume causas nacionales, batallas regionales y consecuencias sociales que fueron mucho más variadas.",
      en: "This story is an original, simplified retelling. It compresses national causes, regional battles, and social consequences that were much more varied."
    },
    paragraphs: [
      {
        es: "A finales del siglo diecinueve, Colombia discutía con rabia sobre poder, elecciones e Iglesia. Era un país donde las urnas no lograban cerrar disputas antiguas entre partidos. Liberales y conservadores desconfiaban unos de otros, y cada fraude parecía confirmar viejas heridas. Cuando estalló la guerra en 1899, muchas familias ya vivían rodeadas de miedo.",
        en: "At the end of the nineteenth century, Colombia argued bitterly about power, elections, and the Church. It was a country where ballots failed to close old disputes between parties. Liberals and Conservatives distrusted one another, and each fraud seemed to confirm old wounds. When the war broke out in 1899, many families were already living surrounded by fear."
      },
      {
        es: "La Guerra de los Mil Días no fue una sola batalla ni un frente ordenado, porque los mapas militares cambiaban más rápido que las noticias de cada pueblo. Hubo combates en Santander, la costa, Panamá y otros caminos difíciles de controlar. A veces luchaban ejércitos formales, pero muchas veces avanzaban columnas pobres, enfermas y mal armadas.",
        en: "The Thousand Days' War was not one battle or one orderly front, because military maps changed faster than the news from each town. There was fighting in Santander, on the coast, in Panama, and along other roads hard to control. Sometimes formal armies fought, but often poor, sick, badly armed columns advanced."
      },
      {
        es: "Los campesinos ponían comida, mulas e hijos, aunque no siempre entendían los discursos políticos, y ese costo cotidiano rara vez aparecía completo en los discursos oficiales nacionales. Algunas ciudades cambiaban de manos, mientras los pueblos pequeños pagaban multas, reclutas y silencios. Por eso, la guerra entró en cocinas, cosechas y deudas familiares.",
        en: "Farmers supplied food, mules, and sons, although they did not always understand the political speeches, and that daily cost rarely appeared fully in national official speeches. Some cities changed hands, while small towns paid fines, recruits, and silences. For that reason, the war entered kitchens, harvests, and family debts."
      },
      {
        es: "En 1900, la batalla de Palonegro dejó muertos, heridos y una victoria conservadora decisiva, mientras madres, alcaldes y curas negociaban para proteger lo poco que quedaba en pie. El terreno, el hambre y las enfermedades pesaron tanto como los fusiles. Después, los liberales siguieron resistiendo, pero cada mes hacía más difícil sostener la lucha.",
        en: "In 1900, the Battle of Palonegro left dead, wounded, and a decisive Conservative victory, while mothers, mayors, and priests negotiated to protect the little left standing. The terrain, hunger, and disease weighed as much as rifles. Afterward, the Liberals kept resisting, but each month made the struggle harder to sustain."
      },
      {
        es: "La guerra también golpeó a Panamá, que todavía pertenecía a Colombia en esos años, en un istmo donde cualquier crisis colombiana tenía consecuencias internacionales rápidas y costosas. Allí se mezclaron intereses locales, rutas comerciales y la mirada extranjera sobre el istmo. Sin embargo, ningún tratado podía devolver rápido los cuerpos ni los años perdidos.",
        en: "The war also struck Panama, which still belonged to Colombia in those years, on an isthmus where any Colombian crisis had quick and costly international consequences. There, local interests, trade routes, and foreign attention on the isthmus mixed together. However, no treaty could quickly return the bodies or the lost years."
      },
      {
        es: "Cuando la paz llegó en 1902, el país estaba agotado y económicamente roto, cuando la paz escrita todavía debía bajar a veredas y cuarteles muy cansados. Se firmaron acuerdos, se entregaron armas y muchas promesas quedaron flotando en papel. Si contamos solo los días, perdemos el peso de tanto duelo acumulado.",
        en: "When peace arrived in 1902, the country was exhausted and economically broken, when written peace still had to reach very tired villages and barracks. Agreements were signed, weapons were handed over, and many promises remained floating on paper. If we count only the days, we miss the weight of so much accumulated grief."
      },
      {
        es: "Poco después, la separación de Panamá mostró que la guerra había debilitado al Estado, porque la derrota material permaneció en casas que no salían en los partes militares. La memoria de aquellos años siguió dividiendo familias, partidos y relatos escolares. Recordar la guerra exige mirar banderas, pero también zapatos rotos y mesas vacías.",
        en: "Soon afterward, Panama's separation showed that the war had weakened the state, because material defeat remained in houses that never appeared in military reports. The memory of those years kept dividing families, parties, and school accounts. Remembering the war requires looking at flags, but also at broken shoes and empty tables."
      }
    ],
    glossary: [
      { es: "el fraude", en: "the fraud", note: { es: "'Fraud' es una acción deshonesta, especialmente con votos, dinero o documentos oficiales.", en: "'Fraude' points to deception. In this story it belongs to disputed elections." } },
      { es: "los combates", en: "the fighting", note: { es: "'Fighting' es más amplio que una batalla; puede reunir choques armados repetidos.", en: "'Combates' are armed encounters. The plural helps show a scattered war." } },
      { es: "los reclutas", en: "the recruits", note: { es: "'Recruits' son soldados recién tomados o incorporados, muchas veces jóvenes y poco entrenados.", en: "'Reclutas' are people pulled or brought into military service." } },
      { es: "los fusiles", en: "the rifles", note: { es: "'Rifles' son armas largas; la palabra es más específica y militar que 'weapons'.", en: "'Fusiles' are military rifles. The word often appears in accounts of nineteenth-century war." } },
      { es: "el tratado", en: "the treaty", note: { es: "'Treaty' es un acuerdo político formal, normalmente entre gobiernos o bandos armados.", en: "'Tratado' is formal and written. It promises order after conflict." } },
      { es: "el duelo", en: "the grief", note: { es: "'Grief' es tristeza por una pérdida; no lo confundas con 'duel', un combate entre dos personas.", en: "'Duelo' can mean mourning or a duel. Here it means mourning for the dead." } },
      { es: "las promesas", en: "the promises", note: { es: "'Promises' son compromisos sobre el futuro, y en política pueden quedarse solo en papel.", en: "'Promesas' are commitments. The story questions whether agreements reached ordinary people." } },
      { es: "las banderas", en: "the flags", note: { es: "'Flags' pueden ser telas reales, pero en historia suelen representar partidos o causas.", en: "'Banderas' are flags and also symbols. Here they represent political sides." } }
    ],
    structures: [
      {
        key: "preterite-vs-imperfect",
        label: { es: "Broke out y were living", en: "Estalló and vivían" },
        quote: { es: "Cuando estalló la guerra en 1899, muchas familias ya vivían", en: "When the war broke out in 1899, many families were already living" },
        note: {
          es: "'Broke out' es el hecho repentino, mientras 'were living' da el fondo de miedo.",
          en: "'Estalló' drops an event into the narrative. 'Vivían' paints what was already happening."
        }
      },
      {
        key: "comparison-equality",
        label: { es: "As much as", en: "Tanto como" },
        quote: { es: "pesaron tanto como los fusiles", en: "weighed as much as rifles" },
        note: {
          es: "'As much as' compara importancia, no peso físico; el hambre importó como los fusiles.",
          en: "'Tanto como' builds an equality comparison. The phrase can compare force, quantity, or importance."
        }
      },
      {
        key: "relative-basic",
        label: { es: "Which entre comas", en: "Que between commas" },
        quote: { es: "Panamá, que todavía pertenecía a Colombia", en: "Panama, which still belonged to Colombia" },
        note: {
          es: "'Which still belonged' añade información sobre Panamá; las comas muestran que es explicación.",
          en: "'Que' can add a comment about a noun. With commas, it explains rather than identifies."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "Were signed y handed over", en: "Se firmaron and se entregaron" },
        quote: { es: "Se firmaron acuerdos, se entregaron armas", en: "Agreements were signed, weapons were handed over" },
        note: {
          es: "El inglés repite pasivas para acciones de paz oficiales; los firmantes no son el foco.",
          en: "'Se firmaron' and 'se entregaron' keep attention on agreements and weapons, not on named actors."
        }
      },
      {
        key: "real-conditionals",
        label: { es: "If we count", en: "Si contamos" },
        quote: { es: "Si contamos solo los días, perdemos el peso", en: "If we count only the days, we miss the weight" },
        note: {
          es: "El inglés usa presente con presente para una advertencia general sobre cómo leer historia.",
          en: "'Si contamos' is a real condition addressed to the reader. 'Perdemos' gives the consequence."
        }
      },
      {
        key: "pluperfect",
        label: { es: "Had weakened", en: "Había debilitado" },
        quote: { es: "la guerra había debilitado al Estado", en: "the war had weakened the state" },
        note: {
          es: "'Had weakened' coloca el daño antes de que la separación de Panamá se hiciera visible.",
          en: "'Había debilitado' is the past before another past. It explains a later political result."
        }
      }
    ],
    questions: [
      { q: { es: "¿Qué partidos se enfrentaron en la guerra?", en: "Which parties fought in the war?" }, a: { es: "Se enfrentaron liberales y conservadores en distintas regiones del país.", en: "Liberals and Conservatives fought in different regions of the country." } },
      { q: { es: "¿Por qué la guerra afectó la vida diaria?", en: "Why did the war affect daily life?" }, a: { es: "Porque tomó comida, animales, reclutas y recursos de familias campesinas.", en: "Because it took food, animals, recruits, and resources from farming families." } },
      { q: { es: "¿Qué importancia tuvo Palonegro?", en: "What importance did Palonegro have?" }, a: { es: "Fue una batalla decisiva que dejó muchos muertos y debilitó a los liberales.", en: "It was a decisive battle that left many dead and weakened the Liberals." } },
      { q: { es: "¿Qué consecuencia apareció poco después de la guerra?", en: "What consequence appeared soon after the war?" }, a: { es: "La separación de Panamá mostró la debilidad del Estado colombiano.", en: "Panama's separation showed the weakness of the Colombian state." } }
    ]
  },
  {
    id: "scadta",
    band: "B1",
    minutes: 7,
    era: "1919–1940",
    place: { es: "Barranquilla y el río Magdalena", en: "Barranquilla and the Magdalena River" },
    title: { es: "El correo sobre el río", en: "Mail Above the River" },
    blurb: {
      es: "SCADTA nació en Barranquilla en 1919 y conectó ciudades colombianas por aire. Sus hidroaviones hicieron del río Magdalena una pista hacia el futuro.",
      en: "SCADTA was born in Barranquilla in 1919 and connected Colombian cities by air. Its seaplanes turned the Magdalena River into a runway toward the future."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Resume cambios técnicos, empresariales y políticos de una aerolínea temprana con muchas etapas.",
      en: "This story is an original, simplified retelling. It compresses technical, business, and political changes in an early airline with many stages."
    },
    paragraphs: [
      {
        es: "En 1919, Barranquilla miraba al mar, al río y a los negocios nuevos, en una ciudad acostumbrada a recibir mercancías, idiomas y rumores marítimos. Allí nació SCADTA, una compañía aérea que parecía demasiado audaz para su tiempo. Colombia tenía montañas difíciles, carreteras lentas y cartas que tardaban semanas en llegar.",
        en: "In 1919, Barranquilla looked toward the sea, the river, and new business, in a city used to receiving goods, languages, and seaborne rumors. There SCADTA was born, an airline that seemed too bold for its time. Colombia had difficult mountains, slow roads, and letters that took weeks to arrive."
      },
      {
        es: "Los primeros aviones no necesitaban pistas modernas, porque podían posarse sobre el Magdalena, cuando el agua ofrecía una pista antes de tener aeropuertos modernos. Eran hidroaviones ruidosos, frágiles y admirados por quienes los veían bajar al agua. Para muchos pasajeros, volar era más aventura que costumbre tranquila.",
        en: "The first airplanes did not need modern runways, because they could land on the Magdalena, when water offered a runway before modern airports existed. They were noisy, fragile seaplanes, admired by those who saw them descend to the water. For many passengers, flying was more adventure than calm habit."
      },
      {
        es: "SCADTA llevó correo, mercancías y personas entre puertos, pueblos y ciudades interiores, y por eso el correo parecía ganar velocidad de siglo nuevo. Un viaje que antes tomaba días por río podía hacerse en pocas horas. Por eso, comerciantes y funcionarios vieron en el avión una herramienta de gobierno y mercado.",
        en: "SCADTA carried mail, goods, and people among ports, towns, and inland cities, and for that reason mail seemed to gain new-century speed. A trip that once took days by river could be made in a few hours. For that reason, merchants and officials saw the airplane as a tool of government and markets."
      },
      {
        es: "La empresa tuvo pilotos alemanes, socios colombianos y una mezcla constante de confianza y riesgo, en rutas donde la confianza dependía tanto del motor como del río. Cada ruta exigía mapas, talleres, combustible y acuerdos con lugares que apenas conocían el avión. Si el clima cambiaba, el río podía salvar o complicar el aterrizaje.",
        en: "The company had German pilots, Colombian partners, and a constant mix of confidence and risk, on routes where trust depended as much on the engine as on the river. Each route required maps, workshops, fuel, and agreements with places that barely knew the airplane. If the weather changed, the river could save or complicate the landing."
      },
      {
        es: "Con los años, la aviación dejó de ser espectáculo y empezó a formar infraestructura nacional, para un país que empezaba a imaginarse menos separado por montañas. Además, acercó la costa Caribe con Bogotá, Medellín y otras ciudades separadas por montañas. Esa cercanía no borró distancias sociales, pero cambió la imaginación del país.",
        en: "Over the years, aviation stopped being a spectacle and began to form national infrastructure, for a country beginning to imagine itself less separated by mountains. In addition, it brought the Caribbean coast closer to Bogotá, Medellín, and other cities separated by mountains. That closeness did not erase social distances, but it changed the country's imagination."
      },
      {
        es: "La Segunda Guerra Mundial transformó la mirada sobre empresas con vínculos alemanes en América, cuando la guerra convirtió socios y apellidos en asuntos delicados internacionales. SCADTA fue reorganizada, y su historia terminó dentro de la futura Avianca. Sin embargo, el recuerdo de sus vuelos iniciales todavía pertenece a la historia mundial de la aviación.",
        en: "World War II changed how people viewed companies with German ties in the Americas, when war turned partners and surnames into delicate international matters. SCADTA was reorganized, and its history ended inside the future Avianca. However, the memory of its first flights still belongs to world aviation history."
      },
      {
        es: "Hoy parece normal cruzar cordilleras en una hora y quejarse del retraso, como si cada ruta nueva dibujara un mapa menos imposible. En aquel comienzo, cada despegue era una promesa técnica contra la geografía. SCADTA mostró que Colombia también podía inventar rutas modernas desde sus propios ríos.",
        en: "Today it seems normal to cross mountain ranges in an hour and complain about the delay, as if each new route drew a less impossible map. At that beginning, each takeoff was a technical promise against geography. SCADTA showed that Colombia could also invent modern routes from its own rivers."
      }
    ],
    glossary: [
      { es: "la compañía", en: "the company", note: { es: "'Company' significa empresa aquí, no un grupo de amigos ni una unidad militar.", en: "'Compañía' is feminine. In this story it means a business organization." } },
      { es: "los hidroaviones", en: "the seaplanes", note: { es: "'Seaplanes' son aviones que pueden aterrizar en agua, útiles antes de pistas modernas.", en: "'Hidroaviones' combines water and airplanes. The word explains why the river mattered." } },
      { es: "el correo", en: "the mail", note: { es: "'Mail' significa cartas y paquetes físicos aquí, no correo electrónico ni edificio postal.", en: "'Correo' can be the system or the items sent. Here it is cargo for early flights." } },
      { es: "las mercancías", en: "the goods", note: { es: "'Goods' son productos movidos para el comercio; en este sentido suele usarse en plural.", en: "'Mercancías' are trade goods. The word belongs naturally with ports and transport." } },
      { es: "el aterrizaje", en: "the landing", note: { es: "'Landing' es bajar con seguridad; un hidroavión puede hacer un aterrizaje sobre agua.", en: "'Aterrizaje' comes from 'tierra', but aviation uses it even when the landing is on water." } },
      { es: "la ruta", en: "the route", note: { es: "'Route' es el camino regular de un servicio, no cualquier viaje casual.", en: "'Ruta' suggests a planned path. Airlines, buses, and trade all use it." } },
      { es: "la infraestructura", en: "the infrastructure", note: { es: "'Infrastructure' es el sistema de apoyo: talleres, combustible, mapas y rutas.", en: "'Infraestructura' names the hidden base that lets transport work reliably." } },
      { es: "el despegue", en: "the takeoff", note: { es: "'Takeoff' es el inicio del vuelo; también puede sugerir el comienzo de un crecimiento.", en: "'Despegue' is when an aircraft leaves ground or water. It also works figuratively." } }
    ],
    structures: [
      {
        key: "dates-and-calendar",
        label: { es: "In con año", en: "En with year" },
        quote: { es: "En 1919, Barranquilla miraba al mar", en: "In 1919, Barranquilla looked toward the sea" },
        note: {
          es: "El inglés usa 'in' antes del año, y la ciudad actúa casi como una persona.",
          en: "'En 1919' opens a historical scene. The imperfect 'miraba' paints Barranquilla's orientation."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "Was reorganized pasivo", en: "Fue reorganizada passive" },
        quote: { es: "SCADTA fue reorganizada", en: "SCADTA was reorganized" },
        note: {
          es: "'Was reorganized' es pasiva porque importa más el cambio institucional que un actor.",
          en: "'Fue reorganizada' is a formal passive with 'ser'. It fits business and political history."
        }
      },
      {
        key: "relative-basic",
        label: { es: "That once took days", en: "Que antes tomaba" },
        quote: { es: "Un viaje que antes tomaba días por río", en: "A trip that once took days by river" },
        note: {
          es: "'That once took days' define el viaje comparado con el nuevo vuelo.",
          en: "'Que' joins 'viaje' to a description. Spanish normally cannot drop this connector."
        }
      },
      {
        key: "por-vs-para",
        label: { es: "By para causa", en: "Por for cause" },
        quote: { es: "separadas por montañas", en: "separated by mountains" },
        note: {
          es: "'By mountains' nombra la causa de la separación, no un destino ni un propósito.",
          en: "'Por' can mark cause or means. Here mountains explain why cities felt far apart."
        }
      },
      {
        key: "real-conditionals",
        label: { es: "If the weather changed", en: "Si el clima cambiaba" },
        quote: { es: "Si el clima cambiaba, el río podía salvar", en: "If the weather changed, the river could save" },
        note: {
          es: "Esta es una condición pasada repetida: cuando cambiaba el clima, aterrizar se volvía incierto.",
          en: "'Si el clima cambiaba' uses imperfect because the problem could happen again and again."
        }
      },
      {
        key: "comparison-inequality",
        label: { es: "More adventure than", en: "Más aventura que" },
        quote: { es: "volar era más aventura que costumbre tranquila", en: "flying was more adventure than calm habit" },
        note: {
          es: "'More adventure than calm habit' compara dos descripciones, no dos objetos separados.",
          en: "'Más aventura que costumbre' uses 'más...que' to say which quality dominated early flying."
        }
      }
    ],
    questions: [
      { q: { es: "¿Dónde nació SCADTA?", en: "Where was SCADTA born?" }, a: { es: "Nació en Barranquilla, una ciudad conectada con el mar y el Magdalena.", en: "It was born in Barranquilla, a city connected with the sea and the Magdalena." } },
      { q: { es: "¿Por qué el río era importante para sus aviones?", en: "Why was the river important for its airplanes?" }, a: { es: "Porque los hidroaviones podían posarse sobre el Magdalena sin pistas modernas.", en: "Because the seaplanes could land on the Magdalena without modern runways." } },
      { q: { es: "¿Qué transportaba SCADTA?", en: "What did SCADTA transport?" }, a: { es: "Transportaba correo, mercancías y personas entre puertos y ciudades interiores.", en: "It transported mail, goods, and people among ports and inland cities." } },
      { q: { es: "¿Qué cambió la Segunda Guerra Mundial?", en: "What did World War II change?" }, a: { es: "Cambió la mirada sobre empresas con vínculos alemanes y llevó a reorganizaciones.", en: "It changed views of companies with German ties and led to reorganizations." } }
    ]
  },
  {
    id: "quina",
    band: "B1",
    minutes: 7,
    era: "Siglos XVIII–XIX",
    place: { es: "Andes de Colombia, Ecuador, Perú y Bolivia", en: "Andes of Colombia, Ecuador, Peru, and Bolivia" },
    title: { es: "La corteza amarga", en: "The Bitter Bark" },
    blurb: {
      es: "La quina, corteza del árbol de cinchona, dio quinina contra las fiebres. Su comercio unió ciencia, imperios y bosques andinos bajo fuerte presión.",
      en: "Cinchona bark gave quinine against fevers. Its trade linked science, empires, and Andean forests under heavy pressure."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Resume conocimientos médicos, redes comerciales y daños ambientales que variaron según región y época.",
      en: "This story is an original, simplified retelling. It compresses medical knowledge, trade networks, and environmental damage that varied by region and period."
    },
    paragraphs: [
      {
        es: "En los Andes húmedos, ciertos árboles guardaban una corteza amarga y valiosa, en bosques donde medicina y comercio se miraban de cerca. La gente conocía remedios locales, mientras médicos europeos buscaban respuestas para fiebres repetidas. Con el tiempo, la quina se volvió una mercancía capaz de cruzar océanos.",
        en: "In the wet Andes, certain trees held a bitter and valuable bark, in forests where medicine and commerce watched each other closely. Local people knew remedies, while European doctors searched for answers to repeated fevers. Over time, cinchona became a commodity able to cross oceans."
      },
      {
        es: "De esa corteza se obtuvo quinina, útil contra la malaria antes de medicinas modernas, porque la medicina buscaba respuestas antes de entender microbios. No curaba todos los males, pero bajaba fiebres que mataban viajeros, soldados y trabajadores. Por eso, imperios y comerciantes miraron los bosques andinos con creciente ambición.",
        en: "From that bark, quinine was obtained, useful against malaria before modern medicines, because medicine sought answers before understanding microbes. It did not cure every illness, but it lowered fevers that killed travelers, soldiers, and workers. For that reason, empires and merchants looked at Andean forests with growing ambition."
      },
      {
        es: "Los cascarilleros entraban al monte, reconocían árboles y arrancaban la corteza con cuidado desigual, y cada carga dependía de monte, memoria y necesidad. Algunos sabían cortar sin matar el árbol, pero la prisa dañó muchos bosques. Cuando el precio subía, la montaña recibía más hachas, mulas y deudas.",
        en: "Bark cutters entered the forest, recognized trees, and stripped the bark with uneven care, and each load depended on forest, memory, and need. Some knew how to cut without killing the tree, but haste damaged many forests. When the price rose, the mountain received more axes, mules, and debts."
      },
      {
        es: "La quina también produjo discusiones científicas sobre especies, calidad y clasificación botánica, mientras la ciencia ordenaba plantas que otros habían usado. Naturalistas enviaban muestras, escribían informes y discutían nombres para árboles parecidos. Sin embargo, detrás de cada etiqueta había caminos difíciles y manos mal pagadas.",
        en: "Cinchona also produced scientific debates about species, quality, and botanical classification, while science organized plants that others had used. Naturalists sent samples, wrote reports, and debated names for similar trees. However, behind every label there were difficult roads and poorly paid hands."
      },
      {
        es: "En el siglo diecinueve, semillas andinas salieron hacia plantaciones controladas por potencias extranjeras, cuando semillas y secretos viajaron hacia otros imperios botánicos. Ese traslado cambió el negocio, porque la quinina pudo producirse lejos de los bosques originales. Para las regiones recolectoras, el auge dejó ganancias breves y heridas largas.",
        en: "In the nineteenth century, Andean seeds left for plantations controlled by foreign powers, when seeds and secrets traveled toward other botanical empires. That transfer changed the business, because quinine could be produced far from the original forests. For the collecting regions, the boom left brief profits and long wounds."
      },
      {
        es: "La historia de la quina no pertenece solo a laboratorios ni farmacias elegantes, porque una medicina útil también podía nacer de relaciones injustas. También habla de conocimiento indígena, explotación rural y plantas convertidas en estrategia mundial. Si seguimos el camino de la corteza, encontramos salud para unos y pérdida para otros.",
        en: "The history of cinchona does not belong only to laboratories or elegant pharmacies, because a useful medicine could also be born from unjust relationships. It also speaks of Indigenous knowledge, rural exploitation, and plants turned into global strategy. If we follow the path of the bark, we find health for some and loss for others."
      },
      {
        es: "Hoy la quinina recuerda una verdad incómoda sobre la medicina moderna, para mirar el remedio junto con su costo escondido. Muchas soluciones nacieron de territorios donde otras personas asumieron el costo ambiental. Nombrar la corteza amarga permite agradecer el remedio sin olvidar el bosque.",
        en: "Today quinine recalls an uncomfortable truth about modern medicine, to see the remedy together with its hidden cost. Many solutions were born in territories where other people carried the environmental cost. Naming the bitter bark lets us appreciate the remedy without forgetting the forest."
      }
    ],
    glossary: [
      { es: "la corteza", en: "the bark", note: { es: "'Bark' es la capa exterior de un árbol aquí, no el ladrido de un perro.", en: "'Corteza' is the outside layer of a tree or fruit. The story uses the tree meaning." } },
      { es: "la quina", en: "the cinchona", note: { es: "'Cinchona' nombra el árbol o la corteza que da quinina; es una palabra histórica especializada.", en: "'Quina' names cinchona bark and, by extension, the tree source of quinine." } },
      { es: "la quinina", en: "the quinine", note: { es: "'Quinine' es la sustancia médica obtenida de la quina y usada contra la malaria.", en: "'Quinina' is the medicine substance; 'quina' is the bark or tree source." } },
      { es: "las fiebres", en: "the fevers", note: { es: "'Fevers' son temperaturas altas; la medicina antigua usaba el plural para males repetidos.", en: "'Fiebres' can sound old-fashioned in medical history, especially for malaria-like sickness." } },
      { es: "los cascarilleros", en: "the bark cutters", note: { es: "'Bark cutters' describe a los trabajadores por su tarea, porque falta una palabra común.", en: "'Cascarilleros' were workers who collected quina bark in mountain forests." } },
      { es: "las muestras", en: "the samples", note: { es: "'Samples' son piezas pequeñas usadas para estudiar, probar o representar un conjunto mayor.", en: "'Muestras' are pieces or examples taken for scientific study or comparison." } },
      { es: "el auge", en: "the boom", note: { es: "'Boom' significa un período de crecimiento rápido, no un sonido fuerte en esta frase.", en: "'Auge' is a peak or boom in trade, fashion, or power." } },
      { es: "la pérdida", en: "the loss", note: { es: "'Loss' puede ser económica, emocional o ambiental; la historia mezcla varios sentidos.", en: "'Pérdida' comes from 'perder'. It can name damage, absence, or what people no longer have." } }
    ],
    structures: [
      {
        key: "passive-and-impersonal",
        label: { es: "Was obtained científico", en: "Se obtuvo scientific" },
        quote: { es: "De esa corteza se obtuvo quinina", en: "From that bark, quinine was obtained" },
        note: {
          es: "'Was obtained' suena científico y evita nombrar un descubridor único, lo cual simplificaría demasiado.",
          en: "'Se obtuvo' is impersonal and cautious. It keeps attention on the substance, not a heroic inventor."
        }
      },
      {
        key: "relative-basic",
        label: { es: "That killed travelers", en: "Que mataban" },
        quote: { es: "fiebres que mataban viajeros, soldados y trabajadores", en: "fevers that killed travelers, soldiers, and workers" },
        note: {
          es: "'That killed travelers' define por qué esas fiebres importaban en la historia médica.",
          en: "'Que mataban' links the noun to its effect. The relative clause gives necessary information."
        }
      },
      {
        key: "preterite-vs-imperfect",
        label: { es: "When the price rose", en: "Cuando el precio subía" },
        quote: { es: "Cuando el precio subía, la montaña recibía más hachas", en: "When the price rose, the mountain received more axes" },
        note: {
          es: "El pasado simple inglés puede describir un patrón repetido; el imperfecto español lo marca mejor.",
          en: "'Subía' and 'recibía' describe a recurring economic pattern, not one single price change."
        }
      },
      {
        key: "discourse-connectors",
        label: { es: "However para contraste", en: "Sin embargo for contrast" },
        quote: { es: "Sin embargo, detrás de cada etiqueta había caminos difíciles", en: "However, behind every label there were difficult roads" },
        note: {
          es: "'However' pasa de etiquetas científicas ordenadas al trabajo duro que quedaba escondido.",
          en: "'Sin embargo' introduces contrast. It helps the reader see the human cost behind classification."
        }
      },
      {
        key: "por-vs-para",
        label: { es: "For como perspectiva", en: "Para as perspective" },
        quote: { es: "Para las regiones recolectoras, el auge dejó ganancias breves", en: "For the collecting regions, the boom left brief profits" },
        note: {
          es: "'For the collecting regions' marca perspectiva: cómo se veía el auge desde esos lugares.",
          en: "'Para' can mean 'from the point of view of'. It does not express purpose in this quote."
        }
      },
      {
        key: "real-conditionals",
        label: { es: "If we follow", en: "Si seguimos" },
        quote: { es: "Si seguimos el camino de la corteza, encontramos salud", en: "If we follow the path of the bark, we find health" },
        note: {
          es: "La oración con 'if' describe un camino real de lectura, no un futuro posible.",
          en: "'Si seguimos' plus 'encontramos' uses present in both clauses for a general conclusion."
        }
      }
    ],
    questions: [
      { q: { es: "¿De dónde salía la quinina?", en: "Where did quinine come from?" }, a: { es: "Salía de la corteza de árboles de quina en los Andes.", en: "It came from the bark of cinchona trees in the Andes." } },
      { q: { es: "¿Por qué interesó a imperios y comerciantes?", en: "Why did it interest empires and merchants?" }, a: { es: "Porque ayudaba contra fiebres peligrosas y tenía gran valor comercial.", en: "Because it helped against dangerous fevers and had great commercial value." } },
      { q: { es: "¿Qué problema causó la prisa por recolectar corteza?", en: "What problem did the rush to collect bark cause?" }, a: { es: "Dañó muchos bosques porque algunos árboles fueron cortados sin cuidado suficiente.", en: "It damaged many forests because some trees were cut without enough care." } },
      { q: { es: "¿Qué recuerda hoy la historia de la quina?", en: "What does the history of cinchona remind us of today?" }, a: { es: "Recuerda que algunos remedios modernos tuvieron costos ambientales y sociales.", en: "It reminds us that some modern remedies had environmental and social costs." } }
    ]
  },
  {
    id: "juneteenth",
    band: "B1",
    minutes: 7,
    era: "19 de junio de 1865",
    place: { es: "Galveston, Texas", en: "Galveston, Texas" },
    title: { es: "La noticia que llegó tarde", en: "The News That Came Late" },
    blurb: {
      es: "El 19 de junio de 1865, soldados de la Unión anunciaron la libertad en Galveston. Juneteenth recuerda una noticia esperada y una promesa incompleta.",
      en: "On June 19, 1865, Union soldiers announced freedom in Galveston. Juneteenth remembers long-awaited news and an unfinished promise."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Resume una fecha simbólica; la esclavitud, la emancipación y la libertad real tuvieron procesos más largos.",
      en: "This story is an original, simplified retelling. It summarizes a symbolic date; slavery, emancipation, and real freedom had longer processes."
    },
    paragraphs: [
      {
        es: "En Galveston, Texas, el calor de junio caía sobre muelles, calles y casas, cuando la guerra civil llegaba a su final. El 19 de junio de 1865, tropas de la Unión llegaron con una orden pública. Para miles de personas esclavizadas, aquella noticia nombraba una libertad prometida mucho antes.",
        en: "In Galveston, Texas, the June heat fell over docks, streets, and houses, as the Civil War was nearing its end. On June 19, 1865, Union troops arrived with a public order. For thousands of enslaved people, that news named a freedom promised much earlier."
      },
      {
        es: "La Proclamación de Emancipación había sido firmada en 1863 por Abraham Lincoln, aunque la ley escrita todavía viajaba lentamente allí. Pero en Texas, lejos de muchos campos de batalla, los esclavistas resistieron el cambio. Algunos ocultaron noticias, otros esperaron al ejército, y muchos trabajadores siguieron atrapados.",
        en: "The Emancipation Proclamation had been signed in 1863 by Abraham Lincoln, although written law still traveled slowly there. But in Texas, far from many battlefields, enslavers resisted the change. Some hid news, others waited for the army, and many workers remained trapped."
      },
      {
        es: "El general Gordon Granger anunció que las personas esclavizadas eran libres según la ley, para quienes necesitaban libertad material, no solo palabras. La frase sonó simple, aunque la vida no cambió de un golpe. Salir de una plantación exigía comida, seguridad, trabajo pagado y protección contra la violencia.",
        en: "General Gordon Granger announced that enslaved people were free under the law, for people who needed material freedom, not only words. The sentence sounded simple, although life did not change all at once. Leaving a plantation required food, safety, paid work, and protection from violence."
      },
      {
        es: "Muchas familias celebraron, buscaron parientes y probaron caminos que antes estaban prohibidos, mientras cada familia medía riesgos y nuevas posibilidades. También enfrentaron contratos injustos, amenazas y leyes nuevas que limitaron sus decisiones. Por lo tanto, Juneteenth habla de alegría, pero también de vigilancia.",
        en: "Many families celebrated, searched for relatives, and tried roads that had once been forbidden, while each family measured risks and new possibilities. They also faced unfair contracts, threats, and new laws that limited their choices. Therefore, Juneteenth speaks of joy, but also of vigilance."
      },
      {
        es: "Con los años, las celebraciones reunieron comida, oración, discursos, música y ropa especial, en reuniones donde la memoria sostuvo derechos. Texas mantuvo viva la fecha en comunidades negras aun cuando otros la ignoraban. En parques y patios, recordar se volvió una forma de enseñar dignidad.",
        en: "Over the years, celebrations gathered food, prayer, speeches, music, and special clothes, in gatherings where memory supported rights. Texas kept the date alive in Black communities even when others ignored it. In parks and yards, remembering became a way to teach dignity."
      },
      {
        es: "Juneteenth no sustituye otras fechas de emancipación ni cuenta toda la historia nacional, porque una fecha puede guardar promesa y demora. Más bien muestra cómo una ley puede viajar despacio hasta tocar la vida diaria. Si escuchamos la fecha completa, oímos libertad, demora y lucha en la misma palabra.",
        en: "Juneteenth does not replace other emancipation dates or tell the whole national story, because a date can hold promise and delay. Instead, it shows how a law can travel slowly until it touches daily life. If we listen to the full date, we hear freedom, delay, and struggle in the same word."
      },
      {
        es: "En 2021, Estados Unidos reconoció Juneteenth como feriado federal, aunque reconocer no significa reparar todo daño. Ese reconocimiento no cerró las discusiones sobre racismo, memoria y reparación. Pero abrió otra puerta para estudiar Texas, la esclavitud y la libertad con más cuidado.",
        en: "In 2021, the United States recognized Juneteenth as a federal holiday, although recognition does not mean repairing all harm. That recognition did not close debates about racism, memory, and repair. But it opened another door for studying Texas, slavery, and freedom more carefully."
      }
    ],
    glossary: [
      { es: "los muelles", en: "the docks", note: { es: "'Docks' son estructuras portuarias donde los barcos paran para cargar, descargar o amarrarse.", en: "'Muelles' are port places for ships. In other contexts, 'muelle' can also mean spring." } },
      { es: "la orden", en: "the order", note: { es: "'Order' significa una orden oficial aquí, no arreglo, secuencia ni pedido comercial.", en: "'Orden' is feminine when it means a command: 'la orden'." } },
      { es: "las tropas", en: "the troops", note: { es: "'Troops' significa soldados como grupo; es más colectivo que hablar de soldados individuales.", en: "'Tropas' is a plural word for military forces or soldiers acting together." } },
      { es: "las personas esclavizadas", en: "the enslaved people", note: { es: "'Enslaved people' pone primero a las personas y nombra la condición impuesta.", en: "'Personas esclavizadas' emphasizes humanity before the imposed condition of slavery." } },
      { es: "la plantación", en: "the plantation", note: { es: "'Plantation' es una gran propiedad agrícola, históricamente ligada aquí al trabajo forzado.", en: "'Plantación' is a large farm for a crop. In this history, it is tied to slavery." } },
      { es: "los contratos", en: "the contracts", note: { es: "'Contracts' son acuerdos formales, pero condiciones injustas todavía pueden limitar la libertad.", en: "'Contratos' are agreements with obligations. After emancipation, some were tools of control." } },
      { es: "el feriado", en: "the holiday", note: { es: "'Holiday' en inglés estadounidense puede ser un día público libre, no solo una celebración familiar.", en: "'Feriado' is a public holiday or nonworking day. Colombia also commonly says 'festivo'." } },
      { es: "la reparación", en: "the repair", note: { es: "'Repair' significa arreglar un daño; en debates sociales suele aparecer 'reparations'.", en: "'Reparación' can mean repair, redress, or making amends for damage." } }
    ],
    structures: [
      {
        key: "dates-and-calendar",
        label: { es: "On con fecha completa", en: "El with full date" },
        quote: { es: "El 19 de junio de 1865, tropas de la Unión llegaron", en: "On June 19, 1865, Union troops arrived" },
        note: {
          es: "El inglés usa 'on' con una fecha completa y escribe el mes con mayúscula.",
          en: "Spanish uses 'el' before the day number, then 'de' before the month and year."
        }
      },
      {
        key: "pluperfect",
        label: { es: "Had been signed", en: "Había sido firmada" },
        quote: { es: "había sido firmada en 1863", en: "had been signed in 1863" },
        note: {
          es: "'Had been signed' coloca la proclamación de Lincoln antes del anuncio de 1865 en Galveston.",
          en: "'Había sido firmada' combines pluperfect time with passive voice to order the two events."
        }
      },
      {
        key: "ser-vs-estar",
        label: { es: "Were free legal", en: "Eran libres legal status" },
        quote: { es: "eran libres según la ley", en: "were free under the law" },
        note: {
          es: "El inglés tiene un solo 'be', así que el estado legal se entiende por contexto.",
          en: "'Eran libres' uses 'ser' for legal status. It does not mean daily life was already safe."
        }
      },
      {
        key: "discourse-connectors",
        label: { es: "Therefore conclusivo", en: "Por lo tanto concluding" },
        quote: { es: "Por lo tanto, Juneteenth habla de alegría", en: "Therefore, Juneteenth speaks of joy" },
        note: {
          es: "'Therefore' saca una conclusión del contraste entre celebración y peligro.",
          en: "'Por lo tanto' connects evidence to interpretation. It is a formal written connector."
        }
      },
      {
        key: "real-conditionals",
        label: { es: "If we listen", en: "Si escuchamos" },
        quote: { es: "Si escuchamos la fecha completa, oímos libertad", en: "If we listen to the full date, we hear freedom" },
        note: {
          es: "El inglés mantiene presente en ambas partes porque la frase da un resultado interpretativo real.",
          en: "'Si escuchamos' asks readers to consider the word carefully; 'oímos' states what appears."
        }
      },
      {
        key: "relative-basic",
        label: { es: "That limited choices", en: "Que limitaron" },
        quote: { es: "leyes nuevas que limitaron sus decisiones", en: "new laws that limited their choices" },
        note: {
          es: "'That limited their choices' define las leyes por su efecto, por eso no lleva coma.",
          en: "'Que limitaron' identifies what kind of laws they were. It is a defining relative clause."
        }
      }
    ],
    questions: [
      { q: { es: "¿Qué pasó en Galveston el 19 de junio de 1865?", en: "What happened in Galveston on June 19, 1865?" }, a: { es: "Tropas de la Unión anunciaron la libertad de las personas esclavizadas.", en: "Union troops announced the freedom of enslaved people." } },
      { q: { es: "¿Por qué la noticia llegó tarde a Texas?", en: "Why did the news arrive late in Texas?" }, a: { es: "Texas estaba lejos de muchos campos de batalla y hubo resistencia esclavista.", en: "Texas was far from many battlefields, and enslavers resisted." } },
      { q: { es: "¿Qué dificultades siguieron después del anuncio?", en: "What difficulties continued after the announcement?" }, a: { es: "Siguieron contratos injustos, amenazas, violencia y límites a las decisiones.", en: "Unfair contracts, threats, violence, and limits on choices continued." } },
      { q: { es: "¿Qué reconoció Estados Unidos en 2021?", en: "What did the United States recognize in 2021?" }, a: { es: "Reconoció Juneteenth como feriado federal.", en: "It recognized Juneteenth as a federal holiday." } }
    ]
  },
  {
    id: "dust-bowl",
    band: "B1",
    minutes: 7,
    era: "Década de 1930",
    place: { es: "Llanuras del sur de Estados Unidos", en: "Southern Plains of the United States" },
    title: { es: "Cuando el polvo tapó el sol", en: "When Dust Covered the Sun" },
    blurb: {
      es: "Durante los años treinta, sequía y malas prácticas agrícolas levantaron tormentas de polvo en las llanuras del sur. Muchas familias dejaron sus granjas y buscaron otro comienzo.",
      en: "During the 1930s, drought and poor farming practices raised dust storms on the southern plains. Many families left their farms and looked for another beginning."
    },
    caveat: {
      es: "Esta historia es una narración original y simplificada. Resume causas ambientales, económicas y humanas de una crisis que afectó estados y familias de maneras distintas.",
      en: "This story is an original, simplified retelling. It compresses environmental, economic, and human causes of a crisis that affected states and families in different ways."
    },
    paragraphs: [
      {
        es: "En las llanuras del sur, el viento siempre había formado parte del paisaje, hasta que la tierra perdió defensa natural. Durante los años treinta, la sequía volvió ese viento más duro y peligroso. El suelo seco empezó a levantarse hasta convertir el mediodía en una noche marrón.",
        en: "On the southern plains, wind had always been part of the landscape, until the land lost its natural defense. During the 1930s, drought made that wind harsher and more dangerous. The dry soil began to rise until it turned midday into a brown night."
      },
      {
        es: "Antes, muchos agricultores habían arado pastos nativos para sembrar trigo y ganar dinero, después de años de arado confiado extenso. Mientras la lluvia acompañaba, los campos parecían prometer una vida estable. Pero cuando faltó el agua, las raíces profundas ya no sujetaban la tierra.",
        en: "Earlier, many farmers had plowed native grasses to plant wheat and earn money, after years of broad, confident plowing. While the rain helped, the fields seemed to promise a stable life. But when the water failed, the deep roots no longer held the soil."
      },
      {
        es: "Las tormentas de polvo entraban por ventanas, platos, pulmones y cunas infantiles, cuando respirar también se volvió difícil. Algunas familias colgaban sábanas mojadas, aunque el polvo encontraba otra grieta. Cada nube traía miedo, enfermedad y una capa gris sobre los animales.",
        en: "Dust storms entered through windows, plates, lungs, and children's cradles, when breathing also became difficult. Some families hung wet sheets, although the dust found another crack. Each cloud brought fear, sickness, and a gray layer over the animals."
      },
      {
        es: "La Gran Depresión hizo peor la crisis, porque los precios agrícolas cayeron mucho, en familias que ya tenían poco margen. Bancos reclamaron granjas, tiendas cerraron cuentas y vecinos vendieron herramientas queridas. Por lo tanto, la sequía se mezcló con deudas, vergüenza y decisiones urgentes.",
        en: "The Great Depression made the crisis worse, because farm prices fell sharply, in families that already had little margin. Banks claimed farms, stores closed accounts, and neighbors sold beloved tools. Therefore, the drought mixed with debts, shame, and urgent decisions."
      },
      {
        es: "Miles de personas salieron hacia California, cargando colchones, ollas y fotografías familiares, con maletas hechas de urgencia familiar. No todos venían de Oklahoma, aunque muchos recibieron el mismo apodo injusto. En los caminos, buscar trabajo significaba competir con otros pobres por salarios bajos.",
        en: "Thousands of people left for California, carrying mattresses, pots, and family photographs, with suitcases packed from family urgency. Not everyone came from Oklahoma, although many received the same unfair nickname. On the roads, looking for work meant competing with other poor people for low wages."
      },
      {
        es: "El gobierno respondió con programas para conservar suelo, plantar árboles y cambiar cultivos, mientras aprender a conservar suelo ganó importancia. Se enseñó a dejar franjas de pasto, porque la tierra necesitaba protección. Si una comunidad cuidaba el suelo, podía reducir el daño de futuros vientos.",
        en: "The government responded with programs to conserve soil, plant trees, and change crops, while learning to conserve soil gained importance. People were taught to leave strips of grass, because the land needed protection. If a community cared for the soil, it could reduce the damage from future winds."
      },
      {
        es: "El Dust Bowl no fue solo un desastre natural ni solo un error humano, para no repetir la misma confianza; fue una lección sobre clima, mercado y límites de la confianza tecnológica. Recordarlo ayuda a preguntar cómo sembramos, cómo migramos y cómo tratamos la tierra común.",
        en: "The Dust Bowl was not only a natural disaster or only a human mistake, so the same confidence would not be repeated; it was a lesson about climate, markets, and the limits of technological confidence. Remembering it helps us ask how we plant, how we migrate, and how we treat common land."
      }
    ],
    glossary: [
      { es: "la sequía", en: "the drought", note: { es: "'Drought' es una falta larga de lluvia, más fuerte y dañina que un clima seco común.", en: "'Sequía' is a serious rain shortage. It affects crops, animals, and wells." } },
      { es: "el suelo", en: "the soil", note: { es: "'Soil' es la tierra donde crecen plantas; 'floor' es la palabra normal dentro de una habitación.", en: "'Suelo' can mean floor or soil. Farming context selects the earth meaning." } },
      { es: "las tormentas", en: "the storms", note: { es: "'Storms' pueden ser de lluvia, nieve, viento o polvo, según el contexto.", en: "'Tormentas' are severe weather events. Here they are dust storms, not rainstorms." } },
      { es: "las raíces", en: "the roots", note: { es: "'Roots' sostienen las plantas en la tierra y ayudan a que el suelo no vuele.", en: "'Raíces' is feminine plural. The word also works figuratively for origins." } },
      { es: "las deudas", en: "the debts", note: { es: "'Debts' son dineros debidos, capaces de volver familiar una crisis climática.", en: "'Deudas' are obligations to pay. The word often appears with banks and farms." } },
      { es: "los salarios", en: "the wages", note: { es: "'Wages' son pagos por trabajo, a menudo por hora, día, semana o cosecha.", en: "'Salarios' are payments for labor. Low salaries and low wages are different English registers." } },
      { es: "las franjas", en: "the strips", note: { es: "'Strips' son zonas largas y estrechas; los agricultores dejan franjas de pasto contra el viento.", en: "'Franjas' are narrow bands or strips. Here they are lines of grass left in fields." } },
      { es: "sembrar", en: "to plant", note: { es: "'To plant' es el verbo común para poner semillas o plantas jóvenes en la tierra.", en: "'Sembrar' means to sow or plant. It is basic farming vocabulary." } }
    ],
    structures: [
      {
        key: "pluperfect",
        label: { es: "Had always been", en: "Había formado" },
        quote: { es: "el viento siempre había formado parte del paisaje", en: "wind had always been part of the landscape" },
        note: {
          es: "'Had always been' pone el viento común antes de la crisis, sin culparlo todo.",
          en: "'Había formado' reaches back before the 1930s. It sets background for the later change."
        }
      },
      {
        key: "preterite-vs-imperfect",
        label: { es: "While the rain helped", en: "Mientras acompañaba" },
        quote: { es: "Mientras la lluvia acompañaba, los campos parecían prometer", en: "While the rain helped, the fields seemed to promise" },
        note: {
          es: "'While the rain helped' da condiciones de fondo, no un hecho único de la trama.",
          en: "'Acompañaba' and 'parecían' are imperfect because they describe an ongoing situation."
        }
      },
      {
        key: "concession",
        label: { es: "Although con hecho real", en: "Aunque with a real fact" },
        quote: { es: "aunque el polvo encontraba otra grieta", en: "although the dust found another crack" },
        note: {
          es: "'Although' admite que las sábanas mojadas ayudaban solo en parte antes de mostrar el polvo.",
          en: "'Aunque' with indicative presents a real fact: the dust really kept finding cracks."
        }
      },
      {
        key: "discourse-connectors",
        label: { es: "Therefore en crisis", en: "Por lo tanto in crisis" },
        quote: { es: "Por lo tanto, la sequía se mezcló con deudas", en: "Therefore, the drought mixed with debts" },
        note: {
          es: "'Therefore' une la caída de precios y la presión bancaria con la crisis humana.",
          en: "'Por lo tanto' marks a conclusion. It keeps the explanation from feeling like a loose list."
        }
      },
      {
        key: "real-conditionals",
        label: { es: "If a community cared", en: "Si una comunidad cuidaba" },
        quote: { es: "Si una comunidad cuidaba el suelo, podía reducir el daño", en: "If a community cared for the soil, it could reduce the damage" },
        note: {
          es: "Las formas pasadas describen una condición real repetida, no una fantasía sobre el presente.",
          en: "'Si cuidaba' and 'podía' use imperfect because the sentence describes repeated past practice."
        }
      },
      {
        key: "object-pronouns",
        label: { es: "It después de remembering", en: "Lo attached to recordar" },
        quote: { es: "Recordarlo ayuda a preguntar cómo sembramos", en: "Remembering it helps us ask how we plant" },
        note: {
          es: "El inglés usa 'it' después de 'remembering'; el español pega 'lo' al infinitivo.",
          en: "'Recordarlo' means remembering the Dust Bowl. The masculine 'lo' points to the event or disaster."
        }
      }
    ],
    questions: [
      { q: { es: "¿Qué convirtió el mediodía en una noche marrón?", en: "What turned midday into a brown night?" }, a: { es: "El suelo seco levantado por el viento creó enormes nubes de polvo.", en: "Dry soil lifted by the wind created huge clouds of dust." } },
      { q: { es: "¿Por qué el arado de pastos nativos fue importante?", en: "Why was plowing native grasses important?" }, a: { es: "Porque quitó raíces profundas que sujetaban la tierra durante la sequía.", en: "Because it removed deep roots that held the soil during drought." } },
      { q: { es: "¿Hacia dónde salieron muchas familias?", en: "Where did many families go?" }, a: { es: "Muchas familias salieron hacia California buscando trabajo y otro comienzo.", en: "Many families went toward California looking for work and another beginning." } },
      { q: { es: "¿Qué enseñó el gobierno para cuidar el suelo?", en: "What did the government teach to care for the soil?" }, a: { es: "Enseñó a conservar suelo, plantar árboles y dejar franjas de pasto.", en: "It taught people to conserve soil, plant trees, and leave grass strips." } }
    ]
  },
  {
    id: "bananeras",
    band: "B2",
    minutes: 8,
    era: "1928",
    place: { es: "Zona bananera del Magdalena", en: "Banana zone of Magdalena" },
    title: { es: "La plaza y los trenes", en: "The Square and the Trains" },
    blurb: {
      es: "La huelga bananera reunió obreros, familias y reclamos laborales en una región dominada por plantaciones extranjeras. Su represión dejó una memoria disputada sobre Estado, empresa y ciudadanía.",
      en: "The banana strike brought together workers, families, and labor demands in a region dominated by foreign plantations. Its suppression left a disputed memory about the state, the company, and citizenship."
    },
    caveat: {
      es: "Este relato resume hechos sensibles y discutidos de 1928. Las cifras de muertos, las responsabilidades y algunos detalles varían según archivos, testimonios y memorias políticas.",
      en: "This story summarizes sensitive and disputed events from 1928. The death toll, responsibilities, and some details vary according to archives, testimonies, and political memories."
    },
    paragraphs: [
      {
        es: "En 1928, la zona bananera del Magdalena dependía de trenes, campamentos y contratos que ordenaban la vida alrededor de la fruta. Muchos obreros trabajaban para intermediarios, aunque la United Fruit Company marcaba horarios, pagos y reglas sobre la plantación. Esa distancia legal permitía negar responsabilidades, mientras la riqueza salía por el puerto en racimos cuidadosamente contados por administradores, comerciantes y funcionarios locales.",
        en: "In 1928, the banana zone of Magdalena depended on trains, camps, and contracts that organized life around the fruit. Many workers worked for intermediaries, although the United Fruit Company shaped schedules, payments, and rules on the plantation. That legal distance made it possible to deny responsibilities, while wealth left through the port in carefully counted bunches by managers, merchants, and local officials."
      },
      {
        es: "La huelga comenzó cuando los sindicatos exigieron salario directo, descanso dominical, atención médica y mejores viviendas para sus familias. No pedían una revolución inmediata, sino que se reconociera una relación laboral que la empresa prefería negar. Para muchos trabajadores, firmar peticiones era la única manera de volverse visibles ante jueces, alcaldes y ministros.",
        en: "The strike began when unions demanded direct wages, Sunday rest, medical care, and better housing for their families. They were not asking for an immediate revolution, but for recognition of a labor relationship the company preferred to deny. For many workers, signing petitions was the only way to become visible to judges, mayors, and ministers."
      },
      {
        es: "El gobierno conservador temía que el conflicto dañara exportaciones, impuestos y la imagen de orden ante inversionistas extranjeros. Por lo tanto, envió tropas al mando del general Cortés Vargas, mientras los huelguistas esperaban una negociación oficial. La prensa oficial hablaba de agitación peligrosa, pero en los campamentos se hablaba de salarios, enfermedad y comida.",
        en: "The Conservative government feared that the conflict would damage exports, taxes, and the image of order before foreign investors. Therefore, it sent troops under General Cortés Vargas, while the strikers waited for an official negotiation. The official press spoke of dangerous agitation, but in the camps people spoke of wages, illness, and food."
      },
      {
        es: "En Ciénaga, una multitud se reunió cerca de la estación, donde circulaban rumores sobre ministros, acuerdos y ultimátums militares. La madrugada del 6 de diciembre, después de una orden de dispersión, los soldados dispararon contra la multitud reunida. El ferrocarril, que normalmente movía banano hacia el mar, quedó asociado desde entonces con cuerpos y silencio.",
        en: "In Ciénaga, a crowd gathered near the station, where rumors circulated about ministers, agreements, and military ultimatums. In the early hours of December 6, after an order to disperse, the soldiers fired on the gathered crowd. The railroad, which normally moved bananas toward the sea, became associated from then on with bodies and silence."
      },
      {
        es: "La cifra de muertos nunca quedó cerrada, porque los informes oficiales, los relatos obreros y la literatura dieron números distintos. Sin embargo, la matanza se volvió un símbolo de cómo un Estado podía proteger negocios antes que ciudadanos. El desacuerdo sobre los muertos no borra el hecho central, sino que muestra cuánto costó documentarlo.",
        en: "The death toll was never settled, because official reports, workers' accounts, and literature gave different numbers. However, the massacre became a symbol of how a state could protect business before citizens. The disagreement over the dead does not erase the central fact, but shows how much it cost to document it."
      },
      {
        es: "Después vinieron detenciones, silencio local y una derrota que golpeó durante años al movimiento obrero colombiano. Si el gobierno hubiera negociado antes, la huelga habría podido terminar como conflicto laboral, no como trauma nacional. También habría quedado otra lección sobre la presencia extranjera, menos marcada por la desconfianza y el miedo.",
        en: "Afterward came arrests, local silence, and a defeat that struck the Colombian labor movement for years. If the government had negotiated earlier, the strike could have ended as a labor conflict, not as a national trauma. Another lesson about foreign presence would also have remained, less marked by mistrust and fear."
      },
      {
        es: "Hoy la memoria de las bananeras aparece en aulas, novelas, sindicatos y debates sobre empresas multinacionales. Recordarla exige separar mito y archivo, pero también aceptar que la historia laboral colombiana tiene una estación llena de ausencias. Allí se cruzan la fruta cotidiana, el poder global y una pregunta persistente sobre quién cuenta como trabajador.",
        en: "Today the memory of the banana zone appears in classrooms, novels, unions, and debates about multinational companies. Remembering it requires separating myth from archive, but also accepting that Colombian labor history has a station full of absences. There the everyday fruit, global power, and a persistent question about who counts as a worker meet."
      }
    ],
    glossary: [
      { es: "la huelga", en: "the strike", note: { es: "Strike nombra una protesta laboral organizada; no es simplemente golpear algo.", en: "In Spanish, huelga is collective labor action, not just any pause in work." } },
      { es: "los obreros", en: "the workers", note: { es: "Workers es más amplio que employees, útil cuando la contratación era indirecta.", en: "Obreros emphasizes manual labor and working class politics more than empleados would." } },
      { es: "la plantación", en: "the plantation", note: { es: "Plantation no es cualquier farm; evoca monocultivo, exportación y desigualdad laboral.", en: "Plantación suggests export monoculture and hierarchy, not an ordinary Colombian finca." } },
      { es: "los sindicatos", en: "the unions", note: { es: "Unions son organizaciones de trabajadores, no la simple unión de dos cosas.", en: "Sindicatos are worker organizations; the plural highlights coordinated collective demands." } },
      { es: "los ultimátums", en: "the ultimatums", note: { es: "Ultimatums son exigencias finales con amenaza; suenan más duros que warnings.", en: "Ultimátums keeps a formal, military tone; the accent stays on the singular form." } },
      { es: "la matanza", en: "the massacre", note: { es: "Massacre implica muchas víctimas indefensas; es más cargado que killing.", en: "Matanza is stronger than muerte because it points to collective, violent killing." } },
      { es: "los archivos", en: "the archives", note: { es: "Archives son documentos conservados para investigación, no solamente edificios antiguos.", en: "Archivos are records used for historical reconstruction, though they may remain incomplete." } },
      { es: "la memoria", en: "the memory", note: { es: "Memory aquí es memoria colectiva y pública, no solo recuerdo individual.", en: "Memoria here means public historical memory, not one person's ability to remember." } }
    ],
    structures: [
      {
        key: "concession",
        label: { es: "Although para concesión real", en: "Aunque with a real fact" },
        quote: { es: "aunque la United Fruit Company marcaba horarios", en: "although the United Fruit Company shaped schedules" },
        note: {
          es: "Although introduce un contraste real; el verbo inglés no cambia de modo.",
          en: "Aunque takes the indicative because the company's influence is treated as factual background."
        }
      },
      {
        key: "subjunctive-volition",
        label: { es: "Recognition after a demand", en: "Se reconociera after a demand" },
        quote: { es: "sino que se reconociera una relación laboral", en: "but for recognition of a labor relationship" },
        note: {
          es: "El inglés convierte la acción pedida en un grupo nominal: recognition of a relationship.",
          en: "Se reconociera is imperfect subjunctive because it depends on a past demand."
        }
      },
      {
        key: "discourse-connectors",
        label: { es: "Therefore para consecuencia", en: "Por lo tanto for consequence" },
        quote: { es: "Por lo tanto, envió tropas al mando del general Cortés Vargas", en: "Therefore, it sent troops under General Cortés Vargas" },
        note: {
          es: "Therefore conecta causa y resultado con un tono escrito y analítico.",
          en: "Por lo tanto makes the troop deployment a consequence of the government's fear."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "Was settled sin agente", en: "Quedó cerrada without an agent" },
        quote: { es: "La cifra de muertos nunca quedó cerrada", en: "The death toll was never settled" },
        note: {
          es: "Was settled es pasiva; evita decir quién habría cerrado la cifra.",
          en: "Quedó cerrada avoids naming one person responsible for settling the disputed number."
        }
      },
      {
        key: "counterfactual-past",
        label: { es: "If had forzado al pasado irreal", en: "Si hubiera for an unreal past" },
        quote: { es: "Si el gobierno hubiera negociado antes", en: "If the government had negotiated earlier" },
        note: {
          es: "If the government had negotiated combina had con participio para imaginar otro pasado.",
          en: "Si hubiera negociado imagines a past that did not happen and prepares habría podido."
        }
      },
      {
        key: "relative-basic",
        label: { es: "Where como conector", en: "Donde as a connector" },
        quote: { es: "donde circulaban rumores sobre ministros", en: "where rumors circulated about ministers" },
        note: {
          es: "Where une el lugar con los rumores sin empezar una segunda oración.",
          en: "Donde links the station to what happened there; it is not a question word."
        }
      }
    ],
    questions: [
      { q: { es: "¿Qué pedían los sindicatos durante la huelga?", en: "What did the unions demand during the strike?" }, a: { es: "Pedían salario directo, descanso dominical, atención médica y mejores viviendas para las familias.", en: "They demanded direct wages, Sunday rest, medical care, and better housing for families." } },
      { q: { es: "¿Por qué el gobierno envió tropas a la zona?", en: "Why did the government send troops to the zone?" }, a: { es: "Porque temía daños a las exportaciones, los impuestos y la imagen de orden ante inversionistas.", en: "Because it feared damage to exports, taxes, and the image of order before investors." } },
      { q: { es: "¿Por qué la cifra de muertos sigue discutida?", en: "Why is the death toll still disputed?" }, a: { es: "Porque informes oficiales, relatos obreros y memorias políticas ofrecieron números diferentes.", en: "Because official reports, workers' accounts, and political memories offered different numbers." } },
      { q: { es: "¿Qué simboliza hoy la matanza de las bananeras?", en: "What does the banana massacre symbolize today?" }, a: { es: "Simboliza el choque entre ciudadanía, trabajo, Estado y poder empresarial extranjero.", en: "It symbolizes the clash among citizenship, labor, the state, and foreign corporate power." } }
    ]
  },
  {
    id: "armero",
    band: "B2",
    minutes: 8,
    era: "1985",
    place: { es: "Nevado del Ruiz y valle del río Lagunilla", en: "Nevado del Ruiz and the Lagunilla River valley" },
    title: { es: "La noche que bajó la montaña", en: "The Night the Mountain Came Down" },
    blurb: {
      es: "La erupción del Nevado del Ruiz produjo flujos de lodo que sepultaron Armero en una sola noche. La tragedia reveló fallas dolorosas en prevención, comunicación y autoridad.",
      en: "The eruption of Nevado del Ruiz produced mudflows that buried Armero in a single night. The tragedy revealed painful failures in prevention, communication, and authority."
    },
    caveat: {
      es: "Este relato simplifica una emergencia compleja y dolorosa. Las responsabilidades institucionales, las alertas disponibles y las decisiones locales siguen siendo materia de investigación y debate.",
      en: "This story simplifies a complex and painful emergency. Institutional responsibilities, available alerts, and local decisions remain matters of research and debate."
    },
    paragraphs: [
      {
        es: "Antes de noviembre de 1985, Armero era una ciudad agrícola donde algodón, arroz y comercio sostenían una vida tranquila. Sobre ella estaba el Nevado del Ruiz, un volcán hermoso cuya nieve podía volverse amenaza durante una erupción. La distancia hacía que la montaña pareciera paisaje, aunque sus ríos conectaban directamente la cumbre con el valle por cauces antiguos y pendientes rápidas en menos tiempo del imaginado.",
        en: "Before November 1985, Armero was an agricultural city where cotton, rice, and trade supported a quiet life. Above it stood Nevado del Ruiz, a beautiful volcano whose snow could become a threat during an eruption. Distance made the mountain seem like scenery, although its rivers connected the summit directly with the valley through old channels and steep slopes in less time than imagined."
      },
      {
        es: "Los científicos habían observado señales de actividad, y varios mapas advertían que los ríos podían traer lodo volcánico. Aunque esas alertas existían, muchas autoridades dudaron, discutieron competencias o comunicaron el riesgo con demasiada cautela. Una advertencia técnica necesita una voz pública clara, porque la gente no evacua solamente por gráficos, términos técnicos ni reuniones sin decisión, cuando la lluvia ya confundía la conversación pública.",
        en: "Scientists had observed signs of activity, and several maps warned that rivers could bring volcanic mud. Although those alerts existed, many authorities hesitated, debated responsibilities, or communicated the risk with too much caution. A technical warning needs a clear public voice, because people do not evacuate only because of charts, technical terms, or meetings without decisions, when rain was already confusing the public conversation."
      },
      {
        es: "La noche del 13 de noviembre, una erupción moderada derritió parte del hielo que cubría la cumbre, y el agua mezclada con ceniza y roca formó lahares que bajaron por los cauces con una fuerza enorme. No fue la explosión más grande posible, pero sí bastó para transformar nieve en corriente mortal para una ciudad entera que no alcanzó a escuchar la montaña con suficiente claridad.",
        en: "On the night of November 13, a moderate eruption melted part of the ice covering the summit, and water mixed with ash and rock formed lahars that rushed down the riverbeds with enormous force. It was not the largest possible explosion, but it was enough to turn snow into a deadly current for an entire city that did not manage to hear the mountain clearly enough."
      },
      {
        es: "Cuando el lodo llegó a Armero, muchos habitantes dormían o seguían esperando instrucciones claras de evacuación, rutas y puntos de encuentro conocidos. En pocas horas, barrios enteros quedaron sepultados, mientras radios, hospitales y caminos perdían capacidad de respuesta. La ciudad no desapareció de golpe para todos, sino por llamados, techos y nombres que dejaban de contestar.",
        en: "When the mud reached Armero, many residents were sleeping or still waiting for clear evacuation instructions, routes, and known meeting points. Within a few hours, whole neighborhoods were buried, while radios, hospitals, and roads lost their capacity to respond. The city did not disappear at once for everyone, but through calls, roofs, and names that stopped answering."
      },
      {
        es: "Las imágenes de sobrevivientes atrapados hicieron visible una tragedia que el país apenas empezaba a comprender. Sin embargo, también mostraron los límites de un rescate improvisado, cuando cada minuto dependía de maquinaria, luz y coordinación. La compasión nacional fue intensa, pero la compasión no puede reemplazar puentes, helicópteros ni planes practicados.",
        en: "Images of trapped survivors made visible a tragedy the country was only beginning to understand. However, they also showed the limits of an improvised rescue, when every minute depended on machinery, light, and coordination. National compassion was intense, but compassion cannot replace bridges, helicopters, or practiced plans."
      },
      {
        es: "Después de la catástrofe, el nombre de Armero quedó unido a duelo, negligencia y preguntas que todavía duelen. Si las alertas hubieran producido una evacuación temprana, miles de personas habrían tenido una oportunidad distinta. Por eso la discusión no acusa solamente al volcán, sino a una cadena humana que falló antes del lodo, las sirenas y la oscuridad.",
        en: "After the catastrophe, the name Armero became tied to grief, negligence, and questions that still hurt. If the alerts had produced an early evacuation, thousands of people would have had a different chance. That is why the discussion does not accuse only the volcano, but a human chain that failed before the mud, the sirens, and the darkness."
      },
      {
        es: "Colombia fortaleció después sus sistemas de gestión del riesgo, aunque ninguna reforma devuelve las vidas perdidas. Recordar Armero significa escuchar a la ciencia, pero también traducir sus avisos en decisiones públicas antes de la noche. Una alerta que nadie convierte en acción termina siendo casi otra forma de silencio.",
        en: "Colombia later strengthened its risk management systems, although no reform returns the lives lost. Remembering Armero means listening to science, but also translating its warnings into public decisions before night falls. An alert that no one turns into action ends up being almost another form of silence."
      }
    ],
    glossary: [
      { es: "la erupción", en: "the eruption", note: { es: "Eruption es salida de material volcánico; puede ser pequeña o catastrófica.", en: "Erupción is the geological event; Spanish also uses it for outbreaks, but context decides." } },
      { es: "el volcán", en: "the volcano", note: { es: "Volcano nombra la montaña y el sistema geológico que puede activarse.", en: "Volcán names both the mountain you see and the active system beneath it." } },
      { es: "el lodo", en: "the mud", note: { es: "Mud parece una palabra común, pero en un desastre puede moverse con fuerza mortal.", en: "Lodo sounds everyday in Spanish, which makes its destructive role more chilling here." } },
      { es: "los lahares", en: "the lahars", note: { es: "Lahars es término técnico para flujos de lodo volcánico por cauces.", en: "Lahares is the technical plural for volcanic mudflows that follow river channels." } },
      { es: "la evacuación", en: "the evacuation", note: { es: "Evacuation implica salida organizada por seguridad, no una huida improvisada.", en: "Evacuación implies organized removal before danger, not simply running away." } },
      { es: "los sobrevivientes", en: "the survivors", note: { es: "Survivors son quienes siguen vivos después de una amenaza mortal o desastre.", en: "Sobrevivientes carries the emotional weight of remaining alive after mass loss." } },
      { es: "la catástrofe", en: "the catastrophe", note: { es: "Catastrophe es más fuerte que disaster y tiene peso emocional y moral.", en: "Catástrofe is heavier than emergencia and invites questions about responsibility." } },
      { es: "el riesgo", en: "the risk", note: { es: "Risk no es daño seguro; combina amenaza con probabilidad calculable.", en: "Riesgo combines danger and probability, so it belongs naturally to prevention language." } }
    ],
    structures: [
      {
        key: "relative-basic",
        label: { es: "Where para situar", en: "Donde for setting" },
        quote: { es: "donde algodón, arroz y comercio sostenían una vida tranquila", en: "where cotton, rice, and trade supported a quiet life" },
        note: {
          es: "Where convierte la ciudad en escenario de la descripción económica.",
          en: "Donde attaches Armero to its economic life and carries no written accent."
        }
      },
      {
        key: "pluperfect",
        label: { es: "Had observed para pasado anterior", en: "Habían observado for earlier past" },
        quote: { es: "Los científicos habían observado señales de actividad", en: "Scientists had observed signs of activity" },
        note: {
          es: "Had observed ordena dos pasados y da peso retrospectivo a las señales.",
          en: "Habían observado places scientific warnings before the night of the disaster."
        }
      },
      {
        key: "concession",
        label: { es: "Although con hecho existente", en: "Aunque plus indicative" },
        quote: { es: "Aunque esas alertas existían", en: "Although those alerts existed" },
        note: {
          es: "Although acepta que las alertas existían antes de contrastarlas con la duda.",
          en: "Aunque existían uses indicative because the alerts are presented as real."
        }
      },
      {
        key: "preterite-vs-imperfect",
        label: { es: "Were waiting como fondo", en: "Imperfect for background" },
        quote: { es: "muchos habitantes dormían o seguían esperando instrucciones claras", en: "many residents were sleeping or still waiting for clear evacuation instructions" },
        note: {
          es: "Were sleeping y were waiting crean fondo narrativo, no eventos cerrados.",
          en: "Dormían and seguían esperando are imperfect background interrupted by the mud's arrival."
        }
      },
      {
        key: "discourse-connectors",
        label: { es: "However para giro", en: "Sin embargo for a pivot" },
        quote: { es: "Sin embargo, también mostraron los límites de un rescate improvisado", en: "However, they also showed the limits of an improvised rescue" },
        note: {
          es: "However cambia de compasión visible a evaluación práctica del rescate.",
          en: "Sin embargo shifts from emotional images to a critique of rescue capacity."
        }
      },
      {
        key: "counterfactual-past",
        label: { es: "Had produced para oportunidad perdida", en: "Hubieran producido for lost chance" },
        quote: { es: "Si las alertas hubieran producido una evacuación temprana", en: "If the alerts had produced an early evacuation" },
        note: {
          es: "Had produced imagina una condición pasada que no ocurrió y subraya la pérdida.",
          en: "Si hubieran producido frames the evacuation as an unreal past possibility."
        }
      }
    ],
    questions: [
      { q: { es: "¿Qué hacía peligroso al Nevado del Ruiz para Armero?", en: "What made Nevado del Ruiz dangerous for Armero?" }, a: { es: "Su nieve podía derretirse durante una erupción y formar lodo volcánico por los ríos.", en: "Its snow could melt during an eruption and form volcanic mud through the rivers." } },
      { q: { es: "¿Qué problema hubo con las alertas antes de la tragedia?", en: "What problem was there with the alerts before the tragedy?" }, a: { es: "Existían señales y mapas, pero el riesgo se comunicó con dudas y poca decisión.", en: "Signals and maps existed, but the risk was communicated with hesitation and little decision." } },
      { q: { es: "¿Por qué fue tan difícil el rescate?", en: "Why was the rescue so difficult?" }, a: { es: "Porque dependía de maquinaria, luz, caminos y coordinación en medio de una destrucción enorme.", en: "Because it depended on machinery, light, roads, and coordination amid enormous destruction." } },
      { q: { es: "¿Qué lección pública deja Armero?", en: "What public lesson does Armero leave?" }, a: { es: "Que escuchar a la ciencia no basta si sus avisos no se convierten en decisiones.", en: "Listening to science is not enough if its warnings are not turned into decisions." } }
    ]
  },
  {
    id: "constitucion-1991",
    band: "B2",
    minutes: 8,
    era: "1991",
    place: { es: "Bogotá y todo el territorio colombiano", en: "Bogotá and all Colombian territory" },
    title: { es: "La carta que abrió puertas", en: "The Charter That Opened Doors" },
    blurb: {
      es: "La Constitución de 1991 nació de crisis, movilización estudiantil y negociación política. Su asamblea amplió derechos, reconoció diversidad y cambió la forma de imaginar el Estado colombiano.",
      en: "The 1991 Constitution was born from crisis, student mobilization, and political negotiation. Its assembly expanded rights, recognized diversity, and changed the way the Colombian state was imagined."
    },
    caveat: {
      es: "Este relato condensa un proceso amplio y todavía discutido. Distintos sectores valoran de manera diferente sus logros, límites, exclusiones y efectos reales en la vida cotidiana.",
      en: "This story condenses a broad process that is still debated. Different sectors judge its achievements, limits, exclusions, and real effects on daily life in different ways."
    },
    paragraphs: [
      {
        es: "A finales de los años ochenta, Colombia vivía asesinatos políticos, violencia del narcotráfico y desconfianza profunda hacia sus instituciones; la Constitución de 1886 seguía vigente, pero muchos ciudadanos sentían que ese marco ya no respondía al país. En universidades y calles creció la idea de convocar una asamblea capaz de escribir un pacto nuevo en medio de miedo y cansancio.",
        en: "By the late 1980s, Colombia was living through political assassinations, drug violence, and deep distrust toward its institutions; the Constitution of 1886 remained in force, but many citizens felt that framework no longer answered the country. In universities and streets, the idea grew of calling an assembly able to write a new pact amid fear and exhaustion."
      },
      {
        es: "El movimiento de la séptima papeleta convirtió una iniciativa estudiantil en un mensaje político difícil de ignorar. Aunque el voto simbólico no tenía un camino constitucional claro, mostró que la reforma podía venir desde la ciudadanía. Ese impulso permitió que elecciones posteriores incluyeran la pregunta sobre convocar una Asamblea Nacional Constituyente.",
        en: "The seventh ballot movement turned a student initiative into a political message that was hard to ignore. Although the symbolic vote did not have a clear constitutional path, it showed that reform could come from citizens. That momentum allowed later elections to include the question of calling a National Constituent Assembly."
      },
      {
        es: "La asamblea reunió partidos tradicionales, movimientos nuevos, indígenas, exguerrilleros desmovilizados y voces que antes casi no entraban al poder. No era una representación perfecta, pero sí más plural que muchas instituciones anteriores del país, y obligó a negociar públicamente temas antes reservados a pactos de élite. En sus debates aparecieron derechos fundamentales, participación ciudadana, autonomía territorial y control judicial sobre el Estado, además de mecanismos de paz.",
        en: "The assembly brought together traditional parties, new movements, Indigenous leaders, demobilized former guerrillas, and voices that had rarely entered power before. It was not perfect representation, but it was more plural than many earlier institutions in the country, and it forced public negotiation of issues once reserved for elite pacts. Its debates raised fundamental rights, citizen participation, territorial autonomy, and judicial control over the state, as well as peace mechanisms."
      },
      {
        es: "El texto final reconoció a Colombia como una nación diversa, con pueblos indígenas, comunidades afrodescendientes y libertad religiosa. También creó la tutela, mecanismo que permite reclamar protección inmediata cuando un derecho fundamental está amenazado. Para millones de personas, esa herramienta convirtió la Constitución en algo que podía tocar la vida diaria, incluso lejos de Bogotá.",
        en: "The final text recognized Colombia as a diverse nation, with Indigenous peoples, Afro-Colombian communities, and religious freedom. It also created the tutela, a mechanism that allows people to claim immediate protection when a fundamental right is threatened. For millions of people, that tool turned the Constitution into something that could touch daily life, even far from Bogotá."
      },
      {
        es: "Sin embargo, ninguna carta política cambia por sí sola la desigualdad, la guerra o la corrupción administrativa. Muchos artículos prometieron un país más incluyente, mientras la realidad seguía mostrando desplazamiento, pobreza y violencia regional. La distancia entre norma y práctica se volvió una pregunta permanente para jueces, gobiernos y movimientos sociales.",
        en: "However, no political charter changes inequality, war, or administrative corruption by itself. Many articles promised a more inclusive country, while reality continued to show displacement, poverty, and regional violence. The distance between rule and practice became a permanent question for judges, governments, and social movements."
      },
      {
        es: "Si la asamblea hubiera fracasado, Colombia habría enfrentado la década siguiente con instituciones aún más cerradas. Su éxito no resolvió todo, pero abrió canales legales para reclamar derechos y discutir diferencias sin pedir permiso. Por eso la Constitución de 1991 es vista como punto de llegada y como tarea inacabada.",
        en: "If the assembly had failed, Colombia would have faced the following decade with even more closed institutions. Its success did not solve everything, but it opened legal channels to claim rights and discuss differences without asking permission. That is why the 1991 Constitution is seen as both an arrival point and an unfinished task."
      },
      {
        es: "Hoy sus defensores celebran la diversidad constitucional, mientras sus críticos señalan promesas incumplidas y reformas pendientes. La historia de la carta muestra que un texto puede ampliar la imaginación política, aunque dependa de luchas posteriores, sentencias y presupuestos, no solo contra leyes abstractas. Leerla es entrar en una conversación nacional sobre quién pertenece, quién decide y quién puede exigir respuestas al poder.",
        en: "Today its defenders celebrate constitutional diversity, while its critics point to unfulfilled promises and pending reforms. The history of the charter shows that a text can expand political imagination, although it depends on later struggles, rulings, and budgets, not only against abstract laws. Reading it means entering a national conversation about who belongs, who decides, and who can demand answers from power."
      }
    ],
    glossary: [
      { es: "la Constitución", en: "the Constitution", note: { es: "Constitution lleva mayúscula cuando nombra la carta política de un país.", en: "Constitución is capitalized when it names a country's specific political charter." } },
      { es: "la asamblea", en: "the assembly", note: { es: "Assembly es un cuerpo que delibera y decide; no es solo una reunión informal.", en: "Asamblea is a deliberative body; here it had authority to draft a new pact." } },
      { es: "la papeleta", en: "the ballot", note: { es: "Ballot es la papeleta u opción de voto, no toda la elección.", en: "Papeleta is the voting paper; the séptima papeleta was symbolic and extra-institutional." } },
      { es: "los derechos", en: "the rights", note: { es: "Rights son protecciones o reclamos jurídicos que una persona puede exigir.", en: "Derechos are enforceable claims before the state, stronger than deseos or valores." } },
      { es: "la tutela", en: "the tutela", note: { es: "Tutela se conserva en inglés porque es un mecanismo constitucional colombiano específico.", en: "Tutela is a Colombian constitutional remedy, so English often keeps the Spanish word." } },
      { es: "la desigualdad", en: "inequality", note: { es: "Inequality sugiere distribución injusta de poder, riqueza u oportunidades.", en: "Desigualdad means unjust inequality, not any neutral difference between people." } },
      { es: "la reforma", en: "the reform", note: { es: "Reform es cambio planificado para mejorar una ley o institución.", en: "Reforma can mean a deep legal change or a narrower institutional adjustment." } },
      { es: "la ciudadanía", en: "citizens", note: { es: "Citizens aquí apunta al público movilizado, no solo a nacionalidad legal.", en: "Ciudadanía can mean citizens acting politically, not only the legal status of citizenship." } }
    ],
    structures: [
      {
        key: "time-since",
        label: { es: "Remained para continuidad", en: "Seguía for ongoing state" },
        quote: { es: "La Constitución de 1886 seguía vigente", en: "The Constitution of 1886 remained in force" },
        note: {
          es: "Remained in force describe una condición legal continua, no un evento puntual.",
          en: "Seguía vigente uses the imperfect for a legal state continuing from before."
        }
      },
      {
        key: "concession",
        label: { es: "Although con obstáculo", en: "Aunque with legal obstacle" },
        quote: { es: "Aunque el voto simbólico no tenía un camino constitucional claro", en: "Although the symbolic vote did not have a clear constitutional path" },
        note: {
          es: "Although concede el obstáculo jurídico antes de mostrar por qué importó el voto.",
          en: "Aunque no tenía concedes a real legal difficulty before the political result."
        }
      },
      {
        key: "relative-advanced",
        label: { es: "That para identificar", en: "Que for identifying voices" },
        quote: { es: "voces que antes casi no entraban al poder", en: "voices that had rarely entered power before" },
        note: {
          es: "That introduce una oración relativa que identifica las voces mencionadas.",
          en: "Que introduces a relative clause identifying which voices had been excluded."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "Is seen como interpretación", en: "Es vista as public interpretation" },
        quote: { es: "es vista como punto de llegada", en: "is seen as both an arrival point" },
        note: {
          es: "Is seen usa pasiva para enfocar la interpretación, no a quienes interpretan.",
          en: "Es vista is passive and focuses on how the Constitution is interpreted publicly."
        }
      },
      {
        key: "discourse-connectors",
        label: { es: "However para matizar", en: "Sin embargo limiting praise" },
        quote: { es: "Sin embargo, ninguna carta política cambia por sí sola", en: "However, no political charter changes" },
        note: {
          es: "However frena el elogio y abre contraste entre norma y práctica.",
          en: "Sin embargo checks celebration and prepares the gap between text and reality."
        }
      },
      {
        key: "counterfactual-past",
        label: { es: "If had failed", en: "Si hubiera fracasado" },
        quote: { es: "Si la asamblea hubiera fracasado", en: "If the assembly had failed" },
        note: {
          es: "If the assembly had failed imagina un pasado alternativo para comparar consecuencias.",
          en: "Si hubiera fracasado is a past counterfactual used to value the real outcome."
        }
      }
    ],
    questions: [
      { q: { es: "¿Qué crisis rodeaban a Colombia antes de la Constitución de 1991?", en: "What crises surrounded Colombia before the 1991 Constitution?" }, a: { es: "Había asesinatos políticos, violencia del narcotráfico y desconfianza hacia las instituciones.", en: "There were political assassinations, drug violence, and distrust toward institutions." } },
      { q: { es: "¿Qué mostró el movimiento de la séptima papeleta?", en: "What did the seventh ballot movement show?" }, a: { es: "Mostró que una reforma constitucional podía venir desde la ciudadanía movilizada.", en: "It showed that constitutional reform could come from mobilized citizens." } },
      { q: { es: "¿Por qué la tutela fue importante para muchos ciudadanos?", en: "Why was the tutela important for many citizens?" }, a: { es: "Porque permitió reclamar protección inmediata cuando un derecho fundamental estaba amenazado.", en: "Because it allowed people to claim immediate protection when a fundamental right was threatened." } },
      { q: { es: "¿Por qué la Constitución se presenta como tarea inacabada?", en: "Why is the Constitution presented as an unfinished task?" }, a: { es: "Porque abrió derechos y canales legales, pero muchas promesas todavía dependen de luchas posteriores.", en: "Because it opened rights and legal channels, but many promises still depend on later struggles." } }
    ]
  },
  {
    id: "casa-arana",
    band: "B2",
    minutes: 8,
    era: "Finales del siglo XIX – comienzos del XX",
    place: { es: "Putumayo amazónico", en: "Amazonian Putumayo" },
    title: { es: "Caucho, deuda y selva", en: "Rubber, Debt, and Forest" },
    blurb: {
      es: "El auge del caucho llevó riqueza internacional al Putumayo, pero también sistemas brutales de deuda, castigo y explotación indígena. Las denuncias contra la Casa Arana revelaron una frontera gobernada por violencia privada.",
      en: "The rubber boom brought international wealth to Putumayo, but also brutal systems of debt, punishment, and Indigenous exploitation. The accusations against Casa Arana revealed a frontier governed by private violence."
    },
    caveat: {
      es: "Este relato aborda abusos extremos documentados por testigos, comisiones e investigadores. Los números exactos, las responsabilidades jurídicas y las memorias indígenas requieren estudios más amplios que esta síntesis.",
      en: "This story addresses extreme abuses documented by witnesses, commissions, and researchers. Exact numbers, legal responsibilities, and Indigenous memories require broader studies than this summary."
    },
    paragraphs: [
      {
        es: "Cuando el caucho se volvió indispensable para bicicletas, cables y fábricas, la Amazonía entró en una economía mundial acelerada, y en el Putumayo, esa demanda llegó a territorios indígenas donde los ríos eran caminos y la selva parecía inagotable. Pero el precio internacional escondía relaciones locales de deuda, amenaza, castigo cotidiano y trabajo forzado, mediante cuadrillas vigiladas, rehenes familiares y castigos que buscaban quebrar autoridades propias.",
        en: "When rubber became essential for bicycles, cables, and factories, the Amazon entered a fast global economy, and in Putumayo, that demand reached Indigenous territories where rivers were roads and the forest seemed inexhaustible. But the international price hid local relationships of debt, threat, daily punishment, and forced labor, through watched work gangs, family hostages, and punishments meant to break local authorities."
      },
      {
        es: "La empresa asociada con Julio César Arana organizó estaciones caucheras que controlaban comercio, transporte y castigos. Aunque sus oficinas hablaban el lenguaje de contratos y exportaciones, muchos trabajadores indígenas vivían bajo coerción directa. Las mercancías adelantadas se convertían en deudas imposibles, y la deuda justificaba nuevas jornadas de recolección bajo vigilancia armada y miedo constante, aunque cada carga entregada dejaba la cuenta casi igual de imposible.",
        en: "The company associated with Julio César Arana organized rubber stations that controlled trade, transport, and punishment. Although its offices spoke the language of contracts and exports, many Indigenous workers lived under direct coercion. Advanced goods became impossible debts, and debt justified new days of collection under armed watch and constant fear, although each delivered load left the account almost as impossible as before."
      },
      {
        es: "Los testimonios describieron golpes, secuestros, hambre y ejecuciones usadas para obligar a comunidades enteras a entregar caucho. No todos los documentos coinciden en cada detalle, pero el patrón de violencia aparece una y otra vez en declaraciones, cartas e investigaciones posteriores, incluidas voces que tuvieron que hablar mediante traductores y misioneros. La selva no estaba vacía; estaba habitada por pueblos que fueron tratados como obstáculos productivos.",
        en: "Testimonies described beatings, kidnappings, hunger, and executions used to force whole communities to deliver rubber. Not every document agrees on every detail, but the pattern of violence appears again and again in statements, letters, and later investigations, including voices that had to speak through translators and missionaries. The forest was not empty; it was inhabited by peoples who were treated as productive obstacles."
      },
      {
        es: "Las denuncias llegaron a la prensa británica porque la compañía buscaba capital y prestigio en Londres. Roger Casement investigó el Putumayo después de haber documentado abusos en el Congo, lo cual dio fuerza internacional al caso. Su informe no detuvo de inmediato la violencia, pero hizo imposible presentarla como rumor local.",
        en: "The accusations reached the British press because the company sought capital and prestige in London. Roger Casement investigated Putumayo after documenting abuses in the Congo, which gave the case international force. His report did not immediately stop the violence, but it made it impossible to present it as a local rumor."
      },
      {
        es: "Colombia y Perú disputaban autoridad en la región, mientras las empresas aprovechaban fronteras débiles, comunicaciones lentas y autoridades incapaces de controlar el territorio, especialmente lejos de capitales, juzgados y periódicos. Sin embargo, reducir el horror a ausencia estatal sería demasiado cómodo para quienes se beneficiaron del negocio. Hubo decisiones, ganancias y silencios que conectaron mercados lejanos con cuerpos amazónicos.",
        en: "Colombia and Peru disputed authority in the region, while companies took advantage of weak borders, slow communications, and authorities unable to control the territory, especially far from capitals, courts, and newspapers. However, reducing the horror to state absence would be too comfortable for those who benefited from the business. There were decisions, profits, and silences that connected distant markets with Amazonian bodies."
      },
      {
        es: "Si la investigación internacional no hubiera presionado a la empresa, muchos abusos habrían quedado enterrados en archivos privados. Aun así, la publicidad no reparó a las comunidades ni devolvió las vidas destruidas por el sistema cauchero. La memoria indígena conserva pérdidas que no caben en balances comerciales ni informes diplomáticos.",
        en: "If the international investigation had not pressured the company, many abuses would have remained buried in private archives. Even so, publicity did not repair the communities or return the lives destroyed by the rubber system. Indigenous memory preserves losses that do not fit in commercial balance sheets or diplomatic reports."
      },
      {
        es: "Hoy la Casa Arana obliga a mirar la modernidad desde el borde oscuro de sus materias primas. Cada llanta antigua y cada cable recuerdan que el progreso también tuvo proveedores invisibles. Contar esta historia exige nombrar el caucho, pero también escuchar a quienes pagaron su verdadero costo en familias, lenguas, territorios, duelos y silencios heredados por generaciones en muchas comunidades amazónicas y ribereñas.",
        en: "Today Casa Arana forces us to view modernity from the dark edge of its raw materials. Every old tire and every cable remind us that progress also had invisible suppliers. Telling this history requires naming rubber, but also listening to those who paid its true cost in families, languages, territories, grief, and silences inherited across generations in many Amazonian and river communities."
      }
    ],
    glossary: [
      { es: "el caucho", en: "rubber", note: { es: "Rubber es materia elástica industrial; aquí carga una historia amazónica violenta.", en: "Caucho is both an Amazonian raw material and a global industrial commodity." } },
      { es: "la deuda", en: "the debt", note: { es: "Debt es deuda u obligación; aquí funciona como instrumento de control.", en: "Deuda becomes a labor trap in the story, not just money someone owes." } },
      { es: "la selva", en: "the forest", note: { es: "Forest es más neutral que jungle y evita presentar la Amazonía como vacía.", en: "Selva names an inhabited tropical forest, not an empty wilderness." } },
      { es: "los castigos", en: "the punishment", note: { es: "Punishment puede nombrar un sistema de castigos, aunque aparezca en singular.", en: "Castigos in the plural points to repeated violent practices, not one punishment." } },
      { es: "la coerción", en: "coercion", note: { es: "Coercion significa obligar mediante presión, amenaza o fuerza.", en: "Coerción is formal language for forcing action through pressure, threat, or violence." } },
      { es: "las denuncias", en: "the accusations", note: { es: "Accusations son señalamientos públicos de abuso que piden investigación.", en: "Denuncias are public or legal accusations, stronger than casual complaints." } },
      { es: "las fronteras", en: "the borders", note: { es: "Borders son límites políticos, aunque en zonas remotas pueden ser inciertos.", en: "Fronteras marks state limits, but in the Amazon it also suggests weak control." } },
      { es: "la memoria", en: "memory", note: { es: "Memory aquí es memoria colectiva indígena, no simple recuerdo personal.", en: "Memoria indígena refers to collective remembrance that may not live in state archives." } }
    ],
    structures: [
      {
        key: "time-since",
        label: { es: "Became para cambio", en: "Se volvió for change" },
        quote: { es: "Cuando el caucho se volvió indispensable", en: "When rubber became essential" },
        note: {
          es: "Became señala un cambio de estado, no una cualidad permanente.",
          en: "Se volvió marks a change from local resource to global industrial necessity."
        }
      },
      {
        key: "concession",
        label: { es: "Although entre fachada y realidad", en: "Aunque contrasting surface and reality" },
        quote: { es: "Aunque sus oficinas hablaban el lenguaje de contratos", en: "Although its offices spoke the language of contracts" },
        note: {
          es: "Although opone el lenguaje legal de las oficinas a la coerción real.",
          en: "Aunque contrasts the company's contract language with coercion on the ground."
        }
      },
      {
        key: "reported-speech",
        label: { es: "Described para reportar evidencia", en: "Describieron reporting evidence" },
        quote: { es: "Los testimonios describieron golpes, secuestros, hambre y ejecuciones", en: "Testimonies described beatings, kidnappings, hunger, and executions" },
        note: {
          es: "Described introduce evidencia testimonial y mantiene distancia con los testigos.",
          en: "Describieron reports testimony without making the narrator a direct witness."
        }
      },
      {
        key: "relative-advanced",
        label: { es: "Which para cláusula completa", en: "Lo cual for a whole clause" },
        quote: { es: "lo cual dio fuerza internacional al caso", en: "which gave the case international force" },
        note: {
          es: "Which comenta la acción anterior completa, no solo el sustantivo cercano.",
          en: "Lo cual comments on Casement's prior investigation, not only on Congo."
        }
      },
      {
        key: "counterfactual-past",
        label: { es: "If had not para pasado alternativo", en: "Si no hubiera for silenced past" },
        quote: { es: "Si la investigación internacional no hubiera presionado a la empresa", en: "If the international investigation had not pressured the company" },
        note: {
          es: "If it had not pressured plantea un pasado alternativo de silencio.",
          en: "Si no hubiera presionado imagines abuses remaining hidden without outside pressure."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "Were treated como pasiva", en: "Fueron tratados as passive" },
        quote: { es: "fueron tratados como obstáculos productivos", en: "were treated as productive obstacles" },
        note: {
          es: "Were treated centra a las víctimas y deja al agente en segundo plano.",
          en: "Fueron tratados centers the affected peoples and backgrounds the many aggressors."
        }
      }
    ],
    questions: [
      { q: { es: "¿Por qué aumentó la demanda de caucho?", en: "Why did demand for rubber grow?" }, a: { es: "Porque bicicletas, cables y fábricas modernas lo volvieron una materia prima indispensable.", en: "Because bicycles, cables, and modern factories made it an essential raw material." } },
      { q: { es: "¿Cómo funcionaba la deuda en las estaciones caucheras?", en: "How did debt work in the rubber stations?" }, a: { es: "Las mercancías adelantadas creaban deudas imposibles que justificaban más recolección forzada.", en: "Advanced goods created impossible debts that justified more forced collection." } },
      { q: { es: "¿Por qué fue importante la investigación internacional?", en: "Why was the international investigation important?" }, a: { es: "Porque convirtió denuncias locales en un caso visible para prensa, gobiernos e inversionistas.", en: "Because it turned local accusations into a visible case for the press, governments, and investors." } },
      { q: { es: "¿Qué advierte el relato sobre la modernidad?", en: "What does the story warn about modernity?" }, a: { es: "Advierte que el progreso industrial puede ocultar proveedores invisibles y costos humanos extremos.", en: "It warns that industrial progress can hide invisible suppliers and extreme human costs." } }
    ]
  },
  {
    id: "leticia-1932",
    band: "B2",
    minutes: 8,
    era: "1932–1933",
    place: { es: "Leticia y el río Amazonas", en: "Leticia and the Amazon River" },
    title: { es: "Una frontera en el río", en: "A Border on the River" },
    blurb: {
      es: "La toma de Leticia por civiles peruanos abrió un conflicto breve entre Colombia y Perú. La guerra mostró cómo una ciudad pequeña podía concentrar orgullo nacional, diplomacia y distancia amazónica.",
      en: "The seizure of Leticia by Peruvian civilians opened a brief conflict between Colombia and Peru. The war showed how a small city could concentrate national pride, diplomacy, and Amazonian distance."
    },
    caveat: {
      es: "Este relato resume un conflicto fronterizo con interpretaciones nacionales distintas. Simplifica operaciones militares, negociaciones diplomáticas y experiencias locales que merecen estudios más detallados.",
      en: "This story summarizes a border conflict with different national interpretations. It simplifies military operations, diplomatic negotiations, and local experiences that deserve more detailed study."
    },
    paragraphs: [
      {
        es: "Leticia era una población pequeña, pero su ubicación sobre el Amazonas la volvía enorme en los mapas nacionales. El tratado Salomón-Lozano había reconocido la soberanía colombiana, aunque muchos peruanos sentían que la cesión había sido injusta. En una frontera de ríos largos y Estado lejano, el papel firmado no siempre cerraba la discusión ni cambiaba lealtades locales construidas por comercio, parentesco y navegación compartida.",
        en: "Leticia was a small town, but its location on the Amazon made it enormous on national maps. The Salomón-Lozano treaty had recognized Colombian sovereignty, although many Peruvians felt the transfer had been unjust. On a border of long rivers and distant government, a signed paper did not always close the discussion or change local loyalties built through trade, kinship, and shared navigation."
      },
      {
        es: "En septiembre de 1932, un grupo de civiles peruanos tomó Leticia y sorprendió a las autoridades colombianas. La acción parecía local al comienzo, pero pronto encendió discursos patrióticos en Bogotá, Lima y las provincias amazónicas, mientras los periódicos presentaron el episodio como prueba de carácter nacional. Nadie quería admitir debilidad, porque la frontera representaba honor tanto como territorio, comercio y acceso futuro al río.",
        en: "In September 1932, a group of Peruvian civilians seized Leticia and surprised Colombian authorities. The action seemed local at first, but it soon ignited patriotic speeches in Bogotá, Lima, and the Amazonian provinces, while newspapers presented the episode as a test of national character. No one wanted to admit weakness, because the border represented honor as much as territory, trade, and future access to the river."
      },
      {
        es: "Colombia tuvo que mover tropas, barcos y aviones hacia una región donde cada kilómetro costaba tiempo y combustible. Por lo tanto, el conflicto enseñó que defender la Amazonía exigía logística antes que discursos desde la capital y ceremonias patrióticas de emergencia, porque todo dependía de motores, mapas incompletos y suministros llevados desde lejos. Los soldados descubrieron que el clima, las enfermedades y los ríos podían ser adversarios tan duros como el enemigo.",
        en: "Colombia had to move troops, ships, and airplanes toward a region where every kilometer cost time and fuel. Therefore, the conflict taught that defending the Amazon required logistics before speeches from the capital and emergency patriotic ceremonies, because everything depended on engines, incomplete maps, and supplies carried from far away. Soldiers discovered that climate, disease, and rivers could be adversaries as hard as the enemy."
      },
      {
        es: "Los combates fueron limitados, pero la tensión creció mientras ambos países buscaban apoyo y justificaban sus posiciones, y la Sociedad de Naciones intervino para administrar provisionalmente Leticia y abrir una salida diplomática aceptable para gobiernos presionados por sus opiniones públicas. Esa mediación permitió que la guerra no se extendiera, aunque las emociones nacionales siguieron encendidas, alimentadas por discursos que convertían el río en frontera moral.",
        en: "The fighting was limited, but tension grew while both countries sought support and justified their positions, and the League of Nations intervened to administer Leticia provisionally and open a diplomatic exit acceptable to governments pressured by their publics. That mediation allowed the war not to spread, although national emotions remained heated, fed by speeches that turned the river into a moral border."
      },
      {
        es: "La muerte del presidente peruano Luis Sánchez Cerro cambió el ambiente político y facilitó nuevas conversaciones. Sin embargo, la solución no fue simple reconciliación, sino un regreso negociado al tratado que ya existía. Leticia volvió a Colombia en 1933, bajo una mirada internacional que buscaba cerrar la crisis y proteger el principio de que los tratados debían cumplirse.",
        en: "The death of Peruvian President Luis Sánchez Cerro changed the political atmosphere and made new talks easier. However, the solution was not simple reconciliation, but a negotiated return to the treaty that already existed. Leticia returned to Colombia in 1933, under an international watch that sought to close the crisis and protect the principle that treaties had to be honored."
      },
      {
        es: "Si el conflicto hubiera escalado, dos países con problemas internos habrían gastado mucho más en una guerra remota. La experiencia dejó lecciones sobre presencia estatal, navegación, aviación y conocimiento real del territorio amazónico. También mostró que una frontera solo es estable cuando sus habitantes sienten que existe algo más que una bandera.",
        en: "If the conflict had escalated, two countries with internal problems would have spent much more on a remote war. The experience left lessons about state presence, navigation, aviation, and real knowledge of Amazonian territory. It also showed that a border is stable only when its residents feel that more than a flag exists there."
      },
      {
        es: "Hoy Leticia es recordada como puerto, ciudad trinacional y símbolo de soberanía recuperada para Colombia. Recordar el conflicto exige mirar más allá del orgullo, hacia las comunidades que vivían el río diariamente. Para ellas, la diplomacia no era una abstracción, sino el marco que decidía comercio, familias, movimiento y confianza cotidiana entre vecinos ribereños acostumbrados a varias autoridades.",
        en: "Today Leticia is remembered as a port, a tri-national city, and a symbol of recovered sovereignty for Colombia. Remembering the conflict requires looking beyond pride, toward the communities that lived the river daily. For them, diplomacy was not an abstraction, but the framework that decided trade, families, movement, and everyday trust among river neighbors used to several authorities."
      }
    ],
    glossary: [
      { es: "la frontera", en: "the border", note: { es: "Border puede ser línea política y zona habitada alrededor de esa línea.", en: "Frontera is both a political line and a lived river region." } },
      { es: "el tratado", en: "the treaty", note: { es: "Treaty es acuerdo formal entre Estados, con peso jurídico internacional.", en: "Tratado is a formal agreement between states, not a private pact." } },
      { es: "la soberanía", en: "sovereignty", note: { es: "Sovereignty es autoridad estatal sobre territorio, población o instituciones.", en: "Soberanía names state authority over territory, which explains the maps and flags." } },
      { es: "los civiles", en: "the civilians", note: { es: "Civilians son personas fuera de las fuerzas armadas.", en: "Civiles contrasts with military forces; that matters because the seizure began irregularly." } },
      { es: "la logística", en: "logistics", note: { es: "Logistics nombra la organización de transporte, equipos y suministros.", en: "Logística covers routes, fuel, transport, and supplies, the practical side of war." } },
      { es: "la mediación", en: "mediation", note: { es: "Mediation es intervención de un tercero para facilitar una salida negociada.", en: "Mediación is third-party intervention to help opponents reach a negotiated exit." } },
      { es: "la aviación", en: "aviation", note: { es: "Aviation incluye aviones y sistemas necesarios para operar vuelos.", en: "Aviación points to aircraft and technical capacity across extreme Amazonian distance." } },
      { es: "la diplomacia", en: "diplomacy", note: { es: "Diplomacy es negociación entre Estados, no simple cortesía personal.", en: "Diplomacia is state negotiation; on a border it shapes daily movement and trade." } }
    ],
    structures: [
      {
        key: "pluperfect",
        label: { es: "Had recognized antes de la toma", en: "Había reconocido before the seizure" },
        quote: { es: "El tratado Salomón-Lozano había reconocido la soberanía colombiana", en: "The Salomón-Lozano treaty had recognized Colombian sovereignty" },
        note: {
          es: "Had recognized ubica el reconocimiento antes del conflicto narrado.",
          en: "Había reconocido places the treaty before the seizure and grounds Colombia's claim."
        }
      },
      {
        key: "concession",
        label: { es: "Although con memoria opuesta", en: "Aunque with competing memory" },
        quote: { es: "aunque muchos peruanos sentían que la cesión había sido injusta", en: "although many Peruvians felt the transfer had been unjust" },
        note: {
          es: "Although introduce una objeción real al resultado jurídico.",
          en: "Aunque introduces the Peruvian grievance without denying the treaty's existence."
        }
      },
      {
        key: "discourse-connectors",
        label: { es: "Therefore para conclusión", en: "Por lo tanto for lesson" },
        quote: { es: "Por lo tanto, el conflicto enseñó", en: "Therefore, the conflict taught" },
        note: {
          es: "Therefore convierte el dato práctico en una conclusión general.",
          en: "Por lo tanto turns logistical difficulty into a lesson about defending the Amazon."
        }
      },
      {
        key: "subjunctive-adverbial",
        label: { es: "Allowed con infinitivo", en: "Permitió que plus subjunctive" },
        quote: { es: "permitió que la guerra no se extendiera", en: "allowed the war not to spread" },
        note: {
          es: "Allowed usa infinitivo en inglés donde el español necesita que y subjuntivo.",
          en: "Permitió que takes subjunctive because it presents the mediation's intended effect."
        }
      },
      {
        key: "counterfactual-past",
        label: { es: "If had escalated", en: "Si hubiera escalado" },
        quote: { es: "Si el conflicto hubiera escalado", en: "If the conflict had escalated" },
        note: {
          es: "If it had escalated usa had para imaginar una guerra mayor no realizada.",
          en: "Si hubiera escalado imagines a wider war that did not happen."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "Is remembered para memoria pública", en: "Es recordada for public memory" },
        quote: { es: "Hoy Leticia es recordada como puerto", en: "Today Leticia is remembered as a port" },
        note: {
          es: "Is remembered usa pasiva para hablar de memoria colectiva.",
          en: "Es recordada is passive and describes public memory rather than one person remembering."
        }
      }
    ],
    questions: [
      { q: { es: "¿Por qué Leticia era importante pese a ser pequeña?", en: "Why was Leticia important despite being small?" }, a: { es: "Porque su ubicación sobre el Amazonas tenía valor estratégico y simbólico para la soberanía.", en: "Because its location on the Amazon had strategic and symbolic value for sovereignty." } },
      { q: { es: "¿Qué enseñó el conflicto sobre la Amazonía?", en: "What did the conflict teach about the Amazon?" }, a: { es: "Enseñó que defenderla requería logística, presencia estatal y conocimiento real del territorio.", en: "It taught that defending it required logistics, state presence, and real knowledge of the territory." } },
      { q: { es: "¿Qué papel tuvo la Sociedad de Naciones?", en: "What role did the League of Nations play?" }, a: { es: "Administró provisionalmente Leticia y ayudó a abrir una salida diplomática.", en: "It provisionally administered Leticia and helped open a diplomatic exit." } },
      { q: { es: "¿Qué significa mirar más allá del orgullo nacional?", en: "What does looking beyond national pride mean?" }, a: { es: "Significa considerar a las comunidades que vivían el río y dependían de la frontera.", en: "It means considering the communities that lived the river and depended on the border." } }
    ]
  },
  {
    id: "control-mision-houston",
    band: "B2",
    minutes: 8,
    era: "Años sesenta – presente",
    place: { es: "Houston, Texas", en: "Houston, Texas" },
    title: { es: "La sala que escucha al espacio", en: "The Room That Listens to Space" },
    blurb: {
      es: "El Centro de Control de Misión en Houston convirtió datos, voces y procedimientos en una forma de explorar el espacio. Su historia mezcla ingeniería, disciplina texana y riesgo humano.",
      en: "Mission Control in Houston turned data, voices, and procedures into a way of exploring space. Its history mixes engineering, Texan discipline, and human risk."
    },
    caveat: {
      es: "Este relato simplifica décadas de programas espaciales y miles de trabajos técnicos. No sustituye historias completas de NASA, de sus contratistas ni de las personas excluidas durante esos años.",
      en: "This story simplifies decades of space programs and thousands of technical jobs. It does not replace full histories of NASA, its contractors, or the people excluded during those years."
    },
    paragraphs: [
      {
        es: "Cuando Estados Unidos decidió llevar astronautas a la Luna, necesitó una sala capaz de pensar con ellos desde la Tierra. Houston fue elegida para albergar el centro tripulado, y Texas sumó espacio, universidades, industria y apoyo político en una época de Guerra Fría. Desde allí, una ciudad petrolera empezó a hablar también el lenguaje de órbitas, antenas, cálculo y responsabilidad compartida.",
        en: "When the United States decided to take astronauts to the Moon, it needed a room able to think with them from Earth. Houston was chosen to host the human spaceflight center, and Texas added space, universities, industry, and political support in a Cold War era. From there, an oil city also began to speak the language of orbits, antennas, calculation, and shared responsibility."
      },
      {
        es: "El Control de Misión no pilotaba las naves como si fueran aviones manejados a distancia. Recibía telemetría, comparaba procedimientos y coordinaba especialistas que vigilaban sistemas eléctricos, combustible, comunicaciones y navegación, y cada dato debía convertirse pronto en una recomendación comprensible para todos. Cada consola representaba una parte del vehículo, pero todas dependían de una conversación común y disciplinada durante horas de vigilancia continua.",
        en: "Mission Control did not fly spacecraft as if they were airplanes driven from a distance. It received telemetry, compared procedures, and coordinated specialists who watched electrical systems, fuel, communications, and navigation, and each data point soon had to become an understandable recommendation for everyone. Each console represented one part of the vehicle, but all depended on a shared and disciplined conversation during hours of continuous watch."
      },
      {
        es: "Durante Apolo 11, Houston siguió el descenso lunar con calma exterior y tensión cuidadosamente controlada. Aunque la frase famosa mencionó a Houston después del alunizaje, detrás de ella había años de simulaciones y errores practicados hasta que el miedo tuviera un método, no solo un gesto heroico frente a cámaras. La sala celebró, pero también entendió que la confianza nacía de repetir emergencias antes de vivirlas.",
        en: "During Apollo 11, Houston followed the lunar descent with outward calm and carefully controlled tension. Although the famous sentence mentioned Houston after the landing, behind it stood years of simulations and rehearsed errors until fear had a method, not only a heroic gesture in front of cameras. The room celebrated, but it also understood that confidence came from repeating emergencies before living them."
      },
      {
        es: "Esa cultura quedó más clara durante Apolo 13, cuando una explosión dañó gravemente la nave camino a la Luna. Los controladores tuvieron que improvisar dentro de límites estrictos, usando listas, cálculos y materiales disponibles para salvar a la tripulación, probando soluciones en tierra antes de pedir que los astronautas las intentaran arriba. Si hubieran confundido creatividad con desorden, la improvisación habría podido aumentar el peligro dentro de una nave ya herida.",
        en: "That culture became clearer during Apollo 13, when an explosion badly damaged the spacecraft on its way to the Moon. Controllers had to improvise within strict limits, using checklists, calculations, and available materials to save the crew, testing solutions on Earth before asking the astronauts to try them above. If they had confused creativity with disorder, improvisation could have increased the danger inside an already wounded spacecraft."
      },
      {
        es: "Con los transbordadores, estaciones espaciales y misiones comerciales, Houston dejó de ser solamente símbolo de la carrera lunar; sin embargo, la idea central siguió igual: convertir información incompleta en decisiones responsables bajo presión. Por eso la palabra procedimiento no suena fría allí, sino cercana a cuidado y supervivencia, porque una instrucción correcta podía separar una alarma manejable de una tragedia.",
        en: "With shuttles, space stations, and commercial missions, Houston stopped being only a symbol of the Moon race; however, the central idea remained the same: turning incomplete information into responsible decisions under pressure. That is why the word procedure does not sound cold there, but close to care and survival, because a correct instruction could separate a manageable alarm from a tragedy."
      },
      {
        es: "La historia también obliga a preguntar quién pudo entrar a esas salas y quién quedó fuera de ellas. Mujeres, afroamericanos y latinos enfrentaron barreras reales, aunque sus aportes a la ciencia espacial fueron creciendo con el tiempo, especialmente cuando nuevas generaciones reclamaron puestos técnicos y reconocimiento profesional. Contar Houston sin esas ausencias produciría una imagen limpia, pero incompleta, del progreso tecnológico.",
        en: "The history also forces us to ask who could enter those rooms and who was kept out of them. Women, African Americans, and Latinos faced real barriers, although their contributions to space science grew over time, especially when new generations claimed technical positions and professional recognition. Telling Houston without those absences would produce a clean, but incomplete, image of technological progress."
      },
      {
        es: "Hoy Control de Misión sigue evocando pantallas, auriculares y voces que responden cuando una nave llama desde lejos. Su poder cultural no viene solo de victorias, sino de la promesa de pensar juntos cuando todo falla. Para estudiantes colombianos de inglés, Houston ofrece una historia estadounidense donde la técnica se vuelve relato humano de cooperación, límites y paciencia, incluso cuando la distancia vuelve frágil cada conversación.",
        en: "Today Mission Control still evokes screens, headsets, and voices that answer when a spacecraft calls from far away. Its cultural power comes not only from victories, but from the promise of thinking together when everything fails. For Colombian students of English, Houston offers an American story where technique becomes human narrative of cooperation, limits, and patience, even when distance makes every conversation fragile."
      }
    ],
    glossary: [
      { es: "los astronautas", en: "astronauts", note: { es: "Astronauts son personas entrenadas para viajar y trabajar en el espacio.", en: "Astronautas has one common form for men and women and belongs to technical public language." } },
      { es: "las órbitas", en: "orbits", note: { es: "Orbits son trayectorias alrededor de un cuerpo por efecto de la gravedad.", en: "Órbitas are calculated paths around a body, not just vueltas in space." } },
      { es: "la telemetría", en: "telemetry", note: { es: "Telemetry es información medida a distancia y enviada para vigilar un sistema.", en: "Telemetría is data measured remotely and sent back for monitoring." } },
      { es: "la consola", en: "the console", note: { es: "Console aquí es puesto de trabajo con pantallas, instrumentos y comunicación.", en: "Consola here means a technical workstation, not a video game device." } },
      { es: "el alunizaje", en: "the landing", note: { es: "Landing es general; lunar landing precisa que se aterriza en la Luna.", en: "Alunizaje is specifically a Moon landing; the alun- part carries the meaning." } },
      { es: "los controladores", en: "controllers", note: { es: "Controllers son especialistas que vigilan sistemas y coordinan decisiones desde tierra.", en: "Controladores monitor systems from Earth; they are not simply remote pilots." } },
      { es: "la tripulación", en: "the crew", note: { es: "Crew nombra al grupo que opera o viaja en una nave.", en: "Tripulación is the crew as a working group inside a craft." } },
      { es: "el procedimiento", en: "procedure", note: { es: "Procedure es una serie ordenada de pasos para reducir errores y riesgo.", en: "Procedimiento can sound cold, but in technical Spanish it means protective steps." } }
    ],
    structures: [
      {
        key: "passive-and-impersonal",
        label: { es: "Was chosen como pasiva", en: "Fue elegida as passive" },
        quote: { es: "Houston fue elegida para albergar el centro tripulado", en: "Houston was chosen to host the human spaceflight center" },
        note: {
          es: "Was chosen enfoca la ciudad seleccionada más que a quienes decidieron.",
          en: "Fue elegida foregrounds Houston and leaves the decision makers unnamed."
        }
      },
      {
        key: "comparison-equality",
        label: { es: "As if they were", en: "Como si fueran" },
        quote: { es: "como si fueran aviones manejados a distancia", en: "as if they were airplanes driven from a distance" },
        note: {
          es: "As if introduce una comparación hipotética, no una descripción literal.",
          en: "Como si triggers fueran because the comparison is imaginary, not literal."
        }
      },
      {
        key: "concession",
        label: { es: "Although antes del giro", en: "Aunque before a shift" },
        quote: { es: "Aunque la frase famosa mencionó a Houston", en: "Although the famous sentence mentioned Houston" },
        note: {
          es: "Although reconoce el dato famoso antes de cambiar el enfoque.",
          en: "Aunque acknowledges the famous phrase before moving to years of preparation."
        }
      },
      {
        key: "counterfactual-past",
        label: { es: "If had confused", en: "Si hubieran confundido" },
        quote: { es: "Si hubieran confundido creatividad con desorden", en: "If they had confused creativity with disorder" },
        note: {
          es: "If they had confused plantea un error hipotético en el pasado.",
          en: "Si hubieran confundido imagines a past mistake to defend disciplined improvisation."
        }
      },
      {
        key: "discourse-connectors",
        label: { es: "However para continuidad", en: "Sin embargo for continuity" },
        quote: { es: "Sin embargo, la idea central siguió igual", en: "However, the central idea remained the same" },
        note: {
          es: "However contrasta cambios tecnológicos con una continuidad central.",
          en: "Sin embargo contrasts changing programs with the room's continuing method."
        }
      },
      {
        key: "relative-basic",
        label: { es: "Where para escenario cultural", en: "Donde for cultural setting" },
        quote: { es: "donde la técnica se vuelve relato humano", en: "where technique becomes human narrative" },
        note: {
          es: "Where presenta el lugar donde la técnica se vuelve relato humano.",
          en: "Donde makes Houston the place where technique becomes human narrative."
        }
      }
    ],
    questions: [
      { q: { es: "¿Por qué Houston fue importante para el programa espacial?", en: "Why was Houston important to the space program?" }, a: { es: "Porque alojó el centro tripulado y coordinó decisiones técnicas desde la Tierra.", en: "Because it hosted the human spaceflight center and coordinated technical decisions from Earth." } },
      { q: { es: "¿Qué hacía el Control de Misión con la telemetría?", en: "What did Mission Control do with telemetry?" }, a: { es: "La recibía, comparaba procedimientos y coordinaba especialistas responsables de sistemas distintos.", en: "It received it, compared procedures, and coordinated specialists responsible for different systems." } },
      { q: { es: "¿Qué mostró Apolo 13 sobre la cultura de la sala?", en: "What did Apollo 13 show about the room's culture?" }, a: { es: "Mostró que la improvisación debía ocurrir dentro de límites estrictos y trabajo disciplinado.", en: "It showed that improvisation had to happen within strict limits and disciplined work." } },
      { q: { es: "¿Qué pregunta social acompaña esta historia técnica?", en: "What social question accompanies this technical history?" }, a: { es: "Pregunta quién pudo entrar a esas salas y quién quedó excluido de ellas.", en: "It asks who could enter those rooms and who was excluded from them." } }
    ]
  },
  {
    id: "hernandez-contra-texas",
    band: "B2",
    minutes: 8,
    era: "1954",
    place: { es: "Jackson County, Texas, y la Corte Suprema", en: "Jackson County, Texas, and the Supreme Court" },
    title: { es: "Un jurado que no los veía", en: "A Jury That Did Not See Them" },
    blurb: {
      es: "Hernandez v. Texas amplió la protección constitucional a mexicano-estadounidenses excluidos de jurados. El caso mostró que la discriminación podía operar fuera de la división legal entre blancos y negros.",
      en: "Hernandez v. Texas extended constitutional protection to Mexican Americans excluded from juries. The case showed that discrimination could operate outside the legal division between white and Black people."
    },
    caveat: {
      es: "Este relato simplifica un caso judicial y su contexto racial. Usa términos históricos con cuidado, porque las categorías legales y sociales cambiaban según lugar, época y poder local.",
      en: "This story simplifies a court case and its racial context. It uses historical terms carefully, because legal and social categories changed according to place, period, and local power."
    },
    paragraphs: [
      {
        es: "En el Texas de mediados del siglo veinte, muchos mexicano-estadounidenses eran tratados como blancos en papeles oficiales. Sin embargo, en escuelas, restaurantes, empleos y tribunales podían enfrentar una segregación que todos reconocían en la práctica, aunque la ley pretendiera no ver esas costumbres cotidianas. Esa contradicción llegó a la Corte Suprema por el caso de Pete Hernandez, trabajador agrícola acusado de asesinato en Jackson County.",
        en: "In mid-twentieth-century Texas, many Mexican Americans were treated as white on official papers. However, in schools, restaurants, jobs, and courts they could face segregation that everyone recognized in practice, although the law claimed not to see those everyday customs. That contradiction reached the Supreme Court through the case of Pete Hernandez, an agricultural worker who was accused of murder in Jackson County."
      },
      {
        es: "Sus abogados no intentaron negar solamente los hechos del proceso, sino cuestionar quién podía juzgarlo. Durante años, ningún mexicano-estadounidense había servido en jurados del condado, aunque la comunidad era numerosa y visible, con negocios, iglesias, periódicos y familias presentes en la vida pública. La exclusión sugería que la igualdad prometida por la ley terminaba antes de entrar a la sala donde se decidía su libertad.",
        en: "His lawyers did not try only to deny the facts of the trial, but to question who could judge him. For years, no Mexican American had served on county juries, although the community was large and visible, with businesses, churches, newspapers, and families present in public life. The exclusion suggested that equality promised by law ended before entering the courtroom where his freedom would be decided."
      },
      {
        es: "Texas respondió que los mexicano-estadounidenses eran legalmente blancos, y que por eso no formaban una clase separada. Esa defensa parecía técnica, pero ignoraba letreros, costumbres y decisiones locales que marcaban una frontera social. Si la Corte aceptaba esa lógica, la discriminación podía esconderse detrás de una etiqueta conveniente en censos, formularios y discursos oficiales, cuando las categorías parecían neutrales.",
        en: "Texas answered that Mexican Americans were legally white, and therefore did not form a separate class. That defense seemed technical, but it ignored signs, customs, and local decisions that marked a social border. If the Court accepted that logic, discrimination could hide behind a convenient label in censuses, forms, and official speeches, when categories seemed neutral."
      },
      {
        es: "El equipo defensor reunió datos sobre apellidos, listas de jurados y ausencia repetida de participación mexicana, y también señaló espacios públicos donde la comunidad era separada, incluida la famosa referencia a baños distintos. La evidencia buscaba demostrar que el problema no era una casualidad estadística, sino un patrón de exclusión sostenido durante generaciones completas, no una casualidad producida por listas pequeñas o simples olvidos administrativos.",
        en: "The defense team gathered data on surnames, jury lists, and repeated absence of Mexican participation, and it also pointed to public spaces where the community was separated, including the famous reference to different restrooms. The evidence sought to show that the problem was not a statistical accident, but a pattern of exclusion sustained across entire generations, not an accident produced by small lists or simple administrative forgetfulness."
      },
      {
        es: "En 1954, la Corte Suprema decidió por unanimidad que la Decimocuarta Enmienda protegía también a esta comunidad, aun cuando los manuales locales no la nombraran como minoría separada. El fallo no absolvió automáticamente a Hernandez, pero anuló la condena porque el jurado había sido seleccionado injustamente. Por lo tanto, la igualdad constitucional se amplió más allá del marco racial que muchos tribunales usaban entonces, y obligó a mirar otros grupos protegidos por la misma promesa.",
        en: "In 1954, the Supreme Court unanimously decided that the Fourteenth Amendment also protected this community, even when local manuals did not name it as a separate minority. The ruling did not automatically acquit Hernandez, but it overturned the conviction because the jury had been selected unfairly. Therefore, constitutional equality expanded beyond the racial framework that many courts used then, and it forced attention to other groups protected by the same promise."
      },
      {
        es: "El caso no terminó con la discriminación contra latinos en Texas, ni resolvió todas las barreras del sistema penal, ni cambió de inmediato la cultura de los condados. Aunque la decisión fue importante, su cumplimiento dependía de abogados, comunidades y jueces dispuestos a mirar prácticas locales. Un principio nacional necesita pruebas concretas cuando la exclusión se disfraza de costumbre, especialmente cuando todos dicen que siempre se ha hecho así.",
        en: "The case did not end discrimination against Latinos in Texas, or solve all the barriers of the criminal system, or immediately change the culture of the counties. Although the decision was important, its enforcement depended on lawyers, communities, and judges willing to examine local practices. A national principle needs concrete evidence when exclusion disguises itself as custom, especially when everyone says it has always been done that way."
      },
      {
        es: "Hoy el caso Hernandez contra Texas recuerda que los derechos civiles no pertenecen a una sola historia racial. También enseña que un jurado representa más que un trámite, porque decide quién participa en la voz pública de la justicia. Para lectores colombianos, el caso muestra cómo una palabra legal puede ocultar jerarquías muy reales en juzgados, baños, escuelas y urnas de jurado.",
        en: "Today the Hernandez v. Texas case reminds us that civil rights do not belong to a single racial history. It also teaches that a jury represents more than a procedure, because it decides who participates in the public voice of justice. For Colombian readers, the case shows how a legal word can hide very real hierarchies in courts, restrooms, schools, and jury boxes."
      }
    ],
    glossary: [
      { es: "el jurado", en: "the jury", note: { es: "Jury es el grupo ciudadano seleccionado para escuchar un caso y decidir hechos.", en: "Jurado is the citizen body that decides facts, not the professional judge." } },
      { es: "los tribunales", en: "the courts", note: { es: "Courts son instituciones judiciales, aunque también puede referirse a salas físicas.", en: "Tribunales are judicial institutions; context decides whether the building is meant." } },
      { es: "la segregación", en: "segregation", note: { es: "Segregation es separación impuesta entre grupos por poder social o legal.", en: "Segregación is imposed separation backed by social or legal power." } },
      { es: "la exclusión", en: "the exclusion", note: { es: "Exclusion nombra dejar a alguien fuera de un derecho o proceso.", en: "Exclusión means being kept out of a right, place, or process." } },
      { es: "la defensa", en: "the defense", note: { es: "Defense puede ser el equipo legal o el argumento contra una acusación.", en: "Defensa can mean the lawyers or the legal strategy against an accusation." } },
      { es: "la evidencia", en: "the evidence", note: { es: "Evidence son datos o pruebas presentados para sostener una afirmación.", en: "Evidencia is proof or data in an argument; it is not obviousness here." } },
      { es: "el fallo", en: "the ruling", note: { es: "Ruling es decisión judicial que resuelve una cuestión legal.", en: "Fallo is a judicial decision; it is a false friend with English failure." } },
      { es: "los derechos civiles", en: "civil rights", note: { es: "Civil rights son protecciones legales contra discriminación y exclusión pública.", en: "Derechos civiles names protections against discrimination and public exclusion." } }
    ],
    structures: [
      {
        key: "discourse-connectors",
        label: { es: "However contra los papeles", en: "Sin embargo against paperwork" },
        quote: { es: "Sin embargo, en escuelas, restaurantes, empleos y tribunales", en: "However, in schools, restaurants, jobs, and courts" },
        note: {
          es: "However contrasta clasificación oficial y experiencia social cotidiana.",
          en: "Sin embargo opposes official whiteness to lived segregation in public places."
        }
      },
      {
        key: "concession",
        label: { es: "Although con comunidad visible", en: "Aunque with visible community" },
        quote: { es: "aunque la comunidad era numerosa y visible", en: "although the community was large and visible" },
        note: {
          es: "Although muestra que la ausencia no se debía a falta de población.",
          en: "Aunque shows that jury exclusion cannot be explained by lack of population."
        }
      },
      {
        key: "reported-speech",
        label: { es: "Answered that para postura legal", en: "Respondió que for legal position" },
        quote: { es: "Texas respondió que los mexicano-estadounidenses eran legalmente blancos", en: "Texas answered that Mexican Americans were legally white" },
        note: {
          es: "Answered that introduce la posición del Estado sin adoptarla.",
          en: "The Spanish phrase respondió que reports Texas's argument without endorsing it as true."
        }
      },
      {
        key: "real-conditionals",
        label: { es: "If accepted en argumento", en: "Si aceptaba within an argument" },
        quote: { es: "Si la Corte aceptaba esa lógica", en: "If the Court accepted that logic" },
        note: {
          es: "If accepted plantea una consecuencia posible dentro del razonamiento legal.",
          en: "Si aceptaba presents a possible consequence inside the Court's reasoning."
        }
      },
      {
        key: "passive-and-impersonal",
        label: { es: "Had been selected", en: "Había sido seleccionado" },
        quote: { es: "el jurado había sido seleccionado injustamente", en: "the jury had been selected unfairly" },
        note: {
          es: "Had been selected combina pasado perfecto y pasiva para una injusticia previa.",
          en: "Había sido seleccionado combines pluperfect and passive for an earlier procedural injustice."
        }
      },
      {
        key: "negated-opinion",
        label: { es: "Do not belong para replantear", en: "No pertenecen to reframe" },
        quote: { es: "no pertenecen a una sola historia racial", en: "do not belong to a single racial history" },
        note: {
          es: "Do not belong niega una idea general y replantea la historia.",
          en: "No pertenecen negates a broad assumption and opens a wider civil rights frame."
        }
      }
    ],
    questions: [
      { q: { es: "¿Qué contradicción enfrentaban muchos mexicano-estadounidenses en Texas?", en: "What contradiction did many Mexican Americans face in Texas?" }, a: { es: "Eran tratados como blancos en papeles, pero sufrían segregación en la práctica.", en: "They were treated as white on paper, but faced segregation in practice." } },
      { q: { es: "¿Qué cuestionaron los abogados de Hernandez?", en: "What did Hernandez's lawyers question?" }, a: { es: "Cuestionaron quién podía juzgarlo y la exclusión de mexicano-estadounidenses de los jurados.", en: "They questioned who could judge him and the exclusion of Mexican Americans from juries." } },
      { q: { es: "¿Qué decidió la Corte Suprema en 1954?", en: "What did the Supreme Court decide in 1954?" }, a: { es: "Decidió que la Decimocuarta Enmienda también protegía a esa comunidad excluida.", en: "It decided that the Fourteenth Amendment also protected that excluded community." } },
      { q: { es: "¿Por qué el caso sigue siendo importante?", en: "Why does the case remain important?" }, a: { es: "Porque muestra que una categoría legal puede ocultar jerarquías sociales reales.", en: "Because it shows that a legal category can hide real social hierarchies." } }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = { storyItems };
