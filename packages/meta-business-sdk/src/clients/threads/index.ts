import type { ThreadsClientOptions, OAuthConfig } from "./types.ts";
import { ApiClient } from "@promobase/sdk-runtime";
import { resolvePolling } from "./polling.ts";
import { createPosts } from "./posts.ts";
import { createReplies } from "./replies.ts";
import { createAccount } from "./account.ts";
import { createContainers } from "./containers.ts";
import { createOAuth } from "./oauth.ts";

export type * from "./types.ts";

export function createThreadsClient(opts: ThreadsClientOptions) {
  const client = new ApiClient({
    accessToken: opts.accessToken,
    apiVersion: opts.apiVersion ?? "v1.0",
    baseUrl: "https://graph.threads.net",
  });
  const threadsUserId = opts.threadsUserId;
  const polling = resolvePolling(opts.polling);

  return {
    posts: createPosts(client, threadsUserId, polling),
    replies: createReplies(client),
    account: createAccount(client, threadsUserId),
    containers: createContainers(client, threadsUserId),
  };
}

export function createThreadsOAuth(config: OAuthConfig) {
  return createOAuth(config);
}
