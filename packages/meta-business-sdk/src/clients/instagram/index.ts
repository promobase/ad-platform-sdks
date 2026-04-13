import { createAccount } from "./account.ts";
import { createComments } from "./comments.ts";
import { createContainers } from "./containers.ts";
import { createMedia } from "./media.ts";
import { createMessaging } from "./messaging.ts";
import { createOAuth } from "./oauth.ts";
import { resolvePolling } from "./polling.ts";
import { createStories } from "./stories.ts";
import type { InstagramClientOptions, OAuthConfig } from "./types.ts";

export type * from "./types.ts";

export function createInstagramClient(opts: InstagramClientOptions) {
  const api = opts.api;
  const igAccountId = opts.igAccountId;
  const igUser = api.iGUser(igAccountId);
  const polling = resolvePolling(opts.polling);
  const containers = createContainers(api, igUser);

  return {
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
    },
  };
}

export function createInstagramOAuth(config: OAuthConfig) {
  return createOAuth(config);
}
