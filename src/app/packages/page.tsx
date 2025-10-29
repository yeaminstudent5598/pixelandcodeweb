// src/app/packages/page.tsx
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

// --- আপনার প্যাকেজের ডেটা (কোনো পরিবর্তন নেই) ---
const fbPackages = {
  monthly: [
    { name: "সিলভার", price: 3000, features: ["$20 Ad Credit", "৭ দিন ক্যাম্পেইন", "১০-৪০ হাজার রিচ"], popular: false },
    { name: "গোল্ড", price: 4500, features: ["$30 Ad Credit", "১০ দিন ক্যাম্পেইন", "২০-৬০ হাজার রিচ"], popular: true },
    { name: "ডায়মন্ড", price: 7500, features: ["$50 Ad Credit", "১৫ দিন ক্যাম্পেইন", "৫০-১০০ হাজার রিচ"], popular: false },
  ],
  yearly: [
    { name: "সিলভার", price: 32000, features: ["$20 Ad Credit", "৭ দিন ক্যাম্পেইন", "১০-৪০ হাজার রিচ"], popular: false },
    { name: "গোল্ড", price: 48000, features: ["$30 Ad Credit", "১০ দিন ক্যাম্পেইন", "২০-৬০ হাজার রিচ"], popular: true },
    { name: "ডায়মন্ড", price: 80000, features: ["$50 Ad Credit", "১৫ দিন ক্যাম্পেইন", "৫০-১০০ হাজার রিচ"], popular: false },
  ]
};
const webPackages = {
    monthly: [
      { name: "বেসিক", price: 15000, features: ["৫ পেইজ ওয়েবসাইট", "রেসপন্সিভ ডিজাইন", "ফ্রি ডোমেইন ও হোস্টিং"], popular: false },
      { name: "স্ট্যান্ডার্ড", price: 30000, features: ["১০ পেইজ ওয়েবসাইট", "ই-কমার্স ফাংশনালিটি", "পেমেন্ট গেটওয়ে"], popular: true },
      { name: "প্রিমিয়াম", price: 50000, features: ["আনলিমিটেড পেইজ", "কাস্টম ফিচার", "ডেডিকেটেড সাপোর্ট"], popular: false },
    ],
    yearly: [
      { name: "বেসিক", price: 150000, features: ["৫ পেইজ ওয়েবসাইট", "রেসপন্সিভ ডিজাইন", "ফ্রি ডোমেইন ও হোস্টিং"], popular: false },
      { name: "স্ট্যান্ডার্ড", price: 320000, features: ["১০ পেইজ ওয়েবসাইট", "ই-কমার্স ফাংশনালিটি", "পেমেন্ট গেটওয়ে"], popular: true },
      { name: "প্রিমিয়াম", price: 550000, features: ["আনলিমিটেড পেইজ", "কাস্টম ফিচার", "ডেডিকেটেড সাপোর্ট"], popular: false },
    ]
  };
const graphicsPackages = {
    monthly: [
      { name: "ব্রোঞ্জ", price: 3200, features: ["৮টি সোশ্যাল মিডিয়া পোস্ট", "সপ্তাহে ২টি পোস্ট ডিজাইন", "প্রতি ডিজাইনে ১টি রিভিশন"], popular: false },
      { name: "সিলভার", price: 6200, features: ["১৬টি সোশ্যাল মিডিয়া পোস্ট", "সপ্তাহে ৪টি পোস্ট ডিজাইন", "প্রিমিয়াম ছবি ও ফন্ট", "প্রতি ডিজাইনে ২টি রিভিশন"], popular: true },
      { name: "গোল্ড", price: 8500, features: ["২৪টি সোশ্যাল মিডিয়া পোস্ট", "সপ্তাহে ৬টি পোস্ট ডিজাইন", "প্রিমিয়াম ছবি ও ফন্ট", "প্রতি ডিজাইনে ৩টি রিভিশন"], popular: false },
    ],
    yearly: [
      { name: "ব্রোঞ্জ", price: 35000, features: ["৮টি সোশ্যাল মিডিয়া পোস্ট", "সপ্তাহে ২টি পোস্ট ডিজাইন", "প্রতি ডিজাইনে ১টি রিভিশন"], popular: false },
      { name: "সিলভার", price: 68000, features: ["১৬টি সোশ্যাল মিডিয়া পোস্ট", "সপ্তাহে ৪টি পোস্ট ডিজাইন", "প্রিমিয়াম ছবি ও ফন্ট", "প্রতি ডিজাইনে ২টি রিভিশন"], popular: true },
      { name: "গোল্ড", price: 93000, features: ["২৪টি সোশ্যাল মিডিয়া পোস্ট", "সপ্তাহে ৬টি পোস্ট ডিজাইন", "প্রিমিয়াম ছবি ও ফন্ট", "প্রতি ডিজাইনে ৩টি রিভিশন"], popular: false },
    ]
  };
const videoPackages = {
    monthly: [
        { name: "বেসিক", price: 4000, features: ["২টি রিলস/শর্টস ভিডিও", "বেসিক কালার গ্রেডিং", "স্টক ফুটেজ"], popular: false },
        { name: "প্রো", price: 7000, features: ["৫টি রিলস/শর্টস ভিডিও", "অ্যাডভান্সড ট্রানজিশন", "কপিরাইট ফ্রি মিউজিক"], popular: true },
        { name: "বিজনেস", price: 12000, features: ["১০টি রিলস/শর্টস ভিডিও", "মোশন গ্রাফিক্স", "২টি প্রোমোশনাল ভিডিও"], popular: false },
    ],
    yearly: [
        { name: "বেসিক", price: 42000, features: ["২টি রিলস/শর্টস ভিডিও", "বেসিক কালার গ্রেডিং", "স্টক ফুটেজ"], popular: false },
        { name: "প্রো", price: 75000, features: ["৫টি রিলস/শর্টস ভিডিও", "অ্যাডভান্সড ট্রানজিশন", "কপিরাইট ফ্রি মিউজিক"], popular: true },
        { name: "বিজনেস", price: 130000, features: ["১০টি রিলস/শর্টস ভিডিও", "মোশন গ্রাফিক্স", "২টি প্রোমোশনাল ভিডিও"], popular: false },
    ]
};
// --- প্যাকেজের ডেটা শেষ ---


export default function PackagesPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main className="w-full bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
            আমাদের সার্ভিস প্যাকেজসমূহ
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            আপনার ব্যবসার জন্য সঠিক প্যাকেজটি বেছে নিন।
          </p>
        </div>

        {/* মাসিক/বাৎসরিক টগল */}
        <div className="mb-10 flex items-center justify-center space-x-4">
          <Label htmlFor="billing-cycle" className={cn("font-semibold", !isYearly && "text-blue-600")}>মাসিক</Label>
          <Switch id="billing-cycle" checked={isYearly} onCheckedChange={setIsYearly} />
          <Label htmlFor="billing-cycle" className={cn("font-semibold", isYearly && "text-blue-600")}>বাৎসরিক (১০% ছাড়)</Label>
        </div>

        <Tabs defaultValue="facebook" className="w-full">
          <TabsList className="mx-auto grid w-full max-w-2xl grid-cols-2 sm:grid-cols-4">
            <TabsTrigger value="facebook">ফেসবুক এড</TabsTrigger>
            <TabsTrigger value="website">ওয়েবসাইট</TabsTrigger>
            <TabsTrigger value="graphics">গ্রাফিক্স ডিজাইন</TabsTrigger>
            <TabsTrigger value="video">ভিডিও এডিটিং</TabsTrigger>
          </TabsList>

          {/* ফেসবুক এড ক্যাম্পেইন ট্যাব */}
          <TabsContent value="facebook">
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {(isYearly ? fbPackages.yearly : fbPackages.monthly).map((pkg) => (
                <Card key={pkg.name} className={cn("flex flex-col shadow-lg", pkg.popular && "border-2 border-blue-500 relative")}>
                   {pkg.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-sm font-bold text-white flex items-center gap-1"><Star className="h-4 w-4" /> জনপ্রিয়</div>}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-4xl font-bold text-gray-800">৳{pkg.price.toLocaleString('bn-BD')}<span className="text-base font-normal text-gray-500">/{isYearly ? 'বছর' : 'মাস'}</span></CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                        {pkg.features.map(feature => (
                            <li key={feature} className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-green-500" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {/* === পরিবর্তন এখানে === */}
                    <Button asChild size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                        <Link href={`/payment?service=facebook&name=${pkg.name}&price=${pkg.price}&billing=${isYearly ? 'yearly' : 'monthly'}`}>প্যাকেজটি কিনুন</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* ওয়েবসাইট ডেভেলপমেন্ট ট্যাব */}
          <TabsContent value="website">
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {(isYearly ? webPackages.yearly : webPackages.monthly).map((pkg) => (
                <Card key={pkg.name} className={cn("flex flex-col shadow-lg", pkg.popular && "border-2 border-blue-500 relative")}>
                   {pkg.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-sm font-bold text-white flex items-center gap-1"><Star className="h-4 w-4" /> জনপ্রিয়</div>}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-4xl font-bold text-gray-800">৳{pkg.price.toLocaleString('bn-BD')}<span className="text-base font-normal text-gray-500">/{isYearly ? 'বছর' : 'মাস'}</span></CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                        {pkg.features.map(feature => (
                            <li key={feature} className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-green-500" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {/* === পরিবর্তন এখানে === */}
                    <Button asChild size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                        <Link href={`/payment?service=website&name=${pkg.name}&price=${pkg.price}&billing=${isYearly ? 'yearly' : 'monthly'}`}>প্যাকেজটি কিনুন</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* গ্রাফিক্স ডিজাইন ট্যাব */}
          <TabsContent value="graphics">
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {(isYearly ? graphicsPackages.yearly : graphicsPackages.monthly).map((pkg) => (
                <Card key={pkg.name} className={cn("flex flex-col shadow-lg", pkg.popular && "border-2 border-blue-500 relative")}>
                   {pkg.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-sm font-bold text-white flex items-center gap-1"><Star className="h-4 w-4" /> জনপ্রিয়</div>}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-4xl font-bold text-gray-800">৳{pkg.price.toLocaleString('bn-BD')}<span className="text-base font-normal text-gray-500">/{isYearly ? 'বছর' : 'মাস'}</span></CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                        {pkg.features.map(feature => (
                            <li key={feature} className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-green-500" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {/* === পরিবর্তন এখানে === */}
                    <Button asChild size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                        <Link href={`/payment?service=graphics&name=${pkg.name}&price=${pkg.price}&billing=${isYearly ? 'yearly' : 'monthly'}`}>প্যাকেজটি কিনুন</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* ভিডিও এডিটিং ট্যাব */}
          <TabsContent value="video">
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {(isYearly ? videoPackages.yearly : videoPackages.monthly).map((pkg) => (
                <Card key={pkg.name} className={cn("flex flex-col shadow-lg", pkg.popular && "border-2 border-blue-500 relative")}>
                   {pkg.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-4 py-1 text-sm font-bold text-white flex items-center gap-1"><Star className="h-4 w-4" /> জনপ্রিয়</div>}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-4xl font-bold text-gray-800">৳{pkg.price.toLocaleString('bn-BD')}<span className="text-base font-normal text-gray-500">/{isYearly ? 'বছর' : 'মাস'}</span></CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                        {pkg.features.map(feature => (
                            <li key={feature} className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-green-500" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {/* === পরিবর্তন এখানে === */}
                    <Button asChild size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                        <Link href={`/payment?service=video&name=${pkg.name}&price=${pkg.price}&billing=${isYearly ? 'yearly' : 'monthly'}`}>প্যাকেজটি কিনুন</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}