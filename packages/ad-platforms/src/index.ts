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
  BusinessAccount,
  BusinessLocation,
  DailyMetric,
  GoogleBusinessProfileClientOptions,
  GoogleBusinessProfileOAuthConfig,
  LocalPost,
  LocalPostMetrics,
} from "@openpromo/google-business-profile";

export type {
  XDirectMessageEvent,
  XDirectMessageEventsResponse,
  XOAuthConfig,
  XOAuthTokenResponse,
} from "@openpromo/x";
export {
  createPkcePair as createXPkcePair,
  createXDirectMessages,
  createXOAuth,
  X,
} from "@openpromo/x";

export type {
  YouTubeClientOptions,
  YouTubeOAuthConfig,
  YouTubeOAuthTokenResponse,
  YouTubeResumableUploadOptions,
  YouTubeUploadBody,
  YouTubeUploadSession,
} from "@openpromo/youtube";
export {
  createYouTubeClient,
  createYouTubeOAuth,
  YouTube,
  YouTubeApiError,
  YouTubeClient,
  YouTubeUploadError,
} from "@openpromo/youtube";
export {
  createGoogleBusinessProfileClient,
  createGoogleBusinessProfileOAuth,
  GoogleBusinessProfile,
  GoogleBusinessProfileApiError,
  GoogleBusinessProfileClient,
} from "@openpromo/google-business-profile";

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
} from "@openpromo/linkedin";
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
  TikTokDeveloperClientOptions,
  TikTokDeveloperOAuthConfig,
  TikTokDeveloperPublishStatus,
  TikTokDeveloperTokenResponse,
  TikTokDeveloperVideo,
  TikTokRateLimiterOptions,
} from "@openpromo/tiktok";
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
} from "@openpromo/tiktok";

// --- Snapchat ---
export type {
  SnapchatApiClientOptions,
  SnapchatOAuthConfig,
  SnapchatOAuthTokenResponse,
  SnapchatScope,
} from "@openpromo/snapchat";
export {
  createSnapchatOAuth,
  Snapchat,
  SnapchatApiClient,
  SnapchatApiError,
  SnapchatCursor,
  SnapchatScopes,
} from "@openpromo/snapchat";

// --- Reddit ---
export type {
  RedditApiClientOptions,
  RedditOAuthConfig,
  RedditOAuthTokenResponse,
  RedditScope,
} from "@openpromo/reddit";
export {
  createRedditOAuth,
  Reddit,
  RedditApiClient,
  RedditApiError,
  RedditScopes,
} from "@openpromo/reddit";

// --- Pinterest ---
export type {
  PinterestApiClientOptions,
  PinterestOAuthConfig,
  PinterestOAuthTokenResponse,
  PinterestScope,
} from "@openpromo/pinterest";
export {
  createPinterestOAuth,
  Pinterest,
  PinterestApiClient,
  PinterestApiError,
  PinterestScopes,
} from "@openpromo/pinterest";

// --- Amazon Ads ---
export type {
  AmazonAdsApiClientOptions,
  AmazonAdsOAuthConfig,
  AmazonAdsOAuthTokenResponse,
  AmazonAdsScope,
} from "@openpromo/amazon-ads";
export {
  AmazonAds,
  AmazonAdsApiClient,
  AmazonAdsApiError,
  AmazonAdsBaseUrls,
  createAmazonAdsOAuth,
  AmazonAdsScopes,
} from "@openpromo/amazon-ads";
