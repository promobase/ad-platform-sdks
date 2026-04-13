import { ApiError } from "@promobase/sdk-runtime";

export class FacebookApiError extends ApiError {
  readonly code: number;
  readonly subcode: number | undefined;
  readonly type: string;
  readonly fbtrace_id: string;

  constructor(opts: {
    message: string;
    status: number;
    code: number;
    subcode?: number;
    type: string;
    fbtrace_id: string;
  }) {
    super(opts.message, opts.status);
    this.name = "FacebookApiError";
    this.code = opts.code;
    this.subcode = opts.subcode;
    this.type = opts.type;
    this.fbtrace_id = opts.fbtrace_id;
  }

  static fromResponse(status: number, body: unknown): FacebookApiError {
    if (
      typeof body === "object" &&
      body !== null &&
      "error" in body &&
      typeof (body as Record<string, unknown>).error === "object"
    ) {
      const err = (body as { error: Record<string, unknown> }).error;
      return new FacebookApiError({
        message: typeof err.message === "string" ? err.message : "Unknown Facebook API error",
        status,
        code: typeof err.code === "number" ? err.code : 0,
        subcode: typeof err.error_subcode === "number" ? err.error_subcode : undefined,
        type: typeof err.type === "string" ? err.type : "Unknown",
        fbtrace_id: typeof err.fbtrace_id === "string" ? err.fbtrace_id : "",
      });
    }
    return new FacebookApiError({
      message: "Unknown Facebook API error",
      status,
      code: 0,
      type: "Unknown",
      fbtrace_id: "",
    });
  }
}
