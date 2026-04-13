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

  /** Whether this error indicates rate limiting. */
  get isRateLimited(): boolean {
    return this.status === 429 || this.code === 40100;
  }

  /** Whether this error is a transient server error that could be retried. */
  get isTransient(): boolean {
    return this.status >= 500 || this.isRateLimited;
  }

  /** Whether this is an authentication/token error. */
  get isAuthError(): boolean {
    return this.code === 40001 || this.code === 40002 || this.code === 40003;
  }

  /** Whether this is a publish rate limit (6/min or 15/day). */
  get isPublishRateLimited(): boolean {
    return this.code === 40004;
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
    return new TikTokApiError({
      message: "Unknown TikTok API error",
      status,
      code: 0,
      requestId: "",
    });
  }
}
