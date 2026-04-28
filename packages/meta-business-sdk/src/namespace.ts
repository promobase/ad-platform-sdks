/**
 * Namespaced API for the Meta Business SDK.
 *
 * Usage:
 *   import { Meta } from "@promobase/meta-business-sdk-ts";
 *   const api = Meta.createClient({ accessToken: "..." });
 *   const ig = Meta.Instagram.createClient({ api, igAccountId: "..." });
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
// Zod schemas
import {
  fbWebhookPayloadSchema,
  igWebhookPayloadSchema,
  threadsWebhookPayloadSchema,
} from "./clients/webhooks-schemas.ts";
import { FacebookApiError } from "./errors.ts";
import type { MetaClientOptions } from "./generated/client-factory.ts";
import { createTypedClient } from "./generated/client-factory.ts";
import type { MetaRateLimiterOptions } from "./rate-limiter.ts";
import { MetaRateLimiter } from "./rate-limiter.ts";

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

  /** Instagram client and OAuth. */
  Instagram: {
    /** Create an Instagram client for publishing, comments, stories, messaging. */
    createClient: createInstagramClient,
    /** Create an Instagram OAuth handler for token exchange and refresh. */
    OAuth: createInstagramOAuth,
  },

  /** Facebook Pages client and OAuth. */
  Facebook: {
    /** Create a Facebook Page client for feed, comments, stories, messaging. */
    createClient: createFacebookPageClient,
    /** Create a Facebook OAuth handler for token exchange and Page tokens. */
    OAuth: createFacebookOAuth,
  },

  /** Threads client and OAuth. */
  Threads: {
    /** Create a Threads client for posts, replies, carousels, insights. */
    createClient: createThreadsClient,
    /** Create a Threads OAuth handler for token exchange and refresh. */
    OAuth: createThreadsOAuth,
  },

  /** Webhook verification, parsing, and Zod schemas. */
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

    /** Zod schemas for advanced validation or composing custom parsers. */
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
