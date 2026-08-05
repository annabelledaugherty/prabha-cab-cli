import OutstationRoutePage, { RoutePageConfig } from '../../components/templates/OutstationRoutePage';

const BASE = 'https://prabhacab.in';

const config: RoutePageConfig = {
  from: 'Noida',
  to: 'Haridwar',
  toFull: 'Haridwar, Uttarakhand',
  metaTitle: 'Noida to Haridwar Taxi | Cab Service | Prabha Cab',
  metaDescription: 'Noida to Haridwar taxi service. Attend Ganga Aarti, visit Rishikesh too. Sedan from Rs.3,800. 24/7 booking. Call +91 9718437625.',
  keywords: 'noida to haridwar taxi, noida to haridwar cab, cab from noida to haridwar, noida haridwar taxi fare, noida to rishikesh haridwar cab, noida to haridwar one way taxi, haridwar cab from noida, noida to haridwar car rental, prabha cab noida haridwar, noida to ganga aarti cab',
  canonicalPath: '/noida-to-haridwar-taxi',
  heroImage: '/images/routes/haridwar.png',
  distance: '~210 km',
  duration: '3.5–4.5 hrs',
  bestTime: 'October to June (avoid heavy monsoon)',
  routeDescription: 'Book a taxi from Noida to Haridwar with Prabha Cab and begin your spiritual journey to one of Hinduism\'s holiest cities on the banks of the Ganges. The journey covers approximately 210 km via NH-58 or NH-334B and takes 3.5 to 4.5 hours. Many travellers extend the trip to include Rishikesh (just 24 km from Haridwar) — we offer combined Haridwar–Rishikesh tours.',
  destinationDescription: 'Haridwar, meaning "Gateway to God," is one of the seven holiest cities (Sapta Puri) in Hinduism. Located at the foothills of the Himalayas where the Ganges descends from the mountains to the plains, Haridwar is a major pilgrimage destination visited by millions each year. The city is famous for the evening Ganga Aarti at Har Ki Pauri — a breathtaking ritual of fire and prayer on the riverbank. Haridwar is also the starting point for the Char Dham Yatra (Badrinath, Kedarnath, Gangotri, Yamunotri) and connects easily to Rishikesh, the Yoga Capital of the World.',
  pricing: [
    { vehicle: 'Sedan (Dzire/Aura)', capacity: 'Up to 4', oneWay: 'Rs.3,800', roundTrip: 'Rs.6,000' },
    { vehicle: 'XL/SUV (Ertiga/XL6)', capacity: 'Up to 6', oneWay: 'Rs.4,800', roundTrip: 'Rs.7,500' },
    { vehicle: 'Premium (Innova Crysta)', capacity: 'Up to 6', oneWay: 'Rs.6,000', roundTrip: 'Rs.9,500' },
  ],
  touristPlaces: [
    { name: 'Har Ki Pauri', desc: 'The most sacred ghat in Haridwar. The evening Ganga Aarti here is a transcendental experience.' },
    { name: 'Mansa Devi Temple', desc: 'Hilltop temple reached by ropeway. Dedicated to Goddess Mansa Devi, offering panoramic views.' },
    { name: 'Chandi Devi Temple', desc: 'Temple on Neel Parvat hill, one of the Shakti Peethas. Accessible by ropeway or trekking.' },
    { name: 'Maya Devi Temple', desc: 'Ancient temple considered the Adhisthatri (presiding deity) of Haridwar.' },
    { name: 'Rishikesh', desc: '24 km from Haridwar. Famous for the Laxman Jhula suspension bridge, Ram Jhula, yoga ashrams, and white-water rafting.' },
    { name: 'Rajaji National Park', desc: 'Wildlife sanctuary near Haridwar with elephants, tigers, leopards, and diverse bird species.' },
  ],
  inclusions: [
    'Experienced driver familiar with Haridwar and Rishikesh routes',
    'Fully air-conditioned, GPS-tracked vehicle',
    'Fuel charges included in quoted fare',
    'Flexible itinerary — can combine Haridwar + Rishikesh in one day trip',
    'Multiple pickup locations across Noida, Greater Noida, and Ghaziabad',
    'WhatsApp contact shared 30 minutes before pickup',
    'Free cancellation up to 2 hours before trip',
  ],
  nearbyRoutes: [
    { to: 'Rishikesh', distance: '~230 km', path: '/noida-to-rishikesh-taxi' },
    { to: 'Mussoorie', distance: '~300 km', path: '' },
    { to: 'Dehradun', distance: '~270 km', path: '' },
    { to: 'Nainital', distance: '~310 km', path: '/noida-to-nainital-taxi' },
    { to: 'Jim Corbett', distance: '~280 km', path: '' },
    { to: 'Chandigarh', distance: '~290 km', path: '/noida-to-chandigarh-taxi' },
  ],
  faqs: [
    {
      q: 'How much does a cab from Noida to Haridwar cost?',
      a: 'Noida to Haridwar taxi fare starts at Rs.3,800 for Sedan (one-way), Rs.4,800 for XL/SUV, Rs.6,000 for Innova Crysta. Round-trip fares offer better value. Toll extra.',
    },
    {
      q: 'Can I visit both Haridwar and Rishikesh in a same-day trip from Noida?',
      a: 'Yes, a combined Haridwar and Rishikesh day trip from Noida is very popular. Haridwar is 210 km and Rishikesh is 234 km from Noida — just 24 km apart. We recommend departing by 5–6 AM to have a full day for both cities and attend the evening Ganga Aarti.',
    },
    {
      q: 'What is the best time to attend Ganga Aarti at Haridwar?',
      a: 'The Ganga Aarti at Har Ki Pauri happens every evening at sunset — typically 6:30–7:30 PM in winter and 7:00–8:00 PM in summer. To attend, plan to arrive in Haridwar by 5:30 PM.',
    },
    {
      q: 'Is the road from Noida to Haridwar good?',
      a: 'Yes, the route via Delhi-Meerut Expressway (NH-334B) and then to Haridwar is well-maintained. The Expressway stretch is very smooth. The final 80 km to Haridwar via Roorkee is a good national highway.',
    },
    {
      q: 'Does Prabha Cab provide cab for Char Dham Yatra from Noida?',
      a: 'Yes, we provide outstation cab packages for Char Dham Yatra starting from Noida/Delhi NCR. Haridwar is the starting point for Char Dham. Call +91 9718437625 for multi-day Char Dham package pricing.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Noida to Haridwar Taxi Service',
      description: 'Reliable taxi service from Noida to Haridwar for Ganga Aarti, pilgrimage, and Rishikesh tours. One-way and round-trip available 24/7.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: [{ '@type': 'City', name: 'Noida' }, { '@type': 'City', name: 'Haridwar' }],
      serviceType: 'Outstation Taxi',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a cab from Noida to Haridwar cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Noida to Haridwar taxi starts at Rs.3,800 for Sedan one-way. Toll extra. Round trip from Rs.6,000.' },
        },
        {
          '@type': 'Question',
          name: 'Can I visit both Haridwar and Rishikesh in a same-day trip from Noida?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, Haridwar and Rishikesh are just 24 km apart. A combined same-day trip from Noida is very popular if you depart by 5–6 AM.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Routes', item: `${BASE}/routes` },
        { '@type': 'ListItem', position: 3, name: 'Noida to Haridwar Taxi', item: `${BASE}/noida-to-haridwar-taxi` },
      ],
    },
  ],
};

export default function NoidaToHaridwarPage() {
  return <OutstationRoutePage config={config} />;
}
