import { ApiError } from "@openpromo/sdk-runtime";

/**
 * Error thrown for AT Protocol (Bluesky) failures.
 * XRPC errors return `{ "error": "Code", "message": "..." }` with a 4xx/5xx status.
 */
export class BlueskyApiError extends ApiError {
  readonly errorCode?: string;

  constructor(opts: { message: string; status: number; errorCode?: string }) {
    super(opts.message, opts.status);
    this.name = "BlueskyApiError";
    this.errorCode = opts.errorCode;
  }

  /** Whether this error indicates rate limiting. */
  get isRateLimited(): boolean {
    return this.status === 429;
  }

  /** Whether this is an authentication error (bad session or app password). */
  get isAuthError(): boolean {
    return (
      this.status === 401 || this.errorCode === "AuthMissing" || this.errorCode === "AuthInvalid"
    );
  }

  /** Whether this is a transient server error that could be retried. */
  get isTransient(): boolean {
    return this.status >= 500 || this.isRateLimited;
  }

  static fromResponse(status: number, body: unknown): BlueskyApiError {
    if (typeof body === "object" && body !== null) {
      const record = body as Record<string, unknown>;
      return new BlueskyApiError({
        message:
          (typeof record.message === "string" ? record.message : undefined) ??
          `Bluesky API error (${status})`,
        status,
        errorCode: typeof record.error === "string" ? record.error : undefined,
      });
    }
    return new BlueskyApiError({ message: `Bluesky API error (${status})`, status });
  }
}
