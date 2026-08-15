/**
 * Namespaced API for the Meta Business SDK.
 *
 * Usage:
 *   import { Instagram, createClient } from "@openpromo/meta";
 *   const api = createClient({ accessToken: "..." });
 *   const ig = Instagram.createClient({ api, igAccountId: "..." });
 */

import type { BatchHandle, ResolveBatchHandles } from "./batch.ts";
import { BatchBuilder } from "./batch.ts";
// Facebook
import { createFacebookOAuth, createFacebookPageClient } from "./clients/facebook/index.ts";
import type {
  OAuthConfig as FacebookOAuthConfig,
  FacebookPageClientOptions,
} from "./clients/facebook/types.ts";
// Instagram
import { createInstagramClient, createInstagramOAuth } from "./clients/instagram/index.ts";
import type {
  InstagramClientOptions,
  OAuthConfig as InstagramOAuthConfig,
} from "./clients/instagram/types.ts";
// Threads
import { createThreadsClient, createThreadsOAuth } from "./clients/threads/index.ts";
import type {
  ThreadsClientOptions,
  OAuthConfig as ThreadsOAuthConfig,
} from "./clients/threads/types.ts";
// Valibot-backed compatibility schemas
import {
  fbWebhookPayloadSchema,
  igWebhookPayloadSchema,
  threadsWebhookPayloadSchema,
} from "./clients/webhooks-schemas.ts";
import type { WebhookParseOptions, WebhookParseResult } from "./clients/webhooks.ts";
// Webhooks
import {
  parseFacebookWebhook,
  parseInstagramWebhook,
  parseThreadsWebhook,
  safeParseFacebookWebhook,
  safeParseInstagramWebhook,
  safeParseThreadsWebhook,
  verifyWebhookChallenge,
  verifyWebhookSignature,
  WebhookParseError,
} from "./clients/webhooks.ts";
import { createWhatsAppClient } from "./clients/whatsapp.ts";
import { FacebookApiError } from "./errors.ts";
import type { MetaClientOptions } from "./generated/client-factory.ts";
import { createTypedClient } from "./generated/client-factory.ts";
import type { MetaRateLimiterOptions } from "./rate-limiter.ts";
import { MetaRateLimiter } from "./rate-limiter.ts";

const facebookWebhooks = {
  parse: parseFacebookWebhook,
  safeParse: safeParseFacebookWebhook,
  schema: fbWebhookPayloadSchema,
} as const;

const instagramWebhooks = {
  parse: parseInstagramWebhook,
  safeParse: safeParseInstagramWebhook,
  schema: igWebhookPayloadSchema,
} as const;

const threadsWebhooks = {
  parse: parseThreadsWebhook,
  safeParse: safeParseThreadsWebhook,
  schema: threadsWebhookPayloadSchema,
} as const;

/** Direct Facebook platform surface. */
export const Facebook = {
  createClient: createFacebookPageClient,
  OAuth: createFacebookOAuth,
  Webhooks: facebookWebhooks,
} as const;

/** Direct Instagram platform surface. */
export const Instagram = {
  createClient: createInstagramClient,
  OAuth: createInstagramOAuth,
  Webhooks: instagramWebhooks,
} as const;

/** Direct Threads platform surface. */
export const Threads = {
  createClient: createThreadsClient,
  OAuth: createThreadsOAuth,
  Webhooks: threadsWebhooks,
} as const;

/** Direct WhatsApp transport surface. */
export const WhatsApp = {
  createClient: createWhatsAppClient,
} as const;

/**
 * @deprecated Use the direct `Facebook`, `Instagram`, `Threads`, and
 * `WhatsApp` exports. This wrapper remains for existing consumers.
 */
export const Meta = {
  /** Create a typed Meta Graph API client with 314 node accessors. */
  createClient: createTypedClient,

  /** Facebook API error class with code, subcode, type, fbtrace_id. */
  FacebookApiError,

  /** Batch request builder for combining multiple API calls. */
  BatchBuilder,

  /** Rate limiter that parses Meta's x-app-usage and x-business-use-case-usage headers. */
  RateLimiter: {
    create: (opts?: MetaRateLimiterOptions) => new MetaRateLimiter(opts),
  },

  Facebook,
  Instagram,
  Threads,
  WhatsApp,

  /** Webhook verification, parsing, and Valibot-backed schemas. */
  Webhooks: {
    /** Verify a Meta webhook challenge (GET handler). */
    verifyChallenge: verifyWebhookChallenge,

    /** Verify HMAC-SHA256 signature on a webhook payload. */
    verifySignature: verifyWebhookSignature,

    /** Parse and validate webhooks (throws on failure). */
    parse: {
      instagram: parseInstagramWebhook,
      facebook: parseFacebookWebhook,
      threads: parseThreadsWebhook,
    },

    /** Parse and validate webhooks (returns Result, never throws). */
    safeParse: {
      instagram: safeParseInstagramWebhook,
      facebook: safeParseFacebookWebhook,
      threads: safeParseThreadsWebhook,
    },

    /** WebhookParseError class for typed error handling. */
    ParseError: WebhookParseError,

    /** Compatibility schema adapters for advanced validation/composition. */
    schemas: {
      instagram: igWebhookPayloadSchema,
      facebook: fbWebhookPayloadSchema,
      threads: threadsWebhookPayloadSchema,
    },
  },
} as const;

// Also export types that consumers may need
export type {
  BatchHandle,
  FacebookOAuthConfig,
  FacebookPageClientOptions,
  InstagramClientOptions,
  InstagramOAuthConfig,
  MetaClientOptions,
  MetaRateLimiterOptions,
  ResolveBatchHandles,
  ThreadsClientOptions,
  ThreadsOAuthConfig,
  WebhookParseOptions,
  WebhookParseResult,
};
