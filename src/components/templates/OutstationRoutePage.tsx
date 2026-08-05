import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Phone, MessageCircle, Clock, Shield, CheckCircle, ChevronDown,
  MapPin, ChevronRight, Navigation, Star, Car, Sun, Camera, ArrowRight
} from 'lucide-react';
import SEOHead from '../seo/SEOHead';
import Breadcrumb from '../seo/Breadcrumb';
import { generateWhatsAppUrl, callPhone } from '../../utils/whatsappHelper';

export interface RoutePageConfig {
  from: string;
  to: string;
  toFull: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalPath: string;
  heroImage: string;
  distance: string;
  duration: string;
  bestTime: string;
  routeDescription: string;
  destinationDescription: string;
  pricing: { vehicle: string; capacity: string; oneWay: string; roundTrip: string }[];
  touristPlaces: { name: string; desc: string }[];
  inclusions: string[];
  nearbyRoutes: { to: string; distance: string; path?: string }[];
  faqs: { q: string; a: string }[];
  schemas: object[];
}

export default function OutstationRoutePage({ config }: { config: RoutePageConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const whatsappUrl = generateWhatsAppUrl(
    `Hi, I need a cab from ${config.from} to ${config.to}. Please share fare and availability.`
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
            alt={`${config.from} to ${config.to} taxi cab service`}
            className="w-full h-full object-cover opacity-35"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/75 to-dark-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { label: 'Routes', path: '/routes' },
                { label: `${config.from} to ${config.to}` },
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
              <Navigation className="w-4 h-4" />
              One-Way & Round-Trip Available
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {config.from} to {config.to} Taxi
            </h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                <Navigation className="w-4 h-4 text-primary-400" />
                <span className="text-white text-sm">{config.distance}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                <Clock className="w-4 h-4 text-primary-400" />
                <span className="text-white text-sm">{config.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                <Sun className="w-4 h-4 text-primary-400" />
                <span className="text-white text-sm">Best: {config.bestTime}</span>
              </div>
            </div>
            <p className="text-dark-200 mb-8 leading-relaxed max-w-2xl">{config.routeDescription}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919718437625"
                onClick={() => callPhone()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call: 9718437625
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

      <section className="py-16 bg-white" aria-labelledby="fare-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="fare-heading" className="text-3xl font-bold text-dark-900 mb-3">
              {config.from} to {config.to} Cab Fare
            </h2>
            <p className="text-dark-500 max-w-2xl mx-auto">
              Fixed, transparent pricing with no hidden charges. Minimum billing: 250 km/day. Toll, parking & night allowance (Rs.400 after 10 PM) extra.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-dark-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-dark-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Vehicle Type</th>
                  <th className="text-center px-4 py-4 font-semibold">Capacity</th>
                  <th className="text-center px-4 py-4 font-semibold">One Way</th>
                  <th className="text-center px-4 py-4 font-semibold">Round Trip</th>
                  <th className="text-center px-4 py-4 font-semibold">Book</th>
                </tr>
              </thead>
              <tbody>
                {config.pricing.map((row, idx) => (
                  <tr key={row.vehicle} className={idx % 2 === 0 ? 'bg-white' : 'bg-dark-50'}>
                    <td className="px-6 py-4 font-medium text-dark-900">{row.vehicle}</td>
                    <td className="px-4 py-4 text-center text-dark-600">{row.capacity}</td>
                    <td className="px-4 py-4 text-center text-primary-600 font-semibold">{row.oneWay}</td>
                    <td className="px-4 py-4 text-center text-dark-600">{row.roundTrip}</td>
                    <td className="px-4 py-4 text-center">
                      <a
                        href={generateWhatsAppUrl(`Hi, I need ${row.vehicle} from ${config.from} to ${config.to}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary-500 text-white rounded-lg text-xs font-semibold hover:bg-primary-600 transition-colors"
                      >
                        <MessageCircle className="w-3 h-3" />
                        Book
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Experienced outstation drivers',
              'AC vehicles, all well-maintained',
              'GPS tracked for your safety',
              'No surge pricing, fixed fares',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 p-3 bg-dark-50 rounded-xl border border-dark-100">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-dark-600 text-xs">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-50" aria-labelledby="about-dest-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 id="about-dest-heading" className="text-2xl font-bold text-dark-900 mb-4">
                About {config.toFull}
              </h2>
              <p className="text-dark-600 leading-relaxed mb-6">{config.destinationDescription}</p>
              <div>
                <h3 className="text-lg font-semibold text-dark-900 mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary-500" />
                  Top Tourist Places in {config.to}
                </h3>
                <div className="space-y-3">
                  {config.touristPlaces.map((place) => (
                    <div key={place.name} className="flex gap-3 p-3 bg-white rounded-xl border border-dark-100">
                      <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-dark-900 text-sm">{place.name}</p>
                        <p className="text-dark-500 text-xs">{place.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-dark-900 mb-4">
                  What's Included in Your Cab Package
                </h3>
                <ul className="space-y-2">
                  {config.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-dark-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6">
                <Sun className="w-8 h-8 text-primary-500 mb-3" />
                <h3 className="font-semibold text-dark-900 mb-2">Best Time to Visit {config.to}</h3>
                <p className="text-dark-600 text-sm">{config.bestTime}</p>
              </div>
              <div className="bg-dark-900 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3">Book {config.from} to {config.to} Cab Now</h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+919718437625"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-500 text-white rounded-xl font-semibold text-sm hover:bg-primary-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call: +91 9718437625
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 text-white rounded-xl font-semibold text-sm hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Booking
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {config.nearbyRoutes.length > 0 && (
        <section className="py-12 bg-white" aria-labelledby="nearby-heading">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="nearby-heading" className="text-2xl font-bold text-dark-900 mb-6">
              Other Popular Routes from {config.from}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {config.nearbyRoutes.map((route) => (
                route.path ? (
                  <Link
                    key={route.to}
                    to={route.path}
                    className="flex items-center justify-between p-4 bg-dark-50 rounded-xl border border-dark-100 hover:border-primary-300 hover:shadow-sm transition-all group"
                  >
                    <div>
                      <p className="font-medium text-dark-900 text-sm group-hover:text-primary-600 transition-colors">
                        → {route.to}
                      </p>
                      <p className="text-xs text-dark-400">{route.distance}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-dark-300 group-hover:text-primary-500 transition-colors" />
                  </Link>
                ) : (
                  <a
                    key={route.to}
                    href={generateWhatsAppUrl(`Hi, I need a cab from ${config.from} to ${route.to}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-dark-50 rounded-xl border border-dark-100 hover:border-primary-300 hover:shadow-sm transition-all group"
                  >
                    <div>
                      <p className="font-medium text-dark-900 text-sm group-hover:text-primary-600 transition-colors">
                        → {route.to}
                      </p>
                      <p className="text-xs text-dark-400">{route.distance}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-dark-300 group-hover:text-primary-500 transition-colors" />
                  </a>
                )
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                to="/routes"
                className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                View All Routes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-dark-50" aria-labelledby="faq-route-heading">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="faq-route-heading" className="text-3xl font-bold text-dark-900 mb-4">
              FAQs — {config.from} to {config.to} Cab
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

      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Car className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Book Your {config.from} to {config.to} Cab Now
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Travel comfortably from {config.from} to {config.toFull} with Prabha Cab's reliable outstation taxi service. Professional drivers, AC vehicles, transparent pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919718437625"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary-600 rounded-xl font-bold hover:bg-primary-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call: +91 9718437625
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/20 text-white border-2 border-white/40 rounded-xl font-bold hover:bg-white/30 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Booking
            </a>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-colors"
            >
              Online Booking
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
