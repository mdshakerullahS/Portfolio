import { z } from "zod";
import { messageSchema } from "@/schemas/message.schema";
import { ReactNode } from "react";

export interface NavLinks {
  label: string;
  url: string;
}

export interface Niche {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
}

export interface Process {
  position: number;
  title: string;
  description: string;
}

export interface ProjectCategory {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  label: string;
  category: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  image?: string;
  imageHeight?: number;
  link?: string;
  github?: string;
  completed: boolean;
  featured?: boolean;
}

interface Skill {
  name: string;
  isHighlight: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  skills: Skill[];
}

export interface AboutStat {
  id: number;
  number: string;
  label: string;
}

export interface TrustCard {
  id: string;
  icon: ReactNode;
  title: string;
  desc: ReactNode;
}

export interface ContactItems {
  icon: ReactNode;
  label: string;
  value: string;
  link: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  text: string;
  createdAt: Date;
}

export type MessageInput = z.infer<typeof messageSchema>;
