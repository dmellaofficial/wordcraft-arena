// ==========================================
// Skill Practice Categories: Reading Comprehension (60 Questions)
// Unique passages, balanced options, non-revealing distractors, shuffled answers
// ==========================================

const readingCompQuestions = [
    {
        q: "Passage: 'Despite the harsh winter conditions, the small alpine village thrived through community cooperation, sharing firewood and preserved rations until the spring thaw arrived.' Question: According to the passage, how did the village survive the winter?",
        options: [
            'By trading livestock with neighboring towns',
            'By migrating to lower altitudes before the snow fell',
            'Through community cooperation and sharing resources',
            'Through emergency aid shipments from the government'
        ],
        answer: 2,
        explanation: "The passage explicitly credits community cooperation, sharing firewood, and preserved rations for their survival."
    },
    {
        q: "Passage: 'Unlike traditional painting methods that rely heavily on oils and slow drying times, modern digital illustrators utilize pressure-sensitive tablets to instantly layer colors, blend textures, and correct errors with a single keystroke.' Question: What is the primary contrast highlighted in the passage?",
        options: [
            'The difference in drying times and error correction between mediums',
            'The high cost of digital tablets versus traditional canvas',
            'The skill gap between professional and amateur artists',
            'The superiority of abstract art over realism'
        ],
        answer: 0,
        explanation: "The passage contrasts the slow drying times of traditional oil painting with the instant layering and error correction of digital tablets."
    },
    {
        q: "Passage: 'Urban rooftop gardens have transformed barren concrete spaces into vibrant green sanctuaries, significantly lowering ambient building temperatures while providing fresh local produce.' Question: Which of the following is a direct benefit of rooftop gardens mentioned in the text?",
        options: [
            'Generating solar electricity for residential units',
            'Eliminating the need for municipal water supplies',
            'Completely stopping urban noise pollution',
            'Lowering ambient building temperatures'
        ],
        answer: 3,
        explanation: "The text specifically states that rooftop gardens lower ambient building temperatures."
    },
    {
        q: "Passage: 'The historical manuscript was preserved for centuries within a climate-controlled vault, protecting its delicate parchment pages from humidity and ultraviolet light degradation.' Question: Why was the manuscript kept in a climate-controlled vault?",
        options: [
            'To protect delicate parchment from humidity and light',
            'To allow public visitors to read it safely',
            'To accelerate the natural aging of the ink',
            'To prevent theft by rival collectors'
        ],
        answer: 0,
        explanation: "The passage states the vault protected its delicate parchment pages from humidity and ultraviolet light degradation."
    },
    {
        q: "Passage: 'Marine biologists observed that coral reef bleaching is primarily driven by rising ocean temperatures, which force corals to expel the symbiotic algae living inside their tissues.' Question: What triggers coral reef bleaching according to the observation?",
        options: [
            'Overfishing of herbivorous reef species',
            'Rising ocean temperatures',
            'Pollution from coastal industrial factories',
            'Excessive ultraviolet radiation from space'
        ],
        answer: 1,
        explanation: "The passage attributes coral bleaching primarily to rising ocean temperatures."
    },
    {
        q: "Passage: 'While early astronomy focused heavily on naked-eye celestial navigation and charting planetary orbits, modern astrophysics delves into invisible phenomena like dark matter and gravitational waves.' Question: How has the focus of astronomy changed over time?",
        options: [
            'It shifted entirely away from planetary observation to astrology',
            'It moved from practical navigation to studying invisible cosmic phenomena',
            'It became exclusively focused on weather forecasting',
            'It abandoned theoretical physics in favor of telescope manufacturing'
        ],
        answer: 1,
        explanation: "The text contrasts early naked-eye celestial charting with modern astrophysics studying dark matter and gravitational waves."
    },
    {
        q: "Passage: 'The architect integrated large southern-facing windows into the office design, maximizing natural sunlight and drastically reducing artificial lighting costs during winter.' Question: What was the primary purpose of the large southern-facing windows?",
        options: [
            'To allow rainwater collection during storms',
            'To maximize natural sunlight and cut lighting expenses',
            'To provide panoramic mountain views for employees',
            'To maximize natural sunlight and reduce heating costs'
        ],
        answer: 1,
        explanation: "The passage notes they maximized natural sunlight and drastically reduced artificial lighting costs."
    },
    {
        q: "Passage: 'Despite initial skepticism from local merchants, the pedestrianized downtown zone resulted in a thirty percent increase in foot traffic and weekend shoppers.' Question: What was the ultimate outcome of pedestrianizing the downtown zone?",
        options: [
            'A thirty percent increase in foot traffic and shoppers',
            'A sharp decline in overall commercial revenue',
            'The permanent closure of major retail stores',
            'An increase in traffic congestion on side streets'
        ],
        answer: 0,
        explanation: "The text notes a thirty percent increase in foot traffic and weekend shoppers despite early skepticism."
    },
    {
        q: "Passage: 'The symphony orchestra practiced tirelessly for months, balancing delicate woodwind melodies with thunderous brass cues to achieve a cohesive, emotional performance.' Question: What contributed to the orchestra's success?",
        options: [
            'Performing without a conductor for the first time',
            'Focusing exclusively on brass arrangements',
            'Months of tireless practice balancing instrument sections',
            'Using newly invented musical instruments'
        ],
        answer: 2,
        explanation: "The passage highlights that they practiced tirelessly for months, balancing woodwinds and brass."
    },
    {
        q: "Passage: 'Microplastics have permeated deep-sea ecosystems, accumulating in the digestive tracts of microscopic zooplankton and threatening the foundation of marine food webs.' Question: Why are microplastics dangerous to deep-sea ecosystems?",
        options: [
            'They accumulate in zooplankton, threatening food webs',
            'They block sunlight from reaching deep trenches',
            'They tangle around coral reefs and block currents',
            'They dissolve into toxic acids that boil water'
        ],
        answer: 0,
        explanation: "The passage states they accumulate in zooplankton's digestive tracts, threatening the foundation of marine food webs."
    },
    {
        q: "Passage: 'The ancient trade route was not merely a channel for silk and spices; it served as a vital bridge for exchanging philosophies, religious beliefs, and scientific inventions between East and West.' Question: According to the passage, what else did the trade route facilitate besides physical goods?",
        options: [
            'The exchange of philosophies, beliefs, and inventions',
            'The establishment of unified political empires',
            'The migration of nomadic farming tribes',
            'The standardization of global currency'
        ],
        answer: 0,
        explanation: "The text highlights the exchange of philosophies, religious beliefs, and scientific inventions."
    },
    {
        q: "Passage: 'Behavioral economists found that consumers often make financial decisions based on immediate emotional cues rather than long-term mathematical calculations.' Question: What influences consumer financial decisions according to behavioral economists?",
        options: [
            'Strict adherence to mathematical spreadsheets',
            'Immediate emotional cues rather than long-term math',
            'Peer pressure from corporate advertisers',
            'Government tax policies and inflation rates'
        ],
        answer: 1,
        explanation: "The passage notes decisions are based on immediate emotional cues rather than long-term calculations."
    },
    {
        q: "Passage: 'The nocturnal desert fox relies on its oversized ears not only to detect subterranean prey but also to dissipate excess body heat during scorching days.' Question: What is one dual function of the desert fox's oversized ears?",
        options: [
            'Filtering blowing sand and storing water reserves',
            'Sensing underground prey and shedding body heat',
            'Attracting mates and maintaining physical balance',
            'Communicating across long distances and digging burrows'
        ],
        answer: 1,
        explanation: "The passage explains they detect subterranean prey and dissipate excess body heat."
    },
    {
        q: "Passage: 'By converting agricultural organic waste into biogas, rural communities can generate clean cooking fuel while significantly reducing methane emissions.' Question: What are the dual benefits of converting agricultural waste into biogas?",
        options: [
            'Producing organic fertilizer and exporting plastics',
            'Creating clean cooking fuel and reducing methane emissions',
            'Generating electricity and purifying river water',
            'Eliminating crop pests and increasing grain yields'
        ],
        answer: 1,
        explanation: "The text points out generating clean cooking fuel and significantly reducing methane emissions."
    },
    {
        q: "Passage: 'The novelist spent years interviewing archival historians and veterans before drafting her historical fiction, ensuring that every tactical detail and cultural nuance felt authentic.' Question: Why did the novelist conduct extensive interviews prior to writing?",
        options: [
            'To turn her notes into a non-fiction textbook',
            'To secure financial grants from government agencies',
            'To ensure tactical and cultural authenticity in her book',
            'To find a literary agent willing to publish her work'
        ],
        answer: 2,
        explanation: "She did so to ensure every tactical detail and cultural nuance felt authentic."
    },
    {
        q: "Passage: 'Unlike deciduous trees that shed their foliage to conserve moisture during freezing winters, evergreen conifers retain needle-like leaves coated in thick protective wax.' Question: How do evergreen conifers survive freezing winters differently than deciduous trees?",
        options: [
            'By absorbing moisture directly from heavy snow',
            'By dropping all needles in autumn',
            'By retaining wax-coated needle leaves',
            'By entering a state of complete cell hibernation underground'
        ],
        answer: 2,
        explanation: "The passage states evergreens retain needle-like leaves coated in thick protective wax."
    },
    {
        q: "Passage: 'The community library introduced a digital literacy workshop for senior citizens, bridging the technological gap and empowering elders to navigate online banking safely.' Question: What was the primary goal of the library's workshop?",
        options: [
            'To bridge the tech gap and help seniors bank online safely',
            'To recruit elderly volunteers for administrative tasks',
            'To transition all physical book lending to digital tablets',
            'To teach senior citizens how to repair old computers'
        ],
        answer: 0,
        explanation: "The text explains it bridged the technological gap and empowered elders to navigate online banking safely."
    },
    {
        q: "Passage: 'Volcanic soil is notoriously fertile due to its rich concentration of minerals like potassium and phosphorus, which stimulate rapid crop growth after eruptions.' Question: Why is volcanic soil exceptionally fertile?",
        options: [
            'It contains high concentrations of minerals like potassium and phosphorus',
            'It absorbs artificial chemical fertilizers faster',
            'It retains standing rainwater for months at a time',
            'It is completely free of earthworms and bacteria'
        ],
        answer: 0,
        explanation: "The passage attributes its fertility to rich concentrations of minerals like potassium and phosphorus."
    },
    {
        q: "Passage: 'The documentary highlighted how urban light pollution disrupts migratory bird navigation, often causing flocks to collide with illuminated skyscrapers.' Question: What negative impact does urban light pollution have on migratory birds?",
        options: [
            'It damages their feathers and weakens their flight muscles',
            'It disrupts their navigation and leads to skyscraper collisions',
            'It destroys their natural insect food sources in parks',
            'It forces them to migrate during freezing winter months'
        ],
        answer: 1,
        explanation: "The text states it disrupts migratory bird navigation, causing collisions with skyscrapers."
    },
    {
        q: "Passage: 'Although automation has streamlined manufacturing assembly lines, it has also sparked widespread debate regarding worker displacement and the future of manual labor.' Question: What is the main controversy surrounding factory automation?",
        options: [
            'The inability of machines to operate at night',
            'The high cost of electricity required to run robots',
            'The declining quality of mass-produced goods',
            'Worker displacement and the future of manual labor'
        ],
        answer: 3,
        explanation: "The passage notes debate regarding worker displacement and the future of manual labor."
    },
    {
        q: "Passage: 'The deep-sea anglerfish utilizes a bioluminescent lure attached to its head to attract unsuspecting prey in the pitch-black abyss of the ocean.' Question: How does the anglerfish catch prey in the deep ocean?",
        options: [
            'By filtering microscopic plankton through gill rakers',
            'By using a glowing bioluminescent lure on its head',
            'By burying itself in the sand and waiting for vibrations',
            'By hunting in coordinated packs along thermal vents'
        ],
        answer: 1,
        explanation: "The passage explains it uses a bioluminescent lure attached to its head."
    },
    {
        q: "Passage: 'Cognitive psychologists suggest that practicing mindfulness meditation for just ten minutes daily can significantly lower cortisol levels and improve attention spans.' Question: What are two benefits of daily mindfulness meditation mentioned in the passage?",
        options: [
            'Lowering cortisol levels and improving attention spans',
            'Curing chronic insomnia and curing joint inflammation',
            'Enhancing long-term memory recall and foreign language skills',
            'Building muscle mass and increasing aerobic stamina'
        ],
        answer: 0,
        explanation: "The text states it can lower cortisol levels and improve attention spans."
    },
    {
        q: "Passage: 'The medieval castle was engineered with concentric defensive walls and a single drawbridge, making direct frontal assaults nearly impossible for invading forces.' Question: What made direct assaults on the castle extremely difficult?",
        options: [
            'A large moat filled with venomous aquatic creatures',
            'The steep mountain cliffs surrounding the fortress',
            'Concentric defensive walls and a single drawbridge',
            'Constant reinforcement from allied naval fleets'
        ],
        answer: 2,
        explanation: "The passage credits concentric defensive walls and a single drawbridge."
    },
    {
        q: "Passage: 'Nutritional science increasingly emphasizes that gut microbiota play a crucial role in regulating human immunity, digestion, and even mental well-being.' Question: According to nutritional science, what do gut microbiota influence?",
        options: [
            'Vision acuity and auditory processing speed',
            'Human immunity, digestion, and mental well-being',
            'Cardiovascular endurance and lung capacity',
            'Bone density and skeletal growth rates'
        ],
        answer: 1,
        explanation: "The text explicitly lists human immunity, digestion, and even mental well-being."
    },
    {
        q: "Passage: 'The pioneering astronomer discovered a new exoplanet by measuring the periodic dimming of a distant star as the planet crossed in front of its stellar disk.' Question: How was the exoplanet discovered?",
        options: [
            'By detecting radio signals broadcasted from planetary surfaces',
            'By analyzing gravitational anomalies in nearby asteroid belts',
            'By measuring the periodic dimming of a star as the planet transited',
            'By capturing direct photographic images with infrared space telescopes'
        ],
        answer: 2,
        explanation: "The passage describes measuring the periodic dimming of a distant star as the planet crossed in front."
    },
    {
        q: "Passage: 'Restoring native wetlands acts as a natural buffer against storm surges, protecting coastal settlements while filtering agricultural runoff before it reaches the sea.' Question: What dual ecological service do restored wetlands provide?",
        options: [
            'Buffering storm surges and filtering agricultural runoff',
            'Providing timber for construction and housing for migratory fish',
            'Generating hydroelectric power and creating tourist parks',
            'Preventing soil erosion from wind and increasing local rainfall'
        ],
        answer: 0,
        explanation: "The text notes buffering storm surges and filtering agricultural runoff."
    },
    {
        q: "Passage: 'The ancient craft of Japanese wood joinery (kigumi) allows carpenters to construct sturdy buildings without using a single nail, screw, or adhesive.' Question: What is unique about Japanese wood joinery as described in the text?",
        options: [
            'It relies exclusively on waterproof plant resins',
            'It uses only soft pine wood harvested in winter',
            'It constructs sturdy buildings without nails, screws, or glue',
            'It requires iron bolts forged at extreme temperatures'
        ],
        answer: 2,
        explanation: "The passage highlights that it constructs sturdy buildings without using a single nail, screw, or adhesive."
    },
    {
        q: "Passage: 'Biologists found that urban blackbirds sing at a higher pitch and louder volume than their rural counterparts to cut through the din of city traffic.' Question: Why do urban blackbirds sing differently than rural blackbirds?",
        options: [
            'Because city air contains higher oxygen levels',
            'To cut through the noise and din of city traffic',
            'To warn other birds about territorial predators',
            'To attract mates from longer distances across parks'
        ],
        answer: 1,
        explanation: "The text explains they do so to cut through the din of city traffic."
    },
    {
        q: "Passage: 'The Renaissance master favored sfumato—a painting technique of layering translucent glazes so that colors blend imperceptibly without perceptible borders or lines.' Question: What is the characteristic effect of the sfumato technique?",
        options: [
            'Creating sharp geometric shapes and high contrast shadows',
            'Using crushed gemstones to give metallic reflections',
            'Blending colors imperceptibly without harsh borders or lines',
            'Making canvas paintings appear three-dimensional through carved wood'
        ],
        answer: 2,
        explanation: "The passage states colors blend imperceptibly without perceptible borders or lines."
    },
    {
        q: "Passage: 'Geologists study ice cores extracted from deep glaciers to analyze trapped atmospheric bubbles, providing a detailed historical record of past climate cycles.' Question: What information do ice core bubbles provide to geologists?",
        options: [
            'Radioactive decay rates of volcanic ash layers',
            'A detailed historical record of past climate cycles',
            'Earthquake fault line movements over millennia',
            'The migration routes of prehistoric ice-age mammals'
        ],
        answer: 1,
        explanation: "The passage notes they provide a detailed historical record of past climate cycles."
    },
    {
        q: "Passage: 'The municipal government implemented a strict bicycle-sharing program to alleviate downtown traffic congestion and encourage eco-friendly commuting.' Question: What were the main goals of the bicycle-sharing program?",
        options: [
            'To provide free recreational exercise equipment for tourists',
            'To alleviate downtown traffic congestion and encourage eco-friendly commuting',
            'To generate revenue for road maintenance and repairs',
            'To replace public bus networks entirely'
        ],
        answer: 1,
        explanation: "The text states the goals were to alleviate downtown traffic congestion and encourage eco-friendly commuting."
    },
    {
        q: "Passage: 'Unlike classical economic theories assuming rational human actors, behavioral finance demonstrates that human fear and greed frequently drive market bubbles.' Question: What does behavioral finance argue regarding market bubbles?",
        options: [
            'They are entirely preventable through automated computer trading',
            'They occur predictably every seven years due to cyclical weather',
            'They are driven by human fear and greed rather than pure rationality',
            'They are caused exclusively by government interest rate adjustments'
        ],
        answer: 2,
        explanation: "The passage demonstrates that human fear and greed frequently drive market bubbles."
    },
    {
        q: "Passage: 'The honeybee waggle dance is a sophisticated form of communication where returning foragers convey the exact distance and direction of nectar sources to the hive.' Question: What do honeybees communicate through the waggle dance?",
        options: [
            'The exact distance and direction of nectar sources',
            'The need to swarm and find a new queen',
            'Weather forecasts for the upcoming week',
            'The presence of hornets and hive intruders'
        ],
        answer: 0,
        explanation: "The text states foragers convey the exact distance and direction of nectar sources."
    },
    {
        q: "Passage: 'The philosopher argued that true wisdom begins with intellectual humility—recognizing the vast expanse of what one does not yet know.' Question: According to the philosopher, what is the starting point of true wisdom?",
        options: [
            'Engaging in rigorous academic debates daily',
            'Mastering classical literature and mathematics',
            'Traveling across foreign continents to study cultures',
            'Intellectual humility and recognizing what one does not know'
        ],
        answer: 3,
        explanation: "The passage states true wisdom begins with intellectual humility—recognizing the vast expanse of what one does not yet know."
    },
    {
        q: "Passage: 'Marine archaeologists recovered porcelain plates and bronze artifacts from a centuries-old shipwreck, shedding light on maritime trade networks in the Indian Ocean.' Question: What did the shipwreck artifacts help reveal?",
        options: [
            'Prehistoric sea-level elevations',
            'Maritime trade networks operating in the Indian Ocean',
            'Ancient naval warfare tactics and weapon designs',
            'The personal diaries of royal explorers'
        ],
        answer: 1,
        explanation: "The text notes they shed light on maritime trade networks in the Indian Ocean."
    },
    {
        q: "Passage: 'By shifting from fossil fuels to decentralized solar microgrids, the remote island community achieved complete energy independence.' Question: How did the island community achieve energy independence?",
        options: [
            'By rationing electricity usage to two hours per day',
            'By switching from fossil fuels to decentralized solar microgrids',
            'By burning local biomass waste in community furnaces',
            'By importing hydroelectric power via undersea cables'
        ],
        answer: 1,
        explanation: "The passage credits the shift from fossil fuels to decentralized solar microgrids."
    },
    {
        q: "Passage: 'The novelist's prose was celebrated for its lyrical economy—conveying profound emotional depth in just a few sparse, carefully chosen words.' Question: What is meant by 'lyrical economy' in the novelist's writing?",
        options: [
            'Writing long, rambling chapters about economic theory',
            'Focusing stories exclusively on financial transactions',
            'Using expensive leather-bound editions for publication',
            'Conveying profound emotional depth in sparse, chosen words'
        ],
        answer: 3,
        explanation: "The passage explains it as conveying profound emotional depth in just a few sparse, carefully chosen words."
    },
    {
        q: "Passage: 'Urban planners designed the new public square with cascading fountains and native shade trees to mitigate the urban heat island effect.' Question: Why were fountains and shade trees included in the public square design?",
        options: [
            'To attract endangered migratory waterfowl',
            'To generate hydroelectric power for streetlights',
            'To mitigate the urban heat island effect',
            'To muffle highway traffic noise'
        ],
        answer: 2,
        explanation: "The text states they were added to mitigate the urban heat island effect."
    },
    {
        q: "Passage: 'The evolutionary adaptation of mimicry allows harmless hoverflies to display the striking yellow and black warning stripes of stinging wasps, deterring predators.' Question: How does mimicry protect harmless hoverflies?",
        options: [
            'By releasing a noxious chemical spray when approached',
            'By displaying wasp warning stripes to deter predators',
            'By flying at speeds too fast for birds to track',
            'By allowing them to camouflage against tree bark'
        ],
        answer: 1,
        explanation: "The passage explains they display yellow and black warning stripes of stinging wasps, deterring predators."
    },
    {
        q: "Passage: 'The textile mill modernized its operations by installing closed-loop water filtration systems, recycling ninety percent of dye wastewater on-site.' Question: How did the textile mill improve its environmental impact?",
        options: [
            'By replacing chemical dyes with natural fruit pigments',
            'By shutting down factory operations during dry summer months',
            'By installing closed-loop filtration to recycle ninety percent of wastewater',
            'By outsourcing dyeing processes to overseas facilities'
        ],
        answer: 2,
        explanation: "The passage states they installed closed-loop water filtration systems, recycling ninety percent of dye wastewater."
    },
    {
        q: "Passage: 'Neuroscientists discovered that learning a second language strengthens executive function, enhancing multitasking skills and mental flexibility in older adults.' Question: What cognitive benefit does learning a second language provide for older adults?",
        options: [
            'Strengthening executive function, multitasking, and mental flexibility',
            'Permanently curing age-related hearing loss',
            'Eliminating the need for corrective reading glasses',
            'Doubling long-term autobiographical memory capacity'
        ],
        answer: 0,
        explanation: "The text notes it strengthens executive function, enhancing multitasking and mental flexibility."
    },
    {
        q: "Passage: 'The historical fiction novel brilliantly captured the tension of the Cold War through the intimate lens of a family divided across the Berlin Wall.' Question: How did the novel portray the Cold War?",
        options: [
            'Through sweeping military strategy analysis and political speeches',
            'By focusing exclusively on espionage gadgets and high-speed chases',
            'Through economic data regarding industrial production output',
            'Through the intimate lens of a family divided across the Berlin Wall'
        ],
        answer: 3,
        explanation: "The passage notes it captured the tension through the intimate lens of a family divided across the Berlin Wall."
    },
    {
        q: "Passage: 'Conservationists successfully reintroduced wolves into the national park, triggering a trophic cascade that restored native vegetation and stabilized riverbanks.' Question: What was the result of reintroducing wolves to the park?",
        options: [
            'An overpopulation of herbivores that stripped bare the forests',
            'A trophic cascade that restored vegetation and stabilized riverbanks',
            'An immediate collapse of the regional tourism industry',
            'The permanent migration of birds to neighboring states'
        ],
        answer: 1,
        explanation: "The text states it triggered a trophic cascade that restored native vegetation and stabilized riverbanks."
    },
    {
        q: "Passage: 'The orchestra conductor emphasized rubato—a musical technique where tempo is slightly accelerated and delayed for expressive emotional impact.' Question: What does the technique of rubato involve?",
        options: [
            'Playing all notes at an ultra-fast staccato pace',
            'Singing lyrics in harmony with the brass section',
            'Switching instruments mid-performance without pausing',
            'Slightly accelerating and delaying tempo for emotional expression'
        ],
        answer: 3,
        explanation: "The passage explains it is a technique where tempo is slightly accelerated and delayed for expressive impact."
    },
    {
        q: "Passage: 'By embedding tiny sensors in bridge pylons, engineers can monitor structural stress in real-time and schedule preemptive maintenance before cracks form.' Question: What is the main advantage of embedding sensors in bridge pylons?",
        options: [
            'Generating solar power to illuminate the bridge at night',
            'Monitoring structural stress in real-time to schedule preemptive maintenance',
            'Preventing unauthorized pedestrian access after dark',
            'Eliminating toll booth delays for daily commuters'
        ],
        answer: 1,
        explanation: "The passage states engineers can monitor structural stress in real-time and schedule preemptive maintenance."
    },
    {
        q: "Passage: 'The ancient manuscript detailed herbal remedies used by indigenous healers, many of which modern pharmacologists now study for anti-inflammatory properties.' Question: Why are pharmacologists studying the ancient herbal remedies?",
        options: [
            'To patent commercial cosmetic perfumes',
            'To create chemical weapons for defense contractors',
            'To manufacture synthetic plastic polymers',
            'To investigate their potential anti-inflammatory properties'
        ],
        answer: 3,
        explanation: "The text notes pharmacologists study them for anti-inflammatory properties."
    },
    {
        q: "Passage: 'The artist's sculptures utilized reclaimed industrial scrap metal, transforming discarded engine parts and gears into whimsical kinetic creatures.' Question: What materials did the sculptor use for their artworks?",
        options: [
            'Fragile blown glass and polished crystal gemstones',
            'Reclaimed industrial scrap metal, engine parts, and gears',
            'Freshly mined marble quarried from Italian mountains',
            'Organic driftwood collected from ocean beaches'
        ],
        answer: 1,
        explanation: "The passage states they utilized reclaimed industrial scrap metal, discarding engine parts and gears."
    },
    {
        q: "Passage: 'Economists noted that remote work flexibility has decentralized housing demand, causing suburban and rural property values to rise significantly.' Question: What effect has remote work had on housing markets according to economists?",
        options: [
            'It caused a total collapse of global real estate prices',
            'It concentrated all housing demand into downtown city centers',
            'It eliminated the need for residential rental leases',
            'It decentralized housing demand, raising suburban and rural property values'
        ],
        answer: 3,
        explanation: "The text explains it decentralized housing demand, causing suburban and rural property values to rise."
    },
    {
        q: "Passage: 'The nocturnal gecko possesses specialized toe pads covered in microscopic setae, allowing it to adhere effortlessly to glass walls and ceilings.' Question: How is the gecko able to walk across smooth ceilings?",
        options: [
            'Using toe pads covered in microscopic setae for adhesion',
            'By creating microscopic vacuums with suction cups',
            'By secreting a sticky chemical adhesive from its claws',
            'Through static electricity generated by friction'
        ],
        answer: 0,
        explanation: "The passage mentions specialized toe pads covered in microscopic setae allowing adhesion."
    },
    {
        q: "Passage: 'The astronomer spent decades mapping stellar parallax, providing the first reliable measurements of interstellar distances to nearby stars.' Question: What did stellar parallax measurements help astronomers calculate?",
        options: [
            'The exact age and temperature of the universe',
            'The gravitational pull of black holes',
            'Interstellar distances to nearby stars',
            'The chemical composition of solar flares'
        ],
        answer: 2,
        explanation: "The text states it provided the first reliable measurements of interstellar distances."
    },
    {
        q: "Passage: 'The novel subverted traditional fairy tale tropes by portraying the wicked witch not as an embodiment of pure evil, but as a misunderstood outcast seeking justice.' Question: How did the novel alter traditional fairy tale tropes?",
        options: [
            'By replacing human characters with talking woodland animals',
            'By ending the story with an unresolved cliffhanger',
            'By portraying the wicked witch as a misunderstood outcast seeking justice',
            'By eliminating all magical elements in favor of hard science fiction'
        ],
        answer: 2,
        explanation: "The passage notes it portrayed the wicked witch as a misunderstood outcast seeking justice rather than pure evil."
    },
    {
        q: "Passage: 'Marine biologists use hydrophones to record underwater whale songs, tracking pod migrations and studying communication patterns across ocean basins.' Question: What do marine biologists use hydrophones for?",
        options: [
            'To deter predatory sharks from swimming near beaches',
            'To record whale songs and track pod migrations',
            'To map underwater earthquake fault lines',
            'To measure ocean water temperature and salinity'
        ],
        answer: 1,
        explanation: "The text states they record underwater whale songs, tracking pod migrations."
    },
    {
        q: "Passage: 'The culinary school curriculum emphasizes mise en place—a French term meaning having all ingredients measured, cut, and organized before cooking begins.' Question: What does the practice of mise en place require a chef to do?",
        options: [
            'Source organic vegetables exclusively from local farmers',
            'Clean all kitchen dishes immediately after dinner service',
            'Measure, cut, and organize all ingredients before cooking starts',
            'Invent brand new fusion recipes every single week'
        ],
        answer: 2,
        explanation: "The passage defines it as having all ingredients measured, cut, and organized before cooking begins."
    },
    {
        q: "Passage: 'By planting cover crops like clover during off-seasons, farmers prevent soil erosion, suppress weeds, and naturally replenish soil nitrogen.' Question: What is one agricultural benefit of planting cover crops during off-seasons?",
        options: [
            'Preventing soil erosion and replenishing soil nitrogen',
            'Producing cash crops for winter livestock feed',
            'Eliminating the need for farm fencing',
            'Doubling farm machinery lifespan'
        ],
        answer: 0,
        explanation: "The text notes preventing soil erosion, suppressing weeds, and replenishing soil nitrogen."
    },
    {
        q: "Passage: 'The historian argued that the invention of the printing press was the primary catalyst for the widespread democratization of knowledge in Europe.' Question: According to the historian, what did the printing press facilitate?",
        options: [
            'The standardization of international shipping laws',
            'The rapid industrialization of textile factories',
            'The widespread democratization of knowledge in Europe',
            'The immediate abolition of European monarchies'
        ],
        answer: 2,
        explanation: "The passage states it was the primary catalyst for the widespread democratization of knowledge."
    },
    {
        q: "Passage: 'The automated greenhouse adjusts humidity, temperature, and nutrient delivery in real-time, optimizing crop yields while minimizing water waste.' Question: How does the automated greenhouse optimize plant growth?",
        options: [
            'By adjusting humidity, temperature, and nutrients in real-time',
            'By replacing soil with liquid chemical baths',
            'By utilizing human farmworkers for manual pruning',
            'By exposing crops to ultraviolet night lamps'
        ],
        answer: 0,
        explanation: "The text explains it adjusts humidity, temperature, and nutrient delivery in real-time."
    },
    {
        q: "Passage: 'The poet employed synesthesia—blending sensory experiences by describing sounds in visual terms, such as 'a piercing golden chime'.' Question: What is the literary technique of synesthesia as described in the text?",
        options: [
            'Repeating identical consonant sounds in every line',
            'Writing poems entirely in foreign languages',
            'Using rhyming couplets at the end of every stanza',
            'Blending sensory experiences, such as describing sounds in visual terms'
        ],
        answer: 3,
        explanation: "The passage defines it as blending sensory experiences by describing sounds in visual terms."
    },
    {
        q: "Passage: 'Paleontologists discovered fossilized feathers bearing microscopic melanosomes, revealing the true iridescent coloration of prehistoric dinosaurs.' Question: What did the discovery of microscopic melanosomes in fossils reveal?",
        options: [
            'The dietary preference of carnivorous theropods',
            'The true iridescent coloration of prehistoric dinosaurs',
            'The exact lifespan and growth rate of dinosaur hatchlings',
            'The atmospheric oxygen levels of the Cretaceous period'
        ],
        answer: 1,
        explanation: "The text states it revealed the true iridescent coloration of prehistoric dinosaurs."
    },
    {
        q: "Passage: 'The city council approved a comprehensive zoning reform allowing mixed-use residential and commercial buildings to revitalize downtown neighborhoods.' Question: What was the purpose of the zoning reform?",
        options: [
            'To ban all commercial businesses from residential streets',
            'To convert all public parks into parking lots',
            'To allow mixed-use residential and commercial buildings to revitalize downtown',
            'To restrict building heights to two stories maximum'
        ],
        answer: 2,
        explanation: "The passage notes it allowed mixed-use residential and commercial buildings to revitalize downtown."
    }
];
