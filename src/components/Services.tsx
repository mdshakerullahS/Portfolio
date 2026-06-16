"use client";

import { SERVICES } from "@/constants";
import { motion } from "motion/react";
import { Reveal, StaggerReveal, fadeUp } from "./AnimationUtils";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-surface">
      <div className="wrapper">
        <Reveal>
          <div className="section-label">Services</div>
        </Reveal>
        <div className="flex items-start justify-between flex-wrap gap-6">
          <Reveal>
            <div>
              <h2 className="section-title">What I build for you.</h2>
              <p className="section-desc">
                Outcome-focused services. Tell me what you need to achieve —
                I&apos;ll handle the stack.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <motion.a
              href="#contact"
              className="btn-primary mt-2 self-end"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              Start a Project <ArrowRight size="12" />
            </motion.a>
          </Reveal>
        </div>

        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 mt-14 rounded-xl overflow-hidden bg-border"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.09, delayChildren: 0.05 },
            },
          }}
          amount={0.1}
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{
                backgroundColor: "var(--color-surface2)",
                transition: { duration: 0.2 },
              }}
              className="bg-surface py-9 px-7 relative transition-colors duration-200 group"
            >
              <motion.div
                className="w-11 h-11 bg-accent-dim border border-[rgba(232,255,71,0.2)] rounded-lg flex items-center justify-center text-[1.2rem] mb-5"
                whileHover={{ scale: 1.15, rotate: 6 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
              >
                {s.icon}
              </motion.div>
              <div className="font-display text-[1rem] font-bold mb-2.5">
                {s.title}
              </div>
              <p className="text-[0.85rem] leading-[1.6] mb-4 font-light text-muted">
                {s.description}
              </p>
              <ul className="list-none">
                {s.features.map((f) => (
                  <motion.li
                    key={f}
                    className="font-mono text-[0.75rem] py-0.75 pl-3.5 relative text-dim"
                    initial={{ opacity: 0.7 }}
                    whileHover={{
                      opacity: 1,
                      x: 3,
                      transition: { duration: 0.15 },
                    }}
                  >
                    <ArrowRight
                      size="12px"
                      className="text-accent inline mx-1"
                    />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
