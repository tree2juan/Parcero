const lessons = [{
  id: "greeting-at-the-cafe",
  level: "Starter · Everyday life",
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
}];
