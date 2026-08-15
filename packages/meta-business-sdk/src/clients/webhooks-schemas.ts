import * as v from "valibot";

import {
  facebookChangeSchema,
  facebookCommentChangeSchema,
  facebookMessageSchema,
  facebookMessagingEventSchema,
  facebookWebhookPayloadSchema,
  instagramAttachmentSchema,
  instagramChangeSchema,
  instagramCommentChangeSchema,
  instagramMessageEditChangeSchema,
  instagramMessageReactionChangeSchema,
  instagramMessageSchema,
  instagramMessagingEventSchema,
  instagramReactionSchema,
  instagramReadSchema,
  instagramWebhookPayloadSchema,
  threadsWebhookPayloadSchema as canonicalThreadsWebhookPayloadSchema,
} from "../webhooks/schemas.ts";
import { createLegacySchema } from "./valibot-compat.ts";

// Compatibility names for the generated/root API. The underlying schemas are
// the canonical Valibot schemas from the worker-safe webhook leaf.
export const igWebhookAttachmentSchema = createLegacySchema(instagramAttachmentSchema);
export const igWebhookMessageSchema = createLegacySchema(instagramMessageSchema);
export const igWebhookReadSchema = createLegacySchema(instagramReadSchema);
export const igWebhookReactionSchema = createLegacySchema(instagramReactionSchema);
export const igWebhookMessagingEventSchema = createLegacySchema(instagramMessagingEventSchema);
export const igWebhookCommentChangeSchema = createLegacySchema(instagramCommentChangeSchema);
export const igWebhookMessageEditChangeSchema = createLegacySchema(
  instagramMessageEditChangeSchema,
);
export const igWebhookMessageReactionChangeSchema = createLegacySchema(
  instagramMessageReactionChangeSchema,
);
export const igWebhookChangeSchema = createLegacySchema(instagramChangeSchema);
export const igWebhookPayloadSchema = createLegacySchema(instagramWebhookPayloadSchema);

export const fbWebhookMessageSchema = createLegacySchema(facebookMessageSchema);
export const fbWebhookMessagingEventSchema = createLegacySchema(facebookMessagingEventSchema);
export const fbWebhookCommentChangeSchema = createLegacySchema(facebookCommentChangeSchema);
export const fbWebhookPayloadSchema = createLegacySchema(facebookWebhookPayloadSchema);

export const threadsWebhookPayloadSchema = createLegacySchema(canonicalThreadsWebhookPayloadSchema);

// Keep old inferred type names without exposing schema-library-specific types.
export type IGWebhookPayload = v.InferOutput<typeof instagramWebhookPayloadSchema>;
export type IGWebhookMessagingEvent = v.InferOutput<typeof instagramMessagingEventSchema>;
export type IGWebhookChange = v.InferOutput<typeof instagramChangeSchema>;
export type FBWebhookPayload = v.InferOutput<typeof facebookWebhookPayloadSchema>;
export type FBWebhookMessagingEvent = v.InferOutput<typeof facebookMessagingEventSchema>;
export type FBWebhookChange = v.InferOutput<typeof facebookChangeSchema>;
export type ThreadsWebhookPayload = v.InferOutput<typeof canonicalThreadsWebhookPayloadSchema>;
