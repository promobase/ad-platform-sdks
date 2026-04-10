import type { InstagramClientOptions, OAuthConfig } from "./types.ts";
import { resolvePolling } from "./polling.ts";
import { createContainers } from "./containers.ts";
import { createMedia } from "./media.ts";
import { createStories } from "./stories.ts";
import { createComments } from "./comments.ts";
import { createAccount } from "./account.ts";
import { createOAuth } from "./oauth.ts";

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
    account: createAccount(api, igAccountId),
    containers,
  };
}

export function createInstagramOAuth(config: OAuthConfig) {
  return createOAuth(config);
}
