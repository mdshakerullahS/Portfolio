import { messageSchema } from "@/schemas/message.schema";
import { NextResponse } from "next/server";
import { MessageInput } from "@/types/types";
import { treeifyError } from "zod";
import { APIError, APISuccess } from "@/types/api.types";
import { sendMail } from "@/services/email.service";

export async function POST(
  req: Request,
): Promise<NextResponse<APISuccess | APIError>> {
  let body: MessageInput;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const result = messageSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Validation failed",
        errors: treeifyError(result.error),
      },
      { status: 400 },
    );
  }

  await sendMail(result.data);

  return NextResponse.json(
    { success: true, message: "Message sent successfully" },
    { status: 201 },
  );
}
