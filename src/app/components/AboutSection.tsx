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
import CTASection from "./shared/CTASection";
import AboutHeroContent from "./shared/AboutHeroContent";



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

  <AboutHeroContent language={language} />

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

    <CTASection  />
    </div>
  );
}