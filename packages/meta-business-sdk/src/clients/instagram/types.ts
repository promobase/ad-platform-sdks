// Re-export generated types consumers will use
export type { IGMediaFields } from "../../generated/objects/ig-media.ts";
export type { IGCommentFields } from "../../generated/objects/ig-comment.ts";
export type { IGUserFields } from "../../generated/objects/ig-user.ts";
export type { InstagramInsightsResultFields } from "../../generated/objects/instagram-insights-result.ts";

// Workflow-specific types (not in generated code)
export type MediaType = "IMAGE" | "VIDEO" | "REELS" | "STORIES" | "CAROUSEL";

// Container statuses (not in generated code — these are workflow-specific)
export type ContainerStatus = "EXPIRED" | "ERROR" | "FINISHED" | "IN_PROGRESS" | "PUBLISHED";

export interface PublishResult {
  id: string;
}

export interface PublishPhotoOptions {
  imageUrl: string;
  caption?: string;
  collaborators?: string[];
}

export interface PublishReelOptions {
  videoUrl: string;
  caption?: string;
  collaborators?: string[];
  shareToFeed?: boolean;
}

export interface CarouselItem {
  type: "photo" | "video";
  url: string;
}

export interface PublishCarouselOptions {
  items: CarouselItem[];
  caption?: string;
  collaborators?: string[];
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
