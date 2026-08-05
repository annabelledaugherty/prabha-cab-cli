export const BASE_URL = 'https://prabhacab.in';

const localBusinessRef = { '@id': `${BASE_URL}/#localbusiness` };

export const globalSchemas = {
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: 'Prabha Cab',
    alternateName: 'Prabha Cab Services',
    description:
      'Professional taxi and cab service in Greater Noida, Noida, and Delhi NCR. Offering airport transfers, local rides, outstation trips, corporate travel, Delhi Darshan, wedding transportation and railway station pickup/drop services.',
    url: BASE_URL,
    telephone: '+91-9718437625',
    email: 'brajkishor7625@gmail.com',
    image: [`${BASE_URL}/images/hero.jpg`, `${BASE_URL}/images/fleet/sedan1.png`, `${BASE_URL}/images/fleet/xl.avif`],
    logo: `${BASE_URL}/favicon.svg`,
    priceRange: '$$',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer',
    foundingDate: '2016',
    founder: {
      '@type': 'Person',
      name: 'Brajkishor Prajapati',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nirala Greens, Noida Extension, Sector 2, Patwari',
      addressLocality: 'Greater Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201308',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6266,
      longitude: 77.4244,
    },
    hasMap: 'https://maps.google.com/?q=Nirala+Greens+Noida+Extension',
    areaServed: [
      { '@type': 'City', name: 'Greater Noida' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Gurgaon' },
      { '@type': 'City', name: 'Ghaziabad' },
      { '@type': 'City', name: 'Faridabad' },
      { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9718437625',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
        contactOption: 'TollFree',
        areaServed: 'IN',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-9354958169',
        contactType: 'reservations',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'IN',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '850',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cab Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Airport Transfer',
            description: '24/7 pickup and drop service to IGI Airport Delhi from Greater Noida, Noida & Delhi NCR',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local Cab Package',
            description: 'Hourly and daily cab rentals for local travel. 80km/8hr and 120km/12hr options.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Outstation Cab',
            description: 'One-way and round-trip cab service from Greater Noida & Noida to all major cities across India.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate Cab Service',
            description: 'Dedicated monthly cab packages for businesses with 2500km and 240 hours included.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Delhi Darshan',
            description: 'Full-day Delhi sightseeing tour covering all major landmarks. 12 hours / 120km package.',
          },
        },
      ],
    },
  },

  taxiService: {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    '@id': `${BASE_URL}/#taxiservice`,
    name: 'Prabha Cab - Taxi Service',
    description: 'Professional taxi service in Greater Noida, Noida & Delhi NCR offering sedan, XL SUV, and premium Innova Crysta options for airport transfers, local rides, outstation trips, and corporate travel.',
    provider: localBusinessRef,
    serviceType: 'Taxi Service',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 28.6266, longitude: 77.4244 },
      geoRadius: '150000',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${BASE_URL}/booking`,
      servicePhone: '+91-9718437625',
      availableLanguage: ['English', 'Hindi'],
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Sedan - Maruti Dzire / Hyundai Aura / Xcent',
        description: '4-passenger AC sedan cab. Starting Rs.12/km outstation.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '12',
          priceCurrency: 'INR',
          unitText: 'per km',
        },
      },
      {
        '@type': 'Offer',
        name: 'XL/SUV - Maruti XL6 / Ertiga',
        description: '6-passenger AC XL/SUV cab. Starting Rs.15/km outstation.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '15',
          priceCurrency: 'INR',
          unitText: 'per km',
        },
      },
      {
        '@type': 'Offer',
        name: 'Premium SUV - Toyota Innova Crysta',
        description: '7-passenger premium AC cab. Starting Rs.22/km outstation.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '22',
          priceCurrency: 'INR',
          unitText: 'per km',
        },
      },
    ],
  },

  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Prabha Cab',
    description: 'Best taxi and cab service in Greater Noida, Noida, Delhi NCR. Book airport transfers, local rides and outstation trips.',
    publisher: localBusinessRef,
    inLanguage: ['en-IN', 'hi-IN'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/routes?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  },
};

export const pageSchemas = {
  home: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best cab service in Greater Noida?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prabha Cab is one of the most trusted and reliable cab services in Greater Noida, offering 24/7 taxi service with well-maintained vehicles including Sedan (Dzire), XL/SUV (Ertiga, XL6), and Premium (Innova Crysta) options at transparent prices.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a cab from Greater Noida to Delhi Airport (IGI) cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The cab fare from Greater Noida to Delhi Airport (IGI) starts from Rs.2,200 for a Sedan, Rs.2,500 for an XL/SUV, and Rs.3,500 for a Premium Innova Crysta. These are all-inclusive fares with no hidden charges.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Prabha Cab provide outstation taxi service from Noida?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Prabha Cab provides outstation cab service from Greater Noida and Noida to 40+ destinations including Agra, Jaipur, Mathura, Haridwar, Rishikesh, Nainital, Shimla, Chandigarh, Vaishno Devi, Varanasi, Ayodhya and more. One-way and round-trip options available.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is 24/7 taxi service available in Greater Noida?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Prabha Cab offers 24/7 taxi service in Greater Noida, Noida, and the entire Delhi NCR region. You can book a cab anytime by calling or WhatsApp at +91 9718437625.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I book a cab with Prabha Cab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can book a Prabha Cab by calling +91 9718437625, sending a WhatsApp message, or using the online booking form on our website. We are available 24/7 for instant bookings.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` }],
    },
  ],

  services: [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Prabha Cab Services',
      description: 'Comprehensive cab and taxi services offered by Prabha Cab in Greater Noida, Noida & Delhi NCR',
      numberOfItems: 9,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Service',
            name: 'Airport Transfer',
            description: '24/7 pickup and drop to IGI Airport Delhi from Greater Noida, Noida & entire Delhi NCR. All terminals covered. Sedan from Rs.2,200.',
            provider: localBusinessRef,
            areaServed: 'Greater Noida, Noida, Delhi NCR',
            serviceType: 'Airport Transfer',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            name: 'Local Cab Package',
            description: 'Flexible hourly and daily cab rental packages. 80km/8hr from Rs.1,600 and 120km/12hr from Rs.2,500. Multiple stops, AC vehicles.',
            provider: localBusinessRef,
            areaServed: 'Greater Noida, Noida, Delhi NCR',
            serviceType: 'Local Cab Rental',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            name: 'Outstation Cab',
            description: 'One-way and round-trip outstation cab service from Greater Noida & Noida to 40+ cities. Sedan Rs.12/km, XL Rs.15/km, Innova Rs.22/km.',
            provider: localBusinessRef,
            areaServed: 'Pan India',
            serviceType: 'Outstation Taxi',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            name: 'Corporate Cab Service',
            description: 'Dedicated monthly corporate cab packages with 2500km and 240 hours. Dedicated drivers, flexible billing, priority booking.',
            provider: localBusinessRef,
            areaServed: 'Greater Noida, Noida, Delhi NCR',
            serviceType: 'Corporate Transportation',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Service',
            name: 'Delhi Darshan',
            description: 'Full-day Delhi sightseeing tour package. 12 hours / 120km covering all major Delhi attractions with expert driver guidance.',
            provider: localBusinessRef,
            areaServed: 'Delhi',
            serviceType: 'City Sightseeing Tour',
          },
        },
        {
          '@type': 'ListItem',
          position: 6,
          item: {
            '@type': 'Service',
            name: 'Wedding & Events Transportation',
            description: 'Special cab service for weddings and events in Delhi NCR. Multiple vehicle bookings, decoration options, special rates.',
            provider: localBusinessRef,
            areaServed: 'Greater Noida, Noida, Delhi NCR',
            serviceType: 'Wedding Transportation',
          },
        },
        {
          '@type': 'ListItem',
          position: 7,
          item: {
            '@type': 'Service',
            name: 'Railway Station Pickup & Drop',
            description: 'Cab service to all Delhi railway stations - New Delhi, Old Delhi, Hazrat Nizamuddin. 24/7 train tracking, luggage assistance.',
            provider: localBusinessRef,
            areaServed: 'Delhi, Greater Noida, Noida',
            serviceType: 'Railway Station Transfer',
          },
        },
        {
          '@type': 'ListItem',
          position: 8,
          item: {
            '@type': 'Service',
            name: 'Hourly Cab Rental',
            description: 'Book a cab by the hour for meetings, shopping, errands. Pay only for time used. Multiple stops allowed in Greater Noida & Noida.',
            provider: localBusinessRef,
            areaServed: 'Greater Noida, Noida, Delhi NCR',
            serviceType: 'Hourly Cab Rental',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
      ],
    },
  ],

  pricing: [
    {
      '@context': 'https://schema.org',
      '@type': 'PriceSpecification',
      name: 'Prabha Cab - Airport Transfer Price',
      description: 'Greater Noida / Noida to IGI Airport Delhi cab fare',
      priceCurrency: 'INR',
      minPrice: '2200',
      maxPrice: '3500',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a cab from Greater Noida to Delhi Airport cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prabha Cab charges Rs.2,200 for Sedan, Rs.2,500 for XL/SUV, and Rs.3,500 for Innova Crysta for a cab from Greater Noida to Delhi Airport (IGI). Toll and parking extra.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the outstation cab rates from Greater Noida?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Outstation cab rates from Greater Noida: Sedan Rs.12/km, XL/SUV Rs.15/km, Innova Crysta Rs.22/km. Minimum billing 250km per day. Extra hour Rs.150. Night allowance Rs.400 after 10 PM.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the local 8-hour cab package price in Noida?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prabha Cab local 8-hour package (80km included): Sedan Rs.1,600, XL/SUV Rs.2,500, Innova Crysta Rs.3,000. The 12-hour package (120km): Sedan Rs.2,500, XL/SUV Rs.3,500, Innova Rs.4,500.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there any hidden charges in Prabha Cab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No, Prabha Cab offers completely transparent pricing with no hidden charges. Extra charges like toll, parking, and night allowance (Rs.400 after 10 PM) are disclosed upfront at the time of booking.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${BASE_URL}/pricing` },
      ],
    },
  ],

  fleet: [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Prabha Cab Fleet',
      description: 'Well-maintained cab fleet available for booking in Greater Noida, Noida & Delhi NCR',
      numberOfItems: 3,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'Sedan - Maruti Dzire / Hyundai Aura / Xcent',
            description: '4-passenger AC sedan cab. Air conditioned, music system, phone charging. Yellow plate compliant, fully insured.',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'INR',
              price: '12',
              priceSpecification: { '@type': 'PriceSpecification', price: '12', priceCurrency: 'INR', unitText: 'per km' },
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'XL/SUV - Maruti XL6 / Ertiga',
            description: '6-passenger AC XL/SUV cab with extra legroom and spacious boot. Air conditioned, music system, phone charging.',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'INR',
              price: '15',
              priceSpecification: { '@type': 'PriceSpecification', price: '15', priceCurrency: 'INR', unitText: 'per km' },
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            name: 'Premium SUV - Toyota Innova Crysta',
            description: '7-passenger premium AC cab with captain seats, climate control, large boot space, USB charging and music system.',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'INR',
              price: '22',
              priceSpecification: { '@type': 'PriceSpecification', price: '22', priceCurrency: 'INR', unitText: 'per km' },
            },
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Fleet', item: `${BASE_URL}/fleet` },
      ],
    },
  ],

  routes: [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Popular Cab Routes from Greater Noida & Noida',
      description: 'Outstation cab routes from Greater Noida and Noida to top destinations across North India',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Greater Noida to Agra Cab - Rs.4800', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 2, name: 'Greater Noida to Jaipur Cab - Rs.6720', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 3, name: 'Greater Noida to Mathura-Vrindavan Cab - Rs.3600', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 4, name: 'Greater Noida to Haridwar Cab - Rs.5280', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 5, name: 'Greater Noida to Rishikesh Cab - Rs.5760', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 6, name: 'Greater Noida to Nainital Cab - Rs.7200', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 7, name: 'Greater Noida to Mussoorie Cab - Rs.6720', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 8, name: 'Greater Noida to Shimla Cab - Rs.8400', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 9, name: 'Greater Noida to Chandigarh Cab - Rs.6000', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 10, name: 'Greater Noida to Vaishno Devi Cab - Rs.15600', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 11, name: 'Greater Noida to Amritsar Cab - Rs.10800', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 12, name: 'Greater Noida to Varanasi Cab - Rs.19200', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 13, name: 'Greater Noida to Ayodhya Cab - Rs.14400', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 14, name: 'Greater Noida to Lucknow Cab - Rs.12000', url: `${BASE_URL}/routes` },
        { '@type': 'ListItem', position: 15, name: 'Greater Noida to Jim Corbett Cab - Rs.6240', url: `${BASE_URL}/routes` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Routes', item: `${BASE_URL}/routes` },
      ],
    },
  ],

  booking: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${BASE_URL}/booking`,
      name: 'Book Cab Online - Prabha Cab',
      description: 'Book your cab instantly in Greater Noida, Noida & Delhi NCR. 24/7 availability.',
      url: `${BASE_URL}/booking`,
      publisher: localBusinessRef,
      potentialAction: {
        '@type': 'ReserveAction',
        target: `${BASE_URL}/booking`,
        object: { '@type': 'TaxiReservation' },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Book Cab', item: `${BASE_URL}/booking` },
      ],
    },
  ],

  about: [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Prabha Cab',
      url: BASE_URL,
      logo: `${BASE_URL}/favicon.svg`,
      description: 'Prabha Cab is a trusted taxi service provider in Greater Noida, Noida & Delhi NCR, founded in 2016 by Brajkishor Prajapati. Serving 3000+ happy customers with 5000+ trips completed.',
      foundingDate: '2016',
      founder: { '@type': 'Person', name: 'Brajkishor Prajapati', jobTitle: 'Founder & Owner' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Nirala Greens, Noida Extension, Sector 2, Patwari',
        addressLocality: 'Greater Noida',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201308',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9718437625',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
      },
      numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 5 },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BASE_URL}/about` },
      ],
    },
  ],

  contact: [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Prabha Cab',
      description: 'Contact Prabha Cab for taxi booking in Greater Noida, Noida & Delhi NCR.',
      url: `${BASE_URL}/contact`,
      publisher: localBusinessRef,
      mainEntity: {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#localbusiness`,
        telephone: '+91-9718437625',
        email: 'brajkishor7625@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Nirala Greens, Noida Extension, Sector 2, Patwari',
          addressLocality: 'Greater Noida',
          addressRegion: 'Uttar Pradesh',
          postalCode: '201308',
          addressCountry: 'IN',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
      ],
    },
  ],

  faq: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I book a cab with Prabha Cab in Greater Noida?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can book a cab with Prabha Cab by calling +91 9718437625, sending a WhatsApp message to the same number, or using the online booking form on our website. We are available 24/7 for instant bookings.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to book a cab in advance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Instant booking is available for Prabha Cab, but advance booking is recommended for airport trips, peak travel seasons, and long outstation journeys to guarantee vehicle availability.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the cancellation policy for Prabha Cab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prabha Cab offers free cancellation up to 2 hours before the scheduled pickup time. Cancellations made within 2 hours of the pickup time may incur charges.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I modify my cab booking?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, you can modify your Prabha Cab booking by calling or WhatsApp at +91 9718437625. Changes to pickup time, location, or vehicle type are subject to availability.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are Prabha Cab airport transfer rates from Greater Noida to IGI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Greater Noida / Noida to IGI Airport: Sedan Rs.2,200, XL/SUV Rs.2,500, Premium Innova Crysta Rs.3,500. All fares are inclusive with toll and parking disclosed upfront.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the minimum billing for outstation trips from Noida?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The minimum billing for outstation cab trips from Noida and Greater Noida is 250 km per day. Rates are Sedan Rs.12/km, XL/SUV Rs.15/km, and Innova Crysta Rs.22/km.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Prabha Cab have verified and background-checked drivers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, all Prabha Cab drivers undergo thorough background verification and professional training before being deployed. All vehicles are also yellow-plate compliant and fully insured.',
          },
        },
        {
          '@type': 'Question',
          name: 'What payment methods does Prabha Cab accept?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prabha Cab accepts cash, UPI payments, and bank transfers. Corporate clients can avail monthly billing facilities.',
          },
        },
        {
          '@type': 'Question',
          name: 'What vehicles are available for booking with Prabha Cab?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Prabha Cab has three vehicle categories: Sedan (Maruti Dzire, Hyundai Aura, Hyundai Xcent - 4 passengers), XL/SUV (Maruti XL6, Maruti Ertiga - 6 passengers), and Premium SUV (Toyota Innova Crysta - 7 passengers). All vehicles are AC equipped.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Prabha Cab offer GPS tracking?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, all Prabha Cab vehicles are GPS enabled with real-time tracking for passenger safety. You can track your cab throughout the journey.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE_URL}/faq` },
      ],
    },
  ],
};
