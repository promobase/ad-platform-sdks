// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const amazon_ads_budgetRules_createAssociatedBudgetRulesForSDCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.createAssociatedBudgetRulesForSDCampaigns",
  platform: "amazon-ads",
  method: "POST",
  path: "/sd/campaigns/{campaignId}/budgetRules",
  summary: "Associates one or more budget rules to a campaign specified by identifer.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRules.manage"],
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
  outputSchema: Models.CreateAssociatedBudgetRulesForSDCampaignsResponse,
});

export const amazon_ads_brandSafetyDenyListDomains_createBrandSafetyDenyListDomains = defineEndpointDescriptor({
  id: "amazon-ads.brandSafetyDenyListDomains.createBrandSafetyDenyListDomains",
  platform: "amazon-ads",
  method: "POST",
  path: "/sd/brandSafety/deny",
  summary: "Creates one or more domains to add to a Brand Safety Deny List. The Brand Safety Deny List is at the advertiser level. It can take up to 15 minutes from the time a domain is added to the time it is reflected in the deny list.\n",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.brandSafetyDenyListDomains.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"domains","wireName":"domains","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    domains: Schema.Array(Schema.suspend(() => Models.Inline349)),
  }),
  outputSchema: Models.CreateBrandSafetyDenyListDomainsResponse,
});

export const amazon_ads_budgetRules_createBudgetRulesForSDCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.createBudgetRulesForSDCampaigns",
  platform: "amazon-ads",
  method: "POST",
  path: "/sd/budgetRules",
  summary: "Creates one or more budget rules.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"budgetRulesDetails","wireName":"budgetRulesDetails","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline361))),
  }),
  outputSchema: Models.CreateBudgetRulesForSDCampaignsResponse,
});

export const amazon_ads_snapshotAPIs_createSnapshot = defineEndpointDescriptor({
  id: "amazon-ads.snapshotAPIs.createSnapshot",
  platform: "amazon-ads",
  method: "POST",
  path: "/sd/{recordType}/snapshot",
  summary: "createSnapshot",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.snapshotAPIs.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"recordType","wireName":"recordType","location":"path","required":true,"nullable":false},
    {"name":"stateFilter","wireName":"stateFilter","location":"body","required":false,"nullable":false},
    {"name":"tacticFilter","wireName":"tacticFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    recordType: Schema.String,
    stateFilter: Schema.optional(Schema.String),
    tacticFilter: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CreateSnapshotResponse,
});

export const amazon_ads_brandSafetyDenyListDomains_deleteBrandSafetyDenyList = defineEndpointDescriptor({
  id: "amazon-ads.brandSafetyDenyListDomains.deleteBrandSafetyDenyList",
  platform: "amazon-ads",
  method: "DELETE",
  path: "/sd/brandSafety/deny",
  summary: "Archives all of the domains in the Brand Safety Deny List. It can take several hours from the time a domain is deleted to the time it is reflected in the deny list. You can check the status of the delete request by calling GET /sd/brandSafety/{requestId}/status. If the status is \"COMPLETED\", you can call GET /sd/brandSafety/deny to validate that your deny list has been successfully deleted.\n",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.brandSafetyDenyListDomains.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.DeleteBrandSafetyDenyListResponse,
});

export const amazon_ads_budgetRules_disassociateAssociatedBudgetRuleForSDCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.disassociateAssociatedBudgetRuleForSDCampaigns",
  platform: "amazon-ads",
  method: "DELETE",
  path: "/sd/campaigns/{campaignId}/budgetRules/{budgetRuleId}",
  summary: "Disassociates a budget rule specified by identifier from a campaign specified by identifier.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRules.manage"],
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
  outputSchema: Models.DisassociateAssociatedBudgetRuleForSDCampaignsResponse,
});

export const amazon_ads_snapshotAPIs_downloadSnapshotById = defineEndpointDescriptor({
  id: "amazon-ads.snapshotAPIs.downloadSnapshotById",
  platform: "amazon-ads",
  method: "GET",
  path: "/sd/snapshots/{snapshotId}/download",
  summary: "downloadSnapshotById",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.snapshotAPIs.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"snapshotId","wireName":"snapshotId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    snapshotId: Schema.String,
  }),
  outputSchema: Models.DownloadSnapshotByIdResponse,
});

export const amazon_ads_budgetRules_getBudgetRuleByRuleIdForSDCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.getBudgetRuleByRuleIdForSDCampaigns",
  platform: "amazon-ads",
  method: "GET",
  path: "/sd/budgetRules/{budgetRuleId}",
  summary: "Gets a budget rule specified by identifier.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRules.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"budgetRuleId","wireName":"budgetRuleId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    budgetRuleId: Schema.String,
  }),
  outputSchema: Models.GetBudgetRuleByRuleIdForSDCampaignsResponse,
});

export const amazon_ads_budgetRules_getCampaignsAssociatedWithSDBudgetRule = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.getCampaignsAssociatedWithSDBudgetRule",
  platform: "amazon-ads",
  method: "GET",
  path: "/sd/budgetRules/{budgetRuleId}/campaigns",
  summary: "Gets all the campaigns associated with a budget rule",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRules.read"],
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
  outputSchema: Models.GetCampaignsAssociatedWithSDBudgetRuleResponse,
});

export const amazon_ads_recommendations_getHeadlineRecommendationsForSD = defineEndpointDescriptor({
  id: "amazon-ads.recommendations.getHeadlineRecommendationsForSD",
  platform: "amazon-ads",
  method: "POST",
  path: "/sd/recommendations/creative/headline",
  summary: "getHeadlineRecommendationsForSD",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.recommendations.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adFormat","wireName":"adFormat","location":"body","required":false,"nullable":false},
    {"name":"asins","wireName":"asins","location":"body","required":false,"nullable":false},
    {"name":"maxNumRecommendations","wireName":"maxNumRecommendations","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adFormat: Schema.optional(Schema.String),
    asins: Schema.optional(Schema.Array(Schema.String)),
    maxNumRecommendations: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetHeadlineRecommendationsForSDResponse,
});

export const amazon_ads_brandSafetyRequestResults_getRequestResults = defineEndpointDescriptor({
  id: "amazon-ads.brandSafetyRequestResults.getRequestResults",
  platform: "amazon-ads",
  method: "GET",
  path: "/sd/brandSafety/{requestId}/results",
  summary: "Gets the results for the given request",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.brandSafetyRequestResults.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"requestId","wireName":"requestId","location":"path","required":true,"nullable":false},
    {"name":"startIndex","wireName":"startIndex","location":"query","required":false,"nullable":false},
    {"name":"count","wireName":"count","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    requestId: Schema.String,
    startIndex: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetRequestResultsResponse,
});

export const amazon_ads_brandSafetyRequestStatus_getRequestStatus = defineEndpointDescriptor({
  id: "amazon-ads.brandSafetyRequestStatus.getRequestStatus",
  platform: "amazon-ads",
  method: "GET",
  path: "/sd/brandSafety/{requestId}/status",
  summary: "Gets the status of the given request",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.brandSafetyRequestStatus.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"requestId","wireName":"requestId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    requestId: Schema.String,
  }),
  outputSchema: Models.GetRequestStatusResponse,
});

export const amazon_ads_budgetRecommendations_getSDBudgetRecommendations = defineEndpointDescriptor({
  id: "amazon-ads.budgetRecommendations.getSDBudgetRecommendations",
  platform: "amazon-ads",
  method: "POST",
  path: "/sd/campaigns/budgetRecommendations",
  summary: "Returns recommended daily budget and estimated missed opportunities for campaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRecommendations.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIds","wireName":"campaignIds","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIds: Schema.Array(Schema.String),
  }),
  outputSchema: Models.GetSDBudgetRecommendationsResponse,
});

export const amazon_ads_budgetRules_getSDBudgetRulesForAdvertiser = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.getSDBudgetRulesForAdvertiser",
  platform: "amazon-ads",
  method: "GET",
  path: "/sd/budgetRules",
  summary: "Get all budget rules created by an advertiser",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRules.read"],
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
  outputSchema: Models.GetSDBudgetRulesForAdvertiserResponse,
});

export const amazon_ads_snapshotAPIs_getSnapshotById = defineEndpointDescriptor({
  id: "amazon-ads.snapshotAPIs.getSnapshotById",
  platform: "amazon-ads",
  method: "GET",
  path: "/sd/snapshots/{snapshotId}",
  summary: "getSnapshotById",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.snapshotAPIs.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"snapshotId","wireName":"snapshotId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    snapshotId: Schema.String,
  }),
  outputSchema: Models.GetSnapshotByIdResponse,
});

export const amazon_ads_targetingRecommendations_getTargetBidRecommendations = defineEndpointDescriptor({
  id: "amazon-ads.targetingRecommendations.getTargetBidRecommendations",
  platform: "amazon-ads",
  method: "POST",
  path: "/sd/targets/bid/recommendations",
  summary: "Returns a set of bid recommendations for targeting clauses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.targetingRecommendations.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"products","wireName":"products","location":"body","required":false,"nullable":false},
    {"name":"targetingClauses","wireName":"targetingClauses","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    products: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline418))),
    targetingClauses: Schema.Array(Schema.suspend(() => Models.Inline419)),
  }),
  outputSchema: Models.GetTargetBidRecommendationsResponse,
});

export const amazon_ads_targetingRecommendations_getTargetRecommendations = defineEndpointDescriptor({
  id: "amazon-ads.targetingRecommendations.getTargetRecommendations",
  platform: "amazon-ads",
  method: "POST",
  path: "/sd/targets/recommendations",
  summary: "Returns a set of recommended products and categories to target",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.targetingRecommendations.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"locale","wireName":"locale","location":"query","required":false,"nullable":false},
    {"name":"products","wireName":"products","location":"body","required":true,"nullable":false},
    {"name":"tactic","wireName":"tactic","location":"body","required":true,"nullable":false},
    {"name":"typeFilter","wireName":"typeFilter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    locale: Schema.optional(Schema.String),
    products: Schema.Array(Schema.suspend(() => Models.Inline425)),
    tactic: Schema.String,
    typeFilter: Schema.Array(Schema.String),
  }),
  outputSchema: Models.GetTargetRecommendationsResponse,
});

export const amazon_ads_budgetRules_listAssociatedBudgetRulesForSDCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.listAssociatedBudgetRulesForSDCampaigns",
  platform: "amazon-ads",
  method: "GET",
  path: "/sd/campaigns/{campaignId}/budgetRules",
  summary: "Gets a list of budget rules associated to a campaign specified by identifier.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRules.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.Number,
  }),
  outputSchema: Models.ListAssociatedBudgetRulesForSDCampaignsResponse,
});

export const amazon_ads_brandSafetyDenyListDomains_listDomains = defineEndpointDescriptor({
  id: "amazon-ads.brandSafetyDenyListDomains.listDomains",
  platform: "amazon-ads",
  method: "GET",
  path: "/sd/brandSafety/deny",
  summary: "Gets a list of websites/apps that are on the advertiser's Brand Safety Deny List.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.brandSafetyDenyListDomains.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"startIndex","wireName":"startIndex","location":"query","required":false,"nullable":false},
    {"name":"count","wireName":"count","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    startIndex: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.ListDomainsResponse,
});

export const amazon_ads_brandSafetyRequestStatus_listRequestStatus = defineEndpointDescriptor({
  id: "amazon-ads.brandSafetyRequestStatus.listRequestStatus",
  platform: "amazon-ads",
  method: "GET",
  path: "/sd/brandSafety/status",
  summary: "List status of all requests",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.brandSafetyRequestStatus.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.ListRequestStatusResponse,
});

export const amazon_ads_budgetUsage_sdCampaignsBudgetUsage = defineEndpointDescriptor({
  id: "amazon-ads.budgetUsage.sdCampaignsBudgetUsage",
  platform: "amazon-ads",
  method: "POST",
  path: "/sd/campaigns/budget/usage",
  summary: "Budget usage API for SD campaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetUsage.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIds","wireName":"campaignIds","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIds: Schema.optional(Schema.Array(Schema.String)),
  }),
  outputSchema: Models.SdCampaignsBudgetUsageResponse,
});

export const amazon_ads_budgetRules_updateBudgetRulesForSDCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.updateBudgetRulesForSDCampaigns",
  platform: "amazon-ads",
  method: "PUT",
  path: "/sd/budgetRules",
  summary: "Update one or more budget rules.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"budgetRulesDetails","wireName":"budgetRulesDetails","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline373))),
  }),
  outputSchema: Models.UpdateBudgetRulesForSDCampaignsResponse,
});

export const endpointDescriptors = [amazon_ads_budgetRules_createAssociatedBudgetRulesForSDCampaigns, amazon_ads_brandSafetyDenyListDomains_createBrandSafetyDenyListDomains, amazon_ads_budgetRules_createBudgetRulesForSDCampaigns, amazon_ads_snapshotAPIs_createSnapshot, amazon_ads_brandSafetyDenyListDomains_deleteBrandSafetyDenyList, amazon_ads_budgetRules_disassociateAssociatedBudgetRuleForSDCampaigns, amazon_ads_snapshotAPIs_downloadSnapshotById, amazon_ads_budgetRules_getBudgetRuleByRuleIdForSDCampaigns, amazon_ads_budgetRules_getCampaignsAssociatedWithSDBudgetRule, amazon_ads_recommendations_getHeadlineRecommendationsForSD, amazon_ads_brandSafetyRequestResults_getRequestResults, amazon_ads_brandSafetyRequestStatus_getRequestStatus, amazon_ads_budgetRecommendations_getSDBudgetRecommendations, amazon_ads_budgetRules_getSDBudgetRulesForAdvertiser, amazon_ads_snapshotAPIs_getSnapshotById, amazon_ads_targetingRecommendations_getTargetBidRecommendations, amazon_ads_targetingRecommendations_getTargetRecommendations, amazon_ads_budgetRules_listAssociatedBudgetRulesForSDCampaigns, amazon_ads_brandSafetyDenyListDomains_listDomains, amazon_ads_brandSafetyRequestStatus_listRequestStatus, amazon_ads_budgetUsage_sdCampaignsBudgetUsage, amazon_ads_budgetRules_updateBudgetRulesForSDCampaigns] as const;
