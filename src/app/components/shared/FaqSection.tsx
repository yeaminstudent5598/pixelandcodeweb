'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

// প্রশ্ন এবং উত্তরগুলোর ডেটা
const faqDataBn = [
  {
    question: 'আপনারা কি ফেসবুক Ads Campaign কি দিয়ে করে থাকেন?',
    answer: 'আমরা ফেসবুক Ads Campaign করার জন্য নিজস্ব ডুয়েল কারেন্সি কার্ড এবং এজেন্সি অ্যাকাউন্ট ব্যবহার করে থাকি, যা সম্পূর্ণ নিরাপদ এবং নির্ভরযোগ্য। কোনো প্রকার ভ্যাট/ট্যাক্সের ঝামেলা পোহাতে হবে না।',
  },
  {
    question: 'আপনারা কি HTPOOL এর অথোরাইজড এড একাউন্ট সেল করেন?',
    answer: 'হ্যাঁ, আমরা HTPOOL এর একজন অথোরাইজড পার্টনার। আমাদের থেকে আপনি সম্পূর্ণ ভেরিফাইড এবং নিরাপদ এড অ্যাকাউন্ট কিনতে পারবেন যা কখনো ডিজেবল হওয়ার ভয় নেই।',
  },
  {
    question: 'আপনাদের সাথে সরাসরি অফিসে এসে কথা বলতে চাচ্ছি।',
    answer: 'অবশ্যই! আপনি আমাদের অফিসে এসে সরাসরি কথা বলতে পারেন। আমাদের অফিসের ঠিকানা ওয়েবসাইটের কন্টাক্ট পেইজে দেওয়া আছে। তবে আসার আগে ফোন দিয়ে অ্যাপয়েন্টমেন্ট নিলে আপনার জন্য সুবিধা হবে।',
  },
  {
    question: 'আপনাদের ডলার রেট কত? মিনিমাম কত ডলারের কাজ করানো যাবে?',
    answer: 'ডলারের রেট আন্তর্জাতিক বাজারের উপর নির্ভর করে পরিবর্তনশীল। বর্তমান রেট এবং মিনিমাম বাজেট সম্পর্কে জানতে অনুগ্রহ করে আমাদের হোয়াটসঅ্যাপে বা সরাসরি কল করে জেনে নিন।',
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

export function FaqSection() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // ডিফল্টভাবে প্রথমটি খোলা থাকবে

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = language ? faqDataBn : faqDataEn;

  return (
    <section className="relative w-full py-24 md:py-32 bg-slate-50 dark:bg-black overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ==========================================
              LEFT COLUMN: IMAGE & FLOATING CARD
          ========================================== */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image */}
            <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
              <Image
                src="/question.avif" // আপনার দেওয়া ইমেজ
                alt="FAQ Support"
                fill
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Floating Contact Card */}
            <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 animate-bounce duration-[3000ms] max-w-[260px]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {language ? 'আরও প্রশ্ন?' : 'More Questions?'}
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {language ? 'চ্যাট করুন' : 'Chat With Us'}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {language 
                  ? 'আমাদের সাপোর্ট টিম সর্বদা আপনার জন্য প্রস্তুত।' 
                  : 'Our support team is always ready for you.'}
              </p>
            </div>
            
            {/* Decoration Dots */}
            <div className="absolute -top-10 -left-10 grid grid-cols-3 gap-2 opacity-20">
               {[...Array(9)].map((_, i) => (
                 <div key={i} className="w-3 h-3 rounded-full bg-blue-600"></div>
               ))}
            </div>
          </div>

          {/* ==========================================
              RIGHT COLUMN: ACCORDION
          ========================================== */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-200 dark:border-blue-800">
              <HelpCircle className="w-3.5 h-3.5" />
              {language ? 'প্রশ্ন ও উত্তর' : 'FAQ'}
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-8">
              {language ? (
                <>সচরাচর জিজ্ঞাসিত <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">প্রশ্নের উত্তর</span></>
              ) : (
                <>Frequently Asked <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span></>
              )}
            </h2>

            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    activeIndex === index 
                      ? 'bg-white dark:bg-slate-900 border-blue-500 dark:border-blue-500 shadow-lg' 
                      : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`text-lg font-bold transition-colors ${
                      activeIndex === index ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-slate-200'
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                       activeIndex === index ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
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
                        <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-dashed border-slate-200 dark:border-slate-800 mt-2 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}