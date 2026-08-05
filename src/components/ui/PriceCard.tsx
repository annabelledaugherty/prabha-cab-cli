import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PriceCardProps {
  title: string;
  description?: string;
  price: number;
  unit?: string;
  features: string[];
  highlighted?: boolean;
  vehicleType?: 'sedan' | 'xl' | 'premium';
}

export default function PriceCard({
  title,
  description,
  price,
  unit = '',
  features,
  highlighted = false,
  vehicleType,
}: PriceCardProps) {
  const { t } = useTranslation();

  const vehicleLabels = {
    sedan: 'Sedan (Dzire)',
    xl: 'XL (Ertiga)',
    premium: 'Premium (Innova)',
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`rounded-2xl overflow-hidden ${
        highlighted
          ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg'
          : 'bg-white shadow-card'
      }`}
    >
      {highlighted && (
        <div className="bg-primary-400/30 text-center py-2 text-sm font-medium">
          Most Popular
        </div>
      )}

      <div className="p-6">
        {vehicleType && (
          <span className={`text-sm font-medium ${highlighted ? 'text-primary-100' : 'text-primary-600'}`}>
            {vehicleLabels[vehicleType]}
          </span>
        )}
        <h3 className={`text-xl font-bold mt-1 ${highlighted ? 'text-white' : 'text-dark-900'}`}>
          {title}
        </h3>
        {description && (
          <p className={`text-sm mt-1 ${highlighted ? 'text-white/80' : 'text-dark-500'}`}>
            {description}
          </p>
        )}

        <div className="mt-4 mb-6">
          <span className="text-4xl font-bold">₹{price.toLocaleString()}</span>
          {unit && <span className={`text-sm ${highlighted ? 'text-white/80' : 'text-dark-500'}`}>{unit}</span>}
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                highlighted ? 'bg-white/20' : 'bg-primary-100'
              }`}>
                <Check className={`w-3 h-3 ${highlighted ? 'text-white' : 'text-primary-600'}`} />
              </div>
              <span className={`text-sm ${highlighted ? 'text-white/90' : 'text-dark-600'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Link
          to="/booking"
          className={`block w-full py-3 rounded-xl font-semibold text-center transition-colors ${
            highlighted
              ? 'bg-white text-primary-600 hover:bg-primary-50'
              : 'bg-primary-500 text-white hover:bg-primary-600'
          }`}
        >
          {t('cta.bookNow')}
        </Link>
      </div>
    </motion.div>
  );
}
