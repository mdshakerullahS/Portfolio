"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const lines = [
  {
    content: (
      <>
        <span className="kw">const </span>
        <span className="fn">developer</span>
        {" = {"}
      </>
    ),
    indent: 0,
  },
  {
    content: (
      <>
        name: <span className="str">&quot;Md Shakerullah Sourov&quot;</span>,
      </>
    ),
    indent: 1,
  },
  {
    content: (
      <>
        role: <span className="str">&quot;Full-Stack Developer&quot;</span>,
      </>
    ),
    indent: 1,
  },
  {
    content: (
      <>
        focus: [<span className="str">&quot;SaaS&quot;</span>,{" "}
        <span className="str"> &quot;E-Commerce&quot;</span>,{" "}
        <span className="str"> &quot;MVPs&quot;</span>],
      </>
    ),
    indent: 1,
  },
  {
    content: (
      <>
        available: <span className="kw">true</span>,
        <span className="cm">{" // Responds within 24 hours"}</span>
      </>
    ),
    indent: 1,
  },
  {
    content: (
      <>
        approach:{" "}
        <span className="str">
          &quot;Build
          <ArrowRight size={12} className="inline mx-1" />
          Test
          <ArrowRight size={12} className="inline mx-1" />
          Deploy&quot;
        </span>
        ,
      </>
    ),
    indent: 1,
  },
  {
    content: (
      <>
        yearsBuilding: <span className="str">2</span>,
      </>
    ),
    indent: 1,
  },
  {
    content: (
      <>
        projectsShipped: <span className="str">5</span>,
      </>
    ),
    indent: 1,
  },
  {
    content: (
      <>
        {"}"}
        <span className="str">;</span>
      </>
    ),
    indent: 0,
  },
];

export default function CodeSnippet() {
  return (
    <motion.div
      className="bg-bg border border-border rounded-xl p-7 font-mono"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
      whileHover={{
        borderColor: "rgba(232,255,71,0.15)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        transition: { duration: 0.3 },
      }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 mb-5 pb-3.5 border-b border-border">
        <div className="dot bg-red"></div>
        <div className="dot bg-accent"></div>
        <div className="dot bg-green"></div>
        <div className="ml-auto text-[0.75rem] tracking-[0.05em] text-text-dim">
          developer.profile.ts
        </div>
      </div>

      {/* Animated code lines */}
      <div>
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className={`code-line ${line.indent ? "pl-5" : ""}`}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.35 + i * 0.06,
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            {line.content}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
