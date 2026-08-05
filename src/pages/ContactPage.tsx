import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import ContactForm from '../components/forms/ContactForm';
import SEOHead from '../components/seo/SEOHead';
import { seoConfig } from '../data/seoConfig';
import { pageSchemas } from '../data/seoSchemas';
import { callPhone, generateWhatsAppUrl } from '../utils/whatsappHelper';

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  const contactMethods = [
    {
      icon: Phone,
      title: t('contact.callUs'),
      value: '+91 9718437625',
      subValue: '+91 9354958169',
      action: () => callPhone('9718437625'),
      color: 'bg-primary-500',
    },
    {
      icon: MessageCircle,
      title: t('contact.whatsapp'),
      value: '+91 9718437625',
      action: () => window.open(generateWhatsAppUrl('Hi, I want to enquire about cab services.'), '_blank'),
      color: 'bg-green-500',
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'brajkishor7625@gmail.com',
      action: () => window.location.href = 'mailto:brajkishor7625@gmail.com',
      color: 'bg-dark-700',
    },
  ];

  return (
    <main className="bg-dark-50 min-h-screen">
      <SEOHead
        title={seoConfig.contact.title}
        description={seoConfig.contact.description}
        keywords={seoConfig.contact.keywords}
        canonicalPath={seoConfig.contact.canonicalPath}
        schemas={pageSchemas.contact}
      />

      <section className="relative py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={method.action}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all text-left w-full"
              >
                <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center mb-4`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-dark-900 mb-1">{method.title}</h3>
                <p className="text-primary-600 font-medium">{method.value}</p>
                {method.subValue && (
                  <p className="text-dark-500 text-sm">{method.subValue}</p>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-dark-900 mb-6">{t('contact.formTitle')}</h2>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card">
                <ContactForm />
              </div>
            </div>

            {/* Office Info */}
            <div>
              <h2 className="text-2xl font-bold text-dark-900 mb-6">{t('contact.office')}</h2>

              {/* Address Card */}
              <div className="bg-white rounded-2xl p-6 shadow-card mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-1">{t('contact.office')}</h3>
                    <p className="text-dark-600">
                      Nirala Greens, Noida Extension, Sector 2, Patwari,<br />
                      Greater Noida, Uttar Pradesh 201308
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-1">{t('contact.landmark')}</h3>
                    <p className="text-dark-600">Near Yatharth Super Speciality Hospital Noida Extension</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-1">{t('contact.hours')}</h3>
                    <p className="text-dark-600">{t('contact.hoursValue')}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                      {t('stats.available')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-card">
                <div className="relative h-64 bg-dark-100">
                  <img
                    src="/images/business-card.jpg"
                    alt="BK Cabs Business Card"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href="https://maps.google.com/?q=Nirala+Greens+Noida+Extension"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white text-dark-900 font-semibold rounded-xl shadow-lg hover:bg-dark-50 transition-colors"
                    >
                      <MapPin className="w-5 h-5 text-primary-600" />
                      {isHindi ? 'मानचित्र पर देखें' : 'View on Map'}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            {isHindi ? 'व्हाट्सएप पर तुरंत संपर्क करें' : 'Quick Contact on WhatsApp'}
          </h2>
          <p className="text-green-100 mb-8">
            {isHindi
              ? 'बुकिंग, पूछताछ या सहायता के लिए व्हाट्सएप पर मैसेज करें'
              : 'Message us on WhatsApp for bookings, inquiries, or support'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919718437625?text=Hi, I want to book a cab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              {isHindi ? 'कैब बुक करें' : 'Book a Cab'}
            </a>
            <a
              href="https://wa.me/919718437625?text=Hi, I need a fare quote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-green-400/30 text-white font-semibold rounded-xl hover:bg-green-400/40 transition-colors"
            >
              {isHindi ? 'किराया पूछें' : 'Get Quote'}
            </a>
          </div>
        </div>
      </section>

      {/* Quick Call Section */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div
              onClick={() => callPhone('9718437625')}
              className="bg-primary-500 rounded-2xl p-8 cursor-pointer hover:bg-primary-600 transition-colors"
            >
              <Phone className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {isHindi ? 'प्राथमिक नंबर' : 'Primary Number'}
              </h3>
              <p className="text-3xl font-bold text-white">+91 9718437625</p>
              <p className="text-primary-200 mt-2">
                {isHindi ? 'कॉल करने के लिए टैप करें' : 'Tap to call'}
              </p>
            </div>

            <div
              onClick={() => callPhone('9354958169')}
              className="bg-dark-800 rounded-2xl p-8 cursor-pointer hover:bg-dark-700 transition-colors"
            >
              <Phone className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {isHindi ? 'वैकल्पिक नंबर' : 'Alternate Number'}
              </h3>
              <p className="text-3xl font-bold text-white">+91 9354958169</p>
              <p className="text-dark-400 mt-2">
                {isHindi ? 'कॉल करने के लिए टैप करें' : 'Tap to call'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
