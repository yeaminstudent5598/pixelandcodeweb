"use client";

import React, { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Rocket,
  Sparkles,
  Activity,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";

interface AboutHeroContentProps {
  language: boolean;
}

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const featureVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function AboutHeroContent({
  language,
}: AboutHeroContentProps) {
  const uid = useId();

  /* =======================================================
     FEATURES
  ======================================================= */

  const features = language
    ? [
        {
          title: "নিখুঁত স্ট্র্যাটেজি",
          description: "ডাটা-ড্রিভেন পরিকল্পনা",
        },
        {
          title: "স্কেলেবল আর্কিটেকচার",
          description: "ভবিষ্যতের জন্য প্রস্তুত",
        },
        {
          title: "২৪/৭ ক্লায়েন্ট কেয়ার",
          description: "সর্বদা আপনার পাশে",
        },
      ]
    : [
        {
          title: "Smart Strategy",
          description: "Data-driven planning",
        },
        {
          title: "Scalable Architecture",
          description: "Built for the future",
        },
        {
          title: "24/7 Dedicated Care",
          description: "Always by your side",
        },
      ];

  return (
    <section className="relative isolate w-full overflow-hidden bg-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.38]
            bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]
            bg-[size:42px_42px]
          "
        />

        {/* Top Right Blue Glow */}

        <motion.div
          className="
            absolute
            -right-40
            -top-40
            h-[520px]
            w-[520px]
            rounded-full
            bg-blue-400/15
            blur-[130px]
          "
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bottom Left Indigo Glow */}

        <motion.div
          className="
            absolute
            -bottom-48
            -left-40
            h-[520px]
            w-[520px]
            rounded-full
            bg-indigo-400/15
            blur-[140px]
          "
          animate={{
            x: [0, -25, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Center Glow */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[350px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.04]
            blur-[100px]
          "
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Soft Blue Circle */}

        <motion.div
          className="
            absolute
            right-[15%]
            top-[15%]
            h-[320px]
            w-[320px]
            rounded-full
            border
            border-blue-200/30
          "
          animate={{
            scale: [1, 1.06, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1536px]
          px-5
          sm:px-6
          lg:px-8
          2xl:px-10
        "
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="
            grid
            min-h-[650px]
            items-center
            gap-12
            py-24
            sm:py-28
            lg:min-h-[720px]
            lg:grid-cols-12
            lg:gap-10
            lg:py-32
            xl:gap-14
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="lg:col-span-7">

            {/* =================================================
                BADGE
            ================================================= */}

            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  mb-7
                  inline-flex
                  items-center
                  gap-2.5
                  overflow-hidden
                  rounded-full
                  border
                  border-blue-200/80
                  bg-white/80
                  px-4
                  py-2
                  text-xs
                  font-bold
                  tracking-wide
                  text-blue-600
                  shadow-[0_8px_30px_rgba(37,99,235,0.08)]
                  backdrop-blur-xl
                "
              >
                {/* Shine */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    -left-full
                    w-1/2
                    skew-x-[-25deg]
                    bg-white/60
                    transition-all
                    duration-700
                    group-hover:left-[130%]
                  "
                />

                <span
                  className="
                    relative
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-50
                  "
                >
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                </span>

                <span className="relative">
                  {language
                    ? "ডিজিটাল প্রবৃদ্ধি ও স্কেলিং"
                    : "Digital Growth & Scaling"}
                </span>

                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-blue-500"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>

            {/* =================================================
                HEADING
            ================================================== */}

            <motion.div variants={itemVariants}>
              <h2
                className="
                  max-w-5xl
                  text-[2.7rem]
                  font-black
                  leading-[1.08]
                  tracking-[-0.045em]
                  text-slate-950
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[4.5rem]
                  xl:text-[5rem]
                "
              >
                <span className="block">
                  {language ? "আপনার ব্যবসার" : "Empowering Your"}
                </span>

                <span className="relative inline-block pb-2 sm:pb-3">

                  <motion.span
                    initial={{
                      backgroundPosition: "0% 50%",
                    }}
                    whileInView={{
                      backgroundPosition: "100% 50%",
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                    }}
                    className="
                      inline-block
                      bg-[linear-gradient(90deg,#2563eb,#4f46e5,#7c3aed,#2563eb)]
                      bg-[length:250%_auto]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {language ? "প্রবৃদ্ধিকে" : "Business Growth"}
                  </motion.span>

                  {/* Animated underline */}

                  <svg
                    className="
                      absolute
                      -bottom-1
                      left-0
                      h-3
                      w-full
                      sm:h-3.5
                    "
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id={`headline-underline-${uid}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="50%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                    </defs>

                    <motion.path
                      d="M2 8 C40 2,80 10,100 6 C120 2,160 10,198 5"
                      stroke={`url(#headline-underline-${uid})`}
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      initial={{
                        pathLength: 0,
                        opacity: 0,
                      }}
                      whileInView={{
                        pathLength: 1,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.4,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>
                </span>

                <span className="block">
                  {language
                    ? "নতুন উচ্চতায় নিয়ে যাই"
                    : "To New Heights"}
                </span>
              </h2>
            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="mt-8 max-w-3xl"
            >
              <p
                className="
                  text-base
                  font-medium
                  leading-7
                  text-slate-600
                  sm:text-lg
                  sm:leading-8
                "
              >
                {language
                  ? "আমরা শুধু ডিজাইন বা ডেভেলপ করি না—আপনার ব্যবসাকে কাঙ্ক্ষিত লক্ষ্যে পৌঁছাতে শুরু থেকে শেষ পর্যন্ত পূর্ণ সাপোর্ট দিই। আমাদের ডাটা-ড্রিভেন পরিকল্পনা এবং আধুনিক প্রযুক্তি আপনার ব্র্যান্ডের গ্রোথকে নিয়ে যাবে অনন্য উচ্চতায়।"
                  : "We don’t just build products; we partner with you for full 360° support. From strategy to modern technology implementation, we help drive your business toward scalable, sustainable growth every step of the way."}
              </p>
            </motion.div>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap items-center gap-4"
            >

              {/* Primary Button */}

              <Link
                href="/contact"
                className="group relative inline-flex"
              >
                <span
                  className="
                    absolute
                    -inset-1
                    rounded-full
                    bg-blue-500/25
                    opacity-0
                    blur-lg
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    items-center
                    justify-center
                    gap-2.5
                    overflow-hidden
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    via-indigo-600
                    to-blue-600
                    bg-[length:200%_100%]
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-xl
                    shadow-blue-600/20
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:bg-[position:100%_0]
                    group-hover:shadow-2xl
                    group-hover:shadow-blue-600/30
                  "
                >

                  <span
                    className="
                      absolute
                      inset-y-0
                      -left-[120%]
                      w-1/2
                      skew-x-[-25deg]
                      bg-white/20
                      transition-all
                      duration-700
                      group-hover:left-[130%]
                    "
                  />

                  <Rocket className="relative h-[18px] w-[18px]" />

                  <span className="relative">
                    {language
                      ? "প্রজেক্ট শুরু করুন"
                      : "Start Your Project"}
                  </span>

                  <ArrowRight
                    className="
                      relative
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>
              </Link>

              {/* Secondary Button */}

              <motion.div
                whileHover={{
                  y: -2,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-slate-200
                  bg-white/75
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-700
                  shadow-sm
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-blue-200
                  hover:shadow-lg
                  hover:shadow-blue-100/50
                "
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-indigo-50
                  "
                >
                  <Headphones className="h-3.5 w-3.5 text-indigo-600" />
                </span>

                {language
                  ? "ফুল সাপোর্ট গ্যারান্টি"
                  : "Full Support Guaranteed"}
              </motion.div>
            </motion.div>

            {/* =================================================
                FEATURES
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="
                mt-12
                border-t
                border-slate-200/80
                pt-6
              "
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0">

                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={featureVariants}
                    whileHover={{
                      y: -3,
                    }}
                    className={`
                      group
                      flex
                      items-center
                      gap-3
                      ${
                        index > 0
                          ? "sm:border-l sm:border-slate-200 sm:pl-6"
                          : ""
                      }
                    `}
                  >
                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-blue-100
                        bg-blue-50
                        text-blue-600
                        transition-all
                        duration-300
                        group-hover:border-blue-200
                        group-hover:bg-blue-100
                      "
                    >
                      <CheckCircle2 className="h-4 w-4" />
                    </motion.div>

                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        {feature.title}
                      </p>

                      <p className="mt-0.5 text-xs font-medium text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}

              </div>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT SIDE VISUAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
            }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-[620px]">

              {/* =================================================
                  MAIN GLOW
              ================================================== */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[420px]
                  w-[420px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-blue-500/20
                  blur-[110px]
                "
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.45, 0.75, 0.45],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* =================================================
                  ORBIT
              ================================================== */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[470px]
                  w-[470px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-blue-200/50
                  border-dashed
                "
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 55,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Second Orbit */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[390px]
                  w-[390px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-indigo-200/30
                "
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* =================================================
                  STATUS CARD
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-3
                  top-2
                  z-30
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-200/80
                  bg-white/90
                  px-3.5
                  py-2
                  shadow-lg
                  shadow-blue-100/40
                  backdrop-blur-xl
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Live Status
                  </p>

                  <p className="text-xs font-extrabold text-slate-800">
                    {language
                      ? "গ্রোথ অ্যাক্টিভ"
                      : "Growth Active"}
                  </p>
                </div>
              </motion.div>

              {/* =================================================
                  MAIN IMAGE
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 0.4, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Image
                  src="/images/growth1.png"
                  alt="Digital Growth and Business Support"
                  width={600}
                  height={480}
                  priority
                  className="
                    relative
                    z-10
                    h-auto
                    w-full
                    object-contain
                    drop-shadow-[0_30px_60px_rgba(37,99,235,0.20)]
                  "
                />
              </motion.div>

              {/* =================================================
                  STRATEGY CARD
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, 7, 0],
                  rotate: [0, 0.5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-0
                  top-[24%]
                  z-30
                  w-[145px]
                  rounded-2xl
                  border
                  border-white/80
                  bg-white/90
                  p-3
                  shadow-xl
                  shadow-blue-100/40
                  backdrop-blur-2xl
                "
              >
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-lg
                      bg-indigo-50
                      text-indigo-600
                    "
                  >
                    <Target className="h-3.5 w-3.5" />
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-500">
                    Strategy
                  </span>
                </div>

                <p className="text-xs font-extrabold text-slate-800">
                  {language
                    ? "ডিজিটাল স্ট্র্যাটেজি"
                    : "Digital Strategy"}
                </p>

                <p className="mt-1 text-[10px] font-medium leading-4 text-slate-500">
                  {language
                    ? "ডাটা-ড্রিভেন রেজাল্ট"
                    : "Data-Driven Results"}
                </p>

                <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-blue-500
                      to-indigo-500
                    "
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "86%",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.4,
                    }}
                  />
                </div>
              </motion.div>

              {/* =================================================
                  BUSINESS GROWTH CARD
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-0
                  top-[32%]
                  z-30
                  w-[155px]
                  rounded-2xl
                  border
                  border-white/80
                  bg-white/90
                  p-3
                  shadow-xl
                  shadow-blue-100/40
                  backdrop-blur-2xl
                "
              >
                <div className="flex items-start justify-between">

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      bg-emerald-50
                      text-emerald-600
                    "
                  >
                    <TrendingUp className="h-4 w-4" />
                  </div>

                  <span
                    className="
                      rounded-full
                      bg-emerald-50
                      px-2
                      py-1
                      text-[9px]
                      font-bold
                      text-emerald-600
                    "
                  >
                    +340%
                  </span>
                </div>

                <p className="mt-2 text-xs font-extrabold text-slate-800">
                  {language
                    ? "ব্যবসায়িক প্রবৃদ্ধি"
                    : "Business Growth"}
                </p>

                <p className="mt-1 text-[10px] font-medium text-slate-500">
                  {language
                    ? "পারফরম্যান্স বৃদ্ধি"
                    : "Performance Increase"}
                </p>
              </motion.div>

              {/* =================================================
                  PERFORMANCE PANEL
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="
                  absolute
                  bottom-0
                  left-2
                  right-2
                  z-40
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-slate-700/60
                  bg-slate-950/95
                  p-4
                  shadow-2xl
                  backdrop-blur-2xl
                  sm:left-5
                  sm:right-5
                "
              >

                {/* Top Accent */}

                <div
                  className="
                    absolute
                    inset-x-8
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-blue-400
                    to-transparent
                  "
                />

                {/* Header */}

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2.5">

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-500/10
                        text-blue-400
                      "
                    >
                      <Activity className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white">
                        {language
                          ? "গ্রোথ পারফরম্যান্স"
                          : "Growth Performance"}
                      </p>

                      <p className="mt-0.5 text-[9px] font-medium text-slate-500">
                        {language
                          ? "রিয়েল-টাইম অ্যানালিটিক্স"
                          : "Real-Time Analytics"}
                      </p>
                    </div>

                  </div>

                  <div className="text-right">
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">
                      Growth Index
                    </p>

                    <p className="text-lg font-black text-emerald-400">
                      +340%
                    </p>
                  </div>

                </div>

                {/* =================================================
                    GRAPH
                ================================================== */}

                <div className="relative mt-3 h-[82px] w-full">

                  <svg
                    className="h-full w-full overflow-visible"
                    viewBox="0 0 320 80"
                    preserveAspectRatio="none"
                  >

                    <defs>

                      <linearGradient
                        id={`growthFill-${uid}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#3B82F6"
                          stopOpacity="0.35"
                        />

                        <stop
                          offset="100%"
                          stopColor="#3B82F6"
                          stopOpacity="0"
                        />
                      </linearGradient>

                      <linearGradient
                        id={`growthLine-${uid}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop
                          offset="0%"
                          stopColor="#60A5FA"
                        />

                        <stop
                          offset="50%"
                          stopColor="#6366F1"
                        />

                        <stop
                          offset="100%"
                          stopColor="#34D399"
                        />
                      </linearGradient>

                    </defs>

                    {/* Grid */}

                    <path
                      d="M0 20 H320 M0 40 H320 M0 60 H320"
                      stroke="rgba(148,163,184,0.10)"
                      strokeWidth="1"
                    />

                    {/* Area */}

                    <motion.path
                      d="
                        M0 62
                        C35 65 55 55 82 48
                        C110 41 125 52 150 40
                        C178 26 195 38 218 28
                        C250 14 275 20 320 7
                        L320 80
                        L0 80 Z
                      "
                      fill={`url(#growthFill-${uid})`}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        duration: 1.2,
                      }}
                    />

                    {/* Line */}

                    <motion.path
                      d="
                        M0 62
                        C35 65 55 55 82 48
                        C110 41 125 52 150 40
                        C178 26 195 38 218 28
                        C250 14 275 20 320 7
                      "
                      fill="none"
                      stroke={`url(#growthLine-${uid})`}
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{
                        pathLength: 0,
                      }}
                      animate={{
                        pathLength: 1,
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Animated End Point */}

                    <motion.circle
                      cx="320"
                      cy="7"
                      r="4"
                      fill="#34D399"
                      animate={{
                        r: [4, 6, 4],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />

                  </svg>
                </div>

                {/* =================================================
                    METRICS
                ================================================== */}

                <div className="mt-2 grid grid-cols-3 divide-x divide-slate-800">

                  <div className="px-2 text-center">
                    <p className="text-[9px] text-slate-500">
                      Strategy
                    </p>

                    <p className="mt-1 text-xs font-bold text-white">
                      Data Driven
                    </p>
                  </div>

                  <div className="px-2 text-center">
                    <p className="text-[9px] text-slate-500">
                      Scalability
                    </p>

                    <p className="mt-1 text-xs font-bold text-white">
                      Built to Grow
                    </p>
                  </div>

                  <div className="px-2 text-center">
                    <p className="text-[9px] text-slate-500">
                      Support
                    </p>

                    <p className="mt-1 text-xs font-bold text-emerald-400">
                      24/7 Care
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* =================================================
                  FLOATING ZAP ICON
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[18%]
                  right-[8%]
                  z-50
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-blue-200
                  bg-white/90
                  text-blue-600
                  shadow-xl
                  shadow-blue-200/40
                  backdrop-blur-xl
                "
              >
                <Zap className="h-5 w-5" />
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-blue-300
          to-transparent
        "
        animate={{
          opacity: [0.25, 0.8, 0.25],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </section>
  );
}