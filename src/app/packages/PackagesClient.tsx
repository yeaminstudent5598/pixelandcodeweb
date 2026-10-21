"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  Check,
  Film,
  Globe,
  Megaphone,
  MessageCircle,
  Palette,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { packageData } from "@/lib/packagesData";

/* ─────────────────────────────────────────────
   Brand blue (light blue gradient — no dark blue)
───────────────────────────────────────────── */
const BLUE_GRADIENT = "linear-gradient(180deg, #38bdf8 0%, #3b82f6 100%)";
const BLUE_GRADIENT_H = "linear-gradient(90deg, #0ea5e9 0%, #3b82f6 100%)";

const WHATSAPP = "8801641801705";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type ServiceKey = keyof typeof packageData;
type Billing = "monthly" | "yearly";
type Pkg = (typeof packageData)[ServiceKey]["monthly"][number];

const SERVICES: {
  key: ServiceKey;
  label: string;
  Icon: LucideIcon;
  blurb: string;
}[] = [
  {
    key: "facebook",
    label: "Facebook Ads",
    Icon: Megaphone,
    blurb: "Ad campaigns with ad credit included.",
  },
  {
    key: "website",
    label: "Website",
    Icon: Globe,
    blurb: "Business and e-commerce websites.",
  },
  {
    key: "graphics",
    label: "Graphics Design",
    Icon: Palette,
    blurb: "Social media post designs, every week.",
  },
  {
    key: "video",
    label: "Video Editing",
    Icon: Film,
    blurb: "Reels, shorts and promo videos.",
  },
];

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */
const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/* yearly price monthly*12 er theke koto percent kom (data theke hisab) */
const savingPct = (monthly: number, yearly: number) => {
  const full = monthly * 12;
  return full > 0 ? Math.round((1 - yearly / full) * 100) : 0;
};

/* Price count kore bodlabe */
function AnimatedNumber({ value }: { value: number }) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const from = useRef(value);

  useEffect(() => {
    if (reduce) {
      from.current = value;
      setDisplay(value);
      return;
    }

    const controls = animate(from.current, value, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (v) => {
        from.current = v;
        setDisplay(Math.round(v));
      },
    });

    return () => controls.stop();
  }, [value, reduce]);

  return <>{display.toLocaleString("en-US")}</>;
}

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
  show: { transition: { staggerChildren: 0.1 } },
};

const cardV: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ─────────────────────────────────────────────
   Plan card
───────────────────────────────────────────── */
function PlanCard({
  serviceKey,
  monthly,
  yearly,
  billing,
  onPickYearly,
}: {
  serviceKey: ServiceKey;
  monthly: Pkg;
  yearly: Pkg;
  billing: Billing;
  onPickYearly: () => void;
}) {
  const isYearly = billing === "yearly";
  const pkg = isYearly ? yearly : monthly;
  const popular = monthly.popular;
  const saving = savingPct(monthly.price, yearly.price);

  const href = `/payment?service=${serviceKey}&name=${encodeURIComponent(
    pkg.nameEn
  )}&price=${pkg.price}&billing=${billing}`;

  return (
    <motion.li variants={cardV} className="relative">
      <div
        className={`relative h-full rounded-[26px] p-[1.5px] transition-transform duration-300 hover:-translate-y-1 ${
          popular ? "lg:scale-[1.03]" : "bg-slate-200 dark:bg-white/10"
        }`}
        style={popular ? { background: BLUE_GRADIENT } : undefined}
      >
        {popular && (
          <span
            className="absolute left-1/2 top-0 z-10 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{
              background: BLUE_GRADIENT_H,
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 8px 22px rgba(59,130,246,0.35)",
            }}
          >
            <Sparkles className="h-3 w-3" color="#ffffff" />
            Most popular
          </span>
        )}

        <div
          className={`flex h-full flex-col rounded-3xl p-6 sm:p-7 ${
            popular
              ? "bg-gradient-to-b from-sky-50 to-white shadow-[0_24px_60px_rgba(59,130,246,0.20)] dark:from-[#0b1d33] dark:to-[#0a1222] dark:shadow-none"
              : "bg-white dark:bg-[#0a1222]"
          }`}
        >
          {/* name + saving */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {pkg.nameEn}
            </h3>

            {isYearly && saving > 0 && (
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
                Save {saving}%
              </span>
            )}
          </div>

          {/* price */}
          <div className="mt-5 flex items-end gap-1.5">
            <span className="text-5xl font-semibold leading-none tracking-tight text-slate-900 dark:text-white">
              $<AnimatedNumber value={pkg.price} />
            </span>
            <span className="pb-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">
              /{isYearly ? "yr" : "mo"}
            </span>
          </div>

          {/* price sub line */}
          <div className="mt-2 min-h-[20px] text-xs text-slate-500 dark:text-slate-400">
            {isYearly ? (
              <>
                <s className="mr-1.5">{usd(monthly.price * 12)}</s>
                about {usd(Math.round(yearly.price / 12))}/mo
              </>
            ) : saving > 0 ? (
              <button
                type="button"
                onClick={onPickYearly}
                className="font-semibold text-emerald-600 underline-offset-2 hover:underline dark:text-emerald-400"
              >
                Save {saving}% with yearly billing
              </button>
            ) : (
              "Billed monthly"
            )}
          </div>

          {/* features */}
          <motion.ul
            key={billing}
            initial={{ opacity: 0.35 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-6 flex-1 space-y-3 border-t border-slate-200 pt-6 dark:border-white/10"
          >
            {pkg.featuresEn.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: BLUE_GRADIENT }}
                >
                  <Check className="h-3 w-3" color="#ffffff" strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </motion.ul>

          {/* CTA */}
          <Link
            href={href}
            className={`group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
              popular
                ? "hover:brightness-110"
                : "border border-slate-300 bg-white/60 text-slate-800 hover:border-sky-400 hover:text-sky-600 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-sky-400/60 dark:hover:text-sky-300"
            }`}
            style={
              popular
                ? {
                    background: BLUE_GRADIENT_H,
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.6)",
                    boxShadow:
                      "0 10px 28px rgba(59,130,246,0.38), inset 0 1px 0 rgba(255,255,255,0.45)",
                  }
                : undefined
            }
          >
            Choose {pkg.nameEn}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.li>
  );
}

/* ─────────────────────────────────────────────
   Main
───────────────────────────────────────────── */
export function PackagesClient() {
  const [service, setService] = useState<ServiceKey>("facebook");
  // Default yearly korte chaile ekhane "yearly" likho
  const [billing, setBilling] = useState<Billing>("monthly");

  const meta = SERVICES.find((s) => s.key === service) ?? SERVICES[0];
  const monthlyList = packageData[service].monthly;
  const yearlyList = packageData[service].yearly;

  const maxSaving = useMemo(
    () =>
      Math.max(
        0,
        ...monthlyList.map((m, i) =>
          savingPct(m.price, (yearlyList[i] ?? m).price)
        )
      ),
    [monthlyList, yearlyList]
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* ═════════ HEADER ═════════ */}
        <motion.div
          variants={headV}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={itemV}
            className="inline-flex items-center rounded-full border border-[rgba(56,189,248,0.45)] bg-[rgba(255,255,255,0.75)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-sky-700 backdrop-blur-md dark:border-[rgba(56,189,248,0.35)] dark:bg-[rgba(56,189,248,0.12)] dark:text-sky-200"
          >
            Pricing
          </motion.span>

          <motion.h1
            variants={itemV}
            className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[46px]"
            style={{ textWrap: "balance" }}
          >
            Simple, transparent{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: BLUE_GRADIENT_H }}
            >
              service packages
            </span>
          </motion.h1>

          <motion.p
            variants={itemV}
            className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-slate-600 dark:text-slate-400 sm:text-base"
          >
            Pick a service, choose a plan and get started. Need something
            different? We will build a custom plan for you.
          </motion.p>
        </motion.div>

        {/* ═════════ CONTROLS ═════════ */}
        <div className="mt-10 flex flex-col items-center gap-5">
          {/* service tabs */}
          <div
            role="tablist"
            aria-label="Choose a service"
            className="flex w-full max-w-3xl flex-wrap justify-center gap-1.5 rounded-3xl border border-slate-200 bg-white/70 p-1.5 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] sm:rounded-full"
          >
            {SERVICES.map((s) => {
              const active = s.key === service;
              return (
                <button
                  key={s.key}
                  type="button"
                  role="tab"
                  id={`tab-${s.key}`}
                  aria-selected={active}
                  aria-controls="packages-panel"
                  onClick={() => setService(s.key)}
                  className="relative rounded-full px-4 py-2.5 text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-sky-400 sm:px-5"
                >
                  {active && (
                    <motion.span
                      layoutId="service-pill"
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
                    <s.Icon className="h-4 w-4" />
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* billing toggle */}
          <div
            role="group"
            aria-label="Billing period"
            className="flex items-center rounded-full bg-slate-100 p-1 dark:bg-white/[0.06]"
          >
            {(["monthly", "yearly"] as const).map((b) => {
              const active = billing === b;
              return (
                <button
                  key={b}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setBilling(b)}
                  className="relative rounded-full px-5 py-2 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  {active && (
                    <motion.span
                      layoutId="billing-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-sm dark:bg-white/15"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span
                    className={`relative z-10 flex items-center gap-2 ${
                      active
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {b === "monthly" ? "Monthly" : "Yearly"}
                    {b === "yearly" && maxSaving > 0 && (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">
                        Save up to {maxSaving}%
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* service blurb */}
          <AnimatePresence mode="wait">
            <motion.p
              key={service}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-sm text-slate-500 dark:text-slate-400"
            >
              {meta.blurb}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* ═════════ PLANS ═════════ */}
        <div
          id="packages-panel"
          role="tabpanel"
          aria-labelledby={`tab-${service}`}
          className="mt-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={service}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <motion.ul
                variants={gridV}
                initial="hidden"
                animate="show"
                className="grid gap-8 pt-4 lg:grid-cols-3 lg:items-stretch lg:gap-7"
              >
                {monthlyList.map((m, i) => (
                  <PlanCard
                    key={m.nameEn}
                    serviceKey={service}
                    monthly={m}
                    yearly={yearlyList[i] ?? m}
                    billing={billing}
                    onPickYearly={() => setBilling("yearly")}
                  />
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>

          <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
            All prices are in US dollars.
          </p>
        </div>

        {/* ═════════ CUSTOM PLAN ═════════ */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10"
        >
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              background:
                "linear-gradient(160deg, #e8edff 0%, #e6f4ff 55%, #e4fbff 100%)",
            }}
          />
          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              background:
                "linear-gradient(160deg, #0d1730 0%, #0a1c33 55%, #082231 100%)",
            }}
          />

          <div className="relative flex flex-col items-start justify-between gap-6 p-7 sm:p-9 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                Not sure which plan fits? Need something custom?
              </h2>
              <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                Tell us about your business and we will suggest the right plan,
                or build a custom one for you.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                style={{
                  background: BLUE_GRADIENT_H,
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow:
                    "0 10px 28px rgba(59,130,246,0.38), inset 0 1px 0 rgba(255,255,255,0.45)",
                }}
              >
                Talk to us
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  color="#ffffff"
                />
              </Link>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-sky-400/60 dark:hover:text-sky-300"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </MotionConfig>
  );
}