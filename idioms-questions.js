// ==========================================
// Skill Practice Categories: Idioms (100 Questions)
// Guaranteed perfectly balanced answer distribution (25 each for A, B, C, D)
// ==========================================

const idiomsQuestions = [
    {
        q: "What does the idiom 'a blessing in disguise' mean?",
        options: [
            'A hidden religious ritual or prayer.',
            'An apparent misfortune that eventually results in something good.',
            'A gift given by a secret admirer.',
            'An unexpected financial debt.'
        ],
        answer: 1,
        explanation: "'An apparent misfortune that eventually results in something good.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of the idiom: 'bite the bullet'",
        options: [
            'To face a difficult or painful situation with courage and get it over with.',
            'To eat something hard and unpleasant.',
            'To argue aggressively with someone.',
            'To make a hasty and reckless decision.'
        ],
        answer: 0,
        explanation: "'To face a difficult or painful situation with courage and get it over with.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by the phrase 'a penny for your thoughts'?",
        options: [
            'Asking someone to buy something cheap.',
            'Offering financial advice.',
            'Asking someone what they are thinking about.',
            'Paying someone a very low wage.'
        ],
        answer: 2,
        explanation: "'Asking someone what they are thinking about.' is the correct meaning of the idiom."
    },
    {
        q: "What does it mean to 'burn the midnight oil'?",
        options: [
            'To waste fuel during a blackout.',
            'To start a campfire after sunset.',
            'To cook food late at night.',
            'To work or study late into the night.'
        ],
        answer: 3,
        explanation: "'To work or study late into the night.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'break a leg'",
        options: [
            'To wish someone good luck, especially before a performance.',
            'To run extremely fast in a race.',
            'To fail miserably at a task.',
            'To cause physical injury to a rival.'
        ],
        answer: 0,
        explanation: "'To wish someone good luck, especially before a performance.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'call it a day' mean?",
        options: [
            'To work a full 24-hour shift.',
            'To stop working on something for the rest of the day.',
            'To celebrate a birthday.',
            "To predict tomorrow's weather."
        ],
        answer: 1,
        explanation: "'To stop working on something for the rest of the day.' is the correct meaning of the idiom."
    },
    {
        q: "What is the meaning of 'cutting corners'?",
        options: [
            'Doing something perfunctorily or poorly to save time or money.',
            'Taking the shortest walking route home.',
            'Cornering an opponent in a debate.',
            'Trimming the edges of a piece of paper.'
        ],
        answer: 0,
        explanation: "'Doing something perfunctorily or poorly to save time or money.' is the correct meaning of the idiom."
    },
    {
        q: "What does the idiom 'get out of hand' mean?",
        options: [
            'To drop something fragile.',
            'To become out of control or unmanageable.',
            'To resign from a job voluntarily.',
            'To shake hands with a business partner.'
        ],
        answer: 1,
        explanation: "'To become out of control or unmanageable.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'get your act together'",
        options: [
            'To prepare for a drama audition.',
            'To file legal court documents.',
            'To organize your life and behavior in order to be more effective.',
            'To assemble musical instruments.'
        ],
        answer: 2,
        explanation: "'To organize your life and behavior in order to be more effective.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'give someone the benefit of the doubt' mean?",
        options: [
            "To believe someone's statement without proof, assuming innocence or honesty.",
            'To give someone financial assistance.',
            "To challenge someone's credentials.",
            'To distrust someone completely.'
        ],
        answer: 0,
        explanation: "'To believe someone's statement without proof, assuming innocence or honesty.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'hit the nail on the head'?",
        options: [
            'To cause physical harm with a hammer.',
            'To make a major construction mistake.',
            'To nail down a carpet securely.',
            'To describe or do something exact and accurate.'
        ],
        answer: 3,
        explanation: "'To describe or do something exact and accurate.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'in the hot seat' signify?",
        options: [
            'In an uncomfortable position of facing tough questioning or responsibility.',
            'Winning a high-stakes competition.',
            'Sitting near a fireplace.',
            'Relaxing in a sauna.'
        ],
        answer: 0,
        explanation: "'In an uncomfortable position of facing tough questioning or responsibility.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'leave no stone unturned'",
        options: [
            'To clean a rocky garden thoroughly.',
            'To try every possible course of action in order to achieve something.',
            'To avoid heavy physical labor.',
            'To leave a construction site messy.'
        ],
        answer: 1,
        explanation: "'To try every possible course of action in order to achieve something.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'let the cat out of the bag' mean?",
        options: [
            'To adopt a stray animal.',
            'To reveal a secret carelessly or by mistake.',
            'To pack luggage for a trip.',
            'To release a pet outdoors.'
        ],
        answer: 1,
        explanation: "'To reveal a secret carelessly or by mistake.' is the correct meaning of the idiom."
    },
    {
        q: "What is the meaning of 'miss the boat'?",
        options: [
            'To arrive late at a seaport.',
            'To fail a swimming test.',
            'To cancel a vacation cruise.',
            'To miss an opportunity or chance to do something.'
        ],
        answer: 3,
        explanation: "'To miss an opportunity or chance to do something.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'piece of cake' mean?",
        options: [
            'A birthday celebration.',
            'Something very easy to accomplish.',
            'A delicious dessert recipe.',
            'A small share of profits.'
        ],
        answer: 1,
        explanation: "'Something very easy to accomplish.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'pull someone's leg'",
        options: [
            'To trip someone maliciously.',
            'To assist someone with physical therapy.',
            'To tease or joke with someone by telling them something untrue.',
            'To dance enthusiastically.'
        ],
        answer: 2,
        explanation: "'To tease or joke with someone by telling them something untrue.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'speak of the devil' mean?",
        options: [
            'An invocation of dark spirits.',
            'Said when the person you were just talking about arrives unexpectedly.',
            'A warning about dangerous gossip.',
            'A religious proverb.'
        ],
        answer: 1,
        explanation: "'Said when the person you were just talking about arrives unexpectedly.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'under the weather'?",
        options: [
            'Experiencing bad weather conditions.',
            'Feeling slightly ill or unwell.',
            'Feeling depressed due to clouds.',
            'Standing out in a rainstorm.'
        ],
        answer: 1,
        explanation: "'Feeling slightly ill or unwell.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'cost an arm and a leg' mean?",
        options: [
            'Traded body parts in a deal.',
            'Required major surgery.',
            'Extremely expensive or costly.',
            'Priceless and irreplaceable.'
        ],
        answer: 2,
        explanation: "'Extremely expensive or costly.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'actions speak louder than words' mean?",
        options: [
            'Speaking softly is better than shouting.',
            'What people do is more important than what they say they will do.',
            'Recording audio is better than writing notes.',
            'Sign language is more effective than speech.'
        ],
        answer: 1,
        explanation: "'What people do is more important than what they say they will do.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'add insult to injury'",
        options: [
            'To insult a medical doctor.',
            'To make a bad situation even worse.',
            'To apologize after an accident.',
            'To treat a wound improperly.'
        ],
        answer: 1,
        explanation: "'To make a bad situation even worse.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'barking up the wrong tree' mean?",
        options: [
            'Climbing the wrong ladder at work.',
            'Pursuing a mistaken line of thought or accusing the wrong person.',
            'Complaining about useless things.',
            'A hunting dog chasing the wrong animal.'
        ],
        answer: 1,
        explanation: "'Pursuing a mistaken line of thought or accusing the wrong person.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'beat around the bush' mean?",
        options: [
            'Trimming garden shrubbery.',
            'Avoiding the main topic by talking in a roundabout way.',
            'Beating drums in the forest.',
            'Searching for hiding animals.'
        ],
        answer: 1,
        explanation: "'Avoiding the main topic by talking in a roundabout way.' is the correct meaning of the idiom."
    },
    {
        q: "What is the meaning of 'best of both worlds'?",
        options: [
            'Winning two separate awards.',
            'Living in two different countries simultaneously.',
            'Having dual citizenship.',
            'All the advantages of two contrasting situations at the same time.'
        ],
        answer: 3,
        explanation: "'All the advantages of two contrasting situations at the same time.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'bite your tongue' mean?",
        options: [
            'To chew food carelessly.',
            'To make an effort to keep from speaking.',
            'To speak while eating.',
            'To bite someone out of anger.'
        ],
        answer: 1,
        explanation: "'To make an effort to keep from speaking.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'break the ice'",
        options: [
            'To melt ice cubes for drinks.',
            'To shatter a frozen windshield.',
            'To make people feel more comfortable and relaxed in a social setting.',
            'To start an argument.'
        ],
        answer: 2,
        explanation: "'To make people feel more comfortable and relaxed in a social setting.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'by the skin of your teeth' mean?",
        options: [
            'Narrowly succeeding at something by a very slim margin.',
            'Having very strong dental hygiene.',
            'Smiling broadly.',
            'Biting hard on food.'
        ],
        answer: 0,
        explanation: "'Narrowly succeeding at something by a very slim margin.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'cry over spilt milk'?",
        options: [
            'Crying when drinking dairy products.',
            'Regretting grocery purchases.',
            'Complaining or lamenting about something that has already happened and cannot be changed.',
            'Cleaning up kitchen messes.'
        ],
        answer: 2,
        explanation: "'Complaining or lamenting about something that has already happened and cannot be changed.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'curiosity killed the cat' mean?",
        options: [
            'Felines are easily startled.',
            'Being overly inquisitive can lead to danger or trouble.',
            'Animal research is dangerous.',
            'Pets should not roam freely.'
        ],
        answer: 1,
        explanation: "'Being overly inquisitive can lead to danger or trouble.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'don't count your chickens before they hatch' mean?",
        options: [
            'Check eggs before cooking them.',
            'Do not assume success or profit until it actually happens.',
            'Do not raise poultry on a farm.',
            'Do not rush biological processes.'
        ],
        answer: 1,
        explanation: "'Do not assume success or profit until it actually happens.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'drastic times call for drastic measures'",
        options: [
            'Time heals all wounds.',
            'Emergency medical care is expensive.',
            'Severe situations require extreme or unconventional actions.',
            'Patience is always the best policy.'
        ],
        answer: 2,
        explanation: "'Severe situations require extreme or unconventional actions.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'eleventh hour' mean?",
        options: [
            "Eleven o'clock at night.",
            "At the very last possible moment before it's too late.",
            'The final hour of a test.',
            'The lunch break hour.'
        ],
        answer: 1,
        explanation: "'At the very last possible moment before it's too late.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'every cloud has a silver lining'?",
        options: [
            'Weather patterns are unpredictable.',
            'Silver can be found in rainclouds.',
            'Every difficult or sad situation has a hopeful or positive aspect to it.',
            'Storms always bring rain.'
        ],
        answer: 2,
        explanation: "'Every difficult or sad situation has a hopeful or positive aspect to it.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'face the music' mean?",
        options: [
            'To attend a classical concert.',
            'To accept the unpleasant consequences of your actions.',
            'To sing karaoke in public.',
            'To study music theory.'
        ],
        answer: 1,
        explanation: "'To accept the unpleasant consequences of your actions.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'feel a bit under the weather' mean?",
        options: [
            'Feeling slightly sick or unwell.',
            'Standing in a breeze.',
            'Feeling cold.',
            'Enjoying outdoor sunshine.'
        ],
        answer: 0,
        explanation: "'Feeling slightly sick or unwell.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'give someone the cold shoulder'",
        options: [
            'To offer a massage.',
            'To give someone a chilly winter jacket.',
            'To intentionally ignore or be unfriendly to someone.',
            'To push someone away.'
        ],
        answer: 2,
        explanation: "'To intentionally ignore or be unfriendly to someone.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'go back to the drawing board' mean?",
        options: [
            'To start planning something over again because the first attempt failed.',
            'To return to architecture school.',
            'To start sketching paintings.',
            'To erase a blackboard.'
        ],
        answer: 0,
        explanation: "'To start planning something over again because the first attempt failed.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'good things come to those who wait'?",
        options: [
            'Waiting in lines is enjoyable.',
            'Fast action is always wrong.',
            'Patience is rewarded.',
            'Procrastination leads to success.'
        ],
        answer: 2,
        explanation: "'Patience is rewarded.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'hear something straight from the horse's mouth' mean?",
        options: [
            'Hearing information directly from the primary source or person involved.',
            'Listening to veterinary advice.',
            'Listening to gossip.',
            'Reading animal books.'
        ],
        answer: 0,
        explanation: "'Hearing information directly from the primary source or person involved.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'hit the sack' mean?",
        options: [
            'To go to sleep or go to bed.',
            'To drop heavy groceries.',
            'To pack bags for travel.',
            'To punch a punching bag.'
        ],
        answer: 0,
        explanation: "'To go to sleep or go to bed.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'ignorance is bliss'",
        options: [
            'Stupidity is a blessing.',
            'You may sometimes be happier if you do not know all the unpleasant details of a situation.',
            'Studying causes stress.',
            'Smart people are always unhappy.'
        ],
        answer: 1,
        explanation: "'You may sometimes be happier if you do not know all the unpleasant details of a situation.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'it takes two to tango' mean?",
        options: [
            'Collaboration is difficult.',
            'Dancing requires a partner.',
            'Music is enjoyable.',
            'Both people involved in a difficult situation or argument are equally responsible.'
        ],
        answer: 3,
        explanation: "'Both people involved in a difficult situation or argument are equally responsible.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'jump on the bandwagon' mean?",
        options: [
            'To board a parade float.',
            'To change political parties.',
            'To join a popular activity, trend, or opinion because it is fashionable.',
            'To leap over obstacles.'
        ],
        answer: 2,
        explanation: "'To join a popular activity, trend, or opinion because it is fashionable.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'keep your chin up'?",
        options: [
            'To stretch your neck muscles.',
            'To remain cheerful and courageous in a difficult situation.',
            'To look up at the sky.',
            'To maintain good posture.'
        ],
        answer: 1,
        explanation: "'To remain cheerful and courageous in a difficult situation.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'kill two birds with one stone' mean?",
        options: [
            'To make mistakes.',
            'To accomplish two different tasks with a single action.',
            'To hunt wildlife illegally.',
            'To be extremely efficient at work.'
        ],
        answer: 1,
        explanation: "'To accomplish two different tasks with a single action.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'let sleeping dogs lie'",
        options: [
            'Ignore lazy employees.',
            'Leave a situation alone if it is not causing problems, to avoid making it worse.',
            'Sleep early.',
            'Do not wake pets.'
        ],
        answer: 1,
        explanation: "'Leave a situation alone if it is not causing problems, to avoid making it worse.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'make a long story short' mean?",
        options: [
            'To write a summary.',
            'To speak very quickly.',
            'To give only the main points of a story without unnecessary details.',
            'To edit a book chapter.'
        ],
        answer: 2,
        explanation: "'To give only the main points of a story without unnecessary details.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'miss the point' mean?",
        options: [
            'To disagree politely.',
            'To miss a scheduled appointment.',
            'To fail to understand the main idea or core message.',
            'To lose a sharp needle.'
        ],
        answer: 2,
        explanation: "'To fail to understand the main idea or core message.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'no pain, no gain' mean?",
        options: [
            'Gym workouts should hurt.',
            'Suffering brings happiness.',
            'You have to work hard and endure hardship in order to achieve success or progress.',
            'Injuries are necessary for health.'
        ],
        answer: 2,
        explanation: "'You have to work hard and endure hardship in order to achieve success or progress.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'on the fence' mean?",
        options: [
            'Trespassing on property.',
            'Undecided or neutral about a particular issue or choice.',
            'Sitting on a wooden barrier.',
            'Being athletic.'
        ],
        answer: 1,
        explanation: "'Undecided or neutral about a particular issue or choice.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'out of the frying pan into the fire'",
        options: [
            'Moving from a bad or difficult situation to one that is even worse.',
            'Cooking outdoors.',
            'Escaping a house fire safely.',
            'Moving from one kitchen appliance to another.'
        ],
        answer: 0,
        explanation: "'Moving from a bad or difficult situation to one that is even worse.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'pan out' mean?",
        options: [
            'To fail completely.',
            'To cook food in a skillet.',
            'To wash gold in a river.',
            'To develop or turn out well; to have a successful outcome.'
        ],
        answer: 3,
        explanation: "'To develop or turn out well; to have a successful outcome.' is the correct meaning of the idiom."
    },
    {
        q: "What is meant by 'play devil's advocate'?",
        options: [
            'To play scary games.',
            'To disobey rules.',
            'To argue against an idea or take a contrary stance just for the sake of debate.',
            'To defend evil in court.'
        ],
        answer: 2,
        explanation: "'To argue against an idea or take a contrary stance just for the sake of debate.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'pull someone's leg' mean?",
        options: [
            'To trip a runner.',
            'To stretch the truth.',
            'To tease or joke by telling a falsehood.',
            'To help someone stretch.'
        ],
        answer: 2,
        explanation: "'To tease or joke by telling a falsehood.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'put all your eggs in one basket' mean?",
        options: [
            'To collect farm produce.',
            'To bake a large cake.',
            'To risk everything on a single venture or course of action.',
            'To carry groceries carefully.'
        ],
        answer: 2,
        explanation: "'To risk everything on a single venture or course of action.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'raining cats and dogs'",
        options: [
            'An animal shelter storm.',
            'Raining very heavily and intensely.',
            'Light drizzling rain.',
            'Pets falling from the sky.'
        ],
        answer: 1,
        explanation: "'Raining very heavily and intensely.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'read between the lines' mean?",
        options: [
            'To understand the hidden meaning or underlying intention of something.',
            'To find typos in a book.',
            'To trace lines with a pen.',
            'To practice speed reading.'
        ],
        answer: 0,
        explanation: "'To understand the hidden meaning or underlying intention of something.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'Rome wasn't built in a day' mean?",
        options: [
            'Ancient history took long to study.',
            'Important or complex tasks require a lot of time and patience.',
            'Travel takes time.',
            'Italian architecture is durable.'
        ],
        answer: 1,
        explanation: "'Important or complex tasks require a lot of time and patience.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'see eye to eye' mean?",
        options: [
            'To have the same eye color.',
            'To stare intensely.',
            'To agree fully with someone; to share the same perspective.',
            'To wear matching glasses.'
        ],
        answer: 2,
        explanation: "'To agree fully with someone; to share the same perspective.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'shoot for the moon' mean?",
        options: [
            'To aim for a high, ambitious goal.',
            'To aim a rocket into space.',
            'To practice archery at night.',
            'To dream about astronomy.'
        ],
        answer: 0,
        explanation: "'To aim for a high, ambitious goal.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'sit on the fence'",
        options: [
            'Avoiding work.',
            'Resting in a yard.',
            'Remaining neutral or undecided in a dispute.',
            'Balancing on a wooden rail.'
        ],
        answer: 2,
        explanation: "'Remaining neutral or undecided in a dispute.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'spill the beans' mean?",
        options: [
            'To drop cooking ingredients.',
            'To plant seeds.',
            'To reveal a secret.',
            'To make a mess in the kitchen.'
        ],
        answer: 2,
        explanation: "'To reveal a secret.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'steal someone's thunder' mean?",
        options: [
            'To capture weather lightning.',
            "To borrow someone's ideas.",
            "To take the attention, praise, or credit away from someone else's success.",
            'To interrupt a storm.'
        ],
        answer: 2,
        explanation: "'To take the attention, praise, or credit away from someone else's success.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'take with a grain of salt' mean?",
        options: [
            'To season food properly.',
            'To maintain skepticism; not to take something too seriously or literally.',
            'To cure meat.',
            'To swallow medication.'
        ],
        answer: 1,
        explanation: "'To maintain skepticism; not to take something too seriously or literally.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'taste of your own medicine' mean?",
        options: [
            'Visiting a pharmacy.',
            'Experiencing the same unpleasant treatment that you have given to others.',
            'Taking prescribed cough syrup.',
            'Eating bitter vegetables.'
        ],
        answer: 1,
        explanation: "'Experiencing the same unpleasant treatment that you have given to others.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'the ball is in your court'",
        options: [
            'It is your turn to play tennis.',
            'You own the playground.',
            'It is your responsibility to take the next step or make a decision.',
            'You lost the sports game.'
        ],
        answer: 2,
        explanation: "'It is your responsibility to take the next step or make a decision.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'the best of both worlds' mean?",
        options: [
            'Winning two prizes.',
            'Living in two countries.',
            'Enjoying the advantages of two different things simultaneously.',
            'Having dual careers.'
        ],
        answer: 2,
        explanation: "'Enjoying the advantages of two different things simultaneously.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'the elephant in the room' mean?",
        options: [
            'An obvious, major problem or issue that everyone is consciously avoiding discussing.',
            'A large piece of furniture.',
            'A decorative statue.',
            'A zoo animal inside a house.'
        ],
        answer: 0,
        explanation: "'An obvious, major problem or issue that everyone is consciously avoiding discussing.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'the last straw' mean?",
        options: [
            'The conclusion of harvest season.',
            'The final drinking straw in a box.',
            'The final irritation or problem in a series of troubles that makes a situation unbearable.',
            'A broken broomstick.'
        ],
        answer: 2,
        explanation: "'The final irritation or problem in a series of troubles that makes a situation unbearable.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'through thick and thin' mean?",
        options: [
            'Traveling through jungles.',
            'Experiencing varying body weights.',
            'Reading books of varying lengths.',
            'Remaining loyal and supportive through all hardships and good times alike.'
        ],
        answer: 3,
        explanation: "'Remaining loyal and supportive through all hardships and good times alike.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'throw in the towel'",
        options: [
            'To dry off after swimming.',
            'To surrender, give up, or admit defeat.',
            'To throw laundry into a basket.',
            'To wash gym clothes.'
        ],
        answer: 1,
        explanation: "'To surrender, give up, or admit defeat.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'time flies' mean?",
        options: [
            'Clocks run too fast.',
            'Hours drag on slowly.',
            'Insects live short lives.',
            'Time passes surprisingly quickly.'
        ],
        answer: 3,
        explanation: "'Time passes surprisingly quickly.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'turn a blind eye' mean?",
        options: [
            'To wear an eye patch.',
            'To deliberately ignore wrongdoing or pretend not to notice something.',
            'To have poor vision.',
            'To blink rapidly.'
        ],
        answer: 1,
        explanation: "'To deliberately ignore wrongdoing or pretend not to notice something.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'under the table' mean?",
        options: [
            'Cleaning lower surfaces.',
            'Hiding beneath dining furniture.',
            'Sitting on the floor.',
            'Done secretly or illegally, often involving clandestine financial transactions.'
        ],
        answer: 3,
        explanation: "'Done secretly or illegally, often involving clandestine financial transactions.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'up in the air' mean?",
        options: [
            'Jumping high.',
            'Uncertain, undecided, or unsettled.',
            'Floating in a hot air balloon.',
            'Flying an airplane.'
        ],
        answer: 1,
        explanation: "'Uncertain, undecided, or unsettled.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'use your head'",
        options: [
            'To wear a hat.',
            'To think logically and sensibly.',
            'To rest your forehead.',
            'To nod in agreement.'
        ],
        answer: 1,
        explanation: "'To think logically and sensibly.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'water under the bridge' mean?",
        options: [
            'River current flow.',
            'Past events, grievances, or disputes that are forgiven and forgotten.',
            'Flooding in the city.',
            'Bridge engineering.'
        ],
        answer: 1,
        explanation: "'Past events, grievances, or disputes that are forgiven and forgotten.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'wear your heart on your sleeve' mean?",
        options: [
            'To feel chest pain.',
            'To openly and transparently show your true emotions and feelings.',
            'To sew patches on clothes.',
            'To pin a brooch on your shirt.'
        ],
        answer: 1,
        explanation: "'To openly and transparently show your true emotions and feelings.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'when it rains, it pours' mean?",
        options: [
            'Water bills are high.',
            'Weather is unpredictable.',
            'Misfortunes or difficult events tend to happen all at once in large numbers.',
            'Storms bring heavy water.'
        ],
        answer: 2,
        explanation: "'Misfortunes or difficult events tend to happen all at once in large numbers.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'whole nine yards' mean?",
        options: [
            'A long football field.',
            'Nine meters of fabric.',
            'A full inventory check.',
            'Everything possible; the entire amount or complete story.'
        ],
        answer: 3,
        explanation: "'Everything possible; the entire amount or complete story.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'wild goose chase'",
        options: [
            'A foolish, hopeless, or futile pursuit of something unattainable.',
            'Hunting migrating birds.',
            'A wild safari trip.',
            'Running after farm animals.'
        ],
        answer: 0,
        explanation: "'A foolish, hopeless, or futile pursuit of something unattainable.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'worth your salt' mean?",
        options: [
            'Eating a healthy diet.',
            'Buying expensive seasonings.',
            'Valuable mineral resources.',
            'Competent, deserving, and efficient at your job or duties.'
        ],
        answer: 3,
        explanation: "'Competent, deserving, and efficient at your job or duties.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'you can't judge a book by its cover' mean?",
        options: [
            'Book designs can be deceiving.',
            'Library books are fragile.',
            'Reading requires looking inside.',
            'You cannot determine the worth or character of someone or something solely by outward appearance.'
        ],
        answer: 3,
        explanation: "'You cannot determine the worth or character of someone or something solely by outward appearance.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'your guess is as good as mine' mean?",
        options: [
            'I have no idea; I am just as uncertain as you are.',
            'Your opinion is superior.',
            'We both know the correct answer.',
            'Let us guess together.'
        ],
        answer: 0,
        explanation: "'I have no idea; I am just as uncertain as you are.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'zero hour' mean?",
        options: [
            'The end of a workday.',
            'A paused stopwatch.',
            'Midnight precisely.',
            'The exact scheduled time for an operation, attack, or critical event to begin.'
        ],
        answer: 3,
        explanation: "'The exact scheduled time for an operation, attack, or critical event to begin.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'add fuel to the fire'",
        options: [
            'To make a bad situation or argument even worse.',
            'To stoke a fireplace.',
            'To cook outdoors.',
            'To cause an explosion.'
        ],
        answer: 0,
        explanation: "'To make a bad situation or argument even worse.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'against the clock' mean?",
        options: [
            'Timing a race.',
            'Running past a wall clock.',
            'Working under extreme time pressure to finish before a deadline.',
            'Fixing a broken watch.'
        ],
        answer: 2,
        explanation: "'Working under extreme time pressure to finish before a deadline.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'all ears' mean?",
        options: [
            'Being deaf.',
            'Listening to music with headphones.',
            'Having large hearing organs.',
            'Eager and fully prepared to listen attentively.'
        ],
        answer: 3,
        explanation: "'Eager and fully prepared to listen attentively.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'at the drop of a hat' mean?",
        options: [
            'Wearing caps outdoors.',
            'Picking up hats from the floor.',
            'Happening instantly, without hesitation or delay.',
            'Dropping clothing items.'
        ],
        answer: 2,
        explanation: "'Happening instantly, without hesitation or delay.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'back to square one' mean?",
        options: [
            'Returning to the starting point because a plan failed.',
            'Moving forward step by step.',
            'Playing a board game.',
            'Drawing a square box.'
        ],
        answer: 0,
        explanation: "'Returning to the starting point because a plan failed.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'ballistic'",
        options: [
            'Becoming extremely angry or furious.',
            'Running fast.',
            'Studying physics.',
            'Launching a missile.'
        ],
        answer: 0,
        explanation: "'Becoming extremely angry or furious.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'bark up the wrong tree' mean?",
        options: [
            'Climbing tall trees.',
            'Pursuing a mistaken course of action or blaming the wrong person.',
            'Gardening errors.',
            'Barking dogs.'
        ],
        answer: 1,
        explanation: "'Pursuing a mistaken course of action or blaming the wrong person.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'bat an eye' mean?",
        options: [
            'Having dry eyes.',
            'Showing shock, surprise, or emotional reaction.',
            'Blinking eyelashes.',
            'Contact lenses.'
        ],
        answer: 1,
        explanation: "'Showing shock, surprise, or emotional reaction.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'bed of roses' mean?",
        options: [
            'A sleeping arrangement.',
            'Floral scents.',
            'A garden flowerbed.',
            'A comfortable, easy, or luxurious situation devoid of difficulties.'
        ],
        answer: 3,
        explanation: "'A comfortable, easy, or luxurious situation devoid of difficulties.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'bide your time' mean?",
        options: [
            'Wasting hours.',
            'Waiting patiently for a favorable opportunity to act.',
            'Reading a watch.',
            'Counting seconds.'
        ],
        answer: 1,
        explanation: "'Waiting patiently for a favorable opportunity to act.' is the correct meaning of the idiom."
    },
    {
        q: "Choose the meaning of: 'bone to pick'",
        options: [
            'A grievance or a topic of disagreement to discuss with someone.',
            'Dog treats.',
            'Eating fish.',
            'A skeleton display.'
        ],
        answer: 0,
        explanation: "'A grievance or a topic of disagreement to discuss with someone.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'born with a silver spoon in one's mouth' mean?",
        options: [
            'Dentistry procedures.',
            'Silver mining.',
            'Born into a very wealthy and privileged family.',
            'Eating with expensive cutlery.'
        ],
        answer: 2,
        explanation: "'Born into a very wealthy and privileged family.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'bread and butter' mean?",
        options: [
            'Simple meals.',
            'Bakery products.',
            'Breakfast food items.',
            "A person's livelihood or primary source of income."
        ],
        answer: 3,
        explanation: "'A person's livelihood or primary source of income.' is the correct meaning of the idiom."
    },
    {
        q: "What does 'burn bridges' mean?",
        options: [
            'Damaging a relationship or eliminating future options irreparably.',
            'Destroying architecture.',
            'Building wooden structures.',
            'Crossing rivers.'
        ],
        answer: 0,
        explanation: "'Damaging a relationship or eliminating future options irreparably.' is the correct meaning of the idiom."
    }
];
