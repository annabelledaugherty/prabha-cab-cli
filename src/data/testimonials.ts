export interface Testimonial {
  id: string;
  name: string;
  nameHi: string;
  location: string;
  locationHi: string;
  rating: number;
  text: string;
  textHi: string;
  service: string;
  serviceHi: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Krishiv Anand',
    nameHi: 'कृशिव आनंद',
    location: 'Greater Noida',
    locationHi: 'ग्रेटर नोएडा',
    rating: 5,
    text: 'Excellent service! I regularly use Prabha Cab for my airport transfers. Always on time and the vehicles are clean and comfortable.',
    textHi: 'उत्कृष्ट सेवा! मैं नियमित रूप से अपने एयरपोर्ट ट्रांसफर के लिए प्रभा कैब का उपयोग करता हूं। हमेशा समय पर और वाहन साफ और आरामदायक हैं।',
    service: 'Airport Transfer',
    serviceHi: 'एयरपोर्ट ट्रांसफर',
    avatar: '/images/reviewers/irm3.jpg',
  },
  {
    id: '2',
    name: 'Avni Venkatesh',
    nameHi: 'अवनि वेंकटेश',
    location: 'Noida Extension',
    locationHi: 'नोएडा एक्सटेंशन',
    rating: 5,
    text: 'We booked Prabha Cab for our family trip to Nainital. The driver was very professional and the journey was comfortable. Highly recommended!',
    textHi: 'हमने अपनी नैनीताल परिवार यात्रा के लिए प्रभा कैब बुक किया। ड्राइवर बहुत पेशेवर था और यात्रा आरामदायक थी। अत्यधिक अनुशंसित!',
    service: 'Outstation Trip',
    serviceHi: 'आउटस्टेशन ट्रिप',
    avatar: '/images/reviewers/irf4.jpg',
  },
  {
    id: '3',
    name: 'Samar Bhattacharya',
    nameHi: 'समर भट्टाचार्य',
    location: 'Delhi',
    locationHi: 'दिल्ली',
    rating: 5,
    text: 'Our company has been using Prabha Cab\'s corporate services for 6 months now. Reliable, professional, and great value for money.',
    textHi: 'हमारी कंपनी पिछले 6 महीनों से प्रभा कैब की कॉर्पोरेट सेवाओं का उपयोग कर रही है। विश्वसनीय, पेशेवर और पैसे का बढ़िया मूल्य।',
    service: 'Corporate Services',
    serviceHi: 'कॉर्पोरेट सेवाएं',
    avatar: '/images/reviewers/irm7.jpg',
  },
  {
    id: '4',
    name: 'Zoya Aggarwal',
    nameHi: 'जोया अग्रवाल',
    location: 'Ghaziabad',
    locationHi: 'गाजियाबाद',
    rating: 5,
    text: 'Booked an Innova Crysta for our Agra trip. The vehicle was spotless and Brajkishor ji was very helpful with the booking. Will definitely use again!',
    textHi: 'हमने अपनी आगरा यात्रा के लिए इनोवा क्रिस्टा बुक की। वाहन बेदाग था और ब्रजकिशोर जी ने बुकिंग में बहुत मदद की। निश्चित रूप से फिर से उपयोग करेंगे!',
    service: 'Outstation Trip',
    serviceHi: 'आउटस्टेशन ट्रिप',
    avatar: '/images/reviewers/irf7.jpg',
  },
  {
    id: '5',
    name: 'Eshan Gaur',
    nameHi: 'ईशान गौर',
    location: 'Noida',
    locationHi: 'नोएडा',
    rating: 5,
    text: 'Used the local package for my business meetings. Very convenient and the driver knew all the routes well. Transparent pricing with no hidden charges.',
    textHi: 'अपनी बिजनेस मीटिंग्स के लिए लोकल पैकेज का उपयोग किया। बहुत सुविधाजनक और ड्राइवर को सभी रूट अच्छी तरह पता थे। कोई छिपे हुए शुल्क नहीं।',
    service: 'Local Package',
    serviceHi: 'लोकल पैकेज',
    avatar: '/images/reviewers/irm8.jpg',
  },
  {
    id: '6',
    name: 'Ishani Mukherjee',
    nameHi: 'ईशानी मुखर्जी',
    location: 'Greater Noida West',
    locationHi: 'ग्रेटर नोएडा वेस्ट',
    rating: 5,
    text: 'Early morning flight and Prabha Cab was there on time at 4 AM. The driver was courteous and helped with luggage. Best cab service in the area!',
    textHi: 'सुबह जल्दी की फ्लाइट और प्रभा कैब सुबह 4 बजे समय पर थी। ड्राइवर विनम्र था और सामान में मदद की। क्षेत्र में सबसे अच्छी कैब सेवा!',
    service: 'Airport Transfer',
    serviceHi: 'एयरपोर्ट ट्रांसफर',
    avatar: '/images/reviewers/irf10.jpg',
  },
];
