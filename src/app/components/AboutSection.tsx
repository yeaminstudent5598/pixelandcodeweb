"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Target,
  Lightbulb,
  ShieldCheck,
  Zap,
  Users,
  Award,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Headphones,
  Rocket,
  Activity,
  Zap as PulseIcon,
} from "lucide-react";

export function AboutSection() {
  const { language } = useLanguage();

  /* =========================================================
     ANIMATION VARIANTS
  ========================================================= */

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  /* =========================================================
     CORE VALUES
  ========================================================= */

  const coreValues = language
    ? [
        {
          icon: <ShieldCheck className="w-6 h-6" />,
          title: "আস্থা ও নিরাপত্তা",
          desc: "আমরা ক্লায়েন্টের ডেটা এবং প্রজেক্টের সর্বোচ্চ নিরাপত্তা ও গোপনীয়তা নিশ্চিত করি।",
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "এজাইল মেথডলজি",
          desc: "দ্রুত ডেলিভারি এবং কোয়ালিটির সমন্বয় ঘটিয়ে আমরা প্রজেক্ট সম্পন্ন করি।",
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "এক্সপার্ট টিম",
          desc: "আমাদের রয়েছে অভিজ্ঞ, ডেডিকেটেড এবং প্রফেশনাল ডেভেলপার ও ডিজাইনার প্যানেল।",
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "প্রিমিয়াম কোয়ালিটি",
          desc: "আন্তর্জাতিক মান বজায় রেখে স্কেলেবল এবং ফিউচার-প্রুফ সলিউশন তৈরি করি।",
        },
      ]
    : [
        {
          icon: <ShieldCheck className="w-6 h-6" />,
          title: "Trust & Security",
          desc: "We ensure maximum security and confidentiality for our clients’ data and projects.",
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Agile Methodology",
          desc: "Delivering projects fast without ever compromising on code and design quality.",
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Expert Team",
          desc: "A dedicated panel of experienced, professional developers, designers, and marketers.",
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Premium Quality",
          desc: "Building scalable, future-proof solutions maintaining strict international standards.",
        },
      ];

  /* =========================================================
     STATS
  ========================================================= */

  const stats = language
    ? [
        { num: "৫০+", label: "সফল প্রজেক্ট" },
        { num: "৩০+", label: "গ্লোবাল ক্লায়েন্ট" },
        { num: "৩+", label: "বছরের অভিজ্ঞতা" },
      ]
    : [
        { num: "50+", label: "Projects Done" },
        { num: "30+", label: "Global Clients" },
        { num: "3+", label: "Years Exp." },
      ];

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-slate-950 font-sans">
      {/* =========================================================
          1. HERO SECTION
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-900/50">
        {/* Background Grid */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-[0.35]
            dark:opacity-[0.08]
            bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]
            bg-[size:42px_42px]
          "
        />

        {/* Top Glow */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[120px] dark:bg-blue-700/10" />

        {/* Bottom Glow */}
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-300/20 blur-[120px] dark:bg-indigo-700/10" />

        {/* Full Width Container */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[760px] items-center gap-12 py-28 lg:grid-cols-12 lg:gap-10 lg:py-32">
            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              {/* Badge */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-800/60 dark:bg-slate-900/70 dark:text-blue-400">
                <Sparkles className="h-4 w-4" />

                {language
                  ? "ডিজিটাল প্রবৃদ্ধি ও স্কেলিং"
                  : "Digital Growth & Scaling"}
              </div>

              {/* Heading */}

              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-[4.25rem] dark:text-white">
                {language ? (
                  <>
                    আপনার ব্যবসাকে{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                      উঁচুতে তুলে ধরতে
                    </span>{" "}
                    আমরা প্রস্তুত
                  </>
                ) : (
                  <>
                    Empowering Your{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                      Business Growth
                    </span>{" "}
                    To New Heights
                  </>
                )}
              </h1>

              {/* Description */}

              <p className="mt-7 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
                {language
                  ? "আমরা শুধু ডিজাইন বা ডেভেলপ করি না—আপনার ব্যবসাকে কাঙ্ক্ষিত লক্ষ্যে পৌঁছাতে শুরু থেকে শেষ পর্যন্ত ১০০% ফুল সাপোর্ট দিই। আমাদের ডাটা-ড্রিভেন পরিকল্পনা এবং আধুনিক আইটি সমাধান আপনার ব্র্যান্ডের গ্রোথকে নিয়ে যাবে অনন্য উচ্চতায়।"
                  : "We don’t just build products; we partner with you for full 360° support. From strategies to modern tech implementations, we drive your agency’s scalable growth every step of the way."}
              </p>

              {/* CTA */}

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/40"
                >
                  <Rocket className="mr-2.5 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

                  {language ? "প্রজেক্ট শুরু করুন" : "Start Your Project"}
                </Link>

                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300">
                  <Headphones className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />

                  {language
                    ? "ফুল সাপোর্ট গ্যারান্টি"
                    : "Full Support Guaranteed"}
                </div>
              </div>

              {/* Features */}

              <div className="mt-10 grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3 dark:border-slate-800">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />

                  {language ? "নিখুঁত স্ট্র্যাটেজি" : "Smart Strategy"}
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />

                  {language ? "স্কেলেবল কোডিং" : "Scalable Architecture"}
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />

                  {language ? "২৪/৭ ক্লায়েন্ট যত্ন" : "24/7 Dedicated Care"}
                </div>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative lg:col-span-5"
            >
              <div className="relative mx-auto w-full max-w-[600px]">
                {/* Glow behind image */}

                <div className="pointer-events-none absolute inset-10 rounded-full bg-blue-400/20 blur-[90px] dark:bg-blue-600/10" />

                <div className="relative overflow-hidden rounded-[2rem]">
                  <Image
                    src="/images/growth1.png"
                    alt="Agency Growth Support"
                    width={600}
                    height={480}
                    priority
                    className="relative z-10 h-auto w-full object-contain transition-transform duration-700 hover:scale-[1.03]"
                  />

                  {/* Floating Badge 1 */}

                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-2 top-6 z-30 flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/90 p-2.5 shadow-xl backdrop-blur-md sm:right-5 dark:border-slate-700 dark:bg-slate-900/90"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <TrendingUp className="h-4 w-4" />
                    </div>

                    <div>
                      <div className="text-xs font-extrabold text-slate-800 dark:text-slate-100">
                        {language ? "১০গুণ প্রবৃদ্ধি" : "10x Business Scale"}
                      </div>

                      <div className="text-[10px] font-medium text-slate-500">
                        {language
                          ? "গ্রোথ ফোকাসড সাপোর্ট"
                          : "Growth-Focused"}
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Badge 2 */}

                  <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-2 top-24 z-30 flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/90 p-2.5 shadow-xl backdrop-blur-md sm:left-5 dark:border-slate-700 dark:bg-slate-900/90"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <PulseIcon className="h-4 w-4" />
                    </div>

                    <div>
                      <div className="text-xs font-extrabold text-slate-800 dark:text-slate-100">
                        {language ? "ফুল সাপোর্ট" : "Full Support"}
                      </div>

                      <div className="text-[10px] font-medium text-slate-500">
                        {language
                          ? "সর্বদা আপনার পাশে"
                          : "Always By Your Side"}
                      </div>
                    </div>
                  </motion.div>

                  {/* Growth Graph */}

                  <div className="absolute inset-x-3 bottom-3 z-30 sm:inset-x-5 sm:bottom-5">
                    <div className="rounded-2xl border border-slate-700/60 bg-slate-950/85 p-4 shadow-2xl backdrop-blur-xl">
                      {/* Graph Header */}

                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="rounded-lg bg-blue-500/10 p-1.5 text-blue-400">
                            <Activity className="h-4 w-4" />
                          </span>

                          <div>
                            <p className="text-xs font-bold text-slate-200">
                              Real-time Growth Curve
                            </p>

                            <p className="text-[10px] text-slate-400">
                              Continuous Performance
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-extrabold text-emerald-400">
                          <TrendingUp className="h-3.5 w-3.5" />
                          +340%
                        </div>
                      </div>

                      {/* SVG Chart */}

                      <div className="relative h-20 w-full overflow-hidden">
                        <svg
                          className="h-full w-full overflow-visible"
                          viewBox="0 0 300 80"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient
                              id="lineGraphGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="#3B82F6"
                                stopOpacity="0.4"
                              />

                              <stop
                                offset="100%"
                                stopColor="#3B82F6"
                                stopOpacity="0"
                              />
                            </linearGradient>

                            <linearGradient
                              id="strokeGradient"
                              x1="0"
                              y1="0"
                              x2="1"
                              y2="0"
                            >
                              <stop offset="0%" stopColor="#3B82F6" />
                              <stop offset="50%" stopColor="#6366F1" />
                              <stop offset="100%" stopColor="#10B981" />
                            </linearGradient>
                          </defs>

                          <motion.path
                            d="M 0 60 Q 50 70, 100 35 T 200 40 T 300 10 L 300 80 L 0 80 Z"
                            fill="url(#lineGraphGradient)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                          />

                          <motion.path
                            d="M 0 60 Q 50 70, 100 35 T 200 40 T 300 10"
                            fill="none"
                            stroke="url(#strokeGradient)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                              duration: 2,
                              ease: "easeInOut",
                            }}
                          />

                          <motion.circle
                            cx="300"
                            cy="10"
                            r="5"
                            fill="#10B981"
                            animate={{
                              r: [4, 7, 4],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                            }}
                          />
                        </svg>
                      </div>

                      {/* Timeline */}

                      <div className="mt-1 flex items-center justify-between px-1 text-[10px] font-medium text-slate-400">
                        <span>Mon</span>
                        <span>Wed</span>
                        <span>Fri</span>
                        <span className="font-bold text-emerald-400">
                          Today
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. OUR IMPACT
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-slate-50 py-24 dark:bg-[#0b0f17] md:py-32">
        {/* Background */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-500/10" />

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-[100px] dark:bg-cyan-500/10" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/15 blur-[100px] dark:bg-blue-600/10" />

        {/* 7XL CONTENT */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-14"
            >
              {/* Badge */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-100/50 px-4 py-2 text-sm font-bold uppercase tracking-wide text-blue-700 backdrop-blur-md dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600 dark:bg-blue-400" />

                {language ? "আমাদের সম্পর্কে" : "Our Impact"}
              </div>

              {/* Heading */}

              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
                {language ? "কেন " : "Why Choose "}

                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
                  Pixel & Code?
                </span>
              </h2>

              <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg md:text-xl dark:text-slate-400">
                {language
                  ? "আমরা বিশ্বাস করি প্রতিটি ব্যবসার একটি নিজস্ব গল্প আছে। আমাদের লক্ষ্য হলো সেই গল্পটিকে ডিজিটাল প্ল্যাটফর্মে নিখুঁতভাবে ফুটিয়ে তোলা।"
                  : "We believe every business has a unique story. Our goal is to translate that story flawlessly into the digital space. Our data-driven approach and scalable architecture ensure long-term success."}
              </p>
            </motion.div>

            {/* STATS */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-3"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-purple-500/0 transition-all duration-500 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-purple-500/5" />

                  <div className="relative z-10">
                    <h4 className="mb-3 text-5xl font-black text-slate-800 transition-colors duration-300 group-hover:text-blue-600 md:text-6xl dark:text-white dark:group-hover:text-cyan-400">
                      {stat.num}
                    </h4>

                    <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. MISSION & VISION
      ========================================================= */}

      <section className="relative w-full overflow-hidden border-y border-slate-100 bg-white py-24 dark:border-slate-800/60 dark:bg-[#070b14] md:py-32">
        {/* Background Glows */}

        <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/10" />

        <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-600/10" />

        {/* 7XL CONTENT */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-8 md:grid-cols-2 lg:gap-10">
            {/* MISSION */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-br from-blue-500 to-cyan-400 opacity-0 blur-md transition-all duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-slate-50/90 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 sm:p-10 lg:p-12 dark:border-slate-800 dark:bg-slate-900/80">
                <div className="absolute -right-10 -top-10 h-48 w-48 rounded-bl-full bg-gradient-to-bl from-blue-100 to-transparent transition-transform duration-700 group-hover:scale-125 dark:from-blue-900/20" />

                <div className="relative z-10">
                  {/* Icon */}

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-[2px] shadow-lg shadow-blue-500/30"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-white dark:bg-slate-950">
                      <Target className="h-8 w-8 text-blue-600 dark:text-cyan-400" />
                    </div>
                  </motion.div>

                  {/* Badge */}

                  <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 dark:border-blue-800/50 dark:bg-blue-900/30 dark:text-blue-300">
                    {language ? "আমাদের লক্ষ্য" : "Our Core Focus"}
                  </div>

                  <h3 className="mb-5 text-3xl font-extrabold text-slate-900 transition-colors duration-500 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                    {language ? "আমাদের মিশন" : "Our Mission"}
                  </h3>

                  <p className="text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                    {language
                      ? "উন্নত প্রযুক্তি এবং সৃজনশীল আইডিয়ার মাধ্যমে ক্ষুদ্র, মাঝারি এবং বৃহৎ উদ্যোক্তাদের ব্যবসায়িক পরিধি বৃদ্ধি করা। আমরা চাই প্রতিটি ব্যবসাকে অনলাইনে একটি শক্তিশালী এবং প্রফিটেবল ব্র্যান্ড হিসেবে প্রতিষ্ঠিত করতে।"
                      : "To empower small, medium, and large enterprises through advanced technology and creative ideas. We aim to establish every business as a powerful and profitable brand in the digital space."}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* VISION */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 blur-md transition-all duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-slate-50/90 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 sm:p-10 lg:p-12 dark:border-slate-800 dark:bg-slate-900/80">
                <div className="absolute -right-10 -top-10 h-48 w-48 rounded-bl-full bg-gradient-to-bl from-indigo-100 to-transparent transition-transform duration-700 group-hover:scale-125 dark:from-indigo-900/20" />

                <div className="relative z-10">
                  {/* Icon */}

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                    className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 p-[2px] shadow-lg shadow-indigo-500/30"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-white dark:bg-slate-950">
                      <Lightbulb className="h-8 w-8 text-indigo-600 dark:text-purple-400" />
                    </div>
                  </motion.div>

                  {/* Badge */}

                  <div className="mb-4 inline-flex rounded-full border border-indigo-200 bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:border-indigo-800/50 dark:bg-indigo-900/30 dark:text-indigo-300">
                    {language ? "ভবিষ্যৎ রূপরেখা" : "Future Outlook"}
                  </div>

                  <h3 className="mb-5 text-3xl font-extrabold text-slate-900 transition-colors duration-500 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-purple-400">
                    {language ? "আমাদের ভিশন" : "Our Vision"}
                  </h3>

                  <p className="text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                    {language
                      ? "আগামী ৫ বছরের মধ্যে বাংলাদেশের অন্যতম শীর্ষস্থানীয় এবং বিশ্বস্ত গ্লোবাল ডিজিটাল সলিউশন প্রোভাইডার হিসেবে নিজেদের প্রতিষ্ঠিত করা এবং আন্তর্জাতিক মানচিত্রে দেশীয় আইটি খাতের প্রতিনিধিত্ব করা।"
                      : "To establish ourselves as one of the most trusted global digital solution providers from Bangladesh within 5 years, representing our local IT sector on the international map."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. CORE VALUES
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-slate-50/60 py-20 dark:bg-slate-900/30 md:py-28">
        {/* Background Glow */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10" />

        {/* 7XL CONTENT */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}

          <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <div className="mb-3 inline-flex items-center rounded-full bg-blue-100/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 backdrop-blur-md dark:bg-blue-900/40 dark:text-blue-400">
              {language ? "আমাদের বৈশিষ্ট্য" : "Why We Stand Out"}
            </div>

            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              {language ? "আমাদের মূলনীতি" : "Our Core Values"}
            </h2>

            <p className="text-base font-medium leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
              {language
                ? "আমরা কাজের ক্ষেত্রে স্বচ্ছতা এবং প্রফেশনালিজম বজায় রাখি।"
                : "We maintain absolute transparency and professionalism in everything we do."}
            </p>
          </div>

          {/* VALUES GRID */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800/80 dark:bg-slate-900/80"
              >
                {/* Top Accent */}

                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Background Glow */}

                <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Icon */}

                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white dark:bg-slate-800 dark:text-blue-400">
                      {React.cloneElement(value.icon, {
                        className:
                          "w-7 h-7 transition-colors duration-300",
                      })}
                    </div>

                    <div className="h-2 w-2 rounded-full bg-slate-200 transition-colors duration-300 group-hover:bg-blue-500 dark:bg-slate-800" />
                  </div>

                  {/* Title */}

                  <h3 className="mb-3 text-lg font-bold text-slate-900 transition-colors duration-200 group-hover:text-blue-600 sm:text-xl dark:text-white dark:group-hover:text-blue-400">
                    {value.title}
                  </h3>

                  {/* Description */}

                  <p className="text-sm font-normal leading-7 text-slate-600 dark:text-slate-400">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. FINAL CTA
      ========================================================= */}

      <section className="relative w-full overflow-hidden bg-white py-20 dark:bg-slate-950 md:py-28">
        {/* Full Width Background */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px] dark:bg-blue-600/10" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:48px_48px] opacity-20 dark:opacity-[0.04]" />
        </div>

        {/* 7XL CONTENT */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 px-6 py-16 text-center shadow-xl shadow-slate-200/30 sm:px-10 md:py-20 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
          >
            {/* CTA Glows */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-3xl">
              {/* Badge */}

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm dark:border-blue-800 dark:bg-slate-950 dark:text-blue-400">
                <Sparkles className="h-4 w-4" />

                {language ? "চলুন একসাথে শুরু করি" : "Let's Build Together"}
              </div>

              {/* Heading */}

              <h2 className="mb-7 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl dark:text-white">
                {language ? (
                  <>
                    আপনার প্রজেক্ট নিয়ে{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      কথা বলতে চান?
                    </span>
                  </>
                ) : (
                  <>
                    Ready to Build{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Something Great?
                    </span>
                  </>
                )}
              </h2>

              {/* Description */}

              <p className="mx-auto mb-10 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                {language
                  ? "আমাদের প্রফেশনাল টিমের সাথে ফ্রি কনসালটেশন বুক করুন আজই।"
                  : "Book a free consultation with our professional team today."}
              </p>

              {/* CTA */}

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/40"
              >
                {language
                  ? "ফ্রি কনসালটেশন বুক করুন"
                  : "Book a Consultation"}

                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}