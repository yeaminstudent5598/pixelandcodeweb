"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CTASection() {
  const { language } = useLanguage();

  return (
    <section className="relative isolate w-full overflow-hidden bg-white py-20 dark:bg-slate-950 md:py-28">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]
            bg-[size:48px_48px]
            opacity-30
            dark:opacity-[0.035]
          "
        />

        {/* Main center glow */}
        <motion.div
          className="
            absolute left-1/2 top-1/2
            h-[420px] w-[720px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-blue-500/10
            blur-[120px]
            dark:bg-blue-600/10
          "
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            FLOATING BLOBS
        ===================================================== */}

        <motion.div
          className="
            absolute -left-32 top-20
            h-72 w-72
            rounded-full
            bg-blue-500/10
            blur-[90px]
            dark:bg-blue-500/10
          "
          animate={{
            x: [0, 90, 30, 0],
            y: [0, 70, -20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute -right-32 bottom-0
            h-80 w-80
            rounded-full
            bg-indigo-500/10
            blur-[100px]
            dark:bg-indigo-500/10
          "
          animate={{
            x: [0, -100, -40, 0],
            y: [0, -70, 20, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute right-[20%] top-0
            h-48 w-48
            rounded-full
            bg-cyan-400/10
            blur-[80px]
          "
          animate={{
            x: [0, 60, -30, 0],
            y: [0, 80, 30, 0],
            opacity: [0.4, 0.7, 0.3, 0.4],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            ROTATING RINGS
        ===================================================== */}

        <motion.div
          className="
            absolute left-1/2 top-1/2
            h-[620px] w-[620px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            border border-blue-200/30
            dark:border-blue-500/10
          "
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="
            absolute left-1/2 top-1/2
            h-[480px] w-[480px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            border border-dashed border-indigo-200/30
            dark:border-indigo-500/10
          "
          animate={{ rotate: -360 }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          {/* =====================================================
              CARD BORDER GLOW
          ===================================================== */}

          <div className="relative overflow-hidden rounded-[2.5rem] p-[1.5px]">

            {/* Static gradient border */}
            <div
              className="
                absolute inset-0 rounded-[2.5rem]
                bg-gradient-to-r
                from-blue-500/20
                via-indigo-500/40
                to-cyan-400/20
              "
            />

            {/* =================================================
                MOVING BORDER BEAM
            ================================================= */}

            <motion.div
              className="absolute inset-[-100%]"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 285deg, rgba(37,99,235,0.05) 300deg, rgba(59,130,246,0.9) 320deg, rgba(99,102,241,1) 338deg, rgba(34,211,238,0.85) 350deg, transparent 360deg)",
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Extra soft beam glow */}
            <motion.div
              className="absolute inset-[-100%] opacity-50 blur-xl"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(37,99,235,0.7) 325deg, rgba(99,102,241,0.8) 345deg, transparent 360deg)",
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* =================================================
                INNER CARD
            ================================================= */}

            <div
              className="
                relative overflow-hidden
                rounded-[2.4rem]
                border border-slate-200/80
                bg-slate-50/95
                px-6 py-16
                backdrop-blur-xl
                dark:border-slate-800/80
                dark:bg-slate-900/95
                md:px-10 md:py-20
              "
            >
              {/* =================================================
                  CARD INTERNAL GLOWS
              ================================================= */}

              <motion.div
                className="
                  pointer-events-none
                  absolute -right-24 -top-24
                  h-80 w-80
                  rounded-full
                  bg-blue-500/10
                  blur-[100px]
                "
                animate={{
                  x: [0, 30, -20, 0],
                  y: [0, 20, -10, 0],
                  scale: [1, 1.15, 0.95, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="
                  pointer-events-none
                  absolute -bottom-24 -left-24
                  h-80 w-80
                  rounded-full
                  bg-indigo-500/10
                  blur-[100px]
                "
                animate={{
                  x: [0, -30, 20, 0],
                  y: [0, -20, 10, 0],
                  scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* =================================================
                  PARTICLES
              ================================================= */}

              <div className="pointer-events-none absolute inset-0">
                {[
                  { x: "12%", y: "25%", delay: 0 },
                  { x: "22%", y: "70%", delay: 1 },
                  { x: "78%", y: "25%", delay: 2 },
                  { x: "88%", y: "68%", delay: 1.5 },
                  { x: "67%", y: "15%", delay: 0.5 },
                  { x: "35%", y: "18%", delay: 2.5 },
                ].map((particle, index) => (
                  <motion.span
                    key={index}
                    className="
                      absolute
                      h-1.5 w-1.5
                      rounded-full
                      bg-blue-500/40
                      shadow-[0_0_12px_rgba(59,130,246,0.5)]
                      dark:bg-blue-400/40
                    "
                    style={{
                      left: particle.x,
                      top: particle.y,
                    }}
                    animate={{
                      y: [0, -14, 0],
                      opacity: [0.25, 0.8, 0.25],
                      scale: [0.8, 1.3, 0.8],
                    }}
                    transition={{
                      duration: 3.5,
                      delay: particle.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="relative z-10 mx-auto max-w-3xl text-center">

                {/* Badge */}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="
                    mb-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border border-blue-200/80
                    bg-white/80
                    px-4 py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-blue-600
                    shadow-sm
                    backdrop-blur-md
                    dark:border-blue-800/70
                    dark:bg-slate-950/70
                    dark:text-blue-400
                  "
                >
                  <motion.span
                    animate={{
                      rotate: [0, 12, -12, 0],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="h-4 w-4" />
                  </motion.span>

                  {language
                    ? "চলুন একসাথে শুরু করি"
                    : "Let's Build Together"}
                </motion.div>

                {/* Heading */}

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.25,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    mb-7
                    text-3xl
                    font-extrabold
                    leading-tight
                    tracking-tight
                    text-slate-900
                    sm:text-4xl
                    md:text-5xl
                    dark:text-white
                  "
                >
                  {language ? (
                    <>
                      আপনার প্রজেক্ট নিয়ে{" "}
                      <span
                        className="
                          bg-gradient-to-r
                          from-blue-600
                          via-indigo-600
                          to-cyan-500
                          bg-clip-text
                          text-transparent
                        "
                      >
                        কথা বলতে চান?
                      </span>
                    </>
                  ) : (
                    <>
                      Ready to Build{" "}
                      <span
                        className="
                          bg-gradient-to-r
                          from-blue-600
                          via-indigo-600
                          to-cyan-500
                          bg-clip-text
                          text-transparent
                        "
                      >
                        Something Great?
                      </span>
                    </>
                  )}
                </motion.h2>

                {/* Description */}

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.35,
                    duration: 0.55,
                  }}
                  className="
                    mx-auto
                    mb-10
                    max-w-2xl
                    text-base
                    leading-7
                    text-slate-600
                    sm:text-lg
                    dark:text-slate-400
                  "
                >
                  {language
                    ? "আমাদের প্রফেশনাল টিমের সাথে ফ্রি কনসালটেশন বুক করুন আজই।"
                    : "Book a free consultation with our professional team today."}
                </motion.p>

                {/* =================================================
                    CTA BUTTON
                ================================================= */}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.45,
                    duration: 0.6,
                  }}
                >
                  <Link
                    href="/contact"
                    className="group relative inline-flex"
                  >
                    {/* Button glow */}

                    <motion.span
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-blue-500/30
                        blur-xl
                      "
                      animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Button */}

                    <motion.span
                      whileHover={{
                        y: -3,
                        scale: 1.025,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      className="
                        relative
                        inline-flex
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-full
                        bg-gradient-to-r
                        from-blue-600
                        via-blue-600
                        to-indigo-600
                        px-8
                        py-4
                        text-base
                        font-bold
                        text-white
                        shadow-xl
                        shadow-blue-600/25
                        transition-shadow
                        duration-300
                        group-hover:shadow-blue-600/45
                      "
                    >
                      {/* Shine */}

                      <motion.span
                        className="
                          absolute
                          inset-y-0
                          -left-10
                          w-10
                          skew-x-[-20deg]
                          bg-white/25
                          blur-sm
                        "
                        animate={{
                          left: ["-15%", "115%"],
                        }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut",
                        }}
                      />

                      <span className="relative z-10">
                        {language
                          ? "ফ্রি কনসালটেশন বুক করুন"
                          : "Book a Consultation"}
                      </span>

                      <ArrowRight
                        className="
                          relative
                          z-10
                          ml-2
                          h-5
                          w-5
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}