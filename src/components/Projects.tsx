"use client";

import { PROJECTS } from "@/constants";
import ProjectCard from "./ProjectCard";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  // Simplified scroll intensity to focus on content
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="projects" className="py-16 bg-black">
      <motion.div style={{ opacity }} className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-12 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            What I&apos;ve <span className="text-blue-500 italic">Build.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl font-medium">
            Building production-ready applications with a focus on performance,
            scalability, and user conversion.
          </p>
        </div>

        {/* Project Grid - Fixed Stagger Index */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: (i % 2) * 0.2, // Stagger based on column
                  duration: 0.5,
                  ease: "easeOut",
                },
              }}
              viewport={{ once: true, margin: "-100px" }}
              // Large projects take full width if marked as featured
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
