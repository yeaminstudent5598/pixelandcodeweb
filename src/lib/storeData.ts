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
  price: number;
  originalPrice?: number;
  image: string; // This is the Banner
  fullImage?: string; // This is the Long Screenshot
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
    shortDescriptionEn: 'A premium e-commerce solution for organic food, honey, and ghee businesses with a "Ghorer Bazar" style layout.',
    featuresEn: ['Premium Brand Look', 'Direct Order Landing Page', 'Mobile Optimized Checkout', 'SEO Friendly', 'Fast Speed'],
    categoryEn: 'E-Commerce',
    
    // BN
    titleBn: 'প্রিমিয়াম অর্গানিক ফুড স্টোর',
    shortDescriptionBn: 'মধু, ঘি, এবং প্রিমিয়াম অর্গানিক ফুড ব্যবসার জন্য "ঘরের বাজার" স্টাইল ই-কমার্স সলিউশন।',
    featuresBn: ['প্রিমিয়াম ব্র্যান্ড লুক', 'ডাইরেক্ট অর্ডার ল্যান্ডিং পেজ', 'মোবাইল অপ্টিমাইজড চেকআউট', 'এসইও ফ্রেন্ডলি', 'দ্রুত লোডিং স্পিড'],
    categoryBn: 'ই-কমার্স',

    price: 22000,
    originalPrice: 30000,
    image: 'https://i.ibb.co.com/ycy6z49g/porerbarazbd-vercel-app.jpg',
    techStack: ['Next.js', 'Tailwind', 'Framer Motion'],
    livePreviewUrl: 'https://porerbarazbd.vercel.app/',
    isPopular: true,
  },
  {
    id: 'fresh-grocery-store',
    // EN
    titleEn: 'Fresh Grocery & Food Store',
    shortDescriptionEn: 'Complete solution for fish, meat, vegetables, and daily grocery businesses.',
    featuresEn: ['Category-wise Filtering', 'Cart & Wishlist', 'User Dashboard', 'Admin Panel', 'SMS Notification'],
    categoryEn: 'Grocery',

    // BN
    titleBn: 'ফ্রেশ গ্রোসারি ও ফুড স্টোর',
    shortDescriptionBn: 'মাছ, মাংস, শাকসবজি এবং নিত্যপ্রয়োজনীয় কাঁচাবাজার ব্যবসার জন্য কমপ্লিট সলিউশন।',
    featuresBn: ['ক্যাটাগরি অনুযায়ী ফিল্টারিং', 'কার্ট ও উইশলিস্ট', 'ইউজার ড্যাশবোর্ড', 'অ্যাডমিন প্যানেল', 'এসএমএস নোটিফিকেশন'],
    categoryBn: 'গ্রোসারি',

    price: 20000,
    originalPrice: 28000,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB'],
    livePreviewUrl: 'https://pro-ecommerce-iota.vercel.app/',
  },
  {
    id: 'multi-vendor-marketplace',
    titleEn: 'Multi-Vendor Marketplace (Web + App)',
    shortDescriptionEn: 'Amazon-like multi-vendor solution for fashion, gadgets, or large-scale e-commerce with Mobile App.',
    featuresEn: ['Vendor Dashboard', 'Advanced Search', 'Order Tracking', 'Android & iOS App', 'Review System'],
    categoryEn: 'Marketplace',
    titleBn: 'মাল্টি-ভেন্ডর মার্কেটপ্লেস (ওয়েবসাইট + অ্যাপ)',
    shortDescriptionBn: 'ফ্যাশন, গ্যাজেট বা বড় পরিসরের ই-কমার্স ব্যবসার জন্য দারাজ বা আমাজনের মতো সলিউশন সাথে মোবাইল অ্যাপ।',
    featuresBn: ['ভেন্ডর ড্যাশবোর্ড', 'অ্যাডভান্সড সার্চ', 'অর্ডার ট্র্যাকিং', 'অ্যান্ড্রয়েড ও আইওএস অ্যাপ', 'রিভিউ সিস্টেম'],
    categoryBn: 'মার্কেটপ্লেস',
    price: 350000,
    originalPrice: 500000,
    image: 'https://i.ibb.co.com/PG8vqsBb/www-guptodhandigital-com-3.png',
    fullImage: 'https://i.ibb.co.com/9kv5dMfQ/www-guptodhandigital-com-4.png',
    appImage: 'https://i.ibb.co.com/6cdrV73V/Whats-App-Image-2025-12-28-at-1-26-58-PM.jpg', // আপনার দেওয়া অ্যাপ ইমেজ
    techStack: ['Next.js', 'Mongodb','Mongoose', 'SSLCommerz', 'Flutter', 'Tailwind CSS'],
    livePreviewUrl: 'https://guptodhandigital.com',
    isPopular: true,
  },
{
    id: 'parcel-go-delivery',
    titleEn: 'ParcelGo - End-to-End Delivery Management System',
    shortDescriptionEn: 'A high-performance logistics solution featuring real-time tracking, multi-role dashboards, and automated shipping workflows.',
    featuresEn: ['Real-time Tracking', 'Sender & Courier Panels', 'Order Management', 'Secure Authentication', 'Responsive Dashboard', 'Automated Invoicing'],
    categoryEn: 'Logistics & SaaS',

    titleBn: 'পার্সেলগো - কমপ্লিট ডেলিভারি ম্যানেজমেন্ট সিস্টেম',
    shortDescriptionBn: 'রিয়েল-টাইম ট্র্যাকিং, মার্চেন্ট ও রাইডার প্যানেল এবং অটোমেটেড শিপিং সলিউশন সহ একটি আধুনিক লজিস্টিকস প্ল্যাটফর্ম।',
    featuresBn: ['রিয়েল-টাইম ট্র্যাকিং', 'প্রেরক ও কুরিয়ার প্যানেল', 'অর্ডার ম্যানেজমেন্ট', 'সিকিউর অথেন্টিকেশন', 'রেসপন্সিভ ড্যাশবোর্ড', 'অটোমেটেড ইনভয়েস'],
    categoryBn: 'লজিস্টিকস ও সফটওয়্যার',

    price: 25000,
    originalPrice: 35000,
    image: 'https://i.ibb.co.com/n8fJwBFw/parcel-go-vercel-app.png', 
    fullImage: 'https://i.ibb.co.com/QvrNtWZp/parcel-go-vercel-app-1.png', // ফুল স্ক্রিনশট
    techStack: ["React Js", 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB', 'Mongoose', 'shadcn UI', 'Framer Motion'],
    livePreviewUrl: 'https://parcel-go.vercel.app/',
    isPopular: true,
  },
  {
    id: 'agency-portfolio-pro',
    // EN
    titleEn: 'Creative Agency Portfolio',
    shortDescriptionEn: 'High-end portfolio website template for digital agencies or freelancers.',
    featuresEn: ['Smooth Animations', 'Project Showcase Grid', 'Contact Form with Email', 'Dark/Light Mode', 'Fast Performance'],
    categoryEn: 'Portfolio',

    // BN
    titleBn: 'ক্রিয়েটিভ এজেন্সি পোর্টফোলিও',
    shortDescriptionBn: 'ডিজিটাল এজেন্সি বা ফ্রিল্যান্সারদের জন্য হাই-এন্ড পোর্টফোলিও ওয়েবসাইট টেমপ্লেট।',
    featuresBn: ['স্মুথ অ্যানিমেশন', 'প্রজেক্ট শোকেস গ্রিড', 'ইমেইল সহ কন্টাক্ট ফর্ম', 'ডার্ক/লাইট মোড', 'দ্রুত পারফরম্যান্স'],
    categoryBn: 'পোর্টফোলিও',

    price: 15000,
    originalPrice: 20000,
    image: 'https://i.ibb.co.com/3y9zQvHY/www-modifydigital-agency.png',
    techStack: ['React', 'GSAP', 'Tailwind'],
    livePreviewUrl: 'https://www.modifydigital.agency/',
  },
];