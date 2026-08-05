import CityServicePage, { CityPageConfig } from '../../components/templates/CityServicePage';

const BASE = 'https://prabhacab.in';

const config: CityPageConfig = {
  city: 'Ghaziabad',
  cityFull: 'Ghaziabad, Uttar Pradesh',
  metaTitle: 'Taxi Service in Ghaziabad | Cab Booking 24/7 | Prabha Cab',
  metaDescription: 'Reliable taxi service in Ghaziabad. Airport cab, local packages, outstation trips. Sedan from Rs.12/km. Call +91 9718437625 for instant booking.',
  keywords: 'taxi service in ghaziabad, cab service ghaziabad, taxi ghaziabad, ghaziabad cab, airport taxi ghaziabad, outstation cab ghaziabad, local taxi ghaziabad, 24 hour cab ghaziabad, indirapuram taxi, vaishali cab, raj nagar extension taxi, prabha cab ghaziabad',
  canonicalPath: '/taxi-service-ghaziabad',
  heroImage: '/images/hero3.jpg',
  heroTagline: 'Safe & Reliable Taxi Service in Ghaziabad — Serving Indirapuram, Vaishali, Raj Nagar & Beyond',
  intro: 'Prabha Cab serves all areas of Ghaziabad including Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension, Kaushambi, Mohan Nagar, and surrounding areas. Whether you need a cab to Delhi Airport, a ride to Noida, or an outstation trip to Agra or Haridwar, we have fast, professional service at affordable rates.',
  whyChooseUs: 'Ghaziabad residents trust Prabha Cab for its quick response time, professional drivers, and reliable service. Our knowledge of Ghaziabad\'s roads, the NH-24 corridor, and all local landmarks ensures timely pickups and smooth rides every time. With 24/7 availability and transparent pricing, we are the go-to cab service for Ghaziabad.',
  services: [
    {
      title: 'Ghaziabad to Delhi Airport Taxi',
      desc: 'Reliable airport cab from Ghaziabad to IGI Airport Delhi. All terminals covered. Flight tracking, meet & greet service. Toll and parking charged separately.',
      price: 'Sedan Rs.1,800+ | XL Rs.2,200+ | Innova Rs.3,000+',
      icon: 'plane',
    },
    {
      title: 'Local Cab Package — Ghaziabad',
      desc: 'Hourly cab in Ghaziabad for shopping, hospital visits, office commute. 8hr/80km and 12hr/120km packages for full-day use within Ghaziabad and Delhi NCR.',
      price: '8hr/80km from Rs.1,600 | 12hr/120km from Rs.2,500',
      icon: 'map',
    },
    {
      title: 'Outstation Taxi from Ghaziabad',
      desc: 'One-way and round-trip taxi from Ghaziabad to Agra, Jaipur, Haridwar, Rishikesh, Mathura, Vrindavan, Dehradun, Nainital and more.',
      price: 'Sedan Rs.12/km | XL Rs.15/km | Innova Rs.22/km',
      icon: 'nav',
    },
    {
      title: 'Ghaziabad to Noida / Greater Noida',
      desc: 'Regular cab service from Ghaziabad to Noida and Greater Noida for commuters and travellers via NH-24 and DND Expressway.',
      price: 'From Rs.500',
      icon: 'car',
    },
    {
      title: 'Corporate Cab — Ghaziabad',
      desc: 'Monthly corporate packages for Ghaziabad businesses and IT professionals. Dedicated drivers, flexible billing, priority support.',
      price: 'From Rs.40,000/month',
      icon: 'building',
    },
    {
      title: 'Railway Station Transfer',
      desc: 'Cab to Ghaziabad Railway Station, New Delhi, Old Delhi and Hazrat Nizamuddin stations. Train tracking ensures timely arrival.',
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
    { to: 'Delhi Airport (IGI)', distance: '~40 km', time: '1.5 hrs', price: 'Rs.1,800', path: '/noida-to-delhi-airport-taxi' },
    { to: 'Agra', distance: '~185 km', time: '3 hrs', price: 'Rs.4,500', path: '/noida-to-agra-taxi' },
    { to: 'Jaipur', distance: '~265 km', time: '4.5 hrs', price: 'Rs.6,500', path: '/noida-to-jaipur-taxi' },
    { to: 'Haridwar', distance: '~195 km', time: '3.5 hrs', price: 'Rs.5,000', path: '/noida-to-haridwar-taxi' },
    { to: 'Rishikesh', distance: '~215 km', time: '4 hrs', price: 'Rs.5,500', path: '/noida-to-rishikesh-taxi' },
    { to: 'Mathura', distance: '~135 km', time: '2.5 hrs', price: 'Rs.3,500', path: '' },
    { to: 'Dehradun', distance: '~275 km', time: '5 hrs', price: 'Rs.6,500', path: '' },
  ],
  serviceAreas: [
    'Indirapuram', 'Vaishali', 'Vasundhara', 'Raj Nagar Extension',
    'Kaushambi', 'Mohan Nagar', 'Lal Kuan', 'Vijay Nagar',
    'Sahibabad', 'Crossings Republik', 'Siddharth Vihar',
    'Govindpuram', 'Pratap Vihar', 'Dasna', 'Hapur Road'
  ],
  faqs: [
    {
      q: 'Is taxi service available in Indirapuram, Ghaziabad?',
      a: 'Yes, Prabha Cab provides taxi service in Indirapuram, Vaishali, Vasundhara and all areas of Ghaziabad. Call +91 9718437625 for quick cab booking.',
    },
    {
      q: 'How much does a cab from Ghaziabad to Delhi Airport cost?',
      a: 'Ghaziabad to IGI Airport cab fare starts at Rs.1,800 for Sedan, Rs.2,200 for XL/SUV. Exact fare depends on your pickup point. Toll and parking extra.',
    },
    {
      q: 'Can I book a one-way cab from Ghaziabad to Noida?',
      a: 'Yes, Prabha Cab provides one-way cab from Ghaziabad to Noida and Greater Noida. Starting from Rs.500 depending on exact pickup and drop locations.',
    },
    {
      q: 'Do you provide 24/7 cab service in Ghaziabad?',
      a: 'Yes, Prabha Cab is available 24 hours a day, 7 days a week in Ghaziabad. Call or WhatsApp +91 9718437625 anytime for instant booking.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Taxi Service in Ghaziabad',
      description: 'Professional taxi and cab service in Ghaziabad, Indirapuram, Vaishali and surrounding areas.',
      provider: { '@id': `${BASE}/#localbusiness` },
      areaServed: { '@type': 'City', name: 'Ghaziabad' },
      serviceType: 'Taxi Service',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
        { '@type': 'ListItem', position: 3, name: 'Taxi Service in Ghaziabad', item: `${BASE}/taxi-service-ghaziabad` },
      ],
    },
  ],
};

export default function GhaziabadTaxiPage() {
  return <CityServicePage config={config} />;
}
