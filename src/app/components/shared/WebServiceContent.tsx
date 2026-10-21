"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  Code2,
  CreditCard,
  FileText,
  Globe,
  Headphones,
  Layers,
  Lock,
  MessageCircle,
  Monitor,
  Palette,
  Pencil,
  Phone,
  Rocket,
  Search,
  ServerCog,
  ShoppingCart,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  FAQS,
  PHONE_DISPLAY,
  PHONE_TEL,
  PROCESS_STEPS,
  TECH_GROUPS,
  WEBSITE_TYPES,
  WHATSAPP,
} from "@/lib/webServiceData";

/* ─────────────────────────────────────────────
   Brand blue (light blue gradient — no dark blue)
───────────────────────────────────────────── */
const BLUE_GRADIENT = "linear-gradient(180deg, #38bdf8 0%, #3b82f6 100%)";
const BLUE_GRADIENT_H = "linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%)";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TYPE_ICON: Record<string, LucideIcon> = {
  ecommerce: ShoppingCart,
  corporate: Building2,
  portfolio: Layers,
  lms: BookOpen,
  blog: FileText,
  landing: Monitor,
};

const PROCESS_ICON: LucideIcon[] = [Headphones, Palette, Code2, Rocket];

const WHY: { Icon: LucideIcon; title: string; text: string }[] = [
  {
    Icon: Zap,
    title: "Fast by default",
    text: "Built with Next.js and React so pages load quickly and feel smooth.",
  },
  {
    Icon: Smartphone,
    title: "Mobile-first design",
    text: "Every layout is designed for phones first, then scaled up to tablets and desktops.",
  },
  {
    Icon: Search,
    title: "SEO-ready foundations",
    text: "Clean markup, meta tags, sitemap and structured data are set up from day one.",
  },
  {
    Icon: Pencil,
    title: "Easy to update",
    text: "A simple admin panel or headless CMS lets you edit your content yourself.",
  },
  {
    Icon: CreditCard,
    title: "Local payments",
    text: "Payment gateway integration, including bKash and card payments, for online stores.",
  },
  {
    Icon: ServerCog,
    title: "Launch & support",
    text: "We handle domain, hosting, SSL and deployment, then stay on for maintenance.",
  },
];

const RELATED = [
  {
    href: "/ui-ux-design",
    title: "UI/UX Design",
    text: "Clean, user-focused interfaces.",
  },
  {
    href: "/seo",
    title: "SEO",
    text: "Rank higher and get found on Google.",
  },
  {
    href: "/digital-marketing",
    title: "Digital Marketing",
    text: "Grow your business with smart campaigns.",
  },
  {
    href: "/graphics-design",
    title: "Graphics Design",
    text: "Brand identity and social media designs.",
  },
];

const bdt = (n: number) => `৳${n.toLocaleString("en-US")}`;

/* ─────────────────────────────────────────────
   Section animation
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

/* ─────────────────────────────────────────────
   Small shared parts
───────────────────────────────────────────── */
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

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span
    className="bg-clip-text text-transparent"
    style={{ backgroundImage: BLUE_GRADIENT_H }}
  >
    {children}
  </span>
);

const primaryBtn: React.CSSProperties = {
  background: BLUE_GRADIENT_H,
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.6)",
  boxShadow:
    "0 10px 28px rgba(59,130,246,0.38), inset 0 1px 0 rgba(255,255,255,0.45)",
};

const ghostBtn =
  "border border-slate-300 bg-white/70 text-slate-800 hover:border-sky-400 hover:text-sky-600 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-sky-400/60 dark:hover:text-sky-300";

/* ═════════════════════════════════════════════
   HERO — "Website building itself"
═════════════════════════════════════════════ */

/* Prottek phase koto millisecond cholbe: Plan, Design, Develop, Launch */
const DURATIONS = [1900, 2700, 3300, 3800];
const STEP_LABELS = ["Plan", "Design", "Develop", "Launch"];

/* Code card er text (real JSX, akkhor kore type hoy) */
type Seg = { t: string; k: "kw" | "fn" | "str" | "tag" | "plain" };
const CODE: Seg[][] = [
  [
    { t: "export default function ", k: "kw" },
    { t: "Page", k: "fn" },
    { t: "() {", k: "plain" },
  ],
  [
    { t: "  return ", k: "kw" },
    { t: "<Hero", k: "tag" },
  ],
  [
    { t: "    title=", k: "plain" },
    { t: '"Your business"', k: "str" },
  ],
  [
    { t: "    cta=", k: "plain" },
    { t: '"Get a quote"', k: "str" },
    { t: " />", k: "tag" },
  ],
  [{ t: "}", k: "plain" }],
];
const CODE_TOTAL = CODE.flat().reduce((n, s) => n + s.t.length, 0);

const TOKEN: Record<Seg["k"], string> = {
  kw: "text-sky-600 dark:text-sky-300",
  fn: "text-blue-600 dark:text-blue-300",
  str: "text-emerald-600 dark:text-emerald-300",
  tag: "text-cyan-700 dark:text-cyan-300",
  plain: "text-slate-700 dark:text-slate-200",
};

/* phase 0..3 loop. active=false hole (off-screen / tab hidden) pause */
function useBuildLoop(active: boolean, reduce: boolean) {
  const [phase, setPhase] = useState(reduce ? 3 : 0);

  useEffect(() => {
    if (reduce) {
      setPhase(3);
      return;
    }
    if (!active) return;
    const t = setTimeout(() => setPhase((p) => (p + 1) % 4), DURATIONS[phase]);
    return () => clearTimeout(t);
  }, [phase, active, reduce]);

  return phase;
}

function useTyping(phase: number, reduce: boolean) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (reduce || phase === 3) {
      setN(CODE_TOTAL);
      return;
    }
    if (phase < 2) {
      setN(0);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= CODE_TOTAL) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [phase, reduce]);

  return n;
}

function CodeView({ count }: { count: number }) {
  let left = count;
  let caretDone = false;

  return (
    <pre className="m-0 font-mono text-[10.5px] leading-[1.7] sm:text-xs">
      {CODE.map((line, li) => {
        const parts = line.map((seg, si) => {
          if (left <= 0) return null;
          const take = Math.min(seg.t.length, left);
          left -= take;
          return (
            <span key={si} className={TOKEN[seg.k]}>
              {seg.t.slice(0, take)}
            </span>
          );
        });

        const showCaret = left <= 0 && !caretDone && count < CODE_TOTAL;
        if (showCaret) caretDone = true;

        return (
          <div key={li} className="whitespace-pre">
            {parts.some(Boolean) ? parts : "\u00A0"}
            {showCaret && (
              <span className="ml-px inline-block h-3 w-[6px] translate-y-[2px] animate-pulse bg-sky-500" />
            )}
          </div>
        );
      })}
    </pre>
  );
}

/* Wireframe -> design: dui layer er opacity cross-fade hoy */
const wireBox =
  "border border-dashed border-sky-300/80 bg-sky-50/60 dark:border-sky-400/40 dark:bg-white/[0.03]";

function Part({
  designed,
  wire = wireBox,
  done,
  className = "",
  delay = 0,
  children,
}: {
  designed: boolean;
  wire?: string;
  done: string;
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className={`absolute inset-0 rounded-[inherit] transition-opacity duration-500 ${wire}`}
        style={{ opacity: designed ? 0 : 1 }}
      />
      <div
        className={`absolute inset-0 rounded-[inherit] transition-opacity duration-700 ${done}`}
        style={{
          opacity: designed ? 1 : 0,
          transitionDelay: designed ? `${delay}ms` : "0ms",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Chip({
  show,
  Icon,
  text,
  className,
  dur,
}: {
  show: boolean;
  Icon: LucideIcon;
  text: string;
  className: string;
  dur: number;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={text}
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className={`absolute z-20 ${className}`}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: dur, ease: "easeInOut" }}
            className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/90 px-4 py-2.5 shadow-[0_14px_36px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/15 dark:bg-[#0b1626]/90"
          >
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full"
              style={{ background: BLUE_GRADIENT }}
            >
              <Icon className="h-3.5 w-3.5" color="#ffffff" />
            </span>
            <span className="text-xs font-semibold text-slate-800 dark:text-white">
              {text}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BuildVisual({ parallaxY }: { parallaxY: MotionValue<number> }) {
  const reduce = !!useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const seen = useInView(wrapRef, { margin: "-8% 0px" });
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    const onVis = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const phase = useBuildLoop(seen && tabVisible, reduce);
  const typed = useTyping(phase, reduce);
  const designed = phase >= 1;

  /* 3D tilt (shudhu mouse) */
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 20 });
  const sry = useSpring(ry, { stiffness: 120, damping: 20 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 10);
    rx.set(-py * 8);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div style={{ y: parallaxY }} className="relative">
      <div
        ref={wrapRef}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="relative mx-auto w-full max-w-[640px] lg:mx-0 lg:ml-auto"
        style={{ perspective: 1200 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
          className="relative"
        >
          <div
            role="img"
            aria-label="Animation of a website being planned, designed, developed and launched"
            className="relative"
          >
            {/* ───── browser frame ───── */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_28px_70px_rgba(59,130,246,0.18)] dark:border-white/10 dark:bg-[#0a1222] dark:shadow-none">
              {/* url bar */}
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/[0.04]">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />

                <div className="ml-3 flex min-w-0 flex-1 items-center gap-2 rounded-md bg-white px-3 py-1 text-[11px] text-slate-400 dark:bg-white/5 dark:text-slate-500">
                  <Lock
                    className={`h-3 w-3 shrink-0 transition-colors duration-500 ${
                      phase === 3 ? "text-emerald-500" : "text-slate-300"
                    }`}
                  />
                  <span className="truncate">
                    {phase === 3 ? "https://" : ""}yourbusiness.com
                  </span>

                  <AnimatePresence>
                    {phase === 3 && (
                      <motion.span
                        key="live"
                        initial={{ opacity: 0, scale: 0.4 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{ type: "spring", stiffness: 380, damping: 18 }}
                        className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300"
                      >
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </span>
                        Live
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* stage: shob size % e, tai kono size e ekdom thik thake */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-b from-white to-sky-50/60 dark:from-[#0a1222] dark:to-[#0b1a2e]">
                {/* nav */}
                <Part
                  designed={designed}
                  className="left-[5%] top-[5%] aspect-square h-[8%] rounded-md"
                  done="rounded-[inherit] bg-gradient-to-br from-sky-400 to-blue-500"
                />
                {[0, 1, 2].map((i) => (
                  <Part
                    key={i}
                    designed={designed}
                    className="top-[7.6%] h-[2.8%] w-[8%] rounded-full"
                    done="rounded-[inherit] bg-slate-300 dark:bg-white/25"
                    delay={90 + i * 80}
                    // left position via style-less utility classes below
                  />
                ))}
                {/* nav pills position fix (absolute left offsets) */}
                <style>{`
                  .ws-nav-pill-0 { left: 15%; }
                  .ws-nav-pill-1 { left: 24%; }
                  .ws-nav-pill-2 { left: 33%; }
                `}</style>

                <Part
                  designed={designed}
                  className="right-[5%] top-[5%] h-[8%] w-[17%] rounded-full"
                  done="rounded-[inherit] bg-gradient-to-r from-sky-500 to-blue-500"
                  delay={260}
                />

                {/* headline */}
                <Part
                  designed={designed}
                  className="left-[5%] top-[21%] h-[8.5%] w-[46%] rounded-md"
                  done="rounded-[inherit] bg-slate-800 dark:bg-white"
                  delay={120}
                />
                <Part
                  designed={designed}
                  className="left-[5%] top-[32%] h-[8.5%] w-[34%] rounded-md"
                  done="rounded-[inherit] bg-slate-800 dark:bg-white"
                  delay={200}
                />

                {/* paragraph */}
                <Part
                  designed={designed}
                  className="left-[5%] top-[45%] h-[3.2%] w-[44%] rounded-full"
                  done="rounded-[inherit] bg-slate-300 dark:bg-white/30"
                  delay={300}
                />
                <Part
                  designed={designed}
                  className="left-[5%] top-[50.5%] h-[3.2%] w-[36%] rounded-full"
                  done="rounded-[inherit] bg-slate-300 dark:bg-white/30"
                  delay={360}
                />

                {/* cta */}
                <Part
                  designed={designed}
                  className="left-[5%] top-[59%] h-[9%] w-[22%] rounded-full"
                  done="rounded-[inherit] bg-gradient-to-r from-sky-500 to-blue-500 shadow-[0_6px_16px_rgba(59,130,246,0.35)]"
                  delay={440}
                />

                {/* image */}
                <div className="absolute left-[55%] top-[21%] h-[47%] w-[40%] overflow-hidden rounded-xl">
                  <div
                    className={`absolute inset-0 rounded-[inherit] transition-opacity duration-500 ${wireBox}`}
                    style={{ opacity: designed ? 0 : 1 }}
                  >
                    <svg
                      className="h-full w-full text-sky-200 dark:text-sky-400/30"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100"
                    >
                      <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
                      <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                  <div
                    className="absolute inset-0 transition-all duration-1000"
                    style={{
                      opacity: designed ? 1 : 0,
                      transform: designed ? "scale(1)" : "scale(1.08)",
                      transitionDelay: designed ? "350ms" : "0ms",
                    }}
                  >
                    <Image
                      src="/hero/SaaS.png"
                      alt="Web application dashboard designed and developed by Pixel & Code"
                      fill
                      priority
                      sizes="(max-width: 1024px) 60vw, 260px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* cards */}
                {[5, 36.5, 68].map((left, i) => (
                  <Part
                    key={left}
                    designed={designed}
                    className="top-[75%] h-[19%] w-[27%] rounded-xl"
                    done="flex flex-col justify-center gap-[9%] rounded-[inherit] border border-slate-100 bg-white p-[7%] shadow-[0_6px_16px_rgba(59,130,246,0.12)] dark:border-white/10 dark:bg-white/[0.07] dark:shadow-none"
                    delay={520 + i * 110}
                  >
                    <span className="block aspect-square h-[34%] rounded-md bg-gradient-to-br from-sky-300 to-blue-500" />
                    <span className="block h-[10%] w-[70%] rounded-full bg-slate-300 dark:bg-white/30" />
                    <span className="block h-[10%] w-[45%] rounded-full bg-slate-200 dark:bg-white/15" />
                  </Part>
                ))}
                <style>{`
                  .ws-card-0 { left: 5%; }
                  .ws-card-1 { left: 36.5%; }
                  .ws-card-2 { left: 68%; }
                `}</style>

                {/* scan light (develop phase) */}
                <AnimatePresence>
                  {phase === 2 && (
                    <motion.div
                      key="scan"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="pointer-events-none absolute inset-0"
                    >
                      <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: "560%" }}
                        transition={{ duration: 1.7, ease: "linear", repeat: Infinity }}
                        className="absolute left-0 right-0 top-0 h-[18%]"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(56,189,248,0), rgba(56,189,248,0.28), rgba(56,189,248,0))",
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ───── code card (develop) ───── */}
            <AnimatePresence>
              {phase === 2 && (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, y: 34, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 24, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute -bottom-7 left-3 z-20 w-[64%] rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-white/15 dark:bg-[#0b1626]/95 sm:left-6"
                >
                  <div className="mb-2.5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    page.tsx
                  </div>
                  <CodeView count={typed} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* ───── phone (launch) ───── */}
            <AnimatePresence>
              {phase === 3 && (
                <motion.div
                  key="phone"
                  initial={{ opacity: 0, y: 60, rotate: 7, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 40, scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 170, damping: 20 }}
                  className="absolute -bottom-9 right-1 z-20 w-[24%] sm:right-4"
                >
                  <div className="relative aspect-[9/18.5] overflow-hidden rounded-[22px] border-[3px] border-slate-800 bg-white shadow-[0_22px_50px_rgba(15,23,42,0.28)] dark:border-slate-200/80 dark:bg-[#0a1222]">
                    <span className="absolute left-1/2 top-[2.5%] h-[2.4%] w-[30%] -translate-x-1/2 rounded-full bg-slate-800 dark:bg-slate-200/80" />
                    <div className="absolute inset-x-[9%] top-[8%] space-y-[5%]">
                      <span className="block h-2 w-[75%] rounded-full bg-slate-800 dark:bg-white" />
                      <span className="block h-2 w-[50%] rounded-full bg-slate-800 dark:bg-white" />
                      <span className="block h-1.5 w-[85%] rounded-full bg-slate-300 dark:bg-white/30" />
                      <span className="block h-1.5 w-[65%] rounded-full bg-slate-300 dark:bg-white/30" />
                      <span className="block h-5 w-[45%] rounded-full bg-gradient-to-r from-sky-500 to-blue-500" />
                      <span className="block h-[52px] w-full rounded-lg bg-gradient-to-br from-sky-200 to-blue-400 sm:h-[78px]" />
                      <span className="block h-7 w-full rounded-lg border border-slate-100 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.07]" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ───── phase-synced chips ───── */}
            <Chip
              show={phase === 2}
              Icon={Code2}
              text="Next.js"
              className="-top-4 right-5 sm:right-8"
              dur={5}
            />
            <Chip
              show={phase === 3}
              Icon={Search}
              text="SEO ready"
              className="-top-4 left-5 sm:left-8"
              dur={6}
            />
            <Chip
              show={phase === 3}
              Icon={Smartphone}
              text="Mobile first"
              className="bottom-[26%] -left-3 hidden sm:block"
              dur={7}
            />
          </div>
        </motion.div>

        {/* ───── stepper ───── */}
        <div aria-hidden="true" className="mt-12 grid grid-cols-4 gap-3">
          {STEP_LABELS.map((label, i) => {
            const isActive = i === phase;
            return (
              <div key={label}>
                <div className="h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: BLUE_GRADIENT_H }}
                    initial={{ width: "0%" }}
                    animate={{ width: i <= phase ? "100%" : "0%" }}
                    transition={
                      isActive
                        ? { duration: DURATIONS[phase] / 1000, ease: "linear" }
                        : { duration: 0.3 }
                    }
                  />
                </div>
                <span
                  className={`mt-2 block text-xs font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-400 dark:text-slate-500"
                  }`}
                >
                  0{i + 1} {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

/* Cursor-er dike halka tane */
function Magnetic({ children }: { children: React.ReactNode }) {
  const reduce = !!useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 });
  const sy = useSpring(y, { stiffness: 220, damping: 16 });

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="inline-block"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.22);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* Number scroll-e dekha gele count kore uthe. sr-only e final value thake (SEO) */
function CountUp({
  to,
  decimals = 0,
  suffix = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true });
  const reduce = !!useReducedMotion();
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!seen) return;
    if (reduce) {
      setV(to);
      return;
    }
    const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: setV });
    return () => c.stop();
  }, [seen, to, reduce]);

  return (
    <dd ref={ref} className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
      <span className="sr-only">
        {to}
        {suffix}
      </span>
      <span aria-hidden="true">
        {v.toFixed(decimals)}
        {suffix}
      </span>
    </dd>
  );
}

const H1_WORDS = ["Web", "design", "&", "development", "company", "in"];

function Hero() {
  const reduce = !!useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  /* mouse spotlight */
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const sx = useSpring(mx, { stiffness: 90, damping: 24 });
  const sy = useSpring(my, { stiffness: 90, damping: 24 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    mx.set(el.clientWidth * 0.68 - 280);
    my.set(120);
  }, [mx, my]);

  /* scroll parallax (visual) */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="ws-hero-title"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left - 280);
        my.set(e.clientY - r.top - 280);
      }}
      className="relative overflow-hidden pb-24 pt-32 lg:pb-32 lg:pt-36"
    >
      {/* soft base glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[1000px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.16) 0%, rgba(56,189,248,0) 70%)",
        }}
      />

      {/* cursor spotlight */}
      <motion.div
        aria-hidden="true"
        style={{
          x: sx,
          y: sy,
          background:
            "radial-gradient(circle, rgba(56,189,248,0.22) 0%, rgba(59,130,246,0.08) 40%, rgba(59,130,246,0) 70%)",
        }}
        className="pointer-events-none absolute left-0 top-0 hidden h-[560px] w-[560px] rounded-full md:block"
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-12">
        {/* ───── left ───── */}
        <div className="max-w-[640px]">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(56,189,248,0.45)] bg-[rgba(255,255,255,0.75)] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-sky-700 backdrop-blur-md dark:border-[rgba(56,189,248,0.35)] dark:bg-[rgba(56,189,248,0.12)] dark:text-sky-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
            </span>
            <Globe className="h-3.5 w-3.5" />
            Web Service
          </motion.span>

          {/* word-by-word mask reveal (text real, SEO safe) */}
          <h1
            id="ws-hero-title"
            className="mt-6 text-[38px] font-semibold leading-[1.1] tracking-[-0.02em] text-slate-900 dark:text-white sm:text-5xl lg:text-[52px] xl:text-[56px]"
          >
            {H1_WORDS.map((w, i) => (
              <span key={i}>
                <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.12 + i * 0.07 }}
                  >
                    {w}
                  </motion.span>
                </span>{" "}
              </span>
            ))}
            <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: EASE,
                  delay: 0.12 + H1_WORDS.length * 0.07,
                }}
              >
                <motion.span
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #0ea5e9, #3b82f6, #22d3ee, #0ea5e9)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={
                    reduce ? undefined : { backgroundPosition: ["0% 50%", "200% 50%"] }
                  }
                  transition={{ duration: 7, ease: "linear", repeat: Infinity }}
                >
                  Bangladesh
                </motion.span>
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
            className="mt-6 max-w-[560px] text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-[17px] sm:leading-8"
          >
            We build fast, mobile-friendly and SEO-ready websites, online stores
            and web apps with Next.js and React, so your business looks
            professional and brings in real customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.68 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-[filter] duration-300 hover:brightness-110"
                style={primaryBtn}
              >
                Get a free quote
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  color="#ffffff"
                />
              </Link>
            </Magnetic>

            <Link
              href="/portfolio"
              className={`inline-flex items-center rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 ${ghostBtn}`}
            >
              See our work
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
            className="mt-10 grid max-w-md grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white/70 py-4 backdrop-blur-md dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.04]"
          >
            {[
              { to: 50, suffix: "+", label: "Projects", decimals: 0 },
              { to: 10, suffix: "+", label: "Clients", decimals: 0 },
              { to: 2.5, suffix: "+", label: "Years", decimals: 1 },
            ].map((s) => (
              <div key={s.label} className="px-3 text-center">
                <dt className="sr-only">{s.label}</dt>
                <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals} />
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* ───── right: website builds itself ───── */}
        <BuildVisual parallaxY={visualY} />
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════
   Main
═════════════════════════════════════════════ */
export function WebServiceContent() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full bg-white dark:bg-[#050b16]">
        <Hero />

        {/* ═════════ WHAT WE BUILD ═════════ */}
        <section aria-labelledby="ws-types-title" className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <SectionHead
              id="ws-types-title"
              eyebrow="What we build"
              title={
                <>
                  Any type of <GradientText>website</GradientText>
                </>
              }
              text="From a simple landing page to a full online store or learning platform, we build the kind of website your business needs."
            />

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {WEBSITE_TYPES.map((t) => {
                const Icon = TYPE_ICON[t.key] ?? Monitor;
                return (
                  <motion.li
                    key={t.key}
                    variants={fade}
                    className="group flex flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_44px_rgba(59,130,246,0.14)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/50"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{ background: BLUE_GRADIENT }}
                      >
                        <Icon className="h-6 w-6" color="#ffffff" />
                      </span>
                      <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                        From {bdt(t.fromBdt)}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {t.description}
                    </p>

                    <ul className="mt-5 flex-1 space-y-2">
                      {t.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                        >
                          <span
                            className="flex shrink-0 items-center justify-center rounded-full"
                            style={{
                              background: BLUE_GRADIENT,
                              width: 18,
                              height: 18,
                            }}
                          >
                            <Check
                              className="h-2.5 w-2.5"
                              color="#ffffff"
                              strokeWidth={3.5}
                            />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-300"
                    >
                      Get a quote
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </section>

        {/* ═════════ WHY US ═════════ */}
        <section
          aria-labelledby="ws-why-title"
          className="bg-slate-50/70 py-16 dark:bg-white/[0.02] md:py-24"
        >
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <SectionHead
              id="ws-why-title"
              eyebrow="Why Pixel & Code"
              title={
                <>
                  Websites built to <GradientText>perform</GradientText>
                </>
              }
              text="A good website is more than good looks. Here is what you get with every project."
            />

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {WHY.map(({ Icon, title, text }) => (
                <motion.li
                  key={title}
                  variants={fade}
                  className="rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-400/10">
                    <Icon className="h-5 w-5 text-sky-600 dark:text-sky-300" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {text}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* ═════════ PROCESS ═════════ */}
        <section aria-labelledby="ws-process-title" className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <SectionHead
              id="ws-process-title"
              eyebrow="Our process"
              title={
                <>
                  How we <GradientText>work</GradientText>
                </>
              }
              text="A clear four-step process, so you always know what is happening with your project."
            />

            <motion.ol
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            >
              {PROCESS_STEPS.map((s, i) => {
                const Icon = PROCESS_ICON[i] ?? Code2;
                return (
                  <motion.li
                    key={s.title}
                    variants={fade}
                    className="relative rounded-3xl border border-slate-200 bg-white/80 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{ background: BLUE_GRADIENT }}
                      >
                        <Icon className="h-6 w-6" color="#ffffff" />
                      </span>
                      <span className="text-4xl font-semibold tracking-tight text-slate-200 dark:text-white/10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {s.desc}
                    </p>
                  </motion.li>
                );
              })}
            </motion.ol>
          </div>
        </section>

        {/* ═════════ TECH STACK ═════════ */}
        <section
          aria-labelledby="ws-tech-title"
          className="bg-slate-50/70 py-16 dark:bg-white/[0.02] md:py-24"
        >
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <SectionHead
              id="ws-tech-title"
              eyebrow="Tech stack"
              title={
                <>
                  Built with <GradientText>modern technology</GradientText>
                </>
              }
              text="We use proven, up-to-date tools that are fast, secure and easy to scale as your business grows."
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {TECH_GROUPS.map((g) => (
                <motion.div
                  key={g.group}
                  variants={fade}
                  className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    {g.group}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-sky-200 bg-sky-50/70 px-3 py-1.5 text-xs font-semibold text-sky-800 dark:border-sky-400/25 dark:bg-sky-400/10 dark:text-sky-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═════════ PROOF + PACKAGES ═════════ */}
        <section aria-labelledby="ws-proof-title" className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <SectionHead
              id="ws-proof-title"
              eyebrow="See the results"
              title={
                <>
                  Real projects, <GradientText>real businesses</GradientText>
                </>
              }
              text="Browse the websites we have built and the companies we have worked with."
            />

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="grid gap-5 md:grid-cols-3"
            >
              {[
                {
                  href: "/portfolio",
                  title: "Our portfolio",
                  text: "Websites, e-commerce platforms and designs we have delivered.",
                },
                {
                  href: "/store",
                  title: "Companies we have worked with",
                  text: "The brands that trust Pixel & Code with their digital presence.",
                },
                {
                  href: "/packages",
                  title: "Website packages",
                  text: "Prefer a fixed plan? Compare our packages and pricing.",
                },
              ].map((c) => (
                <motion.li key={c.href} variants={fade}>
                  <Link
                    href={c.href}
                    className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_44px_rgba(59,130,246,0.14)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/50"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {c.text}
                      </p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-300">
                      View
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* ═════════ RELATED SERVICES ═════════ */}
        <section
          aria-labelledby="ws-related-title"
          className="bg-slate-50/70 py-16 dark:bg-white/[0.02] md:py-20"
        >
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <h2
              id="ws-related-title"
              className="mb-8 text-center text-2xl font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              More services to grow your business
            </h2>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {RELATED.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/50"
                  >
                    <span>
                      <span className="block text-base font-semibold text-slate-900 dark:text-white">
                        {r.title}
                      </span>
                      <span className="mt-0.5 block text-sm text-slate-500 dark:text-slate-400">
                        {r.text}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-sky-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═════════ FAQ (native details, crawlable) ═════════ */}
        <section aria-labelledby="ws-faq-title" className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
            <SectionHead
              id="ws-faq-title"
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
          aria-labelledby="ws-cta-title"
          className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-12"
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
                id="ws-cta-title"
                className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
                style={{ color: "#ffffff", textWrap: "balance" }}
              >
                Ready to build your website?
              </h2>
              <p
                className="mx-auto mt-3 max-w-xl text-[15px] leading-7"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                Talk to us today. Your first consultation is free, and we will
                get back with a clear plan.
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
                  Free consultation
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

export default WebServiceContent;