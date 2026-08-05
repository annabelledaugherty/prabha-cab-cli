import CityServicePage, { CityPageConfig } from '../../components/templates/CityServicePage';

const BASE = 'https://prabhacab.in';

const config: CityPageConfig = {
  city: 'Noida',
  cityFull: 'Noida, Uttar Pradesh',
  metaTitle: 'Taxi Service in Noida | Cab Booking 24/7 | Prabha Cab',
  metaDescription: 'Reliable taxi service in Noida. Airport cab from Rs.2200, local 8hr from Rs.1600, outstation from Rs.12/km. Book Sedan, XL, Innova. Call +91 9718437625.',
  keywords: 'taxi service in noida, cab service noida, taxi noida, cab booking noida, noida taxi, airport taxi noida, outstation cab noida, local taxi noida, 24 hour cab noida, cab noida sector 18, best taxi service noida, cheap cab noida, noida to delhi taxi, prabha cab noida',
  canonicalPath: '/taxi-service-noida',
  heroImage: '/images/hero.jpg',
  heroTagline: 'Professional & Affordable Cab Service in Noida — Available Around the Clock',
  intro: 'Prabha Cab is your reliable taxi partner in Noida for all your travel needs. Whether you need a quick cab to Noida Sector 18, an airport transfer to IGI Delhi, or an outstation trip to Agra or Jaipur — we are available 24/7. Our professional drivers know Noida\'s sectors, expressways, and all major landmarks inside out.',
  whyChooseUs: 'With years of experience serving Noida\'s residents and businesses, Prabha Cab is trusted for its punctuality, safety, and transparent pricing. We cover every part of Noida — from Sector 1 to Sector 168, from Noida City Centre to Botanical Garden, Film City to Sector 62 IT hub. Our GPS-tracked, AC vehicles with verified drivers ensure a safe, comfortable ride every time.',
  services: [
    {
      title: 'Noida to Delhi Airport Taxi',
      desc: '24/7 airport cab service from Noida to IGI Airport Delhi. All terminals covered. Flight tracking, meet & greet. Free waiting time included.',
      price: 'Sedan Rs.2,200 | XL Rs.2,500 | Innova Rs.3,500',
      icon: 'plane',
    },
    {
      title: 'Local Cab Package — Noida',
      desc: 'Hourly cab rental in Noida for shopping, hospital visits, meetings, sightseeing. 8hr/80km and 12hr/120km packages available with AC vehicles.',
      price: '8hr/80km from Rs.1,600 | 12hr/120km from Rs.2,500',
      icon: 'map',
    },
    {
      title: 'Outstation Taxi from Noida',
      desc: 'One-way and round-trip taxi from Noida to all major North India destinations — Agra, Jaipur, Mathura, Haridwar, Rishikesh, Nainital, Varanasi, Ayodhya and 35+ more.',
      price: 'Sedan Rs.12/km | XL Rs.15/km | Innova Rs.22/km',
      icon: 'nav',
    },
    {
      title: 'Corporate Taxi Service — Noida',
      desc: 'Dedicated corporate cab packages for IT companies and businesses in Noida Sector 62, 63, Film City. Monthly packages with 2,500km and dedicated drivers.',
      price: 'From Rs.40,000/month for Sedan',
      icon: 'building',
    },
    {
      title: 'Railway Station Cab',
      desc: 'Pickup and drop service to New Delhi Railway Station, Old Delhi, Hazrat Nizamuddin from all Noida sectors. Train tracking included.',
      price: 'Call for instant quote',
      icon: 'car',
    },
    {
      title: 'Delhi Darshan from Noida',
      desc: 'Full-day Delhi sightseeing tour from Noida. 12 hours / 120km package covering India Gate, Red Fort, Qutub Minar, Lotus Temple and more.',
      price: '12hr/120km from Rs.2,500',
      icon: 'car',
    },
  ],
  pricing: [
    { vehicle: 'Sedan (Dzire / Aura / Xcent)', airport: 'Rs.2,200', local8hr: 'Rs.1,600', outstationPerKm: 'Rs.12/km' },
    { vehicle: 'XL/SUV (XL6 / Ertiga)', airport: 'Rs.2,500', local8hr: 'Rs.2,500', outstationPerKm: 'Rs.15/km' },
    { vehicle: 'Premium (Innova Crysta)', airport: 'Rs.3,500', local8hr: 'Rs.3,000', outstationPerKm: 'Rs.22/km' },
  ],
  popularRoutes: [
    { to: 'Delhi Airport (IGI)', distance: '~45 km', time: '1-1.5 hrs', price: 'Rs.2,200', path: '/noida-to-delhi-airport-taxi' },
    { to: 'Agra', distance: '~200 km', time: '3-3.5 hrs', price: 'Rs.4,800', path: '/noida-to-agra-taxi' },
    { to: 'Jaipur', distance: '~260 km', time: '4.5 hrs', price: 'Rs.6,720', path: '/noida-to-jaipur-taxi' },
    { to: 'Haridwar', distance: '~200 km', time: '3.5-4 hrs', price: 'Rs.5,280', path: '/noida-to-haridwar-taxi' },
    { to: 'Rishikesh', distance: '~220 km', time: '4-4.5 hrs', price: 'Rs.5,760', path: '/noida-to-rishikesh-taxi' },
    { to: 'Mathura', distance: '~145 km', time: '2.5 hrs', price: 'Rs.3,600', path: '' },
    { to: 'Nainital', distance: '~280 km', time: '5.5-6 hrs', price: 'Rs.7,200', path: '/noida-to-nainital-taxi' },
    { to: 'Varanasi', distance: '~800 km', time: '14 hrs', price: 'Rs.19,200', path: '' },
  ],
  serviceAreas: [
    'Sector 18', 'Sector 62', 'Sector 63', 'Sector 15', 'Sector 16',
    'Sector 44', 'Sector 50', 'Sector 51', 'Sector 52', 'Sector 137',
    'Noida City Centre', 'Botanical Garden', 'Film City', 'Golf Course',
    'Sector 168', 'Sector 128', 'Sector 126', 'Sector 104', 'Express Way',
    'Noida Phase 2', 'Noida Phase 1', 'Sector 71', 'Sector 72', 'Sector 73'
  ],
  faqs: [
    {
      q: 'Which is the best cab service in Noida?',
      a: 'Prabha Cab is one of the most trusted cab services in Noida with a 4.8-star rating from 850+ customers. Operating since 2016, we offer transparent pricing, professional drivers, and 24/7 availability across all Noida sectors.',
    },
    {
      q: 'How much does a cab from Noida to Delhi Airport cost?',
      a: 'Prabha Cab charges Rs.2,200 for a Sedan, Rs.2,500 for XL/SUV, and Rs.3,500 for Innova Crysta for cab service from Noida to Delhi Airport (IGI). Toll and parking charges are extra.',
    },
    {
      q: 'Is there a taxi service available near me in Noida?',
      a: 'Yes, Prabha Cab serves all Noida sectors. Call +91 9718437625 for a cab near you in Noida — typically available within 15-30 minutes. We cover Sector 18 to Sector 168 and everything in between.',
    },
    {
      q: 'What is the cheapest cab service in Noida?',
      a: 'Prabha Cab offers competitive rates starting at Rs.12/km for outstation Sedan, and Rs.1,600 for a local 8hr/80km package. We offer the best value for money with no hidden charges.',
    },
    {
      q: 'Do you provide cab service from Noida to Agra?',
      a: 'Yes, Prabha Cab provides daily cab service from Noida to Agra. The one-way fare starts at Rs.4,800 for a Sedan (approx. 200km, 3-3.5 hrs). Same-day Agra day trips can also be arranged.',
    },
    {
      q: 'Can I book an outstation cab from Noida for 2 days?',
      a: 'Yes, multi-day outstation trips from Noida are available. Our drivers stay with you for the entire trip. Rates are Rs.12/km for Sedan, Rs.15/km for XL, Rs.22/km for Innova with minimum 250km/day billing.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Taxi Service in Noida',
      description: 'Professional taxi and cab service in Noida. Airport transfers, local rides, outstation trips available 24/7.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: { '@type': 'City', name: 'Noida' },
      serviceType: 'Taxi Service',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Which is the best cab service in Noida?', acceptedAnswer: { '@type': 'Answer', text: 'Prabha Cab is one of the most trusted cab services in Noida with 4.8 rating, operating since 2016.' } },
        { '@type': 'Question', name: 'How much does a cab from Noida to Delhi Airport cost?', acceptedAnswer: { '@type': 'Answer', text: 'Noida to Delhi Airport: Sedan Rs.2,200, XL Rs.2,500, Innova Crysta Rs.3,500. Toll extra.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
        { '@type': 'ListItem', position: 3, name: 'Taxi Service in Noida', item: `${BASE}/taxi-service-noida` },
      ],
    },
  ],
};

export default function NoidaTaxiPage() {
  return <CityServicePage config={config} />;
}
