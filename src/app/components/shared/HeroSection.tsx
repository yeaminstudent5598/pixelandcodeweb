"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Globe, Code2, CheckCircle2, TrendingUp, Sparkles, PhoneCall } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function HeroSection() {
  const { language } = useLanguage();

  // কর্পোরেট স্টাইলের স্ট্যাটাস
  const stats = language
    ? [
        { num: "৫০+", label: "সফল প্রজেক্ট", icon: <Code2 className="w-5 h-5 text-blue-500" /> },
        { num: "৩০+", label: "গ্লোবাল ও লোকাল ক্লায়েন্ট", icon: <Globe className="w-5 h-5 text-indigo-500" /> },
        { num: "১০০%", label: "ক্লায়েন্ট স্যাটিসফেকশন", icon: <CheckCircle2 className="w-5 h-5 text-teal-500" /> },
      ]
    : [
        { num: "50+", label: "Projects Delivered", icon: <Code2 className="w-5 h-5 text-blue-500" /> },
        { num: "30+", label: "Global & Local Clients", icon: <Globe className="w-5 h-5 text-indigo-500" /> },
        { num: "100%", label: "Client Satisfaction", icon: <CheckCircle2 className="w-5 h-5 text-teal-500" /> },
      ];

  return (
    <>
      {/* 🎨 CSS Keyframes for Button Gradient Border Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes btnGradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-btn-gradient {
            background-size: 200% 200%;
            animation: btnGradientMove 4s ease infinite;
          }
        `
      }} />

      <section className="relative w-full min-h-[100vh] flex items-center justify-center bg-white dark:bg-slate-950 overflow-hidden pt-20 pb-16 lg:pt-28 font-sans">
        
        {/* 🎨 Subtle Background Mesh/Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/60 dark:bg-blue-900/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] rounded-full bg-indigo-100/60 dark:bg-indigo-900/20 blur-[120px]" />
          
          {/* Subtle Grid Pattern for Technical Feel */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* ════ LEFT COLUMN (Text Content) ════ */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold mb-6 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                {language ? "ট্রাস্টেড ডিজিটাল সলিউশন পার্টনার" : "Trusted Digital Solution Partner"}
              </div>

              {/* Main Headline with Gradient */}
              <h1 className="text-[40px] md:text-[52px] lg:text-[60px] leading-[1.15] font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
                {language ? (
                  <>
                    <span className="block">তৈরি করুন</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 pb-1">
                      উদ্ভাবনী ও স্কেলেবল
                    </span>
                    <span className="block">ডিজিটাল সলিউশন</span>
                  </>
                ) : (
                  <>
                    <span className="block">Build Scalable &</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 pb-1">
                      Innovative Digital
                    </span>
                    <span className="block">Solutions</span>
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium max-w-[540px]">
                {language
                  ? "স্টার্টআপ থেকে শুরু করে এন্টারপ্রাইজ— আমরা একটি রেজাল্ট-ওরিয়েন্টেড এজেন্সি, যারা ওয়েব ডেভেলপমেন্ট, ব্র্যান্ডিং এবং মার্কেটিং সলিউশনের মাধ্যমে আপনার ব্যবসাকে লোকাল এবং গ্লোবাল স্কেলে এগিয়ে নিতে সাহায্য করি।"
                  : "From startups to enterprises, we are a results-driven agency delivering tailored web development, modern branding, and digital marketing solutions designed to accelerate your business growth."}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Link href="/contact">
                  <ButtonPrimary>
                    {language ? "প্রজেক্ট নিয়ে কথা বলুন" : "Start a Project"}
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </ButtonPrimary>
                </Link>
                
                <Link href="/contact">
                  <ButtonSecondary>
                    <PhoneCall className="w-5 h-5 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                    {language ? "ফ্রি কনসালটেশন বুক করুন" : "Book Free Consultation"}
                  </ButtonSecondary>
                </Link>
              </div>

              {/* Trust Stats Line */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-slate-200 dark:border-slate-800/80">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                        {stat.num}
                      </span>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>


            {/* ════ RIGHT COLUMN (Clean UI Composition) ════ */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:flex items-center justify-center w-full h-[600px]"
            >
              {/* Main Floating Mockup Window */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative w-full max-w-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-[0_20px_50px_-12px_rgba(37,99,235,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-slate-200/60 dark:border-slate-700/50 overflow-hidden z-20"
              >
                {/* Browser Header */}
                <div className="h-12 bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800/80 flex items-center px-4 gap-2 backdrop-blur-sm">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="mx-auto px-4 py-1.5 bg-white dark:bg-slate-900 rounded-md shadow-sm border border-slate-200 dark:border-slate-700/50 text-[10px] text-slate-400 font-medium flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-blue-500" />
                    pixelandcode.agency
                  </div>
                </div>
                
                {/* Fake UI Content */}
                <div className="p-6 space-y-6 bg-slate-50/30 dark:bg-transparent">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <div className="w-24 h-4 bg-blue-100 dark:bg-blue-900/30 rounded-full"></div>
                      <div className="w-32 h-6 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-tr from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-full flex items-center justify-center border border-blue-200 dark:border-blue-800/50">
                      <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-28 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-xl p-4 flex flex-col justify-between shadow-sm">
                      <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <Code2 className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-12 h-3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                        <div className="w-20 h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
                      </div>
                    </div>
                    <div className="h-28 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-xl p-4 flex flex-col justify-between shadow-sm">
                      <div className="w-8 h-8 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                        <Globe className="w-4 h-4 text-indigo-500" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="w-12 h-3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                        <div className="w-20 h-4 bg-slate-300 dark:bg-slate-600 rounded"></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-full h-14 bg-white dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700/50 shadow-sm flex items-center px-4 gap-4">
                        <div className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                        <div className="flex-1 space-y-2">
                          <div className="w-1/2 h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                          <div className="w-1/3 h-2 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1: Growth Badge */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 top-40 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-30 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center border border-green-100 dark:border-green-800/50">
                  <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white">+ 214%</div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Business Scaled</div>
                </div>
              </motion.div>

              {/* Floating Element 2: Tech Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-10 bottom-32 bg-white dark:bg-slate-800 py-3 px-5 rounded-full shadow-xl border border-slate-100 dark:border-slate-700 z-30 flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">End-to-End Solutions</span>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

// ==========================================
// 🧩 Helper Components for Buttons
// ==========================================

// 🚀 Primary Button: Animated Gradient Border
function ButtonPrimary({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative group inline-flex items-center justify-center p-[2px] rounded-full font-bold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 focus:outline-none">
      {/* Animated Gradient Border Layer */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 animate-btn-gradient rounded-full"></span>
      
      {/* Inner Clean Background (White/Slate) */}
      <span className="relative flex items-center justify-center px-7 py-3.5 w-full h-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-full transition-all duration-300 group-hover:bg-blue-50 dark:group-hover:bg-slate-800">
        {children}
      </span>
    </button>
  );
}

// 🎯 Secondary Button: Clean Solid Border 
function ButtonSecondary({ children }: { children: React.ReactNode }) {
  return (
    <button className="group relative inline-flex items-center justify-center px-7 py-3.5 text-sm md:text-base font-bold text-slate-700 dark:text-slate-200 transition-all duration-300 bg-transparent border-2 border-slate-200 dark:border-slate-800 rounded-full hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 hover:-translate-y-1 focus:outline-none shadow-sm">
      {children}
    </button>
  );
}