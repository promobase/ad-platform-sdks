// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const x_media_appendMediaUpload = defineEndpointDescriptor({
  id: "x.media.appendMediaUpload",
  platform: "x",
  method: "POST",
  path: "/2/media/upload/{id}/append",
  summary: "Append Media Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["media.manage"],
  rateLimitBucket: "x-media",
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    body: Models.AppendMediaUploadRequest,
  }),
  outputSchema: Models.AppendMediaUploadResponse,
});

export const x_posts_createPosts = defineEndpointDescriptor({
  id: "x.posts.createPosts",
  platform: "x",
  method: "POST",
  path: "/2/tweets",
  summary: "Create Posts",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["posts.manage"],
  rateLimitBucket: "x-posts",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.CreatePostsRequest,
  }),
  outputSchema: Models.CreatePostsResponse,
});

export const x_posts_deletePosts = defineEndpointDescriptor({
  id: "x.posts.deletePosts",
  platform: "x",
  method: "DELETE",
  path: "/2/tweets/{id}",
  summary: "Delete Posts",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["posts.manage"],
  rateLimitBucket: "x-posts",
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.PostId,
  }),
  outputSchema: Models.DeletePostsResponse,
});

export const x_media_finalizeMediaUpload = defineEndpointDescriptor({
  id: "x.media.finalizeMediaUpload",
  platform: "x",
  method: "POST",
  path: "/2/media/upload/{id}/finalize",
  summary: "Finalize Media upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["media.manage"],
  rateLimitBucket: "x-media",
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Models.FinalizeMediaUploadResponse,
});

export const x_media_getMediaByMediaKey = defineEndpointDescriptor({
  id: "x.media.getMediaByMediaKey",
  platform: "x",
  method: "GET",
  path: "/2/media/{media_key}",
  summary: "Get Media by media key",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["media.read"],
  rateLimitBucket: "x-media",
  parameters: [
    {"name":"media_key","wireName":"media_key","location":"path","required":true,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    media_key: Schema.String,
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
  }),
  outputSchema: Models.GetMediaByMediaKeyResponse,
});

export const x_media_getMediaByMediaKeys = defineEndpointDescriptor({
  id: "x.media.getMediaByMediaKeys",
  platform: "x",
  method: "GET",
  path: "/2/media",
  summary: "Get Media by media keys",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["media.read"],
  rateLimitBucket: "x-media",
  parameters: [
    {"name":"media_keys","wireName":"media_keys","location":"query","required":true,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    media_keys: Schema.Array(Schema.String),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
  }),
  outputSchema: Models.GetMediaByMediaKeysResponse,
});

export const x_media_getMediaUploadStatus = defineEndpointDescriptor({
  id: "x.media.getMediaUploadStatus",
  platform: "x",
  method: "GET",
  path: "/2/media/upload",
  summary: "Get Media upload status",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["media.read"],
  rateLimitBucket: "x-media",
  parameters: [
    {"name":"media_id","wireName":"media_id","location":"query","required":true,"nullable":false},
    {"name":"command","wireName":"command","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    media_id: Models.MediaId,
    command: Schema.optional(Schema.Union(Schema.Literal("STATUS"))),
  }),
  outputSchema: Models.GetMediaUploadStatusResponse,
});

export const x_posts_getPostsById = defineEndpointDescriptor({
  id: "x.posts.getPostsById",
  platform: "x",
  method: "GET",
  path: "/2/tweets/{id}",
  summary: "Get Posts by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["posts.read"],
  rateLimitBucket: "x-posts",
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.PostId,
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.GetPostsByIdResponse,
});

export const x_posts_getPostsByIds = defineEndpointDescriptor({
  id: "x.posts.getPostsByIds",
  platform: "x",
  method: "GET",
  path: "/2/tweets",
  summary: "Get Posts by IDs",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["posts.read"],
  rateLimitBucket: "x-posts",
  parameters: [
    {"name":"ids","wireName":"ids","location":"query","required":true,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ids: Schema.Array(Schema.suspend(() => Models.PostId)),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.GetPostsByIdsResponse,
});

export const x_users_getUsersById = defineEndpointDescriptor({
  id: "x.users.getUsersById",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}",
  summary: "Get Users by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersByIdResponse,
});

export const x_users_getUsersByUsername = defineEndpointDescriptor({
  id: "x.users.getUsersByUsername",
  platform: "x",
  method: "GET",
  path: "/2/users/by/username/{username}",
  summary: "Get Users by Username",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  parameters: [
    {"name":"username","wireName":"username","location":"path","required":true,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    username: Schema.String,
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersByUsernameResponse,
});

export const x_users_getUsersMe = defineEndpointDescriptor({
  id: "x.users.getUsersMe",
  platform: "x",
  method: "GET",
  path: "/2/users/me",
  summary: "Get Users Me",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  parameters: [
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersMeResponse,
});

export const x_media_initializeMediaUpload = defineEndpointDescriptor({
  id: "x.media.initializeMediaUpload",
  platform: "x",
  method: "POST",
  path: "/2/media/upload/initialize",
  summary: "Initialize media upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["media.manage"],
  rateLimitBucket: "x-media",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.InitializeMediaUploadRequest,
  }),
  outputSchema: Models.InitializeMediaUploadResponse,
});

export const x_media_mediaUpload = defineEndpointDescriptor({
  id: "x.media.mediaUpload",
  platform: "x",
  method: "POST",
  path: "/2/media/upload",
  summary: "Upload media",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["media.manage"],
  rateLimitBucket: "x-media",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.MediaUploadRequest,
  }),
  outputSchema: Models.MediaUploadResponse,
});

export const endpointDescriptors = [x_media_appendMediaUpload, x_posts_createPosts, x_posts_deletePosts, x_media_finalizeMediaUpload, x_media_getMediaByMediaKey, x_media_getMediaByMediaKeys, x_media_getMediaUploadStatus, x_posts_getPostsById, x_posts_getPostsByIds, x_users_getUsersById, x_users_getUsersByUsername, x_users_getUsersMe, x_media_initializeMediaUpload, x_media_mediaUpload] as const;
