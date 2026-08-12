"use client";

import { motion, Variants } from "framer-motion";
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

// সার্ভিস ডাটা অ্যারে (ইংরেজি এবং বাংলা উভয় ভাষা সহ)
const servicesData = [
  {
    id: 1,
    title: {
      en: "Web Development",
      bn: "ওয়েব ডেভেলপমেন্ট",
    },
    description: {
      en: "We build highly scalable, interactive, and high-performance web applications using cutting-edge frameworks like React and Next.js.",
      bn: "আমরা রিয়্যাক্ট এবং নেক্সট ডট জেএসের মতো অত্যাধুনিক ফ্রেমওয়ার্ক ব্যবহার করে অত্যন্ত স্কেলেবল, ইন্টারেক্টিভ এবং হাই-পারফরম্যান্স ওয়েব অ্যাপ্লিকেশন তৈরি করি।",
    },
    image: "/services/web-development.png",
    icon: Code2,
    iconColor: "text-cyan-400",
    className: "md:col-span-2 md:row-span-2 p-8 md:p-12 justify-between",
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
    iconColor: "text-indigo-400",
    className: "md:col-span-1 md:row-span-2 p-8 justify-between",
    isCta: false,
    animateIcon: true,
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
    iconColor: "text-rose-400",
    className: "md:col-span-2 md:row-span-1 p-8 flex-col sm:flex-row items-start sm:items-center gap-6",
    isCta: false,
  },
  {
    id: 4,
    title: {
      en: "Meta Marketing",
      bn: "মেটা মার্কেটিং",
    },
    description: {
      en: "Data-driven ad campaigns maximizing ROI.",
      bn: "ডাটা-ড্রাইভেন অ্যাড ক্যাম্পেইনের মাধ্যমে আরওআই (ROI) সর্বোচ্চকরণ।",
    },
    image: "/services/meta-merktinf.png",
    icon: TrendingUp,
    iconColor: "text-green-400",
    className: "md:col-span-1 md:row-span-1 p-8 justify-end",
    isCta: false,
  },
  {
    id: 5,
    title: {
      en: "Graphic Design",
      bn: "গ্রাফিক ডিজাইন",
    },
    description: {
      en: "Creative branding, UI/UX, and visual identities.",
      bn: "ক্রিয়েটিভ ব্র্যান্ডিং, ইউআই/ইউএক্স এবং ভিজ্যুয়াল আইডেন্টিটি।",
    },
    image: "/services/graphic-design.png",
    icon: Palette,
    iconColor: "text-fuchsia-400",
    className: "md:col-span-1 md:row-span-1 p-8 justify-end",
    isCta: false,
  },
  {
    id: 6,
    title: {
      en: "Need Something Else?",
      bn: "অন্য কিছু প্রয়োজন?",
    },
    description: {
      en: "We offer custom solutions tailored to your unique business requirements. Let's talk!",
      bn: "আমরা আপনার নির্দিষ্ট ব্যবসায়িক প্রয়োজনীয়তা অনুযায়ী কাস্টম সলিউশন অফার করি। কথা বলুন আমাদের সাথে!",
    },
    className: "md:col-span-2 md:row-span-1 p-8 justify-center items-center text-center cursor-pointer",
    isCta: true,
  },
];

export default function Services() {
  const { language } = useLanguage();

  // Framer Motion Variants for Staggered Animation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className=" py-24 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-[#070b14] z-10">
      {/* 🌌 Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold tracking-wide uppercase mb-6 border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-md">
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
              ? "স্কেলেবিলিটি এবং ইমপ্যাক্টের জন্য ডিজাইন করা আমাদের আধুনিক ডিজিটাল সলিউশনের মাধ্যমে আপনার ব্র্যান্ডকে এগিয়ে নিন।"
              : "Elevate your brand with our comprehensive suite of digital solutions designed for scalability and impact."}
          </p>
        </div>

        {/* 🍱 BENTO GRID (Dynamic Loop) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px] max-w-7xl mx-auto"
        >   
          {servicesData.map((service) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={service.isCta ? { scale: 1.02 } : undefined}
                style={
                  service.isCta
                    ? { background: "linear-gradient(to right, #0f172a, #172554, #1e1b4b)" }
                    : undefined
                }
                className={`group relative rounded-[2rem] overflow-hidden shadow-2xl border flex flex-col ${
                  service.isCta
                    ? "border-blue-500/30"
                    : "bg-slate-900 dark:bg-[#070b14] border-slate-700/60"
                } ${service.className}`}
              >
                {/* Background Image & Overlay with Opacity */}
                {!service.isCta && service.image && (
                  <>
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title.en}
                        fill
                        sizes="(max-width: 768px) 100vw, 66vw"
                        className="object-cover opacity-40 object-center transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/80 to-[#070b14]/40 z-10 pointer-events-none" />
                  </>
                )}

                {/* CTA Card Specific Glow Border */}
                {service.isCta && (
                  <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-blue-400/50 transition-colors duration-500 pointer-events-none" />
                )}

                {/* Card Content Structure */}
                {service.isCta ? (
                  <>
                    <Sparkles className="w-8 h-8 text-yellow-400 mb-3 animate-pulse relative z-10" />
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2 drop-shadow-md relative z-10">
                      {language ? service.title.bn : service.title.en}
                      <ArrowRight className="w-6 h-6 text-blue-400 group-hover:translate-x-2 transition-transform duration-300" />
                    </h3>
                    <p className="text-slate-200 text-sm max-w-md relative z-10">
                      {language ? service.description.bn : service.description.en}
                    </p>
                  </>
                ) : (
                  <>
                    {/* Icon Container */}
                    {IconComponent && (
                      <motion.div
                        animate={service.animateIcon ? { y: [0, -8, 0] } : undefined}
                        transition={service.animateIcon ? { repeat: Infinity, duration: 3, ease: "easeInOut" } : undefined}
                        whileHover={!service.animateIcon ? { rotate: [0, -10, 10, 0] } : undefined}
                        className={`relative z-20 flex items-center justify-center border border-white/20 shadow-lg shadow-black/30 backdrop-blur-md ${
                          service.id === 1
                            ? "w-16 h-16 rounded-2xl bg-white/10 p-[2px]"
                            : service.id === 3
                            ? "w-14 h-14 shrink-0 rounded-2xl bg-white/10 group-hover:scale-110 transition-transform duration-300"
                            : service.id === 2
                            ? "w-14 h-14 rounded-2xl bg-white/10"
                            : "w-10 h-10 mb-4 bg-transparent border-none shadow-none"
                        }`}
                      >
                        {service.id === 1 ? (
                          <div className="w-full h-full rounded-[14px] flex items-center justify-center">
                            <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                          </div>
                        ) : (
                          <IconComponent
                            className={`${
                              service.id >= 4 ? "w-10 h-10 drop-shadow-md group-hover:-translate-y-1 transition-transform duration-300" : "w-7 h-7"
                            } ${service.iconColor}`}
                          />
                        )}
                      </motion.div>
                    )}

                    {/* Text Details */}
                    <div className={`relative z-20 ${service.id === 1 || service.id === 2 ? "mt-8" : ""}`}>
                      <h3
                        className={`font-bold text-white mb-2 transition-colors duration-300 drop-shadow-md ${
                          service.id === 1
                            ? "text-3xl md:text-4xl font-extrabold group-hover:text-cyan-400 mb-4"
                            : service.id === 2
                            ? "text-2xl group-hover:text-indigo-400 mb-3"
                            : service.id === 3
                            ? "text-2xl group-hover:text-rose-400"
                            : service.id === 4
                            ? "text-xl group-hover:text-green-400"
                            : "text-xl group-hover:text-fuchsia-400"
                        }`}
                      >
                        {language ? service.title.bn : service.title.en}
                      </h3>
                      <p
                        className={`text-slate-200 drop-shadow ${
                          service.id === 1
                            ? "text-lg leading-relaxed max-w-lg"
                            : service.id === 3
                            ? "max-w-md"
                            : service.id >= 4
                            ? "text-sm text-slate-300"
                            : ""
                        }`}
                      >
                        {language ? service.description.bn : service.description.en}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}