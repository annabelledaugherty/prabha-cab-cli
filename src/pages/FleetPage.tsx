import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users, Briefcase, Snowflake, Music, BatteryCharging, Check, Shield,
  Award, Star, MessageCircle
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import SEOHead from '../components/seo/SEOHead';
import { seoConfig } from '../data/seoConfig';
import { pageSchemas } from '../data/seoSchemas';
import { vehicles } from '../data/fleet';
import { generateWhatsAppUrl, generateVehicleBookingMessage } from '../utils/whatsappHelper';

export default function FleetPage() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  const features = [
    { icon: Snowflake, label: t('fleet.ac') },
    { icon: Music, label: t('fleet.music') },
    { icon: BatteryCharging, label: t('fleet.charging') },
    { icon: Briefcase, label: t('fleet.luggage') },
  ];

  const badges = [
    { icon: Award, label: t('fleet.yellowPlate'), color: 'bg-primary-100 text-primary-700' },
    { icon: Shield, label: t('fleet.fullyInsured'), color: 'bg-green-100 text-green-700' },
  ];

  return (
    <main className="bg-dark-50 min-h-screen">
      <SEOHead
        title={seoConfig.fleet.title}
        description={seoConfig.fleet.description}
        keywords={seoConfig.fleet.keywords}
        canonicalPath={seoConfig.fleet.canonicalPath}
        schemas={pageSchemas.fleet}
      />

      <section className="relative py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('fleet.title')}
            </h1>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              {t('fleet.subtitle')}
            </p>
            <div className="flex justify-center gap-4 mt-8">
              {badges.map((badge, i) => (
                <span key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${badge.color}`}>
                  <badge.icon className="w-4 h-4" />
                  {badge.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-72 md:h-96 object-cover rounded-2xl"
                    />
                    <div className="absolute top-4 left-4 px-4 py-2 bg-primary-500 text-white font-semibold rounded-full">
                      {vehicle.name}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-3xl font-bold text-dark-900 mb-2">{vehicle.name}</h2>
                  <p className="text-primary-600 font-medium mb-4">{vehicle.models.join(' | ')}</p>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-500">{t('common.passengers')}</p>
                        <p className="font-semibold text-dark-900">{vehicle.capacity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-500">{t('common.luggage')}</p>
                        <p className="font-semibold text-dark-900">{vehicle.luggage} bags</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-dark-900 mb-3">{t('fleet.features')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-dark-100 rounded-lg text-sm text-dark-700"
                        >
                          <Check className="w-4 h-4 text-green-500" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 shadow-card mb-6">
                    <h4 className="font-semibold text-dark-900 mb-4">Pricing</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-dark-50 rounded-lg">
                        <p className="text-xs text-dark-500 mb-1">{t('pricing.airport')}</p>
                        <p className="text-xl font-bold text-primary-600">₹{vehicle.airportPrice}</p>
                      </div>
                      <div className="text-center p-3 bg-dark-50 rounded-lg">
                        <p className="text-xs text-dark-500 mb-1">{t('pricing.outstation')}</p>
                        <p className="text-xl font-bold text-primary-600">₹{vehicle.pricePerKm}/km</p>
                      </div>
                      <div className="text-center p-3 bg-dark-50 rounded-lg">
                        <p className="text-xs text-dark-500 mb-1">80km/8hr</p>
                        <p className="text-xl font-bold text-primary-600">₹{vehicle.localPrice8hr}</p>
                      </div>
                      <div className="text-center p-3 bg-dark-50 rounded-lg">
                        <p className="text-xs text-dark-500 mb-1">120km/12hr</p>
                        <p className="text-xl font-bold text-primary-600">₹{vehicle.localPrice12hr}</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const message = generateVehicleBookingMessage(vehicle.name, i18n.language);
                      window.open(generateWhatsAppUrl(message), '_blank');
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t('cta.bookNow')} {vehicle.name}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader
            title={isHindi ? 'वाहन तुलना' : 'Vehicle Comparison'}
            subtitle={isHindi ? 'अपनी जरूरतों के लिए सही वाहन चुनें' : 'Choose the right vehicle for your needs'}
          />

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-dark-50">
                  <th className="p-4 text-left font-semibold text-dark-900">Feature</th>
                  {vehicles.map((v) => (
                    <th key={v.id} className="p-4 text-center font-semibold text-dark-900">
                      {v.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-dark-100">
                  <td className="p-4 text-dark-600">Capacity</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="p-4 text-center font-medium">{v.capacity} passengers</td>
                  ))}
                </tr>
                <tr className="border-b border-dark-100">
                  <td className="p-4 text-dark-600">Luggage</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="p-4 text-center font-medium">{v.luggage} bags</td>
                  ))}
                </tr>
                <tr className="border-b border-dark-100">
                  <td className="p-4 text-dark-600">Airport Rate</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="p-4 text-center font-medium text-primary-600">₹{v.airportPrice}</td>
                  ))}
                </tr>
                <tr className="border-b border-dark-100">
                  <td className="p-4 text-dark-600">Per km Rate</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="p-4 text-center font-medium text-primary-600">₹{v.pricePerKm}</td>
                  ))}
                </tr>
                <tr className="border-b border-dark-100">
                  <td className="p-4 text-dark-600">Monthly Package</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="p-4 text-center font-medium text-primary-600">₹{v.monthlyPrice.toLocaleString()}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4"></td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="p-4 text-center">
                      <button
                        onClick={() => {
                          const message = generateVehicleBookingMessage(v.name, i18n.language);
                          window.open(generateWhatsAppUrl(message), '_blank');
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Book
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
