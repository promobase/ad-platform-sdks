import { createAccount } from "./account.ts";
import { createAssets } from "./assets.ts";
import { createLinkedInClient, type LinkedInClientOptions } from "./client.ts";
import { createComments } from "./comments.ts";
import { createLinkedInOAuth } from "./oauth.ts";
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
  };
}

export const LinkedIn = {
  createClient,
  OAuth: {
    create: (config: LinkedInOAuthConfig) => createLinkedInOAuth(config),
  },
};
