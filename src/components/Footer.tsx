"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Reveal } from "./AnimationUtils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Reveal>
      <footer className="bg-surface border-t border-border pt-12 pb-9">
        <div className="wrapper">
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <Link href="/">
                  <div className="font-display font-extrabold text-[1rem]">
                    shakerullah<span className="text-accent">.</span>
                  </div>
                </Link>
              </motion.div>
              <div className="text-[0.82rem] mt-1 font-mono text-text-dim">
                Full-Stack Developer · Available for Freelance
              </div>
            </div>
            <div className="flex flex-wrap gap-6 [&>a]:font-mono [&>a]:text-[0.78rem] [&>a]:text-text-dim [&>a]:hover:text-accent [&>a]:transition-colors [&>a]:duration-200">
              <Link href="#projects">Projects</Link>
              <Link href="#services">Services</Link>
              <Link href="#process">Process</Link>
              <Link href="#about">About</Link>
              <Link href="https://github.com/mdshakerullahS" target="_blank">
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/mdshakerullah"
                target="_blank"
              >
                LinkedIn
              </Link>
            </div>
            <div className="font-mono text-[0.72rem] text-text-dim">
              © {currentYear} Shakerullah — Built with Next.js & TypeScript
            </div>
          </div>
        </div>
      </footer>
    </Reveal>
  );
}
