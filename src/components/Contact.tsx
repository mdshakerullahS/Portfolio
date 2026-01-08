"use client";

import { SOCIAL_LINKS } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FC, FormEvent } from "react";

const Contact: FC = () => {
  return (
    <section id="contact" className="pt-24 border-t border-white/5">
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col md:flex-row gap-12 md:gap-40 items-center justify-center">
          <div>
            <h2 className="text-2xl md:text-5xl text-center md:text-left font-black italic mb-12 tracking-tighter leading-none">
              LET'S <span className="md:block text-blue-400">CONNECT.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Have a project in mind? Drop me a message.
            </p>

            <div>
              <div className="flex flex-col gap-6">
                {SOCIAL_LINKS.map((link, i) => (
                  <Link
                    key={i}
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
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="glass min-w-2/5 p-8 rounded-3xl">
            <form
              onSubmit={(e: FormEvent) => e.preventDefault()}
              className="space-y-8"
            >
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-blue-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-blue-400 transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                  Message
                </label>
                <textarea
                  className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-blue-400 transition-colors h-32"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-blue-400 transition-all">
                SEND TRANSMISSION
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
