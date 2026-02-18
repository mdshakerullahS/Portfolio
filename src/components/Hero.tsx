"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { ReactNode, RefObject, useRef, useState } from "react";

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
  const midStart = start + 0.25;
  const midEnd = start + 0.5;
  const end = start + 0.75;
  const keyframe = [start, midStart, midEnd, end];

  const scale = useTransform(scrollYProgress, keyframe, [0.9, 1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, keyframe, [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, keyframe, [4, 0, 0, 4]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
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

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", () => {
    setIsScrolled(true);
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
    >
      {/* Floating Gradient Blobs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full"
      />

      <motion.div className="container mx-auto px-6 z-10 text-center">
        {/* Status Badge */}

        <ScrollItem
          index={0}
          sectionRef={sectionRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md transition-colors hover:border-blue-500/50 group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>

          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-slate-300 font-mono group-hover:text-white transition-colors">
            Available for new opportunities
          </span>
        </ScrollItem>

        {/* Headline */}
        <ScrollItem index={1} sectionRef={sectionRef}>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.85] text-white">
            BUILDING THE <br />
            <span className="bg-linear-to-r from-blue-400 via-white to-purple-500 bg-clip-text text-transparent italic">
              FUTURE WEB.
            </span>
          </h1>
        </ScrollItem>

        {/* Description */}
        <ScrollItem index={2} sectionRef={sectionRef}>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Full-stack web developer specializing in{" "}
            <span className="text-white">high-performance</span> end-to-end
            applications. I turn complex problems into{" "}
            <span className="text-blue-400 font-medium font-mono">
              &lt;elegant_solutions /&gt;
            </span>
            .
          </p>
        </ScrollItem>

        {/* CTA */}
        <ScrollItem
          index={3}
          sectionRef={sectionRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#projects"
            className="group relative flex items-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-2xl transition-all duration-300 active:scale-95 hover:scale-105 hover:shadow-xl"
          >
            VIEW PROJECTS
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5 group-hover:-rotate-6" />
          </Link>

          {/* Social Buttons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    delay: i * 0.2 + (!isScrolled ? 0.9 : 0.2),
                    duration: 0.3,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                  },
                }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  className="block p-4 rounded-2xl glass hover:border hover:text-blue-400 transition-all group relative"
                  aria-label={social.label}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {social.label}
                  </div>

                  <social.icon />
                </Link>
              </motion.div>
            ))}
          </div>
        </ScrollItem>
      </motion.div>
    </section>
  );
}
