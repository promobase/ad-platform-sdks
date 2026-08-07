// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@mosaic/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const amazon_ads_optimizationRules_associateSponsoredBrandsOptimizationRules = defineEndpointDescriptor({
  id: "amazon-ads.optimizationRules.associateSponsoredBrandsOptimizationRules",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/rules/optimization/associate",
  summary: "AssociateSponsoredBrandsOptimizationRules",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.optimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"optimizationRuleAssociations","wireName":"optimizationRuleAssociations","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    optimizationRuleAssociations: Schema.Array(Schema.suspend(() => Models.Inline1049)),
  }),
  outputSchema: Models.AssociateSponsoredBrandsOptimizationRulesResponse,
});

export const amazon_ads_budgetRules_createAssociatedBudgetRulesForSBCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.createAssociatedBudgetRulesForSBCampaigns",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/campaigns/{campaignId}/budgetRules",
  summary: "Associates one or more budget rules to a campaign specified by identifer.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.budgetRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"budgetRuleIds","wireName":"budgetRuleIds","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.Number,
    budgetRuleIds: Schema.optional(Schema.Array(Schema.String)),
  }),
  outputSchema: Models.CreateAssociatedBudgetRulesForSBCampaignsResponse,
});

export const amazon_ads_adCreatives_createBrandVideoCreative = defineEndpointDescriptor({
  id: "amazon-ads.adCreatives.createBrandVideoCreative",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/ads/creatives/brandVideo",
  summary: "CreateBrandVideoCreative",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.adCreatives.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adId","wireName":"adId","location":"body","required":true,"nullable":false},
    {"name":"creative","wireName":"creative","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adId: Schema.String,
    creative: Models.Inline901,
  }),
  outputSchema: Models.CreateBrandVideoCreativeResponse,
});

export const amazon_ads_budgetRules_createBudgetRulesForSBCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.createBudgetRulesForSBCampaigns",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/budgetRules",
  summary: "Creates one or more budget rules.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.budgetRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"budgetRulesDetails","wireName":"budgetRulesDetails","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline954))),
  }),
  outputSchema: Models.CreateBudgetRulesForSBCampaignsResponse,
});

export const amazon_ads_adCreatives_createExtendedProductCollectionCreative = defineEndpointDescriptor({
  id: "amazon-ads.adCreatives.createExtendedProductCollectionCreative",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/ads/creatives/productCollectionExtended",
  summary: "CreateExtendedProductCollectionCreative",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.adCreatives.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adId","wireName":"adId","location":"body","required":true,"nullable":false},
    {"name":"creative","wireName":"creative","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adId: Schema.String,
    creative: Models.Inline929,
  }),
  outputSchema: Models.CreateExtendedProductCollectionCreativeResponse,
});

export const amazon_ads_adCreatives_createProductCollectionCreative = defineEndpointDescriptor({
  id: "amazon-ads.adCreatives.createProductCollectionCreative",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/ads/creatives/productCollection",
  summary: "CreateProductCollectionCreative",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.adCreatives.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adId","wireName":"adId","location":"body","required":true,"nullable":false},
    {"name":"creative","wireName":"creative","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adId: Schema.String,
    creative: Models.Inline921,
  }),
  outputSchema: Models.CreateProductCollectionCreativeResponse,
});

export const amazon_ads_adGroups_createSponsoredBrandsAdGroups = defineEndpointDescriptor({
  id: "amazon-ads.adGroups.createSponsoredBrandsAdGroups",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/adGroups",
  summary: "Creates Sponsored Brands ad groups.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.adGroups.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroups","wireName":"adGroups","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroups: Schema.Array(Schema.suspend(() => Models.Inline1080)),
  }),
  outputSchema: Models.CreateSponsoredBrandsAdGroupsResponse,
});

export const amazon_ads_ads_createSponsoredBrandsAutoCollectionAds = defineEndpointDescriptor({
  id: "amazon-ads.ads.createSponsoredBrandsAutoCollectionAds",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/ads/autoCollection",
  summary: "CreateSponsoredBrandsAutoCollectionAds",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.ads.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ads: Schema.Array(Schema.suspend(() => Models.Inline1107)),
  }),
  outputSchema: Models.CreateSponsoredBrandsAutoCollectionAdsResponse,
});

export const amazon_ads_ads_createSponsoredBrandsBrandVideoAds = defineEndpointDescriptor({
  id: "amazon-ads.ads.createSponsoredBrandsBrandVideoAds",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/ads/brandVideo",
  summary: "Creates Sponsored Brands brand video ads.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.ads.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ads: Schema.Array(Schema.suspend(() => Models.Inline1112)),
  }),
  outputSchema: Models.CreateSponsoredBrandsBrandVideoAdsResponse,
});

export const amazon_ads_campaigns_createSponsoredBrandsCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.campaigns.createSponsoredBrandsCampaigns",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/campaigns",
  summary: "Creates Sponsored Brands campaigns.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.campaigns.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaigns","wireName":"campaigns","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaigns: Schema.Array(Schema.suspend(() => Models.Inline1176)),
  }),
  outputSchema: Models.CreateSponsoredBrandsCampaignsResponse,
});

export const amazon_ads_ads_createSponsoredBrandsExtendedProductCollectionAds = defineEndpointDescriptor({
  id: "amazon-ads.ads.createSponsoredBrandsExtendedProductCollectionAds",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/ads/productCollectionExtended",
  summary: "Creates Sponsored Brands product collection ads with collection of custom images[1-5].",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.ads.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ads: Schema.Array(Schema.suspend(() => Models.Inline1155)),
  }),
  outputSchema: Models.CreateSponsoredBrandsExtendedProductCollectionAdsResponse,
});

export const amazon_ads_ads_createSponsoredBrandsManualCollectionAds = defineEndpointDescriptor({
  id: "amazon-ads.ads.createSponsoredBrandsManualCollectionAds",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/ads/manualCollection",
  summary: "CreateSponsoredBrandsManualCollectionAds",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.ads.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ads: Schema.Array(Schema.suspend(() => Models.Inline1140)),
  }),
  outputSchema: Models.CreateSponsoredBrandsManualCollectionAdsResponse,
});

export const amazon_ads_optimizationRules_createSponsoredBrandsOptimizationRules = defineEndpointDescriptor({
  id: "amazon-ads.optimizationRules.createSponsoredBrandsOptimizationRules",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/rules/optimization",
  summary: "CreateSponsoredBrandsOptimizationRules",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.optimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"optimizationRules","wireName":"optimizationRules","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    optimizationRules: Schema.Array(Schema.suspend(() => Models.Inline1041)),
  }),
  outputSchema: Models.CreateSponsoredBrandsOptimizationRulesResponse,
});

export const amazon_ads_ads_createSponsoredBrandsProductCollectionAds = defineEndpointDescriptor({
  id: "amazon-ads.ads.createSponsoredBrandsProductCollectionAds",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/ads/productCollection",
  summary: "Creates Sponsored Brands product collection ads.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.ads.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ads: Schema.Array(Schema.suspend(() => Models.Inline1147)),
  }),
  outputSchema: Models.CreateSponsoredBrandsProductCollectionAdsResponse,
});

export const amazon_ads_ads_createSponsoredBrandStoreSpotlightAds = defineEndpointDescriptor({
  id: "amazon-ads.ads.createSponsoredBrandStoreSpotlightAds",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/ads/storeSpotlight",
  summary: "Creates Sponsored Brands store spotlight ads.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.ads.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ads: Schema.Array(Schema.suspend(() => Models.Inline1163)),
  }),
  outputSchema: Models.CreateSponsoredBrandStoreSpotlightAdsResponse,
});

export const amazon_ads_ads_createSponsoredBrandsVideoAds = defineEndpointDescriptor({
  id: "amazon-ads.ads.createSponsoredBrandsVideoAds",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/ads/video",
  summary: "Creates Sponsored Brands video ads.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.ads.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ads: Schema.Array(Schema.suspend(() => Models.Inline1169)),
  }),
  outputSchema: Models.CreateSponsoredBrandsVideoAdsResponse,
});

export const amazon_ads_adCreatives_createStoreSpotlightCreative = defineEndpointDescriptor({
  id: "amazon-ads.adCreatives.createStoreSpotlightCreative",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/ads/creatives/storeSpotlight",
  summary: "CreateStoreSpotlightCreative",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.adCreatives.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adId","wireName":"adId","location":"body","required":true,"nullable":false},
    {"name":"creative","wireName":"creative","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adId: Schema.String,
    creative: Models.Inline938,
  }),
  outputSchema: Models.CreateStoreSpotlightCreativeResponse,
});

export const amazon_ads_adCreatives_createVideoCreative = defineEndpointDescriptor({
  id: "amazon-ads.adCreatives.createVideoCreative",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/ads/creatives/video",
  summary: "CreateVideoCreative",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.adCreatives.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adId","wireName":"adId","location":"body","required":true,"nullable":false},
    {"name":"creative","wireName":"creative","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adId: Schema.String,
    creative: Models.Inline945,
  }),
  outputSchema: Models.CreateVideoCreativeResponse,
});

export const amazon_ads_adGroups_deleteSponsoredBrandsAdGroups = defineEndpointDescriptor({
  id: "amazon-ads.adGroups.deleteSponsoredBrandsAdGroups",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/adGroups/delete",
  summary: "Deletes Sponsored Brands ad groups.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.adGroups.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Schema.optional(Models.Inline1088),
  }),
  outputSchema: Models.DeleteSponsoredBrandsAdGroupsResponse,
});

export const amazon_ads_ads_deleteSponsoredBrandsAds = defineEndpointDescriptor({
  id: "amazon-ads.ads.deleteSponsoredBrandsAds",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/ads/delete",
  summary: "Deletes Sponsored Brands ads.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.ads.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adIdFilter","wireName":"adIdFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adIdFilter: Schema.optional(Models.Inline1117),
  }),
  outputSchema: Models.DeleteSponsoredBrandsAdsResponse,
});

export const amazon_ads_campaigns_deleteSponsoredBrandsCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.campaigns.deleteSponsoredBrandsCampaigns",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/campaigns/delete",
  summary: "Deletes Sponsored Brands campaigns.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.campaigns.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIdFilter: Schema.optional(Models.Inline1193),
  }),
  outputSchema: Models.DeleteSponsoredBrandsCampaignsResponse,
});

export const amazon_ads_budgetRules_disassociateAssociatedBudgetRuleForSBCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.disassociateAssociatedBudgetRuleForSBCampaigns",
  platform: "amazon-ads-sb",
  method: "DELETE",
  path: "/sb/campaigns/{campaignId}/budgetRules/{budgetRuleId}",
  summary: "Disassociates a budget rule specified by identifier from a campaign specified by identifier.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.budgetRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"budgetRuleId","wireName":"budgetRuleId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.Number,
    budgetRuleId: Schema.String,
  }),
  outputSchema: Models.DisassociateAssociatedBudgetRuleForSBCampaignsResponse,
});

export const amazon_ads_optimizationRules_disassociateSponsoredBrandsOptimizationRules = defineEndpointDescriptor({
  id: "amazon-ads.optimizationRules.disassociateSponsoredBrandsOptimizationRules",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/rules/optimization/disassociate",
  summary: "DisassociateSponsoredBrandsOptimizationRules",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.optimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"optimizationRuleDisassociations","wireName":"optimizationRuleDisassociations","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    optimizationRuleDisassociations: Schema.Array(Schema.suspend(() => Models.Inline1053)),
  }),
  outputSchema: Models.DisassociateSponsoredBrandsOptimizationRulesResponse,
});

export const amazon_ads_budgetRecommendations_getBudgetRecommendations = defineEndpointDescriptor({
  id: "amazon-ads.budgetRecommendations.getBudgetRecommendations",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/campaigns/budgetRecommendations",
  summary: "Gets daily budget recommendations.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.budgetRecommendations.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIds","wireName":"campaignIds","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIds: Schema.Array(Schema.String),
  }),
  outputSchema: Models.GetBudgetRecommendationsResponse,
});

export const amazon_ads_budgetRules_getBudgetRuleByRuleIdForSBCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.getBudgetRuleByRuleIdForSBCampaigns",
  platform: "amazon-ads-sb",
  method: "GET",
  path: "/sb/budgetRules/{budgetRuleId}",
  summary: "Gets a budget rule specified by identifier.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.budgetRules.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"budgetRuleId","wireName":"budgetRuleId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    budgetRuleId: Schema.String,
  }),
  outputSchema: Models.GetBudgetRuleByRuleIdForSBCampaignsResponse,
});

export const amazon_ads_budgetRules_getCampaignsAssociatedWithSBBudgetRule = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.getCampaignsAssociatedWithSBBudgetRule",
  platform: "amazon-ads-sb",
  method: "GET",
  path: "/sb/budgetRules/{budgetRuleId}/campaigns",
  summary: "Gets all the campaigns associated with a budget rule",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.budgetRules.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"budgetRuleId","wireName":"budgetRuleId","location":"path","required":true,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    budgetRuleId: Schema.String,
    nextToken: Schema.optional(Schema.String),
    pageSize: Schema.Number,
  }),
  outputSchema: Models.GetCampaignsAssociatedWithSBBudgetRuleResponse,
});

export const amazon_ads_recommendations_getHeadlineRecommendations = defineEndpointDescriptor({
  id: "amazon-ads.recommendations.getHeadlineRecommendations",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/recommendations/creative/headline",
  summary: "getHeadlineRecommendations",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.recommendations.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adFormat","wireName":"adFormat","location":"body","required":false,"nullable":false},
    {"name":"asins","wireName":"asins","location":"body","required":false,"nullable":false},
    {"name":"maxNumSuggestions","wireName":"maxNumSuggestions","location":"body","required":false,"nullable":false},
    {"name":"storePages","wireName":"storePages","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adFormat: Schema.optional(Schema.String),
    asins: Schema.optional(Schema.Array(Schema.String)),
    maxNumSuggestions: Schema.optional(Schema.Number),
    storePages: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline1029))),
  }),
  outputSchema: Models.GetHeadlineRecommendationsResponse,
});

export const amazon_ads_keywordRecommendations_getKeywordRecommendations = defineEndpointDescriptor({
  id: "amazon-ads.keywordRecommendations.getKeywordRecommendations",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/recommendations/keyword",
  summary: "Gets keyword recommendations",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.keywordRecommendations.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetKeywordRecommendationsResponse,
});

export const amazon_ads_budgetRules_getSBBudgetRulesForAdvertiser = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.getSBBudgetRulesForAdvertiser",
  platform: "amazon-ads-sb",
  method: "GET",
  path: "/sb/budgetRules",
  summary: "Get all budget rules created by an advertiser",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.budgetRules.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"nextToken","wireName":"nextToken","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    nextToken: Schema.optional(Schema.String),
    pageSize: Schema.Number,
  }),
  outputSchema: Models.GetSBBudgetRulesForAdvertiserResponse,
});

export const amazon_ads_budgetRules_listAssociatedBudgetRulesForSBCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.listAssociatedBudgetRulesForSBCampaigns",
  platform: "amazon-ads-sb",
  method: "GET",
  path: "/sb/campaigns/{campaignId}/budgetRules",
  summary: "Gets a list of budget rules associated to a campaign specified by identifier.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.budgetRules.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.Number,
  }),
  outputSchema: Models.ListAssociatedBudgetRulesForSBCampaignsResponse,
});

export const amazon_ads_adCreatives_listCreatives = defineEndpointDescriptor({
  id: "amazon-ads.adCreatives.listCreatives",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/ads/creatives/list",
  summary: "ListCreatives",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.adCreatives.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adId","wireName":"adId","location":"body","required":true,"nullable":false},
    {"name":"creativeStatusFilter","wireName":"creativeStatusFilter","location":"body","required":false,"nullable":false},
    {"name":"creativeTypeFilter","wireName":"creativeTypeFilter","location":"body","required":false,"nullable":false},
    {"name":"creativeVersionFilter","wireName":"creativeVersionFilter","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adId: Schema.String,
    creativeStatusFilter: Schema.optional(Schema.Array(Schema.String)),
    creativeTypeFilter: Schema.optional(Schema.Array(Schema.String)),
    creativeVersionFilter: Schema.optional(Schema.Array(Schema.String)),
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ListCreativesResponse,
});

export const amazon_ads_adMigrations_listMigrations = defineEndpointDescriptor({
  id: "amazon-ads.adMigrations.listMigrations",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/migrations/list",
  summary: "ListMigrations",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.adMigrations.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":false,"nullable":false},
    {"name":"adIdFilter","wireName":"adIdFilter","location":"body","required":false,"nullable":false},
    {"name":"adStateFilter","wireName":"adStateFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"migrationStatusFilter","wireName":"migrationStatusFilter","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Schema.optional(Models.Inline1238),
    adIdFilter: Schema.optional(Models.Inline1239),
    adStateFilter: Schema.optional(Models.Inline1240),
    campaignIdFilter: Schema.optional(Models.Inline1241),
    maxResults: Schema.optional(Schema.Number),
    migrationStatusFilter: Schema.optional(Models.Inline1242),
    nextToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ListMigrationsResponse,
});

export const amazon_ads_adGroups_listSponsoredBrandsAdGroups = defineEndpointDescriptor({
  id: "amazon-ads.adGroups.listSponsoredBrandsAdGroups",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/adGroups/list",
  summary: "Lists Sponsored Brands ad groups.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.adGroups.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"includeExtendedDataFields","wireName":"includeExtendedDataFields","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nameFilter","wireName":"nameFilter","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"stateFilter","wireName":"stateFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Schema.optional(Models.Inline1096),
    campaignIdFilter: Schema.optional(Models.Inline1097),
    includeExtendedDataFields: Schema.optional(Schema.Boolean),
    maxResults: Schema.optional(Schema.Number),
    nameFilter: Schema.optional(Models.Inline1098),
    nextToken: Schema.optional(Schema.String),
    stateFilter: Schema.optional(Models.Inline1099),
  }),
  outputSchema: Models.ListSponsoredBrandsAdGroupsResponse,
});

export const amazon_ads_ads_listSponsoredBrandsAds = defineEndpointDescriptor({
  id: "amazon-ads.ads.listSponsoredBrandsAds",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/ads/list",
  summary: "Lists Sponsored Brands ads.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.ads.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":false,"nullable":false},
    {"name":"adIdFilter","wireName":"adIdFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"creativeVersionToReturn","wireName":"creativeVersionToReturn","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nameFilter","wireName":"nameFilter","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"stateFilter","wireName":"stateFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Schema.optional(Models.Inline1131),
    adIdFilter: Schema.optional(Models.Inline1132),
    campaignIdFilter: Schema.optional(Models.Inline1133),
    creativeVersionToReturn: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Number),
    nameFilter: Schema.optional(Models.Inline1134),
    nextToken: Schema.optional(Schema.String),
    stateFilter: Schema.optional(Models.Inline1135),
  }),
  outputSchema: Models.ListSponsoredBrandsAdsResponse,
});

export const amazon_ads_campaigns_listSponsoredBrandsCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.campaigns.listSponsoredBrandsCampaigns",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/campaigns/list",
  summary: "Lists Sponsored Brands campaigns.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.campaigns.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"goalTypeFilter","wireName":"goalTypeFilter","location":"body","required":false,"nullable":false},
    {"name":"includeExtendedDataFields","wireName":"includeExtendedDataFields","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nameFilter","wireName":"nameFilter","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"portfolioIdFilter","wireName":"portfolioIdFilter","location":"body","required":false,"nullable":false},
    {"name":"stateFilter","wireName":"stateFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIdFilter: Schema.optional(Models.Inline1207),
    goalTypeFilter: Schema.optional(Models.Inline1208),
    includeExtendedDataFields: Schema.optional(Schema.Boolean),
    maxResults: Schema.optional(Schema.Number),
    nameFilter: Schema.optional(Models.Inline1209),
    nextToken: Schema.optional(Schema.String),
    portfolioIdFilter: Schema.optional(Models.Inline1210),
    stateFilter: Schema.optional(Models.Inline1211),
  }),
  outputSchema: Models.ListSponsoredBrandsCampaignsResponse,
});

export const amazon_ads_optimizationRules_listSponsoredBrandsOptimizationRules = defineEndpointDescriptor({
  id: "amazon-ads.optimizationRules.listSponsoredBrandsOptimizationRules",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/rules/optimization/list",
  summary: "ListSponsoredBrandsOptimizationRules",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.optimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"entityFilter","wireName":"entityFilter","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"optimizationRuleIdFilter","wireName":"optimizationRuleIdFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    entityFilter: Schema.optional(Models.Inline1059),
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
    optimizationRuleIdFilter: Schema.optional(Models.Inline1060),
  }),
  outputSchema: Models.ListSponsoredBrandsOptimizationRulesResponse,
});

export const amazon_ads_v3CampaignMigration_migrationJobResults = defineEndpointDescriptor({
  id: "amazon-ads.v3CampaignMigration.migrationJobResults",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/legacyCampaigns/migrationJob/results",
  summary: "Lists Campaign Migration results for a JobId.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.v3CampaignMigration.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"jobId","wireName":"jobId","location":"body","required":true,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    jobId: Schema.String,
    nextToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.MigrationJobResultsResponse,
});

export const amazon_ads_v3CampaignMigration_migrationJobStatus = defineEndpointDescriptor({
  id: "amazon-ads.v3CampaignMigration.migrationJobStatus",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/legacyCampaigns/migrationJob/status",
  summary: "List Migration Job Status.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.v3CampaignMigration.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"jobId","wireName":"jobId","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    jobId: Schema.String,
  }),
  outputSchema: Models.MigrationJobStatusResponse,
});

export const amazon_ads_v3CampaignMigration_migrationResults = defineEndpointDescriptor({
  id: "amazon-ads.v3CampaignMigration.migrationResults",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/legacyCampaigns/overallMigrationResults",
  summary: "List Migration Results of all Campaign.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.v3CampaignMigration.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    nextToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.MigrationResultsResponse,
});

export const amazon_ads_forecast_sBCampaignPerformanceForecasts = defineEndpointDescriptor({
  id: "amazon-ads.forecast.sBCampaignPerformanceForecasts",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/forecasts",
  summary: "SBCampaignPerformanceForecasts",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.forecast.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaigns","wireName":"campaigns","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaigns: Schema.Array(Schema.suspend(() => Models.Inline1015)),
  }),
  outputSchema: Models.SBCampaignPerformanceForecastsResponse,
});

export const amazon_ads_budgetUsage_sbCampaignsBudgetUsage = defineEndpointDescriptor({
  id: "amazon-ads.budgetUsage.sbCampaignsBudgetUsage",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/campaigns/budget/usage",
  summary: "Budget usage API for SB campaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.budgetUsage.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIds","wireName":"campaignIds","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIds: Schema.optional(Schema.Array(Schema.String)),
  }),
  outputSchema: Models.SbCampaignsBudgetUsageResponse,
});

export const amazon_ads_budgetRulesRecommendation_sBGetBudgetRulesRecommendation = defineEndpointDescriptor({
  id: "amazon-ads.budgetRulesRecommendation.sBGetBudgetRulesRecommendation",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/campaigns/budgetRules/recommendations",
  summary: "Gets a list of special events with suggested date range and suggested budget increase for a campaign specified by identifier.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.budgetRulesRecommendation.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.SBGetBudgetRulesRecommendationResponse,
});

export const amazon_ads_insights_sBInsightsCampaignInsights = defineEndpointDescriptor({
  id: "amazon-ads.insights.sBInsightsCampaignInsights",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/campaigns/insights",
  summary: "SBInsightsCampaignInsights",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.insights.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"nextToken","wireName":"nextToken","location":"query","required":false,"nullable":false},
    {"name":"adGroups","wireName":"adGroups","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    nextToken: Schema.optional(Schema.String),
    adGroups: Schema.Array(Schema.suspend(() => Models.Inline1005)),
  }),
  outputSchema: Models.SBInsightsCampaignInsightsResponse,
});

export const amazon_ads_sBOptimizationRecommendations_sBOptimizationRecommendation = defineEndpointDescriptor({
  id: "amazon-ads.sBOptimizationRecommendations.sBOptimizationRecommendation",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/recommendations/optimization",
  summary: "SBOptimizationRecommendation",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.sBOptimizationRecommendations.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"costControlMetric","wireName":"costControlMetric","location":"body","required":true,"nullable":false},
    {"name":"landingPages","wireName":"landingPages","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    costControlMetric: Schema.String,
    landingPages: Schema.Array(Schema.suspend(() => Models.Inline1037)),
  }),
  outputSchema: Models.SBOptimizationRecommendationResponse,
});

export const amazon_ads_targetingRecommendations_sBTargetingGetNegativeBrands = defineEndpointDescriptor({
  id: "amazon-ads.targetingRecommendations.sBTargetingGetNegativeBrands",
  platform: "amazon-ads-sb",
  method: "GET",
  path: "/sb/negativeTargets/brands/recommendations",
  summary: "SBTargetingGetNegativeBrands",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.targetingRecommendations.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"nextToken","wireName":"nextToken","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    nextToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SBTargetingGetNegativeBrandsResponse,
});

export const amazon_ads_productTargetingCategories_sBTargetingGetRefinementsForCategory = defineEndpointDescriptor({
  id: "amazon-ads.productTargetingCategories.sBTargetingGetRefinementsForCategory",
  platform: "amazon-ads-sb",
  method: "GET",
  path: "/sb/targets/categories/{categoryRefinementId}/refinements",
  summary: "SBTargetingGetRefinementsForCategory",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.productTargetingCategories.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"categoryRefinementId","wireName":"categoryRefinementId","location":"path","required":true,"nullable":false},
    {"name":"locale","wireName":"locale","location":"query","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    categoryRefinementId: Schema.String,
    locale: Schema.optional(Schema.String),
    nextToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SBTargetingGetRefinementsForCategoryResponse,
});

export const amazon_ads_productTargetingCategories_sBTargetingGetTargetableASINCounts = defineEndpointDescriptor({
  id: "amazon-ads.productTargetingCategories.sBTargetingGetTargetableASINCounts",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/targets/products/count",
  summary: "SBTargetingGetTargetableASINCounts",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.productTargetingCategories.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"ageRanges","wireName":"ageRanges","location":"body","required":false,"nullable":false},
    {"name":"brands","wireName":"brands","location":"body","required":false,"nullable":false},
    {"name":"category","wireName":"category","location":"body","required":true,"nullable":false},
    {"name":"genres","wireName":"genres","location":"body","required":false,"nullable":false},
    {"name":"isPrimeShipping","wireName":"isPrimeShipping","location":"body","required":false,"nullable":false},
    {"name":"priceRange","wireName":"priceRange","location":"body","required":false,"nullable":false},
    {"name":"ratingRange","wireName":"ratingRange","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ageRanges: Schema.optional(Schema.Array(Schema.String)),
    brands: Schema.optional(Schema.Array(Schema.String)),
    category: Schema.String,
    genres: Schema.optional(Schema.Array(Schema.String)),
    isPrimeShipping: Schema.optional(Schema.Boolean),
    priceRange: Schema.optional(Models.Inline1075),
    ratingRange: Schema.optional(Models.Inline1076),
  }),
  outputSchema: Models.SBTargetingGetTargetableASINCountsResponse,
});

export const amazon_ads_productTargetingCategories_sBTargetingGetTargetableCategories = defineEndpointDescriptor({
  id: "amazon-ads.productTargetingCategories.sBTargetingGetTargetableCategories",
  platform: "amazon-ads-sb",
  method: "GET",
  path: "/sb/targets/categories",
  summary: "SBTargetingGetTargetableCategories",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.productTargetingCategories.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"locale","wireName":"locale","location":"query","required":false,"nullable":false},
    {"name":"supplySource","wireName":"supplySource","location":"query","required":true,"nullable":false},
    {"name":"includeOnlyRootCategories","wireName":"includeOnlyRootCategories","location":"query","required":false,"nullable":false},
    {"name":"parentCategoryRefinementId","wireName":"parentCategoryRefinementId","location":"query","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    locale: Schema.optional(Schema.String),
    supplySource: Schema.String,
    includeOnlyRootCategories: Schema.optional(Schema.Boolean),
    parentCategoryRefinementId: Schema.optional(Schema.String),
    nextToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SBTargetingGetTargetableCategoriesResponse,
});

export const amazon_ads_v3CampaignMigration_startMigrationJob = defineEndpointDescriptor({
  id: "amazon-ads.v3CampaignMigration.startMigrationJob",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/v4/legacyCampaigns/migrationJob",
  summary: "Creates Migration Job for V3 campaigns.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.v3CampaignMigration.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"brandEntityId","wireName":"brandEntityId","location":"body","required":false,"nullable":false},
    {"name":"campaignIds","wireName":"campaignIds","location":"body","required":true,"nullable":false},
    {"name":"enableThemeTargeting","wireName":"enableThemeTargeting","location":"body","required":true,"nullable":false},
    {"name":"isStagedMigration","wireName":"isStagedMigration","location":"body","required":false,"nullable":false},
    {"name":"newCampaignState","wireName":"newCampaignState","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    brandEntityId: Schema.optional(Schema.String),
    campaignIds: Schema.Array(Schema.String),
    enableThemeTargeting: Schema.Boolean,
    isStagedMigration: Schema.optional(Schema.Boolean),
    newCampaignState: Schema.optional(Schema.String),
  }),
  outputSchema: Models.StartMigrationJobResponse,
});

export const amazon_ads_budgetRules_updateBudgetRulesForSBCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.updateBudgetRulesForSBCampaigns",
  platform: "amazon-ads-sb",
  method: "PUT",
  path: "/sb/budgetRules",
  summary: "Update one or more budget rules.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.budgetRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"budgetRulesDetails","wireName":"budgetRulesDetails","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline966))),
  }),
  outputSchema: Models.UpdateBudgetRulesForSBCampaignsResponse,
});

export const amazon_ads_adGroups_updateSponsoredBrandsAdGroups = defineEndpointDescriptor({
  id: "amazon-ads.adGroups.updateSponsoredBrandsAdGroups",
  platform: "amazon-ads-sb",
  method: "PUT",
  path: "/sb/v4/adGroups",
  summary: "Updates Sponsored Brands ad groups.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.adGroups.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroups","wireName":"adGroups","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroups: Schema.Array(Schema.suspend(() => Models.Inline1084)),
  }),
  outputSchema: Models.UpdateSponsoredBrandsAdGroupsResponse,
});

export const amazon_ads_ads_updateSponsoredBrandsAds = defineEndpointDescriptor({
  id: "amazon-ads.ads.updateSponsoredBrandsAds",
  platform: "amazon-ads-sb",
  method: "PUT",
  path: "/sb/v4/ads",
  summary: "Updates Sponsored Brands ads.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.ads.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ads: Schema.Array(Schema.suspend(() => Models.Inline1103)),
  }),
  outputSchema: Models.UpdateSponsoredBrandsAdsResponse,
});

export const amazon_ads_ads_updateSponsoredBrandsAutoCollectionAds = defineEndpointDescriptor({
  id: "amazon-ads.ads.updateSponsoredBrandsAutoCollectionAds",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/ads/creatives/autoCollection",
  summary: "UpdateSponsoredBrandsAutoCollectionAds",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.ads.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ads: Schema.Array(Schema.suspend(() => Models.Inline895)),
  }),
  outputSchema: Models.UpdateSponsoredBrandsAutoCollectionAdsResponse,
});

export const amazon_ads_campaigns_updateSponsoredBrandsCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.campaigns.updateSponsoredBrandsCampaigns",
  platform: "amazon-ads-sb",
  method: "PUT",
  path: "/sb/v4/campaigns",
  summary: "Updates Sponsored Brands campaigns.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.campaigns.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaigns","wireName":"campaigns","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaigns: Schema.Array(Schema.suspend(() => Models.Inline1186)),
  }),
  outputSchema: Models.UpdateSponsoredBrandsCampaignsResponse,
});

export const amazon_ads_ads_updateSponsoredBrandsManualCollectionAds = defineEndpointDescriptor({
  id: "amazon-ads.ads.updateSponsoredBrandsManualCollectionAds",
  platform: "amazon-ads-sb",
  method: "POST",
  path: "/sb/ads/creatives/manualCollection",
  summary: "UpdateSponsoredBrandsManualCollectionAds",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.ads.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ads: Schema.Array(Schema.suspend(() => Models.Inline914)),
  }),
  outputSchema: Models.UpdateSponsoredBrandsManualCollectionAdsResponse,
});

export const amazon_ads_optimizationRules_updateSponsoredBrandsOptimizationRules = defineEndpointDescriptor({
  id: "amazon-ads.optimizationRules.updateSponsoredBrandsOptimizationRules",
  platform: "amazon-ads-sb",
  method: "PUT",
  path: "/sb/rules/optimization",
  summary: "UpdateSponsoredBrandsOptimizationRules",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads-sb.optimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"optimizationRules","wireName":"optimizationRules","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    optimizationRules: Schema.Array(Schema.suspend(() => Models.Inline1045)),
  }),
  outputSchema: Models.UpdateSponsoredBrandsOptimizationRulesResponse,
});

export const endpointDescriptors = [amazon_ads_optimizationRules_associateSponsoredBrandsOptimizationRules, amazon_ads_budgetRules_createAssociatedBudgetRulesForSBCampaigns, amazon_ads_adCreatives_createBrandVideoCreative, amazon_ads_budgetRules_createBudgetRulesForSBCampaigns, amazon_ads_adCreatives_createExtendedProductCollectionCreative, amazon_ads_adCreatives_createProductCollectionCreative, amazon_ads_adGroups_createSponsoredBrandsAdGroups, amazon_ads_ads_createSponsoredBrandsAutoCollectionAds, amazon_ads_ads_createSponsoredBrandsBrandVideoAds, amazon_ads_campaigns_createSponsoredBrandsCampaigns, amazon_ads_ads_createSponsoredBrandsExtendedProductCollectionAds, amazon_ads_ads_createSponsoredBrandsManualCollectionAds, amazon_ads_optimizationRules_createSponsoredBrandsOptimizationRules, amazon_ads_ads_createSponsoredBrandsProductCollectionAds, amazon_ads_ads_createSponsoredBrandStoreSpotlightAds, amazon_ads_ads_createSponsoredBrandsVideoAds, amazon_ads_adCreatives_createStoreSpotlightCreative, amazon_ads_adCreatives_createVideoCreative, amazon_ads_adGroups_deleteSponsoredBrandsAdGroups, amazon_ads_ads_deleteSponsoredBrandsAds, amazon_ads_campaigns_deleteSponsoredBrandsCampaigns, amazon_ads_budgetRules_disassociateAssociatedBudgetRuleForSBCampaigns, amazon_ads_optimizationRules_disassociateSponsoredBrandsOptimizationRules, amazon_ads_budgetRecommendations_getBudgetRecommendations, amazon_ads_budgetRules_getBudgetRuleByRuleIdForSBCampaigns, amazon_ads_budgetRules_getCampaignsAssociatedWithSBBudgetRule, amazon_ads_recommendations_getHeadlineRecommendations, amazon_ads_keywordRecommendations_getKeywordRecommendations, amazon_ads_budgetRules_getSBBudgetRulesForAdvertiser, amazon_ads_budgetRules_listAssociatedBudgetRulesForSBCampaigns, amazon_ads_adCreatives_listCreatives, amazon_ads_adMigrations_listMigrations, amazon_ads_adGroups_listSponsoredBrandsAdGroups, amazon_ads_ads_listSponsoredBrandsAds, amazon_ads_campaigns_listSponsoredBrandsCampaigns, amazon_ads_optimizationRules_listSponsoredBrandsOptimizationRules, amazon_ads_v3CampaignMigration_migrationJobResults, amazon_ads_v3CampaignMigration_migrationJobStatus, amazon_ads_v3CampaignMigration_migrationResults, amazon_ads_forecast_sBCampaignPerformanceForecasts, amazon_ads_budgetUsage_sbCampaignsBudgetUsage, amazon_ads_budgetRulesRecommendation_sBGetBudgetRulesRecommendation, amazon_ads_insights_sBInsightsCampaignInsights, amazon_ads_sBOptimizationRecommendations_sBOptimizationRecommendation, amazon_ads_targetingRecommendations_sBTargetingGetNegativeBrands, amazon_ads_productTargetingCategories_sBTargetingGetRefinementsForCategory, amazon_ads_productTargetingCategories_sBTargetingGetTargetableASINCounts, amazon_ads_productTargetingCategories_sBTargetingGetTargetableCategories, amazon_ads_v3CampaignMigration_startMigrationJob, amazon_ads_budgetRules_updateBudgetRulesForSBCampaigns, amazon_ads_adGroups_updateSponsoredBrandsAdGroups, amazon_ads_ads_updateSponsoredBrandsAds, amazon_ads_ads_updateSponsoredBrandsAutoCollectionAds, amazon_ads_campaigns_updateSponsoredBrandsCampaigns, amazon_ads_ads_updateSponsoredBrandsManualCollectionAds, amazon_ads_optimizationRules_updateSponsoredBrandsOptimizationRules] as const;
