"use client";

import { TRUST_CARDS } from "@/constants";
import { motion } from "motion/react";
import { Reveal, StaggerReveal, fadeUp } from "./AnimationUtils";

export default function Trust() {
  return (
    <section id="trust" className="bg-surface">
      <div className="wrapper">
        <Reveal>
          <div className="section-label">Why work with me</div>
          <h2 className="section-title">What you actually get.</h2>
          <p className="section-desc">
            The things clients care about that rarely make it onto a resume.
          </p>
        </Reveal>

        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          amount={0.1}
        >
          {TRUST_CARDS.map((trust) => (
            <motion.div
              key={trust.id}
              variants={fadeUp}
              whileHover={{
                y: -6,
                borderColor: "rgba(232,255,71,0.2)",
                boxShadow:
                  "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,255,71,0.07)",
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="bg-surface border border-border rounded-xl p-8 cursor-default"
            >
              <motion.div
                className="text-[1.5rem] mb-4"
                whileHover={{ scale: 1.2, rotate: -8 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
              >
                {trust.icon}
              </motion.div>
              <div className="font-display text-[1rem] font-bold mb-2.5">
                {trust.title}
              </div>
              <p className="text-[0.88rem] leading-[1.7] font-light text-text-muted [&>strong]:text-text [&>strong]:font-medium">
                {trust.desc}
              </p>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
