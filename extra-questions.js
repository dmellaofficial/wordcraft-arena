// ==========================================
// WordCraft & Grammar Arena - Extra Practice Categories
// ==========================================

const idiomsQuestions = [
    { q: "What does the idiom 'Break a leg' mean?", options: ["Hurt yourself", "Good luck", "Run fast", "Fail completely"], answer: 1, explanation: "'Break a leg' is a common idiom wishing someone good luck, especially before a performance." },
    { q: "What does 'Bite the bullet' mean?", options: ["Face a difficult situation with courage", "Eat quickly", "Make a mistake", "Give up"], answer: 0, explanation: "To 'bite the bullet' means to get a difficult or unpleasant task over with because it is inevitable." },
    { q: "What does 'A piece of cake' signify?", options: ["A delicious dessert", "Something very easy", "A birthday celebration", "A difficult puzzle"], answer: 1, explanation: "An idiom meaning a task that is simple and effortless to accomplish." },
    { q: "What does 'Under the weather' mean?", options: ["Feeling sick or unwell", "Standing in the rain", "Feeling extremely happy", "Confused"], answer: 0, explanation: "Feeling 'under the weather' means feeling slightly ill or low on energy." },
    { q: "What does 'Spill the beans' mean?", options: ["Make a mess", "Plant seeds", "Reveal a secret", "Cook dinner"], answer: 2, explanation: "To 'spill the beans' means to disclose confidential information or a secret." }
    // You can expand this pool with more idiom questions as needed!
];

const wordAnalogyQuestions = [
    { q: "Hot is to Cold as Tall is to...?", options: ["Short", "High", "Wide", "Big"], answer: 0, explanation: "This is an antonym analogy. Short is the opposite of tall, just as cold is the opposite of hot." },
    { q: "Bird is to Feathers as Fish is to...?", options: ["Water", "Scales", "Gills", "Swim"], answer: 1, explanation: "Birds are covered in feathers; fish are covered in scales." },
    { q: "Book is to Reading as Fork is to...?", options: ["Cooking", "Eating", "Kitchen", "Metal"], answer: 1, explanation: "A book is used for reading, and a fork is used for eating." },
    { q: "Doctor is to Hospital as Teacher is to...?", options: ["Student", "School", "Book", "Education"], answer: 1, explanation: "A doctor works in a hospital, and a teacher works in a school." },
    { q: "Puppy is to Dog as Kitten is to...?", options: ["Cat", "Tiger", "Animal", "Meow"], answer: 0, explanation: "A puppy is a young dog, and a kitten is a young cat." }
];

const readingCompQuestions = [
    { q: "Read: 'Despite the sudden storm, the marathon runners kept going.' What does this imply?", options: ["The race was cancelled", "The runners were resilient", "The storm was weak", "Runners dislike rain"], answer: 1, explanation: "Persisting despite a sudden storm highlights the runners' resilience and determination." },
    { q: "Read: 'Her meticulous attention to detail ensured zero errors in the report.' What does meticulous mean?", options: ["Careless", "Very careful and precise", "Rushed", "Lazy"], answer: 1, explanation: "Meticulous means showing great attention to detail; very careful and precise." },
    { q: "Read: 'The ancient manuscript was too fragile to be touched without gloves.' Why were gloves necessary?", options: ["To keep hands warm", "To protect the fragile manuscript", "To look professional", "Because of cold ink"], answer: 1, explanation: "Gloves protect delicate ancient items from oils and damage." },
    { q: "Read: 'Innovations in renewable energy are vital for reducing carbon footprints.' What is a primary benefit mentioned?", options: ["Lowering carbon footprints", "Increasing oil prices", "Stopping all weather changes", "Making cars faster"], answer: 0, explanation: "The text directly states renewable energy is vital for reducing carbon footprints." },
    { q: "Read: 'The novel's ambiguous ending left readers debating for hours.' What is an ambiguous ending?", options: ["Clear and happy", "Open to multiple interpretations", "Tragic and sudden", "Incomplete due to missing pages"], answer: 1, explanation: "Ambiguous means open to more than one interpretation; having a double meaning." }
];

const identifyingErrorsQuestions = [
    { q: "Identify the error in: 'Each of the students have submitted their assignment.'", options: ["Each -> Every", "have -> has", "their -> his", "No error"], answer: 1, explanation: "'Each' is singular, so it requires the singular verb 'has' instead of 'have'." },
    { q: "Identify the error in: 'She don't like eating vegetables.'", options: ["She -> They", "don't -> doesn't", "eating -> eat", "No error"], answer: 1, explanation: "With third-person singular subjects ('She'), the auxiliary verb must be 'doesn't'." },
    { q: "Identify the error in: 'Between you and I, this plan is risky.'", options: ["Between -> Among", "I -> me", "risky -> safe", "No error"], answer: 1, explanation: "Prepositions like 'between' take object pronouns, so it should be 'you and me'." },
    { q: "Identify the error in: 'The team are winning their match today.'", options: ["team -> teams", "are -> is", "their -> its", "No error"], answer: 1, explanation: "In American/standard context, collective nouns like 'team' acting as a single unit take singular verbs ('is')." },
    { q: "Identify the error in: 'Neither of the options are correct.'", options: ["Neither -> Either", "are -> is", "correct -> wrong", "No error"], answer: 1, explanation: "'Neither' is singular, taking the singular verb 'is'." }
];

const vocabularyQuestions = [
    { q: "What is a synonym for 'Ephemeral'?", options: ["Permanent", "Short-lived", "Bright", "Heavy"], answer: 1, explanation: "'Ephemeral' means lasting for a very short time." },
    { q: "What does 'Benevolent' mean?", options: ["Cruel", "Kind and well-meaning", "Confused", "Wealthy"], answer: 1, explanation: "'Benevolent' describes someone well-meaning and kindly disposed." },
    { q: "What is the meaning of 'Pragmatic'?", options: ["Idealistic", "Practical and realistic", "Emotional", "Stubborn"], answer: 1, explanation: "'Pragmatic' means dealing with things sensibly and realistically." },
    { q: "What does 'Ambivalent' signify?", options: ["Having mixed feelings", "Certain and confident", "Angry", "Indifferent"], answer: 0, explanation: "'Ambivalent' means having mixed feelings or contradictory ideas about something." },
    { q: "What is a synonym for 'Cacophony'?", options: ["Harmony", "A harsh mixture of sounds", "Silence", "Melody"], answer: 1, explanation: "'Cacophony' refers to a harsh, discordant mixture of sounds." }
];
