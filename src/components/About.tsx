"use client";

import Image from "next/image";
import CodeSnippet from "./CodeSnippet";
import { STATS } from "@/constants";
import { motion } from "motion/react";
import {
  Reveal,
  StaggerReveal,
  fadeLeft,
  fadeRight,
  scaleIn,
} from "./AnimationUtils";

export default function About() {
  return (
    <section id="about" className="bg-surface">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center">
          {/* Left – image + code snippet */}
          <Reveal variants={fadeLeft} className="relative flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden max-w-full lg:max-w-85 border border-border-light aspect-4/5 bg-surface2">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src="/portrait.jpg"
                  alt="Shakerullah — Full-Stack Developer"
                  width={512}
                  height={1024}
                  className="w-full h-full object-cover block filter grayscale-20 hover:grayscale-0 transition-[filter] duration-400"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 12, y: 12 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="absolute -bottom-3 -right-3 bg-accent rounded-lg py-2.5 px-4 font-mono text-[0.72rem] font-medium tracking-[0.04em] text-black shadow-[0_8px_24px_rgba(232,255,71,0.25)]"
              >
                Available for freelance
              </motion.div>
            </div>

            <CodeSnippet />
          </Reveal>

          {/* Right – text + stats */}
          <Reveal
            variants={fadeRight}
            className="[&>p]:text-[0.95rem] [&>p]:leading-[1.8] [&>p]:mb-4.5 [&>p]:font-light [&>p]:text-text-muted [&>p>strong]:text-text [&>p>strong]:font-medium"
          >
            <div className="section-label">About</div>
            <h2 className="section-title mb-6">
              Built for production, not just demos.
            </h2>
            <p>
              I&apos;m a self-taught full-stack developer who builds{" "}
              <strong>complete web applications</strong> — from database schema
              to deployed product. I started with frontend and pushed myself
              deeper into backend to understand how real systems are architected
              and maintained.
            </p>
            <p>
              I specialize in{" "}
              <strong>
                SaaS apps, e-commerce platforms, and service business tools
              </strong>
              . Not because that&apos;s a marketing decision, but because those
              are the problems I&apos;ve spent the most time solving — which
              means I bring patterns that actually work, not just code that
              compiles.
            </p>
            <p>
              My work is production-ready by default:{" "}
              <strong>Dockerized, CI/CD wired, and tested </strong>before I
              consider it done. I don&apos;t hand you a Vercel link with
              hardcoded secrets and hope for the best.
            </p>
            <p className="mb-0">
              Currently taking on <strong>freelance projects</strong>. If you
              have a product idea or need a developer who can own the full
              stack, let&apos;s talk.
            </p>

            {/* Stats */}
            <StaggerReveal
              className="grid grid-cols-3 gap-4 mt-8"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
              }}
            >
              {STATS.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={scaleIn}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(232,255,71,0.3)",
                    transition: { duration: 0.2 },
                  }}
                  className="text-center bg-bg border border-border rounded-lg py-5 px-3 cursor-default"
                >
                  <span className="font-display [@media(width<=400px)]:text-2xl text-[2rem] font-extrabold block text-accent">
                    {stat.number}
                  </span>
                  <span className="font-mono text-[0.7rem] block mt-1 tracking-[0.05em] text-text-dim">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </StaggerReveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
