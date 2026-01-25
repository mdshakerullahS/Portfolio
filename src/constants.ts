import { Project, SocialLink } from "./types/types";
import { Mail, Github, Linkedin } from "lucide-react";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Furniro",
    description:
      "A full-stack e-commerce web application built with modern web technologies.",
    tags: ["Next.js", "Node.js", "Express", "MongoDB"],
    image: "/projects/Furniro.png",
    link: "https://furniro-hazel-nine.vercel.app/",
    github: "https://github.com/mdshakerullahS/Furniro",
  },
  {
    id: "2",
    title: "OSS_Match",
    description:
      "An open-source issue matcher that helps developers find relevant GitHub issues to contribute to.",
    tags: ["Next.js", "PostgreSQL", "Prisma ORM", "Redis"],
    image: "/projects/OSS_Match.png",
    link: "https://oss-match.vercel.app/",
    github: "https://github.com/mdshakerullahS/OSS_Match",
  },
];

export const SKILLS: string[] = [
  "JavaScript/TypeScript",
  "React/Next.js",
  "Node.js/Express",
  "PostgreSQL/MongoDB",
  "Prisma ORM/Mongoose",
  "Tailwind CSS",
  "Zustand",
  "TanStack Query",
  "Redis",
  "Docker",
  "Linux",
  "Git/GitHub",
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
