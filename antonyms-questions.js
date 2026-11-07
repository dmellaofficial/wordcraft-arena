// ==========================================
// WordCraft & Grammar Arena - Philippine Civil Service Exam Style Antonyms (60 Items) - Bold Formatting
// ==========================================

const antonymsQuestions = [
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Abundant</b>:",
        options: ["Plentiful", "Ample", "Scarce", "Bountiful"],
        correct: 2,
        explanation: "'Abundant' means existing in large quantities; the opposite is 'scarce'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Acquiesce</b>:",
        options: ["Consent", "Resist", "Comply", "Agree"],
        correct: 1,
        explanation: "'Acquiesce' means to accept something reluctantly without protest; the opposite is to 'resist'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Adversity</b>:",
        options: ["Hardship", "Misfortune", "Prosperity", "Distress"],
        correct: 2,
        explanation: "'Adversity' refers to a state or instance of serious or continued difficulty or misfortune; the opposite is 'prosperity'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Alacrity</b>:",
        options: ["Eagerness", "Promptness", "Apathy", "Speed"],
        correct: 2,
        explanation: "'Alacrity' means brisk and cheerful readiness; the opposite is 'apathy' or sluggishness."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Ameliorate</b>:",
        options: ["Improve", "Worsen", "Enhance", "Amend"],
        correct: 1,
        explanation: "'Ameliorate' means to make something bad or unsatisfactory better; the opposite is to 'worsen'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Animosity</b>:",
        options: ["Hostility", "Enmity", "Amiability", "Antipathy"],
        correct: 2,
        explanation: "'Animosity' is strong hostility; the opposite is 'amiability' or friendliness."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Anomaly</b>:",
        options: ["Abnormality", "Irregularity", "Deviance", "Normality"],
        correct: 3,
        explanation: "'Anomaly' is something that deviates from the standard; the opposite is 'normality'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Audacious</b>:",
        options: ["Bold", "Daring", "Timid", "Courageous"],
        correct: 2,
        explanation: "'Audacious' means showing a willingness to take bold risks; the opposite is 'timid'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Benevolent</b>:",
        options: ["Kind", "Generous", "Malevolent", "Benign"],
        correct: 2,
        explanation: "'Benevolent' means well meaning and kindly; the opposite is 'malevolent'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Cacophony</b>:",
        options: ["Discord", "Harshness", "Euphony", "Noise"],
        correct: 2,
        explanation: "'Cacophony' is a harsh, discordant mixture of sounds; 'euphony' means pleasing sound or harmony."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Candor</b>:",
        options: ["Frankness", "Deceit", "Honesty", "Truthfulness"],
        correct: 1,
        explanation: "'Candor' is the quality of being open and honest; the opposite is 'deceit'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Capricious</b>:",
        options: ["Fickle", "Inconsistent", "Steadfast", "Erratic"],
        correct: 2,
        explanation: "'Capricious' means subject to sudden mood changes; the opposite is 'steadfast'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Censure</b>:",
        options: ["Condemn", "Criticize", "Praise", "Reprimand"],
        correct: 2,
        explanation: "'Censure' means to express severe disapproval; the opposite is to 'praise'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Chicanery</b>:",
        options: ["Trickery", "Deception", "Honesty", "Artifice"],
        correct: 2,
        explanation: "'Chicanery' is the use of trickery to achieve a political, financial, or legal purpose; the opposite is 'honesty'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Coerce</b>:",
        options: ["Force", "Compel", "Persuade", "Pressurize"],
        correct: 2,
        explanation: "'Coerce' means to persuade using force or threats; the opposite is to 'persuade' freely."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Compunction</b>:",
        options: ["Remorse", "Scruple", "Regret", "Indifference"],
        correct: 3,
        explanation: "'Compunction' is a feeling of guilt; the opposite is complete 'indifference' or lack of guilt."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Convoluted</b>:",
        options: ["Intricate", "Complex", "Simple", "Twisted"],
        correct: 2,
        explanation: "'Convoluted' means extremely complex and difficult to follow; the opposite is 'simple'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Curtail</b>:",
        options: ["Shorten", "Reduce", "Extend", "Abridge"],
        correct: 2,
        explanation: "'Curtail' means to reduce or shorten; the opposite is to 'extend'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Debilitate</b>:",
        options: ["Weaken", "Disable", "Invigorate", "Paralyze"],
        correct: 2,
        explanation: "'Debilitate' means to make weak; the opposite is to 'invigorate' or strengthen."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Deference</b>:",
        options: ["Respect", "Submission", "Insolence", "Regard"],
        correct: 2,
        explanation: "'Deference' is polite respect; the opposite is 'insolence' or rudeness."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Delineate</b>:",
        options: ["Portray", "Describe", "Obscure", "Outline"],
        correct: 2,
        explanation: "'Delineate' means to describe precisely; the opposite is to 'obscure' or blur."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Demure</b>:",
        options: ["Modest", "Shy", "Audacious", "Reserved"],
        correct: 2,
        explanation: "'Demure' means reserved and modest; the opposite is bold or 'audacious'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Denounce</b>:",
        options: ["Condemn", "Criticize", "Extol", "Attack"],
        correct: 2,
        explanation: "'Denounce' means to publicly condemn; 'extol' means to praise enthusiastically."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Derision</b>:",
        options: ["Mockery", "Ridicule", "Praise", "Scorn"],
        correct: 2,
        explanation: "'Derision' is contemptuous ridicule; the opposite is 'praise' or admiration."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Desolate</b>:",
        options: ["Barren", "Deserted", "Populated", "Bleak"],
        correct: 2,
        explanation: "'Desolate' means deserted and empty; the opposite is 'populated'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Diligent</b>:",
        options: ["Industrious", "Hardworking", "Negligent", "Assiduous"],
        correct: 2,
        explanation: "'Diligent' means showing care and hard work; the opposite is 'negligent' or careless."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Discrepancy</b>:",
        options: ["Inconsistency", "Difference", "Agreement", "Variance"],
        correct: 2,
        explanation: "'Discrepancy' is a lack of consistency; the opposite is 'agreement'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Disseminate</b>:",
        options: ["Distribute", "Spread", "Hoard", "Broadcast"],
        correct: 2,
        explanation: "'Disseminate' means to scatter or spread widely; the opposite is to 'hoard' or gather."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Dogmatic</b>:",
        options: ["Opinionated", "Assertion-heavy", "Flexible", "Rigid"],
        correct: 2,
        explanation: "'Dogmatic' means stubbornly opinionated; the opposite is 'flexible' or open-minded."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Ebullient</b>:",
        options: ["Exuberant", "Jubilant", "Melancholy", "Enthusiastic"],
        correct: 2,
        explanation: "'Ebullient' means cheerful and full of energy; the opposite is 'melancholy' or gloomy."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Eclectic</b>:",
        options: ["Diverse", "Varied", "Uniform", "Broad"],
        correct: 2,
        explanation: "'Eclectic' means deriving ideas from a diverse range; the opposite is 'uniform' or restricted."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Efface</b>:",
        options: ["Erase", "Delete", "Retain", "Wipe out"],
        correct: 2,
        explanation: "'Efface' means to erase or wipe out; the opposite is to 'retain' or keep."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Elucidate</b>:",
        options: ["Clarify", "Explain", "Obscure", "Illuminates"],
        correct: 2,
        explanation: "'Elucidate' means to make clear; the opposite is to 'obscure' or make unclear."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Emulate</b>:",
        options: ["Imitate", "Copy", "Neglect", "Mimic"],
        correct: 2,
        explanation: "'Emulate' means to imitate with the intent to equal or surpass; the opposite is to 'neglect' or ignore."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Enervate</b>:",
        options: ["Exhaust", "Weaken", "Energize", "Fatigue"],
        correct: 2,
        explanation: "'Enervate' means to drain of energy; the opposite is to 'energize'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Ephemeral</b>:",
        options: ["Transient", "Fleeting", "Permanent", "Brief"],
        correct: 2,
        explanation: "'Ephemeral' means lasting a very short time; the opposite is 'permanent'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Equivocal</b>:",
        options: ["Ambiguous", "Vague", "Unequivocal", "Uncertain"],
        correct: 2,
        explanation: "'Equivocal' means open to multiple interpretations; the opposite is 'unequivocal' or clear."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Eradicate</b>:",
        options: ["Eliminate", "Destroy", "Plant", "Abolish"],
        correct: 2,
        explanation: "'Eradicate' means to destroy completely; the opposite is to 'plant' or foster."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Esoteric</b>:",
        options: ["Obscure", "Abstruse", "Exoteric", "Arcane"],
        correct: 2,
        explanation: "'Esoteric' means understood by only a small group; 'exoteric' means intended for or likely to be understood by the general public."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Exacerbate</b>:",
        options: ["Worsen", "Aggravate", "Mitigate", "Inflame"],
        correct: 2,
        explanation: "'Exacerbate' means to make a bad situation worse; the opposite is to 'mitigate' or lessen."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Exemplary</b>:",
        options: ["Outstanding", "Commendable", "Deplorable", "Meritorious"],
        correct: 2,
        explanation: "'Exemplary' means serving as a wonderful model; the opposite is 'deplorable' or extremely bad."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Exonerate</b>:",
        options: ["Acquit", "Absolve", "Inculpate", "Vindicate"],
        correct: 2,
        explanation: "'Exonerate' means to absolve from blame; 'inculpate' means to accuse or blame."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Extricate</b>:",
        options: ["Extract", "Free", "Entangle", "Liberate"],
        correct: 2,
        explanation: "'Extricate' means to free from a constraint; the opposite is to 'entangle'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Facetious</b>:",
        options: ["Joking", "Flippant", "Earnest", "Witty"],
        correct: 2,
        explanation: "'Facetious' means treating serious issues with frivolous humor; the opposite is 'earnest' or serious."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Fallacy</b>:",
        options: ["Misconception", "Delusion", "Truth", "Falsehood"],
        correct: 2,
        explanation: "'Fallacy' is a mistaken belief or false idea; the opposite is 'truth'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Furtive</b>:",
        options: ["Secretive", "Stealthy", "Overt", "Sly"],
        correct: 2,
        explanation: "'Furtive' means secretive or hidden; 'overt' means done openly without secrecy."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Gargantuan</b>:",
        options: ["Massive", "Enormous", "Miniscule", "Gigantic"],
        correct: 2,
        explanation: "'Gargantuan' means massive or huge; the opposite is 'miniscule' or tiny."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Glean</b>:",
        options: ["Gather", "Collect", "Disperse", "Extract"],
        correct: 2,
        explanation: "'Glean' means to gather information bit by bit; the opposite is to 'disperse' or scatter."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Gregarious</b>:",
        options: ["Sociable", "Outgoing", "Aloof", "Friendly"],
        correct: 2,
        explanation: "'Gregarious' means fond of company and sociable; the opposite is 'aloof' or unsociable."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Hapless</b>:",
        options: ["Unlucky", "Unfortunate", "Fortunate", "Wretched"],
        correct: 2,
        explanation: "'Hapless' means unfortunate or unlucky; the opposite is 'fortunate'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Haughty</b>:",
        options: ["Arrogant", "Disdainful", "Humble", "Proud"],
        correct: 2,
        explanation: "'Haughty' means arrogantly superior; the opposite is 'humble'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Iconoclast</b>:",
        options: ["Rebel", "Dissenter", "Conformist", "Skeptic"],
        correct: 2,
        explanation: "'Iconoclast' opposes traditional beliefs; a 'conformist' complies with accepted rules or traditions."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Immutable</b>:",
        options: ["Unchanging", "Fixed", "Mutable", "Permanent"],
        correct: 2,
        explanation: "'Immutable' means unchangeable; 'mutable' means subject to change."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Impartial</b>:",
        options: ["Fair", "Neutral", "Biased", "Objective"],
        correct: 2,
        explanation: "'Impartial' means treating all sides equally; the opposite is 'biased'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Impetuous</b>:",
        options: ["Impulsive", "Rash", "Cautious", "Hasty"],
        correct: 2,
        explanation: "'Impetuous' means acting quickly without thought; the opposite is 'cautious'."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Inadvertent</b>:",
        options: ["Accidental", "Unintentional", "Deliberate", "Chance"],
        correct: 2,
        explanation: "'Inadvertent' means accidental; the opposite is 'deliberate' or intentional."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Incipient</b>:",
        options: ["Beginning", "Initial", "Full-blown", "Emerging"],
        correct: 2,
        explanation: "'Incipient' means in an initial or early stage; the opposite is 'full-blown' or fully developed."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Incongruous</b>:",
        options: ["Out of place", "Unsuited", "Harmonious", "Incompatible"],
        correct: 2,
        explanation: "'Incongruous' means out of place; the opposite is 'harmonious' or fitting."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Indolent</b>:",
        options: ["Lazy", "Slothful", "Industrious", "Idle"],
        correct: 2,
        explanation: "'Indolent' means wanting to avoid activity or lazy; the opposite is 'industrious' or hardworking."
    },
    {
        question: "Choose the word that is most nearly *opposite* in meaning to <b>Ingenuous</b>:",
        options: ["Naïve", "Innocent", "Cunning", "Artless"],
        correct: 2,
        explanation: "'Ingenuous' means innocent and unsuspecting; 'cunning' or crafty implies cleverness achieved through deceit."
    }
];
