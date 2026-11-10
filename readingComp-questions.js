// ==========================================
// Skill Practice Categories: Reading Comprehension (100 Questions)
// Unique passages, balanced options, non-revealing distractors
// ==========================================

const readingCompQuestions = [
    {
        q: "Passage: 'Despite the harsh winter conditions, the small alpine village thrived through community cooperation, sharing firewood and preserved rations until the spring thaw arrived.' Question: According to the passage, how did the village survive the winter?",
        options: [
            'By trading livestock with neighboring towns',
            'Through community cooperation and sharing resources',
            'By migrating to lower altitudes before the snow fell',
            'Through emergency aid shipments from the government'
        ],
        answer: 1,
        explanation: "The passage explicitly credits community cooperation, sharing firewood, and preserved rations for their survival."
    },
    {
        q: "Passage: 'Unlike traditional painting methods that rely heavily on oils and slow drying times, modern digital illustrators utilize pressure-sensitive tablets to instantly layer colors, blend textures, and correct errors with a single keystroke.' Question: What is the primary contrast highlighted in the passage?",
        options: [
            'The high cost of digital tablets versus traditional canvas',
            'The skill gap between professional and amateur artists',
            'The difference in drying times and error correction between mediums',
            'The superiority of abstract art over realism'
        ],
        answer: 2,
        explanation: "The passage contrasts the slow drying times of traditional oil painting with the instant layering and error correction of digital tablets."
    },
    {
        q: "Passage: 'Urban rooftop gardens have transformed barren concrete spaces into vibrant green sanctuaries, significantly lowering ambient building temperatures while providing fresh local produce.' Question: Which of the following is a direct benefit of rooftop gardens mentioned in the text?",
        options: [
            'Eliminating the need for municipal water supplies',
            'Lowering ambient building temperatures',
            'Generating solar electricity for residential units',
            'Completely stopping urban noise pollution'
        ],
        answer: 1,
        explanation: "The text specifically states that rooftop gardens lower ambient building temperatures."
    },
    {
        q: "Passage: 'The historical manuscript was preserved for centuries within a climate-controlled vault, protecting its delicate parchment pages from humidity and ultraviolet light degradation.' Question: Why was the manuscript kept in a climate-controlled vault?",
        options: [
            'To allow public visitors to read it safely',
            'To protect delicate parchment from humidity and light',
            'To prevent theft by rival collectors',
            'To accelerate the natural aging of the ink'
        ],
        answer: 1,
        explanation: "The passage states the vault protected its delicate parchment pages from humidity and ultraviolet light degradation."
    },
    {
        q: "Passage: 'Marine biologists observed that coral reef bleaching is primarily driven by rising ocean temperatures, which force corals to expel the symbiotic algae living inside their tissues.' Question: What triggers coral reef bleaching according to the observation?",
        options: [
            'Pollution from coastal industrial factories',
            'Rising ocean temperatures',
            'Overfishing of herbivorous reef species',
            'Excessive ultraviolet radiation from space'
        ],
        answer: 1,
        explanation: "The passage attributes coral bleaching primarily to rising ocean temperatures."
    },
    {
        q: "Passage: 'While early astronomy focused heavily on naked-eye celestial navigation and charting planetary orbits, modern astrophysics delves into invisible phenomena like dark matter and gravitational waves.' Question: How has the focus of astronomy changed over time?",
        options: [
            'It moved from practical navigation to studying invisible cosmic phenomena',
            'It shifted entirely away from planetary observation to astrology',
            'It abandoned theoretical physics in favor of telescope manufacturing',
            'It became exclusively focused on weather forecasting'
        ],
        answer: 0,
        explanation: "The text contrasts early naked-eye celestial charting with modern astrophysics studying dark matter and gravitational waves."
    },
    {
        q: "Passage: 'The architect integrated large southern-facing windows into the office design, maximizing natural sunlight and drastically reducing artificial lighting costs during winter.' Question: What was the primary purpose of the large southern-facing windows?",
        options: [
            'To provide panoramic mountain views for employees',
            'To maximize natural sunlight and reduce heating costs',
            'To maximize natural sunlight and cut lighting expenses',
            'To allow rainwater collection during storms'
        ],
        answer: 2,
        explanation: "The passage notes they maximized natural sunlight and drastically reduced artificial lighting costs."
    },
    {
        q: "Passage: 'Despite initial skepticism from local merchants, the pedestrianized downtown zone resulted in a thirty percent increase in foot traffic and weekend shoppers.' Question: What was the ultimate outcome of pedestrianizing the downtown zone?",
        options: [
            'A sharp decline in overall commercial revenue',
            'An increase in traffic congestion on side streets',
            'A thirty percent increase in foot traffic and shoppers',
            'The permanent closure of major retail stores'
        ],
        answer: 2,
        explanation: "The text notes a thirty percent increase in foot traffic and weekend shoppers despite early skepticism."
    },
    {
        q: "Passage: 'The symphony orchestra practiced tirelessly for months, balancing delicate woodwind melodies with thunderous brass cues to achieve a cohesive, emotional performance.' Question: What contributed to the orchestra's success?",
        options: [
            'Using newly invented musical instruments',
            'Months of tireless practice balancing instrument sections',
            'Performing without a conductor for the first time',
            'Focusing exclusively on brass arrangements'
        ],
        answer: 1,
        explanation: "The passage highlights that they practiced tirelessly for months, balancing woodwinds and brass."
    },
    {
        q: "Passage: 'Microplastics have permeated deep-sea ecosystems, accumulating in the digestive tracts of microscopic zooplankton and threatening the foundation of marine food webs.' Question: Why are microplastics dangerous to deep-sea ecosystems?",
        options: [
            'They block sunlight from reaching deep trenches',
            'They accumulate in zooplankton, threatening food webs',
            'They dissolve into toxic acids that boil water',
            'They tangle around coral reefs and block currents'
        ],
        answer: 1,
        explanation: "The passage states they accumulate in zooplankton's digestive tracts, threatening the foundation of marine food webs."
    },
    {
        q: "Passage: 'The ancient trade route was not merely a channel for silk and spices; it served as a vital bridge for exchanging philosophies, religious beliefs, and scientific inventions between East and West.' Question: According to the passage, what else did the trade route facilitate besides physical goods?",
        options: [
            'The standardization of global currency',
            'The exchange of philosophies, beliefs, and inventions',
            'The establishment of unified political empires',
            'The migration of nomadic farming tribes'
        ],
        answer: 1,
        explanation: "The text highlights the exchange of philosophies, religious beliefs, and scientific inventions."
    },
    {
        q: "Passage: 'Behavioral economists found that consumers often make financial decisions based on immediate emotional cues rather than long-term mathematical calculations.' Question: What influences consumer financial decisions according to behavioral economists?",
        options: [
            'Strict adherence to mathematical spreadsheets',
            'Immediate emotional cues rather than long-term math',
            'Government tax policies and inflation rates',
            'Peer pressure from corporate advertisers'
        ],
        answer: 1,
        explanation: "The passage notes decisions are based on immediate emotional cues rather than long-term calculations."
    },
    {
        q: "Passage: 'The nocturnal desert fox relies on its oversized ears not only to detect subterranean prey but also to dissipate excess body heat during scorching days.' Question: What is one dual function of the desert fox's oversized ears?",
        options: [
            'Sensing underground prey and shedding body heat',
            'Communicating across long distances and digging burrows',
            'Filtering blowing sand and storing water reserves',
            'Attracting mates and maintaining physical balance'
        ],
        answer: 0,
        explanation: "The passage explains they detect subterranean prey and dissipate excess body heat."
    },
    {
        q: "Passage: 'By converting agricultural organic waste into biogas, rural communities can generate clean cooking fuel while significantly reducing methane emissions.' Question: What are the dual benefits of converting agricultural waste into biogas?",
        options: [
            'Generating electricity and purifying river water',
            'Creating clean cooking fuel and reducing methane emissions',
            'Producing organic fertilizer and exporting plastics',
            'Eliminating crop pests and increasing grain yields'
        ],
        answer: 1,
        explanation: "The text points out generating clean cooking fuel and significantly reducing methane emissions."
    },
    {
        q: "Passage: 'The novelist spent years interviewing archival historians and veterans before drafting her historical fiction, ensuring that every tactical detail and cultural nuance felt authentic.' Question: Why did the novelist conduct extensive interviews prior to writing?",
        options: [
            'To secure financial grants from government agencies',
            'To ensure tactical and cultural authenticity in her book',
            'To find a literary agent willing to publish her work',
            'To turn her notes into a non-fiction textbook'
        ],
        answer: 1,
        explanation: "She did so to ensure every tactical detail and cultural nuance felt authentic."
    },
    {
        q: "Passage: 'Unlike deciduous trees that shed their foliage to conserve moisture during freezing winters, evergreen conifers retain needle-like leaves coated in thick protective wax.' Question: How do evergreen conifers survive freezing winters differently than deciduous trees?",
        options: [
            'By dropping all needles in autumn',
            'By retaining wax-coated needle leaves',
            'By entering a state of complete cell hibernation underground',
            'By absorbing moisture directly from heavy snow'
        ],
        answer: 1,
        explanation: "The passage states evergreens retain needle-like leaves coated in thick protective wax."
    },
    {
        q: "Passage: 'The community library introduced a digital literacy workshop for senior citizens, bridging the technological gap and empowering elders to navigate online banking safely.' Question: What was the primary goal of the library's workshop?",
        options: [
            'To teach senior citizens how to repair old computers',
            'To bridge the tech gap and help seniors bank online safely',
            'To transition all physical book lending to digital tablets',
            'To recruit elderly volunteers for administrative tasks'
        ],
        answer: 1,
        explanation: "The text explains it bridged the technological gap and empowered elders to navigate online banking safely."
    },
    {
        q: "Passage: 'Volcanic soil is notoriously fertile due to its rich concentration of minerals like potassium and phosphorus, which stimulate rapid crop growth after eruptions.' Question: Why is volcanic soil exceptionally fertile?",
        options: [
            'It retains standing rainwater for months at a time',
            'It contains high concentrations of minerals like potassium and phosphorus',
            'It is completely free of earthworms and bacteria',
            'It absorbs artificial chemical fertilizers faster'
        ],
        answer: 1,
        explanation: "The passage attributes its fertility to rich concentrations of minerals like potassium and phosphorus."
    },
    {
        q: "Passage: 'The documentary highlighted how urban light pollution disrupts migratory bird navigation, often causing flocks to collide with illuminated skyscrapers.' Question: What negative impact does urban light pollution have on migratory birds?",
        options: [
            'It damages their feathers and weakens their flight muscles',
            'It disrupts their navigation and leads to skyscraper collisions',
            'It forces them to migrate during freezing winter months',
            'It destroys their natural insect food sources in parks'
        ],
        answer: 1,
        explanation: "The text states it disrupts migratory bird navigation, causing collisions with skyscrapers."
    },
    {
        q: "Passage: 'Although automation has streamlined manufacturing assembly lines, it has also sparked widespread debate regarding worker displacement and the future of manual labor.' Question: What is the main controversy surrounding factory automation?",
        options: [
            'The declining quality of mass-produced goods',
            'Worker displacement and the future of manual labor',
            'The high cost of electricity required to run robots',
            'The inability of machines to operate at night'
        ],
        answer: 1,
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
            'Building muscle mass and increasing aerobic stamina',
            'Curing chronic insomnia and curing joint inflammation',
            'Enhancing long-term memory recall and foreign language skills'
        ],
        answer: 0,
        explanation: "The text states it can lower cortisol levels and improve attention spans."
    },
    {
        q: "Passage: 'The medieval castle was engineered with concentric defensive walls and a single drawbridge, making direct frontal assaults nearly impossible for invading forces.' Question: What made direct assaults on the castle extremely difficult?",
        options: [
            'The steep mountain cliffs surrounding the fortress',
            'Concentric defensive walls and a single drawbridge',
            'A large moat filled with venomous aquatic creatures',
            'Constant reinforcement from allied naval fleets'
        ],
        answer: 1,
        explanation: "The passage credits concentric defensive walls and a single drawbridge."
    },
    {
        q: "Passage: 'Nutritional science increasingly emphasizes that gut microbiota play a crucial role in regulating human immunity, digestion, and even mental well-being.' Question: According to nutritional science, what do gut microbiota influence?",
        options: [
            'Bone density and skeletal growth rates',
            'Human immunity, digestion, and mental well-being',
            'Vision acuity and auditory processing speed',
            'Cardiovascular endurance and lung capacity'
        ],
        answer: 1,
        explanation: "The text explicitly lists human immunity, digestion, and even mental well-being."
    },
    {
        q: "Passage: 'The pioneering astronomer discovered a new exoplanet by measuring the periodic dimming of a distant star as the planet crossed in front of its stellar disk.' Question: How was the exoplanet discovered?",
        options: [
            'By capturing direct photographic images with infrared space telescopes',
            'By measuring the periodic dimming of a star as the planet transited',
            'By detecting radio signals broadcasted from planetary surfaces',
            'By analyzing gravitational anomalies in nearby asteroid belts'
        ],
        answer: 1,
        explanation: "The passage describes measuring the periodic dimming of a distant star as the planet crossed in front."
    },
    {
        q: "Passage: 'Restoring native wetlands acts as a natural buffer against storm surges, protecting coastal settlements while filtering agricultural runoff before it reaches the sea.' Question: What dual ecological service do restored wetlands provide?",
        options: [
            'Providing timber for construction and housing for migratory fish',
            'Buffering storm surges and filtering agricultural runoff',
            'Generating hydroelectric power and creating tourist parks',
            'Preventing soil erosion from wind and increasing local rainfall'
        ],
        answer: 1,
        explanation: "The text notes buffering storm surges and filtering agricultural runoff."
    },
    {
        q: "Passage: 'The ancient craft of Japanese wood joinery (kigumi) allows carpenters to construct sturdy buildings without using a single nail, screw, or adhesive.' Question: What is unique about Japanese wood joinery as described in the text?",
        options: [
            'It relies exclusively on waterproof plant resins',
            'It constructs sturdy buildings without nails, screws, or glue',
            'It requires iron bolts forged at extreme temperatures',
            'It uses only soft pine wood harvested in winter'
        ],
        answer: 1,
        explanation: "The passage highlights that it constructs sturdy buildings without using a single nail, screw, or adhesive."
    },
    {
        q: "Passage: 'Biologists found that urban blackbirds sing at a higher pitch and louder volume than their rural counterparts to cut through the din of city traffic.' Question: Why do urban blackbirds sing differently than rural blackbirds?",
        options: [
            'To attract mates from longer distances across parks',
            'To cut through the noise and din of city traffic',
            'Because city air contains higher oxygen levels',
            'To warn other birds about territorial predators'
        ],
        answer: 1,
        explanation: "The text explains they do so to cut through the din of city traffic."
    },
    {
        q: "Passage: 'The Renaissance master favored sfumato—a painting technique of layering translucent glazes so that colors blend imperceptibly without perceptible borders or lines.' Question: What is the characteristic effect of the sfumato technique?",
        options: [
            'Creating sharp geometric shapes and high contrast shadows',
            'Blending colors imperceptibly without harsh borders or lines',
            'Making canvas paintings appear three-dimensional through carved wood',
            'Using crushed gemstones to give metallic reflections'
        ],
        answer: 1,
        explanation: "The passage states colors blend imperceptibly without perceptible borders or lines."
    },
    {
        q: "Passage: 'Geologists study ice cores extracted from deep glaciers to analyze trapped atmospheric bubbles, providing a detailed historical record of past climate cycles.' Question: What information do ice core bubbles provide to geologists?",
        options: [
            'Earthquake fault line movements over millennia',
            'A detailed historical record of past climate cycles',
            'The migration routes of prehistoric ice-age mammals',
            'Radioactive decay rates of volcanic ash layers'
        ],
        answer: 1,
        explanation: "The passage notes they provide a detailed historical record of past climate cycles."
    },
    {
        q: "Passage: 'The municipal government implemented a strict bicycle-sharing program to alleviate downtown traffic congestion and encourage eco-friendly commuting.' Question: What were the main goals of the bicycle-sharing program?",
        options: [
            'To generate revenue for road maintenance and repairs',
            'To alleviate downtown traffic congestion and encourage eco-friendly commuting',
            'To provide free recreational exercise equipment for tourists',
            'To replace public bus networks entirely'
        ],
        answer: 1,
        explanation: "The text states the goals were to alleviate downtown traffic congestion and encourage eco-friendly commuting."
    },
    {
        q: "Passage: 'Unlike classical economic theories assuming rational human actors, behavioral finance demonstrates that human fear and greed frequently drive market bubbles.' Question: What does behavioral finance argue regarding market bubbles?",
        options: [
            'They are caused exclusively by government interest rate adjustments',
            'They are driven by human fear and greed rather than pure rationality',
            'They occur predictably every seven years due to cyclical weather',
            'They are entirely preventable through automated computer trading'
        ],
        answer: 1,
        explanation: "The passage demonstrates that human fear and greed frequently drive market bubbles."
    },
    {
        q: "Passage: 'The honeybee waggle dance is a sophisticated form of communication where returning foragers convey the exact distance and direction of nectar sources to the hive.' Question: What do honeybees communicate through the waggle dance?",
        options: [
            'The presence of hornets and hive intruders',
            'The exact distance and direction of nectar sources',
            'The need to swarm and find a new queen',
            'Weather forecasts for the upcoming week'
        ],
        answer: 1,
        explanation: "The text states foragers convey the exact distance and direction of nectar sources."
    },
    {
        q: "Passage: 'The philosopher argued that true wisdom begins with intellectual humility—recognizing the vast expanse of what one does not yet know.' Question: According to the philosopher, what is the starting point of true wisdom?",
        options: [
            'Mastering classical literature and mathematics',
            'Intellectual humility and recognizing what one does not know',
            'Traveling across foreign continents to study cultures',
            'Engaging in rigorous academic debates daily'
        ],
        answer: 1,
        explanation: "The passage states true wisdom begins with intellectual humility—recognizing the vast expanse of what one does not yet know."
    },
    {
        q: "Passage: 'Marine archaeologists recovered porcelain plates and bronze artifacts from a centuries-old shipwreck, shedding light on maritime trade networks in the Indian Ocean.' Question: What did the shipwreck artifacts help reveal?",
        options: [
            'Ancient naval warfare tactics and weapon designs',
            'Maritime trade networks operating in the Indian Ocean',
            'The personal diaries of royal explorers',
            'Prehistoric sea-level elevations'
        ],
        answer: 1,
        explanation: "The text notes they shed light on maritime trade networks in the Indian Ocean."
    },
    {
        q: "Passage: 'By shifting from fossil fuels to decentralized solar microgrids, the remote island community achieved complete energy independence.' Question: How did the island community achieve energy independence?",
        options: [
            'By importing hydroelectric power via undersea cables',
            'By switching from fossil fuels to decentralized solar microgrids',
            'By rationing electricity usage to two hours per day',
            'By burning local biomass waste in community furnaces'
        ],
        answer: 1,
        explanation: "The passage credits the shift from fossil fuels to decentralized solar microgrids."
    },
    {
        q: "Passage: 'The novelist's prose was celebrated for its lyrical economy—conveying profound emotional depth in just a few sparse, carefully chosen words.' Question: What is meant by 'lyrical economy' in the novelist's writing?",
        options: [
            'Using expensive leather-bound editions for publication',
            'Conveying profound emotional depth in sparse, chosen words',
            'Writing long, rambling chapters about economic theory',
            'Focusing stories exclusively on financial transactions'
        ],
        answer: 1,
        explanation: "The passage explains it as conveying profound emotional depth in just a few sparse, carefully chosen words."
    },
    {
        q: "Passage: 'Urban planners designed the new public square with cascading fountains and native shade trees to mitigate the urban heat island effect.' Question: Why were fountains and shade trees included in the public square design?",
        options: [
            'To attract endangered migratory waterfowl',
            'To mitigate the urban heat island effect',
            'To muffle highway traffic noise',
            'To generate hydroelectric power for streetlights'
        ],
        answer: 1,
        explanation: "The text states they were added to mitigate the urban heat island effect."
    },
    {
        q: "Passage: 'The evolutionary adaptation of mimicry allows harmless hoverflies to display the striking yellow and black warning stripes of stinging wasps, deterring predators.' Question: How does mimicry protect harmless hoverflies?",
        options: [
            'By allowing them to camouflage against tree bark',
            'By displaying wasp warning stripes to deter predators',
            'By releasing a noxious chemical spray when approached',
            'By flying at speeds too fast for birds to track'
        ],
        answer: 1,
        explanation: "The passage explains they display yellow and black warning stripes of stinging wasps, deterring predators."
    },
    {
        q: "Passage: 'The textile mill modernized its operations by installing closed-loop water filtration systems, recycling ninety percent of dye wastewater on-site.' Question: How did the textile mill improve its environmental impact?",
        options: [
            'By replacing chemical dyes with natural fruit pigments',
            'By installing closed-loop filtration to recycle ninety percent of wastewater',
            'By shutting down factory operations during dry summer months',
            'By outsourcing dyeing processes to overseas facilities'
        ],
        answer: 1,
        explanation: "The passage states they installed closed-loop water filtration systems, recycling ninety percent of dye wastewater."
    },
    {
        q: "Passage: 'Neuroscientists discovered that learning a second language strengthens executive function, enhancing multitasking skills and mental flexibility in older adults.' Question: What cognitive benefit does learning a second language provide for older adults?",
        options: [
            'Eliminating the need for corrective reading glasses',
            'Strengthening executive function, multitasking, and mental flexibility',
            'Permanently curing age-related hearing loss',
            'Doubling long-term autobiographical memory capacity'
        ],
        answer: 1,
        explanation: "The text notes it strengthens executive function, enhancing multitasking and mental flexibility."
    },
    {
        q: "Passage: 'The historical fiction novel brilliantly captured the tension of the Cold War through the intimate lens of a family divided across the Berlin Wall.' Question: How did the novel portray the Cold War?",
        options: [
            'Through sweeping military strategy analysis and political speeches',
            'Through the intimate lens of a family divided across the Berlin Wall',
            'By focusing exclusively on espionage gadgets and high-speed chases',
            'Through economic data regarding industrial production output'
        ],
        answer: 1,
        explanation: "The passage notes it captured the tension through the intimate lens of a family divided across the Berlin Wall."
    },
    {
        q: "Passage: 'Conservationists successfully reintroduced wolves into the national park, triggering a trophic cascade that restored native vegetation and stabilized riverbanks.' Question: What was the result of reintroducing wolves to the park?",
        options: [
            'An immediate collapse of the regional tourism industry',
            'A trophic cascade that restored vegetation and stabilized riverbanks',
            'An overpopulation of herbivores that stripped bare the forests',
            'The permanent migration of birds to neighboring states'
        ],
        answer: 1,
        explanation: "The text states it triggered a trophic cascade that restored native vegetation and stabilized riverbanks."
    },
    {
        q: "Passage: 'The orchestra conductor emphasized rubato—a musical technique where tempo is slightly accelerated and delayed for expressive emotional impact.' Question: What does the technique of rubato involve?",
        options: [
            'Playing all notes at an ultra-fast staccato pace',
            'Slightly accelerating and delaying tempo for emotional expression',
            'Switching instruments mid-performance without pausing',
            'Singing lyrics in harmony with the brass section'
        ],
        answer: 1,
        explanation: "The passage explains it is a technique where tempo is slightly accelerated and delayed for expressive impact."
    },
    {
        q: "Passage: 'By embedding tiny sensors in bridge pylons, engineers can monitor structural stress in real-time and schedule preemptive maintenance before cracks form.' Question: What is the main advantage of embedding sensors in bridge pylons?",
        options: [
            'Eliminating toll booth delays for daily commuters',
            'Monitoring structural stress in real-time to schedule preemptive maintenance',
            'Generating solar power to illuminate the bridge at night',
            'Preventing unauthorized pedestrian access after dark'
        ],
        answer: 1,
        explanation: "The passage states engineers can monitor structural stress in real-time and schedule preemptive maintenance."
    },
    {
        q: "Passage: 'The ancient manuscript detailed herbal remedies used by indigenous healers, many of which modern pharmacologists now study for anti-inflammatory properties.' Question: Why are pharmacologists studying the ancient herbal remedies?",
        options: [
            'To manufacture synthetic plastic polymers',
            'To investigate their potential anti-inflammatory properties',
            'To create chemical weapons for defense contractors',
            'To patent commercial cosmetic perfumes'
        ],
        answer: 1,
        explanation: "The text notes pharmacologists study them for anti-inflammatory properties."
    },
    {
        q: "Passage: 'The artist's sculptures utilized reclaimed industrial scrap metal, transforming discarded engine parts and gears into whimsical kinetic creatures.' Question: What materials did the sculptor use for their artworks?",
        options: [
            'Freshly mined marble quarried from Italian mountains',
            'Reclaimed industrial scrap metal, engine parts, and gears',
            'Fragile blown glass and polished crystal gemstones',
            'Organic driftwood collected from ocean beaches'
        ],
        answer: 1,
        explanation: "The passage states they utilized reclaimed industrial scrap metal, discarding engine parts and gears."
    },
    {
        q: "Passage: 'Economists noted that remote work flexibility has decentralized housing demand, causing suburban and rural property values to rise significantly.' Question: What effect has remote work had on housing markets according to economists?",
        options: [
            'It concentrated all housing demand into downtown city centers',
            'It decentralized housing demand, raising suburban and rural property values',
            'It caused a total collapse of global real estate prices',
            'It eliminated the need for residential rental leases'
        ],
        answer: 1,
        explanation: "The text explains it decentralized housing demand, causing suburban and rural property values to rise."
    },
    {
        q: "Passage: 'The nocturnal gecko possesses specialized toe pads covered in microscopic setae, allowing it to adhere effortlessly to glass walls and ceilings.' Question: How is the gecko able to walk across smooth ceilings?",
        options: [
            'By secreting a sticky chemical adhesive from its claws',
            'Using toe pads covered in microscopic setae for adhesion',
            'By creating microscopic vacuums with suction cups',
            'Through static electricity generated by friction'
        ],
        answer: 1,
        explanation: "The passage mentions specialized toe pads covered in microscopic setae allowing adhesion."
    },
    {
        q: "Passage: 'The astronomer spent decades mapping stellar parallax, providing the first reliable measurements of interstellar distances to nearby stars.' Question: What did stellar parallax measurements help astronomers calculate?",
        options: [
            'The exact age and temperature of the universe',
            'Interstellar distances to nearby stars',
            'The gravitational pull of black holes',
            'The chemical composition of solar flares'
        ],
        answer: 1,
        explanation: "The text states it provided the first reliable measurements of interstellar distances."
    },
    {
        q: "Passage: 'The novel subverted traditional fairy tale tropes by portraying the wicked witch not as an embodiment of pure evil, but as a misunderstood outcast seeking justice.' Question: How did the novel alter traditional fairy tale tropes?",
        options: [
            'By eliminating all magical elements in favor of hard science fiction',
            'By portraying the wicked witch as a misunderstood outcast seeking justice',
            'By replacing human characters with talking woodland animals',
            'By ending the story with an unresolved cliffhanger'
        ],
        answer: 1,
        explanation: "The passage notes it portrayed the wicked witch as a misunderstood outcast seeking justice rather than pure evil."
    },
    {
        q: "Passage: 'Marine biologists use hydrophones to record underwater whale songs, tracking pod migrations and studying communication patterns across ocean basins.' Question: What do marine biologists use hydrophones for?",
        options: [
            'To measure ocean water temperature and salinity',
            'To record whale songs and track pod migrations',
            'To map underwater earthquake fault lines',
            'To deter predatory sharks from swimming near beaches'
        ],
        answer: 1,
        explanation: "The text states they record underwater whale songs, tracking pod migrations."
    },
    {
        q: "Passage: 'The culinary school curriculum emphasizes mise en place—a French term meaning having all ingredients measured, cut, and organized before cooking begins.' Question: What does the practice of mise en place require a chef to do?",
        options: [
            'Clean all kitchen dishes immediately after dinner service',
            'Measure, cut, and organize all ingredients before cooking starts',
            'Source organic vegetables exclusively from local farmers',
            'Invent brand new fusion recipes every single week'
        ],
        answer: 1,
        explanation: "The passage defines it as having all ingredients measured, cut, and organized before cooking begins."
    },
    {
        q: "Passage: 'By planting cover crops like clover during off-seasons, farmers prevent soil erosion, suppress weeds, and naturally replenish soil nitrogen.' Question: What is one agricultural benefit of planting cover crops during off-seasons?",
        options: [
            'Doubling farm machinery lifespan',
            'Preventing soil erosion and replenishing soil nitrogen',
            'Eliminating the need for farm fencing',
            'Producing cash crops for winter livestock feed'
        ],
        answer: 1,
        explanation: "The text notes preventing soil erosion, suppressing weeds, and replenishing soil nitrogen."
    },
    {
        q: "Passage: 'The historian argued that the invention of the printing press was the primary catalyst for the widespread democratization of knowledge in Europe.' Question: According to the historian, what did the printing press facilitate?",
        options: [
            'The immediate abolition of European monarchies',
            'The widespread democratization of knowledge in Europe',
            'The standardization of international shipping laws',
            'The rapid industrialization of textile factories'
        ],
        answer: 1,
        explanation: "The passage states it was the primary catalyst for the widespread democratization of knowledge."
    },
    {
        q: "Passage: 'The automated greenhouse adjusts humidity, temperature, and nutrient delivery in real-time, optimizing crop yields while minimizing water waste.' Question: How does the automated greenhouse optimize plant growth?",
        options: [
            'By utilizing human farmworkers for manual pruning',
            'By adjusting humidity, temperature, and nutrients in real-time',
            'By exposing crops to ultraviolet night lamps',
            'By replacing soil with liquid chemical baths'
        ],
        answer: 1,
        explanation: "The text explains it adjusts humidity, temperature, and nutrient delivery in real-time."
    },
    {
        q: "Passage: 'The poet employed synesthesia—blending sensory experiences by describing sounds in visual terms, such as 'a piercing golden chime'.' Question: What is the literary technique of synesthesia as described in the text?",
        options: [
            'Using rhyming couplets at the end of every stanza',
            'Blending sensory experiences, such as describing sounds in visual terms',
            'Writing poems entirely in foreign languages',
            'Repeating identical consonant sounds in every line'
        ],
        answer: 1,
        explanation: "The passage defines it as blending sensory experiences by describing sounds in visual terms."
    },
    {
        q: "Passage: 'Paleontologists discovered fossilized feathers bearing microscopic melanosomes, revealing the true iridescent coloration of prehistoric dinosaurs.' Question: What did the discovery of microscopic melanosomes in fossils reveal?",
        options: [
            'The exact lifespan and growth rate of dinosaur hatchlings',
            'The true iridescent coloration of prehistoric dinosaurs',
            'The dietary preference of carnivorous theropods',
            'The atmospheric oxygen levels of the Cretaceous period'
        ],
        answer: 1,
        explanation: "The text states it revealed the true iridescent coloration of prehistoric dinosaurs."
    },
    {
        q: "Passage: 'The city council approved a comprehensive zoning reform allowing mixed-use residential and commercial buildings to revitalize downtown neighborhoods.' Question: What was the purpose of the zoning reform?",
        options: [
            'To ban all commercial businesses from residential streets',
            'To allow mixed-use residential and commercial buildings to revitalize downtown',
            'To restrict building heights to two stories maximum',
            'To convert all public parks into parking lots'
        ],
        answer: 1,
        explanation: "The passage notes it allowed mixed-use residential and commercial buildings to revitalize downtown."
    },
    {
        q: "Passage: 'The deep-diving sperm whale uses echolocation clicks to stun giant squid in the pitch-black ocean depths before consuming them.' Question: How does the sperm whale incapacitate its prey in the deep ocean?",
        options: [
            'By releasing a toxic cloud of ink',
            'By using powerful echolocation clicks to stun them',
            'By crushing them within its massive jaw coils',
            'By boiling surrounding water with body heat'
        ],
        answer: 1,
        explanation: "The text states it uses echolocation clicks to stun giant squid."
    },
    {
        q: "Passage: 'Psychologists distinguish between intrinsic motivation—driven by internal personal satisfaction—and extrinsic motivation, which relies on external rewards.' Question: What characterizes intrinsic motivation?",
        options: [
            'Desire for cash bonuses and corporate awards',
            'Drive stemming from internal personal satisfaction',
            'Pressure from parental expectations',
            'Fear of failing professional exams'
        ],
        answer: 1,
        explanation: "The passage defines intrinsic motivation as being driven by internal personal satisfaction."
    },
    {
        q: "Passage: 'The restoration ecologist introduced native grasses with deep root systems to stabilize eroding riverbanks and filter agricultural pollutants.' Question: Why were deep-root native grasses introduced to the riverbanks?",
        options: [
            'To provide grazing forage for local dairy cattle',
            'To stabilize eroding riverbanks and filter agricultural pollutants',
            'To create decorative landscaping for park visitors',
            'To increase commercial timber production'
        ],
        answer: 1,
        explanation: "The text states they stabilize eroding riverbanks and filter agricultural pollutants."
    },
    {
        q: "Passage: 'The baroque composer was renowned for counterpoint—the intricate weaving of multiple independent melodic lines played simultaneously.' Question: What is the defining feature of counterpoint in music?",
        options: [
            'Playing a single melody loudly without accompaniment',
            'The intricate weaving of multiple independent melodic lines played simultaneously',
            'Singing lyrics without instrumental background tracks',
            'Using percussion instruments to keep strict tempo'
        ],
        answer: 1,
        explanation: "The passage defines it as the intricate weaving of multiple independent melodic lines played simultaneously."
    },
    {
        q: "Passage: 'Anthropologists studying the remote island tribe discovered a unique lexicon of over thirty distinct words describing various shades of ocean blue.' Question: What did anthropologists discover about the island tribe?",
        options: [
            'They had no concept of numeric counting',
            'They had a lexicon of over thirty distinct words for ocean blue',
            'They communicated exclusively through musical whistling',
            'They practiced nomadic seafaring without navigation tools'
        ],
        answer: 1,
        explanation: "The text notes a unique lexicon of over thirty distinct words describing various shades of ocean blue."
    },
    {
        q: "Passage: 'The minimalist painter limited her palette strictly to shades of white and gray, exploring texture and lighting variations without relying on vibrant hues.' Question: What was the artistic focus of the minimalist painter?",
        options: [
            'Portraying complex historical battle scenes with intense color',
            'Exploring texture and lighting variations using only white and gray',
            'Painting large-scale portraits of political leaders',
            'Using neon fluorescent pigments to glow in the dark'
        ],
        answer: 1,
        explanation: "The passage states she explored texture and lighting variations without relying on vibrant hues, sticking to white and gray."
    },
    {
        q: "Passage: 'Climate scientists utilize supercomputers to run complex atmospheric simulations, predicting long-term weather shifts under rising carbon emissions.' Question: What is the purpose of running atmospheric simulations on supercomputers?",
        options: [
            'To track daily commercial airline flight paths',
            'To predict long-term weather shifts under rising carbon emissions',
            'To schedule municipal street cleaning operations',
            'To calculate solar panel energy output for homes'
        ],
        answer: 1,
        explanation: "The text states they predict long-term weather shifts under rising carbon emissions."
    },
    {
        q: "Passage: 'The playwright utilized dramatic irony—allowing the audience to know a critical secret while the tragic protagonist remained entirely oblivious.' Question: What effect does dramatic irony create in a play?",
        options: [
            'It keeps both the audience and characters guessing until the final scene',
            'It allows the audience to know a secret while the protagonist remains oblivious',
            'It forces actors to improvise their dialogue without a script',
            'It turns a serious tragedy into a lighthearted comedy'
        ],
        answer: 1,
        explanation: "The passage defines it as allowing the audience to know a critical secret while the protagonist remains oblivious."
    },
    {
        q: "Passage: 'The ancient aqueduct system transported fresh mountain water across deep valleys using a precise, calculated downward slope and gravity alone.' Question: How did the ancient aqueduct transport water across valleys?",
        options: [
            'Using steam-powered mechanical pumps',
            'Using a precise downward slope and gravity alone',
            'Through leather hoses pulled by teams of oxen',
            'By pressurizing water inside sealed bronze pipes'
        ],
        answer: 1,
        explanation: "The text states it used a precise, calculated downward slope and gravity alone."
    },
    {
        q: "Passage: 'Behavioral biologists observed that chimpanzees fashion makeshift tools by stripping twigs to extract protein-rich termites from underground mounds.' Question: How do chimpanzees use stripped twigs?",
        options: [
            'To build overhead sleeping platforms in trees',
            'To extract protein-rich termites from underground mounds',
            'To defend their territory from rival primate troops',
            'To scratch hard-to-reach areas of their fur'
        ],
        answer: 1,
        explanation: "The passage explains they use them to extract protein-rich termites from underground mounds."
    },
    {
        q: "Passage: 'The financial analyst recommended portfolio diversification, spreading investments across various global sectors to minimize exposure to sudden market volatility.' Question: What is the primary benefit of portfolio diversification?",
        options: [
            'Guaranteed short-term double-digit financial returns',
            'Minimizing exposure to sudden market volatility',
            'Eliminating all tax liabilities on capital gains',
            'Simplifying yearly income tax filing paperwork'
        ],
        answer: 1,
        explanation: "The text notes it minimizes exposure to sudden market volatility."
    },
    {
        q: "Passage: 'The medieval illuminated manuscript was adorned with borders made of crushed gold leaf and vibrant lapis lazuli pigment, symbolizing sacred devotion.' Question: What materials were used to adorn the manuscript's borders?",
        options: [
            'Plastic laminate and metallic spray paint',
            'Crushed gold leaf and vibrant lapis lazuli pigment',
            'Pressed flower petals and tree resin glue',
            'Charcoal dust and powdered chalk'
        ],
        answer: 1,
        explanation: "The passage states they were adorned with crushed gold leaf and vibrant lapis lazuli pigment."
    },
    {
        q: "Passage: 'Neuroscientists found that aerobic exercise increases blood flow to the hippocampus, directly stimulating the growth of new neurons associated with memory.' Question: How does aerobic exercise benefit the brain according to the text?",
        options: [
            'By shrinking the skull to protect against concussions',
            'By increasing blood flow to the hippocampus and stimulating neuron growth',
            'By slowing down overall metabolic heart rates',
            'By eliminating the need for rapid eye movement sleep'
        ],
        answer: 1,
        explanation: "The passage states it increases blood flow to the hippocampus, stimulating the growth of new neurons associated with memory."
    },
    {
        q: "Passage: 'The utopian novel depicts a society free of monetary exchange, where citizens contribute labor based on personal passion rather than financial compensation.' Question: How is labor organized in the novel's society?",
        options: [
            'Mandatory government work assignments based on aptitude tests',
            'Contributions based on personal passion rather than financial compensation',
            'Hourly wage labor overseen by corporate managers',
            'Bartering surplus agricultural goods in open markets'
        ],
        answer: 1,
        explanation: "The text notes citizens contribute labor based on personal passion rather than financial compensation."
    },
    {
        q: "Passage: 'Astronomers use adaptive optics technology in ground-based telescopes, deforming flexible mirrors in real-time to cancel out atmospheric blurring.' Question: What is the function of adaptive optics in telescopes?",
        options: [
            'To magnify distant galaxies one thousand times further',
            'To deform flexible mirrors in real-time and cancel out atmospheric blurring',
            'To filter harmful solar radiation before it hits lenses',
            'To rotate the telescope dome faster than Earth's rotation'
        ],
        answer: 1,
        explanation: "The passage explains they deform flexible mirrors in real-time to cancel out atmospheric blurring."
    },
    {
        q: "Passage: 'The urban farming initiative converted vacant alleyways into vertical hydroponic gardens, producing leafy greens for local food pantries.' Question: What was produced by the vertical hydroponic gardens?",
        options: [
            'Root vegetables like potatoes and carrots',
            'Leafy greens for local food pantries',
            'Exotic tropical fruits and citrus trees',
            'Grains like wheat and barley for bakeries'
        ],
        answer: 1,
        explanation: "The text states they produced leafy greens for local food pantries."
    },
    {
        q: "Passage: 'The literary critic praised the memoir for its unsparing honesty, refusing to romanticize the author's turbulent childhood poverty.' Question: Why did the critic praise the memoir?",
        options: [
            'For its humorous fictionalization of historical events',
            'For its unsparing honesty without romanticizing childhood poverty',
            'For its complex fantasy world-building and magic systems',
            'For its optimistic portrayal of corporate wealth'
        ],
        answer: 1,
        explanation: "The passage highlights its unsparing honesty, refusing to romanticize the author's turbulent childhood poverty."
    },
    {
        q: "Passage: 'Marine biologists discovered that clownfish live within stinging sea anemones, forming a mutualistic bond where both species protect one another.' Question: What kind of relationship exists between clownfish and sea anemones?",
        options: [
            'A parasitic relationship where the anemone is slowly consumed',
            'A mutualistic bond where both species protect one another',
            'A predatory relationship where fish hunt anemone tentacles',
            'A competitive relationship over rock territory'
        ],
        answer: 1,
        explanation: "The text describes it as a mutualistic bond where both species protect one another."
    },
    {
        q: "Passage: 'The architect utilized passive solar design, positioning thermal mass walls to absorb daytime heat and slowly release it during chilly desert nights.' Question: How did passive solar design keep the building warm at night?",
        options: [
            'By burning natural gas in underground furnaces',
            'By using thermal mass walls to absorb daytime heat and release it at night',
            'By circulating heated water through ceiling pipes',
            'By trapping geothermal steam beneath floorboards'
        ],
        answer: 1,
        explanation: "The passage states thermal mass walls absorb daytime heat and slowly release it at night."
    },
    {
        q: "Passage: 'The historical documentary exposed how wartime propaganda posters utilized emotionally charged imagery to mobilize civilian home-front support.' Question: What was the purpose of wartime propaganda posters?",
        options: [
            'To advertise commercial consumer products to families',
            'To utilize emotional imagery to mobilize civilian home-front support',
            'To teach foreign languages to enlisted soldiers',
            'To record neutral journalistic accounts of battles'
        ],
        answer: 1,
        explanation: "The text states they utilized emotionally charged imagery to mobilize civilian home-front support."
    },
    {
        q: "Passage: 'The botanist identified a rare orchid species thriving exclusively in the acidic canopy soil of undisturbed rainforest branches.' Question: Where does this rare orchid species grow?",
        options: [
            'In deep subterranean limestone caves',
            'In the acidic canopy soil of undisturbed rainforest branches',
            'Along saltwater mangrove coastlines',
            'In arid desert sand dunes'
        ],
        answer: 1,
        explanation: "The passage states it thrives exclusively in the acidic canopy soil of undisturbed rainforest branches."
    },
    {
        q: "Passage: 'Behavioral studies indicate that owning a domestic pet can lower human blood pressure and reduce chronic feelings of loneliness.' Question: What are two health benefits associated with owning a pet?"
        ,
        options: [
            'Lowering blood pressure and reducing feelings of loneliness',
            'Increasing bone density and curing respiratory infections',
            'Improving night vision and accelerating muscle recovery',
            'Enhancing mathematical reasoning and foreign vocabulary'
        ],
        answer: 0,
        explanation: "The text explicitly mentions lowering human blood pressure and reducing chronic feelings of loneliness."
    },
    {
        q: "Passage: 'The novel's unreliable narrator forces readers to constantly question the truthfulness of the events depicted throughout the psychological thriller.' Question: What effect does an unreliable narrator have on the reader?",
        options: [
            'It makes the plot predictable and straightforward',
            'It forces readers to constantly question the truthfulness of events',
            'It guarantees a happy and uplifting conclusion',
            'It eliminates all suspense and mystery from the story'
        ],
        answer: 1,
        explanation: "The passage states it forces readers to constantly question the truthfulness of the events depicted."
    },
    {
        q: "Passage: 'The aerospace engineer designed lightweight titanium lattice brackets, reducing satellite launch weight without sacrificing structural integrity.' Question: Why were titanium lattice brackets used in satellites?",
        options: [
            'To lower manufacturing costs compared to plastic',
            'To reduce satellite launch weight without sacrificing structural integrity',
            'To generate magnetic shielding against solar flares',
            'To act as solar panels for electricity'
        ],
        answer: 1,
        explanation: "The text notes they reduce satellite launch weight without sacrificing structural integrity."
    },
    {
        q: "Passage: 'The cultural historian examined how coffeehouse culture in 18th-century Europe served as a vital incubator for political discourse and revolutionary ideas.' Question: What role did European coffeehouses play in the 18th century?",
        options: [
            'They functioned as quiet monastic sanctuaries for solitary prayer',
            'They served as vital incubators for political discourse and revolutionary ideas',
            'They operated as underground gambling dens and criminal hideouts',
            'They served exclusively as marketplaces for spice merchants'
        ],
        answer: 1,
        explanation: "The passage states they served as a vital incubator for political discourse and revolutionary ideas."
    },
    {
        q: "Passage: 'The evolutionary biologist noted that mimicry rings allow multiple unpalatable butterfly species to share the burden of predator education.' Question: What is the benefit of mimicry rings for unpalatable butterflies?",
        options: [
            'They can fly faster during seasonal migrations',
            'They share the burden of teaching predators that they taste bad',
            'They can camouflage against tree bark more effectively',
            'They attract more pollinating bees to flowers'
        ],
        answer: 1,
        explanation: "The text explains they share the burden of predator education."
    },
    {
        q: "Passage: 'The economic report highlighted that investing in universal preschool yields massive long-term societal dividends through enhanced educational outcomes.' Question: What is a long-term benefit of universal preschool according to the report?",
        options: [
            'Immediate elimination of all public school property taxes',
            'Enhanced educational outcomes that yield massive societal dividends',
            'Reduced university tuition costs for undergraduate students',
            'Decreased traffic congestion around school zones'
        ],
        answer: 1,
        explanation: "The passage highlights enhanced educational outcomes yielding massive long-term societal dividends."
    },
    {
        q: "Passage: 'The concert pianist practiced with a metronome to master complex polyrhythms, simultaneously playing duple and triple time signatures seamlessly.' Question: What did the metronome help the pianist achieve?",
        options: [
            'Memorizing sheet music without looking at pages',
            'Mastering complex polyrhythms with duple and triple time signatures',
            'Tuning piano strings to exact acoustic frequencies',
            'Playing faster than any other performer in history'
        ],
        answer: 1,
        explanation: "The passage notes practicing with a metronome to master complex polyrhythms."
    },
    {
        q: "Passage: 'The conservation project successfully restored an abandoned quarry into a thriving wetland sanctuary for migrating waterfowl.' Question: What was the outcome of the conservation project?",
        options: [
            'An abandoned quarry was turned into a wetland sanctuary for waterfowl',
            'A pristine forest was cleared to build an industrial parking lot',
            'A river was dammed to create a hydroelectric reservoir',
            'A mountain valley was mined for precious gemstones'
        ],
        answer: 0,
        explanation: "The text states they successfully restored an abandoned quarry into a thriving wetland sanctuary for migrating waterfowl."
    },
    {
        q: "Passage: 'The philosopher distinguished between objective facts about the physical universe and subjective human values regarding morality and beauty.' Question: What two categories does the philosopher contrast?",
        options: [
            'Ancient history and futuristic science fiction',
            'Objective physical facts and subjective human values of morality and beauty',
            'Capitalist economies and socialist political structures',
            'Monogamous families and communal tribal living'
        ],
        answer: 1,
        explanation: "The passage contrasts objective facts about the physical universe with subjective human values regarding morality and beauty."
    },
    {
        q: "Passage: 'The marine research vessel deployed a remotely operated vehicle (ROV) to explore hydrothermal vents thousands of meters below the ocean surface.' Question: How did researchers explore deep hydrothermal vents?",
        options: [
            'Using scuba diving gear and weighted diving suits',
            'By deploying a remotely operated vehicle (ROV)',
            'By dragging large fishing nets along the ocean floor',
            'Using sonar equipment mounted on airplanes'
        ],
        answer: 1,
        explanation: "The text states they deployed a remotely operated vehicle (ROV) to explore hydrothermal vents."
    },
    {
        q: "Passage: 'The novel's setting is a desolate post-industrial wasteland where remnants of civilization scavenge for rusted machinery parts to survive.' Question: How is the setting of the novel described?",
        options: [
            'A lush tropical paradise untouched by human industry',
            'A desolate post-industrial wasteland where people scavenge machinery',
            'A futuristic utopian metropolis floating in the clouds',
            'A bustling medieval kingdom filled with knights and castles'
        ],
        answer: 1,
        explanation: "The passage describes it as a desolate post-industrial wasteland where remnants scavenge for rusted machinery."
    }
];
