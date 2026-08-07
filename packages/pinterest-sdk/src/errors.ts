import { ApiError } from "@mosaic/sdk-runtime";

/**
 * Error thrown for Pinterest API failures.
 * Pinterest returns `{ "code": <number>, "message": "..." }` on non-2xx responses.
 */
export class PinterestApiError extends ApiError {
  readonly errorCode?: number;

  constructor(opts: { message: string; status: number; errorCode?: number }) {
    super(opts.message, opts.status);
    this.name = "PinterestApiError";
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

  static fromResponse(status: number, body: unknown): PinterestApiError {
    if (typeof body === "object" && body !== null) {
      const record = body as Record<string, unknown>;
      return new PinterestApiError({
        message:
          typeof record.message === "string" ? record.message : `Pinterest API error (${status})`,
        status,
        errorCode: typeof record.code === "number" ? record.code : undefined,
      });
    }
    return new PinterestApiError({ message: `Pinterest API error (${status})`, status });
  }
}
