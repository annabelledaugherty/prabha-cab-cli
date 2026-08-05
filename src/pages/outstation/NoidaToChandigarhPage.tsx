import OutstationRoutePage, { RoutePageConfig } from '../../components/templates/OutstationRoutePage';

const BASE = 'https://prabhacab.in';

const config: RoutePageConfig = {
  from: 'Noida',
  to: 'Chandigarh',
  toFull: 'Chandigarh, Punjab/Haryana',
  metaTitle: 'Noida to Chandigarh Taxi | Cab Service | Prabha Cab',
  metaDescription: 'Noida to Chandigarh taxi service. The City Beautiful. Sedan from Rs.5,000. One-way & round trip. Call +91 9718437625 for booking.',
  keywords: 'noida to chandigarh taxi, noida to chandigarh cab, cab from noida to chandigarh, noida chandigarh taxi fare, noida to chandigarh one way, chandigarh cab from noida, noida to chandigarh car rental, noida to chandigarh one way taxi, prabha cab noida chandigarh, greater noida to chandigarh taxi',
  canonicalPath: '/noida-to-chandigarh-taxi',
  heroImage: '/images/routes/chandigarh1.jpeg',
  distance: '~265 km',
  duration: '4.5–5.5 hrs',
  bestTime: 'October to March',
  routeDescription: 'Book a taxi from Noida to Chandigarh — the beautifully planned City Beautiful — with Prabha Cab. The journey covers approximately 265 km via NH-44 (Delhi-Ambala-Chandigarh Highway) and takes 4.5 to 5.5 hours. Chandigarh is the only city in India designed by architect Le Corbusier and serves as the joint capital of Punjab and Haryana. It is also a gateway to Himachal Pradesh — Shimla is just 120 km away.',
  destinationDescription: 'Chandigarh is a unique planned city in India, designed by Swiss-French architect Le Corbusier in the 1950s. Serving as the joint capital of Punjab and Haryana, and also a Union Territory, Chandigarh is consistently ranked among India\'s most liveable and cleanest cities. The city is famous for the Rock Garden — a sprawling sculpture garden made from industrial and urban waste — and the beautiful Sukhna Lake, a man-made reservoir at the foothills of the Himalayas. The city is laid out in numbered sectors, making navigation intuitive. Chandigarh is also a popular stopover for trips to Shimla, Manali, and other Himachal Pradesh destinations.',
  pricing: [
    { vehicle: 'Sedan (Dzire/Aura)', capacity: 'Up to 4', oneWay: 'Rs.5,000', roundTrip: 'Rs.8,000' },
    { vehicle: 'XL/SUV (Ertiga/XL6)', capacity: 'Up to 6', oneWay: 'Rs.6,200', roundTrip: 'Rs.10,000' },
    { vehicle: 'Premium (Innova Crysta)', capacity: 'Up to 6', oneWay: 'Rs.7,500', roundTrip: 'Rs.12,500' },
  ],
  touristPlaces: [
    { name: 'Rock Garden', desc: 'UNESCO-recognised sculpture garden created by Nek Chand from recycled urban waste. A unique artistic marvel spanning 40 acres.' },
    { name: 'Sukhna Lake', desc: 'Serene artificial lake at the foothills of Himalayas. Boating, morning walks, and migratory birds in winter.' },
    { name: 'Rose Garden (Zakir Hussain Garden)', desc: 'Asia\'s largest rose garden with over 1,600 species of roses. Best in February-March bloom season.' },
    { name: 'Capitol Complex', desc: 'UNESCO World Heritage Site — Le Corbusier\'s masterpiece comprising the Secretariat, Legislative Assembly, and High Court.' },
    { name: 'Government Museum & Art Gallery', desc: 'Houses Gandhara sculpture, miniature paintings, and modern Indian art collections.' },
    { name: 'Pinjore Gardens (Yadavindra Gardens)', desc: '20 km from Chandigarh. 17th century Mughal garden with terraced lawns, fountains, and a heritage hotel.' },
  ],
  inclusions: [
    'Experienced outstation driver with NH-44 route familiarity',
    'Fully air-conditioned, GPS-tracked vehicle',
    'Fuel charges included in quoted fare',
    'Multiple pickup locations across Noida and Greater Noida',
    'Comfortable journey on well-maintained national highway',
    'WhatsApp contact shared before departure',
    'Free cancellation up to 2 hours before trip',
  ],
  nearbyRoutes: [
    { to: 'Shimla', distance: '~395 km', path: '' },
    { to: 'Manali', distance: '~595 km', path: '' },
    { to: 'Amritsar', distance: '~460 km', path: '' },
    { to: 'Kasauli', distance: '~295 km', path: '' },
    { to: 'Pinjore', distance: '~285 km', path: '' },
    { to: 'Haridwar', distance: '~290 km', path: '/noida-to-haridwar-taxi' },
  ],
  faqs: [
    {
      q: 'How much does a taxi from Noida to Chandigarh cost?',
      a: 'Noida to Chandigarh taxi fare starts at Rs.5,000 for Sedan (one-way), Rs.6,200 for XL/SUV, Rs.7,500 for Innova Crysta. Toll charges (NH-44 ~Rs.500-600) are extra. Round-trip available from Rs.8,000.',
    },
    {
      q: 'How long is the drive from Noida to Chandigarh?',
      a: 'Noida to Chandigarh is approximately 265 km via NH-44. The drive takes 4.5 to 5.5 hours under normal traffic. The route passes through Delhi, Panipat, Ambala, and then Chandigarh.',
    },
    {
      q: 'Can I extend my Chandigarh trip to Shimla?',
      a: 'Yes, Shimla is just 120 km from Chandigarh. Prabha Cab can arrange multi-day packages covering both Chandigarh and Shimla. Many travellers do a 3-day trip: Noida → Chandigarh → Shimla → Noida. Call for package pricing.',
    },
    {
      q: 'Is Chandigarh a good destination for a day trip from Noida?',
      a: 'Yes, Chandigarh makes for an excellent day trip from Noida. Depart by 5–6 AM to arrive by 10:30 AM, giving you a full day for Rock Garden, Sukhna Lake, and Rose Garden before returning in the evening.',
    },
    {
      q: 'What is the best route from Noida to Chandigarh?',
      a: 'The best route is via NH-44 (National Highway 44) — Delhi Outer Ring Road → Panipat → Karnal → Ambala → Chandigarh. This is a well-maintained, 4-6 lane highway throughout with good fuel stations and rest areas.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Noida to Chandigarh Taxi Service',
      description: 'Comfortable taxi from Noida to Chandigarh — the City Beautiful. Visit Rock Garden, Sukhna Lake, and gateway to Shimla/Manali. One-way and round-trip.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: [{ '@type': 'City', name: 'Noida' }, { '@type': 'City', name: 'Chandigarh' }],
      serviceType: 'Outstation Taxi',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a taxi from Noida to Chandigarh cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Noida to Chandigarh taxi starts at Rs.5,000 for Sedan one-way. Toll extra. Round trip from Rs.8,000.' },
        },
        {
          '@type': 'Question',
          name: 'How long is the drive from Noida to Chandigarh?',
          acceptedAnswer: { '@type': 'Answer', text: 'Noida to Chandigarh is approximately 265 km via NH-44 and takes 4.5 to 5.5 hours.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Routes', item: `${BASE}/routes` },
        { '@type': 'ListItem', position: 3, name: 'Noida to Chandigarh Taxi', item: `${BASE}/noida-to-chandigarh-taxi` },
      ],
    },
  ],
};

export default function NoidaToChandigarhPage() {
  return <OutstationRoutePage config={config} />;
}
