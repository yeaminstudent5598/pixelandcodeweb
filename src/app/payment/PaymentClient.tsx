// src/app/components/payment/PaymentClient.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Lock, Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

// একদম ফুল ডাটা (Facebook, Website, Graphics, Video - সব আছে এখানে)
const allPackagesData = [
  {
    categoryBn: "ফেসবুক এড ক্যাম্পেইন", 
    categoryEn: "Facebook Ad Campaign",
    packages: [
      { id: "fb_silver", nameBn: "সিলভার প্যাকেজ", nameEn: "Silver Package", featuresBn: ["$20 Ad Credit", "৭ দিন ক্যাম্পেইন", "১০-৪০ হাজার রিচ"], featuresEn: ["$20 Ad Credit", "7 Days Campaign", "10k-40k Reach"], pricingBn: { monthly: 3000, yearly: 32000 }, pricingEn: { monthly: 29, yearly: 319 } },
      { id: "fb_gold", nameBn: "গোল্ড প্যাকেজ", nameEn: "Gold Package", featuresBn: ["$30 Ad Credit", "১০ দিন ক্যাম্পেইন", "২০-৬০ হাজার রিচ"], featuresEn: ["$30 Ad Credit", "10 Days Campaign", "20k-60k Reach"], pricingBn: { monthly: 4500, yearly: 48000 }, pricingEn: { monthly: 45, yearly: 479 } },
      { id: "fb_diamond", nameBn: "ডায়মন্ড প্যাকেজ", nameEn: "Diamond Package", featuresBn: ["$50 Ad Credit", "১৫ দিন ক্যাম্পেইন", "৫০-১০০ হাজার রিচ"], featuresEn: ["$50 Ad Credit", "15 Days Campaign", "50k-100k Reach"], pricingBn: { monthly: 7500, yearly: 80000 }, pricingEn: { monthly: 75, yearly: 799 } },
    ]
  },
  {
    categoryBn: "ওয়েবসাইট ডেভেলপমেন্ট", 
    categoryEn: "Website Development",
    packages: [
      { id: "web_basic", nameBn: "বেসিক ওয়েবসাইট", nameEn: "Basic Website", featuresBn: ["৫ পেইজ ওয়েবসাইট", "রেসপন্সিভ ডিজাইন", "ফ্রি ডোমেইন ও হোস্টিং"], featuresEn: ["5 Pages Website", "Responsive Design", "Free Domain & Hosting"], pricingBn: { monthly: 15000, yearly: 150000 }, pricingEn: { monthly: 149, yearly: 1490 } },
      { id: "web_standard", nameBn: "স্ট্যান্ডার্ড ওয়েবসাইট", nameEn: "Standard Website", featuresBn: ["১০ পেইজ ওয়েবসাইট", "ই-কমার্স ফাংশনালিটি", "পেমেন্ট গেটওয়ে"], featuresEn: ["10 Pages Website", "E-commerce Functionality", "Payment Gateway"], pricingBn: { monthly: 30000, yearly: 320000 }, pricingEn: { monthly: 299, yearly: 3190 } },
      { id: "web_premium", nameBn: "প্রিমিয়াম ওয়েবসাইট", nameEn: "Premium Website", featuresBn: ["আনলিমিটেড পেইজ", "কাস্টম ফিচার", "ডেডিকেটেড সাপোর্ট"], featuresEn: ["Unlimited Pages", "Custom Features", "Dedicated Support"], pricingBn: { monthly: 50000, yearly: 550000 }, pricingEn: { monthly: 499, yearly: 5490 } },
    ]
  },
  {
    categoryBn: "গ্রাফিক্স ডিজাইন", 
    categoryEn: "Graphics Design",
    packages: [
      { id: "gfx_bronze", nameBn: "ব্রোঞ্জ ডিজাইন", nameEn: "Bronze Design", featuresBn: ["৮টি সোশ্যাল মিডিয়া পোস্ট", "সপ্তাহে ২টি পোস্ট ডিজাইন", "প্রতি ডিজাইনে ১টি রিভিশন"], featuresEn: ["8 Social Media Posts", "2 Post Designs/Week", "1 Revision/Design"], pricingBn: { monthly: 3200, yearly: 35000 }, pricingEn: { monthly: 29, yearly: 299 } },
      { id: "gfx_silver", nameBn: "সিলভার ডিজাইন", nameEn: "Silver Design", featuresBn: ["১৬টি সোশ্যাল মিডিয়া পোস্ট", "সপ্তাহে ৪টি পোস্ট ডিজাইন", "প্রিমিয়াম ছবি ও ফন্ট"], featuresEn: ["16 Social Media Posts", "4 Post Designs/Week", "Premium Assets"], pricingBn: { monthly: 6200, yearly: 68000 }, pricingEn: { monthly: 59, yearly: 599 } },
      { id: "gfx_gold", nameBn: "গোল্ড ডিজাইন", nameEn: "Gold Design", featuresBn: ["২৪টি সোশ্যাল মিডিয়া পোস্ট", "সপ্তাহে ৬টি পোস্ট ডিজাইন", "প্রিমিয়াম ছবি ও ফন্ট"], featuresEn: ["24 Social Media Posts", "6 Post Designs/Week", "Premium Assets"], pricingBn: { monthly: 8500, yearly: 93000 }, pricingEn: { monthly: 79, yearly: 799 } },
    ]
  },
  {
    categoryBn: "ভিডিও এডিটিং", 
    categoryEn: "Video Editing",
    packages: [
      { id: "vid_basic", nameBn: "বেসিক ভিডিও", nameEn: "Basic Video", featuresBn: ["২টি রিলস/শর্টস ভিডিও", "বেসিক কালার গ্রেডিং", "স্টক ফুটেজ"], featuresEn: ["2 Reels/Shorts", "Basic Color Grading", "Stock Footage"], pricingBn: { monthly: 4000, yearly: 42000 }, pricingEn: { monthly: 39, yearly: 399 } },
      { id: "vid_pro", nameBn: "প্রো ভিডিও", nameEn: "Pro Video", featuresBn: ["৫টি রিলস/শর্টস ভিডিও", "অ্যাডভান্সড ট্রানজিশন", "কপিরাইট ফ্রি মিউজিক"], featuresEn: ["5 Reels/Shorts", "Advanced Transitions", "Royalty-Free Music"], pricingBn: { monthly: 7000, yearly: 75000 }, pricingEn: { monthly: 69, yearly: 699 } },
      { id: "vid_business", nameBn: "বিজনেস ভিডিও", nameEn: "Business Video", featuresBn: ["১০টি রিলস/শর্টস ভিডিও", "মোশন গ্রাফিক্স", "২টি প্রোমোশনাল ভিডিও"], featuresEn: ["10 Reels/Shorts", "Motion Graphics", "2 Promo Videos"], pricingBn: { monthly: 12000, yearly: 130000 }, pricingEn: { monthly: 119, yearly: 1199 } },
    ]
  }
];

const flatPackages = allPackagesData.flatMap((category) => category.packages);

export function PaymentClient() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(flatPackages[0]);
  const { language } = useLanguage(); // true = Bangla (BDT), false = English (USD)

  const handlePackageChange = (packageId: string) => {
    const newPackage = flatPackages.find((p) => p.id === packageId);
    if (newPackage) setSelectedPackage(newPackage);
  };

  const currentPrice = language 
    ? selectedPackage.pricingBn[isYearly ? "yearly" : "monthly"]
    : selectedPackage.pricingEn[isYearly ? "yearly" : "monthly"];
    
  const currencySymbol = language ? "৳" : "$";
  const name = language ? selectedPackage.nameBn : selectedPackage.nameEn;
  const features = language ? selectedPackage.featuresBn : selectedPackage.featuresEn;

  return (
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white md:text-5xl">
          {language ? "পেমেন্ট সম্পন্ন করুন" : "Complete Payment"}
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          {language ? "অনুগ্রহ করে আপনার প্যাকেজটি সিলেক্ট করে নিচের তথ্যগুলো পূরণ করুন।" : "Please select your package and fill in the details below."}
        </p>
      </div>

      {/* Package Selection & Billing Cycle */}
      <div className="mx-auto mb-8 grid max-w-xl grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <Label className="text-lg font-semibold dark:text-gray-300">{language ? "আপনার প্যাকেজটি বেছে নিন" : "Select Your Package"}</Label>
          <Select defaultValue={selectedPackage.id} onValueChange={handlePackageChange}>
            <SelectTrigger className="mt-2 h-12 text-base dark:bg-gray-800 dark:text-white dark:border-gray-700">
              <SelectValue placeholder="Select a package" />
            </SelectTrigger>
            <SelectContent>
              {allPackagesData.map((category) => (
                <SelectGroup key={category.categoryEn}>
                  <SelectLabel className="font-bold text-blue-600 dark:text-blue-400">
                    {language ? category.categoryBn : category.categoryEn}
                  </SelectLabel>
                  {category.packages.map((pkg) => (
                    <SelectItem key={pkg.id} value={pkg.id} className="text-base cursor-pointer">
                      {language ? pkg.nameBn : pkg.nameEn}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex flex-col items-start justify-end">
          <Label className="text-lg font-semibold mb-2 dark:text-gray-300">{language ? "বিলিং সাইকেল" : "Billing Cycle"}</Label>
          <div className="flex items-center space-x-4 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-800 p-2.5">
            <Label className={cn("font-semibold cursor-pointer", !isYearly ? "text-blue-600" : "dark:text-gray-400")} onClick={() => setIsYearly(false)}>
              {language ? "মাসিক" : "Monthly"}
            </Label>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <Label className={cn("font-semibold cursor-pointer", isYearly ? "text-blue-600" : "dark:text-gray-400")} onClick={() => setIsYearly(true)}>
              {language ? "বাৎসরিক" : "Yearly"}
            </Label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Left Column: Form */}
        <div className="lg:col-span-2 mb-40 lg:mb-0">
          <Card className="shadow-lg dark:bg-gray-900 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl dark:text-white">{language ? "পেমেন্ট ডিটেইলস" : "Payment Details"}</CardTitle>
              <CardDescription className="dark:text-gray-400">{language ? "আপনার পছন্দের পেমেন্ট মাধ্যমটি বেছে নিন।" : "Choose your preferred payment method."}</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="mobile" className="w-full">
                <TabsList className="grid w-full grid-cols-2 dark:bg-gray-800">
                  <TabsTrigger value="mobile" className="dark:data-[state=active]:bg-gray-700">{language ? "মোবাইল ব্যাংকিং" : "Mobile Banking (BD)"}</TabsTrigger>
                  <TabsTrigger value="bank" className="dark:data-[state=active]:bg-gray-700">{language ? "ব্যাংক / কার্ড" : "Bank / Card / Int."}</TabsTrigger>
                </TabsList>

                {/* Mobile Banking Tab */}
                <TabsContent value="mobile">
                  <div className="mt-6 text-center">
                    <p className="mb-4 text-gray-600 dark:text-gray-400">{language ? "নিচের নম্বরগুলোতে সেন্ড মানি করুন" : "Send money to the following numbers"}</p>
                    <div className="mb-6 flex justify-center gap-8">
                      <div className="flex flex-col items-center">
                        <Image src="/bkashLogo.svg" alt="Bkash" width={60} height={60} className="rounded-md shadow-sm" />
                        <p className="mt-2 font-bold dark:text-white">+8801641801705</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <Image src="/NagadLogo.svg" alt="Nagad" width={60} height={60} className="rounded-md shadow-sm" />
                        <p className="mt-2 font-bold dark:text-white">+8801641801705</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Bank / Card / International Tab */}
                <TabsContent value="bank">
                  <div className="mt-6 text-center py-8 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                    <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {language ? "ব্যাংক পেমেন্ট বা ইন্টারন্যাশনাল কার্ড" : "Bank Transfer or International Card"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm mx-auto">
                      {language 
                        ? "ব্যাংকের মাধ্যমে বা দেশের বাইরের কার্ড থেকে পেমেন্ট করার জন্য অনুগ্রহ করে আমাদের সাথে হোয়াটসঅ্যাপে যোগাযোগ করুন।" 
                        : "For payments via Bank Transfer or International Cards, please contact us on WhatsApp."}
                    </p>
                    <a href="https://wa.me/8801641801705" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-md font-bold shadow-lg">
                        WhatsApp: +8801641801705
                      </Button>
                    </a>
                  </div>
                </TabsContent>
              </Tabs>

              {/* User Info Form */}
              <div className="mt-8 border-t dark:border-gray-800 pt-6">
                <h3 className="mb-4 text-lg font-semibold dark:text-white">{language ? "আপনার তথ্য" : "Your Information"}</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="dark:text-gray-300">{language ? "সম্পূর্ণ নাম" : "Full Name"}</Label>
                      <Input placeholder={language ? "আপনার নাম" : "Your Name"} className="dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label className="dark:text-gray-300">{language ? "মোবাইল নম্বর / WhatsApp" : "Phone / WhatsApp"}</Label>
                      <Input placeholder={language ? "আপনার নম্বর" : "Your Number"} className="dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="dark:text-gray-300">{language ? "ট্রানজেকশন আইডি (মোবাইল ব্যাংকিং এর জন্য)" : "Transaction ID (For Mobile Banking)"}</Label>
                    <Input placeholder="TxnID..." className="dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Order Summary (Desktop) */}
        <div className="hidden lg:block lg:col-span-1">
          <Card className="shadow-lg sticky top-28 dark:bg-gray-900 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">{language ? "অর্ডার সারাংশ" : "Order Summary"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between font-bold dark:text-white text-lg">
                <span>{name}</span>
                <span className="text-blue-600 dark:text-blue-400">{currencySymbol}{currentPrice.toLocaleString()}</span>
              </div>
              <ul className="space-y-3 border-b dark:border-gray-800 pb-6 pt-2 text-sm text-gray-600 dark:text-gray-400">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-1">
                      <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t dark:border-gray-800 pt-4 flex justify-between font-black text-xl dark:text-white">
                <span>{language ? "সর্বমোট" : "Total"}</span>
                <span>{currencySymbol}{currentPrice.toLocaleString()}</span>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-4">
              <Button size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700 py-6 text-lg font-bold">
                <Lock className="mr-2 h-5 w-5" />
                {language ? "অর্ডার কনফার্ম করুন" : "Confirm Order"}
              </Button>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                {language ? "আপনার সকল তথ্য আমাদের কাছে ১০০% নিরাপদ।" : "Your information is 100% secure with us."}
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t dark:border-gray-800 bg-white dark:bg-gray-900 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] lg:hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="px-6 py-3 text-left no-underline hover:no-underline">
              <div className="flex w-full items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{language ? "সারাংশ দেখুন" : "View Summary"}</span>
                  <p className="text-lg font-bold dark:text-white">
                    {language ? "সর্বমোট:" : "Total:"} {currencySymbol}{currentPrice.toLocaleString()}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              <div className="space-y-2 border-t dark:border-gray-800 pt-4">
                <div className="flex justify-between font-bold dark:text-white">
                  <span>{name}</span>
                  <span>{currencySymbol}{currentPrice.toLocaleString()}</span>
                </div>
                <ul className="space-y-2 pt-2 text-xs text-gray-600 dark:text-gray-400">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="border-t dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
          <Button size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700 py-6 font-bold text-lg">
            <Lock className="mr-2 h-5 w-5" />
            {language ? "অর্ডার কনফার্ম করুন" : "Confirm Order"}
          </Button>
        </div>
      </div>
    </div>
  );
}