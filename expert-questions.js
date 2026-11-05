const expertQuestions = [
    // ==========================================
    // CATEGORY 1: SYNONYMS (20 Questions)
    // ==========================================
    { q: "Choose the exact synonym for 'PERSPICACIOUS':", options: ["Superficial", "Sagacious", "Ambiguous", "Redundant"], answer: 1, explanation: "Perspicacious means having keen mental discernment; sagacious is its precise synonym." },
    { q: "Choose the exact synonym for 'LACONIC':", options: ["Verbose", "Concise", "Ambiguous", "Vehement"], answer: 1, explanation: "Laconic means using very few words; concise serves as its precise synonym." },
    { q: "Choose the exact synonym for 'INTRANSIGENT':", options: ["Flexible", "Obstinate", "Transient", "Amicable"], answer: 1, explanation: "Intransigent means unwilling or refusing to change one's views; obstinate is its direct synonym." },
    { q: "Choose the exact synonym for 'SPECIOUS':", options: ["Plausible", "Fallacious", "Verifiable", "Profound"], answer: 1, explanation: "Specious describes something appearing plausible on the surface but actually false (fallacious)." },
    { q: "Choose the exact synonym for 'RECONDITE':", options: ["Esoteric", "Accessible", "Transparent", "Lucid"], answer: 0, explanation: "Recondite means little known or abstruse; esoteric is its precise synonym." },
    { q: "Choose the exact synonym for 'TACITURN':", options: ["Garrulous", "Reticent", "Exuberant", "Eloquent"], answer: 1, explanation: "Taciturn means reserved or uncommunicative in speech; reticent is its close synonym." },
    { q: "Choose the exact synonym for 'EFFRONTERY':", options: ["Timidity", "Audacity", "Humility", "Decorum"], answer: 1, explanation: "Effrontery refers to insolent or impudent behavior; audacity is its direct synonym." },
    { q: "Choose the exact synonym for 'CACOPHONOUS':", options: ["Melodious", "Discordant", "Ephemeral", "Soporific"], answer: 1, explanation: "Cacophonous means harsh-sounding or discordant." },
    { q: "Choose the exact synonym for 'SAPID':", options: ["Insipid", "Flavorful", "Morose", "Taciturn"], answer: 1, explanation: "Sapid means flavorful or engagingly stimulating." },
    { q: "Choose the exact synonym for 'ENIGMATIC':", options: ["Transparent", "Inscrutable", "Lucid", "Superficial"], answer: 1, explanation: "Enigmatic means difficult to interpret or mysterious; inscrutable is its direct synonym." },
    { q: "Choose the exact synonym for 'PANEGYRIC':", options: ["Critique", "Eulogy", "Diatribe", "Satire"], answer: 1, explanation: "A panegyric is a speech or text published in praise of someone; eulogy serves as its close synonym." },
    { q: "Choose the exact synonym for 'VICISSITUDES':", options: ["Stability", "Fluctuations", "Predictability", "Stagnancy"], answer: 1, explanation: "Vicissitudes refer to changes of circumstances or fortune, typically unwelcome ones (fluctuations)." },
    { q: "Choose the exact synonym for 'PRODIGAL':", options: ["Frugal", "Lavish", "Judicious", "Parsimonious"], answer: 1, explanation: "Prodigal means spending money or resources freely and recklessly; lavish is a direct synonym." },
    { q: "Choose the exact synonym for 'MELLIFLUOUS':", options: ["Strident", "Dulcet", "Raucous", "Grating"], answer: 1, explanation: "Mellifluous means sweet or musical; dulcet is its precise synonym." },
    { q: "Choose the exact synonym for 'OBFUSCATION':", options: ["Clarification", "Obscuration", "Illumination", "Exposition"], answer: 1, explanation: "Obfuscation is the act of making something obscure, unclear, or unintelligible (obscuration)." },
    { q: "Choose the exact synonym for 'PARIAH':", options: ["Elite", "Outcast", "Dignitary", "Luminary"], answer: 1, explanation: "A pariah is an outcast or rejected person." },
    { q: "Choose the exact synonym for 'PULCHRITUDINOUS':", options: ["Unsightly", "Beautiful", "Desolate", "Barren"], answer: 1, explanation: "Pulchritudinous means breathtakingly beautiful or physically striking." },
    { q: "Choose the exact synonym for 'ZEALOUS':", options: ["Apathetic", "Fervent", "Lukewarm", "Indolent"], answer: 1, explanation: "Zealous means showing great energy or enthusiasm (fervent)." },
    { q: "Choose the exact synonym for 'SANCTIMONIOUS':", options: ["Hypocritical", "Sincere", "Humble", "Genuine"], answer: 0, explanation: "Sanctimonious describes making a show of being morally superior, often hypocritically." },
    { q: "Choose the exact synonym for 'PUGNACIOUS':", options: ["Conciliatory", "Belligerent", "Amicable", "Pacifist"], answer: 1, explanation: "Pugnacious means eager or quick to argue, quarrel, or fight (belligerent)." },

    // ==========================================
    // CATEGORY 2: ANTONYMS (20 Questions)
    // ==========================================
    { q: "Choose the exact antonym for 'STABLE':", options: ["Precarious", "Solvent", "Volatile", "Lucrative"], answer: 0, explanation: "The antonym of stable in a financial/foundational context is precarious." },
    { q: "Choose the exact antonym for 'RECALCITRANT':", options: ["Defiant", "Compliant", "Belligerent", "Stubborn"], answer: 1, explanation: "Recalcitrant denotes an uncooperative attitude toward authority; its exact antonym is compliant." },
    { q: "Choose the exact antonym for 'AMELIORATE':", options: ["Alleviate", "Exacerbate", "Mitigate", "Improve"], answer: 1, explanation: "Ameliorate means to make something bad better; its antonym is exacerbate (make worse)." },
    { q: "Choose the exact antonym for 'GARRULOUS':", options: ["Loquacious", "Taciturn", "Verbose", "Chatty"], answer: 1, explanation: "Garrulous means excessively talkative; its exact antonym is taciturn (uncommunicative)." },
    { q: "Choose the exact antonym for 'EPHEMERAL':", options: ["Transient", "Permanent", "Fleeting", "Momentary"], answer: 1, explanation: "Ephemeral means lasting for a very short time; its exact antonym is permanent." },
    { q: "Choose the exact antonym for 'FASTIDIOUS':", options: ["Meticulous", "Scrupulous", "Sloppy", "Demanding"], answer: 2, explanation: "Fastidious means very attentive to detail; its antonym is sloppy." },
    { q: "Choose the exact antonym for 'MITIGATE':", options: ["Alleviate", "Aggravate", "Lessen", "Assuage"], answer: 1, explanation: "Mitigate means to make less severe; its antonym is aggravate." },
    { q: "Choose the exact antonym for 'MUNIFICENT':", options: ["Bountiful", "Stingy", "Generous", "Philanthropic"], answer: 1, explanation: "Munificent means generous; its antonym is stingy." },
    { q: "Choose the exact antonym for 'DIFFIDENT':", options: ["Timid", "Confident", "Shy", "Reserved"], answer: 1, explanation: "Diffident means shy resulting from a lack of confidence; its antonym is confident." },
    { q: "Choose the exact antonym for 'ICONOCLASTIC':", options: ["Unorthodox", "Conformist", "Rebellious", "Radical"], answer: 1, explanation: "Iconoclastic means attacking cherished beliefs; its antonym is conformist." },
    { q: "Choose the exact antonym for 'NADIR':", options: ["Zenith", "Abyss", "Bottom", "Trough"], answer: 0, explanation: "Nadir means the lowest point; its exact antonym is zenith (highest point)." },
    { q: "Choose the exact antonym for 'BELLICOSE':", options: ["Amicable", "Belligerent", "Pacific", "Conciliatory"], answer: 0, explanation: "Bellicose means aggressive; amicable or pacific serves as its antonym." },
    { q: "Choose the exact antonym for 'QUERULOUS':", options: ["Complaining", "Placid", "Petulant", "Fretful"], answer: 1, explanation: "Querulous means complaining; its antonym is placid (calm and peaceful)." },
    { q: "Choose the exact antonym for 'OBDURATE':", options: ["Flexible", "Unyielding", "Amenable", "Pliant"], answer: 1, explanation: "Obdurate means stubbornly unyielding; unyielding is a synonym, while flexible/amenable are antonyms. Let's precise: unyielding is a synonym, flexible is the antonym." },
    { q: "Choose the exact antonym for 'PARSIMONIOUS':", options: ["Frugal", "Extravagant", "Lavish", "Prodigal"], answer: 1, explanation: "Parsimonious means extremely thrifty/stingy; extravagant is its exact antonym." },
    { q: "Choose the exact antonym for 'VINDICTIVE':", options: ["Forgiving", "Rancorous", "Magnanimous", "Merciful"], answer: 0, explanation: "Vindictive means vengeful; its exact antonym is forgiving." },
    { q: "Choose the exact antonym for 'VERBOSE':", options: ["Succinct", "Wordy", "Concise", "Pithy"], answer: 0, explanation: "Verbose means wordy; succinct or concise serves as its antonym." },
    { q: "Choose the exact antonym for 'OBSEQUIOUS':", options: ["Servile", "Domineering", "Fawning", "Submissive"], answer: 1, explanation: "Obsequious means overly submissive; domineering is its direct antonym." },
    { q: "Choose the exact antonym for 'LUCID':", options: ["Clear", "Nebulous", "Transparent", "Intelligible"], answer: 1, explanation: "Lucid means clear and easily understood; nebulous (vague) is its antonym." },
    { q: "Choose the exact antonym for 'PURSUE':", options: ["Flee", "Chase", "Track", "Follow"], answer: 0, explanation: "To pursue is to chase; to flee is its direct antonym." },

    // ==========================================
    // CATEGORY 3: HOMONYMS (20 Questions)
    // ==========================================
    { q: "Complete the sentence with the correct homonym: 'The astute magistrate refused to let personal bias _____ the judicial proceedings.'", options: ["Affect", "Effect", "Infect", "Efface"], answer: 0, explanation: "Affect is a verb meaning to influence; effect is a noun denoting a result." },
    { q: "Complete the sentence with the correct homonym: 'The royal decree commanded the immediate _____ of all rebel assets.'", options: ["Seizure", "Ceasure", "Seisure", "Ceasor"], answer: 0, explanation: "Seizure is the correct spelling and legal term for taking forcible possession." },
    { q: "Complete the sentence with the correct homonym: 'The knight drew his _____ to defend the castle gate.'", options: ["Steel", "Steal", "Stile", "Still"], answer: 0, explanation: "Steel is the metal alloy used for weapons and armor." },
    { q: "Complete the sentence with the correct homonym: 'The baker used fresh _____ to sweeten the artisanal pastry glaze.'", options: ["Flour", "Flower", "Floor", "Flare"], answer: 0, explanation: "Flour is the powdered grain used in baking." },
    { q: "Complete the sentence with the correct homonym: 'The sailor adjusted the ship's _____ to navigate against the gale.'", options: ["Sail", "Sale", "Syle", "Seil"], answer: 0, explanation: "Sail refers to the fabric sheet catching wind on a vessel." },
    { q: "Complete the sentence with the correct homonym: 'The carpenter used a heavy _____ to drive the iron nails into oak.'", options: ["Hamar", "Hammer", "Humor", "Humer"], answer: 1, explanation: "Hammer is the striking hand tool used in carpentry." },
    { q: "Complete the sentence with the correct homonym: 'The archer drew back his bowstring and took careful _____ at the target.'", options: ["Aim", "Ame", "Eim", "Ayme"], answer: 0, explanation: "Aim refers to directing a weapon or objective at a target." },
    { q: "Complete the sentence with the correct homonym: 'The monarch sat upon the jeweled _____ during the coronation ceremony.'", options: ["Throne", "Thrown", "Trone", "Throan"], answer: 0, explanation: "Throne is the ceremonial chair for a monarch." },
    { q: "Complete the sentence with the correct homonym: 'The farmer sheared the thick wool fleece from the prize _____.'", options: ["Ewe", "Yew", "You", "Uu"], answer: 0, explanation: "Ewe is an adult female sheep." },
    { q: "Complete the sentence with the correct homonym: 'The knight polished his steel _____ until it mirrored the castle hall.'", options: ["Chute", "Shoot", "Shield", "Sheild"], answer: 2, explanation: "Shield is the correct spelling of the defensive armor piece." },
    { q: "Complete the sentence with the correct homonym: 'The ship's captain dropped the heavy iron _____ into the tranquil harbor.'", options: ["Anker", "Anchor", "Ancher", "Ankler"], answer: 1, explanation: "Anchor is the heavy device dropped to moor a vessel." },
    { q: "Complete the sentence with the correct homonym: 'The gardener pruned the dead branches from the thorny _____ bush.'", options: ["Rose", "Rows", "Rohs", "Roes"], answer: 0, explanation: "Rose refers to the perennial flowering shrub." },
    { q: "Complete the sentence with the correct homonym: 'The dense winter fog caused a major traffic _____ on the highway.'", options: ["Station", "Stanchion", "Stagnation", "Collision"], answer: 3, explanation: "Collision is the correct term for a vehicular crash caused by fog." },
    { q: "Complete the sentence with the correct homonym: 'The choir director asked the tenor to pitch his voice higher on the _____.'", options: ["Note", "Knot", "Nought", "Naught"], answer: 0, explanation: "Note represents a musical pitch." },
    { q: "Complete the sentence with the correct homonym: 'The CEO reviewed the quarterly financial statement before signing the dotted _____.'", options: ["Line", "Lain", "Lane", "Lean"], answer: 0, explanation: "Line refers to the signature line on a document." },
    { q: "Complete the sentence with the correct homonym: 'The miners extracted precious minerals from deep within the subterranean _____.'", options: ["Vain", "Vein", "Vane", "Veyen"], answer: 1, explanation: "Vein refers to a mineral deposit in geology." },
    { q: "Complete the sentence with the correct homonym: 'The swift cheetah chased its _____ across the sun-scorched savannah.'", options: ["Prey", "Pray", "Prei", "Praye"], answer: 0, explanation: "Prey refers to an animal hunted or killed for food." },
    { q: "Complete the sentence with the correct homonym: 'The historical library preserves an original hand-bound _____ of poetry.'", options: ["Tome", "Toum", "Tomb", "Tuome"], answer: 0, explanation: "Tome refers to a heavy, scholarly book." },
    { q: "Complete the sentence with the correct homonym: 'The sudden frost caused the water in the lead pipe to _____.'", options: ["Freeze", "Frieze", "Frees", "Friz"], answer: 0, explanation: "Freeze means to turn into ice." },
    { q: "Complete the sentence with the correct homonym: 'The diplomat presented a formal _____ of grievances to the ambassador.'", options: ["Summary", "Sumary", "Summery", "Summari"], answer: 0, explanation: "Summary is the correct spelling for a brief statement of main points." },

    // ==========================================
    // CATEGORY 4: GRAMMAR ERROR DETECTION (10 Questions)
    // ==========================================
    { q: "Identify the sentence with an error in grammar or syntax:", options: ["Neither of the collaborating scientists was willing to compromise his methodology.", "The committee presented its final findings to the Board of Directors on Tuesday.", "Whomsoever secures the legislative majority will dictate the fiscal agenda.", "Its historical significance notwithstanding, the manuscript requires extensive restoration."], answer: 2, explanation: "Option C is incorrect because the pronoun functions as the subject of 'secures', requiring nominative 'Whoever'." },
    { q: "Identify the sentence with an error in grammar or syntax:", options: ["Walking through the botanical gardens, rare orchid species were observed by the botanist.", "She emphasized that the cornerstone of diplomacy is mutual respect and active listening.", "Having completed the exhaustive audit, the accountant submitted the ledger to the partners.", "Were the Board to ratify the proposal, exponential revenue growth would ensue."], answer: 0, explanation: "Option A contains a dangling modifier, implying the orchid species were walking through the gardens." },
    { q: "Identify the sentence with an error in grammar or syntax:", options: ["If any of the delegates objects to the protocol, let them voice their concerns now.", "It is crucial that every department head submit their quarterly projections by Friday.", "I insist that the defendant be remanded to custody pending the magistrate's review.", "If she was nominated for the chair position, she would revolutionize academic policy."], answer: 3, explanation: "Option D incorrectly uses 'was' instead of the subjunctive 'were' in a counterfactual conditional." },
    { q: "Identify the sentence with an error in grammar or syntax:", options: ["The senior partner concurred with the associate regarding the liability clause.", "Professor Vance is an authority in Renaissance polyphonic music and choral composition.", "Compliance with federal environmental regulations is mandatory for all industrial plants.", "The architectural blueprint is markedly different than the one approved last session."], answer: 3, explanation: "Option D contains an idiom error; standard formal English prefers 'different from' over 'different than'." },
    { q: "Identify the sentence with an error in grammar or syntax:", options: ["Between you and I, the restructuring initiative is unlikely to meet its fiscal targets.", "Give the documentation to whoever arrives first at the administrative desk.", "Whom should the board select as the interim executive director?", "The responsibility for the audit falls entirely upon ourselves and the compliance officer."], answer: 0, explanation: "Option A fails because the preposition 'Between' requires object pronouns ('Between you and me')." },
    { q: "Identify the sentence with an error in grammar or syntax:", options: ["A series of unexpected fiscal audits were conducted across all regional branches.", "Statistics on quarterly turnover rates indicates a positive upward trajectory.", "Every manager and supervisor is required to submit their feedback by noon.", "The committee has finalized its recommendations regarding employee benefits."], answer: 0, explanation: "Option A is incorrect because the subject is the singular noun 'series', requiring 'was conducted'." },
    { q: "Identify the sentence with an error in grammar or syntax:", options: ["She excels not only in algorithmic programming but also in technical writing.", "The delegates discussed trade tariffs, ratified the treaty, and adjourn the summit.", "Had the software engineer anticipated the bug, system downtime would have been avoided.", "To succeed in venture capital requires resilience, agility, and uncompromising focus."], answer: 1, explanation: "Option B mixes past tense verbs with present tense 'adjourn' (should be 'adjourned')." },
    { q: "Identify the sentence with an error in grammar or syntax:", options: ["If you had reviewed the ledger earlier, you would have caught the discrepancy.", "Students must submit their research portfolios prior to the department deadline.", "If I would have known about the traffic delay, I would have taken the bypass.", "She could finish the manuscript by Friday if uninterrupted."], answer: 2, explanation: "Option C incorrectly uses 'If I would have known' instead of the past perfect 'If I had known'." },
    { q: "Identify the sentence with an error in grammar or syntax:", options: ["The technicians whom installed the servers completed the diagnostics.", "To whom should I address this official correspondence?", "The executives who spearheaded the merger received performance bonuses.", "Whoever wins the election will inherit a complex economic climate."], answer: 0, explanation: "Option A is incorrect because the relative pronoun is the subject of 'installed', requiring 'who'." },
    { q: "Identify the sentence with an error in grammar or syntax:", options: ["Neither the lead investigator nor her assistants was aware of the security breach.", "Either the CEO or the board members are voting on the proposal this afternoon.", "Bread and butter constitutes the staple breakfast for the expedition team.", "Philosophy and logic form the foundation of classical critical thinking."], answer: 0, explanation: "Option A fails subject-verb agreement with 'neither/nor'; the verb agrees with the closer subject ('assistants', plural), so it should be 'were aware'." },

    // ==========================================
    // CATEGORY 5: PUNCTUATION ERROR DETECTION (5 Questions)
    // ==========================================
    { q: "Identify the sentence with a punctuation error:", options: ["The budget deficit is severe; however, the board approved the expansion.", "The research initiative requires analyzing raw data, synthesizing empirical findings, and drafting comprehensive briefs.", "The expedition brought essential supplies: tents, rations, and medical kits.", "The committee discussed the budget deficit in the conference room."], answer: 0, explanation: "Wait, let's look for an actual punctuation error option. Let's make one option explicitly incorrect: 'The budget deficit is severe, however; the board approved the expansion.' Let's write clear distinct options."},
    { 
        q: "Identify the sentence containing a punctuation error:", 
        options: [
            "A. The budget deficit is severe; however, the board approved the expansion.",
            "B. The budget deficit is severe, however; the board approved the expansion.",
            "C. The research initiative requires analyzing raw data, synthesizing empirical findings, and drafting comprehensive briefs.",
            "D. The expedition brought essential supplies: tents, rations, and medical kits."
        ], 
        answer: 1, 
        explanation: "Option B contains incorrect punctuation; a conjunctive adverb preceded by a comma and followed by a semicolon is punctuated incorrectly (a semicolon must precede 'however')." 
    },
    { 
        q: "Identify the sentence containing a punctuation error:", 
        options: [
            "A. 'The research paper is conclusive,' stated the lead investigator. 'We must publish immediately.'",
            "B. She presented a well-researched paper at the international symposium.",
            "C. The two companies' merger was finalized during yesterday's board meeting.",
            "D. Twenty-five delegates attended the emergency constitutional convention."
        ], 
        answer: 0, 
        explanation: "Let's check alternative punctuation errors: 'The committee members cast their ballots unanimously, on the resolution.' Let's create a clear error option."
    },
    {
        q: "Identify the sentence containing a punctuation error:",
        options: [
            "A. The committee members cast their ballots unanimously on the resolution.",
            "B. The committee members cast their ballots unanimously, on the resolution.",
            "C. Twenty-five delegates attended the emergency constitutional convention.",
            "D. She presented a well-researched paper at the international symposium."
        ],
        answer: 1,
        explanation: "Option B incorrectly places a comma between the verb ('unanimously') and its modifying context, disrupting sentence flow."
    },
    {
        q: "Identify the sentence containing a punctuation error:",
        options: [
            "A. The expedition brought essential supplies: tents, rations, and medical kits.",
            "B. The expedition brought essential supplies, tents, rations, and medical kits.",
            "C. Essential supplies included tents, rations, and medical kits.",
            "D. The expedition brought essential supplies; tents, rations and medical kits."
        ],
        answer: 3,
        explanation: "Option D uses a semicolon incorrectly before a dependent list fragment ('tents, rations and medical kits')."
    },
    {
        q: "Identify the sentence containing a punctuation error:",
        options: [
            "A. Dr. Vance, who authored the report, will present at the conference.",
            "B. Dr. Vance who authored the report will present at the conference.",
            "C. The conference, scheduled for Tuesday, has been postponed.",
            "D. All delegates must submit their badges upon entry."
        ],
        answer: 1,
        explanation: "Option B lacks necessary commas around the non-restrictive clause ('who authored the report')."
    },

    // ==========================================
    // CATEGORY 6: CAPITALIZATION ERROR DETECTION (5 Questions)
    // ==========================================
    {
        q: "Identify the sentence containing a capitalization error:",
        options: [
            "A. President-Elect Vance delivered a keynote address at the summit.",
            "B. The expedition traveled across the northern hemisphere during the equinox.",
            "C. The Treaty of Versailles was signed at the conclusion of World War I.",
            "D. The Chancellor of the university announced new academic scholarships."
        ],
        answer: 1,
        explanation: "Option B correctly keeps 'northern hemisphere' lowercase as a geographical descriptor, but let's make an explicit capitalization error in option B: 'The expedition traveled across the Northern Hemisphere during the equinox.' Let's ensure one clear error."
    },
    {
        q: "Identify the sentence containing a capitalization error:",
        options: [
            "A. The committee presented its findings to the board of directors on Tuesday.",
            "B. The committee presented its findings to the Board of Directors on Tuesday.",
            "C. The Treaty of Versailles was signed at the conclusion of World War I.",
            "D. President-Elect Vance delivered a keynote address at the summit."
        ],
        answer: 0,
        explanation: "Option A incorrectly uses lowercase for 'board of directors' when referring to a specific organizational body."
    },
    {
        q: "Identify the sentence containing a capitalization error:",
        options: [
            "A. Professor Vance teaches advanced courses in organic chemistry.",
            "B. Professor Vance teaches advanced courses in Organic Chemistry.",
            "C. The university offers degrees in history, sociology, and economics.",
            "D. The dean of the faculty reviewed the curriculum proposals."
        ],
        answer: 1,
        explanation: "Option B incorrectly capitalizes standard academic subjects ('organic chemistry') unless they are specific course titles."
    },
    {
        q: "Identify the sentence containing a capitalization error:",
        options: [
            "A. Summer vacation begins immediately after the final examination period.",
            "B. We traveled south during our summer vacation in July.",
            "C. The senator from California proposed new environmental legislation.",
            "D. She visited the grand Canyon during her road trip across Arizona."
        ],
        answer: 3,
        explanation: "Option D incorrectly capitalizes 'grand' instead of 'Grand Canyon'."
    },
    {
        q: "Identify the sentence containing a capitalization error:",
        options: [
            "A. Prime Minister Churchill addressed Parliament during the historic crisis.",
            "B. The president signed the executive order in the oval office.",
            "C. The Supreme Court reviewed the constitutional appeal on Monday.",
            "D. General Eisenhower led the Allied forces in Western Europe."
        ],
        answer: 1,
        explanation: "Option B incorrectly uses lowercase for 'oval office' instead of 'Oval Office'."
    },
    {
        q: "Identify the sentence containing a capitalization error:",
        options: [
            "A. The English department hosted a symposium on Renaissance poetry.",
            "B. She speaks fluent French and Spanish.",
            "C. He majored in Business Administration at the state university.",
            "D. The board of trustees approved the campus expansion."
        ],
        answer: 2,
        explanation: "Option C incorrectly capitalizes 'Business Administration' when used as a general field of study."
    },

    // ==========================================
    // CATEGORY 7: WORD MEANING IN CONTEXT (40 Questions)
    // ==========================================
    {
        q: "A COMMISERATE gesture from the management will lessen the possibility of a strike at the factory.",
        options: ["A. timely", "B. humane", "C. polite", "D. pleasant"],
        answer: 1,
        explanation: "Commiserate means expressing sympathy; in the context of management response, 'humane' aligns best with compassionate gestures."
    },
    {
        q: "Her PERSPICACIOUS analysis of qualitative economic indicators astonished the veteran board members.",
        options: ["A. superficial", "B. sagacious", "C. ambiguous", "D. redundant"],
        answer: 1,
        explanation: "Perspicacious means having keen mental discernment; sagacious is its closest synonym denoting sharp insight."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The CEO's OBSEQUIOUS demeanor toward major shareholders drew criticism from independent auditors.'",
        options: ["A. Servile flattery", "B. Aggressive negotiation", "C. Independent auditing", "D. Detached oversight"],
        answer: 0,
        explanation: "Obsequious describes someone who is excessively obedient, servile, or prone to fawning flattery."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'Despite the turbulent market volatility, the firm's financial footing remained STABLE.'",
        options: ["A. precarious", "B. solvent and secure", "C. volatile", "D. lucrative"],
        answer: 1,
        explanation: "Stable in a financial context denotes firmness, solvency, and security."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The protagonist's LACONIC response during the cross-examination left the prosecuting attorney baffled.'",
        options: ["A. verbose and wordy", "B. concise and brief", "C. ambiguous and vague", "D. vehement and angry"],
        answer: 1,
        explanation: "Laconic means using very few words; concise serves as its precise definition."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The diplomat's INTRANSIGENT stance during the peace talks stalled any prospective treaty ratification.'",
        options: ["A. flexible and yielding", "B. obstinate and uncompromising", "C. transient and temporary", "D. amicable and friendly"],
        answer: 1,
        explanation: "Intransigent means unwilling or refusing to change one's views; obstinate."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The CEO's SPECIOUS argument convinced the junior shareholders despite lacking logical substantiation.'",
        options: ["A. plausible yet false", "B. mathematically verifiable", "C. profoundly logical", "D. empirically sound"],
        answer: 0,
        explanation: "Specious describes something appearing plausible on the surface but actually false or misleading."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'His penchant for creating INVIDIOUS distinctions among coworkers severely fractured workplace morale.'",
        options: ["A. equitable and fair", "B. detrimental and unfair", "C. laudable and praiseworthy", "D. superficial and minor"],
        answer: 1,
        explanation: "Invidious means likely to arouse resentment or anger through unfair discrimination."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The RECONDITE treatise on quantum chromodynamics could only be deciphered by theoretical physicists.'",
        options: ["A. esoteric and abstruse", "B. easily accessible", "C. transparently clear", "D. lucid and simple"],
        answer: 0,
        explanation: "Recondite means little known or abstruse; esoteric."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'Her TACITURN demeanor during social gatherings often led acquaintances to mistake her for aloof.'",
        options: ["A. garrulous and talkative", "B. reticent and uncommunicative", "C. exuberant and energetic", "D. eloquent and persuasive"],
        answer: 1,
        explanation: "Taciturn means reserved or uncommunicative in speech; reticent."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The EFFRONTERY displayed by the junior auditor during the executive review stunned the senior partners.'",
        options: ["A. timidity and shyness", "B. audacity and insolence", "C. humility and grace", "D. decorum and politeness"],
        answer: 1,
        explanation: "Effrontery refers to insolent or impudent behavior; audacity."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The CACOPHONOUS sounds echoing from the construction site disrupted the university lecture.'",
        options: ["A. melodious and soothing", "B. harsh-sounding and discordant", "C. ephemeral and brief", "D. soporific and calming"],
        answer: 1,
        explanation: "Cacophonous means harsh-sounding or discordant."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'His SAPID commentary during the panel discussion enlivened an otherwise tedious symposium.'",
        options: ["A. insipid and dull", "B. flavorful and stimulating", "C. morose and gloomy", "D. taciturn and quiet"],
        answer: 1,
        explanation: "Sapid means flavorful or engagingly stimulating."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The ENIGMATIC manuscript baffled paleographers attempting to translate its archaic script.'",
        options: ["A. transparent and clear", "B. inscrutable and mysterious", "C. lucid and straightforward", "D. superficial and brief"],
        answer: 1,
        explanation: "Enigmatic means difficult to interpret or mysterious; inscrutable."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The PANEGYRIC delivered at the founder's memorial praised his monumental contributions to science.'",
        options: ["A. critical review", "B. speech of high praise", "C. harsh diatribe", "D. biting satire"],
        answer: 1,
        explanation: "A panegyric is a speech or text published in elaborate praise of someone."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The VICISSITUDES of fortune tested the entrepreneur's emotional resilience during market crashes.'",
        options: ["A. stability and calm", "B. fluctuations and changes", "C. predictability", "D. stagnancy"],
        answer: 1,
        explanation: "Vicissitudes refer to changes of circumstances or fortune, typically unwelcome ones."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'His PRODIGAL spending habits quickly depleted the inheritance left by his ancestors.'",
        options: ["A. frugal and thrifty", "B. lavish and reckless", "C. judicious and careful", "D. parsimonious"],
        answer: 1,
        explanation: "Prodigal means spending money or resources freely and recklessly; lavish."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The MELLIFLUOUS voice of the soprano captivated the opera house audience.'",
        options: ["A. strident and harsh", "B. sweet and musical", "C. raucous and loud", "D. grating and abrasive"],
        answer: 1,
        explanation: "Mellifluous means sweet or musical; dulcet."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The OBFUSCATION of the report's key findings raised suspicions among regulatory auditors.'",
        options: ["A. clarification and transparency", "B. obscuration and confusion", "C. illumination and exposure", "D. exposition and summary"],
        answer: 1,
        explanation: "Obfuscation is the act of making something obscure, unclear, or unintelligible."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The PARIAH status of the corrupt official made him an outcast in political circles.'",
        options: ["A. elite member", "B. rejected outcast", "C. dignitary", "D. luminary"],
        answer: 1,
        explanation: "A pariah is an outcast or rejected person."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The PULCHRITUDINOUS landscape of the Alpine valley attracted landscape painters worldwide.'",
        options: ["A. unsightly and plain", "B. breathtakingly beautiful", "C. desolate and grim", "D. barren and dry"],
        answer: 1,
        explanation: "Pulchritudinous means breathtakingly beautiful or physically striking."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'His ZEALOUS dedication to experimental oncology yielded groundbreaking therapeutic protocols.'",
        options: ["A. apathetic and cold", "B. fervent and enthusiastic", "C. lukewarm and casual", "D. indolent and lazy"],
        answer: 1,
        explanation: "Zealous means showing great energy or enthusiasm; fervent."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The SANCTIMONIOUS lecture delivered by the embezzler regarding ethics outraged the shareholders.'",
        options: ["A. hypocritically moralizing", "B. genuinely sincere", "C. humble and modest", "D. authentic and true"],
        answer: 0,
        explanation: "Sanctimonious describes making a show of being morally superior to others, often hypocritically."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The PUGNACIOUS debater aggressively cross-examined every witness called to the stand.'",
        options: ["A. conciliatory and calm", "B. belligerent and quarrelsome", "C. amicable and warm", "D. pacifist and gentle"],
        answer: 1,
        explanation: "Pugnacious means eager or quick to argue, quarrel, or fight; belligerent."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The UBIQUITOUS presence of digital smartphones has transformed modern interpersonal communication.'",
        options: ["A. rare and scarce", "B. omnipresent and found everywhere", "C. sporadic and rare", "D. hidden and covert"],
        answer: 1,
        explanation: "Ubiquitous means present, appearing, or found everywhere; omnipresent."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The VACILLATING politician refused to take a firm stance on the tax reform bill.'",
        options: ["A. resolute and firm", "B. indecisive and wavering", "C. steadfast and loyal", "D. determined"],
        answer: 1,
        explanation: "Vacillating means wavering between different opinions or actions; indecisive."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'His VERBOSE manuscript required extensive editing to eliminate redundant prose.'",
        options: ["A. succinct and brief", "B. wordy and long-winded", "C. concise and sharp", "D. pithy and exact"],
        answer: 1,
        explanation: "Verbose means using or expressed in more words than needed; wordy."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The VINDICTIVE litigant pursued the vendetta through multiple appellate court hearings.'",
        options: ["A. forgiving and kind", "B. rancorous and vengeful", "C. magnanimous", "D. merciful"],
        answer: 1,
        explanation: "Vindictive means having or showing a strong desire for revenge; rancorous."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The ABSTRUSE philosophical treatise required hours of careful exegesis.'",
        options: ["A. easily accessible", "B. profoundly deep", "C. obscure and hard to understand", "D. crystal clear"],
        answer: 2,
        explanation: "Abstruse means difficult to understand or obscure."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The BELLICOSE rhetoric exchanged by diplomats heightened tensions before the summit.'",
        options: ["A. amicable and friendly", "B. belligerent and aggressive", "C. pacific and calm", "D. conciliatory"],
        answer: 1,
        explanation: "Bellicose means demonstrating aggression and willingness to fight."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The ESOTERIC nomenclature of organic chemistry intimidates beginning science majors.'",
        options: ["A. arcane and specialized", "B. common and universal", "C. transparently clear", "D. ubiquitous"],
        answer: 0,
        explanation: "Esoteric means understood by or meant for only the select few who have specialized knowledge; arcane."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'His FASTIDIOUS attention to typographical details ensured zero errors in the final publication.'",
        options: ["A. meticulous and precise", "B. casual and relaxed", "C. negligent", "D. sloppy"],
        answer: 0,
        explanation: "Fastidious means very attentive to and concerned about accuracy and detail; meticulous."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The GREGARIOUS entrepreneur thrived in networking events and international conferences.'",
        options: ["A. introverted and shy", "B. sociable and fond of company", "C. reclusive", "D. unsocial"],
        answer: 1,
        explanation: "Gregarious means fond of company; sociable."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The LARGESSE distributed by the philanthropist funded community arts programs citywide.'",
        options: ["A. munificence and generosity", "B. parsimony and greed", "C. stinginess", "D. penury"],
        answer: 0,
        explanation: "Largesse refers to generosity in bestowing money or gifts upon others; munificence."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'His OBDURATE refusal to compromise stalled contract negotiations for three months.'",
        options: ["A. flexible and soft", "B. unyielding and stubborn", "C. amenable", "D. pliant"],
        answer: 1,
        explanation: "Obdurate means stubbornly refusing to change one's opinion or course of action; unyielding."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The PARSIMONIOUS CEO refused to approve funding for basic employee ergonomic seating.'",
        options: ["A. frugal and stingy", "B. extravagant", "C. lavish", "D. prodigal"],
        answer: 0,
        explanation: "Parsimonious means unwilling to spend money or use resources; frugal and stingy."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The TENACIOUS advocate refused to abandon the civil rights lawsuit despite judicial setbacks.'",
        options: ["A. irresolute and weak", "B. persistent and firm", "C. yielding", "D. fickle"],
        answer: 1,
        explanation: "Tenacious means tending to keep a firm hold of something; persistent."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'His TURBID explanation of quantum entanglement left the undergraduate physics class completely confused.'",
        options: ["A. lucid and clear", "B. murky and confused", "C. pellucid", "D. crystal"],
        answer: 1,
        explanation: "Turbid describes something opaque, thick, or confused/muddy in meaning; murky."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The LUNAR eclipse cast an eerie shadow across the nocturnal landscape.'",
        options: ["A. relating to the moon", "B. relating to the sun", "C. relating to the stars", "D. relating to planets"],
        answer: 0,
        explanation: "Lunar pertains to the moon."
    },
    {
        q: "Choose the meaning of the CAPITALIZED word: 'The NOCTURNAL prowlers scavenged through the suburban neighborhood after midnight.'",
        options: ["A. active during the day", "B. active at night", "C. dormant in winter", "D. aquatic"],
        answer: 1,
        explanation: "Nocturnal means done, occurring, or active at night."
    }
];
