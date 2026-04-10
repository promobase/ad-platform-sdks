export { createTikTokClient, createTikTokClientWithProperties, createTikTokOAuth, createTikTokWebhooks } from "./clients/index.ts";
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
  // Webhooks
  WebhookConfig,
  WebhookEventType,
} from "./clients/types.ts";
export { TikTokApiError } from "./errors.ts";
