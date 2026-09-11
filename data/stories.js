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
  }
];

if (typeof module !== "undefined" && module.exports) module.exports = { storyItems };
