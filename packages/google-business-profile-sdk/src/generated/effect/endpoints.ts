// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const createLocalPost = defineEndpointDescriptor({
  id: "createLocalPost",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{locationName}/localPosts",
  summary: "create Local Post",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
  capabilities: ["local-post.publish"],
  rateLimitBucket: "local-post.publish",
  parameters: [
    {"name":"locationName","wireName":"locationName","location":"path","required":true,"nullable":false},
    {"name":"post","wireName":"post","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    locationName: Schema.String,
    post: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const deleteLocalPost = defineEndpointDescriptor({
  id: "deleteLocalPost",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusiness.googleapis.com/v4/{postName}",
  summary: "delete Local Post",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
  capabilities: ["local-post.delete"],
  rateLimitBucket: "local-post.delete",
  parameters: [
    {"name":"postName","wireName":"postName","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    postName: Schema.String,
  }),
  outputSchema: Schema.Literal(true),
});

export const exchangeOAuthCode = defineEndpointDescriptor({
  id: "exchangeOAuthCode",
  platform: "google-business-profile",
  method: "POST",
  path: "https://oauth2.googleapis.com/token",
  summary: "exchange O Auth Code",
  effect: "write",
  execution: "inline",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
  capabilities: ["oauth"],
  rateLimitBucket: "oauth",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const fetchMultiDailyMetricsTimeSeries = defineEndpointDescriptor({
  id: "fetchMultiDailyMetricsTimeSeries",
  platform: "google-business-profile",
  method: "GET",
  path: "https://businessprofileperformance.googleapis.com/v1/{locationName}:fetchMultiDailyMetricsTimeSeries",
  summary: "fetch Multi Daily Metrics Time Series",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
  capabilities: ["location.metrics.read"],
  rateLimitBucket: "location.metrics.read",
  parameters: [
    {"name":"locationName","wireName":"locationName","location":"path","required":true,"nullable":false},
    {"name":"dailyMetrics","wireName":"dailyMetrics","location":"query","required":true,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":true,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    locationName: Schema.String,
    dailyMetrics: Schema.Array(Schema.String),
    startDate: Schema.Unknown,
    endDate: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const getLocalPost = defineEndpointDescriptor({
  id: "getLocalPost",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{postName}",
  summary: "get Local Post",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
  capabilities: ["local-post.read"],
  rateLimitBucket: "local-post.read",
  parameters: [
    {"name":"postName","wireName":"postName","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    postName: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const listAccounts = defineEndpointDescriptor({
  id: "listAccounts",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
  summary: "list Accounts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
  capabilities: ["account.read"],
  rateLimitBucket: "account.read",
  parameters: [
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const listLocalPosts = defineEndpointDescriptor({
  id: "listLocalPosts",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{locationName}/localPosts",
  summary: "list Local Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
  capabilities: ["local-post.read"],
  rateLimitBucket: "local-post.read",
  parameters: [
    {"name":"locationName","wireName":"locationName","location":"path","required":true,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    locationName: Schema.String,
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const listLocations = defineEndpointDescriptor({
  id: "listLocations",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/{accountName}/locations",
  summary: "list Locations",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
  capabilities: ["location.read"],
  rateLimitBucket: "location.read",
  parameters: [
    {"name":"accountName","wireName":"accountName","location":"path","required":true,"nullable":false},
    {"name":"readMask","wireName":"readMask","location":"query","required":true,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"filter","wireName":"filter","location":"query","required":false,"nullable":false},
    {"name":"orderBy","wireName":"orderBy","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    accountName: Schema.String,
    readMask: Schema.String,
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const refreshOAuthToken = defineEndpointDescriptor({
  id: "refreshOAuthToken",
  platform: "google-business-profile",
  method: "POST",
  path: "https://oauth2.googleapis.com/token",
  summary: "refresh O Auth Token",
  effect: "write",
  execution: "inline",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
  capabilities: ["oauth"],
  rateLimitBucket: "oauth",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const reportLocalPostInsights = defineEndpointDescriptor({
  id: "reportLocalPostInsights",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{locationName}/localPosts:reportInsights",
  summary: "report Local Post Insights",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
  capabilities: ["local-post.metrics.read"],
  rateLimitBucket: "local-post.metrics.read",
  parameters: [
    {"name":"locationName","wireName":"locationName","location":"path","required":true,"nullable":false},
    {"name":"localPostNames","wireName":"localPostNames","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    locationName: Schema.String,
    localPostNames: Schema.Array(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const updateLocalPost = defineEndpointDescriptor({
  id: "updateLocalPost",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusiness.googleapis.com/v4/{postName}",
  summary: "update Local Post",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
  capabilities: ["local-post.publish"],
  rateLimitBucket: "local-post.publish",
  parameters: [
    {"name":"postName","wireName":"postName","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":true,"nullable":false},
    {"name":"post","wireName":"post","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    postName: Schema.String,
    updateMask: Schema.String,
    post: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const endpointDescriptors = [createLocalPost, deleteLocalPost, exchangeOAuthCode, fetchMultiDailyMetricsTimeSeries, getLocalPost, listAccounts, listLocalPosts, listLocations, refreshOAuthToken, reportLocalPostInsights, updateLocalPost] as const;
