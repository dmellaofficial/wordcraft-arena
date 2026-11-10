// ==========================================
// Skill Practice Categories: Word Analogy (100 Questions)
// Balanced options, non-revealing distractors, uniform distribution
// ==========================================

const wordAnalogyQuestions = [
    {
        q: "THERMOMETER : TEMPERATURE ::",
        options: [
            'Barometer : Pressure',
            'Clock : Timezone',
            'Odometer : Speedometer',
            'Compass : Latitude'
        ],
        answer: 0,
        explanation: "'Barometer : Pressure' is correct because a thermometer measures temperature just as a barometer measures atmospheric pressure."
    },
    {
        q: "OBSTINATE : STUBBORN ::",
        options: [
            'Flexible : Rigid',
            'Frugal : Miserly',
            'Arrogant : Humble',
            'Cowardly : Brave'
        ],
        answer: 1,
        explanation: "'Frugal : Miserly' shares a similar intensifying synonym relationship (obstinate is an extreme form of stubborn, just as miserly is an extreme form of frugal)."
    },
    {
        q: "OPAQUE : TRANSPARENT ::",
        options: [
            'Clear : Lucid',
            'Blurry : Sharp',
            'Dark : Gloomy',
            'Bright : Glowing'
        ],
        answer: 1,
        explanation: "'Blurry : Sharp' is correct because opaque and transparent are antonyms, matching the antonym relationship between blurry and sharp."
    },
    {
        q: "SCULPTOR : CHISEL ::",
        options: [
            'Painter : Canvas',
            'Carpenter : Saw',
            'Author : Chapter',
            'Baker : Oven'
        ],
        answer: 1,
        explanation: "'Carpenter : Saw' represents an artisan and their primary cutting or shaping hand tool."
    },
    {
        q: "GREGARIOUS : SOCIABLE ::",
        options: [
            'Solitary : Lonely',
            'Introverted : Shy',
            'Lurk : Hide',
            'Taciturn : Talkative'
        ],
        answer: 1,
        explanation: "'Introverted : Shy' shares a close conceptual parallel, as gregarious means highly sociable."
    },
    {
        q: "PANDEMONIUM : CHAOS ::",
        options: [
            'Silence : Peace',
            'Serenity : Calmness',
            'Disaster : Success',
            'Tranquility : Noise'
        ],
        answer: 1,
        explanation: "'Serenity : Calmness' is a synonym pair matching the high-intensity synonym pair of pandemonium and chaos."
    },
    {
        q: "GRAVITY : PULL ::",
        options: [
            'Magnetism : Repel',
            'Electricity : Current',
            'Radiation : Shield',
            'Vacuum : Suction'
        ],
        answer: 3,
        explanation: "'Vacuum : Suction' represents a physical force or condition paired with its primary effect or characteristic action."
    },
    {
        q: "MERCURY : PLANET ::",
        options: [
            'Rose : Flower',
            'Galaxy : Star',
            'Oxygen : Gas',
            'Desert : Oasis'
        ],
        answer: 0,
        explanation: "'Rose : Flower' represents a specific instance of a broader category (Mercury is a type of planet; a rose is a type of flower)."
    },
    {
        q: "EPHEMERAL : PERMANENT ::",
        options: [
            'Fleeting : Temporary',
            'Eternal : Infinite',
            'Transient : Enduring',
            'Rapid : Slow'
        ],
        answer: 2,
        explanation: "'Transient : Enduring' mirrors the direct antonym relationship between ephemeral (short-lived) and permanent."
    },
    {
        q: "ZOOLOGY : ANIMALS ::",
        options: [
            'Botany : Plants',
            'Geology : Planets',
            'Astrology : Weather',
            'Chemistry : Atoms'
        ],
        answer: 0,
        explanation: "'Botany : Plants' represents the scientific study of a specific kingdom of living organisms."
    },
    {
        q: "TEACHER : SCHOOL ::",
        options: [
            'Actor : Stage',
            'Doctor : Hospital',
            'Chef : Kitchen',
            'Pilot : Airplane'
        ],
        answer: 1,
        explanation: "'Doctor : Hospital' pairs a professional with their primary institutional workplace."
    },
    {
        q: "LETHARGIC : ENERGETIC ::",
        options: [
            'Sluggish : Active',
            'Vibrant : Dynamic',
            'Dull : Boring',
            'Apathetic : Indifferent'
        ],
        answer: 0,
        explanation: "'Sluggish : Active' represents an antonym pair matching lethargic (sluggish) and energetic."
    },
    {
        q: "AMNESIA : MEMORY ::",
        options: [
            'Insomnia : Sleep',
            'Paralysis : Movement',
            'Blindness : Vision',
            'Allergy : Immunity'
        ],
        answer: 2,
        explanation: "'Blindness : Vision' is a direct parallel where a medical condition results in the complete loss of a specific faculty."
    },
    {
        q: "NOVEL : CHAPTER ::",
        options: [
            'Song : Verse',
            'Poem : Rhyme',
            'Drama : Act',
            'Painting : Frame'
        ],
        answer: 2,
        explanation: "'Drama : Act' represents a narrative work broken down into its major structural partitions."
    },
    {
        q: "COW : HERD ::",
        options: [
            'Fish : School',
            'Wolf : Pack',
            'Bird : Flock',
            'Lion : Pride'
        ],
        answer: 1,
        explanation: "'Wolf : Pack' is a precise collective noun match for canine grouping, similar to cattle and herd."
    },
    {
        q: "FRAGILE : BREAKABLE ::",
        options: [
            'Pliable : Flexible',
            'Heavy : Weighty',
            'Tough : Durable',
            'Sharp : Dull'
        ],
        answer: 0,
        explanation: "'Pliable : Flexible' represents a pair of direct synonyms describing physical properties."
    },
    {
        q: "CACOPHONY : SOUND ::",
        options: [
            'Blare : Noise',
            'Din : Silence',
            'Glare : Light',
            'Stench : Smell'
        ],
        answer: 3,
        explanation: "'Stench : Smell' matches a harsh or unpleasant extreme version of a sensory category (cacophony is harsh sound; stench is harsh smell)."
    },
    {
        q: "HONEYBEE : HIVE ::",
        options: [
            'Spider : Web',
            'Bird : Nest',
            'Beaver : Dam',
            'Badger : Burrow'
        ],
        answer: 3,
        explanation: "'Badger : Burrow' or 'Spider : Web' — let's look at animal habitats; badgers live in underground burrows built or expanded as a home base."
    },
    {
        q: "VERBOSE : WORDS ::",
        options: [
            'Prolific : Ideas',
            'Extravagant : Money',
            'Generous : Time',
            'Eloquent : Speech'
        ],
        answer: 1,
        explanation: "'Extravagant : Money' matches using an excessive or overabundant amount of a specific resource."
    },
    {
        q: "ENIGMA : MYSTERY ::",
        options: [
            'Miracle : Wonder',
            'Puzzle : Answer',
            'Secret : Rumor',
            'Tragedy : Comedy'
        ],
        answer: 0,
        explanation: "'Miracle : Wonder' pairs two closely related concepts representing unexplainable or awe-inspiring phenomena."
    },
    {
        q: "PILOT : COCKPIT ::",
        options: [
            'Captain : Bridge',
            'Driver : Cabin',
            'Engineer : Engine',
            'Conductor : Track'
        ],
        answer: 0,
        explanation: "'Captain : Bridge' pairs a vehicle commander with their specific command station."
    },
    {
        q: "METAPHOR : LITERAL ::",
        options: [
            'Fable : Realistic',
            'Symbol : Abstract',
            'Parody : Serious',
            'Fiction : Memoir'
        ],
        answer: 2,
        explanation: "'Parody : Serious' contrasts a figurative or mocking representation with its direct, earnest counterpart."
    },
    {
        q: "ALGORITHM : STEPS ::",
        options: [
            'Recipe : Ingredients',
            'Blueprint : Building',
            'Symphony : Notes',
            'Formula : Variables'
        ],
        answer: 0,
        explanation: "'Recipe : Ingredients' represents a structured procedural guide broken down into its sequential components."
    },
    {
        q: "IGNITE : EXTINGUISH ::",
        options: [
            'Start : Finish',
            'Build : Destroy',
            'Create : Destroy',
            'Commence : Cease'
        ],
        answer: 3,
        explanation: "'Commence : Cease' are direct antonyms representing starting versus stopping an action."
    },
    {
        q: "ARCHITECT : BLUEPRINT ::",
        options: [
            'Author : Manuscript',
            'Composer : Score',
            'Director : Script',
            'Sculptor : Marble'
        ],
        answer: 1,
        explanation: "'Composer : Score' matches an artist creating a detailed structural design plan for performance or execution."
    },
    {
        q: "LUMINOUS : DARK ::",
        options: [
            'Audible : Silent',
            'Fragrant : Pungent',
            'Smooth : Rough',
            'Bitter : Sweet'
        ],
        answer: 0,
        explanation: "'Audible : Silent' pairs a sensory presence (emitting light/sound) with its complete absence."
    },
    {
        q: "SCINTILLATING : DULL ::",
        options: [
            'Brilliant : Smart',
            'Tedious : Exciting',
            'Sparkling : Boring',
            'Vivid : Faded'
        ],
        answer: 3,
        explanation: "'Vivid : Faded' contrasts sparkling brightness or liveliness with dullness."
    },
    {
        q: "PALINDROME : WORD ::",
        options: [
            'Anagram : Letter',
            'Riddle : Answer',
            'Symphony : Chord',
            'Loop : Sequence'
        ],
        answer: 0,
        explanation: "'Anagram : Letter' represents structural manipulation of linguistic units."
    },
    {
        q: "DISMAL : CHEERFUL ::",
        options: [
            'Gloomy : Bright',
            'Melancholy : Sad',
            'Somber : Serious',
            'Bleak : Hopeful'
        ],
        answer: 3,
        explanation: "'Bleak : Hopeful' contrasts a state of despair with a positive outlook."
    },
    {
        q: "INCUBATOR : INFANT ::",
        options: [
            'Greenhouse : Plant',
            'Refrigerator : Food',
            'Aquarium : Fish',
            'Vault : Money'
        ],
        answer: 0,
        explanation: "'Greenhouse : Plant' represents a controlled protective environment designed to foster delicate growth."
    },
    {
        q: "SYCOPHANT : FLATTERY ::",
        options: [
            'Martyr : Sacrifice',
            'Braggart : Boasting',
            'Rebel : Compliance',
            'Coward : Courage'
        ],
        answer: 1,
        explanation: "'Braggart : Boasting' pairs a character archetype with their defining behavioral trait."
    },
    {
        q: "ZEALOT : ENTHUSIASM ::",
        options: [
            'Miser : Generosity',
            'Atheist : Faith',
            'Glutton : Food',
            'Expert : Skill'
        ],
        answer: 2,
        explanation: "'Glutton : Food' pairs an extreme consumer with their object of overindulgence."
    },
    {
        q: "NOMAD : WANDER ::",
        options: [
            'Hermit : Roam',
            'Recluse : Hide',
            'Pioneer : Explore',
            'Tourist : Settle'
        ],
        answer: 2,
        explanation: "'Pioneer : Explore' matches a lifestyle or character type with their primary defining action."
    },
    {
        q: "HARMONY : DISCORD ::",
        options: [
            'Agreement : Conflict',
            'Symphony : Melody',
            'Peace : Quiet',
            'Union : Division'
        ],
        answer: 0,
        explanation: "'Agreement : Conflict' pairs social or conceptual accord directly against its opposite."
    },
    {
        q: "TRACTOR : FARM ::",
        options: [
            'Forklift : Warehouse',
            'Ambulance : Street',
            'Cruiser : Ocean',
            'Locomotive : Station'
        ],
        answer: 0,
        explanation: "'Forklift : Warehouse' pairs heavy industrial utility equipment with its primary operational setting."
    },
    {
        q: "MERCENARY : MONEY ::",
        options: [
            'Volunteer : Reward',
            'Politician : Power',
            'Student : Knowledge',
            'Athlete : Trophy'
        ],
        answer: 1,
        explanation: "'Politician : Power' or mercenary motivated solely by financial gain; politician motivated by political power."
    },
    {
        q: "EDIFICE : BUILDING ::",
        options: [
            'Mountain : Hill',
            'Stream : River',
            'Statue : Sculpture',
            'Forest : Tree'
        ],
        answer: 2,
        explanation: "'Statue : Sculpture' or edifice refers to a large, imposing building, matching a grand classification."
    },
    {
        q: "TENACIOUS : YIELD ::",
        options: [
            'Flexible : Bend',
            'Fragile : Shatter',
            'Resilient : Recover',
            'Stubborn : Compromise'
        ],
        answer: 3,
        explanation: "'Stubborn : Compromise' matches a personality trait characterized by an unwillingness to give in."
    },
    {
        q: "PULSE : ARTERY ::",
        options: [
            'Current : Wire',
            'Signal : Tower',
            'Traffic : Road',
            'Blood : Vein'
        ],
        answer: 0,
        explanation: "'Current : Wire' represents energy or flow pulsing through a dedicated conductive conduit."
    },
    {
        q: "MANDATE : OPTIONAL ::",
        options: [
            'Prohibition : Allowed',
            'Law : Legal',
            'Guideline : Strict',
            'Suggestion : Mandatory'
        ],
        answer: 0,
        explanation: "'Prohibition : Allowed' pairs a legal requirement or restriction with its logical opposite state."
    },
    {
        q: "NOXIOUS : TOXIC ::",
        options: [
            'Beneficial : Harmful',
            'Salubrious : Healthy',
            'Vicious : Kind',
            'Benign : Harmless'
        ],
        answer: 1,
        explanation: "'Salubrious : Healthy' or noxious meaning harmful/toxic, matching health-related properties."
    },
    {
        q: "SOLILOQUY : CHARACTER ::",
        options: [
            'Monologue : Actor',
            'Aside : Audience',
            'Dialogue : Author',
            'Narration : Writer'
        ],
        answer: 1,
        explanation: "'Aside : Audience' represents a theatrical device directed toward a specific observer or listener."
    },
    {
        q: "PROLOGUE : NOVEL ::",
        options: [
            'Overture : Opera',
            'Credits : Film',
            'Index : Textbook',
            'Epilogue : Chapter'
        ],
        answer: 0,
        explanation: "'Overture : Opera' pairs an introductory musical or literary prelude with the main artistic performance."
    },
    {
        q: "DETRIMENTAL : ADVANTAGEOUS ::",
        options: [
            'Harmful : Beneficial',
            'Costume : Expensive',
            'Hostile : Friendly',
            'Destructive : Useful'
        ],
        answer: 2,
        explanation: "'Hostile : Friendly' contrasts negative social alignment with positive interpersonal relationships."
    },
    {
        q: "COBBLER : SHOE ::",
        options: [
            'Tailor : Garment',
            'Blacksmith : Anvil',
            'Baker : Flour',
            'Mason : Stone'
        ],
        answer: 0,
        explanation: "'Tailor : Garment' pairs a skilled craftsperson with the specific wearable item they construct."
    },
    {
        q: "PRISTINE : TAINTED ::",
        options: [
            'Immaculate : Flawed',
            'Ancient : Modern',
            'Clean : Dirty',
            'Pure : Adulterated'
        ],
        answer: 3,
        explanation: "'Pure : Adulterated' contrasts an unblemished state with something that has been corrupted or mixed with impurities."
    },
    {
        q: "ZOOLOGY : BIOLOGY ::",
        options: [
            'Physics : Science',
            'Algebra : Math',
            'Astrophysics : Astronomy',
            'Neurology : Medicine'
        ],
        answer: 3,
        explanation: "'Neurology : Medicine' represents a specialized branch nested within a broader parent field of study."
    },
    {
        q: "FALSIFY : PROVE ::",
        options: [
            'Deny : Confirm',
            'Reject : Accept',
            'Disprove : Validate',
            'Refute : Support'
        ],
        answer: 2,
        explanation: "'Disprove : Validate' pairs actions representing invalidating a claim versus confirming its truth."
    },
    {
        q: "PENURY : WEALTH ::",
        options: [
            'Destitution : Poverty',
            'Ignorance : Knowledge',
            'Silence : Sound',
            'Darkness : Light'
        ],
        answer: 1,
        explanation: "'Ignorance : Knowledge' contrasts complete lack of resources/understanding with abundance."
    },
    {
        q: "CANDID : EVASIVE ::",
        options: [
            'Honest : Deceptive',
            'Frank : Direct',
            'Open : Secretive',
            'Sincere : False'
        ],
        answer: 2,
        explanation: "'Open : Secretive' contrasts direct transparency with hidden or guarded behavior."
    },
    {
        q: "CARTOGRAPHY : MAPS ::",
        options: [
            'Lexicography : Dictionaries',
            'Calligraphy : Pens',
            'Biography : People',
            'Astronomy : Stars'
        ],
        answer: 0,
        explanation: "'Lexicography : Dictionaries' pairs the specialized practice of compiling reference works with the works themselves."
    },
    {
        q: "PLAGIARIZE : IDEAS ::",
        options: [
            'Embezzle : Funds',
            'Smuggle : Goods',
            'Trespass : Land',
            'Poach : Animals'
        ],
        answer: 0,
        explanation: "'Embezzle : Funds' pairs an intellectual or financial theft crime with the exact intangible resource misappropriated."
    },
    {
        q: "STAGGER : WALK ::",
        options: [
            'Stutter : Speak',
            'Blurt : Whisper',
            'Gasp : Breathe',
            'Falter : Run'
        ],
        answer: 0,
        explanation: "'Stutter : Speak' pairs an unsteady or interrupted execution of a basic motor/verbal action."
    },
    {
        q: "ZEALOUS : APATHETIC ::",
        options: [
            'Fervent : Indifferent',
            'Eager : Reluctant',
            'Passionate : Cold',
            'Active : Lazy'
        ],
        answer: 0,
        explanation: "'Fervent : Indifferent' contrasts intense emotional drive with complete lack of care or feeling."
    },
    {
        q: "EPICURE : FOOD ::",
        options: [
            'Connoisseur : Art',
            'Aesthete : Beauty',
            'Bibliophile : Books',
            'Glutton : Feast'
        ],
        answer: 1,
        explanation: "'Aesthete : Beauty' or connoisseur of fine tastes matches an expert appreciation profile."
    },
    {
        q: "DISPERSE : GATHER ::",
        options: [
            'Scatter : Collect',
            'Diffuse : Concentrate',
            'Dissolve : Form',
            'Distribute : Allocate'
        ],
        answer: 1,
        explanation: "'Diffuse : Concentrate' represents spreading out versus bringing together into a dense focus."
    },
    {
        q: "EQUIVOCAL : AMBIGUOUS ::",
        options: [
            'Certain : Clear',
            'Definite : Vague',
            'Lucid : Obscure',
            'Evident : Clear'
        ],
        answer: 1,
        explanation: "'Definite : Vague' contrasts certainty with uncertainty."
    },
    {
        q: "ORNITHOLOGY : BIRDS ::",
        options: [
            'Ichthyology : Fish',
            'Entomology : Insects',
            'Herpetology : Reptiles',
            'All of the above' // Let's use clean standard single options to avoid giveaway lengths:
        ],
        // Let's replace the last option with a proper non-revealing one:
        // Ichthyology : Fish
        q: "ORNITHOLOGY : BIRDS ::",
        options: [
            'Ichthyology : Fish',
            'Astrology : Planets',
            'Chronology : Time',
            'Philology : Words'
        ],
        answer: 0,
        explanation: "'Ichthyology : Fish' represents the dedicated scientific study of aquatic vertebrates."
    },
    {
        q: "TACITURN : TALKATIVE ::",
        options: [
            'Reticent : Expressive',
            'Reserved : Shy',
            'Quiet : Loud',
            'Concise : Brief'
        ],
        answer: 0,
        explanation: "'Reticent : Expressive' contrasts habitual silence or reserve with outgoing expression."
    },
    {
        q: "INCENDIARY : FIRE ::",
        options: [
            'Poison : Death',
            'Soporific : Sleep',
            'Anesthetic : Pain',
            'Catalyst : Reaction'
        ],
        answer: 1,
        explanation: "'Soporific : Sleep' pairs a substance or agent with the exact condition or state it induces."
    },
    {
        q: "DISCORDANT : HARMONIOUS ::",
        options: [
            'Dissonant : Melodic',
            'Jarring : Smooth',
            'Incompatible : Matching',
            'Conflicting : Aligned'
        ],
        answer: 3,
        explanation: "'Conflicting : Aligned' contrasts disagreement or clashing alignment with smooth harmony."
    },
    {
        q: "LACONIC : WORDS ::",
        options: [
            'Spartan : Comfort',
            'Brevity : Speech',
            'Terse : Language',
            'Pithy : Meaning'
        ],
        answer: 0,
        explanation: "'Spartan : Comfort' pairs an adjective describing extreme restraint or minimalism regarding a specific resource."
    },
    {
        q: "PHILANTHROPIST : CHARITY ::",
        options: [
            'Benefactor : Donation',
            'Humanitarian : Aid',
            'Pioneer : Discovery',
            'Patron : Art'
        ],
        answer: 3,
        explanation: "'Patron : Art' pairs a supportive benefactor with their specific realm of cultural sponsorship."
    },
    {
        q: "INDIGENT : WEALTHY ::",
        options: [
            'Destitute : Affluent',
            'Bankrupt : Solvent',
            'Penniless : Rich',
            'Needy : Generous'
        ],
        answer: 1,
        explanation: "'Bankrupt : Solvent' contrasts extreme financial lack with financial soundness."
    },
    {
        q: "AUDACIOUS : TIMID ::",
        options: [
            'Bold : Fearful',
            'Courageous : Brave',
            'Daring : Cautious',
            'Valiant : Cowardly'
        ],
        answer: 2,
        explanation: "'Daring : Cautious' contrasts bold, risk-taking behavior with careful hesitation."
    },
    {
        q: "PANEGYRIC : PRAISE ::",
        options: [
            'Eulogy : Sorrow',
            'Elegy : Lament',
            'Sermon : Morality',
            'Tirade : Anger'
        ],
        answer: 1,
        explanation: "'Elegy : Lament' pairs a formal literary tribute or speech with its core emotional theme (panegyric expresses praise; elegy expresses lament)."
    },
    {
        q: "FRUGAL : PARSIMONIOUS ::",
        options: [
            'Cautious : Timid',
            'Thrifty : Stingy',
            'Prudent : Wise',
            'Careful : Reckless'
        ],
        answer: 1,
        explanation: "'Thrifty : Stingy' pairs a moderate, positive trait with its excessive or negative extreme."
    },
    {
        q: "MEANDERING : DIRECT ::",
        options: [
            'Wandering : Straight',
            'Curved : Linear',
            'Tortuous : Simple',
            'Circuitous : Straight'
        ],
        answer: 3,
        explanation: "'Circuitous : Straight' contrasts an indirect, winding path with a direct one."
    },
    {
        q: "OBSEQUIOUS : SERVILE ::",
        options: [
            'Arrogant : Proud',
            'Humble : Modest',
            'Sycophantic : Fawning',
            'Pompous : Grand'
        ],
        answer: 2,
        explanation: "'Sycophantic : Fawning' pairs close synonyms describing excessive flattery and subservience."
    },
    {
        q: "DESPOT : TYRANTS ::",
        options: [
            'Monarch : Ruler',
            'Dictator : Autocrat',
            'Anarchist : Rebel',
            'Zealot : Fanatic'
        ],
        answer: 1,
        explanation: "'Dictator : Autocrat' pairs synonymous terms for absolute rulers."
    },
    {
        q: "APOCRYPHAL : AUTHENTIC ::",
        options: [
            'Spurious : Genuine',
            'False : True',
            'Fake : Real',
            'Mythical : Historical'
        ],
        answer: 0,
        explanation: "'Spurious : Genuine' matches sophisticated antonyms for doubtful origin versus verified truth."
    },
    {
        q: "OBDURATE : COMPASSION ::",
        options: [
            'Callous : Empathy',
            'Rigid : Flexibility',
            'Hard : Softness',
            'Stiff : Movement'
        ],
        answer: 0,
        explanation: "'Callous : Empathy' pairs an unfeeling personality trait with the specific emotional virtue it lacks."
    },
    {
        q: "FULMINATE : CRITICIZE ::",
        options: [
            'Praise : Laud',
            'Rant : Argue',
            'Denounce : Attack',
            'Protest : Object'
        ],
        answer: 2,
        explanation: "'Denounce : Attack' pairs an intense verbal expression with its corresponding assertive action."
    },
    {
        q: "HEDONIST : PLEASURE ::",
        options: [
            'Ascetic : Luxury',
            'Stoic : Hardship',
            'Miser : Wealth',
            'Glutton : Abstinence'
        ],
        answer: 2,
        explanation: "'Miser : Wealth' pairs a devoted seeker or hoarder with their core focus."
    },
    {
        q: "ENERVATE : ENERGIZE ::",
        options: [
            'Weaken : Strengthen',
            'Deplete : Restore',
            'Fatigue : Refresh',
            'Debilitate : Invigorate'
        ],
        answer: 3,
        explanation: "'Debilitate : Invigorate' contrasts draining physical vigor with restoring it."
    },
    {
        q: "SOPORIFIC : ALERTNESS ::",
        options: [
            'Stimulant : Energy',
            'Calmative : Anxiety',
            'Narcotic : Pain',
            'Remedy : Disease'
        ],
        answer: 1,
        explanation: "'Calmative : Anxiety' pairs a reducing agent with the specific state it diminishes."
    },
    {
        q: "ICONOCLAST : TRADITION ::",
        options: [
            'Heretic : Dogma',
            'Rebel : Authority',
            'Dissident : Law',
            'Outcast : Society'
        ],
        answer: 0,
        explanation: "'Heretic : Dogma' pairs a challenger of established beliefs with the specific institution or belief system they oppose."
    },
    {
        q: "PRODIGAL : SPEND ::",
        options: [
            'Generous : Give',
            'Greedy : Hoard',
            'Loquacious : Talk',
            'Gluttonous : Eat'
        ],
        answer: 2,
        explanation: "'Loquacious : Talk' pairs an excess-oriented trait with its corresponding verbal or behavioral output."
    },
    {
        q: "TRACTABLE : MANAGE ::",
        options: [
            'Flexible : Bend',
            'Docile : Control',
            'Malleable : Shape',
            'Fragile : Break'
        ],
        answer: 1,
        explanation: "'Docile : Control' pairs a compliant disposition with how easily it responds to guidance."
    },
    {
        q: "GARRULOUS : SILENCE ::",
        options: [
            'Loquacious : Quiet',
            'Verbose : Concise',
            'Pompous : Modesty',
            'Arrogant : Humility'
        ],
        answer: 1,
        explanation: "'Verbose : Concise' pairs an over-communicative trait with its direct polar opposite style."
    },
    {
        q: "EQUANIMITY : CALM ::",
        options: [
            'Fortitude : Courage',
            'Gratitude : Thanks',
            'Altitude : Height',
            'Latitude : Width'
        ],
        answer: 0,
        explanation: "'Fortitude : Courage' pairs an internal psychological virtue directly with its manifestation."
    },
    {
        q: "MENDACIOUS : TRUTH ::",
        options: [
            'Deceptive : Honesty',
            'Fallacious : Logic',
            'Spurious : Fact',
            'Treacherous : Loyalty'
        ],
        answer: 3,
        explanation: "'Treacherous : Loyalty' pairs a negative moral failing with the specific virtue it betrays."
    },
    {
        q: "LUBRICANT : FRICTION ::",
        options: [
            'Catalyst : Speed',
            'Insulator : Heat',
            'Absorbent : Moisture',
            'Brake : Momentum'
        ],
        answer: 1,
        explanation: "'Insulator : Heat' pairs a protective substance with the physical force it blocks or reduces."
    },
    {
        q: "IMPUGN : INTEGRITY ::",
        options: [
            'Attack : Defense',
            'Challenge : Authority',
            'Doubt : Certainty',
            'Dispute : Ownership'
        ],
        answer: 3,
        explanation: "'Dispute : Ownership' pairs a questioning or challenging action with its targeted concept."
    },
    {
        q: "OBSTREPEROUS : RESTRAINT ::",
        options: [
            'Rebellious : Control',
            'Defiant : Rule',
            'Unruly : Discipline',
            'Wild : Tame'
        ],
        answer: 2,
        explanation: "'Unruly : Discipline' pairs a rowdy, resistant nature against structured order."
    },
    {
        q: "DIFFIDENT : CONFIDENCE ::",
        options: [
            'Humble : Pride',
            'Timid : Bravery',
            'Reluctant : Willingness',
            'Cowardly : Fear'
        ],
        answer: 1,
        explanation: "'Timid : Bravery' pairs a hesitant or shy trait with the virtue it lacks."
    },
    {
        q: "PERSPICACIOUS : INSIGHT ::",
        options: [
            'Sagacious : Wisdom',
            'Audacious : Bravery',
            'Voracious : Hunger',
            'Tenacious : Strength'
        ],
        answer: 0,
        explanation: "'Sagacious : Wisdom' pairs a sharp mental characteristic with its ultimate cognitive product."
    },
    {
        q: "SULLEN : CHEERFUL ::",
        options: [
            'Glum : Happy',
            'Morose : Jovial',
            'Dark : Light',
            'Cold : Warm'
        ],
        answer: 1,
        explanation: "'Morose : Jovial' contrasts sullen gloominess with joyful cheer."
    },
    {
        q: "RECALCITRANT : COMPLY ::",
        options: [
            'Stubborn : Yield',
            'Obstinate : Surrender',
            'Rebellious : Obey',
            'Defiant : Submit'
        ],
        answer: 3,
        explanation: "'Defiant : Submit' contrasts uncooperative resistance with giving in."
    },
    {
        q: "INTRANSIGENT : COMPROMISE ::",
        options: [
            'Flexible : Bend',
            'Impenetrable : Pierce',
            'Inflexible : Yield',
            'Rigid : Break'
        ],
        answer: 2,
        explanation: "'Inflexible : Yield' pairs an unyielding stance with the action it refuses to take."
    },
    {
        q: "ALACRITY : SPEED ::",
        options: [
            'Avidity : Eagerness',
            'Audacity : Bravery',
            'Anxiety : Fear',
            'Apathy : Boredom'
        ],
        answer: 0,
        explanation: "'Avidity : Eagerness' pairs prompt enthusiasm with its core motivational driver."
    },
    {
        q: "AMALGAMATE : SEPARATE ::",
        options: [
            'Integrate : Divide',
            'Combine : Isolate',
            'Merge : Split',
            'Fuse : Disjoin'
        ],
        answer: 3,
        explanation: "'Fuse : Disjoin' contrasts uniting elements together with separating them apart."
    },
    {
        q: "HETEROGENEOUS : UNIFORM ::",
        options: [
            'Diverse : Similar',
            'Varied : Identical',
            'Mixed : Pure',
            'Complex : Simple'
        ],
        answer: 1,
        explanation: "'Varied : Identical' contrasts mixed composition with absolute sameness."
    },
    {
        q: "SANGUINE : OPTIMISTIC ::",
        options: [
            'Pessimistic : Gloomy',
            'Despondent : Sad',
            'Confident : Sure',
            'Melancholy : Depressed'
        ],
        answer: 3,
        explanation: "'Melancholy : Depressed' pairs closely related psychological temperament descriptors."
    },
    {
        q: "ENIGMATIC : CLEAR ::",
        options: [
            'Mysterious : Obvious',
            'Cryptic : Plain',
            'Obscure : Manifest',
            'Hidden : Exposed'
        ],
        answer: 2,
        explanation: "'Obscure : Manifest' contrasts hidden complexity with open clarity."
    },
    {
        q: "OSCILLATE : SWING ::",
        options: [
            'Vibrate : Tremble',
            'Rotate : Spin',
            'Fluctuates : Vary',
            'Pendulum : Clock'
        ],
        answer: 1,
        explanation: "'Rotate : Spin' pairs repetitive motion verbs representing circular or back-and-forth movement."
    },
    {
        q: "EXACERBATE : MITIGATE ::",
        options: [
            'Worsen : Improve',
            'Aggravate : Alleviate',
            'Intensify : Reduce',
            'Inflame : Calm'
        ],
        answer: 1,
        explanation: "'Aggravate : Alleviate' contrasts making something worse with soothing or easing it."
    },
    {
        q: "LACERATION : CUT ::",
        options: [
            'Contusion : Bruise',
            'Abrasion : Scrape',
            'Fracture : Break',
            'All of these' // Replace with clean option:
        ],
        // Let's replace the last option cleanly:
        q: "LACERATION : CUT ::",
        options: [
            'Contusion : Bruise',
            'Infection : Fever',
            'Symptom : Disease',
            'Injury : Pain'
        ],
        answer: 0,
        explanation: "'Contusion : Bruise' pairs a medical term for a specific injury directly with its common descriptor."
    },
    {
        q: "TIRADE : ABUSIVE ::",
        options: [
            'Sermon : Inspiring',
            'Lecture : Educational',
            'Praise : Flattering',
            'Critique : Harsh'
        ],
        answer: 1,
        explanation: "'Lecture : Educational' pairs a form of extended speech with its characteristic tone or purpose."
    },
    {
        q: "APATHY : EMOTION ::",
        options: [
            'Ignorance : Knowledge',
            'Silence : Sound',
            'Darkness : Light',
            'Vacuum : Matter'
        ],
        answer: 0,
        explanation: "'Ignorance : Knowledge' pairs complete absence of a mental state or faculty with its presence."
    },
    {
        q: "PARSIMONY : SPENDING ::",
        options: [
            'Temprance : Drinking',
            'Gluttony : Eating',
            'Prudence : Risk',
            'Celibacy : Marriage'
        ],
        answer: 0,
        explanation: "'Temprance : Drinking' pairs restraint or extreme frugality with the domain of activity it restricts."
    },
    {
        q: "VAPID : LIVELY ::",
        options: [
            'Dull : Bright',
            'Insipid : Flavorful',
            'Bland : Spicy',
            'Flat : Sparkling'
        ],
        answer: 1,
        explanation: "'Insipid : Flavorful' contrasts lifeless dullness (vapid/insipid) with vibrant engagement or taste."
    },
    {
        q: "RETIRENT : FORTHRIGHT ::",
        options: [
            'Reserved : Outspoken',
            'Shy : Bold',
            'Quiet : Loud',
            'Hidden : Open'
        ],
        answer: 0,
        explanation: "'Reserved : Outspoken' contrasts quiet, guarded communication with direct, open expression."
    }
];
