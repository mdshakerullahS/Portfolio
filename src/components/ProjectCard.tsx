"use client";

import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative glass h-full flex flex-col rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500">
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={project.image}
          width={512}
          height={360}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Link
            href={project.link!}
            target="_blank"
            className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
          >
            <ExternalLink size={20} />
          </Link>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col grow p-4 lg:p-6 xl:p-8">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 text-xs">
              {project.role} • {project.period}
            </p>
          </div>
          <Link
            href={project.github!}
            target="_blank"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Github size={20} />
          </Link>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 border-t border-white/5 pt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-blue-400/70 font-mono font-bold uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Primary CTA: Live Demo */}
        <Link
          href={project.link!}
          target="_blank"
          className="w-full py-3 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 rounded-xl text-center text-xs font-bold tracking-widest uppercase transition-all duration-300"
        >
          View Live App
        </Link>
      </div>
    </div>
  );
}
