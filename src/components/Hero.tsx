"use client";

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants";
import { motion, useScroll, useTransform } from "motion/react";
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

  // Reduced complexity of keyframes for a smoother feel
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          delay: index * 0.1, // Snappier staggered entrance
          ease: "easeOut",
        },
      }}
      style={{ scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Static Background Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 z-10 text-center">
        {/* Availability Badge */}
        <ScrollItem
          index={0}
          sectionRef={sectionRef}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>
          <span className="text-[10px] font-bold tracking-widest uppercase text-blue-400 font-mono">
            Open to new opportunities
          </span>
        </ScrollItem>

        {/* Headline */}
        <ScrollItem index={1} sectionRef={sectionRef}>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9] text-white">
            FULL-STACK <br />
            <span className="text-blue-500">DEVELOPER.</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-300 mb-8 tracking-tight">
            Building fast, scalable web applications.
          </p>
        </ScrollItem>

        {/* Description */}
        <ScrollItem index={2} sectionRef={sectionRef}>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-4 leading-relaxed">
            Full-stack developer focused on building fast, scalable web
            applications using modern technologies. I&apos;ve built real
            projects with authentication, dashboards, and APIs.
          </p>
          {/* Trust Line */}
          <p className="text-sm font-mono text-slate-500 mb-10">
            Next.js • TypeScript • Node.js • PostgreSQL • Docker
          </p>
        </ScrollItem>

        {/* Dual CTAs */}
        <ScrollItem
          index={3}
          sectionRef={sectionRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl transition-all hover:bg-blue-50 text-sm"
          >
            VIEW PROJECTS
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white font-bold rounded-xl transition-all hover:bg-white/5 hover:border-white/20 text-sm"
          >
            <Mail className="w-4 h-4" />
            HIRE ME
          </Link>
        </ScrollItem>

        {/* Socials - Simplified entrance */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {SOCIAL_LINKS.map((social, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <Link
                href={social.href}
                target="_blank"
                className="text-slate-500 hover:text-blue-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
