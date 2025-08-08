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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Check } from "lucide-react";
import Image from "next/image";

// প্যাকেজগুলোর ডেটা
const packages = [
  {
    id: "silver",
    name: "সিলভার প্যাকেজ",
    price: 3000,
    features: [
      "$২০ ফেসবুক এড ক্যাম্পেইন",
      "৫-৭ দিন ক্যাম্পেইন সময়কাল",
      "১০-৪০ হাজার রিচ (আনুমানিক)",
    ],
  },
  {
    id: "gold",
    name: "গোল্ড প্যাকেজ",
    price: 4500,
    features: [
      "$৩০ ফেসবুক এড ক্যাম্পেইন",
      "৭-১০ দিন ক্যাম্পেইন সময়কাল",
      "২০-৬০ হাজার রিচ (আনুমানিক)",
    ],
  },
  {
    id: "diamond",
    name: "ডায়মন্ড প্যাকেজ",
    price: 7500,
    features: [
      "$৫০ ফেসবুক এড ক্যাম্পেইন",
      "১০-১৫ দিন ক্যাম্পেইন সময়কাল",
      "৫০-১০০ হাজার রিচ (আনুমানিক)",
    ],
  },
];

export default function PaymentPage() {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);

  const handlePackageChange = (packageId: string) => {
    const newPackage = packages.find((p) => p.id === packageId);
    if (newPackage) {
      setSelectedPackage(newPackage);
    }
  };

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

        {/* প্যাকেজ সিলেক্ট করার ড্রপডাউন */}
        <div className="mx-auto mb-8 max-w-md">
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
              {packages.map((pkg) => (
                <SelectItem key={pkg.id} value={pkg.id} className="text-base">
                  {pkg.name} - ৳{pkg.price.toLocaleString("bn-BD")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* বাম কলাম: পেমেন্ট ফর্ম */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">পেমেন্ট डिटेल्स</CardTitle>
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

                  {/* মোবাইল ব্যাংকিং ট্যাব */}
                  <TabsContent value="mobile">
                    <div className="mt-6 text-center">
                      <p className="mb-4 text-gray-600">
                        নিচের নম্বরগুলোতে সেন্ড মানি করুন
                      </p>
                      <div className="mb-6 flex justify-center gap-8">
                        <div className="flex flex-col items-center">
                          <Image
                            src="/bkashLogo.svg"
                            alt="Bkash Logo"
                            width={60}
                            height={60}
                          />
                          <p className="mt-2 font-bold">01922-226558</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <Image
                            src="\NagadLogo.svg"
                            alt="Nagad Logo"
                            width={60}
                            height={60}
                          />
                          <p className="mt-2 font-bold">01319-987257</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        সেন্ড মানি করার পর নিচের তথ্যগুলো পূরণ করুন।
                      </p>
                    </div>
                  </TabsContent>

                  {/* কার্ড ট্যাব */}
                  <TabsContent value="card">
                    <div className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">কার্ড নম্বর</Label>
                        <Input
                          id="card-number"
                          placeholder="1234 5678 9101 1121"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">মেয়াদ</Label>
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

                {/* পার্সোনাল ইনফরমেশন */}
                <div className="mt-8 border-t pt-6">
                  <h3 className="mb-4 text-lg font-semibold">আপনার তথ্য</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">সম্পূর্ণ নাম</Label>
                        <Input id="name" placeholder="আপনার নাম" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">মোবাইল নম্বর</Label>
                        <Input
                          id="phone"
                          placeholder="যে নম্বর থেকে টাকা পাঠিয়েছেন"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">ই-মেইল</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="trxid">ট্রানজেকশন আইডি</Label>
                      <Input
                        id="trxid"
                        placeholder="Bkash/Nagad Transaction ID"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ডান কলাম: অর্ডার সারাংশ */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg sticky top-28">
              <CardHeader>
                <CardTitle>অর্ডার সারাংশ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between font-bold">
                  <span>{selectedPackage.name}</span>
                  <span className="font-semibold">
                    ৳{selectedPackage.price.toLocaleString("bn-BD")}
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
                  <span>৳{selectedPackage.price.toLocaleString("bn-BD")}</span>
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
    </main>
  );
}
