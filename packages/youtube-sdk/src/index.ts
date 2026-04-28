export { createYouTubeClient, YouTubeClient, type YouTubeClientOptions } from "./client.ts";
export { YouTubeApiError, YouTubeUploadError } from "./errors.ts";
export * from "./generated/index.ts";
export { YouTube } from "./namespace.ts";
export type {
  YouTubeResumableUploadOptions,
  YouTubeUploadBody,
  YouTubeUploadSession,
} from "./uploads.ts";
