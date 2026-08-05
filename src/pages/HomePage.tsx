import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone, MessageCircle, Plane, MapPin, Navigation, Building2, Clock, Shield,
  Car, Users, Star, CheckCircle, Award, Sparkles, ChevronRight, ChevronDown,
  Calendar, ArrowRight, Landmark
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/ui/ServiceCard';
import VehicleCard from '../components/ui/VehicleCard';
import RouteCard from '../components/ui/RouteCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import BookingForm from '../components/forms/BookingForm';
import SEOHead from '../components/seo/SEOHead';
import { seoConfig } from '../data/seoConfig';
import { pageSchemas } from '../data/seoSchemas';
import { services } from '../data/services';
import { vehicles } from '../data/fleet';
import { routes } from '../data/routes';
import { testimonials } from '../data/testimonials';
import { airportPricing, localPackages } from '../data/pricing';
import { generateWhatsAppUrl, callPhone } from '../utils/whatsappHelper';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  const quickActions = [
    { icon: Plane, title: t('quickActions.airport'), desc: t('quickActions.airportDesc'), path: '/services#airport' },
    { icon: MapPin, title: t('quickActions.local'), desc: t('quickActions.localDesc'), path: '/services#local' },
    { icon: Navigation, title: t('quickActions.outstation'), desc: t('quickActions.outstationDesc'), path: '/routes' },
    { icon: Building2, title: t('quickActions.corporate'), desc: t('quickActions.corporateDesc'), path: '/services#corporate' },
  ];

  const whyUsFeatures = [
    { icon: Clock, title: t('whyUs.available'), desc: t('whyUs.availableDesc') },
    { icon: Users, title: t('whyUs.experienced'), desc: t('whyUs.experiencedDesc') },
    { icon: Sparkles, title: t('whyUs.clean'), desc: t('whyUs.cleanDesc') },
    { icon: CheckCircle, title: t('whyUs.transparent'), desc: t('whyUs.transparentDesc') },
    { icon: Navigation, title: t('whyUs.gps'), desc: t('whyUs.gpsDesc') },
    { icon: Shield, title: t('whyUs.safe'), desc: t('whyUs.safeDesc') },
  ];

  const safetyFeatures = [
    { icon: Shield, title: t('safety.verified'), desc: t('safety.verifiedDesc') },
    { icon: Sparkles, title: t('safety.sanitized'), desc: t('safety.sanitizedDesc') },
    { icon: Award, title: t('safety.insured'), desc: t('safety.insuredDesc') },
    { icon: Navigation, title: t('safety.tracked'), desc: t('safety.trackedDesc') },
  ];

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
  ];

  return (
    <main className="bg-dark-50">
      <SEOHead
        title={seoConfig.home.title}
        description={seoConfig.home.description}
        keywords={seoConfig.home.keywords}
        canonicalPath={seoConfig.home.canonicalPath}
        schemas={pageSchemas.home}
      />

      <header className="relative min-h-[90vh] flex items-center overflow-hidden" role="banner">
        <div className="absolute inset-0">
          <img
            src="/images/hero3.jpg"
            alt="Prabha Cab - Professional taxi service in Greater Noida, Noida and Delhi NCR"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 via-dark-900/70 to-dark-900/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 backdrop-blur-sm rounded-full text-primary-300 text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                {t('stats.available')}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('hero.title')}
                <span className="text-primary-400"> {t('hero.subtitle')}</span>
              </h1>

              <p className="mt-6 text-lg text-dark-200 max-w-xl">
                {t('hero.description')}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/booking"
                  className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  {t('hero.bookNow')}
                </Link>
                <button
                  onClick={() => callPhone()}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {t('hero.callUs')}
                </button>
                <button
                  onClick={() => window.open(generateWhatsAppUrl('Hi, I want to book a cab.'), '_blank')}
                  className="flex items-center gap-2 px-6 py-3 bg-green-500/20 backdrop-blur-sm text-green-400 font-semibold rounded-xl hover:bg-green-500/30 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('hero.whatsapp')}
                </button>
              </div>

              {/* Floating Stats */}
              <div className="flex flex-wrap gap-6 mt-12">
                {[
                  { value: '10+', label: t('stats.years') },
                  { value: '5000+', label: t('stats.trips') },
                  { value: '3000+', label: t('stats.customers') },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-400">{stat.value}</div>
                    <div className="text-sm text-dark-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </header>

      {/* Quick Actions */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={action.path}
                  className="flex flex-col items-center p-5 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all group"
                >
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
                    <action.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-dark-900 text-center">{action.title}</h3>
                  <p className="text-xs text-dark-500 text-center mt-1">{action.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Booking Form */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            title={t('fareCalculator.title')}
            subtitle={t('booking.subtitle')}
          />
          <div className="bg-dark-50 rounded-2xl p-6">
            <BookingForm compact />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title={t('services.title')}
            subtitle={t('services.subtitle')}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
            >
              {t('services.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title={t('fleet.title')}
            subtitle={t('fleet.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vehicles.map((vehicle, i) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
            >
              {t('fleet.viewFleet')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title={t('routes.title')}
            subtitle={t('routes.subtitle')}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {routes.slice(0, 12).map((route, i) => (
              <motion.div
                key={route.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <RouteCard route={route} compact />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/routes"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
            >
              {t('routes.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Delhi Darshan Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
                <Landmark className="w-4 h-4" />
                {isHindi ? 'एक दिन की यात्रा' : 'Full Day Tour'}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                {isHindi ? 'दिल्ली दर्शन' : 'Delhi Darshan'}
              </h2>
              <p className="text-dark-600 mb-6">
                {isHindi
                  ? 'भारत की राजधानी के प्रतिष्ठित स्थलों का अन्वेषण करें। एक आरामदायक पूरे दिन की यात्रा में दिल्ली की समृद्ध विरासत और आधुनिक चमत्कारों का अनुभव करें।'
                  : 'Explore the iconic landmarks of India\'s capital. Experience Delhi\'s rich heritage and modern marvels in one comfortable full-day tour.'}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { name: 'Akshardham', nameHi: 'अक्षरधाम' },
                  { name: 'Lal Qila', nameHi: 'लाल क़िला' },
                  { name: 'Jama Masjid', nameHi: 'जामा मस्जिद' },
                  { name: 'India Gate', nameHi: 'इंडिया गेट' },
                  { name: 'Rashtrapati Bhavan', nameHi: 'राष्ट्रपति भवन' },
                  { name: 'Qutub Minar', nameHi: 'क़ुतुब मीनार' },
                  { name: 'Lotus Temple', nameHi: 'लोटस टेम्पल' },
                ].map((sight, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-dark-700">{isHindi ? sight.nameHi : sight.name}</span>
                  </div>
                ))}
              </div>

              <div className="bg-dark-50 rounded-2xl p-5 mb-6">
                <div className="flex items-center gap-2 text-dark-600 mb-4">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">12 {isHindi ? 'घंटे' : 'Hours'} / 120 km</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-xs text-dark-500 mb-1">Sedan</div>
                    <div className="text-xl font-bold text-dark-900">₹2,500</div>
                  </div>
                  <div className="text-center border-x border-dark-200">
                    <div className="text-xs text-dark-500 mb-1">XL/Ertiga</div>
                    <div className="text-xl font-bold text-dark-900">₹3,500</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-dark-500 mb-1">Innova Crysta</div>
                    <div className="text-xl font-bold text-dark-900">₹4,500</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const message = isHindi
                      ? '🚕 *प्रभा कैब - दिल्ली दर्शन*\n\nनमस्ते, मुझे दिल्ली दर्शन टूर बुक करना है।\n\nकृपया उपलब्धता और विवरण साझा करें।'
                      : '🚕 *Prabha Cab - Delhi Darshan*\n\nHi, I would like to book a Delhi Darshan tour.\n\nPlease share availability and details.';
                    window.open(generateWhatsAppUrl(message), '_blank');
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('cta.bookNow')}
                </button>
                <Link
                  to="/services#delhi-darshan"
                  className="flex items-center gap-2 px-6 py-3 bg-dark-100 text-dark-700 font-semibold rounded-xl hover:bg-dark-200 transition-colors"
                >
                  {t('cta.viewDetails')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/images/dilli-darshan/india-gate.jpg"
                      alt="India Gate"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/images/dilli-darshan/qutub_minar.jpg"
                      alt="Qutub Minar"
                      className="w-full h-52 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/images/dilli-darshan/lal-quila.jpeg"
                      alt="Red Fort"
                      className="w-full h-52 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/images/dilli-darshan/lotus-temple.jpg"
                      alt="Lotus Temple"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-amber-500 text-white px-4 py-3 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">7+</div>
                <div className="text-sm text-amber-100">{isHindi ? 'स्थल' : 'Attractions'}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title={t('whyUs.title')}
            subtitle={t('whyUs.subtitle')}
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {whyUsFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto bg-primary-500/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary-400" />
                </div>
                <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-dark-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title={t('pricing.title')}
            subtitle={t('pricing.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Airport Pricing */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">{t('pricing.airport')}</h3>
              <p className="text-primary-100 text-sm mb-4">{isHindi ? airportPricing.descriptionHi : airportPricing.description}</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span>Sedan</span>
                  <span className="font-bold">₹{airportPricing.rates.sedan}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/20">
                  <span>XL/SUV</span>
                  <span className="font-bold">₹{airportPricing.rates.xl}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Premium</span>
                  <span className="font-bold">₹{airportPricing.rates.premium}</span>
                </div>
              </div>
              <p className="text-xs text-primary-100 mt-4">{isHindi ? 'टोल और पार्किंग अतिरिक्त' : 'Toll & parking extra'}</p>
            </div>

            {/* Local Packages */}
            {localPackages.map((pkg) => (
              <div key={pkg.id} className="bg-dark-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-dark-900 mb-2">{isHindi ? pkg.titleHi : pkg.title}</h3>
                <p className="text-dark-500 text-sm mb-4">{isHindi ? pkg.descriptionHi : pkg.description}</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-dark-200">
                    <span className="text-dark-600">Sedan</span>
                    <span className="font-bold text-dark-900">₹{pkg.rates.sedan}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-dark-200">
                    <span className="text-dark-600">XL/SUV</span>
                    <span className="font-bold text-dark-900">₹{pkg.rates.xl}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-dark-600">Premium</span>
                    <span className="font-bold text-dark-900">₹{pkg.rates.premium}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
            >
              {t('pricing.viewPricing')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter
              end={10}
              suffix="+"
              label={t('stats.years')}
              icon={<Award className="w-6 h-6" />}
            />
            <AnimatedCounter
              end={5000}
              suffix="+"
              label={t('stats.trips')}
              icon={<Car className="w-6 h-6" />}
            />
            <AnimatedCounter
              end={3000}
              suffix="+"
              label={t('stats.customers')}
              icon={<Users className="w-6 h-6" />}
            />
            <AnimatedCounter
              end={50}
              suffix="+"
              label={t('stats.cities')}
              icon={<MapPin className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title={t('testimonials.title')}
            subtitle={t('testimonials.subtitle')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('corporate.title')}</h2>
              <p className="text-dark-300 mb-6">{t('corporate.description')}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  t('corporate.dedicatedDriver'),
                  t('corporate.flexibleBilling'),
                  t('corporate.priorityBooking'),
                  t('corporate.monthlyReports'),
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-dark-200">
                    <CheckCircle className="w-5 h-5 text-primary-400" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
              >
                {t('corporate.getQuote')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/services/coroporate-services.jpg"
                alt="Corporate services"
                className="rounded-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-primary-600">₹40,000</div>
                <div className="text-sm text-dark-500">Monthly from</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title={t('safety.title')}
            subtitle={t('safety.subtitle')}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-50 rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-dark-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-dark-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeader
            title={t('faq.title')}
            subtitle={t('faq.subtitle')}
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl shadow-card group"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-medium text-dark-900 pr-4">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-dark-400 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 text-dark-600 text-sm">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
            >
              {t('faq.viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('contact.quickContact')}</h2>
          <p className="text-primary-100 mb-8">{t('contact.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => callPhone('9718437625')}
              className="flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              9718437625
            </button>
            <button
              onClick={() => callPhone('9354958169')}
              className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-colors"
            >
              <Phone className="w-5 h-5" />
              9354958169
            </button>
            <button
              onClick={() => window.open(generateWhatsAppUrl('Hi, I need a cab.'), '_blank')}
              className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      <section className="sr-only" aria-label="Service areas">
        <h2>Cab Service Areas</h2>
        <p>
          Prabha Cab provides taxi services in Greater Noida, Noida, Delhi NCR including sectors Alpha 1, Alpha 2, Beta 1, Beta 2, Gamma 1, Gamma 2, Delta, Knowledge Park, Pari Chowk, Greater Noida Expressway, Sector 150, Gaur City. We cover all areas of Noida including Sector 18, Sector 62, Sector 63, Noida City Centre, Botanical Garden, Film City. Our Delhi coverage includes IGI Airport (Terminal 1, 2, 3), New Delhi Railway Station, Connaught Place, South Delhi, Dwarka, and all major locations. Book outstation cabs to Agra, Jaipur, Mathura, Vrindavan, Haridwar, Rishikesh, Chandigarh, Dehradun, Mussoorie, Nainital, Shimla, Manali.
        </p>
      </section>
    </main>
  );
}
