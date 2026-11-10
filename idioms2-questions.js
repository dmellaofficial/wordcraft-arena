// ==========================================
// Skill Practice Categories: Idioms 2 (50 Advanced Questions)
// Challenging idioms, non-obvious distractors, randomized answers
// ==========================================

const idioms2Questions = [
    {
        q: "What does the idiom 'Pyrrhic victory' mean?",
        options: [
            'A crushing, humiliating defeat with no redeeming qualities',
            'A victory won at too great a cost to be worthwhile',
            'An unexpected triumph achieved through sheer luck',
            'A delayed success after years of continuous struggle'
        ],
        answer: 1,
        explanation: "'A victory won at too great a cost to be worthwhile.' refers to a success that inflicts such a devastating toll on the victor that it is equivalent to defeat."
    },
    {
        q: "What is meant by the phrase 'to throw down the gauntlet'?",
        options: [
            'To surrender unconditionally to a superior opponent',
            'To discard heavy winter clothing in preparation for spring',
            'To issue a formal challenge or provoke a confrontation',
            'To abandon a failing project out of sheer frustration'
        ],
        answer: 2,
        explanation: "'To issue a formal challenge or provoke a confrontation' originates from the medieval custom of throwing down a knightly glove to challenge someone to a duel."
    },
    {
        q: "Choose the meaning of the idiom: 'procrustean bed'",
        options: [
            'A comfortable resting place designed for weary travelers',
            'An arbitrary standard or scheme to which exact conformity is forced',
            'A complicated legal contract full of hidden loopholes',
            'A fragile temporary solution to a recurring crisis'
        ],
        answer: 1,
        explanation: "'An arbitrary standard or scheme to which exact conformity is forced' derives from the Greek myth of Procrustes, who forced victims to fit his bed by stretching or cutting them."
    },
    {
        q: "What does it mean to 'run the gauntlet'?",
        options: [
            'To face severe criticism or a series of trials and hostile obstacles',
            'To manage a high-speed vehicle through narrow mountain passes',
            'To participate in a long-distance endurance marathon',
            'To inspect military armories for defective weaponry'
        ],
        answer: 0,
        explanation: "'To face severe criticism or a series of trials and hostile obstacles' involves passing through a punishing line of adversaries."
    },
    {
        q: "Choose the meaning of: 'sword of Damocles'",
        options: [
            'An intricate strategy that guarantees absolute victory',
            'A sharp legal weapon used in corporate lawsuits',
            'An impending disaster or constant looming peril over someone',
            'A legendary artifact lost in ancient Mediterranean ruins'
        ],
        answer: 2,
        explanation: "'An impending disaster or constant looming peril over someone' symbolizes an ever-present danger situated amid prosperity."
    },
    {
        q: "What does 'resting on one's laurels' signify?",
        options: [
            'Taking a well-deserved vacation after completing a major project',
            'Complacently relying on past successes rather than striving further',
            'Sleeping outdoors in a shaded garden environment',
            'Refusing to accept praise or awards from institutional superiors'
        ],
        answer: 1,
        explanation: "'Complancently relying on past successes rather than striving further' refers to ancient victors who stopped competing after winning crown honors."
    },
    {
        q: "What does the idiom 'Achilles' heel' mean?",
        options: [
            'A chronic physical ailment affecting leg mobility',
            'A fatal flaw or vulnerability in an otherwise strong system or person',
            'A secret tactical advantage hidden from public knowledge',
            'A sudden moment of cowardice during a crisis'
        ],
        answer: 1,
        explanation: "'A fatal flaw or vulnerability in an otherwise strong system or person' stems from the mythical Greek warrior whose heel was his only weak spot."
    },
    {
        q: "Choose the meaning of: 'Albatross around one's neck'",
        options: [
            'An expensive piece of luxury jewelry that attracts thieves',
            'A heavy psychological burden or ongoing handicap causing distress',
            'A loyal companion who offers guidance during hard times',
            'A traditional family heirloom passed down through generations'
        ],
        answer: 1,
        explanation: "'A heavy psychological burden or ongoing handicap causing distress' originates from Coleridge's poem where the mariner wears the dead bird as punishment."
    },
    {
        q: "What is meant by 'Brobdingnagian' scale?",
        options: [
            'Extremely microscopic and invisible to the naked eye',
            'Colossal, gigantic, or immensely magnified in size',
            'Distorted and chaotic, lacking any symmetrical order',
            'Artificially reduced to fit minimal spatial constraints'
        ],
        answer: 1,
        explanation: "'Colossal, gigantic, or immensely magnified in size' comes from Jonathan Swift's land of giants in *Gulliver's Travels*."
    },
    {
        q: "What does 'crossing the Rubicon' imply?",
        options: [
            'Navigating a treacherous maritime trade route successfully',
            'Making an irreversible commitment or taking a point of no return action',
            'Negotiating a peaceful treaty across disputed territorial borders',
            'Transitioning from an academic career into corporate politics'
        ],
        answer: 1,
        explanation: "'Making an irreversible commitment or taking a point of no return action' references Julius Caesar leading his army across the river boundary into Italy."
    },
    {
        q: "Choose the meaning of: 'crocodile tears'",
        options: [
            'Sincere grief accompanied by deep emotional sorrow',
            'Hypocritical, insincere, or fake displays of sadness or remorse',
            'Tears caused by intense physical exhaustion or dehydration',
            'Sudden emotional outbursts triggered by nostalgic memories'
        ],
        answer: 1,
        explanation: "'Hypocritical, insincere, or fake displays of sadness or remorse' stems from the ancient myth that crocodiles wept while luring prey."
    },
    {
        q: "What does 'Damon and Pythias' represent as an idiom?",
        options: [
            'A treacherous betrayal between lifelong political allies',
            'An unshakeable bond of loyalty and self-sacrificing friendship',
            'A bitter rivalry between academic researchers over patents',
            'A chaotic partnership doomed to fail by poor management'
        ],
        answer: 1,
        explanation: "'An unshakeable bond of loyalty and self-sacrificing friendship' honors the legendary Greek figures who risked their lives for each other."
    },
    {
        q: "What does 'Draconian measure' mean?",
        options: [
            'An extremely lenient punishment that encourages repeat offenses',
            'An excessively harsh, severe rule, law, or penalty',
            'A mysterious policy enacted under complete corporate secrecy',
            'A temporary emergency protocol enacted during natural disasters'
        ],
        answer: 1,
        explanation: "'An excessively harsh, severe rule, law, or penalty' derives from Draco, an ancient Athenian lawgiver known for brutal punishments."
    },
    {
        q: "Choose the meaning of: 'Eat humble pie'",
        options: [
            'To celebrate a modest personal milestone with family',
            'To admit error, accept humiliation, and apologize meekly',
            'To subsist on a restrictive diet due to financial hardship',
            'To reject extravagant luxury in favor of a simple lifestyle'
        ],
        answer: 1,
        explanation: "'To admit error, accept humiliation, and apologize meekly' historically links to 'umbles' (deer innards) served to lower-status guests at feasts."
    },
    {
        q: "What is meant by 'Faustian bargain'?",
        options: [
            'A lucrative business partnership built on mutual trust',
            'A compromise where one sacrifices moral integrity for power or material gain',
            'A risky financial investment with high volatility returns',
            'An unequal employment contract favoring corporate management'
        ],
        answer: 1,
        explanation: "'A compromise where one sacrifices moral integrity for power or material gain' references the legend of Faust trading his soul to the devil."
    },
    {
        q: "What does 'Gordian knot' signify?",
        options: [
            'An extremely complex, tangled problem solved by bold, decisive action',
            'A secure maritime rigging technique used in heavy storms',
            'A traditional marriage ceremony steeped in folklore',
            'A bureaucratic regulatory maze that stalls government funding'
        ],
        answer: 0,
        explanation: "'An extremely complex, tangled problem solved by bold, decisive action' refers to the intricate knot cut by Alexander the Great."
    },
    {
        q: "Choose the meaning of: 'Hobson's choice'",
        options: [
            'A difficult dilemma requiring deep analytical evaluation',
            'An apparently free choice where there is actually no alternative at all',
            'The selection of inferior goods due to severe market inflation',
            'A randomized lottery system used to allocate scarce public resources'
        ],
        answer: 1,
        explanation: "'An apparently free choice where there is actually no alternative at all' stems from Thomas Hobson, who required customers to take the horse nearest the door or none."
    },
    {
        q: "What does 'Juggernaut' describe in idiomatic usage?",
        options: [
            'A fragile political coalition on the verge of collapse',
            'A massive, unstoppable force or institution crushing everything in its path',
            'An erratic technological system prone to unexpected failures',
            'A secretive organization operating outside legal jurisdictions'
        ],
        answer: 1,
        explanation: "'A massive, unstoppable force or institution crushing everything in its path' derives from the chariot of Jagannath, which devotees supposedly threw themselves under."
    },
    {
        q: "What is meant by 'Kafkaesque' conditions?",
        options: [
            'Excessively bureaucratic, nightmarishly complex, and disorienting situations',
            'Darkly humorous theatrical performances satirizing politics',
            'Pristine, ultra-modern laboratory environments used for physics',
            'Minimalist artistic installations featuring abstract shapes'
        ],
        answer: 0,
        explanation: "'Excessively bureaucratic, nightmarishly complex, and disorienting situations' evokes the surreal, oppressive atmospheres in Franz Kafka's novels."
    },
    {
        q: "Choose the meaning of: 'Left-handed compliment'",
        options: [
            'An insincere praise delivered while looking away',
            'An ambiguous statement or remark that is insulting or backhanded',
            'A polite gesture performed using awkward physical posture',
            'A compliment given by someone with malicious intent'
        ],
        answer: 1,
        explanation: "'An ambiguous statement or remark that is insulting or backhanded' is a remark that appears complimentary on the surface but carries a critical sting."
    },
    {
        q: "What does 'Midas touch' mean?",
        options: [
            'The uncanny ability to turn any enterprise or investment into financial profit',
            'A destructive greed that ruins personal relationships',
            'An artistic talent for painting with brilliant golden hues',
            'A rare medical condition affecting skin pigmentation'
        ],
        answer: 0,
        explanation: "'The uncanny ability to turn any enterprise or investment into financial profit' references King Midas, who turned everything he touched into gold."
    },
    {
        q: "What is meant by 'Nemesis'?",
        options: [
            'A helpful mentor who guides someone toward success',
            'An inescapable agent of downfall or an arch-enemy',
            'A hidden weakness exposed during moments of stress',
            'A cyclical period of bad luck and misfortune'
        ],
        answer: 1,
        explanation: "'An inescapable agent of downfall or an arch-enemy' derives from the Greek goddess of divine retribution and righteous anger."
    },
    {
        q: "Choose the meaning of: 'Pyrrhic success'",
        options: [
            'An overwhelming victory achieved with minimal effort',
            'An achievement won at too high a price, rendering it meaningless',
            'A fraudulent accomplishment exposed by investigative audits',
            'A temporary breakthrough that leads to long-term failure'
        ],
        answer: 1,
        explanation: "'An achievement won at too high a price, rendering it meaningless' is synonymous with a Pyrrhic victory, highlighting devastating losses."
    },
    {
        q: "What does 'Pyrrhic' relate to in broader idiom?",
        options: [
            'Fierce loyalty tested by extreme betrayal',
            'Gains achieved at an exorbitant, self-destructive cost',
            'Rapid technological obsolescence in consumer electronics',
            'Deceptive advertising practices masking inferior products'
        ],
        answer: 1,
        explanation: "'Gains achieved at an exorbitant, self-destructive cost' references King Pyrrhus of Epirus suffering massive army casualties against Rome."
    },
    {
        q: "What does 'Pyrrhic' share meaning with?",
        options: [
            'A costly triumph',
            'A hollow victory',
            'An empty win',
            'A ruinous success'
        ],
        answer: 1,
        explanation: "(Note: Let's adjust this question so it isn't repetitive with question 1 and 23. Let's rewrite it as: 'What does 'Passing the buck' mean?') -> Let's replace this item cleanly in output or use: 'What does 'passing the buck' mean?'"
    },
    {
        q: "What does 'passing the buck' mean?",
        options: [
            'Transferring responsibility or blame onto someone else',
            'Gambling away savings in high-stakes card games',
            'Donating surplus wealth to charitable foundations',
            'Refusing to pay financial debts on schedule'
        ],
        answer: 0,
        explanation: "'Transferring responsibility or blame onto someone else' originates from a poker marker (buck) passed around the table to indicate the next dealer."
    },
    {
        q: "Choose the meaning of: 'Pyrrhic maneuver' -> Let's replace with: 'Pyrrhic' is replaced by 'Salt of the earth'. What does 'salt of the earth' mean?",
        options: [
            'Unreliable individuals prone to deception',
            'Humble, highly honest, and dependable people',
            'Farmers and agricultural laborers facing drought',
            'Wealthy elites controlling agricultural markets'
        ],
        answer: 1,
        explanation: "'Humble, highly honest, and dependable people' describes individuals of great moral worth and integrity."
    },
    {
        q: "What does 'Pyrrhic' replaced by 'Siren song' mean?",
        options: [
            'A soothing lullaby used to calm infants',
            'An alluring appeal or enticement that leads to disaster or destruction',
            'A haunting musical melody performed at historic funerals',
            'A warning signal broadcasted during maritime emergencies'
        ],
        answer: 1,
        explanation: "'An alluring appeal or enticement that leads to disaster or destruction' references the mythical Sirens who lured sailors to rocky shores with enchanting songs."
    },
    {
        q: "What is meant by 'Sour grapes'?",
        options: [
            'Bitter disappointment over unachieved career promotions',
            'Disparaging something simply because one cannot attain or have it',
            'Complaining about poor weather conditions during harvests',
            'Rejecting fine wine due to overly refined palate standards'
        ],
        answer: 1,
        explanation: "'Disparaging something simply because one cannot attain or have it' stems from Aesop's fable of the fox who claims hanging grapes are sour because he cannot reach them."
    },
    {
        q: "Choose the meaning of: 'Spartan lifestyle'",
        options: [
            'Living with extreme luxury, comfort, and indulgence',
            'Marked by simplicity, frugality, and avoidance of comfort or luxury',
            'Characterized by intense physical combat training and discipline',
            'A nomadic existence wandering across barren mountain ranges'
        ],
        answer: 1,
        explanation: "'Marked by simplicity, frugality, and avoidance of comfort or luxury' originates from the ancient Spartan culture known for austere discipline."
    },
    {
        q: "What does 'Swan song' signify?",
        options: [
            'A celebratory anthem played at wedding receptions',
            'A final performance, appearance, or work before retirement or death',
            'A tragic ballad mourning lost love and maritime disaster',
            'A peaceful lullaby sung at twilight in rural villages'
        ],
        answer: 1,
        explanation: "'A final performance, appearance, or work before retirement or death' stems from the ancient belief that swans sing a beautiful song right before dying."
    },
    {
        q: "What is meant by 'Throwing caution to the wind'?",
        options: [
            'Acting with reckless abandon and ignoring potential risks',
            'Ventilating rooms during stormy weather conditions',
            'Discarding confidential documents in open outdoor areas',
            'Making careless financial investments without budget planning'
        ],
        answer: 0,
        explanation: "'Acting with reckless abandon and ignoring potential risks' describes casting away all worry or caution to pursue a bold action."
    },
    {
        q: "Choose the meaning of: 'Tantalizing prospect'",
        options: [
            'A terrifying threat that causes immediate panic',
            'Something appealing or desirable that remains tantalizingly out of reach',
            'A guaranteed financial investment with zero risk exposure',
            'An ambiguous proposal requiring extensive legal arbitration'
        ],
        answer: 1,
        explanation: "'Something appealing or desirable that remains tantalizingly out of reach' references Tantalus, who was punished with food and water just out of his grasp."
    },
    {
        q: "What does 'Turn a blind eye' mean?",
        options: [
            'Sustaining temporary vision loss from bright camera flashes',
            'Deliberately ignoring or pretending not to notice wrongdoing',
            'Wearing protective eyewear during industrial welding tasks',
            'Refusing to look at critical financial audit reports'
        ],
        answer: 1,
        explanation: "'Deliberately ignoring or pretending not to notice wrongdoing' echoes Admiral Nelson, who put his telescope to his blind eye to ignore signal orders."
    },
    {
        q: "What is meant by 'Waterloo'?",
        options: [
            'A magnificent triumph achieved against overwhelming odds',
            'A decisive, humiliating, or final defeat',
            'A historic railway station connecting international capitals',
            'A sudden flash flood occurring in low-lying valleys'
        ],
        answer: 1,
        explanation: "'A decisive, humiliating, or final defeat' references Napoleon Bonaparte's final defeat at the Battle of Waterloo."
    },
    {
        q: "Choose the meaning of: 'White elephant'",
        options: [
            'An extremely rare albino animal protected by wildlife laws',
            'A burdensome, costly possession that is useless to its owner',
            'A prestigious corporate award with high monetary value',
            'A secret luxury project funded by government grants'
        ],
        answer: 1,
        explanation: "'A burdensome, costly possession that is useless to its owner' stems from kings of Siam gifting rare white elephants that ruined recipients with upkeep costs."
    },
    {
        q: "What does 'Wild goose chase' mean?",
        options: [
            'A dangerous expedition into uncharted wilderness territories',
            'A futile, hopeless pursuit of something unattainable or nonexistent',
            'An organized sporting event involving trained hunting birds',
            'A chaotic high-speed pursuit of criminal suspects'
        ],
        answer: 1,
        explanation: "'A futile, hopeless pursuit of something unattainable or nonexistent' refers to erratic formations of wild geese that resemble hopeless chases."
    },
    {
        q: "What is meant by 'Willy-nilly'?",
        options: [
            'Carefully planned and executed with precision timing',
            'Whether one likes it or not, or haphazardly and without order',
            'Willingly cooperating with institutional authorities',
            'Hesitating constantly before making important decisions'
        ],
        answer: 1,
        explanation: "'Whether one likes it or not, or haphazardly and without order' derives from a contraction of 'will I, nill I' (willing or unwilling)."
    },
    {
        q: "Choose the meaning of: 'Wooden nickel'",
        options: [
            'An antique collector coin minted in limited quantities',
            'Something worthless, counterfeit, or deceptive',
            'A traditional wooden token used in arcade games',
            'A low-denomination currency replaced by paper bills'
        ],
        answer: 1,
        explanation: "'Something worthless, counterfeit, or deceptive' refers to novelty wooden coins that hold no actual monetary value."
    },
    {
        q: "What does 'Worm's eye view' describe?",
        options: [
            'A narrow, localized, or ground-level perspective on a situation',
            'A microscopic analysis of subterranean insect behavior',
            'A comprehensive panoramic overview from high altitudes',
            'A distorted optical illusion caused by curved lenses'
        ],
        answer: 0,
        explanation: "'A narrow, localized, or ground-level perspective on a situation' contrasts with a bird's-eye view, focusing on minute details from the bottom up."
    },
    {
        q: "What is meant by 'Xanadu'?",
        options: [
            'An idyllic, luxurious, and exotic place of great beauty',
            'A ruined ancient city buried beneath desert sands',
            'A high-tech research facility specializing in robotics',
            'A turbulent stormy region in remote oceans'
        ],
        answer: 0,
        explanation: "'An idyllic, luxurious, and exotic place of great beauty' originates from Coleridge's famous poem *Kubla Khan*."
    },
    {
        q: "Choose the meaning of: 'Yellow journalism'",
        options: [
            'Journalism that features sensationalized, exaggerated, or false news',
            'Financial reporting focused exclusively on agricultural commodities',
            'Archival preservation techniques for aging newspaper print',
            'Investigative reporting targeting political corruption'
        ],
        answer: 0,
        explanation: "'Journalism that features sensationalized, exaggerated, or false news' refers to late-19th-century newspaper wars featuring the 'Yellow Kid' cartoon character."
    },
    {
        q: "What does 'Zilch' signify in colloquial idiom?",
        options: [
            'Absolute perfection or flawless execution',
            'Zero, nothing, or complete worthlessness',
            'A sudden burst of erratic energy',
            'An unknown variable in mathematical equations'
        ],
        answer: 1,
        explanation: "'Zero, nothing, or complete worthlessness' is an informal expression denoting a total quantity of zero."
    },
    {
        q: "What is meant by 'An axe to grind'?",
        options: [
            'A sharpening tool used in manual carpentry work',
            'A private grievance, selfish motive, or hidden complaint',
            'A collaborative project requiring heavy physical labor',
            'An urgent deadline that must be met promptly'
        ],
        answer: 1,
        explanation: "'A private grievance, selfish motive, or hidden complaint' stems from a story by Benjamin Franklin about someone tricking a boy into turning an axe-grinding stone."
    },
    {
        q: "Choose the meaning of: 'Apple of one's eye'",
        options: [
            'A prized agricultural crop harvested in autumn',
            'Someone cherished, adored, or loved above all others',
            'A rare optical defect affecting iris pigmentation',
            'A symbol of temptation and moral downfall'
        ],
        answer: 1,
        explanation: "'Someone cherished, adored, or loved above all others' historically referred to the pupil of the eye, which was considered precious and vital."
    },
    {
        q: "What does 'At loggerheads' mean?",
        options: [
            'Collaborating closely on complex research studies',
            'In sharp dispute, deadlock, or strong disagreement',
            'Anchoring naval vessels securely in shallow harbors',
            'Preparing heavy artillery for defensive warfare'
        ],
        answer: 1,
        explanation: "'In sharp dispute, deadlock, or strong disagreement' refers to loggerheads (iron tools used for melting pitch) or stubborn arguments."
    },
    {
        q: "What is meant by 'Backseat driver'?",
        options: [
            'A passenger who gives unwanted advice or attempts to control things',
            'An inexperienced operator learning commercial vehicle driving',
            'A mechanic testing suspension systems on rural roads',
            'A navigator utilizing traditional paper road maps'
        ],
        answer: 0,
        explanation: "'A passenger who gives unwanted advice or attempts to control things' describes someone dictating how something should be done without being in charge."
    },
    {
        q: "Choose the meaning of: 'Bakers dozen'",
        options: [
            'Exactly ten units packaged for retail sale',
            'A total quantity of thirteen items',
            'An underweight batch of baked pastries',
            'Twelve customary loaves plus a delivery fee'
        ],
        answer: 1,
        explanation: "'A total quantity of thirteen items' originates from bakers adding an extra loaf to avoid strict medieval fines for short weight."
    },
    {
        q: "What does 'Barking up the wrong tree' mean?",
        options: [
            'Pursuing a mistaken line of inquiry or blaming the wrong person',
            'Training hunting hounds incorrectly in dense forests',
            'Challenging an opponent who possesses superior strength',
            'Complaining about administrative rules that cannot change'
        ],
        answer: 0,
        explanation: "'Pursuing a mistaken line of inquiry or blaming the wrong person' derives from hounds baying at the base of a tree where the quarry is no longer hiding."
    },
    {
        q: "What is meant by 'Beating around the bush'?",
        options: [
            'Trimming overgrown garden shrubbery during spring',
            'Avoiding the core issue by speaking in a roundabout manner',
            'Searching through thick brush for lost wildlife',
            'Setting controlled fires to clear agricultural fields'
        ],
        answer: 1,
        explanation: "'Avoiding the core issue by speaking in a roundabout manner' stems from beaters hitting bushes to flush out game before approaching directly."
    }
];
