/**
 * Namespaced API for the Snapchat Marketing SDK.
 *
 * Usage:
 *   import { Snapchat } from "@openpromo/snapchat";
 *
 *   // OAuth
 *   const oauth = Snapchat.OAuth({ clientId: "...", clientSecret: "...", redirectUri: "..." });
 *   const url = oauth.getAuthorizationUrl({ scopes: [Snapchat.Scopes.Marketing] });
 *   const { access_token } = await oauth.exchangeCode(code);
 *
 *   // Client — full Ads API surface (214 generated endpoints)
 *   const snap = Snapchat.createClient({ accessToken });
 *   const orgs = await snap.organizations.listWithAdAccounts({});
 *   const campaigns = snap.campaigns.list({ adAccountId: "..." });
 *   for await (const campaign of campaigns) { ... }
 *   const media = await snap.media.createMedia({ adAccountId, name: "Hero", type: "VIDEO" });
 *   await snap.media.uploadMedia({ mediaId: media.id, file });
 */

import type { SnapchatApiClientOptions } from "./api-client.ts";
import { SnapchatApiClient } from "./api-client.ts";
import { SnapchatApiError } from "./errors.ts";
import {
  createAdAccountsClient,
  createAdSquadOutcomesClient,
  createAdSquadUiRenderDataClient,
  createAdSquadsClient,
  createAdsClient,
  createAudienceCreationCustomerListsClient,
  createAudienceCreationLookalikesClient,
  createAudienceCreationProfileEngagementClient,
  createAudienceInsightsClient,
  createAudienceSizeClient,
  createAuditLogsClient,
  createAuthenticationClient,
  createBidEstimateClient,
  createBillingCentersClient,
  createCampaignsClient,
  createCreativesClient,
  createDynamicCollectionsAdsClient,
  createDynamicProductAdsClient,
  createDynamicStoryAdsClient,
  createEventDetailsClient,
  createFundingSourcesClient,
  createInteractionZonesClient,
  createInvoicesClient,
  createLeadGenerationAdsClient,
  createLensesClient,
  createMeasurementClient,
  createMediaClient,
  createMembersClient,
  createOrganizationsClient,
  createReachAndFrequencyClient,
  createRolesClient,
  createSnapAppIdClient,
  createSnapPixelClient,
  createTargetingClient,
  createTransactionsClient,
  createUserClient,
} from "./generated/index.ts";
import { createSnapchatOAuth, SnapchatScopes } from "./oauth.ts";
import { SnapchatCursor } from "./pagination.ts";

export const Snapchat = {
  /** Create a client over the Snapchat Marketing (Ads) API. */
  createClient(opts: SnapchatApiClientOptions) {
    const api = new SnapchatApiClient(opts);
    return {
      api,
      adAccounts: createAdAccountsClient(api),
      adSquadOutcomes: createAdSquadOutcomesClient(api),
      adSquadUiRenderData: createAdSquadUiRenderDataClient(api),
      adSquads: createAdSquadsClient(api),
      ads: createAdsClient(api),
      audienceCreation: {
        customerLists: createAudienceCreationCustomerListsClient(api),
        lookalikes: createAudienceCreationLookalikesClient(api),
        profileEngagement: createAudienceCreationProfileEngagementClient(api),
      },
      audienceInsights: createAudienceInsightsClient(api),
      audienceSize: createAudienceSizeClient(api),
      auditLogs: createAuditLogsClient(api),
      authentication: createAuthenticationClient(api),
      bidEstimate: createBidEstimateClient(api),
      billingCenters: createBillingCentersClient(api),
      campaigns: createCampaignsClient(api),
      creatives: createCreativesClient(api),
      dynamicCollectionsAds: createDynamicCollectionsAdsClient(api),
      dynamicProductAds: createDynamicProductAdsClient(api),
      dynamicStoryAds: createDynamicStoryAdsClient(api),
      eventDetails: createEventDetailsClient(api),
      fundingSources: createFundingSourcesClient(api),
      interactionZones: createInteractionZonesClient(api),
      invoices: createInvoicesClient(api),
      leadGenerationAds: createLeadGenerationAdsClient(api),
      lenses: createLensesClient(api),
      measurement: createMeasurementClient(api),
      media: createMediaClient(api),
      members: createMembersClient(api),
      organizations: createOrganizationsClient(api),
      reachAndFrequency: createReachAndFrequencyClient(api),
      roles: createRolesClient(api),
      snapAppId: createSnapAppIdClient(api),
      snapPixel: createSnapPixelClient(api),
      targeting: createTargetingClient(api),
      transactions: createTransactionsClient(api),
      user: createUserClient(api),
    };
  },

  /** OAuth 2.0 client for the Snapchat Marketing API. */
  OAuth: createSnapchatOAuth,

  /** OAuth scopes. */
  Scopes: SnapchatScopes,

  /** Core HTTP client with retry, rate limiting, and error parsing. */
  ApiClient: SnapchatApiClient,

  /** Snapchat API error class. */
  ApiError: SnapchatApiError,

  /** Async-iterable cursor over paginated responses. */
  Cursor: SnapchatCursor,
} as const;

export type { SnapchatApiClientOptions } from "./api-client.ts";
export type { SnapchatOAuthConfig, SnapchatOAuthTokenResponse, SnapchatScope } from "./oauth.ts";
