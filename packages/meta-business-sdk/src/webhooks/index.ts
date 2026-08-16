import {
  WebhookParseError,
  parseWebhook,
  safeParseWebhook,
  type WebhookParseOptions,
  type WebhookParseResult,
} from "@openpromo/sdk-runtime/webhooks";
import * as v from "valibot";

import { createWhatsAppClient, WhatsAppApiError } from "../clients/whatsapp.ts";
import type {
  WhatsAppClientOptions,
  WhatsAppFetch,
  WhatsAppInteractiveMessage,
  WhatsAppMediaMessage,
  WhatsAppMediaType,
  WhatsAppSendResult,
  WhatsAppTemplateMessage,
  WhatsAppTextMessage,
} from "../clients/whatsapp.ts";
import {
  getFacebookWebhookEvents,
  getInstagramWebhookEvents,
  getThreadsWebhookEvents,
  getWhatsAppWebhookEvents,
} from "./events.ts";
import type { FacebookWebhookEvent, InstagramWebhookEvent, ThreadsWebhookEvent } from "./events.ts";
import {
  facebookWebhookPayloadSchema,
  instagramWebhookPayloadSchema,
  threadsWebhookPayloadSchema,
  whatsappChangeSchema,
  whatsappChangeValueSchema,
  whatsappContactSchema,
  whatsappMessageSchema,
  whatsappMetadataSchema,
  whatsappStatusSchema,
  whatsappWebhookPayloadSchema,
} from "./schemas.ts";
import type {
  FacebookWebhookPayload,
  InstagramWebhookPayload,
  ThreadsWebhookPayload,
  WhatsAppChangeValue,
  WhatsAppMessage,
  WhatsAppStatus,
  WhatsAppWebhookPayload,
} from "./schemas.ts";
import { verifyWebhookChallenge, verifyWebhookSignature, webhookBodyToText } from "./verify.ts";
import type { WebhookBody, WebhookChallengeParams, WebhookChallengeResult } from "./verify.ts";

export type {
  FacebookChange,
  FacebookCommentChange,
  InstagramCommentChange,
  InstagramMessageEditChange,
  InstagramMessageReactionChange,
  FacebookMessage,
  FacebookMessagingEvent,
  FacebookWebhookPayload,
  InstagramChange,
  InstagramMessage,
  InstagramMessagingEvent,
  InstagramWebhookPayload,
  ThreadsWebhookPayload,
  WhatsAppChangeValue,
  WhatsAppMessage,
  WhatsAppStatus,
  WhatsAppWebhookPayload,
} from "./schemas.ts";
export type {
  FacebookWebhookEvent,
  InstagramWebhookEvent,
  ThreadsWebhookEvent,
  WhatsAppWebhookEvent,
} from "./events.ts";
export {
  getFacebookWebhookEvents,
  getInstagramWebhookEvents,
  getWhatsAppWebhookEvents,
} from "./events.ts";
export {
  facebookAttachmentSchema,
  facebookChangeSchema,
  facebookDeliverySchema,
  facebookMessageSchema,
  facebookMessagingEventSchema,
  facebookPostbackSchema,
  facebookReactionSchema,
  facebookReadSchema,
  facebookWebhookPayloadSchema,
  instagramAttachmentSchema,
  instagramChangeSchema,
  instagramCommentChangeSchema,
  instagramDeliverySchema,
  instagramLiveCommentChangeSchema,
  instagramMentionChangeSchema,
  instagramMessageEditChangeSchema,
  instagramMessageReactionChangeSchema,
  instagramMessageSchema,
  instagramMessagingEventSchema,
  instagramPostbackSchema,
  instagramReactionSchema,
  instagramReadSchema,
  instagramStoryInsightsChangeSchema,
  instagramWebhookPayloadSchema,
  threadsWebhookPayloadSchema,
  whatsappChangeSchema,
  whatsappChangeValueSchema,
  whatsappContactSchema,
  whatsappMessageSchema,
  whatsappMetadataSchema,
  whatsappStatusSchema,
  whatsappWebhookPayloadSchema,
} from "./schemas.ts";
export type { WebhookBody, WebhookChallengeParams, WebhookChallengeResult } from "./verify.ts";
export { facebookCommentChangeSchema } from "./schemas.ts";
export { verifyWebhookChallenge, verifyWebhookSignature } from "./verify.ts";
export type {
  WhatsAppClientOptions,
  WhatsAppFetch,
  WhatsAppInteractiveMessage,
  WhatsAppMediaMessage,
  WhatsAppMediaType,
  WhatsAppSendResult,
  WhatsAppTemplateMessage,
  WhatsAppTextMessage,
} from "../clients/whatsapp.ts";
export { createWhatsAppClient, WhatsAppApiError } from "../clients/whatsapp.ts";

export {
  DEFAULT_WEBHOOK_MAX_AGE_SECONDS,
  WebhookParseError,
  parseWebhook,
  safeParseWebhook,
  type WebhookParseErrorCode,
  type WebhookParseOptions,
  type WebhookParseResult,
} from "@openpromo/sdk-runtime/webhooks";

function asParseable<TSchema extends v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>>(
  schema: TSchema,
): { parse: (input: unknown) => v.InferOutput<TSchema> } {
  return { parse: (input) => v.parse(schema, input) };
}

export const parse = {
  facebook: (options: WebhookParseOptions): Promise<FacebookWebhookPayload> =>
    parseWebhook(options, asParseable(facebookWebhookPayloadSchema)),
  instagram: (options: WebhookParseOptions): Promise<InstagramWebhookPayload> =>
    parseWebhook(options, asParseable(instagramWebhookPayloadSchema)),
  threads: (options: WebhookParseOptions): Promise<ThreadsWebhookPayload> =>
    parseWebhook(options, asParseable(threadsWebhookPayloadSchema)),
  whatsapp: (options: WebhookParseOptions): Promise<WhatsAppWebhookPayload> =>
    parseWebhook(options, asParseable(whatsappWebhookPayloadSchema)),
} as const;

export const safeParse = {
  facebook: (options: WebhookParseOptions): Promise<WebhookParseResult<FacebookWebhookPayload>> =>
    safeParseWebhook(options, asParseable(facebookWebhookPayloadSchema)),
  instagram: (options: WebhookParseOptions): Promise<WebhookParseResult<InstagramWebhookPayload>> =>
    safeParseWebhook(options, asParseable(instagramWebhookPayloadSchema)),
  threads: (options: WebhookParseOptions): Promise<WebhookParseResult<ThreadsWebhookPayload>> =>
    safeParseWebhook(options, asParseable(threadsWebhookPayloadSchema)),
  whatsapp: (options: WebhookParseOptions): Promise<WebhookParseResult<WhatsAppWebhookPayload>> =>
    safeParseWebhook(options, asParseable(whatsappWebhookPayloadSchema)),
} as const;

function constructEventsFor<TPayload, TEvent>(
  options: WebhookParseOptions,
  schema: { parse: (input: unknown) => TPayload },
  extract: (payload: TPayload) => readonly TEvent[],
): Promise<readonly TEvent[]> {
  return parseWebhook(options, schema).then(extract);
}

/**
 * Stripe-style one-call convenience: verify signature + parse envelope +
 * extract typed events in a single step. Throws `WebhookParseError` on
 * invalid signature/JSON/payload. Events are `{ type, data, entryId, ... }`
 * tagged unions for exhaustive pattern matching.
 */
export const constructEvents = {
  facebook: (options: WebhookParseOptions): Promise<readonly FacebookWebhookEvent[]> =>
    constructEventsFor(
      options,
      asParseable(facebookWebhookPayloadSchema),
      getFacebookWebhookEvents,
    ),
  instagram: (options: WebhookParseOptions): Promise<readonly InstagramWebhookEvent[]> =>
    constructEventsFor(
      options,
      asParseable(instagramWebhookPayloadSchema),
      getInstagramWebhookEvents,
    ),
  threads: (options: WebhookParseOptions): Promise<readonly ThreadsWebhookEvent[]> =>
    constructEventsFor(options, asParseable(threadsWebhookPayloadSchema), getThreadsWebhookEvents),
} as const;

export const schemas = {
  facebook: facebookWebhookPayloadSchema,
  instagram: instagramWebhookPayloadSchema,
  threads: threadsWebhookPayloadSchema,
  whatsapp: whatsappWebhookPayloadSchema,
} as const;

export const webhooks = {
  verifyChallenge: verifyWebhookChallenge,
  verifySignature: verifyWebhookSignature,
  schemas,
  facebook: {
    parse: parse.facebook,
    safeParse: safeParse.facebook,
    schema: schemas.facebook,
    events: getFacebookWebhookEvents,
    constructEvents: constructEvents.facebook,
  },
  instagram: {
    parse: parse.instagram,
    safeParse: safeParse.instagram,
    schema: schemas.instagram,
    events: getInstagramWebhookEvents,
    constructEvents: constructEvents.instagram,
  },
  threads: {
    parse: parse.threads,
    safeParse: safeParse.threads,
    schema: schemas.threads,
    events: getThreadsWebhookEvents,
    constructEvents: constructEvents.threads,
  },
  whatsapp: {
    parse: parse.whatsapp,
    safeParse: safeParse.whatsapp,
    schema: schemas.whatsapp,
    events: getWhatsAppWebhookEvents,
    createClient: createWhatsAppClient,
    ApiError: WhatsAppApiError,
  },
  ParseError: WebhookParseError,
} as const;
