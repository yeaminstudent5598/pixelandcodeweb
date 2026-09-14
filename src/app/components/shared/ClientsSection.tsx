"use client";

import React, { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Headphones,
  Rocket,
  Sparkles,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const EASE = [0.22, 1, 0.36, 1] as const;

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
      ease: EASE,
    },
  },
};

export default function AboutHeroContent() {
  const uid = useId();
  const { language } = useLanguage();

  return (
    <section className="relative isolate w-full overflow-hidden bg-white text-slate-950">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Grid */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]
            bg-[size:42px_42px]
            opacity-40
          "
        />

        {/* Top-right glow */}
        <motion.div
          className="
            absolute
            -right-40
            -top-40
            h-[560px]
            w-[560px]
            rounded-full
            bg-blue-400/15
            blur-[120px]
          "
          animate={{
            x: [0, 25, 0],
            y: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bottom-left glow */}
        <motion.div
          className="
            absolute
            -bottom-48
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-indigo-400/10
            blur-[120px]
          "
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Center glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[380px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.04]
            blur-[110px]
          "
        />

        {/* Decorative circles */}
        <div
          className="
            absolute
            -right-10
            top-1/2
            h-[430px]
            w-[430px]
            -translate-y-1/2
            rounded-full
            border
            border-blue-200/60
          "
        />

        <div
          className="
            absolute
            -right-24
            top-1/2
            h-[560px]
            w-[560px]
            -translate-y-1/2
            rounded-full
            border
            border-blue-100/60
          "
        />

        {/* Small decorative dots */}
        <motion.span
          className="
            absolute
            left-[9%]
            top-[22%]
            h-2
            w-2
            rounded-full
            bg-blue-400/50
          "
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        <motion.span
          className="
            absolute
            right-[12%]
            top-[25%]
            h-2.5
            w-2.5
            rounded-full
            bg-indigo-400/50
          "
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}
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
            amount: 0.15,
          }}
          className="
            grid
            min-h-[680px]
            items-center
            gap-12
            py-16
            sm:py-20
            lg:min-h-[740px]
            lg:grid-cols-12
            lg:gap-10
            lg:py-24
            xl:gap-16
          "
        >
          {/* =======================================================
              LEFT CONTENT
          ======================================================= */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div
                className="
                  mb-7
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-blue-200
                  bg-white/80
                  px-4
                  py-2
                  text-xs
                  font-bold
                  tracking-[0.08em]
                  text-blue-600
                  shadow-[0_10px_35px_rgba(37,99,235,0.08)]
                  backdrop-blur-xl
                "
              >
                <span
                  className="
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

                <span>
                  {language
                    ? "ডিজিটাল গ্রোথ ও সলিউশন"
                    : "Digital Growth & Solutions"}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h1
                className="
                  max-w-3xl
                  text-[2.8rem]
                  font-black
                  leading-[1.04]
                  tracking-[-0.055em]
                  text-slate-950
                  sm:text-5xl
                  md:text-6xl
                  lg:text-[4.5rem]
                  xl:text-[5rem]
                "
              >
                <span className="block">
                  {language
                    ? "আপনার আইডিয়াকে"
                    : "Turning Your Ideas"}
                </span>

                <span className="relative inline-block pb-3">
                  <motion.span
                    initial={{
                      backgroundPosition: "0% 50%",
                    }}
                    whileInView={{
                      backgroundPosition: "100% 50%",
                    }}
                    viewport={{
                      once: true,
                    }}
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
                    {language
                      ? "ডিজিটাল"
                      : "Into Digital"}
                  </motion.span>

                  {/* Underline */}
                  <svg
                    className="
                      absolute
                      -bottom-1
                      left-0
                      h-3
                      w-full
                    "
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id={`underline-${uid}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop
                          offset="0%"
                          stopColor="#2563eb"
                        />
                        <stop
                          offset="50%"
                          stopColor="#4f46e5"
                        />
                        <stop
                          offset="100%"
                          stopColor="#7c3aed"
                        />
                      </linearGradient>
                    </defs>

                    <motion.path
                      d="M2 8 C40 2,80 10,100 6 C120 2,160 10,198 5"
                      stroke={`url(#underline-${uid})`}
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
                    ? "অভিজ্ঞতায় রূপ দিন"
                    : "Experiences"}
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="mt-8 max-w-2xl"
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
                  ? "আমরা আধুনিক ওয়েব ডেভেলপমেন্ট, ব্র্যান্ডিং এবং ডিজিটাল মার্কেটিংয়ের মাধ্যমে আপনার আইডিয়াকে শক্তিশালী ডিজিটাল অভিজ্ঞতায় রূপ দিই—যা আপনার ব্যবসাকে অনলাইনে এগিয়ে যেতে সাহায্য করে।"
                  : "We transform your ideas into purposeful digital experiences through web development, branding, and digital marketing — helping your business grow and build a stronger presence online."}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-4
              "
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
                    blur-xl
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

                  <Rocket
                    className="
                      relative
                      h-[18px]
                      w-[18px]
                    "
                  />

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
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-slate-200
                  bg-white/80
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-700
                  shadow-sm
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-blue-200
                  hover:shadow-lg
                  hover:shadow-blue-100/40
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
                    bg-blue-50
                  "
                >
                  <Headphones className="h-3.5 w-3.5 text-blue-600" />
                </span>

                {language
                  ? "ফ্রি কনসালটেশন"
                  : "Free Consultation"}
              </Link>
            </motion.div>
          </div>

          {/* =======================================================
              RIGHT VISUAL
          ======================================================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: EASE,
            }}
            className="
              relative
              lg:col-span-6
              xl:col-span-6
            "
          >
            <div className="relative mx-auto w-full max-w-[650px]">
              {/* Image glow */}
              <motion.div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[430px]
                  w-[430px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-blue-500/15
                  blur-[100px]
                "
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main image */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 0.3, 0],
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
                  alt={
                    language
                      ? "ডিজিটাল গ্রোথ ও সলিউশন"
                      : "Digital Growth and Solutions"
                  }
                  width={700}
                  height={560}
                  priority
                  className="
                    h-auto
                    w-full
                    object-contain
                    drop-shadow-[0_35px_70px_rgba(37,99,235,0.20)]
                  "
                />
              </motion.div>

              {/* Floating badge */}
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
                  left-2
                  top-[18%]
                  z-20
                  hidden
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-100
                  bg-white/90
                  px-4
                  py-2.5
                  shadow-lg
                  shadow-blue-100/40
                  backdrop-blur-xl
                  sm:flex
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
                    bg-blue-50
                  "
                >
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                </span>

                <span className="text-xs font-bold text-slate-700">
                  {language
                    ? "স্মার্ট ডিজিটাল সলিউশন"
                    : "Smart Digital Solutions"}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom accent */}
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
          opacity: [0.2, 0.8, 0.2],
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