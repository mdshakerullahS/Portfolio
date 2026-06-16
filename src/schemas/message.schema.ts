import { z } from "zod";

export const PROJECT_TYPES = [
  "SaaS MVP",
  "E-Commerce Platform",
  "Booking / Service App",
  "Admin Dashboard",
  "API / Backend System",
  "Something else",
] as const;

export const messageSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(50, "Name must be no more than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z
    .enum(PROJECT_TYPES, {
      message: "Please select a valid project type from the list",
    })
    .optional(),
  message: z.string().trim().min(1, "Message is required"),
});
