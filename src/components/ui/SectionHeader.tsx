import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-8 md:mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className={`text-2xl md:text-3xl font-bold ${light ? 'text-white' : 'text-dark-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-sm md:text-base ${light ? 'text-white/80' : 'text-dark-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
