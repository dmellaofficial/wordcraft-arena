// ==========================================
// WordCraft & Grammar Arena - Figure of Speech Question Pool
// ==========================================

const figuresOfSpeechQuestions = [
    {
        q: "The pen is mightier than the sword.",
        options: [
            'Metonymy',
            'Synecdoche',
            'Personification',
            'Litotes'
        ],
        answer: 0,
        explanation: "Metonymy substitutes an attribute or associated object ('pen' for written word/journalism, 'sword' for military force)."
    },
    {
        q: "No, I wouldn't call him a bad dancer; he's just not quite a Fred Astaire.",
        options: [
            'Litotes',
            'Hyperbole',
            'Paradox',
            'Irony'
        ],
        answer: 0,
        explanation: "Litotes employs understatement through double negation to convey an affirmative claim."
    },
    {
        q: "All hands on deck to secure the rigging before the storm.",
        options: [
            'Metonymy',
            'Synecdoche',
            'Apostrophe',
            'Oxymoron'
        ],
        answer: 1,
        explanation: "Synecdoche uses a specific part ('hands') to signify the whole entity ('sailors')."
    },
    {
        q: "Parting is such sweet sorrow that I shall say goodnight till morrow.",
        options: [
            'Oxymoron',
            'Paradox',
            'Antithesis',
            'Pun'
        ],
        answer: 0,
        explanation: "Oxymoron places contradictory terms side by side ('sweet sorrow')."
    },
    {
        q: "The silent night crept softly across the bruised and battered battlefield.",
        options: [
            'Personification',
            'Metaphor',
            'Onomatopoeia',
            'Transferred Epithet'
        ],
        answer: 0,
        explanation: "Personification attributes human actions and feelings to inanimate settings."
    },
    {
        q: "Less is more when striving for a minimalist architectural design.",
        options: [
            'Oxymoron',
            'Paradox',
            'Irony',
            'Antithesis'
        ],
        answer: 1,
        explanation: "Paradox presents a statement that appears self-contradictory yet conveys a deeper truth."
    },
    {
        q: "He flashed a weary smile as he dragged his tired feet across the finish line.",
        options: [
            'Transferred Epithet',
            'Synecdoche',
            'Metonymy',
            'Hyperbole'
        ],
        answer: 0,
        explanation: "Transferred Epithet applies an adjective ('weary') to an associated noun ('smile') rather than the person."
    },
    {
        q: "O Death, where is thy sting? O Grave, where is thy victory?",
        options: [
            'Personification',
            'Apostrophe',
            'Hyperbole',
            'Metonymy'
        ],
        answer: 1,
        explanation: "Apostrophe directly addresses an absent person, abstract idea, or inanimate object."
    },
    {
        q: "The crown announced a mandatory adjustment in national tax policies.",
        options: [
            'Synecdoche',
            'Metonymy',
            'Personification',
            'Allegory'
        ],
        answer: 1,
        explanation: "Metonymy uses 'the crown' as a substitute for the sovereign or government."
    },
    {
        q: "The department store welcomed a flood of eager holiday shoppers.",
        options: [
            'Metaphor',
            'Simile',
            'Personification',
            'Hyperbole'
        ],
        answer: 0,
        explanation: "Metaphor draws an implicit comparison between a massive crowd and a destructive flood."
    },
    {
        q: "I wandered lonely as a cloud that floats on high o'er vales and hills.",
        options: [
            'Metaphor',
            'Simile',
            'Personification',
            'Synecdoche'
        ],
        answer: 1,
        explanation: "Simile explicitly compares two things using 'as' ('lonely as a cloud')."
    },
    {
        q: "The buzzing bee zipped across the vibrant garden.",
        options: [
            'Alliteration',
            'Onomatopoeia',
            'Assonance',
            'Consonance'
        ],
        answer: 1,
        explanation: "Onomatopoeia uses words imitating the sound associated with what they name ('buzzing')."
    },
    {
        q: "Peter Piper picked a peck of pickled peppers.",
        options: [
            'Assonance',
            'Alliteration',
            'Consonance',
            'Onomatopoeia'
        ],
        answer: 1,
        explanation: "Alliteration repeats the same initial consonant sound across nearby words."
    },
    {
        q: "He is a real Einstein when it comes to solving differential equations.",
        options: [
            'Allusion',
            'Metaphor',
            'Simile',
            'Synecdoche'
        ],
        answer: 0,
        explanation: "Allusion makes an indirect reference to a famous historical or cultural figure."
    },
    {
        q: "She shed a river of tears when she heard the tragic news.",
        options: [
            'Hyperbole',
            'Understatement',
            'Personification',
            'Irony'
        ],
        answer: 0,
        explanation: "Hyperbole employs extreme exaggeration for rhetorical emphasis."
    },
    {
        q: "The fire station burned down completely while the crew was out on inspection.",
        options: [
            'Situational Irony',
            'Verbal Irony',
            'Dramatic Irony',
            'Paradox'
        ],
        answer: 0,
        explanation: "Situational Irony occurs when outcomes directly contradict expectations."
    },
    {
        q: "Man proposes, God disposes.",
        options: [
            'Antithesis',
            'Paradox',
            'Oxymoron',
            'Chiasmus'
        ],
        answer: 0,
        explanation: "Antithesis places contrasting ideas in balanced parallelism."
    },
    {
        q: "Lend me your ears for a moment of critical project briefing.",
        options: [
            'Synecdoche',
            'Metonymy',
            'Personification',
            'Hyperbole'
        ],
        answer: 0,
        explanation: "Synecdoche uses a specific body part ('ears') to represent whole attention."
    },
    {
        q: "The morning dew wept softly on the emerald blades of grass.",
        options: [
            'Personification',
            'Metaphor',
            'Simile',
            'Transferred Epithet'
        ],
        answer: 0,
        explanation: "Personification attributes human weeping behavior to morning dew."
    },
    {
        q: "He drove his car to the drive-in to drive away his dreary blues.",
        options: [
            'Pun',
            'Alliteration',
            'Onomatopoeia',
            'Assonance'
        ],
        answer: 0,
        explanation: "Pun exploits multiple meanings or homophones of the word 'drive' for playfulness."
    },
    {
        q: "We must master the spoken word before we write it down.",
        options: [
            'Metonymy',
            'Synecdoche',
            'Oxymoron',
            'Litotes'
        ],
        answer: 1,
        explanation: "Synecdoche uses a specific term ('spoken word') to denote speech or language as a whole."
    },
    {
        q: "The old car coughed, wheezed, and sputtered before finally stopping.",
        options: [
            'Personification',
            'Metaphor',
            'Simile',
            'Hyperbole'
        ],
        answer: 0,
        explanation: "Personification assigns biological respiratory actions to a machine."
    },
    {
        q: "It is not the worst weather today; a Category 5 hurricane is tearing our roof off.",
        options: [
            'Litotes',
            'Understatement',
            'Irony',
            'Hyperbole'
        ],
        answer: 1,
        explanation: "Understatement minimizes catastrophic reality for ironic impact."
    },
    {
        q: "The diplomatic talks resulted in an open secret among the delegates.",
        options: [
            'Oxymoron',
            'Paradox',
            'Antithesis',
            'Irony'
        ],
        answer: 0,
        explanation: "Oxymoron pairs contradictory notions ('open secret')."
    },
    {
        q: "She was drowning in a sea of paperwork before the audit.",
        options: [
            'Metaphor',
            'Simile',
            'Hyperbole',
            'Personification'
        ],
        answer: 0,
        explanation: "Metaphor draws an implicit comparison between overwhelming administrative tasks and an ocean."
    },
    {
        q: "The factory wheels turned in rhythm with the heartbeat of the city.",
        options: [
            'Metaphor',
            'Personification',
            'Synecdoche',
            'Metonymy'
        ],
        answer: 0,
        explanation: "Metaphor equates urban energy to a biological heartbeat."
    },
    {
        q: "Opportunity knocks on the door only once in a lifetime.",
        options: [
            'Personification',
            'Apostrophe',
            'Metaphor',
            'Simile'
        ],
        answer: 0,
        explanation: "Personification portrays opportunity as an active agent knocking on doors."
    },
    {
        q: "He is a wolf in sheep's clothing within the corporate boardroom.",
        options: [
            'Metaphor',
            'Simile',
            'Allusion',
            'Synecdoche'
        ],
        answer: 0,
        explanation: "Metaphor equates a deceptive individual directly to a predator in disguise."
    },
    {
        q: "The thunder grumbled angrily across the dark mountain ridge.",
        options: [
            'Personification',
            'Onomatopoeia',
            'Alliteration',
            'Transferred Epithet'
        ],
        answer: 0,
        explanation: "Personification gives meteorological storms human anger."
    },
    {
        q: "To err is human; to forgive, divine.",
        options: [
            'Antithesis',
            'Paradox',
            'Oxymoron',
            'Chiasmus'
        ],
        answer: 0,
        explanation: "Antithesis places contrasting ideas in balanced parallelism."
    },
    {
        q: "She wears an ocean of perfume whenever she attends evening galas.",
        options: [
            'Hyperbole',
            'Metaphor',
            'Synecdoche',
            'Metonymy'
        ],
        answer: 0,
        explanation: "Hyperbole employs extreme exaggeration for rhetorical emphasis."
    },
    {
        q: "The ship ploughs the restless sea under a canopy of twinkling stars.",
        options: [
            'Metaphor',
            'Personification',
            'Synecdoche',
            'Metonymy'
        ],
        answer: 0,
        explanation: "Metaphor compares maritime travel to agricultural tilling ('ploughs')."
    },
    {
        q: "Wisdom cries aloud in the streets; in the markets she raises her voice.",
        options: [
            'Personification',
            'Apostrophe',
            'Metaphor',
            'Allusion'
        ],
        answer: 0,
        explanation: "Personification treats an abstract concept ('Wisdom') as a speaking person."
    },
    {
        q: "His explanation was as clear as mud during the technical briefing.",
        options: [
            'Irony',
            'Simile',
            'Metaphor',
            'Hyperbole'
        ],
        answer: 0,
        explanation: "Irony utilizes comparison to state the exact opposite of intended meaning."
    },
    {
        q: "The weary road wound endlessly up the steep, unyielding mountain slope.",
        options: [
            'Transferred Epithet',
            'Personification',
            'Metaphor',
            'Synecdoche'
        ],
        answer: 0,
        explanation: "Transferred Epithet attributes 'weary' (traveler's fatigue) to the road."
    },
    {
        q: "He lost his job, house, and car in one week; talk about a lucky break.",
        options: [
            'Irony',
            'Litotes',
            'Paradox',
            'Hyperbole'
        ],
        answer: 0,
        explanation: "Irony labels a devastating financial disaster as a 'lucky break'."
    },
    {
        q: "The busy factory floor hummed a mechanical tune of high productivity.",
        options: [
            'Personification',
            'Metaphor',
            'Onomatopoeia',
            'Transferred Epithet'
        ],
        answer: 0,
        explanation: "Personification attributes musical performance to factory floors."
    },
    {
        q: "She has a heart of stone when negotiating departmental budgets.",
        options: [
            'Metaphor',
            'Simile',
            'Hyperbole',
            'Synecdoche'
        ],
        answer: 0,
        explanation: "Metaphor compares emotional coldness directly to unyielding stone."
    },
    {
        q: "The autumn leaves danced across the pavement in the brisk wind.",
        options: [
            'Personification',
            'Metaphor',
            'Simile',
            'Alliteration'
        ],
        answer: 0,
        explanation: "Personification gives falling leaves human dance movements."
    },
    {
        q: "Success is counted sweetest by those who ne'er succeed.",
        options: [
            'Paradox',
            'Oxymoron',
            'Antithesis',
            'Irony'
        ],
        answer: 0,
        explanation: "Paradox conveys a counterintuitive truth about desire and appreciation."
    },
    {
        q: "The committee gave the proposal the green light after months of study.",
        options: [
            'Metonymy',
            'Synecdoche',
            'Metaphor',
            'Idiom'
        ],
        answer: 0,
        explanation: "Metonymy uses an associated visual signal (green light) for official approval."
    },
    {
        q: "He is a pillar of strength for his family during adversity.",
        options: [
            'Metaphor',
            'Simile',
            'Personification',
            'Synecdoche'
        ],
        answer: 0,
        explanation: "Metaphor compares human resilience to an architectural support pillar."
    },
    {
        q: "The city never sleeps; its neon veins pulse with nocturnal energy.",
        options: [
            'Personification',
            'Metaphor',
            'Hyperbole',
            'Alliteration'
        ],
        answer: 0,
        explanation: "Personification portrays an urban center as a living, sleepless creature."
    },
    {
        q: "Her voice was music to his ears after a long workday.",
        options: [
            'Metaphor',
            'Simile',
            'Hyperbole',
            'Synecdoche'
        ],
        answer: 0,
        explanation: "Metaphor equates comforting vocal tones directly to musical compositions."
    },
    {
        q: "The watchful stars kept vigil over the sleeping coastal village.",
        options: [
            'Personification',
            'Apostrophe',
            'Metaphor',
            'Synecdoche'
        ],
        answer: 0,
        explanation: "Personification assigns human sentry duties to celestial bodies."
    },
    {
        q: "He fought a valiant battle against the mountain of paperwork.",
        options: [
            'Metaphor',
            'Hyperbole',
            'Personification',
            'Simile'
        ],
        answer: 0,
        explanation: "Metaphor compares administrative burdens to physical peaks."
    },
    {
        q: "The wind whispered secrets through the cracks of the cabin.",
        options: [
            'Personification',
            'Onomatopoeia',
            'Alliteration',
            'Transferred Epithet'
        ],
        answer: 0,
        explanation: "Personification grants wind human whispering capabilities."
    },
    {
        q: "Time flies like an arrow, but fruit flies like a banana.",
        options: [
            'Pun',
            'Oxymoron',
            'Paradox',
            'Antithesis'
        ],
        answer: 0,
        explanation: "Pun plays on grammatical homophony and lexical ambiguity ('flies like')."
    },
    {
        q: "The courtroom was as silent as a tomb during the verdict.",
        options: [
            'Simile',
            'Metaphor',
            'Hyperbole',
            'Personification'
        ],
        answer: 0,
        explanation: "Simile explicitly compares silence to a tomb using 'as'."
    },
    {
        q: "He grabbed his wheels and drove down to the center.",
        options: [
            'Synecdoche',
            'Metonymy',
            'Personification',
            'Hyperbole'
        ],
        answer: 0,
        explanation: "Synecdoche uses a component ('wheels') for the complete vehicle."
    },
    {
        q: "The dark clouds brewed a storm of epic proportions over the valley.",
        options: [
            'Metaphor',
            'Personification',
            'Hyperbole',
            'Simile'
        ],
        answer: 0,
        explanation: "Metaphor equates meteorological cloud formation to culinary brewing."
    },
    {
        q: "She lived a life of quiet desperation behind closed doors.",
        options: [
            'Oxymoron',
            'Paradox',
            'Irony',
            'Antithesis'
        ],
        answer: 1,
        explanation: "Paradox captures a complex, seemingly contradictory psychological reality."
    },
    {
        q: "The cruel sea swallowed the fragile wooden vessel whole.",
        options: [
            'Personification',
            'Metaphor',
            'Hyperbole',
            'Synecdoche'
        ],
        answer: 0,
        explanation: "Personification attributes malice and swallowing to the ocean."
    },
    {
        q: "He is a shining star in the department of scientific research.",
        options: [
            'Metaphor',
            'Simile',
            'Allusion',
            'Hyperbole'
        ],
        answer: 0,
        explanation: "Metaphor compares a top researcher directly to a celestial star."
    },
    {
        q: "The tragic news hit him like a ton of bricks.",
        options: [
            'Simile',
            'Metaphor',
            'Hyperbole',
            'Personification'
        ],
        answer: 0,
        explanation: "Simile compares emotional shock to physical weight using 'like'."
    },
    {
        q: "The white flag of surrender was raised across the frontier.",
        options: [
            'Metonymy',
            'Synecdoche',
            'Metaphor',
            'Symbolism'
        ],
        answer: 0,
        explanation: "Metonymy uses a physical banner to represent diplomatic capitulation."
    },
    {
        q: "Her smile was as cold as ice when she greeted her rival.",
        options: [
            'Simile',
            'Metaphor',
            'Irony',
            'Oxymoron'
        ],
        answer: 0,
        explanation: "Simile compares facial expression temperature to ice using 'as'."
    },
    {
        q: "The thirsty earth drank deeply from the heavy monsoon rainfall.",
        options: [
            'Personification',
            'Metaphor',
            'Onomatopoeia',
            'Synecdoche'
        ],
        answer: 0,
        explanation: "Personification endows the ground with biological thirst and drinking."
    },
    {
        q: "He has a mountain of debt hanging over his financial future.",
        options: [
            'Metaphor',
            'Hyperbole',
            'Simile',
            'Personification'
        ],
        answer: 0,
        explanation: "Metaphor compares financial liabilities to towering peaks."
    },
    {
        q: "The opportunity was a golden key that unlocked a prosperous career.",
        options: [
            'Metaphor',
            'Simile',
            'Personification',
            'Synecdoche'
        ],
        answer: 0,
        explanation: "Metaphor compares career advancement directly to a physical key."
    }
];
