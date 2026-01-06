import { FC } from "react";
import { ArrowRight, Github, Linkedin, Terminal } from "lucide-react";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00f2ff]/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#bc13fe]/20 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse"></span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#00f2ff] font-mono">
            Available for new opportunities
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9]">
          <span className="block text-white">BUILDING THE</span>
          <span className="block bg-linear-to-r from-[#00f2ff] via-white to-[#bc13fe] bg-clip-text text-transparent italic">
            FUTURE WEB.
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Full Stack Web developer, building end-to-end web applications with
          modern frontend technologies and scalable backend systems. Passionate
          about clean UI, performance, and real-world problem solving.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-[#00f2ff] transition-all"
          >
            VIEW PROJECTS
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/mdshakerullahS"
              target="_blank"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f2ff]/50 transition-all text-white"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/mdshakerullah"
              target="_blank"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#bc13fe]/50 transition-all text-white"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="#terminal"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/50 transition-all text-white"
            >
              <Terminal size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
