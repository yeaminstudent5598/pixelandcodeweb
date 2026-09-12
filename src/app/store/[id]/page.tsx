<<<<<<< HEAD
'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { products } from '@/lib/storeData';
import { 
  CheckCircle2, ExternalLink, ArrowLeft, Layers, 
  ShieldCheck, Zap 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BuyNowModal } from '../BuyNowModal';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function ProductDetailsPage() {
  const params = useParams();
  const { language } = useLanguage(); 

  // প্রোডাক্ট খুঁজে বের করা
  const product = products.find((p) => p.id === params?.id);
=======
// src/app/store/[id]/page.tsx
import { products } from '@/lib/storeData';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BuyNowModal } from '../BuyNowModal';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailsPage(props: Props) {
  const params = await props.params;
  const product = products.find((p) => p.id === params.id);
>>>>>>> origin/development

  if (!product) {
    return notFound();
  }

<<<<<<< HEAD
  const title = language ? product.titleBn : product.titleEn;
  const description = language ? product.shortDescriptionBn : product.shortDescriptionEn;
  const features = (language ? product.featuresBn : product.featuresEn) || [];
  const category = language ? product.categoryBn : product.categoryEn;

  return (
    <main 
      className="relative min-h-screen py-12 md:py-24 overflow-hidden z-0"
      style={{ 
        backgroundColor: '#060606',
        backgroundImage: `linear-gradient(rgba(249,115,22,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,.03) 1px, transparent 1px)`,
        backgroundSize: '56px 56px'
      }}
    >
      {/* ==========================================
          BACKGROUND 3D AMBIENCE
      ========================================== */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* ==========================================
            Top Navigation & Badge
        ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8 md:mb-12"
        >
            <Link 
              href="/store" 
              className="inline-flex items-center px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm font-bold text-[#9ca3af] hover:text-[#f97316] hover:border-orange-500/40 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md"
              style={{ color: '#9ca3af' }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> {language ? 'ফিরে যান' : 'Back'}
            </Link>
            
            <div className="flex items-center gap-2 text-orange-400 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.15)] backdrop-blur-md">
                <Zap className="w-4 h-4 fill-current" />
                <span className="text-[10px] font-black tracking-widest uppercase">Premium Solution</span>
            </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* ==========================================
              LEFT: VISUAL SHOWCASE (Laptop + App)
          ========================================== */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-10"
          >
            
            {/* Dual Device Mockup */}
            <div className="relative pt-6 pr-6 md:pr-12">
                {/* Laptop Display */}
                <div className="relative rounded-2xl border border-[#333333] bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-10 group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"></div>
                    {/* Browser Header */}
                    <div className="h-8 bg-[#111111] border-b border-[#222222] flex items-center px-4 gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]"></div>
                    </div>
                    <div className="relative aspect-video w-full">
                        <Image src={product.image} alt="Desktop Preview" fill className="object-cover object-top" priority />
                    </div>
                </div>

                {/* Mobile App Preview (Floating) */}
                {product.appImage && (
                  <motion.div 
                    animate={{ y: ["-5px", "5px"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    className="absolute -bottom-6 -right-2 md:-right-6 w-[120px] md:w-[180px] aspect-[9/19] bg-[#060606] rounded-[2rem] border-[4px] border-[#111111] shadow-[0_20px_40px_rgba(0,0,0,0.9)] overflow-hidden z-30 ring-4 ring-[#222222]"
                  >
                      <Image src={product.appImage} alt="App Preview" fill className="object-cover" />
                      {/* Notch Effect */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#111111] rounded-b-xl z-40"></div>
                  </motion.div>
                )}
            </div>

            {/* Tech Stack List */}
            <div className="flex flex-wrap gap-2 pt-4">
                {product.techStack.map(tech => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] rounded-xl text-[12px] font-bold text-[#d1d5db] hover:border-orange-500/40 hover:text-orange-400 hover:bg-white/[0.04] transition-all duration-300 shadow-sm cursor-default"
                    style={{ color: '#d1d5db' }}
                  >
                    {tech}
                  </span>
                ))}
            </div>

            {/* Full Layout Scroll Preview */}
            {product.fullImage && (
              <div className="bg-[#111111]/80 backdrop-blur-md rounded-[2rem] p-6 md:p-8 border border-[#222222] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
                <h3 className="text-sm font-bold flex items-center gap-2 mb-6 text-[#ffffff]" style={{ color: '#ffffff' }}>
                   <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                     <Layers className="h-4 w-4 text-orange-500" />
                   </div>
                   {language ? 'সম্পূর্ণ ডিজাইন' : 'Full Page Layout'}
                </h3>
                <div className="relative h-[450px] overflow-y-auto rounded-xl border border-[#333333] custom-scrollbar shadow-inner bg-[#0a0a0a]">
                   <Image src={product.fullImage} alt="Full Page" width={1000} height={4000} className="w-full h-auto" />
                </div>
              </div>
            )}
          </motion.div>

          {/* ==========================================
              RIGHT: PRICING & DETAILS
          ========================================== */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5"
          >
              <div className="sticky top-24 space-y-6">
                <div className="bg-[#111111]/90 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-[#222222] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden group">
                    
                    {/* Inner Glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/20 transition-all duration-500"></div>

                    <span className="inline-block text-[10px] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 uppercase tracking-widest bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20 mb-2 relative z-10">
                      {category}
                    </span>
                    
                    <h1 className="text-3xl md:text-4xl font-black mt-4 mb-4 text-[#ffffff] leading-tight relative z-10" style={{ color: '#ffffff' }}>
                      {title}
                    </h1>
                    
                    <p className="text-sm font-medium leading-relaxed mb-8 text-[#9ca3af] relative z-10" style={{ color: '#9ca3af' }}>
                      {description}
                    </p>

                    {/* Price Tag */}
                    <div className="flex items-end gap-3 mb-8 relative z-10">
                        <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">৳{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through font-bold mb-1.5" style={{ color: '#6b7280' }}>
                            ৳{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="space-y-4 relative z-10">
                        <BuyNowModal productName={title} price={product.price} />
                        
                        <a 
                          href={product.livePreviewUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full flex items-center justify-center h-14 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#ffffff] font-bold hover:bg-white/[0.06] hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-300"
                          style={{ color: '#ffffff' }}
                        >
                           <ExternalLink className="mr-2 h-5 w-5 text-orange-400" /> {language ? 'লাইভ ডেমো' : 'Live Demo'}
                        </a>
                    </div>

                    {/* Features List */}
                    <div className="mt-8 pt-8 border-t border-[#333333] space-y-4 relative z-10">
                       {features.map((f, i) => (
                         <div key={i} className="flex items-start gap-3 text-sm font-bold text-[#d1d5db]" style={{ color: '#d1d5db' }}>
                            <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" /> 
                            <span className="leading-snug">{f}</span>
                         </div>
                       ))}
                    </div>
                </div>

                {/* Secure Badge */}
                <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-[2rem] border border-orange-500/30 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(249,115,22,0.3)] hover:border-orange-500/50 transition-colors duration-300">
                    <div className="p-3 bg-orange-500/20 rounded-xl">
                      <ShieldCheck className="text-orange-400 w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-[#fb923c]" style={{ color: '#fb923c' }}>
                      {language ? '১০০% নিরাপদ ডেলিভারি ও সাপোর্ট' : '100% Secure Delivery & Support'}
                    </span>
                </div>
              </div>
          </motion.div>

        </div>
      </div>

      {/* Global Styles for Scrollbar specific to this component */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #0a0a0a; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333333; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f97316; }
      `}</style>
=======
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 py-12 md:py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Link 
          href="/store" 
          className="mb-6 inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Store
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image Section - রেসপন্সিভ অ্যাসপেক্ট রেশিও */}
          <div className="w-full">
             <div className="relative aspect-video w-full overflow-hidden rounded-2xl border dark:border-gray-800 bg-gray-100 dark:bg-gray-900 shadow-sm">
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-xl font-bold text-gray-300 dark:text-gray-700">No Image</span>
                  </div>
                )}
             </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                {product.category}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  ৳{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* ফন্ট সাইজ রেসপন্সিভ করা হয়েছে */}
            <h1 className="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
              {product.title}
            </h1>
            <p className="mb-5 text-2xl font-bold text-blue-600 dark:text-blue-400 sm:text-3xl">
              ৳{product.price.toLocaleString()}
            </p>

            <p className="mb-6 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.shortDescription} এই ওয়েবসাইটটি সম্পূর্ণ রেডিমেড এবং আপনার ব্যবসার জন্য প্রস্তুত। এটি ব্যবহার করে আপনি আজই আপনার অনলাইন ব্যবসা শুরু করতে পারেন।
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Technology Used</h3>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((tech) => (
                  <span key={tech} className="rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="mb-8 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-5">
              <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Key Features</h3>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions - ফিক্সড লেআউট */}
            <div className="mt-auto flex flex-col gap-3 sm:flex-row">
              
              {/* Buy Now Modal - সমান জায়গা নিবে */}
              <div className="flex-1">
                <BuyNowModal productName={product.title} price={product.price} />
              </div>

              {/* Live Preview Button - সাইজ ঠিক করা হয়েছে */}
              <Button 
                size="lg" 
                variant="outline" 
                className="flex-1 rounded-full border-2 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 text-base font-semibold" 
                asChild
              >
                <a href={product.livePreviewUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Preview
                </a>
              </Button>
            </div>
            
            <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
              Secure Payment • Instant Delivery • 24/7 Support
            </p>
          </div>
        </div>
      </div>
>>>>>>> origin/development
    </main>
  );
}