export { createYouTubeClient, YouTubeClient, type YouTubeClientOptions } from "./client.ts";
export { YouTubeApiError, YouTubeUploadError } from "./errors.ts";
export {
  createYouTubeOAuth,
  YouTubeOAuthScopes,
  type YouTubeOAuthConfig,
  type YouTubeKnownOAuthScope,
  type YouTubeOAuthScope,
  type YouTubeOAuthTokenResponse,
} from "./oauth.ts";
export { createYouTubeOAuthAdapter, type YouTubeChannelAccount } from "./oauth-adapters.ts";
export * from "./generated/index.ts";
export { YouTube } from "./namespace.ts";
export type {
  YouTubeGenericResumableUploadOptions,
  YouTubeMediaUploadOperation,
  YouTubeResumableUploadOptions,
  YouTubeUploadBody,
  YouTubeUploadSession,
} from "./uploads.ts";
