import { createTikTokContentTools } from "./content.ts";
import { createTikTokCommentTools } from "./comments.ts";
import { createTikTokAccountTools } from "./account.ts";
import { createTikTokMessagingTools } from "./messaging.ts";
import type { TikTokClientOptions } from "../clients/types.ts";

export interface CreateTikTokToolsOptions extends TikTokClientOptions {
  include?: ("content" | "comments" | "account" | "messaging")[];
}

/**
 * Create AI tool definitions for TikTok Business API operations.
 * Compatible with Vercel AI SDK's `tool()` format — works with any LLM provider.
 *
 * ```ts
 * import { createTikTokTools } from "@promobase/tiktok-business-sdk/ai";
 * import { generateText } from "ai";
 *
 * const tools = createTikTokTools({ accessToken: "...", businessId: "..." });
 * const result = await generateText({ model, tools, prompt: "Post a video to TikTok" });
 * ```
 */
export function createTikTokTools(opts: CreateTikTokToolsOptions) {
  const include = opts.include ?? ["content", "comments", "account", "messaging"];
  let tools: Record<string, unknown> = {};

  if (include.includes("content")) {
    tools = { ...tools, ...createTikTokContentTools(opts) };
  }

  if (include.includes("comments")) {
    tools = { ...tools, ...createTikTokCommentTools(opts) };
  }

  if (include.includes("account")) {
    tools = { ...tools, ...createTikTokAccountTools(opts) };
  }

  if (include.includes("messaging")) {
    tools = { ...tools, ...createTikTokMessagingTools(opts) };
  }

  return tools;
}

export { createTikTokContentTools } from "./content.ts";
export { createTikTokCommentTools } from "./comments.ts";
export { createTikTokAccountTools } from "./account.ts";
export { createTikTokMessagingTools } from "./messaging.ts";
