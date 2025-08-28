// src/components/shared/TechnologySection.tsx
'use client';
import React from 'react';
import {
  Figma,
  Framer,
  Code,
  Youtube,
  Instagram,
  Facebook,
  Linkedin,
} from 'lucide-react'; // Using lucide-react for logos
import { useLanguage } from '@/context/LanguageContext';

export function TechnologySection() {
  // টেকনোলজি লোগোগুলোর ডেটা
  const technologies = [
    { name: 'Figma', icon: <Figma size={48} className="text-gray-600" /> },
    { name: 'Framer', icon: <Framer size={48} className="text-gray-600" /> },
    { name: 'Next.js', icon: <Code size={48} className="text-gray-600" /> },
    { name: 'YouTube', icon: <Youtube size={48} className="text-red-600" /> },
    {
      name: 'Instagram',
      icon: <Instagram size={48} className="text-pink-600" />,
    },
    {
      name: 'Facebook',
      icon: <Facebook size={48} className="text-blue-600" />,
    },
    { name: 'LinkedIn', icon: <Linkedin size={48} className="text-sky-700" /> },
  ];

  // ডুপ্লিকেট করা হয়েছে যাতে স্লাইডারটি স্মুথ দেখায়
  const duplicatedTechnologies = [...technologies, ...technologies];
  const { language } = useLanguage();

  return (
    <section className="w-full bg-blue-600 py-20 sm:py-28">
      <div className="container mx-auto flex flex-col items-center px-4">
        {/* উপরের ট্যাগ */}
        <div className="mb-4 rounded-full border-2 border-white/50 px-6 py-2 text-sm font-medium text-white">
          {language ? 'সফটওয়্যার ও টুলস' : 'Software & Tools'}
        </div>

        {/* প্রধান শিরোনাম */}
        <h2 className="mb-10 text-center text-3xl font-extrabold text-white md:text-4xl">
          {language
            ? 'আমরা যেসকল টেকনোলজি ব্যবহার করে থাকি!'
            : 'Technologies We Use!'}
        </h2>

        {/* লোগো স্লাইডার */}
        <div className="relative w-full max-w-5xl overflow-hidden rounded-full bg-white p-4 shadow-lg">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={index}
                className="mx-8 flex flex-shrink-0 items-center justify-center"
                title={tech.name}>
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
