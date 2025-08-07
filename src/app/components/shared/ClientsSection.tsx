// src/components/shared/ClientsSection.tsx
import Image from "next/image";
import React from "react";

// ক্লায়েন্টদের লোগোর ডেটা (র‍্যান্ডম কোম্পানির লোগো দিয়ে আপডেট করা হয়েছে)
const clients = [
  { src: "https://cdn.worldvectorlogo.com/logos/google-1-1.svg", alt: "Google" },
  { src: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg", alt: "Microsoft" },
  { src: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg", alt: "Netflix" },
  { src: "https://cdn.worldvectorlogo.com/logos/airbnb.svg", alt: "Airbnb" },
  { src: "https://cdn.worldvectorlogo.com/logos/uber-2.svg", alt: "Uber" },
  { src: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg", alt: "Slack" },
  { src: "https://cdn.worldvectorlogo.com/logos/google-1-1.svg", alt: "Google" },
  { src: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg", alt: "Microsoft" },
  { src: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg", alt: "Netflix" },
  { src: "https://cdn.worldvectorlogo.com/logos/airbnb.svg", alt: "Airbnb" },
  { src: "https://cdn.worldvectorlogo.com/logos/uber-2.svg", alt: "Uber" },
  { src: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg", alt: "Slack" },
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

          {/* ক্লায়েন্ট লোগোগুলো */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="relative h-12 w-28 grayscale transition-all duration-300 hover:grayscale-0"
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
