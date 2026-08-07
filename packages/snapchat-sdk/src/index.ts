// --- Namespace (recommended entry point) ---
export { Snapchat } from "./namespace.ts";
export type {
  SnapchatApiClientOptions,
  SnapchatOAuthConfig,
  SnapchatOAuthTokenResponse,
  SnapchatScope,
} from "./namespace.ts";

// --- Core infrastructure ---
export { SnapchatApiClient } from "./api-client.ts";
export type { SnapchatEnvelope } from "./api-client.ts";
export { SnapchatApiError } from "./errors.ts";
export { SnapchatCursor } from "./pagination.ts";
export { extractEntities, nextLink } from "./envelope.ts";

// --- OAuth ---
export { createSnapchatOAuth, SnapchatScopes } from "./oauth.ts";

// --- Generated Ads API surface ---
export * from "./generated/index.ts";
