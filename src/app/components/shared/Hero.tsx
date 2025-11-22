"use client";

import React from "react";
import SplineModel from "./SplineModel";
import Link from "next/link";
import Image from "next/image"; // Image component import kora holo
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Left Text Section */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left z-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500 dark:from-blue-400 dark:to-orange-400">
                We Build <br/> Digital Experience
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mx-auto lg:mx-0">
                আপনার ব্যবসার জন্য আমরা তৈরি করি আধুনিক ওয়েবসাইট, অ্যাপ এবং ব্র্যান্ড আইডেন্টিটি। Pixel & Code এর সাথে আপনার ডিজিটাল যাত্রা শুরু করুন।
              </p>
            </div>
            
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contact">
                  প্রজেক্ট শুরু করুন <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">
                  আমাদের কাজ দেখুন
                </Link>
              </Button>
            </div>
          </div>

          {/* Right 3D Robot Section */}
          <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center lg:order-last order-first overflow-hidden">
            
            {/* Background Gradient/Blur Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-orange-50 dark:from-slate-900 dark:to-slate-900 rounded-full blur-3xl opacity-30 -z-10" />
            
            <SplineModel
              scene="https://prod.spline.design/EyT5-iTgphWIpH2g/scene.splinecode"
              className="w-full h-full"
            />

            {/* --- LOGO REMOVER HACK --- */}
            <div className="absolute bottom-0 right-0 w-[180px] h-[90px] bg-background z-20 pointer-events-none"></div>

            {/* --- FLOATING BADGE WITH CUSTOM LOGO --- */}
            <div className="absolute top-10 right-4 md:right-10 z-30 animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl dark:bg-black/20 dark:border-white/10">
                
                {/* Logo Container */}
                <div className="bg-white/90 dark:bg-white/10 p-1.5 rounded-full shadow-sm">
                    <Image 
                      src="/logo-01.svg" 
                      alt="Pixel & Code Logo" 
                      width={24} 
                      height={24} 
                      className="w-6 h-6 object-contain"
                    />
                </div>

                {/* Text Info */}
                <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">Agency</p>
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