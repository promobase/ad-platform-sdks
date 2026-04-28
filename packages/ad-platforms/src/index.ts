/**
 * @openpromo/ad-platforms
 *
 * Unified SDK for all ad platforms. Single install, single namespace.
 *
 * Usage:
 *   import { Meta, TikTok } from "@openpromo/ad-platforms";
 *
 *   const meta = Meta.createClient({ accessToken: "..." });
 *   const tiktok = TikTok.createClient({ accessToken: "..." });
 *   const linkedin = LinkedIn.createClient({ accessToken: "..." });
 *
 *   // Unified AI tools across all platforms
 *   import { createAllTools } from "@openpromo/ad-platforms/ai";
 *   const tools = createAllTools({ meta: { api, igAccountId, ... }, tiktok: { ... } });
 */

export type {
  GoogleAdsClient,
  GoogleAdsClientOptions,
  GoogleAdsErrorDetail,
  SearchRequest as GoogleAdsSearchRequest,
  SearchResponse as GoogleAdsSearchResponse,
} from "@openpromo/google-ads";
// --- Google Ads ---
export {
  createClient as createGoogleAdsClient,
  Google,
  GoogleAdsError,
  paginate as googleAdsPaginate,
} from "@openpromo/google-ads";

export type {
  LinkedInCallToAction,
  LinkedInCallToActionLabel,
  LinkedInClientOptions,
  LinkedInDistribution,
  LinkedInImagePostParams,
  LinkedInImageUploadSession,
  LinkedInMultiImagePostParams,
  LinkedInOAuthConfig,
  LinkedInPost,
  LinkedInPostOptions,
  LinkedInPostResult,
  LinkedInTextPostParams,
  LinkedInTokenResponse,
  LinkedInUrn,
  LinkedInUserInfo,
  LinkedInVideoPostParams,
  LinkedInVideoUploadInstruction,
  LinkedInVideoUploadSession,
  LinkedInVisibility,
} from "@openpromo/linkedin";
// --- LinkedIn ---
export {
  createClient as createLinkedInClient,
  createLinkedInOAuth,
  LinkedIn,
  LinkedInApiError,
  LinkedInClient,
  LinkedInUploadError,
} from "@openpromo/linkedin";

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
} from "@openpromo/meta";
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
} from "@openpromo/meta";
export type {
  TikTokApiClientOptions,
  TikTokRateLimiterOptions,
} from "@openpromo/tiktok";
// --- TikTok: direct re-exports ---
export {
  createTikTokClient,
  createTikTokOAuth,
  createTikTokWebhooks,
  TikTok,
  TikTokApiClient,
  TikTokApiError,
  TikTokRateLimiter,
} from "@openpromo/tiktok";
