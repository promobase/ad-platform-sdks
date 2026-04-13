import { z } from "zod";

// --- Instagram Webhook Schemas ---

export const igWebhookAttachmentSchema = z.object({
  type: z.string(),
  payload: z
    .object({
      url: z.string().optional(),
    })
    .optional(),
});

export const igWebhookMessageSchema = z.object({
  mid: z.string(),
  text: z.string().optional(),
  attachments: z.array(igWebhookAttachmentSchema).optional(),
  reply_to: z
    .object({
      mid: z.string().optional(),
      story: z.object({ id: z.string(), url: z.string() }).optional(),
    })
    .optional(),
  is_echo: z.boolean().optional(),
});

export const igWebhookReadSchema = z.object({
  watermark: z.number(),
});

export const igWebhookReactionSchema = z.object({
  mid: z.string(),
  action: z.enum(["react", "unreact"]),
  emoji: z.string().optional(),
  reaction: z.string().optional(),
});

export const igWebhookMessagingEventSchema = z.object({
  sender: z.object({ id: z.string() }),
  recipient: z.object({ id: z.string() }),
  timestamp: z.number(),
  message: igWebhookMessageSchema.optional(),
  read: igWebhookReadSchema.optional(),
  reaction: igWebhookReactionSchema.optional(),
});

export const igWebhookCommentChangeSchema = z.object({
  field: z.literal("comments"),
  value: z.object({
    id: z.string().optional(),
    comment_id: z.string().optional(),
    parent_id: z.string().optional(),
    text: z.string().optional(),
    verb: z.string().optional(),
    from: z.object({ id: z.string(), username: z.string() }).optional(),
    media: z
      .object({
        id: z.string(),
        media_product_type: z.string().optional(),
      })
      .optional(),
    created_time: z.number().optional(),
  }),
});

export const igWebhookMessageEditChangeSchema = z.object({
  field: z.literal("message_edit"),
  value: z.object({
    mid: z.string(),
    text: z.string().optional(),
    num_edit: z.number().optional(),
    timestamp: z.number().optional(),
    from: z.object({ id: z.string(), username: z.string() }).optional(),
  }),
});

export const igWebhookMessageReactionChangeSchema = z.object({
  field: z.literal("message_reactions"),
  value: z.object({
    mid: z.string(),
    action: z.enum(["react", "unreact"]),
    emoji: z.string().optional(),
    reaction: z.string().optional(),
    timestamp: z.number().optional(),
    from: z.object({ id: z.string(), username: z.string() }).optional(),
  }),
});

export const igWebhookChangeSchema = z.discriminatedUnion("field", [
  igWebhookCommentChangeSchema,
  igWebhookMessageEditChangeSchema,
  igWebhookMessageReactionChangeSchema,
]);

export const igWebhookPayloadSchema = z.object({
  object: z.literal("instagram"),
  entry: z.array(
    z.object({
      id: z.string(),
      time: z.number(),
      messaging: z.array(igWebhookMessagingEventSchema).optional(),
      changes: z.array(igWebhookChangeSchema).optional(),
    }),
  ),
});

// --- Facebook Webhook Schemas ---

export const fbWebhookMessageSchema = z.object({
  mid: z.string(),
  text: z.string().optional(),
  attachments: z
    .array(
      z.object({
        type: z.string(),
        payload: z.object({ url: z.string().optional() }).optional(),
      }),
    )
    .optional(),
  reply_to: z.object({ mid: z.string() }).optional(),
  is_echo: z.boolean().optional(),
});

export const fbWebhookMessagingEventSchema = z.object({
  sender: z.object({ id: z.string() }),
  recipient: z.object({ id: z.string() }),
  timestamp: z.number(),
  message: fbWebhookMessageSchema.optional(),
  read: z.object({ watermark: z.number() }).optional(),
  reaction: z
    .object({
      mid: z.string(),
      action: z.enum(["react", "unreact"]),
      emoji: z.string().optional(),
    })
    .optional(),
});

export const fbWebhookCommentChangeSchema = z.object({
  field: z.literal("feed"),
  value: z.object({
    item: z.string().optional(),
    verb: z.enum(["add", "edited", "remove", "hide"]).optional(),
    comment_id: z.string().optional(),
    parent_id: z.string().optional(),
    post_id: z.string().optional(),
    message: z.string().optional(),
    from: z.object({ id: z.string(), name: z.string() }).optional(),
    created_time: z.number().optional(),
    is_hidden: z.boolean().optional(),
  }),
});

export const fbWebhookPayloadSchema = z.object({
  object: z.literal("page"),
  entry: z.array(
    z.object({
      id: z.string(),
      time: z.number(),
      messaging: z.array(fbWebhookMessagingEventSchema).optional(),
      changes: z.array(fbWebhookCommentChangeSchema).optional(),
    }),
  ),
});

// --- Threads Webhook Schemas ---

export const threadsWebhookPayloadSchema = z.object({
  app_id: z.string(),
  topic: z.enum(["moderate", "interaction"]),
  target_id: z.string(),
  time: z.number(),
  subscription_id: z.string(),
  values: z.object({
    field: z.enum(["replies", "mentions", "delete", "publish"]),
    value: z.object({
      id: z.string().optional(),
      username: z.string().optional(),
      text: z.string().optional(),
      media_type: z.string().optional(),
      permalink: z.string().optional(),
      timestamp: z.string().optional(),
      replied_to: z.object({ id: z.string() }).optional(),
      root_post: z
        .object({ id: z.string(), owner_id: z.string(), username: z.string() })
        .optional(),
      owner: z.object({ owner_id: z.string() }).optional(),
      deleted_at: z.string().optional(),
    }),
  }),
});

// --- Inferred Types ---

export type IGWebhookPayload = z.infer<typeof igWebhookPayloadSchema>;
export type IGWebhookMessagingEvent = z.infer<typeof igWebhookMessagingEventSchema>;
export type IGWebhookChange = z.infer<typeof igWebhookChangeSchema>;
export type FBWebhookPayload = z.infer<typeof fbWebhookPayloadSchema>;
export type FBWebhookMessagingEvent = z.infer<typeof fbWebhookMessagingEventSchema>;
export type FBWebhookChange = z.infer<typeof fbWebhookCommentChangeSchema>;
export type ThreadsWebhookPayload = z.infer<typeof threadsWebhookPayloadSchema>;
