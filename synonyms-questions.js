// ==========================================
// WordCraft & Grammar Arena - Philippine Civil Service Exam Style Synonyms (60 Items) - Bold Formatting
// ==========================================

const synonymsQuestions = [
    {
        question: "Choose the word that is nearest in meaning to <b>Abrogate</b>:",
        options: ["Confirm", "Abolish", "Establish", "Approve"],
        correct: 1,
        explanation: "'Abrogate' means to repeal or do away with a law, right, or formal agreement; 'abolish' is its direct synonym."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Acquittals</b>:",
        options: ["Convictions", "Absolutions", "Judgments", "Sentences"],
        correct: 1,
        explanation: "'Acquittal' is a judgment that a person is not guilty of the crime with which they have been charged, similar to 'absolution'."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Adherent</b>:",
        options: ["Supporter", "Opponent", "Rival", "Detractor"],
        correct: 0,
        explanation: "'Adherent' means someone who supports a particular party, person, or set of ideas."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Alacrity</b>:",
        options: ["Slowness", "Reluctance", "Eagerness", "Hesitation"],
        correct: 2,
        explanation: "'Alacrity' means brisk and cheerful readiness or eagerness."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Ambiguous</b>:",
        options: ["Vague", "Clear", "Definite", "Explicit"],
        correct: 0,
        explanation: "'Ambiguous' means open to more than one interpretation; having a double meaning; vague."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Animosity</b>:",
        options: ["Friendship", "Affection", "Hostility", "Harmony"],
        correct: 2,
        explanation: "'Animosity' means strong hostility or active dislike."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Apathy</b>:",
        options: ["Enthusiasm", "Passion", "Zeal", "Indifference"],
        correct: 3,
        explanation: "'Apathy' means lack of interest, enthusiasm, or concern; indifference."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Audacious</b>:",
        options: ["Bold", "Timid", "Fearful", "Cautious"],
        correct: 0,
        explanation: "'Audacious' means showing a willingness to take surprisingly bold risks."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Benevolent</b>:",
        options: ["Malevolent", "Cruel", "Generous", "Selfish"],
        correct: 2,
        explanation: "'Benevolent' means well meaning and kindly; generous."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Cacophony</b>:",
        options: ["Harmony", "Racket", "Melody", "Silence"],
        correct: 1,
        explanation: "'Cacophony' is a harsh, discordant mixture of sounds or a racket."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Capricious</b>:",
        options: ["Steady", "Constant", "Unpredictable", "Firm"],
        correct: 2,
        explanation: "'Capricious' means given to sudden and unaccountable changes of mood or behavior; unpredictable."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Censure</b>:",
        options: ["Praise", "Approve", "Commend", "Condemn"],
        correct: 3,
        explanation: "'Censure' means to express severe disapproval of someone, typically in a formal statement; to condemn."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Coercion</b>:",
        options: ["Force", "Persuasion", "Freedom", "Choice"],
        correct: 0,
        explanation: "'Coercion' is the practice of persuading someone to do something by using force or threats."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Cognizant</b>:",
        options: ["Ignorant", "Unaware", "Aware", "Oblivious"],
        correct: 2,
        explanation: "'Cognizant' means having knowledge or being aware of."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Collusion</b>:",
        options: ["Honesty", "Transparency", "Conspiracy", "Openness"],
        correct: 2,
        explanation: "'Collusion' is secret or illegal cooperation or conspiracy, especially in order to cheat or deceive others."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Compunction</b>:",
        options: ["Pride", "Remorse", "Confidence", "Assurance"],
        correct: 1,
        explanation: "'Compunction' is a feeling of guilt or moral scruple that prevents or follows the doing of something bad; remorse."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Curtail</b>:",
        options: ["Extend", "Shorten", "Lengthen", "Expand"],
        correct: 1,
        explanation: "'Curtail' means to reduce in extent or quantity; to impose a restriction on; shorten."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Debilitate</b>:",
        options: ["Cripple", "Strengthen", "Energize", "Restore"],
        correct: 0,
        explanation: "'Debilitate' means to make someone weak or infirm; to cripple."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Deference</b>:",
        options: ["Respect", "Disrespect", "Defiance", "Rebellion"],
        correct: 0,
        explanation: "'Deference' means polite submission and respect."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Delineate</b>:",
        options: ["Describe", "Confuse", "Obscure", "Blur"],
        correct: 0,
        explanation: "'Delineate' means to describe or portray something precisely."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Demure</b>:",
        options: ["Bold", "Outgoing", "Modest", "Aggressive"],
        correct: 2,
        explanation: "'Demure' (of a woman or her behavior) reserved, modest, and shy."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Denounce</b>:",
        options: ["Applaud", "Support", "Praise", "Condemn"],
        correct: 3,
        explanation: "'Denounce' means to publicly declare to be wrong or evil; to condemn."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Derision</b>:",
        options: ["Admiration", "Praise", "Mockery", "Respect"],
        correct: 2,
        explanation: "'Derision' is contemptuous ridicule or mockery."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Desolate</b>:",
        options: ["Barren", "Populated", "Lush", "Inhabited"],
        correct: 0,
        explanation: "'Desolate' (of a place) deserted of people and in a state of bleak and dismal emptiness; barren."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Diligent</b>:",
        options: ["Careless", "Idle", "Industrious", "Lazy"],
        correct: 2,
        explanation: "'Diligent' means having or showing care and conscientiousness in one's work; industrious."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Discrepancy</b>:",
        options: ["Inconsistency", "Consistency", "Agreement", "Harmony"],
        correct: 0,
        explanation: "'Discrepancy' is a lack of compatibility or similarity between two or more facts; inconsistency."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Disseminate</b>:",
        options: ["Gather", "Collect", "Distribute", "Hoard"],
        correct: 2,
        explanation: "'Disseminate' means to spread or scatter widely (especially information); distribute."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Dogmatic</b>:",
        options: ["Opinionated", "Flexible", "Open-minded", "Uncertain"],
        correct: 0,
        explanation: "'Dogmatic' means inclined to lay down principles as incontrovertibly true; opinionated."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Ebullient</b>:",
        options: ["Exuberant", "Depressed", "Gloomy", "Apathetic"],
        correct: 0,
        explanation: "'Ebullient' means cheerful and full of energy; exuberant."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Eclectic</b>:",
        options: ["Narrow", "Uniform", "Diverse", "Single"],
        correct: 2,
        explanation: "'Eclectic' deriving ideas, style, or taste from a broad and diverse range of sources."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Efface</b>:",
        options: ["Erase", "Create", "Build", "Construct"],
        correct: 0,
        explanation: "'Efface' means to erase a mark from a surface or cause to disappear."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Elucidate</b>:",
        options: ["Clarify", "Confuse", "Obscure", "Complicate"],
        correct: 0,
        explanation: "'Elucidate' means to make something clear; to explain or clarify."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Emulate</b>:",
        options: ["Ignore", "Imitate", "Neglect", "Discard"],
        correct: 1,
        explanation: "'Emulate' means to match or surpass a person or achievement, typically by imitation."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Enervate</b>:",
        options: ["Exhaust", "Energize", "Invigorate", "Strengthen"],
        correct: 0,
        explanation: "'Enervate' means to cause someone to feel drained of energy; to exhaust or weaken."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Ephemeral</b>:",
        options: ["Permanent", "Eternal", "Transient", "Enduring"],
        correct: 2,
        explanation: "'Ephemeral' means lasting for a very short time; transient."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Equivocal</b>:",
        options: ["Ambiguous", "Clear", "Definite", "Certain"],
        correct: 0,
        explanation: "'Equivocal' means open to more than one interpretation; ambiguous."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Eradicate</b>:",
        options: ["Plant", "Foster", "Eliminate", "Cultivate"],
        correct: 2,
        explanation: "'Eradicate' means to destroy completely; put an end to; eliminate."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Esoteric</b>:",
        options: ["Common", "Obscure", "Popular", "Familiar"],
        correct: 1,
        explanation: "'Esoteric' means intended for or likely to be understood by only a small number of people with a specialized knowledge; obscure."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Exacerbate</b>:",
        options: ["Worsen", "Alleviate", "Improve", "Mitigate"],
        correct: 0,
        explanation: "'Exacerbate' means to make a problem, bad situation, or negative feeling worse."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Exemplary</b>:",
        options: ["Outstanding", "Puny", "Flawed", "Defective"],
        correct: 0,
        explanation: "'Exemplary' serving as a desirable model; representing the best of its kind; outstanding."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Exonerate</b>:",
        options: ["Blame", "Condemn", "Acquit", "Convict"],
        correct: 2,
        explanation: "'Exonerate' means to absolve someone from blame or fault; to acquit."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Extricate</b>:",
        options: ["Extract", "Entangle", "Trap", "Involve"],
        correct: 0,
        explanation: "'Extricate' means to free someone or something from a constraint or difficulty; extract."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Facetious</b>:",
        options: ["Serious", "Joking", "Earnest", "Solemn"],
        correct: 1,
        explanation: "'Facetious' means treating serious issues with deliberately inappropriate humor; flippant or joking."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Fallacy</b>:",
        options: ["Misconception", "Truth", "Fact", "Reality"],
        correct: 0,
        explanation: "'Fallacy' is a mistaken belief, especially one based on unsound argument; a misconception."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Furtive</b>:",
        options: ["Secretive", "Open", "Honest", "Direct"],
        correct: 0,
        explanation: "'Furtive' means attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble; secretive."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Gargantuan</b>:",
        options: ["Tiny", "Massive", "Miniature", "Small"],
        correct: 1,
        explanation: "'Gargantuan' means enormous, gigantic, or massive in size."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Glean</b>:",
        options: ["Scatter", "Dispense", "Gather", "Lose"],
        correct: 2,
        explanation: "'Glean' means to extract information from various sources; to gather slowly and laboriously."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Gregarious</b>:",
        options: ["Sociable", "Reclusive", "Isolated", "Reserved"],
        correct: 0,
        explanation: "'Gregarious' (of a person) fond of company; sociable."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Hapless</b>:",
        options: ["Fortunate", "Unlucky", "Lucky", "Blessed"],
        correct: 1,
        explanation: "'Hapless' (especially of a person) unfortunate; unlucky."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Haughty</b>:",
        options: ["Arrogant", "Humble", "Modest", "Shy"],
        correct: 0,
        explanation: "'Haughty' means arrogantly superior and disdainful."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Iconoclast</b>:",
        options: ["Traditionalist", "Conformist", "Rebel", "Follower"],
        correct: 2,
        explanation: "'Iconoclast' is a person who attacks cherished beliefs or institutions; a rebel."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Immutable</b>:",
        options: ["Unchanging", "Changeable", "Flexible", "Variable"],
        correct: 0,
        explanation: "'Immutable' means unchanging over time or unable to be changed."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Impartial</b>:",
        options: ["Biased", "Prejudiced", "Fair", "Unfair"],
        correct: 2,
        explanation: "'Impartial' means treating all rivals or disputants equally; fair and neutral."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Impetuous</b>:",
        options: ["Impulsive", "Cautious", "Deliberate", "Planned"],
        correct: 0,
        explanation: "'Impetuous' means acting or done quickly and without thought or care; impulsive."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Inadvertent</b>:",
        options: ["Deliberate", "Accidental", "Intentional", "Calculated"],
        correct: 1,
        explanation: "'Inadvertent' means not resulting from or achieved through deliberate planning; accidental."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Incipient</b>:",
        options: ["Beginning", "Ending", "Completed", "Finished"],
        correct: 0,
        explanation: "'Incipient' means in an initial stage; beginning to happen or develop."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Incongruous</b>:",
        options: ["Out of place", "Matching", "Harmonious", "Fitting"],
        correct: 0,
        explanation: "'Incongruous' means not in harmony or keeping with the surroundings or other aspects of something; out of place."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Indolent</b>:",
        options: ["Energetic", "Lazy", "Active", "Industrious"],
        correct: 1,
        explanation: "'Indolent' means wanting to avoid activity or exertion; lazy."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Inert</b>:",
        options: ["Active", "Dynamic", "Lifeless", "Moving"],
        correct: 2,
        explanation: "'Inert' means lacking the ability or strength to move; lifeless."
    },
    {
        question: "Choose the word that is nearest in meaning to <b>Ingenuous</b>:",
        options: ["Naïve", "Cunning", "Deceitful", "Crafty"],
        correct: 0,
        explanation: "'Ingenuous' means innocent and unsuspecting; naïve."
    }
];
