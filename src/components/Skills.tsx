"use client";

import { SKILL_GROUPS } from "@/constants";
import { motion } from "motion/react";
import { Reveal, fadeLeft, fadeRight } from "./AnimationUtils";

export default function Skills() {
  return (
    <section id="skills" className="bg-surface">
      <div className="wrapper">
        <Reveal>
          <div className="section-label">Skills</div>
          <h2 className="section-title">How I build.</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-15 mt-14 items-start">
          {/* Skill groups */}
          <Reveal variants={fadeLeft}>
            {SKILL_GROUPS.map((group, gi) => (
              <motion.div
                key={group.id}
                className="mb-9 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: gi * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <div className="font-mono text-[0.72rem] uppercase tracking-widest mb-3.5 pb-2.5 border-b border-border text-text-dim group-hover:text-accent transition-colors duration-200">
                  {group.title}
                </div>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: 0.3,
                            ease: [0.34, 1.4, 0.64, 1],
                          },
                        },
                      }}
                      whileHover={{
                        y: -3,
                        borderColor: "rgba(232,255,71,0.5)",
                        color: "#e8ff47",
                        backgroundColor: "rgba(232,255,71,0.12)",
                        transition: { duration: 0.15 },
                      }}
                      className={`font-mono text-[0.78rem] py-1.5 px-3 rounded-md ${skill.isHighlight ? "border-[rgba(232,255,71,0.3)] text-accent bg-accent-dim" : "bg-surface border-border text-text-muted"} border cursor-default`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </Reveal>

          {/* Prose card */}
          <Reveal variants={fadeRight}>
            <motion.div
              className="bg-surface flex flex-col gap-5 border border-border rounded-xl p-8 [&>p]:text-[0.9rem] [&>p]:leading-[1.75] [&>p]:font-light [&>p]:text-text-muted [&>p>strong]:text-text [&>p>strong]:font-medium"
              whileHover={{
                borderColor: "rgba(232,255,71,0.15)",
                boxShadow:
                  "0 0 0 1px rgba(232,255,71,0.07), 0 16px 48px rgba(0,0,0,0.4)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="font-display text-[1.1rem] font-bold">
                Self-taught, production-proven.
              </div>
              <p>
                I didn&apos;t come up through a computer science program. I
                learned by building real things, breaking them, and figuring out
                why — which means every concept I know is attached to a problem
                I actually had to solve.
              </p>
              <p>
                Over 2 years of daily building, I&apos;ve shipped{" "}
                <strong>5 production applications</strong>, gone from
                frontend-only to owning the full stack, and learned that the gap
                between &quot;it works locally&quot; and &quot;it works under
                real load&quot; is where most of the interesting problems live.
              </p>
              <p>
                I&apos;m not a generalist who dabbles in everything. I
                specialize in <strong>Next.js, Node.js,</strong> and{" "}
                <strong>PostgreSQL</strong> with <strong>Docker</strong> on top
                — and I go deep, not wide.
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
