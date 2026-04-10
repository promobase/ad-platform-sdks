import { createTikTokContentTools } from "./content.ts";
import { createTikTokCommentTools } from "./comments.ts";
import { createTikTokAccountTools } from "./account.ts";
import { createTikTokMessagingTools } from "./messaging.ts";
import type { TikTokClientOptions } from "../clients/types.ts";

type ToolCategory = "content" | "comments" | "account" | "messaging";

type ToolsForCategory<C extends ToolCategory, Opts extends TikTokClientOptions> =
  C extends "content" ? ReturnType<typeof createTikTokContentTools>
  : C extends "comments" ? ReturnType<typeof createTikTokCommentTools>
  : C extends "account" ? ReturnType<typeof createTikTokAccountTools>
  : C extends "messaging" ? ReturnType<typeof createTikTokMessagingTools>
  : never;

type MergeTools<Categories extends readonly ToolCategory[], Opts extends TikTokClientOptions> =
  Categories extends readonly [infer Head extends ToolCategory, ...infer Tail extends readonly ToolCategory[]]
    ? ToolsForCategory<Head, Opts> & MergeTools<Tail, Opts>
    : {};

export interface CreateTikTokToolsOptions<C extends readonly ToolCategory[] = readonly ToolCategory[]> extends TikTokClientOptions {
  include?: C;
}

/**
 * Create AI tool definitions for TikTok Business API operations.
 * Compatible with Vercel AI SDK's `tool()` format — works with any LLM provider.
 *
 * The return type reflects exactly which tool categories are included:
 * ```ts
 * const tools = createTikTokTools({ accessToken, businessId, include: ["content"] as const });
 * tools.tt_publish_video  // ✓ exists
 * tools.tt_comment_list   // ✗ type error — not included
 * ```
 */
export function createTikTokTools<const C extends readonly ToolCategory[]>(
  opts: CreateTikTokToolsOptions<C>,
): C extends readonly ToolCategory[] ? MergeTools<C, typeof opts> : MergeTools<readonly ["content", "comments", "account", "messaging"], typeof opts>;
export function createTikTokTools(opts: CreateTikTokToolsOptions): Record<string, unknown> {
  const include = opts.include ?? (["content", "comments", "account", "messaging"] as const);
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

// Routing, filtering, and middleware
export { withMiddleware } from "./middleware.ts";
export type { ToolMiddleware, ToolCallContext } from "./middleware.ts";
export { filterTools, filterToolsByName, limitTools, getToolCategories, getAvailableCategories } from "./filter.ts";
export type { ToolCategory } from "./filter.ts";
export { createRouter } from "./router.ts";
export type { RouterOptions } from "./router.ts";
