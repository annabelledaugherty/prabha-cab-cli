import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export default function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  const textColor = light ? 'text-white/70' : 'text-dark-500';
  const activeColor = light ? 'text-primary-300' : 'text-primary-600';
  const hoverColor = light ? 'hover:text-white' : 'hover:text-dark-900';
  const separatorColor = light ? 'text-white/40' : 'text-dark-300';

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 flex-wrap">
      <Link to="/" className={`${textColor} ${hoverColor} transition-colors flex items-center gap-1 text-sm`}>
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-1">
          <ChevronRight className={`w-3.5 h-3.5 ${separatorColor}`} />
          {item.path && idx < items.length - 1 ? (
            <Link to={item.path} className={`${textColor} ${hoverColor} transition-colors text-sm`}>
              {item.label}
            </Link>
          ) : (
            <span className={`${activeColor} text-sm font-medium`}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
