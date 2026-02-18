"use client";

import { messageSchema } from "@/schemas/message.schema";
import { APIError, APISuccess } from "@/types/api.types";
import { MessageInput } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { ReactNode, RefObject, useRef, useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";

interface ScrollItemProps {
  children: ReactNode;
  index: number;
  sectionRef: RefObject<HTMLFormElement | null>;
  className?: string;
}

function showError(field: FieldError) {
  return <p className="text-red-500 text-sm">{field.message}</p>;
}

function ScrollItem({
  children,
  index,
  sectionRef,
  className,
}: ScrollItemProps) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const start = index * 0.05;
  const midStart = start + 0.3;
  const midEnd = start + 0.55;
  const end = start + 0.8;

  const keyframe = [start, midStart, midEnd, end];

  const scale = useTransform(scrollYProgress, keyframe, [0.9, 1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, keyframe, [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, keyframe, [4, 0, 0, 4]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{
        y: 0,
        transition: {
          duration: 0.3,
          delay: (index + 1) * 0.2,
          ease: [0.21, 0.47, 0.32, 0.98],
        },
      }}
      style={{ scale, opacity, filter: useMotionTemplate`blur(${blur}px)` }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactForm() {
  const sectionRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<MessageInput>({
    resolver: zodResolver(messageSchema),
    mode: "onChange",
  });

  const registerWithClear = (name: keyof MessageInput) =>
    register(name, {
      onChange: () => {
        setErrorMessage(null);
        setSuccessMessage(null);
      },
    });

  const onSubmit = async (data: MessageInput) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result: APISuccess | APIError = await res.json();

    if (!result.success) {
      setErrorMessage(result.message || "Something went wrong");
      return;
    }

    setSuccessMessage(result.message);
    reset();
  };

  return (
    <form
      ref={sectionRef}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      <ScrollItem index={0} sectionRef={sectionRef} className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          {...registerWithClear("name")}
          className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-blue-400 transition-colors"
        />
        {errors.name && showError(errors.name)}
      </ScrollItem>

      <ScrollItem index={1} sectionRef={sectionRef} className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          Email Address
        </label>
        <input
          type="email"
          placeholder="john@company.com"
          {...registerWithClear("email")}
          className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-blue-400 transition-colors"
        />
        {errors.email && showError(errors.email)}
      </ScrollItem>
      <ScrollItem index={2} sectionRef={sectionRef} className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          Message
        </label>
        <textarea
          placeholder="Tell me about your project..."
          {...registerWithClear("message")}
          className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-blue-400 transition-colors h-32"
        />
        {errors.message && showError(errors.message)}
      </ScrollItem>
      <ScrollItem index={3} sectionRef={sectionRef} className="space-y-2">
        <button
          disabled={!isValid || isSubmitting}
          className="w-full flex items-center justify-center py-5 bg-white disabled:bg-slate-400 text-black disabled:text-slate-900 font-bold rounded-2xl hover:bg-blue-400 transition-all cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            "SEND TRANSMISSION"
          )}
        </button>
      </ScrollItem>

      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      {successMessage && (
        <p className="text-green-500 text-sm">{successMessage}</p>
      )}
    </form>
  );
}
