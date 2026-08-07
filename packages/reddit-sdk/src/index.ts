// --- Namespace (recommended entry point) ---
export { Reddit } from "./namespace.ts";
export type {
  RedditApiClientOptions,
  RedditOAuthConfig,
  RedditOAuthTokenResponse,
  RedditScope,
} from "./namespace.ts";

// --- Core infrastructure ---
export { RedditApiClient, unwrapData } from "./api-client.ts";
export { RedditApiError } from "./errors.ts";
export type { RedditEnvelope, RedditPagination } from "./envelope.ts";

// --- OAuth ---
export { createRedditOAuth, RedditScopes } from "./oauth.ts";

// --- Generated Ads API surface ---
export * from "./generated/index.ts";
export * from "./generated/types.ts";
export type * from "./generated/params.ts";
