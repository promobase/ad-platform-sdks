import type { YouTubeVideoProperty } from "../index.ts";

// Generated from google.ads.googleads.v25.common.YouTubeVideoAttributeMetadata. Do not edit by hand.
export interface YouTubeVideoAttributeMetadata {
  thumbnailUrl?: string;
  videoUrl?: string;
  viewsCount?: string;
  likesCount?: string;
  commentsCount?: string;
  videoProperties?: YouTubeVideoProperty[];
  publishDate?: string;
  channelId?: string;
  channelName?: string;
  channelUrl?: string;
}
