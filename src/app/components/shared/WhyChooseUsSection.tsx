<<<<<<< HEAD
'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';

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
=======
// src/components/shared/WhyChooseUsSection.tsx
'use client';
import Image from 'next/image';
import React from 'react';
import { CheckCircle, BarChart, Users, Headset, Play } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// ফিচারগুলোর ডেটা (আপডেট করা হয়েছে)
const featuresBn = [
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: 'সেইফ এন্ড সিকিওর',
    description: 'অত্যন্ত উন্নত মানের টুলস ব্যবহার করে সার্ভিস প্রদান',
    bgColor: 'bg-orange-500',
  },
  {
    icon: <BarChart className="h-8 w-8 text-white" />,
    title: 'এনালিটিক্স প্রদান',
    description: 'সার্ভিস চলাকালীন সময়ে অ্যানালিটিক্স আপডেট প্রদান করা',
    bgColor: 'bg-purple-500',
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: 'দক্ষ টিম মেম্বার সার্ভিস',
    description:
      'পিক্সেল এন্ড কোড এর দক্ষ টিম মেম্বার সার্বিক সেবা নিশ্চিত করে',
    bgColor: 'bg-yellow-500',
  },
  {
    icon: <Headset className="h-8 w-8 text-white" />,
    title: '২৪/৭ কাস্টমার সাপোর্ট',
    description:
      'আমাদের থেকে পাচ্ছেন সপ্তাহে ৭ দিন এবং দিনরাত ২৪ ঘণ্টা কাস্টমার সাপোর্ট',
    bgColor: 'bg-blue-500',
  },
];
const featuresEn = [
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: 'Safe and Secure',
    description: 'Providing services using highly advanced tools',
    bgColor: 'bg-orange-500',
  },
  {
    icon: <BarChart className="h-8 w-8 text-white" />,
    title: 'Analytics Provided',
    description: 'Regular analytics updates during the service period',
    bgColor: 'bg-purple-500',
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: 'Skilled Team Members',
    description: 'Pixel & Code’s skilled team ensures complete service',
    bgColor: 'bg-yellow-500',
  },
  {
    icon: <Headset className="h-8 w-8 text-white" />,
    title: '24/7 Customer Support',
    description: 'Receive customer support 24 hours a day, 7 days a week',
    bgColor: 'bg-blue-500',
>>>>>>> origin/development
  },
];

export function WhyChooseUsSection() {
  const { language } = useLanguage();
<<<<<<< HEAD
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = language ? faqDataBn : faqDataEn;

  return (
    <section 
      className="relative w-full py-24 md:py-32 overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/60 z-0"
    >
      
      {/* 🎨 BACKGROUND 3D AMBIENCE (Clean & Soft) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* ════ LEFT COLUMN: IMAGE & FLOATING CARD ════ */}
          <div className="relative order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[450px] md:h-[550px] w-full rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-900/10 dark:shadow-none"
            >
              <Image
                src="/question.avif"
                alt="FAQ Support"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10 pointer-events-none"></div>
            </motion.div>

            {/* Floating Support Card */}
            <motion.div 
              animate={{ y: ["-8px", "8px"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-5 md:p-6 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 max-w-[260px] z-20"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {language ? 'আরও প্রশ্ন?' : 'More Questions?'}
                  </p>
                  <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {language ? 'চ্যাট করুন' : 'Chat With Us'}
                  </p>
                </div>
              </div>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                {language 
                  ? 'আমাদের সাপোর্ট টিম সর্বদা আপনার জন্য প্রস্তুত।' 
                  : 'Our support team is always ready for you.'}
              </p>
            </motion.div>
          </div>

          {/* ════ RIGHT COLUMN: ACCORDION ════ */}
          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold mb-6 shadow-sm">
                <HelpCircle className="w-4 h-4 text-blue-500" />
                {language ? 'প্রশ্ন ও উত্তর' : 'FAQ'}
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight mb-10">
                {language ? (
                  <>সচরাচর জিজ্ঞাসিত <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">প্রশ্নের উত্তর</span></>
                ) : (
                  <>Frequently Asked <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions</span></>
                )}
              </h2>
            </motion.div>

            {/* Accordion List */}
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isActive 
                        ? 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800/60 shadow-md shadow-blue-900/5' 
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                    >
                      <span 
                        className={`text-base md:text-lg font-bold transition-colors duration-300 ${
                          isActive 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                        }`}
                      >
                        {faq.question}
                      </span>
                      
                      {/* Icon */}
                      <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                         isActive 
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 rotate-180' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                      }`}>
                        {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <div className="px-5 md:px-6 pb-6 pt-0">
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 text-sm md:text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                              {faq.answer}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
=======
  return (
    <section className="relative w-full overflow-hidden bg-purple-50/50 dark:bg-gray-950 py-20 sm:py-28 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* বাম কলাম: টেক্সট এবং ফিচার */}
          <div className="flex flex-col">
            <h2 className="mb-10 text-3xl font-extrabold text-gray-800 dark:text-white md:text-4xl">
              {language ? (
                <>
                  যে কারণে পিক্সেল এন্ড কোড <br /> #১ সেরা প্রতিষ্ঠান
                </>
              ) : (
                'Why Pixel & Code is the #1 Best Company'
              )}
            </h2>

            <ul className="space-y-6">
              {(language ? featuresBn : featuresEn).map(feature => (
                <li key={feature.title} className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg shadow-md ${feature.bgColor}`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-base text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ডান কলাম: ছবি এবং ডেকোরেশন */}
          <div className="relative hidden h-full min-h-[550px] items-center justify-center lg:flex">
            {/* ডেকোরেটিভ শেপ */}
            <div className="absolute right-0 top-0 h-12 w-12 translate-x-1/2 -translate-y-1/2 rounded-lg bg-green-200/50 dark:bg-green-500/20 transform rotate-45"></div>
            <div className="absolute bottom-1/4 right-0 h-16 w-16 translate-x-1/2 translate-y-1/2 rounded-full border-8 border-yellow-200/50 dark:border-yellow-500/20"></div>
            <div className="absolute left-0 top-1/4 h-10 w-10 -translate-y-1/2 -translate-x-1/2 rounded-full bg-purple-200/50 dark:bg-purple-500/20"></div>
            <div className="absolute bottom-1/2 left-0 -translate-x-1/2 translate-y-1/2 rounded-full bg-pink-200/50 dark:bg-pink-500/20 p-2 text-white">
              <Play className="h-6 w-6" />
            </div>

            {/* মূল বৃত্তাকার ব্যাকগ্রাউন্ড */}
            <div className="absolute h-[450px] w-[450px] rounded-full bg-purple-200/80 dark:bg-purple-900/30"></div>

            {/* মোবাইল অ্যাপের ছবি */}
            <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/fbbanner.png"
                alt="App analytics screenshot"
                width={300}
                height={650}
                className="rounded-[32px] shadow-2xl dark:shadow-gray-900/50"
              />
            </div>
          </div>
>>>>>>> origin/development
        </div>
      </div>
    </section>
  );
}