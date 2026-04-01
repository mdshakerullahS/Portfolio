import { InfraSkill, Project, SkillGroup, SocialLink } from "./types/types";
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
} from "lucide-react";

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
