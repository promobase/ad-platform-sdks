import type { InstagramClientOptions } from "./types.ts";
import { resolvePolling } from "./polling.ts";
import { createContainers } from "./containers.ts";
import { createMedia } from "./media.ts";
import { createStories } from "./stories.ts";
import { createComments } from "./comments.ts";
import { createAccount } from "./account.ts";

export { type InstagramClientOptions } from "./types.ts";
export type * from "./types.ts";

export function createInstagramClient(opts: InstagramClientOptions) {
  const client = opts.api.client;
  const igAccountId = opts.igAccountId;
  const polling = resolvePolling(opts.polling);

  return {
    media: createMedia(client, igAccountId, polling),
    stories: createStories(client, igAccountId, polling),
    comments: createComments(client),
    account: createAccount(client, igAccountId),
    containers: createContainers(client, igAccountId),
  };
}
