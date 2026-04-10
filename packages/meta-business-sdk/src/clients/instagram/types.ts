export type MediaType = "IMAGE" | "VIDEO" | "REELS" | "STORIES" | "CAROUSEL";

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
  items: CarouselItem[];  // max 10
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

export interface MediaInsight {
  name: string;
  period: string;
  value: number;
}

export interface CommentData {
  id: string;
  text: string;
  username?: string;
  timestamp?: string;
}
