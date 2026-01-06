export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  tasks: string[];
}

export interface Message {
  id: string;
  name: string;
  email: string;
  text: string;
  createdAt: Date;
}

export interface Skill {
  id: string;
  name: string;
  category: "language" | "frontend" | "backend" | "db" | "devops" | "ai";
}
