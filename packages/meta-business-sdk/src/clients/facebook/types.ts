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

// Webhook event types are now defined via Zod schemas in ../webhooks-schemas.ts
