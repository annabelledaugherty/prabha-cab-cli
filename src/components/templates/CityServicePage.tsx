import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Phone, MessageCircle, MapPin, Clock, Shield, Star, CheckCircle,
  ChevronDown, ChevronRight, Car, Plane, Navigation, Building2,
  Users, Award, Sparkles, ArrowRight
} from 'lucide-react';
import SEOHead from '../seo/SEOHead';
import Breadcrumb from '../seo/Breadcrumb';
import { generateWhatsAppUrl, callPhone } from '../../utils/whatsappHelper';

export interface CityPageConfig {
  city: string;
  cityFull: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalPath: string;
  heroImage: string;
  heroTagline: string;
  intro: string;
  whyChooseUs: string;
  services: { title: string; desc: string; price: string; icon: string }[];
  pricing: { vehicle: string; airport: string; local8hr: string; outstationPerKm: string }[];
  popularRoutes: { to: string; distance: string; time: string; price: string; path: string }[];
  serviceAreas: string[];
  faqs: { q: string; a: string }[];
  schemas: object[];
}

const iconMap: Record<string, React.ReactNode> = {
  plane: <Plane className="w-6 h-6" />,
  map: <MapPin className="w-6 h-6" />,
  nav: <Navigation className="w-6 h-6" />,
  building: <Building2 className="w-6 h-6" />,
  car: <Car className="w-6 h-6" />,
};

export default function CityServicePage({ config }: { config: CityPageConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatsappUrl = generateWhatsAppUrl(`Hi, I need a cab in ${config.city}. Please help me with booking.`);

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
            alt={`Taxi service in ${config.city}`}
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="mb-4">
            <Breadcrumb
              items={[
                { label: 'Services', path: '/services' },
                { label: `Taxi Service in ${config.city}` },
              ]}
              light
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium mb-5">
              <Clock className="w-4 h-4" />
              Available 24/7
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Taxi Service in {config.cityFull}
            </h1>
            <p className="text-lg text-dark-200 mb-3">{config.heroTagline}</p>
            <p className="text-dark-300 mb-8 leading-relaxed max-w-2xl">{config.intro}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:+919718437625`}
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
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                Book Online
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="py-8 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
            {[
              { label: 'Starting Fare', value: '₹1,600', sub: 'local package' },
              { label: 'Airport Transfer', value: '₹2,200', sub: 'sedan' },
              { label: 'Rating', value: '4.8★', sub: '850+ reviews' },
              { label: 'Availability', value: '24/7', sub: 'all days' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                <p className="text-sm font-medium opacity-90">{stat.label}</p>
                <p className="text-xs opacity-70">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="text-3xl font-bold text-dark-900 mb-4">
              Cab Services Available in {config.city}
            </h2>
            <p className="text-dark-500 max-w-2xl mx-auto">
              Prabha Cab offers a full range of professional taxi services in {config.city} and surrounding areas of Delhi NCR.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-dark-50 rounded-2xl p-6 border border-dark-100 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                  {iconMap[service.icon] ?? <Car className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">{service.title}</h3>
                <p className="text-dark-500 text-sm mb-3 leading-relaxed">{service.desc}</p>
                <p className="text-primary-600 font-semibold text-sm">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-50" aria-labelledby="pricing-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="pricing-heading" className="text-3xl font-bold text-dark-900 mb-4">
              Taxi Fare in {config.city} — Transparent Pricing
            </h2>
            <p className="text-dark-500 max-w-2xl mx-auto">
              No hidden charges. All prices are upfront and inclusive of base fare. Toll, parking and night allowance (Rs.400 after 10 PM) are charged extra.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-dark-200 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-dark-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Vehicle</th>
                  <th className="text-center px-4 py-4 font-semibold">Airport Transfer</th>
                  <th className="text-center px-4 py-4 font-semibold">Local 8hr/80km</th>
                  <th className="text-center px-4 py-4 font-semibold">Outstation /km</th>
                </tr>
              </thead>
              <tbody>
                {config.pricing.map((row, idx) => (
                  <tr key={row.vehicle} className={idx % 2 === 0 ? 'bg-white' : 'bg-dark-50'}>
                    <td className="px-6 py-4 font-medium text-dark-900">{row.vehicle}</td>
                    <td className="px-4 py-4 text-center text-dark-700">{row.airport}</td>
                    <td className="px-4 py-4 text-center text-dark-700">{row.local8hr}</td>
                    <td className="px-4 py-4 text-center text-primary-600 font-semibold">{row.outstationPerKm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-dark-400 mt-3 text-center">
            * Minimum outstation billing: 250 km/day. Extra hour: Rs.150. Night allowance Rs.400 after 10 PM.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="routes-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="routes-heading" className="text-3xl font-bold text-dark-900 mb-4">
              Popular Routes from {config.city}
            </h2>
            <p className="text-dark-500 max-w-2xl mx-auto">
              One-way and round-trip outstation cab service from {config.city} to top destinations. Book online or call +91 9718437625.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.popularRoutes.map((route, idx) => (
              <motion.div
                key={route.to}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="flex items-center justify-between bg-dark-50 rounded-xl px-5 py-4 border border-dark-100 hover:border-primary-300 hover:shadow-sm transition-all group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    <p className="font-semibold text-dark-900">
                      {config.city} → {route.to}
                    </p>
                  </div>
                  <p className="text-xs text-dark-400">{route.distance} • {route.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-primary-600 font-bold">{route.price}</p>
                  {route.path ? (
                    <Link to={route.path} className="text-xs text-dark-400 group-hover:text-primary-600 transition-colors">
                      View details →
                    </Link>
                  ) : (
                    <a
                      href={generateWhatsAppUrl(`Hi, I need a cab from ${config.city} to ${route.to}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-dark-400 group-hover:text-primary-600 transition-colors"
                    >
                      Book now →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/routes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors"
            >
              View All 40+ Routes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-900" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="why-heading" className="text-3xl font-bold text-white mb-4">
                Why Choose Prabha Cab in {config.city}?
              </h2>
              <p className="text-dark-300 mb-8 leading-relaxed">{config.whyChooseUs}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: '24/7 Service', desc: 'Available round the clock, every day' },
                  { icon: Shield, label: 'Safe & Verified', desc: 'Background-checked professional drivers' },
                  { icon: CheckCircle, label: 'No Hidden Charges', desc: 'Transparent pricing, upfront quotes' },
                  { icon: Sparkles, label: 'Clean Vehicles', desc: 'Regularly sanitized, well-maintained fleet' },
                  { icon: Star, label: '4.8★ Rating', desc: '850+ happy customer reviews' },
                  { icon: Award, label: 'Since 2016', desc: 'Trusted service with proven track record' },
                ].map((feature) => (
                  <div key={feature.label} className="flex items-start gap-3 p-4 bg-dark-800 rounded-xl">
                    <feature.icon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm">{feature.label}</p>
                      <p className="text-dark-400 text-xs mt-0.5">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-dark-800 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  Service Coverage in {config.city}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {config.serviceAreas.map((area) => (
                    <span key={area} className="px-3 py-1 bg-dark-700 text-dark-200 rounded-full text-xs">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-primary-500 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-2">Need a Cab Right Now?</h3>
                <p className="text-primary-100 text-sm mb-4">
                  Instant booking available 24/7. Call or WhatsApp us for immediate cab in {config.city}.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+919718437625"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-primary-600 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    9718437625
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/20 text-white border border-white/30 rounded-xl font-semibold text-sm hover:bg-white/30 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl font-bold text-dark-900 mb-4">
              Frequently Asked Questions — Taxi Service in {config.city}
            </h2>
            <p className="text-dark-500">
              Common questions about cab booking in {config.city} and surrounding areas.
            </p>
          </div>
          <div className="space-y-3">
            {config.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="border border-dark-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-dark-50 transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-medium text-dark-900 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-dark-400 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 bg-dark-50 border-t border-dark-200">
                    <p className="text-dark-600 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Users className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Book Your Cab in {config.city} Today
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Prabha Cab is your trusted taxi partner in {config.cityFull}. Available 24/7 for airport transfers, local rides, outstation trips and corporate travel. Call now for instant booking.
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
              Online Booking Form
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
