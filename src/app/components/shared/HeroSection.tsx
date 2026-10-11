"use client";

import React, { useEffect, useRef } from "react";
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
// PIXEL AURORA background
//
// Tune korar jonno:
//   CELL   -> pixel gulor majhe doori (beshi = boro grid)
//   SIZE   -> ekta pixel er size (CELL er theke choto hobe)
//   PEAK   -> pixel kototuku spasto (light / dark)
//   RADIUS -> mouse er kache koto dur porjonto jwole
// --------------------------------------------------
const CELL = 16;
const SIZE = 11;
const PEAK_LIGHT = 0.42;
const PEAK_DARK = 0.6;
const RADIUS = 150;
const LEVELS = 20;

function smoothstep(a: number, b: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function PixelAurora() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cols = 0;
    let rows = 0;
    let w = 0;
    let h = 0;
    let rnd = new Float32Array(0);
    let weight = new Float32Array(0);
    let raf = 0;
    let visible = true;
    let lastFrame = 0;
    let lastT = 4000;

    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(w / CELL);
      rows = Math.ceil(h / CELL);
      rnd = new Float32Array(cols * rows);
      weight = new Float32Array(cols * rows);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;

          // stable random per pixel
          const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
          rnd[i] = s - Math.floor(s);

          // kothay beshi ghono hobe: upor-dane ar niche-bame
          // (bame text er pichone kom, jate pora jay)
          const nx = x / cols;
          const ny = y / rows;
          const d1 = Math.hypot((nx - 0.88) / 0.65, (ny - 0.28) / 0.95);
          const w1 = 1 - smoothstep(0, 1, d1);
          const d2 = Math.hypot((nx - 0.03) / 0.4, (ny - 1) / 0.5);
          const w2 = (1 - smoothstep(0, 1, d2)) * 0.75;
          weight[i] = Math.max(w1, w2);
        }
      }
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      const dark = document.documentElement.classList.contains("dark");
      const rgb = dark ? "56,189,248" : "14,165,233";
      const peak = dark ? PEAK_DARK : PEAK_LIGHT;

      // alpha level gulo age theke toiri (performance er jonno)
      const styles: string[] = [];
      for (let k = 0; k <= LEVELS; k++) {
        styles.push(`rgba(${rgb},${((k / LEVELS) * peak).toFixed(3)})`);
      }

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          const wgt = weight[i];
          let a = 0;

          if (wgt > 0.02) {
            const nx = x / cols;
            const ny = y / rows;

            // dhire boye jawa wave field
            const v =
              (Math.sin(nx * 7 + t * 0.00035) +
                Math.sin(ny * 6 - t * 0.00028) +
                Math.sin((nx + ny) * 8 + t * 0.00045) +
                Math.sin(Math.hypot(nx - 0.8, ny - 0.35) * 10 - t * 0.0006) +
                4) /
              8;

            a = smoothstep(0.5, 0.85, v) * wgt;

            // prottek pixel nijer moto halka jhilmil kore
            a *= 0.55 + 0.45 * Math.sin(t * 0.0012 * (0.4 + rnd[i]) + rnd[i] * 40);
          }

          // mouse er kache pixel jwole othe
          if (!reduce) {
            const dx = x * CELL + SIZE / 2 - mouse.x;
            const dy = y * CELL + SIZE / 2 - mouse.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < RADIUS * RADIUS) {
              const f = 1 - Math.sqrt(d2) / RADIUS;
              a = Math.max(a, f * f * 0.9 * (0.4 + 0.6 * rnd[i]));
            }
          }

          const q = Math.min(LEVELS, Math.round(a * LEVELS));
          if (q === 0) continue;

          ctx.fillStyle = styles[q];
          ctx.fillRect(x * CELL, y * CELL, SIZE, SIZE);
        }
      }
    };

    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible) return;
      if (t - lastFrame < 33) return; // ~30fps
      lastFrame = t;
      lastT = t;

      mouse.x += (mouse.tx - mouse.x) * 0.18;
      mouse.y += (mouse.ty - mouse.y) * 0.18;

      draw(t);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      if (x < 0 || y < 0 || x > r.width || y > r.height) {
        mouse.x = mouse.tx = -9999;
        mouse.y = mouse.ty = -9999;
        return;
      }

      mouse.tx = x;
      mouse.ty = y;
      if (mouse.x < -1000) {
        mouse.x = x;
        mouse.y = y;
      }
    };

    resize();
    draw(lastT);

    const ro = new ResizeObserver(() => {
      resize();
      draw(lastT);
    });
    ro.observe(parent);

    // theme toggle korle color sathe sathe bodlabe
    const mo = new MutationObserver(() => draw(lastT));
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    if (!reduce) {
      const io = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
        },
        { threshold: 0 }
      );
      io.observe(parent);

      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("pointermove", onMove);
        io.disconnect();
        ro.disconnect();
        mo.disconnect();
      };
    }

    return () => {
      ro.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}

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

        {/* Pixel Aurora (grid er bodole) */}
        <PixelAurora />
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