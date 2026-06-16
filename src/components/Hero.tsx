"use client";

import Link from "next/link";
import { HERO_TAGS as TAGS } from "@/constants";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const accentReveal = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.34, 1.2, 0.64, 1] as const },
  },
};

const tagItem = {
  hidden: { opacity: 0, scale: 0.85, y: 6 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.34, 1.4, 0.64, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(232,255,71,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(232,255,71,0.03)_1px,transparent_1px)] bg-size-[80px_80px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_100%)]"></div>
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-150 h-150 pointer-events-none [background:radial-gradient(circle,rgba(232,255,71,0.06)_0%,transparent_70%)]"></div>

      <div className="wrapper">
        <motion.div
          className="relative z-10 max-w-190"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full py-1.5 pr-3.5 pl-2.5 mb-9 bg-surface border border-border-light font-mono text-[0.75rem] text-text-muted"
          >
            <motion.div
              className="w-1.75 h-1.75 rounded-full bg-green"
              animate={{ scale: [1, 0.7, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-nowrap">Available for freelance</span>
            <span className="text-nowrap [@media(width<=400px)]:hidden">
              · Respond in 24h
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="font-display [@media(width<=400px)]:text-[2.75rem] text-5xl md:text-8xl sm:text-[6.5rem] font-extrabold leading-[0.95] tracking-[-0.04em] mb-7"
          >
            I build apps
            <br />
            <motion.span variants={accentReveal} className="text-accent block">
              founders ship.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-[1.15rem] max-w-140 leading-[1.7] mb-11 font-light text-text-muted [&>strong]:text-text [&>strong]:font-medium"
          >
            Full-stack developer specializing in
            <strong> SaaS MVPs, e-commerce platforms,</strong> and
            <strong> admin dashboards</strong> — built with clean architecture
            and deployed to actually survive production.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex items-center gap-4 flex-wrap"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <Link href="#projects" className="btn-primary">
                See My Work <ArrowRight size="12px" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <Link href="#contact" className="btn-ghost">
                Start a Project <ArrowRight size="12px" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stack tags */}
          <motion.div
            variants={item}
            className="mt-15 flex items-center gap-5 flex-wrap"
          >
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-dim">
              Stack
            </span>
            <motion.div
              className="flex gap-2 flex-wrap"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.3 },
                },
              }}
            >
              {TAGS.map((tag) => (
                <motion.span
                  key={tag}
                  variants={tagItem}
                  whileHover={{
                    y: -3,
                    borderColor: "rgba(232,255,71,0.45)",
                    color: "#e8ff47",
                    transition: { duration: 0.15 },
                  }}
                  className="font-mono text-[0.72rem] py-1 px-2.5 rounded-sm bg-surface border border-border text-text-muted tracking-[0.03em] cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
