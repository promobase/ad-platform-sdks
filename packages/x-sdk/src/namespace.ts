import type { BaseClientOptions } from "./generated/index.js";
import { XApiClient } from "./generated/index.js";

export const X = {
  createClient(opts: BaseClientOptions) {
    return new XApiClient(opts);
  },
};
