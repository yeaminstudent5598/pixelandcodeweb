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
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Camera,
  CheckCircle2,
  ChevronDown,
  ChevronsLeftRight,
  Megaphone,
  MessageCircle,
  MessageSquare,
  MonitorPlay,
  Palette,
  Phone,
  Play,
  Rocket,
  Scissors,
  Smartphone,
  Sparkles,
  Subtitles,
  Upload,
  Volume2,
  type LucideIcon,
} from "lucide-react";
import {
  FAQS,
  FORMATS,
  PROCESS_STEPS,
  VIDEO_SERVICES,
  WORKS,
  type WorkItem,
} from "@/lib/videoEditingData";
import { packageData } from "@/lib/packagesData";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/webServiceData";

/* ─────────────────────────────────────────────
   Brand blue (light blue gradient — no dark blue)
───────────────────────────────────────────── */
const BLUE_GRADIENT = "linear-gradient(180deg, #38bdf8 0%, #3b82f6 100%)";
const BLUE_GRADIENT_H = "linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%)";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Hero preview te ei image ta dekhay. Nijer kono video-r ekta frame diye replace korle best */
const MONITOR_IMAGE = "/video_editor_team.webp";

const SERVICE_ICON: Record<string, LucideIcon> = {
  reels: Smartphone,
  youtube: MonitorPlay,
  promo: Megaphone,
  corporate: Building2,
  motion: Sparkles,
  product: Camera,
};

const PROCESS_ICON: LucideIcon[] = [Upload, Scissors, MessageSquare, Rocket];

const RELATED = [
  { href: "/graphics-design", title: "Graphics Design", text: "Thumbnails, posts and brand visuals." },
  { href: "/meta-marketing", title: "Meta Marketing", text: "Put your videos in front of the right people." },
  { href: "/digital-marketing", title: "Digital Marketing", text: "Grow your business with smart campaigns." },
  { href: "/web-service", title: "Web Development", text: "A fast website to host your work." },
];

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
   HERO — "Raw to Final Cut" (live video editor)
═════════════════════════════════════════════ */
type Phase = "import" | "edit" | "export" | "done";
type Tone = "raw" | "graded";

const EDIT_SECONDS = 6.5; // playhead ek pass e koto second
const CLIP_SECONDS = 15; // timecode e dekhano fake duration
const CHIP_AT = [0.2, 0.45, 0.7, 0.9]; // chip gulo kon progress e ashbe

const CLIPS = [
  { name: "Intro", from: 0, to: 18 },
  { name: "Interview", from: 19, to: 58 },
  { name: "B-roll", from: 59, to: 82 },
  { name: "Outro", from: 83, to: 100 },
];
const CAPTIONS = [
  { from: 22, to: 40 },
  { from: 62, to: 79 },
];
const CUTS = [0.185, 0.585, 0.825];
const FLY = [
  { x: -120, y: -60, r: -12 },
  { x: 90, y: -90, r: 9 },
  { x: -70, y: 70, r: -7 },
  { x: 140, y: 50, r: 11 },
];
const BARS = Array.from(
  { length: 64 },
  (_, i) => 18 + Math.round(Math.abs(Math.sin(i * 0.8) * Math.cos(i * 0.31)) * 62) + ((i * 37) % 11)
);
const CHIPS: { Icon: LucideIcon; text: string; pos: string }[] = [
  { Icon: Scissors, text: "Clean cuts", pos: "-left-5 top-[14%]" },
  { Icon: Palette, text: "Color grading", pos: "-right-5 top-[26%]" },
  { Icon: Subtitles, text: "Captions", pos: "-left-5 top-[46%]" },
  { Icon: Volume2, text: "Sound mix", pos: "-right-5 top-[58%]" },
];

const RAW_FILTER = "grayscale(0.88) contrast(0.78) brightness(0.9)";
const GRADE_FILTER = "saturate(1.25) contrast(1.08)";
const FRAME_STRIP =
  "repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0, rgba(255,255,255,0.22) 1px, transparent 1px, transparent 16px)";

const CLIP_TONE: Record<Tone, string> = {
  raw: "bg-slate-300 text-slate-500 dark:bg-white/20 dark:text-white/60",
  graded: "bg-gradient-to-b from-sky-400 to-blue-500 text-white",
};

const pad = (n: number) => String(n).padStart(2, "0");
const formatTc = (s: number) => {
  const whole = Math.floor(s);
  const frames = Math.floor((s - whole) * 24);
  return `00:${pad(Math.floor(whole / 60))}:${pad(whole % 60)}:${pad(frames)}`;
};

/* raw layer + (progress porjonto) graded layer, ek-i wipe e */
function Layers({
  wipe,
  render,
}: {
  wipe: MotionValue<string>;
  render: (tone: Tone) => React.ReactNode;
}) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0">{render("raw")}</div>
      <motion.div className="absolute inset-0" style={{ clipPath: wipe }}>
        {render("graded")}
      </motion.div>
    </div>
  );
}

function TrackRow({
  label,
  heightClass,
  cycle,
  delay,
  children,
}: {
  label: string;
  heightClass: string;
  cycle: number;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative ${heightClass}`}>
      <span className="absolute -left-9 top-1/2 w-7 -translate-y-1/2 text-center text-[9px] font-bold tracking-wider text-slate-400 dark:text-slate-500">
        {label}
      </span>
      <motion.div
        key={cycle}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
    </div>
  );
}

function CutMark({ at, progress }: { at: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, (v) => Math.max(0, 1 - Math.abs(v - at) / 0.03));
  const scale = useTransform(opacity, (v) => 0.6 + v * 0.6);

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute top-[16px] z-10 -translate-x-1/2"
      style={{ left: `${at * 100}%` }}
    >
      <motion.span
        style={{ opacity, scale }}
        className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md dark:bg-slate-900"
      >
        <Scissors className="h-2.5 w-2.5 text-sky-500" />
      </motion.span>
    </span>
  );
}

function EditorStage() {
  const reduce = !!useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const monitorRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const seen = useInView(rootRef, { margin: "-10% 0px" });

  const [tabVisible, setTabVisible] = useState(true);
  const [phase, setPhase] = useState<Phase>("import");
  const [cycle, setCycle] = useState(0);
  const [scrubbing, setScrubbing] = useState(false);
  const [stage, setStage] = useState(0);

  const progress = useMotionValue(0);

  const wipeClip = useTransform(progress, (v) => `inset(0 ${((1 - v) * 100).toFixed(2)}% 0 0)`);
  const wipeLeft = useTransform(progress, (v) => `${(v * 100).toFixed(2)}%`);
  const timecode = useTransform(progress, (v) => formatTc(v * CLIP_SECONDS));

  /* reduced motion: final frame static */
  useEffect(() => {
    if (reduce) {
      setPhase("done");
      progress.set(1);
    }
  }, [reduce, progress]);

  /* tab hidden hole pause */
  useEffect(() => {
    const onVis = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  /* chip stage (state shudhu stage bodlale update hoy) */
  useMotionValueEvent(progress, "change", (v) => {
    setStage(CHIP_AT.filter((t) => v >= t).length);
  });

  /* loop: import -> edit -> export -> done -> repeat */
  const active = seen && tabVisible && !scrubbing && !reduce;

  useEffect(() => {
    if (!active) return;

    let controls: ReturnType<typeof animate> | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (phase === "import") {
      progress.set(0);
      timer = setTimeout(() => setPhase("edit"), 1500);
    } else if (phase === "edit") {
      const remaining = (1 - progress.get()) * EDIT_SECONDS;
      controls = animate(progress, 1, {
        duration: Math.max(remaining, 0.01),
        ease: "linear",
        onComplete: () => setPhase("export"),
      });
    } else if (phase === "export") {
      timer = setTimeout(() => setPhase("done"), 2200);
    } else {
      timer = setTimeout(() => {
        setCycle((c) => c + 1);
        setPhase("import");
      }, 2400);
    }

    return () => {
      controls?.stop();
      if (timer) clearTimeout(timer);
    };
  }, [active, phase, cycle, progress]);

  /* mouse diye scrub: monitor ba timeline er upor */
  const scrubFrom = (el: HTMLElement | null, e: React.PointerEvent) => {
    if (e.pointerType === "touch" || phase === "import" || !el) return;
    const r = el.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    setScrubbing(true);
    setPhase("edit");
    progress.set(p);
  };
  const stopScrub = () => setScrubbing(false);

  const playLeft = wipeLeft;

  return (
    <div ref={rootRef} className="relative">
      <div
        role="img"
        aria-label="Animation of a video editor: raw clips snap onto a timeline, the footage is cut, color graded and captioned, then exported as a final video."
        className="relative rounded-[28px] border border-slate-200 bg-white/80 p-3 shadow-[0_28px_70px_rgba(59,130,246,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:p-4"
      >
        {/* ───── preview monitor ───── */}
        <div
          ref={monitorRef}
          onPointerMove={(e) => scrubFrom(monitorRef.current, e)}
          onPointerLeave={stopScrub}
          className="relative aspect-video cursor-ew-resize overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900"
        >
          {/* raw (dull, grey) */}
          <div className="absolute inset-0" style={{ filter: RAW_FILTER }}>
            <Image
              src={MONITOR_IMAGE}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 980px"
              className="object-cover"
            />
          </div>
          <span className="absolute right-4 top-4 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-bold tracking-widest text-white backdrop-blur">
            RAW
          </span>

          {/* graded (wipe e reveal hoy) */}
          <motion.div className="absolute inset-0" style={{ clipPath: wipeClip }}>
            <div className="absolute inset-0" style={{ filter: GRADE_FILTER }}>
              <Image
                src={MONITOR_IMAGE}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 980px"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/15 via-transparent to-blue-500/15" />
            <span
              className="absolute left-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-widest"
              style={{ background: BLUE_GRADIENT_H, color: "#ffffff" }}
            >
              FINAL CUT
            </span>
            <div className="absolute inset-x-0 bottom-[8%] flex justify-center px-4">
              <span className="rounded-lg bg-black/55 px-3 py-1.5 text-xs font-extrabold text-white backdrop-blur-sm sm:text-lg">
                Every second{" "}
                <span
                  className="rounded-md px-1.5"
                  style={{ background: BLUE_GRADIENT_H, color: "#ffffff" }}
                >
                  counts
                </span>
              </span>
            </div>
          </motion.div>

          {/* corner brackets */}
          {[
            "left-2 top-2 border-l-2 border-t-2",
            "right-2 top-2 border-r-2 border-t-2",
            "bottom-2 left-2 border-b-2 border-l-2",
            "bottom-2 right-2 border-b-2 border-r-2",
          ].map((c) => (
            <span
              key={c}
              aria-hidden="true"
              className={`pointer-events-none absolute z-10 h-3 w-3 border-white/70 ${c}`}
            />
          ))}

          {/* wipe line */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 z-10 w-0"
            style={{ left: wipeLeft }}
          >
            <span className="absolute inset-y-0 left-0 w-[2px] -translate-x-1/2 bg-white shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
            <span className="absolute left-0 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
              <ChevronsLeftRight className="h-4 w-4 text-sky-600" />
            </span>
          </motion.div>
        </div>

        {/* ───── timeline ───── */}
        <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-white/10 dark:bg-[#0a1424] sm:p-4">
          {/* header */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{ background: BLUE_GRADIENT }}
              >
                <Scissors className="h-3.5 w-3.5" color="#ffffff" />
              </span>
              <motion.span className="font-mono text-sm font-semibold tabular-nums text-slate-900 dark:text-white">
                {timecode}
              </motion.span>
            </div>

            <div className="flex min-h-[24px] items-center text-xs font-semibold text-slate-600 dark:text-slate-300">
              <AnimatePresence mode="wait" initial={false}>
                {phase === "export" ? (
                  <motion.div
                    key="export"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-2"
                  >
                    Exporting
                    <span className="block h-1.5 w-20 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10 sm:w-28">
                      <motion.span
                        className="block h-full rounded-full"
                        style={{ background: BLUE_GRADIENT_H }}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                    </span>
                  </motion.div>
                ) : phase === "done" ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Export complete
                  </motion.div>
                ) : (
                  <motion.div
                    key="work"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
                    </span>
                    {phase === "import" ? "Importing footage" : "Editing"}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* tracks */}
          <div className="relative mt-4 pl-9">
            <div className="space-y-1.5">
              {/* V2 captions */}
              <TrackRow label="V2" heightClass="h-5" cycle={cycle} delay={0.7}>
                <Layers
                  wipe={wipeClip}
                  render={(tone) =>
                    CAPTIONS.map((c) => (
                      <span
                        key={c.from}
                        className={`absolute bottom-0 top-0 flex items-center gap-1 rounded-md px-2 text-[9px] font-semibold ${
                          tone === "raw"
                            ? "border border-dashed border-slate-300 text-slate-400 dark:border-white/20 dark:text-white/40"
                            : "border border-sky-300 bg-sky-100 text-sky-700 dark:border-sky-400/40 dark:bg-sky-400/20 dark:text-sky-200"
                        }`}
                        style={{ left: `${c.from}%`, width: `${c.to - c.from}%` }}
                      >
                        <Subtitles className="h-2.5 w-2.5" />
                        Captions
                      </span>
                    ))
                  }
                />
              </TrackRow>

              {/* V1 clips (fly in) */}
              <div className="relative h-10">
                <span className="absolute -left-9 top-1/2 w-7 -translate-y-1/2 text-center text-[9px] font-bold tracking-wider text-slate-400 dark:text-slate-500">
                  V1
                </span>
                <Layers
                  wipe={wipeClip}
                  render={(tone) =>
                    CLIPS.map((c, i) => (
                      <motion.div
                        key={`${cycle}-${c.name}-${tone}`}
                        initial={{
                          opacity: 0,
                          x: FLY[i].x,
                          y: FLY[i].y,
                          rotate: FLY[i].r,
                          scale: 0.7,
                        }}
                        animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 170,
                          damping: 19,
                          delay: 0.15 + i * 0.1,
                        }}
                        className={`absolute bottom-0 top-0 overflow-hidden rounded-md ${CLIP_TONE[tone]}`}
                        style={{ left: `${c.from}%`, width: `${c.to - c.from}%` }}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 opacity-60"
                          style={{ backgroundImage: FRAME_STRIP }}
                        />
                        <span className="relative z-10 flex h-full items-center px-2 text-[10px] font-semibold">
                          {c.name}
                        </span>
                      </motion.div>
                    ))
                  }
                />
              </div>

              {/* A1 audio */}
              <TrackRow label="A1" heightClass="h-9" cycle={cycle} delay={0.55}>
                <Layers
                  wipe={wipeClip}
                  render={(tone) => (
                    <div className="flex h-full items-center justify-between gap-[2px]">
                      {BARS.map((h, i) => (
                        <span
                          key={i}
                          className={`w-[2px] shrink-0 rounded-full ${
                            tone === "raw"
                              ? "bg-slate-300 dark:bg-white/20"
                              : "bg-gradient-to-b from-sky-400 to-blue-500"
                          }`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  )}
                />
              </TrackRow>
            </div>

            {/* scrub area + playhead + cut marks */}
            <div
              ref={areaRef}
              onPointerMove={(e) => scrubFrom(areaRef.current, e)}
              onPointerLeave={stopScrub}
              className="absolute -top-2 bottom-0 left-9 right-0 cursor-ew-resize"
            >
              <div className="absolute inset-x-0 bottom-0 top-2">
                {CUTS.map((c) => (
                  <CutMark key={c} at={c} progress={progress} />
                ))}
              </div>

              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -top-0 bottom-0 z-20 w-0"
                style={{ left: playLeft }}
              >
                <span className="absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2 border-x-[6px] border-t-[8px] border-x-transparent border-t-sky-500" />
                <span
                  className="absolute bottom-0 left-0 top-2 w-[2px] -translate-x-1/2 rounded-full"
                  style={{
                    background: BLUE_GRADIENT,
                    boxShadow: "0 0 12px rgba(56,189,248,0.7)",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-3 hidden items-center justify-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 md:flex"
        >
          <ChevronsLeftRight className="h-3.5 w-3.5" />
          Move your mouse over the preview or timeline to scrub through the edit
        </p>
      </div>

      {/* chips (timeline er sathe ekta ekta kore ashe) */}
      {CHIPS.map(({ Icon, text, pos }, i) => (
        <AnimatePresence key={text}>
          {stage > i && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`absolute z-30 hidden md:block ${pos}`}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5 + i, ease: "easeInOut" }}
                className="flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/90 px-4 py-2.5 shadow-[0_14px_36px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/15 dark:bg-[#0b1626]/90"
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full"
                  style={{ background: BLUE_GRADIENT }}
                >
                  <Icon className="h-3.5 w-3.5" color="#ffffff" />
                </span>
                <span className="text-xs font-semibold text-slate-800 dark:text-white">{text}</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
}

const H1_LINE = "Professional video editing that turns raw footage into".split(" ");

function Hero() {
  return (
    <section
      aria-labelledby="ve-hero-title"
      className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[1100px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
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
            Video editing services in Bangladesh
          </motion.span>

          {/* word-by-word mask reveal (text real, SEO safe) */}
          <h1
            id="ve-hero-title"
            className="mt-6 text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-slate-900 dark:text-white sm:text-5xl lg:text-[56px]"
          >
            <span className="block">
              {H1_LINE.map((w, i) => (
                <span key={i}>
                  <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
                    <motion.span
                      className="inline-block"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.06 }}
                    >
                      {w}
                    </motion.span>
                  </span>{" "}
                </span>
              ))}
            </span>
            <span className="block">
              <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.1 + H1_LINE.length * 0.06 }}
                >
                  <GradientText>videos people remember</GradientText>
                </motion.span>
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-[17px] sm:leading-8"
          >
            Cuts, color grading, captions and motion graphics for Reels, YouTube
            videos, promos and corporate content. You share the footage, we
            deliver a video that is clear, engaging and ready to publish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.68 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              style={primaryBtn}
            >
              Start a project
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                color="#ffffff"
              />
            </Link>
            <Link
              href="/packages"
              className={`inline-flex items-center rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 ${ghostBtn}`}
            >
              View plans
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.8 }}
          className="mx-auto mt-14 max-w-[980px] px-0 md:px-6"
        >
          <EditorStage />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Featured work (click-to-play, YouTube)
───────────────────────────────────────────── */
function WorkCard({ w }: { w: WorkItem }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]">
      <div className="relative aspect-video bg-slate-200 dark:bg-slate-800">
        {play ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${w.youtubeId}?autoplay=1&rel=0`}
            title={w.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlay(true)}
            aria-label={`Play ${w.title}`}
            className="group absolute inset-0 outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${w.youtubeId}/hqdefault.jpg`}
              alt={w.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-slate-900/20">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
                style={{ background: BLUE_GRADIENT_H }}
              >
                <Play className="h-6 w-6" color="#ffffff" fill="#ffffff" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-4">
        <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
          {w.category}
        </span>
        <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{w.title}</h3>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════
   Main
═════════════════════════════════════════════ */
export function VideoEditingContent() {
  const plans = packageData.video.monthly;

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-full bg-white dark:bg-[#050b16]">
        <Hero />

        {/* ═════════ WHAT WE EDIT ═════════ */}
        <section aria-labelledby="ve-services-title" className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <SectionHead
              id="ve-services-title"
              eyebrow="What we edit"
              title={
                <>
                  Every kind of <GradientText>video</GradientText>
                </>
              }
              text="Whatever you shoot, we turn it into a polished video that fits your platform and your brand."
            />

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {VIDEO_SERVICES.map((s) => {
                const Icon = SERVICE_ICON[s.key] ?? Sparkles;
                return (
                  <motion.li
                    key={s.key}
                    variants={fade}
                    className="group flex flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_44px_rgba(59,130,246,0.14)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/50"
                  >
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ background: BLUE_GRADIENT }}
                    >
                      <Icon className="h-6 w-6" color="#ffffff" />
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
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </section>

        {/* ═════════ FEATURED WORK (WORKS e data thakle) ═════════ */}
        {WORKS.length > 0 && (
          <section
            aria-labelledby="ve-work-title"
            className="bg-slate-50/70 py-16 dark:bg-white/[0.02] md:py-24"
          >
            <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
              <SectionHead
                id="ve-work-title"
                eyebrow="Our work"
                title={
                  <>
                    Featured <GradientText>projects</GradientText>
                  </>
                }
                text="A few videos we have edited. Tap any video to play it."
              />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {WORKS.map((w) => (
                  <WorkCard key={w.id} w={w} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═════════ PROCESS ═════════ */}
        <section aria-labelledby="ve-process-title" className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <SectionHead
              id="ve-process-title"
              eyebrow="How it works"
              title={
                <>
                  From raw footage to <GradientText>final cut</GradientText>
                </>
              }
              text="A simple four-step process, so you always know where your video stands."
            />

            <motion.ol
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            >
              {PROCESS_STEPS.map((s, i) => {
                const Icon = PROCESS_ICON[i] ?? Rocket;
                return (
                  <motion.li
                    key={s.title}
                    variants={fade}
                    className="rounded-3xl border border-slate-200 bg-white/80 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{ background: BLUE_GRADIENT }}
                      >
                        <Icon className="h-6 w-6" color="#ffffff" />
                      </span>
                      <span className="text-4xl font-semibold tracking-tight text-slate-200 dark:text-white/10">
                        {pad(i + 1)}
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

        {/* ═════════ FORMATS ═════════ */}
        <section
          aria-labelledby="ve-formats-title"
          className="bg-slate-50/70 py-16 dark:bg-white/[0.02] md:py-24"
        >
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <SectionHead
              id="ve-formats-title"
              eyebrow="Formats"
              title={
                <>
                  Delivered for <GradientText>every screen</GradientText>
                </>
              }
              text="We export your video in the right shape for each platform, so it looks great wherever it is watched."
            />

            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="grid gap-5 sm:grid-cols-3"
            >
              {FORMATS.map((f) => (
                <motion.li
                  key={f.ratio}
                  variants={fade}
                  className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 text-center dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="flex h-28 items-center justify-center">
                    <span
                      className="flex h-24 items-center justify-center rounded-xl border-2 border-sky-400 bg-sky-50 text-xs font-bold text-sky-700 dark:bg-sky-400/10 dark:text-sky-300"
                      style={{ aspectRatio: `${f.w} / ${f.h}`, maxWidth: 160 }}
                    >
                      {f.ratio}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{f.note}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* ═════════ PLANS TEASER (packagesData theke) ═════════ */}
        <section aria-labelledby="ve-plans-title" className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <SectionHead
              id="ve-plans-title"
              eyebrow="Pricing"
              title={
                <>
                  Simple <GradientText>monthly plans</GradientText>
                </>
              }
              text="Pick a plan that fits how much video you need. Compare everything on the packages page."
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

            <div className="mt-8 text-center">
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
            </div>
          </div>
        </section>

        {/* ═════════ RELATED ═════════ */}
        <section
          aria-labelledby="ve-related-title"
          className="bg-slate-50/70 py-16 dark:bg-white/[0.02] md:py-20"
        >
          <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <h2
              id="ve-related-title"
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
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═════════ FAQ (native details, crawlable) ═════════ */}
        <section aria-labelledby="ve-faq-title" className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
            <SectionHead
              id="ve-faq-title"
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
          aria-labelledby="ve-cta-title"
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
                id="ve-cta-title"
                className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
                style={{ color: "#ffffff", textWrap: "balance" }}
              >
                Ready to turn your footage into something people remember?
              </h2>
              <p
                className="mx-auto mt-3 max-w-xl text-[15px] leading-7"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                Send us your footage and a short brief. We will get back with a
                clear plan and a quote.
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
                  Get a free quote
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

export default VideoEditingContent;