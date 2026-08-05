import AirportServicePage, { AirportPageConfig } from '../../components/templates/AirportServicePage';

const BASE = 'https://prabhacab.in';

const config: AirportPageConfig = {
  from: 'Delhi NCR',
  fromShort: 'Delhi',
  metaTitle: 'Delhi Airport Cab Service | IGI Airport Taxi | Prabha Cab',
  metaDescription: 'Reliable Delhi IGI Airport cab service for all of Delhi NCR. Airport pickup & drop, all terminals. Sedan from Rs.1,200. Call +91 9718437625.',
  keywords: 'delhi airport cab service, igi airport taxi delhi, delhi airport taxi, cab from delhi to airport, airport transfer delhi ncr, delhi t3 taxi, south delhi airport cab, dwarka to airport taxi, rohini to airport cab, airport pickup delhi, prabha cab delhi airport',
  canonicalPath: '/delhi-airport-cab-service',
  heroImage: '/images/services/airport-transfer.jpg',
  intro: 'Prabha Cab offers comprehensive airport taxi and cab service across all of Delhi NCR — South Delhi, North Delhi, East Delhi, West Delhi, Dwarka, Rohini, Janakpuri, Saket, Lajpat Nagar and beyond. Whether you need a pickup from IGI Airport on arrival or a reliable drop to catch your flight, we are available 24/7 with verified, professional drivers.',
  distance: '15–60 km (varies by area)',
  duration: '30–90 min',
  pricing: [
    { vehicle: 'Sedan', capacity: 'Up to 4 passengers', price: 'Rs.1,200+', note: 'Dzire / Aura / Xcent' },
    { vehicle: 'XL / SUV', capacity: 'Up to 6 passengers', price: 'Rs.1,600+', note: 'XL6 / Ertiga / Innova' },
    { vehicle: 'Premium', capacity: 'Up to 6 passengers', price: 'Rs.2,200+', note: 'Innova Crysta' },
  ],
  terminals: [
    { name: 'Terminal 1 (T1)', desc: 'Domestic flights — IndiGo, SpiceJet. Located on NH-48 near Mahipalpur. Quickest terminal to access from South Delhi and Dwarka.' },
    { name: 'Terminal 2 (T2)', desc: 'Domestic and charter operations. Smaller terminal with faster check-in queues and easy pickup bays.' },
    { name: 'Terminal 3 (T3)', desc: 'International flights & premium domestic — Air India, Vistara, Emirates, Lufthansa, British Airways. Largest terminal with multi-level drop zone.' },
  ],
  processSteps: [
    { step: '1', title: 'Share Your Details', desc: 'Call +91 9718437625 or WhatsApp with your address in Delhi/NCR, flight number, terminal, and travel date. Booking is confirmed instantly.' },
    { step: '2', title: 'Cab Assigned With Tracking', desc: 'A verified driver is assigned. You receive driver name, vehicle number, and can track in real-time. We monitor your flight and adjust timing automatically.' },
    { step: '3', title: 'Comfortable Airport Transfer', desc: 'Driver arrives 10 minutes early at your doorstep. Assists with luggage and drops you at your specific terminal departure gate or arrival pickup point.' },
  ],
  tips: [
    'From Central Delhi (Connaught Place, ITO), allow 45–60 minutes for airport drop during off-peak hours. Add 30 minutes during morning and evening rush hours.',
    'From South Delhi (Saket, Malviya Nagar), the airport is just 20–25 km away via NH-48. Journey time is typically 30–45 minutes in normal traffic.',
    'Dwarka, Janakpuri, and West Delhi are closest to IGI Airport. Allow 25–40 minutes from these areas.',
    'For arrival pickups: our driver waits at the designated pickup zone outside arrivals with a name board. No need to call immediately on landing.',
    'International arrivals can take 60–90 minutes for immigration and customs. We track your flight and plan driver arrival accordingly.',
    'Confirm your terminal when booking — T1, T2, or T3 — to ensure the driver goes to the correct drop/pickup point.',
  ],
  faqs: [
    {
      q: 'Which areas in Delhi does Prabha Cab cover for airport service?',
      a: 'Prabha Cab covers all of Delhi for airport transfers — South Delhi (Saket, Lajpat Nagar, Nehru Place), North Delhi (Rohini, Pitampura), East Delhi (Preet Vihar, Mayur Vihar), West Delhi (Dwarka, Janakpuri), and Central Delhi (Connaught Place, Karol Bagh).',
    },
    {
      q: 'What is the cab fare from Connaught Place to IGI Airport?',
      a: 'Connaught Place to IGI Airport taxi fare starts at approximately Rs.1,400 for Sedan, Rs.1,800 for XL, Rs.2,200 for Innova. Toll charges (Rs.150-200) are extra. Exact fare shared at booking.',
    },
    {
      q: 'Does Prabha Cab do airport pickups (arrival)?',
      a: 'Yes, we provide both airport drops (home to airport) and airport pickups (airport to home). For arrivals, driver meets you at the designated pickup zone with a name board.',
    },
    {
      q: 'Is there a night surcharge for Delhi airport taxi?',
      a: 'A night allowance of Rs.400 applies for trips starting after 10 PM. This is clearly disclosed at the time of booking. No hidden charges.',
    },
    {
      q: 'Can I book a cab from Delhi Airport to Noida or Greater Noida?',
      a: 'Yes, Prabha Cab provides airport to Noida, Noida Extension, and Greater Noida cab service. Noida drop from airport starts at Rs.1,400 for Sedan. Call +91 9718437625 for exact quote.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Delhi Airport Cab Service',
      description: 'Professional airport taxi service for all of Delhi NCR to and from Indira Gandhi International Airport. All terminals, 24/7 availability, flight tracking.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: { '@type': 'City', name: 'Delhi' },
      serviceType: 'Airport Transfer',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which areas in Delhi does Prabha Cab cover for airport service?',
          acceptedAnswer: { '@type': 'Answer', text: 'Prabha Cab covers all of Delhi — South Delhi, North Delhi, East Delhi, West Delhi, and Central Delhi for airport taxi transfers.' },
        },
        {
          '@type': 'Question',
          name: 'Does Prabha Cab do airport pickups on arrival?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide both airport drops and airport pickups. For arrivals, driver meets you at the designated pickup zone with a name board.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
        { '@type': 'ListItem', position: 3, name: 'Delhi Airport Cab Service', item: `${BASE}/delhi-airport-cab-service` },
      ],
    },
  ],
};

export default function DelhiAirportTaxiPage() {
  return <AirportServicePage config={config} />;
}
