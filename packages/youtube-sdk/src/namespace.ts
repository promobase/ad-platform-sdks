import { createYouTubeClient } from "./client.ts";
import { createYouTubeOAuthAdapter } from "./oauth-adapters.ts";
import { createYouTubeOAuth, YouTubeOAuthScopes } from "./oauth.ts";

export const YouTube = {
  createClient: createYouTubeClient,
  OAuth: createYouTubeOAuth,
  oauth: createYouTubeOAuthAdapter,
  Scopes: YouTubeOAuthScopes,
};
