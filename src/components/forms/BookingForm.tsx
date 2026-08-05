import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Calendar, Clock, Users, Car, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { vehicles } from '../../data/fleet';
import { generateBookingMessage, openWhatsApp, callPhone } from '../../utils/whatsappHelper';

interface BookingFormProps {
  compact?: boolean;
}

export default function BookingForm({ compact = false }: BookingFormProps) {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const prefilledTo = searchParams.get('to') || '';

  const [form, setForm] = useState({
    tripType: 'oneWay',
    pickup: '',
    drop: prefilledTo,
    date: '',
    time: '',
    vehicle: 'sedan',
    passengers: '2',
    name: '',
    phone: '',
    instructions: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateBookingMessage(form, i18n.language);
    openWhatsApp(message);
  };

  const tripTypes = [
    { value: 'oneWay', label: t('booking.oneWay') },
    { value: 'roundTrip', label: t('booking.roundTrip') },
    { value: 'hourly', label: t('booking.hourly') },
  ];

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              name="pickup"
              value={form.pickup}
              onChange={handleChange}
              placeholder={t('booking.pickup')}
              required
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-500" />
            <input
              type="text"
              name="drop"
              value={form.drop}
              onChange={handleChange}
              placeholder={t('booking.drop')}
              required
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            />
          </div>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          {t('booking.bookViaWhatsapp')}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-dark-50 p-1 rounded-xl">
        <div className="flex">
          {tripTypes.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() => setForm({ ...form, tripType: type.value })}
              className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                form.tripType === type.value
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-dark-500 hover:text-dark-700'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-2">
            {t('contact.name')}
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-2">
            {t('contact.phone')}
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-2">
            {t('booking.pickup')}
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              name="pickup"
              value={form.pickup}
              onChange={handleChange}
              placeholder="e.g., Greater Noida"
              required
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-2">
            {t('booking.drop')}
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-500" />
            <input
              type="text"
              name="drop"
              value={form.drop}
              onChange={handleChange}
              placeholder="e.g., Delhi Airport"
              required
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-2">
            {t('booking.date')}
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-2">
            {t('booking.time')}
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-2">
            {t('booking.vehicle')}
          </label>
          <div className="relative">
            <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <select
              name="vehicle"
              value={form.vehicle}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all appearance-none"
            >
              {vehicles.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-dark-700 mb-2">
            {t('booking.passengers')}
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <select
              name="passengers"
              value={form.passengers}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all appearance-none"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-dark-700 mb-2">
          {t('booking.instructions')}
        </label>
        <textarea
          name="instructions"
          value={form.instructions}
          onChange={handleChange}
          rows={3}
          placeholder="Any special requirements..."
          className="w-full px-4 py-3 bg-white rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          {t('booking.bookViaWhatsapp')}
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => callPhone()}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-dark-800 text-white font-semibold rounded-xl hover:bg-dark-900 transition-colors"
        >
          <Send className="w-5 h-5" />
          {t('booking.orCall')}
        </motion.button>
      </div>
    </form>
  );
}
