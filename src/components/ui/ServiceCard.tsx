import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon, MessageCircle } from 'lucide-react';
import { generateWhatsAppUrl, generateServiceBookingMessage } from '../../utils/whatsappHelper';

interface ServiceCardProps {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  image: string;
  features?: string[];
  compact?: boolean;
}

export default function ServiceCard({
  id,
  icon: Icon,
  titleKey,
  descKey,
  image,
  features,
  compact = false,
}: ServiceCardProps) {
  const { t, i18n } = useTranslation();
  const serviceName = t(titleKey);

  const handleBookNow = () => {
    const message = generateServiceBookingMessage(serviceName, i18n.language);
    window.open(generateWhatsAppUrl(message), '_blank');
  };

  if (compact) {
    return (
      <Link to={`/services#${id}`}>
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-shadow cursor-pointer"
        >
          <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-3">
            <Icon className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="font-semibold text-dark-900 mb-1">{t(titleKey)}</h3>
          <p className="text-sm text-dark-500 line-clamp-2">{t(descKey)}</p>
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-card overflow-hidden h-full"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={t(titleKey)}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary-600" />
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-dark-900 mb-2">{t(titleKey)}</h3>
        <p className="text-sm text-dark-500 mb-4 line-clamp-2">{t(descKey)}</p>

        {features && features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 bg-dark-50 rounded-lg text-xs text-dark-600"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            onClick={handleBookNow}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500 text-white font-medium text-sm rounded-lg hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            {t('cta.bookNow')}
          </button>
          <Link
            to={`/services#${id}`}
            className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors"
          >
            {t('cta.learnMore')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
