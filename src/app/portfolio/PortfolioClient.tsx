"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import { ArrowUpRight, Maximize2, X } from "lucide-react";

/* ─────────────────────────────────────────────
   Brand blue (light blue gradient — no dark blue)
───────────────────────────────────────────── */
const BLUE_GRADIENT = "linear-gradient(180deg, #38bdf8 0%, #3b82f6 100%)";
const BLUE_GRADIENT_H = "linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%)";

/* Image height/width er ei ratio er beshi lomba hole card oi height e thame
   (puro image ekdom kata chhara majhkhane dekhay). Beshi korle card aro lomba hobe. */
const MAX_RATIO = 1.8;

/* ─────────────────────────────────────────────
   Projects
   - image: public folder (/file.jpg) ba URL
   - link na dile "Visit site" button ashbe na
   - TODO likha gulo ekbar check kore nien
───────────────────────────────────────────── */
const CATEGORIES = ["Web Design", "Graphics", "Marketing"] as const;
type Category = (typeof CATEGORIES)[number];

type Project = {
  id: number;
  category: Category;
  title: string;
  description: string;
  image: string;
  link?: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    category: "Web Design",
    title: "ParcelGo - Logistics System",
    description: "Modern delivery management solution with real-time tracking.",
    image: "https://i.ibb.co.com/QvrNtWZp/parcel-go-vercel-app-1.png",
    link: "https://parcel-go.vercel.app/",
  },
  {
    id: 2,
    category: "Web Design",
    title: "Guptodhan Marketplace",
    description: "Large scale multi-vendor e-commerce platform.",
    image: "https://i.ibb.co.com/PG8vqsBb/www-guptodhandigital-com-3.png",
    link: "https://guptodhan.com",
  },
  {
    id: 3,
    category: "Web Design",
    title: "PorerbazarBD Organic",
    description: "Premium organic food and grocery shop.",
    image: "https://i.ibb.co.com/ycy6z49g/porerbarazbd-vercel-app.jpg",
    link: "https://porerbarazbd.vercel.app/",
  },
  // TODO: eta tomar nijer kaj kina check koro, na hole nijer design boshao
  {
    id: 4,
    category: "Graphics",
    title: "Social Media Branding",
    description: "Creative social media design set.",
    image: "/social%20design%2001.jpeg",
  },
  // TODO: eta stock photo (Unsplash). Tomar nijer grocery site er screenshot diye replace koro
  {
    id: 5,
    category: "Web Design",
    title: "Fresh Grocery Store",
    description: "Fresh food store with modern UI.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
    link: "https://pro-ecommerce-iota.vercel.app/",
  },
  // TODO: eta tomar nijer campaign kina check koro
  {
    id: 6,
    category: "Marketing",
    title: "Digital Ad Campaign",
    description: "Targeted sales generating campaign.",
    image: "/facebookadscampaign.jpeg",
  },
];

/* Frame er kon: prottek card e ekta kon boro, ghure ghure */
const RADII = [
  "44px 14px 14px 14px",
  "14px 44px 14px 14px",
  "14px 14px 44px 14px",
  "14px 14px 14px 44px",
];

/* ─────────────────────────────────────────────
   Pixel corner (header er dan-upor)
───────────────────────────────────────────── */
const PX_COLS = 16;
const PX_ROWS = 8;

const PIXELS = Array.from({ length: PX_COLS * PX_ROWS }, (_, i) => {
  const r = ((i * 9301 + 49297) % 233280) / 233280; // stable pseudo-random
  const col = i % PX_COLS;
  const row = Math.floor(i / PX_COLS);
  const fade = (col / PX_COLS) * (1 - row / PX_ROWS);
  const alpha = r > 0.42 ? Math.min(0.55, r * fade * 1.1) : 0;
  return {
    alpha: alpha < 0.05 ? 0 : alpha,
    delay: ((i * 7) % 29) / 3,
    dur: 4 + ((i * 11) % 9) / 2,
  };
});

/* ─────────────────────────────────────────────
   Styles (Tailwind er upor depend kore na)
───────────────────────────────────────────── */
const CSS = `
  @keyframes pfTwinkle {
    0%, 100% { opacity: var(--a); }
    50%      { opacity: calc(var(--a) * 0.2); }
  }
  @keyframes pfShimmer {
    from { background-position: -200% 0; }
    to   { background-position: 200% 0; }
  }

  .pf-pixels {
    position: absolute;
    top: 0;
    right: 0;
    width: min(540px, 46vw);
    display: grid;
    grid-template-columns: repeat(${PX_COLS}, 1fr);
    gap: 6px;
    pointer-events: none;
  }
  .pf-px {
    aspect-ratio: 1 / 1;
    border-radius: 2px;
    background: #0ea5e9;
    opacity: 0;
    animation: pfTwinkle var(--d) ease-in-out var(--dl) infinite;
  }
  .dark .pf-px { background: #38bdf8; }
  @media (max-width: 767px) { .pf-pixels { display: none; } }

  .pf-skeleton {
    background: linear-gradient(90deg, rgba(148,163,184,0.12), rgba(148,163,184,0.28), rgba(148,163,184,0.12));
    background-size: 200% 100%;
    animation: pfShimmer 1.6s linear infinite;
  }

  /* ---------- Lightbox ---------- */
  .pf-lb {
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    box-sizing: border-box;
    background: rgba(15, 23, 42, 0.62);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
  }
  .pf-lb-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    max-height: 92vh;
    overflow: hidden;
    border-radius: 24px;
    background: #ffffff;
    border: 1px solid rgba(148, 163, 184, 0.35);
    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.4);
  }
  .dark .pf-lb-card {
    background: #0a1220;
    border-color: rgba(255, 255, 255, 0.12);
  }
  .pf-lb-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(148, 163, 184, 0.3);
  }
  .dark .pf-lb-head { border-color: rgba(255, 255, 255, 0.1); }
  .pf-lb-title { margin: 0; font-size: 17px; font-weight: 600; color: #0f172a; }
  .dark .pf-lb-title { color: #ffffff; }
  .pf-lb-sub { margin: 2px 0 0; font-size: 13px; color: #64748b; }
  .dark .pf-lb-sub { color: #94a3b8; }
  .pf-lb-body {
    overflow-y: auto;
    padding: 16px;
    background: #f1f5f9;
  }
  .dark .pf-lb-body { background: #07101e; }
  .pf-lb-body img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
  .pf-lb-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 9999px;
    cursor: pointer;
    color: #64748b;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease;
  }
  .pf-lb-close:hover { color: #0284c7; border-color: #38bdf8; }
  .dark .pf-lb-close {
    color: #cbd5e1;
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.14);
  }

  @media (prefers-reduced-motion: reduce) {
    .pf-px, .pf-skeleton { animation: none; }
    .pf-px { opacity: var(--a); }
  }
`;

/* ─────────────────────────────────────────────
   Animation
───────────────────────────────────────────── */
const headV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemV: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const gridV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/* ─────────────────────────────────────────────
   Project image: kokhono kate na
───────────────────────────────────────────── */
function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [ratio, setRatio] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    const img = new window.Image();

    img.onload = () => {
      if (alive && img.naturalWidth) {
        setRatio(img.naturalHeight / img.naturalWidth);
      }
    };
    img.onerror = () => {
      if (alive) setFailed(true);
    };
    img.src = src;

    return () => {
      alive = false;
    };
  }, [src]);

  if (failed) {
    return (
      <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-dashed border-slate-300 px-4 text-center text-sm text-slate-500 dark:border-white/20 dark:text-slate-400">
        Preview not available
      </div>
    );
  }

  if (ratio === null) {
    return <div className="pf-skeleton min-h-[220px] rounded-xl" />;
  }

  // khub lomba hole: frame e contain + pichone blur
  if (ratio > MAX_RATIO) {
    return (
      <div
        className="relative w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-white/5"
        style={{ aspectRatio: `1 / ${MAX_RATIO}` }}
      >
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl"
        />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="relative h-full w-full object-contain"
        />
      </div>
    );
  }

  // normal: nijer ratio te, puro dekhay
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="block h-auto w-full rounded-xl"
    />
  );
}

/* ─────────────────────────────────────────────
   Lightbox (full view)
───────────────────────────────────────────── */
function Lightbox({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!project) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key="pf-lightbox"
          className="pf-lb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="pf-lb-card"
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="pf-lb-head">
              <div style={{ minWidth: 0 }}>
                <h3 className="pf-lb-title">{project.title}</h3>
                <p className="pf-lb-sub">{project.description}</p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "9px 16px",
                      borderRadius: 9999,
                      fontSize: 13,
                      fontWeight: 700,
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      background: BLUE_GRADIENT_H,
                      color: "#ffffff",
                      border: "1px solid rgba(255,255,255,0.55)",
                      boxShadow: "0 8px 22px rgba(59,130,246,0.32)",
                    }}
                  >
                    Visit live site
                    <ArrowUpRight size={15} color="#ffffff" />
                  </a>
                )}

                <button
                  type="button"
                  className="pf-lb-close"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            <div className="pf-lb-body">
              <img src={project.image} alt={project.title} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function PortfolioClient() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const visible =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const countOf = (c: "All" | Category) =>
    c === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length;

  return (
    <MotionConfig reducedMotion="user">
      <style>{CSS}</style>

      <main className="relative w-full overflow-hidden bg-white pb-24 dark:bg-[#050b16]">
        {/* one soft glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(56,189,248,0.16) 0%, rgba(56,189,248,0) 70%)",
          }}
        />

        {/* Container — navbar / hero er sathe same width & padding */}
        <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          {/* pixel corner */}
          <div className="pf-pixels" style={{ top: 96 }} aria-hidden="true">
            {PIXELS.map((p, i) => (
              <span
                key={i}
                className="pf-px"
                style={
                  {
                    "--a": p.alpha,
                    "--d": `${p.dur}s`,
                    "--dl": `${p.delay}s`,
                    visibility: p.alpha === 0 ? "hidden" : "visible",
                  } as React.CSSProperties
                }
              />
            ))}
          </div>

          {/* ═════════ HEADER ═════════ */}
          <motion.section
            variants={headV}
            initial="hidden"
            animate="show"
            className="relative mx-auto max-w-3xl pt-32 text-center sm:pt-36"
          >
            <motion.span
              variants={itemV}
              className="inline-flex items-center rounded-full border border-[rgba(56,189,248,0.45)] bg-[rgba(255,255,255,0.75)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-sky-700 backdrop-blur-md dark:border-[rgba(56,189,248,0.35)] dark:bg-[rgba(56,189,248,0.12)] dark:text-sky-200"
            >
              Portfolio
            </motion.span>

            <motion.h1
              variants={itemV}
              className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[46px]"
              style={{ textWrap: "balance" }}
            >
              Our work,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: BLUE_GRADIENT_H }}
              >
                shown in full
              </span>
            </motion.h1>

            <motion.p
              variants={itemV}
              className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-slate-600 dark:text-slate-400 sm:text-base"
            >
              Websites, e-commerce platforms, designs and campaigns we have
              built. Tap any project to see it in full.
            </motion.p>

            {/* filter */}
            <motion.div variants={itemV} className="mt-9 flex justify-center">
              <div
                role="tablist"
                aria-label="Filter projects"
                className="flex flex-wrap justify-center gap-1.5 rounded-3xl border border-slate-200 bg-white/70 p-1.5 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] sm:rounded-full"
              >
                {(["All", ...CATEGORIES] as const).map((c) => {
                  const active = filter === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setFilter(c)}
                      className="relative rounded-full px-5 py-2.5 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      {active && (
                        <motion.span
                          layoutId="pf-pill"
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: BLUE_GRADIENT_H,
                            boxShadow: "0 8px 22px rgba(59,130,246,0.32)",
                          }}
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span
                        className={`relative z-10 flex items-center gap-2 ${
                          active ? "" : "text-slate-600 dark:text-slate-300"
                        }`}
                        style={active ? { color: "#ffffff" } : undefined}
                      >
                        {c === "All" ? "All Projects" : c}
                        <span
                          className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                            active
                              ? ""
                              : "bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400"
                          }`}
                          style={
                            active
                              ? {
                                  background: "rgba(255,255,255,0.25)",
                                  color: "#ffffff",
                                }
                              : undefined
                          }
                        >
                          {countOf(c)}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.section>

          {/* ═════════ GALLERY (masonry, image nijer ratio te) ═════════ */}
          <div className="mt-14">
            <AnimatePresence mode="wait">
              <motion.ul
                key={filter}
                variants={gridV}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="columns-1 gap-6 sm:columns-2 lg:columns-3"
              >
                {visible.map((p, i) => (
                  <motion.li
                    key={p.id}
                    variants={itemV}
                    className="mb-6 break-inside-avoid"
                  >
                    {/* gallery frame: boro kon + margin, tai image kate na */}
                    <article
                      className="group relative border border-slate-200 bg-white/80 p-3.5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_22px_56px_rgba(59,130,246,0.18)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none dark:hover:border-sky-400/50"
                      style={{ borderRadius: RADII[i % RADII.length] }}
                    >
                      {/* image (click = full view) */}
                      <button
                        type="button"
                        onClick={() => setOpen(p)}
                        aria-label={`View ${p.title} in full`}
                        className="relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 text-left outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-white/10"
                      >
                        <ProjectImage src={p.image} alt={p.title} />

                        <span
                          className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 [@media(hover:none)]:opacity-100"
                          style={{
                            background: "rgba(255,255,255,0.85)",
                            border: "1px solid rgba(255,255,255,0.9)",
                            color: "#0369a1",
                          }}
                          aria-hidden="true"
                        >
                          <Maximize2 size={14} />
                        </span>
                      </button>

                      {/* info */}
                      <div className="flex items-start justify-between gap-3 px-1 pb-1 pt-4">
                        <div className="min-w-0">
                          <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-300">
                            {p.category}
                          </span>
                          <h3 className="mt-2.5 text-lg font-semibold leading-snug text-slate-900 dark:text-white">
                            {p.title}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {p.description}
                          </p>
                        </div>

                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${p.title}`}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:rotate-45"
                            style={{
                              background: BLUE_GRADIENT,
                              border: "1px solid rgba(255,255,255,0.55)",
                              boxShadow: "0 8px 20px rgba(59,130,246,0.32)",
                            }}
                          >
                            <ArrowUpRight className="h-5 w-5" color="#ffffff" />
                          </a>
                        )}
                      </div>
                    </article>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Lightbox project={open} onClose={() => setOpen(null)} />
    </MotionConfig>
  );
}