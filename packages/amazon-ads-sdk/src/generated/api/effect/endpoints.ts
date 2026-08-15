// @generated
// fingerprint: sha256:a6e51b2fa45337b0a989e765df6fc1d6c77fa45469c0e1cbcee18fae2ebec3a0
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const amazon_ads_adGroupForecasts_dSPRetrieveAdGroupForecast = defineEndpointDescriptor({
  id: "amazon-ads.adGroupForecasts.dSPRetrieveAdGroupForecast",
  platform: "amazon-ads-api",
  method: "POST",
  path: "/adsApi/v1/retrieve/adGroupForecasts/dsp",
  summary: "DSPRetrieveAdGroupForecast",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["advertising::campaign_management"],
  capabilities: ["amazon-ads-api.adGroupForecasts.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupForecastDescriptions","wireName":"adGroupForecastDescriptions","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupForecastDescriptions: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline2484))),
  }),
  outputSchema: Models.DSPRetrieveAdGroupForecastResponse,
});

export const amazon_ads_campaignForecasts_dSPRetrieveCampaignForecast = defineEndpointDescriptor({
  id: "amazon-ads.campaignForecasts.dSPRetrieveCampaignForecast",
  platform: "amazon-ads-api",
  method: "POST",
  path: "/adsApi/v1/retrieve/campaignForecasts/dsp",
  summary: "DSPRetrieveCampaignForecast",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["advertising::campaign_management"],
  capabilities: ["amazon-ads-api.campaignForecasts.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"campaignForecastDescriptions","wireName":"campaignForecastDescriptions","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignForecastDescriptions: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline2489))),
  }),
  outputSchema: Models.DSPRetrieveCampaignForecastResponse,
});

export const amazon_ads_brandStoreEditions_listBrandStoreEdition = defineEndpointDescriptor({
  id: "amazon-ads.brandStoreEditions.listBrandStoreEdition",
  platform: "amazon-ads-api",
  method: "GET",
  path: "/adsApi/v1/brandStoreEditions",
  summary: "ListBrandStoreEdition",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["advertising::campaign_management"],
  capabilities: ["amazon-ads-api.brandStoreEditions.read"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"brandStoreId","wireName":"brandStoreId","location":"query","required":true,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    brandStoreId: Schema.String,
    nextToken: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.ListBrandStoreEditionResponse,
});

export const amazon_ads_brandStores_queryBrandStore = defineEndpointDescriptor({
  id: "amazon-ads.brandStores.queryBrandStore",
  platform: "amazon-ads-api",
  method: "POST",
  path: "/adsApi/v1/query/brandStores",
  summary: "QueryBrandStore",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["advertising::campaign_management"],
  capabilities: ["amazon-ads-api.brandStores.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"storeNameFilter","wireName":"storeNameFilter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
    storeNameFilter: Models.Inline2480,
  }),
  outputSchema: Models.QueryBrandStoreResponse,
});

export const amazon_ads_brandStoreEditionPublishVersions_queryBrandStoreEditionPublishVersion = defineEndpointDescriptor({
  id: "amazon-ads.brandStoreEditionPublishVersions.queryBrandStoreEditionPublishVersion",
  platform: "amazon-ads-api",
  method: "POST",
  path: "/adsApi/v1/query/brandStoreEditionPublishVersions",
  summary: "QueryBrandStoreEditionPublishVersion",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["advertising::campaign_management"],
  capabilities: ["amazon-ads-api.brandStoreEditionPublishVersions.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"editionIdFilter","wireName":"editionIdFilter","location":"body","required":true,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"publishStatusFilter","wireName":"publishStatusFilter","location":"body","required":true,"nullable":false},
    {"name":"storeIdFilter","wireName":"storeIdFilter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    editionIdFilter: Models.Inline2340,
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
    publishStatusFilter: Models.Inline2341,
    storeIdFilter: Models.Inline2342,
  }),
  outputSchema: Models.QueryBrandStoreEditionPublishVersionResponse,
});

export const amazon_ads_brandStorePages_queryBrandStorePage = defineEndpointDescriptor({
  id: "amazon-ads.brandStorePages.queryBrandStorePage",
  platform: "amazon-ads-api",
  method: "POST",
  path: "/adsApi/v1/query/brandStorePages",
  summary: "QueryBrandStorePage",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["advertising::campaign_management"],
  capabilities: ["amazon-ads-api.brandStorePages.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"editionIdFilter","wireName":"editionIdFilter","location":"body","required":true,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"body","required":false,"nullable":false},
    {"name":"nextToken","wireName":"nextToken","location":"body","required":false,"nullable":false},
    {"name":"pageIdFilter","wireName":"pageIdFilter","location":"body","required":true,"nullable":false},
    {"name":"storeEditionPublishIdFilter","wireName":"storeEditionPublishIdFilter","location":"body","required":false,"nullable":false},
    {"name":"storeIdFilter","wireName":"storeIdFilter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    editionIdFilter: Models.Inline2472,
    maxResults: Schema.optional(Schema.Number),
    nextToken: Schema.optional(Schema.String),
    pageIdFilter: Models.Inline2473,
    storeEditionPublishIdFilter: Schema.optional(Models.Inline2474),
    storeIdFilter: Models.Inline2475,
  }),
  outputSchema: Models.QueryBrandStorePageResponse,
});

export const amazon_ads_brandStoreEditionPublishVersions_updateBrandStoreEditionPublishVersion = defineEndpointDescriptor({
  id: "amazon-ads.brandStoreEditionPublishVersions.updateBrandStoreEditionPublishVersion",
  platform: "amazon-ads-api",
  method: "POST",
  path: "/adsApi/v1/update/brandStoreEditionPublishVersions",
  summary: "UpdateBrandStoreEditionPublishVersion",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["advertising::campaign_management"],
  capabilities: ["amazon-ads-api.brandStoreEditionPublishVersions.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"brandStoreEditionPublishVersions","wireName":"brandStoreEditionPublishVersions","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    brandStoreEditionPublishVersions: Schema.Array(Schema.suspend(() => Models.Inline2494)),
  }),
  outputSchema: Models.UpdateBrandStoreEditionPublishVersionResponse,
});

export const amazon_ads_brandStorePages_updateBrandStorePage = defineEndpointDescriptor({
  id: "amazon-ads.brandStorePages.updateBrandStorePage",
  platform: "amazon-ads-api",
  method: "POST",
  path: "/adsApi/v1/update/brandStorePages",
  summary: "UpdateBrandStorePage",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["advertising::campaign_management"],
  capabilities: ["amazon-ads-api.brandStorePages.manage"],
  rateLimitBucket: "amazon-ads-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"brandStorePages","wireName":"brandStorePages","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    brandStorePages: Schema.Array(Schema.suspend(() => Models.Inline2620)),
  }),
  outputSchema: Models.UpdateBrandStorePageResponse,
});

export const endpointDescriptors = [amazon_ads_adGroupForecasts_dSPRetrieveAdGroupForecast, amazon_ads_campaignForecasts_dSPRetrieveCampaignForecast, amazon_ads_brandStoreEditions_listBrandStoreEdition, amazon_ads_brandStores_queryBrandStore, amazon_ads_brandStoreEditionPublishVersions_queryBrandStoreEditionPublishVersion, amazon_ads_brandStorePages_queryBrandStorePage, amazon_ads_brandStoreEditionPublishVersions_updateBrandStoreEditionPublishVersion, amazon_ads_brandStorePages_updateBrandStorePage] as const;
