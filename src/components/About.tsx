"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-16 bg-black relative overflow-hidden"
    >
      {/* Background Subtle Typography */}
      <div className="absolute top-10 left-10 opacity-[0.02] select-none pointer-events-none">
        <span className="text-[20vw] font-black leading-none">ABOUT</span>
      </div>

      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start"
      >
        {/* Left: Narrative */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Building <span className="text-blue-500 italic">real-world</span>{" "}
              apps, not just{" "}
              <span className="text-slate-400 italic">interfaces.</span>
            </h2>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-slate-400 leading-relaxed space-y-6">
            <p>
              I build full-stack web applications with a focus on{" "}
              <span className="text-white font-medium">
                performance, scalability, and real-world usability
              </span>
              . My goal is to create products that not only look good, but work
              reliably in production.
            </p>

            <p>
              I started with frontend development and gradually moved into
              backend to understand how complete systems are built. This allows
              me to design applications where the UI, business logic, and data
              flow work seamlessly together.
            </p>

            <p>
              I&apos;ve built projects featuring authentication systems,
              dashboards, and API-driven architectures — focusing on solving
              practical problems instead of just building demos. I prioritize
              clean, maintainable code and systems that can scale over time.
            </p>

            <p>
              I&apos;m continuously improving by building real-world projects,
              learning better system design, and refining how I develop and
              deploy production-ready applications.
            </p>
          </div>
        </div>

        {/* Right: Proof & Capabilities */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-12">
          {/* Engineering Identity */}
          <div className="p-10 bg-white/3 border border-white/10 rounded-3xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="flex flex-col items-center text-center">
              <p className="text-3xl font-black text-white">
                Full-Stack Developer
              </p>
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-2">
                Build → Test → Deploy
              </p>
            </div>
          </div>

          {/* What I Actually Do */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2">
              <span className="w-1 h-3 bg-blue-500" /> What I Actually Do
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {[
                "Build full-stack web applications",
                "Implement secure authentication systems",
                "Design and develop REST APIs",
                "Create responsive dashboards and UI",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-slate-300 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment / Real-world Proof */}
          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
            <p className="text-xs leading-relaxed text-slate-400">
              <strong className="text-white block mb-1">
                Production-Ready Deployment
              </strong>
              I deploy and manage applications in real environments, ensuring
              they are stable, performant, and ready for real users — not just
              local demos.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
