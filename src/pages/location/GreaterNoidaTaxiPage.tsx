import CityServicePage, { CityPageConfig } from '../../components/templates/CityServicePage';

const BASE = 'https://prabhacab.in';

const config: CityPageConfig = {
  city: 'Greater Noida',
  cityFull: 'Greater Noida, Uttar Pradesh',
  metaTitle: 'Taxi Service in Greater Noida | 24/7 Cab Booking | Prabha Cab',
  metaDescription: 'Best taxi service in Greater Noida. Airport transfer from Rs.2200, local 8hr package from Rs.1600, outstation cabs from Rs.12/km. Call +91 9718437625 anytime.',
  keywords: 'taxi service in greater noida, cab service greater noida, taxi greater noida, cab booking greater noida, greater noida taxi, airport taxi greater noida, outstation cab greater noida, local taxi greater noida, 24 hour cab greater noida, noida extension taxi, prabha cab greater noida, best cab service greater noida',
  canonicalPath: '/taxi-service-greater-noida',
  heroImage: '/images/hero3.jpg',
  heroTagline: 'Safe, Reliable & Affordable Taxi Service — Available 24/7 Across Greater Noida',
  intro: 'Looking for a trusted cab service in Greater Noida? Prabha Cab has been serving Greater Noida, Noida Extension, Gaur City, Alpha, Beta, Gamma, Delta sectors and all surrounding areas since 2016. Whether you need an airport transfer, a local ride, or an outstation trip, we have the right vehicle at the right price.',
  whyChooseUs: 'Prabha Cab is the preferred taxi service for thousands of residents of Greater Noida. Our drivers know every sector, society, and landmark in Greater Noida — from Pari Chowk to Knowledge Park, from Nirala Greens to Gaur City. We offer fully air-conditioned, GPS-tracked vehicles with professional, verified drivers available 24 hours a day. With transparent pricing and no hidden charges, you can trust Prabha Cab for every journey in Greater Noida.',
  services: [
    {
      title: 'Airport Transfer — Greater Noida to IGI',
      desc: 'Reliable, on-time cab service from Greater Noida to Indira Gandhi International Airport (IGI), Delhi. We track your flight and wait if it is delayed. All terminals covered — T1, T2, T3.',
      price: 'Sedan Rs.2,200 | XL Rs.2,500 | Innova Rs.3,500',
      icon: 'plane',
    },
    {
      title: 'Local Cab Package',
      desc: 'Book a cab by the hour in Greater Noida. 8-hour / 80km and 12-hour / 120km packages for shopping, meetings, hospital visits, multiple stops within Greater Noida and Delhi NCR.',
      price: '8hr/80km from Rs.1,600 | 12hr/120km from Rs.2,500',
      icon: 'map',
    },
    {
      title: 'Outstation Taxi from Greater Noida',
      desc: 'One-way and round-trip outstation cab service from Greater Noida to 40+ destinations — Agra, Jaipur, Haridwar, Rishikesh, Nainital, Shimla, Chandigarh and more. Minimum 250km/day.',
      price: 'Sedan Rs.12/km | XL Rs.15/km | Innova Rs.22/km',
      icon: 'nav',
    },
    {
      title: 'Corporate Cab Service',
      desc: 'Monthly corporate cab packages for businesses in Greater Noida\'s Knowledge Park and Techzone. 2,500km and 240 hours per month with dedicated drivers and flexible billing.',
      price: 'Sedan Rs.40,000/month | Premium packages available',
      icon: 'building',
    },
    {
      title: 'Railway Station Transfer',
      desc: 'Pickup and drop to all major Delhi railway stations — New Delhi, Old Delhi, Hazrat Nizamuddin. Train tracking ensures we are there when your train arrives.',
      price: 'Call for quote',
      icon: 'car',
    },
    {
      title: 'Wedding & Event Transport',
      desc: 'Special cab arrangements for weddings and events in Greater Noida. Multiple vehicle bookings, decoration options, and special event rates for guests and families.',
      price: 'Custom quotes available',
      icon: 'car',
    },
  ],
  pricing: [
    { vehicle: 'Sedan (Dzire / Aura / Xcent)', airport: 'Rs.2,200', local8hr: 'Rs.1,600', outstationPerKm: 'Rs.12/km' },
    { vehicle: 'XL/SUV (XL6 / Ertiga)', airport: 'Rs.2,500', local8hr: 'Rs.2,500', outstationPerKm: 'Rs.15/km' },
    { vehicle: 'Premium (Innova Crysta)', airport: 'Rs.3,500', local8hr: 'Rs.3,000', outstationPerKm: 'Rs.22/km' },
  ],
  popularRoutes: [
    { to: 'Delhi Airport (IGI)', distance: '~55 km', time: '1.5-2 hrs', price: 'Rs.2,200', path: '/noida-to-delhi-airport-taxi' },
    { to: 'Agra', distance: '~220 km', time: '3.5-4 hrs', price: 'Rs.4,800', path: '/noida-to-agra-taxi' },
    { to: 'Jaipur', distance: '~270 km', time: '4.5-5 hrs', price: 'Rs.6,720', path: '/noida-to-jaipur-taxi' },
    { to: 'Haridwar', distance: '~220 km', time: '4-5 hrs', price: 'Rs.5,280', path: '/noida-to-haridwar-taxi' },
    { to: 'Rishikesh', distance: '~240 km', time: '4.5-5 hrs', price: 'Rs.5,760', path: '/noida-to-rishikesh-taxi' },
    { to: 'Nainital', distance: '~300 km', time: '6-7 hrs', price: 'Rs.7,200', path: '/noida-to-nainital-taxi' },
    { to: 'Mathura-Vrindavan', distance: '~150 km', time: '2.5-3 hrs', price: 'Rs.3,600', path: '' },
    { to: 'Chandigarh', distance: '~250 km', time: '4.5 hrs', price: 'Rs.6,000', path: '/noida-to-chandigarh-taxi' },
    { to: 'Mussoorie', distance: '~280 km', time: '5.5 hrs', price: 'Rs.6,720', path: '' },
  ],
  serviceAreas: [
    'Pari Chowk', 'Alpha 1 & 2', 'Beta 1 & 2', 'Gamma 1 & 2', 'Delta 1, 2 & 3',
    'Knowledge Park 1, 2, 3, 4 & 5', 'Sector 150', 'Gaur City', 'Nirala Greens',
    'Techzone', 'Ecotech 1, 2 & 3', 'Surajpur', 'Kasna', 'Dadri', 'Noida Extension',
    'Greater Noida West', 'Jaypee Greens', 'GNIDA Area', 'Phi 1 & 2', 'Omicron'
  ],
  faqs: [
    {
      q: 'Is taxi service available 24/7 in Greater Noida?',
      a: 'Yes, Prabha Cab offers round-the-clock taxi service in Greater Noida — 24 hours a day, 7 days a week, including holidays. Call or WhatsApp +91 9718437625 anytime for instant booking.',
    },
    {
      q: 'How much does a cab from Greater Noida to Delhi Airport cost?',
      a: 'The fare from Greater Noida to Delhi Airport (IGI) starts at Rs.2,200 for a Sedan, Rs.2,500 for an XL/SUV (Ertiga), and Rs.3,500 for a Premium Innova Crysta. Toll and parking charges are extra.',
    },
    {
      q: 'Which cab service is best in Greater Noida?',
      a: 'Prabha Cab is one of the most trusted and reviewed taxi services in Greater Noida, with a 4.8-star rating from 850+ customers. We have been operating since 2016 with professional drivers, well-maintained vehicles, and transparent pricing.',
    },
    {
      q: 'Can I book a cab from Noida Extension?',
      a: 'Yes, Prabha Cab provides cab service from Noida Extension (Greater Noida West) including all major societies like Nirala Greens, Gaur City, and surrounding areas. Call +91 9718437625 for pickup.',
    },
    {
      q: 'What is the local cab package rate in Greater Noida?',
      a: 'Local cab packages in Greater Noida: Sedan 8hr/80km at Rs.1,600, Sedan 12hr/120km at Rs.2,500. XL/SUV 8hr at Rs.2,500. Innova Crysta 8hr at Rs.3,000. Extra km at Rs.12-22/km.',
    },
    {
      q: 'Do you provide outstation taxi from Greater Noida?',
      a: 'Yes, Prabha Cab provides outstation cab service from Greater Noida to over 40 destinations across North India. Popular routes include Greater Noida to Agra, Jaipur, Haridwar, Rishikesh, Nainital, Shimla, Vaishno Devi and more.',
    },
    {
      q: 'How do I book a cab in Greater Noida?',
      a: 'You can book a Prabha Cab in Greater Noida by calling +91 9718437625, sending a WhatsApp message to the same number, or using the online booking form at prabhacab.in/booking. Instant confirmation is provided.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Taxi Service in Greater Noida',
      description: 'Professional taxi and cab service in Greater Noida, Noida Extension and surrounding areas. Airport transfers, local rides, outstation trips available 24/7.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: { '@type': 'City', name: 'Greater Noida' },
      serviceType: 'Taxi Service',
      offers: [
        { '@type': 'Offer', name: 'Airport Transfer from Greater Noida', price: '2200', priceCurrency: 'INR' },
        { '@type': 'Offer', name: 'Local 8hr Package', price: '1600', priceCurrency: 'INR' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Is taxi service available 24/7 in Greater Noida?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Prabha Cab offers round-the-clock 24/7 taxi service in Greater Noida. Call +91 9718437625 anytime.' } },
        { '@type': 'Question', name: 'How much does a cab from Greater Noida to Delhi Airport cost?', acceptedAnswer: { '@type': 'Answer', text: 'Greater Noida to Delhi Airport: Sedan Rs.2,200, XL/SUV Rs.2,500, Innova Crysta Rs.3,500. Toll extra.' } },
        { '@type': 'Question', name: 'Which cab service is best in Greater Noida?', acceptedAnswer: { '@type': 'Answer', text: 'Prabha Cab is one of the best taxi services in Greater Noida with 4.8 rating, serving since 2016.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
        { '@type': 'ListItem', position: 3, name: 'Taxi Service in Greater Noida', item: `${BASE}/taxi-service-greater-noida` },
      ],
    },
  ],
};

export default function GreaterNoidaTaxiPage() {
  return <CityServicePage config={config} />;
}
