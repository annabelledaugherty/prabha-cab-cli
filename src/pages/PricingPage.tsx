import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Info, Calculator, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import SEOHead from '../components/seo/SEOHead';
import { seoConfig } from '../data/seoConfig';
import { pageSchemas } from '../data/seoSchemas';
import { vehicles } from '../data/fleet';
import { airportPricing, localPackages, outstationRates, monthlyPackages, extraCharges } from '../data/pricing';

export default function PricingPage() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';
  const [activeTab, setActiveTab] = useState('airport');

  const tabs = [
    { id: 'airport', label: t('pricing.airport') },
    { id: 'local', label: t('pricing.local') },
    { id: 'outstation', label: t('pricing.outstation') },
    { id: 'monthly', label: t('pricing.monthly') },
  ];

  return (
    <main className="bg-dark-50 min-h-screen">
      <SEOHead
        title={seoConfig.pricing.title}
        description={seoConfig.pricing.description}
        keywords={seoConfig.pricing.keywords}
        canonicalPath={seoConfig.pricing.canonicalPath}
        schemas={pageSchemas.pricing}
      />

      <section className="relative py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('pricing.title')}
            </h1>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto">
              {t('pricing.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <Check className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">No Hidden Charges</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-dark-600 hover:bg-dark-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Airport Pricing */}
          {activeTab === 'airport' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bg-white rounded-2xl shadow-card p-8 mb-8">
                <h2 className="text-2xl font-bold text-dark-900 mb-2">
                  {isHindi ? airportPricing.titleHi : airportPricing.title}
                </h2>
                <p className="text-dark-500 mb-8">
                  {isHindi ? airportPricing.descriptionHi : airportPricing.description}
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {vehicles.map((vehicle, i) => (
                    <div
                      key={vehicle.id}
                      className={`rounded-xl p-6 text-center ${
                        i === 1 ? 'bg-primary-500 text-white ring-4 ring-primary-200' : 'bg-dark-50'
                      }`}
                    >
                      <h3 className={`font-semibold mb-1 ${i === 1 ? 'text-white' : 'text-dark-900'}`}>
                        {vehicle.name}
                      </h3>
                      <p className={`text-sm mb-4 ${i === 1 ? 'text-primary-100' : 'text-dark-500'}`}>
                        {vehicle.models[0]}
                      </p>
                      <div className="text-4xl font-bold mb-4">
                        ₹{vehicle.airportPrice}
                      </div>
                      <p className={`text-sm ${i === 1 ? 'text-primary-100' : 'text-dark-500'}`}>
                        {isHindi ? 'टोल और पार्किंग अतिरिक्त' : 'Toll & parking extra'}
                      </p>
                      <Link
                        to="/booking"
                        className={`mt-6 block py-2.5 rounded-lg font-medium transition-colors ${
                          i === 1
                            ? 'bg-white text-primary-600 hover:bg-primary-50'
                            : 'bg-primary-500 text-white hover:bg-primary-600'
                        }`}
                      >
                        {t('cta.bookNow')}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">What's Included</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        {(isHindi ? airportPricing.inclusionsHi : airportPricing.inclusions).map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Local Packages */}
          {activeTab === 'local' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {localPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-2xl shadow-card p-8">
                  <h2 className="text-2xl font-bold text-dark-900 mb-2">
                    {isHindi ? pkg.titleHi : pkg.title}
                  </h2>
                  <p className="text-dark-500 mb-8">
                    {isHindi ? pkg.descriptionHi : pkg.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {vehicles.map((vehicle, i) => {
                      const rate = vehicle.id === 'sedan'
                        ? pkg.rates.sedan
                        : vehicle.id === 'xl'
                        ? pkg.rates.xl
                        : pkg.rates.premium;

                      return (
                        <div
                          key={vehicle.id}
                          className={`rounded-xl p-6 text-center ${
                            i === 1 ? 'bg-primary-500 text-white' : 'bg-dark-50'
                          }`}
                        >
                          <h3 className={`font-semibold mb-1 ${i === 1 ? 'text-white' : 'text-dark-900'}`}>
                            {vehicle.name}
                          </h3>
                          <div className="text-4xl font-bold my-4">
                            ₹{rate}
                          </div>
                          <Link
                            to="/booking"
                            className={`block py-2.5 rounded-lg font-medium transition-colors ${
                              i === 1
                                ? 'bg-white text-primary-600'
                                : 'bg-primary-500 text-white'
                            }`}
                          >
                            {t('cta.bookNow')}
                          </Link>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 p-4 bg-dark-50 rounded-xl">
                    <h4 className="font-semibold text-dark-900 mb-2">Included</h4>
                    <div className="flex flex-wrap gap-4">
                      {(isHindi ? pkg.inclusionsHi : pkg.inclusions).map((item, i) => (
                        <span key={i} className="flex items-center gap-2 text-sm text-dark-600">
                          <Check className="w-4 h-4 text-green-500" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Outstation Rates */}
          {activeTab === 'outstation' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bg-white rounded-2xl shadow-card p-8">
                <h2 className="text-2xl font-bold text-dark-900 mb-2">
                  {isHindi ? outstationRates.titleHi : outstationRates.title}
                </h2>
                <p className="text-dark-500 mb-8">
                  {isHindi ? outstationRates.descriptionHi : outstationRates.description}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {vehicles.map((vehicle, i) => (
                    <div
                      key={vehicle.id}
                      className={`rounded-xl p-6 text-center ${
                        i === 1 ? 'bg-primary-500 text-white' : 'bg-dark-50'
                      }`}
                    >
                      <h3 className={`font-semibold mb-1 ${i === 1 ? 'text-white' : 'text-dark-900'}`}>
                        {vehicle.name}
                      </h3>
                      <div className="text-4xl font-bold my-4">
                        ₹{vehicle.pricePerKm}
                        <span className="text-lg font-normal">/km</span>
                      </div>
                      <p className={`text-sm ${i === 1 ? 'text-primary-100' : 'text-dark-500'}`}>
                        Min 250 km/day
                      </p>
                      <Link
                        to="/booking"
                        className={`mt-4 block py-2.5 rounded-lg font-medium transition-colors ${
                          i === 1
                            ? 'bg-white text-primary-600'
                            : 'bg-primary-500 text-white'
                        }`}
                      >
                        {t('cta.bookNow')}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-amber-50 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-800 mb-1">Additional Charges</h4>
                      <ul className="text-sm text-amber-700 space-y-1">
                        <li>Driver night allowance: ₹400 (after 10 PM)</li>
                        <li>Parking, toll tax, state tax as applicable</li>
                        <li>Whichever is higher: extra hours or extra km</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Monthly Packages */}
          {activeTab === 'monthly' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bg-white rounded-2xl shadow-card p-8">
                <h2 className="text-2xl font-bold text-dark-900 mb-2">
                  {isHindi ? monthlyPackages.titleHi : monthlyPackages.title}
                </h2>
                <p className="text-dark-500 mb-8">
                  {isHindi ? monthlyPackages.descriptionHi : monthlyPackages.description}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {vehicles.map((vehicle, i) => (
                    <div
                      key={vehicle.id}
                      className={`rounded-xl p-6 ${
                        i === 1 ? 'bg-primary-500 text-white ring-4 ring-primary-200' : 'bg-dark-50'
                      }`}
                    >
                      <h3 className={`font-semibold text-lg mb-1 ${i === 1 ? 'text-white' : 'text-dark-900'}`}>
                        {vehicle.name}
                      </h3>
                      <p className={`text-sm mb-4 ${i === 1 ? 'text-primary-100' : 'text-dark-500'}`}>
                        {vehicle.models[0]}
                      </p>
                      <div className="text-4xl font-bold mb-4">
                        ₹{vehicle.monthlyPrice.toLocaleString()}
                      </div>
                      <p className={`text-sm mb-4 ${i === 1 ? 'text-primary-100' : 'text-dark-500'}`}>
                        per month
                      </p>
                      <ul className={`space-y-2 mb-6 ${i === 1 ? 'text-white' : 'text-dark-600'}`}>
                        {(isHindi ? monthlyPackages.inclusionsHi : monthlyPackages.inclusions).map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <Check className={`w-4 h-4 ${i === 1 ? 'text-primary-200' : 'text-green-500'}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className={`block text-center py-2.5 rounded-lg font-medium transition-colors ${
                          i === 1
                            ? 'bg-white text-primary-600'
                            : 'bg-primary-500 text-white'
                        }`}
                      >
                        {t('cta.getQuote')}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Extra Charges */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            title={t('pricing.extraCharges')}
            subtitle={isHindi ? 'अतिरिक्त शुल्कों की पूरी जानकारी' : 'Complete information about additional charges'}
          />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {extraCharges.map((charge, i) => (
              <div key={i} className="bg-dark-50 rounded-xl p-4 text-center">
                <h4 className="font-medium text-dark-900 mb-1">
                  {isHindi ? charge.titleHi : charge.title}
                </h4>
                <p className="text-2xl font-bold text-primary-600">
                  ₹{charge.amount}
                  <span className="text-sm font-normal text-dark-500">
                    {isHindi ? charge.unitHi : charge.unit}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {isHindi ? 'किसी भी प्रश्न के लिए संपर्क करें' : 'Have Questions About Pricing?'}
          </h2>
          <p className="text-primary-100 mb-8">
            {isHindi
              ? 'हम आपको सर्वोत्तम दर प्रदान करने के लिए तैयार हैं'
              : 'We\'re here to help you find the best rates for your travel needs'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
            >
              {t('contact.title')}
            </Link>
            <Link
              to="/booking"
              className="flex items-center gap-2 px-8 py-3 bg-primary-400/30 text-white font-semibold rounded-xl hover:bg-primary-400/40 transition-colors"
            >
              {t('cta.bookNow')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
