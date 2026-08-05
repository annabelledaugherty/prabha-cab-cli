import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import SEOHead from '../components/seo/SEOHead';
import { seoConfig } from '../data/seoConfig';
import { pageSchemas } from '../data/seoSchemas';
import RouteCard from '../components/ui/RouteCard';
import { routes, routeCategories } from '../data/routes';

export default function RoutesPage() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRoutes = routes.filter((route) => {
    const matchesCategory = activeCategory === 'all' || route.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      route.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.nameHi.includes(searchQuery) ||
      route.state.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const groupedRoutes = routeCategories
    .filter((cat) => cat.id !== 'all')
    .map((cat) => ({
      ...cat,
      routes: routes.filter((r) => r.category === cat.id),
    }));

  return (
    <main className="bg-dark-50 min-h-screen">
      <SEOHead
        title={seoConfig.routes.title}
        description={seoConfig.routes.description}
        keywords={seoConfig.routes.keywords}
        canonicalPath={seoConfig.routes.canonicalPath}
        schemas={pageSchemas.routes}
      />

      <section className="relative py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('routes.title')}
            </h1>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto mb-8">
              {t('routes.subtitle')}
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isHindi ? 'गंतव्य खोजें...' : 'Search destinations...'}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder-dark-400 focus:border-primary-500 outline-none transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Routes */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {routeCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-dark-600 hover:bg-dark-50'
                }`}
              >
                {isHindi ? cat.labelHi : cat.label}
              </button>
            ))}
          </div>

          {/* Routes Grid */}
          {activeCategory === 'all' && searchQuery === '' ? (
            // Show grouped by category
            <div className="space-y-16">
              {groupedRoutes.map((group) => (
                <div key={group.id}>
                  <h2 className="text-2xl font-bold text-dark-900 mb-6 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary-500" />
                    {isHindi ? group.labelHi : group.label}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {group.routes.map((route, i) => (
                      <motion.div
                        key={route.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <RouteCard route={route} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Show filtered results
            <>
              {filteredRoutes.length === 0 ? (
                <div className="text-center py-16">
                  <MapPin className="w-16 h-16 text-dark-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-dark-700 mb-2">
                    {isHindi ? 'कोई गंतव्य नहीं मिला' : 'No destinations found'}
                  </h3>
                  <p className="text-dark-500">
                    {isHindi
                      ? 'अपनी खोज बदलने का प्रयास करें'
                      : 'Try adjusting your search or filter'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredRoutes.map((route, i) => (
                    <motion.div
                      key={route.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <RouteCard route={route} />
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            title={isHindi ? 'आउटस्टेशन बुकिंग जानकारी' : 'Outstation Booking Information'}
            subtitle={isHindi ? 'आउटस्टेशन ट्रिप्स के बारे में महत्वपूर्ण जानकारी' : 'Important information about outstation trips'}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-dark-50 rounded-xl p-6">
              <h3 className="font-semibold text-dark-900 mb-4">
                {isHindi ? 'दर जानकारी' : 'Rate Information'}
              </h3>
              <ul className="space-y-3 text-dark-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  <span>{isHindi ? 'न्यूनतम बिलिंग: प्रति दिन 250 किमी' : 'Minimum billing: 250 km per day'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  <span>{isHindi ? 'राउंड ट्रिप में दोनों तरफ की दूरी शामिल' : 'Round trip includes both way distance'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  <span>{isHindi ? 'रात भत्ता: रात 10 बजे के बाद ₹400' : 'Night allowance: ₹400 after 10 PM'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark-50 rounded-xl p-6">
              <h3 className="font-semibold text-dark-900 mb-4">
                {isHindi ? 'अतिरिक्त शुल्क' : 'Additional Charges'}
              </h3>
              <ul className="space-y-3 text-dark-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  <span>{isHindi ? 'टोल टैक्स: जैसा लागू हो' : 'Toll tax: As applicable'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  <span>{isHindi ? 'राज्य कर: जैसा लागू हो' : 'State tax: As applicable'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  <span>{isHindi ? 'पार्किंग शुल्क: जैसा लागू हो' : 'Parking charges: As applicable'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Destination */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {isHindi ? 'अपना गंतव्य नहीं मिला?' : "Can't Find Your Destination?"}
          </h2>
          <p className="text-primary-100 mb-8">
            {isHindi
              ? 'हम भारत में कहीं भी ट्रिप की व्यवस्था कर सकते हैं। बस हमें बताएं कि आप कहाँ जाना चाहते हैं!'
              : "We can arrange trips anywhere in India. Just let us know where you want to go!"}
          </p>
          <a
            href="https://wa.me/919718437625?text=Hi, I want to book a cab to a custom destination"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
          >
            {isHindi ? 'कस्टम ट्रिप बुक करें' : 'Book Custom Trip'}
          </a>
        </div>
      </section>
    </main>
  );
}
