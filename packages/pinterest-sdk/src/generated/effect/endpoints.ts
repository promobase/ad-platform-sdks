// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const pinterest_adAccounts_adAccountAnalytics = defineEndpointDescriptor({
  id: "pinterest.adAccounts.adAccountAnalytics",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/analytics",
  summary: "Get ad account analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adAccounts.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"columns","wireName":"columns","location":"query","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"clickWindowDays","wireName":"clickWindowDays","location":"query","required":false,"nullable":false},
    {"name":"engagementWindowDays","wireName":"engagementWindowDays","location":"query","required":false,"nullable":false},
    {"name":"viewWindowDays","wireName":"viewWindowDays","location":"query","required":false,"nullable":false},
    {"name":"conversionReportTime","wireName":"conversionReportTime","location":"query","required":false,"nullable":false},
    {"name":"reportingTimezone","wireName":"reportingTimezone","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    startDate: Schema.String,
    endDate: Schema.String,
    columns: Schema.Array(Schema.String),
    granularity: Schema.String,
    clickWindowDays: Schema.optional(Schema.Number),
    engagementWindowDays: Schema.optional(Schema.Number),
    viewWindowDays: Schema.optional(Schema.Number),
    conversionReportTime: Schema.optional(Schema.String),
    reportingTimezone: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdAccountAnalyticsResponse,
});

export const pinterest_resources_adAccountCountriesGet = defineEndpointDescriptor({
  id: "pinterest.resources.adAccountCountriesGet",
  platform: "pinterest",
  method: "GET",
  path: "/resources/ad_account_countries",
  summary: "Get ad accounts countries",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.resources.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.AdAccountCountriesGetResponse,
});

export const pinterest_audienceSharing_adAccountsAudiencesSharedAccountsList = defineEndpointDescriptor({
  id: "pinterest.audienceSharing.adAccountsAudiencesSharedAccountsList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/audiences/shared/accounts",
  summary: "List accounts with access to an audience owned by an ad account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.audienceSharing.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"audienceId","wireName":"audienceId","location":"query","required":true,"nullable":false},
    {"name":"accountType","wireName":"accountType","location":"query","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    audienceId: Schema.String,
    accountType: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.AdAccountsAudiencesSharedAccountsListResponse,
});

export const pinterest_adAccounts_adAccountsCreate = defineEndpointDescriptor({
  id: "pinterest.adAccounts.adAccountsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts",
  summary: "Create ad account",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.adAccounts.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"country","wireName":"country","location":"body","required":false,"nullable":false},
    {"name":"currency","wireName":"currency","location":"body","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":false,"nullable":false},
    {"name":"owner_user_id","wireName":"owner_user_id","location":"body","required":false,"nullable":false},
    {"name":"time_zone","wireName":"time_zone","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    country: Schema.optional(Schema.String),
    currency: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    owner_user_id: Schema.optional(Schema.String),
    time_zone: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdAccountsCreateResponse,
});

export const pinterest_adAccounts_adAccountsGet = defineEndpointDescriptor({
  id: "pinterest.adAccounts.adAccountsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}",
  summary: "Get ad account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adAccounts.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.AdAccountsGetResponse,
});

export const pinterest_adAccounts_adAccountsList = defineEndpointDescriptor({
  id: "pinterest.adAccounts.adAccountsList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts",
  summary: "List ad accounts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adAccounts.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"includeSharedAccounts","wireName":"includeSharedAccounts","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    includeSharedAccounts: Schema.optional(Schema.Boolean),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.AdAccountsListResponse,
});

export const pinterest_leadAds_adAccountsSubscriptionsDelById = defineEndpointDescriptor({
  id: "pinterest.leadAds.adAccountsSubscriptionsDelById",
  platform: "pinterest",
  method: "DELETE",
  path: "/ad_accounts/{ad_account_id}/leads/subscriptions/{subscription_id}",
  summary: "Delete lead ads subscription",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.leadAds.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"subscriptionId","wireName":"subscriptionId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    subscriptionId: Schema.String,
  }),
  outputSchema: Models.AdAccountsSubscriptionsDelByIdResponse,
});

export const pinterest_leadAds_adAccountsSubscriptionsGetById = defineEndpointDescriptor({
  id: "pinterest.leadAds.adAccountsSubscriptionsGetById",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/leads/subscriptions/{subscription_id}",
  summary: "Get lead ads subscription by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.leadAds.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"subscriptionId","wireName":"subscriptionId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    subscriptionId: Schema.String,
  }),
  outputSchema: Models.AdAccountsSubscriptionsGetByIdResponse,
});

export const pinterest_leadAds_adAccountsSubscriptionsGetList = defineEndpointDescriptor({
  id: "pinterest.leadAds.adAccountsSubscriptionsGetList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/leads/subscriptions",
  summary: "Get lead ads subscriptions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.leadAds.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.AdAccountsSubscriptionsGetListResponse,
});

export const pinterest_leadAds_adAccountsSubscriptionsPost = defineEndpointDescriptor({
  id: "pinterest.leadAds.adAccountsSubscriptionsPost",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/leads/subscriptions",
  summary: "Create lead ads subscription",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.leadAds.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"partner_access_token","wireName":"partner_access_token","location":"body","required":false,"nullable":false},
    {"name":"partner_metadata","wireName":"partner_metadata","location":"body","required":false,"nullable":false},
    {"name":"partner_refresh_token","wireName":"partner_refresh_token","location":"body","required":false,"nullable":false},
    {"name":"lead_form_id","wireName":"lead_form_id","location":"body","required":false,"nullable":false},
    {"name":"webhook_url","wireName":"webhook_url","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    partner_access_token: Schema.optional(Schema.String),
    partner_metadata: Schema.optional(Models.Inline8901),
    partner_refresh_token: Schema.optional(Schema.String),
    lead_form_id: Schema.optional(Schema.String),
    webhook_url: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdAccountsSubscriptionsPostResponse,
});

export const pinterest_adAccounts_adAccountTargetingAnalyticsGet = defineEndpointDescriptor({
  id: "pinterest.adAccounts.adAccountTargetingAnalyticsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/targeting_analytics",
  summary: "Get targeting analytics for an ad account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adAccounts.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"targetingTypes","wireName":"targetingTypes","location":"query","required":true,"nullable":false},
    {"name":"columns","wireName":"columns","location":"query","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"clickWindowDays","wireName":"clickWindowDays","location":"query","required":false,"nullable":false},
    {"name":"engagementWindowDays","wireName":"engagementWindowDays","location":"query","required":false,"nullable":false},
    {"name":"viewWindowDays","wireName":"viewWindowDays","location":"query","required":false,"nullable":false},
    {"name":"conversionReportTime","wireName":"conversionReportTime","location":"query","required":false,"nullable":false},
    {"name":"attributionTypes","wireName":"attributionTypes","location":"query","required":false,"nullable":false},
    {"name":"reportingTimezone","wireName":"reportingTimezone","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    startDate: Schema.String,
    endDate: Schema.String,
    targetingTypes: Schema.Array(Schema.String),
    columns: Schema.Array(Schema.String),
    granularity: Schema.String,
    clickWindowDays: Schema.optional(Schema.Number),
    engagementWindowDays: Schema.optional(Schema.Number),
    viewWindowDays: Schema.optional(Schema.Number),
    conversionReportTime: Schema.optional(Schema.String),
    attributionTypes: Schema.optional(Schema.Array(Schema.String)),
    reportingTimezone: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdAccountTargetingAnalyticsGetResponse,
});

export const pinterest_adGroups_adGroupsAnalytics = defineEndpointDescriptor({
  id: "pinterest.adGroups.adGroupsAnalytics",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ad_groups/analytics",
  summary: "Get ad group analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adGroups.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"adGroupIds","wireName":"adGroupIds","location":"query","required":true,"nullable":false},
    {"name":"columns","wireName":"columns","location":"query","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"clickWindowDays","wireName":"clickWindowDays","location":"query","required":false,"nullable":false},
    {"name":"engagementWindowDays","wireName":"engagementWindowDays","location":"query","required":false,"nullable":false},
    {"name":"viewWindowDays","wireName":"viewWindowDays","location":"query","required":false,"nullable":false},
    {"name":"conversionReportTime","wireName":"conversionReportTime","location":"query","required":false,"nullable":false},
    {"name":"aggregateReportRows","wireName":"aggregateReportRows","location":"query","required":false,"nullable":false},
    {"name":"reportingTimezone","wireName":"reportingTimezone","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    startDate: Schema.String,
    endDate: Schema.String,
    adGroupIds: Schema.Array(Schema.String),
    columns: Schema.Array(Schema.String),
    granularity: Schema.String,
    clickWindowDays: Schema.optional(Schema.Number),
    engagementWindowDays: Schema.optional(Schema.Number),
    viewWindowDays: Schema.optional(Schema.Number),
    conversionReportTime: Schema.optional(Schema.String),
    aggregateReportRows: Schema.optional(Schema.Boolean),
    reportingTimezone: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdGroupsAnalyticsResponse,
});

export const pinterest_adGroups_adGroupsAudienceSizing = defineEndpointDescriptor({
  id: "pinterest.adGroups.adGroupsAudienceSizing",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/ad_groups/audience_sizing",
  summary: "Get audience sizing",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adGroups.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"auto_targeting_enabled","wireName":"auto_targeting_enabled","location":"body","required":false,"nullable":false},
    {"name":"creative_types","wireName":"creative_types","location":"body","required":false,"nullable":false},
    {"name":"keywords","wireName":"keywords","location":"body","required":false,"nullable":false},
    {"name":"placement_group","wireName":"placement_group","location":"body","required":false,"nullable":false},
    {"name":"product_group_ids","wireName":"product_group_ids","location":"body","required":false,"nullable":false},
    {"name":"targeting_spec","wireName":"targeting_spec","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    auto_targeting_enabled: Schema.optional(Schema.Boolean),
    creative_types: Schema.optional(Schema.Array(Schema.String)),
    keywords: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline7453))),
    placement_group: Schema.optional(Models.Inline7454),
    product_group_ids: Schema.optional(Schema.Array(Schema.String)),
    targeting_spec: Schema.optional(Models.Inline7455),
  }),
  outputSchema: Models.AdGroupsAudienceSizingResponse,
});

export const pinterest_adGroups_adGroupsBidFloorGet = defineEndpointDescriptor({
  id: "pinterest.adGroups.adGroupsBidFloorGet",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/bid_floor",
  summary: "Get bid floors",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adGroups.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bid_floor_specs","wireName":"bid_floor_specs","location":"body","required":true,"nullable":false},
    {"name":"targeting_spec","wireName":"targeting_spec","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bid_floor_specs: Schema.Array(Schema.suspend(() => Models.Inline7638)),
    targeting_spec: Schema.optional(Models.Inline7645),
  }),
  outputSchema: Models.AdGroupsBidFloorGetResponse,
});

export const pinterest_adGroups_adGroupsCreate = defineEndpointDescriptor({
  id: "pinterest.adGroups.adGroupsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/ad_groups",
  summary: "Create ad groups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.adGroups.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.AdGroupsCreateResponse,
});

export const pinterest_adGroups_adGroupsDynamicTitlesDownloadCsv = defineEndpointDescriptor({
  id: "pinterest.adGroups.adGroupsDynamicTitlesDownloadCsv",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ad_groups/{ad_group_id}/dynamic_titles/csv",
  summary: "Get dynamic titles CSV download URL",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adGroups.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"adGroupId","wireName":"adGroupId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    adGroupId: Schema.String,
  }),
  outputSchema: Models.AdGroupsDynamicTitlesDownloadCsvResponse,
});

export const pinterest_adGroups_adGroupsDynamicTitlesGetStatus = defineEndpointDescriptor({
  id: "pinterest.adGroups.adGroupsDynamicTitlesGetStatus",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ad_groups/{ad_group_id}/dynamic_titles/status",
  summary: "Get dynamic titles status",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adGroups.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"adGroupId","wireName":"adGroupId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    adGroupId: Schema.String,
  }),
  outputSchema: Models.AdGroupsDynamicTitlesGetStatusResponse,
});

export const pinterest_adGroups_adGroupsDynamicTitlesGetUploadUrl = defineEndpointDescriptor({
  id: "pinterest.adGroups.adGroupsDynamicTitlesGetUploadUrl",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ad_groups/{ad_group_id}/dynamic_titles/uploads",
  summary: "Get dynamic titles upload URL",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adGroups.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"adGroupId","wireName":"adGroupId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    adGroupId: Schema.String,
  }),
  outputSchema: Models.AdGroupsDynamicTitlesGetUploadUrlResponse,
});

export const pinterest_adGroups_adGroupsDynamicTitlesProcessCsv = defineEndpointDescriptor({
  id: "pinterest.adGroups.adGroupsDynamicTitlesProcessCsv",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/ad_groups/{ad_group_id}/dynamic_titles",
  summary: "Process dynamic titles CSV",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.adGroups.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"adGroupId","wireName":"adGroupId","location":"path","required":true,"nullable":false},
    {"name":"request_id","wireName":"request_id","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    adGroupId: Schema.String,
    request_id: Schema.String,
  }),
  outputSchema: Models.AdGroupsDynamicTitlesProcessCsvResponse,
});

export const pinterest_adGroups_adGroupsGet = defineEndpointDescriptor({
  id: "pinterest.adGroups.adGroupsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ad_groups/{ad_group_id}",
  summary: "Get ad group",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adGroups.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adGroupId","wireName":"adGroupId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adGroupId: Schema.String,
    adAccountId: Schema.String,
  }),
  outputSchema: Models.AdGroupsGetResponse,
});

export const pinterest_adGroups_adGroupsList = defineEndpointDescriptor({
  id: "pinterest.adGroups.adGroupsList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ad_groups",
  summary: "List ad groups",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adGroups.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"campaignIds","wireName":"campaignIds","location":"query","required":false,"nullable":false},
    {"name":"adGroupIds","wireName":"adGroupIds","location":"query","required":false,"nullable":false},
    {"name":"entityStatuses","wireName":"entityStatuses","location":"query","required":false,"nullable":false},
    {"name":"translateInterestsToNames","wireName":"translateInterestsToNames","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
    campaignIds: Schema.optional(Schema.Array(Schema.String)),
    adGroupIds: Schema.optional(Schema.Array(Schema.Unknown)),
    entityStatuses: Schema.optional(Schema.Array(Schema.String)),
    translateInterestsToNames: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.AdGroupsListResponse,
});

export const pinterest_adGroups_adGroupsTargetingAnalyticsGet = defineEndpointDescriptor({
  id: "pinterest.adGroups.adGroupsTargetingAnalyticsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ad_groups/targeting_analytics",
  summary: "Get targeting analytics for ad groups",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adGroups.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"adGroupIds","wireName":"adGroupIds","location":"query","required":true,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"targetingTypes","wireName":"targetingTypes","location":"query","required":true,"nullable":false},
    {"name":"columns","wireName":"columns","location":"query","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"clickWindowDays","wireName":"clickWindowDays","location":"query","required":false,"nullable":false},
    {"name":"engagementWindowDays","wireName":"engagementWindowDays","location":"query","required":false,"nullable":false},
    {"name":"viewWindowDays","wireName":"viewWindowDays","location":"query","required":false,"nullable":false},
    {"name":"conversionReportTime","wireName":"conversionReportTime","location":"query","required":false,"nullable":false},
    {"name":"attributionTypes","wireName":"attributionTypes","location":"query","required":false,"nullable":false},
    {"name":"reportingTimezone","wireName":"reportingTimezone","location":"query","required":false,"nullable":false},
    {"name":"sortColumns","wireName":"sortColumns","location":"query","required":false,"nullable":false},
    {"name":"sortAscending","wireName":"sortAscending","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    adGroupIds: Schema.Array(Schema.String),
    startDate: Schema.String,
    endDate: Schema.String,
    targetingTypes: Schema.Array(Schema.String),
    columns: Schema.Array(Schema.String),
    granularity: Schema.String,
    clickWindowDays: Schema.optional(Schema.Number),
    engagementWindowDays: Schema.optional(Schema.Number),
    viewWindowDays: Schema.optional(Schema.Number),
    conversionReportTime: Schema.optional(Schema.String),
    attributionTypes: Schema.optional(Schema.Array(Schema.String)),
    reportingTimezone: Schema.optional(Schema.String),
    sortColumns: Schema.optional(Schema.Array(Schema.String)),
    sortAscending: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.AdGroupsTargetingAnalyticsGetResponse,
});

export const pinterest_adGroups_adGroupsUpdate = defineEndpointDescriptor({
  id: "pinterest.adGroups.adGroupsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/ad_groups",
  summary: "Update ad groups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.adGroups.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.AdGroupsUpdateResponse,
});

export const pinterest_campaigns_adPinsAnalytics = defineEndpointDescriptor({
  id: "pinterest.campaigns.adPinsAnalytics",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/pins/analytics",
  summary: "Get pins analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.campaigns.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"campaignId","wireName":"campaignId","location":"query","required":true,"nullable":false},
    {"name":"pinIds","wireName":"pinIds","location":"query","required":true,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"columns","wireName":"columns","location":"query","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"clickWindowDays","wireName":"clickWindowDays","location":"query","required":false,"nullable":false},
    {"name":"engagementWindowDays","wireName":"engagementWindowDays","location":"query","required":false,"nullable":false},
    {"name":"viewWindowDays","wireName":"viewWindowDays","location":"query","required":false,"nullable":false},
    {"name":"conversionReportTime","wireName":"conversionReportTime","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    campaignId: Schema.String,
    pinIds: Schema.Array(Schema.Unknown),
    startDate: Schema.String,
    endDate: Schema.String,
    columns: Schema.Array(Schema.String),
    granularity: Schema.String,
    clickWindowDays: Schema.optional(Schema.Number),
    engagementWindowDays: Schema.optional(Schema.Number),
    viewWindowDays: Schema.optional(Schema.Number),
    conversionReportTime: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdPinsAnalyticsResponse,
});

export const pinterest_ads_adPreviewsCreate = defineEndpointDescriptor({
  id: "pinterest.ads.adPreviewsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/ad_previews",
  summary: "Create ad preview with pin or image",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.ads.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.AdPreviewsCreateResponse,
});

export const pinterest_ads_adsAnalytics = defineEndpointDescriptor({
  id: "pinterest.ads.adsAnalytics",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ads/analytics",
  summary: "Get ad analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.ads.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"pinIds","wireName":"pinIds","location":"query","required":false,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"adIds","wireName":"adIds","location":"query","required":false,"nullable":false},
    {"name":"columns","wireName":"columns","location":"query","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"clickWindowDays","wireName":"clickWindowDays","location":"query","required":false,"nullable":false},
    {"name":"engagementWindowDays","wireName":"engagementWindowDays","location":"query","required":false,"nullable":false},
    {"name":"viewWindowDays","wireName":"viewWindowDays","location":"query","required":false,"nullable":false},
    {"name":"conversionReportTime","wireName":"conversionReportTime","location":"query","required":false,"nullable":false},
    {"name":"campaignIds","wireName":"campaignIds","location":"query","required":false,"nullable":false},
    {"name":"reportingTimezone","wireName":"reportingTimezone","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    pinIds: Schema.optional(Schema.Array(Schema.String)),
    startDate: Schema.String,
    endDate: Schema.String,
    adIds: Schema.optional(Schema.Array(Schema.Unknown)),
    columns: Schema.Array(Schema.String),
    granularity: Schema.String,
    clickWindowDays: Schema.optional(Schema.Number),
    engagementWindowDays: Schema.optional(Schema.Number),
    viewWindowDays: Schema.optional(Schema.Number),
    conversionReportTime: Schema.optional(Schema.String),
    campaignIds: Schema.optional(Schema.Array(Schema.String)),
    reportingTimezone: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdsAnalyticsResponse,
});

export const pinterest_ads_adsCreate = defineEndpointDescriptor({
  id: "pinterest.ads.adsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/ads",
  summary: "Create ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.ads.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.AdsCreateResponse,
});

export const pinterest_billing_adsCreditRedeem = defineEndpointDescriptor({
  id: "pinterest.billing.adsCreditRedeem",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/ads_credit/redeem",
  summary: "Redeem ad credits",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write","billing:write"],
  capabilities: ["pinterest.billing.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"offerCodeHash","wireName":"offerCodeHash","location":"body","required":true,"nullable":false},
    {"name":"validateOnly","wireName":"validateOnly","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    offerCodeHash: Schema.String,
    validateOnly: Schema.Boolean,
  }),
  outputSchema: Models.AdsCreditRedeemResponse,
});

export const pinterest_billing_adsCreditsDiscountsGet = defineEndpointDescriptor({
  id: "pinterest.billing.adsCreditsDiscountsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ads_credit/discounts",
  summary: "Get ads credit discounts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read","billing:read"],
  capabilities: ["pinterest.billing.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.AdsCreditsDiscountsGetResponse,
});

export const pinterest_ads_adsGet = defineEndpointDescriptor({
  id: "pinterest.ads.adsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ads/{ad_id}",
  summary: "Get ad",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.ads.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adId","wireName":"adId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adId: Schema.String,
    adAccountId: Schema.String,
  }),
  outputSchema: Models.AdsGetResponse,
});

export const pinterest_ads_adsList = defineEndpointDescriptor({
  id: "pinterest.ads.adsList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ads",
  summary: "List ads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.ads.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"campaignIds","wireName":"campaignIds","location":"query","required":false,"nullable":false},
    {"name":"adGroupIds","wireName":"adGroupIds","location":"query","required":false,"nullable":false},
    {"name":"adIds","wireName":"adIds","location":"query","required":false,"nullable":false},
    {"name":"entityStatuses","wireName":"entityStatuses","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
    campaignIds: Schema.optional(Schema.Array(Schema.String)),
    adGroupIds: Schema.optional(Schema.Array(Schema.Unknown)),
    adIds: Schema.optional(Schema.Array(Schema.Unknown)),
    entityStatuses: Schema.optional(Schema.Array(Schema.String)),
  }),
  outputSchema: Models.AdsListResponse,
});

export const pinterest_ads_adsUpdate = defineEndpointDescriptor({
  id: "pinterest.ads.adsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/ads",
  summary: "Update ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.ads.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.AdsUpdateResponse,
});

export const pinterest_ads_adTargetingAnalyticsGet = defineEndpointDescriptor({
  id: "pinterest.ads.adTargetingAnalyticsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ads/targeting_analytics",
  summary: "Get targeting analytics for ads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.ads.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"adIds","wireName":"adIds","location":"query","required":true,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"targetingTypes","wireName":"targetingTypes","location":"query","required":true,"nullable":false},
    {"name":"columns","wireName":"columns","location":"query","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"clickWindowDays","wireName":"clickWindowDays","location":"query","required":false,"nullable":false},
    {"name":"engagementWindowDays","wireName":"engagementWindowDays","location":"query","required":false,"nullable":false},
    {"name":"viewWindowDays","wireName":"viewWindowDays","location":"query","required":false,"nullable":false},
    {"name":"conversionReportTime","wireName":"conversionReportTime","location":"query","required":false,"nullable":false},
    {"name":"attributionTypes","wireName":"attributionTypes","location":"query","required":false,"nullable":false},
    {"name":"reportingTimezone","wireName":"reportingTimezone","location":"query","required":false,"nullable":false},
    {"name":"sortColumns","wireName":"sortColumns","location":"query","required":false,"nullable":false},
    {"name":"sortAscending","wireName":"sortAscending","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    adIds: Schema.Array(Schema.Unknown),
    startDate: Schema.String,
    endDate: Schema.String,
    targetingTypes: Schema.Array(Schema.String),
    columns: Schema.Array(Schema.String),
    granularity: Schema.String,
    clickWindowDays: Schema.optional(Schema.Number),
    engagementWindowDays: Schema.optional(Schema.Number),
    viewWindowDays: Schema.optional(Schema.Number),
    conversionReportTime: Schema.optional(Schema.String),
    attributionTypes: Schema.optional(Schema.Array(Schema.String)),
    reportingTimezone: Schema.optional(Schema.String),
    sortColumns: Schema.optional(Schema.Array(Schema.String)),
    sortAscending: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.AdTargetingAnalyticsGetResponse,
});

export const pinterest_advancedAuction_advancedAuctionItemsGetPost = defineEndpointDescriptor({
  id: "pinterest.advancedAuction.advancedAuctionItemsGetPost",
  platform: "pinterest",
  method: "POST",
  path: "/advanced_auction/items/get",
  summary: "Get item bid options (POST)",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:read","catalogs:read"],
  capabilities: ["pinterest.advancedAuction.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"catalog_id","wireName":"catalog_id","location":"body","required":true,"nullable":false},
    {"name":"items","wireName":"items","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    catalog_id: Models.Inline9179,
    items: Schema.Array(Schema.suspend(() => Models.Inline9180)),
  }),
  outputSchema: Models.AdvancedAuctionItemsGetPostResponse,
});

export const pinterest_advancedAuction_advancedAuctionItemsSubmitPost = defineEndpointDescriptor({
  id: "pinterest.advancedAuction.advancedAuctionItemsSubmitPost",
  platform: "pinterest",
  method: "POST",
  path: "/advanced_auction/items/submit",
  summary: "Operate on item level bid options",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write","catalogs:read"],
  capabilities: ["pinterest.advancedAuction.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"catalog_id","wireName":"catalog_id","location":"body","required":true,"nullable":false},
    {"name":"items","wireName":"items","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    catalog_id: Models.Inline9193,
    items: Schema.Array(Schema.Union(Schema.suspend(() => Models.Inline9194), Schema.suspend(() => Models.Inline9197))),
  }),
  outputSchema: Models.AdvancedAuctionItemsSubmitPostResponse,
});

export const pinterest_conversions_advertiserDefinedEventsCreate = defineEndpointDescriptor({
  id: "pinterest.conversions.advertiserDefinedEventsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/advertiser_defined_events",
  summary: "Create advertiser defined events",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.conversions.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"items","wireName":"items","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    items: Schema.Array(Schema.suspend(() => Models.Inline7540)),
  }),
  outputSchema: Models.AdvertiserDefinedEventsCreateResponse,
});

export const pinterest_conversions_advertiserDefinedEventsDelete = defineEndpointDescriptor({
  id: "pinterest.conversions.advertiserDefinedEventsDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/ad_accounts/{ad_account_id}/advertiser_defined_events",
  summary: "Delete advertiser defined events",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.conversions.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"eventNames","wireName":"eventNames","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    eventNames: Schema.Array(Schema.String),
  }),
  outputSchema: Models.AdvertiserDefinedEventsDeleteResponse,
});

export const pinterest_conversions_advertiserDefinedEventsGet = defineEndpointDescriptor({
  id: "pinterest.conversions.advertiserDefinedEventsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/advertiser_defined_events",
  summary: "Get advertiser defined events",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.conversions.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.AdvertiserDefinedEventsGetResponse,
});

export const pinterest_conversions_advertiserDefinedEventsUpdate = defineEndpointDescriptor({
  id: "pinterest.conversions.advertiserDefinedEventsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/advertiser_defined_events",
  summary: "Update advertiser defined events",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.conversions.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"items","wireName":"items","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    items: Schema.Array(Schema.suspend(() => Models.Inline7545)),
  }),
  outputSchema: Models.AdvertiserDefinedEventsUpdateResponse,
});

export const pinterest_adAccounts_analyticsCreateConversionProductReport = defineEndpointDescriptor({
  id: "pinterest.adAccounts.analyticsCreateConversionProductReport",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/reports/brand_category_sku",
  summary: "Create a request for a brand, category, SKU report",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adAccounts.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ad_group_ids","wireName":"ad_group_ids","location":"body","required":false,"nullable":false},
    {"name":"campaign_ids","wireName":"campaign_ids","location":"body","required":false,"nullable":false},
    {"name":"campaign_objective_types","wireName":"campaign_objective_types","location":"body","required":false,"nullable":false},
    {"name":"click_window_days","wireName":"click_window_days","location":"body","required":false,"nullable":false},
    {"name":"columns","wireName":"columns","location":"body","required":true,"nullable":false},
    {"name":"conversion_product_attribution_type","wireName":"conversion_product_attribution_type","location":"body","required":false,"nullable":false},
    {"name":"conversion_product_breakdown","wireName":"conversion_product_breakdown","location":"body","required":false,"nullable":false},
    {"name":"conversion_report_time","wireName":"conversion_report_time","location":"body","required":false,"nullable":false},
    {"name":"end_date","wireName":"end_date","location":"body","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"body","required":true,"nullable":false},
    {"name":"level","wireName":"level","location":"body","required":true,"nullable":false},
    {"name":"product_sku_ids","wireName":"product_sku_ids","location":"body","required":false,"nullable":false},
    {"name":"report_name","wireName":"report_name","location":"body","required":true,"nullable":false},
    {"name":"start_date","wireName":"start_date","location":"body","required":true,"nullable":false},
    {"name":"view_window_days","wireName":"view_window_days","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ad_group_ids: Schema.optional(Schema.Array(Schema.Unknown)),
    campaign_ids: Schema.optional(Schema.Array(Schema.Unknown)),
    campaign_objective_types: Schema.optional(Schema.Array(Schema.String)),
    click_window_days: Schema.optional(Models.Inline9046),
    columns: Schema.Array(Schema.String),
    conversion_product_attribution_type: Schema.optional(Models.Inline9047),
    conversion_product_breakdown: Schema.optional(Models.Inline9048),
    conversion_report_time: Schema.optional(Models.Inline9049),
    end_date: Schema.String,
    granularity: Models.Inline9050,
    level: Models.Inline9051,
    product_sku_ids: Schema.optional(Schema.Array(Schema.Unknown)),
    report_name: Schema.String,
    start_date: Schema.String,
    view_window_days: Schema.optional(Models.Inline9052),
  }),
  outputSchema: Models.AnalyticsCreateConversionProductReportResponse,
});

export const pinterest_adAccounts_analyticsCreateMmmReport = defineEndpointDescriptor({
  id: "pinterest.adAccounts.analyticsCreateMmmReport",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/mmm_reports",
  summary: "Create a request for a Marketing Mix Modeling (MMM) report",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adAccounts.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"advertiser_ids","wireName":"advertiser_ids","location":"body","required":false,"nullable":false},
    {"name":"columns","wireName":"columns","location":"body","required":true,"nullable":false},
    {"name":"countries","wireName":"countries","location":"body","required":false,"nullable":false},
    {"name":"custom_column_ids","wireName":"custom_column_ids","location":"body","required":false,"nullable":false},
    {"name":"end_date","wireName":"end_date","location":"body","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"body","required":true,"nullable":false},
    {"name":"level","wireName":"level","location":"body","required":true,"nullable":false},
    {"name":"report_name","wireName":"report_name","location":"body","required":true,"nullable":false},
    {"name":"start_date","wireName":"start_date","location":"body","required":true,"nullable":false},
    {"name":"targeting_types","wireName":"targeting_types","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    advertiser_ids: Schema.optional(Schema.Array(Schema.String)),
    columns: Schema.Array(Schema.String),
    countries: Schema.optional(Schema.Array(Schema.String)),
    custom_column_ids: Schema.optional(Schema.Array(Schema.String)),
    end_date: Schema.String,
    granularity: Models.Inline8916,
    level: Models.Inline8917,
    report_name: Schema.String,
    start_date: Schema.String,
    targeting_types: Schema.Array(Schema.String),
  }),
  outputSchema: Models.AnalyticsCreateMmmReportResponse,
});

export const pinterest_adAccounts_analyticsCreateReport = defineEndpointDescriptor({
  id: "pinterest.adAccounts.analyticsCreateReport",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/reports",
  summary: "Create async request for an account analytics report",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adAccounts.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ad_group_ids","wireName":"ad_group_ids","location":"body","required":false,"nullable":false},
    {"name":"ad_group_statuses","wireName":"ad_group_statuses","location":"body","required":false,"nullable":false},
    {"name":"ad_ids","wireName":"ad_ids","location":"body","required":false,"nullable":false},
    {"name":"ad_statuses","wireName":"ad_statuses","location":"body","required":false,"nullable":false},
    {"name":"attribution_types","wireName":"attribution_types","location":"body","required":false,"nullable":false},
    {"name":"campaign_brand_label","wireName":"campaign_brand_label","location":"body","required":false,"nullable":false},
    {"name":"campaign_custom_label","wireName":"campaign_custom_label","location":"body","required":false,"nullable":false},
    {"name":"campaign_ids","wireName":"campaign_ids","location":"body","required":false,"nullable":false},
    {"name":"campaign_objective_types","wireName":"campaign_objective_types","location":"body","required":false,"nullable":false},
    {"name":"campaign_statuses","wireName":"campaign_statuses","location":"body","required":false,"nullable":false},
    {"name":"click_window_days","wireName":"click_window_days","location":"body","required":false,"nullable":false},
    {"name":"columns","wireName":"columns","location":"body","required":false,"nullable":false},
    {"name":"combine_targeting_types","wireName":"combine_targeting_types","location":"body","required":false,"nullable":false},
    {"name":"conversion_report_time","wireName":"conversion_report_time","location":"body","required":false,"nullable":false},
    {"name":"custom_conversion_event_metrics","wireName":"custom_conversion_event_metrics","location":"body","required":false,"nullable":false},
    {"name":"end_date","wireName":"end_date","location":"body","required":true,"nullable":false},
    {"name":"end_hour","wireName":"end_hour","location":"body","required":false,"nullable":false},
    {"name":"engagement_window_days","wireName":"engagement_window_days","location":"body","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"body","required":true,"nullable":false},
    {"name":"level","wireName":"level","location":"body","required":false,"nullable":false},
    {"name":"metrics_filters","wireName":"metrics_filters","location":"body","required":false,"nullable":false},
    {"name":"primary_sort","wireName":"primary_sort","location":"body","required":false,"nullable":false},
    {"name":"product_group_ids","wireName":"product_group_ids","location":"body","required":false,"nullable":false},
    {"name":"product_group_statuses","wireName":"product_group_statuses","location":"body","required":false,"nullable":false},
    {"name":"product_item_ids","wireName":"product_item_ids","location":"body","required":false,"nullable":false},
    {"name":"report_format","wireName":"report_format","location":"body","required":false,"nullable":false},
    {"name":"reporting_timezone","wireName":"reporting_timezone","location":"body","required":false,"nullable":false},
    {"name":"start_date","wireName":"start_date","location":"body","required":true,"nullable":false},
    {"name":"start_hour","wireName":"start_hour","location":"body","required":false,"nullable":false},
    {"name":"targeting_types","wireName":"targeting_types","location":"body","required":false,"nullable":false},
    {"name":"view_window_days","wireName":"view_window_days","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ad_group_ids: Schema.optional(Schema.Array(Schema.Unknown)),
    ad_group_statuses: Schema.optional(Schema.Array(Schema.String)),
    ad_ids: Schema.optional(Schema.Array(Schema.Unknown)),
    ad_statuses: Schema.optional(Schema.Array(Schema.String)),
    attribution_types: Schema.optional(Schema.Array(Schema.String)),
    campaign_brand_label: Schema.optional(Schema.String),
    campaign_custom_label: Schema.optional(Schema.String),
    campaign_ids: Schema.optional(Schema.Array(Schema.Unknown)),
    campaign_objective_types: Schema.optional(Schema.Array(Schema.Unknown)),
    campaign_statuses: Schema.optional(Schema.Array(Schema.String)),
    click_window_days: Schema.optional(Models.Inline9022),
    columns: Schema.optional(Schema.Array(Schema.String)),
    combine_targeting_types: Schema.optional(Schema.Boolean),
    conversion_report_time: Schema.optional(Models.Inline9023),
    custom_conversion_event_metrics: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline9024))),
    end_date: Schema.String,
    end_hour: Schema.optional(Schema.Number),
    engagement_window_days: Schema.optional(Models.Inline9025),
    granularity: Models.Inline9026,
    level: Schema.optional(Models.Inline9027),
    metrics_filters: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline9028))),
    primary_sort: Schema.optional(Models.Inline9029),
    product_group_ids: Schema.optional(Schema.Array(Schema.Unknown)),
    product_group_statuses: Schema.optional(Schema.Array(Schema.String)),
    product_item_ids: Schema.optional(Schema.Array(Schema.Unknown)),
    report_format: Schema.optional(Models.Inline9030),
    reporting_timezone: Schema.optional(Models.Inline9031),
    start_date: Schema.String,
    start_hour: Schema.optional(Schema.Number),
    targeting_types: Schema.optional(Schema.Array(Schema.String)),
    view_window_days: Schema.optional(Models.Inline9032),
  }),
  outputSchema: Models.AnalyticsCreateReportResponse,
});

export const pinterest_adAccounts_analyticsCreateTemplateReport = defineEndpointDescriptor({
  id: "pinterest.adAccounts.analyticsCreateTemplateReport",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/templates/{template_id}/reports",
  summary: "Create async request for an analytics report using a template",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adAccounts.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"templateId","wireName":"templateId","location":"path","required":true,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":false,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    templateId: Schema.String,
    startDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    granularity: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AnalyticsCreateTemplateReportResponse,
});

export const pinterest_adAccounts_analyticsGetConversionProductReport = defineEndpointDescriptor({
  id: "pinterest.adAccounts.analyticsGetConversionProductReport",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/reports/brand_category_sku",
  summary: "Get advertiser brand, category, SKU report",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adAccounts.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"token","wireName":"token","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    token: Schema.String,
  }),
  outputSchema: Models.AnalyticsGetConversionProductReportResponse,
});

export const pinterest_adAccounts_analyticsGetMmmReport = defineEndpointDescriptor({
  id: "pinterest.adAccounts.analyticsGetMmmReport",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/mmm_reports",
  summary: "Get advertiser Marketing Mix Modeling (MMM) report.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adAccounts.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"token","wireName":"token","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    token: Schema.String,
  }),
  outputSchema: Models.AnalyticsGetMmmReportResponse,
});

export const pinterest_adAccounts_analyticsGetReport = defineEndpointDescriptor({
  id: "pinterest.adAccounts.analyticsGetReport",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/reports",
  summary: "Get the account analytics report created by the async call",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adAccounts.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"token","wireName":"token","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    token: Schema.String,
  }),
  outputSchema: Models.AnalyticsGetReportResponse,
});

export const pinterest_businessAccessInvite_assetAccessRequestsCreate = defineEndpointDescriptor({
  id: "pinterest.businessAccessInvite.assetAccessRequestsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/businesses/{business_id}/requests/assets/access",
  summary: "Create a request to access an existing partner's assets.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:read","biz_access:write"],
  capabilities: ["pinterest.businessAccessInvite.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"asset_requests","wireName":"asset_requests","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    asset_requests: Schema.Array(Schema.suspend(() => Models.Inline9399)),
  }),
  outputSchema: Models.AssetAccessRequestsCreateResponse,
});

export const pinterest_businessAccessAssets_assetGroupCreate = defineEndpointDescriptor({
  id: "pinterest.businessAccessAssets.assetGroupCreate",
  platform: "pinterest",
  method: "POST",
  path: "/businesses/{business_id}/asset_groups",
  summary: "Create a new asset group.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:read","biz_access:write"],
  capabilities: ["pinterest.businessAccessAssets.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"asset_group","wireName":"asset_group","location":"body","required":false,"nullable":false},
    {"name":"asset_group_description","wireName":"asset_group_description","location":"body","required":true,"nullable":false},
    {"name":"asset_group_name","wireName":"asset_group_name","location":"body","required":true,"nullable":false},
    {"name":"asset_group_types","wireName":"asset_group_types","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    asset_group: Schema.optional(Models.Inline9266),
    asset_group_description: Schema.String,
    asset_group_name: Schema.String,
    asset_group_types: Schema.Array(Schema.String),
  }),
  outputSchema: Models.AssetGroupCreateResponse,
});

export const pinterest_businessAccessAssets_assetGroupDelete = defineEndpointDescriptor({
  id: "pinterest.businessAccessAssets.assetGroupDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/businesses/{business_id}/asset_groups",
  summary: "Delete asset groups.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:read","biz_access:write"],
  capabilities: ["pinterest.businessAccessAssets.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"asset_groups_to_delete","wireName":"asset_groups_to_delete","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    asset_groups_to_delete: Schema.Array(Schema.Unknown),
  }),
  outputSchema: Models.AssetGroupDeleteResponse,
});

export const pinterest_businessAccessAssets_assetGroupUpdate = defineEndpointDescriptor({
  id: "pinterest.businessAccessAssets.assetGroupUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/businesses/{business_id}/asset_groups",
  summary: "Update asset groups.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:read","biz_access:write"],
  capabilities: ["pinterest.businessAccessAssets.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"asset_groups_to_update","wireName":"asset_groups_to_update","location":"body","required":false,"nullable":false},
    {"name":"exceptions","wireName":"exceptions","location":"body","required":false,"nullable":false},
    {"name":"updated_asset_groups","wireName":"updated_asset_groups","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    asset_groups_to_update: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline9277))),
    exceptions: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline9278))),
    updated_asset_groups: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline9279))),
  }),
  outputSchema: Models.AssetGroupUpdateResponse,
});

export const pinterest_audienceInsights_audienceInsightsGet = defineEndpointDescriptor({
  id: "pinterest.audienceInsights.audienceInsightsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/audience_insights",
  summary: "Get audience insights",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.audienceInsights.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"audienceInsightType","wireName":"audienceInsightType","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    audienceInsightType: Schema.String,
  }),
  outputSchema: Models.AudienceInsightsGetResponse,
});

export const pinterest_audienceInsights_audienceInsightsScopeAndTypeGet = defineEndpointDescriptor({
  id: "pinterest.audienceInsights.audienceInsightsScopeAndTypeGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/insights/audiences",
  summary: "Get audience insights scope and type",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.audienceInsights.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.AudienceInsightsScopeAndTypeGetResponse,
});

export const pinterest_audiences_audiencesCreate = defineEndpointDescriptor({
  id: "pinterest.audiences.audiencesCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/audiences",
  summary: "Create audience",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.audiences.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ad_account_id","wireName":"ad_account_id","location":"body","required":false,"nullable":false},
    {"name":"audience_type","wireName":"audience_type","location":"body","required":false,"nullable":false},
    {"name":"description","wireName":"description","location":"body","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":false,"nullable":false},
    {"name":"rule","wireName":"rule","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ad_account_id: Schema.optional(Schema.String),
    audience_type: Schema.optional(Models.Inline7573),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    rule: Schema.optional(Models.Inline7574),
  }),
  outputSchema: Models.AudiencesCreateResponse,
});

export const pinterest_audiences_audiencesGet = defineEndpointDescriptor({
  id: "pinterest.audiences.audiencesGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/audiences/{audience_id}",
  summary: "Get audience",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.audiences.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"audienceId","wireName":"audienceId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    audienceId: Schema.String,
    adAccountId: Schema.String,
  }),
  outputSchema: Models.AudiencesGetResponse,
});

export const pinterest_audiences_audiencesList = defineEndpointDescriptor({
  id: "pinterest.audiences.audiencesList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/audiences",
  summary: "List audiences",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.audiences.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"ownershipType","wireName":"ownershipType","location":"query","required":false,"nullable":false},
    {"name":"excludeNca","wireName":"excludeNca","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
    ownershipType: Schema.optional(Schema.String),
    excludeNca: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.AudiencesListResponse,
});

export const pinterest_audiences_audiencesUpdate = defineEndpointDescriptor({
  id: "pinterest.audiences.audiencesUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/audiences/{audience_id}",
  summary: "Update audience",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.audiences.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"audienceId","wireName":"audienceId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ad_account_id","wireName":"ad_account_id","location":"body","required":false,"nullable":false},
    {"name":"audience_type","wireName":"audience_type","location":"body","required":false,"nullable":false},
    {"name":"description","wireName":"description","location":"body","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":false,"nullable":false},
    {"name":"operation_type","wireName":"operation_type","location":"body","required":false,"nullable":false},
    {"name":"rule","wireName":"rule","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    audienceId: Schema.String,
    adAccountId: Schema.String,
    ad_account_id: Schema.optional(Schema.String),
    audience_type: Schema.optional(Models.Inline7600),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    operation_type: Schema.optional(Models.Inline7601),
    rule: Schema.optional(Models.Inline7602),
  }),
  outputSchema: Models.AudiencesUpdateResponse,
});

export const pinterest_billing_billingInvoiceDownloadGet = defineEndpointDescriptor({
  id: "pinterest.billing.billingInvoiceDownloadGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/billing_invoice/{billing_invoice_id}/download",
  summary: "Get download url for a billing invoice",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read","billing:read"],
  capabilities: ["pinterest.billing.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"billingInvoiceId","wireName":"billingInvoiceId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    billingInvoiceId: Schema.String,
  }),
  outputSchema: Models.BillingInvoiceDownloadGetResponse,
});

export const pinterest_billing_billingInvoicesGet = defineEndpointDescriptor({
  id: "pinterest.billing.billingInvoicesGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/billing_invoices",
  summary: "Get billing invoices",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read","billing:read"],
  capabilities: ["pinterest.billing.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false},
    {"name":"status","wireName":"status","location":"query","required":false,"nullable":false},
    {"name":"documentType","wireName":"documentType","location":"query","required":false,"nullable":false},
    {"name":"startDueDate","wireName":"startDueDate","location":"query","required":false,"nullable":false},
    {"name":"endDueDate","wireName":"endDueDate","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
    sort: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    documentType: Schema.optional(Schema.String),
    startDueDate: Schema.optional(Schema.String),
    endDueDate: Schema.optional(Schema.String),
  }),
  outputSchema: Models.BillingInvoicesGetResponse,
});

export const pinterest_billing_billingProfilesGet = defineEndpointDescriptor({
  id: "pinterest.billing.billingProfilesGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/billing_profiles",
  summary: "Get billing profiles",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read","billing:read"],
  capabilities: ["pinterest.billing.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"isActive","wireName":"isActive","location":"query","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    isActive: Schema.Boolean,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.BillingProfilesGetResponse,
});

export const pinterest_boards_boardsCreate = defineEndpointDescriptor({
  id: "pinterest.boards.boardsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/boards",
  summary: "Create board",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["boards:read","boards:write"],
  capabilities: ["pinterest.boards.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"description","wireName":"description","location":"body","required":false,"nullable":false},
    {"name":"is_ads_only","wireName":"is_ads_only","location":"body","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false},
    {"name":"privacy","wireName":"privacy","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    is_ads_only: Schema.optional(Schema.Boolean),
    name: Schema.String,
    privacy: Schema.optional(Models.Inline9204),
  }),
  outputSchema: Models.BoardsCreateResponse,
});

export const pinterest_boards_boardsDelete = defineEndpointDescriptor({
  id: "pinterest.boards.boardsDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/boards/{board_id}",
  summary: "Delete board",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["boards:read","boards:write"],
  capabilities: ["pinterest.boards.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"boardId","wireName":"boardId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    boardId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.BoardsDeleteResponse,
});

export const pinterest_boards_boardSectionsCreate = defineEndpointDescriptor({
  id: "pinterest.boards.boardSectionsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/boards/{board_id}/sections",
  summary: "Create board section",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["boards:read","boards:write"],
  capabilities: ["pinterest.boards.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"boardId","wireName":"boardId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"body","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    boardId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.String,
  }),
  outputSchema: Models.BoardSectionsCreateResponse,
});

export const pinterest_boards_boardSectionsDelete = defineEndpointDescriptor({
  id: "pinterest.boards.boardSectionsDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/boards/{board_id}/sections/{section_id}",
  summary: "Delete board section",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["boards:read","boards:write"],
  capabilities: ["pinterest.boards.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"boardId","wireName":"boardId","location":"path","required":true,"nullable":false},
    {"name":"sectionId","wireName":"sectionId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    boardId: Schema.String,
    sectionId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.BoardSectionsDeleteResponse,
});

export const pinterest_boards_boardSectionsList = defineEndpointDescriptor({
  id: "pinterest.boards.boardSectionsList",
  platform: "pinterest",
  method: "GET",
  path: "/boards/{board_id}/sections",
  summary: "List board sections",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read"],
  capabilities: ["pinterest.boards.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"boardId","wireName":"boardId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    boardId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.BoardSectionsListResponse,
});

export const pinterest_boards_boardSectionsListPins = defineEndpointDescriptor({
  id: "pinterest.boards.boardSectionsListPins",
  platform: "pinterest",
  method: "GET",
  path: "/boards/{board_id}/sections/{section_id}/pins",
  summary: "List Pins on board section",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read","pins:read"],
  capabilities: ["pinterest.boards.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"boardId","wireName":"boardId","location":"path","required":true,"nullable":false},
    {"name":"sectionId","wireName":"sectionId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    boardId: Schema.String,
    sectionId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.BoardSectionsListPinsResponse,
});

export const pinterest_boards_boardSectionsUpdate = defineEndpointDescriptor({
  id: "pinterest.boards.boardSectionsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/boards/{board_id}/sections/{section_id}",
  summary: "Update board section",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["boards:read","boards:write"],
  capabilities: ["pinterest.boards.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"boardId","wireName":"boardId","location":"path","required":true,"nullable":false},
    {"name":"sectionId","wireName":"sectionId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"body","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    boardId: Schema.String,
    sectionId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    name: Schema.String,
  }),
  outputSchema: Models.BoardSectionsUpdateResponse,
});

export const pinterest_boards_boardsGet = defineEndpointDescriptor({
  id: "pinterest.boards.boardsGet",
  platform: "pinterest",
  method: "GET",
  path: "/boards/{board_id}",
  summary: "Get board",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read"],
  capabilities: ["pinterest.boards.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"boardId","wireName":"boardId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    boardId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.BoardsGetResponse,
});

export const pinterest_boards_boardsList = defineEndpointDescriptor({
  id: "pinterest.boards.boardsList",
  platform: "pinterest",
  method: "GET",
  path: "/boards",
  summary: "List boards",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read"],
  capabilities: ["pinterest.boards.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"privacy","wireName":"privacy","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    privacy: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.BoardsListResponse,
});

export const pinterest_boards_boardsListPins = defineEndpointDescriptor({
  id: "pinterest.boards.boardsListPins",
  platform: "pinterest",
  method: "GET",
  path: "/boards/{board_id}/pins",
  summary: "List Pins on board",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read","pins:read"],
  capabilities: ["pinterest.boards.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"boardId","wireName":"boardId","location":"path","required":true,"nullable":false},
    {"name":"creativeTypes","wireName":"creativeTypes","location":"query","required":false,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"pinMetrics","wireName":"pinMetrics","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    boardId: Schema.String,
    creativeTypes: Schema.optional(Schema.Array(Schema.String)),
    adAccountId: Schema.optional(Schema.String),
    pinMetrics: Schema.optional(Schema.Boolean),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.BoardsListPinsResponse,
});

export const pinterest_boards_boardsUpdate = defineEndpointDescriptor({
  id: "pinterest.boards.boardsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/boards/{board_id}",
  summary: "Update board",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["boards:read","boards:write"],
  capabilities: ["pinterest.boards.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"boardId","wireName":"boardId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"description","wireName":"description","location":"body","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":false,"nullable":false},
    {"name":"privacy","wireName":"privacy","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    boardId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    privacy: Schema.optional(Schema.String),
  }),
  outputSchema: Models.BoardsUpdateResponse,
});

export const pinterest_userAccount_boardsUserFollowsList = defineEndpointDescriptor({
  id: "pinterest.userAccount.boardsUserFollowsList",
  platform: "pinterest",
  method: "GET",
  path: "/user_account/following/boards",
  summary: "List following boards",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.userAccount.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"explicitFollowing","wireName":"explicitFollowing","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    explicitFollowing: Schema.optional(Schema.Boolean),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.BoardsUserFollowsListResponse,
});

export const pinterest_businessAccessRelationships_brandAccountsCreate = defineEndpointDescriptor({
  id: "pinterest.businessAccessRelationships.brandAccountsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/business_access/business_hierarchy/{business_hierarchy_id}/brand_accounts",
  summary: "Create a Brand Account",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:read","biz_access:write"],
  capabilities: ["pinterest.businessAccessRelationships.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessHierarchyId","wireName":"businessHierarchyId","location":"path","required":true,"nullable":false},
    {"name":"about","wireName":"about","location":"body","required":false,"nullable":false},
    {"name":"country","wireName":"country","location":"body","required":true,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false},
    {"name":"profile_image","wireName":"profile_image","location":"body","required":false,"nullable":false},
    {"name":"username","wireName":"username","location":"body","required":true,"nullable":false},
    {"name":"website","wireName":"website","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessHierarchyId: Schema.String,
    about: Schema.optional(Schema.String),
    country: Schema.String,
    name: Schema.String,
    profile_image: Schema.optional(Models.Inline9254),
    username: Schema.String,
    website: Schema.optional(Schema.String),
  }),
  outputSchema: Models.BrandAccountsCreateResponse,
});

export const pinterest_businessAccessRelationships_brandAccountsUpdate = defineEndpointDescriptor({
  id: "pinterest.businessAccessRelationships.brandAccountsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/business_access/business_hierarchy/{business_hierarchy_id}/brand_accounts/{brand_account_id}",
  summary: "Update a Brand Account",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:read","biz_access:write"],
  capabilities: ["pinterest.businessAccessRelationships.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"brandAccountId","wireName":"brandAccountId","location":"path","required":true,"nullable":false},
    {"name":"businessHierarchyId","wireName":"businessHierarchyId","location":"path","required":true,"nullable":false},
    {"name":"about","wireName":"about","location":"body","required":false,"nullable":false},
    {"name":"country","wireName":"country","location":"body","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":false,"nullable":false},
    {"name":"profile_image","wireName":"profile_image","location":"body","required":false,"nullable":false},
    {"name":"username","wireName":"username","location":"body","required":false,"nullable":false},
    {"name":"website","wireName":"website","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    brandAccountId: Schema.String,
    businessHierarchyId: Schema.String,
    about: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    profile_image: Schema.optional(Models.Inline9259),
    username: Schema.optional(Schema.String),
    website: Schema.optional(Schema.String),
  }),
  outputSchema: Models.BrandAccountsUpdateResponse,
});

export const pinterest_bulk_bulkDownloadCreate = defineEndpointDescriptor({
  id: "pinterest.bulk.bulkDownloadCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/bulk/download",
  summary: "Get advertiser entities in bulk",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.bulk.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"campaign_filter","wireName":"campaign_filter","location":"body","required":false,"nullable":false},
    {"name":"entity_ids","wireName":"entity_ids","location":"body","required":false,"nullable":false},
    {"name":"entity_types","wireName":"entity_types","location":"body","required":false,"nullable":false},
    {"name":"output_format","wireName":"output_format","location":"body","required":false,"nullable":false},
    {"name":"updated_since","wireName":"updated_since","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    campaign_filter: Schema.optional(Models.Inline7667),
    entity_ids: Schema.optional(Schema.Array(Schema.String)),
    entity_types: Schema.optional(Schema.Array(Schema.String)),
    output_format: Schema.optional(Models.Inline7668),
    updated_since: Schema.optional(Schema.String),
  }),
  outputSchema: Models.BulkDownloadCreateResponse,
});

export const pinterest_bulk_bulkRequestGet = defineEndpointDescriptor({
  id: "pinterest.bulk.bulkRequestGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/bulk/{bulk_request_id}",
  summary: "Download advertiser entities in bulk",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.bulk.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bulkRequestId","wireName":"bulkRequestId","location":"path","required":true,"nullable":false},
    {"name":"includeDetails","wireName":"includeDetails","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bulkRequestId: Schema.String,
    includeDetails: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.BulkRequestGetResponse,
});

export const pinterest_bulk_bulkUpsertCreate = defineEndpointDescriptor({
  id: "pinterest.bulk.bulkUpsertCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/bulk/upsert",
  summary: "Create/update ad entities in bulk",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.bulk.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"create","wireName":"create","location":"body","required":false,"nullable":false},
    {"name":"update","wireName":"update","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    create: Schema.optional(Models.Inline8134),
    update: Schema.optional(Models.Inline8362),
  }),
  outputSchema: Models.BulkUpsertCreateResponse,
});

export const pinterest_audienceSharing_businessAccountAudiencesSharedAccountsList = defineEndpointDescriptor({
  id: "pinterest.audienceSharing.businessAccountAudiencesSharedAccountsList",
  platform: "pinterest",
  method: "GET",
  path: "/businesses/{business_id}/audiences/shared/accounts",
  summary: "List accounts with access to an audience owned by a business",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["biz_access:read"],
  capabilities: ["pinterest.audienceSharing.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"audienceId","wireName":"audienceId","location":"query","required":true,"nullable":false},
    {"name":"accountType","wireName":"accountType","location":"query","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    audienceId: Schema.String,
    accountType: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.BusinessAccountAudiencesSharedAccountsListResponse,
});

export const pinterest_businessAccessAssets_businessAssetMembersGet = defineEndpointDescriptor({
  id: "pinterest.businessAccessAssets.businessAssetMembersGet",
  platform: "pinterest",
  method: "GET",
  path: "/businesses/{business_id}/assets/{asset_id}/members",
  summary: "Get members with access to asset",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["biz_access:read"],
  capabilities: ["pinterest.businessAccessAssets.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"assetId","wireName":"assetId","location":"path","required":true,"nullable":false},
    {"name":"startIndex","wireName":"startIndex","location":"query","required":false,"nullable":false},
    {"name":"fetchSystemUsers","wireName":"fetchSystemUsers","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    assetId: Schema.String,
    startIndex: Schema.optional(Schema.Number),
    fetchSystemUsers: Schema.optional(Schema.Boolean),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.BusinessAssetMembersGetResponse,
});

export const pinterest_businessAccessAssets_businessAssetPartnersGet = defineEndpointDescriptor({
  id: "pinterest.businessAccessAssets.businessAssetPartnersGet",
  platform: "pinterest",
  method: "GET",
  path: "/businesses/{business_id}/assets/{asset_id}/partners",
  summary: "Get partners with access to asset",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["biz_access:read"],
  capabilities: ["pinterest.businessAccessAssets.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"assetId","wireName":"assetId","location":"path","required":true,"nullable":false},
    {"name":"startIndex","wireName":"startIndex","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    assetId: Schema.String,
    startIndex: Schema.optional(Schema.Number),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.BusinessAssetPartnersGetResponse,
});

export const pinterest_businessAccessAssets_businessAssetsGet = defineEndpointDescriptor({
  id: "pinterest.businessAccessAssets.businessAssetsGet",
  platform: "pinterest",
  method: "GET",
  path: "/businesses/{business_id}/assets",
  summary: "List business assets",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["biz_access:read"],
  capabilities: ["pinterest.businessAccessAssets.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"permissions","wireName":"permissions","location":"query","required":false,"nullable":false},
    {"name":"childAssetId","wireName":"childAssetId","location":"query","required":false,"nullable":false},
    {"name":"assetGroupId","wireName":"assetGroupId","location":"query","required":false,"nullable":false},
    {"name":"assetType","wireName":"assetType","location":"query","required":false,"nullable":false},
    {"name":"startIndex","wireName":"startIndex","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    permissions: Schema.optional(Schema.Array(Schema.String)),
    childAssetId: Schema.optional(Schema.String),
    assetGroupId: Schema.optional(Schema.String),
    assetType: Schema.optional(Schema.String),
    startIndex: Schema.optional(Schema.Number),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.BusinessAssetsGetResponse,
});

export const pinterest_businessAccessAssets_businessMemberAssetsGet = defineEndpointDescriptor({
  id: "pinterest.businessAccessAssets.businessMemberAssetsGet",
  platform: "pinterest",
  method: "GET",
  path: "/businesses/{business_id}/members/{member_id}/assets",
  summary: "Get assets assigned to a member",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["biz_access:read"],
  capabilities: ["pinterest.businessAccessAssets.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"memberId","wireName":"memberId","location":"path","required":true,"nullable":false},
    {"name":"assetType","wireName":"assetType","location":"query","required":false,"nullable":false},
    {"name":"startIndex","wireName":"startIndex","location":"query","required":false,"nullable":false},
    {"name":"sortBy","wireName":"sortBy","location":"query","required":false,"nullable":false},
    {"name":"sortAscending","wireName":"sortAscending","location":"query","required":false,"nullable":false},
    {"name":"searchBy","wireName":"searchBy","location":"query","required":false,"nullable":false},
    {"name":"searchValue","wireName":"searchValue","location":"query","required":false,"nullable":false},
    {"name":"assetPermissionType","wireName":"assetPermissionType","location":"query","required":false,"nullable":false},
    {"name":"adAccountStatuses","wireName":"adAccountStatuses","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    memberId: Schema.String,
    assetType: Schema.optional(Schema.String),
    startIndex: Schema.optional(Schema.Number),
    sortBy: Schema.optional(Schema.String),
    sortAscending: Schema.optional(Schema.Boolean),
    searchBy: Schema.optional(Schema.String),
    searchValue: Schema.optional(Schema.String),
    assetPermissionType: Schema.optional(Schema.String),
    adAccountStatuses: Schema.optional(Schema.Array(Schema.String)),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.BusinessMemberAssetsGetResponse,
});

export const pinterest_businessAccessAssets_businessMembersAssetAccessDelete = defineEndpointDescriptor({
  id: "pinterest.businessAccessAssets.businessMembersAssetAccessDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/businesses/{business_id}/members/assets/access",
  summary: "Delete member access to asset",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:write"],
  capabilities: ["pinterest.businessAccessAssets.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"accesses","wireName":"accesses","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    accesses: Schema.Array(Schema.suspend(() => Models.Inline9367)),
  }),
  outputSchema: Models.BusinessMembersAssetAccessDeleteResponse,
});

export const pinterest_businessAccessAssets_businessMembersAssetAccessUpdate = defineEndpointDescriptor({
  id: "pinterest.businessAccessAssets.businessMembersAssetAccessUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/businesses/{business_id}/members/assets/access",
  summary: "Assign/Update member asset permissions",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:write"],
  capabilities: ["pinterest.businessAccessAssets.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"accesses","wireName":"accesses","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    accesses: Schema.Array(Schema.suspend(() => Models.Inline9362)),
  }),
  outputSchema: Models.BusinessMembersAssetAccessUpdateResponse,
});

export const pinterest_businessAccessAssets_businessPartnerAssetAccessGet = defineEndpointDescriptor({
  id: "pinterest.businessAccessAssets.businessPartnerAssetAccessGet",
  platform: "pinterest",
  method: "GET",
  path: "/businesses/{business_id}/partners/{partner_id}/assets",
  summary: "Get assets assigned to a partner or assets assigned by a partner",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["biz_access:read"],
  capabilities: ["pinterest.businessAccessAssets.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"partnerId","wireName":"partnerId","location":"path","required":true,"nullable":false},
    {"name":"partnerType","wireName":"partnerType","location":"query","required":false,"nullable":false},
    {"name":"assetType","wireName":"assetType","location":"query","required":false,"nullable":false},
    {"name":"startIndex","wireName":"startIndex","location":"query","required":false,"nullable":false},
    {"name":"sortBy","wireName":"sortBy","location":"query","required":false,"nullable":false},
    {"name":"sortAscending","wireName":"sortAscending","location":"query","required":false,"nullable":false},
    {"name":"searchBy","wireName":"searchBy","location":"query","required":false,"nullable":false},
    {"name":"searchValue","wireName":"searchValue","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    partnerId: Schema.String,
    partnerType: Schema.optional(Schema.String),
    assetType: Schema.optional(Schema.String),
    startIndex: Schema.optional(Schema.Number),
    sortBy: Schema.optional(Schema.String),
    sortAscending: Schema.optional(Schema.Boolean),
    searchBy: Schema.optional(Schema.String),
    searchValue: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.BusinessPartnerAssetAccessGetResponse,
});

export const pinterest_ads_campaignAdPreviewCreate = defineEndpointDescriptor({
  id: "pinterest.ads.campaignAdPreviewCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/campaign_ad_preview",
  summary: "Create ad preview records for one or more ad groups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.ads.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.CampaignAdPreviewCreateResponse,
});

export const pinterest_ads_campaignAdPreviewDelete = defineEndpointDescriptor({
  id: "pinterest.ads.campaignAdPreviewDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/ad_accounts/{ad_account_id}/campaign_ad_preview",
  summary: "Delete ad preview records for one or more ad groups",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.ads.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"adGroupIds","wireName":"adGroupIds","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    adGroupIds: Schema.Array(Schema.String),
  }),
  outputSchema: Models.CampaignAdPreviewDeleteResponse,
});

export const pinterest_ads_campaignAdPreviewRead = defineEndpointDescriptor({
  id: "pinterest.ads.campaignAdPreviewRead",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/campaign_ad_preview",
  summary: "Fetch ad preview records for one or more ad groups",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.ads.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"adGroupIds","wireName":"adGroupIds","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    adGroupIds: Schema.Array(Schema.String),
  }),
  outputSchema: Models.CampaignAdPreviewReadResponse,
});

export const pinterest_campaigns_campaignsAnalytics = defineEndpointDescriptor({
  id: "pinterest.campaigns.campaignsAnalytics",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/campaigns/analytics",
  summary: "Get campaign analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.campaigns.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"campaignIds","wireName":"campaignIds","location":"query","required":true,"nullable":false},
    {"name":"columns","wireName":"columns","location":"query","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"clickWindowDays","wireName":"clickWindowDays","location":"query","required":false,"nullable":false},
    {"name":"engagementWindowDays","wireName":"engagementWindowDays","location":"query","required":false,"nullable":false},
    {"name":"viewWindowDays","wireName":"viewWindowDays","location":"query","required":false,"nullable":false},
    {"name":"conversionReportTime","wireName":"conversionReportTime","location":"query","required":false,"nullable":false},
    {"name":"aggregateReportRows","wireName":"aggregateReportRows","location":"query","required":false,"nullable":false},
    {"name":"reportingTimezone","wireName":"reportingTimezone","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    startDate: Schema.String,
    endDate: Schema.String,
    campaignIds: Schema.Array(Schema.String),
    columns: Schema.Array(Schema.String),
    granularity: Schema.String,
    clickWindowDays: Schema.optional(Schema.Number),
    engagementWindowDays: Schema.optional(Schema.Number),
    viewWindowDays: Schema.optional(Schema.Number),
    conversionReportTime: Schema.optional(Schema.String),
    aggregateReportRows: Schema.optional(Schema.Boolean),
    reportingTimezone: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CampaignsAnalyticsResponse,
});

export const pinterest_campaigns_campaignsCreate = defineEndpointDescriptor({
  id: "pinterest.campaigns.campaignsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/campaigns",
  summary: "Create campaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.campaigns.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.CampaignsCreateResponse,
});

export const pinterest_campaigns_campaignsGet = defineEndpointDescriptor({
  id: "pinterest.campaigns.campaignsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/campaigns/{campaign_id}",
  summary: "Get campaign",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.campaigns.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.String,
    adAccountId: Schema.String,
  }),
  outputSchema: Models.CampaignsGetResponse,
});

export const pinterest_campaigns_campaignsList = defineEndpointDescriptor({
  id: "pinterest.campaigns.campaignsList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/campaigns",
  summary: "List campaigns",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.campaigns.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"campaignIds","wireName":"campaignIds","location":"query","required":false,"nullable":false},
    {"name":"entityStatuses","wireName":"entityStatuses","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
    campaignIds: Schema.optional(Schema.Array(Schema.String)),
    entityStatuses: Schema.optional(Schema.Array(Schema.String)),
  }),
  outputSchema: Models.CampaignsListResponse,
});

export const pinterest_campaigns_campaignsUpdate = defineEndpointDescriptor({
  id: "pinterest.campaigns.campaignsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/campaigns",
  summary: "Update campaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.campaigns.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.CampaignsUpdateResponse,
});

export const pinterest_campaigns_campaignTargetingAnalyticsGet = defineEndpointDescriptor({
  id: "pinterest.campaigns.campaignTargetingAnalyticsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/campaigns/targeting_analytics",
  summary: "Get targeting analytics for campaigns",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.campaigns.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"campaignIds","wireName":"campaignIds","location":"query","required":true,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"targetingTypes","wireName":"targetingTypes","location":"query","required":true,"nullable":false},
    {"name":"columns","wireName":"columns","location":"query","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"clickWindowDays","wireName":"clickWindowDays","location":"query","required":false,"nullable":false},
    {"name":"engagementWindowDays","wireName":"engagementWindowDays","location":"query","required":false,"nullable":false},
    {"name":"viewWindowDays","wireName":"viewWindowDays","location":"query","required":false,"nullable":false},
    {"name":"conversionReportTime","wireName":"conversionReportTime","location":"query","required":false,"nullable":false},
    {"name":"attributionTypes","wireName":"attributionTypes","location":"query","required":false,"nullable":false},
    {"name":"reportingTimezone","wireName":"reportingTimezone","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    campaignIds: Schema.Array(Schema.String),
    startDate: Schema.String,
    endDate: Schema.String,
    targetingTypes: Schema.Array(Schema.String),
    columns: Schema.Array(Schema.String),
    granularity: Schema.String,
    clickWindowDays: Schema.optional(Schema.Number),
    engagementWindowDays: Schema.optional(Schema.Number),
    viewWindowDays: Schema.optional(Schema.Number),
    conversionReportTime: Schema.optional(Schema.String),
    attributionTypes: Schema.optional(Schema.Array(Schema.String)),
    reportingTimezone: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CampaignTargetingAnalyticsGetResponse,
});

export const pinterest_businessAccessInvite_cancelInvitesOrRequests = defineEndpointDescriptor({
  id: "pinterest.businessAccessInvite.cancelInvitesOrRequests",
  platform: "pinterest",
  method: "DELETE",
  path: "/businesses/{business_id}/invites",
  summary: "Cancel invites/requests",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:write"],
  capabilities: ["pinterest.businessAccessInvite.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"invite_ids","wireName":"invite_ids","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    invite_ids: Schema.Array(Schema.String),
  }),
  outputSchema: Models.CancelInvitesOrRequestsResponse,
});

export const pinterest_catalogs_catalogsAvailableFilterValues = defineEndpointDescriptor({
  id: "pinterest.catalogs.catalogsAvailableFilterValues",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/available_filter_values",
  summary: "List available filter values",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogs.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"query","required":true,"nullable":false},
    {"name":"feedId","wireName":"feedId","location":"query","required":false,"nullable":false},
    {"name":"country","wireName":"country","location":"query","required":false,"nullable":false},
    {"name":"language","wireName":"language","location":"query","required":false,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    feedId: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
    language: Schema.optional(Schema.String),
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogsAvailableFilterValuesResponse,
});

export const pinterest_catalogs_catalogsCreate = defineEndpointDescriptor({
  id: "pinterest.catalogs.catalogsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/catalogs",
  summary: "Create catalog",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:write"],
  capabilities: ["pinterest.catalogs.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"catalog_type","wireName":"catalog_type","location":"body","required":true,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    catalog_type: Schema.String,
    name: Schema.String,
  }),
  outputSchema: Models.CatalogsCreateResponse,
});

export const pinterest_catalogs_catalogsList = defineEndpointDescriptor({
  id: "pinterest.catalogs.catalogsList",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs",
  summary: "List catalogs",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogs.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.CatalogsListResponse,
});

export const pinterest_catalogSupplemental_catalogsLocalInventoryItemsBatchOperate = defineEndpointDescriptor({
  id: "pinterest.catalogSupplemental.catalogsLocalInventoryItemsBatchOperate",
  platform: "pinterest",
  method: "POST",
  path: "/catalogs/{catalog_id}/local_inventory_items/batch",
  summary: "Operate on local inventory item batch",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:write"],
  capabilities: ["pinterest.catalogSupplemental.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"operations","wireName":"operations","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
    operations: Schema.Array(Schema.Union(Schema.suspend(() => Models.Inline9432), Schema.suspend(() => Models.Inline9433), Schema.suspend(() => Models.Inline9434), Schema.suspend(() => Models.Inline9435))),
  }),
  outputSchema: Models.CatalogsLocalInventoryItemsBatchOperateResponse,
});

export const pinterest_catalogSupplemental_catalogsLocalInventoryItemsPost = defineEndpointDescriptor({
  id: "pinterest.catalogSupplemental.catalogsLocalInventoryItemsPost",
  platform: "pinterest",
  method: "POST",
  path: "/catalogs/{catalog_id}/local_inventory_items/query",
  summary: "Get local inventory items (POST)",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogSupplemental.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"item_filters","wireName":"item_filters","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
    item_filters: Schema.Array(Schema.suspend(() => Models.Inline9441)),
  }),
  outputSchema: Models.CatalogsLocalInventoryItemsPostResponse,
});

export const pinterest_catalogSupplemental_catalogsLocalStoresCreate = defineEndpointDescriptor({
  id: "pinterest.catalogSupplemental.catalogsLocalStoresCreate",
  platform: "pinterest",
  method: "POST",
  path: "/catalogs/{catalog_id}/local_stores",
  summary: "Create local stores",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:write"],
  capabilities: ["pinterest.catalogSupplemental.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogsLocalStoresCreateResponse,
});

export const pinterest_catalogSupplemental_catalogsLocalStoresDelete = defineEndpointDescriptor({
  id: "pinterest.catalogSupplemental.catalogsLocalStoresDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/catalogs/{catalog_id}/local_stores",
  summary: "Delete local stores",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:write"],
  capabilities: ["pinterest.catalogSupplemental.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"ids","wireName":"ids","location":"query","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    ids: Schema.Array(Schema.String),
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogsLocalStoresDeleteResponse,
});

export const pinterest_catalogSupplemental_catalogsLocalStoresList = defineEndpointDescriptor({
  id: "pinterest.catalogSupplemental.catalogsLocalStoresList",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/{catalog_id}/local_stores",
  summary: "List local stores",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogSupplemental.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"ids","wireName":"ids","location":"query","required":false,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    ids: Schema.optional(Schema.Array(Schema.String)),
    adAccountId: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.CatalogsLocalStoresListResponse,
});

export const pinterest_catalogSupplemental_catalogsLocalStoresUpdate = defineEndpointDescriptor({
  id: "pinterest.catalogSupplemental.catalogsLocalStoresUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/catalogs/{catalog_id}/local_stores",
  summary: "Update local stores",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:write"],
  capabilities: ["pinterest.catalogSupplemental.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogsLocalStoresUpdateResponse,
});

export const pinterest_catalogProductGroups_catalogsProductGroupPinsList = defineEndpointDescriptor({
  id: "pinterest.catalogProductGroups.catalogsProductGroupPinsList",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/product_groups/{product_group_id}/products",
  summary: "List products by product group",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read","catalogs:read","pins:read"],
  capabilities: ["pinterest.catalogProductGroups.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"productGroupId","wireName":"productGroupId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"pinMetrics","wireName":"pinMetrics","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productGroupId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
    pinMetrics: Schema.optional(Schema.Boolean),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.CatalogsProductGroupPinsListResponse,
});

export const pinterest_catalogProductGroups_catalogsProductGroupsCreate = defineEndpointDescriptor({
  id: "pinterest.catalogProductGroups.catalogsProductGroupsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/catalogs/product_groups",
  summary: "Create product group",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:write"],
  capabilities: ["pinterest.catalogProductGroups.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogsProductGroupsCreateResponse,
});

export const pinterest_catalogProductGroups_catalogsProductGroupsCreateMany = defineEndpointDescriptor({
  id: "pinterest.catalogProductGroups.catalogsProductGroupsCreateMany",
  platform: "pinterest",
  method: "POST",
  path: "/catalogs/product_groups/multiple",
  summary: "Create product groups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:write"],
  capabilities: ["pinterest.catalogProductGroups.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogsProductGroupsCreateManyResponse,
});

export const pinterest_catalogProductGroups_catalogsProductGroupsDelete = defineEndpointDescriptor({
  id: "pinterest.catalogProductGroups.catalogsProductGroupsDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/catalogs/product_groups/{product_group_id}",
  summary: "Delete product group",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:write"],
  capabilities: ["pinterest.catalogProductGroups.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"productGroupId","wireName":"productGroupId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productGroupId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogsProductGroupsDeleteResponse,
});

export const pinterest_catalogProductGroups_catalogsProductGroupsDeleteMany = defineEndpointDescriptor({
  id: "pinterest.catalogProductGroups.catalogsProductGroupsDeleteMany",
  platform: "pinterest",
  method: "DELETE",
  path: "/catalogs/product_groups/multiple",
  summary: "Delete product groups",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:write"],
  capabilities: ["pinterest.catalogProductGroups.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.Array(Schema.Number),
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogsProductGroupsDeleteManyResponse,
});

export const pinterest_catalogProductGroups_catalogsProductGroupsGet = defineEndpointDescriptor({
  id: "pinterest.catalogProductGroups.catalogsProductGroupsGet",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/product_groups/{product_group_id}",
  summary: "Get product group",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogProductGroups.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"productGroupId","wireName":"productGroupId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productGroupId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogsProductGroupsGetResponse,
});

export const pinterest_catalogProductGroups_catalogsProductGroupsList = defineEndpointDescriptor({
  id: "pinterest.catalogProductGroups.catalogsProductGroupsList",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/product_groups",
  summary: "List product groups",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogProductGroups.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"feedId","wireName":"feedId","location":"query","required":false,"nullable":false},
    {"name":"catalogId","wireName":"catalogId","location":"query","required":false,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.optional(Schema.Array(Schema.Number)),
    feedId: Schema.optional(Schema.String),
    catalogId: Schema.optional(Schema.String),
    adAccountId: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.CatalogsProductGroupsListResponse,
});

export const pinterest_catalogProductGroups_catalogsProductGroupsProductCountsGet = defineEndpointDescriptor({
  id: "pinterest.catalogProductGroups.catalogsProductGroupsProductCountsGet",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/product_groups/{product_group_id}/product_counts",
  summary: "Get product counts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogProductGroups.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"productGroupId","wireName":"productGroupId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productGroupId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogsProductGroupsProductCountsGetResponse,
});

export const pinterest_catalogProductGroups_catalogsProductGroupsUpdate = defineEndpointDescriptor({
  id: "pinterest.catalogProductGroups.catalogsProductGroupsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/catalogs/product_groups/{product_group_id}",
  summary: "Update single product group",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:write"],
  capabilities: ["pinterest.catalogProductGroups.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"productGroupId","wireName":"productGroupId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productGroupId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogsProductGroupsUpdateResponse,
});

export const pinterest_catalogSupplemental_catalogsSupplementalItemsBatchGet = defineEndpointDescriptor({
  id: "pinterest.catalogSupplemental.catalogsSupplementalItemsBatchGet",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/{catalog_id}/supplemental_items/batch/{batch_id}",
  summary: "Get supplemental items batch status",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogSupplemental.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"batchId","wireName":"batchId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    batchId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogsSupplementalItemsBatchGetResponse,
});

export const pinterest_conversionDeletionRequests_conversionDeletionRequestCreate = defineEndpointDescriptor({
  id: "pinterest.conversionDeletionRequests.conversionDeletionRequestCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/conversion_deletion_requests",
  summary: "Create a conversion deletion request",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.conversionDeletionRequests.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"deletion_targets","wireName":"deletion_targets","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    deletion_targets: Models.Inline8704,
  }),
  outputSchema: Models.ConversionDeletionRequestCreateResponse,
});

export const pinterest_conversionDeletionRequests_conversionDeletionRequestDelete = defineEndpointDescriptor({
  id: "pinterest.conversionDeletionRequests.conversionDeletionRequestDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/ad_accounts/{ad_account_id}/conversion_deletion_requests/{request_id}",
  summary: "Delete a conversion deletion request",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.conversionDeletionRequests.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"requestId","wireName":"requestId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    requestId: Schema.String,
    adAccountId: Schema.String,
  }),
  outputSchema: Models.ConversionDeletionRequestDeleteResponse,
});

export const pinterest_conversionDeletionRequests_conversionDeletionRequestGet = defineEndpointDescriptor({
  id: "pinterest.conversionDeletionRequests.conversionDeletionRequestGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/conversion_deletion_requests/{request_id}",
  summary: "Get a single conversion deletion request",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.conversionDeletionRequests.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"requestId","wireName":"requestId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    requestId: Schema.String,
    adAccountId: Schema.String,
  }),
  outputSchema: Models.ConversionDeletionRequestGetResponse,
});

export const pinterest_conversionDeletionRequests_conversionDeletionRequestList = defineEndpointDescriptor({
  id: "pinterest.conversionDeletionRequests.conversionDeletionRequestList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/conversion_deletion_requests",
  summary: "List conversion deletion requests",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.conversionDeletionRequests.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
  }),
  outputSchema: Models.ConversionDeletionRequestListResponse,
});

export const pinterest_conversionEqs_conversionEqsList = defineEndpointDescriptor({
  id: "pinterest.conversionEqs.conversionEqsList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/conversion_eqs",
  summary: "Get event quality score (EQS)",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.conversionEqs.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"lookbackPeriod","wireName":"lookbackPeriod","location":"query","required":true,"nullable":false},
    {"name":"sourcePlatform","wireName":"sourcePlatform","location":"query","required":false,"nullable":false},
    {"name":"ingestionSource","wireName":"ingestionSource","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    lookbackPeriod: Schema.String,
    sourcePlatform: Schema.optional(Schema.String),
    ingestionSource: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ConversionEqsListResponse,
});

export const pinterest_conversionTags_conversionTagsCreate = defineEndpointDescriptor({
  id: "pinterest.conversionTags.conversionTagsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/conversion_tags",
  summary: "Create conversion tag",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.conversionTags.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"aem_db_enabled","wireName":"aem_db_enabled","location":"body","required":false,"nullable":false},
    {"name":"aem_enabled","wireName":"aem_enabled","location":"body","required":false,"nullable":false},
    {"name":"aem_external_id_enabled","wireName":"aem_external_id_enabled","location":"body","required":false,"nullable":false},
    {"name":"aem_fnln_enabled","wireName":"aem_fnln_enabled","location":"body","required":false,"nullable":false},
    {"name":"aem_ge_enabled","wireName":"aem_ge_enabled","location":"body","required":false,"nullable":false},
    {"name":"aem_loc_enabled","wireName":"aem_loc_enabled","location":"body","required":false,"nullable":false},
    {"name":"aem_ph_enabled","wireName":"aem_ph_enabled","location":"body","required":false,"nullable":false},
    {"name":"md_frequency","wireName":"md_frequency","location":"body","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    aem_db_enabled: Schema.optional(Schema.Boolean),
    aem_enabled: Schema.optional(Schema.Boolean),
    aem_external_id_enabled: Schema.optional(Schema.Boolean),
    aem_fnln_enabled: Schema.optional(Schema.Boolean),
    aem_ge_enabled: Schema.optional(Schema.Boolean),
    aem_loc_enabled: Schema.optional(Schema.Boolean),
    aem_ph_enabled: Schema.optional(Schema.Boolean),
    md_frequency: Schema.optional(Schema.Number),
    name: Schema.String,
  }),
  outputSchema: Models.ConversionTagsCreateResponse,
});

export const pinterest_conversionTags_conversionTagsGet = defineEndpointDescriptor({
  id: "pinterest.conversionTags.conversionTagsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/conversion_tags/{conversion_tag_id}",
  summary: "Get conversion tag",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.conversionTags.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"conversionTagId","wireName":"conversionTagId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    conversionTagId: Schema.String,
  }),
  outputSchema: Models.ConversionTagsGetResponse,
});

export const pinterest_conversionTags_conversionTagsList = defineEndpointDescriptor({
  id: "pinterest.conversionTags.conversionTagsList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/conversion_tags",
  summary: "List conversion tags",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.conversionTags.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"filterDeleted","wireName":"filterDeleted","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    filterDeleted: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.ConversionTagsListResponse,
});

export const pinterest_keywords_countryKeywordsMetricsGet = defineEndpointDescriptor({
  id: "pinterest.keywords.countryKeywordsMetricsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/keywords/metrics",
  summary: "Get country's keyword metrics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.keywords.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"countryCode","wireName":"countryCode","location":"query","required":true,"nullable":false},
    {"name":"keywords","wireName":"keywords","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    countryCode: Schema.String,
    keywords: Schema.Array(Schema.String),
  }),
  outputSchema: Models.CountryKeywordsMetricsGetResponse,
});

export const pinterest_businessAccessInvite_createAssetInvites = defineEndpointDescriptor({
  id: "pinterest.businessAccessInvite.createAssetInvites",
  platform: "pinterest",
  method: "POST",
  path: "/businesses/{business_id}/invites/assets/access",
  summary: "Update invite/request with an asset permission",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:read","biz_access:write"],
  capabilities: ["pinterest.businessAccessInvite.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"invites","wireName":"invites","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    invites: Schema.Array(Schema.suspend(() => Models.Inline9342)),
  }),
  outputSchema: Models.CreateAssetInvitesResponse,
});

export const pinterest_businessAccessInvite_createMembershipOrPartnershipInvites = defineEndpointDescriptor({
  id: "pinterest.businessAccessInvite.createMembershipOrPartnershipInvites",
  platform: "pinterest",
  method: "POST",
  path: "/businesses/{business_id}/invites",
  summary: "Create invites or requests",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:write"],
  capabilities: ["pinterest.businessAccessInvite.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"business_role","wireName":"business_role","location":"body","required":true,"nullable":false},
    {"name":"invite_type","wireName":"invite_type","location":"body","required":true,"nullable":false},
    {"name":"members","wireName":"members","location":"body","required":false,"nullable":false},
    {"name":"partners","wireName":"partners","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    business_role: Models.Inline9330,
    invite_type: Schema.String,
    members: Schema.optional(Schema.Array(Schema.String)),
    partners: Schema.optional(Schema.Array(Schema.String)),
  }),
  outputSchema: Models.CreateMembershipOrPartnershipInvitesResponse,
});

export const pinterest_customerLists_customerListsCreate = defineEndpointDescriptor({
  id: "pinterest.customerLists.customerListsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/customer_lists",
  summary: "Create customer lists",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.customerLists.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"is_nca","wireName":"is_nca","location":"body","required":false,"nullable":false},
    {"name":"list_type","wireName":"list_type","location":"body","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false},
    {"name":"records","wireName":"records","location":"body","required":false,"nullable":false},
    {"name":"records_v2","wireName":"records_v2","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    is_nca: Schema.optional(Schema.Boolean),
    list_type: Schema.optional(Models.Inline8755),
    name: Schema.String,
    records: Schema.optional(Schema.String),
    records_v2: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline8756))),
  }),
  outputSchema: Models.CustomerListsCreateResponse,
});

export const pinterest_customerLists_customerListsGet = defineEndpointDescriptor({
  id: "pinterest.customerLists.customerListsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/customer_lists/{customer_list_id}",
  summary: "Get customer list",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.customerLists.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"customerListId","wireName":"customerListId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    customerListId: Schema.String,
  }),
  outputSchema: Models.CustomerListsGetResponse,
});

export const pinterest_customerLists_customerListsList = defineEndpointDescriptor({
  id: "pinterest.customerLists.customerListsList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/customer_lists",
  summary: "Get customer lists",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.customerLists.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"excludeNca","wireName":"excludeNca","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
    excludeNca: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.CustomerListsListResponse,
});

export const pinterest_customerLists_customerListsUpdate = defineEndpointDescriptor({
  id: "pinterest.customerLists.customerListsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/customer_lists/{customer_list_id}",
  summary: "Update customer list",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.customerLists.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"customerListId","wireName":"customerListId","location":"path","required":true,"nullable":false},
    {"name":"operation_type","wireName":"operation_type","location":"body","required":true,"nullable":false},
    {"name":"records","wireName":"records","location":"body","required":false,"nullable":false},
    {"name":"records_v2","wireName":"records_v2","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    customerListId: Schema.String,
    operation_type: Models.Inline8767,
    records: Schema.optional(Schema.String),
    records_v2: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline8768))),
  }),
  outputSchema: Models.CustomerListsUpdateResponse,
});

export const pinterest_customerListUploads_customerListUploadsCreate = defineEndpointDescriptor({
  id: "pinterest.customerListUploads.customerListUploadsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/customer_lists/{customer_list_id}/uploads",
  summary: "Create customer list upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.customerListUploads.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"customerListId","wireName":"customerListId","location":"path","required":true,"nullable":false},
    {"name":"operation","wireName":"operation","location":"body","required":true,"nullable":false},
    {"name":"total_parts","wireName":"total_parts","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    customerListId: Schema.String,
    operation: Schema.String,
    total_parts: Schema.Number,
  }),
  outputSchema: Models.CustomerListUploadsCreateResponse,
});

export const pinterest_customerListUploads_customerListUploadsGet = defineEndpointDescriptor({
  id: "pinterest.customerListUploads.customerListUploadsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/customer_lists/{customer_list_id}/uploads/{customer_list_upload_id}",
  summary: "Get customer list upload",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.customerListUploads.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"customerListId","wireName":"customerListId","location":"path","required":true,"nullable":false},
    {"name":"customerListUploadId","wireName":"customerListUploadId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    customerListId: Schema.String,
    customerListUploadId: Schema.Unknown,
  }),
  outputSchema: Models.CustomerListUploadsGetResponse,
});

export const pinterest_customerListUploads_customerListUploadsRun = defineEndpointDescriptor({
  id: "pinterest.customerListUploads.customerListUploadsRun",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/customer_lists/{customer_list_id}/uploads/{customer_list_upload_id}/run",
  summary: "Run customer list upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.customerListUploads.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"customerListId","wireName":"customerListId","location":"path","required":true,"nullable":false},
    {"name":"customerListUploadId","wireName":"customerListUploadId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    customerListId: Schema.String,
    customerListUploadId: Schema.Unknown,
  }),
  outputSchema: Models.CustomerListUploadsRunResponse,
});

export const pinterest_customerSegment_customerSegmentCreate = defineEndpointDescriptor({
  id: "pinterest.customerSegment.customerSegmentCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/customer_segments",
  summary: "Create customer segments",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.customerSegment.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"audience_ids","wireName":"audience_ids","location":"body","required":true,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    audience_ids: Schema.Array(Schema.String),
    name: Schema.String,
  }),
  outputSchema: Models.CustomerSegmentCreateResponse,
});

export const pinterest_customerSegment_customerSegmentList = defineEndpointDescriptor({
  id: "pinterest.customerSegment.customerSegmentList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/customer_segments",
  summary: "List customer segments",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.customerSegment.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"includeSizing","wireName":"includeSizing","location":"query","required":false,"nullable":false},
    {"name":"searchQuery","wireName":"searchQuery","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
    includeSizing: Schema.optional(Schema.Boolean),
    searchQuery: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CustomerSegmentListResponse,
});

export const pinterest_customerSegment_customerSegmentUpdate = defineEndpointDescriptor({
  id: "pinterest.customerSegment.customerSegmentUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/customer_segments",
  summary: "Update customer segments",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.customerSegment.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"audience_ids","wireName":"audience_ids","location":"body","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"body","required":true,"nullable":false},
    {"name":"operation_type","wireName":"operation_type","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    audience_ids: Schema.optional(Schema.Array(Schema.String)),
    id: Schema.String,
    operation_type: Schema.String,
  }),
  outputSchema: Models.CustomerSegmentUpdateResponse,
});

export const pinterest_businessAccessRelationships_deleteBusinessMembership = defineEndpointDescriptor({
  id: "pinterest.businessAccessRelationships.deleteBusinessMembership",
  platform: "pinterest",
  method: "DELETE",
  path: "/businesses/{business_id}/members",
  summary: "Terminate business memberships",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:read","biz_access:write"],
  capabilities: ["pinterest.businessAccessRelationships.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"members","wireName":"members","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    members: Schema.Array(Schema.suspend(() => Models.Inline9354)),
  }),
  outputSchema: Models.DeleteBusinessMembershipResponse,
});

export const pinterest_businessAccessRelationships_deleteBusinessPartners = defineEndpointDescriptor({
  id: "pinterest.businessAccessRelationships.deleteBusinessPartners",
  platform: "pinterest",
  method: "DELETE",
  path: "/businesses/{business_id}/partners",
  summary: "Terminate business partnerships",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:write"],
  capabilities: ["pinterest.businessAccessRelationships.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"partner_ids","wireName":"partner_ids","location":"body","required":true,"nullable":false},
    {"name":"partner_type","wireName":"partner_type","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    partner_ids: Schema.Array(Schema.String),
    partner_type: Schema.optional(Models.Inline9379),
  }),
  outputSchema: Models.DeleteBusinessPartnersResponse,
});

export const pinterest_businessAccessAssets_deletePartnerAssetAccessHandlerImpl = defineEndpointDescriptor({
  id: "pinterest.businessAccessAssets.deletePartnerAssetAccessHandlerImpl",
  platform: "pinterest",
  method: "DELETE",
  path: "/businesses/{business_id}/partners/assets",
  summary: "Delete partner access to asset",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:write"],
  capabilities: ["pinterest.businessAccessAssets.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"accesses","wireName":"accesses","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    accesses: Schema.Array(Schema.suspend(() => Models.Inline9393)),
  }),
  outputSchema: Models.DeletePartnerAssetAccessHandlerImplResponse,
});

export const pinterest_resources_deliveryMetricsGet = defineEndpointDescriptor({
  id: "pinterest.resources.deliveryMetricsGet",
  platform: "pinterest",
  method: "GET",
  path: "/resources/delivery_metrics",
  summary: "Get available metrics' definitions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read","pins:read","user_accounts:read"],
  capabilities: ["pinterest.resources.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"reportType","wireName":"reportType","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    reportType: Schema.optional(Schema.String),
  }),
  outputSchema: Models.DeliveryMetricsGetResponse,
});

export const pinterest_conversionEvents_eventsCreate = defineEndpointDescriptor({
  id: "pinterest.conversionEvents.eventsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/events",
  summary: "Send conversions",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.conversionEvents.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","conversion_token"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"data","wireName":"data","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    test: Schema.optional(Schema.Boolean),
    data: Schema.Array(Schema.suspend(() => Models.Inline8811)),
  }),
  outputSchema: Models.EventsCreateResponse,
});

export const pinterest_catalogFeeds_feedProcessingResultsList = defineEndpointDescriptor({
  id: "pinterest.catalogFeeds.feedProcessingResultsList",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/feeds/{feed_id}/processing_results",
  summary: "List feed processing results",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogFeeds.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"feedId","wireName":"feedId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    feedId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.FeedProcessingResultsListResponse,
});

export const pinterest_catalogFeeds_feedsCreate = defineEndpointDescriptor({
  id: "pinterest.catalogFeeds.feedsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/catalogs/feeds",
  summary: "Create feed",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:read","catalogs:write"],
  capabilities: ["pinterest.catalogFeeds.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.FeedsCreateResponse,
});

export const pinterest_catalogFeeds_feedsDelete = defineEndpointDescriptor({
  id: "pinterest.catalogFeeds.feedsDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/catalogs/feeds/{feed_id}",
  summary: "Delete feed",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:read","catalogs:write"],
  capabilities: ["pinterest.catalogFeeds.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"feedId","wireName":"feedId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    feedId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.FeedsDeleteResponse,
});

export const pinterest_catalogFeeds_feedsGet = defineEndpointDescriptor({
  id: "pinterest.catalogFeeds.feedsGet",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/feeds/{feed_id}",
  summary: "Get feed",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogFeeds.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"feedId","wireName":"feedId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    feedId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.FeedsGetResponse,
});

export const pinterest_catalogFeeds_feedsIngest = defineEndpointDescriptor({
  id: "pinterest.catalogFeeds.feedsIngest",
  platform: "pinterest",
  method: "POST",
  path: "/catalogs/feeds/{feed_id}/ingest",
  summary: "Ingest feed items",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:write"],
  capabilities: ["pinterest.catalogFeeds.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"feedId","wireName":"feedId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    feedId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.FeedsIngestResponse,
});

export const pinterest_catalogFeeds_feedsList = defineEndpointDescriptor({
  id: "pinterest.catalogFeeds.feedsList",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/feeds",
  summary: "List feeds",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogFeeds.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"query","required":false,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.optional(Schema.String),
    adAccountId: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.FeedsListResponse,
});

export const pinterest_catalogFeeds_feedsUpdate = defineEndpointDescriptor({
  id: "pinterest.catalogFeeds.feedsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/catalogs/feeds/{feed_id}",
  summary: "Update feed",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:read","catalogs:write"],
  capabilities: ["pinterest.catalogFeeds.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"feedId","wireName":"feedId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    feedId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.FeedsUpdateResponse,
});

export const pinterest_userAccount_followersList = defineEndpointDescriptor({
  id: "pinterest.userAccount.followersList",
  platform: "pinterest",
  method: "GET",
  path: "/user_account/followers",
  summary: "List followers",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.userAccount.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.FollowersListResponse,
});

export const pinterest_userAccount_followUserUpdate = defineEndpointDescriptor({
  id: "pinterest.userAccount.followUserUpdate",
  platform: "pinterest",
  method: "POST",
  path: "/user_account/following/{username}",
  summary: "Follow user",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["user_accounts:write"],
  capabilities: ["pinterest.userAccount.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"username","wireName":"username","location":"path","required":true,"nullable":false},
    {"name":"auto_follow","wireName":"auto_follow","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    username: Schema.String,
    auto_follow: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.FollowUserUpdateResponse,
});

export const pinterest_adGroups_getAdGroupsByPromotionIdsList = defineEndpointDescriptor({
  id: "pinterest.adGroups.getAdGroupsByPromotionIdsList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/promotion_applied_entities",
  summary: "List of ad groups using promotions IDs.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adGroups.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"promotionIds","wireName":"promotionIds","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
    promotionIds: Schema.Array(Schema.String),
  }),
  outputSchema: Models.GetAdGroupsByPromotionIdsListResponse,
});

export const pinterest_businessAccessRelationships_getBusinessEmployers = defineEndpointDescriptor({
  id: "pinterest.businessAccessRelationships.getBusinessEmployers",
  platform: "pinterest",
  method: "GET",
  path: "/businesses/employers",
  summary: "List business employers for user",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["biz_access:read"],
  capabilities: ["pinterest.businessAccessRelationships.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"assetsSummary","wireName":"assetsSummary","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    assetsSummary: Schema.optional(Schema.Boolean),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetBusinessEmployersResponse,
});

export const pinterest_businessAccessRelationships_getBusinessMembers = defineEndpointDescriptor({
  id: "pinterest.businessAccessRelationships.getBusinessMembers",
  platform: "pinterest",
  method: "GET",
  path: "/businesses/{business_id}/members",
  summary: "Get business members",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["biz_access:read"],
  capabilities: ["pinterest.businessAccessRelationships.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"fetchSystemUsers","wireName":"fetchSystemUsers","location":"query","required":false,"nullable":false},
    {"name":"assetsSummary","wireName":"assetsSummary","location":"query","required":false,"nullable":false},
    {"name":"businessRoles","wireName":"businessRoles","location":"query","required":false,"nullable":false},
    {"name":"memberIds","wireName":"memberIds","location":"query","required":false,"nullable":false},
    {"name":"startIndex","wireName":"startIndex","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    fetchSystemUsers: Schema.optional(Schema.Boolean),
    assetsSummary: Schema.optional(Schema.Boolean),
    businessRoles: Schema.optional(Schema.Array(Schema.String)),
    memberIds: Schema.optional(Schema.String),
    startIndex: Schema.optional(Schema.Number),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetBusinessMembersResponse,
});

export const pinterest_businessAccessRelationships_getBusinessPartners = defineEndpointDescriptor({
  id: "pinterest.businessAccessRelationships.getBusinessPartners",
  platform: "pinterest",
  method: "GET",
  path: "/businesses/{business_id}/partners",
  summary: "Get business partners",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["biz_access:read"],
  capabilities: ["pinterest.businessAccessRelationships.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"assetsSummary","wireName":"assetsSummary","location":"query","required":false,"nullable":false},
    {"name":"partnerType","wireName":"partnerType","location":"query","required":false,"nullable":false},
    {"name":"partnerIds","wireName":"partnerIds","location":"query","required":false,"nullable":false},
    {"name":"startIndex","wireName":"startIndex","location":"query","required":false,"nullable":false},
    {"name":"sortAscending","wireName":"sortAscending","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    assetsSummary: Schema.optional(Schema.Boolean),
    partnerType: Schema.optional(Schema.String),
    partnerIds: Schema.optional(Schema.String),
    startIndex: Schema.optional(Schema.Number),
    sortAscending: Schema.optional(Schema.Boolean),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetBusinessPartnersResponse,
});

export const pinterest_campaigns_getCampaignDeliveryEstimates = defineEndpointDescriptor({
  id: "pinterest.campaigns.getCampaignDeliveryEstimates",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/campaigns/delivery_estimates",
  summary: "Get campaign delivery estimates",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.campaigns.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.GetCampaignDeliveryEstimatesResponse,
});

export const pinterest_businessAccessInvite_getInvites = defineEndpointDescriptor({
  id: "pinterest.businessAccessInvite.getInvites",
  platform: "pinterest",
  method: "GET",
  path: "/businesses/{business_id}/invites",
  summary: "Get invites/requests",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["biz_access:read"],
  capabilities: ["pinterest.businessAccessInvite.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"isMember","wireName":"isMember","location":"query","required":false,"nullable":false},
    {"name":"inviteStatus","wireName":"inviteStatus","location":"query","required":false,"nullable":false},
    {"name":"inviteType","wireName":"inviteType","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    isMember: Schema.optional(Schema.Boolean),
    inviteStatus: Schema.optional(Schema.Array(Schema.String)),
    inviteType: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.GetInvitesResponse,
});

export const pinterest_integrations_integrationsCommerceDel = defineEndpointDescriptor({
  id: "pinterest.integrations.integrationsCommerceDel",
  platform: "pinterest",
  method: "DELETE",
  path: "/integrations/commerce/{external_business_id}",
  summary: "Delete commerce integration",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.integrations.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"externalBusinessId","wireName":"externalBusinessId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    externalBusinessId: Schema.String,
  }),
  outputSchema: Models.IntegrationsCommerceDelResponse,
});

export const pinterest_integrations_integrationsCommerceGet = defineEndpointDescriptor({
  id: "pinterest.integrations.integrationsCommerceGet",
  platform: "pinterest",
  method: "GET",
  path: "/integrations/commerce/{external_business_id}",
  summary: "Get commerce integration",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.integrations.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"externalBusinessId","wireName":"externalBusinessId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    externalBusinessId: Schema.String,
  }),
  outputSchema: Models.IntegrationsCommerceGetResponse,
});

export const pinterest_integrations_integrationsCommercePatch = defineEndpointDescriptor({
  id: "pinterest.integrations.integrationsCommercePatch",
  platform: "pinterest",
  method: "PATCH",
  path: "/integrations/commerce/{external_business_id}",
  summary: "Update commerce integration",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.integrations.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"externalBusinessId","wireName":"externalBusinessId","location":"path","required":true,"nullable":false},
    {"name":"additional_id_1","wireName":"additional_id_1","location":"body","required":false,"nullable":false},
    {"name":"connected_advertiser_id","wireName":"connected_advertiser_id","location":"body","required":false,"nullable":false},
    {"name":"connected_lba_id","wireName":"connected_lba_id","location":"body","required":false,"nullable":false},
    {"name":"connected_merchant_id","wireName":"connected_merchant_id","location":"body","required":false,"nullable":false},
    {"name":"connected_tag_id","wireName":"connected_tag_id","location":"body","required":false,"nullable":false},
    {"name":"partner_access_token","wireName":"partner_access_token","location":"body","required":false,"nullable":false},
    {"name":"partner_access_token_expiry","wireName":"partner_access_token_expiry","location":"body","required":false,"nullable":false},
    {"name":"partner_metadata","wireName":"partner_metadata","location":"body","required":false,"nullable":false},
    {"name":"partner_primary_email","wireName":"partner_primary_email","location":"body","required":false,"nullable":false},
    {"name":"partner_refresh_token","wireName":"partner_refresh_token","location":"body","required":false,"nullable":false},
    {"name":"partner_refresh_token_expiry","wireName":"partner_refresh_token_expiry","location":"body","required":false,"nullable":false},
    {"name":"scopes","wireName":"scopes","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    externalBusinessId: Schema.String,
    additional_id_1: Schema.optional(Schema.String),
    connected_advertiser_id: Schema.optional(Schema.String),
    connected_lba_id: Schema.optional(Schema.String),
    connected_merchant_id: Schema.optional(Schema.String),
    connected_tag_id: Schema.optional(Schema.String),
    partner_access_token: Schema.optional(Schema.String),
    partner_access_token_expiry: Schema.optional(Schema.Number),
    partner_metadata: Schema.optional(Schema.String),
    partner_primary_email: Schema.optional(Schema.String),
    partner_refresh_token: Schema.optional(Schema.String),
    partner_refresh_token_expiry: Schema.optional(Schema.Number),
    scopes: Schema.optional(Schema.String),
  }),
  outputSchema: Models.IntegrationsCommercePatchResponse,
});

export const pinterest_integrations_integrationsCommercePost = defineEndpointDescriptor({
  id: "pinterest.integrations.integrationsCommercePost",
  platform: "pinterest",
  method: "POST",
  path: "/integrations/commerce",
  summary: "Create commerce integration",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.integrations.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"additional_id_1","wireName":"additional_id_1","location":"body","required":false,"nullable":false},
    {"name":"connected_advertiser_id","wireName":"connected_advertiser_id","location":"body","required":false,"nullable":false},
    {"name":"connected_lba_id","wireName":"connected_lba_id","location":"body","required":false,"nullable":false},
    {"name":"connected_merchant_id","wireName":"connected_merchant_id","location":"body","required":false,"nullable":false},
    {"name":"connected_tag_id","wireName":"connected_tag_id","location":"body","required":false,"nullable":false},
    {"name":"external_business_id","wireName":"external_business_id","location":"body","required":false,"nullable":false},
    {"name":"partner_access_token","wireName":"partner_access_token","location":"body","required":false,"nullable":false},
    {"name":"partner_access_token_expiry","wireName":"partner_access_token_expiry","location":"body","required":false,"nullable":false},
    {"name":"partner_metadata","wireName":"partner_metadata","location":"body","required":false,"nullable":false},
    {"name":"partner_primary_email","wireName":"partner_primary_email","location":"body","required":false,"nullable":false},
    {"name":"partner_refresh_token","wireName":"partner_refresh_token","location":"body","required":false,"nullable":false},
    {"name":"partner_refresh_token_expiry","wireName":"partner_refresh_token_expiry","location":"body","required":false,"nullable":false},
    {"name":"scopes","wireName":"scopes","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    additional_id_1: Schema.optional(Schema.String),
    connected_advertiser_id: Schema.optional(Schema.String),
    connected_lba_id: Schema.optional(Schema.String),
    connected_merchant_id: Schema.optional(Schema.String),
    connected_tag_id: Schema.optional(Schema.String),
    external_business_id: Schema.optional(Schema.String),
    partner_access_token: Schema.optional(Schema.String),
    partner_access_token_expiry: Schema.optional(Schema.Number),
    partner_metadata: Schema.optional(Schema.String),
    partner_primary_email: Schema.optional(Schema.String),
    partner_refresh_token: Schema.optional(Schema.String),
    partner_refresh_token_expiry: Schema.optional(Schema.Number),
    scopes: Schema.optional(Schema.String),
  }),
  outputSchema: Models.IntegrationsCommercePostResponse,
});

export const pinterest_integrations_integrationsGetById = defineEndpointDescriptor({
  id: "pinterest.integrations.integrationsGetById",
  platform: "pinterest",
  method: "GET",
  path: "/integrations/{id}",
  summary: "Get integration metadata",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.integrations.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.Unknown,
  }),
  outputSchema: Models.IntegrationsGetByIdResponse,
});

export const pinterest_integrations_integrationsGetList = defineEndpointDescriptor({
  id: "pinterest.integrations.integrationsGetList",
  platform: "pinterest",
  method: "GET",
  path: "/integrations",
  summary: "Get integration metadata list",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.integrations.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.IntegrationsGetListResponse,
});

export const pinterest_integrations_integrationsLogsPost = defineEndpointDescriptor({
  id: "pinterest.integrations.integrationsLogsPost",
  platform: "pinterest",
  method: "POST",
  path: "/integrations/logs",
  summary: "Receives batched logs from integration applications.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.integrations.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"logs","wireName":"logs","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    logs: Schema.Array(Schema.suspend(() => Models.Inline11378)),
  }),
  outputSchema: Models.IntegrationsLogsPostResponse,
});

export const pinterest_resources_interestTargetingOptionsGet = defineEndpointDescriptor({
  id: "pinterest.resources.interestTargetingOptionsGet",
  platform: "pinterest",
  method: "GET",
  path: "/resources/targeting/interests/{interest_id}",
  summary: "Get interest details",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.resources.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"interestId","wireName":"interestId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    interestId: Schema.String,
  }),
  outputSchema: Models.InterestTargetingOptionsGetResponse,
});

export const pinterest_catalogItems_itemsBatchGet = defineEndpointDescriptor({
  id: "pinterest.catalogItems.itemsBatchGet",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/items/batch/{batch_id}",
  summary: "Get item batch status",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogItems.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"batchId","wireName":"batchId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    batchId: Schema.Unknown,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ItemsBatchGetResponse,
});

export const pinterest_catalogItems_itemsBatchPost = defineEndpointDescriptor({
  id: "pinterest.catalogItems.itemsBatchPost",
  platform: "pinterest",
  method: "POST",
  path: "/catalogs/items/batch",
  summary: "Operate on item batch",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:read","catalogs:write"],
  capabilities: ["pinterest.catalogItems.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ItemsBatchPostResponse,
});

export const pinterest_catalogFeeds_itemsIssuesList = defineEndpointDescriptor({
  id: "pinterest.catalogFeeds.itemsIssuesList",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/processing_results/{processing_result_id}/item_issues",
  summary: "List item issues",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogFeeds.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"processingResultId","wireName":"processingResultId","location":"path","required":true,"nullable":false},
    {"name":"itemNumbers","wireName":"itemNumbers","location":"query","required":false,"nullable":false},
    {"name":"itemValidationIssue","wireName":"itemValidationIssue","location":"query","required":false,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    processingResultId: Schema.String,
    itemNumbers: Schema.optional(Schema.Array(Schema.Number)),
    itemValidationIssue: Schema.optional(Schema.String),
    adAccountId: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.ItemsIssuesListResponse,
});

export const pinterest_catalogItems_itemsPost = defineEndpointDescriptor({
  id: "pinterest.catalogItems.itemsPost",
  platform: "pinterest",
  method: "POST",
  path: "/catalogs/items",
  summary: "Get catalogs items (POST)",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogItems.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"country","wireName":"country","location":"body","required":true,"nullable":false},
    {"name":"filters","wireName":"filters","location":"body","required":true,"nullable":false},
    {"name":"language","wireName":"language","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    country: Schema.String,
    filters: Schema.Union(Schema.suspend(() => Models.Inline9570), Schema.suspend(() => Models.Inline9571), Schema.suspend(() => Models.Inline9572)),
    language: Schema.Union(Schema.String, Schema.String),
  }),
  outputSchema: Models.ItemsPostResponse,
});

export const pinterest_keywords_keywordsCreate = defineEndpointDescriptor({
  id: "pinterest.keywords.keywordsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/keywords",
  summary: "Create keywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.keywords.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"keywords","wireName":"keywords","location":"body","required":true,"nullable":false},
    {"name":"parent_id","wireName":"parent_id","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    keywords: Schema.Array(Schema.suspend(() => Models.Inline8828)),
    parent_id: Schema.String,
  }),
  outputSchema: Models.KeywordsCreateResponse,
});

export const pinterest_keywords_keywordsGet = defineEndpointDescriptor({
  id: "pinterest.keywords.keywordsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/keywords",
  summary: "Get keywords",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.keywords.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"campaignId","wireName":"campaignId","location":"query","required":false,"nullable":false},
    {"name":"adGroupId","wireName":"adGroupId","location":"query","required":false,"nullable":false},
    {"name":"adGroupIds","wireName":"adGroupIds","location":"query","required":false,"nullable":false},
    {"name":"matchTypes","wireName":"matchTypes","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    campaignId: Schema.optional(Schema.String),
    adGroupId: Schema.optional(Schema.String),
    adGroupIds: Schema.optional(Schema.Array(Schema.Unknown)),
    matchTypes: Schema.optional(Schema.Array(Schema.String)),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.KeywordsGetResponse,
});

export const pinterest_keywords_keywordsUpdate = defineEndpointDescriptor({
  id: "pinterest.keywords.keywordsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/keywords",
  summary: "Update keywords",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.keywords.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"keywords","wireName":"keywords","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    keywords: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline8834))),
  }),
  outputSchema: Models.KeywordsUpdateResponse,
});

export const pinterest_labels_labelsApply = defineEndpointDescriptor({
  id: "pinterest.labels.labelsApply",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/labels/{label_id}/apply",
  summary: "Apply label to entity",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.labels.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"labelId","wireName":"labelId","location":"path","required":true,"nullable":false},
    {"name":"entity_ids","wireName":"entity_ids","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    labelId: Schema.String,
    entity_ids: Schema.Array(Schema.String),
  }),
  outputSchema: Models.LabelsApplyResponse,
});

export const pinterest_labels_labelsCreate = defineEndpointDescriptor({
  id: "pinterest.labels.labelsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/labels",
  summary: "Create labels",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.labels.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"labels","wireName":"labels","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    labels: Schema.Array(Schema.suspend(() => Models.Inline8846)),
  }),
  outputSchema: Models.LabelsCreateResponse,
});

export const pinterest_labels_labelsList = defineEndpointDescriptor({
  id: "pinterest.labels.labelsList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/labels",
  summary: "List labels",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.labels.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"campaignIds","wireName":"campaignIds","location":"query","required":false,"nullable":false},
    {"name":"labelIds","wireName":"labelIds","location":"query","required":false,"nullable":false},
    {"name":"entityStatuses","wireName":"entityStatuses","location":"query","required":false,"nullable":false},
    {"name":"labelTypes","wireName":"labelTypes","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    campaignIds: Schema.optional(Schema.Array(Schema.String)),
    labelIds: Schema.optional(Schema.Array(Schema.String)),
    entityStatuses: Schema.optional(Schema.Array(Schema.String)),
    labelTypes: Schema.optional(Schema.Array(Schema.String)),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.LabelsListResponse,
});

export const pinterest_labels_labelsRemove = defineEndpointDescriptor({
  id: "pinterest.labels.labelsRemove",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/labels/{label_id}/remove",
  summary: "Remove label from entities",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.labels.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"labelId","wireName":"labelId","location":"path","required":true,"nullable":false},
    {"name":"entity_ids","wireName":"entity_ids","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    labelId: Schema.String,
    entity_ids: Schema.Array(Schema.String),
  }),
  outputSchema: Models.LabelsRemoveResponse,
});

export const pinterest_labels_labelsUpdate = defineEndpointDescriptor({
  id: "pinterest.labels.labelsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/labels",
  summary: "Update labels",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.labels.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"labels","wireName":"labels","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    labels: Schema.Array(Schema.suspend(() => Models.Inline8852)),
  }),
  outputSchema: Models.LabelsUpdateResponse,
});

export const pinterest_leadForms_leadFormGet = defineEndpointDescriptor({
  id: "pinterest.leadForms.leadFormGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/lead_forms/{lead_form_id}",
  summary: "Get lead form by id",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.leadForms.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"leadFormId","wireName":"leadFormId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    leadFormId: Schema.String,
    adAccountId: Schema.String,
  }),
  outputSchema: Models.LeadFormGetResponse,
});

export const pinterest_resources_leadFormQuestionsGet = defineEndpointDescriptor({
  id: "pinterest.resources.leadFormQuestionsGet",
  platform: "pinterest",
  method: "GET",
  path: "/resources/lead_form_questions",
  summary: "Get lead form questions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.resources.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.LeadFormQuestionsGetResponse,
});

export const pinterest_leadForms_leadFormsCreate = defineEndpointDescriptor({
  id: "pinterest.leadForms.leadFormsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/lead_forms",
  summary: "Create lead forms",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.leadForms.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.LeadFormsCreateResponse,
});

export const pinterest_leadForms_leadFormsList = defineEndpointDescriptor({
  id: "pinterest.leadForms.leadFormsList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/lead_forms",
  summary: "List lead forms",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.leadForms.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
  }),
  outputSchema: Models.LeadFormsListResponse,
});

export const pinterest_leadForms_leadFormsUpdate = defineEndpointDescriptor({
  id: "pinterest.leadForms.leadFormsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/lead_forms",
  summary: "Update lead forms",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.leadForms.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.LeadFormsUpdateResponse,
});

export const pinterest_leadForms_leadFormTestCreate = defineEndpointDescriptor({
  id: "pinterest.leadForms.leadFormTestCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/lead_forms/{lead_form_id}/test",
  summary: "Create lead form test data",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.leadForms.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"leadFormId","wireName":"leadFormId","location":"path","required":true,"nullable":false},
    {"name":"answers","wireName":"answers","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    leadFormId: Schema.String,
    answers: Schema.Array(Schema.String),
  }),
  outputSchema: Models.LeadFormTestCreateResponse,
});

export const pinterest_leadsExport_leadsExportCreate = defineEndpointDescriptor({
  id: "pinterest.leadsExport.leadsExportCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/leads_export",
  summary: "Create a request to export leads collected from a lead ad",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.leadsExport.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ad_id","wireName":"ad_id","location":"body","required":true,"nullable":false},
    {"name":"end_date","wireName":"end_date","location":"body","required":true,"nullable":false},
    {"name":"start_date","wireName":"start_date","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ad_id: Schema.String,
    end_date: Schema.String,
    start_date: Schema.String,
  }),
  outputSchema: Models.LeadsExportCreateResponse,
});

export const pinterest_leadsExport_leadsExportGet = defineEndpointDescriptor({
  id: "pinterest.leadsExport.leadsExportGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/leads_export/{leads_export_id}",
  summary: "Get the lead export from the lead export create call",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.leadsExport.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"leadsExportId","wireName":"leadsExportId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    leadsExportId: Schema.String,
  }),
  outputSchema: Models.LeadsExportGetResponse,
});

export const pinterest_userAccount_linkedBusinessAccountsGet = defineEndpointDescriptor({
  id: "pinterest.userAccount.linkedBusinessAccountsGet",
  platform: "pinterest",
  method: "GET",
  path: "/user_account/businesses",
  summary: "List linked businesses",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.userAccount.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.LinkedBusinessAccountsGetResponse,
});

export const pinterest_media_mediaCreate = defineEndpointDescriptor({
  id: "pinterest.media.mediaCreate",
  platform: "pinterest",
  method: "POST",
  path: "/media",
  summary: "Register media upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["pins:read","pins:write"],
  capabilities: ["pinterest.media.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"media_type","wireName":"media_type","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    media_type: Models.Inline11392,
  }),
  outputSchema: Models.MediaCreateResponse,
});

export const pinterest_media_mediaGet = defineEndpointDescriptor({
  id: "pinterest.media.mediaGet",
  platform: "pinterest",
  method: "GET",
  path: "/media/{media_id}",
  summary: "Get media upload details",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["pins:read"],
  capabilities: ["pinterest.media.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"mediaId","wireName":"mediaId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    mediaId: Schema.String,
  }),
  outputSchema: Models.MediaGetResponse,
});

export const pinterest_media_mediaList = defineEndpointDescriptor({
  id: "pinterest.media.mediaList",
  platform: "pinterest",
  method: "GET",
  path: "/media",
  summary: "List media uploads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["pins:read"],
  capabilities: ["pinterest.media.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.MediaListResponse,
});

export const pinterest_resources_metricsReadyStateGet = defineEndpointDescriptor({
  id: "pinterest.resources.metricsReadyStateGet",
  platform: "pinterest",
  method: "GET",
  path: "/resources/metrics_ready_state",
  summary: "Get metrics ready state",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.resources.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"date","wireName":"date","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    date: Schema.String,
  }),
  outputSchema: Models.MetricsReadyStateGetResponse,
});

export const pinterest_msotEvents_msotEventsCreate = defineEndpointDescriptor({
  id: "pinterest.msotEvents.msotEventsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/msot/events",
  summary: "Send Measurement Source Of Truth (MSOT) attributed conversion events",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["msot:write"],
  capabilities: ["pinterest.msotEvents.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"action_timestamps","wireName":"action_timestamps","location":"body","required":false,"nullable":false},
    {"name":"ad_group_id","wireName":"ad_group_id","location":"body","required":true,"nullable":false},
    {"name":"attribution_model","wireName":"attribution_model","location":"body","required":false,"nullable":false},
    {"name":"attribution_scope","wireName":"attribution_scope","location":"body","required":false,"nullable":false},
    {"name":"attribution_score","wireName":"attribution_score","location":"body","required":false,"nullable":false},
    {"name":"campaign_id","wireName":"campaign_id","location":"body","required":false,"nullable":false},
    {"name":"click_window","wireName":"click_window","location":"body","required":false,"nullable":false},
    {"name":"currency","wireName":"currency","location":"body","required":false,"nullable":false},
    {"name":"event_id","wireName":"event_id","location":"body","required":true,"nullable":false},
    {"name":"event_name","wireName":"event_name","location":"body","required":true,"nullable":false},
    {"name":"event_timestamp","wireName":"event_timestamp","location":"body","required":true,"nullable":false},
    {"name":"total_event_touchpoints","wireName":"total_event_touchpoints","location":"body","required":false,"nullable":false},
    {"name":"total_events","wireName":"total_events","location":"body","required":false,"nullable":false},
    {"name":"total_events_fractional","wireName":"total_events_fractional","location":"body","required":false,"nullable":false},
    {"name":"value","wireName":"value","location":"body","required":false,"nullable":false},
    {"name":"view_window","wireName":"view_window","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    action_timestamps: Schema.optional(Schema.Array(Schema.Number)),
    ad_group_id: Models.Inline8927,
    attribution_model: Schema.optional(Models.Inline8928),
    attribution_scope: Schema.optional(Models.Inline8929),
    attribution_score: Schema.optional(Schema.Number),
    campaign_id: Schema.optional(Models.Inline8930),
    click_window: Schema.optional(Schema.String),
    currency: Schema.optional(Models.Inline8931),
    event_id: Schema.String,
    event_name: Models.Inline8932,
    event_timestamp: Schema.Number,
    total_event_touchpoints: Schema.optional(Schema.Number),
    total_events: Schema.optional(Schema.Number),
    total_events_fractional: Schema.optional(Schema.Number),
    value: Schema.optional(Schema.Number),
    view_window: Schema.optional(Schema.String),
  }),
  outputSchema: Models.MsotEventsCreateResponse,
});

export const pinterest_pins_multiPinsAnalytics = defineEndpointDescriptor({
  id: "pinterest.pins.multiPinsAnalytics",
  platform: "pinterest",
  method: "GET",
  path: "/pins/analytics",
  summary: "Get multiple Pin analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read","pins:read"],
  capabilities: ["pinterest.pins.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"pinIds","wireName":"pinIds","location":"query","required":true,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"appTypes","wireName":"appTypes","location":"query","required":false,"nullable":false},
    {"name":"metricTypes","wireName":"metricTypes","location":"query","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pinIds: Schema.Array(Schema.Unknown),
    startDate: Schema.String,
    endDate: Schema.String,
    appTypes: Schema.optional(Schema.String),
    metricTypes: Schema.Array(Schema.String),
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.MultiPinsAnalyticsResponse,
});

export const pinterest_notification_notificationPost = defineEndpointDescriptor({
  id: "pinterest.notification.notificationPost",
  platform: "pinterest",
  method: "POST",
  path: "/notifications",
  summary: "Receive notifications from external partners.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.notification.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.NotificationPostResponse,
});

export const pinterest_oauth_oauthConversionToken = defineEndpointDescriptor({
  id: "pinterest.oauth.oauthConversionToken",
  platform: "pinterest",
  method: "POST",
  path: "/oauth/conversion_token",
  summary: "Generate OAuth access token for conversion API",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.oauth.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.OauthConversionTokenResponse,
});

export const pinterest_oauth_oauthToken = defineEndpointDescriptor({
  id: "pinterest.oauth.oauthToken",
  platform: "pinterest",
  method: "POST",
  path: "/oauth/token",
  summary: "Generate OAuth access token",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["pinterest.oauth.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["basic"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.OauthTokenResponse,
});

export const pinterest_conversionTags_ocpmEligibleConversionTagsGet = defineEndpointDescriptor({
  id: "pinterest.conversionTags.ocpmEligibleConversionTagsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/conversion_tags/ocpm_eligible",
  summary: "Get Ocpm eligible conversion tags",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.conversionTags.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.OcpmEligibleConversionTagsGetResponse,
});

export const pinterest_orderLines_orderLinesGet = defineEndpointDescriptor({
  id: "pinterest.orderLines.orderLinesGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/order_lines/{order_line_id}",
  summary: "Get order line",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.orderLines.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"orderLineId","wireName":"orderLineId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    orderLineId: Schema.String,
    adAccountId: Schema.String,
  }),
  outputSchema: Models.OrderLinesGetResponse,
});

export const pinterest_orderLines_orderLinesList = defineEndpointDescriptor({
  id: "pinterest.orderLines.orderLinesList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/order_lines",
  summary: "Get order lines.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.orderLines.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
  }),
  outputSchema: Models.OrderLinesListResponse,
});

export const pinterest_conversionTags_pageVisitConversionTagsGet = defineEndpointDescriptor({
  id: "pinterest.conversionTags.pageVisitConversionTagsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/conversion_tags/page_visit",
  summary: "Get page visit conversion tags",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.conversionTags.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
  }),
  outputSchema: Models.PageVisitConversionTagsGetResponse,
});

export const pinterest_pins_pinsAnalytics = defineEndpointDescriptor({
  id: "pinterest.pins.pinsAnalytics",
  platform: "pinterest",
  method: "GET",
  path: "/pins/{pin_id}/analytics",
  summary: "Get Pin analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read","pins:read"],
  capabilities: ["pinterest.pins.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"pinId","wireName":"pinId","location":"path","required":true,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"appTypes","wireName":"appTypes","location":"query","required":false,"nullable":false},
    {"name":"metricTypes","wireName":"metricTypes","location":"query","required":true,"nullable":false},
    {"name":"splitField","wireName":"splitField","location":"query","required":false,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pinId: Schema.String,
    startDate: Schema.String,
    endDate: Schema.String,
    appTypes: Schema.optional(Schema.String),
    metricTypes: Schema.Array(Schema.Union(Schema.String, Schema.String)),
    splitField: Schema.optional(Schema.String),
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.PinsAnalyticsResponse,
});

export const pinterest_pins_pinsCreate = defineEndpointDescriptor({
  id: "pinterest.pins.pinsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/pins",
  summary: "Create Pin",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["boards:read","boards:write","pins:read","pins:write"],
  capabilities: ["pinterest.pins.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"ai_disclosures","wireName":"ai_disclosures","location":"body","required":false,"nullable":false},
    {"name":"alt_text","wireName":"alt_text","location":"body","required":false,"nullable":false},
    {"name":"board_id","wireName":"board_id","location":"body","required":false,"nullable":false},
    {"name":"board_section_id","wireName":"board_section_id","location":"body","required":false,"nullable":false},
    {"name":"description","wireName":"description","location":"body","required":false,"nullable":false},
    {"name":"dominant_color","wireName":"dominant_color","location":"body","required":false,"nullable":false},
    {"name":"link","wireName":"link","location":"body","required":false,"nullable":false},
    {"name":"media_source","wireName":"media_source","location":"body","required":false,"nullable":false},
    {"name":"parent_pin_id","wireName":"parent_pin_id","location":"body","required":false,"nullable":false},
    {"name":"sponsor_id","wireName":"sponsor_id","location":"body","required":false,"nullable":false},
    {"name":"title","wireName":"title","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    ai_disclosures: Schema.optional(Models.Inline11424),
    alt_text: Schema.optional(Schema.String),
    board_id: Schema.optional(Schema.String),
    board_section_id: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    dominant_color: Schema.optional(Schema.String),
    link: Schema.optional(Schema.String),
    media_source: Schema.optional(Schema.Union(Schema.suspend(() => Models.Inline11425), Schema.suspend(() => Models.Inline11426), Schema.suspend(() => Models.Inline11427), Schema.suspend(() => Models.Inline11428), Schema.suspend(() => Models.Inline11429), Schema.suspend(() => Models.Inline11430))),
    parent_pin_id: Schema.optional(Schema.String),
    sponsor_id: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }),
  outputSchema: Models.PinsCreateResponse,
});

export const pinterest_pins_pinsDelete = defineEndpointDescriptor({
  id: "pinterest.pins.pinsDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/pins/{pin_id}",
  summary: "Delete Pin",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["boards:read","boards:write","pins:read","pins:write"],
  capabilities: ["pinterest.pins.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"pinId","wireName":"pinId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pinId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.PinsDeleteResponse,
});

export const pinterest_pins_pinsGet = defineEndpointDescriptor({
  id: "pinterest.pins.pinsGet",
  platform: "pinterest",
  method: "GET",
  path: "/pins/{pin_id}",
  summary: "Get Pin",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read","pins:read"],
  capabilities: ["pinterest.pins.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"pinId","wireName":"pinId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"pinMetrics","wireName":"pinMetrics","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pinId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
    pinMetrics: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.PinsGetResponse,
});

export const pinterest_pins_pinsList = defineEndpointDescriptor({
  id: "pinterest.pins.pinsList",
  platform: "pinterest",
  method: "GET",
  path: "/pins",
  summary: "List Pins",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read","pins:read"],
  capabilities: ["pinterest.pins.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"pinFilter","wireName":"pinFilter","location":"query","required":false,"nullable":false},
    {"name":"pinMetrics","wireName":"pinMetrics","location":"query","required":false,"nullable":false},
    {"name":"includeProtectedPins","wireName":"includeProtectedPins","location":"query","required":false,"nullable":false},
    {"name":"pinType","wireName":"pinType","location":"query","required":false,"nullable":false},
    {"name":"creativeTypes","wireName":"creativeTypes","location":"query","required":false,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"domain","wireName":"domain","location":"query","required":false,"nullable":false},
    {"name":"domains","wireName":"domains","location":"query","required":false,"nullable":false},
    {"name":"includeProductTagObj","wireName":"includeProductTagObj","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pinFilter: Schema.optional(Schema.String),
    pinMetrics: Schema.optional(Schema.Boolean),
    includeProtectedPins: Schema.optional(Schema.Boolean),
    pinType: Schema.optional(Schema.String),
    creativeTypes: Schema.optional(Schema.Array(Schema.String)),
    adAccountId: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    domains: Schema.optional(Schema.Array(Schema.String)),
    includeProductTagObj: Schema.optional(Schema.Boolean),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.PinsListResponse,
});

export const pinterest_pins_pinsSave = defineEndpointDescriptor({
  id: "pinterest.pins.pinsSave",
  platform: "pinterest",
  method: "POST",
  path: "/pins/{pin_id}/save",
  summary: "Save Pin",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["boards:read","boards:write","pins:read","pins:write"],
  capabilities: ["pinterest.pins.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"pinId","wireName":"pinId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"board_id","wireName":"board_id","location":"body","required":false,"nullable":false},
    {"name":"board_section_id","wireName":"board_section_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pinId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
    board_id: Schema.optional(Schema.String),
    board_section_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.PinsSaveResponse,
});

export const pinterest_pins_pinsUpdate = defineEndpointDescriptor({
  id: "pinterest.pins.pinsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/pins/{pin_id}",
  summary: "Update Pin",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["boards:read","boards:write","pins:read","pins:write"],
  capabilities: ["pinterest.pins.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"pinId","wireName":"pinId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"ai_disclosures","wireName":"ai_disclosures","location":"body","required":false,"nullable":false},
    {"name":"alt_text","wireName":"alt_text","location":"body","required":false,"nullable":false},
    {"name":"board_id","wireName":"board_id","location":"body","required":false,"nullable":false},
    {"name":"board_section_id","wireName":"board_section_id","location":"body","required":false,"nullable":false},
    {"name":"carousel_slots","wireName":"carousel_slots","location":"body","required":false,"nullable":false},
    {"name":"description","wireName":"description","location":"body","required":false,"nullable":false},
    {"name":"link","wireName":"link","location":"body","required":false,"nullable":false},
    {"name":"title","wireName":"title","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pinId: Schema.String,
    adAccountId: Schema.optional(Schema.String),
    ai_disclosures: Schema.optional(Models.Inline11454),
    alt_text: Schema.optional(Schema.String),
    board_id: Schema.optional(Schema.String),
    board_section_id: Schema.optional(Schema.String),
    carousel_slots: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline11455))),
    description: Schema.optional(Schema.String),
    link: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
  }),
  outputSchema: Models.PinsUpdateResponse,
});

export const pinterest_productGroupPromotions_productGroupPromotionsCreate = defineEndpointDescriptor({
  id: "pinterest.productGroupPromotions.productGroupPromotionsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/product_group_promotions",
  summary: "Create product group promotions",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.productGroupPromotions.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ad_group_id","wireName":"ad_group_id","location":"body","required":true,"nullable":false},
    {"name":"product_group_promotion","wireName":"product_group_promotion","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ad_group_id: Schema.String,
    product_group_promotion: Schema.Array(Schema.suspend(() => Models.Inline8949)),
  }),
  outputSchema: Models.ProductGroupPromotionsCreateResponse,
});

export const pinterest_productGroupPromotions_productGroupPromotionsGet = defineEndpointDescriptor({
  id: "pinterest.productGroupPromotions.productGroupPromotionsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/product_group_promotions/{product_group_promotion_id}",
  summary: "Get a product group promotion by id",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.productGroupPromotions.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"productGroupPromotionId","wireName":"productGroupPromotionId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    productGroupPromotionId: Schema.String,
  }),
  outputSchema: Models.ProductGroupPromotionsGetResponse,
});

export const pinterest_productGroupPromotions_productGroupPromotionsList = defineEndpointDescriptor({
  id: "pinterest.productGroupPromotions.productGroupPromotionsList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/product_group_promotions",
  summary: "Get product group promotions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.productGroupPromotions.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"productGroupPromotionIds","wireName":"productGroupPromotionIds","location":"query","required":false,"nullable":false},
    {"name":"entityStatuses","wireName":"entityStatuses","location":"query","required":false,"nullable":false},
    {"name":"adGroupId","wireName":"adGroupId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
    productGroupPromotionIds: Schema.optional(Schema.Array(Schema.Unknown)),
    entityStatuses: Schema.optional(Schema.Array(Schema.String)),
    adGroupId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ProductGroupPromotionsListResponse,
});

export const pinterest_productGroupPromotions_productGroupPromotionsUpdate = defineEndpointDescriptor({
  id: "pinterest.productGroupPromotions.productGroupPromotionsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/product_group_promotions",
  summary: "Update product group promotions",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.productGroupPromotions.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ad_group_id","wireName":"ad_group_id","location":"body","required":true,"nullable":false},
    {"name":"product_group_promotion","wireName":"product_group_promotion","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ad_group_id: Schema.String,
    product_group_promotion: Schema.Array(Schema.suspend(() => Models.Inline8955)),
  }),
  outputSchema: Models.ProductGroupPromotionsUpdateResponse,
});

export const pinterest_productGroupPromotions_productGroupsAnalytics = defineEndpointDescriptor({
  id: "pinterest.productGroupPromotions.productGroupsAnalytics",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/product_groups/analytics",
  summary: "Get product group analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.productGroupPromotions.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"productGroupIds","wireName":"productGroupIds","location":"query","required":true,"nullable":false},
    {"name":"columns","wireName":"columns","location":"query","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"clickWindowDays","wireName":"clickWindowDays","location":"query","required":false,"nullable":false},
    {"name":"engagementWindowDays","wireName":"engagementWindowDays","location":"query","required":false,"nullable":false},
    {"name":"viewWindowDays","wireName":"viewWindowDays","location":"query","required":false,"nullable":false},
    {"name":"conversionReportTime","wireName":"conversionReportTime","location":"query","required":false,"nullable":false},
    {"name":"reportingTimezone","wireName":"reportingTimezone","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    startDate: Schema.String,
    endDate: Schema.String,
    productGroupIds: Schema.Array(Schema.String),
    columns: Schema.Array(Schema.String),
    granularity: Schema.String,
    clickWindowDays: Schema.optional(Schema.Number),
    engagementWindowDays: Schema.optional(Schema.Number),
    viewWindowDays: Schema.optional(Schema.Number),
    conversionReportTime: Schema.optional(Schema.String),
    reportingTimezone: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ProductGroupsAnalyticsResponse,
});

export const pinterest_catalogProductGroups_productsByProductGroupFilterList = defineEndpointDescriptor({
  id: "pinterest.catalogProductGroups.productsByProductGroupFilterList",
  platform: "pinterest",
  method: "POST",
  path: "/catalogs/products/get_by_product_group_filters",
  summary: "List products by filter",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["boards:read","catalogs:read","pins:read"],
  capabilities: ["pinterest.catalogProductGroups.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"pinMetrics","wireName":"pinMetrics","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    adAccountId: Schema.optional(Schema.String),
    pinMetrics: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.ProductsByProductGroupFilterListResponse,
});

export const pinterest_productTags_productTagsBulkAdd = defineEndpointDescriptor({
  id: "pinterest.productTags.productTagsBulkAdd",
  platform: "pinterest",
  method: "POST",
  path: "/pins/{pin_id}/product_tags",
  summary: "Add product tags to pin",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["boards:read","boards:write","pins:read","pins:write"],
  capabilities: ["pinterest.productTags.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"pinId","wireName":"pinId","location":"path","required":true,"nullable":false},
    {"name":"product_tags","wireName":"product_tags","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pinId: Schema.String,
    product_tags: Schema.Array(Schema.suspend(() => Models.Inline11470)),
  }),
  outputSchema: Models.ProductTagsBulkAddResponse,
});

export const pinterest_productTags_productTagsBulkDelete = defineEndpointDescriptor({
  id: "pinterest.productTags.productTagsBulkDelete",
  platform: "pinterest",
  method: "POST",
  path: "/pins/{pin_id}/product_tags/bulk-delete",
  summary: "Delete product tags from pin",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["boards:read","boards:write","pins:read","pins:write"],
  capabilities: ["pinterest.productTags.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"pinId","wireName":"pinId","location":"path","required":true,"nullable":false},
    {"name":"product_tags","wireName":"product_tags","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pinId: Schema.String,
    product_tags: Schema.Array(Schema.suspend(() => Models.Inline11477)),
  }),
  outputSchema: Models.ProductTagsBulkDeleteResponse,
});

export const pinterest_productTags_productTagsList = defineEndpointDescriptor({
  id: "pinterest.productTags.productTagsList",
  platform: "pinterest",
  method: "GET",
  path: "/pins/{pin_id}/product_tags",
  summary: "Get product tags for pin",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read","pins:read"],
  capabilities: ["pinterest.productTags.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"pinId","wireName":"pinId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pinId: Schema.String,
  }),
  outputSchema: Models.ProductTagsListResponse,
});

export const pinterest_promotions_promotionsCreate = defineEndpointDescriptor({
  id: "pinterest.promotions.promotionsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/promotions",
  summary: "Create promotions",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.promotions.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.PromotionsCreateResponse,
});

export const pinterest_promotions_promotionsDelete = defineEndpointDescriptor({
  id: "pinterest.promotions.promotionsDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/ad_accounts/{ad_account_id}/promotions/{promotion_id}",
  summary: "Delete promotion by id",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.promotions.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"promotionId","wireName":"promotionId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    promotionId: Schema.String,
    adAccountId: Schema.String,
  }),
  outputSchema: Models.PromotionsDeleteResponse,
});

export const pinterest_promotions_promotionsGet = defineEndpointDescriptor({
  id: "pinterest.promotions.promotionsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/promotions/{promotion_id}",
  summary: "Get promotion by id",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.promotions.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"promotionId","wireName":"promotionId","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    promotionId: Schema.String,
    adAccountId: Schema.String,
  }),
  outputSchema: Models.PromotionsGetResponse,
});

export const pinterest_promotions_promotionsList = defineEndpointDescriptor({
  id: "pinterest.promotions.promotionsList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/promotions",
  summary: "Get promotions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.promotions.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
  }),
  outputSchema: Models.PromotionsListResponse,
});

export const pinterest_promotions_promotionsUpdate = defineEndpointDescriptor({
  id: "pinterest.promotions.promotionsUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/promotions",
  summary: "Update promotions",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.promotions.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.PromotionsUpdateResponse,
});

export const pinterest_catalogReports_reportsCreate = defineEndpointDescriptor({
  id: "pinterest.catalogReports.reportsCreate",
  platform: "pinterest",
  method: "POST",
  path: "/catalogs/reports",
  summary: "Build catalogs report",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogReports.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ReportsCreateResponse,
});

export const pinterest_catalogReports_reportsGet = defineEndpointDescriptor({
  id: "pinterest.catalogReports.reportsGet",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/reports",
  summary: "Get catalogs report",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogReports.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"token","wireName":"token","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    token: Schema.String,
  }),
  outputSchema: Models.ReportsGetResponse,
});

export const pinterest_catalogReports_reportsStats = defineEndpointDescriptor({
  id: "pinterest.catalogReports.reportsStats",
  platform: "pinterest",
  method: "GET",
  path: "/catalogs/reports/stats",
  summary: "List report stats",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["catalogs:read"],
  capabilities: ["pinterest.catalogReports.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"parameters","wireName":"parameters","location":"query","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    parameters: Schema.Union(Schema.suspend(() => Models.Inline11348), Schema.suspend(() => Models.Inline11350)),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.ReportsStatsResponse,
});

export const pinterest_businessAccessInvite_respondBusinessAccessInvites = defineEndpointDescriptor({
  id: "pinterest.businessAccessInvite.respondBusinessAccessInvites",
  platform: "pinterest",
  method: "PATCH",
  path: "/businesses/invites",
  summary: "Accept or decline an invite/request",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:read","biz_access:write"],
  capabilities: ["pinterest.businessAccessInvite.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"invites","wireName":"invites","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    invites: Schema.Array(Schema.suspend(() => Models.Inline9415)),
  }),
  outputSchema: Models.RespondBusinessAccessInvitesResponse,
});

export const pinterest_adAccounts_sandboxDelete = defineEndpointDescriptor({
  id: "pinterest.adAccounts.sandboxDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/ad_accounts/{ad_account_id}/sandbox",
  summary: "Delete ads data for ad account in API Sandbox",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.adAccounts.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.SandboxDeleteResponse,
});

export const pinterest_schedules_schedulesCreate = defineEndpointDescriptor({
  id: "pinterest.schedules.schedulesCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/schedules",
  summary: "Create schedules",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.schedules.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.SchedulesCreateResponse,
});

export const pinterest_schedules_schedulesList = defineEndpointDescriptor({
  id: "pinterest.schedules.schedulesList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/schedules",
  summary: "Get Schedules",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.schedules.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"scheduleStatuses","wireName":"scheduleStatuses","location":"query","required":false,"nullable":false},
    {"name":"scheduleType","wireName":"scheduleType","location":"query","required":false,"nullable":false},
    {"name":"entityIds","wireName":"entityIds","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
    scheduleStatuses: Schema.optional(Schema.Array(Schema.String)),
    scheduleType: Schema.optional(Schema.String),
    entityIds: Schema.Array(Schema.String),
  }),
  outputSchema: Models.SchedulesListResponse,
});

export const pinterest_schedules_schedulesUpdate = defineEndpointDescriptor({
  id: "pinterest.schedules.schedulesUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/schedules",
  summary: "Update schedules",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.schedules.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.SchedulesUpdateResponse,
});

export const pinterest_search_searchPartnerPins = defineEndpointDescriptor({
  id: "pinterest.search.searchPartnerPins",
  platform: "pinterest",
  method: "GET",
  path: "/search/partner/pins",
  summary: "Search pins by a given search term",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read","pins:read"],
  capabilities: ["pinterest.search.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"term","wireName":"term","location":"query","required":true,"nullable":false},
    {"name":"countryCode","wireName":"countryCode","location":"query","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"locale","wireName":"locale","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    term: Schema.String,
    countryCode: Schema.String,
    bookmark: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.SearchPartnerPinsResponse,
});

export const pinterest_search_searchUserBoardsGet = defineEndpointDescriptor({
  id: "pinterest.search.searchUserBoardsGet",
  platform: "pinterest",
  method: "GET",
  path: "/search/boards",
  summary: "Search user's boards",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read","boards:read_secret"],
  capabilities: ["pinterest.search.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"query","wireName":"query","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.SearchUserBoardsGetResponse,
});

export const pinterest_search_searchUserPinsList = defineEndpointDescriptor({
  id: "pinterest.search.searchUserPinsList",
  platform: "pinterest",
  method: "GET",
  path: "/search/pins",
  summary: "Search user's Pins",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["boards:read","boards:read_secret","pins:read","pins:read_secret"],
  capabilities: ["pinterest.search.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"query","wireName":"query","location":"query","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    query: Schema.String,
    bookmark: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SearchUserPinsListResponse,
});

export const pinterest_audienceSharing_sharedAudiencesForBusinessList = defineEndpointDescriptor({
  id: "pinterest.audienceSharing.sharedAudiencesForBusinessList",
  platform: "pinterest",
  method: "GET",
  path: "/businesses/{business_id}/audiences",
  summary: "List received audiences for a business",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["biz_access:read"],
  capabilities: ["pinterest.audienceSharing.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    order: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.SharedAudiencesForBusinessListResponse,
});

export const pinterest_billing_ssioAccountsGet = defineEndpointDescriptor({
  id: "pinterest.billing.ssioAccountsGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ssio/accounts",
  summary: "Get Salesforce account details including bill-to information.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.billing.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.SsioAccountsGetResponse,
});

export const pinterest_billing_ssioInsertionOrderCreate = defineEndpointDescriptor({
  id: "pinterest.billing.ssioInsertionOrderCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/ssio/insertion_orders",
  summary: "Create insertion order through SSIO.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.billing.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"accepted_terms_id","wireName":"accepted_terms_id","location":"body","required":true,"nullable":false},
    {"name":"accepted_terms_time","wireName":"accepted_terms_time","location":"body","required":false,"nullable":false},
    {"name":"agency_link","wireName":"agency_link","location":"body","required":false,"nullable":false},
    {"name":"billing_contact_email","wireName":"billing_contact_email","location":"body","required":true,"nullable":false},
    {"name":"billing_contact_firstname","wireName":"billing_contact_firstname","location":"body","required":true,"nullable":false},
    {"name":"billing_contact_lastname","wireName":"billing_contact_lastname","location":"body","required":true,"nullable":false},
    {"name":"billto_billing_address_id","wireName":"billto_billing_address_id","location":"body","required":true,"nullable":false},
    {"name":"billto_business_address_id","wireName":"billto_business_address_id","location":"body","required":true,"nullable":false},
    {"name":"billto_company_id","wireName":"billto_company_id","location":"body","required":true,"nullable":false},
    {"name":"budget_amount","wireName":"budget_amount","location":"body","required":false,"nullable":false},
    {"name":"currency_info","wireName":"currency_info","location":"body","required":true,"nullable":false},
    {"name":"end_date","wireName":"end_date","location":"body","required":false,"nullable":false},
    {"name":"estimated_monthly_spend","wireName":"estimated_monthly_spend","location":"body","required":false,"nullable":false},
    {"name":"media_contact_email","wireName":"media_contact_email","location":"body","required":true,"nullable":false},
    {"name":"media_contact_firstname","wireName":"media_contact_firstname","location":"body","required":true,"nullable":false},
    {"name":"media_contact_lastname","wireName":"media_contact_lastname","location":"body","required":true,"nullable":false},
    {"name":"order_line_type","wireName":"order_line_type","location":"body","required":true,"nullable":false},
    {"name":"order_name","wireName":"order_name","location":"body","required":true,"nullable":false},
    {"name":"pmp_id","wireName":"pmp_id","location":"body","required":true,"nullable":false},
    {"name":"po_number","wireName":"po_number","location":"body","required":true,"nullable":false},
    {"name":"start_date","wireName":"start_date","location":"body","required":true,"nullable":false},
    {"name":"user_email","wireName":"user_email","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    accepted_terms_id: Schema.String,
    accepted_terms_time: Schema.optional(Schema.Number),
    agency_link: Schema.optional(Schema.String),
    billing_contact_email: Schema.String,
    billing_contact_firstname: Schema.String,
    billing_contact_lastname: Schema.String,
    billto_billing_address_id: Schema.String,
    billto_business_address_id: Schema.String,
    billto_company_id: Schema.String,
    budget_amount: Schema.optional(Schema.Number),
    currency_info: Schema.String,
    end_date: Schema.optional(Schema.String),
    estimated_monthly_spend: Schema.optional(Schema.Number),
    media_contact_email: Schema.String,
    media_contact_firstname: Schema.String,
    media_contact_lastname: Schema.String,
    order_line_type: Models.Inline9121,
    order_name: Schema.String,
    pmp_id: Schema.String,
    po_number: Schema.String,
    start_date: Schema.String,
    user_email: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SsioInsertionOrderCreateResponse,
});

export const pinterest_billing_ssioInsertionOrderEdit = defineEndpointDescriptor({
  id: "pinterest.billing.ssioInsertionOrderEdit",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/ssio/insertion_orders",
  summary: "Edit insertion order through SSIO.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.billing.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ads_manager_order_line_id","wireName":"ads_manager_order_line_id","location":"body","required":false,"nullable":false},
    {"name":"agency_link","wireName":"agency_link","location":"body","required":false,"nullable":false},
    {"name":"billing_contact_email","wireName":"billing_contact_email","location":"body","required":false,"nullable":false},
    {"name":"billing_contact_firstname","wireName":"billing_contact_firstname","location":"body","required":false,"nullable":false},
    {"name":"billing_contact_lastname","wireName":"billing_contact_lastname","location":"body","required":false,"nullable":false},
    {"name":"budget_amount","wireName":"budget_amount","location":"body","required":false,"nullable":false},
    {"name":"end_date","wireName":"end_date","location":"body","required":false,"nullable":false},
    {"name":"media_contact_email","wireName":"media_contact_email","location":"body","required":false,"nullable":false},
    {"name":"media_contact_firstname","wireName":"media_contact_firstname","location":"body","required":false,"nullable":false},
    {"name":"media_contact_lastname","wireName":"media_contact_lastname","location":"body","required":false,"nullable":false},
    {"name":"oracle_line_id","wireName":"oracle_line_id","location":"body","required":false,"nullable":false},
    {"name":"po_number","wireName":"po_number","location":"body","required":false,"nullable":false},
    {"name":"salesforce_order_id","wireName":"salesforce_order_id","location":"body","required":false,"nullable":false},
    {"name":"salesforce_order_line_id","wireName":"salesforce_order_line_id","location":"body","required":false,"nullable":false},
    {"name":"start_date","wireName":"start_date","location":"body","required":false,"nullable":false},
    {"name":"user_email","wireName":"user_email","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ads_manager_order_line_id: Schema.optional(Schema.String),
    agency_link: Schema.optional(Schema.String),
    billing_contact_email: Schema.optional(Schema.String),
    billing_contact_firstname: Schema.optional(Schema.String),
    billing_contact_lastname: Schema.optional(Schema.String),
    budget_amount: Schema.optional(Schema.Number),
    end_date: Schema.optional(Schema.String),
    media_contact_email: Schema.optional(Schema.String),
    media_contact_firstname: Schema.optional(Schema.String),
    media_contact_lastname: Schema.optional(Schema.String),
    oracle_line_id: Schema.optional(Schema.String),
    po_number: Schema.optional(Schema.String),
    salesforce_order_id: Schema.optional(Schema.String),
    salesforce_order_line_id: Schema.optional(Schema.String),
    start_date: Schema.optional(Schema.String),
    user_email: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SsioInsertionOrderEditResponse,
});

export const pinterest_billing_ssioInsertionOrdersStatusGetByAdAccount = defineEndpointDescriptor({
  id: "pinterest.billing.ssioInsertionOrdersStatusGetByAdAccount",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ssio/insertion_orders/status",
  summary: "Get insertion order status by ad account id.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.billing.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.SsioInsertionOrdersStatusGetByAdAccountResponse,
});

export const pinterest_billing_ssioInsertionOrdersStatusGetByPinOrderId = defineEndpointDescriptor({
  id: "pinterest.billing.ssioInsertionOrdersStatusGetByPinOrderId",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ssio/insertion_orders/{pin_order_id}/status",
  summary: "Get insertion order status by pin order id.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.billing.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"pinOrderId","wireName":"pinOrderId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    pinOrderId: Schema.String,
  }),
  outputSchema: Models.SsioInsertionOrdersStatusGetByPinOrderIdResponse,
});

export const pinterest_billing_ssioOrderLinesGetByAdAccount = defineEndpointDescriptor({
  id: "pinterest.billing.ssioOrderLinesGetByAdAccount",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/ssio/order_lines",
  summary: "Get Salesforce order lines by ad account id.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.billing.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"pinOrderId","wireName":"pinOrderId","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    pinOrderId: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.SsioOrderLinesGetByAdAccountResponse,
});

export const pinterest_businessAccessRelationships_systemUserUpdate = defineEndpointDescriptor({
  id: "pinterest.businessAccessRelationships.systemUserUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/businesses/{business_id}/system_users/{system_user_id}",
  summary: "Update a system user information.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:read","biz_access:write"],
  capabilities: ["pinterest.businessAccessRelationships.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"systemUserId","wireName":"systemUserId","location":"path","required":true,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    systemUserId: Schema.String,
    name: Schema.String,
  }),
  outputSchema: Models.SystemUserUpdateResponse,
});

export const pinterest_resources_targetingOptionsGet = defineEndpointDescriptor({
  id: "pinterest.resources.targetingOptionsGet",
  platform: "pinterest",
  method: "GET",
  path: "/resources/targeting/{targeting_type}",
  summary: "Get targeting options",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.resources.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"targetingType","wireName":"targetingType","location":"path","required":true,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"clientId","wireName":"clientId","location":"query","required":false,"nullable":false},
    {"name":"oauthSignature","wireName":"oauthSignature","location":"query","required":false,"nullable":false},
    {"name":"timestamp","wireName":"timestamp","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    targetingType: Schema.String,
    adAccountId: Schema.optional(Schema.String),
    clientId: Schema.optional(Schema.String),
    oauthSignature: Schema.optional(Schema.String),
    timestamp: Schema.optional(Schema.String),
  }),
  outputSchema: Models.TargetingOptionsGetResponse,
});

export const pinterest_targetingTemplate_targetingTemplateCreate = defineEndpointDescriptor({
  id: "pinterest.targetingTemplate.targetingTemplateCreate",
  platform: "pinterest",
  method: "POST",
  path: "/ad_accounts/{ad_account_id}/targeting_templates",
  summary: "Create targeting templates",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.targetingTemplate.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"auto_targeting_enabled","wireName":"auto_targeting_enabled","location":"body","required":false,"nullable":false},
    {"name":"keywords","wireName":"keywords","location":"body","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false},
    {"name":"placement_group","wireName":"placement_group","location":"body","required":false,"nullable":false},
    {"name":"targeting_attributes","wireName":"targeting_attributes","location":"body","required":true,"nullable":false},
    {"name":"tracking_urls","wireName":"tracking_urls","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    auto_targeting_enabled: Schema.optional(Schema.Boolean),
    keywords: Schema.optional(Schema.Array(Schema.suspend(() => Models.Inline9154))),
    name: Schema.String,
    placement_group: Schema.optional(Schema.String),
    targeting_attributes: Models.Inline9155,
    tracking_urls: Schema.optional(Models.Inline9156),
  }),
  outputSchema: Models.TargetingTemplateCreateResponse,
});

export const pinterest_targetingTemplate_targetingTemplateList = defineEndpointDescriptor({
  id: "pinterest.targetingTemplate.targetingTemplateList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/targeting_templates",
  summary: "List targeting templates",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.targetingTemplate.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"includeSizing","wireName":"includeSizing","location":"query","required":false,"nullable":false},
    {"name":"searchQuery","wireName":"searchQuery","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
    includeSizing: Schema.optional(Schema.Boolean),
    searchQuery: Schema.optional(Schema.String),
  }),
  outputSchema: Models.TargetingTemplateListResponse,
});

export const pinterest_targetingTemplate_targetingTemplateUpdate = defineEndpointDescriptor({
  id: "pinterest.targetingTemplate.targetingTemplateUpdate",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/targeting_templates",
  summary: "Update targeting templates",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.targetingTemplate.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"id","wireName":"id","location":"body","required":true,"nullable":false},
    {"name":"operation_type","wireName":"operation_type","location":"body","required":true,"nullable":false},
    {"name":"targeting_attributes","wireName":"targeting_attributes","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    id: Schema.String,
    operation_type: Schema.String,
    targeting_attributes: Schema.optional(Models.Inline9160),
  }),
  outputSchema: Models.TargetingTemplateUpdateResponse,
});

export const pinterest_adAccounts_templatesList = defineEndpointDescriptor({
  id: "pinterest.adAccounts.templatesList",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/templates",
  summary: "List templates",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.adAccounts.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Unknown),
  }),
  outputSchema: Models.TemplatesListResponse,
});

export const pinterest_termsOfService_termsOfServiceGet = defineEndpointDescriptor({
  id: "pinterest.termsOfService.termsOfServiceGet",
  platform: "pinterest",
  method: "GET",
  path: "/ad_accounts/{ad_account_id}/terms_of_service",
  summary: "Get terms of service",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.termsOfService.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"includeHtml","wireName":"includeHtml","location":"query","required":false,"nullable":false},
    {"name":"tosType","wireName":"tosType","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    includeHtml: Schema.optional(Schema.Boolean),
    tosType: Schema.optional(Schema.String),
  }),
  outputSchema: Models.TermsOfServiceGetResponse,
});

export const pinterest_terms_termsRelatedList = defineEndpointDescriptor({
  id: "pinterest.terms.termsRelatedList",
  platform: "pinterest",
  method: "GET",
  path: "/terms/related",
  summary: "List related terms",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.terms.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"terms","wireName":"terms","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    terms: Schema.Array(Schema.String),
  }),
  outputSchema: Models.TermsRelatedListResponse,
});

export const pinterest_terms_termsSuggestedList = defineEndpointDescriptor({
  id: "pinterest.terms.termsSuggestedList",
  platform: "pinterest",
  method: "GET",
  path: "/terms/suggested",
  summary: "List suggested terms",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["ads:read"],
  capabilities: ["pinterest.terms.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"term","wireName":"term","location":"query","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    term: Schema.String,
    limit: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.TermsSuggestedListResponse,
});

export const pinterest_oauth_tokenRevoke = defineEndpointDescriptor({
  id: "pinterest.oauth.tokenRevoke",
  platform: "pinterest",
  method: "POST",
  path: "/oauth/token/revoke",
  summary: "Revoke a token",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["pinterest.oauth.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["basic"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.TokenRevokeResponse,
});

export const pinterest_keywords_trendingKeywordsList = defineEndpointDescriptor({
  id: "pinterest.keywords.trendingKeywordsList",
  platform: "pinterest",
  method: "GET",
  path: "/trends/keywords/{region}/top/{trend_type}",
  summary: "List trending keywords",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.keywords.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"region","wireName":"region","location":"path","required":true,"nullable":false},
    {"name":"trendType","wireName":"trendType","location":"path","required":true,"nullable":false},
    {"name":"interests","wireName":"interests","location":"query","required":false,"nullable":false},
    {"name":"genders","wireName":"genders","location":"query","required":false,"nullable":false},
    {"name":"ages","wireName":"ages","location":"query","required":false,"nullable":false},
    {"name":"includeKeywords","wireName":"includeKeywords","location":"query","required":false,"nullable":false},
    {"name":"normalizeAgainstGroup","wireName":"normalizeAgainstGroup","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"includeDemographics","wireName":"includeDemographics","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    region: Schema.String,
    trendType: Schema.String,
    interests: Schema.optional(Schema.Array(Schema.String)),
    genders: Schema.optional(Schema.Array(Schema.String)),
    ages: Schema.optional(Schema.Array(Schema.String)),
    includeKeywords: Schema.optional(Schema.Array(Schema.String)),
    normalizeAgainstGroup: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    includeDemographics: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.TrendingKeywordsListResponse,
});

export const pinterest_trends_trendsEditorialArticlesList = defineEndpointDescriptor({
  id: "pinterest.trends.trendsEditorialArticlesList",
  platform: "pinterest",
  method: "GET",
  path: "/trends/editorial_articles",
  summary: "Returns editorial articles for a given region",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.trends.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"region","wireName":"region","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    region: Schema.String,
  }),
  outputSchema: Models.TrendsEditorialArticlesListResponse,
});

export const pinterest_trends_trendsFeaturedTopicsList = defineEndpointDescriptor({
  id: "pinterest.trends.trendsFeaturedTopicsList",
  platform: "pinterest",
  method: "GET",
  path: "/trends/topics/featured",
  summary: "Get featured topics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.trends.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"interest","wireName":"interest","location":"query","required":false,"nullable":false},
    {"name":"region","wireName":"region","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    interest: Schema.optional(Schema.String),
    region: Schema.String,
  }),
  outputSchema: Models.TrendsFeaturedTopicsListResponse,
});

export const pinterest_trends_trendsProductCategoriesDetailsList = defineEndpointDescriptor({
  id: "pinterest.trends.trendsProductCategoriesDetailsList",
  platform: "pinterest",
  method: "GET",
  path: "/trends/product_categories/details",
  summary: "Get product category details",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.trends.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"productCategories","wireName":"productCategories","location":"query","required":true,"nullable":false},
    {"name":"region","wireName":"region","location":"query","required":true,"nullable":false},
    {"name":"lookbackWindow","wireName":"lookbackWindow","location":"query","required":false,"nullable":false},
    {"name":"engagementType","wireName":"engagementType","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productCategories: Schema.Array(Schema.String),
    region: Schema.String,
    lookbackWindow: Schema.optional(Schema.Number),
    engagementType: Schema.optional(Schema.String),
  }),
  outputSchema: Models.TrendsProductCategoriesDetailsListResponse,
});

export const pinterest_trends_trendsProductCategoriesTrendingList = defineEndpointDescriptor({
  id: "pinterest.trends.trendsProductCategoriesTrendingList",
  platform: "pinterest",
  method: "GET",
  path: "/trends/product_categories/trending",
  summary: "Get a list of growing Shopping Product Categories",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.trends.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"region","wireName":"region","location":"query","required":true,"nullable":false},
    {"name":"verticals","wireName":"verticals","location":"query","required":false,"nullable":false},
    {"name":"ages","wireName":"ages","location":"query","required":false,"nullable":false},
    {"name":"genders","wireName":"genders","location":"query","required":false,"nullable":false},
    {"name":"engagementType","wireName":"engagementType","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    region: Schema.String,
    verticals: Schema.optional(Schema.Array(Schema.String)),
    ages: Schema.optional(Schema.Array(Schema.String)),
    genders: Schema.optional(Schema.Array(Schema.String)),
    engagementType: Schema.optional(Schema.String),
  }),
  outputSchema: Models.TrendsProductCategoriesTrendingListResponse,
});

export const pinterest_userAccount_unverifyWebsiteDelete = defineEndpointDescriptor({
  id: "pinterest.userAccount.unverifyWebsiteDelete",
  platform: "pinterest",
  method: "DELETE",
  path: "/user_account/websites",
  summary: "Unverify website",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["user_accounts:write"],
  capabilities: ["pinterest.userAccount.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"website","wireName":"website","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    website: Schema.String,
  }),
  outputSchema: Models.UnverifyWebsiteDeleteResponse,
});

export const pinterest_audienceSharing_updateAdAccountToAdAccountSharedAudience = defineEndpointDescriptor({
  id: "pinterest.audienceSharing.updateAdAccountToAdAccountSharedAudience",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/audiences/ad_accounts/shared",
  summary: "Update audience sharing between ad accounts",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.audienceSharing.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"audience_id","wireName":"audience_id","location":"body","required":true,"nullable":false},
    {"name":"operation_type","wireName":"operation_type","location":"body","required":true,"nullable":false},
    {"name":"recipient_account_ids","wireName":"recipient_account_ids","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    audience_id: Models.Inline7618,
    operation_type: Schema.String,
    recipient_account_ids: Schema.Array(Schema.Unknown),
  }),
  outputSchema: Models.UpdateAdAccountToAdAccountSharedAudienceResponse,
});

export const pinterest_audienceSharing_updateAdAccountToBusinessSharedAudience = defineEndpointDescriptor({
  id: "pinterest.audienceSharing.updateAdAccountToBusinessSharedAudience",
  platform: "pinterest",
  method: "PATCH",
  path: "/ad_accounts/{ad_account_id}/audiences/businesses/shared",
  summary: "Update audience sharing from an ad account to businesses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["ads:write"],
  capabilities: ["pinterest.audienceSharing.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"audience_id","wireName":"audience_id","location":"body","required":true,"nullable":false},
    {"name":"operation_type","wireName":"operation_type","location":"body","required":true,"nullable":false},
    {"name":"recipient_business_ids","wireName":"recipient_business_ids","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    audience_id: Models.Inline7623,
    operation_type: Schema.String,
    recipient_business_ids: Schema.Array(Schema.Unknown),
  }),
  outputSchema: Models.UpdateAdAccountToBusinessSharedAudienceResponse,
});

export const pinterest_businessAccessRelationships_updateBusinessMemberships = defineEndpointDescriptor({
  id: "pinterest.businessAccessRelationships.updateBusinessMemberships",
  platform: "pinterest",
  method: "PATCH",
  path: "/businesses/{business_id}/members",
  summary: "Update member's business role",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:write"],
  capabilities: ["pinterest.businessAccessRelationships.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
  }),
  outputSchema: Models.UpdateBusinessMembershipsResponse,
});

export const pinterest_audienceSharing_updateBusinessToAdAccountSharedAudience = defineEndpointDescriptor({
  id: "pinterest.audienceSharing.updateBusinessToAdAccountSharedAudience",
  platform: "pinterest",
  method: "PATCH",
  path: "/businesses/{business_id}/audiences/ad_accounts/shared",
  summary: "Update audience sharing from a business to ad accounts",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:write"],
  capabilities: ["pinterest.audienceSharing.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"audience_id","wireName":"audience_id","location":"body","required":true,"nullable":false},
    {"name":"operation_type","wireName":"operation_type","location":"body","required":true,"nullable":false},
    {"name":"recipient_account_ids","wireName":"recipient_account_ids","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    audience_id: Models.Inline9307,
    operation_type: Schema.String,
    recipient_account_ids: Schema.Array(Schema.Unknown),
  }),
  outputSchema: Models.UpdateBusinessToAdAccountSharedAudienceResponse,
});

export const pinterest_audienceSharing_updateBusinessToBusinessSharedAudience = defineEndpointDescriptor({
  id: "pinterest.audienceSharing.updateBusinessToBusinessSharedAudience",
  platform: "pinterest",
  method: "PATCH",
  path: "/businesses/{business_id}/audiences/businesses/shared",
  summary: "Update audience sharing between businesses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:write"],
  capabilities: ["pinterest.audienceSharing.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"audience_id","wireName":"audience_id","location":"body","required":true,"nullable":false},
    {"name":"operation_type","wireName":"operation_type","location":"body","required":true,"nullable":false},
    {"name":"recipient_business_ids","wireName":"recipient_business_ids","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    audience_id: Models.Inline9312,
    operation_type: Schema.String,
    recipient_business_ids: Schema.Array(Schema.Unknown),
  }),
  outputSchema: Models.UpdateBusinessToBusinessSharedAudienceResponse,
});

export const pinterest_businessAccessAssets_updatePartnerAssetAccessHandlerImpl = defineEndpointDescriptor({
  id: "pinterest.businessAccessAssets.updatePartnerAssetAccessHandlerImpl",
  platform: "pinterest",
  method: "PATCH",
  path: "/businesses/{business_id}/partners/assets",
  summary: "Assign/Update partner asset permissions",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["biz_access:write"],
  capabilities: ["pinterest.businessAccessAssets.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"businessId","wireName":"businessId","location":"path","required":true,"nullable":false},
    {"name":"accesses","wireName":"accesses","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    businessId: Schema.String,
    accesses: Schema.Array(Schema.suspend(() => Models.Inline9388)),
  }),
  outputSchema: Models.UpdatePartnerAssetAccessHandlerImplResponse,
});

export const pinterest_userAccount_userAccountAnalytics = defineEndpointDescriptor({
  id: "pinterest.userAccount.userAccountAnalytics",
  platform: "pinterest",
  method: "GET",
  path: "/user_account/analytics",
  summary: "Get user account analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.userAccount.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"fromClaimedContent","wireName":"fromClaimedContent","location":"query","required":false,"nullable":false},
    {"name":"pinFormat","wireName":"pinFormat","location":"query","required":false,"nullable":false},
    {"name":"appTypes","wireName":"appTypes","location":"query","required":false,"nullable":false},
    {"name":"contentType","wireName":"contentType","location":"query","required":false,"nullable":false},
    {"name":"source","wireName":"source","location":"query","required":false,"nullable":false},
    {"name":"metricTypes","wireName":"metricTypes","location":"query","required":false,"nullable":false},
    {"name":"splitField","wireName":"splitField","location":"query","required":false,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    startDate: Schema.String,
    endDate: Schema.String,
    fromClaimedContent: Schema.optional(Schema.String),
    pinFormat: Schema.optional(Schema.String),
    appTypes: Schema.optional(Schema.String),
    contentType: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    metricTypes: Schema.optional(Schema.Array(Schema.String)),
    splitField: Schema.optional(Schema.String),
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.UserAccountAnalyticsResponse,
});

export const pinterest_userAccount_userAccountAnalyticsTopPins = defineEndpointDescriptor({
  id: "pinterest.userAccount.userAccountAnalyticsTopPins",
  platform: "pinterest",
  method: "GET",
  path: "/user_account/analytics/top_pins",
  summary: "Get user account top pins analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["pins:read","user_accounts:read"],
  capabilities: ["pinterest.userAccount.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"sortBy","wireName":"sortBy","location":"query","required":true,"nullable":false},
    {"name":"fromClaimedContent","wireName":"fromClaimedContent","location":"query","required":false,"nullable":false},
    {"name":"pinFormat","wireName":"pinFormat","location":"query","required":false,"nullable":false},
    {"name":"appTypes","wireName":"appTypes","location":"query","required":false,"nullable":false},
    {"name":"contentType","wireName":"contentType","location":"query","required":false,"nullable":false},
    {"name":"source","wireName":"source","location":"query","required":false,"nullable":false},
    {"name":"metricTypes","wireName":"metricTypes","location":"query","required":false,"nullable":false},
    {"name":"numOfPins","wireName":"numOfPins","location":"query","required":false,"nullable":false},
    {"name":"createdInLastNDays","wireName":"createdInLastNDays","location":"query","required":false,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    startDate: Schema.String,
    endDate: Schema.String,
    sortBy: Schema.String,
    fromClaimedContent: Schema.optional(Schema.String),
    pinFormat: Schema.optional(Schema.String),
    appTypes: Schema.optional(Schema.String),
    contentType: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    metricTypes: Schema.optional(Schema.Array(Schema.String)),
    numOfPins: Schema.optional(Schema.Number),
    createdInLastNDays: Schema.optional(Schema.Number),
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.UserAccountAnalyticsTopPinsResponse,
});

export const pinterest_userAccount_userAccountAnalyticsTopVideoPins = defineEndpointDescriptor({
  id: "pinterest.userAccount.userAccountAnalyticsTopVideoPins",
  platform: "pinterest",
  method: "GET",
  path: "/user_account/analytics/top_video_pins",
  summary: "Get user account top video pins analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["pins:read","user_accounts:read"],
  capabilities: ["pinterest.userAccount.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false},
    {"name":"sortBy","wireName":"sortBy","location":"query","required":true,"nullable":false},
    {"name":"fromClaimedContent","wireName":"fromClaimedContent","location":"query","required":false,"nullable":false},
    {"name":"pinFormat","wireName":"pinFormat","location":"query","required":false,"nullable":false},
    {"name":"appTypes","wireName":"appTypes","location":"query","required":false,"nullable":false},
    {"name":"contentType","wireName":"contentType","location":"query","required":false,"nullable":false},
    {"name":"source","wireName":"source","location":"query","required":false,"nullable":false},
    {"name":"metricTypes","wireName":"metricTypes","location":"query","required":false,"nullable":false},
    {"name":"numOfPins","wireName":"numOfPins","location":"query","required":false,"nullable":false},
    {"name":"createdInLastNDays","wireName":"createdInLastNDays","location":"query","required":false,"nullable":false},
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    startDate: Schema.String,
    endDate: Schema.String,
    sortBy: Schema.String,
    fromClaimedContent: Schema.optional(Schema.String),
    pinFormat: Schema.optional(Schema.String),
    appTypes: Schema.optional(Schema.String),
    contentType: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    metricTypes: Schema.optional(Schema.Array(Schema.String)),
    numOfPins: Schema.optional(Schema.Number),
    createdInLastNDays: Schema.optional(Schema.Number),
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.UserAccountAnalyticsTopVideoPinsResponse,
});

export const pinterest_userAccount_userAccountFollowedInterests = defineEndpointDescriptor({
  id: "pinterest.userAccount.userAccountFollowedInterests",
  platform: "pinterest",
  method: "GET",
  path: "/users/{username}/interests/follow",
  summary: "List following interests",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.userAccount.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"username","wireName":"username","location":"path","required":true,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    username: Schema.String,
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.UserAccountFollowedInterestsResponse,
});

export const pinterest_userAccount_userAccountGet = defineEndpointDescriptor({
  id: "pinterest.userAccount.userAccountGet",
  platform: "pinterest",
  method: "GET",
  path: "/user_account",
  summary: "Get user account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.userAccount.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.UserAccountGetResponse,
});

export const pinterest_userAccount_userFollowingGet = defineEndpointDescriptor({
  id: "pinterest.userAccount.userFollowingGet",
  platform: "pinterest",
  method: "GET",
  path: "/user_account/following",
  summary: "List following",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.userAccount.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"explicitFollowing","wireName":"explicitFollowing","location":"query","required":false,"nullable":false},
    {"name":"feedType","wireName":"feedType","location":"query","required":false,"nullable":false},
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    explicitFollowing: Schema.optional(Schema.Boolean),
    feedType: Schema.optional(Schema.String),
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.UserFollowingGetResponse,
});

export const pinterest_userAccount_userWebsitesGet = defineEndpointDescriptor({
  id: "pinterest.userAccount.userWebsitesGet",
  platform: "pinterest",
  method: "GET",
  path: "/user_account/websites",
  summary: "Get user websites",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.userAccount.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"bookmark","wireName":"bookmark","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    bookmark: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }),
  outputSchema: Models.UserWebsitesGetResponse,
});

export const pinterest_userAccount_verifyWebsiteUpdate = defineEndpointDescriptor({
  id: "pinterest.userAccount.verifyWebsiteUpdate",
  platform: "pinterest",
  method: "POST",
  path: "/user_account/websites",
  summary: "Verify website",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["user_accounts:write"],
  capabilities: ["pinterest.userAccount.manage"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false},
    {"name":"verification_method","wireName":"verification_method","location":"body","required":false,"nullable":false},
    {"name":"website","wireName":"website","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
    verification_method: Schema.optional(Models.Inline11592),
    website: Schema.optional(Schema.String),
  }),
  outputSchema: Models.VerifyWebsiteUpdateResponse,
});

export const pinterest_userAccount_websiteVerificationGet = defineEndpointDescriptor({
  id: "pinterest.userAccount.websiteVerificationGet",
  platform: "pinterest",
  method: "GET",
  path: "/user_account/websites/verification",
  summary: "Get user verification code for website claiming",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["user_accounts:read"],
  capabilities: ["pinterest.userAccount.read"],
  rateLimitBucket: "pinterest-api",
  authSchemes: ["pinterest_oauth2","client_credentials"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.WebsiteVerificationGetResponse,
});

export const endpointDescriptors = [pinterest_adAccounts_adAccountAnalytics, pinterest_resources_adAccountCountriesGet, pinterest_audienceSharing_adAccountsAudiencesSharedAccountsList, pinterest_adAccounts_adAccountsCreate, pinterest_adAccounts_adAccountsGet, pinterest_adAccounts_adAccountsList, pinterest_leadAds_adAccountsSubscriptionsDelById, pinterest_leadAds_adAccountsSubscriptionsGetById, pinterest_leadAds_adAccountsSubscriptionsGetList, pinterest_leadAds_adAccountsSubscriptionsPost, pinterest_adAccounts_adAccountTargetingAnalyticsGet, pinterest_adGroups_adGroupsAnalytics, pinterest_adGroups_adGroupsAudienceSizing, pinterest_adGroups_adGroupsBidFloorGet, pinterest_adGroups_adGroupsCreate, pinterest_adGroups_adGroupsDynamicTitlesDownloadCsv, pinterest_adGroups_adGroupsDynamicTitlesGetStatus, pinterest_adGroups_adGroupsDynamicTitlesGetUploadUrl, pinterest_adGroups_adGroupsDynamicTitlesProcessCsv, pinterest_adGroups_adGroupsGet, pinterest_adGroups_adGroupsList, pinterest_adGroups_adGroupsTargetingAnalyticsGet, pinterest_adGroups_adGroupsUpdate, pinterest_campaigns_adPinsAnalytics, pinterest_ads_adPreviewsCreate, pinterest_ads_adsAnalytics, pinterest_ads_adsCreate, pinterest_billing_adsCreditRedeem, pinterest_billing_adsCreditsDiscountsGet, pinterest_ads_adsGet, pinterest_ads_adsList, pinterest_ads_adsUpdate, pinterest_ads_adTargetingAnalyticsGet, pinterest_advancedAuction_advancedAuctionItemsGetPost, pinterest_advancedAuction_advancedAuctionItemsSubmitPost, pinterest_conversions_advertiserDefinedEventsCreate, pinterest_conversions_advertiserDefinedEventsDelete, pinterest_conversions_advertiserDefinedEventsGet, pinterest_conversions_advertiserDefinedEventsUpdate, pinterest_adAccounts_analyticsCreateConversionProductReport, pinterest_adAccounts_analyticsCreateMmmReport, pinterest_adAccounts_analyticsCreateReport, pinterest_adAccounts_analyticsCreateTemplateReport, pinterest_adAccounts_analyticsGetConversionProductReport, pinterest_adAccounts_analyticsGetMmmReport, pinterest_adAccounts_analyticsGetReport, pinterest_businessAccessInvite_assetAccessRequestsCreate, pinterest_businessAccessAssets_assetGroupCreate, pinterest_businessAccessAssets_assetGroupDelete, pinterest_businessAccessAssets_assetGroupUpdate, pinterest_audienceInsights_audienceInsightsGet, pinterest_audienceInsights_audienceInsightsScopeAndTypeGet, pinterest_audiences_audiencesCreate, pinterest_audiences_audiencesGet, pinterest_audiences_audiencesList, pinterest_audiences_audiencesUpdate, pinterest_billing_billingInvoiceDownloadGet, pinterest_billing_billingInvoicesGet, pinterest_billing_billingProfilesGet, pinterest_boards_boardsCreate, pinterest_boards_boardsDelete, pinterest_boards_boardSectionsCreate, pinterest_boards_boardSectionsDelete, pinterest_boards_boardSectionsList, pinterest_boards_boardSectionsListPins, pinterest_boards_boardSectionsUpdate, pinterest_boards_boardsGet, pinterest_boards_boardsList, pinterest_boards_boardsListPins, pinterest_boards_boardsUpdate, pinterest_userAccount_boardsUserFollowsList, pinterest_businessAccessRelationships_brandAccountsCreate, pinterest_businessAccessRelationships_brandAccountsUpdate, pinterest_bulk_bulkDownloadCreate, pinterest_bulk_bulkRequestGet, pinterest_bulk_bulkUpsertCreate, pinterest_audienceSharing_businessAccountAudiencesSharedAccountsList, pinterest_businessAccessAssets_businessAssetMembersGet, pinterest_businessAccessAssets_businessAssetPartnersGet, pinterest_businessAccessAssets_businessAssetsGet, pinterest_businessAccessAssets_businessMemberAssetsGet, pinterest_businessAccessAssets_businessMembersAssetAccessDelete, pinterest_businessAccessAssets_businessMembersAssetAccessUpdate, pinterest_businessAccessAssets_businessPartnerAssetAccessGet, pinterest_ads_campaignAdPreviewCreate, pinterest_ads_campaignAdPreviewDelete, pinterest_ads_campaignAdPreviewRead, pinterest_campaigns_campaignsAnalytics, pinterest_campaigns_campaignsCreate, pinterest_campaigns_campaignsGet, pinterest_campaigns_campaignsList, pinterest_campaigns_campaignsUpdate, pinterest_campaigns_campaignTargetingAnalyticsGet, pinterest_businessAccessInvite_cancelInvitesOrRequests, pinterest_catalogs_catalogsAvailableFilterValues, pinterest_catalogs_catalogsCreate, pinterest_catalogs_catalogsList, pinterest_catalogSupplemental_catalogsLocalInventoryItemsBatchOperate, pinterest_catalogSupplemental_catalogsLocalInventoryItemsPost, pinterest_catalogSupplemental_catalogsLocalStoresCreate, pinterest_catalogSupplemental_catalogsLocalStoresDelete, pinterest_catalogSupplemental_catalogsLocalStoresList, pinterest_catalogSupplemental_catalogsLocalStoresUpdate, pinterest_catalogProductGroups_catalogsProductGroupPinsList, pinterest_catalogProductGroups_catalogsProductGroupsCreate, pinterest_catalogProductGroups_catalogsProductGroupsCreateMany, pinterest_catalogProductGroups_catalogsProductGroupsDelete, pinterest_catalogProductGroups_catalogsProductGroupsDeleteMany, pinterest_catalogProductGroups_catalogsProductGroupsGet, pinterest_catalogProductGroups_catalogsProductGroupsList, pinterest_catalogProductGroups_catalogsProductGroupsProductCountsGet, pinterest_catalogProductGroups_catalogsProductGroupsUpdate, pinterest_catalogSupplemental_catalogsSupplementalItemsBatchGet, pinterest_conversionDeletionRequests_conversionDeletionRequestCreate, pinterest_conversionDeletionRequests_conversionDeletionRequestDelete, pinterest_conversionDeletionRequests_conversionDeletionRequestGet, pinterest_conversionDeletionRequests_conversionDeletionRequestList, pinterest_conversionEqs_conversionEqsList, pinterest_conversionTags_conversionTagsCreate, pinterest_conversionTags_conversionTagsGet, pinterest_conversionTags_conversionTagsList, pinterest_keywords_countryKeywordsMetricsGet, pinterest_businessAccessInvite_createAssetInvites, pinterest_businessAccessInvite_createMembershipOrPartnershipInvites, pinterest_customerLists_customerListsCreate, pinterest_customerLists_customerListsGet, pinterest_customerLists_customerListsList, pinterest_customerLists_customerListsUpdate, pinterest_customerListUploads_customerListUploadsCreate, pinterest_customerListUploads_customerListUploadsGet, pinterest_customerListUploads_customerListUploadsRun, pinterest_customerSegment_customerSegmentCreate, pinterest_customerSegment_customerSegmentList, pinterest_customerSegment_customerSegmentUpdate, pinterest_businessAccessRelationships_deleteBusinessMembership, pinterest_businessAccessRelationships_deleteBusinessPartners, pinterest_businessAccessAssets_deletePartnerAssetAccessHandlerImpl, pinterest_resources_deliveryMetricsGet, pinterest_conversionEvents_eventsCreate, pinterest_catalogFeeds_feedProcessingResultsList, pinterest_catalogFeeds_feedsCreate, pinterest_catalogFeeds_feedsDelete, pinterest_catalogFeeds_feedsGet, pinterest_catalogFeeds_feedsIngest, pinterest_catalogFeeds_feedsList, pinterest_catalogFeeds_feedsUpdate, pinterest_userAccount_followersList, pinterest_userAccount_followUserUpdate, pinterest_adGroups_getAdGroupsByPromotionIdsList, pinterest_businessAccessRelationships_getBusinessEmployers, pinterest_businessAccessRelationships_getBusinessMembers, pinterest_businessAccessRelationships_getBusinessPartners, pinterest_campaigns_getCampaignDeliveryEstimates, pinterest_businessAccessInvite_getInvites, pinterest_integrations_integrationsCommerceDel, pinterest_integrations_integrationsCommerceGet, pinterest_integrations_integrationsCommercePatch, pinterest_integrations_integrationsCommercePost, pinterest_integrations_integrationsGetById, pinterest_integrations_integrationsGetList, pinterest_integrations_integrationsLogsPost, pinterest_resources_interestTargetingOptionsGet, pinterest_catalogItems_itemsBatchGet, pinterest_catalogItems_itemsBatchPost, pinterest_catalogFeeds_itemsIssuesList, pinterest_catalogItems_itemsPost, pinterest_keywords_keywordsCreate, pinterest_keywords_keywordsGet, pinterest_keywords_keywordsUpdate, pinterest_labels_labelsApply, pinterest_labels_labelsCreate, pinterest_labels_labelsList, pinterest_labels_labelsRemove, pinterest_labels_labelsUpdate, pinterest_leadForms_leadFormGet, pinterest_resources_leadFormQuestionsGet, pinterest_leadForms_leadFormsCreate, pinterest_leadForms_leadFormsList, pinterest_leadForms_leadFormsUpdate, pinterest_leadForms_leadFormTestCreate, pinterest_leadsExport_leadsExportCreate, pinterest_leadsExport_leadsExportGet, pinterest_userAccount_linkedBusinessAccountsGet, pinterest_media_mediaCreate, pinterest_media_mediaGet, pinterest_media_mediaList, pinterest_resources_metricsReadyStateGet, pinterest_msotEvents_msotEventsCreate, pinterest_pins_multiPinsAnalytics, pinterest_notification_notificationPost, pinterest_oauth_oauthConversionToken, pinterest_oauth_oauthToken, pinterest_conversionTags_ocpmEligibleConversionTagsGet, pinterest_orderLines_orderLinesGet, pinterest_orderLines_orderLinesList, pinterest_conversionTags_pageVisitConversionTagsGet, pinterest_pins_pinsAnalytics, pinterest_pins_pinsCreate, pinterest_pins_pinsDelete, pinterest_pins_pinsGet, pinterest_pins_pinsList, pinterest_pins_pinsSave, pinterest_pins_pinsUpdate, pinterest_productGroupPromotions_productGroupPromotionsCreate, pinterest_productGroupPromotions_productGroupPromotionsGet, pinterest_productGroupPromotions_productGroupPromotionsList, pinterest_productGroupPromotions_productGroupPromotionsUpdate, pinterest_productGroupPromotions_productGroupsAnalytics, pinterest_catalogProductGroups_productsByProductGroupFilterList, pinterest_productTags_productTagsBulkAdd, pinterest_productTags_productTagsBulkDelete, pinterest_productTags_productTagsList, pinterest_promotions_promotionsCreate, pinterest_promotions_promotionsDelete, pinterest_promotions_promotionsGet, pinterest_promotions_promotionsList, pinterest_promotions_promotionsUpdate, pinterest_catalogReports_reportsCreate, pinterest_catalogReports_reportsGet, pinterest_catalogReports_reportsStats, pinterest_businessAccessInvite_respondBusinessAccessInvites, pinterest_adAccounts_sandboxDelete, pinterest_schedules_schedulesCreate, pinterest_schedules_schedulesList, pinterest_schedules_schedulesUpdate, pinterest_search_searchPartnerPins, pinterest_search_searchUserBoardsGet, pinterest_search_searchUserPinsList, pinterest_audienceSharing_sharedAudiencesForBusinessList, pinterest_billing_ssioAccountsGet, pinterest_billing_ssioInsertionOrderCreate, pinterest_billing_ssioInsertionOrderEdit, pinterest_billing_ssioInsertionOrdersStatusGetByAdAccount, pinterest_billing_ssioInsertionOrdersStatusGetByPinOrderId, pinterest_billing_ssioOrderLinesGetByAdAccount, pinterest_businessAccessRelationships_systemUserUpdate, pinterest_resources_targetingOptionsGet, pinterest_targetingTemplate_targetingTemplateCreate, pinterest_targetingTemplate_targetingTemplateList, pinterest_targetingTemplate_targetingTemplateUpdate, pinterest_adAccounts_templatesList, pinterest_termsOfService_termsOfServiceGet, pinterest_terms_termsRelatedList, pinterest_terms_termsSuggestedList, pinterest_oauth_tokenRevoke, pinterest_keywords_trendingKeywordsList, pinterest_trends_trendsEditorialArticlesList, pinterest_trends_trendsFeaturedTopicsList, pinterest_trends_trendsProductCategoriesDetailsList, pinterest_trends_trendsProductCategoriesTrendingList, pinterest_userAccount_unverifyWebsiteDelete, pinterest_audienceSharing_updateAdAccountToAdAccountSharedAudience, pinterest_audienceSharing_updateAdAccountToBusinessSharedAudience, pinterest_businessAccessRelationships_updateBusinessMemberships, pinterest_audienceSharing_updateBusinessToAdAccountSharedAudience, pinterest_audienceSharing_updateBusinessToBusinessSharedAudience, pinterest_businessAccessAssets_updatePartnerAssetAccessHandlerImpl, pinterest_userAccount_userAccountAnalytics, pinterest_userAccount_userAccountAnalyticsTopPins, pinterest_userAccount_userAccountAnalyticsTopVideoPins, pinterest_userAccount_userAccountFollowedInterests, pinterest_userAccount_userAccountGet, pinterest_userAccount_userFollowingGet, pinterest_userAccount_userWebsitesGet, pinterest_userAccount_verifyWebsiteUpdate, pinterest_userAccount_websiteVerificationGet] as const;
