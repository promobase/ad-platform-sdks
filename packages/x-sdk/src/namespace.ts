import { createXDirectMessages } from "./direct-messages.js";
import type { BaseClientOptions } from "./generated/index.js";
import { XApiClient } from "./generated/index.js";
import { createXOAuthAdapter } from "./oauth-adapters.ts";
import { createXOAuth } from "./oauth.js";

export const X = {
  createClient(opts: BaseClientOptions) {
    const client = new XApiClient(opts);
    return Object.assign(client, {
      tweets: client.posts,
      directMessages: createXDirectMessages(opts),
    });
  },
  OAuth: createXOAuth,
  oauth: createXOAuthAdapter,
};
