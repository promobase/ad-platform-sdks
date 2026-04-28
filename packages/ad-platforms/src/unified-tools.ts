/**
 * Unified AI tools across all ad platforms.
 * Combines Meta (Instagram, Facebook, Threads, campaigns) and TikTok tools
 * into a single tool set for agents.
 */
import { createMetaTools } from "@promobase/meta-business-sdk-ts/ai";
import { createTikTokTools } from "@promobase/tiktok-business-sdk/ai";

type MetaApi = Parameters<typeof createMetaTools>[0]["api"];

export interface CreateAllToolsOptions {
  /** Meta (Facebook/Instagram/Threads/Campaigns) configuration */
  meta?: {
    api: MetaApi;
    igAccountId?: string;
    pageId?: string;
    pageAccessToken?: string;
    threadsUserId?: string;
    threadsAccessToken?: string;
    adAccountId?: string;
    include?: ("instagram" | "facebook" | "threads" | "campaigns")[];
  };

  /** TikTok configuration */
  tiktok?: {
    accessToken: string;
    businessId: string;
  };
}

/**
 * Create a unified tool set combining Meta and TikTok tools.
 * Tools are prefixed by platform: ig_*, fb_*, threads_*, campaign_*, tiktok_*.
 */
export function createAllTools(opts: CreateAllToolsOptions) {
  let tools: Record<string, unknown> = {};

  if (opts.meta) {
    tools = { ...tools, ...createMetaTools(opts.meta) };
  }

  if (opts.tiktok) {
    tools = { ...tools, ...createTikTokTools(opts.tiktok) };
  }

  return tools;
}
