import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  schemas?: object[];
}

const BASE_URL = 'https://prabhacab.in';
const DEFAULT_IMAGE = `${BASE_URL}/images/hero.jpg`;
const SCHEMA_ATTR = 'data-page-schema';

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalPath = '/',
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noIndex = false,
  schemas = [],
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    setMeta(
      'robots',
      noIndex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    );

    setMeta('og:type', ogType, true);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', `${BASE_URL}${canonicalPath}`, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:image:alt', 'Prabha Cab - Taxi Service in Greater Noida and Delhi NCR', true);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:url', `${BASE_URL}${canonicalPath}`);
    setMeta('twitter:image', ogImage);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${BASE_URL}${canonicalPath}`);

    let hreflangEn = document.querySelector('link[hreflang="en-IN"]') as HTMLLinkElement;
    if (!hreflangEn) {
      hreflangEn = document.createElement('link');
      hreflangEn.setAttribute('rel', 'alternate');
      hreflangEn.setAttribute('hreflang', 'en-IN');
      document.head.appendChild(hreflangEn);
    }
    hreflangEn.setAttribute('href', `${BASE_URL}${canonicalPath}`);

    let hreflangHi = document.querySelector('link[hreflang="hi-IN"]') as HTMLLinkElement;
    if (!hreflangHi) {
      hreflangHi = document.createElement('link');
      hreflangHi.setAttribute('rel', 'alternate');
      hreflangHi.setAttribute('hreflang', 'hi-IN');
      document.head.appendChild(hreflangHi);
    }
    hreflangHi.setAttribute('href', `${BASE_URL}${canonicalPath}?lang=hi`);

    document.querySelectorAll(`script[${SCHEMA_ATTR}]`).forEach((el) => el.remove());

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute(SCHEMA_ATTR, 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.title = 'Prabha Cab - Best Taxi Service in Greater Noida, Noida & Delhi NCR';
      document.querySelectorAll(`script[${SCHEMA_ATTR}]`).forEach((el) => el.remove());
    };
  }, [title, description, keywords, canonicalPath, ogImage, ogType, noIndex, schemas]);

  return null;
}
