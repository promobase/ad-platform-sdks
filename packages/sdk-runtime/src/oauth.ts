import type { AllPlatform } from "./platforms.ts";
import { Result, TaggedError, type SdkResult } from "./result.ts";

export type OAuthPhase = "authorize" | "exchange" | "refresh" | "revoke" | "validate";

export type OAuthPkce = {
  readonly codeChallenge: string;
  readonly method?: "S256";
};

declare const oauthCustomScopeBrand: unique symbol;

/** A scope accepted only through an explicit custom-scope escape hatch. */
export type OAuthCustomScope = string & { readonly [oauthCustomScopeBrand]: true };

/**
 * Keeps broad legacy scope arrays usable while checking literal scope lists against a catalog.
 * Use `customOAuthScope` when constructing a new custom scope in typed code.
 */
export type OAuthScopeInput<
  TScope extends string,
  TRequested extends readonly string[],
> = string extends TRequested[number]
  ? TRequested
  : Exclude<TRequested[number], TScope> extends never
    ? TRequested
    : never;

export function customOAuthScope(value: string): OAuthCustomScope {
  if (value.trim().length === 0) throw new Error("OAuth custom scope cannot be empty");
  if (/[\s,]/.test(value)) {
    throw new Error("OAuth custom scope must be a single scope token");
  }
  return value as OAuthCustomScope;
}

export type OAuthAuthorizeInput<TScope extends string = string> = {
  readonly scopes: readonly TScope[];
  readonly state: string;
  readonly pkce?: OAuthPkce | "auto";
};

export type OAuthAuthorization = {
  readonly url: string;
  readonly state: string;
  readonly codeVerifier?: string;
};

export type OAuthExchangeInput<TScope extends string = string> = {
  readonly code: string;
  readonly state?: string;
  readonly expectedState?: string;
  readonly codeVerifier?: string;
  /** Requested scopes carried forward from authorization when the provider omits them. */
  readonly scopes?: readonly TScope[];
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

export type OAuthRefreshInput<TScope extends string = string> = {
  readonly refreshToken?: string;
  readonly accessToken?: string;
  /** Previously requested/granted scopes when the refresh response omits them. */
  readonly scopes?: readonly TScope[];
};

export type OAuthPublicMetadata = {
  readonly provider: AllPlatform;
  readonly tokenType?: string;
  readonly scopes: readonly string[];
  readonly accessTokenExpiresAt?: Date;
  readonly refreshTokenExpiresAt?: Date;
  readonly hasRefreshToken: boolean;
};

export type OAuthAdapter<TProvider = unknown, TScope extends string = string> = {
  readonly provider: AllPlatform;
  authorize(input: OAuthAuthorizeInput<TScope>): Promise<OAuthAuthorization>;
  exchangeCode(input: OAuthExchangeInput<TScope>): Promise<OAuthTokenSet<TProvider>>;
  refresh?(input: OAuthRefreshInput<TScope>): Promise<OAuthTokenSet<TProvider>>;
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

export type OAuthAdapterResult<TProvider = unknown, TScope extends string = string> = {
  readonly provider: AllPlatform;
  authorize(
    input: OAuthAuthorizeInput<TScope>,
  ): Promise<SdkResult<OAuthAuthorization, OAuthAdapterError>>;
  exchangeCode(
    input: OAuthExchangeInput<TScope>,
  ): Promise<SdkResult<OAuthTokenSet<TProvider>, OAuthAdapterError>>;
  refresh?(
    input: OAuthRefreshInput<TScope>,
  ): Promise<SdkResult<OAuthTokenSet<TProvider>, OAuthAdapterError>>;
  revoke?(input: {
    readonly token: string;
    readonly tokenType?: "access_token" | "refresh_token";
  }): Promise<SdkResult<void, OAuthAdapterError>>;
};

export type OAuthAdapterWithResults<
  TProvider = unknown,
  TScope extends string = string,
> = OAuthAdapter<TProvider, TScope> & {
  readonly result: OAuthAdapterResult<TProvider, TScope>;
};

export type OAuthFlowOptions<TScope extends string = string> = {
  readonly scopes: readonly TScope[];
  readonly state: string;
  readonly pkce?: OAuthPkce | "auto";
};

export type OAuthFlowCompletionInput = {
  readonly code: string;
  readonly state?: string;
  readonly codeVerifier?: string;
};

/**
 * Encapsulates the two-request OAuth browser flow while preserving the
 * provider adapter's native methods and extra discovery helpers.
 *
 * The flow object is intentionally short-lived. Persist `state` and any
 * returned `codeVerifier` in the application's session store before redirect;
 * reconstruct the flow with the same options in the callback handler.
 */
export class OAuthFlow<
  TProvider,
  TScope extends string,
  TAdapter extends OAuthAdapterWithResults<TProvider, TScope> = OAuthAdapterWithResults<
    TProvider,
    TScope
  >,
> {
  readonly adapter: TAdapter;
  private authorization?: OAuthAuthorization;

  constructor(
    adapter: TAdapter,
    private readonly options: OAuthFlowOptions<TScope>,
  ) {
    this.adapter = adapter;
  }

  /** Build the provider authorization URL and retain its generated verifier. */
  async authorize(): Promise<OAuthAuthorization> {
    const authorization = await this.adapter.authorize({
      scopes: this.options.scopes,
      state: this.options.state,
      pkce: this.options.pkce,
    });
    this.authorization = authorization;
    return authorization;
  }

  /** Exchange a callback code while enforcing this flow's original state. */
  complete(input: OAuthFlowCompletionInput): Promise<OAuthTokenSet<TProvider>> {
    return this.adapter.exchangeCode({
      code: input.code,
      state: input.state ?? this.options.state,
      expectedState: this.options.state,
      codeVerifier: input.codeVerifier ?? this.authorization?.codeVerifier,
      scopes: this.options.scopes,
    });
  }

  async refresh(input: OAuthRefreshInput<TScope>): Promise<OAuthTokenSet<TProvider>> {
    if (!this.adapter.refresh) {
      throw new OAuthAdapterError("OAuth provider does not support refresh", {
        provider: this.adapter.provider,
        phase: "refresh",
      });
    }
    return this.adapter.refresh(input);
  }

  async revoke(input: {
    readonly token: string;
    readonly tokenType?: "access_token" | "refresh_token";
  }): Promise<void> {
    if (!this.adapter.revoke) {
      throw new OAuthAdapterError("OAuth provider does not support revoke", {
        provider: this.adapter.provider,
        phase: "revoke",
      });
    }
    await this.adapter.revoke(input);
  }
}

export function createOAuthFlow<
  TProvider,
  TScope extends string,
  TAdapter extends OAuthAdapterWithResults<TProvider, TScope>,
>(adapter: TAdapter, options: OAuthFlowOptions<TScope>): OAuthFlow<TProvider, TScope, TAdapter> {
  return new OAuthFlow(adapter, options);
}

/**
 * Adds a non-throwing Result façade while preserving the adapter's existing API
 * and any platform-specific discovery methods.
 */
export function withOAuthResults<
  TProvider,
  TScope extends string = string,
  TAdapter extends OAuthAdapter<TProvider, TScope> & { readonly result?: never } = OAuthAdapter<
    TProvider,
    TScope
  >,
>(adapter: TAdapter): TAdapter & { readonly result: OAuthAdapterResult<TProvider, TScope> } {
  const result: OAuthAdapterResult<TProvider, TScope> = {
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
    readonly result: OAuthAdapterResult<TProvider, TScope>;
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
