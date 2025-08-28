"use client"
import { BookOpen, Layers, Smartphone, Store } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const websiteTypesBn = [
    { icon: <Store className="h-10 w-10 text-orange-500" />, title: "ই-কমার্স ওয়েবসাইট", description: "অনলাইনে আপনার পণ্য বিক্রি করার জন্য একটি পূর্ণাঙ্গ স্টোর।" },
    { icon: <Layers className="h-10 w-10 text-blue-500" />, title: "পোর্টফোলিও ওয়েবসাইট", description: "আপনার কাজ এবং দক্ষতা প্রদর্শনের জন্য একটি আকর্ষণীয় সাইট।" },
    { icon: <BookOpen className="h-10 w-10 text-green-500" />, title: "ব্লগ ওয়েবসাইট", description: "আপনার জ্ঞান এবং অভিজ্ঞতা শেয়ার করার জন্য একটি পার্সোনাল ব্লগ।" },
    { icon: <Smartphone className="h-10 w-10 text-purple-500" />, title: "মোবাইল অ্যাপ ওয়েবসাইট", description: "আপনার মোবাইল অ্যাপ প্রচার এবং ডাউনলোডের জন্য একটি ল্যান্ডিং পেইজ।" },
];

const websiteTypesEn = [
    { icon: <Store className="h-10 w-10 text-orange-500" />, title: "E-commerce Website", description: "A full-featured store to sell your products online." },
    { icon: <Layers className="h-10 w-10 text-blue-500" />, title: "Portfolio Website", description: "An attractive site to showcase your work and skills." },
    { icon: <BookOpen className="h-10 w-10 text-green-500" />, title: "Blog Website", description: "A personal blog to share your knowledge and experience." },
    { icon: <Smartphone className="h-10 w-10 text-purple-500" />, title: "Mobile App Website", description: "A landing page to promote and get downloads for your app." },
];

export function WebsiteTypesSection() {
    const { language } = useLanguage();
    const items = language ? websiteTypesBn : websiteTypesEn;
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <motion.h2 className="mb-12 text-center text-3xl font-bold text-gray-800" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}}>
                    {language ? 'আপনি কোন ধরনের ওয়েবসাইট তৈরি করতে চান?' : 'What type of website do you want to build?'}
                </motion.h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((type, index) => (
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
