// File Path: src/app/components/shared/Hero.tsx

"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // ✅ Language Context ইম্পোর্ট করা হয়েছে

// Spline Model Dynamic Import (SSR False)
// এটি সার্ভারে রেন্ডার হবে না, শুধু ক্লায়েন্টে লোড হবে
const SplineModel = dynamic(() => import("./SplineModel"), {
  ssr: false,
  loading: () => null, 
});

export function Hero() {
  const { language } = useLanguage(); // ✅ ল্যাঙ্গুয়েজ হুক ব্যবহার করা হয়েছে
  
  // ডিফল্ট false রাখুন। এর মানে সার্ভার এবং প্রথম লোডে সবসময় "ইমেজ" দেখাবে।
  // এতে Hydration Mismatch হওয়ার কোনো সুযোগই নেই।
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    // এই কোড শুধুমাত্র ব্রাউজারে রান হবে
    const checkScreen = () => {
      // ১০২৪ পিক্সেলের বেশি হলে আমরা 3D মুড অন করব
      if (window.innerWidth > 1024) {
        // একটু ডিলে দিয়ে 3D আনব যাতে সাইট আগে লোড হয়ে যায় (Performance Hack)
        setTimeout(() => {
          setShow3D(true);
        }, 1000);
      }
    };

    checkScreen();
    
    // রিসাইজ হ্যান্ডলার
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth > 1024) {
          setShow3D(true);
        } else {
          setShow3D(false);
        }
      }, 500);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-background py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Left Text Section */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left z-10">
            <div className="space-y-4">
              <h1 className="text-4xl p-2 font-bold tracking-tighter sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500 dark:from-blue-400 dark:to-orange-400">
                {language ? (
                  <>আমরা তৈরি করি <br/> ডিজিটাল অভিজ্ঞতা</>
                ) : (
                  <>We Build <br/> Digital Experience</>
                )}
              </h1>
              
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto lg:mx-0">
                {language
                  ? "আপনার ব্যবসার জন্য আমরা তৈরি করি আধুনিক ওয়েবসাইট, অ্যাপ এবং ব্র্যান্ড আইডেন্টিটি। Pixel & Code এর সাথে আপনার ডিজিটাল যাত্রা শুরু করুন।"
                  : "We create modern websites, apps, and brand identities for your business. Start your digital journey with Pixel & Code."}
              </p>
            </div>
            
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contact">
                  {language ? "প্রজেক্ট শুরু করুন" : "Start Project"} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">
                  {language ? "আমাদের কাজ দেখুন" : "View Our Work"}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative h-[350px] md:h-[500px] w-full flex items-center justify-center lg:order-last order-first overflow-hidden">
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-orange-50 dark:from-slate-900 dark:to-slate-900 rounded-full blur-3xl opacity-30 -z-10" />
            
            {/* --- HYDRATION SAFE LOGIC --- */}
            {/* ১. show3D সত্য হলে Spline দেখাবে (শুধুমাত্র Desktop এ ১ সেকেন্ড পর) */}
            {/* ২. show3D মিথ্যা হলে Image দেখাবে (Server + Mobile + Initial Load) */}
            
            {show3D ? (
               <div className="relative w-full p-2 h-full animate-in fade-in duration-1000">
                 <SplineModel
                   scene="https://prod.spline.design/EyT5-iTgphWIpH2g/scene.splinecode"
                   className="w-full h-full"
                 />
                 {/* Logo Remover */}
                 <div className="absolute bottom-2 right-2 w-[160px] h-[60px] bg-background z-50 pointer-events-none select-none"></div>
               </div>
            ) : (
               // এই অংশটি সার্ভার এবং ক্লায়েন্ট উভয়েই প্রথমে রেন্ডার হবে। তাই এরর আসবে না।
               <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
                  <Image 
                    src="/logo-01.svg" 
                    alt="Hero Visual"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority={true} // LCP ফিক্স
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
               </div>
            )}

            {/* Floating Badge */}
            <div className="absolute top-10 right-4 md:right-10 z-30 animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl dark:bg-black/20 dark:border-white/10">
                <div className="bg-white/90 dark:bg-white/10 p-1.5 rounded-full shadow-sm">
                    <Image 
                      src="/logo-01.svg" 
                      alt="Pixel & Code Logo" 
                      width={24} 
                      height={24} 
                      className="w-6 h-6 object-contain"
                    />
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
                      {language ? "এজেন্সি" : "Agency"}
                    </p>
                    <p className="text-sm font-bold text-blue-600 dark:text-blue-400 leading-none">Pixel & Code</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}