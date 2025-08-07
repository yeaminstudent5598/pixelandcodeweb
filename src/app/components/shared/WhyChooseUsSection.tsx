// src/components/shared/WhyChooseUsSection.tsx
import Image from "next/image";
import React from "react";
import { CheckCircle, BarChart, Users, Headset, Play } from "lucide-react";

// ফিচারগুলোর ডেটা
const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: "সেইফ এন্ড সিকিওর",
    description: "অত্যন্ত উন্নত মানের টুলস ব্যবহার করে সার্ভিস প্রদান",
    bgColor: "bg-orange-500",
  },
  {
    icon: <BarChart className="h-8 w-8 text-white" />,
    title: "এনালিটিক্স প্রদান",
    description: "সার্ভিস চলাকালীন সময়ে অ্যানালিটিক্স আপডেট প্রদান করা",
    bgColor: "bg-purple-500",
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "দক্ষ টিম মেম্বার সার্ভিস",
    description: "মোয়াস বিডির দক্ষ টিম মেম্বার সার্বিক সেবা নিশ্চিত করে",
    bgColor: "bg-yellow-500",
  },
  {
    icon: <Headset className="h-8 w-8 text-white" />,
    title: "২৪/৭ কাস্টমার সাপোর্ট",
    description: "আমাদের থেকে পাচ্ছেন সপ্তাহে ৭ দিন এবং দিনরাত ২৪ ঘণ্টা কাস্টমার সাপোর্ট",
    bgColor: "bg-blue-500",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-purple-50/50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* বাম কলাম: টেক্সট এবং ফিচার */}
          <div className="flex flex-col">
            <h2 className="mb-10 text-3xl font-extrabold text-gray-800 md:text-4xl">
              যে কারণে মোয়াস বিডি <br /> #১ সেরা প্রতিষ্ঠান
            </h2>
            <ul className="space-y-6">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg shadow-md ${feature.bgColor}`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ডান কলাম: ছবি এবং ডেকোরেশন */}
          <div className="relative hidden h-full min-h-[550px] items-center justify-center lg:flex">
            {/* ডেকোরেটিভ শেপ */}
            <div className="absolute right-0 top-0 h-12 w-12 translate-x-1/2 -translate-y-1/2 rounded-lg bg-green-200/50 transform rotate-45"></div>
            <div className="absolute bottom-1/4 right-0 h-16 w-16 translate-x-1/2 translate-y-1/2 rounded-full border-8 border-yellow-200/50"></div>
            <div className="absolute left-0 top-1/4 h-10 w-10 -translate-y-1/2 -translate-x-1/2 rounded-full bg-purple-200/50"></div>
            <div className="absolute bottom-1/2 left-0 -translate-x-1/2 translate-y-1/2 rounded-full bg-pink-200/50 p-2 text-white">
                <Play className="h-6 w-6" />
            </div>
            
            {/* মূল বৃত্তাকার ব্যাকগ্রাউন্ড */}
            <div className="absolute h-[450px] w-[450px] rounded-full bg-purple-200/80"></div>
            
            {/* মোবাইল অ্যাপের ছবি */}
            <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/Yeamin.png" // ✅ আপনার নতুন ছবি যুক্ত করা হয়েছে
                alt="App analytics screenshot"
                width={300}
                height={650}
                className="rounded-[32px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
