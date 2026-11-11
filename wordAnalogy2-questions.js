// ==========================================
// Skill Practice Categories: Word Analogy 2 (CSE Style Format)
// Modeled after Civil Service Exam visual question templates with clean plain options
// ==========================================

const wordAnalogy2Questions = [
    {
        q: "OBVIATE : _____ :: FORESTALL : EVENT",
        options: [
            'difficulty',
            'progress',
            'surplus',
            'alliance'
        ],
        answer: 0,
        explanation: "To obviate means to anticipate and prevent a difficulty, just as to forestall means to prevent an event."
    },
    {
        q: "LACONIC : _____ :: SPARTAN : COMFORT",
        options: [
            'speed',
            'words',
            'wealth',
            'action'
        ],
        answer: 1,
        explanation: "A laconic person uses very few words, just as a spartan lifestyle involves very few comforts."
    },
    {
        q: "PAUCITY : SURPLUS :: CACOPHONY : _____",
        options: [
            'melody',
            'silence',
            'harmony',
            'rhythm'
        ],
        answer: 2,
        explanation: "Paucity and surplus are antonyms, just as cacophony (harsh noise) and harmony are opposites."
    },
    {
        q: "TIRADE : ABUSIVE :: PANEGYRIC : _____",
        options: [
            'brief',
            'critical',
            'laudatory',
            'literary'
        ],
        answer: 2,
        explanation: "A tirade is characteristically abusive, just as a panegyric is characteristically laudatory (praising)."
    },
    {
        q: "ICONOCLAST : TRADITION :: MAVERICK : _____",
        options: [
            'authority',
            'conformity',
            'intelligence',
            'discipline'
        ],
        answer: 1,
        explanation: "An iconoclast opposes tradition, just as a maverick opposes conformity."
    },
    {
        q: "SOPORIFIC : ALERTNESS :: EMOLLIENT : _____",
        options: [
            'inflammation',
            'irritation',
            'moisture',
            'infection'
        ],
        answer: 1,
        explanation: "A soporific reduces alertness, just as an emollient soothes and reduces skin irritation."
    },
    {
        q: "ENERVATE : VITALITY :: DEPLETE : _____",
        options: [
            'capacity',
            'energy',
            'resources',
            'time'
        ],
        answer: 2,
        explanation: "To enervate is to drain of vitality, just as to deplete is to drain of resources."
    },
    {
        q: "EQUANIMITY : STRESS :: RESILIENCE : _____",
        options: [
            'hardship',
            'failure',
            'danger',
            'fatigue'
        ],
        answer: 0,
        explanation: "Equanimity is calm under stress, just as resilience is strength under hardship."
    },
    {
        q: "SURREPTITIOUS : DETECTION :: FURTIVE : _____",
        options: [
            'discovery',
            'observation',
            'pursuit',
            'suspicion'
        ],
        answer: 1,
        explanation: "Surreptitious avoids detection, just as furtive avoids observation."
    },
    {
        q: "OBFUSCATE : CLARITY :: EXTINGUISH : _____",
        options: [
            'smoke',
            'heat',
            'fuel',
            'flame'
        ],
        answer: 3,
        explanation: "To obfuscate destroys clarity, just as to extinguish destroys a flame."
    },
    {
        q: "INTRACTABLE : MANAGE :: IMPLACABLE : _____",
        options: [
            'convince',
            'appease',
            'deceive',
            'govern'
        ],
        answer: 1,
        explanation: "An intractable person cannot be managed, just as an implacable person cannot be appeased."
    },
    {
        q: "PHLEGMATIC : EMOTION :: STOIC : _____",
        options: [
            'pain',
            'fear',
            'joy',
            'anger'
        ],
        answer: 0,
        explanation: "A phlegmatic person shows little emotion, just as a stoic person shows little reaction to pain."
    },
    {
        q: "DIFFIDENT : CONFIDENCE :: PUSILLANIMOUS : _____",
        options: [
            'strength',
            'wisdom',
            'courage',
            'patience'
        ],
        answer: 2,
        explanation: "A diffident person lacks confidence, just as a pusillanimous person lacks courage."
    },
    {
        q: "ASCETIC : LUXURY :: MISER : _____",
        options: [
            'poverty',
            'wealth',
            'charity',
            'security'
        ],
        answer: 1,
        explanation: "An ascetic abstains from luxury, just as a miser hoards and abstains from spending wealth."
    },
    {
        q: "EPHEMERAL : PERMANENCE :: SUPERFICIAL : _____",
        options: [
            'width',
            'beauty',
            'depth',
            'clarity'
        ],
        answer: 2,
        explanation: "Something ephemeral lacks permanence, just as something superficial lacks depth."
    },
    {
        q: "LUCID : AMBIGUITY :: LIMPID : _____",
        options: [
            'muddiness',
            'motion',
            'depth',
            'color'
        ],
        answer: 0,
        explanation: "Something lucid is free from ambiguity, just as something limpid (clear liquid) is free from muddiness."
    },
    {
        q: "MENDACIOUS : TRUTH :: SPURIOUS : _____",
        options: [
            'origin',
            'quality',
            'design',
            'authenticity'
        ],
        answer: 3,
        explanation: "A mendacious statement lacks truth, just as a spurious item lacks authenticity."
    },
    {
        q: "NASCENT : DEVELOPMENT :: LATENT : _____",
        options: [
            'realization',
            'manifestation',
            'movement',
            'discovery'
        ],
        answer: 1,
        explanation: "Something nascent is prior to development, just as something latent is prior to manifestation."
    },
    {
        q: "OBSEQUIOUS : FLATTERY :: SUPERCILIOUS : _____",
        options: [
            'ignorance',
            'humility',
            'arrogance',
            'hostility'
        ],
        answer: 2,
        explanation: "Obsequious behavior involves excessive flattery, just as supercilious behavior involves arrogance."
    },
    {
        q: "PARSIMONIOUS : EXPENDITURE :: PROFLIGATE : _____",
        options: [
            'waste',
            'resource',
            'earnings',
            'investment'
        ],
        answer: 0,
        explanation: "A parsimonious person is sparing in expenditure, just as a profligate person is extremely wasteful."
    },
    {
        q: "RECALCITRANT : AUTHORITY :: REFRACTORY : _____",
        options: [
            'education',
            'persuasion',
            'treatment',
            'discipline'
        ],
        answer: 2,
        explanation: "A recalcitrant resists authority, just as a refractory patient or element resists treatment."
    },
    {
        q: "SAGACIOUS : WISDOM :: MERCURIAL : _____",
        options: [
            'speed',
            'intelligence',
            'volatility',
            'brilliance'
        ],
        answer: 2,
        explanation: "Sagacious reflects wisdom, just as mercurial reflects volatility."
    },
    {
        q: "TACITURN : WORDS :: ABSTEMIOUS : _____",
        options: [
            'action',
            'speech',
            'food',
            'emotion'
        ],
        answer: 2,
        explanation: "A taciturn person is sparing with words, just as an abstemious person is sparing with food and drink."
    },
    {
        q: "TRUCULENT : AGGRESSION :: MAGNANIMOUS : _____",
        options: [
            'nobility',
            'forgiveness',
            'intellect',
            'humility'
        ],
        answer: 0,
        explanation: "Truculent actions display aggression, just as magnanimous actions display nobility."
    },
    {
        q: "UBIQUITOUS : PRESENCE :: PERENNIAL : _____",
        options: [
            'variation',
            'growth',
            'persistence',
            'intensity'
        ],
        answer: 2,
        explanation: "Ubiquitous implies constant presence across places, just as perennial implies persistence across time."
    },
    {
        q: "VACILLATE : RESOLUTION :: FLUCTUATE : _____",
        options: [
            'direction',
            'temperature',
            'stability',
            'movement'
        ],
        answer: 2,
        explanation: "To vacillate destroys resolution, just as to fluctuate destroys stability."
    },
    {
        q: "VINDICTIVE : MALICE :: ALTRUISTIC : _____",
        options: [
            'charity',
            'benevolence',
            'sympathy',
            'justice'
        ],
        answer: 1,
        explanation: "Vindictive actions stem from malice, just as altruistic actions stem from benevolence."
    },
    {
        q: "VITRIOLIC : CRITICISM :: PANEGYRIC : _____",
        options: [
            'sorrow',
            'praise',
            'anger',
            'humor'
        ],
        answer: 1,
        explanation: "Vitriolic describes harsh criticism, just as panegyric describes high praise."
    },
    {
        q: "ANOMALOUS : NORM :: ATYPICAL : _____",
        options: [
            'pattern',
            'standard',
            'category',
            'rule'
        ],
        answer: 1,
        explanation: "Anomalous deviates from the norm, just as atypical deviates from the standard."
    },
    {
        q: "AUDACIOUS : CONVENTION :: ICONOCLAST : _____",
        options: [
            'law',
            'dogma',
            'church',
            'society'
        ],
        answer: 1,
        explanation: "An audacious approach challenges convention, just as an iconoclast challenges dogma."
    },
    {
        q: "BANAL : ORIGINALITY :: TRITE : _____",
        options: [
            'complexity',
            'meaning',
            'freshness',
            'depth'
        ],
        answer: 2,
        explanation: "Something banal lacks originality, just as something trite lacks freshness."
    },
    {
        q: "CAPRICIOUS : WHIM :: METHODICAL : _____",
        options: [
            'speed',
            'plan',
            'goal',
            'logic'
        ],
        answer: 1,
        explanation: "Capricious behavior is guided by whim, just as methodical behavior is guided by a plan."
    },
    {
        q: "CHICANERY : HONESTY :: SOPHISTRY : _____",
        options: [
            'truth',
            'clarity',
            'justice',
            'wisdom'
        ],
        answer: 0,
        explanation: "Chicanery is the antithesis of honesty, just as sophistry is the antithesis of truth."
    },
    {
        q: "COGENT : ARGUMENT :: ROBUST : _____",
        options: [
            'economy',
            'defense',
            'structure',
            'health'
        ],
        answer: 1,
        explanation: "A cogent argument is strong and convincing, just as a robust defense is strong and effective."
    },
    {
        q: "CURSORY : DETAIL :: PERFUNCTORY : _____",
        options: [
            'attention',
            'speed',
            'enthusiasm',
            'quality'
        ],
        answer: 2,
        explanation: "A cursory examination lacks detail, just as a perfunctory performance lacks enthusiasm."
    },
    {
        q: "POLEMIC : AGREEMENT :: DIATRIBE : _____",
        options: [
            'logic',
            'reason',
            'structure',
            'praise'
        ],
        answer: 3,
        explanation: "A polemic provokes disagreement rather than agreement, just as a diatribe involves attack rather than praise."
    },
    {
        q: "DIFFIDENT : ASSURANCE :: INEPT : _____",
        options: [
            'skill',
            'knowledge',
            'judgment',
            'talent'
        ],
        answer: 0,
        explanation: "A diffident person lacks assurance, just as an inept person lacks skill."
    },
    {
        q: "DISSIDENT : ORTHODOXY :: HERETIC : _____",
        options: [
            'state',
            'dogma',
            'church',
            'power'
        ],
        answer: 1,
        explanation: "A dissident opposes political orthodoxy, just as a heretic opposes religious dogma."
    },
    {
        q: "ENERVATE : STRENGTH :: DEBILITATE : _____",
        options: [
            'health',
            'mind',
            'spirit',
            'energy'
        ],
        answer: 3,
        explanation: "To enervate reduces strength, just as to debilitate reduces energy and vigor."
    },
    {
        q: "EQUIVOCAL : CLARITY :: NEBULOUS : _____",
        options: [
            'definition',
            'form',
            'size',
            'color'
        ],
        answer: 0,
        explanation: "Something equivocal lacks clarity, just as something nebulous lacks precise definition."
    },
    {
        q: "ERUDITE : SCHOLARSHIP :: FASTIDIOUS : _____",
        options: [
            'cleanliness',
            'precision',
            'speed',
            'order'
        ],
        answer: 1,
        explanation: "An erudite person displays scholarship, just as a fastidious person displays precision."
    },
    {
        q: "EXACERBATE : PROBLEM :: AGGRAVATE : _____",
        options: [
            'injury',
            'tension',
            'dispute',
            'illness'
        ],
        answer: 1,
        explanation: "To exacerbate worsens a problem, just as to aggravate worsens tension."
    },
    {
        q: "EXCULPATE : BLAME :: VINDICATE : _____",
        options: [
            'doubt',
            'guilt',
            'crime',
            'error'
        ],
        answer: 1,
        explanation: "To exculpate removes blame, just as to vindicate removes guilt or suspicion."
    },
    {
        q: "FORTUITOUS : INTENTION :: ACCIDENTAL : _____",
        options: [
            'cause',
            'design',
            'outcome',
            'origin'
        ],
        answer: 1,
        explanation: "Fortuitous events occur without intention, just as accidental events occur without design."
    },
    {
        q: "GAUCHE : ETIQUETTE :: BOORISH : _____",
        options: [
            'manners',
            'education',
            'culture',
            'refinement'
        ],
        answer: 3,
        explanation: "Someone who is gauche lacks etiquette, just as someone who is boorish lacks refinement."
    },
    {
        q: "GULLIBLE : SKEPTICISM :: DOGMATIC : _____",
        options: [
            'certainty',
            'flexibility',
            'tolerance',
            'patience'
        ],
        answer: 1,
        explanation: "A gullible person lacks skepticism, just as a dogmatic person lacks flexibility."
    },
    {
        q: "HOMOGENEOUS : VARIETY :: UNIFORM : _____",
        options: [
            'structure',
            'quality',
            'diversity',
            'pattern'
        ],
        answer: 2,
        explanation: "Something homogeneous lacks variety, just as something uniform lacks diversity."
    },
    {
        q: "IMPECUNIOUS : WEALTH :: INDIGENT : _____",
        options: [
            'property',
            'shelter',
            'income',
            'savings'
        ],
        answer: 0,
        explanation: "An impecunious person lacks wealth, just as an indigent person lacks property."
    },
    {
        q: "IMPUDENT : RESPECT :: INSOLENT : _____",
        options: [
            'obedience',
            'courtesy',
            'deference',
            'manners'
        ],
        answer: 2,
        explanation: "Impudent behavior shows a lack of respect, just as insolent behavior shows a lack of deference."
    },
    {
        q: "PAEAN : JOY :: DIRGE : _____",
        options: [
            'anger',
            'grief',
            'fear',
            'peace'
        ],
        answer: 1,
        explanation: "A paean expresses joy, just as a dirge expresses grief or mourning."
    }
];
