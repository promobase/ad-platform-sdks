import { ApiError } from "@promobase/sdk-runtime";

export class TikTokApiError extends ApiError {
  readonly code: number;
  readonly requestId: string;

  constructor(opts: { message: string; status: number; code: number; requestId: string }) {
    super(opts.message, opts.status);
    this.name = "TikTokApiError";
    this.code = opts.code;
    this.requestId = opts.requestId;
  }

  static fromResponse(status: number, body: unknown): TikTokApiError {
    if (typeof body === "object" && body !== null) {
      const b = body as Record<string, unknown>;
      return new TikTokApiError({
        message: typeof b.message === "string" ? b.message : "Unknown TikTok API error",
        status,
        code: typeof b.code === "number" ? b.code : 0,
        requestId: typeof b.request_id === "string" ? b.request_id : "",
      });
    }
    return new TikTokApiError({ message: "Unknown TikTok API error", status, code: 0, requestId: "" });
  }
}
