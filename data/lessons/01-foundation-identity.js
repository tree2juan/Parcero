/*
 * Lesson block: foundation / identity and state.
 *
 * Block files push onto the `lessons` array declared in data/lessons.js. They
 * are plain scripts, not modules — `lessons` is already in scope by the time
 * this file runs, because index.html loads data/lessons.js first. Nothing here
 * declares it, and nothing here reassigns it.
 *
 * Every lesson spines on exactly one verb from data/curriculum.js, named in its
 * `verb` field so the coverage report can prove the curriculum is actually
 * taught rather than merely listed. test/shape.test.js checks that the verb
 * exists and that no two lessons claim the same one.
 *
 * The two directions are mirrors: same number of dialogue turns, same number of
 * vocabulary entries, same number of culture notes, pitfalls, variations and
 * practice questions, and the same optional slots filled on the same rows. That
 * is enforced by test/shape.test.js, not by good intentions.
 */
lessons.push(
  {
    id: "who-you-are-at-the-building-meeting",
    level: "Starter · Everyday life",
    skills: ["speaking", "listening", "context"],
    domain: "everyday life",
    register: "friendly informal",
    pathways: ["foundation"],
    verb: "ser",
    review: "pending",
    es: {
      title: "Saying who you are at the building meeting",
      situation:
        "Alex has just moved into a Medellín apartment block and turns up to the monthly residents' meeting. Nobody knows him yet. He has to say who he is, where he lives in the building, and what he does — in about four sentences, to a room that is only half listening.",
      setting: {
        who: "Doña Ruth has chaired the residents' meeting for nine years and knows every apartment by number. Alex is the newest resident and has spoken to nobody in the building except the porter.",
        what: "A short round of introductions at the start of the meeting, before the agenda about the water tank.",
        when: "A Tuesday evening, seven o'clock, in the ground-floor common room.",
        where: "Medellín, a six-storey block in Laureles where most residents have lived for a decade or more.",
        why: "Because Alex will be asking these people for favours — a signature, a parcel taken in, patience about noise — for as long as he lives here. The introduction is the whole relationship in miniature."
      },
      address: {
        form: "usted",
        who: "Doña Ruth uses usted with Alex, and Alex uses usted back.",
        why: "Paisa Spanish leans on usted far more than Bogotá does, and a first meeting with an older woman who chairs the meeting is exactly where it belongs. Usted here is warmth with a little formality, not coldness.",
        ifYouSwitch:
          "Tú would not offend, but it would sound like Alex had decided the friendship was already settled. Vos is common in Medellín between people who know each other; using it on night one would land as over-familiar."
      },
      dialogue: [
        {
          speaker: "Doña Ruth",
          target: "Bueno, tenemos vecino nuevo. ¿Usted quién es?",
          translation: "Right, we have a new neighbour. Who are you?",
          pronunciation: "BWEH-noh, teh-NEH-mos beh-SEE-noh NWEH-boh. oos-TED KYEN es",
          literal: "Good, we-have neighbour new. You who are?",
          why: "“¿Usted quién es?” is blunt on paper and perfectly warm in the room. Colombian Spanish often puts the pronoun first for emphasis, and dropping it would make the question sound more clinical, not more polite."
        },
        {
          speaker: "Alex",
          target: "Soy Alex, del 502. Soy canadiense.",
          translation: "I'm Alex, from 502. I'm Canadian.",
          pronunciation: "soy AH-leks, del SEEN-koh-DOS. soy ka-na-DYEN-seh",
          literal: "I-am Alex, of-the 502. I-am Canadian.",
          why: "Three uses of ser in one breath: name, address, nationality. All three are the kind of fact that does not change by Thursday, which is exactly ser's territory."
        },
        {
          speaker: "Doña Ruth",
          target: "¡Ah, del 502! Entonces usted es el del perro.",
          translation: "Ah, 502! So you're the one with the dog.",
          pronunciation: "ah, del SEEN-koh-DOS. en-TON-ses oos-TED es el del PEH-rroh",
          literal: "Ah, of-the 502! Then you are the-one of-the dog.",
          why: "“El del perro” — literally “the one of the dog” — is how Spanish builds an identity out of a possession without a relative clause. English needs “the one who has the dog”; Spanish just needs two little words."
        },
        {
          speaker: "Alex",
          target: "Sí, ese soy yo. Es un perro viejo, no ladra mucho.",
          translation: "Yes, that's me. He's an old dog, he doesn't bark much.",
          pronunciation: "see, EH-seh soy yo. es oon PEH-rroh BYEH-hoh, no LAH-dra MOO-choh",
          literal: "Yes, that am I. He-is a dog old, not he-barks much.",
          why: "“Ese soy yo” inverts the English order and is the standard way to claim an identity someone else has just handed you. Saying “yo soy ese” is grammatical but sounds like a correction."
        },
        {
          speaker: "Doña Ruth",
          target: "Tranquilo. ¿Y usted a qué se dedica?",
          translation: "No worries. And what do you do?",
          pronunciation: "tran-KEE-loh. ee oos-TED a ke se deh-DEE-ka",
          literal: "Calm. And you to what yourself dedicate?",
          why: "“¿A qué se dedica?” is the polite form of the job question. “¿Cuál es su trabajo?” is understood but sounds like a form; this one sounds like a person asking."
        },
        {
          speaker: "Alex",
          target: "Soy profesor, pero ahora estoy sin trabajo fijo.",
          translation: "I'm a teacher, but right now I'm without steady work.",
          pronunciation: "soy pro-feh-SOR, PEH-roh a-OH-ra es-TOY seen tra-BA-ho FEE-ho",
          literal: "I-am teacher, but now I-am without work fixed.",
          why: "The pivot the whole lesson turns on: ser for the profession that defines him, estar for the situation that happens to be true this month. Swapping them would say something quite different about how he sees himself."
        }
      ],
      vocabulary: [
        {
          term: "ser",
          explanation:
            "The “be” of identity — who or what something fundamentally is: name, origin, profession, material, the hour, the owner.",
          literal: "to be (essentially)",
          useWhen:
            "Naming yourself, saying where you are from, giving your job, saying who something belongs to, or telling the time and date.",
          avoidWhen:
            "Describing a mood, a location, or anything that could reasonably be different next week. That is estar's job, and using ser there sounds like you are making a permanent claim.",
          register: "neutral",
          region: "Universal Spanish. The ser/estar split works the same across every dialect; only the examples change.",
          related: ["estar", "haber", "parecer", "quedar"],
          example: {
            target: "Soy Alex, del 502.",
            translation: "I'm Alex, from 502."
          }
        },
        {
          term: "¿A qué se dedica?",
          explanation:
            "The everyday polite way to ask what someone does for a living, in the usted form.",
          literal: "To what does one dedicate oneself?",
          useWhen:
            "Meeting an adult you are being formal with — a neighbour, a client, a friend's parent.",
          avoidWhen:
            "Talking to someone you are already using tú or vos with. Then it stiffens the conversation; “¿y vos qué hacés?” fits far better.",
          register: "polite formal",
          region: "General Colombian and widely understood across Latin America.",
          related: ["¿Qué haces?", "¿En qué trabaja?", "¿Cuál es su profesión?", "¿Y vos qué hacés?"],
          example: {
            target: "¿Y usted a qué se dedica?",
            translation: "And what do you do?"
          }
        },
        {
          term: "el del perro",
          explanation:
            "“The one with the dog.” A compact way to identify someone by a thing associated with them.",
          literal: "the [one] of the dog",
          useWhen:
            "Pinning down which person you mean when the group already half-knows them — the one with the red car, the one from the fifth floor.",
          avoidWhen:
            "Introducing someone properly. It identifies but does not dignify; using it to someone's face about a sore subject can sting.",
          register: "friendly informal",
          region: "General Colombian; the construction is universal Spanish.",
          related: ["la del quinto", "el de la moto", "la de la tienda", "el del carro rojo"],
          example: {
            target: "Entonces usted es el del perro.",
            translation: "So you're the one with the dog."
          }
        },
        {
          term: "ese soy yo",
          explanation:
            "“That's me.” Used to confirm an identity someone else has just described.",
          literal: "that am I",
          useWhen:
            "Someone has guessed who you are and you are agreeing, usually with a bit of humour.",
          avoidWhen:
            "Introducing yourself cold. It only works as an answer, never as an opener.",
          register: "friendly informal",
          region: "General Colombian.",
          related: ["yo soy", "ese mismo", "el mismo", "así es"],
          example: {
            target: "Sí, ese soy yo.",
            translation: "Yes, that's me."
          }
        },
        {
          term: "tranquilo",
          explanation:
            "“No worries” — reassurance that whatever you just apologised for or explained is not a problem.",
          literal: "calm",
          useWhen:
            "Waving off someone's worry, or being waved off yourself. Extremely frequent in Colombia.",
          avoidWhen:
            "Someone is genuinely upset about something you did. Then it reads as dismissive rather than kind.",
          register: "friendly informal",
          region: "General Colombian; “tranquilo/a” agrees with the person you are reassuring.",
          related: ["tranquila", "no hay lío", "fresco", "no pasa nada"],
          example: {
            target: "Tranquilo, el perro no molesta.",
            translation: "No worries, the dog isn't a bother."
          }
        },
        {
          term: "sin trabajo fijo",
          explanation:
            "“Without steady work.” The usual way to say you are freelancing or between jobs without claiming to be unemployed.",
          literal: "without work fixed",
          useWhen:
            "Being honest about an unsettled situation in a way that keeps its dignity.",
          avoidWhen:
            "A formal application. There you would say “trabajo independiente” or name the contract.",
          register: "neutral",
          region: "General Colombian.",
          related: ["trabajo independiente", "por contrato", "en la informalidad", "buscando trabajo"],
          example: {
            target: "Ahora estoy sin trabajo fijo.",
            translation: "Right now I'm without steady work."
          }
        },
        {
          term: "del 502",
          explanation:
            "“From 502.” In a Colombian apartment block, your flat number is a normal way to identify yourself.",
          literal: "of-the 502",
          useWhen:
            "Any building context — the meeting, the porter's desk, a parcel, a complaint.",
          avoidWhen:
            "Outside the building, where the number means nothing and you would give the neighbourhood instead.",
          register: "neutral",
          region: "General Colombian urban usage.",
          related: ["del quinto piso", "de la 502", "el apartamento 502", "de la torre dos"],
          example: {
            target: "Soy Alex, del 502.",
            translation: "I'm Alex, from 502."
          }
        }
      ],
      note:
        "The single most useful thing in this lesson is the last line of dialogue. “Soy profesor” and “estoy sin trabajo” sit side by side because Spanish makes you choose, every time, between what you are and how things currently stand. English lets you blur it. Spanish does not.",
      culture: [
        {
          label: "Your flat number is your name",
          body:
            "In Colombian apartment blocks, residents are routinely known by number long before they are known by name — “el 502”, “la señora del 301”. It is not impersonal; it is how a building of eighty strangers stays navigable. Offering your number when you introduce yourself is genuinely helpful, and leaving it out makes you harder to place."
        },
        {
          label: "Usted is warmer in Medellín than the textbook suggests",
          body:
            "Textbooks teach usted as the distant form. In Antioquia it is often the default with everyone, including close family and small children. A paisa saying usted to you is not keeping you at arm's length — they may simply have never used anything else. Reading it as coldness is one of the most common mistakes foreigners make in Medellín."
        },
        {
          label: "The introduction is short on purpose",
          body:
            "Alex gives his name, his flat and his nationality in one line and stops. Colombian introductions in a group setting stay brief; the detail comes later, one-to-one, over coffee. Delivering a paragraph about yourself to the room reads as taking up more than your share of a meeting that has an agenda."
        },
        {
          label: "Being asked about the dog is being accepted",
          body:
            "Doña Ruth's “usted es el del perro” means the building has already noticed him and discussed him. That sounds like surveillance and is closer to welcome — it means he registers as a neighbour rather than a stranger. Bristling at it would be reading a Colombian building the way you would read an anonymous one."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “Estoy profesor” for “I'm a teacher”",
          whyItFails:
            "Professions take ser, because Spanish treats them as identity rather than circumstance. Estar there sounds like you are temporarily occupying the role of a teacher, which is not what you mean.",
          sayInstead: "Soy profesor."
        },
        {
          mistake: "Saying “Soy sin trabajo” for “I'm out of work”",
          whyItFails:
            "That makes joblessness part of who you are rather than where you currently stand. Colombians hear the difference clearly, and the ser version sounds bleaker than intended.",
          sayInstead: "Estoy sin trabajo fijo."
        },
        {
          mistake: "Answering “¿Usted quién es?” with only a first name",
          whyItFails:
            "The question in a building meeting is asking where you fit, not what you are called. A bare name leaves everyone still wondering which apartment you are.",
          sayInstead: "Soy Alex, del 502."
        },
        {
          mistake: "Switching to tú because Doña Ruth seems friendly",
          whyItFails:
            "Warmth and usted are not opposites in Antioquia. Reading her friendliness as an invitation to drop usted moves faster than she did, and the room notices.",
          sayInstead: "Keep usted until she uses tú or vos with you first."
        }
      ],
      variations: [
        {
          form: "Soy Alex, del 502.",
          register: "neutral",
          region: "General Colombian",
          whenToUse: "The default. Name plus flat number, nothing else."
        },
        {
          form: "Mucho gusto, Alex, apartamento 502.",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "A more formal room — a board meeting, or introducing yourself to the administrator."
        },
        {
          form: "Qué más, soy Alex, el nuevo del quinto.",
          register: "friendly informal",
          region: "Medellín and Antioquia",
          whenToUse: "A relaxed gathering where “qué más” is already flying around the room."
        },
        {
          form: "Buenas, mi nombre es Alex y vivo en el 502.",
          register: "polite formal",
          region: "General Colombian",
          whenToUse: "Writing it, or saying it to someone taking notes. Fuller and slightly stiffer."
        },
        {
          form: "Yo soy el del 502, el del perro.",
          register: "friendly informal",
          region: "General Colombian",
          whenToUse: "Once you know the building already has a shorthand for you, and you are leaning into it."
        }
      ],
      prompt: "Alex says “Soy profesor, pero ahora estoy sin trabajo fijo.” What is he telling the room?",
      choices: [
        "That teaching is what he is, and the lack of steady work is where he happens to be right now.",
        "That he used to be a teacher some years ago and has since changed careers entirely.",
        "That he is temporarily working as a teacher while he looks for something permanent."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Doña Ruth says “Entonces usted es el del perro.” What has just happened?",
          choices: [
            "She is asking him to confirm whether he owns a dog at all.",
            "She has placed him — the building already knows who he is.",
            "She is warning him that dogs are not allowed in the building."
          ],
          answer: 1,
          tests: "“el del …” as an identifying shorthand rather than a question"
        },
        {
          prompt: "Why does Alex answer with “del 502” rather than just his name?",
          choices: [
            "Because Colombians consider first names too informal at a first meeting.",
            "Because the flat number is required by law at residents' meetings.",
            "Because in a building the flat number is how people place each other."
          ],
          answer: 2,
          tests: "the apartment number as ordinary self-identification"
        },
        {
          prompt: "Doña Ruth uses usted with Alex all evening. What should he read into it?",
          choices: [
            "Nothing cold — in Antioquia usted is the ordinary form, even between close people.",
            "That she considers him an outsider and wants to keep her distance from him.",
            "That she is much older and expects to be addressed as a superior would be."
          ],
          answer: 0,
          tests: "paisa usted as default rather than distance"
        },
        {
          prompt: "Which of these would sound wrong in Alex's introduction?",
          choices: [
            "Soy canadiense.",
            "Estoy canadiense.",
            "Soy profesor."
          ],
          answer: 1,
          tests: "nationality as ser territory"
        }
      ]
    },
    en: {
      title: "Saying who you are at the building meeting",
      situation:
        "Alejandra has just moved into a Toronto apartment building and goes to the monthly residents' meeting. Nobody knows her yet. She has to say who she is, which unit she is in, and what she does — in about four sentences, to a room that is only half listening.",
      setting: {
        who: "Ruth has chaired the residents' meeting for nine years and knows every unit by number. Alejandra is the newest resident and has spoken to nobody in the building except the superintendent.",
        what: "A short round of introductions at the start of the meeting, before the agenda item about the water tank.",
        when: "A Tuesday evening, seven o'clock, in the ground-floor common room.",
        where: "Toronto, a six-storey building where most residents have lived for a decade or more.",
        why: "Because Alejandra will be asking these people for favours — a signature, a parcel taken in, patience about noise — for as long as she lives here. The introduction is the whole relationship in miniature."
      },
      address: {
        form: "mixed",
        who: "Ruth and Alejandra both use first names and plain “you” from the first line.",
        why: "English has one second-person form, so the register is carried by everything around it: first names rather than titles, “hi” rather than “good evening”, and short sentences. The warmth is in the word choice, not in the pronoun.",
        ifYouSwitch:
          "Saying “ma'am” to Ruth would not offend but would make her feel aged and would put a counter between them. Reserve it for someone serving you in an official capacity."
      },
      dialogue: [
        {
          speaker: "Ruth",
          target: "Okay, we've got a new neighbour. And you are?",
          translation: "Bueno, tenemos vecina nueva. ¿Usted quién es?",
          pronunciation: "oh-KAY, weev got a NOO NAY-ber. and yoo AR",
          literal: "Okay, we have got a new neighbour. And you are?",
          why: "“And you are?” is a question with the question word removed. It sounds abrupt written down and is entirely friendly spoken, because the rising tone does the work that “who” would otherwise do."
        },
        {
          speaker: "Alejandra",
          target: "I'm Alejandra, unit 502. I'm from Colombia.",
          translation: "Soy Alejandra, del 502. Soy de Colombia.",
          pronunciation: "aym al-e-HAN-dra, YOO-nit fyv-oh-TOO. aym from ko-LUM-bee-a",
          literal: "I am Alejandra, unit 502. I am from Colombia.",
          why: "English uses one verb, “be”, where Spanish would choose between ser and estar. The choice a Spanish speaker agonises over simply does not exist here — which is its own small trap when going the other way."
        },
        {
          speaker: "Ruth",
          target: "Oh, 502! So you're the one with the dog.",
          translation: "¡Ah, el 502! Entonces usted es la del perro.",
          pronunciation: "oh, fyv-oh-TOO. so yor thuh WUN with thuh dog",
          literal: "Oh, 502! So you are the one with the dog.",
          why: "English needs the full frame “the one with” where Spanish gets away with “la del”. Dropping “one” — “you're the with the dog” — is not possible, and this is a common first-year slip for Spanish speakers."
        },
        {
          speaker: "Alejandra",
          target: "Yes, that's me. He's an old dog, he doesn't bark much.",
          translation: "Sí, esa soy yo. Es un perro viejo, no ladra mucho.",
          pronunciation: "yes, thats MEE. heez an OHLD dog, hee DUZ-uhnt bark much",
          literal: "Yes, that is me. He is an old dog, he does not bark much.",
          why: "“That's me” uses the object pronoun where Spanish uses the subject. “That's I” is technically defensible and would sound bizarre; nobody says it."
        },
        {
          speaker: "Ruth",
          target: "No worries. And what do you do?",
          translation: "Tranquila. ¿Y usted a qué se dedica?",
          pronunciation: "no WUR-eez. and WUT doo yoo DOO",
          literal: "No worries. And what do you do?",
          why: "“What do you do?” with no object is the standard job question. Adding “for a living” is possible but slightly more formal; adding “for work” sounds like a survey."
        },
        {
          speaker: "Alejandra",
          target: "I'm a teacher, but right now I'm between jobs.",
          translation: "Soy profesora, pero ahora estoy sin trabajo fijo.",
          pronunciation: "aym uh TEE-cher, but ryt now aym bee-TWEEN jobz",
          literal: "I am a teacher, but right now I am between jobs.",
          why: "English marks the difference Spanish carries in ser versus estar with “right now”. Without it the two clauses would sit at the same level and the sentence would sound like a contradiction."
        }
      ],
      vocabulary: [
        {
          term: "be",
          explanation:
            "The single English verb covering everything Spanish splits between ser and estar — identity, origin, profession, mood, location and state.",
          literal: "ser / estar",
          useWhen:
            "Always. There is no choice to make, which is the good news; the bad news is that the distinction has to be carried by other words.",
          avoidWhen:
            "Describing an action in progress without the -ing form. “I am work” is the classic Spanish-speaker error where “I am working” or “I work” is meant.",
          register: "neutral",
          region: "Universal English.",
          related: ["become", "seem", "feel", "get"],
          example: {
            target: "I'm Alejandra, unit 502.",
            translation: "Soy Alejandra, del 502."
          }
        },
        {
          term: "What do you do?",
          explanation:
            "The ordinary way to ask someone's occupation. Short, and understood as being about work rather than about this afternoon.",
          literal: "¿Qué hace usted?",
          useWhen:
            "Meeting anyone socially. It works across almost every register in English.",
          avoidWhen:
            "You want to know what someone is doing this minute. Then it has to be “what are you doing?”, and the difference between the two is total.",
          register: "neutral",
          region: "Universal English; “what do you do for a living?” is slightly fuller.",
          related: ["What's your job?", "What line of work are you in?", "Where do you work?", "What do you do for a living?"],
          example: {
            target: "And what do you do?",
            translation: "¿Y usted a qué se dedica?"
          }
        },
        {
          term: "the one with the dog",
          explanation:
            "A way to identify someone by something associated with them, using “the one” as a placeholder person.",
          literal: "el/la del perro",
          useWhen:
            "Pinning down which person you mean when the group already half-knows them — the one with the red car, the one on the fifth floor.",
          avoidWhen:
            "Introducing someone properly. It identifies but does not dignify, and used to someone's face about a sore subject it can sting.",
          register: "friendly informal",
          region: "Universal English.",
          related: ["the one on the fifth floor", "the one with the bike", "the guy from 502", "the woman with the stroller"],
          example: {
            target: "So you're the one with the dog.",
            translation: "Entonces usted es la del perro."
          }
        },
        {
          term: "that's me",
          explanation:
            "“That's me.” Used to confirm an identity someone else has just described.",
          literal: "esa soy yo",
          useWhen:
            "Someone has guessed who you are and you are agreeing, usually with a bit of humour.",
          avoidWhen:
            "Introducing yourself cold. It only works as an answer, never as an opener.",
          register: "friendly informal",
          region: "Universal English.",
          related: ["that would be me", "guilty", "yep, that's me", "the very same"],
          example: {
            target: "Yes, that's me.",
            translation: "Sí, esa soy yo."
          }
        },
        {
          term: "no worries",
          explanation:
            "Reassurance that whatever was just apologised for or explained is not a problem.",
          literal: "tranquilo/a",
          useWhen:
            "Waving off someone's concern, or being waved off yourself. Very frequent in Canadian and Australian English.",
          avoidWhen:
            "Someone is genuinely upset about something you did. Then it reads as dismissive rather than kind.",
          register: "friendly informal",
          region: "Universal English; “no worries” is especially common in Canada and Australia, “no problem” in the US.",
          related: ["no problem", "don't worry about it", "it's fine", "all good"],
          example: {
            target: "No worries, the dog isn't a bother.",
            translation: "Tranquila, el perro no molesta."
          }
        },
        {
          term: "between jobs",
          explanation:
            "“Between jobs.” The usual way to say you are not currently employed without saying “unemployed”.",
          literal: "entre trabajos",
          useWhen:
            "Being honest about an unsettled situation in a way that keeps its dignity.",
          avoidWhen:
            "A formal application. There you would write “seeking employment” or name the contract you are on.",
          register: "neutral",
          region: "Universal English.",
          related: ["freelancing", "in between things", "looking for work", "self-employed"],
          example: {
            target: "Right now I'm between jobs.",
            translation: "Ahora estoy sin trabajo fijo."
          }
        },
        {
          term: "unit 502",
          explanation:
            "“Unit 502.” In a North American apartment building, your unit number is a normal way to identify yourself.",
          literal: "unidad 502",
          useWhen:
            "Any building context — the meeting, the front desk, a parcel, a complaint.",
          avoidWhen:
            "Outside the building, where the number means nothing and you would give the neighbourhood instead.",
          register: "neutral",
          region: "North American English; British English says “flat 502”.",
          related: ["apartment 502", "flat 502", "the fifth floor", "502"],
          example: {
            target: "I'm Alejandra, unit 502.",
            translation: "Soy Alejandra, del 502."
          }
        }
      ],
      note:
        "The single most useful thing in this lesson is the last line of dialogue. English says “I'm a teacher” and “I'm between jobs” with the same verb, and leans on “right now” to keep them apart. A Spanish speaker who drops that “right now” will be heard as saying the two things carry equal weight.",
      culture: [
        {
          label: "Your unit number is your name",
          body:
            "In North American apartment buildings, residents are routinely known by number long before they are known by name — “502”, “the woman in 301”. It is not impersonal; it is how a building of eighty strangers stays navigable. Offering your number when you introduce yourself is genuinely helpful, and leaving it out makes you harder to place."
        },
        {
          label: "English carries register without changing the pronoun",
          body:
            "Spanish speakers often look for the English usted and, not finding one, assume English is uniformly informal. It is not. The formality lives in the vocabulary and the length of the sentence: “Could I possibly ask you to…” against “Can you…”. Learning to hear that scale takes the place of learning a pronoun."
        },
        {
          label: "The introduction is short on purpose",
          body:
            "Alejandra gives her name, her unit and where she is from in one line and stops. Introductions in a group setting stay brief; the detail comes later, one-to-one, over coffee. Delivering a paragraph about yourself to a room that has an agenda reads as taking up more than your share."
        },
        {
          label: "Being asked about the dog is being accepted",
          body:
            "Ruth's “you're the one with the dog” means the building has already noticed her and talked about her. That sounds like surveillance and is closer to welcome — it means she registers as a neighbour rather than a stranger. Bristling at it would be reading the room wrong."
        }
      ],
      pitfalls: [
        {
          mistake: "Saying “I am teacher” for “I'm a teacher”",
          whyItFails:
            "English requires an article before a singular profession, where Spanish forbids it. “Soy profesora” has no article, and carrying that habit across produces the single most recognisable Spanish-speaker error in English.",
          sayInstead: "I'm a teacher."
        },
        {
          mistake: "Saying “I have 30 years” for “I'm 30”",
          whyItFails:
            "Spanish uses tener for age; English uses be. The literal translation is grammatical English that means something entirely different — it sounds like you possess three decades of something.",
          sayInstead: "I'm 30."
        },
        {
          mistake: "Answering “And you are?” with only a first name",
          whyItFails:
            "The question at a building meeting is asking where you fit, not what you are called. A bare name leaves everyone still wondering which unit you are.",
          sayInstead: "I'm Alejandra, unit 502."
        },
        {
          mistake: "Saying “What are you doing?” when you mean “What do you do?”",
          whyItFails:
            "The continuous form asks about this exact moment. Asked at an introduction it sounds like you have caught someone in the act of something.",
          sayInstead: "What do you do?"
        }
      ],
      variations: [
        {
          form: "I'm Alejandra, unit 502.",
          register: "neutral",
          region: "North American English",
          whenToUse: "The default. Name plus unit number, nothing else."
        },
        {
          form: "Hi, I'm Alejandra — I'm in 502.",
          register: "friendly informal",
          region: "Universal English",
          whenToUse: "A relaxed room where people are talking over each other anyway."
        },
        {
          form: "Good evening, my name is Alejandra and I live in unit 502.",
          register: "polite formal",
          region: "Universal English",
          whenToUse: "A board meeting, or introducing yourself to the property manager."
        },
        {
          form: "Alejandra, 502. Just moved in.",
          register: "friendly informal",
          region: "Universal English",
          whenToUse: "When the round of introductions is moving fast and nobody wants a sentence."
        },
        {
          form: "I'm the one in 502 — the one with the dog.",
          register: "friendly informal",
          region: "Universal English",
          whenToUse: "Once you know the building already has a shorthand for you, and you are leaning into it."
        }
      ],
      prompt: "Alejandra says “I'm a teacher, but right now I'm between jobs.” What is she telling the room?",
      choices: [
        "That teaching is what she is, and the lack of steady work is where she happens to be right now.",
        "That she used to be a teacher some years ago and has since changed careers entirely.",
        "That she is temporarily working as a teacher while she looks for something permanent."
      ],
      answer: 0,
      practiceExtra: [
        {
          prompt: "Ruth says “So you're the one with the dog.” What has just happened?",
          choices: [
            "She is asking her to confirm whether she owns a dog at all.",
            "She has placed her — the building already knows who she is.",
            "She is warning her that dogs are not allowed in the building."
          ],
          answer: 1,
          tests: "“the one with …” as an identifying shorthand rather than a question"
        },
        {
          prompt: "Why does Alejandra answer with “unit 502” rather than just her name?",
          choices: [
            "Because first names are considered too informal at a first meeting here.",
            "Because the unit number is required by law at residents' meetings.",
            "Because in a building the unit number is how people place each other."
          ],
          answer: 2,
          tests: "the unit number as ordinary self-identification"
        },
        {
          prompt: "English has no usted. How is the formality of a room signalled instead?",
          choices: [
            "Through word choice and sentence length rather than through the pronoun.",
            "Through the pronoun “thou”, which is still used in formal settings today.",
            "It is not signalled at all — English conversation has a single flat register."
          ],
          answer: 0,
          tests: "register carried lexically rather than pronominally"
        },
        {
          prompt: "Which of these would sound wrong in Alejandra's introduction?",
          choices: [
            "I'm a teacher.",
            "I am teacher.",
            "I'm from Colombia."
          ],
          answer: 1,
          tests: "the article before a singular profession"
        }
      ]
    }
  }
);
