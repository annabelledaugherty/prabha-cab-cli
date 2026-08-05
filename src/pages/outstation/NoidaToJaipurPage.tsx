import OutstationRoutePage, { RoutePageConfig } from '../../components/templates/OutstationRoutePage';

const BASE = 'https://prabhacab.in';

const config: RoutePageConfig = {
  from: 'Noida',
  to: 'Jaipur',
  toFull: 'Jaipur, Rajasthan',
  metaTitle: 'Noida to Jaipur Taxi | Cab Booking | One Way & Round Trip',
  metaDescription: 'Noida to Jaipur taxi service. Sedan from Rs.4,500. Visit Hawa Mahal, Amber Fort. 24/7 booking. Call +91 9718437625 for instant quote.',
  keywords: 'noida to jaipur taxi, noida to jaipur cab, cab from noida to jaipur, noida jaipur taxi fare, noida to pink city cab, noida to jaipur one way taxi, noida to jaipur round trip cab, jaipur taxi from noida, noida to jaipur car rental, prabha cab noida jaipur',
  canonicalPath: '/noida-to-jaipur-taxi',
  heroImage: '/images/routes/jaipur.webp',
  distance: '~270 km',
  duration: '4.5–5.5 hrs',
  bestTime: 'October to February',
  routeDescription: 'Travel from Noida to Jaipur — the Pink City of Rajasthan — in comfort with Prabha Cab. The journey via Delhi-Jaipur Expressway (NH-48) takes approximately 4.5 to 5.5 hours. Jaipur is a top tourist destination packed with palaces, forts, bazaars, and Rajputana heritage. It also forms the first leg of the famous Golden Triangle tour (Delhi–Agra–Jaipur).',
  destinationDescription: 'Jaipur, the capital of Rajasthan, is one of India\'s most vibrant and visited cities. Founded by Maharaja Jai Singh II in 1727, the city is famous for its distinctive pink-painted buildings, giving it the nickname "Pink City." Jaipur is a UNESCO World Heritage City and home to iconic landmarks including the Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar observatory. The city is also a major shopping hub for handcrafted textiles, gemstones, blue pottery, and traditional Rajasthani jewelry. The local cuisine — dal baati churma, laal maas, pyaaz kachori — is renowned across India.',
  pricing: [
    { vehicle: 'Sedan (Dzire/Aura)', capacity: 'Up to 4', oneWay: 'Rs.4,500', roundTrip: 'Rs.7,500' },
    { vehicle: 'XL/SUV (Ertiga/XL6)', capacity: 'Up to 6', oneWay: 'Rs.5,500', roundTrip: 'Rs.9,500' },
    { vehicle: 'Premium (Innova Crysta)', capacity: 'Up to 6', oneWay: 'Rs.7,000', roundTrip: 'Rs.12,000' },
  ],
  touristPlaces: [
    { name: 'Amber Fort (Amer Fort)', desc: 'Majestic hilltop fort with elephant rides, mirror palace, and panoramic views.' },
    { name: 'Hawa Mahal', desc: 'Iconic 5-storey latticed window facade, the symbol of Jaipur. Built for royal ladies to observe street processions.' },
    { name: 'City Palace', desc: 'Royal palace complex housing museums, courtyards, and the residence of the royal family.' },
    { name: 'Jantar Mantar', desc: 'UNESCO World Heritage Site — 18th century astronomical observatory with giant stone instruments.' },
    { name: 'Nahargarh Fort', desc: 'Hilltop fort with stunning views of Jaipur city, especially beautiful at sunset.' },
    { name: 'Johari Bazaar', desc: 'Famous jewellery and gemstone market. Also great for textiles, bangles, and Rajasthani handicrafts.' },
  ],
  inclusions: [
    'Experienced outstation driver with Jaipur route knowledge',
    'Fully air-conditioned, GPS-tracked vehicle',
    'Fuel charges included in quoted fare',
    'Multiple pickup points across Noida and Greater Noida',
    'Free 1 hour of waiting time at Jaipur for sightseeing coordination',
    'WhatsApp contact shared before departure',
    'Free cancellation up to 2 hours before trip',
  ],
  nearbyRoutes: [
    { to: 'Agra', distance: '~250 km', path: '/noida-to-agra-taxi' },
    { to: 'Ajmer / Pushkar', distance: '~395 km', path: '' },
    { to: 'Udaipur', distance: '~600 km', path: '' },
    { to: 'Jodhpur', distance: '~580 km', path: '' },
    { to: 'Bharatpur', distance: '~185 km', path: '' },
    { to: 'Alwar', distance: '~155 km', path: '' },
  ],
  faqs: [
    {
      q: 'How much does a taxi from Noida to Jaipur cost?',
      a: 'Noida to Jaipur taxi starts at Rs.4,500 for Sedan (one-way), Rs.5,500 for XL, Rs.7,000 for Innova Crysta. Round-trip fares offer better value. Toll charges (NH-48 ~Rs.500-600 total) are extra.',
    },
    {
      q: 'How long is the drive from Noida to Jaipur?',
      a: 'The distance from Noida to Jaipur is approximately 270 km via Delhi-Jaipur Expressway (NH-48). The journey typically takes 4.5 to 5.5 hours depending on traffic in Delhi and at the Gurgaon-Jaipur stretch.',
    },
    {
      q: 'Can I book a 2-day Jaipur trip from Noida with cab?',
      a: 'Yes, Prabha Cab provides multi-day outstation packages. For 2-day Jaipur trips, we can arrange drop on Day 1 and pickup on Day 2 or Day 3. Call +91 9718437625 for customised package pricing.',
    },
    {
      q: 'Which route does Prabha Cab use from Noida to Jaipur?',
      a: 'We take NH-48 (Delhi-Jaipur Expressway) via Gurgaon, which is the fastest route. The expressway is a 6-lane controlled-access highway with good road conditions throughout.',
    },
    {
      q: 'Is Noida to Jaipur a safe road trip?',
      a: 'Yes, the NH-48 Delhi-Jaipur Expressway is a well-maintained national highway with service stations, rest areas, and petrol pumps. All Prabha Cab drivers are experienced on this route and GPS-tracked throughout.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Noida to Jaipur Taxi Service',
      description: 'Comfortable taxi from Noida to Jaipur (Pink City). Visit Amber Fort, Hawa Mahal, City Palace. One-way and round-trip available 24/7.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: [{ '@type': 'City', name: 'Noida' }, { '@type': 'City', name: 'Jaipur' }],
      serviceType: 'Outstation Taxi',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a taxi from Noida to Jaipur cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Noida to Jaipur taxi starts at Rs.4,500 for Sedan one-way. Toll extra. Round trip from Rs.7,500.' },
        },
        {
          '@type': 'Question',
          name: 'How long is the drive from Noida to Jaipur?',
          acceptedAnswer: { '@type': 'Answer', text: 'Via NH-48, Noida to Jaipur takes approximately 4.5 to 5.5 hours covering about 270 km.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Routes', item: `${BASE}/routes` },
        { '@type': 'ListItem', position: 3, name: 'Noida to Jaipur Taxi', item: `${BASE}/noida-to-jaipur-taxi` },
      ],
    },
  ],
};

export default function NoidaToJaipurPage() {
  return <OutstationRoutePage config={config} />;
}
