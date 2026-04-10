/**
 * Namespaced API for the Meta Business SDK.
 *
 * Usage:
 *   import { Meta } from "@promobase/meta-business-sdk-ts";
 *   const api = Meta.createClient({ accessToken: "..." });
 *   const ig = Meta.Instagram.createClient({ api, igAccountId: "..." });
 */

import { createTypedClient } from "./generated/client-factory.ts";
import type { MetaClientOptions } from "./generated/client-factory.ts";
import { FacebookApiError } from "./errors.ts";
import { BatchBuilder } from "./batch.ts";
import type { BatchHandle, ResolveBatchHandles } from "./batch.ts";
import { MetaRateLimiter } from "./rate-limiter.ts";
import type { MetaRateLimiterOptions } from "./rate-limiter.ts";

// Instagram
import { createInstagramClient, createInstagramOAuth } from "./clients/instagram/index.ts";
import type { InstagramClientOptions } from "./clients/instagram/types.ts";
import type { OAuthConfig as InstagramOAuthConfig } from "./clients/instagram/types.ts";

// Facebook
import { createFacebookPageClient, createFacebookOAuth } from "./clients/facebook/index.ts";
import type { FacebookPageClientOptions } from "./clients/facebook/types.ts";
import type { OAuthConfig as FacebookOAuthConfig } from "./clients/facebook/types.ts";

// Threads
import { createThreadsClient, createThreadsOAuth } from "./clients/threads/index.ts";
import type { ThreadsClientOptions } from "./clients/threads/types.ts";
import type { OAuthConfig as ThreadsOAuthConfig } from "./clients/threads/types.ts";

// AI SDK tools
import { createMetaTools, createInstagramTools, createFacebookTools, createThreadsTools, createCampaignTools } from "./ai/index.ts";
import { withMiddleware } from "./ai/middleware.ts";
import { filterTools, filterToolsByName, limitTools } from "./ai/filter.ts";
import { createRouter } from "./ai/router.ts";

// Webhooks
import {
  verifyWebhookChallenge,
  verifyWebhookSignature,
  parseInstagramWebhook,
  parseFacebookWebhook,
  parseThreadsWebhook,
  safeParseInstagramWebhook,
  safeParseFacebookWebhook,
  safeParseThreadsWebhook,
  WebhookParseError,
} from "./clients/webhooks.ts";
import type { WebhookParseOptions, WebhookParseResult } from "./clients/webhooks.ts";

// Zod schemas
import {
  igWebhookPayloadSchema,
  fbWebhookPayloadSchema,
  threadsWebhookPayloadSchema,
} from "./clients/webhooks-schemas.ts";

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

  /** AI SDK tools for LLM agents. */
  AI: {
    /** Create all Meta tools (Instagram, Facebook, Threads, Campaigns) for AI SDK. */
    createTools: createMetaTools,
    /** Create Instagram-specific AI SDK tools. */
    Instagram: createInstagramTools,
    /** Create Facebook-specific AI SDK tools. */
    Facebook: createFacebookTools,
    /** Create Threads-specific AI SDK tools. */
    Threads: createThreadsTools,
    /** Create campaign management AI SDK tools. */
    Campaigns: createCampaignTools,
    /** Wrap tools with before/after/error middleware hooks. */
    withMiddleware,
    /** Filter tools by category (instagram, publish, comments, etc.). */
    filterTools,
    /** Filter tools by name pattern (glob-like with * wildcard). */
    filterToolsByName,
    /** Limit the number of tools returned. */
    limitTools,
    /** Create a two-stage router for scalable tool selection. */
    createRouter,
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
  MetaClientOptions,
  MetaRateLimiterOptions,
  InstagramClientOptions,
  InstagramOAuthConfig,
  FacebookPageClientOptions,
  FacebookOAuthConfig,
  ThreadsClientOptions,
  ThreadsOAuthConfig,
  WebhookParseOptions,
  WebhookParseResult,
  BatchHandle,
  ResolveBatchHandles,
};
