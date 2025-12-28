'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Trophy, ArrowUpRight } from 'lucide-react';

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
      suffix: 'Years',
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

  return (
    <section ref={ref} className="relative w-full py-24 md:py-32 bg-slate-50 dark:bg-black overflow-hidden">
      
      {/* Background Subtle Pattern (Dot Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Soft Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-8">
              <Trophy className="w-4 h-4" />
              {language ? 'আমাদের মাইলফলক' : 'Our Milestones'}
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-8">
              {language ? (
                <>আমরা তৈরি করি <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">সাফল্যের গল্প</span></>
              ) : (
                <>We Create <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Success Stories</span></>
              )}
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 border-l-4 border-blue-500 pl-6">
              {language 
                ? 'গত কয়েক বছরে পিক্সেল এন্ড কোড নিজেকে বাংলাদেশের অন্যতম নির্ভরযোগ্য ডিজিটাল এজেন্সি হিসেবে প্রতিষ্ঠিত করেছে।' 
                : 'Over the years, Pixel & Code has established itself as one of the most reliable digital agencies in Bangladesh.'}
            </p>

            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold cursor-pointer group w-fit hover:text-blue-600 transition-colors">
              <span className="text-lg border-b-2 border-slate-200 group-hover:border-blue-600 transition-all">
                {language ? 'আমাদের পোর্টফোলিও দেখুন' : 'View Our Portfolio'}
              </span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* RIGHT COLUMN: STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative z-10">
                  <h3 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-2 tracking-tight flex items-baseline">
                    {inView ? (
                      <CountUp start={0} end={item.end} duration={2.5} separator="," />
                    ) : (
                      0
                    )}
                    <span className="text-blue-600 text-3xl ml-1 font-bold">{item.suffix}</span>
                  </h3>
                  
                  <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
                    {language ? item.labelBn : item.labelEn}
                  </h4>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors">
                    {language ? item.descBn : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}