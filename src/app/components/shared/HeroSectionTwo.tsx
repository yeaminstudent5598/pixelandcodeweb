"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Smartphone,
  Video,
  TrendingUp,
  Palette,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const services = [
  {
    id: 1,
    title: {
      en: "Web Development",
      bn: "ওয়েব ডেভেলপমেন্ট",
    },
    image: "/services/web-development.png",
    icon: Code2,
  },
  {
    id: 2,
    title: {
      en: "App Development",
      bn: "অ্যাপ ডেভেলপমেন্ট",
    },
    image: "/services/app-development.png",
    icon: Smartphone,
  },
  {
    id: 3,
    title: {
      en: "Video Editing",
      bn: "ভিডিও এডিটিং",
    },
    image: "/services/video-editing.png",
    icon: Video,
  },
  {
    id: 4,
    title: {
      en: "Meta Marketing",
      bn: "মেটা মার্কেটিং",
    },
    image: "/services/meta-merktinf.png",
    icon: TrendingUp,
  },
  {
    id: 5,
    title: {
      en: "Graphic Design",
      bn: "গ্রাফিক ডিজাইন",
    },
    image: "/services/graphic-design.png",
    icon: Palette,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroSectionTwo() {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-[#050816]">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-180px] top-[20%] h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[-250px] left-[35%] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px]" />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-50
          dark:opacity-[0.08]
          [background-image:linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Soft radial overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_70%_45%,rgba(59,130,246,0.08),transparent_32%)]
          dark:bg-[radial-gradient(circle_at_70%_45%,rgba(37,99,235,0.12),transparent_35%)]
        "
      />

      {/* =========================================================
          DECORATIVE FLOATING DOTS
      ========================================================== */}

      <motion.div
        className="absolute left-[7%] top-[24%] h-2 w-2 rounded-full bg-blue-500"
        animate={{ y: [0, -18, 0], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[42%] top-[15%] h-1.5 w-1.5 rounded-full bg-purple-500"
        animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] bottom-[20%] h-2 w-2 rounded-full bg-cyan-500"
        animate={{ x: [0, -15, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-20 max-w-2xl"
          >
            {/* Badge */}
            <motion.div variants={textVariants}>
              <div
                className="
                  mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200
                  bg-white/80 px-4 py-2 shadow-[0_8px_30px_rgba(37,99,235,0.08)]
                  backdrop-blur-xl dark:border-blue-900/60 dark:bg-blue-950/40
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                  {language ? "ডিজিটাল এক্সপার্টিজ" : "Digital Expertise"}
                </span>
                <Sparkles className="h-3.5 w-3.5 text-purple-500" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={textVariants}
              className="max-w-[680px] text-5xl font-black leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[72px] dark:text-white"
            >
              {language ? (
                <>
                  আপনার{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    আইডিয়াকে
                  </span>
                  <br /> ডিজিটাল বাস্তবতায় <br /> রূপ দিন।
                </>
              ) : (
                <>
                  Turn Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Ideas
                  </span>
                  <br /> Into Digital <br /> Reality.
                </>
              )}
            </motion.h1>

            {/* Decorative line */}
            <motion.div variants={textVariants} className="my-8 flex items-center gap-3">
              <div className="h-[3px] w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="max-w-xl text-base font-medium leading-7 text-slate-600 sm:text-lg dark:text-slate-400"
            >
              {language
                ? "আমরা আধুনিক ওয়েব, অ্যাপ, ডিজাইন, ভিডিও এবং মার্কেটিং সলিউশন তৈরি করি যা আপনার ব্র্যান্ডকে আরও দ্রুত বৃদ্ধি করতে সাহায্য করে।"
                : "We create modern web, app, design, video, and marketing solutions that help your brand grow, connect, and stand out in the digital world."}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={textVariants} className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#services"
                className="
                  group relative inline-flex items-center gap-3 overflow-hidden rounded-full
                  bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-7 py-4
                  text-sm font-bold text-white shadow-[0_15px_35px_rgba(37,99,235,0.28)]
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(79,70,229,0.38)]
                "
              >
                <span className="relative z-10">{language ? "সার্ভিস দেখুন" : "Explore Services"}</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </Link>

              <Link
                href="#about"
                className="
                  group inline-flex items-center gap-3 rounded-full border border-slate-200
                  bg-white/80 px-7 py-4 text-sm font-bold text-slate-700 shadow-sm
                  backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200
                  hover:text-blue-600 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60
                  dark:text-slate-300 dark:hover:border-blue-800 dark:hover:text-blue-400
                "
              >
                <Zap className="h-4 w-4 text-blue-500 transition-transform duration-300 group-hover:rotate-12" />
                {language ? "আরও জানুন" : "Discover More"}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={textVariants}
              className="mt-10 grid max-w-[500px] grid-cols-3 border-y border-slate-200 py-5 dark:border-slate-800"
            >
              <div>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">50+</h3>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  {language ? "প্রজেক্ট" : "Projects"}
                </p>
              </div>
              <div className="border-l border-slate-200 pl-5 dark:border-slate-800">
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">5+</h3>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  {language ? "সার্ভিস" : "Services"}
                </p>
              </div>
              <div className="border-l border-slate-200 pl-5 dark:border-slate-800">
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">24/7</h3>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  {language ? "সাপোর্ট" : "Support"}
                </p>
              </div>
            </motion.div>

            {/* Small trust card */}
            <motion.div
              variants={textVariants}
              className="
                mt-7 inline-flex items-center gap-3 rounded-2xl border border-blue-100
                bg-white/80 px-4 py-3 shadow-[0_10px_30px_rgba(37,99,235,0.07)]
                backdrop-blur-xl dark:border-blue-900/40 dark:bg-slate-900/70
              "
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
                  {language ? "আমাদের শক্তি" : "Our Strength"}
                </p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {language ? "ক্রিয়েটিভ ডিজিটাল সলিউশন" : "Creative Digital Solutions"}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE — BENTO GRID FORMATION
          ====================================================== */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative flex min-h-[570px] items-center justify-center lg:min-h-[650px]"
          >
            {/* Background decorations */}
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100 bg-blue-50/30 dark:border-blue-900/30 dark:bg-blue-950/10"
              animate={{ scale: [1, 1.04, 1], rotate: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-200/60 dark:border-blue-900/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

            {/* =================================================
                BENTO IMAGE GRID
            ================================================== */}
            <div className="relative z-10 grid w-full max-w-[660px] grid-cols-2 gap-4 sm:gap-5">
              {services.map((service, index) => {
                const Icon = service.icon;
                
                // Set layout dynamically: 1st item spans full width, rest are half
                const isFeatured = index === 0;

                return (
                  <motion.div
                    key={service.id}
                    variants={imageVariants}
                    animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
                    transition={{
                      opacity: { duration: 0.7 },
                      scale: { duration: 0.7 },
                      y: { duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
                    }}
                    className={`
                      group relative overflow-hidden rounded-[26px] border border-white/80
                      bg-white p-1.5 shadow-[0_20px_60px_rgba(15,23,42,0.12)]
                      transition-all duration-500 hover:-translate-y-2
                      hover:shadow-[0_30px_70px_rgba(37,99,235,0.20)]
                      dark:border-slate-700 dark:bg-slate-900
                      ${isFeatured ? "col-span-2 h-[220px] sm:h-[260px]" : "col-span-1 h-[190px] sm:h-[215px]"}
                    `}
                  >
                    {/* Image Container */}
                    <div className="relative h-full w-full overflow-hidden rounded-[21px]">
                      <Image
                        src={service.image}
                        alt={service.title.en}
                        fill
                        priority={index < 2}
                        sizes={isFeatured ? "(max-width: 1024px) 90vw, 660px" : "(max-width: 640px) 45vw, 320px"}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      {/* Enhanced Dark gradient for better text visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                      
                      {/* Blue glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Icon */}
                      <motion.div
                        className="
                          absolute left-4 top-4 flex h-10 w-10 items-center justify-center
                          rounded-xl border border-white/20 bg-slate-950/50 text-white
                          shadow-xl backdrop-blur-md
                        "
                        whileHover={{ rotate: 8, scale: 1.1 }}
                      >
                        <Icon className="h-5 w-5 text-blue-300" />
                      </motion.div>

                      {/* Number */}
                      <span className="absolute right-4 top-4 text-[11px] font-black tracking-[0.15em] text-white/70">
                        0{index + 1}
                      </span>

                      {/* Enhanced Bottom Title Formation */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className={`font-extrabold tracking-tight text-white drop-shadow-md ${isFeatured ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'}`}>
                          {language ? service.title.bn : service.title.en}
                        </h3>
                        <div
                          className="
                            mt-2.5 h-[3px] w-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400
                            transition-all duration-500 group-hover:w-full
                          "
                        />
                      </div>

                      {/* Shine animation */}
                      <motion.div
                        className="pointer-events-none absolute -left-[120%] top-0 h-full w-[70%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ left: ["-120%", "180%"] }}
                        transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating expertise card */}
            <motion.div
              className="
                absolute -bottom-2 left-2 z-20 hidden rounded-2xl border border-blue-100
                bg-white/90 px-4 py-3 shadow-[0_20px_50px_rgba(37,99,235,0.12)] backdrop-blur-xl
                sm:flex dark:border-blue-900/50 dark:bg-slate-900/90
              "
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <span className="h-7 w-7 rounded-full border-2 border-white bg-blue-500 dark:border-slate-900" />
                  <span className="h-7 w-7 rounded-full border-2 border-white bg-indigo-500 dark:border-slate-900" />
                  <span className="h-7 w-7 rounded-full border-2 border-white bg-purple-500 dark:border-slate-900" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {language ? "ডিজিটাল টিম" : "Digital Team"}
                  </p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">
                    {language ? "আপনার আইডিয়া, আমাদের এক্সপার্টিজ" : "Your idea. Our expertise."}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating sparkle */}
            <motion.div
              className="
                absolute right-[3%] top-[5%] z-20 flex h-12 w-12 items-center justify-center
                rounded-2xl border border-blue-200 bg-white/80 text-blue-600 shadow-xl
                backdrop-blur-xl dark:border-blue-800 dark:bg-slate-900/80 dark:text-blue-400
              "
              animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-[#050816]" />
    </section>
  );
}