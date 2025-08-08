"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";


const pricingPlans = [
    { name: "বেসিক", price: "১৫,০০০", features: ["৫ পেইজ ওয়েবসাইট", "রেসপন্সিভ ডিজাইন", "ফ্রি ডোমেইন", "১ বছরের হোস্টিং", "বেসিক এসইও"] },
    { name: "স্ট্যান্ডার্ড", price: "৩০,০০০", features: ["১০ পেইজ ওয়েবসাইট", "ই-কমার্স ফাংশনালিটি", "পেমেন্ট গেটওয়ে", "ফ্রি ডোমেইন এবং হোস্টিং", "অ্যাডভান্সড এসইও"], popular: true },
    { name: "প্রিমিয়াম", price: "৫০,০০০+", features: ["আনলিমিটেড পেইজ", "কাস্টম ফিচার", "মোবাইল অ্যাপ ইন্টিগ্রেশন", "ফ্রি ডোমেইন এবং হোস্টিং", "ডেডিকেটেড সাপোর্ট"] },
];

export function PriceSection() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <motion.h2 className="mb-12 text-center text-3xl font-bold text-gray-800" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}}>
                    আমাদের প্যাকেজসমূহ
                </motion.h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`relative rounded-lg border p-8 shadow-lg ${plan.popular ? 'border-2 border-orange-500 bg-white' : 'bg-white'}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-sm font-bold text-white">জনপ্রিয়</div>}
                            <h3 className="text-center text-2xl font-bold">{plan.name}</h3>
                            <p className="my-4 text-center text-4xl font-extrabold text-gray-900">৳{plan.price}</p>
                            <ul className="mb-8 space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button asChild size="lg" className="w-full bg-gray-800 text-white hover:bg-gray-900">
                                <Link href="/contact">প্যাকেজটি কিনুন</Link>
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}