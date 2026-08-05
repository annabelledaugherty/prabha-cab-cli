import OutstationRoutePage, { RoutePageConfig } from '../../components/templates/OutstationRoutePage';

const BASE = 'https://prabhacab.in';

const config: RoutePageConfig = {
  from: 'Noida',
  to: 'Agra',
  toFull: 'Agra, Uttar Pradesh',
  metaTitle: 'Noida to Agra Taxi | Cab Booking | One Way & Round Trip',
  metaDescription: 'Noida to Agra taxi service. Visit Taj Mahal, Agra Fort. Sedan from Rs.3,500. One-way & round trip available. Call +91 9718437625.',
  keywords: 'noida to agra taxi, noida to agra cab, cab from noida to agra, noida agra taxi fare, noida to taj mahal cab, noida to agra one way taxi, noida to agra round trip, agra taxi from noida, noida to agra car rental, prabha cab noida agra',
  canonicalPath: '/noida-to-agra-taxi',
  heroImage: '/images/routes/agra.jpg',
  distance: '~215 km',
  duration: '3.5–4 hrs',
  bestTime: 'October to March',
  routeDescription: 'Book a comfortable, air-conditioned taxi from Noida to Agra with Prabha Cab. The route via Yamuna Expressway is smooth and scenic, taking approximately 3.5–4 hours. Agra is home to three UNESCO World Heritage Sites — Taj Mahal, Agra Fort, and Fatehpur Sikri — making it the most popular weekend getaway from Noida and Delhi NCR.',
  destinationDescription: 'Agra, situated on the banks of the Yamuna River in Uttar Pradesh, is one of India\'s most iconic cities. Famous as the city of the Taj Mahal, Agra draws millions of visitors each year. Beyond the Taj, Agra boasts remarkable Mughal architecture — the sprawling Agra Fort, the ghost city of Fatehpur Sikri, the tomb of Itimad-ud-Daulah, and vibrant markets famous for marble inlay work and Petha sweets. The drive from Noida via Yamuna Expressway is comfortable and takes just over 3 hours under normal conditions.',
  pricing: [
    { vehicle: 'Sedan (Dzire/Aura)', capacity: 'Up to 4', oneWay: 'Rs.3,500', roundTrip: 'Rs.5,500' },
    { vehicle: 'XL/SUV (Ertiga/XL6)', capacity: 'Up to 6', oneWay: 'Rs.4,500', roundTrip: 'Rs.7,000' },
    { vehicle: 'Premium (Innova Crysta)', capacity: 'Up to 6', oneWay: 'Rs.5,500', roundTrip: 'Rs.9,000' },
  ],
  touristPlaces: [
    { name: 'Taj Mahal', desc: 'UNESCO World Heritage Site. Best visited at sunrise for golden light and fewer crowds.' },
    { name: 'Agra Fort', desc: 'Red sandstone fort built by Akbar. Offers a view of the Taj Mahal from its towers.' },
    { name: 'Fatehpur Sikri', desc: 'Abandoned Mughal city 40 km from Agra. Built by Akbar in the 16th century.' },
    { name: 'Itimad-ud-Daulah (Baby Taj)', desc: 'Marble mausoleum, considered the precursor to the Taj Mahal.' },
    { name: 'Mehtab Bagh', desc: 'Mughal garden across the Yamuna with best sunset views of the Taj Mahal.' },
    { name: 'Kinari Bazaar', desc: 'Historic market for marble crafts, leather goods, and the famous Agra Petha.' },
  ],
  inclusions: [
    'Experienced outstation driver with Agra route knowledge',
    'Fully air-conditioned, GPS-tracked vehicle',
    'Fuel charges included in the quoted fare',
    'One-way drop or full-day round trip options',
    'Multiple pickup locations across Noida and Greater Noida',
    'WhatsApp driver contact shared before departure',
    'Free cancellation up to 2 hours before trip',
  ],
  nearbyRoutes: [
    { to: 'Mathura', distance: '~155 km', path: '' },
    { to: 'Vrindavan', distance: '~160 km', path: '' },
    { to: 'Jaipur', distance: '~255 km', path: '/noida-to-jaipur-taxi' },
    { to: 'Fatehpur Sikri', distance: '~255 km', path: '' },
    { to: 'Varanasi', distance: '~620 km', path: '' },
    { to: 'Lucknow', distance: '~475 km', path: '' },
  ],
  faqs: [
    {
      q: 'How much does a taxi from Noida to Agra cost?',
      a: 'Noida to Agra taxi starts at Rs.3,500 for Sedan (one-way), Rs.4,500 for XL/SUV, Rs.5,500 for Innova Crysta. Round-trip fares are more economical. Toll charges (Yamuna Expressway ~Rs.400) are extra.',
    },
    {
      q: 'How long does it take from Noida to Agra?',
      a: 'The Noida to Agra journey via Yamuna Expressway takes approximately 3.5 to 4 hours under normal conditions. The expressway is a smooth, 6-lane highway with no traffic signals.',
    },
    {
      q: 'Which route does Prabha Cab take from Noida to Agra?',
      a: 'We take the Yamuna Expressway (NH-19) which is the fastest and most comfortable route. The expressway starts from Greater Noida and goes directly to Agra, covering approximately 165 km.',
    },
    {
      q: 'Can I book a one-day Agra tour cab from Noida?',
      a: 'Yes, we offer same-day Agra tour packages with round-trip cab service. The driver waits while you visit the Taj Mahal, Agra Fort, and other sites. Typical waiting time 4–6 hours, included in round-trip fare.',
    },
    {
      q: 'What is the best time to visit Agra from Noida?',
      a: 'October to March is the best time. Summers (April–June) are very hot (45°C+). Monsoon (July–September) brings humidity. Winter mornings can have fog affecting visibility, but the cooler weather is pleasant for sightseeing.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Noida to Agra Taxi Service',
      description: 'Comfortable taxi service from Noida to Agra via Yamuna Expressway. Visit Taj Mahal, Agra Fort. One-way and round-trip available.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: [{ '@type': 'City', name: 'Noida' }, { '@type': 'City', name: 'Agra' }],
      serviceType: 'Outstation Taxi',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a taxi from Noida to Agra cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Noida to Agra taxi starts at Rs.3,500 for Sedan one-way. Toll extra. Round trip available from Rs.5,500.' },
        },
        {
          '@type': 'Question',
          name: 'How long does it take from Noida to Agra?',
          acceptedAnswer: { '@type': 'Answer', text: 'Via Yamuna Expressway, Noida to Agra takes approximately 3.5 to 4 hours under normal conditions.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Routes', item: `${BASE}/routes` },
        { '@type': 'ListItem', position: 3, name: 'Noida to Agra Taxi', item: `${BASE}/noida-to-agra-taxi` },
      ],
    },
  ],
};

export default function NoidaToAgraPage() {
  return <OutstationRoutePage config={config} />;
}
