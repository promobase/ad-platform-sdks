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
