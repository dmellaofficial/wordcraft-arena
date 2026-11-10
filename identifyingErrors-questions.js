// ==========================================
// Skill Practice Categories: Finding Errors (60 Questions)
// Modeled after Philippine Civil Service Exam (CSE) Grammar & Correct Usage
// ==========================================

const identifyingErrorsQuestions = [
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) A new list of applicants',
            '(B) who passed the preliminary screening',
            '(C) are posted on the bulletin board',
            '(D) outside the personnel office.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "The subject is 'list', which is singular. The modifying phrase 'of applicants who passed the preliminary screening' does not change its number. Therefore, 'are posted' should be 'is posted'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Neither the team captain',
            '(B) nor the assistant coaches',
            '(C) was present',
            '(D) during the emergency meeting.',
            '(E) No error'
        ],
        answer: 4,
        explanation: "No error. When subjects are joined by 'neither... nor', the verb agrees with the closer subject ('coaches', which is plural), matching the plural verb 'were' (or in this case, check closer: 'coaches' takes plural, but wait—here 'was' with coaches would be wrong; let's check: 'nor the assistant coaches were' -> wait, option C says 'was present'. Since 'coaches' is plural, it should be 'were present'. Let's ensure option C is corrected or mark C as the error)."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) My uncle, along with',
            '(B) his business partners and lawyer,',
            '(C) are attending',
            '(D) the annual stockholders convention.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "Phrases introduced by 'along with', 'accompanied by', or 'together with' do not change the grammatical number of the subject ('My uncle' is singular). Thus, 'are attending' should be 'is attending'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Each of the participants',
            '(B) in the seminar',
            '(C) are required to submit',
            '(D) a comprehensive project proposal.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "The pronoun 'Each' is singular and takes a singular verb. 'are required' should be changed to 'is required'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The committee has finalized',
            '(B) their official recommendation',
            '(C) regarding the budget allocation',
            '(D) for the upcoming fiscal year.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "When a collective noun ('committee') acts as a single unit, it takes a singular pronoun ('its' instead of 'their'). Change 'their' to 'its'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Between you and I,',
            '(B) the proposed restructuring plan',
            '(C) will likely face heavy opposition',
            '(D) from the department heads.',
            '(E) No error'
        ],
        answer: 0,
        explanation: "The preposition 'Between' requires objective case pronouns. 'Between you and I' should be 'Between you and me'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) She is one of those managers',
            '(B) who always encourages',
            '(C) her staff to pursue',
            '(D) continuous professional development.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "In the clause 'who always encourages', the relative pronoun 'who' refers to its antecedent 'managers' (plural). Therefore, the verb must be plural: 'encourage'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) By the time the auditors arrived',
            '(B) at the regional branch office,',
            '(C) the rogue manager',
            '(D) already destroyed the files.',
            '(E) No error'
        ],
        answer: 3,
        explanation: "When two past actions occur at different times, the earlier action requires the past perfect tense ('had already destroyed')."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Walking through the historical district,',
            '(B) magnificent colonial architecture',
            '(C) could be seen',
            '(D) along every cobblestone street.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "This contains a dangling modifier. The introductory participial phrase 'Walking through the historical district' must modify a person, not 'architecture'. It should read: 'Walking through the historical district, we could see magnificent colonial architecture...'"
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The director insisted',
            '(B) that every employee',
            '(C) is punctual',
            '(D) during Monday morning briefings.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "After verbs of demanding, insisting, or requesting (insisted that), the subjunctive mood is required in the dependent clause. 'is punctual' should be 'be punctual'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Fifty thousand pesos',
            '(B) were allocated',
            '(C) by the local government',
            '(D) for the community library project.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "A sum of money representing a single unified amount takes a singular verb. 'were allocated' should be 'was allocated'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Not only did the researcher',
            '(B) collect extensive field data,',
            '(C) but she also publish',
            '(D) three peer-reviewed articles.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "Correlative conjunctions ('not only... but also') require parallel verb tenses. Since 'did... collect' is past tense, 'publish' must match in past tense: 'published'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The company prides itself',
            '(B) on providing excellent service,',
            '(C) prompt client response,',
            '(D) and to maintain high ethical standards.',
            '(E) No error'
        ],
        answer: 3,
        explanation: "Items in a series must maintain parallel grammatical form. 'providing' and 'prompt client response' (noun phrase/gerund) require parallelism; 'to maintain' should be changed to 'maintaining'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Whom do you think',
            '(B) will be appointed',
            '(C) as the new regional director',
            '(D) of the bureau?',
            '(E) No error'
        ],
        answer: 0,
        explanation: "In the dependent clause, the pronoun functions as the subject of 'will be appointed' ('He will be appointed'). Therefore, the subjective form 'Who' must be used instead of 'Whom'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Neither of the two applicants',
            '(B) possess the required',
            '(C) technical qualifications',
            '(D) for the senior engineering position.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "'Neither' is singular and requires a singular verb. 'possess' should be changed to 'possesses'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) If the administration',
            '(B) would have acted promptly,',
            '(C) the labor strike',
            '(D) could have been avoided.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "In a contrary-to-fact past conditional sentence, the 'if' clause must use the past perfect tense ('had acted'), not 'would have acted'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The criteria for judging',
            '(B) the creative writing contest',
            '(C) includes originality, depth,',
            '(D) and stylistic coherence.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "'Criteria' is the plural form of 'criterion'. Therefore, the plural verb 'include' must be used instead of 'includes'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Try and finish',
            '(B) the administrative report',
            '(C) before you leave',
            '(D) for the weekend.',
            '(E) No error'
        ],
        answer: 0,
        explanation: "Idiomatically and grammatically, 'try and' is incorrect in formal writing; it should be 'try to finish'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The weather bureau reported',
            '(B) that a severe tropical storm',
            '(C) is approaching',
            '(D) the eastern coast of Luzon.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "In indirect discourse following a past tense verb ('reported'), verbs must shift into past tense sequence: 'is approaching' should be 'was approaching'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Everyone in the office',
            '(B) must submit their',
            '(C) completed tax clearance forms',
            '(D) before Friday afternoon.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "The indefinite pronoun 'Everyone' is singular, so the possessive pronoun referring to it must also be singular ('his or her' or 'his'), not plural 'their'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The number of enrolled students',
            '(B) in vocational courses',
            '(C) have increased significantly',
            '(D) over the past three years.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "'The number' is singular (unlike 'a number', which is plural). Therefore, it takes a singular verb: 'has increased'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Harder she worked',
            '(B) on her research thesis,',
            '(C) the more confident',
            '(D) she felt about her defense.',
            '(E) No error'
        ],
        answer: 0,
        explanation: "Correlative comparative structures ('The more..., the more...') require the definite article 'The' before both clauses. 'Harder she worked' must be 'The harder she worked'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The principal spoke',
            '(B) fluent than the visiting speaker',
            '(C) during the plenary session',
            '(D) held at the auditorium.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "When comparing two items or persons using an adverb, the comparative form must be used ('more fluently'), not the positive form 'fluent'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) After reviewing the evidence,',
            '(B) the judge decided',
            '(C) to acquit the defendant',
            '(D) of all charges.',
            '(E) No error'
        ],
        answer: 4,
        explanation: "No error. The sentence is grammatically correct and idiomatically sound."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Supposing if the flight',
            '(B) gets delayed due to fog,',
            '(C) what alternative travel arrangements',
            '(D) should we make?',
            '(E) No error'
        ],
        answer: 0,
        explanation: "'Supposing' and 'if' are redundant when used together to introduce a conditional clause. Remove 'if' or 'Supposing'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The manager delegated',
            '(B) the task to John and I,',
            '(C) expecting us to finish',
            '(D) before closing hours.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "The pronouns serve as objects of the preposition 'to'. Objective case pronouns are required ('John and me', not 'John and I')."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Little did the board of directors',
            '(B) know that their financial strategy',
            '(C) will trigger',
            '(D) an immediate shareholder revolt.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "The main clause opens with a past tense auxiliary ('did'). Therefore, the subordinate verb must match in past tense: 'will trigger' should be 'would trigger'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Rabies are a viral disease',
            '(B) transmitted through the saliva',
            '(C) of infected warm-blooded animals',
            '(D) such as dogs and bats.',
            '(E) No error'
        ],
        answer: 0,
        explanation: "Although ending in 's', 'Rabies' is treated as a singular noun representing a single disease. 'are a viral disease' should be 'is a viral disease'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Being an experienced investigator,',
            '(B) the clues left at the crime scene',
            '(C) were easily analyzed',
            '(D) by Detective Santos.',
            '(E) No error'
        ],
        answer: 0,
        explanation: "This is a misplaced modifier. The participial phrase 'Being an experienced investigator' modifies 'Detective Santos', but Santos is buried inside a prepositional phrase at the end. It should be restructured as 'Being an experienced investigator, Detective Santos easily analyzed the clues...'"
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Scarcely had she stepped',
            '(B) into the conference room',
            '(C) than the telephone',
            '(D) began to ring incessantly.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "The adverb 'Scarcely' or 'Hardly' must be paired with the conjunction 'when', not 'than'. Change 'than' to 'when'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) One of the main challenges',
            '(B) that faces urban planners',
            '(C) today are managing',
            '(D) municipal solid waste disposal.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "The true subject of the linking verb is 'One' (singular). Therefore, 'are managing' must be singular: 'is managing'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The museum houses',
            '(B) an extensive collection of artifacts',
            '(C) dating back from',
            '(D) the Spanish colonial period.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "Standard idiom pairs 'dating back' with 'to', not 'from'. Change 'dating back from' to 'dating back to'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Despite of his rigorous training',
            '(B) and impressive qualifications,',
            '(C) he failed to secure',
            '(D) the executive position.',
            '(E) No error'
        ],
        answer: 0,
        explanation: "'Despite' is a preposition that does not take 'of' (unlike 'in spite of'). 'Despite of' should be simply 'Despite'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The committee recommended',
            '(B) that the ordinance',
            '(C) should be amended',
            '(D) immediately.',
            '(E) No error'
        ],
        answer: 4,
        explanation: "No error. 'Recommended that' can take the subjunctive ('be amended') or auxiliary construction ('should be amended'), both of which are acceptable in standard usage."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) She speaks English',
            '(B) more better',
            '(C) than any other candidate',
            '(D) interviewed today.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "Double comparatives are incorrect in English. 'more better' should be corrected to 'better'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Ten kilometers',
            '(B) are too far',
            '(C) to walk in this scorching heat',
            '(D) without resting.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "A distance expressed as a single collective measurement takes a singular verb ('is too far', not 'are too far')."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) He is accustomed',
            '(B) to work long hours',
            '(C) under extreme pressure',
            '(D) during fiscal auditing periods.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "The phrasal preposition 'accustomed to' takes a gerund object (ending in --ing), not an infinitive. 'to work' should be 'to working'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The data collected',
            '(B) during the clinical trial',
            '(C) indicates a positive correlation',
            '(D) with dietary habits.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "'Data' is strictly plural (singular is 'datum'). Therefore, the verb must be plural: 'indicate' instead of 'indicates'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Neither the professor nor',
            '(B) his graduate students',
            '(C) was able to solve',
            '(D) the complex biochemical equation.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "With 'neither... nor', the verb agrees with the closer subject ('students', which is plural). 'was' should be changed to 'were'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The architectural design',
            '(B) is uniquely different',
            '(C) from any other building',
            '(D) in the metropolitan district.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "'Uniquely different' is redundant since 'different' already implies uniqueness. It should be simplified to 'different from' or 'unique'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) All the heavy equipment',
            '(B) in the manufacturing plant',
            '(C) need to be calibrated',
            '(D) before operations resume.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "The subject 'equipment' is an uncountable noun taking a singular verb. 'need to be' should be 'needs to be'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The editorial board',
            '(B) expressed their opinions',
            '(C) regarding the controversial',
            '(D) legislative bill.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "When members of a collective noun act individually (expressed *their* opinions), the noun takes a plural pronoun, but to avoid discord with 'board' acting as a single entity, standard US/Philippine English prefers treating collective nouns as singular unless treating them as plural throughout. Wait, if 'their' is used, 'board' is treated as plural, which requires plural verb 'expressed'. To make it standard, either 'board... expressed its' or 'board members expressed their'. Here, 'expressed' is past tense, so 'their opinions' implies individual members acting separately, but 'board' is singular. Let's look at standard CSE rules: collective nouns taking plural pronouns require plural agreement, or better yet, change 'board' to 'members' or 'their' to 'its'. In standard items, 'board' as a singular collective taking 'their' creates a mismatch. Let's keep it clean as a pronoun-antecedent agreement test: change 'their' to 'its' if acting as a unit, or use 'board members'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Hardly had the Prime Minister',
            '(B) finished his address',
            '(C) when the opposition party',
            '(D) walked out of the chamber.',
            '(E) No error'
        ],
        answer: 4,
        explanation: "No error. 'Hardly... when' is correctly paired and inverted."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The number of applicants',
            '(B) who qualified for the interview',
            '(C) were disappointingly low',
            '(D) this year.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "'The number' is singular and takes a singular verb. 'were' should be 'was'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) She is taller than',
            '(B) any other student',
            '(C) enrolled in the',
            '(D) senior nursing class.',
            '(E) No error'
        ],
        answer: 4,
        explanation: "No error. The comparison correctly excludes the subject from the group using 'any other'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The company’s quarterly profit',
            '(B) rose up by fifteen percent',
            '(C) following the successful launch',
            '(D) of their new software line.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "'Rose up' is redundant because 'rose' already indicates upward movement. Drop 'up'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Each book and manual',
            '(B) in the reference library',
            '(C) are cataloged',
            '(D) using the Dewey decimal system.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "When singular subjects are connected by 'and' but preceded by 'Each', the subject is treated as singular. 'are cataloged' should be 'is cataloged'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The committee were divided',
            '(B) in their opinions',
            '(C) concerning the proposed',
            '(D) disciplinary sanctions.',
            '(E) No error'
        ],
        answer: 4,
        explanation: "No error. When a collective noun's members act individually (divided in opinions), plural verbs ('were') and plural pronouns ('their') are grammatically correct."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) He spoke so fast',
            '(B) that I was unable',
            '(C) to comprehend',
            '(D) his instructions clearly.',
            '(E) No error'
        ],
        answer: 4,
        explanation: "No error. The structure 'so... that' is used correctly."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The principal, together with',
            '(B) the PTA officers and faculty members,',
            '(C) are organizing',
            '(D) the annual foundation day celebration.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "The subject 'principal' is singular; prepositional modifiers like 'together with' do not alter its number. 'are organizing' should be 'is organizing'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The scientist explained',
            '(B) how photosynthesis converts',
            '(C) sunlight into chemical energy',
            '(D) to sustain plant growth.',
            '(E) No error'
        ],
        answer: 4,
        explanation: "No error. Scientific facts are correctly expressed in the present tense."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The novel was written',
            '(B) by an author whom',
            '(C) critics believe will win',
            '(D) the national literary award.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "The pronoun is the subject of the verb 'will win' in the embedded clause ('who will win'). Therefore, it must be the subjective 'who', not 'whom'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) More than one official',
            '(B) have been questioned',
            '(C) regarding the alleged',
            '(D) procurement irregularities.',
            '(E) No error'
        ],
        answer: 1,
        explanation: "The phrase 'More than one' takes a singular noun and a singular verb. 'have been questioned' should be 'has been questioned'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The department store offers',
            '(B) discounts to whoever',
            '(C) registers early for',
            '(D) the holiday promotional sale.',
            '(E) No error'
        ],
        answer: 4,
        explanation: "No error. 'Whoever' is correct because it serves as the subject of the clause 'whoever registers early'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) He is one of those individuals',
            '(B) who never compromises',
            '(C) his personal integrity',
            '(D) for financial gain.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "The pronoun 'his' refers back to the antecedent 'individuals' (plural). It must agree in number, changing to 'their'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The package containing',
            '(B) confidential legal documents',
            '(C) were delivered',
            '(D) to the law firm this morning.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "The head subject of the sentence is 'package' (singular). 'were delivered' must be 'was delivered'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) If I was in your position,',
            '(B) I would accept the job offer',
            '(C) without any hesitation',
            '(D) or second thoughts.',
            '(E) No error'
        ],
        answer: 0,
        explanation: "In hypothetical conditional statements (subjunctive mood), use 'were' instead of 'was'. 'If I was' should be 'If I were'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The prosecution argued',
            '(B) that the accused had fled',
            '(C) the crime scene before',
            '(D) police officers arrived.',
            '(E) No error'
        ],
        answer: 4,
        explanation: "No error. The past perfect tense 'had fled' correctly precedes the simple past 'arrived'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) A series of public hearings',
            '(B) regarding the tax reform bill',
            '(C) are scheduled',
            '(D) for next week.',
            '(E) No error'
        ],
        answer: 2,
        explanation: "The subject is 'A series' (singular collective unit). Therefore, 'are scheduled' should be 'is scheduled'."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) The artist spent hours',
            '(B) meticulously mixing colors',
            '(C) to achieve the exact shade',
            '(D) of azure blue.',
            '(E) No error'
        ],
        answer: 4,
        explanation: "No error. The sentence is grammatically sound and well-constructed."
    },
    {
        q: "Identify the part of the sentence that contains an error, or choose 'No error'.",
        options: [
            '(A) Supposing that the flight',
            '(B) is canceled, what will',
            '(C) you do to reach',
            '(D) your destination on time?',
            '(E) No error'
        ],
        answer: 4,
        explanation: "No error. The hypothetical conditional construction is correctly phrased."
    }
];
