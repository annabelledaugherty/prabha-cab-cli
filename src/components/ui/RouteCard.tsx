import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Route } from '../../data/routes';

interface RouteCardProps {
  route: Route;
  compact?: boolean;
}

export default function RouteCard({ route, compact = false }: RouteCardProps) {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  if (compact) {
    return (
      <Link to={`/booking?to=${route.name}`}>
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative h-32 rounded-xl overflow-hidden group cursor-pointer"
        >
          <img
            src={route.image}
            alt={isHindi ? route.nameHi : route.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-white font-semibold text-sm">{isHindi ? route.nameHi : route.name}</h3>
            <p className="text-white/80 text-xs">
              {route.category === 'delhi'
                ? (isHindi ? 'दिल्ली दर्शन पैकेज में शामिल' : 'Included in Dilli Darshan')
                : `${t('routes.startingFrom')} ₹${route.startingPrice}`}
            </p>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-card overflow-hidden"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={route.image}
          alt={isHindi ? route.nameHi : route.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
          {isHindi ? route.stateHi : route.state}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-dark-900 mb-2">
          {isHindi ? route.nameHi : route.name}
        </h3>

        <div className="flex items-center gap-4 mb-3 text-sm text-dark-500">
          <div className="flex items-center gap-1">
            <Navigation className="w-4 h-4 text-primary-600" />
            {route.distance}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-primary-600" />
            {route.duration}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {(isHindi ? route.highlightsHi : route.highlights).map((highlight) => (
            <span
              key={highlight}
              className="flex items-center gap-1 px-2 py-0.5 bg-primary-50 rounded text-xs text-primary-700"
            >
              <MapPin className="w-3 h-3" />
              {highlight}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-dark-100">
          <div>
            {route.category === 'delhi' ? (
              <>
                <span className="text-xs text-dark-500">
                  {isHindi ? 'दिल्ली दर्शन में शामिल' : 'Included in Dilli Darshan'}
                </span>
                <p className="text-sm font-bold text-primary-600">
                  {isHindi ? 'पैकेज ₹2,500 से' : 'Package from ₹2,500'}
                </p>
              </>
            ) : (
              <>
                <span className="text-xs text-dark-500">{t('routes.startingFrom')}</span>
                <p className="text-lg font-bold text-primary-600">₹{route.startingPrice}</p>
              </>
            )}
          </div>
          <Link
            to={`/booking?to=${route.name}`}
            className="px-4 py-2 bg-primary-500 text-white text-sm font-medium rounded-xl hover:bg-primary-600 transition-colors"
          >
            {t('routes.bookNow')}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
