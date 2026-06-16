"use client";

import { Project } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { MouseEvent, useRef, useState } from "react";
import { Eye, Github } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), {
    stiffness: 200,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), {
    stiffness: 200,
    damping: 24,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relX);
    y.set(relY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: project.featured ? 0 : rotateX,
        rotateY: project.featured ? 0 : rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
      }}
      whileHover={{
        borderColor: "#333",
        boxShadow:
          "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(232,255,71,0.07)",
        transition: { duration: 0.25 },
      }}
      className={`bg-surface flex flex-col border border-border rounded-xl overflow-hidden ${project.featured && "col-span-full"} group`}
      data-category={project.category}
    >
      {/* ── Image area ── */}
      <div
        className={`bg-surface2 relative overflow-hidden shrink-0 mockup-ecommerce`}
        style={{
          height: isHovered && project.featured ? "440px" : "220px",
          transition: "height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {project.image ? (
          <motion.div
            className="w-full h-full"
            animate={
              isHovered
                ? {
                    y: project.featured
                      ? "-calc(100% - 440px)"
                      : "calc(-100% + 220px)",
                  }
                : { y: 0 }
            }
            style={{ position: "relative" }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={512}
              height={320}
              loading="eager"
              className="w-full h-auto block"
              style={{
                transform: isHovered
                  ? project.featured
                    ? `translateY(calc(-100% + 440px))`
                    : `translateY(calc(-100% + 220px))`
                  : "translateY(0)",
                transition: "transform 5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </motion.div>
        ) : (
          <div className="flex items-center justify-center p-6 h-full">
            <span className="font-mono text-accent-dim text-[4rem] font-bold leading-16 lg:leading-44 text-center uppercase">
              Coming Soon
            </span>
          </div>
        )}

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          animate={{ opacity: isHovered ? 0 : 0.3 }}
          transition={{ duration: 0.2 }}
        />

        {/* Label pill */}
        <motion.div
          className="absolute bottom-4 left-4 font-mono text-[0.68rem] uppercase tracking-[0.08em] z-2 text-text backdrop-blur-sm px-2 py-1 rounded-md"
          animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {project.label}
        </motion.div>

        {/* Shimmer on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(232,255,71,0.05) 50%, transparent 70%)",
            backgroundSize: "200% 100%",
          }}
          animate={
            isHovered
              ? { backgroundPositionX: ["200%", "-200%"] }
              : { backgroundPositionX: "200%" }
          }
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>

      {/* ── Content ── */}
      <div className="p-7 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-accent">
            {project.category}
          </span>
          <span className="text-[0.7rem] text-text-dim">·</span>
          <span className="font-mono text-[0.68rem] text-text-dim">
            {project.period}
          </span>
          {!project.completed && (
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-[rgba(232,255,71,0.1)] border border-[rgba(232,255,71,0.25)] text-accent font-mono text-[0.68rem] py-0.5 px-2 rounded-full tracking-[0.06em]"
            >
              🔨 Building
            </motion.span>
          )}
        </div>
        <div className="font-display text-xl font-bold mb-2.5 -tracking-[0.02]">
          {project.title}
        </div>
        <p className="text-[0.88rem] leading-[1.65] mb-5 flex-1 font-light text-text-muted">
          {project.description}
        </p>
        <div className="flex gap-1.5 flex-wrap mb-5">
          {project.tags.map((t) => (
            <motion.span
              key={t}
              whileHover={{
                borderColor: "rgba(232,255,71,0.4)",
                color: "#e8ff47",
                y: -2,
                transition: { duration: 0.15 },
              }}
              className="font-mono text-[0.68rem] px-2 py-1.5 rounded-[3px] bg-surface2 border border-border text-text-dim tracking-[0.03em] cursor-default"
            >
              {t}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-3">
          {!project.github && !project.link && (
            <span className="font-mono text-[0.78rem] flex items-center gap-1.25 py-1.5 text-text-muted">
              <Github size="12px" />
              GitHub (Soon)
            </span>
          )}
          {project.github && (
            <Link
              href={project.github}
              className="font-mono text-[0.78rem] flex items-center gap-1.25 py-1.5 border-b border-transparent hover:border-accent text-text-muted hover:text-accent transition-colors duration-200"
              target="_blank"
            >
              <Github size="12px" />
              GitHub
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              className="font-mono text-[0.78rem] flex items-center gap-1.25 py-1.5 border-b border-transparent hover:border-accent text-text-muted hover:text-accent transition-colors duration-200"
              target="_blank"
            >
              <Eye size="12px" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
