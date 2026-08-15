import { createGraphClient } from "../../generated/client-factory.ts";
import { createAccount } from "./account.ts";
import { createComments } from "./comments.ts";
import { createFeed } from "./feed.ts";
import { createMessaging } from "./messaging.ts";
import { createOAuth } from "./oauth.ts";
import { createStories } from "./stories.ts";
import type { FacebookPageClientOptions, OAuthConfig } from "./types.ts";

const DEFAULT_WEBHOOK_FIELDS = [
  "feed",
  "messages",
  "message_edits",
  "message_echoes",
  "message_reactions",
  "message_reads",
  "message_deliveries",
  "messaging_postbacks",
  "messaging_referrals",
] as const;

export type * from "./types.ts";

export function createFacebookPageClient(opts: FacebookPageClientOptions) {
  const api =
    opts.api ??
    createGraphClient({
      accessToken: opts.accessToken,
      apiVersion: opts.apiVersion,
      fetch: opts.fetch,
      signal: opts.signal,
    });
  const pageId = opts.pageId;
  const accessToken = opts.accessToken;
  const page = api.page(pageId);

  return {
    /** Generated Graph client for provider operations without a convenience wrapper. */
    api,
    feed: createFeed(api, page, pageId, accessToken, opts.fetch, opts.signal),
    stories: createStories(pageId, accessToken, opts.fetch, opts.signal),
    comments: createComments(api),
    messaging: createMessaging(page),
    account: createAccount(api, pageId),
    webhooks: {
      async subscribe(fields?: string[]): Promise<{ success: boolean }> {
        return api.client.post<{ success: boolean }>(`${pageId}/subscribed_apps`, {
          subscribed_fields: (fields ?? DEFAULT_WEBHOOK_FIELDS).join(","),
        });
      },
      async unsubscribe(): Promise<void> {
        return api.client.delete(`${pageId}/subscribed_apps`);
      },
    },
  };
}

export function createFacebookOAuth(config: OAuthConfig) {
  return createOAuth(config);
}
