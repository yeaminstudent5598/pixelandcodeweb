/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'moasbd.com', // ✅ নতুন ডোমেইন যুক্ত করুন
      },
    ],
  },
};

export default nextConfig;