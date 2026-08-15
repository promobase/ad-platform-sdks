// Re-export generated types

export type { AdVideoFields } from "../../generated/objects/ad-video.ts";
export type { CommentFields } from "../../generated/objects/comment.ts";
export type { InsightsResultFields } from "../../generated/objects/insights-result.ts";
export type {
  PageCreateFeedParams,
  PageCreatePhotosParams,
  PageCreateVideosParams,
  PageFields,
} from "../../generated/objects/page.ts";
export type { PagePostFields } from "../../generated/objects/page-post.ts";
export type { PhotoFields } from "../../generated/objects/photo.ts";

export interface FacebookPageClientOptions {
  /** Optional preconfigured generated client; created automatically when omitted. */
  api?: ReturnType<typeof import("../../generated/index.ts").createClient>;
  pageId: string;
  accessToken: string; // needed for video upload flows (reels, stories)
  fetch?: typeof fetch;
  signal?: AbortSignal;
  apiVersion?: string;
}

export interface PublishTextPostOptions {
  message: string;
  link?: string;
  attachedMedia?: ReadonlyArray<{ mediaFbid: string }>;
  callToAction?: {
    type: string;
    value: { link: string };
  };
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
  fetch?: typeof fetch;
  signal?: AbortSignal;
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

export interface FacebookUserProfile {
  id: string;
  name: string;
  email?: string;
  picture?: { data?: { url?: string; width?: number; height?: number } };
}

export interface FacebookPermission {
  permission: string;
  status: string;
}

export interface FacebookPageInfo {
  id: string;
  name: string;
  access_token?: string;
  username?: string;
  category?: string;
  fan_count?: number;
  followers_count?: number;
  about?: string;
  picture?: { data?: { url?: string; width?: number; height?: number } };
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

export interface VideoUploadInput {
  uploadUrl: string;
  videoUrl: string;
}

export interface VideoUploadResult {
  success: boolean;
  message?: string;
}

export interface FacebookVideoDetails {
  id: string;
  source?: string;
  thumbnails?: { data: { uri: string }[] };
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

// Webhook event types are now defined via Valibot schemas in ../webhooks-schemas.ts
