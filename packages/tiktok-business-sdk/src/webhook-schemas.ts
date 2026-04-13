import { z } from "zod";

// --- Content Schemas (the JSON inside the `content` string field) ---

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

export const commentContentSchema = z.object({
  comment_id: z.string(),
  video_id: z.string(),
  parent_comment_id: z.string().optional(),
  text: z.string().optional(),
  user_id: z.string().optional(),
  create_time: z.number().optional(),
});

export const mentionContentSchema = z.object({
  video_id: z.string().optional(),
  comment_id: z.string().optional(),
  item_id: z.string().optional(),
});

export const dmContentSchema = z.object({
  conversation_id: z.string(),
  message_id: z.string(),
  sender: z.string().optional(),
  message_type: z.string().optional(),
  timestamp: z.number().optional(),
});

// --- Event Type Constants ---

export const publishEventTypes = {
  FAILED: "post.publish.failed",
  COMPLETE: "post.publish.complete",
  PUBLICLY_AVAILABLE: "post.publish.publicly_available",
  NO_LONGER_PUBLICLY_AVAILABLE: "post.publish.no_longer_publicly_available",
} as const;

export const commentEventTypes = {
  CREATE: "comment.create",
  DELETE: "comment.delete",
  REPLY_CREATE: "comment.reply.create",
} as const;

export const mentionEventTypes = {
  VIDEO_MENTION: "brand_mention.video",
  COMMENT_MENTION: "brand_mention.comment",
} as const;

export const dmEventTypes = {
  RECEIVE: "receive_message",
} as const;

// --- Helper: parse a JSON string field with a given schema ---

function jsonContent<T extends z.ZodType>(schema: T) {
  return z.string().transform((str, ctx) => {
    let parsed: unknown;
    try {
      parsed = JSON.parse(str);
    } catch {
      ctx.addIssue({ code: "custom", message: "Invalid JSON in content field" });
      return z.NEVER;
    }
    const result = schema.safeParse(parsed);
    if (!result.success) {
      ctx.addIssue({
        code: "custom",
        message: `Content validation failed: ${result.error.message}`,
      });
      return z.NEVER;
    }
    return result.data as z.infer<T>;
  });
}

// --- Base fields shared by all TikTok webhook events ---

const baseFields = {
  client_key: z.string(),
  create_time: z.number(),
  user_openid: z.string(),
};

// --- Fully-parsed event schemas (content auto-parsed to typed shape) ---

export const publishFailedEventSchema = z.object({
  ...baseFields,
  event: z.literal(publishEventTypes.FAILED),
  content: jsonContent(publishFailedContentSchema),
});

export const publishCompleteEventSchema = z.object({
  ...baseFields,
  event: z.literal(publishEventTypes.COMPLETE),
  content: jsonContent(publishCompleteContentSchema),
});

export const publishPubliclyAvailableEventSchema = z.object({
  ...baseFields,
  event: z.literal(publishEventTypes.PUBLICLY_AVAILABLE),
  content: jsonContent(publishPubliclyAvailableContentSchema),
});

export const publishNoLongerAvailableEventSchema = z.object({
  ...baseFields,
  event: z.literal(publishEventTypes.NO_LONGER_PUBLICLY_AVAILABLE),
  content: jsonContent(publishNoLongerAvailableContentSchema),
});

export const videoWebhookEventSchema = z.union([
  publishFailedEventSchema,
  publishCompleteEventSchema,
  publishPubliclyAvailableEventSchema,
  publishNoLongerAvailableEventSchema,
]);

export const commentWebhookEventSchema = z.object({
  ...baseFields,
  event: z.enum([
    commentEventTypes.CREATE,
    commentEventTypes.DELETE,
    commentEventTypes.REPLY_CREATE,
  ]),
  content: jsonContent(commentContentSchema),
});

export const mentionWebhookEventSchema = z.object({
  ...baseFields,
  event: z.enum([mentionEventTypes.VIDEO_MENTION, mentionEventTypes.COMMENT_MENTION]),
  content: jsonContent(mentionContentSchema),
});

export const dmWebhookEventSchema = z.object({
  ...baseFields,
  event: z.literal(dmEventTypes.RECEIVE),
  content: jsonContent(dmContentSchema),
});

export const tiktokWebhookEventSchema = z.union([
  videoWebhookEventSchema,
  commentWebhookEventSchema,
  mentionWebhookEventSchema,
  dmWebhookEventSchema,
]);

// --- Inferred Types (content is already parsed) ---

export type PublishFailedEvent = z.infer<typeof publishFailedEventSchema>;
export type PublishCompleteEvent = z.infer<typeof publishCompleteEventSchema>;
export type PublishPubliclyAvailableEvent = z.infer<typeof publishPubliclyAvailableEventSchema>;
export type PublishNoLongerAvailableEvent = z.infer<typeof publishNoLongerAvailableEventSchema>;
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
