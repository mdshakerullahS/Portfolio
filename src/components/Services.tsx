"use client";

import { motion } from "motion/react";
import {
  Cpu,
  Zap,
  ShoppingCart,
  Database,
  TrendingUp,
  ArrowRight,
  Server,
} from "lucide-react";

const SERVICES = [
  {
    title: "Full-Stack Development",
    description:
      "Turning complex ideas into polished digital products. I build fast, responsive, and type-safe applications from the ground up.",
    icon: <Cpu className="w-6 h-6" />,
    features: [
      "Next.js Architecture",
      "Custom API Logic",
      "Scalable State Management",
    ],
    color: "group-hover:text-blue-400",
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Stop worrying about downtime. I setup robust Docker environments and CI/CD pipelines to keep your app running 24/7.",
    icon: <Server className="w-6 h-6" />,
    features: ["Docker & VPS", "GitHub Actions", "Automated Backups"],
    color: "group-hover:text-emerald-400",
  },
  {
    title: "Database Architecture",
    description:
      "Data is the heart of your business. I architect high-performance PostgreSQL schemas designed for speed and integrity.",
    icon: <Database className="w-6 h-6" />,
    features: ["Relational Design", "Prisma ORM", "Query Optimization"],
    color: "group-hover:text-cyan-400",
  },
  {
    title: "E-commerce Engines",
    description:
      "Built to sell. Secure checkout flows, real-time cart logic, and custom payment integrations that don't break.",
    icon: <ShoppingCart className="w-6 h-6" />,
    features: ["Stripe/Auth Integration", "Inventory Sync", "Secure Checkout"],
    color: "group-hover:text-purple-400",
  },
  {
    title: "Performance Engineering",
    description:
      "Speed is a feature. I optimize Core Web Vitals to ensure your site feels instant and ranks higher on Google.",
    icon: <Zap className="w-6 h-6" />,
    features: ["Sub-second Loading", "Image Optimization", "Edge Caching"],
    color: "group-hover:text-yellow-400",
  },
  {
    title: "Conversion-Led Design",
    description:
      "Websites that work for you. I build high-intent landing pages designed to turn visitors into paying customers.",
    icon: <TrendingUp className="w-6 h-6" />,
    features: ["Service-Industry Focus", "Lead-Gen Forms", "Analytics Setup"],
    color: "group-hover:text-orange-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
            Solutions That <span className="text-blue-500 italic">Scale.</span>
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
                className={`mb-6 text-slate-500 transition-all duration-300 transform group-hover:scale-110 ${service.color}`}
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-[90%]">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-[10px] font-mono tracking-widest px-2 py-1 rounded border bg-transparent border-white/5 text-slate-500"
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
            <p className="text-slate-500 text-sm italic">
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
