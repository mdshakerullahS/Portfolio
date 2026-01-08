import { treeifyError } from "zod";

export interface APISuccess {
  success: true;
  message: string;
}

export interface APIError {
  success: false;
  message: string;
  errors?: ReturnType<typeof treeifyError>;
}
