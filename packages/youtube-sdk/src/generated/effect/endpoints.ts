// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@mosaic/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const youtube_abuseReports_insert = defineEndpointDescriptor({
  id: "youtube.abuseReports.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/abuseReports",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["abuseReports.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    part: Schema.String,
    body: Models.AbuseReport,
  }),
  outputSchema: Models.AbuseReport,
});

export const youtube_activities_list = defineEndpointDescriptor({
  id: "youtube.activities.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/activities",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly"],
  capabilities: ["activities.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"channelId","wireName":"channelId","location":"query","required":false,"nullable":false},
    {"name":"home","wireName":"home","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"mine","wireName":"mine","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"publishedAfter","wireName":"publishedAfter","location":"query","required":false,"nullable":false},
    {"name":"publishedBefore","wireName":"publishedBefore","location":"query","required":false,"nullable":false},
    {"name":"regionCode","wireName":"regionCode","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    channelId: Schema.optional(Schema.String),
    home: Schema.optional(Schema.Boolean),
    maxResults: Schema.optional(Schema.Int),
    mine: Schema.optional(Schema.Boolean),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
    publishedAfter: Schema.optional(Schema.String),
    publishedBefore: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ActivityListResponse,
});

export const youtube_analytics_groupItems_delete = defineEndpointDescriptor({
  id: "youtube.analytics.groupItems.delete",
  platform: "youtube",
  method: "DELETE",
  path: "https://youtubeanalytics.googleapis.com/v2/groupItems",
  summary: "Removes an item from a group.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner","https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["analytics.groupItems.manage"],
  rateLimitBucket: "youtube-analytics-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AnalyticsEmptyResponse,
});

export const youtube_analytics_groupItems_insert = defineEndpointDescriptor({
  id: "youtube.analytics.groupItems.insert",
  platform: "youtube",
  method: "POST",
  path: "https://youtubeanalytics.googleapis.com/v2/groupItems",
  summary: "Creates a group item.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner","https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["analytics.groupItems.manage"],
  rateLimitBucket: "youtube-analytics-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    body: Models.AnalyticsGroupItem,
  }),
  outputSchema: Models.AnalyticsGroupItem,
});

export const youtube_analytics_groupItems_list = defineEndpointDescriptor({
  id: "youtube.analytics.groupItems.list",
  platform: "youtube",
  method: "GET",
  path: "https://youtubeanalytics.googleapis.com/v2/groupItems",
  summary: "Returns a collection of group items that match the API request parameters.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner","https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["analytics.groupItems.read"],
  rateLimitBucket: "youtube-analytics-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"groupId","wireName":"groupId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    groupId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AnalyticsListGroupItemsResponse,
});

export const youtube_analytics_groups_delete = defineEndpointDescriptor({
  id: "youtube.analytics.groups.delete",
  platform: "youtube",
  method: "DELETE",
  path: "https://youtubeanalytics.googleapis.com/v2/groups",
  summary: "Deletes a group.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner","https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["analytics.groups.manage"],
  rateLimitBucket: "youtube-analytics-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AnalyticsEmptyResponse,
});

export const youtube_analytics_groups_insert = defineEndpointDescriptor({
  id: "youtube.analytics.groups.insert",
  platform: "youtube",
  method: "POST",
  path: "https://youtubeanalytics.googleapis.com/v2/groups",
  summary: "Creates a group.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner","https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["analytics.groups.manage"],
  rateLimitBucket: "youtube-analytics-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    body: Models.AnalyticsGroup,
  }),
  outputSchema: Models.AnalyticsGroup,
});

export const youtube_analytics_groups_list = defineEndpointDescriptor({
  id: "youtube.analytics.groups.list",
  platform: "youtube",
  method: "GET",
  path: "https://youtubeanalytics.googleapis.com/v2/groups",
  summary: "Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner","https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["analytics.groups.read"],
  rateLimitBucket: "youtube-analytics-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"mine","wireName":"mine","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    mine: Schema.optional(Schema.Boolean),
    pageToken: Schema.optional(Schema.String),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AnalyticsListGroupsResponse,
});

export const youtube_analytics_groups_update = defineEndpointDescriptor({
  id: "youtube.analytics.groups.update",
  platform: "youtube",
  method: "PUT",
  path: "https://youtubeanalytics.googleapis.com/v2/groups",
  summary: "Modifies a group. For example, you could change a group's title.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner","https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["analytics.groups.manage"],
  rateLimitBucket: "youtube-analytics-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    body: Models.AnalyticsGroup,
  }),
  outputSchema: Models.AnalyticsGroup,
});

export const youtube_analytics_reports_query = defineEndpointDescriptor({
  id: "youtube.analytics.reports.query",
  platform: "youtube",
  method: "GET",
  path: "https://youtubeanalytics.googleapis.com/v2/reports",
  summary: "Retrieve your YouTube Analytics reports.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner","https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["analytics.reports.read"],
  rateLimitBucket: "youtube-analytics-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"filters","wireName":"filters","location":"query","required":false,"nullable":false},
    {"name":"startDate","wireName":"startDate","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"ids","wireName":"ids","location":"query","required":false,"nullable":false},
    {"name":"includeHistoricalChannelData","wireName":"includeHistoricalChannelData","location":"query","required":false,"nullable":false},
    {"name":"currency","wireName":"currency","location":"query","required":false,"nullable":false},
    {"name":"startIndex","wireName":"startIndex","location":"query","required":false,"nullable":false},
    {"name":"dimensions","wireName":"dimensions","location":"query","required":false,"nullable":false},
    {"name":"sort","wireName":"sort","location":"query","required":false,"nullable":false},
    {"name":"endDate","wireName":"endDate","location":"query","required":false,"nullable":false},
    {"name":"metrics","wireName":"metrics","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    filters: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Int),
    ids: Schema.optional(Schema.String),
    includeHistoricalChannelData: Schema.optional(Schema.Boolean),
    currency: Schema.optional(Schema.String),
    startIndex: Schema.optional(Schema.Int),
    dimensions: Schema.optional(Schema.String),
    sort: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    metrics: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AnalyticsQueryResponse,
});

export const youtube_captions_delete = defineEndpointDescriptor({
  id: "youtube.captions.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/captions",
  summary: "Deletes a resource.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["captions.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"onBehalfOf","wireName":"onBehalfOf","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    onBehalfOf: Schema.optional(Schema.String),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_captions_download = defineEndpointDescriptor({
  id: "youtube.captions.download",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/captions/{id}",
  summary: "Downloads a caption track.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["captions.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"onBehalfOf","wireName":"onBehalfOf","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"tfmt","wireName":"tfmt","location":"query","required":false,"nullable":false},
    {"name":"tlang","wireName":"tlang","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    onBehalfOf: Schema.optional(Schema.String),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    tfmt: Schema.optional(Schema.String),
    tlang: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_captions_insert = defineEndpointDescriptor({
  id: "youtube.captions.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/captions",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["captions.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json","multipart","resumable"],
  parameters: [
    {"name":"onBehalfOf","wireName":"onBehalfOf","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"sync","wireName":"sync","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOf: Schema.optional(Schema.String),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    part: Schema.String,
    sync: Schema.optional(Schema.Boolean),
    body: Models.Caption,
  }),
  outputSchema: Models.Caption,
});

export const youtube_captions_list = defineEndpointDescriptor({
  id: "youtube.captions.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/captions",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["captions.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOf","wireName":"onBehalfOf","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"videoId","wireName":"videoId","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.optional(Schema.String),
    onBehalfOf: Schema.optional(Schema.String),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    part: Schema.String,
    videoId: Schema.String,
  }),
  outputSchema: Models.CaptionListResponse,
});

export const youtube_captions_update = defineEndpointDescriptor({
  id: "youtube.captions.update",
  platform: "youtube",
  method: "PUT",
  path: "youtube/v3/captions",
  summary: "Updates an existing resource.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["captions.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json","multipart","resumable"],
  parameters: [
    {"name":"onBehalfOf","wireName":"onBehalfOf","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"sync","wireName":"sync","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOf: Schema.optional(Schema.String),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    part: Schema.String,
    sync: Schema.optional(Schema.Boolean),
    body: Models.Caption,
  }),
  outputSchema: Models.Caption,
});

export const youtube_channelBanners_insert = defineEndpointDescriptor({
  id: "youtube.channelBanners.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/channelBanners/insert",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.upload"],
  capabilities: ["channelBanners.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json","multipart","resumable"],
  parameters: [
    {"name":"channelId","wireName":"channelId","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    channelId: Schema.optional(Schema.String),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    body: Models.ChannelBannerResource,
  }),
  outputSchema: Models.ChannelBannerResource,
});

export const youtube_channelSections_delete = defineEndpointDescriptor({
  id: "youtube.channelSections.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/channelSections",
  summary: "Deletes a resource.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["channelSections.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_channelSections_insert = defineEndpointDescriptor({
  id: "youtube.channelSections.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/channelSections",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["channelSections.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.ChannelSection,
  }),
  outputSchema: Models.ChannelSection,
});

export const youtube_channelSections_list = defineEndpointDescriptor({
  id: "youtube.channelSections.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/channelSections",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["channelSections.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"channelId","wireName":"channelId","location":"query","required":false,"nullable":false},
    {"name":"hl","wireName":"hl","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"mine","wireName":"mine","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    channelId: Schema.optional(Schema.String),
    hl: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    mine: Schema.optional(Schema.Boolean),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.ChannelSectionListResponse,
});

export const youtube_channelSections_update = defineEndpointDescriptor({
  id: "youtube.channelSections.update",
  platform: "youtube",
  method: "PUT",
  path: "youtube/v3/channelSections",
  summary: "Updates an existing resource.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["channelSections.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.ChannelSection,
  }),
  outputSchema: Models.ChannelSection,
});

export const youtube_channels_list = defineEndpointDescriptor({
  id: "youtube.channels.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/channels",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner","https://www.googleapis.com/auth/youtubepartner-channel-audit"],
  capabilities: ["channels.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"categoryId","wireName":"categoryId","location":"query","required":false,"nullable":false},
    {"name":"forHandle","wireName":"forHandle","location":"query","required":false,"nullable":false},
    {"name":"forUsername","wireName":"forUsername","location":"query","required":false,"nullable":false},
    {"name":"hl","wireName":"hl","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"managedByMe","wireName":"managedByMe","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"mine","wireName":"mine","location":"query","required":false,"nullable":false},
    {"name":"mySubscribers","wireName":"mySubscribers","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    categoryId: Schema.optional(Schema.String),
    forHandle: Schema.optional(Schema.String),
    forUsername: Schema.optional(Schema.String),
    hl: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    managedByMe: Schema.optional(Schema.Boolean),
    maxResults: Schema.optional(Schema.Int),
    mine: Schema.optional(Schema.Boolean),
    mySubscribers: Schema.optional(Schema.Boolean),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.ChannelListResponse,
});

export const youtube_channels_update = defineEndpointDescriptor({
  id: "youtube.channels.update",
  platform: "youtube",
  method: "PUT",
  path: "youtube/v3/channels",
  summary: "Updates an existing resource.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["channels.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.Channel,
  }),
  outputSchema: Models.Channel,
});

export const youtube_comments_delete = defineEndpointDescriptor({
  id: "youtube.comments.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/comments",
  summary: "Deletes a resource.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["comments.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_comments_insert = defineEndpointDescriptor({
  id: "youtube.comments.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/comments",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["comments.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    part: Schema.String,
    body: Models.Comment,
  }),
  outputSchema: Models.Comment,
});

export const youtube_comments_list = defineEndpointDescriptor({
  id: "youtube.comments.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/comments",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["comments.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parentId","wireName":"parentId","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"textFormat","wireName":"textFormat","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parentId: Schema.optional(Schema.String),
    part: Schema.String,
    textFormat: Schema.optional(Schema.Union(Schema.Literal("textFormatUnspecified"), Schema.Literal("html"), Schema.Literal("plainText"))),
  }),
  outputSchema: Models.CommentListResponse,
});

export const youtube_comments_markAsSpam = defineEndpointDescriptor({
  id: "youtube.comments.markAsSpam",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/comments/markAsSpam",
  summary: "Expresses the caller's opinion that one or more comments should be flagged as spam.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["comments.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_comments_setModerationStatus = defineEndpointDescriptor({
  id: "youtube.comments.setModerationStatus",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/comments/setModerationStatus",
  summary: "Sets the moderation status of one or more comments.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["comments.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"banAuthor","wireName":"banAuthor","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"moderationStatus","wireName":"moderationStatus","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    banAuthor: Schema.optional(Schema.Boolean),
    id: Schema.String,
    moderationStatus: Schema.Union(Schema.Literal("published"), Schema.Literal("heldForReview"), Schema.Literal("likelySpam"), Schema.Literal("rejected")),
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_comments_update = defineEndpointDescriptor({
  id: "youtube.comments.update",
  platform: "youtube",
  method: "PUT",
  path: "youtube/v3/comments",
  summary: "Updates an existing resource.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["comments.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    part: Schema.String,
    body: Models.Comment,
  }),
  outputSchema: Models.Comment,
});

export const youtube_commentThreads_insert = defineEndpointDescriptor({
  id: "youtube.commentThreads.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/commentThreads",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["commentThreads.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    part: Schema.String,
    body: Models.CommentThread,
  }),
  outputSchema: Models.CommentThread,
});

export const youtube_commentThreads_list = defineEndpointDescriptor({
  id: "youtube.commentThreads.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/commentThreads",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["commentThreads.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"allThreadsRelatedToChannelId","wireName":"allThreadsRelatedToChannelId","location":"query","required":false,"nullable":false},
    {"name":"channelId","wireName":"channelId","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"moderationStatus","wireName":"moderationStatus","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"postId","wireName":"postId","location":"query","required":false,"nullable":false},
    {"name":"searchTerms","wireName":"searchTerms","location":"query","required":false,"nullable":false},
    {"name":"textFormat","wireName":"textFormat","location":"query","required":false,"nullable":false},
    {"name":"videoId","wireName":"videoId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    allThreadsRelatedToChannelId: Schema.optional(Schema.String),
    channelId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Int),
    moderationStatus: Schema.optional(Schema.Union(Schema.Literal("published"), Schema.Literal("heldForReview"), Schema.Literal("likelySpam"), Schema.Literal("rejected"))),
    order: Schema.optional(Schema.Union(Schema.Literal("orderUnspecified"), Schema.Literal("time"), Schema.Literal("relevance"))),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
    postId: Schema.optional(Schema.String),
    searchTerms: Schema.optional(Schema.String),
    textFormat: Schema.optional(Schema.Union(Schema.Literal("textFormatUnspecified"), Schema.Literal("html"), Schema.Literal("plainText"))),
    videoId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.CommentThreadListResponse,
});

export const youtube_i18nLanguages_list = defineEndpointDescriptor({
  id: "youtube.i18nLanguages.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/i18nLanguages",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["i18nLanguages.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"hl","wireName":"hl","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    hl: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.I18nLanguageListResponse,
});

export const youtube_i18nRegions_list = defineEndpointDescriptor({
  id: "youtube.i18nRegions.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/i18nRegions",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["i18nRegions.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"hl","wireName":"hl","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    hl: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.I18nRegionListResponse,
});

export const youtube_liveBroadcasts_bind = defineEndpointDescriptor({
  id: "youtube.liveBroadcasts.bind",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/liveBroadcasts/bind",
  summary: "Bind a broadcast to a stream.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveBroadcasts.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"streamId","wireName":"streamId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    part: Schema.String,
    streamId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.LiveBroadcast,
});

export const youtube_liveBroadcasts_delete = defineEndpointDescriptor({
  id: "youtube.liveBroadcasts.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/liveBroadcasts",
  summary: "Delete a given broadcast.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveBroadcasts.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_liveBroadcasts_insert = defineEndpointDescriptor({
  id: "youtube.liveBroadcasts.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/liveBroadcasts",
  summary: "Inserts a new stream for the authenticated user.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveBroadcasts.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.LiveBroadcast,
  }),
  outputSchema: Models.LiveBroadcast,
});

export const youtube_liveBroadcasts_insertCuepoint = defineEndpointDescriptor({
  id: "youtube.liveBroadcasts.insertCuepoint",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/liveBroadcasts/cuepoint",
  summary: "Insert cuepoints in a broadcast",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["liveBroadcasts.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.optional(Schema.String),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    part: Schema.optional(Schema.String),
    body: Models.Cuepoint,
  }),
  outputSchema: Models.Cuepoint,
});

export const youtube_liveBroadcasts_list = defineEndpointDescriptor({
  id: "youtube.liveBroadcasts.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/liveBroadcasts",
  summary: "Retrieve the list of broadcasts associated with the given channel.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly"],
  capabilities: ["liveBroadcasts.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"broadcastStatus","wireName":"broadcastStatus","location":"query","required":false,"nullable":false},
    {"name":"broadcastType","wireName":"broadcastType","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"mine","wireName":"mine","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    broadcastStatus: Schema.optional(Schema.Union(Schema.Literal("broadcastStatusFilterUnspecified"), Schema.Literal("all"), Schema.Literal("active"), Schema.Literal("upcoming"), Schema.Literal("completed"))),
    broadcastType: Schema.optional(Schema.Union(Schema.Literal("broadcastTypeFilterUnspecified"), Schema.Literal("all"), Schema.Literal("event"), Schema.Literal("persistent"))),
    id: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Int),
    mine: Schema.optional(Schema.Boolean),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.LiveBroadcastListResponse,
});

export const youtube_liveBroadcasts_transition = defineEndpointDescriptor({
  id: "youtube.liveBroadcasts.transition",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/liveBroadcasts/transition",
  summary: "Transition a broadcast to a given status.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveBroadcasts.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"broadcastStatus","wireName":"broadcastStatus","location":"query","required":true,"nullable":false},
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    broadcastStatus: Schema.Union(Schema.Literal("statusUnspecified"), Schema.Literal("testing"), Schema.Literal("live"), Schema.Literal("complete")),
    id: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.LiveBroadcast,
});

export const youtube_liveBroadcasts_update = defineEndpointDescriptor({
  id: "youtube.liveBroadcasts.update",
  platform: "youtube",
  method: "PUT",
  path: "youtube/v3/liveBroadcasts",
  summary: "Updates an existing broadcast for the authenticated user.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveBroadcasts.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.LiveBroadcast,
  }),
  outputSchema: Models.LiveBroadcast,
});

export const youtube_liveChatBans_delete = defineEndpointDescriptor({
  id: "youtube.liveChatBans.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/liveChat/bans",
  summary: "Deletes a chat ban.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveChatBans.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_liveChatBans_insert = defineEndpointDescriptor({
  id: "youtube.liveChatBans.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/liveChat/bans",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveChatBans.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    part: Schema.String,
    body: Models.LiveChatBan,
  }),
  outputSchema: Models.LiveChatBan,
});

export const youtube_liveChatMessages_delete = defineEndpointDescriptor({
  id: "youtube.liveChatMessages.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/liveChat/messages",
  summary: "Deletes a chat message.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveChatMessages.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_liveChatMessages_insert = defineEndpointDescriptor({
  id: "youtube.liveChatMessages.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/liveChat/messages",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveChatMessages.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    part: Schema.String,
    body: Models.LiveChatMessage,
  }),
  outputSchema: Models.LiveChatMessage,
});

export const youtube_liveChatMessages_list = defineEndpointDescriptor({
  id: "youtube.liveChatMessages.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/liveChat/messages",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly"],
  capabilities: ["liveChatMessages.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"hl","wireName":"hl","location":"query","required":false,"nullable":false},
    {"name":"liveChatId","wireName":"liveChatId","location":"query","required":true,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"profileImageSize","wireName":"profileImageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    hl: Schema.optional(Schema.String),
    liveChatId: Schema.String,
    maxResults: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
    profileImageSize: Schema.optional(Schema.Int),
  }),
  outputSchema: Models.LiveChatMessageListResponse,
});

export const youtube_liveChatMessages_transition = defineEndpointDescriptor({
  id: "youtube.liveChatMessages.transition",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/liveChat/messages/transition",
  summary: "Transition a durable chat event.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveChatMessages.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"status","wireName":"status","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.optional(Schema.String),
    status: Schema.optional(Schema.Union(Schema.Literal("statusUnspecified"), Schema.Literal("closed"))),
  }),
  outputSchema: Models.LiveChatMessage,
});

export const youtube_liveChatModerators_delete = defineEndpointDescriptor({
  id: "youtube.liveChatModerators.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/liveChat/moderators",
  summary: "Deletes a chat moderator.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveChatModerators.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_liveChatModerators_insert = defineEndpointDescriptor({
  id: "youtube.liveChatModerators.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/liveChat/moderators",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveChatModerators.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    part: Schema.String,
    body: Models.LiveChatModerator,
  }),
  outputSchema: Models.LiveChatModerator,
});

export const youtube_liveChatModerators_list = defineEndpointDescriptor({
  id: "youtube.liveChatModerators.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/liveChat/moderators",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly"],
  capabilities: ["liveChatModerators.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"liveChatId","wireName":"liveChatId","location":"query","required":true,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    liveChatId: Schema.String,
    maxResults: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.LiveChatModeratorListResponse,
});

export const youtube_liveStreams_delete = defineEndpointDescriptor({
  id: "youtube.liveStreams.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/liveStreams",
  summary: "Deletes an existing stream for the authenticated user.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveStreams.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_liveStreams_insert = defineEndpointDescriptor({
  id: "youtube.liveStreams.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/liveStreams",
  summary: "Inserts a new stream for the authenticated user.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveStreams.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.LiveStream,
  }),
  outputSchema: Models.LiveStream,
});

export const youtube_liveStreams_list = defineEndpointDescriptor({
  id: "youtube.liveStreams.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/liveStreams",
  summary: "Retrieve the list of streams associated with the given channel. --",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly"],
  capabilities: ["liveStreams.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"mine","wireName":"mine","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Int),
    mine: Schema.optional(Schema.Boolean),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.LiveStreamListResponse,
});

export const youtube_liveStreams_update = defineEndpointDescriptor({
  id: "youtube.liveStreams.update",
  platform: "youtube",
  method: "PUT",
  path: "youtube/v3/liveStreams",
  summary: "Updates an existing stream for the authenticated user.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl"],
  capabilities: ["liveStreams.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.LiveStream,
  }),
  outputSchema: Models.LiveStream,
});

export const youtube_membershipsLevels_list = defineEndpointDescriptor({
  id: "youtube.membershipsLevels.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/membershipsLevels",
  summary: "Retrieves a list of all pricing levels offered by a creator to the fans.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.channel-memberships.creator"],
  capabilities: ["membershipsLevels.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    part: Schema.String,
  }),
  outputSchema: Models.MembershipsLevelListResponse,
});

export const youtube_members_list = defineEndpointDescriptor({
  id: "youtube.members.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/members",
  summary: "Retrieves a list of members that match the request criteria for a channel.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.channel-memberships.creator"],
  capabilities: ["members.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"filterByMemberChannelId","wireName":"filterByMemberChannelId","location":"query","required":false,"nullable":false},
    {"name":"hasAccessToLevel","wireName":"hasAccessToLevel","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"mode","wireName":"mode","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    filterByMemberChannelId: Schema.optional(Schema.String),
    hasAccessToLevel: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Int),
    mode: Schema.optional(Schema.Union(Schema.Literal("listMembersModeUnknown"), Schema.Literal("updates"), Schema.Literal("all_current"))),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.MemberListResponse,
});

export const youtube_playlistImages_delete = defineEndpointDescriptor({
  id: "youtube.playlistImages.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/playlistImages",
  summary: "Deletes a resource.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["playlistImages.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.optional(Schema.String),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_playlistImages_insert = defineEndpointDescriptor({
  id: "youtube.playlistImages.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/playlistImages",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["playlistImages.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json","multipart","resumable"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    part: Schema.optional(Schema.String),
    body: Models.PlaylistImage,
  }),
  outputSchema: Models.PlaylistImage,
});

export const youtube_playlistImages_list = defineEndpointDescriptor({
  id: "youtube.playlistImages.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/playlistImages",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["playlistImages.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    maxResults: Schema.optional(Schema.Int),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    part: Schema.optional(Schema.String),
  }),
  outputSchema: Models.PlaylistImageListResponse,
});

export const youtube_playlistImages_update = defineEndpointDescriptor({
  id: "youtube.playlistImages.update",
  platform: "youtube",
  method: "PUT",
  path: "youtube/v3/playlistImages",
  summary: "Updates an existing resource.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["playlistImages.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json","multipart","resumable"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    part: Schema.optional(Schema.String),
    body: Models.PlaylistImage,
  }),
  outputSchema: Models.PlaylistImage,
});

export const youtube_playlistItems_delete = defineEndpointDescriptor({
  id: "youtube.playlistItems.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/playlistItems",
  summary: "Deletes a resource.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["playlistItems.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_playlistItems_insert = defineEndpointDescriptor({
  id: "youtube.playlistItems.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/playlistItems",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["playlistItems.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.PlaylistItem,
  }),
  outputSchema: Models.PlaylistItem,
});

export const youtube_playlistItems_list = defineEndpointDescriptor({
  id: "youtube.playlistItems.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/playlistItems",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["playlistItems.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"playlistId","wireName":"playlistId","location":"query","required":false,"nullable":false},
    {"name":"videoId","wireName":"videoId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Int),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
    playlistId: Schema.optional(Schema.String),
    videoId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.PlaylistItemListResponse,
});

export const youtube_playlistItems_update = defineEndpointDescriptor({
  id: "youtube.playlistItems.update",
  platform: "youtube",
  method: "PUT",
  path: "youtube/v3/playlistItems",
  summary: "Updates an existing resource.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["playlistItems.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.PlaylistItem,
  }),
  outputSchema: Models.PlaylistItem,
});

export const youtube_playlists_delete = defineEndpointDescriptor({
  id: "youtube.playlists.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/playlists",
  summary: "Deletes a resource.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["playlists.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_playlists_insert = defineEndpointDescriptor({
  id: "youtube.playlists.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/playlists",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["playlists.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.Playlist,
  }),
  outputSchema: Models.Playlist,
});

export const youtube_playlists_list = defineEndpointDescriptor({
  id: "youtube.playlists.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/playlists",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["playlists.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"channelId","wireName":"channelId","location":"query","required":false,"nullable":false},
    {"name":"hl","wireName":"hl","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"mine","wireName":"mine","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    channelId: Schema.optional(Schema.String),
    hl: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Int),
    mine: Schema.optional(Schema.Boolean),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.PlaylistListResponse,
});

export const youtube_playlists_update = defineEndpointDescriptor({
  id: "youtube.playlists.update",
  platform: "youtube",
  method: "PUT",
  path: "youtube/v3/playlists",
  summary: "Updates an existing resource.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["playlists.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.Playlist,
  }),
  outputSchema: Models.Playlist,
});

export const youtube_reporting_jobs_create = defineEndpointDescriptor({
  id: "youtube.reporting.jobs.create",
  platform: "youtube",
  method: "POST",
  path: "https://youtubereporting.googleapis.com/v1/jobs",
  summary: "Creates a job and returns it.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["reporting.jobs.manage"],
  rateLimitBucket: "youtube-reporting-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    body: Models.ReportingJob,
  }),
  outputSchema: Models.ReportingJob,
});

export const youtube_reporting_jobs_delete = defineEndpointDescriptor({
  id: "youtube.reporting.jobs.delete",
  platform: "youtube",
  method: "DELETE",
  path: "https://youtubereporting.googleapis.com/v1/jobs/{jobId}",
  summary: "Deletes a job.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["reporting.jobs.manage"],
  rateLimitBucket: "youtube-reporting-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"jobId","wireName":"jobId","location":"path","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    jobId: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ReportingEmpty,
});

export const youtube_reporting_jobs_get = defineEndpointDescriptor({
  id: "youtube.reporting.jobs.get",
  platform: "youtube",
  method: "GET",
  path: "https://youtubereporting.googleapis.com/v1/jobs/{jobId}",
  summary: "Gets a job.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["reporting.jobs.read"],
  rateLimitBucket: "youtube-reporting-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"jobId","wireName":"jobId","location":"path","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    jobId: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ReportingJob,
});

export const youtube_reporting_jobs_list = defineEndpointDescriptor({
  id: "youtube.reporting.jobs.list",
  platform: "youtube",
  method: "GET",
  path: "https://youtubereporting.googleapis.com/v1/jobs",
  summary: "Lists jobs.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["reporting.jobs.read"],
  rateLimitBucket: "youtube-reporting-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"includeSystemManaged","wireName":"includeSystemManaged","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pageToken: Schema.optional(Schema.String),
    includeSystemManaged: Schema.optional(Schema.Boolean),
    pageSize: Schema.optional(Schema.Int),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ReportingListJobsResponse,
});

export const youtube_reporting_jobs_reports_get = defineEndpointDescriptor({
  id: "youtube.reporting.jobs.reports.get",
  platform: "youtube",
  method: "GET",
  path: "https://youtubereporting.googleapis.com/v1/jobs/{jobId}/reports/{reportId}",
  summary: "Gets the metadata of a specific report.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["reporting.jobs.reports.read"],
  rateLimitBucket: "youtube-reporting-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"jobId","wireName":"jobId","location":"path","required":true,"nullable":false},
    {"name":"reportId","wireName":"reportId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    jobId: Schema.String,
    reportId: Schema.String,
  }),
  outputSchema: Models.ReportingReport,
});

export const youtube_reporting_jobs_reports_list = defineEndpointDescriptor({
  id: "youtube.reporting.jobs.reports.list",
  platform: "youtube",
  method: "GET",
  path: "https://youtubereporting.googleapis.com/v1/jobs/{jobId}/reports",
  summary: "Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["reporting.jobs.reports.read"],
  rateLimitBucket: "youtube-reporting-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"jobId","wireName":"jobId","location":"path","required":true,"nullable":false},
    {"name":"createdAfter","wireName":"createdAfter","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"startTimeAtOrAfter","wireName":"startTimeAtOrAfter","location":"query","required":false,"nullable":false},
    {"name":"startTimeBefore","wireName":"startTimeBefore","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    jobId: Schema.String,
    createdAfter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    startTimeAtOrAfter: Schema.optional(Schema.String),
    startTimeBefore: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ReportingListReportsResponse,
});

export const youtube_reporting_media_download = defineEndpointDescriptor({
  id: "youtube.reporting.media.download",
  platform: "youtube",
  method: "GET",
  path: "https://youtubereporting.googleapis.com/v1/media/{+resourceName}",
  summary: "Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["reporting.media.read"],
  rateLimitBucket: "youtube-reporting-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"resourceName","wireName":"resourceName","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    resourceName: Schema.String,
  }),
  outputSchema: Models.ReportingGdataMedia,
});

export const youtube_reporting_reportTypes_list = defineEndpointDescriptor({
  id: "youtube.reporting.reportTypes.list",
  platform: "youtube",
  method: "GET",
  path: "https://youtubereporting.googleapis.com/v1/reportTypes",
  summary: "Lists report types.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/yt-analytics-monetary.readonly","https://www.googleapis.com/auth/yt-analytics.readonly"],
  capabilities: ["reporting.reportTypes.read"],
  rateLimitBucket: "youtube-reporting-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"includeSystemManaged","wireName":"includeSystemManaged","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    includeSystemManaged: Schema.optional(Schema.Boolean),
    pageSize: Schema.optional(Schema.Int),
  }),
  outputSchema: Models.ReportingListReportTypesResponse,
});

export const youtube_search_list = defineEndpointDescriptor({
  id: "youtube.search.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/search",
  summary: "Retrieves a list of search resources",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["search.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"channelId","wireName":"channelId","location":"query","required":false,"nullable":false},
    {"name":"channelType","wireName":"channelType","location":"query","required":false,"nullable":false},
    {"name":"eventType","wireName":"eventType","location":"query","required":false,"nullable":false},
    {"name":"forContentOwner","wireName":"forContentOwner","location":"query","required":false,"nullable":false},
    {"name":"forDeveloper","wireName":"forDeveloper","location":"query","required":false,"nullable":false},
    {"name":"forMine","wireName":"forMine","location":"query","required":false,"nullable":false},
    {"name":"location","wireName":"location","location":"query","required":false,"nullable":false},
    {"name":"locationRadius","wireName":"locationRadius","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"publishedAfter","wireName":"publishedAfter","location":"query","required":false,"nullable":false},
    {"name":"publishedBefore","wireName":"publishedBefore","location":"query","required":false,"nullable":false},
    {"name":"q","wireName":"q","location":"query","required":false,"nullable":false},
    {"name":"regionCode","wireName":"regionCode","location":"query","required":false,"nullable":false},
    {"name":"relevanceLanguage","wireName":"relevanceLanguage","location":"query","required":false,"nullable":false},
    {"name":"safeSearch","wireName":"safeSearch","location":"query","required":false,"nullable":false},
    {"name":"topicId","wireName":"topicId","location":"query","required":false,"nullable":false},
    {"name":"type","wireName":"type","location":"query","required":false,"nullable":false},
    {"name":"videoCaption","wireName":"videoCaption","location":"query","required":false,"nullable":false},
    {"name":"videoCategoryId","wireName":"videoCategoryId","location":"query","required":false,"nullable":false},
    {"name":"videoDefinition","wireName":"videoDefinition","location":"query","required":false,"nullable":false},
    {"name":"videoDimension","wireName":"videoDimension","location":"query","required":false,"nullable":false},
    {"name":"videoDuration","wireName":"videoDuration","location":"query","required":false,"nullable":false},
    {"name":"videoEmbeddable","wireName":"videoEmbeddable","location":"query","required":false,"nullable":false},
    {"name":"videoLicense","wireName":"videoLicense","location":"query","required":false,"nullable":false},
    {"name":"videoPaidProductPlacement","wireName":"videoPaidProductPlacement","location":"query","required":false,"nullable":false},
    {"name":"videoSyndicated","wireName":"videoSyndicated","location":"query","required":false,"nullable":false},
    {"name":"videoType","wireName":"videoType","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    channelId: Schema.optional(Schema.String),
    channelType: Schema.optional(Schema.Union(Schema.Literal("channelTypeUnspecified"), Schema.Literal("any"), Schema.Literal("show"))),
    eventType: Schema.optional(Schema.Union(Schema.Literal("none"), Schema.Literal("upcoming"), Schema.Literal("live"), Schema.Literal("completed"))),
    forContentOwner: Schema.optional(Schema.Boolean),
    forDeveloper: Schema.optional(Schema.Boolean),
    forMine: Schema.optional(Schema.Boolean),
    location: Schema.optional(Schema.String),
    locationRadius: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Int),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    order: Schema.optional(Schema.Union(Schema.Literal("searchSortUnspecified"), Schema.Literal("date"), Schema.Literal("rating"), Schema.Literal("viewCount"), Schema.Literal("relevance"), Schema.Literal("title"), Schema.Literal("videoCount"))),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
    publishedAfter: Schema.optional(Schema.String),
    publishedBefore: Schema.optional(Schema.String),
    q: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    relevanceLanguage: Schema.optional(Schema.String),
    safeSearch: Schema.optional(Schema.Union(Schema.Literal("safeSearchSettingUnspecified"), Schema.Literal("none"), Schema.Literal("moderate"), Schema.Literal("strict"))),
    topicId: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    videoCaption: Schema.optional(Schema.Union(Schema.Literal("videoCaptionUnspecified"), Schema.Literal("any"), Schema.Literal("closedCaption"), Schema.Literal("none"))),
    videoCategoryId: Schema.optional(Schema.String),
    videoDefinition: Schema.optional(Schema.Union(Schema.Literal("any"), Schema.Literal("standard"), Schema.Literal("high"))),
    videoDimension: Schema.optional(Schema.Union(Schema.Literal("any"), Schema.Literal("2d"), Schema.Literal("3d"))),
    videoDuration: Schema.optional(Schema.Union(Schema.Literal("videoDurationUnspecified"), Schema.Literal("any"), Schema.Literal("short"), Schema.Literal("medium"), Schema.Literal("long"))),
    videoEmbeddable: Schema.optional(Schema.Union(Schema.Literal("videoEmbeddableUnspecified"), Schema.Literal("any"), Schema.Literal("true"))),
    videoLicense: Schema.optional(Schema.Union(Schema.Literal("any"), Schema.Literal("youtube"), Schema.Literal("creativeCommon"))),
    videoPaidProductPlacement: Schema.optional(Schema.Union(Schema.Literal("videoPaidProductPlacementUnspecified"), Schema.Literal("any"), Schema.Literal("true"))),
    videoSyndicated: Schema.optional(Schema.Union(Schema.Literal("videoSyndicatedUnspecified"), Schema.Literal("any"), Schema.Literal("true"))),
    videoType: Schema.optional(Schema.Union(Schema.Literal("videoTypeUnspecified"), Schema.Literal("any"), Schema.Literal("movie"), Schema.Literal("episode"))),
  }),
  outputSchema: Models.SearchListResponse,
});

export const youtube_subscriptions_delete = defineEndpointDescriptor({
  id: "youtube.subscriptions.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/subscriptions",
  summary: "Deletes a resource.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["subscriptions.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_subscriptions_insert = defineEndpointDescriptor({
  id: "youtube.subscriptions.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/subscriptions",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["subscriptions.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    part: Schema.String,
    body: Models.Subscription,
  }),
  outputSchema: Models.Subscription,
});

export const youtube_subscriptions_list = defineEndpointDescriptor({
  id: "youtube.subscriptions.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/subscriptions",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["subscriptions.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"channelId","wireName":"channelId","location":"query","required":false,"nullable":false},
    {"name":"forChannelId","wireName":"forChannelId","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"mine","wireName":"mine","location":"query","required":false,"nullable":false},
    {"name":"myRecentSubscribers","wireName":"myRecentSubscribers","location":"query","required":false,"nullable":false},
    {"name":"mySubscribers","wireName":"mySubscribers","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"order","wireName":"order","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    channelId: Schema.optional(Schema.String),
    forChannelId: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Int),
    mine: Schema.optional(Schema.Boolean),
    myRecentSubscribers: Schema.optional(Schema.Boolean),
    mySubscribers: Schema.optional(Schema.Boolean),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    order: Schema.optional(Schema.Union(Schema.Literal("subscriptionOrderUnspecified"), Schema.Literal("relevance"), Schema.Literal("unread"), Schema.Literal("alphabetical"))),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.SubscriptionListResponse,
});

export const youtube_superChatEvents_list = defineEndpointDescriptor({
  id: "youtube.superChatEvents.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/superChatEvents",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly"],
  capabilities: ["superChatEvents.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"hl","wireName":"hl","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    hl: Schema.optional(Schema.String),
    maxResults: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.SuperChatEventListResponse,
});

export const youtube_tests_insert = defineEndpointDescriptor({
  id: "youtube.tests.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/tests",
  summary: "POST method.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube.readonly"],
  capabilities: ["tests.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"externalChannelId","wireName":"externalChannelId","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    externalChannelId: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.TestItem,
  }),
  outputSchema: Models.TestItem,
});

export const youtube_thirdPartyLinks_delete = defineEndpointDescriptor({
  id: "youtube.thirdPartyLinks.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/thirdPartyLinks",
  summary: "Deletes a resource.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["thirdPartyLinks.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["ApiKey","OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"externalChannelId","wireName":"externalChannelId","location":"query","required":false,"nullable":false},
    {"name":"linkingToken","wireName":"linkingToken","location":"query","required":true,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":false,"nullable":false},
    {"name":"type","wireName":"type","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    externalChannelId: Schema.optional(Schema.String),
    linkingToken: Schema.String,
    part: Schema.optional(Schema.String),
    type: Schema.Union(Schema.Literal("linkUnspecified"), Schema.Literal("channelToStoreLink"), Schema.Literal("channelToAffiliateProgramLink")),
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_thirdPartyLinks_insert = defineEndpointDescriptor({
  id: "youtube.thirdPartyLinks.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/thirdPartyLinks",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["thirdPartyLinks.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["ApiKey","OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"externalChannelId","wireName":"externalChannelId","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    externalChannelId: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.ThirdPartyLink,
  }),
  outputSchema: Models.ThirdPartyLink,
});

export const youtube_thirdPartyLinks_list = defineEndpointDescriptor({
  id: "youtube.thirdPartyLinks.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/thirdPartyLinks",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["thirdPartyLinks.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["ApiKey","OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"externalChannelId","wireName":"externalChannelId","location":"query","required":false,"nullable":false},
    {"name":"linkingToken","wireName":"linkingToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"type","wireName":"type","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    externalChannelId: Schema.optional(Schema.String),
    linkingToken: Schema.optional(Schema.String),
    part: Schema.String,
    type: Schema.optional(Schema.Union(Schema.Literal("linkUnspecified"), Schema.Literal("channelToStoreLink"), Schema.Literal("channelToAffiliateProgramLink"))),
  }),
  outputSchema: Models.ThirdPartyLinkListResponse,
});

export const youtube_thirdPartyLinks_update = defineEndpointDescriptor({
  id: "youtube.thirdPartyLinks.update",
  platform: "youtube",
  method: "PUT",
  path: "youtube/v3/thirdPartyLinks",
  summary: "Updates an existing resource.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["thirdPartyLinks.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["ApiKey","OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"externalChannelId","wireName":"externalChannelId","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    externalChannelId: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.ThirdPartyLink,
  }),
  outputSchema: Models.ThirdPartyLink,
});

export const youtube_thumbnails_set = defineEndpointDescriptor({
  id: "youtube.thumbnails.set",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/thumbnails/set",
  summary: "As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.upload","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["thumbnails.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json","multipart","resumable"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"videoId","wireName":"videoId","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    videoId: Schema.String,
  }),
  outputSchema: Models.ThumbnailSetResponse,
});

export const youtube_videoAbuseReportReasons_list = defineEndpointDescriptor({
  id: "youtube.videoAbuseReportReasons.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/videoAbuseReportReasons",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly"],
  capabilities: ["videoAbuseReportReasons.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"hl","wireName":"hl","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    hl: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.VideoAbuseReportReasonListResponse,
});

export const youtube_videoCategories_list = defineEndpointDescriptor({
  id: "youtube.videoCategories.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/videoCategories",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["videoCategories.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"hl","wireName":"hl","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"regionCode","wireName":"regionCode","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    hl: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    part: Schema.String,
    regionCode: Schema.optional(Schema.String),
  }),
  outputSchema: Models.VideoCategoryListResponse,
});

export const youtube_videos_batchGetStats = defineEndpointDescriptor({
  id: "youtube.videos.batchGetStats",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/videos:batchGetStats",
  summary: "Retrieves a batch of VideoStat resources, possibly filtered. BatchGetStats is intentionally not atomic to provide a better user experience.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["posts.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    part: Schema.String,
  }),
  outputSchema: Models.BatchGetStatsResponse,
});

export const youtube_videos_delete = defineEndpointDescriptor({
  id: "youtube.videos.delete",
  platform: "youtube",
  method: "DELETE",
  path: "youtube/v3/videos",
  summary: "Deletes a resource.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["posts.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_videos_getRating = defineEndpointDescriptor({
  id: "youtube.videos.getRating",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/videos/getRating",
  summary: "Retrieves the ratings that the authorized user gave to a list of specified videos.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["posts.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
  }),
  outputSchema: Models.VideoGetRatingResponse,
});

export const youtube_videos_insert = defineEndpointDescriptor({
  id: "youtube.videos.insert",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/videos",
  summary: "Inserts a new resource into this collection.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.upload","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["posts.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json","multipart","resumable"],
  parameters: [
    {"name":"autoLevels","wireName":"autoLevels","location":"query","required":false,"nullable":false},
    {"name":"notifySubscribers","wireName":"notifySubscribers","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwnerChannel","wireName":"onBehalfOfContentOwnerChannel","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"stabilize","wireName":"stabilize","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    autoLevels: Schema.optional(Schema.Boolean),
    notifySubscribers: Schema.optional(Schema.Boolean),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    onBehalfOfContentOwnerChannel: Schema.optional(Schema.String),
    part: Schema.String,
    stabilize: Schema.optional(Schema.Boolean),
    body: Models.Video,
  }),
  outputSchema: Models.Video,
});

export const youtube_videos_list = defineEndpointDescriptor({
  id: "youtube.videos.list",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/videos",
  summary: "Retrieves a list of resources, possibly filtered.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["posts.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"chart","wireName":"chart","location":"query","required":false,"nullable":false},
    {"name":"hl","wireName":"hl","location":"query","required":false,"nullable":false},
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false},
    {"name":"locale","wireName":"locale","location":"query","required":false,"nullable":false},
    {"name":"maxHeight","wireName":"maxHeight","location":"query","required":false,"nullable":false},
    {"name":"maxResults","wireName":"maxResults","location":"query","required":false,"nullable":false},
    {"name":"maxWidth","wireName":"maxWidth","location":"query","required":false,"nullable":false},
    {"name":"myRating","wireName":"myRating","location":"query","required":false,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"regionCode","wireName":"regionCode","location":"query","required":false,"nullable":false},
    {"name":"videoCategoryId","wireName":"videoCategoryId","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    chart: Schema.optional(Schema.Union(Schema.Literal("chartUnspecified"), Schema.Literal("mostPopular"))),
    hl: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
    maxHeight: Schema.optional(Schema.Int),
    maxResults: Schema.optional(Schema.Int),
    maxWidth: Schema.optional(Schema.Int),
    myRating: Schema.optional(Schema.Union(Schema.Literal("none"), Schema.Literal("like"), Schema.Literal("dislike"))),
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    part: Schema.String,
    regionCode: Schema.optional(Schema.String),
    videoCategoryId: Schema.optional(Schema.String),
  }),
  outputSchema: Models.VideoListResponse,
});

export const youtube_videos_rate = defineEndpointDescriptor({
  id: "youtube.videos.rate",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/videos/rate",
  summary: "Adds a like or dislike rating to a video or removes a rating from a video.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["posts.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":true,"nullable":false},
    {"name":"rating","wireName":"rating","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    rating: Schema.Union(Schema.Literal("none"), Schema.Literal("like"), Schema.Literal("dislike")),
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_videos_reportAbuse = defineEndpointDescriptor({
  id: "youtube.videos.reportAbuse",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/videos/reportAbuse",
  summary: "Report abuse for a video.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["posts.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    body: Models.VideoAbuseReport,
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_videos_update = defineEndpointDescriptor({
  id: "youtube.videos.update",
  platform: "youtube",
  method: "PUT",
  path: "youtube/v3/videos",
  summary: "Updates an existing resource.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["posts.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"part","wireName":"part","location":"query","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    part: Schema.String,
    body: Models.Video,
  }),
  outputSchema: Models.Video,
});

export const youtube_videoTrainability_get = defineEndpointDescriptor({
  id: "youtube.videoTrainability.get",
  platform: "youtube",
  method: "GET",
  path: "youtube/v3/videoTrainability",
  summary: "Returns the trainability status of a video.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.readonly","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["videoTrainability.read"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.optional(Schema.String),
  }),
  outputSchema: Models.VideoTrainability,
});

export const youtube_watermarks_set = defineEndpointDescriptor({
  id: "youtube.watermarks.set",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/watermarks/set",
  summary: "Allows upload of watermark image and setting it for a channel.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtube.upload","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["watermarks.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json","multipart","resumable"],
  parameters: [
    {"name":"channelId","wireName":"channelId","location":"query","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    channelId: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
    body: Models.InvideoBranding,
  }),
  outputSchema: Schema.Unknown,
});

export const youtube_watermarks_unset = defineEndpointDescriptor({
  id: "youtube.watermarks.unset",
  platform: "youtube",
  method: "POST",
  path: "youtube/v3/watermarks/unset",
  summary: "Allows removal of channel watermark.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/youtube.force-ssl","https://www.googleapis.com/auth/youtubepartner"],
  capabilities: ["watermarks.manage"],
  rateLimitBucket: "youtube-data-api",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"channelId","wireName":"channelId","location":"query","required":true,"nullable":false},
    {"name":"onBehalfOfContentOwner","wireName":"onBehalfOfContentOwner","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    channelId: Schema.String,
    onBehalfOfContentOwner: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const endpointDescriptors = [youtube_abuseReports_insert, youtube_activities_list, youtube_analytics_groupItems_delete, youtube_analytics_groupItems_insert, youtube_analytics_groupItems_list, youtube_analytics_groups_delete, youtube_analytics_groups_insert, youtube_analytics_groups_list, youtube_analytics_groups_update, youtube_analytics_reports_query, youtube_captions_delete, youtube_captions_download, youtube_captions_insert, youtube_captions_list, youtube_captions_update, youtube_channelBanners_insert, youtube_channelSections_delete, youtube_channelSections_insert, youtube_channelSections_list, youtube_channelSections_update, youtube_channels_list, youtube_channels_update, youtube_comments_delete, youtube_comments_insert, youtube_comments_list, youtube_comments_markAsSpam, youtube_comments_setModerationStatus, youtube_comments_update, youtube_commentThreads_insert, youtube_commentThreads_list, youtube_i18nLanguages_list, youtube_i18nRegions_list, youtube_liveBroadcasts_bind, youtube_liveBroadcasts_delete, youtube_liveBroadcasts_insert, youtube_liveBroadcasts_insertCuepoint, youtube_liveBroadcasts_list, youtube_liveBroadcasts_transition, youtube_liveBroadcasts_update, youtube_liveChatBans_delete, youtube_liveChatBans_insert, youtube_liveChatMessages_delete, youtube_liveChatMessages_insert, youtube_liveChatMessages_list, youtube_liveChatMessages_transition, youtube_liveChatModerators_delete, youtube_liveChatModerators_insert, youtube_liveChatModerators_list, youtube_liveStreams_delete, youtube_liveStreams_insert, youtube_liveStreams_list, youtube_liveStreams_update, youtube_membershipsLevels_list, youtube_members_list, youtube_playlistImages_delete, youtube_playlistImages_insert, youtube_playlistImages_list, youtube_playlistImages_update, youtube_playlistItems_delete, youtube_playlistItems_insert, youtube_playlistItems_list, youtube_playlistItems_update, youtube_playlists_delete, youtube_playlists_insert, youtube_playlists_list, youtube_playlists_update, youtube_reporting_jobs_create, youtube_reporting_jobs_delete, youtube_reporting_jobs_get, youtube_reporting_jobs_list, youtube_reporting_jobs_reports_get, youtube_reporting_jobs_reports_list, youtube_reporting_media_download, youtube_reporting_reportTypes_list, youtube_search_list, youtube_subscriptions_delete, youtube_subscriptions_insert, youtube_subscriptions_list, youtube_superChatEvents_list, youtube_tests_insert, youtube_thirdPartyLinks_delete, youtube_thirdPartyLinks_insert, youtube_thirdPartyLinks_list, youtube_thirdPartyLinks_update, youtube_thumbnails_set, youtube_videoAbuseReportReasons_list, youtube_videoCategories_list, youtube_videos_batchGetStats, youtube_videos_delete, youtube_videos_getRating, youtube_videos_insert, youtube_videos_list, youtube_videos_rate, youtube_videos_reportAbuse, youtube_videos_update, youtube_videoTrainability_get, youtube_watermarks_set, youtube_watermarks_unset] as const;
