"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer>
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.3,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        }}
        className="glass mt-12 py-8"
      >
        <p className="text-slate-500 text-xs text-center font-mono">
          &copy; {new Date().getFullYear()} Shakerullah. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
