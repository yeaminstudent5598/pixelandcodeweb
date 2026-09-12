<<<<<<< HEAD
'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Trophy, ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export function AchievementsSection() {
  const { language } = useLanguage();
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      id: 1,
      end: 100,
      suffix: '+',
      labelBn: 'সন্তুষ্ট ক্লায়েন্ট',
      labelEn: 'Happy Clients',
      descBn: 'বিশ্বজুড়ে আস্থাশীল পার্টনার',
      descEn: 'Trusted partners worldwide',
    },
    {
      id: 2,
      end: 50,
      suffix: '+',
      labelBn: 'সফল প্রজেক্ট',
      labelEn: 'Projects Done',
      descBn: 'সাফল্যের সাথে সম্পন্ন',
      descEn: 'Completed successfully',
    },
    {
      id: 3,
      end: 1,
      suffix: ' Year',
      labelBn: 'অভিজ্ঞতা',
      labelEn: 'Years Experience',
      descBn: 'ইন্ডাস্ট্রিতে আমাদের পথচলা',
      descEn: 'Journey in the industry',
    },
    {
      id: 4,
      end: 90,
      suffix: '%',
      labelBn: 'সাকসেস রেট',
      labelEn: 'Success Rate',
      descBn: 'কাজের গুণগত মান',
      descEn: 'Quality of deliver',
    },
  ];

  // TypeScript Error Fix: Explicitly typing as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      ref={ref} 
      className="relative w-full py-24 md:py-32 overflow-hidden z-0"
      style={{ 
        backgroundColor: '#060606',
        backgroundImage: `linear-gradient(rgba(249,115,22,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,.03) 1px, transparent 1px)`,
        backgroundSize: '56px 56px',
        borderTop: '1px solid rgba(255,255,255,.05)'
      }}
    >
      
      {/* ==========================================
          BACKGROUND 3D AMBIENCE
      ========================================== */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative mx-auto px-4 z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ==========================================
              LEFT COLUMN: TEXT
          ========================================== */}
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(249,115,22,0.15)] mb-8">
              <Trophy className="w-4 h-4" />
              {language ? 'আমাদের মাইলফলক' : 'Our Milestones'}
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8" style={{ color: '#ffffff' }}>
              {language ? (
                <>আমরা তৈরি করি <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-md">সাফল্যের গল্প</span></>
              ) : (
                <>We Create <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 drop-shadow-md">Success Stories</span></>
              )}
            </h2>

            <p className="text-lg md:text-xl leading-relaxed mb-10 border-l-4 border-orange-500 pl-6 font-medium text-[#9ca3af]" style={{ color: '#9ca3af' }}>
              {language 
                ? 'গত কয়েক বছরে পিক্সেল এন্ড কোড নিজেকে বাংলাদেশের অন্যতম নির্ভরযোগ্য ডিজিটাল এজেন্সি হিসেবে প্রতিষ্ঠিত করেছে।' 
                : 'Over the years, Pixel & Code has established itself as one of the most reliable digital agencies in Bangladesh.'}
            </p>

            <div className="flex items-center gap-2 font-bold cursor-pointer group w-fit transition-colors duration-300 text-[#ffffff] hover:text-orange-400" style={{ color: '#ffffff' }}>
              <span className="text-lg border-b-2 border-white/20 group-hover:border-orange-500 transition-all">
                {language ? 'আমাদের পোর্টফোলিও দেখুন' : 'View Our Portfolio'}
              </span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>

          {/* ==========================================
              RIGHT COLUMN: STATS GRID
          ========================================== */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {stats.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-md shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.2)] hover:border-orange-500/40 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
              >
                {/* Inner Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-5xl md:text-6xl font-black mb-3 tracking-tight flex items-baseline text-[#ffffff]" style={{ color: '#ffffff' }}>
                    {inView ? (
                      <CountUp start={0} end={item.end} duration={2.5} separator="," />
                    ) : (
                      0
                    )}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-3xl ml-1 font-bold">{item.suffix}</span>
                  </h3>
                  
                  <h4 className="text-xl font-bold mb-2 group-hover:text-orange-300 transition-colors duration-300 text-[#e5e7eb]" style={{ color: '#e5e7eb' }}>
                    {language ? item.labelBn : item.labelEn}
                  </h4>
                  
                  <p className="text-sm group-hover:text-[#d1d5db] transition-colors font-medium text-[#9ca3af]" style={{ color: '#9ca3af' }}>
                    {language ? item.descBn : item.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

=======
// src/components/shared/AchievementsSection.tsx
'use client';
import React from 'react';
import { Users, Palette, Clapperboard, Code } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// অর্জনগুলোর ডেটা
const achievementsBn = [
  {
    icon: <Users className="h-7 w-7 text-blue-500" />,
    count: '৪০০+',
    label: 'ক্লায়েন্ট',
  },
  {
    icon: <Palette className="h-7 w-7 text-yellow-500" />,
    count: '৩০০+',
    label: 'ডিজাইন',
  },
  {
    icon: <Clapperboard className="h-7 w-7 text-purple-500" />,
    count: '৩০০+',
    label: 'ভিডিও মেকিং',
  },
  {
    icon: <Code className="h-7 w-7 text-orange-500" />,
    count: '৫০+',
    label: 'ওয়েবসাইট',
  },
];
const achievementsEn = [
  {
    icon: <Users className="h-7 w-7 text-blue-500" />,
    count: '400+',
    label: 'Clients',
  },
  {
    icon: <Palette className="h-7 w-7 text-yellow-500" />,
    count: '300+',
    label: 'Designs',
  },
  {
    icon: <Clapperboard className="h-7 w-7 text-purple-500" />,
    count: '300+',
    label: 'Video Making',
  },
  {
    icon: <Code className="h-7 w-7 text-orange-500" />,
    count: '50+',
    label: 'Websites',
  },
];

export function AchievementsSection() {
  const backgroundImageUrl = 'https://i.ibb.co/L8dFkR2/achievement-bg.jpg'; // ❗️ আপনার নিজের ব্যাকগ্রাউন্ড ছবি দিন
  const { language } = useLanguage();
  return (
    <section className="py-20 sm:py-28 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div
          className="relative w-full overflow-hidden rounded-2xl bg-cover bg-center p-8 text-white md:p-12"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          {/* ছবির উপর একটি ডার্ক ওভারলে */}
          <div className="absolute inset-0 bg-black/70 dark:bg-black/80"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* উপরের ট্যাগ */}
            <div className="mb-4 rounded-full border-2 border-white/30 bg-white/10 px-6 py-2 text-sm font-medium backdrop-blur-sm">
              {language ? 'সফলতা ও অর্জন' : 'Success & Achievements'}
            </div>

            {/* প্রধান শিরোনাম */}
            <h2 className="mb-10 text-3xl font-extrabold md:text-4xl">
              {language ? (
                <>
                  বিগত ৫ বছরে মোয়াস বিডির <br /> সফলতা ও অর্জন!
                </>
              ) : (
                ' Success & Achievements in the Last 5 Years!'
              )}
            </h2>

            {/* স্ট্যাটাস কার্ডগুলোর গ্রিড */}
            <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {(language ? achievementsBn : achievementsEn).map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center space-x-3 rounded-lg bg-white/90 dark:bg-gray-900/80 p-4 text-gray-800 dark:text-white shadow-md backdrop-blur-md transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div className="text-left">
                      <p className="text-xl font-bold">{item.count}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {item.label}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
>>>>>>> origin/development
        </div>
      </div>
    </section>
  );
}