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
  getWhatsAppWebhookEvents,
} from "./events.ts";
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
  facebookCommentChangeSchema,
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
  instagramMessageEditChangeSchema,
  instagramMessageReactionChangeSchema,
  instagramMessageSchema,
  instagramMessagingEventSchema,
  instagramPostbackSchema,
  instagramReactionSchema,
  instagramReadSchema,
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

export type WebhookParseOptions = {
  readonly body: WebhookBody;
  readonly signature: string;
  readonly appSecret: string;
};

export type WebhookParseErrorCode = "INVALID_SIGNATURE" | "INVALID_JSON" | "INVALID_PAYLOAD";

export class WebhookParseError extends Error {
  readonly code: WebhookParseErrorCode;
  readonly details?: unknown;

  constructor(code: WebhookParseErrorCode, message: string, details?: unknown) {
    super(message);
    this.name = "WebhookParseError";
    this.code = code;
    this.details = details;
  }
}

export type WebhookParseResult<T> =
  | { readonly success: true; readonly data: T }
  | { readonly success: false; readonly error: WebhookParseError };

async function parseWebhook<TSchema extends v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>>(
  options: WebhookParseOptions,
  schema: TSchema,
): Promise<v.InferOutput<TSchema>> {
  if (!(await verifyWebhookSignature(options.body, options.signature, options.appSecret))) {
    throw new WebhookParseError("INVALID_SIGNATURE", "Invalid webhook signature");
  }

  let input: unknown;
  try {
    input = JSON.parse(webhookBodyToText(options.body)) as unknown;
  } catch (error) {
    throw new WebhookParseError("INVALID_JSON", "Failed to parse webhook body as JSON", error);
  }

  try {
    return v.parse(schema, input);
  } catch (error) {
    throw new WebhookParseError("INVALID_PAYLOAD", "Webhook payload validation failed", error);
  }
}

async function safeParseWebhook<
  TSchema extends v.BaseSchema<unknown, unknown, v.BaseIssue<unknown>>,
>(
  options: WebhookParseOptions,
  schema: TSchema,
): Promise<WebhookParseResult<v.InferOutput<TSchema>>> {
  try {
    return { success: true, data: await parseWebhook(options, schema) };
  } catch (error) {
    const parseError =
      error instanceof WebhookParseError
        ? error
        : new WebhookParseError("INVALID_PAYLOAD", "Webhook payload validation failed", error);
    return { success: false, error: parseError };
  }
}

export const parse = {
  facebook: (options: WebhookParseOptions): Promise<FacebookWebhookPayload> =>
    parseWebhook(options, facebookWebhookPayloadSchema),
  instagram: (options: WebhookParseOptions): Promise<InstagramWebhookPayload> =>
    parseWebhook(options, instagramWebhookPayloadSchema),
  threads: (options: WebhookParseOptions): Promise<ThreadsWebhookPayload> =>
    parseWebhook(options, threadsWebhookPayloadSchema),
  whatsapp: (options: WebhookParseOptions): Promise<WhatsAppWebhookPayload> =>
    parseWebhook(options, whatsappWebhookPayloadSchema),
} as const;

export const safeParse = {
  facebook: (options: WebhookParseOptions): Promise<WebhookParseResult<FacebookWebhookPayload>> =>
    safeParseWebhook(options, facebookWebhookPayloadSchema),
  instagram: (options: WebhookParseOptions): Promise<WebhookParseResult<InstagramWebhookPayload>> =>
    safeParseWebhook(options, instagramWebhookPayloadSchema),
  threads: (options: WebhookParseOptions): Promise<WebhookParseResult<ThreadsWebhookPayload>> =>
    safeParseWebhook(options, threadsWebhookPayloadSchema),
  whatsapp: (options: WebhookParseOptions): Promise<WebhookParseResult<WhatsAppWebhookPayload>> =>
    safeParseWebhook(options, whatsappWebhookPayloadSchema),
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
  },
  instagram: {
    parse: parse.instagram,
    safeParse: safeParse.instagram,
    schema: schemas.instagram,
    events: getInstagramWebhookEvents,
  },
  threads: {
    parse: parse.threads,
    safeParse: safeParse.threads,
    schema: schemas.threads,
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
