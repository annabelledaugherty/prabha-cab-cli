import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Testimonial } from '../../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white rounded-2xl shadow-card p-6 h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={isHindi ? testimonial.nameHi : testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-dark-900">
              {isHindi ? testimonial.nameHi : testimonial.name}
            </h4>
            <p className="text-sm text-dark-500">
              {isHindi ? testimonial.locationHi : testimonial.location}
            </p>
          </div>
        </div>
        <Quote className="w-8 h-8 text-primary-200" />
      </div>

      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating ? 'text-primary-500 fill-primary-500' : 'text-dark-200'
            }`}
          />
        ))}
      </div>

      <p className="text-dark-600 text-sm leading-relaxed flex-1 mb-4">
        "{isHindi ? testimonial.textHi : testimonial.text}"
      </p>

      <div className="pt-3 border-t border-dark-100">
        <span className="text-xs text-primary-600 font-medium">
          {isHindi ? testimonial.serviceHi : testimonial.service}
        </span>
      </div>
    </motion.div>
  );
}
