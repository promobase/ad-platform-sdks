/**
 * @mosaic/ad-platforms
 *
 * Unified SDK for all ad platforms. Single install, single namespace.
 *
 * Usage:
 *   import { Meta, TikTok } from "@mosaic/ad-platforms";
 *
 *   const meta = Meta.createClient({ accessToken: "..." });
 *   const tiktok = TikTok.createClient({ accessToken: "..." });
 *   const linkedin = LinkedIn.createClient({ accessToken: "..." });
 *
 *   // Unified AI tools across all platforms
 *   import { createAllTools } from "@mosaic/ad-platforms/ai";
 *   const tools = createAllTools({ meta: { api, igAccountId, ... }, tiktok: { ... } });
 */

export type {
  GoogleAdsClient,
  GoogleAdsClientOptions,
  GoogleAdsErrorDetail,
  SearchRequest as GoogleAdsSearchRequest,
  SearchResponse as GoogleAdsSearchResponse,
} from "@mosaic/google-ads";
// --- Google Ads ---
export {
  createClient as createGoogleAdsClient,
  Google,
  GoogleAdsError,
  paginate as googleAdsPaginate,
} from "@mosaic/google-ads";

export type {
  BusinessAccount,
  BusinessLocation,
  DailyMetric,
  GoogleBusinessProfileClientOptions,
  GoogleBusinessProfileOAuthConfig,
  LocalPost,
  LocalPostMetrics,
} from "@mosaic/google-business-profile";

export type {
  XDirectMessageEvent,
  XDirectMessageEventsResponse,
  XOAuthConfig,
  XOAuthTokenResponse,
} from "@mosaic/x";
export {
  createPkcePair as createXPkcePair,
  createXDirectMessages,
  createXOAuth,
  X,
} from "@mosaic/x";

export type {
  YouTubeClientOptions,
  YouTubeOAuthConfig,
  YouTubeOAuthTokenResponse,
  YouTubeResumableUploadOptions,
  YouTubeUploadBody,
  YouTubeUploadSession,
} from "@mosaic/youtube";
export {
  createYouTubeClient,
  createYouTubeOAuth,
  YouTube,
  YouTubeApiError,
  YouTubeClient,
  YouTubeUploadError,
} from "@mosaic/youtube";
export {
  createGoogleBusinessProfileClient,
  createGoogleBusinessProfileOAuth,
  GoogleBusinessProfile,
  GoogleBusinessProfileApiError,
  GoogleBusinessProfileClient,
} from "@mosaic/google-business-profile";

export type {
  LinkedInCallToAction,
  LinkedInCallToActionLabel,
  LinkedInClientOptions,
  LinkedInOperation,
  LinkedInOperationId,
  LinkedInOperationInput,
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
} from "@mosaic/linkedin";
// --- LinkedIn ---
export {
  createClient as createLinkedInClient,
  createLinkedInOAuth,
  createLinkedInGeneratedClient,
  linkedinOperations,
  LinkedIn,
  LinkedInGeneratedClient,
  LinkedInApiError,
  LinkedInClient,
  LinkedInUploadError,
} from "@mosaic/linkedin";

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
} from "@mosaic/meta";
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
} from "@mosaic/meta";
export type {
  TikTokApiClientOptions,
  TikTokDeveloperClientOptions,
  TikTokDeveloperOAuthConfig,
  TikTokDeveloperPublishStatus,
  TikTokDeveloperTokenResponse,
  TikTokDeveloperVideo,
  TikTokRateLimiterOptions,
} from "@mosaic/tiktok";
// --- TikTok: direct re-exports ---
export {
  createTikTokClient,
  createTikTokDeveloperClient,
  createTikTokDeveloperOAuth,
  createTikTokDeveloperPkcePair,
  createTikTokOAuth,
  createTikTokWebhooks,
  TikTok,
  TikTokApiClient,
  TikTokApiError,
  TikTokRateLimiter,
} from "@mosaic/tiktok";

// --- Snapchat ---
export type {
  SnapchatApiClientOptions,
  SnapchatOAuthConfig,
  SnapchatOAuthTokenResponse,
  SnapchatScope,
} from "@mosaic/snapchat";
export {
  createSnapchatOAuth,
  Snapchat,
  SnapchatApiClient,
  SnapchatApiError,
  SnapchatCursor,
  SnapchatScopes,
} from "@mosaic/snapchat";

// --- Reddit ---
export type {
  RedditApiClientOptions,
  RedditOAuthConfig,
  RedditOAuthTokenResponse,
  RedditScope,
} from "@mosaic/reddit";
export {
  createRedditOAuth,
  Reddit,
  RedditApiClient,
  RedditApiError,
  RedditScopes,
} from "@mosaic/reddit";

// --- Pinterest ---
export type {
  PinterestApiClientOptions,
  PinterestOAuthConfig,
  PinterestOAuthTokenResponse,
  PinterestScope,
} from "@mosaic/pinterest";
export {
  createPinterestOAuth,
  Pinterest,
  PinterestApiClient,
  PinterestApiError,
  PinterestScopes,
} from "@mosaic/pinterest";

// --- Amazon Ads ---
export type {
  AmazonAdsApiClientOptions,
  AmazonAdsOAuthConfig,
  AmazonAdsOAuthTokenResponse,
  AmazonAdsScope,
} from "@mosaic/amazon-ads";
export {
  AmazonAds,
  AmazonAdsApiClient,
  AmazonAdsApiError,
  AmazonAdsBaseUrls,
  createAmazonAdsOAuth,
  AmazonAdsScopes,
} from "@mosaic/amazon-ads";

// --- Bluesky ---
export type { BlueskyApiClientOptions } from "@mosaic/bluesky";
export { Bluesky, BlueskyApiClient, BlueskyApiError, createPostRecord } from "@mosaic/bluesky";
