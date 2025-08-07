// src/components/shared/ClientsSection.tsx
import Image from "next/image";
import React from "react";

// ক্লায়েন্টদের লোগোর ডেটা
const clients = [
  { src: "https://i.ibb.co/mSgVfzt/client-1.png", alt: "Client Logo 1" },
  { src: "https://i.ibb.co/6D3tS4x/client-2.png", alt: "Client Logo 2" },
  { src: "https://i.ibb.co/GQLvV0x/client-3.png", alt: "Client Logo 3" },
  { src: "https://i.ibb.co/P9fCjMv/client-4.png", alt: "Client Logo 4" },
  { src: "https://i.ibb.co/JqYpL2y/client-5.png", alt: "Client Logo 5" },
  { src: "https://i.ibb.co/k3QxGvj/client-6.png", alt: "Client Logo 6" },
  { src: "https://i.ibb.co/R28Cg2R/client-7.png", alt: "Client Logo 7" },
  { src: "https://i.ibb.co/yQxGk9K/client-8.png", alt: "Client Logo 8" },
  { src: "https://i.ibb.co/3zdWcM9/client-9.png", alt: "Client Logo 9" },
];

export function ClientsSection() {
  return (
    <section className="w-full bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-lg sm:p-12">
          {/* উপরের ট্যাগ */}
          <div className="mb-4 inline-block rounded-full bg-green-100 px-6 py-2 text-sm font-bold text-green-700">
            আমাদের কাস্টমার
          </div>

          {/* প্রধান শিরোনাম */}
          <h2 className="mb-10 text-3xl font-extrabold text-green-800 md:text-4xl">
            আমাদের সম্মানিত ক্লায়েন্ট সমূহ!
          </h2>

          {/* ক্লায়েন্ট লোগোগুলো */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="relative h-16 w-32 grayscale transition-all duration-300 hover:grayscale-0"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
