"use client";

import { SOCIAL_LINKS } from "@/constants";
import { motion } from "motion/react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black pb-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
      >
        {/* Identity & Mission */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-white font-bold text-lg tracking-tight">
            Md Shakerullah Sourov
          </p>
          <p className="text-blue-400 text-sm font-medium">
            Full-Stack Web Developer
          </p>
        </div>

        {/* Availability & Socials */}
        <div className="flex flex-col items-center md:items-end gap-4">
          {/* Status CTA */}
          <div className="flex items-center gap-2 px-3 py-1 bg-blue-400/10 border border-emerald-500/20 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
              Available for new opportunities
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                className="text-slate-400 hover:text-white text-sm font-mono transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 flex justify-center">
        <p className="text-slate-600 text-[11px] font-mono tracking-wider">
          &copy; {currentYear} — BUILT WITH NEXT.JS & TYPESCRIPT
        </p>
      </div>
    </footer>
  );
}
