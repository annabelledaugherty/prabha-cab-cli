import CityServicePage, { CityPageConfig } from '../../components/templates/CityServicePage';

const BASE = 'https://prabhacab.in';

const config: CityPageConfig = {
  city: 'Delhi',
  cityFull: 'Delhi, India',
  metaTitle: 'Taxi Service in Delhi | 24/7 Cab Booking Delhi NCR | Prabha Cab',
  metaDescription: 'Affordable taxi service in Delhi. Airport transfer, local rides, outstation cabs. Sedan from Rs.12/km. Book now: +91 9718437625. Available 24/7.',
  keywords: 'taxi service in delhi, cab service delhi, taxi delhi, cab booking delhi, delhi taxi booking, airport taxi delhi, outstation cab delhi, local taxi delhi, 24 hour cab delhi, delhi to noida taxi, delhi to greater noida cab, prabha cab delhi',
  canonicalPath: '/taxi-service-delhi',
  heroImage: '/images/hero3.jpg',
  heroTagline: 'Trusted Cab Service Across All of Delhi — Airport, Local, Outstation Available 24/7',
  intro: 'Prabha Cab provides reliable taxi service across Delhi including South Delhi, East Delhi, West Delhi, North Delhi, Dwarka, Rohini, Connaught Place and all major areas. From Delhi to Greater Noida commutes to outstation trips across India — we cover it all with professional drivers and transparent pricing.',
  whyChooseUs: 'Whether you need a cab from Delhi Airport to Noida, or a day trip from Delhi to Agra, Prabha Cab is your dependable partner. We serve all parts of Delhi 24/7 with AC vehicles, GPS tracking, and verified drivers. Our deep knowledge of Delhi\'s roads, traffic patterns and popular landmarks ensures the fastest, most comfortable routes every time.',
  services: [
    {
      title: 'Delhi Airport (IGI) Transfer',
      desc: 'Pickup and drop service to and from Indira Gandhi International Airport. All terminals covered. Flight tracking, meet & greet, free waiting time.',
      price: 'Sedan Rs.2,200+ | XL Rs.2,500+ | Innova Rs.3,500+',
      icon: 'plane',
    },
    {
      title: 'Local Cab Rental — Delhi',
      desc: 'Flexible hourly cab rental across Delhi. 8hr/80km and 12hr/120km packages for multiple stops, sightseeing, shopping and business meetings.',
      price: '8hr/80km from Rs.1,600 | 12hr/120km from Rs.2,500',
      icon: 'map',
    },
    {
      title: 'Outstation Cab from Delhi',
      desc: 'One-way and round-trip outstation taxi from Delhi to Agra, Jaipur, Haridwar, Rishikesh, Shimla, Manali, Chandigarh and 40+ destinations.',
      price: 'Sedan Rs.12/km | XL Rs.15/km | Innova Rs.22/km',
      icon: 'nav',
    },
    {
      title: 'Delhi Darshan Tour',
      desc: 'Full-day Delhi sightseeing package. Visit India Gate, Red Fort, Qutub Minar, Lotus Temple, Akshardham, Humayun\'s Tomb and more in one trip.',
      price: '12hr/120km from Rs.2,500',
      icon: 'car',
    },
    {
      title: 'Delhi to Noida / Greater Noida',
      desc: 'Frequent cab service from Delhi to Noida and Greater Noida for daily commuters and travellers. Express route via Yamuna Expressway.',
      price: 'From Rs.800',
      icon: 'nav',
    },
    {
      title: 'Corporate Cab Delhi',
      desc: 'Monthly corporate cab packages for Delhi businesses. Dedicated drivers, 2,500km/month, priority booking, flexible billing for companies of all sizes.',
      price: 'From Rs.40,000/month',
      icon: 'building',
    },
  ],
  pricing: [
    { vehicle: 'Sedan (Dzire / Aura / Xcent)', airport: 'Rs.2,200+', local8hr: 'Rs.1,600', outstationPerKm: 'Rs.12/km' },
    { vehicle: 'XL/SUV (XL6 / Ertiga)', airport: 'Rs.2,500+', local8hr: 'Rs.2,500', outstationPerKm: 'Rs.15/km' },
    { vehicle: 'Premium (Innova Crysta)', airport: 'Rs.3,500+', local8hr: 'Rs.3,000', outstationPerKm: 'Rs.22/km' },
  ],
  popularRoutes: [
    { to: 'Agra', distance: '~200 km', time: '3-3.5 hrs', price: 'Rs.4,800', path: '/noida-to-agra-taxi' },
    { to: 'Jaipur', distance: '~280 km', time: '4.5-5 hrs', price: 'Rs.6,720', path: '/noida-to-jaipur-taxi' },
    { to: 'Haridwar', distance: '~220 km', time: '4-5 hrs', price: 'Rs.5,280', path: '/noida-to-haridwar-taxi' },
    { to: 'Rishikesh', distance: '~245 km', time: '4.5-5 hrs', price: 'Rs.5,760', path: '/noida-to-rishikesh-taxi' },
    { to: 'Chandigarh', distance: '~260 km', time: '4.5 hrs', price: 'Rs.6,000', path: '/noida-to-chandigarh-taxi' },
    { to: 'Shimla', distance: '~365 km', time: '7 hrs', price: 'Rs.8,400', path: '' },
    { to: 'Manali', distance: '~540 km', time: '10 hrs', price: 'Rs.12,720', path: '' },
    { to: 'Vaishno Devi', distance: '~650 km', time: '12 hrs', price: 'Rs.15,600', path: '' },
  ],
  serviceAreas: [
    'South Delhi', 'North Delhi', 'East Delhi', 'West Delhi', 'Central Delhi',
    'Connaught Place', 'Dwarka', 'Rohini', 'Saket', 'Lajpat Nagar',
    'Karol Bagh', 'Janakpuri', 'Pitampura', 'Preet Vihar', 'Laxmi Nagar',
    'Shahdara', 'Ashram', 'Defence Colony', 'Greater Kailash', 'Nehru Place'
  ],
  faqs: [
    {
      q: 'Which cab service is best in Delhi?',
      a: 'Prabha Cab is a highly rated taxi service in Delhi with a 4.8-star rating and 850+ reviews. We offer 24/7 service, transparent pricing, and professional drivers across all areas of Delhi.',
    },
    {
      q: 'How much does a taxi from Delhi to Agra cost?',
      a: 'Delhi to Agra cab fare with Prabha Cab: Sedan Rs.4,800, XL/SUV Rs.6,000, Innova Crysta Rs.8,800. These are one-way fares. Same-day Agra day trips are also available.',
    },
    {
      q: 'Is there a one-way taxi from Delhi to Jaipur?',
      a: 'Yes, Prabha Cab offers one-way taxi from Delhi to Jaipur. The fare starts at Rs.6,720 for a Sedan (approx. 280km, 4.5-5 hours). Round-trip and multi-day trips are also available.',
    },
    {
      q: 'Can I book a cab from Delhi to Noida?',
      a: 'Yes, Prabha Cab provides cab service from Delhi to Noida and Greater Noida. We pick up from anywhere in Delhi and drop to any sector in Noida. Call +91 9718437625 for instant booking.',
    },
    {
      q: 'How do I book a 24-hour taxi in Delhi?',
      a: 'Prabha Cab is available 24/7 in Delhi. Call or WhatsApp +91 9718437625 at any time. Our local cab packages start from Rs.1,600 for 8 hours, perfect for full-day use in Delhi.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Taxi Service in Delhi',
      description: 'Professional taxi and cab service in Delhi. Airport transfers, local rides, outstation trips available 24/7.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: { '@type': 'City', name: 'Delhi' },
      serviceType: 'Taxi Service',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
        { '@type': 'ListItem', position: 3, name: 'Taxi Service in Delhi', item: `${BASE}/taxi-service-delhi` },
      ],
    },
  ],
};

export default function DelhiTaxiPage() {
  return <CityServicePage config={config} />;
}
