// src/app/components/packages/PackagesClient.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { packageData } from "@/lib/packagesData";

export function PackagesClient() {
  const [isYearly, setIsYearly] = useState(false);
  const { language } = useLanguage();

  const renderCards = (serviceType: keyof typeof packageData) => {
    const packages = isYearly ? packageData[serviceType].yearly : packageData[serviceType].monthly;

    return (
      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {packages.map((pkg, idx) => {
          const name = language ? pkg.nameBn : pkg.nameEn;
          const features = language ? pkg.featuresBn : pkg.featuresEn;
          const durationText = isYearly ? (language ? 'বছর' : 'yr') : (language ? 'মাস' : 'mo');
          const popularText = language ? 'জনপ্রিয়' : 'POPULAR';
          const btnText = language ? 'প্যাকেজটি কিনুন' : 'Purchase Package';

          return (
            <Card key={idx} className={cn("flex flex-col shadow-lg bg-white dark:bg-gray-900 dark:border-gray-800 transition-transform duration-300 hover:-translate-y-1", pkg.popular && "border-2 border-blue-500 dark:border-blue-500 relative")}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-1 text-xs font-bold text-white flex items-center gap-1 shadow-md">
                  <Star className="h-3 w-3 fill-white" /> {popularText}
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold dark:text-white">{name}</CardTitle>
                <CardDescription className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mt-2">
                  ${pkg.price.toLocaleString()}
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/{durationText}</span>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow pt-4">
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="mt-0.5 rounded-full bg-green-100 dark:bg-green-900/30 p-1">
                        <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pb-8">
                <Button asChild size="lg" className={cn("w-full text-white font-semibold shadow-md", pkg.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600")}>
                  <Link href={`/payment?service=${serviceType}&name=${pkg.nameEn}&price=${pkg.price}&billing=${isYearly ? 'yearly' : 'monthly'}`}>
                    {btnText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl tracking-tight mb-4">
          {language ? 'আমাদের সার্ভিস প্যাকেজসমূহ' : 'Our Service Packages'}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {language 
            ? 'আপনার ব্যবসার জন্য সঠিক ও সাশ্রয়ী প্যাকেজটি বেছে নিন।' 
            : 'Choose the right and affordable package for your business.'}
        </p>
      </div>

      {/* Monthly/Yearly Toggle */}
      <div className="mb-12 flex items-center justify-center space-x-4 bg-white dark:bg-gray-900 inline-flex mx-auto p-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-800">
        <Label htmlFor="billing-cycle" className={cn("font-semibold cursor-pointer px-4 py-2 rounded-full transition-all", !isYearly ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400")}>
          {language ? 'মাসিক' : 'Monthly'}
        </Label>
        <Switch id="billing-cycle" checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-blue-600" />
        <Label htmlFor="billing-cycle" className={cn("font-semibold cursor-pointer px-4 py-2 rounded-full transition-all", isYearly ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400")}>
          {language ? 'বাৎসরিক (১০% ছাড়)' : 'Yearly (10% Save)'}
        </Label>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="facebook" className="w-full">
        <TabsList className="mx-auto flex flex-wrap w-full max-w-3xl justify-center gap-2 bg-transparent h-auto mb-8">
          <TabsTrigger value="facebook" className="rounded-full px-6 py-2.5 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
            {language ? 'ফেসবুক এড' : 'Facebook Ads'}
          </TabsTrigger>
          <TabsTrigger value="website" className="rounded-full px-6 py-2.5 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
            {language ? 'ওয়েবসাইট' : 'Website'}
          </TabsTrigger>
          <TabsTrigger value="graphics" className="rounded-full px-6 py-2.5 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
            {language ? 'গ্রাফিক্স ডিজাইন' : 'Graphics Design'}
          </TabsTrigger>
          <TabsTrigger value="video" className="rounded-full px-6 py-2.5 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
            {language ? 'ভিডিও এডিটিং' : 'Video Editing'}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="facebook">{renderCards("facebook")}</TabsContent>
        <TabsContent value="website">{renderCards("website")}</TabsContent>
        <TabsContent value="graphics">{renderCards("graphics")}</TabsContent>
        <TabsContent value="video">{renderCards("video")}</TabsContent>
      </Tabs>
    </div>
  );
}