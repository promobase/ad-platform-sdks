import type { AllPlatform } from "./platforms.ts";
import { Result, TaggedError, type SdkResult } from "./result.ts";

export type OAuthPhase = "authorize" | "exchange" | "refresh" | "revoke" | "validate";

export type OAuthPkce = {
  readonly codeChallenge: string;
  readonly method?: "S256";
};

export type OAuthAuthorizeInput = {
  readonly scopes: readonly string[];
  readonly state: string;
  readonly pkce?: OAuthPkce | "auto";
};

export type OAuthAuthorization = {
  readonly url: string;
  readonly state: string;
  readonly codeVerifier?: string;
};

export type OAuthExchangeInput = {
  readonly code: string;
  readonly state?: string;
  readonly expectedState?: string;
  readonly codeVerifier?: string;
};

export type OAuthTokenSet<TProvider = unknown> = {
  readonly accessToken: string;
  readonly refreshToken?: string;
  readonly tokenType?: string;
  readonly scopes: readonly string[];
  readonly accessTokenExpiresAt?: Date;
  readonly refreshTokenExpiresAt?: Date;
  readonly providerData: TProvider;
};

export type OAuthRefreshInput = {
  readonly refreshToken?: string;
  readonly accessToken?: string;
};

export type OAuthPublicMetadata = {
  readonly provider: AllPlatform;
  readonly tokenType?: string;
  readonly scopes: readonly string[];
  readonly accessTokenExpiresAt?: Date;
  readonly refreshTokenExpiresAt?: Date;
  readonly hasRefreshToken: boolean;
};

export type OAuthAdapter<TProvider = unknown> = {
  readonly provider: AllPlatform;
  authorize(input: OAuthAuthorizeInput): Promise<OAuthAuthorization>;
  exchangeCode(input: OAuthExchangeInput): Promise<OAuthTokenSet<TProvider>>;
  refresh?(input: OAuthRefreshInput): Promise<OAuthTokenSet<TProvider>>;
  revoke?(input: {
    readonly token: string;
    readonly tokenType?: "access_token" | "refresh_token";
  }): Promise<void>;
};

export type OAuthAdapterErrorDetails = {
  readonly provider: string;
  readonly phase: OAuthPhase;
  readonly status?: number;
  readonly providerCode?: string;
  readonly providerData?: unknown;
};

const OAuthAdapterErrorBase = TaggedError("OAuthAdapterError")<{
  readonly message: string;
  readonly details: OAuthAdapterErrorDetails;
  readonly cause?: unknown;
}>();

/** A typed, matchable OAuth failure shared by every platform adapter. */
export class OAuthAdapterError extends OAuthAdapterErrorBase {
  override readonly name = "OAuthAdapterError";

  constructor(message: string, details: OAuthAdapterErrorDetails, options?: ErrorOptions) {
    super({ message, details, ...(options?.cause === undefined ? {} : { cause: options.cause }) });
  }
}

export type OAuthAdapterResult<TProvider = unknown> = {
  readonly provider: AllPlatform;
  authorize(input: OAuthAuthorizeInput): Promise<SdkResult<OAuthAuthorization, OAuthAdapterError>>;
  exchangeCode(
    input: OAuthExchangeInput,
  ): Promise<SdkResult<OAuthTokenSet<TProvider>, OAuthAdapterError>>;
  refresh?(
    input: OAuthRefreshInput,
  ): Promise<SdkResult<OAuthTokenSet<TProvider>, OAuthAdapterError>>;
  revoke?(input: {
    readonly token: string;
    readonly tokenType?: "access_token" | "refresh_token";
  }): Promise<SdkResult<void, OAuthAdapterError>>;
};

export type OAuthAdapterWithResults<TProvider = unknown> = OAuthAdapter<TProvider> & {
  readonly result: OAuthAdapterResult<TProvider>;
};

/**
 * Adds a non-throwing Result façade while preserving the adapter's existing API
 * and any platform-specific discovery methods.
 */
export function withOAuthResults<
  TProvider,
  TAdapter extends OAuthAdapter<TProvider> & { readonly result?: never },
>(adapter: TAdapter): TAdapter & { readonly result: OAuthAdapterResult<TProvider> } {
  const result: OAuthAdapterResult<TProvider> = {
    provider: adapter.provider,
    authorize: (input) => captureOAuthResult(adapter, "authorize", () => adapter.authorize(input)),
    exchangeCode: (input) =>
      captureOAuthResult(adapter, "exchange", () => adapter.exchangeCode(input)),
  };

  if (adapter.refresh) {
    result.refresh = (input) =>
      captureOAuthResult(adapter, "refresh", () => adapter.refresh!(input));
  }
  if (adapter.revoke) {
    result.revoke = (input) => captureOAuthResult(adapter, "revoke", () => adapter.revoke!(input));
  }

  return Object.assign(adapter, { result }) as TAdapter & {
    readonly result: OAuthAdapterResult<TProvider>;
  };
}

async function captureOAuthResult<T>(
  adapter: OAuthAdapter,
  phase: OAuthPhase,
  operation: () => Promise<T>,
): Promise<SdkResult<T, OAuthAdapterError>> {
  return Result.tryPromise({
    try: operation,
    catch: (cause) => normalizeOAuthError(adapter.provider, phase, cause),
  });
}

function normalizeOAuthError(
  provider: AllPlatform,
  phase: OAuthPhase,
  cause: unknown,
): OAuthAdapterError {
  if (cause instanceof OAuthAdapterError) return cause;
  return new OAuthAdapterError(
    cause instanceof Error ? cause.message : `${provider} OAuth ${phase} failed`,
    { provider, phase },
    { cause },
  );
}

export function assertOAuthState(
  state: string | undefined,
  expectedState: string | undefined,
): void {
  if (expectedState !== undefined && state !== expectedState) {
    throw new OAuthAdapterError("OAuth state mismatch", {
      provider: "unknown",
      phase: "validate",
    });
  }
}

export function secondsFromNow(seconds: number | undefined): Date | undefined {
  return seconds === undefined ? undefined : new Date(Date.now() + seconds * 1000);
}

/** Return safe account metadata without copying access, refresh, or provider tokens. */
export function redactOAuthTokenSet<TProvider>(
  provider: AllPlatform,
  tokenSet: OAuthTokenSet<TProvider>,
): OAuthPublicMetadata {
  return {
    provider,
    scopes: [...tokenSet.scopes],
    hasRefreshToken: tokenSet.refreshToken !== undefined,
    ...(tokenSet.tokenType === undefined ? {} : { tokenType: tokenSet.tokenType }),
    ...(tokenSet.accessTokenExpiresAt === undefined
      ? {}
      : { accessTokenExpiresAt: tokenSet.accessTokenExpiresAt }),
    ...(tokenSet.refreshTokenExpiresAt === undefined
      ? {}
      : { refreshTokenExpiresAt: tokenSet.refreshTokenExpiresAt }),
  };
}

export async function createPkcePair(): Promise<{
  readonly codeVerifier: string;
  readonly codeChallenge: string;
}> {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  const codeVerifier = base64Url(bytes);
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(codeVerifier));
  return { codeVerifier, codeChallenge: base64Url(new Uint8Array(digest)) };
}

function base64Url(bytes: Uint8Array): string {
  let value = "";
  for (const byte of bytes) value += String.fromCharCode(byte);
  return btoa(value).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}
