"use client";

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
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// সার্ভিস ডাটা অ্যারে (ইংরেজি এবং বাংলা উভয় ভাষা সহ)
const servicesData = [
  {
    id: 1,
    title: {
      en: "Web Development",
      bn: "ওয়েব ডেভেলপমেন্ট",
    },
    description: {
      en: "We build highly scalable, interactive, and high-performance web applications using cutting-edge frameworks like React and Next.js.",
      bn: "আমরা রিয়্যাক্ট এবং নেক্সট ডট জেএসের মতো অত্যাধুনিক ফ্রেমওয়ার্ক ব্যবহার করে অত্যন্ত স্কেলেবল, ইন্টারেক্টিভ এবং হাই-পারফরম্যান্স ওয়েব অ্যাপ্লিকেশন তৈরি করি।",
    },
    image: "/services/web-development.png",
    icon: Code2,
    iconColor: "text-cyan-600",
    isCta: false,
  },
  {
    id: 2,
    title: {
      en: "App Development",
      bn: "অ্যাপ ডেভেলপমেন্ট",
    },
    description: {
      en: "Native and cross-platform mobile experiences designed to engage users on iOS and Android.",
      bn: "আইওএস এবং অ্যান্ড্রয়েড ব্যবহারকারীদের সম্পৃক্ত করার জন্য ডিজাইন করা নেটিভ এবং ক্রস-প্ল্যাটফর্ম মোবাইল অভিজ্ঞতা।",
    },
    image: "/services/app-development.png",
    icon: Smartphone,
    iconColor: "text-indigo-600",
    isCta: false,
  },
  {
    id: 3,
    title: {
      en: "Video Editing",
      bn: "ভিডিও এডিটিং",
    },
    description: {
      en: "Cinematic cuts, motion graphics, and engaging visual storytelling for modern brands.",
      bn: "আধুনিক ব্র্যান্ডের জন্য সিনেমাটিক কাট, মোশন গ্রাফিক্স এবং আকর্ষক ভিজ্যুয়াল স্টোরিটেলিং।",
    },
    image: "/services/graphic-design.png",
    icon: Video,
    iconColor: "text-rose-600",
    isCta: false,
  },
  {
    id: 4,
    title: {
      en: "Meta Marketing",
      bn: "মেটা মার্কেটিং",
    },
    description: {
      en: "Data-driven ad campaigns across Meta platforms, built and measured to maximize your ROI.",
      bn: "ডাটা-ড্রাইভেন অ্যাড ক্যাম্পেইনের মাধ্যমে আরওআই (ROI) সর্বোচ্চকরণ।",
    },
    image: "/services/meta-merktinf.png",
    icon: TrendingUp,
    iconColor: "text-green-600",
    isCta: false,
  },
  {
    id: 5,
    title: {
      en: "Graphic Design",
      bn: "গ্রাফিক ডিজাইন",
    },
    description: {
      en: "Creative branding, UI/UX, and visual identities that make your business instantly recognizable.",
      bn: "ক্রিয়েটিভ ব্র্যান্ডিং, ইউআই/ইউএক্স এবং ভিজ্যুয়াল আইডেন্টিটি।",
    },
    image: "/services/graphic-design.png",
    icon: Palette,
    iconColor: "text-fuchsia-600",
    isCta: false,
  },
  {
    id: 6,
    title: {
      en: "Need Something Else?",
      bn: "অন্য কিছু প্রয়োজন?",
    },
    description: {
      en: "We offer custom solutions tailored to your unique business requirements. Let's talk!",
      bn: "আমরা আপনার নির্দিষ্ট ব্যবসায়িক প্রয়োজনীয়তা অনুযায়ী কাস্টম সলিউশন অফার করি। কথা বলুন আমাদের সাথে!",
    },
    isCta: true,
  },
];

export default function Services() {
  const { language } = useLanguage();

  return (
    <section
      className="py-24 md:py-32 relative z-10"
      style={{
        background:
          "linear-gradient(135deg, #F2F5FF 0%, #F8FAFF 50%, #EEFBF6 100%)",
      }}
    >
      {/* 🌌 Ambient Background Glows — নিজের আলাদা overflow-hidden wrapper-এ,
          যাতে sticky card container-এর ancestor chain-এ overflow-hidden না থাকে
          (overflow-hidden থাকলে position: sticky কাজ করে না) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/30 dark:bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/30 dark:bg-purple-600/10 rounded-full blur-[120px]" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.04]" />
      </div>

      <div className="relative z-10 max-w-[90%] w-full mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/60 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold tracking-wide uppercase mb-6 border border-blue-200/60 dark:border-blue-800/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            {language ? "আমাদের দক্ষতা" : "Our Expertise"}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            {language ? (
              <>
                আমরা যে সমস্ত <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400">সেবা প্রদান করি</span>
              </>
            ) : (
              <>
                Services We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 dark:from-blue-400 dark:to-purple-400">
                  Deliver
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium">
            {language
              ? "স্কেলেবিলিটি এবং ইমপ্যাক্টের জন্য ডিজাইন করা আমাদের আধুনিক ডিজিটাল সলিউশনের মাধ্যমে আপনার ব্র্যান্ডকে এগিয়ে নিন।"
              : "Elevate your brand with our comprehensive suite of digital solutions designed for scalability and impact."}
          </p>
        </div>

        {/* 📚 STICKY STACKING CARDS */}
        <div className="w-full relative flex flex-col gap-6 pb-32">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className={`sticky flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-14 rounded-[2.5rem] p-8 md:p-12 lg:p-14 min-h-[420px] w-full border shadow-xl shadow-slate-200/60 ${
                  service.isCta
                    ? "border-blue-500/30 justify-center text-center"
                    : "border-white/70"
                }`}
                style={{
                  // সব কার্ডের top একই রাখা হয়েছে যাতে আগের কার্ডের কোনো
                  // sliver/edge peek করে না দেখা যায় — নতুন কার্ড সরাসরি
                  // আগেরটাকে সম্পূর্ণ cover করে ফেলবে
                  top: "10vh",
                  zIndex: index,
                  // ⚠️ background সরাসরি inline style দিয়ে সেট করা — Tailwind-এর
                  // multi-stop arbitrary gradient ক্লাস কখনো কখনো compile না হয়ে
                  // card transparent রেখে দিচ্ছিল, ফলে নিচের কার্ডের টেক্সট উপরে
                  // দেখা যাচ্ছিল (overlap bug)। inline style সবসময় guaranteed render হয়।
                  background: service.isCta
                    ? "linear-gradient(to right, #0f172a, #172554, #1e1b4b)"
                    : "linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 55%, #EAFBF5 100%)",
                }}
              >
                {service.isCta ? (
                  // CTA কার্ড
                  <div className="flex flex-col items-center justify-center max-w-md mx-auto py-8">
                    <Sparkles className="w-9 h-9 text-yellow-400 mb-4 animate-pulse" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 flex items-center gap-2">
                      {language ? service.title.bn : service.title.en}
                    </h3>
                    <p className="text-slate-300 text-base mb-6">
                      {language ? service.description.bn : service.description.en}
                    </p>
                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-400 transition-colors duration-300 cursor-pointer">
                      {language ? "কথা বলুন" : "Let's Talk"}
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                ) : (
                  <>
                    {/* কন্টেন্ট অংশ */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        className="w-14 h-14 rounded-2xl bg-white/80 dark:bg-white/10 border border-slate-900/10 dark:border-white/20 shadow-md flex items-center justify-center mb-6"
                      >
                        {IconComponent && (
                          <IconComponent className={`w-7 h-7 ${service.iconColor}`} />
                        )}
                      </motion.div>

                      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        {language ? service.title.bn : service.title.en}
                      </h3>
                      <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                        {language ? service.description.bn : service.description.en}
                      </p>
                    </div>

                    {/* ইমেজ অংশ */}
                    <div className="w-full lg:w-1/2 h-[240px] md:h-[300px] lg:h-[340px] relative rounded-[1.75rem] overflow-hidden border border-white/70 dark:border-slate-700/60 shadow-lg bg-white/40 dark:bg-black/20">
                      {service.image && (
                        <Image
                          src={service.image}
                          alt={service.title.en}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        />
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}