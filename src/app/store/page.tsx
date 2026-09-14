'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Users,
  UserRound,
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin,
  CalendarDays,
  BriefcaseBusiness,
  CreditCard,
  FileText,
  Clock3,
  CheckCircle2,
  AlertCircle,
  CircleDollarSign,
  MoreHorizontal,
  ChevronRight,
  X,
  ExternalLink,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
  FolderKanban,
  Activity,
  ShieldCheck,
  Code2,
  Palette,
  Smartphone,
  Monitor,
  Megaphone,
  Video,
  Database,
  Server,
  Tag,
  UserCheck,
  Send,
  Paperclip,
  Download,
  Star,
  Zap,
  ArrowUpRight,
  Filter,
  Plus,
} from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

/* =========================================================
   TYPES
========================================================= */

type ClientStatus =
  | 'Active'
  | 'Completed'
  | 'Pending'
  | 'On Hold'
  | 'Lead';

type Priority = 'High' | 'Medium' | 'Low';

type Client = {
  id: number;

  /* Personal */
  name: string;
  avatar: string;
  designation: string;
  email: string;
  phone: string;
  alternatePhone: string;
  whatsapp: string;

  /* Company */
  company: string;
  industry: string;
  companySize: string;
  website: string;
  companyEmail: string;
  companyPhone: string;
  address: string;
  city: string;
  country: string;

  /* Social */
  linkedin: string;
  facebook: string;
  instagram: string;

  /* Client management */
  status: ClientStatus;
  priority: Priority;
  source: string;
  assignedTo: string;
  accountManager: string;

  /* Project */
  projectName: string;
  projectType: string;
  services: string[];
  description: string;
  startDate: string;
  deadline: string;
  progress: number;

  /* Financial */
  budget: string;
  paid: string;
  due: string;
  paymentStatus: string;
  paymentMethod: string;
  billingCycle: string;

  /* Contract */
  contractStatus: string;
  contractStart: string;
  contractEnd: string;
  contractValue: string;

  /* Technical */
  technology: string[];
  hosting: string;
  domain: string;
  cms: string;
  database: string;

  /* Communication */
  preferredContact: string;
  bestTime: string;
  timezone: string;
  communicationLanguage: string;

  /* Extra */
  notes: string;
  tags: string[];
  documents: string[];

  /* Activity */
  lastContact: string;
  nextFollowUp: string;
  createdAt: string;
};

/* =========================================================
   DATA
========================================================= */

const CLIENTS: Client[] = [
  {
    id: 1,

    name: 'Alex Morgan',
    avatar: 'AM',
    designation: 'Founder & CEO',
    email: 'alex@example.com',
    phone: '+1 415 555 0198',
    alternatePhone: '+1 415 555 0112',
    whatsapp: '+1 415 555 0198',

    company: 'Nova Technologies',
    industry: 'Technology',
    companySize: '51–200 employees',
    website: 'https://novatech.example',
    companyEmail: 'hello@novatech.example',
    companyPhone: '+1 415 555 0180',
    address: '425 Market Street',
    city: 'San Francisco',
    country: 'United States',

    linkedin: '#',
    facebook: '#',
    instagram: '#',

    status: 'Active',
    priority: 'High',
    source: 'Website',
    assignedTo: 'Rakibul Hasan',
    accountManager: 'Rakibul Hasan',

    projectName: 'Nova Enterprise Platform',
    projectType: 'Web Application',
    services: [
      'Web Development',
      'UI/UX Design',
      'Cloud Deployment',
      'Maintenance',
    ],
    description:
      'A scalable enterprise platform designed to manage customers, analytics, internal operations and business workflows.',
    startDate: '12 Aug 2026',
    deadline: '20 Nov 2026',
    progress: 68,

    budget: '$18,500',
    paid: '$12,000',
    due: '$6,500',
    paymentStatus: 'Partially Paid',
    paymentMethod: 'Bank Transfer',
    billingCycle: 'Milestone',

    contractStatus: 'Active',
    contractStart: '12 Aug 2026',
    contractEnd: '20 Nov 2026',
    contractValue: '$18,500',

    technology: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'Tailwind CSS',
    ],
    hosting: 'Vercel',
    domain: 'novatech.example',
    cms: 'Custom CMS',
    database: 'MongoDB',

    preferredContact: 'WhatsApp',
    bestTime: '10:00 AM – 4:00 PM',
    timezone: 'GMT -7',
    communicationLanguage: 'English',

    notes:
      'Client prefers clean enterprise interfaces and weekly progress updates. Final approval should be taken before major UI changes.',

    tags: ['Enterprise', 'Priority', 'Long Term', 'Web App'],

    documents: [
      'Project Agreement.pdf',
      'Brand Guidelines.pdf',
      'Technical Requirements.docx',
      'Invoice-August.pdf',
    ],

    lastContact: 'Today, 10:42 AM',
    nextFollowUp: '18 Aug 2026',
    createdAt: '12 Aug 2026',
  },

  {
    id: 2,

    name: 'Sarah Wilson',
    avatar: 'SW',
    designation: 'Marketing Director',
    email: 'sarah@brightstudio.example',
    phone: '+44 20 7946 0958',
    alternatePhone: '+44 20 7946 0959',
    whatsapp: '+44 20 7946 0958',

    company: 'Bright Studio',
    industry: 'Creative Agency',
    companySize: '11–50 employees',
    website: 'https://brightstudio.example',
    companyEmail: 'hello@brightstudio.example',
    companyPhone: '+44 20 7946 0900',
    address: '18 King Street',
    city: 'London',
    country: 'United Kingdom',

    linkedin: '#',
    facebook: '#',
    instagram: '#',

    status: 'Active',
    priority: 'Medium',
    source: 'Referral',
    assignedTo: 'Abib Abdul Wahid',
    accountManager: 'Abib Abdul Wahid',

    projectName: 'Bright Studio Website',
    projectType: 'Corporate Website',
    services: [
      'Web Development',
      'Graphic Design',
      'SEO',
      'Content Management',
    ],
    description:
      'Modern corporate website with CMS, portfolio management, lead generation and SEO optimization.',
    startDate: '02 Aug 2026',
    deadline: '30 Sep 2026',
    progress: 45,

    budget: '$7,800',
    paid: '$4,500',
    due: '$3,300',
    paymentStatus: 'Partially Paid',
    paymentMethod: 'Wise',
    billingCycle: 'Milestone',

    contractStatus: 'Active',
    contractStart: '02 Aug 2026',
    contractEnd: '30 Sep 2026',
    contractValue: '$7,800',

    technology: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Sanity',
    ],
    hosting: 'Vercel',
    domain: 'brightstudio.example',
    cms: 'Sanity CMS',
    database: 'PostgreSQL',

    preferredContact: 'Email',
    bestTime: '9:00 AM – 2:00 PM',
    timezone: 'GMT +1',
    communicationLanguage: 'English',

    notes:
      'Needs weekly design review. Marketing team provides content every Friday.',

    tags: ['Corporate', 'SEO', 'Design'],

    documents: [
      'Contract.pdf',
      'Content Plan.pdf',
      'Invoice-001.pdf',
    ],

    lastContact: 'Yesterday, 3:20 PM',
    nextFollowUp: '19 Aug 2026',
    createdAt: '02 Aug 2026',
  },

  {
    id: 3,

    name: 'Daniel Carter',
    avatar: 'DC',
    designation: 'Product Manager',
    email: 'daniel@orbitlabs.example',
    phone: '+61 2 9374 4000',
    alternatePhone: '',
    whatsapp: '+61 2 9374 4000',

    company: 'Orbit Labs',
    industry: 'SaaS',
    companySize: '201–500 employees',
    website: 'https://orbitlabs.example',
    companyEmail: 'contact@orbitlabs.example',
    companyPhone: '+61 2 9374 4001',
    address: '100 George Street',
    city: 'Sydney',
    country: 'Australia',

    linkedin: '#',
    facebook: '#',
    instagram: '#',

    status: 'Pending',
    priority: 'High',
    source: 'LinkedIn',
    assignedTo: 'Salauddin',
    accountManager: 'Salauddin',

    projectName: 'Orbit Mobile App',
    projectType: 'Mobile Application',
    services: [
      'App Development',
      'UI/UX Design',
      'API Development',
      'QA Testing',
    ],
    description:
      'Cross-platform mobile application for SaaS customers with real-time analytics and account management.',
    startDate: '20 Aug 2026',
    deadline: '20 Dec 2026',
    progress: 18,

    budget: '$24,000',
    paid: '$5,000',
    due: '$19,000',
    paymentStatus: 'Deposit Paid',
    paymentMethod: 'Bank Transfer',
    billingCycle: 'Monthly',

    contractStatus: 'Pending Signature',
    contractStart: '20 Aug 2026',
    contractEnd: '20 Dec 2026',
    contractValue: '$24,000',

    technology: [
      'Flutter',
      'Node.js',
      'Express',
      'MongoDB',
      'Firebase',
    ],
    hosting: 'AWS',
    domain: 'orbitlabs.example',
    cms: 'Custom',
    database: 'MongoDB',

    preferredContact: 'Slack',
    bestTime: '11:00 AM – 5:00 PM',
    timezone: 'GMT +10',
    communicationLanguage: 'English',

    notes:
      'Project is waiting for final technical approval and signed contract.',

    tags: ['Mobile', 'SaaS', 'High Budget'],

    documents: [
      'Proposal.pdf',
      'Technical Scope.pdf',
    ],

    lastContact: '13 Aug 2026',
    nextFollowUp: '20 Aug 2026',
    createdAt: '05 Aug 2026',
  },

  {
    id: 4,

    name: 'Michael Brown',
    avatar: 'MB',
    designation: 'Business Owner',
    email: 'michael@marketpro.example',
    phone: '+1 212 555 0182',
    alternatePhone: '',
    whatsapp: '+1 212 555 0182',

    company: 'MarketPro',
    industry: 'E-Commerce',
    companySize: '11–50 employees',
    website: 'https://marketpro.example',
    companyEmail: 'support@marketpro.example',
    companyPhone: '+1 212 555 0180',
    address: '55 Broadway',
    city: 'New York',
    country: 'United States',

    linkedin: '#',
    facebook: '#',
    instagram: '#',

    status: 'Completed',
    priority: 'Low',
    source: 'Facebook',
    assignedTo: 'Taj Ibne Masud',
    accountManager: 'Taj Ibne Masud',

    projectName: 'MarketPro E-Commerce',
    projectType: 'E-Commerce Website',
    services: [
      'Web Development',
      'Payment Integration',
      'SEO',
    ],
    description:
      'Complete e-commerce platform with product management, checkout, payment and order tracking.',
    startDate: '01 May 2026',
    deadline: '15 Jul 2026',
    progress: 100,

    budget: '$11,500',
    paid: '$11,500',
    due: '$0',
    paymentStatus: 'Fully Paid',
    paymentMethod: 'Stripe',
    billingCycle: 'One Time',

    contractStatus: 'Completed',
    contractStart: '01 May 2026',
    contractEnd: '15 Jul 2026',
    contractValue: '$11,500',

    technology: [
      'Next.js',
      'Node.js',
      'MongoDB',
      'Stripe',
    ],
    hosting: 'Vercel',
    domain: 'marketpro.example',
    cms: 'Custom CMS',
    database: 'MongoDB',

    preferredContact: 'Email',
    bestTime: '10:00 AM – 3:00 PM',
    timezone: 'GMT -5',
    communicationLanguage: 'English',

    notes:
      'Project completed successfully. Client may require maintenance contract later.',

    tags: ['E-Commerce', 'Completed'],

    documents: [
      'Final Contract.pdf',
      'Invoice.pdf',
      'Handover.pdf',
    ],

    lastContact: '02 Aug 2026',
    nextFollowUp: '01 Sep 2026',
    createdAt: '01 May 2026',
  },
];

/* =========================================================
   STYLES
========================================================= */

const CLIENT_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

  .client-root {
    font-family: 'DM Sans', sans-serif;
  }

  .client-display {
    font-family: 'Space Grotesk', sans-serif !important;
  }

  @keyframes clientFloat {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @keyframes clientPulse {
    0%, 100% {
      opacity: .35;
      transform: scale(1);
    }
    50% {
      opacity: .7;
      transform: scale(1.08);
    }
  }

  @keyframes clientGrid {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 60px 60px;
    }
  }

  .client-grid-bg {
    background-image:
      linear-gradient(rgba(37,99,235,.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(37,99,235,.035) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .client-card {
    transition:
      transform .3s ease,
      border-color .3s ease,
      box-shadow .3s ease;
  }

  .client-card:hover {
    transform: translateY(-4px);
    border-color: rgba(59,130,246,.28) !important;
    box-shadow:
      0 18px 45px rgba(15,23,42,.08),
      0 0 0 1px rgba(59,130,246,.04);
  }

  .client-scroll::-webkit-scrollbar {
    width: 5px;
  }

  .client-scroll::-webkit-scrollbar-track {
    background: transparent;
  }

  .client-scroll::-webkit-scrollbar-thumb {
    background: rgba(37,99,235,.18);
    border-radius: 20px;
  }

  .client-input:focus {
    outline: none;
    border-color: rgba(37,99,235,.4) !important;
    box-shadow: 0 0 0 4px rgba(37,99,235,.05);
  }

  .client-btn {
    transition: all .25s ease;
  }

  .client-btn:hover {
    transform: translateY(-1px);
  }
`;

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function StatusBadge({
  status,
  language,
}: {
  status: ClientStatus;
  language: boolean;
}) {
  const config: Record<
    ClientStatus,
    {
      bg: string;
      color: string;
      border: string;
      icon: React.ReactNode;
      en: string;
      bn: string;
    }
  > = {
    Active: {
      bg: 'rgba(16,185,129,.08)',
      color: '#059669',
      border: 'rgba(16,185,129,.18)',
      icon: <CheckCircle2 size={12} />,
      en: 'Active',
      bn: 'সক্রিয়',
    },
    Completed: {
      bg: 'rgba(37,99,235,.08)',
      color: '#2563eb',
      border: 'rgba(37,99,235,.18)',
      icon: <CheckCircle2 size={12} />,
      en: 'Completed',
      bn: 'সম্পন্ন',
    },
    Pending: {
      bg: 'rgba(245,158,11,.08)',
      color: '#d97706',
      border: 'rgba(245,158,11,.18)',
      icon: <Clock3 size={12} />,
      en: 'Pending',
      bn: 'অপেক্ষমাণ',
    },
    'On Hold': {
      bg: 'rgba(100,116,139,.08)',
      color: '#64748b',
      border: 'rgba(100,116,139,.18)',
      icon: <AlertCircle size={12} />,
      en: 'On Hold',
      bn: 'স্থগিত',
    },
    Lead: {
      bg: 'rgba(139,92,246,.08)',
      color: '#7c3aed',
      border: 'rgba(139,92,246,.18)',
      icon: <Zap size={12} />,
      en: 'Lead',
      bn: 'লিড',
    },
  };

  const c = config[status];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '5px 9px',
        borderRadius: 999,
        background: c.bg,
        color: c.color,
        border: `1px solid ${c.border}`,
        fontSize: 11,
        fontWeight: 700,
      }}
    >
      {c.icon}
      {language ? c.bn : c.en}
    </span>
  );
}

function InfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          minWidth: 34,
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#eff6ff',
          color: '#2563eb',
        }}
      >
        {icon}
      </div>

      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontSize: 10,
            color: '#94a3b8',
            textTransform: 'uppercase',
            letterSpacing: '.07em',
            marginBottom: 3,
            fontWeight: 700,
          }}
        >
          {label}
        </div>

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#2563eb',
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              wordBreak: 'break-word',
            }}
          >
            {value}
          </a>
        ) : (
          <div
            style={{
              color: '#172033',
              fontSize: 13,
              fontWeight: 600,
              wordBreak: 'break-word',
            }}
          >
            {value || '—'}
          </div>
        )}
      </div>
    </div>
  );
}

function SectionTitle({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 22,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 11,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, rgba(37,99,235,.12), rgba(99,102,241,.07))',
          color: '#2563eb',
        }}
      >
        {icon}
      </div>

      <div>
        <h3
          className="client-display"
          style={{
            margin: 0,
            color: '#0f172a',
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          {title}
        </h3>

        {subtitle && (
          <p
            style={{
              margin: '3px 0 0',
              color: '#94a3b8',
              fontSize: 11,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ClientsPage() {
  const { language } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | ClientStatus>(
    'All'
  );

  const [selectedClient, setSelectedClient] = useState<Client | null>(
    CLIENTS[0]
  );

  const filteredClients = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return CLIENTS.filter((client) => {
      const statusMatch =
        statusFilter === 'All' || client.status === statusFilter;

      const searchMatch =
        !query ||
        client.name.toLowerCase().includes(query) ||
        client.company.toLowerCase().includes(query) ||
        client.email.toLowerCase().includes(query) ||
        client.projectName.toLowerCase().includes(query) ||
        client.industry.toLowerCase().includes(query);

      return statusMatch && searchMatch;
    });
  }, [searchQuery, statusFilter]);

  const stats = [
    {
      title: language ? 'মোট ক্লায়েন্ট' : 'Total Clients',
      value: CLIENTS.length,
      icon: <Users size={19} />,
      note: language ? 'সব ক্লায়েন্ট' : 'All clients',
    },
    {
      title: language ? 'সক্রিয় ক্লায়েন্ট' : 'Active Clients',
      value: CLIENTS.filter((c) => c.status === 'Active').length,
      icon: <UserCheck size={19} />,
      note: language ? 'বর্তমানে কাজ চলছে' : 'Currently working',
    },
    {
      title: language ? 'মোট প্রজেক্ট' : 'Total Projects',
      value: CLIENTS.length,
      icon: <FolderKanban size={19} />,
      note: language ? 'চলমান ও সম্পন্ন' : 'Active & completed',
    },
    {
      title: language ? 'মোট বাজেট' : 'Total Revenue',
      value: '$61.8K',
      icon: <CircleDollarSign size={19} />,
      note: language ? 'ক্লায়েন্ট প্রজেক্ট' : 'Client projects',
    },
  ];

  return (
    <>
      <style
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: CLIENT_STYLES }}
      />

      <main
        className="client-root client-grid-bg"
        style={{
          minHeight: '100vh',
          background: '#f8fbff',
          color: '#0f172a',
          overflowX: 'hidden',
        }}
      >
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          style={{
            position: 'relative',
            paddingTop: 125,
            paddingBottom: 48,
            overflow: 'hidden',
            borderBottom: '1px solid rgba(15,23,42,.06)',
          }}
        >
          {/* Background glow */}

          <div
            style={{
              position: 'absolute',
              width: 650,
              height: 650,
              borderRadius: '50%',
              top: -350,
              right: -100,
              background:
                'radial-gradient(circle, rgba(59,130,246,.14), rgba(147,197,253,.04) 50%, transparent 72%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'absolute',
              width: 450,
              height: 450,
              borderRadius: '50%',
              bottom: -300,
              left: -150,
              background:
                'radial-gradient(circle, rgba(99,102,241,.09), transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            className="container mx-auto px-6"
            style={{
              position: 'relative',
              zIndex: 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              {/* Badge */}

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '7px 13px',
                  borderRadius: 999,
                  background: 'rgba(37,99,235,.06)',
                  border: '1px solid rgba(37,99,235,.14)',
                  color: '#2563eb',
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: '.13em',
                  textTransform: 'uppercase',
                  marginBottom: 17,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#2563eb',
                    boxShadow: '0 0 0 5px rgba(37,99,235,.08)',
                  }}
                />

                {language ? 'ক্লায়েন্ট ম্যানেজমেন্ট' : 'Client Management'}
              </div>

              {/* Heading */}

              <h1
                className="client-display"
                style={{
                  margin: 0,
                  maxWidth: 800,
                  fontSize: 'clamp(34px, 5vw, 62px)',
                  lineHeight: 1.03,
                  letterSpacing: '-.045em',
                  fontWeight: 700,
                  color: '#0b1020',
                }}
              >
                {language ? (
                  <>
                    আপনার সব ক্লায়েন্ট,
                    <br />
                    <span
                      style={{
                        background:
                          'linear-gradient(90deg,#2563eb,#4f46e5,#7c3aed)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      এক জায়গায়।
                    </span>
                  </>
                ) : (
                  <>
                    Everything about your
                    <br />
                    <span
                      style={{
                        background:
                          'linear-gradient(90deg,#2563eb,#4f46e5,#7c3aed)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      clients. One place.
                    </span>
                  </>
                )}
              </h1>

              <p
                style={{
                  maxWidth: 630,
                  margin: '18px 0 0',
                  color: '#64748b',
                  fontSize: 15,
                  lineHeight: 1.8,
                }}
              >
                {language
                  ? 'ক্লায়েন্টের ব্যক্তিগত তথ্য, কোম্পানি, প্রজেক্ট, বাজেট, পেমেন্ট, কন্ট্রাক্ট, টেকনোলজি এবং যোগাযোগের সম্পূর্ণ তথ্য এক জায়গা থেকে পরিচালনা করুন।'
                  : 'Manage complete client information including personal details, company data, projects, budget, payments, contracts, technologies and communication preferences from one place.'}
              </p>
            </motion.div>

            {/* =================================================
                STATS
            ================================================= */}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 14,
                marginTop: 38,
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="client-card"
                  style={{
                    background: 'rgba(255,255,255,.82)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid rgba(15,23,42,.07)',
                    borderRadius: 17,
                    padding: 17,
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 11,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#eff6ff',
                      color: '#2563eb',
                      marginBottom: 13,
                    }}
                  >
                    {stat.icon}
                  </div>

                  <div
                    className="client-display"
                    style={{
                      fontSize: 25,
                      fontWeight: 700,
                      color: '#0f172a',
                    }}
                  >
                    {stat.value}
                  </div>

                  <div
                    style={{
                      marginTop: 3,
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#475569',
                    }}
                  >
                    {stat.title}
                  </div>

                  <div
                    style={{
                      marginTop: 4,
                      fontSize: 10,
                      color: '#94a3b8',
                    }}
                  >
                    {stat.note}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN CRM AREA
        ===================================================== */}

        <section
          style={{
            padding: '38px 0 90px',
          }}
        >
          <div className="container mx-auto px-6">
            {/* Search / Filter */}

            <div
              style={{
                display: 'flex',
                gap: 12,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginBottom: 25,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  flex: '1 1 340px',
                  maxWidth: 520,
                }}
              >
                <Search
                  size={17}
                  style={{
                    position: 'absolute',
                    left: 15,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#94a3b8',
                  }}
                />

                <input
                  className="client-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    language
                      ? 'নাম, কোম্পানি, ইমেইল বা প্রজেক্ট খুঁজুন...'
                      : 'Search by name, company, email or project...'
                  }
                  style={{
                    width: '100%',
                    height: 46,
                    padding: '0 15px 0 43px',
                    borderRadius: 13,
                    background: '#fff',
                    border: '1px solid rgba(15,23,42,.08)',
                    color: '#0f172a',
                    fontSize: 13,
                    transition: 'all .25s',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    color: '#64748b',
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  <Filter size={14} />
                  {language ? 'ফিল্টার' : 'Filter'}
                </div>

                {(
                  ['All', 'Active', 'Completed', 'Pending', 'Lead'] as const
                ).map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className="client-btn"
                    style={{
                      border:
                        statusFilter === status
                          ? '1px solid rgba(37,99,235,.3)'
                          : '1px solid rgba(15,23,42,.07)',
                      background:
                        statusFilter === status
                          ? '#eff6ff'
                          : '#fff',
                      color:
                        statusFilter === status
                          ? '#2563eb'
                          : '#64748b',
                      borderRadius: 10,
                      padding: '8px 12px',
                      fontSize: 11,
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {language
                      ? status === 'All'
                        ? 'সব'
                        : status === 'Active'
                        ? 'সক্রিয়'
                        : status === 'Completed'
                        ? 'সম্পন্ন'
                        : status === 'Pending'
                        ? 'অপেক্ষমাণ'
                        : 'লিড'
                      : status}
                  </button>
                ))}

                <button
                  className="client-btn"
                  style={{
                    height: 37,
                    padding: '0 13px',
                    borderRadius: 10,
                    border: 'none',
                    background:
                      'linear-gradient(135deg,#2563eb,#4f46e5)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 8px 20px rgba(37,99,235,.18)',
                  }}
                >
                  <Plus size={14} />
                  {language ? 'ক্লায়েন্ট যোগ করুন' : 'Add Client'}
                </button>
              </div>
            </div>

            {/* Main layout */}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'minmax(300px, 390px) minmax(0, 1fr)',
                gap: 20,
                alignItems: 'start',
              }}
            >
              {/* =================================================
                  CLIENT LIST
              ================================================= */}

              <div
                style={{
                  background: 'rgba(255,255,255,.82)',
                  border: '1px solid rgba(15,23,42,.07)',
                  borderRadius: 19,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: '16px 17px',
                    borderBottom: '1px solid rgba(15,23,42,.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div
                      className="client-display"
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: '#0f172a',
                      }}
                    >
                      {language ? 'ক্লায়েন্ট তালিকা' : 'Client Directory'}
                    </div>

                    <div
                      style={{
                        fontSize: 10,
                        color: '#94a3b8',
                        marginTop: 3,
                      }}
                    >
                      {filteredClients.length}{' '}
                      {language ? 'জন ক্লায়েন্ট' : 'clients found'}
                    </div>
                  </div>

                  <Users size={17} color="#94a3b8" />
                </div>

                <div
                  className="client-scroll"
                  style={{
                    maxHeight: 700,
                    overflowY: 'auto',
                    padding: 9,
                  }}
                >
                  {filteredClients.map((client, index) => {
                    const active = selectedClient?.id === client.id;

                    return (
                      <motion.button
                        key={client.id}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => setSelectedClient(client)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          border: active
                            ? '1px solid rgba(37,99,235,.22)'
                            : '1px solid transparent',
                          background: active
                            ? 'linear-gradient(135deg,#eff6ff,#f8faff)'
                            : 'transparent',
                          borderRadius: 14,
                          padding: 12,
                          marginBottom: 4,
                          cursor: 'pointer',
                          transition: 'all .2s',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 11,
                          }}
                        >
                          <div
                            style={{
                              width: 43,
                              height: 43,
                              minWidth: 43,
                              borderRadius: 13,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background:
                                'linear-gradient(135deg,#2563eb,#6366f1)',
                              color: '#fff',
                              fontWeight: 800,
                              fontSize: 12,
                              boxShadow:
                                '0 7px 16px rgba(37,99,235,.18)',
                            }}
                          >
                            {client.avatar}
                          </div>

                          <div
                            style={{
                              minWidth: 0,
                              flex: 1,
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 8,
                              }}
                            >
                              <div
                                style={{
                                  color: '#0f172a',
                                  fontSize: 13,
                                  fontWeight: 700,
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                {client.name}
                              </div>

                              <ChevronRight
                                size={14}
                                color={
                                  active ? '#2563eb' : '#cbd5e1'
                                }
                              />
                            </div>

                            <div
                              style={{
                                color: '#64748b',
                                fontSize: 10,
                                marginTop: 3,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {client.company}
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                gap: 6,
                                marginTop: 7,
                              }}
                            >
                              <StatusBadge
                                status={client.status}
                                language={language}
                              />

                              {client.priority === 'High' && (
                                <span
                                  style={{
                                    fontSize: 9,
                                    color: '#dc2626',
                                    fontWeight: 800,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 3,
                                  }}
                                >
                                  <Star
                                    size={9}
                                    fill="currentColor"
                                  />
                                  High
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}

                  {filteredClients.length === 0 && (
                    <div
                      style={{
                        textAlign: 'center',
                        padding: '60px 20px',
                      }}
                    >
                      <Search
                        size={28}
                        color="#cbd5e1"
                        style={{ marginBottom: 12 }}
                      />

                      <div
                        style={{
                          color: '#64748b',
                          fontSize: 13,
                          fontWeight: 700,
                        }}
                      >
                        {language
                          ? 'কোনো ক্লায়েন্ট পাওয়া যায়নি'
                          : 'No clients found'}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* =================================================
                  CLIENT DETAILS
              ================================================= */}

              <AnimatePresence mode="wait">
                {selectedClient && (
                  <motion.div
                    key={selectedClient.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* PROFILE HEADER */}

                    <div
                      className="client-card"
                      style={{
                        background: '#fff',
                        border: '1px solid rgba(15,23,42,.07)',
                        borderRadius: 19,
                        overflow: 'hidden',
                        marginBottom: 17,
                      }}
                    >
                      <div
                        style={{
                          height: 110,
                          background:
                            'linear-gradient(120deg,#eff6ff 0%,#eef2ff 48%,#f5f3ff 100%)',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            width: 220,
                            height: 220,
                            borderRadius: '50%',
                            right: -40,
                            top: -110,
                            border:
                              '1px solid rgba(37,99,235,.12)',
                          }}
                        />

                        <div
                          style={{
                            position: 'absolute',
                            width: 160,
                            height: 160,
                            borderRadius: '50%',
                            right: 80,
                            top: -80,
                            border:
                              '1px solid rgba(99,102,241,.10)',
                          }}
                        />
                      </div>

                      <div
                        style={{
                          padding: '0 22px 21px',
                        }}
                      >
                        <div
                          style={{
                            marginTop: -34,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            gap: 15,
                          }}
                        >
                          <div
                            style={{
                              width: 68,
                              height: 68,
                              borderRadius: 19,
                              border: '4px solid #fff',
                              background:
                                'linear-gradient(135deg,#2563eb,#6366f1)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#fff',
                              fontSize: 20,
                              fontWeight: 800,
                              boxShadow:
                                '0 10px 25px rgba(37,99,235,.2)',
                            }}
                          >
                            {selectedClient.avatar}
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              gap: 7,
                            }}
                          >
                            <button
                              className="client-btn"
                              style={{
                                width: 36,
                                height: 36,
                                borderRadius: 10,
                                border:
                                  '1px solid rgba(15,23,42,.08)',
                                background: '#fff',
                                color: '#64748b',
                                cursor: 'pointer',
                              }}
                            >
                              <MoreHorizontal size={17} />
                            </button>
                          </div>
                        </div>

                        <div style={{ marginTop: 13 }}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 9,
                              flexWrap: 'wrap',
                            }}
                          >
                            <h2
                              className="client-display"
                              style={{
                                margin: 0,
                                color: '#0f172a',
                                fontSize: 23,
                                fontWeight: 700,
                              }}
                            >
                              {selectedClient.name}
                            </h2>

                            <StatusBadge
                              status={selectedClient.status}
                              language={language}
                            />
                          </div>

                          <p
                            style={{
                              margin: '5px 0 0',
                              color: '#64748b',
                              fontSize: 12,
                            }}
                          >
                            {selectedClient.designation} at{' '}
                            <strong>
                              {selectedClient.company}
                            </strong>
                          </p>
                        </div>

                        {/* quick contact */}

                        <div
                          style={{
                            display: 'flex',
                            gap: 8,
                            flexWrap: 'wrap',
                            marginTop: 17,
                          }}
                        >
                          <a
                            href={`mailto:${selectedClient.email}`}
                            className="client-btn"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 7,
                              padding: '8px 11px',
                              borderRadius: 9,
                              background: '#eff6ff',
                              color: '#2563eb',
                              textDecoration: 'none',
                              fontSize: 11,
                              fontWeight: 700,
                            }}
                          >
                            <Mail size={13} />
                            Email
                          </a>

                          <a
                            href={`tel:${selectedClient.phone}`}
                            className="client-btn"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 7,
                              padding: '8px 11px',
                              borderRadius: 9,
                              background: '#f0fdf4',
                              color: '#059669',
                              textDecoration: 'none',
                              fontSize: 11,
                              fontWeight: 700,
                            }}
                          >
                            <Phone size={13} />
                            Call
                          </a>

                          <a
                            href={`https://wa.me/${selectedClient.whatsapp.replace(
                              /[^0-9]/g,
                              ''
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="client-btn"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 7,
                              padding: '8px 11px',
                              borderRadius: 9,
                              background: '#ecfdf5',
                              color: '#059669',
                              textDecoration: 'none',
                              fontSize: 11,
                              fontWeight: 700,
                            }}
                          >
                            <MessageCircle size={13} />
                            WhatsApp
                          </a>

                          <a
                            href={selectedClient.website}
                            target="_blank"
                            rel="noreferrer"
                            className="client-btn"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 7,
                              padding: '8px 11px',
                              borderRadius: 9,
                              background: '#f8fafc',
                              color: '#475569',
                              textDecoration: 'none',
                              fontSize: 11,
                              fontWeight: 700,
                            }}
                          >
                            <Globe size={13} />
                            Website
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        TWO COLUMN INFORMATION
                    ================================================= */}

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns:
                          'repeat(2, minmax(0, 1fr))',
                        gap: 17,
                      }}
                    >
                      {/* PERSONAL */}

                      <div
                        className="client-card"
                        style={{
                          background: '#fff',
                          border: '1px solid rgba(15,23,42,.07)',
                          borderRadius: 17,
                          padding: 19,
                        }}
                      >
                        <SectionTitle
                          icon={<UserRound size={18} />}
                          title={
                            language
                              ? 'ব্যক্তিগত তথ্য'
                              : 'Personal Information'
                          }
                          subtitle={
                            language
                              ? 'ক্লায়েন্টের যোগাযোগের তথ্য'
                              : 'Client contact details'
                          }
                        />

                        <div
                          style={{
                            display: 'grid',
                            gap: 17,
                          }}
                        >
                          <InfoItem
                            icon={<Mail size={15} />}
                            label="Email"
                            value={selectedClient.email}
                            href={`mailto:${selectedClient.email}`}
                          />

                          <InfoItem
                            icon={<Phone size={15} />}
                            label="Phone"
                            value={selectedClient.phone}
                            href={`tel:${selectedClient.phone}`}
                          />

                          <InfoItem
                            icon={<MessageCircle size={15} />}
                            label="WhatsApp"
                            value={selectedClient.whatsapp}
                          />

                          <InfoItem
                            icon={<UserRound size={15} />}
                            label="Designation"
                            value={selectedClient.designation}
                          />
                        </div>
                      </div>

                      {/* COMPANY */}

                      <div
                        className="client-card"
                        style={{
                          background: '#fff',
                          border: '1px solid rgba(15,23,42,.07)',
                          borderRadius: 17,
                          padding: 19,
                        }}
                      >
                        <SectionTitle
                          icon={<Building2 size={18} />}
                          title={
                            language
                              ? 'কোম্পানি তথ্য'
                              : 'Company Information'
                          }
                          subtitle={
                            language
                              ? 'ব্যবসার বিস্তারিত'
                              : 'Business details'
                          }
                        />

                        <div
                          style={{
                            display: 'grid',
                            gap: 17,
                          }}
                        >
                          <InfoItem
                            icon={<Building2 size={15} />}
                            label="Company"
                            value={selectedClient.company}
                          />

                          <InfoItem
                            icon={<BriefcaseBusiness size={15} />}
                            label="Industry"
                            value={selectedClient.industry}
                          />

                          <InfoItem
                            icon={<Users size={15} />}
                            label="Company Size"
                            value={selectedClient.companySize}
                          />

                          <InfoItem
                            icon={<Globe size={15} />}
                            label="Website"
                            value={selectedClient.website}
                            href={selectedClient.website}
                          />

                          <InfoItem
                            icon={<MapPin size={15} />}
                            label="Address"
                            value={`${selectedClient.address}, ${selectedClient.city}, ${selectedClient.country}`}
                          />
                        </div>
                      </div>

                      {/* PROJECT */}

                      <div
                        className="client-card"
                        style={{
                          gridColumn: '1 / -1',
                          background: '#fff',
                          border: '1px solid rgba(15,23,42,.07)',
                          borderRadius: 17,
                          padding: 20,
                        }}
                      >
                        <SectionTitle
                          icon={<FolderKanban size={18} />}
                          title={
                            language
                              ? 'প্রজেক্ট তথ্য'
                              : 'Project Information'
                          }
                          subtitle={
                            language
                              ? 'বর্তমান প্রজেক্টের সম্পূর্ণ বিবরণ'
                              : 'Complete project overview'
                          }
                        />

                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns:
                              'repeat(auto-fit, minmax(180px, 1fr))',
                            gap: 15,
                            marginBottom: 20,
                          }}
                        >
                          {[
                            {
                              icon: <FolderKanban size={15} />,
                              label: 'Project',
                              value: selectedClient.projectName,
                            },
                            {
                              icon: <Monitor size={15} />,
                              label: 'Project Type',
                              value: selectedClient.projectType,
                            },
                            {
                              icon: <CalendarDays size={15} />,
                              label: 'Start Date',
                              value: selectedClient.startDate,
                            },
                            {
                              icon: <Clock3 size={15} />,
                              label: 'Deadline',
                              value: selectedClient.deadline,
                            },
                          ].map((item) => (
                            <InfoItem
                              key={item.label}
                              icon={item.icon}
                              label={item.label}
                              value={item.value}
                            />
                          ))}
                        </div>

                        <div
                          style={{
                            padding: 15,
                            borderRadius: 13,
                            background: '#f8fafc',
                            border:
                              '1px solid rgba(15,23,42,.05)',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              justifyContent:
                                'space-between',
                              alignItems: 'center',
                              marginBottom: 9,
                            }}
                          >
                            <span
                              style={{
                                color: '#475569',
                                fontSize: 11,
                                fontWeight: 700,
                              }}
                            >
                              {language
                                ? 'প্রজেক্ট অগ্রগতি'
                                : 'Project Progress'}
                            </span>

                            <strong
                              style={{
                                color: '#2563eb',
                                fontSize: 12,
                              }}
                            >
                              {selectedClient.progress}%
                            </strong>
                          </div>

                          <div
                            style={{
                              height: 7,
                              background: '#e2e8f0',
                              borderRadius: 20,
                              overflow: 'hidden',
                            }}
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width: `${selectedClient.progress}%`,
                              }}
                              transition={{
                                duration: 1,
                                ease: 'easeOut',
                              }}
                              style={{
                                height: '100%',
                                borderRadius: 20,
                                background:
                                  'linear-gradient(90deg,#2563eb,#6366f1)',
                              }}
                            />
                          </div>
                        </div>

                        <div style={{ marginTop: 18 }}>
                          <div
                            style={{
                              fontSize: 10,
                              color: '#94a3b8',
                              textTransform: 'uppercase',
                              letterSpacing: '.07em',
                              fontWeight: 700,
                              marginBottom: 9,
                            }}
                          >
                            Services
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: 7,
                            }}
                          >
                            {selectedClient.services.map(
                              (service) => (
                                <span
                                  key={service}
                                  style={{
                                    display:
                                      'inline-flex',
                                    alignItems:
                                      'center',
                                    gap: 5,
                                    padding:
                                      '7px 10px',
                                    borderRadius: 8,
                                    background:
                                      '#eff6ff',
                                    color:
                                      '#2563eb',
                                    fontSize: 10,
                                    fontWeight: 700,
                                  }}
                                >
                                  <Zap size={11} />
                                  {service}
                                </span>
                              )
                            )}
                          </div>
                        </div>

                        <div
                          style={{
                            marginTop: 18,
                            paddingTop: 17,
                            borderTop:
                              '1px solid rgba(15,23,42,.06)',
                          }}
                        >
                          <div
                            style={{
                              fontSize: 10,
                              color: '#94a3b8',
                              textTransform: 'uppercase',
                              letterSpacing: '.07em',
                              fontWeight: 700,
                              marginBottom: 7,
                            }}
                          >
                            Project Description
                          </div>

                          <p
                            style={{
                              margin: 0,
                              color: '#475569',
                              fontSize: 13,
                              lineHeight: 1.75,
                            }}
                          >
                            {selectedClient.description}
                          </p>
                        </div>
                      </div>

                      {/* FINANCIAL */}

                      <div
                        className="client-card"
                        style={{
                          background: '#fff',
                          border: '1px solid rgba(15,23,42,.07)',
                          borderRadius: 17,
                          padding: 19,
                        }}
                      >
                        <SectionTitle
                          icon={<CreditCard size={18} />}
                          title={
                            language
                              ? 'আর্থিক তথ্য'
                              : 'Financial Information'
                          }
                          subtitle={
                            language
                              ? 'বাজেট ও পেমেন্ট'
                              : 'Budget & payments'
                          }
                        />

                        <div
                          style={{
                            display: 'grid',
                            gap: 16,
                          }}
                        >
                          <InfoItem
                            icon={
                              <CircleDollarSign size={15} />
                            }
                            label="Total Budget"
                            value={selectedClient.budget}
                          />

                          <InfoItem
                            icon={
                              <CheckCircle2 size={15} />
                            }
                            label="Paid"
                            value={selectedClient.paid}
                          />

                          <InfoItem
                            icon={<AlertCircle size={15} />}
                            label="Due"
                            value={selectedClient.due}
                          />

                          <InfoItem
                            icon={<CreditCard size={15} />}
                            label="Payment Method"
                            value={
                              selectedClient.paymentMethod
                            }
                          />

                          <InfoItem
                            icon={<CalendarDays size={15} />}
                            label="Billing Cycle"
                            value={
                              selectedClient.billingCycle
                            }
                          />
                        </div>
                      </div>

                      {/* CONTRACT */}

                      <div
                        className="client-card"
                        style={{
                          background: '#fff',
                          border: '1px solid rgba(15,23,42,.07)',
                          borderRadius: 17,
                          padding: 19,
                        }}
                      >
                        <SectionTitle
                          icon={<FileText size={18} />}
                          title={
                            language
                              ? 'কন্ট্রাক্ট তথ্য'
                              : 'Contract Information'
                          }
                          subtitle={
                            language
                              ? 'চুক্তির বিবরণ'
                              : 'Agreement details'
                          }
                        />

                        <div
                          style={{
                            display: 'grid',
                            gap: 16,
                          }}
                        >
                          <InfoItem
                            icon={
                              <ShieldCheck size={15} />
                            }
                            label="Contract Status"
                            value={
                              selectedClient.contractStatus
                            }
                          />

                          <InfoItem
                            icon={<CalendarDays size={15} />}
                            label="Contract Start"
                            value={
                              selectedClient.contractStart
                            }
                          />

                          <InfoItem
                            icon={<CalendarDays size={15} />}
                            label="Contract End"
                            value={
                              selectedClient.contractEnd
                            }
                          />

                          <InfoItem
                            icon={
                              <CircleDollarSign size={15} />
                            }
                            label="Contract Value"
                            value={
                              selectedClient.contractValue
                            }
                          />
                        </div>
                      </div>

                      {/* TECHNICAL */}

                      <div
                        className="client-card"
                        style={{
                          background: '#fff',
                          border: '1px solid rgba(15,23,42,.07)',
                          borderRadius: 17,
                          padding: 19,
                        }}
                      >
                        <SectionTitle
                          icon={<Code2 size={18} />}
                          title={
                            language
                              ? 'টেকনিক্যাল তথ্য'
                              : 'Technical Information'
                          }
                          subtitle={
                            language
                              ? 'প্রজেক্টের টেক স্ট্যাক'
                              : 'Project technology stack'
                          }
                        />

                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 7,
                            marginBottom: 19,
                          }}
                        >
                          {selectedClient.technology.map(
                            (tech) => (
                              <span
                                key={tech}
                                style={{
                                  padding: '7px 9px',
                                  borderRadius: 8,
                                  background: '#f1f5f9',
                                  color: '#475569',
                                  fontSize: 10,
                                  fontWeight: 700,
                                }}
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>

                        <div
                          style={{
                            display: 'grid',
                            gap: 15,
                          }}
                        >
                          <InfoItem
                            icon={<Server size={15} />}
                            label="Hosting"
                            value={selectedClient.hosting}
                          />

                          <InfoItem
                            icon={<Globe size={15} />}
                            label="Domain"
                            value={selectedClient.domain}
                          />

                          <InfoItem
                            icon={<Database size={15} />}
                            label="Database"
                            value={selectedClient.database}
                          />

                          <InfoItem
                            icon={<Monitor size={15} />}
                            label="CMS"
                            value={selectedClient.cms}
                          />
                        </div>
                      </div>

                      {/* COMMUNICATION */}

                      <div
                        className="client-card"
                        style={{
                          background: '#fff',
                          border: '1px solid rgba(15,23,42,.07)',
                          borderRadius: 17,
                          padding: 19,
                        }}
                      >
                        <SectionTitle
                          icon={<MessageCircle size={18} />}
                          title={
                            language
                              ? 'যোগাযোগ তথ্য'
                              : 'Communication'
                          }
                          subtitle={
                            language
                              ? 'ক্লায়েন্টের যোগাযোগ পছন্দ'
                              : 'Client communication preferences'
                          }
                        />

                        <div
                          style={{
                            display: 'grid',
                            gap: 16,
                          }}
                        >
                          <InfoItem
                            icon={<Send size={15} />}
                            label="Preferred Contact"
                            value={
                              selectedClient.preferredContact
                            }
                          />

                          <InfoItem
                            icon={<Clock3 size={15} />}
                            label="Best Time"
                            value={
                              selectedClient.bestTime
                            }
                          />

                          <InfoItem
                            icon={<Globe size={15} />}
                            label="Timezone"
                            value={
                              selectedClient.timezone
                            }
                          />

                          <InfoItem
                            icon={<MessageCircle size={15} />}
                            label="Language"
                            value={
                              selectedClient.communicationLanguage
                            }
                          />
                        </div>
                      </div>

                      {/* TEAM */}

                      <div
                        className="client-card"
                        style={{
                          background: '#fff',
                          border: '1px solid rgba(15,23,42,.07)',
                          borderRadius: 17,
                          padding: 19,
                        }}
                      >
                        <SectionTitle
                          icon={<Users size={18} />}
                          title={
                            language
                              ? 'টিম ও ম্যানেজমেন্ট'
                              : 'Team & Management'
                          }
                          subtitle={
                            language
                              ? 'দায়িত্বপ্রাপ্ত সদস্য'
                              : 'Assigned team members'
                          }
                        />

                        <div
                          style={{
                            display: 'grid',
                            gap: 15,
                          }}
                        >
                          <InfoItem
                            icon={<UserCheck size={15} />}
                            label="Assigned To"
                            value={
                              selectedClient.assignedTo
                            }
                          />

                          <InfoItem
                            icon={<UserRound size={15} />}
                            label="Account Manager"
                            value={
                              selectedClient.accountManager
                            }
                          />

                          <InfoItem
                            icon={<CalendarDays size={15} />}
                            label="Client Since"
                            value={
                              selectedClient.createdAt
                            }
                          />
                        </div>
                      </div>

                      {/* SOCIAL */}

                      <div
                        className="client-card"
                        style={{
                          background: '#fff',
                          border: '1px solid rgba(15,23,42,.07)',
                          borderRadius: 17,
                          padding: 19,
                        }}
                      >
                        <SectionTitle
                          icon={<Globe size={18} />}
                          title={
                            language
                              ? 'সোশ্যাল প্রোফাইল'
                              : 'Social Profiles'
                          }
                          subtitle={
                            language
                              ? 'অনলাইন উপস্থিতি'
                              : 'Online presence'
                          }
                        />

                        <div
                          style={{
                            display: 'flex',
                            gap: 9,
                          }}
                        >
                          {[
                            {
                              icon: <Linkedin size={16} />,
                              label: 'LinkedIn',
                              href: selectedClient.linkedin,
                            },
                            {
                              icon: <Facebook size={16} />,
                              label: 'Facebook',
                              href: selectedClient.facebook,
                            },
                            {
                              icon: <Instagram size={16} />,
                              label: 'Instagram',
                              href: selectedClient.instagram,
                            },
                          ].map((social) => (
                            <a
                              key={social.label}
                              href={social.href}
                              target="_blank"
                              rel="noreferrer"
                              title={social.label}
                              style={{
                                width: 40,
                                height: 40,
                                borderRadius: 11,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: '#f8fafc',
                                color: '#475569',
                                border:
                                  '1px solid rgba(15,23,42,.06)',
                                textDecoration: 'none',
                              }}
                            >
                              {social.icon}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* DOCUMENTS */}

                      <div
                        className="client-card"
                        style={{
                          gridColumn: '1 / -1',
                          background: '#fff',
                          border: '1px solid rgba(15,23,42,.07)',
                          borderRadius: 17,
                          padding: 19,
                        }}
                      >
                        <SectionTitle
                          icon={<FileText size={18} />}
                          title={
                            language
                              ? 'ডকুমেন্টস'
                              : 'Documents'
                          }
                          subtitle={
                            language
                              ? 'ক্লায়েন্ট সম্পর্কিত ফাইল'
                              : 'Client related files'
                          }
                        />

                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns:
                              'repeat(auto-fit, minmax(230px, 1fr))',
                            gap: 9,
                          }}
                        >
                          {selectedClient.documents.map(
                            (doc) => (
                              <div
                                key={doc}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 10,
                                  padding: 11,
                                  borderRadius: 11,
                                  background: '#f8fafc',
                                  border:
                                    '1px solid rgba(15,23,42,.05)',
                                }}
                              >
                                <div
                                  style={{
                                    width: 35,
                                    height: 35,
                                    borderRadius: 9,
                                    background:
                                      '#eff6ff',
                                    color: '#2563eb',
                                    display: 'flex',
                                    alignItems:
                                      'center',
                                    justifyContent:
                                      'center',
                                  }}
                                >
                                  <FileText
                                    size={15}
                                  />
                                </div>

                                <div
                                  style={{
                                    flex: 1,
                                    minWidth: 0,
                                  }}
                                >
                                  <div
                                    style={{
                                      color: '#334155',
                                      fontSize: 11,
                                      fontWeight: 700,
                                      overflow:
                                        'hidden',
                                      textOverflow:
                                        'ellipsis',
                                      whiteSpace:
                                        'nowrap',
                                    }}
                                  >
                                    {doc}
                                  </div>

                                  <div
                                    style={{
                                      color: '#94a3b8',
                                      fontSize: 9,
                                      marginTop: 2,
                                    }}
                                  >
                                    PDF / Document
                                  </div>
                                </div>

                                <button
                                  style={{
                                    border: 'none',
                                    background:
                                      'transparent',
                                    color: '#94a3b8',
                                    cursor: 'pointer',
                                  }}
                                >
                                  <Download
                                    size={14}
                                  />
                                </button>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* NOTES */}

                      <div
                        className="client-card"
                        style={{
                          gridColumn: '1 / -1',
                          background:
                            'linear-gradient(135deg,#f8fbff,#f5f7ff)',
                          border:
                            '1px solid rgba(37,99,235,.10)',
                          borderRadius: 17,
                          padding: 20,
                        }}
                      >
                        <SectionTitle
                          icon={<Paperclip size={18} />}
                          title={
                            language
                              ? 'নোটস ও অতিরিক্ত তথ্য'
                              : 'Notes & Additional Information'
                          }
                          subtitle={
                            language
                              ? 'গুরুত্বপূর্ণ ক্লায়েন্ট নোট'
                              : 'Important client notes'
                          }
                        />

                        <div
                          style={{
                            padding: 15,
                            borderRadius: 12,
                            background: '#fff',
                            border:
                              '1px solid rgba(37,99,235,.08)',
                            color: '#475569',
                            fontSize: 13,
                            lineHeight: 1.8,
                          }}
                        >
                          {selectedClient.notes}
                        </div>

                        {/* Tags */}

                        <div style={{ marginTop: 17 }}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 6,
                              color: '#64748b',
                              fontSize: 10,
                              fontWeight: 800,
                              textTransform: 'uppercase',
                              letterSpacing: '.07em',
                              marginBottom: 9,
                            }}
                          >
                            <Tag size={12} />
                            Tags
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: 6,
                            }}
                          >
                            {selectedClient.tags.map(
                              (tag) => (
                                <span
                                  key={tag}
                                  style={{
                                    padding:
                                      '6px 9px',
                                    borderRadius: 7,
                                    background:
                                      'rgba(37,99,235,.07)',
                                    color:
                                      '#2563eb',
                                    fontSize: 10,
                                    fontWeight: 700,
                                  }}
                                >
                                  #{tag}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      {/* ACTIVITY */}

                      <div
                        className="client-card"
                        style={{
                          gridColumn: '1 / -1',
                          background: '#fff',
                          border: '1px solid rgba(15,23,42,.07)',
                          borderRadius: 17,
                          padding: 20,
                        }}
                      >
                        <SectionTitle
                          icon={<Activity size={18} />}
                          title={
                            language
                              ? 'সাম্প্রতিক কার্যক্রম'
                              : 'Recent Activity'
                          }
                          subtitle={
                            language
                              ? 'ক্লায়েন্টের সাথে সর্বশেষ যোগাযোগ'
                              : 'Latest client interactions'
                          }
                        />

                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns:
                              'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: 12,
                          }}
                        >
                          <div
                            style={{
                              padding: 14,
                              borderRadius: 12,
                              background: '#f8fafc',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                gap: 8,
                                alignItems: 'center',
                                color: '#2563eb',
                                fontSize: 11,
                                fontWeight: 800,
                              }}
                            >
                              <MessageCircle size={14} />
                              Last Contact
                            </div>

                            <div
                              style={{
                                color: '#334155',
                                fontSize: 12,
                                fontWeight: 700,
                                marginTop: 8,
                              }}
                            >
                              {selectedClient.lastContact}
                            </div>
                          </div>

                          <div
                            style={{
                              padding: 14,
                              borderRadius: 12,
                              background: '#f8fafc',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                gap: 8,
                                alignItems: 'center',
                                color: '#7c3aed',
                                fontSize: 11,
                                fontWeight: 800,
                              }}
                            >
                              <CalendarDays size={14} />
                              Next Follow Up
                            </div>

                            <div
                              style={{
                                color: '#334155',
                                fontSize: 12,
                                fontWeight: 700,
                                marginTop: 8,
                              }}
                            >
                              {selectedClient.nextFollowUp}
                            </div>
                          </div>

                          <div
                            style={{
                              padding: 14,
                              borderRadius: 12,
                              background: '#f8fafc',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                gap: 8,
                                alignItems: 'center',
                                color: '#059669',
                                fontSize: 11,
                                fontWeight: 800,
                              }}
                            >
                              <UserCheck size={14} />
                              Account Manager
                            </div>

                            <div
                              style={{
                                color: '#334155',
                                fontSize: 12,
                                fontWeight: 700,
                                marginTop: 8,
                              }}
                            >
                              {selectedClient.accountManager}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOTER CTA
        ===================================================== */}

        <section
          style={{
            padding: '65px 20px',
            background:
              'linear-gradient(135deg,#eff6ff,#eef2ff,#f5f3ff)',
            borderTop: '1px solid rgba(37,99,235,.08)',
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                margin: '0 auto 15px',
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
                color: '#2563eb',
                boxShadow: '0 10px 30px rgba(37,99,235,.12)',
              }}
            >
              <Users size={22} />
            </div>

            <h2
              className="client-display"
              style={{
                margin: 0,
                fontSize: 'clamp(25px,4vw,42px)',
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-.035em',
              }}
            >
              {language
                ? 'আপনার ক্লায়েন্ট সম্পর্ক আরও শক্তিশালী করুন।'
                : 'Build stronger client relationships.'}
            </h2>

            <p
              style={{
                maxWidth: 520,
                margin: '12px auto 0',
                color: '#64748b',
                fontSize: 13,
                lineHeight: 1.7,
              }}
            >
              {language
                ? 'প্রতিটি ক্লায়েন্টের গুরুত্বপূর্ণ তথ্য সংগঠিত রাখুন এবং দ্রুত সিদ্ধান্ত নিন।'
                : 'Keep every important client detail organized and make better decisions faster.'}
            </p>
          </motion.div>
        </section>
      </main>

      {/* =====================================================
          RESPONSIVE CSS
      ===================================================== */}

      <style jsx global>{`
        @media (max-width: 900px) {
          .client-root .container {
            max-width: 100% !important;
          }
        }

        @media (max-width: 760px) {
          .client-root
            [style*='grid-template-columns: minmax(300px, 390px)'] {
            grid-template-columns: 1fr !important;
          }

          .client-root
            [style*='grid-template-columns: repeat(2, minmax(0, 1fr))'] {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 520px) {
          .client-root .container {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          .client-root h1 {
            font-size: 38px !important;
          }
        }
      `}</style>
    </>
  );
}