const WHATSAPP_NUMBER = '919718437625';

interface BookingData {
  tripType: string;
  pickup: string;
  drop: string;
  date: string;
  time: string;
  vehicle: string;
  passengers: string;
  instructions?: string;
  name?: string;
  phone?: string;
}

interface ContactData {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message: string;
}

interface QuoteData {
  from: string;
  to: string;
  vehicleType: string;
  date?: string;
}

export function generateWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function generateBookingMessage(data: BookingData, lang: string = 'en'): string {
  const isHindi = lang === 'hi';

  const header = isHindi
    ? '🚕 *प्रभा कैब - नई बुकिंग अनुरोध*'
    : '🚕 *Prabha Cab - New Booking Request*';

  const tripLabel = isHindi ? 'ट्रिप प्रकार' : 'Trip Type';
  const pickupLabel = isHindi ? 'पिकअप' : 'Pickup';
  const dropLabel = isHindi ? 'ड्रॉप' : 'Drop';
  const dateLabel = isHindi ? 'तिथि' : 'Date';
  const timeLabel = isHindi ? 'समय' : 'Time';
  const vehicleLabel = isHindi ? 'वाहन' : 'Vehicle';
  const passengersLabel = isHindi ? 'यात्री' : 'Passengers';
  const instructionsLabel = isHindi ? 'निर्देश' : 'Instructions';
  const nameLabel = isHindi ? 'नाम' : 'Name';
  const phoneLabel = isHindi ? 'फोन' : 'Phone';

  let message = `${header}\n\n`;

  if (data.name) message += `*${nameLabel}:* ${data.name}\n`;
  if (data.phone) message += `*${phoneLabel}:* ${data.phone}\n`;
  message += `*${tripLabel}:* ${data.tripType}\n`;
  message += `*${pickupLabel}:* ${data.pickup}\n`;
  message += `*${dropLabel}:* ${data.drop}\n`;
  message += `*${dateLabel}:* ${data.date}\n`;
  message += `*${timeLabel}:* ${data.time}\n`;
  message += `*${vehicleLabel}:* ${data.vehicle}\n`;
  message += `*${passengersLabel}:* ${data.passengers}\n`;

  if (data.instructions) {
    message += `*${instructionsLabel}:* ${data.instructions}\n`;
  }

  return message;
}

export function generateContactMessage(data: ContactData, lang: string = 'en'): string {
  const isHindi = lang === 'hi';

  const header = isHindi
    ? '📩 *प्रभा कैब - संपर्क पूछताछ*'
    : '📩 *Prabha Cab - Contact Inquiry*';

  const nameLabel = isHindi ? 'नाम' : 'Name';
  const phoneLabel = isHindi ? 'फोन' : 'Phone';
  const emailLabel = isHindi ? 'ईमेल' : 'Email';
  const serviceLabel = isHindi ? 'सेवा' : 'Service';
  const messageLabel = isHindi ? 'संदेश' : 'Message';

  let message = `${header}\n\n`;
  message += `*${nameLabel}:* ${data.name}\n`;
  message += `*${phoneLabel}:* ${data.phone}\n`;
  if (data.email) message += `*${emailLabel}:* ${data.email}\n`;
  if (data.service) message += `*${serviceLabel}:* ${data.service}\n`;
  message += `\n*${messageLabel}:*\n${data.message}`;

  return message;
}

export function generateQuoteMessage(data: QuoteData, lang: string = 'en'): string {
  const isHindi = lang === 'hi';

  const header = isHindi
    ? '💰 *प्रभा कैब - किराया पूछताछ*'
    : '💰 *Prabha Cab - Fare Inquiry*';

  const fromLabel = isHindi ? 'से' : 'From';
  const toLabel = isHindi ? 'तक' : 'To';
  const vehicleLabel = isHindi ? 'वाहन' : 'Vehicle';
  const dateLabel = isHindi ? 'तिथि' : 'Date';
  const requestLabel = isHindi ? 'कृपया किराया अनुमान भेजें' : 'Please send fare estimate';

  let message = `${header}\n\n`;
  message += `*${fromLabel}:* ${data.from}\n`;
  message += `*${toLabel}:* ${data.to}\n`;
  message += `*${vehicleLabel}:* ${data.vehicleType}\n`;
  if (data.date) message += `*${dateLabel}:* ${data.date}\n`;
  message += `\n${requestLabel}`;

  return message;
}

export function openWhatsApp(message: string): void {
  const url = generateWhatsAppUrl(message);
  window.open(url, '_blank');
}

export function generateServiceBookingMessage(serviceName: string, lang: string = 'en'): string {
  const isHindi = lang === 'hi';
  const header = isHindi
    ? '🚕 *प्रभा कैब - सेवा पूछताछ*'
    : '🚕 *Prabha Cab - Service Inquiry*';

  const message = isHindi
    ? `${header}\n\nनमस्ते, मुझे *${serviceName}* सेवा के बारे में जानकारी चाहिए।\n\nकृपया विवरण और उपलब्धता साझा करें।`
    : `${header}\n\nHi, I'm interested in your *${serviceName}* service.\n\nPlease share details and availability.`;

  return message;
}

export function generateVehicleBookingMessage(vehicleName: string, lang: string = 'en'): string {
  const isHindi = lang === 'hi';
  const header = isHindi
    ? '🚕 *प्रभा कैब - वाहन बुकिंग*'
    : '🚕 *Prabha Cab - Vehicle Booking*';

  const message = isHindi
    ? `${header}\n\nनमस्ते, मुझे *${vehicleName}* बुक करना है।\n\nकृपया उपलब्धता और किराया बताएं।`
    : `${header}\n\nHi, I'd like to book a *${vehicleName}*.\n\nPlease share availability and fare details.`;

  return message;
}

export function callPhone(number: string = '9718437625'): void {
  window.location.href = `tel:+91${number}`;
}
