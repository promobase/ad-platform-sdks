export { createInstagramClient, createInstagramOAuth } from "./instagram/index.ts";
export type { InstagramClientOptions } from "./instagram/index.ts";
export type { OAuthConfig as InstagramOAuthConfig } from "./instagram/types.ts";

export { createFacebookPageClient, createFacebookOAuth } from "./facebook/index.ts";
export type { FacebookPageClientOptions } from "./facebook/index.ts";
export type { OAuthConfig as FacebookOAuthConfig } from "./facebook/types.ts";

export { createThreadsClient, createThreadsOAuth } from "./threads/index.ts";
export type { ThreadsClientOptions } from "./threads/index.ts";
export type { OAuthConfig as ThreadsOAuthConfig } from "./threads/types.ts";

export {
  verifyWebhookChallenge,
  verifyWebhookSignature,
  parseInstagramWebhook,
  parseFacebookWebhook,
  parseThreadsWebhook,
} from "./webhooks.ts";

export type {
  IGWebhookPayload,
  IGWebhookMessagingEvent,
  IGWebhookChange,
  FBWebhookPayload,
  FBWebhookMessagingEvent,
  FBWebhookChange,
  ThreadsWebhookPayload,
} from "./webhooks.ts";

export {
  igWebhookPayloadSchema,
  igWebhookMessagingEventSchema,
  igWebhookChangeSchema,
  igWebhookCommentChangeSchema,
  igWebhookMessageEditChangeSchema,
  igWebhookMessageReactionChangeSchema,
  igWebhookMessageSchema,
  igWebhookAttachmentSchema,
  igWebhookReadSchema,
  igWebhookReactionSchema,
  fbWebhookPayloadSchema,
  fbWebhookMessagingEventSchema,
  fbWebhookMessageSchema,
  fbWebhookCommentChangeSchema,
  threadsWebhookPayloadSchema,
} from "./webhooks-schemas.ts";
