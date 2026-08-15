import * as v from "valibot";

// --- Content Schemas (the JSON inside the `content` string field) ---

export const publishFailedContentSchema = v.object({
  publish_id: v.string(),
  reason: v.string(),
  publish_type: v.literal("DIRECT_PUBLISH"),
});

export const publishCompleteContentSchema = v.object({
  publish_id: v.string(),
  publish_type: v.literal("DIRECT_PUBLISH"),
});

export const publishPubliclyAvailableContentSchema = v.object({
  publish_id: v.string(),
  post_id: v.string(),
  publish_type: v.literal("DIRECT_PUBLISH"),
});

export const publishNoLongerAvailableContentSchema = v.object({
  publish_id: v.string(),
  post_id: v.string(),
  publish_type: v.literal("DIRECT_PUBLISH"),
});

const commentTypeSchema = v.union([v.literal("comment"), v.literal("reply")]);
const commentActionSchema = v.union([
  v.literal("insert"),
  v.literal("delete"),
  v.literal("set_to_hidden"),
  v.literal("set_to_friends_only"),
  v.literal("set_to_public"),
]);

/** Content for the official Accounts API `comment.update` event. */
export const commentContentSchema = v.object({
  comment_id: v.number(),
  video_id: v.number(),
  parent_comment_id: v.optional(v.number()),
  comment_type: commentTypeSchema,
  comment_action: commentActionSchema,
  timestamp: v.number(),
  unique_identifier: v.string(),
  text: v.string(),
});

/**
 * Mentions are kept as a compatibility parser. Their management endpoint is
 * separate from the Accounts and Business Messaging webhook categories below.
 */
export const mentionContentSchema = v.object({
  video_id: v.optional(v.string()),
  comment_id: v.optional(v.string()),
  item_id: v.optional(v.string()),
});

const messagingUserSchema = v.object({
  id: v.string(),
  role: v.union([v.literal("business_account"), v.literal("personal_account")]),
});

/**
 * Common fields documented for Business Messaging webhook content. The
 * remaining fields are event/type-specific and are intentionally preserved by
 * the outer webhook payload without inventing a narrower contract.
 */
export const dmContentSchema = v.looseObject({
  from: v.optional(v.string()),
  to: v.optional(v.string()),
  unique_identifier: v.optional(v.string()),
  from_user: v.optional(messagingUserSchema),
  to_user: v.optional(messagingUserSchema),
  conversation_id: v.optional(v.string()),
  message_id: v.optional(v.string()),
  timestamp: v.optional(v.number()),
  type: v.optional(v.string()),
  scene_type: v.optional(v.number()),
  is_follower: v.optional(v.boolean()),
  message_tag: v.optional(
    v.looseObject({
      source: v.optional(v.string()),
    }),
  ),
});

// --- Event Type Constants ---

export const publishEventTypes = {
  FAILED: "post.publish.failed",
  COMPLETE: "post.publish.complete",
  PUBLICLY_AVAILABLE: "post.publish.publicly_available",
  NO_LONGER_PUBLICLY_AVAILABLE: "post.publish.no_longer_publicly_available",
} as const;

/** Accounts API webhook events confirmed by TikTok's v1.3 docs. */
export const commentEventTypes = {
  UPDATE: "comment.update",
} as const;

export const mentionEventTypes = {
  VIDEO_MENTION: "brand_mention.video",
  COMMENT_MENTION: "brand_mention.comment",
} as const;

/** Business Messaging webhook events confirmed by TikTok's v1.3 docs. */
export const dmEventTypes = {
  SEND_MESSAGE: "im_send_msg",
  RECEIVE_MESSAGE: "im_receive_msg",
  RECEIVE_MESSAGE_EU: "im_receive_msg_eu",
  REFERRAL_MESSAGE: "im_referral_msg",
  MARK_READ_MESSAGE: "im_mark_read_msg",
  AUTO_MESSAGE_CONFIG_UPDATE: "im_auto_message_config_update",
  AUTO_MESSAGE_AUDIT_UPDATE: "im_auto_message_audit_update",
  RECEIVE_HIGH_INTENT_COMMENT: "im_receive_high_intent_comment",
} as const;

// --- Helper: parse a JSON string field with a Valibot schema ---

function jsonContent<TSchema extends v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>>(
  schema: TSchema,
) {
  return v.pipe(v.string(), v.parseJson(), schema);
}

// --- Base fields shared by all TikTok webhook events ---

const baseFields = {
  client_key: v.string(),
  create_time: v.number(),
  user_openid: v.string(),
};

// --- Fully-parsed event schemas (content auto-parsed to typed shape) ---

export const publishFailedEventSchema = v.object({
  ...baseFields,
  event: v.literal(publishEventTypes.FAILED),
  content: jsonContent(publishFailedContentSchema),
});

export const publishCompleteEventSchema = v.object({
  ...baseFields,
  event: v.literal(publishEventTypes.COMPLETE),
  content: jsonContent(publishCompleteContentSchema),
});

export const publishPubliclyAvailableEventSchema = v.object({
  ...baseFields,
  event: v.literal(publishEventTypes.PUBLICLY_AVAILABLE),
  content: jsonContent(publishPubliclyAvailableContentSchema),
});

export const publishNoLongerAvailableEventSchema = v.object({
  ...baseFields,
  event: v.literal(publishEventTypes.NO_LONGER_PUBLICLY_AVAILABLE),
  content: jsonContent(publishNoLongerAvailableContentSchema),
});

export const videoWebhookEventSchema = v.union([
  publishFailedEventSchema,
  publishCompleteEventSchema,
  publishPubliclyAvailableEventSchema,
  publishNoLongerAvailableEventSchema,
]);

export const commentWebhookEventSchema = v.object({
  ...baseFields,
  event: v.literal(commentEventTypes.UPDATE),
  content: jsonContent(commentContentSchema),
});

export const mentionWebhookEventSchema = v.object({
  ...baseFields,
  event: v.union([
    v.literal(mentionEventTypes.VIDEO_MENTION),
    v.literal(mentionEventTypes.COMMENT_MENTION),
  ]),
  content: jsonContent(mentionContentSchema),
});

export const dmWebhookEventSchema = v.object({
  ...baseFields,
  event: v.union([
    v.literal(dmEventTypes.SEND_MESSAGE),
    v.literal(dmEventTypes.RECEIVE_MESSAGE),
    v.literal(dmEventTypes.RECEIVE_MESSAGE_EU),
    v.literal(dmEventTypes.REFERRAL_MESSAGE),
    v.literal(dmEventTypes.MARK_READ_MESSAGE),
    v.literal(dmEventTypes.AUTO_MESSAGE_CONFIG_UPDATE),
    v.literal(dmEventTypes.AUTO_MESSAGE_AUDIT_UPDATE),
    v.literal(dmEventTypes.RECEIVE_HIGH_INTENT_COMMENT),
  ]),
  content: jsonContent(dmContentSchema),
});

export const tiktokWebhookEventSchema = v.union([
  videoWebhookEventSchema,
  commentWebhookEventSchema,
  mentionWebhookEventSchema,
  dmWebhookEventSchema,
]);

// --- Inferred Types (content is already parsed) ---

export type PublishFailedEvent = v.InferOutput<typeof publishFailedEventSchema>;
export type PublishCompleteEvent = v.InferOutput<typeof publishCompleteEventSchema>;
export type PublishPubliclyAvailableEvent = v.InferOutput<
  typeof publishPubliclyAvailableEventSchema
>;
export type PublishNoLongerAvailableEvent = v.InferOutput<
  typeof publishNoLongerAvailableEventSchema
>;
export type VideoWebhookEvent = v.InferOutput<typeof videoWebhookEventSchema>;
export type CommentWebhookEvent = v.InferOutput<typeof commentWebhookEventSchema>;
export type MentionWebhookEvent = v.InferOutput<typeof mentionWebhookEventSchema>;
export type DMWebhookEvent = v.InferOutput<typeof dmWebhookEventSchema>;
export type TikTokWebhookEvent = v.InferOutput<typeof tiktokWebhookEventSchema>;

export type PublishFailedContent = v.InferOutput<typeof publishFailedContentSchema>;
export type PublishCompleteContent = v.InferOutput<typeof publishCompleteContentSchema>;
export type PublishPubliclyAvailableContent = v.InferOutput<
  typeof publishPubliclyAvailableContentSchema
>;
export type PublishNoLongerAvailableContent = v.InferOutput<
  typeof publishNoLongerAvailableContentSchema
>;
export type CommentContent = v.InferOutput<typeof commentContentSchema>;
export type MentionContent = v.InferOutput<typeof mentionContentSchema>;
export type DMContent = v.InferOutput<typeof dmContentSchema>;
