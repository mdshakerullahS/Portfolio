"use client";

import { messageSchema } from "@/schemas/message.schema";
import { APIError, APISuccess } from "@/types/api.types";
import { MessageInput } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMsg, setServerMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<MessageInput>({
    resolver: zodResolver(messageSchema),
    mode: "onTouched", // Validates as user leaves field for better UX
  });

  const onSubmit = async (data: MessageInput) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: APISuccess | APIError = await res.json();

      if (!res.ok || !result.success) {
        setStatus("error");
        setServerMsg(
          result.message || "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      setServerMsg("Message received! I'll get back to you within 24 hours.");
      reset();
    } catch {
      setStatus("error");
      setServerMsg("Network error. Please check your connection.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Input Group: Name */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g. Alex Rivera"
          {...register("name")}
          className={`w-full bg-white/3 border-b ${errors.name ? "border-red-500" : "border-white/10"} p-4 rounded-t-xl outline-none focus:bg-white/6 focus:border-blue-500 transition-all placeholder:text-slate-600 text-white`}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.name.message}
          </p>
        )}
      </div>

      {/* Input Group: Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="name@company.com"
          {...register("email")}
          className={`w-full bg-white/3 border-b ${errors.email ? "border-red-500" : "border-white/10"} p-4 rounded-t-xl outline-none focus:bg-white/6 focus:border-blue-500 transition-all placeholder:text-slate-600 text-white`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.email.message}
          </p>
        )}
      </div>

      {/* Input Group: Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1"
        >
          Project Details
        </label>
        <textarea
          id="message"
          placeholder="Briefly describe your goals, timeline, and tech stack..."
          {...register("message")}
          className={`w-full bg-white/3 border-b ${errors.message ? "border-red-500" : "border-white/10"} p-4 rounded-t-xl outline-none focus:bg-white/6 focus:border-blue-500 transition-all h-32 resize-none placeholder:text-slate-600 text-white`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Area */}
      <div className="pt-4 space-y-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full flex items-center justify-center gap-3 py-4 bg-white hover:bg-blue-500 disabled:bg-slate-700 text-black hover:text-white font-bold rounded-xl transition-all duration-300 transform active:scale-[0.98]"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              <span>SEND MESSAGE</span>
              <Send
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </>
          )}
        </button>

        {/* Trust Microcopy */}
        <p className="text-center text-[10px] text-slate-500 font-medium tracking-wide">
          NO SPAM. JUST A DIRECT LINE TO MY INBOX.
        </p>

        {/* Feedback Messages */}
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-3"
            >
              <CheckCircle2 size={18} />
              {serverMsg}
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3"
            >
              <AlertCircle size={18} />
              {serverMsg}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
