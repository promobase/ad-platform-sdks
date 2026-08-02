import { createYouTubeClient } from "./client.ts";
import { createYouTubeOAuth } from "./oauth.ts";

export const YouTube = {
  createClient: createYouTubeClient,
  OAuth: createYouTubeOAuth,
};
