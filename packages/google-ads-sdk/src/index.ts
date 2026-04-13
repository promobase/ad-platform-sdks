export type { GoogleAdsClient, GoogleAdsClientOptions } from "./client.ts";
export { createClient } from "./client.ts";
export type { Customer } from "./clients/customer.ts";
export { createCustomer } from "./clients/customer.ts";
export { BoundQueryBuilder, gaqlFactory } from "./clients/gaql/bound.ts";
export type { RowOf } from "./clients/gaql/builder.ts";
export { gaql, QueryBuilder } from "./clients/gaql/builder.ts";
export type {
  CreateAdGroupAdInput,
  CreateAdGroupInput,
  CreateCampaignBudgetInput,
  CreateCampaignInput,
  Ref,
} from "./clients/index.ts";
export type { GoogleAdsErrorDetail } from "./errors.ts";
export { GoogleAdsError, parseGoogleAdsError } from "./errors.ts";
export { Google } from "./namespace.ts";
export type { SearchRequest, SearchResponse } from "./pagination.ts";
export { paginate } from "./pagination.ts";
