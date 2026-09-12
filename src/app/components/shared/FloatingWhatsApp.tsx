'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  // পেজ লোড হওয়ার ২ সেকেন্ড পর বাটনটি আসবে (সুন্দর এন্ট্রান্সের জন্য)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = '8801641801705'; // আন্তর্জাতিক ফরম্যাট
  const message = 'Hello Pixel & Code, I need some information.'; // ডিফল্ট মেসেজ
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">
          
          {/* Tooltip / Hint Message (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 1 }}
            className="hidden md:block bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 text-sm font-bold mb-1 relative"
          >
            Need Help? Chat with us!
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-slate-800 transform rotate-45 border-r border-b border-slate-100 dark:border-slate-700"></div>
          </motion.div>

          {/* Main Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-2xl cursor-pointer group"
          >
            {/* Pulse Animation Ring */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping duration-1000"></span>
            
            {/* WhatsApp SVG Icon */}
            <svg 
              className="relative w-8 h-8 md:w-9 md:h-9 text-white fill-current" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.2 53.7 21.8 57.4 2.6 3.7 37.8 57.7 91.5 80.8 12.8 5.5 22.8 8.8 30.6 11.4 12.8 4.3 24.4 3.7 33.6 2.3 10.2-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>

            {/* Online Dot */}
            <span className="absolute top-2 right-2 md:top-3 md:right-3 block h-3 w-3 rounded-full bg-red-500 ring-2 ring-white"></span>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}