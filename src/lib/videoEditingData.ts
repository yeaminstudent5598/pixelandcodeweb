import { packageData } from "./packagesData";

export const SITE_URL = "https://pixelandcode.agency";
export const PAGE_URL = `${SITE_URL}/video-editing`;
export const PACKAGES_URL = `${SITE_URL}/packages`;

/* Video plan er "starting from" price, packagesData theke auto ashe */
export const VIDEO_START_PRICE = packageData.video.monthly[0].price;

export type VideoService = {
  key: string;
  title: string;
  description: string;
  features: string[];
};

export const VIDEO_SERVICES: VideoService[] = [
  {
    key: "reels",
    title: "Reels & Shorts",
    description:
      "Vertical, scroll-stopping edits for Facebook, Instagram and YouTube Shorts.",
    features: ["Fast, punchy pacing", "Captions and transitions", "9:16 export"],
  },
  {
    key: "youtube",
    title: "YouTube Videos",
    description:
      "Clean, engaging edits for long-form videos, vlogs and talking-head content.",
    features: ["Story-driven cuts", "Music and sound balance", "16:9 export"],
  },
  {
    key: "promo",
    title: "Promo & Ad Videos",
    description:
      "Short promotional videos that explain your offer and push people to act.",
    features: ["Clear message and CTA", "Motion graphics", "Platform-ready formats"],
  },
  {
    key: "corporate",
    title: "Corporate Videos",
    description:
      "Professional company videos, interviews and presentations with a polished look.",
    features: ["Brand-safe, clean style", "Titles and lower thirds", "Clear audio"],
  },
  {
    key: "motion",
    title: "Motion Graphics",
    description:
      "Animated titles, logo reveals and graphics that lift the quality of your videos.",
    features: ["Animated text", "Logo animation", "Custom transitions"],
  },
  {
    key: "product",
    title: "Product & Event Videos",
    description:
      "Highlight videos for product launches, showcases and events.",
    features: ["Color correction", "Music and pacing", "Short and full versions"],
  },
];

export const PROCESS_STEPS = [
  {
    title: "Share your footage",
    desc: "Send your raw clips with a short brief about the style, length and platform.",
  },
  {
    title: "Rough cut",
    desc: "We cut the story together, set the pacing and add music, color and captions.",
  },
  {
    title: "Feedback",
    desc: "You review the draft and tell us what to change. We refine it with you.",
  },
  {
    title: "Final delivery",
    desc: "We export your final video in the right formats, ready to publish.",
  },
];

export const FORMATS = [
  { ratio: "9:16", w: 9, h: 16, title: "Vertical", note: "Reels, Shorts and Stories" },
  { ratio: "16:9", w: 16, h: 9, title: "Widescreen", note: "YouTube and websites" },
  { ratio: "1:1", w: 1, h: 1, title: "Square", note: "Feed posts and ads" },
];

/* Featured work: YouTube video ID dile section nijei ashbe.
   Khali thakle section dekhabe na.
   ID = youtube.com/watch?v=XXXXXXXXXXX er XXXXXXXXXXX ongsho */
export type WorkItem = {
  id: string;
  title: string;
  category: string;
  youtubeId: string;
};

export const WORKS: WorkItem[] = [
  // { id: "1", title: "Podcast edit", category: "Podcast", youtubeId: "XXXXXXXXXXX" },
];

export const FAQS = [
  {
    q: "What types of videos do you edit?",
    a: "We edit Reels and Shorts, YouTube videos, promo and ad videos, corporate videos, and product or event videos. We can also add motion graphics where needed.",
  },
  {
    q: "How do I send my footage?",
    a: "Share your raw footage through Google Drive, Dropbox or any download link, along with a short brief about the style you want.",
  },
  {
    q: "Which platforms do you edit for?",
    a: "We edit for YouTube, Facebook, Instagram Reels and other social platforms, and export in the right format for each one: vertical 9:16, widescreen 16:9 or square 1:1.",
  },
  {
    q: "Can you add music, color grading and motion graphics?",
    a: "Yes. Depending on your plan we add transitions, royalty-free music, color grading and motion graphics. Tell us what you need and we will confirm it before we start.",
  },
  {
    q: "How long does editing take?",
    a: "It depends on the length and complexity of the video. A short Reel is much quicker than a long YouTube video. We agree on a timeline with you before we begin.",
  },
  {
    q: "How much does video editing cost?",
    a: `Our video editing plans start from $${VIDEO_START_PRICE} per month. You can compare the Basic, Pro and Business plans on our packages page, or contact us for a custom quote.`,
  },
];