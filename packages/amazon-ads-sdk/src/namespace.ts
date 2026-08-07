/**
 * Namespaced API for the Amazon Ads SDK.
 *
 * Usage:
 *   import { AmazonAds } from "@openpromo/amazon-ads";
 *
 *   // LWA OAuth
 *   const oauth = AmazonAds.OAuth({ clientId, clientSecret, redirectUri });
 *   const url = oauth.getAuthorizationUrl({ state, scopes: [AmazonAds.Scopes.CampaignManagement] });
 *   const { access_token } = await oauth.exchangeCode(code);
 *
 *   // Client — Amazon Ads API v3 (166 generated endpoints)
 *   const amazon = AmazonAds.createClient({ accessToken: access_token, clientId, profileId: "123456" });
 *   const campaigns = await amazon.sponsoredProducts.campaigns.listSponsoredProductsCampaigns({});
 */

import type { AmazonAdsApiClientOptions } from "./api-client.ts";
import { AmazonAdsApiClient } from "./api-client.ts";
import { AmazonAdsApiError } from "./errors.ts";
import * as amazonAdsApi from "./generated/api/index.ts";
import * as sponsoredBrands from "./generated/sponsored-brands/index.ts";
import * as sponsoredDisplay from "./generated/sponsored-display/index.ts";
import * as sponsoredProducts from "./generated/sponsored-products/index.ts";
import { createAmazonAdsOAuth, AmazonAdsScopes } from "./oauth.ts";

export const AmazonAds = {
  /** Create a client over the Amazon Ads API v3. */
  createClient(opts: AmazonAdsApiClientOptions) {
    const api = new AmazonAdsApiClient(opts);
    return {
      api,
      sponsoredProducts: {
        adGroups: sponsoredProducts.createAdGroupsClient(api),
        budgetrules: sponsoredProducts.createBudgetrulesClient(api),
        consolidatedRecommendations: sponsoredProducts.createConsolidatedRecommendationsClient(api),
        campaignNegativeKeywords: sponsoredProducts.createCampaignNegativeKeywordsClient(api),
        campaignNegativeTargetingClauses:
          sponsoredProducts.createCampaignNegativeTargetingClausesClient(api),
        campaigns: sponsoredProducts.createCampaignsClient(api),
        optimizationRules: sponsoredProducts.createOptimizationRulesClient(api),
        budgetUsage: sponsoredProducts.createBudgetUsageClient(api),
        budgetRecommendationsAndMissedOpportunities:
          sponsoredProducts.createBudgetRecommendationsAndMissedOpportunitiesClient(api),
        budgetrulesrecommendation: sponsoredProducts.createBudgetrulesrecommendationClient(api),
        budgetRecommendationNewCampaigns:
          sponsoredProducts.createBudgetRecommendationNewCampaignsClient(api),
        multiCountryThemeBasedBidRecommendations:
          sponsoredProducts.createMultiCountryThemeBasedBidRecommendationsClient(api),
        keywordTargets: sponsoredProducts.createKeywordTargetsClient(api),
        keywords: sponsoredProducts.createKeywordsClient(api),
        negativeKeywords: sponsoredProducts.createNegativeKeywordsClient(api),
        negativeTargetingClauses: sponsoredProducts.createNegativeTargetingClausesClient(api),
        productTargeting: sponsoredProducts.createProductTargetingClient(api),
        productAds: sponsoredProducts.createProductAdsClient(api),
        campaignOptimizationRules: sponsoredProducts.createCampaignOptimizationRulesClient(api),
        keywordGroupTargetingRecommendations:
          sponsoredProducts.createKeywordGroupTargetingRecommendationsClient(api),
        targetpromotiongroups: sponsoredProducts.createTargetpromotiongroupsClient(api),
        targetingClauses: sponsoredProducts.createTargetingClausesClient(api),
        themeBasedBidRecommendations:
          sponsoredProducts.createThemeBasedBidRecommendationsClient(api),
        productRecommendationService:
          sponsoredProducts.createProductRecommendationServiceClient(api),
      },
      sponsoredBrands: {
        ads: sponsoredBrands.createAdsClient(api),
        adCreatives: sponsoredBrands.createAdCreativesClient(api),
        budgetrules: sponsoredBrands.createBudgetrulesClient(api),
        budgetUsage: sponsoredBrands.createBudgetUsageClient(api),
        budgetRecommendations: sponsoredBrands.createBudgetRecommendationsClient(api),
        budgetrulesrecommendation: sponsoredBrands.createBudgetrulesrecommendationClient(api),
        insights: sponsoredBrands.createInsightsClient(api),
        forecast: sponsoredBrands.createForecastClient(api),
        targetingRecommendations: sponsoredBrands.createTargetingRecommendationsClient(api),
        recommendations: sponsoredBrands.createRecommendationsClient(api),
        keywordRecommendations: sponsoredBrands.createKeywordRecommendationsClient(api),
        sbOptimizationRecommendations:
          sponsoredBrands.createSbOptimizationRecommendationsClient(api),
        optimizationRules: sponsoredBrands.createOptimizationRulesClient(api),
        productTargetingCategories: sponsoredBrands.createProductTargetingCategoriesClient(api),
        adgroups: sponsoredBrands.createAdgroupsClient(api),
        campaigns: sponsoredBrands.createCampaignsClient(api),
        adMigrations: sponsoredBrands.createAdMigrationsClient(api),
      },
      sponsoredDisplay: {
        snapshotApis: sponsoredDisplay.createSnapshotApisClient(api),
        brandSafetyRequestResults: sponsoredDisplay.createBrandSafetyRequestResultsClient(api),
        brandSafetyRequestStatus: sponsoredDisplay.createBrandSafetyRequestStatusClient(api),
        brandSafetyDenyListDomains: sponsoredDisplay.createBrandSafetyDenyListDomainsClient(api),
        budgetrules: sponsoredDisplay.createBudgetrulesClient(api),
        budgetUsage: sponsoredDisplay.createBudgetUsageClient(api),
        budgetRecommendations: sponsoredDisplay.createBudgetRecommendationsClient(api),
        recommendations: sponsoredDisplay.createRecommendationsClient(api),
        targetingRecommendations: sponsoredDisplay.createTargetingRecommendationsClient(api),
      },
      amazonAdsApi: {
        brandstoreeditions: amazonAdsApi.createBrandstoreeditionsClient(api),
        brandstoreeditionpublishversions:
          amazonAdsApi.createBrandstoreeditionpublishversionsClient(api),
        brandstorepages: amazonAdsApi.createBrandstorepagesClient(api),
        brandstores: amazonAdsApi.createBrandstoresClient(api),
        adgroupforecasts: amazonAdsApi.createAdgroupforecastsClient(api),
        campaignforecasts: amazonAdsApi.createCampaignforecastsClient(api),
      },
    };
  },

  /** OAuth 2.0 client for Login with Amazon (LWA). */
  OAuth: createAmazonAdsOAuth,

  /** OAuth scopes. */
  Scopes: AmazonAdsScopes,

  /** Core HTTP client with retry, rate limiting, and error parsing. */
  ApiClient: AmazonAdsApiClient,

  /** Amazon Ads API error class. */
  ApiError: AmazonAdsApiError,
} as const;

export type { AmazonAdsApiClientOptions } from "./api-client.ts";
export type { AmazonAdsOAuthConfig, AmazonAdsOAuthTokenResponse, AmazonAdsScope } from "./oauth.ts";
