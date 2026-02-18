"use client";

import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "motion/react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="group relative glass h-full grid grid-rows-2 rounded-2xl overflow-hidden hover:border-[#00f2ff]/50 transition-all duration-500 hover:-translate-y-2"
    >
      <motion.div variants={item} className="overflow-hidden aspect-video">
        <Image
          src={project.image}
          width={512}
          height={360}
          loading="lazy"
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
        />
      </motion.div>

      <div className="flex flex-col justify-between p-8">
        <div>
          <div className="flex justify-between">
            <motion.h3
              variants={item}
              className="text-2xl font-bold mb-3 text-white flex items-center justify-between"
            >
              {project.title}
            </motion.h3>
            <motion.div variants={item} className="flex gap-3">
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
            </motion.div>
          </div>
          <motion.p
            variants={item}
            className="text-gray-400 text-sm leading-relaxed"
          >
            {project.description}
          </motion.p>
        </div>

        <motion.div variants={item} className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  delay: i * 0.2 + 0.2,
                  duration: 0.3,
                  ease: [0.21, 0.47, 0.32, 0.98],
                },
              }}
              className="text-[10px] text-gray-500 font-mono"
            >
              #{tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
