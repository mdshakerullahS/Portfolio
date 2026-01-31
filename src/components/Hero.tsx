import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Animated Gradient Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full animate-pulse delay-700" />

      <div className="container mx-auto px-6 z-10 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md transition-colors hover:border-blue-500/50 group">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-slate-300 font-mono group-hover:text-white transition-colors">
            Available for new opportunities
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.85] text-white">
          BUILDING THE <br />
          <span className="bg-linear-to-r from-blue-400 via-white to-purple-500 bg-clip-text text-transparent italic">
            FUTURE WEB.
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Full-Stack Developer specializing in{" "}
          <span className="text-white">high-performance</span> end-to-end
          applications. I turn complex problems into{" "}
          <span className="text-blue-400 font-medium font-mono">
            &lt;elegant_solutions /&gt;
          </span>
          .
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="#projects"
            className="group relative flex items-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-400 transition-all duration-300 active:scale-95"
          >
            VIEW PROJECTS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Glass Social Buttons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                className="p-4 rounded-2xl glass hover:border hover:text-blue-400 transition-all group relative"
                aria-label={social.label}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {social.label}
                </div>
                <social.icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Tech Stack Scroll Indicator (Optional) */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col items-center">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">
            Expertise In
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Just labels or small icons for tech */}
            <span className="font-mono text-sm font-bold">NEXT.JS</span>
            <span className="font-mono text-sm font-bold">REACT</span>
            <span className="font-mono text-sm font-bold">NODE.JS</span>
            <span className="font-mono text-sm font-bold">TYPESCRIPT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
