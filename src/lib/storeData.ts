// src/lib/storeData.ts

export interface Product {
  id: string;
  titleEn: string;
  shortDescriptionEn: string;
  featuresEn: string[];
  categoryEn: string;
  titleBn: string;
  shortDescriptionBn: string;
  featuresBn: string[];
  categoryBn: string;
  price: number; // In USD
  originalPrice?: number; // In USD
  image: string; 
  fullImage?: string; 
  appImage?: string;
  techStack: string[];
  livePreviewUrl: string;
  isPopular?: boolean;
}

export const products: Product[] = [
  {
    id: 'premium-organic-store',
    // EN
    titleEn: 'Premium Organic Food Store',
    shortDescriptionEn: 'A high-converting e-commerce solution tailored for organic food, honey, and natural products with a premium brand layout.',
    featuresEn: ['Premium Brand Aesthetics', 'Direct Order Landing Pages', 'Mobile-Optimized Checkout', 'SEO & Performance Optimized', 'Lightning Fast Speed'],
    categoryEn: 'E-Commerce',
    
    // BN
    titleBn: 'প্রিমিয়াম অর্গানিক ফুড স্টোর',
    shortDescriptionBn: 'মধু, ঘি এবং ন্যাচারাল প্রোডাক্ট ব্যবসার জন্য একটি হাই-কনভার্টিং ও প্রিমিয়াম ই-কমার্স সলিউশন।',
    featuresBn: ['প্রিমিয়াম ব্র্যান্ড ডিজাইন', 'ডাইরেক্ট অর্ডার ল্যান্ডিং পেজ', 'মোবাইল ফ্রেন্ডলি চেকআউট', 'এসইও অপ্টিমাইজড', 'সুপার ফাস্ট লোডিং'],
    categoryBn: 'ই-কমার্স',

    price: 199,
    originalPrice: 299,
    image: 'https://i.ibb.co.com/ycy6z49g/porerbarazbd-vercel-app.jpg',
    techStack: ['Next.js', 'Tailwind', 'Framer Motion'],
    livePreviewUrl: 'https://porerbarazbd.vercel.app/',
    isPopular: true,
  },
  {
    id: 'fresh-grocery-store',
    // EN
    titleEn: 'Fresh Grocery & Supermart',
    shortDescriptionEn: 'A complete end-to-end digital storefront for fresh produce, meat, and daily grocery businesses.',
    featuresEn: ['Smart Category Filtering', 'Advanced Cart & Wishlist', 'Customer Dashboard', 'Comprehensive Admin Panel', 'SMS Notifications'],
    categoryEn: 'Grocery',

    // BN
    titleBn: 'ফ্রেশ গ্রোসারি ও সুপারমার্ট',
    shortDescriptionBn: 'তাজা শাকসবজি, মাছ-মাংস এবং নিত্যপ্রয়োজনীয় কাঁচাবাজার ব্যবসার জন্য একটি স্বয়ংসম্পূর্ণ ডিজিটাল স্টোরফ্রন্ট।',
    featuresBn: ['স্মার্ট ক্যাটাগরি ফিল্টারিং', 'অ্যাডভান্সড কার্ট ও উইশলিস্ট', 'কাস্টমার ড্যাশবোর্ড', 'পাওয়ারফুল অ্যাডমিন প্যানেল', 'এসএমএস নোটিফিকেশন'],
    categoryBn: 'গ্রোসারি',

    price: 179,
    originalPrice: 249,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB'],
    livePreviewUrl: 'https://pro-ecommerce-iota.vercel.app/',
  },
  {
    id: 'multi-vendor-marketplace',
    // EN
    titleEn: 'Multi-Vendor Marketplace (Web + App)',
    shortDescriptionEn: 'An enterprise-grade, Amazon-style multi-vendor platform for large-scale e-commerce, complete with iOS & Android apps.',
    featuresEn: ['Dedicated Vendor Dashboard', 'Advanced Search & Filters', 'Real-time Order Tracking', 'Native Android & iOS Apps', 'Rating & Review System'],
    categoryEn: 'Marketplace',
    
    // BN
    titleBn: 'মাল্টি-ভেন্ডর মার্কেটপ্লেস (ওয়েব + অ্যাপ)',
    shortDescriptionBn: 'অ্যামাজন বা দারাজের মতো বড় পরিসরের ই-কমার্স ব্যবসার জন্য এন্টারপ্রাইজ-গ্রেড মাল্টি-ভেন্ডর প্ল্যাটফর্ম (মোবাইল অ্যাপসহ)।',
    featuresBn: ['ডেডিকেটেড ভেন্ডর ড্যাশবোর্ড', 'অ্যাডভান্সড সার্চ ও ফিল্টার', 'রিয়েল-টাইম অর্ডার ট্র্যাকিং', 'অ্যান্ড্রয়েড ও আইওএস অ্যাপ', 'রেটিং ও রিভিউ সিস্টেম'],
    categoryBn: 'মার্কেটপ্লেস',
    
    price: 2999,
    originalPrice: 3999,
    image: 'https://i.ibb.co.com/PG8vqsBb/www-guptodhandigital-com-3.png',
    fullImage: 'https://i.ibb.co.com/9kv5dMfQ/www-guptodhandigital-com-4.png',
    appImage: 'https://i.ibb.co.com/6cdrV73V/Whats-App-Image-2025-12-28-at-1-26-58-PM.jpg',
    techStack: ['Next.js', 'MongoDB', 'Mongoose', 'SSLCommerz', 'Flutter', 'Tailwind CSS'],
    livePreviewUrl: 'https://guptodhandigital.com',
    isPopular: true,
  },
  {
    id: 'parcel-go-delivery',
    // EN
    titleEn: 'ParcelGo - Logistics & Delivery SaaS',
    shortDescriptionEn: 'A high-performance logistics and delivery management system featuring real-time tracking and automated workflows.',
    featuresEn: ['Live GPS Tracking', 'Merchant & Rider Panels', 'Smart Order Management', 'Role-based Authentication', 'Automated Invoicing', 'Analytics Dashboard'],
    categoryEn: 'Logistics & SaaS',

    // BN
    titleBn: 'পার্সেলগো - লজিস্টিকস ও ডেলিভারি স্যাস (SaaS)',
    shortDescriptionBn: 'রিয়েল-টাইম ট্র্যাকিং এবং অটোমেটেড ওয়ার্কফ্লো সমৃদ্ধ একটি হাই-পারফরম্যান্স ডেলিভারি ম্যানেজমেন্ট সিস্টেম।',
    featuresBn: ['লাইভ জিপিএস ট্র্যাকিং', 'মার্চেন্ট ও রাইডার প্যানেল', 'স্মার্ট অর্ডার ম্যানেজমেন্ট', 'রোল-বেসড সিকিউরিটি', 'অটোমেটেড ইনভয়েসিং', 'অ্যানালিটিক্স ড্যাশবোর্ড'],
    categoryBn: 'লজিস্টিকস ও সফটওয়্যার',

    price: 249,
    originalPrice: 349,
    image: 'https://i.ibb.co.com/n8fJwBFw/parcel-go-vercel-app.png', 
    fullImage: 'https://i.ibb.co.com/QvrNtWZp/parcel-go-vercel-app-1.png',
    techStack: ["React Js", 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB', 'Mongoose', 'shadcn UI', 'Framer Motion'],
    livePreviewUrl: 'https://parcel-go.vercel.app/',
    isPopular: true,
  },
  {
    id: 'agency-portfolio-pro',
    // EN
    titleEn: 'Creative Agency Portfolio Pro',
    shortDescriptionEn: 'A stunning, highly-animated portfolio website template crafted specifically for digital agencies and creative freelancers.',
    featuresEn: ['GSAP Smooth Animations', 'Dynamic Project Showcase', 'Integrated Contact Form', 'Seamless Dark/Light Mode', 'Optimized Performance'],
    categoryEn: 'Portfolio',

    // BN
    titleBn: 'ক্রিয়েটিভ এজেন্সি পোর্টফোলিও প্রো',
    shortDescriptionBn: 'ডিজিটাল এজেন্সি এবং ক্রিয়েটিভ ফ্রিল্যান্সারদের জন্য বিশেষভাবে তৈরি একটি দৃষ্টিনন্দন ও স্মুথ অ্যানিমেটেড পোর্টফোলিও টেমপ্লেট।',
    featuresBn: ['GSAP স্মুথ অ্যানিমেশন', 'ডায়নামিক প্রজেক্ট শোকেস', 'ইন্টিগ্রেটেড কন্টাক্ট ফর্ম', 'সিমলেস ডার্ক/লাইট মোড', 'অপ্টিমাইজড পারফরম্যান্স'],
    categoryBn: 'পোর্টফোলিও',

    price: 149,
    originalPrice: 199,
    image: 'https://i.ibb.co.com/3y9zQvHY/www-modifydigital-agency.png',
    techStack: ['React', 'GSAP', 'Tailwind'],
    livePreviewUrl: 'https://www.modifydigital.agency/',
  },
];