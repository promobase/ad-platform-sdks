import { createYouTubeClient } from "./client.ts";
import { createYouTubeOAuthAdapter } from "./oauth-adapters.ts";
import { createYouTubeOAuth } from "./oauth.ts";

export const YouTube = {
  createClient: createYouTubeClient,
  OAuth: createYouTubeOAuth,
  oauth: createYouTubeOAuthAdapter,
};
