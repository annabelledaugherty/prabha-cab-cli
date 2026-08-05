import OutstationRoutePage, { RoutePageConfig } from '../../components/templates/OutstationRoutePage';

const BASE = 'https://prabhacab.in';

const config: RoutePageConfig = {
  from: 'Noida',
  to: 'Nainital',
  toFull: 'Nainital, Uttarakhand',
  metaTitle: 'Noida to Nainital Taxi | Cab Service | Prabha Cab',
  metaDescription: 'Noida to Nainital taxi service. Lake City of Uttarakhand. Sedan from Rs.4,500. One-way & round trip. Call +91 9718437625.',
  keywords: 'noida to nainital taxi, noida to nainital cab, cab from noida to nainital, noida nainital taxi fare, noida to nainital one way, nainital cab from noida, noida to nainital car rental, noida to nainital hill station cab, prabha cab noida nainital, greater noida to nainital taxi',
  canonicalPath: '/noida-to-nainital-taxi',
  heroImage: '/images/routes/nainital.webp',
  distance: '~290 km',
  duration: '5–6 hrs',
  bestTime: 'March to June, September to November',
  routeDescription: 'Book a taxi from Noida to Nainital — the beautiful Lake City nestled in the Kumaon Himalayas — with Prabha Cab. The 290 km journey takes 5 to 6 hours via NH-9 (Delhi-Lucknow Highway) to Moradabad and then through Rampur and Kathgodam to Nainital. The scenic mountain road from Kathgodam to Nainital winds through dense forests offering stunning views of the Himalayan foothills.',
  destinationDescription: 'Nainital is one of India\'s most beloved hill stations, perched at 2,084 metres in the Kumaon Hills of Uttarakhand. The town is built around the stunning Naini Lake, a natural freshwater lake surrounded by seven hills. Nainital was a popular summer retreat during British India and retains much of its colonial charm. The lake offers boating, and the surrounding hills have excellent viewpoints — Snow View Point (accessible by ropeway), Tiffin Top, and Land\'s End. Nearby attractions include Jim Corbett National Park (60 km), Bhimtal, Sattal, and Mukteshwar. Nainital is famous for candles, woolens, shawls, and jam made from local fruits.',
  pricing: [
    { vehicle: 'Sedan (Dzire/Aura)', capacity: 'Up to 4', oneWay: 'Rs.4,500', roundTrip: 'Rs.7,500' },
    { vehicle: 'XL/SUV (Ertiga/XL6)', capacity: 'Up to 6', oneWay: 'Rs.5,800', roundTrip: 'Rs.9,500' },
    { vehicle: 'Premium (Innova Crysta)', capacity: 'Up to 6', oneWay: 'Rs.7,000', roundTrip: 'Rs.11,500' },
  ],
  touristPlaces: [
    { name: 'Naini Lake', desc: 'The iconic crescent-shaped lake at the heart of Nainital. Boating available, especially beautiful at dusk.' },
    { name: 'Snow View Point', desc: 'Viewpoint at 2,270 m offering panoramic views of Himalayan peaks including Nanda Devi. Ropeway available.' },
    { name: 'Naina Devi Temple', desc: 'Famous Shakti Peeth temple on the northern shore of Naini Lake, extremely sacred to Hindus.' },
    { name: 'Tiffin Top (Dorothy\'s Seat)', desc: 'Viewpoint reached by horse riding or trekking, offering 360-degree views of the surrounding peaks.' },
    { name: 'Jim Corbett National Park', desc: '60 km from Nainital. India\'s oldest national park with Bengal tigers, elephants, and diverse wildlife.' },
    { name: 'Bhimtal & Sattal', desc: 'Nearby serene lakes with less crowd than Nainital. Bhimtal has an aquarium on an island.' },
  ],
  inclusions: [
    'Experienced driver familiar with mountain roads to Nainital',
    'Fully air-conditioned, GPS-tracked vehicle',
    'Fuel charges included in quoted fare',
    'Multiple pickup locations across Noida, Greater Noida, and Ghaziabad',
    'Comfortable sedan or SUV suitable for mountain driving',
    'WhatsApp contact shared before departure',
    'Free cancellation up to 2 hours before trip',
  ],
  nearbyRoutes: [
    { to: 'Jim Corbett', distance: '~250 km', path: '' },
    { to: 'Mukteshwar', distance: '~310 km', path: '' },
    { to: 'Ranikhet', distance: '~315 km', path: '' },
    { to: 'Almora', distance: '~330 km', path: '' },
    { to: 'Haridwar', distance: '~210 km', path: '/noida-to-haridwar-taxi' },
    { to: 'Rishikesh', distance: '~234 km', path: '/noida-to-rishikesh-taxi' },
  ],
  faqs: [
    {
      q: 'How much does a taxi from Noida to Nainital cost?',
      a: 'Noida to Nainital taxi fare starts at Rs.4,500 for Sedan (one-way), Rs.5,800 for XL/SUV, Rs.7,000 for Innova Crysta. Toll charges (approx. Rs.400-500) are extra. Round-trip available from Rs.7,500.',
    },
    {
      q: 'How long is the drive from Noida to Nainital?',
      a: 'Noida to Nainital is approximately 290 km via NH-9 through Moradabad. The journey takes 5 to 6 hours. The last 30 km from Kathgodam to Nainital involves mountain roads and takes 60–75 minutes.',
    },
    {
      q: 'Is it safe to drive to Nainital in winters?',
      a: 'Nainital can receive snowfall from December to February. The roads may be slippery and sometimes closed. We recommend travelling in good weather. Our drivers are experienced with mountain conditions. Always check road status before travel in winter.',
    },
    {
      q: 'Can I book a 2-day Nainital trip cab from Noida?',
      a: 'Yes, we offer multi-day outstation packages. For a 2-day Nainital trip, we drop you on Day 1 and pick you up on Day 2 or 3. Call +91 9718437625 for customised multi-day pricing.',
    },
    {
      q: 'What is the best route from Noida to Nainital?',
      a: 'The best route is via NH-9 (Delhi-Lucknow Highway) to Moradabad, then NH-309 through Rampur and Rudrapur to Kathgodam, and then the mountain road to Nainital. Avoid this route during heavy monsoon (July-August) when landslides can occur.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Noida to Nainital Taxi Service',
      description: 'Comfortable taxi from Noida to Nainital Lake City in Uttarakhand. Mountain-experienced drivers, AC vehicles, one-way and round-trip available.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: [{ '@type': 'City', name: 'Noida' }, { '@type': 'City', name: 'Nainital' }],
      serviceType: 'Outstation Taxi',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a taxi from Noida to Nainital cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Noida to Nainital taxi starts at Rs.4,500 for Sedan one-way. Toll extra. Round trip from Rs.7,500.' },
        },
        {
          '@type': 'Question',
          name: 'How long is the drive from Noida to Nainital?',
          acceptedAnswer: { '@type': 'Answer', text: 'Noida to Nainital is approximately 290 km and takes 5 to 6 hours via Moradabad and Kathgodam.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Routes', item: `${BASE}/routes` },
        { '@type': 'ListItem', position: 3, name: 'Noida to Nainital Taxi', item: `${BASE}/noida-to-nainital-taxi` },
      ],
    },
  ],
};

export default function NoidaToNainitalPage() {
  return <OutstationRoutePage config={config} />;
}
