"use client";

import { SOCIAL_LINKS } from "@/constants";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { useRef } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 border-t border-white/5 bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start justify-between">
          {/* Left Side: Positioning & Info */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-12 flex flex-col gap-4">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                  Have an idea? Let&apos;s build something{" "}
                  <span className="text-blue-500 italic">real.</span>
                </h2>

                {/* Positioning Line */}
                <p className="text-gray-400 text-lg max-w-80 md:max-w-xl font-medium">
                  Available for freelance projects and full-stack roles.
                </p>

                {/* Reply Expectation */}
                <div className="flex items-center gap-2 text-white max-w-xl font-medium">
                  <Clock className="w-4 h-4 text-blue-500/50" />
                  <span>Typically respond within 24 hours</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {SOCIAL_LINKS.map((link, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      aria-label={`${link.label} profile`}
                      target="_blank"
                      className="group flex items-center justify-between p-5 rounded-2xl transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-500/50 bg-white/2 border border-white/5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg text-gray-400 group-hover:text-blue-400 transition-all duration-300">
                          <link.icon />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                            {link.label}
                          </span>
                          <span className="text-sm md:text-lg font-medium text-slate-300 group-hover:text-white transition-all duration-300">
                            {link.value}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-all duration-300 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:max-w-125 relative"
          >
            {/* Subtle glow behind form */}
            <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />

            <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 relative z-10">
              <h3 className="text-xl font-bold text-white mb-8">
                Send a Brief
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
