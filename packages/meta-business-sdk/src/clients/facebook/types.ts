// Re-export generated types
export type { PageFields } from "../../generated/objects/page.ts";
export type { PagePostFields } from "../../generated/objects/page-post.ts";
export type { PhotoFields } from "../../generated/objects/photo.ts";
export type { AdVideoFields } from "../../generated/objects/ad-video.ts";
export type { CommentFields } from "../../generated/objects/comment.ts";
export type { InsightsResultFields } from "../../generated/objects/insights-result.ts";
export type { PageCreateFeedParams } from "../../generated/objects/page.ts";
export type { PageCreatePhotosParams } from "../../generated/objects/page.ts";
export type { PageCreateVideosParams } from "../../generated/objects/page.ts";

export interface FacebookPageClientOptions {
  api: ReturnType<typeof import("../../generated/index.ts").createClient>;
  pageId: string;
  accessToken: string; // needed for video upload flows (reels, stories)
}

export interface PublishTextPostOptions {
  message: string;
  link?: string;
  published?: boolean;
  scheduledPublishTime?: number | string;
}

export interface PublishPhotoPostOptions {
  url: string;
  caption?: string;
  published?: boolean;
  scheduledPublishTime?: number | string;
}

export interface PublishVideoPostOptions {
  url?: string;
  title?: string;
  description?: string;
}

export interface OAuthConfig {
  appId: string;
  appSecret: string;
  redirectUri: string;
}

export interface LongLivedToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface PageToken {
  id: string;
  name: string;
  access_token: string;
}

export interface PublishMultiPhotoOptions {
  photos: { url: string }[];
  message?: string;
  published?: boolean;
  scheduledPublishTime?: number | string;
}

export interface PublishVideoReelOptions {
  videoUrl: string;
  description?: string;
  videoState?: "PUBLISHED" | "DRAFT";
}

export interface PublishPhotoStoryOptions {
  photoUrl: string;
}

export interface PublishVideoStoryOptions {
  videoUrl: string;
  description?: string;
}

export interface VideoUploadSession {
  videoId: string;
  uploadUrl: string;
}

export interface VideoStatus {
  uploadingPhase?: { status: string };
  processingPhase?: { status: string };
  publishingPhase?: { status: string; errors?: unknown[] };
}

export interface PostAttachment {
  media?: { image?: { src: string } };
  subattachments?: { data: PostAttachment[] };
}

// Webhook event types
export interface FBWebhookPayload {
  object: "page";
  entry: {
    id: string;
    time: number;
    messaging?: FBWebhookMessagingEvent[];
    changes?: FBWebhookChangeEvent[];
  }[];
}

export interface FBWebhookMessagingEvent {
  sender: { id: string };
  recipient: { id: string };
  timestamp: number;
  message?: { mid: string; text: string };
}

export interface FBWebhookChangeEvent {
  field: "feed";
  value: {
    item: string;
    verb: "add" | "edited" | "remove";
    post_id?: string;
    comment_id?: string;
    parent_id?: string;
    message?: string;
    from?: { id: string; name: string };
    created_time?: number;
  };
}
