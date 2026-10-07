'use client';

import Image from 'next/image';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

const IMAGE = '/hero/Mockup_Workspace.png';
const GRAD = 'linear-gradient(160deg, #7dd3fc 0%, #38bdf8 35%, #3b82f6 100%)';
const GRAD_H = 'linear-gradient(90deg, #0ea5e9 0%, #38bdf8 45%, #3b82f6 100%)';

const steps = [
  ['Requirement Analysis', 'We learn your goals, users and challenges to define exactly what needs to be built.'],
  ['Planning & UI/UX Design', 'We map out the features and design clean, user-focused interfaces before any code is written.'],
  ['Agile Development', 'We build in short cycles with regular updates, so every module matches the design.'],
  ['QA Testing & Bug Fixing', 'We test for bugs, speed and reliability so the product is solid before launch.'],
  ['Deployment & Go-Live', 'We launch on a live environment and make sure everything runs smoothly for your users.'],
  ['Maintenance & Support', 'We keep your product updated and improving with ongoing support after launch.'],
];

/* ── Timing (ms) — ei gulo change korlei speed adjust hobe ── */
const FIRST_DWELL = 900; // shuru te prothom step e thakbe
const TRAVEL = 1100; // ek step theke next e jete
const DWELL = 1900; // ek step e thamte
const FADE_OUT = 700;
const GAP = 300;
const R = 12; // path curve radius

// tail head er pichone time-lag e thake
const COMET = [
  { lag: 520, w: 10, o: 0.1 },
  { lag: 380, w: 2.4, o: 0.35 },
  { lag: 230, w: 3.2, o: 0.6 },
  { lag: 100, w: 3.6, o: 0.92 },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fade: Variants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.6, ease: EASE } } };
const slide: Variants = { hidden: { opacity: 0, x: 16 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } } };

const smoother = (x: number) => {
  const c = Math.min(Math.max(x, 0), 1);
  return c * c * c * (c * (c * 6 - 15) + 10);
};

type Geo = { d: string; w: number; h: number; ys: number[] };

/* tile gulor position theke curved path banay */
function buildPath(tiles: { left: number; top: number; bottom: number }[]) {
  const xv = tiles[0].left;
  const xa = xv + 38;
  let d = `M ${xa} ${tiles[0].top + 32} L ${xa} ${tiles[0].bottom}`;
  for (let i = 0; i < tiles.length - 1; i++) {
    const yb = tiles[i].bottom;
    const yt = tiles[i + 1].top;
    d += ` L ${xv + R} ${yb} Q ${xv} ${yb} ${xv} ${yb + R} L ${xv} ${yt - R} Q ${xv} ${yt} ${xv + R} ${yt} L ${xa} ${yt} L ${xa} ${tiles[i + 1].bottom}`;
  }
  return d + ` L ${xa} ${tiles[tiles.length - 1].top + 32}`;
}

export function ProcessSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [geo, setGeo] = useState<Geo | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const olRef = useRef<HTMLOListElement>(null);
  const tileRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const trackRef = useRef<SVGPathElement>(null);
  const progRef = useRef<SVGPathElement>(null);
  const cometRefs = useRef<(SVGPathElement | null)[]>([]);
  const headRef = useRef<SVGGElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const pausedRef = useRef(false);
  const visibleRef = useRef(true);

  const shown = hovered ?? active;
  pausedRef.current = hovered !== null;

  /* section screen e achhe kina */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => (visibleRef.current = e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* path measure */
  useLayoutEffect(() => {
    const measure = () => {
      const ol = olRef.current;
      if (!ol) return;
      const o = ol.getBoundingClientRect();
      const tiles = tileRefs.current.flatMap((el) => {
        if (!el) return [];
        const r = el.getBoundingClientRect();
        return [{ left: r.left - o.left, top: r.top - o.top, bottom: r.bottom - o.top }];
      });
      if (tiles.length < 2) return;
      const d = buildPath(tiles);
      const ys = tiles.map((t) => t.top + 24);
      setGeo((p) => (p && p.d === d && p.w === o.width && p.h === o.height ? p : { d, w: o.width, h: o.height, ys }));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (olRef.current) ro.observe(olRef.current);
    return () => ro.disconnect();
  }, []);

  /* move → rest → move animation */
  useEffect(() => {
    const track = trackRef.current;
    const prog = progRef.current;
    const head = headRef.current;
    if (!geo || !track || !prog || !head) return;

    const comets = cometRefs.current;
    const total = track.getTotalLength();

    if (reduce) {
      head.style.opacity = '0';
      prog.style.strokeDasharray = `${total} 10`;
      prog.style.opacity = '0.45';
      return;
    }

    // path y sobshomoy barhe, tai binary search diye checkpoint
    const lengthAtY = (y: number) => {
      let lo = 0, hi = total;
      for (let i = 0; i < 20; i++) {
        const mid = (lo + hi) / 2;
        if (track.getPointAtLength(mid).y < y) lo = mid;
        else hi = mid;
      }
      return hi;
    };
    const cps = geo.ys.map((y, i) => (i === 0 ? 0 : lengthAtY(y)));
    const n = cps.length;
    const period = TRAVEL + DWELL;
    const endT = FIRST_DWELL + (n - 1) * period;
    const cycle = endT + FADE_OUT + GAP;

    // time → path length
    const pos = (t: number) => {
      const s = t - FIRST_DWELL;
      if (s < 0) return 0;
      const k = Math.floor(s / period);
      if (k >= n - 1) return cps[n - 1];
      const local = s - k * period;
      return local < TRAVEL
        ? cps[k] + (cps[k + 1] - cps[k]) * smoother(local / TRAVEL)
        : cps[k + 1];
    };

    // time → active step
    const stepAt = (t: number) => {
      const s = t - FIRST_DWELL;
      if (s < 0) return 0;
      const k = Math.floor(s / period);
      if (k >= n - 1) return n - 1;
      return k + (s - k * period >= TRAVEL * 0.6 ? 1 : 0);
    };

    let raf = 0, clock = 0, prev = performance.now(), lastStep = 0;

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(now - prev, 50);
      prev = now;
      if (pausedRef.current || !visibleRef.current) return;

      clock += dt;
      const t = clock % cycle;
      const m = Math.min(Math.min(t / 500, 1), t > endT ? Math.max(0, 1 - (t - endT) / FADE_OUT) : 1);
      const h = pos(t);

      COMET.forEach((c, i) => {
        const el = comets[i];
        if (!el) return;
        const a = pos(t - c.lag);
        const len = h - a;
        if (len > 0.6) {
          el.style.strokeDasharray = `${len} ${total + 40}`;
          el.style.strokeDashoffset = String(-a);
          el.style.opacity = String(c.o * m);
        } else el.style.opacity = '0';
      });

      prog.style.strokeDasharray = `${h} ${total + 40}`;
      prog.style.opacity = h > 0.5 ? String(0.5 * m) : '0';

      const pt = track.getPointAtLength(h);
      head.setAttribute('transform', `translate(${pt.x} ${pt.y})`);
      head.style.opacity = String(m);
      dotRef.current?.setAttribute('transform', `scale(${1 + 0.12 * Math.sin(now / 320)})`);

      const idx = stepAt(t);
      if (idx !== lastStep) {
        lastStep = idx;
        setActive(idx);
      }
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [geo, reduce]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white py-16 dark:bg-[#050b16] md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[760px] -translate-x-1/2"
        style={{ background: 'radial-gradient(closest-side, rgba(56,189,248,0.16), transparent)' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-sky-600 dark:border-white/10 dark:bg-white/5 dark:text-sky-300">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundImage: GRAD }} />
            How we work
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Custom{' '}
            <em className="bg-clip-text pr-1 font-medium italic text-transparent" style={{ backgroundImage: GRAD_H }}>
              Development
            </em>{' '}
            Process
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-slate-600 dark:text-slate-400">
            We follow a clear and transparent process so your software meets your expectations and business goals.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative mx-auto w-full max-w-[520px] lg:mx-0"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -left-10 z-0 hidden h-56 w-56 rounded-full sm:block"
              style={{
                background: 'linear-gradient(135deg, rgba(56,189,248,0.45), rgba(59,130,246,0.08))',
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 34px), #000 calc(100% - 33px))',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 34px), #000 calc(100% - 33px))',
              }}
            />
            <motion.div
              className="relative"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-sky-200 dark:border-white/15"
                style={{ background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(59,130,246,0.05))' }}
              />
              <div
                className="relative z-10 aspect-[4/4.5] w-full overflow-hidden rounded-3xl"
                style={{
                  border: '1px solid rgba(148,163,184,0.30)',
                  boxShadow: '0 30px 70px rgba(15,23,42,0.14)',
                }}
              >
                <Image
                  src={IMAGE}
                  alt="Our development process at Pixel & Code"
                  fill
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.16), transparent 50%), linear-gradient(0deg, rgba(56,189,248,0.1), transparent 40%)',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: steps */}
          <motion.ol
            ref={olRef}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="relative"
            onPointerLeave={() => setHovered(null)}
          >
            {geo && (
              <motion.svg
                variants={fade}
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 overflow-visible"
                width={geo.w}
                height={geo.h}
                viewBox={`0 0 ${geo.w} ${geo.h}`}
                fill="none"
              >
                <defs>
                  <linearGradient id="snakeGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={geo.h}>
                    <stop offset="0%" stopColor="#7dd3fc" />
                    <stop offset="55%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>

                <path
                  ref={trackRef}
                  d={geo.d}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sky-200 dark:text-white/15"
                />

                {[{ w: 2 }, ...COMET].map((c, i) => (
                  <path
                    key={i}
                    ref={(el) => {
                      if (i === 0) progRef.current = el;
                      else cometRefs.current[i - 1] = el;
                    }}
                    d={geo.d}
                    stroke="url(#snakeGrad)"
                    strokeWidth={c.w}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ opacity: 0, strokeDasharray: `0 ${geo.h * 10}` }}
                  />
                ))}

                <g ref={headRef} style={{ opacity: 0 }}>
                  <circle r="11" fill="#38bdf8" opacity="0.18" />
                  <circle ref={dotRef} r="4.5" fill="#3b82f6" stroke="#fff" strokeWidth="1.5" />
                </g>
              </motion.svg>
            )}

            {steps.map(([title, desc], i) => {
              const isActive = i === shown;
              const isDone = i < shown;
              const num = String(i + 1).padStart(2, '0');

              return (
                <motion.li key={title} variants={fade}>
                  <button
                    type="button"
                    onPointerEnter={(e) => e.pointerType === 'mouse' && setHovered(i)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    aria-current={isActive ? 'step' : undefined}
                    className={`relative flex w-full items-start gap-5 text-left focus:outline-none ${
                      i === steps.length - 1 ? '' : 'pb-8'
                    }`}
                  >
                    {/* number tile */}
                    <span
                      ref={(el) => {
                        tileRefs.current[i] = el;
                      }}
                      className="relative z-10 block h-16 w-16 shrink-0 rounded-2xl bg-white dark:bg-[#050b16]"
                    >
                      {isActive && (
                        <>
                          <motion.span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-2 -z-10 rounded-[24px] blur-xl"
                            style={{ background: GRAD }}
                            animate={{ opacity: reduce ? 0.2 : [0.16, 0.34, 0.16] }}
                            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                          />
                          <motion.span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-sky-400/70"
                            initial={{ scale: 1, opacity: reduce ? 0 : 0.7 }}
                            animate={{ scale: 1.5, opacity: 0 }}
                            transition={{ duration: 1.1, ease: 'easeOut' }}
                          />
                        </>
                      )}

                      <span
                        className={`absolute inset-0 flex items-center justify-center rounded-2xl border text-xl font-medium transition-all duration-700 ${
                          isDone
                            ? 'border-sky-200 bg-sky-100/70 text-sky-600 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-300'
                            : 'border-sky-100 bg-sky-50 text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-sky-300'
                        }`}
                      >
                        {num}
                      </span>

                      <span
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center rounded-2xl text-xl font-medium text-white"
                        style={{
                          background: GRAD,
                          border: '1px solid rgba(255,255,255,0.55)',
                          boxShadow: '0 14px 32px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.5)',
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'scale(1)' : 'scale(0.9)',
                          transition: 'opacity 600ms cubic-bezier(0.22,1,0.36,1), transform 600ms cubic-bezier(0.22,1,0.36,1)',
                        }}
                      >
                        {num}
                      </span>
                    </span>

                    {/* text */}
                    <motion.span variants={slide} className="block pt-1">
                      <span
                        className={`block text-lg font-medium leading-snug transition-all duration-700 ease-out ${
                          isActive
                            ? 'translate-x-1 text-blue-600 dark:text-sky-300'
                            : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {title}
                      </span>
                      <span
                        className={`mt-1.5 block max-w-md text-sm leading-6 transition-all duration-700 ease-out ${
                          isActive
                            ? 'translate-x-1 text-slate-700 dark:text-slate-300'
                            : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {desc}
                      </span>
                    </motion.span>
                  </button>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;