export interface SimpleLink {
  label: string;
  href: string;
}

export interface MegaMenuData {
  leftTitle: string;
  leftBoxes: {
    title: string;
    text: string;
    href: string;
  }[];
  rightTitle: string;
  rightLinks: SimpleLink[];
  bottomTitle: string;
  bottomLinks: SimpleLink[];
  thumbnailCaption: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  megaMenu?: MegaMenuData;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/service",
    hasDropdown: true,
    megaMenu: {
      leftTitle: "models of cooperation",
      leftBoxes: [
        {
          title: "Our Best Team",
          text: "Experienced developers and designers dedicated to your project.",
          href: "/about",
        },
        {
          title: "Our Team Growth",
          text: "A growing team ready to scale with your business needs.",
          href: "/about",
        },
      ],
      rightTitle: "core services",
      rightLinks: [
        { label: "Web Design & Development", href: "/service#web" },
        { label: "Digital Marketing", href: "/service#marketing" },
        { label: "SEO", href: "/service#seo" },
        { label: "Graphics Design", href: "/service#graphics" },
      ],
      bottomTitle: "Dedicated solutions",
      bottomLinks: [
        { label: "Meta Marketing", href: "/service#meta" },
        { label: "Video Editing", href: "/service#video" },
        { label: "UI/UX Design", href: "/service#uiux" },
      ],
      thumbnailCaption: "See how we work, start to finish.",
    },
  },
  { label: "Work", href: "/works" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contacts", href: "/contact" },
];