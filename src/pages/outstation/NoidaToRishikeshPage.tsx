import OutstationRoutePage, { RoutePageConfig } from '../../components/templates/OutstationRoutePage';

const BASE = 'https://prabhacab.in';

const config: RoutePageConfig = {
  from: 'Noida',
  to: 'Rishikesh',
  toFull: 'Rishikesh, Uttarakhand',
  metaTitle: 'Noida to Rishikesh Taxi | Cab Service | Prabha Cab',
  metaDescription: 'Noida to Rishikesh taxi service. Yoga capital of the world. Sedan from Rs.4,000. One-way & round trip. Call +91 9718437625.',
  keywords: 'noida to rishikesh taxi, noida to rishikesh cab, cab from noida to rishikesh, noida rishikesh taxi fare, noida to rishikesh one way, rishikesh cab from noida, noida to rishikesh car rental, noida to rishikesh rafting trip cab, prabha cab noida rishikesh, noida to yoga capital cab',
  canonicalPath: '/noida-to-rishikesh-taxi',
  heroImage: '/images/routes/rishikesh.webp',
  distance: '~234 km',
  duration: '4–5 hrs',
  bestTime: 'September to June',
  routeDescription: 'Book a taxi from Noida to Rishikesh — the Yoga Capital of the World and adventure sports hub of India — with Prabha Cab. The journey covers approximately 234 km and takes 4 to 5 hours via Delhi-Meerut Expressway and Haridwar. Rishikesh is famous for yoga and meditation retreats, white-water rafting on the Ganges, the iconic Laxman Jhula suspension bridge, and its vibrant ashram culture.',
  destinationDescription: 'Rishikesh, nestled in the foothills of the Himalayas where the Ganges flows from the mountains, is a world-renowned spiritual and adventure destination. Known as the "Yoga Capital of the World," Rishikesh hosts thousands of international yoga students and pilgrims every year. The city is famous for white-water rafting (Grade I–IV rapids on the Ganges), bungee jumping, cliff jumping, and camping. The iconic Laxman Jhula and Ram Jhula suspension bridges offer stunning views of the river. The city\'s many ashrams — including the Parmarth Niketan and the famous Beatles Ashram — attract spiritual seekers from across the world. Rishikesh is also the gateway to the Char Dham pilgrimage circuit.',
  pricing: [
    { vehicle: 'Sedan (Dzire/Aura)', capacity: 'Up to 4', oneWay: 'Rs.4,000', roundTrip: 'Rs.6,500' },
    { vehicle: 'XL/SUV (Ertiga/XL6)', capacity: 'Up to 6', oneWay: 'Rs.5,000', roundTrip: 'Rs.8,000' },
    { vehicle: 'Premium (Innova Crysta)', capacity: 'Up to 6', oneWay: 'Rs.6,500', roundTrip: 'Rs.10,500' },
  ],
  touristPlaces: [
    { name: 'Laxman Jhula', desc: 'Iconic suspension bridge over the Ganges. Temples on both banks. The symbol of Rishikesh.' },
    { name: 'Ram Jhula', desc: 'Another suspension bridge, busier and wider than Laxman Jhula, flanked by multi-storied ashrams.' },
    { name: 'Triveni Ghat', desc: 'Sacred ghat where three rivers meet. Famous for the evening Ganga Aarti and dip in the Ganges.' },
    { name: 'Rafting on the Ganges', desc: 'White-water rafting routes from Shivpuri (16 km), Marine Drive (23 km), or Kaudiyala (36 km).' },
    { name: 'Beatles Ashram (Chaurasi Kutia)', desc: 'The ashram where The Beatles stayed in 1968 to study transcendental meditation. Now an art space.' },
    { name: 'Neelkanth Mahadev Temple', desc: 'Ancient Shiva temple 32 km from Rishikesh in the Himalayan foothills. Requires short trek.' },
  ],
  inclusions: [
    'Experienced driver familiar with Rishikesh and Haridwar routes',
    'Fully air-conditioned, GPS-tracked vehicle',
    'Fuel charges included in quoted fare',
    'Can combine Haridwar and Rishikesh in one trip',
    'Multiple pickup locations across Noida and Greater Noida',
    'WhatsApp contact shared before departure',
    'Free cancellation up to 2 hours before trip',
  ],
  nearbyRoutes: [
    { to: 'Haridwar', distance: '~210 km', path: '/noida-to-haridwar-taxi' },
    { to: 'Mussoorie', distance: '~295 km', path: '' },
    { to: 'Dehradun', distance: '~265 km', path: '' },
    { to: 'Nainital', distance: '~330 km', path: '/noida-to-nainital-taxi' },
    { to: 'Kedarnath', distance: '~450 km', path: '' },
    { to: 'Badrinath', distance: '~500 km', path: '' },
  ],
  faqs: [
    {
      q: 'How much does a cab from Noida to Rishikesh cost?',
      a: 'Noida to Rishikesh taxi fare starts at Rs.4,000 for Sedan (one-way), Rs.5,000 for XL/SUV, Rs.6,500 for Innova Crysta. Toll charges are extra. Round-trip available from Rs.6,500 for Sedan.',
    },
    {
      q: 'Can I combine Haridwar and Rishikesh in one trip from Noida?',
      a: 'Yes, Haridwar and Rishikesh are only 24 km apart. A combined day trip visiting both cities is very popular. Depart from Noida by 5–6 AM to have enough time for both. Call for combined trip pricing.',
    },
    {
      q: 'Is cab available from Noida to Rishikesh for rafting trips?',
      a: 'Yes, Prabha Cab regularly takes adventure groups from Noida/Delhi NCR to Rishikesh for rafting, camping, and bungee jumping. We can also coordinate drop at the rafting starting point (Shivpuri, Marine Drive, or Kaudiyala).',
    },
    {
      q: 'How long is the drive from Noida to Rishikesh?',
      a: 'Noida to Rishikesh is approximately 234 km. Via Delhi-Meerut Expressway and Haridwar, the drive takes 4 to 5 hours under normal traffic conditions.',
    },
    {
      q: 'What is the best route from Noida to Rishikesh?',
      a: 'The best route is via Delhi-Meerut Expressway (NH-334B) to Meerut, then Roorkee, then Haridwar, then Rishikesh. This route uses highways with minimal traffic signals and good road quality throughout.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Noida to Rishikesh Taxi Service',
      description: 'Comfortable taxi from Noida to Rishikesh — Yoga Capital of the World. Rafting trips, pilgrimage, yoga retreat transfers. One-way and round-trip available.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: [{ '@type': 'City', name: 'Noida' }, { '@type': 'City', name: 'Rishikesh' }],
      serviceType: 'Outstation Taxi',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a cab from Noida to Rishikesh cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Noida to Rishikesh taxi starts at Rs.4,000 for Sedan one-way. Toll extra. Round trip from Rs.6,500.' },
        },
        {
          '@type': 'Question',
          name: 'How long is the drive from Noida to Rishikesh?',
          acceptedAnswer: { '@type': 'Answer', text: 'Noida to Rishikesh is approximately 234 km and takes 4 to 5 hours via Delhi-Meerut Expressway and Haridwar.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Routes', item: `${BASE}/routes` },
        { '@type': 'ListItem', position: 3, name: 'Noida to Rishikesh Taxi', item: `${BASE}/noida-to-rishikesh-taxi` },
      ],
    },
  ],
};

export default function NoidaToRishikeshPage() {
  return <OutstationRoutePage config={config} />;
}
