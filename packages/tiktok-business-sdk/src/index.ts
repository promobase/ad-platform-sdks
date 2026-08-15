// --- Namespace (recommended entry point) ---

export type { TikTokApiClientOptions } from "./api-client.ts";
// --- Core infrastructure ---
export { TikTokApiClient } from "./api-client.ts";
// --- Client factories ---
export {
  createTikTokClient,
  createTikTokClientWithProperties,
  createTikTokDiscovery,
  createTikTokOAuth,
  createTikTokWebhooks,
} from "./clients/index.ts";
// --- Client types ---
export type {
  AccountField,
  AccountWebhookEventType,
  // Account
  AccountInfoOptions,
  AddPropertyOptions,
  // Spark Ads
  AuthorizationDays,
  AutoMessage,
  AutoMessageType,
  BenchmarkData,
  BusinessMessagingWebhookEventType,
  BrandHashtagInfo,
  BusinessCategory,
  CommentItem,
  Conversation,
  ConversationType,
  CreateAutoMessageOptions,
  CreateCommentOptions,
  DiscoveryDateRange,
  // Discovery
  DiscoveryOptions,
  HashtagDetail,
  HashtagSuggestion,
  HashtagVideo,
  ListBrandHashtagVideosOptions,
  // Comments
  ListCommentsOptions,
  ListCommentsResponse,
  ListMentionedCommentsOptions,
  ListMentionedVideosOptions,
  ListRepliesOptions,
  ListVideosOptions,
  ListVideosResponse,
  MentionComment,
  MentionCommentField,
  // Mentions
  MentionVideo,
  MentionVideoField,
  MessageItem,
  MessageParticipant,
  // Messaging
  MessageType,
  MusicDateRange,
  MusicSoundInfo,
  OAuthConfig,
  PrivacyLevel,
  // Properties
  PropertyInfo,
  PropertyType,
  // Photo
  PublishPhotoOptions,
  PublishStatus,
  PublishStatusResponse,
  // Video
  PublishVideoOptions,
  ReplyCommentOptions,
  SenderAction,
  SendMessageOptions,
  SparkAdsAuthResult,
  SparkAdsAuthStatus,
  TemplateButton,
  TemplateType,
  TikTokClientOptions,
  TikTokResponse,
  TokenInfo,
  TokenResponse,
  TrendingHashtag,
  TrendingMusicTrack,
  VideoField,
  VideoItem,
  VideoSettings,
  // Webhooks (client management)
  WebhookConfig,
  WebhookEventType,
} from "./clients/types.ts";
export { TikTokApiError } from "./errors.ts";
export {
  createTikTokDeveloperClient,
  createTikTokDeveloperOAuth,
  createTikTokDeveloperPkcePair,
  TikTokDeveloperApiError,
  type TikTokDeveloperClientOptions,
  type TikTokDeveloperOAuthConfig,
  type TikTokDeveloperPrivacyLevel,
  type TikTokDeveloperPublishStatus,
  type TikTokDeveloperTokenResponse,
  type TikTokDeveloperVideo,
} from "./developer.ts";
export {
  createTikTokAdvertiserOAuthAdapter,
  createTikTokBusinessOAuthAdapter,
  createTikTokDeveloperOAuthAdapter,
  type TikTokAdvertiserInfo,
  type TikTokAdvertiserOAuthConfig,
  type TikTokAdvertiserOAuthData,
  type TikTokAdvertiserOAuthScope,
  type TikTokAdvertiserTokenData,
  type TikTokBusinessOAuthData,
  type TikTokBusinessProfile,
  type TikTokCredentialFamily,
  type TikTokDeveloperOAuthData,
} from "./oauth-adapters.ts";
export {
  TikTokBusinessOAuthScopes,
  TikTokDeveloperOAuthScopes,
  TikTokBusinessOAuthScopeSchema,
  TikTokDeveloperOAuthScopeSchema,
} from "./oauth-scopes.ts";
export type {
  KnownTikTokBusinessOAuthScope,
  KnownTikTokDeveloperOAuthScope,
  TikTokBusinessOAuthScope,
  TikTokDeveloperOAuthScope,
} from "./oauth-scopes.ts";
export { TikTok } from "./namespace.ts";
export type { TikTokCursorOptions, TikTokPaginatedResponse } from "./pagination.ts";
export { TikTokCursor } from "./pagination.ts";
export type { TikTokRateLimiterOptions } from "./rate-limiter.ts";
export { TikTokRateLimiter } from "./rate-limiter.ts";
export type {
  CommentContent,
  CommentWebhookEvent,
  DMContent,
  DMWebhookEvent,
  MentionContent,
  MentionWebhookEvent,
  PublishCompleteContent,
  PublishFailedContent,
  PublishNoLongerAvailableContent,
  PublishPubliclyAvailableContent,
  TikTokWebhookEvent,
  VideoWebhookEvent,
  WebhookParseOptions,
  WebhookParseResult,
  WebhookSignatureOptions,
} from "./webhooks.ts";
// --- Webhooks (verification + parsing + schemas) ---
export {
  commentContentSchema,
  commentEventTypes,
  commentWebhookEventSchema,
  dmContentSchema,
  dmEventTypes,
  dmWebhookEventSchema,
  mentionContentSchema,
  mentionEventTypes,
  mentionWebhookEventSchema,
  parseCommentWebhook,
  parseDMWebhook,
  parseMentionWebhook,
  parseTikTokWebhook,
  parseVideoWebhook,
  publishCompleteContentSchema,
  publishEventTypes,
  publishFailedContentSchema,
  publishNoLongerAvailableContentSchema,
  publishPubliclyAvailableContentSchema,
  safeParseCommentWebhook,
  safeParseDMWebhook,
  safeParseMentionWebhook,
  safeParseTikTokWebhook,
  safeParseVideoWebhook,
  tiktokWebhookEventSchema,
  verifyWebhookSignature,
  videoWebhookEventSchema,
  WebhookParseError,
} from "./webhooks.ts";
