'use client';

import React from 'react';
import { ShieldCheck, BarChart2, Users2, Clock, CheckCircle2, Zap, ArrowUpRight, Lock, Activity } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// ফিচার ডেটা
const featuresBn = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-500" />,
    title: 'সিকিউর সল্যুশন',
    description: 'ব্যাংক-গ্রেড সিকিউরিটি প্রোটোকল দিয়ে আপনার ডেটা সুরক্ষা নিশ্চিত করি।',
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-purple-500" />,
    title: 'রিয়েল-টাইম রিপোর্ট',
    description: 'লাইভ ড্যাশবোর্ডে প্রতিটি টাকার হিসাব এবং পারফর্মেন্স রিপোর্ট দেখুন।',
  },
  {
    icon: <Users2 className="h-6 w-6 text-orange-500" />,
    title: 'এক্সপার্ট টিম',
    description: 'ইন্ডাস্ট্রি এক্সপার্ট ডেভেলপার ও মার্কেটারদের দ্বারা প্রজেক্ট পরিচালিত।',
  },
  {
    icon: <Clock className="h-6 w-6 text-emerald-500" />,
    title: '২৪/৭ সাপোর্ট',
    description: 'প্রজেক্ট শেষ হওয়ার পরেও আমরা আছি আপনার টেকনিক্যাল সাপোর্টে।',
  },
];

const featuresEn = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-blue-500" />,
    title: 'Secure Solution',
    description: 'We ensure data protection with bank-grade security protocols.',
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-purple-500" />,
    title: 'Real-time Reports',
    description: 'Track every penny spent and view performance on live dashboard.',
  },
  {
    icon: <Users2 className="h-6 w-6 text-orange-500" />,
    title: 'Expert Team',
    description: 'Projects managed by industry expert developers and marketers.',
  },
  {
    icon: <Clock className="h-6 w-6 text-emerald-500" />,
    title: '24/7 Support',
    description: 'We are here for technical support even after the project is done.',
  },
];

export function WhyChooseUsSection() {
  const { language } = useLanguage();
  const features = language ? featuresBn : featuresEn;

  return (
    <section className="relative w-full py-24 md:py-32 bg-slate-50 dark:bg-black overflow-hidden transition-colors duration-300">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ==========================================
              LEFT COLUMN: TEXT & LIST
          ========================================== */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs uppercase tracking-widest mb-6 w-fit shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              {language ? 'কেন আমরা সেরা?' : 'Why Choose Us?'}
            </div>
            
            <h2 className="mb-6 text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              {language ? (
                <>আপনার ব্যবসার জন্য <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">স্মার্ট সমাধান</span></>
              ) : (
                <>Smart Solutions for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Your Business</span></>
              )}
            </h2>

            <p className="mb-10 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
              {language 
                ? 'আমরা গতানুগতিক এজেন্সির মতো নই। আমরা আপনার ব্যবসার গ্রোথ পার্টনার হিসেবে কাজ করি এবং নিশ্চিত করি সর্বোচ্চ রিটার্ন (ROI)।'
                : 'We are not like traditional agencies. We work as your growth partner and ensure the highest Return on Investment (ROI).'}
            </p>

            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==========================================
              RIGHT COLUMN: STATS GRID (No Image)
          ========================================== */}
          <div className="relative">
             <div className="grid grid-cols-2 gap-4 md:gap-6">
                
                {/* Card 1: Experience */}
                <div className="col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                   <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl text-blue-600">
                         <Activity className="w-6 h-6" />
                      </div>
                      <span className="flex items-center gap-1 text-green-500 font-bold text-sm bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">
                         +120% <ArrowUpRight className="w-4 h-4" />
                      </span>
                   </div>
                   <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-1">200+</h3>
                   <p className="text-slate-500 dark:text-slate-400 font-medium">Successful Projects</p>
                </div>

                {/* Card 2: Security */}
                <div className="bg-slate-900 dark:bg-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition-transform duration-300 group">
                   <div className="mb-4">
                      <Lock className="w-8 h-8 text-white dark:text-slate-900" />
                   </div>
                   <h3 className="text-white dark:text-slate-900 font-bold text-lg mb-1">100% Secure</h3>
                   <p className="text-slate-400 dark:text-slate-600 text-xs">Data Protection</p>
                </div>

                {/* Card 3: Satisfaction */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-3xl shadow-xl text-white hover:-translate-y-1 transition-transform duration-300">
                   <div className="mb-4">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                   </div>
                   <h3 className="font-bold text-lg mb-1">Client Love</h3>
                   <p className="text-blue-100 text-xs">5 Star Ratings</p>
                </div>

                {/* Card 4: Support (Full Width) */}
                <div className="col-span-2 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                         <Clock className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-slate-900 dark:text-white">24/7 Support</h4>
                         <p className="text-xs text-slate-500 dark:text-slate-400">Always available for you</p>
                      </div>
                   </div>
                   <button className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-5 h-5 text-slate-900 dark:text-white" />
                   </button>
                </div>

             </div>

             {/* Decorative Background Elements */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
}