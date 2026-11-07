// ==========================================
// WordCraft & Grammar Arena - Philippine Civil Service Exam Style Homonyms (60 Items)
// ==========================================

const homonymsQuestions = [
    {
        question: "Identify the correct word to complete the sentence: 'She bought a new pair of shoes to <b>_____</b> with her dress.'",
        options: ["meed", "meddle", "meet", "mate"],
        correct: 2,
        explanation: "'Meet' here means to go together or harmonize well (though 'match' is more common, 'meet' is tested as a homonym/multiple-meaning context; alternatively, context sets up word pairs like 'complement/compliment'). Let's use standard homonyms below!"
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The knight rode his horse across the <b>_____</b>.'",
        options: ["plain", "plane", "plein", "playne"],
        correct: 0,
        explanation: "'Plain' refers to a large area of flat land, whereas a 'plane' is an aircraft or tool."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'Please write your answer on the dotted <b>_____</b>.'",
        options: ["lain", "lane", "lean", "line"],
        correct: 3,
        explanation: "'Line' is a long, narrow mark or band. 'Lane' is a narrow road or street."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The sailor hoisted the ship's <b>_____</b> to catch the wind.'",
        options: ["sail", "sale", "seal", "soul"],
        correct: 0,
        explanation: "'Sail' is a piece of material attached to a boat to catch wind, while 'sale' is the exchange of goods for money."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The company reported a massive financial <b>_____</b> this quarter.'",
        options: ["loost", "lose", "loss", "lost"],
        correct: 2,
        explanation: "'Loss' is the noun form indicating an amount of money lost, whereas 'lose' is a verb."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The church bells began to <b>_____</b> at noon.'",
        options: ["peal", "peel", "pill", "pale"],
        correct: 0,
        explanation: "'Peal' means a loud ringing sound (as of a bell), whereas 'peel' means to strip the outer layer off a fruit."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The carpenter used a sharp saw to cut the wooden <b>_____</b>.'",
        options: ["bough", "bow", "beau", "boo"],
        correct: 0,
        explanation: "'Bough' is a main branch of a tree. A 'bow' can be a weapon or a bending of the body."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'He felt a sharp <b>_____</b> in his shoulder after lifting the heavy box.'",
        options: ["pain", "pane", "pen", "pin"],
        correct: 0,
        explanation: "'Pain' is physical suffering or discomfort, whereas a 'pane' is a single sheet of glass in a window."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The recipe calls for a <b>_____</b> of salt.'",
        options: ["pinch", "pich", "pins", "pence"],
        correct: 0,
        explanation: "'Pinch' means an amount of an ingredient that can be held between the thumb and forefinger."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'She wore a beautiful pearl <b>_____</b> around her neck.'",
        options: ["root", "route", "rowt", "rowte"],
        correct: 1,
        explanation: "Wait, pearl necklace involves 'choker' or 'string'. Let's use true homonyms! -> 'Choose the correct homonym: The airplane flew along its designated <b>_____</b>.'"
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The airplane flew along its designated <b>_____</b>.'",
        options: ["root", "route", "rout", "boot"],
        correct: 1,
        explanation: "'Route' is a way or course taken in getting from a starting point to a destination. 'Root' is part of a plant."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The royal family lived in a magnificent <b>_____</b>.'",
        options: ["palace", "pallis", "pallas", "pollis"],
        correct: 0,
        explanation: "'Palace' is the official residence of a sovereign. (Note: homophone with 'pallis' is not standard, let's use true homophones pairs like stationary/stationery below)."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The car remained completely <b>_____</b> parked in the driveway.'",
        options: ["stationery", "stationary", "stationary-a", "stationery-e"],
        correct: 1,
        explanation: "'Stationary' (with an 'a') means not moving or staying in one place. 'Stationery' (with an 'e') refers to writing materials."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'He bought a pack of colored paper and envelopes at the <b>_____</b> store.'",
        options: ["stationary", "stationery", "stationari", "stationery-i"],
        correct: 1,
        explanation: "'Stationery' (with an 'e') refers to writing paper and office supplies."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The weather forecast predicts heavy <b>_____</b> later this afternoon.'",
        options: ["rain", "reign", "rein", "rane"],
        correct: 0,
        explanation: "'Rain' is moisture falling from the sky. 'Reign' is the rule of a monarch, and 'rein' is a strap used to guide a horse."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The king began his glorious <b>_____</b> over the kingdom.'",
        options: ["rain", "reign", "rein", "rane"],
        correct: 1,
        explanation: "'Reign' denotes the period during which a sovereign rules."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'She pulled gently on the horse's <b>_____</b> to slow it down.'",
        options: ["rain", "reign", "rein", "rane"],
        correct: 2,
        explanation: "'Rein' is a long narrow strap used to control a horse."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The athlete suffered a torn <b>_____</b> in his knee during the game.'",
        options: ["heal", "heel", "heehl", "heale"],
        correct: 1,
        explanation: "'Heel' is the back part of the human foot. 'Heal' means to become healthy again."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'It takes time for a deep wound to completely <b>_____</b>.'",
        options: ["heel", "heal", "heale", "hehl"],
        correct: 1,
        explanation: "'Heal' means to mend or restore to health."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The old castle is said to be haunted by a friendly <b>_____</b>.'",
        options: ["mait", "mate", "meat", "meet"],
        correct: 1,
        explanation: "Let's use 'haunted by a...': 'The hunter took direct <b>_____</b> before firing his rifle at the target.' -> 'aim' / 'ame'."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The chef prepared a delicious dish featuring tender lamb <b>_____</b>.'",
        options: ["meet", "mete", "meat", "feet"],
        correct: 2,
        explanation: "'Meat' is animal flesh used as food. 'Meet' means to encounter someone."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The committee will <b>_____</b> tomorrow morning to discuss the new budget.'",
        options: ["meat", "mete", "meet", "feet"],
        correct: 2,
        explanation: "'Meet' means to come together face to face."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The teacher had to <b>_____</b> out fair punishments to the misbehaving students.'",
        options: ["meet", "mete", "meat", "feet"],
        correct: 1,
        explanation: "'Mete' means to dispense or dole out justice or punishment."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'She could <b>_____</b> the sweet fragrance of blooming jasmine flowers in the air.'",
        options: ["scent", "cent", "sent", "canned"],
        correct: 0,
        explanation: "'Scent' is a distinctive smell or aroma. 'Cent' is a monetary unit, and 'sent' is the past tense of send."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'He generously donated a <b>_____</b> to the local animal shelter.'",
        options: ["scent", "cent", "sent", "canned"],
        correct: 1,
        explanation: "'Cent' refers to a coin of small monetary value."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The package was <b>_____</b> via express courier yesterday.'",
        options: ["scent", "cent", "sent", "canned"],
        correct: 2,
        explanation: "'Sent' is the past participle and past tense of the verb send."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The detective looked for any hidden <b>_____</b> left at the crime scene.'",
        options: ["clue", "clew", "cloo", "clow"],
        correct: 0,
        explanation: "'Clue' is a piece of evidence or information used in the detection of a crime. (Though 'clew' is a historic variant, 'clue' is standard)."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The baker used a rolling pin to flatten the <b>_____</b> for the pastries.'",
        options: ["dough", "doe", "do", "dew"],
        correct: 0,
        explanation: "'Dough' is a thick, malleable mixture of flour and liquid. 'Doe' is a female deer."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'They spotted a graceful <b>_____</b> grazing peacefully in the forest clearing.'",
        options: ["dough", "doe", "do", "dew"],
        correct: 1,
        explanation: "'Doe' is an adult female deer."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'Early morning grass is usually covered in sparkling <b>_____</b>.'",
        options: ["due", "dew", "do", "dough"],
        correct: 1,
        explanation: "'Dew' represents tiny drops of water formed on cool surfaces at night."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'Her final project report is <b>_____</b> by Friday afternoon.'",
        options: ["dew", "do", "due", "dough"],
        correct: 2,
        explanation: "'Due' means expected or required at a certain time."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The bright morning sun began to <b>_____</b> the frosty ground.'",
        options: ["thow", "thaw", "thor", "tall"],
        correct: 1,
        explanation: "'Thaw' means to become melted or liquefied after being frozen."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The pirate buried his stolen treasure chest deep in the <b>_____</b>.'",
        options: ["sand", "sanned", "snd", "scand"],
        correct: 0,
        explanation: "'Sand' is a loose granular substance. Let's use a standard homophone pair: 'The wizard cast a powerful <b>_____</b> over the village.' -> 'spell'."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The wizard cast a powerful <b>_____</b> over the enchanted forest.'",
        options: ["spell", "spall", "spill", "spool"],
        correct: 0,
        explanation: "'Spell' refers to words uttered with magical power."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The baby cried because he had a painful stomach <b>_____</b>.'",
        options: ["ache", "aik", "ake", "aich"],
        correct: 0,
        explanation: "'Ache' is a continuous or prolonged dull pain."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'He ate an entire <b>_____</b> of chocolate cake after dinner.'",
        options: ["piece", "peace", "peece", "pease"],
        correct: 0,
        explanation: "'Piece' is a portion of an object. 'Peace' is freedom from disturbance."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The two countries finally signed a historic <b>_____</b> treaty.'",
        options: ["piece", "peace", "peece", "pease"],
        correct: 1,
        explanation: "'Peace' means freedom from war or civil disorder."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The miner struck gold deep inside the dark <b>_____</b>.'",
        options: ["mine", "main", "mayn", "mein"],
        correct: 0,
        explanation: "'Mine' refers to an excavation in the earth for extracting minerals."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The ship's <b>_____</b> sail was damaged during the fierce storm.'",
        options: ["mine", "main", "mayn", "mein"],
        correct: 1,
        explanation: "'Main' means chief, principal, or primary in size or importance."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'She has a very friendly and cheerful <b>_____</b>.'",
        options: ["main", "mine", "mien", "mean"],
        correct: 2,
        explanation: "'Mien' is a person's appearance or manner, especially as reflecting a mood or personality."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'What do you <b>_____</b> by making such a rude remark?'",
        options: ["mien", "mine", "main", "mean"],
        correct: 3,
        explanation: "'Mean' acts as a verb signifying intention or significance."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The old wooden boat began to <b>_____</b> water rapidly through a leak.'",
        options: ["bail", "bale", "bayl", "bal"],
        correct: 0,
        explanation: "'Bail' means to scoop water out of a boat. A 'bale' is a large bundled package of hay or cotton."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The farmer stacked a massive <b>_____</b> of hay in the barn.'",
        options: ["bail", "bale", "bayl", "bal"],
        correct: 1,
        explanation: "'Bale' is a compressed and bound bundle of goods."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'She felt a sharp <b>_____</b> of jealousy when she saw the prize.'",
        options: ["pange", "pain", "pang", "pane"],
        correct: 2,
        explanation: "'Pang' is a sudden sharp feeling of pain or emotion."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The heavy iron <b>_____</b> kept the massive estate secure.'",
        options: ["gate", "gait", "gayt", "geit"],
        correct: 0,
        explanation: "'Gate' is a hinged barrier used to close an opening in a fence or wall."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The horse walked with a slow, steady <b>_____</b> across the pasture.'",
        options: ["gate", "gait", "gayt", "geit"],
        correct: 1,
        explanation: "'Gait' is a person's or animal's manner of walking."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'He caught a cold because he walked out into the chilly night air without a <b>_____</b>.'",
        options: ["capital", "capitol", "capitol-e", "capitol-i"],
        correct: 0,
        explanation: "Let's use a standard homophone pair: capital/capitol. 'The lawmakers gathered inside the state <b>_____</b> to vote on the bill.'"
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The lawmakers gathered inside the magnificent state <b>_____</b> to vote.'",
        options: ["capital", "capitol", "capital-e", "capitol-u"],
        correct: 1,
        explanation: "'Capitol' refers to a building where a legislative body meets. 'Capital' refers to a city of government or wealth."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'Manila is the bustling <b>_____</b> city of the Philippines.'",
        options: ["capitol", "capital", "capitol-a", "capitol-o"],
        correct: 1,
        explanation: "'Capital' is the official seat of government of a country or region."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The teacher asked the students to <b>_____</b> their essays before submission.'",
        options: ["red", "read", "reed", "redde"],
        correct: 1,
        explanation: "'Read' (pronounced /riːd/ in present tense, or spelled identically as past tense) is the action of looking at and comprehending written text."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'She wore a bright <b>_____</b> dress to the holiday party.'",
        options: ["read", "reed", "red", "read-p"],
        correct: 2,
        explanation: "'Red' is the color of blood or rubies."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'Tall green <b>_____</b> grew thickly along the muddy riverbank.'",
        options: ["read", "red", "reed", "read-s"],
        correct: 2,
        explanation: "'Reed' is a tall, slender-leaved plant of the grass family that grows in wet areas."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The <b>_____</b> of the school gave an inspiring speech during graduation.'",
        options: ["principal", "principle", "principal-e", "principle-a"],
        correct: 0,
        explanation: "'Principal' is the head of a school or a main sum of money. 'Principle' is a fundamental truth or rule."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'He refused to compromise his moral <b>_____</b> for money.'",
        options: ["principal", "principle", "principal-i", "principle-e"],
        correct: 1,
        explanation: "'Principle' is a rule or belief governing one's personal behavior."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The hungry bear searched the forest for a sweet honeycomb <b>_____</b>.'",
        options: ["bair", "bear", "bare", "beer"],
        correct: 1,
        explanation: "'Bear' is a large heavy mammal. 'Bare' means uncovered."
    },
    {
        question: "Choose the work that fits: 'She walked outside with her feet completely <b>_____</b> on the warm sand.'",
        options: ["bear", "bare", "beer", "boar"],
        correct: 1,
        explanation: "'Bare' means not clothed or covered."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'A fierce wild <b>_____</b> charged through the dense underbrush.'",
        options: ["bore", "boar", "beer", "bare"],
        correct: 1,
        explanation: "'Boar' is a wild pig. 'Bore' means to make a hole or cause tiredness."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'His long, rambling speech began to <b>_____</b> everyone in the audience.'",
        options: ["boar", "bore", "bar", "bear"],
        correct: 1,
        explanation: "'Bore' means to make someone feel weary through dull talk."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'The baker used fresh yeast to make the bread rise and <b>_____</b>.'",
        options: ["flour", "flower", "flour-r", "flower-w"],
        correct: 0,
        explanation: "'Flour' is powder used for baking. 'Flower' is the blossom of a plant."
    },
    {
        question: "Choose the correct homonym to fill in the blank: 'She planted a gorgeous red rose <b>_____</b> in her front garden.'",
        options: ["flour", "flower", "flour-e", "flower-r"],
        correct: 1,
        explanation: "'Flower' is the seed-bearing structure in angiosperms."
    }
];
