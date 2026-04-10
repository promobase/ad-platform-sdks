// --- Namespace (recommended entry point) ---
export { TikTok } from "./namespace.ts";

// --- Client factories ---
export {
  createTikTokClient, createTikTokClientWithProperties,
  createTikTokOAuth, createTikTokWebhooks, createTikTokDiscovery,
} from "./clients/index.ts";

// --- Core infrastructure ---
export { TikTokApiClient } from "./api-client.ts";
export type { TikTokApiClientOptions } from "./api-client.ts";
export { TikTokApiError } from "./errors.ts";
export { TikTokRateLimiter } from "./rate-limiter.ts";
export type { TikTokRateLimiterOptions } from "./rate-limiter.ts";
export { TikTokCursor } from "./pagination.ts";
export type { TikTokCursorOptions, TikTokPaginatedResponse } from "./pagination.ts";

// --- Webhook verification + parsing ---
export {
  verifyWebhookSignature,
  WebhookParseError,
  // Throwing parsers
  parseTikTokWebhook,
  parseVideoWebhook,
  parseCommentWebhook,
  parseMentionWebhook,
  parseDMWebhook,
  // Safe parsers (never throw)
  safeParseTikTokWebhook,
  safeParseVideoWebhook,
  safeParseCommentWebhook,
  safeParseMentionWebhook,
  safeParseDMWebhook,
} from "./webhooks.ts";
export type { WebhookParseOptions, WebhookParseResult } from "./webhooks.ts";

// --- Webhook Zod schemas ---
export {
  tiktokWebhookEventSchema,
  videoWebhookEventSchema,
  commentWebhookEventSchema,
  mentionWebhookEventSchema,
  dmWebhookEventSchema,
  publishEventTypes,
  commentEventTypes,
  mentionEventTypes,
  dmEventTypes,
  publishFailedContentSchema,
  publishCompleteContentSchema,
  publishPubliclyAvailableContentSchema,
  publishNoLongerAvailableContentSchema,
  commentContentSchema,
  mentionContentSchema,
  dmContentSchema,
} from "./webhooks.ts";
export type {
  TikTokWebhookEvent,
  VideoWebhookEvent,
  CommentWebhookEvent,
  MentionWebhookEvent,
  DMWebhookEvent,
  PublishFailedContent,
  PublishCompleteContent,
  PublishPubliclyAvailableContent,
  PublishNoLongerAvailableContent,
  CommentContent,
  MentionContent,
  DMContent,
} from "./webhooks.ts";

// --- Client types ---
export type {
  TikTokClientOptions,
  OAuthConfig,
  TokenResponse,
  TokenInfo,
  TikTokResponse,
  // Video
  PublishVideoOptions,
  PublishStatusResponse,
  PublishStatus,
  ListVideosOptions,
  ListVideosResponse,
  VideoItem,
  VideoField,
  MusicSoundInfo,
  VideoSettings,
  // Photo
  PublishPhotoOptions,
  PrivacyLevel,
  // Comments
  ListCommentsOptions,
  ListCommentsResponse,
  ListRepliesOptions,
  CommentItem,
  CreateCommentOptions,
  ReplyCommentOptions,
  // Account
  AccountInfoOptions,
  AccountField,
  HashtagSuggestion,
  BenchmarkData,
  BusinessCategory,
  // Properties
  PropertyInfo,
  PropertyType,
  AddPropertyOptions,
  // Webhooks (client management)
  WebhookConfig,
  WebhookEventType,
  // Spark Ads
  AuthorizationDays,
  SparkAdsAuthResult,
  SparkAdsAuthStatus,
  // Discovery
  DiscoveryOptions,
  DiscoveryDateRange,
  MusicDateRange,
  TrendingHashtag,
  HashtagDetail,
  HashtagVideo,
  TrendingMusicTrack,
  // Mentions
  MentionVideo,
  MentionVideoField,
  ListMentionedVideosOptions,
  MentionComment,
  MentionCommentField,
  ListMentionedCommentsOptions,
  BrandHashtagInfo,
  ListBrandHashtagVideosOptions,
  // Messaging
  MessageType,
  SenderAction,
  TemplateType,
  ConversationType,
  AutoMessageType,
  TemplateButton,
  SendMessageOptions,
  Conversation,
  MessageItem,
  MessageParticipant,
  CreateAutoMessageOptions,
  AutoMessage,
} from "./clients/types.ts";
