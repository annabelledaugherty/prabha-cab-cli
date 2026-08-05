import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { callPhone } from '../../utils/whatsappHelper';

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/fleet', label: t('nav.fleet') },
    { path: '/pricing', label: t('nav.pricing') },
    { path: '/booking', label: t('nav.book') },
  ];

  const serviceLinks = [
    { path: '/services#airport', label: t('services.airportTitle') },
    { path: '/services#local', label: t('services.localTitle') },
    { path: '/services#outstation', label: t('services.outstationTitle') },
    { path: '/services#corporate', label: t('services.corporateTitle') },
  ];

  return (
    <footer className="bg-dark-900 text-white pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-dark-700">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                <Car className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Prabha Cab</h3>
                <p className="text-sm text-dark-400">Delhi NCR</p>
              </div>
            </div>
            <p className="text-dark-300 text-sm leading-relaxed mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-2 text-sm text-dark-300">
              <Clock className="w-4 h-4 text-primary-500" />
              <span>{t('stats.available')}</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-dark-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-base font-semibold mt-5 mb-3 text-dark-200">Taxi by City</h4>
            <ul className="space-y-2">
              {[
                { path: '/taxi-service-greater-noida', label: 'Taxi in Greater Noida' },
                { path: '/taxi-service-noida', label: 'Taxi in Noida' },
                { path: '/taxi-service-delhi', label: 'Taxi in Delhi' },
                { path: '/taxi-service-ghaziabad', label: 'Taxi in Ghaziabad' },
                { path: '/taxi-service-gurgaon', label: 'Taxi in Gurgaon' },
                { path: '/taxi-service-faridabad', label: 'Taxi in Faridabad' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-dark-300 hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-dark-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-base font-semibold mt-5 mb-3 text-dark-200">Airport & Outstation</h4>
            <ul className="space-y-2">
              {[
                { path: '/noida-to-delhi-airport-taxi', label: 'Noida to Airport Taxi' },
                { path: '/delhi-airport-cab-service', label: 'Delhi Airport Cab' },
                { path: '/noida-to-agra-taxi', label: 'Noida to Agra Taxi' },
                { path: '/noida-to-jaipur-taxi', label: 'Noida to Jaipur Taxi' },
                { path: '/noida-to-haridwar-taxi', label: 'Noida to Haridwar Taxi' },
                { path: '/noida-to-rishikesh-taxi', label: 'Noida to Rishikesh Taxi' },
                { path: '/noida-to-nainital-taxi', label: 'Noida to Nainital Taxi' },
                { path: '/noida-to-chandigarh-taxi', label: 'Noida to Chandigarh Taxi' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-dark-300 hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => callPhone('9718437625')}
                  className="flex items-center gap-3 text-dark-300 hover:text-primary-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-primary-500" />
                  +91 9718437625
                </button>
              </li>
              <li>
                <button
                  onClick={() => callPhone('9354958169')}
                  className="flex items-center gap-3 text-dark-300 hover:text-primary-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-primary-500" />
                  +91 9354958169
                </button>
              </li>
              <li>
                <a
                  href="mailto:brajkishor7625@gmail.com"
                  className="flex items-center gap-3 text-dark-300 hover:text-primary-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-primary-500" />
                  brajkishor7625@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-dark-300 text-sm">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                <span>Nirala Greens, Noida Extension, Sector 2, Greater Noida, UP 201308</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
          <p className="text-dark-400 text-sm">
            &copy; {new Date().getFullYear()} Prabha Cab. {t('footer.copyright')}.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="text-dark-400 hover:text-white text-sm transition-colors">
              {t('footer.terms')}
            </Link>
            <Link to="/privacy" className="text-dark-400 hover:text-white text-sm transition-colors">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
