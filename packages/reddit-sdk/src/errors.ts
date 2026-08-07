import { ApiError } from "@mosaic/sdk-runtime";

/**
 * Error thrown for Reddit Ads API failures.
 * Carries the HTTP status and the provider's error code/message when present.
 */
export class RedditApiError extends ApiError {
  readonly errorCode?: string;

  constructor(opts: { message: string; status: number; errorCode?: string }) {
    super(opts.message, opts.status);
    this.name = "RedditApiError";
    this.errorCode = opts.errorCode;
  }

  /** Whether this error indicates rate limiting. */
  get isRateLimited(): boolean {
    return this.status === 429;
  }

  /** Whether this is an authentication/token error. */
  get isAuthError(): boolean {
    return this.status === 401 || this.status === 403;
  }

  /** Whether this is a transient server error that could be retried. */
  get isTransient(): boolean {
    return this.status >= 500 || this.isRateLimited;
  }

  static fromResponse(status: number, body: unknown): RedditApiError {
    if (typeof body === "object" && body !== null) {
      const record = body as Record<string, unknown>;
      // Reddit Ads API: { "error": { "code": "...", "message": "..." } }
      const error = record.error;
      if (typeof error === "object" && error !== null) {
        const err = error as Record<string, unknown>;
        return new RedditApiError({
          message:
            typeof err.message === "string" ? err.message : `Reddit Ads API error (${status})`,
          status,
          errorCode:
            typeof err.code === "string"
              ? err.code
              : typeof err.code === "number"
                ? String(err.code)
                : undefined,
        });
      }
      return new RedditApiError({
        message:
          (typeof record.message === "string" ? record.message : undefined) ??
          (typeof record.error === "string" ? record.error : undefined) ??
          `Reddit Ads API error (${status})`,
        status,
        errorCode: typeof record.error === "string" ? record.error : undefined,
      });
    }
    return new RedditApiError({ message: `Reddit Ads API error (${status})`, status });
  }
}
