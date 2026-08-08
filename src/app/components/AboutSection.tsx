// src/app/components/AboutSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Target,
  Lightbulb,
  ShieldCheck,
  Zap,
  Users,
  Award,
  Sparkles,
  Code2,
  CheckCircle2,
  Globe,
  TrendingUp,
} from 'lucide-react';

export function AboutSection() {
  const { language } = useLanguage();

  // 🔹 কর্পোরেট স্টাইলের কোর ভ্যালুজ
  const coreValues = language
    ? [
        { icon: <ShieldCheck className="w-6 h-6 text-blue-600" />, title: 'আস্থা ও নিরাপত্তা', desc: 'আমরা ক্লায়েন্টের ডেটা এবং প্রজেক্টের সর্বোচ্চ নিরাপত্তা ও গোপনীয়তা নিশ্চিত করি।' },
        { icon: <Zap className="w-6 h-6 text-indigo-600" />, title: 'এজাইল মেথডলজি', desc: 'দ্রুত ডেলিভারি এবং কোয়ালিটির সমন্বয় ঘটিয়ে আমরা প্রজেক্ট সম্পন্ন করি।' },
        { icon: <Users className="w-6 h-6 text-blue-600" />, title: 'এক্সপার্ট টিম', desc: 'আমাদের রয়েছে অভিজ্ঞ, ডেডিকেটেড এবং প্রফেশনাল ডেভেলপার ও ডিজাইনার প্যানেল।' },
        { icon: <Award className="w-6 h-6 text-indigo-600" />, title: 'প্রিমিয়াম কোয়ালিটি', desc: 'আন্তর্জাতিক মান বজায় রেখে স্কেলেবল এবং ফিউচার-প্রুফ সলিউশন তৈরি করি।' },
      ]
    : [
        { icon: <ShieldCheck className="w-6 h-6 text-blue-600" />, title: 'Trust & Security', desc: 'We ensure maximum security and confidentiality for our clients’ data and projects.' },
        { icon: <Zap className="w-6 h-6 text-indigo-600" />, title: 'Agile Methodology', desc: 'Delivering projects fast without ever compromising on code and design quality.' },
        { icon: <Users className="w-6 h-6 text-blue-600" />, title: 'Expert Team', desc: 'A dedicated panel of experienced, professional developers, designers, and marketers.' },
        { icon: <Award className="w-6 h-6 text-indigo-600" />, title: 'Premium Quality', desc: 'Building scalable, future-proof solutions maintaining strict international standards.' },
      ];

  const stats = language
    ? [{ num: '৫০+', label: 'সফল প্রজেক্ট' }, { num: '৩০+', label: 'গ্লোবাল ক্লায়েন্ট' }, { num: '৩+', label: 'বছরের অভিজ্ঞতা' }]
    : [{ num: '50+', label: 'Projects Done' }, { num: '30+', label: 'Global Clients' }, { num: '3+', label: 'Years Exp.' }];

  return (
    <div className="w-full bg-white dark:bg-slate-950 font-sans">
      
      {/* ═══════════════════════════════════════════════════════════
          1. HERO / HEADER SECTION (Clean Minimalist)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.04] mix-blend-overlay"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4" />
              {language ? 'আমাদের সম্পর্কে' : 'About Pixel & Code'}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              {language ? (
                <>আপনার ব্যবসায়ের <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">ডিজিটাল প্রবৃদ্ধির</span> পার্টনার</>
              ) : (
                <>Your Partner in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Growth</span> & Innovation</>
              )}
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {language
                ? 'আমরা শুধু একটি টেক এজেন্সি নই; আমরা আপনার আইডিয়ার রূপকার। অত্যাধুনিক প্রযুক্তি এবং ইনোভেটিভ ডিজাইনের সমন্বয়ে আমরা এমন সলিউশন তৈরি করি যা আপনার ব্র্যান্ডকে এক ধাপ এগিয়ে রাখে।'
                : 'We are more than just a tech agency; we are the architects of your ideas. Combining cutting-edge technology with innovative design, we build solutions that keep your brand ahead.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. WHO WE ARE (Modern Bento Grid Layout)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
                {language ? 'কেন পিক্সেল অ্যান্ড কোড?' : 'Why Choose Pixel & Code?'}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                {language
                  ? 'আমরা বিশ্বাস করি প্রতিটি ব্যবসার একটি নিজস্ব গল্প আছে। আমাদের লক্ষ্য হলো সেই গল্পটিকে ডিজিটাল প্ল্যাটফর্মে নিখুঁতভাবে ফুটিয়ে তোলা। আমাদের ডাটা-ড্রিভেন অ্যাপ্রোচ এবং স্কেলেবল আর্কিটেকচার নিশ্চিত করে দীর্ঘমেয়াদী সাফল্য।'
                  : 'We believe every business has a unique story. Our goal is to translate that story flawlessly into the digital space. Our data-driven approach and scalable architecture ensure long-term success.'}
              </p>
              
              <div className="flex flex-wrap gap-6 mt-8">
                {stats.map((s, i) => (
                  <div key={i} className="pl-4 border-l-4 border-blue-600 dark:border-blue-500">
                    <div className="text-3xl font-extrabold text-slate-900 dark:text-white">{s.num}</div>
                    <div className="text-sm font-medium text-slate-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Bento Box UI */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-3xl border border-blue-100 dark:border-blue-800/50">
                  <Code2 className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">Modern Stack</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Next.js, React, Node.js & modern architectures.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
                  <CheckCircle2 className="w-8 h-8 text-slate-700 dark:text-slate-300 mb-4" />
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">Tested Quality</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Bug-free, optimized and secure deployments.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
                  <Globe className="w-8 h-8 text-slate-700 dark:text-slate-300 mb-4" />
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">Global Standards</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Following international design guidelines.</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-800/50">
                  <TrendingUp className="w-8 h-8 text-indigo-600 mb-4" />
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">Scalable Growth</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Built to handle your business expansion.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. MISSION & VISION (Clean Corporate Cards)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">
                  {language ? 'আমাদের মিশন' : 'Our Mission'}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language
                    ? 'উন্নত প্রযুক্তি এবং সৃজনশীল আইডিয়ার মাধ্যমে ক্ষুদ্র, মাঝারি এবং বৃহৎ উদ্যোক্তাদের ব্যবসায়িক পরিধি বৃদ্ধি করা। আমরা চাই প্রতিটি ব্যবসাকে অনলাইনে একটি শক্তিশালী এবং প্রফিটেবল ব্র্যান্ড হিসেবে প্রতিষ্ঠিত করতে।'
                    : 'To empower small, medium, and large enterprises through advanced technology and creative ideas. We aim to establish every business as a powerful and profitable brand in the digital space.'}
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-900 p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-800 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 dark:bg-indigo-900/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">
                  {language ? 'আমাদের ভিশন' : 'Our Vision'}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language
                    ? 'আগামী ৫ বছরের মধ্যে বাংলাদেশের অন্যতম শীর্ষস্থানীয় এবং বিশ্বস্ত গ্লোবাল ডিজিটাল সলিউশন প্রোভাইডার হিসেবে নিজেদের প্রতিষ্ঠিত করা এবং আন্তর্জাতিক মানচিত্রে দেশীয় আইটি খাতের প্রতিনিধিত্ব করা।'
                    : 'To establish ourselves as one of the most trusted global digital solution providers from Bangladesh within 5 years, representing our local IT sector on the international map.'}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. CORE VALUES (Grid)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {language ? 'আমাদের মূলনীতি' : 'Our Core Values'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              {language 
                ? 'আমরা কাজের ক্ষেত্রে স্বচ্ছতা এবং প্রফেশনালিজম বজায় রাখি।' 
                : 'We maintain absolute transparency and professionalism in everything we do.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. FINAL CTA (Clean, Soft Blue/Indigo Vibe)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        {/* Soft Background */}
        <div className="absolute inset-4 rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              {language ? (
                <>আপনার প্রজেক্ট নিয়ে <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">কথা বলতে চান?</span></>
              ) : (
                <>Ready to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Something Great?</span></>
              )}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
              {language
                ? 'আমাদের প্রফেশনাল টিমের সাথে ফ্রি কনসালটেশন বুক করুন আজই।'
                : 'Book a free consultation with our professional team today.'}
            </p>
            
            <Link href="/contact">
              <button className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50">
                {language ? 'ফ্রি কনসালটেশন বুক করুন' : 'Book a Consultation'}
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}