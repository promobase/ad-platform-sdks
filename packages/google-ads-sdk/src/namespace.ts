import { createClient } from "./client.ts";
import { GoogleAdsError } from "./errors.ts";
import { paginate } from "./pagination.ts";
import * as services from "./generated/v23/services/index.ts";

export const Google = {
  createClient,
  Ads: {
    ...services,
    paginate,
  },
  Errors: { GoogleAdsError },
} as const;
