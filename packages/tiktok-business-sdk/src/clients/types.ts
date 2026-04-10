// -- OAuth --

export interface OAuthConfig {
  clientKey: string;
  clientSecret: string;
  redirectUri: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  open_id: string;
}

// -- Client --

export interface TikTokClientOptions {
  accessToken: string;
  businessId: string;
}

// -- API response envelope --

export interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

// -- Video publish --

export interface MusicSoundInfo {
  music_sound_id: string;
  music_sound_volume: number;
  music_sound_start?: number;
  music_sound_end?: number;
  video_original_sound_volume?: number;
}

export interface PublishVideoOptions {
  videoUrl: string;
  customThumbnailUrl?: string;
  caption?: string;
  privacyLevel?: PrivacyLevel;
  disableComment?: boolean;
  disableDuet?: boolean;
  disableStitch?: boolean;
  thumbnailOffset?: number;
  isBrandOrganic?: boolean;
  isBrandedContent?: boolean;
  ttoInviteLink?: string;
  isAiGenerated?: boolean;
  uploadToDraft?: boolean;
  isAdsOnly?: boolean;
  musicSoundInfo?: MusicSoundInfo;
}

// -- Photo publish --

export type PrivacyLevel = "PUBLIC_TO_EVERYONE" | "MUTUAL_FOLLOW_FRIENDS" | "FOLLOWER_OF_CREATOR" | "SELF_ONLY";

export interface PublishPhotoOptions {
  photoUrls: string[];
  photoCoverIndex?: number;
  privacyLevel: PrivacyLevel;
  title?: string;
  caption?: string;
  disableComment?: boolean;
  autoAddMusic?: boolean;
  isBrandOrganic?: boolean;
  isBrandedContent?: boolean;
  isDraft?: boolean;
  musicSoundInfo?: Pick<MusicSoundInfo, "music_sound_id">;
}

// -- Publish status --

export type PublishStatus = "PROCESSING_DOWNLOAD" | "PUBLISH_COMPLETE" | "FAILED" | "SEND_TO_USER_INBOX";

export interface PublishStatusResponse {
  status: PublishStatus;
  post_ids?: string[];
  reason?: string;
}

// -- Video list --

export type VideoField =
  | "item_id" | "media_type" | "thumbnail_url" | "share_url" | "embed_url"
  | "caption" | "video_duration" | "likes" | "comments" | "shares" | "favorites"
  | "create_time" | "reach" | "video_views"
  | "total_time_watched" | "average_time_watched" | "full_video_watched_rate"
  | "new_followers" | "profile_views" | "website_clicks" | "phone_number_clicks"
  | "lead_submissions" | "app_download_clicks" | "email_clicks" | "address_clicks"
  | "video_view_retention" | "impression_sources" | "audience_genders"
  | "audience_countries" | "audience_cities" | "audience_types" | "engagement_likes";

export interface ListVideosOptions {
  fields?: VideoField[];
  videoIds?: string[];
  adPostOnly?: boolean;
  cursor?: number;
  maxCount?: number;
}

export interface VideoItem {
  item_id: string;
  media_type?: "VIDEO" | "PHOTO";
  thumbnail_url?: string;
  share_url?: string;
  embed_url?: string;
  caption?: string;
  video_duration?: number;
  likes?: number;
  comments?: number;
  shares?: number;
  favorites?: number;
  create_time?: number;
  reach?: number;
  video_views?: number;
  [key: string]: unknown;
}

export interface ListVideosResponse {
  videos: VideoItem[];
  cursor: number;
  has_more: boolean;
}

// -- Account --

export type AccountField =
  | "is_business_account" | "profile_image" | "username" | "profile_deep_link"
  | "display_name" | "bio_description" | "is_verified"
  | "following_count" | "followers_count" | "total_likes" | "videos_count"
  | "audience_ages" | "audience_genders" | "audience_countries" | "audience_cities"
  | "video_views" | "unique_video_views" | "profile_views" | "likes" | "comments"
  | "shares" | "followers_count" | "phone_number_clicks" | "lead_submissions"
  | "app_download_clicks" | "bio_link_clicks" | "email_clicks" | "address_clicks"
  | "daily_total_followers" | "daily_new_followers" | "daily_lost_followers"
  | "audience_activity" | "engaged_audience";

export interface AccountInfoOptions {
  fields?: AccountField[];
  startDate?: string;
  endDate?: string;
}

// -- Comments --

export interface CommentItem {
  comment_id: string;
  video_id: string;
  unique_identifier: string;
  create_time: string;
  text: string;
  likes: number;
  replies: number;
  owner: boolean;
  liked: boolean;
  pinned: boolean;
  status: "PUBLIC" | "HIDDEN";
  username: string;
  display_name: string;
  profile_image: string;
  parent_comment_id?: string;
  reply_list?: CommentItem[];
  image_url?: string;
}

export interface ListCommentsOptions {
  videoId: string;
  commentIds?: string[];
  includeReplies?: boolean;
  status?: "PUBLIC" | "ALL";
  sortField?: "likes" | "replies" | "create_time";
  sortOrder?: "asc" | "desc" | "smart";
  cursor?: number;
  maxCount?: number;
}

export interface ListCommentsResponse {
  comments: CommentItem[];
  cursor: number;
  has_more: boolean;
}

export interface CreateCommentOptions {
  videoId: string;
  text?: string;
  imageUri?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface ReplyCommentOptions extends CreateCommentOptions {
  commentId: string;
  replyImageUrl?: string;
}

export interface ListRepliesOptions {
  videoId: string;
  commentId: string;
  status?: "PUBLIC" | "ALL";
  sortField?: "likes" | "replies" | "create_time";
  sortOrder?: "asc" | "desc";
  cursor?: number;
  maxCount?: number;
}

// -- URL Properties (domain verification for video_url) --

export type PropertyType = "DOMAIN" | "URL_PREFIX";

export interface PropertyInfo {
  propertyType: PropertyType;
  propertyUrl: string;
  propertyStatus: number;
  signature?: string;
  fileName?: string;
}

export interface AddPropertyOptions {
  propertyType: PropertyType;
  propertyUrl: string;
}

// -- Webhooks --

export type WebhookEventType = "VIDEO" | "COMMENT" | "BRAND_MENTION" | "DIRECT_MESSAGE";

export interface WebhookConfig {
  appId: string;
  appSecret: string;
}

// -- Video Settings --

export interface VideoSettings {
  privacy_level_options: PrivacyLevel[];
  max_video_post_duration_sec: number;
  comment_disabled: boolean;
  duet_disabled: boolean;
  stitch_disabled: boolean;
}

// -- Hashtag Suggestions --

export interface HashtagSuggestion {
  name: string;
  view_count: number;
}

// -- Token Inspector --

export interface TokenInfo {
  app_id: string;
  creator_id: string;
  scope: string;
}

// -- Benchmarks --

export type BusinessCategory =
  | "ART_AND_CRAFTS" | "AUTOMOTIVE_AND_TRANSPORTATION" | "BABY"
  | "BEAUTY" | "CLOTHING_AND_ACCESSORIES" | "EDUCATION_AND_TRAINING"
  | "ELECTRONICS" | "FINANCE_AND_INVESTING" | "FOOD_AND_BEVERAGE"
  | "GAMING" | "HEALTH_AND_WELLNESS" | "HOME_FURNITURE_AND_APPLIANCES"
  | "MACHINERY_AND_EQUIPMENT" | "MEDIA_AND_ENTERTAINMENT" | "PERSONAL_BLOG"
  | "PETS" | "PROFESSIONAL_SERVICES" | "PUBLIC_ADMINISTRATION"
  | "REAL_ESTATE" | "RESTAURANTS_AND_BARS" | "SHOPPING_AND_RETAIL"
  | "SOFTWARE_AND_APPS" | "SPORTS_FITNESS_AND_OUTDOORS" | "TRAVEL_AND_TOURISM"
  | "OTHERS";

export interface BenchmarkData {
  business_category: string;
  average_likes: number;
  average_comments: number;
  average_shares: number;
  average_video_count: number;
  average_follower_count: number;
  average_follower_growth: number;
  average_engagement_rate: number;
  average_video_views: number;
}

// -- Spark Ads (Ad Authorization) --

export type AuthorizationDays = 7 | 30 | 60 | 180 | 365;

export interface SparkAdsAuthResult {
  item_id: string;
  auth_code: string;
  auth_code_start_time: string;
  auth_code_end_time: string;
  authorization_days: number;
}

export interface SparkAdsAuthStatus extends SparkAdsAuthResult {
  auth_code_status: "NOT_USED" | "IN_USE" | "EXPIRED";
}

// -- Discovery API --

export interface DiscoveryOptions {
  accessToken: string;
  advertiserId: string;
}

export type DiscoveryDateRange = "1DAY" | "7DAY" | "30DAY" | "120DAY";

export interface TrendingHashtag {
  hashtag_id: string;
  hashtag_name: string;
  rank_position: string;
  rank_change: string;
  views: number;
  views_global_lifetime: number;
  posts: number;
  posts_global_lifetime: number;
  top_country_list: string[];
  trending_history: { date: string; rank_position_daily: string; views_daily: number | null }[];
}

export interface HashtagDetail extends TrendingHashtag {
  hashtag_status: "ONLINE" | "OFFLINE";
  audience_insights?: { audience_ages: { age: string; percentage: number }[] };
}

export interface HashtagVideo {
  video_id: string;
  embed_url: string;
  share_url: string;
}

export interface TrendingMusicTrack {
  commercial_music_id: string;
  commercial_music_name: string;
  artist: string;
  duration: number;
  thumbnail_url: string;
  preview_url: string;
  genres: string[];
  rank_position: string;
  trending_history: { date: string; rank_position_daily: string | null }[];
  full_duration_song_clip?: { preview_url: string; duration: number; song_clip_id: string };
  trending_song_clip?: { preview_url: string; duration: number; song_clip_id: string };
}

export type MusicDateRange = "1DAY" | "7DAY" | "30DAY" | "90DAY";

// -- Mentions API --

export type MentionVideoField =
  | "item_id" | "create_time" | "video_link" | "caption"
  | "likes" | "comments" | "shares" | "thumbnail_url"
  | "views" | "reach" | "creator_handle_name";

export interface MentionVideo {
  item_id: string;
  create_time?: string;
  video_link?: string;
  caption?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  thumbnail_url?: string;
  views?: number | null;
  reach?: number | null;
  creator_handle_name?: string;
}

export interface ListMentionedVideosOptions {
  fields?: MentionVideoField[];
  sortField?: "CREATE_TIME" | "LIKES" | "COMMENTS" | "SHARES";
  sortType?: "ASC" | "DESC";
  numberOfDays?: number;
  regions?: string[];
  cursor?: number;
  maxCount?: number;
}

export type MentionCommentField =
  | "item_id" | "video_link" | "caption" | "video_likes" | "thumbnail_url"
  | "commenter_display_name" | "comment_id" | "comment_type"
  | "comment_text" | "comment_create_time" | "comment_likes";

export interface MentionComment {
  item_id?: string;
  video_link?: string;
  caption?: string;
  video_likes?: number;
  thumbnail_url?: string;
  commenter_display_name?: string;
  comment_id: string;
  comment_type?: "COMMENT" | "REPLY";
  comment_text?: string;
  comment_create_time?: string;
  comment_likes?: number;
}

export interface ListMentionedCommentsOptions {
  fields?: MentionCommentField[];
  sortField?: "VIDEO_LIKES" | "COMMENT_CREATE_TIME" | "COMMENT_LIKES";
  sortType?: "ASC" | "DESC";
  numberOfDays?: number;
  regions?: string[];
  cursor?: number;
  maxCount?: number;
}

export interface BrandHashtagInfo {
  hashtag: string;
  create_date: string;
  post_count?: number;
  like_count?: number;
  mention_post_rank?: number;
}

export interface ListBrandHashtagVideosOptions {
  hashtag?: string;
  fields?: (MentionVideoField | "matched_hashtags")[];
  sortField?: "CREATE_TIME" | "LIKES" | "COMMENTS" | "SHARES";
  sortOrder?: "ASC" | "DESC";
  numberOfDays?: number;
  regions?: string[];
  cursor?: number;
  maxCount?: number;
}

// -- Business Messaging --

export type MessageType = "TEXT" | "IMAGE" | "SHARE_POST" | "TEMPLATE" | "SENDER_ACTION";
export type SenderAction = "TYPING" | "MARK_READ";
export type TemplateType = "QA_BUTTON_CARD" | "QA_LINK_CARD";
export type ConversationType = "STRANGER" | "SINGLE";
export type AutoMessageType = "WELCOME_MESSAGE" | "SUGGESTED_QUESTION" | "CHAT_PROMPT";

export interface TemplateButton {
  type: "REPLY";
  title: string;
  id?: string;
}

export interface SendMessageOptions {
  conversationId?: string;
  messageType: MessageType;
  text?: { body: string };
  image?: { media_id: string };
  sharePost?: { item_id: string };
  template?: { type: TemplateType; title: string; buttons: TemplateButton[] };
  senderAction?: SenderAction;
  referencedMessageId?: string;
  directReply?: { replyType: "COMMENT_REPLY"; commentId: string };
}

export interface Conversation {
  conversation_id: string;
  update_time: number;
  referral?: {
    ad?: { advertiser_id: string; ad_id: string; timestamp: number; ad_name: string; embed_url: string }[];
    short_link?: { ref: string; prefilled_message: string; prefilled_message_audit_status: string }[];
  };
}

export interface MessageItem {
  sender: string;
  recipient: string;
  conversation_id: string;
  message_id: string;
  timestamp: number;
  message_type: string;
  text?: { body: string };
  image?: { media_id: string };
  share_post?: { embed_url: string };
  video?: { media_id: string };
  sticker?: { url: string };
  emoji?: { url: string };
  template?: { type: string; title: string; buttons: TemplateButton[] };
  reactions?: { type: string; emoji?: string; unique_identifier: string; timestamp: number }[];
  from_user?: { role: string; id: string };
  to_user?: { role: string; id: string };
  referenced_message_info?: { referenced_message_id: string };
  [key: string]: unknown;
}

export interface MessageParticipant {
  role: "BUSINESS_ACCOUNT" | "PERSONAL_ACCOUNT";
  id: string;
  display_name: string;
  profile_image: string;
  is_follower?: boolean;
}

export interface CreateAutoMessageOptions {
  autoMessageType: AutoMessageType;
  welcomeMessage?: { content: string };
  suggestedQuestion?: { question: string; answer: string };
  chatPrompt?: { title: string; content: string };
}

export interface AutoMessage {
  auto_message_id: string;
  auto_message_type: AutoMessageType;
  audit_status: "REVIEWING" | "APPROVED" | "REJECTED";
  welcome_message?: { content: string };
  suggested_question?: { question: string; answer: string };
  chat_prompt?: { title: string; content: string };
}
