import CityServicePage, { CityPageConfig } from '../../components/templates/CityServicePage';

const BASE = 'https://prabhacab.in';

const config: CityPageConfig = {
  city: 'Faridabad',
  cityFull: 'Faridabad, Haryana',
  metaTitle: 'Taxi Service in Faridabad | 24/7 Cab Booking | Prabha Cab',
  metaDescription: 'Reliable taxi service in Faridabad. Airport transfer, local rides, outstation cabs. Sedan from Rs.12/km. Call +91 9718437625 for instant booking.',
  keywords: 'taxi service in faridabad, cab service faridabad, taxi faridabad, faridabad cab booking, airport taxi faridabad, outstation cab faridabad, local taxi faridabad, 24 hour cab faridabad, old faridabad taxi, nhpc chowk cab, prabha cab faridabad',
  canonicalPath: '/taxi-service-faridabad',
  heroImage: '/images/hero3.jpg',
  heroTagline: 'Affordable & Reliable Cab Service in Faridabad — Airport, Local & Outstation Available 24/7',
  intro: 'Prabha Cab provides dependable taxi service across Faridabad covering Old Faridabad, New Industrial Township (NIT), Sector 12, 14, 15, 21, 28, Suraj Kund, Ballabhgarh, Palwal and all surrounding areas. Book a cab for airport transfers, local trips or outstation journeys at transparent, competitive prices.',
  whyChooseUs: 'Faridabad residents rely on Prabha Cab for its consistent, professional taxi service. Whether you are heading to Delhi Airport, travelling to Agra, or need an hourly cab for errands in Faridabad, our verified drivers and well-maintained AC vehicles ensure a safe, comfortable experience every time.',
  services: [
    {
      title: 'Faridabad to Delhi Airport Taxi',
      desc: 'Airport cab from Faridabad to IGI Airport Delhi. Flight tracking, meet & greet, all terminals covered. Safe and on-time guaranteed.',
      price: 'Sedan Rs.1,800+ | XL Rs.2,200+ | Innova Rs.3,000+',
      icon: 'plane',
    },
    {
      title: 'Local Cab Package — Faridabad',
      desc: 'Hourly cab rental in Faridabad for hospital, shopping, meetings. 8hr/80km and 12hr/120km packages covering Faridabad and Delhi NCR.',
      price: '8hr/80km from Rs.1,600 | 12hr/120km from Rs.2,500',
      icon: 'map',
    },
    {
      title: 'Outstation Taxi from Faridabad',
      desc: 'One-way and round-trip cab from Faridabad to Agra, Mathura, Vrindavan, Jaipur, Haridwar, and other major destinations across North India.',
      price: 'Sedan Rs.12/km | XL Rs.15/km | Innova Rs.22/km',
      icon: 'nav',
    },
    {
      title: 'Faridabad to Noida / Greater Noida',
      desc: 'Regular intercity cab from Faridabad to Noida and Greater Noida via Delhi Expressway. Reliable AC vehicles for daily commuters.',
      price: 'From Rs.800',
      icon: 'car',
    },
    {
      title: 'Corporate Cab — Faridabad',
      desc: 'Monthly corporate cab packages for Faridabad industrial and business clients. Dedicated drivers, flexible billing, priority support.',
      price: 'From Rs.40,000/month',
      icon: 'building',
    },
    {
      title: 'Railway Station Transfer',
      desc: 'Cab to Faridabad Railway Station, New Delhi Station and all Delhi NCR stations. Train tracking and luggage assistance.',
      price: 'Call for quote',
      icon: 'car',
    },
  ],
  pricing: [
    { vehicle: 'Sedan (Dzire / Aura / Xcent)', airport: 'Rs.1,800+', local8hr: 'Rs.1,600', outstationPerKm: 'Rs.12/km' },
    { vehicle: 'XL/SUV (XL6 / Ertiga)', airport: 'Rs.2,200+', local8hr: 'Rs.2,500', outstationPerKm: 'Rs.15/km' },
    { vehicle: 'Premium (Innova Crysta)', airport: 'Rs.3,000+', local8hr: 'Rs.3,000', outstationPerKm: 'Rs.22/km' },
  ],
  popularRoutes: [
    { to: 'Delhi Airport (IGI)', distance: '~40 km', time: '1.5 hrs', price: 'Rs.1,800', path: '' },
    { to: 'Mathura', distance: '~110 km', time: '2 hrs', price: 'Rs.3,000', path: '' },
    { to: 'Agra', distance: '~175 km', time: '3 hrs', price: 'Rs.4,500', path: '/noida-to-agra-taxi' },
    { to: 'Jaipur', distance: '~290 km', time: '5 hrs', price: 'Rs.6,500', path: '/noida-to-jaipur-taxi' },
    { to: 'Haridwar', distance: '~260 km', time: '5 hrs', price: 'Rs.6,000', path: '/noida-to-haridwar-taxi' },
    { to: 'Chandigarh', distance: '~290 km', time: '5 hrs', price: 'Rs.6,500', path: '/noida-to-chandigarh-taxi' },
  ],
  serviceAreas: [
    'Old Faridabad', 'New Industrial Township (NIT)', 'Sector 12', 'Sector 14',
    'Sector 15', 'Sector 16', 'Sector 21', 'Sector 28', 'Sector 37',
    'Ballabhgarh', 'Suraj Kund', 'Palwal', 'Green Field Colony',
    'NHPC Chowk', 'Mathura Road', 'Badkhal Lake', 'Faridabad Station Road'
  ],
  faqs: [
    {
      q: 'Is taxi available 24/7 in Faridabad?',
      a: 'Yes, Prabha Cab provides round-the-clock taxi service in Faridabad. Call or WhatsApp +91 9718437625 anytime for instant cab booking.',
    },
    {
      q: 'How much does a cab from Faridabad to Delhi Airport cost?',
      a: 'Faridabad to IGI Airport cab starts at Rs.1,800 for Sedan, Rs.2,200 for XL/SUV, Rs.3,000 for Innova Crysta. Exact fare depends on pickup point. Toll extra.',
    },
    {
      q: 'Can I book a cab from Faridabad to Mathura?',
      a: 'Yes, Prabha Cab provides cab service from Faridabad to Mathura-Vrindavan. The distance is about 110km and takes approximately 2 hours. Sedan one-way fare starts at Rs.3,000.',
    },
    {
      q: 'Do you serve Old Faridabad and NIT areas?',
      a: 'Yes, Prabha Cab covers all areas of Faridabad including Old Faridabad, NIT, Ballabhgarh, Palwal and all sectors. Call +91 9718437625 for a cab near you.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Taxi Service in Faridabad',
      description: 'Professional taxi and cab service in Faridabad and surrounding areas. Airport transfers, local rides, outstation trips available 24/7.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: { '@type': 'City', name: 'Faridabad' },
      serviceType: 'Taxi Service',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
        { '@type': 'ListItem', position: 3, name: 'Taxi Service in Faridabad', item: `${BASE}/taxi-service-faridabad` },
      ],
    },
  ],
};

export default function FaridabadTaxiPage() {
  return <CityServicePage config={config} />;
}
