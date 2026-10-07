"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Boxes, Briefcase, CheckCircle2 } from "lucide-react";

// --------------------------------------------------
// Images
// --------------------------------------------------
const IMG_TOP = "/hero/SaaS.png";
const IMG_LEFT = "/hero/Shopping.png";
const IMG_BOTTOM = "/hero/Mockup_Workspace.png";

// --------------------------------------------------
// Brand blue (light blue gradient — no dark blue)
// --------------------------------------------------
const BLUE_GRADIENT = "linear-gradient(180deg, #38bdf8 0%, #3b82f6 100%)";
const BLUE_GRADIENT_H = "linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%)";
const GLASS_SHEEN =
  "linear-gradient(135deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0) 70%)";

// --------------------------------------------------
// Animation
// --------------------------------------------------
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const tile = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

// --------------------------------------------------
// Glass Stat Card
// --------------------------------------------------
function StatCard({
  num,
  label,
  Icon,
  className = "",
}: {
  num: string;
  label: string;
  Icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
    color?: string;
  }>;
  className?: string;
}) {
  return (
    <motion.div
      variants={tile}
      className={`absolute overflow-hidden rounded-lg backdrop-blur-xl ${className}`}
      style={{
        background: BLUE_GRADIENT,
        border: "1px solid rgba(255,255,255,0.55)",
        boxShadow:
          "0 18px 40px rgba(59,130,246,0.30), inset 0 1px 0 rgba(255,255,255,0.55)",
      }}
    >
      {/* glass sheen */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: GLASS_SHEEN }}
      />

      {/* faded outline icon */}
      <Icon
        strokeWidth={1}
        color="rgba(255,255,255,0.35)"
        className="pointer-events-none absolute -bottom-2 -right-2 h-16 w-16 sm:h-20 sm:w-20"
      />

      <div className="relative flex h-full flex-col justify-center px-3 sm:px-6">
        <span
          className="text-[26px] font-medium leading-none tracking-tight sm:text-4xl xl:text-[46px]"
          style={{ color: "#ffffff" }}
        >
          {num}
        </span>
        <span
          className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.08em] sm:mt-2 sm:text-xs xl:text-[15px]"
          style={{ color: "rgba(255,255,255,0.95)" }}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
}

// --------------------------------------------------
// Photo Tile
// --------------------------------------------------
function PhotoTile({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.div
      variants={tile}
      className={`
        absolute overflow-hidden rounded-lg
        border border-[rgba(148,163,184,0.35)] dark:border-[rgba(255,255,255,0.14)]
        shadow-[0_18px_40px_rgba(15,23,42,0.14)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
        ${className}
      `}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="h-full w-full select-none object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 50%)",
        }}
      />
    </motion.div>
  );
}

// --------------------------------------------------
// HERO
// --------------------------------------------------
export function HeroSection() {
  const stats = [
    { num: "50+", label: "Projects", Icon: Boxes },
    { num: "10+", label: "Clients", Icon: Users },
    { num: "100%", label: "Satisfaction", Icon: CheckCircle2 },
    { num: "2.5+", label: "Experience", Icon: Briefcase },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-28 pb-16 dark:bg-[#050b16] lg:pt-32 lg:pb-20">
      {/* ---------------- Background ---------------- */}
      <div className="pointer-events-none absolute inset-0">
        {/* glows */}
        <div
          className="absolute -left-[10%] top-[5%] h-[560px] w-[560px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.20) 0%, rgba(56,189,248,0) 70%)",
          }}
        />
        <div
          className="absolute -right-[8%] bottom-[-5%] h-[620px] w-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0) 70%)",
          }}
        />
        <div
          className="absolute left-[38%] top-[25%] h-[360px] w-[360px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0) 70%)",
          }}
        />

        {/* grid — light */}
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(14,116,144,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,116,144,0.05) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* grid — dark */}
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,197,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,197,255,0.06) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:px-12">
        {/* ================= LEFT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 max-w-[640px]"
        >
          {/* Glass badge */}
          <motion.div variants={item}>
            <span
              className="
                inline-flex items-center rounded-full px-5 py-2.5
                text-[13px] font-bold uppercase tracking-[0.14em] backdrop-blur-md sm:text-sm
                border border-[rgba(56,189,248,0.45)] bg-[rgba(255,255,255,0.75)] text-sky-700
                shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_6px_18px_rgba(56,189,248,0.15)]
                dark:border-[rgba(56,189,248,0.35)] dark:bg-[rgba(56,189,248,0.12)] dark:text-sky-200
                dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]
              "
            >
              Digitize Your Imagination
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="mt-6 text-[40px] font-semibold leading-[1.12] tracking-[-0.02em] text-slate-900 dark:text-white sm:text-5xl lg:text-[52px] xl:text-[58px]"
          >
            Innovative Software Development Company in Bangladesh
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-6 max-w-[560px] text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-[17px] sm:leading-8"
          >
            We build modern, purposeful digital experiences through web
            development, branding, and digital marketing — helping businesses
            build a stronger presence online.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            {/* Primary — light blue gradient */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              style={{
                background: BLUE_GRADIENT_H,
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow:
                  "0 10px 28px rgba(59,130,246,0.38), inset 0 1px 0 rgba(255,255,255,0.45)",
              }}
            >
              Start a Project
            </Link>

            {/* Secondary — blue outline glass */}
            <Link
              href="/contact"
              className="
                group inline-flex items-center justify-center rounded-full px-7 py-3.5
                text-sm font-bold uppercase tracking-wide backdrop-blur-md
                transition-all duration-300 hover:-translate-y-0.5
                border border-[#3b9cf0] bg-[rgba(255,255,255,0.75)] text-[#1d6fd8] hover:bg-sky-50
                dark:border-[rgba(125,211,252,0.55)] dark:bg-[rgba(56,189,248,0.10)] dark:text-sky-300 dark:hover:bg-[rgba(56,189,248,0.20)]
              "
            >
              Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT (Bento Mosaic) ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-[680px] lg:mx-0 lg:ml-auto"
          style={{ aspectRatio: "656 / 553" }}
        >
          {/* 1. Stat — top left */}
          <StatCard
            num={stats[0].num}
            label={stats[0].label}
            Icon={stats[0].Icon}
            className="rounded-tl-[3rem] sm:rounded-tl-[4rem] left-0 top-[8.7%] h-[28.9%] w-[32.3%]"
          />

          {/* 2. Photo — top right (big) */}
          <PhotoTile
            src={IMG_TOP}
            alt="Pixel & Code work showcase"
            className="rounded-tr-[3rem] sm:rounded-tr-[4.5rem] left-[34.8%] top-0 h-[32.5%] w-[47.6%]"
          />

          {/* 3. Photo — left tall */}
          <PhotoTile
            src={IMG_LEFT}
            alt="Pixel & Code design work"
            className="rounded-br-[3rem] sm:rounded-br-[4rem] left-0 top-[40.5%] h-[50.6%] w-[32.3%]"
          />

          {/* 4. Stat — middle */}
          <StatCard
            num={stats[1].num}
            label={stats[1].label}
            Icon={stats[1].Icon}
            className="rounded-tl-[3rem] sm:rounded-tl-[4rem] left-[34.1%] top-[35.4%] h-[28.9%] w-[30.5%]"
          />

          {/* 5. Stat — middle right */}
          <StatCard
            num={stats[2].num}
            label={stats[2].label}
            Icon={stats[2].Icon}
            className="rounded-tr-[3rem] sm:rounded-tr-[4rem] left-[67.7%] top-[35.4%] h-[28.9%] w-[32.3%]"
          />

          {/* 6. Photo — bottom middle */}
          <PhotoTile
            src={IMG_BOTTOM}
            alt="Pixel & Code social media design"
            className="left-[34.8%] top-[67.4%] h-[32.5%] w-[34.1%]"
          />

          {/* 7. Stat — bottom right */}
          <StatCard
            num={stats[3].num}
            label={stats[3].label}
            Icon={stats[3].Icon}
            className="rounded-tl-[3rem] sm:rounded-tl-[4rem] left-[71.3%] top-[67.3%] h-[28.9%] w-[28.7%]"
          />
        </motion.div>
      </div>
    </section>
  );
}