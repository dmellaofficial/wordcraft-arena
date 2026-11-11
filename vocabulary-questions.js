// ==========================================
// Skill Practice Categories: Vocabulary (60 Questions)
// Concise "What is the meaning of..." format with randomized options
// ==========================================

const vocabularyQuestions = [
    {
        q: "What is the meaning of ABSOLVE?",
        options: [
            'To prosecute a suspect in court',
            'To declare someone free from blame or guilt',
            'To impose a heavy legal penalty',
            'To admit formal responsibility for an error'
        ],
        answer: 1,
        explanation: "'Absolve' means to declare someone free from blame, guilt, or responsibility."
    },
    {
        q: "What is the meaning of ACERBIC?",
        options: [
            'Extremely sweet and pleasant',
            'Calm and peaceful in temperament',
            'Sharp, scathing, or bitterly sarcastic in tone',
            'Deeply melancholic and sorrowful'
        ],
        answer: 2,
        explanation: "'Acerbic' describes a sharp, scathing, or bitterly sarcastic tone."
    },
    {
        q: "What is the meaning of BENEVOLENT?",
        options: [
            'Well-meaning, kind, and charitable',
            'Wishing evil or harm upon others',
            'Selfish and overly protective of wealth',
            'Extremely hostile during arguments'
        ],
        answer: 0,
        explanation: "'Benevolent' means well-meaning, kind, and charitable."
    },
    {
        q: "What is the meaning of CANDID?",
        options: [
            'Evasive and secretive about facts',
            'Deceptive and manipulative in speech',
            'Reserved and unwilling to communicate',
            'Truthful, straightforward, and direct'
        ],
        answer: 3,
        explanation: "'Candid' means truthful, straightforward, and frank."
    },
    {
        q: "What is the meaning of DELETERIOUS?",
        options: [
            'Causing harm or damage to health or life',
            'Promoting physical healing and wellness',
            'Providing financial advantage or profit',
            'Fostering positive social interactions'
        ],
        answer: 0,
        explanation: "'Deleterious' means causing harm or damage."
    },
    {
        q: "What is the meaning of EPHEMERAL?",
        options: [
            'Lasting for an extremely short time',
            'Existing permanently without change',
            'Repeating on a predictable annual cycle',
            'Slowly developing over many decades'
        ],
        answer: 0,
        explanation: "'Ephemeral' means lasting for a very short duration."
    },
    {
        q: "What is the meaning of ESOTERIC?",
        options: [
            'Widely understood by the general public',
            'Understood by only a small group with specialized knowledge',
            'Transparently obvious to casual observers',
            'Rooted in ancient historical traditions'
        ],
        answer: 1,
        explanation: "'Esoteric' refers to knowledge intended for or likely to be understood by only a small specialized group."
    },
    {
        q: "What is the meaning of FASTIDIOUS?",
        options: [
            'Sloppy and careless with personal workspace',
            'Casual and indifferent to minor mistakes',
            'Impetuous and quick to act without planning',
            'Very attentive to and concerned about accuracy and detail'
        ],
        answer: 3,
        explanation: "'Fastidious' means extremely attentive to accuracy, detail, and cleanliness."
    },
    {
        q: "What is the meaning of GREGARIOUS?",
        options: [
            'Fond of company and highly sociable',
            'Reclusive and preferring total isolation',
            'Hostile toward unfamiliar visitors',
            'Silent and uncommunicative in groups'
        ],
        answer: 0,
        explanation: "'Gregarious' describes someone who is fond of company and sociable."
    },
    {
        q: "What is the meaning of HACKNEYED?",
        options: [
            'Original, creative, and imaginative',
            'Overused, trite, and lacking significance',
            'Freshly minted and culturally relevant',
            'Complex and difficult to comprehend'
        ],
        answer: 1,
        explanation: "'Hackneyed' describes an idea or phrase lacking significance because of overuse."
    },
    {
        q: "What is the meaning of ICONOCLAST?",
        options: [
            'A person who strictly follows orthodox traditions',
            'A conformist who supports institutional authority',
            'A person who attacks cherished beliefs or established institutions',
            'An artist specializing in religious portraiture'
        ],
        answer: 2,
        explanation: "'Iconoclast' is someone who attacks or criticizes cherished beliefs or institutions."
    },
    {
        q: "What is the meaning of IMMUTABLE?",
        options: [
            'Subject to frequent sudden alterations',
            'Unchanging over time or unable to be changed',
            'Fragile and easily damaged by weather',
            'Temporary and bound by strict expiration dates'
        ],
        answer: 1,
        explanation: "'Immutable' means unchanging over time or unable to be altered."
    },
    {
        q: "What is the meaning of INTRANSIGENT?",
        options: [
            'Compliant and eager to please others',
            'Flexible and willing to negotiate terms',
            'Refusing to compromise or agree; stubborn',
            'Indecisive and prone to changing opinions'
        ],
        answer: 2,
        explanation: "'Intransigent' means refusing to compromise or agree with others."
    },
    {
        q: "What is the meaning of LACONIC?",
        options: [
            'Using very few words to express oneself',
            'Verbose and excessively descriptive',
            'Emotional and prone to dramatic outbursts',
            'Confusing and structurally disorganized'
        ],
        answer: 0,
        explanation: "'Laconic' means using very few words."
    },
    {
        q: "What is the meaning of LUCID?",
        options: [
            'Ambiguous and open to multiple meanings',
            'Expressed clearly and easy to understand',
            'Obscure and hidden from casual sight',
            'Complex and mathematically dense'
        ],
        answer: 1,
        explanation: "'Lucid' means expressed clearly and easy to understand."
    },
    {
        q: "What is the meaning of MENDACIOUS?",
        options: [
            'Truthful and transparent in dealings',
            'Honest and dedicated to moral integrity',
            'Not telling the truth; untruthful or deceitful',
            'Courageous in the face of public scrutiny'
        ],
        answer: 2,
        explanation: "'Mendacious' means not telling the truth or deceitful."
    },
    {
        q: "What is the meaning of NADIR?",
        options: [
            'The highest peak or point of success',
            'The central turning point of a crisis',
            'The exact midpoint of a structural cycle',
            'The lowest point or depth of something'
        ],
        answer: 3,
        explanation: "'Nadir' is the lowest point of something."
    },
    {
        q: "What is the meaning of NASCENT?",
        options: [
            'Just coming into existence and displaying potential',
            'At the point of decay, ruin, or death',
            'Fully matured and structurally established',
            'Hidden beneath surface layers for centuries'
        ],
        answer: 0,
        explanation: "'Nascent' means just coming into existence and beginning to display potential."
    },
    {
        q: "What is the meaning of OBFUSCATE?",
        options: [
            'To clarify a complicated concept',
            'To make something obscure, unclear, or confusing',
            'To simplify instructions for beginners',
            'To illuminate a dark workspace'
        ],
        answer: 1,
        explanation: "'Obfuscate' means to render obscure, unclear, or confusing."
    },
    {
        q: "What is the meaning of PAUCITY?",
        options: [
            'An abundant surplus of resources',
            'A balanced distribution of wealth',
            'The presence of something in small or insufficient quantities',
            'A permanent storage facility for grain'
        ],
        answer: 2,
        explanation: "'Paucity' means scarcity or a small, insufficient quantity."
    },
    {
        q: "What is the meaning of PLACATE?",
        options: [
            'To make someone intensely angry or furious',
            'To provoke conflict between rival groups',
            'To make someone less angry or hostile; pacify',
            'To challenge an authority figure openly'
        ],
        answer: 2,
        explanation: "'Placate' means to make someone less angry or hostile."
    },
    {
        q: "What is the meaning of RECALCITRANT?",
        options: [
            'Submissive and eager to follow instructions',
            'Having an uncooperative attitude toward authority',
            'Amenable to compromise and teamwork',
            'Easily persuaded by logical arguments'
        ],
        answer: 1,
        explanation: "'Recalcitrant' describes an uncooperative attitude toward authority or discipline."
    },
    {
        q: "What is the meaning of SAGACIOUS?",
        options: [
            'Showing keen mental discernment and good judgment',
            'Foolish and impulsive in decision-making',
            'Inept and lacking practical skills',
            'Obtuse and slow to grasp simple facts'
        ],
        answer: 0,
        explanation: "'Sagacious' means showing good judgment and mental discernment."
    },
    {
        q: "What is the meaning of SOPORIFIC?",
        options: [
            'Energizing and promoting mental alertness',
            'Tending to induce drowsiness or sleep',
            'Exciting and triggering intense curiosity',
            'Irritating and causing physical discomfort'
        ],
        answer: 1,
        explanation: "'Soporific' tends to induce drowsiness or sleep."
    },
    {
        q: "What is the meaning of TACITURN?",
        options: [
            'Talkative and expressive in conversation',
            'Reserved or uncommunicative in speech',
            'Loud and boisterous in public gatherings',
            'Boastful about personal accomplishments'
        ],
        answer: 1,
        explanation: "'Taciturn' means reserved or uncommunicative in speech."
    },
    {
        q: "What is the meaning of TRUCULENT?",
        options: [
            'Eager or quick to argue or fight; aggressively defiant',
            'Peaceful, gentle, and cooperative with peers',
            'Docile and easily managed by supervisors',
            'Timid and reluctant to express opinions'
        ],
        answer: 0,
        explanation: "'Truculent' means eager or quick to argue or fight."
    },
    {
        q: "What is the meaning of UBIQUITOUS?",
        options: [
            'Rare, unique, and difficult to locate',
            'Scarce and restricted to specific regions',
            'Present, appearing, or found everywhere',
            'Hidden from public view in secure vaults'
        ],
        answer: 2,
        explanation: "'Ubiquitous' means present, appearing, or found everywhere."
    },
    {
        q: "What is the meaning of VACILLATE?",
        options: [
            'To remain resolute and unshakeable in a choice',
            'To waver between different opinions or actions',
            'To make a firm decision instantly',
            'To commit fully to a long-term plan'
        ],
        answer: 1,
        explanation: "'Vacillate' means to waver between different opinions or actions."
    },
    {
        q: "What is the meaning of VERACITY?",
        options: [
            'Conformity to facts; accuracy or truthfulness',
            'A deliberate fabrication of historical events',
            'An inclination toward deceit and trickery',
            'The spread of unverified rumors'
        ],
        answer: 0,
        explanation: "'Veracity' means conformity to facts or truthfulness."
    },
    {
        q: "What is the meaning of VINDICTIVE?",
        options: [
            'Forgiving and willing to overlook mistakes',
            'Magnanimous toward defeated rivals',
            'Having a strong desire for revenge',
            'Charitable and supportive of the needy'
        ],
        answer: 2,
        explanation: "'Vindictive' means having a strong or unreasoning desire for revenge."
    },
    {
        q: "What is the meaning of VITRIOLIC?",
        options: [
            'Filled with bitter criticism or malice',
            'Mild, gentle, and complimentary in tone',
            'Flattering and overly appreciative',
            'Neutral and objective in analysis'
        ],
        answer: 0,
        explanation: "'Vitriolic' means filled with bitter, scathing criticism or malice."
    },
    {
        q: "What is the meaning of WARRANTED?",
        options: [
            'Groundless and lacking evidence',
            'Justified or authorized by circumstances',
            'Baseless and legally invalid',
            'Unfounded and speculative'
        ],
        answer: 1,
        explanation: "'Warranted' means justified or authorized."
    },
    {
        q: "What is the meaning of ZENITH?",
        options: [
            'The lowest point of a decline',
            'The baseline measurement of an experiment',
            'The time at which something is most powerful or successful',
            'The initial phase of a project'
        ],
        answer: 2,
        explanation: "'Zenith' represents the highest point or peak of success."
    },
    {
        q: "What is the meaning of AMELIORATE?",
        options: [
            'To make something bad or unsatisfactory better',
            'To worsen an existing negative situation',
            'To damage structural integrity',
            'To ignore a growing problem'
        ],
        answer: 0,
        explanation: "'Ameliorate' means to make a bad situation better."
    },
    {
        q: "What is the meaning of ANOMALOUS?",
        options: [
            'Normal, standard, and entirely expected',
            'Deviating from what is standard, normal, or expected',
            'Conforming strictly to established rules',
            'Uniform across all observed samples'
        ],
        answer: 1,
        explanation: "'Anomalous' means deviating from the standard or norm."
    },
    {
        q: "What is the meaning of AUDACIOUS?",
        options: [
            'Timid and hesitant to take risks',
            'Cautious and protective of safety',
            'Showing a willingness to take surprisingly bold risks',
            'Fearful of public exposure'
        ],
        answer: 2,
        explanation: "'Audacious' means showing a willingness to take bold risks."
    },
    {
        q: "What is the meaning of BANAL?",
        options: [
            'Original, creative, and thought-provoking',
            'Inspiring and revolutionary in design',
            'So lacking in originality as to be obvious and boring',
            'Profound and intellectually stimulating'
        ],
        answer: 2,
        explanation: "'Banal' means boringly ordinary and lacking originality."
    },
    {
        q: "What is the meaning of CAPRICIOUS?",
        options: [
            'Constant and unwavering in commitment',
            'Given to sudden and unaccountable changes of mood or behavior',
            'Predictable and methodical in routine',
            'Steadfast in long-term goals'
        ],
        answer: 1,
        explanation: "'Capricious' means impulsive and subject to sudden changes."
    },
    {
        q: "What is the meaning of CHICANERY?",
        options: [
            'Honest and transparent negotiation',
            'The use of trickery to achieve a purpose',
            'Direct and fair competition',
            'Straightforward financial accounting'
        ],
        answer: 1,
        explanation: "'Chicanery' involves the use of trickery or deception."
    },
    {
        q: "What is the meaning of COGENT?",
        options: [
            'Clear, logical, and convincing',
            'Weak and easily disproven',
            'Confusing and structurally flawed',
            'Flimsy and lacking evidence'
        ],
        answer: 0,
        explanation: "'Cogent' means clear, logical, and convincing."
    },
    {
        q: "What is the meaning of CURSORY?",
        options: [
            'Thorough, detailed, and deep',
            'Meticulous in checking every error',
            'Hasty and therefore not thorough or detailed',
            'Comprehensive in scope'
        ],
        answer: 2,
        explanation: "'Cursory' means hasty and superficial."
    },
    {
        q: "What is the meaning of DEARTH?",
        options: [
            'A rich surplus of supplies',
            'A scarcity or lack of something',
            'An abundance of resources',
            'A secure financial reserve'
        ],
        answer: 1,
        explanation: "'Dearth' means a scarcity or lack of something."
    },
    {
        q: "What is the meaning of DIATRIBE?",
        options: [
            'A forceful and bitter verbal attack against someone',
            'A glowing speech of praise at a funeral',
            'A balanced academic critique of literature',
            'An encouraging note of support'
        ],
        answer: 0,
        explanation: "'Diatribe' is a bitter, forceful verbal attack."
    },
    {
        q: "What is the meaning of DIFFIDENT?",
        options: [
            'Confident and bold in social settings',
            'Modest or shy resulting from a lack of self-confidence',
            'Assertive and demanding of attention',
            'Arrogant and boastful about achievements'
        ],
        answer: 1,
        explanation: "'Diffident' means shy and lacking self-confidence."
    },
    {
        q: "What is the meaning of DISSIDENT?",
        options: [
            'A person who conforms to official policy',
            'A loyal supporter of institutional rules',
            'A person who opposes official policy or accepted views',
            'A mediator resolving political disputes'
        ],
        answer: 2,
        explanation: "'Dissident' means someone who opposes official policy."
    },
    {
        q: "What is the meaning of ENERVATE?",
        options: [
            'To invigorate and fill with high energy',
            'To cause someone to feel drained of energy; exhaust',
            'To stimulate physical endurance',
            'To rejuvenate tired muscles'
        ],
        answer: 1,
        explanation: "'Enervate' means to drain of energy or exhaust."
    },
    {
        q: "What is the meaning of EQUANIMITY?",
        options: [
            'Mental calmness and composure in difficult situations',
            'Intense agitation and panic during crises',
            'Hysteria caused by sudden pressure',
            'Extreme emotional volatility'
        ],
        answer: 0,
        explanation: "'Equanimity' means mental calmness and composure."
    },
    {
        q: "What is the meaning of EQUIVOCAL?",
        options: [
            'Leaving no doubt; perfectly clear',
            'Open to more than one interpretation; ambiguous',
            'Direct and straightforward in meaning',
            'Mathematically precise and provable'
        ],
        answer: 1,
        explanation: "'Equivocal' means ambiguous or open to multiple interpretations."
    },
    {
        q: "What is the meaning of ERUDITE?",
        options: [
            'Ignorant of basic facts',
            'Uneducated and lacking formal schooling',
            'Having or showing great knowledge or learning',
            'Unlettered and unrefined'
        ],
        answer: 2,
        explanation: "'Erudite' means scholarly and deeply knowledgeable."
    },
    {
        q: "What is the meaning of EXACERBATE?",
        options: [
            'To alleviate a painful symptom',
            'To mitigate a crisis safely',
            'To make a bad situation or problem worse',
            'To resolve an ongoing dispute'
        ],
        answer: 2,
        explanation: "'Exacerbate' means to make a bad problem worse."
    },
    {
        q: "What is the meaning of EXCULPATE?",
        options: [
            'To accuse someone of formal crimes',
            'To show or declare that someone is not guilty of wrongdoing',
            'To prosecute an offender publicly',
            'To find someone liable in a civil trial'
        ],
        answer: 1,
        explanation: "'Exculpate' means to clear from alleged guilt or fault."
    },
    {
        q: "What is the meaning of FORTUITOUS?",
        options: [
            'Deliberate and planned in advance',
            'Intentional and executed on schedule',
            'Happening by a lucky chance rather than design',
            'Engineered for maximum efficiency'
        ],
        answer: 2,
        explanation: "'Fortuitous' means happening by lucky chance."
    },
    {
        q: "What is the meaning of GAUCHE?",
        options: [
            'Sophisticated and worldly in manners',
            'Lacking social grace, sensitivity, or tact',
            'Polished and elegant in conversation',
            'Urbane and charming in public'
        ],
        answer: 1,
        explanation: "'Gauche' means lacking social grace or tact."
    },
    {
        q: "What is the meaning of GULLIBLE?",
        options: [
            'Incredulous and suspicious of claims',
            'Critical and demanding solid proof',
            'Easily persuaded to believe something',
            'Skeptical of unverified information'
        ],
        answer: 2,
        explanation: "'Gullible' means easily persuaded to believe things."
    },
    {
        q: "What is the meaning of HOMOGENEOUS?",
        options: [
            'Diverse and composed of varied elements',
            'Uniform and of the same kind throughout',
            'Heterogeneous and mixed in structure',
            'Split into opposing factions'
        ],
        answer: 1,
        explanation: "'Homogeneous' means uniform and of the same kind throughout."
    },
    {
        q: "What is the meaning of IMPECUNIOUS?",
        options: [
            'Wealthy and financially independent',
            'Affluent and possessing surplus capital',
            'Having little or no money; destitute',
            'Prosperous and investing in real estate'
        ],
        answer: 2,
        explanation: "'Impecunious' means having little or no money."
    },
    {
        q: "What is the meaning of IMPUDENT?",
        options: [
            'Respectful and courteous toward elders',
            'Failing to show proper respect and courtesy',
            'Humble and deferential in tone',
            'Mindful of social etiquette'
        ],
        answer: 1,
        explanation: "'Impudent' means failing to show proper respect."
    },
    {
        q: "What is the meaning of INNOCUOUS?",
        options: [
            'Harmful and destructive to health',
            'Not harmful or offensive; harmless',
            'Pernicious and toxic in nature',
            'Noxious and irritating'
        ],
        answer: 1,
        explanation: "'Innocuous' means harmless or non-offensive."
    },
    {
        q: "What is the meaning of LOQUACIOUS?",
        options: [
            'Taciturn and quiet in company',
            'Reticent and unwilling to speak',
            'Tending to talk a great deal',
            'Silent and contemplative'
        ],
        answer: 2,
        explanation: "'Loquacious' means tending to talk a great deal."
    },
    {
        q: "What is the meaning of MAGNANIMOUS?",
        options: [
            'Petty and unforgiving of small errors',
            'Vindictive toward rivals',
            'Very generous or forgiving, especially toward a rival',
            'Selfish and obsessed with personal gain'
        ],
        answer: 2,
        explanation: "'Magnanimous' means generous or forgiving, especially toward a rival."
    }
];
