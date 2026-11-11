// ==========================================
// Skill Practice Categories: Finding Errors (60 Questions)
// Modeled after Philippine Civil Service Exam (CSE) Grammar & Correct Usage
// ==========================================

const identifyingErrorsQuestions = [
    {
        q: "Find the Error: A new list of applicants who passed the preliminary screening are posted on the bulletin board outside the personnel office.",
        options: [
            'A new list of applicants',
            'who passed the preliminary screening',
            'are posted on the bulletin board',
            'outside the personnel office.'
        ],
        answer: 2,
        explanation: "The subject is 'list', which is singular. The modifying phrase 'of applicants who passed the preliminary screening' does not change its number. Therefore, 'are posted' should be 'is posted'."
    },
    {
        q: "Find the Error: Neither the team captain nor the assistant coaches was present during the emergency meeting.",
        options: [
            'Neither the team captain',
            'nor the assistant coaches',
            'was present',
            'during the emergency meeting.'
        ],
        answer: 2,
        explanation: "When subjects are joined by 'neither... nor', the verb agrees with the closer subject ('coaches', which is plural), requiring 'were present' instead of 'was present'."
    },
    {
        q: "Find the Error: My uncle, along with his business partners and lawyer, are attending the annual stockholders convention.",
        options: [
            'My uncle, along with',
            'his business partners and lawyer,',
            'are attending',
            'the annual stockholders convention.'
        ],
        answer: 2,
        explanation: "Phrases introduced by 'along with', 'accompanied by', or 'together with' do not change the grammatical number of the subject ('My uncle' is singular). Thus, 'are attending' should be 'is attending'."
    },
    {
        q: "Find the Error: Each of the participants in the seminar are required to submit a comprehensive project proposal.",
        options: [
            'Each of the participants',
            'in the seminar',
            'are required to submit',
            'a comprehensive project proposal.'
        ],
        answer: 2,
        explanation: "The pronoun 'Each' is singular and takes a singular verb. 'are required' should be changed to 'is required'."
    },
    {
        q: "Find the Error: The committee has finalized their official recommendation regarding the budget allocation for the upcoming fiscal year.",
        options: [
            'The committee has finalized',
            'their official recommendation',
            'regarding the budget allocation',
            'for the upcoming fiscal year.'
        ],
        answer: 1,
        explanation: "When a collective noun ('committee') acts as a single unit, it takes a singular pronoun ('its' instead of 'their'). Change 'their' to 'its'."
    },
    {
        q: "Find the Error: Between you and I, the proposed restructuring plan will likely face heavy opposition from the department heads.",
        options: [
            'Between you and I,',
            'the proposed restructuring plan',
            'will likely face heavy opposition',
            'from the department heads.'
        ],
        answer: 0,
        explanation: "The preposition 'Between' requires objective case pronouns. 'Between you and I' should be 'Between you and me'."
    },
    {
        q: "Find the Error: She is one of those managers who always encourages her staff to pursue continuous professional development.",
        options: [
            'She is one of those managers',
            'who always encourages',
            'her staff to pursue',
            'continuous professional development.'
        ],
        answer: 1,
        explanation: "In the clause 'who always encourages', the relative pronoun 'who' refers to its antecedent 'managers' (plural). Therefore, the verb must be plural: 'encourage'."
    },
    {
        q: "Find the Error: By the time the auditors arrived at the regional branch office, the rogue manager already destroyed the files.",
        options: [
            'By the time the auditors arrived',
            'at the regional branch office,',
            'the rogue manager',
            'already destroyed the files.'
        ],
        answer: 3,
        explanation: "When two past actions occur at different times, the earlier action requires the past perfect tense ('had already destroyed')."
    },
    {
        q: "Find the Error: Walking through the historical district, magnificent colonial architecture could be seen along every cobblestone street.",
        options: [
            'Walking through the historical district,',
            'magnificent colonial architecture',
            'could be seen',
            'along every cobblestone street.'
        ],
        answer: 1,
        explanation: "This contains a dangling modifier. The introductory participial phrase must modify a person, not 'architecture'."
    },
    {
        q: "Find the Error: The director insisted that every employee is punctual during Monday morning briefings.",
        options: [
            'The director insisted',
            'that every employee',
            'is punctual',
            'during Monday morning briefings.'
        ],
        answer: 2,
        explanation: "After verbs of insisting, the subjunctive mood is required in the dependent clause. 'is punctual' should be 'be punctual'."
    },
    {
        q: "Find the Error: Fifty thousand pesos were allocated by the local government for the community library project.",
        options: [
            'Fifty thousand pesos',
            'were allocated',
            'by the local government',
            'for the community library project.'
        ],
        answer: 1,
        explanation: "A sum of money representing a single unified amount takes a singular verb. 'were allocated' should be 'was allocated'."
    },
    {
        q: "Find the Error: Not only did the researcher collect extensive field data, but she also publish three peer-reviewed articles.",
        options: [
            'Not only did the researcher',
            'collect extensive field data,',
            'but she also publish',
            'three peer-reviewed articles.'
        ],
        answer: 2,
        explanation: "Correlative conjunctions require parallel verb tenses. Since 'did... collect' is past tense, 'publish' must match in past tense: 'published'."
    },
    {
        q: "Find the Error: The company prides itself on providing excellent service, prompt client response, and to maintain high ethical standards.",
        options: [
            'The company prides itself',
            'on providing excellent service,',
            'prompt client response,',
            'and to maintain high ethical standards.'
        ],
        answer: 3,
        explanation: "Items in a series must maintain parallel grammatical form. 'to maintain' should be changed to 'maintaining'."
    },
    {
        q: "Find the Error: Whom do you think will be appointed as the new regional director of the bureau?",
        options: [
            'Whom do you think',
            'will be appointed',
            'as the new regional director',
            'of the bureau?'
        ],
        answer: 0,
        explanation: "In the dependent clause, the pronoun functions as the subject of 'will be appointed'. Therefore, the subjective form 'Who' must be used instead of 'Whom'."
    },
    {
        q: "Find the Error: Neither of the two applicants possess the required technical qualifications for the senior engineering position.",
        options: [
            'Neither of the two applicants',
            'possess the required',
            'technical qualifications',
            'for the senior engineering position.'
        ],
        answer: 1,
        explanation: "'Neither' is singular and requires a singular verb. 'possess' should be changed to 'possesses'."
    },
    {
        q: "Find the Error: If the administration would have acted promptly, the labor strike could have been avoided.",
        options: [
            'If the administration',
            'would have acted promptly,',
            'the labor strike',
            'could have been avoided.'
        ],
        answer: 1,
        explanation: "In a contrary-to-fact past conditional sentence, the 'if' clause must use the past perfect tense ('had acted'), not 'would have acted'."
    },
    {
        q: "Find the Error: The criteria for judging the creative writing contest includes originality, depth, and stylistic coherence.",
        options: [
            'The criteria for judging',
            'the creative writing contest',
            'includes originality, depth,',
            'and stylistic coherence.'
        ],
        answer: 2,
        explanation: "'Criteria' is the plural form of 'criterion'. Therefore, the plural verb 'include' must be used instead of 'includes'."
    },
    {
        q: "Find the Error: Try and finish the administrative report before you leave for the weekend.",
        options: [
            'Try and finish',
            'the administrative report',
            'before you leave',
            'for the weekend.'
        ],
        answer: 0,
        explanation: "Idiomatically and grammatically, 'try and' is incorrect in formal writing; it should be 'try to finish'."
    },
    {
        q: "Find the Error: The weather bureau reported that a severe tropical storm is approaching the eastern coast of Luzon.",
        options: [
            'The weather bureau reported',
            'that a severe tropical storm',
            'is approaching',
            'the eastern coast of Luzon.'
        ],
        answer: 2,
        explanation: "In indirect discourse following a past tense verb ('reported'), verbs must shift into past tense sequence: 'is approaching' should be 'was approaching'."
    },
    {
        q: "Find the Error: Everyone in the office must submit their completed tax clearance forms before Friday afternoon.",
        options: [
            'Everyone in the office',
            'must submit their',
            'completed tax clearance forms',
            'before Friday afternoon.'
        ],
        answer: 1,
        explanation: "The indefinite pronoun 'Everyone' is singular, so the possessive pronoun referring to it must also be singular ('his or her'), not plural 'their'."
    },
    {
        q: "Find the Error: The number of enrolled students in vocational courses have increased significantly over the past three years.",
        options: [
            'The number of enrolled students',
            'in vocational courses',
            'have increased significantly',
            'over the past three years.'
        ],
        answer: 2,
        explanation: "'The number' is singular. Therefore, it takes a singular verb: 'has increased'."
    },
    {
        q: "Find the Error: Harder she worked on her research thesis, the more confident she felt about her defense.",
        options: [
            'Harder she worked',
            'on her research thesis,',
            'the more confident',
            'she felt about her defense.'
        ],
        answer: 0,
        explanation: "Correlative comparative structures require the definite article 'The' before both clauses. 'Harder she worked' must be 'The harder she worked'."
    },
    {
        q: "Find the Error: The principal spoke fluent than the visiting speaker during the plenary session held at the auditorium.",
        options: [
            'The principal spoke',
            'fluent than the visiting speaker',
            'during the plenary session',
            'held at the auditorium.'
        ],
        answer: 1,
        explanation: "When comparing two items using an adverb, the comparative form must be used ('more fluently'), not the positive form 'fluent'."
    },
    {
        q: "Find the Error: After reviewing the evidence, the judge decided to acquit the defendant of all charges.",
        options: [
            'After reviewing the evidence,',
            'the judge decided',
            'to acquit the defendant',
            'No error.'
        ],
        answer: 3,
        explanation: "No error. The sentence is grammatically correct and idiomatically sound."
    },
    {
        q: "Find the Error: Supposing if the flight gets delayed due to fog, what alternative travel arrangements should we make?",
        options: [
            'Supposing if the flight',
            'gets delayed due to fog,',
            'what alternative travel arrangements',
            'should we make?'
        ],
        answer: 0,
        explanation: "'Supposing' and 'if' are redundant when used together to introduce a conditional clause. Remove 'if' or 'Supposing'."
    },
    {
        q: "Find the Error: The manager delegated the task to John and I, expecting us to finish before closing hours.",
        options: [
            'The manager delegated',
            'the task to John and I,',
            'expecting us to finish',
            'before closing hours.'
        ],
        answer: 1,
        explanation: "The pronouns serve as objects of the preposition 'to'. Objective case pronouns are required ('John and me', not 'John and I')."
    },
    {
        q: "Find the Error: Little did the board of directors know that their financial strategy will trigger an immediate shareholder revolt.",
        options: [
            'Little did the board of directors',
            'know that their financial strategy',
            'will trigger',
            'an immediate shareholder revolt.'
        ],
        answer: 2,
        explanation: "The main clause opens with a past tense auxiliary ('did'). Therefore, the subordinate verb must match in past tense: 'will trigger' should be 'would trigger'."
    },
    {
        q: "Find the Error: Rabies are a viral disease transmitted through the saliva of infected warm-blooded animals such as dogs and bats.",
        options: [
            'Rabies are a viral disease',
            'transmitted through the saliva',
            'of infected warm-blooded animals',
            'such as dogs and bats.'
        ],
        answer: 0,
        explanation: "Although ending in 's', 'Rabies' is treated as a singular noun representing a single disease. 'are a viral disease' should be 'is a viral disease'."
    },
    {
        q: "Find the Error: Being an experienced investigator, the clues left at the crime scene were easily analyzed by Detective Santos.",
        options: [
            'Being an experienced investigator,',
            'the clues left at the crime scene',
            'were easily analyzed',
            'by Detective Santos.'
        ],
        answer: 0,
        explanation: "This is a misplaced modifier. The participial phrase 'Being an experienced investigator' incorrectly modifies 'the clues'."
    },
    {
        q: "Find the Error: Scarcely had she stepped into the conference room than the telephone began to ring incessantly.",
        options: [
            'Scarcely had she stepped',
            'into the conference room',
            'than the telephone',
            'began to ring incessantly.'
        ],
        answer: 2,
        explanation: "The adverb 'Scarcely' must be paired with the conjunction 'when', not 'than'. Change 'than' to 'when'."
    },
    {
        q: "Find the Error: One of the main challenges that faces urban planners today are managing municipal solid waste disposal.",
        options: [
            'One of the main challenges',
            'that faces urban planners',
            'today are managing',
            'municipal solid waste disposal.'
        ],
        answer: 2,
        explanation: "The true subject of the linking verb is 'One' (singular). Therefore, 'are managing' must be singular: 'is managing'."
    },
    {
        q: "Find the Error: The museum houses an extensive collection of artifacts dating back from the Spanish colonial period.",
        options: [
            'The museum houses',
            'an extensive collection of artifacts',
            'dating back from',
            'the Spanish colonial period.'
        ],
        answer: 2,
        explanation: "Standard idiom pairs 'dating back' with 'to', not 'from'. Change 'dating back from' to 'dating back to'."
    },
    {
        q: "Find the Error: Despite of his rigorous training and impressive qualifications, he failed to secure the executive position.",
        options: [
            'Despite of his rigorous training',
            'and impressive qualifications,',
            'he failed to secure',
            'the executive position.'
        ],
        answer: 0,
        explanation: "'Despite' is a preposition that does not take 'of' (unlike 'in spite of'). 'Despite of' should be simply 'Despite'."
    },
    {
        q: "Find the Error: The committee recommended that the ordinance should be amended immediately.",
        options: [
            'The committee recommended',
            'that the ordinance',
            'should be amended',
            'No error.'
        ],
        answer: 3,
        explanation: "No error. 'Recommended that' can take auxiliary construction structures correctly."
    },
    {
        q: "Find the Error: She speaks English more better than any other candidate interviewed today.",
        options: [
            'She speaks English',
            'more better',
            'than any other candidate',
            'interviewed today.'
        ],
        answer: 1,
        explanation: "Double comparatives are incorrect in English. 'more better' should be corrected to 'better'."
    },
    {
        q: "Find the Error: Ten kilometers are too far to walk in this scorching heat without resting.",
        options: [
            'Ten kilometers',
            'are too far',
            'to walk in this scorching heat',
            'without resting.'
        ],
        answer: 1,
        explanation: "A distance expressed as a single collective measurement takes a singular verb ('is too far', not 'are too far')."
    },
    {
        q: "Find the Error: He is accustomed to work long hours under extreme pressure during fiscal auditing periods.",
        options: [
            'He is accustomed',
            'to work long hours',
            'under extreme pressure',
            'during fiscal auditing periods.'
        ],
        answer: 1,
        explanation: "The phrasal preposition 'accustomed to' takes a gerund object (ending in --ing), not an infinitive. 'to work' should be 'to working'."
    },
    {
        q: "Find the Error: The data collected during the clinical trial indicates a positive correlation with dietary habits.",
        options: [
            'The data collected',
            'during the clinical trial',
            'indicates a positive correlation',
            'with dietary habits.'
        ],
        answer: 2,
        explanation: "'Data' is strictly plural. Therefore, the verb must be plural: 'indicate' instead of 'indicates'."
    },
    {
        q: "Find the Error: Neither the professor nor his graduate students was able to solve the complex biochemical equation.",
        options: [
            'Neither the professor nor',
            'his graduate students',
            'was able to solve',
            'the complex biochemical equation.'
        ],
        answer: 2,
        explanation: "With 'neither... nor', the verb agrees with the closer subject ('students', which is plural). 'was' should be changed to 'were'."
    },
    {
        q: "Find the Error: The architectural design is uniquely different from any other building in the metropolitan district.",
        options: [
            'The architectural design',
            'is uniquely different',
            'from any other building',
            'in the metropolitan district.'
        ],
        answer: 1,
        explanation: "'Uniquely different' is redundant since 'different' already implies uniqueness. It should be simplified to 'different from'."
    },
    {
        q: "Find the Error: All the heavy equipment in the manufacturing plant need to be calibrated before operations resume.",
        options: [
            'All the heavy equipment',
            'in the manufacturing plant',
            'need to be calibrated',
            'before operations resume.'
        ],
        answer: 2,
        explanation: "The subject 'equipment' is an uncountable noun taking a singular verb. 'need to be' should be 'needs to be'."
    },
    {
        q: "Find the Error: The editorial board expressed their opinions regarding the controversial legislative bill.",
        options: [
            'The editorial board',
            'expressed their opinions',
            'regarding the controversial',
            'legislative bill.'
        ],
        answer: 1,
        explanation: "Pronoun agreement mismatch with collective noun treated as singular or plural. Standardize pronoun usage."
    },
    {
        q: "Find the Error: Hardly had the Prime Minister finished his address when the opposition party walked out of the chamber.",
        options: [
            'Hardly had the Prime Minister',
            'finished his address',
            'when the opposition party',
            'No error.'
        ],
        answer: 3,
        explanation: "No error. 'Hardly... when' is correctly paired and inverted."
    },
    {
        q: "Find the Error: The number of applicants who qualified for the interview were disappointingly low this year.",
        options: [
            'The number of applicants',
            'who qualified for the interview',
            'were disappointingly low',
            'this year.'
        ],
        answer: 2,
        explanation: "'The number' is singular and takes a singular verb. 'were' should be 'was'."
    },
    {
        q: "Find the Error: She is taller than any other student enrolled in the senior nursing class.",
        options: [
            'She is taller than',
            'any other student',
            'enrolled in the',
            'No error.'
        ],
        answer: 3,
        explanation: "No error. The comparison correctly excludes the subject from the group using 'any other'."
    },
    {
        q: "Find the Error: The company’s quarterly profit rose up by fifteen percent following the successful launch of their new software line.",
        options: [
            'The company’s quarterly profit',
            'rose up by fifteen percent',
            'following the successful launch',
            'of their new software line.'
        ],
        answer: 1,
        explanation: "'Rose up' is redundant because 'rose' already indicates upward movement. Drop 'up'."
    },
    {
        q: "Find the Error: Each book and manual in the reference library are cataloged using the Dewey decimal system.",
        options: [
            'Each book and manual',
            'in the reference library',
            'are cataloged',
            'using the Dewey decimal system.'
        ],
        answer: 2,
        explanation: "When singular subjects are connected by 'and' but preceded by 'Each', the subject is singular. 'are cataloged' should be 'is cataloged'."
    },
    {
        q: "Find the Error: The committee were divided in their opinions concerning the proposed disciplinary sanctions.",
        options: [
            'The committee were divided',
            'in their opinions',
            'concerning the proposed',
            'No error.'
        ],
        answer: 3,
        explanation: "No error. Members acting individually allow plural verbs and pronouns."
    },
    {
        q: "Find the Error: He spoke so fast that I was unable to comprehend his instructions clearly.",
        options: [
            'He spoke so fast',
            'that I was unable',
            'to comprehend',
            'No error.'
        ],
        answer: 3,
        explanation: "No error. The structure 'so... that' is used correctly."
    },
    {
        q: "Find the Error: The principal, together with the PTA officers and faculty members, are organizing the annual foundation day celebration.",
        options: [
            'The principal, together with',
            'the PTA officers and faculty members,',
            'are organizing',
            'the annual foundation day celebration.'
        ],
        answer: 2,
        explanation: "The subject 'principal' is singular; prepositional modifiers do not alter its number. 'are organizing' should be 'is organizing'."
    },
    {
        q: "Find the Error: The scientist explained how photosynthesis converts sunlight into chemical energy to sustain plant growth.",
        options: [
            'The scientist explained',
            'how photosynthesis converts',
            'sunlight into chemical energy',
            'No error.'
        ],
        answer: 3,
        explanation: "No error. Scientific facts are correctly expressed in the present tense."
    },
    {
        q: "Find the Error: The novel was written by an author whom critics believe will win the national literary award.",
        options: [
            'The novel was written',
            'by an author whom',
            'critics believe will win',
            'the national literary award.'
        ],
        answer: 1,
        explanation: "The pronoun is the subject of the verb 'will win'. Therefore, it must be the subjective 'who', not 'whom'."
    },
    {
        q: "Find the Error: More than one official have been questioned regarding the alleged procurement irregularities.",
        options: [
            'More than one official',
            'have been questioned',
            'regarding the alleged',
            'procurement irregularities.'
        ],
        answer: 1,
        explanation: "The phrase 'More than one' takes a singular noun and a singular verb. 'have been questioned' should be 'has been questioned'."
    },
    {
        q: "Find the Error: The department store offers discounts to whoever registers early for the holiday promotional sale.",
        options: [
            'The department store offers',
            'discounts to whoever',
            'registers early for',
            'No error.'
        ],
        answer: 3,
        explanation: "No error. 'Whoever' is correct because it serves as the subject of the clause."
    },
    {
        q: "Find the Error: He is one of those individuals who never compromises his personal integrity for financial gain.",
        options: [
            'He is one of those individuals',
            'who never compromises',
            'his personal integrity',
            'for financial gain.'
        ],
        answer: 2,
        explanation: "The pronoun 'his' refers back to the antecedent 'individuals' (plural). It must agree in number, changing to 'their'."
    },
    {
        q: "Find the Error: The package containing confidential legal documents were delivered to the law firm this morning.",
        options: [
            'The package containing',
            'confidential legal documents',
            'were delivered',
            'to the law firm this morning.'
        ],
        answer: 2,
        explanation: "The head subject of the sentence is 'package' (singular). 'were delivered' must be 'was delivered'."
    },
    {
        q: "Find the Error: If I was in your position, I would accept the job offer without any hesitation or second thoughts.",
        options: [
            'If I was in your position,',
            'I would accept the job offer',
            'without any hesitation',
            'or second thoughts.'
        ],
        answer: 0,
        explanation: "In hypothetical conditional statements, use 'were' instead of 'was'. 'If I was' should be 'If I were'."
    },
    {
        q: "Find the Error: The prosecution argued that the accused had fled the crime scene before police officers arrived.",
        options: [
            'The prosecution argued',
            'that the accused had fled',
            'the crime scene before',
            'No error.'
        ],
        answer: 3,
        explanation: "No error. The past perfect tense 'had fled' correctly precedes the simple past 'arrived'."
    },
    {
        q: "Find the Error: A series of public hearings regarding the tax reform bill are scheduled for next week.",
        options: [
            'A series of public hearings',
            'regarding the tax reform bill',
            'are scheduled',
            'for next week.'
        ],
        answer: 2,
        explanation: "The subject is 'A series' (singular collective unit). Therefore, 'are scheduled' should be 'is scheduled'."
    },
    {
        q: "Find the Error: The artist spent hours meticulously mixing colors to achieve the exact shade of azure blue.",
        options: [
            'The artist spent hours',
            'meticulously mixing colors',
            'to achieve the exact shade',
            'No error.'
        ],
        answer: 3,
        explanation: "No error. The sentence is grammatically sound and well-constructed."
    }
];
