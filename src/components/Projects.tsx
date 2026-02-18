"use client";

import { PROJECTS } from "@/constants";
import ProjectCard from "./ProjectCard";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { ReactNode, RefObject, useRef } from "react";

interface ScrollItemProps {
  children: ReactNode;
  index: number;
  sectionRef: RefObject<HTMLElement | null>;
  className?: string;
}

function ScrollItem({
  children,
  index,
  sectionRef,
  className,
}: ScrollItemProps) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const start = index * 0.05;
  const midStart = start + 0.3;
  const midEnd = start + 0.55;
  const end = start + 0.8;

  const keyframe = [start, midStart, midEnd, end];

  const scale = useTransform(scrollYProgress, keyframe, [0.9, 1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, keyframe, [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, keyframe, [4, 0, 0, 4]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{
        y: 0,
        transition: {
          duration: 0.3,
          delay: (index + 1) * 0.2,
          ease: [0.21, 0.47, 0.32, 0.98],
        },
      }}
      style={{ scale, opacity, filter: useMotionTemplate`blur(${blur}px)` }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="projects" className="pt-24">
      <div className="container mx-auto px-6 space-y-12">
        <ScrollItem index={0} sectionRef={sectionRef}>
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-5xl text-center font-black italic"
          >
            FEATURED <span className="text-blue-400">PROJECTS</span>
          </motion.h2>
        </ScrollItem>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ScrollItem key={project.id} index={1} sectionRef={sectionRef}>
              <ProjectCard project={project} />
            </ScrollItem>
          ))}
        </div>
      </div>
    </section>
  );
}
