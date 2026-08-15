import { Data } from "effect";

export interface PlatformErrorContext {
  readonly platform: string;
  readonly operationId: string;
  readonly requestId?: string;
  readonly idempotencyKey?: string;
}

export type MutationOutcome = "not_started" | "committed" | "unknown";

interface HttpPlatformErrorContext extends PlatformErrorContext {
  readonly status: number;
  readonly body: unknown;
}

export class AuthenticationError extends Data.TaggedError(
  "AuthenticationError",
)<HttpPlatformErrorContext> {}

export class PermissionError extends Data.TaggedError(
  "PermissionError",
)<HttpPlatformErrorContext> {}

export class NotFoundError extends Data.TaggedError("NotFoundError")<HttpPlatformErrorContext> {}

export class ConflictError extends Data.TaggedError("ConflictError")<HttpPlatformErrorContext> {}

export class RateLimitError extends Data.TaggedError("RateLimitError")<
  HttpPlatformErrorContext & {
    readonly retryAfterMs?: number;
  }
> {}

export class InvalidRequestError extends Data.TaggedError(
  "InvalidRequestError",
)<HttpPlatformErrorContext> {}

export class ProviderUnavailableError extends Data.TaggedError("ProviderUnavailableError")<
  HttpPlatformErrorContext & {
    readonly retryAfterMs?: number;
  }
> {}

export class NetworkError extends Data.TaggedError("NetworkError")<
  PlatformErrorContext & {
    readonly cause: unknown;
  }
> {}

export class MutationOutcomeUnknown extends Data.TaggedError("MutationOutcomeUnknown")<
  PlatformErrorContext & {
    readonly outcome: "unknown";
    readonly reconciliationRequired: true;
    readonly providerOperationId?: string;
    readonly cause: unknown;
  }
> {}

export class RuntimeFailureError extends Data.TaggedError("RuntimeFailureError")<{
  readonly cause: unknown;
  readonly message: string;
}> {}

export class ResponseDecodeError extends Data.TaggedError("ResponseDecodeError")<
  PlatformErrorContext & {
    readonly cause: unknown;
    readonly text?: string;
    readonly value?: unknown;
  }
> {}

export class InputValidationError extends Data.TaggedError("InputValidationError")<
  PlatformErrorContext & {
    readonly cause: unknown;
    readonly value: unknown;
  }
> {}

export class UnsupportedCapabilityError extends Data.TaggedError("UnsupportedCapabilityError")<
  PlatformErrorContext & {
    readonly capability: string;
  }
> {}

export type PlatformError =
  | AuthenticationError
  | PermissionError
  | NotFoundError
  | ConflictError
  | RateLimitError
  | InvalidRequestError
  | ProviderUnavailableError
  | NetworkError
  | MutationOutcomeUnknown
  | InputValidationError
  | ResponseDecodeError
  | UnsupportedCapabilityError;

export function platformHttpError(
  context: PlatformErrorContext,
  status: number,
  body: unknown,
  retryAfterMs?: number,
): PlatformError {
  const fields = { ...context, status, body };
  switch (status) {
    case 401:
      return new AuthenticationError(fields);
    case 403:
      return new PermissionError(fields);
    case 404:
      return new NotFoundError(fields);
    case 409:
      return new ConflictError(fields);
    case 429:
      return new RateLimitError({ ...fields, retryAfterMs });
    default:
      return status >= 500
        ? new ProviderUnavailableError({ ...fields, retryAfterMs })
        : new InvalidRequestError(fields);
  }
}

export function retryAfter(error: PlatformError): number | undefined {
  return error._tag === "RateLimitError" || error._tag === "ProviderUnavailableError"
    ? error.retryAfterMs
    : undefined;
}

export function isMutationOutcomeUnknown(error: PlatformError): error is MutationOutcomeUnknown {
  return error._tag === "MutationOutcomeUnknown";
}
