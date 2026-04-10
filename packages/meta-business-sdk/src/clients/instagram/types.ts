// Re-export generated types consumers will use
export type { IGMediaFields } from "../../generated/objects/ig-media.ts";
export type { IGCommentFields } from "../../generated/objects/ig-comment.ts";
export type { IGUserFields } from "../../generated/objects/ig-user.ts";
export type { InstagramInsightsResultFields } from "../../generated/objects/instagram-insights-result.ts";

// Re-export generated container type
export type { ShadowIGMediaBuilderFields } from "../../generated/objects/shadow-ig-media-builder.ts";
export type { IGUserCreateMediaParams } from "../../generated/objects/ig-user.ts";

export interface PublishResult {
  id: string;
}

/** Publish a single image post to the feed. */
export interface PublishPhotoOptions {
  imageUrl: string;
  caption?: string;
  collaborators?: string[];
  locationId?: string;
}

/** Publish a video post to the feed (all feed videos are reels). */
export interface PublishVideoOptions {
  videoUrl: string;
  caption?: string;
  collaborators?: string[];
  coverUrl?: string;
  locationId?: string;
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

export interface PollingConfig {
  delay: (ms: number) => Promise<void>;
  photoIntervalMs: number;
  videoIntervalMs: number;
  maxAttempts: number;
}

export interface InstagramClientOptions {
  api: ReturnType<typeof import("../../generated/index.ts").createClient>;
  igAccountId: string;
  polling?: Partial<PollingConfig>;
}

// OAuth types
export interface OAuthConfig {
  appId: string;
  appSecret: string;
  redirectUri: string;
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

// Webhook event types
export interface IGWebhookPayload {
  object: "instagram";
  entry: {
    id: string;
    time: number;
    messaging?: IGWebhookMessagingEvent[];
    changes?: IGWebhookChangeEvent[];
  }[];
}

export interface IGWebhookMessagingEvent {
  sender: { id: string };
  recipient: { id: string };
  timestamp: number;
  message?: { mid: string; text: string };
}

export interface IGWebhookChangeEvent {
  field: "comments" | "message_edit" | "message_reactions";
  value: {
    id?: string;
    comment_id?: string;
    parent_id?: string;
    text?: string;
    from?: { id: string; username: string };
    media?: { id: string; media_product_type?: string };
    created_time?: number;
  };
}
