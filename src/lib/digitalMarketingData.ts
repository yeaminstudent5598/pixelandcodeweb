import { packageData } from "./packagesData";

export const SITE_URL = "https://pixelandcode.agency";
export const PAGE_URL = `${SITE_URL}/digital-marketing`;
export const PACKAGES_URL = `${SITE_URL}/packages`;

/* Facebook Ads plan er "starting from" price, packagesData theke auto ashe */
export const FB_START_PRICE = packageData.facebook.monthly[0].price;

export type MarketingService = {
  key: string;
  title: string;
  description: string;
  features: string[];
  href?: string;
};

export const SERVICES: MarketingService[] = [
  {
    key: "strategy",
    title: "Strategy & Planning",
    description:
      "We study your business, audience and competitors, then plan campaigns around clear goals.",
    features: ["Audience research", "Goal and budget planning", "Channel selection"],
  },
  {
    key: "meta",
    title: "Facebook & Instagram Ads",
    description:
      "Paid campaigns that put your offer in front of the right people at the right time.",
    features: ["Audience targeting", "Ad creatives and copy", "Budget optimization"],
    href: "/meta-marketing",
  },
  {
    key: "seo",
    title: "SEO",
    description:
      "Help customers find you on Google with better rankings and useful content.",
    features: ["Keyword research", "On-page and technical SEO", "Content guidance"],
    href: "/seo",
  },
  {
    key: "content",
    title: "Social Media Content",
    description:
      "Posts, graphics and short videos that keep your brand active and consistent.",
    features: ["Post designs", "Reels and short videos", "Content planning"],
    href: "/graphics-design",
  },
  {
    key: "landing",
    title: "Landing Pages & Tracking",
    description:
      "Fast pages built to turn visitors into enquiries and orders, with tracking set up.",
    features: ["Conversion-focused pages", "Pixel and analytics setup", "Mobile-first design"],
    href: "/web-service",
  },
  {
    key: "reporting",
    title: "Reporting & Optimization",
    description:
      "We track reach, clicks, leads and sales, and keep improving what works.",
    features: ["Clear performance reports", "Testing and optimization", "Regular check-ins"],
  },
];

export const PROCESS = [
  {
    title: "Audit & goals",
    desc: "We understand your business, your customers and what you want to achieve.",
  },
  {
    title: "Strategy & setup",
    desc: "We plan the channels, budget and creatives, and set up tracking.",
  },
  {
    title: "Launch",
    desc: "We launch your campaigns and watch the first results closely.",
  },
  {
    title: "Measure & improve",
    desc: "We share simple reports and keep improving what brings you customers.",
  },
];

export const FAQS = [
  {
    q: "What digital marketing services do you offer?",
    a: "We offer Facebook and Instagram ads, SEO, social media content, landing pages with tracking, and regular reporting. We plan these around your business goals instead of selling separate, disconnected services.",
  },
  {
    q: "Do you run Facebook and Instagram ads for me?",
    a: "Yes. Our Facebook Ads plans include ad credit, a campaign duration and an expected reach range. You can see the details of each plan on our packages page.",
  },
  {
    q: "How long before I see results?",
    a: "Paid ads can start bringing clicks and enquiries quickly, while SEO usually takes longer to build. Results depend on your business, budget and competition, and we review them with you along the way.",
  },
  {
    q: "How do you measure success?",
    a: "We track reach, clicks, leads and sales, and share simple reports so you can see what is working and where your budget is going.",
  },
  {
    q: "Do I need a website to start?",
    a: "Marketing works best when people land on a fast, clear page. If you do not have one yet, we can build a website or landing page for you.",
  },
  {
    q: "How much does digital marketing cost?",
    a: `Our Facebook Ads plans start from $${FB_START_PRICE} per month. You can compare all plans on our packages page, or contact us for a custom plan.`,
  },
];