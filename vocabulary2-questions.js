// ==========================================
// Skill Practice Categories: Vocabulary 2 (50 Advanced Questions)
// Concise sentence-upgrade format with fully shuffled answer indexes
// ==========================================

const vocabulary2Questions = [
    {
        q: "The university launched a [major] research initiative to investigate renewable energy sources.",
        options: ['Superficial', 'Transient', 'Comprehensive', 'Monumental'],
        answer: 2,
        explanation: "'Comprehensive' denotes thorough, wide-ranging coverage, replacing 'major' in an academic or research context."
    },
    {
        q: "Rapid industrialization has [caused] significant alterations in regional climate patterns.",
        options: ['Triggered', 'Obscured', 'Inhibited', 'Mitigated'],
        answer: 0,
        explanation: "'Triggered' means to cause or precipitate a complex series of events, replacing 'caused'."
    },
    {
        q: "The committee members struggled to [understand] the complex legal terminology embedded within the contract.",
        options: ['Comprehend', 'Anticipate', 'Fabricate', 'Disregard'],
        answer: 0,
        explanation: "'Comprehend' means to grasp mentally or understand fully."
    },
    {
        q: "Local authorities must [prevent] further industrial waste dumping into coastal waters.",
        options: ['Instigate', 'Facilitate', 'Curtail', 'Promote'],
        answer: 2,
        explanation: "'Curtail' means to restrict or reduce something harmful, replacing 'prevent'."
    },
    {
        q: "The financial report provided [clear] evidence of corporate mismanagement.",
        options: ['Specious', 'Tenuous', 'Unambiguous', 'Ambiguous'],
        answer: 2,
        explanation: "'Unambiguous' means leaving no doubt or clearly defined, replacing 'clear'."
    },
    {
        q: "Archaeologists uncovered [old] artifacts buried beneath the ancient temple ruins.",
        options: ['Ancient', 'Contemporary', 'Spurious', 'Futuristic'],
        answer: 0,
        explanation: "'Ancient' directly upgrades 'old' in archaeological contexts."
    },
    {
        q: "The diplomat attempted to [lessen] international tensions through backchannel negotiations.",
        options: ['Aggravate', 'Alleviate', 'Prolong', 'Exacerbate'],
        answer: 1,
        explanation: "'Alleviate' means to make suffering or tension less severe, replacing 'lessen'."
    },
    {
        q: "The startup company achieved [fast] growth within its first operational year.",
        options: ['Stagnant', 'Negligible', 'Exponential', 'Procrastinated'],
        answer: 2,
        explanation: "'Exponential' describes growth becoming very rapid, upgrading 'fast'."
    },
    {
        q: "The chief executive outlined a [new] strategy for global market expansion.",
        options: ['Conventional', 'Obsolete', 'Novel', 'Trite'],
        answer: 2,
        explanation: "'Novel' means newly minted, original, or striking, upgrading 'new'."
    },
    {
        q: "Urban planners must [include] green spaces in every municipal housing blueprint.",
        options: ['Incorporate', 'Omit', 'Divest', 'Exclude'],
        answer: 0,
        explanation: "'Incorporate' means to take in or include as part of a whole, upgrading 'include'."
    },
    {
        q: "The scientist conducted a [thorough] analysis of the soil chemical composition.",
        options: ['Haphazard', 'Rigorous', 'Superficial', 'Cursory'],
        answer: 1,
        explanation: "'Rigorous' means extremely thorough and careful, upgrading 'thorough'."
    },
    {
        q: "The CEO's resignation will [create] a vacancy at the head of the marketing division.",
        options: ['Abolish', 'Stifle', 'Precipitate', 'Prevent'],
        answer: 2,
        explanation: "'Precipitate' means to cause an event or situation to happen suddenly or unexpectedly, replacing 'create'."
    },
    {
        q: "The museum curator presented [strong] proof supporting the authenticity of the painting.",
        options: ['Compelling', 'Flimsy', 'Ambiguous', 'Doubtful'],
        answer: 0,
        explanation: "'Compelling' means evoking interest or attention in a powerfully irresistible way, replacing 'strong'."
    },
    {
        q: "Heavy rainfall can [delay] construction schedules on major highway projects.",
        options: ['Accelerate', 'Advance', 'Expedite', 'Hinder'],
        answer: 3,
        explanation: "'Hinder' means to create difficulties resulting in obstruction or delay, upgrading 'delay'."
    },
    {
        q: "The government implemented strict measures to [stop] illicit capital flight.",
        options: ['Instigate', 'Stem', 'Foster', 'Cultivate'],
        answer: 1,
        explanation: "'Stem' means to stop or restrict the flow of something, upgrading 'stop'."
    },
    {
        q: "The architect proposed a [bold] design for the new municipal library.",
        options: ['Banal', 'Daring', 'Derivative', 'Conventional'],
        answer: 1,
        explanation: "'Daring' upgrades 'bold', showing innovative structural risk."
    },
    {
        q: "The research team sought to [prove] the validity of their neurological hypothesis.",
        options: ['Disprove', 'Verify', 'Contradict', 'Invalidate'],
        answer: 1,
        explanation: "'Verify' means to establish the truth or accuracy of something, replacing 'prove'."
    },
    {
        q: "The historical document offered a [detailed] account of the revolution.",
        options: ['Cursory', 'Skimpy', 'Meticulous', 'Vague'],
        answer: 2,
        explanation: "'Meticulous' upgrades 'detailed', showing extreme precision."
    },
    {
        q: "The university chancellor delivered a [persuasive] speech during the orientation.",
        options: ['Incoherent', 'Tenuous', 'Cogent', 'Unconvincing'],
        answer: 2,
        explanation: "'Cogent' means clear, logical, and convincing, upgrading 'persuasive'."
    },
    {
        q: "Rising sea levels present a [serious] threat to low-lying coastal communities.",
        options: ['Negligible', 'Formidable', 'Trivial', 'Insignificant'],
        answer: 1,
        explanation: "'Formidable' inspiring fear or respect through being impressively large or powerful, replacing 'serious'."
    },
    {
        q: "The community board worked to [support] local small businesses during the economic downturn.",
        options: ['Weaken', 'Undermine', 'Sabotage', 'Bolster'],
        answer: 3,
        explanation: "'Bolster' means to support or strengthen, replacing 'support'."
    },
    {
        q: "The political analyst offered a [sharp] critique of current foreign policy.",
        options: ['Incisive', 'Vague', 'Dull', 'Superficial'],
        answer: 0,
        explanation: "'Incisive' means analytically clear and thinkingly acute, upgrading 'sharp'."
    },
    {
        q: "The economic forecast predicted [stable] growth over the next decade.",
        options: ['Erratic', 'Fluctuating', 'Volatile', 'Sustained'],
        answer: 3,
        explanation: "'Sustained' means continuing for an extended period without interruption, upgrading 'stable'."
    },
    {
        q: "The detective gathered [hidden] clues from the crime scene.",
        options: ['Flagrant', 'Latent', 'Obvious', 'Conspicuous'],
        answer: 1,
        explanation: "'Latent' means existing but not yet developed or manifest; hidden or concealed, replacing 'hidden'."
    },
    {
        q: "The novel explores the [complex] relationships between family members.",
        options: ['Elementary', 'Intricate', 'Rudimentary', 'Simple'],
        answer: 1,
        explanation: "'Intricate' means very complicated or detailed, upgrading 'complex'."
    },
    {
        q: "The board of directors sought to [fix] the corporate governance flaws immediately.",
        options: ['Exacerbate', 'Compound', 'Worsen', 'Rectify'],
        answer: 3,
        explanation: "'Rectify' means to put right or correct, replacing 'fix'."
    },
    {
        q: "The sudden market crash had a [widespread] impact on global investors.",
        options: ['Localized', 'Isolated', 'Pervasive', 'Confined'],
        answer: 2,
        explanation: "'Pervasive' means spreading widely throughout an area or a group of people, upgrading 'widespread'."
    },
    {
        q: "The conservationist aimed to [restore] the degraded wetland habitat.",
        options: ['Desecrate', 'Obliterate', 'Rehabilitate', 'Demolish'],
        answer: 2,
        explanation: "'Rehabilitate' means to restore something to a good condition, upgrading 'restore'."
    },
    {
        q: "The diplomat's speech was filled with [empty] promises of reform.",
        options: ['Meaningful', 'Substantial', 'Hollow', 'Weighty'],
        answer: 2,
        explanation: "'Hollow' means without real value, sincerity, or significance, upgrading 'empty'."
    },
    {
        q: "The scientist's breakthrough discovery will [transform] medical research.",
        options: ['Stagnate', 'Revolutionize', 'Impair', 'Hinder'],
        answer: 1,
        explanation: "'Revolutionize' means to change something radically or fundamentally, upgrading 'transform'."
    },
    {
        q: "The manager faced a [difficult] choice between cutting staff or reducing wages.",
        options: ['Windfall', 'Dilemma', 'Bonanza', 'Sinekure'],
        answer: 1,
        explanation: "'Dilemma' represents a situation in which a difficult choice has to be made, replacing 'difficult choice'."
    },
    {
        q: "The ancient manuscript contained [valuable] historical insights.",
        options: ['Worthless', 'Invaluable', 'Insipid', 'Trivial'],
        answer: 1,
        explanation: "'Invaluable' means extremely useful or indispensable, upgrading 'valuable'."
    },
    {
        q: "The company implemented measures to [lessen] operational carbon emissions.",
        options: ['Escalate', 'Amplified', 'Mitigate', 'Heighten'],
        answer: 2,
        explanation: "'Mitigate' means to make less severe, serious, or painful, replacing 'lessen'."
    },
    {
        q: "The professor gave a [clear] explanation of quantum mechanics.",
        options: ['Cryptic', 'Lucid', 'Nebulous', 'Obscure'],
        answer: 1,
        explanation: "'Lucid' means expressed clearly and easy to understand, upgrading 'clear'."
    },
    {
        q: "The new policy caused [widespread] confusion among employees.",
        options: ['Restricted', 'Localized', 'Contained', 'Rife'],
        answer: 3,
        explanation: "'Rife' means of common occurrence or widespread, replacing 'widespread'."
    },
    {
        q: "The government faced [strong] opposition to its tax reform proposals.",
        options: ['Indifferent', 'Apathetic', 'Passive', 'Vigorous'],
        answer: 3,
        explanation: "'Vigorous' means characterized by intellectual or political strength, upgrading 'strong'."
    },
    {
        q: "The art gallery exhibited a [varied] collection of modern sculptures.",
        options: ['Eclectic', 'Homogeneous', 'Monotonous', 'Uniform'],
        answer: 0,
        explanation: "'Eclectic' deriving ideas, style, or taste from a broad and diverse range of sources, upgrading 'varied'."
    },
    {
        q: "The CEO's [sudden] resignation shocked the corporate board.",
        options: ['Protracted', 'Gradual', 'Abrupt', 'Delayed'],
        answer: 2,
        explanation: "'Abrupt' means sudden and unexpected, upgrading 'sudden'."
    },
    {
        q: "The historical records provided [scarce] information about early medieval trade.",
        options: ['Prolific', 'Copious', 'Abundant', 'Meager'],
        answer: 3,
        explanation: "'Meager' means lacking in quantity or quality, upgrading 'scarce'."
    },
    {
        q: "The urban renewal project aimed to [revive] the decaying downtown district.",
        options: ['Rejuvenate', 'Obliterate', 'Demolish', 'Eradicate'],
        answer: 0,
        explanation: "'Rejuvenate' means to give new energy or vigor to, replacing 'revive'."
    },
    {
        q: "The researcher maintained a [neutral] stance during the clinical trial.",
        options: ['Biased', 'Partisan', 'Prejudiced', 'Impartial'],
        answer: 3,
        explanation: "'Impartial' means treating all rivals or disputants equally; fair and just, upgrading 'neutral'."
    },
    {
        q: "The artist expressed [deep] emotion through abstract brushstrokes.",
        options: ['Cursory', 'Shallow', 'Profound', 'Superficial'],
        answer: 2,
        explanation: "'Profound' means very great or intense, upgrading 'deep'."
    },
    {
        q: "The financial audit revealed [hidden] discrepancies in the company ledgers.",
        options: ['Transparent', 'Surreptitious', 'Conspicuous', 'Manifest'],
        answer: 1,
        explanation: "'Surreptitious' means kept secret, especially because it would not be approved of, replacing 'hidden'."
    },
    {
        q: "The community organized to [fight] against discriminatory housing policies.",
        options: ['Capitulate', 'Acquiesce', 'Surrender', 'Combat'],
        answer: 3,
        explanation: "'Combat' means to take action to reduce, destroy, or prevent something undesirable, upgrading 'fight'."
    },
    {
        q: "The startup secured [steady] funding from venture capital firms.",
        options: ['Reliable', 'Unstable', 'Erratic', 'Fluctuating'],
        answer: 0,
        explanation: "'Reliable' upgrades 'steady' in corporate financing contexts."
    },
    {
        q: "The legal team presented a [flawed] argument that failed to convince the judge.",
        options: ['Sound', 'Bulletproof', 'Fallacious', 'Impeccable'],
        answer: 2,
        explanation: "'Fallacious' means based on a mistaken belief or faulty logic, upgrading 'flawed'."
    },
    {
        q: "The university offers a [wide] range of postgraduate specialization courses.",
        options: ['Narrow', 'Diverse', 'Limited', 'Restricted'],
        answer: 1,
        explanation: "'Diverse' means showing a great deal of variety, upgrading 'wide'."
    },
    {
        q: "The weather forecast predicted [abrupt] changes in atmospheric pressure.",
        options: ['Constant', 'Unchanging', 'Erratic', 'Uniform'],
        answer: 2,
        explanation: "'Erratic' means unpredictable or inconsistent, upgrading 'abrupt'."
    },
    {
        q: "The committee reached a [unanimous] decision after hours of deliberation.",
        options: ['Consensus-based', 'Fractured', 'Contested', 'Divided'],
        answer: 0,
        explanation: "'Consensus-based' reflects total agreement among members."
    },
    {
        q: "The researcher maintained a [strict] adherence to ethical guidelines.",
        options: ['Lax', 'Rigid', 'Casual', 'Permissive'],
        answer: 1,
        explanation: "'Rigid' denotes uncompromising adherence to rules, replacing 'strict'."
    }
];
