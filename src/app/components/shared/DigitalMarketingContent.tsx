"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Phone,
  Search,
  Share2,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { FAQS, PROCESS, SERVICES } from "@/lib/digitalMarketingData";
import { packageData } from "@/lib/packagesData";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/webServiceData";

/* ─────────────────────────────────────────────
   Brand blue (light blue gradient — no dark blue)
───────────────────────────────────────────── */
const BLUE_GRADIENT = "linear-gradient(180deg, #38bdf8 0%, #3b82f6 100%)";
const BLUE_GRADIENT_H = "linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%)";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SERVICE_ICON: Record<string, LucideIcon> = {
  strategy: Target,
  meta: Megaphone,
  seo: Search,
  content: Share2,
  landing: MousePointerClick,
  reporting: TrendingUp,
};

/* ─────────────────────────────────────────────
   Section animation + shared bits
───────────────────────────────────────────── */
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};
const inView = { once: true, margin: "-60px" } as const;

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-clip-text text-transparent" style={{ backgroundImage: BLUE_GRADIENT_H }}>
    {children}
  </span>
);

function SectionHead({
  id,
  eyebrow,
  title,
  text,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
}) {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className="mx-auto mb-12 max-w-2xl text-center md:mb-14"
    >
      <span className="inline-flex items-center rounded-full border border-[rgba(56,189,248,0.45)] bg-[rgba(255,255,255,0.75)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-sky-700 backdrop-blur-md dark:border-[rgba(56,189,248,0.35)] dark:bg-[rgba(56,189,248,0.12)] dark:text-sky-200">
        {eyebrow}
      </span>
      <h2
        id={id}
        className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-4xl"
        style={{ textWrap: "balance" }}
      >
        {title}
      </h2>
      {text && (
        <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-slate-600 dark:text-slate-400">
          {text}
        </p>
      )}
    </motion.div>
  );
}

const primaryBtn: React.CSSProperties = {
  background: BLUE_GRADIENT_H,
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.6)",
  boxShadow: "0 10px 28px rgba(59,130,246,0.38), inset 0 1px 0 rgba(255,255,255,0.45)",
};

const ghostBtn =
  "border border-slate-300 bg-white/70 text-slate-800 hover:border-sky-400 hover:text-sky-600 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-sky-400/60 dark:hover:text-sky-300";

/* ═════════════════════════════════════════════
   HERO ANIMATION — "Campaign Pulse"
   Dot grid = audience. Ripple = campaign reach.
   Dot jwole uthle Reach -> Click -> Lead -> Customer
═════════════════════════════════════════════ */
type Ripple = {
  x: number;
  y: number;
  t0: number;
  maxR: number;
  hit: Uint8Array;
  stats: number[]; // [reach, clicks, leads, customers]
};

const STAT_META = [
  { label: "Reach", dot: "bg-sky-400" },
  { label: "Clicks", dot: "bg-blue-500" },
  { label: "Leads", dot: "bg-cyan-400" },
  { label: "Customers", dot: "bg-emerald-500" },
];

function CampaignField() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const reduce = !!useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 22; // dot gulor majhe doori
    const SPEED = 250; // ripple speed (px/second)
    const AUTO_EVERY = 3.6; // koto second por por auto campaign

    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    let offX = 0;
    let offY = 0;
    let rnd = new Float32Array(0);
    let dark = document.documentElement.classList.contains("dark");
    let ripples: Ripple[] = [];
    let newest: Ripple | null = null;
    let raf = 0;
    let running = false;
    let inView = false;
    let tabVisible = !document.hidden;
    let lastAuto = -999;
    const mouse = { x: -999, y: -999 };
    const shown = [-1, -1, -1, -1];
    const node = { x: 0, y: 0 };

    const launch = (x: number, y: number): Ripple => {
      const maxR = Math.hypot(Math.max(x, w - x), Math.max(y, h - y)) + 80;
      const rp: Ripple = {
        x,
        y,
        t0: performance.now() / 1000,
        maxR,
        hit: new Uint8Array(cols * rows),
        stats: [0, 0, 0, 0],
      };
      ripples.push(rp);
      if (ripples.length > 4) ripples.shift();
      newest = rp;
      return rp;
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);

      const baseRGB = dark ? "226,232,240" : "100,116,139";
      const baseA = dark ? 0.2 : 0.26;

      // ripple edge
      for (const rp of ripples) {
        const r = (now - rp.t0) * SPEED;
        if (r <= 0) continue;
        ctx.beginPath();
        ctx.arc(rp.x, rp.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56,189,248,${Math.max(0, 0.28 * (1 - r / rp.maxR)).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // dots
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const i = row * cols + col;
          const px = offX + col * SPACING;
          const py = offY + row * SPACING;
          const q = rnd[i];

          // kon dot ta ki hobe (stable random)
          const kind = q < 0.085 ? 3 : q < 0.2 ? 2 : q < 0.38 ? 1 : 0;
          const life = kind === 3 ? 3.4 : kind === 2 ? 2.2 : kind === 1 ? 1.5 : 1;

          let e = 0;
          for (const rp of ripples) {
            const r = (now - rp.t0) * SPEED;
            if (Math.hypot(px - rp.x, py - rp.y) <= r) {
              if (!rp.hit[i]) {
                rp.hit[i] = 1;
                rp.stats[0] += 1;
                if (q < 0.38) rp.stats[1] += 1;
                if (q < 0.2) rp.stats[2] += 1;
                if (q < 0.085) rp.stats[3] += 1;
              }
              const age = (r - Math.hypot(px - rp.x, py - rp.y)) / SPEED;
              const v = Math.max(0, 1 - age / life);
              if (v > e) e = v;
            }
          }

          const md = Math.hypot(px - mouse.x, py - mouse.y);
          const hv = md < 70 ? 1 - md / 70 : 0;

          let radius = 1.7 + hv * 1.4;
          let alpha = baseA + hv * 0.25;
          let rgb = baseRGB;

          if (e > 0) {
            radius = 1.9 + e * 2.4 + hv * 1.2;
            alpha = Math.min(1, baseA + e * 0.8);
            rgb =
              kind === 3
                ? "16,185,129"
                : kind === 2
                  ? "34,211,238"
                  : kind === 1
                    ? "59,130,246"
                    : "56,189,248";
          }

          ctx.fillStyle = `rgba(${rgb},${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fill();

          // customer: emerald ring
          if (kind === 3 && e > 0.15) {
            ctx.strokeStyle = `rgba(16,185,129,${(e * 0.55).toFixed(3)})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.arc(px, py, radius + 3 + (1 - e) * 5, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      }

      // campaign node
      const pulse = (now % 1.8) / 1.8;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 8 + pulse * 18, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(56,189,248,${(0.4 * (1 - pulse)).toFixed(3)})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      const g = ctx.createLinearGradient(node.x, node.y - 8, node.x, node.y + 8);
      g.addColorStop(0, "#38bdf8");
      g.addColorStop(1, "#3b82f6");
      ctx.beginPath();
      ctx.arc(node.x, node.y, 7, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();

      // counters (DOM e sorasori, React re-render chhara)
      if (newest) {
        for (let k = 0; k < 4; k++) {
          const v = newest.stats[k];
          if (v !== shown[k]) {
            shown[k] = v;
            const el = statRefs.current[k];
            if (el) el.textContent = String(v);
          }
        }
      }

      // purano ripple porishkar
      ripples = ripples.filter(
        (rp) => (now - rp.t0) * SPEED < rp.maxR + SPEED * 3.6
      );
    };

    const staticDraw = () => {
      const now = performance.now() / 1000;
      const rp = launch(node.x, node.y);
      rp.t0 = now - (rp.maxR * 0.8) / SPEED;
      draw(now);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.max(2, Math.floor(w / SPACING));
      rows = Math.max(2, Math.floor(h / SPACING));
      offX = (w - (cols - 1) * SPACING) / 2;
      offY = (h - (rows - 1) * SPACING) / 2;

      rnd = new Float32Array(cols * rows);
      for (let i = 0; i < rnd.length; i++) {
        const s = Math.sin(i * 12.9898) * 43758.5453;
        rnd[i] = s - Math.floor(s);
      }

      node.x = w * 0.16;
      node.y = h * 0.5;
      ripples = [];
      newest = null;
      shown.fill(-1);

      if (reduce) staticDraw();
    };

    const loop = () => {
      const now = performance.now() / 1000;
      if (now - lastAuto > AUTO_EVERY) {
        launch(node.x, node.y);
        lastAuto = now;
      }
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const sync = () => {
      const should = inView && tabVisible && !reduce;
      if (should && !running) {
        running = true;
        raf = requestAnimationFrame(loop);
      } else if (!should && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    };

    /* pointer: click / tap = notun campaign launch, hover = dot boro */
    const onDown = (e: PointerEvent) => {
      if (reduce) return;
      const r = canvas.getBoundingClientRect();
      launch(e.clientX - r.left, e.clientY - r.top);
    };
    const onMove = (e: PointerEvent) => {
      if (reduce) return;
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };
    const onVis = () => {
      tabVisible = !document.hidden;
      sync();
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    io.observe(wrap);

    // theme toggle korle colour bodlabe
    const mo = new MutationObserver(() => {
      dark = document.documentElement.classList.contains("dark");
      if (reduce) staticDraw();
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduce]);

  return (
    <div
      role="img"
      aria-label="Animated simulation of a marketing campaign: a ripple spreads across an audience of dots, and some of them turn into clicks, leads and customers."
      className="rounded-[28px] border border-slate-200 bg-white/80 p-3 shadow-[0_28px_70px_rgba(59,130,246,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:p-4"
    >
      <div aria-hidden="true" className="flex items-center justify-between px-2 pb-3 text-xs">
        <span className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
          </span>
          Campaign simulation
        </span>
        {!reduce && (
          <span className="hidden text-slate-400 dark:text-slate-500 sm:inline">
            Click anywhere to launch a campaign
          </span>
        )}
      </div>

      <div
        ref={wrapRef}
        className="relative h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-[#0a1424] sm:h-[380px]"
      >
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full cursor-pointer"
          style={{ touchAction: "pan-y" }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute text-[10px] font-semibold text-slate-500 dark:text-slate-400"
          style={{ left: "16%", top: "calc(50% + 22px)", transform: "translateX(-50%)" }}
        >
          Your campaign
        </span>
      </div>

      <dl aria-hidden="true" className="mt-3 grid grid-cols-4 gap-2">
        {STAT_META.map((s, i) => (
          <div
            key={s.label}
            className="rounded-xl border border-slate-200 bg-white px-2 py-2.5 text-center dark:border-white/10 dark:bg-white/[0.04]"
          >
            <dt className="flex items-center justify-center gap-1.5 text-[10px] font-semibold text-slate-500 dark:text-slate-400">
              <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
              {s.label}
            </dt>
            <dd className="mt-1 text-lg font-semibold tabular-nums text-slate-900 dark:text-white">
              <span
                ref={(el) => {
                  statRefs.current[i] = el;
                }}
              >
                0
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ═════════════════════════════════════════════
   HERO
═════════════════════════════════════════════ */
function Hero() {
  return (
    <section
      aria-labelledby="dm-hero-title"
      className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[1000px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.16) 0%, rgba(56,189,248,0) 70%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-12">
        {/* left */}
        <div className="max-w-[620px]">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(56,189,248,0.45)] bg-[rgba(255,255,255,0.75)] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-sky-700 backdrop-blur-md dark:border-[rgba(56,189,248,0.35)] dark:bg-[rgba(56,189,248,0.12)] dark:text-sky-200"
          >
            Digital marketing agency in Bangladesh
          </motion.span>

          <motion.h1
            id="dm-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="mt-6 text-[38px] font-semibold leading-[1.1] tracking-[-0.02em] text-slate-900 dark:text-white sm:text-5xl lg:text-[52px] xl:text-[56px]"
          >
            Digital marketing that turns attention into{" "}
            <span className="relative inline-block">
              <GradientText>customers</GradientText>
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full"
              >
                <defs>
                  <linearGradient id="dm-underline" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M2 8 C 40 2, 90 12, 130 6 S 190 4, 198 7"
                  fill="none"
                  stroke="url(#dm-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.9 }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
            className="mt-7 max-w-[540px] text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-[17px] sm:leading-8"
          >
            Facebook and Instagram ads, SEO and social media content, planned
            around your goals and measured by real results: reach, clicks,
            leads and sales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.42 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              style={primaryBtn}
            >
              Get a free strategy call
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                color="#ffffff"
              />
            </Link>
            <Link
              href="/packages"
              className={`inline-flex items-center rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 ${ghostBtn}`}
            >
              See plans
            </Link>
          </motion.div>
        </div>

        {/* right: campaign pulse */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
          className="mx-auto w-full max-w-[640px] lg:mx-0 lg:ml-auto"
        >
          <CampaignField />
        </motion.div>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════
   Main
═════════════════════════════════════════════ */
export function DigitalMarketingContent() {
  const plans = packageData.facebook.monthly;

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full bg-white dark:bg-[#050b16]">
        <Hero />

        {/* ═════════ SERVICES ═════════ */}
        <section aria-labelledby="dm-services-title" className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <SectionHead
              id="dm-services-title"
              eyebrow="What we do"
              title={
                <>
                  Marketing that is <GradientText>planned and measured</GradientText>
                </>
              }
              text="Every service works toward one goal: more of the right customers for your business."
            />

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {SERVICES.map((s) => {
                const Icon = SERVICE_ICON[s.key] ?? Target;
                return (
                  <motion.li
                    key={s.key}
                    variants={fade}
                    className="group flex flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_44px_rgba(59,130,246,0.12)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/50"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-400/10">
                      <Icon className="h-5 w-5 text-sky-600 dark:text-sky-300" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {s.description}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    {s.href && (
                      <Link
                        href={s.href}
                        className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-300"
                      >
                        Learn more
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </section>

        {/* ═════════ PROCESS ═════════ */}
        <section
          aria-labelledby="dm-process-title"
          className="bg-slate-50/70 py-16 dark:bg-white/[0.02] md:py-24"
        >
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <SectionHead
              id="dm-process-title"
              eyebrow="How we work"
              title={
                <>
                  A simple, <GradientText>transparent</GradientText> process
                </>
              }
              text="You always know what we are doing, why we are doing it and what it is bringing in."
            />

            <motion.ol
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="grid gap-10 md:grid-cols-4 md:gap-6"
            >
              {PROCESS.map((s, i) => (
                <motion.li key={s.title} variants={fade}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-sky-400 bg-white text-sm font-bold text-sky-600 dark:bg-[#050b16] dark:text-sky-300">
                      {i + 1}
                    </span>
                    {i < PROCESS.length - 1 && (
                      <span className="hidden h-px flex-1 bg-gradient-to-r from-sky-300 to-transparent md:block" />
                    )}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {s.desc}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* ═════════ PLANS (packagesData theke) ═════════ */}
        <section aria-labelledby="dm-plans-title" className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <SectionHead
              id="dm-plans-title"
              eyebrow="Pricing"
              title={
                <>
                  Facebook Ads <GradientText>plans</GradientText>
                </>
              }
              text="Clear monthly plans with ad credit included. No hidden fees."
            />

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="grid gap-5 md:grid-cols-3"
            >
              {plans.map((p) => (
                <motion.li
                  key={p.nameEn}
                  variants={fade}
                  className={`rounded-3xl border bg-white/80 p-6 backdrop-blur-md dark:bg-white/[0.04] ${
                    p.popular
                      ? "border-sky-400 shadow-[0_18px_44px_rgba(59,130,246,0.16)]"
                      : "border-slate-200 dark:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {p.nameEn}
                    </h3>
                    {p.popular && (
                      <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-bold text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                        Most popular
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
                    ${p.price}
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      /mo
                    </span>
                  </p>
                  <ul className="mt-5 space-y-2">
                    {p.featuresEn.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/packages"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                style={primaryBtn}
              >
                Compare all plans
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  color="#ffffff"
                />
              </Link>
              <Link
                href="/meta-marketing"
                className={`inline-flex items-center rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 ${ghostBtn}`}
              >
                About Meta marketing
              </Link>
            </div>
          </div>
        </section>

        {/* ═════════ FAQ (native details, crawlable) ═════════ */}
        <section
          aria-labelledby="dm-faq-title"
          className="bg-slate-50/70 py-16 dark:bg-white/[0.02] md:py-24"
        >
          <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
            <SectionHead
              id="dm-faq-title"
              eyebrow="FAQ"
              title={
                <>
                  Frequently asked <GradientText>questions</GradientText>
                </>
              }
            />
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <details
                  key={f.q}
                  open={i === 0}
                  className="group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md transition-colors open:border-sky-300 dark:border-white/10 dark:bg-white/[0.04] dark:open:border-sky-400/50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left text-base font-semibold text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:text-white [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-sky-500 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="px-5 pb-5 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════ FINAL CTA ═════════ */}
        <section
          aria-labelledby="dm-cta-title"
          className="px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24 lg:px-12"
        >
          <div
            className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-10 md:py-16"
            style={{
              background: "linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)",
              border: "1px solid rgba(255,255,255,0.55)",
              boxShadow:
                "0 24px 60px rgba(59,130,246,0.30), inset 0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0) 70%)",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full"
              style={{ border: "40px solid rgba(255,255,255,0.14)" }}
            />

            <div className="relative mx-auto max-w-2xl">
              <h2
                id="dm-cta-title"
                className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
                style={{ color: "#ffffff", textWrap: "balance" }}
              >
                Ready to turn attention into customers?
              </h2>
              <p
                className="mx-auto mt-3 max-w-xl text-[15px] leading-7"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                Tell us about your business. We will suggest a clear plan and
                share what to expect.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "#ffffff",
                    color: "#1d6fd8",
                    boxShadow: "0 12px 30px rgba(15,23,42,0.20)",
                  }}
                >
                  Free strategy call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.55)",
                  }}
                >
                  <Phone className="h-4 w-4" color="#ffffff" />
                  {PHONE_DISPLAY}
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.55)",
                  }}
                >
                  <MessageCircle className="h-4 w-4" color="#ffffff" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}

export default DigitalMarketingContent;