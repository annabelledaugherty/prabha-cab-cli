import { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateWhatsAppUrl, callPhone } from '../../utils/whatsappHelper';

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = 'Hi, I would like to book a cab with Prabha Cab.';
    window.open(generateWhatsAppUrl(message), '_blank');
    setIsOpen(false);
  };

  const handleCall = () => {
    callPhone('9718437625');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-4 z-40">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={handleCall}
              className="absolute bottom-32 right-0 flex items-center gap-2 px-4 py-3 bg-dark-800 text-white rounded-full shadow-lg hover:bg-dark-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium whitespace-nowrap">Call Now</span>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              onClick={handleWhatsApp}
              className="absolute bottom-20 right-0 flex items-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium whitespace-nowrap">WhatsApp</span>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? 'bg-dark-800' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
