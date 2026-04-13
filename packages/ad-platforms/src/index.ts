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

export type {
  GoogleAdsClient,
  GoogleAdsClientOptions,
  GoogleAdsErrorDetail,
  SearchRequest as GoogleAdsSearchRequest,
  SearchResponse as GoogleAdsSearchResponse,
} from "@promobase/google-ads-sdk";
// --- Google Ads ---
export {
  createClient as createGoogleAdsClient,
  Google,
  GoogleAdsError,
  paginate as googleAdsPaginate,
} from "@promobase/google-ads-sdk";

export type {
  ApiClient,
  ApiClientOptions,
  FacebookPageClientOptions,
  FBWebhookPayload,
  IGWebhookPayload,
  InstagramClientOptions,
  MetaClientOptions,
  MetaRateLimiterOptions,
  ThreadsClientOptions,
  ThreadsWebhookPayload,
  WebhookParseResult,
} from "@promobase/meta-business-sdk-ts";
// --- Platform namespaces ---
// --- Meta: direct re-exports for tree-shaking ---
export {
  BatchBuilder,
  createClient as createMetaClient,
  createFacebookOAuth,
  createFacebookPageClient,
  createInstagramClient,
  createInstagramOAuth,
  createThreadsClient,
  createThreadsOAuth,
  FacebookApiError,
  Meta,
  MetaRateLimiter,
  parseFacebookWebhook,
  parseInstagramWebhook,
  parseThreadsWebhook,
  safeParseFacebookWebhook,
  safeParseInstagramWebhook,
  safeParseThreadsWebhook,
  // Webhooks
  verifyWebhookChallenge,
  verifyWebhookSignature,
  WebhookParseError,
} from "@promobase/meta-business-sdk-ts";
export type {
  TikTokApiClientOptions,
  TikTokRateLimiterOptions,
} from "@promobase/tiktok-business-sdk";
// --- TikTok: direct re-exports ---
export {
  createTikTokClient,
  createTikTokOAuth,
  createTikTokWebhooks,
  TikTok,
  TikTokApiClient,
  TikTokApiError,
  TikTokRateLimiter,
} from "@promobase/tiktok-business-sdk";
export type { CreateAllToolsOptions } from "./unified-tools.ts";
// --- Unified AI tools ---
export { createAllTools } from "./unified-tools.ts";
