import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  const toggleLanguage = () => {
    const newLang = isHindi ? 'en' : 'hi';
    i18n.changeLanguage(newLang);
    localStorage.setItem('prabha-cab-lang', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center h-8 w-16 bg-dark-100 rounded-full p-1 cursor-pointer"
      aria-label="Toggle language"
    >
      <motion.div
        className="absolute w-7 h-6 bg-primary-500 rounded-full shadow-md"
        animate={{ x: isHindi ? 30 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      <span
        className={`relative z-10 w-7 text-center text-xs font-bold transition-colors ${
          !isHindi ? 'text-white' : 'text-dark-500'
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 w-7 text-center text-xs font-bold transition-colors ${
          isHindi ? 'text-white' : 'text-dark-500'
        }`}
      >
        HI
      </span>
    </button>
  );
}
