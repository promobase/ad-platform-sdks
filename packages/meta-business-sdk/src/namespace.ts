/**
 * Direct platform API surfaces for the Graph SDK.
 *
 * Usage:
 *   import { Instagram, createGraphClient } from "@openpromo/meta";
 *   const api = createGraphClient({ accessToken: "..." });
 *   const ig = Instagram.createClient({ api, igAccountId: "..." });
 */

import type { ResolveBatchHandles } from "./batch.ts";
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
} from "./clients/webhooks.ts";
import { createWhatsAppClient } from "./clients/whatsapp.ts";
import { createGraphClient } from "./generated/client-factory.ts";
import type { GraphClientOptions } from "./generated/client-factory.ts";
import {
  createFacebookOAuthAdapter,
  createInstagramOAuthAdapter,
  createThreadsOAuthAdapter,
} from "./oauth-adapters.ts";

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
  createGraphClient,
  OAuth: createFacebookOAuth,
  oauth: createFacebookOAuthAdapter,
  Webhooks: facebookWebhooks,
} as const;

/** Direct Instagram platform surface. */
export const Instagram = {
  createClient: createInstagramClient,
  OAuth: createInstagramOAuth,
  oauth: createInstagramOAuthAdapter,
  Webhooks: instagramWebhooks,
} as const;

/** Direct Threads platform surface. */
export const Threads = {
  createClient: createThreadsClient,
  OAuth: createThreadsOAuth,
  oauth: createThreadsOAuthAdapter,
  Webhooks: threadsWebhooks,
} as const;

/** Direct WhatsApp transport surface. */
export const WhatsApp = {
  createClient: createWhatsAppClient,
} as const;

// Also export types that consumers may need
export type {
  FacebookOAuthConfig,
  FacebookPageClientOptions,
  InstagramClientOptions,
  InstagramOAuthConfig,
  GraphClientOptions,
  ResolveBatchHandles,
  ThreadsClientOptions,
  ThreadsOAuthConfig,
  WebhookParseOptions,
  WebhookParseResult,
};

export { createGraphClient } from "./generated/client-factory.ts";

export {
  createFacebookOAuthAdapter,
  createInstagramOAuthAdapter,
  createThreadsOAuthAdapter,
} from "./oauth-adapters.ts";
