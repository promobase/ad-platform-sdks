import type { BaseClientOptions } from "./generated/index.js";
import { XApiClient } from "./generated/index.js";

export const X = {
  createClient(opts: BaseClientOptions) {
    const client = new XApiClient(opts);
    return Object.assign(client, { tweets: client.posts });
  },
};
