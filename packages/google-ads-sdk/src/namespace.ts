import { createClient, type GoogleAdsClient } from "./client.ts";
import { GoogleAdsError } from "./errors.ts";
import { paginate } from "./pagination.ts";
import * as services from "./generated/v23/services/index.ts";
import { createCustomer } from "./clients/customer.ts";

export const Google = {
  createClient,
  Ads: {
    ...services,
    paginate,
    customer: (client: GoogleAdsClient, customerId: string) =>
      createCustomer(client.http, customerId),
  },
  Errors: { GoogleAdsError },
} as const;
