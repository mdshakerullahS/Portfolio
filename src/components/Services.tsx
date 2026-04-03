"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/constants";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
            Solutions That <span className="text-blue-500 italic"> Scale.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium leading-tight">
            I build systems designed to perform, endure, and convert. No
            fluff—just production-ready engineering.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col"
            >
              <div
                className={`mb-6 text-gray-400 transition-all duration-300 transform group-hover:scale-110 ${service.color}`}
              >
                <service.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-[90%]">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-[10px] font-mono tracking-widest px-2 py-1 rounded border bg-transparent border-white/5 text-gray-400"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-1">
            <h4 className="text-white font-bold text-xl">
              Have a project in mind?
            </h4>
            <p className="text-gray-400 text-sm italic">
              Let&apos;s build something that scales and survives the real
              world.
            </p>
          </div>

          <a
            href="#contact"
            className="group flex items-center gap-3 px-10 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
          >
            START THE CONVERSATION
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
