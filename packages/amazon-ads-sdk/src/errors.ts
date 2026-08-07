import { ApiError } from "@mosaic/sdk-runtime";

/**
 * Error thrown for Amazon Ads API failures.
 * Amazon returns `{ "code": "...", "details": "..." }` style error bodies.
 */
export class AmazonAdsApiError extends ApiError {
  readonly errorCode?: string;

  constructor(opts: { message: string; status: number; errorCode?: string }) {
    super(opts.message, opts.status);
    this.name = "AmazonAdsApiError";
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

  static fromResponse(status: number, body: unknown): AmazonAdsApiError {
    if (typeof body === "object" && body !== null) {
      const record = body as Record<string, unknown>;
      // ValidationException style: { code, details }
      if (typeof record.code === "string" && typeof record.details === "string") {
        return new AmazonAdsApiError({
          message: record.details,
          status,
          errorCode: record.code,
        });
      }
      return new AmazonAdsApiError({
        message:
          (typeof record.details === "string" ? record.details : undefined) ??
          (typeof record.message === "string" ? record.message : undefined) ??
          `Amazon Ads API error (${status})`,
        status,
        errorCode:
          typeof record.code === "string"
            ? record.code
            : typeof record.code === "number"
              ? String(record.code)
              : undefined,
      });
    }
    return new AmazonAdsApiError({ message: `Amazon Ads API error (${status})`, status });
  }
}
