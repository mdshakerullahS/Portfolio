"use client";

import { PROJECT_CATEGORIES, PROJECTS } from "@/constants";
import { Project, ProjectCategory } from "@/types/types";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, StaggerReveal, fadeUp } from "./AnimationUtils";

export default function Projects() {
  const [category, setCategory] = useState<ProjectCategory>(
    PROJECT_CATEGORIES[0],
  );
  const [sortedProjects] = useState<Project[]>(
    [...PROJECTS].sort(
      (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false),
    ),
  );
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(sortedProjects);

  useEffect(() => {
    function filterProjects() {
      setFilteredProjects(
        category.value === "all"
          ? sortedProjects
          : sortedProjects.filter((p) => p.category === category.label),
      );
    }

    filterProjects();
  }, [category, sortedProjects]);

  return (
    <section id="projects" className="mb-20">
      <div className="wrapper">
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <Reveal>
            <div>
              <div className="section-label">Work</div>
              <h2 className="section-title mb-0">Production-ready builds.</h2>
            </div>
          </Reveal>

          {/* Filter buttons */}
          <StaggerReveal
            className="flex gap-2 flex-wrap"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.07, delayChildren: 0.1 },
              },
            }}
          >
            {PROJECT_CATEGORIES.map((pCat) => (
              <motion.button
                key={pCat.value}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setCategory(pCat)}
                className={`font-mono text-[0.75em] px-3.5 py-1.5 rounded-sm border ${pCat.value === category.value ? "border-accent text-accent bg-accent-dim" : "border-border bg-transparent text-text-dim"} hover:border-accent hover:bg-accent-dim cursor-pointer tracking-[0.04em] hover:text-accent transition-[border-color,background,color] duration-200`}
              >
                {pCat.label}
              </motion.button>
            ))}
          </StaggerReveal>
        </div>

        {/* Project grid with layout animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={project.featured ? "col-span-full" : ""}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
