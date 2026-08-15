/**
 * Unified AI tools across all ad platforms.
 *
 * Each provider is configured directly by platform. The Graph client may be
 * shared by Facebook, Instagram, and campaigns, but the public configuration
 * does not introduce a family-level grouping.
 */
import {
  createCampaignTools,
  createFacebookTools,
  createInstagramTools,
  createThreadsTools,
  type GraphClient,
} from "@openpromo/meta/ai";
import { createTikTokTools } from "@openpromo/tiktok/ai";

export interface CreateAllToolsOptions {
  /** Facebook Page configuration. */
  facebook?: {
    api: GraphClient;
    pageId: string;
    pageAccessToken: string;
  };

  /** Instagram professional account configuration. */
  instagram?: {
    api: GraphClient;
    igAccountId: string;
  };

  /** Threads profile configuration. */
  threads?: {
    accessToken: string;
    threadsUserId: string;
  };

  /** Ad account configuration for campaign tools. */
  campaigns?: {
    api: GraphClient;
    adAccountId: string;
  };

  /** TikTok configuration. */
  tiktok?: {
    accessToken: string;
    businessId: string;
  };
}

/**
 * Create a unified tool set combining direct platform and campaign tools.
 * Tools are prefixed by platform: ig_*, fb_*, threads_*, campaign_*,
 * tiktok_*.
 */
export function createAllTools(opts: CreateAllToolsOptions) {
  let tools: Record<string, unknown> = {};

  if (opts.facebook) {
    tools = {
      ...tools,
      ...createFacebookTools({
        api: opts.facebook.api,
        pageId: opts.facebook.pageId,
        accessToken: opts.facebook.pageAccessToken,
      }),
    };
  }

  if (opts.instagram) {
    tools = {
      ...tools,
      ...createInstagramTools(opts.instagram),
    };
  }

  if (opts.threads) {
    tools = {
      ...tools,
      ...createThreadsTools(opts.threads),
    };
  }

  if (opts.campaigns) {
    tools = {
      ...tools,
      ...createCampaignTools(opts.campaigns),
    };
  }

  if (opts.tiktok) {
    tools = { ...tools, ...createTikTokTools(opts.tiktok) };
  }

  return tools;
}
