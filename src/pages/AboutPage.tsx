import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award, Users, Clock, Shield, CheckCircle, Target, Eye, Heart,
  MapPin, Car, Star, Phone, ArrowRight
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import SEOHead from '../components/seo/SEOHead';
import { seoConfig } from '../data/seoConfig';
import { pageSchemas } from '../data/seoSchemas';
import { callPhone } from '../utils/whatsappHelper';

export default function AboutPage() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  const values = [
    {
      icon: Clock,
      title: t('about.punctuality'),
      desc: t('about.punctualityDesc'),
    },
    {
      icon: CheckCircle,
      title: t('about.integrity'),
      desc: t('about.integrityDesc'),
    },
    {
      icon: Star,
      title: t('about.excellence'),
      desc: t('about.excellenceDesc'),
    },
  ];

  const milestones = [
    { year: '2016', event: isHindi ? 'कंपनी की स्थापना' : 'Company Founded', desc: isHindi ? 'एक कार से शुरुआत' : 'Started with one car' },
    { year: '2018', event: isHindi ? 'बेड़े का विस्तार' : 'Fleet Expansion', desc: isHindi ? '5 वाहनों तक विस्तार' : 'Expanded to 5 vehicles' },
    { year: '2020', event: isHindi ? 'कॉर्पोरेट सेवाएं' : 'Corporate Services', desc: isHindi ? 'कॉर्पोरेट क्लाइंट्स को सेवा' : 'Started serving corporate clients' },
    { year: '2024', event: isHindi ? 'प्रीमियम बेड़ा' : 'Premium Fleet', desc: isHindi ? 'इनोवा क्रिस्टा जोड़ी' : 'Added Innova Crysta to fleet' },
  ];

  const coverage = [
    'Greater Noida',
    'Noida',
    'Noida Extension',
    'Delhi',
    'Gurgaon',
    'Ghaziabad',
    'Faridabad',
  ];

  return (
    <main className="bg-dark-50 min-h-screen">
      <SEOHead
        title={seoConfig.about.title}
        description={seoConfig.about.description}
        keywords={seoConfig.about.keywords}
        canonicalPath={seoConfig.about.canonicalPath}
        schemas={pageSchemas.about}
      />

      <section className="relative py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium mb-4">
              Since 2016
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('about.title')}
            </h1>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-dark-900 mb-4">{t('about.story')}</h2>
              <p className="text-dark-600 leading-relaxed mb-6">
                {t('about.storyText')}
              </p>
              <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary-500">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src="/images/about/owner.jpeg"
                    alt="Brajkishor Prajapati"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-dark-900">Brajkishor Prajapati</h4>
                    <p className="text-sm text-dark-500">{isHindi ? 'संस्थापक एवं मालिक' : 'Founder & Owner'}</p>
                  </div>
                </div>
                <p className="text-dark-600 text-sm italic">
                  {isHindi
                    ? '"हमारा उद्देश्य हर ग्राहक को सुरक्षित और आरामदायक यात्रा प्रदान करना है।"'
                    : '"Our goal is to provide every customer with a safe and comfortable journey."'}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/about/our-story.webp"
                alt="Our fleet"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary-500 rounded-2xl p-8 text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('about.mission')}</h3>
              <p className="text-primary-100">{t('about.missionText')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-dark-900 rounded-2xl p-8 text-white"
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('about.vision')}</h3>
              <p className="text-dark-300">{t('about.visionText')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title={t('about.values')}
            subtitle={isHindi ? 'हमारे मूल सिद्धांत जो हमें मार्गदर्शन करते हैं' : 'Our core principles that guide us'}
          />

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-card"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{value.title}</h3>
                <p className="text-dark-500">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            title={isHindi ? 'हमारी यात्रा' : 'Our Journey'}
            subtitle={isHindi ? 'वर्षों में हमारी प्रगति' : 'Our progress over the years'}
          />

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2" />

            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-8 mb-8 ${
                  i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-dark-50 rounded-xl p-5 inline-block">
                    <span className="text-primary-600 font-bold text-lg">{milestone.year}</span>
                    <h4 className="font-semibold text-dark-900">{milestone.event}</h4>
                    <p className="text-sm text-dark-500">{milestone.desc}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow z-10" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title={isHindi ? 'सेवा क्षेत्र' : 'Service Coverage'}
            subtitle={isHindi ? 'हम दिल्ली एनसीआर में सेवा प्रदान करते हैं' : 'We serve across Delhi NCR region'}
          />

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-dark-900 mb-4">
                {isHindi ? 'लोकल सेवा क्षेत्र' : 'Local Service Areas'}
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {coverage.map((area, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white rounded-full text-dark-700 shadow-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-dark-900 mb-4">
                {isHindi ? 'आउटस्टेशन' : 'Outstation'}
              </h3>
              <p className="text-dark-600 mb-4">
                {isHindi
                  ? 'दिल्ली एनसीआर से भारत में कहीं भी पिकअप और ड्रॉप'
                  : 'Pickup from anywhere in Delhi NCR, drop anywhere in India'}
              </p>
              <Link
                to="/routes"
                className="inline-flex items-center gap-2 text-primary-600 font-medium"
              >
                {t('routes.viewAll')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card">
              <img
                src="/images/about/our-story-car.jpeg"
                alt="Service Coverage"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {isHindi ? 'आज ही हमसे जुड़ें' : 'Connect With Us Today'}
          </h2>
          <p className="text-dark-300 mb-8">
            {isHindi
              ? 'विश्वसनीय और आरामदायक यात्रा के लिए प्रभा कैब चुनें'
              : 'Choose Prabha Cab for reliable and comfortable travel'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => callPhone()}
              className="flex items-center gap-2 px-8 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {t('cta.callNow')}
            </button>
            <Link
              to="/booking"
              className="px-8 py-3 bg-white text-dark-900 font-semibold rounded-xl hover:bg-dark-50 transition-colors"
            >
              {t('cta.bookNow')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
