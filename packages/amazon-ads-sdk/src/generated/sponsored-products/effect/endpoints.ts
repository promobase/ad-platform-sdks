// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const amazon_ads_optimizationRules_associateOptimizationRulesToCampaign = defineEndpointDescriptor({
  id: "amazon-ads.optimizationRules.associateOptimizationRulesToCampaign",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaigns/{campaignId}/optimizationRules",
  summary: "Associates one or multiple optimization rules with a campaign.\n",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.optimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"optimizationRuleIds","wireName":"optimizationRuleIds","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.String,
    optimizationRuleIds: Schema.Array(Schema.String),
  }),
  outputSchema: Models.AssociateOptimizationRulesToCampaignResponse,
});

export const amazon_ads_budgetRules_bulkBudgetRulesAssociationForSP = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.bulkBudgetRulesAssociationForSP",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/budgetRulesAssociation",
  summary: "Associates budget rules to one or more campaigns.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"budgetRulesAssociations","wireName":"budgetRulesAssociations","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    budgetRulesAssociations: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline2725))),
  }),
  outputSchema: Models.BulkBudgetRulesAssociationForSPResponse,
});

export const amazon_ads_budgetRules_bulkBudgetRulesDisAssociationForSP = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.bulkBudgetRulesDisAssociationForSP",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/budgetRulesAssociation/delete",
  summary: "DisAssociates budget rules from one or more campaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"budgetRulesDisAssociations","wireName":"budgetRulesDisAssociations","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    budgetRulesDisAssociations: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline2729))),
  }),
  outputSchema: Models.BulkBudgetRulesDisAssociationForSPResponse,
});

export const amazon_ads_budgetRules_createAssociatedBudgetRulesForSPCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.createAssociatedBudgetRulesForSPCampaigns",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaigns/{campaignId}/budgetRules",
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
  outputSchema: Models.CreateAssociatedBudgetRulesForSPCampaignsResponse,
});

export const amazon_ads_budgetRules_createBudgetRulesForSPCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.createBudgetRulesForSPCampaigns",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/budgetRules",
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
    budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline2695))),
  }),
  outputSchema: Models.CreateBudgetRulesForSPCampaignsResponse,
});

export const amazon_ads_campaignOptimizationRules_createOptimizationRule = defineEndpointDescriptor({
  id: "amazon-ads.campaignOptimizationRules.createOptimizationRule",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/rules/campaignOptimization",
  summary: "Creates a campaign optimization rule.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignOptimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIds","wireName":"campaignIds","location":"body","required":true,"nullable":false},
    {"name":"recurrence","wireName":"recurrence","location":"body","required":true,"nullable":false},
    {"name":"ruleAction","wireName":"ruleAction","location":"body","required":true,"nullable":false},
    {"name":"ruleCondition","wireName":"ruleCondition","location":"body","required":false,"nullable":false},
    {"name":"ruleName","wireName":"ruleName","location":"body","required":false,"nullable":false},
    {"name":"ruleType","wireName":"ruleType","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIds: Schema.Array(Schema.String),
    recurrence: Schema.String,
    ruleAction: Schema.String,
    ruleCondition: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline2993))),
    ruleName: Schema.optional(Schema.String),
    ruleType: Schema.String,
  }),
  outputSchema: Models.CreateOptimizationRuleResponse,
});

export const amazon_ads_optimizationRules_createOptimizationRules = defineEndpointDescriptor({
  id: "amazon-ads.optimizationRules.createOptimizationRules",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/rules/optimization",
  summary: "Creates one or more optimization rules.\n",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.optimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"optimizationRules","wireName":"optimizationRules","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    optimizationRules: Schema.Array(Schema.suspend(() => Models.Inline3020)),
  }),
  outputSchema: Models.CreateOptimizationRulesResponse,
});

export const amazon_ads_adGroups_createSponsoredProductsAdGroups = defineEndpointDescriptor({
  id: "amazon-ads.adGroups.createSponsoredProductsAdGroups",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/adGroups",
  summary: "CreateSponsoredProductsAdGroups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.adGroups.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroups","wireName":"adGroups","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroups: Schema.Array(Schema.suspend(() => Models.Inline2667)),
  }),
  outputSchema: Models.CreateSponsoredProductsAdGroupsResponse,
});

export const amazon_ads_campaignNegativeKeywords_createSponsoredProductsCampaignNegativeKeywords = defineEndpointDescriptor({
  id: "amazon-ads.campaignNegativeKeywords.createSponsoredProductsCampaignNegativeKeywords",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaignNegativeKeywords",
  summary: "CreateSponsoredProductsCampaignNegativeKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignNegativeKeywords.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignNegativeKeywords","wireName":"campaignNegativeKeywords","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignNegativeKeywords: Schema.Array(Schema.suspend(() => Models.Inline2739)),
  }),
  outputSchema: Models.CreateSponsoredProductsCampaignNegativeKeywordsResponse,
});

export const amazon_ads_campaignNegativeTargetingClauses_createSponsoredProductsCampaignNegativeTargetingClauses = defineEndpointDescriptor({
  id: "amazon-ads.campaignNegativeTargetingClauses.createSponsoredProductsCampaignNegativeTargetingClauses",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaignNegativeTargets",
  summary: "CreateSponsoredProductsCampaignNegativeTargetingClauses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignNegativeTargetingClauses.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignNegativeTargetingClauses","wireName":"campaignNegativeTargetingClauses","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignNegativeTargetingClauses: Schema.Array(Schema.suspend(() => Models.Inline2762)),
  }),
  outputSchema: Models.CreateSponsoredProductsCampaignNegativeTargetingClausesResponse,
});

export const amazon_ads_campaigns_createSponsoredProductsCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.campaigns.createSponsoredProductsCampaigns",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaigns",
  summary: "CreateSponsoredProductsCampaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaigns.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaigns","wireName":"campaigns","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaigns: Schema.Array(Schema.suspend(() => Models.Inline2791)),
  }),
  outputSchema: Models.CreateSponsoredProductsCampaignsResponse,
});

export const amazon_ads_keywords_createSponsoredProductsKeywords = defineEndpointDescriptor({
  id: "amazon-ads.keywords.createSponsoredProductsKeywords",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/keywords",
  summary: "CreateSponsoredProductsKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.keywords.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"keywords","wireName":"keywords","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    keywords: Schema.Array(Schema.suspend(() => Models.Inline2885)),
  }),
  outputSchema: Models.CreateSponsoredProductsKeywordsResponse,
});

export const amazon_ads_negativeKeywords_createSponsoredProductsNegativeKeywords = defineEndpointDescriptor({
  id: "amazon-ads.negativeKeywords.createSponsoredProductsNegativeKeywords",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/negativeKeywords",
  summary: "CreateSponsoredProductsNegativeKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.negativeKeywords.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"negativeKeywords","wireName":"negativeKeywords","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    negativeKeywords: Schema.Array(Schema.suspend(() => Models.Inline2910)),
  }),
  outputSchema: Models.CreateSponsoredProductsNegativeKeywordsResponse,
});

export const amazon_ads_negativeTargetingClauses_createSponsoredProductsNegativeTargetingClauses = defineEndpointDescriptor({
  id: "amazon-ads.negativeTargetingClauses.createSponsoredProductsNegativeTargetingClauses",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/negativeTargets",
  summary: "CreateSponsoredProductsNegativeTargetingClauses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.negativeTargetingClauses.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"negativeTargetingClauses","wireName":"negativeTargetingClauses","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    negativeTargetingClauses: Schema.Array(Schema.suspend(() => Models.Inline2935)),
  }),
  outputSchema: Models.CreateSponsoredProductsNegativeTargetingClausesResponse,
});

export const amazon_ads_productAds_createSponsoredProductsProductAds = defineEndpointDescriptor({
  id: "amazon-ads.productAds.createSponsoredProductsProductAds",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/productAds",
  summary: "CreateSponsoredProductsProductAds",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.productAds.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"productAds","wireName":"productAds","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productAds: Schema.Array(Schema.suspend(() => Models.Inline2968)),
  }),
  outputSchema: Models.CreateSponsoredProductsProductAdsResponse,
});

export const amazon_ads_targetingClauses_createSponsoredProductsTargetingClauses = defineEndpointDescriptor({
  id: "amazon-ads.targetingClauses.createSponsoredProductsTargetingClauses",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targets",
  summary: "CreateSponsoredProductsTargetingClauses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.targetingClauses.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"targetingClauses","wireName":"targetingClauses","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    targetingClauses: Schema.Array(Schema.suspend(() => Models.Inline3096)),
  }),
  outputSchema: Models.CreateSponsoredProductsTargetingClausesResponse,
});

export const amazon_ads_targetPromotionGroups_createTargetPromotionGroups = defineEndpointDescriptor({
  id: "amazon-ads.targetPromotionGroups.createTargetPromotionGroups",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targetPromotionGroups",
  summary: "CreateTargetPromotionGroups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.targetPromotionGroups.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupId","wireName":"adGroupId","location":"body","required":true,"nullable":false},
    {"name":"adIds","wireName":"adIds","location":"body","required":false,"nullable":false},
    {"name":"existingCampaignDetails","wireName":"existingCampaignDetails","location":"body","required":false,"nullable":false},
    {"name":"newCampaignDetails","wireName":"newCampaignDetails","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupId: Schema.String,
    adIds: Schema.optional(Schema.Array(Schema.String)),
    existingCampaignDetails: Schema.optional(Models.Inline3062),
    newCampaignDetails: Schema.optional(Models.Inline3063),
  }),
  outputSchema: Models.CreateTargetPromotionGroupsResponse,
});

export const amazon_ads_targetPromotionGroups_createTargetPromotionGroupTargets = defineEndpointDescriptor({
  id: "amazon-ads.targetPromotionGroups.createTargetPromotionGroupTargets",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targetPromotionGroups/targets",
  summary: "CreateTargetPromotionGroupTargets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.targetPromotionGroups.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"targetPromotionGroupId","wireName":"targetPromotionGroupId","location":"body","required":true,"nullable":false},
    {"name":"targets","wireName":"targets","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    targetPromotionGroupId: Schema.String,
    targets: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline3085))),
  }),
  outputSchema: Models.CreateTargetPromotionGroupTargetsResponse,
});

export const amazon_ads_campaignOptimizationRules_deleteCampaignOptimizationRule = defineEndpointDescriptor({
  id: "amazon-ads.campaignOptimizationRules.deleteCampaignOptimizationRule",
  platform: "amazon-ads",
  method: "DELETE",
  path: "/sp/rules/campaignOptimization/{campaignOptimizationId}",
  summary: "Deletes a campaign optimization rule specified by identifier.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignOptimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignOptimizationId","wireName":"campaignOptimizationId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignOptimizationId: Schema.String,
  }),
  outputSchema: Models.DeleteCampaignOptimizationRuleResponse,
});

export const amazon_ads_adGroups_deleteSponsoredProductsAdGroups = defineEndpointDescriptor({
  id: "amazon-ads.adGroups.deleteSponsoredProductsAdGroups",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/adGroups/delete",
  summary: "DeleteSponsoredProductsAdGroups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.adGroups.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Models.Inline2675,
  }),
  outputSchema: Models.DeleteSponsoredProductsAdGroupsResponse,
});

export const amazon_ads_campaignNegativeKeywords_deleteSponsoredProductsCampaignNegativeKeywords = defineEndpointDescriptor({
  id: "amazon-ads.campaignNegativeKeywords.deleteSponsoredProductsCampaignNegativeKeywords",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaignNegativeKeywords/delete",
  summary: "DeleteSponsoredProductsCampaignNegativeKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignNegativeKeywords.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignNegativeKeywordIdFilter","wireName":"campaignNegativeKeywordIdFilter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignNegativeKeywordIdFilter: Models.Inline2747,
  }),
  outputSchema: Models.DeleteSponsoredProductsCampaignNegativeKeywordsResponse,
});

export const amazon_ads_campaignNegativeTargetingClauses_deleteSponsoredProductsCampaignNegativeTargetingClauses = defineEndpointDescriptor({
  id: "amazon-ads.campaignNegativeTargetingClauses.deleteSponsoredProductsCampaignNegativeTargetingClauses",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaignNegativeTargets/delete",
  summary: "DeleteSponsoredProductsCampaignNegativeTargetingClauses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignNegativeTargetingClauses.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignNegativeTargetIdFilter","wireName":"campaignNegativeTargetIdFilter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignNegativeTargetIdFilter: Models.Inline2770,
  }),
  outputSchema: Models.DeleteSponsoredProductsCampaignNegativeTargetingClausesResponse,
});

export const amazon_ads_campaigns_deleteSponsoredProductsCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.campaigns.deleteSponsoredProductsCampaigns",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaigns/delete",
  summary: "DeleteSponsoredProductsCampaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaigns.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIdFilter: Models.Inline2836,
  }),
  outputSchema: Models.DeleteSponsoredProductsCampaignsResponse,
});

export const amazon_ads_keywords_deleteSponsoredProductsKeywords = defineEndpointDescriptor({
  id: "amazon-ads.keywords.deleteSponsoredProductsKeywords",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/keywords/delete",
  summary: "DeleteSponsoredProductsKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.keywords.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"keywordIdFilter","wireName":"keywordIdFilter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    keywordIdFilter: Models.Inline2893,
  }),
  outputSchema: Models.DeleteSponsoredProductsKeywordsResponse,
});

export const amazon_ads_negativeKeywords_deleteSponsoredProductsNegativeKeywords = defineEndpointDescriptor({
  id: "amazon-ads.negativeKeywords.deleteSponsoredProductsNegativeKeywords",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/negativeKeywords/delete",
  summary: "DeleteSponsoredProductsNegativeKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.negativeKeywords.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"negativeKeywordIdFilter","wireName":"negativeKeywordIdFilter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    negativeKeywordIdFilter: Models.Inline2918,
  }),
  outputSchema: Models.DeleteSponsoredProductsNegativeKeywordsResponse,
});

export const amazon_ads_negativeTargetingClauses_deleteSponsoredProductsNegativeTargetingClauses = defineEndpointDescriptor({
  id: "amazon-ads.negativeTargetingClauses.deleteSponsoredProductsNegativeTargetingClauses",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/negativeTargets/delete",
  summary: "DeleteSponsoredProductsNegativeTargetingClauses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.negativeTargetingClauses.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"negativeTargetIdFilter","wireName":"negativeTargetIdFilter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    negativeTargetIdFilter: Models.Inline2949,
  }),
  outputSchema: Models.DeleteSponsoredProductsNegativeTargetingClausesResponse,
});

export const amazon_ads_productAds_deleteSponsoredProductsProductAds = defineEndpointDescriptor({
  id: "amazon-ads.productAds.deleteSponsoredProductsProductAds",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/productAds/delete",
  summary: "DeleteSponsoredProductsProductAds",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.productAds.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adIdFilter","wireName":"adIdFilter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adIdFilter: Models.Inline2976,
  }),
  outputSchema: Models.DeleteSponsoredProductsProductAdsResponse,
});

export const amazon_ads_targetingClauses_deleteSponsoredProductsTargetingClauses = defineEndpointDescriptor({
  id: "amazon-ads.targetingClauses.deleteSponsoredProductsTargetingClauses",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targets/delete",
  summary: "DeleteSponsoredProductsTargetingClauses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.targetingClauses.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"targetIdFilter","wireName":"targetIdFilter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    targetIdFilter: Models.Inline3124,
  }),
  outputSchema: Models.DeleteSponsoredProductsTargetingClausesResponse,
});

export const amazon_ads_budgetRules_disassociateAssociatedBudgetRuleForSPCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.disassociateAssociatedBudgetRuleForSPCampaigns",
  platform: "amazon-ads",
  method: "DELETE",
  path: "/sp/campaigns/{campaignId}/budgetRules/{budgetRuleId}",
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
  outputSchema: Models.DisassociateAssociatedBudgetRuleForSPCampaignsResponse,
});

export const amazon_ads_consolidatedRecommendations_fetchCampaignRecommendations = defineEndpointDescriptor({
  id: "amazon-ads.consolidatedRecommendations.fetchCampaignRecommendations",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaign/recommendations",
  summary: "fetchCampaignRecommendations",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.consolidatedRecommendations.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaigns","wireName":"campaigns","location":"body","required":true,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaigns: Schema.Array(Schema.suspend(() => Models.Inline2735)),
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.FetchCampaignRecommendationsResponse,
});

export const amazon_ads_budgetRecommendationNewCampaigns_getBudgetRecommendation = defineEndpointDescriptor({
  id: "amazon-ads.budgetRecommendationNewCampaigns.getBudgetRecommendation",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaigns/initialBudgetRecommendation",
  summary: "getBudgetRecommendation",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRecommendationNewCampaigns.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroups","wireName":"adGroups","location":"body","required":true,"nullable":false},
    {"name":"bidding","wireName":"bidding","location":"body","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"body","required":false,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"body","required":false,"nullable":false},
    {"name":"targetingType","wireName":"targetingType","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroups: Schema.Array(Schema.suspend(() => Models.Inline2847)),
    bidding: Models.Inline2848,
    endDate: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    targetingType: Schema.String,
  }),
  outputSchema: Models.GetBudgetRecommendationResponse,
});

export const amazon_ads_budgetRecommendationsAndMissedOpportunities_getBudgetRecommendations = defineEndpointDescriptor({
  id: "amazon-ads.budgetRecommendationsAndMissedOpportunities.getBudgetRecommendations",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaigns/budgetRecommendations",
  summary: "Get recommended daily budget and estimated missed opportunities for campaigns.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRecommendationsAndMissedOpportunities.manage"],
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

export const amazon_ads_budgetRules_getBudgetRuleByRuleIdForSPCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.getBudgetRuleByRuleIdForSPCampaigns",
  platform: "amazon-ads",
  method: "GET",
  path: "/sp/budgetRules/{budgetRuleId}",
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
  outputSchema: Models.GetBudgetRuleByRuleIdForSPCampaignsResponse,
});

export const amazon_ads_campaignOptimizationRules_getCampaignOptimizationRule = defineEndpointDescriptor({
  id: "amazon-ads.campaignOptimizationRules.getCampaignOptimizationRule",
  platform: "amazon-ads",
  method: "GET",
  path: "/sp/rules/campaignOptimization/{campaignOptimizationId}",
  summary: "Gets a campaign optimization rule specified by identifier.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignOptimizationRules.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignOptimizationId","wireName":"campaignOptimizationId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignOptimizationId: Schema.String,
  }),
  outputSchema: Models.GetCampaignOptimizationRuleResponse,
});

export const amazon_ads_consolidatedRecommendations_getCampaignRecommendations = defineEndpointDescriptor({
  id: "amazon-ads.consolidatedRecommendations.getCampaignRecommendations",
  platform: "amazon-ads",
  method: "GET",
  path: "/sp/campaign/recommendations",
  summary: "getCampaignRecommendations",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.consolidatedRecommendations.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIds","wireName":"campaignIds","location":"query","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIds: Schema.optional(Schema.Array(Schema.String)),
    nextToken: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetCampaignRecommendationsResponse,
});

export const amazon_ads_budgetRules_getCampaignsAssociatedWithSPBudgetRule = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.getCampaignsAssociatedWithSPBudgetRule",
  platform: "amazon-ads",
  method: "GET",
  path: "/sp/budgetRules/{budgetRuleId}/campaigns",
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
  outputSchema: Models.GetCampaignsAssociatedWithSPBudgetRuleResponse,
});

export const amazon_ads_productTargeting_getCategoryRecommendationsForASINs = defineEndpointDescriptor({
  id: "amazon-ads.productTargeting.getCategoryRecommendationsForASINs",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targets/categories/recommendations",
  summary: "Returns a list of category recommendations for the input list of ASINs.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.productTargeting.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"locale","wireName":"locale","location":"query","required":false,"nullable":false},
    {"name":"asins","wireName":"asins","location":"body","required":false,"nullable":false},
    {"name":"includeAncestor","wireName":"includeAncestor","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    locale: Schema.optional(Schema.String),
    asins: Schema.optional(Schema.Array(Schema.String)),
    includeAncestor: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.GetCategoryRecommendationsForASINsResponse,
});

export const amazon_ads_keywordTargets_getGlobalRankedKeywordRecommendation = defineEndpointDescriptor({
  id: "amazon-ads.keywordTargets.getGlobalRankedKeywordRecommendation",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/global/targets/keywords/recommendations/list",
  summary: "Get global keyword recommendations",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.keywordTargets.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetGlobalRankedKeywordRecommendationResponse,
});

export const amazon_ads_keywordGroupTargetingRecommendations_getKeywordGroupRecommendations = defineEndpointDescriptor({
  id: "amazon-ads.keywordGroupTargetingRecommendations.getKeywordGroupRecommendations",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targeting/recommendations/keywordGroups",
  summary: "getKeywordGroupRecommendations",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.keywordGroupTargetingRecommendations.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"asins","wireName":"asins","location":"body","required":true,"nullable":false},
    {"name":"countryCode","wireName":"countryCode","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    asins: Schema.Array(Schema.String),
    countryCode: Schema.optional(Schema.String),
    nextToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetKeywordGroupRecommendationsResponse,
});

export const amazon_ads_multiCountryThemeBasedBidRecommendations_getMultiCountryThemeBasedBidRecommendationForAdGroupV1 = defineEndpointDescriptor({
  id: "amazon-ads.multiCountryThemeBasedBidRecommendations.getMultiCountryThemeBasedBidRecommendationForAdGroupV1",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/global/targets/bid/recommendations",
  summary: "Get bid recommendations for multi-country ad groups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.multiCountryThemeBasedBidRecommendations.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetMultiCountryThemeBasedBidRecommendationForAdGroupV1Response,
});

export const amazon_ads_productTargeting_getNegativeBrands = defineEndpointDescriptor({
  id: "amazon-ads.productTargeting.getNegativeBrands",
  platform: "amazon-ads",
  method: "GET",
  path: "/sp/negativeTargets/brands/recommendations",
  summary: "Returns brands recommended for negative targeting.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.productTargeting.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetNegativeBrandsResponse,
});

export const amazon_ads_campaignOptimizationRules_getOptimizationRuleEligibility = defineEndpointDescriptor({
  id: "amazon-ads.campaignOptimizationRules.getOptimizationRuleEligibility",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/rules/campaignOptimization/eligibility",
  summary: "Gets a campaign optimization rule eligibility for SP campaigns.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignOptimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIds","wireName":"campaignIds","location":"body","required":true,"nullable":false},
    {"name":"requirePerformanceMetrics","wireName":"requirePerformanceMetrics","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIds: Schema.Array(Schema.String),
    requirePerformanceMetrics: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.GetOptimizationRuleEligibilityResponse,
});

export const amazon_ads_productRecommendationService_getProductRecommendations = defineEndpointDescriptor({
  id: "amazon-ads.productRecommendationService.getProductRecommendations",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targets/products/recommendations",
  summary: "Suggested target ASINs for your advertised product",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.productRecommendationService.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adAsins","wireName":"adAsins","location":"body","required":true,"nullable":false},
    {"name":"count","wireName":"count","location":"body","required":false,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"body","required":false,"nullable":false},
    {"name":"locale","wireName":"locale","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAsins: Schema.Array(Schema.String),
    count: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetProductRecommendationsResponse,
});

export const amazon_ads_keywordTargets_getRankedKeywordRecommendation = defineEndpointDescriptor({
  id: "amazon-ads.keywordTargets.getRankedKeywordRecommendation",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targets/keywords/recommendations",
  summary: "Get keyword recommendations",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.keywordTargets.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetRankedKeywordRecommendationResponse,
});

export const amazon_ads_productTargeting_getRefinementsForCategory = defineEndpointDescriptor({
  id: "amazon-ads.productTargeting.getRefinementsForCategory",
  platform: "amazon-ads",
  method: "GET",
  path: "/sp/targets/category/{categoryId}/refinements",
  summary: "Returns refinements according to category input.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.productTargeting.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"categoryId","wireName":"categoryId","location":"path","required":true,"nullable":false},
    {"name":"locale","wireName":"locale","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    categoryId: Schema.String,
    locale: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetRefinementsForCategoryResponse,
});

export const amazon_ads_campaignOptimizationRules_getRuleNotification = defineEndpointDescriptor({
  id: "amazon-ads.campaignOptimizationRules.getRuleNotification",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/rules/campaignOptimization/state",
  summary: "Gets campaign optimization rule state. Recommended refresh frequency is once a day.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignOptimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIds","wireName":"campaignIds","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIds: Schema.Array(Schema.String),
  }),
  outputSchema: Models.GetRuleNotificationResponse,
});

export const amazon_ads_budgetRules_getSPBudgetRulesForAdvertiser = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.getSPBudgetRulesForAdvertiser",
  platform: "amazon-ads",
  method: "GET",
  path: "/sp/budgetRules",
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
  outputSchema: Models.GetSPBudgetRulesForAdvertiserResponse,
});

export const amazon_ads_productTargeting_getTargetableASINCounts = defineEndpointDescriptor({
  id: "amazon-ads.productTargeting.getTargetableASINCounts",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targets/products/count",
  summary: "Get number of targetable asins based on refinements provided by the user.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.productTargeting.manage"],
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
    ageRanges: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline3155))),
    brands: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline3156))),
    category: Schema.String,
    genres: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline3157))),
    isPrimeShipping: Schema.optional(Schema.Boolean),
    priceRange: Schema.optional(Models.Inline3158),
    ratingRange: Schema.optional(Models.Inline3159),
  }),
  outputSchema: Models.GetTargetableASINCountsResponse,
});

export const amazon_ads_productTargeting_getTargetableCategories = defineEndpointDescriptor({
  id: "amazon-ads.productTargeting.getTargetableCategories",
  platform: "amazon-ads",
  method: "GET",
  path: "/sp/targets/categories",
  summary: "Returns all targetable categories.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["amazon-ads.productTargeting.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"locale","wireName":"locale","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    locale: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetTargetableCategoriesResponse,
});

export const amazon_ads_targetPromotionGroups_getTargetPromotionGroupsRecommendations = defineEndpointDescriptor({
  id: "amazon-ads.targetPromotionGroups.getTargetPromotionGroupsRecommendations",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targetPromotionGroups/recommendations",
  summary: "GetTargetPromotionGroupsRecommendations",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.targetPromotionGroups.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":false,"nullable":false},
    {"name":"adIdFilter","wireName":"adIdFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Schema.optional(Models.Inline3079),
    adIdFilter: Schema.optional(Models.Inline3080),
    campaignIdFilter: Schema.optional(Models.Inline3081),
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetTargetPromotionGroupsRecommendationsResponse,
});

export const amazon_ads_themeBasedBidRecommendations_getThemeBasedBidRecommendationForAdGroupV1 = defineEndpointDescriptor({
  id: "amazon-ads.themeBasedBidRecommendations.getThemeBasedBidRecommendationForAdGroupV1",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targets/bid/recommendations",
  summary: "Get bid recommendations for ad groups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.themeBasedBidRecommendations.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetThemeBasedBidRecommendationForAdGroupV1Response,
});

export const amazon_ads_budgetRules_listAssociatedBudgetRulesForSPCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.listAssociatedBudgetRulesForSPCampaigns",
  platform: "amazon-ads",
  method: "GET",
  path: "/sp/campaigns/{campaignId}/budgetRules",
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
  outputSchema: Models.ListAssociatedBudgetRulesForSPCampaignsResponse,
});

export const amazon_ads_adGroups_listSponsoredProductsAdGroups = defineEndpointDescriptor({
  id: "amazon-ads.adGroups.listSponsoredProductsAdGroups",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/adGroups/list",
  summary: "ListSponsoredProductsAdGroups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.adGroups.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignTargetingTypeFilter","wireName":"campaignTargetingTypeFilter","location":"body","required":false,"nullable":false},
    {"name":"includeExtendedDataFields","wireName":"includeExtendedDataFields","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nameFilter","wireName":"nameFilter","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"stateFilter","wireName":"stateFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Schema.optional(Models.Inline2683),
    campaignIdFilter: Schema.optional(Models.Inline2684),
    campaignTargetingTypeFilter: Schema.optional(Schema.String),
    includeExtendedDataFields: Schema.optional(Schema.Boolean),
    maxResults: Schema.optional(Schema.Number),
    nameFilter: Schema.optional(Models.Inline2685),
    nextToken: Schema.optional(Schema.String),
    stateFilter: Schema.optional(Models.Inline2686),
  }),
  outputSchema: Models.ListSponsoredProductsAdGroupsResponse,
});

export const amazon_ads_campaignNegativeKeywords_listSponsoredProductsCampaignNegativeKeywords = defineEndpointDescriptor({
  id: "amazon-ads.campaignNegativeKeywords.listSponsoredProductsCampaignNegativeKeywords",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaignNegativeKeywords/list",
  summary: "ListSponsoredProductsCampaignNegativeKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignNegativeKeywords.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignNegativeKeywordIdFilter","wireName":"campaignNegativeKeywordIdFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignNegativeKeywordTextFilter","wireName":"campaignNegativeKeywordTextFilter","location":"body","required":false,"nullable":false},
    {"name":"includeExtendedDataFields","wireName":"includeExtendedDataFields","location":"body","required":false,"nullable":false},
    {"name":"matchTypeFilter","wireName":"matchTypeFilter","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"stateFilter","wireName":"stateFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIdFilter: Schema.optional(Models.Inline2755),
    campaignNegativeKeywordIdFilter: Schema.optional(Models.Inline2756),
    campaignNegativeKeywordTextFilter: Schema.optional(Models.Inline2757),
    includeExtendedDataFields: Schema.optional(Schema.Boolean),
    matchTypeFilter: Schema.optional(Schema.Array(Schema.String)),
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
    stateFilter: Schema.optional(Models.Inline2758),
  }),
  outputSchema: Models.ListSponsoredProductsCampaignNegativeKeywordsResponse,
});

export const amazon_ads_campaignNegativeTargetingClauses_listSponsoredProductsCampaignNegativeTargetingClauses = defineEndpointDescriptor({
  id: "amazon-ads.campaignNegativeTargetingClauses.listSponsoredProductsCampaignNegativeTargetingClauses",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaignNegativeTargets/list",
  summary: "ListSponsoredProductsCampaignNegativeTargetingClauses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignNegativeTargetingClauses.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"asinFilter","wireName":"asinFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignNegativeTargetIdFilter","wireName":"campaignNegativeTargetIdFilter","location":"body","required":false,"nullable":false},
    {"name":"includeExtendedDataFields","wireName":"includeExtendedDataFields","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"stateFilter","wireName":"stateFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    asinFilter: Schema.optional(Models.Inline2780),
    campaignIdFilter: Schema.optional(Models.Inline2781),
    campaignNegativeTargetIdFilter: Schema.optional(Models.Inline2782),
    includeExtendedDataFields: Schema.optional(Schema.Boolean),
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
    stateFilter: Schema.optional(Models.Inline2783),
  }),
  outputSchema: Models.ListSponsoredProductsCampaignNegativeTargetingClausesResponse,
});

export const amazon_ads_campaigns_listSponsoredProductsCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.campaigns.listSponsoredProductsCampaigns",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaigns/list",
  summary: "ListSponsoredProductsCampaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaigns.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"includeExtendedDataFields","wireName":"includeExtendedDataFields","location":"body","required":false,"nullable":false},
    {"name":"marketplaceBudgetAllocationFilter","wireName":"marketplaceBudgetAllocationFilter","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nameFilter","wireName":"nameFilter","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"portfolioIdFilter","wireName":"portfolioIdFilter","location":"body","required":false,"nullable":false},
    {"name":"stateFilter","wireName":"stateFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIdFilter: Schema.optional(Models.Inline2862),
    includeExtendedDataFields: Schema.optional(Schema.Boolean),
    marketplaceBudgetAllocationFilter: Schema.optional(Models.Inline2863),
    maxResults: Schema.optional(Schema.Number),
    nameFilter: Schema.optional(Models.Inline2864),
    nextToken: Schema.optional(Schema.String),
    portfolioIdFilter: Schema.optional(Models.Inline2865),
    stateFilter: Schema.optional(Models.Inline2866),
  }),
  outputSchema: Models.ListSponsoredProductsCampaignsResponse,
});

export const amazon_ads_keywords_listSponsoredProductsKeywords = defineEndpointDescriptor({
  id: "amazon-ads.keywords.listSponsoredProductsKeywords",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/keywords/list",
  summary: "ListSponsoredProductsKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.keywords.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"includeExtendedDataFields","wireName":"includeExtendedDataFields","location":"body","required":false,"nullable":false},
    {"name":"keywordIdFilter","wireName":"keywordIdFilter","location":"body","required":false,"nullable":false},
    {"name":"keywordTextFilter","wireName":"keywordTextFilter","location":"body","required":false,"nullable":false},
    {"name":"locale","wireName":"locale","location":"body","required":false,"nullable":false},
    {"name":"matchTypeFilter","wireName":"matchTypeFilter","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"stateFilter","wireName":"stateFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Schema.optional(Models.Inline2902),
    campaignIdFilter: Schema.optional(Models.Inline2903),
    includeExtendedDataFields: Schema.optional(Schema.Boolean),
    keywordIdFilter: Schema.optional(Models.Inline2904),
    keywordTextFilter: Schema.optional(Models.Inline2905),
    locale: Schema.optional(Schema.String),
    matchTypeFilter: Schema.optional(Schema.Array(Schema.String)),
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
    stateFilter: Schema.optional(Models.Inline2906),
  }),
  outputSchema: Models.ListSponsoredProductsKeywordsResponse,
});

export const amazon_ads_negativeKeywords_listSponsoredProductsNegativeKeywords = defineEndpointDescriptor({
  id: "amazon-ads.negativeKeywords.listSponsoredProductsNegativeKeywords",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/negativeKeywords/list",
  summary: "ListSponsoredProductsNegativeKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.negativeKeywords.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"includeExtendedDataFields","wireName":"includeExtendedDataFields","location":"body","required":false,"nullable":false},
    {"name":"locale","wireName":"locale","location":"body","required":false,"nullable":false},
    {"name":"matchTypeFilter","wireName":"matchTypeFilter","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"negativeKeywordIdFilter","wireName":"negativeKeywordIdFilter","location":"body","required":false,"nullable":false},
    {"name":"negativeKeywordTextFilter","wireName":"negativeKeywordTextFilter","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"stateFilter","wireName":"stateFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Schema.optional(Models.Inline2927),
    campaignIdFilter: Schema.optional(Models.Inline2928),
    includeExtendedDataFields: Schema.optional(Schema.Boolean),
    locale: Schema.optional(Schema.String),
    matchTypeFilter: Schema.optional(Schema.Array(Schema.String)),
    maxResults: Schema.optional(Schema.Number),
    negativeKeywordIdFilter: Schema.optional(Models.Inline2929),
    negativeKeywordTextFilter: Schema.optional(Models.Inline2930),
    nextToken: Schema.optional(Schema.String),
    stateFilter: Schema.optional(Models.Inline2931),
  }),
  outputSchema: Models.ListSponsoredProductsNegativeKeywordsResponse,
});

export const amazon_ads_negativeTargetingClauses_listSponsoredProductsNegativeTargetingClauses = defineEndpointDescriptor({
  id: "amazon-ads.negativeTargetingClauses.listSponsoredProductsNegativeTargetingClauses",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/negativeTargets/list",
  summary: "ListSponsoredProductsNegativeTargetingClauses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.negativeTargetingClauses.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":false,"nullable":false},
    {"name":"asinFilter","wireName":"asinFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"includeExtendedDataFields","wireName":"includeExtendedDataFields","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"negativeTargetIdFilter","wireName":"negativeTargetIdFilter","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"stateFilter","wireName":"stateFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Schema.optional(Models.Inline2960),
    asinFilter: Schema.optional(Models.Inline2961),
    campaignIdFilter: Schema.optional(Models.Inline2962),
    includeExtendedDataFields: Schema.optional(Schema.Boolean),
    maxResults: Schema.optional(Schema.Number),
    negativeTargetIdFilter: Schema.optional(Models.Inline2963),
    nextToken: Schema.optional(Schema.String),
    stateFilter: Schema.optional(Models.Inline2964),
  }),
  outputSchema: Models.ListSponsoredProductsNegativeTargetingClausesResponse,
});

export const amazon_ads_productAds_listSponsoredProductsProductAds = defineEndpointDescriptor({
  id: "amazon-ads.productAds.listSponsoredProductsProductAds",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/productAds/list",
  summary: "ListSponsoredProductsProductAds",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.productAds.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":false,"nullable":false},
    {"name":"adIdFilter","wireName":"adIdFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"includeExtendedDataFields","wireName":"includeExtendedDataFields","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"stateFilter","wireName":"stateFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Schema.optional(Models.Inline2985),
    adIdFilter: Schema.optional(Models.Inline2986),
    campaignIdFilter: Schema.optional(Models.Inline2987),
    includeExtendedDataFields: Schema.optional(Schema.Boolean),
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
    stateFilter: Schema.optional(Models.Inline2988),
  }),
  outputSchema: Models.ListSponsoredProductsProductAdsResponse,
});

export const amazon_ads_targetingClauses_listSponsoredProductsTargetingClauses = defineEndpointDescriptor({
  id: "amazon-ads.targetingClauses.listSponsoredProductsTargetingClauses",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targets/list",
  summary: "ListSponsoredProductsTargetingClauses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.targetingClauses.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":false,"nullable":false},
    {"name":"asinFilter","wireName":"asinFilter","location":"body","required":false,"nullable":false},
    {"name":"campaignIdFilter","wireName":"campaignIdFilter","location":"body","required":false,"nullable":false},
    {"name":"expressionTypeFilter","wireName":"expressionTypeFilter","location":"body","required":false,"nullable":false},
    {"name":"includeExtendedDataFields","wireName":"includeExtendedDataFields","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"stateFilter","wireName":"stateFilter","location":"body","required":false,"nullable":false},
    {"name":"targetIdFilter","wireName":"targetIdFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Schema.optional(Models.Inline3141),
    asinFilter: Schema.optional(Models.Inline3142),
    campaignIdFilter: Schema.optional(Models.Inline3143),
    expressionTypeFilter: Schema.optional(Models.Inline3144),
    includeExtendedDataFields: Schema.optional(Schema.Boolean),
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
    stateFilter: Schema.optional(Models.Inline3145),
    targetIdFilter: Schema.optional(Models.Inline3146),
  }),
  outputSchema: Models.ListSponsoredProductsTargetingClausesResponse,
});

export const amazon_ads_targetPromotionGroups_listTargetPromotionGroups = defineEndpointDescriptor({
  id: "amazon-ads.targetPromotionGroups.listTargetPromotionGroups",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targetPromotionGroups/list",
  summary: "ListTargetPromotionGroups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.targetPromotionGroups.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"targetPromotionGroupIdFilter","wireName":"targetPromotionGroupIdFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Schema.optional(Models.Inline3071),
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
    targetPromotionGroupIdFilter: Schema.optional(Models.Inline3072),
  }),
  outputSchema: Models.ListTargetPromotionGroupsResponse,
});

export const amazon_ads_targetPromotionGroups_listTargetPromotionGroupTargets = defineEndpointDescriptor({
  id: "amazon-ads.targetPromotionGroups.listTargetPromotionGroupTargets",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/targetPromotionGroups/targets/list",
  summary: "ListTargetPromotionGroupTargets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.targetPromotionGroups.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupIdFilter","wireName":"adGroupIdFilter","location":"body","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"targetPromotionGroupIdFilter","wireName":"targetPromotionGroupIdFilter","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupIdFilter: Schema.optional(Models.Inline3091),
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
    targetPromotionGroupIdFilter: Schema.optional(Models.Inline3092),
  }),
  outputSchema: Models.ListTargetPromotionGroupTargetsResponse,
});

export const amazon_ads_productTargeting_searchBrands = defineEndpointDescriptor({
  id: "amazon-ads.productTargeting.searchBrands",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/negativeTargets/brands/search",
  summary: "Returns brands related to keyword input for negative targeting.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.productTargeting.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"keyword","wireName":"keyword","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    keyword: Schema.String,
  }),
  outputSchema: Models.SearchBrandsResponse,
});

export const amazon_ads_optimizationRules_searchOptimizationRules = defineEndpointDescriptor({
  id: "amazon-ads.optimizationRules.searchOptimizationRules",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/rules/optimization/search",
  summary: "Searches optimization rules based on optional filters.\n",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.optimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignFilter","wireName":"campaignFilter","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"optimizationRuleFilter","wireName":"optimizationRuleFilter","location":"body","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignFilter: Schema.optional(Models.Inline3048),
    nextToken: Schema.optional(Schema.String),
    optimizationRuleFilter: Schema.optional(Models.Inline3049),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.SearchOptimizationRulesResponse,
});

export const amazon_ads_budgetUsage_spCampaignsBudgetUsage = defineEndpointDescriptor({
  id: "amazon-ads.budgetUsage.spCampaignsBudgetUsage",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaigns/budget/usage",
  summary: "Budget usage API for SP campaigns",
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
  outputSchema: Models.SpCampaignsBudgetUsageResponse,
});

export const amazon_ads_budgetRulesRecommendation_sPGetAllRuleEvents = defineEndpointDescriptor({
  id: "amazon-ads.budgetRulesRecommendation.sPGetAllRuleEvents",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/v1/events",
  summary: "Gets all special individual and grouped events with suggested date range in advertiser's marketplace.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRulesRecommendation.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.SPGetAllRuleEventsResponse,
});

export const amazon_ads_budgetRulesRecommendation_sPGetBudgetRulesRecommendation = defineEndpointDescriptor({
  id: "amazon-ads.budgetRulesRecommendation.sPGetBudgetRulesRecommendation",
  platform: "amazon-ads",
  method: "POST",
  path: "/sp/campaigns/budgetRules/recommendations",
  summary: "Gets a list of special events with suggested date range and suggested budget increase for a campaign specified by identifier.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.budgetRulesRecommendation.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.SPGetBudgetRulesRecommendationResponse,
});

export const amazon_ads_budgetRules_updateBudgetRulesForSPCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.budgetRules.updateBudgetRulesForSPCampaigns",
  platform: "amazon-ads",
  method: "PUT",
  path: "/sp/budgetRules",
  summary: "Updates one or more budget rules.",
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
    budgetRulesDetails: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline2707))),
  }),
  outputSchema: Models.UpdateBudgetRulesForSPCampaignsResponse,
});

export const amazon_ads_campaignOptimizationRules_updateOptimizationRule = defineEndpointDescriptor({
  id: "amazon-ads.campaignOptimizationRules.updateOptimizationRule",
  platform: "amazon-ads",
  method: "PUT",
  path: "/sp/rules/campaignOptimization",
  summary: "Updates a campaign optimization rule.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignOptimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignIds","wireName":"campaignIds","location":"body","required":true,"nullable":false},
    {"name":"campaignOptimizationId","wireName":"campaignOptimizationId","location":"body","required":true,"nullable":false},
    {"name":"recurrence","wireName":"recurrence","location":"body","required":true,"nullable":false},
    {"name":"ruleAction","wireName":"ruleAction","location":"body","required":true,"nullable":false},
    {"name":"ruleCondition","wireName":"ruleCondition","location":"body","required":false,"nullable":false},
    {"name":"ruleName","wireName":"ruleName","location":"body","required":false,"nullable":false},
    {"name":"ruleType","wireName":"ruleType","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignIds: Schema.Array(Schema.String),
    campaignOptimizationId: Schema.String,
    recurrence: Schema.String,
    ruleAction: Schema.String,
    ruleCondition: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline2998))),
    ruleName: Schema.optional(Schema.String),
    ruleType: Schema.String,
  }),
  outputSchema: Models.UpdateOptimizationRuleResponse,
});

export const amazon_ads_optimizationRules_updateOptimizationRules = defineEndpointDescriptor({
  id: "amazon-ads.optimizationRules.updateOptimizationRules",
  platform: "amazon-ads",
  method: "PUT",
  path: "/sp/rules/optimization",
  summary: "Updates one or more optimization rules.\n",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.optimizationRules.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"optimizationRules","wireName":"optimizationRules","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    optimizationRules: Schema.Array(Schema.suspend(() => Models.Inline3032)),
  }),
  outputSchema: Models.UpdateOptimizationRulesResponse,
});

export const amazon_ads_adGroups_updateSponsoredProductsAdGroups = defineEndpointDescriptor({
  id: "amazon-ads.adGroups.updateSponsoredProductsAdGroups",
  platform: "amazon-ads",
  method: "PUT",
  path: "/sp/adGroups",
  summary: "UpdateSponsoredProductsAdGroups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.adGroups.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"adGroups","wireName":"adGroups","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroups: Schema.Array(Schema.suspend(() => Models.Inline2671)),
  }),
  outputSchema: Models.UpdateSponsoredProductsAdGroupsResponse,
});

export const amazon_ads_campaignNegativeKeywords_updateSponsoredProductsCampaignNegativeKeywords = defineEndpointDescriptor({
  id: "amazon-ads.campaignNegativeKeywords.updateSponsoredProductsCampaignNegativeKeywords",
  platform: "amazon-ads",
  method: "PUT",
  path: "/sp/campaignNegativeKeywords",
  summary: "UpdateSponsoredProductsCampaignNegativeKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignNegativeKeywords.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignNegativeKeywords","wireName":"campaignNegativeKeywords","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignNegativeKeywords: Schema.Array(Schema.suspend(() => Models.Inline2743)),
  }),
  outputSchema: Models.UpdateSponsoredProductsCampaignNegativeKeywordsResponse,
});

export const amazon_ads_campaignNegativeTargetingClauses_updateSponsoredProductsCampaignNegativeTargetingClauses = defineEndpointDescriptor({
  id: "amazon-ads.campaignNegativeTargetingClauses.updateSponsoredProductsCampaignNegativeTargetingClauses",
  platform: "amazon-ads",
  method: "PUT",
  path: "/sp/campaignNegativeTargets",
  summary: "UpdateSponsoredProductsCampaignNegativeTargetingClauses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaignNegativeTargetingClauses.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaignNegativeTargetingClauses","wireName":"campaignNegativeTargetingClauses","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignNegativeTargetingClauses: Schema.Array(Schema.suspend(() => Models.Inline2766)),
  }),
  outputSchema: Models.UpdateSponsoredProductsCampaignNegativeTargetingClausesResponse,
});

export const amazon_ads_campaigns_updateSponsoredProductsCampaigns = defineEndpointDescriptor({
  id: "amazon-ads.campaigns.updateSponsoredProductsCampaigns",
  platform: "amazon-ads",
  method: "PUT",
  path: "/sp/campaigns",
  summary: "UpdateSponsoredProductsCampaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.campaigns.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"campaigns","wireName":"campaigns","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaigns: Schema.Array(Schema.suspend(() => Models.Inline2803)),
  }),
  outputSchema: Models.UpdateSponsoredProductsCampaignsResponse,
});

export const amazon_ads_keywords_updateSponsoredProductsKeywords = defineEndpointDescriptor({
  id: "amazon-ads.keywords.updateSponsoredProductsKeywords",
  platform: "amazon-ads",
  method: "PUT",
  path: "/sp/keywords",
  summary: "UpdateSponsoredProductsKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.keywords.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"keywords","wireName":"keywords","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    keywords: Schema.Array(Schema.suspend(() => Models.Inline2889)),
  }),
  outputSchema: Models.UpdateSponsoredProductsKeywordsResponse,
});

export const amazon_ads_negativeKeywords_updateSponsoredProductsNegativeKeywords = defineEndpointDescriptor({
  id: "amazon-ads.negativeKeywords.updateSponsoredProductsNegativeKeywords",
  platform: "amazon-ads",
  method: "PUT",
  path: "/sp/negativeKeywords",
  summary: "UpdateSponsoredProductsNegativeKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.negativeKeywords.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"negativeKeywords","wireName":"negativeKeywords","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    negativeKeywords: Schema.Array(Schema.suspend(() => Models.Inline2914)),
  }),
  outputSchema: Models.UpdateSponsoredProductsNegativeKeywordsResponse,
});

export const amazon_ads_negativeTargetingClauses_updateSponsoredProductsNegativeTargetingClauses = defineEndpointDescriptor({
  id: "amazon-ads.negativeTargetingClauses.updateSponsoredProductsNegativeTargetingClauses",
  platform: "amazon-ads",
  method: "PUT",
  path: "/sp/negativeTargets",
  summary: "UpdateSponsoredProductsNegativeTargetingClauses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.negativeTargetingClauses.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"negativeTargetingClauses","wireName":"negativeTargetingClauses","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    negativeTargetingClauses: Schema.Array(Schema.suspend(() => Models.Inline2939)),
  }),
  outputSchema: Models.UpdateSponsoredProductsNegativeTargetingClausesResponse,
});

export const amazon_ads_productAds_updateSponsoredProductsProductAds = defineEndpointDescriptor({
  id: "amazon-ads.productAds.updateSponsoredProductsProductAds",
  platform: "amazon-ads",
  method: "PUT",
  path: "/sp/productAds",
  summary: "UpdateSponsoredProductsProductAds",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.productAds.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"productAds","wireName":"productAds","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productAds: Schema.Array(Schema.suspend(() => Models.Inline2972)),
  }),
  outputSchema: Models.UpdateSponsoredProductsProductAdsResponse,
});

export const amazon_ads_targetingClauses_updateSponsoredProductsTargetingClauses = defineEndpointDescriptor({
  id: "amazon-ads.targetingClauses.updateSponsoredProductsTargetingClauses",
  platform: "amazon-ads",
  method: "PUT",
  path: "/sp/targets",
  summary: "UpdateSponsoredProductsTargetingClauses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["amazon-ads.targetingClauses.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: [],
  protocols: ["json"],
  parameters: [
    {"name":"targetingClauses","wireName":"targetingClauses","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    targetingClauses: Schema.Array(Schema.suspend(() => Models.Inline3100)),
  }),
  outputSchema: Models.UpdateSponsoredProductsTargetingClausesResponse,
});

export const endpointDescriptors = [amazon_ads_optimizationRules_associateOptimizationRulesToCampaign, amazon_ads_budgetRules_bulkBudgetRulesAssociationForSP, amazon_ads_budgetRules_bulkBudgetRulesDisAssociationForSP, amazon_ads_budgetRules_createAssociatedBudgetRulesForSPCampaigns, amazon_ads_budgetRules_createBudgetRulesForSPCampaigns, amazon_ads_campaignOptimizationRules_createOptimizationRule, amazon_ads_optimizationRules_createOptimizationRules, amazon_ads_adGroups_createSponsoredProductsAdGroups, amazon_ads_campaignNegativeKeywords_createSponsoredProductsCampaignNegativeKeywords, amazon_ads_campaignNegativeTargetingClauses_createSponsoredProductsCampaignNegativeTargetingClauses, amazon_ads_campaigns_createSponsoredProductsCampaigns, amazon_ads_keywords_createSponsoredProductsKeywords, amazon_ads_negativeKeywords_createSponsoredProductsNegativeKeywords, amazon_ads_negativeTargetingClauses_createSponsoredProductsNegativeTargetingClauses, amazon_ads_productAds_createSponsoredProductsProductAds, amazon_ads_targetingClauses_createSponsoredProductsTargetingClauses, amazon_ads_targetPromotionGroups_createTargetPromotionGroups, amazon_ads_targetPromotionGroups_createTargetPromotionGroupTargets, amazon_ads_campaignOptimizationRules_deleteCampaignOptimizationRule, amazon_ads_adGroups_deleteSponsoredProductsAdGroups, amazon_ads_campaignNegativeKeywords_deleteSponsoredProductsCampaignNegativeKeywords, amazon_ads_campaignNegativeTargetingClauses_deleteSponsoredProductsCampaignNegativeTargetingClauses, amazon_ads_campaigns_deleteSponsoredProductsCampaigns, amazon_ads_keywords_deleteSponsoredProductsKeywords, amazon_ads_negativeKeywords_deleteSponsoredProductsNegativeKeywords, amazon_ads_negativeTargetingClauses_deleteSponsoredProductsNegativeTargetingClauses, amazon_ads_productAds_deleteSponsoredProductsProductAds, amazon_ads_targetingClauses_deleteSponsoredProductsTargetingClauses, amazon_ads_budgetRules_disassociateAssociatedBudgetRuleForSPCampaigns, amazon_ads_consolidatedRecommendations_fetchCampaignRecommendations, amazon_ads_budgetRecommendationNewCampaigns_getBudgetRecommendation, amazon_ads_budgetRecommendationsAndMissedOpportunities_getBudgetRecommendations, amazon_ads_budgetRules_getBudgetRuleByRuleIdForSPCampaigns, amazon_ads_campaignOptimizationRules_getCampaignOptimizationRule, amazon_ads_consolidatedRecommendations_getCampaignRecommendations, amazon_ads_budgetRules_getCampaignsAssociatedWithSPBudgetRule, amazon_ads_productTargeting_getCategoryRecommendationsForASINs, amazon_ads_keywordTargets_getGlobalRankedKeywordRecommendation, amazon_ads_keywordGroupTargetingRecommendations_getKeywordGroupRecommendations, amazon_ads_multiCountryThemeBasedBidRecommendations_getMultiCountryThemeBasedBidRecommendationForAdGroupV1, amazon_ads_productTargeting_getNegativeBrands, amazon_ads_campaignOptimizationRules_getOptimizationRuleEligibility, amazon_ads_productRecommendationService_getProductRecommendations, amazon_ads_keywordTargets_getRankedKeywordRecommendation, amazon_ads_productTargeting_getRefinementsForCategory, amazon_ads_campaignOptimizationRules_getRuleNotification, amazon_ads_budgetRules_getSPBudgetRulesForAdvertiser, amazon_ads_productTargeting_getTargetableASINCounts, amazon_ads_productTargeting_getTargetableCategories, amazon_ads_targetPromotionGroups_getTargetPromotionGroupsRecommendations, amazon_ads_themeBasedBidRecommendations_getThemeBasedBidRecommendationForAdGroupV1, amazon_ads_budgetRules_listAssociatedBudgetRulesForSPCampaigns, amazon_ads_adGroups_listSponsoredProductsAdGroups, amazon_ads_campaignNegativeKeywords_listSponsoredProductsCampaignNegativeKeywords, amazon_ads_campaignNegativeTargetingClauses_listSponsoredProductsCampaignNegativeTargetingClauses, amazon_ads_campaigns_listSponsoredProductsCampaigns, amazon_ads_keywords_listSponsoredProductsKeywords, amazon_ads_negativeKeywords_listSponsoredProductsNegativeKeywords, amazon_ads_negativeTargetingClauses_listSponsoredProductsNegativeTargetingClauses, amazon_ads_productAds_listSponsoredProductsProductAds, amazon_ads_targetingClauses_listSponsoredProductsTargetingClauses, amazon_ads_targetPromotionGroups_listTargetPromotionGroups, amazon_ads_targetPromotionGroups_listTargetPromotionGroupTargets, amazon_ads_productTargeting_searchBrands, amazon_ads_optimizationRules_searchOptimizationRules, amazon_ads_budgetUsage_spCampaignsBudgetUsage, amazon_ads_budgetRulesRecommendation_sPGetAllRuleEvents, amazon_ads_budgetRulesRecommendation_sPGetBudgetRulesRecommendation, amazon_ads_budgetRules_updateBudgetRulesForSPCampaigns, amazon_ads_campaignOptimizationRules_updateOptimizationRule, amazon_ads_optimizationRules_updateOptimizationRules, amazon_ads_adGroups_updateSponsoredProductsAdGroups, amazon_ads_campaignNegativeKeywords_updateSponsoredProductsCampaignNegativeKeywords, amazon_ads_campaignNegativeTargetingClauses_updateSponsoredProductsCampaignNegativeTargetingClauses, amazon_ads_campaigns_updateSponsoredProductsCampaigns, amazon_ads_keywords_updateSponsoredProductsKeywords, amazon_ads_negativeKeywords_updateSponsoredProductsNegativeKeywords, amazon_ads_negativeTargetingClauses_updateSponsoredProductsNegativeTargetingClauses, amazon_ads_productAds_updateSponsoredProductsProductAds, amazon_ads_targetingClauses_updateSponsoredProductsTargetingClauses] as const;
