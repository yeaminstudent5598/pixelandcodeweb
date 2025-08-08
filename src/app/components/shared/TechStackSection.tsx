"use client"

import { Code, Cpu, Database, Figma, Palette, Server } from "lucide-react";
import { motion } from "framer-motion";

const techStack = [
    { icon: <Code className="h-10 w-10 text-blue-500" />, name: "Next.js" },
    { icon: <Palette className="h-10 w-10 text-pink-500" />, name: "Tailwind CSS" },
    { icon: <Figma className="h-10 w-10 text-purple-500" />, name: "Figma" },
    { icon: <Database className="h-10 w-10 text-green-500" />, name: "MongoDB" },
    { icon: <Server className="h-10 w-10 text-gray-700" />, name: "Node.js" },
    { icon: <Cpu className="h-10 w-10 text-orange-500" />, name: "Framer Motion" },
];

export function TechStackSection() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <motion.h2 className="mb-12 text-center text-3xl font-bold text-gray-800" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}}>
                    আমরা যেসকল টেকনোলজি ব্যবহার করি
                </motion.h2>
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center justify-center rounded-lg border p-6 shadow-sm"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {tech.icon}
                            <p className="mt-4 font-semibold">{tech.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
