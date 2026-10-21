/* Web Service page er shared data.
   Page (server) ar content (client) duto-i ekhan theke nei, tai kokhono mismatch hoy na. */

export const SITE_URL = "https://pixelandcode.agency";
export const PAGE_URL = `${SITE_URL}/web-service`;

export const PHONE_DISPLAY = "+880 1641-801705";
export const PHONE_TEL = "+8801641801705";
export const WHATSAPP = "8801641801705";

export type WebsiteType = {
  key: string;
  title: string;
  description: string;
  features: string[];
  fromBdt: number; // "Starting from" price (BDT)
};

export const WEBSITE_TYPES: WebsiteType[] = [
  {
    key: "ecommerce",
    title: "E-commerce Website",
    description:
      "A full-featured online store with payment gateway, inventory and order management.",
    features: [
      "Product management",
      "bKash / card payment",
      "Order tracking",
      "Admin dashboard",
    ],
    fromBdt: 35000,
  },
  {
    key: "corporate",
    title: "Corporate Website",
    description:
      "A professional business website with service pages, team section and lead capture.",
    features: ["Service pages", "Team section", "Contact forms", "SEO optimised"],
    fromBdt: 18000,
  },
  {
    key: "portfolio",
    title: "Portfolio & Agency Website",
    description:
      "A visually strong portfolio to show your work, share case studies and win new clients.",
    features: [
      "Project showcase",
      "Case studies",
      "Client testimonials",
      "Animated UI",
    ],
    fromBdt: 12000,
  },
  {
    key: "lms",
    title: "LMS / EdTech Platform",
    description:
      "A learning management system with course builder, video lessons, quizzes and certificates.",
    features: [
      "Course builder",
      "Video lessons",
      "Quiz & certificates",
      "Student dashboard",
    ],
    fromBdt: 55000,
  },
  {
    key: "blog",
    title: "Blog & News Portal",
    description:
      "A content-rich blog or news portal with categories, search and newsletter integration.",
    features: [
      "Rich text editor",
      "Categories & tags",
      "Newsletter",
      "SEO-ready",
    ],
    fromBdt: 10000,
  },
  {
    key: "landing",
    title: "Landing Page",
    description:
      "A focused single-page website designed to turn visitors into paying customers.",
    features: [
      "Conversion-focused layout",
      "Clear call to action",
      "Fast loading",
      "Mobile-first",
    ],
    fromBdt: 6000,
  },
];

export const PROCESS_STEPS = [
  {
    title: "Discovery",
    desc: "We learn your business goals, target audience and project scope through a detailed consultation.",
  },
  {
    title: "Design",
    desc: "We create UI/UX wireframes and prototypes that match your brand identity.",
  },
  {
    title: "Development",
    desc: "We build your website with clean, scalable code using Next.js, React and modern tools.",
  },
  {
    title: "Launch & Support",
    desc: "We deploy your website, test it carefully and keep supporting it after launch.",
  },
];

export const TECH_GROUPS = [
  {
    group: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "FastAPI", "REST API"],
  },
  {
    group: "Database",
    items: ["MongoDB", "PostgreSQL", "Prisma ORM", "Redis"],
  },
  {
    group: "Deployment",
    items: ["Vercel", "Render", "Cloudflare", "GitHub CI/CD"],
  },
];

export const FAQS = [
  {
    q: "How long does it take to build a website?",
    a: "Usually 2 to 6 weeks, depending on how complex the project is. A landing page takes about 3 to 5 days, and a full e-commerce website takes 4 to 6 weeks.",
  },
  {
    q: "Do you provide hosting and domain setup?",
    a: "Yes. We help you set up your domain, hosting (Vercel, Render or shared hosting), SSL certificate and DNS configuration.",
  },
  {
    q: "Can I update the website content myself?",
    a: "Yes. We build a custom CMS or connect a headless CMS such as Sanity or Contentful, so you can edit content without any coding knowledge.",
  },
  {
    q: "Which technologies do you use?",
    a: "We mainly use Next.js, React, TypeScript and Tailwind CSS on the front end, with Node.js and databases such as MongoDB or PostgreSQL on the back end.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bKash, Nagad, bank transfer and international payments through Wise or PayPal. Our usual terms are 50% advance and 50% on delivery.",
  },
];