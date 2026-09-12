<<<<<<< HEAD
"use client";

import React, { useId, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Globe,
  CheckCircle2,
  TrendingUp,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const HERO_IMAGE = "/images/banner1.png";

// --------------------------------------------------
// Per-word animation variants
// --------------------------------------------------

const wordVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    y: -25,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

// --------------------------------------------------
// Helper Component for Word Animation
//
// IMPORTANT: callers must pass `key={text}` (see usages below).
// Without it, React reuses the same component instance across a
// language toggle, the per-word children get replaced (because their
// keys change), and the new word spans — lacking their own
// initial/animate — can be left stuck in the "hidden" state.
// Giving the whole component a fresh key forces a clean remount, and
// the explicit initial/animate here guarantees it always animates in.
// --------------------------------------------------

function AnimatedWords({
  text,
  className = "",
  isGradient = false,
  delay = 0,
}: {
  text: string;
  className?: string;
  isGradient?: boolean;
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className={`inline-block mr-[0.22em] ${
            isGradient
              ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700"
              : ""
          }`}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function HeroSection() {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const uid = useId();

  // --------------------------------------------------
  // Stats
  // --------------------------------------------------

  const stats = language
    ? [
        {
          num: "৫০+",
          label: "সফল প্রজেক্ট",
          icon: Code2,
        },
        {
          num: "৩০+",
          label: "ক্লায়েন্ট",
          icon: Globe,
        },
        {
          num: "১০০%",
          label: "সন্তুষ্টি",
          icon: CheckCircle2,
        },
      ]
    : [
        {
          num: "50+",
          label: "Projects Delivered",
          icon: Code2,
        },
        {
          num: "30+",
          label: "Happy Clients",
          icon: Globe,
        },
        {
          num: "100%",
          label: "Client Satisfaction",
          icon: CheckCircle2,
        },
      ];

  // --------------------------------------------------
  // General Animation variants
  // --------------------------------------------------

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  // --------------------------------------------------
  // 3D image interaction
  // --------------------------------------------------

  const stageRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    {
      stiffness: 120,
      damping: 22,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-7, 7]),
    {
      stiffness: 120,
      damping: 22,
    }
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (shouldReduceMotion || !stageRef.current) return;

    const rect = stageRef.current.getBoundingClientRect();

    mouseX.set(
      (e.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (e.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const imageAlt = language
    ? "Pixel & Code ডিজিটাল সলিউশন"
    : "Pixel & Code digital solution";

  return (
    <>
      {/* --------------------------------------------------
          Button animation
      -------------------------------------------------- */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes btnGradientMove {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }

            .animate-btn-gradient {
              background-size: 200% 200%;
              animation: btnGradientMove 4s ease infinite;
            }
          `,
        }}
      />

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-950 pt-24 pb-16 lg:pt-28 lg:pb-20">

        {/* --------------------------------------------------
            Background
        -------------------------------------------------- */}

        <div className="absolute  inset-0 pointer-events-none overflow-hidden">

          {/* Blue glow */}
          <div className="absolute -top-[18%] -left-[12%] h-[520px] w-[520px] rounded-full bg-blue-100/60 dark:bg-blue-900/20 blur-[130px]" />

          {/* Indigo glow */}
          <div className="absolute -bottom-[20%] -right-[10%] h-[520px] w-[520px] rounded-full bg-indigo-100/60 dark:bg-indigo-900/20 blur-[130px]" />

          {/* Center glow */}
          <div className="absolute top-[35%] left-[45%] h-[300px] w-[300px] rounded-full bg-cyan-100/30 dark:bg-cyan-900/10 blur-[120px]" />

          {/* Grid */}
          <div
            className="
              absolute inset-0
              opacity-[0.45]
              dark:opacity-[0.12]
              bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
              bg-[size:32px_32px]
            "
          />

          {/* Soft white overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40 dark:from-transparent dark:to-slate-950/30" />
        </div>

        {/* --------------------------------------------------
            Main container
        -------------------------------------------------- */}

        <div className="relative z-10 mx-auto w-full max-w-[90%] px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-4">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="relative z-20 max-w-2xl"
            >

              {/* Small eyebrow */}
              <motion.div
                variants={itemVariants}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-blue-600" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                  {language ? (
                    <AnimatedWords
                      key="eyebrow-bn"
                      text="ডিজিটাল এক্সপেরিয়েন্স"
                    />
                  ) : (
                    <AnimatedWords
                      key="eyebrow-en"
                      text="Digital Experience"
                    />
                  )}
                </span>
              </motion.div>

              {/* Main bold heading with Word-by-Word animation */}
              <motion.h1
                variants={itemVariants}
                className="
                  text-[42px]
                  leading-[1.08]
                  font-black
                  tracking-[-0.035em]
                  text-slate-950
                  dark:text-white
                  sm:text-[52px]
                  md:text-[62px]
                  lg:text-[64px]
                  xl:text-[70px]
                "
              >
                {language ? (
                  <>
                    <AnimatedWords
                      key="h1-bn-line1"
                      text="আপনার ব্যবসাকে"
                      delay={0}
                    />
                    <span className="block">
                      <AnimatedWords
                        key="h1-bn-line2"
                        text="ডিজিটালভাবে"
                        isGradient
                        delay={0.3}
                      />
                    </span>
                    <AnimatedWords
                      key="h1-bn-line3"
                      text="এগিয়ে নিয়ে যান।"
                      delay={0.55}
                    />
                  </>
                ) : (
                  <>
                    <AnimatedWords
                      key="h1-en-line1"
                      text="Turn your ideas"
                      delay={0}
                    />
                    <span className="block">
                      <AnimatedWords
                        key="h1-en-line2"
                        text="into digital"
                        isGradient
                        delay={0.3}
                      />
                    </span>
                    <AnimatedWords
                      key="h1-en-line3"
                      text="experiences."
                      delay={0.55}
                    />
                  </>
                )}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="
                  mt-7
                  max-w-[580px]
                  text-base
                  leading-7
                  font-medium
                  text-slate-600
                  dark:text-slate-400
                  sm:text-lg
                  sm:leading-8
                "
              >
                {language
                  ? "আমরা আধুনিক ও ফলাফলভিত্তিক ওয়েব ডেভেলপমেন্ট, ব্র্যান্ডিং এবং ডিজিটাল মার্কেটিং সলিউশনের মাধ্যমে ব্যবসাকে একটি শক্তিশালী ডিজিটাল উপস্থিতি তৈরি করতে সাহায্য করি।"
                  : "We build modern, purposeful digital experiences through web development, branding, and digital marketing — helping businesses build a stronger presence online."}
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={itemVariants}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Link href="/contact">
                  <ButtonPrimary>
                    {language
                      ? "প্রজেক্ট নিয়ে কথা বলুন"
                      : "Start a Project"}

                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </ButtonPrimary>
                </Link>

                <Link href="/contact">
                  <ButtonSecondary>
                    <PhoneCall className="mr-2 h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100" />

                    {language
                      ? "ফ্রি কনসালটেশন"
                      : "Free Consultation"}
                  </ButtonSecondary>
                </Link>
              </motion.div>

              {/* --------------------------------------------------
                  Stats
              -------------------------------------------------- */}

              <motion.div
                variants={itemVariants}
                className="
                  mt-11
                  grid
                  max-w-[580px]
                  grid-cols-3
                  border-t
                  border-slate-200
                  pt-7
                  dark:border-slate-800
                "
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={index}
                      className={`
                        flex flex-col gap-2
                        ${
                          index !== 0
                            ? "border-l border-slate-200 pl-4 dark:border-slate-800 sm:pl-7"
                            : ""
                        }
                      `}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />

                        <span className="text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                          <AnimatedWords key={stat.num} text={stat.num} />
                        </span>
                      </div>

                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 sm:text-xs">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="
                relative
                flex
                min-h-[500px]
                items-center
                justify-center
                lg:min-h-[680px]
              "
            >

              <div
                ref={stageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  perspective: 1400,
                }}
                className="
                  relative
                  flex
                  w-full
                  items-center
                  justify-center
                "
              >

                {/* Large ambient glow */}

                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: [1, 1.08, 1],
                          opacity: [0.45, 0.7, 0.45],
                        }
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    h-[380px]
                    w-[380px]
                    rounded-full
                    bg-gradient-to-tr
                    from-blue-200/60
                    via-indigo-200/40
                    to-cyan-100/30
                    blur-[70px]
                    sm:h-[480px]
                    sm:w-[480px]
                    lg:h-[560px]
                    lg:w-[560px]
                  "
                />

                {/* Decorative ring */}

                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          rotate: 360,
                        }
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 35,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    h-[350px]
                    w-[350px]
                    rounded-full
                    border
                    border-blue-200/50
                    dark:border-blue-800/30
                    sm:h-[450px]
                    sm:w-[450px]
                    lg:h-[570px]
                    lg:w-[570px]
                  "
                />

                {/* Image */}

                <motion.div
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="
                    relative
                    z-20
                    w-[112%]
                    max-w-[720px]
                    sm:w-[108%]
                    lg:w-[118%]
                  "
                >
                  <img
                    src={HERO_IMAGE}
                    alt={imageAlt}
                    draggable={false}
                    className="
                      pointer-events-none
                      h-auto
                      w-full
                      select-none
                      drop-shadow-[0_35px_70px_rgba(37,99,235,0.25)]
                    "
                  />
                </motion.div>

                {/* --------------------------------------------------
                    Floating Growth Card
                -------------------------------------------------- */}

                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [0, -12, 0],
                        }
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    right-0
                    top-[8%]
                    z-30
                    w-[155px]
                    rounded-2xl
                    border
                    border-slate-200/80
                    bg-white/95
                    p-4
                    shadow-[0_20px_50px_rgba(15,23,42,0.12)]
                    backdrop-blur-xl
                    dark:border-slate-700
                    dark:bg-slate-900/95
                    sm:right-2
                    sm:w-[175px]
                    lg:-right-3
                  "
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {language ? "গ্রোথ" : "Growth"}
                    </span>

                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                  </div>

                  <div className="mb-2 text-2xl font-black text-slate-900 dark:text-white">
                    <AnimatedWords
                      key={language ? "+২১৪%" : "+214%"}
                      text={language ? "+২১৪%" : "+214%"}
                    />
                  </div>

                  <svg
                    viewBox="0 0 140 52"
                    className="h-11 w-full"
                    fill="none"
                  >
                    <defs>
                      <linearGradient
                        id={`heroGraph-${uid}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>

                    <motion.path
                      d="M4 46 L26 38 L48 41 L70 26 L92 30 L114 14 L136 6"
                      stroke={`url(#heroGraph-${uid})`}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={
                        shouldReduceMotion
                          ? { pathLength: 1 }
                          : { pathLength: [0, 1] }
                      }
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                        repeatDelay: 1,
                      }}
                    />
                  </svg>
                </motion.div>

                {/* --------------------------------------------------
                    Floating Solution Badge
                -------------------------------------------------- */}

                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [0, 10, 0],
                        }
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    bottom-[8%]
                    left-0
                    z-30
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-slate-200
                    bg-white/95
                    px-4
                    py-3
                    shadow-[0_20px_50px_rgba(15,23,42,0.12)]
                    backdrop-blur-xl
                    dark:border-slate-700
                    dark:bg-slate-900/95
                    sm:left-2
                    sm:px-5
                  "
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30">
                    <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>

                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200 sm:text-sm">
                    {language
                      ? "স্মার্ট ডিজিটাল সলিউশন"
                      : "Smart Digital Solutions"}
                  </span>
                </motion.div>

                {/* --------------------------------------------------
                    Small top-left decorative badge
                -------------------------------------------------- */}

                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [0, -7, 0],
                        }
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 4.5,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="
                    absolute
                    left-[5%]
                    top-[18%]
                    z-30
                    hidden
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-blue-100
                    bg-white/90
                    px-4
                    py-2
                    shadow-lg
                    backdrop-blur-md
                    dark:border-blue-900
                    dark:bg-slate-900/90
                    sm:flex
                  "
                >
                  <Sparkles className="h-4 w-4 text-blue-500" />

                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                    {language ? "ক্রিয়েটিভ" : "Creative"}
                  </span>
                </motion.div>

                {/* Bottom shadow */}

                <div className="absolute bottom-[5%] left-1/2 z-10 h-7 w-[65%] -translate-x-1/2 rounded-full bg-blue-500/20 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* --------------------------------------------------
            Bottom decorative line
        -------------------------------------------------- */}

        <div className="absolute bottom-0 left-0 right-0 mx-auto h-px max-w-[90%] bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />
      </section>
    </>
  );
}

// ==========================================================
// PRIMARY BUTTON
// ==========================================================

function ButtonPrimary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="
        relative
        group
        inline-flex
        items-center
        justify-center
        rounded-full
        p-[2px]
        font-bold
        shadow-lg
        shadow-blue-500/20
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-blue-500/40
        focus:outline-none
      "
    >
      <span
        className="
          absolute
          inset-0
          h-full
          w-full
          rounded-full
          bg-gradient-to-r
          from-blue-600
          via-indigo-500
          to-blue-600
          animate-btn-gradient
        "
      />

      <span
        className="
          relative
          flex
          h-full
          w-full
          items-center
          justify-center
          rounded-full
          bg-white
          px-7
          py-3.5
          text-slate-900
          transition-all
          duration-300
          group-hover:bg-blue-50
          dark:bg-slate-900
          dark:text-white
          dark:group-hover:bg-slate-800
        "
      >
        {children}
      </span>
    </button>
  );
}

// ==========================================================
// SECONDARY BUTTON
// ==========================================================

function ButtonSecondary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="
        group
        relative
        inline-flex
        items-center
        justify-center
        rounded-full
        border-2
        border-slate-200
        bg-transparent
        px-7
        py-3.5
        text-sm
        font-bold
        text-slate-700
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-slate-300
        hover:bg-slate-50
        focus:outline-none
        dark:border-slate-800
        dark:text-slate-200
        dark:hover:border-slate-700
        dark:hover:bg-slate-900
        md:text-base
      "
    >
      {children}
    </button>
=======
// src/components/shared/HeroSection.tsx

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full">
      <div className="relative h-auto w-full">
        <Image
          src="/Banner_Pixel_&_Code.jpg" 
          alt="Pixel & Code promotional banner"
          width={1920} 
          height={640}
          priority // এটা সবচেয়ে গুরুত্বপূর্ণ image
          quality={75} // Quality কমিয়ে দিন (default 75-80 best)
          placeholder="blur" // blur effect দিবে
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCgAA//2Q=="
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </section>
>>>>>>> origin/development
  );
}