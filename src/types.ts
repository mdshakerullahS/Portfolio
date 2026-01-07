export interface Project {
  id: string;
  title: string;
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
