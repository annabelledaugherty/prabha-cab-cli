import { useTranslation } from 'react-i18next';
import { Users, Briefcase, Snowflake, Music, BatteryCharging, Check, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Vehicle } from '../../data/fleet';
import { generateWhatsAppUrl, generateVehicleBookingMessage } from '../../utils/whatsappHelper';

interface VehicleCardProps {
  vehicle: Vehicle;
  showPricing?: boolean;
  onSelect?: () => void;
  selected?: boolean;
}

export default function VehicleCard({ vehicle, showPricing = true, onSelect, selected }: VehicleCardProps) {
  const { t, i18n } = useTranslation();

  const handleBookNow = () => {
    const message = generateVehicleBookingMessage(vehicle.name, i18n.language);
    window.open(generateWhatsAppUrl(message), '_blank');
  };

  const featureIcons: Record<string, typeof Snowflake> = {
    'Air Conditioned': Snowflake,
    'Music System': Music,
    'Phone Charging': BatteryCharging,
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={onSelect ? { scale: 0.98 } : undefined}
      onClick={onSelect}
      className={`bg-white rounded-2xl shadow-card overflow-hidden ${
        onSelect ? 'cursor-pointer' : ''
      } ${selected ? 'ring-2 ring-primary-500' : ''}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
          {vehicle.name}
        </div>
        {selected && (
          <div className="absolute top-3 right-3 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-dark-900 mb-1">{vehicle.name}</h3>
        <p className="text-sm text-dark-500 mb-3">{vehicle.models.join(', ')}</p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-dark-600">
            <Users className="w-4 h-4 text-primary-600" />
            <span className="text-sm">{vehicle.capacity} {t('common.passengers')}</span>
          </div>
          <div className="flex items-center gap-1.5 text-dark-600">
            <Briefcase className="w-4 h-4 text-primary-600" />
            <span className="text-sm">{vehicle.luggage} {t('common.luggage')}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {vehicle.features.slice(0, 4).map((feature) => {
            const Icon = featureIcons[feature] || Check;
            return (
              <span
                key={feature}
                className="flex items-center gap-1 px-2 py-1 bg-dark-50 rounded-lg text-xs text-dark-600"
              >
                <Icon className="w-3 h-3 text-primary-600" />
                {feature}
              </span>
            );
          })}
        </div>

        {showPricing && (
          <div className="pt-3 border-t border-dark-100">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-sm text-dark-500">{t('pricing.from')}</span>
              <div className="text-right">
                <span className="text-xl font-bold text-primary-600">₹{vehicle.pricePerKm}</span>
                <span className="text-sm text-dark-500">{t('common.perKm')}</span>
              </div>
            </div>
            {!onSelect && (
              <button
                onClick={handleBookNow}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white font-medium text-sm rounded-xl hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {t('cta.bookNow')}
              </button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
