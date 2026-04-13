import { createAccount } from "./account.ts";
import { createComments } from "./comments.ts";
import { createDiscovery, createDiscoveryMusic } from "./discovery.ts";
import { createMentions } from "./mentions.ts";
import { createMessaging } from "./messaging.ts";
import { createOAuth } from "./oauth.ts";
import { createPhotos } from "./photos.ts";
import { createProperties } from "./properties.ts";
import { createSparkAds } from "./spark-ads.ts";
import type { DiscoveryOptions, OAuthConfig, TikTokClientOptions, WebhookConfig } from "./types.ts";
import { createVideos } from "./videos.ts";
import { createWebhooks } from "./webhooks.ts";

export type * from "./types.ts";

export function createTikTokClient(opts: TikTokClientOptions) {
  return {
    videos: createVideos(opts),
    photos: createPhotos(opts),
    comments: createComments(opts),
    account: createAccount(opts),
    sparkAds: createSparkAds(opts),
    discovery: createDiscoveryMusic(opts),
    mentions: createMentions(opts),
    messaging: createMessaging(opts),
  };
}

/**
 * Create a TikTok client with URL property management.
 * Requires app-level credentials for property verification.
 */
export function createTikTokClientWithProperties(
  opts: TikTokClientOptions & { appId: string; appSecret: string },
) {
  return {
    ...createTikTokClient(opts),
    properties: createProperties(opts),
  };
}

export function createTikTokOAuth(config: OAuthConfig) {
  return createOAuth(config);
}

export function createTikTokWebhooks(config: WebhookConfig) {
  return createWebhooks(config);
}

/**
 * Create a Discovery API client for advertiser-scoped trending hashtag endpoints.
 * Uses advertiser_id from Marketing API authentication.
 */
export function createTikTokDiscovery(opts: DiscoveryOptions) {
  return createDiscovery(opts);
}
