"use client";

import { messageSchema } from "@/schemas/message.schema";
import { APIError, APISuccess } from "@/types/api.types";
import { MessageInput } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm: FC = () => {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          Full Name
        </label>
        <input
          type="text"
          placeholder="John Doe"
          {...registerWithClear("name")}
          className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-blue-400 transition-colors"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          Email Address
        </label>
        <input
          type="email"
          placeholder="john@company.com"
          {...registerWithClear("email")}
          className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-blue-400 transition-colors"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          Message
        </label>
        <textarea
          placeholder="Tell me about your project..."
          {...registerWithClear("message")}
          className="w-full bg-transparent border-b border-white/10 pb-4 outline-none focus:border-blue-400 transition-colors h-32"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
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
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
      {successMessage && (
        <p className="text-green-500 text-sm">{successMessage}</p>
      )}
    </form>
  );
};

export default ContactForm;
