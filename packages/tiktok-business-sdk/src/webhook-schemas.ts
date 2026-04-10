import { z } from "zod";

// --- Base Webhook Event Schema ---

const webhookEventBase = z.object({
  client_key: z.string(),
  event: z.string(),
  create_time: z.number(),
  user_openid: z.string(),
  content: z.string(), // JSON string — needs separate parsing
});

// --- VIDEO Webhook Events (post publishing lifecycle) ---

export const publishEventTypes = {
  FAILED: "post.publish.failed",
  COMPLETE: "post.publish.complete",
  PUBLICLY_AVAILABLE: "post.publish.publicly_available",
  NO_LONGER_PUBLICLY_AVAILABLE: "post.publish.no_longer_publicly_available",
} as const;

export const publishFailedContentSchema = z.object({
  publish_id: z.string(),
  reason: z.string(),
  publish_type: z.literal("DIRECT_PUBLISH"),
});

export const publishCompleteContentSchema = z.object({
  publish_id: z.string(),
  publish_type: z.literal("DIRECT_PUBLISH"),
});

export const publishPubliclyAvailableContentSchema = z.object({
  publish_id: z.string(),
  post_id: z.string(),
  publish_type: z.literal("DIRECT_PUBLISH"),
});

export const publishNoLongerAvailableContentSchema = z.object({
  publish_id: z.string(),
  post_id: z.string(),
  publish_type: z.literal("DIRECT_PUBLISH"),
});

export const publishFailedEventSchema = webhookEventBase.extend({
  event: z.literal(publishEventTypes.FAILED),
});

export const publishCompleteEventSchema = webhookEventBase.extend({
  event: z.literal(publishEventTypes.COMPLETE),
});

export const publishPubliclyAvailableEventSchema = webhookEventBase.extend({
  event: z.literal(publishEventTypes.PUBLICLY_AVAILABLE),
});

export const publishNoLongerAvailableEventSchema = webhookEventBase.extend({
  event: z.literal(publishEventTypes.NO_LONGER_PUBLICLY_AVAILABLE),
});

export const videoWebhookEventSchema = z.union([
  publishFailedEventSchema,
  publishCompleteEventSchema,
  publishPubliclyAvailableEventSchema,
  publishNoLongerAvailableEventSchema,
]);

// --- COMMENT Webhook Events ---

export const commentEventTypes = {
  CREATE: "comment.create",
  DELETE: "comment.delete",
  REPLY_CREATE: "comment.reply.create",
} as const;

export const commentContentSchema = z.object({
  comment_id: z.string(),
  video_id: z.string(),
  parent_comment_id: z.string().optional(),
  text: z.string().optional(),
  user_id: z.string().optional(),
  create_time: z.number().optional(),
});

export const commentWebhookEventSchema = webhookEventBase.extend({
  event: z.enum([
    commentEventTypes.CREATE,
    commentEventTypes.DELETE,
    commentEventTypes.REPLY_CREATE,
  ]),
});

// --- BRAND_MENTION Webhook Events ---

export const mentionEventTypes = {
  VIDEO_MENTION: "brand_mention.video",
  COMMENT_MENTION: "brand_mention.comment",
} as const;

export const mentionContentSchema = z.object({
  video_id: z.string().optional(),
  comment_id: z.string().optional(),
  item_id: z.string().optional(),
});

export const mentionWebhookEventSchema = webhookEventBase.extend({
  event: z.enum([
    mentionEventTypes.VIDEO_MENTION,
    mentionEventTypes.COMMENT_MENTION,
  ]),
});

// --- DIRECT_MESSAGE Webhook Events ---

export const dmEventTypes = {
  RECEIVE: "receive_message",
} as const;

export const dmContentSchema = z.object({
  conversation_id: z.string(),
  message_id: z.string(),
  sender: z.string().optional(),
  message_type: z.string().optional(),
  timestamp: z.number().optional(),
});

export const dmWebhookEventSchema = webhookEventBase.extend({
  event: z.literal(dmEventTypes.RECEIVE),
});

// --- Union of all webhook events ---

export const tiktokWebhookEventSchema = z.union([
  videoWebhookEventSchema,
  commentWebhookEventSchema,
  mentionWebhookEventSchema,
  dmWebhookEventSchema,
]);

// --- Inferred Types ---

export type VideoWebhookEvent = z.infer<typeof videoWebhookEventSchema>;
export type CommentWebhookEvent = z.infer<typeof commentWebhookEventSchema>;
export type MentionWebhookEvent = z.infer<typeof mentionWebhookEventSchema>;
export type DMWebhookEvent = z.infer<typeof dmWebhookEventSchema>;
export type TikTokWebhookEvent = z.infer<typeof tiktokWebhookEventSchema>;
export type PublishFailedContent = z.infer<typeof publishFailedContentSchema>;
export type PublishCompleteContent = z.infer<typeof publishCompleteContentSchema>;
export type PublishPubliclyAvailableContent = z.infer<typeof publishPubliclyAvailableContentSchema>;
export type PublishNoLongerAvailableContent = z.infer<typeof publishNoLongerAvailableContentSchema>;
export type CommentContent = z.infer<typeof commentContentSchema>;
export type MentionContent = z.infer<typeof mentionContentSchema>;
export type DMContent = z.infer<typeof dmContentSchema>;
