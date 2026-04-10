export type ThreadsMediaType = "TEXT" | "IMAGE" | "VIDEO" | "CAROUSEL";
export type ThreadsContainerStatus = "FINISHED" | "IN_PROGRESS" | "PUBLISHING" | "ERROR" | "EXPIRED";
export type ThreadsReplyControl = "everyone" | "accounts_you_follow" | "mentioned_only";

export interface ThreadsClientOptions {
  accessToken: string;
  threadsUserId: string;
  apiVersion?: string;  // default "v1.0"
  polling?: Partial<ThreadsPollingConfig>;
}

export interface ThreadsPollingConfig {
  delay: (ms: number) => Promise<void>;
  textIntervalMs: number;    // 1000ms
  videoIntervalMs: number;   // 2000ms
  maxAttempts: number;        // 15 for text/image, 30 for video
}

export interface PublishResult {
  id: string;
}

export interface PublishTextOptions {
  text: string;
  replyControl?: ThreadsReplyControl;
  allowlistedCountryCodes?: string[];
}

export interface PublishImageOptions {
  imageUrl: string;
  text?: string;
  replyControl?: ThreadsReplyControl;
}

export interface PublishVideoOptions {
  videoUrl: string;
  text?: string;
  replyControl?: ThreadsReplyControl;
}

export interface ThreadsCarouselItem {
  type: "image" | "video";
  url: string;
}

export interface PublishCarouselOptions {
  items: ThreadsCarouselItem[];  // max 10
  text?: string;
  replyControl?: ThreadsReplyControl;
}

export interface ReplyOptions {
  text: string;
  replyToId: string;
}

export interface ThreadsPost {
  id: string;
  text?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  timestamp?: string;
  permalink?: string;
  children?: { data: ThreadsPost[] };
}

export interface ThreadsInsight {
  name: string;
  values: { value: number }[];
}

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
export interface ThreadsWebhookPayload {
  app_id: string;
  topic: "moderate" | "interaction";
  target_id: string;
  time: number;
  subscription_id: string;
  values: {
    field: "replies" | "mentions" | "delete" | "publish";
    value: {
      id?: string;
      username?: string;
      text?: string;
      media_type?: string;
      permalink?: string;
      timestamp?: string;
      replied_to?: { id: string };
      root_post?: { id: string; owner_id: string; username: string };
      owner?: { owner_id: string };
      deleted_at?: string;
    };
  };
}
