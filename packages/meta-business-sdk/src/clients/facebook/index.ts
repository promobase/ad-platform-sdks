import { createAccount } from "./account.ts";
import { createComments } from "./comments.ts";
import { createFeed } from "./feed.ts";
import { createMessaging } from "./messaging.ts";
import { createOAuth } from "./oauth.ts";
import { createStories } from "./stories.ts";
import type { FacebookPageClientOptions, OAuthConfig } from "./types.ts";

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
    messaging: createMessaging(page),
    account: createAccount(api, pageId),
    webhooks: {
      async subscribe(fields?: string[]): Promise<{ success: boolean }> {
        return api.client.post<{ success: boolean }>(`${pageId}/subscribed_apps`, {
          subscribed_fields: (
            fields ?? ["feed", "messages", "message_edits", "message_echoes", "message_reactions"]
          ).join(","),
        });
      },
    },
  };
}

export function createFacebookOAuth(config: OAuthConfig) {
  return createOAuth(config);
}
