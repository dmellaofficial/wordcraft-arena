const expertQuestions = [
    { q: "Which philosophical term describes a statement that appears self-contradictory but reveals a deeper truth?", options: ["An allegorical narrative framework", "A paradox expressing profound truth", "A deliberate oxymoron concealing error", "A redundant tautological statement"], answer: 1, explanation: "A paradox is a proposition that seems self-contradictory but expresses a profound truth." },
    { q: "What is the etymological root of the word 'sycophant'?", options: ["An ancient Greek informer accusing fig exporters", "A mercenary flatterer seeking financial gain", "An itinerant seeker of classical philosophy", "A municipal tax collector in antiquity"], answer: 0, explanation: "Historically linked to ancient Greek informers accusing illegal fig exporters ('sycophantes')." },
    { q: "Identify the subjunctive mood in formal English syntax:", options: ["If I was in your position...", "If I am in your position...", "If I will be in your position...", "If I were in your position..."], answer: 3, explanation: "In hypothetical counterfactuals, standard formal English requires the subjunctive 'were'." },
    { q: "What does the literary device 'tmesis' involve?", options: ["Overstating a claim for dramatic effect", "Omission of conjunctions between clauses", "Inserting a word inside another compound word", "Repetition of initial consonant sounds"], answer: 2, explanation: "Tmesis is the separation of parts of a compound word (e.g., 'abso-lutely-lutely')." },
    { q: "Which term denotes the substitution of a mild expression for one considered too direct or harsh?", options: ["A pointed dysphemism", "A softening euphemism", "A figurative metonymy", "A synecdochic shift"], answer: 1, explanation: "A euphemism softens harsh or direct terminology." },
    { q: "What does the term 'sesquipedalian' mean?", options: ["Having many metrical feet in verse", "Using long, polysyllabic vocabulary", "Walking in a repetitive circle", "Composing a brief phrase"], answer: 1, explanation: "Sesquipedalian describes someone using long, polysyllabic words or relating to words of many syllables." },
    { q: "What is a 'zeugma'?", options: ["A heavy type of ancient cargo ship", "A word applying to two others in different senses", "A rhetorical question posed to an audience", "An intentionally incorrect verb tense"], answer: 1, explanation: "Zeugma involves a word applying to two parts of a sentence blending literal and figurative meanings." },
    { q: "Which word best defines 'pusillanimous'?", options: ["Extraordinarily brave and daring", "Showing a lack of courage or timid", "Extremely generous with wealth", "Possessed of profound wisdom"], answer: 1, explanation: "Pusillanimous means cowardly, fearful, or lacking resolution." },
    { q: "What does 'lucubration' refer to?", options: ["A sudden, bright flash of light", "Studying or working laboriously by night", "Excessive talking during debate", "A gentle, cooling evening breeze"], answer: 1, explanation: "Lucubration refers to writing or studying laboriously, especially by night." },
    { q: "Identify the rhetorical device: 'The pen is mightier than the sword.'", options: ["Litotes utilizing understatement", "Metonymy substituting an attribute", "Anaphora repeating initial words", "Asyndeton omitting conjunctions"], answer: 1, explanation: "This is metonymy, where an object is substituted for an institution closely associated with it." },
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
        explanation: "Perspicacious means having keen mental discernment; 'sagacious' is its closest synonym."
    },
    {
        q: "Identify the sentence with an error in capitalization, punctuation, or grammar:",
        options: [
            "A. Neither of the collaborating scientists was willing to compromise his methodology.",
            "B. The committee presented its final findings to the Board of Directors on Tuesday.",
            "C. Whomsoever secures the legislative majority will dictate the fiscal agenda.",
            "D. Its historical significance notwithstanding, the manuscript requires extensive restoration."
        ],
        answer: 2,
        explanation: "Option C is incorrect because the pronoun functions as the subject of the clause ('secures'), requiring the nominative 'Whoever' instead of 'Whomsoever'."
    },
    {
        q: "Choose the word that best exemplifies an OBSEQUIOUS demeanor in a professional corporate environment:",
        options: ["A. Servile flattery toward superiors", "B. Aggressive negotiation tactics", "C. Independent analytical auditing", "D. Detached objective oversight"],
        answer: 0,
        explanation: "Obsequious describes someone who is excessively obedient, servile, or prone to fawning flattery."
    },
    {
        q: "Despite the turbulent market volatility, the firm's financial footing remained STABLE.",
        options: ["A. precarious", "B. solvent", "C. volatile", "D. lucrative"],
        answer: 0,
        explanation: "The antonym of 'stable' in a financial context is 'precarious', denoting vulnerability or instability."
    },
    {
        q: "Which homonym correctly completes the sentence? 'The astute magistrate refused to let personal bias _____ the judicial proceedings.'",
        options: ["A. affect", "B. effect", "C. infect", "D. efface"],
        answer: 0,
        explanation: "'Affect' is a verb meaning to influence, whereas 'effect' is typically a noun denoting a result."
    },
    {
        q: "The protagonist's LACONIC response during the cross-examination left the prosecuting attorney baffled.",
        options: ["A. verbose", "B. concise", "C. ambiguous", "D. vehement"],
        answer: 1,
        explanation: "Laconic means using very few words; 'concise' serves as its precise synonym."
    },
    {
        q: "Identify the grammatical error or stylistic flaw in the following sentence structure:",
        options: [
            "A. Walking through the botanical gardens, rare orchid species were observed by the botanist.",
            "B. She emphasized that the cornerstone of diplomacy is mutual respect and active listening.",
            "C. Having completed the exhaustive audit, the accountant submitted the ledger to the partners.",
            "D. Were the Board to ratify the proposal, exponential revenue growth would ensue."
        ],
        answer: 0,
        explanation: "Option A contains a dangling modifier, implying improperly that the rare orchid species were walking through the gardens."
    },
    {
        q: "The diplomat's INTRANSIGENT stance during the peace talks stalled any prospective treaty ratification.",
        options: ["A. flexible", "B. obstinate", "C. transient", "D. amicable"],
        answer: 1,
        explanation: "Intransigent means unwilling or refusing to change one's views; 'obstinate' is its direct synonym."
    },
    {
        q: "Which option demonstrates correct punctuation and parallel construction in a complex listing?",
        options: [
            "A. The research initiative requires analyzing raw data, synthesizing empirical findings, and to draft comprehensive briefs.",
            "B. The research initiative requires analyzing raw data, synthesizing empirical findings, and drafting comprehensive briefs.",
            "C. The research initiative requires: analyzing raw data, synthesizing empirical findings; and drafting comprehensive briefs.",
            "D. The research initiative requires analyzing raw data; synthesizing empirical findings; and drafting comprehensive briefs."
        ],
        answer: 1,
        explanation: "Option B maintains strict parallel structure using gerund phrases separated by standard commas."
    },
    {
        q: "The CEO's SPECIOUS argument convinced the junior shareholders despite lacking logical substantiation.",
        options: ["A. plausible", "B. fallacious", "C. verifiable", "D. profound"],
        answer: 1,
        explanation: "Specious describes something appearing plausible on the surface but actually false, making 'fallacious' its accurate synonym."
    },
    {
        q: "Select the sentence with the correct usage of subjunctive mood and pronoun agreement:",
        options: [
            "A. If any of the delegates objects to the protocol, let them voice their concerns now.",
            "B. It is crucial that every department head submit their quarterly projections by Friday.",
            "C. I insist that the defendant be remanded to custody pending the magistrate's review.",
            "D. If she was nominated for the chair position, she would revolutionize academic policy."
        ],
        answer: 2,
        explanation: "Option C correctly utilizes the mandative subjunctive ('be remanded'). Option D incorrectly uses 'was' instead of 'were' in a counterfactual conditional."
    },
    {
        q: "His penchant for creating INVIDIOUS distinctions among coworkers severely fractured workplace morale.",
        options: ["A. equitable", "B. detrimental", "C. laudable", "D. superficial"],
        answer: 1,
        explanation: "Invidious means likely to arouse resentment or anger through unfair discrimination."
    },
    {
        q: "Which word represents the antonym of 'RECALCITRANT' in an organizational context?",
        options: ["A. defiant", "B. compliant", "C. belligerent", "D. stubborn"],
        answer: 1,
        explanation: "Recalcitrant denotes an uncooperative attitude toward authority; its exact antonym is 'compliant'."
    },
    {
        q: "Identify the sentence containing an error in idiomatic preposition usage or syntax:",
        options: [
            "A. The senior partner concurred with the associate regarding the liability clause.",
            "B. Professor Vance is an authority in Renaissance polyphonic music and choral composition.",
            "C. Compliance with federal environmental regulations is mandatory for all industrial plants.",
            "D. The architectural blueprint is markedly different than the one approved last session."
        ],
        answer: 3,
        explanation: "Option D contains an idiom error; standard formal English prefers 'different from' over 'different than'."
    },
    {
        q: "The RECONDITE treatise on quantum chromodynamics could only be deciphered by theoretical physicists.",
        options: ["A. esoteric", "B. accessible", "C. transparent", "D. lucid"],
        answer: 0,
        explanation: "Recondite means little known or abstruse; 'esoteric' is its precise synonym."
    },
    {
        q: "Which option correctly resolves homophonic confusion: 'The royal decree commanded the immediate _____ of all rebel assets.'",
        options: ["A. seizure", "B. ceasure", "C. seisure", "D. ceasor"],
        answer: 0,
        explanation: "'Seizure' is the correct spelling and legal term for taking forcible possession of property."
    },
    {
        q: "Her TACITURN demeanor during social gatherings often led acquaintances to mistake her for aloof.",
        options: ["A. garrulous", "B. reticent", "C. exuberant", "D. eloquent"],
        answer: 1,
        explanation: "Taciturn means reserved or uncommunicative in speech; 'reticent' is its close synonym."
    },
    {
        q: "Identify the sentence with correct punctuation and pronoun case:",
        options: [
            "A. Between you and I, the restructuring initiative is unlikely to meet its fiscal targets.",
            "B. Give the documentation to whoever arrives first at the administrative desk.",
            "C. Whom should the board select as the interim executive director?",
            "D. The responsibility for the audit falls entirely upon ourselves and the compliance officer."
        ],
        answer: 2,
        explanation: "Option C is correct because 'Whom' is the direct object of 'select'. Option A fails because the preposition 'Between' requires object pronouns ('Between you and me')."
    },
    {
        q: "The EFFRONTERY displayed by the junior auditor during the executive review stunned the senior partners.",
        options: ["A. timidity", "B. audacity", "C. humility", "D. decorum"],
        answer: 1,
        explanation: "Effrontery refers to insolent or impudent behavior; 'audacity' is its direct synonym."
    },
    {
        q: "The CACOPHONOUS sounds echoing from the construction site disrupted the university lecture.",
        options: ["A. melodious", "B. discordant", "C. ephemeral", "D. soporific"],
        answer: 1,
        explanation: "Cacophonous means harsh-sounding or discordant."
    },
    {
        q: "Identify the sentence with correct subject-verb agreement and punctuation:",
        options: [
            "A. A series of unexpected fiscal audits were conducted across all regional branches.",
            "B. Statistics on quarterly turnover rates indicates a positive upward trajectory.",
            "C. Every manager and supervisor is required to submit their feedback by noon.",
            "D. The committee has finalized its recommendations regarding employee benefits."
        ],
        answer: 3,
        explanation: "Option D correctly treats the collective noun 'committee' as singular ('its recommendations'). Option A fails because the subject is the singular 'series'."
    },
    {
        q: "His SAPID commentary during the panel discussion enlivened an otherwise tedious symposium.",
        options: ["A. insipid", "B. flavorful", "C. morose", "D. taciturn"],
        answer: 1,
        explanation: "Sapid means flavorful or engagingly stimulating; 'flavorful' or intellectually stimulating."
    },
    {
        q: "Choose the correct homophone pair to complete: 'The weary traveler sought _____ under the stone _____ during the storm.'",
        options: ["A. pedal, waist", "B. pale, waste", "C. principal, principle", "D. pare, pear"],
        answer: 1,
        explanation: "Wait, let's use exact homonym testing: shelter and arch. Let's provide standard homonym options: 'The knight drew his _____ to defend the castle gate.'",
        options: ["A. steel", "B. steal", "C. stile", "D. still"],
        answer: 0,
        explanation: "'Steel' is the metal alloy used for weapons and armor."
    },
    {
        q: "The ENIGMATIC manuscript baffled paleographers attempting to translate its archaic script.",
        options: ["A. transparent", "B. inscrutable", "C. lucid", "D. superficial"],
        answer: 1,
        explanation: "Enigmatic means difficult to interpret or mysterious; 'inscrutable' is its direct synonym."
    },
    {
        q: "Identify the sentence with an error in parallel structure or verb tense consistency:",
        options: [
            "A. She excels not only in algorithmic programming but also in technical writing.",
            "B. The delegates discussed trade tariffs, ratified the treaty, and adjourn the summit.",
            "C. Had the software engineer anticipated the bug, system downtime would have been avoided.",
            "D. To succeed in venture capital requires resilience, agility, and uncompromising focus."
        ],
        answer: 1,
        explanation: "Option B mixes past tense ('discussed', 'ratified') with present tense ('adjourn'). It should be 'adjourned'."
    },
    {
        q: "The PANEGYRIC delivered at the founder's memorial praised his monumental contributions to science.",
        options: ["A. critique", "B. eulogy", "C. diatribe", "D. satire"],
        answer: 1,
        explanation: "A panegyric is a speech or text published in praise of someone; 'eulogy' serves as its close synonym."
    },
    {
        q: "Which word is the antonym of 'AMELIORATE'?",
        options: ["A. alleviate", "B. exacerbate", "C. mitigate", "D. improve"],
        answer: 1,
        explanation: "Ameliorate means to make something bad better; its antonym is 'exacerbate' (make worse)."
    },
    {
        q: "Identify the correct usage of punctuation in compound adjective modification:",
        options: [
            "A. She presented a well researched paper at the international symposium.",
            "B. She presented a well-researched paper at the international symposium.",
            "C. She presented a well, researched paper at the international symposium.",
            "D. She presented a, well-researched, paper at the international symposium."
        ],
        answer: 1,
        explanation: "Compound adjectives preceding nouns require a hyphen ('well-researched')."
    },
    {
        q: "The VICISSITUDES of fortune tested the entrepreneur's emotional resilience during market crashes.",
        options: ["A. stability", "B. fluctuations", "C. predictability", "D. stagnancy"],
        answer: 1,
        explanation: "Vicissitudes refer to changes of circumstances or fortune, typically unwelcome ones ('fluctuations')."
    },
    {
        q: "Choose the correct homonym: 'The baker used fresh _____ to sweeten the artisanal pastry glaze.'",
        options: ["A. flour", "B. flower", "C. floor", "D. flare"],
        answer: 0,
        explanation: "'Flour' is the powdered grain used in baking."
    },
    {
        q: "His PRODIGAL spending habits quickly depleted the inheritance left by his ancestors.",
        options: ["A. frugal", "B. lavish", "C. judicious", "D. parsimonious"],
        answer: 1,
        explanation: "Prodigal means spending money or resources freely and recklessly; 'lavish' is a direct synonym."
    },
    {
        q: "Identify the sentence containing an incorrect modal verb usage or conditional error:",
        options: [
            "A. If you had reviewed the ledger earlier, you would have caught the discrepancy.",
            "B. Students must submit their research portfolios prior to the department deadline.",
            "C. If I would have known about the traffic delay, I would have taken the bypass.",
            "D. She could finish the manuscript by Friday if uninterrupted."
        ],
        answer: 2,
        explanation: "Option C contains a common error: the protasis of a third conditional should use the past perfect ('If I had known'), never 'If I would have known'."
    },
    {
        q: "The MELLIFLUOUS voice of the soprano captivated the opera house audience.",
        options: ["A. strident", "B. dulcet", "C. raucous", "D. grating"],
        answer: 1,
        explanation: "Mellifluous means sweet or musical; 'dulcet' is its precise synonym."
    },
    {
        q: "Which option provides the antonym of 'GARRULOUS'?",
        options: ["A. loquacious", "B. taciturn", "C. verbose", "D. chatty"],
        answer: 1,
        explanation: "Garrulous means excessively talkative; its exact antonym is 'taciturn' (uncommunicative)."
    },
    {
        q: "Identify the sentence with proper semicolon and conjunctive adverb punctuation:",
        options: [
            "A. The budget deficit is severe; however, the board approved the expansion.",
            "B. The budget deficit is severe, however; the board approved the expansion.",
            "C. The budget deficit is severe however, the board approved the expansion.",
            "D. The budget deficit is severe; however the board approved the expansion."
        ],
        answer: 0,
        explanation: "A semicolon precedes a conjunctive adverb like 'however', followed correctly by a comma."
    },
    {
        q: "The OBFUSCATION of the report's key findings raised suspicions among regulatory auditors.",
        options: ["A. clarification", "B. obscuration", "C. illumination", "D. exposition"],
        answer: 1,
        explanation: "Obfuscation is the act of making something obscure, unclear, or unintelligible ('obscuration')."
    },
    {
        q: "Choose the correct homophone: 'The sailor adjusted the ship's _____ to navigate against the gale.'",
        options: ["A. sail", "B. sale", "C. syle", "D. seil"],
        answer: 0,
        explanation: "'Sail' refers to the fabric sheet catching wind on a vessel."
    },
    {
        q: "Her PANEGYRIC remarks at the banquet honored the retiring chief executive officer.",
        options: ["A. critical", "B. laudatory", "C. derogatory", "D. cynical"],
        answer: 1,
        explanation: "Panegyric means expressing elaborate praise ('laudatory')."
    },
    {
        q: "Identify the sentence with an error in pronoun case or relative pronoun selection:",
        options: [
            "A. The technicians whom installed the servers completed the diagnostics.",
            "B. To whom should I address this official correspondence?",
            "C. The executives who spearheaded the merger received performance bonuses.",
            "D. Whoever wins the election will inherit a complex economic climate."
        ],
        answer: 0,
        explanation: "Option A is incorrect because the relative pronoun is the subject of 'installed', so 'who' should be used instead of 'whom'."
    },
    {
        q: "The PARIAH status of the corrupt official made him an outcast in political circles.",
        options: ["A. elite", "B. outcast", "C. dignitary", "D. luminary"],
        answer: 1,
        explanation: "A pariah is an outcast or rejected person."
    },
    {
        q: "Which word is the antonym of 'FASTIDIOUS'?",
        options: ["A. meticulous", "B. scrupulous", "C. sloppy", "D. demanding"],
        answer: 2,
        explanation: "Fastidious means very attentive to and concerned about accuracy and detail; its antonym is 'sloppy'."
    },
    {
        q: "Identify the sentence with proper hyphenation and capitalization of titles:",
        options: [
            "A. President-Elect Vance delivered a keynote address at the summit.",
            "B. President-elect vance delivered a keynote address at the summit.",
            "C. president-elect Vance delivered a keynote address at the summit.",
            "D. President Elect Vance delivered a keynote address at the summit."
        ],
        answer: 0,
        explanation: "Option A correctly capitalizes proper nouns and hyphenates 'President-Elect'."
    },
    {
        q: "The PULCHRITUDINOUS landscape of the Alpine valley attracted landscape painters worldwide.",
        options: ["A. unsightly", "B. beautiful", "C. desolate", "D. barren"],
        answer: 1,
        explanation: "Pulchritudinous means breathtakingly beautiful or physically striking."
    },
    {
        q: "Choose the correct homonym: 'The carpenter used a heavy _____ to drive the iron nails into oak.'",
        options: ["A. hamar", "B. hammer", "C. humor", "D. humer"],
        answer: 1,
        explanation: "'Hammer' is the striking hand tool used in carpentry."
    },
    {
        q: "His ZEALOUS dedication to experimental oncology yielded groundbreaking therapeutic protocols.",
        options: ["A. apathetic", "B. fervent", "C. lukewarm", "D. indolent"],
        answer: 1,
        explanation: "Zealous means showing great energy or enthusiasm ('fervent')."
    },
    {
        q: "Identify the sentence with a dangling modifier or misplaced modifier error:",
        options: [
            "A. Barking loudly, the mail carrier was startled by the aggressive guard dog.",
            "B. To excel in quantum mechanics, rigorous mathematical dedication is essential.",
            "C. Staring at the astronomical chart, the constellation Orion became clearly visible.",
            "D. Covered in chocolate ganache, she served the decadent birthday cake to guests."
        ],
        answer: 3,
        explanation: "Option D contains a misplaced modifier: 'Covered in chocolate ganache' incorrectly modifies 'she' instead of 'the birthday cake'."
    },
    {
        q: "The SANCTIMONIOUS lecture delivered by the embezzler regarding ethics outraged the shareholders.",
        options: ["A. hypocritical", "B. sincere", "C. humble", "D. genuine"],
        answer: 0,
        explanation: "Sanctimonious describes making a show of being morally superior to other people, often hypocritically."
    },
    {
        q: "Which word represents the antonym of 'EPHEMERAL'?",
        options: ["A. transient", "B. permanent", "C. fleeting", "D. momentary"],
        answer: 1,
        explanation: "Ephemeral means lasting for a very short time; its exact antonym is 'permanent'."
    },
    {
        q: "Identify the sentence with correct apostrophe usage for plural possessive nouns:",
        options: [
            "A. The two companies' merger was finalized during yesterday's board meeting.",
            "B. The two company's merger was finalized during yesterday's board meeting.",
            "C. The two companys' merger was finalized during yesterday's board meeting.",
            "D. The two companies merger was finalized during yesterdays board meeting."
        ],
        answer: 0,
        explanation: "Option A correctly applies plural possessive ('companies'') and singular possessive time ('yesterday's')."
    },
    {
        q: "The PUGNACIOUS debater aggressively cross-examined every witness called to the stand.",
        options: ["A. conciliatory", "B. belligerent", "C. amicable", "D. pacifist"],
        answer: 1,
        explanation: "Pugnacious means eager or quick to argue, quarrel, or fight ('belligerent')."
    },
    {
        q: "Choose the correct homophone: 'The archer drew back his bowstring and took careful _____ at the target.'",
        options: ["A. aim", "B. ame", "C. eim", "D. ayme"],
        answer: 0,
        explanation: "'Aim' refers to directing a weapon or objective at a target."
    },
    {
        q: "Her SURREPTITIOUS glance toward the confidential document did not go unnoticed by the auditor.",
        options: ["A. overt", "B. clandestine", "C. transparent", "D. blatant"],
        answer: 1,
        explanation: "Surreptitious means kept secret, especially because it would not be approved ('clandestine')."
    },
    {
        q: "Identify the sentence with an error in subject-verb agreement involving compound subjects:",
        options: [
            "A. Neither the lead investigator nor her assistants was aware of the security breach.",
            "B. Either the CEO or the board members are voting on the proposal this afternoon.",
            "C. Bread and butter constitutes the staple breakfast for the expedition team.",
            "D. Philosophy and logic form the foundation of classical critical thinking."
        ],
        answer: 0,
        explanation: "Option A is grammatically incorrect: with 'neither/nor', the verb agrees with the closer subject ('assistants'), so it should be 'were aware'."
    },
    {
        q: "The SPURIOUS artifact was exposed as a modern forgery by metallurgical analysis.",
        options: ["A. authentic", "B. fraudulent", "C. genuine", "D. legitimate"],
        answer: 1,
        explanation: "Spurious means not being what it purports to be; false or fake ('fraudulent')."
    },
    {
        q: "Which option provides the antonym of 'MITIGATE'?",
        options: ["A. alleviate", "B. aggravate", "C. lessen", "D. assuage"],
        answer: 1,
        explanation: "Mitigate means to make less severe; its antonym is 'aggravate' (make worse)."
    },
    {
        q: "Identify the sentence with proper quotation marks and punctuation rules:",
        options: [
            "A. 'The research paper is conclusive,' stated the lead investigator, 'we must publish immediately.'",
            "B. 'The research paper is conclusive,' stated the lead investigator. 'We must publish immediately.'",
            "C. 'The research paper is conclusive' stated the lead investigator, 'we must publish immediately.'",
            "D. 'The research paper is conclusive', stated the lead investigator, 'we must publish immediately.'"
        ],
        answer: 1,
        explanation: "Option B correctly uses a period after the attribution phrase when splitting independent sentences in dialogue."
    },
    {
        q: "The TENACIOUS advocate refused to abandon the civil rights lawsuit despite judicial setbacks.",
        options: ["A. irresolute", "B. persistent", "C. yielding", "D. fickle"],
        answer: 1,
        explanation: "Tenacious means tending to keep a firm hold of something; clinging tenaciously ('persistent')."
    },
    {
        q: "Choose the correct homonym: 'The monarch sat upon the jeweled _____ during the coronation ceremony.'",
        options: ["A. throne", "B. thrown", "C. trone", "D. throan"],
        answer: 0,
        explanation: "'Throne' is the ceremonial chair for a monarch."
    },
    {
        q: "His TURBID explanation of quantum entanglement left the undergraduate physics class completely confused.",
        options: ["A. lucid", "B. murky", "C. pellucid", "D. crystal"],
        answer: 1,
        explanation: "Turbid describes something opaque, thick, or confused/muddy in meaning ('murky')."
    },
    {
        q: "Identify the sentence with an error in pronoun-antecedent agreement or gender neutrality:",
        options: [
            "A. Every citizen must exercise their right to vote in the national election.",
            "B. The physician examined the patient before recording their observations in the chart.",
            "C. Each student submitted his or her research proposal prior to the deadline.",
            "D. The committee members cast their ballots unanimously on the resolution."
        ],
        answer: 0,
        explanation: "Strict traditional grammar faults 'Every citizen' (singular) matching with 'their' (plural), though singular 'their' is increasingly common. Let's look at strict formal rules: 'Every citizen must exercise his or her right...' or plural antecedents."
    },
    {
        q: "The UBIQUITOUS presence of digital smartphones has transformed modern interpersonal communication.",
        options: ["A. rare", "B. omnipresent", "C. scarce", "D. sporadic"],
        answer: 1,
        explanation: "Ubiquitous means present, appearing, or found everywhere ('omnipresent')."
    },
    {
        q: "Which word represents the antonym of 'MUNIFICENT'?",
        options: ["A. bountiful", "B. stingy", "C. generous", "D. philanthropic"],
        answer: 1,
        explanation: "Munificent means larger or more generous than is usual or necessary; its antonym is 'stingy'."
    },
    {
        q: "Identify the sentence with correct capitalization and geographical descriptor punctuation:",
        options: [
            "A. The expedition traveled across the Northern hemisphere during the equinox.",
            "B. The expedition traveled across the northern hemisphere during the equinox.",
            "C. The Expedition traveled across the Northern Hemisphere during the equinox.",
            "D. The expedition traveled across the northern hemisphere during the Equinox."
        ],
        answer: 1,
        explanation: "Directional adjectives like 'northern' are lowercase when not part of a proper title."
    },
    {
        q: "The VACILLATING politician refused to take a firm stance on the tax reform bill.",
        options: ["A. resolute", "B. indecisive", "C. steadfast", "D. determined"],
        answer: 1,
        explanation: "Vacillating means wavering between different opinions or actions; indecisive."
    },
    {
        q: "Choose the correct homophone: 'The farmer sheared the thick wool fleece from the prize _____.'",
        options: ["A. ewe", "B. yew", "C. you", "D. uu"],
        answer: 0,
        explanation: "'Ewe' is an adult female sheep."
    },
    {
        q: "His VERBOSE manuscript required extensive editing to eliminate redundant prose.",
        options: ["A. succinct", "B. wordy", "C. concise", "D. pithy"],
        answer: 1,
        explanation: "Verbose means using or expressed in more words than needed ('wordy')."
    },
    {
        q: "Identify the sentence containing an incorrect use of adjectives and adverbs:",
        options: [
            "A. She felt badly about missing the crucial board meeting due to transit delays.",
            "B. The vocalist performed magnificently during the opening aria.",
            "C. Drive carefully along the winding mountain pass during the winter storm.",
            "D. The soup smells delicious, infused with fresh rosemary and garlic."
        ],
        answer: 0,
        explanation: "Option A is incorrect: linking verbs like 'felt' take predicate adjectives ('feel bad', referring to emotional state) rather than adverbs ('badly')."
    },
    {
        q: "The VINDICTIVE litigant pursued the vendetta through multiple appellate court hearings.",
        options: ["A. forgiving", "B. rancorous", "C. magnanimous", "D. merciful"],
        answer: 1,
        explanation: "Vindictive means having or showing a strong or unreasoning desire for revenge ('rancorous')."
    },
    {
        q: "Which option provides the antonym of 'NADIR'?",
        options: ["A. zenith", "B. abyss", "C. bottom", "D. trough"],
        answer: 0,
        explanation: "Nadir means the lowest point in the fortunes of a person or organization; its exact antonym is 'zenith' (highest point)."
    },
    {
        q: "Identify the sentence with proper hyphenation and compound number capitalization:",
        options: [
            "A. Twenty five delegates attended the emergency constitutional convention.",
            "B. Twenty-five delegates attended the emergency constitutional convention.",
            "C. twenty-five delegates attended the emergency constitutional convention.",
            "D. Twenty five-delegates attended the emergency constitutional convention."
        ],
        answer: 1,
        explanation: "Compound numbers from twenty-one to ninety-nine are hyphenated ('Twenty-five')."
    },
    {
        q: "The ZEALOT religious reformer preached against worldly pleasures with intense fervor.",
        options: ["A. moderate", "B. fanatic", "C. liberal", "D. indifferent"],
        answer: 1,
        explanation: "A zealot is a person who is uncompromising in pursuit of their religious or political ideals ('fanatic')."
    },
    {
        q: "Choose the correct homonym: 'The knight polished his steel _____ until it mirrored the castle hall.'",
        options: ["A. chute", "B. shoot", "C. shield", "D. sheild"],
        answer: 2,
        explanation: "'Shield' is the defensive armor piece held in combat. Note: correct spelling is 'shield' (i before e except after c)."
    },
    {
        q: "The ABSTRUSE philosophical treatise required hours of careful exegesis.",
        options: ["A. accessible", "B. profound", "C. recondite", "D. lucid"],
        answer: 2,
        explanation: "Abstruse means difficult to understand; 'recondite' is its precise synonym."
    },
    {
        q: "Identify the sentence with an error in parallel verb infinitive structure:",
        options: [
            "A. The objective is to analyze market trends, evaluate risks, and formulate strategy.",
            "B. She prefers to study in the library, write notes in the study carrel, and to review flashcards.",
            "C. To succeed in diplomacy requires patience, active listening, and strategic compromise.",
            "D. Management aims to reduce overhead, optimize supply chains, and increase profitability."
        ],
        answer: 1,
        explanation: "Option B violates parallel infinitive construction by adding 'to' arbitrarily before 'review' ('to study, write, and [to] review')."
    },
    {
        q: "The BELLICOSE rhetoric exchanged by diplomats heightened tensions before the summit.",
        options: ["A. amicable", "B. belligerent", "C. pacific", "D. conciliatory"],
        answer: 1,
        explanation: "Bellicose means demonstrating aggression and willingness to fight ('belligerent')."
    },
    {
        q: "Which word represents the antonym of 'DIFFIDENT'?",
        options: ["A. timid", "B. confident", "C. shy", "D. reserved"],
        answer: 1,
        explanation: "Diffident means modest or shy resulting from a lack of self-confidence; its antonym is 'confident'."
    },
    {
        q: "Identify the sentence containing proper colon and introductory clause punctuation:",
        options: [
            "A. The expedition brought essential supplies: tents, rations, and medical kits.",
            "B. The expedition brought: essential supplies, tents, rations, and medical kits.",
            "C. Essential supplies included: tents, rations, and medical kits, brought by the team.",
            "D. The expedition brought essential supplies; tents, rations, and medical kits."
        ],
        answer: 0,
        explanation: "A colon must follow an independent clause when introducing a direct list."
    },
    {
        q: "The ESOTERIC nomenclature of organic chemistry intimidates beginning science majors.",
        options: ["A. arcane", "B. common", "C. transparent", "D. ubiquitous"],
        answer: 0,
        explanation: "Esoteric means understood by or meant for only the select few who have specialized knowledge ('arcane')."
    },
    {
        q: "Choose the correct homophone: 'The gardener pruned the dead branches from the thorny _____ bush.'",
        options: ["A. rose", "B. rows", "C. rohs", "D. roes"],
        answer: 0,
        explanation: "'Rose' refers to the perennial flowering shrub."
    },
    {
        q: "His FASTIDIOUS attention to typographical details ensured zero errors in the final publication.",
        options: ["A. meticulous", "B. casual", "C. negligent", "D. sloppy"],
        answer: 0,
        explanation: "Fastidious means very attentive to and concerned about accuracy and detail ('meticulous')."
    },
    {
        q: "Identify the sentence with an error in comparative and superlative adjective forms:",
        options: [
            "A. Of the two candidates, Dr. Vance is the most qualified for the executive chair.",
            "B. This quarter's economic growth is stronger than projected in the initial forecast.",
            "C. Mount Everest is the highest mountain peak in the Himalayan mountain range.",
            "D. The newer software iteration is significantly more efficient than its predecessor."
        ],
        answer: 0,
        explanation: "Option A is incorrect in traditional prescriptive grammar: when comparing two items, the comparative ('more qualified') should be used instead of the superlative ('most qualified')."
    },
    {
        q: "The GREGARIOUS entrepreneur thrived in networking events and international conferences.",
        options: ["A. introverted", "B. sociable", "C. reclusive", "D. unsocial"],
        answer: 1,
        explanation: "Gregarious means fond of company; sociable."
    },
    {
        q: "Which option provides the antonym of 'ICONOCLASTIC'?",
        options: ["A. unorthodox", "B. conformist", "C. rebellious", "D. radical"],
        answer: 1,
        explanation: "Iconoclastic means attacking or ignoring cherished beliefs; its antonym is 'conformist'."
    },
    {
        q: "Identify the sentence with correct capitalization of historical eras and treaties:",
        options: [
            "A. The Treaty of Versailles was signed at the conclusion of World War I.",
            "B. The treaty of Versailles was signed at the conclusion of world war I.",
            "C. The Treaty Of Versailles was signed at the conclusion of World War One.",
            "D. the Treaty of Versailles was signed at the conclusion of World War I."
        ],
        answer: 0,
        explanation: "Option A properly capitalizes proper names of historical documents and global conflicts."
    },
    {
        q: "The LARGESSE distributed by the philanthropist funded community arts programs citywide.",
        options: ["A. munificence", "B. parsimony", "C. stinginess", "D. penury"],
        answer: 0,
        explanation: "Largesse refers to generosity in bestowing money or gifts upon others ('munificence')."
    },
    {
        q: "Choose the correct homonym: 'The ship's captain dropped the heavy iron _____ into the tranquil harbor.'",
        options: ["A. anker", "B. anchor", "C. ancher", "D. ankler"],
        answer: 1,
        explanation: "'Anchor' is the heavy device dropped to moor a vessel."
    },
    {
        q: "His OBDURATE refusal to compromise stalled contract negotiations for three months.",
        options: ["A. flexible", "B. unyielding", "C. amenable", "D. pliant"],
        answer: 1,
        explanation: "Obdurate means stubbornly refusing to change one's opinion or course of action ('unyielding')."
    },
    {
        q: "Identify the sentence with correct placement of modifiers and prepositional phrasing:",
        options: [
            "A. The committee discussed the budget deficit in the conference room.",
            "B. In the conference room, the committee discussed the budget deficit.",
            "C. The committee discussed in the conference room the budget deficit.",
            "D. Both A and B are correct stylistic placements."
        ],
        answer: 3,
        explanation: "Both initial and terminal prepositional modifier placements are grammatically sound here."
    },
    {
        q: "The PARSIMONIOUS CEO refused to approve funding for basic employee ergonomic seating.",
        options: ["A. frugal", "B. extravagant", "C. lavish", "D. prodigal"],
        answer: 0,
        explanation: "Parsimonious means unwilling to spend money or use resources; frugal or thrifty."
    },
    {
        q: "Which word represents the antonym of 'QUERULOUS'?",
        options: ["A. complaining", "B. placid", "C. petulant", "D. fretful"],
        answer: 1,
        explanation: "Querulous means complaining in a whining manner; its antonym is 'placid' (calm and peaceful)."
    }
];
