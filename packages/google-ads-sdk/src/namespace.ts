import { createClient, type GoogleAdsClient } from "./client.ts";
import { createCustomer } from "./clients/customer.ts";
import { gaql } from "./clients/gaql/builder.ts";
import { GoogleAdsError } from "./errors.ts";
import * as services from "./generated/v23/services/index.ts";
import { paginate } from "./pagination.ts";

export const Google = {
  createClient,
  Ads: {
    ...services,
    paginate,
    customer: (client: GoogleAdsClient, customerId: string) =>
      createCustomer(client.http, customerId),
    gaql,
  },
  Errors: { GoogleAdsError },
} as const;
