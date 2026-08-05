import { Plane, MapPin, Navigation, Clock, Building2, Heart, Train, Car, Landmark } from 'lucide-react';

export const services = [
  {
    id: 'airport',
    icon: Plane,
    titleKey: 'services.airportTitle',
    descKey: 'services.airportDesc',
    image: '/images/services/airport-transfer.jpg',
    features: ['24/7 availability', 'All terminals covered', 'Flight tracking', 'Meet & greet'],
  },
  {
    id: 'local',
    icon: MapPin,
    titleKey: 'services.localTitle',
    descKey: 'services.localDesc',
    image: '/images/services/local-packages1.jpg',
    features: ['80km/8hr package', '120km/12hr package', 'Flexible hours', 'City coverage'],
  },
  {
    id: 'outstation',
    icon: Navigation,
    titleKey: 'services.outstationTitle',
    descKey: 'services.outstationDesc',
    image: '/images/services/outstation-tips.jpg',
    features: ['One-way trips', 'Round trips', 'Pan-India coverage', 'Experienced drivers'],
  },
  {
    id: 'hourly',
    icon: Clock,
    titleKey: 'services.hourlyTitle',
    descKey: 'services.hourlyDesc',
    image: '/images/services/hourly-rental.jpg',
    features: ['Pay per hour', 'Flexible booking', 'Multiple stops', 'City travel'],
  },
  {
    id: 'corporate',
    icon: Building2,
    titleKey: 'services.corporateTitle',
    descKey: 'services.corporateDesc',
    image: '/images/services/coroporate-services.jpg',
    features: ['Monthly packages', 'Dedicated drivers', 'Flexible billing', 'Priority booking'],
  },
  {
    id: 'wedding',
    icon: Heart,
    titleKey: 'services.weddingTitle',
    descKey: 'services.weddingDesc',
    image: '/images/services/wedding-and-events.webp',
    features: ['Multiple vehicles', 'Event coordination', 'Decoration options', 'Special rates'],
  },
  {
    id: 'railway',
    icon: Train,
    titleKey: 'services.railwayTitle',
    descKey: 'services.railwayDesc',
    image: '/images/services/railway-station.avif',
    features: ['All Delhi stations', '24/7 service', 'Train tracking', 'Luggage assistance'],
  },
  {
    id: 'daily',
    icon: Car,
    titleKey: 'services.localTitle',
    descKey: 'services.localDesc',
    image: '/images/services/hourly-rental.jpg',
    features: ['Daily rentals', 'Full day coverage', 'Multiple stops', 'Flexible timing'],
  },
  {
    id: 'delhi-darshan',
    icon: Landmark,
    titleKey: 'services.delhiDarshanTitle',
    descKey: 'services.delhiDarshanDesc',
    image: '/images/services/dilli-darshan-services.webp',
    features: ['12 hours / 120 km', 'All major attractions', 'Expert drivers', 'AC vehicles'],
  },
];

export const serviceCategories = [
  { id: 'all', label: 'All Services' },
  { id: 'transfer', label: 'Transfers' },
  { id: 'rental', label: 'Rentals' },
  { id: 'business', label: 'Business' },
];
