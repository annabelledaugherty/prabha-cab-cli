import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function GlassCard({ children, className = '', hover = false, onClick }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-card border border-white/20 overflow-hidden ${
        hover ? 'cursor-pointer hover:shadow-card-hover transition-shadow' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
