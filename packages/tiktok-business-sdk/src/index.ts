export {
  createTikTokClient, createTikTokClientWithProperties,
  createTikTokOAuth, createTikTokWebhooks, createTikTokDiscovery,
} from "./clients/index.ts";

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

export { TikTokApiError } from "./errors.ts";
