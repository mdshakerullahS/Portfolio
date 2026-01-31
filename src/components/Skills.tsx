import { SKILLS } from "@/constants";

export default function Skills() {
  return (
    <section id="stack" className="pt-24">
      <div className="container mx-auto px-6 space-y-12">
        <h3 className="text-2xl md:text-5xl text-center font-black italic">
          TECHNICAL <span className="text-blue-400">STACK</span>
        </h3>

        <div className="flex items-center justify-center flex-wrap gap-6">
          {SKILLS.map((skill) => (
            <div
              key={skill}
              className="glass px-8 py-4 rounded-2xl font-mono hover:border-blue-400 transition-all text-center"
            >
              <h4 className="font-bold text-lg">{skill}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
