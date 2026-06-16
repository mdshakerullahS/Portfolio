"use client";

import Link from "next/link";
import ContactForm from "./ContactForm";
import { CONTACT_ITEMS } from "@/constants";
import { motion } from "motion/react";
import {
  Reveal,
  StaggerReveal,
  fadeUp,
  fadeLeft,
  fadeRight,
} from "./AnimationUtils";
import { Calendar } from "lucide-react";

const MotionLink = motion.create(Link);

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrapper">
        <Reveal>
          <div className="section-label">Contact</div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-15 items-start">
          {/* Left col */}
          <Reveal variants={fadeLeft}>
            <h2 className="font-display text-[2.2rem] font-bold tracking-[-0.03em] mb-4 leading-[1.15]">
              Let&apos;s build
              <br />
              something <span className="text-accent">real.</span>
            </h2>
            <p className="text-[0.95rem] leading-[1.7] mb-9 font-light text-text-muted">
              Tell me what you&apos;re building — I&apos;ll reply within 24
              hours with a rough scope and honest timeline. No sales pitch, just
              a direct conversation.
            </p>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
            >
              <Link
                href="https://cal.com/mdshakerullah/discovery"
                target="_blank"
                className="flex items-center justify-center gap-2.5 py-3.5 px-6 border border-accent rounded-lg bg-accent-dim hover:bg-accent text-accent hover:text-black font-mono text-[0.85rem] font-medium tracking-[0.02em] mb-2 transition-[background,color] duration-200"
              >
                <Calendar size="13.6px" />
                Book a free 15-min call
              </Link>
            </motion.div>

            <div className="w-full flex items-center justify-center gap-3 mb-2">
              <span className="flex-1 h-0.5 bg-accent-dim" />
              <span className="font-mono text-[0.72rem] tracking-[0.06em] white-space-nowrap text-text-dim">
                or send a message
              </span>
              <span className="flex-1 h-0.5 bg-accent-dim" />
            </div>

            <StaggerReveal
              className="flex flex-col gap-3.5"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {CONTACT_ITEMS.map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <MotionLink
                    href={item.link}
                    target="_blank"
                    className="flex items-center gap-3.5 py-3.5 px-4.5 border border-border rounded-lg bg-surface transition-[border-color] duration-200 hover:border-text-dim"
                    whileHover={{
                      y: -6,
                      borderColor: "rgba(232,255,71,0.2)",
                      boxShadow:
                        "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,255,71,0.07)",
                      transition: { duration: 0.25, ease: "easeOut" },
                    }}
                  >
                    <motion.div
                      className="w-9 h-9 bg-accent-dim rounded-md flex items-center justify-center text-[1rem] shrink-0"
                      whileHover={{ scale: 1.15, rotate: -6 }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 15,
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <div className="font-mono text-[0.7rem] uppercase tracking-[0.06em] text-text-dim">
                        {item.label}
                      </div>
                      <div className="text-[0.9rem] mt-0.5 text-text-muted">
                        {item.value}
                      </div>
                    </div>
                  </MotionLink>
                </motion.div>
              ))}
            </StaggerReveal>
          </Reveal>

          {/* Right col – form */}
          <Reveal variants={fadeRight} className="h-full">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
