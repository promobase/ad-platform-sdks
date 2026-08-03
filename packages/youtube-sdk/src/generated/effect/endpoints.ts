// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

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

export const endpointDescriptors = [youtube_captions_delete, youtube_captions_download, youtube_captions_insert, youtube_captions_list, youtube_captions_update, youtube_channels_list, youtube_channels_update, youtube_comments_delete, youtube_comments_insert, youtube_comments_list, youtube_comments_markAsSpam, youtube_comments_setModerationStatus, youtube_comments_update, youtube_commentThreads_insert, youtube_commentThreads_list, youtube_playlistItems_delete, youtube_playlistItems_insert, youtube_playlistItems_list, youtube_playlistItems_update, youtube_playlists_delete, youtube_playlists_insert, youtube_playlists_list, youtube_playlists_update, youtube_search_list, youtube_thumbnails_set, youtube_videos_batchGetStats, youtube_videos_delete, youtube_videos_getRating, youtube_videos_insert, youtube_videos_list, youtube_videos_rate, youtube_videos_reportAbuse, youtube_videos_update] as const;
