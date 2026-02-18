"use client";

import { SOCIAL_LINKS } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { ReactNode, RefObject, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";

interface ScrollItemProps {
  children: ReactNode;
  index: number;
  sectionRef: RefObject<HTMLElement | null>;
  className?: string;
}

function ScrollItem({
  children,
  index,
  sectionRef,
  className,
}: ScrollItemProps) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const start = index * 0.05;
  const midStart = start + 0.3;
  const midEnd = start + 0.55;
  const end = start + 0.8;

  const keyframe = [start, midStart, midEnd, end];

  const scale = useTransform(scrollYProgress, keyframe, [0.9, 1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, keyframe, [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, keyframe, [4, 0, 0, 4]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{
        y: 0,
        transition: {
          duration: 0.3,
          delay: (index + 1) * 0.2,
          ease: [0.21, 0.47, 0.32, 0.98],
        },
      }}
      style={{ scale, opacity, filter: useMotionTemplate`blur(${blur}px)` }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="pt-24 border-t border-white/5"
    >
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col md:flex-row gap-12 md:gap-4 lg:gap-40 items-center justify-center">
          <div>
            <ScrollItem index={0} sectionRef={sectionRef}>
              <motion.h2
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-5xl text-center md:text-left font-black italic mb-2 tracking-tighter leading-none"
              >
                LET'S <span className="md:block text-blue-400">CONNECT.</span>
              </motion.h2>
              <motion.p
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 text-lg mb-8"
              >
                Have a project in mind? Drop me a message.
              </motion.p>
            </ScrollItem>

            <div>
              <div className="flex flex-col gap-6">
                {SOCIAL_LINKS.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        delay: i * 0.2 + 0.2,
                        duration: 0.3,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      },
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      className="group flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-all duration-300"
                    >
                      <div className="p-3 rounded-xl glass transition-all">
                        <link.icon />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                          {link.label}
                        </span>
                        <span className="text-base md:text-lg font-light flex items-center gap-1">
                          {link.value}
                          <ArrowUpRight className="w-4 h-4 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="glass min-w-2/5 p-8 rounded-3xl"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
