import { FC } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative glass rounded-2xl overflow-hidden hover:border-[#00f2ff]/50 transition-all duration-500 hover:-translate-y-2">
      <div className="overflow-hidden aspect-video">
        <Image
          src={project.image}
          width={512}
          height={360}
          loading="lazy"
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-white flex items-center justify-between">
          {project.title}
          <div className="flex gap-3">
            <Link
              href={project.github!}
              target="_blank"
              aria-label={`${project.title} - GitHub repo`}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github size={18} />
            </Link>
            <Link
              href={project.link!}
              target="_blank"
              aria-label={`${project.title} - live demo`}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <ExternalLink size={18} />
            </Link>
          </div>
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] text-gray-500 font-mono">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
