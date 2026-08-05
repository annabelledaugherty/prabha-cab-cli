import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, CalendarCheck, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BottomNav() {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: t('nav.home') },
    { path: '/services', icon: Briefcase, label: t('nav.services') },
    { path: '/booking', icon: CalendarCheck, label: t('nav.book') },
    { path: '/routes', icon: MapPin, label: t('nav.routes') },
    { path: '/contact', icon: Phone, label: t('nav.contact') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-dark-100 shadow-bottom-nav safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex flex-col items-center justify-center w-full h-full"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center justify-center ${
                  isActive ? 'text-primary-600' : 'text-dark-400'
                }`}
              >
                <div className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="bottomNavIndicator"
                      className="absolute -inset-2 bg-primary-50 rounded-xl"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className={`relative w-5 h-5 ${isActive ? 'text-primary-600' : ''}`} />
                </div>
                <span className={`text-[10px] mt-1 font-medium ${isActive ? 'text-primary-600' : ''}`}>
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
