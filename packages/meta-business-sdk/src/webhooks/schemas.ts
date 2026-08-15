import * as v from "valibot";

const looseStringObject = v.looseObject({ id: v.string() });

const attachmentPayloadSchema = v.looseObject({
  id: v.optional(v.string()),
  title: v.optional(v.string()),
  url: v.optional(v.string()),
  sticker_id: v.optional(v.string()),
});

export const facebookAttachmentSchema = v.looseObject({
  type: v.string(),
  payload: v.optional(attachmentPayloadSchema),
});

export const instagramAttachmentSchema = v.looseObject({
  type: v.string(),
  payload: v.optional(attachmentPayloadSchema),
});

const replyToSchema = v.looseObject({
  mid: v.optional(v.string()),
  story: v.optional(
    v.looseObject({
      id: v.string(),
      url: v.string(),
    }),
  ),
});

export const facebookMessageSchema = v.looseObject({
  mid: v.string(),
  text: v.optional(v.string()),
  attachments: v.optional(v.array(facebookAttachmentSchema)),
  reply_to: v.optional(replyToSchema),
  is_echo: v.optional(v.boolean()),
  quick_reply: v.optional(
    v.looseObject({
      payload: v.string(),
    }),
  ),
  is_deleted: v.optional(v.boolean()),
});

export const instagramMessageSchema = v.looseObject({
  mid: v.string(),
  text: v.optional(v.string()),
  attachments: v.optional(v.array(instagramAttachmentSchema)),
  reply_to: v.optional(replyToSchema),
  is_echo: v.optional(v.boolean()),
  is_self: v.optional(v.boolean()),
  quick_reply: v.optional(
    v.looseObject({
      payload: v.string(),
    }),
  ),
  is_deleted: v.optional(v.boolean()),
  is_unsupported: v.optional(v.boolean()),
});

export const facebookMessageEditSchema = v.looseObject({
  mid: v.string(),
  text: v.optional(v.string()),
  num_edit: v.optional(v.number()),
});

export const instagramMessageEditSchema = v.looseObject({
  mid: v.string(),
  text: v.optional(v.nullable(v.string())),
  num_edit: v.optional(v.number()),
});

const optinSchema = v.looseObject({ ref: v.optional(v.string()) });

const accountLinkingSchema = v.looseObject({
  status: v.optional(v.string()),
  authorization_code: v.optional(v.string()),
});

const handoverSchema = v.looseObject({
  previous_owner_app_id: v.optional(v.string()),
  new_owner_app_id: v.optional(v.string()),
  metadata: v.optional(v.string()),
});

export const facebookPostbackSchema = v.looseObject({
  title: v.optional(v.string()),
  payload: v.string(),
  referral: v.optional(v.looseObject({})),
});

export const instagramPostbackSchema = v.looseObject({
  title: v.optional(v.string()),
  payload: v.string(),
  referral: v.optional(v.looseObject({})),
});

export const quickReplySchema = v.looseObject({
  payload: v.string(),
});

export const facebookReadSchema = v.looseObject({
  watermark: v.number(),
  seq: v.optional(v.number()),
});

export const instagramReadSchema = v.union([
  v.looseObject({ mid: v.string() }),
  v.looseObject({ watermark: v.number() }),
]);

export const facebookDeliverySchema = v.looseObject({
  mids: v.array(v.string()),
  watermark: v.optional(v.number()),
  seq: v.optional(v.number()),
});

export const instagramDeliverySchema = v.looseObject({
  mids: v.optional(v.array(v.string())),
  watermark: v.optional(v.number()),
  seq: v.optional(v.number()),
});

export const facebookReactionSchema = v.looseObject({
  mid: v.string(),
  action: v.picklist(["react", "unreact"] as const),
  emoji: v.optional(v.string()),
  reaction: v.optional(v.string()),
});

export const instagramReactionSchema = v.looseObject({
  mid: v.string(),
  action: v.picklist(["react", "unreact"] as const),
  emoji: v.optional(v.string()),
  reaction: v.optional(v.string()),
});

const referralSchema = v.looseObject({
  ref: v.optional(v.string()),
  source: v.optional(v.string()),
  type: v.optional(v.string()),
  ad_id: v.optional(v.string()),
  ads_context_data: v.optional(v.looseObject({})),
});

export const facebookMessagingEventSchema = v.looseObject({
  sender: looseStringObject,
  recipient: looseStringObject,
  timestamp: v.number(),
  message: v.optional(facebookMessageSchema),
  message_edit: v.optional(facebookMessageEditSchema),
  postback: v.optional(facebookPostbackSchema),
  referral: v.optional(referralSchema),
  read: v.optional(facebookReadSchema),
  delivery: v.optional(facebookDeliverySchema),
  reaction: v.optional(facebookReactionSchema),
  optin: v.optional(optinSchema),
  account_linking: v.optional(accountLinkingSchema),
  pass_thread_control: v.optional(handoverSchema),
  take_thread_control: v.optional(handoverSchema),
  request_thread_control: v.optional(handoverSchema),
});

export const instagramMessagingEventSchema = v.looseObject({
  sender: looseStringObject,
  recipient: looseStringObject,
  timestamp: v.number(),
  message: v.optional(instagramMessageSchema),
  message_edit: v.optional(instagramMessageEditSchema),
  reply_to: v.optional(replyToSchema),
  postback: v.optional(instagramPostbackSchema),
  referral: v.optional(referralSchema),
  read: v.optional(instagramReadSchema),
  delivery: v.optional(instagramDeliverySchema),
  reaction: v.optional(instagramReactionSchema),
  optin: v.optional(optinSchema),
  account_linking: v.optional(accountLinkingSchema),
  pass_thread_control: v.optional(handoverSchema),
  take_thread_control: v.optional(handoverSchema),
  request_thread_control: v.optional(handoverSchema),
});

export const facebookCommentChangeSchema = v.looseObject({
  field: v.literal("feed"),
  value: v.looseObject({
    item: v.optional(v.string()),
    verb: v.optional(v.string()),
    comment_id: v.optional(v.string()),
    parent_id: v.optional(v.string()),
    post_id: v.optional(v.string()),
    message: v.optional(v.string()),
    from: v.optional(
      v.looseObject({
        id: v.string(),
        name: v.optional(v.string()),
      }),
    ),
    created_time: v.optional(v.number()),
    is_hidden: v.optional(v.boolean()),
    post: v.optional(
      v.looseObject({
        id: v.string(),
        permalink_url: v.optional(v.string()),
        type: v.optional(v.string()),
        status_type: v.optional(v.string()),
        is_published: v.optional(v.boolean()),
        updated_time: v.optional(v.number()),
        promotion_status: v.optional(v.string()),
      }),
    ),
    reaction_type: v.optional(v.string()),
    photo_id: v.optional(v.string()),
    video_id: v.optional(v.string()),
    link: v.optional(v.string()),
    photo_ids: v.optional(v.array(v.string())),
  }),
});

export const instagramCommentChangeSchema = v.looseObject({
  field: v.literal("comments"),
  value: v.looseObject({
    id: v.optional(v.string()),
    comment_id: v.optional(v.string()),
    parent_id: v.optional(v.string()),
    text: v.optional(v.string()),
    verb: v.optional(v.string()),
    from: v.optional(
      v.looseObject({
        id: v.optional(v.string()),
        username: v.optional(v.string()),
        self_ig_scoped_id: v.optional(v.string()),
      }),
    ),
    media: v.optional(
      v.looseObject({
        id: v.optional(v.string()),
        media_product_type: v.optional(v.string()),
        ad_id: v.optional(v.string()),
        ad_title: v.optional(v.string()),
        original_media_id: v.optional(v.string()),
      }),
    ),
    created_time: v.optional(v.number()),
    timestamp: v.optional(v.number()),
  }),
});

export const instagramMessageEditChangeSchema = v.looseObject({
  field: v.literal("message_edit"),
  value: v.looseObject({
    mid: v.string(),
    text: v.optional(v.nullable(v.string())),
    num_edit: v.optional(v.number()),
    timestamp: v.optional(v.number()),
    from: v.optional(
      v.looseObject({
        id: v.optional(v.string()),
        username: v.optional(v.string()),
      }),
    ),
  }),
});

export const instagramMessageReactionChangeSchema = v.looseObject({
  field: v.literal("message_reactions"),
  value: v.looseObject({
    mid: v.string(),
    action: v.optional(v.picklist(["react", "unreact"] as const)),
    emoji: v.optional(v.string()),
    reaction: v.optional(v.string()),
    verb: v.optional(v.picklist(["add", "remove"] as const)),
    timestamp: v.optional(v.number()),
    from: v.optional(
      v.looseObject({
        id: v.optional(v.string()),
        username: v.optional(v.string()),
      }),
    ),
    sender: v.optional(
      v.looseObject({
        id: v.optional(v.string()),
        username: v.optional(v.string()),
      }),
    ),
  }),
});

export const instagramMentionChangeSchema = v.looseObject({
  field: v.literal("mentions"),
  value: v.looseObject({}),
});

export const instagramLiveCommentChangeSchema = v.looseObject({
  field: v.literal("live_comments"),
  value: v.looseObject({}),
});

export const instagramStoryInsightsChangeSchema = v.looseObject({
  field: v.literal("story_insights"),
  value: v.looseObject({}),
});

export const facebookChangeSchema = v.union([facebookCommentChangeSchema]);

export const instagramChangeSchema = v.variant("field", [
  instagramCommentChangeSchema,
  instagramMessageEditChangeSchema,
  instagramMessageReactionChangeSchema,
  instagramMentionChangeSchema,
  instagramLiveCommentChangeSchema,
  instagramStoryInsightsChangeSchema,
]);

export const facebookWebhookPayloadSchema = v.looseObject({
  object: v.literal("page"),
  entry: v.array(
    v.looseObject({
      id: v.string(),
      time: v.number(),
      messaging: v.optional(v.array(facebookMessagingEventSchema)),
      standby: v.optional(v.array(facebookMessagingEventSchema)),
      changes: v.optional(v.array(facebookChangeSchema)),
    }),
  ),
});

export const instagramWebhookPayloadSchema = v.looseObject({
  object: v.literal("instagram"),
  entry: v.array(
    v.looseObject({
      id: v.string(),
      time: v.number(),
      messaging: v.optional(v.array(instagramMessagingEventSchema)),
      standby: v.optional(v.array(instagramMessagingEventSchema)),
      changes: v.optional(v.array(instagramChangeSchema)),
    }),
  ),
});

const whatsappMediaSchema = v.looseObject({
  id: v.optional(v.string()),
  mime_type: v.optional(v.string()),
  sha256: v.optional(v.string()),
  caption: v.optional(v.string()),
  filename: v.optional(v.string()),
});

const whatsappInteractiveSchema = v.looseObject({
  type: v.string(),
  header: v.optional(v.looseObject({})),
  body: v.optional(v.looseObject({ text: v.optional(v.string()) })),
  footer: v.optional(v.looseObject({ text: v.optional(v.string()) })),
  action: v.optional(v.looseObject({})),
  button_reply: v.optional(v.looseObject({ id: v.string(), title: v.optional(v.string()) })),
  list_reply: v.optional(v.looseObject({ id: v.string(), title: v.optional(v.string()) })),
  nfm_reply: v.optional(v.looseObject({})),
});

const whatsappReferralSchema = v.looseObject({
  source_type: v.optional(v.string()),
  source_id: v.optional(v.string()),
  source_url: v.optional(v.string()),
  headline: v.optional(v.string()),
  body: v.optional(v.string()),
  media_type: v.optional(v.string()),
  image_url: v.optional(v.string()),
  video_url: v.optional(v.string()),
});

export const whatsappMessageSchema = v.looseObject({
  from: v.string(),
  id: v.string(),
  timestamp: v.string(),
  type: v.string(),
  context: v.optional(v.looseObject({ from: v.optional(v.string()), id: v.optional(v.string()) })),
  text: v.optional(v.looseObject({ body: v.string() })),
  image: v.optional(whatsappMediaSchema),
  audio: v.optional(whatsappMediaSchema),
  video: v.optional(whatsappMediaSchema),
  document: v.optional(whatsappMediaSchema),
  sticker: v.optional(whatsappMediaSchema),
  location: v.optional(v.looseObject({})),
  contacts: v.optional(v.array(v.looseObject({}))),
  interactive: v.optional(whatsappInteractiveSchema),
  button: v.optional(
    v.looseObject({ text: v.optional(v.string()), payload: v.optional(v.string()) }),
  ),
  reaction: v.optional(v.looseObject({ message_id: v.string(), emoji: v.string() })),
  referral: v.optional(whatsappReferralSchema),
  errors: v.optional(v.array(v.looseObject({}))),
});

export const whatsappStatusSchema = v.looseObject({
  id: v.string(),
  status: v.picklist(["sent", "delivered", "read", "failed", "deleted"] as const),
  timestamp: v.string(),
  recipient_id: v.optional(v.string()),
  conversation: v.optional(v.looseObject({})),
  pricing: v.optional(v.looseObject({})),
  errors: v.optional(v.array(v.looseObject({}))),
});

export const whatsappContactSchema = v.looseObject({
  profile: v.optional(v.looseObject({ name: v.optional(v.string()) })),
  wa_id: v.string(),
});

export const whatsappMetadataSchema = v.looseObject({
  display_phone_number: v.optional(v.string()),
  phone_number_id: v.string(),
});

export const whatsappChangeValueSchema = v.looseObject({
  messaging_product: v.literal("whatsapp"),
  metadata: whatsappMetadataSchema,
  contacts: v.optional(v.array(whatsappContactSchema)),
  messages: v.optional(v.array(whatsappMessageSchema)),
  statuses: v.optional(v.array(whatsappStatusSchema)),
  errors: v.optional(v.array(v.looseObject({}))),
});

export const whatsappChangeSchema = v.looseObject({
  field: v.literal("messages"),
  value: whatsappChangeValueSchema,
});

export const whatsappWebhookPayloadSchema = v.looseObject({
  object: v.literal("whatsapp_business_account"),
  entry: v.array(
    v.looseObject({
      id: v.string(),
      changes: v.array(
        v.looseObject({
          field: v.literal("messages"),
          value: whatsappChangeValueSchema,
        }),
      ),
    }),
  ),
});

export const threadsWebhookPayloadSchema = v.looseObject({
  app_id: v.string(),
  topic: v.picklist(["moderate", "interaction"] as const),
  target_id: v.string(),
  time: v.number(),
  subscription_id: v.string(),
  values: v.looseObject({
    field: v.picklist(["replies", "mentions", "delete", "publish"] as const),
    value: v.looseObject({
      id: v.optional(v.string()),
      username: v.optional(v.string()),
      text: v.optional(v.string()),
      media_type: v.optional(v.string()),
      permalink: v.optional(v.string()),
      timestamp: v.optional(v.string()),
      replied_to: v.optional(v.looseObject({ id: v.string() })),
      root_post: v.optional(
        v.looseObject({
          id: v.string(),
          owner_id: v.string(),
          username: v.string(),
        }),
      ),
      owner: v.optional(v.looseObject({ owner_id: v.string() })),
      deleted_at: v.optional(v.string()),
    }),
  }),
});

export type FacebookWebhookPayload = v.InferOutput<typeof facebookWebhookPayloadSchema>;
export type FacebookMessagingEvent = v.InferOutput<typeof facebookMessagingEventSchema>;
export type FacebookChange = v.InferOutput<typeof facebookChangeSchema>;
export type FacebookMessage = v.InferOutput<typeof facebookMessageSchema>;
export type InstagramWebhookPayload = v.InferOutput<typeof instagramWebhookPayloadSchema>;
export type InstagramMessagingEvent = v.InferOutput<typeof instagramMessagingEventSchema>;
export type InstagramChange = v.InferOutput<typeof instagramChangeSchema>;
export type InstagramMessage = v.InferOutput<typeof instagramMessageSchema>;
export type ThreadsWebhookPayload = v.InferOutput<typeof threadsWebhookPayloadSchema>;
export type WhatsAppWebhookPayload = v.InferOutput<typeof whatsappWebhookPayloadSchema>;
export type WhatsAppChangeValue = v.InferOutput<typeof whatsappChangeValueSchema>;
export type WhatsAppMessage = v.InferOutput<typeof whatsappMessageSchema>;
export type WhatsAppStatus = v.InferOutput<typeof whatsappStatusSchema>;
