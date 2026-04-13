import type { YouTubeVideoPrivacy, YouTubeVideoUploadState } from "../index.ts";

// Generated from google.ads.googleads.v23.resources.YouTubeVideoUpload. Do not edit by hand.
export interface YouTubeVideoUpload {
  resourceName?: string;
  videoUploadId?: string;
  channelId?: string;
  videoId?: string;
  state?: YouTubeVideoUploadState;
  videoTitle?: string;
  videoDescription?: string;
  videoPrivacy?: YouTubeVideoPrivacy;
}
