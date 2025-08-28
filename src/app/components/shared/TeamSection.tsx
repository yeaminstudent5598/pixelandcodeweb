// src/components/shared/TeamSection.tsx
'use client';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import React from 'react';

// টিম মেম্বারদের ডেটা
const teamMembers = [
  {
    imgSrc: '/Yeamin.png', // ❗️ আপনার নিজের ছবি দিন
    name: 'Yeamin',
    role: 'CEO & Backend Developer',
  },
  {
    imgSrc: '/Sifat.jpg', // ❗️ আপনার নিজের ছবি দিন
    name: 'Sifat Hossain',
    role: 'Graphics Desinger',
  },
  {
    imgSrc: '/Naeem.jpg', // ❗️ আপনার নিজের ছবি দিন
    name: 'Naeem Majumder',
    role: 'Backend Developer',
  },
  {
    imgSrc: '/Sabbir_Hossain.jpg', // ❗️ আপনার নিজের ছবি দিন
    name: 'Sabbir Hossain',
    role: 'Frontend Developer',
  },
  {
    imgSrc: '/Moin_Uddin.jpg', // ❗️ আপনার নিজের ছবি দিন
    name: 'Moin Uddin',
    role: 'Frontend Developer',
  },
  {
    imgSrc: '/Aysa_Akter.jpg', // ❗️ আপনার নিজের ছবি দিন
    name: 'Aysha Akter Urmi',
    role: 'Frontend Developer',
  },
  {
    imgSrc: '/Iftiak_Hossain.webp', // ❗️ আপনার নিজের ছবি দিন
    name: 'Iftiak Hossain',
    role: 'UI/UX Desinger',
  },
  {
    imgSrc: '/Mizan.jpg', // ❗️ আপনার নিজের ছবি দিন
    name: 'Mizan',
    role: 'Video Editing',
  },
];

export function TeamSection() {
  const { language } = useLanguage();
  return (
    <section className="w-full bg-gradient-to-br from-white via-pink-50 to-red-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full border border-red-200 bg-white px-6 py-2 text-sm font-medium text-red-500 shadow-sm">
            {language ? 'টিম মেম্বার' : 'Team Members'}
          </div>

          <h2 className="text-3xl font-extrabold text-gray-800 md:text-4xl">
            {language
              ? 'আপনাদের সঠিক সেবা নিশ্চিত করার পিছনের হিরো যারা!!'
              : 'The Heroes Behind Ensuring Your Perfect Service!!'}
          </h2>
        </div>

        {/* টিম মেম্বারদের কার্ড */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative mb-4 h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-md">
                <Image
                  src={member.imgSrc}
                  alt={`Profile picture of ${member.name}`}
                  width={144}
                  height={144}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-base text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
