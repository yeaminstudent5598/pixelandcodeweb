"use client";

import React, { useRef, useId } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Code2,
  CheckCircle2,
  TrendingUp,
  PhoneCall,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

// NOTE: this expects banner1.png to be served from the Next.js /public folder,
// i.e. the file lives at  public/images/banner1.png  →  referenced here as /images/banner1.png
const HERO_IMAGE = "/images/banner1.png";

export function HeroSection() {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const uid = useId();

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

  // ── Staggered entrance for the left column ──────────────────────────────
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  // ── Cursor-reactive 3D tilt for the hero image ──────────────────────────
  const stageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const imageAlt = language
    ? "পিক্সেল অ্যান্ড কোড — ডিজিটাল এজেন্সি ড্যাশবোর্ড ইলাস্ট্রেশন"
    : "Pixel & Code digital agency dashboard illustration";

  return (
    <>
      {/* 🎨 CSS Keyframes for Button Gradient Border Animation */}
      <style
        dangerouslySetInnerHTML={{
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
        `,
        }}
      />

      <section className="relative w-full min-h-[100vh] flex items-center justify-center bg-white dark:bg-slate-950 overflow-hidden pt-20 pb-16 lg:pt-28 font-sans">
        {/* 🎨 Subtle Background Mesh/Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/60 dark:bg-blue-900/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] rounded-full bg-indigo-100/60 dark:bg-indigo-900/20 blur-[120px]" />

          {/* Subtle Grid Pattern for Technical Feel */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] dark:opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        {/* Content Wrapper restricted to max-w-7xl */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-6 items-center">
            {/* ════ LEFT COLUMN (Text Content) ════ */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              {/* Top Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold mb-6 shadow-sm"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                {language ? "ট্রাস্টেড ডিজিটাল সলিউশন পার্টনার" : "Trusted Digital Solution Partner"}
              </motion.div>

              {/* Main Headline with Gradient */}
              <motion.h1
                variants={itemVariants}
                className="text-[40px] md:text-[52px] lg:text-[60px] leading-[1.15] font-extrabold text-slate-900 dark:text-white tracking-tight mb-6"
              >
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
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium max-w-[600px]"
              >
                {language
                  ? "স্টার্টআপ থেকে শুরু করে এন্টারপ্রাইজ— আমরা একটি রেজাল্ট-ওরিয়েন্টেড এজেন্সি, যারা ওয়েব ডেভেলপমেন্ট, ব্র্যান্ডিং এবং মার্কেটিং সলিউশনের মাধ্যমে আপনার ব্যবসাকে লোকাল এবং গ্লোবাল স্কেলে এগিয়ে নিতে সাহায্য করি।"
                  : "From startups to enterprises, we are a results-driven agency delivering tailored web development, modern branding, and digital marketing solutions designed to accelerate your business growth."}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
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
              </motion.div>

              {/* Trust Stats Line */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-slate-200 dark:border-slate-800/80"
              >
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
              </motion.div>

              {/* Mobile-only image (simple, static — no tilt) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:hidden w-full flex justify-center mt-12"
              >
                <img
                  src={HERO_IMAGE}
                  alt={imageAlt}
                  className="w-full max-w-[420px] h-auto drop-shadow-[0_20px_40px_rgba(37,99,235,0.2)]"
                  draggable={false}
                />
              </motion.div>
            </motion.div>

            {/* ════ RIGHT COLUMN (Hero Image, desktop only) ════ */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:flex items-center justify-center w-full h-[680px]"
            >
              <div
                ref={stageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 1200 }}
                className="relative w-full max-w-[640px] flex items-center justify-center"
              >
                {/* Ambient glow stage behind the image */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }
                  }
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  className="absolute w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-blue-200/50 via-indigo-200/40 to-cyan-100/30 dark:from-blue-900/30 dark:via-indigo-900/20 dark:to-cyan-900/10 blur-3xl"
                />

                {/* Grounding reflection shadow */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[65%] h-6 bg-blue-500/25 blur-2xl rounded-full z-10" />

                {/* Cursor-reactive tilting image */}
                <motion.div
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative z-20 w-full"
                >
                  <img
                    src={HERO_IMAGE}
                    alt={imageAlt}
                    className="w-full h-auto select-none pointer-events-none drop-shadow-[0_30px_60px_rgba(37,99,235,0.25)]"
                    draggable={false}
                  />
                </motion.div>

                {/* Floating Element 1: Animated Growth Graph */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-6 top-6 w-[168px] bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {language ? "গ্রোথ ট্র্যাকিং" : "Growth Tracking"}
                    </span>
                    <TrendingUp className="w-4 h-4 text-green-500 shrink-0" />
                  </div>

                  <div className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
                    {language ? "+ ২১৪%" : "+214%"}
                  </div>

                  {/* Animated rising sparkline: draws bottom-left → top-right, loops */}
                  <svg viewBox="0 0 140 52" className="w-full h-12" fill="none">
                    <defs>
                      <linearGradient id={`graphLine-${uid}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                      <linearGradient id={`graphFill-${uid}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    <motion.path
                      d="M4 46 L26 38 L48 41 L70 26 L92 30 L114 14 L136 6"
                      fill="none"
                      stroke={`url(#graphLine-${uid})`}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={shouldReduceMotion ? { pathLength: 1 } : { pathLength: [0, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.2,
                        ease: "easeInOut",
                        repeatDelay: 0.6,
                      }}
                    />

                    <motion.path
                      d="M4 46 L26 38 L48 41 L70 26 L92 30 L114 14 L136 6 L136 52 L4 52 Z"
                      fill={`url(#graphFill-${uid})`}
                      stroke="none"
                      initial={{ opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0, 0.9, 0.9] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.2,
                        ease: "easeInOut",
                        repeatDelay: 0.6,
                      }}
                    />

                    <motion.circle
                      cx="136"
                      cy="6"
                      r="3.5"
                      fill="#0ea5e9"
                      animate={
                        shouldReduceMotion
                          ? {}
                          : { scale: [0.6, 1.3, 1], opacity: [0, 1, 1] }
                      }
                      transition={{
                        repeat: Infinity,
                        duration: 2.2,
                        ease: "easeInOut",
                        repeatDelay: 0.6,
                      }}
                    />
                  </svg>
                </motion.div>

                {/* Floating Element 2: Tech Badge */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -left-8 bottom-4 bg-white dark:bg-slate-800 py-3 px-5 rounded-full shadow-xl border border-slate-100 dark:border-slate-700 z-30 flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                    {language ? "এন্ড-টু-এন্ড সলিউশন" : "End-to-End Solutions"}
                  </span>
                </motion.div>
              </div>
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