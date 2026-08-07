// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@mosaic/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const x_stream_activityStream = defineEndpointDescriptor({
  id: "x.stream.activityStream",
  platform: "x",
  method: "GET",
  path: "/2/activity/stream",
  summary: "Activity Stream",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
  }),
  outputSchema: Models.ActivityStreamResponse,
});

export const x_chat_addChatGroupMembers = defineEndpointDescriptor({
  id: "x.chat.addChatGroupMembers",
  platform: "x",
  method: "POST",
  path: "/2/chat/conversations/{id}/members",
  summary: "Add members to a Chat group conversation",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write","tweet.read","users.read"],
  capabilities: ["chat.manage"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    body: Models.AddChatGroupMembersRequest,
  }),
  outputSchema: Models.AddChatGroupMembersResponse,
});

export const x_chat_addConversationKeys = defineEndpointDescriptor({
  id: "x.chat.addConversationKeys",
  platform: "x",
  method: "POST",
  path: "/2/chat/conversations/{id}/keys",
  summary: "Add Conversation Keys",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write","tweet.read","users.read"],
  capabilities: ["chat.manage"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    body: Models.AddConversationKeysRequest,
  }),
  outputSchema: Models.AddConversationKeysResponse,
});

export const x_lists_addListsMember = defineEndpointDescriptor({
  id: "x.lists.addListsMember",
  platform: "x",
  method: "POST",
  path: "/2/lists/{id}/members",
  summary: "Add Lists Member",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["list.write","tweet.read","users.read"],
  capabilities: ["lists.manage"],
  rateLimitBucket: "x-lists",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.ListId,
    body: Models.AddListsMemberRequest,
  }),
  outputSchema: Models.AddListsMemberResponse,
});

export const x_chat_addUserPublicKey = defineEndpointDescriptor({
  id: "x.chat.addUserPublicKey",
  platform: "x",
  method: "POST",
  path: "/2/users/{id}/public_keys",
  summary: "Add public key",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write","tweet.read","users.read"],
  capabilities: ["chat.manage"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    body: Models.AddUserPublicKeyRequest,
  }),
  outputSchema: Models.AddUserPublicKeyResponse,
});

export const x_media_appendMediaUpload = defineEndpointDescriptor({
  id: "x.media.appendMediaUpload",
  platform: "x",
  method: "POST",
  path: "/2/media/upload/{id}/append",
  summary: "Append Media Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["media.write"],
  capabilities: ["media.manage"],
  rateLimitBucket: "x-media",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["multipart"],
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

export const x_articles_articleCreateDraft = defineEndpointDescriptor({
  id: "x.articles.articleCreateDraft",
  platform: "x",
  method: "POST",
  path: "/2/articles/draft",
  summary: "Create draft Article",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["tweet.write"],
  capabilities: ["articles.manage"],
  rateLimitBucket: "x-articles",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.ArticleCreateDraftRequest,
  }),
  outputSchema: Models.ArticleCreateDraftResponse,
});

export const x_articles_articlePublish = defineEndpointDescriptor({
  id: "x.articles.articlePublish",
  platform: "x",
  method: "POST",
  path: "/2/articles/{article_id}/publish",
  summary: "Publish Article",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["tweet.write"],
  capabilities: ["articles.manage"],
  rateLimitBucket: "x-articles",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"article_id","wireName":"article_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    article_id: Schema.String,
  }),
  outputSchema: Models.ArticlePublishResponse,
});

export const x_users_blockUsersDms = defineEndpointDescriptor({
  id: "x.users.blockUsersDms",
  platform: "x",
  method: "POST",
  path: "/2/users/{id}/dm/block",
  summary: "Block Users Dms",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
  }),
  outputSchema: Models.BlockUsersDmsResponse,
});

export const x_chat_chatMediaDownload = defineEndpointDescriptor({
  id: "x.chat.chatMediaDownload",
  platform: "x",
  method: "GET",
  path: "/2/chat/media/{id}/{media_hash_key}",
  summary: "Download Chat Media",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["media.write"],
  capabilities: ["chat.read"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"media_hash_key","wireName":"media_hash_key","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    media_hash_key: Schema.String,
  }),
  outputSchema: Schema.String,
});

export const x_chat_chatMediaUploadAppend = defineEndpointDescriptor({
  id: "x.chat.chatMediaUploadAppend",
  platform: "x",
  method: "POST",
  path: "/2/chat/media/upload/{id}/append",
  summary: "Append Chat Media Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["media.write"],
  capabilities: ["chat.manage"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["multipart"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    body: Models.ChatMediaUploadAppendRequest,
  }),
  outputSchema: Models.ChatMediaUploadAppendResponse,
});

export const x_chat_chatMediaUploadFinalize = defineEndpointDescriptor({
  id: "x.chat.chatMediaUploadFinalize",
  platform: "x",
  method: "POST",
  path: "/2/chat/media/upload/{id}/finalize",
  summary: "Finalize Chat Media Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["media.write"],
  capabilities: ["chat.manage"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    body: Models.ChatMediaUploadFinalizeRequest,
  }),
  outputSchema: Models.ChatMediaUploadFinalizeResponse,
});

export const x_chat_chatMediaUploadInitialize = defineEndpointDescriptor({
  id: "x.chat.chatMediaUploadInitialize",
  platform: "x",
  method: "POST",
  path: "/2/chat/media/upload/initialize",
  summary: "Initialize Chat Media Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["media.write"],
  capabilities: ["chat.manage"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.ChatMediaUploadInitializeRequest,
  }),
  outputSchema: Models.ChatMediaUploadInitializeResponse,
});

export const x_account_activity_createAccountActivitySubscription = defineEndpointDescriptor({
  id: "x.account-activity.createAccountActivitySubscription",
  platform: "x",
  method: "POST",
  path: "/2/account_activity/webhooks/{webhook_id}/subscriptions/all",
  summary: "Create subscription",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.read","dm.write","tweet.read","users.read"],
  capabilities: ["account-activity.manage"],
  rateLimitBucket: "x-account-activity",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"webhook_id","wireName":"webhook_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    webhook_id: Models.WebhookConfigId,
    body: Models.CreateAccountActivitySubscriptionRequest,
  }),
  outputSchema: Models.CreateAccountActivitySubscriptionResponse,
});

export const x_activity_createActivitySubscription = defineEndpointDescriptor({
  id: "x.activity.createActivitySubscription",
  platform: "x",
  method: "POST",
  path: "/2/activity/subscriptions",
  summary: "Create X activity subscription",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["activity.manage"],
  rateLimitBucket: "x-activity",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.CreateActivitySubscriptionRequest,
  }),
  outputSchema: Models.CreateActivitySubscriptionResponse,
});

export const x_chat_createChatConversation = defineEndpointDescriptor({
  id: "x.chat.createChatConversation",
  platform: "x",
  method: "POST",
  path: "/2/chat/conversations/group",
  summary: "Create Chat Group Conversation",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write","tweet.read","users.read"],
  capabilities: ["chat.manage"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.CreateChatConversationRequest,
  }),
  outputSchema: Models.CreateChatConversationResponse,
});

export const x_community_notes_createCommunityNotes = defineEndpointDescriptor({
  id: "x.community-notes.createCommunityNotes",
  platform: "x",
  method: "POST",
  path: "/2/notes",
  summary: "Create Community Notes",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["tweet.write"],
  capabilities: ["community-notes.manage"],
  rateLimitBucket: "x-community-notes",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.CreateCommunityNotesRequest,
  }),
  outputSchema: Models.CreateCommunityNotesResponse,
});

export const x_compliance_createComplianceJobs = defineEndpointDescriptor({
  id: "x.compliance.createComplianceJobs",
  platform: "x",
  method: "POST",
  path: "/2/compliance/jobs",
  summary: "Create Compliance Job",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["compliance.manage"],
  rateLimitBucket: "x-compliance",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"compliance_job.fields","wireName":"compliance_job.fields","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "compliance_job.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("download_expires_at"), Schema.Literal("download_url"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("resumable"), Schema.Literal("status"), Schema.Literal("type"), Schema.Literal("upload_expires_at"), Schema.Literal("upload_url")))),
    body: Models.CreateComplianceJobsRequest,
  }),
  outputSchema: Models.CreateComplianceJobsResponse,
});

export const x_direct_messages_createDirectMessagesByConversationId = defineEndpointDescriptor({
  id: "x.direct-messages.createDirectMessagesByConversationId",
  platform: "x",
  method: "POST",
  path: "/2/dm_conversations/{dm_conversation_id}/messages",
  summary: "Create Direct Messages by Conversation ID",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write","tweet.read","users.read"],
  capabilities: ["direct-messages.manage"],
  rateLimitBucket: "x-direct-messages",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"dm_conversation_id","wireName":"dm_conversation_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    dm_conversation_id: Schema.String,
    body: Models.CreateDirectMessagesByConversationIdRequest,
  }),
  outputSchema: Models.CreateDirectMessagesByConversationIdResponse,
});

export const x_direct_messages_createDirectMessagesByParticipantId = defineEndpointDescriptor({
  id: "x.direct-messages.createDirectMessagesByParticipantId",
  platform: "x",
  method: "POST",
  path: "/2/dm_conversations/with/{participant_id}/messages",
  summary: "Create DM message by participant ID",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write","tweet.read","users.read"],
  capabilities: ["direct-messages.manage"],
  rateLimitBucket: "x-direct-messages",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"participant_id","wireName":"participant_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    participant_id: Schema.String,
    body: Models.CreateDirectMessagesByParticipantIdRequest,
  }),
  outputSchema: Models.CreateDirectMessagesByParticipantIdResponse,
});

export const x_direct_messages_createDirectMessagesConversation = defineEndpointDescriptor({
  id: "x.direct-messages.createDirectMessagesConversation",
  platform: "x",
  method: "POST",
  path: "/2/dm_conversations",
  summary: "Create DM conversation",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write","tweet.read","users.read"],
  capabilities: ["direct-messages.manage"],
  rateLimitBucket: "x-direct-messages",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.CreateDirectMessagesConversationRequest,
  }),
  outputSchema: Models.CreateDirectMessagesConversationResponse,
});

export const x_lists_createLists = defineEndpointDescriptor({
  id: "x.lists.createLists",
  platform: "x",
  method: "POST",
  path: "/2/lists",
  summary: "Create Lists",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["list.read","list.write","tweet.read","users.read"],
  capabilities: ["lists.manage"],
  rateLimitBucket: "x-lists",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.CreateListsRequest,
  }),
  outputSchema: Models.CreateListsResponse,
});

export const x_media_createMediaMetadata = defineEndpointDescriptor({
  id: "x.media.createMediaMetadata",
  platform: "x",
  method: "POST",
  path: "/2/media/metadata",
  summary: "Create Media metadata",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["media.write"],
  capabilities: ["media.manage"],
  rateLimitBucket: "x-media",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.CreateMediaMetadataRequest,
  }),
  outputSchema: Models.CreateMediaMetadataResponse,
});

export const x_media_createMediaSubtitles = defineEndpointDescriptor({
  id: "x.media.createMediaSubtitles",
  platform: "x",
  method: "POST",
  path: "/2/media/subtitles",
  summary: "Create Media subtitles",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["media.write"],
  capabilities: ["media.manage"],
  rateLimitBucket: "x-media",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.CreateMediaSubtitlesRequest,
  }),
  outputSchema: Models.CreateMediaSubtitlesResponse,
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
  requiredScopes: ["tweet.read","tweet.write","users.read"],
  capabilities: ["posts.manage"],
  rateLimitBucket: "x-posts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.CreatePostsRequest,
  }),
  outputSchema: Models.CreatePostsResponse,
});

export const x_broadcasts_createScheduledBroadcast = defineEndpointDescriptor({
  id: "x.broadcasts.createScheduledBroadcast",
  platform: "x",
  method: "POST",
  path: "/2/broadcasts/scheduled",
  summary: "Create a scheduled broadcast",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["broadcast.read","broadcast.write"],
  capabilities: ["broadcasts.manage"],
  rateLimitBucket: "x-broadcasts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.CreateScheduledBroadcastRequest,
  }),
  outputSchema: Models.CreateScheduledBroadcastResponse,
});

export const x_users_createUsersBookmark = defineEndpointDescriptor({
  id: "x.users.createUsersBookmark",
  platform: "x",
  method: "POST",
  path: "/2/users/{id}/bookmarks",
  summary: "Create Users Bookmark",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["bookmark.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    body: Models.CreateUsersBookmarkRequest,
  }),
  outputSchema: Models.CreateUsersBookmarkResponse,
});

export const x_users_createUsersBookmarkFolder = defineEndpointDescriptor({
  id: "x.users.createUsersBookmarkFolder",
  platform: "x",
  method: "POST",
  path: "/2/users/{id}/bookmarks/folders",
  summary: "Create Bookmark Folder",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["bookmark.write","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    body: Models.CreateUsersBookmarkFolderRequest,
  }),
  outputSchema: Models.CreateUsersBookmarkFolderResponse,
});

export const x_webhooks_createWebhookReplayJob = defineEndpointDescriptor({
  id: "x.webhooks.createWebhookReplayJob",
  platform: "x",
  method: "POST",
  path: "/2/webhooks/replay",
  summary: "Create replay job for webhook",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["webhooks.manage"],
  rateLimitBucket: "x-webhooks",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.CreateWebhookReplayJobRequest,
  }),
  outputSchema: Models.CreateWebhookReplayJobResponse,
});

export const x_webhooks_createWebhooks = defineEndpointDescriptor({
  id: "x.webhooks.createWebhooks",
  platform: "x",
  method: "POST",
  path: "/2/webhooks",
  summary: "Create webhook",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["webhooks.manage"],
  rateLimitBucket: "x-webhooks",
  authSchemes: ["BearerToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.CreateWebhooksRequest,
  }),
  outputSchema: Models.CreateWebhooksResponse,
});

export const x_webhooks_createWebhooksStreamLink = defineEndpointDescriptor({
  id: "x.webhooks.createWebhooksStreamLink",
  platform: "x",
  method: "POST",
  path: "/2/tweets/search/webhooks/{webhook_id}",
  summary: "Create stream link",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["webhooks.manage"],
  rateLimitBucket: "x-webhooks",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"webhook_id","wireName":"webhook_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    webhook_id: Schema.String,
  }),
  outputSchema: Models.CreateWebhooksStreamLinkResponse,
});

export const x_account_activity_deleteAccountActivitySubscription = defineEndpointDescriptor({
  id: "x.account-activity.deleteAccountActivitySubscription",
  platform: "x",
  method: "DELETE",
  path: "/2/account_activity/webhooks/{webhook_id}/subscriptions/{user_id}/all",
  summary: "Delete subscription",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["account-activity.manage"],
  rateLimitBucket: "x-account-activity",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"webhook_id","wireName":"webhook_id","location":"path","required":true,"nullable":false},
    {"name":"user_id","wireName":"user_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    webhook_id: Models.WebhookConfigId,
    user_id: Models.UserId,
  }),
  outputSchema: Models.DeleteAccountActivitySubscriptionResponse,
});

export const x_activity_deleteActivitySubscription = defineEndpointDescriptor({
  id: "x.activity.deleteActivitySubscription",
  platform: "x",
  method: "DELETE",
  path: "/2/activity/subscriptions/{subscription_id}",
  summary: "Deletes X activity subscription",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["activity.manage"],
  rateLimitBucket: "x-activity",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"subscription_id","wireName":"subscription_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    subscription_id: Schema.String,
  }),
  outputSchema: Models.DeleteActivitySubscriptionResponse,
});

export const x_activity_deleteActivitySubscriptionsByIds = defineEndpointDescriptor({
  id: "x.activity.deleteActivitySubscriptionsByIds",
  platform: "x",
  method: "DELETE",
  path: "/2/activity/subscriptions",
  summary: "Delete X activity subscriptions by IDs",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["activity.manage"],
  rateLimitBucket: "x-activity",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"ids","wireName":"ids","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ids: Schema.Array(Schema.String),
  }),
  outputSchema: Models.DeleteActivitySubscriptionsByIdsResponse,
});

export const x_connections_deleteAllConnections = defineEndpointDescriptor({
  id: "x.connections.deleteAllConnections",
  platform: "x",
  method: "DELETE",
  path: "/2/connections/all",
  summary: "Terminate all connections",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["connections.manage"],
  rateLimitBucket: "x-connections",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.DeleteAllConnectionsResponse,
});

export const x_broadcasts_deleteBroadcastChatMessage = defineEndpointDescriptor({
  id: "x.broadcasts.deleteBroadcastChatMessage",
  platform: "x",
  method: "DELETE",
  path: "/2/broadcasts/{id}/chat/{message_id}",
  summary: "Remove a chat message from a live broadcast",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["broadcast.read","broadcast.write"],
  capabilities: ["broadcasts.manage"],
  rateLimitBucket: "x-broadcasts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"message_id","wireName":"message_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    message_id: Schema.String,
  }),
  outputSchema: Models.DeleteBroadcastChatMessageResponse,
});

export const x_chat_deleteChatMessages = defineEndpointDescriptor({
  id: "x.chat.deleteChatMessages",
  platform: "x",
  method: "POST",
  path: "/2/chat/conversations/{id}/messages/delete",
  summary: "Delete Chat messages",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write","tweet.read","users.read"],
  capabilities: ["chat.manage"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    body: Models.DeleteChatMessagesRequest,
  }),
  outputSchema: Models.DeleteChatMessagesResponse,
});

export const x_community_notes_deleteCommunityNotes = defineEndpointDescriptor({
  id: "x.community-notes.deleteCommunityNotes",
  platform: "x",
  method: "DELETE",
  path: "/2/notes/{id}",
  summary: "Delete a Community Note",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["tweet.write"],
  capabilities: ["community-notes.manage"],
  rateLimitBucket: "x-community-notes",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.NoteId,
  }),
  outputSchema: Models.DeleteCommunityNotesResponse,
});

export const x_connections_deleteConnectionsByEndpoint = defineEndpointDescriptor({
  id: "x.connections.deleteConnectionsByEndpoint",
  platform: "x",
  method: "DELETE",
  path: "/2/connections/{endpoint_id}",
  summary: "Terminate connections by endpoint",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["connections.manage"],
  rateLimitBucket: "x-connections",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"endpoint_id","wireName":"endpoint_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    endpoint_id: Schema.Union(Schema.Literal("filtered_stream"), Schema.Literal("sample_stream"), Schema.Literal("sample10_stream"), Schema.Literal("firehose_stream"), Schema.Literal("tweets_compliance_stream"), Schema.Literal("users_compliance_stream"), Schema.Literal("tweet_label_stream"), Schema.Literal("firehose_stream_lang_en"), Schema.Literal("firehose_stream_lang_ja"), Schema.Literal("firehose_stream_lang_ko"), Schema.Literal("firehose_stream_lang_pt"), Schema.Literal("likes_firehose_stream"), Schema.Literal("likes_sample10_stream"), Schema.Literal("likes_compliance_stream")),
  }),
  outputSchema: Models.DeleteConnectionsByEndpointResponse,
});

export const x_connections_deleteConnectionsByUuids = defineEndpointDescriptor({
  id: "x.connections.deleteConnectionsByUuids",
  platform: "x",
  method: "DELETE",
  path: "/2/connections",
  summary: "Terminate multiple connections",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["connections.manage"],
  rateLimitBucket: "x-connections",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.DeleteConnectionsByUuidsRequest,
  }),
  outputSchema: Models.DeleteConnectionsByUuidsResponse,
});

export const x_direct_messages_deleteDirectMessagesEvents = defineEndpointDescriptor({
  id: "x.direct-messages.deleteDirectMessagesEvents",
  platform: "x",
  method: "DELETE",
  path: "/2/dm_events/{event_id}",
  summary: "Delete DM event",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.read","dm.write"],
  capabilities: ["direct-messages.manage"],
  rateLimitBucket: "x-direct-messages",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"event_id","wireName":"event_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    event_id: Schema.String,
  }),
  outputSchema: Models.DeleteDirectMessagesEventsResponse,
});

export const x_lists_deleteLists = defineEndpointDescriptor({
  id: "x.lists.deleteLists",
  platform: "x",
  method: "DELETE",
  path: "/2/lists/{id}",
  summary: "Delete List",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["list.write","tweet.read","users.read"],
  capabilities: ["lists.manage"],
  rateLimitBucket: "x-lists",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.ListId,
  }),
  outputSchema: Models.DeleteListsResponse,
});

export const x_media_deleteMediaSubtitles = defineEndpointDescriptor({
  id: "x.media.deleteMediaSubtitles",
  platform: "x",
  method: "DELETE",
  path: "/2/media/subtitles",
  summary: "Delete Media subtitles",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["media.write"],
  capabilities: ["media.manage"],
  rateLimitBucket: "x-media",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.DeleteMediaSubtitlesRequest,
  }),
  outputSchema: Models.DeleteMediaSubtitlesResponse,
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
  requiredScopes: ["tweet.read","tweet.write","users.read"],
  capabilities: ["posts.manage"],
  rateLimitBucket: "x-posts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.PostId,
  }),
  outputSchema: Models.DeletePostsResponse,
});

export const x_broadcasts_deleteScheduledBroadcast = defineEndpointDescriptor({
  id: "x.broadcasts.deleteScheduledBroadcast",
  platform: "x",
  method: "DELETE",
  path: "/2/broadcasts/scheduled/{id}",
  summary: "Delete a scheduled broadcast",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["broadcast.read","broadcast.write"],
  capabilities: ["broadcasts.manage"],
  rateLimitBucket: "x-broadcasts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"roll_forward","wireName":"roll_forward","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    roll_forward: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.DeleteScheduledBroadcastResponse,
});

export const x_users_deleteUsersBookmark = defineEndpointDescriptor({
  id: "x.users.deleteUsersBookmark",
  platform: "x",
  method: "DELETE",
  path: "/2/users/{id}/bookmarks/{tweet_id}",
  summary: "Delete Bookmark",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["bookmark.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"tweet_id","wireName":"tweet_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    tweet_id: Models.PostId,
  }),
  outputSchema: Models.DeleteUsersBookmarkResponse,
});

export const x_webhooks_deleteWebhooks = defineEndpointDescriptor({
  id: "x.webhooks.deleteWebhooks",
  platform: "x",
  method: "DELETE",
  path: "/2/webhooks/{webhook_id}",
  summary: "Delete webhook",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["webhooks.manage"],
  rateLimitBucket: "x-webhooks",
  authSchemes: ["BearerToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"webhook_id","wireName":"webhook_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    webhook_id: Schema.String,
  }),
  outputSchema: Models.DeleteWebhooksResponse,
});

export const x_webhooks_deleteWebhooksStreamLink = defineEndpointDescriptor({
  id: "x.webhooks.deleteWebhooksStreamLink",
  platform: "x",
  method: "DELETE",
  path: "/2/tweets/search/webhooks/{webhook_id}",
  summary: "Delete stream link",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["webhooks.manage"],
  rateLimitBucket: "x-webhooks",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"webhook_id","wireName":"webhook_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    webhook_id: Schema.String,
  }),
  outputSchema: Models.DeleteWebhooksStreamLinkResponse,
});

export const x_direct_messages_dmConversationsMediaDownload = defineEndpointDescriptor({
  id: "x.direct-messages.dmConversationsMediaDownload",
  platform: "x",
  method: "GET",
  path: "/2/dm_conversations/media/{dm_id}/{media_id}/{resource_id}",
  summary: "Download DM Media",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["dm.read"],
  capabilities: ["direct-messages.read"],
  rateLimitBucket: "x-direct-messages",
  authSchemes: ["OAuth2UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"dm_id","wireName":"dm_id","location":"path","required":true,"nullable":false},
    {"name":"media_id","wireName":"media_id","location":"path","required":true,"nullable":false},
    {"name":"resource_id","wireName":"resource_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    dm_id: Schema.String,
    media_id: Schema.String,
    resource_id: Schema.String,
  }),
  outputSchema: Schema.String,
});

export const x_community_notes_evaluateCommunityNotes = defineEndpointDescriptor({
  id: "x.community-notes.evaluateCommunityNotes",
  platform: "x",
  method: "POST",
  path: "/2/notes/evaluate",
  summary: "Evaluate Community Notes",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["tweet.write"],
  capabilities: ["community-notes.manage"],
  rateLimitBucket: "x-community-notes",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.EvaluateCommunityNotesRequest,
  }),
  outputSchema: Models.EvaluateCommunityNotesResponse,
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
  requiredScopes: ["media.write"],
  capabilities: ["media.manage"],
  rateLimitBucket: "x-media",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Models.FinalizeMediaUploadResponse,
});

export const x_users_followList = defineEndpointDescriptor({
  id: "x.users.followList",
  platform: "x",
  method: "POST",
  path: "/2/users/{id}/followed_lists",
  summary: "Follow List",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["list.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    body: Models.FollowListRequest,
  }),
  outputSchema: Models.FollowListResponse,
});

export const x_users_followUser = defineEndpointDescriptor({
  id: "x.users.followUser",
  platform: "x",
  method: "POST",
  path: "/2/users/{id}/following",
  summary: "Follow User",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["follows.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    body: Models.FollowUserRequest,
  }),
  outputSchema: Models.FollowUserResponse,
});

export const x_account_activity_getAccountActivitySubscriptionCount = defineEndpointDescriptor({
  id: "x.account-activity.getAccountActivitySubscriptionCount",
  platform: "x",
  method: "GET",
  path: "/2/account_activity/subscriptions/count",
  summary: "Get Account Activity Subscription Count",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["account-activity.read"],
  rateLimitBucket: "x-account-activity",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetAccountActivitySubscriptionCountResponse,
});

export const x_account_activity_getAccountActivitySubscriptions = defineEndpointDescriptor({
  id: "x.account-activity.getAccountActivitySubscriptions",
  platform: "x",
  method: "GET",
  path: "/2/account_activity/webhooks/{webhook_id}/subscriptions/all/list",
  summary: "Get Account Activity Subscriptions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["account-activity.read"],
  rateLimitBucket: "x-account-activity",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"webhook_id","wireName":"webhook_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    webhook_id: Models.WebhookConfigId,
  }),
  outputSchema: Models.GetAccountActivitySubscriptionsResponse,
});

export const x_activity_getActivitySubscriptions = defineEndpointDescriptor({
  id: "x.activity.getActivitySubscriptions",
  platform: "x",
  method: "GET",
  path: "/2/activity/subscriptions",
  summary: "Get X activity subscriptions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["like.read","tweet.read"],
  capabilities: ["activity.read"],
  rateLimitBucket: "x-activity",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetActivitySubscriptionsResponse,
});

export const x_broadcasts_getBroadcast = defineEndpointDescriptor({
  id: "x.broadcasts.getBroadcast",
  platform: "x",
  method: "GET",
  path: "/2/broadcasts/{id}",
  summary: "Get a broadcast",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["broadcast.read"],
  capabilities: ["broadcasts.read"],
  rateLimitBucket: "x-broadcasts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"broadcast.fields","wireName":"broadcast.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    "broadcast.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("available_for_replay"), Schema.Literal("broadcast_id"), Schema.Literal("chat_option"), Schema.Literal("created_at_ms"), Schema.Literal("end_ms"), Schema.Literal("height"), Schema.Literal("id"), Schema.Literal("image_url"), Schema.Literal("image_url_medium"), Schema.Literal("image_url_small"), Schema.Literal("is_high_latency"), Schema.Literal("language"), Schema.Literal("media_key"), Schema.Literal("scheduled_end_ms"), Schema.Literal("scheduled_start_ms"), Schema.Literal("share_url"), Schema.Literal("source_id"), Schema.Literal("start_ms"), Schema.Literal("state"), Schema.Literal("title"), Schema.Literal("total_watched"), Schema.Literal("total_watching"), Schema.Literal("tweet_id"), Schema.Literal("twitter_user_id"), Schema.Literal("updated_at_ms"), Schema.Literal("width")))),
  }),
  outputSchema: Models.GetBroadcastResponse,
});

export const x_chat_getChatConversation = defineEndpointDescriptor({
  id: "x.chat.getChatConversation",
  platform: "x",
  method: "GET",
  path: "/2/chat/conversations/{id}",
  summary: "Get Chat Conversation",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["dm.read","tweet.read","users.read"],
  capabilities: ["chat.read"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"chat_conversation.fields","wireName":"chat_conversation.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    "chat_conversation.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("group_avatar_url"), Schema.Literal("group_name"), Schema.Literal("id"), Schema.Literal("is_muted"), Schema.Literal("message_ttl_ms"), Schema.Literal("screen_capture_blocking_enabled"), Schema.Literal("screen_capture_detection_enabled"), Schema.Literal("type"), Schema.Literal("updated_at")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("admin_ids"), Schema.Literal("member_ids"), Schema.Literal("participant_ids")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetChatConversationResponse,
});

export const x_chat_getChatConversationEvents = defineEndpointDescriptor({
  id: "x.chat.getChatConversationEvents",
  platform: "x",
  method: "GET",
  path: "/2/chat/conversations/{id}/events",
  summary: "Get Chat Conversation Events",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["dm.read","tweet.read","users.read"],
  capabilities: ["chat.read"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"chat_message_event.fields","wireName":"chat_message_event.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "chat_message_event.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("conversation_id"), Schema.Literal("conversation_token"), Schema.Literal("created_at"), Schema.Literal("encoded_event"), Schema.Literal("id"), Schema.Literal("is_trusted"), Schema.Literal("message_event_signature"), Schema.Literal("previous_id"), Schema.Literal("sender_id")))),
  }),
  outputSchema: Models.GetChatConversationEventsResponse,
});

export const x_chat_getChatConversations = defineEndpointDescriptor({
  id: "x.chat.getChatConversations",
  platform: "x",
  method: "GET",
  path: "/2/chat/conversations",
  summary: "Get Chat Conversations",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["dm.read","users.read"],
  capabilities: ["chat.read"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"chat_conversation.fields","wireName":"chat_conversation.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "chat_conversation.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("group_avatar_url"), Schema.Literal("group_name"), Schema.Literal("id"), Schema.Literal("is_muted"), Schema.Literal("message_ttl_ms"), Schema.Literal("screen_capture_blocking_enabled"), Schema.Literal("screen_capture_detection_enabled"), Schema.Literal("type"), Schema.Literal("updated_at")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("admin_ids"), Schema.Literal("member_ids"), Schema.Literal("participant_ids")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetChatConversationsResponse,
});

export const x_communities_getCommunitiesById = defineEndpointDescriptor({
  id: "x.communities.getCommunitiesById",
  platform: "x",
  method: "GET",
  path: "/2/communities/{id}",
  summary: "Get Communities by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["list.read","tweet.read","users.read"],
  capabilities: ["communities.read"],
  rateLimitBucket: "x-communities",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"community.fields","wireName":"community.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.CommunityId,
    "community.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("access"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("id"), Schema.Literal("join_policy"), Schema.Literal("member_count"), Schema.Literal("name")))),
  }),
  outputSchema: Models.GetCommunitiesByIdResponse,
});

export const x_compliance_getComplianceJobs = defineEndpointDescriptor({
  id: "x.compliance.getComplianceJobs",
  platform: "x",
  method: "GET",
  path: "/2/compliance/jobs",
  summary: "Get Compliance Jobs",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["compliance.read"],
  rateLimitBucket: "x-compliance",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"type","wireName":"type","location":"query","required":true,"nullable":false},
    {"name":"status","wireName":"status","location":"query","required":false,"nullable":false},
    {"name":"compliance_job.fields","wireName":"compliance_job.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    type: Schema.Union(Schema.Literal("tweets"), Schema.Literal("users")),
    status: Schema.optional(Schema.Union(Schema.Literal("created"), Schema.Literal("in_progress"), Schema.Literal("failed"), Schema.Literal("complete"))),
    "compliance_job.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("download_expires_at"), Schema.Literal("download_url"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("resumable"), Schema.Literal("status"), Schema.Literal("type"), Schema.Literal("upload_expires_at"), Schema.Literal("upload_url")))),
  }),
  outputSchema: Models.GetComplianceJobsResponse,
});

export const x_compliance_getComplianceJobsById = defineEndpointDescriptor({
  id: "x.compliance.getComplianceJobsById",
  platform: "x",
  method: "GET",
  path: "/2/compliance/jobs/{id}",
  summary: "Get Compliance Job by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["compliance.read"],
  rateLimitBucket: "x-compliance",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"compliance_job.fields","wireName":"compliance_job.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    "compliance_job.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("download_expires_at"), Schema.Literal("download_url"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("resumable"), Schema.Literal("status"), Schema.Literal("type"), Schema.Literal("upload_expires_at"), Schema.Literal("upload_url")))),
  }),
  outputSchema: Models.GetComplianceJobsByIdResponse,
});

export const x_connections_getConnectionHistory = defineEndpointDescriptor({
  id: "x.connections.getConnectionHistory",
  platform: "x",
  method: "GET",
  path: "/2/connections",
  summary: "Get Connection History",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["connections.read"],
  rateLimitBucket: "x-connections",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"status","wireName":"status","location":"query","required":false,"nullable":false},
    {"name":"endpoints","wireName":"endpoints","location":"query","required":false,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"connection.fields","wireName":"connection.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    status: Schema.optional(Schema.Union(Schema.Literal("active"), Schema.Literal("inactive"), Schema.Literal("all"))),
    endpoints: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("filtered_stream"), Schema.Literal("sample_stream"), Schema.Literal("sample10_stream"), Schema.Literal("firehose_stream"), Schema.Literal("tweets_compliance_stream"), Schema.Literal("users_compliance_stream"), Schema.Literal("tweet_label_stream"), Schema.Literal("firehose_stream_lang_en"), Schema.Literal("firehose_stream_lang_ja"), Schema.Literal("firehose_stream_lang_ko"), Schema.Literal("firehose_stream_lang_pt"), Schema.Literal("likes_firehose_stream"), Schema.Literal("likes_sample10_stream"), Schema.Literal("likes_compliance_stream")))),
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "connection.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("client_ip"), Schema.Literal("connected_at"), Schema.Literal("disconnect_reason"), Schema.Literal("disconnected_at"), Schema.Literal("endpoint_name"), Schema.Literal("id")))),
  }),
  outputSchema: Models.GetConnectionHistoryResponse,
});

export const x_direct_messages_getDirectMessagesEvents = defineEndpointDescriptor({
  id: "x.direct-messages.getDirectMessagesEvents",
  platform: "x",
  method: "GET",
  path: "/2/dm_events",
  summary: "Get Direct Messages Events",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["dm.read","tweet.read","users.read"],
  capabilities: ["direct-messages.read"],
  rateLimitBucket: "x-direct-messages",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"event_types","wireName":"event_types","location":"query","required":false,"nullable":false},
    {"name":"dm_event.fields","wireName":"dm_event.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    event_types: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("MessageCreate"), Schema.Literal("ParticipantsJoin"), Schema.Literal("ParticipantsLeave")))),
    "dm_event.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("attachments"), Schema.Literal("created_at"), Schema.Literal("dm_conversation_id"), Schema.Literal("entities"), Schema.Literal("event_type"), Schema.Literal("id"), Schema.Literal("text")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_keys"), Schema.Literal("participant_ids"), Schema.Literal("referenced_posts"), Schema.Literal("sender_id")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
  }),
  outputSchema: Models.GetDirectMessagesEventsResponse,
});

export const x_direct_messages_getDirectMessagesEventsByConversationId = defineEndpointDescriptor({
  id: "x.direct-messages.getDirectMessagesEventsByConversationId",
  platform: "x",
  method: "GET",
  path: "/2/dm_conversations/{id}/dm_events",
  summary: "Get Direct Messages Events by Conversation ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["dm.read","tweet.read","users.read"],
  capabilities: ["direct-messages.read"],
  rateLimitBucket: "x-direct-messages",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"event_types","wireName":"event_types","location":"query","required":false,"nullable":false},
    {"name":"dm_event.fields","wireName":"dm_event.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    event_types: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("MessageCreate"), Schema.Literal("ParticipantsJoin"), Schema.Literal("ParticipantsLeave")))),
    "dm_event.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("attachments"), Schema.Literal("created_at"), Schema.Literal("dm_conversation_id"), Schema.Literal("entities"), Schema.Literal("event_type"), Schema.Literal("id"), Schema.Literal("text")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_keys"), Schema.Literal("participant_ids"), Schema.Literal("referenced_posts"), Schema.Literal("sender_id")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
  }),
  outputSchema: Models.GetDirectMessagesEventsByConversationIdResponse,
});

export const x_direct_messages_getDirectMessagesEventsById = defineEndpointDescriptor({
  id: "x.direct-messages.getDirectMessagesEventsById",
  platform: "x",
  method: "GET",
  path: "/2/dm_events/{event_id}",
  summary: "Get Direct Messages Events by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["dm.read","tweet.read","users.read"],
  capabilities: ["direct-messages.read"],
  rateLimitBucket: "x-direct-messages",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"event_id","wireName":"event_id","location":"path","required":true,"nullable":false},
    {"name":"dm_event.fields","wireName":"dm_event.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    event_id: Schema.String,
    "dm_event.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("attachments"), Schema.Literal("created_at"), Schema.Literal("dm_conversation_id"), Schema.Literal("entities"), Schema.Literal("event_type"), Schema.Literal("id"), Schema.Literal("text")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_keys"), Schema.Literal("participant_ids"), Schema.Literal("referenced_posts"), Schema.Literal("sender_id")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
  }),
  outputSchema: Models.GetDirectMessagesEventsByIdResponse,
});

export const x_direct_messages_getDirectMessagesEventsByParticipantId = defineEndpointDescriptor({
  id: "x.direct-messages.getDirectMessagesEventsByParticipantId",
  platform: "x",
  method: "GET",
  path: "/2/dm_conversations/with/{participant_id}/dm_events",
  summary: "Get Direct Messages Events by Participant ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["dm.read","tweet.read","users.read"],
  capabilities: ["direct-messages.read"],
  rateLimitBucket: "x-direct-messages",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"participant_id","wireName":"participant_id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"event_types","wireName":"event_types","location":"query","required":false,"nullable":false},
    {"name":"dm_event.fields","wireName":"dm_event.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    participant_id: Schema.String,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    event_types: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("MessageCreate"), Schema.Literal("ParticipantsJoin"), Schema.Literal("ParticipantsLeave")))),
    "dm_event.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("attachments"), Schema.Literal("created_at"), Schema.Literal("dm_conversation_id"), Schema.Literal("entities"), Schema.Literal("event_type"), Schema.Literal("id"), Schema.Literal("text")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_keys"), Schema.Literal("participant_ids"), Schema.Literal("referenced_posts"), Schema.Literal("sender_id")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
  }),
  outputSchema: Models.GetDirectMessagesEventsByParticipantIdResponse,
});

export const x_lists_getListsById = defineEndpointDescriptor({
  id: "x.lists.getListsById",
  platform: "x",
  method: "GET",
  path: "/2/lists/{id}",
  summary: "Get Lists by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["list.read","tweet.read","users.read"],
  capabilities: ["lists.read"],
  rateLimitBucket: "x-lists",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"list.fields","wireName":"list.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.ListId,
    "list.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("follower_count"), Schema.Literal("id"), Schema.Literal("member_count"), Schema.Literal("name"), Schema.Literal("private")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("owner_id")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetListsByIdResponse,
});

export const x_lists_getListsFollowers = defineEndpointDescriptor({
  id: "x.lists.getListsFollowers",
  platform: "x",
  method: "GET",
  path: "/2/lists/{id}/followers",
  summary: "Get Lists Followers",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["list.read","tweet.read","users.read"],
  capabilities: ["lists.read"],
  rateLimitBucket: "x-lists",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.ListId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetListsFollowersResponse,
});

export const x_lists_getListsMembers = defineEndpointDescriptor({
  id: "x.lists.getListsMembers",
  platform: "x",
  method: "GET",
  path: "/2/lists/{id}/members",
  summary: "Get Lists Members",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["list.read","tweet.read","users.read"],
  capabilities: ["lists.read"],
  rateLimitBucket: "x-lists",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.ListId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetListsMembersResponse,
});

export const x_lists_getListsPosts = defineEndpointDescriptor({
  id: "x.lists.getListsPosts",
  platform: "x",
  method: "GET",
  path: "/2/lists/{id}/tweets",
  summary: "Get Lists Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["list.read","tweet.read","users.read"],
  capabilities: ["lists.read"],
  rateLimitBucket: "x-lists",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.ListId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.GetListsPostsResponse,
});

export const x_media_getMediaAnalytics = defineEndpointDescriptor({
  id: "x.media.getMediaAnalytics",
  platform: "x",
  method: "GET",
  path: "/2/media/analytics",
  summary: "Get Media analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read"],
  capabilities: ["media.read"],
  rateLimitBucket: "x-media",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"media_keys","wireName":"media_keys","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":true,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":false,"nullable":false},
    {"name":"media_analytics.fields","wireName":"media_analytics.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    media_keys: Schema.Array(Schema.String),
    start_time: Schema.DateFromString,
    end_time: Schema.DateFromString,
    granularity: Schema.optional(Schema.Union(Schema.Literal("hourly"), Schema.Literal("daily"), Schema.Literal("total"))),
    "media_analytics.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("cta_url_clicks"), Schema.Literal("cta_watch_clicks"), Schema.Literal("media_key"), Schema.Literal("play_from_tap"), Schema.Literal("playback25"), Schema.Literal("playback50"), Schema.Literal("playback75"), Schema.Literal("playback_complete"), Schema.Literal("playback_start"), Schema.Literal("timestamp"), Schema.Literal("timestamped_metrics"), Schema.Literal("video_views"), Schema.Literal("watch_time_ms")))),
  }),
  outputSchema: Models.GetMediaAnalyticsResponse,
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
  requiredScopes: ["tweet.read"],
  capabilities: ["media.read"],
  rateLimitBucket: "x-media",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
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
  requiredScopes: ["tweet.read"],
  capabilities: ["media.read"],
  rateLimitBucket: "x-media",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
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
  requiredScopes: ["media.write"],
  capabilities: ["media.read"],
  rateLimitBucket: "x-media",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
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

export const x_news_getNews = defineEndpointDescriptor({
  id: "x.news.getNews",
  platform: "x",
  method: "GET",
  path: "/2/news/{id}",
  summary: "Get news stories by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["news.read"],
  rateLimitBucket: "x-news",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"news.fields","wireName":"news.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    "news.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("category"), Schema.Literal("cluster_posts_results"), Schema.Literal("contexts"), Schema.Literal("contexts"), Schema.Literal("contexts"), Schema.Literal("contexts"), Schema.Literal("disclaimer"), Schema.Literal("hook"), Schema.Literal("id"), Schema.Literal("keywords"), Schema.Literal("name"), Schema.Literal("summary"), Schema.Literal("updated_at")))),
  }),
  outputSchema: Models.GetNewsResponse,
});

export const x_general_getOpenApiSpec = defineEndpointDescriptor({
  id: "x.general.getOpenApiSpec",
  platform: "x",
  method: "GET",
  path: "/2/openapi.json",
  summary: "Get OpenAPI Spec.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["general.read"],
  rateLimitBucket: "x-general",
  authSchemes: [],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const x_posts_getPostsAnalytics = defineEndpointDescriptor({
  id: "x.posts.getPostsAnalytics",
  platform: "x",
  method: "GET",
  path: "/2/tweets/analytics",
  summary: "Get Posts Analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["posts.read"],
  rateLimitBucket: "x-posts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"ids","wireName":"ids","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":true,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":true,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":false,"nullable":false},
    {"name":"analytics.fields","wireName":"analytics.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ids: Schema.Array(Schema.suspend(() => Models.AnalyticsId)),
    start_time: Schema.DateFromString,
    end_time: Schema.DateFromString,
    granularity: Schema.optional(Schema.Union(Schema.Literal("hourly"), Schema.Literal("weekly"), Schema.Literal("daily"), Schema.Literal("total"))),
    "analytics.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("app_install_attempts"), Schema.Literal("app_opens"), Schema.Literal("bookmarks"), Schema.Literal("detail_expands"), Schema.Literal("email_tweet"), Schema.Literal("engagements"), Schema.Literal("follows"), Schema.Literal("hashtag_clicks"), Schema.Literal("id"), Schema.Literal("impressions"), Schema.Literal("likes"), Schema.Literal("media_views"), Schema.Literal("permalink_clicks"), Schema.Literal("quote_tweets"), Schema.Literal("replies"), Schema.Literal("retweets"), Schema.Literal("shares"), Schema.Literal("timestamp"), Schema.Literal("timestamped_metrics"), Schema.Literal("unfollows"), Schema.Literal("unlikes"), Schema.Literal("url_clicks"), Schema.Literal("user_profile_clicks")))),
  }),
  outputSchema: Models.GetPostsAnalyticsResponse,
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
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["posts.read"],
  rateLimitBucket: "x-posts",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
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
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["posts.read"],
  rateLimitBucket: "x-posts",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
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

export const x_posts_getPostsCountsAll = defineEndpointDescriptor({
  id: "x.posts.getPostsCountsAll",
  platform: "x",
  method: "GET",
  path: "/2/tweets/counts/all",
  summary: "Get Posts Counts All",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["posts.read"],
  rateLimitBucket: "x-posts",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"query","wireName":"query","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"since_id","wireName":"since_id","location":"query","required":false,"nullable":false},
    {"name":"until_id","wireName":"until_id","location":"query","required":false,"nullable":false},
    {"name":"next_token","wireName":"next_token","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":false,"nullable":false},
    {"name":"search_count.fields","wireName":"search_count.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    query: Schema.String,
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
    since_id: Schema.optional(Schema.String),
    until_id: Schema.optional(Schema.String),
    next_token: Schema.optional(Schema.String),
    pagination_token: Schema.optional(Schema.String),
    granularity: Schema.optional(Schema.Union(Schema.Literal("minute"), Schema.Literal("hour"), Schema.Literal("day"))),
    "search_count.fields": Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetPostsCountsAllResponse,
});

export const x_posts_getPostsCountsRecent = defineEndpointDescriptor({
  id: "x.posts.getPostsCountsRecent",
  platform: "x",
  method: "GET",
  path: "/2/tweets/counts/recent",
  summary: "Get Posts Counts Recent",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["posts.read"],
  rateLimitBucket: "x-posts",
  authSchemes: ["BearerToken","OAuth2UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"query","wireName":"query","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"since_id","wireName":"since_id","location":"query","required":false,"nullable":false},
    {"name":"until_id","wireName":"until_id","location":"query","required":false,"nullable":false},
    {"name":"next_token","wireName":"next_token","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"granularity","wireName":"granularity","location":"query","required":false,"nullable":false},
    {"name":"search_count.fields","wireName":"search_count.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    query: Schema.String,
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
    since_id: Schema.optional(Schema.String),
    until_id: Schema.optional(Schema.String),
    next_token: Schema.optional(Schema.String),
    pagination_token: Schema.optional(Schema.String),
    granularity: Schema.optional(Schema.Union(Schema.Literal("minute"), Schema.Literal("hour"), Schema.Literal("day"))),
    "search_count.fields": Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetPostsCountsRecentResponse,
});

export const x_posts_getPostsLikingUsers = defineEndpointDescriptor({
  id: "x.posts.getPostsLikingUsers",
  platform: "x",
  method: "GET",
  path: "/2/tweets/{id}/liking_users",
  summary: "Get Posts Liking Users",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["like.read","tweet.read","users.read"],
  capabilities: ["posts.read"],
  rateLimitBucket: "x-posts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.PostId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetPostsLikingUsersResponse,
});

export const x_posts_getPostsQuotedPosts = defineEndpointDescriptor({
  id: "x.posts.getPostsQuotedPosts",
  platform: "x",
  method: "GET",
  path: "/2/tweets/{id}/quote_tweets",
  summary: "Get Posts Quoted Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["posts.read"],
  rateLimitBucket: "x-posts",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"exclude","wireName":"exclude","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.PostId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    exclude: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("replies"), Schema.Literal("retweets")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.GetPostsQuotedPostsResponse,
});

export const x_posts_getPostsRepostedBy = defineEndpointDescriptor({
  id: "x.posts.getPostsRepostedBy",
  platform: "x",
  method: "GET",
  path: "/2/tweets/{id}/retweeted_by",
  summary: "Get Posts Reposted by",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["posts.read"],
  rateLimitBucket: "x-posts",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.PostId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetPostsRepostedByResponse,
});

export const x_posts_getPostsReposts = defineEndpointDescriptor({
  id: "x.posts.getPostsReposts",
  platform: "x",
  method: "GET",
  path: "/2/tweets/{id}/retweets",
  summary: "Get Posts Reposts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["posts.read"],
  rateLimitBucket: "x-posts",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.PostId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.GetPostsRepostsResponse,
});

export const x_stream_getRuleCounts = defineEndpointDescriptor({
  id: "x.stream.getRuleCounts",
  platform: "x",
  method: "GET",
  path: "/2/tweets/search/stream/rules/counts",
  summary: "Get Rule Counts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"rules_count.fields","wireName":"rules_count.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "rules_count.fields": Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetRuleCountsResponse,
});

export const x_stream_getRules = defineEndpointDescriptor({
  id: "x.stream.getRules",
  platform: "x",
  method: "GET",
  path: "/2/tweets/search/stream/rules",
  summary: "Get filtered-stream rules",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"ids","wireName":"ids","location":"query","required":false,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ids: Schema.optional(Schema.Array(Schema.String)),
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetRulesResponse,
});

export const x_broadcasts_getScheduledBroadcast = defineEndpointDescriptor({
  id: "x.broadcasts.getScheduledBroadcast",
  platform: "x",
  method: "GET",
  path: "/2/broadcasts/scheduled/{id}",
  summary: "Get a scheduled broadcast",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["broadcast.read"],
  capabilities: ["broadcasts.read"],
  rateLimitBucket: "x-broadcasts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Models.GetScheduledBroadcastResponse,
});

export const x_spaces_getSpacesBuyers = defineEndpointDescriptor({
  id: "x.spaces.getSpacesBuyers",
  platform: "x",
  method: "GET",
  path: "/2/spaces/{id}/buyers",
  summary: "Get Space ticket buyers",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["space.read","tweet.read","users.read"],
  capabilities: ["spaces.read"],
  rateLimitBucket: "x-spaces",
  authSchemes: ["OAuth2UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetSpacesBuyersResponse,
});

export const x_spaces_getSpacesByCreatorIds = defineEndpointDescriptor({
  id: "x.spaces.getSpacesByCreatorIds",
  platform: "x",
  method: "GET",
  path: "/2/spaces/by/creator_ids",
  summary: "Get Spaces by Creator IDs",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["space.read","tweet.read","users.read"],
  capabilities: ["spaces.read"],
  rateLimitBucket: "x-spaces",
  authSchemes: ["BearerToken","OAuth2UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"user_ids","wireName":"user_ids","location":"query","required":true,"nullable":false},
    {"name":"space.fields","wireName":"space.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"topic.fields","wireName":"topic.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    user_ids: Schema.Array(Schema.String),
    "space.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("ended_at"), Schema.Literal("id"), Schema.Literal("is_ticketed"), Schema.Literal("lang"), Schema.Literal("participant_count"), Schema.Literal("scheduled_start"), Schema.Literal("started_at"), Schema.Literal("state"), Schema.Literal("subscriber_count"), Schema.Literal("title"), Schema.Literal("updated_at")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("creator_id"), Schema.Literal("host_ids"), Schema.Literal("invited_user_ids"), Schema.Literal("speaker_ids"), Schema.Literal("topic_ids")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "topic.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("description"), Schema.Literal("id"), Schema.Literal("name")))),
  }),
  outputSchema: Models.GetSpacesByCreatorIdsResponse,
});

export const x_spaces_getSpacesById = defineEndpointDescriptor({
  id: "x.spaces.getSpacesById",
  platform: "x",
  method: "GET",
  path: "/2/spaces/{id}",
  summary: "Get Spaces by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["space.read","tweet.read","users.read"],
  capabilities: ["spaces.read"],
  rateLimitBucket: "x-spaces",
  authSchemes: ["BearerToken","OAuth2UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"space.fields","wireName":"space.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"topic.fields","wireName":"topic.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    "space.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("ended_at"), Schema.Literal("id"), Schema.Literal("is_ticketed"), Schema.Literal("lang"), Schema.Literal("participant_count"), Schema.Literal("scheduled_start"), Schema.Literal("started_at"), Schema.Literal("state"), Schema.Literal("subscriber_count"), Schema.Literal("title"), Schema.Literal("updated_at")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("creator_id"), Schema.Literal("host_ids"), Schema.Literal("invited_user_ids"), Schema.Literal("speaker_ids"), Schema.Literal("topic_ids")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "topic.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("description"), Schema.Literal("id"), Schema.Literal("name")))),
  }),
  outputSchema: Models.GetSpacesByIdResponse,
});

export const x_spaces_getSpacesByIds = defineEndpointDescriptor({
  id: "x.spaces.getSpacesByIds",
  platform: "x",
  method: "GET",
  path: "/2/spaces",
  summary: "Get Spaces by IDs",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["space.read","tweet.read","users.read"],
  capabilities: ["spaces.read"],
  rateLimitBucket: "x-spaces",
  authSchemes: ["BearerToken","OAuth2UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"ids","wireName":"ids","location":"query","required":true,"nullable":false},
    {"name":"space.fields","wireName":"space.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"topic.fields","wireName":"topic.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ids: Schema.Array(Schema.String),
    "space.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("ended_at"), Schema.Literal("id"), Schema.Literal("is_ticketed"), Schema.Literal("lang"), Schema.Literal("participant_count"), Schema.Literal("scheduled_start"), Schema.Literal("started_at"), Schema.Literal("state"), Schema.Literal("subscriber_count"), Schema.Literal("title"), Schema.Literal("updated_at")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("creator_id"), Schema.Literal("host_ids"), Schema.Literal("invited_user_ids"), Schema.Literal("speaker_ids"), Schema.Literal("topic_ids")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "topic.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("description"), Schema.Literal("id"), Schema.Literal("name")))),
  }),
  outputSchema: Models.GetSpacesByIdsResponse,
});

export const x_spaces_getSpacesPosts = defineEndpointDescriptor({
  id: "x.spaces.getSpacesPosts",
  platform: "x",
  method: "GET",
  path: "/2/spaces/{id}/tweets",
  summary: "Get Space Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["space.read","tweet.read","users.read"],
  capabilities: ["spaces.read"],
  rateLimitBucket: "x-spaces",
  authSchemes: ["BearerToken","OAuth2UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.GetSpacesPostsResponse,
});

export const x_trends_getTrendsByWoeid = defineEndpointDescriptor({
  id: "x.trends.getTrendsByWoeid",
  platform: "x",
  method: "GET",
  path: "/2/trends/by/woeid/{woeid}",
  summary: "Get Trends by Woeid",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["trends.read"],
  rateLimitBucket: "x-trends",
  authSchemes: ["BearerToken","OAuth2UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"woeid","wireName":"woeid","location":"path","required":true,"nullable":false},
    {"name":"max_trends","wireName":"max_trends","location":"query","required":false,"nullable":false},
    {"name":"trend.fields","wireName":"trend.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    woeid: Schema.Int,
    max_trends: Schema.optional(Schema.Int),
    "trend.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("trend_name"), Schema.Literal("tweet_count")))),
  }),
  outputSchema: Models.GetTrendsByWoeidResponse,
});

export const x_trends_getTrendsPersonalizedTrends = defineEndpointDescriptor({
  id: "x.trends.getTrendsPersonalizedTrends",
  platform: "x",
  method: "GET",
  path: "/2/users/personalized_trends",
  summary: "Get Trends Personalized Trends",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["trends.read"],
  rateLimitBucket: "x-trends",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"personalized_trend.fields","wireName":"personalized_trend.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "personalized_trend.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("category"), Schema.Literal("post_count"), Schema.Literal("trend_name"), Schema.Literal("trending_since")))),
  }),
  outputSchema: Models.GetTrendsPersonalizedTrendsResponse,
});

export const x_usage_getUsage = defineEndpointDescriptor({
  id: "x.usage.getUsage",
  platform: "x",
  method: "GET",
  path: "/2/usage/tweets",
  summary: "Get Usage",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["usage.read"],
  rateLimitBucket: "x-usage",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"days","wireName":"days","location":"query","required":false,"nullable":false},
    {"name":"usage.fields","wireName":"usage.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    days: Schema.optional(Schema.Int),
    "usage.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("cap_reset_day"), Schema.Literal("daily_client_app_usage"), Schema.Literal("daily_project_usage"), Schema.Literal("project_cap"), Schema.Literal("project_id"), Schema.Literal("project_usage")))),
  }),
  outputSchema: Models.GetUsageResponse,
});

export const x_users_getUsersAffiliates = defineEndpointDescriptor({
  id: "x.users.getUsersAffiliates",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/affiliates",
  summary: "Get Users Affiliates",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersAffiliatesResponse,
});

export const x_users_getUsersBlocking = defineEndpointDescriptor({
  id: "x.users.getUsersBlocking",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/blocking",
  summary: "Get Users Blocking",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["block.read","tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersBlockingResponse,
});

export const x_users_getUsersBookmarkFolders = defineEndpointDescriptor({
  id: "x.users.getUsersBookmarkFolders",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/bookmarks/folders",
  summary: "Get Users Bookmark Folders",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["bookmark.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetUsersBookmarkFoldersResponse,
});

export const x_users_getUsersBookmarks = defineEndpointDescriptor({
  id: "x.users.getUsersBookmarks",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/bookmarks",
  summary: "Get Users Bookmarks",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["bookmark.read","tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.GetUsersBookmarksResponse,
});

export const x_users_getUsersBookmarksByFolderId = defineEndpointDescriptor({
  id: "x.users.getUsersBookmarksByFolderId",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/bookmarks/folders/{folder_id}",
  summary: "Get Users Bookmarks by Folder ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["bookmark.read","tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"folder_id","wireName":"folder_id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    folder_id: Schema.String,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
  }),
  outputSchema: Models.GetUsersBookmarksByFolderIdResponse,
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
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
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

export const x_users_getUsersByIds = defineEndpointDescriptor({
  id: "x.users.getUsersByIds",
  platform: "x",
  method: "GET",
  path: "/2/users",
  summary: "Get Users by IDs",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"ids","wireName":"ids","location":"query","required":true,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ids: Schema.Array(Schema.suspend(() => Models.UserId)),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersByIdsResponse,
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
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
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

export const x_users_getUsersByUsernames = defineEndpointDescriptor({
  id: "x.users.getUsersByUsernames",
  platform: "x",
  method: "GET",
  path: "/2/users/by",
  summary: "Get Users by Usernames",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"usernames","wireName":"usernames","location":"query","required":true,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    usernames: Schema.Array(Schema.String),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersByUsernamesResponse,
});

export const x_users_getUsersFollowedLists = defineEndpointDescriptor({
  id: "x.users.getUsersFollowedLists",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/followed_lists",
  summary: "Get Users Followed Lists",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["list.read","tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"list.fields","wireName":"list.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "list.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("follower_count"), Schema.Literal("id"), Schema.Literal("member_count"), Schema.Literal("name"), Schema.Literal("private")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("owner_id")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersFollowedListsResponse,
});

export const x_users_getUsersFollowers = defineEndpointDescriptor({
  id: "x.users.getUsersFollowers",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/followers",
  summary: "Get Users Followers",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["follows.read","tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersFollowersResponse,
});

export const x_users_getUsersFollowing = defineEndpointDescriptor({
  id: "x.users.getUsersFollowing",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/following",
  summary: "Get Users Following",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["follows.read","tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersFollowingResponse,
});

export const x_users_getUsersLikedPosts = defineEndpointDescriptor({
  id: "x.users.getUsersLikedPosts",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/liked_tweets",
  summary: "Get Users Liked Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["like.read","tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.GetUsersLikedPostsResponse,
});

export const x_users_getUsersListMemberships = defineEndpointDescriptor({
  id: "x.users.getUsersListMemberships",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/list_memberships",
  summary: "Get Users List Memberships",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["list.read","tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"list.fields","wireName":"list.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "list.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("follower_count"), Schema.Literal("id"), Schema.Literal("member_count"), Schema.Literal("name"), Schema.Literal("private")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("owner_id")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersListMembershipsResponse,
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
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
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

export const x_users_getUsersMentions = defineEndpointDescriptor({
  id: "x.users.getUsersMentions",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/mentions",
  summary: "Get Users Mentions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"since_id","wireName":"since_id","location":"query","required":false,"nullable":false},
    {"name":"until_id","wireName":"until_id","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
    since_id: Schema.optional(Schema.String),
    until_id: Schema.optional(Schema.String),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.GetUsersMentionsResponse,
});

export const x_users_getUsersMuting = defineEndpointDescriptor({
  id: "x.users.getUsersMuting",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/muting",
  summary: "Get Users Muting",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["mute.read","tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersMutingResponse,
});

export const x_users_getUsersOwnedLists = defineEndpointDescriptor({
  id: "x.users.getUsersOwnedLists",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/owned_lists",
  summary: "Get Users Owned Lists",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["list.read","tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"list.fields","wireName":"list.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "list.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("follower_count"), Schema.Literal("id"), Schema.Literal("member_count"), Schema.Literal("name"), Schema.Literal("private")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("owner_id")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersOwnedListsResponse,
});

export const x_users_getUsersPinnedLists = defineEndpointDescriptor({
  id: "x.users.getUsersPinnedLists",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/pinned_lists",
  summary: "Get Users Pinned Lists",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["list.read","tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"list.fields","wireName":"list.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    "list.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("follower_count"), Schema.Literal("id"), Schema.Literal("member_count"), Schema.Literal("name"), Schema.Literal("private")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("owner_id")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.GetUsersPinnedListsResponse,
});

export const x_users_getUsersPosts = defineEndpointDescriptor({
  id: "x.users.getUsersPosts",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/tweets",
  summary: "Get Users Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"since_id","wireName":"since_id","location":"query","required":false,"nullable":false},
    {"name":"until_id","wireName":"until_id","location":"query","required":false,"nullable":false},
    {"name":"exclude","wireName":"exclude","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
    since_id: Schema.optional(Schema.String),
    until_id: Schema.optional(Schema.String),
    exclude: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("replies"), Schema.Literal("retweets")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.GetUsersPostsResponse,
});

export const x_users_getUsersPublicKey = defineEndpointDescriptor({
  id: "x.users.getUsersPublicKey",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/public_keys",
  summary: "Get public keys",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["dm.read","tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"public_key.fields","wireName":"public_key.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    "public_key.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("identity_public_key_signature"), Schema.Literal("juicebox_config"), Schema.Literal("public_key"), Schema.Literal("public_key_version"), Schema.Literal("signing_public_key")))),
  }),
  outputSchema: Models.GetUsersPublicKeyResponse,
});

export const x_users_getUsersPublicKeys = defineEndpointDescriptor({
  id: "x.users.getUsersPublicKeys",
  platform: "x",
  method: "GET",
  path: "/2/users/public_keys",
  summary: "Get public keys",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["dm.read","tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"ids","wireName":"ids","location":"query","required":true,"nullable":false},
    {"name":"public_key.fields","wireName":"public_key.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ids: Schema.Array(Schema.suspend(() => Models.PublicKeyId)),
    "public_key.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("identity_public_key_signature"), Schema.Literal("juicebox_config"), Schema.Literal("public_key"), Schema.Literal("public_key_version"), Schema.Literal("signing_public_key")))),
  }),
  outputSchema: Models.GetUsersPublicKeysResponse,
});

export const x_users_getUsersRepostsOfMe = defineEndpointDescriptor({
  id: "x.users.getUsersRepostsOfMe",
  platform: "x",
  method: "GET",
  path: "/2/users/reposts_of_me",
  summary: "Get Users Reposts of Me",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["timeline.read","tweet.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.GetUsersRepostsOfMeResponse,
});

export const x_users_getUsersTimeline = defineEndpointDescriptor({
  id: "x.users.getUsersTimeline",
  platform: "x",
  method: "GET",
  path: "/2/users/{id}/timelines/reverse_chronological",
  summary: "Get Users Timeline",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"since_id","wireName":"since_id","location":"query","required":false,"nullable":false},
    {"name":"until_id","wireName":"until_id","location":"query","required":false,"nullable":false},
    {"name":"exclude","wireName":"exclude","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
    since_id: Schema.optional(Schema.String),
    until_id: Schema.optional(Schema.String),
    exclude: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("replies"), Schema.Literal("retweets")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.GetUsersTimelineResponse,
});

export const x_webhooks_getWebhooks = defineEndpointDescriptor({
  id: "x.webhooks.getWebhooks",
  platform: "x",
  method: "GET",
  path: "/2/webhooks",
  summary: "Get webhook",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["webhooks.read"],
  rateLimitBucket: "x-webhooks",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"webhook_config.fields","wireName":"webhook_config.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "webhook_config.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("id"), Schema.Literal("url"), Schema.Literal("valid")))),
  }),
  outputSchema: Models.GetWebhooksResponse,
});

export const x_webhooks_getWebhooksStreamLinks = defineEndpointDescriptor({
  id: "x.webhooks.getWebhooksStreamLinks",
  platform: "x",
  method: "GET",
  path: "/2/tweets/search/webhooks",
  summary: "Get stream links",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["webhooks.read"],
  rateLimitBucket: "x-webhooks",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.GetWebhooksStreamLinksResponse,
});

export const x_broadcasts_goLiveScheduledBroadcast = defineEndpointDescriptor({
  id: "x.broadcasts.goLiveScheduledBroadcast",
  platform: "x",
  method: "POST",
  path: "/2/broadcasts/scheduled/{id}/live",
  summary: "Go live on a scheduled broadcast",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["broadcast.read","broadcast.write"],
  capabilities: ["broadcasts.manage"],
  rateLimitBucket: "x-broadcasts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Models.GoLiveScheduledBroadcastResponse,
});

export const x_posts_hidePostsReply = defineEndpointDescriptor({
  id: "x.posts.hidePostsReply",
  platform: "x",
  method: "PUT",
  path: "/2/tweets/{tweet_id}/hidden",
  summary: "Hide reply",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["tweet.moderate.write","tweet.read","users.read"],
  capabilities: ["posts.manage"],
  rateLimitBucket: "x-posts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"tweet_id","wireName":"tweet_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    tweet_id: Models.PostId,
    body: Models.HidePostsReplyRequest,
  }),
  outputSchema: Models.HidePostsReplyResponse,
});

export const x_chat_initializeChatGroup = defineEndpointDescriptor({
  id: "x.chat.initializeChatGroup",
  platform: "x",
  method: "POST",
  path: "/2/chat/conversations/group/initialize",
  summary: "Initialize Chat Group",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write"],
  capabilities: ["chat.manage"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Models.InitializeChatGroupResponse,
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
  requiredScopes: ["media.write"],
  capabilities: ["media.manage"],
  rateLimitBucket: "x-media",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.InitializeMediaUploadRequest,
  }),
  outputSchema: Models.InitializeMediaUploadResponse,
});

export const x_users_likePost = defineEndpointDescriptor({
  id: "x.users.likePost",
  platform: "x",
  method: "POST",
  path: "/2/users/{id}/likes",
  summary: "Like Post",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["like.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    body: Models.LikePostRequest,
  }),
  outputSchema: Models.LikePostResponse,
});

export const x_broadcasts_listScheduledBroadcasts = defineEndpointDescriptor({
  id: "x.broadcasts.listScheduledBroadcasts",
  platform: "x",
  method: "GET",
  path: "/2/broadcasts/scheduled",
  summary: "List scheduled broadcasts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["broadcast.read"],
  capabilities: ["broadcasts.read"],
  rateLimitBucket: "x-broadcasts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"oldest_start_time","wireName":"oldest_start_time","location":"query","required":false,"nullable":false},
    {"name":"newest_start_time","wireName":"newest_start_time","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    max_results: Schema.optional(Schema.Int),
    oldest_start_time: Schema.optional(Schema.String),
    newest_start_time: Schema.optional(Schema.String),
    pagination_token: Schema.optional(Schema.String),
  }),
  outputSchema: Models.ListScheduledBroadcastsResponse,
});

export const x_chat_markChatConversationRead = defineEndpointDescriptor({
  id: "x.chat.markChatConversationRead",
  platform: "x",
  method: "POST",
  path: "/2/chat/conversations/{id}/read",
  summary: "Mark Conversation as Read",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write","tweet.read","users.read"],
  capabilities: ["chat.manage"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    body: Models.MarkChatConversationReadRequest,
  }),
  outputSchema: Models.MarkChatConversationReadResponse,
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
  requiredScopes: ["media.write"],
  capabilities: ["media.manage"],
  rateLimitBucket: "x-media",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["multipart"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.MediaUploadRequest,
  }),
  outputSchema: Models.MediaUploadResponse,
});

export const x_broadcasts_muteBroadcastChatUser = defineEndpointDescriptor({
  id: "x.broadcasts.muteBroadcastChatUser",
  platform: "x",
  method: "POST",
  path: "/2/broadcasts/{id}/chat/mutes",
  summary: "Mute a user in a broadcast chat",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["broadcast.read","broadcast.write"],
  capabilities: ["broadcasts.manage"],
  rateLimitBucket: "x-broadcasts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    body: Models.MuteBroadcastChatUserRequest,
  }),
  outputSchema: Models.MuteBroadcastChatUserResponse,
});

export const x_users_muteUser = defineEndpointDescriptor({
  id: "x.users.muteUser",
  platform: "x",
  method: "POST",
  path: "/2/users/{id}/muting",
  summary: "Mute User",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["mute.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    body: Models.MuteUserRequest,
  }),
  outputSchema: Models.MuteUserResponse,
});

export const x_users_pinList = defineEndpointDescriptor({
  id: "x.users.pinList",
  platform: "x",
  method: "POST",
  path: "/2/users/{id}/pinned_lists",
  summary: "Pin List",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["list.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    body: Models.PinListRequest,
  }),
  outputSchema: Models.PinListResponse,
});

export const x_lists_removeListsMemberByUserId = defineEndpointDescriptor({
  id: "x.lists.removeListsMemberByUserId",
  platform: "x",
  method: "DELETE",
  path: "/2/lists/{id}/members/{user_id}",
  summary: "Remove a List member",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["list.write","tweet.read","users.read"],
  capabilities: ["lists.manage"],
  rateLimitBucket: "x-lists",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"user_id","wireName":"user_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.ListId,
    user_id: Models.UserId,
  }),
  outputSchema: Models.RemoveListsMemberByUserIdResponse,
});

export const x_users_repostPost = defineEndpointDescriptor({
  id: "x.users.repostPost",
  platform: "x",
  method: "POST",
  path: "/2/users/{id}/retweets",
  summary: "Repost Post",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["tweet.read","tweet.write","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    body: Models.RepostPostRequest,
  }),
  outputSchema: Models.RepostPostResponse,
});

export const x_communities_searchCommunities = defineEndpointDescriptor({
  id: "x.communities.searchCommunities",
  platform: "x",
  method: "GET",
  path: "/2/communities/search",
  summary: "Search Communities",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["communities.read"],
  rateLimitBucket: "x-communities",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"query","wireName":"query","location":"query","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"next_token","wireName":"next_token","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"community.fields","wireName":"community.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    query: Schema.String,
    max_results: Schema.optional(Schema.Int),
    next_token: Schema.optional(Schema.String),
    pagination_token: Schema.optional(Schema.String),
    "community.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("access"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("id"), Schema.Literal("join_policy"), Schema.Literal("member_count"), Schema.Literal("name")))),
  }),
  outputSchema: Models.SearchCommunitiesResponse,
});

export const x_community_notes_searchCommunityNotesWritten = defineEndpointDescriptor({
  id: "x.community-notes.searchCommunityNotesWritten",
  platform: "x",
  method: "GET",
  path: "/2/notes/search/notes_written",
  summary: "Search Community Notes Written",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read"],
  capabilities: ["community-notes.read"],
  rateLimitBucket: "x-community-notes",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"test_mode","wireName":"test_mode","location":"query","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"note.fields","wireName":"note.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    test_mode: Schema.Boolean,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    "note.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("id"), Schema.Literal("info"), Schema.Literal("scoring_status"), Schema.Literal("status"), Schema.Literal("test_result")))),
  }),
  outputSchema: Models.SearchCommunityNotesWrittenResponse,
});

export const x_community_notes_searchEligiblePosts = defineEndpointDescriptor({
  id: "x.community-notes.searchEligiblePosts",
  platform: "x",
  method: "GET",
  path: "/2/notes/search/posts_eligible_for_notes",
  summary: "Search Eligible Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read"],
  capabilities: ["community-notes.read"],
  rateLimitBucket: "x-community-notes",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"test_mode","wireName":"test_mode","location":"query","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"post_selection","wireName":"post_selection","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    test_mode: Schema.Boolean,
    max_results: Schema.optional(Schema.Int),
    pagination_token: Schema.optional(Schema.String),
    post_selection: Schema.optional(Schema.String),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.SearchEligiblePostsResponse,
});

export const x_news_searchNews = defineEndpointDescriptor({
  id: "x.news.searchNews",
  platform: "x",
  method: "GET",
  path: "/2/news/search",
  summary: "Search News",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["news.read"],
  rateLimitBucket: "x-news",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"query","wireName":"query","location":"query","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"max_age_hours","wireName":"max_age_hours","location":"query","required":false,"nullable":false},
    {"name":"news.fields","wireName":"news.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    query: Schema.String,
    max_results: Schema.optional(Schema.Int),
    max_age_hours: Schema.optional(Schema.Int),
    "news.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("category"), Schema.Literal("cluster_posts_results"), Schema.Literal("contexts"), Schema.Literal("contexts"), Schema.Literal("contexts"), Schema.Literal("contexts"), Schema.Literal("disclaimer"), Schema.Literal("hook"), Schema.Literal("id"), Schema.Literal("keywords"), Schema.Literal("name"), Schema.Literal("summary"), Schema.Literal("updated_at")))),
  }),
  outputSchema: Models.SearchNewsResponse,
});

export const x_posts_searchPostsAll = defineEndpointDescriptor({
  id: "x.posts.searchPostsAll",
  platform: "x",
  method: "GET",
  path: "/2/tweets/search/all",
  summary: "Search Posts All",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["posts.read"],
  rateLimitBucket: "x-posts",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"query","wireName":"query","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"since_id","wireName":"since_id","location":"query","required":false,"nullable":false},
    {"name":"until_id","wireName":"until_id","location":"query","required":false,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"next_token","wireName":"next_token","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"sort_order","wireName":"sort_order","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    query: Schema.String,
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
    since_id: Schema.optional(Schema.String),
    until_id: Schema.optional(Schema.String),
    max_results: Schema.optional(Schema.Int),
    next_token: Schema.optional(Schema.String),
    pagination_token: Schema.optional(Schema.String),
    sort_order: Schema.optional(Schema.Union(Schema.Literal("recency"), Schema.Literal("relevancy"))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.SearchPostsAllResponse,
});

export const x_posts_searchPostsRecent = defineEndpointDescriptor({
  id: "x.posts.searchPostsRecent",
  platform: "x",
  method: "GET",
  path: "/2/tweets/search/recent",
  summary: "Search Posts Recent",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["posts.read"],
  rateLimitBucket: "x-posts",
  authSchemes: ["BearerToken","OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"query","wireName":"query","location":"query","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"next_token","wireName":"next_token","location":"query","required":false,"nullable":false},
    {"name":"pagination_token","wireName":"pagination_token","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"since_id","wireName":"since_id","location":"query","required":false,"nullable":false},
    {"name":"until_id","wireName":"until_id","location":"query","required":false,"nullable":false},
    {"name":"sort_order","wireName":"sort_order","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    query: Schema.String,
    max_results: Schema.optional(Schema.Int),
    next_token: Schema.optional(Schema.String),
    pagination_token: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
    since_id: Schema.optional(Schema.String),
    until_id: Schema.optional(Schema.String),
    sort_order: Schema.optional(Schema.Union(Schema.Literal("recency"), Schema.Literal("relevancy"))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_post_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("referenced_posts"), Schema.Literal("username")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.SearchPostsRecentResponse,
});

export const x_spaces_searchSpaces = defineEndpointDescriptor({
  id: "x.spaces.searchSpaces",
  platform: "x",
  method: "GET",
  path: "/2/spaces/search",
  summary: "Search Spaces",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["space.read","tweet.read","users.read"],
  capabilities: ["spaces.read"],
  rateLimitBucket: "x-spaces",
  authSchemes: ["BearerToken","OAuth2UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"query","wireName":"query","location":"query","required":true,"nullable":false},
    {"name":"state","wireName":"state","location":"query","required":false,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"space.fields","wireName":"space.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"topic.fields","wireName":"topic.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    query: Schema.String,
    state: Schema.optional(Schema.Union(Schema.Literal("live"), Schema.Literal("scheduled"), Schema.Literal("all"))),
    max_results: Schema.optional(Schema.Int),
    "space.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("created_at"), Schema.Literal("ended_at"), Schema.Literal("id"), Schema.Literal("is_ticketed"), Schema.Literal("lang"), Schema.Literal("participant_count"), Schema.Literal("scheduled_start"), Schema.Literal("started_at"), Schema.Literal("state"), Schema.Literal("subscriber_count"), Schema.Literal("title"), Schema.Literal("updated_at")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("creator_id"), Schema.Literal("host_ids"), Schema.Literal("invited_user_ids"), Schema.Literal("speaker_ids"), Schema.Literal("topic_ids")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "topic.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("description"), Schema.Literal("id"), Schema.Literal("name")))),
  }),
  outputSchema: Models.SearchSpacesResponse,
});

export const x_users_searchUsers = defineEndpointDescriptor({
  id: "x.users.searchUsers",
  platform: "x",
  method: "GET",
  path: "/2/users/search",
  summary: "Search Users",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["tweet.read","users.read"],
  capabilities: ["users.read"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"query","wireName":"query","location":"query","required":true,"nullable":false},
    {"name":"max_results","wireName":"max_results","location":"query","required":false,"nullable":false},
    {"name":"next_token","wireName":"next_token","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"post.fields","wireName":"post.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    query: Schema.String,
    max_results: Schema.optional(Schema.Int),
    next_token: Schema.optional(Schema.String),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscribes_to_you"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("most_recent_post_id"), Schema.Literal("pinned_post_id")))),
    "post.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("article_title"), Schema.Literal("attachments"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_post"), Schema.Literal("note_request_suggestions"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.SearchUsersResponse,
});

export const x_broadcasts_sendBroadcastChat = defineEndpointDescriptor({
  id: "x.broadcasts.sendBroadcastChat",
  platform: "x",
  method: "POST",
  path: "/2/broadcasts/{id}/chat",
  summary: "Send a chat message to a live broadcast",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["broadcast.read","broadcast.write"],
  capabilities: ["broadcasts.manage"],
  rateLimitBucket: "x-broadcasts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    body: Models.SendBroadcastChatRequest,
  }),
  outputSchema: Models.SendBroadcastChatResponse,
});

export const x_chat_sendChatMessage = defineEndpointDescriptor({
  id: "x.chat.sendChatMessage",
  platform: "x",
  method: "POST",
  path: "/2/chat/conversations/{id}/messages",
  summary: "Send Chat Message",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write","tweet.read","users.read"],
  capabilities: ["chat.manage"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    body: Models.SendChatMessageRequest,
  }),
  outputSchema: Models.SendChatMessageResponse,
});

export const x_chat_sendChatTypingIndicator = defineEndpointDescriptor({
  id: "x.chat.sendChatTypingIndicator",
  platform: "x",
  method: "POST",
  path: "/2/chat/conversations/{id}/typing",
  summary: "Send Typing Indicator",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write","tweet.read","users.read"],
  capabilities: ["chat.manage"],
  rateLimitBucket: "x-chat",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Models.SendChatTypingIndicatorResponse,
});

export const x_stream_streamLabelsCompliance = defineEndpointDescriptor({
  id: "x.stream.streamLabelsCompliance",
  platform: "x",
  method: "GET",
  path: "/2/tweets/label/stream",
  summary: "Stream Post labels",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
  }),
  outputSchema: Models.StreamLabelsComplianceResponse,
});

export const x_stream_streamLikesCompliance = defineEndpointDescriptor({
  id: "x.stream.streamLikesCompliance",
  platform: "x",
  method: "GET",
  path: "/2/likes/compliance/stream",
  summary: "Stream Likes compliance data",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
  }),
  outputSchema: Models.StreamLikesComplianceResponse,
});

export const x_stream_streamLikesFirehose = defineEndpointDescriptor({
  id: "x.stream.streamLikesFirehose",
  platform: "x",
  method: "GET",
  path: "/2/likes/firehose/stream",
  summary: "Stream all Likes",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"partition","wireName":"partition","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"like_with_tweet_author.fields","wireName":"like_with_tweet_author.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"tweet.fields","wireName":"tweet.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    partition: Schema.Int,
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
    "like_with_tweet_author.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("attachments_media_keys"), Schema.Literal("created_at"), Schema.Literal("id"), Schema.Literal("liked_tweet_author_id"), Schema.Literal("liked_tweet_id"), Schema.Literal("timestamp_ms")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("attachments.media_keys"), Schema.Literal("liked_tweet_author_id"), Schema.Literal("liked_tweet_id")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("most_recent_tweet_id"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("pinned_tweet_id"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "tweet.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("attachments"), Schema.Literal("author_id"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_request_suggestions"), Schema.Literal("note_tweet"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("referenced_tweets"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.StreamLikesFirehoseResponse,
});

export const x_stream_streamLikesSample10 = defineEndpointDescriptor({
  id: "x.stream.streamLikesSample10",
  platform: "x",
  method: "GET",
  path: "/2/likes/sample10/stream",
  summary: "Stream sampled Likes",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"partition","wireName":"partition","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"like_with_tweet_author.fields","wireName":"like_with_tweet_author.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"tweet.fields","wireName":"tweet.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    partition: Schema.Int,
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
    "like_with_tweet_author.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("attachments_media_keys"), Schema.Literal("created_at"), Schema.Literal("id"), Schema.Literal("liked_tweet_author_id"), Schema.Literal("liked_tweet_id"), Schema.Literal("timestamp_ms")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("attachments.media_keys"), Schema.Literal("liked_tweet_author_id"), Schema.Literal("liked_tweet_id")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("most_recent_tweet_id"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("pinned_tweet_id"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "tweet.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("attachments"), Schema.Literal("author_id"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_request_suggestions"), Schema.Literal("note_tweet"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("referenced_tweets"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
  }),
  outputSchema: Models.StreamLikesSample10Response,
});

export const x_stream_streamPosts = defineEndpointDescriptor({
  id: "x.stream.streamPosts",
  platform: "x",
  method: "GET",
  path: "/2/tweets/search/stream",
  summary: "Stream filtered Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false},
    {"name":"tweet.fields","wireName":"tweet.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
    "tweet.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("attachments"), Schema.Literal("author_id"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_request_suggestions"), Schema.Literal("note_tweet"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("referenced_tweets"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("entities.note.mentions.username"), Schema.Literal("referenced_tweets.id"), Schema.Literal("referenced_tweets.id.attachments.media_keys"), Schema.Literal("referenced_tweets.id.author_id")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("most_recent_tweet_id"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("pinned_tweet_id"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.StreamPostsResponse,
});

export const x_stream_streamPostsCompliance = defineEndpointDescriptor({
  id: "x.stream.streamPostsCompliance",
  platform: "x",
  method: "GET",
  path: "/2/tweets/compliance/stream",
  summary: "Stream Posts compliance data",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"partition","wireName":"partition","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    partition: Schema.Int,
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
  }),
  outputSchema: Models.StreamPostsComplianceResponse,
});

export const x_stream_streamPostsFirehose = defineEndpointDescriptor({
  id: "x.stream.streamPostsFirehose",
  platform: "x",
  method: "GET",
  path: "/2/tweets/firehose/stream",
  summary: "Stream all Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"tweet.fields","wireName":"tweet.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false},
    {"name":"partition","wireName":"partition","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    "tweet.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("attachments"), Schema.Literal("author_id"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_request_suggestions"), Schema.Literal("note_tweet"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("referenced_tweets"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("entities.note.mentions.username"), Schema.Literal("referenced_tweets.id"), Schema.Literal("referenced_tweets.id.attachments.media_keys"), Schema.Literal("referenced_tweets.id.author_id")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("most_recent_tweet_id"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("pinned_tweet_id"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
    partition: Schema.Int,
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
  }),
  outputSchema: Models.StreamPostsFirehoseResponse,
});

export const x_stream_streamPostsFirehoseEn = defineEndpointDescriptor({
  id: "x.stream.streamPostsFirehoseEn",
  platform: "x",
  method: "GET",
  path: "/2/tweets/firehose/stream/lang/en",
  summary: "Stream English Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"tweet.fields","wireName":"tweet.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false},
    {"name":"partition","wireName":"partition","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    "tweet.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("attachments"), Schema.Literal("author_id"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_request_suggestions"), Schema.Literal("note_tweet"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("referenced_tweets"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("entities.note.mentions.username"), Schema.Literal("referenced_tweets.id"), Schema.Literal("referenced_tweets.id.attachments.media_keys"), Schema.Literal("referenced_tweets.id.author_id")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("most_recent_tweet_id"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("pinned_tweet_id"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
    partition: Schema.Int,
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
  }),
  outputSchema: Models.StreamPostsFirehoseEnResponse,
});

export const x_stream_streamPostsFirehoseJa = defineEndpointDescriptor({
  id: "x.stream.streamPostsFirehoseJa",
  platform: "x",
  method: "GET",
  path: "/2/tweets/firehose/stream/lang/ja",
  summary: "Stream Japanese Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"tweet.fields","wireName":"tweet.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false},
    {"name":"partition","wireName":"partition","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    "tweet.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("attachments"), Schema.Literal("author_id"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_request_suggestions"), Schema.Literal("note_tweet"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("referenced_tweets"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("entities.note.mentions.username"), Schema.Literal("referenced_tweets.id"), Schema.Literal("referenced_tweets.id.attachments.media_keys"), Schema.Literal("referenced_tweets.id.author_id")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("most_recent_tweet_id"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("pinned_tweet_id"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
    partition: Schema.Int,
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
  }),
  outputSchema: Models.StreamPostsFirehoseJaResponse,
});

export const x_stream_streamPostsFirehoseKo = defineEndpointDescriptor({
  id: "x.stream.streamPostsFirehoseKo",
  platform: "x",
  method: "GET",
  path: "/2/tweets/firehose/stream/lang/ko",
  summary: "Stream Korean Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"tweet.fields","wireName":"tweet.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false},
    {"name":"partition","wireName":"partition","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    "tweet.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("attachments"), Schema.Literal("author_id"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_request_suggestions"), Schema.Literal("note_tweet"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("referenced_tweets"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("entities.note.mentions.username"), Schema.Literal("referenced_tweets.id"), Schema.Literal("referenced_tweets.id.attachments.media_keys"), Schema.Literal("referenced_tweets.id.author_id")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("most_recent_tweet_id"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("pinned_tweet_id"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
    partition: Schema.Int,
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
  }),
  outputSchema: Models.StreamPostsFirehoseKoResponse,
});

export const x_stream_streamPostsFirehosePt = defineEndpointDescriptor({
  id: "x.stream.streamPostsFirehosePt",
  platform: "x",
  method: "GET",
  path: "/2/tweets/firehose/stream/lang/pt",
  summary: "Stream Portuguese Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"tweet.fields","wireName":"tweet.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false},
    {"name":"partition","wireName":"partition","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    "tweet.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("attachments"), Schema.Literal("author_id"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_request_suggestions"), Schema.Literal("note_tweet"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("referenced_tweets"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("entities.note.mentions.username"), Schema.Literal("referenced_tweets.id"), Schema.Literal("referenced_tweets.id.attachments.media_keys"), Schema.Literal("referenced_tweets.id.author_id")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("most_recent_tweet_id"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("pinned_tweet_id"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
    partition: Schema.Int,
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
  }),
  outputSchema: Models.StreamPostsFirehosePtResponse,
});

export const x_stream_streamPostsSample = defineEndpointDescriptor({
  id: "x.stream.streamPostsSample",
  platform: "x",
  method: "GET",
  path: "/2/tweets/sample/stream",
  summary: "Stream sampled Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"tweet.fields","wireName":"tweet.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    "tweet.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("attachments"), Schema.Literal("author_id"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_request_suggestions"), Schema.Literal("note_tweet"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("referenced_tweets"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("entities.note.mentions.username"), Schema.Literal("referenced_tweets.id"), Schema.Literal("referenced_tweets.id.attachments.media_keys"), Schema.Literal("referenced_tweets.id.author_id")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("most_recent_tweet_id"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("pinned_tweet_id"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
  }),
  outputSchema: Models.StreamPostsSampleResponse,
});

export const x_stream_streamPostsSample10 = defineEndpointDescriptor({
  id: "x.stream.streamPostsSample10",
  platform: "x",
  method: "GET",
  path: "/2/tweets/sample10/stream",
  summary: "Stream 10% sampled Posts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"tweet.fields","wireName":"tweet.fields","location":"query","required":false,"nullable":false},
    {"name":"expansions","wireName":"expansions","location":"query","required":false,"nullable":false},
    {"name":"media.fields","wireName":"media.fields","location":"query","required":false,"nullable":false},
    {"name":"poll.fields","wireName":"poll.fields","location":"query","required":false,"nullable":false},
    {"name":"user.fields","wireName":"user.fields","location":"query","required":false,"nullable":false},
    {"name":"place.fields","wireName":"place.fields","location":"query","required":false,"nullable":false},
    {"name":"partition","wireName":"partition","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    "tweet.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article"), Schema.Literal("attachments"), Schema.Literal("author_id"), Schema.Literal("card_uri"), Schema.Literal("community_id"), Schema.Literal("context_annotations"), Schema.Literal("conversation_id"), Schema.Literal("created_at"), Schema.Literal("display_text_range"), Schema.Literal("edit_controls"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("lang"), Schema.Literal("matched_media_notes"), Schema.Literal("media_metadata"), Schema.Literal("non_public_metrics"), Schema.Literal("note_request_suggestions"), Schema.Literal("note_tweet"), Schema.Literal("organic_metrics"), Schema.Literal("paid_partnership"), Schema.Literal("possibly_sensitive"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("referenced_tweets"), Schema.Literal("reply_settings"), Schema.Literal("scopes"), Schema.Literal("source"), Schema.Literal("suggested_source_links"), Schema.Literal("suggested_source_links_with_counts"), Schema.Literal("text"), Schema.Literal("withheld")))),
    expansions: Schema.optional(Schema.Array(Schema.Union(Schema.Literal("article.cover_media"), Schema.Literal("article.media_entities"), Schema.Literal("attachments.media_keys"), Schema.Literal("attachments.media_source_tweet"), Schema.Literal("attachments.poll_ids"), Schema.Literal("author_id"), Schema.Literal("edit_history_tweet_ids"), Schema.Literal("entities.mentions.username"), Schema.Literal("geo.place_id"), Schema.Literal("in_reply_to_user_id"), Schema.Literal("entities.note.mentions.username"), Schema.Literal("referenced_tweets.id"), Schema.Literal("referenced_tweets.id.attachments.media_keys"), Schema.Literal("referenced_tweets.id.author_id")))),
    "media.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("alt_text"), Schema.Literal("duration_ms"), Schema.Literal("height"), Schema.Literal("media_key"), Schema.Literal("non_public_metrics"), Schema.Literal("organic_metrics"), Schema.Literal("preview_image_url"), Schema.Literal("promoted_metrics"), Schema.Literal("public_metrics"), Schema.Literal("type"), Schema.Literal("url"), Schema.Literal("variants"), Schema.Literal("width")))),
    "poll.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("duration_minutes"), Schema.Literal("end_datetime"), Schema.Literal("id"), Schema.Literal("options"), Schema.Literal("voting_status")))),
    "user.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("affiliation"), Schema.Literal("confirmed_email"), Schema.Literal("connection_status"), Schema.Literal("created_at"), Schema.Literal("description"), Schema.Literal("entities"), Schema.Literal("id"), Schema.Literal("is_identity_verified"), Schema.Literal("location"), Schema.Literal("most_recent_tweet_id"), Schema.Literal("name"), Schema.Literal("parody"), Schema.Literal("pinned_tweet_id"), Schema.Literal("profile_banner_url"), Schema.Literal("profile_image_url"), Schema.Literal("protected"), Schema.Literal("public_metrics"), Schema.Literal("receives_your_dm"), Schema.Literal("subscription"), Schema.Literal("subscription_type"), Schema.Literal("url"), Schema.Literal("username"), Schema.Literal("verified"), Schema.Literal("verified_followers_count"), Schema.Literal("verified_type"), Schema.Literal("withheld")))),
    "place.fields": Schema.optional(Schema.Array(Schema.Union(Schema.Literal("contained_within"), Schema.Literal("country"), Schema.Literal("country_code"), Schema.Literal("full_name"), Schema.Literal("geo"), Schema.Literal("id"), Schema.Literal("name"), Schema.Literal("place_type")))),
    partition: Schema.Int,
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
  }),
  outputSchema: Models.StreamPostsSample10Response,
});

export const x_stream_streamUsersCompliance = defineEndpointDescriptor({
  id: "x.stream.streamUsersCompliance",
  platform: "x",
  method: "GET",
  path: "/2/users/compliance/stream",
  summary: "Stream Users compliance data",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["stream.read"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"backfill_minutes","wireName":"backfill_minutes","location":"query","required":false,"nullable":false},
    {"name":"partition","wireName":"partition","location":"query","required":true,"nullable":false},
    {"name":"start_time","wireName":"start_time","location":"query","required":false,"nullable":false},
    {"name":"end_time","wireName":"end_time","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    backfill_minutes: Schema.optional(Schema.Int),
    partition: Schema.Int,
    start_time: Schema.optional(Schema.DateFromString),
    end_time: Schema.optional(Schema.DateFromString),
  }),
  outputSchema: Models.StreamUsersComplianceResponse,
});

export const x_users_unblockUsersDms = defineEndpointDescriptor({
  id: "x.users.unblockUsersDms",
  platform: "x",
  method: "POST",
  path: "/2/users/{id}/dm/unblock",
  summary: "Unblock Users Dms",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["dm.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
  }),
  outputSchema: Models.UnblockUsersDmsResponse,
});

export const x_users_unfollowList = defineEndpointDescriptor({
  id: "x.users.unfollowList",
  platform: "x",
  method: "DELETE",
  path: "/2/users/{id}/followed_lists/{list_id}",
  summary: "Unfollow a List",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["list.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"list_id","wireName":"list_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    list_id: Models.ListId,
  }),
  outputSchema: Models.UnfollowListResponse,
});

export const x_users_unfollowUser = defineEndpointDescriptor({
  id: "x.users.unfollowUser",
  platform: "x",
  method: "DELETE",
  path: "/2/users/{source_user_id}/following/{target_user_id}",
  summary: "Unfollow User",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["follows.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"source_user_id","wireName":"source_user_id","location":"path","required":true,"nullable":false},
    {"name":"target_user_id","wireName":"target_user_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    source_user_id: Models.UserId,
    target_user_id: Models.UserId,
  }),
  outputSchema: Models.UnfollowUserResponse,
});

export const x_users_unlikePost = defineEndpointDescriptor({
  id: "x.users.unlikePost",
  platform: "x",
  method: "DELETE",
  path: "/2/users/{id}/likes/{tweet_id}",
  summary: "Unlike Post",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["like.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"tweet_id","wireName":"tweet_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    tweet_id: Models.PostId,
  }),
  outputSchema: Models.UnlikePostResponse,
});

export const x_broadcasts_unmuteBroadcastChatUser = defineEndpointDescriptor({
  id: "x.broadcasts.unmuteBroadcastChatUser",
  platform: "x",
  method: "DELETE",
  path: "/2/broadcasts/{id}/chat/mutes/{user_id}",
  summary: "Unmute a user in a broadcast chat",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["broadcast.read","broadcast.write"],
  capabilities: ["broadcasts.manage"],
  rateLimitBucket: "x-broadcasts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"user_id","wireName":"user_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    user_id: Schema.String,
  }),
  outputSchema: Models.UnmuteBroadcastChatUserResponse,
});

export const x_users_unmuteUser = defineEndpointDescriptor({
  id: "x.users.unmuteUser",
  platform: "x",
  method: "DELETE",
  path: "/2/users/{source_user_id}/muting/{target_user_id}",
  summary: "Unmute User",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["mute.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"source_user_id","wireName":"source_user_id","location":"path","required":true,"nullable":false},
    {"name":"target_user_id","wireName":"target_user_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    source_user_id: Models.UserId,
    target_user_id: Models.UserId,
  }),
  outputSchema: Models.UnmuteUserResponse,
});

export const x_users_unpinList = defineEndpointDescriptor({
  id: "x.users.unpinList",
  platform: "x",
  method: "DELETE",
  path: "/2/users/{id}/pinned_lists/{list_id}",
  summary: "Unpin a List",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["list.write","tweet.read","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"list_id","wireName":"list_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    list_id: Models.ListId,
  }),
  outputSchema: Models.UnpinListResponse,
});

export const x_users_unrepostPost = defineEndpointDescriptor({
  id: "x.users.unrepostPost",
  platform: "x",
  method: "DELETE",
  path: "/2/users/{id}/retweets/{source_tweet_id}",
  summary: "Unrepost Post",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["tweet.read","tweet.write","users.read"],
  capabilities: ["users.manage"],
  rateLimitBucket: "x-users",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"source_tweet_id","wireName":"source_tweet_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.UserId,
    source_tweet_id: Schema.String,
  }),
  outputSchema: Models.UnrepostPostResponse,
});

export const x_activity_updateActivitySubscription = defineEndpointDescriptor({
  id: "x.activity.updateActivitySubscription",
  platform: "x",
  method: "PUT",
  path: "/2/activity/subscriptions/{subscription_id}",
  summary: "Update X activity subscription",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["activity.manage"],
  rateLimitBucket: "x-activity",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"subscription_id","wireName":"subscription_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    subscription_id: Schema.String,
    body: Models.UpdateActivitySubscriptionRequest,
  }),
  outputSchema: Models.UpdateActivitySubscriptionResponse,
});

export const x_lists_updateLists = defineEndpointDescriptor({
  id: "x.lists.updateLists",
  platform: "x",
  method: "PUT",
  path: "/2/lists/{id}",
  summary: "Update List",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["list.write","tweet.read","users.read"],
  capabilities: ["lists.manage"],
  rateLimitBucket: "x-lists",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Models.ListId,
    body: Models.UpdateListsRequest,
  }),
  outputSchema: Models.UpdateListsResponse,
});

export const x_stream_updateRules = defineEndpointDescriptor({
  id: "x.stream.updateRules",
  platform: "x",
  method: "POST",
  path: "/2/tweets/search/stream/rules",
  summary: "Update stream rules",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["stream.manage"],
  rateLimitBucket: "x-stream",
  authSchemes: ["BearerToken"],
  protocols: ["json"],
  parameters: [
    {"name":"dry_run","wireName":"dry_run","location":"query","required":false,"nullable":false},
    {"name":"delete_all","wireName":"delete_all","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    dry_run: Schema.optional(Schema.Boolean),
    delete_all: Schema.optional(Schema.Boolean),
    body: Models.UpdateRulesRequest,
  }),
  outputSchema: Models.UpdateRulesResponse,
});

export const x_broadcasts_updateScheduledBroadcast = defineEndpointDescriptor({
  id: "x.broadcasts.updateScheduledBroadcast",
  platform: "x",
  method: "PUT",
  path: "/2/broadcasts/scheduled/{id}",
  summary: "Update a scheduled broadcast",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["broadcast.read","broadcast.write"],
  capabilities: ["broadcasts.manage"],
  rateLimitBucket: "x-broadcasts",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
    body: Models.UpdateScheduledBroadcastRequest,
  }),
  outputSchema: Models.UpdateScheduledBroadcastResponse,
});

export const x_account_activity_validateAccountActivitySubscription = defineEndpointDescriptor({
  id: "x.account-activity.validateAccountActivitySubscription",
  platform: "x",
  method: "GET",
  path: "/2/account_activity/webhooks/{webhook_id}/subscriptions/all",
  summary: "Validate Account Activity Subscription",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["dm.read","dm.write","tweet.read","users.read"],
  capabilities: ["account-activity.read"],
  rateLimitBucket: "x-account-activity",
  authSchemes: ["OAuth2UserToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"webhook_id","wireName":"webhook_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    webhook_id: Models.WebhookConfigId,
  }),
  outputSchema: Models.ValidateAccountActivitySubscriptionResponse,
});

export const x_webhooks_validateWebhooks = defineEndpointDescriptor({
  id: "x.webhooks.validateWebhooks",
  platform: "x",
  method: "PUT",
  path: "/2/webhooks/{webhook_id}",
  summary: "Validate webhook",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["webhooks.manage"],
  rateLimitBucket: "x-webhooks",
  authSchemes: ["BearerToken","UserToken"],
  protocols: ["json"],
  parameters: [
    {"name":"webhook_id","wireName":"webhook_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    webhook_id: Schema.String,
  }),
  outputSchema: Models.ValidateWebhooksResponse,
});

export const endpointDescriptors = [x_stream_activityStream, x_chat_addChatGroupMembers, x_chat_addConversationKeys, x_lists_addListsMember, x_chat_addUserPublicKey, x_media_appendMediaUpload, x_articles_articleCreateDraft, x_articles_articlePublish, x_users_blockUsersDms, x_chat_chatMediaDownload, x_chat_chatMediaUploadAppend, x_chat_chatMediaUploadFinalize, x_chat_chatMediaUploadInitialize, x_account_activity_createAccountActivitySubscription, x_activity_createActivitySubscription, x_chat_createChatConversation, x_community_notes_createCommunityNotes, x_compliance_createComplianceJobs, x_direct_messages_createDirectMessagesByConversationId, x_direct_messages_createDirectMessagesByParticipantId, x_direct_messages_createDirectMessagesConversation, x_lists_createLists, x_media_createMediaMetadata, x_media_createMediaSubtitles, x_posts_createPosts, x_broadcasts_createScheduledBroadcast, x_users_createUsersBookmark, x_users_createUsersBookmarkFolder, x_webhooks_createWebhookReplayJob, x_webhooks_createWebhooks, x_webhooks_createWebhooksStreamLink, x_account_activity_deleteAccountActivitySubscription, x_activity_deleteActivitySubscription, x_activity_deleteActivitySubscriptionsByIds, x_connections_deleteAllConnections, x_broadcasts_deleteBroadcastChatMessage, x_chat_deleteChatMessages, x_community_notes_deleteCommunityNotes, x_connections_deleteConnectionsByEndpoint, x_connections_deleteConnectionsByUuids, x_direct_messages_deleteDirectMessagesEvents, x_lists_deleteLists, x_media_deleteMediaSubtitles, x_posts_deletePosts, x_broadcasts_deleteScheduledBroadcast, x_users_deleteUsersBookmark, x_webhooks_deleteWebhooks, x_webhooks_deleteWebhooksStreamLink, x_direct_messages_dmConversationsMediaDownload, x_community_notes_evaluateCommunityNotes, x_media_finalizeMediaUpload, x_users_followList, x_users_followUser, x_account_activity_getAccountActivitySubscriptionCount, x_account_activity_getAccountActivitySubscriptions, x_activity_getActivitySubscriptions, x_broadcasts_getBroadcast, x_chat_getChatConversation, x_chat_getChatConversationEvents, x_chat_getChatConversations, x_communities_getCommunitiesById, x_compliance_getComplianceJobs, x_compliance_getComplianceJobsById, x_connections_getConnectionHistory, x_direct_messages_getDirectMessagesEvents, x_direct_messages_getDirectMessagesEventsByConversationId, x_direct_messages_getDirectMessagesEventsById, x_direct_messages_getDirectMessagesEventsByParticipantId, x_lists_getListsById, x_lists_getListsFollowers, x_lists_getListsMembers, x_lists_getListsPosts, x_media_getMediaAnalytics, x_media_getMediaByMediaKey, x_media_getMediaByMediaKeys, x_media_getMediaUploadStatus, x_news_getNews, x_general_getOpenApiSpec, x_posts_getPostsAnalytics, x_posts_getPostsById, x_posts_getPostsByIds, x_posts_getPostsCountsAll, x_posts_getPostsCountsRecent, x_posts_getPostsLikingUsers, x_posts_getPostsQuotedPosts, x_posts_getPostsRepostedBy, x_posts_getPostsReposts, x_stream_getRuleCounts, x_stream_getRules, x_broadcasts_getScheduledBroadcast, x_spaces_getSpacesBuyers, x_spaces_getSpacesByCreatorIds, x_spaces_getSpacesById, x_spaces_getSpacesByIds, x_spaces_getSpacesPosts, x_trends_getTrendsByWoeid, x_trends_getTrendsPersonalizedTrends, x_usage_getUsage, x_users_getUsersAffiliates, x_users_getUsersBlocking, x_users_getUsersBookmarkFolders, x_users_getUsersBookmarks, x_users_getUsersBookmarksByFolderId, x_users_getUsersById, x_users_getUsersByIds, x_users_getUsersByUsername, x_users_getUsersByUsernames, x_users_getUsersFollowedLists, x_users_getUsersFollowers, x_users_getUsersFollowing, x_users_getUsersLikedPosts, x_users_getUsersListMemberships, x_users_getUsersMe, x_users_getUsersMentions, x_users_getUsersMuting, x_users_getUsersOwnedLists, x_users_getUsersPinnedLists, x_users_getUsersPosts, x_users_getUsersPublicKey, x_users_getUsersPublicKeys, x_users_getUsersRepostsOfMe, x_users_getUsersTimeline, x_webhooks_getWebhooks, x_webhooks_getWebhooksStreamLinks, x_broadcasts_goLiveScheduledBroadcast, x_posts_hidePostsReply, x_chat_initializeChatGroup, x_media_initializeMediaUpload, x_users_likePost, x_broadcasts_listScheduledBroadcasts, x_chat_markChatConversationRead, x_media_mediaUpload, x_broadcasts_muteBroadcastChatUser, x_users_muteUser, x_users_pinList, x_lists_removeListsMemberByUserId, x_users_repostPost, x_communities_searchCommunities, x_community_notes_searchCommunityNotesWritten, x_community_notes_searchEligiblePosts, x_news_searchNews, x_posts_searchPostsAll, x_posts_searchPostsRecent, x_spaces_searchSpaces, x_users_searchUsers, x_broadcasts_sendBroadcastChat, x_chat_sendChatMessage, x_chat_sendChatTypingIndicator, x_stream_streamLabelsCompliance, x_stream_streamLikesCompliance, x_stream_streamLikesFirehose, x_stream_streamLikesSample10, x_stream_streamPosts, x_stream_streamPostsCompliance, x_stream_streamPostsFirehose, x_stream_streamPostsFirehoseEn, x_stream_streamPostsFirehoseJa, x_stream_streamPostsFirehoseKo, x_stream_streamPostsFirehosePt, x_stream_streamPostsSample, x_stream_streamPostsSample10, x_stream_streamUsersCompliance, x_users_unblockUsersDms, x_users_unfollowList, x_users_unfollowUser, x_users_unlikePost, x_broadcasts_unmuteBroadcastChatUser, x_users_unmuteUser, x_users_unpinList, x_users_unrepostPost, x_activity_updateActivitySubscription, x_lists_updateLists, x_stream_updateRules, x_broadcasts_updateScheduledBroadcast, x_account_activity_validateAccountActivitySubscription, x_webhooks_validateWebhooks] as const;
