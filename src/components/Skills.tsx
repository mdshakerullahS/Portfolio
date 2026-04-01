"use client";

import { INFRA_SKILLS, SKILL_GROUPS } from "@/constants";
import { Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
            How I Build{" "}
            <span className="text-blue-500 italic">Applications.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl font-medium">
            I use these tools to build full-stack applications with clean
            architecture, reliable APIs, and scalable backend systems.
          </p>
        </div>

        {/* Main Category Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/2 border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                  <group.icon.name
                    className={`w-5 h-5 text-${group.icon.color}-400`}
                  />
                </div>
                <h3 className="text-white font-bold tracking-tight">
                  {group.title}
                </h3>
              </div>

              <div className="space-y-6">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="group/item">
                    <h4 className="text-sm font-bold text-slate-200 mb-1 group-hover/item:text-blue-400 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      {skill.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flat Bottom Bar: DevOps & Workflow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-linear-to-r from-blue-500/5 via-transparent to-transparent border border-white/5"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3 shrink-0">
              <Zap className="w-5 h-5 text-blue-500" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                Deployment Workflow
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {INFRA_SKILLS.map((infra) => (
                <div
                  key={infra.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-slate-300 hover:border-blue-500/30 transition-all"
                >
                  <span className="text-slate-500">
                    <infra.icon className="w-4 h-4" />
                  </span>
                  {infra.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
