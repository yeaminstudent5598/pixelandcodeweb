'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { products } from '@/lib/storeData';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, ExternalLink, ArrowLeft, Layers, 
  ShieldCheck, Zap, Star, MousePointer2 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BuyNowModal } from '../BuyNowModal';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductDetailsPage() {
  const params = useParams();
  const { language } = useLanguage(); 

  // প্রোডাক্ট খুঁজে বের করা
  const product = products.find((p) => p.id === params?.id);

  if (!product) {
    return notFound();
  }

  const title = language ? product.titleBn : product.titleEn;
  const description = language ? product.shortDescriptionBn : product.shortDescriptionEn;
  const features = (language ? product.featuresBn : product.featuresEn) || [];
  const category = language ? product.categoryBn : product.categoryEn;

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <main className="min-h-screen bg-[#FDFEFF] dark:bg-[#030712] py-12 md:py-16 transition-colors duration-300">
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Navigation & Badge */}
        <div className="flex items-center justify-between mb-8">
            <Link 
              href="/store" 
              className="inline-flex items-center px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-500 hover:text-blue-600 transition-all shadow-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> {language ? 'ফিরে যান' : 'Back'}
            </Link>
            
            <div className="flex items-center gap-2 text-blue-600 bg-blue-50 dark:bg-blue-900/10 px-4 py-2 rounded-full border border-blue-100 dark:border-blue-900/30">
                <Zap className="w-4 h-4 fill-current" />
                <span className="text-[10px] font-black tracking-widest uppercase">Premium Solution</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT: VISUAL SHOWCASE (Laptop + App) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Dual Device Mockup */}
            <div className="relative pt-6 pr-6 md:pr-12">
                {/* Laptop Display */}
                <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden z-10">
                    <div className="h-7 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center px-4 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                    </div>
                    <div className="relative aspect-video w-full">
                        <Image src={product.image} alt="Desktop Preview" fill className="object-cover object-top" priority />
                    </div>
                </div>

                {/* Mobile App Preview (Floating) */}
                {product.appImage && (
                  <div className="absolute -bottom-6 -right-2 md:-right-6 w-[120px] md:w-[180px] aspect-[9/19] bg-slate-900 rounded-[2rem] border-[4px] border-slate-900 shadow-2xl overflow-hidden z-20 ring-4 ring-white dark:ring-[#030712]">
                      <Image src={product.appImage} alt="App Preview" fill className="object-cover" />
                      {/* Notch Effect */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-slate-900 rounded-b-lg z-30"></div>
                  </div>
                )}
            </div>

            {/* Tech Stack List */}
            <div className="flex flex-wrap gap-2">
                {product.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-[11px] font-bold text-slate-600 dark:text-slate-400">
                    {tech}
                  </span>
                ))}
            </div>

            {/* Scroll Preview */}
            {product.fullImage && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
                <h3 className="text-sm font-bold flex items-center gap-2 mb-4">
                   <Layers className="h-4 w-4 text-blue-600" /> {language ? 'সম্পূর্ণ ডিজাইন' : 'Full Page Layout'}
                </h3>
                <div className="relative h-[400px] overflow-y-auto rounded-lg border border-slate-100 dark:border-slate-800 custom-scrollbar">
                   <Image src={product.fullImage} alt="Full Page" width={1000} height={4000} className="w-full h-auto" />
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: PRICING & DETAILS */}
          <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                      {category}
                    </span>
                    <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-4 mb-4">
                      {title}
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                      {description}
                    </p>

                    <div className="flex items-end gap-3 mb-8">
                        <span className="text-4xl font-black">৳{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-base text-slate-400 line-through font-medium mb-1">
                            ৳{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                    </div>

                    <div className="space-y-3">
                        <BuyNowModal productName={title} price={product.price} />
                        <Button asChild variant="outline" className="w-full h-12 rounded-xl border-2 font-bold">
                           <a href={product.livePreviewUrl} target="_blank" rel="noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" /> {language ? 'লাইভ ডেমো' : 'Live Demo'}
                           </a>
                        </Button>
                    </div>

                    {/* Features List */}
                    <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 space-y-3">
                       {features.map((f, i) => (
                         <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" /> {f}
                         </div>
                       ))}
                    </div>
                </div>

                {/* Secure Badge */}
                <div className="flex items-center gap-3 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <ShieldCheck className="text-blue-600" />
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                      {language ? '১০০% নিরাপদ ডেলিভারি ও সাপোর্ট' : '100% Secure Delivery & Support'}
                    </span>
                </div>
              </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: #1e293b; }
      `}</style>
    </main>
  );
}