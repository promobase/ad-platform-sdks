export interface GoogleAdsErrorDetail {
  errorCode: Record<string, string>;
  message: string;
  trigger?: { stringValue?: string };
  location?: { fieldPathElements: { fieldName: string; index?: number }[] };
}

interface GoogleErrorBody {
  error?: {
    code?: number;
    message?: string;
    status?: string;
    details?: Array<{
      "@type"?: string;
      errors?: GoogleAdsErrorDetail[];
      requestId?: string;
    }>;
  };
}

export class GoogleAdsError extends Error {
  readonly httpStatus: number;
  readonly requestId?: string;
  readonly errors: GoogleAdsErrorDetail[];
  readonly raw: unknown;

  constructor(opts: {
    message: string;
    httpStatus: number;
    requestId?: string;
    errors: GoogleAdsErrorDetail[];
    raw: unknown;
  }) {
    super(opts.message);
    this.name = "GoogleAdsError";
    this.httpStatus = opts.httpStatus;
    this.requestId = opts.requestId;
    this.errors = opts.errors;
    this.raw = opts.raw;
  }
}

export function parseGoogleAdsError(httpStatus: number, body: unknown): GoogleAdsError {
  const b = (body ?? {}) as GoogleErrorBody;
  const details = b?.error?.details ?? [];
  const failure = details.find((d) => (d["@type"] ?? "").includes("GoogleAdsFailure"));
  const errors = failure?.errors ?? [];
  const requestId = failure?.requestId;
  const topMessage = b?.error?.message ?? `HTTP ${httpStatus}`;
  const firstCode = errors[0] ? Object.values(errors[0].errorCode)[0] : undefined;
  const message = firstCode ? `${topMessage} [${firstCode}]` : topMessage;
  return new GoogleAdsError({ message, httpStatus, requestId, errors, raw: body });
}
