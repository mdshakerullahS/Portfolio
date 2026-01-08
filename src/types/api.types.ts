export interface APISuccess {
  success: true;
  message: string;
}

export interface APIError {
  success: false;
  message: string;
  errors?: {
    errors: string[];
    properties?:
      | {
          name?: { errors: string[] } | undefined;
          email?: { errors: string[] } | undefined;
          message?: { errors: string[] } | undefined;
        }
      | undefined;
  };
}
