import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Plane, MapPin, Navigation, Clock, Building2, Heart, Train, Landmark,
  CheckCircle, ArrowRight, Phone, MessageCircle
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import SEOHead from '../components/seo/SEOHead';
import { seoConfig } from '../data/seoConfig';
import { pageSchemas } from '../data/seoSchemas';
import { callPhone, generateWhatsAppUrl, generateServiceBookingMessage } from '../utils/whatsappHelper';

export default function ServicesPage() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  const services = [
    {
      id: 'airport',
      icon: Plane,
      title: t('services.airportTitle'),
      desc: t('services.airportDesc'),
      image: '/images/services/airport-transfer.jpg',
      features: [
        'Service to/from Greater Noida',
        'All terminals covered (T1, T2, T3)',
        'Flight tracking - we monitor delays',
        'Meet & greet service',
        'Free waiting time (30 mins domestic, 60 mins international)',
        'Toll & parking charges extra',
      ],
      pricing: [
        { vehicle: 'Sedan (Dzire)', price: 2200 },
        { vehicle: 'XL/SUV (Ertiga)', price: 2500 },
        { vehicle: 'Premium (Innova Crysta)', price: 3500 },
      ],
    },
    {
      id: 'local',
      icon: MapPin,
      title: t('services.localTitle'),
      desc: t('services.localDesc'),
      image: '/images/services/local-packages1.jpg',
      features: [
        '80km/8hr and 120km/12hr packages',
        'Multiple stops allowed',
        'Full NCR coverage',
        'AC vehicles with music system',
        'Professional drivers',
        'Flexible timing',
      ],
      pricing: [
        { vehicle: 'Sedan - 8hr/80km', price: 1600 },
        { vehicle: 'Sedan - 12hr/120km', price: 2500 },
        { vehicle: 'XL/SUV - 8hr/80km', price: 2500 },
        { vehicle: 'XL/SUV - 12hr/120km', price: 3500 },
        { vehicle: 'Premium - 8hr/80km', price: 3000 },
        { vehicle: 'Premium - 12hr/120km', price: 4000 },
      ],
    },
    {
      id: 'outstation',
      icon: Navigation,
      title: t('services.outstationTitle'),
      desc: t('services.outstationDesc'),
      image: '/images/services/outstation-tips.jpg',
      features: [
        'One-way and round trip options',
        'Pan-India coverage',
        'Minimum 250km per day billing',
        'Experienced long-distance drivers',
        'Regular breaks for comfort',
        'AC vehicles for comfortable journey',
      ],
      pricing: [
        { vehicle: 'Sedan', price: 12, unit: '/km' },
        { vehicle: 'XL/SUV', price: 15, unit: '/km' },
        { vehicle: 'Premium', price: 22, unit: '/km' },
      ],
    },
    {
      id: 'hourly',
      icon: Clock,
      title: t('services.hourlyTitle'),
      desc: t('services.hourlyDesc'),
      image: '/images/services/hourly-rental.jpg',
      features: [
        'Flexible hourly booking',
        'Perfect for business meetings',
        'Shopping and errands',
        'Multiple stops included',
        'No fixed routes',
        'Pay only for time used',
      ],
      pricing: [
        { vehicle: 'Extra hour charge', price: 150, unit: '/hr' },
      ],
    },
    {
      id: 'corporate',
      icon: Building2,
      title: t('services.corporateTitle'),
      desc: t('services.corporateDesc'),
      image: '/images/services/coroporate-services.jpg',
      features: [
        'Monthly packages available',
        '2,500 km & 240 hours included',
        'Dedicated driver option',
        'Flexible billing cycles',
        'Priority booking',
        'Monthly usage reports',
      ],
      pricing: [
        { vehicle: 'Sedan (Monthly)', price: 40000 },
        { vehicle: 'XL/SUV (Monthly)', price: 75000 },
        { vehicle: 'Premium (Monthly)', price: 125000 },
      ],
    },
    {
      id: 'wedding',
      icon: Heart,
      title: t('services.weddingTitle'),
      desc: t('services.weddingDesc'),
      image: '/images/services/wedding-and-events.webp',
      features: [
        'Multiple vehicle bookings',
        'Event transportation coordination',
        'Decorated vehicle options',
        'Professional chauffeurs',
        'Flexible scheduling',
        'Special wedding rates',
      ],
      pricing: [],
    },
    {
      id: 'railway',
      icon: Train,
      title: t('services.railwayTitle'),
      desc: t('services.railwayDesc'),
      image: '/images/services/railway-station.avif',
      features: [
        'All Delhi railway stations',
        'New Delhi, Old Delhi, Nizamuddin',
        'Hazrat Nizamuddin covered',
        '24/7 availability',
        'Train tracking service',
        'Luggage assistance',
      ],
      pricing: [],
    },
    {
      id: 'delhi-darshan',
      icon: Landmark,
      title: t('services.delhiDarshanTitle'),
      desc: t('services.delhiDarshanDesc'),
      image: '/images/services/dilli-darshan-services.webp',
      features: [
        '12 hours / 120 km package',
        'Akshardham Temple',
        'Lal Qila (Red Fort)',
        'Jama Masjid',
        'India Gate',
        'Rashtrapati Bhavan',
        'Qutub Minar',
        'Lotus Temple',
        'Expert drivers with local knowledge',
      ],
      pricing: [
        { vehicle: 'Sedan (Dzire)', price: 2500 },
        { vehicle: 'XL/SUV (Ertiga)', price: 3500 },
        { vehicle: 'Premium (Innova Crysta)', price: 4500 },
      ],
    },
  ];

  return (
    <main className="bg-dark-50 min-h-screen">
      <SEOHead
        title={seoConfig.services.title}
        description={seoConfig.services.description}
        keywords={seoConfig.services.keywords}
        canonicalPath={seoConfig.services.canonicalPath}
        schemas={pageSchemas.services}
      />

      <section className="relative py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('services.title')}
            </h1>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-dark-600 mb-6">{service.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-dark-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {service.pricing.length > 0 && (
                    <div className="bg-dark-50 rounded-xl p-4 mb-6">
                      <h4 className="font-semibold text-dark-900 mb-3">Pricing</h4>
                      <div className="space-y-2">
                        {service.pricing.map((p, i) => {
                          const needsSeparator = service.id === 'local' && (i === 2 || i === 4);
                          return (
                            <div
                              key={i}
                              className={`flex justify-between items-center ${needsSeparator ? 'mt-4 pt-3 border-t border-dark-200' : ''}`}
                            >
                              <span className="text-sm text-dark-600">{p.vehicle}</span>
                              <span className="font-semibold text-primary-600">
                                ₹{p.price.toLocaleString()}{p.unit || ''}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        const message = generateServiceBookingMessage(service.title, i18n.language);
                        window.open(generateWhatsAppUrl(message), '_blank');
                      }}
                      className="flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {t('cta.bookNow')}
                    </button>
                    <button
                      onClick={() => callPhone()}
                      className="flex items-center gap-2 px-5 py-2.5 bg-dark-100 text-dark-700 font-medium rounded-xl hover:bg-dark-200 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {t('cta.callNow')}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {isHindi ? 'आज ही बुक करें' : 'Book Your Ride Today'}
          </h2>
          <p className="text-primary-100 mb-8">
            {isHindi
              ? 'हमारी विश्वसनीय सेवा के साथ आरामदायक यात्रा का आनंद लें'
              : 'Experience comfortable travel with our reliable service'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                const message = isHindi
                  ? '🚕 *प्रभा कैब*\n\nनमस्ते, मुझे कैब बुक करनी है।'
                  : '🚕 *Prabha Cab*\n\nHi, I would like to book a cab.';
                window.open(generateWhatsAppUrl(message), '_blank');
              }}
              className="flex items-center gap-2 px-8 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              {t('cta.bookNow')}
            </button>
            <Link
              to="/pricing"
              className="px-8 py-3 bg-primary-400/30 text-white font-semibold rounded-xl hover:bg-primary-400/40 transition-colors"
            >
              {t('pricing.viewPricing')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
