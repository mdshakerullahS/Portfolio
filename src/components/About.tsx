import {
  User,
  Code2,
  ShieldCheck,
  Rocket,
  MonitorSmartphone,
  CheckCircle2,
} from "lucide-react";
import { FC } from "react";

// 1. Extracted Data for easier maintenance
const STATS = [
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Hours Worked", value: "500+" },
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

const About: FC = () => {
  return (
    <section
      id="about"
      className="pt-24 bg-linear-to-b from-black/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-6 gap-4 auto-rows-fr">
          {/* Main Info - Spans 2 columns */}
          <div className="glass col-span-6 lg:col-span-3 group rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300">
            <div className="w-fit p-3 rounded-xl bg-slate-900/50 border border-slate-800 mb-6 group-hover:scale-110 transition-transform">
              <User className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              👋 Hi, I'm <span className="text-blue-400">Shakerullah</span>
              <span className="block text-lg font-medium text-slate-400 mt-1">
                Full-Stack Web Developer
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              I build end-to-end web applications with modern frontend
              technologies and scalable backend systems. Passionate about clean
              UI, performance, and real-world problem solving.
            </p>
          </div>

          {/* Stats Card - Spans 2 columns */}
          <div className="glass col-span-6 md:col-span-3 rounded-3xl p-8 border border-white/5 flex flex-col lg:flex-row items-center justify-around">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-black text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* What I Do - List with Icons */}
          <div className="glass col-span-6 md:col-span-3 lg:col-span-2 rounded-3xl p-8 border border-white/5">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-500 rounded-full" />
              What I Do
            </h3>
            <ul className="space-y-4">
              {[
                "Full-stack web application development",
                "Secure authentication systems",
                "RESTful API design & implementation",
                "Responsive UI & database architecture",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Values Grid */}
          <div className="glass col-span-6 lg:col-span-4 rounded-3xl p-8 border border-white/5">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-500 rounded-full" />
              Core Values & Approach
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {CORE_VALUES.map((value, i) => (
                <div key={i} className="space-y-2 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      {value.icon}
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
