import {
  InfraSkill,
  Project,
  Service,
  SkillGroup,
  SocialLink,
} from "./types/types";
import {
  Mail,
  Github,
  Linkedin,
  Layout,
  Server,
  Database,
  Terminal,
  Container,
  Settings,
  GitBranch,
  Workflow,
  CheckCircle,
  Cpu,
  Zap,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

export const SERVICES: Service[] = [
  {
    title: "Full-Stack Development",
    description:
      "Turning complex ideas into polished digital products. I build fast, responsive, and type-safe applications from the ground up.",
    icon: Cpu,
    features: [
      "Next.js Architecture",
      "Custom API Logic",
      "Scalable State Management",
    ],
    color: "group-hover:text-blue-400",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Stop worrying about downtime. I setup robust Docker environments and CI/CD pipelines to keep your app running 24/7.",
    icon: Server,
    features: ["Docker & VPS", "GitHub Actions", "Automated Backups"],
    color: "group-hover:text-emerald-400",
  },
  {
    title: "Database Architecture",
    description:
      "Data is the heart of your business. I architect high-performance PostgreSQL schemas designed for speed and integrity.",
    icon: Database,
    features: ["Relational Design", "Prisma ORM", "Query Optimization"],
    color: "group-hover:text-cyan-400",
  },
  {
    title: "E-commerce Engines",
    description:
      "Built to sell. Secure checkout flows, real-time cart logic, and custom payment integrations that don't break.",
    icon: ShoppingCart,
    features: ["Stripe/Auth Integration", "Inventory Sync", "Secure Checkout"],
    color: "group-hover:text-purple-400",
  },
  {
    title: "Performance Engineering",
    description:
      "Speed is a feature. I optimize Core Web Vitals to ensure your site feels instant and ranks higher on Google.",
    icon: Zap,
    features: ["Sub-second Loading", "Image Optimization", "Edge Caching"],
    color: "group-hover:text-yellow-400",
  },
  {
    title: "Conversion-Led Design",
    description:
      "Websites that work for you. I build high-intent landing pages designed to turn visitors into paying customers.",
    icon: TrendingUp,
    features: ["Service-Industry Focus", "Lead-Gen Forms", "Analytics Setup"],
    color: "group-hover:text-orange-400",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Furniro",
    role: "Full-Stack Developer",
    period: "Jan 2025 - Mar 2025",
    description:
      "Built a full-stack e-commerce platform with product browsing, cart management, and secure backend APIs, simulating real-world online store workflows.",
    tags: ["E-commerce", "Authentication", "API", "Full-stack"],
    image: "/projects/Furniro.png",
    link: "https://furniro-hazel-nine.vercel.app/",
    github: "https://github.com/mdshakerullahS/Furniro",
  },
  {
    id: "2",
    title: "OSS Match",
    role: "Full-Stack Developer",
    period: "Apr 2025 - May 2025",
    description:
      "Developed a platform that helps developers discover relevant open-source issues by matching GitHub data, improving contribution discovery and workflow.",
    tags: ["GitHub API", "Matching Logic", "Performance"],
    image: "/projects/OSS_Match.png",
    link: "https://oss-match.vercel.app/",
    github: "https://github.com/mdshakerullahS/OSS_Match",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend & UI",
    icon: { name: Layout, color: "blue" },
    skills: [
      { name: "Next.js", detail: "Full-stack React framework" },
      { name: "React", detail: "Component-based UI development" },
      { name: "Tailwind CSS", detail: "Modern UI styling" },
      { name: "TanStack Query", detail: "Server state management" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: { name: Server, color: "emerald" },
    skills: [
      { name: "Node.js", detail: "Backend runtime & APIs" },
      { name: "Express", detail: "Routing & middleware" },
      { name: "Authentication", detail: "JWT, sessions, NextAuth" },
      { name: "Validation", detail: "Zod & input validation" },
    ],
  },
  {
    title: "Database & Performance",
    icon: { name: Database, color: "purple" },
    skills: [
      { name: "PostgreSQL", detail: "Relational database design" },
      { name: "MongoDB", detail: "Document-based storage" },
      { name: "Prisma", detail: "Type-safe ORM" },
      { name: "Redis", detail: "Caching & performance optimization" },
    ],
  },
];

export const INFRA_SKILLS: InfraSkill[] = [
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Container },
  { name: "GitHub Actions", icon: Workflow },
  { name: "VPS Deployment", icon: Terminal },
  { name: "Jest", icon: CheckCircle },
  { name: "Supertest", icon: CheckCircle },
  { name: "ESLint", icon: Settings },
  { name: "Prettier", icon: Settings },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Email",
    value: "sourovmdshakerullah@gmail.com",
    href: "mailto:sourovmdshakerullah@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "@mdshakerullahS",
    href: "https://github.com/mdshakerullahS",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "@mdshakerullah",
    href: "https://linkedin.com/in/mdshakerullah",
    icon: Linkedin,
  },
];
