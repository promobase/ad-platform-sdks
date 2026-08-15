// Re-export generated types consumers will use

export type { IGCommentFields } from "../../generated/objects/ig-comment.ts";
export type { IGMediaFields } from "../../generated/objects/ig-media.ts";
export type { IGUserCreateMediaParams, IGUserFields } from "../../generated/objects/ig-user.ts";
export type { InstagramInsightsResultFields } from "../../generated/objects/instagram-insights-result.ts";
// Re-export generated container type
export type { ShadowIGMediaBuilderFields } from "../../generated/objects/shadow-ig-media-builder.ts";
export type {
  InstagramContainerStatus,
  InstagramContainerStatusCode,
} from "../../transports/instagram.ts";

export interface PublishResult {
  id: string;
}

/** Publish a single image post to the feed. */
export interface PublishPhotoOptions {
  imageUrl: string;
  caption?: string;
  altText?: string;
  collaborators?: string[];
  locationId?: string;
  userTags?: Record<string, unknown>[];
}

/** Publish a video post to the feed (all feed videos are reels). */
export interface PublishVideoOptions {
  videoUrl: string;
  caption?: string;
  collaborators?: string[];
  coverUrl?: string;
  locationId?: string;
  altText?: string;
  shareToFeed?: boolean;
  trialParams?: Record<string, unknown>;
  userTags?: Record<string, unknown>[];
}

export interface CarouselItem {
  type: "photo" | "video";
  url: string;
}

/** Publish a carousel (2-10 items) to the feed. */
export interface PublishCarouselOptions {
  items: CarouselItem[];
  caption?: string;
  collaborators?: string[];
  locationId?: string;
}

export interface PublishStoryOptions {
  imageUrl?: string;
  videoUrl?: string;
}

export type InstagramAttachmentType = "image" | "video" | "audio" | "file";

export type InstagramAttachment =
  | { type: InstagramAttachmentType; url: string }
  | { type: "MEDIA_SHARE"; mediaId: string };

export interface InstagramQuickReply {
  contentType: "text" | "user_phone_number" | "user_email";
  title: string;
  payload: string;
}

export type InstagramTemplateButton =
  | {
      type: "web_url";
      title: string;
      url: string;
      webviewHeightRatio?: "compact" | "tall" | "full";
    }
  | { type: "postback"; title: string; payload: string };

export interface InstagramGenericTemplateElement {
  title: string;
  imageUrl?: string;
  subtitle?: string;
  defaultAction?: Extract<InstagramTemplateButton, { type: "web_url" }>;
  buttons?: readonly InstagramTemplateButton[];
}

export type InstagramTemplate =
  | {
      type: "generic";
      elements: readonly InstagramGenericTemplateElement[];
    }
  | {
      type: "button";
      text: string;
      buttons: readonly InstagramTemplateButton[];
    };

export type InstagramMessageReaction = "love";

export interface InstagramAccountInsightsOptions {
  metrics: readonly string[];
  period: readonly string[];
  since?: string;
  until?: string;
  timeframe?: string;
  breakdown?: readonly string[];
}

export interface PollingConfig {
  delay: (ms: number) => Promise<void>;
  photoIntervalMs: number;
  videoIntervalMs: number;
  maxAttempts: number;
}

export interface InstagramClientOptions {
  api: ReturnType<typeof import("../../generated/index.ts").createClient>;
  igAccountId: string;
  /** Identifies which provider credential family owns the Graph client. */
  credentialFamily?: InstagramCredentialFamily;
  polling?: Partial<PollingConfig>;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

/** Instagram Business API credential families use different Graph hosts. */
export type InstagramCredentialFamily = "instagram-login" | "facebook-login";

export type InstagramTransportOptions = Omit<
  import("../../generated/client-factory.ts").GraphClientOptions,
  "accessToken" | "baseUrl"
> & {
  accessToken: string;
  igAccountId: string;
  polling?: Partial<PollingConfig>;
};

// OAuth types
export interface OAuthConfig {
  appId: string;
  appSecret: string;
  redirectUri: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
}

export interface ShortLivedToken {
  access_token: string;
  user_id: string;
}

export interface LongLivedToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface InstagramBusinessUserProfile {
  id: string;
  user_id?: string;
  username: string;
  name?: string;
  account_type?: "BUSINESS" | "MEDIA_CREATOR" | "PERSONAL";
  media_count?: number;
  followers_count?: number;
  follows_count?: number;
  biography?: string;
  profile_picture_url?: string;
  website?: string;
}

// Webhook event types are now defined via Valibot schemas in ../webhooks-schemas.ts
