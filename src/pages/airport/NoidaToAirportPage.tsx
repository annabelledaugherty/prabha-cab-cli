import AirportServicePage, { AirportPageConfig } from '../../components/templates/AirportServicePage';

const BASE = 'https://prabhacab.in';

const config: AirportPageConfig = {
  from: 'Noida',
  fromShort: 'Noida',
  metaTitle: 'Noida to Delhi Airport Taxi | IGI Cab Booking | Prabha Cab',
  metaDescription: 'Noida to Delhi IGI Airport cab service. All terminals covered. Sedan from Rs.1,400. Flight tracking, 24/7 available. Call +91 9718437625.',
  keywords: 'noida to delhi airport taxi, noida to igi airport cab, cab from noida to airport, noida airport transfer, noida to t3 airport taxi, noida sector 18 to airport cab, noida expressway airport taxi, airport pickup noida, igi airport cab noida, prabha cab noida airport',
  canonicalPath: '/noida-to-delhi-airport-taxi',
  heroImage: '/images/services/airport-transfer.jpg',
  intro: 'Prabha Cab provides reliable, on-time airport taxi service from all areas of Noida — Sector 18, Sector 62, Sector 63, Noida Extension, Greater Noida West — to all terminals of Indira Gandhi International Airport (IGI) in Delhi. We track your flight, arrive early, and ensure you board stress-free.',
  distance: '~35–50 km',
  duration: '45–90 min',
  pricing: [
    { vehicle: 'Sedan', capacity: 'Up to 4 passengers', price: 'Rs.1,400+', note: 'Dzire / Aura / Xcent' },
    { vehicle: 'XL / SUV', capacity: 'Up to 6 passengers', price: 'Rs.1,800+', note: 'XL6 / Ertiga / Innova' },
    { vehicle: 'Premium', capacity: 'Up to 6 passengers', price: 'Rs.2,500+', note: 'Innova Crysta' },
  ],
  terminals: [
    { name: 'Terminal 1 (T1)', desc: 'Domestic flights — IndiGo, SpiceJet. Located near NH-48. Our driver waits at the designated pickup zone.' },
    { name: 'Terminal 2 (T2)', desc: 'Domestic and charter flights. Less crowded terminal with direct pickup bay access.' },
    { name: 'Terminal 3 (T3)', desc: 'International & premium domestic — Air India, Vistara, Emirates, Qatar. Largest terminal. Driver meets at arrival hall.' },
  ],
  processSteps: [
    { step: '1', title: 'Call or WhatsApp to Book', desc: 'Call +91 9718437625 or send a WhatsApp message with your pickup location in Noida, flight number, and travel date. Booking confirmed instantly.' },
    { step: '2', title: 'Driver Assigned & Tracking Starts', desc: 'A verified driver is assigned and sent to you via WhatsApp. We monitor your flight status in real-time and adjust departure time accordingly.' },
    { step: '3', title: 'Pickup & Drop at Airport', desc: 'Driver arrives at your location 10 minutes early. Helps with luggage, navigates to the correct terminal, and ensures you reach well before check-in.' },
  ],
  tips: [
    'Book your airport cab at least 2 hours before your journey to guarantee availability, especially during early mornings (4–6 AM).',
    'From most areas in Noida, allow at least 90 minutes during peak traffic (7–10 AM, 5–8 PM) to reach IGI Airport comfortably.',
    'Carry your flight PNR / booking reference for sharing with driver. Our team also monitors flight status independently.',
    'For international flights, arrive at the airport at least 3 hours before departure. Factor in terminal entry queues.',
    'Night trips (after 10 PM) include a night allowance of Rs.400. This is clearly disclosed at booking.',
    'All vehicles are air-conditioned, GPS-tracked, and cleaned before every trip. Sanitisation on request.',
  ],
  faqs: [
    {
      q: 'How much does a cab from Noida to Delhi Airport cost?',
      a: 'Noida to IGI Airport taxi fare starts at Rs.1,400 for Sedan, Rs.1,800 for XL/SUV, Rs.2,500 for Innova Crysta. Exact fare depends on your specific area in Noida. Toll charges (approx. Rs.200-250) are extra.',
    },
    {
      q: 'Does Prabha Cab track my flight from Noida?',
      a: 'Yes, we provide real-time flight tracking for all airport pickups. If your flight is delayed or arrives early, our driver adjusts accordingly at no extra charge.',
    },
    {
      q: 'Is early morning airport taxi available from Noida?',
      a: 'Yes, Prabha Cab operates 24/7. We handle early morning pickups at 3 AM, 4 AM, 5 AM and late-night airport drops without any issue. Advance booking recommended for early hours.',
    },
    {
      q: 'Which terminal does Prabha Cab drop at from Noida?',
      a: 'We cover all terminals: T1 (IndiGo/SpiceJet domestic), T2 (charters/domestic), and T3 (international & Air India/Vistara). Confirm your terminal at booking and the driver will take you directly.',
    },
    {
      q: 'How long does it take from Noida to IGI Airport?',
      a: 'From central Noida (Sector 18, Sector 62), it typically takes 45–60 minutes without traffic. During peak hours (7–10 AM, 5–8 PM), allow 75–90 minutes. From Noida Extension or Greater Noida, add 15–20 minutes.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Noida to Delhi Airport Taxi Service',
      description: 'Professional airport taxi from Noida to Indira Gandhi International Airport (IGI) Delhi. All terminals covered, flight tracking, 24/7 available.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: [{ '@type': 'City', name: 'Noida' }, { '@type': 'City', name: 'Delhi' }],
      serviceType: 'Airport Transfer',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a cab from Noida to Delhi Airport cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Noida to IGI Airport taxi fare starts at Rs.1,400 for Sedan, Rs.1,800 for XL/SUV, Rs.2,500 for Innova Crysta. Toll extra.' },
        },
        {
          '@type': 'Question',
          name: 'Is early morning airport taxi available from Noida?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, Prabha Cab operates 24/7 including early morning pickups at 3 AM, 4 AM, 5 AM. Advance booking recommended.' },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
        { '@type': 'ListItem', position: 3, name: 'Noida to Delhi Airport Taxi', item: `${BASE}/noida-to-delhi-airport-taxi` },
      ],
    },
  ],
};

export default function NoidaToAirportPage() {
  return <AirportServicePage config={config} />;
}
