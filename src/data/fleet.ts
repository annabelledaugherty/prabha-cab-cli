export interface Vehicle {
  id: string;
  category: 'sedan' | 'xl' | 'premium';
  name: string;
  models: string[];
  capacity: number;
  luggage: number;
  image: string;
  features: string[];
  pricePerKm: number;
  airportPrice: number;
  localPrice8hr: number;
  localPrice12hr: number;
  monthlyPrice: number;
}

export const vehicles: Vehicle[] = [
  {
    id: 'sedan',
    category: 'sedan',
    name: 'Sedan',
    models: ['Maruti Dzire', 'Hyundai Aura', 'Hyundai Xcent'],
    capacity: 4,
    luggage: 2,
    image: '/images/fleet/sedan1.png',
    features: ['Air Conditioned', 'Music System', 'Phone Charging', 'Comfortable Seating'],
    pricePerKm: 12,
    airportPrice: 2200,
    localPrice8hr: 1600,
    localPrice12hr: 2500,
    monthlyPrice: 40000,
  },
  {
    id: 'xl',
    category: 'xl',
    name: 'XL / SUV',
    models: ['Maruti XL6', 'Maruti Ertiga'],
    capacity: 6,
    luggage: 3,
    image: '/images/fleet/xl.avif',
    features: ['Air Conditioned', 'Music System', 'Extra Legroom', 'Spacious Boot', 'Phone Charging'],
    pricePerKm: 15,
    airportPrice: 2500,
    localPrice8hr: 2500,
    localPrice12hr: 3500,
    monthlyPrice: 75000,
  },
  {
    id: 'premium',
    category: 'premium',
    name: 'Premium SUV',
    models: ['Toyota Innova Crysta'],
    capacity: 7,
    luggage: 4,
    image: '/images/fleet/premium-suv.avif',
    features: ['Premium Interior', 'Captain Seats', 'Climate Control', 'Large Boot Space', 'USB Charging', 'Music System'],
    pricePerKm: 22,
    airportPrice: 3500,
    localPrice8hr: 3000,
    localPrice12hr: 4500,
    monthlyPrice: 125000,
  },
];

export const vehicleFeatures = [
  { icon: 'Snowflake', label: 'AC' },
  { icon: 'Music', label: 'Music' },
  { icon: 'BatteryCharging', label: 'Charging' },
  { icon: 'Briefcase', label: 'Luggage' },
];
