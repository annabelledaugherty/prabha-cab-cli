import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Phone, MessageCircle, Clock, Shield, CheckCircle, ChevronDown,
  Plane, MapPin, ChevronRight, ArrowRight, Navigation, Star, Car
} from 'lucide-react';
import SEOHead from '../seo/SEOHead';
import Breadcrumb from '../seo/Breadcrumb';
import { generateWhatsAppUrl, callPhone } from '../../utils/whatsappHelper';

export interface AirportPageConfig {
  from: string;
  fromShort: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalPath: string;
  heroImage: string;
  intro: string;
  distance: string;
  duration: string;
  pricing: { vehicle: string; capacity: string; price: string; note?: string }[];
  terminals: { name: string; desc: string }[];
  processSteps: { step: string; title: string; desc: string }[];
  tips: string[];
  faqs: { q: string; a: string }[];
  schemas: object[];
}

export default function AirportServicePage({ config }: { config: AirportPageConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = generateWhatsAppUrl(
    `Hi, I need airport cab from ${config.from} to Delhi Airport (IGI). Please confirm availability and fare.`
  );

  return (
    <main className="bg-dark-50">
      <SEOHead
        title={config.metaTitle}
        description={config.metaDescription}
        keywords={config.keywords}
        canonicalPath={config.canonicalPath}
        schemas={config.schemas}
      />

      <header className="relative py-20 bg-dark-900 overflow-hidden" role="banner">
        <div className="absolute inset-0">
          <img
            src={config.heroImage}
            alt={`Airport taxi from ${config.from} to Delhi IGI Airport`}
            className="w-full h-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 to-dark-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { label: 'Services', path: '/services' },
                { label: 'Airport Transfer', path: '/services' },
                { label: `${config.from} to Delhi Airport` },
              ]}
              light
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium mb-5">
              <Plane className="w-4 h-4" />
              All Terminals Covered — T1, T2, T3
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {config.from} to Delhi Airport Taxi
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                <Navigation className="w-4 h-4 text-primary-400" />
                <span className="text-white text-sm font-medium">{config.distance}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                <Clock className="w-4 h-4 text-primary-400" />
                <span className="text-white text-sm font-medium">{config.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                <Star className="w-4 h-4 text-primary-400" />
                <span className="text-white text-sm font-medium">4.8★ Rated</span>
              </div>
            </div>
            <p className="text-dark-200 mb-8 leading-relaxed max-w-2xl">{config.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919718437625"
                onClick={() => callPhone()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now: 9718437625
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Booking
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="py-16 bg-white" aria-labelledby="pricing-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="pricing-heading" className="text-3xl font-bold text-dark-900 mb-3">
              {config.from} to IGI Airport — Cab Fare
            </h2>
            <p className="text-dark-500 max-w-2xl mx-auto">
              Transparent, fixed fare with no surge pricing. Toll and parking charges are disclosed upfront at the time of booking.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {config.pricing.map((pkg, idx) => (
              <motion.div
                key={pkg.vehicle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl p-6 border-2 text-center ${idx === 2 ? 'border-primary-400 bg-primary-50' : 'border-dark-200 bg-dark-50'}`}
              >
                <Car className="w-10 h-10 mx-auto mb-3 text-primary-500" />
                <h3 className="text-lg font-bold text-dark-900 mb-1">{pkg.vehicle}</h3>
                <p className="text-sm text-dark-500 mb-4">{pkg.capacity}</p>
                <p className="text-3xl font-bold text-primary-600 mb-2">{pkg.price}</p>
                {pkg.note && <p className="text-xs text-dark-400">{pkg.note}</p>}
                <a
                  href={generateWhatsAppUrl(`Hi, I want to book ${pkg.vehicle} from ${config.from} to Delhi Airport. Fare: ${pkg.price}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-500 text-white rounded-xl text-sm font-semibold hover:bg-primary-600 transition-colors"
                >
                  Book This Vehicle
                </a>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-dark-400">
              * Toll charges extra (approx. Rs.200-300). Parking charges extra. Night allowance Rs.400 after 10 PM.
            </p>
            <p className="text-sm text-dark-400 mt-1">
              Free waiting time: 30 min for domestic, 60 min for international flights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-50" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="process-heading" className="text-3xl font-bold text-dark-900 mb-4">
              How to Book Airport Taxi from {config.from}
            </h2>
            <p className="text-dark-500">Simple 3-step process to book your airport cab</p>
          </div>
          <div className="space-y-4">
            {config.processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-5 bg-white rounded-2xl p-6 border border-dark-100"
              >
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900 text-lg mb-1">{step.title}</h3>
                  <p className="text-dark-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="terminals-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 id="terminals-heading" className="text-2xl font-bold text-dark-900 mb-6">
                All IGI Airport Terminals Covered
              </h2>
              <div className="space-y-4">
                {config.terminals.map((terminal) => (
                  <div key={terminal.name} className="flex gap-4 p-4 bg-dark-50 rounded-xl border border-dark-100">
                    <Plane className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dark-900">{terminal.name}</p>
                      <p className="text-dark-500 text-sm">{terminal.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 mb-6">
                Travel Tips for Airport Transfer
              </h2>
              <ul className="space-y-3">
                {config.tips.map((tip, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-dark-600 text-sm leading-relaxed">{tip}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 bg-primary-50 rounded-2xl border border-primary-200">
                <Shield className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="font-semibold text-dark-900 mb-2">Flight Tracking Included</h3>
                <p className="text-dark-600 text-sm">
                  We track your flight in real-time and adjust pickup time automatically if your flight is delayed. No extra charge for monitored wait time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-50" aria-labelledby="faq-airport-heading">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="faq-airport-heading" className="text-3xl font-bold text-dark-900 mb-4">
              FAQs — {config.from} to Delhi Airport Taxi
            </h2>
          </div>
          <div className="space-y-3">
            {config.faqs.map((faq, idx) => (
              <div key={idx} className="border border-dark-200 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-dark-50 transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-medium text-dark-900 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-dark-400 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 bg-dark-50 border-t border-dark-100">
                    <p className="text-dark-600 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Plane className="w-12 h-12 text-primary-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book Your Airport Cab?
          </h2>
          <p className="text-dark-300 mb-8 max-w-2xl mx-auto">
            Don't risk missing your flight. Book a reliable Prabha Cab from {config.from} to Delhi Airport now. Professional, punctual, 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919718437625"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call: +91 9718437625
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-colors"
            >
              Book Online
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Flight Tracking', icon: Plane },
              { label: '24/7 Available', icon: Clock },
              { label: 'Fixed Fares', icon: CheckCircle },
              { label: 'Safe & Reliable', icon: Shield },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 p-3 bg-dark-800 rounded-xl">
                <item.icon className="w-5 h-5 text-primary-400" />
                <span className="text-white text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
