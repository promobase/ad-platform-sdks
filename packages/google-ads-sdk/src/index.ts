export { Google } from "./namespace.ts";
export { createClient } from "./client.ts";
export type { GoogleAdsClient, GoogleAdsClientOptions } from "./client.ts";
export { GoogleAdsError, parseGoogleAdsError } from "./errors.ts";
export type { GoogleAdsErrorDetail } from "./errors.ts";
export { paginate } from "./pagination.ts";
export type { SearchRequest, SearchResponse } from "./pagination.ts";
export { createCustomer } from "./clients/customer.ts";
export type { Customer } from "./clients/customer.ts";
export type {
  CreateCampaignBudgetInput,
  CreateCampaignInput,
  CreateAdGroupInput,
  CreateAdGroupAdInput,
  Ref,
} from "./clients/index.ts";
