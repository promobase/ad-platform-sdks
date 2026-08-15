// @generated
// fingerprint: sha256:92c04e68bf043744264fa0c03a9e5011308b3abc9571c74a89d9d4fa4d429103
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const snapchat_adsAPI_accessToken = defineEndpointDescriptor({
  id: "snapchat.adsAPI.accessToken",
  platform: "snapchat",
  method: "POST",
  path: "https://accounts.snapchat.com/login/oauth2/access_token",
  summary: "authentication",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"expires_in","wireName":"expires_in","location":"body","required":true,"nullable":false},
    {"name":"token_type","wireName":"token_type","location":"body","required":true,"nullable":false},
    {"name":"refresh_token","wireName":"refresh_token","location":"body","required":true,"nullable":false},
    {"name":"access_token","wireName":"access_token","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    expires_in: Schema.Number,
    token_type: Schema.String,
    refresh_token: Schema.String,
    access_token: Schema.String,
  }),
  outputSchema: Models.AccessTokenResponse,
});

export const snapchat_adsAPI_accessToken2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.accessToken2",
  platform: "snapchat",
  method: "POST",
  path: "https://accounts.snapchat.com/login/oauth2/access_token",
  summary: "authentication",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"access_token","wireName":"access_token","location":"body","required":true,"nullable":false},
    {"name":"token_type","wireName":"token_type","location":"body","required":true,"nullable":false},
    {"name":"expires_in","wireName":"expires_in","location":"body","required":true,"nullable":false},
    {"name":"refresh_token","wireName":"refresh_token","location":"body","required":true,"nullable":false},
    {"name":"scope","wireName":"scope","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    access_token: Schema.String,
    token_type: Schema.String,
    expires_in: Schema.Number,
    refresh_token: Schema.String,
    scope: Schema.String,
  }),
  outputSchema: Models.AccessTokenResponse,
});

export const snapchat_adsAPI_ad = defineEndpointDescriptor({
  id: "snapchat.adsAPI.ad",
  platform: "snapchat",
  method: "POST",
  path: "/v1/{ad_account_id}/get_ads_by_ids",
  summary: "Example - Fetch Multiple Ads (POST) ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"entity_ids","wireName":"entity_ids","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    entity_ids: Schema.Array(Schema.suspend(() => Models.EntityIdsBody)),
  }),
  outputSchema: Models.AdResponse,
});

export const snapchat_adsAPI_ad10 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.ad10",
  platform: "snapchat",
  method: "GET",
  path: "/v1/campaigns/{campaign_id}/ads",
  summary: "Example - Get all Ads under a Campaign ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.String,
    limit: Schema.optional(Schema.String),
    sort: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdResponse,
});

export const snapchat_adsAPI_ad2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.ad2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/ads",
  summary: "Example - Get all Ads under an Ad Account ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"read_deleted_entities","wireName":"read_deleted_entities","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    read_deleted_entities: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
    sort: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdResponse,
});

export const snapchat_adsAPI_ad3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.ad3",
  platform: "snapchat",
  method: "GET",
  path: "/v1/ads/{ad_id}",
  summary: "Example - Get a specific Ad ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adId","wireName":"adId","location":"path","required":true,"nullable":false},
    {"name":"read_deleted_entities","wireName":"read_deleted_entities","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adId: Schema.String,
    read_deleted_entities: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdResponse,
});

export const snapchat_adsAPI_ad4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.ad4",
  platform: "snapchat",
  method: "DELETE",
  path: "/v1/ads/{ad_id}",
  summary: "Example - Delete an Ad ​",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adId","wireName":"adId","location":"path","required":true,"nullable":false},
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adId: Schema.String,
    ads: Schema.Array(Schema.suspend(() => Models.AdsBody)),
  }),
  outputSchema: Models.AdResponse,
});

export const snapchat_adsAPI_ad5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.ad5",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adsquads/{ad_squad_id}/ads",
  summary: "Example - Create an Ad ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adSquadId","wireName":"adSquadId","location":"path","required":true,"nullable":false},
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adSquadId: Schema.String,
    ads: Schema.Array(Schema.suspend(() => Models.AdsBody)),
  }),
  outputSchema: Models.AdResponse,
});

export const snapchat_adsAPI_ad6 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.ad6",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/adsquads/{ad_squad_id}/ads",
  summary: "Example - Update an Ad ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adSquadId","wireName":"adSquadId","location":"path","required":true,"nullable":false},
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adSquadId: Schema.String,
    ads: Schema.Array(Schema.suspend(() => Models.AdsBody)),
  }),
  outputSchema: Models.AdResponse,
});

export const snapchat_adsAPI_ad7 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.ad7",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adsquads/{ad_squad_id}/ads",
  summary: "Example - Get all Ads under an Ad Squad ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adSquadId","wireName":"adSquadId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adSquadId: Schema.String,
    limit: Schema.optional(Schema.String),
    sort: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdResponse,
});

export const snapchat_adsAPI_ad8 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.ad8",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adsquads/{ad_squad_id}/ads",
  summary: "dynamic-story-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adSquadId","wireName":"adSquadId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adSquadId: Schema.String,
  }),
  outputSchema: Models.AdResponse,
});

export const snapchat_adsAPI_ad9 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.ad9",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adsquads/{ad_squad_id}/ads",
  summary: "lenses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adSquadId","wireName":"adSquadId","location":"path","required":true,"nullable":false},
    {"name":"ads","wireName":"ads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adSquadId: Schema.String,
    ads: Schema.Array(Schema.suspend(() => Models.AdsBody)),
  }),
  outputSchema: Models.AdResponse,
});

export const snapchat_adsAPI_adaccount = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adaccount",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}",
  summary: "ad-accounts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.AdaccountResponse,
});

export const snapchat_adsAPI_adaccount2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adaccount2",
  platform: "snapchat",
  method: "POST",
  path: "/v1/organizations/{organization_id}/adaccounts",
  summary: "ad-accounts",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false},
    {"name":"adaccounts","wireName":"adaccounts","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
    adaccounts: Schema.Array(Schema.suspend(() => Models.AdaccountsBody)),
  }),
  outputSchema: Models.AdaccountResponse,
});

export const snapchat_adsAPI_adaccount3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adaccount3",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/organizations/{organization_id}/adaccounts",
  summary: "ad-accounts",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false},
    {"name":"adaccounts","wireName":"adaccounts","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
    adaccounts: Schema.Array(Schema.suspend(() => Models.AdaccountsBody)),
  }),
  outputSchema: Models.AdaccountResponse,
});

export const snapchat_adsAPI_adaccount4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adaccount4",
  platform: "snapchat",
  method: "GET",
  path: "/v1/organizations/{organization-id}/adaccounts",
  summary: "ad-accounts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
  }),
  outputSchema: Models.AdaccountResponse,
});

export const snapchat_adsAPI_adsquad = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adsquad",
  platform: "snapchat",
  method: "POST",
  path: "/v1/{ad_account_id}/get_adsquads_by_ids",
  summary: "Example - Fetch Multiple Ad Squads (POST) ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"entity_ids","wireName":"entity_ids","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    entity_ids: Schema.Array(Schema.suspend(() => Models.EntityIdsBody)),
  }),
  outputSchema: Models.AdsquadResponse,
});

export const snapchat_adsAPI_adsquad10 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adsquad10",
  platform: "snapchat",
  method: "POST",
  path: "/v1/campaigns/{campaign_id}/adsquads",
  summary: "reach-and-frequency",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"campaign_id","wireName":"campaign_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.String,
    campaign_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdsquadResponse,
});

export const snapchat_adsAPI_adsquad11 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adsquad11",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/campaigns/{campaign_id}/adsquads",
  summary: "reach-and-frequency",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"campaign_id","wireName":"campaign_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.String,
    campaign_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdsquadResponse,
});

export const snapchat_adsAPI_adsquad12 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adsquad12",
  platform: "snapchat",
  method: "GET",
  path: "/v1/mobile_apps/{mobile_app_id}/skadnetwork_adsquads",
  summary: "Example - bid_strategy ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"mobileAppId","wireName":"mobileAppId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    mobileAppId: Schema.String,
  }),
  outputSchema: Models.AdsquadResponse,
});

export const snapchat_adsAPI_adsquad2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adsquad2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/adsquads",
  summary: "Example - Fetch all Ad Squads under an Ad Account ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false},
    {"name":"return_placement_v2","wireName":"return_placement_v2","location":"query","required":false,"nullable":false},
    {"name":"read_deleted_entities","wireName":"read_deleted_entities","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    limit: Schema.optional(Models.LimitEnum),
    sort: Schema.optional(Schema.String),
    return_placement_v2: Schema.optional(Schema.String),
    read_deleted_entities: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdsquadResponse,
});

export const snapchat_adsAPI_adsquad3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adsquad3",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/adaccounts/{ad_account_id}/pixels",
  summary: "snap-pixel",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"adsquads","wireName":"adsquads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    adsquads: Schema.Array(Schema.suspend(() => Models.AdsquadsBody)),
  }),
  outputSchema: Models.AdsquadResponse,
});

export const snapchat_adsAPI_adsquad4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adsquad4",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adsquads/{ad_squad_id}",
  summary: "ad-squads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adSquadId","wireName":"adSquadId","location":"path","required":true,"nullable":false},
    {"name":"return_placement_v2","wireName":"return_placement_v2","location":"query","required":false,"nullable":false},
    {"name":"read_deleted_entities","wireName":"read_deleted_entities","location":"query","required":false,"nullable":false},
    {"name":"targeting_v2","wireName":"targeting_v2","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adSquadId: Schema.String,
    return_placement_v2: Schema.optional(Schema.String),
    read_deleted_entities: Schema.optional(Schema.String),
    targeting_v2: Schema.optional(Models.TargetingV2Enum),
  }),
  outputSchema: Models.AdsquadResponse,
});

export const snapchat_adsAPI_adsquad5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adsquad5",
  platform: "snapchat",
  method: "DELETE",
  path: "/v1/adsquads/{ID}",
  summary: "ad-squads",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"ID","wireName":"ID","location":"body","required":false,"nullable":false},
    {"name":"e","wireName":"e","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    ID: Schema.optional(Schema.String),
    e: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdsquadResponse,
});

export const snapchat_adsAPI_adsquad6 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adsquad6",
  platform: "snapchat",
  method: "POST",
  path: "/v1/campaigns/{campaign_id}/adsquads",
  summary: "Example - Updating an Ad Squad ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"adsquads","wireName":"adsquads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.String,
    adsquads: Schema.Array(Schema.suspend(() => Models.AdsquadsBody)),
  }),
  outputSchema: Models.AdsquadResponse,
});

export const snapchat_adsAPI_adsquad7 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adsquad7",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/campaigns/{campaign_id}/adsquads",
  summary: "ad-squads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"status","wireName":"status","location":"body","required":true,"nullable":false},
    {"name":"request_id","wireName":"request_id","location":"body","required":true,"nullable":false},
    {"name":"adsquads","wireName":"adsquads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.String,
    status: Schema.String,
    request_id: Schema.String,
    adsquads: Schema.Array(Schema.suspend(() => Models.AdsquadsBody)),
  }),
  outputSchema: Models.AdsquadResponse,
});

export const snapchat_adsAPI_adsquad8 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adsquad8",
  platform: "snapchat",
  method: "GET",
  path: "/v1/campaigns/{campaign_id}/adsquads",
  summary: "Example - Fetch all Ad Squads under a Campaign ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false},
    {"name":"return_placement_v2","wireName":"return_placement_v2","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.String,
    limit: Schema.optional(Models.LimitEnum),
    sort: Schema.optional(Schema.String),
    return_placement_v2: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdsquadResponse,
});

export const snapchat_adsAPI_adsquad9 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adsquad9",
  platform: "snapchat",
  method: "POST",
  path: "/v1/campaigns/{campaign_id}/adsquads",
  summary: "Example 1 - Setting up an Ad Squad with automatic placement ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"adsquads","wireName":"adsquads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.String,
    adsquads: Schema.Array(Schema.suspend(() => Models.AdsquadsBody)),
  }),
  outputSchema: Models.AdsquadResponse,
});

export const snapchat_adsAPI_adSquadOutcomeEstimateV2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adSquadOutcomeEstimateV2",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/ad_squad_outcome_estimates_v2",
  summary: "ad-squad-outcomes",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ad_squad_outcome_estimates_v2","wireName":"ad_squad_outcome_estimates_v2","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ad_squad_outcome_estimates_v2: Schema.Array(Schema.suspend(() => Models.AdSquadOutcomeEstimatesV2Body)),
  }),
  outputSchema: Models.AdSquadOutcomeEstimateV2Response,
});

export const snapchat_adsAPI_adSquadUiRenderData = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adSquadUiRenderData",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/ad_squad_ui_render_data",
  summary: "Example ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdSquadUiRenderDataResponse,
});

export const snapchat_adsAPI_adSquadUiRenderData2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adSquadUiRenderData2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/ad_squad_ui_render_data",
  summary: "Example 1 ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ids","wireName":"ids","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ids: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdSquadUiRenderDataResponse,
});

export const snapchat_adsAPI_adSquadUiRenderData3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.adSquadUiRenderData3",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adsquads/{ad_squad_id}/ads",
  summary: "Example ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adSquadId","wireName":"adSquadId","location":"path","required":true,"nullable":false},
    {"name":"ad_squad_ui_render_data","wireName":"ad_squad_ui_render_data","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adSquadId: Schema.String,
    ad_squad_ui_render_data: Schema.Array(Schema.suspend(() => Models.AdSquadUiRenderDataBody)),
  }),
  outputSchema: Models.AdSquadUiRenderDataResponse,
});

export const snapchat_adsAPI_advancedDemographics = defineEndpointDescriptor({
  id: "snapchat.adsAPI.advancedDemographics",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/demographics/advanced_demographics",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.AdvancedDemographicsResponse,
});

export const snapchat_adsAPI_ageGroup = defineEndpointDescriptor({
  id: "snapchat.adsAPI.ageGroup",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/demographics/age_group",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"min_age","wireName":"min_age","location":"query","required":false,"nullable":false},
    {"name":"max_age","wireName":"max_age","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    min_age: Schema.optional(Schema.String),
    max_age: Schema.optional(Models.MaxAgeEnum),
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.AgeGroupResponse,
});

export const snapchat_adsAPI_asyncStatsReport = defineEndpointDescriptor({
  id: "snapchat.adsAPI.asyncStatsReport",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/leads_report",
  summary: "measurement",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"body","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"body","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    async_format: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AsyncStatsReportResponse,
});

export const snapchat_adsAPI_asyncStatsReport2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.asyncStatsReport2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/leads_report",
  summary: "Example Lead Gen Report ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"breakdown","wireName":"breakdown","location":"query","required":false,"nullable":false},
    {"name":"async","wireName":"async","location":"query","required":false,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"query","required":false,"nullable":false},
    {"name":"fields","wireName":"fields","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"dimension","wireName":"dimension","location":"query","required":false,"nullable":false},
    {"name":"pivot","wireName":"pivot","location":"query","required":false,"nullable":false},
    {"name":"action_report_time","wireName":"action_report_time","location":"query","required":false,"nullable":false},
    {"name":"swipe_up_attribution_window","wireName":"swipe_up_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"view_attribution_window","wireName":"view_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"position_stats","wireName":"position_stats","location":"query","required":false,"nullable":false},
    {"name":"omit_empty","wireName":"omit_empty","location":"query","required":false,"nullable":false},
    {"name":"conversion_source_types","wireName":"conversion_source_types","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    breakdown: Schema.optional(Schema.String),
    async: Schema.optional(Schema.String),
    async_format: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    granularity: Models.GranularityEnum,
    test: Schema.optional(Schema.String),
    dimension: Schema.optional(Models.DimensionEnum),
    pivot: Schema.optional(Schema.String),
    action_report_time: Schema.optional(Schema.String),
    swipe_up_attribution_window: Schema.optional(Schema.String),
    view_attribution_window: Schema.optional(Schema.String),
    position_stats: Schema.optional(Schema.String),
    omit_empty: Schema.optional(Schema.String),
    conversion_source_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AsyncStatsReportResponse,
});

export const snapchat_adsAPI_asyncStatsReport3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.asyncStatsReport3",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/stats",
  summary: "measurement",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"breakdown","wireName":"breakdown","location":"query","required":false,"nullable":false},
    {"name":"async","wireName":"async","location":"query","required":false,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"query","required":false,"nullable":false},
    {"name":"fields","wireName":"fields","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"dimension","wireName":"dimension","location":"query","required":false,"nullable":false},
    {"name":"pivot","wireName":"pivot","location":"query","required":false,"nullable":false},
    {"name":"action_report_time","wireName":"action_report_time","location":"query","required":false,"nullable":false},
    {"name":"swipe_up_attribution_window","wireName":"swipe_up_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"view_attribution_window","wireName":"view_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"position_stats","wireName":"position_stats","location":"query","required":false,"nullable":false},
    {"name":"omit_empty","wireName":"omit_empty","location":"query","required":false,"nullable":false},
    {"name":"conversion_source_types","wireName":"conversion_source_types","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    breakdown: Schema.optional(Schema.String),
    async: Schema.optional(Schema.String),
    async_format: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    granularity: Models.GranularityEnum,
    test: Schema.optional(Schema.String),
    dimension: Schema.optional(Models.DimensionEnum),
    pivot: Schema.optional(Schema.String),
    action_report_time: Schema.optional(Schema.String),
    swipe_up_attribution_window: Schema.optional(Schema.String),
    view_attribution_window: Schema.optional(Schema.String),
    position_stats: Schema.optional(Schema.String),
    omit_empty: Schema.optional(Schema.String),
    conversion_source_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AsyncStatsReportResponse,
});

export const snapchat_adsAPI_asyncStatsReport4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.asyncStatsReport4",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/stats_report",
  summary: "measurement",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"breakdown","wireName":"breakdown","location":"query","required":false,"nullable":false},
    {"name":"async","wireName":"async","location":"query","required":false,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"query","required":false,"nullable":false},
    {"name":"fields","wireName":"fields","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"dimension","wireName":"dimension","location":"query","required":false,"nullable":false},
    {"name":"pivot","wireName":"pivot","location":"query","required":false,"nullable":false},
    {"name":"action_report_time","wireName":"action_report_time","location":"query","required":false,"nullable":false},
    {"name":"swipe_up_attribution_window","wireName":"swipe_up_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"view_attribution_window","wireName":"view_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"position_stats","wireName":"position_stats","location":"query","required":false,"nullable":false},
    {"name":"omit_empty","wireName":"omit_empty","location":"query","required":false,"nullable":false},
    {"name":"conversion_source_types","wireName":"conversion_source_types","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    breakdown: Schema.optional(Schema.String),
    async: Schema.optional(Schema.String),
    async_format: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    granularity: Models.GranularityEnum,
    test: Schema.optional(Schema.String),
    dimension: Schema.optional(Models.DimensionEnum),
    pivot: Schema.optional(Schema.String),
    action_report_time: Schema.optional(Schema.String),
    swipe_up_attribution_window: Schema.optional(Schema.String),
    view_attribution_window: Schema.optional(Schema.String),
    position_stats: Schema.optional(Schema.String),
    omit_empty: Schema.optional(Schema.String),
    conversion_source_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AsyncStatsReportResponse,
});

export const snapchat_adsAPI_asyncStatsReport5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.asyncStatsReport5",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/stats",
  summary: "Example I: Fetch Custom Conversions via event source ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"overlap","wireName":"overlap","location":"query","required":false,"nullable":false},
    {"name":"overlap_type","wireName":"overlap_type","location":"query","required":false,"nullable":false},
    {"name":"ids","wireName":"ids","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"query","required":false,"nullable":false},
    {"name":"1","wireName":"1","location":"query","required":false,"nullable":false},
    {"name":"2","wireName":"2","location":"query","required":false,"nullable":false},
    {"name":"3","wireName":"3","location":"query","required":false,"nullable":false},
    {"name":"4","wireName":"4","location":"query","required":false,"nullable":false},
    {"name":"5","wireName":"5","location":"query","required":false,"nullable":false},
    {"name":"6","wireName":"6","location":"query","required":false,"nullable":false},
    {"name":"7","wireName":"7","location":"query","required":false,"nullable":false},
    {"name":"8","wireName":"8","location":"query","required":false,"nullable":false},
    {"name":"9","wireName":"9","location":"query","required":false,"nullable":false},
    {"name":"breakdown","wireName":"breakdown","location":"query","required":false,"nullable":false},
    {"name":"async","wireName":"async","location":"query","required":false,"nullable":false},
    {"name":"fields","wireName":"fields","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"dimension","wireName":"dimension","location":"query","required":false,"nullable":false},
    {"name":"pivot","wireName":"pivot","location":"query","required":false,"nullable":false},
    {"name":"action_report_time","wireName":"action_report_time","location":"query","required":false,"nullable":false},
    {"name":"swipe_up_attribution_window","wireName":"swipe_up_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"view_attribution_window","wireName":"view_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"position_stats","wireName":"position_stats","location":"query","required":false,"nullable":false},
    {"name":"omit_empty","wireName":"omit_empty","location":"query","required":false,"nullable":false},
    {"name":"conversion_source_types","wireName":"conversion_source_types","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    overlap: Schema.optional(Schema.Boolean),
    overlap_type: Schema.optional(Schema.String),
    ids: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
    async_format: Schema.optional(Schema.String),
    "1": Schema.optional(Schema.String),
    "2": Schema.optional(Schema.String),
    "3": Schema.optional(Schema.String),
    "4": Schema.optional(Schema.String),
    "5": Schema.optional(Schema.String),
    "6": Schema.optional(Schema.String),
    "7": Schema.optional(Schema.String),
    "8": Schema.optional(Schema.String),
    "9": Schema.optional(Schema.String),
    breakdown: Schema.optional(Schema.String),
    async: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
    granularity: Models.GranularityEnum,
    test: Schema.optional(Schema.String),
    dimension: Schema.optional(Models.DimensionEnum),
    pivot: Schema.optional(Schema.String),
    action_report_time: Schema.optional(Schema.String),
    swipe_up_attribution_window: Schema.optional(Schema.String),
    view_attribution_window: Schema.optional(Schema.String),
    position_stats: Schema.optional(Schema.String),
    omit_empty: Schema.optional(Schema.String),
    conversion_source_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AsyncStatsReportResponse,
});

export const snapchat_adsAPI_audienceSize = defineEndpointDescriptor({
  id: "snapchat.adsAPI.audienceSize",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ID}/audience_size",
  summary: "audience-size",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"geos","wireName":"geos","location":"body","required":true,"nullable":false},
    {"name":"demographics","wireName":"demographics","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    geos: Schema.Array(Schema.suspend(() => Models.GeosBody)),
    demographics: Schema.Array(Schema.suspend(() => Models.DemographicsBody)),
  }),
  outputSchema: Models.AudienceSizeResponse,
});

export const snapchat_adsAPI_audienceSizeV2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.audienceSizeV2",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/audience_size_v2",
  summary: "audience-size",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false},
    {"name":"status","wireName":"status","location":"body","required":true,"nullable":false},
    {"name":"type","wireName":"type","location":"body","required":true,"nullable":false},
    {"name":"targeting","wireName":"targeting","location":"body","required":true,"nullable":false},
    {"name":"placement","wireName":"placement","location":"body","required":true,"nullable":false},
    {"name":"bid_micro","wireName":"bid_micro","location":"body","required":true,"nullable":false},
    {"name":"auto_bid","wireName":"auto_bid","location":"body","required":true,"nullable":false},
    {"name":"daily_budget_micro","wireName":"daily_budget_micro","location":"body","required":true,"nullable":false},
    {"name":"delivery_constraint","wireName":"delivery_constraint","location":"body","required":true,"nullable":false},
    {"name":"optimization_goal","wireName":"optimization_goal","location":"body","required":true,"nullable":false},
    {"name":"included_content_types","wireName":"included_content_types","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    name: Schema.String,
    status: Schema.String,
    type: Schema.String,
    targeting: Models.TargetingBody,
    placement: Schema.String,
    bid_micro: Schema.Number,
    auto_bid: Schema.Boolean,
    daily_budget_micro: Schema.Number,
    delivery_constraint: Schema.String,
    optimization_goal: Schema.String,
    included_content_types: Schema.Array(Schema.Unknown),
  }),
  outputSchema: Models.AudienceSizeV2Response,
});

export const snapchat_adsAPI_audienceSizeV22 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.audienceSizeV22",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adsquads/{ad_squad_id}/audience_size_v2",
  summary: "audience-size",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adSquadId","wireName":"adSquadId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adSquadId: Schema.String,
  }),
  outputSchema: Models.AudienceSizeV2Response,
});

export const snapchat_adsAPI_bidEstimate = defineEndpointDescriptor({
  id: "snapchat.adsAPI.bidEstimate",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ID}/bid_estimate",
  summary: "bid-estimate",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"optimization_goal","wireName":"optimization_goal","location":"body","required":true,"nullable":false},
    {"name":"targeting","wireName":"targeting","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    optimization_goal: Schema.String,
    targeting: Models.TargetingBody,
  }),
  outputSchema: Models.BidEstimateResponse,
});

export const snapchat_adsAPI_bidEstimate2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.bidEstimate2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adsquads/{ID}/bid_estimate",
  summary: "bid-estimate",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Models.BidEstimateResponse,
});

export const snapchat_adsAPI_billingcenter = defineEndpointDescriptor({
  id: "snapchat.adsAPI.billingcenter",
  platform: "snapchat",
  method: "GET",
  path: "/v1/billingcenters/{billing_center_id}",
  summary: "Example - Retrieving a specific Billing Center ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"billingCenterId","wireName":"billingCenterId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    billingCenterId: Schema.String,
  }),
  outputSchema: Models.BillingcenterResponse,
});

export const snapchat_adsAPI_billingcenter2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.billingcenter2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/organizations/{organization_id}/billingcenters",
  summary: "Example - Retrieving all Billing Centers ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
  }),
  outputSchema: Models.BillingcenterResponse,
});

export const snapchat_adsAPI_billingcenter3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.billingcenter3",
  platform: "snapchat",
  method: "POST",
  path: "/v1/organizations/{organization_id}/billingcenters",
  summary: "Example - Creating a Billing Center ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false},
    {"name":"billingcenters","wireName":"billingcenters","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
    billingcenters: Schema.Array(Schema.suspend(() => Models.BillingcentersBody)),
  }),
  outputSchema: Models.BillingcenterResponse,
});

export const snapchat_adsAPI_billingcenter4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.billingcenter4",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/organizations/{organization_id}/billingcenters",
  summary: "Example - Updating a Billing Center ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false},
    {"name":"billing_center_id","wireName":"billing_center_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
    billing_center_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.BillingcenterResponse,
});

export const snapchat_adsAPI_campaign = defineEndpointDescriptor({
  id: "snapchat.adsAPI.campaign",
  platform: "snapchat",
  method: "POST",
  path: "/v1/{ad_account_id}/get_campaigns_by_ids",
  summary: "Example - Fetch Multiple Campaigns (POST) ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"entity_ids","wireName":"entity_ids","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    entity_ids: Schema.Array(Schema.suspend(() => Models.EntityIdsBody)),
  }),
  outputSchema: Models.CampaignResponse,
});

export const snapchat_adsAPI_campaign2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.campaign2",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/campaigns",
  summary: "Example - Create a Campaign ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"campaigns","wireName":"campaigns","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    campaigns: Schema.Array(Schema.suspend(() => Models.CampaignsBody)),
  }),
  outputSchema: Models.CampaignResponse,
});

export const snapchat_adsAPI_campaign3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.campaign3",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/adaccounts/{ad_account_id}/campaigns",
  summary: "Example - Update a Campaign ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ad_account_id","wireName":"ad_account_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ad_account_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CampaignResponse,
});

export const snapchat_adsAPI_campaign4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.campaign4",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/campaigns",
  summary: "Example - Fetch all Campaigns under an Ad Account ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false},
    {"name":"read_deleted_entities","wireName":"read_deleted_entities","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    limit: Schema.optional(Models.LimitEnum),
    sort: Schema.optional(Schema.String),
    read_deleted_entities: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CampaignResponse,
});

export const snapchat_adsAPI_campaign5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.campaign5",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/campaigns",
  summary: "Example - Creating a Campaign ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"campaigns","wireName":"campaigns","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    campaigns: Schema.Array(Schema.suspend(() => Models.CampaignsBody)),
  }),
  outputSchema: Models.CampaignResponse,
});

export const snapchat_adsAPI_campaign6 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.campaign6",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/campaigns",
  summary: "reach-and-frequency",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"campaigns","wireName":"campaigns","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    campaigns: Schema.Array(Schema.suspend(() => Models.CampaignsBody)),
  }),
  outputSchema: Models.CampaignResponse,
});

export const snapchat_adsAPI_campaign7 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.campaign7",
  platform: "snapchat",
  method: "GET",
  path: "/v1/campaigns/{campaign_id}",
  summary: "Example - Get a specific Campaign ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"read_deleted_entities","wireName":"read_deleted_entities","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.String,
    read_deleted_entities: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CampaignResponse,
});

export const snapchat_adsAPI_campaign8 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.campaign8",
  platform: "snapchat",
  method: "DELETE",
  path: "/v1/campaigns/{ID}",
  summary: "campaigns",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"ID","wireName":"ID","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    ID: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CampaignResponse,
});

export const snapchat_adsAPI_carrier = defineEndpointDescriptor({
  id: "snapchat.adsAPI.carrier",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/device/{OS_TYPE}/os_version",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"oSTYPE","wireName":"oSTYPE","location":"path","required":true,"nullable":false},
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    oSTYPE: Schema.String,
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.CarrierResponse,
});

export const snapchat_adsAPI_carrier2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.carrier2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/device/carrier",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.CarrierResponse,
});

export const snapchat_adsAPI_catalog = defineEndpointDescriptor({
  id: "snapchat.adsAPI.catalog",
  platform: "snapchat",
  method: "GET",
  path: "/v1/catalogs/{catalog_id}",
  summary: "dynamic-product-ads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
  }),
  outputSchema: Models.CatalogResponse,
});

export const snapchat_adsAPI_catalog2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.catalog2",
  platform: "snapchat",
  method: "DELETE",
  path: "/v1/catalogs/{catalog_id}",
  summary: "dynamic-product-ads",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"catalog_id","wireName":"catalog_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    catalog_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogResponse,
});

export const snapchat_adsAPI_catalog3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.catalog3",
  platform: "snapchat",
  method: "POST",
  path: "/v1/organizations/{organization_id}/catalogs",
  summary: "dynamic-product-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false},
    {"name":"catalogs","wireName":"catalogs","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
    catalogs: Schema.Array(Schema.suspend(() => Models.CatalogsBody)),
  }),
  outputSchema: Models.CatalogResponse,
});

export const snapchat_adsAPI_catalog4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.catalog4",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/organizations/{organization_id}/catalogs",
  summary: "dynamic-product-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false},
    {"name":"organization_id","wireName":"organization_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
    organization_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CatalogResponse,
});

export const snapchat_adsAPI_catalog5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.catalog5",
  platform: "snapchat",
  method: "GET",
  path: "/v1/organizations/{organization_id}/catalogs",
  summary: "dynamic-product-ads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
  }),
  outputSchema: Models.CatalogResponse,
});

export const snapchat_adsAPI_categoriesLoi = defineEndpointDescriptor({
  id: "snapchat.adsAPI.categoriesLoi",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/location/categories_loi",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"proximity","wireName":"proximity","location":"query","required":true,"nullable":false},
    {"name":"proximity_unit","wireName":"proximity_unit","location":"query","required":true,"nullable":false},
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    proximity: Schema.String,
    proximity_unit: Schema.String,
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.CategoriesLoiResponse,
});

export const snapchat_adsAPI_changelog = defineEndpointDescriptor({
  id: "snapchat.adsAPI.changelog",
  platform: "snapchat",
  method: "GET",
  path: "/v1/ads/{ad_id}/external_changelogs",
  summary: "audit-logs",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adId","wireName":"adId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adId: Schema.String,
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ChangelogResponse,
});

export const snapchat_adsAPI_changelog2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.changelog2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adsquads/{adsquad_id}/external_changelogs",
  summary: "audit-logs",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adsquadId","wireName":"adsquadId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adsquadId: Schema.String,
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ChangelogResponse,
});

export const snapchat_adsAPI_changelog3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.changelog3",
  platform: "snapchat",
  method: "GET",
  path: "/v1/campaigns/{campaign_id}/external_changelogs",
  summary: "audit-logs",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.String,
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ChangelogResponse,
});

export const snapchat_adsAPI_changelog4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.changelog4",
  platform: "snapchat",
  method: "GET",
  path: "/v1/creatives/{creative_id}/external_changelogs",
  summary: "audit-logs",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"creativeId","wireName":"creativeId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    creativeId: Schema.String,
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ChangelogResponse,
});

export const snapchat_adsAPI_changelog5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.changelog5",
  platform: "snapchat",
  method: "GET",
  path: "/v1/dynamic_templates/{dynamic_template_id}/external_changelogs",
  summary: "audit-logs",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"dynamicTemplateId","wireName":"dynamicTemplateId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    dynamicTemplateId: Schema.String,
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ChangelogResponse,
});

export const snapchat_adsAPI_country = defineEndpointDescriptor({
  id: "snapchat.adsAPI.country",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/geo/country",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.CountryResponse,
});

export const snapchat_adsAPI_creative = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative",
  platform: "snapchat",
  method: "POST",
  path: "/v1/{ad_account_id}/creatives",
  summary: "dynamic-story-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false},
    {"name":"ad_account_id","wireName":"ad_account_id","location":"body","required":true,"nullable":false},
    {"name":"type","wireName":"type","location":"body","required":true,"nullable":false},
    {"name":"shareable","wireName":"shareable","location":"body","required":false,"nullable":false},
    {"name":"render_type","wireName":"render_type","location":"body","required":true,"nullable":false},
    {"name":"preview_properties.preview_media_id","wireName":"preview_properties.preview_media_id","location":"body","required":false,"nullable":false},
    {"name":"preview_properties.logo_media_id","wireName":"preview_properties.logo_media_id","location":"body","required":false,"nullable":false},
    {"name":"preview_properties.preview_headline","wireName":"preview_properties.preview_headline","location":"body","required":true,"nullable":false},
    {"name":"dynamic_render_properties.dynamic_template_id","wireName":"dynamic_render_properties.dynamic_template_id","location":"body","required":false,"nullable":false},
    {"name":"dynamic_render_properties.product_set_id","wireName":"dynamic_render_properties.product_set_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    name: Schema.String,
    ad_account_id: Schema.String,
    type: Models.TypeEnum,
    shareable: Schema.optional(Schema.String),
    render_type: Models.RenderTypeEnum,
    "preview_properties.preview_media_id": Schema.optional(Schema.String),
    "preview_properties.logo_media_id": Schema.optional(Schema.String),
    "preview_properties.preview_headline": Schema.String,
    "dynamic_render_properties.dynamic_template_id": Schema.optional(Schema.String),
    "dynamic_render_properties.product_set_id": Schema.optional(Schema.String),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative10 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative10",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "creatives",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"creatives","wireName":"creatives","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    creatives: Schema.Array(Schema.suspend(() => Models.CreativesBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative11 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative11",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "creatives",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"creatives","wireName":"creatives","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    creatives: Schema.Array(Schema.suspend(() => Models.CreativesBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative12 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative12",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "Example - Reminder Creative ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"creatives","wireName":"creatives","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    creatives: Schema.Array(Schema.suspend(() => Models.CreativesBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative13 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative13",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "Example 1 - Fetch all Creatives ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"review_status","wireName":"review_status","location":"query","required":false,"nullable":false},
    {"name":"type","wireName":"type","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    sort: Schema.optional(Schema.String),
    limit: Schema.optional(Models.LimitEnum),
    review_status: Schema.optional(Models.ReviewStatusEnum),
    type: Schema.optional(Models.TypeEnum),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative14 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative14",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "Example - Partly Dynamic Collection Ad ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ad_account_id","wireName":"ad_account_id","location":"body","required":true,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false},
    {"name":"type","wireName":"type","location":"body","required":true,"nullable":false},
    {"name":"headline","wireName":"headline","location":"body","required":true,"nullable":false},
    {"name":"brand_name","wireName":"brand_name","location":"body","required":true,"nullable":false},
    {"name":"shareable","wireName":"shareable","location":"body","required":false,"nullable":false},
    {"name":"render_type","wireName":"render_type","location":"body","required":true,"nullable":false},
    {"name":"dynamic_render_properties.dynamic_template_id","wireName":"dynamic_render_properties.dynamic_template_id","location":"body","required":true,"nullable":false},
    {"name":"dynamic_render_properties.product_set_id","wireName":"dynamic_render_properties.product_set_id","location":"body","required":true,"nullable":false},
    {"name":"collection_properties.interaction_zone_id","wireName":"collection_properties.interaction_zone_id","location":"body","required":true,"nullable":false},
    {"name":"collection_properties.default_fallback_interaction_type","wireName":"collection_properties.default_fallback_interaction_type","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ad_account_id: Schema.String,
    name: Schema.String,
    type: Models.TypeEnum,
    headline: Schema.String,
    brand_name: Schema.String,
    shareable: Schema.optional(Schema.String),
    render_type: Schema.String,
    "dynamic_render_properties.dynamic_template_id": Schema.String,
    "dynamic_render_properties.product_set_id": Schema.String,
    "collection_properties.interaction_zone_id": Schema.String,
    "collection_properties.default_fallback_interaction_type": Models.CollectionPropertiesDefaultFallbackInteractionTypeEnum,
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative15 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative15",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "Example 1 - Create a CAROUSEL Dynamic Template ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"dynamic_templates","wireName":"dynamic_templates","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    dynamic_templates: Schema.Array(Schema.suspend(() => Models.DynamicTemplatesBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative16 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative16",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "lenses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"creatives","wireName":"creatives","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    creatives: Schema.Array(Schema.suspend(() => Models.CreativesBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative17 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative17",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "lenses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"creatives","wireName":"creatives","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    creatives: Schema.Array(Schema.suspend(() => Models.CreativesBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative18 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative18",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "lenses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"creatives","wireName":"creatives","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    creatives: Schema.Array(Schema.suspend(() => Models.CreativesBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative19 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative19",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "lenses",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"creatives","wireName":"creatives","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    creatives: Schema.Array(Schema.suspend(() => Models.CreativesBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative2",
  platform: "snapchat",
  method: "POST",
  path: "/v1/{ad_account_id}/creatives",
  summary: "dynamic-story-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false},
    {"name":"ad_account_id","wireName":"ad_account_id","location":"body","required":true,"nullable":false},
    {"name":"type","wireName":"type","location":"body","required":true,"nullable":false},
    {"name":"headline","wireName":"headline","location":"body","required":true,"nullable":false},
    {"name":"brand_name","wireName":"brand_name","location":"body","required":true,"nullable":false},
    {"name":"shareable","wireName":"shareable","location":"body","required":false,"nullable":false},
    {"name":"call_to_action","wireName":"call_to_action","location":"body","required":true,"nullable":false},
    {"name":"render_type","wireName":"render_type","location":"body","required":true,"nullable":false},
    {"name":"dynamic_render_properties.dynamic_template_id","wireName":"dynamic_render_properties.dynamic_template_id","location":"body","required":true,"nullable":false},
    {"name":"dynamic_render_properties.product_set_id","wireName":"dynamic_render_properties.product_set_id","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    name: Schema.String,
    ad_account_id: Schema.String,
    type: Models.TypeEnum,
    headline: Schema.String,
    brand_name: Schema.String,
    shareable: Schema.optional(Schema.String),
    call_to_action: Schema.String,
    render_type: Models.RenderTypeEnum,
    "dynamic_render_properties.dynamic_template_id": Schema.String,
    "dynamic_render_properties.product_set_id": Schema.String,
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative20 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative20",
  platform: "snapchat",
  method: "POST",
  path: "/v1/catalogs/{catalog_id}/product_search",
  summary: "dynamic-story-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false},
    {"name":"type","wireName":"type","location":"body","required":true,"nullable":false},
    {"name":"ad_account_id","wireName":"ad_account_id","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    name: Schema.String,
    type: Models.TypeEnum,
    ad_account_id: Schema.String,
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative21 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative21",
  platform: "snapchat",
  method: "GET",
  path: "/v1/creatives/{creative_id}",
  summary: "Example - Get specific Creative ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"creativeId","wireName":"creativeId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    creativeId: Schema.String,
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative3",
  platform: "snapchat",
  method: "POST",
  path: "/v1/{ad_account_id}/creatives",
  summary: "dynamic-story-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false},
    {"name":"ad_account_id","wireName":"ad_account_id","location":"body","required":true,"nullable":false},
    {"name":"type","wireName":"type","location":"body","required":true,"nullable":false},
    {"name":"headline","wireName":"headline","location":"body","required":true,"nullable":false},
    {"name":"brand_name","wireName":"brand_name","location":"body","required":true,"nullable":false},
    {"name":"render_type","wireName":"render_type","location":"body","required":true,"nullable":false},
    {"name":"preview_creative_id","wireName":"preview_creative_id","location":"body","required":false,"nullable":false},
    {"name":"dynamic_render_properties.dynamic_template_id","wireName":"dynamic_render_properties.dynamic_template_id","location":"body","required":true,"nullable":false},
    {"name":"dynamic_render_properties.product_set_id","wireName":"dynamic_render_properties.product_set_id","location":"body","required":true,"nullable":false},
    {"name":"composite_properties.creative_ids","wireName":"composite_properties.creative_ids","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    name: Schema.String,
    ad_account_id: Schema.String,
    type: Models.TypeEnum,
    headline: Schema.String,
    brand_name: Schema.String,
    render_type: Models.RenderTypeEnum,
    preview_creative_id: Schema.optional(Schema.String),
    "dynamic_render_properties.dynamic_template_id": Schema.String,
    "dynamic_render_properties.product_set_id": Schema.String,
    "composite_properties.creative_ids": Schema.String,
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative4",
  platform: "snapchat",
  method: "POST",
  path: "/v1/{ad_account_id}/get_creatives_by_ids",
  summary: "Example - Fetch Multiple Creatives (POST) ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"entity_ids","wireName":"entity_ids","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    entity_ids: Schema.Array(Schema.suspend(() => Models.EntityIdsBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative5",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "Example request - APP_INSTALL Creative ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"creatives","wireName":"creatives","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    creatives: Schema.Array(Schema.suspend(() => Models.CreativesBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative6 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative6",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "creatives",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"creatives","wireName":"creatives","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    creatives: Schema.Array(Schema.suspend(() => Models.CreativesBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative7 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative7",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "Example request ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"creatives","wireName":"creatives","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    creatives: Schema.Array(Schema.suspend(() => Models.CreativesBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative8 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative8",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "creatives",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"creatives","wireName":"creatives","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    creatives: Schema.Array(Schema.suspend(() => Models.CreativesBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creative9 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creative9",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "creatives",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"creatives","wireName":"creatives","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    creatives: Schema.Array(Schema.suspend(() => Models.CreativesBody)),
  }),
  outputSchema: Models.CreativeResponse,
});

export const snapchat_adsAPI_creativeElement = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creativeElement",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creative_elements",
  summary: "dynamic-collections-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false},
    {"name":"type","wireName":"type","location":"body","required":true,"nullable":false},
    {"name":"title","wireName":"title","location":"body","required":false,"nullable":false},
    {"name":"description","wireName":"description","location":"body","required":false,"nullable":false},
    {"name":"interaction_type","wireName":"interaction_type","location":"body","required":true,"nullable":false},
    {"name":"render_type","wireName":"render_type","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    name: Schema.String,
    type: Models.TypeEnum,
    title: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    interaction_type: Models.InteractionTypeEnum,
    render_type: Models.RenderTypeEnum,
  }),
  outputSchema: Models.CreativeElementResponse,
});

export const snapchat_adsAPI_creativeElement2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creativeElement2",
  platform: "snapchat",
  method: "POST",
  path: "/v1/catalogs/{catalog_id}/product_search",
  summary: "dynamic-collections-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
  }),
  outputSchema: Models.CreativeElementResponse,
});

export const snapchat_adsAPI_creativePreview = defineEndpointDescriptor({
  id: "snapchat.adsAPI.creativePreview",
  platform: "snapchat",
  method: "GET",
  path: "/v1/creatives/{creative_id}/creative_preview",
  summary: "Example ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"creativeId","wireName":"creativeId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    creativeId: Schema.String,
  }),
  outputSchema: Models.CreativePreviewResponse,
});

export const snapchat_adsAPI_dlxc = defineEndpointDescriptor({
  id: "snapchat.adsAPI.dlxc",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/interests/dlxc",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.DlxcResponse,
});

export const snapchat_adsAPI_dlxp = defineEndpointDescriptor({
  id: "snapchat.adsAPI.dlxp",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/interests/dlxp",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.DlxpResponse,
});

export const snapchat_adsAPI_dlxs = defineEndpointDescriptor({
  id: "snapchat.adsAPI.dlxs",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/interests/dlxs",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.DlxsResponse,
});

export const snapchat_adsAPI_dynamicTemplate = defineEndpointDescriptor({
  id: "snapchat.adsAPI.dynamicTemplate",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/dynamic_templates",
  summary: "Example 2 - Create a SLIDESHOW Dynamic Template ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"dynamic_templates","wireName":"dynamic_templates","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    dynamic_templates: Schema.Array(Schema.suspend(() => Models.DynamicTemplatesBody)),
  }),
  outputSchema: Models.DynamicTemplateResponse,
});

export const snapchat_adsAPI_dynamicTemplate2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.dynamicTemplate2",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/dynamic_templates",
  summary: "dynamic-collections-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"dynamic_templates","wireName":"dynamic_templates","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    dynamic_templates: Schema.Array(Schema.suspend(() => Models.DynamicTemplatesBody)),
  }),
  outputSchema: Models.DynamicTemplateResponse,
});

export const snapchat_adsAPI_dynamicTemplate3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.dynamicTemplate3",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/dynamic_templates",
  summary: "dynamic-product-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"dynamic_templates","wireName":"dynamic_templates","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    dynamic_templates: Schema.Array(Schema.suspend(() => Models.DynamicTemplatesBody)),
  }),
  outputSchema: Models.DynamicTemplateResponse,
});

export const snapchat_adsAPI_dynamicTemplate4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.dynamicTemplate4",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/adaccounts/{ad_account_id}/dynamic_templates",
  summary: "dynamic-product-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ad_account_id","wireName":"ad_account_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ad_account_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.DynamicTemplateResponse,
});

export const snapchat_adsAPI_dynamicTemplate5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.dynamicTemplate5",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/dynamic_templates",
  summary: "dynamic-product-ads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.DynamicTemplateResponse,
});

export const snapchat_adsAPI_dynamicTemplate6 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.dynamicTemplate6",
  platform: "snapchat",
  method: "GET",
  path: "/v1/dynamic_templates/{dynamic_template_id}",
  summary: "dynamic-product-ads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"dynamicTemplateId","wireName":"dynamicTemplateId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    dynamicTemplateId: Schema.String,
  }),
  outputSchema: Models.DynamicTemplateResponse,
});

export const snapchat_adsAPI_ecidStatu = defineEndpointDescriptor({
  id: "snapchat.adsAPI.ecidStatu",
  platform: "snapchat",
  method: "GET",
  path: "/v1/mobile_apps/{snap_app_id}/ecid_status",
  summary: "ad-squads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"snapAppId","wireName":"snapAppId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    snapAppId: Schema.String,
  }),
  outputSchema: Models.EcidStatuResponse,
});

export const snapchat_adsAPI_eventDetail = defineEndpointDescriptor({
  id: "snapchat.adsAPI.eventDetail",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/event_details",
  summary: "event-details",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ad_account_id","wireName":"ad_account_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ad_account_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.EventDetailResponse,
});

export const snapchat_adsAPI_eventDetail2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.eventDetail2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/event_details",
  summary: "event-details",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.EventDetailResponse,
});

export const snapchat_adsAPI_eventDetail3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.eventDetail3",
  platform: "snapchat",
  method: "GET",
  path: "/v1/event_details/{event_details_id}",
  summary: "event-details",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"eventDetailsId","wireName":"eventDetailsId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    eventDetailsId: Schema.String,
  }),
  outputSchema: Models.EventDetailResponse,
});

export const snapchat_adsAPI_eventDetail4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.eventDetail4",
  platform: "snapchat",
  method: "DELETE",
  path: "/v1/event_details/{event_details_id}",
  summary: "event-details",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"eventDetailsId","wireName":"eventDetailsId","location":"path","required":true,"nullable":false},
    {"name":"event_details_id","wireName":"event_details_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    eventDetailsId: Schema.String,
    event_details_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.EventDetailResponse,
});

export const snapchat_adsAPI_facet = defineEndpointDescriptor({
  id: "snapchat.adsAPI.facet",
  platform: "snapchat",
  method: "POST",
  path: "/v1/catalogs/{catalog_id}/facets",
  summary: "dynamic-product-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"facets","wireName":"facets","location":"body","required":true,"nullable":false},
    {"name":"filter","wireName":"filter","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    facets: Schema.Array(Schema.suspend(() => Models.FacetsBody)),
    filter: Models.FilterBody,
  }),
  outputSchema: Models.FacetResponse,
});

export const snapchat_adsAPI_feedUpload = defineEndpointDescriptor({
  id: "snapchat.adsAPI.feedUpload",
  platform: "snapchat",
  method: "GET",
  path: "/v1/product_feeds/{product_feed_id}/feed_uploads",
  summary: "dynamic-product-ads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"productFeedId","wireName":"productFeedId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productFeedId: Schema.String,
  }),
  outputSchema: Models.FeedUploadResponse,
});

export const snapchat_adsAPI_feedUpload2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.feedUpload2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/product_feeds/{product_feed_id}/feed_uploads",
  summary: "dynamic-product-ads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"productFeedId","wireName":"productFeedId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productFeedId: Schema.String,
  }),
  outputSchema: Models.FeedUploadResponse,
});

export const snapchat_adsAPI_fundingsource = defineEndpointDescriptor({
  id: "snapchat.adsAPI.fundingsource",
  platform: "snapchat",
  method: "GET",
  path: "/v1/fundingsources/{funding_source_id}",
  summary: "funding-sources",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"fundingSourceId","wireName":"fundingSourceId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    fundingSourceId: Schema.String,
  }),
  outputSchema: Models.FundingsourceResponse,
});

export const snapchat_adsAPI_fundingsource2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.fundingsource2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/organizations/{organization_id}/fundingsources",
  summary: "funding-sources",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
  }),
  outputSchema: Models.FundingsourceResponse,
});

export const snapchat_adsAPI_gender = defineEndpointDescriptor({
  id: "snapchat.adsAPI.gender",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/demographics/gender",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.GenderResponse,
});

export const snapchat_adsAPI_interactionZone = defineEndpointDescriptor({
  id: "snapchat.adsAPI.interactionZone",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/interaction_zones",
  summary: "Example - Fully Dynamic Collection Ad ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"name","wireName":"name","location":"body","required":true,"nullable":false},
    {"name":"render_type","wireName":"render_type","location":"body","required":true,"nullable":false},
    {"name":"creative_elements","wireName":"creative_elements","location":"body","required":true,"nullable":false},
    {"name":"headline","wireName":"headline","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    name: Schema.String,
    render_type: Models.RenderTypeEnum,
    creative_elements: Schema.String,
    headline: Models.HeadlineEnum,
  }),
  outputSchema: Models.InteractionZoneResponse,
});

export const snapchat_adsAPI_interactionZone2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.interactionZone2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/interaction_zones",
  summary: "interaction-zones",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.InteractionZoneResponse,
});

export const snapchat_adsAPI_interactionZone3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.interactionZone3",
  platform: "snapchat",
  method: "GET",
  path: "/v1/interaction_zones/{interaction_zone_id}",
  summary: "interaction-zones",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"interactionZoneId","wireName":"interactionZoneId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    interactionZoneId: Schema.String,
  }),
  outputSchema: Models.InteractionZoneResponse,
});

export const snapchat_adsAPI_invoice = defineEndpointDescriptor({
  id: "snapchat.adsAPI.invoice",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/invoices",
  summary: "invoices",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.InvoiceResponse,
});

export const snapchat_adsAPI_invoice2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.invoice2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/invoices/{invoice_id}",
  summary: "invoices",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"invoiceId","wireName":"invoiceId","location":"path","required":true,"nullable":false},
    {"name":"include_pdf","wireName":"include_pdf","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    invoiceId: Schema.String,
    include_pdf: Schema.optional(Schema.String),
  }),
  outputSchema: Models.InvoiceResponse,
});

export const snapchat_adsAPI_languages = defineEndpointDescriptor({
  id: "snapchat.adsAPI.languages",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/demographics/languages",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.LanguagesResponse,
});

export const snapchat_adsAPI_leadGenerationForm = defineEndpointDescriptor({
  id: "snapchat.adsAPI.leadGenerationForm",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/lead_generation_forms",
  summary: "Example - Get Lead Generation Forms under an Ad Account ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.LeadGenerationFormResponse,
});

export const snapchat_adsAPI_leadGenerationForm2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.leadGenerationForm2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/lead_generation_forms/{lead_generation_form_id}",
  summary: "Example - Get Lead Generation Form using Lead Generation Id ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"leadGenerationFormId","wireName":"leadGenerationFormId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    leadGenerationFormId: Schema.String,
  }),
  outputSchema: Models.LeadGenerationFormResponse,
});

export const snapchat_adsAPI_lensPreview = defineEndpointDescriptor({
  id: "snapchat.adsAPI.lensPreview",
  platform: "snapchat",
  method: "GET",
  path: "/v1/media/{media_id}/lens_preview",
  summary: "Example - Fetching Lens Preview files ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"mediaId","wireName":"mediaId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    mediaId: Schema.String,
  }),
  outputSchema: Models.LensPreviewResponse,
});

export const snapchat_adsAPI_lensPreview2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.lensPreview2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/media/{media_id}/lens_preview",
  summary: "Example request ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"mediaId","wireName":"mediaId","location":"path","required":true,"nullable":false},
    {"name":"Media ID","wireName":"Media ID","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    mediaId: Schema.String,
    "Media ID": Schema.optional(Schema.String),
  }),
  outputSchema: Models.LensPreviewResponse,
});

export const snapchat_adsAPI_lifetimeStat = defineEndpointDescriptor({
  id: "snapchat.adsAPI.lifetimeStat",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adsquads/{adsquad-id}/stats",
  summary: "lenses",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adsquadId","wireName":"adsquadId","location":"path","required":true,"nullable":false},
    {"name":"adsquad-id","wireName":"adsquad-id","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adsquadId: Schema.String,
    "adsquad-id": Schema.optional(Schema.String),
  }),
  outputSchema: Models.LifetimeStatResponse,
});

export const snapchat_adsAPI_lifetimeStat2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.lifetimeStat2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adsquads/{adsquad-id}/stats",
  summary: "measurement",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adsquadId","wireName":"adsquadId","location":"path","required":true,"nullable":false},
    {"name":"adsquad-id","wireName":"adsquad-id","location":"query","required":false,"nullable":false},
    {"name":"breakdown","wireName":"breakdown","location":"query","required":false,"nullable":false},
    {"name":"async","wireName":"async","location":"query","required":false,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"query","required":false,"nullable":false},
    {"name":"fields","wireName":"fields","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"dimension","wireName":"dimension","location":"query","required":false,"nullable":false},
    {"name":"pivot","wireName":"pivot","location":"query","required":false,"nullable":false},
    {"name":"action_report_time","wireName":"action_report_time","location":"query","required":false,"nullable":false},
    {"name":"swipe_up_attribution_window","wireName":"swipe_up_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"view_attribution_window","wireName":"view_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"position_stats","wireName":"position_stats","location":"query","required":false,"nullable":false},
    {"name":"omit_empty","wireName":"omit_empty","location":"query","required":false,"nullable":false},
    {"name":"conversion_source_types","wireName":"conversion_source_types","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adsquadId: Schema.String,
    "adsquad-id": Schema.optional(Schema.String),
    breakdown: Schema.optional(Schema.String),
    async: Schema.optional(Schema.String),
    async_format: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    granularity: Models.GranularityEnum,
    test: Schema.optional(Schema.String),
    dimension: Schema.optional(Models.DimensionEnum),
    pivot: Schema.optional(Schema.String),
    action_report_time: Schema.optional(Schema.String),
    swipe_up_attribution_window: Schema.optional(Schema.String),
    view_attribution_window: Schema.optional(Schema.String),
    position_stats: Schema.optional(Schema.String),
    omit_empty: Schema.optional(Schema.String),
    conversion_source_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.LifetimeStatResponse,
});

export const snapchat_adsAPI_lifetimeStat3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.lifetimeStat3",
  platform: "snapchat",
  method: "GET",
  path: "/v1/creatives/{creative_id}/stats",
  summary: "Example 1 - Fetching LIFETIME metrics for a Creative ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"creativeId","wireName":"creativeId","location":"path","required":true,"nullable":false},
    {"name":"breakdown","wireName":"breakdown","location":"query","required":false,"nullable":false},
    {"name":"async","wireName":"async","location":"query","required":false,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"query","required":false,"nullable":false},
    {"name":"fields","wireName":"fields","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"dimension","wireName":"dimension","location":"query","required":false,"nullable":false},
    {"name":"pivot","wireName":"pivot","location":"query","required":false,"nullable":false},
    {"name":"action_report_time","wireName":"action_report_time","location":"query","required":false,"nullable":false},
    {"name":"swipe_up_attribution_window","wireName":"swipe_up_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"view_attribution_window","wireName":"view_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"position_stats","wireName":"position_stats","location":"query","required":false,"nullable":false},
    {"name":"omit_empty","wireName":"omit_empty","location":"query","required":false,"nullable":false},
    {"name":"conversion_source_types","wireName":"conversion_source_types","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    creativeId: Schema.String,
    breakdown: Schema.optional(Schema.String),
    async: Schema.optional(Schema.String),
    async_format: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    granularity: Models.GranularityEnum,
    test: Schema.optional(Schema.String),
    dimension: Schema.optional(Models.DimensionEnum),
    pivot: Schema.optional(Schema.String),
    action_report_time: Schema.optional(Schema.String),
    swipe_up_attribution_window: Schema.optional(Schema.String),
    view_attribution_window: Schema.optional(Schema.String),
    position_stats: Schema.optional(Schema.String),
    omit_empty: Schema.optional(Schema.String),
    conversion_source_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.LifetimeStatResponse,
});

export const snapchat_adsAPI_lifetimeStat4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.lifetimeStat4",
  platform: "snapchat",
  method: "GET",
  path: "/v1/media/{media_id}/stats",
  summary: "Example 1 - Fetching LIFETIME metrics for a VIDEO Media ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"mediaId","wireName":"mediaId","location":"path","required":true,"nullable":false},
    {"name":"breakdown","wireName":"breakdown","location":"query","required":false,"nullable":false},
    {"name":"async","wireName":"async","location":"query","required":false,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"query","required":false,"nullable":false},
    {"name":"fields","wireName":"fields","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"dimension","wireName":"dimension","location":"query","required":false,"nullable":false},
    {"name":"pivot","wireName":"pivot","location":"query","required":false,"nullable":false},
    {"name":"action_report_time","wireName":"action_report_time","location":"query","required":false,"nullable":false},
    {"name":"swipe_up_attribution_window","wireName":"swipe_up_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"view_attribution_window","wireName":"view_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"position_stats","wireName":"position_stats","location":"query","required":false,"nullable":false},
    {"name":"omit_empty","wireName":"omit_empty","location":"query","required":false,"nullable":false},
    {"name":"conversion_source_types","wireName":"conversion_source_types","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    mediaId: Schema.String,
    breakdown: Schema.optional(Schema.String),
    async: Schema.optional(Schema.String),
    async_format: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    granularity: Models.GranularityEnum,
    test: Schema.optional(Schema.String),
    dimension: Schema.optional(Models.DimensionEnum),
    pivot: Schema.optional(Schema.String),
    action_report_time: Schema.optional(Schema.String),
    swipe_up_attribution_window: Schema.optional(Schema.String),
    view_attribution_window: Schema.optional(Schema.String),
    position_stats: Schema.optional(Schema.String),
    omit_empty: Schema.optional(Schema.String),
    conversion_source_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.LifetimeStatResponse,
});

export const snapchat_adsAPI_marketingName = defineEndpointDescriptor({
  id: "snapchat.adsAPI.marketingName",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/device/marketing_name",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.MarketingNameResponse,
});

export const snapchat_adsAPI_me = defineEndpointDescriptor({
  id: "snapchat.adsAPI.me",
  platform: "snapchat",
  method: "GET",
  path: "/v1/me",
  summary: "user",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.MeResponse,
});

export const snapchat_adsAPI_media = defineEndpointDescriptor({
  id: "snapchat.adsAPI.media",
  platform: "snapchat",
  method: "POST",
  path: "/v1/{ad_account_id}/get_media_by_ids",
  summary: "Example - Fetch Multiple Media (POST) ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"entity_ids","wireName":"entity_ids","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    entity_ids: Schema.Array(Schema.suspend(() => Models.EntityIdsBody)),
  }),
  outputSchema: Models.MediaResponse,
});

export const snapchat_adsAPI_media2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.media2",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/media",
  summary: "media",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"media","wireName":"media","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    media: Schema.Array(Schema.suspend(() => Models.MediaBody)),
  }),
  outputSchema: Models.MediaResponse,
});

export const snapchat_adsAPI_media3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.media3",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/media",
  summary: "Example - Fetch all Media in an Ad Account ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false},
    {"name":"type","wireName":"type","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    sort: Schema.optional(Schema.String),
    type: Schema.optional(Models.TypeEnum),
  }),
  outputSchema: Models.MediaResponse,
});

export const snapchat_adsAPI_media4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.media4",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{destination_ad_account_id}/media_copy",
  summary: "Example request ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"destinationAdAccountId","wireName":"destinationAdAccountId","location":"path","required":true,"nullable":false},
    {"name":"media_copy","wireName":"media_copy","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    destinationAdAccountId: Schema.String,
    media_copy: Schema.Array(Schema.suspend(() => Models.MediaCopyBody)),
  }),
  outputSchema: Models.MediaResponse,
});

export const snapchat_adsAPI_media5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.media5",
  platform: "snapchat",
  method: "GET",
  path: "/v1/media/{media_id}",
  summary: "media",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"mediaId","wireName":"mediaId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    mediaId: Schema.String,
  }),
  outputSchema: Models.MediaResponse,
});

export const snapchat_adsAPI_media6 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.media6",
  platform: "snapchat",
  method: "POST",
  path: "/v1/media/{media_id}/upload",
  summary: "media",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json","multipart"],
  parameters: [
    {"name":"mediaId","wireName":"mediaId","location":"path","required":true,"nullable":false},
    {"name":"media_id","wireName":"media_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    mediaId: Schema.String,
    media_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.MediaResponse,
});

export const snapchat_adsAPI_media7 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.media7",
  platform: "snapchat",
  method: "POST",
  path: "/v1/media/{media_id}/upload",
  summary: "media",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json","multipart"],
  parameters: [
    {"name":"mediaId","wireName":"mediaId","location":"path","required":true,"nullable":false},
    {"name":"media_id","wireName":"media_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    mediaId: Schema.String,
    media_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.MediaResponse,
});

export const snapchat_adsAPI_media8 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.media8",
  platform: "snapchat",
  method: "POST",
  path: "/v1/media/{media_id}/upload",
  summary: "media",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json","multipart"],
  parameters: [
    {"name":"mediaId","wireName":"mediaId","location":"path","required":true,"nullable":false},
    {"name":"media_id","wireName":"media_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    mediaId: Schema.String,
    media_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.MediaResponse,
});

export const snapchat_adsAPI_member = defineEndpointDescriptor({
  id: "snapchat.adsAPI.member",
  platform: "snapchat",
  method: "GET",
  path: "/v1/members/{member_id}",
  summary: "members",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"memberId","wireName":"memberId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    memberId: Schema.String,
  }),
  outputSchema: Models.MemberResponse,
});

export const snapchat_adsAPI_member2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.member2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/organizations/{organization_id}/members",
  summary: "members",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
  }),
  outputSchema: Models.MemberResponse,
});

export const snapchat_adsAPI_member3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.member3",
  platform: "snapchat",
  method: "POST",
  path: "/v1/organizations/{organization_id}/members",
  summary: "members",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false},
    {"name":"members","wireName":"members","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
    members: Schema.Array(Schema.suspend(() => Models.MembersBody)),
  }),
  outputSchema: Models.MemberResponse,
});

export const snapchat_adsAPI_metro = defineEndpointDescriptor({
  id: "snapchat.adsAPI.metro",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/geo/{country_code}/metro",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"countryCode","wireName":"countryCode","location":"path","required":true,"nullable":false},
    {"name":"country_code","wireName":"country_code","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    countryCode: Schema.String,
    country_code: Schema.optional(Schema.String),
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.MetroResponse,
});

export const snapchat_adsAPI_metro2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.metro2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/geo/{country_code}/region",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"countryCode","wireName":"countryCode","location":"path","required":true,"nullable":false},
    {"name":"country_code","wireName":"country_code","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    countryCode: Schema.String,
    country_code: Schema.optional(Schema.String),
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.MetroResponse,
});

export const snapchat_adsAPI_mobileApp = defineEndpointDescriptor({
  id: "snapchat.adsAPI.mobileApp",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{adaccount_id}/mobile_apps",
  summary: "snap-app-id",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adaccountId","wireName":"adaccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adaccountId: Schema.String,
  }),
  outputSchema: Models.MobileAppResponse,
});

export const snapchat_adsAPI_mobileApp2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.mobileApp2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/mobile_apps/{mobile_app_id}",
  summary: "snap-app-id",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"mobileAppId","wireName":"mobileAppId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    mobileAppId: Schema.String,
  }),
  outputSchema: Models.MobileAppResponse,
});

export const snapchat_adsAPI_mobileApp3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.mobileApp3",
  platform: "snapchat",
  method: "GET",
  path: "/v1/organizations/{organization_id}/mobile_apps",
  summary: "snap-app-id",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.MobileAppResponse,
});

export const snapchat_adsAPI_nln = defineEndpointDescriptor({
  id: "snapchat.adsAPI.nln",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/interests/nln",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.NlnResponse,
});

export const snapchat_adsAPI_option = defineEndpointDescriptor({
  id: "snapchat.adsAPI.option",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/v1/options",
  summary: "Example #1 Targeting Support for Germany ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"country_code","wireName":"country_code","location":"query","required":true,"nullable":false},
    {"name":"is_intl_vac_enabled","wireName":"is_intl_vac_enabled","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    country_code: Schema.String,
    is_intl_vac_enabled: Schema.optional(Schema.String),
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.OptionResponse,
});

export const snapchat_adsAPI_organization = defineEndpointDescriptor({
  id: "snapchat.adsAPI.organization",
  platform: "snapchat",
  method: "GET",
  path: "/v1/me/organizations",
  summary: "organizations",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.OrganizationResponse,
});

export const snapchat_adsAPI_organization2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.organization2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/me/organizations",
  summary: "organizations",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"with_ad_accounts","wireName":"with_ad_accounts","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    with_ad_accounts: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.OrganizationResponse,
});

export const snapchat_adsAPI_organization3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.organization3",
  platform: "snapchat",
  method: "GET",
  path: "/v1/organizations/{ID}",
  summary: "organizations",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Models.OrganizationResponse,
});

export const snapchat_adsAPI_osType = defineEndpointDescriptor({
  id: "snapchat.adsAPI.osType",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/device/connection_type",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.OsTypeResponse,
});

export const snapchat_adsAPI_osType2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.osType2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/device/os_type",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.OsTypeResponse,
});

export const snapchat_adsAPI_phoneNumber = defineEndpointDescriptor({
  id: "snapchat.adsAPI.phoneNumber",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/phone_numbers",
  summary: "creatives",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.PhoneNumberResponse,
});

export const snapchat_adsAPI_pixel = defineEndpointDescriptor({
  id: "snapchat.adsAPI.pixel",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/pixels",
  summary: "snap-pixel",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.PixelResponse,
});

export const snapchat_adsAPI_pixel2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.pixel2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/organizations/{organization_id}/pixels",
  summary: "snap-pixel",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
  }),
  outputSchema: Models.PixelResponse,
});

export const snapchat_adsAPI_pixel3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.pixel3",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/organizations/{organization_id}/pixels",
  summary: "snap-pixel",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false},
    {"name":"ad_account_id","wireName":"ad_account_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
    ad_account_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.PixelResponse,
});

export const snapchat_adsAPI_pixel4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.pixel4",
  platform: "snapchat",
  method: "GET",
  path: "/v1/pixels/{PIXEL_ID}",
  summary: "snap-pixel",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"pIXELID","wireName":"pIXELID","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pIXELID: Schema.String,
  }),
  outputSchema: Models.PixelResponse,
});

export const snapchat_adsAPI_postalCode = defineEndpointDescriptor({
  id: "snapchat.adsAPI.postalCode",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/geo/{country_code}/postal_code",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"countryCode","wireName":"countryCode","location":"path","required":true,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"country_code","wireName":"country_code","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    countryCode: Schema.String,
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
    country_code: Schema.optional(Schema.String),
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.PostalCodeResponse,
});

export const snapchat_adsAPI_preview = defineEndpointDescriptor({
  id: "snapchat.adsAPI.preview",
  platform: "snapchat",
  method: "GET",
  path: "/v1/media/{media_id}/preview",
  summary: "media",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"mediaId","wireName":"mediaId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    mediaId: Schema.String,
  }),
  outputSchema: Models.PreviewResponse,
});

export const snapchat_adsAPI_product = defineEndpointDescriptor({
  id: "snapchat.adsAPI.product",
  platform: "snapchat",
  method: "POST",
  path: "/v1/catalogs/{catalog_id}/hotels/search",
  summary: "Example 1 - Hotel Search ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    limit: Schema.Number,
  }),
  outputSchema: Models.ProductResponse,
});

export const snapchat_adsAPI_productFeed = defineEndpointDescriptor({
  id: "snapchat.adsAPI.productFeed",
  platform: "snapchat",
  method: "POST",
  path: "/v1/catalogs/{catalog_id}/product_feeds",
  summary: "Example 1 - Creating a PRIMARY Product Feed ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"product_feeds","wireName":"product_feeds","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    product_feeds: Schema.Array(Schema.suspend(() => Models.ProductFeedsBody)),
  }),
  outputSchema: Models.ProductFeedResponse,
});

export const snapchat_adsAPI_productFeed2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.productFeed2",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/catalogs/{catalog_id}/product_feeds",
  summary: "dynamic-product-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"product_feeds","wireName":"product_feeds","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    product_feeds: Schema.Array(Schema.suspend(() => Models.ProductFeedsBody)),
  }),
  outputSchema: Models.ProductFeedResponse,
});

export const snapchat_adsAPI_productFeed3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.productFeed3",
  platform: "snapchat",
  method: "GET",
  path: "/v1/catalogs/{catalog_id}/product_feeds",
  summary: "dynamic-product-ads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
  }),
  outputSchema: Models.ProductFeedResponse,
});

export const snapchat_adsAPI_productFeed4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.productFeed4",
  platform: "snapchat",
  method: "GET",
  path: "/v1/product_feeds/{product_feed_id}",
  summary: "dynamic-product-ads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"productFeedId","wireName":"productFeedId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productFeedId: Schema.String,
  }),
  outputSchema: Models.ProductFeedResponse,
});

export const snapchat_adsAPI_productFeed5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.productFeed5",
  platform: "snapchat",
  method: "DELETE",
  path: "/v1/product_feeds/{product_feed_id}",
  summary: "dynamic-product-ads",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"productFeedId","wireName":"productFeedId","location":"path","required":true,"nullable":false},
    {"name":"product_feed_id","wireName":"product_feed_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productFeedId: Schema.String,
    product_feed_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ProductFeedResponse,
});

export const snapchat_adsAPI_productFeed6 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.productFeed6",
  platform: "snapchat",
  method: "POST",
  path: "/v1/product_feeds/{product_feed_id}/feed_uploads",
  summary: "Example 1 - Feed upload using update_type REPLACE ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"productFeedId","wireName":"productFeedId","location":"path","required":true,"nullable":false},
    {"name":"product_feeds","wireName":"product_feeds","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productFeedId: Schema.String,
    product_feeds: Schema.Array(Schema.suspend(() => Models.ProductFeedsBody)),
  }),
  outputSchema: Models.ProductFeedResponse,
});

export const snapchat_adsAPI_productSet = defineEndpointDescriptor({
  id: "snapchat.adsAPI.productSet",
  platform: "snapchat",
  method: "POST",
  path: "/v1/catalogs/{catalog_id}/flights/search",
  summary: "Example 1 - Flight Search ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    limit: Schema.Number,
  }),
  outputSchema: Models.ProductSetResponse,
});

export const snapchat_adsAPI_productSet2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.productSet2",
  platform: "snapchat",
  method: "POST",
  path: "/v1/catalogs/{catalog_id}/product_sets",
  summary: "dynamic-product-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"product_sets","wireName":"product_sets","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    product_sets: Schema.Array(Schema.suspend(() => Models.ProductSetsBody)),
  }),
  outputSchema: Models.ProductSetResponse,
});

export const snapchat_adsAPI_productSet3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.productSet3",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/catalogs/{catalog_id}/product_sets",
  summary: "dynamic-product-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"product_sets","wireName":"product_sets","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    product_sets: Schema.Array(Schema.suspend(() => Models.ProductSetsBody)),
  }),
  outputSchema: Models.ProductSetResponse,
});

export const snapchat_adsAPI_productSet4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.productSet4",
  platform: "snapchat",
  method: "GET",
  path: "/v1/catalogs/{catalog_id}/product_sets",
  summary: "dynamic-product-ads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"cursor","wireName":"cursor","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ProductSetResponse,
});

export const snapchat_adsAPI_productSet5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.productSet5",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/product_sets/{product_set_id}",
  summary: "dynamic-product-ads",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"productSetId","wireName":"productSetId","location":"path","required":true,"nullable":false},
    {"name":"catalog_id","wireName":"catalog_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    productSetId: Schema.String,
    catalog_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ProductSetResponse,
});

export const snapchat_adsAPI_reservedForecasting = defineEndpointDescriptor({
  id: "snapchat.adsAPI.reservedForecasting",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/reserved_forecasting",
  summary: "reach-and-frequency",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"adsquads","wireName":"adsquads","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    adsquads: Schema.Array(Schema.suspend(() => Models.AdsquadsBody)),
  }),
  outputSchema: Models.ReservedForecastingResponse,
});

export const snapchat_adsAPI_rol = defineEndpointDescriptor({
  id: "snapchat.adsAPI.rol",
  platform: "snapchat",
  method: "DELETE",
  path: "/v1/roles/{role_id}",
  summary: "roles",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"roleId","wireName":"roleId","location":"path","required":true,"nullable":false},
    {"name":"role_id","wireName":"role_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    roleId: Schema.String,
    role_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.RolResponse,
});

export const snapchat_adsAPI_role = defineEndpointDescriptor({
  id: "snapchat.adsAPI.role",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/roles",
  summary: "roles",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.RoleResponse,
});

export const snapchat_adsAPI_role2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.role2",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/roles",
  summary: "roles",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"roles","wireName":"roles","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    roles: Schema.Array(Schema.suspend(() => Models.RolesBody)),
  }),
  outputSchema: Models.RoleResponse,
});

export const snapchat_adsAPI_role3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.role3",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/adaccounts/{ad_account_id}/roles",
  summary: "roles",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"roles","wireName":"roles","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    roles: Schema.Array(Schema.suspend(() => Models.RolesBody)),
  }),
  outputSchema: Models.RoleResponse,
});

export const snapchat_adsAPI_role4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.role4",
  platform: "snapchat",
  method: "POST",
  path: "/v1/catalogs/{catalog_id}/roles",
  summary: "roles",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"roles","wireName":"roles","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    roles: Schema.Array(Schema.suspend(() => Models.RolesBody)),
  }),
  outputSchema: Models.RoleResponse,
});

export const snapchat_adsAPI_role5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.role5",
  platform: "snapchat",
  method: "GET",
  path: "/v1/catalogs/{catalog_id}/roles",
  summary: "roles",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.RoleResponse,
});

export const snapchat_adsAPI_role6 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.role6",
  platform: "snapchat",
  method: "GET",
  path: "/v1/members/{member_id}/roles",
  summary: "roles",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"memberId","wireName":"memberId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    memberId: Schema.String,
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.RoleResponse,
});

export const snapchat_adsAPI_role7 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.role7",
  platform: "snapchat",
  method: "GET",
  path: "/v1/organizations/{organization_id}/roles",
  summary: "roles",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.RoleResponse,
});

export const snapchat_adsAPI_role8 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.role8",
  platform: "snapchat",
  method: "POST",
  path: "/v1/organizations/{organization_id}/roles",
  summary: "roles",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false},
    {"name":"roles","wireName":"roles","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
    roles: Schema.Array(Schema.suspend(() => Models.RolesBody)),
  }),
  outputSchema: Models.RoleResponse,
});

export const snapchat_adsAPI_scl = defineEndpointDescriptor({
  id: "snapchat.adsAPI.scl",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/v1/interests/scls",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"country_code","wireName":"country_code","location":"query","required":false,"nullable":false},
    {"name":"is_hec","wireName":"is_hec","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    country_code: Schema.optional(Schema.String),
    is_hec: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.SclResponse,
});

export const snapchat_adsAPI_search = defineEndpointDescriptor({
  id: "snapchat.adsAPI.search",
  platform: "snapchat",
  method: "POST",
  path: "/v1/catalogs/{catalog_id}/products/search",
  summary: "Example 1 - Product Search ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"catalogId","wireName":"catalogId","location":"path","required":true,"nullable":false},
    {"name":"limit","wireName":"limit","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    catalogId: Schema.String,
    limit: Schema.Number,
  }),
  outputSchema: Models.SearchResponse,
});

export const snapchat_adsAPI_segment = defineEndpointDescriptor({
  id: "snapchat.adsAPI.segment",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/segments",
  summary: "customer-lists",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"segments","wireName":"segments","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    segments: Schema.Array(Schema.suspend(() => Models.SegmentsBody)),
  }),
  outputSchema: Models.SegmentResponse,
});

export const snapchat_adsAPI_segment2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.segment2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/segments",
  summary: "customer-lists",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.SegmentResponse,
});

export const snapchat_adsAPI_segment3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.segment3",
  platform: "snapchat",
  method: "PUT",
  path: "/v1/adaccounts/{ad_account_id}/segments",
  summary: "customer-lists",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"ad_account_id","wireName":"ad_account_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    ad_account_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SegmentResponse,
});

export const snapchat_adsAPI_segment4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.segment4",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/segments",
  summary: "lookalikes",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"segments","wireName":"segments","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    segments: Schema.Array(Schema.suspend(() => Models.SegmentsBody)),
  }),
  outputSchema: Models.SegmentResponse,
});

export const snapchat_adsAPI_segment5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.segment5",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/segments",
  summary: "Example: Targeting Engagers ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"segments","wireName":"segments","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    segments: Schema.Array(Schema.suspend(() => Models.SegmentsBody)),
  }),
  outputSchema: Models.SegmentResponse,
});

export const snapchat_adsAPI_segment6 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.segment6",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/segments",
  summary: "profile-engagement",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
  }),
  outputSchema: Models.SegmentResponse,
});

export const snapchat_adsAPI_segment7 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.segment7",
  platform: "snapchat",
  method: "GET",
  path: "/v1/segments/{segment_id}",
  summary: "customer-lists",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"segmentId","wireName":"segmentId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    segmentId: Schema.String,
  }),
  outputSchema: Models.SegmentResponse,
});

export const snapchat_adsAPI_segment8 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.segment8",
  platform: "snapchat",
  method: "DELETE",
  path: "/v1/segments/{segment_id}",
  summary: "customer-lists",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"segmentId","wireName":"segmentId","location":"path","required":true,"nullable":false},
    {"name":"segment_id","wireName":"segment_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    segmentId: Schema.String,
    segment_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SegmentResponse,
});

export const snapchat_adsAPI_segment9 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.segment9",
  platform: "snapchat",
  method: "DELETE",
  path: "/v1/segments/{segment_id}/all_users",
  summary: "customer-lists",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"segmentId","wireName":"segmentId","location":"path","required":true,"nullable":false},
    {"name":"segment_id","wireName":"segment_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    segmentId: Schema.String,
    segment_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.SegmentResponse,
});

export const snapchat_adsAPI_shp = defineEndpointDescriptor({
  id: "snapchat.adsAPI.shp",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/v1/interests/shp",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"country_code","wireName":"country_code","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    country_code: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.ShpResponse,
});

export const snapchat_adsAPI_snapcode = defineEndpointDescriptor({
  id: "snapchat.adsAPI.snapcode",
  platform: "snapchat",
  method: "GET",
  path: "/v1/creatives/{creative_id}/snapcode",
  summary: "creatives",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"creativeId","wireName":"creativeId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    creativeId: Schema.String,
  }),
  outputSchema: Models.SnapcodeResponse,
});

export const snapchat_adsAPI_stats = defineEndpointDescriptor({
  id: "snapchat.adsAPI.stats",
  platform: "snapchat",
  method: "GET",
  path: "/v1/pixels/{pixel-id}/stats",
  summary: "snap-pixel",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"pixelId","wireName":"pixelId","location":"path","required":true,"nullable":false},
    {"name":"pixel-id","wireName":"pixel-id","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pixelId: Schema.String,
    "pixel-id": Schema.optional(Schema.String),
  }),
  outputSchema: Models.StatsResponse,
});

export const snapchat_adsAPI_targetingInsight = defineEndpointDescriptor({
  id: "snapchat.adsAPI.targetingInsight",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/targeting_insights",
  summary: "Example ​",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"base_spec","wireName":"base_spec","location":"body","required":true,"nullable":false},
    {"name":"targeting_spec","wireName":"targeting_spec","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    base_spec: Models.BaseSpecBody,
    targeting_spec: Models.TargetingSpecBody,
  }),
  outputSchema: Models.TargetingInsightResponse,
});

export const snapchat_adsAPI_thumbnail = defineEndpointDescriptor({
  id: "snapchat.adsAPI.thumbnail",
  platform: "snapchat",
  method: "GET",
  path: "/v1/media/{media_id}/thumbnail",
  summary: "media",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"mediaId","wireName":"mediaId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    mediaId: Schema.String,
  }),
  outputSchema: Models.ThumbnailResponse,
});

export const snapchat_adsAPI_timeseriesStat = defineEndpointDescriptor({
  id: "snapchat.adsAPI.timeseriesStat",
  platform: "snapchat",
  method: "GET",
  path: "/v1/ads/{ad-id}/stats",
  summary: "snap-pixel",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adId","wireName":"adId","location":"path","required":true,"nullable":false},
    {"name":"ad-id","wireName":"ad-id","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adId: Schema.String,
    "ad-id": Schema.optional(Schema.String),
  }),
  outputSchema: Models.TimeseriesStatResponse,
});

export const snapchat_adsAPI_timeseriesStat2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.timeseriesStat2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/campaigns/{campaign-id}/stats",
  summary: "snap-pixel",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"campaign-id","wireName":"campaign-id","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.String,
    "campaign-id": Schema.optional(Schema.String),
  }),
  outputSchema: Models.TimeseriesStatResponse,
});

export const snapchat_adsAPI_timeseriesStat3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.timeseriesStat3",
  platform: "snapchat",
  method: "GET",
  path: "/v1/pixels/{pixel-id}/domains/stats",
  summary: "snap-pixel",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"pixelId","wireName":"pixelId","location":"path","required":true,"nullable":false},
    {"name":"pixel-id","wireName":"pixel-id","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pixelId: Schema.String,
    "pixel-id": Schema.optional(Schema.String),
  }),
  outputSchema: Models.TimeseriesStatResponse,
});

export const snapchat_adsAPI_totalStat = defineEndpointDescriptor({
  id: "snapchat.adsAPI.totalStat",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/stats",
  summary: "measurement",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"breakdown","wireName":"breakdown","location":"query","required":false,"nullable":false},
    {"name":"async","wireName":"async","location":"query","required":false,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"query","required":false,"nullable":false},
    {"name":"fields","wireName":"fields","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"dimension","wireName":"dimension","location":"query","required":false,"nullable":false},
    {"name":"pivot","wireName":"pivot","location":"query","required":false,"nullable":false},
    {"name":"action_report_time","wireName":"action_report_time","location":"query","required":false,"nullable":false},
    {"name":"swipe_up_attribution_window","wireName":"swipe_up_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"view_attribution_window","wireName":"view_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"position_stats","wireName":"position_stats","location":"query","required":false,"nullable":false},
    {"name":"omit_empty","wireName":"omit_empty","location":"query","required":false,"nullable":false},
    {"name":"conversion_source_types","wireName":"conversion_source_types","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    breakdown: Schema.optional(Schema.String),
    async: Schema.optional(Schema.String),
    async_format: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    granularity: Models.GranularityEnum,
    test: Schema.optional(Schema.String),
    dimension: Schema.optional(Models.DimensionEnum),
    pivot: Schema.optional(Schema.String),
    action_report_time: Schema.optional(Schema.String),
    swipe_up_attribution_window: Schema.optional(Schema.String),
    view_attribution_window: Schema.optional(Schema.String),
    position_stats: Schema.optional(Schema.String),
    omit_empty: Schema.optional(Schema.String),
    conversion_source_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.TotalStatResponse,
});

export const snapchat_adsAPI_totalStat2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.totalStat2",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/stats",
  summary: "Example of Geographic Insights ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"report_dimension","wireName":"report_dimension","location":"query","required":false,"nullable":false},
    {"name":"breakdown","wireName":"breakdown","location":"query","required":false,"nullable":false},
    {"name":"async","wireName":"async","location":"query","required":false,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"query","required":false,"nullable":false},
    {"name":"fields","wireName":"fields","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"dimension","wireName":"dimension","location":"query","required":false,"nullable":false},
    {"name":"pivot","wireName":"pivot","location":"query","required":false,"nullable":false},
    {"name":"action_report_time","wireName":"action_report_time","location":"query","required":false,"nullable":false},
    {"name":"swipe_up_attribution_window","wireName":"swipe_up_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"view_attribution_window","wireName":"view_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"position_stats","wireName":"position_stats","location":"query","required":false,"nullable":false},
    {"name":"omit_empty","wireName":"omit_empty","location":"query","required":false,"nullable":false},
    {"name":"conversion_source_types","wireName":"conversion_source_types","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    report_dimension: Schema.optional(Schema.String),
    breakdown: Schema.optional(Schema.String),
    async: Schema.optional(Schema.String),
    async_format: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    granularity: Models.GranularityEnum,
    test: Schema.optional(Schema.String),
    dimension: Schema.optional(Models.DimensionEnum),
    pivot: Schema.optional(Schema.String),
    action_report_time: Schema.optional(Schema.String),
    swipe_up_attribution_window: Schema.optional(Schema.String),
    view_attribution_window: Schema.optional(Schema.String),
    position_stats: Schema.optional(Schema.String),
    omit_empty: Schema.optional(Schema.String),
    conversion_source_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.TotalStatResponse,
});

export const snapchat_adsAPI_totalStat3 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.totalStat3",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adaccounts/{ad_account_id}/stats",
  summary: "Example of Demographic Insights ​",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"report_dimension","wireName":"report_dimension","location":"query","required":false,"nullable":false},
    {"name":"breakdown","wireName":"breakdown","location":"query","required":false,"nullable":false},
    {"name":"async","wireName":"async","location":"query","required":false,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"query","required":false,"nullable":false},
    {"name":"fields","wireName":"fields","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"dimension","wireName":"dimension","location":"query","required":false,"nullable":false},
    {"name":"pivot","wireName":"pivot","location":"query","required":false,"nullable":false},
    {"name":"action_report_time","wireName":"action_report_time","location":"query","required":false,"nullable":false},
    {"name":"swipe_up_attribution_window","wireName":"swipe_up_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"view_attribution_window","wireName":"view_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"position_stats","wireName":"position_stats","location":"query","required":false,"nullable":false},
    {"name":"omit_empty","wireName":"omit_empty","location":"query","required":false,"nullable":false},
    {"name":"conversion_source_types","wireName":"conversion_source_types","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    report_dimension: Schema.optional(Schema.String),
    breakdown: Schema.optional(Schema.String),
    async: Schema.optional(Schema.String),
    async_format: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    granularity: Models.GranularityEnum,
    test: Schema.optional(Schema.String),
    dimension: Schema.optional(Models.DimensionEnum),
    pivot: Schema.optional(Schema.String),
    action_report_time: Schema.optional(Schema.String),
    swipe_up_attribution_window: Schema.optional(Schema.String),
    view_attribution_window: Schema.optional(Schema.String),
    position_stats: Schema.optional(Schema.String),
    omit_empty: Schema.optional(Schema.String),
    conversion_source_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.TotalStatResponse,
});

export const snapchat_adsAPI_totalStat4 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.totalStat4",
  platform: "snapchat",
  method: "GET",
  path: "/v1/ads/{ad_id}/stats",
  summary: "measurement",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adId","wireName":"adId","location":"path","required":true,"nullable":false},
    {"name":"breakdown","wireName":"breakdown","location":"query","required":false,"nullable":false},
    {"name":"async","wireName":"async","location":"query","required":false,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"query","required":false,"nullable":false},
    {"name":"fields","wireName":"fields","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"dimension","wireName":"dimension","location":"query","required":false,"nullable":false},
    {"name":"pivot","wireName":"pivot","location":"query","required":false,"nullable":false},
    {"name":"action_report_time","wireName":"action_report_time","location":"query","required":false,"nullable":false},
    {"name":"swipe_up_attribution_window","wireName":"swipe_up_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"view_attribution_window","wireName":"view_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"position_stats","wireName":"position_stats","location":"query","required":false,"nullable":false},
    {"name":"omit_empty","wireName":"omit_empty","location":"query","required":false,"nullable":false},
    {"name":"conversion_source_types","wireName":"conversion_source_types","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adId: Schema.String,
    breakdown: Schema.optional(Schema.String),
    async: Schema.optional(Schema.String),
    async_format: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    granularity: Models.GranularityEnum,
    test: Schema.optional(Schema.String),
    dimension: Schema.optional(Models.DimensionEnum),
    pivot: Schema.optional(Schema.String),
    action_report_time: Schema.optional(Schema.String),
    swipe_up_attribution_window: Schema.optional(Schema.String),
    view_attribution_window: Schema.optional(Schema.String),
    position_stats: Schema.optional(Schema.String),
    omit_empty: Schema.optional(Schema.String),
    conversion_source_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.TotalStatResponse,
});

export const snapchat_adsAPI_totalStat5 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.totalStat5",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adsquads/{adsquad_id}/stats",
  summary: "measurement",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adsquadId","wireName":"adsquadId","location":"path","required":true,"nullable":false},
    {"name":"breakdown","wireName":"breakdown","location":"query","required":false,"nullable":false},
    {"name":"async","wireName":"async","location":"query","required":false,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"query","required":false,"nullable":false},
    {"name":"fields","wireName":"fields","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"dimension","wireName":"dimension","location":"query","required":false,"nullable":false},
    {"name":"pivot","wireName":"pivot","location":"query","required":false,"nullable":false},
    {"name":"action_report_time","wireName":"action_report_time","location":"query","required":false,"nullable":false},
    {"name":"swipe_up_attribution_window","wireName":"swipe_up_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"view_attribution_window","wireName":"view_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"position_stats","wireName":"position_stats","location":"query","required":false,"nullable":false},
    {"name":"omit_empty","wireName":"omit_empty","location":"query","required":false,"nullable":false},
    {"name":"conversion_source_types","wireName":"conversion_source_types","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adsquadId: Schema.String,
    breakdown: Schema.optional(Schema.String),
    async: Schema.optional(Schema.String),
    async_format: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    granularity: Models.GranularityEnum,
    test: Schema.optional(Schema.String),
    dimension: Schema.optional(Models.DimensionEnum),
    pivot: Schema.optional(Schema.String),
    action_report_time: Schema.optional(Schema.String),
    swipe_up_attribution_window: Schema.optional(Schema.String),
    view_attribution_window: Schema.optional(Schema.String),
    position_stats: Schema.optional(Schema.String),
    omit_empty: Schema.optional(Schema.String),
    conversion_source_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.TotalStatResponse,
});

export const snapchat_adsAPI_totalStat6 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.totalStat6",
  platform: "snapchat",
  method: "GET",
  path: "/v1/adsquads/{adsquad-id}/stats",
  summary: "snap-pixel",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adsquadId","wireName":"adsquadId","location":"path","required":true,"nullable":false},
    {"name":"adsquad-id","wireName":"adsquad-id","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adsquadId: Schema.String,
    "adsquad-id": Schema.optional(Schema.String),
  }),
  outputSchema: Models.TotalStatResponse,
});

export const snapchat_adsAPI_totalStat7 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.totalStat7",
  platform: "snapchat",
  method: "GET",
  path: "/v1/campaigns/{campaign_id}/stats",
  summary: "measurement",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"campaignId","wireName":"campaignId","location":"path","required":true,"nullable":false},
    {"name":"breakdown","wireName":"breakdown","location":"query","required":false,"nullable":false},
    {"name":"async","wireName":"async","location":"query","required":false,"nullable":false},
    {"name":"async_format","wireName":"async_format","location":"query","required":false,"nullable":false},
    {"name":"fields","wireName":"fields","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":true,"nullable":false},
    {"name":"test","wireName":"test","location":"query","required":false,"nullable":false},
    {"name":"dimension","wireName":"dimension","location":"query","required":false,"nullable":false},
    {"name":"pivot","wireName":"pivot","location":"query","required":false,"nullable":false},
    {"name":"action_report_time","wireName":"action_report_time","location":"query","required":false,"nullable":false},
    {"name":"swipe_up_attribution_window","wireName":"swipe_up_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"view_attribution_window","wireName":"view_attribution_window","location":"query","required":false,"nullable":false},
    {"name":"position_stats","wireName":"position_stats","location":"query","required":false,"nullable":false},
    {"name":"omit_empty","wireName":"omit_empty","location":"query","required":false,"nullable":false},
    {"name":"conversion_source_types","wireName":"conversion_source_types","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaignId: Schema.String,
    breakdown: Schema.optional(Schema.String),
    async: Schema.optional(Schema.String),
    async_format: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    granularity: Models.GranularityEnum,
    test: Schema.optional(Schema.String),
    dimension: Schema.optional(Models.DimensionEnum),
    pivot: Schema.optional(Schema.String),
    action_report_time: Schema.optional(Schema.String),
    swipe_up_attribution_window: Schema.optional(Schema.String),
    view_attribution_window: Schema.optional(Schema.String),
    position_stats: Schema.optional(Schema.String),
    omit_empty: Schema.optional(Schema.String),
    conversion_source_types: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
  }),
  outputSchema: Models.TotalStatResponse,
});

export const snapchat_adsAPI_transaction = defineEndpointDescriptor({
  id: "snapchat.adsAPI.transaction",
  platform: "snapchat",
  method: "GET",
  path: "/v1/organizations/{organization_id}/transactions",
  summary: "transactions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
    start_time: Schema.optional(Schema.String),
    end_time: Schema.optional(Schema.String),
  }),
  outputSchema: Models.TransactionResponse,
});

export const snapchat_adsAPI_user = defineEndpointDescriptor({
  id: "snapchat.adsAPI.user",
  platform: "snapchat",
  method: "POST",
  path: "/v1/segments/{segment_id}/users",
  summary: "customer-lists",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"segmentId","wireName":"segmentId","location":"path","required":true,"nullable":false},
    {"name":"users","wireName":"users","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    segmentId: Schema.String,
    users: Schema.Array(Schema.suspend(() => Models.UsersBody)),
  }),
  outputSchema: Models.UserResponse,
});

export const snapchat_adsAPI_user2 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.user2",
  platform: "snapchat",
  method: "DELETE",
  path: "/v1/segments/{segment_id}/users",
  summary: "customer-lists",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"segmentId","wireName":"segmentId","location":"path","required":true,"nullable":false},
    {"name":"users","wireName":"users","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    segmentId: Schema.String,
    users: Schema.Array(Schema.suspend(() => Models.UsersBody)),
  }),
  outputSchema: Models.UserResponse,
});

export const snapchat_adsAPI_v1 = defineEndpointDescriptor({
  id: "snapchat.adsAPI.v1",
  platform: "snapchat",
  method: "DELETE",
  path: "/v1/{member_id}",
  summary: "members",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"memberId","wireName":"memberId","location":"path","required":true,"nullable":false},
    {"name":"member_id","wireName":"member_id","location":"body","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    memberId: Schema.String,
    member_id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.V1Response,
});

export const snapchat_adsAPI_vac = defineEndpointDescriptor({
  id: "snapchat.adsAPI.vac",
  platform: "snapchat",
  method: "GET",
  path: "/v1/targeting/v1/interests/vac",
  summary: "targeting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.read"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"country_code","wireName":"country_code","location":"query","required":false,"nullable":false},
    {"name":"is_hec","wireName":"is_hec","location":"query","required":false,"nullable":false},
    {"name":"limit","wireName":"limit","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Ad Squad by ID","wireName":"Get a specific Ad Squad by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Ad Squads under a Campaign","wireName":"Get all Ad Squads under a Campaign","location":"query","required":false,"nullable":false},
    {"name":"Get a specific Targeting Spec by ID","wireName":"Get a specific Targeting Spec by ID","location":"query","required":false,"nullable":false},
    {"name":"Get all Targeting Specs under an Ad Squad","wireName":"Get all Targeting Specs under an Ad Squad","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    country_code: Schema.optional(Schema.String),
    is_hec: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.String),
    "Get a specific Ad Squad by ID": Schema.optional(Schema.String),
    "Get all Ad Squads under a Campaign": Schema.optional(Schema.String),
    "Get a specific Targeting Spec by ID": Schema.optional(Schema.String),
    "Get all Targeting Specs under an Ad Squad": Schema.optional(Schema.String),
  }),
  outputSchema: Models.VacResponse,
});

export const snapchat_adsAPI_webViewProperties = defineEndpointDescriptor({
  id: "snapchat.adsAPI.webViewProperties",
  platform: "snapchat",
  method: "POST",
  path: "/v1/adaccounts/{ad_account_id}/creatives",
  summary: "creatives",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["snapchat-marketing-api"],
  capabilities: ["adsAPI.manage"],
  rateLimitBucket: "snapchat-ads-api",
  authSchemes: ["bearer"],
  protocols: ["json"],
  parameters: [
    {"name":"adAccountId","wireName":"adAccountId","location":"path","required":true,"nullable":false},
    {"name":"creatives","wireName":"creatives","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountId: Schema.String,
    creatives: Schema.Array(Schema.suspend(() => Models.CreativesBody)),
  }),
  outputSchema: Models.WebViewPropertiesResponse,
});

export const endpointDescriptors = [snapchat_adsAPI_accessToken, snapchat_adsAPI_accessToken2, snapchat_adsAPI_ad, snapchat_adsAPI_ad10, snapchat_adsAPI_ad2, snapchat_adsAPI_ad3, snapchat_adsAPI_ad4, snapchat_adsAPI_ad5, snapchat_adsAPI_ad6, snapchat_adsAPI_ad7, snapchat_adsAPI_ad8, snapchat_adsAPI_ad9, snapchat_adsAPI_adaccount, snapchat_adsAPI_adaccount2, snapchat_adsAPI_adaccount3, snapchat_adsAPI_adaccount4, snapchat_adsAPI_adsquad, snapchat_adsAPI_adsquad10, snapchat_adsAPI_adsquad11, snapchat_adsAPI_adsquad12, snapchat_adsAPI_adsquad2, snapchat_adsAPI_adsquad3, snapchat_adsAPI_adsquad4, snapchat_adsAPI_adsquad5, snapchat_adsAPI_adsquad6, snapchat_adsAPI_adsquad7, snapchat_adsAPI_adsquad8, snapchat_adsAPI_adsquad9, snapchat_adsAPI_adSquadOutcomeEstimateV2, snapchat_adsAPI_adSquadUiRenderData, snapchat_adsAPI_adSquadUiRenderData2, snapchat_adsAPI_adSquadUiRenderData3, snapchat_adsAPI_advancedDemographics, snapchat_adsAPI_ageGroup, snapchat_adsAPI_asyncStatsReport, snapchat_adsAPI_asyncStatsReport2, snapchat_adsAPI_asyncStatsReport3, snapchat_adsAPI_asyncStatsReport4, snapchat_adsAPI_asyncStatsReport5, snapchat_adsAPI_audienceSize, snapchat_adsAPI_audienceSizeV2, snapchat_adsAPI_audienceSizeV22, snapchat_adsAPI_bidEstimate, snapchat_adsAPI_bidEstimate2, snapchat_adsAPI_billingcenter, snapchat_adsAPI_billingcenter2, snapchat_adsAPI_billingcenter3, snapchat_adsAPI_billingcenter4, snapchat_adsAPI_campaign, snapchat_adsAPI_campaign2, snapchat_adsAPI_campaign3, snapchat_adsAPI_campaign4, snapchat_adsAPI_campaign5, snapchat_adsAPI_campaign6, snapchat_adsAPI_campaign7, snapchat_adsAPI_campaign8, snapchat_adsAPI_carrier, snapchat_adsAPI_carrier2, snapchat_adsAPI_catalog, snapchat_adsAPI_catalog2, snapchat_adsAPI_catalog3, snapchat_adsAPI_catalog4, snapchat_adsAPI_catalog5, snapchat_adsAPI_categoriesLoi, snapchat_adsAPI_changelog, snapchat_adsAPI_changelog2, snapchat_adsAPI_changelog3, snapchat_adsAPI_changelog4, snapchat_adsAPI_changelog5, snapchat_adsAPI_country, snapchat_adsAPI_creative, snapchat_adsAPI_creative10, snapchat_adsAPI_creative11, snapchat_adsAPI_creative12, snapchat_adsAPI_creative13, snapchat_adsAPI_creative14, snapchat_adsAPI_creative15, snapchat_adsAPI_creative16, snapchat_adsAPI_creative17, snapchat_adsAPI_creative18, snapchat_adsAPI_creative19, snapchat_adsAPI_creative2, snapchat_adsAPI_creative20, snapchat_adsAPI_creative21, snapchat_adsAPI_creative3, snapchat_adsAPI_creative4, snapchat_adsAPI_creative5, snapchat_adsAPI_creative6, snapchat_adsAPI_creative7, snapchat_adsAPI_creative8, snapchat_adsAPI_creative9, snapchat_adsAPI_creativeElement, snapchat_adsAPI_creativeElement2, snapchat_adsAPI_creativePreview, snapchat_adsAPI_dlxc, snapchat_adsAPI_dlxp, snapchat_adsAPI_dlxs, snapchat_adsAPI_dynamicTemplate, snapchat_adsAPI_dynamicTemplate2, snapchat_adsAPI_dynamicTemplate3, snapchat_adsAPI_dynamicTemplate4, snapchat_adsAPI_dynamicTemplate5, snapchat_adsAPI_dynamicTemplate6, snapchat_adsAPI_ecidStatu, snapchat_adsAPI_eventDetail, snapchat_adsAPI_eventDetail2, snapchat_adsAPI_eventDetail3, snapchat_adsAPI_eventDetail4, snapchat_adsAPI_facet, snapchat_adsAPI_feedUpload, snapchat_adsAPI_feedUpload2, snapchat_adsAPI_fundingsource, snapchat_adsAPI_fundingsource2, snapchat_adsAPI_gender, snapchat_adsAPI_interactionZone, snapchat_adsAPI_interactionZone2, snapchat_adsAPI_interactionZone3, snapchat_adsAPI_invoice, snapchat_adsAPI_invoice2, snapchat_adsAPI_languages, snapchat_adsAPI_leadGenerationForm, snapchat_adsAPI_leadGenerationForm2, snapchat_adsAPI_lensPreview, snapchat_adsAPI_lensPreview2, snapchat_adsAPI_lifetimeStat, snapchat_adsAPI_lifetimeStat2, snapchat_adsAPI_lifetimeStat3, snapchat_adsAPI_lifetimeStat4, snapchat_adsAPI_marketingName, snapchat_adsAPI_me, snapchat_adsAPI_media, snapchat_adsAPI_media2, snapchat_adsAPI_media3, snapchat_adsAPI_media4, snapchat_adsAPI_media5, snapchat_adsAPI_media6, snapchat_adsAPI_media7, snapchat_adsAPI_media8, snapchat_adsAPI_member, snapchat_adsAPI_member2, snapchat_adsAPI_member3, snapchat_adsAPI_metro, snapchat_adsAPI_metro2, snapchat_adsAPI_mobileApp, snapchat_adsAPI_mobileApp2, snapchat_adsAPI_mobileApp3, snapchat_adsAPI_nln, snapchat_adsAPI_option, snapchat_adsAPI_organization, snapchat_adsAPI_organization2, snapchat_adsAPI_organization3, snapchat_adsAPI_osType, snapchat_adsAPI_osType2, snapchat_adsAPI_phoneNumber, snapchat_adsAPI_pixel, snapchat_adsAPI_pixel2, snapchat_adsAPI_pixel3, snapchat_adsAPI_pixel4, snapchat_adsAPI_postalCode, snapchat_adsAPI_preview, snapchat_adsAPI_product, snapchat_adsAPI_productFeed, snapchat_adsAPI_productFeed2, snapchat_adsAPI_productFeed3, snapchat_adsAPI_productFeed4, snapchat_adsAPI_productFeed5, snapchat_adsAPI_productFeed6, snapchat_adsAPI_productSet, snapchat_adsAPI_productSet2, snapchat_adsAPI_productSet3, snapchat_adsAPI_productSet4, snapchat_adsAPI_productSet5, snapchat_adsAPI_reservedForecasting, snapchat_adsAPI_rol, snapchat_adsAPI_role, snapchat_adsAPI_role2, snapchat_adsAPI_role3, snapchat_adsAPI_role4, snapchat_adsAPI_role5, snapchat_adsAPI_role6, snapchat_adsAPI_role7, snapchat_adsAPI_role8, snapchat_adsAPI_scl, snapchat_adsAPI_search, snapchat_adsAPI_segment, snapchat_adsAPI_segment2, snapchat_adsAPI_segment3, snapchat_adsAPI_segment4, snapchat_adsAPI_segment5, snapchat_adsAPI_segment6, snapchat_adsAPI_segment7, snapchat_adsAPI_segment8, snapchat_adsAPI_segment9, snapchat_adsAPI_shp, snapchat_adsAPI_snapcode, snapchat_adsAPI_stats, snapchat_adsAPI_targetingInsight, snapchat_adsAPI_thumbnail, snapchat_adsAPI_timeseriesStat, snapchat_adsAPI_timeseriesStat2, snapchat_adsAPI_timeseriesStat3, snapchat_adsAPI_totalStat, snapchat_adsAPI_totalStat2, snapchat_adsAPI_totalStat3, snapchat_adsAPI_totalStat4, snapchat_adsAPI_totalStat5, snapchat_adsAPI_totalStat6, snapchat_adsAPI_totalStat7, snapchat_adsAPI_transaction, snapchat_adsAPI_user, snapchat_adsAPI_user2, snapchat_adsAPI_v1, snapchat_adsAPI_vac, snapchat_adsAPI_webViewProperties] as const;
