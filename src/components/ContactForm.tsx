"use client";

import { FC, FormEvent } from "react";

const ContactForm: FC = () => {
  return (
    <form onSubmit={(e: FormEvent) => e.preventDefault()} className="space-y-8">
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
  );
};

export default ContactForm;
