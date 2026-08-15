import { createAccount } from "./account.ts";
import { createAnalytics } from "./analytics.ts";
import { createAssets } from "./assets.ts";
import { createLinkedInClient, type LinkedInClientOptions } from "./client.ts";
import { createComments } from "./comments.ts";
import { createLinkedInOAuthAdapter } from "./oauth-adapters.ts";
import { createLinkedInOAuth, LinkedInOAuthScopes } from "./oauth.ts";
import { createPosts } from "./posts.ts";
import type { LinkedInOAuthConfig } from "./types.ts";

export function createClient(opts: LinkedInClientOptions) {
  const client = createLinkedInClient(opts);
  return {
    client,
    posts: createPosts(client),
    assets: createAssets(client),
    comments: createComments(client),
    account: createAccount(client),
    analytics: createAnalytics(client),
  };
}

export const LinkedIn = {
  createClient,
  OAuth: {
    create: (config: LinkedInOAuthConfig) => createLinkedInOAuth(config),
  },
  oauth: createLinkedInOAuthAdapter,
  Scopes: LinkedInOAuthScopes,
};
