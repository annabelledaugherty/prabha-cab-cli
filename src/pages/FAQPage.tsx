import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, Phone, MessageCircle, HelpCircle } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import { seoConfig } from '../data/seoConfig';
import { pageSchemas } from '../data/seoSchemas';
import { callPhone, generateWhatsAppUrl } from '../utils/whatsappHelper';

export default function FAQPage() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: isHindi ? 'सभी' : 'All' },
    { id: 'booking', label: isHindi ? 'बुकिंग' : 'Booking' },
    { id: 'pricing', label: isHindi ? 'मूल्य' : 'Pricing' },
    { id: 'vehicles', label: isHindi ? 'वाहन' : 'Vehicles' },
    { id: 'safety', label: isHindi ? 'सुरक्षा' : 'Safety' },
  ];

  const faqs = [
    {
      category: 'booking',
      q: isHindi ? 'मैं कैब कैसे बुक करूं?' : 'How do I book a cab?',
      a: isHindi
        ? 'आप व्हाट्सएप, फोन कॉल, या हमारी वेबसाइट बुकिंग फॉर्म के माध्यम से बुक कर सकते हैं। हम 24/7 उपलब्ध हैं।'
        : 'You can book via WhatsApp, phone call, or through our website booking form. We\'re available 24/7.',
    },
    {
      category: 'booking',
      q: isHindi ? 'क्या मुझे अग्रिम बुकिंग करनी होगी?' : 'Do I need to book in advance?',
      a: isHindi
        ? 'तत्काल बुकिंग उपलब्ध है, लेकिन पीक सीजन और लंबी यात्राओं के लिए अग्रिम बुकिंग की सलाह दी जाती है।'
        : 'Instant booking is available, but advance booking is recommended for peak seasons and long trips.',
    },
    {
      category: 'booking',
      q: isHindi ? 'आपकी रद्दीकरण नीति क्या है?' : 'What is your cancellation policy?',
      a: isHindi
        ? 'पिकअप से 2 घंटे पहले तक मुफ्त रद्दीकरण। 2 घंटे के भीतर रद्दीकरण पर शुल्क लग सकता है।'
        : 'Free cancellation up to 2 hours before pickup. Cancellations within 2 hours may incur charges.',
    },
    {
      category: 'booking',
      q: isHindi ? 'क्या मैं बुकिंग में बदलाव कर सकता हूं?' : 'Can I modify my booking?',
      a: isHindi
        ? 'हां, आप व्हाट्सएप या कॉल करके बुकिंग में बदलाव कर सकते हैं। परिवर्तन उपलब्धता के अधीन हैं।'
        : 'Yes, you can modify your booking by calling or WhatsApp. Changes are subject to availability.',
    },
    {
      category: 'pricing',
      q: isHindi ? 'आपकी एयरपोर्ट ट्रांसफर दर क्या है?' : 'What are your airport transfer rates?',
      a: isHindi
        ? 'ग्रेटर नोएडा/नोएडा से IGI एयरपोर्ट: सेडान ₹2,200, XL ₹2,500, प्रीमियम ₹3,500। सभी शुल्क शामिल।'
        : 'Greater Noida/Noida to IGI Airport: Sedan ₹2,200, XL ₹2,500, Premium ₹3,500. All inclusive.',
    },
    {
      category: 'pricing',
      q: isHindi ? 'आउटस्टेशन ट्रिप के लिए न्यूनतम बिलिंग क्या है?' : 'What is the minimum billing for outstation trips?',
      a: isHindi
        ? 'आउटस्टेशन ट्रिप के लिए प्रति दिन न्यूनतम 250 किमी बिलिंग है।'
        : 'Minimum billing for outstation trips is 250 km per day.',
    },
    {
      category: 'pricing',
      q: isHindi ? 'क्या कोई छिपे हुए शुल्क हैं?' : 'Are there any hidden charges?',
      a: isHindi
        ? 'नहीं, हम पारदर्शी मूल्य प्रदान करते हैं। अतिरिक्त शुल्क जैसे टोल, पार्किंग, रात भत्ता पहले से बताए जाते हैं।'
        : 'No, we offer transparent pricing. Extra charges like toll, parking, night allowance are disclosed upfront.',
    },
    {
      category: 'pricing',
      q: isHindi ? 'आप कौन से भुगतान के तरीके स्वीकार करते हैं?' : 'What payment methods do you accept?',
      a: isHindi
        ? 'हम कैश, UPI, और बैंक ट्रांसफर स्वीकार करते हैं। कॉर्पोरेट क्लाइंट मासिक बिलिंग का लाभ उठा सकते हैं।'
        : 'We accept cash, UPI, and bank transfers. Corporate clients can avail monthly billing.',
    },
    {
      category: 'vehicles',
      q: isHindi ? 'आपके पास कौन से वाहन उपलब्ध हैं?' : 'What vehicles do you have available?',
      a: isHindi
        ? 'हमारे पास सेडान (Dzire, Aura, Xcent), XL/SUV (XL6, Ertiga), और प्रीमियम SUV (Innova Crysta) उपलब्ध हैं।'
        : 'We have Sedan (Dzire, Aura, Xcent), XL/SUV (XL6, Ertiga), and Premium SUV (Innova Crysta) available.',
    },
    {
      category: 'vehicles',
      q: isHindi ? 'एक वाहन में कितने यात्री बैठ सकते हैं?' : 'How many passengers can fit in each vehicle?',
      a: isHindi
        ? 'सेडान: 4 यात्री, XL/SUV: 6 यात्री, प्रीमियम SUV: 7 यात्री।'
        : 'Sedan: 4 passengers, XL/SUV: 6 passengers, Premium SUV: 7 passengers.',
    },
    {
      category: 'vehicles',
      q: isHindi ? 'क्या वाहनों में AC है?' : 'Are the vehicles air-conditioned?',
      a: isHindi
        ? 'हां, सभी वाहन पूर्ण रूप से वातानुकूलित हैं और म्यूजिक सिस्टम, फोन चार्जिंग से सुसज्जित हैं।'
        : 'Yes, all vehicles are fully air-conditioned and equipped with music system and phone charging.',
    },
    {
      category: 'safety',
      q: isHindi ? 'क्या आपके ड्राइवर सत्यापित हैं?' : 'Are your drivers verified?',
      a: isHindi
        ? 'हां, सभी ड्राइवर गहन बैकग्राउंड सत्यापन से गुजरते हैं और पेशेवर रूप से प्रशिक्षित हैं।'
        : 'Yes, all our drivers undergo thorough background verification and are professionally trained.',
    },
    {
      category: 'safety',
      q: isHindi ? 'क्या वाहनों का बीमा है?' : 'Are the vehicles insured?',
      a: isHindi
        ? 'हां, सभी वाहन पूर्ण रूप से बीमित हैं और येलो प्लेट अनुपालन हैं।'
        : 'Yes, all vehicles are fully insured and yellow plate compliant.',
    },
    {
      category: 'safety',
      q: isHindi ? 'क्या GPS ट्रैकिंग उपलब्ध है?' : 'Is GPS tracking available?',
      a: isHindi
        ? 'हां, सभी वाहन GPS से लैस हैं जो रीयल-टाइम ट्रैकिंग सुनिश्चित करते हैं।'
        : 'Yes, all vehicles are GPS enabled ensuring real-time tracking for your safety.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-dark-50 min-h-screen">
      <SEOHead
        title={seoConfig.faq.title}
        description={seoConfig.faq.description}
        keywords={seoConfig.faq.keywords}
        canonicalPath={seoConfig.faq.canonicalPath}
        schemas={pageSchemas.faq}
      />

      <section className="relative py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('faq.title')}
            </h1>
            <p className="text-lg text-dark-300 max-w-2xl mx-auto mb-8">
              {t('faq.subtitle')}
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isHindi ? 'प्रश्न खोजें...' : 'Search questions...'}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-xl text-white placeholder-dark-400 focus:border-primary-500 outline-none transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-dark-600 hover:bg-dark-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle className="w-16 h-16 text-dark-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-dark-700 mb-2">
                {isHindi ? 'कोई प्रश्न नहीं मिला' : 'No questions found'}
              </h3>
              <p className="text-dark-500">
                {isHindi
                  ? 'अपनी खोज बदलने का प्रयास करें'
                  : 'Try adjusting your search or filter'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-white rounded-xl shadow-card group"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="font-medium text-dark-900 pr-4">{faq.q}</span>
                    <ChevronRight className="w-5 h-5 text-dark-400 transition-transform group-open:rotate-90 flex-shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-dark-600">
                    {faq.a}
                  </div>
                </motion.details>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-900 mb-4">
            {isHindi ? 'अभी भी प्रश्न हैं?' : 'Still Have Questions?'}
          </h2>
          <p className="text-dark-500 mb-8">
            {isHindi
              ? 'हमसे सीधे संपर्क करें, हम मदद के लिए तैयार हैं'
              : "Contact us directly, we're here to help"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => callPhone('9718437625')}
              className="flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {t('cta.callNow')}
            </button>
            <button
              onClick={() => window.open(generateWhatsAppUrl('Hi, I have a question.'), '_blank')}
              className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 bg-dark-100 text-dark-700 font-semibold rounded-xl hover:bg-dark-200 transition-colors"
            >
              {t('contact.title')}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
