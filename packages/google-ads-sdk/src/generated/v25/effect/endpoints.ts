// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@mosaic/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const googleAds_accountBudgetProposal_mutateAccountBudgetProposal = defineEndpointDescriptor({
  id: "googleAds.accountBudgetProposal.mutateAccountBudgetProposal",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/accountBudgetProposals:mutate",
  summary: "AccountBudgetProposalService.MutateAccountBudgetProposal",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["accountBudgetProposal.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAccountBudgetProposalRequest,
  }),
  outputSchema: Models.MutateAccountBudgetProposalResponse,
});

export const googleAds_accountLink_createAccountLink = defineEndpointDescriptor({
  id: "googleAds.accountLink.createAccountLink",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/accountLinks:create",
  summary: "AccountLinkService.CreateAccountLink",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["accountLink.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.CreateAccountLinkRequest,
  }),
  outputSchema: Models.CreateAccountLinkResponse,
});

export const googleAds_accountLink_mutateAccountLink = defineEndpointDescriptor({
  id: "googleAds.accountLink.mutateAccountLink",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/accountLinks:mutate",
  summary: "AccountLinkService.MutateAccountLink",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["accountLink.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAccountLinkRequest,
  }),
  outputSchema: Models.MutateAccountLinkResponse,
});

export const googleAds_adGroupAdLabel_mutateAdGroupAdLabels = defineEndpointDescriptor({
  id: "googleAds.adGroupAdLabel.mutateAdGroupAdLabels",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/adGroupAdLabels:mutate",
  summary: "AdGroupAdLabelService.MutateAdGroupAdLabels",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["adGroupAdLabel.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAdGroupAdLabelsRequest,
  }),
  outputSchema: Models.MutateAdGroupAdLabelsResponse,
});

export const googleAds_adGroupAd_mutateAdGroupAds = defineEndpointDescriptor({
  id: "googleAds.adGroupAd.mutateAdGroupAds",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/adGroupAds:mutate",
  summary: "AdGroupAdService.MutateAdGroupAds",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["adGroupAd.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAdGroupAdsRequest,
  }),
  outputSchema: Models.MutateAdGroupAdsResponse,
});

export const googleAds_adGroupAd_removeAutomaticallyCreatedAssets = defineEndpointDescriptor({
  id: "googleAds.adGroupAd.removeAutomaticallyCreatedAssets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/{ad_group_ad=customers/*/adGroupAds/*}:removeAutomaticallyCreatedAssets",
  summary: "AdGroupAdService.RemoveAutomaticallyCreatedAssets",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["adGroupAd.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.RemoveAutomaticallyCreatedAssetsRequest,
  }),
  outputSchema: Schema.Unknown,
});

export const googleAds_adGroupAsset_mutateAdGroupAssets = defineEndpointDescriptor({
  id: "googleAds.adGroupAsset.mutateAdGroupAssets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/adGroupAssets:mutate",
  summary: "AdGroupAssetService.MutateAdGroupAssets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["adGroupAsset.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAdGroupAssetsRequest,
  }),
  outputSchema: Models.MutateAdGroupAssetsResponse,
});

export const googleAds_adGroupAssetSet_mutateAdGroupAssetSets = defineEndpointDescriptor({
  id: "googleAds.adGroupAssetSet.mutateAdGroupAssetSets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/adGroupAssetSets:mutate",
  summary: "AdGroupAssetSetService.MutateAdGroupAssetSets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["adGroupAssetSet.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAdGroupAssetSetsRequest,
  }),
  outputSchema: Models.MutateAdGroupAssetSetsResponse,
});

export const googleAds_adGroupBidModifier_mutateAdGroupBidModifiers = defineEndpointDescriptor({
  id: "googleAds.adGroupBidModifier.mutateAdGroupBidModifiers",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/adGroupBidModifiers:mutate",
  summary: "AdGroupBidModifierService.MutateAdGroupBidModifiers",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["adGroupBidModifier.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAdGroupBidModifiersRequest,
  }),
  outputSchema: Models.MutateAdGroupBidModifiersResponse,
});

export const googleAds_adGroupCriterionCustomizer_mutateAdGroupCriterionCustomizers = defineEndpointDescriptor({
  id: "googleAds.adGroupCriterionCustomizer.mutateAdGroupCriterionCustomizers",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/AdGroupCriterionCustomizers:mutate",
  summary: "AdGroupCriterionCustomizerService.MutateAdGroupCriterionCustomizers",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["adGroupCriterionCustomizer.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAdGroupCriterionCustomizersRequest,
  }),
  outputSchema: Models.MutateAdGroupCriterionCustomizersResponse,
});

export const googleAds_adGroupCriterionLabel_mutateAdGroupCriterionLabels = defineEndpointDescriptor({
  id: "googleAds.adGroupCriterionLabel.mutateAdGroupCriterionLabels",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/adGroupCriterionLabels:mutate",
  summary: "AdGroupCriterionLabelService.MutateAdGroupCriterionLabels",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["adGroupCriterionLabel.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAdGroupCriterionLabelsRequest,
  }),
  outputSchema: Models.MutateAdGroupCriterionLabelsResponse,
});

export const googleAds_adGroupCriterion_mutateAdGroupCriteria = defineEndpointDescriptor({
  id: "googleAds.adGroupCriterion.mutateAdGroupCriteria",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/adGroupCriteria:mutate",
  summary: "AdGroupCriterionService.MutateAdGroupCriteria",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["adGroupCriterion.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAdGroupCriteriaRequest,
  }),
  outputSchema: Models.MutateAdGroupCriteriaResponse,
});

export const googleAds_adGroupCustomizer_mutateAdGroupCustomizers = defineEndpointDescriptor({
  id: "googleAds.adGroupCustomizer.mutateAdGroupCustomizers",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/adGroupCustomizers:mutate",
  summary: "AdGroupCustomizerService.MutateAdGroupCustomizers",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["adGroupCustomizer.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAdGroupCustomizersRequest,
  }),
  outputSchema: Models.MutateAdGroupCustomizersResponse,
});

export const googleAds_adGroupLabel_mutateAdGroupLabels = defineEndpointDescriptor({
  id: "googleAds.adGroupLabel.mutateAdGroupLabels",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/adGroupLabels:mutate",
  summary: "AdGroupLabelService.MutateAdGroupLabels",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["adGroupLabel.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAdGroupLabelsRequest,
  }),
  outputSchema: Models.MutateAdGroupLabelsResponse,
});

export const googleAds_adGroup_mutateAdGroups = defineEndpointDescriptor({
  id: "googleAds.adGroup.mutateAdGroups",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/adGroups:mutate",
  summary: "AdGroupService.MutateAdGroups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["adGroup.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAdGroupsRequest,
  }),
  outputSchema: Models.MutateAdGroupsResponse,
});

export const googleAds_adParameter_mutateAdParameters = defineEndpointDescriptor({
  id: "googleAds.adParameter.mutateAdParameters",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/adParameters:mutate",
  summary: "AdParameterService.MutateAdParameters",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["adParameter.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAdParametersRequest,
  }),
  outputSchema: Models.MutateAdParametersResponse,
});

export const googleAds_ad_mutateAds = defineEndpointDescriptor({
  id: "googleAds.ad.mutateAds",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/ads:mutate",
  summary: "AdService.MutateAds",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["ad.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAdsRequest,
  }),
  outputSchema: Models.MutateAdsResponse,
});

export const googleAds_assetGeneration_generateImages = defineEndpointDescriptor({
  id: "googleAds.assetGeneration.generateImages",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/assetGenerations:generateImages",
  summary: "AssetGenerationService.GenerateImages",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["assetGeneration.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateImagesRequest,
  }),
  outputSchema: Models.GenerateImagesResponse,
});

export const googleAds_assetGeneration_generateText = defineEndpointDescriptor({
  id: "googleAds.assetGeneration.generateText",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/assetGenerations:generateText",
  summary: "AssetGenerationService.GenerateText",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["assetGeneration.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateTextRequest,
  }),
  outputSchema: Models.GenerateTextResponse,
});

export const googleAds_assetGroupAsset_mutateAssetGroupAssets = defineEndpointDescriptor({
  id: "googleAds.assetGroupAsset.mutateAssetGroupAssets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/assetGroupAssets:mutate",
  summary: "AssetGroupAssetService.MutateAssetGroupAssets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["assetGroupAsset.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAssetGroupAssetsRequest,
  }),
  outputSchema: Models.MutateAssetGroupAssetsResponse,
});

export const googleAds_assetGroupListingGroupFilter_mutateAssetGroupListingGroupFilters = defineEndpointDescriptor({
  id: "googleAds.assetGroupListingGroupFilter.mutateAssetGroupListingGroupFilters",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/assetGroupListingGroupFilters:mutate",
  summary: "AssetGroupListingGroupFilterService.MutateAssetGroupListingGroupFilters",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["assetGroupListingGroupFilter.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAssetGroupListingGroupFiltersRequest,
  }),
  outputSchema: Models.MutateAssetGroupListingGroupFiltersResponse,
});

export const googleAds_assetGroup_mutateAssetGroups = defineEndpointDescriptor({
  id: "googleAds.assetGroup.mutateAssetGroups",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/assetGroups:mutate",
  summary: "AssetGroupService.MutateAssetGroups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["assetGroup.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAssetGroupsRequest,
  }),
  outputSchema: Models.MutateAssetGroupsResponse,
});

export const googleAds_assetGroupSignal_mutateAssetGroupSignals = defineEndpointDescriptor({
  id: "googleAds.assetGroupSignal.mutateAssetGroupSignals",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/assetGroupSignals:mutate",
  summary: "AssetGroupSignalService.MutateAssetGroupSignals",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["assetGroupSignal.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAssetGroupSignalsRequest,
  }),
  outputSchema: Models.MutateAssetGroupSignalsResponse,
});

export const googleAds_asset_mutateAssets = defineEndpointDescriptor({
  id: "googleAds.asset.mutateAssets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/assets:mutate",
  summary: "AssetService.MutateAssets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["asset.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAssetsRequest,
  }),
  outputSchema: Models.MutateAssetsResponse,
});

export const googleAds_assetSetAsset_mutateAssetSetAssets = defineEndpointDescriptor({
  id: "googleAds.assetSetAsset.mutateAssetSetAssets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/assetSetAssets:mutate",
  summary: "AssetSetAssetService.MutateAssetSetAssets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["assetSetAsset.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAssetSetAssetsRequest,
  }),
  outputSchema: Models.MutateAssetSetAssetsResponse,
});

export const googleAds_assetSet_mutateAssetSets = defineEndpointDescriptor({
  id: "googleAds.assetSet.mutateAssetSets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/assetSets:mutate",
  summary: "AssetSetService.MutateAssetSets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["assetSet.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAssetSetsRequest,
  }),
  outputSchema: Models.MutateAssetSetsResponse,
});

export const googleAds_audienceInsights_generateAudienceCompositionInsights = defineEndpointDescriptor({
  id: "googleAds.audienceInsights.generateAudienceCompositionInsights",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateAudienceCompositionInsights",
  summary: "AudienceInsightsService.GenerateAudienceCompositionInsights",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["audienceInsights.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateAudienceCompositionInsightsRequest,
  }),
  outputSchema: Models.GenerateAudienceCompositionInsightsResponse,
});

export const googleAds_audienceInsights_generateAudienceDefinition = defineEndpointDescriptor({
  id: "googleAds.audienceInsights.generateAudienceDefinition",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateAudienceDefinition",
  summary: "AudienceInsightsService.GenerateAudienceDefinition",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["audienceInsights.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateAudienceDefinitionRequest,
  }),
  outputSchema: Models.GenerateAudienceDefinitionResponse,
});

export const googleAds_audienceInsights_generateAudienceOverlapInsights = defineEndpointDescriptor({
  id: "googleAds.audienceInsights.generateAudienceOverlapInsights",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateAudienceOverlapInsights",
  summary: "AudienceInsightsService.GenerateAudienceOverlapInsights",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["audienceInsights.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateAudienceOverlapInsightsRequest,
  }),
  outputSchema: Models.GenerateAudienceOverlapInsightsResponse,
});

export const googleAds_audienceInsights_generateInsightsFinderReport = defineEndpointDescriptor({
  id: "googleAds.audienceInsights.generateInsightsFinderReport",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateInsightsFinderReport",
  summary: "AudienceInsightsService.GenerateInsightsFinderReport",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["audienceInsights.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateInsightsFinderReportRequest,
  }),
  outputSchema: Models.GenerateInsightsFinderReportResponse,
});

export const googleAds_audienceInsights_generateSuggestedTargetingInsights = defineEndpointDescriptor({
  id: "googleAds.audienceInsights.generateSuggestedTargetingInsights",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateSuggestedTargetingInsights",
  summary: "AudienceInsightsService.GenerateSuggestedTargetingInsights",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["audienceInsights.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateSuggestedTargetingInsightsRequest,
  }),
  outputSchema: Models.GenerateSuggestedTargetingInsightsResponse,
});

export const googleAds_audienceInsights_generateTargetingSuggestionMetrics = defineEndpointDescriptor({
  id: "googleAds.audienceInsights.generateTargetingSuggestionMetrics",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateTargetingSuggestionMetrics",
  summary: "AudienceInsightsService.GenerateTargetingSuggestionMetrics",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["audienceInsights.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateTargetingSuggestionMetricsRequest,
  }),
  outputSchema: Models.GenerateTargetingSuggestionMetricsResponse,
});

export const googleAds_audienceInsights_listAudienceInsightsAttributes = defineEndpointDescriptor({
  id: "googleAds.audienceInsights.listAudienceInsightsAttributes",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:searchAudienceInsightsAttributes",
  summary: "AudienceInsightsService.ListAudienceInsightsAttributes",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["audienceInsights.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListAudienceInsightsAttributesRequest,
  }),
  outputSchema: Models.ListAudienceInsightsAttributesResponse,
});

export const googleAds_audienceInsights_listInsightsEligibleDates = defineEndpointDescriptor({
  id: "googleAds.audienceInsights.listInsightsEligibleDates",
  platform: "google-ads",
  method: "POST",
  path: "/v25/audienceInsights:listInsightsEligibleDates",
  summary: "AudienceInsightsService.ListInsightsEligibleDates",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["audienceInsights.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListInsightsEligibleDatesRequest,
  }),
  outputSchema: Models.ListInsightsEligibleDatesResponse,
});

export const googleAds_audience_mutateAudiences = defineEndpointDescriptor({
  id: "googleAds.audience.mutateAudiences",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/audiences:mutate",
  summary: "AudienceService.MutateAudiences",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["audience.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateAudiencesRequest,
  }),
  outputSchema: Models.MutateAudiencesResponse,
});

export const googleAds_automaticallyCreatedAssetRemoval_removeCampaignAutomaticallyCreatedAsset = defineEndpointDescriptor({
  id: "googleAds.automaticallyCreatedAssetRemoval.removeCampaignAutomaticallyCreatedAsset",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:removeCampaignAutomaticallyCreatedAsset",
  summary: "AutomaticallyCreatedAssetRemovalService.RemoveCampaignAutomaticallyCreatedAsset",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["automaticallyCreatedAssetRemoval.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.RemoveCampaignAutomaticallyCreatedAssetRequest,
  }),
  outputSchema: Models.RemoveCampaignAutomaticallyCreatedAssetResponse,
});

export const googleAds_batchJob_addBatchJobOperations = defineEndpointDescriptor({
  id: "googleAds.batchJob.addBatchJobOperations",
  platform: "google-ads",
  method: "POST",
  path: "/v25/{resource_name=customers/*/batchJobs/*}:addOperations",
  summary: "BatchJobService.AddBatchJobOperations",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["batchJob.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.AddBatchJobOperationsRequest,
  }),
  outputSchema: Models.AddBatchJobOperationsResponse,
});

export const googleAds_batchJob_listBatchJobResults = defineEndpointDescriptor({
  id: "googleAds.batchJob.listBatchJobResults",
  platform: "google-ads",
  method: "GET",
  path: "/v25/{resource_name=customers/*/batchJobs/*}:listResults",
  summary: "BatchJobService.ListBatchJobResults",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["batchJob.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListBatchJobResultsRequest,
  }),
  outputSchema: Models.ListBatchJobResultsResponse,
});

export const googleAds_batchJob_mutateBatchJob = defineEndpointDescriptor({
  id: "googleAds.batchJob.mutateBatchJob",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/batchJobs:mutate",
  summary: "BatchJobService.MutateBatchJob",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["batchJob.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateBatchJobRequest,
  }),
  outputSchema: Models.MutateBatchJobResponse,
});

export const googleAds_batchJob_runBatchJob = defineEndpointDescriptor({
  id: "googleAds.batchJob.runBatchJob",
  platform: "google-ads",
  method: "POST",
  path: "/v25/{resource_name=customers/*/batchJobs/*}:run",
  summary: "BatchJobService.RunBatchJob",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["batchJob.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.RunBatchJobRequest,
  }),
  outputSchema: Schema.Unknown,
});

export const googleAds_benchmarks_generateBenchmarksMetrics = defineEndpointDescriptor({
  id: "googleAds.benchmarks.generateBenchmarksMetrics",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateBenchmarksMetrics",
  summary: "BenchmarksService.GenerateBenchmarksMetrics",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["benchmarks.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateBenchmarksMetricsRequest,
  }),
  outputSchema: Models.GenerateBenchmarksMetricsResponse,
});

export const googleAds_benchmarks_listBenchmarksAvailableDates = defineEndpointDescriptor({
  id: "googleAds.benchmarks.listBenchmarksAvailableDates",
  platform: "google-ads",
  method: "POST",
  path: "/v25:listBenchmarksAvailableDates",
  summary: "BenchmarksService.ListBenchmarksAvailableDates",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["benchmarks.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListBenchmarksAvailableDatesRequest,
  }),
  outputSchema: Models.ListBenchmarksAvailableDatesResponse,
});

export const googleAds_benchmarks_listBenchmarksLocations = defineEndpointDescriptor({
  id: "googleAds.benchmarks.listBenchmarksLocations",
  platform: "google-ads",
  method: "POST",
  path: "/v25:listBenchmarksLocations",
  summary: "BenchmarksService.ListBenchmarksLocations",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["benchmarks.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListBenchmarksLocationsRequest,
  }),
  outputSchema: Models.ListBenchmarksLocationsResponse,
});

export const googleAds_benchmarks_listBenchmarksProducts = defineEndpointDescriptor({
  id: "googleAds.benchmarks.listBenchmarksProducts",
  platform: "google-ads",
  method: "POST",
  path: "/v25:listBenchmarksProducts",
  summary: "BenchmarksService.ListBenchmarksProducts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["benchmarks.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListBenchmarksProductsRequest,
  }),
  outputSchema: Models.ListBenchmarksProductsResponse,
});

export const googleAds_benchmarks_listBenchmarksSources = defineEndpointDescriptor({
  id: "googleAds.benchmarks.listBenchmarksSources",
  platform: "google-ads",
  method: "POST",
  path: "/v25:listBenchmarksSources",
  summary: "BenchmarksService.ListBenchmarksSources",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["benchmarks.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListBenchmarksSourcesRequest,
  }),
  outputSchema: Models.ListBenchmarksSourcesResponse,
});

export const googleAds_biddingDataExclusion_mutateBiddingDataExclusions = defineEndpointDescriptor({
  id: "googleAds.biddingDataExclusion.mutateBiddingDataExclusions",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/biddingDataExclusions:mutate",
  summary: "BiddingDataExclusionService.MutateBiddingDataExclusions",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["biddingDataExclusion.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateBiddingDataExclusionsRequest,
  }),
  outputSchema: Models.MutateBiddingDataExclusionsResponse,
});

export const googleAds_biddingSeasonalityAdjustment_mutateBiddingSeasonalityAdjustments = defineEndpointDescriptor({
  id: "googleAds.biddingSeasonalityAdjustment.mutateBiddingSeasonalityAdjustments",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/biddingSeasonalityAdjustments:mutate",
  summary: "BiddingSeasonalityAdjustmentService.MutateBiddingSeasonalityAdjustments",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["biddingSeasonalityAdjustment.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateBiddingSeasonalityAdjustmentsRequest,
  }),
  outputSchema: Models.MutateBiddingSeasonalityAdjustmentsResponse,
});

export const googleAds_biddingStrategy_mutateBiddingStrategies = defineEndpointDescriptor({
  id: "googleAds.biddingStrategy.mutateBiddingStrategies",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/biddingStrategies:mutate",
  summary: "BiddingStrategyService.MutateBiddingStrategies",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["biddingStrategy.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateBiddingStrategiesRequest,
  }),
  outputSchema: Models.MutateBiddingStrategiesResponse,
});

export const googleAds_billingSetup_mutateBillingSetup = defineEndpointDescriptor({
  id: "googleAds.billingSetup.mutateBillingSetup",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/billingSetups:mutate",
  summary: "BillingSetupService.MutateBillingSetup",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["billingSetup.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateBillingSetupRequest,
  }),
  outputSchema: Models.MutateBillingSetupResponse,
});

export const googleAds_brandSuggestion_suggestBrands = defineEndpointDescriptor({
  id: "googleAds.brandSuggestion.suggestBrands",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:suggestBrands",
  summary: "BrandSuggestionService.SuggestBrands",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["brandSuggestion.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.SuggestBrandsRequest,
  }),
  outputSchema: Models.SuggestBrandsResponse,
});

export const googleAds_campaignAsset_mutateCampaignAssets = defineEndpointDescriptor({
  id: "googleAds.campaignAsset.mutateCampaignAssets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/campaignAssets:mutate",
  summary: "CampaignAssetService.MutateCampaignAssets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignAsset.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCampaignAssetsRequest,
  }),
  outputSchema: Models.MutateCampaignAssetsResponse,
});

export const googleAds_campaignAssetSet_mutateCampaignAssetSets = defineEndpointDescriptor({
  id: "googleAds.campaignAssetSet.mutateCampaignAssetSets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/campaignAssetSets:mutate",
  summary: "CampaignAssetSetService.MutateCampaignAssetSets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignAssetSet.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCampaignAssetSetsRequest,
  }),
  outputSchema: Models.MutateCampaignAssetSetsResponse,
});

export const googleAds_campaignBidModifier_mutateCampaignBidModifiers = defineEndpointDescriptor({
  id: "googleAds.campaignBidModifier.mutateCampaignBidModifiers",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/campaignBidModifiers:mutate",
  summary: "CampaignBidModifierService.MutateCampaignBidModifiers",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignBidModifier.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCampaignBidModifiersRequest,
  }),
  outputSchema: Models.MutateCampaignBidModifiersResponse,
});

export const googleAds_campaignBudget_mutateCampaignBudgets = defineEndpointDescriptor({
  id: "googleAds.campaignBudget.mutateCampaignBudgets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/campaignBudgets:mutate",
  summary: "CampaignBudgetService.MutateCampaignBudgets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignBudget.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCampaignBudgetsRequest,
  }),
  outputSchema: Models.MutateCampaignBudgetsResponse,
});

export const googleAds_campaignConversionGoal_mutateCampaignConversionGoals = defineEndpointDescriptor({
  id: "googleAds.campaignConversionGoal.mutateCampaignConversionGoals",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/campaignConversionGoals:mutate",
  summary: "CampaignConversionGoalService.MutateCampaignConversionGoals",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignConversionGoal.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCampaignConversionGoalsRequest,
  }),
  outputSchema: Models.MutateCampaignConversionGoalsResponse,
});

export const googleAds_campaignCriterion_mutateCampaignCriteria = defineEndpointDescriptor({
  id: "googleAds.campaignCriterion.mutateCampaignCriteria",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/campaignCriteria:mutate",
  summary: "CampaignCriterionService.MutateCampaignCriteria",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignCriterion.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCampaignCriteriaRequest,
  }),
  outputSchema: Models.MutateCampaignCriteriaResponse,
});

export const googleAds_campaignCustomizer_mutateCampaignCustomizers = defineEndpointDescriptor({
  id: "googleAds.campaignCustomizer.mutateCampaignCustomizers",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/campaignCustomizers:mutate",
  summary: "CampaignCustomizerService.MutateCampaignCustomizers",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignCustomizer.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCampaignCustomizersRequest,
  }),
  outputSchema: Models.MutateCampaignCustomizersResponse,
});

export const googleAds_campaignDraft_listCampaignDraftAsyncErrors = defineEndpointDescriptor({
  id: "googleAds.campaignDraft.listCampaignDraftAsyncErrors",
  platform: "google-ads",
  method: "GET",
  path: "/v25/{resource_name=customers/*/campaignDrafts/*}:listAsyncErrors",
  summary: "CampaignDraftService.ListCampaignDraftAsyncErrors",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignDraft.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListCampaignDraftAsyncErrorsRequest,
  }),
  outputSchema: Models.ListCampaignDraftAsyncErrorsResponse,
});

export const googleAds_campaignDraft_mutateCampaignDrafts = defineEndpointDescriptor({
  id: "googleAds.campaignDraft.mutateCampaignDrafts",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/campaignDrafts:mutate",
  summary: "CampaignDraftService.MutateCampaignDrafts",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignDraft.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCampaignDraftsRequest,
  }),
  outputSchema: Models.MutateCampaignDraftsResponse,
});

export const googleAds_campaignDraft_promoteCampaignDraft = defineEndpointDescriptor({
  id: "googleAds.campaignDraft.promoteCampaignDraft",
  platform: "google-ads",
  method: "POST",
  path: "/v25/{campaign_draft=customers/*/campaignDrafts/*}:promote",
  summary: "CampaignDraftService.PromoteCampaignDraft",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignDraft.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.PromoteCampaignDraftRequest,
  }),
  outputSchema: Schema.Unknown,
});

export const googleAds_campaignGoalConfig_mutateCampaignGoalConfigs = defineEndpointDescriptor({
  id: "googleAds.campaignGoalConfig.mutateCampaignGoalConfigs",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/CampaignGoalConfigs:mutate",
  summary: "CampaignGoalConfigService.MutateCampaignGoalConfigs",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignGoalConfig.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCampaignGoalConfigsRequest,
  }),
  outputSchema: Models.MutateCampaignGoalConfigsResponse,
});

export const googleAds_campaignGroup_mutateCampaignGroups = defineEndpointDescriptor({
  id: "googleAds.campaignGroup.mutateCampaignGroups",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/campaignGroups:mutate",
  summary: "CampaignGroupService.MutateCampaignGroups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignGroup.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCampaignGroupsRequest,
  }),
  outputSchema: Models.MutateCampaignGroupsResponse,
});

export const googleAds_campaignLabel_mutateCampaignLabels = defineEndpointDescriptor({
  id: "googleAds.campaignLabel.mutateCampaignLabels",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/campaignLabels:mutate",
  summary: "CampaignLabelService.MutateCampaignLabels",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignLabel.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCampaignLabelsRequest,
  }),
  outputSchema: Models.MutateCampaignLabelsResponse,
});

export const googleAds_campaign_enablePMaxBrandGuidelines = defineEndpointDescriptor({
  id: "googleAds.campaign.enablePMaxBrandGuidelines",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/campaigns:enablePMaxBrandGuidelines",
  summary: "CampaignService.EnablePMaxBrandGuidelines",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaign.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.EnablePMaxBrandGuidelinesRequest,
  }),
  outputSchema: Models.EnablePMaxBrandGuidelinesResponse,
});

export const googleAds_campaign_mutateCampaigns = defineEndpointDescriptor({
  id: "googleAds.campaign.mutateCampaigns",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/campaigns:mutate",
  summary: "CampaignService.MutateCampaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaign.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCampaignsRequest,
  }),
  outputSchema: Models.MutateCampaignsResponse,
});

export const googleAds_campaignSharedSet_mutateCampaignSharedSets = defineEndpointDescriptor({
  id: "googleAds.campaignSharedSet.mutateCampaignSharedSets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/campaignSharedSets:mutate",
  summary: "CampaignSharedSetService.MutateCampaignSharedSets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["campaignSharedSet.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCampaignSharedSetsRequest,
  }),
  outputSchema: Models.MutateCampaignSharedSetsResponse,
});

export const googleAds_contentCreatorInsights_generateCreatorInsights = defineEndpointDescriptor({
  id: "googleAds.contentCreatorInsights.generateCreatorInsights",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateCreatorInsights",
  summary: "ContentCreatorInsightsService.GenerateCreatorInsights",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["contentCreatorInsights.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateCreatorInsightsRequest,
  }),
  outputSchema: Models.GenerateCreatorInsightsResponse,
});

export const googleAds_contentCreatorInsights_generateTrendingInsights = defineEndpointDescriptor({
  id: "googleAds.contentCreatorInsights.generateTrendingInsights",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateTrendingInsights",
  summary: "ContentCreatorInsightsService.GenerateTrendingInsights",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["contentCreatorInsights.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateTrendingInsightsRequest,
  }),
  outputSchema: Models.GenerateTrendingInsightsResponse,
});

export const googleAds_conversionAction_mutateConversionActions = defineEndpointDescriptor({
  id: "googleAds.conversionAction.mutateConversionActions",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/conversionActions:mutate",
  summary: "ConversionActionService.MutateConversionActions",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["conversionAction.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateConversionActionsRequest,
  }),
  outputSchema: Models.MutateConversionActionsResponse,
});

export const googleAds_conversionAdjustmentUpload_uploadConversionAdjustments = defineEndpointDescriptor({
  id: "googleAds.conversionAdjustmentUpload.uploadConversionAdjustments",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:uploadConversionAdjustments",
  summary: "ConversionAdjustmentUploadService.UploadConversionAdjustments",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["conversionAdjustmentUpload.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.UploadConversionAdjustmentsRequest,
  }),
  outputSchema: Models.UploadConversionAdjustmentsResponse,
});

export const googleAds_conversionCustomVariable_mutateConversionCustomVariables = defineEndpointDescriptor({
  id: "googleAds.conversionCustomVariable.mutateConversionCustomVariables",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/conversionCustomVariables:mutate",
  summary: "ConversionCustomVariableService.MutateConversionCustomVariables",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["conversionCustomVariable.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateConversionCustomVariablesRequest,
  }),
  outputSchema: Models.MutateConversionCustomVariablesResponse,
});

export const googleAds_conversionGoalCampaignConfig_mutateConversionGoalCampaignConfigs = defineEndpointDescriptor({
  id: "googleAds.conversionGoalCampaignConfig.mutateConversionGoalCampaignConfigs",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/conversionGoalCampaignConfigs:mutate",
  summary: "ConversionGoalCampaignConfigService.MutateConversionGoalCampaignConfigs",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["conversionGoalCampaignConfig.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateConversionGoalCampaignConfigsRequest,
  }),
  outputSchema: Models.MutateConversionGoalCampaignConfigsResponse,
});

export const googleAds_conversionUpload_uploadCallConversions = defineEndpointDescriptor({
  id: "googleAds.conversionUpload.uploadCallConversions",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:uploadCallConversions",
  summary: "ConversionUploadService.UploadCallConversions",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["conversionUpload.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.UploadCallConversionsRequest,
  }),
  outputSchema: Models.UploadCallConversionsResponse,
});

export const googleAds_conversionUpload_uploadClickConversions = defineEndpointDescriptor({
  id: "googleAds.conversionUpload.uploadClickConversions",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:uploadClickConversions",
  summary: "ConversionUploadService.UploadClickConversions",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["conversionUpload.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.UploadClickConversionsRequest,
  }),
  outputSchema: Models.UploadClickConversionsResponse,
});

export const googleAds_conversionValueRule_mutateConversionValueRules = defineEndpointDescriptor({
  id: "googleAds.conversionValueRule.mutateConversionValueRules",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/conversionValueRules:mutate",
  summary: "ConversionValueRuleService.MutateConversionValueRules",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["conversionValueRule.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateConversionValueRulesRequest,
  }),
  outputSchema: Models.MutateConversionValueRulesResponse,
});

export const googleAds_conversionValueRuleSet_mutateConversionValueRuleSets = defineEndpointDescriptor({
  id: "googleAds.conversionValueRuleSet.mutateConversionValueRuleSets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/conversionValueRuleSets:mutate",
  summary: "ConversionValueRuleSetService.MutateConversionValueRuleSets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["conversionValueRuleSet.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateConversionValueRuleSetsRequest,
  }),
  outputSchema: Models.MutateConversionValueRuleSetsResponse,
});

export const googleAds_customAudience_mutateCustomAudiences = defineEndpointDescriptor({
  id: "googleAds.customAudience.mutateCustomAudiences",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customAudiences:mutate",
  summary: "CustomAudienceService.MutateCustomAudiences",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customAudience.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomAudiencesRequest,
  }),
  outputSchema: Models.MutateCustomAudiencesResponse,
});

export const googleAds_customConversionGoal_mutateCustomConversionGoals = defineEndpointDescriptor({
  id: "googleAds.customConversionGoal.mutateCustomConversionGoals",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customConversionGoals:mutate",
  summary: "CustomConversionGoalService.MutateCustomConversionGoals",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customConversionGoal.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomConversionGoalsRequest,
  }),
  outputSchema: Models.MutateCustomConversionGoalsResponse,
});

export const googleAds_customerAsset_mutateCustomerAssets = defineEndpointDescriptor({
  id: "googleAds.customerAsset.mutateCustomerAssets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customerAssets:mutate",
  summary: "CustomerAssetService.MutateCustomerAssets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customerAsset.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomerAssetsRequest,
  }),
  outputSchema: Models.MutateCustomerAssetsResponse,
});

export const googleAds_customerAssetSet_mutateCustomerAssetSets = defineEndpointDescriptor({
  id: "googleAds.customerAssetSet.mutateCustomerAssetSets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customerAssetSets:mutate",
  summary: "CustomerAssetSetService.MutateCustomerAssetSets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customerAssetSet.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomerAssetSetsRequest,
  }),
  outputSchema: Models.MutateCustomerAssetSetsResponse,
});

export const googleAds_customerClientLink_mutateCustomerClientLink = defineEndpointDescriptor({
  id: "googleAds.customerClientLink.mutateCustomerClientLink",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customerClientLinks:mutate",
  summary: "CustomerClientLinkService.MutateCustomerClientLink",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customerClientLink.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomerClientLinkRequest,
  }),
  outputSchema: Models.MutateCustomerClientLinkResponse,
});

export const googleAds_customerConversionGoal_mutateCustomerConversionGoals = defineEndpointDescriptor({
  id: "googleAds.customerConversionGoal.mutateCustomerConversionGoals",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customerConversionGoals:mutate",
  summary: "CustomerConversionGoalService.MutateCustomerConversionGoals",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customerConversionGoal.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomerConversionGoalsRequest,
  }),
  outputSchema: Models.MutateCustomerConversionGoalsResponse,
});

export const googleAds_customerCustomizer_mutateCustomerCustomizers = defineEndpointDescriptor({
  id: "googleAds.customerCustomizer.mutateCustomerCustomizers",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/CustomerCustomizers:mutate",
  summary: "CustomerCustomizerService.MutateCustomerCustomizers",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customerCustomizer.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomerCustomizersRequest,
  }),
  outputSchema: Models.MutateCustomerCustomizersResponse,
});

export const googleAds_customerLabel_mutateCustomerLabels = defineEndpointDescriptor({
  id: "googleAds.customerLabel.mutateCustomerLabels",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customerLabels:mutate",
  summary: "CustomerLabelService.MutateCustomerLabels",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customerLabel.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomerLabelsRequest,
  }),
  outputSchema: Models.MutateCustomerLabelsResponse,
});

export const googleAds_customerManagerLink_moveManagerLink = defineEndpointDescriptor({
  id: "googleAds.customerManagerLink.moveManagerLink",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customerManagerLinks:moveManagerLink",
  summary: "CustomerManagerLinkService.MoveManagerLink",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customerManagerLink.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MoveManagerLinkRequest,
  }),
  outputSchema: Models.MoveManagerLinkResponse,
});

export const googleAds_customerManagerLink_mutateCustomerManagerLink = defineEndpointDescriptor({
  id: "googleAds.customerManagerLink.mutateCustomerManagerLink",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customerManagerLinks:mutate",
  summary: "CustomerManagerLinkService.MutateCustomerManagerLink",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customerManagerLink.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomerManagerLinkRequest,
  }),
  outputSchema: Models.MutateCustomerManagerLinkResponse,
});

export const googleAds_customerNegativeCriterion_mutateCustomerNegativeCriteria = defineEndpointDescriptor({
  id: "googleAds.customerNegativeCriterion.mutateCustomerNegativeCriteria",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customerNegativeCriteria:mutate",
  summary: "CustomerNegativeCriterionService.MutateCustomerNegativeCriteria",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customerNegativeCriterion.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomerNegativeCriteriaRequest,
  }),
  outputSchema: Models.MutateCustomerNegativeCriteriaResponse,
});

export const googleAds_customer_createCustomerClient = defineEndpointDescriptor({
  id: "googleAds.customer.createCustomerClient",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:createCustomerClient",
  summary: "CustomerService.CreateCustomerClient",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customer.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.CreateCustomerClientRequest,
  }),
  outputSchema: Models.CreateCustomerClientResponse,
});

export const googleAds_customer_listAccessibleCustomers = defineEndpointDescriptor({
  id: "googleAds.customer.listAccessibleCustomers",
  platform: "google-ads",
  method: "GET",
  path: "/v25/customers:listAccessibleCustomers",
  summary: "CustomerService.ListAccessibleCustomers",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customer.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListAccessibleCustomersRequest,
  }),
  outputSchema: Models.ListAccessibleCustomersResponse,
});

export const googleAds_customer_mutateCustomer = defineEndpointDescriptor({
  id: "googleAds.customer.mutateCustomer",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:mutate",
  summary: "CustomerService.MutateCustomer",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customer.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomerRequest,
  }),
  outputSchema: Models.MutateCustomerResponse,
});

export const googleAds_customerSkAdNetworkConversionValueSchema_mutateCustomerSkAdNetworkConversionValueSchema = defineEndpointDescriptor({
  id: "googleAds.customerSkAdNetworkConversionValueSchema.mutateCustomerSkAdNetworkConversionValueSchema",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customerSkAdNetworkConversionValueSchemas:mutate",
  summary: "CustomerSkAdNetworkConversionValueSchemaService.MutateCustomerSkAdNetworkConversionValueSchema",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customerSkAdNetworkConversionValueSchema.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomerSkAdNetworkConversionValueSchemaRequest,
  }),
  outputSchema: Models.MutateCustomerSkAdNetworkConversionValueSchemaResponse,
});

export const googleAds_customerUserAccessInvitation_mutateCustomerUserAccessInvitation = defineEndpointDescriptor({
  id: "googleAds.customerUserAccessInvitation.mutateCustomerUserAccessInvitation",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customerUserAccessInvitations:mutate",
  summary: "CustomerUserAccessInvitationService.MutateCustomerUserAccessInvitation",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customerUserAccessInvitation.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomerUserAccessInvitationRequest,
  }),
  outputSchema: Models.MutateCustomerUserAccessInvitationResponse,
});

export const googleAds_customerUserAccess_mutateCustomerUserAccess = defineEndpointDescriptor({
  id: "googleAds.customerUserAccess.mutateCustomerUserAccess",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customerUserAccesses:mutate",
  summary: "CustomerUserAccessService.MutateCustomerUserAccess",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customerUserAccess.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomerUserAccessRequest,
  }),
  outputSchema: Models.MutateCustomerUserAccessResponse,
});

export const googleAds_customInterest_mutateCustomInterests = defineEndpointDescriptor({
  id: "googleAds.customInterest.mutateCustomInterests",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customInterests:mutate",
  summary: "CustomInterestService.MutateCustomInterests",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customInterest.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomInterestsRequest,
  }),
  outputSchema: Models.MutateCustomInterestsResponse,
});

export const googleAds_customizerAttribute_mutateCustomizerAttributes = defineEndpointDescriptor({
  id: "googleAds.customizerAttribute.mutateCustomizerAttributes",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/customizerAttributes:mutate",
  summary: "CustomizerAttributeService.MutateCustomizerAttributes",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["customizerAttribute.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateCustomizerAttributesRequest,
  }),
  outputSchema: Models.MutateCustomizerAttributesResponse,
});

export const googleAds_dataLink_createDataLink = defineEndpointDescriptor({
  id: "googleAds.dataLink.createDataLink",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/dataLinks:create",
  summary: "DataLinkService.CreateDataLink",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["dataLink.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.CreateDataLinkRequest,
  }),
  outputSchema: Models.CreateDataLinkResponse,
});

export const googleAds_dataLink_removeDataLink = defineEndpointDescriptor({
  id: "googleAds.dataLink.removeDataLink",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/dataLinks:remove",
  summary: "DataLinkService.RemoveDataLink",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["dataLink.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.RemoveDataLinkRequest,
  }),
  outputSchema: Models.RemoveDataLinkResponse,
});

export const googleAds_dataLink_updateDataLink = defineEndpointDescriptor({
  id: "googleAds.dataLink.updateDataLink",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/dataLinks:update",
  summary: "DataLinkService.UpdateDataLink",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["dataLink.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.UpdateDataLinkRequest,
  }),
  outputSchema: Models.UpdateDataLinkResponse,
});

export const googleAds_experimentArm_mutateExperimentArms = defineEndpointDescriptor({
  id: "googleAds.experimentArm.mutateExperimentArms",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/experimentArms:mutate",
  summary: "ExperimentArmService.MutateExperimentArms",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["experimentArm.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateExperimentArmsRequest,
  }),
  outputSchema: Models.MutateExperimentArmsResponse,
});

export const googleAds_experiment_endExperiment = defineEndpointDescriptor({
  id: "googleAds.experiment.endExperiment",
  platform: "google-ads",
  method: "POST",
  path: "/v25/{experiment=customers/*/experiments/*}:endExperiment",
  summary: "ExperimentService.EndExperiment",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["experiment.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.EndExperimentRequest,
  }),
  outputSchema: Schema.Unknown,
});

export const googleAds_experiment_graduateExperiment = defineEndpointDescriptor({
  id: "googleAds.experiment.graduateExperiment",
  platform: "google-ads",
  method: "POST",
  path: "/v25/{experiment=customers/*/experiments/*}:graduateExperiment",
  summary: "ExperimentService.GraduateExperiment",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["experiment.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GraduateExperimentRequest,
  }),
  outputSchema: Schema.Unknown,
});

export const googleAds_experiment_listExperimentAsyncErrors = defineEndpointDescriptor({
  id: "googleAds.experiment.listExperimentAsyncErrors",
  platform: "google-ads",
  method: "GET",
  path: "/v25/{resource_name=customers/*/experiments/*}:listExperimentAsyncErrors",
  summary: "ExperimentService.ListExperimentAsyncErrors",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["experiment.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListExperimentAsyncErrorsRequest,
  }),
  outputSchema: Models.ListExperimentAsyncErrorsResponse,
});

export const googleAds_experiment_mutateExperiments = defineEndpointDescriptor({
  id: "googleAds.experiment.mutateExperiments",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/experiments:mutate",
  summary: "ExperimentService.MutateExperiments",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["experiment.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateExperimentsRequest,
  }),
  outputSchema: Models.MutateExperimentsResponse,
});

export const googleAds_experiment_promoteExperiment = defineEndpointDescriptor({
  id: "googleAds.experiment.promoteExperiment",
  platform: "google-ads",
  method: "POST",
  path: "/v25/{resource_name=customers/*/experiments/*}:promoteExperiment",
  summary: "ExperimentService.PromoteExperiment",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["experiment.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.PromoteExperimentRequest,
  }),
  outputSchema: Schema.Unknown,
});

export const googleAds_experiment_scheduleExperiment = defineEndpointDescriptor({
  id: "googleAds.experiment.scheduleExperiment",
  platform: "google-ads",
  method: "POST",
  path: "/v25/{resource_name=customers/*/experiments/*}:scheduleExperiment",
  summary: "ExperimentService.ScheduleExperiment",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["experiment.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ScheduleExperimentRequest,
  }),
  outputSchema: Schema.Unknown,
});

export const googleAds_geoTargetConstant_suggestGeoTargetConstants = defineEndpointDescriptor({
  id: "googleAds.geoTargetConstant.suggestGeoTargetConstants",
  platform: "google-ads",
  method: "POST",
  path: "/v25/geoTargetConstants:suggest",
  summary: "GeoTargetConstantService.SuggestGeoTargetConstants",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["geoTargetConstant.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.SuggestGeoTargetConstantsRequest,
  }),
  outputSchema: Models.SuggestGeoTargetConstantsResponse,
});

export const googleAds_goal_mutateGoals = defineEndpointDescriptor({
  id: "googleAds.goal.mutateGoals",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/Goals:mutate",
  summary: "GoalService.MutateGoals",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["goal.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateGoalsRequest,
  }),
  outputSchema: Models.MutateGoalsResponse,
});

export const googleAds_googleAdsField_getGoogleAdsField = defineEndpointDescriptor({
  id: "googleAds.googleAdsField.getGoogleAdsField",
  platform: "google-ads",
  method: "GET",
  path: "/v25/{resource_name=googleAdsFields/*}",
  summary: "GoogleAdsFieldService.GetGoogleAdsField",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["googleAdsField.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GetGoogleAdsFieldRequest,
  }),
  outputSchema: Models.GoogleAdsField,
});

export const googleAds_googleAdsField_searchGoogleAdsFields = defineEndpointDescriptor({
  id: "googleAds.googleAdsField.searchGoogleAdsFields",
  platform: "google-ads",
  method: "POST",
  path: "/v25/googleAdsFields:search",
  summary: "GoogleAdsFieldService.SearchGoogleAdsFields",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["googleAdsField.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.SearchGoogleAdsFieldsRequest,
  }),
  outputSchema: Models.SearchGoogleAdsFieldsResponse,
});

export const googleAds_googleAds_mutate = defineEndpointDescriptor({
  id: "googleAds.googleAds.mutate",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/googleAds:mutate",
  summary: "GoogleAdsService.Mutate",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["googleAds.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateGoogleAdsRequest,
  }),
  outputSchema: Models.MutateGoogleAdsResponse,
});

export const googleAds_googleAds_search = defineEndpointDescriptor({
  id: "googleAds.googleAds.search",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/googleAds:search",
  summary: "GoogleAdsService.Search",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["googleAds.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.SearchGoogleAdsRequest,
  }),
  outputSchema: Models.SearchGoogleAdsResponse,
});

export const googleAds_googleAds_searchStream = defineEndpointDescriptor({
  id: "googleAds.googleAds.searchStream",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/googleAds:searchStream",
  summary: "GoogleAdsService.SearchStream",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["googleAds.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json","stream"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.SearchGoogleAdsStreamRequest,
  }),
  outputSchema: Models.SearchGoogleAdsStreamResponse,
});

export const googleAds_identityVerification_getIdentityVerification = defineEndpointDescriptor({
  id: "googleAds.identityVerification.getIdentityVerification",
  platform: "google-ads",
  method: "GET",
  path: "/v25/customers/{customer_id=*}/getIdentityVerification",
  summary: "IdentityVerificationService.GetIdentityVerification",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["identityVerification.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GetIdentityVerificationRequest,
  }),
  outputSchema: Models.GetIdentityVerificationResponse,
});

export const googleAds_identityVerification_startIdentityVerification = defineEndpointDescriptor({
  id: "googleAds.identityVerification.startIdentityVerification",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:startIdentityVerification",
  summary: "IdentityVerificationService.StartIdentityVerification",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["identityVerification.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.StartIdentityVerificationRequest,
  }),
  outputSchema: Schema.Unknown,
});

export const googleAds_incentive_applyIncentive = defineEndpointDescriptor({
  id: "googleAds.incentive.applyIncentive",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/incentives/{selected_incentive_id=*}:applyIncentive",
  summary: "IncentiveService.ApplyIncentive",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["incentive.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ApplyIncentiveRequest,
  }),
  outputSchema: Models.ApplyIncentiveResponse,
});

export const googleAds_incentive_fetchIncentive = defineEndpointDescriptor({
  id: "googleAds.incentive.fetchIncentive",
  platform: "google-ads",
  method: "GET",
  path: "/v25/incentives:fetchIncentive",
  summary: "IncentiveService.FetchIncentive",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["incentive.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.FetchIncentiveRequest,
  }),
  outputSchema: Models.FetchIncentiveResponse,
});

export const googleAds_invoice_listInvoices = defineEndpointDescriptor({
  id: "googleAds.invoice.listInvoices",
  platform: "google-ads",
  method: "GET",
  path: "/v25/customers/{customer_id=*}/invoices",
  summary: "InvoiceService.ListInvoices",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["invoice.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListInvoicesRequest,
  }),
  outputSchema: Models.ListInvoicesResponse,
});

export const googleAds_keywordPlanAdGroupKeyword_mutateKeywordPlanAdGroupKeywords = defineEndpointDescriptor({
  id: "googleAds.keywordPlanAdGroupKeyword.mutateKeywordPlanAdGroupKeywords",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/keywordPlanAdGroupKeywords:mutate",
  summary: "KeywordPlanAdGroupKeywordService.MutateKeywordPlanAdGroupKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["keywordPlanAdGroupKeyword.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateKeywordPlanAdGroupKeywordsRequest,
  }),
  outputSchema: Models.MutateKeywordPlanAdGroupKeywordsResponse,
});

export const googleAds_keywordPlanAdGroup_mutateKeywordPlanAdGroups = defineEndpointDescriptor({
  id: "googleAds.keywordPlanAdGroup.mutateKeywordPlanAdGroups",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/keywordPlanAdGroups:mutate",
  summary: "KeywordPlanAdGroupService.MutateKeywordPlanAdGroups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["keywordPlanAdGroup.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateKeywordPlanAdGroupsRequest,
  }),
  outputSchema: Models.MutateKeywordPlanAdGroupsResponse,
});

export const googleAds_keywordPlanCampaignKeyword_mutateKeywordPlanCampaignKeywords = defineEndpointDescriptor({
  id: "googleAds.keywordPlanCampaignKeyword.mutateKeywordPlanCampaignKeywords",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/keywordPlanCampaignKeywords:mutate",
  summary: "KeywordPlanCampaignKeywordService.MutateKeywordPlanCampaignKeywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["keywordPlanCampaignKeyword.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateKeywordPlanCampaignKeywordsRequest,
  }),
  outputSchema: Models.MutateKeywordPlanCampaignKeywordsResponse,
});

export const googleAds_keywordPlanCampaign_mutateKeywordPlanCampaigns = defineEndpointDescriptor({
  id: "googleAds.keywordPlanCampaign.mutateKeywordPlanCampaigns",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/keywordPlanCampaigns:mutate",
  summary: "KeywordPlanCampaignService.MutateKeywordPlanCampaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["keywordPlanCampaign.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateKeywordPlanCampaignsRequest,
  }),
  outputSchema: Models.MutateKeywordPlanCampaignsResponse,
});

export const googleAds_keywordPlanIdea_generateAdGroupThemes = defineEndpointDescriptor({
  id: "googleAds.keywordPlanIdea.generateAdGroupThemes",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateAdGroupThemes",
  summary: "KeywordPlanIdeaService.GenerateAdGroupThemes",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["keywordPlanIdea.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateAdGroupThemesRequest,
  }),
  outputSchema: Models.GenerateAdGroupThemesResponse,
});

export const googleAds_keywordPlanIdea_generateKeywordForecastMetrics = defineEndpointDescriptor({
  id: "googleAds.keywordPlanIdea.generateKeywordForecastMetrics",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateKeywordForecastMetrics",
  summary: "KeywordPlanIdeaService.GenerateKeywordForecastMetrics",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["keywordPlanIdea.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateKeywordForecastMetricsRequest,
  }),
  outputSchema: Models.GenerateKeywordForecastMetricsResponse,
});

export const googleAds_keywordPlanIdea_generateKeywordHistoricalMetrics = defineEndpointDescriptor({
  id: "googleAds.keywordPlanIdea.generateKeywordHistoricalMetrics",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateKeywordHistoricalMetrics",
  summary: "KeywordPlanIdeaService.GenerateKeywordHistoricalMetrics",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["keywordPlanIdea.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateKeywordHistoricalMetricsRequest,
  }),
  outputSchema: Models.GenerateKeywordHistoricalMetricsResponse,
});

export const googleAds_keywordPlanIdea_generateKeywordIdeas = defineEndpointDescriptor({
  id: "googleAds.keywordPlanIdea.generateKeywordIdeas",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateKeywordIdeas",
  summary: "KeywordPlanIdeaService.GenerateKeywordIdeas",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["keywordPlanIdea.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateKeywordIdeasRequest,
  }),
  outputSchema: Models.GenerateKeywordIdeaResponse,
});

export const googleAds_keywordPlan_mutateKeywordPlans = defineEndpointDescriptor({
  id: "googleAds.keywordPlan.mutateKeywordPlans",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/keywordPlans:mutate",
  summary: "KeywordPlanService.MutateKeywordPlans",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["keywordPlan.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateKeywordPlansRequest,
  }),
  outputSchema: Models.MutateKeywordPlansResponse,
});

export const googleAds_keywordThemeConstant_suggestKeywordThemeConstants = defineEndpointDescriptor({
  id: "googleAds.keywordThemeConstant.suggestKeywordThemeConstants",
  platform: "google-ads",
  method: "POST",
  path: "/v25/keywordThemeConstants:suggest",
  summary: "KeywordThemeConstantService.SuggestKeywordThemeConstants",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["keywordThemeConstant.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.SuggestKeywordThemeConstantsRequest,
  }),
  outputSchema: Models.SuggestKeywordThemeConstantsResponse,
});

export const googleAds_label_mutateLabels = defineEndpointDescriptor({
  id: "googleAds.label.mutateLabels",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/labels:mutate",
  summary: "LabelService.MutateLabels",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["label.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateLabelsRequest,
  }),
  outputSchema: Models.MutateLabelsResponse,
});

export const googleAds_localServicesLead_appendLeadConversation = defineEndpointDescriptor({
  id: "googleAds.localServicesLead.appendLeadConversation",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/localServices:appendLeadConversation",
  summary: "LocalServicesLeadService.AppendLeadConversation",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["localServicesLead.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.AppendLeadConversationRequest,
  }),
  outputSchema: Models.AppendLeadConversationResponse,
});

export const googleAds_localServicesLead_provideLeadFeedback = defineEndpointDescriptor({
  id: "googleAds.localServicesLead.provideLeadFeedback",
  platform: "google-ads",
  method: "POST",
  path: "/v25/{resource_name=customers/*/localServicesLeads/*}:provideLeadFeedback",
  summary: "LocalServicesLeadService.ProvideLeadFeedback",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["localServicesLead.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ProvideLeadFeedbackRequest,
  }),
  outputSchema: Models.ProvideLeadFeedbackResponse,
});

export const googleAds_multiPartyAuthReview_resolveMultiPartyAuthReview = defineEndpointDescriptor({
  id: "googleAds.multiPartyAuthReview.resolveMultiPartyAuthReview",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/multiPartyAuthReview:resolve",
  summary: "MultiPartyAuthReviewService.ResolveMultiPartyAuthReview",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["multiPartyAuthReview.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ResolveMultiPartyAuthReviewRequest,
  }),
  outputSchema: Models.ResolveMultiPartyAuthReviewResponse,
});

export const googleAds_offlineUserDataJob_addOfflineUserDataJobOperations = defineEndpointDescriptor({
  id: "googleAds.offlineUserDataJob.addOfflineUserDataJobOperations",
  platform: "google-ads",
  method: "POST",
  path: "/v25/{resource_name=customers/*/offlineUserDataJobs/*}:addOperations",
  summary: "OfflineUserDataJobService.AddOfflineUserDataJobOperations",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["offlineUserDataJob.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.AddOfflineUserDataJobOperationsRequest,
  }),
  outputSchema: Models.AddOfflineUserDataJobOperationsResponse,
});

export const googleAds_offlineUserDataJob_createOfflineUserDataJob = defineEndpointDescriptor({
  id: "googleAds.offlineUserDataJob.createOfflineUserDataJob",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/offlineUserDataJobs:create",
  summary: "OfflineUserDataJobService.CreateOfflineUserDataJob",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["offlineUserDataJob.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.CreateOfflineUserDataJobRequest,
  }),
  outputSchema: Models.CreateOfflineUserDataJobResponse,
});

export const googleAds_offlineUserDataJob_runOfflineUserDataJob = defineEndpointDescriptor({
  id: "googleAds.offlineUserDataJob.runOfflineUserDataJob",
  platform: "google-ads",
  method: "POST",
  path: "/v25/{resource_name=customers/*/offlineUserDataJobs/*}:run",
  summary: "OfflineUserDataJobService.RunOfflineUserDataJob",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["offlineUserDataJob.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.RunOfflineUserDataJobRequest,
  }),
  outputSchema: Schema.Unknown,
});

export const googleAds_paymentsAccount_listPaymentsAccounts = defineEndpointDescriptor({
  id: "googleAds.paymentsAccount.listPaymentsAccounts",
  platform: "google-ads",
  method: "GET",
  path: "/v25/customers/{customer_id=*}/paymentsAccounts",
  summary: "PaymentsAccountService.ListPaymentsAccounts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["paymentsAccount.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListPaymentsAccountsRequest,
  }),
  outputSchema: Models.ListPaymentsAccountsResponse,
});

export const googleAds_productLinkInvitation_createProductLinkInvitation = defineEndpointDescriptor({
  id: "googleAds.productLinkInvitation.createProductLinkInvitation",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/productLinkInvitations:create",
  summary: "ProductLinkInvitationService.CreateProductLinkInvitation",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["productLinkInvitation.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.CreateProductLinkInvitationRequest,
  }),
  outputSchema: Models.CreateProductLinkInvitationResponse,
});

export const googleAds_productLinkInvitation_removeProductLinkInvitation = defineEndpointDescriptor({
  id: "googleAds.productLinkInvitation.removeProductLinkInvitation",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/productLinkInvitations:remove",
  summary: "ProductLinkInvitationService.RemoveProductLinkInvitation",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["productLinkInvitation.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.RemoveProductLinkInvitationRequest,
  }),
  outputSchema: Models.RemoveProductLinkInvitationResponse,
});

export const googleAds_productLinkInvitation_updateProductLinkInvitation = defineEndpointDescriptor({
  id: "googleAds.productLinkInvitation.updateProductLinkInvitation",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/productLinkInvitations:update",
  summary: "ProductLinkInvitationService.UpdateProductLinkInvitation",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["productLinkInvitation.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.UpdateProductLinkInvitationRequest,
  }),
  outputSchema: Models.UpdateProductLinkInvitationResponse,
});

export const googleAds_productLink_createProductLink = defineEndpointDescriptor({
  id: "googleAds.productLink.createProductLink",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/productLinks:create",
  summary: "ProductLinkService.CreateProductLink",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["productLink.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.CreateProductLinkRequest,
  }),
  outputSchema: Models.CreateProductLinkResponse,
});

export const googleAds_productLink_removeProductLink = defineEndpointDescriptor({
  id: "googleAds.productLink.removeProductLink",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/productLinks:remove",
  summary: "ProductLinkService.RemoveProductLink",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["productLink.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.RemoveProductLinkRequest,
  }),
  outputSchema: Models.RemoveProductLinkResponse,
});

export const googleAds_reachPlan_generateConversionRates = defineEndpointDescriptor({
  id: "googleAds.reachPlan.generateConversionRates",
  platform: "google-ads",
  method: "POST",
  path: "/v25:generateConversionRates",
  summary: "ReachPlanService.GenerateConversionRates",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["reachPlan.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateConversionRatesRequest,
  }),
  outputSchema: Models.GenerateConversionRatesResponse,
});

export const googleAds_reachPlan_generateReachForecast = defineEndpointDescriptor({
  id: "googleAds.reachPlan.generateReachForecast",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateReachForecast",
  summary: "ReachPlanService.GenerateReachForecast",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["reachPlan.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateReachForecastRequest,
  }),
  outputSchema: Models.GenerateReachForecastResponse,
});

export const googleAds_reachPlan_listPlannableLocations = defineEndpointDescriptor({
  id: "googleAds.reachPlan.listPlannableLocations",
  platform: "google-ads",
  method: "POST",
  path: "/v25:listPlannableLocations",
  summary: "ReachPlanService.ListPlannableLocations",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["reachPlan.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListPlannableLocationsRequest,
  }),
  outputSchema: Models.ListPlannableLocationsResponse,
});

export const googleAds_reachPlan_listPlannableProducts = defineEndpointDescriptor({
  id: "googleAds.reachPlan.listPlannableProducts",
  platform: "google-ads",
  method: "POST",
  path: "/v25:listPlannableProducts",
  summary: "ReachPlanService.ListPlannableProducts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["reachPlan.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListPlannableProductsRequest,
  }),
  outputSchema: Models.ListPlannableProductsResponse,
});

export const googleAds_reachPlan_listPlannableUserInterests = defineEndpointDescriptor({
  id: "googleAds.reachPlan.listPlannableUserInterests",
  platform: "google-ads",
  method: "POST",
  path: "/v25:listPlannableUserInterests",
  summary: "ReachPlanService.ListPlannableUserInterests",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["reachPlan.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListPlannableUserInterestsRequest,
  }),
  outputSchema: Models.ListPlannableUserInterestsResponse,
});

export const googleAds_reachPlan_listPlannableUserLists = defineEndpointDescriptor({
  id: "googleAds.reachPlan.listPlannableUserLists",
  platform: "google-ads",
  method: "POST",
  path: "/v25:listPlannableUserLists",
  summary: "ReachPlanService.ListPlannableUserLists",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["reachPlan.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ListPlannableUserListsRequest,
  }),
  outputSchema: Models.ListPlannableUserListsResponse,
});

export const googleAds_recommendation_applyRecommendation = defineEndpointDescriptor({
  id: "googleAds.recommendation.applyRecommendation",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/recommendations:apply",
  summary: "RecommendationService.ApplyRecommendation",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["recommendation.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.ApplyRecommendationRequest,
  }),
  outputSchema: Models.ApplyRecommendationResponse,
});

export const googleAds_recommendation_dismissRecommendation = defineEndpointDescriptor({
  id: "googleAds.recommendation.dismissRecommendation",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/recommendations:dismiss",
  summary: "RecommendationService.DismissRecommendation",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["recommendation.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.DismissRecommendationRequest,
  }),
  outputSchema: Models.DismissRecommendationResponse,
});

export const googleAds_recommendation_generateRecommendations = defineEndpointDescriptor({
  id: "googleAds.recommendation.generateRecommendations",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/recommendations:generate",
  summary: "RecommendationService.GenerateRecommendations",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["recommendation.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateRecommendationsRequest,
  }),
  outputSchema: Models.GenerateRecommendationsResponse,
});

export const googleAds_recommendationSubscription_mutateRecommendationSubscription = defineEndpointDescriptor({
  id: "googleAds.recommendationSubscription.mutateRecommendationSubscription",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/recommendationSubscriptions:mutateRecommendationSubscription",
  summary: "RecommendationSubscriptionService.MutateRecommendationSubscription",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["recommendationSubscription.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateRecommendationSubscriptionRequest,
  }),
  outputSchema: Models.MutateRecommendationSubscriptionResponse,
});

export const googleAds_remarketingAction_mutateRemarketingActions = defineEndpointDescriptor({
  id: "googleAds.remarketingAction.mutateRemarketingActions",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/remarketingActions:mutate",
  summary: "RemarketingActionService.MutateRemarketingActions",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["remarketingAction.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateRemarketingActionsRequest,
  }),
  outputSchema: Models.MutateRemarketingActionsResponse,
});

export const googleAds_reservation_bookCampaigns = defineEndpointDescriptor({
  id: "googleAds.reservation.bookCampaigns",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/reservations:bookCampaigns",
  summary: "ReservationService.BookCampaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["reservation.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.BookCampaignsRequest,
  }),
  outputSchema: Models.BookCampaignsResponse,
});

export const googleAds_reservation_quoteCampaigns = defineEndpointDescriptor({
  id: "googleAds.reservation.quoteCampaigns",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/reservations:quoteCampaigns",
  summary: "ReservationService.QuoteCampaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["reservation.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.QuoteCampaignsRequest,
  }),
  outputSchema: Models.QuoteCampaignsResponse,
});

export const googleAds_shareablePreview_generateShareablePreviews = defineEndpointDescriptor({
  id: "googleAds.shareablePreview.generateShareablePreviews",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:generateShareablePreviews",
  summary: "ShareablePreviewService.GenerateShareablePreviews",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["shareablePreview.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GenerateShareablePreviewsRequest,
  }),
  outputSchema: Models.GenerateShareablePreviewsResponse,
});

export const googleAds_sharedCriterion_mutateSharedCriteria = defineEndpointDescriptor({
  id: "googleAds.sharedCriterion.mutateSharedCriteria",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/sharedCriteria:mutate",
  summary: "SharedCriterionService.MutateSharedCriteria",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["sharedCriterion.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateSharedCriteriaRequest,
  }),
  outputSchema: Models.MutateSharedCriteriaResponse,
});

export const googleAds_sharedSet_mutateSharedSets = defineEndpointDescriptor({
  id: "googleAds.sharedSet.mutateSharedSets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/sharedSets:mutate",
  summary: "SharedSetService.MutateSharedSets",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["sharedSet.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateSharedSetsRequest,
  }),
  outputSchema: Models.MutateSharedSetsResponse,
});

export const googleAds_smartCampaignSetting_getSmartCampaignStatus = defineEndpointDescriptor({
  id: "googleAds.smartCampaignSetting.getSmartCampaignStatus",
  platform: "google-ads",
  method: "GET",
  path: "/v25/{resource_name=customers/*/smartCampaignSettings/*}:getSmartCampaignStatus",
  summary: "SmartCampaignSettingService.GetSmartCampaignStatus",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["smartCampaignSetting.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.GetSmartCampaignStatusRequest,
  }),
  outputSchema: Models.GetSmartCampaignStatusResponse,
});

export const googleAds_smartCampaignSetting_mutateSmartCampaignSettings = defineEndpointDescriptor({
  id: "googleAds.smartCampaignSetting.mutateSmartCampaignSettings",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/smartCampaignSettings:mutate",
  summary: "SmartCampaignSettingService.MutateSmartCampaignSettings",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["smartCampaignSetting.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateSmartCampaignSettingsRequest,
  }),
  outputSchema: Models.MutateSmartCampaignSettingsResponse,
});

export const googleAds_smartCampaignSuggest_suggestKeywordThemes = defineEndpointDescriptor({
  id: "googleAds.smartCampaignSuggest.suggestKeywordThemes",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:suggestKeywordThemes",
  summary: "SmartCampaignSuggestService.SuggestKeywordThemes",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["smartCampaignSuggest.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.SuggestKeywordThemesRequest,
  }),
  outputSchema: Models.SuggestKeywordThemesResponse,
});

export const googleAds_smartCampaignSuggest_suggestSmartCampaignAd = defineEndpointDescriptor({
  id: "googleAds.smartCampaignSuggest.suggestSmartCampaignAd",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:suggestSmartCampaignAd",
  summary: "SmartCampaignSuggestService.SuggestSmartCampaignAd",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["smartCampaignSuggest.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.SuggestSmartCampaignAdRequest,
  }),
  outputSchema: Models.SuggestSmartCampaignAdResponse,
});

export const googleAds_smartCampaignSuggest_suggestSmartCampaignBudgetOptions = defineEndpointDescriptor({
  id: "googleAds.smartCampaignSuggest.suggestSmartCampaignBudgetOptions",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:suggestSmartCampaignBudgetOptions",
  summary: "SmartCampaignSuggestService.SuggestSmartCampaignBudgetOptions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["smartCampaignSuggest.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.SuggestSmartCampaignBudgetOptionsRequest,
  }),
  outputSchema: Models.SuggestSmartCampaignBudgetOptionsResponse,
});

export const googleAds_thirdPartyAppAnalyticsLink_regenerateShareableLinkId = defineEndpointDescriptor({
  id: "googleAds.thirdPartyAppAnalyticsLink.regenerateShareableLinkId",
  platform: "google-ads",
  method: "POST",
  path: "/v25/{resource_name=customers/*/thirdPartyAppAnalyticsLinks/*}:regenerateShareableLinkId",
  summary: "ThirdPartyAppAnalyticsLinkService.RegenerateShareableLinkId",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["thirdPartyAppAnalyticsLink.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.RegenerateShareableLinkIdRequest,
  }),
  outputSchema: Models.RegenerateShareableLinkIdResponse,
});

export const googleAds_travelAssetSuggestion_suggestTravelAssets = defineEndpointDescriptor({
  id: "googleAds.travelAssetSuggestion.suggestTravelAssets",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:suggestTravelAssets",
  summary: "TravelAssetSuggestionService.SuggestTravelAssets",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["travelAssetSuggestion.read"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.SuggestTravelAssetsRequest,
  }),
  outputSchema: Models.SuggestTravelAssetsResponse,
});

export const googleAds_userData_uploadUserData = defineEndpointDescriptor({
  id: "googleAds.userData.uploadUserData",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}:uploadUserData",
  summary: "UserDataService.UploadUserData",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["userData.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.UploadUserDataRequest,
  }),
  outputSchema: Models.UploadUserDataResponse,
});

export const googleAds_userListCustomerType_mutateUserListCustomerTypes = defineEndpointDescriptor({
  id: "googleAds.userListCustomerType.mutateUserListCustomerTypes",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/userListCustomerTypes:mutate",
  summary: "UserListCustomerTypeService.MutateUserListCustomerTypes",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["userListCustomerType.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateUserListCustomerTypesRequest,
  }),
  outputSchema: Models.MutateUserListCustomerTypesResponse,
});

export const googleAds_userList_mutateUserLists = defineEndpointDescriptor({
  id: "googleAds.userList.mutateUserLists",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/userLists:mutate",
  summary: "UserListService.MutateUserLists",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["userList.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.MutateUserListsRequest,
  }),
  outputSchema: Models.MutateUserListsResponse,
});

export const googleAds_youTubeVideoUpload_createYouTubeVideoUpload = defineEndpointDescriptor({
  id: "googleAds.youTubeVideoUpload.createYouTubeVideoUpload",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/youTubeVideoUploads:create",
  summary: "YouTubeVideoUploadService.CreateYouTubeVideoUpload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["youTubeVideoUpload.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.CreateYouTubeVideoUploadRequest,
  }),
  outputSchema: Models.CreateYouTubeVideoUploadResponse,
});

export const googleAds_youTubeVideoUpload_removeYouTubeVideoUpload = defineEndpointDescriptor({
  id: "googleAds.youTubeVideoUpload.removeYouTubeVideoUpload",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/youTubeVideoUploads:remove",
  summary: "YouTubeVideoUploadService.RemoveYouTubeVideoUpload",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["youTubeVideoUpload.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.RemoveYouTubeVideoUploadRequest,
  }),
  outputSchema: Models.RemoveYouTubeVideoUploadResponse,
});

export const googleAds_youTubeVideoUpload_updateYouTubeVideoUpload = defineEndpointDescriptor({
  id: "googleAds.youTubeVideoUpload.updateYouTubeVideoUpload",
  platform: "google-ads",
  method: "POST",
  path: "/v25/customers/{customer_id=*}/youTubeVideoUploads:update",
  summary: "YouTubeVideoUploadService.UpdateYouTubeVideoUpload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/adwords"],
  capabilities: ["youTubeVideoUpload.manage"],
  rateLimitBucket: "google-ads-api",
  authSchemes: ["OAuth2","DeveloperToken"],
  protocols: ["protobuf-json"],
  parameters: [
    {"name":"request","wireName":"request","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    request: Models.UpdateYouTubeVideoUploadRequest,
  }),
  outputSchema: Models.UpdateYouTubeVideoUploadResponse,
});

export const endpointDescriptors = [googleAds_accountBudgetProposal_mutateAccountBudgetProposal, googleAds_accountLink_createAccountLink, googleAds_accountLink_mutateAccountLink, googleAds_adGroupAdLabel_mutateAdGroupAdLabels, googleAds_adGroupAd_mutateAdGroupAds, googleAds_adGroupAd_removeAutomaticallyCreatedAssets, googleAds_adGroupAsset_mutateAdGroupAssets, googleAds_adGroupAssetSet_mutateAdGroupAssetSets, googleAds_adGroupBidModifier_mutateAdGroupBidModifiers, googleAds_adGroupCriterionCustomizer_mutateAdGroupCriterionCustomizers, googleAds_adGroupCriterionLabel_mutateAdGroupCriterionLabels, googleAds_adGroupCriterion_mutateAdGroupCriteria, googleAds_adGroupCustomizer_mutateAdGroupCustomizers, googleAds_adGroupLabel_mutateAdGroupLabels, googleAds_adGroup_mutateAdGroups, googleAds_adParameter_mutateAdParameters, googleAds_ad_mutateAds, googleAds_assetGeneration_generateImages, googleAds_assetGeneration_generateText, googleAds_assetGroupAsset_mutateAssetGroupAssets, googleAds_assetGroupListingGroupFilter_mutateAssetGroupListingGroupFilters, googleAds_assetGroup_mutateAssetGroups, googleAds_assetGroupSignal_mutateAssetGroupSignals, googleAds_asset_mutateAssets, googleAds_assetSetAsset_mutateAssetSetAssets, googleAds_assetSet_mutateAssetSets, googleAds_audienceInsights_generateAudienceCompositionInsights, googleAds_audienceInsights_generateAudienceDefinition, googleAds_audienceInsights_generateAudienceOverlapInsights, googleAds_audienceInsights_generateInsightsFinderReport, googleAds_audienceInsights_generateSuggestedTargetingInsights, googleAds_audienceInsights_generateTargetingSuggestionMetrics, googleAds_audienceInsights_listAudienceInsightsAttributes, googleAds_audienceInsights_listInsightsEligibleDates, googleAds_audience_mutateAudiences, googleAds_automaticallyCreatedAssetRemoval_removeCampaignAutomaticallyCreatedAsset, googleAds_batchJob_addBatchJobOperations, googleAds_batchJob_listBatchJobResults, googleAds_batchJob_mutateBatchJob, googleAds_batchJob_runBatchJob, googleAds_benchmarks_generateBenchmarksMetrics, googleAds_benchmarks_listBenchmarksAvailableDates, googleAds_benchmarks_listBenchmarksLocations, googleAds_benchmarks_listBenchmarksProducts, googleAds_benchmarks_listBenchmarksSources, googleAds_biddingDataExclusion_mutateBiddingDataExclusions, googleAds_biddingSeasonalityAdjustment_mutateBiddingSeasonalityAdjustments, googleAds_biddingStrategy_mutateBiddingStrategies, googleAds_billingSetup_mutateBillingSetup, googleAds_brandSuggestion_suggestBrands, googleAds_campaignAsset_mutateCampaignAssets, googleAds_campaignAssetSet_mutateCampaignAssetSets, googleAds_campaignBidModifier_mutateCampaignBidModifiers, googleAds_campaignBudget_mutateCampaignBudgets, googleAds_campaignConversionGoal_mutateCampaignConversionGoals, googleAds_campaignCriterion_mutateCampaignCriteria, googleAds_campaignCustomizer_mutateCampaignCustomizers, googleAds_campaignDraft_listCampaignDraftAsyncErrors, googleAds_campaignDraft_mutateCampaignDrafts, googleAds_campaignDraft_promoteCampaignDraft, googleAds_campaignGoalConfig_mutateCampaignGoalConfigs, googleAds_campaignGroup_mutateCampaignGroups, googleAds_campaignLabel_mutateCampaignLabels, googleAds_campaign_enablePMaxBrandGuidelines, googleAds_campaign_mutateCampaigns, googleAds_campaignSharedSet_mutateCampaignSharedSets, googleAds_contentCreatorInsights_generateCreatorInsights, googleAds_contentCreatorInsights_generateTrendingInsights, googleAds_conversionAction_mutateConversionActions, googleAds_conversionAdjustmentUpload_uploadConversionAdjustments, googleAds_conversionCustomVariable_mutateConversionCustomVariables, googleAds_conversionGoalCampaignConfig_mutateConversionGoalCampaignConfigs, googleAds_conversionUpload_uploadCallConversions, googleAds_conversionUpload_uploadClickConversions, googleAds_conversionValueRule_mutateConversionValueRules, googleAds_conversionValueRuleSet_mutateConversionValueRuleSets, googleAds_customAudience_mutateCustomAudiences, googleAds_customConversionGoal_mutateCustomConversionGoals, googleAds_customerAsset_mutateCustomerAssets, googleAds_customerAssetSet_mutateCustomerAssetSets, googleAds_customerClientLink_mutateCustomerClientLink, googleAds_customerConversionGoal_mutateCustomerConversionGoals, googleAds_customerCustomizer_mutateCustomerCustomizers, googleAds_customerLabel_mutateCustomerLabels, googleAds_customerManagerLink_moveManagerLink, googleAds_customerManagerLink_mutateCustomerManagerLink, googleAds_customerNegativeCriterion_mutateCustomerNegativeCriteria, googleAds_customer_createCustomerClient, googleAds_customer_listAccessibleCustomers, googleAds_customer_mutateCustomer, googleAds_customerSkAdNetworkConversionValueSchema_mutateCustomerSkAdNetworkConversionValueSchema, googleAds_customerUserAccessInvitation_mutateCustomerUserAccessInvitation, googleAds_customerUserAccess_mutateCustomerUserAccess, googleAds_customInterest_mutateCustomInterests, googleAds_customizerAttribute_mutateCustomizerAttributes, googleAds_dataLink_createDataLink, googleAds_dataLink_removeDataLink, googleAds_dataLink_updateDataLink, googleAds_experimentArm_mutateExperimentArms, googleAds_experiment_endExperiment, googleAds_experiment_graduateExperiment, googleAds_experiment_listExperimentAsyncErrors, googleAds_experiment_mutateExperiments, googleAds_experiment_promoteExperiment, googleAds_experiment_scheduleExperiment, googleAds_geoTargetConstant_suggestGeoTargetConstants, googleAds_goal_mutateGoals, googleAds_googleAdsField_getGoogleAdsField, googleAds_googleAdsField_searchGoogleAdsFields, googleAds_googleAds_mutate, googleAds_googleAds_search, googleAds_googleAds_searchStream, googleAds_identityVerification_getIdentityVerification, googleAds_identityVerification_startIdentityVerification, googleAds_incentive_applyIncentive, googleAds_incentive_fetchIncentive, googleAds_invoice_listInvoices, googleAds_keywordPlanAdGroupKeyword_mutateKeywordPlanAdGroupKeywords, googleAds_keywordPlanAdGroup_mutateKeywordPlanAdGroups, googleAds_keywordPlanCampaignKeyword_mutateKeywordPlanCampaignKeywords, googleAds_keywordPlanCampaign_mutateKeywordPlanCampaigns, googleAds_keywordPlanIdea_generateAdGroupThemes, googleAds_keywordPlanIdea_generateKeywordForecastMetrics, googleAds_keywordPlanIdea_generateKeywordHistoricalMetrics, googleAds_keywordPlanIdea_generateKeywordIdeas, googleAds_keywordPlan_mutateKeywordPlans, googleAds_keywordThemeConstant_suggestKeywordThemeConstants, googleAds_label_mutateLabels, googleAds_localServicesLead_appendLeadConversation, googleAds_localServicesLead_provideLeadFeedback, googleAds_multiPartyAuthReview_resolveMultiPartyAuthReview, googleAds_offlineUserDataJob_addOfflineUserDataJobOperations, googleAds_offlineUserDataJob_createOfflineUserDataJob, googleAds_offlineUserDataJob_runOfflineUserDataJob, googleAds_paymentsAccount_listPaymentsAccounts, googleAds_productLinkInvitation_createProductLinkInvitation, googleAds_productLinkInvitation_removeProductLinkInvitation, googleAds_productLinkInvitation_updateProductLinkInvitation, googleAds_productLink_createProductLink, googleAds_productLink_removeProductLink, googleAds_reachPlan_generateConversionRates, googleAds_reachPlan_generateReachForecast, googleAds_reachPlan_listPlannableLocations, googleAds_reachPlan_listPlannableProducts, googleAds_reachPlan_listPlannableUserInterests, googleAds_reachPlan_listPlannableUserLists, googleAds_recommendation_applyRecommendation, googleAds_recommendation_dismissRecommendation, googleAds_recommendation_generateRecommendations, googleAds_recommendationSubscription_mutateRecommendationSubscription, googleAds_remarketingAction_mutateRemarketingActions, googleAds_reservation_bookCampaigns, googleAds_reservation_quoteCampaigns, googleAds_shareablePreview_generateShareablePreviews, googleAds_sharedCriterion_mutateSharedCriteria, googleAds_sharedSet_mutateSharedSets, googleAds_smartCampaignSetting_getSmartCampaignStatus, googleAds_smartCampaignSetting_mutateSmartCampaignSettings, googleAds_smartCampaignSuggest_suggestKeywordThemes, googleAds_smartCampaignSuggest_suggestSmartCampaignAd, googleAds_smartCampaignSuggest_suggestSmartCampaignBudgetOptions, googleAds_thirdPartyAppAnalyticsLink_regenerateShareableLinkId, googleAds_travelAssetSuggestion_suggestTravelAssets, googleAds_userData_uploadUserData, googleAds_userListCustomerType_mutateUserListCustomerTypes, googleAds_userList_mutateUserLists, googleAds_youTubeVideoUpload_createYouTubeVideoUpload, googleAds_youTubeVideoUpload_removeYouTubeVideoUpload, googleAds_youTubeVideoUpload_updateYouTubeVideoUpload] as const;
