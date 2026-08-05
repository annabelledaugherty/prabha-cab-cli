import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import AppShell from './components/layout/AppShell';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FleetPage from './pages/FleetPage';
import PricingPage from './pages/PricingPage';
import RoutesPage from './pages/RoutesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import FAQPage from './pages/FAQPage';

const GreaterNoidaTaxiPage = lazy(() => import('./pages/location/GreaterNoidaTaxiPage'));
const NoidaTaxiPage = lazy(() => import('./pages/location/NoidaTaxiPage'));
const DelhiTaxiPage = lazy(() => import('./pages/location/DelhiTaxiPage'));
const GhaziabadTaxiPage = lazy(() => import('./pages/location/GhaziabadTaxiPage'));
const GurgaonTaxiPage = lazy(() => import('./pages/location/GurgaonTaxiPage'));
const FaridabadTaxiPage = lazy(() => import('./pages/location/FaridabadTaxiPage'));
const NoidaToAirportPage = lazy(() => import('./pages/airport/NoidaToAirportPage'));
const DelhiAirportTaxiPage = lazy(() => import('./pages/airport/DelhiAirportTaxiPage'));
const NoidaToAgraPage = lazy(() => import('./pages/outstation/NoidaToAgraPage'));
const NoidaToJaipurPage = lazy(() => import('./pages/outstation/NoidaToJaipurPage'));
const NoidaToHaridwarPage = lazy(() => import('./pages/outstation/NoidaToHaridwarPage'));
const NoidaToRishikeshPage = lazy(() => import('./pages/outstation/NoidaToRishikeshPage'));
const NoidaToNainitalPage = lazy(() => import('./pages/outstation/NoidaToNainitalPage'));
const NoidaToChandigarhPage = lazy(() => import('./pages/outstation/NoidaToChandigarhPage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell>
        <Suspense fallback={<div className="min-h-screen bg-dark-50" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/taxi-service-greater-noida" element={<GreaterNoidaTaxiPage />} />
            <Route path="/taxi-service-noida" element={<NoidaTaxiPage />} />
            <Route path="/taxi-service-delhi" element={<DelhiTaxiPage />} />
            <Route path="/taxi-service-ghaziabad" element={<GhaziabadTaxiPage />} />
            <Route path="/taxi-service-gurgaon" element={<GurgaonTaxiPage />} />
            <Route path="/taxi-service-faridabad" element={<FaridabadTaxiPage />} />
            <Route path="/noida-to-delhi-airport-taxi" element={<NoidaToAirportPage />} />
            <Route path="/delhi-airport-cab-service" element={<DelhiAirportTaxiPage />} />
            <Route path="/noida-to-agra-taxi" element={<NoidaToAgraPage />} />
            <Route path="/noida-to-jaipur-taxi" element={<NoidaToJaipurPage />} />
            <Route path="/noida-to-haridwar-taxi" element={<NoidaToHaridwarPage />} />
            <Route path="/noida-to-rishikesh-taxi" element={<NoidaToRishikeshPage />} />
            <Route path="/noida-to-nainital-taxi" element={<NoidaToNainitalPage />} />
            <Route path="/noida-to-chandigarh-taxi" element={<NoidaToChandigarhPage />} />
          </Routes>
        </Suspense>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
