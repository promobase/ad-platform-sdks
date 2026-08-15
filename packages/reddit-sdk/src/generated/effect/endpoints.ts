// @generated
// fingerprint: sha256:667b333b61100c7dc22fa676c39627d41cbcd2f4d8027213a34f2d43731165da
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const reddit_ads_createAd = defineEndpointDescriptor({
  id: "reddit.ads.createAd",
  platform: "reddit",
  method: "POST",
  path: "/accounts/{account_id}/ads",
  summary: "Create ad",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.ads.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.CreateAdResponse,
});

export const reddit_adGroups_createAdGroup = defineEndpointDescriptor({
  id: "reddit.adGroups.createAdGroup",
  platform: "reddit",
  method: "POST",
  path: "/accounts/{account_id}/ad_groups",
  summary: "Create ad group",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.adGroups.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.CreateAdGroupResponse,
});

export const reddit_campaigns_createCampaign = defineEndpointDescriptor({
  id: "reddit.campaigns.createCampaign",
  platform: "reddit",
  method: "POST",
  path: "/accounts/{account_id}/campaigns",
  summary: "Create campaign",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.campaigns.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.CreateCampaignResponse,
});

export const reddit_customAudiences_createCustomAudience = defineEndpointDescriptor({
  id: "reddit.customAudiences.createCustomAudience",
  platform: "reddit",
  method: "POST",
  path: "/accounts/{account_id}/custom_audiences",
  summary: "Create custom audience",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.customAudiences.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.CreateCustomAudienceResponse,
});

export const reddit_reports_createReport = defineEndpointDescriptor({
  id: "reddit.reports.createReport",
  platform: "reddit",
  method: "POST",
  path: "/accounts/{account_id}/reports",
  summary: "Generate performance report",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.reports.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.CreateReportResponse,
});

export const reddit_structuredPosts_createStructuredPost = defineEndpointDescriptor({
  id: "reddit.structuredPosts.createStructuredPost",
  platform: "reddit",
  method: "POST",
  path: "/accounts/{account_id}/structured_posts",
  summary: "Create structured post",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.structuredPosts.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.CreateStructuredPostResponse,
});

export const reddit_campaigns_deleteCampaign = defineEndpointDescriptor({
  id: "reddit.campaigns.deleteCampaign",
  platform: "reddit",
  method: "DELETE",
  path: "/accounts/{account_id}/campaigns/{campaign_id}",
  summary: "Delete campaign",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.campaigns.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false},
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
    campaignId: Schema.String,
  }),
  outputSchema: Models.DeleteCampaignResponse,
});

export const reddit_accounts_getAccount = defineEndpointDescriptor({
  id: "reddit.accounts.getAccount",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}",
  summary: "Get ad account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.accounts.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.GetAccountResponse,
});

export const reddit_ads_getAd = defineEndpointDescriptor({
  id: "reddit.ads.getAd",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}/ads/{ad_id}",
  summary: "Get ad",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.ads.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false},
    {"name":"adId","wireName":"adId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
    adId: Schema.String,
  }),
  outputSchema: Models.GetAdResponse,
});

export const reddit_adGroups_getAdGroup = defineEndpointDescriptor({
  id: "reddit.adGroups.getAdGroup",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}/ad_groups/{ad_group_id}",
  summary: "Get ad group",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.adGroups.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false},
    {"name":"adGroupId","wireName":"adGroupId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
    adGroupId: Schema.String,
  }),
  outputSchema: Models.GetAdGroupResponse,
});

export const reddit_bidSuggestions_getBidSuggestion = defineEndpointDescriptor({
  id: "reddit.bidSuggestions.getBidSuggestion",
  platform: "reddit",
  method: "POST",
  path: "/accounts/{account_id}/bid_suggestion",
  summary: "Get bid suggestion",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.bidSuggestions.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.GetBidSuggestionResponse,
});

export const reddit_campaigns_getCampaign = defineEndpointDescriptor({
  id: "reddit.campaigns.getCampaign",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}/campaigns/{campaign_id}",
  summary: "Get campaign",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.campaigns.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false},
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
    campaignId: Schema.String,
  }),
  outputSchema: Models.GetCampaignResponse,
});

export const reddit_customAudiences_getCustomAudience = defineEndpointDescriptor({
  id: "reddit.customAudiences.getCustomAudience",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}/custom_audiences/{audience_id}",
  summary: "Get custom audience",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.customAudiences.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false},
    {"name":"audienceId","wireName":"audienceId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
    audienceId: Schema.String,
  }),
  outputSchema: Models.GetCustomAudienceResponse,
});

export const reddit_accounts_getMe = defineEndpointDescriptor({
  id: "reddit.accounts.getMe",
  platform: "reddit",
  method: "GET",
  path: "/me",
  summary: "Get authenticated user",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.accounts.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetMeResponse,
});

export const reddit_pixels_getPixelAppLastFiredAt = defineEndpointDescriptor({
  id: "reddit.pixels.getPixelAppLastFiredAt",
  platform: "reddit",
  method: "GET",
  path: "/pixels/{pixel_id}/app_last_fired_at",
  summary: "Get pixel app last fired time",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.pixels.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"pixelId","wireName":"pixelId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pixelId: Schema.String,
  }),
  outputSchema: Models.GetPixelAppLastFiredAtResponse,
});

export const reddit_pixels_getPixelLastFiredAt = defineEndpointDescriptor({
  id: "reddit.pixels.getPixelLastFiredAt",
  platform: "reddit",
  method: "GET",
  path: "/pixels/{pixel_id}/last_fired_at",
  summary: "Get pixel last fired time",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.pixels.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"pixelId","wireName":"pixelId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pixelId: Schema.String,
  }),
  outputSchema: Models.GetPixelLastFiredAtResponse,
});

export const reddit_savedAudiences_getSavedAudience = defineEndpointDescriptor({
  id: "reddit.savedAudiences.getSavedAudience",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}/saved_audiences/{audience_id}",
  summary: "Get saved audience",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.savedAudiences.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false},
    {"name":"audienceId","wireName":"audienceId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
    audienceId: Schema.String,
  }),
  outputSchema: Models.GetSavedAudienceResponse,
});

export const reddit_accounts_listAccounts = defineEndpointDescriptor({
  id: "reddit.accounts.listAccounts",
  platform: "reddit",
  method: "GET",
  path: "/accounts",
  summary: "List ad accounts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.accounts.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.ListAccountsResponse,
});

export const reddit_adGroups_listAdGroups = defineEndpointDescriptor({
  id: "reddit.adGroups.listAdGroups",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}/ad_groups",
  summary: "List ad groups",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.adGroups.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false},
    {"name":"campaignId","wireName":"campaignId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
    campaignId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ListAdGroupsResponse,
});

export const reddit_ads_listAds = defineEndpointDescriptor({
  id: "reddit.ads.listAds",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}/ads",
  summary: "List ads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.ads.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false},
    {"name":"adGroupId","wireName":"adGroupId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
    adGroupId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ListAdsResponse,
});

export const reddit_campaigns_listCampaigns = defineEndpointDescriptor({
  id: "reddit.campaigns.listCampaigns",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}/campaigns",
  summary: "List campaigns",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.campaigns.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.ListCampaignsResponse,
});

export const reddit_customAudiences_listCustomAudiences = defineEndpointDescriptor({
  id: "reddit.customAudiences.listCustomAudiences",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}/custom_audiences",
  summary: "List custom audiences",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.customAudiences.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.ListCustomAudiencesResponse,
});

export const reddit_fundingInstruments_listFundingInstrumentsByAccount = defineEndpointDescriptor({
  id: "reddit.fundingInstruments.listFundingInstrumentsByAccount",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}/funding_instruments",
  summary: "List funding instruments by account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.fundingInstruments.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.ListFundingInstrumentsByAccountResponse,
});

export const reddit_fundingInstruments_listFundingInstrumentsByBusiness = defineEndpointDescriptor({
  id: "reddit.fundingInstruments.listFundingInstrumentsByBusiness",
  platform: "reddit",
  method: "GET",
  path: "/businesses/{business_id}/funding_instruments",
  summary: "List funding instruments by business",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.fundingInstruments.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
  }),
  outputSchema: Models.ListFundingInstrumentsByBusinessResponse,
});

export const reddit_targeting_listGeolocations = defineEndpointDescriptor({
  id: "reddit.targeting.listGeolocations",
  platform: "reddit",
  method: "GET",
  path: "/targeting/geolocations",
  summary: "List geolocations",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.targeting.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.ListGeolocationsResponse,
});

export const reddit_pixels_listPixelsByAccount = defineEndpointDescriptor({
  id: "reddit.pixels.listPixelsByAccount",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}/pixels",
  summary: "List pixels by account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.pixels.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.ListPixelsByAccountResponse,
});

export const reddit_pixels_listPixelsByBusiness = defineEndpointDescriptor({
  id: "reddit.pixels.listPixelsByBusiness",
  platform: "reddit",
  method: "GET",
  path: "/businesses/{business_id}/pixels",
  summary: "List pixels by business",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.pixels.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
  }),
  outputSchema: Models.ListPixelsByBusinessResponse,
});

export const reddit_savedAudiences_listSavedAudiences = defineEndpointDescriptor({
  id: "reddit.savedAudiences.listSavedAudiences",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}/saved_audiences",
  summary: "List saved audiences",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.savedAudiences.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.ListSavedAudiencesResponse,
});

export const reddit_structuredPosts_listStructuredPosts = defineEndpointDescriptor({
  id: "reddit.structuredPosts.listStructuredPosts",
  platform: "reddit",
  method: "GET",
  path: "/accounts/{account_id}/structured_posts",
  summary: "List structured posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.structuredPosts.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.ListStructuredPostsResponse,
});

export const reddit_targeting_listTargetingCarriers = defineEndpointDescriptor({
  id: "reddit.targeting.listTargetingCarriers",
  platform: "reddit",
  method: "GET",
  path: "/targeting/carriers",
  summary: "List targetable carriers",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.targeting.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.ListTargetingCarriersResponse,
});

export const reddit_targeting_listTargetingCommunities = defineEndpointDescriptor({
  id: "reddit.targeting.listTargetingCommunities",
  platform: "reddit",
  method: "GET",
  path: "/targeting/communities",
  summary: "List community suggestions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.targeting.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"q","wireName":"q","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    q: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ListTargetingCommunitiesResponse,
});

export const reddit_targeting_listTargetingDevices = defineEndpointDescriptor({
  id: "reddit.targeting.listTargetingDevices",
  platform: "reddit",
  method: "GET",
  path: "/targeting/devices",
  summary: "List targetable devices",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.targeting.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.ListTargetingDevicesResponse,
});

export const reddit_targeting_listTargetingInterests = defineEndpointDescriptor({
  id: "reddit.targeting.listTargetingInterests",
  platform: "reddit",
  method: "GET",
  path: "/targeting/interests",
  summary: "List interest categories",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["adsread"],
  capabilities: ["reddit.targeting.read"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.ListTargetingInterestsResponse,
});

export const reddit_conversions_postConversionEvents = defineEndpointDescriptor({
  id: "reddit.conversions.postConversionEvents",
  platform: "reddit",
  method: "POST",
  path: "/pixels/{pixel_id}/conversion_events",
  summary: "Post conversion events",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.conversions.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"pixelId","wireName":"pixelId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pixelId: Schema.String,
  }),
  outputSchema: Models.PostConversionEventsResponse,
});

export const reddit_accounts_updateAccount = defineEndpointDescriptor({
  id: "reddit.accounts.updateAccount",
  platform: "reddit",
  method: "PATCH",
  path: "/accounts/{account_id}",
  summary: "Update ad account",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.accounts.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
  }),
  outputSchema: Models.UpdateAccountResponse,
});

export const reddit_ads_updateAd = defineEndpointDescriptor({
  id: "reddit.ads.updateAd",
  platform: "reddit",
  method: "PATCH",
  path: "/accounts/{account_id}/ads/{ad_id}",
  summary: "Update ad",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.ads.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false},
    {"name":"adId","wireName":"adId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
    adId: Schema.String,
  }),
  outputSchema: Models.UpdateAdResponse,
});

export const reddit_adGroups_updateAdGroup = defineEndpointDescriptor({
  id: "reddit.adGroups.updateAdGroup",
  platform: "reddit",
  method: "PATCH",
  path: "/accounts/{account_id}/ad_groups/{ad_group_id}",
  summary: "Update ad group",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.adGroups.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false},
    {"name":"adGroupId","wireName":"adGroupId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
    adGroupId: Schema.String,
  }),
  outputSchema: Models.UpdateAdGroupResponse,
});

export const reddit_campaigns_updateCampaign = defineEndpointDescriptor({
  id: "reddit.campaigns.updateCampaign",
  platform: "reddit",
  method: "PATCH",
  path: "/accounts/{account_id}/campaigns/{campaign_id}",
  summary: "Update campaign",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.campaigns.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"accountId","wireName":"accountId","location":"path","required":true,"nullable":false},
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountId: Schema.String,
    campaignId: Schema.String,
  }),
  outputSchema: Models.UpdateCampaignResponse,
});

export const reddit_customAudiences_updateCustomAudienceUsers = defineEndpointDescriptor({
  id: "reddit.customAudiences.updateCustomAudienceUsers",
  platform: "reddit",
  method: "PATCH",
  path: "/custom_audiences/{audience_id}/users",
  summary: "Add or remove users from audience",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.customAudiences.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"audienceId","wireName":"audienceId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    audienceId: Schema.String,
  }),
  outputSchema: Models.UpdateCustomAudienceUsersResponse,
});

export const reddit_targeting_validateGeolocations = defineEndpointDescriptor({
  id: "reddit.targeting.validateGeolocations",
  platform: "reddit",
  method: "POST",
  path: "/targeting/geolocations/validate",
  summary: "Validate geolocations",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["adsedit"],
  capabilities: ["reddit.targeting.manage"],
  rateLimitBucket: "reddit-ads-api",
  authSchemes: ["oauth2"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.ValidateGeolocationsResponse,
});

export const endpointDescriptors = [reddit_ads_createAd, reddit_adGroups_createAdGroup, reddit_campaigns_createCampaign, reddit_customAudiences_createCustomAudience, reddit_reports_createReport, reddit_structuredPosts_createStructuredPost, reddit_campaigns_deleteCampaign, reddit_accounts_getAccount, reddit_ads_getAd, reddit_adGroups_getAdGroup, reddit_bidSuggestions_getBidSuggestion, reddit_campaigns_getCampaign, reddit_customAudiences_getCustomAudience, reddit_accounts_getMe, reddit_pixels_getPixelAppLastFiredAt, reddit_pixels_getPixelLastFiredAt, reddit_savedAudiences_getSavedAudience, reddit_accounts_listAccounts, reddit_adGroups_listAdGroups, reddit_ads_listAds, reddit_campaigns_listCampaigns, reddit_customAudiences_listCustomAudiences, reddit_fundingInstruments_listFundingInstrumentsByAccount, reddit_fundingInstruments_listFundingInstrumentsByBusiness, reddit_targeting_listGeolocations, reddit_pixels_listPixelsByAccount, reddit_pixels_listPixelsByBusiness, reddit_savedAudiences_listSavedAudiences, reddit_structuredPosts_listStructuredPosts, reddit_targeting_listTargetingCarriers, reddit_targeting_listTargetingCommunities, reddit_targeting_listTargetingDevices, reddit_targeting_listTargetingInterests, reddit_conversions_postConversionEvents, reddit_accounts_updateAccount, reddit_ads_updateAd, reddit_adGroups_updateAdGroup, reddit_campaigns_updateCampaign, reddit_customAudiences_updateCustomAudienceUsers, reddit_targeting_validateGeolocations] as const;
