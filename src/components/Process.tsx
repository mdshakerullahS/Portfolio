"use client";

import { PROCESSES } from "@/constants";
import { motion } from "motion/react";
import { Reveal, StaggerReveal, fadeUp } from "./AnimationUtils";

export default function Process() {
  return (
    <section id="process">
      <div className="wrapper">
        <Reveal>
          <div className="section-label">Process</div>
          <h2 className="section-title">How a project works.</h2>
          <p className="section-desc">
            No big reveals at the end. You see real progress every step of the
            way.
          </p>
        </Reveal>

        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 mt-14 rounded-xl overflow-hidden bg-border"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.05 },
            },
          }}
          amount={0.1}
        >
          {PROCESSES.map((process) => (
            <motion.div
              key={process.position}
              variants={fadeUp}
              whileHover={{
                backgroundColor: "var(--color-surface2)",
                transition: { duration: 0.2 },
              }}
              className="bg-surface py-9 px-7 relative transition-colors duration-200 group cursor-default"
            >
              <motion.div
                className="font-display text-[3.5rem] font-extrabold leading-none mb-5 text-accent"
                initial={{ opacity: 0.15 }}
                whileHover={{ opacity: 0.65 }}
                transition={{ duration: 0.2 }}
              >
                {("0" + process.position).slice(-2)}
              </motion.div>
              <div className="font-display text-[1rem] font-bold mb-2.5">
                {process.title}
              </div>
              <p className="text-[0.85rem] leading-[1.65] font-light text-text-muted">
                {process.description}
              </p>

              {/* Accent line on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-accent rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
