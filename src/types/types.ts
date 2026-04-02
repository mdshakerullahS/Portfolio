import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import z4 from "zod/v4";
import { messageSchema } from "@/schemas/message.schema";

export type Icon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

export interface Service {
  title: string;
  description: string;
  icon: Icon;
  features: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  text: string;
  createdAt: Date;
}

export type MessageInput = z4.infer<typeof messageSchema>;

export interface SocialLink {
  label: string;
  value: string;
  href: string;
  icon: Icon;
}

export interface SkillGroup {
  title: string;
  icon: {
    name: Icon;
    color: string;
  };
  skills: { name: string; detail: string }[];
}

export interface InfraSkill {
  name: string;
  icon: Icon;
}
