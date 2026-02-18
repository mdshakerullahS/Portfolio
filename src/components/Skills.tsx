"use client";

import { SKILLS } from "@/constants";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";

interface MarqueeRowProps {
  sectionRef: RefObject<HTMLElement | null>;
  index: number;
  x: string[];
}

interface ScrollItemProps {
  children: ReactNode;
  index: number;
  sectionRef: RefObject<HTMLElement | null>;
  className?: string;
}

function MarqueeRow({ sectionRef, index, x }: MarqueeRowProps) {
  return (
    <ScrollItem
      index={index + 1}
      sectionRef={sectionRef}
      className="flex overflow-hidden"
    >
      <motion.div
        animate={{ x }}
        transition={{ ease: "linear", duration: 72, repeat: Infinity }}
        className="flex flex-nowrap gap-4 md:gap-6 pr-4 md:pr-6"
      >
        {[...SKILLS, ...SKILLS].map((skill, i) => (
          <div
            key={i}
            className="glass px-4 md:px-8 py-2 md:py-4 rounded-xl md:rounded-2xl font-mono hover:border-blue-400 transition-all text-center"
          >
            <h4 className="font-bold text-sm md:text-lg whitespace-nowrap">
              {skill}
            </h4>
          </div>
        ))}
      </motion.div>
    </ScrollItem>
  );
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

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  const [isSmall, setIsSmall] = useState<boolean>(false);
  const [isMedium, setIsMedium] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmall(window.innerWidth <= 576);
      setIsMedium(window.innerWidth > 576 && window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const marqueeRows = isSmall ? 4 : isMedium ? 3 : 2;

  return (
    <section id="stack" ref={sectionRef} className="pt-24">
      <div className="container mx-auto px-6 space-y-12">
        <ScrollItem index={0} sectionRef={sectionRef}>
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-5xl text-center font-black italic"
          >
            TECHNICAL <span className="text-blue-400">STACK</span>
          </motion.h2>
        </ScrollItem>

        <div className="flex flex-col gap-4 md:gap-6 mask-[linear-gradient(to_right,transparent,#0a0a0a_15%,#0a0a0a_85%,transparent)]">
          {Array.from({ length: marqueeRows }).map((_, i) => {
            function getX() {
              if (isSmall) {
                return i == 0
                  ? ["0%", "-25%"]
                  : i === 1
                    ? ["-50%", "-25%"]
                    : i === 2
                      ? ["-25%", "-50%"]
                      : ["-75%", "0%"];
              } else if (isMedium) {
                return i === 0
                  ? ["0%", "-33.33%"]
                  : i === 1
                    ? ["-66.66%", "-33.33%"]
                    : ["-33.33%%", "-66.66%"];
              } else {
                return i === 0 ? ["0%", "-50%"] : ["-50%", "0%"];
              }
            }

            const x = getX();

            return (
              <MarqueeRow key={i} sectionRef={sectionRef} index={i} x={x} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
