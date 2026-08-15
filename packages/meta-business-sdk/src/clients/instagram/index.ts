import { createGraphClient } from "../../generated/client-factory.ts";
import { createAccount } from "./account.ts";
import { createComments } from "./comments.ts";
import { createContainers } from "./containers.ts";
import { createMedia } from "./media.ts";
import { createMessaging } from "./messaging.ts";
import { createOAuth } from "./oauth.ts";
import { resolvePolling } from "./polling.ts";
import { createStories } from "./stories.ts";
import type { InstagramClientOptions, InstagramTransportOptions, OAuthConfig } from "./types.ts";

export type * from "./types.ts";

export function createInstagramClient(opts: InstagramClientOptions) {
  const api = opts.api;
  const igAccountId = opts.igAccountId;
  const igUser = api.iGUser(igAccountId);
  const polling = resolvePolling(opts.polling);
  const containers = createContainers(api, igUser, opts.fetch, opts.signal);

  return {
    /** Generated Graph client for provider operations without a convenience wrapper. */
    api,
    credentialFamily: opts.credentialFamily,
    media: createMedia(api, containers, igUser, polling),
    stories: createStories(containers, polling),
    comments: createComments(api),
    messaging: createMessaging(api, igAccountId),
    account: createAccount(api, igAccountId),
    containers,
    webhooks: {
      /** Subscribe to Instagram webhook events. Call after OAuth. */
      async subscribe(fields?: string[]): Promise<{ success: boolean }> {
        return api.client.post<{ success: boolean }>(`${igAccountId}/subscribed_apps`, {
          subscribed_fields: (fields ?? ["comments", "messages", "message_edit"]).join(","),
        });
      },
      async unsubscribe(): Promise<void> {
        return api.client.delete(`${igAccountId}/subscribed_apps`);
      },
    },
  };
}

function createInstagramTransportClient(
  opts: InstagramTransportOptions,
  credentialFamily: "instagram-login" | "facebook-login",
  baseUrl: string,
) {
  const { accessToken, igAccountId, polling, fetch, signal, ...graphOptions } = opts;
  const api = createGraphClient({
    ...graphOptions,
    accessToken,
    baseUrl,
    fetch,
    signal,
  });

  return createInstagramClient({ api, igAccountId, polling, fetch, signal, credentialFamily });
}

/** Create an Instagram client for Instagram Login credentials. */
export function createInstagramLoginClient(opts: InstagramTransportOptions) {
  return createInstagramTransportClient(opts, "instagram-login", "https://graph.instagram.com");
}

/** Create an Instagram client for Facebook Login/Page-linked credentials. */
export function createFacebookGraphInstagramClient(opts: InstagramTransportOptions) {
  return createInstagramTransportClient(opts, "facebook-login", "https://graph.facebook.com");
}

export function createInstagramOAuth(config: OAuthConfig) {
  return createOAuth(config);
}
