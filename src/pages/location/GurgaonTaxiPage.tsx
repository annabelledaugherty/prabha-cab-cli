import CityServicePage, { CityPageConfig } from '../../components/templates/CityServicePage';

const BASE = 'https://prabhacab.in';

const config: CityPageConfig = {
  city: 'Gurgaon',
  cityFull: 'Gurgaon (Gurugram), Haryana',
  metaTitle: 'Taxi Service in Gurgaon | Cab Booking 24/7 | Prabha Cab',
  metaDescription: 'Reliable cab service in Gurgaon (Gurugram). Airport transfer, local rides, outstation trips. Sedan from Rs.12/km. Call +91 9718437625 anytime.',
  keywords: 'taxi service in gurgaon, cab service gurgaon, taxi gurgaon, gurugram cab, gurgaon cab booking, airport taxi gurgaon, outstation cab gurgaon, local taxi gurgaon, prabha cab gurgaon, 24 hour cab gurgaon, cyber city taxi, DLF cab gurgaon',
  canonicalPath: '/taxi-service-gurgaon',
  heroImage: '/images/hero3.jpg',
  heroTagline: 'Professional Cab Service in Gurgaon (Gurugram) — Corporate, Airport & Outstation Available 24/7',
  intro: 'Prabha Cab provides reliable taxi service in Gurgaon (Gurugram) covering Cyber City, DLF areas, Sohna Road, Golf Course Road, Manesar, IMT, and all major residential sectors. From quick local rides to airport transfers and outstation trips — we deliver consistent, professional service at competitive rates.',
  whyChooseUs: 'Gurgaon is a major corporate hub and we understand the need for punctual, reliable transportation. Prabha Cab offers dedicated corporate cab packages for businesses in Gurgaon\'s IT sector, as well as personal cab services for daily commuters. Our AC vehicles with GPS tracking and professional drivers make every ride safe and comfortable.',
  services: [
    {
      title: 'Gurgaon to Delhi Airport Taxi',
      desc: 'Airport cab from Gurgaon to IGI Airport Delhi. Short drive, reliable service. All terminals covered with flight tracking and meet & greet.',
      price: 'Sedan Rs.1,500+ | XL Rs.1,800+ | Innova Rs.2,500+',
      icon: 'plane',
    },
    {
      title: 'Local Cab — Gurgaon',
      desc: '8hr/80km and 12hr/120km local cab packages for Gurgaon. Corporate meetings, shopping, hospital visits across Gurgaon and Delhi NCR.',
      price: '8hr/80km from Rs.1,600 | 12hr/120km from Rs.2,500',
      icon: 'map',
    },
    {
      title: 'Outstation Cab from Gurgaon',
      desc: 'One-way and round-trip taxi from Gurgaon to Agra, Jaipur, Haridwar, Chandigarh, Shimla, Manali and 40+ destinations. Experienced outstation drivers.',
      price: 'Sedan Rs.12/km | XL Rs.15/km | Innova Rs.22/km',
      icon: 'nav',
    },
    {
      title: 'Corporate Cab Service — Gurgaon',
      desc: 'Monthly corporate cab solutions for IT companies in Cyber City, DLF, Udyog Vihar. Dedicated drivers, 2,500km/month packages, flexible invoicing.',
      price: 'From Rs.40,000/month',
      icon: 'building',
    },
    {
      title: 'Gurgaon to Noida / Greater Noida',
      desc: 'Intercity cab from Gurgaon to Noida, Greater Noida via Delhi Expressway or NH-48. Comfortable AC vehicles, professional drivers.',
      price: 'From Rs.1,200',
      icon: 'car',
    },
    {
      title: 'Railway Station Transfer',
      desc: 'Cab from Gurgaon to Gurugram Railway Station, New Delhi Station. Train tracking, luggage assistance, 24/7 availability.',
      price: 'Call for quote',
      icon: 'car',
    },
  ],
  pricing: [
    { vehicle: 'Sedan (Dzire / Aura / Xcent)', airport: 'Rs.1,500+', local8hr: 'Rs.1,600', outstationPerKm: 'Rs.12/km' },
    { vehicle: 'XL/SUV (XL6 / Ertiga)', airport: 'Rs.1,800+', local8hr: 'Rs.2,500', outstationPerKm: 'Rs.15/km' },
    { vehicle: 'Premium (Innova Crysta)', airport: 'Rs.2,500+', local8hr: 'Rs.3,000', outstationPerKm: 'Rs.22/km' },
  ],
  popularRoutes: [
    { to: 'Delhi Airport (IGI)', distance: '~12 km', time: '25-40 min', price: 'Rs.1,500', path: '' },
    { to: 'Jaipur', distance: '~270 km', time: '4.5 hrs', price: 'Rs.6,500', path: '/noida-to-jaipur-taxi' },
    { to: 'Agra', distance: '~215 km', time: '3.5 hrs', price: 'Rs.5,200', path: '/noida-to-agra-taxi' },
    { to: 'Chandigarh', distance: '~250 km', time: '4 hrs', price: 'Rs.6,000', path: '/noida-to-chandigarh-taxi' },
    { to: 'Shimla', distance: '~360 km', time: '7 hrs', price: 'Rs.8,500', path: '' },
    { to: 'Haridwar', distance: '~250 km', time: '4.5 hrs', price: 'Rs.6,000', path: '/noida-to-haridwar-taxi' },
    { to: 'Rishikesh', distance: '~270 km', time: '5 hrs', price: 'Rs.6,500', path: '/noida-to-rishikesh-taxi' },
  ],
  serviceAreas: [
    'Cyber City', 'DLF Phase 1-5', 'Golf Course Road', 'Sohna Road',
    'Sector 14', 'Sector 15', 'Sector 56', 'Sector 57', 'Udyog Vihar',
    'Manesar', 'IMT Manesar', 'NH-48', 'MG Road', 'HUDA City Centre',
    'New Colony', 'Civil Lines', 'South City 1 & 2', 'Ardee City'
  ],
  faqs: [
    {
      q: 'Is taxi service available in Cyber City, Gurgaon?',
      a: 'Yes, Prabha Cab serves Cyber City, DLF areas, and all parts of Gurgaon 24/7. Call +91 9718437625 for instant cab booking.',
    },
    {
      q: 'How long does it take to get to Delhi Airport from Gurgaon?',
      a: 'Gurgaon is very close to IGI Airport — typically 20-40 minutes depending on traffic. We monitor traffic and suggest the best departure time to ensure you reach on time.',
    },
    {
      q: 'Do you provide corporate cab service in Gurgaon?',
      a: 'Yes, Prabha Cab offers dedicated corporate cab solutions for businesses in Gurgaon. Monthly packages with 2,500km/240hrs, dedicated drivers, and flexible billing.',
    },
    {
      q: 'Can I book a Gurgaon to Jaipur cab?',
      a: 'Yes, Prabha Cab provides cab from Gurgaon to Jaipur. Jaipur is approximately 270km from Gurgaon (4.5 hours). One-way Sedan fare starts at Rs.6,500.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Taxi Service in Gurgaon',
      description: 'Professional taxi and cab service in Gurgaon (Gurugram). Airport transfers, corporate cabs, local rides available 24/7.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: { '@type': 'City', name: 'Gurgaon' },
      serviceType: 'Taxi Service',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
        { '@type': 'ListItem', position: 3, name: 'Taxi Service in Gurgaon', item: `${BASE}/taxi-service-gurgaon` },
      ],
    },
  ],
};

export default function GurgaonTaxiPage() {
  return <CityServicePage config={config} />;
}
