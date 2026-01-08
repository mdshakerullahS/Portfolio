import { email, object, string } from "zod";

export const messageSchema = object({
  name: string()
    .trim()
    .min(1, "Name is required")
    .max(50, "Name must be no more than 50 characters"),
  email: email("Invalid email address"),
  message: string().trim().min(1, "Message is required"),
});
