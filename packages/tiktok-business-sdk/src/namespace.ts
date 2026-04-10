/**
 * Namespaced API for the TikTok Business SDK.
 *
 * Usage:
 *   import { TikTok } from "@promobase/tiktok-business-sdk";
 *
 *   // OAuth
 *   const oauth = TikTok.OAuth({ clientKey: "...", clientSecret: "...", redirectUri: "..." });
 *   const { token, businessId } = await oauth.completeOAuth(code);
 *
 *   // Client
 *   const tt = TikTok.createClient({ accessToken: token.access_token, businessId });
 *   const { shareId } = await tt.videos.publish({ videoUrl: "...", caption: "Hello" });
 *
 *   // Webhooks
 *   const result = await TikTok.Webhooks.safeParse.video({ body, signature, appSecret });
 */

import {
  createTikTokClient,
  createTikTokClientWithProperties,
  createTikTokOAuth,
  createTikTokWebhooks,
  createTikTokDiscovery,
} from "./clients/index.ts";
import type {
  TikTokClientOptions,
  OAuthConfig,
  WebhookConfig,
  DiscoveryOptions,
} from "./clients/types.ts";

import { TikTokApiClient } from "./api-client.ts";
import type { TikTokApiClientOptions } from "./api-client.ts";
import { TikTokApiError } from "./errors.ts";
import { TikTokRateLimiter } from "./rate-limiter.ts";
import type { TikTokRateLimiterOptions } from "./rate-limiter.ts";
import { TikTokCursor } from "./pagination.ts";
import type { TikTokCursorOptions } from "./pagination.ts";

import {
  verifyWebhookSignature,
  WebhookParseError,
  parseTikTokWebhook,
  parseVideoWebhook,
  parseCommentWebhook,
  parseMentionWebhook,
  parseDMWebhook,
  safeParseTikTokWebhook,
  safeParseVideoWebhook,
  safeParseCommentWebhook,
  safeParseMentionWebhook,
  safeParseDMWebhook,
} from "./webhooks.ts";
import type { WebhookParseOptions, WebhookParseResult } from "./webhooks.ts";

import {
  tiktokWebhookEventSchema,
  videoWebhookEventSchema,
  commentWebhookEventSchema,
  mentionWebhookEventSchema,
  dmWebhookEventSchema,
  publishFailedContentSchema,
  publishCompleteContentSchema,
  publishPubliclyAvailableContentSchema,
  publishNoLongerAvailableContentSchema,
  commentContentSchema,
  mentionContentSchema,
  dmContentSchema,
  publishEventTypes,
  commentEventTypes,
  mentionEventTypes,
  dmEventTypes,
} from "./webhook-schemas.ts";

export const TikTok = {
  /** Create a TikTok Business API client with all organic endpoints. */
  createClient: createTikTokClient,

  /** Create a client with URL property management (requires app credentials). */
  createClientWithProperties: createTikTokClientWithProperties,

  /** Create an OAuth handler for TikTok Business API auth flows. */
  OAuth: createTikTokOAuth,

  /** Create a webhook management client (CRUD for webhook subscriptions). */
  createWebhooks: createTikTokWebhooks,

  /** Create a Discovery API client for advertiser-scoped trending hashtags. */
  createDiscovery: createTikTokDiscovery,

  /** TikTok API error class with code, requestId, and error classification helpers. */
  ApiError: TikTokApiError,

  /** Core HTTP client with rate limiting, retry, and proper error handling. */
  ApiClient: TikTokApiClient,

  /** Async-iterable cursor for paginated TikTok API responses. */
  Cursor: TikTokCursor,

  /** Rate limiter implementing sdk-runtime's RateLimiter interface. */
  RateLimiter: {
    create: (opts?: TikTokRateLimiterOptions) => new TikTokRateLimiter(opts),
  },

  /** Webhook verification, parsing, and Zod schemas. */
  Webhooks: {
    /** Verify HMAC-SHA256 signature on a TikTok webhook payload. */
    verifySignature: verifyWebhookSignature,

    /** Parse and validate webhooks (throws on failure). */
    parse: {
      /** Parse any TikTok webhook event. */
      any: parseTikTokWebhook,
      /** Parse a VIDEO (post publishing) webhook event. */
      video: parseVideoWebhook,
      /** Parse a COMMENT webhook event. */
      comment: parseCommentWebhook,
      /** Parse a BRAND_MENTION webhook event. */
      mention: parseMentionWebhook,
      /** Parse a DIRECT_MESSAGE webhook event. */
      dm: parseDMWebhook,
    },

    /** Parse and validate webhooks (returns Result, never throws). */
    safeParse: {
      /** Safe-parse any TikTok webhook event. */
      any: safeParseTikTokWebhook,
      /** Safe-parse a VIDEO webhook event. */
      video: safeParseVideoWebhook,
      /** Safe-parse a COMMENT webhook event. */
      comment: safeParseCommentWebhook,
      /** Safe-parse a BRAND_MENTION webhook event. */
      mention: safeParseMentionWebhook,
      /** Safe-parse a DIRECT_MESSAGE webhook event. */
      dm: safeParseDMWebhook,
    },

    /** WebhookParseError class for typed error handling. */
    ParseError: WebhookParseError,

    /** Event type constants. */
    events: {
      publish: publishEventTypes,
      comment: commentEventTypes,
      mention: mentionEventTypes,
      dm: dmEventTypes,
    },

    /** Zod schemas for webhook events and their content payloads. */
    schemas: {
      /** Union of all TikTok webhook events. */
      any: tiktokWebhookEventSchema,
      /** VIDEO webhook events (publish lifecycle). */
      video: videoWebhookEventSchema,
      /** COMMENT webhook events. */
      comment: commentWebhookEventSchema,
      /** BRAND_MENTION webhook events. */
      mention: mentionWebhookEventSchema,
      /** DIRECT_MESSAGE webhook events. */
      dm: dmWebhookEventSchema,
      /** Content schemas for parsing the JSON `content` field inside webhook events. */
      content: {
        publishFailed: publishFailedContentSchema,
        publishComplete: publishCompleteContentSchema,
        publishPubliclyAvailable: publishPubliclyAvailableContentSchema,
        publishNoLongerAvailable: publishNoLongerAvailableContentSchema,
        comment: commentContentSchema,
        mention: mentionContentSchema,
        dm: dmContentSchema,
      },
    },
  },
} as const;

export type {
  TikTokClientOptions,
  OAuthConfig,
  WebhookConfig,
  DiscoveryOptions,
  TikTokApiClientOptions,
  TikTokRateLimiterOptions,
  TikTokCursorOptions,
  WebhookParseOptions,
  WebhookParseResult,
};
