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
import { createTikTokTools } from "./ai/index.ts";
import type { CreateTikTokToolsOptions } from "./ai/index.ts";
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
} from "./webhooks.ts";
import type { WebhookParseOptions, WebhookParseResult } from "./webhooks.ts";

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

  /**
   * Create AI tool definitions for TikTok operations.
   * Compatible with Vercel AI SDK — works with any LLM provider.
   *
   * ```ts
   * const tools = TikTok.createTools({ accessToken, businessId });
   * const result = await generateText({ model, tools, prompt: "Post a video" });
   * ```
   */
  createTools: createTikTokTools,

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

  /**
   * Webhook verification, parsing, and schemas.
   *
   * Primary usage — one call, fully parsed, discriminated union:
   * ```ts
   * const result = await TikTok.Webhooks.safeParse({ body, signature, appSecret });
   * if (!result.success) return;
   * switch (result.data.event) {
   *   case "post.publish.publicly_available":
   *     console.log(result.data.content.post_id);  // typed!
   * }
   * ```
   */
  Webhooks: {
    /** Verify + parse any TikTok webhook. Throws on failure. Content is auto-parsed. */
    parse: parseTikTokWebhook,
    /** Verify + parse any TikTok webhook. Returns Result — never throws. Content is auto-parsed. */
    safeParse: safeParseTikTokWebhook,

    /** Verify HMAC-SHA256 signature only (without parsing). */
    verifySignature: verifyWebhookSignature,

    /** Narrowed parsers for specific event categories. */
    video: { parse: parseVideoWebhook, safeParse: safeParseVideoWebhook },
    comment: { parse: parseCommentWebhook, safeParse: safeParseCommentWebhook },
    mention: { parse: parseMentionWebhook, safeParse: safeParseMentionWebhook },
    dm: { parse: parseDMWebhook, safeParse: safeParseDMWebhook },

    /** Error class for typed error handling. */
    ParseError: WebhookParseError,

    /** Event type constants for switch statements. */
    events: {
      publish: publishEventTypes,
      comment: commentEventTypes,
      mention: mentionEventTypes,
      dm: dmEventTypes,
    },

    /** Zod schemas for advanced composition. */
    schemas: {
      any: tiktokWebhookEventSchema,
      video: videoWebhookEventSchema,
      comment: commentWebhookEventSchema,
      mention: mentionWebhookEventSchema,
      dm: dmWebhookEventSchema,
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
  CreateTikTokToolsOptions,
};
