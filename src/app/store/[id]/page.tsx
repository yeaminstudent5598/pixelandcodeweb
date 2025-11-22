// src/app/store/[id]/page.tsx
import { products } from '@/lib/storeData';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BuyNowModal } from '../BuyNowModal';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailsPage(props: Props) {
  const params = await props.params;
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 py-12 md:py-20 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Link 
          href="/store" 
          className="mb-6 inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Store
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image Section - রেসপন্সিভ অ্যাসপেক্ট রেশিও */}
          <div className="w-full">
             <div className="relative aspect-video w-full overflow-hidden rounded-2xl border dark:border-gray-800 bg-gray-100 dark:bg-gray-900 shadow-sm">
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-xl font-bold text-gray-300 dark:text-gray-700">No Image</span>
                  </div>
                )}
             </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                {product.category}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  ৳{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* ফন্ট সাইজ রেসপন্সিভ করা হয়েছে */}
            <h1 className="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
              {product.title}
            </h1>
            <p className="mb-5 text-2xl font-bold text-blue-600 dark:text-blue-400 sm:text-3xl">
              ৳{product.price.toLocaleString()}
            </p>

            <p className="mb-6 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.shortDescription} এই ওয়েবসাইটটি সম্পূর্ণ রেডিমেড এবং আপনার ব্যবসার জন্য প্রস্তুত। এটি ব্যবহার করে আপনি আজই আপনার অনলাইন ব্যবসা শুরু করতে পারেন।
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Technology Used</h3>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((tech) => (
                  <span key={tech} className="rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="mb-8 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-5">
              <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Key Features</h3>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions - ফিক্সড লেআউট */}
            <div className="mt-auto flex flex-col gap-3 sm:flex-row">
              
              {/* Buy Now Modal - সমান জায়গা নিবে */}
              <div className="flex-1">
                <BuyNowModal productName={product.title} price={product.price} />
              </div>

              {/* Live Preview Button - সাইজ ঠিক করা হয়েছে */}
              <Button 
                size="lg" 
                variant="outline" 
                className="flex-1 rounded-full border-2 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 text-base font-semibold" 
                asChild
              >
                <a href={product.livePreviewUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Preview
                </a>
              </Button>
            </div>
            
            <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
              Secure Payment • Instant Delivery • 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}