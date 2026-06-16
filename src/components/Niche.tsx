"use client";

import { NICHES } from "@/constants";
import { motion } from "motion/react";
import { StaggerReveal, fadeUp } from "./AnimationUtils";

export default function Niche() {
  return (
    <div className="p-0 border-y border-border">
      <div className="wrapper p-0">
        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.05 },
            },
          }}
          amount={0.1}
        >
          {NICHES.map((niche) => (
            <motion.div
              key={niche.title}
              variants={fadeUp}
              whileHover={{
                backgroundColor: "var(--color-surface)",
                transition: { duration: 0.2 },
              }}
              className="py-10 px-8 border-b last:border-b-0 md:nth-child(-n+2):border-b md:nth-child(n+3):border-b-0 md:nth-child(odd):border-r md:nth-child(even):border-r-0 lg:border-b-0 lg:border-r lg:last:border-r-0 border-border transition-colors duration-200 cursor-default"
            >
              <motion.div
                className="text-[1.5rem] mb-3"
                whileHover={{ scale: 1.2, rotate: -8 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
              >
                {niche.icon}
              </motion.div>
              <div className="font-display text-[1rem] font-bold mb-1.5">
                {niche.title}
              </div>
              <div className="text-[0.85rem] leading-normal text-muted">
                {niche.description}
              </div>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </div>
  );
}
