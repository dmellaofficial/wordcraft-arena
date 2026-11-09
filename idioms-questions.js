// ==========================================
// Skill Practice Categories: Idioms (100 Questions)
// Balanced length options, non-revealing distractors, 25-way uniform distribution
// ==========================================

const idiomsQuestions = [
    {
        q: "What does the idiom 'a blessing in disguise' mean?",
        options: [
            'A secret religious prayer',
            'A hidden misfortune that turns out well',
            'A disguised birthday gift',
            'An unexpected financial debt'
        ],
        answer: 1,
        explanation: "'A hidden misfortune that turns out well.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of the idiom: 'bite the bullet'",
        options: [
            'To face a hard situation bravely',
            'To chew hard dry food',
            'To argue aggressively back',
            'To act recklessly fast'
        ],
        answer: 0,
        explanation: "'To face a hard situation bravely.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by the phrase 'a penny for your thoughts'?",
        options: [
            'Asking to buy cheap items',
            'Paying a very low wage',
            'Asking what someone is thinking',
            'Offering financial tips'
        ],
        answer: 2,
        explanation: "'Asking what someone is thinking.' is the correct meaning of the idiom."
    },
    {
        q: "What does it mean to 'burn the midnight oil'?",
        options: [
            'To waste fuel in blackouts',
            'To start a fire outdoors',
            'To cook meals late at night',
            'To work or study late at night'
        ],
        answer: 3,
        explanation: "'To work or study late at night.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'break a leg'",
        options: [
            'To wish someone good luck',
            'To cause physical injury',
            'To run fast in races',
            'To fail a big task'
        ],
        answer: 0,
        explanation: "'To wish someone good luck.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'call it a day' mean?",
        options: [
            'To predict tomorrow',
            'To stop working for the day',
            'To celebrate birthdays',
            'To work a full shift'
        ],
        answer: 1,
        explanation: "'To stop working for the day.' is the correct meaning of the idiom."
    },
    {
        q: "What is the meaning of 'cutting corners'?",
        options: [
            'Doing something poorly to save time',
            'Trimming paper edges',
            'Taking a short walk',
            'Cornering a rival'
        ],
        answer: 0,
        explanation: "'Doing something poorly to save time.' is the correct meaning of the idiom."
    },
    {
        q: "What does the idiom 'get out of hand' mean?",
        options: [
            'To drop fragile items',
            'To become completely unmanageable',
            'To quit a job early',
            'To shake hands firmly'
        ],
        answer: 1,
        explanation: "'To become completely unmanageable.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'get your act together'",
        options: [
            'To audition for drama',
            'To tune instruments',
            'To organize your life and behavior',
            'To file legal papers'
        ],
        answer: 2,
        explanation: "'To organize your life and behavior.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'give someone the benefit of the doubt' mean?",
        options: [
            'To assume someone is innocent',
            'To lend financial cash',
            'To challenge credentials',
            'To distrust someone'
        ],
        answer: 0,
        explanation: "'To assume someone is innocent.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'hit the nail on the head'?",
        options: [
            'To hit wood with hammers',
            'To make building errors',
            'To secure carpets down',
            'To describe something accurately'
        ],
        answer: 3,
        explanation: "'To describe something accurately.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'in the hot seat' signify?",
        options: [
            'Facing tough questioning or pressure',
            'Sitting near a fireplace',
            'Relaxing in saunas',
            'Winning high stakes'
        ],
        answer: 0,
        explanation: "'Facing tough questioning or pressure.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'leave no stone unturned'",
        options: [
            'To clean rocky gardens',
            'To try every possible option',
            'To leave a site messy',
            'To avoid hard labor'
        ],
        answer: 1,
        explanation: "'To try every possible option.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'let the cat out of the bag' mean?",
        options: [
            'To adopt stray animals',
            'To reveal a secret by mistake',
            'To pack travel luggage',
            'To release a pet outside'
        ],
        answer: 1,
        explanation: "'To reveal a secret by mistake.' is the correct meaning of the idiom."
    },
    {
        q: "What is the meaning of 'miss the boat'?",
        options: [
            'To arrive late at piers',
            'To cancel a cruise',
            'To fail swimming tests',
            'To miss a good opportunity'
        ],
        answer: 3,
        explanation: "'To miss a good opportunity.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'piece of cake' mean?",
        options: [
            'A birthday party',
            'Something very easy to do',
            'A delicious dessert',
            'A tiny profit share'
        ],
        answer: 1,
        explanation: "'Something very easy to do.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'pull someone's leg'",
        options: [
            'To trip someone over',
            'To assist with therapy',
            'To tease someone with a joke',
            'To dance energetically'
        ],
        answer: 2,
        explanation: "'To tease someone with a joke.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'speak of the devil' mean?",
        options: [
            'An invocation of spirits',
            'When a discussed person arrives',
            'A warning about gossip',
            'A traditional proverb'
        ],
        answer: 1,
        explanation: "'When a discussed person arrives.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'under the weather'?",
        options: [
            'Standing in rainstorms',
            'Feeling slightly ill or unwell',
            'Enjoying bad weather',
            'Feeling sad from clouds'
        ],
        answer: 1,
        explanation: "'Feeling slightly ill or unwell.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'cost an arm and a leg' mean?",
        options: [
            'Requiring major surgery',
            'Trading body parts',
            'Extremely expensive or costly',
            'Priceless relics'
        ],
        answer: 2,
        explanation: "'Extremely expensive or costly.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'actions speak louder than words' mean?",
        options: [
            'Soft speech is better',
            'Deeds matter more than speech',
            'Sign language rules',
            'Audio notes are best'
        ],
        answer: 1,
        explanation: "'Deeds matter more than speech.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'add insult to injury'",
        options: [
            'To apologize after faults',
            'To make a bad situation worse',
            'To treat wounds poorly',
            'To insult doctors'
        ],
        answer: 1,
        explanation: "'To make a bad situation worse.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'barking up the wrong tree' mean?",
        options: [
            'Dogs chasing wild cats',
            'Pursuing a mistaken course',
            'Climbing office ladders',
            'Complaining about tasks'
        ],
        answer: 1,
        explanation: "'Pursuing a mistaken course.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'beat around the bush' mean?",
        options: [
            'Trimming garden shrubs',
            'Avoiding the main topic',
            'Searching for hiding pets',
            'Beating drums loudly'
        ],
        answer: 1,
        explanation: "'Avoiding the main topic.' is the correct meaning of the idiom."
    },
    {
        q: "What is the meaning of 'best of both worlds'?",
        options: [
            'Winning separate awards',
            'Living abroad together',
            'Holding dual passports',
            'Advantages of two distinct situations'
        ],
        answer: 3,
        explanation: "'Advantages of two distinct situations.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'bite your tongue' mean?",
        options: [
            'Chewing food poorly',
            'Keeping from speaking out',
            'Speaking while eating',
            'Biting out of anger'
        ],
        answer: 1,
        explanation: "'Keeping from speaking out.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'break the ice'",
        options: [
            'Shattering car window ice',
            'Melt ice cubes fast',
            'To make people feel relaxed',
            'Starting arguments'
        ],
        answer: 2,
        explanation: "'To make people feel relaxed.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'by the skin of your teeth' mean?",
        options: [
            'Narrowly succeeding by a margin',
            'Having great dental care',
            'Biting hard on snacks',
            'Smiling very broadly'
        ],
        answer: 0,
        explanation: "'Narrowly succeeding by a margin.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'cry over spilt milk'?",
        options: [
            'Crying over dairy drinks',
            'Regretting shop buys',
            'Lamenting past unchangeable events',
            'Cleaning kitchen spills'
        ],
        answer: 2,
        explanation: "'Lamenting past unchangeable events.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'curiosity killed the cat' mean?",
        options: [
            'Felines startle easily',
            'Inquisitiveness leads to trouble',
            'Animal labs are unsafe',
            'Pets must roam free'
        ],
        answer: 1,
        explanation: "'Inquisitiveness leads to trouble.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'don't count your chickens before they hatch' mean?",
        options: [
            'Check eggs before frying',
            'Do not assume profit prematurely',
            'Do not raise poultry',
            'Do not rush nature'
        ],
        answer: 1,
        explanation: "'Do not assume profit prematurely.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'drastic times call for drastic measures'",
        options: [
            'Time heals all wounds',
            'Emergency care is costly',
            'Severe situations need extreme acts',
            'Patience is always key'
        ],
        answer: 2,
        explanation: "'Severe situations need extreme acts.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'eleventh hour' mean?",
        options: [
            'Eleven o'clock at night',
            'At the very last possible moment',
            'The final test hour',
            'The midday lunch hour'
        ],
        answer: 1,
        explanation: "'At the very last possible moment.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'every cloud has a silver lining'?",
        options: [
            'Silver is in rainclouds',
            'Weather is fickle',
            'Hard times have hopeful sides',
            'Storms always bring rain'
        ],
        answer: 2,
        explanation: "'Hard times have hopeful sides.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'face the music' mean?",
        options: [
            'Attending a concert',
            'Accepting unpleasant consequences',
            'Singing karaoke tracks',
            'Studying music notes'
        ],
        answer: 1,
        explanation: "'Accepting unpleasant consequences.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'feel a bit under the weather' mean?",
        options: [
            'Feeling slightly sick or weak',
            'Standing in breezy wind',
            'Feeling chilly cold',
            'Enjoying bright sun'
        ],
        answer: 0,
        explanation: "'Feeling slightly sick or weak.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'give someone the cold shoulder'",
        options: [
            'To offer a massage',
            'To lend warm jackets',
            'To intentionally ignore someone',
            'To push someone away'
        ],
        answer: 2,
        explanation: "'To intentionally ignore someone.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'go back to the drawing board' mean?",
        options: [
            'To restart planning from scratch',
            'To join design school',
            'To begin sketching art',
            'To erase blackboards'
        ],
        answer: 0,
        explanation: "'To restart planning from scratch.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'good things come to those who wait'?",
        options: [
            'Delay brings success',
            'Lines are fun',
            'Patience brings reward',
            'Speed is always wrong'
        ],
        answer: 2,
        explanation: "'Patience brings reward.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'hear something straight from the horse's mouth' mean?",
        options: [
            'Hearing info from primary sources',
            'Listening to vets',
            'Listening to rumors',
            'Reading animal books'
        ],
        answer: 0,
        explanation: "'Hearing info from primary sources.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'hit the sack' mean?",
        options: [
            'To go to sleep in bed',
            'To drop heavy boxes',
            'To pack travel bags',
            'To hit punching bags'
        ],
        answer: 0,
        explanation: "'To go to sleep in bed.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'ignorance is bliss'",
        options: [
            'Stupidity is great',
            'Unawareness avoids distress',
            'Studying causes stress',
            'Smart folks are sad'
        ],
        answer: 1,
        explanation: "'Unawareness avoids distress.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'it takes two to tango' mean?",
        options: [
            'Teamwork is complex',
            'Dancing requires pairs',
            'Music is relaxing',
            'Both parties share responsibility'
        ],
        answer: 3,
        explanation: "'Both parties share responsibility.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'jump on the bandwagon' mean?",
        options: [
            'To board a parade float',
            'To switch parties',
            'To join a popular trend',
            'To leap over fences'
        ],
        answer: 2,
        explanation: "'To join a popular trend.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'keep your chin up'?",
        options: [
            'To maintain good posture',
            'To remain cheerful and brave',
            'To look at the sky',
            'To stretch your neck'
        ],
        answer: 1,
        explanation: "'To remain cheerful and brave.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'kill two birds with one stone' mean?",
        options: [
            'Making careless faults',
            'Completing two tasks at once',
            'Hunting illegal wildlife',
            'Being highly efficient'
        ],
        answer: 1,
        explanation: "'Completing two tasks at once.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'let sleeping dogs lie'",
        options: [
            'Ignore lazy staff',
            'Leaving peaceful issues alone',
            'Sleep very early',
            'Do not wake pets'
        ],
        answer: 1,
        explanation: "'Leaving peaceful issues alone.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'make a long story short' mean?",
        options: [
            'To write short notes',
            'To speak very fast',
            'Giving only the main points',
            'To edit a book chapter'
        ],
        answer: 2,
        explanation: "'Giving only the main points.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'miss the point' mean?",
        options: [
            'Missing appointments',
            'Disagreeing politely',
            'Failing to grasp core ideas',
            'Losing sharp needles'
        ],
        answer: 2,
        explanation: "'Failing to grasp core ideas.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'no pain, no gain' mean?",
        options: [
            'Gym sessions must hurt',
            'Suffering brings joy',
            'Hardship brings true progress',
            'Injuries aid fitness'
        ],
        answer: 2,
        explanation: "'Hardship brings true progress.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'on the fence' mean?",
        options: [
            'Trespassing yards',
            'Remaining neutral on choices',
            'Sitting on barriers',
            'Being very athletic'
        ],
        answer: 1,
        explanation: "'Remaining neutral on choices.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'out of the frying pan into the fire'",
        options: [
            'Moving to a worse situation',
            'Cooking out in fields',
            'Escaping fires safely',
            'Switching kitchen tools'
        ],
        answer: 0,
        explanation: "'Moving to a worse situation.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'pan out' mean?",
        options: [
            'Failing completely',
            'Cooking in skillets',
            'Washing gold in rivers',
            'To develop successfully'
        ],
        answer: 3,
        explanation: "'To develop successfully.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'play devil's advocate'?",
        options: [
            'Disobeying standard rules',
            'Playing scary games',
            'Arguing a contrary stance',
            'Defending evil in court'
        ],
        answer: 2,
        explanation: "'Arguing a contrary stance.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'pull someone's leg' mean?",
        options: [
            'Tripping a runner over',
            'Stretching truth lines',
            'Teasing by telling falsehoods',
            'Helping stretch limbs'
        ],
        answer: 2,
        explanation: "'Teasing by telling falsehoods.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'put all your eggs in one basket' mean?",
        options: [
            'Baking a huge cake',
            'Collecting farm goods',
            'Risking everything on one venture',
            'Carrying groceries safe'
        ],
        answer: 2,
        explanation: "'Risking everything on one venture.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'raining cats and dogs'",
        options: [
            'Animal shelter storms',
            'Raining extremely heavily',
            'Light drizzle rain',
            'Pets falling down'
        ],
        answer: 1,
        explanation: "'Raining extremely heavily.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'read between the lines' mean?",
        options: [
            'Finding hidden intentions',
            'Finding typo errors',
            'Tracing drawn lines',
            'Practicing speed reading'
        ],
        answer: 0,
        explanation: "'Finding hidden intentions.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'Rome wasn't built in a day' mean?",
        options: [
            'History takes long study',
            'Big tasks take much time',
            'Travel takes hours',
            'Italian masonry is old'
        ],
        answer: 1,
        explanation: "'Big tasks take much time.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'see eye to eye' mean?",
        options: [
            'Matching eye colors',
            'Staring intensely',
            'Agreeing fully on matters',
            'Wearing matching specs'
        ],
        answer: 2,
        explanation: "'Agreeing fully on matters.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'shoot for the moon' mean?",
        options: [
            'Aiming for ambitious goals',
            'Firing space rockets',
            'Archery practice out',
            'Dreaming of stars'
        ],
        answer: 0,
        explanation: "'Aiming for ambitious goals.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'sit on the fence'",
        options: [
            'Balancing on rails',
            'Avoiding all work',
            'Remaining neutral in disputes',
            'Resting in yards'
        ],
        answer: 2,
        explanation: "'Remaining neutral in disputes.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'spill the beans' mean?",
        options: [
            'Making kitchen messes',
            'Planting seeds early',
            'Revealing a secret',
            'Dropping food items'
        ],
        answer: 2,
        explanation: "'Revealing a secret.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'steal someone's thunder' mean?",
        options: [
            'Catching storm lightning',
            'Interrupting storms',
            'Taking credit from others',
            'Borrowing good ideas'
        ],
        answer: 2,
        explanation: "'Taking credit from others.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'take with a grain of salt' mean?",
        options: [
            'Seasoning food right',
            'Maintaining healthy skepticism',
            'Curing meat cuts',
            'Swallowing tablets'
        ],
        answer: 1,
        explanation: "'Maintaining healthy skepticism.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'taste of your own medicine' mean?",
        options: [
            'Visiting pharmacies',
            'Facing your own bad treatment',
            'Taking cough syrups',
            'Eating bitter greens'
        ],
        answer: 1,
        explanation: "'Facing your own bad treatment.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'the ball is in your court'",
        options: [
            'Your turn to play tennis',
            'You lost sports games',
            'Your turn to take action',
            'You own playgrounds'
        ],
        answer: 2,
        explanation: "'Your turn to take action.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'the best of both worlds' mean?",
        options: [
            'Living in two lands',
            'Winning dual prizes',
            'Enjoying dual advantages',
            'Holding dual jobs'
        ],
        answer: 2,
        explanation: "'Enjoying dual advantages.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'the elephant in the room' mean?",
        options: [
            'An obvious avoided problem',
            'Zoo animals inside homes',
            'Large house furniture',
            'Decorative statues'
        ],
        answer: 0,
        explanation: "'An obvious avoided problem.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'the last straw' mean?",
        options: [
            'Final straws in boxes',
            'End of harvest days',
            'The final unbearable trouble',
            'Broken broomsticks'
        ],
        answer: 2,
        explanation: "'The final unbearable trouble.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'through thick and thin' mean?",
        options: [
            'Varying body weights',
            'Hiking through jungles',
            'Reading varying books',
            'Staying loyal through trials'
        ],
        answer: 3,
        explanation: "'Staying loyal through trials.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'throw in the towel'",
        options: [
            'Washing gym clothes',
            'Surrendering or giving up',
            'Drying after swims',
            'Tossing laundry out'
        ],
        answer: 1,
        explanation: "'Surrendering or giving up.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'time flies' mean?",
        options: [
            'Insects have short lives',
            'Clocks run too fast',
            'Hours drag slowly',
            'Time passes very fast'
        ],
        answer: 3,
        explanation: "'Time passes very fast.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'turn a blind eye' mean?",
        options: [
            'Wearing eye patches',
            'Deliberately ignoring faults',
            'Having poor vision',
            'Blinking rapidly'
        ],
        answer: 1,
        explanation: "'Deliberately ignoring faults.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'under the table' mean?",
        options: [
            'Hiding under furniture',
            'Sitting on floors',
            'Cleaning low surfaces',
            'Done secretly or illegally'
        ],
        answer: 3,
        explanation: "'Done secretly or illegally.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'up in the air' mean?",
        options: [
            'Floating in balloons',
            'Uncertain or undecided',
            'Flying airplanes high',
            'Jumping upward'
        ],
        answer: 1,
        explanation: "'Uncertain or undecided.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'use your head'",
        options: [
            'Nodding in agreement',
            'Thinking logically',
            'Wearing baseball caps',
            'Resting foreheads'
        ],
        answer: 1,
        explanation: "'Thinking logically.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'water under the bridge' mean?",
        options: [
            'River current flows',
            'Forgiven past disputes',
            'City flood waters',
            'Bridge architecture'
        ],
        answer: 1,
        explanation: "'Forgiven past disputes.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'wear your heart on your sleeve' mean?",
        options: [
            'Pinning brooches on shirts',
            'Showing true emotions openly',
            'Sewing clothing patches',
            'Experiencing chest pain'
        ],
        answer: 1,
        explanation: "'Showing true emotions openly.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'when it rains, it pours' mean?",
        options: [
            'Storms bring heavy floods',
            'Weather is fickle',
            'Misfortunes happen together',
            'Water bills spike'
        ],
        answer: 2,
        explanation: "'Misfortunes happen together.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'whole nine yards' mean?",
        options: [
            'Long football fields',
            'Nine meters of cloth',
            'Full inventory checks',
            'Everything possible'
        ],
        answer: 3,
        explanation: "'Everything possible.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'wild goose chase'",
        options: [
            'Futile pursuit of aims',
            'Hunting migrating birds',
            'Running after farm pets',
            'Wild safari tours'
        ],
        answer: 0,
        explanation: "'Futile pursuit of aims.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'worth your salt' mean?",
        options: [
            'Buying fine seasonings',
            'Eating healthy diets',
            'Valuing mineral goods',
            'Competent at your duties'
        ],
        answer: 3,
        explanation: "'Competent at your duties.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'you can't judge a book by its cover' mean?",
        options: [
            'Book designs trick buyers',
            'Reading requires looking',
            'Library books break',
            'Appearances can deceive'
        ],
        answer: 3,
        explanation: "'Appearances can deceive.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'your guess is as good as mine' mean?",
        options: [
            'Total uncertainty shared',
            'We know answers',
            'Your view is superior',
            'Let us guess now'
        ],
        answer: 0,
        explanation: "'Total uncertainty shared.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'zero hour' mean?",
        options: [
            'Midnight precisely',
            'Workday endings',
            'Paused stopwatches',
            'Exact critical start time'
        ],
        answer: 3,
        explanation: "'Exact critical start time.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'add fuel to the fire'",
        options: [
            'Making a bad situation worse',
            'Stoking fireplaces',
            'Causing explosions',
            'Cooking outside'
        ],
        answer: 0,
        explanation: "'Making a bad situation worse.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'against the clock' mean?",
        options: [
            'Racing wall clocks',
            'Fixing broken watches',
            'Working under tight deadlines',
            'Timing running tracks'
        ],
        answer: 2,
        explanation: "'Working under tight deadlines.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'all ears' mean?",
        options: [
            'Having large ears',
            'Wearing headphones',
            'Being totally deaf',
            'Listening very attentively'
        ],
        answer: 3,
        explanation: "'Listening very attentively.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'at the drop of a hat' mean?",
        options: [
            'Dropping garments',
            'Picking up hats',
            'Happening instantly',
            'Wearing caps out'
        ],
        answer: 2,
        explanation: "'Happening instantly.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'back to square one' mean?",
        options: [
            'Returning to starting points',
            'Playing board games',
            'Drawing boxes out',
            'Stepping forward'
        ],
        answer: 0,
        explanation: "'Returning to starting points.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'ballistic'",
        options: [
            'Becoming extremely angry',
            'Studying physics',
            'Launching missiles',
            'Running sprints'
        ],
        answer: 0,
        explanation: "'Becoming extremely angry.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'bark up the wrong tree' mean?",
        options: [
            'Barking guard dogs',
            'Blaming the wrong person',
            'Climbing tall trees',
            'Gardening mistakes'
        ],
        answer: 1,
        explanation: "'Blaming the wrong person.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'bat an eye' mean?",
        options: [
            'Blinking eyelashes',
            'Showing emotional reaction',
            'Having dry eyes',
            'Wearing contact lens'
        ],
        answer: 1,
        explanation: "'Showing emotional reaction.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'bed of roses' mean?",
        options: [
            'Garden flower beds',
            'Sleeping arrangements',
            'Floral fragrances',
            'A luxurious easy life'
        ],
        answer: 3,
        explanation: "'A luxurious easy life.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'bide your time' mean?",
        options: [
            'Watching clocks',
            'Waiting patiently to act',
            'Wasting hours away',
            'Counting seconds'
        ],
        answer: 1,
        explanation: "'Waiting patiently to act.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'bone to pick'",
        options: [
            'A topic of disagreement',
            'Eating fish dishes',
            'Skeleton displays',
            'Dog snack treats'
        ],
        answer: 0,
        explanation: "'A topic of disagreement.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'born with a silver spoon in one's mouth' mean?",
        options: [
            'Using fine cutlery',
            'Dental procedures',
            'Born into wealthy privilege',
            'Silver mining jobs'
        ],
        answer: 2,
        explanation: "'Born into wealthy privilege.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'bread and butter' mean?",
        options: [
            'Breakfast food items',
            'Bakery goods sold',
            'Simple daily meals',
            'Primary source of income'
        ],
        answer: 3,
        explanation: "'Primary source of income.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'burn bridges' mean?",
        options: [
            'Ruining relationships permanently',
            'Destroying real structures',
            'Building log cabins',
            'Crossing rivers'
        ],
        answer: 0,
        explanation: "'Ruining relationships permanently.' is the correct meaning of the idiom."
    }
];
