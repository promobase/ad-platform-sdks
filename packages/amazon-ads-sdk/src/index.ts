// --- Namespace (recommended entry point) ---
export { AmazonAds } from "./namespace.ts";
export type {
  AmazonAdsApiClientOptions,
  AmazonAdsOAuthConfig,
  AmazonAdsOAuthTokenResponse,
  AmazonAdsScope,
} from "./namespace.ts";

// --- Core infrastructure ---
export { AmazonAdsApiClient, AmazonAdsBaseUrls } from "./api-client.ts";
export { AmazonAdsApiError } from "./errors.ts";

// --- OAuth ---
export { createAmazonAdsOAuth, AmazonAdsScopes } from "./oauth.ts";

// --- Generated types, namespaced per API spec (shared names like `state`
// --- exist in multiple specs, so they cannot be flat re-exported) ---
export * as SponsoredProductsTypes from "./generated/sponsored-products/types.ts";
export * as SponsoredProductsParams from "./generated/sponsored-products/params.ts";
export * as SponsoredBrandsTypes from "./generated/sponsored-brands/types.ts";
export * as SponsoredBrandsParams from "./generated/sponsored-brands/params.ts";
export * as SponsoredDisplayTypes from "./generated/sponsored-display/types.ts";
export * as SponsoredDisplayParams from "./generated/sponsored-display/params.ts";
export * as AmazonAdsApiTypes from "./generated/api/types.ts";
export * as AmazonAdsApiParams from "./generated/api/params.ts";
