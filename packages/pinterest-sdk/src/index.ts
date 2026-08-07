// --- Namespace (recommended entry point) ---
export { Pinterest } from "./namespace.ts";
export type {
  PinterestApiClientOptions,
  PinterestOAuthConfig,
  PinterestOAuthTokenResponse,
  PinterestScope,
} from "./namespace.ts";

// --- Core infrastructure ---
export { PinterestApiClient } from "./api-client.ts";
export { PinterestApiError } from "./errors.ts";

// --- OAuth ---
export { createPinterestOAuth, PinterestScopes } from "./oauth.ts";

// --- Generated Pinterest REST API v5 surface ---
export * from "./generated/index.ts";
export * from "./generated/types.ts";
export type * from "./generated/params.ts";
