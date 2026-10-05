"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Video,
  TrendingUp,
  Palette,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// --------------------------------------------------
// Services data
// category / stats (Stack, Focus) chaile apnar moto change korben
// --------------------------------------------------
const servicesData = [
  {
    id: 1,
    category: { en: "Development", bn: "ডেভেলপমেন্ট" },
    title: { en: "Web Development", bn: "ওয়েব ডেভেলপমেন্ট" },
    description: {
      en: "We build highly scalable, interactive, and high-performance web applications using cutting-edge frameworks like React and Next.js.",
      bn: "আমরা রিয়্যাক্ট এবং নেক্সট ডট জেএসের মতো অত্যাধুনিক ফ্রেমওয়ার্ক ব্যবহার করে অত্যন্ত স্কেলেবল, ইন্টারেক্টিভ এবং হাই-পারফরম্যান্স ওয়েব অ্যাপ্লিকেশন তৈরি করি।",
    },
    stats: [
      { label: { en: "Tech Stack", bn: "টেক স্ট্যাক" }, value: { en: "Next.js, React", bn: "Next.js, React" } },
      { label: { en: "Focus", bn: "ফোকাস" }, value: { en: "Speed & Scale", bn: "স্পিড ও স্কেল" } },
    ],
    href: "/web-service",
    image: "/services/web-development.png",
    icon: Code2,
    isCta: false,
  },
  {
    id: 2,
    category: { en: "Mobile", bn: "মোবাইল" },
    title: { en: "App Development", bn: "অ্যাপ ডেভেলপমেন্ট" },
    description: {
      en: "Native and cross-platform mobile experiences designed to engage users on iOS and Android.",
      bn: "আইওএস এবং অ্যান্ড্রয়েড ব্যবহারকারীদের সম্পৃক্ত করার জন্য ডিজাইন করা নেটিভ এবং ক্রস-প্ল্যাটফর্ম মোবাইল অভিজ্ঞতা।",
    },
    stats: [
      { label: { en: "Platforms", bn: "প্ল্যাটফর্ম" }, value: { en: "iOS & Android", bn: "iOS ও Android" } },
      { label: { en: "Focus", bn: "ফোকাস" }, value: { en: "User Experience", bn: "ইউজার এক্সপেরিয়েন্স" } },
    ],
    href: "/services",
    image: "/services/app-development.png",
    icon: Smartphone,
    isCta: false,
  },
  {
    id: 3,
    category: { en: "Creative", bn: "ক্রিয়েটিভ" },
    title: { en: "Video Editing", bn: "ভিডিও এডিটিং" },
    description: {
      en: "Cinematic cuts, motion graphics, and engaging visual storytelling for modern brands.",
      bn: "আধুনিক ব্র্যান্ডের জন্য সিনেমাটিক কাট, মোশন গ্রাফিক্স এবং আকর্ষক ভিজ্যুয়াল স্টোরিটেলিং।",
    },
    stats: [
      { label: { en: "Style", bn: "স্টাইল" }, value: { en: "Cinematic Cuts", bn: "সিনেমাটিক কাট" } },
      { label: { en: "Includes", bn: "অন্তর্ভুক্ত" }, value: { en: "Motion Graphics", bn: "মোশন গ্রাফিক্স" } },
    ],
    href: "/video-editing",
    image: "/services/graphic-design.png",
    icon: Video,
    isCta: false,
  },
  {
    id: 4,
    category: { en: "Marketing", bn: "মার্কেটিং" },
    title: { en: "Meta Marketing", bn: "মেটা মার্কেটিং" },
    description: {
      en: "Data-driven ad campaigns across Meta platforms, built and measured to maximize your ROI.",
      bn: "ডাটা-ড্রাইভেন অ্যাড ক্যাম্পেইনের মাধ্যমে আরওআই (ROI) সর্বোচ্চকরণ।",
    },
    stats: [
      { label: { en: "Platforms", bn: "প্ল্যাটফর্ম" }, value: { en: "Facebook, Instagram", bn: "Facebook, Instagram" } },
      { label: { en: "Focus", bn: "ফোকাস" }, value: { en: "Maximum ROI", bn: "সর্বোচ্চ ROI" } },
    ],
    href: "/meta-marketing",
    image: "/services/meta-merktinf.png",
    icon: TrendingUp,
    isCta: false,
  },
  {
    id: 5,
    category: { en: "Branding", bn: "ব্র্যান্ডিং" },
    title: { en: "Graphic Design", bn: "গ্রাফিক ডিজাইন" },
    description: {
      en: "Creative branding, UI/UX, and visual identities that make your business instantly recognizable.",
      bn: "ক্রিয়েটিভ ব্র্যান্ডিং, ইউআই/ইউএক্স এবং ভিজ্যুয়াল আইডেন্টিটি।",
    },
    stats: [
      { label: { en: "Services", bn: "সার্ভিস" }, value: { en: "Branding, UI/UX", bn: "ব্র্যান্ডিং, UI/UX" } },
      { label: { en: "Focus", bn: "ফোকাস" }, value: { en: "Visual Identity", bn: "ভিজ্যুয়াল আইডেন্টিটি" } },
    ],
    href: "/graphics-design",
    image: "/services/graphic-design.png",
    icon: Palette,
    isCta: false,
  },
  {
    id: 6,
    title: { en: "Need Something Else?", bn: "অন্য কিছু প্রয়োজন?" },
    description: {
      en: "We offer custom solutions tailored to your unique business requirements. Let's talk!",
      bn: "আমরা আপনার নির্দিষ্ট ব্যবসায়িক প্রয়োজনীয়তা অনুযায়ী কাস্টম সলিউশন অফার করি। কথা বলুন আমাদের সাথে!",
    },
    isCta: true,
  },
];

export default function Services() {
  const { language } = useLanguage();
  const lang = language ? "bn" : "en";

  return (
    <section className="relative z-10 bg-white py-16 dark:bg-[#050b16] md:py-24">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-[10%] top-0 h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.14) 0%, rgba(56,189,248,0) 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-[10%] h-[460px] w-[460px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0) 70%)",
          }}
        />
      </div>

      {/* Container — navbar / hero er sathe same width & padding */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* ---------------- Header ---------------- */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] backdrop-blur-md"
            style={{
              border: "1px solid rgba(56,189,248,0.45)",
              background: "rgba(255,255,255,0.75)",
              color: "#0369a1",
            }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-500" />
            {language ? "আমাদের দক্ষতা" : "Our Expertise"}
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-4xl">
            {language ? (
              <>
                আমরা যে সমস্ত{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #0ea5e9, #3b82f6)",
                  }}
                >
                  সেবা প্রদান করি
                </span>
              </>
            ) : (
              <>
                Services We{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #0ea5e9, #3b82f6)",
                  }}
                >
                  Deliver
                </span>
              </>
            )}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-slate-600 dark:text-slate-400 md:text-base">
            {language
              ? "স্কেলেবিলিটি এবং ইমপ্যাক্টের জন্য ডিজাইন করা আমাদের আধুনিক ডিজিটাল সলিউশনের মাধ্যমে আপনার ব্র্যান্ডকে এগিয়ে নিন।"
              : "Elevate your brand with our comprehensive suite of digital solutions designed for scalability and impact."}
          </p>
        </div>

        {/* ---------------- Sticky stacking cards ---------------- */}
        <div className="relative flex w-full flex-col gap-5 pb-16 md:gap-6">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="sticky top-24 md:top-28"
                style={{ zIndex: index + 1 }}
              >
                {service.isCta ? (
                  /* ================= CTA CARD ================= */
                  <div
                    className="relative overflow-hidden rounded-3xl p-8 text-center sm:p-12"
                    style={{
                      background:
                        "linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)",
                      border: "1px solid rgba(255,255,255,0.45)",
                      boxShadow:
                        "0 24px 60px rgba(59,130,246,0.30), inset 0 1px 0 rgba(255,255,255,0.5)",
                    }}
                  >
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0) 70%)",
                      }}
                    />

                    <div className="relative mx-auto flex max-w-xl flex-col items-center py-6">
                      <Sparkles className="mb-4 h-9 w-9" color="#ffffff" />

                      <h3
                        className="text-2xl font-semibold tracking-tight sm:text-3xl"
                        style={{ color: "#ffffff" }}
                      >
                        {service.title[lang]}
                      </h3>

                      <p
                        className="mt-3 text-[15px] leading-7"
                        style={{ color: "rgba(255,255,255,0.92)" }}
                      >
                        {service.description[lang]}
                      </p>

                      <Link
                        href="/contact"
                        className="group mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          background: "#ffffff",
                          color: "#1d6fd8",
                          boxShadow: "0 10px 28px rgba(15,23,42,0.18)",
                        }}
                      >
                        {language ? "কথা বলুন" : "Let's Talk"}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* ================= SERVICE CARD ================= */
                  <div
                    className="relative overflow-hidden rounded-3xl"
                    style={{
                      border: "1px solid rgba(148,163,184,0.25)",
                      boxShadow: "0 18px 50px rgba(15,23,42,0.07)",
                    }}
                  >
                    {/* background — light */}
                    <div
                      className="absolute inset-0 dark:hidden"
                      style={{
                        background:
                          "linear-gradient(160deg, #e8edff 0%, #e6f4ff 55%, #e4fbff 100%)",
                      }}
                    />
                    {/* background — dark */}
                    <div
                      className="absolute inset-0 hidden dark:block"
                      style={{
                        background:
                          "linear-gradient(160deg, #0d1730 0%, #0a1c33 55%, #082231 100%)",
                      }}
                    />

                    <div className="relative grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
                      {/* ---------- Text ---------- */}
                      <div className="order-2 flex flex-col lg:order-1">
                        {/* category */}
                        <div className="flex items-center gap-2.5">
                          <span
                            className="flex h-8 w-8 items-center justify-center rounded-lg"
                            style={{
                              background:
                                "linear-gradient(180deg, #38bdf8 0%, #3b82f6 100%)",
                            }}
                          >
                            {Icon && <Icon className="h-4 w-4" color="#ffffff" />}
                          </span>

                          <span
                            className="text-base italic text-blue-700 dark:text-sky-300"
                            style={{
                              fontFamily:
                                'Georgia, "Times New Roman", serif',
                            }}
                          >
                            {service.category?.[lang]}
                          </span>
                        </div>

                        {/* title */}
                        <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-slate-900 dark:text-white md:text-[28px]">
                          {service.title[lang]}
                        </h3>

                        {/* description */}
                        <p className="mt-3 max-w-lg text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                          {service.description[lang]}
                        </p>

                        {/* stats */}
                        {service.stats && (
                          <div className="mt-6 flex flex-wrap gap-x-12 gap-y-4">
                            {service.stats.map((stat, i) => (
                              <div key={i}>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                  {stat.label[lang]}
                                </p>
                                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                                  {stat.value[lang]}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* button */}
                        <Link
                          href={service.href ?? "/contact"}
                          className="
                            group mt-7 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3
                            text-xs font-bold uppercase tracking-wide backdrop-blur-md
                            transition-all duration-300 hover:-translate-y-0.5
                            border border-[#3b9cf0] bg-[rgba(255,255,255,0.6)] text-[#1d6fd8] hover:bg-white
                            dark:border-[rgba(125,211,252,0.55)] dark:bg-[rgba(56,189,248,0.10)] dark:text-sky-300 dark:hover:bg-[rgba(56,189,248,0.20)]
                          "
                        >
                          {language ? "বিস্তারিত দেখুন" : "Know More"}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>

                      {/* ---------- Image ---------- */}
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="group/img relative order-1 h-[220px] overflow-hidden rounded-2xl sm:h-[280px] lg:order-2 lg:h-[340px]"
                        style={{
                          background:
                            "linear-gradient(135deg, #0b57d0 0%, #0ea5a4 100%)",
                          boxShadow: "0 16px 40px rgba(15,23,42,0.15)",
                        }}
                      >
                        {service.image && (
                          <Image
                            src={service.image}
                            alt={service.title.en}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center transition-transform duration-700 group-hover/img:scale-105"
                          />
                        )}
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}