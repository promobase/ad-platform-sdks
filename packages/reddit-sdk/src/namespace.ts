/**
 * Namespaced API for the Reddit SDK.
 *
 * Usage:
 *   import { Reddit } from "@mosaic/reddit";
 *
 *   // OAuth
 *   const oauth = Reddit.OAuth({ clientId, clientSecret, redirectUri });
 *   const url = oauth.getAuthorizationUrl({ state, scopes: [Reddit.Scopes.AdsRead, Reddit.Scopes.AdsEdit] });
 *   const { access_token, refresh_token } = await oauth.exchangeCode(code);
 *
 *   // Client — Reddit Ads API v3 (40 generated endpoints)
 *   const reddit = Reddit.createClient({ accessToken: access_token });
 *   const accounts = await reddit.accounts.listAccounts({});
 *   const campaigns = await reddit.campaigns.listCampaigns({ accountId: accounts[0].id });
 *   await reddit.campaigns.createCampaign({ accountId, name, objective: "LEADS", ... });
 */

import type { RedditApiClientOptions } from "./api-client.ts";
import { RedditApiClient } from "./api-client.ts";
import { RedditApiError } from "./errors.ts";
import {
  createAccountsClient,
  createAdGroupsClient,
  createAdsClient,
  createBidSuggestionsClient,
  createCampaignsClient,
  createConversionsClient,
  createCustomAudiencesClient,
  createFundingInstrumentsClient,
  createPixelsClient,
  createReportsClient,
  createSavedAudiencesClient,
  createStructuredPostsClient,
  createTargetingClient,
} from "./generated/index.ts";
import { createRedditOAuth, RedditScopes } from "./oauth.ts";

export const Reddit = {
  /** Create a client over the Reddit Ads API v3. */
  createClient(opts: RedditApiClientOptions) {
    const api = new RedditApiClient(opts);
    return {
      api,
      accounts: createAccountsClient(api),
      adGroups: createAdGroupsClient(api),
      ads: createAdsClient(api),
      bidSuggestions: createBidSuggestionsClient(api),
      campaigns: createCampaignsClient(api),
      conversions: createConversionsClient(api),
      customAudiences: createCustomAudiencesClient(api),
      fundingInstruments: createFundingInstrumentsClient(api),
      pixels: createPixelsClient(api),
      reports: createReportsClient(api),
      savedAudiences: createSavedAudiencesClient(api),
      structuredPosts: createStructuredPostsClient(api),
      targeting: createTargetingClient(api),
    };
  },

  /** OAuth 2.0 client for Reddit (adsread/adsedit scopes). */
  OAuth: createRedditOAuth,

  /** OAuth scopes. */
  Scopes: RedditScopes,

  /** Core HTTP client with retry, rate limiting, and envelope unwrapping. */
  ApiClient: RedditApiClient,

  /** Reddit API error class. */
  ApiError: RedditApiError,
} as const;

export type { RedditApiClientOptions } from "./api-client.ts";
export type { RedditOAuthConfig, RedditOAuthTokenResponse, RedditScope } from "./oauth.ts";
