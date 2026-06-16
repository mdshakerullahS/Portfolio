/* eslint-disable max-lines */

import {
  BrickWall,
  Calendar,
  ChartColumnStacked,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Plug,
  Rocket,
  Search,
  Settings,
  Ship,
  ShoppingCart,
  Target,
  Zap,
} from "lucide-react";
import {
  AboutStat,
  ContactItems,
  NavLinks,
  Niche,
  Process,
  Project,
  ProjectCategory,
  Service,
  SkillGroup,
  TrustCard,
} from "./types/types";

export const NAVLINKS: NavLinks[] = [
  { label: "Projects", url: "#projects" },
  { label: "About", url: "#about" },
  { label: "Services", url: "#services" },
  { label: "Process", url: "#process" },
  { label: "Hire Me", url: "#contact" },
];

export const HERO_TAGS: string[] = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Prisma",
  "Redis",
];

export const NICHES: Niche[] = [
  {
    icon: <Rocket />,
    title: "Startup MVPs",
    description:
      "Got a validated idea? I'll turn your spec into a deployed, working product — fast.",
  },
  {
    icon: <ShoppingCart />,
    title: "E-Commerce Builds",
    description:
      "Custom storefronts with Stripe, inventory systems, and admin panels that scale.",
  },
  {
    icon: <ChartColumnStacked />,
    title: "SaaS Dashboards",
    description:
      "Multi-tenant apps with auth, billing, user management, and real-time data.",
  },
  {
    icon: <Plug />,
    title: "API & Integrations",
    description:
      "REST APIs, third-party integrations, and backend systems built to last.",
  },
];

export const SERVICES: Service[] = [
  {
    title: "SaaS MVP Build",
    description:
      "From validated idea to deployed product. Auth, billing, dashboard — built in weeks, not months.",
    icon: <Rocket />,
    features: [
      "Multi-tenant architecture",
      "Stripe subscription billing",
      "Admin & user dashboards",
      "Role-based access control",
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "Custom storefronts that sell. Secure checkout, inventory management, and an admin panel you&apos;ll actually use.",
    icon: <ShoppingCart />,
    features: [
      "Stripe / payment integration",
      "Product & inventory management",
      "Order tracking & emails",
      "SEO-optimized pages",
    ],
  },
  {
    title: "API & Backend Systems",
    description:
      "Well-designed REST APIs and backend services that are a pleasure to integrate with and a nightmare to break.",
    icon: <Plug />,
    features: [
      "REST API design & build",
      "Third-party integrations",
      "Database schema design",
      "Authentication systems",
    ],
  },
  {
    title: "Service Business Apps",
    description:
      "Booking systems, client portals, and lead-gen sites for local businesses that need to look and work great.",
    icon: <Calendar />,
    features: [
      "Appointment booking systems",
      "Automated email reminders",
      "Customer-facing portals",
      "Business owner dashboards",
    ],
  },
  {
    title: "Admin Dashboards",
    description:
      "Data-rich internal tools that give you visibility and control. Real-time metrics, filters, exports — done right.",
    icon: <ChartColumnStacked />,
    features: [
      "Real-time data & charts",
      "Complex filter & search",
      "CSV / data exports",
      "User & team management",
    ],
  },
  {
    title: "DevOps & Deployment",
    description:
      "Dockerized deployments, CI/CD pipelines, and VPS setup so your app stays up and ships faster.",
    icon: <Settings />,
    features: [
      "Docker environments",
      "GitHub Actions CI/CD",
      "VPS / server setup",
      "Automated backups",
    ],
  },
];

export const PROCESSES: Process[] = [
  {
    position: 1,
    title: "Understand the goal",
    description:
      "Before writing a line of code, I understand what success looks like for you — a working demo, a shipped product, or a specific metric. Scope and timeline defined upfront, no surprises.",
  },
  {
    position: 2,
    title: "Design the system first",
    description:
      "DB schema, API contracts, and component structure are defined before building starts. This prevents costly rewrites and keeps scope manageable as requirements evolve.",
  },
  {
    position: 3,
    title: "Build iteratively",
    description:
      "Core functionality ships first, then features are layered in. You get something real to use and react to early — not a big delivery at the end that surprises both of us.",
  },
  {
    position: 4,
    title: "Deploy to production",
    description:
      "Dockerized, CI/CD wired, VPS configured. I don&apos;t hand you a zip file or a Vercel link with hardcoded secrets — I hand you a live, running application you actually own.",
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { label: "All", value: "all" },
  { label: "SaaS", value: "saas" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "Dev Tool", value: "tool" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Furnex",
    label: "E-Commerce Platform",
    category: "E-Commerce",
    role: "Full-Stack Developer",
    period: "Jan 2025 - Mar 2025",
    description:
      " A full-stack website auditing platform that runs a real headless Full-stack furniture e-commerce store with a live admin dashboard, Role-Based Access Control, JWT authentication via HTTP-only cookies, and a Cloudinary image pipeline. Separately deployed frontend and backend — the kind of architecture a real production store would use.",
    tags: ["Next.js", "Node.js", "MongoDB", "JWT + RBAC", "Cloudinary"],
    image: "/projects/furnex.png",
    imageHeight: 7551,
    link: "https://furnex-one.vercel.app/",
    github: "https://github.com/mdshakerullahS/furnex",
    completed: true,
  },
  {
    id: "2",
    title: "FirstPR",
    label: "Open-Source Discovery Platform",
    category: "Dev Tool",
    role: "Full-Stack Developer",
    period: "Apr 2025 - May 2025",
    description:
      " Connects developers to open-source issues that match their tech stack by orchestrating the GitHub REST API. Upstash Redis caches results to cut redundant API calls, and per-IP rate limiting protects the system under unauthenticated traffic. Containerized with Docker for consistent deploys.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "GitHub API",
    ],
    image: "/projects/firstpr.png",
    imageHeight: 3720,
    link: "https://firstpr.vercel.app/",
    github: "https://github.com/mdshakerullahS/firstpr",
    completed: true,
  },
  {
    id: "3",
    title: "SiteScope",
    label: "Website Auditing Tool",
    category: "Dev Tool",
    role: "Full-Stack Developer",
    period: "May 2026",
    description:
      "A full-stack website auditing platform that runs a real headless browser against any URL and surfaces actionable issues across performance, SEO, accessibility, security, UX, and conversion. The challenge was running Puppeteer and Lighthouse concurrently under real load — solved with a browser pool and a serialised Lighthouse queue to prevent Chrome port conflicts. Reports export as PDF, CSV, or JSON.",
    tags: [
      "Next.js",
      "Puppeteer",
      "Lighthouse",
      "Redis",
      "Browser Pool",
      "TypeScript",
    ],
    image: "/projects/sitescope.png",
    imageHeight: 7125,
    link: "https://sitescope.onrender.app/",
    github: "https://github.com/mdshakerullahS/sitescope",
    completed: true,
    featured: true,
  },
  {
    id: "4",
    title: "BookEase",
    label: "Multi-Tenant Scheduling Platform",
    category: "SaaS",
    role: "Full-Stack Developer",
    period: "Coming 2026",
    description:
      "A multi-tenant micro-SaaS scheduling platform providing business owners with custom booking pages and automated confirmations. Built with strict data isolation utilizing schema-level foreign keys, relation traversal via Prisma, and action-level ownership validation. Race conditions are structurally prevented during high-concurrency booking actions using a hybrid approach of pessimistic row-level locking (SELECT FOR UPDATE) and Serializable transaction isolation levels.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Resend SMTP",
    ],
    completed: false,
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend & UI",
    skills: [
      { name: "Next.js", isHighlight: true },
      { name: "React", isHighlight: true },
      { name: "TypeScript", isHighlight: false },
      { name: "Tailwind CSS", isHighlight: false },
      { name: "TanStack Query", isHighlight: false },
      { name: "Framer Motion", isHighlight: false },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", isHighlight: true },
      { name: "Express", isHighlight: true },
      { name: "REST APIs", isHighlight: false },
      { name: "NextAuth", isHighlight: false },
      { name: "JWT", isHighlight: false },
      { name: "Zod", isHighlight: false },
    ],
  },
  {
    id: "database",
    title: "Database & Infra",
    skills: [
      { name: "PostgreSQL", isHighlight: true },
      { name: "Prisma", isHighlight: true },
      { name: "MongoDB", isHighlight: false },
      { name: "Redis", isHighlight: false },
      { name: "Docker", isHighlight: true },
      { name: "GitHub Actions", isHighlight: false },
      { name: "VPS Deployment", isHighlight: false },
    ],
  },
  {
    id: "testing",
    title: "Testing & Quality",
    skills: [
      { name: "Jest", isHighlight: false },
      { name: "Supertest", isHighlight: false },
      { name: "ESLint", isHighlight: false },
      { name: "Prettier", isHighlight: false },
    ],
  },
];

export const STATS: AboutStat[] = [
  { id: 1, number: "5+", label: "Projects Built" },
  { id: 2, number: "2+", label: "Years Building" },
  { id: 3, number: ">24", label: "Response Time" },
];

export const TRUST_CARDS: TrustCard[] = [
  {
    id: "running-app",
    icon: <Ship />,
    title: "You get a running app, not a repo",
    desc: (
      <>
        I don&apos;t consider a project done until it&apos;s live.{" "}
        <strong>Dockerized, deployed, CI/CD wired</strong> — you get a URL that
        works, not a zip file and a good luck.
      </>
    ),
  },
  {
    id: "no-black-box",
    icon: <Search />,
    title: "No black box development",
    desc: (
      <>
        You see progress weekly — <strong>real, working features</strong> you
        can click through, not vague status updates. If something changes scope
        or timeline, I tell you immediately.
      </>
    ),
  },
  {
    id: "maintainable",
    icon: <BrickWall />,
    title: "Code you can actually maintain",
    desc: (
      <>
        Clean architecture, consistent naming, documented decisions. Whether you
        hand it to another developer later or build on it yourself, the{" "}
        <strong>codebase won&apos;t be a mystery</strong>.
      </>
    ),
  },
  {
    id: "turnaround",
    icon: <Zap />,
    title: "Fast turnaround, honest timelines",
    desc: (
      <>
        I give you a realistic estimate upfront, not an optimistic one to win
        the project. <strong>MVPs in weeks</strong>, not months — and I
        don&apos;t disappear when something gets hard.
      </>
    ),
  },
  {
    id: "ownership",
    icon: <Target />,
    title: "One point of contact, full ownership",
    desc: (
      <>
        You&apos;re not dealing with a dev shop where your project gets handed
        to a junior. <strong>I own the entire stack</strong> — frontend,
        backend, infra — which means no handoff gaps.
      </>
    ),
  },
  {
    id: "professional",
    icon: <MessageCircle />,
    title: "Responds like a professional",
    desc: (
      <>
        Under 24 hours for replies, always. If I&apos;m unclear on something I
        ask — I don&apos;t spend a week building the wrong thing.{" "}
        <strong>Direct, clear communication</strong> every step.
      </>
    ),
  },
];

export const CONTACT_ITEMS: ContactItems[] = [
  {
    icon: <Mail />,
    label: "Email",
    value: "sourovmdshakerullah@gmail.com",
    link: "mailto:sourovmdshakerullah@gmail.com",
  },
  {
    icon: <Github />,
    label: "GitHub",
    value: "@mdshakerullahS",
    link: "https://github.com/mdshakerullahS",
  },
  {
    icon: <Linkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/mdshakerullah",
    link: "https://linkedin.com/in/mdshakerullah",
  },
];
