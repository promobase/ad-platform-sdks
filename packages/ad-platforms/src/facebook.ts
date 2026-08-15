/** Platform-first Facebook entrypoint. */
export type {
  ApiClient,
  FacebookPageClientOptions,
  GraphClientOptions,
  GraphRateLimiterOptions,
} from "@openpromo/meta";
export {
  createFacebookOAuth,
  createFacebookPageClient,
  Facebook,
  FacebookApiError,
  createGraphClient as createFacebookGraphClient,
} from "@openpromo/meta";
