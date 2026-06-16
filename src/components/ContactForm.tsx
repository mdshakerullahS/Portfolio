"use client";

import { messageSchema, PROJECT_TYPES } from "@/schemas/message.schema";
import { APIError, APISuccess } from "@/types/api.types";
import { MessageInput } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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
    mode: "onTouched",
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

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => {
      setStatus("idle");
      setServerMsg(null);
    }, 10000);

    return () => clearTimeout(timer);
  }, [status]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full flex flex-col justify-center gap-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FormGroup label="Your Name">
          <input
            type="text"
            {...register("name")}
            className="bg-surface border border-border focus:border-accent shadow-[0_0_0_3px_rgba(232,255,71,0.06)] rounded-md py-3 px-4 font-body text-[0.9rem] text-text outline-none placeholder:text-text-dim w-full transition-[border-color,box-shadow] duration-200"
            placeholder="Jane Smith"
          />
          {errors.name && (
            <p className="text-red text-xs mt-1 flex items-center gap-1">
              {errors.name.message}
            </p>
          )}
        </FormGroup>
        <FormGroup label="Email">
          <input
            type="email"
            {...register("email")}
            className="bg-surface border border-border focus:border-accent shadow-[0_0_0_3px_rgba(232,255,71,0.06)] rounded-md py-3 px-4 font-body text-[0.9rem] text-text outline-none placeholder:text-text-dim w-full transition-[border-color,box-shadow] duration-200"
            placeholder="jane@startup.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              {errors.email.message}
            </p>
          )}
        </FormGroup>
      </div>
      <FormGroup label="Project Type (Optional)">
        <select
          {...register("projectType", {
            setValueAs: (v) => (v === "" ? undefined : v),
          })}
          className="bg-surface border border-border focus:border-accent shadow-[0_0_0_3px_rgba(232,255,71,0.06)] rounded-md py-3 px-4 font-body text-[0.9rem] text-text outline-none placeholder:text-text-dim w-full transition-[border-color,box-shadow] duration-200 cursor-pointer"
        >
          <option value="">What are you building?</option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </FormGroup>
      <FormGroup label="Tell me about your project">
        <textarea
          {...register("message")}
          className="bg-surface border border-border focus:border-accent shadow-[0_0_0_3px_rgba(232,255,71,0.06)] rounded-md py-3 px-4 font-body text-[0.9rem] text-text outline-none placeholder:text-text-dim w-full resize-y min-h-32.5 leading-[1.6] transition-[border-color,box-shadow] duration-200 cursor-pointer"
          placeholder="Describe what you need — the problem you're solving, rough scope, timeline if you have one. The more context, the better my response."
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
            {errors.message.message}
          </p>
        )}
      </FormGroup>

      <p className="font-mono text-[0.72rem] mt-1.5 text-text-dim">
        Typically reply within 24 hours with scope + timeline estimate. No spam,
        ever.
      </p>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-accent hover:bg-accent-hover text-black border-none py-3.5 px-7 rounded-md font-mono text-[0.85rem] font-medium cursor-pointer tracking-[0.02em] w-full hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,255,71,0.2)] transition-[background,transform,box-shadow] duration-200"
      >
        {isSubmitting ? (
          <span>
            <Loader size="12px" className="animate-spin inline mx-1" />
            Loading...
          </span>
        ) : (
          <span>
            Send Message <ArrowRight size="12px" className="inline mx-1" />
          </span>
        )}
      </button>

      {status !== "idle" && (
        <div
          className={`p-4 rounded-xl border ${status === "success" ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : "bg-red/20 border-red text-red-400"} text-sm flex items-center gap-3`}
        >
          {serverMsg}
        </div>
      )}
    </form>
  );
}

function FormGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-text-dim">
        {label}
      </label>
      {children}
    </div>
  );
}
