/**
 * @promobase/ad-platforms
 *
 * Unified SDK for all ad platforms. Single install, single namespace.
 *
 * Usage:
 *   import { Meta, TikTok } from "@promobase/ad-platforms";
 *
 *   const meta = Meta.createClient({ accessToken: "..." });
 *   const tiktok = TikTok.createClient({ accessToken: "..." });
 *
 *   // Unified AI tools across all platforms
 *   import { createAllTools } from "@promobase/ad-platforms";
 *   const tools = createAllTools({ meta: { api, igAccountId, ... }, tiktok: { ... } });
 */

// --- Platform namespaces ---
export { Meta } from "@promobase/meta-business-sdk-ts";
export { TikTok } from "@promobase/tiktok-business-sdk";

// --- Meta: direct re-exports for tree-shaking ---
export {
  createClient as createMetaClient,
  createInstagramClient,
  createInstagramOAuth,
  createFacebookPageClient,
  createFacebookOAuth,
  createThreadsClient,
  createThreadsOAuth,
  FacebookApiError,
  MetaRateLimiter,
  BatchBuilder,
  // Webhooks
  verifyWebhookChallenge,
  verifyWebhookSignature,
  parseInstagramWebhook,
  parseFacebookWebhook,
  parseThreadsWebhook,
  safeParseInstagramWebhook,
  safeParseFacebookWebhook,
  safeParseThreadsWebhook,
  WebhookParseError,
} from "@promobase/meta-business-sdk-ts";

export type {
  ApiClient,
  ApiClientOptions,
  MetaClientOptions,
  InstagramClientOptions,
  FacebookPageClientOptions,
  ThreadsClientOptions,
  MetaRateLimiterOptions,
  WebhookParseResult,
  IGWebhookPayload,
  FBWebhookPayload,
  ThreadsWebhookPayload,
} from "@promobase/meta-business-sdk-ts";

// --- TikTok: direct re-exports ---
export {
  createTikTokClient,
  createTikTokOAuth,
  createTikTokWebhooks,
  TikTokApiClient,
  TikTokApiError,
  TikTokRateLimiter,
} from "@promobase/tiktok-business-sdk";

export type {
  TikTokApiClientOptions,
  TikTokRateLimiterOptions,
} from "@promobase/tiktok-business-sdk";

// --- Unified AI tools ---
export { createAllTools } from "./unified-tools.ts";
export type { CreateAllToolsOptions } from "./unified-tools.ts";
