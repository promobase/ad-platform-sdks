/**
 * Namespaced API for the Pinterest SDK.
 *
 * Usage:
 *   import { Pinterest } from "@openpromo/pinterest";
 *
 *   // OAuth
 *   const oauth = Pinterest.OAuth({ clientId, clientSecret, redirectUri });
 *   const url = oauth.getAuthorizationUrl({ state, scopes: [Pinterest.Scopes.BoardsRead, Pinterest.Scopes.PinsRead, Pinterest.Scopes.AdsRead] });
 *   const { access_token } = await oauth.exchangeCode(code);
 *
 *   // Client — Pinterest REST API v5 (266 generated endpoints)
 *   const pinterest = Pinterest.createClient({ accessToken: access_token });
 *   const boards = await pinterest.boards.listBoards({});
 *   const adAccounts = await pinterest.adAccounts.listAdAccounts({});
 *   const campaigns = await pinterest.campaigns.listCampaigns({ adAccountId: adAccounts.items[0].id });
 */

import type { PinterestApiClientOptions } from "./api-client.ts";
import { PinterestApiClient } from "./api-client.ts";
import { PinterestApiError } from "./errors.ts";
import {
  createAdAccountsClient,
  createAdGroupsClient,
  createAdsClient,
  createAdvancedAuctionClient,
  createAudienceInsightsClient,
  createAudienceSharingClient,
  createAudiencesClient,
  createBillingClient,
  createBoardsClient,
  createBulkClient,
  createBusinessAccessAssetsClient,
  createBusinessAccessInviteClient,
  createBusinessAccessRelationshipsClient,
  createCampaignsClient,
  createCatalogFeedsClient,
  createCatalogItemsClient,
  createCatalogProductGroupsClient,
  createCatalogReportsClient,
  createCatalogsClient,
  createCatalogSupplementalClient,
  createConversionDeletionRequestsClient,
  createConversionEqsClient,
  createConversionEventsClient,
  createConversionTagsClient,
  createConversionsClient,
  createCustomerListUploadsClient,
  createCustomerListsClient,
  createCustomerSegmentClient,
  createIntegrationsClient,
  createKeywordsClient,
  createLabelsClient,
  createLeadAdsClient,
  createLeadFormsClient,
  createLeadsExportClient,
  createMediaClient,
  createMsotEventsClient,
  createNotificationClient,
  createOauthClient,
  createOrderLinesClient,
  createPinsClient,
  createProductGroupPromotionsClient,
  createProductTagsClient,
  createPromotionsClient,
  createResourcesClient,
  createSchedulesClient,
  createSearchClient,
  createTargetingTemplateClient,
  createTermsClient,
  createTermsOfServiceClient,
  createTrendsClient,
  createUserAccountClient,
} from "./generated/index.ts";
import { createPinterestOAuth, PinterestScopes } from "./oauth.ts";

export const Pinterest = {
  /** Create a client over the Pinterest REST API v5. */
  createClient(opts: PinterestApiClientOptions) {
    const api = new PinterestApiClient(opts);
    return {
      api,
      adAccounts: createAdAccountsClient(api),
      adGroups: createAdGroupsClient(api),
      ads: createAdsClient(api),
      advancedAuction: createAdvancedAuctionClient(api),
      audienceInsights: createAudienceInsightsClient(api),
      audienceSharing: createAudienceSharingClient(api),
      audiences: createAudiencesClient(api),
      billing: createBillingClient(api),
      boards: createBoardsClient(api),
      bulk: createBulkClient(api),
      businessAccessAssets: createBusinessAccessAssetsClient(api),
      businessAccessInvite: createBusinessAccessInviteClient(api),
      businessAccessRelationships: createBusinessAccessRelationshipsClient(api),
      campaigns: createCampaignsClient(api),
      catalogFeeds: createCatalogFeedsClient(api),
      catalogItems: createCatalogItemsClient(api),
      catalogProductGroups: createCatalogProductGroupsClient(api),
      catalogReports: createCatalogReportsClient(api),
      catalogs: createCatalogsClient(api),
      catalogSupplemental: createCatalogSupplementalClient(api),
      conversionDeletionRequests: createConversionDeletionRequestsClient(api),
      conversionEqs: createConversionEqsClient(api),
      conversionEvents: createConversionEventsClient(api),
      conversionTags: createConversionTagsClient(api),
      conversions: createConversionsClient(api),
      customerListUploads: createCustomerListUploadsClient(api),
      customerLists: createCustomerListsClient(api),
      customerSegment: createCustomerSegmentClient(api),
      integrations: createIntegrationsClient(api),
      keywords: createKeywordsClient(api),
      labels: createLabelsClient(api),
      leadAds: createLeadAdsClient(api),
      leadForms: createLeadFormsClient(api),
      leadsExport: createLeadsExportClient(api),
      media: createMediaClient(api),
      msotEvents: createMsotEventsClient(api),
      notification: createNotificationClient(api),
      oauth: createOauthClient(api),
      orderLines: createOrderLinesClient(api),
      pins: createPinsClient(api),
      productGroupPromotions: createProductGroupPromotionsClient(api),
      productTags: createProductTagsClient(api),
      promotions: createPromotionsClient(api),
      resources: createResourcesClient(api),
      schedules: createSchedulesClient(api),
      search: createSearchClient(api),
      targetingTemplate: createTargetingTemplateClient(api),
      terms: createTermsClient(api),
      termsOfService: createTermsOfServiceClient(api),
      trends: createTrendsClient(api),
      userAccount: createUserAccountClient(api),
    };
  },

  /** OAuth 2.0 client for Pinterest. */
  OAuth: createPinterestOAuth,

  /** OAuth scopes. */
  Scopes: PinterestScopes,

  /** Core HTTP client with retry, rate limiting, and error parsing. */
  ApiClient: PinterestApiClient,

  /** Pinterest API error class. */
  ApiError: PinterestApiError,
} as const;

export type { PinterestApiClientOptions } from "./api-client.ts";
export type { PinterestOAuthConfig, PinterestOAuthTokenResponse, PinterestScope } from "./oauth.ts";
