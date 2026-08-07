import { ApiError } from "@mosaic/sdk-runtime";

/**
 * Error thrown for Snapchat Marketing API failures.
 *
 * Carries the HTTP status, the API `request_id` (useful for support tickets),
 * and the optional `error_code` reported in the response body.
 */
export class SnapchatApiError extends ApiError {
  readonly requestId: string;
  readonly errorCode?: string;

  constructor(opts: { message: string; status: number; requestId?: string; errorCode?: string }) {
    super(opts.message, opts.status);
    this.name = "SnapchatApiError";
    this.requestId = opts.requestId ?? "";
    this.errorCode = opts.errorCode;
  }

  /** Whether this error indicates rate limiting. */
  get isRateLimited(): boolean {
    return this.status === 429;
  }

  /** Whether this is an authentication/token error (expired or invalid token). */
  get isAuthError(): boolean {
    return this.status === 401;
  }

  /** Whether this is a transient server error that could be retried. */
  get isTransient(): boolean {
    return this.status >= 500 || this.isRateLimited;
  }

  static fromResponse(status: number, body: unknown, requestId?: string): SnapchatApiError {
    if (typeof body === "object" && body !== null) {
      const b = body as Record<string, unknown>;
      const message =
        (typeof b.display_message === "string" ? b.display_message : undefined) ??
        (typeof b.debug_message === "string" ? b.debug_message : undefined) ??
        `Snapchat Marketing API error (${status})`;
      return new SnapchatApiError({
        message,
        status,
        requestId: typeof b.request_id === "string" ? b.request_id : requestId,
        errorCode: typeof b.error_code === "string" ? b.error_code : undefined,
      });
    }
    return new SnapchatApiError({
      message: `Snapchat Marketing API error (${status})`,
      status,
      requestId,
    });
  }
}
