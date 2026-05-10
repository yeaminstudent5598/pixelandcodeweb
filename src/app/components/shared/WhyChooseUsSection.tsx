'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

// প্রশ্ন এবং উত্তরগুলোর ডেটা
const faqDataBn = [
  {
    question: 'আপনারা কি ফেসবুক Ads Campaign কি দিয়ে করে থাকেন?',
    answer: 'আমরা ফেসবুক Ads Campaign করার জন্য নিজস্ব ডুয়েল কারেন্সি কার্ড এবং এজেন্সি অ্যাকাউন্ট ব্যবহার করে থাকি, যা সম্পূর্ণ নিরাপদ এবং নির্ভরযোগ্য। কোনো প্রকার ভ্যাট/ট্যাক্সের ঝামেলা পোহাতে হবে না।',
  },
  {
    question: 'আপনারা কি HTPOOL এর অথোরাইজড এড একাউন্ট সেল করেন?',
    answer: 'হ্যাঁ, আমরা HTPOOL এর একজন অথোরাইজড পার্টনার। আমাদের থেকে আপনি সম্পূর্ণ ভেরিফাইড এবং নিরাপদ এড অ্যাকাউন্ট কিনতে পারবেন যা কখনো ডিজেবল হওয়ার ভয় নেই।',
  },
  {
    question: 'আপনাদের সাথে সরাসরি অফিসে এসে কথা বলতে চাচ্ছি।',
    answer: 'অবশ্যই! আপনি আমাদের অফিসে এসে সরাসরি কথা বলতে পারেন। আমাদের অফিসের ঠিকানা ওয়েবসাইটের কন্টাক্ট পেইজে দেওয়া আছে। তবে আসার আগে ফোন দিয়ে অ্যাপয়েন্টমেন্ট নিলে আপনার জন্য সুবিধা হবে।',
  },
  {
    question: 'আপনাদের ডলার রেট কত? মিনিমাম কত ডলারের কাজ করানো যাবে?',
    answer: 'ডলারের রেট আন্তর্জাতিক বাজারের উপর নির্ভর করে পরিবর্তনশীল। বর্তমান রেট এবং মিনিমাম বাজেট সম্পর্কে জানতে অনুগ্রহ করে আমাদের হোয়াটসঅ্যাপে বা সরাসরি কল করে জেনে নিন।',
  },
];

const faqDataEn = [
  {
    question: 'Do you run Facebook Ads Campaigns?',
    answer: 'We use our own dual currency cards and agency accounts to run Facebook Ads Campaigns, which are completely safe and reliable. No hassle with VAT/Tax.',
  },
  {
    question: 'Do you sell authorized HTPOOL ad accounts?',
    answer: 'Yes, we are an authorized partner of HTPOOL. You can buy fully verified and secure ad accounts from us with zero risk of being disabled.',
  },
  {
    question: 'I want to talk directly at your office.',
    answer: 'Absolutely! You are welcome to visit our office. The address is on our contact page. However, we recommend calling ahead to schedule an appointment for your convenience.',
  },
  {
    question: 'What is your dollar rate? What is the minimum amount?',
    answer: 'The dollar rate varies depending on the international market. Please contact us via WhatsApp or phone call to know the current rate and minimum budget requirements.',
  },
];

export function WhyChooseUsSection() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = language ? faqDataBn : faqDataEn;

  // TypeScript Error Fix: Fixed by using 'as const' or explicit typing
  const floatingAnimation = {
    y: ["-5px", "5px"],
    transition: { 
      duration: 3, 
      repeat: Infinity, 
      repeatType: "mirror" as const, // Fix here
      ease: "easeInOut" as const      // Fix here
    }
  };

  return (
    <section 
      className="relative w-full py-24 md:py-32 overflow-hidden z-0"
      style={{ 
        backgroundColor: '#060606',
        backgroundImage: `linear-gradient(rgba(249,115,22,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,.03) 1px, transparent 1px)`,
        backgroundSize: '56px 56px',
        borderTop: '1px solid rgba(255,255,255,.05)'
      }}
    >
      
      {/* BACKGROUND 3D AMBIENCE */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: IMAGE & FLOATING CARD */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-white/[0.05] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
              <Image
                src="/question.avif"
                alt="FAQ Support"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/40 to-transparent z-10"></div>
            </div>

            <motion.div 
              animate={floatingAnimation}
              className="absolute -bottom-10 -right-4 md:-right-10 bg-[#111111]/90 backdrop-blur-xl p-6 rounded-3xl shadow-[0_20px_40px_-15px_rgba(249,115,22,0.3)] border border-[#333333] max-w-[260px] z-20"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider" style={{ color: '#9ca3af' }}>
                    {language ? 'আরও প্রশ্ন?' : 'More Questions?'}
                  </p>
                  <p className="text-sm font-bold text-[#ffffff]" style={{ color: '#ffffff' }}>
                    {language ? 'চ্যাট করুন' : 'Chat With Us'}
                  </p>
                </div>
              </div>
              <p className="text-xs font-medium text-[#9ca3af] leading-relaxed" style={{ color: '#9ca3af' }}>
                {language 
                  ? 'আমাদের সাপোর্ট টিম সর্বদা আপনার জন্য প্রস্তুত।' 
                  : 'Our support team is always ready for you.'}
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: ACCORDION */}
          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 font-bold text-xs uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                <HelpCircle className="w-3.5 h-3.5" />
                {language ? 'প্রশ্ন ও উত্তর' : 'FAQ'}
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8" style={{ color: '#ffffff' }}>
                {language ? (
                  <>সচরাচর জিজ্ঞাসিত <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-md">প্রশ্নের উত্তর</span></>
                ) : (
                  <>Frequently Asked <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-md">Questions</span></>
                )}
              </h2>
            </motion.div>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    activeIndex === index 
                      ? 'bg-[#111111] border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.15)]' 
                      : 'bg-[#111111]/50 border-[#222222] hover:border-[#444444] hover:bg-[#111111]'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  >
                    <span 
                      className={`text-lg font-bold transition-colors duration-300 ${
                        activeIndex === index ? 'text-orange-400' : 'text-[#d1d5db] group-hover:text-white'
                      }`}
                      style={{ color: activeIndex === index ? '#fb923c' : '#d1d5db' }}
                    >
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                       activeIndex === index 
                        ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white rotate-180 shadow-[0_0_10px_rgba(249,115,22,0.4)]' 
                        : 'bg-[#222222] text-[#9ca3af] group-hover:bg-[#333333] group-hover:text-white'
                    }`}>
                      {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div 
                          className="px-6 pb-6 pt-0 font-medium leading-relaxed border-t border-dashed mt-2 pt-4 border-[#333333] text-[#9ca3af]"
                          style={{ color: '#9ca3af' }}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}