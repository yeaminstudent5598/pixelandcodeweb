/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/**', // i.ibb.co.com এর যেকোনো পাথ থেকে ছবি লোড করার অনুমতি দিন
      },
      {
        protocol: 'https',
        hostname: 'moasbd.com', // ✅ নতুন ডোমেইন যুক্ত করুন
      },
    ],
  },
};

export default nextConfig;