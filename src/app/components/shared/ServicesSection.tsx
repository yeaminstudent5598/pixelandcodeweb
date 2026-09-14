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

// সার্ভিস ডাটা অ্যারে
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
    iconColor: "text-blue-600 dark:text-blue-400",
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
    iconColor: "text-indigo-600 dark:text-indigo-400",
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
    iconColor: "text-rose-600 dark:text-rose-400",
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
    iconColor: "text-emerald-600 dark:text-emerald-400",
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
    iconColor: "text-purple-600 dark:text-purple-400",
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
    <section className="py-24 md:py-32 relative z-10 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* 🌌 Ambient Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* ⚠️ max-w-[90%] আবার ফিরিয়ে আনা হয়েছে ন্যাভবারের অ্যালাইনমেন্টের জন্য */}
      <div className="relative z-10 max-w-[90%] w-full mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-bold tracking-wide uppercase mb-6 border border-blue-200 dark:border-blue-800/50">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            {language ? "আমাদের দক্ষতা" : "Our Expertise"}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            {language ? (
              <>
                আমরা যে সমস্ত <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">সেবা প্রদান করি</span>
              </>
            ) : (
              <>
                Services We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Deliver
                </span>
              </>
            )}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg lg:text-xl font-medium">
            {language
              ? "স্কেলেবিলিটি এবং ইমপ্যাক্টের জন্য ডিজাইন করা আমাদের আধুনিক ডিজিটাল সলিউশনের মাধ্যমে আপনার ব্র্যান্ডকে এগিয়ে নিন।"
              : "Elevate your brand with our comprehensive suite of digital solutions designed for scalability and impact."}
          </p>
        </div>

        {/* 📚 STICKY STACKING CARDS */}
        <div className="w-full relative flex flex-col gap-6 md:gap-8 pb-32">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className={`sticky top-24 md:top-28 lg:top-32 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-14 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-10 md:p-12 lg:p-14 min-h-[400px] w-full border shadow-xl transition-all duration-500 overflow-hidden ${
                  service.isCta
                    ? "border-slate-800 bg-slate-900 justify-center text-center shadow-blue-900/20"
                    : "border-slate-200 dark:border-slate-800 shadow-slate-200/50 dark:shadow-black/50 bg-white dark:bg-slate-900"
                }`}
                style={{
                  zIndex: index + 1,
                }}
              >
                {service.isCta ? (
                  // CTA Card Content
                  <div className="flex flex-col items-center justify-center max-w-xl mx-auto py-10 relative z-10">
                    <Sparkles className="w-12 h-12 text-yellow-400 mb-6 animate-pulse" />
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                      {language ? service.title.bn : service.title.en}
                    </h3>
                    <p className="text-slate-300 text-lg mb-8">
                      {language ? service.description.bn : service.description.en}
                    </p>
                    <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                      {language ? "কথা বলুন" : "Let's Talk"}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left relative z-10">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        className="w-16 h-16 mx-auto lg:mx-0 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-center mb-6 lg:mb-8"
                      >
                        {IconComponent && (
                          <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                        )}
                      </motion.div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        {language ? service.title.bn : service.title.en}
                      </h3>
                      <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                        {language ? service.description.bn : service.description.en}
                      </p>
                    </div>

                    {/* Image Content */}
                    <div className="w-full lg:w-1/2 h-[240px] sm:h-[300px] md:h-[360px] relative rounded-[1.5rem] md:rounded-[1.75rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner bg-slate-50 dark:bg-slate-800/50 group">
                      {service.image && (
                        <Image
                          src={service.image}
                          alt={service.title.en}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
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