"use client";

import {
  User,
  Code2,
  ShieldCheck,
  Rocket,
  MonitorSmartphone,
  CheckCircle2,
} from "lucide-react";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  Variants,
} from "motion/react";
import { ReactNode, RefObject, useEffect, useRef, useState } from "react";

interface ScrollCardProps {
  children: ReactNode;
  index: number;
  sectionRef: RefObject<HTMLElement | null>;
  className?: string;
}

const STATS = [
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Hours Worked", value: "2000+" },
];

const CORE_VALUES = [
  {
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
    title: "Clean Code",
    desc: "Writing maintainable, readable, and scalable code.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    title: "Security First",
    desc: "Implementing secure auth and data protection.",
  },
  {
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    title: "Performance",
    desc: "Optimizing for speed, SEO, and UX.",
  },
  {
    icon: <MonitorSmartphone className="w-5 h-5 text-orange-400" />,
    title: "Responsive",
    desc: "Flawless experience across all device sizes.",
  },
];

function ScrollCard({
  children,
  index,
  sectionRef,
  className,
}: ScrollCardProps) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const groupIndex = Math.floor(index / (isMobile ? 1 : 2));
  const start = groupIndex * (isMobile ? 0.15 : 0.25);
  const midStart = start + (isMobile ? 0.1 : 0.2);
  const midEnd = start + (isMobile ? 0.25 : 0.5);
  const end = start + (isMobile ? 0.5 : 0.75);
  const keyframe = [start, midStart, midEnd, end];

  const opacity = useTransform(scrollYProgress, keyframe, [0, 1, 1, 0]);
  const xOffset = isMobile ? 200 : 600;
  const xStart = (index + 1) % 2 === 0 ? xOffset : -xOffset;
  const x = useTransform(scrollYProgress, keyframe, [xStart, 0, 0, xStart]);
  const blur = useTransform(scrollYProgress, keyframe, [4, 0, 0, 4]);

  return (
    <motion.div
      style={{ opacity, x, filter: useMotionTemplate`blur(${blur}px)` }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="pt-24 bg-linear-to-b from-black/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-6 gap-4 auto-rows-fr">
          {/* Main Info */}
          <ScrollCard
            index={0}
            sectionRef={sectionRef}
            className="glass col-span-6 lg:col-span-3 group rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all"
          >
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              whileHover={{ y: -6 }}
            >
              <motion.div
                variants={item}
                whileHover={{
                  rotate: 6,
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="w-fit p-3 rounded-xl bg-slate-900/50 border border-slate-800 mb-6"
              >
                <User className="w-8 h-8 text-blue-400" />
              </motion.div>
              <motion.div
                variants={item}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <h2 className="text-lg md:text-2xl font-bold text-white">
                  👋 Hi, I'm <span className="text-blue-400">Shakerullah</span>
                </h2>
                <p className="block text-lg font-medium text-slate-400 mt-1">
                  Full-Stack Web Developer
                </p>
              </motion.div>
              <motion.p
                variants={item}
                transition={{ delay: 0.4 }}
                className="text-slate-400 leading-relaxed text-lg"
              >
                I build end-to-end web applications with modern frontend
                technologies and scalable backend systems. Passionate about
                clean UI, performance, and real-world problem solving.
              </motion.p>
            </motion.div>
          </ScrollCard>

          {/* Stats */}
          <ScrollCard
            index={1}
            sectionRef={sectionRef}
            className="glass col-span-6 md:col-span-3 rounded-3xl p-8 border border-white/5 flex flex-col lg:flex-row items-center justify-around"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.2 },
                }}
                whileHover={{ scale: 1.08 }}
                className="text-center"
              >
                <motion.p className="text-4xl lg:text-5xl font-black text-white mb-2">
                  {stat.value}
                </motion.p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </ScrollCard>

          {/* What I Do */}
          <ScrollCard
            index={2}
            sectionRef={sectionRef}
            className="glass col-span-6 md:col-span-3 lg:col-span-2 rounded-3xl p-8 border border-white/5"
          >
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-500 rounded-full" /> What I Do
            </h3>
            <ul className="space-y-4">
              {[
                "Full-stack web application development",
                "Secure authentication systems",
                "RESTful API design & implementation",
                "Responsive UI & database architecture",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.2 },
                  }}
                  className="flex items-start gap-3 text-slate-400"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </ScrollCard>

          {/* Core Values */}
          <ScrollCard
            index={3}
            sectionRef={sectionRef}
            className="glass col-span-6 lg:col-span-4 rounded-3xl p-8 border border-white/5"
          >
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-500 rounded-full" /> Core Values &
              Approach
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {CORE_VALUES.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.2 },
                  }}
                  whileHover={{ y: -4 }}
                  className="space-y-2 group"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors"
                    >
                      {value.icon}
                    </motion.div>
                    <h4 className="text-sm font-bold text-white">
                      {value.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollCard>
        </div>
      </div>
    </section>
  );
}
