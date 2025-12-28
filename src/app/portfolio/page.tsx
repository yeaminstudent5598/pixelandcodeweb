"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Layers, Layout, Monitor, Smartphone, Palette } from "lucide-react";

// ==========================================
// 📂 পোর্টফোলিও ডেটা (Updated with ParcelGo)
// ==========================================
const portfolioItems = [
  {
    id: 1,
    category: "Web Design",
    titleBn: "পার্সেলগো - ডেলিভারি প্ল্যাটফর্ম",
    titleEn: "ParcelGo - Logistics System",
    descBn: "রিয়েল-টাইম ট্র্যাকিং সহ আধুনিক ডেলিভারি ম্যানেজমেন্ট সলিউশন।",
    descEn: "Modern delivery management solution with real-time tracking.",
    imgSrc: "https://i.ibb.co.com/QvrNtWZp/parcel-go-vercel-app-1.png", // Full Page Screenshot
    link: "https://parcel-go.vercel.app/",
  },
  {
    id: 2,
    category: "Web Design",
    titleBn: "গুপ্তধন মাল্টি-ভেন্ডর",
    titleEn: "Guptodhan Marketplace",
    descBn: "বিশাল পরিসরের মাল্টি-ভেন্ডর ই-কমার্স প্ল্যাটফর্ম।",
    descEn: "Large scale multi-vendor e-commerce platform.",
    imgSrc: "https://i.ibb.co.com/PG8vqsBb/www-guptodhandigital-com-3.png",
    link: "https://guptodhandigital.com",
  },
  {
    id: 3,
    category: "Web Design",
    titleBn: "পরের বাজার বিডি",
    titleEn: "PorerbazarBD Organic",
    descBn: "প্রিমিয়াম অর্গানিক ফুড এবং গ্রোসারি শপ।",
    descEn: "Premium organic food and grocery shop.",
    imgSrc: "https://i.ibb.co.com/ycy6z49g/porerbarazbd-vercel-app.jpg",
    link: "https://porerbarazbd.vercel.app/",
  },
  {
    id: 4,
    category: "Graphics",
    titleBn: "সোশ্যাল মিডিয়া ব্র্যান্ডিং",
    titleEn: "Social Media Branding",
    descBn: "ক্রিয়েটিভ সোশ্যাল মিডিয়া ডিজাইন সেট।",
    descEn: "Creative social media design set.",
    imgSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 5,
    category: "Web Design",
    titleBn: "ফ্রেশ গ্রোসারি স্টোর",
    titleEn: "Fresh Grocery Store",
    descBn: "আধুনিক ইউজার ইন্টারফেস সহ ফ্রেশ ফুড শপ।",
    descEn: "Fresh food store with modern UI.",
    imgSrc: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
    link: "https://pro-ecommerce-iota.vercel.app/",
  },
  {
    id: 6,
    category: "Marketing",
    titleBn: "ডিজিটাল মার্কেটিং ক্যাম্পেইন",
    titleEn: "Digital Ad Campaign",
    descBn: "টার্গেটেড সেলস জেনারেটিং ক্যাম্পেইন।",
    descEn: "Targeted sales generating campaign.",
    imgSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    link: "#",
  }
];

const categories = ["All", "Web Design", "Graphics", "Marketing"];

export default function PortfolioPage() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] transition-colors duration-300">
      
      {/* =======================
          HERO SECTION (Advanced)
      ======================== */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 opacity-40 dark:opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-blue-400 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-purple-400 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
              {language ? 'প্রজেক্ট গ্যালারি' : 'Project Gallery'}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight"
          >
            {language ? (
              <>আমাদের সেরা <span className="text-blue-600">কাজগুলো</span></>
            ) : (
              <>Our Creative <span className="text-blue-600">Portfolio</span></>
            )}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12"
          >
            {language 
              ? 'আমরা শুধু ওয়েবসাইট বানাই না, আমরা আপনার ব্যবসার জন্য একটি ডিজিটাল পরিচয় তৈরি করি।' 
              : 'We don’t just build websites; we build digital identities for your business.'}
          </motion.p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, idx) => (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border shadow-sm ${
                  activeFilter === category
                    ? "bg-blue-600 text-white border-blue-600 shadow-blue-500/20 scale-105"
                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-400 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800"
                }`}
              >
                {category === "All" ? (language ? "সবগুলো" : "All Projects") : category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* =======================
          PORTFOLIO GRID
      ======================== */}
      <section className="pb-32 px-4">
        <div className="container mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group"
                >
                  <div className="relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-4 border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                    
                    {/* Browser Mockup Container */}
                    <div className="relative h-[450px] w-full overflow-hidden rounded-[1.8rem] bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                        {/* Browser Dot Header */}
                        <div className="absolute top-0 left-0 w-full h-10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-20 flex items-center px-5 gap-2 border-b border-slate-100 dark:border-slate-800">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="ml-4 h-5 bg-slate-100 dark:bg-slate-800 rounded px-3 text-[10px] text-slate-400 flex items-center flex-1 max-w-[200px] truncate">
                                {item.link}
                            </div>
                        </div>

                        {/* Image Auto-Scroll Logic */}
                        <div className="relative w-full h-full pt-10 group-hover:cursor-pointer">
                            <div className="w-full h-full overflow-hidden relative">
                                <Image
                                  src={item.imgSrc}
                                  alt={item.titleEn}
                                  width={1000}
                                  height={2000}
                                  className="w-full h-auto transition-transform duration-[4000ms] ease-in-out transform translate-y-0 group-hover:-translate-y-[calc(100%-410px)]"
                                />
                            </div>
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-500 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="mt-8 px-4 pb-4">
                        <div className="flex items-center justify-between mb-4">
                            <span className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                {item.category}
                            </span>
                            <Link href={item.link} target="_blank" className="h-12 w-12 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 transition-transform hover:rotate-45">
                                <ArrowUpRight className="w-6 h-6" />
                            </Link>
                        </div>
                        
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
                           {language ? item.titleBn : item.titleEn}
                        </h3>
                        
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-md">
                           {language ? item.descBn : item.descEn}
                        </p>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* =======================
          CTA SECTION
      ======================== */}
      <section className="container mx-auto px-4 mb-20">
          <div className="relative bg-blue-600 rounded-[3rem] p-12 md:p-20 overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">
                {language ? 'পরবর্তী প্রজেক্ট শুরু করতে প্রস্তুত?' : 'Ready to start your next project?'}
              </h2>
              <p className="text-blue-100 mb-10 text-lg max-w-xl mx-auto relative z-10">
                {language 
                  ? 'আপনার আইডিয়া আমাদের জানান, আমরা সেটাকে বাস্তবে রূপ দেব।' 
                  : 'Tell us your idea, and we will turn it into reality.'}
              </p>
              <Link href="/contact" className="inline-block px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl relative z-10">
                {language ? 'কোটেশন নিন' : 'Get a Quote'}
              </Link>
          </div>
      </section>

    </main>
  );
}