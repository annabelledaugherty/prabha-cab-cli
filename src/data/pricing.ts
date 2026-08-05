export interface PricingPackage {
  id: string;
  category: 'airport' | 'local' | 'outstation' | 'monthly';
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  rates: {
    sedan: number;
    xl: number;
    premium: number;
  };
  unit?: string;
  unitHi?: string;
  inclusions: string[];
  inclusionsHi: string[];
}

export const airportPricing: PricingPackage = {
  id: 'airport',
  category: 'airport',
  title: 'Airport Transfer',
  titleHi: 'एयरपोर्ट ट्रांसफर',
  description: 'To/From Greater Noida to IGI Airport Delhi',
  descriptionHi: 'ग्रेटर नोएडा से IGI एयरपोर्ट दिल्ली (आना/जाना)',
  rates: {
    sedan: 2200,
    xl: 2500,
    premium: 3500,
  },
  inclusions: ['Base fare only', 'Toll & parking extra', 'Flight tracking', 'Meet & greet'],
  inclusionsHi: ['केवल बेस किराया', 'टोल और पार्किंग अतिरिक्त', 'फ्लाइट ट्रैकिंग', 'मिलना और अभिवादन'],
};

export const localPackages: PricingPackage[] = [
  {
    id: 'local-8hr',
    category: 'local',
    title: '80 km / 8 hours',
    titleHi: '80 किमी / 8 घंटे',
    description: 'Perfect for city travel and multiple stops',
    descriptionHi: 'शहर की यात्रा और कई स्टॉप के लिए उत्तम',
    rates: {
      sedan: 1600,
      xl: 2500,
      premium: 3000,
    },
    inclusions: ['80 km included', '8 hours duration', 'Multiple stops', 'AC vehicle'],
    inclusionsHi: ['80 किमी शामिल', '8 घंटे अवधि', 'एकाधिक स्टॉप', 'AC वाहन'],
  },
  {
    id: 'local-12hr',
    category: 'local',
    title: '120 km / 12 hours',
    titleHi: '120 किमी / 12 घंटे',
    description: 'Extended coverage for full day travel',
    descriptionHi: 'पूरे दिन की यात्रा के लिए विस्तारित कवरेज',
    rates: {
      sedan: 2500,
      xl: 3500,
      premium: 4500,
    },
    inclusions: ['120 km included', '12 hours duration', 'Full day coverage', 'AC vehicle'],
    inclusionsHi: ['120 किमी शामिल', '12 घंटे अवधि', 'पूरे दिन की कवरेज', 'AC वाहन'],
  },
];

export const outstationRates = {
  title: 'Outstation Rates',
  titleHi: 'आउटस्टेशन दरें',
  description: 'Minimum billing: 250 km per day',
  descriptionHi: 'न्यूनतम बिलिंग: 250 किमी प्रति दिन',
  rates: {
    sedan: 12,
    xl: 15,
    premium: 22,
  },
  unit: 'per km',
  unitHi: 'प्रति किमी',
};

export const monthlyPackages: PricingPackage = {
  id: 'monthly',
  category: 'monthly',
  title: 'Monthly Package (24 days)',
  titleHi: 'मासिक पैकेज (24 दिन)',
  description: '2,500 km | 240 hours included',
  descriptionHi: '2,500 किमी | 240 घंटे शामिल',
  rates: {
    sedan: 40000,
    xl: 75000,
    premium: 125000,
  },
  inclusions: ['2,500 km included', '240 hours included', '24 working days', 'Dedicated driver available'],
  inclusionsHi: ['2,500 किमी शामिल', '240 घंटे शामिल', '24 कार्य दिवस', 'समर्पित ड्राइवर उपलब्ध'],
};

export const extraCharges = [
  {
    title: 'Extra Hour',
    titleHi: 'अतिरिक्त घंटा',
    amount: 150,
    unit: '/hour',
    unitHi: '/घंटा',
  },
  {
    title: 'Extra km (Sedan)',
    titleHi: 'अतिरिक्त किमी (सेडान)',
    amount: 12,
    unit: '/km',
    unitHi: '/किमी',
  },
  {
    title: 'Extra km (XL)',
    titleHi: 'अतिरिक्त किमी (XL)',
    amount: 15,
    unit: '/km',
    unitHi: '/किमी',
  },
  {
    title: 'Extra km (Premium)',
    titleHi: 'अतिरिक्त किमी (प्रीमियम)',
    amount: 22,
    unit: '/km',
    unitHi: '/किमी',
  },
  {
    title: 'Night Allowance',
    titleHi: 'रात भत्ता',
    amount: 400,
    unit: '(after 10 PM)',
    unitHi: '(रात 10 बजे के बाद)',
  },
];
