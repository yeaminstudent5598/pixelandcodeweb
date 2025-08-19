"use client"
import { BookOpen, Layers, Smartphone, Store } from "lucide-react";
import { motion } from "framer-motion";

const websiteTypes = [
    { icon: <Store className="h-10 w-10 text-orange-500" />, title: "ই-কমার্স ওয়েবসাইট", description: "অনলাইনে আপনার পণ্য বিক্রি করার জন্য একটি পূর্ণাঙ্গ স্টোর।" },
    { icon: <Layers className="h-10 w-10 text-blue-500" />, title: "পোর্টফোলিও ওয়েবসাইট", description: "আপনার কাজ এবং দক্ষতা প্রদর্শনের জন্য একটি আকর্ষণীয় সাইট।" },
    { icon: <BookOpen className="h-10 w-10 text-green-500" />, title: "ব্লগ ওয়েবসাইট", description: "আপনার জ্ঞান এবং অভিজ্ঞতা শেয়ার করার জন্য একটি পার্সোনাল ব্লগ।" },
    { icon: <Smartphone className="h-10 w-10 text-purple-500" />, title: "মোবাইল অ্যাপ ওয়েবসাইট", description: "আপনার মোবাইল অ্যাপ প্রচার এবং ডাউনলোডের জন্য একটি ল্যান্ডিং পেইজ।" },
];

export function WebsiteTypesSection() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <motion.h2 className="mb-12 text-center text-3xl font-bold text-gray-800" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}}>
                    আপনি কোন ধরনের ওয়েবসাইট তৈরি করতে চান?
                </motion.h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {websiteTypes.map((type, index) => (
                        <motion.div 
                            key={index}
                            className="rounded-lg border p-6 text-center shadow-sm transition-shadow hover:shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 inline-block rounded-full bg-gray-100 p-4">{type.icon}</div>
                            <h3 className="mb-2 text-xl font-semibold">{type.title}</h3>
                            <p className="text-gray-600">{type.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
