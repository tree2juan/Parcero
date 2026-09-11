/*
 * Lesson block: foundation / finding, reaching and returning.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Each lesson spines on exactly one verb from data/curriculum.js — encontrar,
 * llamar and volver — named in its `verb` field so the coverage report can
 * prove the curriculum is taught rather than merely listed. These three are the
 * everyday machinery of getting hold of things and people: finding the shop,
 * ringing the technician, going back for more.
 *
 * The two directions are mirrors: same number of dialogue turns, vocabulary
 * entries, culture notes, pitfalls, variations and practice questions, telling
 * one situation twice. In `es` an English speaker (Alex) learns Colombian
 * Spanish on the ground in Colombia; in `en` a Colombian (Alejandra) learns
 * English abroad. That symmetry is enforced by the schema tests, not by hope.
 */
lessons.push(
  {
    id: "finding-a-hardware-store-that-moved",
    level: "Starter · Getting around",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "shopping-and-money",
    register: "courteous",
    verb: "encontrar",
    review: "pending",
    es: {
      title: "Looking for a hardware store that moved",
      situation:
        "Alex needs two screws and a lightbulb, and a friend swore the hardware store was on this corner. It is not. He has spent half an hour circling the block with his cell phone map, which insists the place is exactly where he is standing, and there is clearly nothing there. He cannot find the shop anywhere, so he gives up and asks the man sweeping the entrance of the place next door.",
      setting: {
        who: "Don Fabio has run the corner stationery shop for twenty years and knows every business that has come and gone on the block. Alex is a newcomer who trusts his phone more than the street, which is exactly the wrong way round here.",
        what: "A short exchange on the sidewalk: one lost foreigner, one shopkeeper who has given these directions a hundred times.",
        when: "Late morning on a gray Tuesday, the quiet hour before lunch when there is time to help a stranger.",
        where: "Bogotá, a working commercial block in Chapinero where shops move premises but keep their names and their regulars.",
        why: "Because Alex will be back on this block for screws, paint and keys for years, and the man he asks today is the man he asks every time after. Getting the tone right is worth more than the two bolts."
      },
      address: {
        form: "usted",
        who: "Don Fabio uses usted with Alex, and Alex uses usted back — the default between strangers in Bogotá.",
        why: "In the capital, usted is the safe, neutral form with anyone you do not know, regardless of age. It is neither cold nor formal here; it is simply what you use with a shopkeeper you have just met while asking a favor.",
        ifYouSwitch:
          "Tú would not offend Don Fabio, but from a stranger it moves a little fast and can sound like you have decided you are already friends. Vos would mark Alex out instantly as someone who learned his Spanish in Medellín, not Bogotá."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Perdone, ¿usted sabe dónde queda la ferretería El Tornillo? No la encuentro por acá.",
          translation: "Excuse me, do you know where the El Tornillo hardware shop is? I can't find it around here.",
          pronunciation: "per-DOH-neh, oos-TED SAH-beh DON-deh KEH-da la feh-rreh-teh-REE-a el tor-NEE-yoh? no la en-KWEN-troh por a-KAH",
          literal: "Pardon, you know where stays the hardware-shop the Screw? Not it I-find around here.",
          why: "Two everyday verbs do the heavy lifting. “Queda” asks where a fixed place sits, and “no la encuentro” — the present of encontrar — is how you say you cannot find something right now, not that you never do."
        },
        {
          speaker: "Don Fabio",
          target: "Uy, esa se cambió de local hace rato. Ahí ya no la encuentra.",
          translation: "Oof, that one changed premises a good while ago. You won't find it there anymore.",
          pronunciation: "wee, EH-sa se kam-BYOH de loh-KAL AH-seh RAH-toh. a-EE ya no la en-KWEN-tra",
          literal: "Oof, that itself changed of premises makes while. There already not it you-find.",
          why: "He answers with the usted form “encuentra” against Alex's “encuentro”, so the same verb flips ending by who is doing the finding. “Hace rato” is Colombian for a good stretch of time, not the “a moment ago” a textbook suggests."
        },
        {
          speaker: "Alex",
          target: "Con razón. Llevo media hora dando vueltas y no hallo nada.",
          translation: "That explains it. I've been going in circles for half an hour and I can't find a thing.",
          pronunciation: "kon rrah-SON. YEH-boh MEH-dya OH-ra DAN-doh BWEL-tas ee no AH-yoh NA-da",
          literal: "With reason. I-carry half hour giving turns and not I-find nothing.",
          why: "“No hallo” swaps in hallar for encontrar — homelier, very Colombian, and no more formal than “no encuentro”. “Llevo media hora + gerund” is the standard frame for how long something has been going on."
        },
        {
          speaker: "Don Fabio",
          target: "Tranquilo. Camine derecho y a media cuadra se encuentra con una panadería; al lado está la nueva.",
          translation: "No worries. Walk straight on and half a block down you'll come across a bakery; the new one is right beside it.",
          pronunciation: "tran-KEE-loh. ka-MEE-neh deh-REH-choh ee a MEH-dya KWA-dra se en-KWEN-tra kon OO-na pa-na-deh-REE-a; al LA-doh es-TA la NWEH-ba",
          literal: "Calm. Walk straight and at half block itself finds with a bakery; to-the side is the new.",
          why: "“Se encuentra con” — encontrar turned reflexive and given “con” — is to come across something without looking for it. The bare verb would just mean to find; the reflexive plus con is what carries the sense of stumbling upon."
        },
        {
          speaker: "Alex",
          target: "Ah, de una. Y eso que esta mañana me encontré con el vecino y me quiso explicar, pero no le entendí.",
          translation: "Ah, got it. And to think this morning I ran into my neighbor and he tried to explain, but I didn't catch it.",
          pronunciation: "ah, de OO-na. ee EH-soh ke ES-ta ma-NYA-na me en-kon-TREH kon el be-SEE-noh ee me KEE-soh eks-pli-KAR, PEH-roh no le en-ten-DEE",
          literal: "Ah, of one. And that this morning me I-found with the neighbor and me he-wanted explain, but not to-him I-understood.",
          why: "“Me encontré con” in the preterite is running into a person by chance. The “con” is not optional here: drop it and “encontré al vecino” quietly says you went out looking for him and succeeded."
        },
        {
          speaker: "Don Fabio",
          target: "Eso pasa. Si no la encuentra, se devuelve y me pregunta, que yo le digo.",
          translation: "It happens. If you can't find it, come back and ask me, and I'll tell you.",
          pronunciation: "EH-soh PA-sa. see no la en-KWEN-tra, se deh-BWEL-beh ee me preh-GOON-ta, ke yo le DEE-goh",
          literal: "That happens. If not it you-find, yourself you-return and me you-ask, that I to-you tell.",
          why: "“Si no la encuentra” uses the plain present where English reaches for a future, which is how Spanish routinely handles a real, likely condition. “Se devuelve” is the colloquial come-back-here you will meet properly in the volver lesson."
        }
      ],
      vocabulary: [
        {
          term: "encontrar",
          explanation:
            "The core verb for finding: locating a thing you were after, or coming upon something by chance. The stem breaks to “encuentro, encuentra” in the present.",
          literal: "to find",
          useWhen:
            "You are looking for an object, a place or an answer and want to say whether you have got it — “no lo encuentro”, “ya lo encontré”.",
          avoidWhen:
            "You mean you formed an opinion of something. “Lo encontré difícil” for “I found it hard” is an anglicism; Colombians say “me pareció difícil”.",
          register: "neutral",
          region: "Universal Spanish; the o→ue stem change is constant across every dialect.",
          related: ["hallar", "buscar", "ubicar", "dar con"],
          example: {
            target: "No la encuentro por acá.",
            translation: "I can't find it around here."
          }
        },
        {
          term: "no lo/la encuentro",
          explanation:
            "The present-tense way to say you cannot find something at this moment. Spanish uses the plain present where English needs the modal “can't”.",
          literal: "I don't find it",
          useWhen:
            "You are still searching and coming up empty — a shop, your keys, a name in a list. It is the live, in-progress version of not finding.",
          avoidWhen:
            "You want the flat past fact “I didn't find it”, which is “no lo encontré”. The present is for the search that is still on.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic.",
          related: ["no lo veo", "no doy con él", "no aparece", "no lo ubico"],
          example: {
            target: "No lo encuentro por ningún lado.",
            translation: "I can't find it anywhere."
          }
        },
        {
          term: "no hallo",
          explanation:
            "Hallar is the homely twin of encontrar. “No hallo” means exactly “no encuentro”, only warmer and more spoken; “no hallo qué hacer” means you are at a loss.",
          literal: "I don't find",
          useWhen:
            "Talking, especially in the Andean interior, where “no hallo” slips out more naturally than the tidier “no encuentro”.",
          avoidWhen:
            "A formal document or an exam answer, where “encontrar” is the safer default and “hallar” can read as regional.",
          register: "friendly informal",
          region: "Very Colombian; heard right across the country and much of Latin America in speech.",
          related: ["no encuentro", "no doy con", "ni rastro", "no sé qué hacer"],
          example: {
            target: "No hallo las llaves por ninguna parte.",
            translation: "I can't find the keys anywhere."
          }
        },
        {
          term: "encontrarse con",
          explanation:
            "Encontrar made reflexive and given “con”: to come across a thing, or to run into a person, without having gone looking.",
          literal: "to find oneself with",
          useWhen:
            "A landmark appears on your route, or you bump into someone unplanned — “te encuentras con un semáforo”, “me encuentro con ella siempre”.",
          avoidWhen:
            "The meeting was arranged. A planned get-together is “quedar con” or “reunirse con”, never “encontrarse con”.",
          register: "neutral",
          region: "General Colombian; universal Spanish construction.",
          related: ["toparse con", "cruzarse con", "dar con", "tropezarse con"],
          example: {
            target: "A media cuadra se encuentra con una panadería.",
            translation: "Half a block down you'll come across a bakery."
          }
        },
        {
          term: "me encontré con",
          explanation:
            "The preterite of running into someone by chance. The “con” is doing essential work: it marks the meeting as accidental.",
          literal: "myself I-found with",
          useWhen:
            "Telling someone about an unplanned encounter — “ayer me encontré con Sofía en el Éxito”.",
          avoidWhen:
            "You want to say you met someone for the first time; that is “conocí a”. And a planned meeting is “quedé con”.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["me topé con", "me crucé con", "quedé con", "nos vimos"],
          example: {
            target: "Esta mañana me encontré con el vecino.",
            translation: "This morning I ran into my neighbor."
          }
        },
        {
          term: "¿dónde queda?",
          explanation:
            "The everyday way to ask where a fixed place is. Quedar for location is the Colombian workhorse, more common than “¿dónde está?” for shops and streets.",
          literal: "where does it stay?",
          useWhen:
            "Asking after a shop, a street, a building, an office — anything rooted in one spot.",
          avoidWhen:
            "Asking where a movable thing or a person is right now; there you want “¿dónde está?”.",
          register: "neutral",
          region: "Extremely common in Colombia; “quedar” for location is standard here.",
          related: ["¿dónde está?", "¿por dónde es?", "¿queda lejos?", "¿hacia dónde queda?"],
          example: {
            target: "¿Usted sabe dónde queda la ferretería?",
            translation: "Do you know where the hardware shop is?"
          }
        },
        {
          term: "dar vueltas",
          explanation:
            "To go round in circles — wandering, lost, or unable to settle. Said of a person hunting for a place they cannot find.",
          literal: "to give turns",
          useWhen:
            "Describing being lost on foot or in a car, or, figuratively, going over the same problem without progress.",
          avoidWhen:
            "You mean a single turn or U-turn; that is “dar la vuelta”, which is a different action entirely.",
          register: "friendly informal",
          region: "General Colombian and pan-Hispanic.",
          related: ["perderse", "andar perdido", "dar la vuelta", "devolverse"],
          example: {
            target: "Llevo media hora dando vueltas.",
            translation: "I've been going in circles for half an hour."
          }
        }
      ],
      note:
        "The whole lesson turns on one small word: “con”. “Encontrar algo” is finding a thing you were after; “encontrarse con alguien” is running into a person you were not. Drop the “con” and “encontré a mi vecino” quietly claims you went hunting for him. And when a bogotano says “no hallo”, hear nothing more formal than “no encuentro” — hallar is just the homelier word for the same act.",
      culture: [
        {
          label: "Directions run on landmarks, not numbers",
          body:
            "Bogotá has one of Latin America's most logical address grids — calles run one way, carreras the other, and the numbers tell you almost exactly where you are. And yet when you ask a person, you get a bakery, a traffic light and a yellow building, never “Calle 57 número 9-23”. The grid is for writing addresses down; landmarks are for finding them on foot. Learn to take directions in bakeries and corners."
        },
        {
          label: "Shops move but keep their name and their regulars",
          body:
            "A ferretería, a papelería or a peluquería will shift half a block or around the corner when the rent jumps, and simply carry the same sign to the new door. Regulars follow by word of mouth; nobody updates the map for months. This is why the man next door is a better source than your phone: he watched the place move, and he has been redirecting lost customers ever since it did."
        },
        {
          label: "Hallar is the kitchen-table word for find",
          body:
            "Textbooks teach encontrar and stop there, but half of Colombia reaches first for hallar in speech. “No hallo las llaves”, “no hallo qué ponerme”, “no me hallo en esta ciudad” — that last one meaning you cannot settle, cannot feel at home. Hallar carries a faint warmth encontrar lacks, and hearing it should tell you the conversation has relaxed into everyday register, not climbed into a formal one."
        },
        {
          label: "A stranger would rather guess than fail you",
          body:
            "Colombian helpfulness has a famous side effect: rather than admit they do not know, some people will give you confident, invented directions, because leaving you empty-handed feels ruder than being wrong. It comes from warmth, not malice. The defense is to ask two or three people and trust the version they agree on, and to treat a landmark you can verify — a bakery, a bank — as worth more than a precise-sounding street number."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “Encontré a mi vecino” to mean you bumped into him",
          whyItFails:
            "Without “con”, encontrar takes the person as a plain object and implies you were looking for him and found him. For an accidental meeting the reflexive is obligatory.",
          sayInstead: "Me encontré con mi vecino."
        },
        {
          mistake: "Saying “Estoy buscando por la ferretería”",
          whyItFails:
            "Buscar already contains the “for”; adding “por” is a word-for-word calque of English “look for”. It marks you instantly as translating in your head.",
          sayInstead: "Estoy buscando la ferretería."
        },
        {
          mistake: "Asking “¿Dónde es la ferretería?” for a shop's location",
          whyItFails:
            "Ser fixes the location of an event — “¿dónde es la fiesta?” — but for a standing place Colombians use quedar or estar. With a shop, “es” sounds off.",
          sayInstead: "¿Dónde queda la ferretería?"
        },
        {
          mistake: "Saying “Lo encontré muy difícil” for “I found it very hard”",
          whyItFails:
            "Using encontrar for a judgment is an English pattern grafted onto Spanish. Colombians express the opinion with parecer or with “se me hizo”, not with encontrar.",
          sayInstead: "Me pareció muy difícil. / Se me hizo muy difícil."
        }
      ],
      variations: [
        {
          form: "No la encuentro.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The plain default for “I can't find it”, good anywhere and with anyone."
        },
        {
          form: "No la hallo.",
          register: "friendly informal",
          region: "Colombia, especially the Andean interior",
          whenToUse: "Relaxed speech, when the tidy “encuentro” would feel a shade stiff."
        },
        {
          form: "No doy con ella.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic",
          whenToUse: "You have tried and keep missing it — a stronger “I just can't hit on it”."
        },
        {
          form: "¿Usted sabe dónde queda, por casualidad?",
          register: "polite formal",
          region: "General Colombian, usted country",
          whenToUse: "Opening the question politely to a stranger you are asking a favor of."
        },
        {
          form: "¿Por dónde es que queda eso?",
          register: "friendly informal",
          region: "Bogotá and general Colombian",
          whenToUse: "A casual, almost mumbled version between people already chatting."
        }
      ],
      prompt: "Alex says “esta mañana me encontré con el vecino.” What actually happened?",
      choices: [
        "He set out deliberately to track his neighbor down and eventually managed to find him at home.",
        "He ran into his neighbor by chance this morning, with neither of them having planned the meeting.",
        "He arranged the night before to meet his neighbor and the two of them sat down together to talk."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Don Fabio says “esa se cambió de local hace rato.” What is he telling Alex?",
          choices: [
            "That the hardware shop shut down for good a long time ago and is never coming back to the block.",
            "That the shop relocated a good while back, so it is no longer at the corner Alex is standing on.",
            "That the shop is only open in the afternoons and happens to be closed for lunch at this hour."
          ],
          answer: 1,
          tests: "“cambiarse de local” as relocating, and “hace rato” as a long while"
        },
        {
          prompt: "Why does Alex reach for “no hallo nada” instead of “no encuentro nada”?",
          choices: [
            "Because “hallar” is the homely, thoroughly Colombian everyday word for finding, no more formal than encontrar.",
            "Because “hallar” is a stiff, legalistic term he would only ever use when filling out an official report.",
            "Because “hallar” specifically means to find money or objects that another person has accidentally dropped."
          ],
          answer: 0,
          tests: "hallar as a colloquial synonym of encontrar, not a register shift"
        },
        {
          prompt: "Don Fabio says “se encuentra con una panadería.” What is the bakery here?",
          choices: [
            "A shop that is closed, so Alex should wait outside its door until somebody comes along to help him.",
            "A place Alex must go into and ask the staff behind the counter for the rest of the directions himself.",
            "A landmark he'll come across along the way, telling him the hardware shop is now just beside that point."
          ],
          answer: 2,
          tests: "“encontrarse con” as coming upon a landmark, not meeting a person"
        },
        {
          prompt: "Alex wants to ask a stranger where the shop sits. Which question is the natural Colombian one?",
          choices: [
            "¿Dónde queda la ferretería? — quedar for a place that stays put in one spot.",
            "¿Dónde va la ferretería? — ir, as if asking which way the shop itself travels.",
            "¿Dónde tiene la ferretería? — tener, as if asking who is holding the shop."
          ],
          answer: 0,
          tests: "quedar as the location verb for a fixed place"
        }
      ]
    },
    en: {
      title: "Buscar una ferretería que se cambió de sitio",
      situation:
        "Alejandra necesita dos tornillos y un bombillo, y una amiga le juró que la tienda quedaba en esta esquina. No queda. Lleva media hora dando vueltas a la manzana con un mapa en el celular que insiste en que el sitio está justo donde ella está parada, y claramente no está. Se rinde y le pregunta al señor que barre la entrada de la tienda de al lado.",
      setting: {
        who: "Frank lleva veinte años con la papelería de la esquina y conoce cada negocio que ha pasado por la cuadra. Alejandra es recién llegada y le cree más al celular que a la calle, que es justo al revés de como funciona.",
        what: "Un intercambio corto en la acera: una extranjera perdida y un tendero que ya ha dado estas indicaciones cien veces.",
        when: "A media mañana de un martes gris, la hora tranquila antes del almuerzo en que hay tiempo para ayudar a alguien.",
        where: "Houston, una cuadra comercial de trabajo donde las tiendas cambian de local pero conservan el nombre y la clientela.",
        why: "Porque Alejandra va a volver a esta cuadra por tornillos, pintura y llaves durante años, y el señor al que le pregunta hoy es el mismo al que le preguntará siempre. Acertar con el tono vale más que los dos tornillos."
      },
      address: {
        form: "mixed",
        who: "Frank y Alejandra se tratan por el nombre de pila y comparten el mismo “you” desde la primera palabra.",
        why: "El inglés tiene una sola segunda persona, así que el registro lo carga el vocabulario: “excuse me” y “no worries” marcan la cortesía y la cercanía que en español harían usted y tú. El respeto está en las palabras escogidas, no en el pronombre.",
        ifYouSwitch:
          "Decirle “sir” a Frank no ofendería, pero lo envejecería y pondría un mostrador entre los dos. En inglés estadounidense corriente, entre desconocidos amables, el nombre de pila y un “thanks” bastan."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Excuse me, do you know where Dwyer's Hardware is? I can't find it around here.",
          translation: "Perdone, ¿sabe dónde queda la ferretería Dwyer's? No la encuentro por acá.",
          pronunciation: "eks-KIUS mi, du yu nou uér DUAI-ers JARD-uer? ai kant faind it a-RAUND jir",
          literal: "Disculpe, ¿sabe usted dónde está la ferretería de Dwyer? Yo no puedo encontrar eso alrededor aquí.",
          why: "El inglés dice “I can't find it”, con el modal “can't”, donde el español usa el presente pelado “no la encuentro”. Traducir “no la encuentro” como “I don't find it” es el calco que hay que evitar."
        },
        {
          speaker: "Frank",
          target: "Oh, that one moved a while back. You won't find it there anymore.",
          translation: "Uy, esa se cambió hace rato. Ahí ya no la encuentra.",
          pronunciation: "ou, dat uán muvd a UAIL bak. yu uont faind it der eni-MOR",
          literal: "Oh, esa una se-movió un rato atrás. Tú no-vas-a encontrar eso ahí ya-más.",
          why: "“Moved” a secas sirve para “se cambió de local”; el inglés no necesita “premises”. Y “anymore”, una sola palabra al final, es el “ya no” del español partido en dos y mandado al final de la frase."
        },
        {
          speaker: "Alejandra",
          target: "That explains it. I've been going around in circles for half an hour and I can't find a thing.",
          translation: "Con razón. Llevo media hora dando vueltas y no encuentro nada.",
          pronunciation: "dat eks-PLEINS it. aiv bin GOU-ing a-RAUND in SER-kols for jaf an AUer and ai kant faind a zing",
          literal: "Eso explica ello. He estado yendo alrededor en círculos por media hora y no puedo encontrar una cosa.",
          why: "“I've been going” es presente perfecto continuo, la forma para algo que empezó antes y sigue pasando — el equivalente exacto de “llevo media hora + gerundio”. Es el tiempo verbal que los hispanohablantes tienden a saltarse."
        },
        {
          speaker: "Frank",
          target: "No worries. Walk straight on and half a block down you'll run into a bakery; the new store's right next to it.",
          translation: "Tranquila. Camine derecho y a media cuadra se encuentra con una panadería; la nueva tienda queda justo al lado.",
          pronunciation: "nou UO-ris. uok streit on and jaf a blok daun yul ran IN-tu a BEIK-eri; da niu stors rait nekst tu it",
          literal: "No preocupaciones. Camina derecho y media cuadra abajo tú vas-a correr adentro-a una panadería; la nueva tienda derecho junto a ello.",
          why: "“Run into” es un phrasal verb que sirve igual para toparse con un lugar y para encontrarse con una persona — el mismo doble uso de “encontrarse con”. El “into” es la parte que no se puede quitar."
        },
        {
          speaker: "Alejandra",
          target: "Ah, got it. This morning I actually ran into my neighbor and he tried to explain, but I didn't catch it.",
          translation: "Ah, ya. Esta mañana de hecho me encontré con el vecino y trató de explicarme, pero no le entendí.",
          pronunciation: "ah, GA-rit. dis MOR-ning ai AK-chu-a-li ran IN-tu mai NEI-bor and ji traid tu eks-PLEIN, bat ai DID-ent kach it",
          literal: "Ah, ya. Esta mañana yo de-hecho corrí adentro-a mi vecino y él trató de explicar, pero yo no atrapé eso.",
          why: "Cuidado con “actually”: no es “actualmente”, sino “de hecho, en realidad”. Aquí refuerza la sorpresa, no el tiempo. Y “ran into” vuelve, esta vez con una persona, tal como “me encontré con el vecino”."
        },
        {
          speaker: "Frank",
          target: "It happens. If you can't find it, come back and ask me — I'll point you the right way.",
          translation: "Eso pasa. Si no la encuentra, se devuelve y me pregunta, que yo le indico.",
          pronunciation: "it JA-pens. if yu kant faind it, kam bak and ask mi — ail point yu da rait uei",
          literal: "Eso pasa. Si tú no puedes encontrar eso, ven atrás y pregunta a-mí — yo apuntaré a-ti el correcto camino.",
          why: "“Come back”, phrasal de dos palabras, es el “volver / devolverse” del español, y lo verá otra vez en la lección de volver. “If you can't find it” usa presente donde el español también usaría presente: las dos lenguas coinciden aquí."
        }
      ],
      vocabulary: [
        {
          term: "to find",
          explanation:
            "El verbo inglés básico para dar con algo que se buscaba, o toparse con algo por casualidad. Regular en presente e irregular en pasado: found.",
          literal: "encontrar",
          useWhen:
            "Cuando se cuenta si una búsqueda dio resultado — “I found it”, “I can't find it”, “did you find the shop?”.",
          avoidWhen:
            "Cuando se quiere decir que algo parece de cierta manera. El inglés admite “I find it hard”, pero al principio es más seguro “it seems hard to me” hasta afianzar ese molde.",
          register: "neutro",
          region: "Inglés general.",
          related: ["to locate", "to look for", "to come across", "to spot"],
          example: {
            target: "I can't find it around here.",
            translation: "No la encuentro por acá."
          }
        },
        {
          term: "can't find it",
          explanation:
            "El inglés marca el no encontrar con el modal “can't”. “I don't find it” existe, pero significa otra cosa: una costumbre o una opinión, no una búsqueda fallida.",
          literal: "no lo encuentro",
          useWhen:
            "La búsqueda está en curso y no aparece nada — “I can't find my keys”, “I can't find the address”.",
          avoidWhen:
            "Cuando se quiere el pasado ya cerrado. Ahí es “I couldn't find it” o “I didn't find it”.",
          register: "neutro",
          region: "Inglés general.",
          related: ["I can't see it", "I can't locate it", "it's not here", "I've lost it"],
          example: {
            target: "I can't find it anywhere.",
            translation: "No lo encuentro por ningún lado."
          }
        },
        {
          term: "can't find a thing",
          explanation:
            "Un “nada de nada” enfático. “A thing” tras una negación es más fuerte y más hablado que “anything”, y calca el “no hallo nada” colombiano.",
          literal: "no hallo nada",
          useWhen:
            "Cuando se quiere recalcar lo rotundo del fracaso de la búsqueda — “I looked everywhere and couldn't find a thing”.",
          avoidWhen:
            "En escritura formal, donde el sobrio “I found nothing” queda mejor que el énfasis coloquial.",
          register: "amistoso informal",
          region: "Inglés general; el enfático “a thing” es del habla cotidiana.",
          related: ["not a thing", "nothing at all", "not a single one", "zilch"],
          example: {
            target: "I can't find a thing.",
            translation: "No hallo nada."
          }
        },
        {
          term: "to run into",
          explanation:
            "Un phrasal verb que sirve tanto para lugares como para personas: dar con un sitio, o encontrarse con alguien por casualidad. El “into” es obligatorio.",
          literal: "encontrarse con / toparse con",
          useWhen:
            "Un punto de referencia aparece en el camino, o uno se topa con alguien sin planearlo — “you'll run into a bank”, “I ran into an old friend”.",
          avoidWhen:
            "Cuando el encuentro estaba pactado. Una cita acordada es “to meet up with”, no “to run into”.",
          register: "amistoso informal",
          region: "Inglés general.",
          related: ["to come across", "to bump into", "to stumble on", "to run across"],
          example: {
            target: "You'll run into a bakery.",
            translation: "Se encuentra con una panadería."
          }
        },
        {
          term: "I ran into",
          explanation:
            "El pasado de toparse con una persona por casualidad. Distinto de “I met”, que en un primer encuentro es una presentación, y de “I met up with”, que es planeado.",
          literal: "me encontré con",
          useWhen:
            "Al contarle a alguien un encuentro fortuito — “I ran into Sofía at the supermarket yesterday”.",
          avoidWhen:
            "Cuando se conoció a alguien por primera vez; eso es “I met”. Una cita pactada es “I met up with”.",
          register: "amistoso informal",
          region: "Inglés general.",
          related: ["I bumped into", "I came across", "I met up with", "we ran into each other"],
          example: {
            target: "This morning I ran into my neighbor.",
            translation: "Esta mañana me encontré con el vecino."
          }
        },
        {
          term: "where is it?",
          explanation:
            "La forma llana de preguntar por la ubicación de un sitio fijo. El inglés no separa “quedar/estar”, así que un solo verbo, “to be”, cubre dónde está una tienda y dónde están las llaves.",
          literal: "¿dónde queda? / ¿dónde está?",
          useWhen:
            "Al preguntar por una tienda, una calle o un edificio — “where is Dwyer's?”, “where's the nearest bank?”.",
          avoidWhen:
            "Cuando se busca el “¿para dónde queda?” más suelto; ahí “which way is it?” o “how do I get there?” suenan más naturales.",
          register: "neutro",
          region: "Inglés general; “whereabouts is it?” es una variante más coloquial.",
          related: ["where is it?", "whereabouts is it?", "how do I get there?", "where's it located?"],
          example: {
            target: "Do you know where Dwyer's is?",
            translation: "¿Sabe dónde queda Dwyer's?"
          }
        },
        {
          term: "going around in circles",
          explanation:
            "Andar sin llegar a ningún lado, perdido a pie o atascado en un problema. El modismo inglés calca el “dar vueltas” colombiano casi palabra por palabra.",
          literal: "dar vueltas",
          useWhen:
            "Para describir estar perdido o, en sentido figurado, darle vueltas al mismo problema sin avanzar.",
          avoidWhen:
            "Cuando se trata de un solo giro físico; eso es “to turn around” o “to make a U-turn”, una acción puntual.",
          register: "amistoso informal",
          region: "Inglés general.",
          related: ["going in circles", "walking in circles", "getting nowhere", "lost my bearings"],
          example: {
            target: "I've been going around in circles for half an hour.",
            translation: "Llevo media hora dando vueltas."
          }
        }
      ],
      note:
        "Para el hispanohablante la trampa va al revés. “Run into” hace el doble oficio de “encontrarse con” — una panadería en el camino, un vecino en la calle —, así que conviene apoyarse en él y soltar el calco “find with”. Y el inglés exige “can't find”, nunca “don't find”: el modal no es opcional como se siente el presente pelado en casa.",
      culture: [
        {
          label: "Aquí las direcciones se toman al pie de la letra",
          body:
            "En Estados Unidos la gente se orienta por nombre y número de calle y, cada vez más, por el puntico azul del celular. Si uno pide indicaciones, es mucho más probable oír “it's on King, just past Bathurst” que una panadería y una pared amarilla. Para alguien criado con las direcciones colombianas por puntos de referencia esto resulta raro y abstracto, pero es fiable: los números sí van en orden, y un desconocido nombrará la calle que cruza antes que una fachada."
        },
        {
          label: "“I don't know” es una respuesta honesta, no una grosería",
          body:
            "Donde un desconocido colombiano quizá se invente la dirección con tal de no defraudarlo a uno, un estadounidense es más propenso a encoger los hombros y decir “sorry, I'm not from around here”. Puede sonar seco si uno espera calidez, pero se dice con buena intención: prefieren no mandarlo por el camino equivocado. Tómelo tal cual, dé las gracias y pregúntele al siguiente. Nadie está siendo frío; están siendo cuidadosos."
        },
        {
          label: "Un solo phrasal verb carga con mucho",
          body:
            "Vale la pena memorizar “run into” entero, porque funde dos moldes del español en uno. Uno hace “run into” con un punto de referencia y “run into” con un viejo amigo usando exactamente las mismas palabras. El inglés está lleno de estos phrasal verbs cortitos — get by, come across, drop off — y hacen más trabajo diario que los verbos grandes de raíz latina a los que el hispanohablante tira por instinto. Fiarse de las palabras pequeñas es la mitad de sonar natural."
        },
        {
          label: "Preguntar por una dirección es rápido y práctico",
          body:
            "Parar a un desconocido en una ciudad estadounidense es una transacción breve y de bajo perfil: una pregunta corta, una respuesta corta, un gracias, y cada quien sigue su camino. Hay poco de la charla que en Colombia envolvería el mismo intercambio. No es antipatía: es otra idea de cuánto tiempo de un desconocido le corresponde a uno. Si lo mantiene corto, quedará como educado y no como brusco."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “I don't find it” for “no lo encuentro”",
          whyItFails:
            "El presente pelado “don't find” suena a costumbre o a veredicto, no a una búsqueda en curso. El inglés necesita el modal para decir que uno no está logrando encontrar algo ahora.",
          sayInstead: "I can't find it."
        },
        {
          mistake: "Saying “I ran with my neighbor” for “me encontré con”",
          whyItFails:
            "“Run with” da a entender que salieron a trotar juntos. El phrasal del encuentro casual es “run into”; la preposición cambia todo el significado.",
          sayInstead: "I ran into my neighbor."
        },
        {
          mistake: "Using “actually” to mean “right now” (actualmente)",
          whyItFails:
            "“Actually” es un falso amigo: significa “de hecho, en realidad”, no “actualmente”. Decir “I actually live here” para expresar “por ahora” confunde a quien escucha.",
          sayInstead: "Right now I'm looking for the shop."
        },
        {
          mistake: "Saying “I'm looking the shop” without “for”",
          whyItFails:
            "Como “buscar” no lleva preposición, el hispanohablante suelta el “for”. Pero “look” lo necesita para tomar un objeto; sin él la frase se desarma.",
          sayInstead: "I'm looking for the shop."
        }
      ],
      variations: [
        {
          form: "I can't find it.",
          register: "neutro",
          region: "Inglés general",
          whenToUse: "El estándar llano, válido en cualquier compañía y registro."
        },
        {
          form: "I can't find it anywhere.",
          register: "neutro",
          region: "Inglés general",
          whenToUse: "Enfático: uno ha buscado en varios sitios y no ha dado con ello."
        },
        {
          form: "I can't seem to find it.",
          register: "cortés formal",
          region: "Inglés general",
          whenToUse: "Más suave y como disculpándose, útil al pedirle ayuda a alguien ocupado."
        },
        {
          form: "Do you know where Dwyer's is, by any chance?",
          register: "cortés formal",
          region: "Inglés general",
          whenToUse: "Para abrir la pregunta con cortesía a un desconocido en la calle."
        },
        {
          form: "Whereabouts is the hardware store?",
          register: "amistoso informal",
          region: "Inglés británico y estadounidense",
          whenToUse: "Una manera relajada y coloquial de preguntar más o menos dónde queda algo."
        }
      ],
      prompt: "Alejandra dice “this morning I actually ran into my neighbor.” ¿Qué nos dice “ran into”?",
      choices: [
        "Que salió a trotar al lado de su vecino tempranito en la mañana y los dos terminaron haciendo ejercicio juntos.",
        "Que por poco se estrella con su vecino en el andén y le tocó frenar en seco para pedirle disculpas por el golpe.",
        "Que se topó con su vecino sin planearlo esta mañana, sin que ninguno de los dos hubiera quedado en verse."
      ],
      answer: 2,
      practiceExtra: [
        {
          prompt: "Frank dice “that one moved a while back.” ¿Qué le está diciendo a Alejandra?",
          choices: [
            "Que la ferretería se cambió de local hace algún tiempo y ya no queda en este punto de la cuadra.",
            "Que la ferretería cerró para siempre hace mucho tiempo y no va a volver a abrir en ningún otro lado.",
            "Que la tienda solo abre más tarde en el día y simplemente está cerrada a esta hora de la mañana gris."
          ],
          answer: 0,
          tests: "“moved ... a while back” como reubicación de hace un tiempo"
        },
        {
          prompt: "¿Por qué “I can't find it” es mejor que “I don't find it” en esta situación?",
          choices: [
            "Porque “don't find” se considera demasiado grosero para usarlo con un desconocido al que paraste en la calle.",
            "Porque el inglés usa el modal “can't” para decir que uno no logra encontrar algo en este preciso momento.",
            "Porque el verbo “find” solo puede aparecer junto al auxiliar “can” y nunca se sostiene solo en la frase."
          ],
          answer: 1,
          tests: "“can't find” como la forma en que el inglés dice que no logra encontrar algo ahora"
        },
        {
          prompt: "Frank dice “you'll run into a bakery.” ¿Qué es aquí la panadería?",
          choices: [
            "Una tienda que ya cerró, así que debería esperar afuera de la puerta hasta que alguien llegue a ayudarla.",
            "Un lugar al que le toca entrar para preguntarle al personal detrás del mostrador por el resto de las indicaciones.",
            "Un punto de referencia con el que se topará en el camino, y le avisa que la ferretería queda justo al lado."
          ],
          answer: 2,
          tests: "“run into” para toparse con un punto de referencia, no para encontrarse con una persona"
        },
        {
          prompt: "¿Cuál oración usa “actually” como lo haría un angloparlante?",
          choices: [
            "I'm actually looking for the hardware store, not for the bakery that sits right next door to it.",
            "I actually live in this city now, and by that I mean only at this present moment in time today.",
            "I work actually as a teacher and also right now during this very gray and rainy Tuesday morning."
          ],
          answer: 0,
          tests: "“actually” como “de hecho”, no el falso amigo “actualmente”"
        }
      ]
    }
  },
  {
    id: "getting-the-technician-called-out",
    level: "Starter · Home and neighborhood",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "home-and-neighborhood",
    register: "familiar",
    verb: "llamar",
    review: "pending",
    es: {
      title: "Getting them to call the technician",
      situation:
        "Alex has lost internet at dusk, and the router lights all look strange. He does not have the number for the technician and is not thrilled about spending the whole night without a connection. He catches his neighbor Dubán in the hallway — the one who seems to know who fixes what in the building — and asks him for the number so he can call someone before it gets late.",
      setting: {
        who: "Dubán is a chatty paisa in his thirties who has lived in the block for years and has every useful number saved. Alex is the foreigner two doors down who still does not know who to ring when something breaks.",
        what: "A quick doorway favor: one neighbor handing another a phone number and offering to smooth the call.",
        when: "A weekday evening, after work, when the technician might still answer if you catch him fast.",
        where: "Medellín, a mid-rise block in Belén where neighbors on the same floor know each other by name.",
        why: "Because in a building, the neighbor with the numbers is worth more than any hotline, and tonight Dubán is that neighbor. How Alex asks decides whether he stays that neighbor."
      },
      address: {
        form: "vos",
        who: "Dubán and Alex use vos with each other, the easy paisa form between neighbors who get on.",
        why: "In Medellín vos is the warm everyday form among people on friendly terms. Usted also circulates, and older paisas use it constantly, but vos between two neighbors around the same age signals that things are relaxed between them.",
        ifYouSwitch:
          "Usted would suddenly sound like Alex had gone stiff or slightly annoyed. Tú would sound imported — paisas hear it as telenovela Spanish, not something a neighbor on the landing would actually say."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Ve, Dubán, ¿vos tenés el número del técnico? Se me cayó el internet y necesito llamarlo ya.",
          translation: "Hey, Dubán, do you have the technician's number? My internet went down and I need to call him right now.",
          pronunciation: "veh, doo-BAN, vos teh-NES el NOO-meh-roh del TEK-nee-koh? se me ka-YOH el in-ter-NET ee neh-seh-SEE-toh ya-MAR-loh ya",
          literal: "See, Dubán, you have the number of-the technician? Itself to-me fell the internet and I-need to-call-him now.",
          why: "“Ve” is the paisa way of tapping someone on the shoulder with a word, and “vos tenés” is the vos present of tener. “Llamarlo” hangs the object pronoun on the end of the infinitive — llamar here takes a plain direct object."
        },
        {
          speaker: "Dubán",
          target: "Claro, parce. Marcá este: es Óscar, el que arregla todo por acá. Se llama Óscar Restrepo.",
          translation: "Of course, mate. Dial this one: it's Óscar, the guy who fixes everything around here. His name's Óscar Restrepo.",
          pronunciation: "KLA-roh, PAR-seh. mar-KA ES-teh: es OS-kar, el ke a-RREH-gla TOH-doh por a-KA. se YA-ma OS-kar rres-TREH-poh",
          literal: "Clear, mate. Dial this: is Óscar, the who fixes everything around here. Itself calls Óscar Restrepo.",
          why: "“Marcá” is the vos imperative of marcar, to dial. Watch the switch from llamar to “se llama”: llamarse, the reflexive, is to be named — a different shape from calling someone, even though it is the same verb underneath."
        },
        {
          speaker: "Alex",
          target: "¿Y si no contesta? Porque yo llamo y llamo y nada.",
          translation: "And what if he doesn't answer? Because I call and call and get nowhere.",
          pronunciation: "ee see no kon-TES-ta? POR-keh yo YA-moh ee YA-moh ee NA-da",
          literal: "And if not answers? Because I call and call and nothing.",
          why: "“Contestar” is the verb for answering a phone or a question. Repeating “llamo y llamo” is how Spanish stresses a maddening, repeated action, where English would reach for “I keep calling”."
        },
        {
          speaker: "Dubán",
          target: "Tranquilo. Si a vos no te contesta, yo le timbro y le digo que suba. A mí sí me contesta.",
          translation: "Relax. If he doesn't answer you, I'll give him a ring and tell him to come up. He does answer me.",
          pronunciation: "tran-KEE-loh. see a vos no te kon-TES-ta, yo le TEEM-broh ee le DEE-goh ke SOO-ba. a MEE see me kon-TES-ta",
          literal: "Calm. If to you not to-you answers, I to-him ring and to-him tell that come-up. To me yes to-me answers.",
          why: "“Le timbro” — timbrar, to make someone's phone ring — is Colombian to the bone and gentler than “llamar”, hinting at a quick buzz rather than a full conversation. The doubled “a mí sí me contesta” fronts the contrast: to ME he does answer."
        },
        {
          speaker: "Alex",
          target: "De una. No quiero llamar la atención tocando puertas a esta hora.",
          translation: "Sounds good. I don't want to make a scene knocking on doors at this hour.",
          pronunciation: "de OO-na. no KYEH-roh ya-MAR la a-ten-SYON toh-KAN-doh PWER-tas a ES-ta OH-ra",
          literal: "Of one. Not I-want to-call the attention knocking doors at this hour.",
          why: "“Llamar la atención”, literally “to call the attention”, means to draw notice — and, from a parent or a boss, to tell someone off. Tone and context decide which. Here Alex means he would rather not make himself the evening's spectacle."
        },
        {
          speaker: "Dubán",
          target: "No, fresco. Vos marcás, y si toca, yo te marco cuando llegue a la casa.",
          translation: "No, relax. You dial, and if need be, I'll ring you when I get home.",
          pronunciation: "no, FRES-koh. vos mar-KAS, ee see TOH-ka, yo te MAR-koh KWAN-doh YEH-geh a la KA-sa",
          literal: "No, fresh. You dial, and if it-touches, I to-you dial when I-arrive to the house.",
          why: "“Te marco” is marcar again, here meaning “I'll ring you”. “Fresco” is paisa for take it easy, and “si toca” means “if it comes to that”, from tocar in its sense of something falling to you to do."
        }
      ],
      vocabulary: [
        {
          term: "llamar",
          explanation:
            "The all-purpose verb for calling: phoning someone, summoning them, or calling out a name. The bare form takes a direct object — you llamar a person or a thing.",
          literal: "to call",
          useWhen:
            "You are phoning or summoning someone — “voy a llamar al médico”, “llamá al perro”.",
          avoidWhen:
            "You mean to be named. That is llamarse, the reflexive, and “llamo Óscar” without the reflexive is simply wrong.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["telefonear", "marcar", "timbrar", "contactar"],
          example: {
            target: "Necesito llamar al técnico.",
            translation: "I need to call the technician."
          }
        },
        {
          term: "llamar a (alguien)",
          explanation:
            "Calling a person takes the personal “a” before them. It is not a preposition of direction here; it is the marker Spanish puts before a specific human object.",
          literal: "to call to (a person)",
          useWhen:
            "The thing you are calling is a person — “llamar a Óscar”, “llamar a mi mamá”.",
          avoidWhen:
            "The object is a thing. You call a taxi with no “a”: “llamar un taxi”, not “llamar a un taxi”.",
          register: "neutral",
          region: "Universal Spanish; the personal “a” is a core rule, not a regionalism.",
          related: ["ver a alguien", "buscar a alguien", "conocer a alguien", "esperar a alguien"],
          example: {
            target: "Voy a llamar a Óscar.",
            translation: "I'm going to call Óscar."
          }
        },
        {
          term: "llamarse",
          explanation:
            "The reflexive twin, meaning to be named — literally to call oneself. It is how you give and ask names, and it never means to phone.",
          literal: "to call oneself",
          useWhen:
            "Giving or asking a name — “¿cómo se llama?”, “me llamo Alex”.",
          avoidWhen:
            "You mean to phone someone. Then it is llamar, with no reflexive pronoun anywhere near it.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["¿cómo se llama?", "me llamo", "por su nombre", "apodarse"],
          example: {
            target: "Se llama Óscar Restrepo.",
            translation: "His name is Óscar Restrepo."
          }
        },
        {
          term: "timbrar",
          explanation:
            "To make someone's phone ring — often just a quick buzz to signal you, without expecting a full call. Deeply Colombian, and softer than llamar.",
          literal: "to ring (a bell)",
          useWhen:
            "Offering a quick nudge by phone — “yo te timbro”, “timbrame cuando llegués”.",
          avoidWhen:
            "A formal report or a business email, where “llamar” is the safer, more neutral verb.",
          register: "friendly informal",
          region: "Very Colombian; closely tied to “hacer una perdida”, a deliberate missed call.",
          related: ["te timbro", "hacer una perdida", "repicar", "sonar"],
          example: {
            target: "Yo le timbro y le digo que suba.",
            translation: "I'll give him a ring and tell him to come up."
          }
        },
        {
          term: "marcar",
          explanation:
            "To dial a number, and by extension “to ring” someone. In practice it overlaps with llamar in speech: “te marco” is just “I'll call you”.",
          literal: "to dial / to mark",
          useWhen:
            "Punching in a number or casually promising a call — “marcá este número”, “ya te marco”.",
          avoidWhen:
            "You mean to mark or to score. Same verb, wholly different sense, sorted out entirely by context.",
          register: "neutral",
          region: "General Colombian; understood everywhere.",
          related: ["marcá", "te marco", "digitar", "llamar"],
          example: {
            target: "Marcá este número.",
            translation: "Dial this number."
          }
        },
        {
          term: "llamar la atención",
          explanation:
            "Two meanings in one phrase: to draw attention, and to reprimand. A bright shirt “llama la atención”; so does a teacher who “te llama la atención” for talking.",
          literal: "to call the attention",
          useWhen:
            "Talking about standing out, or about being told off — “no quiero llamar la atención”, “me llamaron la atención”.",
          avoidWhen:
            "You only want the neutral “to notice”; that is “notar” or “darse cuenta”, not this idiom.",
          register: "neutral",
          region: "Universal Spanish, with heavy everyday Colombian use.",
          related: ["hacer una escena", "regañar", "resaltar", "destacar"],
          example: {
            target: "No quiero llamar la atención.",
            translation: "I don't want to make a scene."
          }
        },
        {
          term: "contestar",
          explanation:
            "To answer — a phone call or a question. For a ringing phone it is the natural verb; you contestar a call, you do not “responder” it in speech.",
          literal: "to answer",
          useWhen:
            "Someone is ringing, or has asked you something — “no me contesta”, “contestá el teléfono”.",
          avoidWhen:
            "You mean to answer a door; that is “abrir”, opening it, not contestar.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["responder", "atender", "coger el teléfono", "descolgar"],
          example: {
            target: "No me contesta el técnico.",
            translation: "The technician isn't answering me."
          }
        }
      ],
      note:
        "Three shapes of one verb, and they are not interchangeable. “Llamar a alguien” is to phone or summon a person, with the personal “a” in tow. “Llamarse” is to be named. And “llamar la atención” is a fixed idiom that can praise or scold. Keep them sorted and you will not answer “¿cómo te llamas?” with a phone number, or hear a telling-off as a compliment.",
      culture: [
        {
          label: "Timbrar and the deliberate missed call",
          body:
            "For years of prepaid phones, Colombians turned the missed call into a whole language. You “timbras” someone — let it ring once and hang up — to say “I'm here”, “call me back”, or “I made it home safe”, all without spending a peso. “Hazme una perdida” means give me that missed call. Unlimited data has not killed it; a quick timbrazo is still the cheapest, fastest way to nudge someone without a word."
        },
        {
          label: "Paisa vos, and how it mixes with usted",
          body:
            "Antioquia runs on vos and usted, often from the same mouth to the same person, sliding between them by mood rather than by rule. A paisa mother might vos her son when she is relaxed and usted him when she is stern, or the other way round. Tú, the form textbooks drill, sounds faintly foreign in Medellín — imported from television. If a neighbor voseas you, take it as a small sign the door has opened."
        },
        {
          label: "Answering the phone has its own words",
          body:
            "Pick up a call in Colombia and you are likely to hear “¿Aló?” with a rising lilt, especially in the interior. Vendors, technicians and shops answer differently — “¿A la orden?” or straight with the business name, ready to serve. On the coast you might get “¿Ajá?”. Answering with your own name, the way some Europeans do, sounds oddly formal here; the neutral, friendly “¿Aló?” is what fits almost everywhere."
        },
        {
          label: "Llamar la atención cuts two ways",
          body:
            "The same three words that praise can scold. A dress that “llama la atención” turns heads for the right reasons; a child who gets “un llamado de atención” has been told off. Adults get them too — a formal “llamado de atención” at work is a written warning. Because the phrase swings between flattering and disciplinary, you read it entirely from tone and who is speaking, and a learner who misses that can badly misjudge a moment."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “Me llamo a mi mamá” for “I call my mom”",
          whyItFails:
            "The reflexive “me llamo” means “I am named”. Bolting a person onto it collides two verbs; you have accidentally said something like “I name myself to my mom”.",
          sayInstead: "Llamo a mi mamá."
        },
        {
          mistake: "Saying “Voy a llamar mi amigo” without the “a”",
          whyItFails:
            "Calling a specific person needs the personal “a”. Leaving it out is a classic English-speaker slip, because English has nothing to translate it from.",
          sayInstead: "Voy a llamar a mi amigo."
        },
        {
          mistake: "Saying “Te llamo para atrás” for “I'll call you back”",
          whyItFails:
            "It is a word-for-word calque of “call back”. Spanish does not put the “back” in space like that; it uses “devolver la llamada” or “volver a llamar”.",
          sayInstead: "Te devuelvo la llamada. / Te vuelvo a llamar."
        },
        {
          mistake: "Hearing “te van a llamar la atención” as a compliment",
          whyItFails:
            "In that frame the idiom means you will be told off, not admired. Taking it as praise about standing out reads the moment exactly backwards.",
          sayInstead: "Understand it as “you're going to get told off”."
        }
      ],
      variations: [
        {
          form: "Te llamo.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The plain, safe “I'll call you”, fine with anyone."
        },
        {
          form: "Te timbro.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "A quick buzz between friends, lighter than a full call."
        },
        {
          form: "Te marco.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Casual and interchangeable with “te llamo” among people at ease."
        },
        {
          form: "Te devuelvo la llamada.",
          register: "neutral",
          region: "General Colombian and pan-Hispanic",
          whenToUse: "You missed their call or must ring back later — the proper “call you back”."
        },
        {
          form: "Hacéme una perdida.",
          register: "friendly informal",
          region: "Colombia, paisa flavor",
          whenToUse: "Ask someone to ring once so you have their number or their signal."
        }
      ],
      prompt: "Dubán says “yo le timbro y le digo que suba.” What is he offering to do?",
      choices: [
        "To go down and knock on the technician's own door so as to fetch the man up to the apartment in person.",
        "To give the technician a quick ring and tell him to come up to the apartment.",
        "To send the technician a long written message setting out the whole internet problem in detail."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Dubán says “se llama Óscar Restrepo.” What is “se llama” doing here?",
          choices: [
            "Telling Alex the technician's name; “llamarse” is the reflexive verb for being named.",
            "Telling Alex to shout the name Óscar Restrepo aloud so that the technician can hear him.",
            "Telling Alex that Óscar Restrepo is on the phone right now and wants someone to pick up."
          ],
          answer: 0,
          tests: "llamarse as being named, distinct from llamar as phoning"
        },
        {
          prompt: "Why does Alex say “llamar a Óscar” with an “a” before the name?",
          choices: [
            "Because the “a” before a name is purely decorative and a speaker may leave it out at will.",
            "Because “llamar” must always be followed immediately by the little word “a”, whatever comes next.",
            "Because Spanish puts the personal “a” before a specific person who is the object of the verb."
          ],
          answer: 2,
          tests: "the personal “a” before a human direct object"
        },
        {
          prompt: "Alex says he doesn't want to “llamar la atención” knocking on doors late. He means:",
          choices: [
            "That he'd rather not make a scene and have the whole floor notice him at this late hour.",
            "That he is hoping to be noticed by as many of the neighbors as he possibly can tonight.",
            "That he intends to report the broken internet formally to the building's administrator tomorrow."
          ],
          answer: 0,
          tests: "“llamar la atención” as making a scene, not seeking praise"
        },
        {
          prompt: "You want to tell a paisa friend you'll ring them. Which sounds most local?",
          choices: [
            "Procederé a telefonearte en cuanto disponga de una señal razonablemente estable.",
            "Voy a realizar una llamada telefónica dirigida a tu número apenas me sea posible.",
            "Apenas llegue te timbro, y si es urgente de una te marco, ¿listo?"
          ],
          answer: 2,
          tests: "timbrar and marcar as the natural colloquial choice"
        }
      ]
    },
    en: {
      title: "Conseguir que llamen al técnico",
      situation:
        "El internet de Alejandra se murió a media tarde y las luces del router están todas raras. No tiene el número del técnico y no le hace gracia pasar la noche entera sin conexión. Pilla a su vecino Dave en el pasillo — el que parece saber quién arregla qué en el edificio — y le pide el número para llamar a alguien antes de que se haga tarde.",
      setting: {
        who: "Dave es un vecino conversador de unos treinta y tantos que lleva años en el edificio y tiene guardado todo número útil. Alejandra es la recién llegada de dos puertas más allá que todavía no sabe a quién llamar cuando algo se daña.",
        what: "Un favor rápido en la puerta: un vecino le pasa a otra un número y se ofrece a suavizar la llamada.",
        when: "Una tarde entre semana, después del trabajo, cuando el técnico quizá todavía conteste si lo pillas rápido.",
        where: "Houston, un edificio de altura media donde los vecinos del mismo piso se conocen por el nombre.",
        why: "Porque en un edificio, el vecino que tiene los números vale más que cualquier línea de atención, y esta noche ese vecino es Dave. Cómo lo pida decide si sigue siendo ese vecino."
      },
      address: {
        form: "mixed",
        who: "Dave y Alejandra se tratan por el nombre de pila y comparten el mismo “you” desde la primera palabra.",
        why: "El inglés tiene una sola segunda persona, así que el registro lo cargan las palabras: “hey”, “no worries” y el nombre de pila marcan la cercanía que en español harían el vos o el tú, y un “could you” o un “sir” marcarían la distancia.",
        ifYouSwitch:
          "Decirle “sir” a Dave no ofendería, pero lo envejecería y enfriaría el tono. En el inglés estadounidense de todos los días, entre vecinos que se llevan bien, el nombre de pila y un “thanks” bastan."
      },
      dialogue: [
        {
          speaker: "Alejandra",
          target: "Hey Dave, do you have the repair guy's number? My internet's down and I need to call him now.",
          translation: "Ve, Dave, ¿tenés el número del técnico? Se me cayó el internet y necesito llamarlo ya.",
          pronunciation: "jei deiv, du yu jav da ri-PER gais NAM-ber? mai IN-ter-nets daun and ai nid tu kol jim nau",
          literal: "Oye, Dave, ¿tienes el del-reparador tipo número? Mi internet-está caído y yo necesito llamar a-él ahora.",
          why: "“Call him” pega el objeto directo al verbo sin nada en medio. Donde el español mete la “a” personal — llamar A Óscar — el inglés no pone absolutamente nada delante de la persona."
        },
        {
          speaker: "Dave",
          target: "Sure. Dial this one: it's Oscar, he fixes everything around here. His name's Oscar Restrepo.",
          translation: "Claro. Marca este: es Óscar, arregla todo por acá. Se llama Óscar Restrepo.",
          pronunciation: "shur. DAI-al dis uán: its OS-kar, ji FIKS-es EV-ri-zing a-RAUND jir. jis neims OS-kar rres-TREH-poh",
          literal: "Claro. Marca este uno: es Óscar, él arregla todo alrededor aquí. Su nombre-es Óscar Restrepo.",
          why: "El inglés dice “his name is”, nunca “he calls himself”. “Call himself” sugeriría un apodo que él mismo se puso, no el nombre que le dieron — justo la trampa que tiende el “se llama” del español."
        },
        {
          speaker: "Alejandra",
          target: "And if he doesn't pick up? Because I call and call and nothing happens.",
          translation: "¿Y si no contesta? Porque llamo y llamo y nada.",
          pronunciation: "and if ji DA-sent pik AP? bi-KOS ai kol and kol and NA-zing JA-pens",
          literal: "¿Y si él no recoge arriba? Porque yo llamo y llamo y nada sucede.",
          why: "“Pick up” es el phrasal para contestar una llamada; “answer” también sirve, pero “pick up” es lo que la gente dice de verdad. “Call and call” repite el verbo para marcar la frustración, igual que en español."
        },
        {
          speaker: "Dave",
          target: "No worries. If he doesn't pick up for you, I'll give him a buzz and tell him to come up. He answers me.",
          translation: "Tranquila. Si no te contesta a vos, yo le timbro y le digo que suba. A mí sí me contesta.",
          pronunciation: "nou UO-ris. if ji DA-sent pik AP for yu, ail giv jim a BAZ and tel jim tu kam AP. ji AN-sers mi",
          literal: "No preocupaciones. Si él no recoge arriba para ti, yo daré a-él un zumbido y digo a-él que suba. Él contesta a-mí.",
          why: "“Give him a buzz” es el inglés desenfadado para “timbrar”: un “lo llamo” informal. “Give someone a call / a ring / a buzz” son intercambiables y más cálidos que un “call” pelado."
        },
        {
          speaker: "Alejandra",
          target: "Great. I don't want to make a scene knocking on doors at this hour.",
          translation: "De una. No quiero llamar la atención tocando puertas a esta hora.",
          pronunciation: "greit. ai dont uont tu meik a SIN NA-king on dors at dis AUer",
          literal: "Genial. Yo no quiero hacer una escena tocando en puertas a esta hora.",
          why: "“Make a scene” es como el inglés carga el lado de escándalo y regaño de “llamar la atención”. “Call the attention” es un calco palabra por palabra que ningún angloparlante dice."
        },
        {
          speaker: "Dave",
          target: "Don't worry about it. You dial, and if you need to, I'll give you a call when I'm back home.",
          translation: "Tranquila. Marcá vos, y si toca, yo te llamo cuando vuelva a la casa.",
          pronunciation: "dont UO-ri a-BAUT it. yu DAI-al, and if yu nid tu, ail giv yu a KOL uen aim bak joum",
          literal: "No te preocupes acerca de ello. Tú marca, y si necesitas, yo daré a-ti una llamada cuando yo-esté de-vuelta casa.",
          why: "“Give you a call” repite el mismo molde amable de antes. Y fíjese en “when I'm back home”: usa presente para un momento futuro — el inglés, como el español, hace esto después de “when”."
        }
      ],
      vocabulary: [
        {
          term: "to call",
          explanation:
            "El verbo de todos los días para telefonear a alguien, mandarlo llamar o llamar a alguien por su nombre. Regular, y toma su objeto directo sin ningún marcador delante de la persona.",
          literal: "llamar",
          useWhen:
            "Cuando se telefonea o se manda llamar — “I need to call the doctor”, “call the dog”.",
          avoidWhen:
            "Cuando se quiere decir “llamarse”. El inglés no usa “call” de forma reflexiva para eso; usa “to be called” o “name”.",
          register: "neutro",
          region: "Inglés general.",
          related: ["to phone", "to dial", "to ring", "to contact"],
          example: {
            target: "I need to call the technician.",
            translation: "Necesito llamar al técnico."
          }
        },
        {
          term: "to call someone",
          explanation:
            "El inglés pega la persona al verbo sin nada en medio: “call him”, “call the plumber”. No hay ninguna “a” personal que recordar.",
          literal: "llamar a (alguien)",
          useWhen:
            "Siempre que el objeto de “call” sea una persona — “I'll call Oscar”, “call your mom”.",
          avoidWhen:
            "Cuando dan ganas de meter una palabrita de enlace antes de la persona; hay que resistirse, porque el inglés no la tiene.",
          register: "neutro",
          region: "Inglés general.",
          related: ["to see someone", "to visit someone", "to meet someone", "to help someone"],
          example: {
            target: "I'm going to call Oscar.",
            translation: "Voy a llamar a Óscar."
          }
        },
        {
          term: "his name is",
          explanation:
            "La forma llana de dar un nombre. El inglés usa “to be”, no un reflexivo de “call”: “his name is”, “I'm called”, “she goes by”.",
          literal: "se llama / llamarse",
          useWhen:
            "Al dar o pedir un nombre — “what's your name?”, “his name is Oscar”.",
          avoidWhen:
            "Cuando uno recurre a “he calls himself”; eso da a entender un apodo que la persona se puso, no el nombre de pila.",
          register: "neutro",
          region: "Inglés general.",
          related: ["what's your name?", "my name is", "he's called", "to go by"],
          example: {
            target: "His name is Oscar Restrepo.",
            translation: "Se llama Óscar Restrepo."
          }
        },
        {
          term: "to give someone a buzz",
          explanation:
            "Inglés suelto e informal para una llamada rápida — lo más cercano a “timbrar”. “Give someone a call / a ring / a buzz” significan lo mismo, todo amistoso.",
          literal: "timbrar / dar un timbrazo",
          useWhen:
            "Al ofrecer una llamada ligera y rápida entre amigos — “I'll give you a buzz later”.",
          avoidWhen:
            "En un contexto formal o escrito, donde “I'll call you” o “I'll phone you” quedan mejor.",
          register: "amistoso informal",
          region: "Inglés general; “buzz” es casual y “ring” tira un poco más a lo británico-estadounidense.",
          related: ["give a call", "give a ring", "buzz someone", "ping someone"],
          example: {
            target: "I'll give him a buzz.",
            translation: "Yo le timbro."
          }
        },
        {
          term: "to dial",
          explanation:
            "Digitar un número para hacer una llamada. Un pelín más mecánico que “call”, y cada vez más nostálgico, pero sigue siendo el verbo para el acto de teclear los dígitos.",
          literal: "marcar",
          useWhen:
            "Al describir el acto de digitar el número — “dial this number”, “dial nine for an outside line”.",
          avoidWhen:
            "Cuando se trata de todo el acto de contactar; ahí “call” o “ring” suenan más naturales que “dial”.",
          register: "neutro",
          region: "Inglés general.",
          related: ["to punch in", "to key in", "to call", "to ring"],
          example: {
            target: "Dial this number.",
            translation: "Marca este número."
          }
        },
        {
          term: "to make a scene",
          explanation:
            "Armar un alboroto público que hace voltear cabezas — el lado escandaloso del español “llamar la atención”. El inglés parte los dos sentidos de ese modismo en frases distintas.",
          literal: "llamar la atención (hacer escándalo)",
          useWhen:
            "Al hablar de un escándalo en público — “please don't make a scene”, “he made a scene at the counter”.",
          avoidWhen:
            "Cuando se trata del halagador “destacar”; ahí se dice “to draw attention” o “to turn heads”.",
          register: "neutro",
          region: "Inglés general.",
          related: ["to draw attention", "to cause a fuss", "to stand out", "to tell off"],
          example: {
            target: "I don't want to make a scene.",
            translation: "No quiero llamar la atención."
          }
        },
        {
          term: "to pick up",
          explanation:
            "El phrasal verb para contestar un teléfono que suena. “Answer” también sirve, pero “pick up” es lo que dice la gente — “he's not picking up”.",
          literal: "contestar / coger el teléfono",
          useWhen:
            "Al hablar de alguien que contesta una llamada — “nobody picked up”, “pick up, pick up!”.",
          avoidWhen:
            "Cuando se trata de abrir una puerta o responder una pregunta; una puerta se “answer” o se “get”, una pregunta se “answer”.",
          register: "amistoso informal",
          region: "Inglés general.",
          related: ["to answer", "to get the phone", "to take a call", "to pick up the phone"],
          example: {
            target: "He's not picking up.",
            translation: "No me contesta."
          }
        }
      ],
      note:
        "Dos trampas quedan pegaditas para el hispanohablante. El inglés da un nombre con “his name is”, nunca “he calls himself”, y llama a una persona sin nada delante — “call Oscar”, sin la “a” personal. Y donde el español mete el escándalo en “llamar la atención”, el inglés lo parte en dos: “make a scene” para el alboroto y “draw attention” para el lado halagador. Hay que echar mano de la mitad correcta.",
      culture: [
        {
          label: "El buzón y los mensajes le ganan a la llamada perdida",
          body:
            "La “perdida” colombiana casi no existe en Estados Unidos. Si uno deja timbrar el teléfono una vez y cuelga, lo más seguro es que piensen que se marcó sin querer desde el bolsillo, no que ahí va un mensaje. Aquí la gente o deja un mensaje de voz o, mucho más seguido, manda un texto. Si uno quiere que un estadounidense sepa que lo llamó a propósito, hay que decirlo en un mensaje — la perdida silenciosa no carga el sentido que carga en casa."
        },
        {
          label: "Un solo “you”, así que la calidez vive en las palabras",
          body:
            "El inglés no tiene la perilla del vos y el usted para girar, así que todo el oficio del registro cae en el vocabulario y el tono. La cercanía llega por “hey”, “no worries”, el nombre de pila y una voz relajada; la distancia, por “could you”, “sir” y frases más completas. El hispanohablante acostumbrado a marcar respeto con el pronombre tiene que reaprenderlo como elección de palabras, porque el pronombre solo no hace nada de ese trabajo en inglés."
        },
        {
          label: "Uno contesta con “Hello?”, no con su nombre",
          body:
            "Al contestar una llamada personal en Estados Unidos, lo normal es un “Hello?” con entonación que sube, no el nombre propio ni un “yes?”. Anunciar el nombre de uno al contestar, común en partes de Europa y formal en Latinoamérica, puede sonar tieso o de oficina. Las empresas son la excepción: un negocio contesta con su nombre y a menudo un “how can I help you?”. Para las llamadas corrientes, el simple “Hello?” es lo que suena normal y amable."
        },
        {
          label: "Los phrasal verbs manejan todo el teléfono",
          body:
            "El inglés maneja el teléfono casi por completo con phrasal verbs cortitos, no con verbos grandes de raíz latina. Uno hace “pick up”, “hang up”, “call back”, “get through”, “give someone a buzz”, y se corta (“cut out”) cuando cae la señal. El hispanohablante tira por instinto a “respond”, “communicate”, “realize a call”, y todo suena raramente formal. Fiarse de los verbitos de dos palabras es buena parte de sonar como un local al teléfono."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “I call myself Ana” to introduce yourself",
          whyItFails:
            "Es un calco directo de “me llamo”. En inglés “call myself” sugiere un apodo que uno adoptó; para dar el nombre de verdad se dice “my name is” o simplemente “I'm”.",
          sayInstead: "My name is Ana. / I'm Ana."
        },
        {
          mistake: "Saying “I'll return you the call” for “te devuelvo la llamada”",
          whyItFails:
            "“Return the call” suena a libro y el orden de las palabras queda torcido. El inglés diario lo empaca en el phrasal “call back”, con el “back” después del pronombre objeto.",
          sayInstead: "I'll call you back."
        },
        {
          mistake: "Saying “He is technician” for “es técnico”",
          whyItFails:
            "El español suelta el artículo antes de una profesión, pero el inglés lo conserva. Un oficio en singular necesita “a”: sin él la frase suena incompleta.",
          sayInstead: "He's a technician."
        },
        {
          mistake: "Saying “I don't want to call the attention”",
          whyItFails:
            "Es un calco palabra por palabra de “llamar la atención”. El inglés no tiene esa frase; el sentido de escándalo es “make a scene” y el halagador, “draw attention”.",
          sayInstead: "I don't want to make a scene."
        }
      ],
      variations: [
        {
          form: "I'll call you.",
          register: "neutro",
          region: "Inglés general",
          whenToUse: "El estándar llano, correcto ante cualquier persona."
        },
        {
          form: "I'll give you a call.",
          register: "neutro",
          region: "Inglés general",
          whenToUse: "Un pelín más cálido que “I'll call you”, e igual de seguro."
        },
        {
          form: "I'll give you a buzz.",
          register: "amistoso informal",
          region: "Inglés general",
          whenToUse: "Ligero y casual entre amigos — un timbrazo rápido más que una llamada larga."
        },
        {
          form: "I'll call you back.",
          register: "neutro",
          region: "Inglés general",
          whenToUse: "Cuando no los alcanzaste o toca llamar luego; el cotidiano “devolver la llamada”."
        },
        {
          form: "Just text me.",
          register: "amistoso informal",
          region: "Inglés norteamericano",
          whenToUse: "Cuando un mensaje sería más fácil que una llamada, que en Estados Unidos es a menudo."
        }
      ],
      prompt: "Dave dice “I'll give him a buzz and tell him to come up.” ¿Qué se ofrece a hacer Dave?",
      choices: [
        "Bajar él mismo a tocarle la puerta al técnico para subirlo en persona hasta el apartamento de ella.",
        "Pegarle una llamada rápida al técnico y decirle que suba al apartamento a mirar lo del internet.",
        "Escribirle un mensaje bien largo al técnico explicándole con pelos y señales todo el problema del internet."
      ],
      answer: 1,
      practiceExtra: [
        {
          prompt: "Dave dice “his name is Oscar Restrepo.” ¿Por qué no “he calls himself Oscar”?",
          choices: [
            "Porque el inglés da un nombre con “his name is”; “calls himself” insinúa un apodo que uno mismo se puso.",
            "Porque “calls himself” es en realidad la única forma gramaticalmente correcta de dar el nombre de alguien.",
            "Porque Óscar está en la línea justo en ese momento, gritando su propio nombre para que alguien lo oiga."
          ],
          answer: 0,
          tests: "“his name is” frente al calco reflexivo “calls himself”"
        },
        {
          prompt: "En “call the technician”, ¿el inglés necesita una palabra de enlace antes de “the technician”, como la “a” personal del español?",
          choices: [
            "Sí, el inglés mete una palabrita de enlace antes de cualquier persona que se nombre después del verbo “call”.",
            "Sí, pero solo en los casos en que la persona a la que se llama es alguien a quien uno ya conoce bien.",
            "No — el inglés no tiene “a” personal, así que uno simplemente llama al técnico, sin nada en medio."
          ],
          answer: 2,
          tests: "el inglés no tiene “a” personal delante de un objeto humano"
        },
        {
          prompt: "Alejandra dice que no quiere “make a scene” tocando puertas. Quiere decir:",
          choices: [
            "Que prefiere no armar alboroto ni que todo el piso se dé cuenta de ella a esta hora tan tarde.",
            "Que espera que la noten esta noche la mayor cantidad posible de sus vecinos nuevos del edificio.",
            "Que piensa poner una queja formal por el internet dañado ante el administrador del edificio mañana."
          ],
          answer: 0,
          tests: "“make a scene” como armar un alboroto, no buscar que la noten"
        },
        {
          prompt: "Quieres decirle a un amigo estadounidense que lo llamarás luego. ¿Cuál suena más natural?",
          choices: [
            "I shall proceed to place a telephone call to your number the instant a stable signal appears.",
            "I will be performing a telephone call directed toward your number as soon as it is possible.",
            "I'll give you a buzz when I get in, and if it's urgent I'll just text you, okay?"
          ],
          answer: 2,
          tests: "el phrasal natural “give you a buzz” frente al fraseo latinizante y tieso"
        }
      ]
    }
  },
  {
    id: "coming-back-to-the-lunch-spot",
    level: "Starter · Food and drink",
    skills: ["speaking", "listening", "pronunciation", "vocabulary", "culture", "context"],
    domain: "food-and-drink",
    register: "familiar",
    verb: "volver",
    review: "pending",
    es: {
      title: "Back to the little lunch spot",
      situation:
        "Yesterday Alex found a little corrientazo spot — one of those places that makes a single home-style lunch each day — and the food was so good that he has already come back the next day, before even deciding it is his regular place. The cook, Doña Marta, recognizes him as soon as he ducks under the low doorway, and she loves that he came back.",
      setting: {
        who: "Doña Marta cooks and serves a single set lunch a day from a cramped kitchen she has run for fifteen years. Alex is a foreigner who came once, loved it, and has already come back — the surest compliment a corrientazo can get.",
        what: "A returning customer's second visit, greeted like a small event, with the usual banter over what is on today.",
        when: "Lunchtime the day after his first visit, in the busy stretch when the neighborhood comes in to eat.",
        where: "Cali, a family-run lunch spot in the San Fernando neighborhood where regulars are greeted by sight.",
        why: "Because a corrientazo lives on people coming back, and Alex coming back on day two is exactly the loyalty Doña Marta cooks for. The warmth she returns is an investment as much as a welcome."
      },
      address: {
        form: "tú",
        who: "Doña Marta uses tú with Alex, wrapped in “mi amor” and “mijo”, and Alex uses tú back.",
        why: "Cali and the wider Valle lean on tú far more than usted in friendly, everyday settings. A cook greeting a young regular tutea naturally; the warmth is in the tú and the endearments, not in any formality.",
        ifYouSwitch:
          "Usted would not offend, but it would cool the warmth she is offering and put a counter between them. Vos would sound paisa, out of place in Cali. The one usted that survives here is the frozen farewell “vuelva pronto”."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "¡Doña Marta! Volví. El sancocho de ayer estaba brutal.",
          translation: "Doña Marta! I'm back. Yesterday's sancocho was amazing.",
          pronunciation: "DOH-nya MAR-ta! bol-BEE. el san-KOH-choh de a-YER es-TA-ba broo-TAL",
          literal: "Doña Marta! I-returned. The sancocho of yesterday was brutal.",
          why: "“Volví” is the preterite of volver — a completed “I came back”. Colombian Spanish often uses the simple past where Spain would use the present perfect. “Brutal” in Cali is high praise, not violence."
        },
        {
          speaker: "Doña Marta",
          target: "¡Ala, sabía que ibas a volver! El que prueba eso siempre vuelve.",
          translation: "Ha, I knew you'd come back! Anyone who tries that always comes back.",
          pronunciation: "AH-la, sa-BEE-a ke EE-bas a bol-BER! el ke PRWEH-ba EH-soh SYEM-preh BWEL-beh",
          literal: "Wow, I-knew that you-were-going to return! The who tastes that always returns.",
          why: "Two shapes of volver in one line: “ibas a volver”, the plain infinitive after “ir a”, and “vuelve”, whose stem breaks to “vuel-”. “Ala” is a Cali exclamation, roughly “oh wow”."
        },
        {
          speaker: "Alex",
          target: "Jaja. ¿Hoy hay? Y esta vez vuelvo a pedir jugo de lulo.",
          translation: "Haha. Is there any today? And this time I'm ordering lulo juice again.",
          pronunciation: "HA-ha. oy ai? ee ES-ta bes BWEL-boh a peh-DEER HOO-goh de LOO-loh",
          literal: "Haha. Today there-is? And this time I-return to order juice of lulo.",
          why: "“Vuelvo a pedir” is the key construction: volver a + infinitive means to do the thing again. English has no single verb for it and must tack on “again”. It does not mean he physically returns to order."
        },
        {
          speaker: "Doña Marta",
          target: "Hoy es mote, mi amor, pero te queda igual de rico. Esto ya se te volvió costumbre, ¿cierto?",
          translation: "Today it's mote, love, but you'll like it just as much. This has become a habit for you now, right?",
          pronunciation: "oy es MOH-teh, mi a-MOR, PEH-roh te KEH-da ee-GWAL de RREE-koh. ES-toh ya se te bol-BYOH kos-TOOM-breh, SYER-toh",
          literal: "Today is mote, my love, but to-you stays equal of tasty. This already itself to-you became custom, right?",
          why: "“Se te volvió costumbre” is volverse, the reflexive, meaning to become — a slow, unplanned change. The “te” marks whose habit it turned into. “¿Cierto?” is Cali's go-to tag question, where Bogotá says “¿sí?”."
        },
        {
          speaker: "Alex",
          target: "Sí, se me volvió el sitio favorito. La próxima vuelvo con la familia.",
          translation: "Yes, it's become my favorite spot. Next time I'll come back with the family.",
          pronunciation: "see, se me bol-BYOH el SEE-tyoh fa-boh-REE-toh. la PROK-see-ma BWEL-boh kon la fa-MEE-lya",
          literal: "Yes, itself to-me became the place favorite. The next I-return with the family.",
          why: "“Se me volvió” repeats volverse for a change that happened to him, not one he chose. Then plain “vuelvo” carries a future meaning — the present tense doing the work of “I'll come back”, which Spanish does freely."
        },
        {
          speaker: "Doña Marta",
          target: "¡Eso me encanta! Aquí te esperamos. Que te vaya bien, y vuelve pronto.",
          translation: "I love that! We'll be waiting for you here. Take care, and come back soon.",
          pronunciation: "EH-soh me en-KAN-ta! a-KEE te es-peh-RAH-mos. ke te BA-ya byen, ee BWEL-beh PRON-toh",
          literal: "That to-me delights! Here to-you we-wait. That to-you it-goes well, and return soon.",
          why: "She keeps it in tú — “vuelve pronto” — but the phrase you will see on signs and hear from formal servers is the frozen usted “vuelva pronto”. It is one courtesy that clings to usted even in tú-speaking Cali."
        }
      ],
      vocabulary: [
        {
          term: "volver",
          explanation:
            "To come back or go back. The stem breaks to “vuel-” in the present (vuelvo, vuelve) and the participle is irregular: “vuelto”.",
          literal: "to return / to come back",
          useWhen:
            "Talking about physically returning somewhere — “vuelvo enseguida”, “no vuelvas tarde”.",
          avoidWhen:
            "You mean to give an object back; that is devolver, a related but separate verb.",
          register: "neutral",
          region: "Universal Spanish; the o→ue change and “vuelto” are constant.",
          related: ["regresar", "devolverse", "retornar", "vuelto"],
          example: {
            target: "La próxima vuelvo con la familia.",
            translation: "Next time I'll come back with the family."
          }
        },
        {
          term: "volver a + infinitivo",
          explanation:
            "To do something again. Volver plus “a” plus a bare infinitive is Spanish's compact way of saying a whole action repeats — the meaning English spreads out with “again”.",
          literal: "to return to (do)",
          useWhen:
            "Any repeated action — “vuelvo a pedir lo mismo”, “no lo vuelvas a hacer”.",
          avoidWhen:
            "You mean physically returning to a place; then it is plain volver, with no infinitive after it.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["otra vez", "de nuevo", "repetir", "de vuelta"],
          example: {
            target: "Esta vez vuelvo a pedir jugo de lulo.",
            translation: "This time I'm ordering lulo juice again."
          }
        },
        {
          term: "volverse",
          explanation:
            "To become — the slow, involuntary kind of change, into a lasting new state. Contrast ponerse, a passing state, and hacerse, an achieved one.",
          literal: "to turn (oneself) into",
          useWhen:
            "A gradual, unwilled change of nature — “se volvió desconfiado”, “esto se volvió costumbre”.",
          avoidWhen:
            "The change is momentary (ponerse rojo) or earned by effort (hacerse médico); volverse fits neither.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["ponerse", "hacerse", "convertirse en", "quedarse"],
          example: {
            target: "Esto se me volvió costumbre.",
            translation: "This has become a habit for me."
          }
        },
        {
          term: "vuelve pronto / vuelva pronto",
          explanation:
            "“Come back soon.” The tú form “vuelve” is warm and personal; the usted “vuelva pronto” is the frozen courtesy you meet on signs and from servers, even where people otherwise tutear.",
          literal: "come-back soon",
          useWhen:
            "Saying goodbye to a customer or guest you hope will return — the standard warm send-off.",
          avoidWhen:
            "A neutral goodbye between equals with no “return” implied; there “chao” or “nos vemos” fits better.",
          register: "friendly informal",
          region: "General Colombian; “vuelva pronto” is near-universal in shops and eateries.",
          related: ["que vuelva pronto", "regrese pronto", "nos vemos", "aquí lo esperamos"],
          example: {
            target: "Que te vaya bien, y vuelve pronto.",
            translation: "Take care, and come back soon."
          }
        },
        {
          term: "devolverse",
          explanation:
            "To head back, to turn around and go back the way you came. Very Colombian; much of the Spanish-speaking world would say “regresar” or “volver” instead.",
          literal: "to return oneself",
          useWhen:
            "You have to double back — “se me olvidó y me devolví”, “devolvete que dejaste las llaves”.",
          avoidWhen:
            "You are giving an object back to someone; that plain transaction is devolver, without the extra sense of retracing steps.",
          register: "friendly informal",
          region: "Strongly Colombian; elsewhere “regresar” is more usual.",
          related: ["regresarse", "volver", "dar la vuelta", "retroceder"],
          example: {
            target: "Se me olvidó la billetera y me tuve que devolver.",
            translation: "I forgot my wallet and had to go back."
          }
        },
        {
          term: "otra vez / de nuevo",
          explanation:
            "Two ways to say “again”. They overlap with volver a + infinitive, but attach to the sentence rather than living inside the verb, so they feel a touch lighter.",
          literal: "another time / anew",
          useWhen:
            "Marking repetition simply — “lo hago otra vez”, “empecemos de nuevo”.",
          avoidWhen:
            "You have already used volver a in the same clause; stacking them (“vuelvo a hacerlo otra vez”) is redundant.",
          register: "neutral",
          region: "Universal Spanish.",
          related: ["volver a", "nuevamente", "una vez más", "repetir"],
          example: {
            target: "¿Pedimos jugo de lulo otra vez?",
            translation: "Shall we order lulo juice again?"
          }
        },
        {
          term: "corrientazo",
          explanation:
            "The cheap, home-style set lunch of the day: usually soup, a main with rice and beans, a juice and sometimes a small dessert, for one fixed price.",
          literal: "a “run-of-the-mill” (meal)",
          useWhen:
            "Talking about the everyday working lunch — “vamos por un corrientazo”, “¿cuánto vale el corrientazo?”.",
          avoidWhen:
            "You mean an à la carte meal or a fancy restaurant; a corrientazo is by definition the set, no-choice lunch.",
          register: "friendly informal",
          region: "Very Colombian; also called “el menú” or “el ejecutivo” in some places.",
          related: ["el menú del día", "almuerzo ejecutivo", "el seco", "la bandeja"],
          example: {
            target: "Aquí el corrientazo viene con sopa y jugo.",
            translation: "Here the set lunch comes with soup and juice."
          }
        }
      ],
      note:
        "Volver is three verbs wearing one coat. Alone it means to come or go back. Glued to an infinitive — “volver a pedir” — it means to do the thing again, a meaning English can only reach with “again”. Made reflexive — “volverse” — it means to become, the slow, unwilled kind. Keep them apart, and “me volví cliente” will mean “I became a regular”, not “I came back, customer”.",
      culture: [
        {
          label: "The corrientazo is an institution",
          body:
            "Across Colombia, the weekday lunch is the corrientazo: one set menu, cooked that morning, sold cheap to workers, students and anyone nearby. You do not choose much — you get today's soup, today's main, a fresh juice — and that is the point. Places live or die on regulars, and a cook remembers who came back. Sitting down to a corrientazo is one of the fastest ways to feel part of a neighborhood rather than a visitor passing through."
        },
        {
          label: "Volver a + infinitive is grammar English envies",
          body:
            "Spanish folds “again” into the verb itself. “Vuelvo a llamar”, “no lo vuelvas a hacer”, “volvió a llover” — one tidy construction where English must add a separate “again” and hope the word order behaves. Learners often skip it, defaulting to “otra vez”, and are understood but sound a step less fluent. Reaching for volver a when an action repeats is one of those small moves that quietly makes your Spanish sound native rather than translated."
        },
        {
          label: "“Vuelva pronto”: the usted that never leaves",
          body:
            "Even in Cali and the coast, where people tutear happily, the goodbye to a customer freezes into usted: “vuelva pronto”, “que le vaya bien”, “siga, siga”. These are set courtesies, printed on signs and stitched into service, and they keep the formal form no matter how the rest of the conversation went. It is worth noticing, because it tells you register in Spanish is not one dial you turn once, but several that can point different ways at once."
        },
        {
          label: "Cali warmth has its own words",
          body:
            "Valluno Spanish is generous with endearments and exclamations. A cook will call you “mi amor”, “mijo” or “sumercé” without a hint of romance; “ala” and “ve” open sentences the way “oye” does elsewhere; “¿cierto?” closes them. None of it is flirtation or over-familiarity — it is the ordinary texture of Cali friendliness. Bristling at “mi amor” from the woman serving your lunch would misread a kindness as a come-on."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “Vengo para atrás” for “I'll come back”",
          whyItFails:
            "It is a calque of English “come back”, putting the “back” in space. Spanish already has volver and regresar for returning; the literal version sounds broken.",
          sayInstead: "Vuelvo enseguida. / Ya regreso."
        },
        {
          mistake: "Saying “Lo vuelvo a hacer otra vez”",
          whyItFails:
            "“Volver a” already means “again”, so adding “otra vez” says it twice. Pick one — the construction or the adverb — not both in the same breath.",
          sayInstead: "Lo vuelvo a hacer. / Lo hago otra vez."
        },
        {
          mistake: "Saying “Me volví cansado” for “I got tired”",
          whyItFails:
            "Volverse is for a lasting change of nature, not a passing state. Tiredness comes and goes, so Spanish uses cansarse or ponerse, never volverse.",
          sayInstead: "Me cansé. / Me puse cansado."
        },
        {
          mistake: "Saying “Quiero volver este plato” to send food back",
          whyItFails:
            "Volver is for you returning, not for returning an object. Handing a thing back is devolver, so “volver el plato” lands as “to become the plate” or nonsense.",
          sayInstead: "¿Me lo puede cambiar? / Quiero devolver este plato."
        }
      ],
      variations: [
        {
          form: "Vuelvo enseguida.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "Stepping away briefly and promising a quick return."
        },
        {
          form: "Ya vuelvo.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "The everyday “be right back”, dropped over your shoulder as you go."
        },
        {
          form: "Vuelva pronto.",
          register: "polite formal",
          region: "General Colombian, service settings",
          whenToUse: "The frozen usted send-off to a customer or guest, on signs and from servers."
        },
        {
          form: "Vuelve cuando quieras.",
          register: "friendly informal",
          region: "Cali and tú-speaking regions",
          whenToUse: "Warmly inviting a friend or regular back on their own terms."
        },
        {
          form: "Me devuelvo y ya.",
          register: "friendly informal",
          region: "Colombia",
          whenToUse: "Announcing you'll double back for something you forgot."
        }
      ],
      prompt: "Doña Marta says coming here “ya se te volvió costumbre.” What is she telling Alex?",
      choices: [
        "That coming to the lunch spot has quietly turned into a habit for him — “volverse” is to become.",
        "That he now has to hand the habit back to her, because it belongs to the lunch spot and not to him.",
        "That the kitchen has run clean out of his usual dish today and he will have to settle for another."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Alex says “vuelvo a pedir jugo de lulo.” What does “volver a + infinitive” mean here?",
          choices: [
            "That he is physically turning himself around to face the counter before he places any order.",
            "That he is ordering the lulo juice again, doing the very same thing a second time around today.",
            "That he is sending the lulo juice back to the kitchen because something was wrong with it."
          ],
          answer: 1,
          tests: "volver a + infinitive as repeating an action, not returning"
        },
        {
          prompt: "The sign reads “Vuelva pronto”, in usted, though Doña Marta says “vuelve”. Why the usted?",
          choices: [
            "Because the sign was clearly printed in some other country where only usted is ever used.",
            "Because “vuelva pronto” is a fixed courtesy that stays in usted even where people otherwise tutear.",
            "Because the owner is annoyed at the customer and switches to usted in order to sound severe."
          ],
          answer: 1,
          tests: "“vuelva pronto” as a frozen usted courtesy"
        },
        {
          prompt: "Alex wants to send a plate back to the kitchen. Which verb does he actually need?",
          choices: [
            "Volver, since volver covers coming back and so it must surely cover sending a plate back too.",
            "Regresar, since inside a Colombian restaurant regresar is the only verb anybody would ever use.",
            "Devolver, since returning an object to someone is devolver, a separate verb from volver."
          ],
          answer: 2,
          tests: "devolver for returning an object versus volver for returning oneself"
        },
        {
          prompt: "Which farewell would a Cali server most likely call after you as you leave?",
          choices: [
            "Le ruego que considere regresar a este establecimiento.",
            "No te vuelvas a aparecer por acá si no vas a pedir algo.",
            "¡Que te vaya bien, mi amor, y vuelve pronto cuando quieras!"
          ],
          answer: 2,
          tests: "warm colloquial send-off over stiff or hostile alternatives"
        }
      ]
    },
    en: {
      title: "Volver al puesto de almuerzo",
      situation:
        "Alex encontró ayer un puestico de corrientazo — de esos que hacen un solo almuerzo casero al día — y la comida estaba tan buena que ya volvió al día siguiente antes de haber decidido siquiera que es su sitio de siempre. La cocinera, Doña Marta, lo reconoce apenas se agacha bajo la puerta bajita, y está feliz de verlo.",
      setting: {
        who: "Doña Marta cocina y sirve un único almuerzo al día desde una cocina apretada que lleva quince años manejando. Alex es un extranjero que vino una vez, le encantó y ya volvió — el mejor cumplido que puede recibir un corrientazo.",
        what: "La segunda visita de un cliente que vuelve, recibida como un pequeño acontecimiento, con la charla de siempre sobre qué hay hoy.",
        when: "A la hora del almuerzo, el día después de su primera visita, en el rato de ajetreo cuando el barrio entra a comer.",
        where: "Cali, un puesto de almuerzo familiar en el barrio San Fernando donde a los clientes de siempre se les saluda de vista.",
        why: "Porque un corrientazo vive de que la gente vuelva, y que Alex vuelva al segundo día es justo la lealtad para la que cocina Doña Marta. La calidez que ella devuelve es tanto inversión como bienvenida."
      },
      address: {
        form: "mixed",
        who: "Doña Marta y Alex comparten el mismo “you”; la cocinera lo envuelve en un “sweetheart” de vez en cuando.",
        why: "El inglés tiene una sola segunda persona, así que la calidez la cargan las palabras: el nombre de pila, un “take care”, un “sweetheart”, hacen el trabajo que en español haría el tú de Cali. La cortesía o la distancia vendrían de un “sir” o un “would you”.",
        ifYouSwitch:
          "Decirle “ma'am” a Doña Marta no ofendería, pero la envejecería y pondría un mostrador entre los dos. En una fonda relajada, el nombre y un tono cálido bastan, y el cariño va en el léxico, no en el pronombre."
      },
      dialogue: [
        {
          speaker: "Alex",
          target: "Doña Marta! I'm back. Yesterday's sancocho was amazing.",
          translation: "¡Doña Marta! Volví. El sancocho de ayer estaba brutal.",
          pronunciation: "DOH-nya MAR-ta! aim BAK. YES-ter-deis san-KOH-cho uas a-MEI-zing",
          literal: "¡Doña Marta! Yo-estoy de-vuelta. De-ayer sancocho estaba asombroso.",
          why: "“I'm back” es lo que un angloparlante dice al volver a un sitio: “be” + “back”, no el verbo “return”. Decir “I returned” suena a informe; “I'm back” es lo natural en la puerta."
        },
        {
          speaker: "Doña Marta",
          target: "Ha, I knew you'd come back! Anyone who tries that always comes back.",
          translation: "¡Ala, sabía que ibas a volver! El que prueba eso siempre vuelve.",
          pronunciation: "ja, ai niu yud kam BAK! E-ni-uán ju traais dat OL-ueis kams BAK",
          literal: "Ja, yo supe que tú-habrías venir atrás! Cualquiera que prueba eso siempre viene atrás.",
          why: "“Come back” es el phrasal para volver a un lugar, y aquí aparece dos veces. “You'd come back” esconde un “you would”, la forma de futuro-en-el-pasado con la que el inglés dice lo que ella sabía que iba a pasar."
        },
        {
          speaker: "Alex",
          target: "Haha. Is there any today? And this time I'll order the lulo juice again.",
          translation: "Jaja. ¿Hoy hay? Y esta vez vuelvo a pedir jugo de lulo.",
          pronunciation: "ja-ja. is der E-ni tu-DEI? and dis taim ail OR-der da LOO-lo yus a-GUEN",
          literal: "Jaja. ¿Hay algo hoy? Y esta vez yo-pediré el lulo jugo otra-vez.",
          why: "Aquí está el punto clave: el español mete la repetición en el verbo (“vuelvo a pedir”), pero el inglés la cuelga al final con “again”. No hay un solo verbo inglés para “volver a”; hay que añadir “again”."
        },
        {
          speaker: "Doña Marta",
          target: "Today it's mote, sweetheart, but you'll like it just as much. This has become a habit for you now, right?",
          translation: "Hoy es mote, mi amor, pero te va a gustar igual. Esto ya se te volvió costumbre, ¿cierto?",
          pronunciation: "tu-DEI its mout, SUIT-jart, bat yul laik it yost as MACH. dis jas bi-KAM a JA-bit for yu nau, rait",
          literal: "Hoy es mote, corazón, pero tú-vas gustarlo justo tan mucho. Esto ha vuelto-se un hábito para ti ahora, ¿cierto?",
          why: "“Has become” es el inglés para “se volvió”: “become”, no “convert” ni “turn” a secas. Y va en presente perfecto — “has become” — porque el cambio empezó antes y sigue vigente ahora."
        },
        {
          speaker: "Alex",
          target: "Yes, it's become my favorite spot. Next time I'll come back with the family.",
          translation: "Sí, se me volvió el sitio favorito. La próxima vuelvo con la familia.",
          pronunciation: "yes, its bi-KAM mai FEI-vrit spot. nekst taim ail kam BAK uid da FA-mi-li",
          literal: "Sí, ello ha-vuelto mi favorito sitio. Próxima vez yo-vendré atrás con la familia.",
          why: "“It's become” repite “become” para un cambio que le pasó a él. Y “I'll come back” usa “will” + el phrasal, donde el español dejó el presente “vuelvo” cargando el futuro."
        },
        {
          speaker: "Doña Marta",
          target: "I love that! We'll be waiting for you here. Take care, and come back soon.",
          translation: "¡Eso me encanta! Aquí te esperamos. Que te vaya bien, y vuelve pronto.",
          pronunciation: "ai lav DAT! uil bi UEI-ting for yu jir. teik KER, and kam bak SUN",
          literal: "¡Yo amo eso! Nosotros-estaremos esperando por ti aquí. Toma cuidado, y ven atrás pronto.",
          why: "“Come back soon” es el “vuelva pronto” del inglés, y no cambia de forma por cortesía: no hay usted que congelar. La calidez va en “take care” y el tono, no en el pronombre."
        }
      ],
      vocabulary: [
        {
          term: "to come back",
          explanation:
            "El phrasal verb de todos los días para regresar a un lugar. El inglés prefiere “come back” o “go back” al latinizante “return”, que en el habla suena formal.",
          literal: "volver / regresar",
          useWhen:
            "Al hablar de regresar físicamente — “I'll come back later”, “come back soon”.",
          avoidWhen:
            "Cuando se trata de devolver un objeto; eso es “give back” o “return”, no “come back”.",
          register: "neutro",
          region: "Inglés general.",
          related: ["to go back", "to get back", "to return", "to be back"],
          example: {
            target: "Next time I'll come back with the family.",
            translation: "La próxima vuelvo con la familia."
          }
        },
        {
          term: "to do (something) again",
          explanation:
            "Donde el español tiene volver a + infinitivo, el inglés simplemente añade “again” después de la acción. No hay un solo verbo; el adverbio hace todo el trabajo.",
          literal: "volver a (hacer)",
          useWhen:
            "Al marcar que una acción se repite — “I'll order it again”, “don't do that again”.",
          avoidWhen:
            "Cuando se trata de regresar a un lugar; ahí es “come back”, no “again”.",
          register: "neutro",
          region: "Inglés general.",
          related: ["once more", "one more time", "over again", "to redo"],
          example: {
            target: "This time I'll order the lulo juice again.",
            translation: "Esta vez vuelvo a pedir jugo de lulo."
          }
        },
        {
          term: "to become",
          explanation:
            "Convertirse en un estado nuevo y duradero. El inglés también usa “get” para la versión casual (“get tired”) y “turn into” para un cambio más completo; para esto nunca dice “convert into”.",
          literal: "volverse / hacerse",
          useWhen:
            "Un cambio de estado o de naturaleza — “it's become a habit”, “she became a doctor”.",
          avoidWhen:
            "Un estado rápido y pasajero le queda mejor a “get” — “I got tired”, no “I became tired”.",
          register: "neutro",
          region: "Inglés general.",
          related: ["to turn into", "to get", "to grow", "to end up"],
          example: {
            target: "It's become my favorite spot.",
            translation: "Se me volvió el sitio favorito."
          }
        },
        {
          term: "come back soon",
          explanation:
            "La despedida cálida del inglés para un invitado o un cliente. A diferencia del español “vuelva pronto”, no hay que elegir entre formal e informal — una sola forma le sirve a todo el mundo.",
          literal: "vuelva pronto",
          useWhen:
            "Al despedir a alguien que uno espera que regrese — “thanks, come back soon!”.",
          avoidWhen:
            "Una despedida neutra entre iguales; ahí “see you” o “take it easy” es más liviano.",
          register: "amistoso informal",
          region: "Inglés general.",
          related: ["see you soon", "come again", "hope to see you again", "take care"],
          example: {
            target: "Take care, and come back soon.",
            translation: "Que te vaya bien, y vuelve pronto."
          }
        },
        {
          term: "to go back / head back",
          explanation:
            "Regresar por donde uno vino, muchas veces a recoger algo olvidado. “Head back” añade la idea de arrancar en esa dirección, cerquita del colombiano “devolverse”.",
          literal: "devolverse / regresarse",
          useWhen:
            "Al devolverse — “I forgot my wallet and had to go back”, “let's head back”.",
          avoidWhen:
            "Cuando uno le entrega un objeto a alguien; eso es “give it back”, no “go back”.",
          register: "amistoso informal",
          region: "Inglés general.",
          related: ["to double back", "to turn back", "to head back", "to go back for"],
          example: {
            target: "I forgot my wallet and had to go back.",
            translation: "Se me olvidó la billetera y me tuve que devolver."
          }
        },
        {
          term: "again / once more",
          explanation:
            "Las palabras llanas para la repetición. “Again” es lo normal y suele caer al final de la oración; “once more” y “one more time” son un poco más enfáticas.",
          literal: "otra vez / de nuevo",
          useWhen:
            "Cualquier acción repetida dicha de forma sencilla — “let's try again”, “say it once more”.",
          avoidWhen:
            "Cuando ya se metió la repetición en el fraseo; duplicarla suena redundante.",
          register: "neutro",
          region: "Inglés general.",
          related: ["one more time", "over again", "yet again", "afresh"],
          example: {
            target: "Shall we order lulo juice again?",
            translation: "¿Pedimos jugo de lulo otra vez?"
          }
        },
        {
          term: "the daily special",
          explanation:
            "El plato o menú fijo que se ofrece ese día a un precio cerrado — el primo gringo del corrientazo. “Today's special” y “the lunch special” dicen lo mismo.",
          literal: "el corrientazo / el menú del día",
          useWhen:
            "Al preguntar por el almuerzo fijo — “what's the special today?”, “I'll have the lunch special”.",
          avoidWhen:
            "Cuando se trata de cualquier cosa de la carta completa; el especial es específicamente el plato fijo que va cambiando.",
          register: "neutro",
          region: "Inglés general; “blue-plate special” es un término norteamericano más antiguo.",
          related: ["today's special", "the lunch special", "the set menu", "the special of the day"],
          example: {
            target: "What's the special today?",
            translation: "¿Cuál es el corrientazo de hoy?"
          }
        }
      ],
      note:
        "El inglés reparte lo que el español guarda en un solo verbo. Para regresar, se usa el phrasal “come back” o “go back”, no el tieso “return”. Para repetir no hay “volver a” — simplemente se le añade “again” al final. Y para el volverse, “become”, o el casual “get”, nunca “convert into”. Con esas tres costumbres afianzadas, todo el abanico de volver sale sonando natural en inglés.",
      culture: [
        {
          label: "El especial del día y sus clientes de siempre",
          body:
            "Los diners y cafés norteamericanos tienen su propia versión del corrientazo: el especial del día, o “today's special”, un plato fijo que cambia con el día y sale más barato que la carta completa. Los clientes de siempre piden “the usual” y los saludan por el nombre, y un buen mesero se acuerda de quién vino ayer. Como en Colombia, volver es el cumplido que cuenta. Aprender a preguntar “what's the special today?” es una llavecita hacia esa cultura de comer sentado, de todos los días."
        },
        {
          label: "El inglés no tiene “volver a” — solo dice “again”",
          body:
            "Esta es la trampa al revés para el hispanohablante. El español mete la repetición dentro del verbo — “vuelvo a llamar” — pero el inglés no tiene una sola palabra para eso y simplemente pega “again” al final: “I'll call again”. A veces uno anda cazando un verbo que no existe, o abusa de “repeat”. Lo llano es decir la acción normal y agregar “again” de último. Se siente casi demasiado fácil, y por eso mismo es lo correcto."
        },
        {
          label: "“Come back soon” no necesita forma de respeto",
          body:
            "Donde un mesero colombiano congela la despedida en usted — “vuelva pronto” — un angloparlante simplemente le dice “come back soon” a todo el mundo, desde un niño hasta un mayor. No hay una segunda forma esperando en la reserva. La calidez va toda en las palabras y la sonrisa: “take care”, “see you soon”, “have a good one”. Para el hispanohablante acostumbrado a elegir un pronombre para fijar el tono, se siente como si faltara un control, pero el léxico asume ese oficio calladito."
        },
        {
          label: "Volverse un “regular”",
          body:
            "El inglés tiene un sustantivo cálido para quien vuelve una y otra vez: un “regular”. “Become a regular” en algún lado es ser conocido, recibir “the usual” sin pedirlo, que lo saluden con la mano de lado a lado del salón. Es el marco inglés para justo lo que Doña Marta celebra cuando dice que un sitio “se te volvió costumbre”. Proponerse volverse un regular — de un café, un gimnasio, un bar — es una de las formas más amables de echar raíces en una ciudad de habla inglesa."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “I'll return back soon” for “vuelvo pronto”",
          whyItFails:
            "“Return” ya lleva dentro el sentido de “back”, así que “return back” lo duplica. Y en el habla informal “return” suena tieso al lado del llano “come back”.",
          sayInstead: "I'll come back soon."
        },
        {
          mistake: "Saying “It converted into my favorite place” for “se volvió”",
          whyItFails:
            "“Convert into” es un calco de volverse/convertirse y suena mecánico. El inglés dice “become” o “turn into” para esta clase de cambio.",
          sayInstead: "It's become my favorite spot."
        },
        {
          mistake: "Saying “I'll order it again another time” when you mean simply “again”",
          whyItFails:
            "“Again” y “another time” cargan las dos la repetición, así que juntas quedan redundantes — la misma duplicación que apilar “volver a” con “otra vez”.",
          sayInstead: "I'd like to order it again."
        },
        {
          mistake: "Saying “I come here since last month”",
          whyItFails:
            "Para algo que empezó en el pasado y todavía sigue, el inglés necesita el presente perfecto, no el presente pelado, justo donde el español usaría “llevo … viniendo”.",
          sayInstead: "I've been coming here since last month."
        }
      ],
      variations: [
        {
          form: "I'll be right back.",
          register: "neutro",
          region: "Inglés general",
          whenToUse: "Al apartarse un momento prometiendo un regreso rápido."
        },
        {
          form: "I'll come back later.",
          register: "neutro",
          region: "Inglés general",
          whenToUse: "Al regresar tras un rato más largo, no de una vez."
        },
        {
          form: "Come back soon!",
          register: "amistoso informal",
          region: "Inglés general",
          whenToUse: "La despedida cálida a un invitado o cliente que uno espera que vuelva."
        },
        {
          form: "See you next time!",
          register: "amistoso informal",
          region: "Inglés general",
          whenToUse: "Un adiós alegre a un cliente de siempre, dando por hecho que habrá próxima vez."
        },
        {
          form: "I'll pop back in.",
          register: "amistoso informal",
          region: "Inglés británico y estadounidense",
          whenToUse: "Una promesa casual de pasar otra vez un ratico."
        }
      ],
      prompt: "Doña Marta dice que venir “has become a bit of a habit” para Alex. ¿Qué significa aquí “become”?",
      choices: [
        "Que venir al puesto de almuerzo se le fue volviendo costumbre a lo largo de sus últimas visitas.",
        "Que ahora tiene que devolverle esa costumbre a ella, porque le pertenece al puesto de almuerzo y no a él.",
        "Que hoy en la cocina se acabó el plato que él suele pedir y le va a tocar conformarse con otro distinto."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Alex dice “I'll order the lulo juice again.” ¿Cómo maneja el inglés el español “volver a pedir”?",
          choices: [
            "Girando el cuerpo físicamente para quedar de frente al mostrador antes de siquiera alcanzar a hacer el pedido.",
            "Simplemente pegando la palabrita “again” al final, ya que el inglés no tiene un verbo único para “volver a”.",
            "Devolviéndole el jugo de lulo al mesero porque resultó que tenía algo raro y ya no se lo podía tomar."
          ],
          answer: 1,
          tests: "el inglés usa “again”, no un verbo propio, para la repetición"
        },
        {
          prompt: "El recibo dice “Come back soon!” ¿Por qué no hay que elegir entre formal e informal?",
          choices: [
            "Porque el inglés tiene una sola segunda persona, así que la calidez la cargan las palabras, no el pronombre.",
            "Porque el puesto claramente mandó a imprimir el recibo en un país donde absolutamente nadie es nunca informal.",
            "Porque la dueña está molesta con la clienta y le está ordenando que se vaya del lugar ahora mismo."
          ],
          answer: 0,
          tests: "el único “you” del inglés, con el registro cargado en el léxico"
        },
        {
          prompt: "Alex quiere mandar un plato de vuelta a la cocina. ¿Cuál usa el inglés de verdad?",
          choices: [
            "“Come back”, porque cubre lo de regresar, así que seguro también debe servir para devolver un plato.",
            "“Go back”, porque dentro de un restaurante estadounidense “go back” es la única frase que usa la gente.",
            "“Send back”, porque devolver un plato a la cocina es “to send it back”, una frase hecha aparte."
          ],
          answer: 2,
          tests: "“send back” para un plato devuelto, no “come/go back”"
        },
        {
          prompt: "¿Qué despedida te lanzaría un mesero amable de Houston al salir?",
          choices: [
            "I hereby respectfully request that you give due consideration to patronising our establishment again.",
            "Don't you dare show your face around here again unless you actually order something the next time.",
            "Take care, and come back soon — we'll have the special waiting for you!"
          ],
          answer: 2,
          tests: "despedida cálida y coloquial frente a alternativas tiesas u hostiles"
        }
      ]
    }
  }
);

markSource(lessons, "data/lessons/09-foundation-finding.js");
