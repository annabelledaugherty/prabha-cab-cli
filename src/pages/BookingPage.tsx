import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, CheckCircle, Shield, Clock, Car } from 'lucide-react';
import BookingForm from '../components/forms/BookingForm';
import SEOHead from '../components/seo/SEOHead';
import { seoConfig } from '../data/seoConfig';
import { pageSchemas } from '../data/seoSchemas';
import { vehicles } from '../data/fleet';
import { callPhone, generateWhatsAppUrl } from '../utils/whatsappHelper';

export default function BookingPage() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  const benefits = [
    { icon: Clock, text: isHindi ? '24/7 उपलब्धता' : '24/7 Availability' },
    { icon: Shield, text: isHindi ? 'सुरक्षित यात्रा' : 'Safe Travel' },
    { icon: CheckCircle, text: isHindi ? 'पारदर्शी मूल्य' : 'Transparent Pricing' },
    { icon: Car, text: isHindi ? 'स्वच्छ वाहन' : 'Clean Vehicles' },
  ];

  return (
    <main className="bg-dark-50 min-h-screen">
      <SEOHead
        title={seoConfig.booking.title}
        description={seoConfig.booking.description}
        keywords={seoConfig.booking.keywords}
        canonicalPath={seoConfig.booking.canonicalPath}
        schemas={pageSchemas.booking}
      />

      <section className="relative py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('booking.title')}
            </h1>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto mb-8">
              {t('booking.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-dark-200">
                  <benefit.icon className="w-5 h-5 text-primary-400" />
                  <span className="text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card">
                <h2 className="text-2xl font-bold text-dark-900 mb-6">
                  {isHindi ? 'अपनी राइड बुक करें' : 'Book Your Ride'}
                </h2>
                <BookingForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-bold text-dark-900 mb-4">
                  {isHindi ? 'जल्दी बुकिंग?' : 'Quick Booking?'}
                </h3>
                <p className="text-dark-500 text-sm mb-4">
                  {isHindi
                    ? 'सीधे कॉल या व्हाट्सएप करें'
                    : 'Call or WhatsApp us directly for faster booking'}
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => callPhone('9718437625')}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-primary-500 text-white font-medium rounded-xl hover:bg-primary-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {isHindi ? 'कॉल करें' : 'Call Now'}
                  </button>
                  <button
                    onClick={() => window.open(generateWhatsAppUrl('Hi, I want to book a cab.'), '_blank')}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Vehicle Options */}
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-bold text-dark-900 mb-4">
                  {isHindi ? 'उपलब्ध वाहन' : 'Available Vehicles'}
                </h3>
                <div className="space-y-3">
                  {vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="flex items-center gap-3 p-3 bg-dark-50 rounded-xl">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-16 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-dark-900 text-sm">{vehicle.name}</h4>
                        <p className="text-xs text-dark-500">{vehicle.capacity} {t('common.passengers')}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary-600 font-bold">₹{vehicle.pricePerKm}</p>
                        <p className="text-xs text-dark-500">/km</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking Info */}
              <div className="bg-primary-50 rounded-2xl p-6 border border-primary-200">
                <h3 className="font-bold text-primary-900 mb-3">
                  {isHindi ? 'बुकिंग जानकारी' : 'Booking Info'}
                </h3>
                <ul className="space-y-2 text-sm text-primary-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5" />
                    <span>{isHindi ? 'अग्रिम बुकिंग अनुशंसित' : 'Advance booking recommended'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5" />
                    <span>{isHindi ? 'कैश और UPI स्वीकार' : 'Cash & UPI accepted'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5" />
                    <span>{isHindi ? 'मुफ्त रद्दीकरण (2 घंटे पहले)' : 'Free cancellation (2 hrs before)'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5" />
                    <span>{isHindi ? 'बिल/रसीद उपलब्ध' : 'Bills/receipts available'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark-900 text-center mb-12">
            {isHindi ? 'बुकिंग प्रक्रिया' : 'How It Works'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: isHindi ? 'विवरण भरें' : 'Fill Details',
                desc: isHindi ? 'पिकअप, ड्रॉप, तिथि और वाहन चुनें' : 'Enter pickup, drop, date and select vehicle',
              },
              {
                step: '2',
                title: isHindi ? 'व्हाट्सएप से भेजें' : 'Submit via WhatsApp',
                desc: isHindi ? 'आपका अनुरोध सीधे हमें पहुंचेगा' : 'Your request goes directly to us',
              },
              {
                step: '3',
                title: isHindi ? 'पुष्टि प्राप्त करें' : 'Get Confirmation',
                desc: isHindi ? 'हम जल्द ही पुष्टि करेंगे' : 'We\'ll confirm your booking shortly',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-500 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-dark-900 mb-2">{item.title}</h3>
                <p className="text-dark-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
