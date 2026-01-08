import { MessageInput } from "@/types/types";
import nodemailer from "nodemailer";

export const sendMail = async ({
  name,
  email,
  message,
}: MessageInput): Promise<void> => {
  const maiTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await maiTransporter.sendMail({
    to: process.env.EMAIL_USER,
    subject: `New message from ${name.split(" ")[0]}`,
    html: `<h3>${name}</h3><a href="mailto:${email}">${email}</a><br><p>${message}</p>`,
  });
};
