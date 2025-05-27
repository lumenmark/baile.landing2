const cityData = {
  'new-york-city': {
    name: 'New York City',
    slug: 'new-york-city',
    seo: {
      title: 'Dance Events in NYC | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best New York City dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the NYC dance scene with Baile.AI.',
      keywords: [
        'nyc bachata events', 'new york salsa events', 'nyc zouk events', 'nyc latin dance events',
        'new york social dancing', 'nyc dance classes', 'manhattan dance community', 'nyc dance partners',
        'nyc kizomba events', 'new york dance meetups', 'brooklyn dance events'
      ]
    },
    hero: {
      title: 'Dance in NYC with Baile.AI',
      description: 'Join the vibrant New York City dance community. Discover the best bachata, salsa, and zouk events across Manhattan, Brooklyn, and Queens. Connect with fellow dancers in the city that never sleeps.'
    },
    danceScene: {
      overview: 'New York City boasts one of the world\'s most diverse and energetic dance scenes. From intimate Brooklyn studios to grand Manhattan ballrooms, the city offers endless opportunities for social dancing, world-class instruction, and unforgettable events.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'Experience the sensual rhythms of bachata at weekly socials in Manhattan and Brooklyn, with top international instructors.'
      },
      {
        name: 'Salsa',
        emoji: '🕺',
        description: 'Dance salsa on1 and on2 at legendary NYC venues, home to some of the world\'s best salsa dancers and musicians.'
      },
      {
        name: 'Zouk',
        emoji: '🎶',
        description: 'Join the growing zouk community with regular parties and workshops featuring renowned Brazilian zouk artists.'
      }
    ],
    danceSchools: [
      { name: 'Dance Manhattan', specialties: ['Salsa', 'Bachata', 'Merengue'], area: 'Midtown Manhattan' },
      { name: 'Stepping Out Studios', specialties: ['Salsa', 'Bachata', 'Zouk'], area: 'Upper West Side' },
      { name: 'DanceSport NYC', specialties: ['Ballroom', 'Latin', 'Bachata'], area: 'Chelsea' },
      { name: 'Brooklyn Bachata', specialties: ['Bachata', 'Merengue'], area: 'Williamsburg' }
    ],
    venues: [
      { name: 'SOBs', type: 'Live Music & Dancing', area: 'SoHo' },
      { name: 'Copacabana', type: 'Latin Nightclub', area: 'Times Square' },
      { name: 'The Well', type: 'Dance Social Venue', area: 'Williamsburg' },
      { name: 'Gonzalez y Gonzalez', type: 'Mexican Restaurant & Dancing', area: 'SoHo' },
      { name: 'Taj Lounge', type: 'Rooftop Dancing', area: 'Tribeca' },
      { name: 'Friends and Lovers', type: 'Dance Parties', area: 'Crown Heights' }
    ]
  },
  'austin': {
    name: 'Austin',
    slug: 'austin',
    seo: {
      title: 'Dance Events in Austin | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best Austin dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the Austin dance scene with Baile.AI.',
      keywords: [
        'austin bachata events', 'austin salsa events', 'austin zouk events', 'austin latin dance events',
        'austin social dancing', 'austin dance classes', 'austin dance community', 'austin dance partners',
        'austin kizomba events', 'austin dance meetups'
      ]
    },
    hero: {
      title: 'Dance in Austin with Baile.AI',
      description: 'Experience Austin\'s vibrant dance culture where Latin rhythms meet Texas hospitality. Discover bachata, salsa, and zouk events in the Live Music Capital of the World.'
    },
    danceScene: {
      overview: 'Austin\'s dance scene perfectly embodies the city\'s "Keep Austin Weird" spirit. With a strong Latin music foundation and welcoming community, dancers of all levels find their rhythm in this music-loving city.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'Austin\'s bachata scene is growing rapidly with weekly socials and workshops featuring local and visiting instructors.'
      },
      {
        name: 'Salsa',
        emoji: '🕺',
        description: 'From traditional Cuban salsa to modern LA-style, Austin offers diverse salsa experiences across the city.'
      },
      {
        name: 'Two-Step',
        emoji: '🤠',
        description: 'Texas two-step and country dancing blend beautifully with Latin styles in Austin\'s unique dance fusion.'
      }
    ],
    danceSchools: [
      { name: 'Austin Salsa Academy', specialties: ['Salsa', 'Bachata', 'Merengue'], area: 'North Austin' },
      { name: 'Dancemakers of Austin', specialties: ['Ballroom', 'Latin', 'Country'], area: 'Central Austin' },
      { name: 'Bachata ATX', specialties: ['Bachata', 'Zouk'], area: 'East Austin' }
    ],
    venues: [
      { name: 'Continental Club', type: 'Live Music & Dancing', area: 'South Austin' },
      { name: 'Sahara Lounge', type: 'Eclectic Music Venue', area: 'East Austin' },
      { name: 'White Horse', type: 'Honky-tonk Bar', area: 'East Austin' },
      { name: 'The Far Out', type: 'Outdoor Venue', area: 'South Austin' }
    ]
  },
  'dallas': {
    name: 'Dallas',
    slug: 'dallas',
    seo: {
      title: 'Dance Events in Dallas | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best Dallas dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the Dallas dance scene with Baile.AI.',
      keywords: [
        'dallas bachata events', 'dallas salsa events', 'dallas zouk events', 'dallas latin dance events',
        'dallas social dancing', 'dallas dance classes', 'dallas dance community', 'dallas dance partners',
        'dallas kizomba events', 'dallas dance meetups'
      ]
    },
    hero: {
      title: 'Dance in Dallas with Baile.AI',
      description: 'Join Dallas\'s passionate dance community where traditional Latin rhythms thrive in the heart of Texas. Experience world-class instruction and unforgettable social dancing.'
    },
    danceScene: {
      overview: 'Dallas boasts a rich and diverse dance scene with strong roots in Latin culture. The city\'s large Hispanic population has fostered an authentic and vibrant community of dancers and musicians.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'Dallas has one of the strongest bachata scenes in Texas, with multiple weekly events and renowned local instructors.'
      },
      {
        name: 'Salsa',
        emoji: '🕺',
        description: 'Experience authentic salsa dancing with live bands and DJs spinning the latest hits from across Latin America.'
      },
      {
        name: 'Cumbia',
        emoji: '🎵',
        description: 'Enjoy traditional and modern cumbia styles that reflect Dallas\'s rich Mexican heritage.'
      }
    ],
    danceSchools: [
      { name: 'Dallas Dance Academy', specialties: ['Salsa', 'Bachata', 'Cumbia'], area: 'Deep Ellum' },
      { name: 'Ritmo Latino Dance Studio', specialties: ['Bachata', 'Merengue', 'Salsa'], area: 'Oak Cliff' },
      { name: 'Dancetime Studio', specialties: ['Ballroom', 'Latin', 'Social Dancing'], area: 'Plano' }
    ],
    venues: [
      { name: 'Lindo Mexico', type: 'Mexican Restaurant & Dancing', area: 'Oak Cliff' },
      { name: 'Cowboys Red River', type: 'Country & Latin Dancing', area: 'Downtown' },
      { name: 'Longhorn Bar', type: 'Live Music Venue', area: 'Deep Ellum' },
      { name: 'El Corazon', type: 'Latin Nightclub', area: 'Addison' }
    ]
  },
  'houston': {
    name: 'Houston',
    slug: 'houston',
    seo: {
      title: 'Dance Events in Houston | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best Houston dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the Houston dance scene with Baile.AI.',
      keywords: [
        'houston bachata events', 'houston salsa events', 'houston zouk events', 'houston latin dance events',
        'houston social dancing', 'houston dance classes', 'houston dance community', 'houston dance partners',
        'houston kizomba events', 'houston dance meetups'
      ]
    },
    hero: {
      title: 'Dance in Houston with Baile.AI',
      description: 'Discover Houston\'s multicultural dance scene where Latin passion meets Southern hospitality. Join a diverse community of dancers in America\'s most diverse city.'
    },
    danceScene: {
      overview: 'Houston\'s incredibly diverse population creates one of the most multicultural dance scenes in the country. From traditional Mexican folklorico to contemporary bachata, the city celebrates every style of Latin dance.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'Houston\'s bachata community is passionate and welcoming, with events spanning from traditional to modern sensual styles.'
      },
      {
        name: 'Salsa',
        emoji: '🕺',
        description: 'Experience salsa dancing influenced by Mexican, Colombian, and Cuban traditions in Houston\'s diverse venues.'
      },
      {
        name: 'Folklorico',
        emoji: '🌮',
        description: 'Celebrate Mexican cultural heritage through traditional folklorico dancing at community festivals and events.'
      }
    ],
    danceSchools: [
      { name: 'Houston Salsa Congress', specialties: ['Salsa', 'Bachata', 'Cha-cha'], area: 'Galleria' },
      { name: 'Danza Libre', specialties: ['Bachata', 'Zouk', 'Kizomba'], area: 'Heights' },
      { name: 'Movin\' Melodies Dance Studio', specialties: ['Ballroom', 'Latin', 'Wedding'], area: 'Memorial' }
    ],
    venues: [
      { name: 'Lupe Tortilla', type: 'Tex-Mex Restaurant & Dancing', area: 'Multiple Locations' },
      { name: 'Marfreless', type: 'Live Music & Dancing', area: 'East Houston' },
      { name: 'Sambuca', type: 'Jazz & Latin Club', area: 'Downtown' },
      { name: 'Warehouse Live', type: 'Concert Venue', area: 'EaDo' }
    ]
  },
  'miami': {
    name: 'Miami',
    slug: 'miami',
    seo: {
      title: 'Dance Events in Miami | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best Miami dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the Miami dance scene with Baile.AI.',
      keywords: [
        'miami bachata events', 'miami salsa events', 'miami zouk events', 'miami latin dance events',
        'miami social dancing', 'miami dance classes', 'miami dance community', 'miami dance partners',
        'miami kizomba events', 'miami dance meetups', 'south beach dancing'
      ]
    },
    hero: {
      title: 'Dance in Miami with Baile.AI',
      description: 'Experience the ultimate Latin dance destination. From South Beach to Calle Ocho, Miami pulses with authentic Caribbean and Latin American rhythms that make every night feel like a celebration.'
    },
    danceScene: {
      overview: 'Miami is the epicenter of Latin dance in the United States. With direct cultural connections to Cuba, Colombia, Venezuela, and the Caribbean, the city offers the most authentic Latin dance experience outside of Latin America itself.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'Experience bachata at its finest with Dominican musicians and dancers who bring authentic Caribbean flavor to every event.'
      },
      {
        name: 'Salsa',
        emoji: '🕺',
        description: 'Dance to live salsa orchestras and world-renowned DJs in the city where salsa legends are born and celebrated.'
      },
      {
        name: 'Reggaeton',
        emoji: '🔥',
        description: 'Move to the urban beats of reggaeton and perreo that pulse through Miami\'s vibrant nightlife scene.'
      }
    ],
    danceSchools: [
      { name: 'Miami Salsa Machine', specialties: ['Salsa', 'Bachata', 'Merengue'], area: 'Coral Gables' },
      { name: 'DanceFit Studio', specialties: ['Bachata', 'Zouk', 'Kizomba'], area: 'Brickell' },
      { name: 'Salsa Lovers', specialties: ['Cuban Salsa', 'Rueda', 'Son'], area: 'Little Havana' },
      { name: 'Bachata Miami', specialties: ['Bachata Sensual', 'Traditional Bachata'], area: 'South Beach' }
    ],
    venues: [
      { name: 'Ball & Chain', type: 'Historic Cuban Club', area: 'Little Havana' },
      { name: 'Mango\'s Tropical Cafe', type: 'South Beach Institution', area: 'South Beach' },
      { name: 'Cafe Iguana', type: 'Mexican Cantina & Dancing', area: 'Coconut Grove' },
      { name: 'Hoy Como Ayer', type: 'Cuban Music Venue', area: 'Little Havana' },
      { name: 'LIV', type: 'Ultra-Premium Nightclub', area: 'South Beach' },
      { name: 'The Wharf Miami', type: 'Outdoor Venue', area: 'Wynwood' }
    ]
  },
  'portland': {
    name: 'Portland',
    slug: 'portland',
    seo: {
      title: 'Dance Events in Portland | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best Portland dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the Portland dance scene with Baile.AI.',
      keywords: [
        'portland bachata events', 'portland salsa events', 'portland zouk events', 'portland latin dance events',
        'portland social dancing', 'portland dance classes', 'portland dance community', 'portland dance partners',
        'portland kizomba events', 'portland dance meetups'
      ]
    },
    hero: {
      title: 'Dance in Portland with Baile.AI',
      description: 'Join Portland\'s unique and inclusive dance community where creativity meets Latin passion. Experience the Pacific Northwest\'s most welcoming dance scene in the City of Roses.'
    },
    danceScene: {
      overview: 'Portland\'s dance scene reflects the city\'s creative and inclusive spirit. The community emphasizes connection, artistry, and fun, creating a welcoming environment for dancers of all backgrounds and skill levels.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'Portland\'s bachata community embraces both traditional and modern styles with an emphasis on connection and musicality.'
      },
      {
        name: 'Salsa',
        emoji: '🕺',
        description: 'Experience Portland\'s friendly salsa scene where beginners are always welcome and the focus is on community and fun.'
      },
      {
        name: 'Zouk',
        emoji: '🌊',
        description: 'Discover the flowing movements of Brazilian zouk that perfectly complement Portland\'s artistic and expressive culture.'
      }
    ],
    danceSchools: [
      { name: 'PoSalsa', specialties: ['Salsa', 'Bachata', 'Cha-cha'], area: 'Southeast Portland' },
      { name: 'Dance PDX', specialties: ['Bachata', 'Zouk', 'Blues'], area: 'Northeast Portland' },
      { name: 'Ballroom Dance Oregon', specialties: ['Ballroom', 'Latin', 'Swing'], area: 'Southwest Portland' }
    ],
    venues: [
      { name: 'Crystal Ballroom', type: 'Historic Dance Hall', area: 'Downtown' },
      { name: 'McMenamins Mission Theater', type: 'Theater & Events', area: 'Northwest Portland' },
      { name: 'The Goodfoot', type: 'Soul Food & Dancing', area: 'Southeast Portland' },
      { name: 'Holocene', type: 'Music Venue & Club', area: 'Southeast Portland' }
    ]
  },
  'seattle': {
    name: 'Seattle',
    slug: 'seattle',
    seo: {
      title: 'Dance Events in Seattle | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best Seattle dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the Seattle dance scene with Baile.AI.',
      keywords: [
        'seattle bachata events', 'seattle salsa events', 'seattle zouk events', 'seattle latin dance events',
        'seattle social dancing', 'seattle dance classes', 'seattle dance community', 'seattle dance partners',
        'seattle kizomba events', 'seattle dance meetups'
      ]
    },
    hero: {
      title: 'Dance in Seattle with Baile.AI',
      description: 'Experience Seattle\'s vibrant dance community where Latin rhythms meet Pacific Northwest energy. Connect with passionate dancers in the Emerald City\'s growing social dance scene.'
    },
    danceScene: {
      overview: 'Seattle\'s dance scene is characterized by its enthusiasm and rapid growth. The city\'s tech-savvy population brings innovation to traditional dance styles, while maintaining respect for authentic Latin culture and music.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'Seattle\'s bachata scene is rapidly expanding with regular workshops, socials, and visiting international instructors.'
      },
      {
        name: 'Salsa',
        emoji: '🕺',
        description: 'From Colombian to Cuban styles, Seattle\'s salsa community celebrates diversity and welcomes dancers of all levels.'
      },
      {
        name: 'Zouk',
        emoji: '☔',
        description: 'Brazilian zouk has found a perfect home in Seattle, where the flowing movements complement the city\'s artistic culture.'
      }
    ],
    danceSchools: [
      { name: 'Seattle Salsa', specialties: ['Salsa', 'Bachata', 'Merengue'], area: 'Capitol Hill' },
      { name: 'Century Ballroom', specialties: ['Ballroom', 'Latin', 'Swing'], area: 'Capitol Hill' },
      { name: 'Emerald City Salsa', specialties: ['Salsa', 'Bachata', 'Zouk'], area: 'Fremont' }
    ],
    venues: [
      { name: 'Century Ballroom', type: 'Historic Ballroom', area: 'Capitol Hill' },
      { name: 'The Washington Dance Club', type: 'Social Dance Venue', area: 'Wallingford' },
      { name: 'Nectar Lounge', type: 'Live Music Venue', area: 'Fremont' },
      { name: 'Polish Cultural Center', type: 'Community Center', area: 'Georgetown' }
    ]
  },
  'san-francisco': {
    name: 'San Francisco',
    slug: 'san-francisco',
    seo: {
      title: 'Dance Events in San Francisco | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best San Francisco dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the SF dance scene with Baile.AI.',
      keywords: [
        'sf bachata events', 'san francisco salsa events', 'sf zouk events', 'san francisco latin dance events',
        'sf social dancing', 'san francisco dance classes', 'sf dance community', 'san francisco dance partners',
        'sf kizomba events', 'san francisco dance meetups', 'bay area dancing'
      ]
    },
    hero: {
      title: 'Dance in San Francisco with Baile.AI',
      description: 'Join the sophisticated and diverse dance community in the Bay Area. From Mission District salsa to SOMA bachata, San Francisco offers world-class instruction and unforgettable social dancing.'
    },
    danceScene: {
      overview: 'San Francisco\'s dance scene benefits from the city\'s cultural diversity and appreciation for the arts. The tech industry\'s international workforce has created a unique fusion of traditional Latin dance with global influences.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'SF\'s bachata scene attracts world-class instructors and features both traditional Dominican and modern sensual styles.'
      },
      {
        name: 'Salsa',
        emoji: '🕺',
        description: 'Experience salsa dancing in the city\'s historic Mission District, home to authentic Latin culture and cuisine.'
      },
      {
        name: 'Argentine Tango',
        emoji: '🌹',
        description: 'San Francisco has one of the strongest tango communities in the US, with milongas throughout the week.'
      }
    ],
    danceSchools: [
      { name: 'Metronome Ballroom', specialties: ['Ballroom', 'Latin', 'Tango'], area: 'Mission District' },
      { name: 'DanceFX Studios', specialties: ['Salsa', 'Bachata', 'Zouk'], area: 'SOMA' },
      { name: 'Ashkenaz Music & Dance Community Center', specialties: ['World Dance', 'Folk', 'Latin'], area: 'Berkeley' },
      { name: 'Allegro Ballroom', specialties: ['Ballroom', 'Latin', 'Swing'], area: 'Emeryville' }
    ],
    venues: [
      { name: 'El Rio', type: 'Outdoor Patio Bar', area: 'Mission District' },
      { name: 'The Chapel', type: 'Concert Hall', area: 'Mission District' },
      { name: 'Cafe Cocomo', type: 'Live Music & Dancing', area: 'North Beach' },
      { name: 'DNA Lounge', type: 'Alternative Club', area: 'SOMA' },
      { name: 'The Independent', type: 'Music Venue', area: 'The Fillmore' },
      { name: 'Ashkenaz', type: 'Community Dance Center', area: 'Berkeley' }
    ]
  },
  'los-angeles': {
    name: 'Los Angeles',
    slug: 'los-angeles',
    seo: {
      title: 'Dance Events in Los Angeles | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best Los Angeles dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the LA dance scene with Baile.AI.',
      keywords: [
        'la bachata events', 'los angeles salsa events', 'la zouk events', 'los angeles latin dance events',
        'la social dancing', 'los angeles dance classes', 'la dance community', 'los angeles dance partners',
        'la kizomba events', 'los angeles dance meetups', 'hollywood dancing', 'west hollywood dancing'
      ]
    },
    hero: {
      title: 'Dance in Los Angeles with Baile.AI',
      description: 'Experience the glamour and passion of LA\'s dance scene. From Hollywood studios to beachside socials, Los Angeles offers world-class instruction and star-studded events in the entertainment capital of the world.'
    },
    danceScene: {
      overview: 'Los Angeles boasts one of the most dynamic and influential dance scenes globally. With deep roots in the entertainment industry and a massive Latino population, LA offers everything from Hollywood glamour to authentic barrio culture.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'LA\'s bachata scene is legendary, home to international champions and the birthplace of many modern bachata innovations.'
      },
      {
        name: 'Salsa LA Style',
        emoji: '🕺',
        description: 'Experience the birthplace of LA-style salsa dancing, where Hollywood meets Latin passion in perfectly choreographed moves.'
      },
      {
        name: 'West Coast Swing',
        emoji: '✨',
        description: 'Dance the smooth and versatile West Coast Swing that originated in California and remains hugely popular in LA.'
      }
    ],
    danceSchools: [
      { name: 'Xtreme Dance Center', specialties: ['Bachata', 'Salsa LA', 'Zouk'], area: 'Hollywood' },
      { name: 'Dancecorp', specialties: ['Salsa', 'Bachata', 'Merengue'], area: 'West Hollywood' },
      { name: 'Arthur Murray Beverly Hills', specialties: ['Ballroom', 'Latin', 'Social'], area: 'Beverly Hills' },
      { name: 'Club Mayan Dance Academy', specialties: ['Salsa', 'Bachata', 'Cumbia'], area: 'Downtown LA' }
    ],
    venues: [
      { name: 'El Floridita', type: 'Cuban Restaurant & Dancing', area: 'Hollywood' },
      { name: 'Club Mayan', type: 'Historic Latin Club', area: 'Downtown LA' },
      { name: 'Harvelle\'s', type: 'Blues Club & Dancing', area: 'West Hollywood' },
      { name: 'The Granada', type: 'Theater & Events', area: 'West Hollywood' },
      { name: 'Conga Room', type: 'Latin Nightclub', area: 'Downtown LA' },
      { name: 'Moonlight Rollerway', type: 'Roller Rink & Dancing', area: 'Glendale' }
    ]
  },
  'chicago': {
    name: 'Chicago',
    slug: 'chicago',
    seo: {
      title: 'Dance Events in Chicago | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best Chicago dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the Chicago dance scene with Baile.AI.',
      keywords: [
        'chicago bachata events', 'chicago salsa events', 'chicago zouk events', 'chicago latin dance events',
        'chicago social dancing', 'chicago dance classes', 'chicago dance community', 'chicago dance partners',
        'chicago kizomba events', 'chicago dance meetups', 'pilsen dancing', 'little village dancing'
      ]
    },
    hero: {
      title: 'Dance in Chicago with Baile.AI',
      description: 'Join Chicago\'s passionate dance community where Midwest hospitality meets Latin fire. From Pilsen to Lincoln Park, the Windy City offers authentic culture and world-class social dancing.'
    },
    danceScene: {
      overview: 'Chicago\'s dance scene is deeply rooted in the city\'s rich Latino heritage, particularly in neighborhoods like Pilsen and Little Village. The community combines authentic traditional styles with contemporary innovation, all wrapped in famous Midwest friendliness.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'Chicago\'s bachata community is known for its warmth and technique, with strong Dominican and Mexican influences shaping the local style.'
      },
      {
        name: 'Salsa',
        emoji: '🕺',
        description: 'Experience salsa dancing with authentic Mexican and Puerto Rican flavors in Chicago\'s vibrant Latino neighborhoods.'
      },
      {
        name: 'Chicago Stepping',
        emoji: '🎩',
        description: 'Learn the smooth and sophisticated Chicago Stepping, a uniquely local dance style that originated in the city\'s South Side.'
      }
    ],
    danceSchools: [
      { name: 'Chicago Salsa & Bachata Academy', specialties: ['Salsa', 'Bachata', 'Merengue'], area: 'Pilsen' },
      { name: 'DancEast Studio', specialties: ['Bachata', 'Zouk', 'Kizomba'], area: 'Logan Square' },
      { name: 'Tango Berretin', specialties: ['Argentine Tango', 'Milonga'], area: 'Lincoln Park' },
      { name: 'Stepping With Style', specialties: ['Chicago Stepping', 'Steppin\''], area: 'South Side' }
    ],
    venues: [
      { name: 'Alhambra Palace', type: 'Historic Ballroom', area: 'West Side' },
      { name: 'Cafe Bionda', type: 'Italian Restaurant & Dancing', area: 'Little Italy' },
      { name: 'La Catrina Cafe', type: 'Mexican Restaurant & Dancing', area: 'Pilsen' },
      { name: 'Chicago Stepin\'', type: 'Stepping Venue', area: 'South Side' },
      { name: 'Neo-Futurist Theater', type: 'Alternative Venue', area: 'Andersonville' }
    ]
  },
  'washington-dc': {
    name: 'Washington DC',
    slug: 'washington-dc',
    seo: {
      title: 'Dance Events in Washington DC | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best Washington DC dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the DC dance scene with Baile.AI.',
      keywords: [
        'dc bachata events', 'washington dc salsa events', 'dc zouk events', 'washington dc latin dance events',
        'dc social dancing', 'washington dc dance classes', 'dc dance community', 'washington dc dance partners',
        'dc kizomba events', 'washington dc dance meetups', 'adams morgan dancing', 'dupont circle dancing'
      ]
    },
    hero: {
      title: 'Dance in Washington DC with Baile.AI',
      description: 'Experience the sophisticated and international dance scene in the nation\'s capital. Connect with diplomats, professionals, and passionate dancers from around the world in DC\'s diverse social dance community.'
    },
    danceScene: {
      overview: 'Washington DC\'s dance scene reflects the city\'s international character and professional atmosphere. With embassies, universities, and a highly educated population, the dance community is sophisticated, diverse, and welcoming to dancers of all backgrounds.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'DC\'s bachata scene attracts international dancers and features both traditional Dominican and modern sensual styles with exceptional technique.'
      },
      {
        name: 'Salsa',
        emoji: '🕺',
        description: 'Experience salsa dancing with influences from across Latin America, reflecting DC\'s international diplomatic community.'
      },
      {
        name: 'Kizomba',
        emoji: '🌍',
        description: 'DC has one of the strongest kizomba communities in the US, with connections to African embassies and cultural organizations.'
      }
    ],
    danceSchools: [
      { name: 'DC Dance Collective', specialties: ['Salsa', 'Bachata', 'Zouk'], area: 'Dupont Circle' },
      { name: 'Salsa With Silvia', specialties: ['Salsa', 'Bachata', 'Cha-cha'], area: 'Adams Morgan' },
      { name: 'DanceSport Academy', specialties: ['Ballroom', 'Latin', 'Competition'], area: 'Chevy Chase' },
      { name: 'Kizomba DC', specialties: ['Kizomba', 'Semba', 'Tarraxo'], area: 'Columbia Heights' }
    ],
    venues: [
      { name: 'Cafe Citron', type: 'Latin Restaurant & Dancing', area: 'Dupont Circle' },
      { name: 'Eighteenth Street Lounge', type: 'Upscale Club', area: 'Dupont Circle' },
      { name: 'Tropicalia', type: 'Latin Club', area: 'Adams Morgan' },
      { name: 'La Tasca', type: 'Spanish Restaurant & Dancing', area: 'Dupont Circle' },
      { name: 'Policy', type: 'Rooftop Bar & Dancing', area: 'U Street' }
    ]
  },
  'atlanta': {
    name: 'Atlanta',
    slug: 'atlanta',
    seo: {
      title: 'Dance Events in Atlanta | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best Atlanta dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the Atlanta dance scene with Baile.AI.',
      keywords: [
        'atlanta bachata events', 'atlanta salsa events', 'atlanta zouk events', 'atlanta latin dance events',
        'atlanta social dancing', 'atlanta dance classes', 'atlanta dance community', 'atlanta dance partners',
        'atlanta kizomba events', 'atlanta dance meetups', 'buckhead dancing', 'midtown atlanta dancing'
      ]
    },
    hero: {
      title: 'Dance in Atlanta with Baile.AI',
      description: 'Join Atlanta\'s vibrant and welcoming dance community where Southern hospitality meets Latin passion. Experience the growing social dance scene in the cultural heart of the New South.'
    },
    danceScene: {
      overview: 'Atlanta\'s dance scene is rapidly growing, fueled by the city\'s expanding Latino population and vibrant nightlife culture. The community combines Southern charm with Latin fire, creating a uniquely welcoming atmosphere for dancers of all levels.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'Atlanta\'s bachata scene is passionate and growing, with regular socials and workshops featuring visiting international instructors.'
      },
      {
        name: 'Salsa',
        emoji: '🕺',
        description: 'Experience salsa dancing with Southern flair, where traditional Latin styles meet Atlanta\'s famous hospitality and energy.'
      },
      {
        name: 'Reggaeton',
        emoji: '🔥',
        description: 'Dance to the urban beats of reggaeton and perreo that pulse through Atlanta\'s dynamic hip-hop influenced nightlife scene.'
      }
    ],
    danceSchools: [
      { name: 'Atlanta Salsa Academy', specialties: ['Salsa', 'Bachata', 'Merengue'], area: 'Midtown' },
      { name: 'DanceBeat Studio', specialties: ['Bachata', 'Zouk', 'Kizomba'], area: 'Buckhead' },
      { name: 'Atlanta Ballroom Dance Center', specialties: ['Ballroom', 'Latin', 'Social'], area: 'Sandy Springs' },
      { name: 'Ritmo Latino ATL', specialties: ['Salsa', 'Bachata', 'Cumbia'], area: 'Doraville' }
    ],
    venues: [
      { name: 'Havana Club ATL', type: 'Cuban Restaurant & Dancing', area: 'Midtown' },
      { name: 'Red Phone Booth', type: 'Speakeasy & Dancing', area: 'East Atlanta' },
      { name: 'Opera Nightclub', type: 'Upscale Club', area: 'Midtown' },
      { name: 'Eclipse di Luna', type: 'Spanish Tapas & Dancing', area: 'Dunwoody' },
      { name: 'The Sound Table', type: 'Music Venue & Dancing', area: 'Old Fourth Ward' }
    ]
  },
  'orlando': {
    name: 'Orlando',
    slug: 'orlando',
    seo: {
      title: 'Dance Events in Orlando | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best Orlando dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the Orlando dance scene with Baile.AI.',
      keywords: [
        'orlando bachata events', 'orlando salsa events', 'orlando zouk events', 'orlando latin dance events',
        'orlando social dancing', 'orlando dance classes', 'orlando dance community', 'orlando dance partners',
        'orlando kizomba events', 'orlando dance meetups', 'downtown orlando dancing', 'winter park dancing'
      ]
    },
    hero: {
      title: 'Dance in Orlando with Baile.AI',
      description: 'Experience Orlando\'s energetic dance scene where theme park magic meets Latin passion. Join a diverse community of dancers in the heart of Central Florida\'s entertainment capital.'
    },
    danceScene: {
      overview: 'Orlando\'s dance scene benefits from the city\'s tourism industry and growing Latino population. The community is energetic and diverse, with influences from Puerto Rico, Colombia, and the Caribbean creating a unique Central Florida flavor.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'Orlando\'s bachata community is vibrant and welcoming, with strong Caribbean influences and regular events featuring live music.'
      },
      {
        name: 'Salsa',
        emoji: '🕺',
        description: 'Dance salsa with authentic Puerto Rican and Colombian flavors in Orlando\'s growing Latino entertainment district.'
      },
      {
        name: 'Merengue',
        emoji: '🌴',
        description: 'Enjoy the fast-paced rhythms of merengue that reflect Orlando\'s strong Dominican and Caribbean connections.'
      }
    ],
    danceSchools: [
      { name: 'Orlando Salsa Dancing', specialties: ['Salsa', 'Bachata', 'Merengue'], area: 'Downtown Orlando' },
      { name: 'DanceMakers Studio', specialties: ['Bachata', 'Zouk', 'Latin'], area: 'Winter Park' },
      { name: 'Fred Astaire Dance Studio', specialties: ['Ballroom', 'Latin', 'Social'], area: 'Dr. Phillips' },
      { name: 'Ritmo Tropical', specialties: ['Salsa', 'Bachata', 'Caribbean'], area: 'International Drive' }
    ],
    venues: [
      { name: 'Coco Key Hotel', type: 'Resort Dancing', area: 'International Drive' },
      { name: 'Cafe Tu Tu Tango', type: 'Artistic Restaurant & Dancing', area: 'International Drive' },
      { name: 'The Social', type: 'Music Venue', area: 'Downtown Orlando' },
      { name: 'Mangos Tropical Cafe', type: 'Caribbean Restaurant & Dancing', area: 'International Drive' },
      { name: 'House of Blues', type: 'Concert Hall', area: 'Disney Springs' }
    ]
  },
  'philadelphia': {
    name: 'Philadelphia',
    slug: 'philadelphia',
    seo: {
      title: 'Dance Events in Philadelphia | Bachata, Salsa & Latin Dancing | Baile.AI',
      description: 'Discover the best Philadelphia dance events, classes, and community. Connect with local dancers, find bachata and salsa events. Join the Philadelphia dance scene with Baile.AI.',
      keywords: [
        'philadelphia bachata events', 'philadelphia salsa events', 'philadelphia zouk events', 'philadelphia latin dance events',
        'philadelphia social dancing', 'philadelphia dance classes', 'philadelphia dance community', 'philadelphia dance partners',
        'philadelphia kizomba events', 'philadelphia dance meetups', 'philly dancing', 'northern liberties dancing'
      ]
    },
    hero: {
      title: 'Dance in Philadelphia with Baile.AI',
      description: 'Join Philadelphia\'s passionate dance community where brotherly love meets Latin rhythm. Experience authentic social dancing in the City of Brotherly Love\'s vibrant neighborhoods.'
    },
    danceScene: {
      overview: 'Philadelphia\'s dance scene reflects the city\'s rich cultural diversity and working-class authenticity. The community is tight-knit and supportive, with strong Puerto Rican and Dominican influences creating an authentic Latin atmosphere.'
    },
    danceStyles: [
      {
        name: 'Bachata',
        emoji: '💃',
        description: 'Philly\'s bachata scene is growing strong with authentic Dominican flavor and passionate local dancers who welcome newcomers.'
      },
      {
        name: 'Salsa',
        emoji: '🕺',
        description: 'Experience salsa dancing with authentic Puerto Rican and New York influences in Philadelphia\'s Latino neighborhoods.'
      },
      {
        name: 'Hustle',
        emoji: '🕺',
        description: 'Learn the smooth partner dance that originated in New York but found a strong home in Philadelphia\'s dance community.'
      }
    ],
    danceSchools: [
      { name: 'Philadelphia Salsa Society', specialties: ['Salsa', 'Bachata', 'Merengue'], area: 'Center City' },
      { name: 'DanceSport Academy', specialties: ['Ballroom', 'Latin', 'Hustle'], area: 'Rittenhouse Square' },
      { name: 'Philly Bachata', specialties: ['Bachata', 'Zouk', 'Sensual'], area: 'Northern Liberties' },
      { name: 'Latin Soul Dance Company', specialties: ['Salsa', 'Bachata', 'Performance'], area: 'Fishtown' }
    ],
    venues: [
      { name: 'Coco Bar', type: 'Latin Restaurant & Dancing', area: 'Center City' },
      { name: 'Silk City Diner', type: 'Retro Diner & Dancing', area: 'Northern Liberties' },
      { name: 'Union Transfer', type: 'Concert Venue', area: 'Fishtown' },
      { name: 'Rumor', type: 'Upscale Nightclub', area: 'Center City' },
      { name: 'World Cafe Live', type: 'Music Venue', area: 'University City' }
    ]
  }
}

export function getCityData(citySlug) {
  return cityData[citySlug] || null
}

export function getAllCities() {
  return Object.keys(cityData)
}