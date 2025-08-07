// src/components/shared/PortfolioSection.tsx
import Image from "next/image";
import React from "react";

// পোর্টফোলিও আইটেমগুলোর ডেটা
const portfolioItems = [
  {
    src: "https://i.ibb.co/yWc4RBP/1.jpg", // ❗️ আপনার নিজের ছবি দিন
    alt: "Gadgets Social Media Post Design",
  },
  {
    src: "https://i.ibb.co/3kZ4v04/2.jpg", // ❗️ আপনার নিজের ছবি দিন
    alt: "Food Delivery Social Media Post Design",
  },
  {
    src: "https://i.ibb.co/N1g5vjJ/3.jpg", // ❗️ আপনার নিজের ছবি দিন
    alt: "Supershop Social Media Post Design",
  },
];

export function PortfolioSection() {
  return (
    <section className="w-full bg-blue-600 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        {/* সেকশনের শিরোনাম */}
        <h2 className="mb-12 text-center text-3xl font-extrabold text-white md:text-4xl">
          আমাদের তৈরি কিছু বিজ্ঞাপন!
        </h2>

        {/* পোর্টফোলিও আইটেমগুলোর গ্রিড */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={800}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* নেভিগেশন ডট */}
        <div className="mt-12 flex justify-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-white"></div>
          <div className="h-3 w-3 rounded-full bg-white/50"></div>
          <div className="h-3 w-3 rounded-full bg-white/50"></div>
          <div className="h-3 w-3 rounded-full bg-white/50"></div>
          <div className="h-3 w-3 rounded-full bg-white/50"></div>
        </div>
      </div>
    </section>
  );
}
