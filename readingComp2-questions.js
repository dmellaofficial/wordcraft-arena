// ==========================================
// Skill Practice Categories: Reading Comprehension 2 (50 Advanced Questions)
// Analytical passages, challenging distractors, randomized answers
// ==========================================

const readingComp2Questions = [
    {
        q: "Passage: 'While traditional historiography frequently treats technological revolutions as singular eureka moments driven by solitary geniuses, recent socio-technical analyses emphasize that artifact adoption depends entirely on existing institutional inertia, economic incentives, and user-driven modification.' Question: According to the socio-technical perspective described, how should major technological innovations be understood?",
        options: [
            'As sudden intellectual breakthroughs by isolated inventors',
            'As outcomes heavily shaped by institutional frameworks and user adaptation',
            'As inevitable developments dictated purely by scientific laws',
            'As economic disruptions that eliminate all prior industrial infrastructure'
        ],
        answer: 1,
        explanation: "The passage emphasizes that adoption depends on institutional inertia, economic incentives, and user modification rather than isolated eureka moments."
    },
    {
        q: "Passage: 'The architect's decision to utilize board-formed concrete and rusted corten steel was not merely aesthetic; it was an intentional surrender to material weathering, inviting the surrounding forest canopy to reclaim the structure over decades.' Question: What was the primary motivation behind the architect's choice of materials?",
        options: [
            'To minimize construction expenses through low-cost industrial surplus',
            'To allow the building to naturally weather and blend with the surrounding environment',
            'To maximize thermal insulation against extreme winter temperatures',
            'To replicate the sleek minimalism of modern urban skyscrapers'
        ],
        answer: 1,
        explanation: "The text states the materials were an intentional surrender to weathering, inviting the forest to reclaim the structure."
    },
    {
        q: "Passage: 'Although fiscal policy adjustments successfully curbed short-term inflation, they inadvertently exacerbated income stratification by restricting liquidity in labor-intensive small-to-medium enterprises.' Question: What was an unintended consequence of the fiscal policy adjustments?",
        options: [
            'A permanent collapse of national banking institutions',
            'Widespread adoption of automated robotics in large corporations',
            'Increased income inequality due to funding constraints on smaller businesses',
            'An immediate surge in consumer purchasing power'
        ],
        answer: 2,
        explanation: "The passage notes that the policy exacerbated income stratification by restricting liquidity in labor-intensive smaller enterprises."
    },
    {
        q: "Passage: 'The ethnomusicologist argued that musical notation systems are inherently reductive, capturing pitch and rhythm while systematically failing to encode the micro-tonal inflections and community-specific performance contexts that give folk traditions their living meaning.' Question: According to the passage, what is a major limitation of traditional musical notation?",
        options: [
            'It is too expensive for rural communities to publish',
            'It omits cultural context and subtle micro-tonal inflections essential to folk music',
            'It requires complex digital software to interpret correctly',
            'It focuses exclusively on vocal performance rather than instrumentation'
        ],
        answer: 1,
        explanation: "The ethnomusicologist argues notation fails to encode micro-tonal inflections and living community contexts."
    },
    {
        q: "Passage: 'By eschewing linear chronology in favor of a fragmented, multi-perspective narrative structure, the author mimics the erratic nature of trauma recovery rather than offering a comforting, neat resolution.' Question: Why did the author choose a fragmented narrative structure?",
        options: [
            'To confuse critics and increase commercial book sales',
            'To reflect the irregular, non-linear psychological process of trauma recovery',
            'To keep the true identity of the antagonist hidden until the final chapter',
            'To adhere strictly to postmodern literary conventions'
        ],
        answer: 1,
        explanation: "The text explains that the structure mimics the erratic nature of trauma recovery instead of giving a neat resolution."
    },
    {
        q: "Passage: 'The conservation biologist warned that focusing solely on charismatic megafauna for fundraising neglects the foundational invertebrate populations that drive nutrient cycling and soil health.' Question: What critique does the biologist make regarding current conservation efforts?",
        options: [
            'They fail to secure adequate funding from corporate sponsors',
            'They rely too heavily on computer simulations rather than field observation',
            'They overemphasize popular large animals at the expense of crucial microscopic or invertebrate species',
            'They ignore the impact of climate change on marine ecosystems'
        ],
        answer: 2,
        explanation: "The biologist warns that focusing only on charismatic megafauna neglects foundational invertebrate populations driving soil health."
    },
    {
        q: "Passage: 'The philosopher posited that bureaucratic rationality, while efficient at organizing large-scale operations, strips human labor of intrinsic meaning, reducing individuals to interchangeable cogs.' Question: What is the philosopher's critique of bureaucratic rationality?",
        options: [
            'It causes frequent logistical delays in government administration',
            'It dehumanizes work by eliminating its intrinsic human meaning',
            'It is too expensive to maintain in developing economies',
            'It discourages technological innovation and digital automation'
        ],
        answer: 1,
        explanation: "The text states it strips human labor of intrinsic meaning, reducing individuals to interchangeable cogs."
    },
    {
        q: "Passage: 'Despite extensive neuroimaging data mapping localized brain activation during ethical dilemmas, reductionist theories still fail to account for how subjective cultural conditioning alters moral decision-making.' Question: What limitation of neuroimaging studies is highlighted in the passage?",
        options: [
            'They cannot measure electrical activity in real time',
            'They are prohibitively expensive for most academic research groups',
            'They overlook how cultural background influences moral choices',
            'They rely on outdated psychological models of memory'
        ],
        answer: 2,
        explanation: "The passage notes that reductionist theories fail to account for how subjective cultural conditioning alters moral choices."
    },
    {
        q: "Passage: 'The museum curator opted for sparse, minimalist exhibition layouts with extensive negative space, deliberately forcing visitors to confront individual artifacts as singular historical statements rather than overwhelming them with encyclopedic data.' Question: What was the curator's design strategy for the exhibition?",
        options: [
            'To display as many cataloged items as possible within a tight gallery space',
            'To use negative space to encourage focused contemplation of individual artifacts',
            'To replace physical artifacts with digital holographic projections',
            'To reduce operational electricity costs in the display rooms'
        ],
        answer: 1,
        explanation: "The curator used negative space to force visitors to confront individual artifacts as singular historical statements."
    },
    {
        q: "Passage: 'Epigenetic research demonstrates that environmental stressors can alter gene expression across generations without modifying the underlying DNA sequence, complicating traditional Darwinian inheritance models.' Question: How does epigenetics modify classical evolutionary understanding?",
        options: [
            'By proving that genetic mutations occur entirely at random',
            'By showing that environmental experiences can influence gene expression across generations',
            'By demonstrating that DNA sequences mutate rapidly within a single lifespan',
            'By proving that natural selection is the sole driver of biological diversity'
        ],
        answer: 1,
        explanation: "The text explains that environmental stressors alter gene expression across generations without changing DNA sequences."
    },
    {
        q: "Passage: 'The satirical essay weaponized hyperbole and feigned naivety to expose the absurd contradictions underlying contemporary corporate wellness initiatives.' Question: What was the author's primary rhetorical method in the essay?",
        options: [
            'Rigorous statistical analysis of corporate health insurance claims',
            'Emotional appeals focusing on employee burnout rates',
            'Exaggeration and feigned innocence to highlight absurd contradictions',
            'Direct interviews with human resource executives'
        ],
        answer: 2,
        explanation: "The passage notes the use of hyperbole (exaggeration) and feigned naivety to expose contradictions."
    },
    {
        q: "Passage: 'The linguistic relativity hypothesis suggests that the grammatical structures of a native language subtly constrain and shape how speakers categorize spatial relationships and time.' Question: What does the linguistic relativity hypothesis propose?",
        options: [
            'All human languages share a universal underlying grammar',
            'Language grammar influences how speakers perceive time and space',
            'Vocabulary size directly determines cognitive intelligence',
            'Written languages evolve faster than spoken dialects'
        ],
        answer: 1,
        explanation: "The hypothesis suggests grammatical structures constrain and shape how speakers categorize space and time."
    },
    {
        q: "Passage: 'The paleoclimatologist analyzed isotopic ratios in stalagmites from deep limestone caves, reconstructing precipitation patterns spanning millennia with remarkable temporal fidelity.' Question: How did the researcher reconstruct ancient climate patterns?",
        options: [
            'By examining tree-ring growth widths in petrified forests',
            'By analyzing chemical isotopes found in cave stalagmites',
            'By translating ancient agricultural harvest records',
            'By measuring sediment layers at the bottom of desert lakes'
        ],
        answer: 1,
        explanation: "The text states the researcher analyzed isotopic ratios in stalagmites from deep caves."
    },
    {
        q: "Passage: 'The legal scholar argued that mandatory arbitration clauses in consumer contracts effectively privatize justice, shielding corporations from public accountability.' Question: What is the scholar's main objection to mandatory arbitration clauses?",
        options: [
            'They cause severe court backlogs for civil lawsuits',
            'They restrict consumer access to public accountability and courts',
            'They increase legal fees for small-business owners',
            'They violate international trade agreements'
        ],
        answer: 1,
        explanation: "The scholar argues they privatize justice and shield corporations from public accountability."
    },
    {
        q: "Passage: 'The playwright subverted dramatic convention by having characters speak directly to the audience while maintaining the illusion of their internal emotional isolation.' Question: How did the play break traditional theatrical norms?",
        options: [
            'By removing all musical accompaniment and sound effects',
            'By combining direct audience address with themes of emotional isolation',
            'By forcing actors to improvise their lines during every performance',
            'By staging productions outdoors without artificial lighting'
        ],
        answer: 1,
        explanation: "The passage notes characters spoke directly to the audience while maintaining internal emotional isolation."
    },
    {
        q: "Passage: 'The sociological study revealed that urban gentrification often displaces long-term residents not through direct eviction, but through insidious tax increases and commercial homogenization.' Question: According to the study, how does gentrification primarily displace residents?",
        options: [
            'Through sudden physical demolition of residential complexes',
            'Through indirect pressures like rising taxes and commercial changes',
            'Through government-mandated zoning reclassifications',
            'Through industrial pollution forcing voluntary migration'
        ],
        answer: 1,
        explanation: "The study states displacement occurs through tax increases and commercial homogenization rather than direct eviction."
    },
    {
        q: "Passage: 'The theoretical physicist cautioned that treating mathematics as an infallible map of physical reality risks confusing abstract models with empirical phenomena.' Question: What warning does the physicist give?",
        options: [
            'Mathematical equations are often filled with calculation errors',
            'Abstract mathematical models should not be mistaken for actual physical reality',
            'Physics research is overly dependent on government grant funding',
            'Experimental laboratories cannot test theoretical hypotheses'
        ],
        answer: 1,
        explanation: "The physicist cautions against confusing abstract models with empirical phenomena."
    },
    {
        q: "Passage: 'The agricultural cooperative implemented regenerative grazing practices, utilizing dense livestock herds to mimic wild ruminants, thereby restoring soil carbon and water retention.' Question: What was the primary ecological goal of the cooperative's grazing strategy?",
        options: [
            'To increase milk production per dairy cow',
            'To restore soil carbon and improve water retention',
            'To eliminate the need for livestock fencing',
            'To prevent the spread of avian flu in pastures'
        ],
        answer: 1,
        explanation: "The passage states the practice restored soil carbon and water retention."
    },
    {
        q: "Passage: 'The art historian noted that the avant-garde movement's rejection of traditional perspective was an ideological assault on bourgeois individualism rather than a mere technical experiment.' Question: How does the historian interpret avant-garde rejection of perspective?",
        options: [
            'As an attack on bourgeois individualism',
            'As a mistake caused by poor drafting skills',
            'As an attempt to lower the cost of canvas production',
            'As an effort to imitate primitive cave paintings'
        ],
        answer: 0,
        explanation: "The text characterizes it as an ideological assault on bourgeois individualism."
    },
    {
        q: "Passage: 'The macroeconomist argued that gross domestic product (GDP) fails to measure societal well-being because it treats environmental destruction and crime remediation as economic growth.' Question: Why does the economist criticize GDP as a metric?",
        options: [
            'It is calculated using inaccurate census data',
            'It ignores international trade tariffs and exchange rates',
            'It counts negative events like environmental damage and crime as positive growth',
            'It only measures manufacturing output while ignoring service sectors'
        ],
        answer: 2,
        explanation: "The passage states GDP treats environmental destruction and crime remediation as economic growth."
    },
    {
        q: "Passage: 'The evolutionary biologist suggested that altruistic behavior in social insects is maintained because colony survival supersedes individual genetic transmission.' Question: Why does altruism persist in social insects according to the biologist?",
        options: [
            'Individual insects possess conscious moral reasoning',
            'Colony survival outweighs individual genetic transmission',
            'Predators actively avoid altruistic members of a swarm',
            'Food sources are distributed evenly among all larvae'
        ],
        answer: 1,
        explanation: "The text notes that colony survival supersedes individual genetic transmission."
    },
    {
        q: "Passage: 'The novelist's late-career works are characterized by a deliberate syntactic opacity, baffling critics who preferred the lucid, straightforward prose of her early novels.' Question: How do the author's late-career works differ from her early writings?",
        options: [
            'They are written in foreign languages for international markets',
            'They feature complex, opaque sentence structures instead of lucid prose',
            'They focus on historical biographies rather than fiction',
            'They are much shorter and marketed as children's literature'
        ],
        answer: 1,
        explanation: "The passage contrasts her lucid early prose with deliberate syntactic opacity in her late works."
    },
    {
        q: "Passage: 'The cognitive scientist demonstrated that human memory is reconstructive rather than archival, meaning we actively build narratives upon retrieval rather than playing back exact recordings.' Question: How does human memory function according to the scientist?",
        options: [
            'Like a video camera storing exact audiovisual recordings',
            'Like a computer hard drive with permanent sector storage',
            'Like a reconstructive process that builds narratives upon retrieval',
            'Like an unchangeable written archive of past events'
        ],
        answer: 2,
        explanation: "The text states memory is reconstructive, building narratives upon retrieval rather than playing back recordings."
    },
    {
        q: "Passage: 'The urban planner criticized zoning laws that enforce strict automobile dependency, arguing they artificially inflate housing costs and fracture community cohesion.' Question: What negative impacts are attributed to car-centric zoning laws?",
        options: [
            'Higher housing costs and fractured community cohesion',
            'Excessive municipal spending on public rail networks',
            'Increased pedestrian traffic clogging commercial districts',
            'Frequent structural damage to underground water pipes'
        ],
        answer: 0,
        explanation: "The planner argues they artificially inflate housing costs and fracture community cohesion."
    },
    {
        q: "Passage: 'The literary critic observed that the protagonist's silence throughout the climax was an eloquent repudiation of the hollow rhetoric dominating political discourse.' Question: What did the protagonist's silence signify?",
        options: [
            'A total lack of comprehension regarding the political debate',
            'A rejection of the hollow rhetoric dominating political discourse',
            'Fear of public speaking in front of legislative assemblies',
            'Agreement with the antagonist's ideological arguments'
        ],
        answer: 1,
        explanation: "The critic observed the silence was an eloquent repudiation of hollow political rhetoric."
    },
    {
        q: "Passage: 'The paleobotanist discovered fossilized stomatal density variations that provided high-resolution proxies for tracking atmospheric carbon dioxide levels millions of years ago.' Question: How did the paleobotanist track ancient carbon dioxide levels?",
        options: [
            'By measuring chemical residues in amber drops',
            'By analyzing stomatal density variations in fossilized leaves',
            'By counting rings in fossilized tree stumps',
            'By evaluating mineral deposits in riverbeds'
        ],
        answer: 1,
        explanation: "The passage states they used fossilized stomatal density variations as proxies for tracking carbon dioxide."
    },
    {
        q: "Passage: 'The policy analyst argued that performance metrics in education often create perverse incentives, encouraging institutions to teach to the test rather than foster critical thinking.' Question: What flaw does the analyst find in educational performance metrics?",
        options: [
            'They are too expensive to administer nationwide',
            'They create perverse incentives to teach to the test rather than build critical thinking',
            'They favor rural schools over urban academies',
            'They cause students to drop out of school prematurely'
        ],
        answer: 1,
        explanation: "The analyst argues they create perverse incentives, encouraging teaching to the test over critical thinking."
    },
    {
        q: "Passage: 'The phenomenological philosopher argued that emotional states are not merely internal brain events, but lived bodily orientations toward the world.' Question: How does phenomenology view emotions?",
        options: [
            'As chemical imbalances correctable by pharmaceuticals',
            'As lived bodily orientations toward the world',
            'As logical calculations made by subconscious reasoning',
            'As evolutionary triggers for physical flight'
        ],
        answer: 1,
        explanation: "The text defines emotions as lived bodily orientations toward the world."
    },
    {
        q: "Passage: 'The historian noted that the medieval guild system served as both an economic monopoly and a social welfare network for master artisans and apprentices.' Question: What dual function did the medieval guild system fulfill?",
        options: [
            'Military defense and religious worship',
            'Economic monopoly and social welfare network',
            'Agricultural production and tax collection',
            'Political governance and judicial punishment'
        ],
        answer: 1,
        explanation: "The historian notes it served as both an economic monopoly and a social welfare network."
    },
    {
        q: "Passage: 'The marine ecologist emphasized that deep-sea mining threatens fragile benthic ecosystems that take millennia to recover from physical disturbance.' Question: Why are benthic ecosystems particularly vulnerable to deep-sea mining?",
        options: [
            'They are home to aggressive predatory fish species',
            'They take millennia to recover from physical disturbance',
            'They generate toxic gases when exposed to sunlight',
            'They lack any microscopic bacterial life'
        ],
        answer: 1,
        explanation: "The passage states benthic ecosystems take millennia to recover from physical disturbance."
    },
    {
        q: "Passage: 'The literary theorist argued that genre conventions are not rigid boxes, but dynamic horizons of expectation that writers constantly negotiate and subvert.' Question: How does the theorist view genre conventions?",
        options: [
            'As strict rules that destroy artistic creativity',
            'As dynamic horizons of expectation that are negotiated and subverted',
            'As outdated classifications invented by booksellers',
            'As universal structures found in all human languages'
        ],
        answer: 1,
        explanation: "The theorist views them as dynamic horizons of expectation that writers negotiate and subvert."
    },
    {
        q: "Passage: 'The sociologist demonstrated that moral panics over new media technologies consistently reflect adult anxieties about generational loss of control rather than actual harm.' Question: What do moral panics over new technologies truly represent according to the sociologist?",
        options: [
            'Objective statistical threats to public safety',
            'Adult anxieties regarding a generational loss of control',
            'Corporate conspiracies to sell software upgrades',
            'Scientific consensus on neurological damage'
        ],
        answer: 1,
        explanation: "The sociologist demonstrates they reflect adult anxieties about generational loss of control."
    },
    {
        q: "Passage: 'The astronomer explained that viewing distant celestial objects is an act of looking backward in time, because finite light speeds delay photons from reaching our telescopes.' Question: Why does observing distant space objects involve looking back in time?",
        options: [
            'Telescopes record archival footage of historical star formations',
            'Finite light speeds delay photons in reaching our telescopes',
            'Gravitational fields bend time around massive galaxies',
            'Light travels backward when passing through cosmic dust clouds'
        ],
        answer: 1,
        explanation: "The text explains finite light speeds delay photons from reaching telescopes."
    },
    {
        q: "Passage: 'The political theorist argued that populist movements thrive by polarizing social complexity into an antagonistic binary between a pure populace and a corrupt elite.' Question: How do populist movements operate according to the theorist?",
        options: [
            'By promoting complex bipartisan legislative compromises',
            'By polarizing social complexity into a binary between a pure populace and corrupt elite',
            'By encouraging technocratic governance by academic experts',
            'By dissolving national borders to foster global unity'
        ],
        answer: 1,
        explanation: "The theorist argues they polarize social complexity into an antagonistic binary between a pure populace and corrupt elite."
    },
    {
        q: "Passage: 'The art conservator used infrared reflectography to uncover an earlier composition hidden beneath the surface of the oil painting.' Question: How did the conservator discover the hidden painting layer?",
        options: [
            'By stripping away the top varnish with chemical solvents',
            'Using infrared reflectography to reveal underdrawings',
            'By examining brushstroke textures under an electron microscope',
            'Using ultraviolet light to detect mold damage'
        ],
        answer: 1,
        explanation: "The text states the conservator used infrared reflectography to uncover the hidden composition."
    },
    {
        q: "Passage: 'The evolutionary psychologist suggested that risk-taking behavior in adolescent males evolved as a costly signaling mechanism to demonstrate physical vigor to potential mates.' Question: What is the evolutionary function of adolescent male risk-taking according to the text?",
        options: [
            'To secure leadership roles within tribal hierarchies',
            'To demonstrate physical vigor as a costly signaling mechanism to mates',
            'To accelerate neurological maturation during puberty',
            'To drive territorial expansion into enemy domains'
        ],
        answer: 1,
        explanation: "The passage suggests it evolved as a costly signaling mechanism to demonstrate physical vigor to potential mates."
    },
    {
        q: "Passage: 'The economist argued that technological unemployment is not a permanent state, but rather a transitional friction as labor reallocates toward newly created industries.' Question: How does the economist view technological unemployment?",
        options: [
            'As an permanent economic crisis requiring universal basic income',
            'As a temporary transitional friction while labor shifts to new industries',
            'As a myth invented by labor union leaders',
            'As an inevitable consequence of population decline'
        ],
        answer: 1,
        explanation: "The economist views it as transitional friction as labor reallocates toward new industries."
    },
    {
        q: "Passage: 'The linguist analyzed how pitch accents in tone languages carry semantic weight, meaning a change in vocal inflection completely alters word definitions.' Question: What is the role of pitch accents in tone languages?",
        options: [
            'They indicate the emotional mood of the speaker',
            'They carry semantic weight where vocal inflection alters word definitions',
            'They signal the end of a declarative sentence',
            'They differentiate formal speech from casual slang'
        ],
        answer: 1,
        explanation: "The text notes pitch accents carry semantic weight where inflection alters definitions."
    },
    {
        q: "Passage: 'The historian emphasized that the Scientific Revolution was not a secular rupture from religion, but was deeply intertwined with alchemical and hermetic mysticism.' Question: What relationship existed between the Scientific Revolution and religion according to the historian?",
        options: [
            'Science completely eradicated religious belief in Europe',
            'Scientific inquiry was strictly prohibited by ecclesiastical courts',
            'The Scientific Revolution was intertwined with alchemical and hermetic mysticism',
            'Scientists relied exclusively on secular empirical philosophy'
        ],
        answer: 2,
        explanation: "The historian emphasizes it was intertwined with alchemical and hermetic mysticism rather than being a clean secular rupture."
    },
    {
        q: "Passage: 'The legal philosopher argued that retributive justice models prioritize vengeance over rehabilitation, failing to reduce systemic recidivism rates.' Question: What is a primary critique of retributive justice systems?",
        options: [
            'They are too lenient on violent offenders',
            'They prioritize vengeance over rehabilitation and fail to lower recidivism',
            'They require excessive government funding for prison construction',
            'They abolish jury trials in favor of judicial panels'
        ],
        answer: 1,
        explanation: "The philosopher argues they prioritize vengeance over rehabilitation and fail to reduce recidivism."
    },
    {
        q: "Passage: 'The climatologist noted that melting Arctic permafrost releases trapped methane hydrates, creating a dangerous positive feedback loop that accelerates global warming.' Question: How does melting Arctic permafrost impact global warming?",
        options: [
            'By reflecting sunlight away from polar ice caps',
            'By creating a positive feedback loop through released methane hydrates',
            'By cooling ocean currents in the North Atlantic',
            'By absorbing excess carbon dioxide from the atmosphere'
        ],
        answer: 1,
        explanation: "The passage notes it releases trapped methane hydrates, creating a positive feedback loop that accelerates warming."
    },
    {
        q: "Passage: 'The epistemologist questioned whether empirical data alone can validate scientific theories, given that observation is always theory-laden.' Question: What philosophical challenge does theory-laden observation pose to science?",
        options: [
            'It proves that science cannot discover absolute truths',
            'It suggests observation is influenced by prior theoretical frameworks',
            'It makes laboratory experiments impossible to replicate',
            'It eliminates the need for mathematical equations'
        ],
        answer: 1,
        explanation: "The text questions whether empirical data alone validates theories because observation is theory-laden."
    },
    {
        q: "Passage: 'The literary scholar identified pastoral poetry not as a realistic depiction of rural simplicity, but as an urban fantasy created by city dwellers escaping political strife.' Question: How does the scholar characterize pastoral poetry?",
        options: [
            'As an accurate ethnographic record of peasant farming',
            'As an urban fantasy crafted by city dwellers fleeing political turmoil',
            'As religious hymns dedicated to agricultural harvest deities',
            'As political propaganda commissioned by monarchs'
        ],
        answer: 1,
        explanation: "The scholar characterizes it as an urban fantasy created by city dwellers escaping political strife."
    },
    {
        q: "Passage: 'The sociologist observed that modern social media algorithms monetize outrage, systematically prioritizing polarizing content to maximize user engagement time.' Question: How do social media algorithms maximize user engagement?",
        options: [
            'By promoting educational science documentaries',
            'By monetizing outrage and prioritizing polarizing content',
            'By filtering out political news entirely',
            'By encouraging offline community meetups'
        ],
        answer: 1,
        explanation: "The sociologist observes they monetize outrage, prioritizing polarizing content to maximize time."
    },
    {
        q: "Passage: 'The neuroscientist explained that phantom limb pain occurs when the somatosensory cortex reorganizes itself after amputation, misinterpreting neural signals as agony.' Question: What causes phantom limb pain according to the text?",
        options: [
            'Lingering infection in surgical wound sites',
            'Reorganization of the somatosensory cortex leading to misinterpreted signals',
            'Increased blood pressure in remaining muscle tissue',
            'Psychological trauma unrelated to physical nerves'
        ],
        answer: 1,
        explanation: "The passage attributes it to the somatosensory cortex reorganizing itself and misinterpreting neural signals."
    },
    {
        q: "Passage: 'The architectural historian argued that brutalist concrete structures were designed as socialist monuments to egalitarian public welfare rather than oppressive monstrosities.' Question: How does the historian view brutalist architecture?",
        options: [
            'As costly failures in structural engineering',
            'As socialist monuments symbolizing egalitarian public welfare',
            'As temporary military fortifications built during wartime',
            'As elite private mansions designed for wealthy aristocrats'
        ],
        answer: 1,
        explanation: "The historian argues they were designed as socialist monuments to egalitarian public welfare."
    },
    {
        q: "Passage: 'The developmental psychologist noted that children acquire language through social interaction and pragmatic immersion rather than mere mechanical imitation of adult speech.' Question: How do children acquire language according to the psychologist?",
        options: [
            'Through rote memorization of dictionary vocabularies',
            'Through social interaction and pragmatic immersion',
            'Through direct genetic programming at birth',
            'Through silent reading of instructional texts'
        ],
        answer: 1,
        explanation: "The text states children acquire language through social interaction and pragmatic immersion rather than mechanical imitation."
    },
    {
        q: "Passage: 'The philosopher of science argued that paradigm shifts do not occur through gradual accumulation of facts, but through abrupt conceptual revolutions where old and new frameworks become incommensurable.' Question: How do scientific paradigm shifts happen according to the passage?",
        options: [
            'Through slow, continuous accumulation of empirical data',
            'Through abrupt conceptual revolutions creating incommensurable frameworks',
            'Through government decree and funding adjustments',
            'Through the elimination of all theoretical physics'
        ],
        answer: 1,
        explanation: "The philosopher argues they occur through abrupt conceptual revolutions where frameworks are incommensurable."
    },
    {
        q: "Passage: 'The cultural anthropologist observed that gift-giving in the studied community created webs of social obligation rather than altruistic charity, because gifts always demanded reciprocal return.' Question: What is the primary social function of gift-giving in this community?",
        options: [
            'To eliminate wealth accumulation and establish total equality',
            'To establish webs of social obligation through required reciprocity',
            'To religious deities during harvest ceremonies',
            'To trade surplus food for foreign weapons'
        ],
        answer: 1,
        explanation: "The anthropologist observed that gifts created webs of social obligation because they demanded reciprocal return."
    },
    {
        q: "Passage: 'The literary critic noted that the novel's unreliable narrator exposed the fragility of historical memory by contradicting official archives with fragmented personal testimony.' Question: What does the unreliable narrator's testimony highlight?",
        options: [
            'The absolute infallibility of government archives',
            'The fragility of historical memory by contradicting official records',
            'The impossibility of writing fiction about real wars',
            'The superiority of oral history over written books'
        ],
        answer: 1,
        explanation: "The critic notes the narrator exposed the fragility of historical memory by contradicting official archives."
    }
];
