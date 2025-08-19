"use client"
import { Code, Palette, Rocket, Search } from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
    { icon: <Palette className="h-8 w-8" />, title: "প্ল্যানিং এবং ডিজাইন", description: "আপনার লক্ষ্য অনুযায়ী ওয়েবসাইটের ব্লুপ্রিন্ট ও ইউজার ইন্টারফেস ডিজাইন করা হয়।" },
    { icon: <Code className="h-8 w-8" />, title: "ডেভেলপমেন্ট", description: "সর্বাধুনিক টেকনোলজি ব্যবহার করে আপনার ডিজাইনকে বাস্তবে রূপ দেওয়া হয়।" },
    { icon: <Search className="h-8 w-8" />, title: "টেস্টিং", description: "ওয়েবসাইটের প্রতিটি ফাংশন পুঙ্খানুপুঙ্খভাবে পরীক্ষা করে বাগ-মুক্ত করা হয়।" },
    { icon: <Rocket className="h-8 w-8" />, title: "লঞ্চ এবং মেইনটেন্যান্স", description: "আপনার ওয়েবসাইট লাইভ করা হয় এবং নিয়মিত রক্ষণাবেক্ষণ করে আপ-টু-ডেট রাখা হয়।" },
];

export function ProcessSection() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <motion.h2 className="mb-16 text-center text-3xl font-bold text-gray-800" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}}>
                    আমাদের ওয়েবসাইট ডেভেলপমেন্ট প্রক্রিয়া
                </motion.h2>
                <div className="relative">
                    <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gray-200 md:block"></div>
                    {processSteps.map((step, index) => (
                        <motion.div 
                            key={index}
                            className="relative mb-12 flex flex-col items-center md:flex-row"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className={`flex w-full items-center md:w-1/2 ${index % 2 === 0 ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8 md:flex-row-reverse'}`}>
                                <div className={`order-1 w-full rounded-lg bg-white p-6 shadow-md md:order-none`}>
                                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                                <div className={`order-0 mx-4 hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg md:order-none md:flex`}>
                                    {step.icon}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
