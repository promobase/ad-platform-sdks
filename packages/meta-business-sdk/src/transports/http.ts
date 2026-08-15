export type MetaTransportProvider = "facebook" | "instagram" | "whatsapp";

export type MetaTransportErrorDetails = {
  readonly message?: string;
  readonly type?: string;
  readonly code?: number;
  readonly error_subcode?: number;
  readonly fbtrace_id?: string;
  readonly error_data?: unknown;
};

export class MetaTransportError extends Error {
  readonly kind = "provider_error" as const;
  readonly provider: MetaTransportProvider;
  readonly operation: string;
  readonly httpStatus: number;
  readonly providerCode?: number;
  readonly providerSubcode?: number;
  readonly providerType?: string;
  readonly requestId?: string;
  readonly retryable: boolean;
  readonly retryAfterSeconds?: number;

  constructor(
    provider: MetaTransportProvider,
    operation: string,
    httpStatus: number,
    details: MetaTransportErrorDetails = {},
    retryAfterSeconds?: number,
  ) {
    super(details.message ?? `${provider} ${operation} failed with status ${httpStatus}`);
    this.name = "MetaTransportError";
    this.provider = provider;
    this.operation = operation;
    this.httpStatus = httpStatus;
    this.providerCode = details.code;
    this.providerSubcode = details.error_subcode;
    this.providerType = details.type;
    this.requestId = details.fbtrace_id;
    this.retryAfterSeconds = retryAfterSeconds;
    this.retryable =
      httpStatus === 408 || httpStatus === 409 || httpStatus === 429 || httpStatus >= 500;
  }
}

export type MetaTransportClientOptions = {
  readonly accessToken: string;
  readonly apiVersion?: string;
  readonly baseUrl?: string;
  readonly fetch?: (input: string | URL, init?: RequestInit) => Promise<Response>;
  readonly signal?: AbortSignal;
};

export async function requestMetaJson<T>(
  options: MetaTransportClientOptions,
  provider: MetaTransportProvider,
  operation: string,
  path: string,
  init: RequestInit,
): Promise<T> {
  const fetchImpl = options.fetch ?? fetch;
  const baseUrl = (options.baseUrl ?? "https://graph.facebook.com").replace(/\/$/u, "");
  const response = await fetchImpl(`${baseUrl}/${options.apiVersion ?? "v25.0"}/${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${options.accessToken}`,
      ...(init.body ? { "Content-Type": "application/json" } : {}),
      ...init.headers,
    },
    signal: options.signal,
  });

  const requestId = response.headers.get("x-fb-trace-id") ?? undefined;
  const retryAfter = response.headers.get("retry-after");
  const body = (await response.json().catch(() => ({}))) as {
    readonly error?: MetaTransportErrorDetails;
  };
  if (!response.ok) {
    throw new MetaTransportError(
      provider,
      operation,
      response.status,
      { ...body.error, fbtrace_id: body.error?.fbtrace_id ?? requestId },
      retryAfter ? Number(retryAfter) : undefined,
    );
  }
  return body as T;
}
