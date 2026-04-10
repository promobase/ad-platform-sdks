import type { FacebookPageClientOptions, OAuthConfig } from "./types.ts";
import { createFeed } from "./feed.ts";
import { createStories } from "./stories.ts";
import { createComments } from "./comments.ts";
import { createAccount } from "./account.ts";
import { createOAuth } from "./oauth.ts";

export type * from "./types.ts";

export function createFacebookPageClient(opts: FacebookPageClientOptions) {
  const api = opts.api;
  const pageId = opts.pageId;
  const accessToken = opts.accessToken;
  const page = api.page(pageId);

  return {
    feed: createFeed(api, page, pageId, accessToken),
    stories: createStories(pageId, accessToken),
    comments: createComments(api),
    account: createAccount(api, pageId),
  };
}

export function createFacebookOAuth(config: OAuthConfig) {
  return createOAuth(config);
}
