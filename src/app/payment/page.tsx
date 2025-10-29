// src/app/payment/page.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // <-- নতুন ইম্পোর্ট
import { Lock, Check } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// --- আপনার সকল প্যাকেজের ডেটা (কোনো পরিবর্তন নেই) ---
const allPackagesData = [
  // ... (আপনার প্যাকেজের ডেটা এখানে থাকবে) ...
  {
    category: "ফেসবুক এড ক্যাম্পেইন",
    packages: [
        { id: "fb_silver", name: "সিলভার প্যাকেজ", features: ["$20 Ad Credit", "৭ দিন ক্যাম্পেইন", "১০-৪০ হাজার রিচ"], pricing: { monthly: 3000, yearly: 32000 } },
        { id: "fb_gold", name: "গোল্ড প্যাকেজ", features: ["$30 Ad Credit", "১০ দিন ক্যাম্পেইন", "২০-৬০ হাজার রিচ"], pricing: { monthly: 4500, yearly: 48000 } },
        { id: "fb_diamond", name: "ডায়মন্ড প্যাকেজ", features: ["$50 Ad Credit", "১৫ দিন ক্যাম্পেইন", "৫০-১০০ হাজার রিচ"], pricing: { monthly: 7500, yearly: 80000 } },
    ]
  },
  {
      category: "ওয়েবসাইট ডেভেলপমেন্ট",
      packages: [
          { id: "web_basic", name: "বেসিক ওয়েবসাইট", features: ["৫ পেইজ ওয়েবসাইট", "রেসপন্সিভ ডিজাইন", "ফ্রি ডোমেইন ও হোস্টিং"], pricing: { monthly: 15000, yearly: 150000 } },
          { id: "web_standard", name: "স্ট্যান্ডার্ড ওয়েবসাইট", features: ["১০ পেইজ ওয়েবসাইট", "ই-কমার্স ফাংশনালিটি", "পেমেন্ট গেটওয়ে"], pricing: { monthly: 30000, yearly: 320000 } },
          { id: "web_premium", name: "প্রিমিয়াম ওয়েবসাইট", features: ["আনলিমিটেড পেইজ", "কাস্টম ফিচার", "ডেডিকেটেড সাপোর্ট"], pricing: { monthly: 50000, yearly: 550000 } },
      ]
  },
  {
      category: "গ্রাফিক্স ডিজাইন",
      packages: [
          { id: "gfx_bronze", name: "ব্রোঞ্জ ডিজাইন প্যাকেজ", features: ["৮টি সোশ্যাল মিডিয়া পোস্ট", "সপ্তাহে ২টি পোস্ট ডিজাইন", "প্রতি ডিজাইনে ১টি রিভিশন"], pricing: { monthly: 3200, yearly: 35000 } },
          { id: "gfx_silver", name: "সিলভার ডিজাইন প্যাকেজ", features: ["১৬টি সোশ্যাল মিডিয়া পোস্ট", "সপ্তাহে ৪টি পোস্ট ডিজাইন", "প্রিমিয়াম ছবি ও ফন্ট"], pricing: { monthly: 6200, yearly: 68000 } },
          { id: "gfx_gold", name: "গোল্ড ডিজাইন প্যাকেজ", features: ["২৪টি সোশ্যাল মিডিয়া পোস্ট", "সপ্তাহে ৬টি পোস্ট ডিজাইন", "প্রিমিয়াম ছবি ও ফন্ট"], pricing: { monthly: 8500, yearly: 93000 } },
      ]
  },
  {
      category: "ভিডিও এডিটিং",
      packages: [
          { id: "vid_basic", name: "বেসিক ভিডিও প্যাকেজ", features: ["২টি রিলস/শর্টস ভিডিও", "বেসিক কালার গ্রেডিং", "স্টক ফুটেজ"], pricing: { monthly: 4000, yearly: 42000 } },
          { id: "vid_pro", name: "প্রো ভিডিও প্যাকেজ", features: ["৫টি রিলস/শর্টস ভিডিও", "অ্যাডভান্সড ট্রানজিশন", "কপিরাইট ফ্রি মিউজিক"], pricing: { monthly: 7000, yearly: 75000 } },
          { id: "vid_business", name: "বিজনেস ভিডিও প্যাকেজ", features: ["১০টি রিলস/শর্টস ভিডিও", "মোশন গ্রাফিক্স", "২টি প্রোমোশনাল ভিডিও"], pricing: { monthly: 12000, yearly: 130000 } },
      ]
  }
];

const flatPackages = allPackagesData.flatMap((category) => category.packages);

export default function PaymentPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(flatPackages[0]);

  const handlePackageChange = (packageId: string) => {
    const newPackage = flatPackages.find((p) => p.id === packageId);
    if (newPackage) {
      setSelectedPackage(newPackage);
    }
  };

  const currentPrice = selectedPackage.pricing[isYearly ? "yearly" : "monthly"];

  return (
    <main className="w-full bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
            পেমেন্ট সম্পন্ন করুন
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            অনুগ্রহ করে আপনার প্যাকেজটি সিলেক্ট করে নিচের তথ্যগুলো পূরণ করুন।
          </p>
        </div>

        {/* প্যাকেজ সিলেক্ট এবং বিলিং সাইকেল */}
        <div className="mx-auto mb-8 grid max-w-xl grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Label htmlFor="package-select" className="text-lg font-semibold">
              আপনার প্যাকেজটি বেছে নিন
            </Label>
            <Select
              defaultValue={selectedPackage.id}
              onValueChange={handlePackageChange}
            >
              <SelectTrigger id="package-select" className="mt-2 h-12 text-base">
                <SelectValue placeholder="Select a package" />
              </SelectTrigger>
              <SelectContent>
                {allPackagesData.map((category) => (
                  <SelectGroup key={category.category}>
                    <SelectLabel className="font-bold">
                      {category.category}
                    </SelectLabel>
                    {category.packages.map((pkg) => (
                      <SelectItem
                        key={pkg.id}
                        value={pkg.id}
                        className="text-base"
                      >
                        {pkg.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col items-start justify-end">
            <Label className="text-lg font-semibold mb-2">বিলিং সাইকেল</Label>
            <div className="flex items-center space-x-4 rounded-lg border bg-white p-2.5">
              <Label
                htmlFor="billing-cycle"
                className={cn("font-semibold", !isYearly && "text-blue-600")}
              >
                মাসিক
              </Label>
              <Switch
                id="billing-cycle"
                checked={isYearly}
                onCheckedChange={setIsYearly}
              />
              <Label
                htmlFor="billing-cycle"
                className={cn("font-semibold", isYearly && "text-blue-600")}
              >
                বাৎসরিক
              </Label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* === পরিবর্তন: মোবাইল ভিউতে এই কলামটি mb-40 (margin-bottom) পাবে === */}
          {/* বাম কলাম: পেমেন্ট ফর্ম */}
          <div className="lg:col-span-2 mb-40 lg:mb-0">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">পেমেন্ট ডিটেইলস</CardTitle>
                <CardDescription>
                  আপনার পছন্দের পেমেন্ট মাধ্যমটি বেছে নিন।
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="mobile" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="mobile">মোবাইল ব্যাংকিং</TabsTrigger>
                    <TabsTrigger value="card">কার্ড</TabsTrigger>
                  </TabsList>

                  <TabsContent value="mobile">
                    {/* ... (মোবাইল ব্যাংকিং কন্টেন্ট অপরিবর্তিত) ... */}
                    <div className="mt-6 text-center">
                      <p className="mb-4 text-gray-600">
                        নিচের নম্বরগুলোতে সেন্ড মানি করুন
                      </p>
                      <div className="mb-6 flex justify-center gap-8">
                        <div className="flex flex-col items-center">
                          <Image src="/bkashLogo.svg" alt="Bkash Logo" width={60} height={60} />
                          <p className="mt-2 font-bold">01922-226558</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <Image src="\NagadLogo.svg" alt="Nagad Logo" width={60} height={60} />
                          <p className="mt-2 font-bold">01319-987257</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        সেন্ড মানি করার পর নিচের তথ্যগুলো পূরণ করুন।
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="card">
                    {/* ... (কার্ড কন্টেন্ট অপরিবর্তিত) ... */}
                    <div className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">কার্ড নম্বর</Label>
                        <Input id="card-number" placeholder="1234 5678 9101 1121"/>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">মেয়াদ</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-8 border-t pt-6">
                  <h3 className="mb-4 text-lg font-semibold">আপনার তথ্য</h3>
                  <div className="space-y-4">
                    {/* ... (আপনার তথ্য ফর্ম অপরিবর্তিত) ... */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">সম্পূর্ণ নাম</Label>
                        <Input id="name" placeholder="আপনার নাম" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">মোবাইল নম্বর</Label>
                        <Input id="phone" placeholder="যে নম্বর থেকে টাকা পাঠিয়েছেন" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">ই-মেইল</Label>
                      <Input id="email" type="email" placeholder="example@email.com" />
                    </div>
                    <div className="space-y-2">
              D       <Label htmlFor="trxid">ট্রানজেকশন আইডি</Label>
                      <Input id="trxid" placeholder="Bkash/Nagad Transaction ID" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* === পরিবর্তন: এই কার্ডটি এখন শুধু ডেস্কটপে দেখা যাবে === */}
          {/* ডান কলাম: অর্ডার সারাংশ (ডেস্কটপ) */}
          <div className="hidden lg:block lg:col-span-1">
            <Card className="shadow-lg sticky top-28">
              <CardHeader>
                <CardTitle>অর্ডার সারাংশ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between font-bold">
                  <span>{selectedPackage.name}</span>
                  <span className="font-semibold">
                    ৳{currentPrice.toLocaleString("bn-BD")}
                  </span>
                </div>
                <ul className="space-y-2 border-b pb-4 text-sm text-gray-600">
                  {selectedPackage.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between text-gray-500">
                  <span>ভ্যাট (০%)</span>
                  <span>৳০</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                  <span>সর্বমোট</span>
                  <span>৳{currentPrice.toLocaleString("bn-BD")}</span>
                </div>
              </CardContent>
              <CardFooter className="flex-col space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-green-600 text-white hover:bg-green-700"
                >
                  <Lock className="mr-2 h-5 w-5" />
                  পেমেন্ট সম্পন্ন করুন
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  আপনার সকল তথ্য আমাদের কাছে ১০০% নিরাপদ।
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* === নতুন সংযোজন: মোবাইল অ্যাপ-স্টাইল স্টিকি বটম বার === */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] lg:hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-0">
            {/* এই ট্রিগারটি ক্লিক করলে সারাংশ দেখায় */}
            <AccordionTrigger className="px-6 py-3 text-left no-underline hover:no-underline">
              <div className="flex w-full items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-blue-600">
                    সারাংশ দেখুন
                  </span>
                  <p className="text-lg font-bold">
                    সর্বমোট: ৳{currentPrice.toLocaleString("bn-BD")}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            {/* এখানে সারাংশ কন্টেন্ট */}
            <AccordionContent className="px-6 pb-4">
              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>{selectedPackage.name}</span>
                  <span className="font-semibold">
                    ৳{currentPrice.toLocaleString("bn-BD")}
                  </span>
                </div>
                <ul className="space-y-1 pt-2 text-xs text-gray-600">
                  {selectedPackage.features.map((feature, index) => (
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

        {/* মোবাইল ভিউ এর চূড়ান্ত পেমেন্ট বাটন */}
        <div className="border-t bg-white p-4">
          <Button
            size="lg"
            className="w-full bg-green-600 text-white hover:bg-green-700"
          >
            <Lock className="mr-2 h-5 w-5" />
            পেমেন্ট সম্পন্ন করুন
          </Button>
        </div>
      </div>
    </main>
  );
}