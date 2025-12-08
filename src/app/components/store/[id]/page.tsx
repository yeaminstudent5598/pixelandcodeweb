// src/app/store/[id]/page.tsx
import { products } from '@/lib/storeData';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ExternalLink, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetailsPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    // ✅ FIXED: bg-white এর সাথে dark:bg-gray-950 যোগ করা হয়েছে
    <main className="min-h-screen bg-white dark:bg-gray-950 py-20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link 
          href="/store" 
          className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Store
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: Image */}
          <div className="rounded-3xl border dark:border-gray-800 bg-gray-100 dark:bg-gray-900 p-8 flex items-center justify-center min-h-[400px]">
             {/* এখানে আসল ইমেজ দিন */}
             <span className="text-5xl font-bold text-gray-300 dark:text-gray-700">Product Image Preview</span>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                {product.category}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  ৳{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              {product.title}
            </h1>
            <p className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              ৳{product.price.toLocaleString()}
            </p>

            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              {product.shortDescription} বিস্তারিত বিবরণ এখানে থাকবে। এই টেমপ্লেটটি ব্যবহার করে আপনি খুব সহজেই আপনার ব্যবসা অনলাইনে নিয়ে আসতে পারবেন। এটি সম্পূর্ণ রেসপন্সিভ এবং এসইও ফ্রেন্ডলি।
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">Technology Used:</h3>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((tech) => (
                  <span key={tech} className="rounded-md border dark:border-gray-700 px-3 py-1 text-sm font-medium text-gray-600 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="mb-8 rounded-xl bg-gray-50 dark:bg-gray-900 dark:border dark:border-gray-800 p-6">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Key Features:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="mt-auto flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="w-full rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-lg text-white">
                <ShoppingBag className="mr-2 h-5 w-5" /> Buy Now
              </Button>
              <Button size="lg" variant="outline" className="w-full rounded-full border-2 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 text-lg" asChild>
                <a href={product.livePreviewUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" /> Live Preview
                </a>
              </Button>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
              Secure Payment • Instant Download • 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}